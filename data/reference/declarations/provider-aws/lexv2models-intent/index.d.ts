/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Lexv2ModelsIntentClosingSetting, Lexv2ModelsIntentClosingSettingList, Lexv2ModelsIntentConfirmationSetting, Lexv2ModelsIntentConfirmationSettingList, Lexv2ModelsIntentDialogCodeHook, Lexv2ModelsIntentDialogCodeHookList, Lexv2ModelsIntentFulfillmentCodeHook, Lexv2ModelsIntentFulfillmentCodeHookList, Lexv2ModelsIntentInitialResponseSetting, Lexv2ModelsIntentInitialResponseSettingList, Lexv2ModelsIntentInputContext, Lexv2ModelsIntentInputContextList, Lexv2ModelsIntentKendraConfiguration, Lexv2ModelsIntentKendraConfigurationList, Lexv2ModelsIntentOutputContext, Lexv2ModelsIntentOutputContextList, Lexv2ModelsIntentSampleUtterance, Lexv2ModelsIntentSampleUtteranceList, Lexv2ModelsIntentSlotPriority, Lexv2ModelsIntentSlotPriorityList, Lexv2ModelsIntentTimeouts, Lexv2ModelsIntentTimeoutsOutputReference } from './index-structs';
export * from './index-structs';
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Lexv2ModelsIntentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#bot_id Lexv2ModelsIntent#bot_id}
    */
    readonly botId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#bot_version Lexv2ModelsIntent#bot_version}
    */
    readonly botVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#description Lexv2ModelsIntent#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#locale_id Lexv2ModelsIntent#locale_id}
    */
    readonly localeId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#parent_intent_signature Lexv2ModelsIntent#parent_intent_signature}
    */
    readonly parentIntentSignature?: string;
    /**
    * closing_setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#closing_setting Lexv2ModelsIntent#closing_setting}
    */
    readonly closingSetting?: Lexv2ModelsIntentClosingSetting[] | cdktf.IResolvable;
    /**
    * confirmation_setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#confirmation_setting Lexv2ModelsIntent#confirmation_setting}
    */
    readonly confirmationSetting?: Lexv2ModelsIntentConfirmationSetting[] | cdktf.IResolvable;
    /**
    * dialog_code_hook block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#dialog_code_hook Lexv2ModelsIntent#dialog_code_hook}
    */
    readonly dialogCodeHook?: Lexv2ModelsIntentDialogCodeHook[] | cdktf.IResolvable;
    /**
    * fulfillment_code_hook block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#fulfillment_code_hook Lexv2ModelsIntent#fulfillment_code_hook}
    */
    readonly fulfillmentCodeHook?: Lexv2ModelsIntentFulfillmentCodeHook[] | cdktf.IResolvable;
    /**
    * initial_response_setting block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#initial_response_setting Lexv2ModelsIntent#initial_response_setting}
    */
    readonly initialResponseSetting?: Lexv2ModelsIntentInitialResponseSetting[] | cdktf.IResolvable;
    /**
    * input_context block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#input_context Lexv2ModelsIntent#input_context}
    */
    readonly inputContext?: Lexv2ModelsIntentInputContext[] | cdktf.IResolvable;
    /**
    * kendra_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#kendra_configuration Lexv2ModelsIntent#kendra_configuration}
    */
    readonly kendraConfiguration?: Lexv2ModelsIntentKendraConfiguration[] | cdktf.IResolvable;
    /**
    * output_context block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#output_context Lexv2ModelsIntent#output_context}
    */
    readonly outputContext?: Lexv2ModelsIntentOutputContext[] | cdktf.IResolvable;
    /**
    * sample_utterance block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#sample_utterance Lexv2ModelsIntent#sample_utterance}
    */
    readonly sampleUtterance?: Lexv2ModelsIntentSampleUtterance[] | cdktf.IResolvable;
    /**
    * slot_priority block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot_priority Lexv2ModelsIntent#slot_priority}
    */
    readonly slotPriority?: Lexv2ModelsIntentSlotPriority[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#timeouts Lexv2ModelsIntent#timeouts}
    */
    readonly timeouts?: Lexv2ModelsIntentTimeouts;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent aws_lexv2models_intent}
