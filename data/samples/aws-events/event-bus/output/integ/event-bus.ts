import { App, LocalBackend } from "cdktf";
import { aws } from "../../../../src";

const environmentName = process.env.ENVIRONMENT_NAME ?? "test";
const region = process.env.AWS_REGION ?? "us-east-1";
const outdir = process.env.OUT_DIR ?? "cdktf.out";
const stackName = process.env.STACK_NAME ?? "event-bus";

const app = new App({
  outdir,
});
const stack = new aws.AwsStack(app, stackName, {
  gridUUID: "12345678-1234",
  environmentName,
  providerConfig: {
    region,
  },
});
new LocalBackend(stack, {
  path: `${stackName}.tfstate`,
});

const dlq = new aws.notify.Queue(stack, 'DLQ');

const bus = new aws.notify.EventBus(stack, 'Bus', {
  deadLetterQueue: dlq,
  description: 'myEventBus',
});

bus.addToResourcePolicy(new aws.iam.PolicyStatement({
  effect: aws.iam.Effect.ALLOW,
  principals: [new aws.iam.AccountPrincipal(stack.account)],
  actions: ['events:PutEvents'],
  sid: 'Statement1',
  resources: [bus.eventBusArn],
}));

bus.addToResourcePolicy(new aws.iam.PolicyStatement({
  effect: aws.iam.Effect.ALLOW,
  principals: [new aws.iam.AccountPrincipal(stack.account)],
  actions: ['events:PutRule'],
  sid: 'Statement2',
  resources: [bus.eventBusArn],
}));

app.synth();
// import { IntegTest } from '@aws-cdk/integ-tests-alpha';
// new IntegTest(app, 'IntegTest-EventBusStack', {
//   testCases: [stack],
// });
