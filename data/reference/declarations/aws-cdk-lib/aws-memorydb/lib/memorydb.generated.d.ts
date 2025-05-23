import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specifies an Access Control List.
 *
 * For more information, see [Authenticating users with Access Contol Lists (ACLs)](https://docs.aws.amazon.com/memorydb/latest/devguide/clusters.acls.html) .
 *
 * @cloudformationResource AWS::MemoryDB::ACL
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html
 */
export declare class CfnACL extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnACL from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnACL;
    /**
     * When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the ARN of the Access Control List, such as `arn:aws:memorydb:us-east-1:123456789012:acl/my-acl`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Indicates ACL status.
     *
     * *Valid values* : `creating` | `active` | `modifying` | `deleting`
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The name of the Access Control List.
     */
    aclName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The list of users that belong to the Access Control List.
     */
    userNames?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnACLProps);
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
 * Properties for defining a `CfnACL`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html
 */
export interface CfnACLProps {
    /**
     * The name of the Access Control List.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html#cfn-memorydb-acl-aclname
     */
    readonly aclName: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html#cfn-memorydb-acl-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The list of users that belong to the Access Control List.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-acl.html#cfn-memorydb-acl-usernames
     */
    readonly userNames?: Array<string>;
}
/**
 * Specifies a cluster .
 *
 * All nodes in the cluster run the same protocol-compliant engine software.
 *
 * @cloudformationResource AWS::MemoryDB::Cluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html
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
     * When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the ARN of the cluster , such as `arn:aws:memorydb:us-east-1:123456789012:cluster/my-cluster`
     *
     * @cloudformationAttribute ARN
     */
    readonly attrArn: string;
    /**
     * The address of the cluster 's configuration endpoint.
     *
     * @cloudformationAttribute ClusterEndpoint.Address
     */
    readonly attrClusterEndpointAddress: string;
    /**
     * The port used by the cluster configuration endpoint.
     *
     * @cloudformationAttribute ClusterEndpoint.Port
     */
    readonly attrClusterEndpointPort: number;
    /**
     * The status of the parameter group used by the cluster , for example `active` or `applying` .
     *
     * @cloudformationAttribute ParameterGroupStatus
     */
    readonly attrParameterGroupStatus: string;
    /**
     * The status of the cluster. For example, 'available', 'updating' or 'creating'.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The name of the Access Control List to associate with the cluster .
     */
    aclName: string;
    /**
     * When set to true, the cluster will automatically receive minor engine version upgrades after launch.
     */
    autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * The cluster 's configuration endpoint.
     */
    clusterEndpoint?: CfnCluster.EndpointProperty | cdk.IResolvable;
    /**
     * The name of the cluster .
     */
    clusterName: string;
    /**
     * Enables data tiering.
     */
    dataTiering?: string;
    /**
     * A description of the cluster .
     */
    description?: string;
    /**
     * The name of the engine used by the cluster.
     */
    engine?: string;
    /**
     * The Redis engine version used by the cluster .
     */
    engineVersion?: string;
    /**
     * The user-supplied name of a final cluster snapshot.
     */
    finalSnapshotName?: string;
    /**
     * The ID of the KMS key used to encrypt the cluster .
     */
    kmsKeyId?: string;
    /**
     * Specifies the weekly time range during which maintenance on the cluster is performed.
     */
    maintenanceWindow?: string;
    /**
     * The name of the multi-Region cluster that this cluster belongs to.
     */
    multiRegionClusterName?: string;
    /**
     * The cluster 's node type.
     */
    nodeType: string;
    /**
     * The number of replicas to apply to each shard.
     */
    numReplicasPerShard?: number;
    /**
     * The number of shards in the cluster .
     */
    numShards?: number;
    /**
     * The name of the parameter group used by the cluster .
     */
    parameterGroupName?: string;
    /**
     * The port used by the cluster .
     */
    port?: number;
    /**
     * A list of security group names to associate with this cluster .
     */
    securityGroupIds?: Array<string>;
    /**
     * A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3.
     */
    snapshotArns?: Array<string>;
    /**
     * The name of a snapshot from which to restore data into the new cluster .
     */
    snapshotName?: string;
    /**
     * The number of days for which MemoryDB retains automatic snapshots before deleting them.
     */
    snapshotRetentionLimit?: number;
    /**
     * The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard.
     */
    snapshotWindow?: string;
    /**
     * When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the ARN of the SNS topic, such as `arn:aws:memorydb:us-east-1:123456789012:mySNSTopic`.
     */
    snsTopicArn?: string;
    /**
     * The SNS topic must be in Active status to receive notifications.
     */
    snsTopicStatus?: string;
    /**
     * The name of the subnet group used by the cluster .
     */
    subnetGroupName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A flag to indicate if In-transit encryption is enabled.
     */
    tlsEnabled?: boolean | cdk.IResolvable;
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
export declare namespace CfnCluster {
    /**
     * Represents the information required for client programs to connect to the cluster and its nodes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-memorydb-cluster-endpoint.html
     */
    interface EndpointProperty {
        /**
         * The DNS hostname of the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-memorydb-cluster-endpoint.html#cfn-memorydb-cluster-endpoint-address
         */
        readonly address?: string;
        /**
         * The port number that the engine is listening on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-memorydb-cluster-endpoint.html#cfn-memorydb-cluster-endpoint-port
         */
        readonly port?: number;
    }
}
/**
 * Properties for defining a `CfnCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html
 */
