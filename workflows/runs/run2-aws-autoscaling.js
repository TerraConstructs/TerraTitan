export const meta = {
  name: 'convert-aws-autoscaling-run2',
  description: 'Run 2: AWS CDK aws-autoscaling v2.233.0 → terraconstructs compute namespace, with run-1 fixes + integ phase',
  phases: [
    { title: 'Plan', detail: 'layout/collision plan + inventory', model: 'opus' },
    { title: 'Map', detail: 'Cfn→TF mapping: sonnet find, opus verify' },
    { title: 'Convert', detail: 'src conversion, dependency-ordered', model: 'sonnet' },
    { title: 'Compile', detail: 'tsc + jsii fix loop', model: 'sonnet' },
    { title: 'Test', detail: 'test conversion + fix loop', model: 'sonnet' },
    { title: 'Verify', detail: 'independent convention/invariant verification', model: 'opus' },
    { title: 'Integ', detail: 'port integ app + Go validator + synth-only', model: 'sonnet' },
    { title: 'Review', detail: 'API fidelity + final report', model: 'opus' },
  ],
}

const WT = '/Users/vincentsmet/tcons/base-autoscaling'
const UP = '/Users/vincentsmet/tcons/upstream-aws-cdk/packages/aws-cdk-lib/aws-autoscaling'
const UPINTEG = '/Users/vincentsmet/tcons/upstream-aws-cdk/packages/@aws-cdk-testing/framework-integ/test/aws-autoscaling/test'
const RUN = '/Users/vincentsmet/tcons/conversion-run'
const CFN = '/Users/vincentsmet/tcons/conversion-run/cdklib/node_modules/aws-cdk-lib/aws-autoscaling/lib'
const PROVIDER = WT + '/node_modules/@cdktn/provider-aws/lib'
const TAG = 'v2.233.0'
const MISE = 'MISE_DISABLE_TOOLS=aws-vault mise exec --'

const CTX = `
Shared context (read BEFORE writing anything):
- Conventions incl. HARD REPO INVARIANTS (mandatory, top of file): ${RUN}/conventions.md
- Target worktree: ${WT} (branch convert-aws-autoscaling, deps installed, lib/ compiled)
- Upstream module (${TAG}): ${UP}/lib
- Cfn L1 declarations (exact ${TAG}): ${CFN}/autoscaling.generated.d.ts
- Terraform provider L1 types: ${PROVIDER}/autoscaling-* and launch-* dirs (index.d.ts each)
- Layout plan: ${RUN}/plans/aws-autoscaling.json  |  Mapping manifest: ${RUN}/mappings/aws-autoscaling.json
- Sibling exemplars for invariants: ${WT}/src/aws/notify/queue.ts (naming/physicalName), topic.ts
  (outputs shape, PROPERTY_INJECTION_ID), compute/scalable-target.ts + step-scaling-policy.ts
  (application-autoscaling twins of this module), compute/alb/ (subdir layout), compute/index.ts (barrel).
Do not modify anything outside ${WT} except files under ${RUN}. Do not read /Users/vincentsmet/tcons/base-sample.`

// ---------- Plan ----------
phase('Plan')
const PLAN_SCHEMA = {
  type: 'object',
  properties: {
    cfnResources: { type: 'array', items: { type: 'object', properties: { name: { type: 'string' }, usedIn: { type: 'array', items: { type: 'string' } } }, required: ['name', 'usedIn'] } },
    srcFiles: { type: 'array', items: { type: 'object', properties: { upstream: { type: 'string' }, target: { type: 'string' }, order: { type: 'number' }, siblings: { type: 'array', items: { type: 'string' } }, notes: { type: 'string' } }, required: ['upstream', 'target', 'order'] } },
    testFiles: { type: 'array', items: { type: 'object', properties: { upstream: { type: 'string' }, target: { type: 'string' } }, required: ['upstream', 'target'] } },
    integChoice: { type: 'object', properties: { upstream: { type: 'string' }, appTarget: { type: 'string' }, makeTarget: { type: 'string' }, reason: { type: 'string' } }, required: ['upstream', 'appTarget', 'makeTarget', 'reason'] },
    layoutNotes: { type: 'string' },
  },
  required: ['cfnResources', 'srcFiles', 'testFiles', 'integChoice', 'layoutNotes'],
}

