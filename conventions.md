# TerraConstructs conversion conventions (AWS CDK L2 → terraconstructs/base)

Target library: `terraconstructs` (repo worktree: /Users/vincentsmet/tcons/base-sample).
It ports the AWS CDK L2 developer experience onto Terraform via **CDKTN** (community fork of CDKTF).

## Imports — critical

- Terraform CDK core: `import { ... } from "cdktn"` — NEVER `cdktf`.
- AWS provider L1 resources: `import { sqsQueue } from "@cdktn/provider-aws"` style — each resource is a
  namespace dir under `node_modules/@cdktn/provider-aws/lib/<resource-kebab>/`. Look at existing files in
  `src/aws/notify/` for the exact import idiom used by this repo (follow it exactly).
- Never import `aws-cdk-lib` or anything from the AWS CDK.

## Class structure rules

- Where AWS CDK extends `Resource`, extend `AwsConstructBase` (from `src/aws/aws-construct.ts`).
- Constructor props interfaces extend `AwsConstructProps`.
- Implement the abstract `get outputs(): Record<string, any>` getter exposing the primitive attributes
  of the construct interface (see `registerOutputs`/`outputName` patterns in existing constructs).
- Where AWS CDK uses `Stack.of(this)`, use `AwsStack.ofAwsConstruct(this)` / the `AwsStack` utility
  attributes (region, account, partition, urlSuffix...) — copy the idiom from the SNS `topic.ts` exemplar.
- Lazy evaluation: use `Lazy.anyValue()` / `Lazy.stringValue()` / `Lazy.numberValue()` / `Lazy.listValue()`
  (cdktn) instead of AWS CDK's `Lazy.any()` / `Lazy.string()` / `Lazy.number()` / `Lazy.list()`.
  L1 constructor properties that depend on parent-class attributes mutable through imperative APIs MUST
  be lazily evaluated so they resolve at synth time.
- One AWS CDK resource may require MULTIPLE terraform provider resources (1-to-many). Configure and create
  them transparently inside the construct — the public API must stay faithful to the AWS CDK API.
- Errors: use `ValidationError` / `UnscopedValidationError` from the repo's `src/errors.ts`
  (imported in aws modules via the same path existing files use) — mirror how upstream aws-cdk-lib uses them.
- ContextProvider lookups: do NOT implement; mark with a `// TODO: ContextProvider lookups not supported` comment
  and throw an Error if that code path is exercised.
- Tokens/intrinsics: CloudFormation `Fn.*`/pseudo-parameters must become Terraform-native equivalents
  (see how existing constructs in the repo handle ARN building via `src/aws/arn.ts` and stack attributes).
- Generated companion files (`*-augmentations.generated.ts`, `*-grants.generated.ts`) come from projen codegen,
  NOT from conversion. When present, wire imports/exports to them exactly as sibling modules do
  (see how `src/aws/notify/index.ts` and `topic-base.ts`-style files reference their generated counterparts).

## Namespace registry (aws-cdk-lib module → base namespace)

aws-sqs→notify, aws-sns→notify, aws-events→notify, aws-kinesis→notify, aws-kinesisfirehose→notify,
aws-events-targets→notify/notification-targets, aws-iam→iam, aws-kms→encryption, aws-secretsmanager→secrets,
aws-cloudwatch→cloudwatch, aws-route53/aws-certificatemanager/aws-route53-targets→edge,
aws-s3/aws-ssm/aws-dynamodb→storage, aws-ec2/aws-ecs/aws-elasticloadbalancing(v2)/aws-lambda/aws-stepfunctions/
aws-apigateway(v2)/aws-application-autoscaling/aws-autoscaling→compute.

Cross-module references in upstream code (e.g. `import * as kms from '../aws-kms'`) map to the corresponding
base namespace (e.g. `import * as kms from '../encryption'` — but verify the actual export names in that namespace).

## Test conversion rules

