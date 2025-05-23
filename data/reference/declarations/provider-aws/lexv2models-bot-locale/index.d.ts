/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Lexv2ModelsBotLocaleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_locale#bot_id Lexv2ModelsBotLocale#bot_id}
    */
    readonly botId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_locale#bot_version Lexv2ModelsBotLocale#bot_version}
    */
    readonly botVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_locale#description Lexv2ModelsBotLocale#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_locale#locale_id Lexv2ModelsBotLocale#locale_id}
    */
    readonly localeId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_locale#n_lu_intent_confidence_threshold Lexv2ModelsBotLocale#n_lu_intent_confidence_threshold}
    */
    readonly nLuIntentConfidenceThreshold: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_locale#name Lexv2ModelsBotLocale#name}
    */
    readonly name?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_locale#timeouts Lexv2ModelsBotLocale#timeouts}
    */
    readonly timeouts?: Lexv2ModelsBotLocaleTimeouts;
    /**
    * voice_settings block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_locale#voice_settings Lexv2ModelsBotLocale#voice_settings}
    */
    readonly voiceSettings?: Lexv2ModelsBotLocaleVoiceSettings[] | cdktf.IResolvable;
}
export interface Lexv2ModelsBotLocaleTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_locale#create Lexv2ModelsBotLocale#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_locale#delete Lexv2ModelsBotLocale#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_locale#update Lexv2ModelsBotLocale#update}
    */
    readonly update?: string;
}
export declare function lexv2ModelsBotLocaleTimeoutsToTerraform(struct?: Lexv2ModelsBotLocaleTimeouts | cdktf.IResolvable): any;
export declare function lexv2ModelsBotLocaleTimeoutsToHclTerraform(struct?: Lexv2ModelsBotLocaleTimeouts | cdktf.IResolvable): any;
export declare class Lexv2ModelsBotLocaleTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Lexv2ModelsBotLocaleTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsBotLocaleTimeouts | cdktf.IResolvable | undefined);
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
export interface Lexv2ModelsBotLocaleVoiceSettings {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_locale#engine Lexv2ModelsBotLocale#engine}
    */
    readonly engine?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_locale#voice_id Lexv2ModelsBotLocale#voice_id}
    */
    readonly voiceId: string;
}
export declare function lexv2ModelsBotLocaleVoiceSettingsToTerraform(struct?: Lexv2ModelsBotLocaleVoiceSettings | cdktf.IResolvable): any;
export declare function lexv2ModelsBotLocaleVoiceSettingsToHclTerraform(struct?: Lexv2ModelsBotLocaleVoiceSettings | cdktf.IResolvable): any;
export declare class Lexv2ModelsBotLocaleVoiceSettingsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsBotLocaleVoiceSettings | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsBotLocaleVoiceSettings | cdktf.IResolvable | undefined);
    private _engine?;
    get engine(): string;
    set engine(value: string);
    resetEngine(): void;
    get engineInput(): string | undefined;
    private _voiceId?;
    get voiceId(): string;
    set voiceId(value: string);
    get voiceIdInput(): string | undefined;
}
export declare class Lexv2ModelsBotLocaleVoiceSettingsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsBotLocaleVoiceSettings[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsBotLocaleVoiceSettingsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_locale aws_lexv2models_bot_locale}
*/
export declare class Lexv2ModelsBotLocale extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lexv2models_bot_locale";
    /**
    * Generates CDKTF code for importing a Lexv2ModelsBotLocale resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Lexv2ModelsBotLocale to import
    * @param importFromId The id of the existing Lexv2ModelsBotLocale that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_locale#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Lexv2ModelsBotLocale to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_bot_locale aws_lexv2models_bot_locale} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Lexv2ModelsBotLocaleConfig
    */
    constructor(scope: Construct, id: string, config: Lexv2ModelsBotLocaleConfig);
    private _botId?;
    get botId(): string;
    set botId(value: string);
    get botIdInput(): string | undefined;
    private _botVersion?;
    get botVersion(): string;
    set botVersion(value: string);
    get botVersionInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    private _localeId?;
    get localeId(): string;
    set localeId(value: string);
    get localeIdInput(): string | undefined;
    private _nLuIntentConfidenceThreshold?;
    get nLuIntentConfidenceThreshold(): number;
    set nLuIntentConfidenceThreshold(value: number);
    get nLuIntentConfidenceThresholdInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _timeouts;
    get timeouts(): Lexv2ModelsBotLocaleTimeoutsOutputReference;
    putTimeouts(value: Lexv2ModelsBotLocaleTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Lexv2ModelsBotLocaleTimeouts | undefined;
    private _voiceSettings;
    get voiceSettings(): Lexv2ModelsBotLocaleVoiceSettingsList;
    putVoiceSettings(value: Lexv2ModelsBotLocaleVoiceSettings[] | cdktf.IResolvable): void;
    resetVoiceSettings(): void;
    get voiceSettingsInput(): cdktf.IResolvable | Lexv2ModelsBotLocaleVoiceSettings[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