const plan = await agent(`You are planning the conversion of AWS CDK aws-autoscaling (${TAG}) into the terraconstructs compute namespace. Produce a complete file-layout and ordering plan; converter agents will follow it verbatim.
${CTX}
(The plan file and mapping manifest named above do not exist yet — YOU produce the plan.)

Tasks:
1. Inventory ${UP}/lib (13 files + aspects/) and ${UP}/test. For each lib file identify the Cfn* L1 constructs referenced (ground truth: ${CFN}/autoscaling.generated.d.ts).
2. CRITICAL LAYOUT DECISION: compute/ already contains application-autoscaling files with COLLIDING class names and filenames (schedule.ts, step-scaling-action.ts, step-scaling-policy.ts, target-tracking-scaling-policy.ts export Schedule, StepScalingPolicy, ...). aws-cdk keeps these separate via module namespaces. Decide the repo-consistent resolution — precedent: compute/index.ts uses subdirectories with namespaced re-exports ("export * as tasks", "export * as autoscalingcommon", alb/ nlb/ lb-shared/ subdirs; notify uses "export * as targets"). Also check how upstream aws-autoscaling itself imports aws-applicationautoscaling (it does, for base-target-tracking props) and how compute/autoscaling-common is already wired (upstream aws-autoscaling-common is ALREADY ported — do not duplicate it). Decide: target subdirectory (e.g. src/aws/compute/asg/ or auto-scaling/), barrel wiring, and jsii-safe export strategy with ZERO class-name collisions in the flat barrel. jsii constraint: "export * as" submodule exports are the established pattern in this repo — confirm by reading compute/index.ts fully.
3. Assign each upstream lib file a target path and a conversion order (leaves first; files converted in the same order number must not import each other). Note per-file which existing sibling files each converter should read.
4. Map each upstream test file to a target test path mirroring the src layout.
5. Choose ONE upstream integ test from ${UPINTEG} (list the integ.*.ts files) for the Integ phase: pick the SIMPLEST/CHEAPEST that still exercises a real AutoScalingGroup with launch template (avoid deprecated launch configurations, avoid multi-AZ heavy fixtures, prefer minimal instance counts/types). Read the top 2-3 candidates before choosing. appTarget = integ/aws/compute/apps/<name>.ts; makeTarget = the make target name.
6. Write the full plan as JSON to ${RUN}/plans/aws-autoscaling.json (create dir), then return the same content.

In layoutNotes include: chosen dir + export strategy, collision resolutions, how ASG's step-scaling/target-tracking/schedule relate to (and must NOT duplicate) the existing application-autoscaling files, and anything converters must know (e.g. volume.ts vs existing compute/volume.ts if it exists — check!).`,
  { label: 'plan:layout', phase: 'Plan', model: 'opus', schema: PLAN_SCHEMA })

if (!plan) return { failed: 'plan' }
log(`Plan: ${plan.srcFiles.length} src files, ${plan.testFiles.length} test files, ${plan.cfnResources.length} Cfn resources; integ=${plan.integChoice.upstream}; ${plan.layoutNotes.slice(0, 200)}`)

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
  cfn => agent(`Find terraform-provider-aws equivalent(s) for CloudFormation resource ${cfn.name} (used in ${cfn.usedIn.join(', ')} of aws-autoscaling ${TAG}).
Ground truth: ${cfn.name}Props in ${CFN}/autoscaling.generated.d.ts (Cfn side); Config interfaces in ${PROVIDER}/<candidate>/index.d.ts (TF side — candidates: autoscaling-group, autoscaling-policy, autoscaling-lifecycle-hook, autoscaling-schedule, autoscaling-attachment, autoscaling-traffic-source-attachment, autoscaling-group-tag, autoscaling-notification, launch-template, launch-configuration).
One Cfn resource may map to MULTIPLE TF resources (nested Cfn props that are standalone TF resources — e.g. notifications, attachments, warm pools). For each mapped resource state its role. In attributeNotes list Cfn props with no direct TF attribute (+ handling), and shape/casing/unit mismatches (durations, percentages, JSON, MixedInstancesPolicy nesting).`,
    { label: `map:find:${cfn.name}`, phase: 'Map', model: 'sonnet', schema: MAP_SCHEMA }),
  (mapping, cfn) => agent(`Adversarially verify this Cfn→Terraform mapping for ${cfn.name}:
${JSON.stringify(mapping, null, 2)}
Check attribute-by-attribute against ${CFN}/autoscaling.generated.d.ts and ${PROVIDER}/<resource>/index.d.ts. Hunt for: missing 1-to-many splits (warm pool! notifications! traffic source attachments!), wrong resource choices, attribute gaps, unit/format mismatches, MixedInstancesPolicy/instance-refresh/instance-maintenance-policy nesting differences. Correct anything wrong. Return approved (true only if complete as-corrected), finalMappingJson (corrected entry, same shape), notes.`,
    { label: `map:verify:${cfn.name}`, phase: 'Map', model: 'opus', schema: VERIFY_SCHEMA })
)

