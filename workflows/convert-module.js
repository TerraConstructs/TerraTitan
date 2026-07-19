// Generalized AWS CDK L2 module → TerraConstructs conversion workflow (Claude Code Workflow tool).
//
// Invoke with args (all paths absolute):
// {
//   module: "aws-autoscaling",            // aws-cdk-lib module name
//   namespace: "compute",                  // base aggregate namespace (see conventions.md registry)
//   tag: "v2.233.0",                       // aws-cdk tag base tracks (newest provenance-header tag)
//   worktree: "/path/to/base-worktree",    // base worktree on a fresh branch, installed + compiled
//   upstreamLib: "/path/aws-cdk/packages/aws-cdk-lib/<module>",
//   upstreamInteg: "/path/aws-cdk/packages/@aws-cdk-testing/framework-integ/test/<module>/test",
//   cfnDecls: "/path/node_modules/aws-cdk-lib/<module>/lib",  // exact-tag install for Cfn .d.ts
//   runDir: "/path/conversion-run",        // conventions.md lives here; plans/ mappings/ written here
//   providerPrefix: "autoscaling"          // kebab prefix of candidate @cdktn/provider-aws dirs
// }
//
// Model policy: every agent() call PINS sonnet or opus. Never inherit the session model.

export const meta = {
  name: 'convert-module',
  description: 'Convert an AWS CDK L2 module (src+test+integ) into terraconstructs/base with verified mappings and invariant enforcement',
  phases: [
    { title: 'Plan', detail: 'layout/collision plan + inventory', model: 'opus' },
    { title: 'Map', detail: 'Cfn→TF mapping: sonnet find, opus verify' },
    { title: 'Convert', detail: 'src conversion, dependency waves', model: 'sonnet' },
    { title: 'Compile', detail: 'tsc + jsii fix loop', model: 'sonnet' },
    { title: 'Test', detail: 'test conversion + fix loop', model: 'sonnet' },
    { title: 'Integ', detail: 'port integ app + Go validator + synth-only', model: 'sonnet' },
    { title: 'Verify', detail: 'independent convention verification (after ALL legs land)', model: 'opus' },
    { title: 'Review', detail: 'API fidelity + final report', model: 'opus' },
  ],
}

const A = typeof args === 'string' ? JSON.parse(args) : (args || {})
for (const k of ['module', 'namespace', 'tag', 'worktree', 'upstreamLib', 'upstreamInteg', 'cfnDecls', 'runDir', 'providerPrefix']) {
  if (!A[k]) throw new Error('missing arg: ' + k)
}
const TOOLS = A.toolsDir || '/Users/vincentsmet/tcons/terratitan-claude-native/tools'
const WT = A.worktree, UP = A.upstreamLib, UPINTEG = A.upstreamInteg, RUN = A.runDir
const CFN = A.cfnDecls, TAG = A.tag, MOD = A.module, NS = A.namespace
const PROVIDER = WT + '/node_modules/@cdktn/provider-aws/lib'
const MISE = 'MISE_DISABLE_TOOLS=aws-vault mise exec --'

const CTX = `
Shared context (read BEFORE writing anything):
- Conventions incl. HARD REPO INVARIANTS (mandatory): ${RUN}/conventions.md
- Target worktree: ${WT} (installed, lib/ compiled)
- Upstream module (${TAG}): ${UP}/lib
- Cfn L1 declarations (exact ${TAG}): ${CFN}
- Terraform provider L1 types: ${PROVIDER}/${A.providerPrefix}-* (and related) dirs
- Layout plan: ${RUN}/plans/${MOD}.json  |  Mapping manifest: ${RUN}/mappings/${MOD}.json
- Sibling exemplars: ${WT}/src/aws/notify/queue.ts (naming/physicalName), topic.ts (outputs shape,
  PROPERTY_INJECTION_ID), plus the closest constructs in src/aws/${NS}/ (read the barrel first).
Do not modify anything outside ${WT} except files under ${RUN}.${A.integrityNote ? '\n' + A.integrityNote : ''}`

