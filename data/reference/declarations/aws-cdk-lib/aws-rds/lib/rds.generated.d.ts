import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a custom DB engine version (CEV).
 *
 * @cloudformationResource AWS::RDS::CustomDBEngineVersion
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html
 */
export declare class CfnCustomDBEngineVersion extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCustomDBEngineVersion from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCustomDBEngineVersion;
    /**
     * The ARN of the custom engine version.
     *
     * @cloudformationAttribute DBEngineVersionArn
     */
    readonly attrDbEngineVersionArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of an Amazon S3 bucket that contains database installation files for your CEV.
     */
    databaseInstallationFilesS3BucketName?: string;
    /**
     * The Amazon S3 directory that contains the database installation files for your CEV.
     */
    databaseInstallationFilesS3Prefix?: string;
    /**
     * An optional description of your CEV.
     */
    description?: string;
    /**
     * The database engine to use for your custom engine version (CEV).
     */
    engine: string;
    /**
     * The name of your CEV.
     */
    engineVersion: string;
    /**
     * A value that indicates the ID of the AMI.
     */
    imageId?: string;
    /**
     * The AWS KMS key identifier for an encrypted CEV.
     */
    kmsKeyId?: string;
    /**
     * The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.
     */
    manifest?: string;
    /**
     * The ARN of a CEV to use as a source for creating a new CEV.
     */
    sourceCustomDbEngineVersionIdentifier?: string;
    /**
     * A value that indicates the status of a custom engine version (CEV).
     */
    status?: string;
    /**
     * A list of tags.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV.
     */
    useAwsProvidedLatestImage?: boolean | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCustomDBEngineVersionProps);
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
 * Properties for defining a `CfnCustomDBEngineVersion`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html
 */
export interface CfnCustomDBEngineVersionProps {
    /**
     * The name of an Amazon S3 bucket that contains database installation files for your CEV.
     *
     * For example, a valid bucket name is `my-custom-installation-files` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html#cfn-rds-customdbengineversion-databaseinstallationfiless3bucketname
     */
    readonly databaseInstallationFilesS3BucketName?: string;
    /**
     * The Amazon S3 directory that contains the database installation files for your CEV.
     *
     * For example, a valid bucket name is `123456789012/cev1` . If this setting isn't specified, no prefix is assumed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html#cfn-rds-customdbengineversion-databaseinstallationfiless3prefix
     */
    readonly databaseInstallationFilesS3Prefix?: string;
    /**
     * An optional description of your CEV.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html#cfn-rds-customdbengineversion-description
     */
    readonly description?: string;
    /**
     * The database engine to use for your custom engine version (CEV).
     *
     * Valid values:
     *
     * - `custom-oracle-ee`
     * - `custom-oracle-ee-cdb`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html#cfn-rds-customdbengineversion-engine
     */
    readonly engine: string;
    /**
     * The name of your CEV.
     *
     * The name format is `major version.customized_string` . For example, a valid CEV name is `19.my_cev1` . This setting is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of `Engine` and `EngineVersion` is unique per customer per Region.
     *
     * *Constraints:* Minimum length is 1. Maximum length is 60.
     *
     * *Pattern:* `^[a-z0-9_.-]{1,60$` }
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html#cfn-rds-customdbengineversion-engineversion
     */
    readonly engineVersion: string;
    /**
     * A value that indicates the ID of the AMI.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html#cfn-rds-customdbengineversion-imageid
     */
    readonly imageId?: string;
    /**
     * The AWS KMS key identifier for an encrypted CEV.
     *
     * A symmetric encryption KMS key is required for RDS Custom, but optional for Amazon RDS.
     *
     * If you have an existing symmetric encryption KMS key in your account, you can use it with RDS Custom. No further action is necessary. If you don't already have a symmetric encryption KMS key in your account, follow the instructions in [Creating a symmetric encryption KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html#create-symmetric-cmk) in the *AWS Key Management Service Developer Guide* .
     *
     * You can choose the same symmetric encryption key when you create a CEV and a DB instance, or choose different keys.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html#cfn-rds-customdbengineversion-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.
     *
     * The following JSON fields are valid:
     *
     * - **MediaImportTemplateVersion** - Version of the CEV manifest. The date is in the format `YYYY-MM-DD` .
     * - **databaseInstallationFileNames** - Ordered list of installation files for the CEV.
     * - **opatchFileNames** - Ordered list of OPatch installers used for the Oracle DB engine.
     * - **psuRuPatchFileNames** - The PSU and RU patches for this CEV.
     * - **OtherPatchFileNames** - The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches.
     *
     * For more information, see [Creating the CEV manifest](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest) in the *Amazon RDS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html#cfn-rds-customdbengineversion-manifest
     */
    readonly manifest?: string;
    /**
     * The ARN of a CEV to use as a source for creating a new CEV.
     *
     * You can specify a different Amazon Machine Imagine (AMI) by using either `Source` or `UseAwsProvidedLatestImage` . You can't specify a different JSON manifest when you specify `SourceCustomDbEngineVersionIdentifier` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html#cfn-rds-customdbengineversion-sourcecustomdbengineversionidentifier
     */
    readonly sourceCustomDbEngineVersionIdentifier?: string;
    /**
     * A value that indicates the status of a custom engine version (CEV).
     *
     * @default - "available"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html#cfn-rds-customdbengineversion-status
     */
    readonly status?: string;
    /**
     * A list of tags.
     *
     * For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html#cfn-rds-customdbengineversion-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV.
     *
     * If you specify `UseAwsProvidedLatestImage` , you can't also specify `ImageId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-customdbengineversion.html#cfn-rds-customdbengineversion-useawsprovidedlatestimage
     */
    readonly useAwsProvidedLatestImage?: boolean | cdk.IResolvable;
}
/**
 * The `AWS::RDS::DBCluster` resource creates an Amazon Aurora DB cluster or Multi-AZ DB cluster.
 *
 * For more information about creating an Aurora DB cluster, see [Creating an Amazon Aurora DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html) in the *Amazon Aurora User Guide* .
 *
 * For more information about creating a Multi-AZ DB cluster, see [Creating a Multi-AZ DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html) in the *Amazon RDS User Guide* .
 *
 * > You can only create this resource in AWS Regions where Amazon Aurora or Multi-AZ DB clusters are supported.
 *
 * *Updating DB clusters*
 *
 * When properties labeled " *Update requires:* [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement) " are updated, AWS CloudFormation first creates a replacement DB cluster, then changes references from other dependent resources to point to the replacement DB cluster, and finally deletes the old DB cluster.
 *
 * > We highly recommend that you take a snapshot of the database before updating the stack. If you don't, you lose the data when AWS CloudFormation replaces your DB cluster. To preserve your data, perform the following procedure:
 * >
 * > - Deactivate any applications that are using the DB cluster so that there's no activity on the DB instance.
 * > - Create a snapshot of the DB cluster. For more information, see [Creating a DB cluster snapshot](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CreateSnapshotCluster.html) .
 * > - If you want to restore your DB cluster using a DB cluster snapshot, modify the updated template with your DB cluster changes and add the `SnapshotIdentifier` property with the ID of the DB cluster snapshot that you want to use.
 * >
 * > After you restore a DB cluster with a `SnapshotIdentifier` property, you must specify the same `SnapshotIdentifier` property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the DB cluster snapshot again, and the data in the database is not changed. However, if you don't specify the `SnapshotIdentifier` property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB cluster is restored from the specified `SnapshotIdentifier` property, and the original DB cluster is deleted.
 * > - Update the stack.
 *
 * Currently, when you are updating the stack for an Aurora Serverless DB cluster, you can't include changes to any other properties when you specify one of the following properties: `PreferredBackupWindow` , `PreferredMaintenanceWindow` , and `Port` . This limitation doesn't apply to provisioned DB clusters.
 *
 * For more information about updating other properties of this resource, see `[ModifyDBCluster](https://docs.aws.amazon.com//AmazonRDS/latest/APIReference/API_ModifyDBCluster.html)` . For more information about updating stacks, see [AWS CloudFormation Stacks Updates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html) .
 *
 * *Deleting DB clusters*
 *
 * The default `DeletionPolicy` for `AWS::RDS::DBCluster` resources is `Snapshot` . For more information about how AWS CloudFormation deletes resources, see [DeletionPolicy Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html) .
 *
 * @cloudformationResource AWS::RDS::DBCluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html
 */
