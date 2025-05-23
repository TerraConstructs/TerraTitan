import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Create a configuration set.
 *
 * *Configuration sets* are groups of rules that you can apply to the emails you send using Amazon Pinpoint. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.
 *
 * @cloudformationResource AWS::PinpointEmail::ConfigurationSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationset.html
 */
export declare class CfnConfigurationSet extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfigurationSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfigurationSet;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.
     */
    deliveryOptions?: CfnConfigurationSet.DeliveryOptionsProperty | cdk.IResolvable;
    /**
     * The name of the configuration set.
     */
    name: string;
    /**
     * An object that defines whether or not Amazon Pinpoint collects reputation metrics for the emails that you send that use the configuration set.
     */
    reputationOptions?: cdk.IResolvable | CfnConfigurationSet.ReputationOptionsProperty;
    /**
     * An object that defines whether or not Amazon Pinpoint can send email that you send using the configuration set.
     */
    sendingOptions?: cdk.IResolvable | CfnConfigurationSet.SendingOptionsProperty;
    /**
     * An object that defines the tags (keys and values) that you want to associate with the configuration set.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * An object that defines the open and click tracking options for emails that you send using the configuration set.
     */
    trackingOptions?: cdk.IResolvable | CfnConfigurationSet.TrackingOptionsProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConfigurationSetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConfigurationSet {
    /**
     * Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-sendingoptions.html
     */
    interface SendingOptionsProperty {
        /**
         * If `true` , email sending is enabled for the configuration set.
         *
         * If `false` , email sending is disabled for the configuration set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-sendingoptions.html#cfn-pinpointemail-configurationset-sendingoptions-sendingenabled
         */
        readonly sendingEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * An object that defines the tracking options for a configuration set.
     *
     * When you use Amazon Pinpoint to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.
     *
     * These images and links include references to a domain operated by AWS . You can optionally configure Amazon Pinpoint to use a domain that you operate for these images and links.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-trackingoptions.html
     */
    interface TrackingOptionsProperty {
        /**
         * The domain that you want to use for tracking open and click events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-trackingoptions.html#cfn-pinpointemail-configurationset-trackingoptions-customredirectdomain
         */
        readonly customRedirectDomain?: string;
    }
    /**
     * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-reputationoptions.html
     */
    interface ReputationOptionsProperty {
        /**
         * If `true` , tracking of reputation metrics is enabled for the configuration set.
         *
         * If `false` , tracking of reputation metrics is disabled for the configuration set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-reputationoptions.html#cfn-pinpointemail-configurationset-reputationoptions-reputationmetricsenabled
         */
        readonly reputationMetricsEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * Used to associate a configuration set with a dedicated IP pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-deliveryoptions.html
     */
    interface DeliveryOptionsProperty {
        /**
         * The name of the dedicated IP pool that you want to associate with the configuration set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationset-deliveryoptions.html#cfn-pinpointemail-configurationset-deliveryoptions-sendingpoolname
         */
        readonly sendingPoolName?: string;
    }
}
/**
 * Properties for defining a `CfnConfigurationSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationset.html
 */
export interface CfnConfigurationSetProps {
    /**
     * An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationset.html#cfn-pinpointemail-configurationset-deliveryoptions
     */
    readonly deliveryOptions?: CfnConfigurationSet.DeliveryOptionsProperty | cdk.IResolvable;
    /**
     * The name of the configuration set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationset.html#cfn-pinpointemail-configurationset-name
     */
    readonly name: string;
    /**
     * An object that defines whether or not Amazon Pinpoint collects reputation metrics for the emails that you send that use the configuration set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationset.html#cfn-pinpointemail-configurationset-reputationoptions
     */
    readonly reputationOptions?: cdk.IResolvable | CfnConfigurationSet.ReputationOptionsProperty;
    /**
     * An object that defines whether or not Amazon Pinpoint can send email that you send using the configuration set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationset.html#cfn-pinpointemail-configurationset-sendingoptions
     */
    readonly sendingOptions?: cdk.IResolvable | CfnConfigurationSet.SendingOptionsProperty;
    /**
     * An object that defines the tags (keys and values) that you want to associate with the configuration set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationset.html#cfn-pinpointemail-configurationset-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * An object that defines the open and click tracking options for emails that you send using the configuration set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationset.html#cfn-pinpointemail-configurationset-trackingoptions
     */
    readonly trackingOptions?: cdk.IResolvable | CfnConfigurationSet.TrackingOptionsProperty;
}
/**
 * Create an event destination.
 *
 * In Amazon Pinpoint, *events* include message sends, deliveries, opens, clicks, bounces, and complaints. *Event destinations* are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
 *
 * A single configuration set can include more than one event destination.
 *
 * @cloudformationResource AWS::PinpointEmail::ConfigurationSetEventDestination
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationseteventdestination.html
 */
export declare class CfnConfigurationSetEventDestination extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConfigurationSetEventDestination from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConfigurationSetEventDestination;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the configuration set that contains the event destination that you want to modify.
     */
    configurationSetName: string;
    /**
     * An object that defines the event destination.
     */
    eventDestination?: CfnConfigurationSetEventDestination.EventDestinationProperty | cdk.IResolvable;
    /**
     * The name of the event destination that you want to modify.
     */
    eventDestinationName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConfigurationSetEventDestinationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConfigurationSetEventDestination {
    /**
     * In Amazon Pinpoint, *events* include message sends, deliveries, opens, clicks, bounces, and complaints.
     *
     * *Event destinations* are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-eventdestination.html
     */
    interface EventDestinationProperty {
        /**
         * An object that defines an Amazon CloudWatch destination for email events.
         *
         * You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-eventdestination.html#cfn-pinpointemail-configurationseteventdestination-eventdestination-cloudwatchdestination
         */
        readonly cloudWatchDestination?: CfnConfigurationSetEventDestination.CloudWatchDestinationProperty | cdk.IResolvable;
        /**
         * If `true` , the event destination is enabled.
         *
         * When the event destination is enabled, the specified event types are sent to the destinations in this `EventDestinationDefinition` .
         *
         * If `false` , the event destination is disabled. When the event destination is disabled, events aren't sent to the specified destinations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-eventdestination.html#cfn-pinpointemail-configurationseteventdestination-eventdestination-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * An object that defines an Amazon Kinesis Data Firehose destination for email events.
         *
         * You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-eventdestination.html#cfn-pinpointemail-configurationseteventdestination-eventdestination-kinesisfirehosedestination
         */
        readonly kinesisFirehoseDestination?: cdk.IResolvable | CfnConfigurationSetEventDestination.KinesisFirehoseDestinationProperty;
        /**
         * The types of events that Amazon Pinpoint sends to the specified event destinations.
         *
         * Acceptable values: `SEND` , `REJECT` , `BOUNCE` , `COMPLAINT` , `DELIVERY` , `OPEN` , `CLICK` , and `RENDERING_FAILURE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-eventdestination.html#cfn-pinpointemail-configurationseteventdestination-eventdestination-matchingeventtypes
         */
        readonly matchingEventTypes: Array<string>;
        /**
         * An object that defines a Amazon Pinpoint destination for email events.
         *
         * You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-eventdestination.html#cfn-pinpointemail-configurationseteventdestination-eventdestination-pinpointdestination
         */
        readonly pinpointDestination?: cdk.IResolvable | CfnConfigurationSetEventDestination.PinpointDestinationProperty;
        /**
         * An object that defines an Amazon SNS destination for email events.
         *
         * You can use Amazon SNS to send notification when certain email events occur.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-eventdestination.html#cfn-pinpointemail-configurationseteventdestination-eventdestination-snsdestination
         */
        readonly snsDestination?: cdk.IResolvable | CfnConfigurationSetEventDestination.SnsDestinationProperty;
    }
    /**
     * An object that defines an Amazon SNS destination for email events.
     *
     * You can use Amazon SNS to send notification when certain email events occur.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-snsdestination.html
     */
    interface SnsDestinationProperty {
        /**
         * The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish email events to.
         *
         * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-snsdestination.html#cfn-pinpointemail-configurationseteventdestination-snsdestination-topicarn
         */
        readonly topicArn: string;
    }
    /**
     * An object that defines an Amazon CloudWatch destination for email events.
     *
     * You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-cloudwatchdestination.html
     */
    interface CloudWatchDestinationProperty {
        /**
         * An array of objects that define the dimensions to use when you send email events to Amazon CloudWatch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-cloudwatchdestination.html#cfn-pinpointemail-configurationseteventdestination-cloudwatchdestination-dimensionconfigurations
         */
        readonly dimensionConfigurations?: Array<CfnConfigurationSetEventDestination.DimensionConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * An array of objects that define the dimensions to use when you send email events to Amazon CloudWatch.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-dimensionconfiguration.html
     */
    interface DimensionConfigurationProperty {
        /**
         * The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email.
         *
         * This value has to meet the following criteria:
         *
         * - It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).
         * - It can contain no more than 256 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-dimensionconfiguration.html#cfn-pinpointemail-configurationseteventdestination-dimensionconfiguration-defaultdimensionvalue
         */
        readonly defaultDimensionValue: string;
        /**
         * The name of an Amazon CloudWatch dimension associated with an email sending metric.
         *
         * The name has to meet the following criteria:
         *
         * - It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-).
         * - It can contain no more than 256 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-dimensionconfiguration.html#cfn-pinpointemail-configurationseteventdestination-dimensionconfiguration-dimensionname
         */
        readonly dimensionName: string;
        /**
         * The location where Amazon Pinpoint finds the value of a dimension to publish to Amazon CloudWatch.
         *
         * Acceptable values: `MESSAGE_TAG` , `EMAIL_HEADER` , and `LINK_TAG` .
         *
         * If you want Amazon Pinpoint to use the message tags that you specify using an `X-SES-MESSAGE-TAGS` header or a parameter to the `SendEmail` API, choose `MESSAGE_TAG` . If you want Amazon Pinpoint to use your own email headers, choose `EMAIL_HEADER` . If you want Amazon Pinpoint to use tags that are specified in your links, choose `LINK_TAG` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-dimensionconfiguration.html#cfn-pinpointemail-configurationseteventdestination-dimensionconfiguration-dimensionvaluesource
         */
        readonly dimensionValueSource: string;
    }
    /**
     * An object that defines a Amazon Pinpoint destination for email events.
     *
     * You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-pinpointdestination.html
     */
    interface PinpointDestinationProperty {
        /**
         * The Amazon Resource Name (ARN) of the Amazon Pinpoint project that you want to send email events to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-pinpointdestination.html#cfn-pinpointemail-configurationseteventdestination-pinpointdestination-applicationarn
         */
        readonly applicationArn?: string;
    }
    /**
     * An object that defines an Amazon Kinesis Data Firehose destination for email events.
     *
     * You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-kinesisfirehosedestination.html
     */
    interface KinesisFirehoseDestinationProperty {
        /**
         * The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose stream that Amazon Pinpoint sends email events to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-kinesisfirehosedestination.html#cfn-pinpointemail-configurationseteventdestination-kinesisfirehosedestination-deliverystreamarn
         */
        readonly deliveryStreamArn: string;
        /**
         * The Amazon Resource Name (ARN) of the IAM role that Amazon Pinpoint uses when sending email events to the Amazon Kinesis Data Firehose stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-configurationseteventdestination-kinesisfirehosedestination.html#cfn-pinpointemail-configurationseteventdestination-kinesisfirehosedestination-iamrolearn
         */
        readonly iamRoleArn: string;
    }
}
/**
 * Properties for defining a `CfnConfigurationSetEventDestination`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationseteventdestination.html
 */
export interface CfnConfigurationSetEventDestinationProps {
    /**
     * The name of the configuration set that contains the event destination that you want to modify.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationseteventdestination.html#cfn-pinpointemail-configurationseteventdestination-configurationsetname
     */
    readonly configurationSetName: string;
    /**
     * An object that defines the event destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationseteventdestination.html#cfn-pinpointemail-configurationseteventdestination-eventdestination
     */
    readonly eventDestination?: CfnConfigurationSetEventDestination.EventDestinationProperty | cdk.IResolvable;
    /**
     * The name of the event destination that you want to modify.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-configurationseteventdestination.html#cfn-pinpointemail-configurationseteventdestination-eventdestinationname
     */
    readonly eventDestinationName: string;
}
/**
 * A request to create a new dedicated IP pool.
 *
 * @cloudformationResource AWS::PinpointEmail::DedicatedIpPool
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-dedicatedippool.html
 */
export declare class CfnDedicatedIpPool extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDedicatedIpPool from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDedicatedIpPool;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the dedicated IP pool.
     */
    poolName?: string;
    /**
     * An object that defines the tags (keys and values) that you want to associate with the dedicated IP pool.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDedicatedIpPoolProps);
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
 * Properties for defining a `CfnDedicatedIpPool`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-dedicatedippool.html
 */
export interface CfnDedicatedIpPoolProps {
    /**
     * The name of the dedicated IP pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-dedicatedippool.html#cfn-pinpointemail-dedicatedippool-poolname
     */
    readonly poolName?: string;
    /**
     * An object that defines the tags (keys and values) that you want to associate with the dedicated IP pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-dedicatedippool.html#cfn-pinpointemail-dedicatedippool-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies an identity to use for sending email through Amazon Pinpoint.
 *
 * In Amazon Pinpoint, an *identity* is an email address or domain that you use when you send email. Before you can use Amazon Pinpoint to send an email from an identity, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the address or domain, and that you've given Amazon Pinpoint permission to send email from that identity.
 *
 * When you verify an email address, Amazon Pinpoint sends an email to the address. Your email address is verified as soon as you follow the link in the verification email.
 *
 * When you verify a domain, this operation provides a set of DKIM tokens, which you can convert into CNAME tokens. You add these CNAME tokens to the DNS configuration for your domain. Your domain is verified when Amazon Pinpoint detects these records in the DNS configuration for your domain. It usually takes around 72 hours to complete the domain verification process.
 *
 * > When you use CloudFormation to specify an identity, CloudFormation might indicate that the identity was created successfully. However, you have to verify the identity before you can use it to send email.
 *
 * @cloudformationResource AWS::PinpointEmail::Identity
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-identity.html
 */
export declare class CfnIdentity extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIdentity from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIdentity;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The host name for the first token that you have to add to the DNS configuration for your domain.
     *
     * For more information, see [Verifying a Domain](https://docs.aws.amazon.com/pinpoint/latest/userguide/channels-email-manage-verify.html#channels-email-manage-verify-domain) in the Amazon Pinpoint User Guide.
     *
     * @cloudformationAttribute IdentityDNSRecordName1
     */
    readonly attrIdentityDnsRecordName1: string;
    /**
     * The host name for the second token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute IdentityDNSRecordName2
     */
    readonly attrIdentityDnsRecordName2: string;
    /**
     * The host name for the third token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute IdentityDNSRecordName3
     */
    readonly attrIdentityDnsRecordName3: string;
    /**
     * The record value for the first token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute IdentityDNSRecordValue1
     */
    readonly attrIdentityDnsRecordValue1: string;
    /**
     * The record value for the second token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute IdentityDNSRecordValue2
     */
    readonly attrIdentityDnsRecordValue2: string;
    /**
     * The record value for the third token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute IdentityDNSRecordValue3
     */
    readonly attrIdentityDnsRecordValue3: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * For domain identities, this attribute is used to enable or disable DomainKeys Identified Mail (DKIM) signing for the domain.
     */
    dkimSigningEnabled?: boolean | cdk.IResolvable;
    /**
     * Used to enable or disable feedback forwarding for an identity.
     */
    feedbackForwardingEnabled?: boolean | cdk.IResolvable;
    /**
     * Used to enable or disable the custom Mail-From domain configuration for an email identity.
     */
    mailFromAttributes?: cdk.IResolvable | CfnIdentity.MailFromAttributesProperty;
    /**
     * The address or domain of the identity, such as *sender@example.com* or *example.co.uk* .
     */
    name: string;
    /**
     * An object that defines the tags (keys and values) that you want to associate with the email identity.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIdentityProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnIdentity {
    /**
     * A list of attributes that are associated with a MAIL FROM domain.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-identity-mailfromattributes.html
     */
    interface MailFromAttributesProperty {
        /**
         * The action that Amazon Pinpoint to takes if it can't read the required MX record for a custom MAIL FROM domain.
         *
         * When you set this value to `UseDefaultValue` , Amazon Pinpoint uses *amazonses.com* as the MAIL FROM domain. When you set this value to `RejectMessage` , Amazon Pinpoint returns a `MailFromDomainNotVerified` error, and doesn't attempt to deliver the email.
         *
         * These behaviors are taken when the custom MAIL FROM domain configuration is in the `Pending` , `Failed` , and `TemporaryFailure` states.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-identity-mailfromattributes.html#cfn-pinpointemail-identity-mailfromattributes-behavioronmxfailure
         */
        readonly behaviorOnMxFailure?: string;
        /**
         * The name of a domain that an email identity uses as a custom MAIL FROM domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-pinpointemail-identity-mailfromattributes.html#cfn-pinpointemail-identity-mailfromattributes-mailfromdomain
         */
        readonly mailFromDomain?: string;
    }
}
/**
 * Properties for defining a `CfnIdentity`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-identity.html
 */
export interface CfnIdentityProps {
    /**
     * For domain identities, this attribute is used to enable or disable DomainKeys Identified Mail (DKIM) signing for the domain.
     *
     * If the value is `true` , then the messages that you send from the domain are signed using both the DKIM keys for your domain, as well as the keys for the `amazonses.com` domain. If the value is `false` , then the messages that you send are only signed using the DKIM keys for the `amazonses.com` domain.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-identity.html#cfn-pinpointemail-identity-dkimsigningenabled
     */
    readonly dkimSigningEnabled?: boolean | cdk.IResolvable;
    /**
     * Used to enable or disable feedback forwarding for an identity.
     *
     * This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.
     *
     * When you enable feedback forwarding, Amazon Pinpoint sends you email notifications when bounce or complaint events occur. Amazon Pinpoint sends this notification to the address that you specified in the Return-Path header of the original email.
     *
     * When you disable feedback forwarding, Amazon Pinpoint sends notifications through other mechanisms, such as by notifying an Amazon SNS topic. You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications, Amazon Pinpoint sends an email notification when these events occur (even if this setting is disabled).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-identity.html#cfn-pinpointemail-identity-feedbackforwardingenabled
     */
    readonly feedbackForwardingEnabled?: boolean | cdk.IResolvable;
    /**
     * Used to enable or disable the custom Mail-From domain configuration for an email identity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-identity.html#cfn-pinpointemail-identity-mailfromattributes
     */
    readonly mailFromAttributes?: cdk.IResolvable | CfnIdentity.MailFromAttributesProperty;
    /**
     * The address or domain of the identity, such as *sender@example.com* or *example.co.uk* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-identity.html#cfn-pinpointemail-identity-name
     */
    readonly name: string;
    /**
     * An object that defines the tags (keys and values) that you want to associate with the email identity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpointemail-identity.html#cfn-pinpointemail-identity-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
