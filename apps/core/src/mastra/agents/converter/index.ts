import { Agent } from '@mastra/core/agent';
import type { LanguageModel } from '@mastra/core';
import type { ConversionRequestProps, Sample } from '../../util/index.js';
import type { PromptTemplate, ExposedPrompts, ModelType, ConversionType } from '../prompts/prompt-template.js';

/**
 * Abstract class for Converter Agents
 */
export abstract class ConverterAgent {
  protected readonly agent: Agent;
  protected readonly promptTemplate: PromptTemplate;
  protected readonly samples: Sample[];
  protected readonly modelType: ModelType;
  protected readonly conversionType: ConversionType;

  constructor(
    name: string,
    promptTemplate: PromptTemplate,
    model: LanguageModel,
    samples: Sample[],
    modelType: ModelType,
    conversionType: ConversionType,
  ) {
    this.promptTemplate = promptTemplate;
    this.samples = samples;
    this.modelType = modelType;
    this.conversionType = conversionType;

    this.agent = new Agent({
      name: `Converter Agent for ${name}`,
      instructions: promptTemplate.generateInstructions(),
      model,
    });
  }

  abstract convert(request: ConversionRequestProps): Promise<{ code: string }>;

  /**
   * Exposes the prompts used by this converter agent for Claude Code users
   */
  getPrompts(requestProps: ConversionRequestProps): ExposedPrompts {
    return {
      instructions: this.promptTemplate.generateInstructions(),
      samples: this.samples.map(sample => ({
        input: this.promptTemplate.generateSampleInput(sample),
        response: this.promptTemplate.generateSampleResponse(sample),
      })),
      newPrompt: this.promptTemplate.generateNewPrompt(requestProps),
      metadata: {
        modelType: this.modelType,
        conversionType: this.conversionType,
        templateClass: this.promptTemplate.constructor.name,
      },
    };
  }

  /**
   * Gets the prompt template used by this agent
   */
  getPromptTemplate(): PromptTemplate {
    return this.promptTemplate;
  }

  /**
   * Gets the samples used for few-shot learning
   */
  getSamples(): Sample[] {
    return this.samples;
  }

  /**
   * Gets metadata about this converter agent
   */
  getMetadata() {
    return {
      modelType: this.modelType,
      conversionType: this.conversionType,
      templateClass: this.promptTemplate.constructor.name,
      sampleFiles: this.samples.map(s => s.example.inputFile),
    };
  }
}
