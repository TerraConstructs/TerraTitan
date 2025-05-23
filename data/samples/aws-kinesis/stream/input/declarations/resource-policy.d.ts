import { Construct } from 'constructs';
import { IStream } from './stream';
import { IStreamConsumer } from './stream-consumer';
import { PolicyDocument } from '../../aws-iam';
import { Resource } from '../../core';
/**
 * Properties to associate a data stream with a policy
 */
export interface ResourcePolicyProps {
    /**
     * The stream this policy applies to.
     *
     * Note: only one of `stream` and `streamConsumer` must be set.
     *
     * @default - policy is not associated to a stream
     */
    readonly stream?: IStream;
    /**
     * The stream consumer this policy applies to.
     *
     * Note: only one of `stream` and `streamConsumer` must be set.
     *
     * @default - policy is not associated to a consumer
     */
    readonly streamConsumer?: IStreamConsumer;
    /**
     * IAM policy document to apply to a data stream.
     *
     * @default - empty policy document
     */
    readonly policyDocument?: PolicyDocument;
}
/**
 * The policy for a data stream or registered consumer.
 *
 * Policies define the operations that are allowed on this resource.
 *
 * You almost never need to define this construct directly.
 *
 * All AWS resources that support resource policies have a method called
 * `addToResourcePolicy()`, which will automatically create a new resource
 * policy if one doesn't exist yet, otherwise it will add to the existing
 * policy.
 *
 * Prefer to use `addToResourcePolicy()` instead.
 */
export declare class ResourcePolicy extends Resource {
    /**
     * The IAM policy document for this policy.
     */
    readonly document: PolicyDocument;
    constructor(scope: Construct, id: string, props: ResourcePolicyProps);
    private createResourcePolicy;
}