// ---------- Plan ----------
phase('Plan')
const PLAN_SCHEMA = {
  type: 'object',
  properties: {
    cfnResources: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, usedIn: { type: 'array', items: { type: 'string' } } }, required: ['name', 'usedIn'] } },
    srcFiles: { type: 'array', items: { type: 'object', properties: { upstream: { type: 'string' }, target: { type: 'string' }, order: { type: 'number' }, loc: { type: 'number' }, copyMode: { type: 'boolean' }, siblings: { type: 'array', items: { type: 'string' } }, notes: { type: 'string' } }, required: ['upstream', 'target', 'order', 'loc', 'copyMode'] } },
    testFiles: { type: 'array', items: { type: 'object', properties: { upstream: { type: 'string' }, target: { type: 'string' } }, required: ['upstream', 'target'] } },
    integChoice: { type: 'object', properties: { upstream: { type: 'string' }, appTarget: { type: 'string' }, makeTarget: { type: 'string' }, reason: { type: 'string' } }, required: ['upstream', 'appTarget', 'makeTarget', 'reason'] },
    layoutNotes: { type: 'string' },
  },
  required: ['cfnResources', 'srcFiles', 'testFiles', 'integChoice', 'layoutNotes'],
}

const plan = await agent(`Plan the conversion of AWS CDK ${MOD} (${TAG}) into the terraconstructs "${NS}" namespace. Converters follow your plan verbatim.
${CTX}
(The plan file and mapping manifest do not exist yet — YOU produce the plan.)
0. FIRST run the deterministic scanner and treat its JSON as the authoritative inventory:
   node ${TOOLS}/cfn-scan.mjs ${UP}/lib --ts ${WT}
   It gives you: cfnResources (the mapping work-list), per-file classification (L1_BACKED needs
   real conversion; PURE_L2 composes only other L2s — mark those files copyMode:true in their notes
   so converters copy near-verbatim, adjusting imports/headers only; BARREL), dependency waves
   (refine, don't recompute), and crossModuleDeps. Only investigate beyond the scan where it is
   ambiguous. Carry each file's loc and set copyMode:true (as srcFiles fields) for PURE_L2 files
   per the scan. Also check ${CFN} for a *-canned-metrics.generated.js — if present, note in
   layoutNotes that ${TOOLS}/gen-canned-metrics.mjs must generate the .ts (deterministic codegen,
   NOT an LLM conversion; these files ship only in the built npm bundle, never in the aws-cdk git tree).
1. Inventory ${UP}/lib and ${UP}/test. Per lib file, identify Cfn* L1 constructs (ground truth: ${CFN}).
2. LAYOUT: check src/aws/${NS}/ for filename AND exported-class-name collisions with existing files. Repo precedent for collisions: subdirectories with namespaced re-exports ("export * as <ns>" in the barrel — see compute/index.ts, notify/index.ts). Identify anything ALREADY ported that this module must import rather than duplicate. Produce a jsii-safe, collision-free layout.
3. Assign each lib file a target path + conversion order (leaves first; same-order files must not import each other) + sibling files each converter should read.
4. Map each test file to a target test path.
5. Choose ONE upstream integ test from ${UPINTEG}: the SIMPLEST/CHEAPEST exercising the module's core resource (minimal instance types/counts, no deprecated patterns). Read the top candidates before choosing. appTarget = integ/aws/${NS}/apps/<name>.ts.
6. Write the plan JSON to ${RUN}/plans/${MOD}.json, then return the same content.
layoutNotes must cover: dir + export strategy, collision resolutions, already-ported code to reuse, barrel wiring assignment (which file's converter wires the barrel).`,
  { label: 'plan:layout', phase: 'Plan', model: 'opus', schema: PLAN_SCHEMA })
