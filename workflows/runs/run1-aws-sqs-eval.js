export const meta = {
  name: 'convert-aws-sqs-eval',
  description: 'Full AWS CDK aws-sqs → terraconstructs conversion pipeline against stripped base-sample, pinned sonnet/opus models',
  phases: [
    { title: 'Scaffold', detail: 'strip SQS from base-sample until compile+smoke green', model: 'opus' },
    { title: 'Map', detail: 'Cfn→terraform-provider-aws mapping: sonnet find, opus verify' },
    { title: 'Convert', detail: 'per-file src conversion into notify namespace', model: 'sonnet' },
    { title: 'Compile', detail: 'iterate until tsc + jsii compile pass', model: 'sonnet' },
    { title: 'Test', detail: 'convert unit tests, iterate until jest passes', model: 'sonnet' },
    { title: 'Review', detail: 'API fidelity + golden diff vs original implementation', model: 'opus' },
  ],
}

const WT = '/Users/vincentsmet/tcons/base-sample'
const UP = '/Users/vincentsmet/tcons/upstream-aws-cdk/packages/aws-cdk-lib/aws-sqs'
const RUN = '/Users/vincentsmet/tcons/conversion-run'
const CFN_DECLS = '/Users/vincentsmet/tcons/terratitan/apps/core/node_modules/aws-cdk-lib/aws-sqs/lib'
const PROVIDER = WT + '/node_modules/@cdktn/provider-aws/lib'

const INTEGRITY = `
EVALUATION INTEGRITY — STRICTLY FORBIDDEN:
- Do NOT read anything under /Users/vincentsmet/tcons/base (the original repo clone — it contains the reference answer).
- Do NOT use git history of ${WT} to view deleted/old queue files (no git show/log -p/stash for notify queue files).
- Do NOT read /Users/vincentsmet/tcons/terratitan/data/samples (contains a golden aws-sqs conversion).
Violating this invalidates the evaluation. Work only from the inputs listed above.`

const CONVERT_CTX = `
Shared context (read these BEFORE writing code):
- Conventions (mandatory rules): ${RUN}/conventions.md
- Target worktree (write here): ${WT}
- Upstream AWS CDK aws-sqs source: ${UP}/lib/
- AWS CDK L1 (CfnQueue etc.) type declarations: ${CFN_DECLS}/sqs.generated.d.ts
- Terraform provider L1 types (cdktn): ${PROVIDER}/sqs-queue/index.d.ts, ${PROVIDER}/sqs-queue-policy/index.d.ts, ${PROVIDER}/sqs-queue-redrive-policy/index.d.ts, ${PROVIDER}/sqs-queue-redrive-allow-policy/index.d.ts
- Verified Cfn→TF mapping manifest: ${RUN}/mappings/aws-sqs.json
- Style exemplars (the SNS module is the closest analog — mirror its idioms exactly): ${WT}/src/aws/notify/topic.ts and its topic-* siblings, plus ${WT}/src/aws/notify/index.ts for barrel wiring.
${INTEGRITY}`

// ---------- Phase: Scaffold (opus) + Map (sonnet/opus) run concurrently ----------
phase('Scaffold')

const SCAFFOLD_SCHEMA = {
  type: 'object',
  properties: {
    compileClean: { type: 'boolean' },
    smokeTestClean: { type: 'boolean' },
    committed: { type: 'boolean' },
    deleted: { type: 'array', items: { type: 'string' } },
    modified: { type: 'array', items: { type: 'string' } },
    notes: { type: 'string' },
  },
  required: ['compileClean', 'smokeTestClean', 'committed'],
}

