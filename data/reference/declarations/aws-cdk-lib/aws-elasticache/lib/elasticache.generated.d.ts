import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::ElastiCache::CacheCluster` type creates an Amazon ElastiCache cache cluster.
 *
 * @cloudformationResource AWS::ElastiCache::CacheCluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html
 */
export declare class CfnCacheCluster extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCacheCluster from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCacheCluster;
    /**
     * The DNS hostname of the cache node.
     *
     * > Valkey and Redis OSS (cluster mode disabled) replication groups don't have this attribute. Therefore, `Fn::GetAtt` returns a value for this attribute only if the replication group is clustered. Otherwise, `Fn::GetAtt` fails.
     *
     * @cloudformationAttribute ConfigurationEndpoint.Address
     */
    readonly attrConfigurationEndpointAddress: string;
    /**
     * The port number of the configuration endpoint for the Memcached cache cluster.
     *
     * > Valkey and Redis OSS (cluster mode disabled) replication groups don't have this attribute. Therefore, `Fn::GetAtt` returns a value for this attribute only if the replication group is clustered. Otherwise, `Fn::GetAtt` fails.
     *
     * @cloudformationAttribute ConfigurationEndpoint.Port
     */
    readonly attrConfigurationEndpointPort: string;
    /**
     * The resource name.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The DNS address of the configuration endpoint for the Valkey or Redis OSS cache cluster.
     *
     * @cloudformationAttribute RedisEndpoint.Address
     */
    readonly attrRedisEndpointAddress: string;
    /**
     * The port number of the configuration endpoint for the Valkey or Redis OSS cache cluster.
     *
     * @cloudformationAttribute RedisEndpoint.Port
     */
    readonly attrRedisEndpointPort: string;
    /**
     * If you are running Valkey 7.2 or later, or Redis OSS engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next minor version upgrade campaign. This parameter is disabled for previous versions.
     */
    autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region.
     */
    azMode?: string;
    /**
     * The compute and memory capacity of the nodes in the node group (shard).
     */
    cacheNodeType: string;
    /**
     * The name of the parameter group to associate with this cluster.
     */
    cacheParameterGroupName?: string;
    /**
     * A list of security group names to associate with this cluster.
     */
    cacheSecurityGroupNames?: Array<string>;
    /**
     * The name of the subnet group to be used for the cluster.
     */
    cacheSubnetGroupName?: string;
    /**
     * A name for the cache cluster.
     */
    clusterName?: string;
    /**
     * The name of the cache engine to be used for this cluster.
     */
    engine: string;
    /**
     * The version number of the cache engine to be used for this cluster.
     */
    engineVersion?: string;
    /**
     * The network type you choose when modifying a cluster, either `ipv4` | `ipv6` .
     */
    ipDiscovery?: string;
    /**
     * Specifies the destination, format and type of the logs.
     */
    logDeliveryConfigurations?: Array<cdk.IResolvable | CfnCacheCluster.LogDeliveryConfigurationRequestProperty> | cdk.IResolvable;
    /**
     * Must be either `ipv4` | `ipv6` | `dual_stack` .
     */
    networkType?: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
     */
    notificationTopicArn?: string;
    /**
     * The number of cache nodes that the cache cluster should have.
     */
    numCacheNodes: number;
    /**
     * The port number on which each of the cache nodes accepts connections.
     */
    port?: number;
    /**
     * The EC2 Availability Zone in which the cluster is created.
     */
    preferredAvailabilityZone?: string;
    /**
     * A list of the Availability Zones in which cache nodes are created.
     */
    preferredAvailabilityZones?: Array<string>;
    /**
     * Specifies the weekly time range during which maintenance on the cluster is performed.
     */
    preferredMaintenanceWindow?: string;
    /**
     * A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Valkey or Redis OSS RDB snapshot file stored in Amazon S3.
     */
    snapshotArns?: Array<string>;
    /**
     * The name of a Valkey or Redis OSS snapshot from which to restore data into the new node group (shard).
     */
    snapshotName?: string;
    /**
     * The number of days for which ElastiCache retains automatic snapshots before deleting them.
     */
    snapshotRetentionLimit?: number;
    /**
     * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).
     */
    snapshotWindow?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags to be added to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A flag that enables in-transit encryption when set to true.
     */
    transitEncryptionEnabled?: boolean | cdk.IResolvable;
    /**
     * One or more VPC security groups associated with the cluster.
     */
    vpcSecurityGroupIds?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCacheClusterProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCacheCluster {
    /**
     * Specifies the destination, format and type of the logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-logdeliveryconfigurationrequest.html
     */
    interface LogDeliveryConfigurationRequestProperty {
        /**
         * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-logdeliveryconfigurationrequest.html#cfn-elasticache-cachecluster-logdeliveryconfigurationrequest-destinationdetails
         */
        readonly destinationDetails: CfnCacheCluster.DestinationDetailsProperty | cdk.IResolvable;
        /**
         * Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type.
         *
         * Valid values are either `cloudwatch-logs` or `kinesis-firehose` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-logdeliveryconfigurationrequest.html#cfn-elasticache-cachecluster-logdeliveryconfigurationrequest-destinationtype
         */
        readonly destinationType: string;
        /**
         * Valid values are either `json` or `text` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-logdeliveryconfigurationrequest.html#cfn-elasticache-cachecluster-logdeliveryconfigurationrequest-logformat
         */
        readonly logFormat: string;
        /**
         * Valid value is either `slow-log` , which refers to [slow-log](https://docs.aws.amazon.com/https://redis.io/commands/slowlog) or `engine-log` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-logdeliveryconfigurationrequest.html#cfn-elasticache-cachecluster-logdeliveryconfigurationrequest-logtype
         */
        readonly logType: string;
    }
    /**
     * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-destinationdetails.html
     */
    interface DestinationDetailsProperty {
        /**
         * The configuration details of the CloudWatch Logs destination.
         *
         * Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-destinationdetails.html#cfn-elasticache-cachecluster-destinationdetails-cloudwatchlogsdetails
         */
        readonly cloudWatchLogsDetails?: CfnCacheCluster.CloudWatchLogsDestinationDetailsProperty | cdk.IResolvable;
        /**
         * The configuration details of the Kinesis Data Firehose destination.
         *
         * Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-destinationdetails.html#cfn-elasticache-cachecluster-destinationdetails-kinesisfirehosedetails
         */
        readonly kinesisFirehoseDetails?: cdk.IResolvable | CfnCacheCluster.KinesisFirehoseDestinationDetailsProperty;
    }
    /**
     * Configuration details of a CloudWatch Logs destination.
     *
     * Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-cloudwatchlogsdestinationdetails.html
     */
    interface CloudWatchLogsDestinationDetailsProperty {
        /**
         * The name of the CloudWatch Logs log group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-cloudwatchlogsdestinationdetails.html#cfn-elasticache-cachecluster-cloudwatchlogsdestinationdetails-loggroup
         */
        readonly logGroup: string;
    }
    /**
     * The configuration details of the Kinesis Data Firehose destination.
     *
     * Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-kinesisfirehosedestinationdetails.html
     */
    interface KinesisFirehoseDestinationDetailsProperty {
        /**
         * The name of the Kinesis Data Firehose delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-cachecluster-kinesisfirehosedestinationdetails.html#cfn-elasticache-cachecluster-kinesisfirehosedestinationdetails-deliverystream
         */
        readonly deliveryStream: string;
    }
}
/**
 * Properties for defining a `CfnCacheCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html
 */