if (!plan) return { failed: 'plan' }
log(`Plan: ${plan.srcFiles.length} src, ${plan.testFiles.length} test, ${plan.cfnResources.length} Cfn; integ=${plan.integChoice.upstream}`)

// ---------- Map ----------
phase('Map')
const MAP_SCHEMA = {
  type: 'object',
  properties: {
    cfnResource: { type: 'string' },
    tfResources: { type: 'array', items: { type: 'object', properties: { terraformType: { type: 'string' }, providerImportDir: { type: 'string' }, role: { type: 'string' } }, required: ['terraformType', 'providerImportDir', 'role'] } },
    oneToMany: { type: 'boolean' },
    attributeNotes: { type: 'string' },
    confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
  },
  required: ['cfnResource', 'tfResources', 'oneToMany', 'attributeNotes', 'confidence'],
}
const VERIFY_SCHEMA = {
  type: 'object',
  properties: { approved: { type: 'boolean' }, finalMappingJson: { type: 'string' }, notes: { type: 'string' } },
  required: ['approved', 'finalMappingJson'],
}

const entries = await pipeline(
  plan.cfnResources,
  cfn => agent(`Find terraform-provider-aws equivalent(s) for ${cfn.name} (used in ${cfn.usedIn.join(', ')} of ${MOD} ${TAG}).
Ground truth: ${cfn.name}Props in ${CFN} (Cfn side); Config interfaces under ${PROVIDER}/ — list candidate dirs with: ls ${PROVIDER} | grep -i ${A.providerPrefix} (plus related resources you identify from the docs/names). One Cfn resource may map to MULTIPLE TF resources (nested Cfn props that are standalone TF resources). Per mapped resource state its role; in attributeNotes list unmappable Cfn props (+ handling) and shape/casing/unit mismatches.`,
    { label: `map:find:${cfn.name}`, phase: 'Map', model: 'sonnet', schema: MAP_SCHEMA }),
  (mapping, cfn) => agent(`Adversarially verify this Cfn→Terraform mapping for ${cfn.name}:
${JSON.stringify(mapping, null, 2)}
Check attribute-by-attribute against ${CFN} and ${PROVIDER}/<resource>/index.d.ts. Hunt missing 1-to-many splits, wrong resources, attribute gaps, unit/format mismatches. Correct anything wrong. Return approved, finalMappingJson (corrected, same shape), notes.`,
    { label: `map:verify:${cfn.name}`, phase: 'Map', model: 'opus', schema: VERIFY_SCHEMA })
)
const finalEntries = entries.filter(Boolean).map(e => JSON.parse(e.finalMappingJson))
if (!finalEntries.length) return { failed: 'mapping' }
await agent(`Write this JSON array to ${RUN}/mappings/${MOD}.json (pretty-printed). Read back to confirm valid JSON. Return "ok".
${JSON.stringify(finalEntries, null, 2)}`,
  { label: 'map:write-manifest', phase: 'Map', model: 'sonnet' })

