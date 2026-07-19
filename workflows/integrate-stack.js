export const meta = {
  name: 'integrate-stack',
  description: 'Stack the conversion branches (servicediscovery → autoscaling → secretsmanager-combined), execute the adjudicated secretsmanager combination, open stacked PRs, close superseded PR #117',
  phases: [
    { title: 'Preflight', detail: 'branch/PR state + collision inventory', model: 'sonnet' },
    { title: 'Stack-Autoscaling', detail: 'rebase onto #118 head, gates, push', model: 'sonnet' },
    { title: 'Combine', detail: 'adjudicated PR117-core + run3-breadth merge', model: 'opus' },
    { title: 'Gates', detail: 'compile/test/eslint/integ-synth/tofu-validate loop', model: 'sonnet' },
    { title: 'Verify', detail: 'adjudication-adherence verification', model: 'opus' },
    { title: 'PRs', detail: 'open stacked PRs, close superseded #117', model: 'sonnet' },
    { title: 'Report', detail: 'stack map + human merge instructions', model: 'opus' },
  ],
}

const MAIN = '/Users/vincentsmet/tcons/base'
const WT_AS = '/Users/vincentsmet/tcons/base-autoscaling'
const WT_SM = '/Users/vincentsmet/tcons/base-secretsmanager'
const WT_SD = '/Users/vincentsmet/tcons/base-servicediscovery-run5'
const WT_117 = '/Users/vincentsmet/tcons/base-pr117'
const WT_COMBO = '/Users/vincentsmet/tcons/base-secretsmanager-combined'
const RUN = '/Users/vincentsmet/tcons/conversion-run'
const MISE = 'MISE_DISABLE_TOOLS=aws-vault mise exec --'
const TF_CACHE = 'TF_PLUGIN_CACHE_DIR=/Users/vincentsmet/tcons/base/integ/aws/storage/tf/table.autoscaling/.terraform/providers'

const GATES = `Standard gates (run ALL, in order, from the worktree root):
1. npx tsc --noEmit -p tsconfig.json
2. ${MISE} pnpm compile   (jsii)
3. ${MISE} pnpm eslint    (projen --fix pass; commit any resulting style changes separately as "style: eslint pass")
4. ${MISE} pnpm jest --coverage=false <relevant test dirs>
5. ${MISE} go vet ./integ/...
6. integ synth-only for the relevant app(s) + provider validation: cd integ/aws/<ns> && ${TF_CACHE} ${MISE} make <target>-synth-only, then cd tf/<target> && ${TF_CACHE} ${MISE} tofu init -backend=false -input=false && ${TF_CACHE} mise exec opentofu@1.8.2 -- tofu validate`

// ---------- Preflight ----------
phase('Preflight')
const PRE_SCHEMA = {
  type: 'object',
  properties: {
    mainMoved: { type: 'boolean' },
    heads: { type: 'string' },
    pr118HeadMatchesLocal: { type: 'boolean' },
    blockers: { type: 'array', items: { type: 'string' } },
  },
  required: ['mainMoved', 'heads', 'pr118HeadMatchesLocal', 'blockers'],
}
const pre = await agent(`Preflight for stacking conversion branches of the repo at ${MAIN} (worktrees share one git dir). Read-only except git fetch.
1. cd ${MAIN} && git fetch origin. Report whether origin/main moved past f7042cc (mainMoved).
2. Report the head SHAs (heads, one line each) of: convert-aws-servicediscovery (local + origin), convert-aws-autoscaling, convert-aws-secretsmanager, feat/secretsmanager-l2 (fetch from origin pull/117/head if needed — read-only), and origin/main.
3. Confirm PR #118's head (gh pr view 118 --repo TerraConstructs/base --json headRefOid) equals local convert-aws-servicediscovery-run5 / origin convert-aws-servicediscovery (pr118HeadMatchesLocal).
4. Verify the known collision inventory still holds: autoscaling vs servicediscovery share ONLY go.mod/go.sum (+ possibly pnpm-lock? check); barrels are namespace-disjoint (compute/index.ts vs edge/index.ts vs encryption/index.ts); top-level integ/aws/*.go helpers are distinct files. List anything unexpected as blockers.
Do NOT modify any branch. Return the schema fields.`,
  { label: 'preflight', phase: 'Preflight', model: 'sonnet', schema: PRE_SCHEMA })
if (!pre) return { failed: 'preflight' }
if (pre.blockers.length) log(`Preflight blockers: ${pre.blockers.join(' | ')}`)
log(pre.heads.slice(0, 300))

