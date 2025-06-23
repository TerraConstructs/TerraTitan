import path from 'path';
import fs from 'fs';
import { EmbeddingModelV1Embedding } from '@ai-sdk/provider';
import { TiktokenModel } from 'tiktoken';

/**
 *  OpenAI's embedding token limit for
 * - 'text-embedding-3-small'
 * - 'text-embedding-3-large'
 */
export const OPENAI_EMBED_MAX_TOKENS = 8191;

/**
 * Upstash configuration.
 *
 * Determines the embedding model and dimensions.
 */
export interface UpstashConfig {
  /**
   * The URL of the Upstash vector index
   */
  upstashUrl: string;
  /**
   * The number of dimensions for the embedding model.
   * This is typically 1536 for 'text-embedding-3-small' or 3072 for 'text-embedding-3-large'.
   * @see https://sdk.vercel.ai/docs/ai-sdk-core/embeddings#embedding-providers--models
   */
  dimensions: number;
  /**
   * The token for authenticating with the Upstash vector database.
   */
  upstashToken: string | undefined;
  /**
   * The embedding model used for generating embeddings.
   * This is typically 'text-embedding-3-small' or 'text-embedding-3-large'.
   *
   * must match the Upstash index config
   */
  embeddingModel: TiktokenModel;
}

/**
 * Get the pre-configured Upstash configuration for the given index name.
 *
 * Indices must be created upfront and their configuration determines the embedding model and dimensions
 *
 * See .env.example for UPSTASH_TOKEN_xxx configuration
 *
 * pre-created Upstash indexnames for TerraTitan are
 *
 * - 'provider-aws-resources-small'
 * - 'provider-aws-resources-5-100-0' (versioned for terraform-provider-aws v5.100.0)
 * - 'provider-aws-resources-large'
 *
 * @param indexName - The pre-created index on Upstash
 */
export function getUpstashConfig(indexName: string): UpstashConfig {
  if (indexName === 'provider-aws-resources-small') {
    return {
      dimensions: 1536,
      // mastra has built-in support for cohere and openai,
      // may reconsider later based on:
      // https://huggingface.co/spaces/mteb/leaderboard
      embeddingModel: 'text-embedding-3-small',
      upstashUrl: 'https://deep-molly-68135-us1-vector.upstash.io',
      upstashToken: process.env.UPSTASH_TOKEN_SMALL,
    };
  } else if (indexName === 'provider-aws-resources-large') {
    return {
      dimensions: 3072,
      embeddingModel: 'text-embedding-3-large',
      upstashUrl: 'https://pretty-marmot-55613-us1-vector.upstash.io',
      upstashToken: process.env.UPSTASH_TOKEN_LARGE,
    };
  } else {
    throw new Error(`Unknown Upstash index name: ${indexName}`);
  }
}

/**
 * Load a JSON file synchronously.
 *
 * NOTE: This does not validate the JSON structure, only casts it to the specified type.
 */
export function loadJsonSync<T>(dir: string, fileName: string): T {
  const filePath = path.join(dir, fileName);
  if (!fs.existsSync(filePath)) {
    console.log('Missing inputFile:', filePath);
    console.log('Run ref-parse script first?');
    process.exit(0);
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  // TODO: Use zod to validate the JSON structure
  return JSON.parse(fileContent) as T;
}

export interface ResourceMetadata {
  /**
   * The fully qualified name of the resource.
   * This is used as a unique identifier for the resource.
   */
  fqn: string;
  /**
   * The name of the resource from JSII schema.
   */
  name: string;
  /**
   * The Sub Category based on the Markdown documentation
   */
  subcategory?: string;
  /**
   * The URL to the resource documentation.
   */
  url?: string;
  /**
   * The source file where the resource is defined from the jsii schema.
   */
  sourceFile?: string;
  /**
   * The original text used for embedding.
   * This is useful for debugging or if the embedding strategy changes in the future.
   */
  originalText: string; // TODO: Fix text content for reranking should be in metadata.text
}

/**
 * Input for embedding a resource.
 */
export interface ResourceEmbedding {
  text: string;
  metadata: ResourceMetadata;
  /**
   * The number of tokens in the text.
   * This is used to determine if the text exceeds the maximum token limit for embedding.
   */
  tokenCount: number;
}

/**
 * Output of embedding a resource.
 *
 * ResourceChunk is a chunk of text with metadata and an embedding vector.
 *
 * This is used to build a GraphRAG for the resources.
 */
export interface ResourceChunk {
  text: string;
  metadata: ResourceMetadata;
  vector: EmbeddingModelV1Embedding;
}
