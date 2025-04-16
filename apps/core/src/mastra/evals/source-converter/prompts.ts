export const SOURCE_CODE_INSTRUCTIONS = `You are a senior software engineer in charge of reviewing source code converted from the awscdk project into our own projects called terraconstructs.`

export const generateSourceCodePrompt = ({ sourceCode }: { sourceCode: string }) => `Please review the following source code according to the following rules. 

Check that the converted code uses all the TerraConstruct AWS Specific constructs for the conversion and pay extra attention that the following are true: 
- it extends the abstract AwsConstructBase class where AWSCDK extends the Resource class 
- the Constructor Props also extend the AwsConstructProps Interface 
- it provides an implementation for the abstract outputs getter exposing primitive AWSCDK Construct Interface attributes 
- it uses the AwsStack utility attributes to closely match AWSCDK Stack behaviour 
If all of these are true then we can consider that it is properly using Terraconstructs and "usesConstructs" should be true.
Else if any of these are not true then we can consider that it is not properly using Terraconstructs and "usesConstructs" should be false.

Source code to analyse:
\`\`\`
${sourceCode}
\`\`\`

Return your response in this format:
{
  "usesConstructs": boolean
  "falseRules": ["list of rules that are false when checking the converted code."]
}
`;

export const generateReasonPrompt = ({ usesConstructs }: { usesConstructs: boolean }) => `Explain why this converted source code ${usesConstructs ? 'uses' : 'does not use'} constructs from the terraconstructs project.

Return your response in this format, giving the list of checks that are false: 
{
  "reason": "This file is [valid/invalid] because [explanation]."
}`;