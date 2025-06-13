export enum ConversionType {
  /**
   * Source file conversion templates
   */
  SOURCE = 'source',
  /**
   * Unit test file conversion templates
   */
  UNIT = 'unit',
  /**
   * Integration test file conversion templates
   */
  INTEG = 'integ',
}

/**
 * A Conversion Example for few shot ConversionRequest prompting
 */
export interface ConversionExample extends ConversionRequestProps {
  /**
   * The type of conversion
   */
  type: ConversionType;
  /**
   * Example CDKTF output file
   */
  outputFile: string;
}

/**
 * Props for a Conversion request
 */
export interface ConversionRequestProps {
  /**
   * The AWS CDK file to convert
   */
  inputFile: string;
  /**
   * References for the AWS CDK input file
   */
  inputRefFiles: string[];
  /**
   * References for the expected CDKTF output file
   */
  outputRefFiles: string[];
}

export interface MergeDocsRequestProps {
  /**
   * The CDKTF declaration file to merge into
   */
  declarationPath: string;
  /**
   * The CDKTF Typescript Markdown file to merge with
   */
  markdownPath: string;
}
