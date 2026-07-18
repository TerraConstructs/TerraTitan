# TerraTitan — Claude Code native (`claude-native` orphan branch)

Rewrite of the TerraTitan conversion pipeline (AWS CDK L2 → [TerraConstructs/base](https://github.com/terraconstructs/base))
as a **Claude Code dynamic workflow**, replacing the Mastra/Gemini/RAG stack on `main`.

## Why this replaces main

| main (Mastra) | this branch |
|---|---|
| Mastra workflow engine + LibSQL state | Claude Code `Workflow` script; state = committed JSON artifacts + resumable run journal |
| RAG: Upstash Vector (147MB) + OpenAI embeddings + Gemini 2.5 Pro 2-shot generation | Sonnet agents grep ground-truth `.d.ts` (Cfn + `@cdktn/provider-aws`); Opus agents adversarially verify |
| Blocking human-in-the-loop (CLI suspend → inquirerjs → resume) | Async review of committed mapping manifests + PR diffs |
| Secrets: Gemini + OpenAI + Upstash keys | None (Claude Code session only) |
| 2-shot generation, manual fixup | Iterate-until-green loops: compile (tsc+jsii) → jest → independent convention verify → integ synth |
| Ports src+test only | Ports **src + test + integ** (terratest app + Go validator + Makefile target) |
| Stale snapshots of cdktf 0.21 / provider-aws 20.x `.d.ts` | Reads live types from base's `node_modules` (cdktn) — staleness class eliminated |

## Layout

- `conventions.md` — the conversion rulebook: **HARD REPO INVARIANTS** (gridUUID `name_prefix`
  naming, public L1 handles, sibling-shape-over-upstream, marker interfaces), provenance headers,
  test-name parity, generated-file policy, integ porting rules. Single source of truth for all
  converter/verifier agents.
- `workflows/convert-module.js` — the generalized, parameterized workflow (run via Claude Code
  `Workflow` tool with `args`). Phases: Plan (opus) → Map (sonnet find / opus verify) → Convert
  (sonnet, dependency waves) → Compile loop → Test loop → **independent convention Verify** (opus,
  not pipeline-authored tests) → Integ port + synth-only → Review (opus). Models are PINNED per
  agent — never inherited.
- `workflows/runs/` — the exact scripts of historical runs (provenance).
- `mappings/` — verified Cfn→terraform-provider-aws manifests (committed = reusable + PR-reviewable).
- `plans/` — per-module layout/ordering plans (collision resolution, file targets, conversion waves).
- `reports/` — per-run review reports (opus final reviewer).
- `samples/` — curated golden conversion pairs (from main's `data/samples`), used as eval fixtures.

## Running a conversion

Prereqs: a clone/worktree of `terraconstructs/base` with `pnpm install` + `pnpm compile` done; a
sparse clone of `aws/aws-cdk` at the tag base tracks (newest provenance-header tag in base, e.g.
`v2.233.0`) including `packages/aws-cdk-lib/<module>` and
`packages/@aws-cdk-testing/framework-integ/test/<module>`; `npm i aws-cdk-lib@<tag>` somewhere for
exact Cfn `.d.ts`. Then invoke the Workflow tool with `workflows/convert-module.js` and args (see
header comment in the script).

Integ live cycle (post-synth, optional): `cd base/integ/aws/<ns> && MISE_DISABLE_TOOLS=aws-vault
aws-vault exec --no-session <profile> -- mise exec -- make <target>`.

## History

- **Run 1** (`aws-sqs` eval, 2026-07-18): full pipeline against a SQS-stripped base worktree;
  compile+test green autonomously; opus golden-diff vs the released implementation exposed the
  self-certification failure mode (gridUUID naming dropped, sibling-shape misses) → codified as the
  HARD REPO INVARIANTS + independent Verify phase. See `reports/report-run1-aws-sqs.md`.
- **Run 2** (`aws-autoscaling` v2.233.0, 2026-07-19): first production conversion with the upgraded
  pipeline + Integ phase. Target chosen by dependency analysis: all prereqs already ported; sole
  gate on EC2-backed ECS. Path onward: aws-secretsmanager → aws-servicediscovery → aws-ecs →
  aws-batch. See `reports/report-run2-aws-autoscaling.md`.
