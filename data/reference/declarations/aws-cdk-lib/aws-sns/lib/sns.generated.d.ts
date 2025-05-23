import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::SNS::Subscription` resource subscribes an endpoint to an Amazon SNS topic.
 *
 * For a subscription to be created, the owner of the endpoint must` confirm the subscription.
 *
 * @cloudformationResource AWS::SNS::Subscription
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html
 */
export declare class CfnSubscription extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSubscription from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSubscription;
    /**
     * Returns the ARN of the subscription created by the AWS::SNS::Subscription resource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The delivery policy JSON assigned to the subscription.
     */
    deliveryPolicy?: any | cdk.IResolvable;
    /**
     * The subscription's endpoint.
     */
    endpoint?: string;
    /**
     * The filter policy JSON assigned to the subscription.
     */
    filterPolicy?: any | cdk.IResolvable;
    /**
     * This attribute lets you choose the filtering scope by using one of the following string value types:.
     */
    filterPolicyScope?: string;
    /**
     * The subscription's protocol.
     */
    protocol: string;
    /**
     * When set to `true` , enables raw message delivery.
     */
    rawMessageDelivery?: boolean | cdk.IResolvable;
    /**
     * When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue.
     */
    redrivePolicy?: any | cdk.IResolvable;
    /**
     * For cross-region subscriptions, the region in which the topic resides.
     */
    region?: string;
    /**
     * Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes.
     */
    replayPolicy?: any | cdk.IResolvable | string;
    /**
     * This property applies only to Amazon Data Firehose delivery stream subscriptions.
     */
    subscriptionRoleArn?: string;
    /**
     * The ARN of the topic to subscribe to.
     */
    topicArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSubscriptionProps);
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
 * Properties for defining a `CfnSubscription`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html
 */
export interface CfnSubscriptionProps {
    /**
     * The delivery policy JSON assigned to the subscription.
     *
     * Enables the subscriber to define the message delivery retry strategy in the case of an HTTP/S endpoint subscribed to the topic. For more information, see `[GetSubscriptionAttributes](https://docs.aws.amazon.com/sns/latest/api/API_GetSubscriptionAttributes.html)` in the *Amazon SNS API Reference* and [Message delivery retries](https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html) in the *Amazon SNS Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-deliverypolicy
     */
    readonly deliveryPolicy?: any | cdk.IResolvable;
    /**
     * The subscription's endpoint.
     *
     * The endpoint value depends on the protocol that you specify. For more information, see the `Endpoint` parameter of the `[Subscribe](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html)` action in the *Amazon SNS API Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-endpoint
     */
    readonly endpoint?: string;
    /**
     * The filter policy JSON assigned to the subscription.
     *
     * Enables the subscriber to filter out unwanted messages. For more information, see `[GetSubscriptionAttributes](https://docs.aws.amazon.com/sns/latest/api/API_GetSubscriptionAttributes.html)` in the *Amazon SNS API Reference* and [Message filtering](https://docs.aws.amazon.com/sns/latest/dg/sns-message-filtering.html) in the *Amazon SNS Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-filterpolicy
     */
    readonly filterPolicy?: any | cdk.IResolvable;
    /**
     * This attribute lets you choose the filtering scope by using one of the following string value types:.
     *
     * - `MessageAttributes` (default) - The filter is applied on the message attributes.
     * - `MessageBody` - The filter is applied on the message body.
     *
     * > `Null` is not a valid value for `FilterPolicyScope` . To delete a filter policy, delete the `FilterPolicy` property but keep `FilterPolicyScope` property as is.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-filterpolicyscope
     */
    readonly filterPolicyScope?: string;
    /**
     * The subscription's protocol.
     *
     * For more information, see the `Protocol` parameter of the `[Subscribe](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html)` action in the *Amazon SNS API Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-protocol
     */
    readonly protocol: string;
    /**
     * When set to `true` , enables raw message delivery.
     *
     * Raw messages don't contain any JSON formatting and can be sent to Amazon SQS and HTTP/S endpoints. For more information, see `[GetSubscriptionAttributes](https://docs.aws.amazon.com/sns/latest/api/API_GetSubscriptionAttributes.html)` in the *Amazon SNS API Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-rawmessagedelivery
     */
    readonly rawMessageDelivery?: boolean | cdk.IResolvable;
    /**
     * When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue.
     *
     * Messages that can't be delivered due to client errors (for example, when the subscribed endpoint is unreachable) or server errors (for example, when the service that powers the subscribed endpoint becomes unavailable) are held in the dead-letter queue for further analysis or reprocessing.
     *
     * For more information about the redrive policy and dead-letter queues, see [Amazon SQS dead-letter queues](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html) in the *Amazon SQS Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-redrivepolicy
     */
    readonly redrivePolicy?: any | cdk.IResolvable;
    /**
     * For cross-region subscriptions, the region in which the topic resides.
     *
     * If no region is specified, AWS CloudFormation uses the region of the caller as the default.
     *
     * If you perform an update operation that only updates the `Region` property of a `AWS::SNS::Subscription` resource, that operation will fail unless you are either:
     *
     * - Updating the `Region` from `NULL` to the caller region.
     * - Updating the `Region` from the caller region to `NULL` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-region
     */
    readonly region?: string;
    /**
     * Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-replaypolicy
     */
    readonly replayPolicy?: any | cdk.IResolvable | string;
    /**
     * This property applies only to Amazon Data Firehose delivery stream subscriptions.
     *
     * Specify the ARN of the IAM role that has the following:
     *
     * - Permission to write to the Amazon Data Firehose delivery stream
     * - Amazon SNS listed as a trusted entity
     *
     * Specifying a valid ARN for this attribute is required for Firehose delivery stream subscriptions. For more information, see [Fanout to Amazon Data Firehose delivery streams](https://docs.aws.amazon.com/sns/latest/dg/sns-firehose-as-subscriber.html) in the *Amazon SNS Developer Guide.*
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-subscriptionrolearn
     */
    readonly subscriptionRoleArn?: string;
    /**
     * The ARN of the topic to subscribe to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html#cfn-sns-subscription-topicarn
     */
    readonly topicArn: string;
}
/**
 * The `AWS::SNS::Topic` resource creates a topic to which notifications can be published.
 *
 * > One account can create a maximum of 100,000 standard topics and 1,000 FIFO topics. For more information, see [Amazon SNS endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/sns.html) in the *AWS General Reference* .
 *
 * @cloudformationResource AWS::SNS::Topic
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html
 */