// ---------- Stack autoscaling ----------
phase('Stack-Autoscaling')
const STEP_SCHEMA = {
  type: 'object',
  properties: {
    ok: { type: 'boolean' },
    headSha: { type: 'string' },
    conflictsResolved: { type: 'array', items: { type: 'string' } },
    notes: { type: 'string' },
  },
  required: ['ok', 'headSha', 'conflictsResolved'],
}
const stackAs = await agent(`Stack the autoscaling branch onto the servicediscovery PR head. Work in ${WT_AS} (worktree of branch convert-aws-autoscaling).
1. git fetch origin, then rebase: git rebase origin/convert-aws-servicediscovery
2. Expected conflicts: go.mod/go.sum ONLY (take the union of both sides' requires, then ${MISE} go mod tidy and stage the result). Barrels should NOT conflict (disjoint namespaces) — if any other file conflicts, resolve minimally and record it; if a conflict looks design-level (not mechanical), abort the rebase (git rebase --abort) and return ok=false with notes.
3. After rebase: ${GATES}
   test dirs: test/aws/compute/auto-scaling/ AND test/aws/edge/cloudmap/ (prove the stack composes); integ target: autoscaling.custom-scaling in integ/aws/compute.
   NOTE this branch predates the eslint gate — expect style fixes; commit them as "style: eslint pass".
4. Push the stacked branch: git push -u origin convert-aws-autoscaling --force-with-lease (lease is safe: this branch has never been pushed OR verify with git ls-remote first; if it exists remotely and differs unexpectedly, stop and report).
Return ok, headSha (final), conflictsResolved (files), notes.`,
  { label: 'stack:autoscaling', phase: 'Stack-Autoscaling', model: 'sonnet', schema: STEP_SCHEMA })
if (!stackAs || !stackAs.ok) return { failed: 'stack-autoscaling', stackAs }
log(`autoscaling stacked at ${stackAs.headSha}; conflicts: ${stackAs.conflictsResolved.join(', ') || 'none'}`)

// ---------- Combine secretsmanager (adjudicated plan) ----------
phase('Combine')
const COMBINE_PLAN_SCHEMA = {
  type: 'object',
  properties: {
    fileDecisions: { type: 'array', items: { type: 'object', properties: { path: { type: 'string' }, source: { type: 'string', enum: ['A', 'B', 'MERGE', 'NEW'] }, detail: { type: 'string' } }, required: ['path', 'source', 'detail'] } },
    testPlan: { type: 'string' },
    integPlan: { type: 'string' },
    notes: { type: 'string' },
  },
  required: ['fileDecisions', 'testPlan', 'integPlan', 'notes'],
}
const comboPlan = await agent(`Design the ADJUDICATED COMBINATION of the two aws-secretsmanager ports. Read the adjudication first: ${RUN}/report-run3-aws-secretsmanager.md (and conventions: ${RUN}/conventions.md, project-intent preamble applies).
Side A = ${WT_117}/src/aws/encryption + test/aws/encryption + integ/aws/encryption (PR #117 @7cf5c24, v2.186-based).
Side B = ${WT_SM}/src/aws/encryption + test/aws/encryption + integ (run-3 output, v2.233-based).
Adjudicated verdicts to implement: A's attach()/lazy-single-version core, A's recoveryWindow, A's explicit passwordLength/requireEachIncludedType defaults, A's partial-ARN parse fix; B's SecretValue DROP (remove A's string-stub secretValue/secretValueFromJson and their data-source plumbing); B's secret-rotation.ts + its tests (A lacks them); B's v2.233 tag currency where it does not touch A's core design (deprecated-member removals, header tags — prefer v2.233 headers where content is v2.233-faithful, keep A's v2.186 header on files that remain A's design and note the tag mismatch for a future refresh).
Per file under src/aws/encryption (secret.ts, rotation-schedule.ts, policy.ts, secret-rotation.ts, index.ts barrel wiring) decide source A/B/MERGE with precise detail (for MERGE: which sections from which side). Same for tests. Integ: keep BOTH apps (A's secret-attach with its RDS adapter + B's secret.replica) — reconcile Makefile/Go helpers. Flag anything where the two sides' class/interface shapes are incompatible with a concrete resolution. Return the plan.`,
  { label: 'combine:plan', phase: 'Combine', model: 'opus', schema: COMBINE_PLAN_SCHEMA })
if (!comboPlan) return { failed: 'combine-plan' }
log(`combine plan: ${comboPlan.fileDecisions.map(f => f.path.split('/').pop() + ':' + f.source).join(', ')}`)