*/
export declare class Lexv2ModelsIntent extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lexv2models_intent";
    /**
    * Generates CDKTF code for importing a Lexv2ModelsIntent resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Lexv2ModelsIntent to import
    * @param importFromId The id of the existing Lexv2ModelsIntent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Lexv2ModelsIntent to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent aws_lexv2models_intent} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Lexv2ModelsIntentConfig
    */
    constructor(scope: Construct, id: string, config: Lexv2ModelsIntentConfig);
    private _botId?;
    get botId(): string;
    set botId(value: string);
    get botIdInput(): string | undefined;
    private _botVersion?;
    get botVersion(): string;
    set botVersion(value: string);
    get botVersionInput(): string | undefined;
    get creationDateTime(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get id(): string;
    get intentId(): string;
    get lastUpdatedDateTime(): string;
    private _localeId?;
    get localeId(): string;
    set localeId(value: string);
    get localeIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _parentIntentSignature?;
    get parentIntentSignature(): string;
    set parentIntentSignature(value: string);
    resetParentIntentSignature(): void;
    get parentIntentSignatureInput(): string | undefined;
    private _closingSetting;
    get closingSetting(): Lexv2ModelsIntentClosingSettingList;
    putClosingSetting(value: Lexv2ModelsIntentClosingSetting[] | cdktf.IResolvable): void;
    resetClosingSetting(): void;
    get closingSettingInput(): cdktf.IResolvable | Lexv2ModelsIntentClosingSetting[] | undefined;
    private _confirmationSetting;
    get confirmationSetting(): Lexv2ModelsIntentConfirmationSettingList;
    putConfirmationSetting(value: Lexv2ModelsIntentConfirmationSetting[] | cdktf.IResolvable): void;
    resetConfirmationSetting(): void;
    get confirmationSettingInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSetting[] | undefined;
    private _dialogCodeHook;
    get dialogCodeHook(): Lexv2ModelsIntentDialogCodeHookList;
    putDialogCodeHook(value: Lexv2ModelsIntentDialogCodeHook[] | cdktf.IResolvable): void;
    resetDialogCodeHook(): void;
    get dialogCodeHookInput(): cdktf.IResolvable | Lexv2ModelsIntentDialogCodeHook[] | undefined;
    private _fulfillmentCodeHook;
    get fulfillmentCodeHook(): Lexv2ModelsIntentFulfillmentCodeHookList;
    putFulfillmentCodeHook(value: Lexv2ModelsIntentFulfillmentCodeHook[] | cdktf.IResolvable): void;
    resetFulfillmentCodeHook(): void;
    get fulfillmentCodeHookInput(): cdktf.IResolvable | Lexv2ModelsIntentFulfillmentCodeHook[] | undefined;
    private _initialResponseSetting;
    get initialResponseSetting(): Lexv2ModelsIntentInitialResponseSettingList;
    putInitialResponseSetting(value: Lexv2ModelsIntentInitialResponseSetting[] | cdktf.IResolvable): void;
    resetInitialResponseSetting(): void;
    get initialResponseSettingInput(): cdktf.IResolvable | Lexv2ModelsIntentInitialResponseSetting[] | undefined;
    private _inputContext;
    get inputContext(): Lexv2ModelsIntentInputContextList;
    putInputContext(value: Lexv2ModelsIntentInputContext[] | cdktf.IResolvable): void;
    resetInputContext(): void;
    get inputContextInput(): cdktf.IResolvable | Lexv2ModelsIntentInputContext[] | undefined;
    private _kendraConfiguration;
    get kendraConfiguration(): Lexv2ModelsIntentKendraConfigurationList;
    putKendraConfiguration(value: Lexv2ModelsIntentKendraConfiguration[] | cdktf.IResolvable): void;
    resetKendraConfiguration(): void;
    get kendraConfigurationInput(): cdktf.IResolvable | Lexv2ModelsIntentKendraConfiguration[] | undefined;
    private _outputContext;
    get outputContext(): Lexv2ModelsIntentOutputContextList;
    putOutputContext(value: Lexv2ModelsIntentOutputContext[] | cdktf.IResolvable): void;
    resetOutputContext(): void;
    get outputContextInput(): cdktf.IResolvable | Lexv2ModelsIntentOutputContext[] | undefined;
    private _sampleUtterance;
    get sampleUtterance(): Lexv2ModelsIntentSampleUtteranceList;
    putSampleUtterance(value: Lexv2ModelsIntentSampleUtterance[] | cdktf.IResolvable): void;
    resetSampleUtterance(): void;
    get sampleUtteranceInput(): cdktf.IResolvable | Lexv2ModelsIntentSampleUtterance[] | undefined;
    private _slotPriority;
    get slotPriority(): Lexv2ModelsIntentSlotPriorityList;
    putSlotPriority(value: Lexv2ModelsIntentSlotPriority[] | cdktf.IResolvable): void;
    resetSlotPriority(): void;
    get slotPriorityInput(): cdktf.IResolvable | Lexv2ModelsIntentSlotPriority[] | undefined;
    private _timeouts;
    get timeouts(): Lexv2ModelsIntentTimeoutsOutputReference;
    putTimeouts(value: Lexv2ModelsIntentTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Lexv2ModelsIntentTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
