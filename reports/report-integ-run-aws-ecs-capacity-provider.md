# Integ run report — aws-ecs: `ecs.asg-capacity-provider`

Run date: 2026-07-24. Single-app run porting the ECS **ASG (EC2) capacity-provider** path
(`AsgCapacityProvider` + `cluster.addAsgCapacityProvider()` + an `Ec2Service` on a
`capacityProviderStrategies` strategy). This is the **first live exercise** of the EC2
launch path in base-ecs — every prior ECS integ app is Fargate.

Source-of-truth artifacts:
- Deploy log: `/tmp/deploy-ecs-asg-capacity-provider-1.log` (3373 lines)
- Test: `/Users/vincentsmet/tcons/base-ecs/integ/aws/compute/ecs_capacity_provider_test.go`
- App: `tf/ecs.asg-capacity-provider` (synthesized under base-ecs integ)
- Finding target brief: `/Users/vincentsmet/tcons/conversion-run/findings-capacity-provider-target.md`

---

## Headline outcome

`apply` **succeeded** (40 resources added, 0 changed, 0 destroyed at 22:44:22). Of the six
live assertions the Go validator makes, **four passed and two failed**, so the test is a
**FAIL**. Crucially, the two failures do **NOT** implicate the two src fixes this run was
commissioned to deploy-confirm (findings 1 & 2 — both **confirmed working live**). One
failure is a genuinely new src defect (a missing ASG tag causing perpetual `plan` drift);
the other is an over-strict test oracle, not a construct regression.

---

## Per-test / per-app outcome

| App | Result | Attempts | srcFindings (recorded) | srcFindings (log analysis) | Residue |
|---|---|---|---|---|---|
| `ecs.asg-capacity-provider` | **FAIL** (2 of 6 asserts failed; `apply` OK) | 1 | `[]` | **2** — 1 real src defect + 1 test-oracle defect (see below) | **Not confirmed clean** — `tofu destroy` still in-flight at report time |

> Discrepancy noted honestly: the automated deploy result carried `srcFindings: []` and
> `residueClean: false`. Log analysis surfaces two findings the automated summary did not
> record, and confirms residue is *in-flight*, not *clean*.

### Assertion-by-assertion (the six live checks)

| # | Finding under test | Assert | Live result |
|---|---|---|---|
| 1 | CP `AutoScalingGroupArn` is a real ARN == ASG's own ARN; CP status `ACTIVE` | `ecs_capacity_provider_test.go:88-93` | **PASS** |
| 1' | **No perpetual drift** after apply (`tofu plan -detailed-exitcode` == 0) | `:101` | **FAIL** — exit code **2** (`Plan: 0 to add, 2 to change, 0 to destroy`) |
| 3 | Single merged `aws_ecs_cluster_capacity_providers`; cluster CP list == `[cp]` | `:110-114` | **PASS** |
| — | Service reaches steady state (ASG instance launches, task registers) | `waitForEcsServiceStable`, 20m | **PASS** (did not abort) |
| 2 | ASG SG propagated → container-instance SG has ALB-SG ingress on :8080 | `:172-174` | **PASS** |
| 4 | Task `LaunchType` blank when placed via capacity provider | `:187` | **FAIL** — actual `"EC2"` |
| 4' | Task `CapacityProviderName` == `cp` (placed via the CP, not bare launchType) | `:189-190` | **PASS** |

---

## Src defects found by live deploy

### DEFECT 1 (real, NEW) — ASG missing the `AmazonECSManaged` tag → perpetual `plan` drift

`src/aws/compute/ecs/cluster.ts:714-743` (`addAsgCapacityProvider`) / the
`AsgCapacityProvider` construct.

The post-apply replan is **not clean** (exit 2). The root cause is a single missing tag:

```
# aws_autoscaling_group.ASG_A3DA5BD5 will be updated in-place
  ~ resource "aws_autoscaling_group" "ASG_A3DA5BD5" {
      - tag {
          - key                 = "AmazonECSManaged" -> null
          - propagate_at_launch = true -> null
        }
    }
```