export declare class CfnDBCluster extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDBCluster from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDBCluster;
    /**
     * The Amazon Resource Name (ARN) for the DB cluster.
     *
     * @cloudformationAttribute DBClusterArn
     */
    readonly attrDbClusterArn: string;
    /**
     * The AWS Region -unique, immutable identifier for the DB cluster. This identifier is found in AWS CloudTrail log entries whenever the KMS key for the DB cluster is accessed.
     *
     * @cloudformationAttribute DBClusterResourceId
     */
    readonly attrDbClusterResourceId: string;
    /**
     * The ``Endpoint`` return value specifies the connection endpoint for the primary instance of the DB cluster.
     *
     * @cloudformationAttribute Endpoint
     */
    readonly attrEndpoint: cdk.IResolvable;
    /**
     * The connection endpoint for the DB cluster. For example: `mystack-mydbcluster-123456789012.us-east-2.rds.amazonaws.com`
     *
     * @cloudformationAttribute Endpoint.Address
     */
    readonly attrEndpointAddress: string;
    /**
     * The port number that will accept connections on this DB cluster. For example: `3306`
     *
     * @cloudformationAttribute Endpoint.Port
     */
    readonly attrEndpointPort: string;
    /**
     * The Amazon Resource Name (ARN) of the secret.
     *
     * @cloudformationAttribute MasterUserSecret.SecretArn
     */
    readonly attrMasterUserSecretSecretArn: string;
    /**
     * The ``ReadEndpoint`` return value specifies the reader endpoint for the DB cluster.
     *  The reader endpoint for a DB cluster load-balances connections across the Aurora Replicas that are available in a DB cluster. As clients request new connections to the reader endpoint, Aurora distributes the connection requests among the Aurora Replicas in the DB cluster. This functionality can help balance your read workload across multiple Aurora Replicas in your DB cluster.
     *  If a failover occurs, and the Aurora Replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Aurora Replicas in the cluster, you can then reconnect to the reader endpoint.
     *  For more information about Aurora endpoints, see [Amazon Aurora connection management](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html) in the *Amazon Aurora User Guide*.
     *
     * @cloudformationAttribute ReadEndpoint
     */
    readonly attrReadEndpoint: cdk.IResolvable;
    /**
     * The reader endpoint for the DB cluster. For example: `mystack-mydbcluster-ro-123456789012.us-east-2.rds.amazonaws.com`
     *
     * @cloudformationAttribute ReadEndpoint.Address
     */
    readonly attrReadEndpointAddress: string;
    /**
     * The storage throughput for the DB cluster. The throughput is automatically set based on the IOPS that you provision, and is not configurable.
     *
     * This setting is only for non-Aurora Multi-AZ DB clusters.
     *
     * @cloudformationAttribute StorageThroughput
     */
    readonly attrStorageThroughput: number;
    /**
     * The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.
     */
    allocatedStorage?: number;
    /**
     * Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster.
     */
    associatedRoles?: Array<CfnDBCluster.DBClusterRoleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window.
     */
    autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * A list of Availability Zones (AZs) where instances in the DB cluster can be created.
     */
    availabilityZones?: Array<string>;
    /**
     * The target backtrack window, in seconds. To disable backtracking, set this value to `0` .
     */
    backtrackWindow?: number;
    /**
     * The number of days for which automated backups are retained.
     */
    backupRetentionPeriod?: number;
    /**
     * Specifies the scalability mode of the Aurora DB cluster.
     */
    clusterScalabilityType?: string;
    /**
     * A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.
     */
    copyTagsToSnapshot?: boolean | cdk.IResolvable;
    /**
     * The mode of Database Insights to enable for the DB cluster.
     */
    databaseInsightsMode?: string;
    /**
     * The name of your database.
     */
    databaseName?: string;
    /**
     * The DB cluster identifier. This parameter is stored as a lowercase string.
     */
    dbClusterIdentifier?: string;
    /**
     * The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example `db.m6gd.xlarge` . Not all DB instance classes are available in all AWS Regions , or for all database engines.
     */
    dbClusterInstanceClass?: string;
    /**
     * The name of the DB cluster parameter group to associate with this DB cluster.
     */
    dbClusterParameterGroupName?: string;
    /**
     * The name of the DB parameter group to apply to all instances of the DB cluster.
     */
    dbInstanceParameterGroupName?: string;
    /**
     * A DB subnet group that you want to associate with this DB cluster.
     */
    dbSubnetGroupName?: string;
    /**
     * Reserved for future use.
     */
    dbSystemId?: string;
    /**
     * A value that indicates whether the DB cluster has deletion protection enabled.
     */
    deletionProtection?: boolean | cdk.IResolvable;
    /**
     * Indicates the directory ID of the Active Directory to create the DB cluster.
     */
    domain?: string;
    /**
     * Specifies the name of the IAM role to use when making API calls to the Directory Service.
     */
    domainIamRoleName?: string;
    /**
     * The list of log types that need to be enabled for exporting to CloudWatch Logs.
     */
    enableCloudwatchLogsExports?: Array<string>;
    /**
     * Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database).
     */
    enableGlobalWriteForwarding?: boolean | cdk.IResolvable;
    /**
     * Specifies whether to enable the HTTP endpoint for the DB cluster. By default, the HTTP endpoint isn't enabled.
     */
    enableHttpEndpoint?: boolean | cdk.IResolvable;
    /**
     * A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts.
     */
    enableIamDatabaseAuthentication?: boolean | cdk.IResolvable;
    /**
     * Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster.
     */
    enableLocalWriteForwarding?: boolean | cdk.IResolvable;
    /**
     * The name of the database engine to be used for this DB cluster.
     */
    engine?: string;
    /**
     * The life cycle type for this DB cluster.
     */
    engineLifecycleSupport?: string;
    /**
     * The DB engine mode of the DB cluster, either `provisioned` or `serverless` .
     */
    engineMode?: string;
    /**
     * The version number of the database engine to use.
     */
    engineVersion?: string;
    /**
     * If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster.
     */
    globalClusterIdentifier?: string;
    /**
     * The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.
     */
    iops?: number;
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as `arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef` .
     */
    kmsKeyId?: string;
    /**
     * Specifies whether to manage the master user password with AWS Secrets Manager.
     */
    manageMasterUserPassword?: boolean | cdk.IResolvable;
    /**
     * The name of the master user for the DB cluster.
     */
    masterUsername?: string;
    /**
     * The master password for the DB instance.
     */
    masterUserPassword?: string;
    /**
     * The secret managed by RDS in AWS Secrets Manager for the master user password.
     */
    masterUserSecret?: cdk.IResolvable | CfnDBCluster.MasterUserSecretProperty;
    /**
     * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster.
     */
    monitoringInterval?: number;
    /**
     * The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.
     */
    monitoringRoleArn?: string;
    /**
     * The network type of the DB cluster.
     */
    networkType?: string;
    /**
     * Specifies whether to turn on Performance Insights for the DB cluster.
     */
    performanceInsightsEnabled?: boolean | cdk.IResolvable;
    /**
     * The AWS KMS key identifier for encryption of Performance Insights data.
     */
    performanceInsightsKmsKeyId?: string;
    /**
     * The number of days to retain Performance Insights data.
     */
    performanceInsightsRetentionPeriod?: number;
    /**
     * The port number on which the DB instances in the DB cluster accept connections.
     */
    port?: number;
    /**
     * The daily time range during which automated backups are created.
     */
    preferredBackupWindow?: string;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     */
    preferredMaintenanceWindow?: string;
    /**
     * Specifies whether the DB cluster is publicly accessible.
     */
    publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica.
     */
    replicationSourceIdentifier?: string;
    /**
     * The date and time to restore the DB cluster to.
     */
    restoreToTime?: string;
    /**
     * The type of restore to be performed. You can specify one of the following values:.
     */
    restoreType?: string;
    /**
     * The scaling configuration of an Aurora Serverless v1 DB cluster.
     */
    scalingConfiguration?: cdk.IResolvable | CfnDBCluster.ScalingConfigurationProperty;
    /**
     * The scaling configuration of an Aurora Serverless V2 DB cluster.
     */
    serverlessV2ScalingConfiguration?: cdk.IResolvable | CfnDBCluster.ServerlessV2ScalingConfigurationProperty;
    /**
     * The identifier for the DB snapshot or DB cluster snapshot to restore from.
     */
    snapshotIdentifier?: string;
    /**
     * When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore.
     */
    sourceDbClusterIdentifier?: string;
    /**
     * The AWS Region which contains the source DB cluster when replicating a DB cluster. For example, `us-east-1` .
     */
    sourceRegion?: string;
    /**
     * Indicates whether the DB cluster is encrypted.
     */
    storageEncrypted?: boolean | cdk.IResolvable;
    /**
     * The storage type to associate with the DB cluster.
     */
    storageType?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags to assign to the DB cluster.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A value that indicates whether to restore the DB cluster to the latest restorable backup time.
     */
    useLatestRestorableTime?: boolean | cdk.IResolvable;
    /**
     * A list of EC2 VPC security groups to associate with this DB cluster.
     */
    vpcSecurityGroupIds?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDBClusterProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDBCluster {
    /**
     * The `ServerlessV2ScalingConfiguration` property type specifies the scaling configuration of an Aurora Serverless V2 DB cluster.
     *
     * For more information, see [Using Amazon Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html) in the *Amazon Aurora User Guide* .
     *
     * If you have an Aurora cluster, you must set this attribute before you add a DB instance that uses the `db.serverless` DB instance class. For more information, see [Clusters that use Aurora Serverless v2 must have a capacity range specified](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.requirements.html#aurora-serverless-v2.requirements.capacity-range) in the *Amazon Aurora User Guide* .
     *
     * This property is only supported for Aurora Serverless v2. For Aurora Serverless v1, use the `ScalingConfiguration` property.
     *
     * Valid for: Aurora Serverless v2 DB clusters
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-serverlessv2scalingconfiguration.html
     */
    interface ServerlessV2ScalingConfigurationProperty {
        /**
         * The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.
         *
         * You can specify ACU values in half-step increments, such as 40, 40.5, 41, and so on. The largest value that you can use is 128.
         *
         * The maximum capacity must be higher than 0.5 ACUs. For more information, see [Choosing the maximum Aurora Serverless v2 capacity setting for a cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.setting-capacity.html#aurora-serverless-v2.max_capacity_considerations) in the *Amazon Aurora User Guide* .
         *
         * Aurora automatically sets certain parameters for Aurora Serverless V2 DB instances to values that depend on the maximum ACU value in the capacity range. When you update the maximum capacity value, the `ParameterApplyStatus` value for the DB instance changes to `pending-reboot` . You can update the parameter values by rebooting the DB instance after changing the capacity range.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-serverlessv2scalingconfiguration.html#cfn-rds-dbcluster-serverlessv2scalingconfiguration-maxcapacity
         */
        readonly maxCapacity?: number;
        /**
         * The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster.
         *
         * You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on. For Aurora versions that support the Aurora Serverless v2 auto-pause feature, the smallest value that you can use is 0. For versions that don't support Aurora Serverless v2 auto-pause, the smallest value that you can use is 0.5.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-serverlessv2scalingconfiguration.html#cfn-rds-dbcluster-serverlessv2scalingconfiguration-mincapacity
         */
        readonly minCapacity?: number;
        /**
         * Specifies the number of seconds an Aurora Serverless v2 DB instance must be idle before Aurora attempts to automatically pause it.
         *
         * Specify a value between 300 seconds (five minutes) and 86,400 seconds (one day). The default is 300 seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-serverlessv2scalingconfiguration.html#cfn-rds-dbcluster-serverlessv2scalingconfiguration-secondsuntilautopause
         */
        readonly secondsUntilAutoPause?: number;
    }
    /**
     * The `MasterUserSecret` return value specifies the secret managed by RDS in AWS Secrets Manager for the master user password.
     *
     * For more information, see [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html
     */
    interface MasterUserSecretProperty {
        /**
         * The AWS KMS key identifier that is used to encrypt the secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html#cfn-rds-dbcluster-masterusersecret-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * The Amazon Resource Name (ARN) of the secret.
         *
         * This parameter is a return value that you can retrieve using the `Fn::GetAtt` intrinsic function. For more information, see [Return values](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#aws-resource-rds-dbcluster-return-values) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-masterusersecret.html#cfn-rds-dbcluster-masterusersecret-secretarn
         */
        readonly secretArn?: string;
    }
    /**
     * The `ScalingConfiguration` property type specifies the scaling configuration of an Aurora Serverless v1 DB cluster.
     *
     * For more information, see [Using Amazon Aurora Serverless](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html) in the *Amazon Aurora User Guide* .
     *
     * This property is only supported for Aurora Serverless v1. For Aurora Serverless v2, Use the `ServerlessV2ScalingConfiguration` property.
     *
     * Valid for: Aurora Serverless v1 DB clusters only
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-scalingconfiguration.html
     */
    interface ScalingConfigurationProperty {
        /**
         * Indicates whether to allow or disallow automatic pause for an Aurora DB cluster in `serverless` DB engine mode.
         *
         * A DB cluster can be paused only when it's idle (it has no connections).
         *
         * > If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot. In this case, the DB cluster is restored when there is a request to connect to it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-scalingconfiguration.html#cfn-rds-dbcluster-scalingconfiguration-autopause
         */
        readonly autoPause?: boolean | cdk.IResolvable;
        /**
         * The maximum capacity for an Aurora DB cluster in `serverless` DB engine mode.
         *
         * For Aurora MySQL, valid capacity values are `1` , `2` , `4` , `8` , `16` , `32` , `64` , `128` , and `256` .
         *
         * For Aurora PostgreSQL, valid capacity values are `2` , `4` , `8` , `16` , `32` , `64` , `192` , and `384` .
         *
         * The maximum capacity must be greater than or equal to the minimum capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-scalingconfiguration.html#cfn-rds-dbcluster-scalingconfiguration-maxcapacity
         */
        readonly maxCapacity?: number;
        /**
         * The minimum capacity for an Aurora DB cluster in `serverless` DB engine mode.
         *
         * For Aurora MySQL, valid capacity values are `1` , `2` , `4` , `8` , `16` , `32` , `64` , `128` , and `256` .
         *
         * For Aurora PostgreSQL, valid capacity values are `2` , `4` , `8` , `16` , `32` , `64` , `192` , and `384` .
         *
         * The minimum capacity must be less than or equal to the maximum capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-scalingconfiguration.html#cfn-rds-dbcluster-scalingconfiguration-mincapacity
         */
        readonly minCapacity?: number;
        /**
         * The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action.
         *
         * The default is 300.
         *
         * Specify a value between 60 and 600 seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-scalingconfiguration.html#cfn-rds-dbcluster-scalingconfiguration-secondsbeforetimeout
         */
        readonly secondsBeforeTimeout?: number;
        /**
         * The time, in seconds, before an Aurora DB cluster in `serverless` mode is paused.
         *
         * Specify a value between 300 and 86,400 seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-scalingconfiguration.html#cfn-rds-dbcluster-scalingconfiguration-secondsuntilautopause
         */
        readonly secondsUntilAutoPause?: number;
        /**
         * The action to take when the timeout is reached, either `ForceApplyCapacityChange` or `RollbackCapacityChange` .
         *
         * `ForceApplyCapacityChange` sets the capacity to the specified value as soon as possible.
         *
         * `RollbackCapacityChange` , the default, ignores the capacity change if a scaling point isn't found in the timeout period.
         *
         * > If you specify `ForceApplyCapacityChange` , connections that prevent Aurora Serverless v1 from finding a scaling point might be dropped.
         *
         * For more information, see [Autoscaling for Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling) in the *Amazon Aurora User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-scalingconfiguration.html#cfn-rds-dbcluster-scalingconfiguration-timeoutaction
         */
        readonly timeoutAction?: string;
    }
    /**
     * Describes an AWS Identity and Access Management (IAM) role that is associated with a DB cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-dbclusterrole.html
     */
    interface DBClusterRoleProperty {
        /**
         * The name of the feature associated with the AWS Identity and Access Management (IAM) role.
         *
         * IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf. For the list of supported feature names, see the `SupportedFeatureNames` description in [DBEngineVersion](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html) in the *Amazon RDS API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-dbclusterrole.html#cfn-rds-dbcluster-dbclusterrole-featurename
         */
        readonly featureName?: string;
        /**
         * The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-dbclusterrole.html#cfn-rds-dbcluster-dbclusterrole-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * The `Endpoint` return value specifies the connection endpoint for the primary instance of the DB cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-endpoint.html
     */
    interface EndpointProperty {
        /**
         * Specifies the connection endpoint for the primary instance of the DB cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-endpoint.html#cfn-rds-dbcluster-endpoint-address
         */
        readonly address?: string;
        /**
         * Specifies the port that the database engine is listening on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-endpoint.html#cfn-rds-dbcluster-endpoint-port
         */
        readonly port?: string;
    }
    /**
     * The `ReadEndpoint` return value specifies the reader endpoint for the DB cluster.
     *
     * The reader endpoint for a DB cluster load-balances connections across the Aurora Replicas that are available in a DB cluster. As clients request new connections to the reader endpoint, Aurora distributes the connection requests among the Aurora Replicas in the DB cluster. This functionality can help balance your read workload across multiple Aurora Replicas in your DB cluster.
     *
     * If a failover occurs, and the Aurora Replica that you are connected to is promoted to be the primary instance, your connection is dropped. To continue sending your read workload to other Aurora Replicas in the cluster, you can then reconnect to the reader endpoint.
     *
     * For more information about Aurora endpoints, see [Amazon Aurora connection management](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.Endpoints.html) in the *Amazon Aurora User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-readendpoint.html
     */
    interface ReadEndpointProperty {
        /**
         * The host address of the reader endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbcluster-readendpoint.html#cfn-rds-dbcluster-readendpoint-address
         */
        readonly address?: string;
    }
}
/**
 * Properties for defining a `CfnDBCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html
 */
export interface CfnDBClusterProps {
    /**
     * The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.
     *
     * Valid for Cluster Type: Multi-AZ DB clusters only
     *
     * This setting is required to create a Multi-AZ DB cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-allocatedstorage
     */
    readonly allocatedStorage?: number;
    /**
     * Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster.
     *
     * IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon Web Services on your behalf.
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-associatedroles
     */
    readonly associatedRoles?: Array<CfnDBCluster.DBClusterRoleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window.
     *
     * By default, minor engine upgrades are applied automatically.
     *
     * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB cluster
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-autominorversionupgrade
     */
    readonly autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * A list of Availability Zones (AZs) where instances in the DB cluster can be created.
     *
     * For information on AWS Regions and Availability Zones, see [Choosing the Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html) in the *Amazon Aurora User Guide* .
     *
     * Valid for: Aurora DB clusters only
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-availabilityzones
     */
    readonly availabilityZones?: Array<string>;
    /**
     * The target backtrack window, in seconds. To disable backtracking, set this value to `0` .
     *
     * Valid for Cluster Type: Aurora MySQL DB clusters only
     *
     * Default: `0`
     *
     * Constraints:
     *
     * - If specified, this value must be set to a number from 0 to 259,200 (72 hours).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-backtrackwindow
     */
    readonly backtrackWindow?: number;
    /**
     * The number of days for which automated backups are retained.
     *
     * Default: 1
     *
     * Constraints:
     *
     * - Must be a value from 1 to 35
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @default - 1
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-backupretentionperiod
     */
    readonly backupRetentionPeriod?: number;
    /**
     * Specifies the scalability mode of the Aurora DB cluster.
     *
     * When set to `limitless` , the cluster operates as an Aurora Limitless Database, allowing you to create a DB shard group for horizontal scaling (sharding) capabilities. When set to `standard` (the default), the cluster uses normal DB instance creation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-clusterscalabilitytype
     */
    readonly clusterScalabilityType?: string;
    /**
     * A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.
     *
     * The default is not to copy them.
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-copytagstosnapshot
     */
    readonly copyTagsToSnapshot?: boolean | cdk.IResolvable;
    /**
     * The mode of Database Insights to enable for the DB cluster.
     *
     * If you set this value to `advanced` , you must also set the `PerformanceInsightsEnabled` parameter to `true` and the `PerformanceInsightsRetentionPeriod` parameter to 465.
     *
     * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-databaseinsightsmode
     */
    readonly databaseInsightsMode?: string;
    /**
     * The name of your database.
     *
     * If you don't provide a name, then Amazon RDS won't create a database in this DB cluster. For naming constraints, see [Naming Constraints](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon Aurora User Guide* .
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-databasename
     */
    readonly databaseName?: string;
    /**
     * The DB cluster identifier. This parameter is stored as a lowercase string.
     *
     * Constraints:
     *
     * - Must contain from 1 to 63 letters, numbers, or hyphens.
     * - First character must be a letter.
     * - Can't end with a hyphen or contain two consecutive hyphens.
     *
     * Example: `my-cluster1`
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-dbclusteridentifier
     */
    readonly dbClusterIdentifier?: string;
    /**
     * The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example `db.m6gd.xlarge` . Not all DB instance classes are available in all AWS Regions , or for all database engines.
     *
     * For the full list of DB instance classes and availability for your engine, see [DB instance class](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* .
     *
     * This setting is required to create a Multi-AZ DB cluster.
     *
     * Valid for Cluster Type: Multi-AZ DB clusters only
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-dbclusterinstanceclass
     */
    readonly dbClusterInstanceClass?: string;
    /**
     * The name of the DB cluster parameter group to associate with this DB cluster.
     *
     * > If you apply a parameter group to an existing DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.
     * >
     * > If you apply a change to parameter group associated with a stopped DB cluster, then the update stack waits until the DB cluster is started.
     *
     * To list all of the available DB cluster parameter group names, use the following command:
     *
     * `aws rds describe-db-cluster-parameter-groups --query "DBClusterParameterGroups[].DBClusterParameterGroupName" --output text`
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-dbclusterparametergroupname
     */
    readonly dbClusterParameterGroupName?: string;
    /**
     * The name of the DB parameter group to apply to all instances of the DB cluster.
     *
     * > When you apply a parameter group using the `DBInstanceParameterGroupName` parameter, the DB cluster isn't rebooted automatically. Also, parameter changes are applied immediately rather than during the next maintenance window.
     *
     * Valid for Cluster Type: Aurora DB clusters only
     *
     * Default: The existing name setting
     *
     * Constraints:
     *
     * - The DB parameter group must be in the same DB parameter group family as this DB cluster.
     * - The `DBInstanceParameterGroupName` parameter is valid in combination with the `AllowMajorVersionUpgrade` parameter for a major version upgrade only.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-dbinstanceparametergroupname
     */
    readonly dbInstanceParameterGroupName?: string;
    /**
     * A DB subnet group that you want to associate with this DB cluster.
     *
     * If you are restoring a DB cluster to a point in time with `RestoreType` set to `copy-on-write` , and don't specify a DB subnet group name, then the DB cluster is restored with a default DB subnet group.
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-dbsubnetgroupname
     */
    readonly dbSubnetGroupName?: string;
    /**
     * Reserved for future use.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-dbsystemid
     */
    readonly dbSystemId?: string;
    /**
     * A value that indicates whether the DB cluster has deletion protection enabled.
     *
     * The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-deletionprotection
     */
    readonly deletionProtection?: boolean | cdk.IResolvable;
    /**
     * Indicates the directory ID of the Active Directory to create the DB cluster.
     *
     * For Amazon Aurora DB clusters, Amazon RDS can use Kerberos authentication to authenticate users that connect to the DB cluster.
     *
     * For more information, see [Kerberos authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/kerberos-authentication.html) in the *Amazon Aurora User Guide* .
     *
     * Valid for: Aurora DB clusters only
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-domain
     */
    readonly domain?: string;
    /**
     * Specifies the name of the IAM role to use when making API calls to the Directory Service.
     *
     * Valid for: Aurora DB clusters only
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-domainiamrolename
     */
    readonly domainIamRoleName?: string;
    /**
     * The list of log types that need to be enabled for exporting to CloudWatch Logs.
     *
     * The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Aurora User Guide* .
     *
     * *Aurora MySQL*
     *
     * Valid values: `audit` , `error` , `general` , `slowquery`
     *
     * *Aurora PostgreSQL*
     *
     * Valid values: `postgresql`
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-enablecloudwatchlogsexports
     */
    readonly enableCloudwatchLogsExports?: Array<string>;
    /**
     * Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database).
     *
     * By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database.
     *
     * You can set this value only on Aurora DB clusters that are members of an Aurora global database. With this parameter enabled, a secondary cluster can forward writes to the current primary cluster, and the resulting changes are replicated back to this cluster. For the primary DB cluster of an Aurora global database, this value is used immediately if the primary is demoted by a global cluster API operation, but it does nothing until then.
     *
     * Valid for Cluster Type: Aurora DB clusters only
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-enableglobalwriteforwarding
     */
    readonly enableGlobalWriteForwarding?: boolean | cdk.IResolvable;
    /**
     * Specifies whether to enable the HTTP endpoint for the DB cluster. By default, the HTTP endpoint isn't enabled.
     *
     * When enabled, the HTTP endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the DB cluster. You can also query your database from inside the RDS console with the RDS query editor.
     *
     * For more information, see [Using RDS Data API](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the *Amazon Aurora User Guide* .
     *
     * Valid for Cluster Type: Aurora DB clusters only
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-enablehttpendpoint
     */
    readonly enableHttpEndpoint?: boolean | cdk.IResolvable;
    /**
     * A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts.
     *
     * By default, mapping is disabled.
     *
     * For more information, see [IAM Database Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon Aurora User Guide.*
     *
     * Valid for: Aurora DB clusters only
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-enableiamdatabaseauthentication
     */
    readonly enableIamDatabaseAuthentication?: boolean | cdk.IResolvable;
    /**
     * Specifies whether read replicas can forward write operations to the writer DB instance in the DB cluster.
     *
     * By default, write operations aren't allowed on reader DB instances.
     *
     * Valid for: Aurora DB clusters only
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-enablelocalwriteforwarding
     */
    readonly enableLocalWriteForwarding?: boolean | cdk.IResolvable;
    /**
     * The name of the database engine to be used for this DB cluster.
     *
     * Valid Values:
     *
     * - `aurora-mysql`
     * - `aurora-postgresql`
     * - `mysql`
     * - `postgres`
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-engine
     */
    readonly engine?: string;
    /**
     * The life cycle type for this DB cluster.
     *
     * > By default, this value is set to `open-source-rds-extended-support` , which enrolls your DB cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled` . In this case, creating the DB cluster will fail if the DB major version is past its end of standard support date.
     *
     * You can use this setting to enroll your DB cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB cluster past the end of standard support for that engine version. For more information, see the following sections:
     *
     * - Amazon Aurora - [Using Amazon RDS Extended Support](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html) in the *Amazon Aurora User Guide*
     * - Amazon RDS - [Using Amazon RDS Extended Support](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide*
     *
     * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
     *
     * Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
     *
     * Default: `open-source-rds-extended-support`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-enginelifecyclesupport
     */
    readonly engineLifecycleSupport?: string;
    /**
     * The DB engine mode of the DB cluster, either `provisioned` or `serverless` .
     *
     * The `serverless` engine mode only applies for Aurora Serverless v1 DB clusters. Aurora Serverless v2 DB clusters use the `provisioned` engine mode.
     *
     * For information about limitations and requirements for Serverless DB clusters, see the following sections in the *Amazon Aurora User Guide* :
     *
     * - [Limitations of Aurora Serverless v1](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations)
     * - [Requirements for Aurora Serverless v2](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.requirements.html)
     *
     * Valid for Cluster Type: Aurora DB clusters only
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-enginemode
     */
    readonly engineMode?: string;
    /**
     * The version number of the database engine to use.
     *
     * To list all of the available engine versions for Aurora MySQL version 2 (5.7-compatible) and version 3 (8.0-compatible), use the following command:
     *
     * `aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"`
     *
     * You can supply either `5.7` or `8.0` to use the default engine version for Aurora MySQL version 2 or version 3, respectively.
     *
     * To list all of the available engine versions for Aurora PostgreSQL, use the following command:
     *
     * `aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"`
     *
     * To list all of the available engine versions for RDS for MySQL, use the following command:
     *
     * `aws rds describe-db-engine-versions --engine mysql --query "DBEngineVersions[].EngineVersion"`
     *
     * To list all of the available engine versions for RDS for PostgreSQL, use the following command:
     *
     * `aws rds describe-db-engine-versions --engine postgres --query "DBEngineVersions[].EngineVersion"`
     *
     * *Aurora MySQL*
     *
     * For information, see [Database engine updates for Amazon Aurora MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Updates.html) in the *Amazon Aurora User Guide* .
     *
     * *Aurora PostgreSQL*
     *
     * For information, see [Amazon Aurora PostgreSQL releases and engine versions](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraPostgreSQL.Updates.20180305.html) in the *Amazon Aurora User Guide* .
     *
     * *MySQL*
     *
     * For information, see [Amazon RDS for MySQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the *Amazon RDS User Guide* .
     *
     * *PostgreSQL*
     *
     * For information, see [Amazon RDS for PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts) in the *Amazon RDS User Guide* .
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-engineversion
     */
    readonly engineVersion?: string;
    /**
     * If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster.
     *
     * To define the primary database cluster of the global cluster, use the [AWS::RDS::GlobalCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html) resource.
     *
     * If you aren't configuring a global database cluster, don't specify this property.
     *
     * > To remove the DB cluster from a global database cluster, specify an empty value for the `GlobalClusterIdentifier` property.
     *
     * For information about Aurora global databases, see [Working with Amazon Aurora Global Databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) in the *Amazon Aurora User Guide* .
     *
     * Valid for: Aurora DB clusters only
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-globalclusteridentifier
     */
    readonly globalClusterIdentifier?: string;
    /**
     * The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.
     *
     * For information about valid IOPS values, see [Provisioned IOPS storage](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide* .
     *
     * This setting is required to create a Multi-AZ DB cluster.
     *
     * Valid for Cluster Type: Multi-AZ DB clusters only
     *
     * Constraints:
     *
     * - Must be a multiple between .5 and 50 of the storage amount for the DB cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-iops
     */
    readonly iops?: number;
    /**
     * The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as `arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef` .
     *
     * If you enable the `StorageEncrypted` property but don't specify this property, the default KMS key is used. If you specify this property, you must set the `StorageEncrypted` property to `true` .
     *
     * If you specify the `SnapshotIdentifier` property, the `StorageEncrypted` property value is inherited from the snapshot, and if the DB cluster is encrypted, the specified `KmsKeyId` property is used.
     *
     * If you create a read replica of an encrypted DB cluster in another AWS Region, make sure to set `KmsKeyId` to a KMS key identifier that is valid in the destination AWS Region. This KMS key is used to encrypt the read replica in that AWS Region.
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * Specifies whether to manage the master user password with AWS Secrets Manager.
     *
     * For more information, see [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
     *
     * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
     *
     * Constraints:
     *
     * - Can't manage the master user password with AWS Secrets Manager if `MasterUserPassword` is specified.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-managemasteruserpassword
     */
    readonly manageMasterUserPassword?: boolean | cdk.IResolvable;
    /**
     * The name of the master user for the DB cluster.
     *
     * > If you specify the `SourceDBClusterIdentifier` , `SnapshotIdentifier` , or `GlobalClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-masterusername
     */
    readonly masterUsername?: string;
    /**
     * The master password for the DB instance.
     *
     * > If you specify the `SourceDBClusterIdentifier` , `SnapshotIdentifier` , or `GlobalClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, the snapshot, or the primary DB cluster for the global database cluster, respectively.
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-masteruserpassword
     */
    readonly masterUserPassword?: string;
    /**
     * The secret managed by RDS in AWS Secrets Manager for the master user password.
     *
     * > When you restore a DB cluster from a snapshot, Amazon RDS generates a new secret instead of reusing the secret specified in the `SecretArn` property. This ensures that the restored DB cluster is securely managed with a dedicated secret. To maintain consistent integration with your application, you might need to update resource configurations to reference the newly created secret.
     *
     * For more information, see [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-masterusersecret
     */
    readonly masterUserSecret?: cdk.IResolvable | CfnDBCluster.MasterUserSecretProperty;
    /**
     * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster.
     *
     * To turn off collecting Enhanced Monitoring metrics, specify `0` .
     *
     * If `MonitoringRoleArn` is specified, also set `MonitoringInterval` to a value other than `0` .
     *
     * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
     *
     * Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
     *
     * Default: `0`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-monitoringinterval
     */
    readonly monitoringInterval?: number;
    /**
     * The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.
     *
     * An example is `arn:aws:iam:123456789012:role/emaccess` . For information on creating a monitoring role, see [Setting up and enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide* .
     *
     * If `MonitoringInterval` is set to a value other than `0` , supply a `MonitoringRoleArn` value.
     *
     * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-monitoringrolearn
     */
    readonly monitoringRoleArn?: string;
    /**
     * The network type of the DB cluster.
     *
     * Valid values:
     *
     * - `IPV4`
     * - `DUAL`
     *
     * The network type is determined by the `DBSubnetGroup` specified for the DB cluster. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and IPv6 protocols ( `DUAL` ).
     *
     * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon Aurora User Guide.*
     *
     * Valid for: Aurora DB clusters only
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-networktype
     */
    readonly networkType?: string;
    /**
     * Specifies whether to turn on Performance Insights for the DB cluster.
     *
     * For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide* .
     *
     * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-performanceinsightsenabled
     */
    readonly performanceInsightsEnabled?: boolean | cdk.IResolvable;
    /**
     * The AWS KMS key identifier for encryption of Performance Insights data.
     *
     * The AWS KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
     *
     * If you don't specify a value for `PerformanceInsightsKMSKeyId` , then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS account . Your AWS account has a different default KMS key for each AWS Region .
     *
     * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-performanceinsightskmskeyid
     */
    readonly performanceInsightsKmsKeyId?: string;
    /**
     * The number of days to retain Performance Insights data.
     *
     * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
     *
     * Valid Values:
     *
     * - `7`
     * - *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
     * - `731`
     *
     * Default: `7` days
     *
     * If you specify a retention period that isn't valid, such as `94` , Amazon RDS issues an error.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-performanceinsightsretentionperiod
     */
    readonly performanceInsightsRetentionPeriod?: number;
    /**
     * The port number on which the DB instances in the DB cluster accept connections.
     *
     * Default:
     *
     * - When `EngineMode` is `provisioned` , `3306` (for both Aurora MySQL and Aurora PostgreSQL)
     * - When `EngineMode` is `serverless` :
     *
     * - `3306` when `Engine` is `aurora` or `aurora-mysql`
     * - `5432` when `Engine` is `aurora-postgresql`
     *
     * > The `No interruption` on update behavior only applies to DB clusters. If you are updating a DB instance, see [Port](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-port) for the AWS::RDS::DBInstance resource.
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-port
     */
    readonly port?: number;
    /**
     * The daily time range during which automated backups are created.
     *
     * For more information, see [Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.Backups.BackupWindow) in the *Amazon Aurora User Guide.*
     *
     * Constraints:
     *
     * - Must be in the format `hh24:mi-hh24:mi` .
     * - Must be in Universal Coordinated Time (UTC).
     * - Must not conflict with the preferred maintenance window.
     * - Must be at least 30 minutes.
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-preferredbackupwindow
     */
    readonly preferredBackupWindow?: string;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     *
     * Format: `ddd:hh24:mi-ddd:hh24:mi`
     *
     * The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Maintaining an Amazon Aurora DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora) in the *Amazon Aurora User Guide.*
     *
     * Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.
     *
     * Constraints: Minimum 30-minute window.
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-preferredmaintenancewindow
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * Specifies whether the DB cluster is publicly accessible.
     *
     * When the DB cluster is publicly accessible and you connect from outside of the DB cluster's virtual private cloud (VPC), its Domain Name System (DNS) endpoint resolves to the public IP address. When you connect from within the same VPC as the DB cluster, the endpoint resolves to the private IP address. Access to the DB cluster is ultimately controlled by the security group it uses. That public access isn't permitted if the security group assigned to the DB cluster doesn't permit it.
     *
     * When the DB cluster isn't publicly accessible, it is an internal DB cluster with a DNS name that resolves to a private IP address.
     *
     * Valid for Cluster Type: Multi-AZ DB clusters only
     *
     * Default: The default behavior varies depending on whether `DBSubnetGroupName` is specified.
     *
     * If `DBSubnetGroupName` isn't specified, and `PubliclyAccessible` isn't specified, the following applies:
     *
     * - If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB cluster is private.
     * - If the default VPC in the target Region has an internet gateway attached to it, the DB cluster is public.
     *
     * If `DBSubnetGroupName` is specified, and `PubliclyAccessible` isn't specified, the following applies:
     *
     * - If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB cluster is private.
     * - If the subnets are part of a VPC that has an internet gateway attached to it, the DB cluster is public.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-publiclyaccessible
     */
    readonly publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a read replica.
     *
     * Valid for: Aurora DB clusters only
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-replicationsourceidentifier
     */
    readonly replicationSourceIdentifier?: string;
    /**
     * The date and time to restore the DB cluster to.
     *
     * Valid Values: Value must be a time in Universal Coordinated Time (UTC) format
     *
     * Constraints:
     *
     * - Must be before the latest restorable time for the DB instance
     * - Must be specified if `UseLatestRestorableTime` parameter isn't provided
     * - Can't be specified if the `UseLatestRestorableTime` parameter is enabled
     * - Can't be specified if the `RestoreType` parameter is `copy-on-write`
     *
     * This property must be used with `SourceDBClusterIdentifier` property. The resulting cluster will have the identifier that matches the value of the `DBclusterIdentifier` property.
     *
     * Example: `2015-03-07T23:45:00Z`
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-restoretotime
     */
    readonly restoreToTime?: string;
    /**
     * The type of restore to be performed. You can specify one of the following values:.
     *
     * - `full-copy` - The new DB cluster is restored as a full copy of the source DB cluster.
     * - `copy-on-write` - The new DB cluster is restored as a clone of the source DB cluster.
     *
     * If you don't specify a `RestoreType` value, then the new DB cluster is restored as a full copy of the source DB cluster.
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-restoretype
     */
    readonly restoreType?: string;
    /**
     * The scaling configuration of an Aurora Serverless v1 DB cluster.
     *
     * This property is only supported for Aurora Serverless v1. For Aurora Serverless v2, Use the `ServerlessV2ScalingConfiguration` property.
     *
     * Valid for: Aurora Serverless v1 DB clusters only
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-scalingconfiguration
     */
    readonly scalingConfiguration?: cdk.IResolvable | CfnDBCluster.ScalingConfigurationProperty;
    /**
     * The scaling configuration of an Aurora Serverless V2 DB cluster.
     *
     * This property is only supported for Aurora Serverless v2. For Aurora Serverless v1, Use the `ScalingConfiguration` property.
     *
     * Valid for: Aurora Serverless v2 DB clusters only
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-serverlessv2scalingconfiguration
     */
    readonly serverlessV2ScalingConfiguration?: cdk.IResolvable | CfnDBCluster.ServerlessV2ScalingConfigurationProperty;
    /**
     * The identifier for the DB snapshot or DB cluster snapshot to restore from.
     *
     * You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.
     *
     * After you restore a DB cluster with a `SnapshotIdentifier` property, you must specify the same `SnapshotIdentifier` property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the `SnapshotIdentifier` property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB cluster is restored from the specified `SnapshotIdentifier` property, and the original DB cluster is deleted.
     *
     * If you specify the `SnapshotIdentifier` property to restore a DB cluster (as opposed to specifying it for DB cluster updates), then don't specify the following properties:
     *
     * - `GlobalClusterIdentifier`
     * - `MasterUsername`
     * - `MasterUserPassword`
     * - `ReplicationSourceIdentifier`
     * - `RestoreType`
     * - `SourceDBClusterIdentifier`
     * - `SourceRegion`
     * - `StorageEncrypted` (for an encrypted snapshot)
     * - `UseLatestRestorableTime`
     *
     * Constraints:
     *
     * - Must match the identifier of an existing Snapshot.
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-snapshotidentifier
     */
    readonly snapshotIdentifier?: string;
    /**
     * When restoring a DB cluster to a point in time, the identifier of the source DB cluster from which to restore.
     *
     * Constraints:
     *
     * - Must match the identifier of an existing DBCluster.
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-sourcedbclusteridentifier
     */
    readonly sourceDbClusterIdentifier?: string;
    /**
     * The AWS Region which contains the source DB cluster when replicating a DB cluster. For example, `us-east-1` .
     *
     * Valid for: Aurora DB clusters only
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-sourceregion
     */
    readonly sourceRegion?: string;
    /**
     * Indicates whether the DB cluster is encrypted.
     *
     * If you specify the `KmsKeyId` property, then you must enable encryption.
     *
     * If you specify the `SourceDBClusterIdentifier` property, don't specify this property. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the specified `KmsKeyId` property is used.
     *
     * If you specify the `SnapshotIdentifier` and the specified snapshot is encrypted, don't specify this property. The value is inherited from the snapshot, and the specified `KmsKeyId` property is used.
     *
     * If you specify the `SnapshotIdentifier` and the specified snapshot isn't encrypted, you can use this property to specify that the restored DB cluster is encrypted. Specify the `KmsKeyId` property for the KMS key to use for encryption. If you don't want the restored DB cluster to be encrypted, then don't set this property or set it to `false` .
     *
     * > If you specify both the `StorageEncrypted` and `SnapshotIdentifier` properties without specifying the `KmsKeyId` property, then the restored DB cluster inherits the encryption settings from the DB snapshot that provide.
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-storageencrypted
     */
    readonly storageEncrypted?: boolean | cdk.IResolvable;
    /**
     * The storage type to associate with the DB cluster.
     *
     * For information on storage types for Aurora DB clusters, see [Storage configurations for Amazon Aurora DB clusters](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Overview.StorageReliability.html#aurora-storage-type) . For information on storage types for Multi-AZ DB clusters, see [Settings for creating Multi-AZ DB clusters](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/create-multi-az-db-cluster.html#create-multi-az-db-cluster-settings) .
     *
     * This setting is required to create a Multi-AZ DB cluster.
     *
     * When specified for a Multi-AZ DB cluster, a value for the `Iops` parameter is required.
     *
     * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
     *
     * Valid Values:
     *
     * - Aurora DB clusters - `aurora | aurora-iopt1`
     * - Multi-AZ DB clusters - `io1 | io2 | gp3`
     *
     * Default:
     *
     * - Aurora DB clusters - `aurora`
     * - Multi-AZ DB clusters - `io1`
     *
     * > When you create an Aurora DB cluster with the storage type set to `aurora-iopt1` , the storage type is returned in the response. The storage type isn't returned when you set it to `aurora` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-storagetype
     */
    readonly storageType?: string;
    /**
     * Tags to assign to the DB cluster.
     *
     * Valid for Cluster Type: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A value that indicates whether to restore the DB cluster to the latest restorable backup time.
     *
     * By default, the DB cluster is not restored to the latest restorable backup time.
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-uselatestrestorabletime
     */
    readonly useLatestRestorableTime?: boolean | cdk.IResolvable;
    /**
     * A list of EC2 VPC security groups to associate with this DB cluster.
     *
     * If you plan to update the resource, don't specify VPC security groups in a shared VPC.
     *
     * Valid for: Aurora DB clusters and Multi-AZ DB clusters
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html#cfn-rds-dbcluster-vpcsecuritygroupids
     */
    readonly vpcSecurityGroupIds?: Array<string>;
}
/**
 * The `AWS::RDS::DBClusterParameterGroup` resource creates a new Amazon RDS DB cluster parameter group.
 *
 * For information about configuring parameters for Amazon Aurora DB clusters, see [Working with parameter groups](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html) in the *Amazon Aurora User Guide* .
 *
 * > If you apply a parameter group to a DB cluster, then its DB instances might need to reboot. This can result in an outage while the DB instances are rebooting.
 * >
 * > If you apply a change to parameter group associated with a stopped DB cluster, then the updated stack waits until the DB cluster is started.
 *
 * @cloudformationResource AWS::RDS::DBClusterParameterGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html
 */
