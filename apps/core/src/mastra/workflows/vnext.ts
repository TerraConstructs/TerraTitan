import path from 'node:path';
import { RateLimit } from 'async-sema';
import { createWorkflow, createStep } from '@mastra/core/workflows/vNext';
import { z } from 'zod';
import { ensureUpstreamOutputSchema, ensureUpstreamInputSchema, ensureUpstream } from './steps/ensure-upstream.js';
import { sourceConverter } from '../agents/source-converter/index.js';
import { unitConverter } from '../agents/unit-converter/index.js';
import { sourceConversionRequestSchema, batchConvertSourceCodeRequests } from './steps/batch-source-convert.js';
import { unitTestsConversionSchema, batchConvertUnitTestsRequests } from './steps/batch-test-convert.js';
import { workspaceInputSchema, ensureWorkspace, workspaceOutputSchema } from './steps/ensure-workspace.js';
import { batchWriteCode } from './steps/batch-write-code.js';
import {
  findSrcInputRefs,
  findSrcInputRefsOutputSchema,
  findTestInputRefs,
  findTestInputRefsOutputSchema,
} from './steps/find-input-refs.js';
import {
  batchRetrieveCdktfRefs,
  batchRetrieveCdktfRefsOutputSchema,
  choiceValueSchema,
  mergeSelections,
  prepareBatchReview,
  reviewPayloadSchema,
} from './steps/batch-cdktf-ref-rag.js';

/**
 * The initial Init data for the workflow
 */
export const initSchema = z.object({
  /**
   * The Upstream Module information to use for the conversion
   */
  upstreamModule: ensureUpstreamInputSchema,
  /**
   * The run the conversion into
   */
  workspace: workspaceInputSchema,
  /**
   * The output module to write to within the Workspace
   */
  outputModule: z.string(),
});

export type InitType = z.infer<typeof initSchema>;

/**
 * Ensure the upstream module is available for conversion
 */
const ensureUpstreamStep = createStep({
  id: 'ensure-upstream',
  description: 'Ensures an upstream module is available for conversion',
  inputSchema: initSchema,
  outputSchema: ensureUpstreamOutputSchema,
  execute: async ({ inputData }) => {
    return await ensureUpstream(inputData.upstreamModule);
  },
});

/**
 * Ensure the workspace to convert into is available
 */
const ensureWorkspaceStep = createStep({
  id: 'ensure-workspace',
  description: 'Ensures the workspace to convert into is available',
  inputSchema: initSchema,
  outputSchema: workspaceOutputSchema,
  execute: async ({ inputData }) => {
    return await ensureWorkspace(inputData.workspace);
  },
});

// Intermediate step to extract upstream details after initial parallel
const prepareFindRefsStep = createStep({
  id: 'prepare-find-refs',
  // Takes the output object from the first parallel block
  inputSchema: z
    .object({
      [ensureUpstreamStep.id]: ensureUpstreamOutputSchema,
      [ensureWorkspaceStep.id]: workspaceOutputSchema, // Needs to be included to match input
    })
    .passthrough(),
  // Outputs only the upstream details needed by find*Refs steps
  outputSchema: ensureUpstreamOutputSchema,
  execute: async ({ inputData }) => {
    const upstreamDetails = inputData[ensureUpstreamStep.id];
    if (!upstreamDetails) throw new Error(`Missing upstream details in prepare-find-refs`);
    return upstreamDetails;
  },
});

/**
 * A step to walk the upstream directory lib folder and find all source code inputs
 */
const findLibInputRefsStep = createStep({
  id: 'find-lib-input-refs',
  description: 'Finds the Source Code input references for the conversion',
  inputSchema: ensureUpstreamOutputSchema,
  outputSchema: findSrcInputRefsOutputSchema,
  execute: async ({ inputData }) => findSrcInputRefs(inputData),
});

/**
 * A step to walk the upstream directory test folder and find all unit test inputs
 */
const findTestInputRefsStep = createStep({
  id: 'find-test-input-refs',
  description: 'Discovers Unit Test input references for the conversion',
  inputSchema: ensureUpstreamOutputSchema,
  outputSchema: findTestInputRefsOutputSchema,
  execute: async ({ inputData }) => findTestInputRefs(inputData),
});

const findLibCdktfRefsStep = createStep({
  id: 'find-lib-output-refs',
  description: 'Finds the Source Code CDKTF references for the conversion',
  // InputSchema accepts the output object from the find refs parallel step
  inputSchema: z
    .object({
      [findLibInputRefsStep.id]: findSrcInputRefsOutputSchema,
      [findTestInputRefsStep.id]: findTestInputRefsOutputSchema, // Include test refs even if unused
    })
    .passthrough(),
  outputSchema: batchRetrieveCdktfRefsOutputSchema,
  execute: async ({ inputData }) => {
    // Extract the required srcInputRefs from the input object
    const srcInputRefs = inputData[findLibInputRefsStep.id];
    if (!srcInputRefs) throw new Error(`Missing lib input refs in input for ${findLibCdktfRefsStep.id}`);
    return await batchRetrieveCdktfRefs(srcInputRefs);
  },
});

