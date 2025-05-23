/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSsmcontactsPlanConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmcontacts_plan#contact_id DataAwsSsmcontactsPlan#contact_id}
    */
    readonly contactId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmcontacts_plan#id DataAwsSsmcontactsPlan#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
export interface DataAwsSsmcontactsPlanStageTargetChannelTargetInfo {
}
export declare function dataAwsSsmcontactsPlanStageTargetChannelTargetInfoToTerraform(struct?: DataAwsSsmcontactsPlanStageTargetChannelTargetInfo): any;
export declare function dataAwsSsmcontactsPlanStageTargetChannelTargetInfoToHclTerraform(struct?: DataAwsSsmcontactsPlanStageTargetChannelTargetInfo): any;
export declare class DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmcontactsPlanStageTargetChannelTargetInfo | undefined;
    set internalValue(value: DataAwsSsmcontactsPlanStageTargetChannelTargetInfo | undefined);
    get contactChannelId(): string;
    get retryIntervalInMinutes(): number;
}
export declare class DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSsmcontactsPlanStageTargetChannelTargetInfoOutputReference;
}
export interface DataAwsSsmcontactsPlanStageTargetContactTargetInfo {
}
export declare function dataAwsSsmcontactsPlanStageTargetContactTargetInfoToTerraform(struct?: DataAwsSsmcontactsPlanStageTargetContactTargetInfo): any;
export declare function dataAwsSsmcontactsPlanStageTargetContactTargetInfoToHclTerraform(struct?: DataAwsSsmcontactsPlanStageTargetContactTargetInfo): any;
export declare class DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmcontactsPlanStageTargetContactTargetInfo | undefined;
    set internalValue(value: DataAwsSsmcontactsPlanStageTargetContactTargetInfo | undefined);
    get contactId(): string;
    get isEssential(): cdktf.IResolvable;
}
export declare class DataAwsSsmcontactsPlanStageTargetContactTargetInfoList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSsmcontactsPlanStageTargetContactTargetInfoOutputReference;
}
export interface DataAwsSsmcontactsPlanStageTarget {
}
export declare function dataAwsSsmcontactsPlanStageTargetToTerraform(struct?: DataAwsSsmcontactsPlanStageTarget): any;
export declare function dataAwsSsmcontactsPlanStageTargetToHclTerraform(struct?: DataAwsSsmcontactsPlanStageTarget): any;
export declare class DataAwsSsmcontactsPlanStageTargetOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmcontactsPlanStageTarget | undefined;
    set internalValue(value: DataAwsSsmcontactsPlanStageTarget | undefined);
    private _channelTargetInfo;
    get channelTargetInfo(): DataAwsSsmcontactsPlanStageTargetChannelTargetInfoList;
    private _contactTargetInfo;
    get contactTargetInfo(): DataAwsSsmcontactsPlanStageTargetContactTargetInfoList;
}
export declare class DataAwsSsmcontactsPlanStageTargetList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSsmcontactsPlanStageTargetOutputReference;
}
export interface DataAwsSsmcontactsPlanStage {
}
export declare function dataAwsSsmcontactsPlanStageToTerraform(struct?: DataAwsSsmcontactsPlanStage): any;
export declare function dataAwsSsmcontactsPlanStageToHclTerraform(struct?: DataAwsSsmcontactsPlanStage): any;
export declare class DataAwsSsmcontactsPlanStageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSsmcontactsPlanStage | undefined;
    set internalValue(value: DataAwsSsmcontactsPlanStage | undefined);
    get durationInMinutes(): number;
    private _target;
    get target(): DataAwsSsmcontactsPlanStageTargetList;
}
export declare class DataAwsSsmcontactsPlanStageList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSsmcontactsPlanStageOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmcontacts_plan aws_ssmcontacts_plan}
*/
export declare class DataAwsSsmcontactsPlan extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ssmcontacts_plan";
    /**
    * Generates CDKTF code for importing a DataAwsSsmcontactsPlan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSsmcontactsPlan to import
    * @param importFromId The id of the existing DataAwsSsmcontactsPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmcontacts_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSsmcontactsPlan to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ssmcontacts_plan aws_ssmcontacts_plan} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsmcontactsPlanConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSsmcontactsPlanConfig);
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
    get stage(): DataAwsSsmcontactsPlanStageList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
