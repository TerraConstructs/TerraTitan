# Run 5 — servicediscovery controlled A/B: granularity optimizations vs run 4 (wf_eb18e4fe-58f)

Identical module/tag/namespace/inputs as run 4; only the pipeline changed (LOC-batched converters
@700-LOC budget, copy-mode batch at low effort, advisory/blocking verify split, conventions-core
slim sheet). Measurement-integrity guard: agents forbidden from reading run-4 output/PR #118.

## A/B result — win on both axes

| | Run 4 (tools, per-file) | Run 5 (tools + granularity) | Δ |
|---|---|---|---|
| Tokens | 2,459,813 | 1,944,815 | **−21%** |
| Agents | 35 | 30 | −14% |
| tok/agent | 70.3k | 64.8k | −8% |
| Duration | 98 min | 74 min | **−25%** |
| Blocking violations | 0 (3 advisory, conflated) | 0 (**5 advisories, cleanly split**) | ✓ |
| Correctness defects (review) | 0 | 0 | ✓ |

**Quality: run 5 is a STRICT IMPROVEMENT over run 4** (opus A/B-diffed both): correct
`PROPERTY_INJECTION_ID` (run 4 dropped the `.cloudmap.` submodule segment — a real bug that
shipped to PR #118 and is now fixed there), more faithful `Names.uniqueId` idiom
(`AwsStack.uniqueId` incl. the upstream alias-target truncation asymmetry), service↔instance
cycle via `import type`, `instanceId` normalized (closed a run-4 checkbox), + a
`fromServiceAttributes` round-trip test. Zero regressions.

Cumulative tooling effect vs the tool-less baseline on this module shape: run 4 tok/agent already
−33% vs runs 2/3; run 5 adds −21% total on top of run 4. The granularity levers are validated.

## PR #118 updated

Force-pushed to run-5 output (superseding a CI self-mutation commit on the run-4 code — bot
formatting only, no human work lost) + a local `pnpm eslint --fix` pass so CI mutation stays
quiet. PR comment documents the delta and two new reviewer flags: imported namespaces expose
`namespaceHostedZoneId === ""` (repo-introduced typed-outputs divergence — upstream Imports never
expose it), and `go mod tidy` transitive bumps (aws-sdk-go-v2, smithy-go) touching all integ suites.

## Remaining pipeline follow-ups (landed in convert-module.js cb16d269)

eslint gate in the compile loop (pipeline output must be commit-ready; CI self-mutation exposed
the gap); from*Attributes scaffold per-STATIC (run 5 covered 1 of 4); go.mod churn surfacing;
injection-id shape check in Verify. Open policy question for humans (also on PR #118): the
outputs-convention template (typed interfaces everywhere vs simplified) — decide once, template it.

## aws-ecs readiness

Granularity levers validated → pipeline is ready for the 45-file module. Cost estimate at run-5
efficiency: roughly 6–10M tokens (ecs upstream lib+test is ~5x servicediscovery's LOC with larger
files, which batch well). Blocked on user go-ahead per directive.