// ---------- Convert (waves) ----------
phase('Convert')
const CONVERT_SCHEMA = {
  type: 'object',
  properties: { written: { type: 'array', items: { type: 'string' } }, notes: { type: 'string' } },
  required: ['written'],
}
const orders = [...new Set(plan.srcFiles.map(f => f.order))].sort((a, b) => a - b)
const convertNotes = []
const BATCH_LOC = 700  // max summed upstream LOC per converter agent (per-agent overhead amortization)
const fileSpec = f => `- ${UP}/lib/${f.upstream}  ->  ${WT}/${f.target}${f.notes ? `  (notes: ${JSON.stringify(f.notes).slice(0, 400)})` : ''}${(f.siblings || []).length ? `  (siblings: ${f.siblings.join(', ')})` : ''}`
for (const ord of orders) {
  const wave = plan.srcFiles.filter(f => f.order === ord)
  const copies = wave.filter(f => f.copyMode)
  const real = wave.filter(f => !f.copyMode)
  const batches = []
  let cur = [], budget = 0
  for (const f of real) {
    const loc = f.loc || 300
    if (cur.length && budget + loc > BATCH_LOC) { batches.push(cur); cur = []; budget = 0 }
    cur.push(f); budget += loc
  }
  if (cur.length) batches.push(cur)
  if (copies.length) batches.push(copies)  // ALL copy-mode files of the wave in ONE cheap agent

  const results = await parallel(batches.map(batch => () => {
    const isCopy = batch[0].copyMode
    return agent(`Convert ${batch.length} AWS CDK ${MOD} source file(s) to TerraConstructs${isCopy ? ' in COPY MODE' : ''}.
Files (input -> output):
${batch.map(fileSpec).join('\n')}
${CTX}
Read ${RUN}/conventions-core.md as your rulebook (the full ${RUN}/conventions.md ONLY if a core rule is ambiguous for your case).
Layout plan notes: ${JSON.stringify(plan.layoutNotes).slice(0, 1200)}
${isCopy ? `COPY MODE: these files use no Cfn L1s — copy near-verbatim: add the provenance header, rewrite imports to the repo layout (cdktn, repo-relative paths per the plan), keep code and JSDoc otherwise unchanged. Note anything that forced a real change.` : `Requirements (ALL mandatory): FIRST LINE provenance header per core sheet (tag ${TAG}); hard invariants (stack-scoped naming, public readonly resource, sibling shape, marker interfaces); preserve upstream public API + JSDoc; use mapped @cdktn/provider-aws resources per the manifest with 1-to-many splits transparent.`}
Earlier-wave files exist at their plan targets — import per plan; do not duplicate already-ported code. Wire barrels only if the plan assigns it to one of your files. Do not run compiler/tests. Return written + notes.`,
      { label: `convert:${isCopy ? 'copy-batch' : batch.map(f => f.upstream.split('/').pop()).join('+').slice(0, 60)}`, phase: 'Convert', model: 'sonnet', ...(isCopy ? { effort: 'low' } : {}), schema: CONVERT_SCHEMA })
  }))
  results.filter(Boolean).forEach(r => convertNotes.push(r.notes || ''))
  if (results.filter(Boolean).length < batches.length) return { failed: `convert-wave-${ord}` }
  log(`Wave ${ord}: ${batches.length} agent(s) for ${wave.length} file(s)`)
}

// deterministic codegen step: canned metrics (if the service has them)
await agent(`Mechanical step, no creativity: check for canned metrics. Run: ls ${CFN} | grep canned-metrics. If a *-canned-metrics.generated.js exists, run:
node ${TOOLS}/gen-canned-metrics.mjs ${CFN} ${WT}/<target-dir-per-plan>/<service>-canned-metrics.generated.ts
(target dir = the plan's layout dir in ${RUN}/plans/${MOD}.json; service prefix = the js filename's). Verify the output compiles: cd ${WT} && npx tsc --noEmit -p tsconfig.json. If the module's L2 files expose metricXxx() methods, wire imports per conventions; otherwise leave it standalone. If no canned-metrics file exists, do nothing. Return written (may be empty) and notes.`,
  { label: 'convert:canned-metrics', phase: 'Convert', model: 'sonnet', effort: 'low', schema: CONVERT_SCHEMA })

