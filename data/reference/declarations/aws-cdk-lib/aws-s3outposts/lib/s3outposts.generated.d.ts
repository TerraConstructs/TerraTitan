import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The AWS::S3Outposts::AccessPoint resource specifies an access point and associates it with the specified Amazon S3 on Outposts bucket.
 *
 * For more information, see [Managing data access with Amazon S3 access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html) .
 *
 * > S3 on Outposts supports only VPC-style access points.
 *
 * @cloudformationResource AWS::S3Outposts::AccessPoint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html
 */
export declare class CfnAccessPoint extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAccessPoint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAccessPoint;
    /**
     * This resource contains the details of the S3 on Outposts bucket access point ARN. This resource is read-only.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The Amazon Resource Name (ARN) of the S3 on Outposts bucket that is associated with this access point.
     */
    bucket: string;
    /**
     * The name of this access point.
     */
    name: string;
    /**
     * The access point policy associated with this access point.
     */
    policy?: any | cdk.IResolvable;
    /**
     * The virtual private cloud (VPC) configuration for this access point, if one exists.
     */
    vpcConfiguration: cdk.IResolvable | CfnAccessPoint.VpcConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAccessPointProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAccessPoint {
    /**
     * Contains the virtual private cloud (VPC) configuration for the specified access point.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-accesspoint-vpcconfiguration.html
     */
    interface VpcConfigurationProperty {
        /**
         * Virtual Private Cloud (VPC) Id from which AccessPoint will allow requests.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-accesspoint-vpcconfiguration.html#cfn-s3outposts-accesspoint-vpcconfiguration-vpcid
         */
        readonly vpcId?: string;
    }
}
/**
 * Properties for defining a `CfnAccessPoint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html
 */
export interface CfnAccessPointProps {
    /**
     * The Amazon Resource Name (ARN) of the S3 on Outposts bucket that is associated with this access point.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html#cfn-s3outposts-accesspoint-bucket
     */
    readonly bucket: string;
    /**
     * The name of this access point.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html#cfn-s3outposts-accesspoint-name
     */
    readonly name: string;
    /**
     * The access point policy associated with this access point.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html#cfn-s3outposts-accesspoint-policy
     */
    readonly policy?: any | cdk.IResolvable;
    /**
     * The virtual private cloud (VPC) configuration for this access point, if one exists.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-accesspoint.html#cfn-s3outposts-accesspoint-vpcconfiguration
     */
    readonly vpcConfiguration: cdk.IResolvable | CfnAccessPoint.VpcConfigurationProperty;
}
/**
 * The AWS::S3Outposts::Bucket resource specifies a new Amazon S3 on Outposts bucket.
 *
 * To create an S3 on Outposts bucket, you must have S3 on Outposts capacity provisioned on your Outpost. For more information, see [Using Amazon S3 on Outposts](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) .
 *
 * S3 on Outposts buckets support the following:
 *
 * - Tags
 * - Lifecycle configuration rules for deleting expired objects
 *
 * For a complete list of restrictions and Amazon S3 feature limitations on S3 on Outposts, see [Amazon S3 on Outposts Restrictions and Limitations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3OnOutpostsRestrictionsLimitations.html) .
 *
 * @cloudformationResource AWS::S3Outposts::Bucket
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html
 */
