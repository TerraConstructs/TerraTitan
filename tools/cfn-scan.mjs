#!/usr/bin/env node
// Deterministic AST scan of an upstream aws-cdk-lib module's lib/ directory.
// Replaces the token-expensive LLM discovery parts of the Plan and Map phases:
//   - which Cfn* L1 constructs each file references (drives the mapping work-list)
//   - intra-module import graph → topologically-sorted conversion waves
//   - file classification:
//       L1_BACKED : imports/uses Cfn* from a .generated module — needs real conversion
//       PURE_L2   : no L1 usage — composes other L2s/utilities; near-verbatim copy
//                   candidate (tsc + cheap spot-check instead of full LLM conversion)
//       BARREL    : index.ts re-exports only
//   - cross-module deps (../../aws-xxx) → namespace prerequisites
//
// Usage: node cfn-scan.mjs <module-lib-dir> [--ts <dir-with-node_modules/typescript>]
// Output: JSON on stdout.

import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';

const argv = process.argv.slice(2);
const libDir = path.resolve(argv[0] || '');
const tsFlag = argv.indexOf('--ts');
const tsRoot = tsFlag >= 0 ? path.resolve(argv[tsFlag + 1]) : process.cwd();
if (!libDir || !fs.statSync(libDir).isDirectory()) {
  console.error('usage: cfn-scan.mjs <module-lib-dir> [--ts <dir-with-node_modules/typescript>]');
  process.exit(2);
}
const require_ = createRequire(path.join(tsRoot, 'noop.js'));
const ts = require_('typescript');

const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
  const p = path.join(dir, e.name);
  if (e.isDirectory()) return walk(p);
  return e.name.endsWith('.ts') && !e.name.endsWith('.d.ts') ? [p] : [];
});

const files = walk(libDir);
const byFile = {};
const cfnUse = {}; // CfnName -> Set(files)

for (const file of files) {
  const rel = path.relative(libDir, file);
  const src = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true);
  const info = {
    file: rel,
    loc: src.getLineStarts().length,
    cfnRefs: new Set(),
    generatedImports: [],
    intraDeps: new Set(),
    crossModuleDeps: new Set(),
    exportOnly: true,
  };

  const visitSpec = (spec, named) => {
    const m = spec.replace(/(\.js)?$/, '');
    if (/\.generated$/.test(m)) {
      info.generatedImports.push({ from: m, names: named });
      named.filter(n => /^Cfn/.test(n)).forEach(n => info.cfnRefs.add(n));
    } else if (m.startsWith('.')) {
      const resolved = path.resolve(path.dirname(file), m);
      if (resolved.startsWith(libDir)) {
        info.intraDeps.add(path.relative(libDir, resolved));
      } else {
        const mm = m.match(/aws-[a-z0-9-]+|core|cx-api|region-info/);
        if (mm) info.crossModuleDeps.add(mm[0]);
      }
    }
  };

  for (const st of src.statements) {
    if (ts.isImportDeclaration(st)) {
      const spec = st.moduleSpecifier.text;
      const named = [];
      const c = st.importClause;
      if (c?.namedBindings && ts.isNamedImports(c.namedBindings)) {
        c.namedBindings.elements.forEach(e => named.push(e.name.text));
      }
      if (c?.name) named.push(c.name.text);
      visitSpec(spec, named);
    } else if (ts.isExportDeclaration(st) && st.moduleSpecifier) {
      visitSpec(st.moduleSpecifier.text, []);
    } else if (!ts.isImportDeclaration(st)) {
      if (!ts.isExportDeclaration(st)) info.exportOnly = false;
    }
  }
  // catch Cfn identifier usage beyond import names (e.g. qualified access)
  const visit = node => {
    if (ts.isIdentifier(node) && /^Cfn[A-Z]/.test(node.text)) info.cfnRefs.add(node.text);
    ts.forEachChild(node, visit);
  };
  visit(src);

  info.cfnRefs.forEach(n => {
    (cfnUse[n] = cfnUse[n] || new Set()).add(rel);
  });
  byFile[rel] = info;
}

// classify
for (const info of Object.values(byFile)) {
  if (info.exportOnly && path.basename(info.file) === 'index.ts') info.classification = 'BARREL';
  else if (info.cfnRefs.size || info.generatedImports.length) info.classification = 'L1_BACKED';
  else info.classification = 'PURE_L2';
}

// topological waves over intra-module deps (deps that are scanned .ts files)
const names = Object.keys(byFile);
const depOf = n => [...byFile[n].intraDeps].map(d => (byFile[d + '.ts'] ? d + '.ts' : byFile[d + '/index.ts'] ? d + '/index.ts' : null)).filter(Boolean);
const wave = {};
const order = [];
let frontier = names.filter(n => depOf(n).length === 0);
let w = 0;
const assigned = new Set();
while (frontier.length) {
  w += 1;
  frontier.forEach(n => { wave[n] = w; assigned.add(n); order.push(n); });
  frontier = names.filter(n => !assigned.has(n) && depOf(n).every(d => assigned.has(d)));
}
names.filter(n => !assigned.has(n)).forEach(n => { wave[n] = w + 1; }); // cycles → last wave

const out = {
  module: path.basename(path.dirname(libDir)),
  files: Object.values(byFile).map(i => ({
    file: i.file,
    classification: i.classification,
    wave: wave[i.file] ?? null,
    loc: i.loc,
    cfnRefs: [...i.cfnRefs].sort(),
    intraDeps: [...i.intraDeps].sort(),
    crossModuleDeps: [...i.crossModuleDeps].sort(),
  })).sort((a, b) => (a.wave - b.wave) || a.file.localeCompare(b.file)),
  cfnResources: Object.entries(cfnUse).map(([name, f]) => ({ name, usedIn: [...f].sort() }))
    .sort((a, b) => a.name.localeCompare(b.name)),
  summary: {
    l1Backed: Object.values(byFile).filter(i => i.classification === 'L1_BACKED').length,
    pureL2: Object.values(byFile).filter(i => i.classification === 'PURE_L2').length,
    barrels: Object.values(byFile).filter(i => i.classification === 'BARREL').length,
    crossModuleDeps: [...new Set(Object.values(byFile).flatMap(i => [...i.crossModuleDeps]))].sort(),
  },
};
console.log(JSON.stringify(out, null, 2));
