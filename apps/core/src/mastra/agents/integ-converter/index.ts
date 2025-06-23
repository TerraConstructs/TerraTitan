import { google } from '@ai-sdk/google';
import { type CoreMessage } from '@mastra/core';
import { z } from 'zod';
import { ConverterAgent } from '../converter/index.js';
import { Sample, type ConversionRequestProps } from '../../util/index.js';
import { PromptTemplateFactory } from '../prompts/prompt-template.js';

/**
 * (< 200k tokens)
 * Input $1.25 per 1M Tokens
 * Output $10.00 per 1M Tokens
 */
const GEMINI_2_5_PRO = 'gemini-2.5-pro-preview-06-05';

/**
 * Class to convert integration test code from AWS CDK to TerraConstructs
 *
 * Hardcoded for:
 * - Google Provider
 * - 2 Shot AWSCDK -> TerraConstructs Samples
 */
class IntegConverterAgent extends ConverterAgent {
  constructor(sampleNameOne: string, sampleNameTwo: string, model: string = GEMINI_2_5_PRO) {
    const samples = [Sample.fromName(sampleNameOne), Sample.fromName(sampleNameTwo)];
    const promptTemplate = PromptTemplateFactory.create('gemini', 'integ');
    
    super(
      'Integration Test',
      promptTemplate,
      // ref: https://sdk.vercel.ai/providers/ai-sdk-providers/google-generative-ai#provider-instance
      google(model),
      samples,
      'gemini',
      'integ',
    );
  }
  /**
   * Converts the integration tests from AWS CDK to TerraConstructs
   *
   * With a few-shot learning approach, the agent is trained on a few examples of input and output code.
   * The agent then uses the provided input code and reference documents to generate the output code.
   *
   * @param requestProps The conversion request properties
   * @returns The converted integration tests
   */
  async convert(requestProps: ConversionRequestProps): Promise<{ code: string }> {
    const messages: CoreMessage[] = [];
    for (const sample of this.samples) {
      messages.push({
        role: 'user',
        content: this.promptTemplate.generateSampleInput(sample),
      });
      messages.push({
        role: 'assistant',
        content: this.promptTemplate.generateSampleResponse(sample),
      });
    }
    messages.push({
      role: 'user',
      content: this.promptTemplate.generateNewPrompt(requestProps),
    });
    const result = await this.agent.generate(messages, {
      output: z.object({
        code: z.string(),
      }),
      temperature: 0,
    });

    return result.object;
  }
}

// export an instance of the UnitConverterAgent with few shot samples
export const integConverter = new IntegConverterAgent('aws-events/event-bus/integ', 'aws-kinesis/stream/integ');
