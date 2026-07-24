# Final Independent Audit — aws-ecs review-fix round

**Worktree:** `/Users/vincentsmet/tcons/base-ecs` (branch `convert-aws-ecs`, uncommitted)
**Auditor scope:** the 4 findings assigned to this round (findings 1, 4, 5, 6 of `findings-pr123-review.md`),
plus a reality-check of the other 3 findings and an independent gate run.
**Verdict: PASS** — all 4 assigned-and-accurate findings are correctly fixed against the real diff, and the
full gate (tsc / eslint / affected jest + snapshots) is green when I ran it myself.
**Caveat (not a round failure):** findings **2, 3, 7 are still open** and were never in this round's scope — see
the "Still-open (out of this round's scope)" section. They must be tracked by a separate round before the PR merges.

---

## Method

- Read the actual worktree diff (`git diff`), not implementer/verifier notes, for every claim below.
- Re-derived each ARN/name/token code path by hand.
- Confirmed the assigned scope (4 source files + their tests) and that the 3 out-of-scope findings' files are untouched.
- Ran the gates myself (results at the bottom). Did **not** commit and did **not** edit any file.

---

## Per-finding verdicts (all 7)

### Finding 1 — ASG capacity provider passes a name where Terraform requires an ARN — **FIXED**
- **Source:** `src/aws/compute/ecs/cluster.ts:2122` now assigns
  `autoScalingGroupArn: this.autoScalingGroup.autoScalingGroupArn` (was `.autoScalingGroupName`), with a
  `TERRACONSTRUCTS DEVIATION` comment (2114-2121) explaining that CFN tolerates the name but the Terraform
  `aws_ecs_capacity_provider.auto_scaling_group_arn` requires a real ARN (AWS returns the ARN on read, so a
  name causes perpetual drift/replacement).
- **Correctness:** `autoScalingGroupArn` is declared on the `AutoScalingGroup` base, so both created ASGs
  (`aws_autoscaling_group.arn`) and `fromAutoScalingGroupName` imports (a `formatArn` token) resolve correctly
  with no extra handling. Verified no other `.autoScalingGroupName` producer path is bypassed.
- **Test:** `test/aws/compute/ecs/cluster.test.ts` — imported-ASG case (line ~1740) changed its expectation from
  the literal `"my-asg"` to `stack.resolve(asg.autoScalingGroupArn)`; the created-ASG default (line ~1687) and four
  full-config cases (~2282/2311/2340/2370) switched from `.autoScalingGroupName` to `.autoScalingGroupArn`. For a
  created ASG the name-token and arn-token resolve to different strings, so all of these **fail pre-fix**.
- **Cross-suite snapshots:** `ec2/__snapshots__/cross-stack.test.ts.snap` (1 line), `ec2/__snapshots__/ec2-service.test.ts.snap`
  (2 lines), and `external/__snapshots__/external-service.test.ts.snap` (1 line) each flip
  `...DefaultAutoScalingGroup...name` -> `.arn`. These are the mechanical downstream of the source
  fix — every changed snapshot line is exactly that `.name`->`.arn` swap and nothing else. Confirmed by re-running
  those suites: snapshots match without `--updateSnapshot`.

