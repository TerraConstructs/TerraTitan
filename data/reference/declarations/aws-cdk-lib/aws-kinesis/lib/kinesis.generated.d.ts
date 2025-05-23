import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a Kinesis stream that captures and transports data records that are emitted from data sources.
 *
 * For information about creating streams, see [CreateStream](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_CreateStream.html) in the Amazon Kinesis API Reference.
 *
 * @cloudformationResource AWS::Kinesis::Stream
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html
 */
export declare class CfnStream extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStream from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStream;
    /**
     * The Amazon resource name (ARN) of the Kinesis stream, such as `arn:aws:kinesis:us-east-2:123456789012:stream/mystream` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of the Kinesis stream.
     */
    name?: string;
    /**
     * The number of hours for the data records that are stored in shards to remain accessible.
     */
    retentionPeriodHours?: number;
    /**
     * The number of shards that the stream uses.
     */
    shardCount?: number;
    /**
     * When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream.
     */
    streamEncryption?: cdk.IResolvable | CfnStream.StreamEncryptionProperty;
    /**
     * Specifies the capacity mode to which you want to set your data stream.
     */
    streamModeDetails?: cdk.IResolvable | CfnStream.StreamModeDetailsProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An arbitrary set of tags (key–value pairs) to associate with the Kinesis stream.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnStreamProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStream {
    /**
     * Specifies the capacity mode to which you want to set your data stream.
     *
     * Currently, in Kinesis Data Streams, you can choose between an *on-demand* capacity mode and a *provisioned* capacity mode for your data streams.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streammodedetails.html
     */
    interface StreamModeDetailsProperty {
        /**
         * Specifies the capacity mode to which you want to set your data stream.
         *
         * Currently, in Kinesis Data Streams, you can choose between an *on-demand* capacity mode and a *provisioned* capacity mode for your data streams.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streammodedetails.html#cfn-kinesis-stream-streammodedetails-streammode
         */
        readonly streamMode: string;
    }
    /**
     * Enables or updates server-side encryption using an AWS KMS key for a specified stream.
     *
     * > When invoking this API, you must use either the `StreamARN` or the `StreamName` parameter, or both. It is recommended that you use the `StreamARN` input parameter when you invoke this API.
     *
     * Starting encryption is an asynchronous operation. Upon receiving the request, Kinesis Data Streams returns immediately and sets the status of the stream to `UPDATING` . After the update is complete, Kinesis Data Streams sets the status of the stream back to `ACTIVE` . Updating or applying encryption normally takes a few seconds to complete, but it can take minutes. You can continue to read and write data to your stream while its status is `UPDATING` . Once the status of the stream is `ACTIVE` , encryption begins for records written to the stream.
     *
     * API Limits: You can successfully apply a new AWS KMS key for server-side encryption 25 times in a rolling 24-hour period.
     *
     * Note: It can take up to 5 seconds after the stream is in an `ACTIVE` status before all records written to the stream are encrypted. After you enable encryption, you can verify that encryption is applied by inspecting the API response from `PutRecord` or `PutRecords` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streamencryption.html
     */
    interface StreamEncryptionProperty {
        /**
         * The encryption type to use.
         *
         * The only valid value is `KMS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streamencryption.html#cfn-kinesis-stream-streamencryption-encryptiontype
         */
        readonly encryptionType: string;
        /**
         * The GUID for the customer-managed AWS KMS key to use for encryption.
         *
         * This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias `aws/kinesis` .
         *
         * - Key ARN example: `arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012`
         * - Alias ARN example: `arn:aws:kms:us-east-1:123456789012:alias/MyAliasName`
         * - Globally unique key ID example: `12345678-1234-1234-1234-123456789012`
         * - Alias name example: `alias/MyAliasName`
         * - Master key owned by Kinesis Data Streams: `alias/aws/kinesis`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesis-stream-streamencryption.html#cfn-kinesis-stream-streamencryption-keyid
         */
        readonly keyId: string;
    }
}
/**
 * Properties for defining a `CfnStream`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html
 */