export declare class CfnTopic extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTopic from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTopic;
    /**
     * Returns the ARN of an Amazon SNS topic.
     *
     * @cloudformationAttribute TopicArn
     */
    readonly attrTopicArn: string;
    /**
     * Returns the name of an Amazon SNS topic.
     *
     * @cloudformationAttribute TopicName
     */
    readonly attrTopicName: string;
    /**
     * The `ArchivePolicy` determines the number of days Amazon SNS retains messages in FIFO topics.
     */
    archivePolicy?: any | cdk.IResolvable;
    /**
     * `ContentBasedDeduplication` enables deduplication of messages based on their content for FIFO topics.
     */
    contentBasedDeduplication?: boolean | cdk.IResolvable;
    /**
     * The body of the policy document you want to use for this topic.
     */
    dataProtectionPolicy?: any | cdk.IResolvable;
    /**
     * The `DeliveryStatusLogging` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:.
     */
    deliveryStatusLogging?: Array<cdk.IResolvable | CfnTopic.LoggingConfigProperty> | cdk.IResolvable;
    /**
     * The display name to use for an Amazon SNS topic with SMS subscriptions.
     */
    displayName?: string;
    /**
     * Specifies the throughput quota and deduplication behavior to apply for the FIFO topic.
     */
    fifoThroughputScope?: string;
    /**
     * Set to true to create a FIFO topic.
     */
    fifoTopic?: boolean | cdk.IResolvable;
    /**
     * The ID of an AWS managed customer master key (CMK) for Amazon SNS or a custom CMK.
     */
    kmsMasterKeyId?: string;
    /**
     * The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS.
     */
    signatureVersion?: string;
    /**
     * The Amazon SNS subscriptions (endpoints) for this topic.
     */
    subscription?: Array<cdk.IResolvable | CfnTopic.SubscriptionProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The list of tags to add to a new topic.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The name of the topic you want to create.
     */
    topicName?: string;
    /**
     * Tracing mode of an Amazon SNS topic.
     */
    tracingConfig?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnTopicProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTopic {
    /**
     * `Subscription` is an embedded property that describes the subscription endpoints of an Amazon SNS topic.
     *
     * > For full control over subscription behavior (for example, delivery policy, filtering, raw message delivery, and cross-region subscriptions), use the [AWS::SNS::Subscription](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-subscription.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic-subscription.html
     */
    interface SubscriptionProperty {
        /**
         * The endpoint that receives notifications from the Amazon SNS topic.
         *
         * The endpoint value depends on the protocol that you specify. For more information, see the `Endpoint` parameter of the `[Subscribe](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html)` action in the *Amazon SNS API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic-subscription.html#cfn-sns-topic-subscription-endpoint
         */
        readonly endpoint: string;
        /**
         * The subscription's protocol.
         *
         * For more information, see the `Protocol` parameter of the `[Subscribe](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html)` action in the *Amazon SNS API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic-subscription.html#cfn-sns-topic-subscription-protocol
         */
        readonly protocol: string;
    }
    /**
     * The `LoggingConfig` property type specifies the `Delivery` status logging configuration for an [`AWS::SNS::Topic`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic-loggingconfig.html
     */
    interface LoggingConfigProperty {
        /**
         * The IAM role ARN to be used when logging failed message deliveries in Amazon CloudWatch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic-loggingconfig.html#cfn-sns-topic-loggingconfig-failurefeedbackrolearn
         */
        readonly failureFeedbackRoleArn?: string;
        /**
         * Indicates one of the supported protocols for the Amazon SNS topic.
         *
         * > At least one of the other three `LoggingConfig` properties is recommend along with `Protocol` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic-loggingconfig.html#cfn-sns-topic-loggingconfig-protocol
         */
        readonly protocol: string;
        /**
         * The IAM role ARN to be used when logging successful message deliveries in Amazon CloudWatch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic-loggingconfig.html#cfn-sns-topic-loggingconfig-successfeedbackrolearn
         */
        readonly successFeedbackRoleArn?: string;
        /**
         * The percentage of successful message deliveries to be logged in Amazon CloudWatch.
         *
         * Valid percentage values range from 0 to 100.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic-loggingconfig.html#cfn-sns-topic-loggingconfig-successfeedbacksamplerate
         */
        readonly successFeedbackSampleRate?: string;
    }
}
/**
 * Properties for defining a `CfnTopic`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html
 */
