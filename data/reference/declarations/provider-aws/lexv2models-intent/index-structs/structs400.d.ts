/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import * as cdktf from 'cdktf';
import { Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage, Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageList, Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariation, Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationList, Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep, Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepList, Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch, Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchList } from './structs0';
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup {
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
    */
    readonly message?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * variation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
    */
    readonly variation?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariation[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup | cdktf.IResolvable | undefined);
    private _message;
    get message(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessageList;
    putMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage[] | cdktf.IResolvable): void;
    resetMessage(): void;
    get messageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupMessage[] | undefined;
    private _variation;
    get variation(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariationList;
    putVariation(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariation[] | cdktf.IResolvable): void;
    resetVariation(): void;
    get variationInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupVariation[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
    */
    readonly allowInterrupt?: boolean | cdktf.IResolvable;
    /**
    * message_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
    */
    readonly messageGroup?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse | cdktf.IResolvable | undefined);
    private _allowInterrupt?;
    get allowInterrupt(): boolean | cdktf.IResolvable;
    set allowInterrupt(value: boolean | cdktf.IResolvable);
    resetAllowInterrupt(): void;
    get allowInterruptInput(): boolean | cdktf.IResolvable | undefined;
    private _messageGroup;
    get messageGroup(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroupList;
    putMessageGroup(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup[] | cdktf.IResolvable): void;
    resetMessageGroup(): void;
    get messageGroupInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseMessageGroup[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch {
    /**
    * next_step block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
    */
    readonly nextStep?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep[] | cdktf.IResolvable;
    /**
    * response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#response Lexv2ModelsIntent#response}
    */
    readonly response?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch | cdktf.IResolvable | undefined);
    private _nextStep;
    get nextStep(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStepList;
    putNextStep(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep[] | cdktf.IResolvable): void;
    resetNextStep(): void;
    get nextStepInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchNextStep[] | undefined;
    private _response;
    get response(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponseList;
    putResponse(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse[] | cdktf.IResolvable): void;
    resetResponse(): void;
    get responseInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchResponse[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditional {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#active Lexv2ModelsIntent#active}
    */
    readonly active: boolean | cdktf.IResolvable;
    /**
    * conditional_branch block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#conditional_branch Lexv2ModelsIntent#conditional_branch}
    */
    readonly conditionalBranch?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch[] | cdktf.IResolvable;
    /**
    * default_branch block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#default_branch Lexv2ModelsIntent#default_branch}
    */
    readonly defaultBranch?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditional | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditional | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditional | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditional | cdktf.IResolvable | undefined);
    private _active?;
    get active(): boolean | cdktf.IResolvable;
    set active(value: boolean | cdktf.IResolvable);
    get activeInput(): boolean | cdktf.IResolvable | undefined;
    private _conditionalBranch;
    get conditionalBranch(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranchList;
    putConditionalBranch(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch[] | cdktf.IResolvable): void;
    resetConditionalBranch(): void;
    get conditionalBranchInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalConditionalBranch[] | undefined;
    private _defaultBranch;
    get defaultBranch(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranchList;
    putDefaultBranch(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch[] | cdktf.IResolvable): void;
    resetDefaultBranch(): void;
    get defaultBranchInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalDefaultBranch[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditional[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureConditionalOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
    */
    readonly slotToElicit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
    */
    readonly suppressNextMessage?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
    */
    readonly type: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction | cdktf.IResolvable | undefined);
    private _slotToElicit?;
    get slotToElicit(): string;
    set slotToElicit(value: string);
    resetSlotToElicit(): void;
    get slotToElicitInput(): string | undefined;
    private _suppressNextMessage?;
    get suppressNextMessage(): boolean | cdktf.IResolvable;
    set suppressNextMessage(value: boolean | cdktf.IResolvable);
    resetSuppressNextMessage(): void;
    get suppressNextMessageInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogActionOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
    */
    readonly interpretedValue?: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue | cdktf.IResolvable | undefined);
    private _interpretedValue?;
    get interpretedValue(): string;
    set interpretedValue(value: string);
    resetInterpretedValue(): void;
    get interpretedValueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValueOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
    */
    readonly mapBlockKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
    */
    readonly shape?: string;
    /**
    * value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot | cdktf.IResolvable | undefined);
    private _mapBlockKey?;
    get mapBlockKey(): string;
    set mapBlockKey(value: string);
    get mapBlockKeyInput(): string | undefined;
    private _shape?;
    get shape(): string;
    set shape(value: string);
    resetShape(): void;
    get shapeInput(): string | undefined;
    private _value;
    get value(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValueList;
    putValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue[] | cdktf.IResolvable): void;
    resetValue(): void;
    get valueInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotValue[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
    */
    readonly name?: string;
    /**
    * slot block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
    */
    readonly slot?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _slot;
    get slot(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlotList;
    putSlot(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot[] | cdktf.IResolvable): void;
    resetSlot(): void;
    get slotInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentSlot[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStep {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
    */
    readonly sessionAttributes?: {
        [key: string]: string;
    };
    /**
    * dialog_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
    */
    readonly dialogAction?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * intent block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
    */
    readonly intent?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStep | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStep | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStep | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStep | cdktf.IResolvable | undefined);
    private _sessionAttributes?;
    get sessionAttributes(): {
        [key: string]: string;
    };
    set sessionAttributes(value: {
        [key: string]: string;
    });
    resetSessionAttributes(): void;
    get sessionAttributesInput(): {
        [key: string]: string;
    } | undefined;
    private _dialogAction;
    get dialogAction(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogActionList;
    putDialogAction(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction[] | cdktf.IResolvable): void;
    resetDialogAction(): void;
    get dialogActionInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepDialogAction[] | undefined;
    private _intent;
    get intent(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntentList;
    putIntent(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent[] | cdktf.IResolvable): void;
    resetIntent(): void;
    get intentInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepIntent[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStep[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureNextStepOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessagePlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationPlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup {
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
    */
    readonly message?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * variation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
    */
    readonly variation?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup | cdktf.IResolvable | undefined);
    private _message;
    get message(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessageList;
    putMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage[] | cdktf.IResolvable): void;
    resetMessage(): void;
    get messageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupMessage[] | undefined;
    private _variation;
    get variation(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariationList;
    putVariation(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation[] | cdktf.IResolvable): void;
    resetVariation(): void;
    get variationInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupVariation[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
    */
    readonly allowInterrupt?: boolean | cdktf.IResolvable;
    /**
    * message_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
    */
    readonly messageGroup?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponse | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponse | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponse | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponse | cdktf.IResolvable | undefined);
    private _allowInterrupt?;
    get allowInterrupt(): boolean | cdktf.IResolvable;
    set allowInterrupt(value: boolean | cdktf.IResolvable);
    resetAllowInterrupt(): void;
    get allowInterruptInput(): boolean | cdktf.IResolvable | undefined;
    private _messageGroup;
    get messageGroup(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroupList;
    putMessageGroup(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup[] | cdktf.IResolvable): void;
    resetMessageGroup(): void;
    get messageGroupInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseMessageGroup[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponse[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationFailureResponseOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#expression_string Lexv2ModelsIntent#expression_string}
    */
    readonly expressionString: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchConditionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchConditionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition | cdktf.IResolvable | undefined);
    private _expressionString?;
    get expressionString(): string;
    set expressionString(value: string);
    get expressionStringInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchConditionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchConditionOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
    */
    readonly slotToElicit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
    */
    readonly suppressNextMessage?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
    */
    readonly type: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable | undefined);
    private _slotToElicit?;
    get slotToElicit(): string;
    set slotToElicit(value: string);
    resetSlotToElicit(): void;
    get slotToElicitInput(): string | undefined;
    private _suppressNextMessage?;
    get suppressNextMessage(): boolean | cdktf.IResolvable;
    set suppressNextMessage(value: boolean | cdktf.IResolvable);
    resetSuppressNextMessage(): void;
    get suppressNextMessageInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogActionOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
    */
    readonly interpretedValue?: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined);
    private _interpretedValue?;
    get interpretedValue(): string;
    set interpretedValue(value: string);
    resetInterpretedValue(): void;
    get interpretedValueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValueOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
    */
    readonly mapBlockKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
    */
    readonly shape?: string;
    /**
    * value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable | undefined);
    private _mapBlockKey?;
    get mapBlockKey(): string;
    set mapBlockKey(value: string);
    get mapBlockKeyInput(): string | undefined;
    private _shape?;
    get shape(): string;
    set shape(value: string);
    resetShape(): void;
    get shapeInput(): string | undefined;
    private _value;
    get value(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValueList;
    putValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable): void;
    resetValue(): void;
    get valueInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotValue[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
    */
    readonly name?: string;
    /**
    * slot block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
    */
    readonly slot?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _slot;
    get slot(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlotList;
    putSlot(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable): void;
    resetSlot(): void;
    get slotInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentSlot[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
    */
    readonly sessionAttributes?: {
        [key: string]: string;
    };
    /**
    * dialog_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
    */
    readonly dialogAction?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * intent block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
    */
    readonly intent?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep | cdktf.IResolvable | undefined);
    private _sessionAttributes?;
    get sessionAttributes(): {
        [key: string]: string;
    };
    set sessionAttributes(value: {
        [key: string]: string;
    });
    resetSessionAttributes(): void;
    get sessionAttributesInput(): {
        [key: string]: string;
    } | undefined;
    private _dialogAction;
    get dialogAction(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogActionList;
    putDialogAction(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable): void;
    resetDialogAction(): void;
    get dialogActionInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepDialogAction[] | undefined;
    private _intent;
    get intent(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntentList;
    putIntent(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable): void;
    resetIntent(): void;
    get intentInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepIntent[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup {
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
    */
    readonly message?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * variation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
    */
    readonly variation?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup | cdktf.IResolvable | undefined);
    private _message;
    get message(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageList;
    putMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage[] | cdktf.IResolvable): void;
    resetMessage(): void;
    get messageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessage[] | undefined;
    private _variation;
    get variation(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariationList;
    putVariation(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation[] | cdktf.IResolvable): void;
    resetVariation(): void;
    get variationInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupVariation[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
    */
    readonly allowInterrupt?: boolean | cdktf.IResolvable;
    /**
    * message_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
    */
    readonly messageGroup?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse | cdktf.IResolvable | undefined);
    private _allowInterrupt?;
    get allowInterrupt(): boolean | cdktf.IResolvable;
    set allowInterrupt(value: boolean | cdktf.IResolvable);
    resetAllowInterrupt(): void;
    get allowInterruptInput(): boolean | cdktf.IResolvable | undefined;
    private _messageGroup;
    get messageGroup(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupList;
    putMessageGroup(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup[] | cdktf.IResolvable): void;
    resetMessageGroup(): void;
    get messageGroupInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroup[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
    */
    readonly name: string;
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#condition Lexv2ModelsIntent#condition}
    */
    readonly condition?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition[] | cdktf.IResolvable;
    /**
    * next_step block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
    */
    readonly nextStep?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep[] | cdktf.IResolvable;
    /**
    * response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#response Lexv2ModelsIntent#response}
    */
    readonly response?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _condition;
    get condition(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchConditionList;
    putCondition(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition[] | cdktf.IResolvable): void;
    resetCondition(): void;
    get conditionInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchCondition[] | undefined;
    private _nextStep;
    get nextStep(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStepList;
    putNextStep(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep[] | cdktf.IResolvable): void;
    resetNextStep(): void;
    get nextStepInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchNextStep[] | undefined;
    private _response;
    get response(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseList;
    putResponse(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse[] | cdktf.IResolvable): void;
    resetResponse(): void;
    get responseInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponse[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
    */
    readonly slotToElicit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
    */
    readonly suppressNextMessage?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
    */
    readonly type: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction | cdktf.IResolvable | undefined);
    private _slotToElicit?;
    get slotToElicit(): string;
    set slotToElicit(value: string);
    resetSlotToElicit(): void;
    get slotToElicitInput(): string | undefined;
    private _suppressNextMessage?;
    get suppressNextMessage(): boolean | cdktf.IResolvable;
    set suppressNextMessage(value: boolean | cdktf.IResolvable);
    resetSuppressNextMessage(): void;
    get suppressNextMessageInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogActionOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
    */
    readonly interpretedValue?: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined);
    private _interpretedValue?;
    get interpretedValue(): string;
    set interpretedValue(value: string);
    resetInterpretedValue(): void;
    get interpretedValueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValueOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
    */
    readonly mapBlockKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
    */
    readonly shape?: string;
    /**
    * value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot | cdktf.IResolvable | undefined);
    private _mapBlockKey?;
    get mapBlockKey(): string;
    set mapBlockKey(value: string);
    get mapBlockKeyInput(): string | undefined;
    private _shape?;
    get shape(): string;
    set shape(value: string);
    resetShape(): void;
    get shapeInput(): string | undefined;
    private _value;
    get value(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValueList;
    putValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue[] | cdktf.IResolvable): void;
    resetValue(): void;
    get valueInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotValue[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
    */
    readonly name?: string;
    /**
    * slot block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
    */
    readonly slot?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _slot;
    get slot(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlotList;
    putSlot(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot[] | cdktf.IResolvable): void;
    resetSlot(): void;
    get slotInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentSlot[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
    */
    readonly sessionAttributes?: {
        [key: string]: string;
    };
    /**
    * dialog_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
    */
    readonly dialogAction?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * intent block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
    */
    readonly intent?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep | cdktf.IResolvable | undefined);
    private _sessionAttributes?;
    get sessionAttributes(): {
        [key: string]: string;
    };
    set sessionAttributes(value: {
        [key: string]: string;
    });
    resetSessionAttributes(): void;
    get sessionAttributesInput(): {
        [key: string]: string;
    } | undefined;
    private _dialogAction;
    get dialogAction(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogActionList;
    putDialogAction(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction[] | cdktf.IResolvable): void;
    resetDialogAction(): void;
    get dialogActionInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction[] | undefined;
    private _intent;
    get intent(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntentList;
    putIntent(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent[] | cdktf.IResolvable): void;
    resetIntent(): void;
    get intentInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepIntent[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessagePlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationPlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup {
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
    */
    readonly message?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * variation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
    */
    readonly variation?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup | cdktf.IResolvable | undefined);
    private _message;
    get message(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessageList;
    putMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage[] | cdktf.IResolvable): void;
    resetMessage(): void;
    get messageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupMessage[] | undefined;
    private _variation;
    get variation(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariationList;
    putVariation(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation[] | cdktf.IResolvable): void;
    resetVariation(): void;
    get variationInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupVariation[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
    */
    readonly allowInterrupt?: boolean | cdktf.IResolvable;
    /**
    * message_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
    */
    readonly messageGroup?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse | cdktf.IResolvable | undefined);
    private _allowInterrupt?;
    get allowInterrupt(): boolean | cdktf.IResolvable;
    set allowInterrupt(value: boolean | cdktf.IResolvable);
    resetAllowInterrupt(): void;
    get allowInterruptInput(): boolean | cdktf.IResolvable | undefined;
    private _messageGroup;
    get messageGroup(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroupList;
    putMessageGroup(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup[] | cdktf.IResolvable): void;
    resetMessageGroup(): void;
    get messageGroupInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseMessageGroup[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch {
    /**
    * next_step block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#next_step Lexv2ModelsIntent#next_step}
    */
    readonly nextStep?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep[] | cdktf.IResolvable;
    /**
    * response block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#response Lexv2ModelsIntent#response}
    */
    readonly response?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch | cdktf.IResolvable | undefined);
    private _nextStep;
    get nextStep(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepList;
    putNextStep(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep[] | cdktf.IResolvable): void;
    resetNextStep(): void;
    get nextStepInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStep[] | undefined;
    private _response;
    get response(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponseList;
    putResponse(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse[] | cdktf.IResolvable): void;
    resetResponse(): void;
    get responseInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchResponse[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditional {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#active Lexv2ModelsIntent#active}
    */
    readonly active: boolean | cdktf.IResolvable;
    /**
    * conditional_branch block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#conditional_branch Lexv2ModelsIntent#conditional_branch}
    */
    readonly conditionalBranch?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch[] | cdktf.IResolvable;
    /**
    * default_branch block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#default_branch Lexv2ModelsIntent#default_branch}
    */
    readonly defaultBranch?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditional | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditional | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditional | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditional | cdktf.IResolvable | undefined);
    private _active?;
    get active(): boolean | cdktf.IResolvable;
    set active(value: boolean | cdktf.IResolvable);
    get activeInput(): boolean | cdktf.IResolvable | undefined;
    private _conditionalBranch;
    get conditionalBranch(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchList;
    putConditionalBranch(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch[] | cdktf.IResolvable): void;
    resetConditionalBranch(): void;
    get conditionalBranchInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranch[] | undefined;
    private _defaultBranch;
    get defaultBranch(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchList;
    putDefaultBranch(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch[] | cdktf.IResolvable): void;
    resetDefaultBranch(): void;
    get defaultBranchInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranch[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditional[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
    */
    readonly slotToElicit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
    */
    readonly suppressNextMessage?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
    */
    readonly type: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction | cdktf.IResolvable | undefined);
    private _slotToElicit?;
    get slotToElicit(): string;
    set slotToElicit(value: string);
    resetSlotToElicit(): void;
    get slotToElicitInput(): string | undefined;
    private _suppressNextMessage?;
    get suppressNextMessage(): boolean | cdktf.IResolvable;
    set suppressNextMessage(value: boolean | cdktf.IResolvable);
    resetSuppressNextMessage(): void;
    get suppressNextMessageInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogActionOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
    */
    readonly interpretedValue?: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue | cdktf.IResolvable | undefined);
    private _interpretedValue?;
    get interpretedValue(): string;
    set interpretedValue(value: string);
    resetInterpretedValue(): void;
    get interpretedValueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValueOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
    */
    readonly mapBlockKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
    */
    readonly shape?: string;
    /**
    * value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot | cdktf.IResolvable | undefined);
    private _mapBlockKey?;
    get mapBlockKey(): string;
    set mapBlockKey(value: string);
    get mapBlockKeyInput(): string | undefined;
    private _shape?;
    get shape(): string;
    set shape(value: string);
    resetShape(): void;
    get shapeInput(): string | undefined;
    private _value;
    get value(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValueList;
    putValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue[] | cdktf.IResolvable): void;
    resetValue(): void;
    get valueInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotValue[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
    */
    readonly name?: string;
    /**
    * slot block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
    */
    readonly slot?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _slot;
    get slot(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlotList;
    putSlot(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot[] | cdktf.IResolvable): void;
    resetSlot(): void;
    get slotInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentSlot[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStep {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
    */
    readonly sessionAttributes?: {
        [key: string]: string;
    };
    /**
    * dialog_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
    */
    readonly dialogAction?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * intent block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
    */
    readonly intent?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStep | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStep | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStep | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStep | cdktf.IResolvable | undefined);
    private _sessionAttributes?;
    get sessionAttributes(): {
        [key: string]: string;
    };
    set sessionAttributes(value: {
        [key: string]: string;
    });
    resetSessionAttributes(): void;
    get sessionAttributesInput(): {
        [key: string]: string;
    } | undefined;
    private _dialogAction;
    get dialogAction(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogActionList;
    putDialogAction(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction[] | cdktf.IResolvable): void;
    resetDialogAction(): void;
    get dialogActionInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepDialogAction[] | undefined;
    private _intent;
    get intent(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntentList;
    putIntent(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent[] | cdktf.IResolvable): void;
    resetIntent(): void;
    get intentInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepIntent[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStep[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessNextStepOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessagePlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationPlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup {
    /**
    * message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message Lexv2ModelsIntent#message}
    */
    readonly message?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * variation block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#variation Lexv2ModelsIntent#variation}
    */
    readonly variation?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup | cdktf.IResolvable | undefined);
    private _message;
    get message(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessageList;
    putMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage[] | cdktf.IResolvable): void;
    resetMessage(): void;
    get messageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupMessage[] | undefined;
    private _variation;
    get variation(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariationList;
    putVariation(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation[] | cdktf.IResolvable): void;
    resetVariation(): void;
    get variationInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupVariation[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponse {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#allow_interrupt Lexv2ModelsIntent#allow_interrupt}
    */
    readonly allowInterrupt?: boolean | cdktf.IResolvable;
    /**
    * message_group block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#message_group Lexv2ModelsIntent#message_group}
    */
    readonly messageGroup?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponse | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponse | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponse | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponse | cdktf.IResolvable | undefined);
    private _allowInterrupt?;
    get allowInterrupt(): boolean | cdktf.IResolvable;
    set allowInterrupt(value: boolean | cdktf.IResolvable);
    resetAllowInterrupt(): void;
    get allowInterruptInput(): boolean | cdktf.IResolvable | undefined;
    private _messageGroup;
    get messageGroup(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroupList;
    putMessageGroup(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup[] | cdktf.IResolvable): void;
    resetMessageGroup(): void;
    get messageGroupInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseMessageGroup[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponse[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessResponseOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#expression_string Lexv2ModelsIntent#expression_string}
    */
    readonly expressionString: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchConditionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchConditionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition | cdktf.IResolvable | undefined);
    private _expressionString?;
    get expressionString(): string;
    set expressionString(value: string);
    get expressionStringInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchConditionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchCondition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchConditionOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot_to_elicit Lexv2ModelsIntent#slot_to_elicit}
    */
    readonly slotToElicit?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#suppress_next_message Lexv2ModelsIntent#suppress_next_message}
    */
    readonly suppressNextMessage?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#type Lexv2ModelsIntent#type}
    */
    readonly type: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogActionToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogActionToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction | cdktf.IResolvable | undefined);
    private _slotToElicit?;
    get slotToElicit(): string;
    set slotToElicit(value: string);
    resetSlotToElicit(): void;
    get slotToElicitInput(): string | undefined;
    private _suppressNextMessage?;
    get suppressNextMessage(): boolean | cdktf.IResolvable;
    set suppressNextMessage(value: boolean | cdktf.IResolvable);
    resetSuppressNextMessage(): void;
    get suppressNextMessageInput(): boolean | cdktf.IResolvable | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogActionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogActionOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#interpreted_value Lexv2ModelsIntent#interpreted_value}
    */
    readonly interpretedValue?: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValueToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValueToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue | cdktf.IResolvable | undefined);
    private _interpretedValue?;
    get interpretedValue(): string;
    set interpretedValue(value: string);
    resetInterpretedValue(): void;
    get interpretedValueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValueOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#map_block_key Lexv2ModelsIntent#map_block_key}
    */
    readonly mapBlockKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#shape Lexv2ModelsIntent#shape}
    */
    readonly shape?: string;
    /**
    * value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot | cdktf.IResolvable | undefined);
    private _mapBlockKey?;
    get mapBlockKey(): string;
    set mapBlockKey(value: string);
    get mapBlockKeyInput(): string | undefined;
    private _shape?;
    get shape(): string;
    set shape(value: string);
    resetShape(): void;
    get shapeInput(): string | undefined;
    private _value;
    get value(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValueList;
    putValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue[] | cdktf.IResolvable): void;
    resetValue(): void;
    get valueInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotValue[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#name Lexv2ModelsIntent#name}
    */
    readonly name?: string;
    /**
    * slot block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#slot Lexv2ModelsIntent#slot}
    */
    readonly slot?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _slot;
    get slot(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlotList;
    putSlot(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot[] | cdktf.IResolvable): void;
    resetSlot(): void;
    get slotInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentSlot[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#session_attributes Lexv2ModelsIntent#session_attributes}
    */
    readonly sessionAttributes?: {
        [key: string]: string;
    };
    /**
    * dialog_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#dialog_action Lexv2ModelsIntent#dialog_action}
    */
    readonly dialogAction?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable;
    /**
    * intent block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#intent Lexv2ModelsIntent#intent}
    */
    readonly intent?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep | cdktf.IResolvable | undefined);
    private _sessionAttributes?;
    get sessionAttributes(): {
        [key: string]: string;
    };
    set sessionAttributes(value: {
        [key: string]: string;
    });
    resetSessionAttributes(): void;
    get sessionAttributesInput(): {
        [key: string]: string;
    } | undefined;
    private _dialogAction;
    get dialogAction(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogActionList;
    putDialogAction(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction[] | cdktf.IResolvable): void;
    resetDialogAction(): void;
    get dialogActionInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepDialogAction[] | undefined;
    private _intent;
    get intent(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntentList;
    putIntent(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent[] | cdktf.IResolvable): void;
    resetIntent(): void;
    get intentInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepIntent[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStep[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchNextStepOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage {
    /**
    * custom_payload block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#custom_payload Lexv2ModelsIntent#custom_payload}
    */
    readonly customPayload?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable;
    /**
    * image_response_card block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_response_card Lexv2ModelsIntent#image_response_card}
    */
    readonly imageResponseCard?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable;
    /**
    * plain_text_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#plain_text_message Lexv2ModelsIntent#plain_text_message}
    */
    readonly plainTextMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable;
    /**
    * ssml_message block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#ssml_message Lexv2ModelsIntent#ssml_message}
    */
    readonly ssmlMessage?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage | cdktf.IResolvable | undefined);
    private _customPayload;
    get customPayload(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayloadList;
    putCustomPayload(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | cdktf.IResolvable): void;
    resetCustomPayload(): void;
    get customPayloadInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageCustomPayload[] | undefined;
    private _imageResponseCard;
    get imageResponseCard(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardList;
    putImageResponseCard(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | cdktf.IResolvable): void;
    resetImageResponseCard(): void;
    get imageResponseCardInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageImageResponseCard[] | undefined;
    private _plainTextMessage;
    get plainTextMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessageList;
    putPlainTextMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | cdktf.IResolvable): void;
    resetPlainTextMessage(): void;
    get plainTextMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage[] | undefined;
    private _ssmlMessage;
    get ssmlMessage(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessageList;
    putSsmlMessage(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | cdktf.IResolvable): void;
    resetSsmlMessage(): void;
    get ssmlMessageInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageSsmlMessage[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupMessageOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayload[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationCustomPayloadOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#text Lexv2ModelsIntent#text}
    */
    readonly text: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton | cdktf.IResolvable | undefined);
    private _text?;
    get text(): string;
    set text(value: string);
    get textInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#image_url Lexv2ModelsIntent#image_url}
    */
    readonly imageUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#subtitle Lexv2ModelsIntent#subtitle}
    */
    readonly subtitle?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#title Lexv2ModelsIntent#title}
    */
    readonly title: string;
    /**
    * button block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#button Lexv2ModelsIntent#button}
    */
    readonly button?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard | cdktf.IResolvable | undefined);
    private _imageUrl?;
    get imageUrl(): string;
    set imageUrl(value: string);
    resetImageUrl(): void;
    get imageUrlInput(): string | undefined;
    private _subtitle?;
    get subtitle(): string;
    set subtitle(value: string);
    resetSubtitle(): void;
    get subtitleInput(): string | undefined;
    private _title?;
    get title(): string;
    set title(value: string);
    get titleInput(): string | undefined;
    private _button;
    get button(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButtonList;
    putButton(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | cdktf.IResolvable): void;
    resetButton(): void;
    get buttonInput(): cdktf.IResolvable | Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardButton[] | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCard[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationImageResponseCardOutputReference;
}
export interface Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lexv2models_intent#value Lexv2ModelsIntent#value}
    */
    readonly value: string;
}
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare function lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageToHclTerraform(struct?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable): any;
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined;
    set internalValue(value: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage | cdktf.IResolvable | undefined);
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Lexv2ModelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationTimeoutConditionalConditionalBranchResponseMessageGroupVariationPlainTextMessageOutputReference;
}