export declare class CfnDBClusterParameterGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDBClusterParameterGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDBClusterParameterGroup;
    /**
     * The name of the DB cluster parameter group.
     */
    dbClusterParameterGroupName?: string;
    /**
     * The description for the DB cluster parameter group.
     */
    description: string;
    /**
     * The DB cluster parameter group family name.
     */
    family: string;
    /**
     * Provides a list of parameters for the DB cluster parameter group.
     */
    parameters: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags to assign to the DB cluster parameter group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDBClusterParameterGroupProps);
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
 * Properties for defining a `CfnDBClusterParameterGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html
 */
export interface CfnDBClusterParameterGroupProps {
    /**
     * The name of the DB cluster parameter group.
     *
     * Constraints:
     *
     * - Must not match the name of an existing DB cluster parameter group.
     *
     * > This value is stored as a lowercase string.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html#cfn-rds-dbclusterparametergroup-dbclusterparametergroupname
     */
    readonly dbClusterParameterGroupName?: string;
    /**
     * The description for the DB cluster parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html#cfn-rds-dbclusterparametergroup-description
     */
    readonly description: string;
    /**
     * The DB cluster parameter group family name.
     *
     * A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.
     *
     * *Aurora MySQL*
     *
     * Example: `aurora-mysql5.7` , `aurora-mysql8.0`
     *
     * *Aurora PostgreSQL*
     *
     * Example: `aurora-postgresql14`
     *
     * *RDS for MySQL*
     *
     * Example: `mysql8.0`
     *
     * *RDS for PostgreSQL*
     *
     * Example: `postgres13`
     *
     * To list all of the available parameter group families for a DB engine, use the following command:
     *
     * `aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine <engine>`
     *
     * For example, to list all of the available parameter group families for the Aurora PostgreSQL DB engine, use the following command:
     *
     * `aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine aurora-postgresql`
     *
     * > The output contains duplicates.
     *
     * The following are the valid DB engine values:
     *
     * - `aurora-mysql`
     * - `aurora-postgresql`
     * - `mysql`
     * - `postgres`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html#cfn-rds-dbclusterparametergroup-family
     */
    readonly family: string;
    /**
     * Provides a list of parameters for the DB cluster parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html#cfn-rds-dbclusterparametergroup-parameters
     */
    readonly parameters: any | cdk.IResolvable;
    /**
     * Tags to assign to the DB cluster parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbclusterparametergroup.html#cfn-rds-dbclusterparametergroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::RDS::DBInstance` resource creates an Amazon DB instance.
 *
 * The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster.
 *
 * For more information about creating an RDS DB instance, see [Creating an Amazon RDS DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html) in the *Amazon RDS User Guide* .
 *
 * For more information about creating a DB instance in an Aurora DB cluster, see [Creating an Amazon Aurora DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html) in the *Amazon Aurora User Guide* .
 *
 * If you import an existing DB instance, and the template configuration doesn't match the actual configuration of the DB instance, AWS CloudFormation applies the changes in the template during the import operation.
 *
 * > If a DB instance is deleted or replaced during an update, AWS CloudFormation deletes all automated snapshots. However, it retains manual DB snapshots. During an update that requires replacement, you can apply a stack policy to prevent DB instances from being replaced. For more information, see [Prevent Updates to Stack Resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/protect-stack-resources.html) .
 *
 * *Updating DB instances*
 *
 * When properties labeled " *Update requires:* [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement) " are updated, AWS CloudFormation first creates a replacement DB instance, then changes references from other dependent resources to point to the replacement DB instance, and finally deletes the old DB instance.
 *
 * > We highly recommend that you take a snapshot of the database before updating the stack. If you don't, you lose the data when AWS CloudFormation replaces your DB instance. To preserve your data, perform the following procedure:
 * >
 * > - Deactivate any applications that are using the DB instance so that there's no activity on the DB instance.
 * > - Create a snapshot of the DB instance. For more information, see [Creating a DB Snapshot](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateSnapshot.html) .
 * > - If you want to restore your instance using a DB snapshot, modify the updated template with your DB instance changes and add the `DBSnapshotIdentifier` property with the ID of the DB snapshot that you want to use.
 * >
 * > After you restore a DB instance with a `DBSnapshotIdentifier` property, you can delete the `DBSnapshotIdentifier` property. When you specify this property for an update, the DB instance is not restored from the DB snapshot again, and the data in the database is not changed. However, if you don't specify the `DBSnapshotIdentifier` property, an empty DB instance is created, and the original DB instance is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB instance is restored from the specified `DBSnapshotIdentifier` property, and the original DB instance is deleted.
 * > - Update the stack.
 *
 * For more information about updating other properties of this resource, see `[ModifyDBInstance](https://docs.aws.amazon.com//AmazonRDS/latest/APIReference/API_ModifyDBInstance.html)` . For more information about updating stacks, see [AWS CloudFormation Stacks Updates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html) .
 *
 * *Deleting DB instances*
 *
 * For DB instances that are part of an Aurora DB cluster, you can set a deletion policy for your DB instance to control how AWS CloudFormation handles the DB instance when the stack is deleted. For Amazon RDS DB instances, you can choose to *retain* the DB instance, to *delete* the DB instance, or to *create a snapshot* of the DB instance. The default AWS CloudFormation behavior depends on the `DBClusterIdentifier` property:
 *
 * - For `AWS::RDS::DBInstance` resources that don't specify the `DBClusterIdentifier` property, AWS CloudFormation saves a snapshot of the DB instance.
 * - For `AWS::RDS::DBInstance` resources that do specify the `DBClusterIdentifier` property, AWS CloudFormation deletes the DB instance.
 *
 * For more information, see [DeletionPolicy Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html) .
 *
 * @cloudformationResource AWS::RDS::DBInstance
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html
 */