export interface CfnTopicProps {
    /**
     * The `ArchivePolicy` determines the number of days Amazon SNS retains messages in FIFO topics.
     *
     * You can set a retention period ranging from 1 to 365 days. This property is only applicable to FIFO topics; attempting to use it with standard topics will result in a creation failure.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html#cfn-sns-topic-archivepolicy
     */
    readonly archivePolicy?: any | cdk.IResolvable;
    /**
     * `ContentBasedDeduplication` enables deduplication of messages based on their content for FIFO topics.
     *
     * By default, this property is set to false. If you create a FIFO topic with `ContentBasedDeduplication` set to false, you must provide a `MessageDeduplicationId` for each `Publish` action. When set to true, Amazon SNS automatically generates a `MessageDeduplicationId` using a SHA-256 hash of the message body (excluding message attributes). You can optionally override this generated value by specifying a `MessageDeduplicationId` in the `Publish` action. Note that this property only applies to FIFO topics; using it with standard topics will cause the creation to fail.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html#cfn-sns-topic-contentbaseddeduplication
     */
    readonly contentBasedDeduplication?: boolean | cdk.IResolvable;
    /**
     * The body of the policy document you want to use for this topic.
     *
     * You can only add one policy per topic.
     *
     * The policy must be in JSON string format.
     *
     * Length Constraints: Maximum length of 30,720.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html#cfn-sns-topic-dataprotectionpolicy
     */
    readonly dataProtectionPolicy?: any | cdk.IResolvable;
    /**
     * The `DeliveryStatusLogging` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:.
     *
     * - HTTP
     * - Amazon Kinesis Data Firehose
     * - AWS Lambda
     * - Platform application endpoint
     * - Amazon Simple Queue Service
     *
     * Once configured, log entries are sent to Amazon CloudWatch Logs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html#cfn-sns-topic-deliverystatuslogging
     */
    readonly deliveryStatusLogging?: Array<cdk.IResolvable | CfnTopic.LoggingConfigProperty> | cdk.IResolvable;
    /**
     * The display name to use for an Amazon SNS topic with SMS subscriptions.
     *
     * The display name must be maximum 100 characters long, including hyphens (-), underscores (_), spaces, and tabs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html#cfn-sns-topic-displayname
     */
    readonly displayName?: string;
    /**
     * Specifies the throughput quota and deduplication behavior to apply for the FIFO topic.
     *
     * Valid values are `Topic` or `MessageGroup` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html#cfn-sns-topic-fifothroughputscope
     */
    readonly fifoThroughputScope?: string;
    /**
     * Set to true to create a FIFO topic.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html#cfn-sns-topic-fifotopic
     */
    readonly fifoTopic?: boolean | cdk.IResolvable;
    /**
     * The ID of an AWS managed customer master key (CMK) for Amazon SNS or a custom CMK.
     *
     * For more information, see [Key terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms) . For more examples, see `[KeyId](https://docs.aws.amazon.com/kms/latest/APIReference/API_DescribeKey.html#API_DescribeKey_RequestParameters)` in the *AWS Key Management Service API Reference* .
     *
     * This property applies only to [server-side-encryption](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html#cfn-sns-topic-kmsmasterkeyid
     */
    readonly kmsMasterKeyId?: string;
    /**
     * The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS.
     *
     * By default, `SignatureVersion` is set to `1` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html#cfn-sns-topic-signatureversion
     */
    readonly signatureVersion?: string;
    /**
     * The Amazon SNS subscriptions (endpoints) for this topic.
     *
     * > If you specify the `Subscription` property in the `AWS::SNS::Topic` resource and it creates an associated subscription resource, the associated subscription is not deleted when the `AWS::SNS::Topic` resource is deleted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html#cfn-sns-topic-subscription
     */
    readonly subscription?: Array<cdk.IResolvable | CfnTopic.SubscriptionProperty> | cdk.IResolvable;
    /**
     * The list of tags to add to a new topic.
     *
     * > To be able to tag a topic on creation, you must have the `sns:CreateTopic` and `sns:TagResource` permissions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html#cfn-sns-topic-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the topic you want to create.
     *
     * Topic names must include only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. FIFO topic names must end with `.fifo` .
     *
     * If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the topic name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * > If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html#cfn-sns-topic-topicname
     */
    readonly topicName?: string;
    /**
     * Tracing mode of an Amazon SNS topic.
     *
     * By default `TracingConfig` is set to `PassThrough` , and the topic passes through the tracing header it receives from an Amazon SNS publisher to its subscriptions. If set to `Active` , Amazon SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html#cfn-sns-topic-tracingconfig
     */
    readonly tracingConfig?: string;
}
/**
 * The `AWS::SNS::TopicInlinePolicy` resource associates one Amazon SNS topic with one policy.
 *
 * @cloudformationResource AWS::SNS::TopicInlinePolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicinlinepolicy.html
 */
