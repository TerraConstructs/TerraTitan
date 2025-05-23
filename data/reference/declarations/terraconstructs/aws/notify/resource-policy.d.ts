import { Construct } from "constructs";
import { AwsConstructBase, AwsConstructProps } from "../aws-construct";
import { IStream } from "./kinesis-stream";
import { PolicyDocument } from "../iam";
/**
 * Properties to associate a data stream with a policy
 */
export interface ResourcePolicyProps extends AwsConstructProps {
    /**
     * The stream this policy applies to.
     */
    readonly stream: IStream;
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
export declare class ResourcePolicy extends AwsConstructBase {
    /**
     * The IAM policy document for this policy.
     */
    readonly document: PolicyDocument;
    get outputs(): Record<string, any>;
    constructor(scope: Construct, id: string, props: ResourcePolicyProps);
}