When an ASG is registered to a managed-scaling capacity provider, **ECS itself stamps the
`AmazonECSManaged` tag onto the ASG** at runtime. aws-cdk's `AsgCapacityProvider`
(v2.233.0) declares this tag on the ASG so config matches reality; base-ecs `cluster.ts`
does **not** (`grep -n AmazonECSManaged src/aws/compute/ecs/` returns nothing). Result:
every subsequent `tofu plan` wants to remove the AWS-applied tag → forever-dirty state.

The **second** changed resource in the plan —
`aws_iam_role_policy.ASG_DrainECSHook_Function_ServiceRole_DefaultPolicy_...` showing
`policy = jsonencode(...) -> (known after apply)` — is **cascading, not independent**: the
drain-hook policy document (`data.aws_iam_policy_document...DefaultPolicy_5FC82C99`) is
marked "will be read during apply … (depends on a resource or a module with changes
pending)" because it interpolates the ASG ARN and the ASG has a pending in-place change.
Fixing DEFECT 1 (so the ASG has no pending change) removes both diffs and makes the replan
clean. **One root cause, two plan entries.**

Fix direction: apply the `AmazonECSManaged` tag (with `propagate_at_launch = true`, i.e.
`applyToLaunchedInstances`) to the ASG inside `addAsgCapacityProvider` /
`AsgCapacityProvider`, matching upstream.

### DEFECT 2 (test-oracle, NOT src) — over-strict `LaunchType == ""` assertion

`integ/aws/compute/ecs_capacity_provider_test.go:187`.

The construct is **correct**: the emitted `aws_ecs_service` carries
`capacity_provider_strategy { capacity_provider = "cp-…", weight = 1 }` and leaves
`launch_type = (known after apply)` — i.e. `base-service.ts:824-829` **did** blank
`launchType` when `capacityProviderStrategies` is set (verified in the apply plan). But at
runtime ECS reports a task placed on an **EC2** capacity provider with
`LaunchType = "EC2"` *and* `CapacityProviderName = cp` simultaneously — and indeed the very
next assertion (`:189-190`, `CapacityProviderName == cp`) **passed**. So the task *was*
placed via the capacity provider; the `LaunchType == ""` expectation is wrong for EC2
capacity providers. This is a test-expectation bug, not a construct regression, and should
be relaxed (accept `"EC2"` when `CapacityProviderName` is set).

---

## Mapping to the finding target (`findings-capacity-provider-target.md`)

| Finding | Commit / src loc | Live verdict |
|---|---|---|
| **1** — CP `auto_scaling_group_arn` = real ARN (not name); no CP drift | e299f28, `cluster.ts ~2119-2131` | **CONFIRMED FIXED.** CP created, `ACTIVE`, `AutoScalingGroupArn` == ASG's real ARN, and the **CP resource itself shows ZERO drift** on replan. The name-vs-ARN perpetual-drift/replace symptom did **not** recur. (The exit-2 drift is entirely the ASG tag + its cascade — see DEFECT 1 — not the capacity provider.) |
| **2** — `addAsgCapacityProvider` propagates ASG SGs to `cluster.connections` | 95bd36d, `cluster.ts:733-740` | **CONFIRMED FIXED.** Container-instance SG has an ingress rule referencing the ALB SG covering :8080 (`foundAlbIngress` passed). Rules `sgr-0a48be76…` (ingress) / `sgr-028f31de…` (egress) created and stable. |
| **3** — single merged `aws_ecs_cluster_capacity_providers` per cluster | `cluster.ts ~1098-1114 toTerraform()` | **CONFIRMED.** Exactly one CP association on the cluster; `cluster.CapacityProviders == [cp]`. The `tryFindChild` merge singleton deployed and read back correctly. |
| **4** — `launchType` blanked when `capacityProviderStrategies` set | `base-service.ts:824-829` | **CONFIRMED at synth** (config emits `capacity_provider_strategy`, no `launch_type`). The live `LaunchType == ""` assert failed, but that is DEFECT 2 (test oracle), not a src regression. |

**Net:** all three commissioned code paths (findings 1, 2, 3) are **confirmed working live
for the first time**. Finding 4's src behavior is confirmed at synth. The run's *value* is
fully realized on the intended targets; the FAIL is a newly-exposed latent defect (missing
ASG tag) plus one bad test assertion.