const scaffoldThunk = () => agent(`You are preparing an evaluation scaffold in the git worktree ${WT} (branch sqs-stripped, deps already installed). Goal: remove ALL SQS/Queue functionality so the aws-sqs module can be re-converted from scratch into it, and the repo still compiles and tests green without it.

Steps:
1. mkdir -p ${RUN}/stripped-generated and MOVE (not delete) these two projen-codegen files there: ${WT}/src/aws/notify/sqs-augmentations.generated.ts and ${WT}/src/aws/notify/sqs-grants.generated.ts.
2. Delete the SQS-owned files: src/aws/notify/{queue.ts,queue-base.ts,queue-policy.ts}, test/aws/notify/queue.test.ts.
3. Delete SQS-specific leaf files (verify each is SQS-specific before deleting): src/aws/notify/subscriptions/sqs.ts, src/aws/notify/targets/sqs.ts, src/aws/storage/notification-targets/queue.ts, src/aws/compute/function-destinations/sqs.ts, src/aws/compute/event-sources/sqs.ts, src/aws/compute/event-sources/sqs-dlq.ts, src/aws/compute/tasks/sqs/ (whole dir), test/aws/notify/targets/sqs.test.ts.
4. Strip Queue/IQueue usage from all remaining referencing files — grep exhaustively (grep -rn "IQueue\\|queue-base\\|/queue\\|sqs" src test — judge each hit; some "queue" hits may be unrelated). Known referencing files: src/aws/notify/{event-bus.ts,subscription.ts,subscriptions/subscription.ts,target.ts,targets/event-bus.ts,targets/util.ts,topic.ts,index.ts}, src/aws/storage/{bucket.ts,notification-targets/index.ts}, src/aws/compute/{function.ts,function-base.ts,event-source-mapping.ts} plus any barrels (index.ts files) exporting deleted files, and tests test/aws/notify/targets/{event-rule-target.test.ts,function.test.ts}. Remove queue-related props/members/branches/test-cases surgically; keep everything else intact.
5. Iterate until green: (a) npx tsc --noEmit -p tsconfig.json, (b) if test/tsconfig.json exists: npx tsc --noEmit -p test/tsconfig.json, (c) pnpm compile (authoritative jsii build), (d) smoke test: pnpm jest --coverage=false test/aws/notify/topic.test.ts (adjust that test only to remove SQS-subscription cases if present). Fix and re-run until all pass.
6. Commit everything on the sqs-stripped branch: git add -A && git commit -m "chore: strip SQS for aws-sqs conversion eval". This commit is the reset point for iterative testing.

Do not modify anything outside ${WT} except creating ${RUN}/stripped-generated. Do not touch /Users/vincentsmet/tcons/base (the original).

Return: compileClean, smokeTestClean, committed, deleted (paths), modified (paths), notes (anything a converter agent must know about the stripped state).`,
  { label: 'scaffold:strip-sqs', phase: 'Scaffold', model: 'opus', schema: SCAFFOLD_SCHEMA })

// ---------- Map ----------
const MAP_SCHEMA = {
  type: 'object',
  properties: {
    cfnResource: { type: 'string' },
    tfResources: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          terraformType: { type: 'string' },
          providerImportDir: { type: 'string' },
          role: { type: 'string' },
        },
        required: ['terraformType', 'providerImportDir', 'role'],
      },
    },
    oneToMany: { type: 'boolean' },
    attributeNotes: { type: 'string' },
    confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
  },
  required: ['cfnResource', 'tfResources', 'oneToMany', 'attributeNotes', 'confidence'],
}

const VERIFY_SCHEMA = {
  type: 'object',
  properties: {
    approved: { type: 'boolean' },
    finalMappingJson: { type: 'string' },
    notes: { type: 'string' },
  },
  required: ['approved', 'finalMappingJson'],
}

const DISCOVER_SCHEMA = {
  type: 'object',
  properties: {
    cfnResources: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          usedIn: { type: 'array', items: { type: 'string' } },
        },
        required: ['name', 'usedIn'],
      },
    },
  },
  required: ['cfnResources'],
}

