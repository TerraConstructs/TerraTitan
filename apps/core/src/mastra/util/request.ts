import fs from 'fs';
import path from 'path';
import { cdktfBaseName, filterInputRefFile } from './helpers.js';
import { ConversionType, type ConversionRequestProps } from './types.js';

export class ConversionRequest {
  constructor(
    public type: ConversionType,
    public props: ConversionRequestProps,
  ) {}

  private _input: string | undefined = undefined;
  private _inputRef: string | undefined = undefined;
  private _outputRefs: string | undefined = undefined;

  /**
   * Input file to convert
   */
  get input(): string {
    if (this._input) {
      return this._input;
    }
    this._input = fs.readFileSync(this.props.inputFile, 'utf8');
    return this._input;
  }
  /**
   * Relative/resolved path to the input file
   */
  get inputFileName(): string {
    return path.relative(process.cwd(), this.props.inputFile);
  }
  /** Reference data for the AWSCDK Input */
  get inputRef(): string {
    if (this._inputRef) {
      return this._inputRef;
    }
    const contents: string[] = [];
    for (const inputRef of this.props.inputRefFiles) {
      const header = `// ${path.basename(inputRef)}\n`;
      let inputRefSource: string;
      try {
        inputRefSource = fs.readFileSync(inputRef, 'utf8');
      } catch (e) {
        console.log(`ignoring error reading input reference file ${inputRef}`);
        inputRefSource = `// Error reading file: ${inputRef}`;
        continue;
      }
      if (inputRef.endsWith('generated.d.ts')) {
        // filter generated code down to only relevant declarations
        contents.push(header + filterInputRefFile(this.input, inputRefSource));
      } else {
        contents.push(header + inputRefSource);
      }
    }
    this._inputRef = contents.join('\n\n');
    return this._inputRef;
  }
  /** Reference data for the expected CDKTF Output */
  get outputRefs(): string {
    if (this._outputRefs) {
      return this._outputRefs;
    }
    this._outputRefs = this.props.outputRefFiles
      .map(f => {
        switch (this.type) {
          case ConversionType.SOURCE:
            // source files use TypeScript declaration files as output refs
            return `// ${cdktfBaseName(f)}\n` + fs.readFileSync(f, 'utf8');
          case ConversionType.UNIT:
            // unit test files use Markdown docs as output refs
            return `// ${path.relative(process.cwd(), f)}\n` + fs.readFileSync(f, 'utf8').replace(/^#/gm, '###');
          default:
            throw new Error(`Unknown conversion type: ${this.type}`);
        }
      })
      .join('\n\n');
    return this._outputRefs;
  }
}