export interface CfnStreamProps {
    /**
     * The name of the Kinesis stream.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the stream name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html#cfn-kinesis-stream-name
     */
    readonly name?: string;
    /**
     * The number of hours for the data records that are stored in shards to remain accessible.
     *
     * The default value is 24. For more information about the stream retention period, see [Changing the Data Retention Period](https://docs.aws.amazon.com/streams/latest/dev/kinesis-extended-retention.html) in the Amazon Kinesis Developer Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html#cfn-kinesis-stream-retentionperiodhours
     */
    readonly retentionPeriodHours?: number;
    /**
     * The number of shards that the stream uses.
     *
     * For greater provisioned throughput, increase the number of shards.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html#cfn-kinesis-stream-shardcount
     */
    readonly shardCount?: number;
    /**
     * When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream.
     *
     * Removing this property from your stack template and updating your stack disables encryption.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html#cfn-kinesis-stream-streamencryption
     */
    readonly streamEncryption?: cdk.IResolvable | CfnStream.StreamEncryptionProperty;
    /**
     * Specifies the capacity mode to which you want to set your data stream.
     *
     * Currently, in Kinesis Data Streams, you can choose between an *on-demand* capacity mode and a *provisioned* capacity mode for your data streams.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html#cfn-kinesis-stream-streammodedetails
     */
    readonly streamModeDetails?: cdk.IResolvable | CfnStream.StreamModeDetailsProperty;
    /**
     * An arbitrary set of tags (key–value pairs) to associate with the Kinesis stream.
     *
     * For information about constraints for this property, see [Tag Restrictions](https://docs.aws.amazon.com/streams/latest/dev/tagging.html#tagging-restrictions) in the *Amazon Kinesis Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-stream.html#cfn-kinesis-stream-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Use the AWS CloudFormation `AWS::Kinesis::StreamConsumer` resource to register a consumer with a Kinesis data stream.
 *
 * The consumer you register can then call [SubscribeToShard](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_SubscribeToShard.html) to receive data from the stream using enhanced fan-out, at a rate of up to 2 MiB per second for every shard you subscribe to. This rate is unaffected by the total number of consumers that read from the same stream.
 *
 * You can register up to five consumers per stream. However, you can request a limit increase using the [Kinesis Data Streams limits form](https://docs.aws.amazon.com/support/v1?#/) . A given consumer can only be registered with one stream at a time.
 *
 * For more information, see [Using Consumers with Enhanced Fan-Out](https://docs.aws.amazon.com/streams/latest/dev/introduction-to-enhanced-consumers.html) .
 *
 * @cloudformationResource AWS::Kinesis::StreamConsumer
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html
 */
export declare class CfnStreamConsumer extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStreamConsumer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStreamConsumer;
    /**
     * When you register a consumer, Kinesis Data Streams generates an ARN for it. You need this ARN to be able to call [SubscribeToShard](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_SubscribeToShard.html) .
     *
     * If you delete a consumer and then create a new one with the same name, it won't have the same ARN. That's because consumer ARNs contain the creation timestamp. This is important to keep in mind if you have IAM policies that reference consumer ARNs.
     *
     * @cloudformationAttribute ConsumerARN
     */
    readonly attrConsumerArn: string;
    /**
     * The time at which the consumer was created.
     *
     * @cloudformationAttribute ConsumerCreationTimestamp
     */
    readonly attrConsumerCreationTimestamp: string;
    /**
     * The name you gave the consumer when you registered it.
     *
     * @cloudformationAttribute ConsumerName
     */
    readonly attrConsumerName: string;
    /**
     * A consumer can't read data while in the `CREATING` or `DELETING` states.
     *
     * @cloudformationAttribute ConsumerStatus
     */
    readonly attrConsumerStatus: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The ARN of the data stream with which the consumer is registered.
     *
     * @cloudformationAttribute StreamARN
     */
    readonly attrStreamArn: string;
    /**
     * The name of the consumer is something you choose when you register the consumer.
     */
    consumerName: string;
    /**
     * The ARN of the stream with which you registered the consumer.
     */
    streamArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStreamConsumerProps);
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
 * Properties for defining a `CfnStreamConsumer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html
 */
export interface CfnStreamConsumerProps {
    /**
     * The name of the consumer is something you choose when you register the consumer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html#cfn-kinesis-streamconsumer-consumername
     */
    readonly consumerName: string;
    /**
     * The ARN of the stream with which you registered the consumer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-streamconsumer.html#cfn-kinesis-streamconsumer-streamarn
     */
    readonly streamArn: string;
}
/**
 * Attaches a resource-based policy to a data stream or registered consumer.
 *
 * If you are using an identity other than the root user of the AWS account that owns the resource, the calling identity must have the `PutResourcePolicy` permissions on the specified Kinesis Data Streams resource and belong to the owner's account in order to use this operation. If you don't have `PutResourcePolicy` permissions, Amazon Kinesis Data Streams returns a `403 Access Denied error` . If you receive a `ResourceNotFoundException` , check to see if you passed a valid stream or consumer resource.
 *
 * Request patterns can be one of the following:
 *
 * - Data stream pattern: `arn:aws.*:kinesis:.*:\d{12}:.*stream/\S+`
 * - Consumer pattern: `^(arn):aws.*:kinesis:.*:\d{12}:.*stream\/[a-zA-Z0-9_.-]+\/consumer\/[a-zA-Z0-9_.-]+:[0-9]+`
 *
 * For more information, see [Controlling Access to Amazon Kinesis Data Streams Resources Using IAM](https://docs.aws.amazon.com/streams/latest/dev/controlling-access.html) .
 *
 * @cloudformationResource AWS::Kinesis::ResourcePolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-resourcepolicy.html
 */
export declare class CfnResourcePolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourcePolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourcePolicy;
    /**
     * This is the name for the resource policy.
     */
    resourceArn: string;
    /**
     * This is the description for the resource policy.
     */
    resourcePolicy: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourcePolicyProps);
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
 * Properties for defining a `CfnResourcePolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-resourcepolicy.html
 */
export interface CfnResourcePolicyProps {
    /**
     * This is the name for the resource policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-resourcepolicy.html#cfn-kinesis-resourcepolicy-resourcearn
     */
    readonly resourceArn: string;
    /**
     * This is the description for the resource policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesis-resourcepolicy.html#cfn-kinesis-resourcepolicy-resourcepolicy
     */
    readonly resourcePolicy: any | cdk.IResolvable;
}
