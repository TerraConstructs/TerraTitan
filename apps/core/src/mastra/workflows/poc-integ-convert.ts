import { createWorkflow, createStep } from '@mastra/core/workflows/vNext';
import { z } from 'zod';

import { integConverter } from '../agents/integ-converter/index.js';

export const integConversionSchema = z.object({
  inputFile: z.string(),
  inputRefFiles: z.array(z.string()),
  outputRefFiles: z.array(z.string()),
});

export type InitType = z.infer<typeof integConversionSchema>;

export const integConversionOutputSchema = z.object({
  code: z.string(),
});

/**
 * Ensure the upstream module is available for conversion
 */
const convertIntegTests = createStep({
  id: 'convert-integ-tests',
  description: 'Ensures an upstream module is available for conversion',
  inputSchema: integConversionSchema,
  outputSchema: integConversionOutputSchema,
  execute: async ({ inputData }) => {
    const { inputFile, inputRefFiles, outputRefFiles } = inputData;
    return await integConverter.convert({
      inputFile,
      inputRefFiles,
      outputRefFiles,
    });
  },
});

/**
 * A workflow to convert integration tests from AWS CDK to TerraConstructs
 *
 * The workflow is triggered by the `integConversionSchema` trigger.
 * It uses the `convertIntegTests` step to convert the source code.
 */
export const integConversionWorkflow = createWorkflow({
  id: 'integ-conversion-workflow',
  inputSchema: integConversionSchema,
  outputSchema: integConversionOutputSchema,
  steps: [convertIntegTests],
});

integConversionWorkflow.then(convertIntegTests);

integConversionWorkflow.commit();
