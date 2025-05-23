import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * > AWS Chatbot is now  . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html) >  > `Type` attribute values remain unchanged.
 *
 * The `AWS::Chatbot::MicrosoftTeamsChannelConfiguration` resource configures a Microsoft Teams channel to allow users to use  with AWS CloudFormation templates.
 *
 * This resource requires some setup to be done in the  in chat applications console. To provide the required Microsoft Teams team and tenant IDs, you must perform the initial authorization flow with Microsoft Teams in the  in chat applications console, then copy and paste the IDs from the console. For more details, see steps 1-3 in [Get started with Microsoft Teams](https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup) in the *in chat applications Administrator Guide* .
 *
 * @cloudformationResource AWS::Chatbot::MicrosoftTeamsChannelConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html
 */
export declare class CfnMicrosoftTeamsChannelConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMicrosoftTeamsChannelConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMicrosoftTeamsChannelConfiguration;
    /**
     * The ARN of the resource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the configuration.
     */
    configurationName: string;
    /**
     * Links a list of resource ARNs (for example, custom action ARNs) to a Microsoft Teams channel configuration for  .
     */
    customizationResourceArns?: Array<string>;
    /**
     * The list of IAM policy ARNs that are applied as channel guardrails.
     */
    guardrailPolicies?: Array<string>;
    /**
     * The ARN of the IAM role that defines the permissions for  .
     */
    iamRoleArn: string;
    /**
     * Specifies the logging level for this configuration. This property affects the log entries pushed to Amazon CloudWatch Logs.
     */
    loggingLevel?: string;
    /**
     * The ARNs of the SNS topics that deliver notifications to  .
     */
    snsTopicArns?: Array<string>;
    /**
     * The tags to add to the configuration.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The ID of the Microsoft Team authorized with  .
     */
    teamId: string;
    /**
     * The ID of the Microsoft Teams channel.
     */
    teamsChannelId: string;
    /**
     * The ID of the Microsoft Teams tenant.
     */
    teamsTenantId: string;
    /**
     * Enables use of a user role requirement in your chat configuration.
     */
    userRoleRequired?: boolean | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMicrosoftTeamsChannelConfigurationProps);
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
 * Properties for defining a `CfnMicrosoftTeamsChannelConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html
 */
export interface CfnMicrosoftTeamsChannelConfigurationProps {
    /**
     * The name of the configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html#cfn-chatbot-microsoftteamschannelconfiguration-configurationname
     */
    readonly configurationName: string;
    /**
     * Links a list of resource ARNs (for example, custom action ARNs) to a Microsoft Teams channel configuration for  .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html#cfn-chatbot-microsoftteamschannelconfiguration-customizationresourcearns
     */
    readonly customizationResourceArns?: Array<string>;
    /**
     * The list of IAM policy ARNs that are applied as channel guardrails.
     *
     * The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html#cfn-chatbot-microsoftteamschannelconfiguration-guardrailpolicies
     */
    readonly guardrailPolicies?: Array<string>;
    /**
     * The ARN of the IAM role that defines the permissions for  .
     *
     * This is a user-defined role that  will assume. This is not the service-linked role. For more information, see [IAM Policies for  in chat applications](https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html#cfn-chatbot-microsoftteamschannelconfiguration-iamrolearn
     */
    readonly iamRoleArn: string;
    /**
     * Specifies the logging level for this configuration. This property affects the log entries pushed to Amazon CloudWatch Logs.
     *
     * Logging levels include `ERROR` , `INFO` , or `NONE` .
     *
     * @default - "NONE"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html#cfn-chatbot-microsoftteamschannelconfiguration-logginglevel
     */
    readonly loggingLevel?: string;
    /**
     * The ARNs of the SNS topics that deliver notifications to  .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html#cfn-chatbot-microsoftteamschannelconfiguration-snstopicarns
     */
    readonly snsTopicArns?: Array<string>;
    /**
     * The tags to add to the configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html#cfn-chatbot-microsoftteamschannelconfiguration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ID of the Microsoft Team authorized with  .
     *
     * To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the  in chat applications console. Then you can copy and paste the team ID from the console. For more details, see steps 1-3 in [Tutorial: Get started with Microsoft Teams](https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html) in the *in chat applications Administrator Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html#cfn-chatbot-microsoftteamschannelconfiguration-teamid
     */
    readonly teamId: string;
    /**
     * The ID of the Microsoft Teams channel.
     *
     * To get the channel ID, open Microsoft Teams, right click on the channel name in the left pane, then choose *Copy* . An example of the channel ID syntax is: `19%3ab6ef35dc342d56ba5654e6fc6d25a071%40thread.tacv2` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html#cfn-chatbot-microsoftteamschannelconfiguration-teamschannelid
     */
    readonly teamsChannelId: string;
    /**
     * The ID of the Microsoft Teams tenant.
     *
     * To get the tenant ID, you must perform the initial authorization flow with Microsoft Teams in the  in chat applications console. Then you can copy and paste the tenant ID from the console. For more details, see steps 1-3 in [Tutorial: Get started with Microsoft Teams](https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html) in the *in chat applications Administrator Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html#cfn-chatbot-microsoftteamschannelconfiguration-teamstenantid
     */
    readonly teamsTenantId: string;
    /**
     * Enables use of a user role requirement in your chat configuration.
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-microsoftteamschannelconfiguration.html#cfn-chatbot-microsoftteamschannelconfiguration-userrolerequired
     */
    readonly userRoleRequired?: boolean | cdk.IResolvable;
}
/**
 * > AWS Chatbot is now  . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html) >  > `Type` attribute values remain unchanged.
 *
 * The `AWS::Chatbot::SlackChannelConfiguration` resource configures a Slack channel to allow users to use  with AWS CloudFormation templates.
 *
 * This resource requires some setup to be done in the  in chat applications console. To provide the required Slack workspace ID, you must perform the initial authorization flow with Slack in the  in chat applications console, then copy and paste the workspace ID from the console. For more details, see steps 1-3 in [Tutorial: Get started with Slack](https://docs.aws.amazon.com/chatbot/latest/adminguide/slack-setup.html#slack-client-setup) in the *in chat applications User Guide* .
 *
 * @cloudformationResource AWS::Chatbot::SlackChannelConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html
 */
export declare class CfnSlackChannelConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSlackChannelConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSlackChannelConfiguration;
    /**
     * The ARN of the resource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the configuration.
     */
    configurationName: string;
    /**
     * Links a list of resource ARNs (for example, custom action ARNs) to a Slack channel configuration for  .
     */
    customizationResourceArns?: Array<string>;
    /**
     * The list of IAM policy ARNs that are applied as channel guardrails.
     */
    guardrailPolicies?: Array<string>;
    /**
     * The ARN of the IAM role that defines the permissions for  .
     */
    iamRoleArn: string;
    /**
     * Specifies the logging level for this configuration. This property affects the log entries pushed to Amazon CloudWatch Logs.
     */
    loggingLevel?: string;
    /**
     * The ID of the Slack channel.
     */
    slackChannelId: string;
    /**
     * The ID of the Slack workspace authorized with  .
     */
    slackWorkspaceId: string;
    /**
     * The ARNs of the SNS topics that deliver notifications to  .
     */
    snsTopicArns?: Array<string>;
    /**
     * The tags to add to the configuration.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * Enables use of a user role requirement in your chat configuration.
     */
    userRoleRequired?: boolean | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSlackChannelConfigurationProps);
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
 * Properties for defining a `CfnSlackChannelConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html
 */