const comboExec = await agent(`Execute the secretsmanager combination plan. First create the worktree: cd ${MAIN} && git worktree add ${WT_COMBO} -b feat/secretsmanager-l2-combined convert-aws-autoscaling && cd ${WT_COMBO} && pnpm install (fast, hoisted).
Plan (follow exactly; A=${WT_117}, B=${WT_SM}):
${JSON.stringify(comboPlan, null, 2).slice(0, 6000)}
Copy/graft files per the plan (read both sides' versions when MERGE), wire src/aws/encryption/index.ts, tests, integ apps + Makefile + Go helper. Rules reference: ${RUN}/conventions-core.md. Commit as: "feat(aws): SecretsManager L2 — combined landing (PR #117 core + run-3 v2.233 breadth)" with a body crediting both sources and the adjudication. Do NOT push. Return ok, headSha, conflictsResolved (files needing judgment beyond the plan), notes.`,
  { label: 'combine:execute', phase: 'Combine', model: 'sonnet', schema: STEP_SCHEMA })
if (!comboExec || !comboExec.ok) return { failed: 'combine-exec', comboExec }

// ---------- Gates loop ----------
phase('Gates')
const FIX_SCHEMA = {
  type: 'object',
  properties: { clean: { type: 'boolean' }, remainingErrors: { type: 'number' }, summary: { type: 'string' } },
  required: ['clean', 'remainingErrors', 'summary'],
}
let gatesClean = false
for (let i = 1; i <= 4 && !gatesClean; i++) {
  const fix = await agent(`Iteration ${i}/4 gates loop for the combined secretsmanager branch in ${WT_COMBO}.
${GATES}
test dirs: test/aws/encryption/ (plus test/aws/compute/auto-scaling/ and test/aws/edge/cloudmap/ once as a stack smoke); integ targets: the secretsmanager apps in integ/aws/encryption (synth-only + tofu validate each; SKIP any stage needing AWS credentials).
Fix failures by editing the combined files, honoring the adjudication (never "fix" by reverting to B's eager-version attach design or dropping A's recoveryWindow). Amend or add commits as appropriate. Return clean, remainingErrors, summary.`,
    { label: `gates:fix-${i}`, phase: 'Gates', model: 'sonnet', schema: FIX_SCHEMA })
  if (!fix) break
  gatesClean = fix.clean
  log(`Gates ${i}: ${fix.clean ? 'CLEAN' : fix.remainingErrors + ' errors'}`)
}
if (!gatesClean) return { failed: 'gates', note: 'combined branch not green — human attention needed' }

// ---------- Verify ----------
phase('Verify')
const VERDICT_SCHEMA = {
  type: 'object',
  properties: {
    pass: { type: 'boolean' },
    violations: { type: 'array', items: { type: 'object', properties: { file: { type: 'string' }, rule: { type: 'string' }, detail: { type: 'string' } }, required: ['file', 'rule', 'detail'] } },
    advisories: { type: 'array', items: { type: 'object', properties: { file: { type: 'string' }, rule: { type: 'string' }, detail: { type: 'string' } }, required: ['file', 'rule', 'detail'] } },
    notes: { type: 'string' },
  },
  required: ['pass', 'violations', 'advisories'],
}
let verifyPass = false
let lastViolations = []
let advisories = []
for (let round = 1; round <= 2 && !verifyPass; round++) {
  const v = await agent(`Independent verification (round ${round}) of the combined secretsmanager branch in ${WT_COMBO} against BOTH the conventions (${RUN}/conventions.md) AND the adjudication (${RUN}/report-run3-aws-secretsmanager.md). Confirm specifically, by reading the actual files and running targeted greps/tests:
1. attach() works on an OWNED secret (A's lazy-single-version design present; write/run a quick scratch check via the existing test suite — there must be a passing test covering new Secret(...).attach(target)).
2. recoveryWindow prop present with 7-30(+0) validation; explicit passwordLength/requireEachIncludedType defaults; partial-ARN parse keeps full names.
3. NO SecretValue string stubs (dropped per adjudication); secret-rotation.ts + tests present (from B).
4. Zero-duration rotation ValidationError; imported-secret-with-connectionFields throws; no silent no-ops on imports.
5. Headers/injection ids/barrel wiring per conventions; both integ apps synth.
violations = blocking breaches of the adjudication or conventions; advisories = opinions. pass = zero violations. Return pass, violations, advisories, notes.`,
    { label: `verify:round-${round}`, phase: 'Verify', model: 'opus', schema: VERDICT_SCHEMA })
  if (!v) break
  verifyPass = v.pass && v.violations.length === 0
  lastViolations = v.violations
  advisories = v.advisories || []
  log(`Verify ${round}: ${verifyPass ? 'PASS' : v.violations.length + ' blocking'} (+${(v.advisories || []).length} advisory)`)
  if (!verifyPass && v.violations.length && round < 2) {
    await agent(`Fix these adjudication/convention violations in ${WT_COMBO} exactly as specified, re-run affected tests + tsc, amend/append commits:
${JSON.stringify(lastViolations, null, 2)}`,
      { label: `verify:fix-${round}`, phase: 'Verify', model: 'sonnet', schema: STEP_SCHEMA })
  }
}
if (!verifyPass) return { failed: 'verify', lastViolations }

