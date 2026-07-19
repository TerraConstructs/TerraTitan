#!/usr/bin/env node
// Deterministically reconstruct a TerraConstructs `<service>-canned-metrics.generated.ts`
// from a BUILT aws-cdk-lib install (npm bundle). These files are aws-cdk build-time codegen:
// absent from the aws-cdk git tree, present in the published package as .js + .d.ts.
//
// Usage:
//   node gen-canned-metrics.mjs <aws-cdk-lib-module-lib-dir> <out-file.ts>
// Example:
//   node gen-canned-metrics.mjs \
//     .../node_modules/aws-cdk-lib/aws-autoscaling/lib \
//     .../src/aws/compute/auto-scaling/autoscaling-canned-metrics.generated.ts
//
// Method: parse the .d.ts for exact typed signatures (incl. overloads); require() the .js and
// invoke each static with a sentinel to read back {namespace, metricName, statistic}. Output
// matches the existing base file format byte-conventions (eslint-disable header, MetricWithDims).

import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';

const [libDir, outFile] = process.argv.slice(2);
if (!libDir || !outFile) {
  console.error('usage: gen-canned-metrics.mjs <aws-cdk-lib-module-lib-dir> <out-file.ts>');
  process.exit(2);
}

const entry = fs.readdirSync(libDir).find(f => f.endsWith('-canned-metrics.generated.js'));
if (!entry) {
  console.error(`no *-canned-metrics.generated.js in ${libDir} (service has no canned metrics)`);
  process.exit(1);
}
const base = entry.replace(/\.js$/, '');
const dts = fs.readFileSync(path.join(libDir, base + '.d.ts'), 'utf8');
const require_ = createRequire(import.meta.url);
const mod = require_(path.join(libDir, entry));

const className = Object.keys(mod).find(k => /Metrics$/.test(k));
if (!className) { console.error('no *Metrics class exported'); process.exit(1); }
const cls = mod[className];

// Parse .d.ts: collect per-method overload signatures in declaration order.
// Published form is multi-line with a `this: void` param:
//   static methodName(this: void, dimensions: {
//       A: string;
//   }): MetricWithDims<{ ... }>;
// Normalize to one line per signature, then extract; emit compact dims (`{ A: string; }`).
const flat = dts.replace(/\s+/g, ' ');
const sigRe = /static (\w+)\((?:this: void, )?dimensions: (\{.*?\}|any)\): MetricWithDims<(?:\{.*?\}|any)>;/g;
const methods = new Map(); // name -> [dims]
for (const m of flat.matchAll(sigRe)) {
  const [, name, rawDims] = m;
  // house style writes the empty dims object as `{  }`
  const dims = rawDims === 'any' ? 'any' : (/^\{\s*\}$/.test(rawDims) ? '{  }' : rawDims);
  if (!methods.has(name)) methods.set(name, []);
  // upstream .d.ts can declare many textually-identical overloads (per-Operation dims
  // collapsed to the same shape) — dedupe, they add nothing in TS
  if (!methods.get(name).includes(dims)) methods.get(name).push(dims);
}
if (!methods.size) { console.error('no signatures parsed from .d.ts'); process.exit(1); }

const lines = [];
lines.push('/* eslint-disable prettier/prettier,max-len */');
lines.push('export interface MetricWithDims<D> {');
lines.push('  readonly namespace: string;');
lines.push('');
lines.push('  readonly metricName: string;');
lines.push('');
lines.push('  readonly statistic: string;');
lines.push('');
lines.push('  readonly dimensionsMap: D;');
lines.push('}');
lines.push('');
lines.push(`export class ${className} {`);

let first = true;
for (const [name, overloads] of methods) {
  const val = cls[name]({}); // sentinel dims; generated impls never read dimension values
  if (!first) lines.push('');
  first = false;
  if (overloads.length === 1) {
    const d = overloads[0];
    lines.push(`  public static ${name}(dimensions: ${d}): MetricWithDims<${d}> {`);
  } else {
    for (const d of overloads.filter(x => x !== 'any')) {
      lines.push(`  public static ${name}(dimensions: ${d}): MetricWithDims<${d}>;`);
      lines.push('');
    }
    lines.push(`  public static ${name}(dimensions: any): MetricWithDims<any> {`);
  }
  lines.push('    return {');
  lines.push(`      "namespace": ${JSON.stringify(val.namespace)},`);
  lines.push(`      "metricName": ${JSON.stringify(val.metricName)},`);
  lines.push('      "dimensionsMap": dimensions,');
  lines.push(`      "statistic": ${JSON.stringify(val.statistic)}`);
  lines.push('    };');
  lines.push('  }');
}
lines.push('}');

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, lines.join('\n')); // house style: no trailing newline
console.log(`wrote ${outFile}: ${className}, ${methods.size} metrics`);
