import { ConversionType, ConversionRequest, ConversionRequestProps, LibRef, Sample } from '../../util/index.js';

export function generateInstructions(): string {
  // load TerraConstruct references for Source Conversion
  const libRef = LibRef.terraConstructs(ConversionType.UNIT);
  return `You are a precise and thorough Typescript Code converter.

Convert a given TypeScript code file containing AWS CDK Apps for integration testing to an application using the TerraConstruct library, following specified guidance and examples.
Ensure the output is a valid source code test file that can be directly written to disk.
Pay special attention to provided TypeScript declaration files and JSDocs for accurate conversion.

## Conversion Guidelines

- Use the provided TypeScript declaration files and JSDocs as a primary reference for conversion.
- Follow the provided examples closely to maintain consistency in the conversion process.
- Use only TerraConstruct and CDKTF library utilities in the conversion output, pay extra attention to:
  - The code must import aws module of TerraConstructs from "../../../../src" to ensure the source code under test is used
  - Constants for integration tests should read from process.env (with defaults) and be:
    - \`environmentName\` defaults to "test"
    - \`region\` defaults to "us-east-1"
    - \`outdir\` defaults to "cdktf.out"
    - \`stackName\` defaults to the name of the test file (e.g., "stream" for "stream.ts")
  - Use LocalBackend for the stack, with the path set to \`\${stackName}.tfstate\`
  - Ensure the AwsStack is created with the \`gridUUID\` set to "12345678-1234" and the \`environmentName\` set to the constant defined above
  - If \`IntegTest\` testCases are defined, ensure \`app.synth()\` is used and keep them commented out as part of the conversion for future reference (including AWS SDK Api call validations)

## Reference Documents

**TerraConstructs AWS Core Declarations**
\`\`\`typescript
${libRef.aws}
\`\`\`

## Steps

1. **Review Input**: Examine the provided TypeScript code with AWS CDK App for Integration testing.
2. **Reference Documents**: Utilize the TerraConstructs library declaration files and their JSDocs for detailed conversion logic.
3. **Convert Syntax**: Translate the AWS CDK App for Integration Tests into the TerraConstruct equivalent App.
4. **Validate Code**: Ensure the converted code retains functional equivalency with the original code.
5. **Output Code**: Prepare the final converted TypeScript source code formatted for TerraConstructs (CDKTF).

## Output Format

- Generate a TypeScript source code file (.ts) formatted for CDKTF.
- Ensure the file is syntactically correct and ready for writing to disk.

## Notes

- Ensure all necessary imports and dependencies are correctly referenced for TerraConstructs and CDKTF.
- Pay attention to any special conversion nuances outlined.
- Leverage existing conversion patterns for uniformity in approach.
`;
}

export function generateSampleInput(sample: Sample): string {
  return `Convert the following AWS CDK App for integration tests to TerraConstruct App.
\`\`\`typescript
${sample.input}
\`\`\`

## Reference Documents
**AWS CDK Tested Construct Type Declarations:**
Refer to the following Reference declarations used by the AWSCDK constructs:
\`\`\`typescript
${sample.inputRef}
\`\`\`

**Target documentations:**
Ensure generated configurations follow these declarations

------------------------
${sample.outputRefs}
------------------------

Format:
{
    "code": "converted code"
}`;
}

export function generateSampleResponse(sample: Sample): string {
  return `{
  "code": "${sample.output}"
}`;
}

export function generateNewPrompt(props: ConversionRequestProps): string {
  const request = new ConversionRequest(ConversionType.UNIT, props);
  return `Convert the following AWS CDK App for integration tests to TerraConstruct App.
\`\`\`typescript
${request.input}
\`\`\`

## Reference Documents
**AWS CDK Tested Construct Type Declarations:**
Refer to the following Reference declarations used by the AWSCDK constructs:
\`\`\`typescript
${request.inputRef}
\`\`\`

**Target documentations:**
Ensure generated configurations follow these declarations

------------------------
${request.outputRefs}
------------------------

Format:
{
    "code": "converted code"
}`;
}
