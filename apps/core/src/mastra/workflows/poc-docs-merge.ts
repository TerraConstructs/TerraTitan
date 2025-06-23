import { createWorkflow, createStep } from '@mastra/core/workflows/vNext';
import {
  docsMergerAgent,
  generateNewPrompt,
  docMergeRequestSchema,
  docMergeResponseSchema,
} from '../agents/docs-merger.js';

/**
 * Step to merge Markdown documentation and TypeScript declaration files into a single TypeScript file.
 */
const mergeDocsStep = createStep({
  id: 'merge-docs',
  description: 'Merges Markdown documentation and TypeScript declaration files into a single TypeScript file.',
  inputSchema: docMergeRequestSchema,
  outputSchema: docMergeResponseSchema,
  execute: async ({ inputData }) => {
    const content = generateNewPrompt(inputData);
    const result = await docsMergerAgent.generate([{ role: 'user', content }], {
      output: docMergeResponseSchema,
    });
    // unwrap the generated text
    return result.object;
  },
});

export const mergeDocsWorkflow = createWorkflow({
  id: 'merge-docs',
  inputSchema: docMergeRequestSchema,
  outputSchema: docMergeResponseSchema,
  // List all steps used for final result object type safety.
  // Remove reviewCdktfRefsStep if it causes type errors due to complex schemas.
  steps: [mergeDocsStep],
});
mergeDocsWorkflow.then(mergeDocsStep).commit();
