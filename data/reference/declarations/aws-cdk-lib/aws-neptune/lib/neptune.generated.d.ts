import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::Neptune::DBCluster` resource creates an Amazon Neptune DB cluster. Neptune is a fully managed graph database.
 *
 * > Currently, you can create this resource only in AWS Regions in which Amazon Neptune is supported.
 *
 * If no `DeletionPolicy` is set for `AWS::Neptune::DBCluster` resources, the default deletion behavior is that the entire volume will be deleted without a snapshot. To retain a backup of the volume, the `DeletionPolicy` should be set to `Snapshot` . For more information about how AWS CloudFormation deletes resources, see [DeletionPolicy Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-deletionpolicy.html) .
 *
 * You can use `AWS::Neptune::DBCluster.DeletionProtection` to help guard against unintended deletion of your DB cluster.
 *
 * @cloudformationResource AWS::Neptune::DBCluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html
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
     * The resource id for the DB cluster. For example: `cluster-ABCD1234EFGH5678IJKL90MNOP` . The cluster ID uniquely identifies the cluster and is used in things like IAM authentication policies.
     *
     * @cloudformationAttribute ClusterResourceId
     */
    readonly attrClusterResourceId: string;
    /**
     * The connection endpoint for the DB cluster. For example: `mystack-mydbcluster-1apw1j4phylrk.cg034hpkmmjt.us-east-2.rds.amazonaws.com`
     *
     * @cloudformationAttribute Endpoint
     */
    readonly attrEndpoint: string;
    /**
     * The port number on which the DB instances in the DB cluster accept connections.
     *
     * @cloudformationAttribute Port
     */
    readonly attrPort: string;
    /**
     * The reader endpoint for the DB cluster. For example: `mystack-mydbcluster-ro-1apw1j4phylrk.cg034hpkmmjt.us-east-2.rds.amazonaws.com`
     *
     * @cloudformationAttribute ReadEndpoint
     */
    readonly attrReadEndpoint: string;
    /**
     * Provides a list of the Amazon Identity and Access Management (IAM) roles that are associated with the DB cluster.
     */
    associatedRoles?: Array<CfnDBCluster.DBClusterRoleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in.
     */
    availabilityZones?: Array<string>;
    /**
     * Specifies the number of days for which automatic DB snapshots are retained.
     */
    backupRetentionPeriod?: number;
    /**
     * *If set to `true` , tags are copied to any snapshot of the DB cluster that is created.*.
     */
    copyTagsToSnapshot?: boolean | cdk.IResolvable;
    /**
     * Contains a user-supplied DB cluster identifier.
     */
    dbClusterIdentifier?: string;
    /**
     * Provides the name of the DB cluster parameter group.
     */
    dbClusterParameterGroupName?: string;
    /**
     * The name of the DB parameter group to apply to all instances of the DB cluster.
     */
    dbInstanceParameterGroupName?: string;
    /**
     * The port number on which the DB instances in the DB cluster accept connections.
     */
    dbPort?: number;
    /**
     * Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.
     */
    dbSubnetGroupName?: string;
    /**
     * Indicates whether or not the DB cluster has deletion protection enabled.
     */
    deletionProtection?: boolean | cdk.IResolvable;
    /**
     * Specifies a list of log types that are enabled for export to CloudWatch Logs.
     */
    enableCloudwatchLogsExports?: Array<string>;
    /**
     * Indicates the database engine version.
     */
    engineVersion?: string;
    /**
     * True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.
     */
    iamAuthEnabled?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that is used to encrypt the database instances in the DB cluster, such as `arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef` .
     */
    kmsKeyId?: string;
    /**
     * Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the `BackupRetentionPeriod` .
     */
    preferredBackupWindow?: string;
    /**
     * Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     */
    preferredMaintenanceWindow?: string;
    /**
     * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
     */
    restoreToTime?: string;
    /**
     * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
     */
    restoreType?: string;
    /**
     * Contains the scaling configuration of an Neptune Serverless DB cluster.
     */
    serverlessScalingConfiguration?: cdk.IResolvable | CfnDBCluster.ServerlessScalingConfigurationProperty;
    /**
     * Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot.
     */
    snapshotIdentifier?: string;
    /**
     * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
     */
    sourceDbClusterIdentifier?: string;
    /**
     * Indicates whether the DB cluster is encrypted.
     */
    storageEncrypted?: boolean | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags assigned to this cluster.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
     */
    useLatestRestorableTime?: boolean | cdk.IResolvable;
    /**
     * Provides a list of VPC security groups that the DB cluster belongs to.
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
     * Describes an Amazon Identity and Access Management (IAM) role that is associated with a DB cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbcluster-dbclusterrole.html
     */
    interface DBClusterRoleProperty {
        /**
         * The name of the feature associated with the Amazon Identity and Access Management (IAM) role.
         *
         * For the list of supported feature names, see [DescribeDBEngineVersions](https://docs.aws.amazon.com/neptune/latest/userguide/api-other-apis.html#DescribeDBEngineVersions) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbcluster-dbclusterrole.html#cfn-neptune-dbcluster-dbclusterrole-featurename
         */
        readonly featureName?: string;
        /**
         * The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbcluster-dbclusterrole.html#cfn-neptune-dbcluster-dbclusterrole-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * Contains the scaling configuration of a Neptune Serverless DB cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbcluster-serverlessscalingconfiguration.html
     */
    interface ServerlessScalingConfigurationProperty {
        /**
         * The maximum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster.
         *
         * You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbcluster-serverlessscalingconfiguration.html#cfn-neptune-dbcluster-serverlessscalingconfiguration-maxcapacity
         */
        readonly maxCapacity: number;
        /**
         * The minimum number of Neptune capacity units (NCUs) for a DB instance in a Neptune Serverless cluster.
         *
         * You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-neptune-dbcluster-serverlessscalingconfiguration.html#cfn-neptune-dbcluster-serverlessscalingconfiguration-mincapacity
         */
        readonly minCapacity: number;
    }
}
/**
 * Properties for defining a `CfnDBCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html
 */