export interface CfnClusterProps {
    /**
     * The name of the Access Control List to associate with the cluster .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-aclname
     */
    readonly aclName: string;
    /**
     * When set to true, the cluster will automatically receive minor engine version upgrades after launch.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-autominorversionupgrade
     */
    readonly autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * The cluster 's configuration endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-clusterendpoint
     */
    readonly clusterEndpoint?: CfnCluster.EndpointProperty | cdk.IResolvable;
    /**
     * The name of the cluster .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-clustername
     */
    readonly clusterName: string;
    /**
     * Enables data tiering.
     *
     * Data tiering is only supported for clusters using the r6gd node type. This parameter must be set when using r6gd nodes. For more information, see [Data tiering](https://docs.aws.amazon.com/memorydb/latest/devguide/data-tiering.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-datatiering
     */
    readonly dataTiering?: string;
    /**
     * A description of the cluster .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-description
     */
    readonly description?: string;
    /**
     * The name of the engine used by the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-engine
     */
    readonly engine?: string;
    /**
     * The Redis engine version used by the cluster .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-engineversion
     */
    readonly engineVersion?: string;
    /**
     * The user-supplied name of a final cluster snapshot.
     *
     * This is the unique name that identifies the snapshot. MemoryDB creates the snapshot, and then deletes the cluster immediately afterward.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-finalsnapshotname
     */
    readonly finalSnapshotName?: string;
    /**
     * The ID of the KMS key used to encrypt the cluster .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * Specifies the weekly time range during which maintenance on the cluster is performed.
     *
     * It is specified as a range in the format `ddd:hh24:mi-ddd:hh24:mi` (24H Clock UTC). The minimum maintenance window is a 60 minute period.
     *
     * *Pattern* : `ddd:hh24:mi-ddd:hh24:mi`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-maintenancewindow
     */
    readonly maintenanceWindow?: string;
    /**
     * The name of the multi-Region cluster that this cluster belongs to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-multiregionclustername
     */
    readonly multiRegionClusterName?: string;
    /**
     * The cluster 's node type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-nodetype
     */
    readonly nodeType: string;
    /**
     * The number of replicas to apply to each shard.
     *
     * *Default value* : `1`
     *
     * *Maximum value* : `5`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-numreplicaspershard
     */
    readonly numReplicasPerShard?: number;
    /**
     * The number of shards in the cluster .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-numshards
     */
    readonly numShards?: number;
    /**
     * The name of the parameter group used by the cluster .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-parametergroupname
     */
    readonly parameterGroupName?: string;
    /**
     * The port used by the cluster .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-port
     */
    readonly port?: number;
    /**
     * A list of security group names to associate with this cluster .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-securitygroupids
     */
    readonly securityGroupIds?: Array<string>;
    /**
     * A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3.
     *
     * The snapshot files are used to populate the new cluster . The Amazon S3 object name in the ARN cannot contain any commas.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-snapshotarns
     */
    readonly snapshotArns?: Array<string>;
    /**
     * The name of a snapshot from which to restore data into the new cluster .
     *
     * The snapshot status changes to restoring while the new cluster is being created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-snapshotname
     */
    readonly snapshotName?: string;
    /**
     * The number of days for which MemoryDB retains automatic snapshots before deleting them.
     *
     * For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-snapshotretentionlimit
     */
    readonly snapshotRetentionLimit?: number;
    /**
     * The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your shard.
     *
     * Example: 05:00-09:00 If you do not specify this parameter, MemoryDB automatically chooses an appropriate time range.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-snapshotwindow
     */
    readonly snapshotWindow?: string;
    /**
     * When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the ARN of the SNS topic, such as `arn:aws:memorydb:us-east-1:123456789012:mySNSTopic`.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-snstopicarn
     */
    readonly snsTopicArn?: string;
    /**
     * The SNS topic must be in Active status to receive notifications.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-snstopicstatus
     */
    readonly snsTopicStatus?: string;
    /**
     * The name of the subnet group used by the cluster .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-subnetgroupname
     */
    readonly subnetGroupName?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A flag to indicate if In-transit encryption is enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-cluster.html#cfn-memorydb-cluster-tlsenabled
     */
    readonly tlsEnabled?: boolean | cdk.IResolvable;
}
/**
 * Specifies a new MemoryDB parameter group.
 *
 * A parameter group is a collection of parameters and their values that are applied to all of the nodes in any cluster . For more information, see [Configuring engine parameters using parameter groups](https://docs.aws.amazon.com/memorydb/latest/devguide/parametergroups.html) .
 *
 * @cloudformationResource AWS::MemoryDB::ParameterGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html
 */
