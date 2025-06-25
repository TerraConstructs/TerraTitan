/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CeCostCategoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#default_value CeCostCategory#default_value}
    */
    readonly defaultValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#effective_start CeCostCategory#effective_start}
    */
    readonly effectiveStart?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#id CeCostCategory#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#name CeCostCategory#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#rule_version CeCostCategory#rule_version}
    */
    readonly ruleVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags_all CeCostCategory#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#rule CeCostCategory#rule}
    */
    readonly rule: CeCostCategoryRule[] | cdktf.IResolvable;
    /**
    * split_charge_rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#split_charge_rule CeCostCategory#split_charge_rule}
    */
    readonly splitChargeRule?: CeCostCategorySplitChargeRule[] | cdktf.IResolvable;
}
export interface CeCostCategoryRuleInheritedValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension_key CeCostCategory#dimension_key}
    */
    readonly dimensionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension_name CeCostCategory#dimension_name}
    */
    readonly dimensionName?: string;
}
export declare function ceCostCategoryRuleInheritedValueToTerraform(struct?: CeCostCategoryRuleInheritedValueOutputReference | CeCostCategoryRuleInheritedValue): any;
export declare function ceCostCategoryRuleInheritedValueToHclTerraform(struct?: CeCostCategoryRuleInheritedValueOutputReference | CeCostCategoryRuleInheritedValue): any;
export declare class CeCostCategoryRuleInheritedValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleInheritedValue | undefined;
    set internalValue(value: CeCostCategoryRuleInheritedValue | undefined);
    private _dimensionKey?;
    get dimensionKey(): string;
    set dimensionKey(value: string);
    resetDimensionKey(): void;
    get dimensionKeyInput(): string | undefined;
    private _dimensionName?;
    get dimensionName(): string;
    set dimensionName(value: string);
    resetDimensionName(): void;
    get dimensionNameInput(): string | undefined;
}
export interface CeCostCategoryRuleRuleAndAndCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleAndAndCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleAndAndCostCategoryOutputReference | CeCostCategoryRuleRuleAndAndCostCategory): any;
export declare function ceCostCategoryRuleRuleAndAndCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleAndAndCostCategoryOutputReference | CeCostCategoryRuleRuleAndAndCostCategory): any;
export declare class CeCostCategoryRuleRuleAndAndCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleAndAndCostCategory | undefined;
    set internalValue(value: CeCostCategoryRuleRuleAndAndCostCategory | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleAndAndDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleAndAndDimensionToTerraform(struct?: CeCostCategoryRuleRuleAndAndDimensionOutputReference | CeCostCategoryRuleRuleAndAndDimension): any;
export declare function ceCostCategoryRuleRuleAndAndDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleAndAndDimensionOutputReference | CeCostCategoryRuleRuleAndAndDimension): any;
export declare class CeCostCategoryRuleRuleAndAndDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleAndAndDimension | undefined;
    set internalValue(value: CeCostCategoryRuleRuleAndAndDimension | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleAndAndTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleAndAndTagsToTerraform(struct?: CeCostCategoryRuleRuleAndAndTagsOutputReference | CeCostCategoryRuleRuleAndAndTags): any;
export declare function ceCostCategoryRuleRuleAndAndTagsToHclTerraform(struct?: CeCostCategoryRuleRuleAndAndTagsOutputReference | CeCostCategoryRuleRuleAndAndTags): any;
export declare class CeCostCategoryRuleRuleAndAndTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleAndAndTags | undefined;
    set internalValue(value: CeCostCategoryRuleRuleAndAndTags | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleAndAnd {
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
    */
    readonly costCategory?: CeCostCategoryRuleRuleAndAndCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
    */
    readonly dimension?: CeCostCategoryRuleRuleAndAndDimension;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
    */
    readonly tags?: CeCostCategoryRuleRuleAndAndTags;
}
export declare function ceCostCategoryRuleRuleAndAndToTerraform(struct?: CeCostCategoryRuleRuleAndAnd | cdktf.IResolvable): any;
export declare function ceCostCategoryRuleRuleAndAndToHclTerraform(struct?: CeCostCategoryRuleRuleAndAnd | cdktf.IResolvable): any;
export declare class CeCostCategoryRuleRuleAndAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CeCostCategoryRuleRuleAndAnd | cdktf.IResolvable | undefined;
    set internalValue(value: CeCostCategoryRuleRuleAndAnd | cdktf.IResolvable | undefined);
    private _costCategory;
    get costCategory(): CeCostCategoryRuleRuleAndAndCostCategoryOutputReference;
    putCostCategory(value: CeCostCategoryRuleRuleAndAndCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeCostCategoryRuleRuleAndAndCostCategory | undefined;
    private _dimension;
    get dimension(): CeCostCategoryRuleRuleAndAndDimensionOutputReference;
    putDimension(value: CeCostCategoryRuleRuleAndAndDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeCostCategoryRuleRuleAndAndDimension | undefined;
    private _tags;
    get tags(): CeCostCategoryRuleRuleAndAndTagsOutputReference;
    putTags(value: CeCostCategoryRuleRuleAndAndTags): void;
    resetTags(): void;
    get tagsInput(): CeCostCategoryRuleRuleAndAndTags | undefined;
}
export declare class CeCostCategoryRuleRuleAndAndList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CeCostCategoryRuleRuleAndAnd[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CeCostCategoryRuleRuleAndAndOutputReference;
}
export interface CeCostCategoryRuleRuleAndCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleAndCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleAndCostCategoryOutputReference | CeCostCategoryRuleRuleAndCostCategory): any;
export declare function ceCostCategoryRuleRuleAndCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleAndCostCategoryOutputReference | CeCostCategoryRuleRuleAndCostCategory): any;
export declare class CeCostCategoryRuleRuleAndCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleAndCostCategory | undefined;
    set internalValue(value: CeCostCategoryRuleRuleAndCostCategory | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleAndDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleAndDimensionToTerraform(struct?: CeCostCategoryRuleRuleAndDimensionOutputReference | CeCostCategoryRuleRuleAndDimension): any;
export declare function ceCostCategoryRuleRuleAndDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleAndDimensionOutputReference | CeCostCategoryRuleRuleAndDimension): any;
export declare class CeCostCategoryRuleRuleAndDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleAndDimension | undefined;
    set internalValue(value: CeCostCategoryRuleRuleAndDimension | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleAndNotCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleAndNotCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleAndNotCostCategoryOutputReference | CeCostCategoryRuleRuleAndNotCostCategory): any;
export declare function ceCostCategoryRuleRuleAndNotCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleAndNotCostCategoryOutputReference | CeCostCategoryRuleRuleAndNotCostCategory): any;
export declare class CeCostCategoryRuleRuleAndNotCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleAndNotCostCategory | undefined;
    set internalValue(value: CeCostCategoryRuleRuleAndNotCostCategory | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleAndNotDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleAndNotDimensionToTerraform(struct?: CeCostCategoryRuleRuleAndNotDimensionOutputReference | CeCostCategoryRuleRuleAndNotDimension): any;
export declare function ceCostCategoryRuleRuleAndNotDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleAndNotDimensionOutputReference | CeCostCategoryRuleRuleAndNotDimension): any;
export declare class CeCostCategoryRuleRuleAndNotDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleAndNotDimension | undefined;
    set internalValue(value: CeCostCategoryRuleRuleAndNotDimension | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleAndNotTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleAndNotTagsToTerraform(struct?: CeCostCategoryRuleRuleAndNotTagsOutputReference | CeCostCategoryRuleRuleAndNotTags): any;
export declare function ceCostCategoryRuleRuleAndNotTagsToHclTerraform(struct?: CeCostCategoryRuleRuleAndNotTagsOutputReference | CeCostCategoryRuleRuleAndNotTags): any;
export declare class CeCostCategoryRuleRuleAndNotTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleAndNotTags | undefined;
    set internalValue(value: CeCostCategoryRuleRuleAndNotTags | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleAndNot {
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
    */
    readonly costCategory?: CeCostCategoryRuleRuleAndNotCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
    */
    readonly dimension?: CeCostCategoryRuleRuleAndNotDimension;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
    */
    readonly tags?: CeCostCategoryRuleRuleAndNotTags;
}
export declare function ceCostCategoryRuleRuleAndNotToTerraform(struct?: CeCostCategoryRuleRuleAndNotOutputReference | CeCostCategoryRuleRuleAndNot): any;
export declare function ceCostCategoryRuleRuleAndNotToHclTerraform(struct?: CeCostCategoryRuleRuleAndNotOutputReference | CeCostCategoryRuleRuleAndNot): any;
export declare class CeCostCategoryRuleRuleAndNotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleAndNot | undefined;
    set internalValue(value: CeCostCategoryRuleRuleAndNot | undefined);
    private _costCategory;
    get costCategory(): CeCostCategoryRuleRuleAndNotCostCategoryOutputReference;
    putCostCategory(value: CeCostCategoryRuleRuleAndNotCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeCostCategoryRuleRuleAndNotCostCategory | undefined;
    private _dimension;
    get dimension(): CeCostCategoryRuleRuleAndNotDimensionOutputReference;
    putDimension(value: CeCostCategoryRuleRuleAndNotDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeCostCategoryRuleRuleAndNotDimension | undefined;
    private _tags;
    get tags(): CeCostCategoryRuleRuleAndNotTagsOutputReference;
    putTags(value: CeCostCategoryRuleRuleAndNotTags): void;
    resetTags(): void;
    get tagsInput(): CeCostCategoryRuleRuleAndNotTags | undefined;
}
export interface CeCostCategoryRuleRuleAndOrCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleAndOrCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleAndOrCostCategoryOutputReference | CeCostCategoryRuleRuleAndOrCostCategory): any;
export declare function ceCostCategoryRuleRuleAndOrCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleAndOrCostCategoryOutputReference | CeCostCategoryRuleRuleAndOrCostCategory): any;
export declare class CeCostCategoryRuleRuleAndOrCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleAndOrCostCategory | undefined;
    set internalValue(value: CeCostCategoryRuleRuleAndOrCostCategory | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleAndOrDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleAndOrDimensionToTerraform(struct?: CeCostCategoryRuleRuleAndOrDimensionOutputReference | CeCostCategoryRuleRuleAndOrDimension): any;
export declare function ceCostCategoryRuleRuleAndOrDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleAndOrDimensionOutputReference | CeCostCategoryRuleRuleAndOrDimension): any;
export declare class CeCostCategoryRuleRuleAndOrDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleAndOrDimension | undefined;
    set internalValue(value: CeCostCategoryRuleRuleAndOrDimension | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleAndOrTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleAndOrTagsToTerraform(struct?: CeCostCategoryRuleRuleAndOrTagsOutputReference | CeCostCategoryRuleRuleAndOrTags): any;
export declare function ceCostCategoryRuleRuleAndOrTagsToHclTerraform(struct?: CeCostCategoryRuleRuleAndOrTagsOutputReference | CeCostCategoryRuleRuleAndOrTags): any;
export declare class CeCostCategoryRuleRuleAndOrTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleAndOrTags | undefined;
    set internalValue(value: CeCostCategoryRuleRuleAndOrTags | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleAndOr {
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
    */
    readonly costCategory?: CeCostCategoryRuleRuleAndOrCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
    */
    readonly dimension?: CeCostCategoryRuleRuleAndOrDimension;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
    */
    readonly tags?: CeCostCategoryRuleRuleAndOrTags;
}
export declare function ceCostCategoryRuleRuleAndOrToTerraform(struct?: CeCostCategoryRuleRuleAndOr | cdktf.IResolvable): any;
export declare function ceCostCategoryRuleRuleAndOrToHclTerraform(struct?: CeCostCategoryRuleRuleAndOr | cdktf.IResolvable): any;
export declare class CeCostCategoryRuleRuleAndOrOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CeCostCategoryRuleRuleAndOr | cdktf.IResolvable | undefined;
    set internalValue(value: CeCostCategoryRuleRuleAndOr | cdktf.IResolvable | undefined);
    private _costCategory;
    get costCategory(): CeCostCategoryRuleRuleAndOrCostCategoryOutputReference;
    putCostCategory(value: CeCostCategoryRuleRuleAndOrCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeCostCategoryRuleRuleAndOrCostCategory | undefined;
    private _dimension;
    get dimension(): CeCostCategoryRuleRuleAndOrDimensionOutputReference;
    putDimension(value: CeCostCategoryRuleRuleAndOrDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeCostCategoryRuleRuleAndOrDimension | undefined;
    private _tags;
    get tags(): CeCostCategoryRuleRuleAndOrTagsOutputReference;
    putTags(value: CeCostCategoryRuleRuleAndOrTags): void;
    resetTags(): void;
    get tagsInput(): CeCostCategoryRuleRuleAndOrTags | undefined;
}
export declare class CeCostCategoryRuleRuleAndOrList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CeCostCategoryRuleRuleAndOr[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CeCostCategoryRuleRuleAndOrOutputReference;
}
export interface CeCostCategoryRuleRuleAndTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleAndTagsToTerraform(struct?: CeCostCategoryRuleRuleAndTagsOutputReference | CeCostCategoryRuleRuleAndTags): any;
export declare function ceCostCategoryRuleRuleAndTagsToHclTerraform(struct?: CeCostCategoryRuleRuleAndTagsOutputReference | CeCostCategoryRuleRuleAndTags): any;
export declare class CeCostCategoryRuleRuleAndTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleAndTags | undefined;
    set internalValue(value: CeCostCategoryRuleRuleAndTags | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleAnd {
    /**
    * and block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#and CeCostCategory#and}
    */
    readonly and?: CeCostCategoryRuleRuleAndAnd[] | cdktf.IResolvable;
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
    */
    readonly costCategory?: CeCostCategoryRuleRuleAndCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
    */
    readonly dimension?: CeCostCategoryRuleRuleAndDimension;
    /**
    * not block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#not CeCostCategory#not}
    */
    readonly not?: CeCostCategoryRuleRuleAndNot;
    /**
    * or block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#or CeCostCategory#or}
    */
    readonly or?: CeCostCategoryRuleRuleAndOr[] | cdktf.IResolvable;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
    */
    readonly tags?: CeCostCategoryRuleRuleAndTags;
}
export declare function ceCostCategoryRuleRuleAndToTerraform(struct?: CeCostCategoryRuleRuleAnd | cdktf.IResolvable): any;
export declare function ceCostCategoryRuleRuleAndToHclTerraform(struct?: CeCostCategoryRuleRuleAnd | cdktf.IResolvable): any;
export declare class CeCostCategoryRuleRuleAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CeCostCategoryRuleRuleAnd | cdktf.IResolvable | undefined;
    set internalValue(value: CeCostCategoryRuleRuleAnd | cdktf.IResolvable | undefined);
    private _and;
    get and(): CeCostCategoryRuleRuleAndAndList;
    putAnd(value: CeCostCategoryRuleRuleAndAnd[] | cdktf.IResolvable): void;
    resetAnd(): void;
    get andInput(): cdktf.IResolvable | CeCostCategoryRuleRuleAndAnd[] | undefined;
    private _costCategory;
    get costCategory(): CeCostCategoryRuleRuleAndCostCategoryOutputReference;
    putCostCategory(value: CeCostCategoryRuleRuleAndCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeCostCategoryRuleRuleAndCostCategory | undefined;
    private _dimension;
    get dimension(): CeCostCategoryRuleRuleAndDimensionOutputReference;
    putDimension(value: CeCostCategoryRuleRuleAndDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeCostCategoryRuleRuleAndDimension | undefined;
    private _not;
    get not(): CeCostCategoryRuleRuleAndNotOutputReference;
    putNot(value: CeCostCategoryRuleRuleAndNot): void;
    resetNot(): void;
    get notInput(): CeCostCategoryRuleRuleAndNot | undefined;
    private _or;
    get or(): CeCostCategoryRuleRuleAndOrList;
    putOr(value: CeCostCategoryRuleRuleAndOr[] | cdktf.IResolvable): void;
    resetOr(): void;
    get orInput(): cdktf.IResolvable | CeCostCategoryRuleRuleAndOr[] | undefined;
    private _tags;
    get tags(): CeCostCategoryRuleRuleAndTagsOutputReference;
    putTags(value: CeCostCategoryRuleRuleAndTags): void;
    resetTags(): void;
    get tagsInput(): CeCostCategoryRuleRuleAndTags | undefined;
}
export declare class CeCostCategoryRuleRuleAndList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CeCostCategoryRuleRuleAnd[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CeCostCategoryRuleRuleAndOutputReference;
}
export interface CeCostCategoryRuleRuleCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleCostCategoryOutputReference | CeCostCategoryRuleRuleCostCategory): any;
export declare function ceCostCategoryRuleRuleCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleCostCategoryOutputReference | CeCostCategoryRuleRuleCostCategory): any;
export declare class CeCostCategoryRuleRuleCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleCostCategory | undefined;
    set internalValue(value: CeCostCategoryRuleRuleCostCategory | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleDimensionToTerraform(struct?: CeCostCategoryRuleRuleDimensionOutputReference | CeCostCategoryRuleRuleDimension): any;
export declare function ceCostCategoryRuleRuleDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleDimensionOutputReference | CeCostCategoryRuleRuleDimension): any;
export declare class CeCostCategoryRuleRuleDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleDimension | undefined;
    set internalValue(value: CeCostCategoryRuleRuleDimension | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleNotAndCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleNotAndCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleNotAndCostCategoryOutputReference | CeCostCategoryRuleRuleNotAndCostCategory): any;
export declare function ceCostCategoryRuleRuleNotAndCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleNotAndCostCategoryOutputReference | CeCostCategoryRuleRuleNotAndCostCategory): any;
export declare class CeCostCategoryRuleRuleNotAndCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleNotAndCostCategory | undefined;
    set internalValue(value: CeCostCategoryRuleRuleNotAndCostCategory | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleNotAndDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleNotAndDimensionToTerraform(struct?: CeCostCategoryRuleRuleNotAndDimensionOutputReference | CeCostCategoryRuleRuleNotAndDimension): any;
export declare function ceCostCategoryRuleRuleNotAndDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleNotAndDimensionOutputReference | CeCostCategoryRuleRuleNotAndDimension): any;
export declare class CeCostCategoryRuleRuleNotAndDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleNotAndDimension | undefined;
    set internalValue(value: CeCostCategoryRuleRuleNotAndDimension | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleNotAndTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleNotAndTagsToTerraform(struct?: CeCostCategoryRuleRuleNotAndTagsOutputReference | CeCostCategoryRuleRuleNotAndTags): any;
export declare function ceCostCategoryRuleRuleNotAndTagsToHclTerraform(struct?: CeCostCategoryRuleRuleNotAndTagsOutputReference | CeCostCategoryRuleRuleNotAndTags): any;
export declare class CeCostCategoryRuleRuleNotAndTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleNotAndTags | undefined;
    set internalValue(value: CeCostCategoryRuleRuleNotAndTags | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleNotAnd {
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
    */
    readonly costCategory?: CeCostCategoryRuleRuleNotAndCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
    */
    readonly dimension?: CeCostCategoryRuleRuleNotAndDimension;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
    */
    readonly tags?: CeCostCategoryRuleRuleNotAndTags;
}
export declare function ceCostCategoryRuleRuleNotAndToTerraform(struct?: CeCostCategoryRuleRuleNotAnd | cdktf.IResolvable): any;
export declare function ceCostCategoryRuleRuleNotAndToHclTerraform(struct?: CeCostCategoryRuleRuleNotAnd | cdktf.IResolvable): any;
export declare class CeCostCategoryRuleRuleNotAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CeCostCategoryRuleRuleNotAnd | cdktf.IResolvable | undefined;
    set internalValue(value: CeCostCategoryRuleRuleNotAnd | cdktf.IResolvable | undefined);
    private _costCategory;
    get costCategory(): CeCostCategoryRuleRuleNotAndCostCategoryOutputReference;
    putCostCategory(value: CeCostCategoryRuleRuleNotAndCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeCostCategoryRuleRuleNotAndCostCategory | undefined;
    private _dimension;
    get dimension(): CeCostCategoryRuleRuleNotAndDimensionOutputReference;
    putDimension(value: CeCostCategoryRuleRuleNotAndDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeCostCategoryRuleRuleNotAndDimension | undefined;
    private _tags;
    get tags(): CeCostCategoryRuleRuleNotAndTagsOutputReference;
    putTags(value: CeCostCategoryRuleRuleNotAndTags): void;
    resetTags(): void;
    get tagsInput(): CeCostCategoryRuleRuleNotAndTags | undefined;
}
export declare class CeCostCategoryRuleRuleNotAndList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CeCostCategoryRuleRuleNotAnd[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CeCostCategoryRuleRuleNotAndOutputReference;
}
export interface CeCostCategoryRuleRuleNotCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleNotCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleNotCostCategoryOutputReference | CeCostCategoryRuleRuleNotCostCategory): any;
export declare function ceCostCategoryRuleRuleNotCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleNotCostCategoryOutputReference | CeCostCategoryRuleRuleNotCostCategory): any;
export declare class CeCostCategoryRuleRuleNotCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleNotCostCategory | undefined;
    set internalValue(value: CeCostCategoryRuleRuleNotCostCategory | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleNotDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleNotDimensionToTerraform(struct?: CeCostCategoryRuleRuleNotDimensionOutputReference | CeCostCategoryRuleRuleNotDimension): any;
export declare function ceCostCategoryRuleRuleNotDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleNotDimensionOutputReference | CeCostCategoryRuleRuleNotDimension): any;
export declare class CeCostCategoryRuleRuleNotDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleNotDimension | undefined;
    set internalValue(value: CeCostCategoryRuleRuleNotDimension | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleNotNotCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleNotNotCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleNotNotCostCategoryOutputReference | CeCostCategoryRuleRuleNotNotCostCategory): any;
export declare function ceCostCategoryRuleRuleNotNotCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleNotNotCostCategoryOutputReference | CeCostCategoryRuleRuleNotNotCostCategory): any;
export declare class CeCostCategoryRuleRuleNotNotCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleNotNotCostCategory | undefined;
    set internalValue(value: CeCostCategoryRuleRuleNotNotCostCategory | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleNotNotDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleNotNotDimensionToTerraform(struct?: CeCostCategoryRuleRuleNotNotDimensionOutputReference | CeCostCategoryRuleRuleNotNotDimension): any;
export declare function ceCostCategoryRuleRuleNotNotDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleNotNotDimensionOutputReference | CeCostCategoryRuleRuleNotNotDimension): any;
export declare class CeCostCategoryRuleRuleNotNotDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleNotNotDimension | undefined;
    set internalValue(value: CeCostCategoryRuleRuleNotNotDimension | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleNotNotTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleNotNotTagsToTerraform(struct?: CeCostCategoryRuleRuleNotNotTagsOutputReference | CeCostCategoryRuleRuleNotNotTags): any;
export declare function ceCostCategoryRuleRuleNotNotTagsToHclTerraform(struct?: CeCostCategoryRuleRuleNotNotTagsOutputReference | CeCostCategoryRuleRuleNotNotTags): any;
export declare class CeCostCategoryRuleRuleNotNotTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleNotNotTags | undefined;
    set internalValue(value: CeCostCategoryRuleRuleNotNotTags | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleNotNot {
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
    */
    readonly costCategory?: CeCostCategoryRuleRuleNotNotCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
    */
    readonly dimension?: CeCostCategoryRuleRuleNotNotDimension;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
    */
    readonly tags?: CeCostCategoryRuleRuleNotNotTags;
}
export declare function ceCostCategoryRuleRuleNotNotToTerraform(struct?: CeCostCategoryRuleRuleNotNotOutputReference | CeCostCategoryRuleRuleNotNot): any;
export declare function ceCostCategoryRuleRuleNotNotToHclTerraform(struct?: CeCostCategoryRuleRuleNotNotOutputReference | CeCostCategoryRuleRuleNotNot): any;
export declare class CeCostCategoryRuleRuleNotNotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleNotNot | undefined;
    set internalValue(value: CeCostCategoryRuleRuleNotNot | undefined);
    private _costCategory;
    get costCategory(): CeCostCategoryRuleRuleNotNotCostCategoryOutputReference;
    putCostCategory(value: CeCostCategoryRuleRuleNotNotCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeCostCategoryRuleRuleNotNotCostCategory | undefined;
    private _dimension;
    get dimension(): CeCostCategoryRuleRuleNotNotDimensionOutputReference;
    putDimension(value: CeCostCategoryRuleRuleNotNotDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeCostCategoryRuleRuleNotNotDimension | undefined;
    private _tags;
    get tags(): CeCostCategoryRuleRuleNotNotTagsOutputReference;
    putTags(value: CeCostCategoryRuleRuleNotNotTags): void;
    resetTags(): void;
    get tagsInput(): CeCostCategoryRuleRuleNotNotTags | undefined;
}
export interface CeCostCategoryRuleRuleNotOrCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleNotOrCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleNotOrCostCategoryOutputReference | CeCostCategoryRuleRuleNotOrCostCategory): any;
export declare function ceCostCategoryRuleRuleNotOrCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleNotOrCostCategoryOutputReference | CeCostCategoryRuleRuleNotOrCostCategory): any;
export declare class CeCostCategoryRuleRuleNotOrCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleNotOrCostCategory | undefined;
    set internalValue(value: CeCostCategoryRuleRuleNotOrCostCategory | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleNotOrDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleNotOrDimensionToTerraform(struct?: CeCostCategoryRuleRuleNotOrDimensionOutputReference | CeCostCategoryRuleRuleNotOrDimension): any;
export declare function ceCostCategoryRuleRuleNotOrDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleNotOrDimensionOutputReference | CeCostCategoryRuleRuleNotOrDimension): any;
export declare class CeCostCategoryRuleRuleNotOrDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleNotOrDimension | undefined;
    set internalValue(value: CeCostCategoryRuleRuleNotOrDimension | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleNotOrTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleNotOrTagsToTerraform(struct?: CeCostCategoryRuleRuleNotOrTagsOutputReference | CeCostCategoryRuleRuleNotOrTags): any;
export declare function ceCostCategoryRuleRuleNotOrTagsToHclTerraform(struct?: CeCostCategoryRuleRuleNotOrTagsOutputReference | CeCostCategoryRuleRuleNotOrTags): any;
export declare class CeCostCategoryRuleRuleNotOrTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleNotOrTags | undefined;
    set internalValue(value: CeCostCategoryRuleRuleNotOrTags | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleNotOr {
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
    */
    readonly costCategory?: CeCostCategoryRuleRuleNotOrCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
    */
    readonly dimension?: CeCostCategoryRuleRuleNotOrDimension;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
    */
    readonly tags?: CeCostCategoryRuleRuleNotOrTags;
}
export declare function ceCostCategoryRuleRuleNotOrToTerraform(struct?: CeCostCategoryRuleRuleNotOr | cdktf.IResolvable): any;
export declare function ceCostCategoryRuleRuleNotOrToHclTerraform(struct?: CeCostCategoryRuleRuleNotOr | cdktf.IResolvable): any;
export declare class CeCostCategoryRuleRuleNotOrOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CeCostCategoryRuleRuleNotOr | cdktf.IResolvable | undefined;
    set internalValue(value: CeCostCategoryRuleRuleNotOr | cdktf.IResolvable | undefined);
    private _costCategory;
    get costCategory(): CeCostCategoryRuleRuleNotOrCostCategoryOutputReference;
    putCostCategory(value: CeCostCategoryRuleRuleNotOrCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeCostCategoryRuleRuleNotOrCostCategory | undefined;
    private _dimension;
    get dimension(): CeCostCategoryRuleRuleNotOrDimensionOutputReference;
    putDimension(value: CeCostCategoryRuleRuleNotOrDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeCostCategoryRuleRuleNotOrDimension | undefined;
    private _tags;
    get tags(): CeCostCategoryRuleRuleNotOrTagsOutputReference;
    putTags(value: CeCostCategoryRuleRuleNotOrTags): void;
    resetTags(): void;
    get tagsInput(): CeCostCategoryRuleRuleNotOrTags | undefined;
}
export declare class CeCostCategoryRuleRuleNotOrList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CeCostCategoryRuleRuleNotOr[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CeCostCategoryRuleRuleNotOrOutputReference;
}
export interface CeCostCategoryRuleRuleNotTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleNotTagsToTerraform(struct?: CeCostCategoryRuleRuleNotTagsOutputReference | CeCostCategoryRuleRuleNotTags): any;
export declare function ceCostCategoryRuleRuleNotTagsToHclTerraform(struct?: CeCostCategoryRuleRuleNotTagsOutputReference | CeCostCategoryRuleRuleNotTags): any;
export declare class CeCostCategoryRuleRuleNotTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleNotTags | undefined;
    set internalValue(value: CeCostCategoryRuleRuleNotTags | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleNot {
    /**
    * and block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#and CeCostCategory#and}
    */
    readonly and?: CeCostCategoryRuleRuleNotAnd[] | cdktf.IResolvable;
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
    */
    readonly costCategory?: CeCostCategoryRuleRuleNotCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
    */
    readonly dimension?: CeCostCategoryRuleRuleNotDimension;
    /**
    * not block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#not CeCostCategory#not}
    */
    readonly not?: CeCostCategoryRuleRuleNotNot;
    /**
    * or block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#or CeCostCategory#or}
    */
    readonly or?: CeCostCategoryRuleRuleNotOr[] | cdktf.IResolvable;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
    */
    readonly tags?: CeCostCategoryRuleRuleNotTags;
}
export declare function ceCostCategoryRuleRuleNotToTerraform(struct?: CeCostCategoryRuleRuleNotOutputReference | CeCostCategoryRuleRuleNot): any;
export declare function ceCostCategoryRuleRuleNotToHclTerraform(struct?: CeCostCategoryRuleRuleNotOutputReference | CeCostCategoryRuleRuleNot): any;
export declare class CeCostCategoryRuleRuleNotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleNot | undefined;
    set internalValue(value: CeCostCategoryRuleRuleNot | undefined);
    private _and;
    get and(): CeCostCategoryRuleRuleNotAndList;
    putAnd(value: CeCostCategoryRuleRuleNotAnd[] | cdktf.IResolvable): void;
    resetAnd(): void;
    get andInput(): cdktf.IResolvable | CeCostCategoryRuleRuleNotAnd[] | undefined;
    private _costCategory;
    get costCategory(): CeCostCategoryRuleRuleNotCostCategoryOutputReference;
    putCostCategory(value: CeCostCategoryRuleRuleNotCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeCostCategoryRuleRuleNotCostCategory | undefined;
    private _dimension;
    get dimension(): CeCostCategoryRuleRuleNotDimensionOutputReference;
    putDimension(value: CeCostCategoryRuleRuleNotDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeCostCategoryRuleRuleNotDimension | undefined;
    private _not;
    get not(): CeCostCategoryRuleRuleNotNotOutputReference;
    putNot(value: CeCostCategoryRuleRuleNotNot): void;
    resetNot(): void;
    get notInput(): CeCostCategoryRuleRuleNotNot | undefined;
    private _or;
    get or(): CeCostCategoryRuleRuleNotOrList;
    putOr(value: CeCostCategoryRuleRuleNotOr[] | cdktf.IResolvable): void;
    resetOr(): void;
    get orInput(): cdktf.IResolvable | CeCostCategoryRuleRuleNotOr[] | undefined;
    private _tags;
    get tags(): CeCostCategoryRuleRuleNotTagsOutputReference;
    putTags(value: CeCostCategoryRuleRuleNotTags): void;
    resetTags(): void;
    get tagsInput(): CeCostCategoryRuleRuleNotTags | undefined;
}
export interface CeCostCategoryRuleRuleOrAndCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleOrAndCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleOrAndCostCategoryOutputReference | CeCostCategoryRuleRuleOrAndCostCategory): any;
export declare function ceCostCategoryRuleRuleOrAndCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleOrAndCostCategoryOutputReference | CeCostCategoryRuleRuleOrAndCostCategory): any;
export declare class CeCostCategoryRuleRuleOrAndCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleOrAndCostCategory | undefined;
    set internalValue(value: CeCostCategoryRuleRuleOrAndCostCategory | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleOrAndDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleOrAndDimensionToTerraform(struct?: CeCostCategoryRuleRuleOrAndDimensionOutputReference | CeCostCategoryRuleRuleOrAndDimension): any;
export declare function ceCostCategoryRuleRuleOrAndDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleOrAndDimensionOutputReference | CeCostCategoryRuleRuleOrAndDimension): any;
export declare class CeCostCategoryRuleRuleOrAndDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleOrAndDimension | undefined;
    set internalValue(value: CeCostCategoryRuleRuleOrAndDimension | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleOrAndTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleOrAndTagsToTerraform(struct?: CeCostCategoryRuleRuleOrAndTagsOutputReference | CeCostCategoryRuleRuleOrAndTags): any;
export declare function ceCostCategoryRuleRuleOrAndTagsToHclTerraform(struct?: CeCostCategoryRuleRuleOrAndTagsOutputReference | CeCostCategoryRuleRuleOrAndTags): any;
export declare class CeCostCategoryRuleRuleOrAndTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleOrAndTags | undefined;
    set internalValue(value: CeCostCategoryRuleRuleOrAndTags | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleOrAnd {
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
    */
    readonly costCategory?: CeCostCategoryRuleRuleOrAndCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
    */
    readonly dimension?: CeCostCategoryRuleRuleOrAndDimension;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
    */
    readonly tags?: CeCostCategoryRuleRuleOrAndTags;
}
export declare function ceCostCategoryRuleRuleOrAndToTerraform(struct?: CeCostCategoryRuleRuleOrAnd | cdktf.IResolvable): any;
export declare function ceCostCategoryRuleRuleOrAndToHclTerraform(struct?: CeCostCategoryRuleRuleOrAnd | cdktf.IResolvable): any;
export declare class CeCostCategoryRuleRuleOrAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CeCostCategoryRuleRuleOrAnd | cdktf.IResolvable | undefined;
    set internalValue(value: CeCostCategoryRuleRuleOrAnd | cdktf.IResolvable | undefined);
    private _costCategory;
    get costCategory(): CeCostCategoryRuleRuleOrAndCostCategoryOutputReference;
    putCostCategory(value: CeCostCategoryRuleRuleOrAndCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeCostCategoryRuleRuleOrAndCostCategory | undefined;
    private _dimension;
    get dimension(): CeCostCategoryRuleRuleOrAndDimensionOutputReference;
    putDimension(value: CeCostCategoryRuleRuleOrAndDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeCostCategoryRuleRuleOrAndDimension | undefined;
    private _tags;
    get tags(): CeCostCategoryRuleRuleOrAndTagsOutputReference;
    putTags(value: CeCostCategoryRuleRuleOrAndTags): void;
    resetTags(): void;
    get tagsInput(): CeCostCategoryRuleRuleOrAndTags | undefined;
}
export declare class CeCostCategoryRuleRuleOrAndList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CeCostCategoryRuleRuleOrAnd[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CeCostCategoryRuleRuleOrAndOutputReference;
}
export interface CeCostCategoryRuleRuleOrCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleOrCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleOrCostCategoryOutputReference | CeCostCategoryRuleRuleOrCostCategory): any;
export declare function ceCostCategoryRuleRuleOrCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleOrCostCategoryOutputReference | CeCostCategoryRuleRuleOrCostCategory): any;
export declare class CeCostCategoryRuleRuleOrCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleOrCostCategory | undefined;
    set internalValue(value: CeCostCategoryRuleRuleOrCostCategory | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleOrDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleOrDimensionToTerraform(struct?: CeCostCategoryRuleRuleOrDimensionOutputReference | CeCostCategoryRuleRuleOrDimension): any;
export declare function ceCostCategoryRuleRuleOrDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleOrDimensionOutputReference | CeCostCategoryRuleRuleOrDimension): any;
export declare class CeCostCategoryRuleRuleOrDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleOrDimension | undefined;
    set internalValue(value: CeCostCategoryRuleRuleOrDimension | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleOrNotCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleOrNotCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleOrNotCostCategoryOutputReference | CeCostCategoryRuleRuleOrNotCostCategory): any;
export declare function ceCostCategoryRuleRuleOrNotCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleOrNotCostCategoryOutputReference | CeCostCategoryRuleRuleOrNotCostCategory): any;
export declare class CeCostCategoryRuleRuleOrNotCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleOrNotCostCategory | undefined;
    set internalValue(value: CeCostCategoryRuleRuleOrNotCostCategory | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleOrNotDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleOrNotDimensionToTerraform(struct?: CeCostCategoryRuleRuleOrNotDimensionOutputReference | CeCostCategoryRuleRuleOrNotDimension): any;
export declare function ceCostCategoryRuleRuleOrNotDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleOrNotDimensionOutputReference | CeCostCategoryRuleRuleOrNotDimension): any;
export declare class CeCostCategoryRuleRuleOrNotDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleOrNotDimension | undefined;
    set internalValue(value: CeCostCategoryRuleRuleOrNotDimension | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleOrNotTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleOrNotTagsToTerraform(struct?: CeCostCategoryRuleRuleOrNotTagsOutputReference | CeCostCategoryRuleRuleOrNotTags): any;
export declare function ceCostCategoryRuleRuleOrNotTagsToHclTerraform(struct?: CeCostCategoryRuleRuleOrNotTagsOutputReference | CeCostCategoryRuleRuleOrNotTags): any;
export declare class CeCostCategoryRuleRuleOrNotTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleOrNotTags | undefined;
    set internalValue(value: CeCostCategoryRuleRuleOrNotTags | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleOrNot {
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
    */
    readonly costCategory?: CeCostCategoryRuleRuleOrNotCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
    */
    readonly dimension?: CeCostCategoryRuleRuleOrNotDimension;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
    */
    readonly tags?: CeCostCategoryRuleRuleOrNotTags;
}
export declare function ceCostCategoryRuleRuleOrNotToTerraform(struct?: CeCostCategoryRuleRuleOrNotOutputReference | CeCostCategoryRuleRuleOrNot): any;
export declare function ceCostCategoryRuleRuleOrNotToHclTerraform(struct?: CeCostCategoryRuleRuleOrNotOutputReference | CeCostCategoryRuleRuleOrNot): any;
export declare class CeCostCategoryRuleRuleOrNotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleOrNot | undefined;
    set internalValue(value: CeCostCategoryRuleRuleOrNot | undefined);
    private _costCategory;
    get costCategory(): CeCostCategoryRuleRuleOrNotCostCategoryOutputReference;
    putCostCategory(value: CeCostCategoryRuleRuleOrNotCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeCostCategoryRuleRuleOrNotCostCategory | undefined;
    private _dimension;
    get dimension(): CeCostCategoryRuleRuleOrNotDimensionOutputReference;
    putDimension(value: CeCostCategoryRuleRuleOrNotDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeCostCategoryRuleRuleOrNotDimension | undefined;
    private _tags;
    get tags(): CeCostCategoryRuleRuleOrNotTagsOutputReference;
    putTags(value: CeCostCategoryRuleRuleOrNotTags): void;
    resetTags(): void;
    get tagsInput(): CeCostCategoryRuleRuleOrNotTags | undefined;
}
export interface CeCostCategoryRuleRuleOrOrCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleOrOrCostCategoryToTerraform(struct?: CeCostCategoryRuleRuleOrOrCostCategoryOutputReference | CeCostCategoryRuleRuleOrOrCostCategory): any;
export declare function ceCostCategoryRuleRuleOrOrCostCategoryToHclTerraform(struct?: CeCostCategoryRuleRuleOrOrCostCategoryOutputReference | CeCostCategoryRuleRuleOrOrCostCategory): any;
export declare class CeCostCategoryRuleRuleOrOrCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleOrOrCostCategory | undefined;
    set internalValue(value: CeCostCategoryRuleRuleOrOrCostCategory | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleOrOrDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleOrOrDimensionToTerraform(struct?: CeCostCategoryRuleRuleOrOrDimensionOutputReference | CeCostCategoryRuleRuleOrOrDimension): any;
export declare function ceCostCategoryRuleRuleOrOrDimensionToHclTerraform(struct?: CeCostCategoryRuleRuleOrOrDimensionOutputReference | CeCostCategoryRuleRuleOrOrDimension): any;
export declare class CeCostCategoryRuleRuleOrOrDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleOrOrDimension | undefined;
    set internalValue(value: CeCostCategoryRuleRuleOrOrDimension | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleOrOrTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleOrOrTagsToTerraform(struct?: CeCostCategoryRuleRuleOrOrTagsOutputReference | CeCostCategoryRuleRuleOrOrTags): any;
export declare function ceCostCategoryRuleRuleOrOrTagsToHclTerraform(struct?: CeCostCategoryRuleRuleOrOrTagsOutputReference | CeCostCategoryRuleRuleOrOrTags): any;
export declare class CeCostCategoryRuleRuleOrOrTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleOrOrTags | undefined;
    set internalValue(value: CeCostCategoryRuleRuleOrOrTags | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleOrOr {
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
    */
    readonly costCategory?: CeCostCategoryRuleRuleOrOrCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
    */
    readonly dimension?: CeCostCategoryRuleRuleOrOrDimension;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
    */
    readonly tags?: CeCostCategoryRuleRuleOrOrTags;
}
export declare function ceCostCategoryRuleRuleOrOrToTerraform(struct?: CeCostCategoryRuleRuleOrOr | cdktf.IResolvable): any;
export declare function ceCostCategoryRuleRuleOrOrToHclTerraform(struct?: CeCostCategoryRuleRuleOrOr | cdktf.IResolvable): any;
export declare class CeCostCategoryRuleRuleOrOrOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CeCostCategoryRuleRuleOrOr | cdktf.IResolvable | undefined;
    set internalValue(value: CeCostCategoryRuleRuleOrOr | cdktf.IResolvable | undefined);
    private _costCategory;
    get costCategory(): CeCostCategoryRuleRuleOrOrCostCategoryOutputReference;
    putCostCategory(value: CeCostCategoryRuleRuleOrOrCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeCostCategoryRuleRuleOrOrCostCategory | undefined;
    private _dimension;
    get dimension(): CeCostCategoryRuleRuleOrOrDimensionOutputReference;
    putDimension(value: CeCostCategoryRuleRuleOrOrDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeCostCategoryRuleRuleOrOrDimension | undefined;
    private _tags;
    get tags(): CeCostCategoryRuleRuleOrOrTagsOutputReference;
    putTags(value: CeCostCategoryRuleRuleOrOrTags): void;
    resetTags(): void;
    get tagsInput(): CeCostCategoryRuleRuleOrOrTags | undefined;
}
export declare class CeCostCategoryRuleRuleOrOrList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CeCostCategoryRuleRuleOrOr[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CeCostCategoryRuleRuleOrOrOutputReference;
}
export interface CeCostCategoryRuleRuleOrTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleOrTagsToTerraform(struct?: CeCostCategoryRuleRuleOrTagsOutputReference | CeCostCategoryRuleRuleOrTags): any;
export declare function ceCostCategoryRuleRuleOrTagsToHclTerraform(struct?: CeCostCategoryRuleRuleOrTagsOutputReference | CeCostCategoryRuleRuleOrTags): any;
export declare class CeCostCategoryRuleRuleOrTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleOrTags | undefined;
    set internalValue(value: CeCostCategoryRuleRuleOrTags | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRuleOr {
    /**
    * and block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#and CeCostCategory#and}
    */
    readonly and?: CeCostCategoryRuleRuleOrAnd[] | cdktf.IResolvable;
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
    */
    readonly costCategory?: CeCostCategoryRuleRuleOrCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
    */
    readonly dimension?: CeCostCategoryRuleRuleOrDimension;
    /**
    * not block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#not CeCostCategory#not}
    */
    readonly not?: CeCostCategoryRuleRuleOrNot;
    /**
    * or block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#or CeCostCategory#or}
    */
    readonly or?: CeCostCategoryRuleRuleOrOr[] | cdktf.IResolvable;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
    */
    readonly tags?: CeCostCategoryRuleRuleOrTags;
}
export declare function ceCostCategoryRuleRuleOrToTerraform(struct?: CeCostCategoryRuleRuleOr | cdktf.IResolvable): any;
export declare function ceCostCategoryRuleRuleOrToHclTerraform(struct?: CeCostCategoryRuleRuleOr | cdktf.IResolvable): any;
export declare class CeCostCategoryRuleRuleOrOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CeCostCategoryRuleRuleOr | cdktf.IResolvable | undefined;
    set internalValue(value: CeCostCategoryRuleRuleOr | cdktf.IResolvable | undefined);
    private _and;
    get and(): CeCostCategoryRuleRuleOrAndList;
    putAnd(value: CeCostCategoryRuleRuleOrAnd[] | cdktf.IResolvable): void;
    resetAnd(): void;
    get andInput(): cdktf.IResolvable | CeCostCategoryRuleRuleOrAnd[] | undefined;
    private _costCategory;
    get costCategory(): CeCostCategoryRuleRuleOrCostCategoryOutputReference;
    putCostCategory(value: CeCostCategoryRuleRuleOrCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeCostCategoryRuleRuleOrCostCategory | undefined;
    private _dimension;
    get dimension(): CeCostCategoryRuleRuleOrDimensionOutputReference;
    putDimension(value: CeCostCategoryRuleRuleOrDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeCostCategoryRuleRuleOrDimension | undefined;
    private _not;
    get not(): CeCostCategoryRuleRuleOrNotOutputReference;
    putNot(value: CeCostCategoryRuleRuleOrNot): void;
    resetNot(): void;
    get notInput(): CeCostCategoryRuleRuleOrNot | undefined;
    private _or;
    get or(): CeCostCategoryRuleRuleOrOrList;
    putOr(value: CeCostCategoryRuleRuleOrOr[] | cdktf.IResolvable): void;
    resetOr(): void;
    get orInput(): cdktf.IResolvable | CeCostCategoryRuleRuleOrOr[] | undefined;
    private _tags;
    get tags(): CeCostCategoryRuleRuleOrTagsOutputReference;
    putTags(value: CeCostCategoryRuleRuleOrTags): void;
    resetTags(): void;
    get tagsInput(): CeCostCategoryRuleRuleOrTags | undefined;
}
export declare class CeCostCategoryRuleRuleOrList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CeCostCategoryRuleRuleOr[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CeCostCategoryRuleRuleOrOutputReference;
}
export interface CeCostCategoryRuleRuleTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#key CeCostCategory#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#match_options CeCostCategory#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategoryRuleRuleTagsToTerraform(struct?: CeCostCategoryRuleRuleTagsOutputReference | CeCostCategoryRuleRuleTags): any;
export declare function ceCostCategoryRuleRuleTagsToHclTerraform(struct?: CeCostCategoryRuleRuleTagsOutputReference | CeCostCategoryRuleRuleTags): any;
export declare class CeCostCategoryRuleRuleTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRuleTags | undefined;
    set internalValue(value: CeCostCategoryRuleRuleTags | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _matchOptions?;
    get matchOptions(): string[];
    set matchOptions(value: string[]);
    resetMatchOptions(): void;
    get matchOptionsInput(): string[] | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export interface CeCostCategoryRuleRule {
    /**
    * and block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#and CeCostCategory#and}
    */
    readonly and?: CeCostCategoryRuleRuleAnd[] | cdktf.IResolvable;
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#cost_category CeCostCategory#cost_category}
    */
    readonly costCategory?: CeCostCategoryRuleRuleCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#dimension CeCostCategory#dimension}
    */
    readonly dimension?: CeCostCategoryRuleRuleDimension;
    /**
    * not block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#not CeCostCategory#not}
    */
    readonly not?: CeCostCategoryRuleRuleNot;
    /**
    * or block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#or CeCostCategory#or}
    */
    readonly or?: CeCostCategoryRuleRuleOr[] | cdktf.IResolvable;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#tags CeCostCategory#tags}
    */
    readonly tags?: CeCostCategoryRuleRuleTags;
}
export declare function ceCostCategoryRuleRuleToTerraform(struct?: CeCostCategoryRuleRuleOutputReference | CeCostCategoryRuleRule): any;
export declare function ceCostCategoryRuleRuleToHclTerraform(struct?: CeCostCategoryRuleRuleOutputReference | CeCostCategoryRuleRule): any;
export declare class CeCostCategoryRuleRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeCostCategoryRuleRule | undefined;
    set internalValue(value: CeCostCategoryRuleRule | undefined);
    private _and;
    get and(): CeCostCategoryRuleRuleAndList;
    putAnd(value: CeCostCategoryRuleRuleAnd[] | cdktf.IResolvable): void;
    resetAnd(): void;
    get andInput(): cdktf.IResolvable | CeCostCategoryRuleRuleAnd[] | undefined;
    private _costCategory;
    get costCategory(): CeCostCategoryRuleRuleCostCategoryOutputReference;
    putCostCategory(value: CeCostCategoryRuleRuleCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeCostCategoryRuleRuleCostCategory | undefined;
    private _dimension;
    get dimension(): CeCostCategoryRuleRuleDimensionOutputReference;
    putDimension(value: CeCostCategoryRuleRuleDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeCostCategoryRuleRuleDimension | undefined;
    private _not;
    get not(): CeCostCategoryRuleRuleNotOutputReference;
    putNot(value: CeCostCategoryRuleRuleNot): void;
    resetNot(): void;
    get notInput(): CeCostCategoryRuleRuleNot | undefined;
    private _or;
    get or(): CeCostCategoryRuleRuleOrList;
    putOr(value: CeCostCategoryRuleRuleOr[] | cdktf.IResolvable): void;
    resetOr(): void;
    get orInput(): cdktf.IResolvable | CeCostCategoryRuleRuleOr[] | undefined;
    private _tags;
    get tags(): CeCostCategoryRuleRuleTagsOutputReference;
    putTags(value: CeCostCategoryRuleRuleTags): void;
    resetTags(): void;
    get tagsInput(): CeCostCategoryRuleRuleTags | undefined;
}
export interface CeCostCategoryRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#type CeCostCategory#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#value CeCostCategory#value}
    */
    readonly value?: string;
    /**
    * inherited_value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#inherited_value CeCostCategory#inherited_value}
    */
    readonly inheritedValue?: CeCostCategoryRuleInheritedValue;
    /**
    * rule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#rule CeCostCategory#rule}
    */
    readonly rule?: CeCostCategoryRuleRule;
}
export declare function ceCostCategoryRuleToTerraform(struct?: CeCostCategoryRule | cdktf.IResolvable): any;
export declare function ceCostCategoryRuleToHclTerraform(struct?: CeCostCategoryRule | cdktf.IResolvable): any;
export declare class CeCostCategoryRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CeCostCategoryRule | cdktf.IResolvable | undefined;
    set internalValue(value: CeCostCategoryRule | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
    private _inheritedValue;
    get inheritedValue(): CeCostCategoryRuleInheritedValueOutputReference;
    putInheritedValue(value: CeCostCategoryRuleInheritedValue): void;
    resetInheritedValue(): void;
    get inheritedValueInput(): CeCostCategoryRuleInheritedValue | undefined;
    private _rule;
    get rule(): CeCostCategoryRuleRuleOutputReference;
    putRule(value: CeCostCategoryRuleRule): void;
    resetRule(): void;
    get ruleInput(): CeCostCategoryRuleRule | undefined;
}
export declare class CeCostCategoryRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CeCostCategoryRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CeCostCategoryRuleOutputReference;
}
export interface CeCostCategorySplitChargeRuleParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#type CeCostCategory#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#values CeCostCategory#values}
    */
    readonly values?: string[];
}
export declare function ceCostCategorySplitChargeRuleParameterToTerraform(struct?: CeCostCategorySplitChargeRuleParameter | cdktf.IResolvable): any;
export declare function ceCostCategorySplitChargeRuleParameterToHclTerraform(struct?: CeCostCategorySplitChargeRuleParameter | cdktf.IResolvable): any;
export declare class CeCostCategorySplitChargeRuleParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CeCostCategorySplitChargeRuleParameter | cdktf.IResolvable | undefined;
    set internalValue(value: CeCostCategorySplitChargeRuleParameter | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export declare class CeCostCategorySplitChargeRuleParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CeCostCategorySplitChargeRuleParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CeCostCategorySplitChargeRuleParameterOutputReference;
}
export interface CeCostCategorySplitChargeRule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#method CeCostCategory#method}
    */
    readonly method: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#source CeCostCategory#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#targets CeCostCategory#targets}
    */
    readonly targets: string[];
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#parameter CeCostCategory#parameter}
    */
    readonly parameter?: CeCostCategorySplitChargeRuleParameter[] | cdktf.IResolvable;
}
export declare function ceCostCategorySplitChargeRuleToTerraform(struct?: CeCostCategorySplitChargeRule | cdktf.IResolvable): any;
export declare function ceCostCategorySplitChargeRuleToHclTerraform(struct?: CeCostCategorySplitChargeRule | cdktf.IResolvable): any;
export declare class CeCostCategorySplitChargeRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CeCostCategorySplitChargeRule | cdktf.IResolvable | undefined;
    set internalValue(value: CeCostCategorySplitChargeRule | cdktf.IResolvable | undefined);
    private _method?;
    get method(): string;
    set method(value: string);
    get methodInput(): string | undefined;
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string | undefined;
    private _targets?;
    get targets(): string[];
    set targets(value: string[]);
    get targetsInput(): string[] | undefined;
    private _parameter;
    get parameter(): CeCostCategorySplitChargeRuleParameterList;
    putParameter(value: CeCostCategorySplitChargeRuleParameter[] | cdktf.IResolvable): void;
    resetParameter(): void;
    get parameterInput(): cdktf.IResolvable | CeCostCategorySplitChargeRuleParameter[] | undefined;
}
export declare class CeCostCategorySplitChargeRuleList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CeCostCategorySplitChargeRule[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CeCostCategorySplitChargeRuleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category aws_ce_cost_category}
*/
export declare class CeCostCategory extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ce_cost_category";
    /**
    * Generates CDKTF code for importing a CeCostCategory resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CeCostCategory to import
    * @param importFromId The id of the existing CeCostCategory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CeCostCategory to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ce_cost_category aws_ce_cost_category} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CeCostCategoryConfig
    */
    constructor(scope: Construct, id: string, config: CeCostCategoryConfig);
    get arn(): string;
    private _defaultValue?;
    get defaultValue(): string;
    set defaultValue(value: string);
    resetDefaultValue(): void;
    get defaultValueInput(): string | undefined;
    get effectiveEnd(): string;
    private _effectiveStart?;
    get effectiveStart(): string;
    set effectiveStart(value: string);
    resetEffectiveStart(): void;
    get effectiveStartInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _ruleVersion?;
    get ruleVersion(): string;
    set ruleVersion(value: string);
    get ruleVersionInput(): string | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _rule;
    get rule(): CeCostCategoryRuleList;
    putRule(value: CeCostCategoryRule[] | cdktf.IResolvable): void;
    get ruleInput(): cdktf.IResolvable | CeCostCategoryRule[] | undefined;
    private _splitChargeRule;
    get splitChargeRule(): CeCostCategorySplitChargeRuleList;
    putSplitChargeRule(value: CeCostCategorySplitChargeRule[] | cdktf.IResolvable): void;
    resetSplitChargeRule(): void;
    get splitChargeRuleInput(): cdktf.IResolvable | CeCostCategorySplitChargeRule[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
