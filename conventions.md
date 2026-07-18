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
aws-events-targets→notify/notification-targets, aws-iam→iam, aws-kms→encryption,
aws-secretsmanager→encryption (established by PR #117 — NOT "secrets" as older terratitan prompts said),
aws-cloudwatch→cloudwatch, aws-route53/aws-certificatemanager/aws-route53-targets→edge,
aws-s3/aws-ssm/aws-dynamodb→storage, aws-ec2/aws-ecs/aws-elasticloadbalancing(v2)/aws-lambda/aws-stepfunctions/
aws-apigateway(v2)/aws-application-autoscaling/aws-autoscaling→compute.

Cross-module references in upstream code (e.g. `import * as kms from '../aws-kms'`) map to the corresponding
base namespace (e.g. `import * as kms from '../encryption'` — but verify the actual export names in that namespace).

## The prepare-time `toTerraform()` pattern (established repo-wide — 11 L2 overrides on main)

Use when an L2 accumulates config via post-construction imperative APIs (`addStatements`,
`addTarget`, `attachToRole`, ...) and the reflecting TF resources must be singular/merged, or can
only be created once all callers finished mutating the construct. Canonical: `src/aws/iam/policy.ts`
(one `IamRolePolicy`/`IamUserPolicy`/`IamGroupPolicy` per attachment). Others: iam/managed-policy,
iam/group, iam/user, notify/rule (event targets), storage/table (contributor insights),
storage/ecr-repository (lifecycle policy), storage/bucket (+bucket-notifications dependency wiring),
compute/method (API GW integration/responses), compute/lb-shared/base-target-group (attachments).

The idiom:
```ts
/** Adds resources to the terraform JSON output. Called by TerraformStack.prepareStack() */
public toTerraform(): any {
  if (/* nothing accumulated / not attached */) return {};
  for (let i = 0; i < this.items.length; i++) {
    const id = `SomeDeterministicId${i}`;          // stable, key/index-derived
    if (this.node.tryFindChild(id)) continue;      // idempotency guard (never findChild — throws)
    new SomeL1Resource(this, id, { /* from accumulated config */ });
  }
  return {};  // side effect (new children) is the point; fragment contributes nothing
}
```
- Singleton L1 blocks need no guard — call the L1 `put*` setter unconditionally (last write wins;
  see base-target-group). Only creation of new child constructs needs `tryFindChild`.
- Do NOT add `toTerraform()` to constructs whose rendering is consumed BY another construct's
  `toTerraform()` — infinite recursion (see the warning in iam/policy-document.ts).
- `dependsOn` for lazily-created children is propagated automatically by the stack's
  `TerraformDependencyAspect` (aspects run after prepareStack) — no manual wiring.

## TEST HARNESS RULE (hard): always force the prepare pass

cdktn's raw `Testing.synth(stack)` does NOT run `prepareStack()`. Worse: the lazy `toTerraform()`
overrides still execute as a side effect during final synthesis — but the element list was already
snapshotted, so the created resources are **silently missing from the emitted JSON** (e.g. an
attached iam Policy yields the policy document but NO `aws_iam_role_policy`), and a weak test stays
green. Therefore:
- ALWAYS assert through the repo helpers in `test/assertions.ts` (`Template.synth`, `Template.fromStack`,
  `new Template(stack)`, `Template.resources/expectOutput/...`) — every one calls `stack.prepareStack()`
  first. Raw `Testing.synth` is allowed ONLY with an explicit `stack.prepareStack()` on the line before.
- Real `App.synth()`/`cdktn synth` (and therefore integ apps) are safe — the gap is unit tests only.
- Verify/review phases must grep converted tests for raw `Testing.synth` without a preceding
  `prepareStack()` and flag each as a violation.

## Cfn resources with NO terraform-provider-aws equivalent (composition strategy)

Some Cfn resources have no TF resource and never will (provider maintainers decline when no
matching service API exists — e.g. `AWS::SecretsManager::SecretTargetAttachment`, which is
CloudFormation-side merge magic). The mapping manifest must record these as
`tfResources: [], strategy: "composition"` with the design in `attributeNotes`. Sanctioned
composition patterns (established by base PR #117, commit 2ced2b2):

- **Prepare-time composition**: create/mutate a provider resource lazily in an idempotent
  `toTerraform()` (first prepareStack pass) — mirror `src/aws/iam/policy.ts` — so late `attach()`-style
  calls can merge into a single resource (`jsonencode(merge(jsondecode(base), fields))`) instead of
  creating conflicting duplicates.
- **Sanctioned API superset**: when Terraform needs client-side data that CloudFormation merges
  server-side, an upstream interface MAY gain optional props (e.g. `SecretAttachmentTargetProps.connectionFields`)
  — document the deviation in a comment referencing the missing provider capability.
- **Test-only L1 adapters**: helper adapters for not-yet-ported modules used by integ apps live under
  `integ/`, never in `src/`.

## Correctness rules mined from external review (PR #117 review, sakul-learning)

(All five findings were confirmed and fixed by the PR author in 7cf5c24 using the same offline
`tofu validate` methodology — the reference implementation now embodies these rules, so converted
code is expected to MATCH them, e.g. zero-duration rotation → synth-time ValidationError.)

- **Never synthesize provider-invalid config for CFN sentinel semantics.** CFN magic values (e.g.
  `Duration.days(0)` = "rotation disabled") often have NO Terraform representation — an empty
  required block (`rotation_rules {}`) or half-populated exactly-one-of block fails `terraform
  validate`. (Empirically confirmed 2026-07-19: PR #117's zero-duration RotationSchedule synth
  fails `tofu validate` with "Invalid combination of arguments" — never reaches AWS.) If unrepresentable: throw `ValidationError` at construct time (or omit the resource
  entirely when that preserves semantics). Tests must assert the error — a test asserting the
  invalid synthesized shape is worse than no test.
- **Composition preconditions fail at construct time.** When a composition strategy or API superset
  has combinations that cannot work (e.g. merging `connectionFields` into a scalar secret value),
  reject with a diagnostic `ValidationError` when the combination is configured — never synthesize
  a Terraform expression that fails at plan/apply.
- **Imported (`fromXxx`) variants must not silently no-op.** If an imperative API cannot take effect
  on an imported resource, throw (preferred) or warn loudly, and document the limitation in the
  JSDoc of the interface method — never return success while discarding input.
- **ARN/name parsing must respect the declared import form** (partial vs complete ARN suffix
  handling) and carry edge-case tests (names that look like the AWS suffix pattern).
- **No empty skipped-test placeholders.** `test.skip` must wrap a real portable body with a reason;
  an empty placeholder catches no regression — replace with active constructor-error tests or drop.
- **PIPELINE GATE — provider validation:** synth-level jest assertions cannot catch provider-schema
  violations. After integ synth-only, run `tofu init -backend=false && tofu validate` in the
  synthesized tf/<app> dir (plugin comes from TF_PLUGIN_CACHE_DIR — no AWS credentials needed) and
  treat failures as pipeline failures.

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

1. **Stack-scoped physical naming.** Every physical name MUST come from one of the two stack
   helpers (both render the stack-rooted construct path, so both carry the gridUUID scoping).
   FORBIDDEN: bare literals or unscoped user-prop passthrough (`name: props.xName` alone) — the
   run-1 critical regression. The two sanctioned forms (measured on main: 54 vs 8 call sites):
   - **Exact-name form (majority — topic.ts, kinesis-stream.ts, log-group.ts, alarm.ts, ...):**
     `name: props.<x>Name ?? this.stack.uniqueResourceName(this)` — deterministic full name,
     user-supplied name honored verbatim.
   - **Prefix form (queue.ts, bucket.ts, role.ts, function.ts, state-machine.ts):**
     ```ts
     namePrefix = this.stack.uniqueResourceNamePrefix(this, {
       prefix: namePrefix ?? this.gridUUID + "-",
       allowedSpecialCharacters: "_-",
       maxLength: 80,   // the service's real name-length limit
     });
     this.physicalName = namePrefix;   // → Terraform *_name_prefix attribute
     ```
     Provider appends a random suffix (create-before-destroy safe); even user names get suffixed.
   Choose by mirroring the closest sibling; no precedent → prefer prefix form if the TF resource
   supports `name_prefix` AND replacement churn is likely, else exact-name. Record the choice in notes.
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
