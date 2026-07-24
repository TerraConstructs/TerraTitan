# Run 6 — aws-ecs → compute/ecs (wf_4eacc455-dac)

71 agents, 8.5M subagent tokens, 3.6h wall (includes one accidental mid-Convert pause/resume that
re-ran ~10 batches — see pipeline issues). Gates: compile CLEAN, tests PASS, verify PASS
(0 violations, 4 advisories), integ synth+`tofu validate` OK. Branch `convert-aws-ecs` in
~/tcons/base-ecs, staged, NOT yet committed.

> Provenance note: the opus Review agent's StructuredOutput failed schema validation (it serialized
> apiGaps inside the verdict string), retried twice, then submitted placeholder junk. This report is
> reconstructed from its real (pre-capitulation) payload in the run transcript — content below is the
> agent's, recovered verbatim where possible.

## Review verdict (opus)

HIGH-QUALITY faithful conversion; PR-ready after 3 cleanups. All 233 non-Cfn upstream public
symbols present; barrel mirrors upstream; compute/index.ts wired with `export * as ecs`. Hard
invariants correct. **Human review first:**

1. `base/base-service.ts` — LB/CloudMap/volume attach via idempotent put in `toTerraform()`,
   2370 LOC, unit+snapshot only, never deployed.
2. `cluster.ts` — capacity-provider merge via `toTerraform()` + `tryFindChild`, unit only.
3. Shared `test/assertions.ts` extension (see advisories — should land as separate commit).
4. Strip committed `tcons-staging/` artifacts (4 files; synth by-product, needs .projenrc gitignore).

## API gaps (all documented deviations, no type-surface gaps)

- All 233 non-Cfn upstream exported classes/interfaces/enums present; 25 port-only Config/Property
  interfaces replace CfnTaskDefinition property JSON-blob shapes.
- `ContainerImage.fromTarball` dropped: TarballImageAsset not ported; DEVIATION + TODO in
  container-image.ts.
- ASG `updatePolicy`/`updateType` dropped from `cluster.addCapacity`: no aws_autoscaling_group
  equivalent; 6 tests skipped with reason.
- ContextProvider AMI lookup not implemented: TODO at amis.ts:544; non-lookup path used.
- `images/repository.ts` ecrImageRequiresPolicy warning not emitted: TODO, addWarningV2 not ported.
- TagParameterContainerImage faithfully re-implemented on cdktn TerraformVariable (not stubbed).

## Invariant findings (all PASS)

- Public readonly `resource` on all L1-backed constructs (Cluster, AsgCapacityProvider,
  TaskDefinition, BaseService).
- outputs getter: bare keys (`arn`/`name`, `arn`/`family`); ImportedTaskDefinition omits
  unavailable `family`; no ""/null sentinels. (First run under the new outputs policy — held.)
- Naming: props name or family fallback to `stack.uniqueResourceName(this)`.
- container_definitions: single JSON string via `Lazy.stringValue` → `stack.toJsonString(renderContainers())`
  (task-definition.ts:703); snapshot confirms camelCase ECS-API keys (not snake_cased).
- cdktn-only imports; zero aws-cdk-lib, zero cdktf.
- Cluster capacity-provider singleton: merged `aws_ecs_cluster_capacity_providers` via
  toTerraform + tryFindChild (mirrors iam/policy.ts).
- BaseService imperative config via idempotent puts in toTerraform (base-service.ts:1100).
- Snapshots: HttpBackend localhost:3000 on every snapshotted stack (new rule — held).
- Provenance headers on every converted file.
- UPSTREAM-BUG PARITY: enableDeploymentAlarms `alarmNames.concat` no-op (base-service.ts:1256)
  faithfully mirrors upstream; not a conversion defect.

## Verify advisories (4, non-blocking)

1. cluster.test.ts: 3 upstream `testDeprecated` EcsOptimizedAmi tests dropped though the deprecated
   class IS ported — consider porting them.
2. cluster.test.ts: two Managed-Instances capacity-provider cases dropped/deduped — verify
   intentional.