export interface CfnCacheClusterProps {
    /**
     * If you are running Valkey 7.2 or later, or Redis OSS engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next minor version upgrade campaign. This parameter is disabled for previous versions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-autominorversionupgrade
     */
    readonly autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region.
     *
     * This parameter is only supported for Memcached clusters.
     *
     * If the `AZMode` and `PreferredAvailabilityZones` are not specified, ElastiCache assumes `single-az` mode.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-azmode
     */
    readonly azMode?: string;
    /**
     * The compute and memory capacity of the nodes in the node group (shard).
     *
     * The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts. Changing the CacheNodeType of a Memcached instance is currently not supported. If you need to scale using Memcached, we recommend forcing a replacement update by changing the `LogicalResourceId` of the resource.
     *
     * - General purpose:
     *
     * - Current generation:
     *
     * *M6g node types:* `cache.m6g.large` , `cache.m6g.xlarge` , `cache.m6g.2xlarge` , `cache.m6g.4xlarge` , `cache.m6g.8xlarge` , `cache.m6g.12xlarge` , `cache.m6g.16xlarge` , `cache.m6g.24xlarge`
     *
     * *M5 node types:* `cache.m5.large` , `cache.m5.xlarge` , `cache.m5.2xlarge` , `cache.m5.4xlarge` , `cache.m5.12xlarge` , `cache.m5.24xlarge`
     *
     * *M4 node types:* `cache.m4.large` , `cache.m4.xlarge` , `cache.m4.2xlarge` , `cache.m4.4xlarge` , `cache.m4.10xlarge`
     *
     * *T4g node types:* `cache.t4g.micro` , `cache.t4g.small` , `cache.t4g.medium`
     *
     * *T3 node types:* `cache.t3.micro` , `cache.t3.small` , `cache.t3.medium`
     *
     * *T2 node types:* `cache.t2.micro` , `cache.t2.small` , `cache.t2.medium`
     * - Previous generation: (not recommended)
     *
     * *T1 node types:* `cache.t1.micro`
     *
     * *M1 node types:* `cache.m1.small` , `cache.m1.medium` , `cache.m1.large` , `cache.m1.xlarge`
     *
     * *M3 node types:* `cache.m3.medium` , `cache.m3.large` , `cache.m3.xlarge` , `cache.m3.2xlarge`
     * - Compute optimized:
     *
     * - Previous generation: (not recommended)
     *
     * *C1 node types:* `cache.c1.xlarge`
     * - Memory optimized:
     *
     * - Current generation:
     *
     * *R6gd node types:* `cache.r6gd.xlarge` , `cache.r6gd.2xlarge` , `cache.r6gd.4xlarge` , `cache.r6gd.8xlarge` , `cache.r6gd.12xlarge` , `cache.r6gd.16xlarge`
     *
     * > The `r6gd` family is available in the following regions: `us-east-2` , `us-east-1` , `us-west-2` , `us-west-1` , `eu-west-1` , `eu-central-1` , `ap-northeast-1` , `ap-southeast-1` , `ap-southeast-2` .
     *
     * *R6g node types:* `cache.r6g.large` , `cache.r6g.xlarge` , `cache.r6g.2xlarge` , `cache.r6g.4xlarge` , `cache.r6g.8xlarge` , `cache.r6g.12xlarge` , `cache.r6g.16xlarge` , `cache.r6g.24xlarge`
     *
     * *R5 node types:* `cache.r5.large` , `cache.r5.xlarge` , `cache.r5.2xlarge` , `cache.r5.4xlarge` , `cache.r5.12xlarge` , `cache.r5.24xlarge`
     *
     * *R4 node types:* `cache.r4.large` , `cache.r4.xlarge` , `cache.r4.2xlarge` , `cache.r4.4xlarge` , `cache.r4.8xlarge` , `cache.r4.16xlarge`
     * - Previous generation: (not recommended)
     *
     * *M2 node types:* `cache.m2.xlarge` , `cache.m2.2xlarge` , `cache.m2.4xlarge`
     *
     * *R3 node types:* `cache.r3.large` , `cache.r3.xlarge` , `cache.r3.2xlarge` , `cache.r3.4xlarge` , `cache.r3.8xlarge`
     *
     * For region availability, see [Supported Node Types by Region](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
     *
     * *Additional node type info*
     *
     * - All current generation instance types are created in Amazon VPC by default.
     * - Valkey and Redis OSS append-only files (AOF) are not supported for T1 or T2 instances.
     * - Valkey and Redis OSS Multi-AZ with automatic failover is not supported on T1 instances.
     * - Redis OSS configuration variables `appendonly` and `appendfsync` are not supported on Redis OSS version 2.8.22 and later.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-cachenodetype
     */
    readonly cacheNodeType: string;
    /**
     * The name of the parameter group to associate with this cluster.
     *
     * If this argument is omitted, the default parameter group for the specified engine is used. You cannot use any parameter group which has `cluster-enabled='yes'` when creating a cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-cacheparametergroupname
     */
    readonly cacheParameterGroupName?: string;
    /**
     * A list of security group names to associate with this cluster.
     *
     * Use this parameter only when you are creating a cluster outside of an Amazon Virtual Private Cloud (Amazon VPC).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-cachesecuritygroupnames
     */
    readonly cacheSecurityGroupNames?: Array<string>;
    /**
     * The name of the subnet group to be used for the cluster.
     *
     * Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).
     *
     * > If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see `[AWS::ElastiCache::SubnetGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-subnetgroup.html) .`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-cachesubnetgroupname
     */
    readonly cacheSubnetGroupName?: string;
    /**
     * A name for the cache cluster.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the cache cluster. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * The name must contain 1 to 50 alphanumeric characters or hyphens. The name must start with a letter and cannot end with a hyphen or contain two consecutive hyphens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-clustername
     */
    readonly clusterName?: string;
    /**
     * The name of the cache engine to be used for this cluster.
     *
     * Valid values for this parameter are: `memcached` | valkey | `redis`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-engine
     */
    readonly engine: string;
    /**
     * The version number of the cache engine to be used for this cluster.
     *
     * To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.
     *
     * *Important:* You can upgrade to a newer engine version (see [Selecting a Cache Engine and Version](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/SelectEngine.html#VersionManagement) ), but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-engineversion
     */
    readonly engineVersion?: string;
    /**
     * The network type you choose when modifying a cluster, either `ipv4` | `ipv6` .
     *
     * IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 and Memcached engine version 1.6.6 and above on all instances built on the [Nitro system](https://docs.aws.amazon.com/ec2/nitro/) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-ipdiscovery
     */
    readonly ipDiscovery?: string;
    /**
     * Specifies the destination, format and type of the logs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-logdeliveryconfigurations
     */
    readonly logDeliveryConfigurations?: Array<cdk.IResolvable | CfnCacheCluster.LogDeliveryConfigurationRequestProperty> | cdk.IResolvable;
    /**
     * Must be either `ipv4` | `ipv6` | `dual_stack` .
     *
     * IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 and Memcached engine version 1.6.6 and above on all instances built on the [Nitro system](https://docs.aws.amazon.com/ec2/nitro/) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-networktype
     */
    readonly networkType?: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
     *
     * > The Amazon SNS topic owner must be the same as the cluster owner.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-notificationtopicarn
     */
    readonly notificationTopicArn?: string;
    /**
     * The number of cache nodes that the cache cluster should have.
     *
     * > However, if the `PreferredAvailabilityZone` and `PreferredAvailabilityZones` properties were not previously specified and you don't specify any new values, an update requires [replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-numcachenodes
     */
    readonly numCacheNodes: number;
    /**
     * The port number on which each of the cache nodes accepts connections.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-port
     */
    readonly port?: number;
    /**
     * The EC2 Availability Zone in which the cluster is created.
     *
     * All nodes belonging to this cluster are placed in the preferred Availability Zone. If you want to create your nodes across multiple Availability Zones, use `PreferredAvailabilityZones` .
     *
     * Default: System chosen Availability Zone.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-preferredavailabilityzone
     */
    readonly preferredAvailabilityZone?: string;
    /**
     * A list of the Availability Zones in which cache nodes are created.
     *
     * The order of the zones in the list is not important.
     *
     * This option is only supported on Memcached.
     *
     * > If you are creating your cluster in an Amazon VPC (recommended) you can only locate nodes in Availability Zones that are associated with the subnets in the selected subnet group.
     * >
     * > The number of Availability Zones listed must equal the value of `NumCacheNodes` .
     *
     * If you want all the nodes in the same Availability Zone, use `PreferredAvailabilityZone` instead, or repeat the Availability Zone multiple times in the list.
     *
     * Default: System chosen Availability Zones.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-preferredavailabilityzones
     */
    readonly preferredAvailabilityZones?: Array<string>;
    /**
     * Specifies the weekly time range during which maintenance on the cluster is performed.
     *
     * It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.
     *
     * Valid values for `ddd` are:
     *
     * - `sun`
     * - `mon`
     * - `tue`
     * - `wed`
     * - `thu`
     * - `fri`
     * - `sat`
     *
     * Example: `sun:23:00-mon:01:30`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-preferredmaintenancewindow
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Valkey or Redis OSS RDB snapshot file stored in Amazon S3.
     *
     * The snapshot file is used to populate the node group (shard). The Amazon S3 object name in the ARN cannot contain any commas.
     *
     * > This parameter is only valid if the `Engine` parameter is `redis` .
     *
     * Example of an Amazon S3 ARN: `arn:aws:s3:::my_bucket/snapshot1.rdb`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-snapshotarns
     */
    readonly snapshotArns?: Array<string>;
    /**
     * The name of a Valkey or Redis OSS snapshot from which to restore data into the new node group (shard).
     *
     * The snapshot status changes to `restoring` while the new node group (shard) is being created.
     *
     * > This parameter is only valid if the `Engine` parameter is `redis` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-snapshotname
     */
    readonly snapshotName?: string;
    /**
     * The number of days for which ElastiCache retains automatic snapshots before deleting them.
     *
     * For example, if you set `SnapshotRetentionLimit` to 5, a snapshot taken today is retained for 5 days before being deleted.
     *
     * > This parameter is only valid if the `Engine` parameter is `redis` .
     *
     * Default: 0 (i.e., automatic backups are disabled for this cache cluster).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-snapshotretentionlimit
     */
    readonly snapshotRetentionLimit?: number;
    /**
     * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).
     *
     * Example: `05:00-09:00`
     *
     * If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.
     *
     * > This parameter is only valid if the `Engine` parameter is `redis` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-snapshotwindow
     */
    readonly snapshotWindow?: string;
    /**
     * A list of tags to be added to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A flag that enables in-transit encryption when set to true.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-transitencryptionenabled
     */
    readonly transitEncryptionEnabled?: boolean | cdk.IResolvable;
    /**
     * One or more VPC security groups associated with the cluster.
     *
     * Use this parameter only when you are creating a cluster in an Amazon Virtual Private Cloud (Amazon VPC).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-cachecluster.html#cfn-elasticache-cachecluster-vpcsecuritygroupids
     */
    readonly vpcSecurityGroupIds?: Array<string>;
}
/**
 * Consists of a primary cluster that accepts writes and an associated secondary cluster that resides in a different Amazon region.
 *
 * The secondary cluster accepts only reads. The primary cluster automatically replicates updates to the secondary cluster.
 *
 * - The *GlobalReplicationGroupIdSuffix* represents the name of the Global datastore, which is what you use to associate a secondary cluster.
 *
 * @cloudformationResource AWS::ElastiCache::GlobalReplicationGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html
 */
