import { ConversionType, ConversionRequest, ConversionRequestProps, LibRef, Sample } from '../../util/index.js';
import type { PromptTemplate } from './prompt-template.js';

/**
 * Claude-optimized unit test conversion prompt template using XML tags
 */
export class ClaudeUnitPromptTemplate implements PromptTemplate {
  generateInstructions(): string {
    // Load TerraConstruct references for Unit Test Conversion
    const libRef = LibRef.terraConstructs(ConversionType.UNIT);

    return `<role>
You are a precise and thorough TypeScript test converter specializing in AWS CDK to TerraConstructs unit test conversions.
</role>

<task>
Convert TypeScript unit test files containing AWS CDK tests to TerraConstructs unit tests, following specified guidance and examples.
Ensure the output is valid test code that can be directly written to disk.
</task>

<instructions>
<conversion_guidelines>
- Use the provided TypeScript declaration files and JSDocs as primary reference for conversion
- Follow the provided examples closely to maintain consistency in the conversion process
- Imperative APIs from AWS CDK must be followed closely when testing the equivalent TerraConstructs
- Some AWS CDK Resources may require multiple provider AWS resources to be configured and created transparently in the TerraConstructs code
- Use only TerraConstruct and CDKTF Testing library and adapters, pay extra attention to:
  • Use the assertions Template constructor where AWS CDK uses Template.fromStack()
  • The code must import "cdktf/lib/testing/adapters/jest" for access to the CDKTF Testing adapters
  • Use expect.toHaveResourceWithProperties where AWS CDK input uses hasResourceProperties
  • Use Jest's toMatchObject Matcher where AWS CDK input uses templateMatches()
  • Use TestResource instead of CfnResource for Custom Resources in Unit Tests
  • Prefer using stack.resolve() instead of resource names in assertions
  • Resource naming differences to how TerraConstructs generates names
- Pay close attention to the Terraform Docs for the expected resource field names (snake_case, not TitleCase)
- Do NOT implement ContextProvider Lookup tests, but highlight they are missing in the conversion
</conversion_guidelines>

<reference_documents>
<terraconstructs_testing_declarations>
\`\`\`typescript
${libRef.testing}
\`\`\`
</terraconstructs_testing_declarations>

<terraconstructs_aws_core_declarations>
\`\`\`typescript
${libRef.aws}
\`\`\`
</terraconstructs_aws_core_declarations>
</reference_documents>

<conversion_steps>
1. **Review Input**: Examine the provided TypeScript code with AWS CDK Unit Tests
2. **Reference Documents**: Utilize the TerraConstructs Testing declaration files and their JSDocs for detailed conversion logic
3. **Convert Syntax**: Translate AWS CDK Unit Tests into Jest tests for their TerraConstruct equivalents
4. **Validate Code**: Ensure the converted code retains functional equivalency with the original code, with differences in field naming conventions
5. **Output Code**: Prepare the final converted TypeScript source code test files formatted for TerraConstructs (CDKTF)
</conversion_steps>

<output_format>
- Generate a TypeScript source code test file (.test.ts) formatted for CDKTF
- Ensure the file is syntactically correct and ready for execution
</output_format>

<important_notes>
- Ensure all necessary imports and dependencies are correctly referenced for TerraConstructs testing
- Pay attention to any special conversion nuances outlined in the examples, such as specific method or property differences between AWS CDK testing and TerraConstructs testing
- Leverage existing conversion patterns from provided examples for uniformity in approach
- Remember that field names in Terraform use snake_case, not TitleCase
</important_notes>
</instructions>`;
  }

  generateSampleInput(sample: Sample): string {
    return `<test_conversion_request>
<input_test_code>
\`\`\`typescript
${sample.input}
\`\`\`
</input_test_code>

<reference_documents>
<terrastructs_testing_declarations>
Strictly adhere to the following testing declarations for TerraConstructs:
\`\`\`typescript
${sample.outputRefs}
\`\`\`
</terrastructs_testing_declarations>

<aws_cdk_test_declarations>
Refer to the following Reference declarations used by the AWS CDK unit tests:
\`\`\`typescript
${sample.inputRef}
\`\`\`
</aws_cdk_test_declarations>
</reference_documents>

<output_format>
Return the converted test code in JSON format:
{
  "code": "converted test code"
}
</output_format>
</test_conversion_request>`;
  }

  generateSampleResponse(sample: Sample): string {
    return `{
  "code": "${sample.output.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"
}`;
  }

  generateNewPrompt(props: ConversionRequestProps): string {
    const request = new ConversionRequest(ConversionType.UNIT, props);

    return `<test_conversion_request>
<input_test_code>
\`\`\`typescript
${request.input}
\`\`\`
</input_test_code>

<reference_documents>
<terrastructs_testing_declarations>
Strictly adhere to the following testing declarations for TerraConstructs:
\`\`\`typescript
${request.outputRefs}
\`\`\`
</terrastructs_testing_declarations>

<aws_cdk_test_declarations>
Refer to the following Reference declarations used by the AWS CDK unit tests:
\`\`\`typescript
${request.inputRef}
\`\`\`
</aws_cdk_test_declarations>
</reference_documents>

<output_format>
Return the converted test code in JSON format:
{
  "code": "converted test code"
}
</output_format>
</test_conversion_request>`;
  }
}
