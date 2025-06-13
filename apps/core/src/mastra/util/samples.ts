import fs from 'fs';
import path from 'path';
import { ConversionType, type ConversionExample } from './types.js';
import { gitRoot, cdktfBaseName, filterInputRefFile } from './helpers.js';

// TODO: Auto populate this from the sample folders?

const samplesDir = path.join(gitRoot, 'data', 'samples');
const declDir = path.join(gitRoot, 'data', 'reference', 'declarations');
const awsCdkDir = path.join(declDir, 'aws-cdk-lib');
const markdownAwsDocs = path.join(gitRoot, 'data', 'reference', 'docs', 'provider-aws', 'r');
// only available when merge-docs script has been ran
const mergedAwsDocs = path.join(gitRoot, 'data', 'reference', 'merged', 'provider-aws');

/**
 * Samples, relative to data/ folder
 */
const EXAMPLES: Record<string, ConversionExample> = {
  'aws-events/event-bus/src': {
    type: ConversionType.SOURCE,
    // Example AWS CDK TypeScript source code
    inputFile: path.join(samplesDir, 'aws-events', 'event-bus', 'input', 'src', 'event-bus.ts'),
    inputRefFiles: [path.join(awsCdkDir, 'aws-events', 'lib', 'events.generated.d.ts')],

    // Example CDKTF Source code conversion result
    outputFile: path.join(samplesDir, 'aws-events', 'event-bus', 'output', 'src', 'event-bus.ts'),
    // created by running bun scripts/merge-docs/index.ts
    // CDKTF Declaration merged with terraform-provider-aws Markdown docs
    outputRefFiles: [
      path.join(mergedAwsDocs, 'cloudwatch-event-bus', 'index.d.ts'),
      path.join(mergedAwsDocs, 'cloudwatch-event-bus-policy', 'index.d.ts'),
      path.join(mergedAwsDocs, 'cloudwatch-event-permission', 'index.d.ts'),
    ],
  },
  'aws-events/event-bus/test': {
    type: ConversionType.UNIT,
    inputFile: path.join(samplesDir, 'aws-events', 'event-bus', 'output', 'test', 'event-bus.test.ts'),
    inputRefFiles: [path.join(samplesDir, 'aws-events', 'event-bus', 'input', 'declarations', 'event-bus.d.ts')],

    // Example CDKTF Unit Test conversion result
    outputFile: path.join(samplesDir, 'aws-events', 'event-bus', 'output', 'test', 'event-bus.test.ts'),
    outputRefFiles: [
      // Unit Tests use Terraform HCL Markdown docs as attributes reference
      path.join(markdownAwsDocs, 'cloudwatch_event_bus.html.markdown'),
      path.join(markdownAwsDocs, 'cloudwatch_event_bus_policy.html.markdown'),
      path.join(markdownAwsDocs, 'cloudwatch_event_permission.html.markdown'),
    ],
  },
  'aws-events/event-bus/integ': {
    type: ConversionType.INTEG,
    inputFile: path.join(samplesDir, 'aws-events', 'event-bus', 'input', 'integ', 'integ.event-bus.ts'),
    inputRefFiles: [path.join(samplesDir, 'aws-events', 'event-bus', 'input', 'declarations', 'event-bus.d.ts')],

    // Example CDKTF Integ Test conversion result
    outputFile: path.join(samplesDir, 'aws-events', 'event-bus', 'output', 'integ', 'event-bus.ts'),
    outputRefFiles: [
      path.join(declDir, 'terraconstructs', 'aws', 'notify', 'event-bus.d.ts'),
      path.join(declDir, 'terraconstructs', 'aws', 'notify', 'queue.d.ts'),
      path.join(declDir, 'terraconstructs', 'aws', 'notify', 'queue-config.generated.d.ts'),
      path.join(declDir, 'terraconstructs', 'aws', 'iam', 'policy-document.d.ts'),
      path.join(declDir, 'terraconstructs', 'aws', 'iam', 'policy-statement.d.ts'),
      path.join(declDir, 'terraconstructs', 'aws', 'notify', 'resource-policy.d.ts'),
    ],
  },
  'aws-kinesis/stream/src': {
    type: ConversionType.SOURCE,
    inputFile: path.join(samplesDir, 'aws-kinesis', 'stream', 'input', 'src', 'stream.ts'),
    inputRefFiles: [path.join(awsCdkDir, 'aws-kinesis', 'lib', 'kinesis.generated.d.ts')],
    outputFile: path.join(samplesDir, 'aws-kinesis', 'stream', 'output', 'src', 'kinesis-stream.ts'),
    outputRefFiles: [
      // created by running bun scripts/merge-docs/index.ts
      // CDKTF Declaration merged with terraform-provider-aws Markdown docs
      path.join(mergedAwsDocs, 'kinesis-stream', 'index.d.ts'),
    ],
  },
  'aws-kinesis/stream/test': {
    type: ConversionType.UNIT,
    inputFile: path.join(samplesDir, 'aws-kinesis', 'stream', 'input', 'test', 'stream.test.ts'),
    inputRefFiles: [path.join(samplesDir, 'aws-kinesis', 'stream', 'input', 'declarations', 'stream.d.ts')],
    outputFile: path.join(samplesDir, 'aws-kinesis', 'stream', 'output', 'test', 'kinesis-stream.test.ts'),
    outputRefFiles: [
      // Unit Tests use Terraform HCL Markdown docs as attributes reference
      path.join(markdownAwsDocs, 'kinesis_stream.html.markdown'),
    ],
  },
  'aws-kinesis/stream/integ': {
    type: ConversionType.INTEG,
    inputFile: path.join(samplesDir, 'aws-kinesis', 'stream', 'input', 'integ', 'integ.stream.ts'),
    inputRefFiles: [path.join(samplesDir, 'aws-kinesis', 'stream', 'input', 'declarations', 'stream.d.ts')],
    outputFile: path.join(samplesDir, 'aws-kinesis', 'stream', 'output', 'integ', 'stream.ts'),
    outputRefFiles: [
      // Integ Tests use Tcons declaration as attributes reference
      path.join(declDir, 'terraconstructs', 'aws', 'notify', 'kinesis-stream.d.ts'),
      path.join(declDir, 'terraconstructs', 'aws', 'iam', 'role.d.ts'),
      path.join(declDir, 'terraconstructs', 'aws', 'iam', 'policy-statement.d.ts'),
      path.join(declDir, 'terraconstructs', 'aws', 'iam', 'policy-document.d.ts'),
    ],
  },
};

