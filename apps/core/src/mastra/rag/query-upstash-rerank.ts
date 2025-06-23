/**
 * Load, Query and Re-rank chunked CDKTF AWS resources embeddings from Upstash
 *
 * This script uses the full TypeScript interface declaration for CfnTargetGroupProps for the query.
 *
 * The VectorDb index has a chunk per CDKTF Resource containing:
 * - Summary section from the Markdown doc files.
 * - Arguments data from the Markdown doc files.
 *
 * This example:
 * - ... retrieves the top 10 relevant chunks based on the query,
 * - reranks them, see [re-ranking](https://mastra.ai/docs/rag/retrieval#re-ranking) and
 * - prints the re-ranked results.
 */
import * as fs from 'fs';
import * as path from 'path';
import { openai } from '@ai-sdk/openai';
import { QueryResult } from '@mastra/core';
import { rerank } from '@mastra/rag';
import { UpstashVector } from '@mastra/upstash';
import { embed } from 'ai';
import { filterGeneratedModule, gitRoot } from '../util/helpers.js';
import { TokenCounter } from '../util/tiktoken.js';
import { getUpstashConfig, OPENAI_EMBED_MAX_TOKENS, ResourceMetadata } from '../util/rag.js';
import dotenv from 'dotenv';

dotenv.config();

// --- Init Upstash VectorDB ---

const indexName = 'provider-aws-resources-small';
// NOTE: store in same Upstash Index, different namespace:
const namespace = 'provider-aws-resources-5-100-0';
// Get Pre-created Upstash Index configuration
// set up with pay as you go
// see: https://upstash.com/pricing/vector
const { dimensions, upstashUrl, upstashToken, embeddingModel } = getUpstashConfig(indexName);

if (!upstashToken) {
  throw new Error(`Missing UPSTASH_TOKEN_xxx environment variable for ${indexName}`);
}
const counter = new TokenCounter(embeddingModel);
const store = new UpstashVector({
  url: upstashUrl,
  token: upstashToken,
});

// --- Sample Query ---

const awsCdkPkgDir = path.join(gitRoot, 'data', 'reference', 'declarations', 'aws-cdk-lib');
const refFile = path.join(awsCdkPkgDir, 'aws-elasticloadbalancingv2', 'lib', 'elasticloadbalancingv2.generated.d.ts');
const refContents = fs.readFileSync(refFile, 'utf-8');
const filteredReferenceData = filterGeneratedModule(refContents, ['CfnTargetGroupProps']);

const userQueryText = `
  What CDKTF Resources are relevant to CloudFormation CfnTargetGroup:
  ${filteredReferenceData}
`;

const [filteredContentsCount = 0, userQueryTextCount = 0] = counter.count(filteredReferenceData, userQueryText);
console.log(`User Query: ${userQueryText}`);
console.log(`filtered Contents Tokens:  ${filteredContentsCount}`);
console.log(`userQueryTextCount Tokens: ${userQueryTextCount}`);
if (userQueryTextCount > OPENAI_EMBED_MAX_TOKENS) {
  throw new Error(`User Query exceeds embedding model max tokens: ${userQueryTextCount} > ${OPENAI_EMBED_MAX_TOKENS}`);
}

const { embedding: queryEmbedding } = await embed({
  model: openai.embedding(embeddingModel, {
    dimensions,
  }),
  value: userQueryText,
});

let results: QueryResult[] = [];
try {
  results = await store.query({
    // TODO: Currently ref-embed.ts stores every AWS Resource in a single Upstash namespace === indexName
    indexName: namespace, // use the same namespace as the store
    queryVector: queryEmbedding,
    includeVector: true, // required for reranking
    topK: 10, // Retrieve top 10 related nodes (adjust as needed)
  });
} catch (error) {
  if (error instanceof Error) {
    console.log(error.cause); // 'connection_failed' | 'invalid_dimension' | etc
    console.log(error.message); // Additional error context
  }
}

// original results
console.log('Store Query Results:');
results.forEach(result => {
  console.log(`Score: ${result.score}`);
  const metadata = result.metadata as ResourceMetadata | undefined;
  if (metadata) {
    console.log(`FQN: ${metadata.fqn}`);
    console.log(`subcategory: ${metadata.subcategory}`);
    console.log(`sourceFile: ${metadata.sourceFile}`);
    console.log(`originalText: ${metadata.originalText.substring(0, 100) + '...'}`);
  }
  // console.log(`content: ${result.document?.substring(0, 100) + '...' || 'empty document'}`); // Show some content
  console.log('---');
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
const rerankedResults = await rerank(queryResult, userQueryText, openai('gpt-4o-mini'), {
  topK: 5,
});

// top 5 re-ranked results
console.log('Reranked RAG Results (top 5):');
rerankedResults.forEach(reranked => {
  const result = reranked.result;
  console.log(`ReRanked Score: ${reranked.score}`);
  // console.log(`ReRanked details: ${JSON.stringify(reranked.details, null, 2)}`);
  console.log(`Original Score: ${result.score}`);
  const metadata = result.metadata as ResourceMetadata | undefined;
  if (metadata) {
    console.log(`FQN: ${metadata.fqn}`);
    console.log(`subcategory: ${metadata.subcategory}`);
    console.log(`sourceFile: ${metadata.sourceFile}`);
    console.log(`originalText: ${metadata.originalText.substring(0, 100) + '...'}`);
  }
  // console.log(`content: ${result.document?.substring(0, 100) + '...' || 'empty document'}`); // Show some content
  console.log('---');
});
