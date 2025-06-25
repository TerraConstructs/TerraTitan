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
 * File filtering step schemas
 */

// Choice value for a single file
const fileFilterChoiceValueSchema = z.object({
  filePath: z.string(),
  fileType: z.enum(['source', 'test', 'raw']),
});

// Individual file choice for the grouped checkbox
const fileFilterChoiceSchema = z.object({
  name: z.string(),
  description: z.string(),
  value: fileFilterChoiceValueSchema,
  checked: z.boolean().optional().default(true),
});

// Group of file choices
const fileFilterGroupSchema = z.object({
  name: z.string(),
  description: z.string(),
  choices: z.array(fileFilterChoiceSchema),
});

// Suspend payload for file filtering
export const fileFilterSuspendSchema = z.object({
  message: z.string(),
  groupedChoices: z.array(fileFilterGroupSchema),
});

// Resume data for file filtering
export const fileFilterResumeSchema = z.object({
  selectedFiles: z.array(fileFilterChoiceValueSchema),
});

export type FileFilterResumeType = z.infer<typeof fileFilterResumeSchema>;

// Output schema for filtered input files
const filteredInputFilesSchema = z.object({
  filteredSrcInputs: findSrcInputRefsOutputSchema,
  filteredTestInputs: findTestInputRefsOutputSchema,
});

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

/**
 * Step to filter input files before processing
 */
export const filterInputFilesStep = createStep({
  id: 'filter-input-files' as const,
  description: 'Allow user to filter which source and test files to process',
  suspendSchema: fileFilterSuspendSchema,
  resumeSchema: fileFilterResumeSchema,
  inputSchema: z
    .object({
      [findLibInputRefsStep.id]: findSrcInputRefsOutputSchema,
      [findTestInputRefsStep.id]: findTestInputRefsOutputSchema,
    })
    .passthrough(),
  outputSchema: filteredInputFilesSchema,
  execute: async ({ inputData, resumeData, suspend, getStepResult }) => {
    const srcInputRefs = inputData[findLibInputRefsStep.id];
    const testInputRefs = inputData[findTestInputRefsStep.id];
    const upstreamDetails = getStepResult(ensureUpstreamStep);

    const relativeToUpstreamDir = (filePath: string) => {
      return path.relative(upstreamDetails.upstreamDir, filePath);
    };

    if (!srcInputRefs) throw new Error(`Missing src input refs in input for ${filterInputFilesStep.id}`);
    if (!testInputRefs) throw new Error(`Missing test input refs in input for ${filterInputFilesStep.id}`);

    // If resuming with user selections, filter the files
    if (resumeData?.selectedFiles) {
      const selectedFilePaths = new Set(resumeData.selectedFiles.map(f => f.filePath));

      const filteredSrcInputs = {
        inputFiles: srcInputRefs.inputFiles.filter(f => selectedFilePaths.has(f.inputFile)),
        rawFiles: srcInputRefs.rawFiles.filter(f => selectedFilePaths.has(f)),
      };

      const filteredTestInputs = {
        inputFiles: testInputRefs.inputFiles.filter(f => selectedFilePaths.has(f.inputFile)),
      };

      return {
        filteredSrcInputs,
        filteredTestInputs,
      };
    }

    // Otherwise, suspend to show file selection
    const groupedChoices = [];

    // Add source files group
    if (srcInputRefs.inputFiles.length > 0) {
      groupedChoices.push({
        name: 'Source Files',
        description: `${srcInputRefs.inputFiles.length} source files with L1 constructs`,
        choices: srcInputRefs.inputFiles.map(file => ({
          name: `${path.basename(file.inputFile)} (${relativeToUpstreamDir(file.inputFile)})`,
          description: `L1 constructs: ${file.inputRefs.map(ref => ref.sourceClass).join(', ')}`,
          value: {
            filePath: file.inputFile,
            fileType: 'source' as const,
          },
          checked: true,
        })),
      });
    }

    // Add raw source files (no L1 constructs)
    if (srcInputRefs.rawFiles.length > 0) {
      groupedChoices.push({
        name: 'Raw Source Files',
        description: `${srcInputRefs.rawFiles.length} source files without L1 constructs`,
        choices: srcInputRefs.rawFiles.map(file => ({
          name: `${path.basename(file)} (${relativeToUpstreamDir(file)})`,
          description: 'No L1 constructs detected',
          value: {
            filePath: file,
            fileType: 'raw' as const,
          },
          checked: true,
        })),
      });
    }

    // Add test files group
    if (testInputRefs.inputFiles.length > 0) {
      groupedChoices.push({
        name: 'Test Files',
        description: `${testInputRefs.inputFiles.length} unit test files`,
        choices: testInputRefs.inputFiles.map(file => ({
          name: `${path.basename(file.inputFile)} (${relativeToUpstreamDir(file.inputFile)})`,
          description: `Testing module: ${path.basename(path.dirname(file.inputFile))}`,
          value: {
            filePath: file.inputFile,
            fileType: 'test' as const,
          },
          checked: true,
        })),
      });
    }

    await suspend({
      message: 'Select files to process for conversion (deselect files you want to exclude)',
      groupedChoices,
    });
    // mock return
    return {
      filteredSrcInputs: srcInputRefs,
      filteredTestInputs: testInputRefs,
    };
  },
});