export declare class CfnDBInstance extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDBInstance from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDBInstance;
    /**
     * The CA identifier of the CA certificate used for the DB instance's server certificate.
     *
     * @cloudformationAttribute CertificateDetails.CAIdentifier
     */
    readonly attrCertificateDetailsCaIdentifier: string;
    /**
     * The expiration date of the DB instance’s server certificate.
     *
     * @cloudformationAttribute CertificateDetails.ValidTill
     */
    readonly attrCertificateDetailsValidTill: string;
    /**
     * The mode of Database Insights that is enabled for the instance.
     *
     * @cloudformationAttribute DatabaseInsightsMode
     */
    readonly attrDatabaseInsightsMode: string;
    /**
     * The Amazon Resource Name (ARN) for the DB instance.
     *
     * @cloudformationAttribute DBInstanceArn
     */
    readonly attrDbInstanceArn: string;
    /**
     * The AWS Region-unique, immutable identifier for the DB instance. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB instance is accessed.
     *
     * @cloudformationAttribute DbiResourceId
     */
    readonly attrDbiResourceId: string;
    /**
     * The Oracle system ID (Oracle SID) for a container database (CDB). The Oracle SID is also the name of the CDB.
     *
     * This setting is valid for RDS Custom only.
     *
     * @cloudformationAttribute DBSystemId
     */
    readonly attrDbSystemId: string;
    /**
     * The connection endpoint for the database. For example: `mystack-mydb-1apw1j4phylrk.cg034hpkmmjt.us-east-2.rds.amazonaws.com`
     *
     * For Aurora Serverless DB clusters, the connection endpoint only applies to the DB cluster.
     *
     * @cloudformationAttribute Endpoint.Address
     */
    readonly attrEndpointAddress: string;
    /**
     * The ID that Amazon Route 53 assigns when you create a hosted zone.
     *
     * @cloudformationAttribute Endpoint.HostedZoneId
     */
    readonly attrEndpointHostedZoneId: string;
    /**
     * The port number on which the database accepts connections. For example: `3306`
     *
     * @cloudformationAttribute Endpoint.Port
     */
    readonly attrEndpointPort: string;
    /**
     * The Amazon Resource Name (ARN) of the secret. This parameter is a return value that you can retrieve using the `Fn::GetAtt` intrinsic function. For more information, see [Return values](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#aws-resource-rds-dbinstance-return-values) .
     *
     * @cloudformationAttribute MasterUserSecret.SecretArn
     */
    readonly attrMasterUserSecretSecretArn: string;
    /**
     * The amount of storage in gibibytes (GiB) to be initially allocated for the database instance.
     */
    allocatedStorage?: string;
    /**
     * A value that indicates whether major version upgrades are allowed.
     */
    allowMajorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the `PreferredMaintenanceWindow` setting.
     */
    applyImmediately?: boolean | cdk.IResolvable;
    /**
     * The AWS Identity and Access Management (IAM) roles associated with the DB instance.
     */
    associatedRoles?: Array<CfnDBInstance.DBInstanceRoleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The AWS KMS key identifier for encryption of the replicated automated backups.
     */
    automaticBackupReplicationKmsKeyId?: string;
    /**
     * The AWS Region associated with the automated backup.
     */
    automaticBackupReplicationRegion?: string;
    /**
     * A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window.
     */
    autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * The Availability Zone (AZ) where the database will be created.
     */
    availabilityZone?: string;
    /**
     * The number of days for which automated backups are retained.
     */
    backupRetentionPeriod?: number;
    /**
     * The identifier of the CA certificate for this DB instance.
     */
    caCertificateIdentifier?: string;
    /**
     * The details of the DB instance's server certificate.
     */
    certificateDetails?: CfnDBInstance.CertificateDetailsProperty | cdk.IResolvable;
    /**
     * Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate.
     */
    certificateRotationRestart?: boolean | cdk.IResolvable;
    /**
     * For supported engines, indicates that the DB instance should be associated with the specified character set.
     */
    characterSetName?: string;
    /**
     * Specifies whether to copy tags from the DB instance to snapshots of the DB instance.
     */
    copyTagsToSnapshot?: boolean | cdk.IResolvable;
    /**
     * The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.
     */
    customIamInstanceProfile?: string;
    /**
     * The identifier of the DB cluster that this DB instance will belong to.
     */
    dbClusterIdentifier?: string;
    /**
     * The identifier for the Multi-AZ DB cluster snapshot to restore from.
     */
    dbClusterSnapshotIdentifier?: string;
    /**
     * The compute and memory capacity of the DB instance, for example `db.m5.large` . Not all DB instance classes are available in all AWS Regions , or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide* .
     */
    dbInstanceClass?: string;
    /**
     * A name for the DB instance.
     */
    dbInstanceIdentifier?: string;
    /**
     * The meaning of this parameter differs according to the database engine you use.
     */
    dbName?: string;
    /**
     * The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.
     */
    dbParameterGroupName?: string;
    /**
     * A list of the DB security groups to assign to the DB instance.
     */
    dbSecurityGroups?: Array<string>;
    /**
     * The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance.
     */
    dbSnapshotIdentifier?: string;
    /**
     * A DB subnet group to associate with the DB instance.
     */
    dbSubnetGroupName?: string;
    /**
     * The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files.
     */
    dbSystemId?: string;
    /**
     * Indicates whether the DB instance has a dedicated log volume (DLV) enabled.
     */
    dedicatedLogVolume?: boolean | cdk.IResolvable;
    /**
     * A value that indicates whether to remove automated backups immediately after the DB instance is deleted.
     */
    deleteAutomatedBackups?: boolean | cdk.IResolvable;
    /**
     * Specifies whether the DB instance has deletion protection enabled.
     */
    deletionProtection?: boolean | cdk.IResolvable;
    /**
     * The Active Directory directory ID to create the DB instance in.
     */
    domain?: string;
    /**
     * The ARN for the Secrets Manager secret with the credentials for the user joining the domain.
     */
    domainAuthSecretArn?: string;
    /**
     * The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.
     */
    domainDnsIps?: Array<string>;
    /**
     * The fully qualified domain name (FQDN) of an Active Directory domain.
     */
    domainFqdn?: string;
    /**
     * The name of the IAM role to use when making API calls to the Directory Service.
     */
    domainIamRoleName?: string;
    /**
     * The Active Directory organizational unit for your DB instance to join.
     */
    domainOu?: string;
    /**
     * The list of log types that need to be enabled for exporting to CloudWatch Logs.
     */
    enableCloudwatchLogsExports?: Array<string>;
    /**
     * A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts.
     */
    enableIamDatabaseAuthentication?: boolean | cdk.IResolvable;
    /**
     * Specifies whether to enable Performance Insights for the DB instance.
     */
    enablePerformanceInsights?: boolean | cdk.IResolvable;
    /**
     * The connection endpoint for the DB instance.
     */
    endpoint?: CfnDBInstance.EndpointProperty | cdk.IResolvable;
    /**
     * The name of the database engine to use for this DB instance.
     */
    engine?: string;
    /**
     * The life cycle type for this DB instance.
     */
    engineLifecycleSupport?: string;
    /**
     * The version number of the database engine to use.
     */
    engineVersion?: string;
    /**
     * The number of I/O operations per second (IOPS) that the database provisions.
     */
    iops?: number;
    /**
     * The ARN of the AWS KMS key that's used to encrypt the DB instance, such as `arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef` .
     */
    kmsKeyId?: string;
    /**
     * License model information for this DB instance.
     */
    licenseModel?: string;
    /**
     * Specifies whether to manage the master user password with AWS Secrets Manager.
     */
    manageMasterUserPassword?: boolean | cdk.IResolvable;
    /**
     * The master user name for the DB instance.
     */
    masterUsername?: string;
    /**
     * The password for the master user. The password can include any printable ASCII character except "/", """, or "@".
     */
    masterUserPassword?: string;
    /**
     * The secret managed by RDS in AWS Secrets Manager for the master user password.
     */
    masterUserSecret?: cdk.IResolvable | CfnDBInstance.MasterUserSecretProperty;
    /**
     * The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.
     */
    maxAllocatedStorage?: number;
    /**
     * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.
     */
    monitoringInterval?: number;
    /**
     * The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs.
     */
    monitoringRoleArn?: string;
    /**
     * Specifies whether the DB instance is a Multi-AZ deployment.
     */
    multiAz?: boolean | cdk.IResolvable;
    /**
     * The name of the NCHAR character set for the Oracle DB instance.
     */
    ncharCharacterSetName?: string;
    /**
     * The network type of the DB instance.
     */
    networkType?: string;
    /**
     * Indicates that the DB instance should be associated with the specified option group.
     */
    optionGroupName?: string;
    /**
     * The AWS KMS key identifier for encryption of Performance Insights data.
     */
    performanceInsightsKmsKeyId?: string;
    /**
     * The number of days to retain Performance Insights data.
     */
    performanceInsightsRetentionPeriod?: number;
    /**
     * The port number on which the database accepts connections.
     */
    port?: string;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled, using the `BackupRetentionPeriod` parameter.
     */
    preferredBackupWindow?: string;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     */
    preferredMaintenanceWindow?: string;
    /**
     * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
     */
    processorFeatures?: Array<cdk.IResolvable | CfnDBInstance.ProcessorFeatureProperty> | cdk.IResolvable;
    /**
     * The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance.
     */
    promotionTier?: number;
    /**
     * Indicates whether the DB instance is an internet-facing instance.
     */
    publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * The open mode of an Oracle read replica.
     */
    replicaMode?: string;
    /**
     * The date and time to restore from.
     */
    restoreTime?: string;
    /**
     * The identifier of the Multi-AZ DB cluster that will act as the source for the read replica.
     */
    sourceDbClusterIdentifier?: string;
    /**
     * The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, `arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE` .
     */
    sourceDbInstanceAutomatedBackupsArn?: string;
    /**
     * If you want to create a read replica DB instance, specify the ID of the source DB instance.
     */
    sourceDbInstanceIdentifier?: string;
    /**
     * The resource ID of the source DB instance from which to restore.
     */
    sourceDbiResourceId?: string;
    /**
     * The ID of the region that contains the source DB instance for the read replica.
     */
    sourceRegion?: string;
    /**
     * A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted.
     */
    storageEncrypted?: boolean | cdk.IResolvable;
    /**
     * Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance.
     */
    storageThroughput?: number;
    /**
     * The storage type to associate with the DB instance.
     */
    storageType?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags to assign to the DB instance.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @deprecated this property has been deprecated
     */
    tdeCredentialArn?: string;
    /**
     * @deprecated this property has been deprecated
     */
    tdeCredentialPassword?: string;
    /**
     * The time zone of the DB instance.
     */
    timezone?: string;
    /**
     * Specifies whether the DB instance class of the DB instance uses its default processor features.
     */
    useDefaultProcessorFeatures?: boolean | cdk.IResolvable;
    /**
     * Specifies whether the DB instance is restored from the latest backup time.
     */
    useLatestRestorableTime?: boolean | cdk.IResolvable;
    /**
     * A list of the VPC security group IDs to assign to the DB instance.
     */
    vpcSecurityGroups?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDBInstanceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDBInstance {
    /**
     * The details of the DB instance’s server certificate.
     *
     * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-certificatedetails.html
     */
    interface CertificateDetailsProperty {
        /**
         * The CA identifier of the CA certificate used for the DB instance's server certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-certificatedetails.html#cfn-rds-dbinstance-certificatedetails-caidentifier
         */
        readonly caIdentifier?: string;
        /**
         * The expiration date of the DB instance’s server certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-certificatedetails.html#cfn-rds-dbinstance-certificatedetails-validtill
         */
        readonly validTill?: string;
    }
    /**
     * This data type represents the information you need to connect to an Amazon RDS DB instance.
     *
     * This data type is used as a response element in the following actions:
     *
     * - `CreateDBInstance`
     * - `DescribeDBInstances`
     * - `DeleteDBInstance`
     *
     * For the data structure that represents Amazon Aurora DB cluster endpoints, see `DBClusterEndpoint` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-endpoint.html
     */
    interface EndpointProperty {
        /**
         * Specifies the DNS address of the DB instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-endpoint.html#cfn-rds-dbinstance-endpoint-address
         */
        readonly address?: string;
        /**
         * Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-endpoint.html#cfn-rds-dbinstance-endpoint-hostedzoneid
         */
        readonly hostedZoneId?: string;
        /**
         * Specifies the port that the database engine is listening on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-endpoint.html#cfn-rds-dbinstance-endpoint-port
         */
        readonly port?: string;
    }
    /**
     * The `MasterUserSecret` return value specifies the secret managed by RDS in AWS Secrets Manager for the master user password.
     *
     * For more information, see [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide* and [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-secrets-manager.html) in the *Amazon Aurora User Guide.*
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-masterusersecret.html
     */
    interface MasterUserSecretProperty {
        /**
         * The AWS KMS key identifier that is used to encrypt the secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-masterusersecret.html#cfn-rds-dbinstance-masterusersecret-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * The Amazon Resource Name (ARN) of the secret.
         *
         * This parameter is a return value that you can retrieve using the `Fn::GetAtt` intrinsic function. For more information, see [Return values](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#aws-resource-rds-dbinstance-return-values) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-masterusersecret.html#cfn-rds-dbinstance-masterusersecret-secretarn
         */
        readonly secretArn?: string;
    }
    /**
     * Information about an AWS Identity and Access Management (IAM) role that is associated with a DB instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-dbinstancerole.html
     */
    interface DBInstanceRoleProperty {
        /**
         * The name of the feature associated with the AWS Identity and Access Management (IAM) role.
         *
         * IAM roles that are associated with a DB instance grant permission for the DB instance to access other AWS services on your behalf. For the list of supported feature names, see the `SupportedFeatureNames` description in [DBEngineVersion](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html) in the *Amazon RDS API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-dbinstancerole.html#cfn-rds-dbinstance-dbinstancerole-featurename
         */
        readonly featureName: string;
        /**
         * The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-dbinstancerole.html#cfn-rds-dbinstance-dbinstancerole-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * The `ProcessorFeature` property type specifies the processor features of a DB instance class.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-processorfeature.html
     */
    interface ProcessorFeatureProperty {
        /**
         * The name of the processor feature.
         *
         * Valid names are `coreCount` and `threadsPerCore` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-processorfeature.html#cfn-rds-dbinstance-processorfeature-name
         */
        readonly name?: string;
        /**
         * The value of a processor feature.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbinstance-processorfeature.html#cfn-rds-dbinstance-processorfeature-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnDBInstance`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html
 */
export interface CfnDBInstanceProps {
    /**
     * The amount of storage in gibibytes (GiB) to be initially allocated for the database instance.
     *
     * > If any value is set in the `Iops` parameter, `AllocatedStorage` must be at least 100 GiB, which corresponds to the minimum Iops value of 1,000. If you increase the `Iops` value (in 1,000 IOPS increments), then you must also increase the `AllocatedStorage` value (in 100-GiB increments).
     *
     * *Amazon Aurora*
     *
     * Not applicable. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume.
     *
     * *Db2*
     *
     * Constraints to the amount of storage for each storage type are the following:
     *
     * - General Purpose (SSD) storage (gp3): Must be an integer from 20 to 64000.
     * - Provisioned IOPS storage (io1): Must be an integer from 100 to 64000.
     *
     * *MySQL*
     *
     * Constraints to the amount of storage for each storage type are the following:
     *
     * - General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
     * - Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
     * - Magnetic storage (standard): Must be an integer from 5 to 3072.
     *
     * *MariaDB*
     *
     * Constraints to the amount of storage for each storage type are the following:
     *
     * - General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
     * - Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
     * - Magnetic storage (standard): Must be an integer from 5 to 3072.
     *
     * *PostgreSQL*
     *
     * Constraints to the amount of storage for each storage type are the following:
     *
     * - General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
     * - Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
     * - Magnetic storage (standard): Must be an integer from 5 to 3072.
     *
     * *Oracle*
     *
     * Constraints to the amount of storage for each storage type are the following:
     *
     * - General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
     * - Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
     * - Magnetic storage (standard): Must be an integer from 10 to 3072.
     *
     * *SQL Server*
     *
     * Constraints to the amount of storage for each storage type are the following:
     *
     * - General Purpose (SSD) storage (gp2):
     *
     * - Enterprise and Standard editions: Must be an integer from 20 to 16384.
     * - Web and Express editions: Must be an integer from 20 to 16384.
     * - Provisioned IOPS storage (io1):
     *
     * - Enterprise and Standard editions: Must be an integer from 20 to 16384.
     * - Web and Express editions: Must be an integer from 20 to 16384.
     * - Magnetic storage (standard):
     *
     * - Enterprise and Standard editions: Must be an integer from 20 to 1024.
     * - Web and Express editions: Must be an integer from 20 to 1024.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-allocatedstorage
     */
    readonly allocatedStorage?: string;
    /**
     * A value that indicates whether major version upgrades are allowed.
     *
     * Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
     *
     * Constraints: Major version upgrades must be allowed when specifying a value for the `EngineVersion` parameter that is a different major version than the DB instance's current version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-allowmajorversionupgrade
     */
    readonly allowMajorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * Specifies whether changes to the DB instance and any pending modifications are applied immediately, regardless of the `PreferredMaintenanceWindow` setting.
     *
     * If set to `false` , changes are applied during the next maintenance window. Until RDS applies the changes, the DB instance remains in a drift state. As a result, the configuration doesn't fully reflect the requested modifications and temporarily diverges from the intended state.
     *
     * In addition to the settings described in [Modifying a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html) , this property also determines whether the DB instance reboots when a static parameter is modified in the associated DB parameter group.
     *
     * Default: `true`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-applyimmediately
     */
    readonly applyImmediately?: boolean | cdk.IResolvable;
    /**
     * The AWS Identity and Access Management (IAM) roles associated with the DB instance.
     *
     * *Amazon Aurora*
     *
     * Not applicable. The associated roles are managed by the DB cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-associatedroles
     */
    readonly associatedRoles?: Array<CfnDBInstance.DBInstanceRoleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The AWS KMS key identifier for encryption of the replicated automated backups.
     *
     * The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination AWS Region , for example, `arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-automaticbackupreplicationkmskeyid
     */
    readonly automaticBackupReplicationKmsKeyId?: string;
    /**
     * The AWS Region associated with the automated backup.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-automaticbackupreplicationregion
     */
    readonly automaticBackupReplicationRegion?: string;
    /**
     * A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window.
     *
     * By default, minor engine upgrades are applied automatically.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-autominorversionupgrade
     */
    readonly autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * The Availability Zone (AZ) where the database will be created.
     *
     * For information on AWS Regions and Availability Zones, see [Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html) .
     *
     * For Amazon Aurora, each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one.
     *
     * Default: A random, system-chosen Availability Zone in the endpoint's AWS Region .
     *
     * Constraints:
     *
     * - The `AvailabilityZone` parameter can't be specified if the DB instance is a Multi-AZ deployment.
     * - The specified Availability Zone must be in the same AWS Region as the current endpoint.
     *
     * Example: `us-east-1d`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-availabilityzone
     */
    readonly availabilityZone?: string;
    /**
     * The number of days for which automated backups are retained.
     *
     * Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.
     *
     * *Amazon Aurora*
     *
     * Not applicable. The retention period for automated backups is managed by the DB cluster.
     *
     * Default: 1
     *
     * Constraints:
     *
     * - Must be a value from 0 to 35
     * - Can't be set to 0 if the DB instance is a source to read replicas
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-backupretentionperiod
     */
    readonly backupRetentionPeriod?: number;
    /**
     * The identifier of the CA certificate for this DB instance.
     *
     * For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-cacertificateidentifier
     */
    readonly caCertificateIdentifier?: string;
    /**
     * The details of the DB instance's server certificate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-certificatedetails
     */
    readonly certificateDetails?: CfnDBInstance.CertificateDetailsProperty | cdk.IResolvable;
    /**
     * Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate.
     *
     * By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.
     *
     * > Set this parameter only if you are *not* using SSL/TLS to connect to the DB instance.
     *
     * If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:
     *
     * - For more information about rotating your SSL/TLS certificate for RDS DB engines, see [Rotating Your SSL/TLS Certificate.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon RDS User Guide.*
     * - For more information about rotating your SSL/TLS certificate for Aurora DB engines, see [Rotating Your SSL/TLS Certificate](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon Aurora User Guide* .
     *
     * This setting doesn't apply to RDS Custom DB instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-certificaterotationrestart
     */
    readonly certificateRotationRestart?: boolean | cdk.IResolvable;
    /**
     * For supported engines, indicates that the DB instance should be associated with the specified character set.
     *
     * *Amazon Aurora*
     *
     * Not applicable. The character set is managed by the DB cluster. For more information, see [AWS::RDS::DBCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-charactersetname
     */
    readonly characterSetName?: string;
    /**
     * Specifies whether to copy tags from the DB instance to snapshots of the DB instance.
     *
     * By default, tags are not copied.
     *
     * This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-copytagstosnapshot
     */
    readonly copyTagsToSnapshot?: boolean | cdk.IResolvable;
    /**
     * The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.
     *
     * This setting is required for RDS Custom.
     *
     * Constraints:
     *
     * - The profile must exist in your account.
     * - The profile must have an IAM role that Amazon EC2 has permissions to assume.
     * - The instance profile name and the associated IAM role name must start with the prefix `AWSRDSCustom` .
     *
     * For the list of permissions required for the IAM role, see [Configure IAM and your VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc) in the *Amazon RDS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-customiaminstanceprofile
     */
    readonly customIamInstanceProfile?: string;
    /**
     * The identifier of the DB cluster that this DB instance will belong to.
     *
     * This setting doesn't apply to RDS Custom DB instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-dbclusteridentifier
     */
    readonly dbClusterIdentifier?: string;
    /**
     * The identifier for the Multi-AZ DB cluster snapshot to restore from.
     *
     * For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide* .
     *
     * Constraints:
     *
     * - Must match the identifier of an existing Multi-AZ DB cluster snapshot.
     * - Can't be specified when `DBSnapshotIdentifier` is specified.
     * - Must be specified when `DBSnapshotIdentifier` isn't specified.
     * - If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the `DBClusterSnapshotIdentifier` must be the ARN of the shared snapshot.
     * - Can't be the identifier of an Aurora DB cluster snapshot.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-dbclustersnapshotidentifier
     */
    readonly dbClusterSnapshotIdentifier?: string;
    /**
     * The compute and memory capacity of the DB instance, for example `db.m5.large` . Not all DB instance classes are available in all AWS Regions , or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-dbinstanceclass
     */
    readonly dbInstanceClass?: string;
    /**
     * A name for the DB instance.
     *
     * If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon RDS User Guide* .
     *
     * > If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-dbinstanceidentifier
     */
    readonly dbInstanceIdentifier?: string;
    /**
     * The meaning of this parameter differs according to the database engine you use.
     *
     * > If you specify the `[DBSnapshotIdentifier](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsnapshotidentifier)` property, this property only applies to RDS for Oracle.
     *
     * *Amazon Aurora*
     *
     * Not applicable. The database name is managed by the DB cluster.
     *
     * *Db2*
     *
     * The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.
     *
     * Constraints:
     *
     * - Must contain 1 to 64 letters or numbers.
     * - Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
     * - Can't be a word reserved by the specified database engine.
     *
     * *MySQL*
     *
     * The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.
     *
     * Constraints:
     *
     * - Must contain 1 to 64 letters or numbers.
     * - Can't be a word reserved by the specified database engine
     *
     * *MariaDB*
     *
     * The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.
     *
     * Constraints:
     *
     * - Must contain 1 to 64 letters or numbers.
     * - Can't be a word reserved by the specified database engine
     *
     * *PostgreSQL*
     *
     * The name of the database to create when the DB instance is created. If this parameter is not specified, the default `postgres` database is created in the DB instance.
     *
     * Constraints:
     *
     * - Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
     * - Must contain 1 to 63 characters.
     * - Can't be a word reserved by the specified database engine
     *
     * *Oracle*
     *
     * The Oracle System ID (SID) of the created DB instance. If you specify `null` , the default value `ORCL` is used. You can't specify the string NULL, or any other reserved word, for `DBName` .
     *
     * Default: `ORCL`
     *
     * Constraints:
     *
     * - Can't be longer than 8 characters
     *
     * *SQL Server*
     *
     * Not applicable. Must be null.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-dbname
     */
    readonly dbName?: string;
    /**
     * The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.
     *
     * To list all of the available DB parameter group names, use the following command:
     *
     * `aws rds describe-db-parameter-groups --query "DBParameterGroups[].DBParameterGroupName" --output text`
     *
     * > If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.
     *
     * If you don't specify a value for `DBParameterGroupName` property, the default DB parameter group for the specified engine and engine version is used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-dbparametergroupname
     */
    readonly dbParameterGroupName?: string;
    /**
     * A list of the DB security groups to assign to the DB instance.
     *
     * The list can include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup resources created in the template.
     *
     * If you set DBSecurityGroups, you must not set VPCSecurityGroups, and vice versa. Also, note that the DBSecurityGroups property exists only for backwards compatibility with older regions and is no longer recommended for providing security information to an RDS DB instance. Instead, use VPCSecurityGroups.
     *
     * > If you specify this property, AWS CloudFormation sends only the following properties (if specified) to Amazon RDS during create operations:
     * >
     * > - `AllocatedStorage`
     * > - `AutoMinorVersionUpgrade`
     * > - `AvailabilityZone`
     * > - `BackupRetentionPeriod`
     * > - `CharacterSetName`
     * > - `DBInstanceClass`
     * > - `DBName`
     * > - `DBParameterGroupName`
     * > - `DBSecurityGroups`
     * > - `DBSubnetGroupName`
     * > - `Engine`
     * > - `EngineVersion`
     * > - `Iops`
     * > - `LicenseModel`
     * > - `MasterUsername`
     * > - `MasterUserPassword`
     * > - `MultiAZ`
     * > - `OptionGroupName`
     * > - `PreferredBackupWindow`
     * > - `PreferredMaintenanceWindow`
     * >
     * > All other properties are ignored. Specify a virtual private cloud (VPC) security group if you want to submit other properties, such as `StorageType` , `StorageEncrypted` , or `KmsKeyId` . If you're already using the `DBSecurityGroups` property, you can't use these other properties by updating your DB instance to use a VPC security group. You must recreate the DB instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-dbsecuritygroups
     */
    readonly dbSecurityGroups?: Array<string>;
    /**
     * The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance.
     *
     * If you're restoring from a shared manual DB snapshot, you must specify the ARN of the snapshot.
     *
     * By specifying this property, you can create a DB instance from the specified DB snapshot. If the `DBSnapshotIdentifier` property is an empty string or the `AWS::RDS::DBInstance` declaration has no `DBSnapshotIdentifier` property, AWS CloudFormation creates a new database. If the property contains a value (other than an empty string), AWS CloudFormation creates a database from the specified snapshot. If a snapshot with the specified name doesn't exist, AWS CloudFormation can't create the database and it rolls back the stack.
     *
     * Some DB instance properties aren't valid when you restore from a snapshot, such as the `MasterUsername` and `MasterUserPassword` properties, and the point-in-time recovery properties `RestoreTime` and `UseLatestRestorableTime` . For information about the properties that you can specify, see the [`RestoreDBInstanceFromDBSnapshot`](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_RestoreDBInstanceFromDBSnapshot.html) action in the *Amazon RDS API Reference* .
     *
     * After you restore a DB instance with a `DBSnapshotIdentifier` property, you must specify the same `DBSnapshotIdentifier` property for any future updates to the DB instance. When you specify this property for an update, the DB instance is not restored from the DB snapshot again, and the data in the database is not changed. However, if you don't specify the `DBSnapshotIdentifier` property, an empty DB instance is created, and the original DB instance is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB instance is restored from the specified `DBSnapshotIdentifier` property, and the original DB instance is deleted.
     *
     * If you specify the `DBSnapshotIdentifier` property to restore a DB instance (as opposed to specifying it for DB instance updates), then don't specify the following properties:
     *
     * - `CharacterSetName`
     * - `DBClusterIdentifier`
     * - `DBName`
     * - `KmsKeyId`
     * - `MasterUsername`
     * - `MasterUserPassword`
     * - `PromotionTier`
     * - `SourceDBInstanceIdentifier`
     * - `SourceRegion`
     * - `StorageEncrypted` (for an unencrypted snapshot)
     * - `Timezone`
     *
     * *Amazon Aurora*
     *
     * Not applicable. Snapshot restore is managed by the DB cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-dbsnapshotidentifier
     */
    readonly dbSnapshotIdentifier?: string;
    /**
     * A DB subnet group to associate with the DB instance.
     *
     * If you update this value, the new subnet group must be a subnet group in a new VPC.
     *
     * If there's no DB subnet group, then the DB instance isn't a VPC DB instance.
     *
     * For more information about using Amazon RDS in a VPC, see [Amazon VPC and Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide* .
     *
     * This setting doesn't apply to Amazon Aurora DB instances. The DB subnet group is managed by the DB cluster. If specified, the setting must match the DB cluster setting.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-dbsubnetgroupname
     */
    readonly dbSubnetGroupName?: string;
    /**
     * The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files.
     *
     * In this context, the term "Oracle database instance" refers exclusively to the system global area (SGA) and Oracle background processes. If you don't specify a SID, the value defaults to `RDSCDB` . The Oracle SID is also the name of your CDB.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-dbsystemid
     */
    readonly dbSystemId?: string;
    /**
     * Indicates whether the DB instance has a dedicated log volume (DLV) enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-dedicatedlogvolume
     */
    readonly dedicatedLogVolume?: boolean | cdk.IResolvable;
    /**
     * A value that indicates whether to remove automated backups immediately after the DB instance is deleted.
     *
     * This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.
     *
     * *Amazon Aurora*
     *
     * Not applicable. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the DB cluster are not deleted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-deleteautomatedbackups
     */
    readonly deleteAutomatedBackups?: boolean | cdk.IResolvable;
    /**
     * Specifies whether the DB instance has deletion protection enabled.
     *
     * The database can't be deleted when deletion protection is enabled. By default, deletion protection isn't enabled. For more information, see [Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html) .
     *
     * This setting doesn't apply to Amazon Aurora DB instances. You can enable or disable deletion protection for the DB cluster. For more information, see `CreateDBCluster` . DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-deletionprotection
     */
    readonly deletionProtection?: boolean | cdk.IResolvable;
    /**
     * The Active Directory directory ID to create the DB instance in.
     *
     * Currently, only Db2, MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.
     *
     * For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the *Amazon RDS User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-domain
     */
    readonly domain?: string;
    /**
     * The ARN for the Secrets Manager secret with the credentials for the user joining the domain.
     *
     * Example: `arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-domainauthsecretarn
     */
    readonly domainAuthSecretArn?: string;
    /**
     * The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.
     *
     * Constraints:
     *
     * - Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.
     *
     * Example: `123.124.125.126,234.235.236.237`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-domaindnsips
     */
    readonly domainDnsIps?: Array<string>;
    /**
     * The fully qualified domain name (FQDN) of an Active Directory domain.
     *
     * Constraints:
     *
     * - Can't be longer than 64 characters.
     *
     * Example: `mymanagedADtest.mymanagedAD.mydomain`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-domainfqdn
     */
    readonly domainFqdn?: string;
    /**
     * The name of the IAM role to use when making API calls to the Directory Service.
     *
     * This setting doesn't apply to the following DB instances:
     *
     * - Amazon Aurora (The domain is managed by the DB cluster.)
     * - RDS Custom
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-domainiamrolename
     */
    readonly domainIamRoleName?: string;
    /**
     * The Active Directory organizational unit for your DB instance to join.
     *
     * Constraints:
     *
     * - Must be in the distinguished name format.
     * - Can't be longer than 64 characters.
     *
     * Example: `OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-domainou
     */
    readonly domainOu?: string;
    /**
     * The list of log types that need to be enabled for exporting to CloudWatch Logs.
     *
     * The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Relational Database Service User Guide* .
     *
     * *Amazon Aurora*
     *
     * Not applicable. CloudWatch Logs exports are managed by the DB cluster.
     *
     * *Db2*
     *
     * Valid values: `diag.log` , `notify.log`
     *
     * *MariaDB*
     *
     * Valid values: `audit` , `error` , `general` , `slowquery`
     *
     * *Microsoft SQL Server*
     *
     * Valid values: `agent` , `error`
     *
     * *MySQL*
     *
     * Valid values: `audit` , `error` , `general` , `slowquery`
     *
     * *Oracle*
     *
     * Valid values: `alert` , `audit` , `listener` , `trace` , `oemagent`
     *
     * *PostgreSQL*
     *
     * Valid values: `postgresql` , `upgrade`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-enablecloudwatchlogsexports
     */
    readonly enableCloudwatchLogsExports?: Array<string>;
    /**
     * A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts.
     *
     * By default, mapping is disabled.
     *
     * This property is supported for RDS for MariaDB, RDS for MySQL, and RDS for PostgreSQL. For more information, see [IAM Database Authentication for MariaDB, MySQL, and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide.*
     *
     * *Amazon Aurora*
     *
     * Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-enableiamdatabaseauthentication
     */
    readonly enableIamDatabaseAuthentication?: boolean | cdk.IResolvable;
    /**
     * Specifies whether to enable Performance Insights for the DB instance.
     *
     * For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide* .
     *
     * This setting doesn't apply to RDS Custom DB instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-enableperformanceinsights
     */
    readonly enablePerformanceInsights?: boolean | cdk.IResolvable;
    /**
     * The connection endpoint for the DB instance.
     *
     * > The endpoint might not be shown for instances with the status of `creating` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-endpoint
     */
    readonly endpoint?: CfnDBInstance.EndpointProperty | cdk.IResolvable;
    /**
     * The name of the database engine to use for this DB instance.
     *
     * Not every database engine is available in every AWS Region.
     *
     * This property is required when creating a DB instance.
     *
     * > You can convert an Oracle database from the non-CDB architecture to the container database (CDB) architecture by updating the `Engine` value in your templates from `oracle-ee` to `oracle-ee-cdb` or from `oracle-se2` to `oracle-se2-cdb` . Converting to the CDB architecture requires an interruption.
     *
     * Valid Values:
     *
     * - `aurora-mysql` (for Aurora MySQL DB instances)
     * - `aurora-postgresql` (for Aurora PostgreSQL DB instances)
     * - `custom-oracle-ee` (for RDS Custom for Oracle DB instances)
     * - `custom-oracle-ee-cdb` (for RDS Custom for Oracle DB instances)
     * - `custom-sqlserver-ee` (for RDS Custom for SQL Server DB instances)
     * - `custom-sqlserver-se` (for RDS Custom for SQL Server DB instances)
     * - `custom-sqlserver-web` (for RDS Custom for SQL Server DB instances)
     * - `db2-ae`
     * - `db2-se`
     * - `mariadb`
     * - `mysql`
     * - `oracle-ee`
     * - `oracle-ee-cdb`
     * - `oracle-se2`
     * - `oracle-se2-cdb`
     * - `postgres`
     * - `sqlserver-ee`
     * - `sqlserver-se`
     * - `sqlserver-ex`
     * - `sqlserver-web`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-engine
     */
    readonly engine?: string;
    /**
     * The life cycle type for this DB instance.
     *
     * > By default, this value is set to `open-source-rds-extended-support` , which enrolls your DB instance into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled` . In this case, creating the DB instance will fail if the DB major version is past its end of standard support date.
     *
     * This setting applies only to RDS for MySQL and RDS for PostgreSQL. For Amazon Aurora DB instances, the life cycle type is managed by the DB cluster.
     *
     * You can use this setting to enroll your DB instance into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your DB instance past the end of standard support for that engine version. For more information, see [Using Amazon RDS Extended Support](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/extended-support.html) in the *Amazon RDS User Guide* .
     *
     * Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
     *
     * Default: `open-source-rds-extended-support`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-enginelifecyclesupport
     */
    readonly engineLifecycleSupport?: string;
    /**
     * The version number of the database engine to use.
     *
     * For a list of valid engine versions, use the `DescribeDBEngineVersions` action.
     *
     * The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every AWS Region.
     *
     * *Amazon Aurora*
     *
     * Not applicable. The version number of the database engine to be used by the DB instance is managed by the DB cluster.
     *
     * *Db2*
     *
     * See [Amazon RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Db2.html#Db2.Concepts.VersionMgmt) in the *Amazon RDS User Guide.*
     *
     * *MariaDB*
     *
     * See [MariaDB on Amazon RDS Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html#MariaDB.Concepts.VersionMgmt) in the *Amazon RDS User Guide.*
     *
     * *Microsoft SQL Server*
     *
     * See [Microsoft SQL Server Versions on Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.VersionSupport) in the *Amazon RDS User Guide.*
     *
     * *MySQL*
     *
     * See [MySQL on Amazon RDS Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the *Amazon RDS User Guide.*
     *
     * *Oracle*
     *
     * See [Oracle Database Engine Release Notes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html) in the *Amazon RDS User Guide.*
     *
     * *PostgreSQL*
     *
     * See [Supported PostgreSQL Database Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts.General.DBVersions) in the *Amazon RDS User Guide.*
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-engineversion
     */
    readonly engineVersion?: string;
    /**
     * The number of I/O operations per second (IOPS) that the database provisions.
     *
     * The value must be equal to or greater than 1000.
     *
     * If you specify this property, you must follow the range of allowed ratios of your requested IOPS rate to the amount of storage that you allocate (IOPS to allocated storage). For example, you can provision an Oracle database instance with 1000 IOPS and 200 GiB of storage (a ratio of 5:1), or specify 2000 IOPS with 200 GiB of storage (a ratio of 10:1). For more information, see [Amazon RDS Provisioned IOPS Storage to Improve Performance](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide* .
     *
     * > If you specify `io1` for the `StorageType` property, then you must also specify the `Iops` property.
     *
     * Constraints:
     *
     * - For RDS for Db2, MariaDB, MySQL, Oracle, and PostgreSQL - Must be a multiple between .5 and 50 of the storage amount for the DB instance.
     * - For RDS for SQL Server - Must be a multiple between 1 and 50 of the storage amount for the DB instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-iops
     */
    readonly iops?: number;
    /**
     * The ARN of the AWS KMS key that's used to encrypt the DB instance, such as `arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef` .
     *
     * If you enable the StorageEncrypted property but don't specify this property, AWS CloudFormation uses the default KMS key. If you specify this property, you must set the StorageEncrypted property to true.
     *
     * If you specify the `SourceDBInstanceIdentifier` or `SourceDbiResourceId` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified `KmsKeyId` property is used. However, if the source DB instance is in a different AWS Region, you must specify a KMS key ID.
     *
     * If you specify the `SourceDBInstanceAutomatedBackupsArn` property, don't specify this property. The value is inherited from the source DB instance automated backup, and if the automated backup is encrypted, the specified `KmsKeyId` property is used.
     *
     * If you create an encrypted read replica in a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the region that they're created in, and you can't use encryption keys from one region in another region.
     *
     * If you specify the `DBSnapshotIdentifier` property, don't specify this property. The `StorageEncrypted` property value is inherited from the snapshot. If the DB instance is encrypted, the specified `KmsKeyId` property is also inherited from the snapshot.
     *
     * If you specify `DBSecurityGroups` , AWS CloudFormation ignores this property. To specify both a security group and this property, you must use a VPC security group. For more information about Amazon RDS and VPC, see [Using Amazon RDS with Amazon VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide* .
     *
     * *Amazon Aurora*
     *
     * Not applicable. The KMS key identifier is managed by the DB cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * License model information for this DB instance.
     *
     * Valid Values:
     *
     * - Aurora MySQL - `general-public-license`
     * - Aurora PostgreSQL - `postgresql-license`
     * - RDS for Db2 - `bring-your-own-license` . For more information about RDS for Db2 licensing, see [](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html) in the *Amazon RDS User Guide.*
     * - RDS for MariaDB - `general-public-license`
     * - RDS for Microsoft SQL Server - `license-included`
     * - RDS for MySQL - `general-public-license`
     * - RDS for Oracle - `bring-your-own-license` or `license-included`
     * - RDS for PostgreSQL - `postgresql-license`
     *
     * > If you've specified `DBSecurityGroups` and then you update the license model, AWS CloudFormation replaces the underlying DB instance. This will incur some interruptions to database availability.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-licensemodel
     */
    readonly licenseModel?: string;
    /**
     * Specifies whether to manage the master user password with AWS Secrets Manager.
     *
     * For more information, see [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
     *
     * Constraints:
     *
     * - Can't manage the master user password with AWS Secrets Manager if `MasterUserPassword` is specified.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-managemasteruserpassword
     */
    readonly manageMasterUserPassword?: boolean | cdk.IResolvable;
    /**
     * The master user name for the DB instance.
     *
     * > If you specify the `SourceDBInstanceIdentifier` or `DBSnapshotIdentifier` property, don't specify this property. The value is inherited from the source DB instance or snapshot.
     * >
     * > When migrating a self-managed Db2 database, we recommend that you use the same master username as your self-managed Db2 instance name.
     *
     * *Amazon Aurora*
     *
     * Not applicable. The name for the master user is managed by the DB cluster.
     *
     * *RDS for Db2*
     *
     * Constraints:
     *
     * - Must be 1 to 16 letters or numbers.
     * - First character must be a letter.
     * - Can't be a reserved word for the chosen database engine.
     *
     * *RDS for MariaDB*
     *
     * Constraints:
     *
     * - Must be 1 to 16 letters or numbers.
     * - Can't be a reserved word for the chosen database engine.
     *
     * *RDS for Microsoft SQL Server*
     *
     * Constraints:
     *
     * - Must be 1 to 128 letters or numbers.
     * - First character must be a letter.
     * - Can't be a reserved word for the chosen database engine.
     *
     * *RDS for MySQL*
     *
     * Constraints:
     *
     * - Must be 1 to 16 letters or numbers.
     * - First character must be a letter.
     * - Can't be a reserved word for the chosen database engine.
     *
     * *RDS for Oracle*
     *
     * Constraints:
     *
     * - Must be 1 to 30 letters or numbers.
     * - First character must be a letter.
     * - Can't be a reserved word for the chosen database engine.
     *
     * *RDS for PostgreSQL*
     *
     * Constraints:
     *
     * - Must be 1 to 63 letters or numbers.
     * - First character must be a letter.
     * - Can't be a reserved word for the chosen database engine.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-masterusername
     */
    readonly masterUsername?: string;
    /**
     * The password for the master user. The password can include any printable ASCII character except "/", """, or "@".
     *
     * *Amazon Aurora*
     *
     * Not applicable. The password for the master user is managed by the DB cluster.
     *
     * *RDS for Db2*
     *
     * Must contain from 8 to 255 characters.
     *
     * *RDS for MariaDB*
     *
     * Constraints: Must contain from 8 to 41 characters.
     *
     * *RDS for Microsoft SQL Server*
     *
     * Constraints: Must contain from 8 to 128 characters.
     *
     * *RDS for MySQL*
     *
     * Constraints: Must contain from 8 to 41 characters.
     *
     * *RDS for Oracle*
     *
     * Constraints: Must contain from 8 to 30 characters.
     *
     * *RDS for PostgreSQL*
     *
     * Constraints: Must contain from 8 to 128 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-masteruserpassword
     */
    readonly masterUserPassword?: string;
    /**
     * The secret managed by RDS in AWS Secrets Manager for the master user password.
     *
     * For more information, see [Password management with AWS Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-masterusersecret
     */
    readonly masterUserSecret?: cdk.IResolvable | CfnDBInstance.MasterUserSecretProperty;
    /**
     * The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.
     *
     * For more information about this setting, including limitations that apply to it, see [Managing capacity automatically with Amazon RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) in the *Amazon RDS User Guide* .
     *
     * This setting doesn't apply to the following DB instances:
     *
     * - Amazon Aurora (Storage is managed by the DB cluster.)
     * - RDS Custom
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-maxallocatedstorage
     */
    readonly maxAllocatedStorage?: number;
    /**
     * The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.
     *
     * To disable collection of Enhanced Monitoring metrics, specify `0` .
     *
     * If `MonitoringRoleArn` is specified, then you must set `MonitoringInterval` to a value other than `0` .
     *
     * This setting doesn't apply to RDS Custom DB instances.
     *
     * Valid Values: `0 | 1 | 5 | 10 | 15 | 30 | 60`
     *
     * Default: `0`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-monitoringinterval
     */
    readonly monitoringInterval?: number;
    /**
     * The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs.
     *
     * For example, `arn:aws:iam:123456789012:role/emaccess` . For information on creating a monitoring role, see [Setting Up and Enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide* .
     *
     * If `MonitoringInterval` is set to a value other than `0` , then you must supply a `MonitoringRoleArn` value.
     *
     * This setting doesn't apply to RDS Custom DB instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-monitoringrolearn
     */
    readonly monitoringRoleArn?: string;
    /**
     * Specifies whether the DB instance is a Multi-AZ deployment.
     *
     * You can't set the `AvailabilityZone` parameter if the DB instance is a Multi-AZ deployment.
     *
     * This setting doesn't apply to the following DB instances:
     *
     * - Amazon Aurora (DB instance Availability Zones (AZs) are managed by the DB cluster.)
     * - RDS Custom
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-multiaz
     */
    readonly multiAz?: boolean | cdk.IResolvable;
    /**
     * The name of the NCHAR character set for the Oracle DB instance.
     *
     * This setting doesn't apply to RDS Custom DB instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-ncharcharactersetname
     */
    readonly ncharCharacterSetName?: string;
    /**
     * The network type of the DB instance.
     *
     * Valid values:
     *
     * - `IPV4`
     * - `DUAL`
     *
     * The network type is determined by the `DBSubnetGroup` specified for the DB instance. A `DBSubnetGroup` can support only the IPv4 protocol or the IPv4 and IPv6 protocols ( `DUAL` ).
     *
     * For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-networktype
     */
    readonly networkType?: string;
    /**
     * Indicates that the DB instance should be associated with the specified option group.
     *
     * Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance once it is associated with a DB instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-optiongroupname
     */
    readonly optionGroupName?: string;
    /**
     * The AWS KMS key identifier for encryption of Performance Insights data.
     *
     * The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
     *
     * If you do not specify a value for `PerformanceInsightsKMSKeyId` , then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS account. Your AWS account has a different default KMS key for each AWS Region.
     *
     * For information about enabling Performance Insights, see [EnablePerformanceInsights](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-enableperformanceinsights) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-performanceinsightskmskeyid
     */
    readonly performanceInsightsKmsKeyId?: string;
    /**
     * The number of days to retain Performance Insights data.
     *
     * This setting doesn't apply to RDS Custom DB instances.
     *
     * Valid Values:
     *
     * - `7`
     * - *month* * 31, where *month* is a number of months from 1-23. Examples: `93` (3 months * 31), `341` (11 months * 31), `589` (19 months * 31)
     * - `731`
     *
     * Default: `7` days
     *
     * If you specify a retention period that isn't valid, such as `94` , Amazon RDS returns an error.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-performanceinsightsretentionperiod
     */
    readonly performanceInsightsRetentionPeriod?: number;
    /**
     * The port number on which the database accepts connections.
     *
     * This setting doesn't apply to Aurora DB instances. The port number is managed by the cluster.
     *
     * Valid Values: `1150-65535`
     *
     * Default:
     *
     * - RDS for Db2 - `50000`
     * - RDS for MariaDB - `3306`
     * - RDS for Microsoft SQL Server - `1433`
     * - RDS for MySQL - `3306`
     * - RDS for Oracle - `1521`
     * - RDS for PostgreSQL - `5432`
     *
     * Constraints:
     *
     * - For RDS for Microsoft SQL Server, the value can't be `1234` , `1434` , `3260` , `3343` , `3389` , `47001` , or `49152-49156` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-port
     */
    readonly port?: string;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled, using the `BackupRetentionPeriod` parameter.
     *
     * For more information, see [Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) in the *Amazon RDS User Guide.*
     *
     * Constraints:
     *
     * - Must be in the format `hh24:mi-hh24:mi` .
     * - Must be in Universal Coordinated Time (UTC).
     * - Must not conflict with the preferred maintenance window.
     * - Must be at least 30 minutes.
     *
     * *Amazon Aurora*
     *
     * Not applicable. The daily time range for creating automated backups is managed by the DB cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-preferredbackupwindow
     */
    readonly preferredBackupWindow?: string;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     *
     * Format: `ddd:hh24:mi-ddd:hh24:mi`
     *
     * The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Maintaining a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow) in the *Amazon RDS User Guide.*
     *
     * > This property applies when AWS CloudFormation initially creates the DB instance. If you use AWS CloudFormation to update the DB instance, those updates are applied immediately.
     *
     * Constraints: Minimum 30-minute window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-preferredmaintenancewindow
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
     *
     * This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-processorfeatures
     */
    readonly processorFeatures?: Array<cdk.IResolvable | CfnDBInstance.ProcessorFeatureProperty> | cdk.IResolvable;
    /**
     * The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance.
     *
     * For more information, see [Fault Tolerance for an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance) in the *Amazon Aurora User Guide* .
     *
     * This setting doesn't apply to RDS Custom DB instances.
     *
     * Default: `1`
     *
     * Valid Values: `0 - 15`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-promotiontier
     */
    readonly promotionTier?: number;
    /**
     * Indicates whether the DB instance is an internet-facing instance.
     *
     * If you specify true, AWS CloudFormation creates an instance with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, AWS CloudFormation creates an internal instance with a DNS name that resolves to a private IP address.
     *
     * The default behavior value depends on your VPC setup and the database subnet group. For more information, see the `PubliclyAccessible` parameter in the [CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) in the *Amazon RDS API Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-publiclyaccessible
     */
    readonly publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * The open mode of an Oracle read replica.
     *
     * For more information, see [Working with Oracle Read Replicas for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) in the *Amazon RDS User Guide* .
     *
     * This setting is only supported in RDS for Oracle.
     *
     * Default: `open-read-only`
     *
     * Valid Values: `open-read-only` or `mounted`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-replicamode
     */
    readonly replicaMode?: string;
    /**
     * The date and time to restore from.
     *
     * This parameter applies to point-in-time recovery. For more information, see [Restoring a DB instance to a specified time](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) in the in the *Amazon RDS User Guide* .
     *
     * Constraints:
     *
     * - Must be a time in Universal Coordinated Time (UTC) format.
     * - Must be before the latest restorable time for the DB instance.
     * - Can't be specified if the `UseLatestRestorableTime` parameter is enabled.
     *
     * Example: `2009-09-07T23:45:00Z`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-restoretime
     */
    readonly restoreTime?: string;
    /**
     * The identifier of the Multi-AZ DB cluster that will act as the source for the read replica.
     *
     * Each DB cluster can have up to 15 read replicas.
     *
     * Constraints:
     *
     * - Must be the identifier of an existing Multi-AZ DB cluster.
     * - Can't be specified if the `SourceDBInstanceIdentifier` parameter is also specified.
     * - The specified DB cluster must have automatic backups enabled, that is, its backup retention period must be greater than 0.
     * - The source DB cluster must be in the same AWS Region as the read replica. Cross-Region replication isn't supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-sourcedbclusteridentifier
     */
    readonly sourceDbClusterIdentifier?: string;
    /**
     * The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, `arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE` .
     *
     * This setting doesn't apply to RDS Custom.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-sourcedbinstanceautomatedbackupsarn
     */
    readonly sourceDbInstanceAutomatedBackupsArn?: string;
    /**
     * If you want to create a read replica DB instance, specify the ID of the source DB instance.
     *
     * Each DB instance can have a limited number of read replicas. For more information, see [Working with Read Replicas](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/USER_ReadRepl.html) in the *Amazon RDS User Guide* .
     *
     * For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon RDS User Guide* .
     *
     * The `SourceDBInstanceIdentifier` property determines whether a DB instance is a read replica. If you remove the `SourceDBInstanceIdentifier` property from your template and then update your stack, AWS CloudFormation promotes the read replica to a standalone DB instance.
     *
     * If you specify the `UseLatestRestorableTime` or `RestoreTime` properties in conjunction with the `SourceDBInstanceIdentifier` property, RDS restores the DB instance to the requested point in time, thereby creating a new DB instance.
     *
     * > - If you specify a source DB instance that uses VPC security groups, we recommend that you specify the `VPCSecurityGroups` property. If you don't specify the property, the read replica inherits the value of the `VPCSecurityGroups` property from the source DB when you create the replica. However, if you update the stack, AWS CloudFormation reverts the replica's `VPCSecurityGroups` property to the default value because it's not defined in the stack's template. This change might cause unexpected issues.
     * > - Read replicas don't support deletion policies. AWS CloudFormation ignores any deletion policy that's associated with a read replica.
     * > - If you specify `SourceDBInstanceIdentifier` , don't specify the `DBSnapshotIdentifier` property. You can't create a read replica from a snapshot.
     * > - Don't set the `BackupRetentionPeriod` , `DBName` , `MasterUsername` , `MasterUserPassword` , and `PreferredBackupWindow` properties. The database attributes are inherited from the source DB instance, and backups are disabled for read replicas.
     * > - If the source DB instance is in a different region than the read replica, specify the source region in `SourceRegion` , and specify an ARN for a valid DB instance in `SourceDBInstanceIdentifier` . For more information, see [Constructing a Amazon RDS Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html#USER_Tagging.ARN) in the *Amazon RDS User Guide* .
     * > - For DB instances in Amazon Aurora clusters, don't specify this property. Amazon RDS automatically assigns writer and reader DB instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-sourcedbinstanceidentifier
     */
    readonly sourceDbInstanceIdentifier?: string;
    /**
     * The resource ID of the source DB instance from which to restore.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-sourcedbiresourceid
     */
    readonly sourceDbiResourceId?: string;
    /**
     * The ID of the region that contains the source DB instance for the read replica.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-sourceregion
     */
    readonly sourceRegion?: string;
    /**
     * A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted.
     *
     * If you specify the `KmsKeyId` property, then you must enable encryption.
     *
     * If you specify the `SourceDBInstanceIdentifier` or `SourceDbiResourceId` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified `KmsKeyId` property is used.
     *
     * If you specify the `SourceDBInstanceAutomatedBackupsArn` property, don't specify this property. The value is inherited from the source DB instance automated backup.
     *
     * If you specify `DBSnapshotIdentifier` property, don't specify this property. The value is inherited from the snapshot.
     *
     * *Amazon Aurora*
     *
     * Not applicable. The encryption for DB instances is managed by the DB cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-storageencrypted
     */
    readonly storageEncrypted?: boolean | cdk.IResolvable;
    /**
     * Specifies the storage throughput value, in mebibyte per second (MiBps), for the DB instance.
     *
     * This setting applies only to the `gp3` storage type.
     *
     * This setting doesn't apply to RDS Custom or Amazon Aurora.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-storagethroughput
     */
    readonly storageThroughput?: number;
    /**
     * The storage type to associate with the DB instance.
     *
     * If you specify `io1` , `io2` , or `gp3` , you must also include a value for the `Iops` parameter.
     *
     * This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster.
     *
     * Valid Values: `gp2 | gp3 | io1 | io2 | standard`
     *
     * Default: `io1` , if the `Iops` parameter is specified. Otherwise, `gp3` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-storagetype
     */
    readonly storageType?: string;
    /**
     * Tags to assign to the DB instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-tdecredentialarn
     */
    readonly tdeCredentialArn?: string;
    /**
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-tdecredentialpassword
     */
    readonly tdeCredentialPassword?: string;
    /**
     * The time zone of the DB instance.
     *
     * The time zone parameter is currently supported only by [RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-time-zone) and [RDS for SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-timezone
     */
    readonly timezone?: string;
    /**
     * Specifies whether the DB instance class of the DB instance uses its default processor features.
     *
     * This setting doesn't apply to RDS Custom DB instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-usedefaultprocessorfeatures
     */
    readonly useDefaultProcessorFeatures?: boolean | cdk.IResolvable;
    /**
     * Specifies whether the DB instance is restored from the latest backup time.
     *
     * By default, the DB instance isn't restored from the latest backup time. This parameter applies to point-in-time recovery. For more information, see [Restoring a DB instance to a specified time](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html) in the in the *Amazon RDS User Guide* .
     *
     * Constraints:
     *
     * - Can't be specified if the `RestoreTime` parameter is provided.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-uselatestrestorabletime
     */
    readonly useLatestRestorableTime?: boolean | cdk.IResolvable;
    /**
     * A list of the VPC security group IDs to assign to the DB instance.
     *
     * The list can include both the physical IDs of existing VPC security groups and references to [AWS::EC2::SecurityGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html) resources created in the template.
     *
     * If you plan to update the resource, don't specify VPC security groups in a shared VPC.
     *
     * If you set `VPCSecurityGroups` , you must not set [`DBSecurityGroups`](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups) , and vice versa.
     *
     * > You can migrate a DB instance in your stack from an RDS DB security group to a VPC security group, but keep the following in mind:
     * >
     * > - You can't revert to using an RDS security group after you establish a VPC security group membership.
     * > - When you migrate your DB instance to VPC security groups, if your stack update rolls back because the DB instance update fails or because an update fails in another AWS CloudFormation resource, the rollback fails because it can't revert to an RDS security group.
     * > - To use the properties that are available when you use a VPC security group, you must recreate the DB instance. If you don't, AWS CloudFormation submits only the property values that are listed in the [`DBSecurityGroups`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups) property.
     *
     * To avoid this situation, migrate your DB instance to using VPC security groups only when that is the only change in your stack template.
     *
     * *Amazon Aurora*
     *
     * Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. If specified, the setting must match the DB cluster setting.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbinstance.html#cfn-rds-dbinstance-vpcsecuritygroups
     */
    readonly vpcSecurityGroups?: Array<string>;
}
/**
 * The `AWS::RDS::DBParameterGroup` resource creates a custom parameter group for an RDS database family.
 *
 * This type can be declared in a template and referenced in the `DBParameterGroupName` property of an `[AWS::RDS::DBInstance](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html)` resource.
 *
 * For information about configuring parameters for Amazon RDS DB instances, see [Working with parameter groups](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html) in the *Amazon RDS User Guide* .
 *
 * For information about configuring parameters for Amazon Aurora DB instances, see [Working with parameter groups](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html) in the *Amazon Aurora User Guide* .
 *
 * > Applying a parameter group to a DB instance may require the DB instance to reboot, resulting in a database outage for the duration of the reboot.
 *
 * @cloudformationResource AWS::RDS::DBParameterGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbparametergroup.html
 */
export declare class CfnDBParameterGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDBParameterGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDBParameterGroup;
    /**
     * The name of the DB parameter group.
     *
     * @cloudformationAttribute DBParameterGroupName
     */
    readonly attrDbParameterGroupName: string;
    /**
     * The name of the DB parameter group.
     */
    dbParameterGroupName?: string;
    /**
     * Provides the customer-specified description for this DB parameter group.
     */
    description: string;
    /**
     * The DB parameter group family name.
     */
    family: string;
    /**
     * A mapping of parameter names and values for the parameter update.
     */
    parameters?: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags to assign to the DB parameter group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDBParameterGroupProps);
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
 * Properties for defining a `CfnDBParameterGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbparametergroup.html
 */
export interface CfnDBParameterGroupProps {
    /**
     * The name of the DB parameter group.
     *
     * Constraints:
     *
     * - Must be 1 to 255 letters, numbers, or hyphens.
     * - First character must be a letter
     * - Can't end with a hyphen or contain two consecutive hyphens
     *
     * If you don't specify a value for `DBParameterGroupName` property, a name is automatically created for the DB parameter group.
     *
     * > This value is stored as a lowercase string.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbparametergroup.html#cfn-rds-dbparametergroup-dbparametergroupname
     */
    readonly dbParameterGroupName?: string;
    /**
     * Provides the customer-specified description for this DB parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbparametergroup.html#cfn-rds-dbparametergroup-description
     */
    readonly description: string;
    /**
     * The DB parameter group family name.
     *
     * A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.
     *
     * To list all of the available parameter group families for a DB engine, use the following command:
     *
     * `aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine <engine>`
     *
     * For example, to list all of the available parameter group families for the MySQL DB engine, use the following command:
     *
     * `aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily" --engine mysql`
     *
     * > The output contains duplicates.
     *
     * The following are the valid DB engine values:
     *
     * - `aurora-mysql`
     * - `aurora-postgresql`
     * - `db2-ae`
     * - `db2-se`
     * - `mysql`
     * - `oracle-ee`
     * - `oracle-ee-cdb`
     * - `oracle-se2`
     * - `oracle-se2-cdb`
     * - `postgres`
     * - `sqlserver-ee`
     * - `sqlserver-se`
     * - `sqlserver-ex`
     * - `sqlserver-web`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbparametergroup.html#cfn-rds-dbparametergroup-family
     */
    readonly family: string;
    /**
     * A mapping of parameter names and values for the parameter update.
     *
     * You must specify at least one parameter name and value.
     *
     * For more information about parameter groups, see [Working with parameter groups](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html) in the *Amazon RDS User Guide* , or [Working with parameter groups](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html) in the *Amazon Aurora User Guide* .
     *
     * > AWS CloudFormation doesn't support specifying an apply method for each individual parameter. The default apply method for each parameter is used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbparametergroup.html#cfn-rds-dbparametergroup-parameters
     */
    readonly parameters?: any | cdk.IResolvable;
    /**
     * Tags to assign to the DB parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbparametergroup.html#cfn-rds-dbparametergroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::RDS::DBProxy` resource creates or updates a DB proxy.
 *
 * For information about RDS Proxy for Amazon RDS, see [Managing Connections with Amazon RDS Proxy](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html) in the *Amazon RDS User Guide* .
 *
 * For information about RDS Proxy for Amazon Aurora, see [Managing Connections with Amazon RDS Proxy](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html) in the *Amazon Aurora User Guide* .
 *
 * > Limitations apply to RDS Proxy, including DB engine version limitations and AWS Region limitations.
 * >
 * > For information about limitations that apply to RDS Proxy for Amazon RDS, see [Limitations for RDS Proxy](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html#rds-proxy.limitations) in the *Amazon RDS User Guide* .
 * >
 * > For information about that apply to RDS Proxy for Amazon Aurora, see [Limitations for RDS Proxy](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html#rds-proxy.limitations) in the *Amazon Aurora User Guide* .
 *
 * @cloudformationResource AWS::RDS::DBProxy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html
 */
export declare class CfnDBProxy extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDBProxy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDBProxy;
    /**
     * The Amazon Resource Name (ARN) for the proxy.
     *
     * @cloudformationAttribute DBProxyArn
     */
    readonly attrDbProxyArn: string;
    /**
     * The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the connection string for a database client application.
     *
     * @cloudformationAttribute Endpoint
     */
    readonly attrEndpoint: string;
    /**
     * The VPC ID to associate with the DB proxy.
     *
     * @cloudformationAttribute VpcId
     */
    readonly attrVpcId: string;
    /**
     * The authorization mechanism that the proxy uses.
     */
    auth: Array<CfnDBProxy.AuthFormatProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The identifier for the proxy.
     */
    dbProxyName: string;
    /**
     * Specifies whether the proxy includes detailed information about SQL statements in its logs.
     */
    debugLogging?: boolean | cdk.IResolvable;
    /**
     * The kinds of databases that the proxy can connect to.
     */
    engineFamily: string;
    /**
     * The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.
     */
    idleClientTimeout?: number;
    /**
     * Specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
     */
    requireTls?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.
     */
    roleArn: string;
    /**
     * An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
     */
    tags?: Array<CfnDBProxy.TagFormatProperty>;
    /**
     * One or more VPC security group IDs to associate with the new proxy.
     */
    vpcSecurityGroupIds?: Array<string>;
    /**
     * One or more VPC subnet IDs to associate with the new proxy.
     */
    vpcSubnetIds: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDBProxyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDBProxy {
    /**
     * Specifies the details of authentication used by a proxy to log in as a specific database user.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxy-authformat.html
     */
    interface AuthFormatProperty {
        /**
         * The type of authentication that the proxy uses for connections from the proxy to the underlying database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxy-authformat.html#cfn-rds-dbproxy-authformat-authscheme
         */
        readonly authScheme?: string;
        /**
         * Specifies the details of authentication used by a proxy to log in as a specific database user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxy-authformat.html#cfn-rds-dbproxy-authformat-clientpasswordauthtype
         */
        readonly clientPasswordAuthType?: string;
        /**
         * A user-specified description about the authentication used by a proxy to log in as a specific database user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxy-authformat.html#cfn-rds-dbproxy-authformat-description
         */
        readonly description?: string;
        /**
         * A value that indicates whether to require or disallow AWS Identity and Access Management (IAM) authentication for connections to the proxy.
         *
         * The `ENABLED` value is valid only for proxies with RDS for Microsoft SQL Server.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxy-authformat.html#cfn-rds-dbproxy-authformat-iamauth
         */
        readonly iamAuth?: string;
        /**
         * The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster.
         *
         * These secrets are stored within Amazon Secrets Manager.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxy-authformat.html#cfn-rds-dbproxy-authformat-secretarn
         */
        readonly secretArn?: string;
    }
    /**
     * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
     *
     * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxy-tagformat.html
     */
    interface TagFormatProperty {
        /**
         * A key is the required name of the tag.
         *
         * The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:` . The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxy-tagformat.html#cfn-rds-dbproxy-tagformat-key
         */
        readonly key?: string;
        /**
         * A value is the optional value of the tag.
         *
         * The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:` . The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxy-tagformat.html#cfn-rds-dbproxy-tagformat-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnDBProxy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html
 */
export interface CfnDBProxyProps {
    /**
     * The authorization mechanism that the proxy uses.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html#cfn-rds-dbproxy-auth
     */
    readonly auth: Array<CfnDBProxy.AuthFormatProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The identifier for the proxy.
     *
     * This name must be unique for all proxies owned by your AWS account in the specified AWS Region . An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html#cfn-rds-dbproxy-dbproxyname
     */
    readonly dbProxyName: string;
    /**
     * Specifies whether the proxy includes detailed information about SQL statements in its logs.
     *
     * This information helps you to debug issues involving SQL behavior or the performance and scalability of the proxy connections. The debug information includes the text of SQL statements that you submit through the proxy. Thus, only enable this setting when needed for debugging, and only when you have security measures in place to safeguard any sensitive information that appears in the logs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html#cfn-rds-dbproxy-debuglogging
     */
    readonly debugLogging?: boolean | cdk.IResolvable;
    /**
     * The kinds of databases that the proxy can connect to.
     *
     * This value determines which database network protocol the proxy recognizes when it interprets network traffic to and from the database. For Aurora MySQL, RDS for MariaDB, and RDS for MySQL databases, specify `MYSQL` . For Aurora PostgreSQL and RDS for PostgreSQL databases, specify `POSTGRESQL` . For RDS for Microsoft SQL Server, specify `SQLSERVER` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html#cfn-rds-dbproxy-enginefamily
     */
    readonly engineFamily: string;
    /**
     * The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.
     *
     * You can set this value higher or lower than the connection timeout limit for the associated database.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html#cfn-rds-dbproxy-idleclienttimeout
     */
    readonly idleClientTimeout?: number;
    /**
     * Specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
     *
     * By enabling this setting, you can enforce encrypted TLS connections to the proxy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html#cfn-rds-dbproxy-requiretls
     */
    readonly requireTls?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html#cfn-rds-dbproxy-rolearn
     */
    readonly roleArn: string;
    /**
     * An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html#cfn-rds-dbproxy-tags
     */
    readonly tags?: Array<CfnDBProxy.TagFormatProperty>;
    /**
     * One or more VPC security group IDs to associate with the new proxy.
     *
     * If you plan to update the resource, don't specify VPC security groups in a shared VPC.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html#cfn-rds-dbproxy-vpcsecuritygroupids
     */
    readonly vpcSecurityGroupIds?: Array<string>;
    /**
     * One or more VPC subnet IDs to associate with the new proxy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html#cfn-rds-dbproxy-vpcsubnetids
     */
    readonly vpcSubnetIds: Array<string>;
}
/**
 * The `AWS::RDS::DBProxyEndpoint` resource creates or updates a DB proxy endpoint.
 *
 * You can use custom proxy endpoints to access a proxy through a different VPC than the proxy's default VPC.
 *
 * For more information about RDS Proxy, see [AWS::RDS::DBProxy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html) .
 *
 * @cloudformationResource AWS::RDS::DBProxyEndpoint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html
 */
export declare class CfnDBProxyEndpoint extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDBProxyEndpoint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDBProxyEndpoint;
    /**
     * The Amazon Resource Name (ARN) for the DB proxy endpoint.
     *
     * @cloudformationAttribute DBProxyEndpointArn
     */
    readonly attrDbProxyEndpointArn: string;
    /**
     * The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the connection string for a database client application.
     *
     * @cloudformationAttribute Endpoint
     */
    readonly attrEndpoint: string;
    /**
     * Indicates whether this endpoint is the default endpoint for the associated DB proxy. Default DB proxy endpoints always have read/write capability. Other endpoints that you associate with the DB proxy can be either read/write or read-only.
     *
     * @cloudformationAttribute IsDefault
     */
    readonly attrIsDefault: cdk.IResolvable;
    /**
     * Provides the VPC ID of the DB proxy endpoint.
     *
     * @cloudformationAttribute VpcId
     */
    readonly attrVpcId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the DB proxy endpoint to create.
     */
    dbProxyEndpointName: string;
    /**
     * The name of the DB proxy associated with the DB proxy endpoint that you create.
     */
    dbProxyName: string;
    /**
     * An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
     */
    tags?: Array<CfnDBProxyEndpoint.TagFormatProperty>;
    /**
     * A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.
     */
    targetRole?: string;
    /**
     * The VPC security group IDs for the DB proxy endpoint that you create.
     */
    vpcSecurityGroupIds?: Array<string>;
    /**
     * The VPC subnet IDs for the DB proxy endpoint that you create.
     */
    vpcSubnetIds: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDBProxyEndpointProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDBProxyEndpoint {
    /**
     * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
     *
     * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxyendpoint-tagformat.html
     */
    interface TagFormatProperty {
        /**
         * A key is the required name of the tag.
         *
         * The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:` . The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxyendpoint-tagformat.html#cfn-rds-dbproxyendpoint-tagformat-key
         */
        readonly key?: string;
        /**
         * A value is the optional value of the tag.
         *
         * The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:` . The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxyendpoint-tagformat.html#cfn-rds-dbproxyendpoint-tagformat-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnDBProxyEndpoint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html
 */
export interface CfnDBProxyEndpointProps {
    /**
     * The name of the DB proxy endpoint to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-dbproxyendpointname
     */
    readonly dbProxyEndpointName: string;
    /**
     * The name of the DB proxy associated with the DB proxy endpoint that you create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-dbproxyname
     */
    readonly dbProxyName: string;
    /**
     * An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-tags
     */
    readonly tags?: Array<CfnDBProxyEndpoint.TagFormatProperty>;
    /**
     * A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-targetrole
     */
    readonly targetRole?: string;
    /**
     * The VPC security group IDs for the DB proxy endpoint that you create.
     *
     * You can specify a different set of security group IDs than for the original DB proxy. The default is the default security group for the VPC.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-vpcsecuritygroupids
     */
    readonly vpcSecurityGroupIds?: Array<string>;
    /**
     * The VPC subnet IDs for the DB proxy endpoint that you create.
     *
     * You can specify a different set of subnet IDs than for the original DB proxy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxyendpoint.html#cfn-rds-dbproxyendpoint-vpcsubnetids
     */
    readonly vpcSubnetIds: Array<string>;
}
/**
 * The `AWS::RDS::DBProxyTargetGroup` resource represents a set of RDS DB instances, Aurora DB clusters, or both that a proxy can connect to.
 *
 * Currently, each target group is associated with exactly one RDS DB instance or Aurora DB cluster.
 *
 * This data type is used as a response element in the `DescribeDBProxyTargetGroups` action.
 *
 * For information about RDS Proxy for Amazon RDS, see [Managing Connections with Amazon RDS Proxy](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html) in the *Amazon RDS User Guide* .
 *
 * For information about RDS Proxy for Amazon Aurora, see [Managing Connections with Amazon RDS Proxy](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html) in the *Amazon Aurora User Guide* .
 *
 * For a sample template that creates a DB proxy and registers a DB instance, see [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxy.html#aws-resource-rds-dbproxy--examples) in AWS::RDS::DBProxy.
 *
 * > Limitations apply to RDS Proxy, including DB engine version limitations and AWS Region limitations.
 * >
 * > For information about limitations that apply to RDS Proxy for Amazon RDS, see [Limitations for RDS Proxy](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html#rds-proxy.limitations) in the *Amazon RDS User Guide* .
 * >
 * > For information about that apply to RDS Proxy for Amazon Aurora, see [Limitations for RDS Proxy](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html#rds-proxy.limitations) in the *Amazon Aurora User Guide* .
 *
 * @cloudformationResource AWS::RDS::DBProxyTargetGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html
 */
export declare class CfnDBProxyTargetGroup extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDBProxyTargetGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDBProxyTargetGroup;
    /**
     * The Amazon Resource Name (ARN) representing the target group.
     *
     * @cloudformationAttribute TargetGroupArn
     */
    readonly attrTargetGroupArn: string;
    /**
     * Displays the settings that control the size and behavior of the connection pool associated with a `DBProxyTarget` .
     */
    connectionPoolConfigurationInfo?: CfnDBProxyTargetGroup.ConnectionPoolConfigurationInfoFormatProperty | cdk.IResolvable;
    /**
     * One or more DB cluster identifiers.
     */
    dbClusterIdentifiers?: Array<string>;
    /**
     * One or more DB instance identifiers.
     */
    dbInstanceIdentifiers?: Array<string>;
    /**
     * The identifier of the `DBProxy` that is associated with the `DBProxyTargetGroup` .
     */
    dbProxyName: string;
    /**
     * The identifier for the target group.
     */
    targetGroupName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDBProxyTargetGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDBProxyTargetGroup {
    /**
     * Specifies the settings that control the size and behavior of the connection pool associated with a `DBProxyTargetGroup` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat.html
     */
    interface ConnectionPoolConfigurationInfoFormatProperty {
        /**
         * The number of seconds for a proxy to wait for a connection to become available in the connection pool.
         *
         * This setting only applies when the proxy has opened its maximum number of connections and all connections are busy with client sessions.
         *
         * Default: `120`
         *
         * Constraints:
         *
         * - Must be between 0 and 3600.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat.html#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-connectionborrowtimeout
         */
        readonly connectionBorrowTimeout?: number;
        /**
         * One or more SQL statements for the proxy to run when opening each new database connection.
         *
         * Typically used with `SET` statements to make sure that each connection has identical settings such as time zone and character set. For multiple statements, use semicolons as the separator. You can also include multiple variables in a single `SET` statement, such as `SET x=1, y=2` .
         *
         * Default: no initialization query
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat.html#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-initquery
         */
        readonly initQuery?: string;
        /**
         * The maximum size of the connection pool for each target in a target group.
         *
         * The value is expressed as a percentage of the `max_connections` setting for the RDS DB instance or Aurora DB cluster used by the target group.
         *
         * If you specify `MaxIdleConnectionsPercent` , then you must also include a value for this parameter.
         *
         * Default: `10` for RDS for Microsoft SQL Server, and `100` for all other engines
         *
         * Constraints:
         *
         * - Must be between 1 and 100.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat.html#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-maxconnectionspercent
         */
        readonly maxConnectionsPercent?: number;
        /**
         * A value that controls how actively the proxy closes idle database connections in the connection pool.
         *
         * The value is expressed as a percentage of the `max_connections` setting for the RDS DB instance or Aurora DB cluster used by the target group. With a high value, the proxy leaves a high percentage of idle database connections open. A low value causes the proxy to close more idle connections and return them to the database.
         *
         * If you specify this parameter, then you must also include a value for `MaxConnectionsPercent` .
         *
         * Default: The default value is half of the value of `MaxConnectionsPercent` . For example, if `MaxConnectionsPercent` is 80, then the default value of `MaxIdleConnectionsPercent` is 40. If the value of `MaxConnectionsPercent` isn't specified, then for SQL Server, `MaxIdleConnectionsPercent` is `5` , and for all other engines, the default is `50` .
         *
         * Constraints:
         *
         * - Must be between 0 and the value of `MaxConnectionsPercent` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat.html#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-maxidleconnectionspercent
         */
        readonly maxIdleConnectionsPercent?: number;
        /**
         * Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection.
         *
         * Including an item in the list exempts that class of SQL operations from the pinning behavior.
         *
         * Default: no session pinning filters
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat.html#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfoformat-sessionpinningfilters
         */
        readonly sessionPinningFilters?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnDBProxyTargetGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html
 */
export interface CfnDBProxyTargetGroupProps {
    /**
     * Displays the settings that control the size and behavior of the connection pool associated with a `DBProxyTarget` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html#cfn-rds-dbproxytargetgroup-connectionpoolconfigurationinfo
     */
    readonly connectionPoolConfigurationInfo?: CfnDBProxyTargetGroup.ConnectionPoolConfigurationInfoFormatProperty | cdk.IResolvable;
    /**
     * One or more DB cluster identifiers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html#cfn-rds-dbproxytargetgroup-dbclusteridentifiers
     */
    readonly dbClusterIdentifiers?: Array<string>;
    /**
     * One or more DB instance identifiers.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html#cfn-rds-dbproxytargetgroup-dbinstanceidentifiers
     */
    readonly dbInstanceIdentifiers?: Array<string>;
    /**
     * The identifier of the `DBProxy` that is associated with the `DBProxyTargetGroup` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html#cfn-rds-dbproxytargetgroup-dbproxyname
     */
    readonly dbProxyName: string;
    /**
     * The identifier for the target group.
     *
     * > Currently, this property must be set to `default` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbproxytargetgroup.html#cfn-rds-dbproxytargetgroup-targetgroupname
     */
    readonly targetGroupName: string;
}
/**
 * The `AWS::RDS::DBSecurityGroup` resource creates or updates an Amazon RDS DB security group.
 *
 * > EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see [Migrate from EC2-Classic to a VPC](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html) in the *Amazon EC2 User Guide* , the blog [EC2-Classic Networking is Retiring – Here’s How to Prepare](https://docs.aws.amazon.com/aws/ec2-classic-is-retiring-heres-how-to-prepare/) , and [Moving a DB instance not in a VPC into a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html) in the *Amazon RDS User Guide* .
 *
 * @cloudformationResource AWS::RDS::DBSecurityGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroup.html
 */
export declare class CfnDBSecurityGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDBSecurityGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDBSecurityGroup;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Ingress rules to be applied to the DB security group.
     */
    dbSecurityGroupIngress: Array<CfnDBSecurityGroup.IngressProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The identifier of an Amazon virtual private cloud (VPC).
     */
    ec2VpcId?: string;
    /**
     * Provides the description of the DB security group.
     */
    groupDescription: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDBSecurityGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDBSecurityGroup {
    /**
     * The `Ingress` property type specifies an individual ingress rule within an `AWS::RDS::DBSecurityGroup` resource.
     *
     * > EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see [Migrate from EC2-Classic to a VPC](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html) in the *Amazon EC2 User Guide* , the blog [EC2-Classic Networking is Retiring – Here’s How to Prepare](https://docs.aws.amazon.com/aws/ec2-classic-is-retiring-heres-how-to-prepare/) , and [Moving a DB instance not in a VPC into a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html) in the *Amazon RDS User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbsecuritygroup-ingress.html
     */
    interface IngressProperty {
        /**
         * The IP range to authorize.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbsecuritygroup-ingress.html#cfn-rds-dbsecuritygroup-ingress-cidrip
         */
        readonly cidrip?: string;
        /**
         * Id of the EC2 security group to authorize.
         *
         * For VPC DB security groups, `EC2SecurityGroupId` must be provided. Otherwise, `EC2SecurityGroupOwnerId` and either `EC2SecurityGroupName` or `EC2SecurityGroupId` must be provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbsecuritygroup-ingress.html#cfn-rds-dbsecuritygroup-ingress-ec2securitygroupid
         */
        readonly ec2SecurityGroupId?: string;
        /**
         * Name of the EC2 security group to authorize.
         *
         * For VPC DB security groups, `EC2SecurityGroupId` must be provided. Otherwise, `EC2SecurityGroupOwnerId` and either `EC2SecurityGroupName` or `EC2SecurityGroupId` must be provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbsecuritygroup-ingress.html#cfn-rds-dbsecuritygroup-ingress-ec2securitygroupname
         */
        readonly ec2SecurityGroupName?: string;
        /**
         * AWS account number of the owner of the EC2 security group specified in the `EC2SecurityGroupName` parameter.
         *
         * The AWS access key ID isn't an acceptable value. For VPC DB security groups, `EC2SecurityGroupId` must be provided. Otherwise, `EC2SecurityGroupOwnerId` and either `EC2SecurityGroupName` or `EC2SecurityGroupId` must be provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbsecuritygroup-ingress.html#cfn-rds-dbsecuritygroup-ingress-ec2securitygroupownerid
         */
        readonly ec2SecurityGroupOwnerId?: string;
    }
}
/**
 * Properties for defining a `CfnDBSecurityGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroup.html
 */
export interface CfnDBSecurityGroupProps {
    /**
     * Ingress rules to be applied to the DB security group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroup.html#cfn-rds-dbsecuritygroup-dbsecuritygroupingress
     */
    readonly dbSecurityGroupIngress: Array<CfnDBSecurityGroup.IngressProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The identifier of an Amazon virtual private cloud (VPC).
     *
     * This property indicates the VPC that this DB security group belongs to.
     *
     * > This property is included for backwards compatibility and is no longer recommended for providing security information to an RDS DB instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroup.html#cfn-rds-dbsecuritygroup-ec2vpcid
     */
    readonly ec2VpcId?: string;
    /**
     * Provides the description of the DB security group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroup.html#cfn-rds-dbsecuritygroup-groupdescription
     */
    readonly groupDescription: string;
    /**
     * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
     *
     * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroup.html#cfn-rds-dbsecuritygroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::RDS::DBSecurityGroupIngress` resource enables ingress to a DB security group using one of two forms of authorization.
 *
 * First, you can add EC2 or VPC security groups to the DB security group if the application using the database is running on EC2 or VPC instances. Second, IP ranges are available if the application accessing your database is running on the Internet.
 *
 * This type supports updates. For more information about updating stacks, see [AWS CloudFormation Stacks Updates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks.html) .
 *
 * For details about the settings for DB security group ingress, see [AuthorizeDBSecurityGroupIngress](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_AuthorizeDBSecurityGroupIngress.html) .
 *
 * > EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that you migrate as soon as possible. For more information, see [Migrate from EC2-Classic to a VPC](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html) in the *Amazon EC2 User Guide* , the blog [EC2-Classic Networking is Retiring – Here’s How to Prepare](https://docs.aws.amazon.com/aws/ec2-classic-is-retiring-heres-how-to-prepare/) , and [Moving a DB instance not in a VPC into a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html) in the *Amazon RDS User Guide* .
 *
 * @cloudformationResource AWS::RDS::DBSecurityGroupIngress
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroupingress.html
 */
export declare class CfnDBSecurityGroupIngress extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDBSecurityGroupIngress from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDBSecurityGroupIngress;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The IP range to authorize.
     */
    cidrip?: string;
    /**
     * The name of the DB security group to add authorization to.
     */
    dbSecurityGroupName: string;
    /**
     * Id of the EC2 security group to authorize.
     */
    ec2SecurityGroupId?: string;
    /**
     * Name of the EC2 security group to authorize.
     */
    ec2SecurityGroupName?: string;
    /**
     * AWS account number of the owner of the EC2 security group specified in the `EC2SecurityGroupName` parameter.
     */
    ec2SecurityGroupOwnerId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDBSecurityGroupIngressProps);
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
 * Properties for defining a `CfnDBSecurityGroupIngress`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroupingress.html
 */
export interface CfnDBSecurityGroupIngressProps {
    /**
     * The IP range to authorize.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroupingress.html#cfn-rds-dbsecuritygroupingress-cidrip
     */
    readonly cidrip?: string;
    /**
     * The name of the DB security group to add authorization to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroupingress.html#cfn-rds-dbsecuritygroupingress-dbsecuritygroupname
     */
    readonly dbSecurityGroupName: string;
    /**
     * Id of the EC2 security group to authorize.
     *
     * For VPC DB security groups, `EC2SecurityGroupId` must be provided. Otherwise, `EC2SecurityGroupOwnerId` and either `EC2SecurityGroupName` or `EC2SecurityGroupId` must be provided.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroupingress.html#cfn-rds-dbsecuritygroupingress-ec2securitygroupid
     */
    readonly ec2SecurityGroupId?: string;
    /**
     * Name of the EC2 security group to authorize.
     *
     * For VPC DB security groups, `EC2SecurityGroupId` must be provided. Otherwise, `EC2SecurityGroupOwnerId` and either `EC2SecurityGroupName` or `EC2SecurityGroupId` must be provided.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroupingress.html#cfn-rds-dbsecuritygroupingress-ec2securitygroupname
     */
    readonly ec2SecurityGroupName?: string;
    /**
     * AWS account number of the owner of the EC2 security group specified in the `EC2SecurityGroupName` parameter.
     *
     * The AWS access key ID isn't an acceptable value. For VPC DB security groups, `EC2SecurityGroupId` must be provided. Otherwise, `EC2SecurityGroupOwnerId` and either `EC2SecurityGroupName` or `EC2SecurityGroupId` must be provided.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsecuritygroupingress.html#cfn-rds-dbsecuritygroupingress-ec2securitygroupownerid
     */
    readonly ec2SecurityGroupOwnerId?: string;
}
/**
 * The `AWS::RDS::DBSubnetGroup` resource creates a database subnet group.
 *
 * Subnet groups must contain at least two subnets in two different Availability Zones in the same region.
 *
 * For more information, see [Working with DB subnet groups](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html#USER_VPC.Subnets) in the *Amazon RDS User Guide* .
 *
 * @cloudformationResource AWS::RDS::DBSubnetGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnetgroup.html
 */
export declare class CfnDBSubnetGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDBSubnetGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDBSubnetGroup;
    /**
     * The description for the DB subnet group.
     */
    dbSubnetGroupDescription: string;
    /**
     * The name for the DB subnet group. This value is stored as a lowercase string.
     */
    dbSubnetGroupName?: string;
    /**
     * The EC2 Subnet IDs for the DB subnet group.
     */
    subnetIds: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags to assign to the DB subnet group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDBSubnetGroupProps);
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
 * Properties for defining a `CfnDBSubnetGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnetgroup.html
 */
export interface CfnDBSubnetGroupProps {
    /**
     * The description for the DB subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnetgroup.html#cfn-rds-dbsubnetgroup-dbsubnetgroupdescription
     */
    readonly dbSubnetGroupDescription: string;
    /**
     * The name for the DB subnet group. This value is stored as a lowercase string.
     *
     * Constraints:
     *
     * - Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens.
     * - Must not be default.
     * - First character must be a letter.
     *
     * Example: `mydbsubnetgroup`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnetgroup.html#cfn-rds-dbsubnetgroup-dbsubnetgroupname
     */
    readonly dbSubnetGroupName?: string;
    /**
     * The EC2 Subnet IDs for the DB subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnetgroup.html#cfn-rds-dbsubnetgroup-subnetids
     */
    readonly subnetIds: Array<string>;
    /**
     * Tags to assign to the DB subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbsubnetgroup.html#cfn-rds-dbsubnetgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::RDS::EventSubscription` resource allows you to receive notifications for Amazon Relational Database Service events through the Amazon Simple Notification Service (Amazon SNS).
 *
 * For more information, see [Using Amazon RDS Event Notification](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html) in the *Amazon RDS User Guide* .
 *
 * @cloudformationResource AWS::RDS::EventSubscription
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html
 */
export declare class CfnEventSubscription extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEventSubscription from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEventSubscription;
    /**
     * Specifies whether to activate the subscription.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * A list of event categories for a particular source type ( `SourceType` ) that you want to subscribe to.
     */
    eventCategories?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the SNS topic created for event notification.
     */
    snsTopicArn: string;
    /**
     * The list of identifiers of the event sources for which events are returned.
     */
    sourceIds?: Array<string>;
    /**
     * The type of source that is generating the events.
     */
    sourceType?: string;
    /**
     * The name of the subscription.
     */
    subscriptionName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An optional array of key-value pairs to apply to this subscription.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEventSubscriptionProps);
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
 * Properties for defining a `CfnEventSubscription`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html
 */
export interface CfnEventSubscriptionProps {
    /**
     * Specifies whether to activate the subscription.
     *
     * If the event notification subscription isn't activated, the subscription is created but not active.
     *
     * @default - true
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html#cfn-rds-eventsubscription-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * A list of event categories for a particular source type ( `SourceType` ) that you want to subscribe to.
     *
     * You can see a list of the categories for a given source type in the "Amazon RDS event categories and event messages" section of the [*Amazon RDS User Guide*](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html) or the [*Amazon Aurora User Guide*](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html) . You can also see this list by using the `DescribeEventCategories` operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html#cfn-rds-eventsubscription-eventcategories
     */
    readonly eventCategories?: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the SNS topic created for event notification.
     *
     * SNS automatically creates the ARN when you create a topic and subscribe to it.
     *
     * > RDS doesn't support FIFO (first in, first out) topics. For more information, see [Message ordering and deduplication (FIFO topics)](https://docs.aws.amazon.com/sns/latest/dg/sns-fifo-topics.html) in the *Amazon Simple Notification Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html#cfn-rds-eventsubscription-snstopicarn
     */
    readonly snsTopicArn: string;
    /**
     * The list of identifiers of the event sources for which events are returned.
     *
     * If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens. It can't end with a hyphen or contain two consecutive hyphens.
     *
     * Constraints:
     *
     * - If `SourceIds` are supplied, `SourceType` must also be provided.
     * - If the source type is a DB instance, a `DBInstanceIdentifier` value must be supplied.
     * - If the source type is a DB cluster, a `DBClusterIdentifier` value must be supplied.
     * - If the source type is a DB parameter group, a `DBParameterGroupName` value must be supplied.
     * - If the source type is a DB security group, a `DBSecurityGroupName` value must be supplied.
     * - If the source type is a DB snapshot, a `DBSnapshotIdentifier` value must be supplied.
     * - If the source type is a DB cluster snapshot, a `DBClusterSnapshotIdentifier` value must be supplied.
     * - If the source type is an RDS Proxy, a `DBProxyName` value must be supplied.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html#cfn-rds-eventsubscription-sourceids
     */
    readonly sourceIds?: Array<string>;
    /**
     * The type of source that is generating the events.
     *
     * For example, if you want to be notified of events generated by a DB instance, you set this parameter to `db-instance` . For RDS Proxy events, specify `db-proxy` . If this value isn't specified, all events are returned.
     *
     * Valid Values: `db-instance | db-cluster | db-parameter-group | db-security-group | db-snapshot | db-cluster-snapshot | db-proxy | zero-etl | custom-engine-version | blue-green-deployment`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html#cfn-rds-eventsubscription-sourcetype
     */
    readonly sourceType?: string;
    /**
     * The name of the subscription.
     *
     * Constraints: The name must be less than 255 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html#cfn-rds-eventsubscription-subscriptionname
     */
    readonly subscriptionName?: string;
    /**
     * An optional array of key-value pairs to apply to this subscription.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-eventsubscription.html#cfn-rds-eventsubscription-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::RDS::GlobalCluster` resource creates or updates an Amazon Aurora global database spread across multiple AWS Regions.
 *
 * The global database contains a single primary cluster with read-write capability, and a read-only secondary cluster that receives data from the primary cluster through high-speed replication performed by the Aurora storage subsystem.
 *
 * You can create a global database that is initially empty, and then add a primary cluster and a secondary cluster to it.
 *
 * For information about Aurora global databases, see [Working with Amazon Aurora Global Databases](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html) in the *Amazon Aurora User Guide* .
 *
 * @cloudformationResource AWS::RDS::GlobalCluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html
 */
export declare class CfnGlobalCluster extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGlobalCluster from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGlobalCluster;
    /**
     * @cloudformationAttribute GlobalEndpoint
     */
    readonly attrGlobalEndpoint: cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Specifies whether to enable deletion protection for the new global database cluster.
     */
    deletionProtection?: boolean | cdk.IResolvable;
    /**
     * The database engine to use for this global database cluster.
     */
    engine?: string;
    /**
     * The life cycle type for this global database cluster.
     */
    engineLifecycleSupport?: string;
    /**
     * The engine version to use for this global database cluster.
     */
    engineVersion?: string;
    /**
     * The cluster identifier for this global database cluster.
     */
    globalClusterIdentifier?: string;
    /**
     * The Amazon Resource Name (ARN) to use as the primary cluster of the global database.
     */
    sourceDbClusterIdentifier?: string;
    /**
     * Specifies whether to enable storage encryption for the new global database cluster.
     */
    storageEncrypted?: boolean | cdk.IResolvable;
    /**
     * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnGlobalClusterProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnGlobalCluster {
    /**
     * The writer endpoint for the new global database cluster.
     *
     * This endpoint always points to the writer DB instance in the current primary cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-globalcluster-globalendpoint.html
     */
    interface GlobalEndpointProperty {
        /**
         * The writer endpoint for the new global database cluster.
         *
         * This endpoint always points to the writer DB instance in the current primary cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-globalcluster-globalendpoint.html#cfn-rds-globalcluster-globalendpoint-address
         */
        readonly address?: string;
    }
}
/**
 * Properties for defining a `CfnGlobalCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html
 */
export interface CfnGlobalClusterProps {
    /**
     * Specifies whether to enable deletion protection for the new global database cluster.
     *
     * The global database can't be deleted when deletion protection is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-deletionprotection
     */
    readonly deletionProtection?: boolean | cdk.IResolvable;
    /**
     * The database engine to use for this global database cluster.
     *
     * Valid Values: `aurora-mysql | aurora-postgresql`
     *
     * Constraints:
     *
     * - Can't be specified if `SourceDBClusterIdentifier` is specified. In this case, Amazon Aurora uses the engine of the source DB cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-engine
     */
    readonly engine?: string;
    /**
     * The life cycle type for this global database cluster.
     *
     * > By default, this value is set to `open-source-rds-extended-support` , which enrolls your global cluster into Amazon RDS Extended Support. At the end of standard support, you can avoid charges for Extended Support by setting the value to `open-source-rds-extended-support-disabled` . In this case, creating the global cluster will fail if the DB major version is past its end of standard support date.
     *
     * This setting only applies to Aurora PostgreSQL-based global databases.
     *
     * You can use this setting to enroll your global cluster into Amazon RDS Extended Support. With RDS Extended Support, you can run the selected major engine version on your global cluster past the end of standard support for that engine version. For more information, see [Using Amazon RDS Extended Support](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/extended-support.html) in the *Amazon Aurora User Guide* .
     *
     * Valid Values: `open-source-rds-extended-support | open-source-rds-extended-support-disabled`
     *
     * Default: `open-source-rds-extended-support`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-enginelifecyclesupport
     */
    readonly engineLifecycleSupport?: string;
    /**
     * The engine version to use for this global database cluster.
     *
     * Constraints:
     *
     * - Can't be specified if `SourceDBClusterIdentifier` is specified. In this case, Amazon Aurora uses the engine version of the source DB cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-engineversion
     */
    readonly engineVersion?: string;
    /**
     * The cluster identifier for this global database cluster.
     *
     * This parameter is stored as a lowercase string.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-globalclusteridentifier
     */
    readonly globalClusterIdentifier?: string;
    /**
     * The Amazon Resource Name (ARN) to use as the primary cluster of the global database.
     *
     * If you provide a value for this parameter, don't specify values for the following settings because Amazon Aurora uses the values from the specified source DB cluster:
     *
     * - `DatabaseName`
     * - `Engine`
     * - `EngineVersion`
     * - `StorageEncrypted`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-sourcedbclusteridentifier
     */
    readonly sourceDbClusterIdentifier?: string;
    /**
     * Specifies whether to enable storage encryption for the new global database cluster.
     *
     * Constraints:
     *
     * - Can't be specified if `SourceDBClusterIdentifier` is specified. In this case, Amazon Aurora uses the setting from the source DB cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-storageencrypted
     */
    readonly storageEncrypted?: boolean | cdk.IResolvable;
    /**
     * Metadata assigned to an Amazon RDS resource consisting of a key-value pair.
     *
     * For more information, see [Tagging Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide* or [Tagging Amazon Aurora and Amazon RDS resources](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.html) in the *Amazon Aurora User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-globalcluster.html#cfn-rds-globalcluster-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::RDS::OptionGroup` resource creates or updates an option group, to enable and configure features that are specific to a particular DB engine.
 *
 * @cloudformationResource AWS::RDS::OptionGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-optiongroup.html
 */
export declare class CfnOptionGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnOptionGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnOptionGroup;
    /**
     * Specifies the name of the engine that this option group should be associated with.
     */
    engineName: string;
    /**
     * Specifies the major version of the engine that this option group should be associated with.
     */
    majorEngineVersion: string;
    /**
     * A list of all available options for an option group.
     */
    optionConfigurations?: Array<cdk.IResolvable | CfnOptionGroup.OptionConfigurationProperty> | cdk.IResolvable;
    /**
     * The description of the option group.
     */
    optionGroupDescription: string;
    /**
     * The name of the option group to be created.
     */
    optionGroupName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags to assign to the option group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnOptionGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnOptionGroup {
    /**
     * The `OptionConfiguration` property type specifies an individual option, and its settings, within an `AWS::RDS::OptionGroup` resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionconfiguration.html
     */
    interface OptionConfigurationProperty {
        /**
         * A list of DB security groups used for this option.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionconfiguration.html#cfn-rds-optiongroup-optionconfiguration-dbsecuritygroupmemberships
         */
        readonly dbSecurityGroupMemberships?: Array<string>;
        /**
         * The configuration of options to include in a group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionconfiguration.html#cfn-rds-optiongroup-optionconfiguration-optionname
         */
        readonly optionName: string;
        /**
         * The option settings to include in an option group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionconfiguration.html#cfn-rds-optiongroup-optionconfiguration-optionsettings
         */
        readonly optionSettings?: Array<cdk.IResolvable | CfnOptionGroup.OptionSettingProperty> | cdk.IResolvable;
        /**
         * The version for the option.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionconfiguration.html#cfn-rds-optiongroup-optionconfiguration-optionversion
         */
        readonly optionVersion?: string;
        /**
         * The optional port for the option.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionconfiguration.html#cfn-rds-optiongroup-optionconfiguration-port
         */
        readonly port?: number;
        /**
         * A list of VPC security group names used for this option.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionconfiguration.html#cfn-rds-optiongroup-optionconfiguration-vpcsecuritygroupmemberships
         */
        readonly vpcSecurityGroupMemberships?: Array<string>;
    }
    /**
     * The `OptionSetting` property type specifies the value for an option within an `OptionSetting` property.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionsetting.html
     */
    interface OptionSettingProperty {
        /**
         * The name of the option that has settings that you can set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionsetting.html#cfn-rds-optiongroup-optionsetting-name
         */
        readonly name?: string;
        /**
         * The current value of the option setting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-optiongroup-optionsetting.html#cfn-rds-optiongroup-optionsetting-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnOptionGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-optiongroup.html
 */
export interface CfnOptionGroupProps {
    /**
     * Specifies the name of the engine that this option group should be associated with.
     *
     * Valid Values:
     *
     * - `mariadb`
     * - `mysql`
     * - `oracle-ee`
     * - `oracle-ee-cdb`
     * - `oracle-se2`
     * - `oracle-se2-cdb`
     * - `postgres`
     * - `sqlserver-ee`
     * - `sqlserver-se`
     * - `sqlserver-ex`
     * - `sqlserver-web`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-optiongroup.html#cfn-rds-optiongroup-enginename
     */
    readonly engineName: string;
    /**
     * Specifies the major version of the engine that this option group should be associated with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-optiongroup.html#cfn-rds-optiongroup-majorengineversion
     */
    readonly majorEngineVersion: string;
    /**
     * A list of all available options for an option group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-optiongroup.html#cfn-rds-optiongroup-optionconfigurations
     */
    readonly optionConfigurations?: Array<cdk.IResolvable | CfnOptionGroup.OptionConfigurationProperty> | cdk.IResolvable;
    /**
     * The description of the option group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-optiongroup.html#cfn-rds-optiongroup-optiongroupdescription
     */
    readonly optionGroupDescription: string;
    /**
     * The name of the option group to be created.
     *
     * Constraints:
     *
     * - Must be 1 to 255 letters, numbers, or hyphens
     * - First character must be a letter
     * - Can't end with a hyphen or contain two consecutive hyphens
     *
     * Example: `myoptiongroup`
     *
     * If you don't specify a value for `OptionGroupName` property, a name is automatically created for the option group.
     *
     * > This value is stored as a lowercase string.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-optiongroup.html#cfn-rds-optiongroup-optiongroupname
     */
    readonly optionGroupName?: string;
    /**
     * Tags to assign to the option group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-optiongroup.html#cfn-rds-optiongroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a new DB shard group for Aurora Limitless Database.
 *
 * You must enable Aurora Limitless Database to create a DB shard group.
 *
 * Valid for: Aurora DB clusters only
 *
 * @cloudformationResource AWS::RDS::DBShardGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbshardgroup.html
 */
export declare class CfnDBShardGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDBShardGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDBShardGroup;
    /**
     * The AWS Region -unique, immutable identifier for the DB shard group.
     *
     * @cloudformationAttribute DBShardGroupResourceId
     */
    readonly attrDbShardGroupResourceId: string;
    /**
     * This data type represents the information you need to connect to an Amazon RDS DB instance. This data type is used as a response element in the following actions:
     *
     * - `CreateDBInstance`
     * - `DescribeDBInstances`
     * - `DeleteDBInstance`
     *
     * For the data structure that represents Amazon Aurora DB cluster endpoints, see `DBClusterEndpoint` .
     *
     * @cloudformationAttribute Endpoint
     */
    readonly attrEndpoint: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Specifies whether to create standby DB shard groups for the DB shard group. Valid values are the following:.
     */
    computeRedundancy?: number;
    /**
     * The name of the primary DB cluster for the DB shard group.
     */
    dbClusterIdentifier: string;
    /**
     * The name of the DB shard group.
     */
    dbShardGroupIdentifier?: string;
    /**
     * The maximum capacity of the DB shard group in Aurora capacity units (ACUs).
     */
    maxAcu: number;
    /**
     * The minimum capacity of the DB shard group in Aurora capacity units (ACUs).
     */
    minAcu?: number;
    /**
     * Specifies whether the DB shard group is publicly accessible.
     */
    publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * An optional set of key-value pairs to associate arbitrary data of your choosing with the DB shard group.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDBShardGroupProps);
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
 * Properties for defining a `CfnDBShardGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbshardgroup.html
 */
export interface CfnDBShardGroupProps {
    /**
     * Specifies whether to create standby DB shard groups for the DB shard group. Valid values are the following:.
     *
     * - 0 - Creates a DB shard group without a standby DB shard group. This is the default value.
     * - 1 - Creates a DB shard group with a standby DB shard group in a different Availability Zone (AZ).
     * - 2 - Creates a DB shard group with two standby DB shard groups in two different AZs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbshardgroup.html#cfn-rds-dbshardgroup-computeredundancy
     */
    readonly computeRedundancy?: number;
    /**
     * The name of the primary DB cluster for the DB shard group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbshardgroup.html#cfn-rds-dbshardgroup-dbclusteridentifier
     */
    readonly dbClusterIdentifier: string;
    /**
     * The name of the DB shard group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbshardgroup.html#cfn-rds-dbshardgroup-dbshardgroupidentifier
     */
    readonly dbShardGroupIdentifier?: string;
    /**
     * The maximum capacity of the DB shard group in Aurora capacity units (ACUs).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbshardgroup.html#cfn-rds-dbshardgroup-maxacu
     */
    readonly maxAcu: number;
    /**
     * The minimum capacity of the DB shard group in Aurora capacity units (ACUs).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbshardgroup.html#cfn-rds-dbshardgroup-minacu
     */
    readonly minAcu?: number;
    /**
     * Specifies whether the DB shard group is publicly accessible.
     *
     * When the DB shard group is publicly accessible, its Domain Name System (DNS) endpoint resolves to the private IP address from within the DB shard group's virtual private cloud (VPC). It resolves to the public IP address from outside of the DB shard group's VPC. Access to the DB shard group is ultimately controlled by the security group it uses. That public access is not permitted if the security group assigned to the DB shard group doesn't permit it.
     *
     * When the DB shard group isn't publicly accessible, it is an internal DB shard group with a DNS name that resolves to a private IP address.
     *
     * Default: The default behavior varies depending on whether `DBSubnetGroupName` is specified.
     *
     * If `DBSubnetGroupName` isn't specified, and `PubliclyAccessible` isn't specified, the following applies:
     *
     * - If the default VPC in the target Region doesn’t have an internet gateway attached to it, the DB shard group is private.
     * - If the default VPC in the target Region has an internet gateway attached to it, the DB shard group is public.
     *
     * If `DBSubnetGroupName` is specified, and `PubliclyAccessible` isn't specified, the following applies:
     *
     * - If the subnets are part of a VPC that doesn’t have an internet gateway attached to it, the DB shard group is private.
     * - If the subnets are part of a VPC that has an internet gateway attached to it, the DB shard group is public.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbshardgroup.html#cfn-rds-dbshardgroup-publiclyaccessible
     */
    readonly publiclyAccessible?: boolean | cdk.IResolvable;
    /**
     * An optional set of key-value pairs to associate arbitrary data of your choosing with the DB shard group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbshardgroup.html#cfn-rds-dbshardgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * A zero-ETL integration with Amazon Redshift.
 *
 * @cloudformationResource AWS::RDS::Integration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-integration.html
 */
export declare class CfnIntegration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIntegration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIntegration;
    /**
     * The time when the integration was created, in Universal Coordinated Time (UTC).
     *
     * @cloudformationAttribute CreateTime
     */
    readonly attrCreateTime: string;
    /**
     * The ARN of the integration.
     *
     * @cloudformationAttribute IntegrationArn
     */
    readonly attrIntegrationArn: string;
    /**
     * An optional set of non-secret key–value pairs that contains additional contextual information about the data.
     */
    additionalEncryptionContext?: cdk.IResolvable | Record<string, string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Data filters for the integration.
     */
    dataFilter?: string;
    /**
     * A description of the integration.
     */
    description?: string;
    /**
     * The name of the integration.
     */
    integrationName?: string;
    /**
     * The AWS Key Management System ( AWS KMS) key identifier for the key to use to encrypt the integration.
     */
    kmsKeyId?: string;
    /**
     * The Amazon Resource Name (ARN) of the database to use as the source for replication.
     */
    sourceArn: string;
    /**
     * An optional array of key-value pairs to apply to this integration.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The ARN of the Redshift data warehouse to use as the target for replication.
     */
    targetArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIntegrationProps);
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
 * Properties for defining a `CfnIntegration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-integration.html
 */
export interface CfnIntegrationProps {
    /**
     * An optional set of non-secret key–value pairs that contains additional contextual information about the data.
     *
     * For more information, see [Encryption context](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context) in the *AWS Key Management Service Developer Guide* .
     *
     * You can only include this parameter if you specify the `KMSKeyId` parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-integration.html#cfn-rds-integration-additionalencryptioncontext
     */
    readonly additionalEncryptionContext?: cdk.IResolvable | Record<string, string>;
    /**
     * Data filters for the integration.
     *
     * These filters determine which tables from the source database are sent to the target Amazon Redshift data warehouse.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-integration.html#cfn-rds-integration-datafilter
     */
    readonly dataFilter?: string;
    /**
     * A description of the integration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-integration.html#cfn-rds-integration-description
     */
    readonly description?: string;
    /**
     * The name of the integration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-integration.html#cfn-rds-integration-integrationname
     */
    readonly integrationName?: string;
    /**
     * The AWS Key Management System ( AWS KMS) key identifier for the key to use to encrypt the integration.
     *
     * If you don't specify an encryption key, RDS uses a default AWS owned key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-integration.html#cfn-rds-integration-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The Amazon Resource Name (ARN) of the database to use as the source for replication.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-integration.html#cfn-rds-integration-sourcearn
     */
    readonly sourceArn: string;
    /**
     * An optional array of key-value pairs to apply to this integration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-integration.html#cfn-rds-integration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ARN of the Redshift data warehouse to use as the target for replication.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-integration.html#cfn-rds-integration-targetarn
     */
    readonly targetArn: string;
}