// ---------- Compile loop ----------
phase('Compile')
const FIX_SCHEMA = {
  type: 'object',
  properties: { clean: { type: 'boolean' }, remainingErrors: { type: 'number' }, summary: { type: 'string' } },
  required: ['clean', 'remainingErrors', 'summary'],
}
let compileClean = false
for (let i = 1; i <= 6 && !compileClean; i++) {
  const fix = await agent(`Iteration ${i}/6 compile-fix loop in ${WT}.
Run: cd ${WT} && npx tsc --noEmit -p tsconfig.json ; if clean also: ${MISE} pnpm compile (jsii, stricter) AND ${MISE} pnpm eslint (projen --fix pass — commit-ready formatting; CI's self-mutation gate reformats anything you leave dirty).
Fix errors ONLY in newly converted files (targets in ${RUN}/plans/${MOD}.json + barrels) — adapt converted code to the codebase, never the reverse; never "fix" by removing invariants (name_prefix, public handles, marker interfaces).
Converter notes: ${JSON.stringify(convertNotes.join(' | ')).slice(0, 2000)}
Return clean (both pass), remainingErrors, summary.`,
    { label: `compile:fix-${i}`, phase: 'Compile', model: 'sonnet', schema: FIX_SCHEMA })
  if (!fix) break
  compileClean = fix.clean
  log(`Compile ${i}: ${fix.clean ? 'CLEAN' : fix.remainingErrors + ' errors'}`)
}
if (!compileClean) return { failed: 'compile' }

// ---------- Tests ----------
phase('Test')
await parallel(plan.testFiles.map(tf => () => agent(`Convert one AWS CDK ${MOD} test file to the TerraConstructs Jest suite.
Input: ${UP}/test/${tf.upstream}   →   Output: ${WT}/${tf.target}
${CTX}
Read ${RUN}/conventions-core.md as your rulebook (full conventions.md only if ambiguous). Requirements: FIRST LINE header // https://github.com/aws/aws-cdk/blob/${TAG}/packages/aws-cdk-lib/${MOD}/test/${tf.upstream} + blank line; upstream describe/test names VERBATIM (typos included); unported APIs → drop tests; unported-module features → commented import breadcrumb + omit; provider-unsupported → commented test block + reason; old CFN assertion commented beneath each new Terraform assertion; wrapping describe with toMatchSnapshot() synth tests (harness idiom: test/aws/notify/queue.test.ts + test/assertions.ts); assert terraform types/snake_case attrs per ${RUN}/mappings/${MOD}.json. Do NOT run jest. Return written + notes.`,
  { label: `test:convert:${tf.upstream}`, phase: 'Test', model: 'sonnet', schema: CONVERT_SCHEMA })))
const testTargets = plan.testFiles.map(tf => tf.target).join(' ')
let testsPass = false
for (let i = 1; i <= 6 && !testsPass; i++) {
  const fix = await agent(`Iteration ${i}/6 test-fix loop in ${WT}.
Run: cd ${WT} && ${MISE} pnpm jest --coverage=false ${testTargets}
Smoke (stay green): pick one existing test file in test/aws/${NS}/ touching shared code and run it too.
Fix src or test per failure ownership; NEVER weaken assertions to tautologies, never delete cases (test.skip + reason only), never remove stack.resolve from one side, never violate HARD INVARIANTS to pass. Inspect new snapshots for sanity (name_prefix present!). Re-check tsc if src changed.
Return clean, remainingErrors, summary.`,
    { label: `test:fix-${i}`, phase: 'Test', model: 'sonnet', schema: FIX_SCHEMA })
  if (!fix) break
  testsPass = fix.clean
  log(`Test ${i}: ${fix.clean ? 'PASSING' : fix.remainingErrors + ' failures'}`)
}

