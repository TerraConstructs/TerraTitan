import { ConversionType, ConversionRequest, ConversionRequestProps, LibRef, Sample } from '../../util/index.js';
import type { PromptTemplate } from './prompt-template.js';

/**
 * Gemini-optimized unit test conversion prompt template using markdown formatting
 * This maintains the current format used by the existing unit test converter
 */
export class GeminiUnitPromptTemplate implements PromptTemplate {
  generateInstructions(): string {
    // Load TerraConstruct references for Unit Test Conversion
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
- Assume following modules already exist in TerraConstructs under following names with identical implementations to AWS CDK:
  - "aws-kms" -> "encryption"
  - "aws-secretsmanager" -> "secrets"
  - "aws-cloudwatch" -> "cloudwatch"
  - "aws-route53" -> "edge"
  - "aws-certificatemanager" -> "edge"
  - "aws-route53-targets" -> "edge"
  - "aws-iam" -> "iam"
  - "aws-ssm" -> "storage"
  - "aws-s3" -> "storage"
  - 'aws-dynamodb' -> "storage"
  - "aws-kinesis" -> "notify"
  - "aws-kinesisfirehose" -> "notify"
  - "aws-events-targets" -> "notify/notification-targets"
  - "aws-sqs" -> "notify"
  - "aws-sns" -> "notify"
  - "aws-ec2" -> "compute"
  - "aws-ecs" -> "compute"
  - "aws-elasticloadbalancing" -> "compute"
  - "aws-elasticloadbalancingv2" -> "compute"
  - "aws-lambda" -> "compute"
  - "aws-stepfunctions" -> "compute"
  - "aws-apigateway" -> "compute"
  - "aws-apigatewayv2" -> "compute"
  - "aws-application-autoscaling" -> "compute"
  - "aws-autoscaling" -> "compute"
  - "aws-autoscaling-common" -> "compute/autoscaling-common"

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
- put the source code between triple back ticks ("\`\`\`")

## Notes

- Ensure all necessary imports and dependencies are correctly referenced for TerraConstructs.
- Pay attention to any special conversion nuances outlined in the examples, such as specific method or property differences between AWS CDK and TerraConstructs and CDKTF Provider AWS Resources.
- Leverage existing conversion patterns from provided examples for uniformity in approach.
`;
  }

  generateSampleInput(sample: Sample): string {
    return `Convert the following AWS CDK Unit Tests to TerraConstructs.
\`\`\`typescript
${sample.input}
\`\`\`

## Reference Documents
**TerraConstructs Testing Declarations:**:
Strictly adhere to the following testing declarations for TerraConstructs:
\`\`\`typescript
${sample.outputRefs}
\`\`\`

**AWS CDK Test Declarations:**
Refer to the following Reference declarations used by the AWS CDK unit tests:
\`\`\`typescript
${sample.inputRef}
\`\`\`

Format:
{
    "code": "converted test code"
}`;
  }

  generateSampleResponse(sample: Sample): string {
    return `{
  "code": "${sample.output}"
}`;
  }

  generateNewPrompt(props: ConversionRequestProps): string {
    const request = new ConversionRequest(ConversionType.UNIT, props);

    return `Convert the following AWS CDK Unit Tests to TerraConstructs.
\`\`\`typescript
${request.input}
\`\`\`

## Reference Documents
**TerraConstructs Testing Declarations:**:
Strictly adhere to the following testing declarations for TerraConstructs:
\`\`\`typescript
${request.outputRefs}
\`\`\`
**AWS CDK Test Declarations:**
Refer to the following Reference declarations used by the AWS CDK unit tests:
\`\`\`typescript
${request.inputRef}
\`\`\`

Format:
{
    "code": "converted test code"
}
`;
  }
}
