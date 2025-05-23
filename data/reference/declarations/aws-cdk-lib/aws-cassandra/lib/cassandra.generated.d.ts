import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * You can use the `AWS::Cassandra::Keyspace` resource to create a new keyspace in Amazon Keyspaces (for Apache Cassandra).
 *
 * For more information, see [Create a keyspace](https://docs.aws.amazon.com/keyspaces/latest/devguide/getting-started.keyspaces.html) in the *Amazon Keyspaces Developer Guide* .
 *
 * @cloudformationResource AWS::Cassandra::Keyspace
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html
 */
export declare class CfnKeyspace extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnKeyspace from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnKeyspace;
    /**
     * Indicates whether client-side timestamps are enabled (true) or disabled (false) for all tables in the keyspace.
     */
    clientSideTimestampsEnabled?: boolean | cdk.IResolvable;
    /**
     * The name of the keyspace to be created.
     */
    keyspaceName?: string;
    /**
     * Specifies the `ReplicationStrategy` of a keyspace. The options are:.
     */
    replicationSpecification?: cdk.IResolvable | CfnKeyspace.ReplicationSpecificationProperty;
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
    constructor(scope: constructs.Construct, id: string, props?: CfnKeyspaceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnKeyspace {
    /**
     * You can use `ReplicationSpecification` to configure the `ReplicationStrategy` of a keyspace in Amazon Keyspaces .
     *
     * The `ReplicationSpecification` property applies automatically to all tables in the keyspace.
     *
     * To review the permissions that are required to add a new Region to a single-Region keyspace, see [Configure the IAM permissions required to add an AWS Region to a keyspace](https://docs.aws.amazon.com/keyspaces/latest/devguide/howitworks_replication_permissions_addReplica.html) in the *Amazon Keyspaces Developer Guide* .
     *
     * For more information about multi-Region replication, see [Multi-Region replication](https://docs.aws.amazon.com/keyspaces/latest/devguide/multiRegion-replication.html) in the *Amazon Keyspaces Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-keyspace-replicationspecification.html
     */
    interface ReplicationSpecificationProperty {
        /**
         * Specifies the AWS Regions that the keyspace is replicated in.
         *
         * You must specify at least two and up to six Regions, including the Region that the keyspace is being created in.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-keyspace-replicationspecification.html#cfn-cassandra-keyspace-replicationspecification-regionlist
         */
        readonly regionList?: Array<string>;
        /**
         * The options are:.
         *
         * - `SINGLE_REGION` (optional)
         * - `MULTI_REGION`
         *
         * If no value is specified, the default is `SINGLE_REGION` . If `MULTI_REGION` is specified, `RegionList` is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-keyspace-replicationspecification.html#cfn-cassandra-keyspace-replicationspecification-replicationstrategy
         */
        readonly replicationStrategy?: string;
    }
}
/**
 * Properties for defining a `CfnKeyspace`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html
 */
export interface CfnKeyspaceProps {
    /**
     * Indicates whether client-side timestamps are enabled (true) or disabled (false) for all tables in the keyspace.
     *
     * To add a Region to a single-Region keyspace with at least one table, the value must be set to true. After you've enabled client-side timestamps for a table, you can’t disable it again.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html#cfn-cassandra-keyspace-clientsidetimestampsenabled
     */
    readonly clientSideTimestampsEnabled?: boolean | cdk.IResolvable;
    /**
     * The name of the keyspace to be created.
     *
     * The keyspace name is case sensitive. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the keyspace name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * *Length constraints:* Minimum length of 3. Maximum length of 255.
     *
     * *Pattern:* `^[a-zA-Z0-9][a-zA-Z0-9_]{1,47}$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html#cfn-cassandra-keyspace-keyspacename
     */
    readonly keyspaceName?: string;
    /**
     * Specifies the `ReplicationStrategy` of a keyspace. The options are:.
     *
     * - `SINGLE_REGION` for a single Region keyspace (optional) or
     * - `MULTI_REGION` for a multi-Region keyspace
     *
     * If no `ReplicationStrategy` is provided, the default is `SINGLE_REGION` . If you choose `MULTI_REGION` , you must also provide a `RegionList` with the AWS Regions that the keyspace is replicated in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html#cfn-cassandra-keyspace-replicationspecification
     */
    readonly replicationSpecification?: cdk.IResolvable | CfnKeyspace.ReplicationSpecificationProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-keyspace.html#cfn-cassandra-keyspace-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * You can use the `AWS::Cassandra::Table` resource to create a new table in Amazon Keyspaces (for Apache Cassandra).
 *
 * For more information, see [Create a table](https://docs.aws.amazon.com/keyspaces/latest/devguide/getting-started.tables.html) in the *Amazon Keyspaces Developer Guide* .
 *
 * @cloudformationResource AWS::Cassandra::Table
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html
 */
export declare class CfnTable extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTable from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTable;
    /**
     * The optional auto scaling capacity settings for a table in provisioned capacity mode.
     */
    autoScalingSpecifications?: CfnTable.AutoScalingSpecificationProperty | cdk.IResolvable;
    /**
     * The billing mode for the table, which determines how you'll be charged for reads and writes:.
     */
    billingMode?: CfnTable.BillingModeProperty | cdk.IResolvable;
    /**
     * Enables client-side timestamps for the table.
     */
    clientSideTimestampsEnabled?: boolean | cdk.IResolvable;
    /**
     * One or more columns that determine how the table data is sorted.
     */
    clusteringKeyColumns?: Array<CfnTable.ClusteringKeyColumnProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The default Time To Live (TTL) value for all rows in a table in seconds.
     */
    defaultTimeToLive?: number;
    /**
     * The encryption at rest options for the table.
     */
    encryptionSpecification?: CfnTable.EncryptionSpecificationProperty | cdk.IResolvable;
    /**
     * The name of the keyspace to create the table in.
     */
    keyspaceName: string;
    /**
     * One or more columns that uniquely identify every row in the table.
     */
    partitionKeyColumns: Array<CfnTable.ColumnProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies if point-in-time recovery is enabled or disabled for the table.
     */
    pointInTimeRecoveryEnabled?: boolean | cdk.IResolvable;
    /**
     * One or more columns that are not part of the primary key - that is, columns that are *not* defined as partition key columns or clustering key columns.
     */
    regularColumns?: Array<CfnTable.ColumnProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The AWS Region specific settings of a multi-Region table.
     */
    replicaSpecifications?: Array<cdk.IResolvable | CfnTable.ReplicaSpecificationProperty> | cdk.IResolvable;
    /**
     * The name of the table to be created.
     */
    tableName?: string;
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
    constructor(scope: constructs.Construct, id: string, props: CfnTableProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTable {
    /**
     * Defines an individual column within the clustering key.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-clusteringkeycolumn.html
     */
    interface ClusteringKeyColumnProperty {
        /**
         * The name and data type of this clustering key column.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-clusteringkeycolumn.html#cfn-cassandra-table-clusteringkeycolumn-column
         */
        readonly column: CfnTable.ColumnProperty | cdk.IResolvable;
        /**
         * The order in which this column's data is stored:.
         *
         * - `ASC` (default) - The column's data is stored in ascending order.
         * - `DESC` - The column's data is stored in descending order.
         *
         * @default - "ASC"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-clusteringkeycolumn.html#cfn-cassandra-table-clusteringkeycolumn-orderby
         */
        readonly orderBy?: string;
    }
    /**
     * The name and data type of an individual column in a table.
     *
     * In addition to the data type, you can also use the following two keywords:
     *
     * - `STATIC` if the table has a clustering column. Static columns store values that are shared by all rows in the same partition.
     * - `FROZEN` for collection data types. In frozen collections the values of the collection are serialized into a single immutable value, and Amazon Keyspaces treats them like a `BLOB` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-column.html
     */
    interface ColumnProperty {
        /**
         * The name of the column.
         *
         * For more information, see [Identifiers](https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.elements.identifier) in the *Amazon Keyspaces Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-column.html#cfn-cassandra-table-column-columnname
         */
        readonly columnName: string;
        /**
         * The data type of the column.
         *
         * For more information, see [Data types](https://docs.aws.amazon.com/keyspaces/latest/devguide/cql.elements.html#cql.data-types) in the *Amazon Keyspaces Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-column.html#cfn-cassandra-table-column-columntype
         */
        readonly columnType: string;
    }
    /**
     * Determines the billing mode for the table - on-demand or provisioned.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-billingmode.html
     */
    interface BillingModeProperty {
        /**
         * The billing mode for the table:.
         *
         * - On-demand mode - `ON_DEMAND`
         * - Provisioned mode - `PROVISIONED`
         *
         * > If you choose `PROVISIONED` mode, then you also need to specify provisioned throughput (read and write capacity) for the table.
         *
         * Valid values: `ON_DEMAND` | `PROVISIONED`
         *
         * @default - "ON_DEMAND"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-billingmode.html#cfn-cassandra-table-billingmode-mode
         */
        readonly mode: string;
        /**
         * The provisioned read capacity and write capacity for the table.
         *
         * For more information, see [Provisioned throughput capacity mode](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html#ReadWriteCapacityMode.Provisioned) in the *Amazon Keyspaces Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-billingmode.html#cfn-cassandra-table-billingmode-provisionedthroughput
         */
        readonly provisionedThroughput?: cdk.IResolvable | CfnTable.ProvisionedThroughputProperty;
    }
    /**
     * The provisioned throughput for the table, which consists of `ReadCapacityUnits` and `WriteCapacityUnits` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-provisionedthroughput.html
     */
    interface ProvisionedThroughputProperty {
        /**
         * The amount of read capacity that's provisioned for the table.
         *
         * For more information, see [Read/write capacity mode](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html) in the *Amazon Keyspaces Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-provisionedthroughput.html#cfn-cassandra-table-provisionedthroughput-readcapacityunits
         */
        readonly readCapacityUnits: number;
        /**
         * The amount of write capacity that's provisioned for the table.
         *
         * For more information, see [Read/write capacity mode](https://docs.aws.amazon.com/keyspaces/latest/devguide/ReadWriteCapacityMode.html) in the *Amazon Keyspaces Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-provisionedthroughput.html#cfn-cassandra-table-provisionedthroughput-writecapacityunits
         */
        readonly writeCapacityUnits: number;
    }
    /**
     * Specifies the encryption at rest option selected for the table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-encryptionspecification.html
     */
    interface EncryptionSpecificationProperty {
        /**
         * The encryption at rest options for the table.
         *
         * - *AWS owned key* (default) - `AWS_OWNED_KMS_KEY`
         * - *Customer managed key* - `CUSTOMER_MANAGED_KMS_KEY`
         *
         * > If you choose `CUSTOMER_MANAGED_KMS_KEY` , a `kms_key_identifier` in the format of a key ARN is required.
         *
         * Valid values: `CUSTOMER_MANAGED_KMS_KEY` | `AWS_OWNED_KMS_KEY` .
         *
         * @default - "AWS_OWNED_KMS_KEY"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-encryptionspecification.html#cfn-cassandra-table-encryptionspecification-encryptiontype
         */
        readonly encryptionType: string;
        /**
         * Requires a `kms_key_identifier` in the format of a key ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-encryptionspecification.html#cfn-cassandra-table-encryptionspecification-kmskeyidentifier
         */
        readonly kmsKeyIdentifier?: string;
    }
    /**
     * The optional auto scaling capacity settings for a table in provisioned capacity mode.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-autoscalingspecification.html
     */
    interface AutoScalingSpecificationProperty {
        /**
         * The auto scaling settings for the table's read capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-autoscalingspecification.html#cfn-cassandra-table-autoscalingspecification-readcapacityautoscaling
         */
        readonly readCapacityAutoScaling?: CfnTable.AutoScalingSettingProperty | cdk.IResolvable;
        /**
         * The auto scaling settings for the table's write capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-autoscalingspecification.html#cfn-cassandra-table-autoscalingspecification-writecapacityautoscaling
         */
        readonly writeCapacityAutoScaling?: CfnTable.AutoScalingSettingProperty | cdk.IResolvable;
    }
    /**
     * The optional auto scaling settings for a table with provisioned throughput capacity.
     *
     * To turn on auto scaling for a table in `throughputMode:PROVISIONED` , you must specify the following parameters.
     *
     * Configure the minimum and maximum capacity units. The auto scaling policy ensures that capacity never goes below the minimum or above the maximum range.
     *
     * - `minimumUnits` : The minimum level of throughput the table should always be ready to support. The value must be between 1 and the max throughput per second quota for your account (40,000 by default).
     * - `maximumUnits` : The maximum level of throughput the table should always be ready to support. The value must be between 1 and the max throughput per second quota for your account (40,000 by default).
     * - `scalingPolicy` : Amazon Keyspaces supports the `target tracking` scaling policy. The auto scaling target is a percentage of the provisioned capacity of the table.
     *
     * For more information, see [Managing throughput capacity automatically with Amazon Keyspaces auto scaling](https://docs.aws.amazon.com/keyspaces/latest/devguide/autoscaling.html) in the *Amazon Keyspaces Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-autoscalingsetting.html
     */
    interface AutoScalingSettingProperty {
        /**
         * This optional parameter enables auto scaling for the table if set to `false` .
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-autoscalingsetting.html#cfn-cassandra-table-autoscalingsetting-autoscalingdisabled
         */
        readonly autoScalingDisabled?: boolean | cdk.IResolvable;
        /**
         * Manage costs by specifying the maximum amount of throughput to provision.
         *
         * The value must be between 1 and the max throughput per second quota for your account (40,000 by default).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-autoscalingsetting.html#cfn-cassandra-table-autoscalingsetting-maximumunits
         */
        readonly maximumUnits?: number;
        /**
         * The minimum level of throughput the table should always be ready to support.
         *
         * The value must be between 1 and the max throughput per second quota for your account (40,000 by default).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-autoscalingsetting.html#cfn-cassandra-table-autoscalingsetting-minimumunits
         */
        readonly minimumUnits?: number;
        /**
         * Amazon Keyspaces supports the `target tracking` auto scaling policy.
         *
         * With this policy, Amazon Keyspaces auto scaling ensures that the table's ratio of consumed to provisioned capacity stays at or near the target value that you specify. You define the target value as a percentage between 20 and 90.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-autoscalingsetting.html#cfn-cassandra-table-autoscalingsetting-scalingpolicy
         */
        readonly scalingPolicy?: cdk.IResolvable | CfnTable.ScalingPolicyProperty;
    }
    /**
     * Amazon Keyspaces supports the `target tracking` auto scaling policy.
     *
     * With this policy, Amazon Keyspaces auto scaling ensures that the table's ratio of consumed to provisioned capacity stays at or near the target value that you specify. You define the target value as a percentage between 20 and 90.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-scalingpolicy.html
     */
    interface ScalingPolicyProperty {
        /**
         * The auto scaling policy that scales a table based on the ratio of consumed to provisioned capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-scalingpolicy.html#cfn-cassandra-table-scalingpolicy-targettrackingscalingpolicyconfiguration
         */
        readonly targetTrackingScalingPolicyConfiguration?: cdk.IResolvable | CfnTable.TargetTrackingScalingPolicyConfigurationProperty;
    }
    /**
     * Amazon Keyspaces supports the `target tracking` auto scaling policy for a provisioned table.
     *
     * This policy scales a table based on the ratio of consumed to provisioned capacity. The auto scaling target is a percentage of the provisioned capacity of the table.
     *
     * - `targetTrackingScalingPolicyConfiguration` : To define the target tracking policy, you must define the target value.
     *
     * - `targetValue` : The target utilization rate of the table. Amazon Keyspaces auto scaling ensures that the ratio of consumed capacity to provisioned capacity stays at or near this value. You define `targetValue` as a percentage. A `double` between 20 and 90. (Required)
     * - `disableScaleIn` : A `boolean` that specifies if `scale-in` is disabled or enabled for the table. This parameter is disabled by default. To turn on `scale-in` , set the `boolean` value to `FALSE` . This means that capacity for a table can be automatically scaled down on your behalf. (Optional)
     * - `scaleInCooldown` : A cooldown period in seconds between scaling activities that lets the table stabilize before another scale in activity starts. If no value is provided, the default is 0. (Optional)
     * - `scaleOutCooldown` : A cooldown period in seconds between scaling activities that lets the table stabilize before another scale out activity starts. If no value is provided, the default is 0. (Optional)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-targettrackingscalingpolicyconfiguration.html
     */
    interface TargetTrackingScalingPolicyConfigurationProperty {
        /**
         * Specifies if `scale-in` is enabled.
         *
         * When auto scaling automatically decreases capacity for a table, the table *scales in* . When scaling policies are set, they can't scale in the table lower than its minimum capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-targettrackingscalingpolicyconfiguration.html#cfn-cassandra-table-targettrackingscalingpolicyconfiguration-disablescalein
         */
        readonly disableScaleIn?: boolean | cdk.IResolvable;
        /**
         * Specifies a `scale-in` cool down period.
         *
         * A cooldown period in seconds between scaling activities that lets the table stabilize before another scaling activity starts.
         *
         * @default - 0
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-targettrackingscalingpolicyconfiguration.html#cfn-cassandra-table-targettrackingscalingpolicyconfiguration-scaleincooldown
         */
        readonly scaleInCooldown?: number;
        /**
         * Specifies a scale out cool down period.
         *
         * A cooldown period in seconds between scaling activities that lets the table stabilize before another scaling activity starts.
         *
         * @default - 0
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-targettrackingscalingpolicyconfiguration.html#cfn-cassandra-table-targettrackingscalingpolicyconfiguration-scaleoutcooldown
         */
        readonly scaleOutCooldown?: number;
        /**
         * Specifies the target value for the target tracking auto scaling policy.
         *
         * Amazon Keyspaces auto scaling scales up capacity automatically when traffic exceeds this target utilization rate, and then back down when it falls below the target. This ensures that the ratio of consumed capacity to provisioned capacity stays at or near this value. You define `targetValue` as a percentage. An `integer` between 20 and 90.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-targettrackingscalingpolicyconfiguration.html#cfn-cassandra-table-targettrackingscalingpolicyconfiguration-targetvalue
         */
        readonly targetValue: number;
    }
    /**
     * The AWS Region specific settings of a multi-Region table.
     *
     * For a multi-Region table, you can configure the table's read capacity differently per AWS Region. You can do this by configuring the following parameters.
     *
     * - `region` : The Region where these settings are applied. (Required)
     * - `readCapacityUnits` : The provisioned read capacity units. (Optional)
     * - `readCapacityAutoScaling` : The read capacity auto scaling settings for the table. (Optional)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-replicaspecification.html
     */
    interface ReplicaSpecificationProperty {
        /**
         * The read capacity auto scaling settings for the multi-Region table in the specified AWS Region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-replicaspecification.html#cfn-cassandra-table-replicaspecification-readcapacityautoscaling
         */
        readonly readCapacityAutoScaling?: CfnTable.AutoScalingSettingProperty | cdk.IResolvable;
        /**
         * The provisioned read capacity units for the multi-Region table in the specified AWS Region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-replicaspecification.html#cfn-cassandra-table-replicaspecification-readcapacityunits
         */
        readonly readCapacityUnits?: number;
        /**
         * The AWS Region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-table-replicaspecification.html#cfn-cassandra-table-replicaspecification-region
         */
        readonly region: string;
    }
}
/**
 * Properties for defining a `CfnTable`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html
 */
export interface CfnTableProps {
    /**
     * The optional auto scaling capacity settings for a table in provisioned capacity mode.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-autoscalingspecifications
     */
    readonly autoScalingSpecifications?: CfnTable.AutoScalingSpecificationProperty | cdk.IResolvable;
    /**
     * The billing mode for the table, which determines how you'll be charged for reads and writes:.
     *
     * - *On-demand mode* (default) - You pay based on the actual reads and writes your application performs.
     * - *Provisioned mode* - Lets you specify the number of reads and writes per second that you need for your application.
     *
     * If you don't specify a value for this property, then the table will use on-demand mode.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-billingmode
     */
    readonly billingMode?: CfnTable.BillingModeProperty | cdk.IResolvable;
    /**
     * Enables client-side timestamps for the table.
     *
     * By default, the setting is disabled. You can enable client-side timestamps with the following option:
     *
     * - `status: "enabled"`
     *
     * After client-side timestamps are enabled for a table, you can't disable this setting.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-clientsidetimestampsenabled
     */
    readonly clientSideTimestampsEnabled?: boolean | cdk.IResolvable;
    /**
     * One or more columns that determine how the table data is sorted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-clusteringkeycolumns
     */
    readonly clusteringKeyColumns?: Array<CfnTable.ClusteringKeyColumnProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The default Time To Live (TTL) value for all rows in a table in seconds.
     *
     * The maximum configurable value is 630,720,000 seconds, which is the equivalent of 20 years. By default, the TTL value for a table is 0, which means data does not expire.
     *
     * For more information, see [Setting the default TTL value for a table](https://docs.aws.amazon.com/keyspaces/latest/devguide/TTL-how-it-works.html#ttl-howitworks_default_ttl) in the *Amazon Keyspaces Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-defaulttimetolive
     */
    readonly defaultTimeToLive?: number;
    /**
     * The encryption at rest options for the table.
     *
     * - *AWS owned key* (default) - The key is owned by Amazon Keyspaces .
     * - *Customer managed key* - The key is stored in your account and is created, owned, and managed by you.
     *
     * > If you choose encryption with a customer managed key, you must specify a valid customer managed KMS key with permissions granted to Amazon Keyspaces.
     *
     * For more information, see [Encryption at rest in Amazon Keyspaces](https://docs.aws.amazon.com/keyspaces/latest/devguide/EncryptionAtRest.html) in the *Amazon Keyspaces Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-encryptionspecification
     */
    readonly encryptionSpecification?: CfnTable.EncryptionSpecificationProperty | cdk.IResolvable;
    /**
     * The name of the keyspace to create the table in.
     *
     * The keyspace must already exist.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-keyspacename
     */
    readonly keyspaceName: string;
    /**
     * One or more columns that uniquely identify every row in the table.
     *
     * Every table must have a partition key.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-partitionkeycolumns
     */
    readonly partitionKeyColumns: Array<CfnTable.ColumnProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies if point-in-time recovery is enabled or disabled for the table.
     *
     * The options are `PointInTimeRecoveryEnabled=true` and `PointInTimeRecoveryEnabled=false` . If not specified, the default is `PointInTimeRecoveryEnabled=false` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-pointintimerecoveryenabled
     */
    readonly pointInTimeRecoveryEnabled?: boolean | cdk.IResolvable;
    /**
     * One or more columns that are not part of the primary key - that is, columns that are *not* defined as partition key columns or clustering key columns.
     *
     * You can add regular columns to existing tables by adding them to the template.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-regularcolumns
     */
    readonly regularColumns?: Array<CfnTable.ColumnProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The AWS Region specific settings of a multi-Region table.
     *
     * For a multi-Region table, you can configure the table's read capacity differently per AWS Region. You can do this by configuring the following parameters.
     *
     * - `region` : The Region where these settings are applied. (Required)
     * - `readCapacityUnits` : The provisioned read capacity units. (Optional)
     * - `readCapacityAutoScaling` : The read capacity auto scaling settings for the table. (Optional)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-replicaspecifications
     */
    readonly replicaSpecifications?: Array<cdk.IResolvable | CfnTable.ReplicaSpecificationProperty> | cdk.IResolvable;
    /**
     * The name of the table to be created.
     *
     * The table name is case sensitive. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the table name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * > If you specify a name, you can't perform updates that require replacing this resource. You can perform updates that require no interruption or some interruption. If you must replace the resource, specify a new name.
     *
     * *Length constraints:* Minimum length of 3. Maximum length of 255.
     *
     * *Pattern:* `^[a-zA-Z0-9][a-zA-Z0-9_]{1,47}$`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-tablename
     */
    readonly tableName?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-table.html#cfn-cassandra-table-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `CreateType` operation creates a new user-defined type in the specified keyspace.
 *
 * To configure the required permissions, see [Permissions to create a UDT](https://docs.aws.amazon.com/keyspaces/latest/devguide/configure-udt-permissions.html#udt-permissions-create) in the *Amazon Keyspaces Developer Guide* .
 *
 * For more information, see [User-defined types (UDTs)](https://docs.aws.amazon.com/keyspaces/latest/devguide/udts.html) in the *Amazon Keyspaces Developer Guide* .
 *
 * @cloudformationResource AWS::Cassandra::Type
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-type.html
 */
export declare class CfnType extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnType from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnType;
    /**
     * A list of user-defined types that use this type.
     *
     * @cloudformationAttribute DirectParentTypes
     */
    readonly attrDirectParentTypes: Array<string>;
    /**
     * A list of tables that use this type.
     *
     * @cloudformationAttribute DirectReferringTables
     */
    readonly attrDirectReferringTables: Array<string>;
    /**
     * The unique identifier of the keyspace that contains this type in the format of Amazon Resource Name (ARN)
     *
     * @cloudformationAttribute KeyspaceArn
     */
    readonly attrKeyspaceArn: string;
    /**
     * The last time this type was modified.
     *
     * @cloudformationAttribute LastModifiedTimestamp
     */
    readonly attrLastModifiedTimestamp: cdk.IResolvable;
    /**
     * The maximum nesting depth of this type. For more information, see [Amazon Keyspaces UDT quotas and default values](https://docs.aws.amazon.com/keyspaces/latest/devguide/quotas.html#quotas-udts) in the *Amazon Keyspaces Developer Guide* .
     *
     * @cloudformationAttribute MaxNestingDepth
     */
    readonly attrMaxNestingDepth: number;
    /**
     * A list of fields that define this type.
     */
    fields: Array<CfnType.FieldProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the keyspace to create the type in.
     */
    keyspaceName: string;
    /**
     * The name of the user-defined type.
     */
    typeName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTypeProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnType {
    /**
     * The name and data type of an individual field in a user-defined type (UDT).
     *
     * In addition to a Cassandra data type, you can also use another UDT. When you nest another UDT or collection data type, you have to declare them with the `FROZEN` keyword.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-type-field.html
     */
    interface FieldProperty {
        /**
         * The name of the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-type-field.html#cfn-cassandra-type-field-fieldname
         */
        readonly fieldName: string;
        /**
         * The data type of the field.
         *
         * This can be any Cassandra data type or another user-defined type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cassandra-type-field.html#cfn-cassandra-type-field-fieldtype
         */
        readonly fieldType: string;
    }
}
/**
 * Properties for defining a `CfnType`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-type.html
 */
export interface CfnTypeProps {
    /**
     * A list of fields that define this type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-type.html#cfn-cassandra-type-fields
     */
    readonly fields: Array<CfnType.FieldProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the keyspace to create the type in.
     *
     * The keyspace must already exist.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-type.html#cfn-cassandra-type-keyspacename
     */
    readonly keyspaceName: string;
    /**
     * The name of the user-defined type.
     *
     * UDT names must contain 48 characters or less, must begin with an alphabetic character, and can only contain alpha-numeric characters and underscores. Amazon Keyspaces converts upper case characters automatically into lower case characters. For more information, see [Create a user-defined type (UDT) in Amazon Keyspaces](https://docs.aws.amazon.com/keyspaces/latest/devguide/keyspaces-create-udt.html) in the *Amazon Keyspaces Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-type.html#cfn-cassandra-type-typename
     */
    readonly typeName: string;
}