// ---------- Integ ----------
phase('Integ')
const integPort = await agent(`Port one upstream integ test to the terraconstructs integ harness in ${WT}.
Upstream: ${UPINTEG}/${plan.integChoice.upstream} (chosen: ${plan.integChoice.reason})
${CTX}
Deliverables:
1. App ${WT}/${plan.integChoice.appTarget}: FIRST LINE header // https://github.com/aws/aws-cdk/blob/${TAG}/packages/@aws-cdk-testing/framework-integ/test/${MOD}/test/${plan.integChoice.upstream} + blank line. Mirror existing apps in ${WT}/integ/aws/${NS}/apps/ exactly (env vars, LocalBackend, relative src imports, outputs for the Go validator).
2. Go validator in ${WT}/integ/aws/${NS}/: Test function + validate fn per existing patterns (filename==make-target==TestName triple); hand-mirror app literals as assertions; port validation intent from upstream integ comments as terratest checks.
3. Makefile target "${plan.integChoice.makeTarget}" mirroring existing targets.
4. Go deps: add ONLY what the validator needs (targeted go get, then go mod tidy); if tidy bumps shared transitives (aws-sdk-go-v2 core, smithy-go), note the bumps prominently — they perturb every integ suite and reviewers must see them.
Cheapest possible resources. Return written + notes.`,
  { label: 'integ:port', phase: 'Integ', model: 'sonnet', schema: CONVERT_SCHEMA })
let integSynthOk = false
if (integPort) {
  for (let i = 1; i <= 3 && !integSynthOk; i++) {
    const fix = await agent(`Iteration ${i}/3 integ synth-fix loop.
Run: cd ${WT} && ${MISE} pnpm compile ; then cd ${WT}/integ/aws/${NS} && ${MISE} make ${plan.integChoice.makeTarget}-synth-only (add SKIP_<extra-stage>=true for any non-standard stages).
GO GATE (mandatory): cd ${WT} && ${MISE} go vet ./integ/... — the Go validator must vet clean.
PROVIDER-VALIDATE GATE (mandatory — catches provider-schema violations jest cannot): cd ${WT}/integ/aws/${NS}/tf/${plan.integChoice.makeTarget} && ${MISE} tofu init -backend=false && ${MISE} tofu validate. A validate failure is a construct bug (empty required blocks, exactly-one-of violations, CFN sentinel values with no TF representation) — fix per conventions.md (ValidationError at construct time for unrepresentable semantics), never by hand-editing synthesized JSON.
Fix app/Go/Makefile (or constructs only if the error genuinely originates there; invariants still apply). Inspect the synthesized cdk.tf.json: expected resources present with stack-scoped naming. Return clean (synth + tofu validate both pass), remainingErrors, summary.`,
      { label: `integ:fix-${i}`, phase: 'Integ', model: 'sonnet', schema: FIX_SCHEMA })
    if (!fix) break
    integSynthOk = fix.clean
    log(`Integ synth ${i}: ${fix.clean ? 'OK' : fix.summary.slice(0, 120)}`)
  }
}