export class Sample {
  public static fromName(name: string): Sample {
    const example = EXAMPLES[name];
    if (!example) {
      throw new Error(`Unknown example: ${name}`);
    }
    return new Sample(example);
  }

  private constructor(public example: ConversionExample) {}
  private _input: string | undefined = undefined;
  private _inputRefs: string | undefined = undefined;
  private _outputRefs: string | undefined = undefined;
  private _output: string | undefined = undefined;

  get input(): string {
    if (this._input) {
      return this._input;
    }
    this._input = fs.readFileSync(this.example.inputFile, 'utf8');
    return this._input;
  }
  get output(): string {
    if (this._output) {
      return this._output;
    }
    this._output = fs.readFileSync(this.example.outputFile, 'utf8');
    return this._output;
  }
  get inputRef(): string {
    if (this._inputRefs) {
      return this._inputRefs;
    }
    const contents: string[] = [];
    for (const inputRef of this.example.inputRefFiles) {
      const header = `// ${path.basename(inputRef)}\n`;
      const inputRefSource = fs.readFileSync(inputRef, 'utf8');
      if (inputRef.endsWith('generated.d.ts')) {
        // filter generated code down to only relevant declarations
        contents.push(header + filterInputRefFile(this.input, inputRefSource));
      } else {
        contents.push(header + inputRefSource);
      }
    }
    this._inputRefs = contents.join('\n\n');
    return this._inputRefs;
  }
  get outputRefs(): string {
    if (this._outputRefs) {
      return this._outputRefs;
    }
    this._outputRefs = this.example.outputRefFiles
      .map(
        f =>
          `// ${this.example.type === ConversionType.SOURCE ? cdktfBaseName(f) : path.basename(f)}\n` +
          fs.readFileSync(f, 'utf8').replace(/^#/gm, '###'),
      )
      .join('\n\n');
    return this._outputRefs;
  }
}
