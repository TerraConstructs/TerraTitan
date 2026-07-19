# Stack integration — PRs #118 → #119 → #120, #117 superseded (wf_ff5e6c46-ea3)

9 agents, 795k tokens, 57 min. Linear chain verified: main ⊂ #118 (servicediscovery, edcd1e6)
⊂ #119 (autoscaling, 2bfac98) ⊂ #120 (secretsmanager-combined, f9d2357). Gates clean,
adjudication verification PASS (0 blocking, 3 advisories — all resolved or informational).
PR #117 CLOSED with credit (its attach() composition design is #120's adopted core).

## What each PR contains

- **#118** — servicediscovery run-5 output (+ CI self-mutation commit). Already CLEAN.
- **#119** — autoscaling rebased onto #118 head (5 commits; go.mod union re-tidied; eslint pass;
  cross-suite jest proved the stack composes; sign-offs #4/#5 from run-2 fixed on-branch).
- **#120** — the adjudicated combination executed: #117's attach/lazy-version/recoveryWindow/
  password-defaults/partial-ARN core + run-3's v2.233 breadth + secret-rotation.ts; SecretValue
  stubs dropped from both pending core.SecretValue. Source-attribution table in the PR body.
  Verified: `new Secret().attach(target)` works on an owned secret with a passing test; the attach
  app emits exactly ONE aws_secretsmanager_secret_version whose secret_string preserves the base
  credential via jsonencode(merge(...)). Both integ apps `tofu validate`: Success (run manually
  post-workflow; the in-workflow gate lacked the plugin-cache env).

## Merge playbook (bottom-up, merge-commit ONLY)

1. Wait for build checks on #119/#120 (pending at handoff; #118 CLEAN). Don't merge a failing build.
2. Merge #118 → branch auto-deletes → GitHub auto-retargets #119 to main (diff collapses to
   autoscaling only; confirm MERGEABLE).
3. Merge #119 → auto-retarget #120 → merge #120.
4. NEVER 'Rebase and merge' (rewrites SHAs, forces 3-way go.mod re-tidy per step; squash already
   disabled repo-wide).
5. `go mod tidy` ONCE on main after #120, then full `go build ./...` + `go vet ./integ/...` —
   the aws-sdk-go-v2 1.41→1.42.1 / smithy-go 1.24→1.27.3 bumps touch EVERY integ suite and
   per-PR checks don't exercise the whole tree.
6. Cut the aws-ecs worktree from UPDATED main after all three land + the re-tidy — never from a
   stacked branch.

## Open items before/alongside merging

- **Outputs-convention policy** (typed interfaces everywhere vs simplified) — decide once and
  template it BEFORE cutting aws-ecs, or 45 files will compound the drift. Includes the imported
  `namespaceHostedZoneId === ""` divergence (flagged on #118).
- Housekeeping after merge: prune superseded worktrees/branches (base-servicediscovery-run5,
  base-secretsmanager, base-pr117; base-servicediscovery already pruned).

## Preflight findings worth remembering

- CI self-mutation added a commit on #118 even after a local eslint pass — the mutation gate does
  more than eslint --fix; always stack on origin heads, not local tips.
- The workspace accumulated parallel incompatible implementations sharing folders (run-4 vs run-5
  servicediscovery; run-3 vs PR-117 secretsmanager) — preflight caught both and stacked only the
  canonical lineages. Prune superseded branches promptly to keep this class of hazard down.