// ---------- Independent verify ----------
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
for (let round = 1; round <= 3 && !verifyPass; round++) {
  const v = await agent(`INDEPENDENT convention verification round ${round} for converted ${MOD} in ${WT}. The tests were pipeline-authored — catch what they cannot. Verify EVERY converted file (${RUN}/plans/${MOD}.json) against ${RUN}/conventions.md:
1. HARD INVARIANTS: every nameable TF resource uses uniqueResourceNamePrefix + *_name_prefix (never bare name); public readonly resource handles; sibling-shape (construct ids, outputs keys, PROPERTY_INJECTION_ID); marker interfaces.
2. Provenance headers: FIRST LINE, exact format, ${TAG}. PROPERTY_INJECTION_ID shape: terraconstructs.aws.<ns>[.<submodule>].<Class> — verify the submodule segment against the actual file path and a real sibling's id.
3. Test parity: spot-check 10+ names verbatim vs upstream; dropped tests must correspond to genuinely unported APIs (grep src before accepting); snapshot describes exist and .snap files contain name_prefix.
4. Tautology hunt in tests.
5. No duplication of already-ported code; barrel collision-free.
6. Integ leg: app + Go validator + Makefile target all exist per the plan's integChoice, app has its provenance header, and the naming triple (app filename == make target == Go Test name) holds.
7. TARGET-TAG SURFACE: diff exported public members of converted files against the upstream ${TAG} .d.ts next to ${CFN} — flag any ADDITION not present in the target tag (deprecated members from older tags slip in) unless the plan explicitly sanctions it.
Read actual files, snapshots, and git -C ${WT} diff — do not trust agent notes. SPLIT your findings: violations[] = BLOCKING rule breaches that must be fixed (invariant breaks, missing headers, tautologies, provider-invalid config); advisories[] = opinions/tensions per the project-intent preamble (design inconsistencies, sign-off items, DevX suggestions) — advisories do NOT fail the run and will NOT trigger a fix round; route human-judgment items there. pass = zero violations (advisories allowed). Return pass, violations, advisories, notes.`,
    { label: `verify:round-${round}`, phase: 'Verify', model: 'opus', schema: VERDICT_SCHEMA })
  if (!v) break
  verifyPass = v.pass && v.violations.length === 0
  lastViolations = v.violations
  advisories = v.advisories || []
  log(`Verify ${round}: ${verifyPass ? 'PASS' : v.violations.length + ' blocking'} (+${(v.advisories || []).length} advisory)`)
  if (!verifyPass && v.violations.length && round < 3) {
    await agent(`Fix these violations in ${WT} exactly as specified; then cd ${WT} && npx tsc --noEmit -p tsconfig.json && ${MISE} pnpm jest --coverage=false ${testTargets} (update snapshots only if emitted Terraform legitimately changed — inspect diff). No new violations.
${JSON.stringify(lastViolations, null, 2)}
Rules: ${RUN}/conventions.md. Return written + notes.`,
      { label: `verify:fix-${round}`, phase: 'Verify', model: 'sonnet', schema: CONVERT_SCHEMA })
  }
}

// mechanical: stage everything so review + downstream diffs see the full conversion
await agent(`Mechanical step: cd ${WT} && git add -A && git status --short | head -40. Confirm every converted deliverable (src, test, snapshots, integ app, Go files, Makefile) is staged — nothing untracked. Return written=[] and notes=the status summary.`,
  { label: 'stage:git-add', phase: 'Verify', model: 'sonnet', effort: 'low', schema: CONVERT_SCHEMA })

// ---------- Review ----------
phase('Review')
const REVIEW_SCHEMA = {
  type: 'object',
  properties: {
    verdict: { type: 'string' },
    apiGaps: { type: 'array', items: { type: 'string' } },
    invariantFindings: { type: 'array', items: { type: 'string' } },
    testCoverageNotes: { type: 'string' },
    pipelineIssues: { type: 'array', items: { type: 'string' } },
    reportWritten: { type: 'boolean' },
  },
  required: ['verdict', 'apiGaps', 'invariantFindings', 'pipelineIssues'],
}
const review = await agent(`Final review of the ${MOD} ${TAG} conversion in ${WT}. If a prior hand-written implementation exists in the main base repo, use it as golden reference; otherwise review against upstream + conventions.
Inputs: git -C ${WT} diff main (stat + full); upstream .d.ts next to ${CFN}; plan/mapping under ${RUN}; verify outcome pass=${verifyPass} unresolved=${JSON.stringify(lastViolations).slice(0, 1200)}; state: compile=${compileClean} tests=${testsPass} integSynth=${integSynthOk}.
Produce apiGaps, invariantFindings (your OWN spot-check of the hardest files incl. snapshots), testCoverageNotes, pipelineIssues (for the next run), and attempt to write the full markdown report to ${RUN}/report-${MOD}.md (set reportWritten). Verdict: quality, PR-readiness, what a human must review first.`,
  { label: 'review:final', phase: 'Review', model: 'opus', schema: REVIEW_SCHEMA })

return { module: MOD, mappings: finalEntries.length, compileClean, testsPass, verifyPass, unresolvedViolations: lastViolations.length, advisories: advisories.length, integ: { choice: plan.integChoice.upstream, synthOk: integSynthOk }, review }