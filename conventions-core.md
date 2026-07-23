# Converter core rules (slim sheet — full details in conventions.md, read that ONLY if a rule below is ambiguous for your file)

Target: `terraconstructs` — AWS CDK L2 DevX on Terraform via **cdktn** (never `cdktf`). Provider L1s
from `@cdktn/provider-aws` per the mapping manifest. Never import `aws-cdk-lib`. Project intent:
faithful to AWS CDK wherever the Terraform model allows; deviations need a Terraform reason,
documented inline with a `// TERRACONSTRUCTS DEVIATION:` comment.

## Structure
- CDK `Resource` → extend `AwsConstructBase`; props extend `AwsConstructProps`; implement
  `get outputs()` mirroring the sibling convention (`{ <res>Arn, <res>Name, ... }` — check the
  closest sibling and match its exact key shape); add `PROPERTY_INJECTION_ID` like siblings.
- Expose the L1 as `public readonly resource: <l1>.<Type>` — never private.
- `Lazy.anyValue()/stringValue()/numberValue()/listValue()` (cdktn) — not CDK's `Lazy.any()` etc.
  Per-element snake_case mappers go INSIDE `produce()`.
- Errors: `ValidationError`/`UnscopedValidationError` from the repo's errors module, as upstream uses them.
- ContextProvider lookups: do NOT implement — `// TODO:` comment + throw.
- Preserve marker interfaces siblings declare (`iam.IAwsConstructWithPolicy`, `IEncryptedResource`, ...).
- Config accumulated via imperative APIs after construction (addX/attachX) that must land in
  singular/merged TF resources → idempotent `toTerraform()` override with `tryFindChild` guards
  (mirror `iam/policy.ts`). dependsOn propagates automatically via the stack aspect.

## Naming (never a bare literal or unscoped user-prop passthrough)
- TF resource has `name` + `name_prefix`: props `<x>Name` = exact (honor verbatim), `<x>NamePrefix`
  = prefix; both → throw; neither → prefix default via
  `stack.uniqueResourceNamePrefix(this, { prefix: this.gridUUID + "-", allowedSpecialCharacters: "_-", maxLength: <service limit> })`.
- TF resource has only `name`: `props.<x>Name ?? this.stack.uniqueResourceName(this)`.
- Mirror the closest sibling's choice; record the decision in notes.

## Attribute mapping traps
- CFN "unset = don't change" fields whose TF counterpart defaults to a concrete value (e.g.
  aws_autoscaling_schedule min/max/desired default 0, sentinel -1) — map unset EXPLICITLY (`?? -1`).
- CFN sentinel semantics with no TF representation (zero-duration = disabled, empty required
  blocks) → construct-time `ValidationError`, never provider-invalid config.
- Unset upstream tri-state props stay `undefined` — never coerce to a concrete default.
- One Cfn resource may need multiple TF resources — compose transparently inside the construct.

## Headers (first line of EVERY converted file, then one blank line)
- src:  `// https://github.com/aws/aws-cdk/blob/<TAG>/packages/aws-cdk-lib/<module>/lib/<file>.ts`
- test: same with `/test/`; integ app: `.../packages/@aws-cdk-testing/framework-integ/test/<module>/test/integ.<name>.ts`
- Exceptions: index.ts barrels, `*.generated.ts`, `private/*`, glue files with no 1:1 upstream source.

## Tests
- Upstream `describe`/`test` names VERBATIM (typos included). Unported API → drop its tests;
  blocked-on-unported-module → commented import breadcrumb + omit; provider-unsupported →
  commented block + reason line. Keep the old CFN assertion commented under each new TF assertion.
- Assert through `test/assertions.ts` `Template` helpers ONLY (they force `prepareStack()`; raw
  `Testing.synth` silently drops toTerraform-created resources). Add a wrapping describe with
  `toMatchSnapshot()` synth cases. Every snapshotted stack MUST attach
  `new HttpBackend(stack, { address: "http://localhost:3000" })` (from `cdktn`) — the default
  local backend leaks a machine-dependent tfstate path into the snapshot and CI churns it.
  Never weaken an assertion to a tautology; `test.skip` needs a
  real body + reason. Emit a `from*Attributes` round-trip test for every `from*Attributes` static.