export interface CfnSlackChannelConfigurationProps {
    /**
     * The name of the configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-configurationname
     */
    readonly configurationName: string;
    /**
     * Links a list of resource ARNs (for example, custom action ARNs) to a Slack channel configuration for  .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-customizationresourcearns
     */
    readonly customizationResourceArns?: Array<string>;
    /**
     * The list of IAM policy ARNs that are applied as channel guardrails.
     *
     * The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-guardrailpolicies
     */
    readonly guardrailPolicies?: Array<string>;
    /**
     * The ARN of the IAM role that defines the permissions for  .
     *
     * This is a user-defined role that  will assume. This is not the service-linked role. For more information, see [IAM Policies for  in chat applications](https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-iamrolearn
     */
    readonly iamRoleArn: string;
    /**
     * Specifies the logging level for this configuration. This property affects the log entries pushed to Amazon CloudWatch Logs.
     *
     * Logging levels include `ERROR` , `INFO` , or `NONE` .
     *
     * @default - "NONE"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-logginglevel
     */
    readonly loggingLevel?: string;
    /**
     * The ID of the Slack channel.
     *
     * To get the ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the character string at the end of the URL. For example, `ABCBBLZZZ` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-slackchannelid
     */
    readonly slackChannelId: string;
    /**
     * The ID of the Slack workspace authorized with  .
     *
     * To get the workspace ID, you must perform the initial authorization flow with Slack in the  in chat applications console. Then you can copy and paste the workspace ID from the console. For more details, see steps 1-3 in [Tutorial: Get started with Slack](https://docs.aws.amazon.com/chatbot/latest/adminguide/slack-setup.html#slack-client-setup) in the *in chat applications User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-slackworkspaceid
     */
    readonly slackWorkspaceId: string;
    /**
     * The ARNs of the SNS topics that deliver notifications to  .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-snstopicarns
     */
    readonly snsTopicArns?: Array<string>;
    /**
     * The tags to add to the configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Enables use of a user role requirement in your chat configuration.
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-slackchannelconfiguration.html#cfn-chatbot-slackchannelconfiguration-userrolerequired
     */
    readonly userRoleRequired?: boolean | cdk.IResolvable;
}
/**
 * > AWS Chatbot is now  .
 *
 * [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html)
 * >
 * > `Type` attribute values remain unchanged.
 *
 * @cloudformationResource AWS::Chatbot::CustomAction
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html
 */
