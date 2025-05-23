/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CeAnomalySubscriptionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#account_id CeAnomalySubscription#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#frequency CeAnomalySubscription#frequency}
    */
    readonly frequency: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#id CeAnomalySubscription#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#monitor_arn_list CeAnomalySubscription#monitor_arn_list}
    */
    readonly monitorArnList: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#name CeAnomalySubscription#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#tags CeAnomalySubscription#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#tags_all CeAnomalySubscription#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * subscriber block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#subscriber CeAnomalySubscription#subscriber}
    */
    readonly subscriber: CeAnomalySubscriptionSubscriber[] | cdktf.IResolvable;
    /**
    * threshold_expression block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#threshold_expression CeAnomalySubscription#threshold_expression}
    */
    readonly thresholdExpression?: CeAnomalySubscriptionThresholdExpression;
}
export interface CeAnomalySubscriptionSubscriber {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#address CeAnomalySubscription#address}
    */
    readonly address: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#type CeAnomalySubscription#type}
    */
    readonly type: string;
}
export declare function ceAnomalySubscriptionSubscriberToTerraform(struct?: CeAnomalySubscriptionSubscriber | cdktf.IResolvable): any;
export declare function ceAnomalySubscriptionSubscriberToHclTerraform(struct?: CeAnomalySubscriptionSubscriber | cdktf.IResolvable): any;
export declare class CeAnomalySubscriptionSubscriberOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CeAnomalySubscriptionSubscriber | cdktf.IResolvable | undefined;
    set internalValue(value: CeAnomalySubscriptionSubscriber | cdktf.IResolvable | undefined);
    private _address?;
    get address(): string;
    set address(value: string);
    get addressInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class CeAnomalySubscriptionSubscriberList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CeAnomalySubscriptionSubscriber[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CeAnomalySubscriptionSubscriberOutputReference;
}
export interface CeAnomalySubscriptionThresholdExpressionAndCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#key CeAnomalySubscription#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#values CeAnomalySubscription#values}
    */
    readonly values?: string[];
}
export declare function ceAnomalySubscriptionThresholdExpressionAndCostCategoryToTerraform(struct?: CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference | CeAnomalySubscriptionThresholdExpressionAndCostCategory): any;
export declare function ceAnomalySubscriptionThresholdExpressionAndCostCategoryToHclTerraform(struct?: CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference | CeAnomalySubscriptionThresholdExpressionAndCostCategory): any;
export declare class CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeAnomalySubscriptionThresholdExpressionAndCostCategory | undefined;
    set internalValue(value: CeAnomalySubscriptionThresholdExpressionAndCostCategory | undefined);
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
export interface CeAnomalySubscriptionThresholdExpressionAndDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#key CeAnomalySubscription#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#values CeAnomalySubscription#values}
    */
    readonly values?: string[];
}
export declare function ceAnomalySubscriptionThresholdExpressionAndDimensionToTerraform(struct?: CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference | CeAnomalySubscriptionThresholdExpressionAndDimension): any;
export declare function ceAnomalySubscriptionThresholdExpressionAndDimensionToHclTerraform(struct?: CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference | CeAnomalySubscriptionThresholdExpressionAndDimension): any;
export declare class CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeAnomalySubscriptionThresholdExpressionAndDimension | undefined;
    set internalValue(value: CeAnomalySubscriptionThresholdExpressionAndDimension | undefined);
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
export interface CeAnomalySubscriptionThresholdExpressionAndTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#key CeAnomalySubscription#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#values CeAnomalySubscription#values}
    */
    readonly values?: string[];
}
export declare function ceAnomalySubscriptionThresholdExpressionAndTagsToTerraform(struct?: CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference | CeAnomalySubscriptionThresholdExpressionAndTags): any;
export declare function ceAnomalySubscriptionThresholdExpressionAndTagsToHclTerraform(struct?: CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference | CeAnomalySubscriptionThresholdExpressionAndTags): any;
export declare class CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeAnomalySubscriptionThresholdExpressionAndTags | undefined;
    set internalValue(value: CeAnomalySubscriptionThresholdExpressionAndTags | undefined);
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
export interface CeAnomalySubscriptionThresholdExpressionAnd {
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}
    */
    readonly costCategory?: CeAnomalySubscriptionThresholdExpressionAndCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}
    */
    readonly dimension?: CeAnomalySubscriptionThresholdExpressionAndDimension;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#tags CeAnomalySubscription#tags}
    */
    readonly tags?: CeAnomalySubscriptionThresholdExpressionAndTags;
}
export declare function ceAnomalySubscriptionThresholdExpressionAndToTerraform(struct?: CeAnomalySubscriptionThresholdExpressionAnd | cdktf.IResolvable): any;
export declare function ceAnomalySubscriptionThresholdExpressionAndToHclTerraform(struct?: CeAnomalySubscriptionThresholdExpressionAnd | cdktf.IResolvable): any;
export declare class CeAnomalySubscriptionThresholdExpressionAndOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CeAnomalySubscriptionThresholdExpressionAnd | cdktf.IResolvable | undefined;
    set internalValue(value: CeAnomalySubscriptionThresholdExpressionAnd | cdktf.IResolvable | undefined);
    private _costCategory;
    get costCategory(): CeAnomalySubscriptionThresholdExpressionAndCostCategoryOutputReference;
    putCostCategory(value: CeAnomalySubscriptionThresholdExpressionAndCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeAnomalySubscriptionThresholdExpressionAndCostCategory | undefined;
    private _dimension;
    get dimension(): CeAnomalySubscriptionThresholdExpressionAndDimensionOutputReference;
    putDimension(value: CeAnomalySubscriptionThresholdExpressionAndDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeAnomalySubscriptionThresholdExpressionAndDimension | undefined;
    private _tags;
    get tags(): CeAnomalySubscriptionThresholdExpressionAndTagsOutputReference;
    putTags(value: CeAnomalySubscriptionThresholdExpressionAndTags): void;
    resetTags(): void;
    get tagsInput(): CeAnomalySubscriptionThresholdExpressionAndTags | undefined;
}
export declare class CeAnomalySubscriptionThresholdExpressionAndList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CeAnomalySubscriptionThresholdExpressionAnd[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CeAnomalySubscriptionThresholdExpressionAndOutputReference;
}
export interface CeAnomalySubscriptionThresholdExpressionCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#key CeAnomalySubscription#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#values CeAnomalySubscription#values}
    */
    readonly values?: string[];
}
export declare function ceAnomalySubscriptionThresholdExpressionCostCategoryToTerraform(struct?: CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference | CeAnomalySubscriptionThresholdExpressionCostCategory): any;
export declare function ceAnomalySubscriptionThresholdExpressionCostCategoryToHclTerraform(struct?: CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference | CeAnomalySubscriptionThresholdExpressionCostCategory): any;
export declare class CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeAnomalySubscriptionThresholdExpressionCostCategory | undefined;
    set internalValue(value: CeAnomalySubscriptionThresholdExpressionCostCategory | undefined);
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
export interface CeAnomalySubscriptionThresholdExpressionDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#key CeAnomalySubscription#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#values CeAnomalySubscription#values}
    */
    readonly values?: string[];
}
export declare function ceAnomalySubscriptionThresholdExpressionDimensionToTerraform(struct?: CeAnomalySubscriptionThresholdExpressionDimensionOutputReference | CeAnomalySubscriptionThresholdExpressionDimension): any;
export declare function ceAnomalySubscriptionThresholdExpressionDimensionToHclTerraform(struct?: CeAnomalySubscriptionThresholdExpressionDimensionOutputReference | CeAnomalySubscriptionThresholdExpressionDimension): any;
export declare class CeAnomalySubscriptionThresholdExpressionDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeAnomalySubscriptionThresholdExpressionDimension | undefined;
    set internalValue(value: CeAnomalySubscriptionThresholdExpressionDimension | undefined);
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
export interface CeAnomalySubscriptionThresholdExpressionNotCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#key CeAnomalySubscription#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#values CeAnomalySubscription#values}
    */
    readonly values?: string[];
}
export declare function ceAnomalySubscriptionThresholdExpressionNotCostCategoryToTerraform(struct?: CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference | CeAnomalySubscriptionThresholdExpressionNotCostCategory): any;
export declare function ceAnomalySubscriptionThresholdExpressionNotCostCategoryToHclTerraform(struct?: CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference | CeAnomalySubscriptionThresholdExpressionNotCostCategory): any;
export declare class CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeAnomalySubscriptionThresholdExpressionNotCostCategory | undefined;
    set internalValue(value: CeAnomalySubscriptionThresholdExpressionNotCostCategory | undefined);
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
export interface CeAnomalySubscriptionThresholdExpressionNotDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#key CeAnomalySubscription#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#values CeAnomalySubscription#values}
    */
    readonly values?: string[];
}
export declare function ceAnomalySubscriptionThresholdExpressionNotDimensionToTerraform(struct?: CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference | CeAnomalySubscriptionThresholdExpressionNotDimension): any;
export declare function ceAnomalySubscriptionThresholdExpressionNotDimensionToHclTerraform(struct?: CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference | CeAnomalySubscriptionThresholdExpressionNotDimension): any;
export declare class CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeAnomalySubscriptionThresholdExpressionNotDimension | undefined;
    set internalValue(value: CeAnomalySubscriptionThresholdExpressionNotDimension | undefined);
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
export interface CeAnomalySubscriptionThresholdExpressionNotTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#key CeAnomalySubscription#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#values CeAnomalySubscription#values}
    */
    readonly values?: string[];
}
export declare function ceAnomalySubscriptionThresholdExpressionNotTagsToTerraform(struct?: CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference | CeAnomalySubscriptionThresholdExpressionNotTags): any;
export declare function ceAnomalySubscriptionThresholdExpressionNotTagsToHclTerraform(struct?: CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference | CeAnomalySubscriptionThresholdExpressionNotTags): any;
export declare class CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeAnomalySubscriptionThresholdExpressionNotTags | undefined;
    set internalValue(value: CeAnomalySubscriptionThresholdExpressionNotTags | undefined);
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
export interface CeAnomalySubscriptionThresholdExpressionNot {
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}
    */
    readonly costCategory?: CeAnomalySubscriptionThresholdExpressionNotCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}
    */
    readonly dimension?: CeAnomalySubscriptionThresholdExpressionNotDimension;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#tags CeAnomalySubscription#tags}
    */
    readonly tags?: CeAnomalySubscriptionThresholdExpressionNotTags;
}
export declare function ceAnomalySubscriptionThresholdExpressionNotToTerraform(struct?: CeAnomalySubscriptionThresholdExpressionNotOutputReference | CeAnomalySubscriptionThresholdExpressionNot): any;
export declare function ceAnomalySubscriptionThresholdExpressionNotToHclTerraform(struct?: CeAnomalySubscriptionThresholdExpressionNotOutputReference | CeAnomalySubscriptionThresholdExpressionNot): any;
export declare class CeAnomalySubscriptionThresholdExpressionNotOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeAnomalySubscriptionThresholdExpressionNot | undefined;
    set internalValue(value: CeAnomalySubscriptionThresholdExpressionNot | undefined);
    private _costCategory;
    get costCategory(): CeAnomalySubscriptionThresholdExpressionNotCostCategoryOutputReference;
    putCostCategory(value: CeAnomalySubscriptionThresholdExpressionNotCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeAnomalySubscriptionThresholdExpressionNotCostCategory | undefined;
    private _dimension;
    get dimension(): CeAnomalySubscriptionThresholdExpressionNotDimensionOutputReference;
    putDimension(value: CeAnomalySubscriptionThresholdExpressionNotDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeAnomalySubscriptionThresholdExpressionNotDimension | undefined;
    private _tags;
    get tags(): CeAnomalySubscriptionThresholdExpressionNotTagsOutputReference;
    putTags(value: CeAnomalySubscriptionThresholdExpressionNotTags): void;
    resetTags(): void;
    get tagsInput(): CeAnomalySubscriptionThresholdExpressionNotTags | undefined;
}
export interface CeAnomalySubscriptionThresholdExpressionOrCostCategory {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#key CeAnomalySubscription#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#values CeAnomalySubscription#values}
    */
    readonly values?: string[];
}
export declare function ceAnomalySubscriptionThresholdExpressionOrCostCategoryToTerraform(struct?: CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference | CeAnomalySubscriptionThresholdExpressionOrCostCategory): any;
export declare function ceAnomalySubscriptionThresholdExpressionOrCostCategoryToHclTerraform(struct?: CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference | CeAnomalySubscriptionThresholdExpressionOrCostCategory): any;
export declare class CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeAnomalySubscriptionThresholdExpressionOrCostCategory | undefined;
    set internalValue(value: CeAnomalySubscriptionThresholdExpressionOrCostCategory | undefined);
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
export interface CeAnomalySubscriptionThresholdExpressionOrDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#key CeAnomalySubscription#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#values CeAnomalySubscription#values}
    */
    readonly values?: string[];
}
export declare function ceAnomalySubscriptionThresholdExpressionOrDimensionToTerraform(struct?: CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference | CeAnomalySubscriptionThresholdExpressionOrDimension): any;
export declare function ceAnomalySubscriptionThresholdExpressionOrDimensionToHclTerraform(struct?: CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference | CeAnomalySubscriptionThresholdExpressionOrDimension): any;
export declare class CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeAnomalySubscriptionThresholdExpressionOrDimension | undefined;
    set internalValue(value: CeAnomalySubscriptionThresholdExpressionOrDimension | undefined);
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
export interface CeAnomalySubscriptionThresholdExpressionOrTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#key CeAnomalySubscription#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#values CeAnomalySubscription#values}
    */
    readonly values?: string[];
}
export declare function ceAnomalySubscriptionThresholdExpressionOrTagsToTerraform(struct?: CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference | CeAnomalySubscriptionThresholdExpressionOrTags): any;
export declare function ceAnomalySubscriptionThresholdExpressionOrTagsToHclTerraform(struct?: CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference | CeAnomalySubscriptionThresholdExpressionOrTags): any;
export declare class CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeAnomalySubscriptionThresholdExpressionOrTags | undefined;
    set internalValue(value: CeAnomalySubscriptionThresholdExpressionOrTags | undefined);
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
export interface CeAnomalySubscriptionThresholdExpressionOr {
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}
    */
    readonly costCategory?: CeAnomalySubscriptionThresholdExpressionOrCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}
    */
    readonly dimension?: CeAnomalySubscriptionThresholdExpressionOrDimension;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#tags CeAnomalySubscription#tags}
    */
    readonly tags?: CeAnomalySubscriptionThresholdExpressionOrTags;
}
export declare function ceAnomalySubscriptionThresholdExpressionOrToTerraform(struct?: CeAnomalySubscriptionThresholdExpressionOr | cdktf.IResolvable): any;
export declare function ceAnomalySubscriptionThresholdExpressionOrToHclTerraform(struct?: CeAnomalySubscriptionThresholdExpressionOr | cdktf.IResolvable): any;
export declare class CeAnomalySubscriptionThresholdExpressionOrOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CeAnomalySubscriptionThresholdExpressionOr | cdktf.IResolvable | undefined;
    set internalValue(value: CeAnomalySubscriptionThresholdExpressionOr | cdktf.IResolvable | undefined);
    private _costCategory;
    get costCategory(): CeAnomalySubscriptionThresholdExpressionOrCostCategoryOutputReference;
    putCostCategory(value: CeAnomalySubscriptionThresholdExpressionOrCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeAnomalySubscriptionThresholdExpressionOrCostCategory | undefined;
    private _dimension;
    get dimension(): CeAnomalySubscriptionThresholdExpressionOrDimensionOutputReference;
    putDimension(value: CeAnomalySubscriptionThresholdExpressionOrDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeAnomalySubscriptionThresholdExpressionOrDimension | undefined;
    private _tags;
    get tags(): CeAnomalySubscriptionThresholdExpressionOrTagsOutputReference;
    putTags(value: CeAnomalySubscriptionThresholdExpressionOrTags): void;
    resetTags(): void;
    get tagsInput(): CeAnomalySubscriptionThresholdExpressionOrTags | undefined;
}
export declare class CeAnomalySubscriptionThresholdExpressionOrList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CeAnomalySubscriptionThresholdExpressionOr[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CeAnomalySubscriptionThresholdExpressionOrOutputReference;
}
export interface CeAnomalySubscriptionThresholdExpressionTags {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#key CeAnomalySubscription#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#match_options CeAnomalySubscription#match_options}
    */
    readonly matchOptions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#values CeAnomalySubscription#values}
    */
    readonly values?: string[];
}
export declare function ceAnomalySubscriptionThresholdExpressionTagsToTerraform(struct?: CeAnomalySubscriptionThresholdExpressionTagsOutputReference | CeAnomalySubscriptionThresholdExpressionTags): any;
export declare function ceAnomalySubscriptionThresholdExpressionTagsToHclTerraform(struct?: CeAnomalySubscriptionThresholdExpressionTagsOutputReference | CeAnomalySubscriptionThresholdExpressionTags): any;
export declare class CeAnomalySubscriptionThresholdExpressionTagsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeAnomalySubscriptionThresholdExpressionTags | undefined;
    set internalValue(value: CeAnomalySubscriptionThresholdExpressionTags | undefined);
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
export interface CeAnomalySubscriptionThresholdExpression {
    /**
    * and block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#and CeAnomalySubscription#and}
    */
    readonly and?: CeAnomalySubscriptionThresholdExpressionAnd[] | cdktf.IResolvable;
    /**
    * cost_category block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#cost_category CeAnomalySubscription#cost_category}
    */
    readonly costCategory?: CeAnomalySubscriptionThresholdExpressionCostCategory;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#dimension CeAnomalySubscription#dimension}
    */
    readonly dimension?: CeAnomalySubscriptionThresholdExpressionDimension;
    /**
    * not block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#not CeAnomalySubscription#not}
    */
    readonly not?: CeAnomalySubscriptionThresholdExpressionNot;
    /**
    * or block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#or CeAnomalySubscription#or}
    */
    readonly or?: CeAnomalySubscriptionThresholdExpressionOr[] | cdktf.IResolvable;
    /**
    * tags block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#tags CeAnomalySubscription#tags}
    */
    readonly tags?: CeAnomalySubscriptionThresholdExpressionTags;
}
export declare function ceAnomalySubscriptionThresholdExpressionToTerraform(struct?: CeAnomalySubscriptionThresholdExpressionOutputReference | CeAnomalySubscriptionThresholdExpression): any;
export declare function ceAnomalySubscriptionThresholdExpressionToHclTerraform(struct?: CeAnomalySubscriptionThresholdExpressionOutputReference | CeAnomalySubscriptionThresholdExpression): any;
export declare class CeAnomalySubscriptionThresholdExpressionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CeAnomalySubscriptionThresholdExpression | undefined;
    set internalValue(value: CeAnomalySubscriptionThresholdExpression | undefined);
    private _and;
    get and(): CeAnomalySubscriptionThresholdExpressionAndList;
    putAnd(value: CeAnomalySubscriptionThresholdExpressionAnd[] | cdktf.IResolvable): void;
    resetAnd(): void;
    get andInput(): cdktf.IResolvable | CeAnomalySubscriptionThresholdExpressionAnd[] | undefined;
    private _costCategory;
    get costCategory(): CeAnomalySubscriptionThresholdExpressionCostCategoryOutputReference;
    putCostCategory(value: CeAnomalySubscriptionThresholdExpressionCostCategory): void;
    resetCostCategory(): void;
    get costCategoryInput(): CeAnomalySubscriptionThresholdExpressionCostCategory | undefined;
    private _dimension;
    get dimension(): CeAnomalySubscriptionThresholdExpressionDimensionOutputReference;
    putDimension(value: CeAnomalySubscriptionThresholdExpressionDimension): void;
    resetDimension(): void;
    get dimensionInput(): CeAnomalySubscriptionThresholdExpressionDimension | undefined;
    private _not;
    get not(): CeAnomalySubscriptionThresholdExpressionNotOutputReference;
    putNot(value: CeAnomalySubscriptionThresholdExpressionNot): void;
    resetNot(): void;
    get notInput(): CeAnomalySubscriptionThresholdExpressionNot | undefined;
    private _or;
    get or(): CeAnomalySubscriptionThresholdExpressionOrList;
    putOr(value: CeAnomalySubscriptionThresholdExpressionOr[] | cdktf.IResolvable): void;
    resetOr(): void;
    get orInput(): cdktf.IResolvable | CeAnomalySubscriptionThresholdExpressionOr[] | undefined;
    private _tags;
    get tags(): CeAnomalySubscriptionThresholdExpressionTagsOutputReference;
    putTags(value: CeAnomalySubscriptionThresholdExpressionTags): void;
    resetTags(): void;
    get tagsInput(): CeAnomalySubscriptionThresholdExpressionTags | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription aws_ce_anomaly_subscription}
