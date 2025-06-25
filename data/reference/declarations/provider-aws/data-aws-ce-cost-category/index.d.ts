/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCeCostCategoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ce_cost_category#cost_category_arn DataAwsCeCostCategory#cost_category_arn}
    */
    readonly costCategoryArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ce_cost_category#id DataAwsCeCostCategory#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ce_cost_category#tags DataAwsCeCostCategory#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsCeCostCategoryRuleInheritedValue {
}
export declare function dataAwsCeCostCategoryRuleInheritedValueToTerraform(struct?: DataAwsCeCostCategoryRuleInheritedValue): any;
export declare function dataAwsCeCostCategoryRuleInheritedValueToHclTerraform(struct?: DataAwsCeCostCategoryRuleInheritedValue): any;
export declare class DataAwsCeCostCategoryRuleInheritedValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleInheritedValue | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleInheritedValue | undefined);
    get dimensionKey(): string;
    get dimensionName(): string;
}
export declare class DataAwsCeCostCategoryRuleInheritedValueList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleInheritedValueOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleAndAndCostCategory {
}
export declare function dataAwsCeCostCategoryRuleRuleAndAndCostCategoryToTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndAndCostCategory): any;
export declare function dataAwsCeCostCategoryRuleRuleAndAndCostCategoryToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndAndCostCategory): any;
export declare class DataAwsCeCostCategoryRuleRuleAndAndCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleAndAndCostCategory | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleAndAndCostCategory | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleAndAndCostCategoryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleAndAndCostCategoryOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleAndAndDimension {
}
export declare function dataAwsCeCostCategoryRuleRuleAndAndDimensionToTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndAndDimension): any;
export declare function dataAwsCeCostCategoryRuleRuleAndAndDimensionToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndAndDimension): any;
export declare class DataAwsCeCostCategoryRuleRuleAndAndDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleAndAndDimension | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleAndAndDimension | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleAndAndDimensionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleAndAndDimensionOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleAndAndTags {
}
export declare function dataAwsCeCostCategoryRuleRuleAndAndTagsToTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndAndTags): any;
export declare function dataAwsCeCostCategoryRuleRuleAndAndTagsToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndAndTags): any;
export declare class DataAwsCeCostCategoryRuleRuleAndAndTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleAndAndTags | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleAndAndTags | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleAndAndTagsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleAndAndTagsOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleAndAnd {
}
export declare function dataAwsCeCostCategoryRuleRuleAndAndToTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndAnd): any;
export declare function dataAwsCeCostCategoryRuleRuleAndAndToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndAnd): any;
export declare class DataAwsCeCostCategoryRuleRuleAndAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleAndAnd | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleAndAnd | undefined);
    private _costCategory;
    get costCategory(): DataAwsCeCostCategoryRuleRuleAndAndCostCategoryList;
    private _dimension;
    get dimension(): DataAwsCeCostCategoryRuleRuleAndAndDimensionList;
    private _tags;
    get tags(): DataAwsCeCostCategoryRuleRuleAndAndTagsList;
}
export declare class DataAwsCeCostCategoryRuleRuleAndAndList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleAndAndOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleAndCostCategory {
}
export declare function dataAwsCeCostCategoryRuleRuleAndCostCategoryToTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndCostCategory): any;
export declare function dataAwsCeCostCategoryRuleRuleAndCostCategoryToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndCostCategory): any;
export declare class DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleAndCostCategory | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleAndCostCategory | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleAndCostCategoryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleAndCostCategoryOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleAndDimension {
}
export declare function dataAwsCeCostCategoryRuleRuleAndDimensionToTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndDimension): any;
export declare function dataAwsCeCostCategoryRuleRuleAndDimensionToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndDimension): any;
export declare class DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleAndDimension | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleAndDimension | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleAndDimensionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleAndDimensionOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleAndNotCostCategory {
}
export declare function dataAwsCeCostCategoryRuleRuleAndNotCostCategoryToTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndNotCostCategory): any;
export declare function dataAwsCeCostCategoryRuleRuleAndNotCostCategoryToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndNotCostCategory): any;
export declare class DataAwsCeCostCategoryRuleRuleAndNotCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleAndNotCostCategory | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleAndNotCostCategory | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleAndNotCostCategoryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleAndNotCostCategoryOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleAndNotDimension {
}
export declare function dataAwsCeCostCategoryRuleRuleAndNotDimensionToTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndNotDimension): any;
export declare function dataAwsCeCostCategoryRuleRuleAndNotDimensionToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndNotDimension): any;
export declare class DataAwsCeCostCategoryRuleRuleAndNotDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleAndNotDimension | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleAndNotDimension | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleAndNotDimensionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleAndNotDimensionOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleAndNotTags {
}
export declare function dataAwsCeCostCategoryRuleRuleAndNotTagsToTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndNotTags): any;
export declare function dataAwsCeCostCategoryRuleRuleAndNotTagsToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndNotTags): any;
export declare class DataAwsCeCostCategoryRuleRuleAndNotTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleAndNotTags | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleAndNotTags | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleAndNotTagsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleAndNotTagsOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleAndNot {
}
export declare function dataAwsCeCostCategoryRuleRuleAndNotToTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndNot): any;
export declare function dataAwsCeCostCategoryRuleRuleAndNotToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndNot): any;
export declare class DataAwsCeCostCategoryRuleRuleAndNotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleAndNot | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleAndNot | undefined);
    private _costCategory;
    get costCategory(): DataAwsCeCostCategoryRuleRuleAndNotCostCategoryList;
    private _dimension;
    get dimension(): DataAwsCeCostCategoryRuleRuleAndNotDimensionList;
    private _tags;
    get tags(): DataAwsCeCostCategoryRuleRuleAndNotTagsList;
}
export declare class DataAwsCeCostCategoryRuleRuleAndNotList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleAndNotOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleAndOrCostCategory {
}
export declare function dataAwsCeCostCategoryRuleRuleAndOrCostCategoryToTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndOrCostCategory): any;
export declare function dataAwsCeCostCategoryRuleRuleAndOrCostCategoryToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndOrCostCategory): any;
export declare class DataAwsCeCostCategoryRuleRuleAndOrCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleAndOrCostCategory | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleAndOrCostCategory | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleAndOrCostCategoryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleAndOrCostCategoryOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleAndOrDimension {
}
export declare function dataAwsCeCostCategoryRuleRuleAndOrDimensionToTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndOrDimension): any;
export declare function dataAwsCeCostCategoryRuleRuleAndOrDimensionToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndOrDimension): any;
export declare class DataAwsCeCostCategoryRuleRuleAndOrDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleAndOrDimension | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleAndOrDimension | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleAndOrDimensionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleAndOrDimensionOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleAndOrTags {
}
export declare function dataAwsCeCostCategoryRuleRuleAndOrTagsToTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndOrTags): any;
export declare function dataAwsCeCostCategoryRuleRuleAndOrTagsToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndOrTags): any;
export declare class DataAwsCeCostCategoryRuleRuleAndOrTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleAndOrTags | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleAndOrTags | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleAndOrTagsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleAndOrTagsOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleAndOr {
}
export declare function dataAwsCeCostCategoryRuleRuleAndOrToTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndOr): any;
export declare function dataAwsCeCostCategoryRuleRuleAndOrToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndOr): any;
export declare class DataAwsCeCostCategoryRuleRuleAndOrOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleAndOr | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleAndOr | undefined);
    private _costCategory;
    get costCategory(): DataAwsCeCostCategoryRuleRuleAndOrCostCategoryList;
    private _dimension;
    get dimension(): DataAwsCeCostCategoryRuleRuleAndOrDimensionList;
    private _tags;
    get tags(): DataAwsCeCostCategoryRuleRuleAndOrTagsList;
}
export declare class DataAwsCeCostCategoryRuleRuleAndOrList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleAndOrOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleAndTags {
}
export declare function dataAwsCeCostCategoryRuleRuleAndTagsToTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndTags): any;
export declare function dataAwsCeCostCategoryRuleRuleAndTagsToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleAndTags): any;
export declare class DataAwsCeCostCategoryRuleRuleAndTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleAndTags | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleAndTags | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleAndTagsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleAndTagsOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleAnd {
}
export declare function dataAwsCeCostCategoryRuleRuleAndToTerraform(struct?: DataAwsCeCostCategoryRuleRuleAnd): any;
export declare function dataAwsCeCostCategoryRuleRuleAndToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleAnd): any;
export declare class DataAwsCeCostCategoryRuleRuleAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleAnd | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleAnd | undefined);
    private _and;
    get and(): DataAwsCeCostCategoryRuleRuleAndAndList;
    private _costCategory;
    get costCategory(): DataAwsCeCostCategoryRuleRuleAndCostCategoryList;
    private _dimension;
    get dimension(): DataAwsCeCostCategoryRuleRuleAndDimensionList;
    private _not;
    get not(): DataAwsCeCostCategoryRuleRuleAndNotList;
    private _or;
    get or(): DataAwsCeCostCategoryRuleRuleAndOrList;
    private _tags;
    get tags(): DataAwsCeCostCategoryRuleRuleAndTagsList;
}
export declare class DataAwsCeCostCategoryRuleRuleAndList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleAndOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleCostCategory {
}
export declare function dataAwsCeCostCategoryRuleRuleCostCategoryToTerraform(struct?: DataAwsCeCostCategoryRuleRuleCostCategory): any;
export declare function dataAwsCeCostCategoryRuleRuleCostCategoryToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleCostCategory): any;
export declare class DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleCostCategory | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleCostCategory | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleCostCategoryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleCostCategoryOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleDimension {
}
export declare function dataAwsCeCostCategoryRuleRuleDimensionToTerraform(struct?: DataAwsCeCostCategoryRuleRuleDimension): any;
export declare function dataAwsCeCostCategoryRuleRuleDimensionToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleDimension): any;
export declare class DataAwsCeCostCategoryRuleRuleDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleDimension | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleDimension | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleDimensionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleDimensionOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleNotAndCostCategory {
}
export declare function dataAwsCeCostCategoryRuleRuleNotAndCostCategoryToTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotAndCostCategory): any;
export declare function dataAwsCeCostCategoryRuleRuleNotAndCostCategoryToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotAndCostCategory): any;
export declare class DataAwsCeCostCategoryRuleRuleNotAndCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleNotAndCostCategory | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleNotAndCostCategory | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleNotAndCostCategoryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleNotAndCostCategoryOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleNotAndDimension {
}
export declare function dataAwsCeCostCategoryRuleRuleNotAndDimensionToTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotAndDimension): any;
export declare function dataAwsCeCostCategoryRuleRuleNotAndDimensionToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotAndDimension): any;
export declare class DataAwsCeCostCategoryRuleRuleNotAndDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleNotAndDimension | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleNotAndDimension | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleNotAndDimensionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleNotAndDimensionOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleNotAndTags {
}
export declare function dataAwsCeCostCategoryRuleRuleNotAndTagsToTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotAndTags): any;
export declare function dataAwsCeCostCategoryRuleRuleNotAndTagsToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotAndTags): any;
export declare class DataAwsCeCostCategoryRuleRuleNotAndTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleNotAndTags | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleNotAndTags | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleNotAndTagsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleNotAndTagsOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleNotAnd {
}
export declare function dataAwsCeCostCategoryRuleRuleNotAndToTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotAnd): any;
export declare function dataAwsCeCostCategoryRuleRuleNotAndToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotAnd): any;
export declare class DataAwsCeCostCategoryRuleRuleNotAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleNotAnd | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleNotAnd | undefined);
    private _costCategory;
    get costCategory(): DataAwsCeCostCategoryRuleRuleNotAndCostCategoryList;
    private _dimension;
    get dimension(): DataAwsCeCostCategoryRuleRuleNotAndDimensionList;
    private _tags;
    get tags(): DataAwsCeCostCategoryRuleRuleNotAndTagsList;
}
export declare class DataAwsCeCostCategoryRuleRuleNotAndList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleNotAndOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleNotCostCategory {
}
export declare function dataAwsCeCostCategoryRuleRuleNotCostCategoryToTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotCostCategory): any;
export declare function dataAwsCeCostCategoryRuleRuleNotCostCategoryToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotCostCategory): any;
export declare class DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleNotCostCategory | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleNotCostCategory | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleNotCostCategoryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleNotCostCategoryOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleNotDimension {
}
export declare function dataAwsCeCostCategoryRuleRuleNotDimensionToTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotDimension): any;
export declare function dataAwsCeCostCategoryRuleRuleNotDimensionToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotDimension): any;
export declare class DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleNotDimension | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleNotDimension | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleNotDimensionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleNotDimensionOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleNotNotCostCategory {
}
export declare function dataAwsCeCostCategoryRuleRuleNotNotCostCategoryToTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotNotCostCategory): any;
export declare function dataAwsCeCostCategoryRuleRuleNotNotCostCategoryToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotNotCostCategory): any;
export declare class DataAwsCeCostCategoryRuleRuleNotNotCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleNotNotCostCategory | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleNotNotCostCategory | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleNotNotCostCategoryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleNotNotCostCategoryOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleNotNotDimension {
}
export declare function dataAwsCeCostCategoryRuleRuleNotNotDimensionToTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotNotDimension): any;
export declare function dataAwsCeCostCategoryRuleRuleNotNotDimensionToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotNotDimension): any;
export declare class DataAwsCeCostCategoryRuleRuleNotNotDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleNotNotDimension | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleNotNotDimension | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleNotNotDimensionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleNotNotDimensionOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleNotNotTags {
}
export declare function dataAwsCeCostCategoryRuleRuleNotNotTagsToTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotNotTags): any;
export declare function dataAwsCeCostCategoryRuleRuleNotNotTagsToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotNotTags): any;
export declare class DataAwsCeCostCategoryRuleRuleNotNotTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleNotNotTags | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleNotNotTags | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleNotNotTagsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleNotNotTagsOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleNotNot {
}
export declare function dataAwsCeCostCategoryRuleRuleNotNotToTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotNot): any;
export declare function dataAwsCeCostCategoryRuleRuleNotNotToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotNot): any;
export declare class DataAwsCeCostCategoryRuleRuleNotNotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleNotNot | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleNotNot | undefined);
    private _costCategory;
    get costCategory(): DataAwsCeCostCategoryRuleRuleNotNotCostCategoryList;
    private _dimension;
    get dimension(): DataAwsCeCostCategoryRuleRuleNotNotDimensionList;
    private _tags;
    get tags(): DataAwsCeCostCategoryRuleRuleNotNotTagsList;
}
export declare class DataAwsCeCostCategoryRuleRuleNotNotList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleNotNotOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleNotOrCostCategory {
}
export declare function dataAwsCeCostCategoryRuleRuleNotOrCostCategoryToTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotOrCostCategory): any;
export declare function dataAwsCeCostCategoryRuleRuleNotOrCostCategoryToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotOrCostCategory): any;
export declare class DataAwsCeCostCategoryRuleRuleNotOrCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleNotOrCostCategory | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleNotOrCostCategory | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleNotOrCostCategoryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleNotOrCostCategoryOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleNotOrDimension {
}
export declare function dataAwsCeCostCategoryRuleRuleNotOrDimensionToTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotOrDimension): any;
export declare function dataAwsCeCostCategoryRuleRuleNotOrDimensionToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotOrDimension): any;
export declare class DataAwsCeCostCategoryRuleRuleNotOrDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleNotOrDimension | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleNotOrDimension | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleNotOrDimensionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleNotOrDimensionOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleNotOrTags {
}
export declare function dataAwsCeCostCategoryRuleRuleNotOrTagsToTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotOrTags): any;
export declare function dataAwsCeCostCategoryRuleRuleNotOrTagsToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotOrTags): any;
export declare class DataAwsCeCostCategoryRuleRuleNotOrTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleNotOrTags | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleNotOrTags | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleNotOrTagsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleNotOrTagsOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleNotOr {
}
export declare function dataAwsCeCostCategoryRuleRuleNotOrToTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotOr): any;
export declare function dataAwsCeCostCategoryRuleRuleNotOrToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotOr): any;
export declare class DataAwsCeCostCategoryRuleRuleNotOrOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleNotOr | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleNotOr | undefined);
    private _costCategory;
    get costCategory(): DataAwsCeCostCategoryRuleRuleNotOrCostCategoryList;
    private _dimension;
    get dimension(): DataAwsCeCostCategoryRuleRuleNotOrDimensionList;
    private _tags;
    get tags(): DataAwsCeCostCategoryRuleRuleNotOrTagsList;
}
export declare class DataAwsCeCostCategoryRuleRuleNotOrList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleNotOrOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleNotTags {
}
export declare function dataAwsCeCostCategoryRuleRuleNotTagsToTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotTags): any;
export declare function dataAwsCeCostCategoryRuleRuleNotTagsToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleNotTags): any;
export declare class DataAwsCeCostCategoryRuleRuleNotTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleNotTags | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleNotTags | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleNotTagsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleNotTagsOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleNot {
}
export declare function dataAwsCeCostCategoryRuleRuleNotToTerraform(struct?: DataAwsCeCostCategoryRuleRuleNot): any;
export declare function dataAwsCeCostCategoryRuleRuleNotToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleNot): any;
export declare class DataAwsCeCostCategoryRuleRuleNotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleNot | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleNot | undefined);
    private _and;
    get and(): DataAwsCeCostCategoryRuleRuleNotAndList;
    private _costCategory;
    get costCategory(): DataAwsCeCostCategoryRuleRuleNotCostCategoryList;
    private _dimension;
    get dimension(): DataAwsCeCostCategoryRuleRuleNotDimensionList;
    private _not;
    get not(): DataAwsCeCostCategoryRuleRuleNotNotList;
    private _or;
    get or(): DataAwsCeCostCategoryRuleRuleNotOrList;
    private _tags;
    get tags(): DataAwsCeCostCategoryRuleRuleNotTagsList;
}
export declare class DataAwsCeCostCategoryRuleRuleNotList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleNotOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleOrAndCostCategory {
}
export declare function dataAwsCeCostCategoryRuleRuleOrAndCostCategoryToTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrAndCostCategory): any;
export declare function dataAwsCeCostCategoryRuleRuleOrAndCostCategoryToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrAndCostCategory): any;
export declare class DataAwsCeCostCategoryRuleRuleOrAndCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleOrAndCostCategory | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleOrAndCostCategory | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleOrAndCostCategoryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOrAndCostCategoryOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleOrAndDimension {
}
export declare function dataAwsCeCostCategoryRuleRuleOrAndDimensionToTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrAndDimension): any;
export declare function dataAwsCeCostCategoryRuleRuleOrAndDimensionToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrAndDimension): any;
export declare class DataAwsCeCostCategoryRuleRuleOrAndDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleOrAndDimension | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleOrAndDimension | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleOrAndDimensionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOrAndDimensionOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleOrAndTags {
}
export declare function dataAwsCeCostCategoryRuleRuleOrAndTagsToTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrAndTags): any;
export declare function dataAwsCeCostCategoryRuleRuleOrAndTagsToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrAndTags): any;
export declare class DataAwsCeCostCategoryRuleRuleOrAndTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleOrAndTags | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleOrAndTags | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleOrAndTagsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOrAndTagsOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleOrAnd {
}
export declare function dataAwsCeCostCategoryRuleRuleOrAndToTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrAnd): any;
export declare function dataAwsCeCostCategoryRuleRuleOrAndToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrAnd): any;
export declare class DataAwsCeCostCategoryRuleRuleOrAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleOrAnd | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleOrAnd | undefined);
    private _costCategory;
    get costCategory(): DataAwsCeCostCategoryRuleRuleOrAndCostCategoryList;
    private _dimension;
    get dimension(): DataAwsCeCostCategoryRuleRuleOrAndDimensionList;
    private _tags;
    get tags(): DataAwsCeCostCategoryRuleRuleOrAndTagsList;
}
export declare class DataAwsCeCostCategoryRuleRuleOrAndList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOrAndOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleOrCostCategory {
}
export declare function dataAwsCeCostCategoryRuleRuleOrCostCategoryToTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrCostCategory): any;
export declare function dataAwsCeCostCategoryRuleRuleOrCostCategoryToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrCostCategory): any;
export declare class DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleOrCostCategory | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleOrCostCategory | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleOrCostCategoryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOrCostCategoryOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleOrDimension {
}
export declare function dataAwsCeCostCategoryRuleRuleOrDimensionToTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrDimension): any;
export declare function dataAwsCeCostCategoryRuleRuleOrDimensionToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrDimension): any;
export declare class DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleOrDimension | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleOrDimension | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleOrDimensionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOrDimensionOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleOrNotCostCategory {
}
export declare function dataAwsCeCostCategoryRuleRuleOrNotCostCategoryToTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrNotCostCategory): any;
export declare function dataAwsCeCostCategoryRuleRuleOrNotCostCategoryToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrNotCostCategory): any;
export declare class DataAwsCeCostCategoryRuleRuleOrNotCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleOrNotCostCategory | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleOrNotCostCategory | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleOrNotCostCategoryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOrNotCostCategoryOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleOrNotDimension {
}
export declare function dataAwsCeCostCategoryRuleRuleOrNotDimensionToTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrNotDimension): any;
export declare function dataAwsCeCostCategoryRuleRuleOrNotDimensionToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrNotDimension): any;
export declare class DataAwsCeCostCategoryRuleRuleOrNotDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleOrNotDimension | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleOrNotDimension | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleOrNotDimensionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOrNotDimensionOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleOrNotTags {
}
export declare function dataAwsCeCostCategoryRuleRuleOrNotTagsToTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrNotTags): any;
export declare function dataAwsCeCostCategoryRuleRuleOrNotTagsToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrNotTags): any;
export declare class DataAwsCeCostCategoryRuleRuleOrNotTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleOrNotTags | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleOrNotTags | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleOrNotTagsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOrNotTagsOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleOrNot {
}
export declare function dataAwsCeCostCategoryRuleRuleOrNotToTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrNot): any;
export declare function dataAwsCeCostCategoryRuleRuleOrNotToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrNot): any;
export declare class DataAwsCeCostCategoryRuleRuleOrNotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleOrNot | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleOrNot | undefined);
    private _costCategory;
    get costCategory(): DataAwsCeCostCategoryRuleRuleOrNotCostCategoryList;
    private _dimension;
    get dimension(): DataAwsCeCostCategoryRuleRuleOrNotDimensionList;
    private _tags;
    get tags(): DataAwsCeCostCategoryRuleRuleOrNotTagsList;
}
export declare class DataAwsCeCostCategoryRuleRuleOrNotList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOrNotOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleOrOrCostCategory {
}
export declare function dataAwsCeCostCategoryRuleRuleOrOrCostCategoryToTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrOrCostCategory): any;
export declare function dataAwsCeCostCategoryRuleRuleOrOrCostCategoryToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrOrCostCategory): any;
export declare class DataAwsCeCostCategoryRuleRuleOrOrCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleOrOrCostCategory | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleOrOrCostCategory | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleOrOrCostCategoryList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOrOrCostCategoryOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleOrOrDimension {
}
export declare function dataAwsCeCostCategoryRuleRuleOrOrDimensionToTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrOrDimension): any;
export declare function dataAwsCeCostCategoryRuleRuleOrOrDimensionToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrOrDimension): any;
export declare class DataAwsCeCostCategoryRuleRuleOrOrDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleOrOrDimension | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleOrOrDimension | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleOrOrDimensionList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOrOrDimensionOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleOrOrTags {
}
export declare function dataAwsCeCostCategoryRuleRuleOrOrTagsToTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrOrTags): any;
export declare function dataAwsCeCostCategoryRuleRuleOrOrTagsToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrOrTags): any;
export declare class DataAwsCeCostCategoryRuleRuleOrOrTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleOrOrTags | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleOrOrTags | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleOrOrTagsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOrOrTagsOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleOrOr {
}
export declare function dataAwsCeCostCategoryRuleRuleOrOrToTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrOr): any;
export declare function dataAwsCeCostCategoryRuleRuleOrOrToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrOr): any;
export declare class DataAwsCeCostCategoryRuleRuleOrOrOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleOrOr | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleOrOr | undefined);
    private _costCategory;
    get costCategory(): DataAwsCeCostCategoryRuleRuleOrOrCostCategoryList;
    private _dimension;
    get dimension(): DataAwsCeCostCategoryRuleRuleOrOrDimensionList;
    private _tags;
    get tags(): DataAwsCeCostCategoryRuleRuleOrOrTagsList;
}
export declare class DataAwsCeCostCategoryRuleRuleOrOrList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOrOrOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleOrTags {
}
export declare function dataAwsCeCostCategoryRuleRuleOrTagsToTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrTags): any;
export declare function dataAwsCeCostCategoryRuleRuleOrTagsToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleOrTags): any;
export declare class DataAwsCeCostCategoryRuleRuleOrTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleOrTags | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleOrTags | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleOrTagsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOrTagsOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleOr {
}
export declare function dataAwsCeCostCategoryRuleRuleOrToTerraform(struct?: DataAwsCeCostCategoryRuleRuleOr): any;
export declare function dataAwsCeCostCategoryRuleRuleOrToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleOr): any;
export declare class DataAwsCeCostCategoryRuleRuleOrOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleOr | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleOr | undefined);
    private _and;
    get and(): DataAwsCeCostCategoryRuleRuleOrAndList;
    private _costCategory;
    get costCategory(): DataAwsCeCostCategoryRuleRuleOrCostCategoryList;
    private _dimension;
    get dimension(): DataAwsCeCostCategoryRuleRuleOrDimensionList;
    private _not;
    get not(): DataAwsCeCostCategoryRuleRuleOrNotList;
    private _or;
    get or(): DataAwsCeCostCategoryRuleRuleOrOrList;
    private _tags;
    get tags(): DataAwsCeCostCategoryRuleRuleOrTagsList;
}
export declare class DataAwsCeCostCategoryRuleRuleOrList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOrOutputReference;
}
export interface DataAwsCeCostCategoryRuleRuleTags {
}
export declare function dataAwsCeCostCategoryRuleRuleTagsToTerraform(struct?: DataAwsCeCostCategoryRuleRuleTags): any;
export declare function dataAwsCeCostCategoryRuleRuleTagsToHclTerraform(struct?: DataAwsCeCostCategoryRuleRuleTags): any;
export declare class DataAwsCeCostCategoryRuleRuleTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRuleTags | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRuleTags | undefined);
    get key(): string;
    get matchOptions(): string[];
    get values(): string[];
}
export declare class DataAwsCeCostCategoryRuleRuleTagsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleTagsOutputReference;
}
export interface DataAwsCeCostCategoryRuleRule {
}
export declare function dataAwsCeCostCategoryRuleRuleToTerraform(struct?: DataAwsCeCostCategoryRuleRule): any;
export declare function dataAwsCeCostCategoryRuleRuleToHclTerraform(struct?: DataAwsCeCostCategoryRuleRule): any;
export declare class DataAwsCeCostCategoryRuleRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRuleRule | undefined;
    set internalValue(value: DataAwsCeCostCategoryRuleRule | undefined);
    private _and;
    get and(): DataAwsCeCostCategoryRuleRuleAndList;
    private _costCategory;
    get costCategory(): DataAwsCeCostCategoryRuleRuleCostCategoryList;
    private _dimension;
    get dimension(): DataAwsCeCostCategoryRuleRuleDimensionList;
    private _not;
    get not(): DataAwsCeCostCategoryRuleRuleNotList;
    private _or;
    get or(): DataAwsCeCostCategoryRuleRuleOrList;
    private _tags;
    get tags(): DataAwsCeCostCategoryRuleRuleTagsList;
}
export declare class DataAwsCeCostCategoryRuleRuleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleRuleOutputReference;
}
export interface DataAwsCeCostCategoryRule {
}
export declare function dataAwsCeCostCategoryRuleToTerraform(struct?: DataAwsCeCostCategoryRule): any;
export declare function dataAwsCeCostCategoryRuleToHclTerraform(struct?: DataAwsCeCostCategoryRule): any;
export declare class DataAwsCeCostCategoryRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategoryRule | undefined;
    set internalValue(value: DataAwsCeCostCategoryRule | undefined);
    private _inheritedValue;
    get inheritedValue(): DataAwsCeCostCategoryRuleInheritedValueList;
    private _rule;
    get rule(): DataAwsCeCostCategoryRuleRuleList;
    get type(): string;
    get value(): string;
}
export declare class DataAwsCeCostCategoryRuleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategoryRuleOutputReference;
}
export interface DataAwsCeCostCategorySplitChargeRuleParameter {
}
export declare function dataAwsCeCostCategorySplitChargeRuleParameterToTerraform(struct?: DataAwsCeCostCategorySplitChargeRuleParameter): any;
export declare function dataAwsCeCostCategorySplitChargeRuleParameterToHclTerraform(struct?: DataAwsCeCostCategorySplitChargeRuleParameter): any;
export declare class DataAwsCeCostCategorySplitChargeRuleParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategorySplitChargeRuleParameter | undefined;
    set internalValue(value: DataAwsCeCostCategorySplitChargeRuleParameter | undefined);
    get type(): string;
    get values(): string[];
}
export declare class DataAwsCeCostCategorySplitChargeRuleParameterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategorySplitChargeRuleParameterOutputReference;
}
export interface DataAwsCeCostCategorySplitChargeRule {
}
export declare function dataAwsCeCostCategorySplitChargeRuleToTerraform(struct?: DataAwsCeCostCategorySplitChargeRule): any;
export declare function dataAwsCeCostCategorySplitChargeRuleToHclTerraform(struct?: DataAwsCeCostCategorySplitChargeRule): any;
export declare class DataAwsCeCostCategorySplitChargeRuleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsCeCostCategorySplitChargeRule | undefined;
    set internalValue(value: DataAwsCeCostCategorySplitChargeRule | undefined);
    get method(): string;
    private _parameter;
    get parameter(): DataAwsCeCostCategorySplitChargeRuleParameterList;
    get source(): string;
    get targets(): string[];
}
export declare class DataAwsCeCostCategorySplitChargeRuleList extends cdktf.ComplexList {
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
    get(index: number): DataAwsCeCostCategorySplitChargeRuleOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ce_cost_category aws_ce_cost_category}
*/
export declare class DataAwsCeCostCategory extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ce_cost_category";
    /**
    * Generates CDKTF code for importing a DataAwsCeCostCategory resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCeCostCategory to import
    * @param importFromId The id of the existing DataAwsCeCostCategory that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ce_cost_category#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCeCostCategory to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/ce_cost_category aws_ce_cost_category} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCeCostCategoryConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCeCostCategoryConfig);
    private _costCategoryArn?;
    get costCategoryArn(): string;
    set costCategoryArn(value: string);
    get costCategoryArnInput(): string | undefined;
    get defaultValue(): string;
    get effectiveEnd(): string;
    get effectiveStart(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get name(): string;
    private _rule;
    get rule(): DataAwsCeCostCategoryRuleList;
    get ruleVersion(): string;
    private _splitChargeRule;
    get splitChargeRule(): DataAwsCeCostCategorySplitChargeRuleList;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