const cdktfRefReviewResumeSchema = z.object({
  selectedReferences: z.array(choiceValueSchema),
});
export type CdktfRefReviewResumeType = z.infer<typeof cdktfRefReviewResumeSchema>;
export const reviewCdktfRefsStep = createStep({
  id: 'review-cdktf-refs',
  description: 'Human in the loop review of all CDKTF reference suggestions in the batch',
  inputSchema: batchRetrieveCdktfRefsOutputSchema,
  suspendSchema: reviewPayloadSchema,
  resumeSchema: cdktfRefReviewResumeSchema,
  outputSchema: batchRetrieveCdktfRefsOutputSchema,
  execute: async ({ resumeData, inputData, suspend }) => {
    const batch = inputData;
    // Access the human input provided when resuming the workflow
    if (resumeData?.selectedReferences) {
      // answer will be an array of the `value` objects from `choices`
      const { selectedReferences } = resumeData;
      const mergedBatch = mergeSelections(batch, selectedReferences);
      // console.log('Merged Batch', JSON.stringify(mergedBatch, null, 2));
      return mergedBatch;
    }
    const { updatedBatch, reviewPayload } = prepareBatchReview(batch, 0.7);
    if (reviewPayload) {
      // suspend with the single payload
      await suspend(reviewPayload);
    }
    // no review needed
    // console.log('Updated Batch', JSON.stringify(updatedBatch, null, 2));
    return updatedBatch;
  },
});

// result from sourceConverter agent(s) merged into the sourceCodeConversions
const sourceConversionResultSchema = z.array(
  sourceConversionRequestSchema.extend({
    /**
     * The converted TerraConstructs Source Code
     */
    code: z.string(),
  }),
);

/**
 * A step to convert a Batch of source code from AWS CDK to TerraConstructs
 */
export const batchConvertSourceCodeStep = createStep({
  id: 'convert-source-code',
  description: 'Convert a batch of reviewed Source Code conversion inputs',
  inputSchema: batchRetrieveCdktfRefsOutputSchema,
  outputSchema: sourceConversionResultSchema,
  execute: async ({ inputData }) => {
    const batchRetrieveCdktfRefs = inputData;
    const lim = RateLimit(1); // 1 request per second
    const batchConvertResults: z.infer<typeof sourceConversionResultSchema> = [];
    for (const conversionRequest of await batchConvertSourceCodeRequests(batchRetrieveCdktfRefs)) {
      await lim();
      const result = await sourceConverter.convert(conversionRequest);
      batchConvertResults.push({
        ...conversionRequest,
        code: result.code,
      });
    }
    return batchConvertResults;
  },
});

// result from unitConverter agent(s) merged into the unitTestsConversions
const unitTestsConversionResultSchema = z.array(
  unitTestsConversionSchema.extend({
    /**
     * The converted TerraConstructs Unit Tests
     */
    code: z.string(),
  }),
);

/**
 * A step to convert a Batch of Unit Tests from AWS CDK to TerraConstructs
 */
export const batchConvertUnitTestsStep = createStep({
  id: 'convert-test-code',
  description: 'Convert a batch of Unit Test conversion inputs',
  inputSchema: batchRetrieveCdktfRefsOutputSchema, // Takes output of review step
  outputSchema: unitTestsConversionResultSchema,
  execute: async ({ inputData, getStepResult }) => {
    const batchRetrieveCdktfRefs = inputData;
    const testInputFiles = getStepResult(findTestInputRefsStep);
    if (!testInputFiles) {
      throw new Error(`Could not retrieve results for step: ${findTestInputRefsStep.id}`);
    }
    const lim = RateLimit(1); // 1 request per second
    const unitTestConversionRequests = await batchConvertUnitTestsRequests({
      testInputFiles,
      batchRetrieveCdktfRefs,
    });
    const batchConvertResults: z.infer<typeof unitTestsConversionResultSchema> = [];
    for (const conversionRequest of unitTestConversionRequests) {
      await lim();
      const result = await unitConverter.convert(conversionRequest);
      batchConvertResults.push({
        ...conversionRequest,
        code: result.code,
      });
    }
    return batchConvertResults;
  },
});