---

## Verify agent output (verbatim)

Verify verdict: **pass = true**, violations: **none**.

Advisories (verbatim):
1. *Fidelity deviation (documented): the app sets `enableManagedTerminationProtection:false`
   on AsgCapacityProvider. Upstream integ.capacity-provider.ts uses the default (true). The
   comment justifies it (otherwise `terraform destroy` hangs on the protected ASG), which is
   a legitimate integ-cleanup accommodation, but it means the managed-termination-protection
   wiring is NOT exercised live by this test.*
2. *Scope augmentation (documented): the port adds an internet-facing ALB target + fixed
   hostPort 8080 bridge mapping that do NOT exist in the upstream capacity-provider fixture
   (borrowed from ec2/integ.lb-bridge-nw.ts). This is justified — it is the only way
   finding-2 (ASG SG -> cluster.connections -> ALB ingress propagation) becomes observable
   from the AWS SDK — but it makes the fixture a hybrid of two upstream tests rather than a
   pure 1:1 port. Intent is faithfully preserved.*
3. *Finding-2 robustness: the validator keys off
   `instOut.Reservations[0].Instances[0].SecurityGroups[0].GroupId` (the FIRST SG on the
   container instance). Correct for an ASG instance that carries a single SG (the case here),
   but it would need to iterate all instance SGs if the fixture ever attached more than one.*
4. *src/ construct fixes that findings 1-2 depend on (commit e299f28 'pass ASG ARN not name',
   95bd36d 'propagate ASG security groups to cluster.connections') are already committed on
   the branch and are jest-covered (test/aws/compute/ecs/cluster.test.ts,
   ec2/ec2-service.test.ts). This run introduced NO new or weakened src/ tests — nothing to
   flag under point 4, but the live deploy is the first end-to-end exercise of those two
   fixes.*

> Note on the audit's residue suspicion ("DEPLOY NOT COMPLETE — claimed PASS is
> UNVERIFIABLE… ends mid-apply at `aws_lb.LB… Still creating [1m10s]`"): that snapshot was
> taken during `apply`. The deploy has since progressed **well past** apply — it completed
> `Apply complete! Resources: 40 added` (22:44:22), ran the validator (which is where the two
> failures occurred), and is now in `cleanup_terraform`/`tofu destroy`. So the earlier
> "unverifiable PASS" is resolved: the run is **verifiably a FAIL** (drift exit 2 + LaunchType),
> not a pass. The audit was right to distrust the interim PASS; the resolved verdict is FAIL.

---

## Residue status

**Not yet clean at report time.** `tofu destroy` (pid 54039, under `go test` pid 52108) is
actively running; `aws_ecs_service.EC2Service_…` was "Still destroying… 4m50s elapsed" at
the last log line (EC2 capacity-provider services drain slowly). No destroy error observed;
destruction is progressing normally and expected to complete. Because `apply` fully
succeeded and the test entered its normal cleanup stage, there is no stuck/partial state —
just a long-running-but-healthy teardown. A follow-up `make ecs.asg-capacity-provider-cleanup-only`
(or confirming `Destroy complete!` in the log) should be used to certify zero residue before
closing the run.

---

## Coverage: gaps closed vs remaining

Upstream inventory (aws-cdk v2.233.0, `packages/@aws-cdk-testing/framework-integ/test/aws-ecs/test`):
13 top-level `integ.*.ts` (cluster-*, managedinstances-*, task-definition-*) plus subdirs
`ec2/` (28), `fargate/` (21), `base/` (4), `external/` (1), `log-drivers/` (1).

Pre-existing base-ecs coverage (all **Fargate**):
- `ecs.awslogs-driver` — Fargate awslogs driver (`g12345678-1234`)
- `ecs.lb-awsvpc-nw` — Fargate + ALB, awsvpc mode (`g22222222-2222`)
- `ecs.sd-awsvpc-nw` — Fargate service discovery, awsvpc mode

