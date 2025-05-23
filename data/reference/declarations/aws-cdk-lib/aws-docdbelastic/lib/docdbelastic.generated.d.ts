import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a new Amazon DocumentDB elastic cluster and returns its cluster structure.
 *
 * @cloudformationResource AWS::DocDBElastic::Cluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html
 */
export declare class CfnCluster extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCluster from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCluster;
    /**
     * @cloudformationAttribute ClusterArn
     */
    readonly attrClusterArn: string;
    /**
     * The URL used to connect to the elastic cluster.
     *
     * @cloudformationAttribute ClusterEndpoint
     */
    readonly attrClusterEndpoint: string;
    /**
     * The name of the Amazon DocumentDB elastic clusters administrator.
     */
    adminUserName: string;
    /**
     * The password for the Elastic DocumentDB cluster administrator and can contain any printable ASCII characters.
     */
    adminUserPassword?: string;
    /**
     * The authentication type used to determine where to fetch the password used for accessing the elastic cluster.
     */
    authType: string;
    /**
     * The number of days for which automatic snapshots are retained.
     */
    backupRetentionPeriod?: number;
    /**
     * The name of the new elastic cluster. This parameter is stored as a lowercase string.
     */
    clusterName: string;
    /**
     * The KMS key identifier to use to encrypt the new elastic cluster.
     */
    kmsKeyId?: string;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled, as determined by `backupRetentionPeriod` .
     */
    preferredBackupWindow?: string;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     */
    preferredMaintenanceWindow?: string;
    /**
     * The number of vCPUs assigned to each elastic cluster shard.
     */
    shardCapacity: number;
    /**
     * The number of shards assigned to the elastic cluster.
     */
    shardCount: number;
    /**
     * The number of replica instances applying to all shards in the cluster.
     */
    shardInstanceCount?: number;
    /**
     * The Amazon EC2 subnet IDs for the new elastic cluster.
     */
    subnetIds?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to be assigned to the new elastic cluster.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A list of EC2 VPC security groups to associate with the new elastic cluster.
     */
    vpcSecurityGroupIds?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnClusterProps);
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
 * Properties for defining a `CfnCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html
 */
export interface CfnClusterProps {
    /**
     * The name of the Amazon DocumentDB elastic clusters administrator.
     *
     * *Constraints* :
     *
     * - Must be from 1 to 63 letters or numbers.
     * - The first character must be a letter.
     * - Cannot be a reserved word.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-adminusername
     */
    readonly adminUserName: string;
    /**
     * The password for the Elastic DocumentDB cluster administrator and can contain any printable ASCII characters.
     *
     * *Constraints* :
     *
     * - Must contain from 8 to 100 characters.
     * - Cannot contain a forward slash (/), double quote ("), or the "at" symbol (@).
     * - A valid `AdminUserName` entry is also required.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-adminuserpassword
     */
    readonly adminUserPassword?: string;
    /**
     * The authentication type used to determine where to fetch the password used for accessing the elastic cluster.
     *
     * Valid types are `PLAIN_TEXT` or `SECRET_ARN` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-authtype
     */
    readonly authType: string;
    /**
     * The number of days for which automatic snapshots are retained.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-backupretentionperiod
     */
    readonly backupRetentionPeriod?: number;
    /**
     * The name of the new elastic cluster. This parameter is stored as a lowercase string.
     *
     * *Constraints* :
     *
     * - Must contain from 1 to 63 letters, numbers, or hyphens.
     * - The first character must be a letter.
     * - Cannot end with a hyphen or contain two consecutive hyphens.
     *
     * *Example* : `my-cluster`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-clustername
     */
    readonly clusterName: string;
    /**
     * The KMS key identifier to use to encrypt the new elastic cluster.
     *
     * The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a cluster using the same Amazon account that owns this KMS encryption key, you can use the KMS key alias instead of the ARN as the KMS encryption key.
     *
     * If an encryption key is not specified, Amazon DocumentDB uses the default encryption key that KMS creates for your account. Your account has a different default encryption key for each Amazon Region.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The daily time range during which automated backups are created if automated backups are enabled, as determined by `backupRetentionPeriod` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-preferredbackupwindow
     */
    readonly preferredBackupWindow?: string;
    /**
     * The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
     *
     * *Format* : `ddd:hh24:mi-ddd:hh24:mi`
     *
     * *Default* : a 30-minute window selected at random from an 8-hour block of time for each AWS Region , occurring on a random day of the week.
     *
     * *Valid days* : Mon, Tue, Wed, Thu, Fri, Sat, Sun
     *
     * *Constraints* : Minimum 30-minute window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-preferredmaintenancewindow
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * The number of vCPUs assigned to each elastic cluster shard.
     *
     * Maximum is 64. Allowed values are 2, 4, 8, 16, 32, 64.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-shardcapacity
     */
    readonly shardCapacity: number;
    /**
     * The number of shards assigned to the elastic cluster.
     *
     * Maximum is 32.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-shardcount
     */
    readonly shardCount: number;
    /**
     * The number of replica instances applying to all shards in the cluster.
     *
     * A `shardInstanceCount` value of 1 means there is one writer instance, and any additional instances are replicas that can be used for reads and to improve availability.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-shardinstancecount
     */
    readonly shardInstanceCount?: number;
    /**
     * The Amazon EC2 subnet IDs for the new elastic cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-subnetids
     */
    readonly subnetIds?: Array<string>;
    /**
     * The tags to be assigned to the new elastic cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A list of EC2 VPC security groups to associate with the new elastic cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-docdbelastic-cluster.html#cfn-docdbelastic-cluster-vpcsecuritygroupids
     */
    readonly vpcSecurityGroupIds?: Array<string>;
}
