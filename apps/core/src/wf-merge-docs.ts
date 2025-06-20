import path from 'node:path';
import fs from 'node:fs';
import { mastra } from './mastra/index.js';
import { gitRoot } from './mastra/util/helpers.js';
import { DocMergeRequest } from './mastra/agents/docs-merger.js';

const docsDir = path.join(gitRoot, 'data', 'reference', 'docs', 'typescript', 'provider-aws', 'r');
const declDir = path.join(gitRoot, 'data', 'reference', 'declarations', 'provider-aws');

export async function runDocMergeWf() {
  // workflow input data
  const inputData: DocMergeRequest = {
    markdown: fs.readFileSync(path.join(docsDir, 'rds_cluster.html.markdown'), 'utf-8'),
    typescript: fs.readFileSync(path.join(declDir, 'rds-cluster', 'index.d.ts'), 'utf-8'),
  };

  const run = mastra.vnext_getWorkflow('mergeDocsWorkflow').createRun();
  console.log('Workflow started, waiting for completion...');
  const result = await run.start({
    inputData,
  });
  console.log(`Workflow completed result: ${JSON.stringify(result, null, 2)}`);
}
