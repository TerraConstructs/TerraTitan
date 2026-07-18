# aws-sqs conversion pipeline evaluation — run 1 (wf_732acac1-bb1)

Full AWS CDK `aws-sqs` (v2.186.0) → terraconstructs conversion against the stripped `base-sample`
worktree (branch `sqs-stripped`), executed as a dynamic Claude Code workflow with pinned models
(sonnet: discover/find/convert/fix, opus: scaffold/verify/review). 15 agents, 0 errors, ~52 min,
~1.12M subagent tokens.

## Pipeline result

| Phase | Result |
|---|---|
| Scaffold (opus) | SQS stripped, tsc + jsii compile + smoke test green, committed as reset checkpoint |
| Map (sonnet→opus) | 2 Cfn resources (CfnQueue, CfnQueuePolicy) mapped & adversarially verified → `mappings/aws-sqs.json` |
| Convert (sonnet) | queue-base / queue-policy / validate-queue-props (parallel) → queue.ts + barrel |
| Compile loop (sonnet) | clean (tsc + jsii) |
| Test loop (sonnet) | converted 999-line upstream suite passing, smoke test green |
| Review (opus) | verdict below |

## Verdict (opus reviewer)

The pipeline produced a clean-compiling, test-green, API-complete port with correct L1 Terraform
attribute mapping and intact grants/metrics wiring. (Note: the reviewer's original claim of "better
raw translation than the Mastra/Gemini baseline" is retracted — no Mastra/Gemini raw draft was
produced or compared in this run; the only comparison target was the released implementation, which
is itself Gemini output *plus* human iteration. A true baseline comparison remains unmeasured.)
But the "passing" state is **self-certified**: the generator authored the tests from
upstream CloudFormation semantics and then made its own output satisfy them, so the checks were
blind to the repo's actual invariants. Viable as a strong first-draft generator today; NOT a
drop-in replacement until the guardrails below are added.

## API fidelity vs upstream v2.186.0

- High fidelity: `fromQueueArn`, `fromQueueAttributes`, `QueueAttributes`, all `QueueProps` fields,
  `DeadLetterQueue`, `RedriveAllowPolicy`, `DeduplicationScope`, `FifoThroughputLimit`,
  `RedrivePermission`, `QueueEncryption`, `QueuePolicy`, `IQueue`, `QueueBase` + all 4 grant methods
  present with correct signatures.
- `removalPolicy` dropped — intentional platform gap (golden drops it too).
- **Regression:** `Queue.resource` made `private` (golden + all siblings: `public readonly resource:
  sqsQueue.SqsQueue`). Only compiled because downstream consumers were stripped in the eval.
- Version drift: golden tracks v2.232.2 (has `PROPERTY_INJECTION_ID`); port converted v2.186.0.

## Semantic diffs vs golden (original hand-maintained implementation)

1. **CRITICAL — physical naming convention dropped.** Golden uses
   `stack.uniqueResourceNamePrefix(this, {prefix: queueName ?? gridUUID+'-', allowedSpecialCharacters:'_-', maxLength:80})`
   → Terraform `name_prefix`. Port passes bare `name: props.queueName`. Every queue loses the
   deploy-isolation prefix the whole repo relies on.
2. **HIGH — auto-created queue policy emits SIDs** (`assignSids: true`; golden has none) — changes
   emitted policy JSON for all `addToResourcePolicy`/`enforceSSL` users.
3. **HIGH — QueuePolicy reshaped:** upstream-CFN `queues: IQueue[]` fan-out with `Resource-<i>` ids
   vs golden singular `queue: IQueue`, ids `Resource`/`Policy` → construct-path / Terraform-address
   churn (state-migration break).
4. **MEDIUM — QueueOutputs keys changed** to `{queueArn,queueUrl,queueName}` vs golden `{name,arn,url}`
   (port matches Topic sibling convention — divergence is defensible but breaks golden contract).
5. **MEDIUM — maxMessageSizeBytes ceiling 256 KiB** (v2.186.0) vs golden 1 MiB (v2.232.2); untested.
6. **LOW** — encryption auto-switch warning channel differs; marker interfaces
   (`IAwsConstructWithPolicy`, `IEncryptedResource`) dropped from declared types (runtime unaffected).
7. **Positive:** grant + metric wiring byte-identical via restored generated files.

Review-scope note (verified from the review agent transcript): the golden diff read the released
files in `~/tcons/base` directly (queue.ts, queue-base.ts, queue-policy.ts, index.ts, queue.test.ts,
topic-base.ts). KMS/encryption integration was verified from the queue side (masterKey logic in both
queue.ts versions) and via `iam/grant.ts` duck-typing (`grantOnKey`/`isEncryptedResource`), plus a
diff of the generated grants file — but `src/aws/encryption/key.ts` itself was not opened. Next run:
add `src/aws/encryption/` explicitly to the review prompt's reading list.

## Test coverage findings

- All 5 golden snapshot tests gone (scaffold deleted the `.snap`; nothing regenerated) — snapshots
  are the repo's primary defense against emitted-Terraform drift.
- Every `name_prefix`/gridUUID assertion absent — exactly why the CRITICAL regression passed green.
- Golden `maxMessageSizeBytes` boundary matrix absent.
- Fix-loop weakened one assertion into a tautology (`expect(x).toEqual(x)` after removing
  `stack.resolve` from one side).
- Net positive: upstream `fromQueueAttributes` keyArn/encryptionType + token-fifo tests added
  (golden lacks them).

## Pipeline changes required before replacing the Mastra/Gemini workflow

1. **Hard generation constraint: gridUUID naming.** Every nameable resource MUST use
   `stack.uniqueResourceNamePrefix(...)` + `*_name_prefix`, seeded with the golden physicalName
   snippet as a few-shot exemplar in conventions.md.
2. **Independent convention verification.** Don't use pipeline-authored tests as the oracle: add a
   verify phase asserting repo invariants (name_prefix presence, Outputs key shape, construct ids,
   public `resource` handle, marker interfaces) from sibling constructs — or seed the test suite
   from the sibling test, not upstream's.
3. **Pin upstream version to what the repo tracks** (resolve from existing construct headers; warn
   on mismatch). v2.186.0-into-v2.232.2 silently produced the message-size and warning-API drift.
4. **Prefer sibling/golden wrapper shape over raw upstream** for repo-specific constructs
   (QueuePolicy singular shape, Outputs keys, `assignSids`) — the converter must read `topic-policy`
   style siblings and mirror ids/shape rather than porting CFN L2 verbatim.
5. **Fix-loop guardrails:** re-derive expected values from documented behavior; auto-flag edits that
   remove `stack.resolve` from one side of an equality or converge assertions to `x===x`.
6. **Restore snapshot coverage** — include the golden set of `toMatchSnapshot()` cases in the test
   phase.

## Reproducing / iterating

- Reset: `git -C ~/tcons/base-sample reset --hard <scaffold commit>` (branch `sqs-stripped`).
- Script: workflow scripts dir, `convert-aws-sqs-eval-wf_732acac1-bb1.js`; resume with
  `resumeFromRunId: wf_732acac1-bb1` (unchanged agents replay from cache).
- Artifacts: `mappings/aws-sqs.json`, `conventions.md`, `stripped-generated/` (projen codegen files).
