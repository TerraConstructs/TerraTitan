/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Lexv2ModelsBotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#description Lexv2ModelsBot#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#idle_session_ttl_in_seconds Lexv2ModelsBot#idle_session_ttl_in_seconds}
    */
    readonly idleSessionTtlInSeconds: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#role_arn Lexv2ModelsBot#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#tags Lexv2ModelsBot#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#test_bot_alias_tags Lexv2ModelsBot#test_bot_alias_tags}
    */
    readonly testBotAliasTags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#type Lexv2ModelsBot#type}
    */
    readonly type?: string;
    /**
    * data_privacy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#data_privacy Lexv2ModelsBot#data_privacy}
    */
    readonly dataPrivacy?: Lexv2ModelsBotDataPrivacy[] | cdktf.IResolvable;
    /**
    * members block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#members Lexv2ModelsBot#members}
    */
    readonly members?: Lexv2ModelsBotMembers[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#timeouts Lexv2ModelsBot#timeouts}
    */
    readonly timeouts?: Lexv2ModelsBotTimeouts;
}
export interface Lexv2ModelsBotDataPrivacy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#child_directed Lexv2ModelsBot#child_directed}
    */
    readonly childDirected: boolean | cdktf.IResolvable;
}
export declare function lexv2ModelsBotDataPrivacyToTerraform(struct?: Lexv2ModelsBotDataPrivacy | cdktf.IResolvable): any;
export declare function lexv2ModelsBotDataPrivacyToHclTerraform(struct?: Lexv2ModelsBotDataPrivacy | cdktf.IResolvable): any;
export declare class Lexv2ModelsBotDataPrivacyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsBotDataPrivacy | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsBotDataPrivacy | cdktf.IResolvable | undefined);
    private _childDirected?;
    get childDirected(): boolean | cdktf.IResolvable;
    set childDirected(value: boolean | cdktf.IResolvable);
    get childDirectedInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class Lexv2ModelsBotDataPrivacyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsBotDataPrivacy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsBotDataPrivacyOutputReference;
}
export interface Lexv2ModelsBotMembers {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#alias_id Lexv2ModelsBot#alias_id}
    */
    readonly aliasId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#alias_name Lexv2ModelsBot#alias_name}
    */
    readonly aliasName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#id Lexv2ModelsBot#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#name Lexv2ModelsBot#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#version Lexv2ModelsBot#version}
    */
    readonly version: string;
}
export declare function lexv2ModelsBotMembersToTerraform(struct?: Lexv2ModelsBotMembers | cdktf.IResolvable): any;
export declare function lexv2ModelsBotMembersToHclTerraform(struct?: Lexv2ModelsBotMembers | cdktf.IResolvable): any;
export declare class Lexv2ModelsBotMembersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsBotMembers | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsBotMembers | cdktf.IResolvable | undefined);
    private _aliasId?;
    get aliasId(): string;
    set aliasId(value: string);
    get aliasIdInput(): string | undefined;
    private _aliasName?;
    get aliasName(): string;
    set aliasName(value: string);
    get aliasNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string | undefined;
}
export declare class Lexv2ModelsBotMembersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsBotMembers[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsBotMembersOutputReference;
}
export interface Lexv2ModelsBotTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#create Lexv2ModelsBot#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#delete Lexv2ModelsBot#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#update Lexv2ModelsBot#update}
    */
    readonly update?: string;
}
export declare function lexv2ModelsBotTimeoutsToTerraform(struct?: Lexv2ModelsBotTimeouts | cdktf.IResolvable): any;
export declare function lexv2ModelsBotTimeoutsToHclTerraform(struct?: Lexv2ModelsBotTimeouts | cdktf.IResolvable): any;
export declare class Lexv2ModelsBotTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Lexv2ModelsBotTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsBotTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot aws_lexv2models_bot}
*/
export declare class Lexv2ModelsBot extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lexv2models_bot";
    /**
    * Generates CDKTF code for importing a Lexv2ModelsBot resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Lexv2ModelsBot to import
    * @param importFromId The id of the existing Lexv2ModelsBot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Lexv2ModelsBot to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot aws_lexv2models_bot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Lexv2ModelsBotConfig
    */
    constructor(scope: Construct, id: string, config: Lexv2ModelsBotConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _idleSessionTtlInSeconds?;
    get idleSessionTtlInSeconds(): number;
    set idleSessionTtlInSeconds(value: number);
    get idleSessionTtlInSecondsInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
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
    private _testBotAliasTags?;
    get testBotAliasTags(): {
        [key: string]: string;
    };
    set testBotAliasTags(value: {
        [key: string]: string;
    });
    resetTestBotAliasTags(): void;
    get testBotAliasTagsInput(): {
        [key: string]: string;
    } | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _dataPrivacy;
    get dataPrivacy(): Lexv2ModelsBotDataPrivacyList;
    putDataPrivacy(value: Lexv2ModelsBotDataPrivacy[] | cdktf.IResolvable): void;
    resetDataPrivacy(): void;
    get dataPrivacyInput(): cdktf.IResolvable | Lexv2ModelsBotDataPrivacy[] | undefined;
    private _members;
    get members(): Lexv2ModelsBotMembersList;
    putMembers(value: Lexv2ModelsBotMembers[] | cdktf.IResolvable): void;
    resetMembers(): void;
    get membersInput(): cdktf.IResolvable | Lexv2ModelsBotMembers[] | undefined;
    private _timeouts;
    get timeouts(): Lexv2ModelsBotTimeoutsOutputReference;
    putTimeouts(value: Lexv2ModelsBotTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Lexv2ModelsBotTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
