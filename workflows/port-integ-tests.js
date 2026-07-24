// Reusable follow-up workflow: port upstream aws-cdk framework-integ tests for an
// ALREADY-CONVERTED module and validate them all the way to live AWS deploy -> destroy.
//
// Run AFTER convert-module.js has landed a module (compile/test/verify green). This
// workflow closes the deploy-validation gap: unit/snapshot/tofu-validate cannot catch
// AWS-API-semantic defects (name-vs-ARN mixups, sentinel defaults, missing dependency
// edges, empty provider blocks) — only a real apply can. Both appscaling bugs and the
// ELBv2 name-length bug were found exactly this way (see reports/report-run6-aws-ecs.md).
//
// Invoke with args (all paths absolute):
// {
//   module: "aws-ecs",                       // upstream aws-cdk-lib module name
//   namespace: "compute",                     // base namespace (integ/aws/<namespace>)
//   tag: "v2.233.0",                          // upstream tag (provenance headers)
//   worktree: "/path/to/base-worktree",       // converted module present, lib/ COMPILED
//   upstreamInteg: "/path/@aws-cdk-testing/framework-integ/test/<module>/test",
//   runDir: "/path/conversion-run",           // conventions.md lives here; report written here
//   exemplarApp: "integ/aws/compute/apps/ecs.awslogs-driver.ts",   // relative to worktree
//   exemplarGoTest: "integ/aws/compute/ecs_test.go",               // relative to worktree
//   awsProfile: "tcons-vincent",              // aws-vault profile (exec --no-session)
//   region: "us-east-1",
//   pluginCacheDir: "",                       // optional TF_PLUGIN_CACHE_DIR (an existing
//                                             // tf/<app>/.terraform/providers dir) — registry
//                                             // downloads time out regularly without it
//   findingsFile: "",                         // optional: review findings / coverage-gap notes
//                                             // that steer WHICH code paths to target
//   maxTests: 3,                              // upstream integ tests to port this run
//   maxAttemptsPerTest: 3,                    // live deploy attempts per test
//   deploy: true                              // false = stop after synth gate (no AWS access)
// }
//
// Model policy: every agent() call PINS sonnet or opus. Never inherit the session model.

export const meta = {
  name: 'port-integ-tests',
  description: 'Port upstream framework-integ tests for a converted module and validate live: synth -> deploy -> validate -> destroy',
  phases: [
    { title: 'Plan', detail: 'coverage-gap analysis, select cheapest upstream integ tests', model: 'opus' },
    { title: 'Port', detail: 'one sonnet agent per test: app + own Go test file', model: 'sonnet' },
    { title: 'Wire', detail: 'single writer: Makefile targets + vet/fmt', model: 'sonnet' },
    { title: 'Gate', detail: 'per-test make <target>-synth-only', model: 'sonnet' },
    { title: 'Deploy', detail: 'SEQUENTIAL live deploy->validate->destroy loop with fix rounds', model: 'sonnet' },
    { title: 'Verify', detail: 'independent audit: logs, residue, conventions', model: 'opus' },
    { title: 'Report', detail: 'report file first, minimal structured return', model: 'opus' },
  ],
}

const A = typeof args === 'string' ? JSON.parse(args) : (args || {})
for (const k of ['module', 'namespace', 'tag', 'worktree', 'upstreamInteg', 'runDir', 'exemplarApp', 'exemplarGoTest', 'awsProfile', 'region']) {
  if (!A[k]) throw new Error('missing arg: ' + k)
}
const WT = A.worktree, RUN = A.runDir, MOD = A.module, NS = A.namespace, TAG = A.tag
const INTEG = `${WT}/integ/aws/${NS}`
const MISE = 'MISE_DISABLE_TOOLS=aws-vault mise exec --'
const VAULT = `aws-vault exec --no-session ${A.awsProfile} --`
const CACHE = A.pluginCacheDir ? `TF_PLUGIN_CACHE_DIR=${A.pluginCacheDir}` : ''
const MAX_TESTS = A.maxTests ?? 3
const MAX_ATTEMPTS = A.maxAttemptsPerTest ?? 3