// ---------- PRs & closeout ----------
phase('PRs')
const PR_SCHEMA = {
  type: 'object',
  properties: { autoscalingPr: { type: 'string' }, combinedPr: { type: 'string' }, pr117Closed: { type: 'boolean' }, notes: { type: 'string' } },
  required: ['autoscalingPr', 'combinedPr', 'pr117Closed'],
}
const prs = await agent(`Open the stacked PRs and close the superseded one. Use gh (authenticated as the repo owner).
1. Autoscaling PR: from branch convert-aws-autoscaling, BASE = convert-aws-servicediscovery (stacked on PR #118; GitHub retargets to main when #118 merges). Title: "feat(aws): aws-autoscaling L2 constructs (compute/auto-scaling) [stacked on #118]". Body: summarize scope (AutoScalingGroup, LifecycleHook, ScheduledAction, StepScaling, TargetTracking, WarmPool, imdsv2 aspect, canned metrics; 149 tests + 9 snapshots; live-validated integ autoscaling.custom-scaling incl. the -1 sentinel fix), note it is stacked on #118 and shares only go.mod with it, and list the human sign-offs from ${RUN}/report-run2-aws-autoscaling.md (naming semantics headline, deprecated re-adds, provider-generated type, tri-state + dead-code already fixed). Mention merge order: #118 first.
2. Combined secretsmanager PR: push feat/secretsmanager-l2-combined (git -C ${WT_COMBO} push -u origin feat/secretsmanager-l2-combined), then PR with BASE = convert-aws-autoscaling. Title: "feat(aws): SecretsManager L2 — combined landing (supersedes #117) [stacked]". Body: explain the combination per the adjudication (PR #117's attach/lazy-version/recoveryWindow core + run-3's v2.233 breadth incl. secret-rotation.ts, SecretValue stubs dropped pending core.SecretValue), credit #117 explicitly, list what came from each side, note stacked order (#118 → autoscaling → this).
3. Close PR #117 with a comment: thank + credit (its attach composition design and post-review fixes are the adopted core of the combined PR), link the combined PR, state it supersedes #117.
Return autoscalingPr (URL), combinedPr (URL), pr117Closed, notes.`,
  { label: 'prs:create-close', phase: 'PRs', model: 'sonnet', schema: PR_SCHEMA })
if (!prs) return { failed: 'prs' }
log(`PRs: ${prs.autoscalingPr} | ${prs.combinedPr} | #117 closed: ${prs.pr117Closed}`)

// ---------- Report ----------
phase('Report')
const REPORT_SCHEMA = {
  type: 'object',
  properties: { verdict: { type: 'string' }, mergeInstructions: { type: 'array', items: { type: 'string' } }, residualRisks: { type: 'array', items: { type: 'string' } }, reportWritten: { type: 'boolean' } },
  required: ['verdict', 'mergeInstructions', 'residualRisks'],
}
const report = await agent(`Final report of the stacking operation. Inspect: git -C ${MAIN} log --oneline --graph origin/convert-aws-servicediscovery convert-aws-autoscaling feat/secretsmanager-l2-combined -20; the PRs (${prs.autoscalingPr}, ${prs.combinedPr}, #118, closed #117); verify state: verifyPass=${verifyPass}, advisories=${JSON.stringify(advisories).slice(0, 800)}.
Produce: verdict (one paragraph — is the stack ready for human bottom-up merging); mergeInstructions (exact ordered steps for the human: what to merge when, what auto-retargets, when to re-tidy go.mod, when to cut the aws-ecs worktree and from where); residualRisks (rebase hazards, the outputs-convention open policy question, go transitive bumps, anything from advisories). Attempt to write ${RUN}/report-stack-integration.md (set reportWritten). Keep it crisp.`,
  { label: 'report:final', phase: 'Report', model: 'opus', schema: REPORT_SCHEMA })

return { preflight: { mainMoved: pre.mainMoved, blockers: pre.blockers }, autoscalingHead: stackAs.headSha, combined: comboExec.headSha, gatesClean, verifyPass, advisories: advisories.length, prs, report }