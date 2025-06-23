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
import { ContextExporter, type ContextExportConfig } from '../util/export-context.js';

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

/**
 * A step to export conversion context for Claude Code users
 */
export const exportConversionContextStep = createStep({
  id: 'export-conversion-context',
  description: 'Export conversion context for Claude Code users',
  inputSchema: batchRetrieveCdktfRefsOutputSchema,
  outputSchema: z.object({
    contextPath: z.string(),
    batchRetrieveCdktfRefs: batchRetrieveCdktfRefsOutputSchema, // Pass through for next steps
  }),
  execute: async ({ inputData, getStepResult, getInitData }) => {
    const batchRetrieveCdktfRefs = inputData;

    // Get workspace and upstream details from earlier steps
    const workspace = getStepResult(ensureWorkspaceStep);
    const upstream = getStepResult(ensureUpstreamStep);
    const libInputRefs = getStepResult(findLibInputRefsStep);
    const testInputRefs = getStepResult(findTestInputRefsStep);
    const initData = getInitData<typeof vNextConversionWorkflow>();

    if (!workspace || !upstream || !libInputRefs || !testInputRefs) {
      throw new Error('Missing required step results for context export');
    }

    // Use the same batch conversion functions to get exact same file processing
    const sourceConversionRequests = await batchConvertSourceCodeRequests(batchRetrieveCdktfRefs);
    const unitTestConversionRequests = await batchConvertUnitTestsRequests({
      testInputFiles: testInputRefs,
      batchRetrieveCdktfRefs,
    });

    // Transform data for context exporter using actual conversion request data
    const config: ContextExportConfig = {
      workspacePath: workspace.targetDir,
      upstreamModule: {
        name: upstream.moduleName,
        tag: upstream.tag,
        gitRepo: upstream.repo,
        localPath: upstream.upstreamDir,
      },
      outputModule: initData.outputModule,
      cdktfMappings: batchRetrieveCdktfRefs.map(item => ({
        awsCdkConstruct: item.inputFile,
        cdktfResources: item.ragResults.flatMap(ragResult =>
          ragResult.rerankedResults.map(result => ({
            resource: result.metadata.fqn || result.id,
            confidence: result.rerankedScore,
            selected: result.rerankedScore > 0.7, // Use threshold for selection
          })),
        ),
      })),
      fileInstructions: [
        // Source files using actual conversion request data
        ...sourceConversionRequests.map(request => ({
          filePath: request.inputFile,
          fileType: 'source' as const,
          upstreamModule: upstream.moduleName,
          awsCdkConstructs:
            libInputRefs.inputFiles
              .find(f => f.inputFile === request.inputFile)
              ?.inputRefs.map(ref => ref.sourceClass) || [],
          cdktfMappings: batchRetrieveCdktfRefs
            .filter(item => item.inputFile === request.inputFile)
            .flatMap(item =>
              item.ragResults.flatMap(ragResult =>
                ragResult.rerankedResults
                  .filter(result => result.rerankedScore > 0.7)
                  .map(result => result.metadata.fqn || result.id),
              ),
            ),
          conversionGuidance: `Convert this AWS CDK source file to TerraConstructs following the established patterns. Pay special attention to extending AwsConstructBase and implementing the outputs getter.`,
          inputRefFiles: request.inputRefFiles,
          outputRefFiles: request.outputRefFiles, // Exact same merged docs files used in conversion
        })),
        // Test files using actual conversion request data
        ...unitTestConversionRequests.map(request => ({
          filePath: request.inputFile,
          fileType: 'test' as const,
          upstreamModule: upstream.moduleName,
          awsCdkConstructs: [], // Tests don't directly contain constructs
          cdktfMappings: [], // But reference the constructs being tested
          conversionGuidance: `Convert this AWS CDK unit test to TerraConstructs testing patterns. Use Template constructor, CDKTF testing adapters, and snake_case field names.`,
          inputRefFiles: request.inputRefFiles,
          outputRefFiles: request.outputRefFiles, // Exact same markdown HCL docs used in conversion
        })),
      ],
    };

    // Export context
    const contextExporter = new ContextExporter(config);
    const contextPath = await contextExporter.export();

    console.log(`✅ Conversion context exported to: ${contextPath}`);
    console.log(`📖 Claude Code users can reference the context for manual completion`);

    return {
      contextPath,
      batchRetrieveCdktfRefs, // Pass through for subsequent steps
    };
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
  inputSchema: z.object({
    contextPath: z.string(),
    batchRetrieveCdktfRefs: batchRetrieveCdktfRefsOutputSchema,
  }),
  outputSchema: sourceConversionResultSchema,
  execute: async ({ inputData }) => {
    const batchRetrieveCdktfRefs = inputData.batchRetrieveCdktfRefs;
    const lim = RateLimit(1); // 1 request per second
    const batchConvertResults: z.infer<typeof sourceConversionResultSchema> = [];
    for (const conversionRequest of await batchConvertSourceCodeRequests(batchRetrieveCdktfRefs)) {
      await lim();
      console.log(`LLM Call: converting Source Code: ${conversionRequest.inputFile}`);
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
  inputSchema: z.object({
    contextPath: z.string(),
    batchRetrieveCdktfRefs: batchRetrieveCdktfRefsOutputSchema,
  }),
  outputSchema: unitTestsConversionResultSchema,
  execute: async ({ inputData, getStepResult }) => {
    const batchRetrieveCdktfRefs = inputData.batchRetrieveCdktfRefs;
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
      console.log(`LLM Call: converting Unit Test: ${conversionRequest.inputFile}`);
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

    // Include context directory in the output for user reference
    const contextPath = path.join(workspace.targetDir, '.conversion-context');
    writtenFiles.push(contextPath);

    console.log(`📁 Total files written: ${writtenFiles.length}`);
    console.log(`📖 Conversion context available at: ${contextPath}`);
    console.log(`🔧 Claude Code users can reference the context for manual completion`);

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
    prepareFindRefsStep,
    findLibInputRefsStep,
    findTestInputRefsStep,
    findLibCdktfRefsStep,
    reviewCdktfRefsStep,
    exportConversionContextStep,
    // batchConvertSourceCodeStep,
    // batchConvertUnitTestsStep,
    // batchWriteToWorkspaceStep,
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

  // Phase 3.5: Export Context (Sequential)
  // exportConversionContextStep takes the output of reviewCdktfRefsStep
  .then(exportConversionContextStep)
  // Output: { contextPath: string, batchRetrieveCdktfRefs: batchRetrieveCdktfRefsOutputSchema }

  // Phase 4: Convert Code (Parallel)
  // Both steps take the output of exportConversionContextStep as inputData.
  // batchConvertUnitTestsStep (adjusted) fetches test refs internally.
  .parallel([
    batchConvertSourceCodeStep, // Takes context export output
    batchConvertUnitTestsStep, // Takes context export output, fetches test refs
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