const mapThunk = async () => {
  const discovered = await agent(`Read the AWS CDK aws-sqs L2 module source at ${UP}/lib/ (queue.ts, queue-base.ts, policy.ts, validate-queue-props.ts, index.ts). Identify every CloudFormation L1 construct (Cfn*) the module instantiates or references (imported from ./sqs.generated). For each, list which source files use it. Return the list.`,
    { label: 'map:discover-cfn', phase: 'Map', model: 'sonnet', schema: DISCOVER_SCHEMA })

  if (!discovered || !discovered.cfnResources.length) throw new Error('no Cfn resources discovered')
  log(`Cfn resources: ${discovered.cfnResources.map(r => r.name).join(', ')}`)

  const entries = await pipeline(
    discovered.cfnResources,
    cfn => agent(`Find the terraform-provider-aws equivalent(s) for the CloudFormation resource ${cfn.name} (used in ${cfn.usedIn.join(', ')} of the AWS CDK aws-sqs module).

Ground truth sources:
- ${cfn.name} property surface: ${CFN_DECLS}/sqs.generated.d.ts (read the ${cfn.name}Props interface).
- Available terraform provider resources (cdktn typescript L1s): directories under ${PROVIDER}/ — SQS-related candidates include sqs-queue, sqs-queue-policy, sqs-queue-redrive-policy, sqs-queue-redrive-allow-policy, data-aws-sqs-queue; read their index.d.ts Config interfaces.
- Optional prose docs: /Users/vincentsmet/tcons/terratitan/data/reference/docs/provider-aws/ (may be an older provider version — the .d.ts files above are authoritative).

A single Cfn resource may map to MULTIPLE terraform resources (nested CFN properties often become standalone TF resources — e.g. redrive policies). For each mapped TF resource state its role. In attributeNotes, list Cfn properties that have no direct TF attribute (and how to handle them) and TF attributes that differ in shape/casing/semantics (e.g. JSON-string policies, seconds-vs-duration units).
${INTEGRITY}`,
      { label: `map:find:${cfn.name}`, phase: 'Map', model: 'sonnet', schema: MAP_SCHEMA }),
    (mapping, cfn) => agent(`Adversarially verify this proposed CloudFormation→Terraform resource mapping for ${cfn.name}:

${JSON.stringify(mapping, null, 2)}

Check it attribute-by-attribute against ground truth: ${CFN_DECLS}/sqs.generated.d.ts (Cfn side) and the Config interfaces in ${PROVIDER}/<resource>/index.d.ts (TF side). Actively look for: missing 1-to-many splits (nested Cfn props that are standalone TF resources), wrong resource choices, attribute gaps not listed in attributeNotes, unit/format mismatches (durations, JSON policy documents, KMS key formats). Correct anything wrong.

Return approved (true only if the mapping as-corrected is complete), finalMappingJson (the corrected mapping entry as a JSON string, same shape as the input), and notes.
${INTEGRITY}`,
      { label: `map:verify:${cfn.name}`, phase: 'Map', model: 'opus', schema: VERIFY_SCHEMA })
  )

  const finalEntries = entries.filter(Boolean).map(e => JSON.parse(e.finalMappingJson))
  const writer = await agent(`Write this JSON array to the file ${RUN}/mappings/aws-sqs.json (create it, pretty-printed, no other changes anywhere):

${JSON.stringify(finalEntries, null, 2)}

Then read the file back to confirm it is valid JSON. Return "ok" when done.`,
    { label: 'map:write-manifest', phase: 'Map', model: 'sonnet' })
  return { entries: finalEntries, writer }
}

const [scaffold, mapping] = await parallel([scaffoldThunk, mapThunk])

if (!scaffold || !scaffold.compileClean || !scaffold.smokeTestClean) {
  return { failed: 'scaffold', scaffold }
}
if (!mapping || !mapping.entries.length) {
  return { failed: 'mapping', mapping }
}
log(`Scaffold green (committed: ${scaffold.committed}); ${mapping.entries.length} verified Cfn mappings`)

// ---------- Convert ----------
phase('Convert')

const CONVERT_SCHEMA = {
  type: 'object',
  properties: {
    written: { type: 'array', items: { type: 'string' } },
    notes: { type: 'string' },
  },
  required: ['written'],
}

const scaffoldNotes = scaffold.notes ? `\nScaffold notes about the stripped state: ${scaffold.notes}` : ''

const convertPrompt = (upFile, targetFile, extra) => `Convert one AWS CDK source file to TerraConstructs.

Input: ${UP}/lib/${upFile}
Output: write ${WT}/src/aws/notify/${targetFile}
${CONVERT_CTX}${scaffoldNotes}

Requirements:
- Preserve the full public API and JSDoc of the upstream file (class names, prop names, method signatures) unless a mapped Terraform difference forces a change — note any such change in a comment.
- Swap Cfn* L1 usage for the mapped @cdktn/provider-aws resources per the manifest; handle 1-to-many splits transparently inside the construct.
- Follow every rule in conventions.md (AwsConstructBase, outputs getter, Lazy.*Value, errors, no aws-cdk-lib imports).
${extra}
- Aim for code that compiles under the repo tsconfig, but do NOT run the compiler or tests — a later phase does that. You may read any file in ${WT} for API reference.

Return written (file paths you wrote) and notes (decisions/uncertainties the fixer and reviewer should know).`

