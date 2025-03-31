import { openai } from '@ai-sdk/openai';
import { Agent } from '@mastra/core/agent';
import { Step, Workflow } from '@mastra/core/workflows';
import path from 'path';
import { z } from 'zod';
import fs from 'fs';
import os from 'os';
import { simpleGit } from 'simple-git';

const llm = openai('gpt-4o');

const agent = new Agent({
  name: 'convert-agent',
  model: llm,
  instructions: ``, // TODO: add system instructions here
  evals: {
    // TODO: add evals here
  },
})

const cloneRepo = new Step({
  id: 'clone-repo',
  description: 'Clones the AWS CDK repo into a local directory',
  execute: async ({ context }) => {
    const repoUrl = 'https://github.com/aws/aws-cdk';
    const localDir = path.join(process.cwd(), 'aws-cdk'); 
    
    // we need the source code but we also need the declaration files for a separate step. These can be found in node_modules
    // for this download the zip file from github instead of using git
    // Add downloading base as well to this, this one can get clone
    // 1. git clone terraconstructs/base and git working base
    // 2. download relase archive from github for awscdk
    // 3. resolve node_modules for awscdk declaration files
    // these can be 3 parallel steps
    try {
      if (fs.existsSync(path.join(localDir, '.git'))) {
        console.log('AWS CDK repo exists, updating to latest...');
        
        const git = simpleGit(localDir);
        await git.fetch('origin');
        await git.pull('origin', 'main');
        
        console.log('AWS CDK repo updated successfully');
      } else {
        console.log('Cloning AWS CDK repo...');
        fs.mkdirSync(path.dirname(localDir), { recursive: true });
        await simpleGit().clone(repoUrl, localDir);
        console.log('AWS CDK repo cloned successfully');
      }
      return { repoDir: localDir };
    } catch (error) {
      console.error('Error handling AWS CDK repository:', error);
      throw error;
    }
  },
});

const fetchPackage = new Step({
  id: 'fetch-package',
  description: 'Fetches the target AWSCDKTF package',
  inputSchema: z.object({
    target: z.string().describe('The target AWSCDKTF package to convert'),
  }),
  execute: async ({ context }) => {
    // TODO: implement
  },
});

const mergeDocs = new Step({
  id: 'merge-docs',
  inputSchema: z.object({
    target: z.string().describe('The target AWSCDKTF package to convert'),
  }),
  execute: async ({ context }) => {
    // TODO: implement
  },
});

const convert = new Step({
  id: 'convert',
  inputSchema: z.object({
    target: z.string().describe('The target AWSCDKTF package to convert'),
  }),
  execute: async ({ context, mastra }) => {
    const packageContent = context?.getStepResult('fetch-package'); // might be from another step

    if (!packageContent) {
      throw new Error('Package content not found');
    }

    const prompt = `Convert the following AWSCDKTF package to CDKTF:
    ${context?.getStepResult('fetch-package')}
    `;

    const response = await agent.stream([
      {
        role: 'user',
        content: prompt,
      },
    ]);

    let convertedText = '';

    for await (const chunk of response.textStream) {
      process.stdout.write(chunk);
      convertedText += chunk;
    }

    return {
      converted: convertedText,
    };
    // TODO: add evals here?
  },
});

const validate = new Step({
  id: 'validate',
  inputSchema: z.object({
    target: z.string().describe('The target AWSCDKTF package to convert'),
  }),
  execute: async ({ context }) => {
    // TODO: implement
  },
});

const publish = new Step({
  id: 'publish',
  inputSchema: z.object({
    target: z.string().describe('The target AWSCDKTF package to convert'),
  }),
  execute: async ({ context }) => {
    // TODO: implement
  },
});

const convertWorkflow = new Workflow({
  name: 'convert-workflow',
  triggerSchema: z.object({
    target: z.string().describe('The target AWSCDKTF package to convert'),
  }),
}).step(cloneRepo);
  // .then(mergeDocs)
  // .then(convert)
  // .then(validate)
  // .then(publish);

convertWorkflow.commit();

export { convertWorkflow };