export interface CfnDBClusterProps {
    /**
     * Provides a list of the Amazon Identity and Access Management (IAM) roles that are associated with the DB cluster.
     *
     * IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other Amazon services on your behalf.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-associatedroles
     */
    readonly associatedRoles?: Array<CfnDBCluster.DBClusterRoleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-availabilityzones
     */
    readonly availabilityZones?: Array<string>;
    /**
     * Specifies the number of days for which automatic DB snapshots are retained.
     *
     * An update may require some interruption. See [ModifyDBInstance](https://docs.aws.amazon.com/neptune/latest/userguide/api-instances.html#ModifyDBInstance) in the Amazon Neptune User Guide for more information.
     *
     * @default - 1
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-backupretentionperiod
     */
    readonly backupRetentionPeriod?: number;
    /**
     * *If set to `true` , tags are copied to any snapshot of the DB cluster that is created.*.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-copytagstosnapshot
     */
    readonly copyTagsToSnapshot?: boolean | cdk.IResolvable;
    /**
     * Contains a user-supplied DB cluster identifier.
     *
     * This identifier is the unique key that identifies a DB cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-dbclusteridentifier
     */
    readonly dbClusterIdentifier?: string;
    /**
     * Provides the name of the DB cluster parameter group.
     *
     * An update may require some interruption. See [ModifyDBInstance](https://docs.aws.amazon.com/neptune/latest/userguide/api-instances.html#ModifyDBInstance) in the Amazon Neptune User Guide for more information.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-dbclusterparametergroupname
     */
    readonly dbClusterParameterGroupName?: string;
    /**
     * The name of the DB parameter group to apply to all instances of the DB cluster.
     *
     * Used only in case of a major engine version upgrade request
     *
     * Note that when you apply a parameter group using `DBInstanceParameterGroupName` , parameter changes are applied immediately, not during the next maintenance window.
     *
     * **Constraints** - The DB parameter group must be in the same DB parameter group family as the target DB cluster version.
     * - The `DBInstanceParameterGroupName` parameter is only valid for major engine version upgrades.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-dbinstanceparametergroupname
     */
    readonly dbInstanceParameterGroupName?: string;
    /**
     * The port number on which the DB instances in the DB cluster accept connections.
     *
     * If not specified, the default port used is `8182` .
     *
     * > The `Port` property will soon be deprecated. Please update existing templates to use the new `DBPort` property that has the same functionality.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-dbport
     */
    readonly dbPort?: number;
    /**
     * Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-dbsubnetgroupname
     */
    readonly dbSubnetGroupName?: string;
    /**
     * Indicates whether or not the DB cluster has deletion protection enabled.
     *
     * The database can't be deleted when deletion protection is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-deletionprotection
     */
    readonly deletionProtection?: boolean | cdk.IResolvable;
    /**
     * Specifies a list of log types that are enabled for export to CloudWatch Logs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-enablecloudwatchlogsexports
     */
    readonly enableCloudwatchLogsExports?: Array<string>;
    /**
     * Indicates the database engine version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-engineversion
     */
    readonly engineVersion?: string;
    /**
     * True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-iamauthenabled
     */
    readonly iamAuthEnabled?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the KMS key that is used to encrypt the database instances in the DB cluster, such as `arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef` .
     *
     * If you enable the `StorageEncrypted` property but don't specify this property, the default KMS key is used. If you specify this property, you must set the `StorageEncrypted` property to `true` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the `BackupRetentionPeriod` .
     *
     * An update may require some interruption.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-preferredbackupwindow
     */
    readonly preferredBackupWindow?: string;
    /**
     * Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-preferredmaintenancewindow
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
     *
     * If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.
     *
     * If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-restoretotime
     */
    readonly restoreToTime?: string;
    /**
     * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
     *
     * If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.
     *
     * If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
     *
     * @default - "full-copy"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-restoretype
     */
    readonly restoreType?: string;
    /**
     * Contains the scaling configuration of an Neptune Serverless DB cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-serverlessscalingconfiguration
     */
    readonly serverlessScalingConfiguration?: cdk.IResolvable | CfnDBCluster.ServerlessScalingConfigurationProperty;
    /**
     * Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot.
     *
     * After you restore a DB cluster using a `SnapshotIdentifier` , you must specify the same `SnapshotIdentifier` for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed.
     *
     * However, if you don't specify the `SnapshotIdentifier` , an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the snapshot specified by the `SnapshotIdentifier` , and the original DB cluster is deleted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-snapshotidentifier
     */
    readonly snapshotIdentifier?: string;
    /**
     * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
     *
     * If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.
     *
     * If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-sourcedbclusteridentifier
     */
    readonly sourceDbClusterIdentifier?: string;
    /**
     * Indicates whether the DB cluster is encrypted.
     *
     * If you specify the `KmsKeyId` property, then you must enable encryption and set this property to `true` .
     *
     * If you enable the `StorageEncrypted` property but don't specify the `KmsKeyId` property, then the default KMS key is used. If you specify the `KmsKeyId` property, then that KMS key is used to encrypt the database instances in the DB cluster.
     *
     * If you specify the `SourceDBClusterIdentifier` property, and don't specify this property or disable it, the value is inherited from the source DB cluster. If the source DB cluster is encrypted, the `KmsKeyId` property from the source cluster is used.
     *
     * If you specify the `DBSnapshotIdentifier` and don't specify this property or disable it, the value is inherited from the snapshot and the specified `KmsKeyId` property from the snapshot is used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-storageencrypted
     */
    readonly storageEncrypted?: boolean | cdk.IResolvable;
    /**
     * The tags assigned to this cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Creates a new DB cluster from a DB snapshot or DB cluster snapshot.
     *
     * If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.
     *
     * If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-uselatestrestorabletime
     */
    readonly useLatestRestorableTime?: boolean | cdk.IResolvable;
    /**
     * Provides a list of VPC security groups that the DB cluster belongs to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbcluster.html#cfn-neptune-dbcluster-vpcsecuritygroupids
     */
    readonly vpcSecurityGroupIds?: Array<string>;
}
/**
 * The `AWS::Neptune::DBClusterParameterGroup` resource creates a new Amazon Neptune DB cluster parameter group.
 *
 * > Applying a parameter group to a DB cluster might require instances to reboot, resulting in a database outage while the instances reboot. > If you provide a custom `DBClusterParameterGroup` that you associate with the `DBCluster` , it is best to specify an `EngineVersion` property in the `DBCluster` . That `EngineVersion` needs to be compatible with the value of the `Family` property in the `DBClusterParameterGroup` .
 *
 * @cloudformationResource AWS::Neptune::DBClusterParameterGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html
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
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Provides the customer-specified description for this DB cluster parameter group.
     */
    description: string;
    /**
     * Must be `neptune1` for engine versions prior to [1.2.0.0](https://docs.aws.amazon.com/neptune/latest/userguide/engine-releases-1.2.0.0.html) , or `neptune1.2` for engine version `1.2.0.0` and higher.
     */
    family: string;
    /**
     * Provides the name of the DB cluster parameter group.
     */
    name?: string;
    /**
     * The parameters to set for this DB cluster parameter group.
     */
    parameters: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags that you want to attach to this parameter group.
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html
 */
