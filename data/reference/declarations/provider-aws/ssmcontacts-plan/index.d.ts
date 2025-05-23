/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SsmcontactsPlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}
    */
    readonly contactId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_plan#id SsmcontactsPlan#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * stage block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_plan#stage SsmcontactsPlan#stage}
    */
    readonly stage: SsmcontactsPlanStage[] | cdktf.IResolvable;
}
export interface SsmcontactsPlanStageTargetChannelTargetInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_plan#contact_channel_id SsmcontactsPlan#contact_channel_id}
    */
    readonly contactChannelId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_plan#retry_interval_in_minutes SsmcontactsPlan#retry_interval_in_minutes}
    */
    readonly retryIntervalInMinutes?: number;
}
export declare function ssmcontactsPlanStageTargetChannelTargetInfoToTerraform(struct?: SsmcontactsPlanStageTargetChannelTargetInfoOutputReference | SsmcontactsPlanStageTargetChannelTargetInfo): any;
export declare function ssmcontactsPlanStageTargetChannelTargetInfoToHclTerraform(struct?: SsmcontactsPlanStageTargetChannelTargetInfoOutputReference | SsmcontactsPlanStageTargetChannelTargetInfo): any;
export declare class SsmcontactsPlanStageTargetChannelTargetInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmcontactsPlanStageTargetChannelTargetInfo | undefined;
    set internalValue(value: SsmcontactsPlanStageTargetChannelTargetInfo | undefined);
    private _contactChannelId?;
    get contactChannelId(): string;
    set contactChannelId(value: string);
    get contactChannelIdInput(): string | undefined;
    private _retryIntervalInMinutes?;
    get retryIntervalInMinutes(): number;
    set retryIntervalInMinutes(value: number);
    resetRetryIntervalInMinutes(): void;
    get retryIntervalInMinutesInput(): number | undefined;
}
export interface SsmcontactsPlanStageTargetContactTargetInfo {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}
    */
    readonly contactId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_plan#is_essential SsmcontactsPlan#is_essential}
    */
    readonly isEssential: boolean | cdktf.IResolvable;
}
export declare function ssmcontactsPlanStageTargetContactTargetInfoToTerraform(struct?: SsmcontactsPlanStageTargetContactTargetInfoOutputReference | SsmcontactsPlanStageTargetContactTargetInfo): any;
export declare function ssmcontactsPlanStageTargetContactTargetInfoToHclTerraform(struct?: SsmcontactsPlanStageTargetContactTargetInfoOutputReference | SsmcontactsPlanStageTargetContactTargetInfo): any;
export declare class SsmcontactsPlanStageTargetContactTargetInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SsmcontactsPlanStageTargetContactTargetInfo | undefined;
    set internalValue(value: SsmcontactsPlanStageTargetContactTargetInfo | undefined);
    private _contactId?;
    get contactId(): string;
    set contactId(value: string);
    resetContactId(): void;
    get contactIdInput(): string | undefined;
    private _isEssential?;
    get isEssential(): boolean | cdktf.IResolvable;
    set isEssential(value: boolean | cdktf.IResolvable);
    get isEssentialInput(): boolean | cdktf.IResolvable | undefined;
}
export interface SsmcontactsPlanStageTarget {
    /**
    * channel_target_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_plan#channel_target_info SsmcontactsPlan#channel_target_info}
    */
    readonly channelTargetInfo?: SsmcontactsPlanStageTargetChannelTargetInfo;
    /**
    * contact_target_info block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_plan#contact_target_info SsmcontactsPlan#contact_target_info}
    */
    readonly contactTargetInfo?: SsmcontactsPlanStageTargetContactTargetInfo;
}
export declare function ssmcontactsPlanStageTargetToTerraform(struct?: SsmcontactsPlanStageTarget | cdktf.IResolvable): any;
export declare function ssmcontactsPlanStageTargetToHclTerraform(struct?: SsmcontactsPlanStageTarget | cdktf.IResolvable): any;
export declare class SsmcontactsPlanStageTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmcontactsPlanStageTarget | cdktf.IResolvable | undefined;
    set internalValue(value: SsmcontactsPlanStageTarget | cdktf.IResolvable | undefined);
    private _channelTargetInfo;
    get channelTargetInfo(): SsmcontactsPlanStageTargetChannelTargetInfoOutputReference;
    putChannelTargetInfo(value: SsmcontactsPlanStageTargetChannelTargetInfo): void;
    resetChannelTargetInfo(): void;
    get channelTargetInfoInput(): SsmcontactsPlanStageTargetChannelTargetInfo | undefined;
    private _contactTargetInfo;
    get contactTargetInfo(): SsmcontactsPlanStageTargetContactTargetInfoOutputReference;
    putContactTargetInfo(value: SsmcontactsPlanStageTargetContactTargetInfo): void;
    resetContactTargetInfo(): void;
    get contactTargetInfoInput(): SsmcontactsPlanStageTargetContactTargetInfo | undefined;
}
export declare class SsmcontactsPlanStageTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmcontactsPlanStageTarget[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmcontactsPlanStageTargetOutputReference;
}
export interface SsmcontactsPlanStage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_plan#duration_in_minutes SsmcontactsPlan#duration_in_minutes}
    */
    readonly durationInMinutes: number;
    /**
    * target block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_plan#target SsmcontactsPlan#target}
    */
    readonly target?: SsmcontactsPlanStageTarget[] | cdktf.IResolvable;
}
export declare function ssmcontactsPlanStageToTerraform(struct?: SsmcontactsPlanStage | cdktf.IResolvable): any;
export declare function ssmcontactsPlanStageToHclTerraform(struct?: SsmcontactsPlanStage | cdktf.IResolvable): any;
export declare class SsmcontactsPlanStageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SsmcontactsPlanStage | cdktf.IResolvable | undefined;
    set internalValue(value: SsmcontactsPlanStage | cdktf.IResolvable | undefined);
    private _durationInMinutes?;
    get durationInMinutes(): number;
    set durationInMinutes(value: number);
    get durationInMinutesInput(): number | undefined;
    private _target;
    get target(): SsmcontactsPlanStageTargetList;
    putTarget(value: SsmcontactsPlanStageTarget[] | cdktf.IResolvable): void;
    resetTarget(): void;
    get targetInput(): cdktf.IResolvable | SsmcontactsPlanStageTarget[] | undefined;
}
export declare class SsmcontactsPlanStageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SsmcontactsPlanStage[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SsmcontactsPlanStageOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_plan aws_ssmcontacts_plan}
*/
export declare class SsmcontactsPlan extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ssmcontacts_plan";
    /**
    * Generates CDKTF code for importing a SsmcontactsPlan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SsmcontactsPlan to import
    * @param importFromId The id of the existing SsmcontactsPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SsmcontactsPlan to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ssmcontacts_plan aws_ssmcontacts_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsmcontactsPlanConfig
    */
    constructor(scope: Construct, id: string, config: SsmcontactsPlanConfig);
    private _contactId?;
    get contactId(): string;
    set contactId(value: string);
    get contactIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _stage;
    get stage(): SsmcontactsPlanStageList;
    putStage(value: SsmcontactsPlanStage[] | cdktf.IResolvable): void;
    get stageInput(): cdktf.IResolvable | SsmcontactsPlanStage[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