### Finding 4 — incomplete Service Connect TLS synthesizes an invalid provider block — **FIXED**
- **Source:** `src/aws/compute/ecs/base/base-service.ts:1487-1495` adds, inside
  `validateServiceConnectConfiguration`, a guard:
  `if (serviceConnectService.tls && !awsPcaAuthorityArn) throw new ValidationError("'awsPcaAuthorityArn' is required when 'tls' is configured on a Service Connect service", this)`,
  with a `TERRACONSTRUCTS DEVIATION` note (the TF `issuer_cert_authority.aws_pca_authority_arn` is required whereas
  CFN's is optional).
- **Correctness:** validation runs before the render path that non-null-asserts `svc.tls.awsPcaAuthorityArn!`, so
  the four bypass shapes (`tls:{}`, `tls:{role}`, `tls:{kmsKey}`, `tls:{awsPcaAuthorityArn:""}`) are now rejected.
  Unresolved tokens resolve to a non-empty placeholder (truthy) and correctly pass the guard, preserving tokenized
  ARN support.
- **Tests:** `test/aws/compute/ecs/base-service.test.ts` adds 5 tests — four throw-cases (empty object, role-only,
  kmsKey-only, empty-string ARN) all asserting the new message, plus one positive test that a `Lazy` tokenized ARN
  does **not** throw and renders `issuer_cert_authority.aws_pca_authority_arn = stack.resolve(tokenizedArn)`. The
  four throw-cases **fail pre-fix** (old code short-circuits on falsy and silently renders an empty block). The token
  test guards against over-rejection.

### Finding 5 — omitted `managedEBSVolume` bypasses required size/snapshot validation — **FIXED** (this was the still-open half)
- **Context:** the destroy-ordering half was already handled in commit `b0ae9f7`; the validation-bypass half
  (this finding) was still open, as pre-flagged by the orchestrator.
- **Source:** `src/aws/compute/ecs/base/service-managed-volume.ts:279-284` replaces the early
  `if (!volumeConfig) return;` bail-out in `validateEbsVolumeConfiguration` with
  `throw new ValidationError("'size' or 'snapShotId' must be specified", this)` (reusing the existing message and
  the already-imported `ValidationError`), with a `TERRACONSTRUCTS DEVIATION` comment.
- **Correctness:** pre-fix an omitted config returned early and the constructor built an effective `{ role }`-only
  config, which `renderVolume` would synthesize into an invalid required `managed_ebs_volume` block (no
  size_in_gb / snapshot_id). Post-fix it throws at construct time. The `{role}`-with-object case was already caught
  by the pre-existing size/snapshot check.
- **Test:** `test/aws/compute/ecs/fargate/fargate-service.test.ts:2248` adds
  `throw an error when managedEBSVolume is omitted entirely` (`new ServiceManagedVolume(stack, "EBS Volume", { name: "db" })`),
  asserting the thrown message. **Fails pre-fix** (no throw).

### Finding 6 — imported external service exposes the cluster-qualified resource name — **FIXED**
- **Source:** `src/aws/compute/ecs/external/external-service.ts:119-122` — `serviceName` now uses the shared
  `extractServiceNameFromArn(this, externalServiceArn)` helper (imported from `../base/from-service-attributes`)
  instead of raw `AwsStack.ofAwsConstruct(scope).splitArn(...).resourceName`. The now-unused `ArnFormat` and
  `AwsStack` imports were removed (grep confirms no remaining references; tsc clean).
- **Correctness:** traced the helper (`from-service-attributes.ts:95-119`): current-format
  `service/my-cluster/my-service` -> `splitArn` resourceName `my-cluster/my-service` -> `.split("/")[1]` = `my-service`;
  old-format `service/my-service` -> `my-service`; tokenized ARNs handled via the `Token.isUnresolved` branch
  (`Fn.split`/`Fn.element` idx 2), identical to the Fargate sibling. The fix harmonizes external-service to the
  already-correct Fargate implementation, passing `this` for scope consistently with the sibling.
- **Test:** `test/aws/compute/ecs/external/external-service.test.ts:686` adds a `fromExternalServiceArn` describe with
  a current-format case asserting `serviceName === "my-service"` (**fails pre-fix**, where `splitArn` returned
  `my-cluster/my-service`) and an old-format back-compat case (passes pre/post, acceptable companion).

### Still-open (out of this round's scope) — Findings 2, 3, 7 — **STILL OPEN** (NOT rejected as inaccurate)
Not part of the 4 items assigned to this round; the diff does not touch their files, confirmed:
- **Finding 2** — `cluster.ts` `addAsgCapacityProvider()` does not propagate ASG security groups to
  `cluster.connections`. The cluster.ts diff is confined to the `AsgCapacityProvider` class (`@@ -2111`), lines
  714-735 are untouched (`git diff cluster.ts | grep connections` = 0 hits). **Appears genuine** on a read of the
  code (the deprecated `addAutoScalingGroup` path does add the SGs; the preferred path does not), but not verified to
  fix-depth here. Needs its own lane.
- **Finding 3** — `ec2-service.ts` `addPlacementConstraints()` resets `this.constraints = []` each call. File
  untouched (`git status ec2-service.ts` empty). **Appears genuine.** Needs its own lane.
- **Finding 7** — `firelens-log-router.ts` tokenized S3 config ARN bucket permission. File untouched
  (`git status firelens-log-router.ts` empty). **Appears genuine.** Needs its own lane.

None of 2/3/7 were assessed for accuracy in this round's plan, so none can be closed here. They are **still-open**,
not fixed and not rejected.

---

## Verify-lane verdicts vs. reality

All four verify-lane "pass" verdicts (items 1-4) hold against the actual diff:
- Item-1: line/behavior claims accurate; the created-ASG name-vs-arn token distinction that makes the tests
  fail-pre-fix is real. **Confirmed.**
- Item-2: guard placement (validation before render), the four bypass shapes, and the token-truthiness argument
  all check out; provider L1 requires the ARN. **Confirmed.**
- Item-3: early-return -> throw swap, reuse of existing message/import, and fail-pre-fix test all check out.
  **Confirmed.**
- Item-4: helper swap, import cleanup (no dangling `ArnFormat`/`AwsStack`), both-format handling, fail-pre-fix test
  all check out. **Confirmed.**

The gate lane's account is also accurate: the two "cross-item" snapshot updates
(`ec2/cross-stack.test.ts.snap`, `ec2/ec2-service.test.ts.snap`) are the mechanical `.name`->`.arn` fallout of
Finding 1's source change; each changed line is exactly that swap. I re-verified by running those suites without
`--updateSnapshot` and they pass.

No inaccurate/over-claimed verify verdicts were found. No weakened assertions, no snapshot updates absorbing a
regression, no edits outside the assigned files.

---

## Gate results (run independently by this audit)

- `tsc --noEmit` — **PASS** (exit 0).
- `pnpm eslint` (full `src test build-tools projenrc`, runs with `--fix`) — **PASS** (exit 0); introduced **no**
  new changes (`git status` still lists exactly the same 11 files).
- `pnpm jest` over the 6 affected suites (`cluster`, `base-service`, `external-service`, `fargate-service`,
  `ec2-service`, `ec2/cross-stack`) — **PASS**: 6/6 suites, **431/431 tests**, **15/15 snapshots**, no snapshot
  writes (ran without `--updateSnapshot`).

(The plan's claim of a full 35-suite / 961-test green run is consistent with what I re-ran on the affected subset;
I did not re-run the entire suite to avoid the documented memory-crash risk of `pnpm test`, but the changed-surface
subset — which is where any regression from these edits would land — is fully green.)

---

## Suggested per-item commit plan

Four self-contained commits, one per finding. None touch files outside its finding.
Note: the three cross-suite snapshot files belong with Finding 1 (they are its emission fallout).

**Commit 1 — Finding 1 (ASG capacity provider ARN)**
```
Files:
  src/aws/compute/ecs/cluster.ts
  test/aws/compute/ecs/cluster.test.ts
  test/aws/compute/ecs/ec2/__snapshots__/cross-stack.test.ts.snap
  test/aws/compute/ecs/ec2/__snapshots__/ec2-service.test.ts.snap
  test/aws/compute/ecs/external/__snapshots__/external-service.test.ts.snap

Message:
  fix(ecs): pass ASG ARN (not name) to aws_ecs_capacity_provider

  AsgCapacityProvider assigned the ASG *name* to
  auto_scaling_group_provider.auto_scaling_group_arn. Upstream CFN tolerates a
  name there, but the Terraform aws_ecs_capacity_provider resource requires a
  real ARN and AWS returns the ARN on read, so a name causes perpetual
  drift/replacement. Use this.autoScalingGroup.autoScalingGroupArn, which is
  defined on the AutoScalingGroup base for both created ASGs and
  fromAutoScalingGroupName imports. Regenerate the three sibling ec2/external
  capacity-provider snapshots (mechanical .name -> .arn).
```

**Commit 2 — Finding 4 (Service Connect TLS requires CA ARN)**
```
Files:
  src/aws/compute/ecs/base/base-service.ts
  test/aws/compute/ecs/base-service.test.ts

Message:
  fix(ecs): require awsPcaAuthorityArn when Service Connect tls is set

  ServiceConnectTlsConfiguration.awsPcaAuthorityArn is optional and validation
  only checked truthiness, so tls:{}, tls:{role}, tls:{kmsKey} and an empty ARN
  were accepted and rendered an empty issuer_cert_authority block that the TF
  provider (which requires aws_pca_authority_arn) rejects. Reject a missing/empty
  CA ARN at synth time while still accepting unresolved tokens.
```

**Commit 3 — Finding 5 (omitted managedEBSVolume validation)**
```
Files:
  src/aws/compute/ecs/base/service-managed-volume.ts
  test/aws/compute/ecs/fargate/fargate-service.test.ts

Message:
  fix(ecs): reject omitted managedEBSVolume at construct time

  validateEbsVolumeConfiguration returned early when managedEBSVolume was
  omitted, letting the constructor build a role-only effective config that
  synthesizes an invalid managed_ebs_volume block (no size_in_gb/snapshot_id).
  The TF block requires one of those, so throw the existing "'size' or
  'snapShotId' must be specified" error for the omitted case too. (Complements
  b0ae9f7, which fixed the destroy-ordering half of the finding.)
```

**Commit 4 — Finding 6 (external service ARN name extraction)**
```
Files:
  src/aws/compute/ecs/external/external-service.ts
  test/aws/compute/ecs/external/external-service.test.ts
  (external-service snapshot already listed under Commit 1)

Message:
  fix(ecs): extract trailing service name from external service ARN

  ExternalService.fromExternalServiceArn used raw splitArn().resourceName, which
  for a current-format ARN service/cluster/service yields "cluster/service".
  Use the shared extractServiceNameFromArn helper (already used by the Fargate
  sibling) so both current-format and tokenized ARNs resolve to the service name.
```
> If you prefer strict one-finding-per-commit isolation, keep the external-service snapshot in Commit 4 instead of
> Commit 1; it changes for the same `.name`->`.arn` reason but lives in the external-service suite.

---

## Rebuttal section for the PR review reply (inaccurate findings)

**None.** Every finding this round evaluated (1, 4, 5, 6) is accurate and has been fixed — there is nothing to rebut.
Findings 2, 3 and 7 were out of this round's scope and are **not** contested; they remain open and should be
addressed in a follow-up before merge. No "rejected-as-inaccurate" verdicts were produced.

Suggested PR reply stub for the fixed items:

> Findings 1, 4, 5, 6 addressed. 1: capacity provider now passes the ASG ARN (TF requires a real ARN; name caused
> drift). 4: Service Connect now rejects a `tls` config without a non-empty `awsPcaAuthorityArn` while still accepting
> tokens. 5: an omitted `managedEBSVolume` now throws at synth (`'size' or 'snapShotId' must be specified`) instead of
> synthesizing an invalid block. 6: `fromExternalServiceArn` now uses the shared `extractServiceNameFromArn` helper.
> Findings 2, 3, 7 are tracked separately and will follow in a subsequent change.
