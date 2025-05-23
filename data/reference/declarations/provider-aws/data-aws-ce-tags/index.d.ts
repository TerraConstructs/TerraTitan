/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCeTagsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#id DataAwsCeTags#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#search_string DataAwsCeTags#search_string}
    */
    readonly searchString?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#tag_key DataAwsCeTags#tag_key}
    */
    readonly tagKey?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#filter DataAwsCeTags#filter}
    */
    readonly filter?: DataAwsCeTagsFilter;
    /**
    * sort_by block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#sort_by DataAwsCeTags#sort_by}
    */
    readonly sortBy?: DataAwsCeTagsSortBy[] | cdktf.IResolvable;
    /**
    * time_period block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#time_period DataAwsCeTags#time_period}
    */
    readonly timePeriod: DataAwsCeTagsTimePeriod;
}
export interface DataAwsCeTagsFilterAndCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}
    */
    readonly values?: string[];
}
export declare function dataAwsCeTagsFilterAndCostCategoryToTerraform(struct?: DataAwsCeTagsFilterAndCostCategoryOutputReference | DataAwsCeTagsFilterAndCostCategory): any;
export declare function dataAwsCeTagsFilterAndCostCategoryToHclTerraform(struct?: DataAwsCeTagsFilterAndCostCategoryOutputReference | DataAwsCeTagsFilterAndCostCategory): any;
export declare class DataAwsCeTagsFilterAndCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCeTagsFilterAndCostCategory | undefined;
    set internalValue(value: DataAwsCeTagsFilterAndCostCategory | undefined);
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
export interface DataAwsCeTagsFilterAndDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}
    */
    readonly values?: string[];
}
export declare function dataAwsCeTagsFilterAndDimensionToTerraform(struct?: DataAwsCeTagsFilterAndDimensionOutputReference | DataAwsCeTagsFilterAndDimension): any;
export declare function dataAwsCeTagsFilterAndDimensionToHclTerraform(struct?: DataAwsCeTagsFilterAndDimensionOutputReference | DataAwsCeTagsFilterAndDimension): any;
export declare class DataAwsCeTagsFilterAndDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCeTagsFilterAndDimension | undefined;
    set internalValue(value: DataAwsCeTagsFilterAndDimension | undefined);
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
export interface DataAwsCeTagsFilterAndTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}
    */
    readonly values?: string[];
}
export declare function dataAwsCeTagsFilterAndTagsToTerraform(struct?: DataAwsCeTagsFilterAndTagsOutputReference | DataAwsCeTagsFilterAndTags): any;
export declare function dataAwsCeTagsFilterAndTagsToHclTerraform(struct?: DataAwsCeTagsFilterAndTagsOutputReference | DataAwsCeTagsFilterAndTags): any;
export declare class DataAwsCeTagsFilterAndTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCeTagsFilterAndTags | undefined;
    set internalValue(value: DataAwsCeTagsFilterAndTags | undefined);
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
export interface DataAwsCeTagsFilterAnd {
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#cost_category DataAwsCeTags#cost_category}
    */
    readonly costCategory?: DataAwsCeTagsFilterAndCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#dimension DataAwsCeTags#dimension}
    */
    readonly dimension?: DataAwsCeTagsFilterAndDimension;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#tags DataAwsCeTags#tags}
    */
    readonly tags?: DataAwsCeTagsFilterAndTags;
}
export declare function dataAwsCeTagsFilterAndToTerraform(struct?: DataAwsCeTagsFilterAnd | cdktf.IResolvable): any;
export declare function dataAwsCeTagsFilterAndToHclTerraform(struct?: DataAwsCeTagsFilterAnd | cdktf.IResolvable): any;
export declare class DataAwsCeTagsFilterAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeTagsFilterAnd | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsCeTagsFilterAnd | cdktf.IResolvable | undefined);
    private _costCategory;
    get costCategory(): DataAwsCeTagsFilterAndCostCategoryOutputReference;
    putCostCategory(value: DataAwsCeTagsFilterAndCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): DataAwsCeTagsFilterAndCostCategory | undefined;
    private _dimension;
    get dimension(): DataAwsCeTagsFilterAndDimensionOutputReference;
    putDimension(value: DataAwsCeTagsFilterAndDimension): void;
    resetDimension(): void;
    get dimensionInput(): DataAwsCeTagsFilterAndDimension | undefined;
    private _tags;
    get tags(): DataAwsCeTagsFilterAndTagsOutputReference;
    putTags(value: DataAwsCeTagsFilterAndTags): void;
    resetTags(): void;
    get tagsInput(): DataAwsCeTagsFilterAndTags | undefined;
}
export declare class DataAwsCeTagsFilterAndList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsCeTagsFilterAnd[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsCeTagsFilterAndOutputReference;
}
export interface DataAwsCeTagsFilterCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}
    */
    readonly values?: string[];
}
export declare function dataAwsCeTagsFilterCostCategoryToTerraform(struct?: DataAwsCeTagsFilterCostCategoryOutputReference | DataAwsCeTagsFilterCostCategory): any;
export declare function dataAwsCeTagsFilterCostCategoryToHclTerraform(struct?: DataAwsCeTagsFilterCostCategoryOutputReference | DataAwsCeTagsFilterCostCategory): any;
export declare class DataAwsCeTagsFilterCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCeTagsFilterCostCategory | undefined;
    set internalValue(value: DataAwsCeTagsFilterCostCategory | undefined);
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
export interface DataAwsCeTagsFilterDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}
    */
    readonly values?: string[];
}
export declare function dataAwsCeTagsFilterDimensionToTerraform(struct?: DataAwsCeTagsFilterDimensionOutputReference | DataAwsCeTagsFilterDimension): any;
export declare function dataAwsCeTagsFilterDimensionToHclTerraform(struct?: DataAwsCeTagsFilterDimensionOutputReference | DataAwsCeTagsFilterDimension): any;
export declare class DataAwsCeTagsFilterDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCeTagsFilterDimension | undefined;
    set internalValue(value: DataAwsCeTagsFilterDimension | undefined);
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
export interface DataAwsCeTagsFilterNotCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}
    */
    readonly values?: string[];
}
export declare function dataAwsCeTagsFilterNotCostCategoryToTerraform(struct?: DataAwsCeTagsFilterNotCostCategoryOutputReference | DataAwsCeTagsFilterNotCostCategory): any;
export declare function dataAwsCeTagsFilterNotCostCategoryToHclTerraform(struct?: DataAwsCeTagsFilterNotCostCategoryOutputReference | DataAwsCeTagsFilterNotCostCategory): any;
export declare class DataAwsCeTagsFilterNotCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCeTagsFilterNotCostCategory | undefined;
    set internalValue(value: DataAwsCeTagsFilterNotCostCategory | undefined);
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
export interface DataAwsCeTagsFilterNotDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}
    */
    readonly values?: string[];
}
export declare function dataAwsCeTagsFilterNotDimensionToTerraform(struct?: DataAwsCeTagsFilterNotDimensionOutputReference | DataAwsCeTagsFilterNotDimension): any;
export declare function dataAwsCeTagsFilterNotDimensionToHclTerraform(struct?: DataAwsCeTagsFilterNotDimensionOutputReference | DataAwsCeTagsFilterNotDimension): any;
export declare class DataAwsCeTagsFilterNotDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCeTagsFilterNotDimension | undefined;
    set internalValue(value: DataAwsCeTagsFilterNotDimension | undefined);
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
export interface DataAwsCeTagsFilterNotTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}
    */
    readonly values?: string[];
}
export declare function dataAwsCeTagsFilterNotTagsToTerraform(struct?: DataAwsCeTagsFilterNotTagsOutputReference | DataAwsCeTagsFilterNotTags): any;
export declare function dataAwsCeTagsFilterNotTagsToHclTerraform(struct?: DataAwsCeTagsFilterNotTagsOutputReference | DataAwsCeTagsFilterNotTags): any;
export declare class DataAwsCeTagsFilterNotTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCeTagsFilterNotTags | undefined;
    set internalValue(value: DataAwsCeTagsFilterNotTags | undefined);
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
export interface DataAwsCeTagsFilterNot {
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#cost_category DataAwsCeTags#cost_category}
    */
    readonly costCategory?: DataAwsCeTagsFilterNotCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#dimension DataAwsCeTags#dimension}
    */
    readonly dimension?: DataAwsCeTagsFilterNotDimension;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#tags DataAwsCeTags#tags}
    */
    readonly tags?: DataAwsCeTagsFilterNotTags;
}
export declare function dataAwsCeTagsFilterNotToTerraform(struct?: DataAwsCeTagsFilterNotOutputReference | DataAwsCeTagsFilterNot): any;
export declare function dataAwsCeTagsFilterNotToHclTerraform(struct?: DataAwsCeTagsFilterNotOutputReference | DataAwsCeTagsFilterNot): any;
export declare class DataAwsCeTagsFilterNotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCeTagsFilterNot | undefined;
    set internalValue(value: DataAwsCeTagsFilterNot | undefined);
    private _costCategory;
    get costCategory(): DataAwsCeTagsFilterNotCostCategoryOutputReference;
    putCostCategory(value: DataAwsCeTagsFilterNotCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): DataAwsCeTagsFilterNotCostCategory | undefined;
    private _dimension;
    get dimension(): DataAwsCeTagsFilterNotDimensionOutputReference;
    putDimension(value: DataAwsCeTagsFilterNotDimension): void;
    resetDimension(): void;
    get dimensionInput(): DataAwsCeTagsFilterNotDimension | undefined;
    private _tags;
    get tags(): DataAwsCeTagsFilterNotTagsOutputReference;
    putTags(value: DataAwsCeTagsFilterNotTags): void;
    resetTags(): void;
    get tagsInput(): DataAwsCeTagsFilterNotTags | undefined;
}
export interface DataAwsCeTagsFilterOrCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}
    */
    readonly values?: string[];
}
export declare function dataAwsCeTagsFilterOrCostCategoryToTerraform(struct?: DataAwsCeTagsFilterOrCostCategoryOutputReference | DataAwsCeTagsFilterOrCostCategory): any;
export declare function dataAwsCeTagsFilterOrCostCategoryToHclTerraform(struct?: DataAwsCeTagsFilterOrCostCategoryOutputReference | DataAwsCeTagsFilterOrCostCategory): any;
export declare class DataAwsCeTagsFilterOrCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCeTagsFilterOrCostCategory | undefined;
    set internalValue(value: DataAwsCeTagsFilterOrCostCategory | undefined);
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
export interface DataAwsCeTagsFilterOrDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}
    */
    readonly values?: string[];
}
export declare function dataAwsCeTagsFilterOrDimensionToTerraform(struct?: DataAwsCeTagsFilterOrDimensionOutputReference | DataAwsCeTagsFilterOrDimension): any;
export declare function dataAwsCeTagsFilterOrDimensionToHclTerraform(struct?: DataAwsCeTagsFilterOrDimensionOutputReference | DataAwsCeTagsFilterOrDimension): any;
export declare class DataAwsCeTagsFilterOrDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCeTagsFilterOrDimension | undefined;
    set internalValue(value: DataAwsCeTagsFilterOrDimension | undefined);
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
export interface DataAwsCeTagsFilterOrTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}
    */
    readonly values?: string[];
}
export declare function dataAwsCeTagsFilterOrTagsToTerraform(struct?: DataAwsCeTagsFilterOrTagsOutputReference | DataAwsCeTagsFilterOrTags): any;
export declare function dataAwsCeTagsFilterOrTagsToHclTerraform(struct?: DataAwsCeTagsFilterOrTagsOutputReference | DataAwsCeTagsFilterOrTags): any;
export declare class DataAwsCeTagsFilterOrTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCeTagsFilterOrTags | undefined;
    set internalValue(value: DataAwsCeTagsFilterOrTags | undefined);
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
export interface DataAwsCeTagsFilterOr {
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#cost_category DataAwsCeTags#cost_category}
    */
    readonly costCategory?: DataAwsCeTagsFilterOrCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#dimension DataAwsCeTags#dimension}
    */
    readonly dimension?: DataAwsCeTagsFilterOrDimension;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#tags DataAwsCeTags#tags}
    */
    readonly tags?: DataAwsCeTagsFilterOrTags;
}
export declare function dataAwsCeTagsFilterOrToTerraform(struct?: DataAwsCeTagsFilterOr | cdktf.IResolvable): any;
export declare function dataAwsCeTagsFilterOrToHclTerraform(struct?: DataAwsCeTagsFilterOr | cdktf.IResolvable): any;
export declare class DataAwsCeTagsFilterOrOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeTagsFilterOr | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsCeTagsFilterOr | cdktf.IResolvable | undefined);
    private _costCategory;
    get costCategory(): DataAwsCeTagsFilterOrCostCategoryOutputReference;
    putCostCategory(value: DataAwsCeTagsFilterOrCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): DataAwsCeTagsFilterOrCostCategory | undefined;
    private _dimension;
    get dimension(): DataAwsCeTagsFilterOrDimensionOutputReference;
    putDimension(value: DataAwsCeTagsFilterOrDimension): void;
    resetDimension(): void;
    get dimensionInput(): DataAwsCeTagsFilterOrDimension | undefined;
    private _tags;
    get tags(): DataAwsCeTagsFilterOrTagsOutputReference;
    putTags(value: DataAwsCeTagsFilterOrTags): void;
    resetTags(): void;
    get tagsInput(): DataAwsCeTagsFilterOrTags | undefined;
}
export declare class DataAwsCeTagsFilterOrList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsCeTagsFilterOr[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsCeTagsFilterOrOutputReference;
}
export interface DataAwsCeTagsFilterTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#match_options DataAwsCeTags#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#values DataAwsCeTags#values}
    */
    readonly values?: string[];
}
export declare function dataAwsCeTagsFilterTagsToTerraform(struct?: DataAwsCeTagsFilterTagsOutputReference | DataAwsCeTagsFilterTags): any;
export declare function dataAwsCeTagsFilterTagsToHclTerraform(struct?: DataAwsCeTagsFilterTagsOutputReference | DataAwsCeTagsFilterTags): any;
export declare class DataAwsCeTagsFilterTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCeTagsFilterTags | undefined;
    set internalValue(value: DataAwsCeTagsFilterTags | undefined);
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
export interface DataAwsCeTagsFilter {
    /**
    * and block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#and DataAwsCeTags#and}
    */
    readonly and?: DataAwsCeTagsFilterAnd[] | cdktf.IResolvable;
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#cost_category DataAwsCeTags#cost_category}
    */
    readonly costCategory?: DataAwsCeTagsFilterCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#dimension DataAwsCeTags#dimension}
    */
    readonly dimension?: DataAwsCeTagsFilterDimension;
    /**
    * not block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#not DataAwsCeTags#not}
    */
    readonly not?: DataAwsCeTagsFilterNot;
    /**
    * or block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#or DataAwsCeTags#or}
    */
    readonly or?: DataAwsCeTagsFilterOr[] | cdktf.IResolvable;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#tags DataAwsCeTags#tags}
    */
    readonly tags?: DataAwsCeTagsFilterTags;
}
export declare function dataAwsCeTagsFilterToTerraform(struct?: DataAwsCeTagsFilterOutputReference | DataAwsCeTagsFilter): any;
export declare function dataAwsCeTagsFilterToHclTerraform(struct?: DataAwsCeTagsFilterOutputReference | DataAwsCeTagsFilter): any;
export declare class DataAwsCeTagsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCeTagsFilter | undefined;
    set internalValue(value: DataAwsCeTagsFilter | undefined);
    private _and;
    get and(): DataAwsCeTagsFilterAndList;
    putAnd(value: DataAwsCeTagsFilterAnd[] | cdktf.IResolvable): void;
    resetAnd(): void;
    get andInput(): cdktf.IResolvable | DataAwsCeTagsFilterAnd[] | undefined;
    private _costCategory;
    get costCategory(): DataAwsCeTagsFilterCostCategoryOutputReference;
    putCostCategory(value: DataAwsCeTagsFilterCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): DataAwsCeTagsFilterCostCategory | undefined;
    private _dimension;
    get dimension(): DataAwsCeTagsFilterDimensionOutputReference;
    putDimension(value: DataAwsCeTagsFilterDimension): void;
    resetDimension(): void;
    get dimensionInput(): DataAwsCeTagsFilterDimension | undefined;
    private _not;
    get not(): DataAwsCeTagsFilterNotOutputReference;
    putNot(value: DataAwsCeTagsFilterNot): void;
    resetNot(): void;
    get notInput(): DataAwsCeTagsFilterNot | undefined;
    private _or;
    get or(): DataAwsCeTagsFilterOrList;
    putOr(value: DataAwsCeTagsFilterOr[] | cdktf.IResolvable): void;
    resetOr(): void;
    get orInput(): cdktf.IResolvable | DataAwsCeTagsFilterOr[] | undefined;
    private _tags;
    get tags(): DataAwsCeTagsFilterTagsOutputReference;
    putTags(value: DataAwsCeTagsFilterTags): void;
    resetTags(): void;
    get tagsInput(): DataAwsCeTagsFilterTags | undefined;
}
export interface DataAwsCeTagsSortBy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#key DataAwsCeTags#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#sort_order DataAwsCeTags#sort_order}
    */
    readonly sortOrder?: string;
}
export declare function dataAwsCeTagsSortByToTerraform(struct?: DataAwsCeTagsSortBy | cdktf.IResolvable): any;
export declare function dataAwsCeTagsSortByToHclTerraform(struct?: DataAwsCeTagsSortBy | cdktf.IResolvable): any;
export declare class DataAwsCeTagsSortByOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeTagsSortBy | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsCeTagsSortBy | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _sortOrder?;
    get sortOrder(): string;
    set sortOrder(value: string);
    resetSortOrder(): void;
    get sortOrderInput(): string | undefined;
}
export declare class DataAwsCeTagsSortByList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsCeTagsSortBy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsCeTagsSortByOutputReference;
}
export interface DataAwsCeTagsTimePeriod {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#end DataAwsCeTags#end}
    */
    readonly end: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#start DataAwsCeTags#start}
    */
    readonly start: string;
}
export declare function dataAwsCeTagsTimePeriodToTerraform(struct?: DataAwsCeTagsTimePeriodOutputReference | DataAwsCeTagsTimePeriod): any;
export declare function dataAwsCeTagsTimePeriodToHclTerraform(struct?: DataAwsCeTagsTimePeriodOutputReference | DataAwsCeTagsTimePeriod): any;
export declare class DataAwsCeTagsTimePeriodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsCeTagsTimePeriod | undefined;
    set internalValue(value: DataAwsCeTagsTimePeriod | undefined);
    private _end?;
    get end(): string;
    set end(value: string);
    get endInput(): string | undefined;
    private _start?;
    get start(): string;
    set start(value: string);
    get startInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags aws_ce_tags}