export declare class CfnGlobalReplicationGroup extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGlobalReplicationGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGlobalReplicationGroup;
    /**
     * The ID used to associate a secondary cluster to the Global Replication Group.
     *
     * @cloudformationAttribute GlobalReplicationGroupId
     */
    readonly attrGlobalReplicationGroupId: string;
    /**
     * The status of the Global Datastore. Can be `Creating` , `Modifying` , `Available` , `Deleting` or `Primary-Only` . Primary-only status indicates the global datastore contains only a primary cluster. Either all secondary clusters are deleted or not successfully created.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.
     */
    automaticFailoverEnabled?: boolean | cdk.IResolvable;
    /**
     * The cache node type of the Global datastore.
     */
    cacheNodeType?: string;
    /**
     * The name of the cache parameter group to use with the Global datastore.
     */
    cacheParameterGroupName?: string;
    /**
     * The ElastiCache engine.
     */
    engine?: string;
    /**
     * The Elasticache Valkey or Redis OSS engine version.
     */
    engineVersion?: string;
    /**
     * The number of node groups that comprise the Global Datastore.
     */
    globalNodeGroupCount?: number;
    /**
     * The optional description of the Global datastore.
     */
    globalReplicationGroupDescription?: string;
    /**
     * The suffix name of a Global Datastore.
     */
    globalReplicationGroupIdSuffix?: string;
    /**
     * The replication groups that comprise the Global datastore.
     */
    members: Array<CfnGlobalReplicationGroup.GlobalReplicationGroupMemberProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Regions that comprise the Global Datastore.
     */
    regionalConfigurations?: Array<cdk.IResolvable | CfnGlobalReplicationGroup.RegionalConfigurationProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGlobalReplicationGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnGlobalReplicationGroup {
    /**
     * A list of the replication groups.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-regionalconfiguration.html
     */
    interface RegionalConfigurationProperty {
        /**
         * The name of the secondary cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-regionalconfiguration.html#cfn-elasticache-globalreplicationgroup-regionalconfiguration-replicationgroupid
         */
        readonly replicationGroupId?: string;
        /**
         * The Amazon region where the cluster is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-regionalconfiguration.html#cfn-elasticache-globalreplicationgroup-regionalconfiguration-replicationgroupregion
         */
        readonly replicationGroupRegion?: string;
        /**
         * A list of PreferredAvailabilityZones objects that specifies the configuration of a node group in the resharded cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-regionalconfiguration.html#cfn-elasticache-globalreplicationgroup-regionalconfiguration-reshardingconfigurations
         */
        readonly reshardingConfigurations?: Array<cdk.IResolvable | CfnGlobalReplicationGroup.ReshardingConfigurationProperty> | cdk.IResolvable;
    }
    /**
     * A list of `PreferredAvailabilityZones` objects that specifies the configuration of a node group in the resharded cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-reshardingconfiguration.html
     */
    interface ReshardingConfigurationProperty {
        /**
         * Either the ElastiCache supplied 4-digit id or a user supplied id for the node group these configuration values apply to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-reshardingconfiguration.html#cfn-elasticache-globalreplicationgroup-reshardingconfiguration-nodegroupid
         */
        readonly nodeGroupId?: string;
        /**
         * A list of preferred availability zones for the nodes in this cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-reshardingconfiguration.html#cfn-elasticache-globalreplicationgroup-reshardingconfiguration-preferredavailabilityzones
         */
        readonly preferredAvailabilityZones?: Array<string>;
    }
    /**
     * A member of a Global datastore.
     *
     * It contains the Replication Group Id, the Amazon region and the role of the replication group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-globalreplicationgroupmember.html
     */
    interface GlobalReplicationGroupMemberProperty {
        /**
         * The replication group id of the Global datastore member.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-globalreplicationgroupmember.html#cfn-elasticache-globalreplicationgroup-globalreplicationgroupmember-replicationgroupid
         */
        readonly replicationGroupId?: string;
        /**
         * The Amazon region of the Global datastore member.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-globalreplicationgroupmember.html#cfn-elasticache-globalreplicationgroup-globalreplicationgroupmember-replicationgroupregion
         */
        readonly replicationGroupRegion?: string;
        /**
         * Indicates the role of the replication group, `PRIMARY` or `SECONDARY` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-globalreplicationgroup-globalreplicationgroupmember.html#cfn-elasticache-globalreplicationgroup-globalreplicationgroupmember-role
         */
        readonly role?: string;
    }
}
/**
 * Properties for defining a `CfnGlobalReplicationGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html
 */
export interface CfnGlobalReplicationGroupProps {
    /**
     * Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.
     *
     * `AutomaticFailoverEnabled` must be enabled for Valkey or Redis OSS (cluster mode enabled) replication groups.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-automaticfailoverenabled
     */
    readonly automaticFailoverEnabled?: boolean | cdk.IResolvable;
    /**
     * The cache node type of the Global datastore.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-cachenodetype
     */
    readonly cacheNodeType?: string;
    /**
     * The name of the cache parameter group to use with the Global datastore.
     *
     * It must be compatible with the major engine version used by the Global datastore.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-cacheparametergroupname
     */
    readonly cacheParameterGroupName?: string;
    /**
     * The ElastiCache engine.
     *
     * For Valkey or Redis OSS only.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-engine
     */
    readonly engine?: string;
    /**
     * The Elasticache Valkey or Redis OSS engine version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-engineversion
     */
    readonly engineVersion?: string;
    /**
     * The number of node groups that comprise the Global Datastore.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-globalnodegroupcount
     */
    readonly globalNodeGroupCount?: number;
    /**
     * The optional description of the Global datastore.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-globalreplicationgroupdescription
     */
    readonly globalReplicationGroupDescription?: string;
    /**
     * The suffix name of a Global Datastore.
     *
     * The suffix guarantees uniqueness of the Global Datastore name across multiple regions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-globalreplicationgroupidsuffix
     */
    readonly globalReplicationGroupIdSuffix?: string;
    /**
     * The replication groups that comprise the Global datastore.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-members
     */
    readonly members: Array<CfnGlobalReplicationGroup.GlobalReplicationGroupMemberProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Regions that comprise the Global Datastore.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-globalreplicationgroup.html#cfn-elasticache-globalreplicationgroup-regionalconfigurations
     */
    readonly regionalConfigurations?: Array<cdk.IResolvable | CfnGlobalReplicationGroup.RegionalConfigurationProperty> | cdk.IResolvable;
}
/**
 * The `AWS::ElastiCache::ParameterGroup` type creates a new cache parameter group.
 *
 * Cache parameter groups control the parameters for a cache cluster.
 *
 * @cloudformationResource AWS::ElastiCache::ParameterGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-parametergroup.html
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
     * A user-specified name for the cache parameter group.
     *
     * @cloudformationAttribute CacheParameterGroupName
     */
    readonly attrCacheParameterGroupName: string;
    /**
     * The name of the cache parameter group family that this cache parameter group is compatible with.
     */
    cacheParameterGroupFamily: string;
    /**
     * The description for this cache parameter group.
     */
    description: string;
    /**
     * A comma-delimited list of parameter name/value pairs.
     */
    properties?: cdk.IResolvable | Record<string, string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A tag that can be added to an ElastiCache parameter group.
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-parametergroup.html
 */
