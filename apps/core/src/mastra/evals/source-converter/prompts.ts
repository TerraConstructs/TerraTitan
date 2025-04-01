export const SOURCE_CODE_INSTRUCTIONS = `You are a senior software engineer in charge of reviewing source code converted from the awscdk project into our own projects called terraconstructs.`

// TODO: flesh this out
export const generateSourceCodePrompt = ({ sourceCode }: { sourceCode: string }) => `Please review the following source code and check if it uses any constructs from the terraconstructs project. 

Check for awscdk constructs that have been replaced with terraconstructs constructs.

Source code to analyse:
\`\`\`
${sourceCode}
\`\`\`

Return your response in this format:
{
  "usesConstructs": boolean
}
`;

// TODO flesh this out
export const generateReasonPrompt = ({ usesConstructs }: { usesConstructs: boolean }) => `Explain why this converted source code ${usesConstructs ? 'uses' : 'does not use'} constructs from the terraconstructs project.

Return your response in this format: 
{
  "reason": "This file is [valid/invalid] because [explanation]"
}`;