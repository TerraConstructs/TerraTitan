import fs from 'node:fs/promises';
import path from 'node:path';
import { z } from 'zod';
import { workspaceOutputSchema } from './ensure-workspace.js';
import { Sema } from 'async-sema';

// result from sourceConverter & unitConverter agent(s)
export const batchWriteCodeInputSchema = z.array(
  z.object({
    /**
     * The inputFile information
     */
    inputFile: z.string(),
    /**
     * The run the conversion into
     */
    workspace: workspaceOutputSchema,
    /**
     * Path Infix to use for the output file
     */
    infixPath: z.string(),
    /**
     * The output module to write to within the Workspace
     */
    outputModule: z.string(),
    /**
     * The converted code to write to the workspace outputModule
     * - This is the result of the sourceConverter or unitConverter agent
     * - The code is written to the outputPath
     * - The outputPath is the inputFile path within the workspace outputModule
     */
    code: z.string(),
  }),
);

/**
 * A step to write a Batch of conversions from AWS CDK to TerraConstructs
 *
 * Writes converted code to the workspace outputModule while handling name conflicts
 */
export async function batchWriteCode(writeRequests: z.infer<typeof batchWriteCodeInputSchema>) {
  // 2) Create a semaphore allowing 10 concurrent jobs
  const sema = new Sema(10);
  return Promise.all(
    writeRequests.map(async ({ inputFile, code, workspace, infixPath, outputModule }) => {
      await sema.acquire();
      try {
        const outputDir = path.join(workspace.targetDir, infixPath, outputModule);
        
        // Extract the relative path structure from the input file
        // This preserves nested directories like 'integrations/', 'lib/', etc.
        const relativePath = extractRelativeFilePath(inputFile);
        const targetFilePath = path.join(outputDir, relativePath);
        
        // Create target directory including nested subdirectories if they don't exist
        await fs.mkdir(path.dirname(targetFilePath), { recursive: true });
        
        return await writeWithoutConflict(targetFilePath, code);
      } finally {
        sema.release();
      }
    }),
  );
}

/**
 * Extracts the relative file path from an upstream input file path.
 * Preserves nested directory structure for proper file organization.
 * 
 * For source files: extracts everything after '/lib/'
 * For test files: extracts everything after '/test/'
 * 
 * Examples:
 * - 'upstream/aws-cdk/v2.186.0/packages/aws-cdk-lib/aws-apigateway/lib/deployment.ts' 
 *   → 'deployment.ts'
 * - 'upstream/aws-cdk/v2.186.0/packages/aws-cdk-lib/aws-apigateway/test/integrations/lambda.test.ts' 
 *   → 'integrations/lambda.test.ts'
 * - 'upstream/aws-cdk/v2.186.0/packages/aws-cdk-lib/aws-apigateway/test/deployment.test.ts' 
 *   → 'deployment.test.ts'
 */
function extractRelativeFilePath(inputFile: string): string {
  const normalizedPath = path.posix.normalize(inputFile);
  
  // Check for test files first (more specific pattern)
  const testMatch = normalizedPath.match(/\/test\/(.+)$/);
  if (testMatch && testMatch[1]) {
    return testMatch[1]; // Everything after '/test/'
  }
  
  // Check for source files in lib directory
  const libMatch = normalizedPath.match(/\/lib\/(.+)$/);
  if (libMatch && libMatch[1]) {
    return libMatch[1]; // Everything after '/lib/'
  }
  
  // Fallback: if no pattern matches, just return the filename
  // This handles edge cases and maintains backward compatibility
  return path.basename(inputFile);
}

/**
 * If the target file exists, write to timestamped name; otherwise just write to targetFile.
 */
async function writeWithoutConflict(targetFile: string, code: string): Promise<string> {
  try {
    // Check if file exists
    await fs.access(targetFile);
    // File exists, create timestamped version for new content
    const { dir, name, ext } = path.parse(targetFile);
    const newFile = path.join(dir, `${name}-${Date.now()}${ext}`);
    console.log(`[batchWriteCode] Conflict ➞ Writing new content to ${newFile}`);
    await fs.writeFile(newFile, code);
    return newFile;
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      // File doesn't exist, write directly
      await fs.writeFile(targetFile, code);
      return targetFile;
    } else {
      throw err;
    }
  }
}
