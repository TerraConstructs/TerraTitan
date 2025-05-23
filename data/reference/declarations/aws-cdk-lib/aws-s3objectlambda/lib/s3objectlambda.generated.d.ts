import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::S3ObjectLambda::AccessPoint` resource specifies an Object Lambda Access Point used to access a bucket.
 *
 * @cloudformationResource AWS::S3ObjectLambda::AccessPoint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html
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
     * @cloudformationAttribute Alias
     */
    readonly attrAlias: cdk.IResolvable;
    /**
     * The status of the Object Lambda Access Point alias. Valid Values: `PROVISIONING` | `READY` .
     *
     * @cloudformationAttribute Alias.Status
     */
    readonly attrAliasStatus: string;
    /**
     * The alias name value of the Object Lambda Access Point. For example: `myolap-1a4n8yjrb3kda96f67zwrwiiuse1a--ol-s3` .
     *
     * @cloudformationAttribute Alias.Value
     */
    readonly attrAliasValue: string;
    /**
     * Specifies the ARN for the Object Lambda Access Point.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time when the specified Object Lambda Access Point was created.
     *
     * @cloudformationAttribute CreationDate
     */
    readonly attrCreationDate: string;
    /**
     * @cloudformationAttribute PolicyStatus
     */
    readonly attrPolicyStatus: cdk.IResolvable;
    /**
     * Specifies whether the Object lambda Access Point Policy is Public or not. Object lambda Access Points are private by default.
     *
     * @cloudformationAttribute PolicyStatus.IsPublic
     */
    readonly attrPolicyStatusIsPublic: cdk.IResolvable;
    /**
     * The Public Access Block Configuration is used to block policies that would allow public access to this Object lambda Access Point. All public access to Object lambda Access Points are blocked by default, and any policy that would give public access to them will be also blocked. This behavior cannot be changed for Object lambda Access Points.
     *
     * @cloudformationAttribute PublicAccessBlockConfiguration
     */
    readonly attrPublicAccessBlockConfiguration: cdk.IResolvable;
    /**
     * @cloudformationAttribute PublicAccessBlockConfiguration.BlockPublicAcls
     */
    readonly attrPublicAccessBlockConfigurationBlockPublicAcls: cdk.IResolvable;
    /**
     * @cloudformationAttribute PublicAccessBlockConfiguration.BlockPublicPolicy
     */
    readonly attrPublicAccessBlockConfigurationBlockPublicPolicy: cdk.IResolvable;
    /**
     * @cloudformationAttribute PublicAccessBlockConfiguration.IgnorePublicAcls
     */
    readonly attrPublicAccessBlockConfigurationIgnorePublicAcls: cdk.IResolvable;
    /**
     * @cloudformationAttribute PublicAccessBlockConfiguration.RestrictPublicBuckets
     */
    readonly attrPublicAccessBlockConfigurationRestrictPublicBuckets: cdk.IResolvable;
    /**
     * The name of this access point.
     */
    name?: string;
    /**
     * A configuration used when creating an Object Lambda Access Point.
     */
    objectLambdaConfiguration: cdk.IResolvable | CfnAccessPoint.ObjectLambdaConfigurationProperty;
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
     * A configuration used when creating an Object Lambda Access Point.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-objectlambdaconfiguration.html
     */
    interface ObjectLambdaConfigurationProperty {
        /**
         * A container for allowed features.
         *
         * Valid inputs are `GetObject-Range` , `GetObject-PartNumber` , `HeadObject-Range` , and `HeadObject-PartNumber` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-objectlambdaconfiguration.html#cfn-s3objectlambda-accesspoint-objectlambdaconfiguration-allowedfeatures
         */
        readonly allowedFeatures?: Array<string>;
        /**
         * A container for whether the CloudWatch metrics configuration is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-objectlambdaconfiguration.html#cfn-s3objectlambda-accesspoint-objectlambdaconfiguration-cloudwatchmetricsenabled
         */
        readonly cloudWatchMetricsEnabled?: boolean | cdk.IResolvable;
        /**
         * Standard access point associated with the Object Lambda Access Point.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-objectlambdaconfiguration.html#cfn-s3objectlambda-accesspoint-objectlambdaconfiguration-supportingaccesspoint
         */
        readonly supportingAccessPoint: string;
        /**
         * A container for transformation configurations for an Object Lambda Access Point.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-objectlambdaconfiguration.html#cfn-s3objectlambda-accesspoint-objectlambdaconfiguration-transformationconfigurations
         */
        readonly transformationConfigurations: Array<cdk.IResolvable | CfnAccessPoint.TransformationConfigurationProperty> | cdk.IResolvable;
    }
    /**
     * A configuration used when creating an Object Lambda Access Point transformation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-transformationconfiguration.html
     */
    interface TransformationConfigurationProperty {
        /**
         * A container for the action of an Object Lambda Access Point configuration.
         *
         * Valid inputs are `GetObject` , `HeadObject` , `ListObject` , and `ListObjectV2` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-transformationconfiguration.html#cfn-s3objectlambda-accesspoint-transformationconfiguration-actions
         */
        readonly actions: Array<string>;
        /**
         * A container for the content transformation of an Object Lambda Access Point configuration.
         *
         * Can include the FunctionArn and FunctionPayload. For more information, see [AwsLambdaTransformation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_AwsLambdaTransformation.html) in the *Amazon S3 API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-transformationconfiguration.html#cfn-s3objectlambda-accesspoint-transformationconfiguration-contenttransformation
         */
        readonly contentTransformation: any | cdk.IResolvable;
    }
    /**
     * The `PublicAccessBlock` configuration that you want to apply to this Amazon S3 account.
     *
     * You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the *Amazon S3 User Guide* .
     *
     * This data type is not supported for Amazon S3 on Outposts.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-publicaccessblockconfiguration.html
     */
    interface PublicAccessBlockConfigurationProperty {
        /**
         * Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account.
         *
         * Setting this element to `TRUE` causes the following behavior:
         *
         * - `PutBucketAcl` and `PutObjectAcl` calls fail if the specified ACL is public.
         * - PUT Object calls fail if the request includes a public ACL.
         * - PUT Bucket calls fail if the request includes a public ACL.
         *
         * Enabling this setting doesn't affect existing policies or ACLs.
         *
         * This property is not supported for Amazon S3 on Outposts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-publicaccessblockconfiguration.html#cfn-s3objectlambda-accesspoint-publicaccessblockconfiguration-blockpublicacls
         */
        readonly blockPublicAcls?: boolean | cdk.IResolvable;
        /**
         * Specifies whether Amazon S3 should block public bucket policies for buckets in this account.
         *
         * Setting this element to `TRUE` causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.
         *
         * Enabling this setting doesn't affect existing bucket policies.
         *
         * This property is not supported for Amazon S3 on Outposts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-publicaccessblockconfiguration.html#cfn-s3objectlambda-accesspoint-publicaccessblockconfiguration-blockpublicpolicy
         */
        readonly blockPublicPolicy?: boolean | cdk.IResolvable;
        /**
         * Specifies whether Amazon S3 should ignore public ACLs for buckets in this account.
         *
         * Setting this element to `TRUE` causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain.
         *
         * Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
         *
         * This property is not supported for Amazon S3 on Outposts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-publicaccessblockconfiguration.html#cfn-s3objectlambda-accesspoint-publicaccessblockconfiguration-ignorepublicacls
         */
        readonly ignorePublicAcls?: boolean | cdk.IResolvable;
        /**
         * Specifies whether Amazon S3 should restrict public bucket policies for buckets in this account.
         *
         * Setting this element to `TRUE` restricts access to buckets with public policies to only AWS service principals and authorized users within this account.
         *
         * Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
         *
         * This property is not supported for Amazon S3 on Outposts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-publicaccessblockconfiguration.html#cfn-s3objectlambda-accesspoint-publicaccessblockconfiguration-restrictpublicbuckets
         */
        readonly restrictPublicBuckets?: boolean | cdk.IResolvable;
    }
    /**
     * The alias of an Object Lambda Access Point.
     *
     * For more information, see [How to use a bucket-style alias for your S3 bucket Object Lambda Access Point](https://docs.aws.amazon.com/AmazonS3/latest/userguide/olap-use.html#ol-access-points-alias) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-alias.html
     */
    interface AliasProperty {
        /**
         * The status of the Object Lambda Access Point alias.
         *
         * If the status is `PROVISIONING` , the Object Lambda Access Point is provisioning the alias and the alias is not ready for use yet. If the status is `READY` , the Object Lambda Access Point alias is successfully provisioned and ready for use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-alias.html#cfn-s3objectlambda-accesspoint-alias-status
         */
        readonly status?: string;
        /**
         * The alias value of the Object Lambda Access Point.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-alias.html#cfn-s3objectlambda-accesspoint-alias-value
         */
        readonly value: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-policystatus.html
     */
    interface PolicyStatusProperty {
        /**
         * Specifies whether the Object lambda Access Point Policy is Public or not.
         *
         * Object lambda Access Points are private by default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-policystatus.html#cfn-s3objectlambda-accesspoint-policystatus-ispublic
         */
        readonly isPublic?: boolean | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-awslambda.html
     */
    interface AwsLambdaProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-awslambda.html#cfn-s3objectlambda-accesspoint-awslambda-functionarn
         */
        readonly functionArn: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-awslambda.html#cfn-s3objectlambda-accesspoint-awslambda-functionpayload
         */
        readonly functionPayload?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-contenttransformation.html
     */
    interface ContentTransformationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3objectlambda-accesspoint-contenttransformation.html#cfn-s3objectlambda-accesspoint-contenttransformation-awslambda
         */
        readonly awsLambda: CfnAccessPoint.AwsLambdaProperty | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnAccessPoint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html
 */
export interface CfnAccessPointProps {
    /**
     * The name of this access point.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html#cfn-s3objectlambda-accesspoint-name
     */
    readonly name?: string;
    /**
     * A configuration used when creating an Object Lambda Access Point.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html#cfn-s3objectlambda-accesspoint-objectlambdaconfiguration
     */
    readonly objectLambdaConfiguration: cdk.IResolvable | CfnAccessPoint.ObjectLambdaConfigurationProperty;
}
/**
 * The `AWS::S3ObjectLambda::AccessPointPolicy` resource specifies the Object Lambda Access Point resource policy document.
 *
 * @cloudformationResource AWS::S3ObjectLambda::AccessPointPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspointpolicy.html
 */
export declare class CfnAccessPointPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAccessPointPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAccessPointPolicy;
    /**
     * An access point with an attached AWS Lambda function used to access transformed data from an Amazon S3 bucket.
     */
    objectLambdaAccessPoint: string;
    /**
     * Object Lambda Access Point resource policy document.
     */
    policyDocument: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAccessPointPolicyProps);
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
 * Properties for defining a `CfnAccessPointPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspointpolicy.html
 */
export interface CfnAccessPointPolicyProps {
    /**
     * An access point with an attached AWS Lambda function used to access transformed data from an Amazon S3 bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspointpolicy.html#cfn-s3objectlambda-accesspointpolicy-objectlambdaaccesspoint
     */
    readonly objectLambdaAccessPoint: string;
    /**
     * Object Lambda Access Point resource policy document.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspointpolicy.html#cfn-s3objectlambda-accesspointpolicy-policydocument
     */
    readonly policyDocument: any | cdk.IResolvable;
}
