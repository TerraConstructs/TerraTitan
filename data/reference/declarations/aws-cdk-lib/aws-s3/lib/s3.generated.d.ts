import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The AWS::S3::AccessPoint resource is an Amazon S3 resource type that you can use to access buckets.
 *
 * @cloudformationResource AWS::S3::AccessPoint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accesspoint.html
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
     * The alias for this access point.
     *
     * @cloudformationAttribute Alias
     */
    readonly attrAlias: string;
    /**
     * This property contains the details of the ARN for the access point.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of this access point.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * Indicates whether this access point allows access from the internet. If `VpcConfiguration` is specified for this access point, then `NetworkOrigin` is `VPC` , and the access point doesn't allow access from the internet. Otherwise, `NetworkOrigin` is `Internet` , and the access point allows access from the internet, subject to the access point and bucket access policies.
     *
     * *Allowed values* : `VPC` | `Internet`
     *
     * @cloudformationAttribute NetworkOrigin
     */
    readonly attrNetworkOrigin: string;
    /**
     * The name of the bucket associated with this access point.
     */
    bucket: string;
    /**
     * The AWS account ID associated with the S3 bucket associated with this access point.
     */
    bucketAccountId?: string;
    /**
     * The name of this access point.
     */
    name?: string;
    /**
     * The access point policy associated with this access point.
     */
    policy?: any | cdk.IResolvable;
    /**
     * The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket.
     */
    publicAccessBlockConfiguration?: cdk.IResolvable | CfnAccessPoint.PublicAccessBlockConfigurationProperty;
    /**
     * The Virtual Private Cloud (VPC) configuration for this access point, if one exists.
     */
    vpcConfiguration?: cdk.IResolvable | CfnAccessPoint.VpcConfigurationProperty;
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
     * The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket.
     *
     * You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accesspoint-publicaccessblockconfiguration.html
     */
    interface PublicAccessBlockConfigurationProperty {
        /**
         * Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket.
         *
         * Setting this element to `TRUE` causes the following behavior:
         *
         * - PUT Bucket ACL and PUT Object ACL calls fail if the specified ACL is public.
         * - PUT Object calls fail if the request includes a public ACL.
         * - PUT Bucket calls fail if the request includes a public ACL.
         *
         * Enabling this setting doesn't affect existing policies or ACLs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accesspoint-publicaccessblockconfiguration.html#cfn-s3-accesspoint-publicaccessblockconfiguration-blockpublicacls
         */
        readonly blockPublicAcls?: boolean | cdk.IResolvable;
        /**
         * Specifies whether Amazon S3 should block public bucket policies for this bucket.
         *
         * Setting this element to `TRUE` causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.
         *
         * Enabling this setting doesn't affect existing bucket policies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accesspoint-publicaccessblockconfiguration.html#cfn-s3-accesspoint-publicaccessblockconfiguration-blockpublicpolicy
         */
        readonly blockPublicPolicy?: boolean | cdk.IResolvable;
        /**
         * Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket.
         *
         * Setting this element to `TRUE` causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket.
         *
         * Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accesspoint-publicaccessblockconfiguration.html#cfn-s3-accesspoint-publicaccessblockconfiguration-ignorepublicacls
         */
        readonly ignorePublicAcls?: boolean | cdk.IResolvable;
        /**
         * Specifies whether Amazon S3 should restrict public bucket policies for this bucket.
         *
         * Setting this element to `TRUE` restricts access to this bucket to only AWS service principals and authorized users within this account if the bucket has a public policy.
         *
         * Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accesspoint-publicaccessblockconfiguration.html#cfn-s3-accesspoint-publicaccessblockconfiguration-restrictpublicbuckets
         */
        readonly restrictPublicBuckets?: boolean | cdk.IResolvable;
    }
    /**
     * The Virtual Private Cloud (VPC) configuration for this access point.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accesspoint-vpcconfiguration.html
     */
    interface VpcConfigurationProperty {
        /**
         * If this field is specified, the access point will only allow connections from the specified VPC ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accesspoint-vpcconfiguration.html#cfn-s3-accesspoint-vpcconfiguration-vpcid
         */
        readonly vpcId?: string;
    }
}
/**
 * Properties for defining a `CfnAccessPoint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accesspoint.html
 */