export interface CfnParameterGroupProps {
    /**
     * The name of the cache parameter group family that this cache parameter group is compatible with.
     *
     * Valid values are: `memcached1.4` | `memcached1.5` | `memcached1.6` | `redis2.6` | `redis2.8` | `redis3.2` | `redis4.0` | `redis5.0` | `redis6.x` | `redis7`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-parametergroup.html#cfn-elasticache-parametergroup-cacheparametergroupfamily
     */
    readonly cacheParameterGroupFamily: string;
    /**
     * The description for this cache parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-parametergroup.html#cfn-elasticache-parametergroup-description
     */
    readonly description: string;
    /**
     * A comma-delimited list of parameter name/value pairs.
     *
     * For example:
     *
     * ```
     * "Properties" : { "cas_disabled" : "1", "chunk_size_growth_factor" : "1.02"
     * }
     * ```
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-parametergroup.html#cfn-elasticache-parametergroup-properties
     */
    readonly properties?: cdk.IResolvable | Record<string, string>;
    /**
     * A tag that can be added to an ElastiCache parameter group.
     *
     * Tags are composed of a Key/Value pair. You can use tags to categorize and track all your parameter groups. A tag with a null Value is permitted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-parametergroup.html#cfn-elasticache-parametergroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::ElastiCache::ReplicationGroup` resource creates an Amazon ElastiCache (Valkey or Redis OSS) replication group.
 *
 * A Valkey or Redis OSS (cluster mode disabled) replication group is a collection of cache clusters, where one of the clusters is a primary read-write cluster and the others are read-only replicas.
 *
 * A Valkey or Redis OSS (cluster mode enabled) cluster is comprised of from 1 to 90 shards (API/CLI: node groups). Each shard has a primary node and up to 5 read-only replica nodes. The configuration can range from 90 shards and 0 replicas to 15 shards and 5 replicas, which is the maximum number or replicas allowed.
 *
 * The node or shard limit can be increased to a maximum of 500 per cluster if the engine version is Valkey 7.2 or higher, or Redis OSS 5.0.6 or higher. For example, you can choose to configure a 500 node cluster that ranges between 83 shards (one primary and 5 replicas per shard) and 500 shards (single primary and no replicas). Make sure there are enough available IP addresses to accommodate the increase. Common pitfalls include the subnets in the subnet group have too small a CIDR range or the subnets are shared and heavily used by other clusters. For more information, see [Creating a Subnet Group](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/SubnetGroups.Creating.html) . For versions below 5.0.6, the limit is 250 per cluster.
 *
 * To request a limit increase, see [Amazon Service Limits](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) and choose the limit type *Nodes per cluster per instance type* .
 *
 * @cloudformationResource AWS::ElastiCache::ReplicationGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html
 */
export declare class CfnReplicationGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReplicationGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReplicationGroup;
    /**
     * The DNS hostname of the cache node.
     *
     * > Valkey or Redis OSS (cluster mode disabled) replication groups don't have this attribute. Therefore, `Fn::GetAtt` returns a value for this attribute only if the replication group is clustered. Otherwise, `Fn::GetAtt` fails. For Valkey or Redis OSS (cluster mode disabled) replication groups, use the `PrimaryEndpoint` or `ReadEndpoint` attributes.
     *
     * @cloudformationAttribute ConfigurationEndPoint.Address
     */
    readonly attrConfigurationEndPointAddress: string;
    /**
     * The port number that the cache engine is listening on.
     *
     * @cloudformationAttribute ConfigurationEndPoint.Port
     */
    readonly attrConfigurationEndPointPort: string;
    /**
     * The DNS address of the primary read-write cache node.
     *
     * @cloudformationAttribute PrimaryEndPoint.Address
     */
    readonly attrPrimaryEndPointAddress: string;
    /**
     * The number of the port that the primary read-write cache engine is listening on.
     *
     * @cloudformationAttribute PrimaryEndPoint.Port
     */
    readonly attrPrimaryEndPointPort: string;
    /**
     * A string with a list of endpoints for the primary and read-only replicas. The order of the addresses maps to the order of the ports from the `ReadEndPoint.Ports` attribute.
     *
     * @cloudformationAttribute ReadEndPoint.Addresses
     */
    readonly attrReadEndPointAddresses: string;
    /**
     * A string with a list of endpoints for the read-only replicas. The order of the addresses maps to the order of the ports from the `ReadEndPoint.Ports` attribute.
     *
     * @cloudformationAttribute ReadEndPoint.Addresses.List
     */
    readonly attrReadEndPointAddressesList: Array<string>;
    /**
     * A string with a list of ports for the read-only replicas. The order of the ports maps to the order of the addresses from the `ReadEndPoint.Addresses` attribute.
     *
     * @cloudformationAttribute ReadEndPoint.Ports
     */
    readonly attrReadEndPointPorts: string;
    /**
     * A string with a list of ports for the read-only replicas. The order of the ports maps to the order of the addresses from the ReadEndPoint.Addresses attribute.
     *
     * @cloudformationAttribute ReadEndPoint.Ports.List
     */
    readonly attrReadEndPointPortsList: Array<string>;
    /**
     * The address of the reader endpoint.
     *
     * @cloudformationAttribute ReaderEndPoint.Address
     */
    readonly attrReaderEndPointAddress: string;
    /**
     * The port used by the reader endpoint.
     *
     * @cloudformationAttribute ReaderEndPoint.Port
     */
    readonly attrReaderEndPointPort: string;
    /**
     * A flag that enables encryption at rest when set to `true` .
     */
    atRestEncryptionEnabled?: boolean | cdk.IResolvable;
    /**
     * *Reserved parameter.* The password used to access a password protected server.
     */
    authToken?: string;
    /**
     * Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.
     */
    automaticFailoverEnabled?: boolean | cdk.IResolvable;
    /**
     * If you are running Valkey 7.2 or later, or Redis OSS 6.0 or later, set this parameter to yes if you want to opt-in to the next minor version upgrade campaign. This parameter is disabled for previous versions.
     */
    autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * The compute and memory capacity of the nodes in the node group (shard).
     */
    cacheNodeType?: string;
    /**
     * The name of the parameter group to associate with this replication group.
     */
    cacheParameterGroupName?: string;
    /**
     * A list of cache security group names to associate with this replication group.
     */
    cacheSecurityGroupNames?: Array<string>;
    /**
     * The name of the cache subnet group to be used for the replication group.
     */
    cacheSubnetGroupName?: string;
    /**
     * Enabled or Disabled.
     */
    clusterMode?: string;
    /**
     * Enables data tiering.
     */
    dataTieringEnabled?: boolean | cdk.IResolvable;
    /**
     * The name of the cache engine to be used for the clusters in this replication group.
     */
    engine?: string;
    /**
     * The version number of the cache engine to be used for the clusters in this replication group.
     */
    engineVersion?: string;
    /**
     * The name of the Global datastore.
     */
    globalReplicationGroupId?: string;
    /**
     * The network type you choose when creating a replication group, either `ipv4` | `ipv6` .
     */
    ipDiscovery?: string;
    /**
     * The ID of the KMS key used to encrypt the disk on the cluster.
     */
    kmsKeyId?: string;
    /**
     * Specifies the destination, format and type of the logs.
     */
    logDeliveryConfigurations?: Array<cdk.IResolvable | CfnReplicationGroup.LogDeliveryConfigurationRequestProperty> | cdk.IResolvable;
    /**
     * A flag indicating if you have Multi-AZ enabled to enhance fault tolerance.
     */
    multiAzEnabled?: boolean | cdk.IResolvable;
    /**
     * Must be either `ipv4` | `ipv6` | `dual_stack` .
     */
    networkType?: string;
    /**
     * `NodeGroupConfiguration` is a property of the `AWS::ElastiCache::ReplicationGroup` resource that configures an Amazon ElastiCache (ElastiCache) Valkey or Redis OSS cluster node group.
     */
    nodeGroupConfiguration?: Array<cdk.IResolvable | CfnReplicationGroup.NodeGroupConfigurationProperty> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
     */
    notificationTopicArn?: string;
    /**
     * The number of clusters this replication group initially has.
     */
    numCacheClusters?: number;
    /**
     * An optional parameter that specifies the number of node groups (shards) for this Valkey or Redis OSS (cluster mode enabled) replication group.
     */
    numNodeGroups?: number;
    /**
     * The port number on which each member of the replication group accepts connections.
     */
    port?: number;
    /**
     * A list of EC2 Availability Zones in which the replication group's clusters are created.
     */
    preferredCacheClusterAZs?: Array<string>;
    /**
     * Specifies the weekly time range during which maintenance on the cluster is performed.
     */
    preferredMaintenanceWindow?: string;
    /**
     * The identifier of the cluster that serves as the primary for this replication group.
     */
    primaryClusterId?: string;
    /**
     * An optional parameter that specifies the number of replica nodes in each node group (shard).
     */
    replicasPerNodeGroup?: number;
    /**
     * A user-created description for the replication group.
     */
    replicationGroupDescription: string;
    /**
     * The replication group identifier. This parameter is stored as a lowercase string.
     */
    replicationGroupId?: string;
    /**
     * One or more Amazon VPC security groups associated with this replication group.
     */
    securityGroupIds?: Array<string>;
    /**
     * A list of Amazon Resource Names (ARN) that uniquely identify the Valkey or Redis OSS RDB snapshot files stored in Amazon S3.
     */
    snapshotArns?: Array<string>;
    /**
     * The name of a snapshot from which to restore data into the new replication group.
     */
    snapshotName?: string;
    /**
     * The number of days for which ElastiCache retains automatic snapshots before deleting them.
     */
    snapshotRetentionLimit?: number;
    /**
     * The cluster ID that is used as the daily snapshot source for the replication group.
     */
    snapshottingClusterId?: string;
    /**
     * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).
     */
    snapshotWindow?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags to be added to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * A flag that enables in-transit encryption when set to `true` .
     */
    transitEncryptionEnabled?: boolean | cdk.IResolvable;
    /**
     * A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.
     */
    transitEncryptionMode?: string;
    /**
     * The ID of user group to associate with the replication group.
     */
    userGroupIds?: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnReplicationGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnReplicationGroup {
    /**
     * Specifies the destination, format and type of the logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-logdeliveryconfigurationrequest.html
     */
    interface LogDeliveryConfigurationRequestProperty {
        /**
         * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-logdeliveryconfigurationrequest.html#cfn-elasticache-replicationgroup-logdeliveryconfigurationrequest-destinationdetails
         */
        readonly destinationDetails: CfnReplicationGroup.DestinationDetailsProperty | cdk.IResolvable;
        /**
         * Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type.
         *
         * Valid values are either `cloudwatch-logs` or `kinesis-firehose` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-logdeliveryconfigurationrequest.html#cfn-elasticache-replicationgroup-logdeliveryconfigurationrequest-destinationtype
         */
        readonly destinationType: string;
        /**
         * Valid values are either `json` or `text` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-logdeliveryconfigurationrequest.html#cfn-elasticache-replicationgroup-logdeliveryconfigurationrequest-logformat
         */
        readonly logFormat: string;
        /**
         * Valid value is either `slow-log` , which refers to [slow-log](https://docs.aws.amazon.com/https://redis.io/commands/slowlog) or `engine-log` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-logdeliveryconfigurationrequest.html#cfn-elasticache-replicationgroup-logdeliveryconfigurationrequest-logtype
         */
        readonly logType: string;
    }
    /**
     * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-destinationdetails.html
     */
    interface DestinationDetailsProperty {
        /**
         * The configuration details of the CloudWatch Logs destination.
         *
         * Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-destinationdetails.html#cfn-elasticache-replicationgroup-destinationdetails-cloudwatchlogsdetails
         */
        readonly cloudWatchLogsDetails?: CfnReplicationGroup.CloudWatchLogsDestinationDetailsProperty | cdk.IResolvable;
        /**
         * The configuration details of the Kinesis Data Firehose destination.
         *
         * Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-destinationdetails.html#cfn-elasticache-replicationgroup-destinationdetails-kinesisfirehosedetails
         */
        readonly kinesisFirehoseDetails?: cdk.IResolvable | CfnReplicationGroup.KinesisFirehoseDestinationDetailsProperty;
    }
    /**
     * The configuration details of the CloudWatch Logs destination.
     *
     * Note that this field is marked as required but only if CloudWatch Logs was chosen as the destination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-cloudwatchlogsdestinationdetails.html
     */
    interface CloudWatchLogsDestinationDetailsProperty {
        /**
         * The name of the CloudWatch Logs log group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-cloudwatchlogsdestinationdetails.html#cfn-elasticache-replicationgroup-cloudwatchlogsdestinationdetails-loggroup
         */
        readonly logGroup: string;
    }
    /**
     * The configuration details of the Kinesis Data Firehose destination.
     *
     * Note that this field is marked as required but only if Kinesis Data Firehose was chosen as the destination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-kinesisfirehosedestinationdetails.html
     */
    interface KinesisFirehoseDestinationDetailsProperty {
        /**
         * The name of the Kinesis Data Firehose delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-kinesisfirehosedestinationdetails.html#cfn-elasticache-replicationgroup-kinesisfirehosedestinationdetails-deliverystream
         */
        readonly deliveryStream: string;
    }
    /**
     * `NodeGroupConfiguration` is a property of the `AWS::ElastiCache::ReplicationGroup` resource that configures an Amazon ElastiCache (ElastiCache) Valkey or Redis OSS cluster node group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-nodegroupconfiguration.html
     */
    interface NodeGroupConfigurationProperty {
        /**
         * Either the ElastiCache supplied 4-digit id or a user supplied id for the node group these configuration values apply to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-nodegroupconfiguration.html#cfn-elasticache-replicationgroup-nodegroupconfiguration-nodegroupid
         */
        readonly nodeGroupId?: string;
        /**
         * The Availability Zone where the primary node of this node group (shard) is launched.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-nodegroupconfiguration.html#cfn-elasticache-replicationgroup-nodegroupconfiguration-primaryavailabilityzone
         */
        readonly primaryAvailabilityZone?: string;
        /**
         * A list of Availability Zones to be used for the read replicas.
         *
         * The number of Availability Zones in this list must match the value of `ReplicaCount` or `ReplicasPerNodeGroup` if not specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-nodegroupconfiguration.html#cfn-elasticache-replicationgroup-nodegroupconfiguration-replicaavailabilityzones
         */
        readonly replicaAvailabilityZones?: Array<string>;
        /**
         * The number of read replica nodes in this node group (shard).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-nodegroupconfiguration.html#cfn-elasticache-replicationgroup-nodegroupconfiguration-replicacount
         */
        readonly replicaCount?: number;
        /**
         * A string of comma-separated values where the first set of values are the slot numbers (zero based), and the second set of values are the keyspaces for each slot.
         *
         * The following example specifies three slots (numbered 0, 1, and 2): `0,1,2,0-4999,5000-9999,10000-16,383` .
         *
         * If you don't specify a value, ElastiCache allocates keys equally among each slot.
         *
         * When you use an `UseOnlineResharding` update policy to update the number of node groups without interruption, ElastiCache evenly distributes the keyspaces between the specified number of slots. This cannot be updated later. Therefore, after updating the number of node groups in this way, you should remove the value specified for the `Slots` property of each `NodeGroupConfiguration` from the stack template, as it no longer reflects the actual values in each node group. For more information, see [UseOnlineResharding Policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-useonlineresharding) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-replicationgroup-nodegroupconfiguration.html#cfn-elasticache-replicationgroup-nodegroupconfiguration-slots
         */
        readonly slots?: string;
    }
}
/**
 * Properties for defining a `CfnReplicationGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html
 */
export interface CfnReplicationGroupProps {
    /**
     * A flag that enables encryption at rest when set to `true` .
     *
     * You cannot modify the value of `AtRestEncryptionEnabled` after the replication group is created. To enable encryption at rest on a replication group you must set `AtRestEncryptionEnabled` to `true` when you create the replication group.
     *
     * *Required:* Only available when creating a replication group in an Amazon VPC using Redis OSS version `3.2.6` or `4.x` onward.
     *
     * Default: `false`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-atrestencryptionenabled
     */
    readonly atRestEncryptionEnabled?: boolean | cdk.IResolvable;
    /**
     * *Reserved parameter.* The password used to access a password protected server.
     *
     * `AuthToken` can be specified only on replication groups where `TransitEncryptionEnabled` is `true` . For more information, see [Authenticating Valkey or Redis OSS users with the AUTH Command](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/auth.html) .
     *
     * > For HIPAA compliance, you must specify `TransitEncryptionEnabled` as `true` , an `AuthToken` , and a `CacheSubnetGroup` .
     *
     * Password constraints:
     *
     * - Must be only printable ASCII characters.
     * - Must be at least 16 characters and no more than 128 characters in length.
     * - Nonalphanumeric characters are restricted to (!, &, #, $, ^, <, >, -, ).
     *
     * For more information, see [AUTH password](https://docs.aws.amazon.com/http://redis.io/commands/AUTH) at http://redis.io/commands/AUTH.
     *
     * > If ADDING the AuthToken, update requires [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-authtoken
     */
    readonly authToken?: string;
    /**
     * Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails.
     *
     * `AutomaticFailoverEnabled` must be enabled for Valkey or Redis OSS (cluster mode enabled) replication groups.
     *
     * Default: false
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-automaticfailoverenabled
     */
    readonly automaticFailoverEnabled?: boolean | cdk.IResolvable;
    /**
     * If you are running Valkey 7.2 or later, or Redis OSS 6.0 or later, set this parameter to yes if you want to opt-in to the next minor version upgrade campaign. This parameter is disabled for previous versions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-autominorversionupgrade
     */
    readonly autoMinorVersionUpgrade?: boolean | cdk.IResolvable;
    /**
     * The compute and memory capacity of the nodes in the node group (shard).
     *
     * The following node types are supported by ElastiCache. Generally speaking, the current generation types provide more memory and computational power at lower cost when compared to their equivalent previous generation counterparts.
     *
     * - General purpose:
     *
     * - Current generation:
     *
     * *M6g node types:* `cache.m6g.large` , `cache.m6g.xlarge` , `cache.m6g.2xlarge` , `cache.m6g.4xlarge` , `cache.m6g.12xlarge` , `cache.m6g.24xlarge`
     *
     * *M5 node types:* `cache.m5.large` , `cache.m5.xlarge` , `cache.m5.2xlarge` , `cache.m5.4xlarge` , `cache.m5.12xlarge` , `cache.m5.24xlarge`
     *
     * *M4 node types:* `cache.m4.large` , `cache.m4.xlarge` , `cache.m4.2xlarge` , `cache.m4.4xlarge` , `cache.m4.10xlarge`
     *
     * *T4g node types:* `cache.t4g.micro` , `cache.t4g.small` , `cache.t4g.medium`
     *
     * *T3 node types:* `cache.t3.micro` , `cache.t3.small` , `cache.t3.medium`
     *
     * *T2 node types:* `cache.t2.micro` , `cache.t2.small` , `cache.t2.medium`
     * - Previous generation: (not recommended)
     *
     * *T1 node types:* `cache.t1.micro`
     *
     * *M1 node types:* `cache.m1.small` , `cache.m1.medium` , `cache.m1.large` , `cache.m1.xlarge`
     *
     * *M3 node types:* `cache.m3.medium` , `cache.m3.large` , `cache.m3.xlarge` , `cache.m3.2xlarge`
     * - Compute optimized:
     *
     * - Previous generation: (not recommended)
     *
     * *C1 node types:* `cache.c1.xlarge`
     * - Memory optimized:
     *
     * - Current generation:
     *
     * *R6gd node types:* `cache.r6gd.xlarge` , `cache.r6gd.2xlarge` , `cache.r6gd.4xlarge` , `cache.r6gd.8xlarge` , `cache.r6gd.12xlarge` , `cache.r6gd.16xlarge`
     *
     * > The `r6gd` family is available in the following regions: `us-east-2` , `us-east-1` , `us-west-2` , `us-west-1` , `eu-west-1` , `eu-central-1` , `ap-northeast-1` , `ap-southeast-1` , `ap-southeast-2` .
     *
     * *R6g node types:* `cache.r6g.large` , `cache.r6g.xlarge` , `cache.r6g.2xlarge` , `cache.r6g.4xlarge` , `cache.r6g.12xlarge` , `cache.r6g.24xlarge`
     *
     * *R5 node types:* `cache.r5.large` , `cache.r5.xlarge` , `cache.r5.2xlarge` , `cache.r5.4xlarge` , `cache.r5.12xlarge` , `cache.r5.24xlarge`
     *
     * *R4 node types:* `cache.r4.large` , `cache.r4.xlarge` , `cache.r4.2xlarge` , `cache.r4.4xlarge` , `cache.r4.8xlarge` , `cache.r4.16xlarge`
     * - Previous generation: (not recommended)
     *
     * *M2 node types:* `cache.m2.xlarge` , `cache.m2.2xlarge` , `cache.m2.4xlarge`
     *
     * *R3 node types:* `cache.r3.large` , `cache.r3.xlarge` , `cache.r3.2xlarge` , `cache.r3.4xlarge` , `cache.r3.8xlarge`
     *
     * For region availability, see [Supported Node Types by Amazon Region](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/CacheNodes.SupportedTypes.html#CacheNodes.SupportedTypesByRegion)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-cachenodetype
     */
    readonly cacheNodeType?: string;
    /**
     * The name of the parameter group to associate with this replication group.
     *
     * If this argument is omitted, the default cache parameter group for the specified engine is used.
     *
     * If you are running Valkey or Redis OSS version 3.2.4 or later, only one node group (shard), and want to use a default parameter group, we recommend that you specify the parameter group by name.
     *
     * - To create a Valkey or Redis OSS (cluster mode disabled) replication group, use `CacheParameterGroupName=default.redis3.2` .
     * - To create a Valkey or Redis OSS (cluster mode enabled) replication group, use `CacheParameterGroupName=default.redis3.2.cluster.on` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-cacheparametergroupname
     */
    readonly cacheParameterGroupName?: string;
    /**
     * A list of cache security group names to associate with this replication group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-cachesecuritygroupnames
     */
    readonly cacheSecurityGroupNames?: Array<string>;
    /**
     * The name of the cache subnet group to be used for the replication group.
     *
     * > If you're going to launch your cluster in an Amazon VPC, you need to create a subnet group before you start creating a cluster. For more information, see [AWS::ElastiCache::SubnetGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-subnetgroup.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-cachesubnetgroupname
     */
    readonly cacheSubnetGroupName?: string;
    /**
     * Enabled or Disabled.
     *
     * To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Valkey or Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Valkey or Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled. For more information, see [Modify cluster mode](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/modify-cluster-mode.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-clustermode
     */
    readonly clusterMode?: string;
    /**
     * Enables data tiering.
     *
     * Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes. For more information, see [Data tiering](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/data-tiering.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-datatieringenabled
     */
    readonly dataTieringEnabled?: boolean | cdk.IResolvable;
    /**
     * The name of the cache engine to be used for the clusters in this replication group.
     *
     * The value must be set to `valkey` or `redis` .
     *
     * > Upgrading an existing engine from redis to valkey is done through in-place migration, and requires a parameter group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-engine
     */
    readonly engine?: string;
    /**
     * The version number of the cache engine to be used for the clusters in this replication group.
     *
     * To view the supported cache engine versions, use the `DescribeCacheEngineVersions` operation.
     *
     * *Important:* You can upgrade to a newer engine version (see [Selecting a Cache Engine and Version](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/SelectEngine.html#VersionManagement) ) in the *ElastiCache User Guide* , but you cannot downgrade to an earlier engine version. If you want to use an earlier engine version, you must delete the existing cluster or replication group and create it anew with the earlier engine version.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-engineversion
     */
    readonly engineVersion?: string;
    /**
     * The name of the Global datastore.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-globalreplicationgroupid
     */
    readonly globalReplicationGroupId?: string;
    /**
     * The network type you choose when creating a replication group, either `ipv4` | `ipv6` .
     *
     * IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 or Memcached engine version 1.6.6 and above on all instances built on the [Nitro system](https://docs.aws.amazon.com/ec2/nitro/) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-ipdiscovery
     */
    readonly ipDiscovery?: string;
    /**
     * The ID of the KMS key used to encrypt the disk on the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * Specifies the destination, format and type of the logs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-logdeliveryconfigurations
     */
    readonly logDeliveryConfigurations?: Array<cdk.IResolvable | CfnReplicationGroup.LogDeliveryConfigurationRequestProperty> | cdk.IResolvable;
    /**
     * A flag indicating if you have Multi-AZ enabled to enhance fault tolerance.
     *
     * For more information, see [Minimizing Downtime: Multi-AZ](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/AutoFailover.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-multiazenabled
     */
    readonly multiAzEnabled?: boolean | cdk.IResolvable;
    /**
     * Must be either `ipv4` | `ipv6` | `dual_stack` .
     *
     * IPv6 is supported for workloads using Valkey 7.2 and above, Redis OSS engine version 6.2 to 7.1 and Memcached engine version 1.6.6 and above on all instances built on the [Nitro system](https://docs.aws.amazon.com/ec2/nitro/) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-networktype
     */
    readonly networkType?: string;
    /**
     * `NodeGroupConfiguration` is a property of the `AWS::ElastiCache::ReplicationGroup` resource that configures an Amazon ElastiCache (ElastiCache) Valkey or Redis OSS cluster node group.
     *
     * If you set [UseOnlineResharding](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-useonlineresharding) to `true` , you can update `NodeGroupConfiguration` without interruption. When `UseOnlineResharding` is set to `false` , or is not specified, updating `NodeGroupConfiguration` results in [replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-nodegroupconfiguration
     */
    readonly nodeGroupConfiguration?: Array<cdk.IResolvable | CfnReplicationGroup.NodeGroupConfigurationProperty> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
     *
     * > The Amazon SNS topic owner must be the same as the cluster owner.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-notificationtopicarn
     */
    readonly notificationTopicArn?: string;
    /**
     * The number of clusters this replication group initially has.
     *
     * This parameter is not used if there is more than one node group (shard). You should use `ReplicasPerNodeGroup` instead.
     *
     * If `AutomaticFailoverEnabled` is `true` , the value of this parameter must be at least 2. If `AutomaticFailoverEnabled` is `false` you can omit this parameter (it will default to 1), or you can explicitly set it to a value between 2 and 6.
     *
     * The maximum permitted value for `NumCacheClusters` is 6 (1 primary plus 5 replicas).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-numcacheclusters
     */
    readonly numCacheClusters?: number;
    /**
     * An optional parameter that specifies the number of node groups (shards) for this Valkey or Redis OSS (cluster mode enabled) replication group.
     *
     * For Valkey or Redis OSS (cluster mode disabled) either omit this parameter or set it to 1.
     *
     * If you set [UseOnlineResharding](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-updatepolicy.html#cfn-attributes-updatepolicy-useonlineresharding) to `true` , you can update `NumNodeGroups` without interruption. When `UseOnlineResharding` is set to `false` , or is not specified, updating `NumNodeGroups` results in [replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement) .
     *
     * Default: 1
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-numnodegroups
     */
    readonly numNodeGroups?: number;
    /**
     * The port number on which each member of the replication group accepts connections.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-port
     */
    readonly port?: number;
    /**
     * A list of EC2 Availability Zones in which the replication group's clusters are created.
     *
     * The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list.
     *
     * This parameter is not used if there is more than one node group (shard). You should use `NodeGroupConfiguration` instead.
     *
     * > If you are creating your replication group in an Amazon VPC (recommended), you can only locate clusters in Availability Zones associated with the subnets in the selected subnet group.
     * >
     * > The number of Availability Zones listed must equal the value of `NumCacheClusters` .
     *
     * Default: system chosen Availability Zones.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-preferredcacheclusterazs
     */
    readonly preferredCacheClusterAZs?: Array<string>;
    /**
     * Specifies the weekly time range during which maintenance on the cluster is performed.
     *
     * It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.
     *
     * Valid values for `ddd` are:
     *
     * - `sun`
     * - `mon`
     * - `tue`
     * - `wed`
     * - `thu`
     * - `fri`
     * - `sat`
     *
     * Example: `sun:23:00-mon:01:30`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-preferredmaintenancewindow
     */
    readonly preferredMaintenanceWindow?: string;
    /**
     * The identifier of the cluster that serves as the primary for this replication group.
     *
     * This cluster must already exist and have a status of `available` .
     *
     * This parameter is not required if `NumCacheClusters` , `NumNodeGroups` , or `ReplicasPerNodeGroup` is specified.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-primaryclusterid
     */
    readonly primaryClusterId?: string;
    /**
     * An optional parameter that specifies the number of replica nodes in each node group (shard).
     *
     * Valid values are 0 to 5.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-replicaspernodegroup
     */
    readonly replicasPerNodeGroup?: number;
    /**
     * A user-created description for the replication group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-replicationgroupdescription
     */
    readonly replicationGroupDescription: string;
    /**
     * The replication group identifier. This parameter is stored as a lowercase string.
     *
     * Constraints:
     *
     * - A name must contain from 1 to 40 alphanumeric characters or hyphens.
     * - The first character must be a letter.
     * - A name cannot end with a hyphen or contain two consecutive hyphens.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-replicationgroupid
     */
    readonly replicationGroupId?: string;
    /**
     * One or more Amazon VPC security groups associated with this replication group.
     *
     * Use this parameter only when you are creating a replication group in an Amazon Virtual Private Cloud (Amazon VPC).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-securitygroupids
     */
    readonly securityGroupIds?: Array<string>;
    /**
     * A list of Amazon Resource Names (ARN) that uniquely identify the Valkey or Redis OSS RDB snapshot files stored in Amazon S3.
     *
     * The snapshot files are used to populate the new replication group. The Amazon S3 object name in the ARN cannot contain any commas. The new replication group will have the number of node groups (console: shards) specified by the parameter *NumNodeGroups* or the number of node groups configured by *NodeGroupConfiguration* regardless of the number of ARNs specified here.
     *
     * Example of an Amazon S3 ARN: `arn:aws:s3:::my_bucket/snapshot1.rdb`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-snapshotarns
     */
    readonly snapshotArns?: Array<string>;
    /**
     * The name of a snapshot from which to restore data into the new replication group.
     *
     * The snapshot status changes to `restoring` while the new replication group is being created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-snapshotname
     */
    readonly snapshotName?: string;
    /**
     * The number of days for which ElastiCache retains automatic snapshots before deleting them.
     *
     * For example, if you set `SnapshotRetentionLimit` to 5, a snapshot that was taken today is retained for 5 days before being deleted.
     *
     * Default: 0 (i.e., automatic backups are disabled for this cluster).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-snapshotretentionlimit
     */
    readonly snapshotRetentionLimit?: number;
    /**
     * The cluster ID that is used as the daily snapshot source for the replication group.
     *
     * This parameter cannot be set for Valkey or Redis OSS (cluster mode enabled) replication groups.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-snapshottingclusterid
     */
    readonly snapshottingClusterId?: string;
    /**
     * The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).
     *
     * Example: `05:00-09:00`
     *
     * If you do not specify this parameter, ElastiCache automatically chooses an appropriate time range.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-snapshotwindow
     */
    readonly snapshotWindow?: string;
    /**
     * A list of tags to be added to this resource.
     *
     * Tags are comma-separated key,value pairs (e.g. Key= `myKey` , Value= `myKeyValue` . You can include multiple tags as shown following: Key= `myKey` , Value= `myKeyValue` Key= `mySecondKey` , Value= `mySecondKeyValue` . Tags on replication groups will be replicated to all nodes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * A flag that enables in-transit encryption when set to `true` .
     *
     * You cannot modify the value of `TransitEncryptionEnabled` after the cluster is created. To enable in-transit encryption on a cluster you must set `TransitEncryptionEnabled` to `true` when you create a cluster.
     *
     * This parameter is valid only if the `Engine` parameter is `redis` , the `EngineVersion` parameter is `3.2.6` or `4.x` onward, and the cluster is being created in an Amazon VPC.
     *
     * If you enable in-transit encryption, you must also specify a value for `CacheSubnetGroup` .
     *
     * > - TransitEncryptionEnabled is only available when creating a replication group in an Amazon VPC using Valkey version `7.2` and above, Redis OSS version `3.2.6` , or Redis OSS version `4.x` and above.
     * > - TransitEncryptionEnabled is required when creating a new valkey replication group.
     *
     * Default: `false`
     *
     * > For HIPAA compliance, you must specify `TransitEncryptionEnabled` as `true` , an `AuthToken` , and a `CacheSubnetGroup` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-transitencryptionenabled
     */
    readonly transitEncryptionEnabled?: boolean | cdk.IResolvable;
    /**
     * A setting that allows you to migrate your clients to use in-transit encryption, with no downtime.
     *
     * When setting `TransitEncryptionEnabled` to `true` , you can set your `TransitEncryptionMode` to `preferred` in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Valkey or Redis OSS clients to use encrypted connections you can modify the value to `required` to allow encrypted connections only.
     *
     * Setting `TransitEncryptionMode` to `required` is a two-step process that requires you to first set the `TransitEncryptionMode` to `preferred` , after that you can set `TransitEncryptionMode` to `required` .
     *
     * This process will not trigger the replacement of the replication group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-transitencryptionmode
     */
    readonly transitEncryptionMode?: string;
    /**
     * The ID of user group to associate with the replication group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-replicationgroup.html#cfn-elasticache-replicationgroup-usergroupids
     */
    readonly userGroupIds?: Array<string>;
}
/**
 * The `AWS::ElastiCache::SecurityGroup` resource creates a cache security group.
 *
 * For more information about cache security groups, go to [CacheSecurityGroups](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/VPCs.html) in the *Amazon ElastiCache User Guide* or go to [CreateCacheSecurityGroup](https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSecurityGroup.html) in the *Amazon ElastiCache API Reference Guide* .
 *
 * For more information, see [CreateCacheSubnetGroup](https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html) .
 *
 * @cloudformationResource AWS::ElastiCache::SecurityGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-securitygroup.html
 */
export declare class CfnSecurityGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSecurityGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSecurityGroup;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A description for the cache security group.
     */
    description: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A tag that can be added to an ElastiCache security group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSecurityGroupProps);
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
 * Properties for defining a `CfnSecurityGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-securitygroup.html
 */
export interface CfnSecurityGroupProps {
    /**
     * A description for the cache security group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-securitygroup.html#cfn-elasticache-securitygroup-description
     */
    readonly description: string;
    /**
     * A tag that can be added to an ElastiCache security group.
     *
     * Tags are composed of a Key/Value pair. You can use tags to categorize and track all your security groups. A tag with a null Value is permitted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-securitygroup.html#cfn-elasticache-securitygroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The AWS::ElastiCache::SecurityGroupIngress type authorizes ingress to a cache security group from hosts in specified Amazon EC2 security groups.
 *
 * For more information about ElastiCache security group ingress, go to [AuthorizeCacheSecurityGroupIngress](https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_AuthorizeCacheSecurityGroupIngress.html) in the *Amazon ElastiCache API Reference Guide* .
 *
 * > Updates are not supported.
 *
 * @cloudformationResource AWS::ElastiCache::SecurityGroupIngress
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-securitygroupingress.html
 */
export declare class CfnSecurityGroupIngress extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSecurityGroupIngress from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSecurityGroupIngress;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the Cache Security Group to authorize.
     */
    cacheSecurityGroupName: string;
    /**
     * Name of the EC2 Security Group to include in the authorization.
     */
    ec2SecurityGroupName: string;
    /**
     * Specifies the Amazon Account ID of the owner of the EC2 security group specified in the EC2SecurityGroupName property.
     */
    ec2SecurityGroupOwnerId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSecurityGroupIngressProps);
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
 * Properties for defining a `CfnSecurityGroupIngress`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-securitygroupingress.html
 */
export interface CfnSecurityGroupIngressProps {
    /**
     * The name of the Cache Security Group to authorize.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-securitygroupingress.html#cfn-elasticache-securitygroupingress-cachesecuritygroupname
     */
    readonly cacheSecurityGroupName: string;
    /**
     * Name of the EC2 Security Group to include in the authorization.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-securitygroupingress.html#cfn-elasticache-securitygroupingress-ec2securitygroupname
     */
    readonly ec2SecurityGroupName: string;
    /**
     * Specifies the Amazon Account ID of the owner of the EC2 security group specified in the EC2SecurityGroupName property.
     *
     * The Amazon access key ID is not an acceptable value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-securitygroupingress.html#cfn-elasticache-securitygroupingress-ec2securitygroupownerid
     */
    readonly ec2SecurityGroupOwnerId?: string;
}
/**
 * Creates a cache subnet group.
 *
 * For more information about cache subnet groups, go to Cache Subnet Groups in the *Amazon ElastiCache User Guide* or go to [CreateCacheSubnetGroup](https://docs.aws.amazon.com/AmazonElastiCache/latest/APIReference/API_CreateCacheSubnetGroup.html) in the *Amazon ElastiCache API Reference Guide* .
 *
 * @cloudformationResource AWS::ElastiCache::SubnetGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-subnetgroup.html
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
     * The name for the cache subnet group. This value is stored as a lowercase string.
     */
    cacheSubnetGroupName?: string;
    /**
     * The description for the cache subnet group.
     */
    description: string;
    /**
     * The EC2 subnet IDs for the cache subnet group.
     */
    subnetIds: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A tag that can be added to an ElastiCache subnet group.
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-subnetgroup.html
 */
export interface CfnSubnetGroupProps {
    /**
     * The name for the cache subnet group. This value is stored as a lowercase string.
     *
     * Constraints: Must contain no more than 255 alphanumeric characters or hyphens.
     *
     * Example: `mysubnetgroup`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-subnetgroup.html#cfn-elasticache-subnetgroup-cachesubnetgroupname
     */
    readonly cacheSubnetGroupName?: string;
    /**
     * The description for the cache subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-subnetgroup.html#cfn-elasticache-subnetgroup-description
     */
    readonly description: string;
    /**
     * The EC2 subnet IDs for the cache subnet group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-subnetgroup.html#cfn-elasticache-subnetgroup-subnetids
     */
    readonly subnetIds: Array<string>;
    /**
     * A tag that can be added to an ElastiCache subnet group.
     *
     * Tags are composed of a Key/Value pair. You can use tags to categorize and track all your subnet groups. A tag with a null Value is permitted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-subnetgroup.html#cfn-elasticache-subnetgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * For Valkey 7.2 and onwards, or Redis OSS engine version 6.0 and onwards: Creates user. For more information, see [Using Role Based Access Control (RBAC)](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Clusters.RBAC.html) .
 *
 * @cloudformationResource AWS::ElastiCache::User
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html
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
     * The Amazon Resource Name (ARN) of the user.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Indicates the user status. Can be "active", "modifying" or "deleting".
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Access permissions string used for this user.
     */
    accessString?: string;
    /**
     * Specifies the authentication mode to use. Below is an example of the possible JSON values:.
     */
    authenticationMode?: any | cdk.IResolvable;
    /**
     * The current supported values are valkey and redis.
     */
    engine: string;
    /**
     * Indicates a password is not required for this user.
     */
    noPasswordRequired?: boolean | cdk.IResolvable;
    /**
     * Passwords used for this user.
     */
    passwords?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The list of tags.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ID of the user.
     */
    userId: string;
    /**
     * The username of the user.
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
     * Specifies the authentication mode to use.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-user-authenticationmode.html
     */
    interface AuthenticationModeProperty {
        /**
         * Specifies the passwords to use for authentication if `Type` is set to `password` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-user-authenticationmode.html#cfn-elasticache-user-authenticationmode-passwords
         */
        readonly passwords?: Array<string>;
        /**
         * Specifies the authentication type.
         *
         * Possible options are IAM authentication, password and no password.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-user-authenticationmode.html#cfn-elasticache-user-authenticationmode-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnUser`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html
 */