const batchWriteToWorkspaceStep = createStep({
  id: 'write-to-workspace',
  description: 'Write the converted Source Code and Unit Tests to the workspace',
  outputSchema: z.array(z.string()),
  inputSchema: z
    .object({
      /**
       * The output of the batchConvertSourceCodeStep step
       */
      [batchConvertSourceCodeStep.id]: sourceConversionResultSchema,
      /**
       * The output of the batchConvertUnitTestsStep step
       */
      [batchConvertUnitTestsStep.id]: unitTestsConversionResultSchema,
    })
    .passthrough(), // Use passthrough() if the object might have extra keys you don't care aboutz.object({
  execute: async ({ inputData, getStepResult, getInitData }) => {
    // Extract results from the parallel step's output structure
    const batchSourceConvertResults = inputData[batchConvertSourceCodeStep.id];
    const batchTestConvertResults = inputData[batchConvertUnitTestsStep.id];
    // Fetch workspace details from the earlier step
    const workspace = getStepResult(ensureWorkspaceStep);
    // Fetch outputModule from initial workflow data
    const initData = getInitData<typeof vNextConversionWorkflow>(); // Provide Workflow type for safety
    const outputModule = initData.outputModule;

    if (!workspace) {
      throw new Error(`Could not retrieve results for step: ${ensureWorkspaceStep.id}`);
    }
    if (!batchSourceConvertResults || !batchTestConvertResults) {
      throw new Error(`Missing conversion results in input data for ${batchWriteToWorkspaceStep.id}`);
    }

    console.log(
      `Writing ${batchSourceConvertResults.length} source files and ${batchTestConvertResults.length} unit test files to the workspace`,
    );
    const writtenFiles: string[] = [];
    // TODO: Handle rawFiles from upstream module (copy as-is to workspace)

    // Write the converted source code to the Workspace
    const sourceCodeFiles = await batchWriteCode(
      batchSourceConvertResults.map(sourceConvertResult => ({
        inputFile: sourceConvertResult.inputFile,
        code: sourceConvertResult.code,
        infixPath: path.join('src', 'aws'),
        // Pass workspace and outputModule to batchWriteCode calls
        workspace,
        outputModule,
      })),
    );
    writtenFiles.push(...sourceCodeFiles);
    // Write the converted unit tests to the Workspace
    const unitTestFiles = await batchWriteCode(
      batchTestConvertResults.map(testConvertResult => ({
        inputFile: testConvertResult.inputFile,
        code: testConvertResult.code,
        infixPath: path.join('test', 'aws'),
        // Pass workspace and outputModule to batchWriteCode calls
        workspace,
        outputModule,
      })),
    );
    writtenFiles.push(...unitTestFiles);

    // TODO: When files are renamed due to conflicts, imports also need to be updated...

    return writtenFiles;
  },
});

// Define the final output schema of the workflow
const finalOutputSchema = z.array(z.string()).describe('List of file paths written to the workspace');

export const vNextConversionWorkflow = createWorkflow({
  id: 'awscdk-to-tcons-conversion',
  inputSchema: initSchema,
  outputSchema: finalOutputSchema,
  // List all steps used for final result object type safety.
  // Remove reviewCdktfRefsStep if it causes type errors due to complex schemas.
  steps: [
    ensureUpstreamStep,
    ensureWorkspaceStep,
    prepareFindRefsStep, // Added intermediate step
    findLibInputRefsStep,
    findTestInputRefsStep,
    findLibCdktfRefsStep,
    reviewCdktfRefsStep,
    batchConvertSourceCodeStep,
    batchConvertUnitTestsStep,
    batchWriteToWorkspaceStep,
  ],
});

// --- Build the Workflow Execution Logic ---

vNextConversionWorkflow
  // Phase 1: Setup (Parallel)
  .parallel([ensureUpstreamStep, ensureWorkspaceStep])
  // Output: { 'ensure-upstream': ..., 'ensure-workspace': ... }

  // Phase 1.5: Extract Upstream Data (Sequential Intermediate Step)
  .then(prepareFindRefsStep)
  // Output: ensureUpstreamOutputSchema

  // Phase 2: Find References (Parallel)
  // The steps inside this block receive the output object from Phase 1 as inputData.
  // Their adjusted 'execute' functions extract the needed parts.
  .parallel([findLibInputRefsStep, findTestInputRefsStep])
  // Output: { 'find-lib-input-refs': ..., 'find-test-input-refs': ... }
  // This object becomes inputData for the next step.

  // Phase 3: Prepare and Review CDKTF Lib Refs (Sequential)
  // findLibCdktfRefsStep receives the output object from Phase 2.
  // Its adjusted 'execute' function extracts the needed parts.
  .then(findLibCdktfRefsStep) // Adjusted to handle Phase 2 output obj
  // Output: batchRetrieveCdktfRefsOutputSchema (candidates)

  // reviewCdktfRefsStep takes the output of findLibCdktfRefsStep directly.
  .then(reviewCdktfRefsStep)
  // Output: batchRetrieveCdktfRefsOutputSchema (reviewed)

  // Phase 4: Convert Code (Parallel)
  // Both steps take the output of reviewCdktfRefsStep as inputData.
  // batchConvertUnitTestsStep (adjusted) fetches test refs internally.
  .parallel([
    batchConvertSourceCodeStep, // Takes reviewed refs directly
    batchConvertUnitTestsStep, // Takes reviewed refs, fetches test refs
  ])
  // Output: { 'convert-source-code': ..., 'convert-test-code': ... }
  // This object becomes inputData for the final step.

  // Phase 5: Write to Workspace (Sequential)
  // batchWriteToWorkspaceStep receives the output object from Phase 4.
  // Its adjusted 'execute' function extracts results and fetches context.
  .then(batchWriteToWorkspaceStep)
  // Output: string[] (finalOutputSchema)

  // Finalize
  .commit();
