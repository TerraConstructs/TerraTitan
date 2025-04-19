import { google } from '@ai-sdk/google';
import { type CoreMessage } from '@mastra/core';
import { z } from 'zod';
import { ConverterAgent } from '../converter/index.js';
import { Sample, type ConversionRequestProps } from '../../util/index.js';
import { generateInstructions, generateSampleInput, generateSampleResponse, generateNewPrompt } from './prompts.js';

/**
 * (< 200k tokens)
 * Input $1.25 per 1M Tokens
 * Output $10.00 per 1M Tokens
 */
const GEMINI_2_5_PRO = 'gemini-2.5-pro-preview-03-25';

/**
 * Class to convert source code from AWS CDK to TerraConstructs
 *
 * Hardcoded for:
 * - Google Provider
 * - 2 Shot AWSCDK -> TerraConstructs Samples
 */
class SourceConverterAgent extends ConverterAgent {
  private readonly _samples: Sample[];
  constructor(sampleNameOne: string, sampleNameTwo: string, model: string = GEMINI_2_5_PRO) {
    super(
      'Source Code',
      generateInstructions(),
      // ref: https://sdk.vercel.ai/providers/ai-sdk-providers/google-generative-ai#provider-instance
      google(model),
    );
    this._samples = [Sample.fromName(sampleNameOne), Sample.fromName(sampleNameTwo)];
  }
  /**
   * Converts the source code from AWS CDK to TerraConstructs
   *
   * With a few-shot learning approach, the agent is trained on a few examples of input and output code.
   * The agent then uses the provided input code and reference documents to generate the output code.
   *
   * @param requestProps The conversion request properties
   * @returns The converted source code
   */
  async convert(requestProps: ConversionRequestProps): Promise<{ code: string }> {
    const messages: CoreMessage[] = [];
    for (const sample of this._samples) {
      messages.push({
        role: 'user',
        content: generateSampleInput(sample),
      });
      messages.push({
        role: 'assistant',
        content: generateSampleResponse(sample),
      });
    }
    messages.push({
      role: 'user',
      content: generateNewPrompt(requestProps),
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

// export an instance of the SourceConverterAgent with few shot samples
export const sourceConverter = new SourceConverterAgent('aws-events/event-bus/src', 'aws-kinesis/stream/src');
