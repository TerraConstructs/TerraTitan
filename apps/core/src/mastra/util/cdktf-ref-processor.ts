import { existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { z } from 'zod';
import { batchRetrieveCdktfRefsOutputSchema } from '../workflows/steps/batch-cdktf-ref-rag.js';
import { MergeDocs } from './merge-docs.js';
import { gitRoot } from './helpers.js';
import { ConversionRequestProps } from './types.js';

const tsAwsDocs = path.join(gitRoot, 'data', 'reference', 'docs', 'typescript', 'provider-aws');
const mergedAwsDocs = path.join(gitRoot, 'data', 'reference', 'merged', 'provider-aws');
const markdownHclAwsDocs = path.join(gitRoot, 'data', 'reference', 'docs', 'provider-aws');

/**
 * Processed CDKTF reference file paths for a single input file
 */
export interface ProcessedCdktfRefs {
  /** The AWS CDK input File (source File or Unit Test File or source) */
  inputFile: string;
  /** The input references extracted from the input file */
  inputRefs: Array<{ sourceFile: string; sourceClass: string }>;
  /**
   * TF Provider AWS resource declaration files with merged markdown docs
   */
  mergedDocsFiles: string[];
  /**
   * Markdown HCL files for the AWS resources
   */
  markdownHclFiles: string[];
}

/**
 * Extracts resource name from CDKTF metadata URL
 * @param metadataUrl - URL from CDKTF metadata (e.g., https://registry.terraform.io/providers/.../docs/resources/sns_topic)
 * @returns Resource name (e.g., "sns_topic")
 */
export function extractResourceNameFromUrl(metadataUrl: string): string {
  const parsedUrl = new URL(metadataUrl);
  const docPath = parsedUrl.pathname.startsWith('/') ? parsedUrl.pathname.substring(1) : parsedUrl.pathname;
  const resourceName = docPath.split('/').pop();

  if (!resourceName) {
    throw new Error(`Invalid metadata URL: ${metadataUrl}`);
  }

  return resourceName;
}

/**
 * Processes a single RAG result to create merged docs file (TypeScript declarations + markdown docs)
 * @param metadata - CDKTF reference metadata
 * @param inputFile - Original input file for error context
 * @returns Path to the merged docs file
 */
export function processMergedDocsFile(
  metadata: { url?: string; sourceFile: string; fqn: string; name: string; subcategory?: string; originalText: string },
  inputFile: string,
): string {
  if (!metadata.url || !metadata.sourceFile) {
    throw new Error(`Invalid CDKTF Ref for ${inputFile}: ${JSON.stringify(metadata, null, 2)}`);
  }

  const resourceName = extractResourceNameFromUrl(metadata.url);
  const snakeResourceName = resourceName.replaceAll('_', '-'); // Convert kebab-case to snake_case for paths
  // sanity-check sourceFile parent directory matches snakeResourceName
  const sourceFileDir = path.dirname(metadata.sourceFile);
  if (!sourceFileDir.endsWith(snakeResourceName)) {
    throw new Error(`Source file directory ${sourceFileDir} does not match resource name ${snakeResourceName}`);
  }
  const mergedDocsFile = path.join(mergedAwsDocs, snakeResourceName, 'index.d.ts');

  if (existsSync(mergedDocsFile)) {
    console.log(`Reusing existing merged-docs file: ${path.relative(gitRoot, mergedDocsFile)}`);
  } else {
    const markdownPath = path.join(tsAwsDocs, 'r', `${resourceName}.html.markdown`);

    // Handle Source File to Declaration file conversion
    // src/foo/foo.ts -> lib/foo/foo.d.ts
    const relDeclPath = metadata.sourceFile.replace(/^src\//, 'lib/').replace(/\.ts$/, '.d.ts');
    const require = createRequire(import.meta.url);
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

  return mergedDocsFile;
}

/**
 * Processes a single RAG result to get markdown HCL docs file path
 * @param metadata - CDKTF reference metadata
 * @param inputFile - Original input file for error context
 * @returns Path to the markdown HCL docs file
 */
export function processMarkdownHclFile(
  metadata: { url?: string; sourceFile: string; fqn: string; name: string; subcategory?: string; originalText: string },
  inputFile: string,
): string {
  if (!metadata.url) {
    throw new Error(`Invalid CDKTF Ref for ${inputFile}: ${JSON.stringify(metadata, null, 2)}`);
  }

  const resourceName = extractResourceNameFromUrl(metadata.url);
  return path.join(markdownHclAwsDocs, 'r', `${resourceName}.html.markdown`);
}

/**
 * Processes batchRetrieveCdktfRefs data to extract all reference file paths
 * @param batchRetrieveCdktfRefs - RAG results from CDKTF reference retrieval
 * @returns Processed CDKTF references with file paths
 */
export function processCdktfReferences(
  batchRetrieveCdktfRefs: z.infer<typeof batchRetrieveCdktfRefsOutputSchema>,
): ProcessedCdktfRefs[] {
  const processedRefs: ProcessedCdktfRefs[] = [];

  for (const inputFile of batchRetrieveCdktfRefs) {
    const mergedDocsFiles: string[] = [];
    const markdownHclFiles: string[] = [];

    // Process all RAG results for this input file
    for (const ragResult of inputFile.ragResults) {
      for (const rerankedResult of ragResult.rerankedResults) {
        const metadata = rerankedResult.metadata;

        try {
          // Create merged docs file (TypeScript + markdown)
          const mergedDocsFile = processMergedDocsFile(metadata, inputFile.inputFile);
          mergedDocsFiles.push(mergedDocsFile);

          // Get markdown HCL docs file path
          const markdownHclFile = processMarkdownHclFile(metadata, inputFile.inputFile);
          markdownHclFiles.push(markdownHclFile);
        } catch (error) {
          console.log(`Invalid CDKTF Ref for ${inputFile.inputFile}: ${JSON.stringify(metadata, null, 2)}`);
          throw error;
        }
      }
    }

    processedRefs.push({
      inputFile: inputFile.inputFile,
      inputRefs: inputFile.inputRefs,
      mergedDocsFiles,
      markdownHclFiles,
    });
  }

  return processedRefs;
}

/**
 * Builds source code conversion requests using processed CDKTF references
 * @param processedRefs - Processed CDKTF references
 * @returns Array of source conversion requests
 */
export function buildSourceConversionRequests(processedRefs: ProcessedCdktfRefs[]): ConversionRequestProps[] {
  const processedRefsSet = new Set(processedRefs.flatMap(ref => ref.inputRefs.map(r => r.sourceFile)));
  return processedRefs.map(ref => ({
    inputFile: ref.inputFile,
    inputRefFiles: [...processedRefsSet],
    outputRefFiles: [...new Set(ref.mergedDocsFiles)],
  }));
}

/**
 * Builds unit test conversion requests using processed CDKTF references
 * @param processedRefs - Processed CDKTF references (flattened for all unit tests)
 * @param testInputFiles - Test input files from findTestInputRefs
 * @returns Array of unit test conversion requests
 */
export function buildUnitTestConversionRequests(
  processedRefs: ProcessedCdktfRefs[],
  testInputFiles: Array<{ inputFile: string; inputRefs: string[] }>,
): ConversionRequestProps[] {
  // Flatten all markdown HCL files from all processed references
  const markdownHclFilesSet = new Set(processedRefs.flatMap(ref => ref.markdownHclFiles));

  return testInputFiles.map(testFile => ({
    inputFile: testFile.inputFile,
    inputRefFiles: testFile.inputRefs,
    outputRefFiles: [...markdownHclFilesSet],
  }));
}