- Tests are Jest, colocated under `test/aws/<namespace>/`, mirroring source names (`queue.ts` → `queue.test.ts`).
- Use the repo's assertion helpers from `test/assertions.ts` (`Template.synth(...)`, resource matchers) —
  copy the setup/assertion idiom from `test/aws/notify/topic.test.ts` exactly (AwsStack construction,
  environmentName/gridUUID props, provider setup).
- CloudFormation template assertions (`Template.fromStack(...).hasResourceProperties("AWS::SQS::Queue", {...})`)
  become Terraform synth assertions against the mapped terraform resource types with snake_case attributes.
- Preserve every upstream test case and its intent; skip (with `test.skip` + comment) only tests exercising
  features intentionally not implemented (ContextProvider lookups, CFN-only behaviors) — never silently drop.

## HARD REPO INVARIANTS (run-1 regressions — violating ANY of these fails the conversion)

1. **gridUUID physical naming.** Every nameable resource MUST use the stack prefix helper and the
   Terraform `*_name_prefix` attribute — NEVER a bare `name:`. Golden snippet (src/aws/notify/queue.ts):
   ```ts
   namePrefix = this.stack.uniqueResourceNamePrefix(this, {
     prefix: namePrefix ?? this.gridUUID + "-",
     allowedSpecialCharacters: "_-",
     maxLength: 80,   // use the service's real name-length limit
   });
   this.physicalName = namePrefix;
   ```
2. **Public L1 handle.** Expose the underlying provider resource as `public readonly resource: <l1>.<Type>`
   (downstream constructs read it) — never private.
3. **Sibling shape over raw upstream.** Before converting any construct, read the closest sibling in the
   target namespace and mirror: construct ids (`"Resource"`, `"Policy"`), PolicyDocument options (NO
   `assignSids` unless the sibling uses it), singular-vs-array prop shapes, `outputs` key naming
   (Topic style: `{ topicArn, topicName }` → `{ <res>Arn, <res>Name, ... }`), and
   `public static readonly PROPERTY_INJECTION_ID` if siblings carry it.
4. **Marker interfaces.** Preserve capability interfaces the sibling pattern declares
   (`iam.IAwsConstructWithPolicy`, `iam.IEncryptedResource`, ...) — don't re-declare members inline.
5. **Tests are not the oracle.** Repo invariants are verified by an independent phase against these
   rules and sibling files — never solely by tests the pipeline itself wrote. Fix-loop agents must
   re-derive expected values from documented behavior; never converge an assertion to x===x and never
   remove `stack.resolve(...)` from only one side of an equality.

## Provenance headers (MANDATORY — enforce at 100%, even though the existing corpus is only ~60% consistent)

- **Source files**: THE FIRST LINE of every hand-ported `src/aws/**/*.ts` file is a tagged GitHub link
  to its 1:1 upstream file, followed by one blank line:
  `// https://github.com/aws/aws-cdk/blob/<vX.Y.Z-or-sha>/packages/aws-cdk-lib/<module>/lib/<file>.ts`
  Use the aws-cdk tag being converted (keep the `v` prefix); raw SHA only if the change is untagged.
  Exceptions: `index.ts` barrels, `*.generated.ts`, `private/*`, and glue files with no single upstream source.
- **Test files**: same header, swapping `/lib/` for `/test/`.
- **Integ apps**: THE FIRST LINE of every `integ/aws/<ns>/apps/<file>.ts` links to the upstream integ test:
  `// https://github.com/aws/aws-cdk/blob/<tag>/packages/@aws-cdk-testing/framework-integ/test/<module>/test/integ.<name>.ts`
- Do NOT copy the corpus statistically: even recent ports (`restapi.ts`, `gateway-response.ts`,
  `dynamodb.test.ts`) are missing headers — those are oversights, not policy.

## Test-suite conventions (beyond assertions)

- Copy upstream `describe`/`test` name strings VERBATIM — including upstream typos — so equivalent
  AWS CDK tests are greppable 1:1.
