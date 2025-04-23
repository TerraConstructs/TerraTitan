import { select } from '@inquirer/prompts';
import { z } from 'zod';
import { argumentParser } from 'zodcli';
import { commandLineArgsSchema, awsCdkModules, listWorkflowRuns } from './cli-util.js';
import { runConversionWorkflow } from './wf-conversion.js';
import { runCdktfRefWf } from './wf-cdktf-ref.js';
import { runEnsureUpstreamWf } from './wf-ensure-upstream.js';
import { runBatchSourceConvertWf } from './wf-batch-source-convert.js';
import { runBatchTestConvertWf } from './wf-batch-test-convert.js';

import dotenv from 'dotenv';
dotenv.config();

const workflowTypeSchema = z.enum([
  /**
   * Current conversion workflow
   */
  'convert',
  /**
   * Demo Batch Source Code conversion workflow
   */
  'batchConvert',
  /**
   * Demo Batch Unit Tests conversion workflow
   */
  'batchTestConvert',
  /**
   * Demo CDKTF Reference retrieval workflow
   */
  'cdktfRef',
  /**
   * Demo ensure upstream workflow
   */
  'ensureUpstream',
  // 'convert-dynamic',
  // 'convert-vNext',
]);
async function main() {
  console.log('>>>TerraTitan CLI - PoC<<<');
  try {
    const args = argumentParser({ options: commandLineArgsSchema }).parse(process.argv.slice(2));
    if (args?.list) {
      return await listWorkflowRuns();
    }

    if (args?.module && !awsCdkModules.includes(args.module)) {
      throw new Error(`Invalid Module '${args.module}' not found in local aws-cdk-lib.`);
    }
    let wfToRun: z.infer<typeof workflowTypeSchema>;
    if (args.workflow) {
      const parsedWorkflow = workflowTypeSchema.safeParse(args.workflow);
      if (!parsedWorkflow.success) {
        throw new Error(`Invalid workflow: ${args.workflow}`);
      }
      wfToRun = parsedWorkflow.data;
    } else {
      // No workflow provided in args, prompt user to select wf
      wfToRun = await select<z.infer<typeof workflowTypeSchema>>({
        message: 'Select which workflow to run:',
        choices: [
          { value: 'convert', name: 'Conversion Workflow' },
          { value: 'batchConvert', name: 'Demo Batch Source Code Conversion Workflow' },
          { value: 'batchTestConvert', name: 'Demo Batch Unit Tests Conversion Workflow' },
          { value: 'cdktfRef', name: 'Demo aws-elasticloadbalancingv2.CfnTargetGroup CDKTF Reference retrieval' },
          { value: 'ensureUpstream', name: 'Demo ensure upstream for AWS CDK Module' },
          // { value: 'convert-dynamic', name: 'Conversion Wf (dynamic)' },
          // { value: 'convert-vNext', name: 'Conversion Wf vNext' },
        ],
      });
    }
    switch (wfToRun) {
      case 'convert':
        await runConversionWorkflow(args);
        break;
      case 'batchConvert':
        await runBatchSourceConvertWf();
        break;
      case 'batchTestConvert':
        await runBatchTestConvertWf();
        break;
      case 'cdktfRef':
        await runCdktfRefWf();
        break;
      case 'ensureUpstream':
        await runEnsureUpstreamWf(args);
        break;
      // case 'convert-dynamic':
      //   await runDynamicWf(args);
      //   break;
      // case 'convert-vNext':
      //   await runvNextWf(args);
      //   break;
      default:
        console.log('Invalid workflow selected.');
        break;
    }
  } catch (error) {
    if (error instanceof Error && error.name === 'ExitPromptError') {
      console.log('👋 until next time!');
    } else {
      throw error;
    }
  }
}

main().catch(console.error);
