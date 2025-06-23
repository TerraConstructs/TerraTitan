import { openai } from '@ai-sdk/openai';
import { rerank } from '@mastra/rag';
import { UpstashVector } from '@mastra/upstash';
import { embed } from 'ai';
import { z } from 'zod';
import { getTypeJsDocs } from '../../util/helpers.js';
import { TokenCounter } from '../../util/tiktoken.js';
import { getUpstashConfig, OPENAI_EMBED_MAX_TOKENS } from '../../util/rag.js';

export const retrieveCdktfRefSchema = z.object({
  /**
   * The source file to suggest CDKTF references for
   */
  sourceFile: z.string(),
  /**
   * The class to suggest CDKTF references for
   */
  sourceClass: z.string(),
});

export const resourceMetaDataSchema = z.object({
  /**
   * The fully qualified name of the resource.
   * This is used as a unique identifier for the resource.
   */
  fqn: z.string(),
  /**
   * The name of the resource from JSII schema.
   */
  name: z.string(),
  /**
   * The Sub Category based on the Markdown documentation
   */
  subcategory: z.string().optional(),
  /**
   * The URL to the resource documentation.
   */
  url: z.string().optional(),
  /**
   * The source file where the resource is defined from the jsii schema.
   */
  sourceFile: z.string(),
  /**
   * The original text used for embedding.
   * This is useful for debugging or if the embedding strategy changes in the future.
   */
  originalText: z.string(), // TODO: Fix text content for reranking should be in metadata.text
});

export const ragRerankResultSchema = z.object({
  /**
   * The ID of the retrieved resource.
   */
  id: z.string(),
  /**
   * The original similarity score of the retrieved resource.
   */
  originalScore: z.number(),
  /**
   * The reranked similarity score of the retrieved resource.
   */
  rerankedScore: z.number(),
  /**
   * The metadata of the retrieved resource.
   */
  metadata: resourceMetaDataSchema,
});

export const ragResultSchema = retrieveCdktfRefSchema.extend({
  rerankedResults: z.array(ragRerankResultSchema),
});

export type TriggerType = z.infer<typeof retrieveCdktfRefSchema>;
export type ResourceMetadata = z.infer<typeof resourceMetaDataSchema>;

export async function retrieveCdktfReferences(
  input: z.infer<typeof retrieveCdktfRefSchema>,
): Promise<z.infer<typeof ragResultSchema>> {
  const { sourceFile, sourceClass } = input;
  if (!sourceFile || !sourceClass) {
    throw new Error('Missing sourceFile or sourceClass in trigger data');
  }
  const jsDocs = getTypeJsDocs(sourceFile, sourceClass);
  if (!jsDocs) {
    throw new Error(`No JSDoc found for class ${sourceClass} in file ${sourceFile}`);
  }

  const indexName = 'provider-aws-resources-small';
  const namespace = 'provider-aws-resources-5-100-0';
  // Get Pre-created Upstash Index configuration
  // set up with pay as you go
  // see: https://upstash.com/pricing/vector
  const { upstashUrl, upstashToken, embeddingModel, dimensions } = getUpstashConfig(indexName);

  if (!upstashToken) {
    throw new Error(`Missing UPSTASH_TOKEN_xxx environment variable for ${indexName}`);
  }

  const counter = new TokenCounter(embeddingModel);
  const store = new UpstashVector({
    url: upstashUrl,
    token: upstashToken,
  });
  // const userQueryText = jsDocs;
  const userQueryText = `
      What CDKTF Resources are relevant to ${sourceClass}:
      ${jsDocs}
    `;

  const [userQueryTextCount = 0] = counter.count(jsDocs, userQueryText);
  if (userQueryTextCount > OPENAI_EMBED_MAX_TOKENS) {
    throw new Error(
      `Exceeds embedding model max tokens: ${userQueryTextCount} > ${OPENAI_EMBED_MAX_TOKENS} for query:\n${userQueryText}`,
    );
  }

  const { embedding: queryEmbedding } = await embed({
    model: openai.embedding(embeddingModel, {
      dimensions,
    }),
    value: userQueryText,
  });

  const results = await store.query({
    indexName: namespace,
    queryVector: queryEmbedding,
    includeVector: true, // required for reranking
    topK: 10, // Retrieve top 10 related nodes (adjust as needed)
    // filter: {
    //   // TODO: Use LLM to select TF Docs sub category from list of unique values?
    //   subcategory: 'SNS (Simple Notification)',
    // },
  });
  /**
   * For semantic scoring to work properly during re-ranking, each result must include the text content in its metadata.text field.
   *
   * ref: https://mastra.ai/docs/rag/retrieval#re-ranking
   */
  const queryResult = results.map(node => {
    if (node.metadata) {
      const metadata = node.metadata as ResourceMetadata;
      // TODO: text content for reranking should be in metadata.text
      node.metadata.text = metadata.originalText;
    }
    return {
      id: node.id,
      score: node.score,
      metadata: node.metadata,
      vector: node.vector,
    };
  });
  // NOTE: rerank will call model for every chunk (10 times in this case!)
  const rerankedResults = await rerank(queryResult, userQueryText, openai('gpt-4o-mini'), {
    topK: 5,
    queryEmbedding,
  });
  return {
    sourceFile,
    sourceClass,
    rerankedResults: rerankedResults.map(reranked => ({
      id: reranked.result.id,
      originalScore: reranked.result.score,
      rerankedScore: reranked.score,
      metadata: resourceMetaDataSchema.parse(reranked.result.metadata),
    })),
  };
}
