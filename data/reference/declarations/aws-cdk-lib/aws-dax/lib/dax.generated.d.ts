import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a DAX cluster.
 *
 * All nodes in the cluster run the same DAX caching software.
 *
 * @cloudformationResource AWS::DAX::Cluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html
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
     * Returns the ARN of the DAX cluster. For example:
     *
     * `{ "Fn::GetAtt": [" MyDAXCluster ", "Arn"] }`
     *
     * Returns a value similar to the following:
     *
     * `arn:aws:dax:us-east-1:111122223333:cache/MyDAXCluster`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Returns the endpoint of the DAX cluster. For example:
     *
     * `{ "Fn::GetAtt": [" MyDAXCluster ", "ClusterDiscoveryEndpoint"] }`
     *
     * Returns a value similar to the following:
     *
     * `mydaxcluster.0h3d6x.clustercfg.dax.use1.cache.amazonaws.com:8111`
     *
     * @cloudformationAttribute ClusterDiscoveryEndpoint
     */
    readonly attrClusterDiscoveryEndpoint: string;
    /**
     * Returns the endpoint URL of the DAX cluster.
     *
     * @cloudformationAttribute ClusterDiscoveryEndpointURL
     */
    readonly attrClusterDiscoveryEndpointUrl: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The Availability Zones (AZs) in which the cluster nodes will reside after the cluster has been created or updated.
     */
    availabilityZones?: Array<string>;
    /**
     * The encryption type of the cluster's endpoint. Available values are:.
     */
    clusterEndpointEncryptionType?: string;
    /**
     * The name of the DAX cluster.
     */
    clusterName?: string;
    /**
     * The description of the cluster.
     */
    description?: string;
    /**
     * A valid Amazon Resource Name (ARN) that identifies an IAM role.
     */
    iamRoleArn: string;
    /**
     * The node type for the nodes in the cluster.
     */
    nodeType: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications will be sent.
     */
    notificationTopicArn?: string;
    /**
     * The parameter group to be associated with the DAX cluster.
     */
    parameterGroupName?: string;
    /**
     * A range of time when maintenance of DAX cluster software will be performed.
     */
    preferredMaintenanceWindow?: string;
    /**
     * The number of nodes in the DAX cluster.
     */
    replicationFactor: number;
    /**
     * A list of security group IDs to be assigned to each node in the DAX cluster.
     */
    securityGroupIds?: Array<string>;
    /**
     * Represents the settings used to enable server-side encryption on the cluster.
     */
    sseSpecification?: cdk.IResolvable | CfnCluster.SSESpecificationProperty;
    /**
     * The name of the subnet group to be used for the replication group.
     */
    subnetGroupName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A set of tags to associate with the DAX cluster.
     */
    tagsRaw?: any;
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
     * Represents the settings used to enable server-side encryption.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dax-cluster-ssespecification.html
     */
    interface SSESpecificationProperty {
        /**
         * Indicates whether server-side encryption is enabled (true) or disabled (false) on the cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dax-cluster-ssespecification.html#cfn-dax-cluster-ssespecification-sseenabled
         */
        readonly sseEnabled?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html
 */
export interface CfnClusterProps {
    /**
     * The Availability Zones (AZs) in which the cluster nodes will reside after the cluster has been created or updated.
     *
     * If provided, the length of this list must equal the `ReplicationFactor` parameter. If you omit this parameter, DAX will spread the nodes across Availability Zones for the highest availability.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html#cfn-dax-cluster-availabilityzones
     */
    readonly availabilityZones?: Array<string>;
    /**
     * The encryption type of the cluster's endpoint. Available values are:.
     *
     * - `NONE` - The cluster's endpoint will be unencrypted.
     * - `TLS` - The cluster's endpoint will be encrypted with Transport Layer Security, and will provide an x509 certificate for authentication.
     *
     * The default value is `NONE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html#cfn-dax-cluster-clusterendpointencryptiontype
     */
    readonly clusterEndpointEncryptionType?: string;
    /**
     * The name of the DAX cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html#cfn-dax-cluster-clustername
     */
    readonly clusterName?: string;
    /**
     * The description of the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html#cfn-dax-cluster-description
     */
    readonly description?: string;
    /**
     * A valid Amazon Resource Name (ARN) that identifies an IAM role.
     *
     * At runtime, DAX will assume this role and use the role's permissions to access DynamoDB on your behalf.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html#cfn-dax-cluster-iamrolearn
     */
    readonly iamRoleArn: string;
    /**
     * The node type for the nodes in the cluster.
     *
     * (All nodes in a DAX cluster are of the same type.)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html#cfn-dax-cluster-nodetype
     */
    readonly nodeType: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic to which notifications will be sent.
     *
     * > The Amazon SNS topic owner must be same as the DAX cluster owner.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html#cfn-dax-cluster-notificationtopicarn
     */
    readonly notificationTopicArn?: string;
    /**
     * The parameter group to be associated with the DAX cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html#cfn-dax-cluster-parametergroupname
     */
    readonly parameterGroupName?: string;
    /**
     * A range of time when maintenance of DAX cluster software will be performed.
     *
     * For example: `sun:01:00-sun:09:00` . Cluster maintenance normally takes less than 30 minutes, and is performed automatically within the maintenance window.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html#cfn-dax-cluster-preferredmaintenancewindow
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * The number of nodes in the DAX cluster.
     *
     * A replication factor of 1 will create a single-node cluster, without any read replicas. For additional fault tolerance, you can create a multiple node cluster with one or more read replicas. To do this, set `ReplicationFactor` to a number between 3 (one primary and two read replicas) and 10 (one primary and nine read replicas). `If the AvailabilityZones` parameter is provided, its length must equal the `ReplicationFactor` .
     *
     * > AWS recommends that you have at least two read replicas per cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html#cfn-dax-cluster-replicationfactor
     */
    readonly replicationFactor: number;
    /**
     * A list of security group IDs to be assigned to each node in the DAX cluster.
     *
     * (Each of the security group ID is system-generated.)
     *
     * If this parameter is not specified, DAX assigns the default VPC security group to each node.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html#cfn-dax-cluster-securitygroupids
     */
    readonly securityGroupIds?: Array<string>;
    /**
     * Represents the settings used to enable server-side encryption on the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html#cfn-dax-cluster-ssespecification
     */
    readonly sseSpecification?: cdk.IResolvable | CfnCluster.SSESpecificationProperty;
    /**
     * The name of the subnet group to be used for the replication group.
     *
     * > DAX clusters can only run in an Amazon VPC environment. All of the subnets that you specify in a subnet group must exist in the same VPC.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html#cfn-dax-cluster-subnetgroupname
     */
    readonly subnetGroupName?: string;
    /**
     * A set of tags to associate with the DAX cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-cluster.html#cfn-dax-cluster-tags
     */
    readonly tags?: any;
}
/**
 * A named set of parameters that are applied to all of the nodes in a DAX cluster.
 *
 * @cloudformationResource AWS::DAX::ParameterGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-parametergroup.html
 */
export declare class CfnParameterGroup extends cdk.CfnResource implements cdk.IInspectable {
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
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A description of the parameter group.
     */
    description?: string;
    /**
     * The name of the parameter group.
     */
    parameterGroupName?: string;
    /**
     * An array of name-value pairs for the parameters in the group.
     */
    parameterNameValues?: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnParameterGroupProps);
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-parametergroup.html
 */
export interface CfnParameterGroupProps {
    /**
     * A description of the parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-parametergroup.html#cfn-dax-parametergroup-description
     */
    readonly description?: string;
    /**
     * The name of the parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-parametergroup.html#cfn-dax-parametergroup-parametergroupname
     */
    readonly parameterGroupName?: string;
    /**
     * An array of name-value pairs for the parameters in the group.
     *
     * Each element in the array represents a single parameter.
     *
     * > `record-ttl-millis` and `query-ttl-millis` are the only supported parameter names. For more details, see [Configuring TTL Settings](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DAX.cluster-management.html#DAX.cluster-management.custom-settings.ttl) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-parametergroup.html#cfn-dax-parametergroup-parameternamevalues
     */
    readonly parameterNameValues?: any | cdk.IResolvable;
}
/**
 * Creates a new subnet group.
 *
 * @cloudformationResource AWS::DAX::SubnetGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html
 */
export declare class CfnSubnetGroup extends cdk.CfnResource implements cdk.IInspectable {
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
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The description of the subnet group.
     */
    description?: string;
    /**
     * The name of the subnet group.
     */
    subnetGroupName?: string;
    /**
     * A list of VPC subnet IDs for the subnet group.
     */
    subnetIds: Array<string>;
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html
 */
export interface CfnSubnetGroupProps {
    /**
     * The description of the subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html#cfn-dax-subnetgroup-description
     */
    readonly description?: string;
    /**
     * The name of the subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html#cfn-dax-subnetgroup-subnetgroupname
     */
    readonly subnetGroupName?: string;
    /**
     * A list of VPC subnet IDs for the subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dax-subnetgroup.html#cfn-dax-subnetgroup-subnetids
     */
    readonly subnetIds: Array<string>;
}