export interface CfnDBClusterParameterGroupProps {
    /**
     * Provides the customer-specified description for this DB cluster parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-description
     */
    readonly description: string;
    /**
     * Must be `neptune1` for engine versions prior to [1.2.0.0](https://docs.aws.amazon.com/neptune/latest/userguide/engine-releases-1.2.0.0.html) , or `neptune1.2` for engine version `1.2.0.0` and higher.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-family
     */
    readonly family: string;
    /**
     * Provides the name of the DB cluster parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-name
     */
    readonly name?: string;
    /**
     * The parameters to set for this DB cluster parameter group.
     *
     * The parameters are expressed as a JSON object consisting of key-value pairs.
     *
     * If you update the parameters, some interruption may occur depending on which parameters you update.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-parameters
     */
    readonly parameters: any | cdk.IResolvable;
    /**
     * The tags that you want to attach to this parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbclusterparametergroup.html#cfn-neptune-dbclusterparametergroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::Neptune::DBInstance` type creates an Amazon Neptune DB instance.
 *
 * *Updating DB Instances*
 *
 * You can set a deletion policy for your DB instance to control how AWS CloudFormation handles the instance when the stack is deleted. For Neptune DB instances, you can choose to *retain* the instance, to *delete* the instance, or to *create a snapshot* of the instance. The default AWS CloudFormation behavior depends on the `DBClusterIdentifier` property:
 *
 * - For `AWS::Neptune::DBInstance` resources that don't specify the `DBClusterIdentifier` property, AWS CloudFormation saves a snapshot of the DB instance.
 * - For `AWS::Neptune::DBInstance` resources that do specify the `DBClusterIdentifier` property, AWS CloudFormation deletes the DB instance.
 *
 * *Deleting DB Instances*
 *
 * > If a DB instance is deleted or replaced during an update, AWS CloudFormation deletes all automated snapshots. However, it retains manual DB snapshots. During an update that requires replacement, you can apply a stack policy to prevent DB instances from being replaced.
 *
 * When properties labeled *Update requires: Replacement* are updated, AWS CloudFormation first creates a replacement DB instance, changes references from other dependent resources to point to the replacement DB instance, and finally deletes the old DB instance.
 *
 * > We highly recommend that you take a snapshot of the database before updating the stack. If you don't, you lose the data when AWS CloudFormation replaces your DB instance. To preserve your data, perform the following procedure:
 * >
 * > - Deactivate any applications that are using the DB instance so that there's no activity on the DB instance.
 * > - Create a snapshot of the DB instance.
 * > - If you want to restore your instance using a DB snapshot, modify the updated template with your DB instance changes and add the `DBSnapshotIdentifier` property with the ID of the DB snapshot that you want to use.
 * > - Update the stack.
 *
 * @cloudformationResource AWS::Neptune::DBInstance
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html
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
     * The connection endpoint for the database. For example: `mystack-mydb-1apw1j4phylrk.cg034hpkmmjt.us-east-2.rds.amazonaws.com` .
     *
     * @cloudformationAttribute Endpoint
     */
    readonly attrEndpoint: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The port number on which the database accepts connections. For example: `8182` .
     *
     * @cloudformationAttribute Port
     */
    readonly attrPort: string;
    /**
     * Indicates that major version upgrades are allowed.
     */
    allowMajorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * Indicates that minor version patches are applied automatically.
     */
    autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * Specifies the name of the Availability Zone the DB instance is located in.
     */
    availabilityZone?: string;
    /**
     * If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.
     */
    dbClusterIdentifier?: string;
    /**
     * Contains the name of the compute and memory capacity class of the DB instance.
     */
    dbInstanceClass: string;
    /**
     * Contains a user-supplied database identifier.
     */
    dbInstanceIdentifier?: string;
    /**
     * The name of an existing DB parameter group or a reference to an AWS::Neptune::DBParameterGroup resource created in the template.
     */
    dbParameterGroupName?: string;
    /**
     * This parameter is not supported.
     */
    dbSnapshotIdentifier?: string;
    /**
     * A DB subnet group to associate with the DB instance.
     */
    dbSubnetGroupName?: string;
    /**
     * Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     */
    preferredMaintenanceWindow?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An arbitrary set of tags (key-value pairs) for this DB instance.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDBInstanceProps);
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
 * Properties for defining a `CfnDBInstance`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html
 */