export declare class CfnTopicInlinePolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTopicInlinePolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTopicInlinePolicy;
    /**
     * A policy document that contains permissions to add to the specified Amazon SNS topic.
     */
    policyDocument: any | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the topic to which you want to add the policy.
     */
    topicArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTopicInlinePolicyProps);
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
 * Properties for defining a `CfnTopicInlinePolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicinlinepolicy.html
 */
export interface CfnTopicInlinePolicyProps {
    /**
     * A policy document that contains permissions to add to the specified Amazon SNS topic.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicinlinepolicy.html#cfn-sns-topicinlinepolicy-policydocument
     */
    readonly policyDocument: any | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the topic to which you want to add the policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicinlinepolicy.html#cfn-sns-topicinlinepolicy-topicarn
     */
    readonly topicArn: string;
}
/**
 * The `AWS::SNS::TopicPolicy` resource associates Amazon SNS topics with a policy.
 *
 * For an example snippet, see [Declaring an Amazon SNS policy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-iam.html#scenario-sns-policy) in the *AWS CloudFormation User Guide* .
 *
 * @cloudformationResource AWS::SNS::TopicPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicpolicy.html
 */
export declare class CfnTopicPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTopicPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTopicPolicy;
    /**
     * The provider-assigned unique ID for this managed resource.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A policy document that contains permissions to add to the specified SNS topics.
     */
    policyDocument: any | cdk.IResolvable;
    /**
     * The Amazon Resource Names (ARN) of the topics to which you want to add the policy.
     */
    topics: Array<string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTopicPolicyProps);
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
 * Properties for defining a `CfnTopicPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicpolicy.html
 */
export interface CfnTopicPolicyProps {
    /**
     * A policy document that contains permissions to add to the specified SNS topics.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicpolicy.html#cfn-sns-topicpolicy-policydocument
     */
    readonly policyDocument: any | cdk.IResolvable;
    /**
     * The Amazon Resource Names (ARN) of the topics to which you want to add the policy.
     *
     * You can use the `[Ref](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html)` function to specify an `[AWS::SNS::Topic](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topic.html)` resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sns-topicpolicy.html#cfn-sns-topicpolicy-topics
     */
    readonly topics: Array<string>;
}