// Hard-won live-deploy playbook — injected into Port and Deploy prompts.
const PLAYBOOK = `
LIVE-DEPLOY PLAYBOOK (every rule below was paid for with a real failed deploy):
- App scaffold: copy the exemplar's shape exactly — first-line provenance header
  (upstream URL at ${TAG}), env-var scaffold (ENVIRONMENT_NAME/AWS_REGION/OUT_DIR/STACK_NAME),
  App + AwsStack + LocalBackend(\${stackName}.tfstate). Give EVERY app a UNIQUE gridUUID
  (same-UUID stacks collide on uniqueResourceName-derived physical names, e.g. task families).
- Networking cost floor: Fargate tests -> public subnets only, natGateways:0,
  assignPublicIp:true (image pull). EC2/awsvpc tests CANNOT be NAT-free (task ENIs have no
  public IP): natGateways:1 + private-with-egress subnets.
- Outputs: newly-converted constructs use BARE outputs keys (arn/name/id) via
  registerOutputs+outputName; LEGACY constructs may use prefixed keys — read the actual
  \`get outputs()\` before writing Go. Fall back to explicit TerraformOutput when a value
  isn't in outputs. NEVER assert exact physical names in Go — constructs scope-prefix
  physical names (e.g. policy 'ReasonableCpu' deploys as 'test-ReasonableCpu'):
  match by suffix/contains, or read names from terraform outputs.
- Name limits: gridUUID-prefixed auto-names can exceed AWS limits (ALB=32). If synth fails
  on a length validation, the CONSTRUCT should cap it via uniqueResourceName maxLength —
  that is a src bug to report (and fix if in scope), not an app workaround.
- Go: write your OWN <module>_<name>_test.go — never edit shared Go files, go.mod, go.sum.
  Use only deps already in go.mod; report gaps instead of adding.
- ECS-specific: do NOT use the SDK's NewServicesStableWaiter — aws-sdk-go-v2 ecs v1.52.0
  crashes with "waiter comparator expected list got <nil>" when the response omits
  \`failures\` (the NORMAL healthy shape). Use/extend the repo's custom steady-state poll
  (waitForEcsServiceStable in ecs_test.go): DescribeServices until one deployment and
  runningCount==desiredCount. Same pattern for any waiter with jmespath-era codegen.
- Transient failures during deploy (retry the SAME target, do not change code):
  * 401 AuthFailure right at plan time — credentials hiccup; verify with
    \`${VAULT} aws sts get-caller-identity\` then relaunch.
  * "Failed to install provider" / registry timeout — relaunch with
    TF_PLUGIN_CACHE_DIR pointed at an existing tf/<other-app>/.terraform/providers dir.
- Long-running commands: a make deploy cycle runs 10-45 min (ECS service drain alone can
  take 16 min). Run it detached: \`nohup zsh -c '...' > <log> 2>&1 &\` then poll the log in
  BOUNDED wait-loops (\`for i in {1..100}; do grep -qE 'PASS|FAIL' <log> && break; sleep 5; done\`)
  — never one blocking foreground call.
- NEVER run two make targets concurrently in the same integ dir.
- After every attempt (pass or fail) verify CLEANUP: the log must show "Destroy complete!"
  with the same resource count as "Apply complete!". If cleanup failed or the run was
  interrupted, run \`make <target>-cleanup-only\` and confirm; report residue loudly.`