export interface CfnDBInstanceProps {
    /**
     * Indicates that major version upgrades are allowed.
     *
     * Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. This parameter must be set to true when specifying a value for the EngineVersion parameter that is a different major version than the DB instance's current version.
     *
     * When you change this parameter for an existing DB cluster, CloudFormation will replace your existing DB cluster with a new, empty one that uses the engine version you specified.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html#cfn-neptune-dbinstance-allowmajorversionupgrade
     */
    readonly allowMajorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * Indicates that minor version patches are applied automatically.
     *
     * When updating this property, some interruptions may occur.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html#cfn-neptune-dbinstance-autominorversionupgrade
     */
    readonly autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * Specifies the name of the Availability Zone the DB instance is located in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html#cfn-neptune-dbinstance-availabilityzone
     */
    readonly availabilityZone?: string;
    /**
     * If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html#cfn-neptune-dbinstance-dbclusteridentifier
     */
    readonly dbClusterIdentifier?: string;
    /**
     * Contains the name of the compute and memory capacity class of the DB instance.
     *
     * If you update this property, some interruptions may occur.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html#cfn-neptune-dbinstance-dbinstanceclass
     */
    readonly dbInstanceClass: string;
    /**
     * Contains a user-supplied database identifier.
     *
     * This identifier is the unique key that identifies a DB instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html#cfn-neptune-dbinstance-dbinstanceidentifier
     */
    readonly dbInstanceIdentifier?: string;
    /**
     * The name of an existing DB parameter group or a reference to an AWS::Neptune::DBParameterGroup resource created in the template.
     *
     * If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html#cfn-neptune-dbinstance-dbparametergroupname
     */
    readonly dbParameterGroupName?: string;
    /**
     * This parameter is not supported.
     *
     * `AWS::Neptune::DBInstance` does not support restoring from snapshots.
     *
     * `AWS::Neptune::DBCluster` does support restoring from snapshots.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html#cfn-neptune-dbinstance-dbsnapshotidentifier
     */
    readonly dbSnapshotIdentifier?: string;
    /**
     * A DB subnet group to associate with the DB instance.
     *
     * If you update this value, the new subnet group must be a subnet group in a new virtual private cloud (VPC).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html#cfn-neptune-dbinstance-dbsubnetgroupname
     */
    readonly dbSubnetGroupName?: string;
    /**
     * Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html#cfn-neptune-dbinstance-preferredmaintenancewindow
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * An arbitrary set of tags (key-value pairs) for this DB instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbinstance.html#cfn-neptune-dbinstance-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * `AWS::Neptune::DBParameterGroup` creates a new DB parameter group.
 *
 * This type can be declared in a template and referenced in the `DBParameterGroupName` parameter of `AWS::Neptune::DBInstance` .
 *
 * > Applying a parameter group to a DB instance might require the instance to reboot, resulting in a database outage for the duration of the reboot. > If you provide a custom `DBParameterGroup` that you associate with `DBInstance` , it is best to specify an `EngineVersion` property in `DBCluster` . That `EngineVersion` needs to be compatible with the value of the `Family` property in the `DBParameterGroup` .
 *
 * A DB parameter group is initially created with the default parameters for the database engine used by the DB instance. To provide custom values for any of the parameters, you must modify the group after creating it using *ModifyDBParameterGroup* . Once you've created a DB parameter group, you need to associate it with your DB instance using *ModifyDBInstance* . When you associate a new DB parameter group with a running DB instance, you need to reboot the DB instance without failover for the new DB parameter group and associated settings to take effect.
 *
 * > After you create a DB parameter group, you should wait at least 5 minutes before creating your first DB instance that uses that DB parameter group as the default parameter group. This allows Amazon Neptune to fully complete the create action before the parameter group is used as the default for a new DB instance. This is especially important for parameters that are critical when creating the default database for a DB instance, such as the character set for the default database defined by the `character_set_database` parameter. You can use the *Parameter Groups* option of the Amazon Neptune console or the *DescribeDBParameters* command to verify that your DB parameter group has been created or modified.
 *
 * @cloudformationResource AWS::Neptune::DBParameterGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html
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
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Provides the customer-specified description for this DB parameter group.
     */
    description: string;
    /**
     * Must be `neptune1` for engine versions prior to [1.2.0.0](https://docs.aws.amazon.com/neptune/latest/userguide/engine-releases-1.2.0.0.html) , or `neptune1.2` for engine version `1.2.0.0` and higher.
     */
    family: string;
    /**
     * Provides the name of the DB parameter group.
     */
    name?: string;
    /**
     * The parameters to set for this DB parameter group.
     */
    parameters: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags that you want to attach to this parameter group.
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html
 */
export interface CfnDBParameterGroupProps {
    /**
     * Provides the customer-specified description for this DB parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html#cfn-neptune-dbparametergroup-description
     */
    readonly description: string;
    /**
     * Must be `neptune1` for engine versions prior to [1.2.0.0](https://docs.aws.amazon.com/neptune/latest/userguide/engine-releases-1.2.0.0.html) , or `neptune1.2` for engine version `1.2.0.0` and higher.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html#cfn-neptune-dbparametergroup-family
     */
    readonly family: string;
    /**
     * Provides the name of the DB parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html#cfn-neptune-dbparametergroup-name
     */
    readonly name?: string;
    /**
     * The parameters to set for this DB parameter group.
     *
     * The parameters are expressed as a JSON object consisting of key-value pairs.
     *
     * Changes to dynamic parameters are applied immediately. During an update, if you have static parameters (whether they were changed or not), it triggers AWS CloudFormation to reboot the associated DB instance without failover.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html#cfn-neptune-dbparametergroup-parameters
     */
    readonly parameters: any | cdk.IResolvable;
    /**
     * The tags that you want to attach to this parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbparametergroup.html#cfn-neptune-dbparametergroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::Neptune::DBSubnetGroup` type creates an Amazon Neptune DB subnet group.
 *
 * Subnet groups must contain at least two subnets in two different Availability Zones in the same AWS Region.
 *
 * @cloudformationResource AWS::Neptune::DBSubnetGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html
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
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Provides the description of the DB subnet group.
     */
    dbSubnetGroupDescription: string;
    /**
     * The name of the DB subnet group.
     */
    dbSubnetGroupName?: string;
    /**
     * The Amazon EC2 subnet IDs for the DB subnet group.
     */
    subnetIds: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags that you want to attach to the DB subnet group.
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html
 */
export interface CfnDBSubnetGroupProps {
    /**
     * Provides the description of the DB subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html#cfn-neptune-dbsubnetgroup-dbsubnetgroupdescription
     */
    readonly dbSubnetGroupDescription: string;
    /**
     * The name of the DB subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html#cfn-neptune-dbsubnetgroup-dbsubnetgroupname
     */
    readonly dbSubnetGroupName?: string;
    /**
     * The Amazon EC2 subnet IDs for the DB subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html#cfn-neptune-dbsubnetgroup-subnetids
     */
    readonly subnetIds: Array<string>;
    /**
     * The tags that you want to attach to the DB subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-dbsubnetgroup.html#cfn-neptune-dbsubnetgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates an event notification subscription.
 *
 * This action requires a topic ARN (Amazon Resource Name) created by either the Neptune console, the SNS console, or the SNS API. To obtain an ARN with SNS, you must create a topic in Amazon SNS and subscribe to the topic. The ARN is displayed in the SNS console.
 *
 * You can specify the type of source (SourceType) you want to be notified of, provide a list of Neptune sources (SourceIds) that triggers the events, and provide a list of event categories (EventCategories) for events you want to be notified of. For example, you can specify SourceType = db-instance, SourceIds = mydbinstance1, mydbinstance2 and EventCategories = Availability, Backup.
 *
 * If you specify both the SourceType and SourceIds, such as SourceType = db-instance and SourceIdentifier = myDBInstance1, you are notified of all the db-instance events for the specified source. If you specify a SourceType but do not specify a SourceIdentifier, you receive notice of the events for that source type for all your Neptune sources. If you do not specify either the SourceType nor the SourceIdentifier, you are notified of events generated from all Neptune sources belonging to your customer account.
 *
 * @cloudformationResource AWS::Neptune::EventSubscription
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-eventsubscription.html
 */
export declare class CfnEventSubscription extends cdk.CfnResource implements cdk.IInspectable {
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
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A Boolean value indicating if the subscription is enabled.
     */
    enabled?: boolean | cdk.IResolvable;
    eventCategories?: Array<string>;
    /**
     * The topic ARN of the event notification subscription.
     */
    snsTopicArn?: string;
    sourceIds?: Array<string>;
    /**
     * The source type for the event notification subscription.
     */
    sourceType?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnEventSubscriptionProps);
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-eventsubscription.html
 */
export interface CfnEventSubscriptionProps {
    /**
     * A Boolean value indicating if the subscription is enabled.
     *
     * True indicates the subscription is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-eventsubscription.html#cfn-neptune-eventsubscription-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-eventsubscription.html#cfn-neptune-eventsubscription-eventcategories
     */
    readonly eventCategories?: Array<string>;
    /**
     * The topic ARN of the event notification subscription.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-eventsubscription.html#cfn-neptune-eventsubscription-snstopicarn
     */
    readonly snsTopicArn?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-eventsubscription.html#cfn-neptune-eventsubscription-sourceids
     */
    readonly sourceIds?: Array<string>;
    /**
     * The source type for the event notification subscription.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-neptune-eventsubscription.html#cfn-neptune-eventsubscription-sourcetype
     */
    readonly sourceType?: string;
}