export interface CfnUserProps {
    /**
     * Access permissions string used for this user.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html#cfn-elasticache-user-accessstring
     */
    readonly accessString?: string;
    /**
     * Specifies the authentication mode to use. Below is an example of the possible JSON values:.
     *
     * ```
     * { Passwords: ["*****", "******"] // If Type is password.
     * }
     * ```
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html#cfn-elasticache-user-authenticationmode
     */
    readonly authenticationMode?: any | cdk.IResolvable;
    /**
     * The current supported values are valkey and redis.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html#cfn-elasticache-user-engine
     */
    readonly engine: string;
    /**
     * Indicates a password is not required for this user.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html#cfn-elasticache-user-nopasswordrequired
     */
    readonly noPasswordRequired?: boolean | cdk.IResolvable;
    /**
     * Passwords used for this user.
     *
     * You can create up to two passwords for each user.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html#cfn-elasticache-user-passwords
     */
    readonly passwords?: Array<string>;
    /**
     * The list of tags.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html#cfn-elasticache-user-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ID of the user.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html#cfn-elasticache-user-userid
     */
    readonly userId: string;
    /**
     * The username of the user.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-user.html#cfn-elasticache-user-username
     */
    readonly userName: string;
}
/**
 * For Valkey 7.2 and onwards, or Redis OSS 6.0 and onwards: Creates a user group. For more information, see [Using Role Based Access Control (RBAC)](https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/Clusters.RBAC.html).
 *
 * @cloudformationResource AWS::ElastiCache::UserGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html
 */
