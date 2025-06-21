import type { ConversionRequestProps, Sample } from '../../util/index.js';
import { ClaudeSourcePromptTemplate } from './claude-source-template.js';
import { ClaudeUnitPromptTemplate } from './claude-unit-template.js';
import { GeminiSourcePromptTemplate } from './gemini-source-template.js';
import { GeminiUnitPromptTemplate } from './gemini-unit-template.js';

/**
 * Defines the interface for prompt templates used by converter agents
 */
export interface PromptTemplate {
  /**
   * Generate the base instructions for the conversion agent
   */
  generateInstructions(): string;

  /**
   * Generate the sample input prompt for few-shot learning
   */
  generateSampleInput(sample: Sample): string;

  /**
   * Generate the sample response for few-shot learning
   */
  generateSampleResponse(sample: Sample): string;

  /**
   * Generate the new conversion prompt for the actual conversion request
   */
  generateNewPrompt(props: ConversionRequestProps): string;
}

/**
 * Supported model types for prompt templates
 */
export type ModelType = 'claude' | 'gemini';

/**
 * Conversion types supported by prompt templates
 */
export type ConversionType = 'source' | 'unit';

/**
 * Factory for creating model-specific prompt templates
 */
export class PromptTemplateFactory {
  /**
   * Creates a prompt template based on the model and conversion type
   */
  static create(modelType: ModelType, conversionType: ConversionType): PromptTemplate {
    if (modelType === 'claude') {
      if (conversionType === 'source') {
        return new ClaudeSourcePromptTemplate();
      } else if (conversionType === 'unit') {
        return new ClaudeUnitPromptTemplate();
      }
    } else if (modelType === 'gemini') {
      if (conversionType === 'source') {
        return new GeminiSourcePromptTemplate();
      } else if (conversionType === 'unit') {
        return new GeminiUnitPromptTemplate();
      }
    }

    throw new Error(`Unsupported model type "${modelType}" or conversion type "${conversionType}"`);
  }

  /**
   * Detects model type from model string/identifier
   */
  static detectModelType(model: string): ModelType {
    const modelLower = model.toLowerCase();
    
    if (modelLower.includes('claude')) {
      return 'claude';
    } else if (modelLower.includes('gemini')) {
      return 'gemini';
    }
    
    // Default to gemini for backward compatibility
    return 'gemini';
  }
}

/**
 * Exposed prompt information for Claude Code users
 */
export interface ExposedPrompts {
  /**
   * The base instructions used by the agent
   */
  instructions: string;

  /**
   * Few-shot learning samples with input and response
   */
  samples: Array<{
    input: string;
    response: string;
  }>;

  /**
   * The actual conversion prompt for the given request
   */
  newPrompt: string;

  /**
   * Metadata about the template and model used
   */
  metadata: {
    modelType: ModelType;
    conversionType: ConversionType;
    templateClass: string;
  };
}