// ---------- Plan ----------
phase('Plan')
const PLAN_SCHEMA = {
  type: 'object',
  properties: {
    selected: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          upstream: { type: 'string' },
          appName: { type: 'string' },
          goTestFunc: { type: 'string' },
          goFile: { type: 'string' },
          gridUUID: { type: 'string' },
          targetsPaths: { type: 'array', items: { type: 'string' } },
          validationSpec: { type: 'string' },
          costNotes: { type: 'string' },
        },
        required: ['upstream', 'appName', 'goTestFunc', 'goFile', 'gridUUID', 'targetsPaths', 'validationSpec', 'costNotes'],
      },
    },
    coverageNotes: { type: 'string' },
  },
  required: ['selected', 'coverageNotes'],
}
const plan = await agent(`Select up to ${MAX_TESTS} upstream integ tests to port for deploy-validating the converted ${MOD} module in ${WT}.
1. Inventory ${A.upstreamInteg} (every integ.*.ts) and the EXISTING integ apps in ${INTEG}/apps/ + their Go tests — do not duplicate covered paths.
2. Coverage-gap analysis: read the converted module's src (esp. prepare-time toTerraform()/imperative-accumulation code paths) and rank which supported configurations have never been APPLIED against AWS.${A.findingsFile ? `\n3. PRIORITIZE paths implicated by the findings file ${A.findingsFile} (external review; claims may be inaccurate — a live deploy is exactly how to confirm or refute them). Note per selection which findings it would confirm/refute.` : ''}
4. Prefer the CHEAPEST upstream test that exercises each gap (fewest instances/NAT gateways, smallest instance types). Read the top candidates before choosing.
5. For each selection produce: appName ("<short>.<kebab>" matching the exemplar naming, e.g. "ecs.lb-awsvpc-nw"), goTestFunc (TestXxx), goFile (own file, never shared), UNIQUE gridUUID (gNNNNNNNN-NNNN, distinct per app AND distinct from existing apps' — grep them), targetsPaths (src files it deploy-validates), validationSpec (what the Go validator must assert, including which AWS SDK read-APIs to use — only deps already in ${WT}/go.mod), costNotes (NAT? EC2? expected deploy minutes).
${PLAYBOOK}
Return selected[] and coverageNotes.`,
  { label: 'plan:coverage-gaps', phase: 'Plan', model: 'opus', schema: PLAN_SCHEMA })
if (!plan || !plan.selected.length) return { failed: 'plan', coverageNotes: plan?.coverageNotes }
log(`Plan: ${plan.selected.map(s => s.appName).join(', ')}`)

// ---------- Port (parallel, isolated files) ----------
phase('Port')
const PORT_SCHEMA = {
  type: 'object',
  properties: {
    written: { type: 'array', items: { type: 'string' } },
    makefileSnippet: { type: 'string' },
    notes: { type: 'string' },
  },
  required: ['written', 'makefileSnippet', 'notes'],
}
const ports = await parallel(plan.selected.map(sel => () =>
  agent(`Port ONE upstream integ test to the TerraConstructs harness in ${WT}. Do NOT commit.
UPSTREAM: ${sel.upstream} (read it fully; port faithfully, deviations only for cost/networking per playbook).
PURPOSE: deploy-validate ${sel.targetsPaths.join(', ')}.
EXEMPLARS (read first): ${WT}/${A.exemplarApp} and ${WT}/${A.exemplarGoTest}. Conventions: ${RUN}/conventions-core.md.
WRITE EXACTLY TWO FILES: ${INTEG}/apps/${sel.appName}.ts (gridUUID "${sel.gridUUID}") and ${INTEG}/${sel.goFile}.
Go validation spec: ${sel.validationSpec}
Verify EVERY API you use against the real construct sources before writing (props, enums, outputs keys). Do NOT touch Makefile, shared Go files, go.mod, go.sum, src/, test/.
${PLAYBOOK}
GATE before returning: cd ${WT} && ${MISE} go vet ./integ/aws/${NS}/ passes.
Return written[], a makefileSnippet (target + help text + .PHONY, matching the exemplar's Makefile style, test timeout >= 30m — you may READ ${INTEG}/Makefile), and notes (API gaps, dep gaps).`,
    { label: `port:${sel.appName}`, phase: 'Port', model: 'sonnet', schema: PORT_SCHEMA })
))
const okPorts = ports.map((p, i) => ({ p, sel: plan.selected[i] })).filter(x => x.p)
if (!okPorts.length) return { failed: 'port' }

// ---------- Wire (single writer for shared files) ----------
phase('Wire')
await agent(`Single-writer step in ${WT}: append these Makefile targets to ${INTEG}/Makefile (match existing style, keep alphabetical/grouped placement near other ${MOD} targets):
${okPorts.map(x => x.p.makefileSnippet).join('\n')}
Then run: cd ${WT} && ${MISE} go vet ./integ/aws/${NS}/ && ${MISE} gofmt -l integ/aws/${NS}/ (must be clean; fix formatting if not).
Return written[] and notes.`,
  { label: 'wire:makefile', phase: 'Wire', model: 'sonnet', effort: 'low', schema: PORT_SCHEMA })

