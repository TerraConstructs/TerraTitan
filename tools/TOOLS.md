# Deterministic tooling for the conversion workflow

Principle (from run-1/run-2 retrospectives): wherever agents burn tokens on **mechanical,
deterministic work** — inventory, lookup, codegen, parity checks — a small script is more
token-efficient, more reliable, and more accurate. LLM effort is reserved for judgment:
API design, Terraform-model deviations, test intent, review. (The old Mastra workflow
over-tooled the wrong part — RAG/embeddings for lookup an agent greps in seconds — while
under-tooling the mechanical parts. This is the inversion.)

## Shipped

### `cfn-scan.mjs` — upstream module inventory (feeds Plan + Map)
`node cfn-scan.mjs <module-lib-dir> --ts <dir-with-node_modules/typescript>`
TypeScript-AST scan producing JSON: per-file Cfn* references (the mapping work-list),
intra-module import graph → topological conversion waves, cross-module deps (namespace
prerequisites), and a classification with direct workflow consequences:
- `L1_BACKED` — real conversion needed (swaps Cfn for provider resources)
- `PURE_L2` — composes only other L2s/utilities → **near-verbatim copy candidate**: adjust
  imports + provenance header, `tsc` it, cheap spot-check — no full LLM conversion
- `BARREL` — index re-exports
Validated on aws-autoscaling: reproduces run-2's LLM-derived inventory (12 Cfn refs, waves,
5/12 files PURE_L2) in ~1 second.

### `gen-canned-metrics.mjs` — canned-metrics recovery (feeds Convert)
`node gen-canned-metrics.mjs <aws-cdk-lib-module-lib-dir> <out-file.ts>`
Reconstructs `<service>-canned-metrics.generated.ts` from a BUILT aws-cdk-lib npm install
(.d.ts signatures + .js values). These files are aws-cdk build-time codegen: absent from the
aws-cdk git tree, present only in the published bundle — run 2 missed autoscaling's because
the pipeline only looked at the git checkout. Output is normalized (duplicate identical
overloads deduped) and matches the house format; validated against base's dynamodb file
(differences limited to legacy duplicate-overload blocks and upstream version drift).

## Proposed (build when the next run's token profile justifies each)

1. **`attr-diff.mjs`** — parse `Cfn<X>Props` (aws-cdk-lib .d.ts) and the provider `<x>Config`
   (@cdktn/provider-aws .d.ts), emit a field-level diff: matched (with casing map), Cfn-only
   (mapping gap — candidate ValidationError/composition), TF-only (defaults/sentinels to
   audit — the run-2 `-1` sentinel class). Feeds Map find/verify, which today re-reads both
   .d.ts files agent-by-agent; biggest projected token saver after cfn-scan.
2. **`test-name-diff.mjs`** — extract `describe`/`test` titles from upstream and converted
   suites (AST), diff → machine-checked test-name parity + dropped-test list with the src-grep
   evidence rule applied. Replaces the Verify phase's manual spot-checks with full coverage.
3. **`header-lint.mjs`** — provenance-header presence/format/tag check over converted
   src/test/integ files (the rules in conventions.md). Trivial; removes a whole verify class.
4. **`dead-member-lint`** — flag private/protected members with no remaining callers in
   converted files (run-2's elided-branch `warn()` case). Possibly just an eslint rule
   (`no-unused-private-class-members` covers private; protected needs a small script).
5. **`copy-check`** — for PURE_L2 copy-mode files: normalized AST diff between upstream and
   converted file (imports/header stripped) to prove "near-verbatim" mechanically; a haiku
   spot-check only where the diff is non-empty.
