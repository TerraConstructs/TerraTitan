import { google } from '@ai-sdk/google';
import type { LanguageModel } from '@mastra/core';
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
const GEMINI_2_5_PRO = 'gemini-2.5-pro-preview-03-25';

/**
 * Class to convert unit test code from AWS CDK to TerraConstructs
 *
 * Supports:
 * - Configurable models (Google, Anthropic, etc.)
 * - Model-specific prompt templates
 * - 2 Shot AWSCDK -> TerraConstructs Samples
 */
class UnitConverterAgent extends ConverterAgent {
  constructor(sampleNameOne: string, sampleNameTwo: string, model: LanguageModel | string = GEMINI_2_5_PRO) {
    // Handle both string and LanguageModel inputs for backward compatibility
    const languageModel = typeof model === 'string' ? google(model) : model;
    const modelType = PromptTemplateFactory.detectModelType(
      typeof model === 'string' ? model : model.modelId || 'gemini',
    );

    const promptTemplate = PromptTemplateFactory.create(modelType, 'unit');
    const samples = [Sample.fromName(sampleNameOne), Sample.fromName(sampleNameTwo)];

    super('Unit Test Code', promptTemplate, languageModel, samples, modelType, 'unit');
  }
  /**
   * Converts the unit test code from AWS CDK to TerraConstructs
   *
   * With a few-shot learning approach, the agent is trained on a few examples of input and output code.
   * The agent then uses the provided input code and reference documents to generate the output code.
   *
   * @param requestProps The conversion request properties
   * @returns The converted unit test code
   */
  async convert(requestProps: ConversionRequestProps): Promise<{ code: string }> {
    const messages: CoreMessage[] = [];

    // Add few-shot examples using the prompt template
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

    // Add the actual conversion request
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
export const unitConverter = new UnitConverterAgent('aws-events/event-bus/test', 'aws-kinesis/stream/test');