const findLibCdktfRefsStep = createStep({
  id: 'find-lib-output-refs',
  description: 'Finds the Source Code CDKTF references for the conversion',
  // InputSchema accepts the output object from the filter step
  inputSchema: filteredInputFilesSchema,
  outputSchema: z.object({
    batchRetrieveCdktfRefs: batchRetrieveCdktfRefsOutputSchema,
    filteredInputs: filteredInputFilesSchema, // Pass through for later steps
  }),
  execute: async ({ inputData }) => {
    // inputData is directly the filteredInputFilesSchema output
    const filteredInputs = inputData;
    if (!filteredInputs) throw new Error(`Missing filtered input files in input for ${findLibCdktfRefsStep.id}`);
    const cdktfRefsResult = await batchRetrieveCdktfRefs(filteredInputs.filteredSrcInputs);
    return {
      batchRetrieveCdktfRefs: cdktfRefsResult,
      filteredInputs,
    };
  },
});

const cdktfRefReviewResumeSchema = z.object({
  selectedReferences: z.array(choiceValueSchema),
});
export type CdktfRefReviewResumeType = z.infer<typeof cdktfRefReviewResumeSchema>;
export const reviewCdktfRefsStep = createStep({
  id: 'review-cdktf-refs',
  description: 'Human in the loop review of all CDKTF reference suggestions in the batch',
  inputSchema: z.object({
    batchRetrieveCdktfRefs: batchRetrieveCdktfRefsOutputSchema,
    filteredInputs: filteredInputFilesSchema,
  }),
  suspendSchema: reviewPayloadSchema,
  resumeSchema: cdktfRefReviewResumeSchema,
  outputSchema: z.object({
    batchRetrieveCdktfRefs: batchRetrieveCdktfRefsOutputSchema,
    filteredInputs: filteredInputFilesSchema,
  }),
  execute: async ({ resumeData, inputData, suspend }) => {
    const { batchRetrieveCdktfRefs: batch, filteredInputs } = inputData;
    // Access the human input provided when resuming the workflow
    if (resumeData?.selectedReferences) {
      // answer will be an array of the `value` objects from `choices`
      const { selectedReferences } = resumeData;
      const mergedBatch = mergeSelections(batch, selectedReferences);
      // console.log('Merged Batch', JSON.stringify(mergedBatch, null, 2));
      return {
        batchRetrieveCdktfRefs: mergedBatch,
        filteredInputs,
      };
    }
    const { updatedBatch, reviewPayload } = prepareBatchReview(batch, 0.7);
    if (reviewPayload) {
      // suspend with the single payload
      await suspend(reviewPayload);
    }
    // no review needed
    // console.log('Updated Batch', JSON.stringify(updatedBatch, null, 2));
    return {
      batchRetrieveCdktfRefs: updatedBatch,
      filteredInputs,
    };
  },
});