*/
export declare class DataAwsCeTags extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ce_tags";
    /**
    * Generates CDKTF code for importing a DataAwsCeTags resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCeTags to import
    * @param importFromId The id of the existing DataAwsCeTags that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCeTags to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ce_tags aws_ce_tags} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCeTagsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCeTagsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    resetSearchString(): void;
    get searchStringInput(): string | undefined;
    private _tagKey?;
    get tagKey(): string;
    set tagKey(value: string);
    resetTagKey(): void;
    get tagKeyInput(): string | undefined;
    get tags(): string[];
    private _filter;
    get filter(): DataAwsCeTagsFilterOutputReference;
    putFilter(value: DataAwsCeTagsFilter): void;
    resetFilter(): void;
    get filterInput(): DataAwsCeTagsFilter | undefined;
    private _sortBy;
    get sortBy(): DataAwsCeTagsSortByList;
    putSortBy(value: DataAwsCeTagsSortBy[] | cdktf.IResolvable): void;
    resetSortBy(): void;
    get sortByInput(): cdktf.IResolvable | DataAwsCeTagsSortBy[] | undefined;
    private _timePeriod;
    get timePeriod(): DataAwsCeTagsTimePeriodOutputReference;
    putTimePeriod(value: DataAwsCeTagsTimePeriod): void;
    get timePeriodInput(): DataAwsCeTagsTimePeriod | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
