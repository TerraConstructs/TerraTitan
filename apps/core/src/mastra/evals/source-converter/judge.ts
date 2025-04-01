import { openai } from "@ai-sdk/openai";
import { type LanguageModel } from '@mastra/core/llm';
import { MastraAgentJudge } from '@mastra/evals/judge';
import { z } from 'zod';
import { SOURCE_CODE_INSTRUCTIONS, generateSourceCodePrompt, generateReasonPrompt } from './prompts.js';
 
// TODO: figure out the model to use
const model = openai("gpt-4o-mini");

export class SourceConverterJudge extends MastraAgentJudge {
  constructor(model: LanguageModel) {
    super('Source Code Checker', SOURCE_CODE_INSTRUCTIONS, model);
  }

  async evaluate(output: string): Promise<{
    usesConstructs: boolean;
  }> {
    const prompt = generateSourceCodePrompt({ output });
    const result = await this.agent.generate(prompt, {
      output: z.object({
        usesConstructs: z.boolean(),
      }),
    });
    
    return result.object;
  }

  async getReason(args: { usesConstructs: boolean }): Promise<string> {
    const prompt = generateReasonPrompt(args);
    const result = await this.agent.generate(prompt, {
      output: z.object({
        reason: z.string(),
      }),
    });

    return result.object.reason;
  }
}