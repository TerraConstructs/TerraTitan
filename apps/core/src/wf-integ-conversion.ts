import { mastra } from './mastra/index.js';
import { InitType } from './mastra/workflows/poc-integ-convert.js';
import { gitRoot } from './mastra/util/helpers.js';

// PoC conversion of AWS CDK Integ Tests to TerraConstructs
const samplesDir = `${gitRoot}/data/samples`;
const upstreamDecl = `${gitRoot}/apps/core/node_modules/aws-cdk-lib`;
const downStreamDecl = `${gitRoot}/apps/core/node_modules/terraconstructs/lib`;

// An example ec2 Instance integ test conversion from AWS CDK to TerraConstructs
const inputData: InitType = {
  // https://github.com/aws/aws-cdk/blob/v2.164.1/packages/%40aws-cdk-testing/framework-integ/test/aws-ec2/test/integ.instance.ts
  inputFile: `${samplesDir}/aws-ec2/instance/input/integ/integ.instance.ts`,
  inputRefFiles: [
    `${upstreamDecl}/aws-ec2/lib/instance.d.ts`,
    `${upstreamDecl}/aws-ec2/lib/instance-types.d.ts`,
    `${upstreamDecl}/aws-ec2/lib/port.d.ts`,
    `${upstreamDecl}/aws-ec2/lib/machine-image/amazon-linux-2022.d.ts`,
    `${upstreamDecl}/aws-ec2/lib/machine-image/amazon-linux-2023.d.ts`,
    `${upstreamDecl}/aws-ec2/lib/machine-image/amazon-linux2.d.ts`,
    `${upstreamDecl}/aws-ec2/lib/machine-image/common.d.ts`,
    `${upstreamDecl}/aws-ec2/lib/machine-image/machine-image.d.ts`,
    `${upstreamDecl}/aws-ec2/lib/machine-image/utils.d.ts`,
    `${upstreamDecl}/aws-ec2/lib/vpc.d.ts`,
    `${upstreamDecl}/aws-ec2/lib/security-group.d.ts`,
  ],
  outputRefFiles: [
    `${downStreamDecl}/aws/compute/instance.d.ts`,
    `${downStreamDecl}/aws/compute/instance-types.d.ts`,
    `${downStreamDecl}/aws/compute/port.d.ts`,
    `${downStreamDecl}/aws/compute/machine-image/amazon-linux-2022.d.ts`,
    `${downStreamDecl}/aws/compute/machine-image/amazon-linux-2023.d.ts`,
    `${downStreamDecl}/aws/compute/machine-image/amazon-linux2.d.ts`,
    `${downStreamDecl}/aws/compute/machine-image/common.d.ts`,
    `${downStreamDecl}/aws/compute/machine-image/machine-image.d.ts`,
    `${downStreamDecl}/aws/compute/machine-image/utils.d.ts`,
    `${downStreamDecl}/aws/compute/vpc.d.ts`,
    `${downStreamDecl}/aws/compute/security-group.d.ts`,
  ],
};

export async function runIntegConvertWf() {
  const wf = mastra.vnext_getWorkflow('integConversionWorkflow');
  const run = wf.createRun();
  console.log('Running PoC Integ Conversion workflow...');
  const result = await run.start({
    inputData,
  });
  console.log(`Final output: ${JSON.stringify(result, null, 2)}`);
  return result;
}
