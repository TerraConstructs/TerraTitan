import fs from 'node:fs';
import path from 'node:path';
import { Agent } from '@mastra/core/agent';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';
import { gitRoot } from '../util/helpers.js';

export const docMergeRequestSchema = z.object({
  markdown: z.string(),
  typescript: z.string(),
});

export const docMergeResponseSchema = z.object({
  code: z.string(),
});

export interface DocMergeRequest {
  markdown: string;
  typescript: string;
}

export enum MergeDocSamples {
  AMI = 'ami',
  CLOUDWATCH_EVENT_BUS = 'cloudwatch-event-bus',
  KINESIS_STREAM = 'kinesis-stream',
  APPSYNC_GRAPHQL_API = 'appsync-graphql-api',
}
const declDir = path.join(gitRoot, 'data', 'reference', 'declarations', 'provider-aws');
const markdownAwsDocs = path.join(gitRoot, 'data', 'reference', 'docs', 'typescript', 'provider-aws', 'r');
const mergedAwsDocs = path.join(gitRoot, 'data', 'reference', 'merged', 'provider-aws');

export class MergeDocSample implements DocMergeRequest {
  static fromName(name: string): MergeDocSample {
    const markdownPath = path.join(markdownAwsDocs, `${name.replaceAll(/-/g, '_')}.html.markdown`);
    const declarationPath = path.join(declDir, `${name}`, 'index.d.ts');
    return new MergeDocSample(name, markdownPath, declarationPath);
  }
  public readonly resultPath: string;
  constructor(
    public readonly name: string,
    public readonly markdownPath: string,
    public readonly declarationPath: string,
    resultPath?: string,
  ) {
    this.resultPath = resultPath ?? path.join(mergedAwsDocs, this.name, 'index.d.ts');
  }

  get markdown(): string {
    const markdownContents = fs.readFileSync(this.markdownPath, 'utf-8');
    const argumentRef = extractArgumentReference(markdownContents);
    if (!argumentRef) {
      throw new Error(`Failed to parse markdown from ${this.markdownPath}`);
    }
    return argumentRef;
  }

  get typescript(): string {
    return fs.readFileSync(this.declarationPath, 'utf-8');
  }

  get result(): string {
    return fs.readFileSync(this.resultPath, 'utf-8');
  }
}

export const amiSample = MergeDocSample.fromName(MergeDocSamples.AMI);
export const appsyncGraphqlApiSample = MergeDocSample.fromName(MergeDocSamples.APPSYNC_GRAPHQL_API);

export const docsMergerAgent = new Agent({
  name: 'Docs Merge Agent',
  instructions: `You are a source code documentation agent.
    Your task is to merge the Argument Section of TF Provider Mardown documentation into the Typescript interface properties. Add the documentation into their JSDoc strings.
    You will receive documentation in Markdown and the corresponding Typescript source code which has reference links but is missing the actual documetnation and you need to combine them:
    - Review the Arguments and Attributes sections of the Markdown documentation.
    - Ensure that the Typescript interface JSDoc strings are updated with the relevant information from the Markdown documentation.
    - Ensure that the Typescript source code has valid JSDoc strings.

    Use only the information provided in the documentation text. Do not infer types or defaults that are not stated.

    Respond in the following format:
    {
        "code": "<typescript code with JSDoc comments merged from the markdown documentation>"
    }`,
  model: openai('o4-mini'),
  defaultGenerateOptions: {
    temperature: 1,
    context: [
      {
        role: 'user',
        content: generateNewPrompt(amiSample),
      },
      {
        role: 'assistant',
        content: generateSampleResponse(amiSample.result),
      },
      {
        role: 'user',
        content: generateNewPrompt(appsyncGraphqlApiSample),
      },
      {
        role: 'assistant',
        content: generateSampleResponse(appsyncGraphqlApiSample.result),
      },
    ],
    output: docMergeResponseSchema,
  },
});

/**
 * Exposed for testing, do not use directly.
 */
export function generateNewPrompt(request: DocMergeRequest): string {
  // TODO: Only include the ## Argument Reference section of the Markdown
  return `Merge the following terraform provider resource markdown documentation with the typescript.
<markdown>
${request.markdown}
</markdown>

<typescript>
${request.typescript}
</typescript>`;
}

function generateSampleResponse(sample: string): string {
  return `{
  "code": "${JSON.stringify(sample)}"
}`;
}

/**
 * Extracts the full "## Argument Reference" section from a Markdown string.
 *
 * @param markdown The Markdown content.
 * @returns The "## Argument Reference" section, including the heading, or null if not found.
 */
export function extractArgumentReference(markdown: string): string | null {
  const heading = '## Argument Reference';
  const startIndex = markdown.indexOf(heading);
  if (startIndex === -1) return null;

  // slice out everything after the "## Argument Reference" heading
  const after = markdown.slice(startIndex + heading.length);

  // look for the next level-2 heading in the remainder
  const nextHeading = /^##\s/m.exec(after);
  if (nextHeading) {
    // cut out from the heading start up to the next heading
    const endIndex = startIndex + heading.length + nextHeading.index;
    return markdown.slice(startIndex, endIndex).trim();
  }

  // no further "## …" found, return the whole document
  return markdown.trim();
}
