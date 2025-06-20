import { ConversionType, ConversionRequest, ConversionRequestProps, LibRef, Sample } from '../../util/index.js';

export function generateInstructions(): string {
  // load TerraConstruct references for Source Conversion
  const libRef = LibRef.terraConstructs(ConversionType.UNIT);
  return `You are a precise and thorough Typescript Code converter.

Convert a given TypeScript code file containing AWS CDK unit tests to TerraConstruct unit tests, following specified guidance and examples.
Ensure the output is a valid source code test file that can be directly written to disk.
Pay special attention to provided TypeScript declaration files and JSDocs for accurate conversion.

## Conversion Guidelines

- Use the provided TypeScript declaration files and JSDocs as a primary reference for conversion.
- Follow the provided examples closely to maintain consistency in the conversion process.
- Imperative APIs from AWS CDK must be followed closely when testing the equivalent TerraConstructs. Some AWS CDK Resources may require multiple provider AWS resources to be configured and created transparently in the TerraConstructs code.
- Use only TerraConstruct and CDKTF Testing library and adapters, pay extra attention to:
  - Use the assertions Template constructor where AWS CDK uses Template.fromStack()
  - The code must import "cdktf/lib/testing/adapters/jest" for access to the CDKTF Testing adapters
  - Use expect.toHaveResourceWithProperties where AWS CDK input uses hasResourceProperties
  - Use Jest's toMatchObject Matcher where AWS CDK input uses templateMatches()
  - Use TestResource instead of CfnResource for Custom Resources in Unit Tests
  - Prefer using stack.resolve() instead of resource names in assertions
  - Resource naming differences to how TerraConstructs generates names
- Pay close attention to the Terraform Docs for the expected resource field names (snake_case, not TitleCase)
- Do do NOT implement ContextProvider Lookup tests, but highlight they are missing in the conversion

## Reference Documents

**TerraConstructs Testing Declarations**
\`\`\`typescript
${libRef.testing}
\`\`\`

**TerraConstructs AWS Core Declarations**
\`\`\`typescript
${libRef.aws}
\`\`\`

## Steps

1. **Review Input**: Examine the provided TypeScript code with AWS CDK Unit Tests.
2. **Reference Documents**: Utilize the TerraConstructs Testing declaration files and their JSDocs for detailed conversion logic.
3. **Convert Syntax**: Translate AWS CDK Unit Tests into Jest tests for their TerraConstruct equivalents.
4. **Validate Code**: Ensure the converted code retains functional equivalency with the original code, with a different in field naming conventions.
5. **Output Code**: Prepare the final converted TypeScript source code test files formatted for TerraConstructs (CDKTF).

## Output Format

- Generate a TypeScript source code test file (.test.ts) formatted for CDKTF.
- Ensure the file is syntactically correct and ready for writing to disk.

## Notes

- Ensure all necessary imports and dependencies are correctly referenced for TerraConstructs.
- Pay attention to any special conversion nuances outlined in the examples, such as specific method or property differences between AWS CDK and TerraConstructs and CDKTF Provider AWS Resources.
- Leverage existing conversion patterns from provided examples for uniformity in approach.
`;
}

export function generateSampleInput(sample: Sample): string {
  return `Convert the following AWS CDK Construct Unit Tests to TerraConstructs Unit Tests.
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
Ensure generated configurations are tested to follow the following documentation

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
  return `Convert the following AWS CDK Construct Unit Tests to TerraConstructs Unit Tests.
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
Ensure generated configurations are tested to follow the following documentation

------------------------
${request.outputRefs}
------------------------

Format:
{
    "code": "converted code"
}`;
}
