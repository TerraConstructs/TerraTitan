// Reusable review-findings fix round: sonnet implementers iterating under opus
// verification, one lane per finding-group, then full repo gates + final audit.
//
// Invoke with args (all paths absolute):
// {
//   worktree: "/path/to/base-worktree",       // branch checked out, installed, lib/ compiled
//   findingsFile: "/path/findings-review.md", // the external review body (claims may be wrong)
//   runDir: "/path/conversion-run",           // conventions live here; report written here
//   module: "aws-ecs",                        // for report naming
//   upstreamLib: "/path/aws-cdk-lib/<module>",// upstream fidelity reference
//   tag: "v2.233.0",
//   alreadyAddressed: ""                      // optional: notes on findings already fixed
// }
//
// Model policy: every agent() call PINS sonnet or opus. Never inherit session model.

export const meta = {
  name: 'fix-review-findings',
  description: 'Iteratively fix external code-review findings: sonnet implementers, opus verifiers, full gates, final audit',
  phases: [
    { title: 'Plan', detail: 'verify each finding accurate/inaccurate, group into disjoint-file work items', model: 'opus' },
    { title: 'Fix', detail: 'per-item lanes: sonnet fix -> opus verify -> rework (max 3 rounds)' },
    { title: 'Gates', detail: 'tsc + jsii + eslint + full module jest', model: 'sonnet' },
    { title: 'Audit', detail: 'final independent audit + report file', model: 'opus' },
  ],
}

const A = typeof args === 'string' ? JSON.parse(args) : (args || {})
for (const k of ['worktree', 'findingsFile', 'runDir', 'module', 'upstreamLib', 'tag']) {
  if (!A[k]) throw new Error('missing arg: ' + k)
}
const WT = A.worktree, RUN = A.runDir, MOD = A.module
const MISE = 'MISE_DISABLE_TOOLS=aws-vault mise exec --'

const CTX = `
Shared context:
- Worktree: ${WT} (do NOT commit; do NOT touch files outside your assigned item's files + their tests)
- Conventions incl. HARD INVARIANTS: ${RUN}/conventions.md (core sheet: ${RUN}/conventions-core.md)
- External findings file (claims may be WRONG — verify against code before fixing): ${A.findingsFile}
- Upstream fidelity reference (${A.tag}): ${A.upstreamLib}/lib — where upstream has the same logic,
  match its behavior exactly; where the finding stems from a CFN->Terraform model difference,
  follow sibling idioms in ${WT}/src and document the deviation inline.
- Terraform provider L1 types (schema ground truth): ${WT}/node_modules/@cdktn/provider-aws/lib
${A.alreadyAddressed ? '- Already addressed (do not redo): ' + A.alreadyAddressed : ''}`

// ---------- Plan ----------
phase('Plan')
const PLAN_SCHEMA = {
  type: 'object',
  properties: {
    items: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: { type: 'string' },
          findingRefs: { type: 'array', items: { type: 'string' } },
          accurate: { type: 'string', enum: ['accurate', 'partially', 'inaccurate'] },
          accuracyNotes: { type: 'string' },
          files: { type: 'array', items: { type: 'string' } },
          testFiles: { type: 'array', items: { type: 'string' } },
          fixSpec: { type: 'string' },
          testSpec: { type: 'string' },
        },
        required: ['key', 'findingRefs', 'accurate', 'accuracyNotes', 'files', 'testFiles', 'fixSpec', 'testSpec'],
      },
    },
    notes: { type: 'string' },
  },
  required: ['items', 'notes'],
}
const plan = await agent(`Triage the external review findings in ${A.findingsFile} for the converted ${MOD} module and produce work items for fix agents.
${CTX}
1. For EVERY finding (blocking AND non-blocking observations): read the cited code and the upstream equivalent; classify accurate / partially / inaccurate with concrete evidence in accuracyNotes. An inaccurate finding still becomes an item ONLY if something adjacent genuinely needs fixing; otherwise mark inaccurate and exclude (it will be rebutted in the final report).
2. Group accurate findings into work items with STRICTLY DISJOINT src file sets (findings touching the same file MUST share one item — agents run in parallel and must never edit the same file). List each item's src files and the test files its regression tests belong in (test files should also be disjoint across items where possible; if two items must touch the same test file, MERGE the items).
3. fixSpec: exact change, referencing upstream behavior or the sibling idiom to follow, including how to handle unresolved-token inputs where relevant. testSpec: the regression test(s) proving the fix (never a tautology; must fail on the pre-fix code).
Return items[] and notes.`,
  { label: 'plan:triage', phase: 'Plan', model: 'opus', schema: PLAN_SCHEMA })
if (!plan || !plan.items.length) return { failed: 'plan', notes: plan?.notes }
const active = plan.items.filter(i => i.accurate !== 'inaccurate')
log(`Plan: ${active.length} work items (${plan.items.length - active.length} findings rejected as inaccurate)`)