/**
 * A step to export conversion context for Claude Code users
 */
export const exportConversionContextStep = createStep({
  id: 'export-conversion-context',
  description: 'Export conversion context for Claude Code users',
  inputSchema: z.object({
    batchRetrieveCdktfRefs: batchRetrieveCdktfRefsOutputSchema,
    filteredInputs: filteredInputFilesSchema,
  }),
  outputSchema: z.object({
    contextPath: z.string(),
    batchRetrieveCdktfRefs: batchRetrieveCdktfRefsOutputSchema, // Pass through for next steps
    filteredInputs: filteredInputFilesSchema, // Pass through filtered inputs for conversion steps
  }),
  execute: async ({ inputData, getStepResult, getInitData }) => {
    const { batchRetrieveCdktfRefs, filteredInputs } = inputData;

    // Get workspace and upstream details from earlier steps
    const workspace = getStepResult(ensureWorkspaceStep);
    const upstream = getStepResult(ensureUpstreamStep);
    const initData = getInitData<typeof vNextConversionWorkflow>();

    if (!workspace || !upstream) {
      throw new Error('Missing required step results for context export');
    }

    // Extract filtered inputs
    const libInputRefs = filteredInputs.filteredSrcInputs;
    const testInputRefs = filteredInputs.filteredTestInputs;

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
              .find((f: any) => f.inputFile === request.inputFile)
              ?.inputRefs.map((ref: any) => ref.sourceClass) || [],
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
      filteredInputs, // Pass through filtered inputs for conversion steps
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
    filteredInputs: filteredInputFilesSchema,
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
    filteredInputs: filteredInputFilesSchema,
  }),
  outputSchema: unitTestsConversionResultSchema,
  execute: async ({ inputData }) => {
    const { batchRetrieveCdktfRefs, filteredInputs } = inputData;
    const testInputFiles = filteredInputs.filteredTestInputs;
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
    filterInputFilesStep,
    findLibCdktfRefsStep,
    reviewCdktfRefsStep,
    exportConversionContextStep,
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

  // Phase 2.5: Filter Input Files (Sequential)
  // filterInputFilesStep receives output from Phase 2 and suspends for user selection
  .then(filterInputFilesStep)
  // Output: { filteredSrcInputs: ..., filteredTestInputs: ... }

  // Phase 3: Prepare and Review CDKTF Lib Refs (Sequential)
  // findLibCdktfRefsStep receives the output object from Phase 2.5.
  // Its adjusted 'execute' function extracts the needed parts.
  .then(findLibCdktfRefsStep) // Adjusted to handle filtered input files
  // Output: batchRetrieveCdktfRefsOutputSchema (candidates)

  // reviewCdktfRefsStep takes the output of findLibCdktfRefsStep directly.
  .then(reviewCdktfRefsStep)
  // Output: batchRetrieveCdktfRefsOutputSchema (reviewed)

  // Phase 3.5: Export Context (Sequential)
  // exportConversionContextStep takes the output of reviewCdktfRefsStep
  .then(exportConversionContextStep)
  // Output: { contextPath: string, batchRetrieveCdktfRefs: batchRetrieveCdktfRefsOutputSchema, filteredInputs: filteredInputFilesSchema }

  // Phase 4: Convert Code (Parallel)
  // Both steps take the output of exportConversionContextStep as inputData.
  // Both steps now use filtered inputs from user selection.
  .parallel([
    batchConvertSourceCodeStep, // Takes context export output
    batchConvertUnitTestsStep, // Takes context export output, uses filtered test files
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
