# Run 3 — aws-secretsmanager v2.233.0 eval vs PR #117 (wf_fa953533-d4f)

Blind conversion (agents forbidden from reading PR #117/base) into `encryption`, evaluated against
the reference PR afterward. 24 agents, 2.50M tokens, 94 min. Branch `convert-aws-secretsmanager`
(~/tcons/base-secretsmanager, commit 00ec4cf). All gates green (54 tests, 3 snapshots, integ synth
+ tofu validate; go vet + git-stage done manually post-run — both now in-pipeline).

## Headline: the Map phase passed the composition probe

Blind, the pipeline mapped `CfnSecretTargetAttachment` to a composition
(`aws_secretsmanager_secret_version` + target-resource family) instead of hallucinating a
nonexistent TF resource, and independently derived the zero-duration-rotation `ValidationError`
that PR #117 only gained after external review.

## Adjudication vs PR #117 @7cf5c24 (opus, "reference is not an oracle" framing)

- **attach() design: reference decisively better.** Pipeline's eager-version + throw-if-version
  guard inverts the model: `new Secret().attach(db)` (the canonical pattern) throws, and the
  imported-only path clobbers AWSCURRENT with connection fields, dropping the credential. The
  reference's lazy-single-version + `jsonencode(merge(...))` matches upstream semantics.
  → codified as the interaction-protocol rule (plan must design multi-construct protocols
  explicitly, preserve upstream's primary usage pattern, opus-verified before conversion).
- **SecretValue surface: tie.** Reference's string stubs = plaintext in TF state without upstream's
  no-plaintext guarantee (quiet security downgrade); pipeline's clean drop loses DevX. Keep the
  drop until a real core.SecretValue/ephemeral-resource port.
- **generate_secret_string defaults & recoveryWindow: reference better.** Pin the two load-bearing
  password defaults; pipeline over-dropped recoveryWindow (a plain provider number needing no
  RemovalPolicy machinery).
- **Parity with the reference's post-review fixes:** zero-duration ✅ (independently derived);
  imported-connectionFields guard N/A (inverted model); partial-ARN fix ❌ (but faithful to
  upstream v2.233, which also lacks it — reference is stricter-than-upstream).
- **Landing recommendation:** reference's attach/version/recoveryWindow core + pipeline's v2.233
  breadth and `secret-rotation.ts` additions, minus the reference's SecretValue stub.

## Pipeline fixes derived (all landed in convert-module.js, 70d77c52)

Integ before Verify (kills false "unresolved"); `go vet ./integ/...` gate; target-tag surface
check (deprecated members leaked in runs 2 AND 3); git-stage step before Review.