3. amis.ts: EcsOptimizedAmi class+props absent from target v2.233.0 .d.ts but present in .js —
   deprecated-surface sign-off needed.
4. test/assertions.ts additively changed (Template.dataSourceObjects(), Annotations.infos/hasInfo,
   private rename warningMatcher→annotationMatcher) — shared-harness change, land as separate
   reviewable commit.

## Test coverage

27 test files, 25 snapshot suites, names verbatim. 6 test.skip (cluster updatePolicy/updateType,
unportable) have reasons but empty bodies (minor — it.todo or commented assertion preferred).
Integ: Fargate awslogs-driver end-to-end (go validator asserts cpu 512/memory 1024, nginx
name+image, awslogs options, FARGATE launch type, desiredCount 1, real log-event flow).
COVERAGE GAP: only Fargate/awslogs deployed; EC2 cluster, ASG capacity providers, drain-hook,
LB attach, EFS, secrets, ECR-asset are unit-only.

## Pipeline issues (for next script revision)

1. **Review StructuredOutput capitulation (NEW, this run):** after 2 schema failures the opus agent
   returned placeholder junk that *passed* validation. Fix: Review must write the report FILE first
   (source of truth) and return only a short pointer/summary in StructuredOutput; add "if schema
   fails twice, put content in the report and return minimal fields" to the prompt. Consider a
   plausibility check in the script (reject single-letter array members).
2. tcons-staging/ synth artifacts staged: add to gitignore via .projenrc.ts; strip from PR.
3. test.skip empty bodies: use it.todo or keep commented original assertion.
4. Add EC2/capacity-provider integ to exercise drain-hook FunctionHook adapter and
   cluster_capacity_providers merge (deploy-validation gap).
5. Shared test/assertions.ts changes should be a separate commit ahead of the module commit.
6. Pause/resume: prefix-based caching — never TaskStop with in-flight agents (this run re-ran ~10
   convert batches, ~150k output tokens wasted); pause only at journal started==results.

## Addendum — live integ-deploy campaign (2026-07-24, post-review)

Three upstream framework-integ ports, all PASS with clean destroys after fix rounds:
ecs.lb-awsvpc-nw (ALB attach + ScalableTaskCount + HTTP 200), ecs.ebs-taskattach
(ServiceManagedVolume EBS end-to-end), ecs.sd-awsvpc-nw (EC2 capacity + drain hook +
CloudMap DiscoverInstances). Four real construct defects found ONLY by live deploys
(all invisible to jest/snapshot/tofu validate):

1. a628c77 appscaling: policies/scheduled-actions must reference aws_appautoscaling_target
   ATTRIBUTE tokens (raw prop strings = no dependency edge = PutScalingPolicy race). Pre-existing.
2. fc85606 base-load-balancer: uniqueResourceName without maxLength:32 (self-rejecting names).
   Pre-existing.
3. b0ae9f7 ECS service must depends_on ServiceManagedVolume policy ATTACHMENT (destroy wedge:
   task DEPROVISIONING, service DRAINING >20min; remedy for wedged state: re-attach
   AmazonECSInfrastructureRolePolicyForVolumes, releases in ~1min).
4. 5364b0b desired_count sentinel: omitted + explicit scheduling_strategy => 0 tasks on EC2
   create (CFN defaults 1). Fix: desired_count ?? 1 + ignore_changes when unpinned.

Validator/harness lessons (codified in port-integ-tests.js playbook): custom steady-state
poll replaces broken SDK ServicesStableWaiter (nil failures[] crash, ecs v1.52.0);
suffix-match scope-prefixed physical names; unique gridUUID per app; TF_PLUGIN_CACHE_DIR
for registry timeouts; ECS service destroy legitimately takes up to ~16min (drain).

External review (sakul-learning, 7 blocking findings, findings-pr123-review.md): finding 5
partially addressed by defect-3 fix + deploy coverage; findings 1-4, 6, 7 + the {name}-only
volume validation remain for the fix round.