// ---------- Fix lanes (parallel items, sequential rounds inside) ----------
phase('Fix')
const FIX_SCHEMA = {
  type: 'object',
  properties: {
    written: { type: 'array', items: { type: 'string' } },
    testsPass: { type: 'boolean' },
    notes: { type: 'string' },
  },
  required: ['written', 'testsPass', 'notes'],
}
const VERIFY_SCHEMA = {
  type: 'object',
  properties: {
    verdict: { type: 'string', enum: ['pass', 'rework'] },
    reworkInstructions: { type: 'string' },
    notes: { type: 'string' },
  },
  required: ['verdict', 'reworkInstructions', 'notes'],
}
const laneResults = await parallel(active.map(item => async () => {
  let verdict = null
  let lastFix = null
  for (let round = 1; round <= 3; round++) {
    lastFix = await agent(`Fix round ${round} for work item "${item.key}" (findings: ${item.findingRefs.join(', ')}).
${CTX}
Files you may modify (ONLY these + the listed test files): ${item.files.join(', ')} | tests: ${item.testFiles.join(', ')}
FIX SPEC: ${item.fixSpec}
TEST SPEC: ${item.testSpec}
${verdict?.reworkInstructions ? 'REWORK INSTRUCTIONS from the verifier (address ALL of them):\n' + verdict.reworkInstructions : ''}
Rules: follow sibling idioms; never weaken existing assertions; snapshot updates only when the emitted-Terraform change IS the corrected behavior (inspect the diff and say so in notes); handle unresolved Token inputs explicitly where the spec calls for it (Token.isUnresolved). Where a validation is added, ValidationError with a message matching upstream's wording where one exists.
GATE before returning: cd ${WT} && ${MISE} pnpm jest --coverage=false ${item.testFiles.join(' ')} passes AND ${MISE} npx tsc --noEmit -p tsconfig.json is clean for your files.
Return written[], testsPass, notes (what changed and why, including the pre-fix failure your new test reproduces).`,
      { label: `fix:${item.key}:r${round}`, phase: 'Fix', model: 'sonnet', schema: FIX_SCHEMA })
    if (!lastFix) return { item: item.key, verdict: 'agent-error', rounds: round }

    verdict = await agent(`INDEPENDENT verification of fix "${item.key}" round ${round} in ${WT}. Do not trust the implementer's notes — read the actual diff (git -C ${WT} diff -- ${[...item.files, ...item.testFiles].join(' ')}) and the surrounding code.
${CTX}
Original findings: ${item.findingRefs.join(', ')} — re-read them in ${A.findingsFile}.
Check: (1) the fix actually closes the finding (trace the failure scenario through the new code, including tokenized/unresolved inputs and zero-values like UID 0); (2) upstream fidelity or documented deviation; (3) HARD INVARIANTS hold; (4) the regression test would FAIL on pre-fix code and asserts behavior, not implementation trivia; (5) no unrelated edits, no weakened assertions, no snapshot updates that merely absorb a regression.
verdict "pass" only if ALL hold; otherwise "rework" with precise, complete reworkInstructions (the implementer sees ONLY those).`,
      { label: `verify:${item.key}:r${round}`, phase: 'Fix', model: 'opus', schema: VERIFY_SCHEMA })
    if (!verdict) return { item: item.key, verdict: 'verify-agent-error', rounds: round }
    if (verdict.verdict === 'pass') return { item: item.key, verdict: 'pass', rounds: round, files: lastFix.written, notes: verdict.notes }
  }
  return { item: item.key, verdict: 'unresolved-after-3-rounds', rounds: 3, notes: verdict?.reworkInstructions }
}))
const lanes = laneResults.filter(Boolean)
const passed = lanes.filter(l => l.verdict === 'pass')
log(`Fix lanes: ${passed.length}/${lanes.length} verified`)

// ---------- Gates (whole tree, single agent) ----------
phase('Gates')
const GATE_SCHEMA = {
  type: 'object',
  properties: { pass: { type: 'boolean' }, fixed: { type: 'array', items: { type: 'string' } }, notes: { type: 'string' } },
  required: ['pass', 'notes'],
}
const gate = await agent(`Full gates in ${WT} after the parallel fix lanes (they each ran only targeted tests — cross-item breakage is YOUR job to find):
cd ${WT} && ${MISE} npx tsc --noEmit -p tsconfig.json && ${MISE} pnpm compile && ${MISE} pnpm eslint && ${MISE} pnpm jest --coverage=false test/aws/compute/ecs/ test/aws/compute/alb/ test/aws/compute/scalable-target.test.ts
Fix ONLY mechanical integration fallout (imports, formatting, snapshot updates whose diff you verified is the corrected emission). Anything semantic -> pass:false with notes. Return pass, fixed[], notes.`,
  { label: 'gates:full', phase: 'Gates', model: 'sonnet', schema: GATE_SCHEMA })

// ---------- Audit + report (file FIRST) ----------
phase('Audit')
const AUDIT_SCHEMA = {
  type: 'object',
  properties: { reportWritten: { type: 'boolean' }, reportPath: { type: 'string' }, pass: { type: 'boolean' }, headline: { type: 'string' } },
  required: ['reportWritten', 'reportPath', 'pass', 'headline'],
}
const audit = await agent(`FINAL independent audit of the ${MOD} review-fix round in ${WT}, then write the report to ${RUN}/report-fixes-${MOD}.md FIRST and return only {reportWritten, reportPath, pass, headline}. Do NOT pack findings into the structured return (prior runs capitulated to schema junk doing that) — the FILE is the source of truth.
${CTX}
Audit: read git -C ${WT} diff (worktree is uncommitted); per finding in ${A.findingsFile}: fixed (with file:line + test) / rejected-as-inaccurate (with evidence from the plan: ${JSON.stringify(plan.items.map(i => ({ key: i.key, accurate: i.accurate, notes: i.accuracyNotes.slice(0, 200) }))).slice(0, 2500)}) / still-open. Verify lane verdicts (${JSON.stringify(lanes)}) against reality; verify gates (${JSON.stringify(gate)}). Report must include a suggested per-item commit plan (files per commit, message draft) and a rebuttal section for inaccurate findings suitable for pasting into the PR review reply.
pass = every accurate finding fixed AND gates green.`,
  { label: 'audit:final', phase: 'Audit', model: 'opus', schema: AUDIT_SCHEMA })

return {
  module: MOD,
  items: lanes,
  gatesPass: gate?.pass ?? false,
  auditPass: audit?.pass ?? false,
  report: audit?.reportPath,
  headline: audit?.headline,
}
