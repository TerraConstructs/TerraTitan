# Audit — aws-ecs-round2 review-fix round

**Worktree:** `/Users/vincentsmet/tcons/base-ecs` (uncommitted; branch `convert-aws-ecs`, 4 commits ahead)
**Scope audited:** blocking findings 2, 3, 7 and the non-blocking app-mesh observation. Findings 1/4/5/6 are committed (e299f28/44f2255/40097a8/2bea330) and were NOT re-audited beyond confirming the round-2 diff does not touch them.
**Date:** 2026-07-24

## Verdict: FAIL (gates RED)

All four in-scope findings are accurate and their source fixes are individually correct, but the finding-2 fix introduces a **real duplicate-resource regression** that leaves the jest gate red. The tree as delivered does not pass. One additional edit (removing a now-redundant line in a test helper) closes the gate; it was verified during this audit but has **not** been applied (auditor does not modify the deliverable).

### Gate results (independently run)
| Gate | Result |
|------|--------|
| `npx tsc --noEmit` | **PASS** (exit 0) |
| `pnpm compile` | PASS (per verify lane; only pre-existing jsii warnings) |
| `pnpm eslint` | PASS (per verify lane) |
| `jest` (ECS) | **FAIL — 1 of 967**: `test/aws/compute/ecs/ec2/cross-stack.test.ts › cross stack synth › Should synth ALB next to Service and match SnapShot` |

Reproduced the failure directly (Stack2 snapshot diff shows two SG rule pairs `Service_SecurityGroup1_...` and `Service_SecurityGroup2_...` where one is expected).

---

## Per-finding audit

### Finding 2 — cluster-asg-sg-propagation (blocking) — ACCURATE, fix functionally correct but INCOMPLETE
- **Accurate?** Yes. `Cluster.addAsgCapacityProvider` did not propagate ASG security groups to `cluster.connections`, while the deprecated `addAutoScalingGroup` path (cluster.ts ~781-782) does. `Ec2Service` (ec2-service.ts:340-345) copies `cluster.connections.securityGroups` for bridge/host/none modes, so the container-instance SG was omitted from LB/service ingress rules.
- **Fix:** `src/aws/compute/ecs/cluster.ts` now calls `this.connections.connections.addSecurityGroup(...provider.autoScalingGroup.connections.securityGroups)` after `configureAutoScalingGroup`, with a `TERRACONSTRUCTS DEVIATION` comment. Placement is correct: after the idempotency guard (~line 719, early-return on repeat add) and after the imported-ASG validation throw, so the existing imported-ASG throw test is unaffected.
- **Upstream fidelity:** Confirmed upstream v2.233.0 `addAsgCapacityProvider` does NOT propagate SGs; deviation is intentional and documented inline. Correct.
- **Tests:** 3 new tests in `cluster.test.ts` assert behavioral state (populated, idempotent, bridge-mode inheritance) — all pass.
- **BLOCKING PROBLEM — duplicate-resource regression (gate failure):**
  `test/aws/compute/ecs/util.ts` `addDefaultCapacityProvider` (lines 27-30) still does `cluster.addAsgCapacityProvider(provider)` **followed by** a manual `cluster.connections.addSecurityGroup(...autoScalingGroup.connections.securityGroups)`. This manual call was copied verbatim from upstream `test/util.ts`, where it is the *only* propagation because upstream's source does not propagate. Now that the source fix also propagates, the ASG SG is registered **twice**. `Connections`/`ReactiveList` (src/aws/compute/connections.ts) does not dedupe.
  - In same-stack tests this is invisible: `securityGroupsInThisStack()` returns the identical SG object and assertions are existence-based.
  - In the true cross-stack path, `securityGroupsInThisStack()` mints a **new** imported SG per list entry with an incrementing id (`SecurityGroup${i++}`), so the duplicate becomes two distinct emitted rule pairs → strict snapshot mismatch. This is a genuine duplicate Terraform resource, NOT a "regenerate the snapshot" situation; `-u` would lock in the bug.
- **Remediation (verified, not applied):** delete the now-redundant manual `cluster.connections.addSecurityGroup(...)` in `test/aws/compute/ecs/util.ts` (lines 28-30). The source fix is now the single source of truth. During audit I applied this, ran `cross-stack.test.ts` (4/4 pass) plus `cluster` + `ec2-service` + `fargate-service` + `external-service` suites (406/406 pass), then reverted util.ts to leave the tree as delivered. This is the minimal correct fix; adding dedup to `Connections` would be broader and out of scope.

### Finding 3 — ec2-service-placement-constraints-append (blocking) — ACCURATE, FIXED
- **Accurate?** Yes. `addPlacementConstraints` unconditionally ran `this.constraints = []` on every call, discarding earlier constraints; asymmetric with `addPlacementStrategies`.
- **Fix:** `src/aws/compute/ecs/ec2/ec2-service.ts:417-419` now `if (!this.constraints) { this.constraints = []; }` then appends — byte-identical idiom to `addPlacementStrategies` (lines 401-402). `constraints?` is declared optional (line 200), undefined initially. Documented deviation comment present.
- **Tests:** new "can add placement constraints in multiple calls without discarding earlier ones" asserts both constraints survive. Suite passes (ec2-service.test.ts green).