export interface CfnAccessPointProps {
    /**
     * The name of the bucket associated with this access point.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accesspoint.html#cfn-s3-accesspoint-bucket
     */
    readonly bucket: string;
    /**
     * The AWS account ID associated with the S3 bucket associated with this access point.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accesspoint.html#cfn-s3-accesspoint-bucketaccountid
     */
    readonly bucketAccountId?: string;
    /**
     * The name of this access point.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the access point name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accesspoint.html#cfn-s3-accesspoint-name
     */
    readonly name?: string;
    /**
     * The access point policy associated with this access point.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accesspoint.html#cfn-s3-accesspoint-policy
     */
    readonly policy?: any | cdk.IResolvable;
    /**
     * The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket.
     *
     * You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the *Amazon S3 User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accesspoint.html#cfn-s3-accesspoint-publicaccessblockconfiguration
     */
    readonly publicAccessBlockConfiguration?: cdk.IResolvable | CfnAccessPoint.PublicAccessBlockConfigurationProperty;
    /**
     * The Virtual Private Cloud (VPC) configuration for this access point, if one exists.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accesspoint.html#cfn-s3-accesspoint-vpcconfiguration
     */
    readonly vpcConfiguration?: cdk.IResolvable | CfnAccessPoint.VpcConfigurationProperty;
}
/**
 * The `AWS::S3::Bucket` resource creates an Amazon S3 bucket in the same AWS Region where you create the AWS CloudFormation stack.
 *
 * To control how AWS CloudFormation handles the bucket when the stack is deleted, you can set a deletion policy for your bucket. You can choose to *retain* the bucket or to *delete* the bucket. For more information, see [DeletionPolicy Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html) .
 *
 * > You can only delete empty buckets. Deletion fails for buckets that have contents.
 *
 * @cloudformationResource AWS::S3::Bucket
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html
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
     * Returns the Amazon Resource Name (ARN) of the specified bucket.
     *
     * Example: `arn:aws:s3:::DOC-EXAMPLE-BUCKET`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the IPv4 DNS name of the specified bucket.
     *
     * Example: `DOC-EXAMPLE-BUCKET.s3.amazonaws.com`
     *
     * @cloudformationAttribute DomainName
     */
    readonly attrDomainName: string;
    /**
     * Returns the IPv6 DNS name of the specified bucket.
     *
     * Example: `DOC-EXAMPLE-BUCKET.s3.dualstack.us-east-2.amazonaws.com`
     *
     * For more information about dual-stack endpoints, see [Using Amazon S3 Dual-Stack Endpoints](https://docs.aws.amazon.com/AmazonS3/latest/dev/dual-stack-endpoints.html) .
     *
     * @cloudformationAttribute DualStackDomainName
     */
    readonly attrDualStackDomainName: string;
    /**
     * The Amazon Resource Name (ARN) for the metadata table in the metadata table configuration. The specified metadata table name must be unique within the `aws_s3_metadata` namespace in the destination table bucket.
     *
     * @cloudformationAttribute MetadataTableConfiguration.S3TablesDestination.TableArn
     */
    readonly attrMetadataTableConfigurationS3TablesDestinationTableArn: string;
    /**
     * The table bucket namespace for the metadata table in your metadata table configuration. This value is always `aws_s3_metadata` .
     *
     * @cloudformationAttribute MetadataTableConfiguration.S3TablesDestination.TableNamespace
     */
    readonly attrMetadataTableConfigurationS3TablesDestinationTableNamespace: string;
    /**
     * Returns the regional domain name of the specified bucket.
     *
     * Example: `DOC-EXAMPLE-BUCKET.s3.us-east-2.amazonaws.com`
     *
     * @cloudformationAttribute RegionalDomainName
     */
    readonly attrRegionalDomainName: string;
    /**
     * Returns the Amazon S3 website endpoint for the specified bucket.
     *
     * Example (IPv4): `http://DOC-EXAMPLE-BUCKET.s3-website.us-east-2.amazonaws.com`
     *
     * Example (IPv6): `http://DOC-EXAMPLE-BUCKET.s3.dualstack.us-east-2.amazonaws.com`
     *
     * @cloudformationAttribute WebsiteURL
     */
    readonly attrWebsiteUrl: string;
    /**
     * Configures the transfer acceleration state for an Amazon S3 bucket.
     */
    accelerateConfiguration?: CfnBucket.AccelerateConfigurationProperty | cdk.IResolvable;
    /**
     * > This is a legacy property, and it is not recommended for most use cases.
     */
    accessControl?: string;
    /**
     * Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.
     */
    analyticsConfigurations?: Array<CfnBucket.AnalyticsConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed keys (SSE-S3), AWS KMS-managed keys (SSE-KMS), or dual-layer server-side encryption with KMS-managed keys (DSSE-KMS).
     */
    bucketEncryption?: CfnBucket.BucketEncryptionProperty | cdk.IResolvable;
    /**
     * A name for the bucket.
     */
    bucketName?: string;
    /**
     * Describes the cross-origin access configuration for objects in an Amazon S3 bucket.
     */
    corsConfiguration?: CfnBucket.CorsConfigurationProperty | cdk.IResolvable;
    /**
     * Defines how Amazon S3 handles Intelligent-Tiering storage.
     */
    intelligentTieringConfigurations?: Array<CfnBucket.IntelligentTieringConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies the inventory configuration for an Amazon S3 bucket.
     */
    inventoryConfigurations?: Array<CfnBucket.InventoryConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies the lifecycle configuration for objects in an Amazon S3 bucket.
     */
    lifecycleConfiguration?: cdk.IResolvable | CfnBucket.LifecycleConfigurationProperty;
    /**
     * Settings that define where logs are stored.
     */
    loggingConfiguration?: cdk.IResolvable | CfnBucket.LoggingConfigurationProperty;
    /**
     * The metadata table configuration of an Amazon S3 general purpose bucket.
     */
    metadataTableConfiguration?: cdk.IResolvable | CfnBucket.MetadataTableConfigurationProperty;
    /**
     * Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket.
     */
    metricsConfigurations?: Array<cdk.IResolvable | CfnBucket.MetricsConfigurationProperty> | cdk.IResolvable;
    /**
     * Configuration that defines how Amazon S3 handles bucket notifications.
     */
    notificationConfiguration?: cdk.IResolvable | CfnBucket.NotificationConfigurationProperty;
    /**
     * > This operation is not supported for directory buckets.
     */
    objectLockConfiguration?: cdk.IResolvable | CfnBucket.ObjectLockConfigurationProperty;
    /**
     * Indicates whether this bucket has an Object Lock configuration enabled.
     */
    objectLockEnabled?: boolean | cdk.IResolvable;
    /**
     * Configuration that defines how Amazon S3 handles Object Ownership rules.
     */
    ownershipControls?: cdk.IResolvable | CfnBucket.OwnershipControlsProperty;
    /**
     * Configuration that defines how Amazon S3 handles public access.
     */
    publicAccessBlockConfiguration?: cdk.IResolvable | CfnBucket.PublicAccessBlockConfigurationProperty;
    /**
     * Configuration for replicating objects in an S3 bucket.
     */
    replicationConfiguration?: cdk.IResolvable | CfnBucket.ReplicationConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An arbitrary set of tags (key-value pairs) for this S3 bucket.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Enables multiple versions of all objects in this bucket.
     */
    versioningConfiguration?: cdk.IResolvable | CfnBucket.VersioningConfigurationProperty;
    /**
     * Information used to configure the bucket as a static website.
     */
    websiteConfiguration?: cdk.IResolvable | CfnBucket.WebsiteConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnBucketProps);
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
     * Configures the transfer acceleration state for an Amazon S3 bucket.
     *
     * For more information, see [Amazon S3 Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-accelerateconfiguration.html
     */
    interface AccelerateConfigurationProperty {
        /**
         * Specifies the transfer acceleration status of the bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-accelerateconfiguration.html#cfn-s3-bucket-accelerateconfiguration-accelerationstatus
         */
        readonly accelerationStatus: string;
    }
    /**
     * Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-analyticsconfiguration.html
     */
    interface AnalyticsConfigurationProperty {
        /**
         * The ID that identifies the analytics configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-analyticsconfiguration.html#cfn-s3-bucket-analyticsconfiguration-id
         */
        readonly id: string;
        /**
         * The prefix that an object must have to be included in the analytics results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-analyticsconfiguration.html#cfn-s3-bucket-analyticsconfiguration-prefix
         */
        readonly prefix?: string;
        /**
         * Contains data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-analyticsconfiguration.html#cfn-s3-bucket-analyticsconfiguration-storageclassanalysis
         */
        readonly storageClassAnalysis: cdk.IResolvable | CfnBucket.StorageClassAnalysisProperty;
        /**
         * The tags to use when evaluating an analytics filter.
         *
         * The analytics only includes objects that meet the filter's criteria. If no filter is specified, all of the contents of the bucket are included in the analysis.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-analyticsconfiguration.html#cfn-s3-bucket-analyticsconfiguration-tagfilters
         */
        readonly tagFilters?: Array<cdk.IResolvable | CfnBucket.TagFilterProperty> | cdk.IResolvable;
    }
    /**
     * Specifies data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes for an Amazon S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-storageclassanalysis.html
     */
    interface StorageClassAnalysisProperty {
        /**
         * Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-storageclassanalysis.html#cfn-s3-bucket-storageclassanalysis-dataexport
         */
        readonly dataExport?: CfnBucket.DataExportProperty | cdk.IResolvable;
    }
    /**
     * Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-dataexport.html
     */
    interface DataExportProperty {
        /**
         * The place to store the data for an analysis.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-dataexport.html#cfn-s3-bucket-dataexport-destination
         */
        readonly destination: CfnBucket.DestinationProperty | cdk.IResolvable;
        /**
         * The version of the output schema to use when exporting data.
         *
         * Must be `V_1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-dataexport.html#cfn-s3-bucket-dataexport-outputschemaversion
         */
        readonly outputSchemaVersion: string;
    }
    /**
     * Specifies information about where to publish analysis or configuration results for an Amazon S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-destination.html
     */
    interface DestinationProperty {
        /**
         * The account ID that owns the destination S3 bucket.
         *
         * If no account ID is provided, the owner is not validated before exporting data.
         *
         * > Although this value is optional, we strongly recommend that you set it to help prevent problems if the destination bucket ownership changes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-destination.html#cfn-s3-bucket-destination-bucketaccountid
         */
        readonly bucketAccountId?: string;
        /**
         * The Amazon Resource Name (ARN) of the bucket to which data is exported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-destination.html#cfn-s3-bucket-destination-bucketarn
         */
        readonly bucketArn: string;
        /**
         * Specifies the file format used when exporting data to Amazon S3.
         *
         * *Allowed values* : `CSV` | `ORC` | `Parquet`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-destination.html#cfn-s3-bucket-destination-format
         */
        readonly format: string;
        /**
         * The prefix to use when exporting data.
         *
         * The prefix is prepended to all results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-destination.html#cfn-s3-bucket-destination-prefix
         */
        readonly prefix?: string;
    }
    /**
     * Specifies tags to use to identify a subset of objects for an Amazon S3 bucket.
     *
     * For more information, see [Categorizing your storage using tags](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-tagging.html) in the *Amazon Simple Storage Service User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-tagfilter.html
     */
    interface TagFilterProperty {
        /**
         * The tag key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-tagfilter.html#cfn-s3-bucket-tagfilter-key
         */
        readonly key: string;
        /**
         * The tag value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-tagfilter.html#cfn-s3-bucket-tagfilter-value
         */
        readonly value: string;
    }
    /**
     * Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed keys (SSE-S3), AWS KMS-managed keys (SSE-KMS), or dual-layer server-side encryption with KMS-managed keys (DSSE-KMS).
     *
     * For information about the Amazon S3 default encryption feature, see [Amazon S3 Default Encryption for S3 Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-bucketencryption.html
     */
    interface BucketEncryptionProperty {
        /**
         * Specifies the default server-side-encryption configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-bucketencryption.html#cfn-s3-bucket-bucketencryption-serversideencryptionconfiguration
         */
        readonly serverSideEncryptionConfiguration: Array<cdk.IResolvable | CfnBucket.ServerSideEncryptionRuleProperty> | cdk.IResolvable;
    }
    /**
     * Specifies the default server-side encryption configuration.
     *
     * > - *General purpose buckets* - If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then AWS KMS resolves the key within the requester’s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner.
     * > - *Directory buckets* - When you specify an [AWS KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) for encryption in your directory bucket, only use the key ID or key ARN. The key alias format of the KMS key isn't supported.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-serversideencryptionrule.html
     */
    interface ServerSideEncryptionRuleProperty {
        /**
         * Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket.
         *
         * Existing objects are not affected. Setting the `BucketKeyEnabled` element to `true` causes Amazon S3 to use an S3 Bucket Key. By default, S3 Bucket Key is not enabled.
         *
         * For more information, see [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) in the *Amazon S3 User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-serversideencryptionrule.html#cfn-s3-bucket-serversideencryptionrule-bucketkeyenabled
         */
        readonly bucketKeyEnabled?: boolean | cdk.IResolvable;
        /**
         * Specifies the default server-side encryption to apply to new objects in the bucket.
         *
         * If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-serversideencryptionrule.html#cfn-s3-bucket-serversideencryptionrule-serversideencryptionbydefault
         */
        readonly serverSideEncryptionByDefault?: cdk.IResolvable | CfnBucket.ServerSideEncryptionByDefaultProperty;
    }
    /**
     * Describes the default server-side encryption to apply to new objects in the bucket.
     *
     * If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied. For more information, see [PutBucketEncryption](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTencryption.html) .
     *
     * > - *General purpose buckets* - If you don't specify a customer managed key at configuration, Amazon S3 automatically creates an AWS KMS key ( `aws/s3` ) in your AWS account the first time that you add an object encrypted with SSE-KMS to a bucket. By default, Amazon S3 uses this KMS key for SSE-KMS.
     * > - *Directory buckets* - Your SSE-KMS configuration can only support 1 [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) per directory bucket's lifetime. The [AWS managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk) ( `aws/s3` ) isn't supported.
     * > - *Directory buckets* - For directory buckets, there are only two supported options for server-side encryption: SSE-S3 and SSE-KMS.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-serversideencryptionbydefault.html
     */
    interface ServerSideEncryptionByDefaultProperty {
        /**
         * AWS Key Management Service (KMS) customer managed key ID to use for the default encryption.
         *
         * > - *General purpose buckets* - This parameter is allowed if and only if `SSEAlgorithm` is set to `aws:kms` or `aws:kms:dsse` .
         * > - *Directory buckets* - This parameter is allowed if and only if `SSEAlgorithm` is set to `aws:kms` .
         *
         * You can specify the key ID, key alias, or the Amazon Resource Name (ARN) of the KMS key.
         *
         * - Key ID: `1234abcd-12ab-34cd-56ef-1234567890ab`
         * - Key ARN: `arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`
         * - Key Alias: `alias/alias-name`
         *
         * If you are using encryption with cross-account or AWS service operations, you must use a fully qualified KMS key ARN. For more information, see [Using encryption for cross-account operations](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html#bucket-encryption-update-bucket-policy) .
         *
         * > - *General purpose buckets* - If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then AWS KMS resolves the key within the requester’s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner. Also, if you use a key ID, you can run into a LogDestination undeliverable error when creating a VPC flow log.
         * > - *Directory buckets* - When you specify an [AWS KMS customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) for encryption in your directory bucket, only use the key ID or key ARN. The key alias format of the KMS key isn't supported. > Amazon S3 only supports symmetric encryption KMS keys. For more information, see [Asymmetric keys in AWS KMS](https://docs.aws.amazon.com//kms/latest/developerguide/symmetric-asymmetric.html) in the *AWS Key Management Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-serversideencryptionbydefault.html#cfn-s3-bucket-serversideencryptionbydefault-kmsmasterkeyid
         */
        readonly kmsMasterKeyId?: string;
        /**
         * Server-side encryption algorithm to use for the default encryption.
         *
         * > For directory buckets, there are only two supported values for server-side encryption: `AES256` and `aws:kms` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-serversideencryptionbydefault.html#cfn-s3-bucket-serversideencryptionbydefault-ssealgorithm
         */
        readonly sseAlgorithm: string;
    }
    /**
     * Describes the cross-origin access configuration for objects in an Amazon S3 bucket.
     *
     * For more information, see [Enabling Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-corsconfiguration.html
     */
    interface CorsConfigurationProperty {
        /**
         * A set of origins and methods (cross-origin access that you want to allow).
         *
         * You can add up to 100 rules to the configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-corsconfiguration.html#cfn-s3-bucket-corsconfiguration-corsrules
         */
        readonly corsRules: Array<CfnBucket.CorsRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Specifies a cross-origin access rule for an Amazon S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-corsrule.html
     */
    interface CorsRuleProperty {
        /**
         * Headers that are specified in the `Access-Control-Request-Headers` header.
         *
         * These headers are allowed in a preflight OPTIONS request. In response to any preflight OPTIONS request, Amazon S3 returns any requested headers that are allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-corsrule.html#cfn-s3-bucket-corsrule-allowedheaders
         */
        readonly allowedHeaders?: Array<string>;
        /**
         * An HTTP method that you allow the origin to run.
         *
         * *Allowed values* : `GET` | `PUT` | `HEAD` | `POST` | `DELETE`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-corsrule.html#cfn-s3-bucket-corsrule-allowedmethods
         */
        readonly allowedMethods: Array<string>;
        /**
         * One or more origins you want customers to be able to access the bucket from.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-corsrule.html#cfn-s3-bucket-corsrule-allowedorigins
         */
        readonly allowedOrigins: Array<string>;
        /**
         * One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript `XMLHttpRequest` object).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-corsrule.html#cfn-s3-bucket-corsrule-exposedheaders
         */
        readonly exposedHeaders?: Array<string>;
        /**
         * A unique identifier for this rule.
         *
         * The value must be no more than 255 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-corsrule.html#cfn-s3-bucket-corsrule-id
         */
        readonly id?: string;
        /**
         * The time in seconds that your browser is to cache the preflight response for the specified resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-corsrule.html#cfn-s3-bucket-corsrule-maxage
         */
        readonly maxAge?: number;
    }
    /**
     * Specifies the S3 Intelligent-Tiering configuration for an Amazon S3 bucket.
     *
     * For information about the S3 Intelligent-Tiering storage class, see [Storage class for automatically optimizing frequently and infrequently accessed objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-intelligenttieringconfiguration.html
     */
    interface IntelligentTieringConfigurationProperty {
        /**
         * The ID used to identify the S3 Intelligent-Tiering configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-intelligenttieringconfiguration.html#cfn-s3-bucket-intelligenttieringconfiguration-id
         */
        readonly id: string;
        /**
         * An object key name prefix that identifies the subset of objects to which the rule applies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-intelligenttieringconfiguration.html#cfn-s3-bucket-intelligenttieringconfiguration-prefix
         */
        readonly prefix?: string;
        /**
         * Specifies the status of the configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-intelligenttieringconfiguration.html#cfn-s3-bucket-intelligenttieringconfiguration-status
         */
        readonly status: string;
        /**
         * A container for a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-intelligenttieringconfiguration.html#cfn-s3-bucket-intelligenttieringconfiguration-tagfilters
         */
        readonly tagFilters?: Array<cdk.IResolvable | CfnBucket.TagFilterProperty> | cdk.IResolvable;
        /**
         * Specifies a list of S3 Intelligent-Tiering storage class tiers in the configuration.
         *
         * At least one tier must be defined in the list. At most, you can specify two tiers in the list, one for each available AccessTier: `ARCHIVE_ACCESS` and `DEEP_ARCHIVE_ACCESS` .
         *
         * > You only need Intelligent Tiering Configuration enabled on a bucket if you want to automatically move objects stored in the Intelligent-Tiering storage class to Archive Access or Deep Archive Access tiers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-intelligenttieringconfiguration.html#cfn-s3-bucket-intelligenttieringconfiguration-tierings
         */
        readonly tierings: Array<cdk.IResolvable | CfnBucket.TieringProperty> | cdk.IResolvable;
    }
    /**
     * The S3 Intelligent-Tiering storage class is designed to optimize storage costs by automatically moving data to the most cost-effective storage access tier, without additional operational overhead.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-tiering.html
     */
    interface TieringProperty {
        /**
         * S3 Intelligent-Tiering access tier.
         *
         * See [Storage class for automatically optimizing frequently and infrequently accessed objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access) for a list of access tiers in the S3 Intelligent-Tiering storage class.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-tiering.html#cfn-s3-bucket-tiering-accesstier
         */
        readonly accessTier: string;
        /**
         * The number of consecutive days of no access after which an object will be eligible to be transitioned to the corresponding tier.
         *
         * The minimum number of days specified for Archive Access tier must be at least 90 days and Deep Archive Access tier must be at least 180 days. The maximum can be up to 2 years (730 days).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-tiering.html#cfn-s3-bucket-tiering-days
         */
        readonly days: number;
    }
    /**
     * Specifies the inventory configuration for an Amazon S3 bucket.
     *
     * For more information, see [GET Bucket inventory](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html) in the *Amazon S3 API Reference* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-inventoryconfiguration.html
     */
    interface InventoryConfigurationProperty {
        /**
         * Contains information about where to publish the inventory results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-inventoryconfiguration.html#cfn-s3-bucket-inventoryconfiguration-destination
         */
        readonly destination: CfnBucket.DestinationProperty | cdk.IResolvable;
        /**
         * Specifies whether the inventory is enabled or disabled.
         *
         * If set to `True` , an inventory list is generated. If set to `False` , no inventory list is generated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-inventoryconfiguration.html#cfn-s3-bucket-inventoryconfiguration-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * The ID used to identify the inventory configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-inventoryconfiguration.html#cfn-s3-bucket-inventoryconfiguration-id
         */
        readonly id: string;
        /**
         * Object versions to include in the inventory list.
         *
         * If set to `All` , the list includes all the object versions, which adds the version-related fields `VersionId` , `IsLatest` , and `DeleteMarker` to the list. If set to `Current` , the list does not contain these version-related fields.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-inventoryconfiguration.html#cfn-s3-bucket-inventoryconfiguration-includedobjectversions
         */
        readonly includedObjectVersions: string;
        /**
         * Contains the optional fields that are included in the inventory results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-inventoryconfiguration.html#cfn-s3-bucket-inventoryconfiguration-optionalfields
         */
        readonly optionalFields?: Array<string>;
        /**
         * Specifies the inventory filter prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-inventoryconfiguration.html#cfn-s3-bucket-inventoryconfiguration-prefix
         */
        readonly prefix?: string;
        /**
         * Specifies the schedule for generating inventory results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-inventoryconfiguration.html#cfn-s3-bucket-inventoryconfiguration-schedulefrequency
         */
        readonly scheduleFrequency: string;
    }
    /**
     * Specifies the lifecycle configuration for objects in an Amazon S3 bucket.
     *
     * For more information, see [Object Lifecycle Management](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfiguration.html
     */
    interface LifecycleConfigurationProperty {
        /**
         * A lifecycle rule for individual objects in an Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfiguration.html#cfn-s3-bucket-lifecycleconfiguration-rules
         */
        readonly rules: Array<cdk.IResolvable | CfnBucket.RuleProperty> | cdk.IResolvable;
        /**
         * Indicates which default minimum object size behavior is applied to the lifecycle configuration.
         *
         * > This parameter applies to general purpose buckets only. It isn't supported for directory bucket lifecycle configurations.
         *
         * - `all_storage_classes_128K` - Objects smaller than 128 KB will not transition to any storage class by default.
         * - `varies_by_storage_class` - Objects smaller than 128 KB will transition to Glacier Flexible Retrieval or Glacier Deep Archive storage classes. By default, all other storage classes will prevent transitions smaller than 128 KB.
         *
         * To customize the minimum object size for any transition you can add a filter that specifies a custom `ObjectSizeGreaterThan` or `ObjectSizeLessThan` in the body of your transition rule. Custom filters always take precedence over the default transition behavior.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfiguration.html#cfn-s3-bucket-lifecycleconfiguration-transitiondefaultminimumobjectsize
         */
        readonly transitionDefaultMinimumObjectSize?: string;
    }
    /**
     * Specifies lifecycle rules for an Amazon S3 bucket.
     *
     * For more information, see [Put Bucket Lifecycle Configuration](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlifecycle.html) in the *Amazon S3 API Reference* .
     *
     * You must specify at least one of the following properties: `AbortIncompleteMultipartUpload` , `ExpirationDate` , `ExpirationInDays` , `NoncurrentVersionExpirationInDays` , `NoncurrentVersionTransition` , `NoncurrentVersionTransitions` , `Transition` , or `Transitions` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html
     */
    interface RuleProperty {
        /**
         * Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html#cfn-s3-bucket-rule-abortincompletemultipartupload
         */
        readonly abortIncompleteMultipartUpload?: CfnBucket.AbortIncompleteMultipartUploadProperty | cdk.IResolvable;
        /**
         * Indicates when objects are deleted from Amazon S3 and Amazon S3 Glacier.
         *
         * The date value must be in ISO 8601 format. The time is always midnight UTC. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html#cfn-s3-bucket-rule-expirationdate
         */
        readonly expirationDate?: Date | cdk.IResolvable;
        /**
         * Indicates the number of days after creation when objects are deleted from Amazon S3 and Amazon S3 Glacier.
         *
         * If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html#cfn-s3-bucket-rule-expirationindays
         */
        readonly expirationInDays?: number;
        /**
         * Indicates whether Amazon S3 will remove a delete marker without any noncurrent versions.
         *
         * If set to true, the delete marker will be removed if there are no noncurrent versions. This cannot be specified with `ExpirationInDays` , `ExpirationDate` , or `TagFilters` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html#cfn-s3-bucket-rule-expiredobjectdeletemarker
         */
        readonly expiredObjectDeleteMarker?: boolean | cdk.IResolvable;
        /**
         * Unique identifier for the rule.
         *
         * The value can't be longer than 255 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html#cfn-s3-bucket-rule-id
         */
        readonly id?: string;
        /**
         * Specifies when noncurrent object versions expire.
         *
         * Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html#cfn-s3-bucket-rule-noncurrentversionexpiration
         */
        readonly noncurrentVersionExpiration?: cdk.IResolvable | CfnBucket.NoncurrentVersionExpirationProperty;
        /**
         * (Deprecated.) For buckets with versioning enabled (or suspended), specifies the time, in days, between when a new version of the object is uploaded to the bucket and when old versions of the object expire. When object versions expire, Amazon S3 permanently deletes them. If you specify a transition and expiration time, the expiration time must be later than the transition time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html#cfn-s3-bucket-rule-noncurrentversionexpirationindays
         */
        readonly noncurrentVersionExpirationInDays?: number;
        /**
         * (Deprecated.) For buckets with versioning enabled (or suspended), specifies when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the `NoncurrentVersionTransitions` property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html#cfn-s3-bucket-rule-noncurrentversiontransition
         */
        readonly noncurrentVersionTransition?: cdk.IResolvable | CfnBucket.NoncurrentVersionTransitionProperty;
        /**
         * For buckets with versioning enabled (or suspended), one or more transition rules that specify when non-current objects transition to a specified storage class.
         *
         * If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the `NoncurrentVersionTransition` property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html#cfn-s3-bucket-rule-noncurrentversiontransitions
         */
        readonly noncurrentVersionTransitions?: Array<cdk.IResolvable | CfnBucket.NoncurrentVersionTransitionProperty> | cdk.IResolvable;
        /**
         * Specifies the minimum object size in bytes for this rule to apply to.
         *
         * Objects must be larger than this value in bytes. For more information about size based rules, see [Lifecycle configuration using size-based rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lc-size-rules) in the *Amazon S3 User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html#cfn-s3-bucket-rule-objectsizegreaterthan
         */
        readonly objectSizeGreaterThan?: number;
        /**
         * Specifies the maximum object size in bytes for this rule to apply to.
         *
         * Objects must be smaller than this value in bytes. For more information about sized based rules, see [Lifecycle configuration using size-based rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lc-size-rules) in the *Amazon S3 User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html#cfn-s3-bucket-rule-objectsizelessthan
         */
        readonly objectSizeLessThan?: number;
        /**
         * Object key prefix that identifies one or more objects to which this rule applies.
         *
         * > Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html#cfn-s3-bucket-rule-prefix
         */
        readonly prefix?: string;
        /**
         * If `Enabled` , the rule is currently being applied.
         *
         * If `Disabled` , the rule is not currently being applied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html#cfn-s3-bucket-rule-status
         */
        readonly status: string;
        /**
         * Tags to use to identify a subset of objects to which the lifecycle rule applies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html#cfn-s3-bucket-rule-tagfilters
         */
        readonly tagFilters?: Array<cdk.IResolvable | CfnBucket.TagFilterProperty> | cdk.IResolvable;
        /**
         * (Deprecated.) Specifies when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the `Transitions` property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html#cfn-s3-bucket-rule-transition
         */
        readonly transition?: cdk.IResolvable | CfnBucket.TransitionProperty;
        /**
         * One or more transition rules that specify when an object transitions to a specified storage class.
         *
         * If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the `Transition` property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-rule.html#cfn-s3-bucket-rule-transitions
         */
        readonly transitions?: Array<cdk.IResolvable | CfnBucket.TransitionProperty> | cdk.IResolvable;
    }
    /**
     * Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload.
     *
     * For more information, see [Stopping Incomplete Multipart Uploads Using a Bucket Lifecycle Policy](https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-abortincompletemultipartupload.html
     */
    interface AbortIncompleteMultipartUploadProperty {
        /**
         * Specifies the number of days after which Amazon S3 stops an incomplete multipart upload.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-abortincompletemultipartupload.html#cfn-s3-bucket-abortincompletemultipartupload-daysafterinitiation
         */
        readonly daysAfterInitiation: number;
    }
    /**
     * Specifies when noncurrent object versions expire.
     *
     * Upon expiration, Amazon S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent object versions at a specific period in the object's lifetime. For more information about setting a lifecycle rule configuration, see [AWS::S3::Bucket Rule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lifecycleconfig-rule.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-noncurrentversionexpiration.html
     */
    interface NoncurrentVersionExpirationProperty {
        /**
         * Specifies how many noncurrent versions Amazon S3 will retain.
         *
         * If there are this many more recent noncurrent versions, Amazon S3 will take the associated action. For more information about noncurrent versions, see [Lifecycle configuration elements](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html) in the *Amazon S3 User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-noncurrentversionexpiration.html#cfn-s3-bucket-noncurrentversionexpiration-newernoncurrentversions
         */
        readonly newerNoncurrentVersions?: number;
        /**
         * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action.
         *
         * For information about the noncurrent days calculations, see [How Amazon S3 Calculates When an Object Became Noncurrent](https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations) in the *Amazon S3 User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-noncurrentversionexpiration.html#cfn-s3-bucket-noncurrentversionexpiration-noncurrentdays
         */
        readonly noncurrentDays: number;
    }
    /**
     * Container for the transition rule that describes when noncurrent objects transition to the `STANDARD_IA` , `ONEZONE_IA` , `INTELLIGENT_TIERING` , `GLACIER_IR` , `GLACIER` , or `DEEP_ARCHIVE` storage class.
     *
     * If your bucket is versioning-enabled (or versioning is suspended), you can set this action to request that Amazon S3 transition noncurrent object versions to the `STANDARD_IA` , `ONEZONE_IA` , `INTELLIGENT_TIERING` , `GLACIER_IR` , `GLACIER` , or `DEEP_ARCHIVE` storage class at a specific period in the object's lifetime. If you specify this property, don't specify the `NoncurrentVersionTransitions` property.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-noncurrentversiontransition.html
     */
    interface NoncurrentVersionTransitionProperty {
        /**
         * Specifies how many noncurrent versions Amazon S3 will retain.
         *
         * If there are this many more recent noncurrent versions, Amazon S3 will take the associated action. For more information about noncurrent versions, see [Lifecycle configuration elements](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html) in the *Amazon S3 User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-noncurrentversiontransition.html#cfn-s3-bucket-noncurrentversiontransition-newernoncurrentversions
         */
        readonly newerNoncurrentVersions?: number;
        /**
         * The class of storage used to store the object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-noncurrentversiontransition.html#cfn-s3-bucket-noncurrentversiontransition-storageclass
         */
        readonly storageClass: string;
        /**
         * Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action.
         *
         * For information about the noncurrent days calculations, see [How Amazon S3 Calculates How Long an Object Has Been Noncurrent](https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations) in the *Amazon S3 User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-noncurrentversiontransition.html#cfn-s3-bucket-noncurrentversiontransition-transitionindays
         */
        readonly transitionInDays: number;
    }
    /**
     * Specifies when an object transitions to a specified storage class.
     *
     * For more information about Amazon S3 lifecycle configuration rules, see [Transitioning Objects Using Amazon S3 Lifecycle](https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-transition.html
     */
    interface TransitionProperty {
        /**
         * The storage class to which you want the object to transition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-transition.html#cfn-s3-bucket-transition-storageclass
         */
        readonly storageClass: string;
        /**
         * Indicates when objects are transitioned to the specified storage class.
         *
         * The date value must be in ISO 8601 format. The time is always midnight UTC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-transition.html#cfn-s3-bucket-transition-transitiondate
         */
        readonly transitionDate?: Date | cdk.IResolvable;
        /**
         * Indicates the number of days after creation when objects are transitioned to the specified storage class.
         *
         * If the specified storage class is `INTELLIGENT_TIERING` , `GLACIER_IR` , `GLACIER` , or `DEEP_ARCHIVE` , valid values are `0` or positive integers. If the specified storage class is `STANDARD_IA` or `ONEZONE_IA` , valid values are positive integers greater than `30` . Be aware that some storage classes have a minimum storage duration and that you're charged for transitioning objects before their minimum storage duration. For more information, see [Constraints and considerations for transitions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-transition-general-considerations.html#lifecycle-configuration-constraints) in the *Amazon S3 User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-transition.html#cfn-s3-bucket-transition-transitionindays
         */
        readonly transitionInDays?: number;
    }
    /**
     * Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys for a bucket.
     *
     * For examples and more information, see [PUT Bucket logging](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html) in the *Amazon S3 API Reference* .
     *
     * > To successfully complete the `AWS::S3::Bucket LoggingConfiguration` request, you must have `s3:PutObject` and `s3:PutObjectAcl` in your IAM permissions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-loggingconfiguration.html
     */
    interface LoggingConfigurationProperty {
        /**
         * The name of the bucket where Amazon S3 should store server access log files.
         *
         * You can store log files in any bucket that you own. By default, logs are stored in the bucket where the `LoggingConfiguration` property is defined.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-loggingconfiguration.html#cfn-s3-bucket-loggingconfiguration-destinationbucketname
         */
        readonly destinationBucketName?: string;
        /**
         * A prefix for all log object keys.
         *
         * If you store log files from multiple Amazon S3 buckets in a single bucket, you can use a prefix to distinguish which log files came from which bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-loggingconfiguration.html#cfn-s3-bucket-loggingconfiguration-logfileprefix
         */
        readonly logFilePrefix?: string;
        /**
         * Amazon S3 key format for log objects.
         *
         * Only one format, either PartitionedPrefix or SimplePrefix, is allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-loggingconfiguration.html#cfn-s3-bucket-loggingconfiguration-targetobjectkeyformat
         */
        readonly targetObjectKeyFormat?: cdk.IResolvable | CfnBucket.TargetObjectKeyFormatProperty;
    }
    /**
     * Amazon S3 key format for log objects.
     *
     * Only one format, PartitionedPrefix or SimplePrefix, is allowed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-targetobjectkeyformat.html
     */
    interface TargetObjectKeyFormatProperty {
        /**
         * Partitioned S3 key for log objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-targetobjectkeyformat.html#cfn-s3-bucket-targetobjectkeyformat-partitionedprefix
         */
        readonly partitionedPrefix?: cdk.IResolvable | CfnBucket.PartitionedPrefixProperty;
        /**
         * To use the simple format for S3 keys for log objects.
         *
         * To specify SimplePrefix format, set SimplePrefix to {}.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-targetobjectkeyformat.html#cfn-s3-bucket-targetobjectkeyformat-simpleprefix
         */
        readonly simplePrefix?: any | cdk.IResolvable;
    }
    /**
     * Amazon S3 keys for log objects are partitioned in the following format:.
     *
     * `[DestinationPrefix][SourceAccountId]/[SourceRegion]/[SourceBucket]/[YYYY]/[MM]/[DD]/[YYYY]-[MM]-[DD]-[hh]-[mm]-[ss]-[UniqueString]`
     *
     * PartitionedPrefix defaults to EventTime delivery when server access logs are delivered.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-partitionedprefix.html
     */
    interface PartitionedPrefixProperty {
        /**
         * Specifies the partition date source for the partitioned prefix. `PartitionDateSource` can be `EventTime` or `DeliveryTime` .
         *
         * For `DeliveryTime` , the time in the log file names corresponds to the delivery time for the log files.
         *
         * For `EventTime` , The logs delivered are for a specific day only. The year, month, and day correspond to the day on which the event occurred, and the hour, minutes and seconds are set to 00 in the key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-partitionedprefix.html#cfn-s3-bucket-partitionedprefix-partitiondatesource
         */
        readonly partitionDateSource?: string;
    }
    /**
     * Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket.
     *
     * If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For examples, see [AWS::S3::Bucket](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html#aws-properties-s3-bucket--examples) . For more information, see [PUT Bucket metrics](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html) in the *Amazon S3 API Reference* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html
     */
    interface MetricsConfigurationProperty {
        /**
         * The access point that was used while performing operations on the object.
         *
         * The metrics configuration only includes objects that meet the filter's criteria.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html#cfn-s3-bucket-metricsconfiguration-accesspointarn
         */
        readonly accessPointArn?: string;
        /**
         * The ID used to identify the metrics configuration.
         *
         * This can be any value you choose that helps you identify your metrics configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html#cfn-s3-bucket-metricsconfiguration-id
         */
        readonly id: string;
        /**
         * The prefix that an object must have to be included in the metrics results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html#cfn-s3-bucket-metricsconfiguration-prefix
         */
        readonly prefix?: string;
        /**
         * Specifies a list of tag filters to use as a metrics configuration filter.
         *
         * The metrics configuration includes only objects that meet the filter's criteria.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html#cfn-s3-bucket-metricsconfiguration-tagfilters
         */
        readonly tagFilters?: Array<cdk.IResolvable | CfnBucket.TagFilterProperty> | cdk.IResolvable;
    }
    /**
     * Describes the notification configuration for an Amazon S3 bucket.
     *
     * > If you create the target resource and related permissions in the same template, you might have a circular dependency.
     * >
     * > For example, you might use the `AWS::Lambda::Permission` resource to grant the bucket permission to invoke an AWS Lambda function. However, AWS CloudFormation can't create the bucket until the bucket has permission to invoke the function ( AWS CloudFormation checks whether the bucket can invoke the function). If you're using Refs to pass the bucket name, this leads to a circular dependency.
     * >
     * > To avoid this dependency, you can create all resources without specifying the notification configuration. Then, update the stack with a notification configuration.
     * >
     * > For more information on permissions, see [AWS::Lambda::Permission](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html) and [Granting Permissions to Publish Event Notification Messages to a Destination](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html#grant-destinations-permissions-to-s3) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfiguration.html
     */
    interface NotificationConfigurationProperty {
        /**
         * Enables delivery of events to Amazon EventBridge.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfiguration.html#cfn-s3-bucket-notificationconfiguration-eventbridgeconfiguration
         */
        readonly eventBridgeConfiguration?: CfnBucket.EventBridgeConfigurationProperty | cdk.IResolvable;
        /**
         * Describes the AWS Lambda functions to invoke and the events for which to invoke them.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfiguration.html#cfn-s3-bucket-notificationconfiguration-lambdaconfigurations
         */
        readonly lambdaConfigurations?: Array<cdk.IResolvable | CfnBucket.LambdaConfigurationProperty> | cdk.IResolvable;
        /**
         * The Amazon Simple Queue Service queues to publish messages to and the events for which to publish messages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfiguration.html#cfn-s3-bucket-notificationconfiguration-queueconfigurations
         */
        readonly queueConfigurations?: Array<cdk.IResolvable | CfnBucket.QueueConfigurationProperty> | cdk.IResolvable;
        /**
         * The topic to which notifications are sent and the events for which notifications are generated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationconfiguration.html#cfn-s3-bucket-notificationconfiguration-topicconfigurations
         */
        readonly topicConfigurations?: Array<cdk.IResolvable | CfnBucket.TopicConfigurationProperty> | cdk.IResolvable;
    }
    /**
     * Amazon S3 can send events to Amazon EventBridge whenever certain events happen in your bucket, see [Using EventBridge](https://docs.aws.amazon.com/AmazonS3/latest/userguide/EventBridge.html) in the *Amazon S3 User Guide* .
     *
     * Unlike other destinations, delivery of events to EventBridge can be either enabled or disabled for a bucket. If enabled, all events will be sent to EventBridge and you can use EventBridge rules to route events to additional targets. For more information, see [What Is Amazon EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html) in the *Amazon EventBridge User Guide*
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-eventbridgeconfiguration.html
     */
    interface EventBridgeConfigurationProperty {
        /**
         * Enables delivery of events to Amazon EventBridge.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-eventbridgeconfiguration.html#cfn-s3-bucket-eventbridgeconfiguration-eventbridgeenabled
         */
        readonly eventBridgeEnabled: boolean | cdk.IResolvable;
    }
    /**
     * Describes the AWS Lambda functions to invoke and the events for which to invoke them.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lambdaconfiguration.html
     */
    interface LambdaConfigurationProperty {
        /**
         * The Amazon S3 bucket event for which to invoke the AWS Lambda function.
         *
         * For more information, see [Supported Event Types](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lambdaconfiguration.html#cfn-s3-bucket-lambdaconfiguration-event
         */
        readonly event: string;
        /**
         * The filtering rules that determine which objects invoke the AWS Lambda function.
         *
         * For example, you can create a filter so that only image files with a `.jpg` extension invoke the function when they are added to the Amazon S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lambdaconfiguration.html#cfn-s3-bucket-lambdaconfiguration-filter
         */
        readonly filter?: cdk.IResolvable | CfnBucket.NotificationFilterProperty;
        /**
         * The Amazon Resource Name (ARN) of the AWS Lambda function that Amazon S3 invokes when the specified event type occurs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-lambdaconfiguration.html#cfn-s3-bucket-lambdaconfiguration-function
         */
        readonly function: string;
    }
    /**
     * Specifies object key name filtering rules.
     *
     * For information about key name filtering, see [Configuring event notifications using object key name filtering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationfilter.html
     */
    interface NotificationFilterProperty {
        /**
         * A container for object key name prefix and suffix filtering rules.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-notificationfilter.html#cfn-s3-bucket-notificationfilter-s3key
         */
        readonly s3Key: cdk.IResolvable | CfnBucket.S3KeyFilterProperty;
    }
    /**
     * A container for object key name prefix and suffix filtering rules.
     *
     * For more information about object key name filtering, see [Configuring event notifications using object key name filtering](https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-filtering.html) in the *Amazon S3 User Guide* .
     *
     * > The same type of filter rule cannot be used more than once. For example, you cannot specify two prefix rules.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-s3keyfilter.html
     */
    interface S3KeyFilterProperty {
        /**
         * A list of containers for the key-value pair that defines the criteria for the filter rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-s3keyfilter.html#cfn-s3-bucket-s3keyfilter-rules
         */
        readonly rules: Array<CfnBucket.FilterRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Specifies the Amazon S3 object key name to filter on.
     *
     * An object key name is the name assigned to an object in your Amazon S3 bucket. You specify whether to filter on the suffix or prefix of the object key name. A prefix is a specific string of characters at the beginning of an object key name, which you can use to organize objects. For example, you can start the key names of related objects with a prefix, such as `2023-` or `engineering/` . Then, you can use `FilterRule` to find objects in a bucket with key names that have the same prefix. A suffix is similar to a prefix, but it is at the end of the object key name instead of at the beginning.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-filterrule.html
     */
    interface FilterRuleProperty {
        /**
         * The object key name prefix or suffix identifying one or more objects to which the filtering rule applies.
         *
         * The maximum length is 1,024 characters. Overlapping prefixes and suffixes are not supported. For more information, see [Configuring Event Notifications](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-filterrule.html#cfn-s3-bucket-filterrule-name
         */
        readonly name: string;
        /**
         * The value that the filter searches for in object key names.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-filterrule.html#cfn-s3-bucket-filterrule-value
         */
        readonly value: string;
    }
    /**
     * Specifies the configuration for publishing messages to an Amazon Simple Queue Service (Amazon SQS) queue when Amazon S3 detects specified events.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-queueconfiguration.html
     */
    interface QueueConfigurationProperty {
        /**
         * The Amazon S3 bucket event about which you want to publish messages to Amazon SQS.
         *
         * For more information, see [Supported Event Types](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-queueconfiguration.html#cfn-s3-bucket-queueconfiguration-event
         */
        readonly event: string;
        /**
         * The filtering rules that determine which objects trigger notifications.
         *
         * For example, you can create a filter so that Amazon S3 sends notifications only when image files with a `.jpg` extension are added to the bucket. For more information, see [Configuring event notifications using object key name filtering](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/notification-how-to-filtering.html) in the *Amazon S3 User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-queueconfiguration.html#cfn-s3-bucket-queueconfiguration-filter
         */
        readonly filter?: cdk.IResolvable | CfnBucket.NotificationFilterProperty;
        /**
         * The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message when it detects events of the specified type.
         *
         * FIFO queues are not allowed when enabling an SQS queue as the event notification destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-queueconfiguration.html#cfn-s3-bucket-queueconfiguration-queue
         */
        readonly queue: string;
    }
    /**
     * A container for specifying the configuration for publication of messages to an Amazon Simple Notification Service (Amazon SNS) topic when Amazon S3 detects specified events.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-topicconfiguration.html
     */
    interface TopicConfigurationProperty {
        /**
         * The Amazon S3 bucket event about which to send notifications.
         *
         * For more information, see [Supported Event Types](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-topicconfiguration.html#cfn-s3-bucket-topicconfiguration-event
         */
        readonly event: string;
        /**
         * The filtering rules that determine for which objects to send notifications.
         *
         * For example, you can create a filter so that Amazon S3 sends notifications only when image files with a `.jpg` extension are added to the bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-topicconfiguration.html#cfn-s3-bucket-topicconfiguration-filter
         */
        readonly filter?: cdk.IResolvable | CfnBucket.NotificationFilterProperty;
        /**
         * The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message when it detects events of the specified type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-topicconfiguration.html#cfn-s3-bucket-topicconfiguration-topic
         */
        readonly topic: string;
    }
    /**
     * Places an Object Lock configuration on the specified bucket.
     *
     * The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see [Locking Objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockconfiguration.html
     */
    interface ObjectLockConfigurationProperty {
        /**
         * Indicates whether this bucket has an Object Lock configuration enabled.
         *
         * Enable `ObjectLockEnabled` when you apply `ObjectLockConfiguration` to a bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockconfiguration.html#cfn-s3-bucket-objectlockconfiguration-objectlockenabled
         */
        readonly objectLockEnabled?: string;
        /**
         * Specifies the Object Lock rule for the specified object.
         *
         * Enable this rule when you apply `ObjectLockConfiguration` to a bucket. If Object Lock is turned on, bucket settings require both `Mode` and a period of either `Days` or `Years` . You cannot specify `Days` and `Years` at the same time. For more information, see [ObjectLockRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockrule.html) and [DefaultRetention](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockconfiguration.html#cfn-s3-bucket-objectlockconfiguration-rule
         */
        readonly rule?: cdk.IResolvable | CfnBucket.ObjectLockRuleProperty;
    }
    /**
     * Specifies the Object Lock rule for the specified object.
     *
     * Enable the this rule when you apply `ObjectLockConfiguration` to a bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockrule.html
     */
    interface ObjectLockRuleProperty {
        /**
         * The default Object Lock retention mode and period that you want to apply to new objects placed in the specified bucket.
         *
         * If Object Lock is turned on, bucket settings require both `Mode` and a period of either `Days` or `Years` . You cannot specify `Days` and `Years` at the same time. For more information about allowable values for mode and period, see [DefaultRetention](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockrule.html#cfn-s3-bucket-objectlockrule-defaultretention
         */
        readonly defaultRetention?: CfnBucket.DefaultRetentionProperty | cdk.IResolvable;
    }
    /**
     * The container element for optionally specifying the default Object Lock retention settings for new objects placed in the specified bucket.
     *
     * > - The `DefaultRetention` settings require both a mode and a period.
     * > - The `DefaultRetention` period can be either `Days` or `Years` but you must select one. You cannot specify `Days` and `Years` at the same time.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html
     */
    interface DefaultRetentionProperty {
        /**
         * The number of days that you want to specify for the default retention period.
         *
         * If Object Lock is turned on, you must specify `Mode` and specify either `Days` or `Years` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html#cfn-s3-bucket-defaultretention-days
         */
        readonly days?: number;
        /**
         * The default Object Lock retention mode you want to apply to new objects placed in the specified bucket.
         *
         * If Object Lock is turned on, you must specify `Mode` and specify either `Days` or `Years` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html#cfn-s3-bucket-defaultretention-mode
         */
        readonly mode?: string;
        /**
         * The number of years that you want to specify for the default retention period.
         *
         * If Object Lock is turned on, you must specify `Mode` and specify either `Days` or `Years` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html#cfn-s3-bucket-defaultretention-years
         */
        readonly years?: number;
    }
    /**
     * Specifies the container element for Object Ownership rules.
     *
     * S3 Object Ownership is an Amazon S3 bucket-level setting that you can use to disable access control lists (ACLs) and take ownership of every object in your bucket, simplifying access management for data stored in Amazon S3. For more information, see [Controlling ownership of objects and disabling ACLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrols.html
     */
    interface OwnershipControlsProperty {
        /**
         * Specifies the container element for Object Ownership rules.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrols.html#cfn-s3-bucket-ownershipcontrols-rules
         */
        readonly rules: Array<cdk.IResolvable | CfnBucket.OwnershipControlsRuleProperty> | cdk.IResolvable;
    }
    /**
     * Specifies an Object Ownership rule.
     *
     * S3 Object Ownership is an Amazon S3 bucket-level setting that you can use to disable access control lists (ACLs) and take ownership of every object in your bucket, simplifying access management for data stored in Amazon S3. For more information, see [Controlling ownership of objects and disabling ACLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrolsrule.html
     */
    interface OwnershipControlsRuleProperty {
        /**
         * Specifies an object ownership rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrolsrule.html#cfn-s3-bucket-ownershipcontrolsrule-objectownership
         */
        readonly objectOwnership?: string;
    }
    /**
     * The PublicAccessBlock configuration that you want to apply to this Amazon S3 bucket.
     *
     * You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html
     */
    interface PublicAccessBlockConfigurationProperty {
        /**
         * Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket.
         *
         * Setting this element to `TRUE` causes the following behavior:
         *
         * - PUT Bucket ACL and PUT Object ACL calls fail if the specified ACL is public.
         * - PUT Object calls fail if the request includes a public ACL.
         * - PUT Bucket calls fail if the request includes a public ACL.
         *
         * Enabling this setting doesn't affect existing policies or ACLs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html#cfn-s3-bucket-publicaccessblockconfiguration-blockpublicacls
         */
        readonly blockPublicAcls?: boolean | cdk.IResolvable;
        /**
         * Specifies whether Amazon S3 should block public bucket policies for this bucket.
         *
         * Setting this element to `TRUE` causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.
         *
         * Enabling this setting doesn't affect existing bucket policies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html#cfn-s3-bucket-publicaccessblockconfiguration-blockpublicpolicy
         */
        readonly blockPublicPolicy?: boolean | cdk.IResolvable;
        /**
         * Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket.
         *
         * Setting this element to `TRUE` causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket.
         *
         * Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html#cfn-s3-bucket-publicaccessblockconfiguration-ignorepublicacls
         */
        readonly ignorePublicAcls?: boolean | cdk.IResolvable;
        /**
         * Specifies whether Amazon S3 should restrict public bucket policies for this bucket.
         *
         * Setting this element to `TRUE` restricts access to this bucket to only AWS service principals and authorized users within this account if the bucket has a public policy.
         *
         * Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-publicaccessblockconfiguration.html#cfn-s3-bucket-publicaccessblockconfiguration-restrictpublicbuckets
         */
        readonly restrictPublicBuckets?: boolean | cdk.IResolvable;
    }
    /**
     * A container for replication rules.
     *
     * You can add up to 1,000 rules. The maximum size of a replication configuration is 2 MB. The latest version of the replication configuration XML is V2. For more information about XML V2 replication configurations, see [Replication configuration](https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-add-config.html) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationconfiguration.html
     */
    interface ReplicationConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that Amazon S3 assumes when replicating objects.
         *
         * For more information, see [How to Set Up Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-how-setup.html) in the *Amazon S3 User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationconfiguration.html#cfn-s3-bucket-replicationconfiguration-role
         */
        readonly role: string;
        /**
         * A container for one or more replication rules.
         *
         * A replication configuration must have at least one rule and can contain a maximum of 1,000 rules.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationconfiguration.html#cfn-s3-bucket-replicationconfiguration-rules
         */
        readonly rules: Array<cdk.IResolvable | CfnBucket.ReplicationRuleProperty> | cdk.IResolvable;
    }
    /**
     * Specifies which Amazon S3 objects to replicate and where to store the replicas.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrule.html
     */
    interface ReplicationRuleProperty {
        /**
         * Specifies whether Amazon S3 replicates delete markers.
         *
         * If you specify a `Filter` in your replication configuration, you must also include a `DeleteMarkerReplication` element. If your `Filter` includes a `Tag` element, the `DeleteMarkerReplication` `Status` must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see [Basic Rule Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config) .
         *
         * For more information about delete marker replication, see [Basic Rule Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html) .
         *
         * > If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see [Backward Compatibility](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrule.html#cfn-s3-bucket-replicationrule-deletemarkerreplication
         */
        readonly deleteMarkerReplication?: CfnBucket.DeleteMarkerReplicationProperty | cdk.IResolvable;
        /**
         * A container for information about the replication destination and its configurations including enabling the S3 Replication Time Control (S3 RTC).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrule.html#cfn-s3-bucket-replicationrule-destination
         */
        readonly destination: cdk.IResolvable | CfnBucket.ReplicationDestinationProperty;
        /**
         * A filter that identifies the subset of objects to which the replication rule applies.
         *
         * A `Filter` must specify exactly one `Prefix` , `TagFilter` , or an `And` child element. The use of the filter field indicates that this is a V2 replication configuration. This field isn't supported in a V1 replication configuration.
         *
         * > V1 replication configuration only supports filtering by key prefix. To filter using a V1 replication configuration, add the `Prefix` directly as a child element of the `Rule` element.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrule.html#cfn-s3-bucket-replicationrule-filter
         */
        readonly filter?: cdk.IResolvable | CfnBucket.ReplicationRuleFilterProperty;
        /**
         * A unique identifier for the rule.
         *
         * The maximum value is 255 characters. If you don't specify a value, AWS CloudFormation generates a random ID. When using a V2 replication configuration this property is capitalized as "ID".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrule.html#cfn-s3-bucket-replicationrule-id
         */
        readonly id?: string;
        /**
         * An object key name prefix that identifies the object or objects to which the rule applies.
         *
         * The maximum prefix length is 1,024 characters. To include all objects in a bucket, specify an empty string. To filter using a V1 replication configuration, add the `Prefix` directly as a child element of the `Rule` element.
         *
         * > Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrule.html#cfn-s3-bucket-replicationrule-prefix
         */
        readonly prefix?: string;
        /**
         * The priority indicates which rule has precedence whenever two or more replication rules conflict.
         *
         * Amazon S3 will attempt to replicate objects according to all replication rules. However, if there are two or more rules with the same destination bucket, then objects will be replicated according to the rule with the highest priority. The higher the number, the higher the priority.
         *
         * For more information, see [Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html) in the *Amazon S3 User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrule.html#cfn-s3-bucket-replicationrule-priority
         */
        readonly priority?: number;
        /**
         * A container that describes additional filters for identifying the source objects that you want to replicate.
         *
         * You can choose to enable or disable the replication of these objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrule.html#cfn-s3-bucket-replicationrule-sourceselectioncriteria
         */
        readonly sourceSelectionCriteria?: cdk.IResolvable | CfnBucket.SourceSelectionCriteriaProperty;
        /**
         * Specifies whether the rule is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrule.html#cfn-s3-bucket-replicationrule-status
         */
        readonly status: string;
    }
    /**
     * Specifies whether Amazon S3 replicates delete markers.
     *
     * If you specify a `Filter` in your replication configuration, you must also include a `DeleteMarkerReplication` element. If your `Filter` includes a `Tag` element, the `DeleteMarkerReplication` `Status` must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see [Basic Rule Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config) .
     *
     * For more information about delete marker replication, see [Basic Rule Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html) .
     *
     * > If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see [Backward Compatibility](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-deletemarkerreplication.html
     */
    interface DeleteMarkerReplicationProperty {
        /**
         * Indicates whether to replicate delete markers.
         *
         * Disabled by default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-deletemarkerreplication.html#cfn-s3-bucket-deletemarkerreplication-status
         */
        readonly status?: string;
    }
    /**
     * A container for information about the replication destination and its configurations including enabling the S3 Replication Time Control (S3 RTC).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationdestination.html
     */
    interface ReplicationDestinationProperty {
        /**
         * Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS account that owns the destination bucket.
         *
         * If this is not specified in the replication configuration, the replicas are owned by same AWS account that owns the source object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationdestination.html#cfn-s3-bucket-replicationdestination-accesscontroltranslation
         */
        readonly accessControlTranslation?: CfnBucket.AccessControlTranslationProperty | cdk.IResolvable;
        /**
         * Destination bucket owner account ID.
         *
         * In a cross-account scenario, if you direct Amazon S3 to change replica ownership to the AWS account that owns the destination bucket by specifying the `AccessControlTranslation` property, this is the account ID of the destination bucket owner. For more information, see [Cross-Region Replication Additional Configuration: Change Replica Owner](https://docs.aws.amazon.com/AmazonS3/latest/dev/crr-change-owner.html) in the *Amazon S3 User Guide* .
         *
         * If you specify the `AccessControlTranslation` property, the `Account` property is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationdestination.html#cfn-s3-bucket-replicationdestination-account
         */
        readonly account?: string;
        /**
         * The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store the results.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationdestination.html#cfn-s3-bucket-replicationdestination-bucket
         */
        readonly bucket: string;
        /**
         * Specifies encryption-related information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationdestination.html#cfn-s3-bucket-replicationdestination-encryptionconfiguration
         */
        readonly encryptionConfiguration?: CfnBucket.EncryptionConfigurationProperty | cdk.IResolvable;
        /**
         * A container specifying replication metrics-related settings enabling replication metrics and events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationdestination.html#cfn-s3-bucket-replicationdestination-metrics
         */
        readonly metrics?: cdk.IResolvable | CfnBucket.MetricsProperty;
        /**
         * A container specifying S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated.
         *
         * Must be specified together with a `Metrics` block.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationdestination.html#cfn-s3-bucket-replicationdestination-replicationtime
         */
        readonly replicationTime?: cdk.IResolvable | CfnBucket.ReplicationTimeProperty;
        /**
         * The storage class to use when replicating objects, such as S3 Standard or reduced redundancy.
         *
         * By default, Amazon S3 uses the storage class of the source object to create the object replica.
         *
         * For valid values, see the `StorageClass` element of the [PUT Bucket replication](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html) action in the *Amazon S3 API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationdestination.html#cfn-s3-bucket-replicationdestination-storageclass
         */
        readonly storageClass?: string;
    }
    /**
     * Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS account that owns the destination bucket.
     *
     * If this is not specified in the replication configuration, the replicas are owned by same AWS account that owns the source object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-accesscontroltranslation.html
     */
    interface AccessControlTranslationProperty {
        /**
         * Specifies the replica ownership.
         *
         * For default and valid values, see [PUT bucket replication](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html) in the *Amazon S3 API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-accesscontroltranslation.html#cfn-s3-bucket-accesscontroltranslation-owner
         */
        readonly owner: string;
    }
    /**
     * Specifies encryption-related information for an Amazon S3 bucket that is a destination for replicated objects.
     *
     * > If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then AWS KMS resolves the key within the requester’s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-encryptionconfiguration.html
     */
    interface EncryptionConfigurationProperty {
        /**
         * Specifies the ID (Key ARN or Alias ARN) of the customer managed AWS KMS key stored in AWS Key Management Service (KMS) for the destination bucket.
         *
         * Amazon S3 uses this key to encrypt replica objects. Amazon S3 only supports symmetric encryption KMS keys. For more information, see [Asymmetric keys in AWS KMS](https://docs.aws.amazon.com//kms/latest/developerguide/symmetric-asymmetric.html) in the *AWS Key Management Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-encryptionconfiguration.html#cfn-s3-bucket-encryptionconfiguration-replicakmskeyid
         */
        readonly replicaKmsKeyId: string;
    }
    /**
     * A container specifying replication metrics-related settings enabling replication metrics and events.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metrics.html
     */
    interface MetricsProperty {
        /**
         * A container specifying the time threshold for emitting the `s3:Replication:OperationMissedThreshold` event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metrics.html#cfn-s3-bucket-metrics-eventthreshold
         */
        readonly eventThreshold?: cdk.IResolvable | CfnBucket.ReplicationTimeValueProperty;
        /**
         * Specifies whether the replication metrics are enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metrics.html#cfn-s3-bucket-metrics-status
         */
        readonly status: string;
    }
    /**
     * A container specifying the time value for S3 Replication Time Control (S3 RTC) and replication metrics `EventThreshold` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationtimevalue.html
     */
    interface ReplicationTimeValueProperty {
        /**
         * Contains an integer specifying time in minutes.
         *
         * Valid value: 15
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationtimevalue.html#cfn-s3-bucket-replicationtimevalue-minutes
         */
        readonly minutes: number;
    }
    /**
     * A container specifying S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated.
     *
     * Must be specified together with a `Metrics` block.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationtime.html
     */
    interface ReplicationTimeProperty {
        /**
         * Specifies whether the replication time is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationtime.html#cfn-s3-bucket-replicationtime-status
         */
        readonly status: string;
        /**
         * A container specifying the time by which replication should be complete for all objects and operations on objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationtime.html#cfn-s3-bucket-replicationtime-time
         */
        readonly time: cdk.IResolvable | CfnBucket.ReplicationTimeValueProperty;
    }
    /**
     * A filter that identifies the subset of objects to which the replication rule applies.
     *
     * A `Filter` must specify exactly one `Prefix` , `TagFilter` , or an `And` child element.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrulefilter.html
     */
    interface ReplicationRuleFilterProperty {
        /**
         * A container for specifying rule filters.
         *
         * The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. For example:
         *
         * - If you specify both a `Prefix` and a `TagFilter` , wrap these filters in an `And` tag.
         * - If you specify a filter based on multiple tags, wrap the `TagFilter` elements in an `And` tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrulefilter.html#cfn-s3-bucket-replicationrulefilter-and
         */
        readonly and?: cdk.IResolvable | CfnBucket.ReplicationRuleAndOperatorProperty;
        /**
         * An object key name prefix that identifies the subset of objects to which the rule applies.
         *
         * > Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrulefilter.html#cfn-s3-bucket-replicationrulefilter-prefix
         */
        readonly prefix?: string;
        /**
         * A container for specifying a tag key and value.
         *
         * The rule applies only to objects that have the tag in their tag set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationrulefilter.html#cfn-s3-bucket-replicationrulefilter-tagfilter
         */
        readonly tagFilter?: cdk.IResolvable | CfnBucket.TagFilterProperty;
    }
    /**
     * A container for specifying rule filters.
     *
     * The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter.
     *
     * For example:
     *
     * - If you specify both a `Prefix` and a `TagFilter` , wrap these filters in an `And` tag.
     * - If you specify a filter based on multiple tags, wrap the `TagFilter` elements in an `And` tag
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationruleandoperator.html
     */
    interface ReplicationRuleAndOperatorProperty {
        /**
         * An object key name prefix that identifies the subset of objects to which the rule applies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationruleandoperator.html#cfn-s3-bucket-replicationruleandoperator-prefix
         */
        readonly prefix?: string;
        /**
         * An array of tags containing key and value pairs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicationruleandoperator.html#cfn-s3-bucket-replicationruleandoperator-tagfilters
         */
        readonly tagFilters?: Array<cdk.IResolvable | CfnBucket.TagFilterProperty> | cdk.IResolvable;
    }
    /**
     * A container that describes additional filters for identifying the source objects that you want to replicate.
     *
     * You can choose to enable or disable the replication of these objects.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-sourceselectioncriteria.html
     */
    interface SourceSelectionCriteriaProperty {
        /**
         * A filter that you can specify for selection for modifications on replicas.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-sourceselectioncriteria.html#cfn-s3-bucket-sourceselectioncriteria-replicamodifications
         */
        readonly replicaModifications?: cdk.IResolvable | CfnBucket.ReplicaModificationsProperty;
        /**
         * A container for filter information for the selection of Amazon S3 objects encrypted with AWS KMS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-sourceselectioncriteria.html#cfn-s3-bucket-sourceselectioncriteria-ssekmsencryptedobjects
         */
        readonly sseKmsEncryptedObjects?: cdk.IResolvable | CfnBucket.SseKmsEncryptedObjectsProperty;
    }
    /**
     * A filter that you can specify for selection for modifications on replicas.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicamodifications.html
     */
    interface ReplicaModificationsProperty {
        /**
         * Specifies whether Amazon S3 replicates modifications on replicas.
         *
         * *Allowed values* : `Enabled` | `Disabled`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-replicamodifications.html#cfn-s3-bucket-replicamodifications-status
         */
        readonly status: string;
    }
    /**
     * A container for filter information for the selection of S3 objects encrypted with AWS KMS.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ssekmsencryptedobjects.html
     */
    interface SseKmsEncryptedObjectsProperty {
        /**
         * Specifies whether Amazon S3 replicates objects created with server-side encryption using an AWS KMS key stored in AWS Key Management Service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ssekmsencryptedobjects.html#cfn-s3-bucket-ssekmsencryptedobjects-status
         */
        readonly status: string;
    }
    /**
     * Describes the versioning state of an Amazon S3 bucket.
     *
     * For more information, see [PUT Bucket versioning](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html) in the *Amazon S3 API Reference* .
     *
     * > When you enable versioning on a bucket for the first time, it might take a short amount of time for the change to be fully propagated. We recommend that you wait for 15 minutes after enabling versioning before issuing write operations ( `PUT` or `DELETE` ) on objects in the bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-versioningconfiguration.html
     */
    interface VersioningConfigurationProperty {
        /**
         * The versioning state of the bucket.
         *
         * @default - "Suspended"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-versioningconfiguration.html#cfn-s3-bucket-versioningconfiguration-status
         */
        readonly status: string;
    }
    /**
     * Specifies website configuration parameters for an Amazon S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-websiteconfiguration.html
     */
    interface WebsiteConfigurationProperty {
        /**
         * The name of the error document for the website.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-websiteconfiguration.html#cfn-s3-bucket-websiteconfiguration-errordocument
         */
        readonly errorDocument?: string;
        /**
         * The name of the index document for the website.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-websiteconfiguration.html#cfn-s3-bucket-websiteconfiguration-indexdocument
         */
        readonly indexDocument?: string;
        /**
         * The redirect behavior for every request to this bucket's website endpoint.
         *
         * > If you specify this property, you can't specify any other property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-websiteconfiguration.html#cfn-s3-bucket-websiteconfiguration-redirectallrequeststo
         */
        readonly redirectAllRequestsTo?: cdk.IResolvable | CfnBucket.RedirectAllRequestsToProperty;
        /**
         * Rules that define when a redirect is applied and the redirect behavior.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-websiteconfiguration.html#cfn-s3-bucket-websiteconfiguration-routingrules
         */
        readonly routingRules?: Array<cdk.IResolvable | CfnBucket.RoutingRuleProperty> | cdk.IResolvable;
    }
    /**
     * Specifies the redirect behavior of all requests to a website endpoint of an Amazon S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-redirectallrequeststo.html
     */
    interface RedirectAllRequestsToProperty {
        /**
         * Name of the host where requests are redirected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-redirectallrequeststo.html#cfn-s3-bucket-redirectallrequeststo-hostname
         */
        readonly hostName: string;
        /**
         * Protocol to use when redirecting requests.
         *
         * The default is the protocol that is used in the original request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-redirectallrequeststo.html#cfn-s3-bucket-redirectallrequeststo-protocol
         */
        readonly protocol?: string;
    }
    /**
     * Specifies the redirect behavior and when a redirect is applied.
     *
     * For more information about routing rules, see [Configuring advanced conditional redirects](https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html#advanced-conditional-redirects) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-routingrule.html
     */
    interface RoutingRuleProperty {
        /**
         * Container for redirect information.
         *
         * You can redirect requests to another host, to another page, or with another protocol. In the event of an error, you can specify a different error code to return.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-routingrule.html#cfn-s3-bucket-routingrule-redirectrule
         */
        readonly redirectRule: cdk.IResolvable | CfnBucket.RedirectRuleProperty;
        /**
         * A container for describing a condition that must be met for the specified redirect to apply.
         *
         * For example, 1. If request is for pages in the `/docs` folder, redirect to the `/documents` folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-routingrule.html#cfn-s3-bucket-routingrule-routingrulecondition
         */
        readonly routingRuleCondition?: cdk.IResolvable | CfnBucket.RoutingRuleConditionProperty;
    }
    /**
     * Specifies how requests are redirected.
     *
     * In the event of an error, you can specify a different error code to return.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-redirectrule.html
     */
    interface RedirectRuleProperty {
        /**
         * The host name to use in the redirect request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-redirectrule.html#cfn-s3-bucket-redirectrule-hostname
         */
        readonly hostName?: string;
        /**
         * The HTTP redirect code to use on the response.
         *
         * Not required if one of the siblings is present.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-redirectrule.html#cfn-s3-bucket-redirectrule-httpredirectcode
         */
        readonly httpRedirectCode?: string;
        /**
         * Protocol to use when redirecting requests.
         *
         * The default is the protocol that is used in the original request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-redirectrule.html#cfn-s3-bucket-redirectrule-protocol
         */
        readonly protocol?: string;
        /**
         * The object key prefix to use in the redirect request.
         *
         * For example, to redirect requests for all pages with prefix `docs/` (objects in the `docs/` folder) to `documents/` , you can set a condition block with `KeyPrefixEquals` set to `docs/` and in the Redirect set `ReplaceKeyPrefixWith` to `/documents` . Not required if one of the siblings is present. Can be present only if `ReplaceKeyWith` is not provided.
         *
         * > Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-redirectrule.html#cfn-s3-bucket-redirectrule-replacekeyprefixwith
         */
        readonly replaceKeyPrefixWith?: string;
        /**
         * The specific object key to use in the redirect request.
         *
         * For example, redirect request to `error.html` . Not required if one of the siblings is present. Can be present only if `ReplaceKeyPrefixWith` is not provided.
         *
         * > Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-redirectrule.html#cfn-s3-bucket-redirectrule-replacekeywith
         */
        readonly replaceKeyWith?: string;
    }
    /**
     * A container for describing a condition that must be met for the specified redirect to apply.
     *
     * For example, 1. If request is for pages in the `/docs` folder, redirect to the `/documents` folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-routingrulecondition.html
     */
    interface RoutingRuleConditionProperty {
        /**
         * The HTTP error code when the redirect is applied.
         *
         * In the event of an error, if the error code equals this value, then the specified redirect is applied.
         *
         * Required when parent element `Condition` is specified and sibling `KeyPrefixEquals` is not specified. If both are specified, then both must be true for the redirect to be applied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-routingrulecondition.html#cfn-s3-bucket-routingrulecondition-httperrorcodereturnedequals
         */
        readonly httpErrorCodeReturnedEquals?: string;
        /**
         * The object key name prefix when the redirect is applied.
         *
         * For example, to redirect requests for `ExamplePage.html` , the key prefix will be `ExamplePage.html` . To redirect request for all pages with the prefix `docs/` , the key prefix will be `/docs` , which identifies all objects in the docs/ folder.
         *
         * Required when the parent element `Condition` is specified and sibling `HttpErrorCodeReturnedEquals` is not specified. If both conditions are specified, both must be true for the redirect to be applied.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-routingrulecondition.html#cfn-s3-bucket-routingrulecondition-keyprefixequals
         */
        readonly keyPrefixEquals?: string;
    }
    /**
     * The metadata table configuration of an Amazon S3 general purpose bucket.
     *
     * For more information, see [Accelerating data discovery with S3 Metadata](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-overview.html) and [Setting up permissions for configuring metadata tables](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metadatatableconfiguration.html
     */
    interface MetadataTableConfigurationProperty {
        /**
         * The destination information for the metadata table configuration.
         *
         * The destination table bucket must be in the same Region and AWS account as the general purpose bucket. The specified metadata table name must be unique within the `aws_s3_metadata` namespace in the destination table bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metadatatableconfiguration.html#cfn-s3-bucket-metadatatableconfiguration-s3tablesdestination
         */
        readonly s3TablesDestination: cdk.IResolvable | CfnBucket.S3TablesDestinationProperty;
    }
    /**
     * The destination information for the metadata table configuration.
     *
     * The destination table bucket must be in the same Region and AWS account as the general purpose bucket. The specified metadata table name must be unique within the `aws_s3_metadata` namespace in the destination table bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-s3tablesdestination.html
     */
    interface S3TablesDestinationProperty {
        /**
         * The Amazon Resource Name (ARN) for the metadata table in the metadata table configuration.
         *
         * The specified metadata table name must be unique within the `aws_s3_metadata` namespace in the destination table bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-s3tablesdestination.html#cfn-s3-bucket-s3tablesdestination-tablearn
         */
        readonly tableArn?: string;
        /**
         * The Amazon Resource Name (ARN) for the table bucket that's specified as the destination in the metadata table configuration.
         *
         * The destination table bucket must be in the same Region and AWS account as the general purpose bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-s3tablesdestination.html#cfn-s3-bucket-s3tablesdestination-tablebucketarn
         */
        readonly tableBucketArn: string;
        /**
         * The name for the metadata table in your metadata table configuration.
         *
         * The specified metadata table name must be unique within the `aws_s3_metadata` namespace in the destination table bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-s3tablesdestination.html#cfn-s3-bucket-s3tablesdestination-tablename
         */
        readonly tableName: string;
        /**
         * The table bucket namespace for the metadata table in your metadata table configuration.
         *
         * This value is always `aws_s3_metadata` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-s3tablesdestination.html#cfn-s3-bucket-s3tablesdestination-tablenamespace
         */
        readonly tableNamespace?: string;
    }
}
/**
 * Properties for defining a `CfnBucket`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html
 */
export interface CfnBucketProps {
    /**
     * Configures the transfer acceleration state for an Amazon S3 bucket.
     *
     * For more information, see [Amazon S3 Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html) in the *Amazon S3 User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-accelerateconfiguration
     */
    readonly accelerateConfiguration?: CfnBucket.AccelerateConfigurationProperty | cdk.IResolvable;
    /**
     * > This is a legacy property, and it is not recommended for most use cases.
     *
     * A majority of modern use cases in Amazon S3 no longer require the use of ACLs, and we recommend that you keep ACLs disabled. For more information, see [Controlling object ownership](https://docs.aws.amazon.com//AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon S3 User Guide* .
     *
     * A canned access control list (ACL) that grants predefined permissions to the bucket. For more information about canned ACLs, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) in the *Amazon S3 User Guide* .
     *
     * S3 buckets are created with ACLs disabled by default. Therefore, unless you explicitly set the [AWS::S3::OwnershipControls](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrols.html) property to enable ACLs, your resource will fail to deploy with any value other than Private. Use cases requiring ACLs are uncommon.
     *
     * The majority of access control configurations can be successfully and more easily achieved with bucket policies. For more information, see [AWS::S3::BucketPolicy](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html) . For examples of common policy configurations, including S3 Server Access Logs buckets and more, see [Bucket policy examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html) in the *Amazon S3 User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-accesscontrol
     */
    readonly accessControl?: string;
    /**
     * Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-analyticsconfigurations
     */
    readonly analyticsConfigurations?: Array<CfnBucket.AnalyticsConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed keys (SSE-S3), AWS KMS-managed keys (SSE-KMS), or dual-layer server-side encryption with KMS-managed keys (DSSE-KMS).
     *
     * For information about the Amazon S3 default encryption feature, see [Amazon S3 Default Encryption for S3 Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) in the *Amazon S3 User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-bucketencryption
     */
    readonly bucketEncryption?: CfnBucket.BucketEncryptionProperty | cdk.IResolvable;
    /**
     * A name for the bucket.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the bucket name. The bucket name must contain only lowercase letters, numbers, periods (.), and dashes (-) and must follow [Amazon S3 bucket restrictions and limitations](https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html) . For more information, see [Rules for naming Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucketnamingrules.html) in the *Amazon S3 User Guide* .
     *
     * > If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you need to replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-bucketname
     */
    readonly bucketName?: string;
    /**
     * Describes the cross-origin access configuration for objects in an Amazon S3 bucket.
     *
     * For more information, see [Enabling Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) in the *Amazon S3 User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-corsconfiguration
     */
    readonly corsConfiguration?: CfnBucket.CorsConfigurationProperty | cdk.IResolvable;
    /**
     * Defines how Amazon S3 handles Intelligent-Tiering storage.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-intelligenttieringconfigurations
     */
    readonly intelligentTieringConfigurations?: Array<CfnBucket.IntelligentTieringConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies the inventory configuration for an Amazon S3 bucket.
     *
     * For more information, see [GET Bucket inventory](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html) in the *Amazon S3 API Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-inventoryconfigurations
     */
    readonly inventoryConfigurations?: Array<CfnBucket.InventoryConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies the lifecycle configuration for objects in an Amazon S3 bucket.
     *
     * For more information, see [Object Lifecycle Management](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) in the *Amazon S3 User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-lifecycleconfiguration
     */
    readonly lifecycleConfiguration?: cdk.IResolvable | CfnBucket.LifecycleConfigurationProperty;
    /**
     * Settings that define where logs are stored.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-loggingconfiguration
     */
    readonly loggingConfiguration?: cdk.IResolvable | CfnBucket.LoggingConfigurationProperty;
    /**
     * The metadata table configuration of an Amazon S3 general purpose bucket.
     *
     * For more information, see [Accelerating data discovery with S3 Metadata](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-overview.html) and [Setting up permissions for configuring metadata tables](https://docs.aws.amazon.com/AmazonS3/latest/userguide/metadata-tables-permissions.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-metadatatableconfiguration
     */
    readonly metadataTableConfiguration?: cdk.IResolvable | CfnBucket.MetadataTableConfigurationProperty;
    /**
     * Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket.
     *
     * If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see [PutBucketMetricsConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-metricsconfigurations
     */
    readonly metricsConfigurations?: Array<cdk.IResolvable | CfnBucket.MetricsConfigurationProperty> | cdk.IResolvable;
    /**
     * Configuration that defines how Amazon S3 handles bucket notifications.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-notificationconfiguration
     */
    readonly notificationConfiguration?: cdk.IResolvable | CfnBucket.NotificationConfigurationProperty;
    /**
     * > This operation is not supported for directory buckets.
     *
     * Places an Object Lock configuration on the specified bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see [Locking Objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html) .
     *
     * > - The `DefaultRetention` settings require both a mode and a period.
     * > - The `DefaultRetention` period can be either `Days` or `Years` but you must select one. You cannot specify `Days` and `Years` at the same time.
     * > - You can enable Object Lock for new or existing buckets. For more information, see [Configuring Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-configure.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-objectlockconfiguration
     */
    readonly objectLockConfiguration?: cdk.IResolvable | CfnBucket.ObjectLockConfigurationProperty;
    /**
     * Indicates whether this bucket has an Object Lock configuration enabled.
     *
     * Enable `ObjectLockEnabled` when you apply `ObjectLockConfiguration` to a bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-objectlockenabled
     */
    readonly objectLockEnabled?: boolean | cdk.IResolvable;
    /**
     * Configuration that defines how Amazon S3 handles Object Ownership rules.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-ownershipcontrols
     */
    readonly ownershipControls?: cdk.IResolvable | CfnBucket.OwnershipControlsProperty;
    /**
     * Configuration that defines how Amazon S3 handles public access.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-publicaccessblockconfiguration
     */
    readonly publicAccessBlockConfiguration?: cdk.IResolvable | CfnBucket.PublicAccessBlockConfigurationProperty;
    /**
     * Configuration for replicating objects in an S3 bucket.
     *
     * To enable replication, you must also enable versioning by using the `VersioningConfiguration` property.
     *
     * Amazon S3 can store replicated objects in a single destination bucket or multiple destination buckets. The destination bucket or buckets must already exist.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-replicationconfiguration
     */
    readonly replicationConfiguration?: cdk.IResolvable | CfnBucket.ReplicationConfigurationProperty;
    /**
     * An arbitrary set of tags (key-value pairs) for this S3 bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Enables multiple versions of all objects in this bucket.
     *
     * You might enable versioning to prevent objects from being deleted or overwritten by mistake or to archive objects so that you can retrieve previous versions of them.
     *
     * > When you enable versioning on a bucket for the first time, it might take a short amount of time for the change to be fully propagated. We recommend that you wait for 15 minutes after enabling versioning before issuing write operations ( `PUT` or `DELETE` ) on objects in the bucket.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-versioningconfiguration
     */
    readonly versioningConfiguration?: cdk.IResolvable | CfnBucket.VersioningConfigurationProperty;
    /**
     * Information used to configure the bucket as a static website.
     *
     * For more information, see [Hosting Websites on Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucket.html#cfn-s3-bucket-websiteconfiguration
     */
    readonly websiteConfiguration?: cdk.IResolvable | CfnBucket.WebsiteConfigurationProperty;
}
/**
 * Applies an Amazon S3 bucket policy to an Amazon S3 bucket.
 *
 * If you are using an identity other than the root user of the AWS account that owns the bucket, the calling identity must have the `PutBucketPolicy` permissions on the specified bucket and belong to the bucket owner's account in order to use this operation.
 *
 * If you don't have `PutBucketPolicy` permissions, Amazon S3 returns a `403 Access Denied` error. If you have the correct permissions, but you're not using an identity that belongs to the bucket owner's account, Amazon S3 returns a `405 Method Not Allowed` error.
 *
 * > As a security precaution, the root user of the AWS account that owns a bucket can always use this operation, even if the policy explicitly denies the root user the ability to perform this action.
 *
 * When using the `AWS::S3::BucketPolicy` resource, you can create, update, and delete bucket policies for S3 buckets located in regions different from the stack's region. This cross-region bucket policy modification functionality is supported for backward compatibility with existing workflows.
 *
 * > If the [DeletionPolicy attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html) is not specified or set to `Delete` , the bucket policy will be removed when the stack is deleted. If set to `Retain` , the bucket policy will be preserved even after the stack is deleted.
 *
 * For example, a CloudFormation stack in `us-east-1` can use the `AWS::S3::BucketPolicy` resource to manage the bucket policy for an S3 bucket in `us-west-2` . The retention or removal of the bucket policy during the stack deletion is determined by the `DeletionPolicy` attribute specified in the stack template.
 *
 * For more information, see [Bucket policy examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html) .
 *
 * The following operations are related to `PutBucketPolicy` :
 *
 * - [CreateBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CreateBucket.html)
 * - [DeleteBucket](https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteBucket.html)
 *
 * @cloudformationResource AWS::S3::BucketPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucketpolicy.html
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
     * The name of the Amazon S3 bucket to which the policy applies.
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucketpolicy.html
 */
export interface CfnBucketPolicyProps {
    /**
     * The name of the Amazon S3 bucket to which the policy applies.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucketpolicy.html#cfn-s3-bucketpolicy-bucket
     */
    readonly bucket: string;
    /**
     * A policy document containing permissions to add to the specified bucket.
     *
     * In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM. For more information, see the AWS::IAM::Policy [PolicyDocument](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-policydocument) resource description in this guide and [Access Policy Language Overview](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html) in the *Amazon S3 User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-bucketpolicy.html#cfn-s3-bucketpolicy-policydocument
     */
    readonly policyDocument: any | cdk.IResolvable;
}
/**
 * The `AWS::S3::MultiRegionAccessPoint` resource creates an Amazon S3 Multi-Region Access Point.
 *
 * To learn more about Multi-Region Access Points, see [Multi-Region Access Points in Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/MultiRegionAccessPoints.html) in the in the *Amazon S3 User Guide* .
 *
 * @cloudformationResource AWS::S3::MultiRegionAccessPoint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html
 */
export declare class CfnMultiRegionAccessPoint extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMultiRegionAccessPoint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMultiRegionAccessPoint;
    /**
     * The alias for the Multi-Region Access Point. For more information about the distinction between the name and the alias of an Multi-Region Access Point, see [Managing Multi-Region Access Points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/CreatingMultiRegionAccessPoints.html#multi-region-access-point-naming) in the *Amazon S3 User Guide* .
     *
     * @cloudformationAttribute Alias
     */
    readonly attrAlias: string;
    /**
     * The timestamp of when the Multi-Region Access Point is created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The name of the Multi-Region Access Point.
     */
    name?: string;
    /**
     * The PublicAccessBlock configuration that you want to apply to this Multi-Region Access Point.
     */
    publicAccessBlockConfiguration?: cdk.IResolvable | CfnMultiRegionAccessPoint.PublicAccessBlockConfigurationProperty;
    /**
     * A collection of the Regions and buckets associated with the Multi-Region Access Point.
     */
    regions: Array<cdk.IResolvable | CfnMultiRegionAccessPoint.RegionProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMultiRegionAccessPointProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMultiRegionAccessPoint {
    /**
     * The PublicAccessBlock configuration that you want to apply to this Amazon S3 Multi-Region Access Point.
     *
     * You can enable the configuration options in any combination. For more information about when Amazon S3 considers an object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html
     */
    interface PublicAccessBlockConfigurationProperty {
        /**
         * Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket.
         *
         * Setting this element to `TRUE` causes the following behavior:
         *
         * - PUT Bucket ACL and PUT Object ACL calls fail if the specified ACL is public.
         * - PUT Object calls fail if the request includes a public ACL.
         * - PUT Bucket calls fail if the request includes a public ACL.
         *
         * Enabling this setting doesn't affect existing policies or ACLs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration-blockpublicacls
         */
        readonly blockPublicAcls?: boolean | cdk.IResolvable;
        /**
         * Specifies whether Amazon S3 should block public bucket policies for this bucket.
         *
         * Setting this element to `TRUE` causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.
         *
         * Enabling this setting doesn't affect existing bucket policies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration-blockpublicpolicy
         */
        readonly blockPublicPolicy?: boolean | cdk.IResolvable;
        /**
         * Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket.
         *
         * Setting this element to `TRUE` causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket.
         *
         * Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration-ignorepublicacls
         */
        readonly ignorePublicAcls?: boolean | cdk.IResolvable;
        /**
         * Specifies whether Amazon S3 should restrict public bucket policies for this bucket.
         *
         * Setting this element to `TRUE` restricts access to this bucket to only AWS service principals and authorized users within this account if the bucket has a public policy.
         *
         * Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-publicaccessblockconfiguration.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration-restrictpublicbuckets
         */
        readonly restrictPublicBuckets?: boolean | cdk.IResolvable;
    }
    /**
     * A bucket associated with a specific Region when creating Multi-Region Access Points.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-region.html
     */
    interface RegionProperty {
        /**
         * The name of the associated bucket for the Region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-region.html#cfn-s3-multiregionaccesspoint-region-bucket
         */
        readonly bucket: string;
        /**
         * The AWS account ID that owns the Amazon S3 bucket that's associated with this Multi-Region Access Point.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspoint-region.html#cfn-s3-multiregionaccesspoint-region-bucketaccountid
         */
        readonly bucketAccountId?: string;
    }
}
/**
 * Properties for defining a `CfnMultiRegionAccessPoint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html
 */
export interface CfnMultiRegionAccessPointProps {
    /**
     * The name of the Multi-Region Access Point.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html#cfn-s3-multiregionaccesspoint-name
     */
    readonly name?: string;
    /**
     * The PublicAccessBlock configuration that you want to apply to this Multi-Region Access Point.
     *
     * You can enable the configuration options in any combination. For more information about when Amazon S3 considers an object public, see [The Meaning of "Public"](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status) in the *Amazon S3 User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html#cfn-s3-multiregionaccesspoint-publicaccessblockconfiguration
     */
    readonly publicAccessBlockConfiguration?: cdk.IResolvable | CfnMultiRegionAccessPoint.PublicAccessBlockConfigurationProperty;
    /**
     * A collection of the Regions and buckets associated with the Multi-Region Access Point.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspoint.html#cfn-s3-multiregionaccesspoint-regions
     */
    readonly regions: Array<cdk.IResolvable | CfnMultiRegionAccessPoint.RegionProperty> | cdk.IResolvable;
}
/**
 * Applies an Amazon S3 access policy to an Amazon S3 Multi-Region Access Point.
 *
 * It is not possible to delete an access policy for a Multi-Region Access Point from the CloudFormation template. When you attempt to delete the policy, CloudFormation updates the policy using `DeletionPolicy:Retain` and `UpdateReplacePolicy:Retain` . CloudFormation updates the policy to only allow access to the account that created the bucket.
 *
 * @cloudformationResource AWS::S3::MultiRegionAccessPointPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html
 */
export declare class CfnMultiRegionAccessPointPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMultiRegionAccessPointPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMultiRegionAccessPointPolicy;
    /**
     * The Policy Status associated with this Multi Region Access Point
     *
     * @cloudformationAttribute PolicyStatus
     */
    readonly attrPolicyStatus: cdk.IResolvable;
    /**
     * Specifies whether the policy is public or not.
     *
     * @cloudformationAttribute PolicyStatus.IsPublic
     */
    readonly attrPolicyStatusIsPublic: string;
    /**
     * The name of the Multi-Region Access Point.
     */
    mrapName: string;
    /**
     * The access policy associated with the Multi-Region Access Point.
     */
    policy: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMultiRegionAccessPointPolicyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMultiRegionAccessPointPolicy {
    /**
     * The container element for a bucket's policy status.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspointpolicy-policystatus.html
     */
    interface PolicyStatusProperty {
        /**
         * The policy status for this bucket.
         *
         * `TRUE` indicates that this bucket is public. `FALSE` indicates that the bucket is not public.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-multiregionaccesspointpolicy-policystatus.html#cfn-s3-multiregionaccesspointpolicy-policystatus-ispublic
         */
        readonly isPublic: string;
    }
}
/**
 * Properties for defining a `CfnMultiRegionAccessPointPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html
 */
export interface CfnMultiRegionAccessPointPolicyProps {
    /**
     * The name of the Multi-Region Access Point.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html#cfn-s3-multiregionaccesspointpolicy-mrapname
     */
    readonly mrapName: string;
    /**
     * The access policy associated with the Multi-Region Access Point.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-multiregionaccesspointpolicy.html#cfn-s3-multiregionaccesspointpolicy-policy
     */
    readonly policy: any | cdk.IResolvable;
}
/**
 * The AWS::S3::StorageLens resource creates an Amazon S3 Storage Lens configuration.
 *
 * @cloudformationResource AWS::S3::StorageLens
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html
 */
export declare class CfnStorageLens extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStorageLens from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStorageLens;
    /**
     * This property contains the details of the ARN of the S3 Storage Lens configuration. This property is read-only.
     *
     * @cloudformationAttribute StorageLensConfiguration.StorageLensArn
     */
    readonly attrStorageLensConfigurationStorageLensArn: string;
    /**
     * This resource contains the details Amazon S3 Storage Lens configuration.
     */
    storageLensConfiguration: cdk.IResolvable | CfnStorageLens.StorageLensConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A set of tags (key–value pairs) to associate with the Storage Lens configuration.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStorageLensProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStorageLens {
    /**
     * This is the property of the Amazon S3 Storage Lens configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensconfiguration.html
     */
    interface StorageLensConfigurationProperty {
        /**
         * This property contains the details of the account-level metrics for Amazon S3 Storage Lens configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensconfiguration.html#cfn-s3-storagelens-storagelensconfiguration-accountlevel
         */
        readonly accountLevel: CfnStorageLens.AccountLevelProperty | cdk.IResolvable;
        /**
         * This property contains the details of the AWS Organization for the S3 Storage Lens configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensconfiguration.html#cfn-s3-storagelens-storagelensconfiguration-awsorg
         */
        readonly awsOrg?: CfnStorageLens.AwsOrgProperty | cdk.IResolvable;
        /**
         * This property contains the details of this S3 Storage Lens configuration's metrics export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensconfiguration.html#cfn-s3-storagelens-storagelensconfiguration-dataexport
         */
        readonly dataExport?: CfnStorageLens.DataExportProperty | cdk.IResolvable;
        /**
         * This property contains the details of the bucket and or Regions excluded for Amazon S3 Storage Lens configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensconfiguration.html#cfn-s3-storagelens-storagelensconfiguration-exclude
         */
        readonly exclude?: CfnStorageLens.BucketsAndRegionsProperty | cdk.IResolvable;
        /**
         * This property contains the details of the ID of the S3 Storage Lens configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensconfiguration.html#cfn-s3-storagelens-storagelensconfiguration-id
         */
        readonly id: string;
        /**
         * This property contains the details of the bucket and or Regions included for Amazon S3 Storage Lens configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensconfiguration.html#cfn-s3-storagelens-storagelensconfiguration-include
         */
        readonly include?: CfnStorageLens.BucketsAndRegionsProperty | cdk.IResolvable;
        /**
         * This property contains the details of whether the Amazon S3 Storage Lens configuration is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensconfiguration.html#cfn-s3-storagelens-storagelensconfiguration-isenabled
         */
        readonly isEnabled: boolean | cdk.IResolvable;
        /**
         * This property contains the details of the ARN of the S3 Storage Lens configuration.
         *
         * This property is read-only.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensconfiguration.html#cfn-s3-storagelens-storagelensconfiguration-storagelensarn
         */
        readonly storageLensArn?: string;
    }
    /**
     * This resource contains the details of the account-level metrics for Amazon S3 Storage Lens.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-accountlevel.html
     */
    interface AccountLevelProperty {
        /**
         * This property contains the details of account-level activity metrics for S3 Storage Lens.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-accountlevel.html#cfn-s3-storagelens-accountlevel-activitymetrics
         */
        readonly activityMetrics?: CfnStorageLens.ActivityMetricsProperty | cdk.IResolvable;
        /**
         * This property contains the details of account-level advanced cost optimization metrics for S3 Storage Lens.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-accountlevel.html#cfn-s3-storagelens-accountlevel-advancedcostoptimizationmetrics
         */
        readonly advancedCostOptimizationMetrics?: CfnStorageLens.AdvancedCostOptimizationMetricsProperty | cdk.IResolvable;
        /**
         * This property contains the details of account-level advanced data protection metrics for S3 Storage Lens.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-accountlevel.html#cfn-s3-storagelens-accountlevel-advanceddataprotectionmetrics
         */
        readonly advancedDataProtectionMetrics?: CfnStorageLens.AdvancedDataProtectionMetricsProperty | cdk.IResolvable;
        /**
         * This property contains the details of the account-level bucket-level configurations for Amazon S3 Storage Lens.
         *
         * To enable bucket-level configurations, make sure to also set the same metrics at the account level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-accountlevel.html#cfn-s3-storagelens-accountlevel-bucketlevel
         */
        readonly bucketLevel: CfnStorageLens.BucketLevelProperty | cdk.IResolvable;
        /**
         * This property contains the details of account-level detailed status code metrics for S3 Storage Lens.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-accountlevel.html#cfn-s3-storagelens-accountlevel-detailedstatuscodesmetrics
         */
        readonly detailedStatusCodesMetrics?: CfnStorageLens.DetailedStatusCodesMetricsProperty | cdk.IResolvable;
        /**
         * This property determines the scope of Storage Lens group data that is displayed in the Storage Lens dashboard.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-accountlevel.html#cfn-s3-storagelens-accountlevel-storagelensgrouplevel
         */
        readonly storageLensGroupLevel?: cdk.IResolvable | CfnStorageLens.StorageLensGroupLevelProperty;
    }
    /**
     * This resource enables Amazon S3 Storage Lens advanced data protection metrics.
     *
     * Advanced data protection metrics provide insights that you can use to perform audits and protect your data, for example replication rule counts within and across Regions.
     *
     * For more information, see [Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the *Amazon S3 User Guide* . For a complete list of metrics, see [S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-advanceddataprotectionmetrics.html
     */
    interface AdvancedDataProtectionMetricsProperty {
        /**
         * Indicates whether advanced data protection metrics are enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-advanceddataprotectionmetrics.html#cfn-s3-storagelens-advanceddataprotectionmetrics-isenabled
         */
        readonly isEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * This resource enables Amazon S3 Storage Lens activity metrics.
     *
     * Activity metrics show details about how your storage is requested, such as requests (for example, All requests, Get requests, Put requests), bytes uploaded or downloaded, and errors.
     *
     * For more information, see [Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the *Amazon S3 User Guide* . For a complete list of metrics, see [S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-activitymetrics.html
     */
    interface ActivityMetricsProperty {
        /**
         * A property that indicates whether the activity metrics is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-activitymetrics.html#cfn-s3-storagelens-activitymetrics-isenabled
         */
        readonly isEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * A property for the bucket-level storage metrics for Amazon S3 Storage Lens.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-bucketlevel.html
     */
    interface BucketLevelProperty {
        /**
         * A property for bucket-level activity metrics for S3 Storage Lens.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-bucketlevel.html#cfn-s3-storagelens-bucketlevel-activitymetrics
         */
        readonly activityMetrics?: CfnStorageLens.ActivityMetricsProperty | cdk.IResolvable;
        /**
         * A property for bucket-level advanced cost optimization metrics for S3 Storage Lens.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-bucketlevel.html#cfn-s3-storagelens-bucketlevel-advancedcostoptimizationmetrics
         */
        readonly advancedCostOptimizationMetrics?: CfnStorageLens.AdvancedCostOptimizationMetricsProperty | cdk.IResolvable;
        /**
         * A property for bucket-level advanced data protection metrics for S3 Storage Lens.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-bucketlevel.html#cfn-s3-storagelens-bucketlevel-advanceddataprotectionmetrics
         */
        readonly advancedDataProtectionMetrics?: CfnStorageLens.AdvancedDataProtectionMetricsProperty | cdk.IResolvable;
        /**
         * A property for bucket-level detailed status code metrics for S3 Storage Lens.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-bucketlevel.html#cfn-s3-storagelens-bucketlevel-detailedstatuscodesmetrics
         */
        readonly detailedStatusCodesMetrics?: CfnStorageLens.DetailedStatusCodesMetricsProperty | cdk.IResolvable;
        /**
         * A property for bucket-level prefix-level storage metrics for S3 Storage Lens.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-bucketlevel.html#cfn-s3-storagelens-bucketlevel-prefixlevel
         */
        readonly prefixLevel?: cdk.IResolvable | CfnStorageLens.PrefixLevelProperty;
    }
    /**
     * This resource contains the details of the prefix-level of the Amazon S3 Storage Lens.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-prefixlevel.html
     */
    interface PrefixLevelProperty {
        /**
         * A property for the prefix-level storage metrics for Amazon S3 Storage Lens.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-prefixlevel.html#cfn-s3-storagelens-prefixlevel-storagemetrics
         */
        readonly storageMetrics: cdk.IResolvable | CfnStorageLens.PrefixLevelStorageMetricsProperty;
    }
    /**
     * This resource contains the details of the prefix-level storage metrics for Amazon S3 Storage Lens.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-prefixlevelstoragemetrics.html
     */
    interface PrefixLevelStorageMetricsProperty {
        /**
         * This property identifies whether the details of the prefix-level storage metrics for S3 Storage Lens are enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-prefixlevelstoragemetrics.html#cfn-s3-storagelens-prefixlevelstoragemetrics-isenabled
         */
        readonly isEnabled?: boolean | cdk.IResolvable;
        /**
         * This property identifies whether the details of the prefix-level storage metrics for S3 Storage Lens are enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-prefixlevelstoragemetrics.html#cfn-s3-storagelens-prefixlevelstoragemetrics-selectioncriteria
         */
        readonly selectionCriteria?: cdk.IResolvable | CfnStorageLens.SelectionCriteriaProperty;
    }
    /**
     * This resource contains the details of the Amazon S3 Storage Lens selection criteria.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-selectioncriteria.html
     */
    interface SelectionCriteriaProperty {
        /**
         * This property contains the details of the S3 Storage Lens delimiter being used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-selectioncriteria.html#cfn-s3-storagelens-selectioncriteria-delimiter
         */
        readonly delimiter?: string;
        /**
         * This property contains the details of the max depth that S3 Storage Lens will collect metrics up to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-selectioncriteria.html#cfn-s3-storagelens-selectioncriteria-maxdepth
         */
        readonly maxDepth?: number;
        /**
         * This property contains the details of the minimum storage bytes percentage threshold that S3 Storage Lens will collect metrics up to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-selectioncriteria.html#cfn-s3-storagelens-selectioncriteria-minstoragebytespercentage
         */
        readonly minStorageBytesPercentage?: number;
    }
    /**
     * This resource enables Amazon S3 Storage Lens advanced cost optimization metrics.
     *
     * Advanced cost optimization metrics provide insights that you can use to manage and optimize your storage costs, for example, lifecycle rule counts for transitions, expirations, and incomplete multipart uploads.
     *
     * For more information, see [Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the *Amazon S3 User Guide* . For a complete list of metrics, see [S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-advancedcostoptimizationmetrics.html
     */
    interface AdvancedCostOptimizationMetricsProperty {
        /**
         * Indicates whether advanced cost optimization metrics are enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-advancedcostoptimizationmetrics.html#cfn-s3-storagelens-advancedcostoptimizationmetrics-isenabled
         */
        readonly isEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * This resource enables Amazon S3 Storage Lens detailed status code metrics.
     *
     * Detailed status code metrics generate metrics for HTTP status codes, such as `200 OK` , `403 Forbidden` , `503 Service Unavailable` and others.
     *
     * For more information, see [Assessing your storage activity and usage with S3 Storage Lens](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens.html) in the *Amazon S3 User Guide* . For a complete list of metrics, see [S3 Storage Lens metrics glossary](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_metrics_glossary.html) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-detailedstatuscodesmetrics.html
     */
    interface DetailedStatusCodesMetricsProperty {
        /**
         * Indicates whether detailed status code metrics are enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-detailedstatuscodesmetrics.html#cfn-s3-storagelens-detailedstatuscodesmetrics-isenabled
         */
        readonly isEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * This resource determines the scope of Storage Lens group data that is displayed in the Storage Lens dashboard.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensgrouplevel.html
     */
    interface StorageLensGroupLevelProperty {
        /**
         * This property indicates which Storage Lens group ARNs to include or exclude in the Storage Lens group aggregation.
         *
         * If this value is left null, then all Storage Lens groups are selected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensgrouplevel.html#cfn-s3-storagelens-storagelensgrouplevel-storagelensgroupselectioncriteria
         */
        readonly storageLensGroupSelectionCriteria?: cdk.IResolvable | CfnStorageLens.StorageLensGroupSelectionCriteriaProperty;
    }
    /**
     * This resource indicates which Storage Lens group ARNs to include or exclude in the Storage Lens group aggregation.
     *
     * You can only attach Storage Lens groups to your dashboard if they're included in your Storage Lens group aggregation. If this value is left null, then all Storage Lens groups are selected.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensgroupselectioncriteria.html
     */
    interface StorageLensGroupSelectionCriteriaProperty {
        /**
         * This property indicates which Storage Lens group ARNs to exclude from the Storage Lens group aggregation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensgroupselectioncriteria.html#cfn-s3-storagelens-storagelensgroupselectioncriteria-exclude
         */
        readonly exclude?: Array<string>;
        /**
         * This property indicates which Storage Lens group ARNs to include in the Storage Lens group aggregation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-storagelensgroupselectioncriteria.html#cfn-s3-storagelens-storagelensgroupselectioncriteria-include
         */
        readonly include?: Array<string>;
    }
    /**
     * This resource contains the details of the buckets and Regions for the Amazon S3 Storage Lens configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-bucketsandregions.html
     */
    interface BucketsAndRegionsProperty {
        /**
         * This property contains the details of the buckets for the Amazon S3 Storage Lens configuration.
         *
         * This should be the bucket Amazon Resource Name(ARN). For valid values, see [Buckets ARN format here](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_Include.html#API_control_Include_Contents) in the *Amazon S3 API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-bucketsandregions.html#cfn-s3-storagelens-bucketsandregions-buckets
         */
        readonly buckets?: Array<string>;
        /**
         * This property contains the details of the Regions for the S3 Storage Lens configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-bucketsandregions.html#cfn-s3-storagelens-bucketsandregions-regions
         */
        readonly regions?: Array<string>;
    }
    /**
     * This resource contains the details of the AWS Organization for Amazon S3 Storage Lens.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-awsorg.html
     */
    interface AwsOrgProperty {
        /**
         * This resource contains the ARN of the AWS Organization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-awsorg.html#cfn-s3-storagelens-awsorg-arn
         */
        readonly arn: string;
    }
    /**
     * This resource contains the details of the Amazon S3 Storage Lens metrics export.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-dataexport.html
     */
    interface DataExportProperty {
        /**
         * This property enables the Amazon CloudWatch publishing option for S3 Storage Lens metrics.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-dataexport.html#cfn-s3-storagelens-dataexport-cloudwatchmetrics
         */
        readonly cloudWatchMetrics?: CfnStorageLens.CloudWatchMetricsProperty | cdk.IResolvable;
        /**
         * This property contains the details of the bucket where the S3 Storage Lens metrics export will be placed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-dataexport.html#cfn-s3-storagelens-dataexport-s3bucketdestination
         */
        readonly s3BucketDestination?: cdk.IResolvable | CfnStorageLens.S3BucketDestinationProperty;
    }
    /**
     * This resource contains the details of the bucket where the Amazon S3 Storage Lens metrics export will be placed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-s3bucketdestination.html
     */
    interface S3BucketDestinationProperty {
        /**
         * This property contains the details of the AWS account ID of the S3 Storage Lens export bucket destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-s3bucketdestination.html#cfn-s3-storagelens-s3bucketdestination-accountid
         */
        readonly accountId: string;
        /**
         * This property contains the details of the ARN of the bucket destination of the S3 Storage Lens export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-s3bucketdestination.html#cfn-s3-storagelens-s3bucketdestination-arn
         */
        readonly arn: string;
        /**
         * This property contains the details of the encryption of the bucket destination of the Amazon S3 Storage Lens metrics export.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-s3bucketdestination.html#cfn-s3-storagelens-s3bucketdestination-encryption
         */
        readonly encryption?: CfnStorageLens.EncryptionProperty | cdk.IResolvable;
        /**
         * This property contains the details of the format of the S3 Storage Lens export bucket destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-s3bucketdestination.html#cfn-s3-storagelens-s3bucketdestination-format
         */
        readonly format: string;
        /**
         * This property contains the details of the output schema version of the S3 Storage Lens export bucket destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-s3bucketdestination.html#cfn-s3-storagelens-s3bucketdestination-outputschemaversion
         */
        readonly outputSchemaVersion: string;
        /**
         * This property contains the details of the prefix of the bucket destination of the S3 Storage Lens export .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-s3bucketdestination.html#cfn-s3-storagelens-s3bucketdestination-prefix
         */
        readonly prefix?: string;
    }
    /**
     * This resource contains the type of server-side encryption used to encrypt an Amazon S3 Storage Lens metrics export.
     *
     * For valid values, see the [StorageLensDataExportEncryption](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_StorageLensDataExportEncryption.html) in the *Amazon S3 API Reference* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-encryption.html
     */
    interface EncryptionProperty {
        /**
         * Specifies the use of AWS Key Management Service keys (SSE-KMS) to encrypt the S3 Storage Lens metrics export file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-encryption.html#cfn-s3-storagelens-encryption-ssekms
         */
        readonly ssekms?: cdk.IResolvable | CfnStorageLens.SSEKMSProperty;
        /**
         * Specifies the use of an Amazon S3-managed key (SSE-S3) to encrypt the S3 Storage Lens metrics export file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-encryption.html#cfn-s3-storagelens-encryption-sses3
         */
        readonly sses3?: any | cdk.IResolvable;
    }
    /**
     * Specifies the use of server-side encryption using an AWS Key Management Service key (SSE-KMS) to encrypt the delivered S3 Storage Lens metrics export file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-ssekms.html
     */
    interface SSEKMSProperty {
        /**
         * Specifies the Amazon Resource Name (ARN) of the customer managed AWS KMS key to use for encrypting the S3 Storage Lens metrics export file.
         *
         * Amazon S3 only supports symmetric encryption keys. For more information, see [Special-purpose keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-types.html) in the *AWS Key Management Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-ssekms.html#cfn-s3-storagelens-ssekms-keyid
         */
        readonly keyId: string;
    }
    /**
     * This resource enables the Amazon CloudWatch publishing option for Amazon S3 Storage Lens metrics.
     *
     * For more information, see [Monitor S3 Storage Lens metrics in CloudWatch](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_view_metrics_cloudwatch.html) in the *Amazon S3 User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-cloudwatchmetrics.html
     */
    interface CloudWatchMetricsProperty {
        /**
         * This property identifies whether the CloudWatch publishing option for S3 Storage Lens is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelens-cloudwatchmetrics.html#cfn-s3-storagelens-cloudwatchmetrics-isenabled
         */
        readonly isEnabled: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnStorageLens`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html
 */
export interface CfnStorageLensProps {
    /**
     * This resource contains the details Amazon S3 Storage Lens configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-storagelensconfiguration
     */
    readonly storageLensConfiguration: cdk.IResolvable | CfnStorageLens.StorageLensConfigurationProperty;
    /**
     * A set of tags (key–value pairs) to associate with the Storage Lens configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelens.html#cfn-s3-storagelens-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::S3::AccessGrant` resource creates an access grant that gives a grantee access to your S3 data.
 *
 * The grantee can be an IAM user or role or a directory user, or group. Before you can create a grant, you must have an S3 Access Grants instance in the same Region as the S3 data. You can create an S3 Access Grants instance using the [AWS::S3::AccessGrantsInstance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantsinstance.html) . You must also have registered at least one S3 data location in your S3 Access Grants instance using [AWS::S3::AccessGrantsLocation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html) .
 *
 * - **Permissions** - You must have the `s3:CreateAccessGrant` permission to use this resource.
 * - **Additional Permissions** - For any directory identity - `sso:DescribeInstance` and `sso:DescribeApplication`
 *
 * For directory users - `identitystore:DescribeUser`
 *
 * For directory groups - `identitystore:DescribeGroup`
 *
 * @cloudformationResource AWS::S3::AccessGrant
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrant.html
 */
export declare class CfnAccessGrant extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAccessGrant from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAccessGrant;
    /**
     * The ARN of the access grant.
     *
     * @cloudformationAttribute AccessGrantArn
     */
    readonly attrAccessGrantArn: string;
    /**
     * The ID of the access grant. S3 Access Grants auto-generates this ID when you create the access grant.
     *
     * @cloudformationAttribute AccessGrantId
     */
    readonly attrAccessGrantId: string;
    /**
     * The S3 path of the data to which you are granting access. It is the result of appending the `Subprefix` to the location scope.
     *
     * @cloudformationAttribute GrantScope
     */
    readonly attrGrantScope: string;
    /**
     * The configuration options of the grant location.
     */
    accessGrantsLocationConfiguration?: CfnAccessGrant.AccessGrantsLocationConfigurationProperty | cdk.IResolvable;
    /**
     * The ID of the registered location to which you are granting access.
     */
    accessGrantsLocationId: string;
    /**
     * The Amazon Resource Name (ARN) of an AWS IAM Identity Center application associated with your Identity Center instance.
     */
    applicationArn?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The user, group, or role to which you are granting access.
     */
    grantee: CfnAccessGrant.GranteeProperty | cdk.IResolvable;
    /**
     * The type of access that you are granting to your S3 data, which can be set to one of the following values:  - `READ` – Grant read-only access to the S3 data.
     */
    permission: string;
    /**
     * The type of `S3SubPrefix` .
     */
    s3PrefixType?: string;
    /**
     * The AWS resource tags that you are adding to the access grant.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAccessGrantProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAccessGrant {
    /**
     * The user, group, or role to which you are granting access.
     *
     * You can grant access to an IAM user or role. If you have added your corporate directory to AWS IAM Identity Center and associated your Identity Center instance with your S3 Access Grants instance, the grantee can also be a corporate directory user or group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accessgrant-grantee.html
     */
    interface GranteeProperty {
        /**
         * The unique identifier of the `Grantee` .
         *
         * If the grantee type is `IAM` , the identifier is the IAM Amazon Resource Name (ARN) of the user or role. If the grantee type is a directory user or group, the identifier is 128-bit universally unique identifier (UUID) in the format `a1b2c3d4-5678-90ab-cdef-EXAMPLE11111` . You can obtain this UUID from your AWS IAM Identity Center instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accessgrant-grantee.html#cfn-s3-accessgrant-grantee-granteeidentifier
         */
        readonly granteeIdentifier: string;
        /**
         * The type of the grantee to which access has been granted. It can be one of the following values:.
         *
         * - `IAM` - An IAM user or role.
         * - `DIRECTORY_USER` - Your corporate directory user. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance.
         * - `DIRECTORY_GROUP` - Your corporate directory group. You can use this option if you have added your corporate identity directory to IAM Identity Center and associated the IAM Identity Center instance with your S3 Access Grants instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accessgrant-grantee.html#cfn-s3-accessgrant-grantee-granteetype
         */
        readonly granteeType: string;
    }
    /**
     * The configuration options of the S3 Access Grants location.
     *
     * It contains the `S3SubPrefix` field. The grant scope, the data to which you are granting access, is the result of appending the `Subprefix` field to the scope of the registered location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accessgrant-accessgrantslocationconfiguration.html
     */
    interface AccessGrantsLocationConfigurationProperty {
        /**
         * The `S3SubPrefix` is appended to the location scope creating the grant scope.
         *
         * Use this field to narrow the scope of the grant to a subset of the location scope. This field is required if the location scope is the default location `s3://` because you cannot create a grant for all of your S3 data in the Region and must narrow the scope. For example, if the location scope is the default location `s3://` , the `S3SubPrefx` can be a `<bucket-name>/*` , so the full grant scope path would be `s3://<bucket-name>/*` . Or the `S3SubPrefx` can be `<bucket-name>/<prefix-name>*` , so the full grant scope path would be `s3://<bucket-name>/<prefix-name>*` .
         *
         * If the `S3SubPrefix` includes a prefix, append the wildcard character `*` after the prefix to indicate that you want to include all object key names in the bucket that start with that prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-accessgrant-accessgrantslocationconfiguration.html#cfn-s3-accessgrant-accessgrantslocationconfiguration-s3subprefix
         */
        readonly s3SubPrefix: string;
    }
}
/**
 * Properties for defining a `CfnAccessGrant`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrant.html
 */
export interface CfnAccessGrantProps {
    /**
     * The configuration options of the grant location.
     *
     * The grant location is the S3 path to the data to which you are granting access. It contains the `S3SubPrefix` field. The grant scope is the result of appending the subprefix to the location scope of the registered location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrant.html#cfn-s3-accessgrant-accessgrantslocationconfiguration
     */
    readonly accessGrantsLocationConfiguration?: CfnAccessGrant.AccessGrantsLocationConfigurationProperty | cdk.IResolvable;
    /**
     * The ID of the registered location to which you are granting access.
     *
     * S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID `default` to the default location `s3://` and assigns an auto-generated ID to other locations that you register.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrant.html#cfn-s3-accessgrant-accessgrantslocationid
     */
    readonly accessGrantsLocationId: string;
    /**
     * The Amazon Resource Name (ARN) of an AWS IAM Identity Center application associated with your Identity Center instance.
     *
     * If the grant includes an application ARN, the grantee can only access the S3 data through this application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrant.html#cfn-s3-accessgrant-applicationarn
     */
    readonly applicationArn?: string;
    /**
     * The user, group, or role to which you are granting access.
     *
     * You can grant access to an IAM user or role. If you have added your corporate directory to AWS IAM Identity Center and associated your Identity Center instance with your S3 Access Grants instance, the grantee can also be a corporate directory user or group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrant.html#cfn-s3-accessgrant-grantee
     */
    readonly grantee: CfnAccessGrant.GranteeProperty | cdk.IResolvable;
    /**
     * The type of access that you are granting to your S3 data, which can be set to one of the following values:  - `READ` – Grant read-only access to the S3 data.
     *
     * - `WRITE` – Grant write-only access to the S3 data.
     * - `READWRITE` – Grant both read and write access to the S3 data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrant.html#cfn-s3-accessgrant-permission
     */
    readonly permission: string;
    /**
     * The type of `S3SubPrefix` .
     *
     * The only possible value is `Object` . Pass this value if the access grant scope is an object. Do not pass this value if the access grant scope is a bucket or a bucket and a prefix.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrant.html#cfn-s3-accessgrant-s3prefixtype
     */
    readonly s3PrefixType?: string;
    /**
     * The AWS resource tags that you are adding to the access grant.
     *
     * Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrant.html#cfn-s3-accessgrant-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::S3::AccessGrantInstance` resource creates an S3 Access Grants instance, which serves as a logical grouping for access grants.
 *
 * You can create one S3 Access Grants instance per Region per account.
 *
 * - **Permissions** - You must have the `s3:CreateAccessGrantsInstance` permission to use this resource.
 * - **Additional Permissions** - To associate an IAM Identity Center instance with your S3 Access Grants instance, you must also have the `sso:DescribeInstance` , `sso:CreateApplication` , `sso:PutApplicationGrant` , and `sso:PutApplicationAuthenticationMethod` permissions.
 *
 * @cloudformationResource AWS::S3::AccessGrantsInstance
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantsinstance.html
 */
export declare class CfnAccessGrantsInstance extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAccessGrantsInstance from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAccessGrantsInstance;
    /**
     * The ARN of the S3 Access Grants instance.
     *
     * @cloudformationAttribute AccessGrantsInstanceArn
     */
    readonly attrAccessGrantsInstanceArn: string;
    /**
     * The ID of the S3 Access Grants instance. The ID is `default` . You can have one S3 Access Grants instance per Region per account.
     *
     * @cloudformationAttribute AccessGrantsInstanceId
     */
    readonly attrAccessGrantsInstanceId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * If you would like to associate your S3 Access Grants instance with an AWS IAM Identity Center instance, use this field to pass the Amazon Resource Name (ARN) of the AWS IAM Identity Center instance that you are associating with your S3 Access Grants instance.
     */
    identityCenterArn?: string;
    /**
     * The AWS resource tags that you are adding to the S3 Access Grants instance.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnAccessGrantsInstanceProps);
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
 * Properties for defining a `CfnAccessGrantsInstance`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantsinstance.html
 */
export interface CfnAccessGrantsInstanceProps {
    /**
     * If you would like to associate your S3 Access Grants instance with an AWS IAM Identity Center instance, use this field to pass the Amazon Resource Name (ARN) of the AWS IAM Identity Center instance that you are associating with your S3 Access Grants instance.
     *
     * An IAM Identity Center instance is your corporate identity directory that you added to the IAM Identity Center.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantsinstance.html#cfn-s3-accessgrantsinstance-identitycenterarn
     */
    readonly identityCenterArn?: string;
    /**
     * The AWS resource tags that you are adding to the S3 Access Grants instance.
     *
     * Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantsinstance.html#cfn-s3-accessgrantsinstance-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::S3::AccessGrantsLocation` resource creates the S3 data location that you would like to register in your S3 Access Grants instance.
 *
 * Your S3 data must be in the same Region as your S3 Access Grants instance. The location can be one of the following:
 *
 * - The default S3 location `s3://`
 * - A bucket - `S3://<bucket-name>`
 * - A bucket and prefix - `S3://<bucket-name>/<prefix>`
 *
 * When you register a location, you must include the IAM role that has permission to manage the S3 location that you are registering. Give S3 Access Grants permission to assume this role [using a policy](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-grants-location.html) . S3 Access Grants assumes this role to manage access to the location and to vend temporary credentials to grantees or client applications.
 *
 * - **Permissions** - You must have the `s3:CreateAccessGrantsLocation` permission to use this resource.
 * - **Additional Permissions** - You must also have the following permission for the specified IAM role: `iam:PassRole`
 *
 * @cloudformationResource AWS::S3::AccessGrantsLocation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html
 */
export declare class CfnAccessGrantsLocation extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAccessGrantsLocation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAccessGrantsLocation;
    /**
     * The ARN of the location you are registering.
     *
     * @cloudformationAttribute AccessGrantsLocationArn
     */
    readonly attrAccessGrantsLocationArn: string;
    /**
     * The ID of the registered location to which you are granting access. S3 Access Grants assigns this ID when you register the location. S3 Access Grants assigns the ID `default` to the default location `s3://` and assigns an auto-generated ID to other locations that you register.
     *
     * @cloudformationAttribute AccessGrantsLocationId
     */
    readonly attrAccessGrantsLocationId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The Amazon Resource Name (ARN) of the IAM role for the registered location.
     */
    iamRoleArn?: string;
    /**
     * The S3 URI path to the location that you are registering.
     */
    locationScope?: string;
    /**
     * The AWS resource tags that you are adding to the S3 Access Grants location.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnAccessGrantsLocationProps);
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
 * Properties for defining a `CfnAccessGrantsLocation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html
 */
export interface CfnAccessGrantsLocationProps {
    /**
     * The Amazon Resource Name (ARN) of the IAM role for the registered location.
     *
     * S3 Access Grants assumes this role to manage access to the registered location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html#cfn-s3-accessgrantslocation-iamrolearn
     */
    readonly iamRoleArn?: string;
    /**
     * The S3 URI path to the location that you are registering.
     *
     * The location scope can be the default S3 location `s3://` , the S3 path to a bucket, or the S3 path to a bucket and prefix. A prefix in S3 is a string of characters at the beginning of an object key name used to organize the objects that you store in your S3 buckets. For example, object key names that start with the `engineering/` prefix or object key names that start with the `marketing/campaigns/` prefix.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html#cfn-s3-accessgrantslocation-locationscope
     */
    readonly locationScope?: string;
    /**
     * The AWS resource tags that you are adding to the S3 Access Grants location.
     *
     * Each tag is a label consisting of a user-defined key and value. Tags can help you manage, identify, organize, search for, and filter resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-accessgrantslocation.html#cfn-s3-accessgrantslocation-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::S3::StorageLensGroup` resource creates an S3 Storage Lens group.
 *
 * A Storage Lens group is a custom grouping of objects that include filters for prefixes, suffixes, object tags, object size, or object age. You can create an S3 Storage Lens group that includes a single filter or multiple filter conditions. To specify multiple filter conditions, you use `AND` or `OR` logical operators. For more information about S3 Storage Lens groups, see [Working with S3 Storage Lens groups](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens-groups-overview.html) .
 *
 * @cloudformationResource AWS::S3::StorageLensGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html
 */
export declare class CfnStorageLensGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStorageLensGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStorageLensGroup;
    /**
     * The ARN for the Amazon S3 Storage Lens Group.
     *
     * @cloudformationAttribute StorageLensGroupArn
     */
    readonly attrStorageLensGroupArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * This property contains the criteria for the Storage Lens group data that is displayed.
     */
    filter: CfnStorageLensGroup.FilterProperty | cdk.IResolvable;
    /**
     * This property contains the Storage Lens group name.
     */
    name: string;
    /**
     * This property contains the AWS resource tags that you're adding to your Storage Lens group.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStorageLensGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStorageLensGroup {
    /**
     * This resource sets the criteria for the Storage Lens group data that is displayed.
     *
     * For multiple filter conditions, the `AND` or `OR` logical operator is used.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-filter.html
     */
    interface FilterProperty {
        /**
         * This property contains the `And` logical operator, which allows multiple filter conditions to be joined for more complex comparisons of Storage Lens group data.
         *
         * Objects must match all of the listed filter conditions that are joined by the `And` logical operator. Only one of each filter condition is allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-filter.html#cfn-s3-storagelensgroup-filter-and
         */
        readonly and?: CfnStorageLensGroup.AndProperty | cdk.IResolvable;
        /**
         * This property contains a list of prefixes.
         *
         * At least one prefix must be specified. Up to 10 prefixes are allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-filter.html#cfn-s3-storagelensgroup-filter-matchanyprefix
         */
        readonly matchAnyPrefix?: Array<string>;
        /**
         * This property contains a list of suffixes.
         *
         * At least one suffix must be specified. Up to 10 suffixes are allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-filter.html#cfn-s3-storagelensgroup-filter-matchanysuffix
         */
        readonly matchAnySuffix?: Array<string>;
        /**
         * This property contains the list of S3 object tags.
         *
         * At least one object tag must be specified. Up to 10 object tags are allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-filter.html#cfn-s3-storagelensgroup-filter-matchanytag
         */
        readonly matchAnyTag?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
        /**
         * This property contains `DaysGreaterThan` and `DaysLessThan` to define the object age range (minimum and maximum number of days).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-filter.html#cfn-s3-storagelensgroup-filter-matchobjectage
         */
        readonly matchObjectAge?: cdk.IResolvable | CfnStorageLensGroup.MatchObjectAgeProperty;
        /**
         * This property contains `BytesGreaterThan` and `BytesLessThan` to define the object size range (minimum and maximum number of Bytes).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-filter.html#cfn-s3-storagelensgroup-filter-matchobjectsize
         */
        readonly matchObjectSize?: cdk.IResolvable | CfnStorageLensGroup.MatchObjectSizeProperty;
        /**
         * This property contains the `Or` logical operator, which allows multiple filter conditions to be joined.
         *
         * Objects can match any of the listed filter conditions, which are joined by the `Or` logical operator. Only one of each filter condition is allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-filter.html#cfn-s3-storagelensgroup-filter-or
         */
        readonly or?: cdk.IResolvable | CfnStorageLensGroup.OrProperty;
    }
    /**
     * This resource filters objects that match the specified object size range.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-matchobjectsize.html
     */
    interface MatchObjectSizeProperty {
        /**
         * This property specifies the minimum object size in bytes.
         *
         * The value must be a positive number, greater than 0 and less than 5 TB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-matchobjectsize.html#cfn-s3-storagelensgroup-matchobjectsize-bytesgreaterthan
         */
        readonly bytesGreaterThan?: number;
        /**
         * This property specifies the maximum object size in bytes.
         *
         * The value must be a positive number, greater than the minimum object size and less than 5 TB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-matchobjectsize.html#cfn-s3-storagelensgroup-matchobjectsize-byteslessthan
         */
        readonly bytesLessThan?: number;
    }
    /**
     * This resource contains `DaysGreaterThan` and `DaysLessThan` to define the object age range (minimum and maximum number of days).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-matchobjectage.html
     */
    interface MatchObjectAgeProperty {
        /**
         * This property indicates the minimum object age in days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-matchobjectage.html#cfn-s3-storagelensgroup-matchobjectage-daysgreaterthan
         */
        readonly daysGreaterThan?: number;
        /**
         * This property indicates the maximum object age in days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-matchobjectage.html#cfn-s3-storagelensgroup-matchobjectage-dayslessthan
         */
        readonly daysLessThan?: number;
    }
    /**
     * This resource is a logical operator that allows multiple filter conditions to be joined for more complex comparisons of Storage Lens group data.
     *
     * Objects must match all of the listed filter conditions that are joined by the `And` logical operator. Only one of each filter condition is allowed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-and.html
     */
    interface AndProperty {
        /**
         * This property contains a list of prefixes.
         *
         * At least one prefix must be specified. Up to 10 prefixes are allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-and.html#cfn-s3-storagelensgroup-and-matchanyprefix
         */
        readonly matchAnyPrefix?: Array<string>;
        /**
         * This property contains a list of suffixes.
         *
         * At least one suffix must be specified. Up to 10 suffixes are allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-and.html#cfn-s3-storagelensgroup-and-matchanysuffix
         */
        readonly matchAnySuffix?: Array<string>;
        /**
         * This property contains the list of object tags.
         *
         * At least one object tag must be specified. Up to 10 object tags are allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-and.html#cfn-s3-storagelensgroup-and-matchanytag
         */
        readonly matchAnyTag?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
        /**
         * This property contains `DaysGreaterThan` and `DaysLessThan` properties to define the object age range (minimum and maximum number of days).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-and.html#cfn-s3-storagelensgroup-and-matchobjectage
         */
        readonly matchObjectAge?: cdk.IResolvable | CfnStorageLensGroup.MatchObjectAgeProperty;
        /**
         * This property contains `BytesGreaterThan` and `BytesLessThan` to define the object size range (minimum and maximum number of Bytes).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-and.html#cfn-s3-storagelensgroup-and-matchobjectsize
         */
        readonly matchObjectSize?: cdk.IResolvable | CfnStorageLensGroup.MatchObjectSizeProperty;
    }
    /**
     * This resource contains the `Or` logical operator, which allows multiple filter conditions to be joined for more complex comparisons of Storage Lens group data.
     *
     * Objects can match any of the listed filter conditions that are joined by the `Or` logical operator. Only one of each filter condition is allowed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-or.html
     */
    interface OrProperty {
        /**
         * This property contains a list of prefixes.
         *
         * At least one prefix must be specified. Up to 10 prefixes are allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-or.html#cfn-s3-storagelensgroup-or-matchanyprefix
         */
        readonly matchAnyPrefix?: Array<string>;
        /**
         * This property contains the list of suffixes.
         *
         * At least one suffix must be specified. Up to 10 suffixes are allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-or.html#cfn-s3-storagelensgroup-or-matchanysuffix
         */
        readonly matchAnySuffix?: Array<string>;
        /**
         * This property contains the list of S3 object tags.
         *
         * At least one object tag must be specified. Up to 10 object tags are allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-or.html#cfn-s3-storagelensgroup-or-matchanytag
         */
        readonly matchAnyTag?: Array<cdk.CfnTag | cdk.IResolvable> | cdk.IResolvable;
        /**
         * This property filters objects that match the specified object age range.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-or.html#cfn-s3-storagelensgroup-or-matchobjectage
         */
        readonly matchObjectAge?: cdk.IResolvable | CfnStorageLensGroup.MatchObjectAgeProperty;
        /**
         * This property contains the `BytesGreaterThan` and `BytesLessThan` values to define the object size range (minimum and maximum number of Bytes).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-storagelensgroup-or.html#cfn-s3-storagelensgroup-or-matchobjectsize
         */
        readonly matchObjectSize?: cdk.IResolvable | CfnStorageLensGroup.MatchObjectSizeProperty;
    }
}
/**
 * Properties for defining a `CfnStorageLensGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html
 */
export interface CfnStorageLensGroupProps {
    /**
     * This property contains the criteria for the Storage Lens group data that is displayed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-filter
     */
    readonly filter: CfnStorageLensGroup.FilterProperty | cdk.IResolvable;
    /**
     * This property contains the Storage Lens group name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-name
     */
    readonly name: string;
    /**
     * This property contains the AWS resource tags that you're adding to your Storage Lens group.
     *
     * This parameter is optional.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