const baseConvert = await parallel([
  () => agent(convertPrompt('queue-base.ts', 'queue-base.ts', `- FIRST: copy the preserved codegen files back: cp ${RUN}/stripped-generated/sqs-grants.generated.ts ${RUN}/stripped-generated/sqs-augmentations.generated.ts ${WT}/src/aws/notify/. Read them — your queue-base.ts must define IQueue/QueueBase such that those files compile against it (queue-base imports QueueGrants from ./sqs-grants.generated exactly as the grants file's interface expects; the augmentations file declare-module-merges metric methods into ./queue-base). Mirror how the upstream aws-cdk queue-base.ts wires grants/metrics, adapted to those two files.`),
    { label: 'convert:queue-base', phase: 'Convert', model: 'sonnet', schema: CONVERT_SCHEMA }),
  () => agent(convertPrompt('policy.ts', 'queue-policy.ts', `- The repo names this file queue-policy.ts (kebab, resource-scoped). It may import types from ./queue-base which is being converted concurrently by another agent — code against the upstream queue-base.ts public API (IQueue etc.) and the repo conventions; do not wait for or read the in-progress queue-base.ts.`),
    { label: 'convert:queue-policy', phase: 'Convert', model: 'sonnet', schema: CONVERT_SCHEMA }),
  () => agent(convertPrompt('validate-queue-props.ts', 'validate-queue-props.ts', `- Small validation helper; keep it private (not exported from the barrel unless upstream exports it). It may reference QueueProps from ./queue being converted separately — mirror upstream's import shape.`),
    { label: 'convert:validate-props', phase: 'Convert', model: 'sonnet', schema: CONVERT_SCHEMA }),
])

if (baseConvert.filter(Boolean).length < 3) return { failed: 'convert-stage-1', baseConvert }

const queueConvert = await agent(convertPrompt('queue.ts', 'queue.ts', `- The sibling files queue-base.ts, queue-policy.ts, validate-queue-props.ts have already been converted — read them in ${WT}/src/aws/notify/ and import from them consistently (fix their minor inconsistencies only if an import/type mismatch blocks queue.ts; note what you changed).
- AFTER writing queue.ts, update the barrel ${WT}/src/aws/notify/index.ts to export the new files and wire the generated files exactly as before stripping: import "./sqs-augmentations.generated"; export * from "./sqs-grants.generated"; plus exports for queue-base, queue, queue-policy (mirror how topic/topic-policy are exported).`),
  { label: 'convert:queue', phase: 'Convert', model: 'sonnet', schema: CONVERT_SCHEMA })

if (!queueConvert) return { failed: 'convert-queue', baseConvert }
log('Source conversion written: ' + [...baseConvert, queueConvert].filter(Boolean).flatMap(r => r.written).join(', '))

// ---------- Compile loop ----------
phase('Compile')

const FIX_SCHEMA = {
  type: 'object',
  properties: {
    clean: { type: 'boolean' },
    remainingErrors: { type: 'number' },
    summary: { type: 'string' },
  },
  required: ['clean', 'remainingErrors', 'summary'],
}

let compileClean = false
let compileSummary = ''
for (let i = 1; i <= 5 && !compileClean; i++) {
  const fix = await agent(`Iteration ${i}/5 of the compile-fix loop for the freshly converted aws-sqs module in ${WT}.

Run: cd ${WT} && npx tsc --noEmit -p tsconfig.json
If clean, also run: pnpm compile   (authoritative jsii build — fix its errors too; jsii is stricter: all public API needs JSDoc, exported types only, etc.)

Fix errors ONLY by editing the converted/restored files (src/aws/notify/queue*.ts, validate-queue-props.ts, index.ts, sqs-*.generated.ts wiring) — if an error implicates other files, prefer adapting the converted files to the existing codebase, not the reverse. Re-run after fixing until clean or you run out of distinct strategies for a stubborn error.

Context if needed: ${RUN}/conventions.md, mapping manifest ${RUN}/mappings/aws-sqs.json, converter notes: ${JSON.stringify([...baseConvert, queueConvert].filter(Boolean).map(r => r.notes || '').join(' | ')).slice(0, 2000)}
${INTEGRITY}

Return clean (true only if BOTH tsc and pnpm compile exit 0), remainingErrors (count), summary (what you fixed / what still fails and why).`,
    { label: `compile:fix-${i}`, phase: 'Compile', model: 'sonnet', schema: FIX_SCHEMA })
  if (!fix) break
  compileClean = fix.clean
  compileSummary = fix.summary
  log(`Compile iteration ${i}: ${fix.clean ? 'CLEAN' : fix.remainingErrors + ' errors left'}`)
}

// ---------- Test conversion + loop ----------
phase('Test')

const testConvert = await agent(`Convert the AWS CDK aws-sqs unit test file to the TerraConstructs test suite.

Input: ${UP}/test/sqs.test.ts (999 lines — convert ALL test cases; skip-with-comment only per conventions).
Output: write ${WT}/test/aws/notify/queue.test.ts
${CONVERT_CTX}
- Primary exemplar for harness/assertion idiom: ${WT}/test/aws/notify/topic.test.ts and ${WT}/test/assertions.ts.
- The converted source now lives at ${WT}/src/aws/notify/queue*.ts — read it; assert against the terraform resource types from the mapping manifest with snake_case attributes.
- Do NOT run jest — a later phase does that.

Return written and notes.`,
  { label: 'test:convert', phase: 'Test', model: 'sonnet', schema: CONVERT_SCHEMA })

