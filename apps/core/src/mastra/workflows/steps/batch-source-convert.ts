import { z } from 'zod';
import { batchRetrieveCdktfRefsOutputSchema } from './batch-cdktf-ref-rag.js';
import { 
  processCdktfReferences, 
  buildSourceConversionRequests
} from '../../util/cdktf-ref-processor.js';

// TODO: Use zod schemas in mastra/agents/source-converter/index.ts
export const sourceConversionRequestSchema = z.object({
  inputFile: z.string(),
  inputRefFiles: z.array(z.string()),
  outputRefFiles: z.array(z.string()),
  // outputPath: z.string().optional(),
});

export const batchConvertSourceCodeRequestsOutputSchema = z.array(sourceConversionRequestSchema);

// Example:
// sourceCodeConversions: [
//   {
//     inputFile: path.join(upstreamDir, moduleName, 'src', 'topic.ts'),
//     inputRefFiles: [path.join(awsCdkPkgDir, moduleName, 'lib', 'sns.generated.d.ts')],
//     // Result of CDKTF Ref retrieval
//     outputRefFiles: [
//       path.join(mergedAwsDocs, 'sns-topic', 'index.d.ts'),
//       path.join(mergedAwsDocs, 'sns-topic-data-protection-policy', 'index.d.ts'),
//       path.join(mergedAwsDocs, 'sns-topic-policy', 'index.d.ts'),
//       path.join(mergedAwsDocs, 'sns-topic-subscription', 'index.d.ts'),
//     ],
//     // outputPath: path.join('src', 'aws', 'notify', 'topic.ts'),
//   },
// ],

/**
 * A function to prepare the source conversion requests from the batchRetrieveCdktfRefs step
 *
 * @param input - The input files and their CDKTF references
 * @returns The source conversion requests for the sourceConverter agent
 */
export async function batchConvertSourceCodeRequests(
  input: z.infer<typeof batchRetrieveCdktfRefsOutputSchema>,
  // outputModule: string,
): Promise<z.infer<typeof batchConvertSourceCodeRequestsOutputSchema>> {
  // Process CDKTF references using shared utility
  const processedRefs = processCdktfReferences(input);
  
  // Build source conversion requests using shared utility
  return buildSourceConversionRequests(processedRefs);
}
