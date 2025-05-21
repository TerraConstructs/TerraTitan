import fs from 'node:fs';
import groupCheckbox from 'inquire-grouped-checkbox';
// import { Sema } from 'async-sema';
import { mastra } from './mastra/index.js';
import { reviewPayloadSchema as cdktfRefReviewPayloadSchema } from './mastra/workflows/steps/batch-cdktf-ref-rag.js';
import {
  InitType,
  reviewCdktfRefsStep, // Need the step object for resume schema access if needed
  CdktfRefReviewResumeType,
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
  const reviewStepId = reviewCdktfRefsStep.id; // Use the ID from the step object

  // Add a watcher to monitor execution
  run.watch(async ({ payload }) => {
    const step = payload.currentStep;
    if (!step) return; // ignore workflow-level pings
    // Skip if not the review step and event is on 'suspended' status
    if (step.id !== reviewStepId || step.status !== 'suspended') return;

    // Check if the specific review step is suspended in the overall workflow state
    const reviewStepState = payload.workflowState.steps[reviewStepId];
    if (reviewStepState?.status === 'suspended') {
      logger.info(`Workflow suspended, waiting for review on step: ${reviewStepId}`);
      try {
        // 5. Extract and parse the suspend payload
        // vNext stores the suspend payload passed to `suspend()` in the step state's 'payload' field
        const suspendPayload = reviewStepState.payload;
        const { groupedChoices, message } = cdktfRefReviewPayloadSchema.parse(suspendPayload);

        // 6. Human review
        console.log('\n===================================');
        console.log(message);
        console.log('===================================\n');
        const selectedReferences = await groupCheckbox({
          message: 'Select relevant CDKTF references',
          choices: groupedChoices,
          loop: false,
          required: true, // Ensure the user makes a selection
        });

        // 7. Prepare resumeData matching the step's resumeSchema
        const resumeData: CdktfRefReviewResumeType = { selectedReferences };

        // 8. Resume the workflow
        logger.info(`Resuming workflow step ${reviewStepId}...`);
        const resumeResult = await run.resume({
          step: reviewStepId, // Provide the step ID (or the step object itself)
          resumeData, // Provide data matching resumeSchema
        });

        // 9. Handle resume outcome (optional logging/caching)
        // The resumeResult reflects the FINAL outcome after resuming
        if (resumeResult.status === 'success' && resumeResult.steps[reviewStepId]?.status === 'success') {
          logger.info('Workflow resumed and completed successfully.');
          // Access the output of the specific step *after* it completed post-resume
          const finalReviewStepOutput = resumeResult.steps[reviewStepId]?.output;
          if (finalReviewStepOutput) {
            const filePath = `cache-${moduleName}-vnext.json`;
            fs.writeFileSync(filePath, JSON.stringify(finalReviewStepOutput, null, 2));
            logger.info(`Review step output cached to ${filePath}`);
          }
          // You can also access the final workflow result: resumeResult.result
          console.log('Final Workflow Result (Files Written):', resumeResult.result);
        } else if (resumeResult.status === 'failed') {
          logger.error('Workflow failed after resuming.', resumeResult.error);
        } else if (resumeResult.status === 'suspended') {
          // Should not happen immediately after resuming unless *another* step suspends
          logger.warn('Workflow suspended again after resuming...');
        }
      } catch (error) {
        logger.error(`Error during review/resume for step ${reviewStepId}: ${error}`);
      }
    }
  });

  await run.start({
    inputData,
  });
}
