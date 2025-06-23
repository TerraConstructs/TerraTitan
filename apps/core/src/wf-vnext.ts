import fs from 'node:fs';
import groupCheckbox from 'inquire-grouped-checkbox';
// import { Sema } from 'async-sema';
import { mastra } from './mastra/index.js';
import { reviewPayloadSchema as cdktfRefReviewPayloadSchema } from './mastra/workflows/steps/batch-cdktf-ref-rag.js';
import {
  InitType,
  reviewCdktfRefsStep, // Need the step object for resume schema access if needed
  CdktfRefReviewResumeType,
  filterInputFilesStep,
  fileFilterSuspendSchema,
  FileFilterResumeType,
} from './mastra/workflows/vnext.js';
import { CommandLineArgs, getConversionInputs } from './cli-util.js';

export async function runvNextWf(args?: CommandLineArgs) {
  const { moduleName, workspaceId, outputModule } = await getConversionInputs(args);
  const logger = mastra.getLogger();
  // init the workflow
  const inputData: InitType = {
    upstreamModule: {
      moduleName,
    },
    workspace: {
      id: workspaceId,
      repositoryUrl: 'https://github.com/TerraConstructs/base.git',
    },
    outputModule,
  };

  const run = mastra.vnext_getWorkflow('vNextConversionWorkflow').createRun();
  const reviewStepId = reviewCdktfRefsStep.id;
  const filterStepId = filterInputFilesStep.id;

  // Add a watcher to monitor execution
  run.watch(async ({ payload }) => {
    const step = payload.currentStep;
    if (!step) return; // ignore workflow-level pings
    if (step.status !== 'suspended') return; // Only handle suspended steps

    try {
      if (step.id === filterStepId) {
        // Handle file filtering suspension
        logger.info(`Workflow suspended, waiting for file selection on step: ${filterStepId}`);

        // Extract and parse the suspend payload
        const suspendPayload = payload.workflowState.steps[filterStepId]?.payload;
        const { groupedChoices, message } = fileFilterSuspendSchema.parse(suspendPayload);

        // User file selection
        console.log('\n===================================');
        console.log(message);
        console.log('===================================\n');
        const selectedFiles = await groupCheckbox({
          message: 'Select files to process',
          choices: groupedChoices,
          loop: false,
          required: true,
        });

        // Prepare resume data
        const resumeData: FileFilterResumeType = { selectedFiles };

        // Resume the workflow
        logger.info(`Resuming workflow step ${filterStepId}...`);

        run.resume({
          step: filterStepId,
          resumeData,
        });
      } else if (step.id === reviewStepId) {
        // Handle CDKTF refs review suspension
        logger.info(`Workflow suspended, waiting for CDKTF review on step: ${reviewStepId}`);

        // Extract and parse the suspend payload
        const suspendPayload = payload.workflowState.steps[reviewStepId]?.payload;
        const { groupedChoices, message } = cdktfRefReviewPayloadSchema.parse(suspendPayload);

        // Human review
        console.log('\n===================================');
        console.log(message);
        console.log('===================================\n');
        const selectedReferences = await groupCheckbox({
          message: 'Select relevant CDKTF references',
          choices: groupedChoices,
          loop: false,
          required: true,
        });

        // Prepare resume data
        const resumeData: CdktfRefReviewResumeType = { selectedReferences };

        // Resume the workflow
        logger.info(`Resuming workflow step ${reviewStepId}...`);
        const resumeResult = await run.resume({
          step: reviewStepId,
          resumeData,
        });

        // Handle final completion
        if (resumeResult.status === 'success' && resumeResult.steps[reviewStepId]?.status === 'success') {
          logger.info('Workflow resumed and completed successfully.');
          const finalReviewStepOutput = resumeResult.steps[reviewStepId]?.output;
          if (finalReviewStepOutput) {
            const filePath = `cache-${moduleName}-vnext.json`;
            fs.writeFileSync(filePath, JSON.stringify(finalReviewStepOutput, null, 2));
            logger.info(`Review step output cached to ${filePath}`);
          }
          console.log('Final Workflow Result (Files Written):', resumeResult.result);
        } else if (resumeResult.status === 'failed') {
          logger.error('Workflow failed after resuming.', resumeResult.error);
        } else if (resumeResult.status === 'suspended') {
          logger.warn('Workflow suspended again after resuming...');
        }
      }
    } catch (error) {
      logger.error(`Error during review/resume for step ${step.id}: ${error}`);
    }
  });

  await run.start({
    inputData,
  });
}