export declare class CfnUserGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnUserGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnUserGroup;
    /**
     * The Amazon Resource Name (ARN) of the user group.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Indicates user group status. Can be "creating", "active", "modifying", "deleting".
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The current supported values are valkey and redis.
     */
    engine: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The list of tags.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ID of the user group.
     */
    userGroupId: string;
    /**
     * The list of user IDs that belong to the user group.
     */
    userIds: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnUserGroupProps);
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
 * Properties for defining a `CfnUserGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html
 */
export interface CfnUserGroupProps {
    /**
     * The current supported values are valkey and redis.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#cfn-elasticache-usergroup-engine
     */
    readonly engine: string;
    /**
     * The list of tags.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#cfn-elasticache-usergroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ID of the user group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#cfn-elasticache-usergroup-usergroupid
     */
    readonly userGroupId: string;
    /**
     * The list of user IDs that belong to the user group.
     *
     * A user named `default` must be included.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-usergroup.html#cfn-elasticache-usergroup-userids
     */
    readonly userIds: Array<string>;
}
/**
 * The resource representing a serverless cache.
 *
 * @cloudformationResource AWS::ElastiCache::ServerlessCache
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html
 */
export declare class CfnServerlessCache extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnServerlessCache from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnServerlessCache;
    /**
     * The Amazon Resource Name (ARN) of the serverless cache.
     *
     * @cloudformationAttribute ARN
     */
    readonly attrArn: string;
    /**
     * When the serverless cache was created.
     *
     * @cloudformationAttribute CreateTime
     */
    readonly attrCreateTime: string;
    /**
     * The DNS hostname of the cache node.
     *
     * @cloudformationAttribute Endpoint.Address
     */
    readonly attrEndpointAddress: string;
    /**
     * The port number that the cache engine is listening on.
     *
     * @cloudformationAttribute Endpoint.Port
     */
    readonly attrEndpointPort: string;
    /**
     * The name and version number of the engine the serverless cache is compatible with.
     *
     * @cloudformationAttribute FullEngineVersion
     */
    readonly attrFullEngineVersion: string;
    /**
     * The DNS hostname of the cache node.
     *
     * @cloudformationAttribute ReaderEndpoint.Address
     */
    readonly attrReaderEndpointAddress: string;
    /**
     * The port number that the cache engine is listening on.
     *
     * @cloudformationAttribute ReaderEndpoint.Port
     */
    readonly attrReaderEndpointPort: string;
    /**
     * The current status of the serverless cache. The allowed values are CREATING, AVAILABLE, DELETING, CREATE-FAILED and MODIFYING.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The cache usage limit for the serverless cache.
     */
    cacheUsageLimits?: CfnServerlessCache.CacheUsageLimitsProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The daily time that a cache snapshot will be created.
     */
    dailySnapshotTime?: string;
    /**
     * A description of the serverless cache.
     */
    description?: string;
    /**
     * Represents the information required for client programs to connect to a cache node.
     */
    endpoint?: CfnServerlessCache.EndpointProperty | cdk.IResolvable;
    /**
     * The engine the serverless cache is compatible with.
     */
    engine: string;
    /**
     * The name of the final snapshot taken of a cache before the cache is deleted.
     */
    finalSnapshotName?: string;
    /**
     * The ID of the AWS Key Management Service (KMS) key that is used to encrypt data at rest in the serverless cache.
     */
    kmsKeyId?: string;
    /**
     * The version number of the engine the serverless cache is compatible with.
     */
    majorEngineVersion?: string;
    /**
     * Represents the information required for client programs to connect to a cache node.
     */
    readerEndpoint?: CfnServerlessCache.EndpointProperty | cdk.IResolvable;
    /**
     * The IDs of the EC2 security groups associated with the serverless cache.
     */
    securityGroupIds?: Array<string>;
    /**
     * The unique identifier of the serverless cache.
     */
    serverlessCacheName: string;
    /**
     * The ARN of the snapshot from which to restore data into the new cache.
     */
    snapshotArnsToRestore?: Array<string>;
    /**
     * The current setting for the number of serverless cache snapshots the system will retain.
     */
    snapshotRetentionLimit?: number;
    /**
     * If no subnet IDs are given and your VPC is in us-west-1, then ElastiCache will select 2 default subnets across AZs in your VPC.
     */
    subnetIds?: Array<string>;
    /**
     * A list of tags to be added to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The identifier of the user group associated with the serverless cache.
     */
    userGroupId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnServerlessCacheProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnServerlessCache {
    /**
     * The usage limits for storage and ElastiCache Processing Units for the cache.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-cacheusagelimits.html
     */
    interface CacheUsageLimitsProperty {
        /**
         * The maximum data storage limit in the cache, expressed in Gigabytes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-cacheusagelimits.html#cfn-elasticache-serverlesscache-cacheusagelimits-datastorage
         */
        readonly dataStorage?: CfnServerlessCache.DataStorageProperty | cdk.IResolvable;
        /**
         * The number of ElastiCache Processing Units (ECPU) the cache can consume per second.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-cacheusagelimits.html#cfn-elasticache-serverlesscache-cacheusagelimits-ecpupersecond
         */
        readonly ecpuPerSecond?: CfnServerlessCache.ECPUPerSecondProperty | cdk.IResolvable;
    }
    /**
     * The data storage limit.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-datastorage.html
     */
    interface DataStorageProperty {
        /**
         * The upper limit for data storage the cache is set to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-datastorage.html#cfn-elasticache-serverlesscache-datastorage-maximum
         */
        readonly maximum?: number;
        /**
         * The lower limit for data storage the cache is set to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-datastorage.html#cfn-elasticache-serverlesscache-datastorage-minimum
         */
        readonly minimum?: number;
        /**
         * The unit that the storage is measured in, in GB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-datastorage.html#cfn-elasticache-serverlesscache-datastorage-unit
         */
        readonly unit: string;
    }
    /**
     * The configuration for the number of ElastiCache Processing Units (ECPU) the cache can consume per second.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-ecpupersecond.html
     */
    interface ECPUPerSecondProperty {
        /**
         * The configuration for the maximum number of ECPUs the cache can consume per second.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-ecpupersecond.html#cfn-elasticache-serverlesscache-ecpupersecond-maximum
         */
        readonly maximum?: number;
        /**
         * The configuration for the minimum number of ECPUs the cache should be able consume per second.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-ecpupersecond.html#cfn-elasticache-serverlesscache-ecpupersecond-minimum
         */
        readonly minimum?: number;
    }
    /**
     * Represents the information required for client programs to connect to a cache node.
     *
     * This value is read-only.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-endpoint.html
     */
    interface EndpointProperty {
        /**
         * The DNS hostname of the cache node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-endpoint.html#cfn-elasticache-serverlesscache-endpoint-address
         */
        readonly address?: string;
        /**
         * The port number that the cache engine is listening on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticache-serverlesscache-endpoint.html#cfn-elasticache-serverlesscache-endpoint-port
         */
        readonly port?: string;
    }
}
/**
 * Properties for defining a `CfnServerlessCache`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html
 */
export interface CfnServerlessCacheProps {
    /**
     * The cache usage limit for the serverless cache.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#cfn-elasticache-serverlesscache-cacheusagelimits
     */
    readonly cacheUsageLimits?: CfnServerlessCache.CacheUsageLimitsProperty | cdk.IResolvable;
    /**
     * The daily time that a cache snapshot will be created.
     *
     * Default is NULL, i.e. snapshots will not be created at a specific time on a daily basis. Available for Valkey, Redis OSS and Serverless Memcached only.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#cfn-elasticache-serverlesscache-dailysnapshottime
     */
    readonly dailySnapshotTime?: string;
    /**
     * A description of the serverless cache.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#cfn-elasticache-serverlesscache-description
     */
    readonly description?: string;
    /**
     * Represents the information required for client programs to connect to a cache node.
     *
     * This value is read-only.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#cfn-elasticache-serverlesscache-endpoint
     */
    readonly endpoint?: CfnServerlessCache.EndpointProperty | cdk.IResolvable;
    /**
     * The engine the serverless cache is compatible with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#cfn-elasticache-serverlesscache-engine
     */
    readonly engine: string;
    /**
     * The name of the final snapshot taken of a cache before the cache is deleted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#cfn-elasticache-serverlesscache-finalsnapshotname
     */
    readonly finalSnapshotName?: string;
    /**
     * The ID of the AWS Key Management Service (KMS) key that is used to encrypt data at rest in the serverless cache.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#cfn-elasticache-serverlesscache-kmskeyid
     */
    readonly kmsKeyId?: string;
    /**
     * The version number of the engine the serverless cache is compatible with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#cfn-elasticache-serverlesscache-majorengineversion
     */
    readonly majorEngineVersion?: string;
    /**
     * Represents the information required for client programs to connect to a cache node.
     *
     * This value is read-only.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#cfn-elasticache-serverlesscache-readerendpoint
     */
    readonly readerEndpoint?: CfnServerlessCache.EndpointProperty | cdk.IResolvable;
    /**
     * The IDs of the EC2 security groups associated with the serverless cache.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#cfn-elasticache-serverlesscache-securitygroupids
     */
    readonly securityGroupIds?: Array<string>;
    /**
     * The unique identifier of the serverless cache.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#cfn-elasticache-serverlesscache-serverlesscachename
     */
    readonly serverlessCacheName: string;
    /**
     * The ARN of the snapshot from which to restore data into the new cache.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#cfn-elasticache-serverlesscache-snapshotarnstorestore
     */
    readonly snapshotArnsToRestore?: Array<string>;
    /**
     * The current setting for the number of serverless cache snapshots the system will retain.
     *
     * Available for Valkey, Redis OSS and Serverless Memcached only.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#cfn-elasticache-serverlesscache-snapshotretentionlimit
     */
    readonly snapshotRetentionLimit?: number;
    /**
     * If no subnet IDs are given and your VPC is in us-west-1, then ElastiCache will select 2 default subnets across AZs in your VPC.
     *
     * For all other Regions, if no subnet IDs are given then ElastiCache will select 3 default subnets across AZs in your default VPC.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#cfn-elasticache-serverlesscache-subnetids
     */
    readonly subnetIds?: Array<string>;
    /**
     * A list of tags to be added to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#cfn-elasticache-serverlesscache-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The identifier of the user group associated with the serverless cache.
     *
     * Available for Valkey and Redis OSS only. Default is NULL.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticache-serverlesscache.html#cfn-elasticache-serverlesscache-usergroupid
     */
    readonly userGroupId?: string;
}