const finalEntries = entries.filter(Boolean).map(e => JSON.parse(e.finalMappingJson))
if (!finalEntries.length) return { failed: 'mapping' }
await agent(`Write this JSON array to ${RUN}/mappings/aws-autoscaling.json (pretty-printed, create/overwrite, no other changes). Read it back to confirm valid JSON. Return "ok".
${JSON.stringify(finalEntries, null, 2)}`,
  { label: 'map:write-manifest', phase: 'Map', model: 'sonnet' })
log(`${finalEntries.length} verified mappings written`)

// ---------- Convert src (ordered waves) ----------
phase('Convert')
const CONVERT_SCHEMA = {
  type: 'object',
  properties: { written: { type: 'array', items: { type: 'string' } }, notes: { type: 'string' } },
  required: ['written'],
}

const orders = [...new Set(plan.srcFiles.map(f => f.order))].sort((a, b) => a - b)
const convertNotes = []
for (const ord of orders) {
  const wave = plan.srcFiles.filter(f => f.order === ord)
  const results = await parallel(wave.map(f => () => agent(`Convert one AWS CDK aws-autoscaling source file to TerraConstructs.
Input: ${UP}/lib/${f.upstream}   →   Output: ${WT}/${f.target}
${CTX}
Layout plan notes: ${JSON.stringify(plan.layoutNotes).slice(0, 1500)}
Per-file plan notes: ${JSON.stringify(f.notes || '')}
Siblings to mirror for shape/invariants: ${(f.siblings || []).join(', ') || 'per CTX list'}

Requirements (ALL mandatory):
- FIRST LINE provenance header: // https://github.com/aws/aws-cdk/blob/${TAG}/packages/aws-cdk-lib/aws-autoscaling/lib/${f.upstream}  then one blank line.
- HARD REPO INVARIANTS from conventions.md: gridUUID uniqueResourceNamePrefix + *_name_prefix (never bare name), public readonly resource L1 handle, sibling shape over raw upstream (construct ids, outputs keys, PROPERTY_INJECTION_ID), marker interfaces preserved.
- Preserve upstream public API + JSDoc verbatim where Terraform semantics allow; note forced changes in comments.
- Use mapped @cdktn/provider-aws resources per the manifest; 1-to-many splits transparent inside the construct.
- Files already converted in earlier waves exist at their plan target paths — import from them per the plan. Do NOT duplicate anything already ported (autoscaling-common, application-autoscaling files) — import per the plan's layout.
- Update barrels ONLY if the plan assigns that to your file (last-wave files wire the barrel per layoutNotes).
- Do not run compiler/tests (later phase). Return written + notes.`,
    { label: `convert:${f.upstream}`, phase: 'Convert', model: 'sonnet', schema: CONVERT_SCHEMA })))
  results.filter(Boolean).forEach(r => convertNotes.push(r.notes || ''))
  if (results.filter(Boolean).length < wave.length) return { failed: `convert-wave-${ord}`, wave: wave.map(f => f.upstream) }
  log(`Wave ${ord} converted: ${wave.map(f => f.upstream).join(', ')}`)
}

