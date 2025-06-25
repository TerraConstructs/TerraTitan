/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ChatbotSlackChannelConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_slack_channel_configuration#configuration_name ChatbotSlackChannelConfiguration#configuration_name}
    */
    readonly configurationName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_slack_channel_configuration#guardrail_policy_arns ChatbotSlackChannelConfiguration#guardrail_policy_arns}
    */
    readonly guardrailPolicyArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_slack_channel_configuration#iam_role_arn ChatbotSlackChannelConfiguration#iam_role_arn}
    */
    readonly iamRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_slack_channel_configuration#logging_level ChatbotSlackChannelConfiguration#logging_level}
    */
    readonly loggingLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_slack_channel_configuration#slack_channel_id ChatbotSlackChannelConfiguration#slack_channel_id}
    */
    readonly slackChannelId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_slack_channel_configuration#slack_team_id ChatbotSlackChannelConfiguration#slack_team_id}
    */
    readonly slackTeamId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_slack_channel_configuration#sns_topic_arns ChatbotSlackChannelConfiguration#sns_topic_arns}
    */
    readonly snsTopicArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_slack_channel_configuration#tags ChatbotSlackChannelConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_slack_channel_configuration#user_authorization_required ChatbotSlackChannelConfiguration#user_authorization_required}
    */
    readonly userAuthorizationRequired?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_slack_channel_configuration#timeouts ChatbotSlackChannelConfiguration#timeouts}
    */
    readonly timeouts?: ChatbotSlackChannelConfigurationTimeouts;
}
export interface ChatbotSlackChannelConfigurationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_slack_channel_configuration#create ChatbotSlackChannelConfiguration#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_slack_channel_configuration#delete ChatbotSlackChannelConfiguration#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_slack_channel_configuration#update ChatbotSlackChannelConfiguration#update}
    */
    readonly update?: string;
}
export declare function chatbotSlackChannelConfigurationTimeoutsToTerraform(struct?: ChatbotSlackChannelConfigurationTimeouts | cdktf.IResolvable): any;
export declare function chatbotSlackChannelConfigurationTimeoutsToHclTerraform(struct?: ChatbotSlackChannelConfigurationTimeouts | cdktf.IResolvable): any;
export declare class ChatbotSlackChannelConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChatbotSlackChannelConfigurationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ChatbotSlackChannelConfigurationTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_slack_channel_configuration aws_chatbot_slack_channel_configuration}
*/
export declare class ChatbotSlackChannelConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_chatbot_slack_channel_configuration";
    /**
    * Generates CDKTF code for importing a ChatbotSlackChannelConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ChatbotSlackChannelConfiguration to import
    * @param importFromId The id of the existing ChatbotSlackChannelConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_slack_channel_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ChatbotSlackChannelConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_slack_channel_configuration aws_chatbot_slack_channel_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChatbotSlackChannelConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: ChatbotSlackChannelConfigurationConfig);
    get chatConfigurationArn(): string;
    private _configurationName?;
    get configurationName(): string;
    set configurationName(value: string);
    get configurationNameInput(): string | undefined;
    private _guardrailPolicyArns?;
    get guardrailPolicyArns(): string[];
    set guardrailPolicyArns(value: string[]);
    resetGuardrailPolicyArns(): void;
    get guardrailPolicyArnsInput(): string[] | undefined;
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    get iamRoleArnInput(): string | undefined;
    private _loggingLevel?;
    get loggingLevel(): string;
    set loggingLevel(value: string);
    resetLoggingLevel(): void;
    get loggingLevelInput(): string | undefined;
    private _slackChannelId?;
    get slackChannelId(): string;
    set slackChannelId(value: string);
    get slackChannelIdInput(): string | undefined;
    get slackChannelName(): string;
    private _slackTeamId?;
    get slackTeamId(): string;
    set slackTeamId(value: string);
    get slackTeamIdInput(): string | undefined;
    get slackTeamName(): string;
    private _snsTopicArns?;
    get snsTopicArns(): string[];
    set snsTopicArns(value: string[]);
    resetSnsTopicArns(): void;
    get snsTopicArnsInput(): string[] | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _userAuthorizationRequired?;
    get userAuthorizationRequired(): boolean | cdktf.IResolvable;
    set userAuthorizationRequired(value: boolean | cdktf.IResolvable);
    resetUserAuthorizationRequired(): void;
    get userAuthorizationRequiredInput(): boolean | cdktf.IResolvable | undefined;
    private _timeouts;
    get timeouts(): ChatbotSlackChannelConfigurationTimeoutsOutputReference;
    putTimeouts(value: ChatbotSlackChannelConfigurationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ChatbotSlackChannelConfigurationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
