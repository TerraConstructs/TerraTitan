import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { z } from 'zod';
import { batchRetrieveCdktfRefsOutputSchema } from './batch-cdktf-ref-rag.js';
import { MergeDocs } from '../../util/merge-docs.js';
import { gitRoot } from '../../util/helpers.js';

const tsAwsDocs = path.join(gitRoot, 'data', 'reference', 'docs', 'typescript', 'provider-aws');
const mergedAwsDocs = path.join(gitRoot, 'data', 'reference', 'merged', 'provider-aws');

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
  const require = createRequire(import.meta.url);
  const batchConvertRequests: z.infer<typeof batchConvertSourceCodeRequestsOutputSchema> = [];
  for (const inputFile of input) {
    const mergedDocsFiles: string[] = [];
    // Merge declaration and Markdown docs
    // - get markdown file from ragResults>ragResult>rerankedResults>metadata>url
    // - get declaration file from ragResults>rargResult>rerankedResults>metadata>sourceFile
    //   (also Convert src/foo/foo.ts > lib/foo/foo.d.ts)
    for (const ragResult of inputFile.ragResults) {
      for (const rerankedResult of ragResult.rerankedResults) {
        const metadata = rerankedResult.metadata;
        if (metadata && metadata.url && metadata.sourceFile) {
          // Handle Docs URL to Markdown file conversion
          // https://registry.terraform.io/providers/.../docs/resources/sns_topic > r/aws/sns_topic.html.markdown
          const parsedUrl = new URL(metadata.url);
          const docPath = parsedUrl.pathname.startsWith('/') ? parsedUrl.pathname.substring(1) : parsedUrl.pathname;
          // Split the path and pop the last part (e.g., "ami")
          const resourceName = docPath.split('/').pop();
          if (!resourceName) {
            console.log(`Invalid CDKTF Ref for ${inputFile.inputFile}: ${JSON.stringify(metadata, null, 2)}`);
            throw new Error('Invalid metadata: ' + JSON.stringify(metadata, null, 2));
          }

          const mergedDocsFile = path.join(mergedAwsDocs, resourceName, 'index.d.ts');
          if (existsSync(mergedDocsFile)) {
            console.log(`Reusing existing merged-docs file: ${path.relative(gitRoot, mergedDocsFile)}`);
          } else {
            const markdownPath = path.join(tsAwsDocs, 'r', `${resourceName}.html.markdown`);
            // Handle Source File to Declaration file conversion
            // src/foo/foo.ts -> lib/foo/foo.d.ts
            const relDeclPath = metadata.sourceFile.replace(/^src\//, 'lib\/').replace(/\.ts$/, '.d.ts');
            const declarationPath = require.resolve(path.join('@cdktf/provider-aws', relDeclPath));
            console.log(
              `Merging markdown file: ${path.relative(gitRoot, markdownPath)} into ${relDeclPath} > ${path.relative(gitRoot, mergedDocsFile)}`,
            );
            const mergeDocs = MergeDocs.fromProps({
              markdownPath,
              declarationPath,
            });
            mergeDocs.process2().writeTo(mergedDocsFile);
          }
          mergedDocsFiles.push(mergedDocsFile);
        } else {
          console.log(`Invalid CDKTF Ref for ${inputFile.inputFile}: ${JSON.stringify(metadata, null, 2)}`);
          throw new Error('Invalid metadata: ' + JSON.stringify(metadata, null, 2));
        }
      }
    }
    batchConvertRequests.push({
      inputFile: inputFile.inputFile,
      inputRefFiles: inputFile.inputRefs.map(inputRef => inputRef.sourceFile),
      outputRefFiles: mergedDocsFiles,
    });
  }
  return batchConvertRequests;
}
