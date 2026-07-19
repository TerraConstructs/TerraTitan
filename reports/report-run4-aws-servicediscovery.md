# Run 4 — aws-servicediscovery v2.233.0, tooling A/B (wf_c603b0b9-6a9)

First run with deterministic tooling (cfn-scan, gen-canned-metrics, copy-mode) + the run-3
structural fixes. Target namespace `edge/cloudmap/` (Plan validated the edge choice). 35 agents,
2.46M tokens, 98 min. Branch `convert-aws-servicediscovery` (~/tcons/base-servicediscovery),
all deliverables staged in-pipeline.

## Measurement vs tool-less baselines

| Run | Module | Upstream LOC | Tokens | Agents | tok/LOC | tok/agent |
|---|---|---|---|---|---|---|
| 2 (no tools) | aws-autoscaling | 8,829 | 4.39M | 45 | 497 | 97.6k |
| 3 (no tools) | aws-secretsmanager | 4,929 | 2.50M | 24 | 507 | 104.2k |
| 4 (tools) | aws-servicediscovery | 2,547 | 2.46M | 35 | **966** | **70.3k** |

**Token goal (≤350 tok/LOC): MISSED — but the diagnosis is precise.** Per-agent tokens dropped 33%
(the tooling worked: plan matched cfn-scan exactly, no LLM inventory burn), but agent COUNT grew
46% on a module half run-3's size — because fan-out is per-FILE and servicediscovery has 12 small
lib files (avg ~110 LOC) vs secretsmanager's 5 (avg ~265). Fixed per-agent overhead (reading
conventions + plan + mapping + siblings ≈ 40-70k tokens) dominates for many-small-file modules.
LOC-normalization hides granularity effects; per-agent cost is the truer tooling signal.

## Accuracy goals: ALL MET (the co-equal objective)

1. Plan Cfn inventory == cfn-scan output exactly (5/5, none invented) ✅
2. No false "unresolved violations": Verify ran after Integ; final pass=true with 3 ADVISORY
   flags (lenient-but-opinionated preamble working as designed) ✅
3. Zero unsanctioned deprecated-member additions (target-tag gate passed; runs 2+3 both leaked) ✅
4. Everything green in-pipeline, zero post-run manual fixes (go vet + git-stage gates worked;
   0 untracked files) ✅
5. Review: **"No correctness defects found"** — first run with zero correctness findings; 3
   sign-offs, all cosmetic/coverage (outputs-convention drift, auto-name default, missing
   from*Attributes tests) ✅
6. Copy-mode exercised (namespace.ts, private/utils.ts, instance.ts classified PURE_L2) ✅

## Optimizations proposed for run 5 (attack the granularity overhead)

1. **Batch small files**: one converter agent per wave-batch of small files (<~150 LOC), and ALL
   copy-mode files in a single cheap agent — could have cut ~8 agents here.
2. **Advisory/blocking split in the Verify schema** so advisory-only rounds don't trigger fixer
   agents (rounds 1-2 fixers may have partly chased advisories).
3. **Per-role conventions excerpts** — conventions.md has grown; a slim converter-core sheet could
   cut 10-20k tokens per agent.
4. **attr-diff tool** (TOOLS.md #1) — the remaining Map-phase burn.

## Review sign-offs for humans (all cosmetic)

Outputs-convention applied 3 different ways across 9 files (standardize before it becomes the
template); sign off deploy-visible auto-generated Service.name default; add from*Attributes
round-trip tests (recurring generator gap — scaffold one whenever a from*Attributes static is
emitted); normalize `.id` vs `.instanceId` on AliasTargetInstance.
