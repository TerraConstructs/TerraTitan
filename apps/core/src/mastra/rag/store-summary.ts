/**
 * Load & Store chunked CDKTF AWS resources "Summary" embeddings
 *
 * This script loads chunks from disk into Upstash VectorDb
 *
 * Batch based on Upstash API Limits:
 * - Maximum chunks per call: 1,000
 * - Maximum metadata size: 49,152
 *
 * batch size: 300
 */
import * as fs from 'fs';
import * as path from 'path';
import { UpstashVector } from '@mastra/upstash';
import { getUpstashConfig, ResourceChunk } from '../util/rag.js';
import dotenv from 'dotenv';

const MAX_METADATA_SIZE_BYTES = 49000; // Slightly under Upstash's 49152 limit

dotenv.config();

// re-use pre-created Upstash indexnames for TerraTitan
// (determines embedding model and dimensions)
//
// - 'provider-aws-resources-small' (original namespace)
// - 'provider-aws-resources-5-100-0' (versioned for terraform-provider-aws v5.100.0)
// - 'provider-aws-resources-large'
const indexName = 'provider-aws-resources-small';
// NOTE: store in same Upstash Index, different namespace:
const namespace = 'provider-aws-resources-5-100-0';
const outputDir = path.join(process.cwd(), 'output');

// Get Pre-created Upstash Index configuration
// set up with pay as you go
// see: https://upstash.com/pricing/vector
const { upstashUrl, upstashToken, embeddingModel } = getUpstashConfig(indexName);

if (!upstashToken) {
  throw new Error(`Missing UPSTASH_TOKEN_xxx environment variable for ${indexName}`);
}

// Configure index specific Vector Store
const store = new UpstashVector({
  url: upstashUrl,
  token: upstashToken,
});

// load chunks from disk
const chunksForGraphOutput = path.join(outputDir, `aws-resources-summary-${embeddingModel}.json`);
if (!fs.existsSync(chunksForGraphOutput)) {
  throw new Error(`Chunks file ${chunksForGraphOutput} does not exist.`);
}
const summaryChunks = JSON.parse(fs.readFileSync(chunksForGraphOutput, 'utf-8')) as ResourceChunk[];

// Helper function to estimate object size in bytes
function getObjectSizeInBytes(obj: any): number {
  const jsonString = JSON.stringify(obj);
  // In JavaScript, each character is 2 bytes (UTF-16)
  return jsonString.length;
}

// Batch resources to store
// TODO: use async-sema RateLimnit imstead
// ref: https://chatgpt.com/share/67f55889-42d0-800f-9a8a-369fbfbb5cdd
const batchSize = 500;
const batchCount = Math.ceil(summaryChunks.length / batchSize);
console.log(`Starting store process for ${summaryChunks.length} chunks...`);
console.log(`Batch size: ${batchSize}, Batch count: ${batchCount}`);

// check if batchSize causes metadata to exceed the upstash Metadata Size limit
for (let i = 0; i < summaryChunks.length; i += batchSize) {
  const batch = summaryChunks.slice(i, i + batchSize);
  const batchNumber = Math.floor(i / batchSize) + 1;
  // let batchMetadatasize = 0; // Turns out this doesn't matter
  for (const chunk of batch) {
    const metadataSize = getObjectSizeInBytes(chunk.metadata);
    if (metadataSize > MAX_METADATA_SIZE_BYTES) {
      console.warn(
        `Batch: ${batchNumber} - Metadata size for chunk ${chunk.metadata.fqn} exceeds limit: ${metadataSize} bytes`,
      );
    }
    // batchMetadatasize += metadataSize;
  }
  // if (batchMetadatasize > MAX_METADATA_SIZE_BYTES) {
  //   console.warn(`Metadata size for batch ${batchNumber} exceeds limit: ${batchMetadatasize} bytes`);
  //   process.exit(1); // Exit if any chunk exceeds the limit
  // }
}

let embeddingsStoreCount = 0;
for (let i = 0; i < summaryChunks.length; i += batchSize) {
  const batch = summaryChunks.slice(i, i + batchSize);
  const batchNumber = Math.floor(i / batchSize) + 1;

  console.log(`Processing batch ${batchNumber}/${batchCount} (${batch.length} items)...`);
  try {
    await store.upsert({
      ids: batch.map(r => r.metadata.fqn), // Use fqn as unique ID
      // Mastra indexName == https://upstash.com/docs/vector/features/namespaces
      indexName: namespace,
      // Array of embedding vectors
      vectors: batch.map(r => r.vector),
      // Array of corresponding metadata objects
      metadata: batch.map(r => r.metadata),
    });
    embeddingsStoreCount += batch.length;
  } catch (error: any) {
    console.error(`Error processing batch ${batchNumber} (starting index ${i}):`, error);
    // Add robust error handling (check for 429, retry with backoff)
    console.warn(`Skipping failed batch ${batchNumber}. Implement retry logic!`);
    // break; // Or decide how to handle failures
  }
}

console.log(`Store process finished. Total embeddings stored: ${embeddingsStoreCount}`);