- Upstream API not ported (e.g. a `fromXxxAttributes` variant): DROP its tests outright; do not paste
  commented copies.
- Feature blocked on an unported sibling module (e.g. Cognito authorizer): leave the import/export line
  commented as a breadcrumb (`// export * from "./cognito"`) and omit the tests.
- Feature unsupported by terraform-provider-aws: comment the whole `test()` block with a reason line
  (`// Not supported by Terraform Provider`) — this is the kept-until-portable case.
- When replacing a CloudFormation assertion with the Terraform one, keep the original
  `Template.fromStack(...).hasResourceProperties("AWS::...")` call commented directly beneath it for
  traceability (established pattern, 200+ instances).
- Add repo-specific snapshot tests (`toMatchSnapshot`) in a wrapping `describe("<Construct>")` block on
  top of the upstream suite — snapshots are the repo's main defense against emitted-Terraform drift.

## Generated companion files (codegen, never LLM-converted)

- `<service>-canned-metrics.generated.ts`: copied verbatim from aws-cdk-lib's own build output (these
  are intermediate build artifacts NOT in the aws-cdk git repo — recover them from the compiled npm
  bundle's `.generated.d.ts`/js or an existing recovery). Keep the `/* eslint-disable prettier/prettier,max-len */`
  first line, no GitHub header. Imported directly by the resource file exposing `metricXxx()`.
- `*-augmentations.generated.ts` (side-effect import in `index.ts`) and `*-grants.generated.ts`
  (imported by the base class) exist only for older ports (sqs/sns/ec2/lambda). Current best practice
  (DynamoDB, the golden exemplar): hand-written, individually-headed grant helper files
  (`table-grants.ts`, `dynamodb-perms.ts` style) instead of generated grants.
- If generated metrics don't match real service metrics, add a hand-written `<service>-fixed-canned-metrics.ts`
  wrapper (kinesis pattern) and import the fixed one.

## Integ test porting (src,test,integ — all three per module)

- App file `integ/aws/<ns>/apps/<name>.ts` with the provenance header (above); reads env vars
  (`ENVIRONMENT_NAME`, `AWS_REGION`, `OUT_DIR`, `STACK_NAME`, ...) and uses `LocalBackend`.
- Identity triple: app filename == Makefile target == Go test maps via
  `run<Ns>IntegrationTest(t, "<name>", region, validateFn)` (`go test -run ^Test<Name>$`).
- Go validator hand-mirrors every literal from the app TS as an assertion (min/max capacities, cron
  expressions, names); outputs flow via `registerOutputs`+`util.LoadOutputAttribute` or manual
  `TerraformOutput`+`terraform.OutputAll`.
- Upstream validation intent often lives in comments in the aws-cdk `integ.*.ts` file — port those as
  terratest stages (e.g. storage `table.autoscaling` adds a `load_test` stage that hammers DynamoDB
  reads until the target-tracking policy actually fires).
- Stages: `synth_app` / `deploy_terraform` / `validate` / `cleanup_terraform` (+ extras like `load_test`),
  skippable via `SKIP_<stage>=true`; make suffixes `-synth-only`, `-no-cleanup`, `-validate-only`,
  `-cleanup-only`. Extra stages need explicit `SKIP_<stage>` (e.g. `-synth-only` does NOT skip `load_test`).
- Golden integ exemplars: `integ/aws/storage/apps/table.autoscaling.ts` + `TestAutoScalingTable`,
  and the apigw apps under `integ/aws/compute/apps/`.

## Style

- Match the surrounding repo: file naming (kebab-case), JSDoc on all public API (jsii requires it),
  no `any` in public API, jsii constraints (public API types must be exported, no TS-only tricks like
  parameter properties in exported classes' public signatures beyond what sibling files already do).
- Keep upstream JSDoc comments, adapting CloudFormation wording to Terraform where it would be wrong.
