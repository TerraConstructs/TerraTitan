import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::IVSChat::LoggingConfiguration` resource specifies an  logging configuration that allows clients to store and record sent messages.
 *
 * For more information, see [CreateLoggingConfiguration](https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateLoggingConfiguration.html) in the *Amazon Interactive Video Service Chat API Reference* .
 *
 * @cloudformationResource AWS::IVSChat::LoggingConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html
 */
export declare class CfnLoggingConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLoggingConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLoggingConfiguration;
    /**
     * The logging-configuration ARN. For example: `arn:aws:ivschat:us-west-2:123456789012:logging-configuration/abcdABCDefgh`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The logging-configuration ID. For example: `abcdABCDefgh`
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Indicates the current state of the logging configuration. When the state is `ACTIVE` , the configuration is ready to log a chat session. Valid values: `CREATING` | `CREATE_FAILED` | `DELETING` | `DELETE_FAILED` | `UPDATING` | `UPDATE_FAILED` | `ACTIVE` .
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * The DestinationConfiguration is a complex type that contains information about where chat content will be logged.
     */
    destinationConfiguration: CfnLoggingConfiguration.DestinationConfigurationProperty | cdk.IResolvable;
    /**
     * Logging-configuration name.
     */
    name?: string;
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
    constructor(scope: constructs.Construct, id: string, props: CfnLoggingConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLoggingConfiguration {
    /**
     * The DestinationConfiguration property type describes a location where chat logs will be stored.
     *
     * Each member represents the configuration of one log destination. For logging, you define only one type of destination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-destinationconfiguration.html
     */
    interface DestinationConfigurationProperty {
        /**
         * An Amazon CloudWatch Logs destination configuration where chat activity will be logged.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-destinationconfiguration.html#cfn-ivschat-loggingconfiguration-destinationconfiguration-cloudwatchlogs
         */
        readonly cloudWatchLogs?: CfnLoggingConfiguration.CloudWatchLogsDestinationConfigurationProperty | cdk.IResolvable;
        /**
         * An Amazon Kinesis Data Firehose destination configuration where chat activity will be logged.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-destinationconfiguration.html#cfn-ivschat-loggingconfiguration-destinationconfiguration-firehose
         */
        readonly firehose?: CfnLoggingConfiguration.FirehoseDestinationConfigurationProperty | cdk.IResolvable;
        /**
         * An Amazon S3 destination configuration where chat activity will be logged.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-destinationconfiguration.html#cfn-ivschat-loggingconfiguration-destinationconfiguration-s3
         */
        readonly s3?: cdk.IResolvable | CfnLoggingConfiguration.S3DestinationConfigurationProperty;
    }
    /**
     * The S3DestinationConfiguration property type specifies an S3 location where chat logs will be stored.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-s3destinationconfiguration.html
     */
    interface S3DestinationConfigurationProperty {
        /**
         * Name of the Amazon S3 bucket where chat activity will be logged.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-s3destinationconfiguration.html#cfn-ivschat-loggingconfiguration-s3destinationconfiguration-bucketname
         */
        readonly bucketName: string;
    }
    /**
     * The FirehoseDestinationConfiguration property type specifies a Kinesis Firehose location where chat logs will be stored.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-firehosedestinationconfiguration.html
     */
    interface FirehoseDestinationConfigurationProperty {
        /**
         * Name of the Amazon Kinesis Firehose delivery stream where chat activity will be logged.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-firehosedestinationconfiguration.html#cfn-ivschat-loggingconfiguration-firehosedestinationconfiguration-deliverystreamname
         */
        readonly deliveryStreamName: string;
    }
    /**
     * The CloudWatchLogsDestinationConfiguration property type specifies a CloudWatch Logs location where chat logs will be stored.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-cloudwatchlogsdestinationconfiguration.html
     */
    interface CloudWatchLogsDestinationConfigurationProperty {
        /**
         * Name of the Amazon Cloudwatch Logs destination where chat activity will be logged.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-cloudwatchlogsdestinationconfiguration.html#cfn-ivschat-loggingconfiguration-cloudwatchlogsdestinationconfiguration-loggroupname
         */
        readonly logGroupName: string;
    }
}
/**
 * Properties for defining a `CfnLoggingConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html
 */