*/
export declare class CeAnomalySubscription extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ce_anomaly_subscription";
    /**
    * Generates CDKTF code for importing a CeAnomalySubscription resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CeAnomalySubscription to import
    * @param importFromId The id of the existing CeAnomalySubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CeAnomalySubscription to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ce_anomaly_subscription aws_ce_anomaly_subscription} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CeAnomalySubscriptionConfig
    */
    constructor(scope: Construct, id: string, config: CeAnomalySubscriptionConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get arn(): string;
    private _frequency?;
    get frequency(): string;
    set frequency(value: string);
    get frequencyInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _monitorArnList?;
    get monitorArnList(): string[];
    set monitorArnList(value: string[]);
    get monitorArnListInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _subscriber;
    get subscriber(): CeAnomalySubscriptionSubscriberList;
    putSubscriber(value: CeAnomalySubscriptionSubscriber[] | cdktf.IResolvable): void;
    get subscriberInput(): cdktf.IResolvable | CeAnomalySubscriptionSubscriber[] | undefined;
    private _thresholdExpression;
    get thresholdExpression(): CeAnomalySubscriptionThresholdExpressionOutputReference;
    putThresholdExpression(value: CeAnomalySubscriptionThresholdExpression): void;
    resetThresholdExpression(): void;
    get thresholdExpressionInput(): CeAnomalySubscriptionThresholdExpression | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
