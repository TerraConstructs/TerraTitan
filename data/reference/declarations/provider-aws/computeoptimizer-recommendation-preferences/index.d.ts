/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ComputeoptimizerRecommendationPreferencesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#enhanced_infrastructure_metrics ComputeoptimizerRecommendationPreferences#enhanced_infrastructure_metrics}
    */
    readonly enhancedInfrastructureMetrics?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#inferred_workload_types ComputeoptimizerRecommendationPreferences#inferred_workload_types}
    */
    readonly inferredWorkloadTypes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#look_back_period ComputeoptimizerRecommendationPreferences#look_back_period}
    */
    readonly lookBackPeriod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#resource_type ComputeoptimizerRecommendationPreferences#resource_type}
    */
    readonly resourceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#savings_estimation_mode ComputeoptimizerRecommendationPreferences#savings_estimation_mode}
    */
    readonly savingsEstimationMode?: string;
    /**
    * external_metrics_preference block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#external_metrics_preference ComputeoptimizerRecommendationPreferences#external_metrics_preference}
    */
    readonly externalMetricsPreference?: ComputeoptimizerRecommendationPreferencesExternalMetricsPreference[] | cdktf.IResolvable;
    /**
    * preferred_resource block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#preferred_resource ComputeoptimizerRecommendationPreferences#preferred_resource}
    */
    readonly preferredResource?: ComputeoptimizerRecommendationPreferencesPreferredResource[] | cdktf.IResolvable;
    /**
    * scope block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#scope ComputeoptimizerRecommendationPreferences#scope}
    */
    readonly scope?: ComputeoptimizerRecommendationPreferencesScope[] | cdktf.IResolvable;
    /**
    * utilization_preference block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#utilization_preference ComputeoptimizerRecommendationPreferences#utilization_preference}
    */
    readonly utilizationPreference?: ComputeoptimizerRecommendationPreferencesUtilizationPreference[] | cdktf.IResolvable;
}
export interface ComputeoptimizerRecommendationPreferencesExternalMetricsPreference {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#source ComputeoptimizerRecommendationPreferences#source}
    */
    readonly source: string;
}
export declare function computeoptimizerRecommendationPreferencesExternalMetricsPreferenceToTerraform(struct?: ComputeoptimizerRecommendationPreferencesExternalMetricsPreference | cdktf.IResolvable): any;
export declare function computeoptimizerRecommendationPreferencesExternalMetricsPreferenceToHclTerraform(struct?: ComputeoptimizerRecommendationPreferencesExternalMetricsPreference | cdktf.IResolvable): any;
export declare class ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ComputeoptimizerRecommendationPreferencesExternalMetricsPreference | cdktf.IResolvable | undefined;
    set internalValue(value: ComputeoptimizerRecommendationPreferencesExternalMetricsPreference | cdktf.IResolvable | undefined);
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string | undefined;
}
export declare class ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ComputeoptimizerRecommendationPreferencesExternalMetricsPreference[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceOutputReference;
}
export interface ComputeoptimizerRecommendationPreferencesPreferredResource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#exclude_list ComputeoptimizerRecommendationPreferences#exclude_list}
    */
    readonly excludeList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#include_list ComputeoptimizerRecommendationPreferences#include_list}
    */
    readonly includeList?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#name ComputeoptimizerRecommendationPreferences#name}
    */
    readonly name: string;
}
export declare function computeoptimizerRecommendationPreferencesPreferredResourceToTerraform(struct?: ComputeoptimizerRecommendationPreferencesPreferredResource | cdktf.IResolvable): any;
export declare function computeoptimizerRecommendationPreferencesPreferredResourceToHclTerraform(struct?: ComputeoptimizerRecommendationPreferencesPreferredResource | cdktf.IResolvable): any;
export declare class ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ComputeoptimizerRecommendationPreferencesPreferredResource | cdktf.IResolvable | undefined;
    set internalValue(value: ComputeoptimizerRecommendationPreferencesPreferredResource | cdktf.IResolvable | undefined);
    private _excludeList?;
    get excludeList(): string[];
    set excludeList(value: string[]);
    resetExcludeList(): void;
    get excludeListInput(): string[] | undefined;
    private _includeList?;
    get includeList(): string[];
    set includeList(value: string[]);
    resetIncludeList(): void;
    get includeListInput(): string[] | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
}
export declare class ComputeoptimizerRecommendationPreferencesPreferredResourceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ComputeoptimizerRecommendationPreferencesPreferredResource[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ComputeoptimizerRecommendationPreferencesPreferredResourceOutputReference;
}
export interface ComputeoptimizerRecommendationPreferencesScope {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#name ComputeoptimizerRecommendationPreferences#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#value ComputeoptimizerRecommendationPreferences#value}
    */
    readonly value: string;
}
export declare function computeoptimizerRecommendationPreferencesScopeToTerraform(struct?: ComputeoptimizerRecommendationPreferencesScope | cdktf.IResolvable): any;
export declare function computeoptimizerRecommendationPreferencesScopeToHclTerraform(struct?: ComputeoptimizerRecommendationPreferencesScope | cdktf.IResolvable): any;
export declare class ComputeoptimizerRecommendationPreferencesScopeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ComputeoptimizerRecommendationPreferencesScope | cdktf.IResolvable | undefined;
    set internalValue(value: ComputeoptimizerRecommendationPreferencesScope | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class ComputeoptimizerRecommendationPreferencesScopeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ComputeoptimizerRecommendationPreferencesScope[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ComputeoptimizerRecommendationPreferencesScopeOutputReference;
}
export interface ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#headroom ComputeoptimizerRecommendationPreferences#headroom}
    */
    readonly headroom: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#threshold ComputeoptimizerRecommendationPreferences#threshold}
    */
    readonly threshold?: string;
}
export declare function computeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersToTerraform(struct?: ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters | cdktf.IResolvable): any;
export declare function computeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersToHclTerraform(struct?: ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters | cdktf.IResolvable): any;
export declare class ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters | cdktf.IResolvable | undefined;
    set internalValue(value: ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters | cdktf.IResolvable | undefined);
    private _headroom?;
    get headroom(): string;
    set headroom(value: string);
    get headroomInput(): string | undefined;
    private _threshold?;
    get threshold(): string;
    set threshold(value: string);
    resetThreshold(): void;
    get thresholdInput(): string | undefined;
}
export declare class ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersOutputReference;
}
export interface ComputeoptimizerRecommendationPreferencesUtilizationPreference {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#metric_name ComputeoptimizerRecommendationPreferences#metric_name}
    */
    readonly metricName: string;
    /**
    * metric_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#metric_parameters ComputeoptimizerRecommendationPreferences#metric_parameters}
    */
    readonly metricParameters?: ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters[] | cdktf.IResolvable;
}
export declare function computeoptimizerRecommendationPreferencesUtilizationPreferenceToTerraform(struct?: ComputeoptimizerRecommendationPreferencesUtilizationPreference | cdktf.IResolvable): any;
export declare function computeoptimizerRecommendationPreferencesUtilizationPreferenceToHclTerraform(struct?: ComputeoptimizerRecommendationPreferencesUtilizationPreference | cdktf.IResolvable): any;
export declare class ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ComputeoptimizerRecommendationPreferencesUtilizationPreference | cdktf.IResolvable | undefined;
    set internalValue(value: ComputeoptimizerRecommendationPreferencesUtilizationPreference | cdktf.IResolvable | undefined);
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _metricParameters;
    get metricParameters(): ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParametersList;
    putMetricParameters(value: ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters[] | cdktf.IResolvable): void;
    resetMetricParameters(): void;
    get metricParametersInput(): cdktf.IResolvable | ComputeoptimizerRecommendationPreferencesUtilizationPreferenceMetricParameters[] | undefined;
}
export declare class ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ComputeoptimizerRecommendationPreferencesUtilizationPreference[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ComputeoptimizerRecommendationPreferencesUtilizationPreferenceOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences aws_computeoptimizer_recommendation_preferences}
*/
export declare class ComputeoptimizerRecommendationPreferences extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_computeoptimizer_recommendation_preferences";
    /**
    * Generates CDKTF code for importing a ComputeoptimizerRecommendationPreferences resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ComputeoptimizerRecommendationPreferences to import
    * @param importFromId The id of the existing ComputeoptimizerRecommendationPreferences that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ComputeoptimizerRecommendationPreferences to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/computeoptimizer_recommendation_preferences aws_computeoptimizer_recommendation_preferences} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ComputeoptimizerRecommendationPreferencesConfig
    */
    constructor(scope: Construct, id: string, config: ComputeoptimizerRecommendationPreferencesConfig);
    private _enhancedInfrastructureMetrics?;
    get enhancedInfrastructureMetrics(): string;
    set enhancedInfrastructureMetrics(value: string);
    resetEnhancedInfrastructureMetrics(): void;
    get enhancedInfrastructureMetricsInput(): string | undefined;
    get id(): string;
    private _inferredWorkloadTypes?;
    get inferredWorkloadTypes(): string;
    set inferredWorkloadTypes(value: string);
    resetInferredWorkloadTypes(): void;
    get inferredWorkloadTypesInput(): string | undefined;
    private _lookBackPeriod?;
    get lookBackPeriod(): string;
    set lookBackPeriod(value: string);
    resetLookBackPeriod(): void;
    get lookBackPeriodInput(): string | undefined;
    private _resourceType?;
    get resourceType(): string;
    set resourceType(value: string);
    get resourceTypeInput(): string | undefined;
    private _savingsEstimationMode?;
    get savingsEstimationMode(): string;
    set savingsEstimationMode(value: string);
    resetSavingsEstimationMode(): void;
    get savingsEstimationModeInput(): string | undefined;
    private _externalMetricsPreference;
    get externalMetricsPreference(): ComputeoptimizerRecommendationPreferencesExternalMetricsPreferenceList;
    putExternalMetricsPreference(value: ComputeoptimizerRecommendationPreferencesExternalMetricsPreference[] | cdktf.IResolvable): void;
    resetExternalMetricsPreference(): void;
    get externalMetricsPreferenceInput(): cdktf.IResolvable | ComputeoptimizerRecommendationPreferencesExternalMetricsPreference[] | undefined;
    private _preferredResource;
    get preferredResource(): ComputeoptimizerRecommendationPreferencesPreferredResourceList;
    putPreferredResource(value: ComputeoptimizerRecommendationPreferencesPreferredResource[] | cdktf.IResolvable): void;
    resetPreferredResource(): void;
    get preferredResourceInput(): cdktf.IResolvable | ComputeoptimizerRecommendationPreferencesPreferredResource[] | undefined;
    private _scope;
    get scope(): ComputeoptimizerRecommendationPreferencesScopeList;
    putScope(value: ComputeoptimizerRecommendationPreferencesScope[] | cdktf.IResolvable): void;
    resetScope(): void;
    get scopeInput(): cdktf.IResolvable | ComputeoptimizerRecommendationPreferencesScope[] | undefined;
    private _utilizationPreference;
    get utilizationPreference(): ComputeoptimizerRecommendationPreferencesUtilizationPreferenceList;
    putUtilizationPreference(value: ComputeoptimizerRecommendationPreferencesUtilizationPreference[] | cdktf.IResolvable): void;
    resetUtilizationPreference(): void;
    get utilizationPreferenceInput(): cdktf.IResolvable | ComputeoptimizerRecommendationPreferencesUtilizationPreference[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
