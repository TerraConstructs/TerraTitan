import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::DynamoDB::GlobalTable` resource enables you to create and manage a Version 2019.11.21 global table. This resource cannot be used to create or manage a Version 2017.11.29 global table. For more information, see [Global tables](https://docs.aws.amazon.com//amazondynamodb/latest/developerguide/GlobalTables.html) .
 *
 * > You cannot convert a resource of type `AWS::DynamoDB::Table` into a resource of type `AWS::DynamoDB::GlobalTable` by changing its type in your template. *Doing so might result in the deletion of your DynamoDB table.*
 * >
 * > You can instead use the GlobalTable resource to create a new table in a single Region. This will be billed the same as a single Region table. If you later update the stack to add other Regions then Global Tables pricing will apply.
 *
 * You should be aware of the following behaviors when working with DynamoDB global tables.
 *
 * - The IAM Principal executing the stack operation must have the permissions listed below in all regions where you plan to have a global table replica. The IAM Principal's permissions should not have restrictions based on IP source address. Some global tables operations (for example, adding a replica) are asynchronous, and require that the IAM Principal is valid until they complete. You should not delete the Principal (user or IAM role) until CloudFormation has finished updating your stack.
 *
 * - `dynamodb:CreateTable`
 * - `dynamodb:UpdateTable`
 * - `dynamodb:DeleteTable`
 * - `dynamodb:DescribeContinuousBackups`
 * - `dynamodb:DescribeContributorInsights`
 * - `dynamodb:DescribeTable`
 * - `dynamodb:DescribeTableReplicaAutoScaling`
 * - `dynamodb:DescribeTimeToLive`
 * - `dynamodb:ListTables`
 * - `dynamodb:UpdateTimeToLive`
 * - `dynamodb:UpdateContributorInsights`
 * - `dynamodb:UpdateContinuousBackups`
 * - `dynamodb:ListTagsOfResource`
 * - `dynamodb:TagResource`
 * - `dynamodb:UntagResource`
 * - `dynamodb:BatchWriteItem`
 * - `dynamodb:CreateTableReplica`
 * - `dynamodb:DeleteItem`
 * - `dynamodb:DeleteTableReplica`
 * - `dynamodb:DisableKinesisStreamingDestination`
 * - `dynamodb:EnableKinesisStreamingDestination`
 * - `dynamodb:GetItem`
 * - `dynamodb:PutItem`
 * - `dynamodb:Query`
 * - `dynamodb:Scan`
 * - `dynamodb:UpdateItem`
 * - `dynamodb:DescribeTableReplicaAutoScaling`
 * - `dynamodb:UpdateTableReplicaAutoScaling`
 * - `iam:CreateServiceLinkedRole`
 * - `kms:CreateGrant`
 * - `kms:DescribeKey`
 * - `application-autoscaling:DeleteScalingPolicy`
 * - `application-autoscaling:DeleteScheduledAction`
 * - `application-autoscaling:DeregisterScalableTarget`
 * - `application-autoscaling:DescribeScalingPolicies`
 * - `application-autoscaling:DescribeScalableTargets`
 * - `application-autoscaling:PutScalingPolicy`
 * - `application-autoscaling:PutScheduledAction`
 * - `application-autoscaling:RegisterScalableTarget`
 * - When using provisioned billing mode, CloudFormation will create an auto scaling policy on each of your replicas to control their write capacities. You must configure this policy using the `WriteProvisionedThroughputSettings` property. CloudFormation will ensure that all replicas have the same write capacity auto scaling property. You cannot directly specify a value for write capacity for a global table.
 * - If your table uses provisioned capacity, you must configure auto scaling directly in the `AWS::DynamoDB::GlobalTable` resource. You should not configure additional auto scaling policies on any of the table replicas or global secondary indexes, either via API or via `AWS::ApplicationAutoScaling::ScalableTarget` or `AWS::ApplicationAutoScaling::ScalingPolicy` . Doing so might result in unexpected behavior and is unsupported.
 * - In AWS CloudFormation , each global table is controlled by a single stack, in a single region, regardless of the number of replicas. When you deploy your template, CloudFormation will create/update all replicas as part of a single stack operation. You should not deploy the same `AWS::DynamoDB::GlobalTable` resource in multiple regions. Doing so will result in errors, and is unsupported. If you deploy your application template in multiple regions, you can use conditions to only create the resource in a single region. Alternatively, you can choose to define your `AWS::DynamoDB::GlobalTable` resources in a stack separate from your application stack, and make sure it is only deployed to a single region.
 *
 * @cloudformationResource AWS::DynamoDB::GlobalTable
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html
 */
export declare class CfnGlobalTable extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGlobalTable from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGlobalTable;
    /**
     * The Amazon Resource Name (ARN) of the DynamoDB table, such as `arn:aws:dynamodb:us-east-2:123456789012:table/myDynamoDBTable` . The ARN returned is that of the replica in the region the stack is deployed to.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ARN of the DynamoDB stream, such as `arn:aws:dynamodb:us-east-1:123456789012:table/testddbstack-myDynamoDBTable-012A1SL7SMP5Q/stream/2015-11-30T20:10:00.000` . The `StreamArn` returned is that of the replica in the region the stack is deployed to.
     *
     * > You must specify the `StreamSpecification` property to use this attribute.
     *
     * @cloudformationAttribute StreamArn
     */
    readonly attrStreamArn: string;
    /**
     * Unique identifier for the table, such as `a123b456-01ab-23cd-123a-111222aaabbb` . The `TableId` returned is that of the replica in the region the stack is deployed to.
     *
     * @cloudformationAttribute TableId
     */
    readonly attrTableId: string;
    /**
     * A list of attributes that describe the key schema for the global table and indexes.
     */
    attributeDefinitions: Array<CfnGlobalTable.AttributeDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies how you are charged for read and write throughput and how you manage capacity. Valid values are:.
     */
    billingMode?: string;
    /**
     * Global secondary indexes to be created on the global table.
     */
    globalSecondaryIndexes?: Array<CfnGlobalTable.GlobalSecondaryIndexProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies the attributes that make up the primary key for the table.
     */
    keySchema: Array<cdk.IResolvable | CfnGlobalTable.KeySchemaProperty> | cdk.IResolvable;
    /**
     * Local secondary indexes to be created on the table.
     */
    localSecondaryIndexes?: Array<cdk.IResolvable | CfnGlobalTable.LocalSecondaryIndexProperty> | cdk.IResolvable;
    /**
     * Specifies the list of replicas for your global table.
     */
    replicas: Array<cdk.IResolvable | CfnGlobalTable.ReplicaSpecificationProperty> | cdk.IResolvable;
    /**
     * Specifies the settings to enable server-side encryption.
     */
    sseSpecification?: cdk.IResolvable | CfnGlobalTable.SSESpecificationProperty;
    /**
     * Specifies the streams settings on your global table.
     */
    streamSpecification?: cdk.IResolvable | CfnGlobalTable.StreamSpecificationProperty;
    /**
     * A name for the global table.
     */
    tableName?: string;
    /**
     * Specifies the time to live (TTL) settings for the table.
     */
    timeToLiveSpecification?: cdk.IResolvable | CfnGlobalTable.TimeToLiveSpecificationProperty;
    /**
     * Provides visibility into the number of read and write operations your table or secondary index can instantaneously support.
     */
    warmThroughput?: cdk.IResolvable | CfnGlobalTable.WarmThroughputProperty;
    /**
     * Sets the write request settings for a global table or a global secondary index.
     */
    writeOnDemandThroughputSettings?: cdk.IResolvable | CfnGlobalTable.WriteOnDemandThroughputSettingsProperty;
    /**
     * Specifies an auto scaling policy for write capacity.
     */
    writeProvisionedThroughputSettings?: cdk.IResolvable | CfnGlobalTable.WriteProvisionedThroughputSettingsProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGlobalTableProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnGlobalTable {
    /**
     * Represents the settings used to enable server-side encryption.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-ssespecification.html
     */
    interface SSESpecificationProperty {
        /**
         * Indicates whether server-side encryption is performed using an AWS managed key or an AWS owned key.
         *
         * If enabled (true), server-side encryption type is set to KMS and an AWS managed key is used ( AWS KMS charges apply). If disabled (false) or not specified,server-side encryption is set to an AWS owned key. If you choose to use KMS encryption, you can also use customer managed KMS keys by specifying them in the `ReplicaSpecification.SSESpecification` object. You cannot mix AWS managed and customer managed KMS keys.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-ssespecification.html#cfn-dynamodb-globaltable-ssespecification-sseenabled
         */
        readonly sseEnabled: boolean | cdk.IResolvable;
        /**
         * Server-side encryption type. The only supported value is:.
         *
         * - `KMS` - Server-side encryption that uses AWS Key Management Service . The key is stored in your account and is managed by AWS KMS ( AWS KMS charges apply).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-ssespecification.html#cfn-dynamodb-globaltable-ssespecification-ssetype
         */
        readonly sseType?: string;
    }
    /**
     * Represents an attribute for describing the schema for the table and indexes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-attributedefinition.html
     */
    interface AttributeDefinitionProperty {
        /**
         * A name for the attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-attributedefinition.html#cfn-dynamodb-globaltable-attributedefinition-attributename
         */
        readonly attributeName: string;
        /**
         * The data type for the attribute, where:.
         *
         * - `S` - the attribute is of type String
         * - `N` - the attribute is of type Number
         * - `B` - the attribute is of type Binary
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-attributedefinition.html#cfn-dynamodb-globaltable-attributedefinition-attributetype
         */
        readonly attributeType: string;
    }
    /**
     * Represents the DynamoDB Streams configuration for a table in DynamoDB.
     *
     * You can only modify this value if your `AWS::DynamoDB::GlobalTable` contains only one entry in `Replicas` . You must specify a value for this property if your `AWS::DynamoDB::GlobalTable` contains more than one replica.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-streamspecification.html
     */
    interface StreamSpecificationProperty {
        /**
         * When an item in the table is modified, `StreamViewType` determines what information is written to the stream for this table.
         *
         * Valid values for `StreamViewType` are:
         *
         * - `KEYS_ONLY` - Only the key attributes of the modified item are written to the stream.
         * - `NEW_IMAGE` - The entire item, as it appears after it was modified, is written to the stream.
         * - `OLD_IMAGE` - The entire item, as it appeared before it was modified, is written to the stream.
         * - `NEW_AND_OLD_IMAGES` - Both the new and the old item images of the item are written to the stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-streamspecification.html#cfn-dynamodb-globaltable-streamspecification-streamviewtype
         */
        readonly streamViewType: string;
    }
    /**
     * Allows you to specify a global secondary index for the global table.
     *
     * The index will be defined on all replicas.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-globalsecondaryindex.html
     */
    interface GlobalSecondaryIndexProperty {
        /**
         * The name of the global secondary index.
         *
         * The name must be unique among all other indexes on this table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-globalsecondaryindex.html#cfn-dynamodb-globaltable-globalsecondaryindex-indexname
         */
        readonly indexName: string;
        /**
         * The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:  - `HASH` - partition key - `RANGE` - sort key  > The partition key of an item is also known as its *hash attribute* .
         *
         * The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
         * >
         * > The sort key of an item is also known as its *range attribute* . The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-globalsecondaryindex.html#cfn-dynamodb-globaltable-globalsecondaryindex-keyschema
         */
        readonly keySchema: Array<cdk.IResolvable | CfnGlobalTable.KeySchemaProperty> | cdk.IResolvable;
        /**
         * Represents attributes that are copied (projected) from the table into the global secondary index.
         *
         * These are in addition to the primary key attributes and index key attributes, which are automatically projected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-globalsecondaryindex.html#cfn-dynamodb-globaltable-globalsecondaryindex-projection
         */
        readonly projection: cdk.IResolvable | CfnGlobalTable.ProjectionProperty;
        /**
         * Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index.
         *
         * If you use this parameter, you must specify `ReadUnitsPerSecond` , `WriteUnitsPerSecond` , or both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-globalsecondaryindex.html#cfn-dynamodb-globaltable-globalsecondaryindex-warmthroughput
         */
        readonly warmThroughput?: cdk.IResolvable | CfnGlobalTable.WarmThroughputProperty;
        /**
         * Sets the write request settings for a global table or a global secondary index.
         *
         * You can only specify this setting if your resource uses the `PAY_PER_REQUEST` `BillingMode` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-globalsecondaryindex.html#cfn-dynamodb-globaltable-globalsecondaryindex-writeondemandthroughputsettings
         */
        readonly writeOnDemandThroughputSettings?: cdk.IResolvable | CfnGlobalTable.WriteOnDemandThroughputSettingsProperty;
        /**
         * Defines write capacity settings for the global secondary index.
         *
         * You must specify a value for this property if the table's `BillingMode` is `PROVISIONED` . All replicas will have the same write capacity settings for this global secondary index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-globalsecondaryindex.html#cfn-dynamodb-globaltable-globalsecondaryindex-writeprovisionedthroughputsettings
         */
        readonly writeProvisionedThroughputSettings?: cdk.IResolvable | CfnGlobalTable.WriteProvisionedThroughputSettingsProperty;
    }
    /**
     * Represents attributes that are copied (projected) from the table into an index.
     *
     * These are in addition to the primary key attributes and index key attributes, which are automatically projected.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-projection.html
     */
    interface ProjectionProperty {
        /**
         * Represents the non-key attribute names which will be projected into the index.
         *
         * For local secondary indexes, the total count of `NonKeyAttributes` summed across all of the local secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-projection.html#cfn-dynamodb-globaltable-projection-nonkeyattributes
         */
        readonly nonKeyAttributes?: Array<string>;
        /**
         * The set of attributes that are projected into the index:.
         *
         * - `KEYS_ONLY` - Only the index and primary keys are projected into the index.
         * - `INCLUDE` - In addition to the attributes described in `KEYS_ONLY` , the secondary index will include other non-key attributes that you specify.
         * - `ALL` - All of the table attributes are projected into the index.
         *
         * When using the DynamoDB console, `ALL` is selected by default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-projection.html#cfn-dynamodb-globaltable-projection-projectiontype
         */
        readonly projectionType?: string;
    }
    /**
     * Represents *a single element* of a key schema.
     *
     * A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.
     *
     * A `KeySchemaElement` represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one `KeySchemaElement` (for the partition key). A composite primary key would require one `KeySchemaElement` for the partition key, and another `KeySchemaElement` for the sort key.
     *
     * A `KeySchemaElement` must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-keyschema.html
     */
    interface KeySchemaProperty {
        /**
         * The name of a key attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-keyschema.html#cfn-dynamodb-globaltable-keyschema-attributename
         */
        readonly attributeName: string;
        /**
         * The role that this key attribute will assume:.
         *
         * - `HASH` - partition key
         * - `RANGE` - sort key
         *
         * > The partition key of an item is also known as its *hash attribute* . The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
         * >
         * > The sort key of an item is also known as its *range attribute* . The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-keyschema.html#cfn-dynamodb-globaltable-keyschema-keytype
         */
        readonly keyType: string;
    }
    /**
     * Specifies an auto scaling policy for write capacity.
     *
     * This policy will be applied to all replicas. This setting must be specified if `BillingMode` is set to `PROVISIONED` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-writeprovisionedthroughputsettings.html
     */
    interface WriteProvisionedThroughputSettingsProperty {
        /**
         * Specifies auto scaling settings for the replica table or global secondary index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-writeprovisionedthroughputsettings.html#cfn-dynamodb-globaltable-writeprovisionedthroughputsettings-writecapacityautoscalingsettings
         */
        readonly writeCapacityAutoScalingSettings?: CfnGlobalTable.CapacityAutoScalingSettingsProperty | cdk.IResolvable;
    }
    /**
     * Configures a scalable target and an autoscaling policy for a table or global secondary index's read or write capacity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-capacityautoscalingsettings.html
     */
    interface CapacityAutoScalingSettingsProperty {
        /**
         * The maximum provisioned capacity units for the global table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-capacityautoscalingsettings.html#cfn-dynamodb-globaltable-capacityautoscalingsettings-maxcapacity
         */
        readonly maxCapacity: number;
        /**
         * The minimum provisioned capacity units for the global table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-capacityautoscalingsettings.html#cfn-dynamodb-globaltable-capacityautoscalingsettings-mincapacity
         */
        readonly minCapacity: number;
        /**
         * When switching billing mode from `PAY_PER_REQUEST` to `PROVISIONED` , DynamoDB requires you to specify read and write capacity unit values for the table and for each global secondary index.
         *
         * These values will be applied to all replicas. The table will use these provisioned values until CloudFormation creates the autoscaling policies you configured in your template. CloudFormation cannot determine what capacity the table and its global secondary indexes will require in this time period, since they are application-dependent.
         *
         * If you want to switch a table's billing mode from `PAY_PER_REQUEST` to `PROVISIONED` , you must specify a value for this property for each autoscaled resource. If you specify different values for the same resource in different regions, CloudFormation will use the highest value found in either the `SeedCapacity` or `ReadCapacityUnits` properties. For example, if your global secondary index `myGSI` has a `SeedCapacity` of 10 in us-east-1 and a fixed `ReadCapacityUnits` of 20 in eu-west-1, CloudFormation will initially set the read capacity for `myGSI` to 20. Note that if you disable `ScaleIn` for `myGSI` in us-east-1, its read capacity units might not be set back to 10.
         *
         * You must also specify a value for `SeedCapacity` when you plan to switch a table's billing mode from `PROVISIONED` to `PAY_PER_REQUEST` , because CloudFormation might need to roll back the operation (reverting the billing mode to `PROVISIONED` ) and this cannot succeed without specifying a value for `SeedCapacity` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-capacityautoscalingsettings.html#cfn-dynamodb-globaltable-capacityautoscalingsettings-seedcapacity
         */
        readonly seedCapacity?: number;
        /**
         * Defines a target tracking scaling policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-capacityautoscalingsettings.html#cfn-dynamodb-globaltable-capacityautoscalingsettings-targettrackingscalingpolicyconfiguration
         */
        readonly targetTrackingScalingPolicyConfiguration: cdk.IResolvable | CfnGlobalTable.TargetTrackingScalingPolicyConfigurationProperty;
    }
    /**
     * Defines a target tracking scaling policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-targettrackingscalingpolicyconfiguration.html
     */
    interface TargetTrackingScalingPolicyConfigurationProperty {
        /**
         * Indicates whether scale in by the target tracking scaling policy is disabled.
         *
         * The default value is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-targettrackingscalingpolicyconfiguration.html#cfn-dynamodb-globaltable-targettrackingscalingpolicyconfiguration-disablescalein
         */
        readonly disableScaleIn?: boolean | cdk.IResolvable;
        /**
         * The amount of time, in seconds, after a scale-in activity completes before another scale-in activity can start.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-targettrackingscalingpolicyconfiguration.html#cfn-dynamodb-globaltable-targettrackingscalingpolicyconfiguration-scaleincooldown
         */
        readonly scaleInCooldown?: number;
        /**
         * The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-targettrackingscalingpolicyconfiguration.html#cfn-dynamodb-globaltable-targettrackingscalingpolicyconfiguration-scaleoutcooldown
         */
        readonly scaleOutCooldown?: number;
        /**
         * Defines a target value for the scaling policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-targettrackingscalingpolicyconfiguration.html#cfn-dynamodb-globaltable-targettrackingscalingpolicyconfiguration-targetvalue
         */
        readonly targetValue: number;
    }
    /**
     * Provides visibility into the number of read and write operations your table or secondary index can instantaneously support.
     *
     * The settings can be modified using the `UpdateTable` operation to meet the throughput requirements of an upcoming peak event.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-warmthroughput.html
     */
    interface WarmThroughputProperty {
        /**
         * Represents the number of read operations your base table can instantaneously support.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-warmthroughput.html#cfn-dynamodb-globaltable-warmthroughput-readunitspersecond
         */
        readonly readUnitsPerSecond?: number;
        /**
         * Represents the number of write operations your base table can instantaneously support.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-warmthroughput.html#cfn-dynamodb-globaltable-warmthroughput-writeunitspersecond
         */
        readonly writeUnitsPerSecond?: number;
    }
    /**
     * Sets the write request settings for a global table or a global secondary index.
     *
     * You can only specify this setting if your resource uses the `PAY_PER_REQUEST` `BillingMode` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-writeondemandthroughputsettings.html
     */
    interface WriteOnDemandThroughputSettingsProperty {
        /**
         * Maximum number of write request settings for the specified replica of a global table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-writeondemandthroughputsettings.html#cfn-dynamodb-globaltable-writeondemandthroughputsettings-maxwriterequestunits
         */
        readonly maxWriteRequestUnits?: number;
    }
    /**
     * Represents the properties of a local secondary index.
     *
     * A local secondary index can only be created when its parent table is created.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-localsecondaryindex.html
     */
    interface LocalSecondaryIndexProperty {
        /**
         * The name of the local secondary index.
         *
         * The name must be unique among all other indexes on this table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-localsecondaryindex.html#cfn-dynamodb-globaltable-localsecondaryindex-indexname
         */
        readonly indexName: string;
        /**
         * The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:  - `HASH` - partition key - `RANGE` - sort key  > The partition key of an item is also known as its *hash attribute* .
         *
         * The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
         * >
         * > The sort key of an item is also known as its *range attribute* . The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-localsecondaryindex.html#cfn-dynamodb-globaltable-localsecondaryindex-keyschema
         */
        readonly keySchema: Array<cdk.IResolvable | CfnGlobalTable.KeySchemaProperty> | cdk.IResolvable;
        /**
         * Represents attributes that are copied (projected) from the table into the local secondary index.
         *
         * These are in addition to the primary key attributes and index key attributes, which are automatically projected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-localsecondaryindex.html#cfn-dynamodb-globaltable-localsecondaryindex-projection
         */
        readonly projection: cdk.IResolvable | CfnGlobalTable.ProjectionProperty;
    }
    /**
     * Defines settings specific to a single replica of a global table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html
     */
    interface ReplicaSpecificationProperty {
        /**
         * The settings used to enable or disable CloudWatch Contributor Insights for the specified replica.
         *
         * When not specified, defaults to contributor insights disabled for the replica.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html#cfn-dynamodb-globaltable-replicaspecification-contributorinsightsspecification
         */
        readonly contributorInsightsSpecification?: CfnGlobalTable.ContributorInsightsSpecificationProperty | cdk.IResolvable;
        /**
         * Determines if a replica is protected from deletion.
         *
         * When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see [Using deletion protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the *Amazon DynamoDB Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html#cfn-dynamodb-globaltable-replicaspecification-deletionprotectionenabled
         */
        readonly deletionProtectionEnabled?: boolean | cdk.IResolvable;
        /**
         * Defines additional settings for the global secondary indexes of this replica.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html#cfn-dynamodb-globaltable-replicaspecification-globalsecondaryindexes
         */
        readonly globalSecondaryIndexes?: Array<cdk.IResolvable | CfnGlobalTable.ReplicaGlobalSecondaryIndexSpecificationProperty> | cdk.IResolvable;
        /**
         * Defines the Kinesis Data Streams configuration for the specified replica.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html#cfn-dynamodb-globaltable-replicaspecification-kinesisstreamspecification
         */
        readonly kinesisStreamSpecification?: cdk.IResolvable | CfnGlobalTable.KinesisStreamSpecificationProperty;
        /**
         * The settings used to enable point in time recovery.
         *
         * When not specified, defaults to point in time recovery disabled for the replica.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html#cfn-dynamodb-globaltable-replicaspecification-pointintimerecoveryspecification
         */
        readonly pointInTimeRecoverySpecification?: cdk.IResolvable | CfnGlobalTable.PointInTimeRecoverySpecificationProperty;
        /**
         * Sets read request settings for the replica table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html#cfn-dynamodb-globaltable-replicaspecification-readondemandthroughputsettings
         */
        readonly readOnDemandThroughputSettings?: cdk.IResolvable | CfnGlobalTable.ReadOnDemandThroughputSettingsProperty;
        /**
         * Defines read capacity settings for the replica table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html#cfn-dynamodb-globaltable-replicaspecification-readprovisionedthroughputsettings
         */
        readonly readProvisionedThroughputSettings?: cdk.IResolvable | CfnGlobalTable.ReadProvisionedThroughputSettingsProperty;
        /**
         * The region in which this replica exists.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html#cfn-dynamodb-globaltable-replicaspecification-region
         */
        readonly region: string;
        /**
         * Represents the DynamoDB Streams configuration for a global table replica.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html#cfn-dynamodb-globaltable-replicaspecification-replicastreamspecification
         */
        readonly replicaStreamSpecification?: cdk.IResolvable | CfnGlobalTable.ReplicaStreamSpecificationProperty;
        /**
         * A resource-based policy document that contains permissions to add to the specified replica of a DynamoDB global table.
         *
         * Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
         *
         * In a CloudFormation template, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to DynamoDB . For more information about resource-based policies, see [Using resource-based policies for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html#cfn-dynamodb-globaltable-replicaspecification-resourcepolicy
         */
        readonly resourcePolicy?: cdk.IResolvable | CfnGlobalTable.ResourcePolicyProperty;
        /**
         * Allows you to specify a customer-managed key for the replica.
         *
         * When using customer-managed keys for server-side encryption, this property must have a value in all replicas.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html#cfn-dynamodb-globaltable-replicaspecification-ssespecification
         */
        readonly sseSpecification?: cdk.IResolvable | CfnGlobalTable.ReplicaSSESpecificationProperty;
        /**
         * The table class of the specified table.
         *
         * Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html#cfn-dynamodb-globaltable-replicaspecification-tableclass
         */
        readonly tableClass?: string;
        /**
         * An array of key-value pairs to apply to this replica.
         *
         * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaspecification.html#cfn-dynamodb-globaltable-replicaspecification-tags
         */
        readonly tags?: Array<cdk.CfnTag>;
    }
    /**
     * Allows you to specify a KMS key identifier to be used for server-side encryption.
     *
     * The key can be specified via ARN, key ID, or alias. The key must be created in the same region as the replica.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicassespecification.html
     */
    interface ReplicaSSESpecificationProperty {
        /**
         * The AWS KMS key that should be used for the AWS KMS encryption.
         *
         * To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key `alias/aws/dynamodb` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicassespecification.html#cfn-dynamodb-globaltable-replicassespecification-kmsmasterkeyid
         */
        readonly kmsMasterKeyId: string;
    }
    /**
     * The Kinesis Data Streams configuration for the specified global table replica.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-kinesisstreamspecification.html
     */
    interface KinesisStreamSpecificationProperty {
        /**
         * The precision for the time and date that the stream was created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-kinesisstreamspecification.html#cfn-dynamodb-globaltable-kinesisstreamspecification-approximatecreationdatetimeprecision
         */
        readonly approximateCreationDateTimePrecision?: string;
        /**
         * The ARN for a specific Kinesis data stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-kinesisstreamspecification.html#cfn-dynamodb-globaltable-kinesisstreamspecification-streamarn
         */
        readonly streamArn: string;
    }
    /**
     * Configures contributor insights settings for a replica or one of its indexes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-contributorinsightsspecification.html
     */
    interface ContributorInsightsSpecificationProperty {
        /**
         * Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-contributorinsightsspecification.html#cfn-dynamodb-globaltable-contributorinsightsspecification-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * Represents the properties of a global secondary index that can be set on a per-replica basis.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaglobalsecondaryindexspecification.html
     */
    interface ReplicaGlobalSecondaryIndexSpecificationProperty {
        /**
         * Updates the status for contributor insights for a specific table or index.
         *
         * CloudWatch Contributor Insights for DynamoDB graphs display the partition key and (if applicable) sort key of frequently accessed items and frequently throttled items in plaintext. If you require the use of AWS Key Management Service (KMS) to encrypt this table’s partition key and sort key data with an AWS managed key or customer managed key, you should not enable CloudWatch Contributor Insights for DynamoDB for this table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaglobalsecondaryindexspecification.html#cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-contributorinsightsspecification
         */
        readonly contributorInsightsSpecification?: CfnGlobalTable.ContributorInsightsSpecificationProperty | cdk.IResolvable;
        /**
         * The name of the global secondary index.
         *
         * The name must be unique among all other indexes on this table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaglobalsecondaryindexspecification.html#cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-indexname
         */
        readonly indexName: string;
        /**
         * Sets the read request settings for a replica global secondary index.
         *
         * You can only specify this setting if your resource uses the `PAY_PER_REQUEST` `BillingMode` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaglobalsecondaryindexspecification.html#cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-readondemandthroughputsettings
         */
        readonly readOnDemandThroughputSettings?: cdk.IResolvable | CfnGlobalTable.ReadOnDemandThroughputSettingsProperty;
        /**
         * Allows you to specify the read capacity settings for a replica global secondary index when the `BillingMode` is set to `PROVISIONED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicaglobalsecondaryindexspecification.html#cfn-dynamodb-globaltable-replicaglobalsecondaryindexspecification-readprovisionedthroughputsettings
         */
        readonly readProvisionedThroughputSettings?: cdk.IResolvable | CfnGlobalTable.ReadProvisionedThroughputSettingsProperty;
    }
    /**
     * Allows you to specify the read capacity settings for a replica table or a replica global secondary index when the `BillingMode` is set to `PROVISIONED` .
     *
     * You must specify a value for either `ReadCapacityUnits` or `ReadCapacityAutoScalingSettings` , but not both. You can switch between fixed capacity and auto scaling.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-readprovisionedthroughputsettings.html
     */
    interface ReadProvisionedThroughputSettingsProperty {
        /**
         * Specifies auto scaling settings for the replica table or global secondary index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-readprovisionedthroughputsettings.html#cfn-dynamodb-globaltable-readprovisionedthroughputsettings-readcapacityautoscalingsettings
         */
        readonly readCapacityAutoScalingSettings?: CfnGlobalTable.CapacityAutoScalingSettingsProperty | cdk.IResolvable;
        /**
         * Specifies a fixed read capacity for the replica table or global secondary index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-readprovisionedthroughputsettings.html#cfn-dynamodb-globaltable-readprovisionedthroughputsettings-readcapacityunits
         */
        readonly readCapacityUnits?: number;
    }
    /**
     * Sets the read request settings for a replica table or a replica global secondary index.
     *
     * You can only specify this setting if your resource uses the `PAY_PER_REQUEST` `BillingMode` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-readondemandthroughputsettings.html
     */
    interface ReadOnDemandThroughputSettingsProperty {
        /**
         * Maximum number of read request units for the specified replica of a global table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-readondemandthroughputsettings.html#cfn-dynamodb-globaltable-readondemandthroughputsettings-maxreadrequestunits
         */
        readonly maxReadRequestUnits?: number;
    }
    /**
     * Represents the settings used to enable point in time recovery.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-pointintimerecoveryspecification.html
     */
    interface PointInTimeRecoverySpecificationProperty {
        /**
         * Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-pointintimerecoveryspecification.html#cfn-dynamodb-globaltable-pointintimerecoveryspecification-pointintimerecoveryenabled
         */
        readonly pointInTimeRecoveryEnabled?: boolean | cdk.IResolvable;
        /**
         * The number of preceding days for which continuous backups are taken and maintained.
         *
         * Your table data is only recoverable to any point-in-time from within the configured recovery period. This parameter is optional. If no value is provided, the value will default to 35.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-pointintimerecoveryspecification.html#cfn-dynamodb-globaltable-pointintimerecoveryspecification-recoveryperiodindays
         */
        readonly recoveryPeriodInDays?: number;
    }
    /**
     * Represents the DynamoDB Streams configuration for a global table replica.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicastreamspecification.html
     */
    interface ReplicaStreamSpecificationProperty {
        /**
         * A resource-based policy document that contains the permissions for the specified stream of a DynamoDB global table replica.
         *
         * Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
         *
         * In a CloudFormation template, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to DynamoDB . For more information about resource-based policies, see [Using resource-based policies for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html) .
         *
         * You can update the `ResourcePolicy` property if you've specified more than one table using the [AWS ::DynamoDB::GlobalTable](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html) resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-replicastreamspecification.html#cfn-dynamodb-globaltable-replicastreamspecification-resourcepolicy
         */
        readonly resourcePolicy: cdk.IResolvable | CfnGlobalTable.ResourcePolicyProperty;
    }
    /**
     * Creates or updates a resource-based policy document that contains the permissions for DynamoDB resources, such as a table, its indexes, and stream.
     *
     * Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
     *
     * In a CloudFormation template, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to DynamoDB . For more information about resource-based policies, see [Using resource-based policies for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html) .
     *
     * While defining resource-based policies in your CloudFormation templates, the following considerations apply:
     *
     * - The maximum size supported for a resource-based policy document in JSON format is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit.
     * - Resource-based policies don't support [drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html#) . If you update a policy outside of the CloudFormation stack template, you'll need to update the CloudFormation stack with the changes.
     * - Resource-based policies don't support out-of-band changes. If you add, update, or delete a policy outside of the CloudFormation template, the change won't be overwritten if there are no changes to the policy within the template.
     *
     * For example, say that your template contains a resource-based policy, which you later update outside of the template. If you don't make any changes to the policy in the template, the updated policy in DynamoDB won’t be synced with the policy in the template.
     *
     * Conversely, say that your template doesn’t contain a resource-based policy, but you add a policy outside of the template. This policy won’t be removed from DynamoDB as long as you don’t add it to the template. When you add a policy to the template and update the stack, the existing policy in DynamoDB will be updated to match the one defined in the template.
     * - Within a resource-based policy, if the action for a DynamoDB service-linked role (SLR) to replicate data for a global table is denied, adding or deleting a replica will fail with an error.
     * - The [AWS ::DynamoDB::GlobalTable](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html) resource doesn't support creating a replica in the same stack update in Regions other than the Region where you deploy the stack update.
     *
     * For a full list of all considerations, see [Resource-based policy considerations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-resourcepolicy.html
     */
    interface ResourcePolicyProperty {
        /**
         * A resource-based policy document that contains permissions to add to the specified DynamoDB table, its indexes, and stream.
         *
         * In a CloudFormation template, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to DynamoDB . For more information about resource-based policies, see [Using resource-based policies for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-resourcepolicy.html#cfn-dynamodb-globaltable-resourcepolicy-policydocument
         */
        readonly policyDocument: any | cdk.IResolvable;
    }
    /**
     * Represents the settings used to enable or disable Time to Live (TTL) for the specified table.
     *
     * All replicas will have the same time to live configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-timetolivespecification.html
     */
    interface TimeToLiveSpecificationProperty {
        /**
         * The name of the attribute used to store the expiration time for items in the table.
         *
         * Currently, you cannot directly change the attribute name used to evaluate time to live. In order to do so, you must first disable time to live, and then re-enable it with the new attribute name. It can take up to one hour for changes to time to live to take effect. If you attempt to modify time to live within that time window, your stack operation might be delayed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-timetolivespecification.html#cfn-dynamodb-globaltable-timetolivespecification-attributename
         */
        readonly attributeName?: string;
        /**
         * Indicates whether TTL is to be enabled (true) or disabled (false) on the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-globaltable-timetolivespecification.html#cfn-dynamodb-globaltable-timetolivespecification-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnGlobalTable`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html
 */
export interface CfnGlobalTableProps {
    /**
     * A list of attributes that describe the key schema for the global table and indexes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-attributedefinitions
     */
    readonly attributeDefinitions: Array<CfnGlobalTable.AttributeDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies how you are charged for read and write throughput and how you manage capacity. Valid values are:.
     *
     * - `PAY_PER_REQUEST`
     * - `PROVISIONED`
     *
     * All replicas in your global table will have the same billing mode. If you use `PROVISIONED` billing mode, you must provide an auto scaling configuration via the `WriteProvisionedThroughputSettings` property. The default value of this property is `PROVISIONED` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-billingmode
     */
    readonly billingMode?: string;
    /**
     * Global secondary indexes to be created on the global table.
     *
     * You can create up to 20 global secondary indexes. Each replica in your global table will have the same global secondary index settings. You can only create or delete one global secondary index in a single stack operation.
     *
     * Since the backfilling of an index could take a long time, CloudFormation does not wait for the index to become active. If a stack operation rolls back, CloudFormation might not delete an index that has been added. In that case, you will need to delete the index manually.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-globalsecondaryindexes
     */
    readonly globalSecondaryIndexes?: Array<CfnGlobalTable.GlobalSecondaryIndexProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies the attributes that make up the primary key for the table.
     *
     * The attributes in the `KeySchema` property must also be defined in the `AttributeDefinitions` property.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-keyschema
     */
    readonly keySchema: Array<cdk.IResolvable | CfnGlobalTable.KeySchemaProperty> | cdk.IResolvable;
    /**
     * Local secondary indexes to be created on the table.
     *
     * You can create up to five local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes. Each replica in your global table will have the same local secondary index settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-localsecondaryindexes
     */
    readonly localSecondaryIndexes?: Array<cdk.IResolvable | CfnGlobalTable.LocalSecondaryIndexProperty> | cdk.IResolvable;
    /**
     * Specifies the list of replicas for your global table.
     *
     * The list must contain at least one element, the region where the stack defining the global table is deployed. For example, if you define your table in a stack deployed to us-east-1, you must have an entry in `Replicas` with the region us-east-1. You cannot remove the replica in the stack region.
     *
     * > Adding a replica might take a few minutes for an empty table, or up to several hours for large tables. If you want to add or remove a replica, we recommend submitting an `UpdateStack` operation containing only that change.
     * >
     * > If you add or delete a replica during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new replica, you might need to manually delete the replica.
     *
     * You can create a new global table with as many replicas as needed. You can add or remove replicas after table creation, but you can only add or remove a single replica in each update.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-replicas
     */
    readonly replicas: Array<cdk.IResolvable | CfnGlobalTable.ReplicaSpecificationProperty> | cdk.IResolvable;
    /**
     * Specifies the settings to enable server-side encryption.
     *
     * These settings will be applied to all replicas. If you plan to use customer-managed KMS keys, you must provide a key for each replica using the `ReplicaSpecification.ReplicaSSESpecification` property.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-ssespecification
     */
    readonly sseSpecification?: cdk.IResolvable | CfnGlobalTable.SSESpecificationProperty;
    /**
     * Specifies the streams settings on your global table.
     *
     * You must provide a value for this property if your global table contains more than one replica. You can only change the streams settings if your global table has only one replica.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-streamspecification
     */
    readonly streamSpecification?: cdk.IResolvable | CfnGlobalTable.StreamSpecificationProperty;
    /**
     * A name for the global table.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID as the table name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * > If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-tablename
     */
    readonly tableName?: string;
    /**
     * Specifies the time to live (TTL) settings for the table.
     *
     * This setting will be applied to all replicas.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-timetolivespecification
     */
    readonly timeToLiveSpecification?: cdk.IResolvable | CfnGlobalTable.TimeToLiveSpecificationProperty;
    /**
     * Provides visibility into the number of read and write operations your table or secondary index can instantaneously support.
     *
     * The settings can be modified using the `UpdateTable` operation to meet the throughput requirements of an upcoming peak event.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-warmthroughput
     */
    readonly warmThroughput?: cdk.IResolvable | CfnGlobalTable.WarmThroughputProperty;
    /**
     * Sets the write request settings for a global table or a global secondary index.
     *
     * You can only specify this setting if your resource uses the `PAY_PER_REQUEST` `BillingMode` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-writeondemandthroughputsettings
     */
    readonly writeOnDemandThroughputSettings?: cdk.IResolvable | CfnGlobalTable.WriteOnDemandThroughputSettingsProperty;
    /**
     * Specifies an auto scaling policy for write capacity.
     *
     * This policy will be applied to all replicas. This setting must be specified if `BillingMode` is set to `PROVISIONED` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-globaltable.html#cfn-dynamodb-globaltable-writeprovisionedthroughputsettings
     */
    readonly writeProvisionedThroughputSettings?: cdk.IResolvable | CfnGlobalTable.WriteProvisionedThroughputSettingsProperty;
}
/**
 * The `AWS::DynamoDB::Table` resource creates a DynamoDB table. For more information, see [CreateTable](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_CreateTable.html) in the *Amazon DynamoDB API Reference* .
 *
 * You should be aware of the following behaviors when working with DynamoDB tables:
 *
 * - AWS CloudFormation typically creates DynamoDB tables in parallel. However, if your template includes multiple DynamoDB tables with indexes, you must declare dependencies so that the tables are created sequentially. Amazon DynamoDB limits the number of tables with secondary indexes that are in the creating state. If you create multiple tables with indexes at the same time, DynamoDB returns an error and the stack operation fails. For an example, see [DynamoDB Table with a DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#aws-resource-dynamodb-table--examples--DynamoDB_Table_with_a_DependsOn_Attribute) .
 *
 * > Our guidance is to use the latest schema documented for your AWS CloudFormation templates. This schema supports the provisioning of all table settings below. When using this schema in your AWS CloudFormation templates, please ensure that your Identity and Access Management ( IAM ) policies are updated with appropriate permissions to allow for the authorization of these setting changes.
 *
 * @cloudformationResource AWS::DynamoDB::Table
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html
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
     * The Amazon Resource Name (ARN) of the DynamoDB table, such as `arn:aws:dynamodb:us-east-2:123456789012:table/myDynamoDBTable` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ARN of the DynamoDB stream, such as `arn:aws:dynamodb:us-east-1:123456789012:table/testddbstack-myDynamoDBTable-012A1SL7SMP5Q/stream/2015-11-30T20:10:00.000` .
     *
     * > You must specify the `StreamSpecification` property to use this attribute.
     *
     * @cloudformationAttribute StreamArn
     */
    readonly attrStreamArn: string;
    /**
     * A list of attributes that describe the key schema for the table and indexes.
     */
    attributeDefinitions?: Array<CfnTable.AttributeDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specify how you are charged for read and write throughput and how you manage capacity.
     */
    billingMode?: string;
    /**
     * The settings used to enable or disable CloudWatch Contributor Insights for the specified table.
     */
    contributorInsightsSpecification?: CfnTable.ContributorInsightsSpecificationProperty | cdk.IResolvable;
    /**
     * Determines if a table is protected from deletion.
     */
    deletionProtectionEnabled?: boolean | cdk.IResolvable;
    /**
     * Global secondary indexes to be created on the table. You can create up to 20 global secondary indexes.
     */
    globalSecondaryIndexes?: Array<CfnTable.GlobalSecondaryIndexProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies the properties of data being imported from the S3 bucket source to the" table.
     */
    importSourceSpecification?: CfnTable.ImportSourceSpecificationProperty | cdk.IResolvable;
    /**
     * Specifies the attributes that make up the primary key for the table.
     */
    keySchema: Array<cdk.IResolvable | CfnTable.KeySchemaProperty> | cdk.IResolvable;
    /**
     * The Kinesis Data Streams configuration for the specified table.
     */
    kinesisStreamSpecification?: cdk.IResolvable | CfnTable.KinesisStreamSpecificationProperty;
    /**
     * Local secondary indexes to be created on the table.
     */
    localSecondaryIndexes?: Array<cdk.IResolvable | CfnTable.LocalSecondaryIndexProperty> | cdk.IResolvable;
    /**
     * Sets the maximum number of read and write units for the specified on-demand table.
     */
    onDemandThroughput?: cdk.IResolvable | CfnTable.OnDemandThroughputProperty;
    /**
     * The settings used to enable point in time recovery.
     */
    pointInTimeRecoverySpecification?: cdk.IResolvable | CfnTable.PointInTimeRecoverySpecificationProperty;
    /**
     * Throughput for the specified table, which consists of values for `ReadCapacityUnits` and `WriteCapacityUnits` .
     */
    provisionedThroughput?: cdk.IResolvable | CfnTable.ProvisionedThroughputProperty;
    /**
     * A resource-based policy document that contains permissions to add to the specified table.
     */
    resourcePolicy?: cdk.IResolvable | CfnTable.ResourcePolicyProperty;
    /**
     * Specifies the settings to enable server-side encryption.
     */
    sseSpecification?: cdk.IResolvable | CfnTable.SSESpecificationProperty;
    /**
     * The settings for the DynamoDB table stream, which capture changes to items stored in the table.
     */
    streamSpecification?: cdk.IResolvable | CfnTable.StreamSpecificationProperty;
    /**
     * The table class of the new table.
     */
    tableClass?: string;
    /**
     * A name for the table.
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
     * Specifies the Time to Live (TTL) settings for the table.
     */
    timeToLiveSpecification?: cdk.IResolvable | CfnTable.TimeToLiveSpecificationProperty;
    /**
     * Represents the warm throughput (in read units per second and write units per second) for creating a table.
     */
    warmThroughput?: cdk.IResolvable | CfnTable.WarmThroughputProperty;
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
     * Represents the settings used to enable server-side encryption.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-ssespecification.html
     */
    interface SSESpecificationProperty {
        /**
         * The AWS KMS key that should be used for the AWS KMS encryption.
         *
         * To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key `alias/aws/dynamodb` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-ssespecification.html#cfn-dynamodb-table-ssespecification-kmsmasterkeyid
         */
        readonly kmsMasterKeyId?: string;
        /**
         * Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key.
         *
         * If enabled (true), server-side encryption type is set to `KMS` and an AWS managed key is used ( AWS KMS charges apply). If disabled (false) or not specified, server-side encryption is set to AWS owned key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-ssespecification.html#cfn-dynamodb-table-ssespecification-sseenabled
         */
        readonly sseEnabled: boolean | cdk.IResolvable;
        /**
         * Server-side encryption type. The only supported value is:.
         *
         * - `KMS` - Server-side encryption that uses AWS Key Management Service . The key is stored in your account and is managed by AWS KMS ( AWS KMS charges apply).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-ssespecification.html#cfn-dynamodb-table-ssespecification-ssetype
         */
        readonly sseType?: string;
    }
    /**
     * The Kinesis Data Streams configuration for the specified table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-kinesisstreamspecification.html
     */
    interface KinesisStreamSpecificationProperty {
        /**
         * The precision for the time and date that the stream was created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-kinesisstreamspecification.html#cfn-dynamodb-table-kinesisstreamspecification-approximatecreationdatetimeprecision
         */
        readonly approximateCreationDateTimePrecision?: string;
        /**
         * The ARN for a specific Kinesis data stream.
         *
         * Length Constraints: Minimum length of 37. Maximum length of 1024.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-kinesisstreamspecification.html#cfn-dynamodb-table-kinesisstreamspecification-streamarn
         */
        readonly streamArn: string;
    }
    /**
     * Represents the DynamoDB Streams configuration for a table in DynamoDB.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-streamspecification.html
     */
    interface StreamSpecificationProperty {
        /**
         * Creates or updates a resource-based policy document that contains the permissions for DynamoDB resources, such as a table's streams.
         *
         * Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
         *
         * In a CloudFormation template, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to DynamoDB . For more information about resource-based policies, see [Using resource-based policies for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-streamspecification.html#cfn-dynamodb-table-streamspecification-resourcepolicy
         */
        readonly resourcePolicy?: cdk.IResolvable | CfnTable.ResourcePolicyProperty;
        /**
         * When an item in the table is modified, `StreamViewType` determines what information is written to the stream for this table.
         *
         * Valid values for `StreamViewType` are:
         *
         * - `KEYS_ONLY` - Only the key attributes of the modified item are written to the stream.
         * - `NEW_IMAGE` - The entire item, as it appears after it was modified, is written to the stream.
         * - `OLD_IMAGE` - The entire item, as it appeared before it was modified, is written to the stream.
         * - `NEW_AND_OLD_IMAGES` - Both the new and the old item images of the item are written to the stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-streamspecification.html#cfn-dynamodb-table-streamspecification-streamviewtype
         */
        readonly streamViewType: string;
    }
    /**
     * Creates or updates a resource-based policy document that contains the permissions for DynamoDB resources, such as a table, its indexes, and stream.
     *
     * Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
     *
     * In a CloudFormation template, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to DynamoDB . For more information about resource-based policies, see [Using resource-based policies for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html) .
     *
     * While defining resource-based policies in your CloudFormation templates, the following considerations apply:
     *
     * - The maximum size supported for a resource-based policy document in JSON format is 20 KB. DynamoDB counts whitespaces when calculating the size of a policy against this limit.
     * - Resource-based policies don't support [drift detection](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-stack-drift.html#) . If you update a policy outside of the CloudFormation stack template, you'll need to update the CloudFormation stack with the changes.
     * - Resource-based policies don't support out-of-band changes. If you add, update, or delete a policy outside of the CloudFormation template, the change won't be overwritten if there are no changes to the policy within the template.
     *
     * For example, say that your template contains a resource-based policy, which you later update outside of the template. If you don't make any changes to the policy in the template, the updated policy in DynamoDB won’t be synced with the policy in the template.
     *
     * Conversely, say that your template doesn’t contain a resource-based policy, but you add a policy outside of the template. This policy won’t be removed from DynamoDB as long as you don’t add it to the template. When you add a policy to the template and update the stack, the existing policy in DynamoDB will be updated to match the one defined in the template.
     *
     * For a full list of all considerations, see [Resource-based policy considerations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-resourcepolicy.html
     */
    interface ResourcePolicyProperty {
        /**
         * A resource-based policy document that contains permissions to add to the specified DynamoDB table, index, or both.
         *
         * In a CloudFormation template, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to DynamoDB . For more information about resource-based policies, see [Using resource-based policies for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-resourcepolicy.html#cfn-dynamodb-table-resourcepolicy-policydocument
         */
        readonly policyDocument: any | cdk.IResolvable;
    }
    /**
     * The settings used to enable or disable CloudWatch Contributor Insights.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-contributorinsightsspecification.html
     */
    interface ContributorInsightsSpecificationProperty {
        /**
         * Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-contributorinsightsspecification.html#cfn-dynamodb-table-contributorinsightsspecification-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
    /**
     * Specifies the properties of data being imported from the S3 bucket source to the table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-importsourcespecification.html
     */
    interface ImportSourceSpecificationProperty {
        /**
         * Type of compression to be used on the input coming from the imported table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-importsourcespecification.html#cfn-dynamodb-table-importsourcespecification-inputcompressiontype
         */
        readonly inputCompressionType?: string;
        /**
         * The format of the source data.
         *
         * Valid values for `ImportFormat` are `CSV` , `DYNAMODB_JSON` or `ION` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-importsourcespecification.html#cfn-dynamodb-table-importsourcespecification-inputformat
         */
        readonly inputFormat: string;
        /**
         * Additional properties that specify how the input is formatted,.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-importsourcespecification.html#cfn-dynamodb-table-importsourcespecification-inputformatoptions
         */
        readonly inputFormatOptions?: CfnTable.InputFormatOptionsProperty | cdk.IResolvable;
        /**
         * The S3 bucket that provides the source for the import.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-importsourcespecification.html#cfn-dynamodb-table-importsourcespecification-s3bucketsource
         */
        readonly s3BucketSource: cdk.IResolvable | CfnTable.S3BucketSourceProperty;
    }
    /**
     * The S3 bucket that is being imported from.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-s3bucketsource.html
     */
    interface S3BucketSourceProperty {
        /**
         * The S3 bucket that is being imported from.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-s3bucketsource.html#cfn-dynamodb-table-s3bucketsource-s3bucket
         */
        readonly s3Bucket: string;
        /**
         * The account number of the S3 bucket that is being imported from.
         *
         * If the bucket is owned by the requester this is optional.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-s3bucketsource.html#cfn-dynamodb-table-s3bucketsource-s3bucketowner
         */
        readonly s3BucketOwner?: string;
        /**
         * The key prefix shared by all S3 Objects that are being imported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-s3bucketsource.html#cfn-dynamodb-table-s3bucketsource-s3keyprefix
         */
        readonly s3KeyPrefix?: string;
    }
    /**
     * The format options for the data that was imported into the target table.
     *
     * There is one value, CsvOption.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-inputformatoptions.html
     */
    interface InputFormatOptionsProperty {
        /**
         * The options for imported source files in CSV format.
         *
         * The values are Delimiter and HeaderList.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-inputformatoptions.html#cfn-dynamodb-table-inputformatoptions-csv
         */
        readonly csv?: CfnTable.CsvProperty | cdk.IResolvable;
    }
    /**
     * The options for imported source files in CSV format.
     *
     * The values are Delimiter and HeaderList.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-csv.html
     */
    interface CsvProperty {
        /**
         * The delimiter used for separating items in the CSV file being imported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-csv.html#cfn-dynamodb-table-csv-delimiter
         */
        readonly delimiter?: string;
        /**
         * List of the headers used to specify a common header for all source CSV files being imported.
         *
         * If this field is specified then the first line of each CSV file is treated as data instead of the header. If this field is not specified the the first line of each CSV file is treated as the header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-csv.html#cfn-dynamodb-table-csv-headerlist
         */
        readonly headerList?: Array<string>;
    }
    /**
     * The settings used to enable point in time recovery.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-pointintimerecoveryspecification.html
     */
    interface PointInTimeRecoverySpecificationProperty {
        /**
         * Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-pointintimerecoveryspecification.html#cfn-dynamodb-table-pointintimerecoveryspecification-pointintimerecoveryenabled
         */
        readonly pointInTimeRecoveryEnabled?: boolean | cdk.IResolvable;
        /**
         * The number of preceding days for which continuous backups are taken and maintained.
         *
         * Your table data is only recoverable to any point-in-time from within the configured recovery period. This parameter is optional. If no value is provided, the value will default to 35.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-pointintimerecoveryspecification.html#cfn-dynamodb-table-pointintimerecoveryspecification-recoveryperiodindays
         */
        readonly recoveryPeriodInDays?: number;
    }
    /**
     * Throughput for the specified table, which consists of values for `ReadCapacityUnits` and `WriteCapacityUnits` .
     *
     * For more information about the contents of a provisioned throughput structure, see [Amazon DynamoDB Table ProvisionedThroughput](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-provisionedthroughput.html
     */
    interface ProvisionedThroughputProperty {
        /**
         * The maximum number of strongly consistent reads consumed per second before DynamoDB returns a `ThrottlingException` .
         *
         * For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide* .
         *
         * If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-provisionedthroughput.html#cfn-dynamodb-table-provisionedthroughput-readcapacityunits
         */
        readonly readCapacityUnits: number;
        /**
         * The maximum number of writes consumed per second before DynamoDB returns a `ThrottlingException` .
         *
         * For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide* .
         *
         * If read/write capacity mode is `PAY_PER_REQUEST` the value is set to 0.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-provisionedthroughput.html#cfn-dynamodb-table-provisionedthroughput-writecapacityunits
         */
        readonly writeCapacityUnits: number;
    }
    /**
     * Represents an attribute for describing the schema for the table and indexes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-attributedefinition.html
     */
    interface AttributeDefinitionProperty {
        /**
         * A name for the attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-attributedefinition.html#cfn-dynamodb-table-attributedefinition-attributename
         */
        readonly attributeName: string;
        /**
         * The data type for the attribute, where:.
         *
         * - `S` - the attribute is of type String
         * - `N` - the attribute is of type Number
         * - `B` - the attribute is of type Binary
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-attributedefinition.html#cfn-dynamodb-table-attributedefinition-attributetype
         */
        readonly attributeType: string;
    }
    /**
     * Represents the properties of a global secondary index.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-globalsecondaryindex.html
     */
    interface GlobalSecondaryIndexProperty {
        /**
         * The settings used to enable or disable CloudWatch Contributor Insights for the specified global secondary index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-globalsecondaryindex.html#cfn-dynamodb-table-globalsecondaryindex-contributorinsightsspecification
         */
        readonly contributorInsightsSpecification?: CfnTable.ContributorInsightsSpecificationProperty | cdk.IResolvable;
        /**
         * The name of the global secondary index.
         *
         * The name must be unique among all other indexes on this table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-globalsecondaryindex.html#cfn-dynamodb-table-globalsecondaryindex-indexname
         */
        readonly indexName: string;
        /**
         * The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:  - `HASH` - partition key - `RANGE` - sort key  > The partition key of an item is also known as its *hash attribute* .
         *
         * The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
         * >
         * > The sort key of an item is also known as its *range attribute* . The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-globalsecondaryindex.html#cfn-dynamodb-table-globalsecondaryindex-keyschema
         */
        readonly keySchema: Array<cdk.IResolvable | CfnTable.KeySchemaProperty> | cdk.IResolvable;
        /**
         * The maximum number of read and write units for the specified global secondary index.
         *
         * If you use this parameter, you must specify `MaxReadRequestUnits` , `MaxWriteRequestUnits` , or both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-globalsecondaryindex.html#cfn-dynamodb-table-globalsecondaryindex-ondemandthroughput
         */
        readonly onDemandThroughput?: cdk.IResolvable | CfnTable.OnDemandThroughputProperty;
        /**
         * Represents attributes that are copied (projected) from the table into the global secondary index.
         *
         * These are in addition to the primary key attributes and index key attributes, which are automatically projected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-globalsecondaryindex.html#cfn-dynamodb-table-globalsecondaryindex-projection
         */
        readonly projection: cdk.IResolvable | CfnTable.ProjectionProperty;
        /**
         * Represents the provisioned throughput settings for the specified global secondary index.
         *
         * For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the *Amazon DynamoDB Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-globalsecondaryindex.html#cfn-dynamodb-table-globalsecondaryindex-provisionedthroughput
         */
        readonly provisionedThroughput?: cdk.IResolvable | CfnTable.ProvisionedThroughputProperty;
        /**
         * Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index.
         *
         * If you use this parameter, you must specify `ReadUnitsPerSecond` , `WriteUnitsPerSecond` , or both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-globalsecondaryindex.html#cfn-dynamodb-table-globalsecondaryindex-warmthroughput
         */
        readonly warmThroughput?: cdk.IResolvable | CfnTable.WarmThroughputProperty;
    }
    /**
     * Represents attributes that are copied (projected) from the table into an index.
     *
     * These are in addition to the primary key attributes and index key attributes, which are automatically projected.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-projection.html
     */
    interface ProjectionProperty {
        /**
         * Represents the non-key attribute names which will be projected into the index.
         *
         * For local secondary indexes, the total count of `NonKeyAttributes` summed across all of the local secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-projection.html#cfn-dynamodb-table-projection-nonkeyattributes
         */
        readonly nonKeyAttributes?: Array<string>;
        /**
         * The set of attributes that are projected into the index:.
         *
         * - `KEYS_ONLY` - Only the index and primary keys are projected into the index.
         * - `INCLUDE` - In addition to the attributes described in `KEYS_ONLY` , the secondary index will include other non-key attributes that you specify.
         * - `ALL` - All of the table attributes are projected into the index.
         *
         * When using the DynamoDB console, `ALL` is selected by default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-projection.html#cfn-dynamodb-table-projection-projectiontype
         */
        readonly projectionType?: string;
    }
    /**
     * Represents *a single element* of a key schema.
     *
     * A key schema specifies the attributes that make up the primary key of a table, or the key attributes of an index.
     *
     * A `KeySchemaElement` represents exactly one attribute of the primary key. For example, a simple primary key would be represented by one `KeySchemaElement` (for the partition key). A composite primary key would require one `KeySchemaElement` for the partition key, and another `KeySchemaElement` for the sort key.
     *
     * A `KeySchemaElement` must be a scalar, top-level attribute (not a nested attribute). The data type must be one of String, Number, or Binary. The attribute cannot be nested within a List or a Map.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-keyschema.html
     */
    interface KeySchemaProperty {
        /**
         * The name of a key attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-keyschema.html#cfn-dynamodb-table-keyschema-attributename
         */
        readonly attributeName: string;
        /**
         * The role that this key attribute will assume:.
         *
         * - `HASH` - partition key
         * - `RANGE` - sort key
         *
         * > The partition key of an item is also known as its *hash attribute* . The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
         * >
         * > The sort key of an item is also known as its *range attribute* . The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-keyschema.html#cfn-dynamodb-table-keyschema-keytype
         */
        readonly keyType: string;
    }
    /**
     * Sets the maximum number of read and write units for the specified on-demand table.
     *
     * If you use this property, you must specify `MaxReadRequestUnits` , `MaxWriteRequestUnits` , or both.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-ondemandthroughput.html
     */
    interface OnDemandThroughputProperty {
        /**
         * Maximum number of read request units for the specified table.
         *
         * To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxReadRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxReadRequestUnits` to -1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-ondemandthroughput.html#cfn-dynamodb-table-ondemandthroughput-maxreadrequestunits
         */
        readonly maxReadRequestUnits?: number;
        /**
         * Maximum number of write request units for the specified table.
         *
         * To specify a maximum `OnDemandThroughput` on your table, set the value of `MaxWriteRequestUnits` as greater than or equal to 1. To remove the maximum `OnDemandThroughput` that is currently set on your table, set the value of `MaxWriteRequestUnits` to -1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-ondemandthroughput.html#cfn-dynamodb-table-ondemandthroughput-maxwriterequestunits
         */
        readonly maxWriteRequestUnits?: number;
    }
    /**
     * Provides visibility into the number of read and write operations your table or secondary index can instantaneously support.
     *
     * The settings can be modified using the `UpdateTable` operation to meet the throughput requirements of an upcoming peak event.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-warmthroughput.html
     */
    interface WarmThroughputProperty {
        /**
         * Represents the number of read operations your base table can instantaneously support.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-warmthroughput.html#cfn-dynamodb-table-warmthroughput-readunitspersecond
         */
        readonly readUnitsPerSecond?: number;
        /**
         * Represents the number of write operations your base table can instantaneously support.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-warmthroughput.html#cfn-dynamodb-table-warmthroughput-writeunitspersecond
         */
        readonly writeUnitsPerSecond?: number;
    }
    /**
     * Represents the properties of a local secondary index.
     *
     * A local secondary index can only be created when its parent table is created.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-localsecondaryindex.html
     */
    interface LocalSecondaryIndexProperty {
        /**
         * The name of the local secondary index.
         *
         * The name must be unique among all other indexes on this table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-localsecondaryindex.html#cfn-dynamodb-table-localsecondaryindex-indexname
         */
        readonly indexName: string;
        /**
         * The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:  - `HASH` - partition key - `RANGE` - sort key  > The partition key of an item is also known as its *hash attribute* .
         *
         * The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
         * >
         * > The sort key of an item is also known as its *range attribute* . The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-localsecondaryindex.html#cfn-dynamodb-table-localsecondaryindex-keyschema
         */
        readonly keySchema: Array<cdk.IResolvable | CfnTable.KeySchemaProperty> | cdk.IResolvable;
        /**
         * Represents attributes that are copied (projected) from the table into the local secondary index.
         *
         * These are in addition to the primary key attributes and index key attributes, which are automatically projected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-localsecondaryindex.html#cfn-dynamodb-table-localsecondaryindex-projection
         */
        readonly projection: cdk.IResolvable | CfnTable.ProjectionProperty;
    }
    /**
     * Represents the settings used to enable or disable Time to Live (TTL) for the specified table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-timetolivespecification.html
     */
    interface TimeToLiveSpecificationProperty {
        /**
         * The name of the TTL attribute used to store the expiration time for items in the table.
         *
         * > - The `AttributeName` property is required when enabling the TTL, or when TTL is already enabled.
         * > - To update this property, you must first disable TTL and then enable TTL with the new attribute name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-timetolivespecification.html#cfn-dynamodb-table-timetolivespecification-attributename
         */
        readonly attributeName?: string;
        /**
         * Indicates whether TTL is to be enabled (true) or disabled (false) on the table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-dynamodb-table-timetolivespecification.html#cfn-dynamodb-table-timetolivespecification-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnTable`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html
 */
export interface CfnTableProps {
    /**
     * A list of attributes that describe the key schema for the table and indexes.
     *
     * This property is required to create a DynamoDB table.
     *
     * Update requires: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt) . Replacement if you edit an existing AttributeDefinition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-attributedefinitions
     */
    readonly attributeDefinitions?: Array<CfnTable.AttributeDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specify how you are charged for read and write throughput and how you manage capacity.
     *
     * Valid values include:
     *
     * - `PAY_PER_REQUEST` - We recommend using `PAY_PER_REQUEST` for most DynamoDB workloads. `PAY_PER_REQUEST` sets the billing mode to [On-demand capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/on-demand-capacity-mode.html) .
     * - `PROVISIONED` - We recommend using `PROVISIONED` for steady workloads with predictable growth where capacity requirements can be reliably forecasted. `PROVISIONED` sets the billing mode to [Provisioned capacity mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/provisioned-capacity-mode.html) .
     *
     * If not specified, the default is `PROVISIONED` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-billingmode
     */
    readonly billingMode?: string;
    /**
     * The settings used to enable or disable CloudWatch Contributor Insights for the specified table.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-contributorinsightsspecification
     */
    readonly contributorInsightsSpecification?: CfnTable.ContributorInsightsSpecificationProperty | cdk.IResolvable;
    /**
     * Determines if a table is protected from deletion.
     *
     * When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see [Using deletion protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the *Amazon DynamoDB Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-deletionprotectionenabled
     */
    readonly deletionProtectionEnabled?: boolean | cdk.IResolvable;
    /**
     * Global secondary indexes to be created on the table. You can create up to 20 global secondary indexes.
     *
     * > If you update a table to include a new global secondary index, AWS CloudFormation initiates the index creation and then proceeds with the stack update. AWS CloudFormation doesn't wait for the index to complete creation because the backfilling phase can take a long time, depending on the size of the table. You can't use the index or update the table until the index's status is `ACTIVE` . You can track its status by using the DynamoDB [DescribeTable](https://docs.aws.amazon.com/cli/latest/reference/dynamodb/describe-table.html) command.
     * >
     * > If you add or delete an index during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new index, you must manually delete the index.
     * >
     * > Updates are not supported. The following are exceptions:
     * >
     * > - If you update either the contributor insights specification or the provisioned throughput values of global secondary indexes, you can update the table without interruption.
     * > - You can delete or add one global secondary index without interruption. If you do both in the same update (for example, by changing the index's logical ID), the update fails.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-globalsecondaryindexes
     */
    readonly globalSecondaryIndexes?: Array<CfnTable.GlobalSecondaryIndexProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Specifies the properties of data being imported from the S3 bucket source to the" table.
     *
     * > If you specify the `ImportSourceSpecification` property, and also specify either the `StreamSpecification` , the `TableClass` property, the `DeletionProtectionEnabled` property, or the `WarmThroughput` property, the IAM entity creating/updating stack must have `UpdateTable` permission.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-importsourcespecification
     */
    readonly importSourceSpecification?: CfnTable.ImportSourceSpecificationProperty | cdk.IResolvable;
    /**
     * Specifies the attributes that make up the primary key for the table.
     *
     * The attributes in the `KeySchema` property must also be defined in the `AttributeDefinitions` property.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-keyschema
     */
    readonly keySchema: Array<cdk.IResolvable | CfnTable.KeySchemaProperty> | cdk.IResolvable;
    /**
     * The Kinesis Data Streams configuration for the specified table.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-kinesisstreamspecification
     */
    readonly kinesisStreamSpecification?: cdk.IResolvable | CfnTable.KinesisStreamSpecificationProperty;
    /**
     * Local secondary indexes to be created on the table.
     *
     * You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-localsecondaryindexes
     */
    readonly localSecondaryIndexes?: Array<cdk.IResolvable | CfnTable.LocalSecondaryIndexProperty> | cdk.IResolvable;
    /**
     * Sets the maximum number of read and write units for the specified on-demand table.
     *
     * If you use this property, you must specify `MaxReadRequestUnits` , `MaxWriteRequestUnits` , or both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-ondemandthroughput
     */
    readonly onDemandThroughput?: cdk.IResolvable | CfnTable.OnDemandThroughputProperty;
    /**
     * The settings used to enable point in time recovery.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-pointintimerecoveryspecification
     */
    readonly pointInTimeRecoverySpecification?: cdk.IResolvable | CfnTable.PointInTimeRecoverySpecificationProperty;
    /**
     * Throughput for the specified table, which consists of values for `ReadCapacityUnits` and `WriteCapacityUnits` .
     *
     * For more information about the contents of a provisioned throughput structure, see [Amazon DynamoDB Table ProvisionedThroughput](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html) .
     *
     * If you set `BillingMode` as `PROVISIONED` , you must specify this property. If you set `BillingMode` as `PAY_PER_REQUEST` , you cannot specify this property.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-provisionedthroughput
     */
    readonly provisionedThroughput?: cdk.IResolvable | CfnTable.ProvisionedThroughputProperty;
    /**
     * A resource-based policy document that contains permissions to add to the specified table.
     *
     * In a CloudFormation template, you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to DynamoDB . For more information about resource-based policies, see [Using resource-based policies for DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html) .
     *
     * When you attach a resource-based policy while creating a table, the policy creation is *strongly consistent* . For information about the considerations that you should keep in mind while attaching a resource-based policy, see [Resource-based policy considerations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-resourcepolicy
     */
    readonly resourcePolicy?: cdk.IResolvable | CfnTable.ResourcePolicyProperty;
    /**
     * Specifies the settings to enable server-side encryption.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-ssespecification
     */
    readonly sseSpecification?: cdk.IResolvable | CfnTable.SSESpecificationProperty;
    /**
     * The settings for the DynamoDB table stream, which capture changes to items stored in the table.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-streamspecification
     */
    readonly streamSpecification?: cdk.IResolvable | CfnTable.StreamSpecificationProperty;
    /**
     * The table class of the new table.
     *
     * Valid values are `STANDARD` and `STANDARD_INFREQUENT_ACCESS` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-tableclass
     */
    readonly tableClass?: string;
    /**
     * A name for the table.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * > If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-tablename
     */
    readonly tableName?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies the Time to Live (TTL) settings for the table.
     *
     * > For detailed information about the limits in DynamoDB, see [Limits in Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the Amazon DynamoDB Developer Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-timetolivespecification
     */
    readonly timeToLiveSpecification?: cdk.IResolvable | CfnTable.TimeToLiveSpecificationProperty;
    /**
     * Represents the warm throughput (in read units per second and write units per second) for creating a table.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html#cfn-dynamodb-table-warmthroughput
     */
    readonly warmThroughput?: cdk.IResolvable | CfnTable.WarmThroughputProperty;
}