// ---------- Compile loop ----------
phase('Compile')
const FIX_SCHEMA = {
  type: 'object',
  properties: { clean: { type: 'boolean' }, remainingErrors: { type: 'number' }, summary: { type: 'string' } },
  required: ['clean', 'remainingErrors', 'summary'],
}
let compileClean = false
for (let i = 1; i <= 6 && !compileClean; i++) {
  const fix = await agent(`Iteration ${i}/6 compile-fix loop for the converted aws-autoscaling module in ${WT}.
Run: cd ${WT} && npx tsc --noEmit -p tsconfig.json ; if clean also: ${MISE} pnpm compile (jsii — stricter: JSDoc on all public API, exported types only).
Fix errors ONLY in the newly converted files (paths in ${RUN}/plans/aws-autoscaling.json srcFiles targets + barrel edits) — adapt converted code to the existing codebase, never the reverse. Honor the HARD REPO INVARIANTS in ${RUN}/conventions.md while fixing (never "fix" by removing name_prefix logic, public resource handles, or marker interfaces).
Converter notes: ${JSON.stringify(convertNotes.join(' | ')).slice(0, 2000)}
Return clean (true only if BOTH pass), remainingErrors, summary.`,
    { label: `compile:fix-${i}`, phase: 'Compile', model: 'sonnet', schema: FIX_SCHEMA })
  if (!fix) break
  compileClean = fix.clean
  log(`Compile ${i}: ${fix.clean ? 'CLEAN' : fix.remainingErrors + ' errors'}`)
}
if (!compileClean) return { failed: 'compile', plan: plan.layoutNotes }

// ---------- Tests ----------
phase('Test')
const testResults = await parallel(plan.testFiles.map(tf => () => agent(`Convert one AWS CDK aws-autoscaling test file to the TerraConstructs Jest suite.
Input: ${UP}/test/${tf.upstream}   →   Output: ${WT}/${tf.target}
${CTX}
Requirements (ALL mandatory):
- FIRST LINE provenance header: // https://github.com/aws/aws-cdk/blob/${TAG}/packages/aws-cdk-lib/aws-autoscaling/test/${tf.upstream}  then blank line.
- Copy upstream describe/test name strings VERBATIM (typos included). Convert ALL cases. Unported upstream APIs → drop those tests. Features blocked on unported modules → commented import breadcrumb + omit tests. terraform-provider-unsupported features → commented test block with a reason line.
- Keep the old CloudFormation assertion commented beneath each new Terraform assertion.
- Add a wrapping describe block with toMatchSnapshot() synth tests (repo pattern — see test/aws/notify/queue.test.ts and test/aws/compute/scalable-target.test.ts for harness idiom, AwsStack setup, Template helpers from test/assertions.ts).
- Assert terraform resource types/snake_case attributes per ${RUN}/mappings/aws-autoscaling.json.
- Do NOT run jest. Return written + notes.`,
  { label: `test:convert:${tf.upstream}`, phase: 'Test', model: 'sonnet', schema: CONVERT_SCHEMA })))
const testTargets = plan.testFiles.map(tf => tf.target).join(' ')
let testsPass = false
for (let i = 1; i <= 6 && !testsPass; i++) {
  const fix = await agent(`Iteration ${i}/6 test-fix loop in ${WT}.
Run: cd ${WT} && ${MISE} pnpm jest --coverage=false ${testTargets}
Smoke (must stay green): ${MISE} pnpm jest --coverage=false test/aws/compute/scalable-target.test.ts
Fix by editing converted src/test files. Judge each failure: wrong Terraform expectation → fix test; wrong emitted config → fix construct. NEVER weaken assertions to tautologies, never delete test cases (test.skip + reason only, sparingly), never remove stack.resolve from one side of an equality, and NEVER violate the HARD REPO INVARIANTS (${RUN}/conventions.md) to make a test pass. New snapshots: first run writes them — inspect emitted Terraform for sanity (name_prefix present!) before accepting. If src changed, re-check npx tsc --noEmit -p tsconfig.json.
Return clean (all listed tests + smoke + tsc green), remainingErrors, summary.`,
    { label: `test:fix-${i}`, phase: 'Test', model: 'sonnet', schema: FIX_SCHEMA })
  if (!fix) break
  testsPass = fix.clean
  log(`Test ${i}: ${fix.clean ? 'PASSING' : fix.remainingErrors + ' failures'}`)
}

