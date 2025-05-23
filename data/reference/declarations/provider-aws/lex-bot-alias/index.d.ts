/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LexBotAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#bot_name LexBotAlias#bot_name}
    */
    readonly botName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#bot_version LexBotAlias#bot_version}
    */
    readonly botVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#description LexBotAlias#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#id LexBotAlias#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#name LexBotAlias#name}
    */
    readonly name: string;
    /**
    * conversation_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#conversation_logs LexBotAlias#conversation_logs}
    */
    readonly conversationLogs?: LexBotAliasConversationLogs;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#timeouts LexBotAlias#timeouts}
    */
    readonly timeouts?: LexBotAliasTimeouts;
}
export interface LexBotAliasConversationLogsLogSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#destination LexBotAlias#destination}
    */
    readonly destination: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#kms_key_arn LexBotAlias#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#log_type LexBotAlias#log_type}
    */
    readonly logType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#resource_arn LexBotAlias#resource_arn}
    */
    readonly resourceArn: string;
}
export declare function lexBotAliasConversationLogsLogSettingsToTerraform(struct?: LexBotAliasConversationLogsLogSettings | cdktf.IResolvable): any;
export declare function lexBotAliasConversationLogsLogSettingsToHclTerraform(struct?: LexBotAliasConversationLogsLogSettings | cdktf.IResolvable): any;
export declare class LexBotAliasConversationLogsLogSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LexBotAliasConversationLogsLogSettings | cdktf.IResolvable | undefined;
    set internalValue(value: LexBotAliasConversationLogsLogSettings | cdktf.IResolvable | undefined);
    private _destination?;
    get destination(): string;
    set destination(value: string);
    get destinationInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _logType?;
    get logType(): string;
    set logType(value: string);
    get logTypeInput(): string | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    get resourcePrefix(): string;
}
export declare class LexBotAliasConversationLogsLogSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LexBotAliasConversationLogsLogSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LexBotAliasConversationLogsLogSettingsOutputReference;
}
export interface LexBotAliasConversationLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#iam_role_arn LexBotAlias#iam_role_arn}
    */
    readonly iamRoleArn: string;
    /**
    * log_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#log_settings LexBotAlias#log_settings}
    */
    readonly logSettings?: LexBotAliasConversationLogsLogSettings[] | cdktf.IResolvable;
}
export declare function lexBotAliasConversationLogsToTerraform(struct?: LexBotAliasConversationLogsOutputReference | LexBotAliasConversationLogs): any;
export declare function lexBotAliasConversationLogsToHclTerraform(struct?: LexBotAliasConversationLogsOutputReference | LexBotAliasConversationLogs): any;
export declare class LexBotAliasConversationLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexBotAliasConversationLogs | undefined;
    set internalValue(value: LexBotAliasConversationLogs | undefined);
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    get iamRoleArnInput(): string | undefined;
    private _logSettings;
    get logSettings(): LexBotAliasConversationLogsLogSettingsList;
    putLogSettings(value: LexBotAliasConversationLogsLogSettings[] | cdktf.IResolvable): void;
    resetLogSettings(): void;
    get logSettingsInput(): cdktf.IResolvable | LexBotAliasConversationLogsLogSettings[] | undefined;
}
export interface LexBotAliasTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#create LexBotAlias#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#delete LexBotAlias#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#update LexBotAlias#update}
    */
    readonly update?: string;
}
export declare function lexBotAliasTimeoutsToTerraform(struct?: LexBotAliasTimeouts | cdktf.IResolvable): any;
export declare function lexBotAliasTimeoutsToHclTerraform(struct?: LexBotAliasTimeouts | cdktf.IResolvable): any;
export declare class LexBotAliasTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LexBotAliasTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LexBotAliasTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias aws_lex_bot_alias}
*/
export declare class LexBotAlias extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lex_bot_alias";
    /**
    * Generates CDKTF code for importing a LexBotAlias resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LexBotAlias to import
    * @param importFromId The id of the existing LexBotAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LexBotAlias to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lex_bot_alias aws_lex_bot_alias} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LexBotAliasConfig
    */
    constructor(scope: Construct, id: string, config: LexBotAliasConfig);
    get arn(): string;
    private _botName?;
    get botName(): string;
    set botName(value: string);
    get botNameInput(): string | undefined;
    private _botVersion?;
    get botVersion(): string;
    set botVersion(value: string);
    get botVersionInput(): string | undefined;
    get checksum(): string;
    get createdDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedDate(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _conversationLogs;
    get conversationLogs(): LexBotAliasConversationLogsOutputReference;
    putConversationLogs(value: LexBotAliasConversationLogs): void;
    resetConversationLogs(): void;
    get conversationLogsInput(): LexBotAliasConversationLogs | undefined;
    private _timeouts;
    get timeouts(): LexBotAliasTimeoutsOutputReference;
    putTimeouts(value: LexBotAliasTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LexBotAliasTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