// ---------- Gate (synth-only per test) ----------
phase('Gate')
const GATE_SCHEMA = {
  type: 'object',
  properties: { pass: { type: 'boolean' }, fixed: { type: 'array', items: { type: 'string' } }, notes: { type: 'string' } },
  required: ['pass', 'notes'],
}
const gates = await parallel(okPorts.map(x => () =>
  agent(`Synth gate for ${x.sel.appName} in ${WT}: cd ${INTEG} && ${MISE} make ${x.sel.appName}-synth-only must PASS.
If it fails: diagnose from the log. App-level mistakes -> fix the app (${INTEG}/apps/${x.sel.appName}.ts). Construct-level defects (e.g. auto-generated name exceeds an AWS length limit) -> fix the CONSTRUCT via the uniqueResourceName maxLength idiom (see src/aws/compute/lb-shared/base-load-balancer.ts + base-target-group.ts precedent), run the affected jest suites, and note it as a src finding. If src changed: cd ${WT} && ${MISE} pnpm compile (integ synths from lib/ — stale lib is a classic false negative). Re-run the gate until PASS or clearly blocked.
${PLAYBOOK}
Return pass, fixed[] (files you modified), notes.`,
    { label: `gate:${x.sel.appName}`, phase: 'Gate', model: 'sonnet', schema: GATE_SCHEMA })
))
const deployable = okPorts.filter((_, i) => gates[i]?.pass)
log(`Gate: ${deployable.length}/${okPorts.length} synth-clean`)
if (!A.deploy) {
  return { module: MOD, ported: okPorts.map(x => x.sel.appName), synthClean: deployable.map(x => x.sel.appName), deployed: [], note: 'deploy=false: stopped after synth gate' }
}

// ---------- Deploy (STRICTLY SEQUENTIAL) ----------
phase('Deploy')
const DEPLOY_SCHEMA = {
  type: 'object',
  properties: {
    pass: { type: 'boolean' },
    attempts: { type: 'number' },
    srcFindings: { type: 'array', items: { type: 'string' } },
    fixedFiles: { type: 'array', items: { type: 'string' } },
    residueClean: { type: 'boolean' },
    notes: { type: 'string' },
  },
  required: ['pass', 'attempts', 'srcFindings', 'residueClean', 'notes'],
}
const deployResults = []
for (const x of deployable) {
  const r = await agent(`Live AWS deploy->validate->destroy loop for ${x.sel.appName} (worktree ${WT}). You have AWS access via: ${VAULT} <cmd>. Region ${A.region}.
Command per attempt (detached + bounded log-polling per playbook):
  cd ${INTEG} && nohup zsh -c '${VAULT} env MISE_DISABLE_TOOLS=aws-vault ${CACHE} mise exec -- make ${x.sel.appName}' > /tmp/deploy-${x.sel.appName.replace(/[^a-zA-Z0-9]/g, '-')}-<attempt>.log 2>&1 &
Loop up to ${MAX_ATTEMPTS} attempts:
1. Launch, poll the log to a terminal state (--- PASS / --- FAIL / make error).
2. On FAIL, classify BEFORE touching anything:
   a. TRANSIENT (401 AuthFailure at plan, provider install timeout) -> per playbook, retry same code.
   b. VALIDATOR BUG (assertion wrong: exact-name match, wrong output key, SDK waiter crash) -> fix the Go/app file, go vet, retry. Never weaken an assertion into a tautology — match the deployed reality (e.g. suffix-match scope-prefixed names).
   c. SRC DEFECT (AWS API rejects the emitted config: sentinel defaults, name-vs-ARN, missing dependency edge, empty nested block) -> THIS IS THE PRIZE. Fix the construct in src/ following its sibling idioms, run the affected jest suites (update assertions only if the emitted-Terraform change is the CORRECT new behavior), ${MISE} pnpm compile, then retry. Record precisely in srcFindings (file:line, root cause, fix).
3. After EVERY attempt verify cleanup per playbook; if residue remains run make ${x.sel.appName}-cleanup-only and re-verify.
${PLAYBOOK}
Validation intent (must actually pass, not be skipped): ${x.sel.validationSpec}
Return pass, attempts, srcFindings[], fixedFiles[], residueClean, notes.`,
    { label: `deploy:${x.sel.appName}`, phase: 'Deploy', model: 'sonnet', schema: DEPLOY_SCHEMA })
  deployResults.push({ sel: x.sel, r })
  log(`Deploy ${x.sel.appName}: ${r ? (r.pass ? 'PASS' : 'FAIL') : 'agent-error'} (${r?.attempts ?? '?'} attempts, residueClean=${r?.residueClean})`)
}