let testsPass = false
let testSummary = ''
if (testConvert) {
  for (let i = 1; i <= 5 && !testsPass; i++) {
    const fix = await agent(`Iteration ${i}/5 of the test-fix loop for the converted aws-sqs module in ${WT}.

Run: cd ${WT} && pnpm jest --coverage=false test/aws/notify/queue.test.ts
Also keep the smoke test green: pnpm jest --coverage=false test/aws/notify/topic.test.ts

Fix failures by editing the converted files (src/aws/notify/queue*.ts, validate-queue-props.ts, test/aws/notify/queue.test.ts). Judge each failure: if the TEST's expectation is wrong for Terraform semantics, fix the test; if the CONSTRUCT emits wrong config, fix the construct. Preserve upstream test intent — do not weaken assertions just to pass, and do not delete test cases (test.skip with a reason comment is the only allowed escape hatch, use sparingly). If source changes are needed, re-check compile with npx tsc --noEmit -p tsconfig.json.
Test converter notes: ${JSON.stringify((testConvert.notes || '')).slice(0, 1500)}
${INTEGRITY}

Return clean=true only if both jest runs pass and tsc is clean; remainingErrors = failing test count; summary.`,
      { label: `test:fix-${i}`, phase: 'Test', model: 'sonnet', schema: FIX_SCHEMA })
    if (!fix) break
    testsPass = fix.clean
    testSummary = fix.summary
    log(`Test iteration ${i}: ${fix.clean ? 'PASSING' : fix.remainingErrors + ' failures left'}`)
  }
}

// ---------- Review (opus) ----------
phase('Review')

const REVIEW_SCHEMA = {
  type: 'object',
  properties: {
    verdict: { type: 'string' },
    apiGaps: { type: 'array', items: { type: 'string' } },
    semanticDiffs: { type: 'array', items: { type: 'string' } },
    testCoverageNotes: { type: 'string' },
    pipelineIssues: { type: 'array', items: { type: 'string' } },
  },
  required: ['verdict', 'apiGaps', 'semanticDiffs', 'pipelineIssues'],
}

const review = await agent(`You are the final reviewer of an automated AWS CDK → TerraConstructs conversion evaluation. The integrity restriction is lifted FOR YOU ONLY: you may now read the original implementation.

Converted output (in worktree ${WT}): src/aws/notify/{queue.ts,queue-base.ts,queue-policy.ts,validate-queue-props.ts,index.ts}, test/aws/notify/queue.test.ts. Use git diff against the scaffold commit in ${WT} to see exactly what the pipeline produced.
Upstream source: ${UP}/lib and ${UP}/test/sqs.test.ts. Upstream public API: ${CFN_DECLS}/queue.d.ts, queue-base.d.ts, policy.d.ts.
GOLDEN REFERENCE (original hand-maintained implementation): /Users/vincentsmet/tcons/base/src/aws/notify/{queue.ts,queue-base.ts,queue-policy.ts} and /Users/vincentsmet/tcons/base/test/aws/notify/queue.test.ts.
Pipeline state: compileClean=${compileClean} (${JSON.stringify(compileSummary).slice(0, 500)}), testsPass=${testsPass} (${JSON.stringify(testSummary).slice(0, 500)}).

Produce:
1. API fidelity: every public class/prop/method in upstream aws-sqs missing, renamed, or type-changed in the conversion (apiGaps).
2. Golden diff: semantic differences vs the original implementation — behavior, terraform resources/attributes emitted, validation, grants/metrics wiring (semanticDiffs). Ignore pure style.
3. Test coverage: upstream test cases dropped/skipped/weakened (testCoverageNotes).
4. Pipeline issues: everything the PIPELINE itself did poorly — mapping errors that survived verification, convention violations, fix-loop hacks that weakened code — as actionable improvements to prompts/phases (pipelineIssues).
5. Write the full report as markdown to ${RUN}/report.md.
Overall verdict: one paragraph — is this pipeline viable to replace the Mastra/Gemini workflow, and what must change first.`,
  { label: 'review:golden-diff', phase: 'Review', model: 'opus', schema: REVIEW_SCHEMA })

return {
  scaffold: { compileClean: scaffold.compileClean, committed: scaffold.committed },
  mappings: mapping.entries.length,
  compileClean,
  testsPass,
  review,
}