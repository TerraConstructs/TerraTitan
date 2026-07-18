# Run 2 — aws-autoscaling v2.233.0 → compute/auto-scaling (wf_7769df33-e10)

First production conversion with the upgraded pipeline (run-1 fixes + Plan phase + independent
Verify + Integ phase). 45 agents (42 done, 3 streaming-error casualties absorbed by fix loops),
~4.39M subagent tokens, 2h25m. Branch `convert-aws-autoscaling` in `~/tcons/base-autoscaling`,
commit 7f3fea6: 33 files, +13,925 lines.

## Pipeline result

| Phase | Result |
|---|---|
| Plan (opus) | New subdir `src/aws/compute/auto-scaling/`, exported `export * as autoscaling` per repo precedent — collision-free vs application-autoscaling |
| Map | 6 Cfn resources mapped & opus-verified → `mappings/aws-autoscaling.json` |
| Convert (waves) | 13 lib files + aspects; provenance headers throughout |
| Compile | tsc + jsii clean |
| Test | 8 suites: 149 passed, 6 skipped, 9 snapshots (independently re-run: green, 6.9s) |
| Verify (opus ×3 rounds) | PASS, 0 unresolved violations (rounds 1–2 found and fixed violations) |
| Integ | `integ.custom-scaling` ported (app + Go validator + Makefile target); synth OK; `tofu validate`: **Success** (gate added post-launch, passed anyway) |
| Review (opus) | "Solid, high-fidelity port, close to PR-ready" |

Resilience note: 3 test-convert agents died on API stream timeouts (auto-scaling-group, scaling,
cfn-init — the three biggest). The test-fix loop recreated their outputs; final suite verified
green independently. Structural fix for run 3: check the convert-stage results and respawn rather
than relying on fix loops.

## Terraform-model deviations (implemented + documented inline)

- Warm pool → inline ASG `warm_pool` block via prepare-time `putWarmPool` (not a separate resource);
  documented regression: `addWarmPool()` on an *imported* ASG throws (upstream emits standalone CfnWarmPool).
- Notifications → standalone `aws_autoscaling_notification` resources.
- Launch-configuration path folded into launch template (LC is deprecated upstream anyway).
- Group metrics flattened to `enabled_metrics`; instance-maintenance-policy −1/−1 = clear → omit block.
- Dropped as CFN-only (annotated): Signals, UpdatePolicy/RollingUpdate, ScalingProcess,
  applyCloudFormationInit + related props. cfn-init suite: 2/11 cases portable.

## Human sign-offs needed before PR

1. **Naming semantics (headline):** `autoScalingGroupName` maps to `name_prefix` — user-supplied
   name gets a random suffix (create-before-destroy safe, invariant-compliant, tested) but changes
   the CFN exact-name meaning and is inconsistent with SecurityGroup (exact name). Decision needed:
   per-resource naming-strategy table.
2. Two deprecated members re-added that are absent from the pinned v2.233 tag
   (`notificationsTopic`, `targetRequestsPerSecond`) — tag-faithfulness deviation.
3. `LaunchTemplateOverrides.instanceRequirements` leaks a provider-generated type onto the JSII
   public surface — accept or hand-mirror, needs a uniform repo ruling.
4. `detailedMonitoring` coerces unset tri-state to explicit false (upstream leaves undefined).
5. Dead `warn()` in require-imdsv2-aspect (caller elided); minor edge on manually-attached aspect.

## Pipeline improvements for run 3 (from opus review)

- Verify must flag public-surface ADDITIONS vs upstream .d.ts, not just omissions.
- Converters must state name vs name_prefix choice per resource with sibling justification.
- Lint for dead members left by branch elision.
- Plan/mapping must rule uniformly on provider-generated types in public API.
- Checklist: unset upstream tri-state props must stay omitted, not coerce to defaults.
- Verify commented-out test blocks: confirm no still-portable assertions discarded with
  non-portable ones (cfn-init 9/11 commented).
- (Mine) Check convert-stage results; respawn stream-error casualties instead of leaning on fix loops.
- (Mine) tofu validate gate now structural in convert-module.js Integ loop.

## Live validation

`make autoscaling.custom-scaling` full cycle (synth → apply → Go SDK validation → destroy) run
post-workflow under `aws-vault exec --no-session tcons-vincent`: see addendum below when recorded.
App deploys: 1× t2.micro ASG (min=max=1) + VPC/subnet/IGW + 1 scaling policy + 4 schedules —
`name_prefix` confirmed in synthesized JSON.
