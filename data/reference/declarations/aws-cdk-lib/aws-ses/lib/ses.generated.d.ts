import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES.
 *
 * For more information about using configuration sets, see [Using Amazon SES Configuration Sets](https://docs.aws.amazon.com/ses/latest/dg/using-configuration-sets.html) in the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/) .
 *
 * > *Required permissions:*
 * >
 * > To apply any of the resource options, you will need to have the corresponding AWS Identity and Access Management (IAM) SES API v2 permissions:
 * >
 * > - `ses:GetConfigurationSet`
 * >
 * > - (This permission is replacing the v1 *ses:DescribeConfigurationSet* permission which will not work with these v2 resource options.)
 * > - `ses:PutConfigurationSetDeliveryOptions`
 * > - `ses:PutConfigurationSetReputationOptions`
 * > - `ses:PutConfigurationSetSendingOptions`
 * > - `ses:PutConfigurationSetSuppressionOptions`
 * > - `ses:PutConfigurationSetTrackingOptions`
 *
 * @cloudformationResource AWS::SES::ConfigurationSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html
 */
export declare class CfnConfigurationSet extends cdk.CfnResource implements cdk.IInspectable {
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
     * Specifies the name of the dedicated IP pool to associate with the configuration set and whether messages that use the configuration set are required to use Transport Layer Security (TLS).
     */
    deliveryOptions?: CfnConfigurationSet.DeliveryOptionsProperty | cdk.IResolvable;
    /**
     * The name of the configuration set. The name must meet the following requirements:.
     */
    name?: string;
    /**
     * An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.
     */
    reputationOptions?: cdk.IResolvable | CfnConfigurationSet.ReputationOptionsProperty;
    /**
     * An object that defines whether or not Amazon SES can send email that you send using the configuration set.
     */
    sendingOptions?: cdk.IResolvable | CfnConfigurationSet.SendingOptionsProperty;
    /**
     * An object that contains information about the suppression list preferences for your account.
     */
    suppressionOptions?: cdk.IResolvable | CfnConfigurationSet.SuppressionOptionsProperty;
    /**
     * An object that defines the open and click tracking options for emails that you send using the configuration set.
     */
    trackingOptions?: cdk.IResolvable | CfnConfigurationSet.TrackingOptionsProperty;
    /**
     * The Virtual Deliverability Manager (VDM) options that apply to the configuration set.
     */
    vdmOptions?: cdk.IResolvable | CfnConfigurationSet.VdmOptionsProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnConfigurationSetProps);
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
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-sendingoptions.html
     */
    interface SendingOptionsProperty {
        /**
         * If `true` , email sending is enabled for the configuration set.
         *
         * If `false` , email sending is disabled for the configuration set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-sendingoptions.html#cfn-ses-configurationset-sendingoptions-sendingenabled
         */
        readonly sendingEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * An object that contains information about the suppression list preferences for your account.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-suppressionoptions.html
     */
    interface SuppressionOptionsProperty {
        /**
         * A list that contains the reasons that email addresses are automatically added to the suppression list for your account.
         *
         * This list can contain any or all of the following:
         *
         * - `COMPLAINT` – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a complaint.
         * - `BOUNCE` – Amazon SES adds an email address to the suppression list for your account when a message sent to that address results in a hard bounce.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-suppressionoptions.html#cfn-ses-configurationset-suppressionoptions-suppressedreasons
         */
        readonly suppressedReasons?: Array<string>;
    }
    /**
     * An object that defines the tracking options for a configuration set.
     *
     * When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.
     *
     * You can optionally configure a custom subdomain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.
     *
     * For more information, see [Configuring Custom Domains to Handle Open and Click Tracking](https://docs.aws.amazon.com/ses/latest/dg/configure-custom-open-click-domains.html) in the *Amazon SES Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-trackingoptions.html
     */
    interface TrackingOptionsProperty {
        /**
         * The custom subdomain that is used to redirect email recipients to the Amazon SES event tracking domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-trackingoptions.html#cfn-ses-configurationset-trackingoptions-customredirectdomain
         */
        readonly customRedirectDomain?: string;
        /**
         * The https policy to use for tracking open and click events.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-trackingoptions.html#cfn-ses-configurationset-trackingoptions-httpspolicy
         */
        readonly httpsPolicy?: string;
    }
    /**
     * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-reputationoptions.html
     */
    interface ReputationOptionsProperty {
        /**
         * If `true` , tracking of reputation metrics is enabled for the configuration set.
         *
         * If `false` , tracking of reputation metrics is disabled for the configuration set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-reputationoptions.html#cfn-ses-configurationset-reputationoptions-reputationmetricsenabled
         */
        readonly reputationMetricsEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * The Virtual Deliverability Manager (VDM) options that apply to a configuration set.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-vdmoptions.html
     */
    interface VdmOptionsProperty {
        /**
         * Specifies additional settings for your VDM configuration as applicable to the Dashboard.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-vdmoptions.html#cfn-ses-configurationset-vdmoptions-dashboardoptions
         */
        readonly dashboardOptions?: CfnConfigurationSet.DashboardOptionsProperty | cdk.IResolvable;
        /**
         * Specifies additional settings for your VDM configuration as applicable to the Guardian.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-vdmoptions.html#cfn-ses-configurationset-vdmoptions-guardianoptions
         */
        readonly guardianOptions?: CfnConfigurationSet.GuardianOptionsProperty | cdk.IResolvable;
    }
    /**
     * An object containing additional settings for your VDM configuration as applicable to the Dashboard.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-dashboardoptions.html
     */
    interface DashboardOptionsProperty {
        /**
         * Specifies the status of your VDM engagement metrics collection. Can be one of the following:.
         *
         * - `ENABLED` – Amazon SES enables engagement metrics for the configuration set.
         * - `DISABLED` – Amazon SES disables engagement metrics for the configuration set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-dashboardoptions.html#cfn-ses-configurationset-dashboardoptions-engagementmetrics
         */
        readonly engagementMetrics: string;
    }
    /**
     * An object containing additional settings for your VDM configuration as applicable to the Guardian.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-guardianoptions.html
     */
    interface GuardianOptionsProperty {
        /**
         * Specifies the status of your VDM optimized shared delivery. Can be one of the following:.
         *
         * - `ENABLED` – Amazon SES enables optimized shared delivery for the configuration set.
         * - `DISABLED` – Amazon SES disables optimized shared delivery for the configuration set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-guardianoptions.html#cfn-ses-configurationset-guardianoptions-optimizedshareddelivery
         */
        readonly optimizedSharedDelivery: string;
    }
    /**
     * Specifies the name of the dedicated IP pool to associate with the configuration set and whether messages that use the configuration set are required to use Transport Layer Security (TLS).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-deliveryoptions.html
     */
    interface DeliveryOptionsProperty {
        /**
         * The maximum amount of time, in seconds, that Amazon SES API v2 will attempt delivery of email.
         *
         * If specified, the value must greater than or equal to 300 seconds (5 minutes) and less than or equal to 50400 seconds (840 minutes).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-deliveryoptions.html#cfn-ses-configurationset-deliveryoptions-maxdeliveryseconds
         */
        readonly maxDeliverySeconds?: number;
        /**
         * The name of the dedicated IP pool to associate with the configuration set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-deliveryoptions.html#cfn-ses-configurationset-deliveryoptions-sendingpoolname
         */
        readonly sendingPoolName?: string;
        /**
         * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS).
         *
         * If the value is `REQUIRE` , messages are only delivered if a TLS connection can be established. If the value is `OPTIONAL` , messages can be delivered in plain text if a TLS connection can't be established.
         *
         * Valid Values: `REQUIRE | OPTIONAL`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationset-deliveryoptions.html#cfn-ses-configurationset-deliveryoptions-tlspolicy
         */
        readonly tlsPolicy?: string;
    }
}
/**
 * Properties for defining a `CfnConfigurationSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html
 */
export interface CfnConfigurationSetProps {
    /**
     * Specifies the name of the dedicated IP pool to associate with the configuration set and whether messages that use the configuration set are required to use Transport Layer Security (TLS).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-deliveryoptions
     */
    readonly deliveryOptions?: CfnConfigurationSet.DeliveryOptionsProperty | cdk.IResolvable;
    /**
     * The name of the configuration set. The name must meet the following requirements:.
     *
     * - Contain only letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).
     * - Contain 64 characters or fewer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-name
     */
    readonly name?: string;
    /**
     * An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-reputationoptions
     */
    readonly reputationOptions?: cdk.IResolvable | CfnConfigurationSet.ReputationOptionsProperty;
    /**
     * An object that defines whether or not Amazon SES can send email that you send using the configuration set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-sendingoptions
     */
    readonly sendingOptions?: cdk.IResolvable | CfnConfigurationSet.SendingOptionsProperty;
    /**
     * An object that contains information about the suppression list preferences for your account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-suppressionoptions
     */
    readonly suppressionOptions?: cdk.IResolvable | CfnConfigurationSet.SuppressionOptionsProperty;
    /**
     * An object that defines the open and click tracking options for emails that you send using the configuration set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-trackingoptions
     */
    readonly trackingOptions?: cdk.IResolvable | CfnConfigurationSet.TrackingOptionsProperty;
    /**
     * The Virtual Deliverability Manager (VDM) options that apply to the configuration set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-vdmoptions
     */
    readonly vdmOptions?: cdk.IResolvable | CfnConfigurationSet.VdmOptionsProperty;
}
/**
 * Specifies a configuration set event destination.
 *
 * *Events* include message sends, deliveries, opens, clicks, bounces, and complaints. *Event destinations* are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
 *
 * A single configuration set can include more than one event destination.
 *
 * @cloudformationResource AWS::SES::ConfigurationSetEventDestination
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html
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
     * The name of the configuration set that contains the event destination.
     */
    configurationSetName: string;
    /**
     * An object that defines the event destination.
     */
    eventDestination: CfnConfigurationSetEventDestination.EventDestinationProperty | cdk.IResolvable;
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
     * In the Amazon SES API v2, *events* include message sends, deliveries, opens, clicks, bounces, complaints and delivery delays.
     *
     * *Event destinations* are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html
     */
    interface EventDestinationProperty {
        /**
         * An object that defines an Amazon CloudWatch destination for email events.
         *
         * You can use Amazon CloudWatch to monitor and gain insights on your email sending metrics.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-cloudwatchdestination
         */
        readonly cloudWatchDestination?: CfnConfigurationSetEventDestination.CloudWatchDestinationProperty | cdk.IResolvable;
        /**
         * If `true` , the event destination is enabled.
         *
         * When the event destination is enabled, the specified event types are sent to the destinations in this `EventDestinationDefinition` .
         *
         * If `false` , the event destination is disabled. When the event destination is disabled, events aren't sent to the specified destinations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * An object that defines an Amazon EventBridge destination for email events.
         *
         * You can use Amazon EventBridge to send notifications when certain email events occur.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-eventbridgedestination
         */
        readonly eventBridgeDestination?: CfnConfigurationSetEventDestination.EventBridgeDestinationProperty | cdk.IResolvable;
        /**
         * An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-kinesisfirehosedestination
         */
        readonly kinesisFirehoseDestination?: cdk.IResolvable | CfnConfigurationSetEventDestination.KinesisFirehoseDestinationProperty;
        /**
         * The types of events that Amazon SES sends to the specified event destinations.
         *
         * - `SEND` - The send request was successful and SES will attempt to deliver the message to the recipient’s mail server. (If account-level or global suppression is being used, SES will still count it as a send, but delivery is suppressed.)
         * - `REJECT` - SES accepted the email, but determined that it contained a virus and didn’t attempt to deliver it to the recipient’s mail server.
         * - `BOUNCE` - ( *Hard bounce* ) The recipient's mail server permanently rejected the email. ( *Soft bounces* are only included when SES fails to deliver the email after retrying for a period of time.)
         * - `COMPLAINT` - The email was successfully delivered to the recipient’s mail server, but the recipient marked it as spam.
         * - `DELIVERY` - SES successfully delivered the email to the recipient's mail server.
         * - `OPEN` - The recipient received the message and opened it in their email client.
         * - `CLICK` - The recipient clicked one or more links in the email.
         * - `RENDERING_FAILURE` - The email wasn't sent because of a template rendering issue. This event type can occur when template data is missing, or when there is a mismatch between template parameters and data. (This event type only occurs when you send email using the [`SendTemplatedEmail`](https://docs.aws.amazon.com/ses/latest/APIReference/API_SendTemplatedEmail.html) or [`SendBulkTemplatedEmail`](https://docs.aws.amazon.com/ses/latest/APIReference/API_SendBulkTemplatedEmail.html) API operations.)
         * - `DELIVERY_DELAY` - The email couldn't be delivered to the recipient’s mail server because a temporary issue occurred. Delivery delays can occur, for example, when the recipient's inbox is full, or when the receiving email server experiences a transient issue.
         * - `SUBSCRIPTION` - The email was successfully delivered, but the recipient updated their subscription preferences by clicking on an *unsubscribe* link as part of your [subscription management](https://docs.aws.amazon.com/ses/latest/dg/sending-email-subscription-management.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-matchingeventtypes
         */
        readonly matchingEventTypes: Array<string>;
        /**
         * The name of the event destination. The name must meet the following requirements:.
         *
         * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).
         * - Contain 64 characters or fewer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-name
         */
        readonly name?: string;
        /**
         * An object that contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventdestination.html#cfn-ses-configurationseteventdestination-eventdestination-snsdestination
         */
        readonly snsDestination?: cdk.IResolvable | CfnConfigurationSetEventDestination.SnsDestinationProperty;
    }
    /**
     * Contains the topic ARN associated with an Amazon Simple Notification Service (Amazon SNS) event destination.
     *
     * Event destinations, such as Amazon SNS, are associated with configuration sets, which enable you to publish email sending events. For information about using configuration sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/monitor-sending-activity.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-snsdestination.html
     */
    interface SnsDestinationProperty {
        /**
         * The ARN of the Amazon SNS topic for email sending events.
         *
         * You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) Amazon SNS operation.
         *
         * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-snsdestination.html#cfn-ses-configurationseteventdestination-snsdestination-topicarn
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
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-cloudwatchdestination.html
     */
    interface CloudWatchDestinationProperty {
        /**
         * An array of objects that define the dimensions to use when you send email events to Amazon CloudWatch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-cloudwatchdestination.html#cfn-ses-configurationseteventdestination-cloudwatchdestination-dimensionconfigurations
         */
        readonly dimensionConfigurations?: Array<CfnConfigurationSetEventDestination.DimensionConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * An object that defines the dimension configuration to use when you send email events to Amazon CloudWatch.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-dimensionconfiguration.html
     */
    interface DimensionConfigurationProperty {
        /**
         * The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email.
         *
         * This value has to meet the following criteria:
         *
         * - Can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-), at signs (@), and periods (.).
         * - It can contain no more than 256 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-dimensionconfiguration.html#cfn-ses-configurationseteventdestination-dimensionconfiguration-defaultdimensionvalue
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
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-dimensionconfiguration.html#cfn-ses-configurationseteventdestination-dimensionconfiguration-dimensionname
         */
        readonly dimensionName: string;
        /**
         * The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch.
         *
         * To use the message tags that you specify using an `X-SES-MESSAGE-TAGS` header or a parameter to the `SendEmail` or `SendRawEmail` API, choose `messageTag` . To use your own email headers, choose `emailHeader` . To use link tags, choose `linkTag` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-dimensionconfiguration.html#cfn-ses-configurationseteventdestination-dimensionconfiguration-dimensionvaluesource
         */
        readonly dimensionValueSource: string;
    }
    /**
     * An object that defines an Amazon Kinesis Data Firehose destination for email events.
     *
     * You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-kinesisfirehosedestination.html
     */
    interface KinesisFirehoseDestinationProperty {
        /**
         * The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-kinesisfirehosedestination.html#cfn-ses-configurationseteventdestination-kinesisfirehosedestination-deliverystreamarn
         */
        readonly deliveryStreamArn: string;
        /**
         * The Amazon Resource Name (ARN) of the IAM role that the Amazon SES API v2 uses to send email events to the Amazon Kinesis Data Firehose stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-kinesisfirehosedestination.html#cfn-ses-configurationseteventdestination-kinesisfirehosedestination-iamrolearn
         */
        readonly iamRoleArn: string;
    }
    /**
     * An object that defines an Amazon EventBridge destination for email events.
     *
     * You can use Amazon EventBridge to send notifications when certain email events occur.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventbridgedestination.html
     */
    interface EventBridgeDestinationProperty {
        /**
         * The Amazon Resource Name (ARN) of the Amazon EventBridge bus to publish email events to.
         *
         * Only the default bus is supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-configurationseteventdestination-eventbridgedestination.html#cfn-ses-configurationseteventdestination-eventbridgedestination-eventbusarn
         */
        readonly eventBusArn: string;
    }
}
/**
 * Properties for defining a `CfnConfigurationSetEventDestination`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html
 */
export interface CfnConfigurationSetEventDestinationProps {
    /**
     * The name of the configuration set that contains the event destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-configurationsetname
     */
    readonly configurationSetName: string;
    /**
     * An object that defines the event destination.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationseteventdestination.html#cfn-ses-configurationseteventdestination-eventdestination
     */
    readonly eventDestination: CfnConfigurationSetEventDestination.EventDestinationProperty | cdk.IResolvable;
}
/**
 * A list that contains contacts that have subscribed to a particular topic or topics.
 *
 * @cloudformationResource AWS::SES::ContactList
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html
 */
export declare class CfnContactList extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnContactList from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnContactList;
    /**
     * The name of the contact list.
     */
    contactListName?: string;
    /**
     * A description of what the contact list is about.
     */
    description?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags associated with a contact list.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * An interest group, theme, or label within a list.
     */
    topics?: Array<cdk.IResolvable | CfnContactList.TopicProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnContactListProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnContactList {
    /**
     * An interest group, theme, or label within a list.
     *
     * Lists can have multiple topics.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-contactlist-topic.html
     */
    interface TopicProperty {
        /**
         * The default subscription status to be applied to a contact if the contact has not noted their preference for subscribing to a topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-contactlist-topic.html#cfn-ses-contactlist-topic-defaultsubscriptionstatus
         */
        readonly defaultSubscriptionStatus: string;
        /**
         * A description of what the topic is about, which the contact will see.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-contactlist-topic.html#cfn-ses-contactlist-topic-description
         */
        readonly description?: string;
        /**
         * The name of the topic the contact will see.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-contactlist-topic.html#cfn-ses-contactlist-topic-displayname
         */
        readonly displayName: string;
        /**
         * The name of the topic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-contactlist-topic.html#cfn-ses-contactlist-topic-topicname
         */
        readonly topicName: string;
    }
}
/**
 * Properties for defining a `CfnContactList`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html
 */
export interface CfnContactListProps {
    /**
     * The name of the contact list.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html#cfn-ses-contactlist-contactlistname
     */
    readonly contactListName?: string;
    /**
     * A description of what the contact list is about.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html#cfn-ses-contactlist-description
     */
    readonly description?: string;
    /**
     * The tags associated with a contact list.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html#cfn-ses-contactlist-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * An interest group, theme, or label within a list.
     *
     * A contact list can have multiple topics.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-contactlist.html#cfn-ses-contactlist-topics
     */
    readonly topics?: Array<cdk.IResolvable | CfnContactList.TopicProperty> | cdk.IResolvable;
}
/**
 * Create a new pool of dedicated IP addresses.
 *
 * A pool can include one or more dedicated IP addresses that are associated with your AWS account . You can associate a pool with a configuration set. When you send an email that uses that configuration set, the message is sent from one of the addresses in the associated pool.
 *
 * > You can't delete dedicated IP pools that have a `STANDARD` scaling mode with one or more dedicated IP addresses. This constraint doesn't apply to dedicated IP pools that have a `MANAGED` scaling mode.
 *
 * @cloudformationResource AWS::SES::DedicatedIpPool
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html
 */
export declare class CfnDedicatedIpPool extends cdk.CfnResource implements cdk.IInspectable {
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
     * The name of the dedicated IP pool that the IP address is associated with.
     */
    poolName?: string;
    /**
     * The type of scaling mode.
     */
    scalingMode?: string;
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
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html
 */
export interface CfnDedicatedIpPoolProps {
    /**
     * The name of the dedicated IP pool that the IP address is associated with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html#cfn-ses-dedicatedippool-poolname
     */
    readonly poolName?: string;
    /**
     * The type of scaling mode.
     *
     * The following options are available:
     *
     * - `STANDARD` - The customer controls which IPs are part of the dedicated IP pool.
     * - `MANAGED` - The reputation and number of IPs are automatically managed by Amazon SES .
     *
     * The `STANDARD` option is selected by default if no value is specified.
     *
     * > Updating *ScalingMode* doesn't require a replacement if you're updating its value from `STANDARD` to `MANAGED` . However, updating *ScalingMode* from `MANAGED` to `STANDARD` is not supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-dedicatedippool.html#cfn-ses-dedicatedippool-scalingmode
     */
    readonly scalingMode?: string;
}
/**
 * Specifies an identity for using within SES.
 *
 * An identity is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity.
 *
 * When you verify an email address, SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. When you verify a domain without specifying the `DkimSigningAttributes` properties, OR only the `NextSigningKeyLength` property of `DkimSigningAttributes` , this resource provides a set of CNAME token names and values ( *DkimDNSTokenName1* , *DkimDNSTokenValue1* , *DkimDNSTokenName2* , *DkimDNSTokenValue2* , *DkimDNSTokenName3* , *DkimDNSTokenValue3* ) as outputs. You can then add these to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as Easy DKIM.
 *
 * Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your resource must include `DkimSigningAttributes` properties `DomainSigningSelector` and `DomainSigningPrivateKey` . When you specify this object, you provide a selector ( `DomainSigningSelector` ) (a component of the DNS record name that identifies the public key to use for DKIM authentication) and a private key ( `DomainSigningPrivateKey` ).
 *
 * Additionally, you can associate an existing configuration set with the email identity that you're verifying.
 *
 * @cloudformationResource AWS::SES::EmailIdentity
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html
 */
export declare class CfnEmailIdentity extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEmailIdentity from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEmailIdentity;
    /**
     * The host name for the first token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute DkimDNSTokenName1
     */
    readonly attrDkimDnsTokenName1: string;
    /**
     * The host name for the second token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute DkimDNSTokenName2
     */
    readonly attrDkimDnsTokenName2: string;
    /**
     * The host name for the third token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute DkimDNSTokenName3
     */
    readonly attrDkimDnsTokenName3: string;
    /**
     * The record value for the first token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute DkimDNSTokenValue1
     */
    readonly attrDkimDnsTokenValue1: string;
    /**
     * The record value for the second token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute DkimDNSTokenValue2
     */
    readonly attrDkimDnsTokenValue2: string;
    /**
     * The record value for the third token that you have to add to the DNS configuration for your domain.
     *
     * @cloudformationAttribute DkimDNSTokenValue3
     */
    readonly attrDkimDnsTokenValue3: string;
    /**
     * Used to associate a configuration set with an email identity.
     */
    configurationSetAttributes?: CfnEmailIdentity.ConfigurationSetAttributesProperty | cdk.IResolvable;
    /**
     * An object that contains information about the DKIM attributes for the identity.
     */
    dkimAttributes?: CfnEmailIdentity.DkimAttributesProperty | cdk.IResolvable;
    /**
     * If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for [Easy DKIM](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html) .
     */
    dkimSigningAttributes?: CfnEmailIdentity.DkimSigningAttributesProperty | cdk.IResolvable;
    /**
     * The email address or domain to verify.
     */
    emailIdentity: string;
    /**
     * Used to enable or disable feedback forwarding for an identity.
     */
    feedbackAttributes?: CfnEmailIdentity.FeedbackAttributesProperty | cdk.IResolvable;
    /**
     * Used to enable or disable the custom Mail-From domain configuration for an email identity.
     */
    mailFromAttributes?: cdk.IResolvable | CfnEmailIdentity.MailFromAttributesProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEmailIdentityProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEmailIdentity {
    /**
     * Used to associate a configuration set with an email identity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-configurationsetattributes.html
     */
    interface ConfigurationSetAttributesProperty {
        /**
         * The configuration set to associate with an email identity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-configurationsetattributes.html#cfn-ses-emailidentity-configurationsetattributes-configurationsetname
         */
        readonly configurationSetName?: string;
    }
    /**
     * Used to configure or change the DKIM authentication settings for an email domain identity.
     *
     * You can use this operation to do any of the following:
     *
     * - Update the signing attributes for an identity that uses Bring Your Own DKIM (BYODKIM).
     * - Update the key length that should be used for Easy DKIM.
     * - Change from using no DKIM authentication to using Easy DKIM.
     * - Change from using no DKIM authentication to using BYODKIM.
     * - Change from using Easy DKIM to using BYODKIM.
     * - Change from using BYODKIM to using Easy DKIM.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-dkimsigningattributes.html
     */
    interface DkimSigningAttributesProperty {
        /**
         * [Bring Your Own DKIM] A private key that's used to generate a DKIM signature.
         *
         * The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.
         *
         * > Rather than embedding sensitive information directly in your CFN templates, we recommend you use dynamic parameters in the stack template to reference sensitive information that is stored and managed outside of CFN, such as in the AWS Systems Manager Parameter Store or AWS Secrets Manager.
         * >
         * > For more information, see the [Do not embed credentials in your templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html#creds) best practice.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-dkimsigningattributes.html#cfn-ses-emailidentity-dkimsigningattributes-domainsigningprivatekey
         */
        readonly domainSigningPrivateKey?: string;
        /**
         * [Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-dkimsigningattributes.html#cfn-ses-emailidentity-dkimsigningattributes-domainsigningselector
         */
        readonly domainSigningSelector?: string;
        /**
         * [Easy DKIM] The key length of the future DKIM key pair to be generated.
         *
         * This can be changed at most once per day.
         *
         * Valid Values: `RSA_1024_BIT | RSA_2048_BIT`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-dkimsigningattributes.html#cfn-ses-emailidentity-dkimsigningattributes-nextsigningkeylength
         */
        readonly nextSigningKeyLength?: string;
    }
    /**
     * Used to enable or disable DKIM authentication for an email identity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-dkimattributes.html
     */
    interface DkimAttributesProperty {
        /**
         * Sets the DKIM signing configuration for the identity.
         *
         * When you set this value `true` , then the messages that are sent from the identity are signed using DKIM. If you set this value to `false` , your messages are sent without DKIM signing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-dkimattributes.html#cfn-ses-emailidentity-dkimattributes-signingenabled
         */
        readonly signingEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * Used to enable or disable feedback forwarding for an identity.
     *
     * This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-feedbackattributes.html
     */
    interface FeedbackAttributesProperty {
        /**
         * Sets the feedback forwarding configuration for the identity.
         *
         * If the value is `true` , you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the `Return-Path` header of the original email.
         *
         * You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-feedbackattributes.html#cfn-ses-emailidentity-feedbackattributes-emailforwardingenabled
         */
        readonly emailForwardingEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * Used to enable or disable the custom Mail-From domain configuration for an email identity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-mailfromattributes.html
     */
    interface MailFromAttributesProperty {
        /**
         * The action to take if the required MX record isn't found when you send an email.
         *
         * When you set this value to `USE_DEFAULT_VALUE` , the mail is sent using *amazonses.com* as the MAIL FROM domain. When you set this value to `REJECT_MESSAGE` , the Amazon SES API v2 returns a `MailFromDomainNotVerified` error, and doesn't attempt to deliver the email.
         *
         * These behaviors are taken when the custom MAIL FROM domain configuration is in the `Pending` , `Failed` , and `TemporaryFailure` states.
         *
         * Valid Values: `USE_DEFAULT_VALUE | REJECT_MESSAGE`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-mailfromattributes.html#cfn-ses-emailidentity-mailfromattributes-behavioronmxfailure
         */
        readonly behaviorOnMxFailure?: string;
        /**
         * The custom MAIL FROM domain that you want the verified identity to use.
         *
         * The MAIL FROM domain must meet the following criteria:
         *
         * - It has to be a subdomain of the verified identity.
         * - It can't be used to receive email.
         * - It can't be used in a "From" address if the MAIL FROM domain is a destination for feedback forwarding emails.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-emailidentity-mailfromattributes.html#cfn-ses-emailidentity-mailfromattributes-mailfromdomain
         */
        readonly mailFromDomain?: string;
    }
}
/**
 * Properties for defining a `CfnEmailIdentity`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html
 */
export interface CfnEmailIdentityProps {
    /**
     * Used to associate a configuration set with an email identity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-configurationsetattributes
     */
    readonly configurationSetAttributes?: CfnEmailIdentity.ConfigurationSetAttributesProperty | cdk.IResolvable;
    /**
     * An object that contains information about the DKIM attributes for the identity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-dkimattributes
     */
    readonly dkimAttributes?: CfnEmailIdentity.DkimAttributesProperty | cdk.IResolvable;
    /**
     * If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for [Easy DKIM](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html) .
     *
     * You can only specify this object if the email identity is a domain, as opposed to an address.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-dkimsigningattributes
     */
    readonly dkimSigningAttributes?: CfnEmailIdentity.DkimSigningAttributesProperty | cdk.IResolvable;
    /**
     * The email address or domain to verify.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-emailidentity
     */
    readonly emailIdentity: string;
    /**
     * Used to enable or disable feedback forwarding for an identity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-feedbackattributes
     */
    readonly feedbackAttributes?: CfnEmailIdentity.FeedbackAttributesProperty | cdk.IResolvable;
    /**
     * Used to enable or disable the custom Mail-From domain configuration for an email identity.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-mailfromattributes
     */
    readonly mailFromAttributes?: cdk.IResolvable | CfnEmailIdentity.MailFromAttributesProperty;
}
/**
 * Specify a new IP address filter.
 *
 * You use IP address filters when you receive email with Amazon SES.
 *
 * @cloudformationResource AWS::SES::ReceiptFilter
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html
 */
export declare class CfnReceiptFilter extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReceiptFilter from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReceiptFilter;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A data structure that describes the IP address filter to create, which consists of a name, an IP address range, and whether to allow or block mail from it.
     */
    filter: CfnReceiptFilter.FilterProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnReceiptFilterProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnReceiptFilter {
    /**
     * Specifies an IP address filter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-filter.html
     */
    interface FilterProperty {
        /**
         * A structure that provides the IP addresses to block or allow, and whether to block or allow incoming mail from them.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-filter.html#cfn-ses-receiptfilter-filter-ipfilter
         */
        readonly ipFilter: CfnReceiptFilter.IpFilterProperty | cdk.IResolvable;
        /**
         * The name of the IP address filter. The name must meet the following requirements:.
         *
         * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), or dashes (-).
         * - Start and end with a letter or number.
         * - Contain 64 characters or fewer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-filter.html#cfn-ses-receiptfilter-filter-name
         */
        readonly name?: string;
    }
    /**
     * A receipt IP address filter enables you to specify whether to accept or reject mail originating from an IP address or range of IP addresses.
     *
     * For information about setting up IP address filters, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-ip-filtering-console-walkthrough.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-ipfilter.html
     */
    interface IpFilterProperty {
        /**
         * A single IP address or a range of IP addresses to block or allow, specified in Classless Inter-Domain Routing (CIDR) notation.
         *
         * An example of a single email address is 10.0.0.1. An example of a range of IP addresses is 10.0.0.1/24. For more information about CIDR notation, see [RFC 2317](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc2317) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-ipfilter.html#cfn-ses-receiptfilter-ipfilter-cidr
         */
        readonly cidr: string;
        /**
         * Indicates whether to block or allow incoming mail from the specified IP addresses.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptfilter-ipfilter.html#cfn-ses-receiptfilter-ipfilter-policy
         */
        readonly policy: string;
    }
}
/**
 * Properties for defining a `CfnReceiptFilter`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html
 */
export interface CfnReceiptFilterProps {
    /**
     * A data structure that describes the IP address filter to create, which consists of a name, an IP address range, and whether to allow or block mail from it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptfilter.html#cfn-ses-receiptfilter-filter
     */
    readonly filter: CfnReceiptFilter.FilterProperty | cdk.IResolvable;
}
/**
 * Specifies a receipt rule.
 *
 * @cloudformationResource AWS::SES::ReceiptRule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html
 */
export declare class CfnReceiptRule extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReceiptRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReceiptRule;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of an existing rule after which the new rule is placed.
     */
    after?: string;
    /**
     * A data structure that contains the specified rule's name, actions, recipients, domains, enabled status, scan status, and TLS policy.
     */
    rule: cdk.IResolvable | CfnReceiptRule.RuleProperty;
    /**
     * The name of the rule set where the receipt rule is added.
     */
    ruleSetName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnReceiptRuleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnReceiptRule {
    /**
     * Receipt rules enable you to specify which actions Amazon SES should take when it receives mail on behalf of one or more email addresses or domains that you own.
     *
     * Each receipt rule defines a set of email addresses or domains that it applies to. If the email addresses or domains match at least one recipient address of the message, Amazon SES executes all of the receipt rule's actions on the message.
     *
     * For information about setting up receipt rules, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html
     */
    interface RuleProperty {
        /**
         * An ordered list of actions to perform on messages that match at least one of the recipient email addresses or domains specified in the receipt rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html#cfn-ses-receiptrule-rule-actions
         */
        readonly actions?: Array<CfnReceiptRule.ActionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * If `true` , the receipt rule is active.
         *
         * The default value is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html#cfn-ses-receiptrule-rule-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * The name of the receipt rule. The name must meet the following requirements:.
         *
         * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), underscores (_), dashes (-), or periods (.).
         * - Start and end with a letter or number.
         * - Contain 64 characters or fewer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html#cfn-ses-receiptrule-rule-name
         */
        readonly name?: string;
        /**
         * The recipient domains and email addresses that the receipt rule applies to.
         *
         * If this field is not specified, this rule matches all recipients on all verified domains.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html#cfn-ses-receiptrule-rule-recipients
         */
        readonly recipients?: Array<string>;
        /**
         * If `true` , then messages that this receipt rule applies to are scanned for spam and viruses.
         *
         * The default value is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html#cfn-ses-receiptrule-rule-scanenabled
         */
        readonly scanEnabled?: boolean | cdk.IResolvable;
        /**
         * Specifies whether Amazon SES should require that incoming email is delivered over a connection encrypted with Transport Layer Security (TLS).
         *
         * If this parameter is set to `Require` , Amazon SES bounces emails that are not received over TLS. The default is `Optional` .
         *
         * Valid Values: `Require | Optional`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-rule.html#cfn-ses-receiptrule-rule-tlspolicy
         */
        readonly tlsPolicy?: string;
    }
    /**
     * An action that Amazon SES can take when it receives an email on behalf of one or more email addresses or domains that you own.
     *
     * An instance of this data type can represent only one action.
     *
     * For information about setting up receipt rules, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html
     */
    interface ActionProperty {
        /**
         * Adds a header to the received email.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html#cfn-ses-receiptrule-action-addheaderaction
         */
        readonly addHeaderAction?: CfnReceiptRule.AddHeaderActionProperty | cdk.IResolvable;
        /**
         * Rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html#cfn-ses-receiptrule-action-bounceaction
         */
        readonly bounceAction?: CfnReceiptRule.BounceActionProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html#cfn-ses-receiptrule-action-connectaction
         */
        readonly connectAction?: CfnReceiptRule.ConnectActionProperty | cdk.IResolvable;
        /**
         * Calls an AWS Lambda function, and optionally, publishes a notification to Amazon SNS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html#cfn-ses-receiptrule-action-lambdaaction
         */
        readonly lambdaAction?: cdk.IResolvable | CfnReceiptRule.LambdaActionProperty;
        /**
         * Saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon SNS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html#cfn-ses-receiptrule-action-s3action
         */
        readonly s3Action?: cdk.IResolvable | CfnReceiptRule.S3ActionProperty;
        /**
         * Publishes the email content within a notification to Amazon SNS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html#cfn-ses-receiptrule-action-snsaction
         */
        readonly snsAction?: cdk.IResolvable | CfnReceiptRule.SNSActionProperty;
        /**
         * Terminates the evaluation of the receipt rule set and optionally publishes a notification to Amazon SNS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html#cfn-ses-receiptrule-action-stopaction
         */
        readonly stopAction?: cdk.IResolvable | CfnReceiptRule.StopActionProperty;
        /**
         * Calls Amazon WorkMail and, optionally, publishes a notification to Amazon SNS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-action.html#cfn-ses-receiptrule-action-workmailaction
         */
        readonly workmailAction?: cdk.IResolvable | CfnReceiptRule.WorkmailActionProperty;
    }
    /**
     * When included in a receipt rule, this action rejects the received email by returning a bounce response to the sender and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
     *
     * For information about sending a bounce message in response to a received email, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-bounce.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-bounceaction.html
     */
    interface BounceActionProperty {
        /**
         * Human-readable text to include in the bounce message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-bounceaction.html#cfn-ses-receiptrule-bounceaction-message
         */
        readonly message: string;
        /**
         * The email address of the sender of the bounced email.
         *
         * This is the address from which the bounce message is sent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-bounceaction.html#cfn-ses-receiptrule-bounceaction-sender
         */
        readonly sender: string;
        /**
         * The SMTP reply code, as defined by [RFC 5321](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc5321) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-bounceaction.html#cfn-ses-receiptrule-bounceaction-smtpreplycode
         */
        readonly smtpReplyCode: string;
        /**
         * The SMTP enhanced status code, as defined by [RFC 3463](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc3463) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-bounceaction.html#cfn-ses-receiptrule-bounceaction-statuscode
         */
        readonly statusCode?: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the bounce action is taken.
         *
         * You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
         *
         * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-bounceaction.html#cfn-ses-receiptrule-bounceaction-topicarn
         */
        readonly topicArn?: string;
    }
    /**
     * When included in a receipt rule, this action saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
     *
     * To enable Amazon SES to write emails to your Amazon S3 bucket, use an AWS KMS key to encrypt your emails, or publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about granting permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-permissions.html) .
     *
     * > When you save your emails to an Amazon S3 bucket, the maximum email size (including headers) is 30 MB. Emails larger than that bounces.
     *
     * For information about specifying Amazon S3 actions in receipt rules, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-s3.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-s3action.html
     */
    interface S3ActionProperty {
        /**
         * The name of the Amazon S3 bucket for incoming email.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-s3action.html#cfn-ses-receiptrule-s3action-bucketname
         */
        readonly bucketName: string;
        /**
         * The ARN of the IAM role to be used by Amazon Simple Email Service while writing to the Amazon S3 bucket, optionally encrypting your mail via the provided customer managed key, and publishing to the Amazon SNS topic.
         *
         * This role should have access to the following APIs:
         *
         * - `s3:PutObject` , `kms:Encrypt` and `kms:GenerateDataKey` for the given Amazon S3 bucket.
         * - `kms:GenerateDataKey` for the given AWS KMS customer managed key.
         * - `sns:Publish` for the given Amazon SNS topic.
         *
         * > If an IAM role ARN is provided, the role (and only the role) is used to access all the given resources (Amazon S3 bucket, AWS KMS customer managed key and Amazon SNS topic). Therefore, setting up individual resource access permissions is not required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-s3action.html#cfn-ses-receiptrule-s3action-iamrolearn
         */
        readonly iamRoleArn?: string;
        /**
         * The customer managed key that Amazon SES should use to encrypt your emails before saving them to the Amazon S3 bucket.
         *
         * You can use the AWS managed key or a customer managed key that you created in AWS KMS as follows:
         *
         * - To use the AWS managed key, provide an ARN in the form of `arn:aws:kms:REGION:ACCOUNT-ID-WITHOUT-HYPHENS:alias/aws/ses` . For example, if your AWS account ID is 123456789012 and you want to use the AWS managed key in the US West (Oregon) Region, the ARN of the AWS managed key would be `arn:aws:kms:us-west-2:123456789012:alias/aws/ses` . If you use the AWS managed key, you don't need to perform any extra steps to give Amazon SES permission to use the key.
         * - To use a customer managed key that you created in AWS KMS, provide the ARN of the customer managed key and ensure that you add a statement to your key's policy to give Amazon SES permission to use it. For more information about giving permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-permissions.html) .
         *
         * For more information about key policies, see the [AWS KMS Developer Guide](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html) . If you do not specify an AWS KMS key, Amazon SES does not encrypt your emails.
         *
         * > Your mail is encrypted by Amazon SES using the Amazon S3 encryption client before the mail is submitted to Amazon S3 for storage. It is not encrypted using Amazon S3 server-side encryption. This means that you must use the Amazon S3 encryption client to decrypt the email after retrieving it from Amazon S3, as the service has no access to use your AWS KMS keys for decryption. This encryption client is currently available with the [AWS SDK for Java](https://docs.aws.amazon.com/sdk-for-java/) and [AWS SDK for Ruby](https://docs.aws.amazon.com/sdk-for-ruby/) only. For more information about client-side encryption using AWS KMS managed keys, see the [Amazon S3 Developer Guide](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-s3action.html#cfn-ses-receiptrule-s3action-kmskeyarn
         */
        readonly kmsKeyArn?: string;
        /**
         * The key prefix of the Amazon S3 bucket.
         *
         * The key prefix is similar to a directory name that enables you to store similar data under the same directory in a bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-s3action.html#cfn-ses-receiptrule-s3action-objectkeyprefix
         */
        readonly objectKeyPrefix?: string;
        /**
         * The ARN of the Amazon SNS topic to notify when the message is saved to the Amazon S3 bucket.
         *
         * You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
         *
         * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-s3action.html#cfn-ses-receiptrule-s3action-topicarn
         */
        readonly topicArn?: string;
    }
    /**
     * When included in a receipt rule, this action terminates the evaluation of the receipt rule set and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
     *
     * For information about setting a stop action in a receipt rule, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-stop.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-stopaction.html
     */
    interface StopActionProperty {
        /**
         * The scope of the StopAction.
         *
         * The only acceptable value is `RuleSet` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-stopaction.html#cfn-ses-receiptrule-stopaction-scope
         */
        readonly scope: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the stop action is taken.
         *
         * You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) Amazon SNS operation.
         *
         * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-stopaction.html#cfn-ses-receiptrule-stopaction-topicarn
         */
        readonly topicArn?: string;
    }
    /**
     * When included in a receipt rule, this action publishes a notification to Amazon Simple Notification Service (Amazon SNS).
     *
     * This action includes a complete copy of the email content in the Amazon SNS notifications. Amazon SNS notifications for all other actions simply provide information about the email. They do not include the email content itself.
     *
     * If you own the Amazon SNS topic, you don't need to do anything to give Amazon SES permission to publish emails to it. However, if you don't own the Amazon SNS topic, you need to attach a policy to the topic to give Amazon SES permissions to access it. For information about giving permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-permissions.html) .
     *
     * > You can only publish emails that are 150 KB or less (including the header) to Amazon SNS. Larger emails bounce. If you anticipate emails larger than 150 KB, use the S3 action instead.
     *
     * For information about using a receipt rule to publish an Amazon SNS notification, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-sns.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-snsaction.html
     */
    interface SNSActionProperty {
        /**
         * The encoding to use for the email within the Amazon SNS notification.
         *
         * UTF-8 is easier to use, but may not preserve all special characters when a message was encoded with a different encoding format. Base64 preserves all special characters. The default value is UTF-8.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-snsaction.html#cfn-ses-receiptrule-snsaction-encoding
         */
        readonly encoding?: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify.
         *
         * You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
         *
         * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-snsaction.html#cfn-ses-receiptrule-snsaction-topicarn
         */
        readonly topicArn?: string;
    }
    /**
     * When included in a receipt rule, this action calls Amazon WorkMail and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
     *
     * It usually isn't necessary to set this up manually, because Amazon WorkMail adds the rule automatically during its setup procedure.
     *
     * For information using a receipt rule to call Amazon WorkMail, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-workmail.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-workmailaction.html
     */
    interface WorkmailActionProperty {
        /**
         * The Amazon Resource Name (ARN) of the Amazon WorkMail organization. Amazon WorkMail ARNs use the following format:.
         *
         * `arn:aws:workmail:<region>:<awsAccountId>:organization/<workmailOrganizationId>`
         *
         * You can find the ID of your organization by using the [ListOrganizations](https://docs.aws.amazon.com/workmail/latest/APIReference/API_ListOrganizations.html) operation in Amazon WorkMail. Amazon WorkMail organization IDs begin with " `m-` ", followed by a string of alphanumeric characters.
         *
         * For information about Amazon WorkMail organizations, see the [Amazon WorkMail Administrator Guide](https://docs.aws.amazon.com/workmail/latest/adminguide/organizations_overview.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-workmailaction.html#cfn-ses-receiptrule-workmailaction-organizationarn
         */
        readonly organizationArn: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the WorkMail action is called.
         *
         * You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
         *
         * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-workmailaction.html#cfn-ses-receiptrule-workmailaction-topicarn
         */
        readonly topicArn?: string;
    }
    /**
     * When included in a receipt rule, this action adds a header to the received email.
     *
     * For information about adding a header using a receipt rule, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-receipt-rules-console-walkthrough.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-addheaderaction.html
     */
    interface AddHeaderActionProperty {
        /**
         * The name of the header to add to the incoming message.
         *
         * The name must contain at least one character, and can contain up to 50 characters. It consists of alphanumeric ( `a–z, A–Z, 0–9` ) characters and dashes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-addheaderaction.html#cfn-ses-receiptrule-addheaderaction-headername
         */
        readonly headerName: string;
        /**
         * The content to include in the header.
         *
         * This value can contain up to 2048 characters. It can't contain newline ( `\n` ) or carriage return ( `\r` ) characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-addheaderaction.html#cfn-ses-receiptrule-addheaderaction-headervalue
         */
        readonly headerValue: string;
    }
    /**
     * When included in a receipt rule, this action calls an AWS Lambda function and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).
     *
     * To enable Amazon SES to call your AWS Lambda function or to publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-permissions.html) .
     *
     * For information about using AWS Lambda actions in receipt rules, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-action-lambda.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-lambdaaction.html
     */
    interface LambdaActionProperty {
        /**
         * The Amazon Resource Name (ARN) of the AWS Lambda function.
         *
         * An example of an AWS Lambda function ARN is `arn:aws:lambda:us-west-2:account-id:function:MyFunction` . For more information about AWS Lambda, see the [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-lambdaaction.html#cfn-ses-receiptrule-lambdaaction-functionarn
         */
        readonly functionArn: string;
        /**
         * The invocation type of the AWS Lambda function.
         *
         * An invocation type of `RequestResponse` means that the execution of the function immediately results in a response, and a value of `Event` means that the function is invoked asynchronously. The default value is `Event` . For information about AWS Lambda invocation types, see the [AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/API_Invoke.html) .
         *
         * > There is a 30-second timeout on `RequestResponse` invocations. You should use `Event` invocation in most cases. Use `RequestResponse` only to make a mail flow decision, such as whether to stop the receipt rule or the receipt rule set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-lambdaaction.html#cfn-ses-receiptrule-lambdaaction-invocationtype
         */
        readonly invocationType?: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon SNS topic to notify when the Lambda action is executed.
         *
         * You can find the ARN of a topic by using the [ListTopics](https://docs.aws.amazon.com/sns/latest/api/API_ListTopics.html) operation in Amazon SNS.
         *
         * For more information about Amazon SNS topics, see the [Amazon SNS Developer Guide](https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-lambdaaction.html#cfn-ses-receiptrule-lambdaaction-topicarn
         */
        readonly topicArn?: string;
    }
    /**
     * When included in a receipt rule, this action parses the received message and starts an email contact in Amazon Connect on your behalf.
     *
     * > When you receive emails, the maximum email size (including headers) is 40 MB. Additionally, emails may only have up to 10 attachments. Emails larger than 40 MB or with more than 10 attachments will be bounced.
     *
     * We recommend that you configure this action via Amazon Connect.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-connectaction.html
     */
    interface ConnectActionProperty {
        /**
         * The Amazon Resource Name (ARN) of the IAM role to be used by Amazon Simple Email Service while starting email contacts to the Amazon Connect instance.
         *
         * This role should have permission to invoke `connect:StartEmailContact` for the given Amazon Connect instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-connectaction.html#cfn-ses-receiptrule-connectaction-iamrolearn
         */
        readonly iamRoleArn: string;
        /**
         * The Amazon Resource Name (ARN) for the Amazon Connect instance that Amazon SES integrates with for starting email contacts.
         *
         * For more information about Amazon Connect instances, see the [Amazon Connect Administrator Guide](https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-instances.html)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-receiptrule-connectaction.html#cfn-ses-receiptrule-connectaction-instancearn
         */
        readonly instanceArn: string;
    }
}
/**
 * Properties for defining a `CfnReceiptRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html
 */
export interface CfnReceiptRuleProps {
    /**
     * The name of an existing rule after which the new rule is placed.
     *
     * If this parameter is null, the new rule is inserted at the beginning of the rule list.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html#cfn-ses-receiptrule-after
     */
    readonly after?: string;
    /**
     * A data structure that contains the specified rule's name, actions, recipients, domains, enabled status, scan status, and TLS policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html#cfn-ses-receiptrule-rule
     */
    readonly rule: cdk.IResolvable | CfnReceiptRule.RuleProperty;
    /**
     * The name of the rule set where the receipt rule is added.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptrule.html#cfn-ses-receiptrule-rulesetname
     */
    readonly ruleSetName: string;
}
/**
 * Creates an empty receipt rule set.
 *
 * For information about setting up receipt rule sets, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/receiving-email-concepts.html#receiving-email-concepts-rules) .
 *
 * You can execute this operation no more than once per second.
 *
 * @cloudformationResource AWS::SES::ReceiptRuleSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptruleset.html
 */
export declare class CfnReceiptRuleSet extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnReceiptRuleSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnReceiptRuleSet;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the receipt rule set to make active.
     */
    ruleSetName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnReceiptRuleSetProps);
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
 * Properties for defining a `CfnReceiptRuleSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptruleset.html
 */
export interface CfnReceiptRuleSetProps {
    /**
     * The name of the receipt rule set to make active.
     *
     * Setting this value to null disables all email receiving.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-receiptruleset.html#cfn-ses-receiptruleset-rulesetname
     */
    readonly ruleSetName?: string;
}
/**
 * Specifies an email template.
 *
 * Email templates enable you to send personalized email to one or more destinations in a single API operation.
 *
 * @cloudformationResource AWS::SES::Template
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html
 */
export declare class CfnTemplate extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTemplate;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The content of the email, composed of a subject line and either an HTML part or a text-only part.
     */
    template?: cdk.IResolvable | CfnTemplate.TemplateProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnTemplateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTemplate {
    /**
     * An object that defines the email template to use for an email message, and the values to use for any message variables in that template.
     *
     * An *email template* is a type of message template that contains content that you want to reuse in email messages that you send. You can specifiy the email template by providing the name or ARN of an *email template* previously saved in your Amazon SES account or by providing the full template content.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-template-template.html
     */
    interface TemplateProperty {
        /**
         * The HTML body of the email.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-template-template.html#cfn-ses-template-template-htmlpart
         */
        readonly htmlPart?: string;
        /**
         * The subject line of the email.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-template-template.html#cfn-ses-template-template-subjectpart
         */
        readonly subjectPart: string;
        /**
         * The name of the template.
         *
         * You will refer to this name when you send email using the `SendTemplatedEmail` or `SendBulkTemplatedEmail` operations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-template-template.html#cfn-ses-template-template-templatename
         */
        readonly templateName?: string;
        /**
         * The email body that is visible to recipients whose email clients do not display HTML content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-template-template.html#cfn-ses-template-template-textpart
         */
        readonly textPart?: string;
    }
}
/**
 * Properties for defining a `CfnTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html
 */
export interface CfnTemplateProps {
    /**
     * The content of the email, composed of a subject line and either an HTML part or a text-only part.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-template.html#cfn-ses-template-template
     */
    readonly template?: cdk.IResolvable | CfnTemplate.TemplateProperty;
}
/**
 * The Virtual Deliverability Manager (VDM) attributes that apply to your Amazon SES account.
 *
 * @cloudformationResource AWS::SES::VdmAttributes
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html
 */
export declare class CfnVdmAttributes extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVdmAttributes from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVdmAttributes;
    /**
     * Unique identifier for this resource
     *
     * @cloudformationAttribute VdmAttributesResourceId
     */
    readonly attrVdmAttributesResourceId: string;
    /**
     * Specifies additional settings for your VDM configuration as applicable to the Dashboard.
     */
    dashboardAttributes?: CfnVdmAttributes.DashboardAttributesProperty | cdk.IResolvable;
    /**
     * Specifies additional settings for your VDM configuration as applicable to the Guardian.
     */
    guardianAttributes?: CfnVdmAttributes.GuardianAttributesProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnVdmAttributesProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnVdmAttributes {
    /**
     * An object containing additional settings for your VDM configuration as applicable to the Dashboard.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-vdmattributes-dashboardattributes.html
     */
    interface DashboardAttributesProperty {
        /**
         * Specifies the status of your VDM engagement metrics collection. Can be one of the following:.
         *
         * - `ENABLED` – Amazon SES enables engagement metrics for your account.
         * - `DISABLED` – Amazon SES disables engagement metrics for your account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-vdmattributes-dashboardattributes.html#cfn-ses-vdmattributes-dashboardattributes-engagementmetrics
         */
        readonly engagementMetrics?: string;
    }
    /**
     * An object containing additional settings for your VDM configuration as applicable to the Guardian.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-vdmattributes-guardianattributes.html
     */
    interface GuardianAttributesProperty {
        /**
         * Specifies the status of your VDM optimized shared delivery. Can be one of the following:.
         *
         * - `ENABLED` – Amazon SES enables optimized shared delivery for your account.
         * - `DISABLED` – Amazon SES disables optimized shared delivery for your account.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-vdmattributes-guardianattributes.html#cfn-ses-vdmattributes-guardianattributes-optimizedshareddelivery
         */
        readonly optimizedSharedDelivery?: string;
    }
}
/**
 * Properties for defining a `CfnVdmAttributes`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html
 */
export interface CfnVdmAttributesProps {
    /**
     * Specifies additional settings for your VDM configuration as applicable to the Dashboard.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html#cfn-ses-vdmattributes-dashboardattributes
     */
    readonly dashboardAttributes?: CfnVdmAttributes.DashboardAttributesProperty | cdk.IResolvable;
    /**
     * Specifies additional settings for your VDM configuration as applicable to the Guardian.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-vdmattributes.html#cfn-ses-vdmattributes-guardianattributes
     */
    readonly guardianAttributes?: CfnVdmAttributes.GuardianAttributesProperty | cdk.IResolvable;
}
/**
 * Creates an Add On instance for the subscription indicated in the request.
 *
 * The resulting Amazon Resource Name (ARN) can be used in a conditional statement for a rule set or traffic policy.
 *
 * @cloudformationResource AWS::SES::MailManagerAddonInstance
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddoninstance.html
 */
export declare class CfnMailManagerAddonInstance extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMailManagerAddonInstance from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMailManagerAddonInstance;
    /**
     * The Amazon Resource Name (ARN) of the Add On instance.
     *
     * @cloudformationAttribute AddonInstanceArn
     */
    readonly attrAddonInstanceArn: string;
    /**
     * The unique ID of the Add On instance.
     *
     * @cloudformationAttribute AddonInstanceId
     */
    readonly attrAddonInstanceId: string;
    /**
     * The name of the Add On for the instance.
     *
     * @cloudformationAttribute AddonName
     */
    readonly attrAddonName: string;
    /**
     * The subscription ID for the instance.
     */
    addonSubscriptionId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The tags used to organize, track, or control access for the resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMailManagerAddonInstanceProps);
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
 * Properties for defining a `CfnMailManagerAddonInstance`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddoninstance.html
 */
export interface CfnMailManagerAddonInstanceProps {
    /**
     * The subscription ID for the instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddoninstance.html#cfn-ses-mailmanageraddoninstance-addonsubscriptionid
     */
    readonly addonSubscriptionId: string;
    /**
     * The tags used to organize, track, or control access for the resource.
     *
     * For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddoninstance.html#cfn-ses-mailmanageraddoninstance-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a subscription for an Add On representing the acceptance of its terms of use and additional pricing.
 *
 * The subscription can then be used to create an instance for use in rule sets or traffic policies.
 *
 * @cloudformationResource AWS::SES::MailManagerAddonSubscription
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddonsubscription.html
 */
export declare class CfnMailManagerAddonSubscription extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMailManagerAddonSubscription from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMailManagerAddonSubscription;
    /**
     * The Amazon Resource Name (ARN) of the Add On subscription.
     *
     * @cloudformationAttribute AddonSubscriptionArn
     */
    readonly attrAddonSubscriptionArn: string;
    /**
     * The unique ID of the Add On subscription.
     *
     * @cloudformationAttribute AddonSubscriptionId
     */
    readonly attrAddonSubscriptionId: string;
    /**
     * The name of the Add On to subscribe to.
     */
    addonName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The tags used to organize, track, or control access for the resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMailManagerAddonSubscriptionProps);
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
 * Properties for defining a `CfnMailManagerAddonSubscription`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddonsubscription.html
 */
export interface CfnMailManagerAddonSubscriptionProps {
    /**
     * The name of the Add On to subscribe to.
     *
     * You can only have one subscription for each Add On name.
     *
     * Valid Values: `TRENDMICRO_VSAPI | SPAMHAUS_DBL | ABUSIX_MAIL_INTELLIGENCE`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddonsubscription.html#cfn-ses-mailmanageraddonsubscription-addonname
     */
    readonly addonName: string;
    /**
     * The tags used to organize, track, or control access for the resource.
     *
     * For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageraddonsubscription.html#cfn-ses-mailmanageraddonsubscription-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a new email archive resource for storing and retaining emails.
 *
 * @cloudformationResource AWS::SES::MailManagerArchive
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html
 */
export declare class CfnMailManagerArchive extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMailManagerArchive from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMailManagerArchive;
    /**
     * The Amazon Resource Name (ARN) of the archive.
     *
     * @cloudformationAttribute ArchiveArn
     */
    readonly attrArchiveArn: string;
    /**
     * The unique identifier of the archive.
     *
     * @cloudformationAttribute ArchiveId
     */
    readonly attrArchiveId: string;
    /**
     * The current state of the archive:
     *
     * - `ACTIVE` – The archive is ready and available for use.
     * - `PENDING_DELETION` – The archive has been marked for deletion and will be permanently deleted in 30 days. No further modifications can be made in this state.
     *
     * @cloudformationAttribute ArchiveState
     */
    readonly attrArchiveState: string;
    /**
     * A unique name for the new archive.
     */
    archiveName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The Amazon Resource Name (ARN) of the KMS key for encrypting emails in the archive.
     */
    kmsKeyArn?: string;
    /**
     * The period for retaining emails in the archive before automatic deletion.
     */
    retention?: CfnMailManagerArchive.ArchiveRetentionProperty | cdk.IResolvable;
    /**
     * The tags used to organize, track, or control access for the resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnMailManagerArchiveProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMailManagerArchive {
    /**
     * The retention policy for an email archive that specifies how long emails are kept before being automatically deleted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerarchive-archiveretention.html
     */
    interface ArchiveRetentionProperty {
        /**
         * The enum value sets the period for retaining emails in an archive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerarchive-archiveretention.html#cfn-ses-mailmanagerarchive-archiveretention-retentionperiod
         */
        readonly retentionPeriod: string;
    }
}
/**
 * Properties for defining a `CfnMailManagerArchive`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html
 */
export interface CfnMailManagerArchiveProps {
    /**
     * A unique name for the new archive.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html#cfn-ses-mailmanagerarchive-archivename
     */
    readonly archiveName?: string;
    /**
     * The Amazon Resource Name (ARN) of the KMS key for encrypting emails in the archive.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html#cfn-ses-mailmanagerarchive-kmskeyarn
     */
    readonly kmsKeyArn?: string;
    /**
     * The period for retaining emails in the archive before automatic deletion.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html#cfn-ses-mailmanagerarchive-retention
     */
    readonly retention?: CfnMailManagerArchive.ArchiveRetentionProperty | cdk.IResolvable;
    /**
     * The tags used to organize, track, or control access for the resource.
     *
     * For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html#cfn-ses-mailmanagerarchive-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Resource to provision an ingress endpoint for receiving email.
 *
 * An ingress endpoint serves as the entry point for incoming emails, allowing you to define how emails are received and processed within your AWS environment.
 *
 * @cloudformationResource AWS::SES::MailManagerIngressPoint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html
 */
export declare class CfnMailManagerIngressPoint extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMailManagerIngressPoint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMailManagerIngressPoint;
    /**
     * The DNS A Record that identifies your ingress endpoint. Configure your DNS Mail Exchange (MX) record with this value to route emails to Mail Manager.
     *
     * @cloudformationAttribute ARecord
     */
    readonly attrARecord: string;
    /**
     * The Amazon Resource Name (ARN) of the ingress endpoint resource.
     *
     * @cloudformationAttribute IngressPointArn
     */
    readonly attrIngressPointArn: string;
    /**
     * The identifier of the ingress endpoint resource.
     *
     * @cloudformationAttribute IngressPointId
     */
    readonly attrIngressPointId: string;
    /**
     * The status of the ingress endpoint resource.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The configuration of the ingress endpoint resource.
     */
    ingressPointConfiguration?: CfnMailManagerIngressPoint.IngressPointConfigurationProperty | cdk.IResolvable;
    /**
     * A user friendly name for an ingress endpoint resource.
     */
    ingressPointName?: string;
    /**
     * The identifier of an existing rule set that you attach to an ingress endpoint resource.
     */
    ruleSetId: string;
    /**
     * The update status of an ingress endpoint.
     */
    statusToUpdate?: string;
    /**
     * The tags used to organize, track, or control access for the resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The identifier of an existing traffic policy that you attach to an ingress endpoint resource.
     */
    trafficPolicyId: string;
    /**
     * The type of the ingress endpoint to create.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMailManagerIngressPointProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMailManagerIngressPoint {
    /**
     * The configuration of the ingress endpoint resource.
     *
     * > This data type is a UNION, so only one of the following members can be specified when used or returned.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanageringresspoint-ingresspointconfiguration.html
     */
    interface IngressPointConfigurationProperty {
        /**
         * The SecretsManager::Secret ARN of the ingress endpoint resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanageringresspoint-ingresspointconfiguration.html#cfn-ses-mailmanageringresspoint-ingresspointconfiguration-secretarn
         */
        readonly secretArn?: string;
        /**
         * The password of the ingress endpoint resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanageringresspoint-ingresspointconfiguration.html#cfn-ses-mailmanageringresspoint-ingresspointconfiguration-smtppassword
         */
        readonly smtpPassword?: string;
    }
}
/**
 * Properties for defining a `CfnMailManagerIngressPoint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html
 */
export interface CfnMailManagerIngressPointProps {
    /**
     * The configuration of the ingress endpoint resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-ingresspointconfiguration
     */
    readonly ingressPointConfiguration?: CfnMailManagerIngressPoint.IngressPointConfigurationProperty | cdk.IResolvable;
    /**
     * A user friendly name for an ingress endpoint resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-ingresspointname
     */
    readonly ingressPointName?: string;
    /**
     * The identifier of an existing rule set that you attach to an ingress endpoint resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-rulesetid
     */
    readonly ruleSetId: string;
    /**
     * The update status of an ingress endpoint.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-statustoupdate
     */
    readonly statusToUpdate?: string;
    /**
     * The tags used to organize, track, or control access for the resource.
     *
     * For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The identifier of an existing traffic policy that you attach to an ingress endpoint resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-trafficpolicyid
     */
    readonly trafficPolicyId: string;
    /**
     * The type of the ingress endpoint to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-type
     */
    readonly type: string;
}
/**
 * Resource to create an SMTP relay, which can be used within a Mail Manager rule set to forward incoming emails to defined relay destinations.
 *
 * @cloudformationResource AWS::SES::MailManagerRelay
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html
 */
export declare class CfnMailManagerRelay extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMailManagerRelay from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMailManagerRelay;
    /**
     * The Amazon Resource Name (ARN) of the relay.
     *
     * @cloudformationAttribute RelayArn
     */
    readonly attrRelayArn: string;
    /**
     * The unique relay identifier.
     *
     * @cloudformationAttribute RelayId
     */
    readonly attrRelayId: string;
    /**
     * Authentication for the relay destination server—specify the secretARN where the SMTP credentials are stored.
     */
    authentication: cdk.IResolvable | CfnMailManagerRelay.RelayAuthenticationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The unique relay name.
     */
    relayName?: string;
    /**
     * The destination relay server address.
     */
    serverName: string;
    /**
     * The destination relay server port.
     */
    serverPort: number;
    /**
     * The tags used to organize, track, or control access for the resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMailManagerRelayProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMailManagerRelay {
    /**
     * Authentication for the relay destination server—specify the secretARN where the SMTP credentials are stored, or specify an empty NoAuthentication structure if the relay destination server does not require SMTP credential authentication.
     *
     * > This data type is a UNION, so only one of the following members can be specified when used or returned.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerrelay-relayauthentication.html
     */
    interface RelayAuthenticationProperty {
        /**
         * Keep an empty structure if the relay destination server does not require SMTP credential authentication.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerrelay-relayauthentication.html#cfn-ses-mailmanagerrelay-relayauthentication-noauthentication
         */
        readonly noAuthentication?: any | cdk.IResolvable;
        /**
         * The ARN of the secret created in secrets manager where the relay server's SMTP credentials are stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerrelay-relayauthentication.html#cfn-ses-mailmanagerrelay-relayauthentication-secretarn
         */
        readonly secretArn?: string;
    }
}
/**
 * Properties for defining a `CfnMailManagerRelay`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html
 */
export interface CfnMailManagerRelayProps {
    /**
     * Authentication for the relay destination server—specify the secretARN where the SMTP credentials are stored.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html#cfn-ses-mailmanagerrelay-authentication
     */
    readonly authentication: cdk.IResolvable | CfnMailManagerRelay.RelayAuthenticationProperty;
    /**
     * The unique relay name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html#cfn-ses-mailmanagerrelay-relayname
     */
    readonly relayName?: string;
    /**
     * The destination relay server address.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html#cfn-ses-mailmanagerrelay-servername
     */
    readonly serverName: string;
    /**
     * The destination relay server port.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html#cfn-ses-mailmanagerrelay-serverport
     */
    readonly serverPort: number;
    /**
     * The tags used to organize, track, or control access for the resource.
     *
     * For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerrelay.html#cfn-ses-mailmanagerrelay-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Resource to create a rule set for a Mail Manager ingress endpoint which contains a list of rules that are evaluated sequentially for each email.
 *
 * @cloudformationResource AWS::SES::MailManagerRuleSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html
 */
export declare class CfnMailManagerRuleSet extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMailManagerRuleSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMailManagerRuleSet;
    /**
     * The Amazon Resource Name (ARN) of the rule set resource.
     *
     * @cloudformationAttribute RuleSetArn
     */
    readonly attrRuleSetArn: string;
    /**
     * The identifier of the rule set.
     *
     * @cloudformationAttribute RuleSetId
     */
    readonly attrRuleSetId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Conditional rules that are evaluated for determining actions on email.
     */
    rules: Array<cdk.IResolvable | CfnMailManagerRuleSet.RuleProperty> | cdk.IResolvable;
    /**
     * A user-friendly name for the rule set.
     */
    ruleSetName?: string;
    /**
     * The tags used to organize, track, or control access for the resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMailManagerRuleSetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMailManagerRuleSet {
    /**
     * A rule contains conditions, "unless conditions" and actions.
     *
     * For each envelope recipient of an email, if all conditions match and none of the "unless conditions" match, then all of the actions are executed sequentially. If no conditions are provided, the rule always applies and the actions are implicitly executed. If only "unless conditions" are provided, the rule applies if the email does not match the evaluation of the "unless conditions".
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rule.html
     */
    interface RuleProperty {
        /**
         * The list of actions to execute when the conditions match the incoming email, and none of the "unless conditions" match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rule.html#cfn-ses-mailmanagerruleset-rule-actions
         */
        readonly actions: Array<cdk.IResolvable | CfnMailManagerRuleSet.RuleActionProperty> | cdk.IResolvable;
        /**
         * The conditions of this rule.
         *
         * All conditions must match the email for the actions to be executed. An empty list of conditions means that all emails match, but are still subject to any "unless conditions"
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rule.html#cfn-ses-mailmanagerruleset-rule-conditions
         */
        readonly conditions?: Array<cdk.IResolvable | CfnMailManagerRuleSet.RuleConditionProperty> | cdk.IResolvable;
        /**
         * The user-friendly name of the rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rule.html#cfn-ses-mailmanagerruleset-rule-name
         */
        readonly name?: string;
        /**
         * The "unless conditions" of this rule.
         *
         * None of the conditions can match the email for the actions to be executed. If any of these conditions do match the email, then the actions are not executed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rule.html#cfn-ses-mailmanagerruleset-rule-unless
         */
        readonly unless?: Array<cdk.IResolvable | CfnMailManagerRuleSet.RuleConditionProperty> | cdk.IResolvable;
    }
    /**
     * The conditional expression used to evaluate an email for determining if a rule action should be taken.
     *
     * > This data type is a UNION, so only one of the following members can be specified when used or returned.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulecondition.html
     */
    interface RuleConditionProperty {
        /**
         * The condition applies to a boolean expression passed in this field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulecondition.html#cfn-ses-mailmanagerruleset-rulecondition-booleanexpression
         */
        readonly booleanExpression?: cdk.IResolvable | CfnMailManagerRuleSet.RuleBooleanExpressionProperty;
        /**
         * The condition applies to a DMARC policy expression passed in this field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulecondition.html#cfn-ses-mailmanagerruleset-rulecondition-dmarcexpression
         */
        readonly dmarcExpression?: cdk.IResolvable | CfnMailManagerRuleSet.RuleDmarcExpressionProperty;
        /**
         * The condition applies to an IP address expression passed in this field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulecondition.html#cfn-ses-mailmanagerruleset-rulecondition-ipexpression
         */
        readonly ipExpression?: cdk.IResolvable | CfnMailManagerRuleSet.RuleIpExpressionProperty;
        /**
         * The condition applies to a number expression passed in this field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulecondition.html#cfn-ses-mailmanagerruleset-rulecondition-numberexpression
         */
        readonly numberExpression?: cdk.IResolvable | CfnMailManagerRuleSet.RuleNumberExpressionProperty;
        /**
         * The condition applies to a string expression passed in this field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulecondition.html#cfn-ses-mailmanagerruleset-rulecondition-stringexpression
         */
        readonly stringExpression?: cdk.IResolvable | CfnMailManagerRuleSet.RuleStringExpressionProperty;
        /**
         * The condition applies to a verdict expression passed in this field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulecondition.html#cfn-ses-mailmanagerruleset-rulecondition-verdictexpression
         */
        readonly verdictExpression?: cdk.IResolvable | CfnMailManagerRuleSet.RuleVerdictExpressionProperty;
    }
    /**
     * A boolean expression to be used in a rule condition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulebooleanexpression.html
     */
    interface RuleBooleanExpressionProperty {
        /**
         * The operand on which to perform a boolean condition operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulebooleanexpression.html#cfn-ses-mailmanagerruleset-rulebooleanexpression-evaluate
         */
        readonly evaluate: cdk.IResolvable | CfnMailManagerRuleSet.RuleBooleanToEvaluateProperty;
        /**
         * The matching operator for a boolean condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulebooleanexpression.html#cfn-ses-mailmanagerruleset-rulebooleanexpression-operator
         */
        readonly operator: string;
    }
    /**
     * The union type representing the allowed types of operands for a boolean condition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulebooleantoevaluate.html
     */
    interface RuleBooleanToEvaluateProperty {
        /**
         * The boolean type representing the allowed attribute types for an email.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulebooleantoevaluate.html#cfn-ses-mailmanagerruleset-rulebooleantoevaluate-attribute
         */
        readonly attribute: string;
    }
    /**
     * A string expression is evaluated against strings or substrings of the email.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulestringexpression.html
     */
    interface RuleStringExpressionProperty {
        /**
         * The string to evaluate in a string condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulestringexpression.html#cfn-ses-mailmanagerruleset-rulestringexpression-evaluate
         */
        readonly evaluate: cdk.IResolvable | CfnMailManagerRuleSet.RuleStringToEvaluateProperty;
        /**
         * The matching operator for a string condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulestringexpression.html#cfn-ses-mailmanagerruleset-rulestringexpression-operator
         */
        readonly operator: string;
        /**
         * The string(s) to be evaluated in a string condition expression.
         *
         * For all operators, except for NOT_EQUALS, if multiple values are given, the values are processed as an OR. That is, if any of the values match the email's string using the given operator, the condition is deemed to match. However, for NOT_EQUALS, the condition is only deemed to match if none of the given strings match the email's string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulestringexpression.html#cfn-ses-mailmanagerruleset-rulestringexpression-values
         */
        readonly values: Array<string>;
    }
    /**
     * The string to evaluate in a string condition expression.
     *
     * > This data type is a UNION, so only one of the following members can be specified when used or returned.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulestringtoevaluate.html
     */
    interface RuleStringToEvaluateProperty {
        /**
         * The email attribute to evaluate in a string condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulestringtoevaluate.html#cfn-ses-mailmanagerruleset-rulestringtoevaluate-attribute
         */
        readonly attribute?: string;
        /**
         * The email MIME X-Header attribute to evaluate in a string condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulestringtoevaluate.html#cfn-ses-mailmanagerruleset-rulestringtoevaluate-mimeheaderattribute
         */
        readonly mimeHeaderAttribute?: string;
    }
    /**
     * A number expression to match numeric conditions with integers from the incoming email.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulenumberexpression.html
     */
    interface RuleNumberExpressionProperty {
        /**
         * The number to evaluate in a numeric condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulenumberexpression.html#cfn-ses-mailmanagerruleset-rulenumberexpression-evaluate
         */
        readonly evaluate: cdk.IResolvable | CfnMailManagerRuleSet.RuleNumberToEvaluateProperty;
        /**
         * The operator for a numeric condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulenumberexpression.html#cfn-ses-mailmanagerruleset-rulenumberexpression-operator
         */
        readonly operator: string;
        /**
         * The value to evaluate in a numeric condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulenumberexpression.html#cfn-ses-mailmanagerruleset-rulenumberexpression-value
         */
        readonly value: number;
    }
    /**
     * The number to evaluate in a numeric condition expression.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulenumbertoevaluate.html
     */
    interface RuleNumberToEvaluateProperty {
        /**
         * An email attribute that is used as the number to evaluate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-rulenumbertoevaluate.html#cfn-ses-mailmanagerruleset-rulenumbertoevaluate-attribute
         */
        readonly attribute: string;
    }
    /**
     * An IP address expression matching certain IP addresses within a given range of IP addresses.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleipexpression.html
     */
    interface RuleIpExpressionProperty {
        /**
         * The IP address to evaluate in this condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleipexpression.html#cfn-ses-mailmanagerruleset-ruleipexpression-evaluate
         */
        readonly evaluate: cdk.IResolvable | CfnMailManagerRuleSet.RuleIpToEvaluateProperty;
        /**
         * The operator to evaluate the IP address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleipexpression.html#cfn-ses-mailmanagerruleset-ruleipexpression-operator
         */
        readonly operator: string;
        /**
         * The IP CIDR blocks in format "x.y.z.w/n" (eg 10.0.0.0/8) to match with the email's IP address. For the operator CIDR_MATCHES, if multiple values are given, they are evaluated as an OR. That is, if the IP address is contained within any of the given CIDR ranges, the condition is deemed to match. For NOT_CIDR_MATCHES, if multiple CIDR ranges are given, the condition is deemed to match if the IP address is not contained in any of the given CIDR ranges.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleipexpression.html#cfn-ses-mailmanagerruleset-ruleipexpression-values
         */
        readonly values: Array<string>;
    }
    /**
     * The IP address to evaluate for this condition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleiptoevaluate.html
     */
    interface RuleIpToEvaluateProperty {
        /**
         * The attribute of the email to evaluate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleiptoevaluate.html#cfn-ses-mailmanagerruleset-ruleiptoevaluate-attribute
         */
        readonly attribute: string;
    }
    /**
     * A verdict expression is evaluated against verdicts of the email.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleverdictexpression.html
     */
    interface RuleVerdictExpressionProperty {
        /**
         * The verdict to evaluate in a verdict condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleverdictexpression.html#cfn-ses-mailmanagerruleset-ruleverdictexpression-evaluate
         */
        readonly evaluate: cdk.IResolvable | CfnMailManagerRuleSet.RuleVerdictToEvaluateProperty;
        /**
         * The matching operator for a verdict condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleverdictexpression.html#cfn-ses-mailmanagerruleset-ruleverdictexpression-operator
         */
        readonly operator: string;
        /**
         * The values to match with the email's verdict using the given operator.
         *
         * For the EQUALS operator, if multiple values are given, the condition is deemed to match if any of the given verdicts match that of the email. For the NOT_EQUALS operator, if multiple values are given, the condition is deemed to match of none of the given verdicts match the verdict of the email.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleverdictexpression.html#cfn-ses-mailmanagerruleset-ruleverdictexpression-values
         */
        readonly values: Array<string>;
    }
    /**
     * The verdict to evaluate in a verdict condition expression.
     *
     * > This data type is a UNION, so only one of the following members can be specified when used or returned.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleverdicttoevaluate.html
     */
    interface RuleVerdictToEvaluateProperty {
        /**
         * The Add On ARN and its returned value to evaluate in a verdict condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleverdicttoevaluate.html#cfn-ses-mailmanagerruleset-ruleverdicttoevaluate-analysis
         */
        readonly analysis?: CfnMailManagerRuleSet.AnalysisProperty | cdk.IResolvable;
        /**
         * The email verdict attribute to evaluate in a string verdict expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleverdicttoevaluate.html#cfn-ses-mailmanagerruleset-ruleverdicttoevaluate-attribute
         */
        readonly attribute?: string;
    }
    /**
     * The result of an analysis can be used in conditions to trigger actions.
     *
     * Analyses can inspect the email content and report a certain aspect of the email.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-analysis.html
     */
    interface AnalysisProperty {
        /**
         * The Amazon Resource Name (ARN) of an Add On.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-analysis.html#cfn-ses-mailmanagerruleset-analysis-analyzer
         */
        readonly analyzer: string;
        /**
         * The returned value from an Add On.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-analysis.html#cfn-ses-mailmanagerruleset-analysis-resultfield
         */
        readonly resultField: string;
    }
    /**
     * A DMARC policy expression.
     *
     * The condition matches if the given DMARC policy matches that of the incoming email.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruledmarcexpression.html
     */
    interface RuleDmarcExpressionProperty {
        /**
         * The operator to apply to the DMARC policy of the incoming email.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruledmarcexpression.html#cfn-ses-mailmanagerruleset-ruledmarcexpression-operator
         */
        readonly operator: string;
        /**
         * The values to use for the given DMARC policy operator.
         *
         * For the operator EQUALS, if multiple values are given, they are evaluated as an OR. That is, if any of the given values match, the condition is deemed to match. For the operator NOT_EQUALS, if multiple values are given, they are evaluated as an AND. That is, only if the email's DMARC policy is not equal to any of the given values, then the condition is deemed to match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruledmarcexpression.html#cfn-ses-mailmanagerruleset-ruledmarcexpression-values
         */
        readonly values: Array<string>;
    }
    /**
     * The action for a rule to take. Only one of the contained actions can be set.
     *
     * > This data type is a UNION, so only one of the following members can be specified when used or returned.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleaction.html
     */
    interface RuleActionProperty {
        /**
         * This action adds a header.
         *
         * This can be used to add arbitrary email headers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleaction.html#cfn-ses-mailmanagerruleset-ruleaction-addheader
         */
        readonly addHeader?: CfnMailManagerRuleSet.AddHeaderActionProperty | cdk.IResolvable;
        /**
         * This action archives the email.
         *
         * This can be used to deliver an email to an archive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleaction.html#cfn-ses-mailmanagerruleset-ruleaction-archive
         */
        readonly archive?: CfnMailManagerRuleSet.ArchiveActionProperty | cdk.IResolvable;
        /**
         * This action delivers an email to a WorkMail mailbox.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleaction.html#cfn-ses-mailmanagerruleset-ruleaction-delivertomailbox
         */
        readonly deliverToMailbox?: CfnMailManagerRuleSet.DeliverToMailboxActionProperty | cdk.IResolvable;
        /**
         * This action delivers an email to an Amazon Q Business application for ingestion into its knowledge base.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleaction.html#cfn-ses-mailmanagerruleset-ruleaction-delivertoqbusiness
         */
        readonly deliverToQBusiness?: CfnMailManagerRuleSet.DeliverToQBusinessActionProperty | cdk.IResolvable;
        /**
         * This action terminates the evaluation of rules in the rule set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleaction.html#cfn-ses-mailmanagerruleset-ruleaction-drop
         */
        readonly drop?: any | cdk.IResolvable;
        /**
         * This action relays the email to another SMTP server.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleaction.html#cfn-ses-mailmanagerruleset-ruleaction-relay
         */
        readonly relay?: cdk.IResolvable | CfnMailManagerRuleSet.RelayActionProperty;
        /**
         * The action replaces certain or all recipients with a different set of recipients.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleaction.html#cfn-ses-mailmanagerruleset-ruleaction-replacerecipient
         */
        readonly replaceRecipient?: cdk.IResolvable | CfnMailManagerRuleSet.ReplaceRecipientActionProperty;
        /**
         * This action sends the email to the internet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleaction.html#cfn-ses-mailmanagerruleset-ruleaction-send
         */
        readonly send?: cdk.IResolvable | CfnMailManagerRuleSet.SendActionProperty;
        /**
         * This action writes the MIME content of the email to an S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-ruleaction.html#cfn-ses-mailmanagerruleset-ruleaction-writetos3
         */
        readonly writeToS3?: cdk.IResolvable | CfnMailManagerRuleSet.S3ActionProperty;
    }
    /**
     * The action relays the email via SMTP to another specific SMTP server.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-relayaction.html
     */
    interface RelayActionProperty {
        /**
         * A policy that states what to do in the case of failure.
         *
         * The action will fail if there are configuration errors. For example, the specified relay has been deleted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-relayaction.html#cfn-ses-mailmanagerruleset-relayaction-actionfailurepolicy
         */
        readonly actionFailurePolicy?: string;
        /**
         * This action specifies whether to preserve or replace original mail from address while relaying received emails to a destination server.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-relayaction.html#cfn-ses-mailmanagerruleset-relayaction-mailfrom
         */
        readonly mailFrom?: string;
        /**
         * The identifier of the relay resource to be used when relaying an email.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-relayaction.html#cfn-ses-mailmanagerruleset-relayaction-relay
         */
        readonly relay: string;
    }
    /**
     * The action to archive the email by delivering the email to an Amazon SES archive.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-archiveaction.html
     */
    interface ArchiveActionProperty {
        /**
         * A policy that states what to do in the case of failure.
         *
         * The action will fail if there are configuration errors. For example, the specified archive has been deleted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-archiveaction.html#cfn-ses-mailmanagerruleset-archiveaction-actionfailurepolicy
         */
        readonly actionFailurePolicy?: string;
        /**
         * The identifier of the archive to send the email to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-archiveaction.html#cfn-ses-mailmanagerruleset-archiveaction-targetarchive
         */
        readonly targetArchive: string;
    }
    /**
     * Writes the MIME content of the email to an S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-s3action.html
     */
    interface S3ActionProperty {
        /**
         * A policy that states what to do in the case of failure.
         *
         * The action will fail if there are configuration errors. For example, the specified the bucket has been deleted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-s3action.html#cfn-ses-mailmanagerruleset-s3action-actionfailurepolicy
         */
        readonly actionFailurePolicy?: string;
        /**
         * The Amazon Resource Name (ARN) of the IAM Role to use while writing to S3.
         *
         * This role must have access to the s3:PutObject, kms:Encrypt, and kms:GenerateDataKey APIs for the given bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-s3action.html#cfn-ses-mailmanagerruleset-s3action-rolearn
         */
        readonly roleArn: string;
        /**
         * The bucket name of the S3 bucket to write to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-s3action.html#cfn-ses-mailmanagerruleset-s3action-s3bucket
         */
        readonly s3Bucket: string;
        /**
         * The S3 prefix to use for the write to the s3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-s3action.html#cfn-ses-mailmanagerruleset-s3action-s3prefix
         */
        readonly s3Prefix?: string;
        /**
         * The KMS Key ID to use to encrypt the message in S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-s3action.html#cfn-ses-mailmanagerruleset-s3action-s3ssekmskeyid
         */
        readonly s3SseKmsKeyId?: string;
    }
    /**
     * Sends the email to the internet using the ses:SendRawEmail API.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-sendaction.html
     */
    interface SendActionProperty {
        /**
         * A policy that states what to do in the case of failure.
         *
         * The action will fail if there are configuration errors. For example, the caller does not have the permissions to call the sendRawEmail API.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-sendaction.html#cfn-ses-mailmanagerruleset-sendaction-actionfailurepolicy
         */
        readonly actionFailurePolicy?: string;
        /**
         * The Amazon Resource Name (ARN) of the role to use for this action.
         *
         * This role must have access to the ses:SendRawEmail API.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-sendaction.html#cfn-ses-mailmanagerruleset-sendaction-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * The action to add a header to a message.
     *
     * When executed, this action will add the given header to the message.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-addheaderaction.html
     */
    interface AddHeaderActionProperty {
        /**
         * The name of the header to add to an email.
         *
         * The header must be prefixed with "X-". Headers are added regardless of whether the header name pre-existed in the email.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-addheaderaction.html#cfn-ses-mailmanagerruleset-addheaderaction-headername
         */
        readonly headerName: string;
        /**
         * The value of the header to add to the email.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-addheaderaction.html#cfn-ses-mailmanagerruleset-addheaderaction-headervalue
         */
        readonly headerValue: string;
    }
    /**
     * This action replaces the email envelope recipients with the given list of recipients.
     *
     * If the condition of this action applies only to a subset of recipients, only those recipients are replaced with the recipients specified in the action. The message contents and headers are unaffected by this action, only the envelope recipients are updated.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-replacerecipientaction.html
     */
    interface ReplaceRecipientActionProperty {
        /**
         * This action specifies the replacement recipient email addresses to insert.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-replacerecipientaction.html#cfn-ses-mailmanagerruleset-replacerecipientaction-replacewith
         */
        readonly replaceWith?: Array<string>;
    }
    /**
     * This action to delivers an email to a mailbox.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-delivertomailboxaction.html
     */
    interface DeliverToMailboxActionProperty {
        /**
         * A policy that states what to do in the case of failure.
         *
         * The action will fail if there are configuration errors. For example, the mailbox ARN is no longer valid.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-delivertomailboxaction.html#cfn-ses-mailmanagerruleset-delivertomailboxaction-actionfailurepolicy
         */
        readonly actionFailurePolicy?: string;
        /**
         * The Amazon Resource Name (ARN) of a WorkMail organization to deliver the email to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-delivertomailboxaction.html#cfn-ses-mailmanagerruleset-delivertomailboxaction-mailboxarn
         */
        readonly mailboxArn: string;
        /**
         * The Amazon Resource Name (ARN) of an IAM role to use to execute this action.
         *
         * The role must have access to the workmail:DeliverToMailbox API.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-delivertomailboxaction.html#cfn-ses-mailmanagerruleset-delivertomailboxaction-rolearn
         */
        readonly roleArn: string;
    }
    /**
     * The action to deliver incoming emails to an Amazon Q Business application for indexing.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-delivertoqbusinessaction.html
     */
    interface DeliverToQBusinessActionProperty {
        /**
         * A policy that states what to do in the case of failure.
         *
         * The action will fail if there are configuration errors. For example, the specified application has been deleted or the role lacks necessary permissions to call the qbusiness:BatchPutDocument API.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-delivertoqbusinessaction.html#cfn-ses-mailmanagerruleset-delivertoqbusinessaction-actionfailurepolicy
         */
        readonly actionFailurePolicy?: string;
        /**
         * The unique identifier of the Amazon Q Business application instance where the email content will be delivered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-delivertoqbusinessaction.html#cfn-ses-mailmanagerruleset-delivertoqbusinessaction-applicationid
         */
        readonly applicationId: string;
        /**
         * The identifier of the knowledge base index within the Amazon Q Business application where the email content will be stored and indexed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-delivertoqbusinessaction.html#cfn-ses-mailmanagerruleset-delivertoqbusinessaction-indexid
         */
        readonly indexId: string;
        /**
         * The Amazon Resource Name (ARN) of the IAM Role to use while delivering to Amazon Q Business.
         *
         * This role must have access to the qbusiness:BatchPutDocument API for the given application and index.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagerruleset-delivertoqbusinessaction.html#cfn-ses-mailmanagerruleset-delivertoqbusinessaction-rolearn
         */
        readonly roleArn: string;
    }
}
/**
 * Properties for defining a `CfnMailManagerRuleSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html
 */
export interface CfnMailManagerRuleSetProps {
    /**
     * Conditional rules that are evaluated for determining actions on email.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rules
     */
    readonly rules: Array<cdk.IResolvable | CfnMailManagerRuleSet.RuleProperty> | cdk.IResolvable;
    /**
     * A user-friendly name for the rule set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulesetname
     */
    readonly ruleSetName?: string;
    /**
     * The tags used to organize, track, or control access for the resource.
     *
     * For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Resource to create a traffic policy for a Mail Manager ingress endpoint which contains policy statements used to evaluate whether incoming emails should be allowed or denied.
 *
 * @cloudformationResource AWS::SES::MailManagerTrafficPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html
 */
export declare class CfnMailManagerTrafficPolicy extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMailManagerTrafficPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMailManagerTrafficPolicy;
    /**
     * The Amazon Resource Name (ARN) of the traffic policy resource.
     *
     * @cloudformationAttribute TrafficPolicyArn
     */
    readonly attrTrafficPolicyArn: string;
    /**
     * The identifier of the traffic policy resource.
     *
     * @cloudformationAttribute TrafficPolicyId
     */
    readonly attrTrafficPolicyId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Default action instructs the traﬃc policy to either Allow or Deny (block) messages that fall outside of (or not addressed by) the conditions of your policy statements.
     */
    defaultAction: string;
    /**
     * The maximum message size in bytes of email which is allowed in by this traffic policy—anything larger will be blocked.
     */
    maxMessageSizeBytes?: number;
    /**
     * Conditional statements for filtering email traffic.
     */
    policyStatements: Array<cdk.IResolvable | CfnMailManagerTrafficPolicy.PolicyStatementProperty> | cdk.IResolvable;
    /**
     * The tags used to organize, track, or control access for the resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The name of the policy.
     */
    trafficPolicyName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMailManagerTrafficPolicyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMailManagerTrafficPolicy {
    /**
     * The structure containing traffic policy conditions and actions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-policystatement.html
     */
    interface PolicyStatementProperty {
        /**
         * The action that informs a traffic policy resource to either allow or block the email if it matches a condition in the policy statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-policystatement.html#cfn-ses-mailmanagertrafficpolicy-policystatement-action
         */
        readonly action: string;
        /**
         * The list of conditions to apply to incoming messages for filtering email traffic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-policystatement.html#cfn-ses-mailmanagertrafficpolicy-policystatement-conditions
         */
        readonly conditions: Array<cdk.IResolvable | CfnMailManagerTrafficPolicy.PolicyConditionProperty> | cdk.IResolvable;
    }
    /**
     * The email traffic filtering conditions which are contained in a traffic policy resource.
     *
     * > This data type is a UNION, so only one of the following members can be specified when used or returned.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-policycondition.html
     */
    interface PolicyConditionProperty {
        /**
         * This represents a boolean type condition matching on the incoming mail.
         *
         * It performs the boolean operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-policycondition.html#cfn-ses-mailmanagertrafficpolicy-policycondition-booleanexpression
         */
        readonly booleanExpression?: CfnMailManagerTrafficPolicy.IngressBooleanExpressionProperty | cdk.IResolvable;
        /**
         * This represents an IP based condition matching on the incoming mail.
         *
         * It performs the operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-policycondition.html#cfn-ses-mailmanagertrafficpolicy-policycondition-ipexpression
         */
        readonly ipExpression?: CfnMailManagerTrafficPolicy.IngressIpv4ExpressionProperty | cdk.IResolvable;
        /**
         * This represents a string based condition matching on the incoming mail.
         *
         * It performs the string operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-policycondition.html#cfn-ses-mailmanagertrafficpolicy-policycondition-stringexpression
         */
        readonly stringExpression?: CfnMailManagerTrafficPolicy.IngressStringExpressionProperty | cdk.IResolvable;
        /**
         * This represents a TLS based condition matching on the incoming mail.
         *
         * It performs the operation configured in 'Operator' and evaluates the 'Protocol' object against the 'Value'.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-policycondition.html#cfn-ses-mailmanagertrafficpolicy-policycondition-tlsexpression
         */
        readonly tlsExpression?: CfnMailManagerTrafficPolicy.IngressTlsProtocolExpressionProperty | cdk.IResolvable;
    }
    /**
     * The structure for a string based condition matching on the incoming mail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressstringexpression.html
     */
    interface IngressStringExpressionProperty {
        /**
         * The left hand side argument of a string condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressstringexpression.html#cfn-ses-mailmanagertrafficpolicy-ingressstringexpression-evaluate
         */
        readonly evaluate: CfnMailManagerTrafficPolicy.IngressStringToEvaluateProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressstringexpression.html#cfn-ses-mailmanagertrafficpolicy-ingressstringexpression-operator
         */
        readonly operator: string;
        /**
         * The right hand side argument of a string condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressstringexpression.html#cfn-ses-mailmanagertrafficpolicy-ingressstringexpression-values
         */
        readonly values: Array<string>;
    }
    /**
     * The union type representing the allowed types for the left hand side of a string condition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressstringtoevaluate.html
     */
    interface IngressStringToEvaluateProperty {
        /**
         * The enum type representing the allowed attribute types for a string condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressstringtoevaluate.html#cfn-ses-mailmanagertrafficpolicy-ingressstringtoevaluate-attribute
         */
        readonly attribute: string;
    }
    /**
     * The union type representing the allowed types for the left hand side of an IP condition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressipv4expression.html
     */
    interface IngressIpv4ExpressionProperty {
        /**
         * The left hand side argument of an IP condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressipv4expression.html#cfn-ses-mailmanagertrafficpolicy-ingressipv4expression-evaluate
         */
        readonly evaluate: CfnMailManagerTrafficPolicy.IngressIpToEvaluateProperty | cdk.IResolvable;
        /**
         * The matching operator for an IP condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressipv4expression.html#cfn-ses-mailmanagertrafficpolicy-ingressipv4expression-operator
         */
        readonly operator: string;
        /**
         * The right hand side argument of an IP condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressipv4expression.html#cfn-ses-mailmanagertrafficpolicy-ingressipv4expression-values
         */
        readonly values: Array<string>;
    }
    /**
     * The structure for an IP based condition matching on the incoming mail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressiptoevaluate.html
     */
    interface IngressIpToEvaluateProperty {
        /**
         * An enum type representing the allowed attribute types for an IP condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressiptoevaluate.html#cfn-ses-mailmanagertrafficpolicy-ingressiptoevaluate-attribute
         */
        readonly attribute: string;
    }
    /**
     * The structure for a TLS related condition matching on the incoming mail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingresstlsprotocolexpression.html
     */
    interface IngressTlsProtocolExpressionProperty {
        /**
         * The left hand side argument of a TLS condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingresstlsprotocolexpression.html#cfn-ses-mailmanagertrafficpolicy-ingresstlsprotocolexpression-evaluate
         */
        readonly evaluate: CfnMailManagerTrafficPolicy.IngressTlsProtocolToEvaluateProperty | cdk.IResolvable;
        /**
         * The matching operator for a TLS condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingresstlsprotocolexpression.html#cfn-ses-mailmanagertrafficpolicy-ingresstlsprotocolexpression-operator
         */
        readonly operator: string;
        /**
         * The right hand side argument of a TLS condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingresstlsprotocolexpression.html#cfn-ses-mailmanagertrafficpolicy-ingresstlsprotocolexpression-value
         */
        readonly value: string;
    }
    /**
     * The union type representing the allowed types for the left hand side of a TLS condition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingresstlsprotocoltoevaluate.html
     */
    interface IngressTlsProtocolToEvaluateProperty {
        /**
         * The enum type representing the allowed attribute types for the TLS condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingresstlsprotocoltoevaluate.html#cfn-ses-mailmanagertrafficpolicy-ingresstlsprotocoltoevaluate-attribute
         */
        readonly attribute: string;
    }
    /**
     * The structure for a boolean condition matching on the incoming mail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressbooleanexpression.html
     */
    interface IngressBooleanExpressionProperty {
        /**
         * The operand on which to perform a boolean condition operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressbooleanexpression.html#cfn-ses-mailmanagertrafficpolicy-ingressbooleanexpression-evaluate
         */
        readonly evaluate: CfnMailManagerTrafficPolicy.IngressBooleanToEvaluateProperty | cdk.IResolvable;
        /**
         * The matching operator for a boolean condition expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressbooleanexpression.html#cfn-ses-mailmanagertrafficpolicy-ingressbooleanexpression-operator
         */
        readonly operator: string;
    }
    /**
     * The union type representing the allowed types of operands for a boolean condition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressbooleantoevaluate.html
     */
    interface IngressBooleanToEvaluateProperty {
        /**
         * The structure type for a boolean condition stating the Add On ARN and its returned value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressbooleantoevaluate.html#cfn-ses-mailmanagertrafficpolicy-ingressbooleantoevaluate-analysis
         */
        readonly analysis: CfnMailManagerTrafficPolicy.IngressAnalysisProperty | cdk.IResolvable;
    }
    /**
     * The Add On ARN and its returned value that is evaluated in a policy statement's conditional expression to either deny or block the incoming email.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressanalysis.html
     */
    interface IngressAnalysisProperty {
        /**
         * The Amazon Resource Name (ARN) of an Add On.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressanalysis.html#cfn-ses-mailmanagertrafficpolicy-ingressanalysis-analyzer
         */
        readonly analyzer: string;
        /**
         * The returned value from an Add On.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ses-mailmanagertrafficpolicy-ingressanalysis.html#cfn-ses-mailmanagertrafficpolicy-ingressanalysis-resultfield
         */
        readonly resultField: string;
    }
}
/**
 * Properties for defining a `CfnMailManagerTrafficPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html
 */
export interface CfnMailManagerTrafficPolicyProps {
    /**
     * Default action instructs the traﬃc policy to either Allow or Deny (block) messages that fall outside of (or not addressed by) the conditions of your policy statements.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-defaultaction
     */
    readonly defaultAction: string;
    /**
     * The maximum message size in bytes of email which is allowed in by this traffic policy—anything larger will be blocked.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-maxmessagesizebytes
     */
    readonly maxMessageSizeBytes?: number;
    /**
     * Conditional statements for filtering email traffic.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-policystatements
     */
    readonly policyStatements: Array<cdk.IResolvable | CfnMailManagerTrafficPolicy.PolicyStatementProperty> | cdk.IResolvable;
    /**
     * The tags used to organize, track, or control access for the resource.
     *
     * For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the policy.
     *
     * The policy name cannot exceed 64 characters and can only include alphanumeric characters, dashes, and underscores.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagertrafficpolicy.html#cfn-ses-mailmanagertrafficpolicy-trafficpolicyname
     */
    readonly trafficPolicyName?: string;
}
