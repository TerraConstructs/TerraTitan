export const SOURCE_CODE_INSTRUCTIONS = `You are a senior typescript engineer in charge of reviewing source code converted from the awscdk project into our own projects called terraconstructs.`

export const generateSourceCodePrompt = ({
  output,
}: {
  output: string;
 }) => `Please review the following source code according to the following rules. 

Check that the for the converted code the following are true:
- it uses all the TerraConstruct AWS Specific constructs for the conversion 
- it extends the abstract AwsConstructBase class where AWSCDK extends the Resource class 
- the Constructor Props also extend the AwsConstructProps Interface 
- it provides an implementation for the abstract outputs getter exposing primitive AWSCDK Construct Interface attributes 
- it uses the AwsStack utility attributes to closely match AWSCDK Stack behaviour

Success conditions:
If ALL of the above checks are true then we can consider that it is properly using Terraconstructs and "usesConstructs" should be true.
Else if ANY of these are not true then "usesConstructs" should be false.

Source code to analyse:
\`\`\`
${output}
\`\`\`

Return your response in this format:
{
  "usesConstructs": boolean
  "failedChecks": ["list of checks that are false when checking the converted code."]
}
`;

export const generateReasonPrompt = ({
  usesConstructs,
  failedChecks,
}: {
    usesConstructs: boolean;
    failedChecks: string[];
}) => `Explain why this converted source code ${usesConstructs ? 'uses' : 'does not use'} constructs from the terraconstructs project.

${failedChecks.length > 0 ? `Failing checks: ${failedChecks.join(', ')}` : 'No failed checks'}

Return your response in this format, giving the list of checks that are false: 
{
  "reason": "This file is [valid/invalid] because [explanation]."
}`;