export declare class CfnBucket extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBucket from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBucket;
    /**
     * Returns the ARN of the specified bucket.
     *
     * Example: `arn:aws:s3Outposts:::DOC-EXAMPLE-BUCKET`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * A name for the S3 on Outposts bucket.
     */
    bucketName: string;
    /**
     * Creates a new lifecycle configuration for the S3 on Outposts bucket or replaces an existing lifecycle configuration.
     */
    lifecycleConfiguration?: cdk.IResolvable | CfnBucket.LifecycleConfigurationProperty;
    /**
     * The ID of the Outpost of the specified bucket.
     */
    outpostId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Sets the tags for an S3 on Outposts bucket. For more information, see [Using Amazon S3 on Outposts](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) .
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBucketProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnBucket {
    /**
     * The container for the lifecycle configuration for the objects stored in an S3 on Outposts bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-lifecycleconfiguration.html
     */
    interface LifecycleConfigurationProperty {
        /**
         * The container for the lifecycle configuration rules for the objects stored in the S3 on Outposts bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-lifecycleconfiguration.html#cfn-s3outposts-bucket-lifecycleconfiguration-rules
         */
        readonly rules: Array<cdk.IResolvable | CfnBucket.RuleProperty> | cdk.IResolvable;
    }
    /**
     * A container for an Amazon S3 on Outposts bucket lifecycle rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html
     */
    interface RuleProperty {
        /**
         * The container for the abort incomplete multipart upload rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-abortincompletemultipartupload
         */
        readonly abortIncompleteMultipartUpload?: CfnBucket.AbortIncompleteMultipartUploadProperty | cdk.IResolvable;
        /**
         * Specifies the expiration for the lifecycle of the object by specifying an expiry date.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-expirationdate
         */
        readonly expirationDate?: string;
        /**
         * Specifies the expiration for the lifecycle of the object in the form of days that the object has been in the S3 on Outposts bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-expirationindays
         */
        readonly expirationInDays?: number;
        /**
         * The container for the filter of the lifecycle rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-filter
         */
        readonly filter?: any | cdk.IResolvable;
        /**
         * Unique identifier for the lifecycle rule.
         *
         * The value can't be longer than 255 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-id
         */
        readonly id?: string;
        /**
         * If `Enabled` , the rule is currently being applied.
         *
         * If `Disabled` , the rule is not currently being applied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-rule.html#cfn-s3outposts-bucket-rule-status
         */
        readonly status: string;
    }
    /**
     * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 on Outposts waits before permanently removing all parts of the upload.
     *
     * For more information, see [Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-abortincompletemultipartupload.html
     */
    interface AbortIncompleteMultipartUploadProperty {
        /**
         * Specifies the number of days after initiation that Amazon S3 on Outposts aborts an incomplete multipart upload.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-abortincompletemultipartupload.html#cfn-s3outposts-bucket-abortincompletemultipartupload-daysafterinitiation
         */
        readonly daysAfterInitiation: number;
    }
    /**
     * The container for the filter of the lifecycle rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filter.html
     */
    interface FilterProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filter.html#cfn-s3outposts-bucket-filter-andoperator
         */
        readonly andOperator?: CfnBucket.FilterAndOperatorProperty | cdk.IResolvable;
        /**
         * Prefix identifies one or more objects to which the rule applies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filter.html#cfn-s3outposts-bucket-filter-prefix
         */
        readonly prefix?: string;
        /**
         * Tag used to identify a subset of objects for an Amazon S3Outposts bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filter.html#cfn-s3outposts-bucket-filter-tag
         */
        readonly tag?: CfnBucket.FilterTagProperty | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filterandoperator.html
     */
    interface FilterAndOperatorProperty {
        /**
         * Prefix identifies one or more objects to which the rule applies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filterandoperator.html#cfn-s3outposts-bucket-filterandoperator-prefix
         */
        readonly prefix?: string;
        /**
         * All of these tags must exist in the object's tag set in order for the rule to apply.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filterandoperator.html#cfn-s3outposts-bucket-filterandoperator-tags
         */
        readonly tags: Array<CfnBucket.FilterTagProperty>;
    }
    /**
     * Tag used to identify a subset of objects for an Amazon S3Outposts bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filtertag.html
     */
    interface FilterTagProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filtertag.html#cfn-s3outposts-bucket-filtertag-key
         */
        readonly key: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-bucket-filtertag.html#cfn-s3outposts-bucket-filtertag-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnBucket`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html
 */
export interface CfnBucketProps {
    /**
     * A name for the S3 on Outposts bucket.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the bucket name. The bucket name must contain only lowercase letters, numbers, periods (.), and dashes (-) and must follow [Amazon S3 bucket restrictions and limitations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/BucketRestrictions.html) . For more information, see [Bucket naming rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/BucketRestrictions.html#bucketnamingrules) .
     *
     * > If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you need to replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html#cfn-s3outposts-bucket-bucketname
     */
    readonly bucketName: string;
    /**
     * Creates a new lifecycle configuration for the S3 on Outposts bucket or replaces an existing lifecycle configuration.
     *
     * Outposts buckets only support lifecycle configurations that delete/expire objects after a certain period of time and abort incomplete multipart uploads.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html#cfn-s3outposts-bucket-lifecycleconfiguration
     */
    readonly lifecycleConfiguration?: cdk.IResolvable | CfnBucket.LifecycleConfigurationProperty;
    /**
     * The ID of the Outpost of the specified bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html#cfn-s3outposts-bucket-outpostid
     */
    readonly outpostId: string;
    /**
     * Sets the tags for an S3 on Outposts bucket. For more information, see [Using Amazon S3 on Outposts](https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html) .
     *
     * Use tags to organize your AWS bill to reflect your own cost structure. To do this, sign up to get your AWS account bill with tag key values included. Then, to see the cost of combined resources, organize your billing information according to resources with the same tag key values. For example, you can tag several resources with a specific application name, and then organize your billing information to see the total cost of that application across several services. For more information, see [Cost allocation and tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) .
     *
     * > Within a bucket, if you add a tag that has the same key as an existing tag, the new value overwrites the old value. For more information, see [Using cost allocation and bucket tags](https://docs.aws.amazon.com/AmazonS3/latest/userguide/CostAllocTagging.html) .
     *
     * To use this resource, you must have permissions to perform the `s3-outposts:PutBucketTagging` . The S3 on Outposts bucket owner has this permission by default and can grant this permission to others. For more information about permissions, see [Permissions Related to Bucket Subresource Operations](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-with-s3-actions.html#using-with-s3-actions-related-to-bucket-subresources) and [Managing access permissions to your Amazon S3 resources](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-access-control.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucket.html#cfn-s3outposts-bucket-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * This resource applies a bucket policy to an Amazon S3 on Outposts bucket.
 *
 * If you are using an identity other than the root user of the AWS account that owns the S3 on Outposts bucket, the calling identity must have the `s3-outposts:PutBucketPolicy` permissions on the specified Outposts bucket and belong to the bucket owner's account in order to use this resource.
 *
 * If you don't have `s3-outposts:PutBucketPolicy` permissions, S3 on Outposts returns a `403 Access Denied` error.
 *
 * > The root user of the AWS account that owns an Outposts bucket can *always* use this resource, even if the policy explicitly denies the root user the ability to perform actions on this resource.
 *
 * For more information, see the AWS::IAM::Policy [PolicyDocument](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-policydocument) resource description in this guide and [Access Policy Language Overview](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-policy-language-overview.html) .
 *
 * @cloudformationResource AWS::S3Outposts::BucketPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucketpolicy.html
 */
export declare class CfnBucketPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnBucketPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnBucketPolicy;
    /**
     * The name of the Amazon S3 Outposts bucket to which the policy applies.
     */
    bucket: string;
    /**
     * A policy document containing permissions to add to the specified bucket.
     */
    policyDocument: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnBucketPolicyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnBucketPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucketpolicy.html
 */
export interface CfnBucketPolicyProps {
    /**
     * The name of the Amazon S3 Outposts bucket to which the policy applies.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucketpolicy.html#cfn-s3outposts-bucketpolicy-bucket
     */
    readonly bucket: string;
    /**
     * A policy document containing permissions to add to the specified bucket.
     *
     * In IAM, you must provide policy documents in JSON format. However, in CloudFormation, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM. For more information, see the AWS::IAM::Policy [PolicyDocument](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-policydocument) resource description in this guide and [Access Policy Language Overview](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-policy-language-overview.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-bucketpolicy.html#cfn-s3outposts-bucketpolicy-policydocument
     */
    readonly policyDocument: any | cdk.IResolvable;
}
/**
 * This AWS::S3Outposts::Endpoint resource specifies an endpoint and associates it with the specified Outpost.
 *
 * Amazon S3 on Outposts access points simplify managing data access at scale for shared datasets in S3 on Outposts. S3 on Outposts uses endpoints to connect to S3 on Outposts buckets so that you can perform actions within your virtual private cloud (VPC). For more information, see [Accessing S3 on Outposts using VPC-only access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/AccessingS3Outposts.html) .
 *
 * > It can take up to 5 minutes for this resource to be created.
 *
 * @cloudformationResource AWS::S3Outposts::Endpoint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html
 */
export declare class CfnEndpoint extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEndpoint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEndpoint;
    /**
     * The ARN of the endpoint.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The VPC CIDR block committed by this endpoint.
     *
     * @cloudformationAttribute CidrBlock
     */
    readonly attrCidrBlock: string;
    /**
     * The time the endpoint was created.
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * The ID of the endpoint.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The network interface of the endpoint.
     *
     * @cloudformationAttribute NetworkInterfaces
     */
    readonly attrNetworkInterfaces: cdk.IResolvable;
    /**
     * The status of the endpoint.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The container for the type of connectivity used to access the Amazon S3 on Outposts endpoint.
     */
    accessType?: string;
    /**
     * The ID of the customer-owned IPv4 address pool (CoIP pool) for the endpoint.
     */
    customerOwnedIpv4Pool?: string;
    /**
     * The failure reason, if any, for a create or delete endpoint operation.
     */
    failedReason?: CfnEndpoint.FailedReasonProperty | cdk.IResolvable;
    /**
     * The ID of the Outpost.
     */
    outpostId: string;
    /**
     * The ID of the security group used for the endpoint.
     */
    securityGroupId: string;
    /**
     * The ID of the subnet used for the endpoint.
     */
    subnetId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEndpointProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEndpoint {
    /**
     * The failure reason, if any, for a create or delete endpoint operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-endpoint-failedreason.html
     */
    interface FailedReasonProperty {
        /**
         * The failure code, if any, for a create or delete endpoint operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-endpoint-failedreason.html#cfn-s3outposts-endpoint-failedreason-errorcode
         */
        readonly errorCode?: string;
        /**
         * Additional error details describing the endpoint failure and recommended action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-endpoint-failedreason.html#cfn-s3outposts-endpoint-failedreason-message
         */
        readonly message?: string;
    }
    /**
     * The container for the network interface.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-endpoint-networkinterface.html
     */
    interface NetworkInterfaceProperty {
        /**
         * The ID for the network interface.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3outposts-endpoint-networkinterface.html#cfn-s3outposts-endpoint-networkinterface-networkinterfaceid
         */
        readonly networkInterfaceId: string;
    }
}
/**
 * Properties for defining a `CfnEndpoint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html
 */
export interface CfnEndpointProps {
    /**
     * The container for the type of connectivity used to access the Amazon S3 on Outposts endpoint.
     *
     * To use the Amazon VPC , choose `Private` . To use the endpoint with an on-premises network, choose `CustomerOwnedIp` . If you choose `CustomerOwnedIp` , you must also provide the customer-owned IP address pool (CoIP pool).
     *
     * > `Private` is the default access type value.
     *
     * @default - "Private"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-accesstype
     */
    readonly accessType?: string;
    /**
     * The ID of the customer-owned IPv4 address pool (CoIP pool) for the endpoint.
     *
     * IP addresses are allocated from this pool for the endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-customerownedipv4pool
     */
    readonly customerOwnedIpv4Pool?: string;
    /**
     * The failure reason, if any, for a create or delete endpoint operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-failedreason
     */
    readonly failedReason?: CfnEndpoint.FailedReasonProperty | cdk.IResolvable;
    /**
     * The ID of the Outpost.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-outpostid
     */
    readonly outpostId: string;
    /**
     * The ID of the security group used for the endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-securitygroupid
     */
    readonly securityGroupId: string;
    /**
     * The ID of the subnet used for the endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3outposts-endpoint.html#cfn-s3outposts-endpoint-subnetid
     */
    readonly subnetId: string;
}