// ---------- Independent convention verify ----------
phase('Verify')
const VERDICT_SCHEMA = {
  type: 'object',
  properties: {
    pass: { type: 'boolean' },
    violations: { type: 'array', items: { type: 'object', properties: { file: { type: 'string' }, rule: { type: 'string' }, detail: { type: 'string' } }, required: ['file', 'rule', 'detail'] } },
    notes: { type: 'string' },
  },
  required: ['pass', 'violations'],
}
let verifyPass = false
let lastViolations = []
for (let round = 1; round <= 3 && !verifyPass; round++) {
  const v = await agent(`INDEPENDENT convention verification round ${round} for the converted aws-autoscaling module in ${WT}. You did not write this code; your job is to catch what its own tests cannot (the tests were pipeline-authored). Verify EVERY converted file (list: srcFiles/testFiles targets in ${RUN}/plans/aws-autoscaling.json) against ${RUN}/conventions.md:
1. HARD INVARIANTS: grep every nameable TF resource construction — uniqueResourceNamePrefix + *_name_prefix used, never bare name; public readonly resource handles; sibling-shape (construct ids, outputs getter keys vs topic.ts/queue.ts pattern, PROPERTY_INJECTION_ID present like siblings); marker interfaces preserved vs upstream/sibling pattern.
2. Provenance headers: FIRST LINE of every converted src/test file, exact format, ${TAG} tag.
3. Test parity: spot-check 10+ test names verbatim vs ${UP}/test files; check dropped tests correspond to genuinely unported APIs (grep the src for the API before accepting a drop); check snapshot describe blocks exist and snapshots contain name_prefix (read the .snap files).
4. Tautology hunt: grep converted tests for assertions comparing a value to itself or missing stack.resolve on one side.
5. No duplication of existing application-autoscaling/autoscaling-common code; barrel wiring collision-free (check compute/index.ts diff).
Read the actual synthesized snapshots and git diff (git -C ${WT} diff --stat main) — do not trust agent notes. Return pass (zero violations), violations[] (file, rule, detail — precise and actionable), notes.`,
    { label: `verify:round-${round}`, phase: 'Verify', model: 'opus', schema: VERDICT_SCHEMA })
  if (!v) break
  verifyPass = v.pass
  lastViolations = v.violations
  log(`Verify round ${round}: ${v.pass ? 'PASS' : v.violations.length + ' violations'}`)
  if (!v.pass && round < 3) {
    await agent(`Fix these convention violations in ${WT} exactly as specified, then re-run: cd ${WT} && npx tsc --noEmit -p tsconfig.json && ${MISE} pnpm jest --coverage=false ${testTargets} (update snapshots if emitted Terraform legitimately changed — inspect the diff). Violations:
${JSON.stringify(lastViolations, null, 2)}
Rules reference: ${RUN}/conventions.md. Do not introduce new invariant violations while fixing. Return written + notes.`,
      { label: `verify:fix-${round}`, phase: 'Verify', model: 'sonnet', schema: CONVERT_SCHEMA })
  }
}