export interface CfnLoggingConfigurationProps {
    /**
     * The DestinationConfiguration is a complex type that contains information about where chat content will be logged.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html#cfn-ivschat-loggingconfiguration-destinationconfiguration
     */
    readonly destinationConfiguration: CfnLoggingConfiguration.DestinationConfigurationProperty | cdk.IResolvable;
    /**
     * Logging-configuration name.
     *
     * The value does not need to be unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html#cfn-ivschat-loggingconfiguration-name
     */
    readonly name?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-loggingconfiguration-tag.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-loggingconfiguration.html#cfn-ivschat-loggingconfiguration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::IVSChat::Room` resource specifies an  room that allows clients to connect and pass messages.
 *
 * For more information, see [CreateRoom](https://docs.aws.amazon.com/ivs/latest/ChatAPIReference/API_CreateRoom.html) in the *Amazon Interactive Video Service Chat API Reference* .
 *
 * @cloudformationResource AWS::IVSChat::Room
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html
 */
export declare class CfnRoom extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRoom from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRoom;
    /**
     * The room ARN. For example: `arn:aws:ivschat:us-west-2:123456789012:room/abcdABCDefgh`
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The room ID. For example: `abcdABCDefgh`
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * List of logging-configuration identifiers attached to the room.
     */
    loggingConfigurationIdentifiers?: Array<string>;
    /**
     * Maximum number of characters in a single message.
     */
    maximumMessageLength?: number;
    /**
     * Maximum number of messages per second that can be sent to the room (by all clients).
     */
    maximumMessageRatePerSecond?: number;
    /**
     * Configuration information for optional review of messages.
     */
    messageReviewHandler?: cdk.IResolvable | CfnRoom.MessageReviewHandlerProperty;
    /**
     * Room name.
     */
    name?: string;
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
    constructor(scope: constructs.Construct, id: string, props?: CfnRoomProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRoom {
    /**
     * The MessageReviewHandler property type specifies configuration information for optional message review.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-room-messagereviewhandler.html
     */
    interface MessageReviewHandlerProperty {
        /**
         * Specifies the fallback behavior (whether the message is allowed or denied) if the handler does not return a valid response, encounters an error, or times out.
         *
         * (For the timeout period, see [Service Quotas](https://docs.aws.amazon.com/ivs/latest/userguide/service-quotas.html) .) If allowed, the message is delivered with returned content to all users connected to the room. If denied, the message is not delivered to any user.
         *
         * *Default* : `ALLOW`
         *
         * @default - "ALLOW"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-room-messagereviewhandler.html#cfn-ivschat-room-messagereviewhandler-fallbackresult
         */
        readonly fallbackResult?: string;
        /**
         * Identifier of the message review handler.
         *
         * Currently this must be an ARN of a lambda function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-room-messagereviewhandler.html#cfn-ivschat-room-messagereviewhandler-uri
         */
        readonly uri?: string;
    }
}
/**
 * Properties for defining a `CfnRoom`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html
 */
export interface CfnRoomProps {
    /**
     * List of logging-configuration identifiers attached to the room.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#cfn-ivschat-room-loggingconfigurationidentifiers
     */
    readonly loggingConfigurationIdentifiers?: Array<string>;
    /**
     * Maximum number of characters in a single message.
     *
     * Messages are expected to be UTF-8 encoded and this limit applies specifically to rune/code-point count, not number of bytes.
     *
     * @default - 500
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#cfn-ivschat-room-maximummessagelength
     */
    readonly maximumMessageLength?: number;
    /**
     * Maximum number of messages per second that can be sent to the room (by all clients).
     *
     * @default - 10
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#cfn-ivschat-room-maximummessageratepersecond
     */
    readonly maximumMessageRatePerSecond?: number;
    /**
     * Configuration information for optional review of messages.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#cfn-ivschat-room-messagereviewhandler
     */
    readonly messageReviewHandler?: cdk.IResolvable | CfnRoom.MessageReviewHandlerProperty;
    /**
     * Room name.
     *
     * The value does not need to be unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#cfn-ivschat-room-name
     */
    readonly name?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ivschat-room-tag.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ivschat-room.html#cfn-ivschat-room-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