### Finding 7 — firelens-s3-getbucketlocation-token-safe (blocking) — ACCURATE, FIXED
- **Accurate?** Yes. `resources: [(options.configFileValue ?? "").split("/")[0]]` cannot derive a bucket ARN from an unresolved token; `s3:GetBucketLocation` (a bucket-level action) stayed scoped to the object-ARN token — ineffective.
- **Fix:** `src/aws/compute/ecs/firelens-log-router.ts:353` now `resources: ["*"]` with documented deviation. Matches the sibling idiom in `src/aws/compute/ecs/base/base-service.ts:1566-1567`, which uses `["*"]` for the identical action. GetBucketLocation cannot be usefully object-scoped, so wildcard is the standard correct pattern.
- **Tests:** new test uses an opaque `Lazy.stringValue` token (correctly reproduces the bug — `arnForObjects()` would carry a literal `/` and hide it), asserts GetBucketLocation resources === `["*"]` AND that GetObject stays scoped to the resolved object ARN (guards against over-broadening the wrong statement). Suite passes (firelens-log-driver.test.ts green).

### Non-blocking — app-mesh-proxy-uid-gid-zero — ACCURATE, FIXED
- **Accurate?** Yes. `if (!props.properties.ignoredUID && !props.properties.ignoredGID)` treated the valid root value `0` as absent.
- **Fix:** `src/aws/compute/ecs/proxy-configuration/app-mesh-proxy-configuration.ts:86-89` now uses explicit `=== undefined` checks, documented deviation. Correct.
- **Tests:** new "accepts ignoredUID value of 0" synthesizes and asserts `IgnoredUID: "0"` renders; the existing throw-when-neither-set test is retained. Suite passes.

---

## Scope / invariant check
- Round-2 diff is confined to the 8 expected files (4 src + 4 test). Committed findings 1/4/5/6 files (AsgCapacityProvider class, base-service TLS, service-managed-volume, external-service) are untouched. Confirmed.
- All four deviations from upstream v2.233.0 are documented inline as required. No weakened assertions; no snapshot `-u` churn.
- The one gap is the missing `util.ts` cleanup, which is squarely within finding 2's blast radius (the source fix makes the helper's manual propagation redundant) and should ship as part of the finding-2 commit.

---

## Suggested per-item commit plan

**Commit A — finding 2 (blocking):**
- Files: `src/aws/compute/ecs/cluster.ts`, `test/aws/compute/ecs/cluster.test.ts`, `test/aws/compute/ecs/util.ts` *(add the util.ts cleanup — remove the redundant manual `cluster.connections.addSecurityGroup(...)` on lines 28-30)*
- Message:
  ```
  fix(ecs): propagate ASG security groups to cluster.connections in addAsgCapacityProvider

  addAsgCapacityProvider now mirrors the deprecated addAutoScalingGroup path and
  adds the ASG security groups to cluster.connections, so Ec2Service bridge/host/none
  modes include the container-instance SG in LB/service rules. Drops the now-redundant
  manual addSecurityGroup in the test helper (util.ts) to avoid a double-registration
  that emitted duplicate SG rules in the cross-stack scenario. Documented deviation
  from upstream v2.233.0 inline.
  ```

**Commit B — finding 3 (blocking):**
- Files: `src/aws/compute/ecs/ec2/ec2-service.ts`, `test/aws/compute/ecs/ec2/ec2-service.test.ts`
- Message:
  ```
  fix(ecs): accumulate placement constraints across addPlacementConstraints calls

  Initialize this.constraints only when undefined and append, matching
  addPlacementStrategies, so repeated calls no longer discard earlier constraints.
  ```

**Commit C — finding 7 (blocking):**
- Files: `src/aws/compute/ecs/firelens-log-router.ts`, `test/aws/compute/ecs/firelens-log-driver.test.ts`
- Message:
  ```
  fix(ecs): scope FireLens s3:GetBucketLocation to wildcard for tokenized config ARNs

  split('/')[0] cannot derive a bucket ARN from an unresolved token, leaving an
  ineffective permission. Use the '*' wildcard already used by base-service.ts for
  the same bucket-level action.
  ```

**Commit D — non-blocking (app-mesh):**
- Files: `src/aws/compute/ecs/proxy-configuration/app-mesh-proxy-configuration.ts`, `test/aws/compute/ecs/app-mesh-proxy-configuration.test.ts`
- Message:
  ```
  fix(ecs): accept UID/GID value 0 in AppMeshProxyConfiguration validation

  Use explicit undefined checks so a valid root UID/GID of 0 is not treated as absent.
  ```

---

## Rebuttal section (for PR review reply)

No in-scope finding was inaccurate — all four were independently verified as genuine defects, so there is nothing to rebut. Suggested reply:

> Findings 2, 3, 7, and the app-mesh UID/GID-0 observation are all confirmed accurate and have been fixed:
> - **2:** `addAsgCapacityProvider` now propagates the ASG security groups to `cluster.connections` (mirroring the deprecated `addAutoScalingGroup`), with a bridge-mode regression test. The redundant manual propagation in the test helper was removed so no duplicate SG rules are emitted.
> - **3:** `addPlacementConstraints` now initializes once and appends, matching `addPlacementStrategies`; covered by a two-call test.
> - **7:** `s3:GetBucketLocation` is now scoped to `*` (consistent with `base-service.ts`), since a bucket-level action cannot be usefully scoped to a tokenized object ARN; covered by a tokenized-ARN test.
> - **App-mesh:** validation now uses explicit `undefined` checks so `ignoredUID/ignoredGID = 0` is accepted.
>
> Each divergence from upstream v2.233.0 is documented inline as a `TERRACONSTRUCTS DEVIATION`.

---

## Bottom line
Fixes are correct and well-tested; the round is one small test-helper edit short of green. Because the jest gate is currently red (real duplicate-resource regression, not snapshot noise), **pass = false**. Applying the util.ts cleanup in Commit A turns the gate green — verified during this audit.
