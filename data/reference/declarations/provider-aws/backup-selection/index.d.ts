/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BackupSelectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#iam_role_arn BackupSelection#iam_role_arn}
    */
    readonly iamRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#id BackupSelection#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#name BackupSelection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#not_resources BackupSelection#not_resources}
    */
    readonly notResources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#plan_id BackupSelection#plan_id}
    */
    readonly planId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#resources BackupSelection#resources}
    */
    readonly resources?: string[];
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#condition BackupSelection#condition}
    */
    readonly condition?: BackupSelectionCondition[] | cdktf.IResolvable;
    /**
    * selection_tag block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#selection_tag BackupSelection#selection_tag}
    */
    readonly selectionTag?: BackupSelectionSelectionTag[] | cdktf.IResolvable;
}
export interface BackupSelectionConditionStringEquals {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#key BackupSelection#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#value BackupSelection#value}
    */
    readonly value: string;
}
export declare function backupSelectionConditionStringEqualsToTerraform(struct?: BackupSelectionConditionStringEquals | cdktf.IResolvable): any;
export declare function backupSelectionConditionStringEqualsToHclTerraform(struct?: BackupSelectionConditionStringEquals | cdktf.IResolvable): any;
export declare class BackupSelectionConditionStringEqualsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BackupSelectionConditionStringEquals | cdktf.IResolvable | undefined;
    set internalValue(value: BackupSelectionConditionStringEquals | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class BackupSelectionConditionStringEqualsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BackupSelectionConditionStringEquals[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BackupSelectionConditionStringEqualsOutputReference;
}
export interface BackupSelectionConditionStringLike {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#key BackupSelection#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#value BackupSelection#value}
    */
    readonly value: string;
}
export declare function backupSelectionConditionStringLikeToTerraform(struct?: BackupSelectionConditionStringLike | cdktf.IResolvable): any;
export declare function backupSelectionConditionStringLikeToHclTerraform(struct?: BackupSelectionConditionStringLike | cdktf.IResolvable): any;
export declare class BackupSelectionConditionStringLikeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BackupSelectionConditionStringLike | cdktf.IResolvable | undefined;
    set internalValue(value: BackupSelectionConditionStringLike | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class BackupSelectionConditionStringLikeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BackupSelectionConditionStringLike[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BackupSelectionConditionStringLikeOutputReference;
}
export interface BackupSelectionConditionStringNotEquals {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#key BackupSelection#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#value BackupSelection#value}
    */
    readonly value: string;
}
export declare function backupSelectionConditionStringNotEqualsToTerraform(struct?: BackupSelectionConditionStringNotEquals | cdktf.IResolvable): any;
export declare function backupSelectionConditionStringNotEqualsToHclTerraform(struct?: BackupSelectionConditionStringNotEquals | cdktf.IResolvable): any;
export declare class BackupSelectionConditionStringNotEqualsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BackupSelectionConditionStringNotEquals | cdktf.IResolvable | undefined;
    set internalValue(value: BackupSelectionConditionStringNotEquals | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class BackupSelectionConditionStringNotEqualsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BackupSelectionConditionStringNotEquals[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BackupSelectionConditionStringNotEqualsOutputReference;
}
export interface BackupSelectionConditionStringNotLike {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#key BackupSelection#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#value BackupSelection#value}
    */
    readonly value: string;
}
export declare function backupSelectionConditionStringNotLikeToTerraform(struct?: BackupSelectionConditionStringNotLike | cdktf.IResolvable): any;
export declare function backupSelectionConditionStringNotLikeToHclTerraform(struct?: BackupSelectionConditionStringNotLike | cdktf.IResolvable): any;
export declare class BackupSelectionConditionStringNotLikeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BackupSelectionConditionStringNotLike | cdktf.IResolvable | undefined;
    set internalValue(value: BackupSelectionConditionStringNotLike | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class BackupSelectionConditionStringNotLikeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BackupSelectionConditionStringNotLike[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BackupSelectionConditionStringNotLikeOutputReference;
}
export interface BackupSelectionCondition {
    /**
    * string_equals block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#string_equals BackupSelection#string_equals}
    */
    readonly stringEquals?: BackupSelectionConditionStringEquals[] | cdktf.IResolvable;
    /**
    * string_like block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#string_like BackupSelection#string_like}
    */
    readonly stringLike?: BackupSelectionConditionStringLike[] | cdktf.IResolvable;
    /**
    * string_not_equals block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#string_not_equals BackupSelection#string_not_equals}
    */
    readonly stringNotEquals?: BackupSelectionConditionStringNotEquals[] | cdktf.IResolvable;
    /**
    * string_not_like block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#string_not_like BackupSelection#string_not_like}
    */
    readonly stringNotLike?: BackupSelectionConditionStringNotLike[] | cdktf.IResolvable;
}
export declare function backupSelectionConditionToTerraform(struct?: BackupSelectionCondition | cdktf.IResolvable): any;
export declare function backupSelectionConditionToHclTerraform(struct?: BackupSelectionCondition | cdktf.IResolvable): any;
export declare class BackupSelectionConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BackupSelectionCondition | cdktf.IResolvable | undefined;
    set internalValue(value: BackupSelectionCondition | cdktf.IResolvable | undefined);
    private _stringEquals;
    get stringEquals(): BackupSelectionConditionStringEqualsList;
    putStringEquals(value: BackupSelectionConditionStringEquals[] | cdktf.IResolvable): void;
    resetStringEquals(): void;
    get stringEqualsInput(): cdktf.IResolvable | BackupSelectionConditionStringEquals[] | undefined;
    private _stringLike;
    get stringLike(): BackupSelectionConditionStringLikeList;
    putStringLike(value: BackupSelectionConditionStringLike[] | cdktf.IResolvable): void;
    resetStringLike(): void;
    get stringLikeInput(): cdktf.IResolvable | BackupSelectionConditionStringLike[] | undefined;
    private _stringNotEquals;
    get stringNotEquals(): BackupSelectionConditionStringNotEqualsList;
    putStringNotEquals(value: BackupSelectionConditionStringNotEquals[] | cdktf.IResolvable): void;
    resetStringNotEquals(): void;
    get stringNotEqualsInput(): cdktf.IResolvable | BackupSelectionConditionStringNotEquals[] | undefined;
    private _stringNotLike;
    get stringNotLike(): BackupSelectionConditionStringNotLikeList;
    putStringNotLike(value: BackupSelectionConditionStringNotLike[] | cdktf.IResolvable): void;
    resetStringNotLike(): void;
    get stringNotLikeInput(): cdktf.IResolvable | BackupSelectionConditionStringNotLike[] | undefined;
}
export declare class BackupSelectionConditionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BackupSelectionCondition[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BackupSelectionConditionOutputReference;
}
export interface BackupSelectionSelectionTag {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#key BackupSelection#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#type BackupSelection#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#value BackupSelection#value}
    */
    readonly value: string;
}
export declare function backupSelectionSelectionTagToTerraform(struct?: BackupSelectionSelectionTag | cdktf.IResolvable): any;
export declare function backupSelectionSelectionTagToHclTerraform(struct?: BackupSelectionSelectionTag | cdktf.IResolvable): any;
export declare class BackupSelectionSelectionTagOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BackupSelectionSelectionTag | cdktf.IResolvable | undefined;
    set internalValue(value: BackupSelectionSelectionTag | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class BackupSelectionSelectionTagList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BackupSelectionSelectionTag[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BackupSelectionSelectionTagOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection aws_backup_selection}
*/
export declare class BackupSelection extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_backup_selection";
    /**
    * Generates CDKTF code for importing a BackupSelection resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BackupSelection to import
    * @param importFromId The id of the existing BackupSelection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BackupSelection to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/backup_selection aws_backup_selection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BackupSelectionConfig
    */
    constructor(scope: Construct, id: string, config: BackupSelectionConfig);
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    get iamRoleArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _notResources?;
    get notResources(): string[];
    set notResources(value: string[]);
    resetNotResources(): void;
    get notResourcesInput(): string[] | undefined;
    private _planId?;
    get planId(): string;
    set planId(value: string);
    get planIdInput(): string | undefined;
    private _resources?;
    get resources(): string[];
    set resources(value: string[]);
    resetResources(): void;
    get resourcesInput(): string[] | undefined;
    private _condition;
    get condition(): BackupSelectionConditionList;
    putCondition(value: BackupSelectionCondition[] | cdktf.IResolvable): void;
    resetCondition(): void;
    get conditionInput(): cdktf.IResolvable | BackupSelectionCondition[] | undefined;
    private _selectionTag;
    get selectionTag(): BackupSelectionSelectionTagList;
    putSelectionTag(value: BackupSelectionSelectionTag[] | cdktf.IResolvable): void;
    resetSelectionTag(): void;
    get selectionTagInput(): cdktf.IResolvable | BackupSelectionSelectionTag[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
