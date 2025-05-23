import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a notification rule for a resource.
 *
 * The rule specifies the events you want notifications about and the targets (such as Amazon Simple Notification Service topics or AWS Chatbot clients configured for Slack) where you want to receive them.
 *
 * @cloudformationResource AWS::CodeStarNotifications::NotificationRule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html
 */
export declare class CfnNotificationRule extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnNotificationRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnNotificationRule;
    /**
     * The Amazon Resource Name (ARN) of the notification rule.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name or email alias of the person who created the notification rule.
     */
    createdBy?: string;
    /**
     * The level of detail to include in the notifications for this resource.
     */
    detailType: string;
    /**
     * The event type associated with this notification rule.
     */
    eventTypeId?: string;
    /**
     * A list of event types associated with this notification rule.
     */
    eventTypeIds: Array<string>;
    /**
     * The name for the notification rule.
     */
    name: string;
    /**
     * The Amazon Resource Name (ARN) of the resource to associate with the notification rule.
     */
    resource: string;
    /**
     * The status of the notification rule.
     */
    status?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags to apply to this notification rule.
     */
    tagsRaw?: Record<string, string>;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic or AWS Chatbot client.
     */
    targetAddress?: string;
    /**
     * A list of Amazon Resource Names (ARNs) of Amazon SNS topics and AWS Chatbot clients to associate with the notification rule.
     */
    targets: Array<cdk.IResolvable | CfnNotificationRule.TargetProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnNotificationRuleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnNotificationRule {
    /**
     * Information about the AWS Chatbot topics or AWS Chatbot clients associated with a notification rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestarnotifications-notificationrule-target.html
     */
    interface TargetProperty {
        /**
         * The Amazon Resource Name (ARN) of the AWS Chatbot topic or AWS Chatbot client.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestarnotifications-notificationrule-target.html#cfn-codestarnotifications-notificationrule-target-targetaddress
         */
        readonly targetAddress: string;
        /**
         * The target type. Can be an Amazon Simple Notification Service topic or AWS Chatbot client.
         *
         * - Amazon Simple Notification Service topics are specified as `SNS` .
         * - AWS Chatbot clients are specified as `AWSChatbotSlack` .
         * - AWS Chatbot clients for Microsoft Teams are specified as `AWSChatbotMicrosoftTeams` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codestarnotifications-notificationrule-target.html#cfn-codestarnotifications-notificationrule-target-targettype
         */
        readonly targetType: string;
    }
}
/**
 * Properties for defining a `CfnNotificationRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html
 */
export interface CfnNotificationRuleProps {
    /**
     * The name or email alias of the person who created the notification rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html#cfn-codestarnotifications-notificationrule-createdby
     */
    readonly createdBy?: string;
    /**
     * The level of detail to include in the notifications for this resource.
     *
     * `BASIC` will include only the contents of the event as it would appear in Amazon CloudWatch. `FULL` will include any supplemental information provided by AWS CodeStar Notifications and/or the service for the resource for which the notification is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html#cfn-codestarnotifications-notificationrule-detailtype
     */
    readonly detailType: string;
    /**
     * The event type associated with this notification rule.
     *
     * For a complete list of event types and IDs, see [Notification concepts](https://docs.aws.amazon.com/dtconsole/latest/userguide/concepts.html#concepts-api) in the *Developer Tools Console User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html#cfn-codestarnotifications-notificationrule-eventtypeid
     */
    readonly eventTypeId?: string;
    /**
     * A list of event types associated with this notification rule.
     *
     * For a complete list of event types and IDs, see [Notification concepts](https://docs.aws.amazon.com/dtconsole/latest/userguide/concepts.html#concepts-api) in the *Developer Tools Console User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html#cfn-codestarnotifications-notificationrule-eventtypeids
     */
    readonly eventTypeIds: Array<string>;
    /**
     * The name for the notification rule.
     *
     * Notification rule names must be unique in your AWS account .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html#cfn-codestarnotifications-notificationrule-name
     */
    readonly name: string;
    /**
     * The Amazon Resource Name (ARN) of the resource to associate with the notification rule.
     *
     * Supported resources include pipelines in AWS CodePipeline , repositories in AWS CodeCommit , and build projects in AWS CodeBuild .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html#cfn-codestarnotifications-notificationrule-resource
     */
    readonly resource: string;
    /**
     * The status of the notification rule.
     *
     * The default value is `ENABLED` . If the status is set to `DISABLED` , notifications aren't sent for the notification rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html#cfn-codestarnotifications-notificationrule-status
     */
    readonly status?: string;
    /**
     * A list of tags to apply to this notification rule.
     *
     * Key names cannot start with " `aws` ".
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html#cfn-codestarnotifications-notificationrule-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The Amazon Resource Name (ARN) of the Amazon SNS topic or AWS Chatbot client.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html#cfn-codestarnotifications-notificationrule-targetaddress
     */
    readonly targetAddress?: string;
    /**
     * A list of Amazon Resource Names (ARNs) of Amazon SNS topics and AWS Chatbot clients to associate with the notification rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarnotifications-notificationrule.html#cfn-codestarnotifications-notificationrule-targets
     */
    readonly targets: Array<cdk.IResolvable | CfnNotificationRule.TargetProperty> | cdk.IResolvable;
}