export declare class CfnParameterGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnParameterGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnParameterGroup;
    /**
     * When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the ARN of the parameter group, such as `arn:aws:memorydb:us-east-1:123456789012:parametergroup/my-parameter-group`
     *
     * @cloudformationAttribute ARN
     */
    readonly attrArn: string;
    /**
     * A description of the parameter group.
     */
    description?: string;
    /**
     * The name of the parameter group family that this parameter group is compatible with.
     */
    family: string;
    /**
     * The name of the parameter group.
     */
    parameterGroupName: string;
    /**
     * Returns the detailed parameter list for the parameter group.
     */
    parameters?: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnParameterGroupProps);
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
 * Properties for defining a `CfnParameterGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html
 */
export interface CfnParameterGroupProps {
    /**
     * A description of the parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html#cfn-memorydb-parametergroup-description
     */
    readonly description?: string;
    /**
     * The name of the parameter group family that this parameter group is compatible with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html#cfn-memorydb-parametergroup-family
     */
    readonly family: string;
    /**
     * The name of the parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html#cfn-memorydb-parametergroup-parametergroupname
     */
    readonly parameterGroupName: string;
    /**
     * Returns the detailed parameter list for the parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html#cfn-memorydb-parametergroup-parameters
     */
    readonly parameters?: any | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-parametergroup.html#cfn-memorydb-parametergroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a subnet group.
 *
 * A subnet group is a collection of subnets (typically private) that you can designate for your cluster s running in an Amazon Virtual Private Cloud (VPC) environment. When you create a cluster in an Amazon VPC , you must specify a subnet group. MemoryDB uses that subnet group to choose a subnet and IP addresses within that subnet to associate with your nodes. For more information, see [Subnets and subnet groups](https://docs.aws.amazon.com/memorydb/latest/devguide/subnetgroups.html) .
 *
 * @cloudformationResource AWS::MemoryDB::SubnetGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html
 */
export declare class CfnSubnetGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSubnetGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSubnetGroup;
    /**
     * When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the ARN of the subnet group, such as `arn:aws:memorydb:us-east-1:123456789012:subnetgroup/my-subnet-group`
     *
     * @cloudformationAttribute ARN
     */
    readonly attrArn: string;
    /**
     * A description of the subnet group.
     */
    description?: string;
    /**
     * The name of the subnet group to be used for the cluster .
     */
    subnetGroupName: string;
    /**
     * A list of Amazon VPC subnet IDs for the subnet group.
     */
    subnetIds: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSubnetGroupProps);
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
 * Properties for defining a `CfnSubnetGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html
 */
