/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface S3ControlStorageLensConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#account_id S3ControlStorageLensConfiguration#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#config_id S3ControlStorageLensConfiguration#config_id}
    */
    readonly configId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#id S3ControlStorageLensConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#tags S3ControlStorageLensConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#tags_all S3ControlStorageLensConfiguration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * storage_lens_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#storage_lens_configuration S3ControlStorageLensConfiguration#storage_lens_configuration}
    */
    readonly storageLensConfiguration: S3ControlStorageLensConfigurationStorageLensConfiguration;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetricsToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetricsToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#delimiter S3ControlStorageLensConfiguration#delimiter}
    */
    readonly delimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#max_depth S3ControlStorageLensConfiguration#max_depth}
    */
    readonly maxDepth?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#min_storage_bytes_percentage S3ControlStorageLensConfiguration#min_storage_bytes_percentage}
    */
    readonly minStorageBytesPercentage?: number;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria | undefined);
    private _delimiter?;
    get delimiter(): string;
    set delimiter(value: string);
    resetDelimiter(): void;
    get delimiterInput(): string | undefined;
    private _maxDepth?;
    get maxDepth(): number;
    set maxDepth(value: number);
    resetMaxDepth(): void;
    get maxDepthInput(): number | undefined;
    private _minStorageBytesPercentage?;
    get minStorageBytesPercentage(): number;
    set minStorageBytesPercentage(value: number);
    resetMinStorageBytesPercentage(): void;
    get minStorageBytesPercentageInput(): number | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * selection_criteria block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#selection_criteria S3ControlStorageLensConfiguration#selection_criteria}
    */
    readonly selectionCriteria?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _selectionCriteria;
    get selectionCriteria(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference;
    putSelectionCriteria(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria): void;
    resetSelectionCriteria(): void;
    get selectionCriteriaInput(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel {
    /**
    * storage_metrics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#storage_metrics S3ControlStorageLensConfiguration#storage_metrics}
    */
    readonly storageMetrics: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel | undefined);
    private _storageMetrics;
    get storageMetrics(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference;
    putStorageMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics): void;
    get storageMetricsInput(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel {
    /**
    * activity_metrics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#activity_metrics S3ControlStorageLensConfiguration#activity_metrics}
    */
    readonly activityMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics;
    /**
    * advanced_cost_optimization_metrics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#advanced_cost_optimization_metrics S3ControlStorageLensConfiguration#advanced_cost_optimization_metrics}
    */
    readonly advancedCostOptimizationMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics;
    /**
    * advanced_data_protection_metrics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#advanced_data_protection_metrics S3ControlStorageLensConfiguration#advanced_data_protection_metrics}
    */
    readonly advancedDataProtectionMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics;
    /**
    * detailed_status_code_metrics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#detailed_status_code_metrics S3ControlStorageLensConfiguration#detailed_status_code_metrics}
    */
    readonly detailedStatusCodeMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics;
    /**
    * prefix_level block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#prefix_level S3ControlStorageLensConfiguration#prefix_level}
    */
    readonly prefixLevel?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel | undefined);
    private _activityMetrics;
    get activityMetrics(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference;
    putActivityMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics): void;
    resetActivityMetrics(): void;
    get activityMetricsInput(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelActivityMetrics | undefined;
    private _advancedCostOptimizationMetrics;
    get advancedCostOptimizationMetrics(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference;
    putAdvancedCostOptimizationMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics): void;
    resetAdvancedCostOptimizationMetrics(): void;
    get advancedCostOptimizationMetricsInput(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics | undefined;
    private _advancedDataProtectionMetrics;
    get advancedDataProtectionMetrics(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference;
    putAdvancedDataProtectionMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics): void;
    resetAdvancedDataProtectionMetrics(): void;
    get advancedDataProtectionMetricsInput(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics | undefined;
    private _detailedStatusCodeMetrics;
    get detailedStatusCodeMetrics(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetricsOutputReference;
    putDetailedStatusCodeMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics): void;
    resetDetailedStatusCodeMetrics(): void;
    get detailedStatusCodeMetricsInput(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodeMetrics | undefined;
    private _prefixLevel;
    get prefixLevel(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference;
    putPrefixLevel(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel): void;
    resetPrefixLevel(): void;
    get prefixLevelInput(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelPrefixLevel | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetricsToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevel {
    /**
    * activity_metrics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#activity_metrics S3ControlStorageLensConfiguration#activity_metrics}
    */
    readonly activityMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics;
    /**
    * advanced_cost_optimization_metrics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#advanced_cost_optimization_metrics S3ControlStorageLensConfiguration#advanced_cost_optimization_metrics}
    */
    readonly advancedCostOptimizationMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics;
    /**
    * advanced_data_protection_metrics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#advanced_data_protection_metrics S3ControlStorageLensConfiguration#advanced_data_protection_metrics}
    */
    readonly advancedDataProtectionMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics;
    /**
    * bucket_level block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#bucket_level S3ControlStorageLensConfiguration#bucket_level}
    */
    readonly bucketLevel: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel;
    /**
    * detailed_status_code_metrics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#detailed_status_code_metrics S3ControlStorageLensConfiguration#detailed_status_code_metrics}
    */
    readonly detailedStatusCodeMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevel): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevel): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevel | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevel | undefined);
    private _activityMetrics;
    get activityMetrics(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetricsOutputReference;
    putActivityMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics): void;
    resetActivityMetrics(): void;
    get activityMetricsInput(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelActivityMetrics | undefined;
    private _advancedCostOptimizationMetrics;
    get advancedCostOptimizationMetrics(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference;
    putAdvancedCostOptimizationMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics): void;
    resetAdvancedCostOptimizationMetrics(): void;
    get advancedCostOptimizationMetricsInput(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics | undefined;
    private _advancedDataProtectionMetrics;
    get advancedDataProtectionMetrics(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference;
    putAdvancedDataProtectionMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics): void;
    resetAdvancedDataProtectionMetrics(): void;
    get advancedDataProtectionMetricsInput(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics | undefined;
    private _bucketLevel;
    get bucketLevel(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevelOutputReference;
    putBucketLevel(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel): void;
    get bucketLevelInput(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelBucketLevel | undefined;
    private _detailedStatusCodeMetrics;
    get detailedStatusCodeMetrics(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetricsOutputReference;
    putDetailedStatusCodeMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics): void;
    resetDetailedStatusCodeMetrics(): void;
    get detailedStatusCodeMetricsInput(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelDetailedStatusCodeMetrics | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrg {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#arn S3ControlStorageLensConfiguration#arn}
    */
    readonly arn: string;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAwsOrgToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrgOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrg): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationAwsOrgToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrgOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrg): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrgOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrg | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrg | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetricsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetricsToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetricsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#key_id S3ControlStorageLensConfiguration#key_id}
    */
    readonly keyId: string;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms | undefined);
    private _keyId?;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3 {
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3ToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3 | cdktf.IResolvable): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3ToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3 | cdktf.IResolvable): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3 | cdktf.IResolvable | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3 | cdktf.IResolvable | undefined);
}
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3OutputReference;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption {
    /**
    * sse_kms block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#sse_kms S3ControlStorageLensConfiguration#sse_kms}
    */
    readonly sseKms?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms;
    /**
    * sse_s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#sse_s3 S3ControlStorageLensConfiguration#sse_s3}
    */
    readonly sseS3?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3[] | cdktf.IResolvable;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption | undefined);
    private _sseKms;
    get sseKms(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKmsOutputReference;
    putSseKms(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms): void;
    resetSseKms(): void;
    get sseKmsInput(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseKms | undefined;
    private _sseS3;
    get sseS3(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3List;
    putSseS3(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3[] | cdktf.IResolvable): void;
    resetSseS3(): void;
    get sseS3Input(): cdktf.IResolvable | S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionSseS3[] | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#account_id S3ControlStorageLensConfiguration#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#arn S3ControlStorageLensConfiguration#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#format S3ControlStorageLensConfiguration#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#output_schema_version S3ControlStorageLensConfiguration#output_schema_version}
    */
    readonly outputSchemaVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#prefix S3ControlStorageLensConfiguration#prefix}
    */
    readonly prefix?: string;
    /**
    * encryption block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#encryption S3ControlStorageLensConfiguration#encryption}
    */
    readonly encryption?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination | undefined);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string | undefined;
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string | undefined;
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string | undefined;
    private _outputSchemaVersion?;
    get outputSchemaVersion(): string;
    set outputSchemaVersion(value: string);
    get outputSchemaVersionInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _encryption;
    get encryption(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference;
    putEncryption(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption): void;
    resetEncryption(): void;
    get encryptionInput(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationEncryption | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationDataExport {
    /**
    * cloud_watch_metrics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#cloud_watch_metrics S3ControlStorageLensConfiguration#cloud_watch_metrics}
    */
    readonly cloudWatchMetrics?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics;
    /**
    * s3_bucket_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#s3_bucket_destination S3ControlStorageLensConfiguration#s3_bucket_destination}
    */
    readonly s3BucketDestination?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationDataExport): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationDataExportToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationDataExport): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationDataExportOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExport | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExport | undefined);
    private _cloudWatchMetrics;
    get cloudWatchMetrics(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetricsOutputReference;
    putCloudWatchMetrics(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics): void;
    resetCloudWatchMetrics(): void;
    get cloudWatchMetricsInput(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportCloudWatchMetrics | undefined;
    private _s3BucketDestination;
    get s3BucketDestination(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestinationOutputReference;
    putS3BucketDestination(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination): void;
    resetS3BucketDestination(): void;
    get s3BucketDestinationInput(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportS3BucketDestination | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationExclude {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#buckets S3ControlStorageLensConfiguration#buckets}
    */
    readonly buckets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#regions S3ControlStorageLensConfiguration#regions}
    */
    readonly regions?: string[];
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationExcludeToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationExcludeOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationExclude): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationExcludeToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationExcludeOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationExclude): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationExcludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationExclude | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationExclude | undefined);
    private _buckets?;
    get buckets(): string[];
    set buckets(value: string[]);
    resetBuckets(): void;
    get bucketsInput(): string[] | undefined;
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    resetRegions(): void;
    get regionsInput(): string[] | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfigurationInclude {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#buckets S3ControlStorageLensConfiguration#buckets}
    */
    readonly buckets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#regions S3ControlStorageLensConfiguration#regions}
    */
    readonly regions?: string[];
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationIncludeToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationIncludeOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationInclude): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationIncludeToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationIncludeOutputReference | S3ControlStorageLensConfigurationStorageLensConfigurationInclude): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationIncludeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfigurationInclude | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfigurationInclude | undefined);
    private _buckets?;
    get buckets(): string[];
    set buckets(value: string[]);
    resetBuckets(): void;
    get bucketsInput(): string[] | undefined;
    private _regions?;
    get regions(): string[];
    set regions(value: string[]);
    resetRegions(): void;
    get regionsInput(): string[] | undefined;
}
export interface S3ControlStorageLensConfigurationStorageLensConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#enabled S3ControlStorageLensConfiguration#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * account_level block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#account_level S3ControlStorageLensConfiguration#account_level}
    */
    readonly accountLevel: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevel;
    /**
    * aws_org block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#aws_org S3ControlStorageLensConfiguration#aws_org}
    */
    readonly awsOrg?: S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrg;
    /**
    * data_export block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#data_export S3ControlStorageLensConfiguration#data_export}
    */
    readonly dataExport?: S3ControlStorageLensConfigurationStorageLensConfigurationDataExport;
    /**
    * exclude block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#exclude S3ControlStorageLensConfiguration#exclude}
    */
    readonly exclude?: S3ControlStorageLensConfigurationStorageLensConfigurationExclude;
    /**
    * include block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#include S3ControlStorageLensConfiguration#include}
    */
    readonly include?: S3ControlStorageLensConfigurationStorageLensConfigurationInclude;
}
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationToTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationOutputReference | S3ControlStorageLensConfigurationStorageLensConfiguration): any;
export declare function s3ControlStorageLensConfigurationStorageLensConfigurationToHclTerraform(struct?: S3ControlStorageLensConfigurationStorageLensConfigurationOutputReference | S3ControlStorageLensConfigurationStorageLensConfiguration): any;
export declare class S3ControlStorageLensConfigurationStorageLensConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): S3ControlStorageLensConfigurationStorageLensConfiguration | undefined;
    set internalValue(value: S3ControlStorageLensConfigurationStorageLensConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _accountLevel;
    get accountLevel(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevelOutputReference;
    putAccountLevel(value: S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevel): void;
    get accountLevelInput(): S3ControlStorageLensConfigurationStorageLensConfigurationAccountLevel | undefined;
    private _awsOrg;
    get awsOrg(): S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrgOutputReference;
    putAwsOrg(value: S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrg): void;
    resetAwsOrg(): void;
    get awsOrgInput(): S3ControlStorageLensConfigurationStorageLensConfigurationAwsOrg | undefined;
    private _dataExport;
    get dataExport(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExportOutputReference;
    putDataExport(value: S3ControlStorageLensConfigurationStorageLensConfigurationDataExport): void;
    resetDataExport(): void;
    get dataExportInput(): S3ControlStorageLensConfigurationStorageLensConfigurationDataExport | undefined;
    private _exclude;
    get exclude(): S3ControlStorageLensConfigurationStorageLensConfigurationExcludeOutputReference;
    putExclude(value: S3ControlStorageLensConfigurationStorageLensConfigurationExclude): void;
    resetExclude(): void;
    get excludeInput(): S3ControlStorageLensConfigurationStorageLensConfigurationExclude | undefined;
    private _include;
    get include(): S3ControlStorageLensConfigurationStorageLensConfigurationIncludeOutputReference;
    putInclude(value: S3ControlStorageLensConfigurationStorageLensConfigurationInclude): void;
    resetInclude(): void;
    get includeInput(): S3ControlStorageLensConfigurationStorageLensConfigurationInclude | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration aws_s3control_storage_lens_configuration}
*/
export declare class S3ControlStorageLensConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_s3control_storage_lens_configuration";
    /**
    * Generates CDKTF code for importing a S3ControlStorageLensConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the S3ControlStorageLensConfiguration to import
    * @param importFromId The id of the existing S3ControlStorageLensConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the S3ControlStorageLensConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/s3control_storage_lens_configuration aws_s3control_storage_lens_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options S3ControlStorageLensConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: S3ControlStorageLensConfigurationConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
    get arn(): string;
    private _configId?;
    get configId(): string;
    set configId(value: string);
    get configIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _storageLensConfiguration;
    get storageLensConfiguration(): S3ControlStorageLensConfigurationStorageLensConfigurationOutputReference;
    putStorageLensConfiguration(value: S3ControlStorageLensConfigurationStorageLensConfiguration): void;
    get storageLensConfigurationInput(): S3ControlStorageLensConfigurationStorageLensConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