export declare class CfnCustomAction extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCustomAction from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCustomAction;
    /**
     * The fully defined ARN of the custom action.
     *
     * @cloudformationAttribute CustomActionArn
     */
    readonly attrCustomActionArn: string;
    /**
     * The name of the custom action.
     */
    actionName: string;
    /**
     * The name used to invoke this action in a chat channel.
     */
    aliasName?: string;
    /**
     * Defines when this custom action button should be attached to a notification.
     */
    attachments?: Array<CfnCustomAction.CustomActionAttachmentProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The definition of the command to run when invoked as an alias or as an action button.
     */
    definition: CfnCustomAction.CustomActionDefinitionProperty | cdk.IResolvable;
    /**
     * The tags to add to the configuration.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCustomActionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCustomAction {
    /**
     * > AWS Chatbot is now  . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html) >  > `Type` attribute values remain unchanged.
     *
     * Defines when a custom action button should be attached to a notification.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-customactionattachment.html
     */
    interface CustomActionAttachmentProperty {
        /**
         * The text of the button that appears on the notification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-customactionattachment.html#cfn-chatbot-customaction-customactionattachment-buttontext
         */
        readonly buttonText?: string;
        /**
         * The criteria for when a button should be shown based on values in the notification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-customactionattachment.html#cfn-chatbot-customaction-customactionattachment-criteria
         */
        readonly criteria?: Array<CfnCustomAction.CustomActionAttachmentCriteriaProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The type of notification that the custom action should be attached to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-customactionattachment.html#cfn-chatbot-customaction-customactionattachment-notificationtype
         */
        readonly notificationType?: string;
        /**
         * The variables to extract from the notification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-customactionattachment.html#cfn-chatbot-customaction-customactionattachment-variables
         */
        readonly variables?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * > AWS Chatbot is now  . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html) >  > `Type` attribute values remain unchanged.
     *
     * A criteria for when a button should be shown based on values in the notification.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-customactionattachmentcriteria.html
     */
    interface CustomActionAttachmentCriteriaProperty {
        /**
         * The operation to perform on the named variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-customactionattachmentcriteria.html#cfn-chatbot-customaction-customactionattachmentcriteria-operator
         */
        readonly operator: string;
        /**
         * A value that is compared with the actual value of the variable based on the behavior of the operator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-customactionattachmentcriteria.html#cfn-chatbot-customaction-customactionattachmentcriteria-value
         */
        readonly value?: string;
        /**
         * The name of the variable to operate on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-customactionattachmentcriteria.html#cfn-chatbot-customaction-customactionattachmentcriteria-variablename
         */
        readonly variableName: string;
    }
    /**
     * > AWS Chatbot is now  . [Learn more](https://docs.aws.amazon.com//chatbot/latest/adminguide/service-rename.html) >  > `Type` attribute values remain unchanged.
     *
     * The definition of the command to run when invoked as an alias or as an action button.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-customactiondefinition.html
     */
    interface CustomActionDefinitionProperty {
        /**
         * The command string to run which may include variables by prefixing with a dollar sign ($).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-chatbot-customaction-customactiondefinition.html#cfn-chatbot-customaction-customactiondefinition-commandtext
         */
        readonly commandText: string;
    }
}
/**
 * Properties for defining a `CfnCustomAction`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html
 */
export interface CfnCustomActionProps {
    /**
     * The name of the custom action.
     *
     * This name is included in the Amazon Resource Name (ARN).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-actionname
     */
    readonly actionName: string;
    /**
     * The name used to invoke this action in a chat channel.
     *
     * For example, `@Amazon Q run my-alias` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-aliasname
     */
    readonly aliasName?: string;
    /**
     * Defines when this custom action button should be attached to a notification.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-attachments
     */
    readonly attachments?: Array<CfnCustomAction.CustomActionAttachmentProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The definition of the command to run when invoked as an alias or as an action button.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-definition
     */
    readonly definition: CfnCustomAction.CustomActionDefinitionProperty | cdk.IResolvable;
    /**
     * The tags to add to the configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-chatbot-customaction.html#cfn-chatbot-customaction-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
