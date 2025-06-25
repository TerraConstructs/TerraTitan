/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ChatbotTeamsChannelConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#channel_id ChatbotTeamsChannelConfiguration#channel_id}
    */
    readonly channelId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#channel_name ChatbotTeamsChannelConfiguration#channel_name}
    */
    readonly channelName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#configuration_name ChatbotTeamsChannelConfiguration#configuration_name}
    */
    readonly configurationName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#guardrail_policy_arns ChatbotTeamsChannelConfiguration#guardrail_policy_arns}
    */
    readonly guardrailPolicyArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#iam_role_arn ChatbotTeamsChannelConfiguration#iam_role_arn}
    */
    readonly iamRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#logging_level ChatbotTeamsChannelConfiguration#logging_level}
    */
    readonly loggingLevel?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#sns_topic_arns ChatbotTeamsChannelConfiguration#sns_topic_arns}
    */
    readonly snsTopicArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#tags ChatbotTeamsChannelConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#team_id ChatbotTeamsChannelConfiguration#team_id}
    */
    readonly teamId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#team_name ChatbotTeamsChannelConfiguration#team_name}
    */
    readonly teamName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#tenant_id ChatbotTeamsChannelConfiguration#tenant_id}
    */
    readonly tenantId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#user_authorization_required ChatbotTeamsChannelConfiguration#user_authorization_required}
    */
    readonly userAuthorizationRequired?: boolean | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#timeouts ChatbotTeamsChannelConfiguration#timeouts}
    */
    readonly timeouts?: ChatbotTeamsChannelConfigurationTimeouts;
}
export interface ChatbotTeamsChannelConfigurationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#create ChatbotTeamsChannelConfiguration#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#delete ChatbotTeamsChannelConfiguration#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#update ChatbotTeamsChannelConfiguration#update}
    */
    readonly update?: string;
}
export declare function chatbotTeamsChannelConfigurationTimeoutsToTerraform(struct?: ChatbotTeamsChannelConfigurationTimeouts | cdktf.IResolvable): any;
export declare function chatbotTeamsChannelConfigurationTimeoutsToHclTerraform(struct?: ChatbotTeamsChannelConfigurationTimeouts | cdktf.IResolvable): any;
export declare class ChatbotTeamsChannelConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ChatbotTeamsChannelConfigurationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ChatbotTeamsChannelConfigurationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration aws_chatbot_teams_channel_configuration}
*/
export declare class ChatbotTeamsChannelConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_chatbot_teams_channel_configuration";
    /**
    * Generates CDKTF code for importing a ChatbotTeamsChannelConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ChatbotTeamsChannelConfiguration to import
    * @param importFromId The id of the existing ChatbotTeamsChannelConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ChatbotTeamsChannelConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/chatbot_teams_channel_configuration aws_chatbot_teams_channel_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ChatbotTeamsChannelConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: ChatbotTeamsChannelConfigurationConfig);
    private _channelId?;
    get channelId(): string;
    set channelId(value: string);
    get channelIdInput(): string | undefined;
    private _channelName?;
    get channelName(): string;
    set channelName(value: string);
    resetChannelName(): void;
    get channelNameInput(): string | undefined;
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
    private _teamId?;
    get teamId(): string;
    set teamId(value: string);
    get teamIdInput(): string | undefined;
    private _teamName?;
    get teamName(): string;
    set teamName(value: string);
    resetTeamName(): void;
    get teamNameInput(): string | undefined;
    private _tenantId?;
    get tenantId(): string;
    set tenantId(value: string);
    get tenantIdInput(): string | undefined;
    private _userAuthorizationRequired?;
    get userAuthorizationRequired(): boolean | cdktf.IResolvable;
    set userAuthorizationRequired(value: boolean | cdktf.IResolvable);
    resetUserAuthorizationRequired(): void;
    get userAuthorizationRequiredInput(): boolean | cdktf.IResolvable | undefined;
    private _timeouts;
    get timeouts(): ChatbotTeamsChannelConfigurationTimeoutsOutputReference;
    putTimeouts(value: ChatbotTeamsChannelConfigurationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ChatbotTeamsChannelConfigurationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