// ---------- Verify (independent, opus) ----------
phase('Verify')
const VERIFY_SCHEMA = {
  type: 'object',
  properties: {
    pass: { type: 'boolean' },
    violations: { type: 'array', items: { type: 'string' } },
    advisories: { type: 'array', items: { type: 'string' } },
    residueSuspicions: { type: 'array', items: { type: 'string' } },
    notes: { type: 'string' },
  },
  required: ['pass', 'violations', 'advisories', 'residueSuspicions', 'notes'],
}
const verify = await agent(`INDEPENDENT audit of the integ-port run for ${MOD} in ${WT}. Do not trust agent notes — read files and logs.
1. Each new app (${deployable.map(x => `${INTEG}/apps/${x.sel.appName}.ts`).join(', ')}): provenance header first line at ${TAG}, unique gridUUID, exemplar scaffold, faithful port of the upstream test's intent.
2. Each Go validator: asserts the validationSpec meaningfully (no tautologies, no skipped-in-practice paths), only existing go.mod deps, no shared-file edits beyond the Makefile targets.
3. Deploy logs under /tmp/deploy-*.log: confirm each claimed PASS shows a real apply -> validate -> "Destroy complete!" cycle with matching resource counts; list residueSuspicions for anything unbalanced (also check git status of ${WT} for unexpected tracked artifacts like tcons-staging/).
4. Any src/ changes made during Gate/Deploy fix rounds: sibling-idiom compliant, jest-covered, and their assertions updated for the RIGHT reason (behavior corrected, not test weakened).
violations[] = must-fix breaches; advisories[] = human-judgment items. pass = zero violations.`,
  { label: 'verify:audit', phase: 'Verify', model: 'opus', schema: VERIFY_SCHEMA })

// ---------- Report (file FIRST, minimal structured return) ----------
phase('Report')
const REPORT_SCHEMA = {
  type: 'object',
  properties: { reportWritten: { type: 'boolean' }, reportPath: { type: 'string' }, headline: { type: 'string' } },
  required: ['reportWritten', 'reportPath', 'headline'],
}
const report = await agent(`Write the run report to ${RUN}/report-integ-${MOD}.md FIRST, then return ONLY {reportWritten, reportPath, headline} (one-sentence headline). The report file is the source of truth — do NOT attempt to pack findings into the structured return (a previous run's Review agent failed schema validation doing that and capitulated to placeholder junk).
Report contents: per-test outcome table (attempts, srcFindings, residue), the coverage gaps closed vs remaining (from plan: ${JSON.stringify(plan.coverageNotes).slice(0, 400)}), src defects found by live deploys with file:line${A.findingsFile ? `, and a section mapping outcomes to the external findings file ${A.findingsFile} (confirmed / refuted / untested per finding)` : ''}, verify violations/advisories verbatim, and pipeline lessons for the next run.
Inputs: deploy results ${JSON.stringify(deployResults.map(d => ({ app: d.sel.appName, pass: d.r?.pass, attempts: d.r?.attempts, srcFindings: d.r?.srcFindings, residueClean: d.r?.residueClean }))).slice(0, 3000)}; verify ${JSON.stringify(verify).slice(0, 2000)}; deploy logs /tmp/deploy-*.log.`,
  { label: 'report', phase: 'Report', model: 'opus', schema: REPORT_SCHEMA })

return {
  module: MOD,
  ported: okPorts.map(x => x.sel.appName),
  deployed: deployResults.map(d => ({ app: d.sel.appName, pass: d.r?.pass ?? false, attempts: d.r?.attempts, residueClean: d.r?.residueClean })),
  srcFindings: deployResults.flatMap(d => d.r?.srcFindings ?? []),
  verifyPass: verify?.pass ?? false,
  violations: verify?.violations ?? [],
  report: report?.reportPath,
  headline: report?.headline,
}
