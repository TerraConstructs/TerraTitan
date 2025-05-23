import { s3BucketPolicy } from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { AwsConstructProps, AwsConstructBase } from "../aws-construct";
import { IBucket } from "./bucket";
import { PolicyDocument } from "../iam";
export interface BucketPolicyProps extends AwsConstructProps {
    /**
     * The Amazon S3 bucket that the policy applies to.
     */
    readonly bucket: IBucket;
}
/**
 * The bucket policy for an Amazon S3 bucket
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
 * The bucket policy method is implemented differently than `addToResourcePolicy()`
 * as `BucketPolicy()` creates a new policy without knowing one earlier existed.
 * e.g. if during Bucket creation, if `autoDeleteObject:true`, these policies are
 * added to the bucket policy:
 *    ["s3:DeleteObject*", "s3:GetBucket*", "s3:List*", "s3:PutBucketPolicy"],
 * and when you add a new BucketPolicy with ["s3:GetObject", "s3:ListBucket"] on
 * this existing bucket, invoking `BucketPolicy()` will create a new Policy
 * without knowing one earlier exists already, so it creates a new one.
 * In this case, the custom resource handler will not have access to
 * `s3:GetBucketTagging` action which will cause failure during deletion of stack.
 *
 * Hence its strongly recommended to use `addToResourcePolicy()` method to add
 * new permissions to existing policy.
 *
 */
export declare class BucketPolicy extends AwsConstructBase {
    readonly resource: s3BucketPolicy.S3BucketPolicy;
    get outputs(): Record<string, any>;
    /**
     * A policy document containing permissions to add to the specified bucket.
     * For more information, see Access Policy Language Overview in the Amazon
     * Simple Storage Service Developer Guide.
     */
    readonly document: PolicyDocument;
    /** The Bucket this Policy applies to. */
    readonly bucket: IBucket;
    constructor(scope: Construct, id: string, props: BucketPolicyProps);
}
