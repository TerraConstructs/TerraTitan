/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Lexv2ModelsSlotMultipleValuesSetting, Lexv2ModelsSlotMultipleValuesSettingList, Lexv2ModelsSlotObfuscationSetting, Lexv2ModelsSlotObfuscationSettingList, Lexv2ModelsSlotSubSlotSetting, Lexv2ModelsSlotSubSlotSettingList, Lexv2ModelsSlotTimeouts, Lexv2ModelsSlotTimeoutsOutputReference, Lexv2ModelsSlotValueElicitationSetting, Lexv2ModelsSlotValueElicitationSettingList } from './index-structs';
export * from './index-structs';
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Lexv2ModelsSlotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#bot_id Lexv2ModelsSlot#bot_id}
    */
    readonly botId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#bot_version Lexv2ModelsSlot#bot_version}
    */
    readonly botVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#description Lexv2ModelsSlot#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#intent_id Lexv2ModelsSlot#intent_id}
    */
    readonly intentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#locale_id Lexv2ModelsSlot#locale_id}
    */
    readonly localeId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#name Lexv2ModelsSlot#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#slot_type_id Lexv2ModelsSlot#slot_type_id}
    */
    readonly slotTypeId?: string;
    /**
    * multiple_values_setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#multiple_values_setting Lexv2ModelsSlot#multiple_values_setting}
    */
    readonly multipleValuesSetting?: Lexv2ModelsSlotMultipleValuesSetting[] | cdktf.IResolvable;
    /**
    * obfuscation_setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#obfuscation_setting Lexv2ModelsSlot#obfuscation_setting}
    */
    readonly obfuscationSetting?: Lexv2ModelsSlotObfuscationSetting[] | cdktf.IResolvable;
    /**
    * sub_slot_setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#sub_slot_setting Lexv2ModelsSlot#sub_slot_setting}
    */
    readonly subSlotSetting?: Lexv2ModelsSlotSubSlotSetting[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#timeouts Lexv2ModelsSlot#timeouts}
    */
    readonly timeouts?: Lexv2ModelsSlotTimeouts;
    /**
    * value_elicitation_setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#value_elicitation_setting Lexv2ModelsSlot#value_elicitation_setting}
    */
    readonly valueElicitationSetting?: Lexv2ModelsSlotValueElicitationSetting[] | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot aws_lexv2models_slot}
*/
export declare class Lexv2ModelsSlot extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lexv2models_slot";
    /**
    * Generates CDKTF code for importing a Lexv2ModelsSlot resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Lexv2ModelsSlot to import
    * @param importFromId The id of the existing Lexv2ModelsSlot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Lexv2ModelsSlot to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lexv2models_slot aws_lexv2models_slot} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Lexv2ModelsSlotConfig
    */
    constructor(scope: Construct, id: string, config: Lexv2ModelsSlotConfig);
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
    private _intentId?;
    get intentId(): string;
    set intentId(value: string);
    get intentIdInput(): string | undefined;
    private _localeId?;
    get localeId(): string;
    set localeId(value: string);
    get localeIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get slotId(): string;
    private _slotTypeId?;
    get slotTypeId(): string;
    set slotTypeId(value: string);
    resetSlotTypeId(): void;
    get slotTypeIdInput(): string | undefined;
    private _multipleValuesSetting;
    get multipleValuesSetting(): Lexv2ModelsSlotMultipleValuesSettingList;
    putMultipleValuesSetting(value: Lexv2ModelsSlotMultipleValuesSetting[] | cdktf.IResolvable): void;
    resetMultipleValuesSetting(): void;
    get multipleValuesSettingInput(): cdktf.IResolvable | Lexv2ModelsSlotMultipleValuesSetting[] | undefined;
    private _obfuscationSetting;
    get obfuscationSetting(): Lexv2ModelsSlotObfuscationSettingList;
    putObfuscationSetting(value: Lexv2ModelsSlotObfuscationSetting[] | cdktf.IResolvable): void;
    resetObfuscationSetting(): void;
    get obfuscationSettingInput(): cdktf.IResolvable | Lexv2ModelsSlotObfuscationSetting[] | undefined;
    private _subSlotSetting;
    get subSlotSetting(): Lexv2ModelsSlotSubSlotSettingList;
    putSubSlotSetting(value: Lexv2ModelsSlotSubSlotSetting[] | cdktf.IResolvable): void;
    resetSubSlotSetting(): void;
    get subSlotSettingInput(): cdktf.IResolvable | Lexv2ModelsSlotSubSlotSetting[] | undefined;
    private _timeouts;
    get timeouts(): Lexv2ModelsSlotTimeoutsOutputReference;
    putTimeouts(value: Lexv2ModelsSlotTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Lexv2ModelsSlotTimeouts | undefined;
    private _valueElicitationSetting;
    get valueElicitationSetting(): Lexv2ModelsSlotValueElicitationSettingList;
    putValueElicitationSetting(value: Lexv2ModelsSlotValueElicitationSetting[] | cdktf.IResolvable): void;
    resetValueElicitationSetting(): void;
    get valueElicitationSettingInput(): cdktf.IResolvable | Lexv2ModelsSlotValueElicitationSetting[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
