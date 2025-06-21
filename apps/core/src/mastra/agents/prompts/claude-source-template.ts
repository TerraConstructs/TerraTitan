import { ConversionType, ConversionRequest, ConversionRequestProps, LibRef, Sample } from '../../util/index.js';
import type { PromptTemplate } from './prompt-template.js';

/**
 * Claude-optimized source conversion prompt template using XML tags
 */
export class ClaudeSourcePromptTemplate implements PromptTemplate {
  generateInstructions(): string {
    // Load TerraConstruct references for Source Conversion
    const libRef = LibRef.terraConstructs(ConversionType.SOURCE);

    return `<role>
You are a precise and thorough TypeScript code converter specializing in AWS CDK to TerraConstructs conversions.
</role>

<task>
Convert TypeScript code files containing AWS CDK Constructs to TerraConstructs (using CDKTF), following specified guidance and examples.
Ensure the output is valid source code that can be directly written to disk.
</task>

<instructions>
<conversion_guidelines>
- Use the provided TypeScript declaration files and JSDocs as primary reference for conversion
- Follow the provided examples closely to maintain consistency in the conversion process
- Imperative APIs from AWS CDK must be followed closely when converting to TerraConstructs
- Any AWS CDK Resource that requires multiple provider AWS resources must configure and create those resources transparently in the TerraConstructs code
- Use all the TerraConstruct AWS Specific constructs for the conversion and pay extra attention to:
  • Extend the abstract AwsConstructBase class where the AWS CDK extends the Resource class
  • Make sure the Constructor Props also extend the AwsConstructProps Interface
  • Provide an implementation for the abstract outputs getter exposing primitive AWS CDK Construct Interface attributes
  • Make use of the AwsStack utility attributes to closely match AWS CDK Stack behaviour
- Highlight ContextProvider usage as pending implementation with comments and do NOT implement ContextProvider Lookups
- Assume following modules already exist in TerraConstructs under following names with identical implementations to AWS CDK:
  • "aws-kms" → "encryption"
  • "aws-cloudwatch" → "cloudwatch"
  • "aws-iam" → "iam"
  • "aws-ssm" → "storage"
  • "aws-s3" → "storage"
  • "aws-sqs" → "notify"
</conversion_guidelines>

<reference_documents>
<terraconstructs_core_declarations>
\`\`\`typescript
${libRef.core}
\`\`\`
</terraconstructs_core_declarations>

<terraconstructs_aws_declarations>
\`\`\`typescript
${libRef.aws}
\`\`\`
</terraconstructs_aws_declarations>
</reference_documents>

<conversion_steps>
1. **Review Input**: Examine the provided TypeScript code using AWS CDK Constructs (prefixed with Cfn..)
2. **Reference Documents**: Utilize the TypeScript declaration files and JSDocs for detailed conversion logic
3. **Convert Syntax**: Translate AWS CDK constructs into their TerraConstruct equivalents (using CDKTF provider-aws resources instead)
4. **Validate Code**: Ensure the converted code retains functional equivalency with the original code
5. **Output Code**: Prepare the final converted TypeScript source code formatted for TerraConstructs (CDKTF)
</conversion_steps>

<output_format>
- Generate a TypeScript source code file (.ts) formatted for CDKTF
- Ensure the file is syntactically correct and ready for execution
</output_format>

<important_notes>
- Ensure all necessary imports and dependencies are correctly referenced for TerraConstructs
- Pay attention to any special conversion nuances outlined in the examples, such as specific method or property differences between AWS CDK and TerraConstructs and CDKTF Provider AWS Resources
- Leverage existing conversion patterns from provided examples for uniformity in approach
</important_notes>
</instructions>`;
  }

  generateSampleInput(sample: Sample): string {
    return `<conversion_request>
<input_code>
\`\`\`typescript
${sample.input}
\`\`\`
</input_code>

<reference_documents>
<cdktf_type_declarations>
Strictly adhere to the following type declarations for relevant CDKTF Resources:
\`\`\`typescript
${sample.outputRefs}
\`\`\`
</cdktf_type_declarations>

<aws_cdk_type_declarations>
Refer to the following Reference declarations used by the AWS CDK constructs:
\`\`\`typescript
${sample.inputRef}
\`\`\`
</aws_cdk_type_declarations>
</reference_documents>

<output_format>
Return the converted code in JSON format:
{
  "code": "converted code"
}
</output_format>
</conversion_request>`;
  }

  generateSampleResponse(sample: Sample): string {
    return `{
  "code": "${sample.output.replace(/"/g, '\\"').replace(/\n/g, '\\n')}"
}`;
  }

  generateNewPrompt(props: ConversionRequestProps): string {
    const request = new ConversionRequest(ConversionType.SOURCE, props);

    return `<conversion_request>
<input_code>
\`\`\`typescript
${request.input}
\`\`\`
</input_code>

<reference_documents>
<cdktf_type_declarations>
Strictly adhere to the following type declarations for relevant CDKTF Resources:
\`\`\`typescript
${request.outputRefs}
\`\`\`
</cdktf_type_declarations>

<aws_cdk_type_declarations>
Refer to the following Reference declarations used by the AWS CDK constructs:
\`\`\`typescript
${request.inputRef}
\`\`\`
</aws_cdk_type_declarations>
</reference_documents>

<output_format>
Return the converted code in JSON format:
{
  "code": "converted code"
}
</output_format>
</conversion_request>`;
  }
}
