import path from 'path';
import fs from 'fs';
import childProcess from 'child_process';
import { MergeDocs, TfDocs2JsonOutput } from './mastra/util/merge-docs.js';
import { gitRoot } from './mastra/util/helpers.js';

const dataRefRoot = path.join(gitRoot, 'data', 'reference');

const declarationsRoot = path.join(dataRefRoot, 'declarations', 'provider-aws');
const markdownDocsRoot = path.join(dataRefRoot, 'docs', 'typescript', 'provider-aws');
const mergedRoot = path.join(dataRefRoot, 'merged', 'provider-aws');

// read path to json file and input markdown from process arguments
const resourceName = process.argv[2];
if (!resourceName) {
  console.error('Please provide resource name (i.e. dynamodb_resource_policy).');
  process.exit(1);
}
// kebabize resource name for paths
const kebabResourceName = resourceName.replaceAll('_', '-');

// construct paths for markdown, declaration, and merged output
const resourceMarkdownPath = path.join(markdownDocsRoot, 'r', resourceName + '.html.markdown');
// temp json next to markdown
const jsonFilePath = path.join(markdownDocsRoot, 'r', resourceName + '.json');
const declarationPath = path.join(declarationsRoot, kebabResourceName, 'index.d.ts');
const mergedDeclarationPath = path.join(mergedRoot, kebabResourceName, 'index.d.ts');

// log out paths for debugging
console.log(`Processing resource: ${resourceName}`);
console.log(`Markdown path: ${resourceMarkdownPath}`);
console.log(`JSON output path: ${jsonFilePath}`);
console.log(`Declaration path: ${declarationPath}`);

// run tfdocs2json as a child process with streaming stdin/stdout allowing interaction
if (!fs.existsSync(jsonFilePath)) {
  console.log(`Generating tfdocs2json output for: ${path.relative(gitRoot, resourceMarkdownPath)}`);
  const commandToRun = `tfdocs2json --interactive -md ${resourceMarkdownPath} -output ${jsonFilePath}`;
  console.debug(`Running command: ${commandToRun}`);
  childProcess.execSync(commandToRun, {
    stdio: 'inherit',
  });
} else {
  console.log(`Reusing existing tfdocs2json output: ${path.relative(gitRoot, jsonFilePath)}`);
}

const tfdocs2jsonPath = fs.readFileSync(jsonFilePath, 'utf-8');
const tfdocs2json = JSON.parse(tfdocs2jsonPath) as TfDocs2JsonOutput;

const mergeDocs = MergeDocs.fromProps({
  markdownPath: resourceMarkdownPath,
  declarationPath,
});
mergeDocs.process2(tfdocs2json);
mergeDocs.writeTo(mergedDeclarationPath);

console.log(`Merged declaration path: ${mergedDeclarationPath}`);