export interface CfnSubnetGroupProps {
    /**
     * A description of the subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html#cfn-memorydb-subnetgroup-description
     */
    readonly description?: string;
    /**
     * The name of the subnet group to be used for the cluster .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html#cfn-memorydb-subnetgroup-subnetgroupname
     */
    readonly subnetGroupName: string;
    /**
     * A list of Amazon VPC subnet IDs for the subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html#cfn-memorydb-subnetgroup-subnetids
     */
    readonly subnetIds: Array<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-subnetgroup.html#cfn-memorydb-subnetgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a MemoryDB user.
 *
 * For more information, see [Authenticating users with Access Contol Lists (ACLs)](https://docs.aws.amazon.com/memorydb/latest/devguide/clusters.acls.html) .
 *
 * @cloudformationResource AWS::MemoryDB::User
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html
 */
export declare class CfnUser extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUser from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUser;
    /**
     * When you pass the logical ID of this resource to the intrinsic `Ref` function, Ref returns the ARN of the user, such as `arn:aws:memorydb:us-east-1:123456789012:user/user1`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Indicates the user status.
     *
     * *Valid values* : `active` | `modifying` | `deleting`
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Access permissions string used for this user.
     */
    accessString?: string;
    /**
     * Denotes whether the user requires a password to authenticate.
     */
    authenticationMode?: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The name of the user.
     */
    userName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnUser {
    /**
     * Denotes the user's authentication properties, such as whether it requires a password to authenticate.
     *
     * Used in output responses.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-memorydb-user-authenticationmode.html
     */
    interface AuthenticationModeProperty {
        /**
         * The password(s) used for authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-memorydb-user-authenticationmode.html#cfn-memorydb-user-authenticationmode-passwords
         */
        readonly passwords?: Array<string>;
        /**
         * Indicates whether the user requires a password to authenticate.
         *
         * All newly-created users require a password.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-memorydb-user-authenticationmode.html#cfn-memorydb-user-authenticationmode-type
         */
        readonly type?: string;
    }
}
/**
 * Properties for defining a `CfnUser`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html
 */
export interface CfnUserProps {
    /**
     * Access permissions string used for this user.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html#cfn-memorydb-user-accessstring
     */
    readonly accessString?: string;
    /**
     * Denotes whether the user requires a password to authenticate.
     *
     * *Example:*
     *
     * `mynewdbuser: Type: AWS::MemoryDB::User Properties: AccessString: on ~* &* +@all AuthenticationMode: Passwords: '1234567890123456' Type: password UserName: mynewdbuser AuthenticationMode: { "Passwords": ["1234567890123456"], "Type": "Password" }`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html#cfn-memorydb-user-authenticationmode
     */
    readonly authenticationMode?: any | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html#cfn-memorydb-user-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the user.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-user.html#cfn-memorydb-user-username
     */
    readonly userName: string;
}
/**
 * Represents a multi-Region cluster.
 *
 * @cloudformationResource AWS::MemoryDB::MultiRegionCluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html
 */
export declare class CfnMultiRegionCluster extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMultiRegionCluster from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMultiRegionCluster;
    /**
     * The Amazon Resource Name (ARN) of the multi-Region cluster.
     *
     * @cloudformationAttribute ARN
     */
    readonly attrArn: string;
    /**
     * The name of the multi-Region cluster.
     *
     * @cloudformationAttribute MultiRegionClusterName
     */
    readonly attrMultiRegionClusterName: string;
    /**
     * The current status of the multi-Region cluster.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The description of the multi-Region cluster.
     */
    description?: string;
    /**
     * The name of the engine used by the multi-Region cluster.
     */
    engine?: string;
    /**
     * The version of the engine used by the multi-Region cluster.
     */
    engineVersion?: string;
    /**
     * A suffix to be added to the Multi-Region cluster name.
     */
    multiRegionClusterNameSuffix?: string;
    /**
     * The name of the multi-Region parameter group associated with the cluster.
     */
    multiRegionParameterGroupName?: string;
    /**
     * The node type used by the multi-Region cluster.
     */
    nodeType: string;
    /**
     * TBD.
     */
    numShards?: number;
    /**
     * A list of tags to be applied to the multi-Region cluster.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * Indiciates if the multi-Region cluster is TLS enabled.
     */
    tlsEnabled?: boolean | cdk.IResolvable;
    /**
     * The strategy to use for the update operation.
     */
    updateStrategy?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMultiRegionClusterProps);
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
 * Properties for defining a `CfnMultiRegionCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html
 */
export interface CfnMultiRegionClusterProps {
    /**
     * The description of the multi-Region cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-description
     */
    readonly description?: string;
    /**
     * The name of the engine used by the multi-Region cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-engine
     */
    readonly engine?: string;
    /**
     * The version of the engine used by the multi-Region cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-engineversion
     */
    readonly engineVersion?: string;
    /**
     * A suffix to be added to the Multi-Region cluster name.
     *
     * Amazon MemoryDB automatically applies a prefix to the Multi-Region cluster Name when it is created. Each Amazon Region has its own prefix. For instance, a Multi-Region cluster Name created in the US-West-1 region will begin with "virxk", along with the suffix name you provide. The suffix guarantees uniqueness of the Multi-Region cluster name across multiple regions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-multiregionclusternamesuffix
     */
    readonly multiRegionClusterNameSuffix?: string;
    /**
     * The name of the multi-Region parameter group associated with the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-multiregionparametergroupname
     */
    readonly multiRegionParameterGroupName?: string;
    /**
     * The node type used by the multi-Region cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-nodetype
     */
    readonly nodeType: string;
    /**
     * TBD.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-numshards
     */
    readonly numShards?: number;
    /**
     * A list of tags to be applied to the multi-Region cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Indiciates if the multi-Region cluster is TLS enabled.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-tlsenabled
     */
    readonly tlsEnabled?: boolean | cdk.IResolvable;
    /**
     * The strategy to use for the update operation.
     *
     * Supported values are "coordinated" or "uncoordinated".
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-memorydb-multiregioncluster.html#cfn-memorydb-multiregioncluster-updatestrategy
     */
    readonly updateStrategy?: string;
}
