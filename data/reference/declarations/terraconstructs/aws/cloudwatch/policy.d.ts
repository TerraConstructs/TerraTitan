import { cloudwatchLogResourcePolicy } from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { AwsConstructBase, AwsConstructProps } from "../aws-construct";
import { PolicyDocument, PolicyStatement } from "../iam";
/**
 * Properties to define Cloudwatch log group resource policy
 */
export interface ResourcePolicyProps extends AwsConstructProps {
    /**
     * Name of the log group resource policy
     * @default - Uses a unique id based on the construct path
     */
    readonly resourcePolicyName?: string;
    /**
     * Initial statements to add to the resource policy
     *
     * @default - No statements
     */
    readonly policyStatements?: PolicyStatement[];
}
/**
 * Resource Policy for CloudWatch Log Groups
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
    readonly resource: cloudwatchLogResourcePolicy.CloudwatchLogResourcePolicy;
    get outputs(): Record<string, any>;
    /**
     * The IAM policy document for this resource policy.
     */
    readonly document: PolicyDocument;
    constructor(scope: Construct, id: string, props?: ResourcePolicyProps);
}