**Closed by this run:**
- `ec2/integ.capacity-provider.ts` — the ASG (EC2) capacity-provider path. First live
  coverage of: the EC2 launch type, an ECS-registered ASG + launch template, the instance
  drain-hook Lambda/SNS/lifecycle-hook stack, `AsgCapacityProvider`, the merged
  `aws_ecs_cluster_capacity_providers` singleton, bridge network mode, and
  `capacityProviderStrategies` task placement.
- Partial fold-in of `ec2/integ.lb-bridge-nw.ts` (bridge-mode ALB target on hostPort 8080),
  used to make the finding-2 SG propagation observable.

**Remaining (not covered):**
- The other ~12 top-level integ files (cluster-*, task-definition-*).
- `managedinstances-*` / `addManagedInstancesCapacityProvider` — untested live (the
  `ManagedInstancesCapacityProvider` branch in `cluster.ts:750-766` has no integ app).
- Bulk of `ec2/` (27 of 28 remaining) and `fargate/` (18 of 21 remaining).
- `base/` (4), `external/` (1, the ECS Anywhere/EXTERNAL launch type), and all
  `log-drivers/` beyond awslogs.
- Managed **termination protection** and managed **draining** wiring — explicitly disabled
  in this fixture (verify advisory 1), so still unexercised live.

---

## Pipeline lessons for the next run

1. **Trust the log, not the interim PASS.** This run's claimed pass was captured mid-`apply`;
   the real verdict (FAIL on drift + LaunchType) only appears after the validator runs. The
   orchestrator should not emit a PASS/FAIL until it sees the terminal `--- PASS/FAIL` line
   or `ok/FAIL` package line, and should record `residueClean` only after `Destroy complete!`.
   Here `residueClean:false` was correct but for the wrong reason (destroy simply hadn't
   finished, not a leak).

2. **`-detailed-exitcode` drift proofs catch *unrelated* latent defects.** The no-drift
   assertion was written to guard finding-1, but the finding-1 resource was clean — the
   assertion instead exposed a totally separate missing-tag defect. Good: it means the
   drift oracle is valuable beyond its stated target. But the failing-assertion *message*
   ("expected no drift after apply") mis-attributes the cause; a drift failure should dump
   the `plan` resource addresses so triage doesn't have to reread the raw log.

3. **Distinguish src regressions from test-oracle bugs before flagging.** The `LaunchType`
   failure looks like a finding-4 regression but is actually a wrong expectation — ECS
   reports `LaunchType="EC2"` for EC2-capacity-provider tasks. The deploy agent recorded
   `srcFindings:[]`, which under-counts (missed the ASG-tag src defect) while a naive reading
   would over-count (blaming finding 4). Both errors are avoided only by reading the emitted
   Terraform + the adjacent passing assertion, not the failing one in isolation.

4. **EC2/ASG teardown is slow — budget for it.** The ECS service alone took >5 min to
   destroy. Fargate apps in this suite teardown far faster; EC2 capacity-provider apps need a
   longer cleanup timeout and shouldn't be flagged as "hung."

5. **Hybrid fixtures are acceptable but label them.** Borrowing the bridge-mode ALB target
   from a second upstream test was the only way to make finding-2 observable via the SDK
   (verify advisory 2). Keep doing this when a pure 1:1 port can't expose the behavior under
   test — but keep the deviation comments in the app so the next porter knows it's a hybrid.

## Addendum — attempt 2 (2026-07-24): full PASS

Fixes 7aea16b (declare AmazonECSManaged tag on managed-scaling capacity-provider ASGs;
DEFECT 1) and cd41ff3 (LaunchType oracle relaxed; DEFECT 2) applied. Redeploy result:
--- PASS (828s), all six live assertions green including tofu plan -detailed-exitcode == 0
(no drift), Destroy complete 40/40, zero residue. Findings 1+2 deploy-confirmed; the
AmazonECSManaged defect is the FIFTH construct defect found only by live deploys on PR #123.
Correction to the report body above: upstream aws-cdk does NOT declare the tag (grep is
empty) — CFN simply ignores runtime-added tags, so upstream never hits the drift; the
Terraform-ownership model is what makes declaration necessary here.