// ---------- Integ ----------
phase('Integ')
const integPort = await agent(`Port one upstream integ test to the terraconstructs integ harness in ${WT}.
Upstream integ app: ${UPINTEG}/${plan.integChoice.upstream} (reason chosen: ${plan.integChoice.reason})
${CTX}
Deliverables:
1. App: ${WT}/${plan.integChoice.appTarget} — FIRST LINE header // https://github.com/aws/aws-cdk/blob/${TAG}/packages/@aws-cdk-testing/framework-integ/test/aws-autoscaling/test/${plan.integChoice.upstream} + blank line. Mirror existing apps' idiom EXACTLY (read ${WT}/integ/aws/compute/apps/instance.ts and launch-template.ts): env vars ENVIRONMENT_NAME/AWS_REGION/OUT_DIR/STACK_NAME, LocalBackend, relative ../../../../src imports, TerraformOutput or registerOutputs for values the Go validator needs.
2. Go validator: add Test function + validate fn following ${WT}/integ/aws/compute/compute_test.go patterns (runComputeIntegrationTest naming-triple convention). Hand-mirror the app's literals as assertions (min/max/desired capacity, instance type). Port any validation intent encoded in the upstream integ file's comments/assertions as terratest checks.
3. Makefile target: add "${plan.integChoice.makeTarget}" to ${WT}/integ/aws/compute/Makefile mirroring existing targets (go test -run ^Test<Name>$).
Constraints: cheapest possible resources (smallest instance type the upstream scenario permits, min capacity, single AZ if the pattern allows), no deprecated launch configurations if the plan chose a launch-template scenario. Return written + notes.`,
  { label: 'integ:port', phase: 'Integ', model: 'sonnet', schema: CONVERT_SCHEMA })

let integSynthOk = false
if (integPort) {
  for (let i = 1; i <= 3 && !integSynthOk; i++) {
    const fix = await agent(`Iteration ${i}/3 integ synth-fix loop.
Run: cd ${WT} && ${MISE} pnpm compile   (lib/ must include the new constructs)
Then: cd ${WT}/integ/aws/compute && ${MISE} make ${plan.integChoice.makeTarget}-synth-only
(If extra non-standard stages exist for this target, also set the corresponding SKIP_<stage>=true.)
Fix failures in the app file, Go test, Makefile, or (only if the error genuinely originates there) the converted constructs — invariants from ${RUN}/conventions.md still apply. Inspect the synthesized ${WT}/integ/aws/compute/tf/${plan.integChoice.makeTarget}/cdk.tf.json: it must contain the expected autoscaling resources WITH name_prefix. Return clean (synth passes + expected resources present), remainingErrors, summary.`,
      { label: `integ:fix-${i}`, phase: 'Integ', model: 'sonnet', schema: FIX_SCHEMA })
    if (!fix) break
    integSynthOk = fix.clean
    log(`Integ synth ${i}: ${fix.clean ? 'OK' : fix.summary.slice(0, 120)}`)
  }
}

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
const review = await agent(`Final review of workflow run 2 (aws-autoscaling ${TAG} → ${WT}). No golden reference exists (module was absent from base) — review against upstream and repo conventions instead.
Inputs: git -C ${WT} diff --stat main and the full diff; upstream public API ${CFN}/../*.d.ts (auto-scaling-group.d.ts etc. in ${CFN}/..); plan ${RUN}/plans/aws-autoscaling.json; mapping ${RUN}/mappings/aws-autoscaling.json; verify-phase outcome: pass=${verifyPass}, unresolved=${JSON.stringify(lastViolations).slice(0, 1500)}; pipeline state: compileClean=${compileClean}, testsPass=${testsPass}, integSynthOk=${integSynthOk}.
Produce: 1) apiGaps — upstream public API members missing/renamed/retyped (read the upstream .d.ts, diff mentally vs converted); 2) invariantFindings — your OWN independent spot-check of the hard invariants on the 3 most complex files (auto-scaling-group, warm-pool, lifecycle-hook) incl. reading snapshots for name_prefix; 3) testCoverageNotes — dropped/skipped/weakened vs upstream suite; 4) pipelineIssues — actionable prompt/phase improvements for run 3; 5) attempt to write the full markdown report to ${RUN}/report-run2.md (set reportWritten accordingly — if writing fails, put everything in the returned fields).
Verdict: one paragraph — conversion quality, readiness for PR to terraconstructs/base, what a human must review first.`,
  { label: 'review:final', phase: 'Review', model: 'opus', schema: REVIEW_SCHEMA })

return {
  plan: plan.layoutNotes.slice(0, 300),
  mappings: finalEntries.length,
  compileClean, testsPass, verifyPass,
  unresolvedViolations: lastViolations.length,
  integ: { choice: plan.integChoice.upstream, synthOk: integSynthOk },
  review,
}