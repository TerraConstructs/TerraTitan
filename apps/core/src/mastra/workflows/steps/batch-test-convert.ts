import { z } from 'zod';
import { batchRetrieveCdktfRefsOutputSchema } from './batch-cdktf-ref-rag.js';
import { findTestInputRefsOutputSchema } from './find-input-refs.js';
import { 
  processCdktfReferences, 
  buildUnitTestConversionRequests
} from '../../util/cdktf-ref-processor.js';

// TODO: Use zod schemas in mastra/agents/unit-converter/index.ts
export const unitTestsConversionSchema = z.object({
  inputFile: z.string(),
  inputRefFiles: z.array(z.string()),
  outputRefFiles: z.array(z.string()),
  // outputPath: z.string().optional(),
});

export const batchConvertUnitTestsRequestsInputSchema = z.object({
  /**
   * All the input Unit Test Files to convert
   */
  testInputFiles: findTestInputRefsOutputSchema,
  /**
   * Re-use the CDKTF references from the source code conversion
   */
  batchRetrieveCdktfRefs: batchRetrieveCdktfRefsOutputSchema,
});

export const batchConvertUnitTestsRequestsOutputSchema = z.array(unitTestsConversionSchema);

// Example:
// unitTestConversions: [
//   {
//     inputFile: path.join(upstreamDir, moduleName, 'test', 'sns.test.ts'),
//     inputRefFiles: [
//       path.join(awsCdkSrcDir, moduleName, 'topic.d.ts'),
//       path.join(awsCdkSrcDir, moduleName, 'topic-base.d.ts'),
//       path.join(awsCdkSrcDir, moduleName, 'policy.d.ts'),
//     ],
//     // Result of CDKTF Ref retrieval
//     outputRefFiles: [
//       path.join(markdownAwsDocs, 'sns_topic.html.markdown'),
//       path.join(markdownAwsDocs, 'sns_topic_policy.html.markdown'),
//       path.join(markdownAwsDocs, 'sns_topic_data_protection_policy.html.markdown'),
//     ],
//     // outputPath: path.join('test', 'aws', 'notify', 'sns.test.ts'),
//   },
// ],

/**
 * A function to prepare the Unit Test conversion requests from the batchRetrieveCdktfRefs step
 *
 * @param input - The input files and their CDKTF references
 * @returns The source conversion requests for the sourceConverter agent
 */
export async function batchConvertUnitTestsRequests(
  input: z.infer<typeof batchConvertUnitTestsRequestsInputSchema>,
  // outputModule: string,
): Promise<z.infer<typeof batchConvertUnitTestsRequestsOutputSchema>> {
  // Process CDKTF references using shared utility
  const processedRefs = processCdktfReferences(input.batchRetrieveCdktfRefs);
  
  // Build unit test conversion requests using shared utility
  return buildUnitTestConversionRequests(processedRefs, input.testInputFiles.inputFiles);
}
