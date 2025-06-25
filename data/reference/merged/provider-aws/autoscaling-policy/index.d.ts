/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) Whether the adjustment is an absolute number or a percentage of the current capacity. Valid values are `ChangeInCapacity`, `ExactCapacity`, and `PercentChangeInCapacity`. */
    readonly adjustmentType?: string;
    /** (Required) Name of the autoscaling group. */
    readonly autoscalingGroupName: string;
    /** (Optional) Amount of time, in seconds, after a scaling activity completes and before the next scaling activity can start. */
    readonly cooldown?: number;
    /** (Optional) Whether the scaling policy is enabled or disabled. Default: `true`. */
    readonly enabled?: boolean | cdktf.IResolvable;
    /** (Optional) Estimated time, in seconds, until a newly launched instance will contribute CloudWatch metrics. Without a value, AWS will default to the group's specified cooldown period. */
    readonly estimatedInstanceWarmup?: number;
    /** (Required) Short name for the metric used in target tracking scaling policy. */
    readonly id?: string;
    /** (Optional) Aggregation type for the policy's metrics. Valid values are "Minimum", "Maximum", and "Average". Without a value, AWS will treat the aggregation type as "Average". */
    readonly metricAggregationType?: string;
    /** (Optional) Minimum value to scale by when `adjustmentType` is set to `PercentChangeInCapacity`. */
    readonly minAdjustmentMagnitude?: number;
    /** (Required) Name of the policy. */
    readonly name: string;
    /** (Optional) Policy type, either "SimpleScaling", "StepScaling", "TargetTrackingScaling", or "PredictiveScaling". If this value isn't provided, AWS will default to "SimpleScaling." */
    readonly policyType?: string;
    /** (Optional) Number of instances by which to scale. `adjustmentType` determines the interpretation of this number (e.g., as an absolute number or as a percentage of the existing Auto Scaling group size). A positive increment adds to the current capacity and a negative value removes from the current capacity. */
    readonly scalingAdjustment?: number;
    /** */
    readonly predictiveScalingConfiguration?: AutoscalingPolicyPredictiveScalingConfiguration;
    /** */
    readonly stepAdjustment?: AutoscalingPolicyStepAdjustment[] | cdktf.IResolvable;
    /** */
    readonly targetTrackingConfiguration?: AutoscalingPolicyTargetTrackingConfiguration;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {
    /** (Required) Name of the dimension. */
    readonly name: string;
    /** (Required) Value of the dimension. */
    readonly value: string;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric {
    /** (Required) Name of the metric. */
    readonly metricName: string;
    /** (Required) Namespace of the metric. */
    readonly namespace: string;
    /** */
    readonly dimensions?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric | undefined);
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
    private _dimensions;
    get dimensions(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList;
    putDimensions(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable): void;
    resetDimensions(): void;
    get dimensionsInput(): cdktf.IResolvable | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | undefined;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat {
    /** (Required) Statistic of the metrics to return. */
    readonly stat: string;
    /** (Optional) Unit of the metrics to return. */
    readonly unit?: string;
    /** */
    readonly metric: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat | undefined);
    private _stat?;
    get stat(): string;
    set stat(value: string);
    get statInput(): string | undefined;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string | undefined;
    private _metric;
    get metric(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference;
    putMetric(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric): void;
    get metricInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatMetric | undefined;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries {
    /** (Optional) Math expression used on the returned metric. You must specify either `expression` or `metricStat`, but not both. */
    readonly expression?: string;
    /** (Required) Short name for the metric used in predictive scaling policy. */
    readonly id: string;
    /** (Optional) Human-readable label for this metric or expression. */
    readonly label?: string;
    /** (Optional) Boolean that indicates whether to return the timestamps and raw data values of this metric, the default is true */
    readonly returnData?: boolean | cdktf.IResolvable;
    /** */
    readonly metricStat?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries | cdktf.IResolvable): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries | cdktf.IResolvable): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries | cdktf.IResolvable | undefined);
    private _expression?;
    get expression(): string;
    set expression(value: string);
    resetExpression(): void;
    get expressionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _label?;
    get label(): string;
    set label(value: string);
    resetLabel(): void;
    get labelInput(): string | undefined;
    private _returnData?;
    get returnData(): boolean | cdktf.IResolvable;
    set returnData(value: boolean | cdktf.IResolvable);
    resetReturnData(): void;
    get returnDataInput(): boolean | cdktf.IResolvable | undefined;
    private _metricStat;
    get metricStat(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStatOutputReference;
    putMetricStat(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat): void;
    resetMetricStat(): void;
    get metricStatInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesMetricStat | undefined;
}
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesOutputReference;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification {
    /** */
    readonly metricDataQueries: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries[] | cdktf.IResolvable;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification | undefined);
    private _metricDataQueries;
    get metricDataQueries(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueriesList;
    putMetricDataQueries(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries[] | cdktf.IResolvable): void;
    get metricDataQueriesInput(): cdktf.IResolvable | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationMetricDataQueries[] | undefined;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#name AutoscalingPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#value AutoscalingPolicy#value}
    */
    readonly value: string;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#metric_name AutoscalingPolicy#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#namespace AutoscalingPolicy#namespace}
    */
    readonly namespace: string;
    /**
    * dimensions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#dimensions AutoscalingPolicy#dimensions}
    */
    readonly dimensions?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric | undefined);
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
    private _dimensions;
    get dimensions(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList;
    putDimensions(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable): void;
    resetDimensions(): void;
    get dimensionsInput(): cdktf.IResolvable | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | undefined;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#stat AutoscalingPolicy#stat}
    */
    readonly stat: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#unit AutoscalingPolicy#unit}
    */
    readonly unit?: string;
    /**
    * metric block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#metric AutoscalingPolicy#metric}
    */
    readonly metric: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat | undefined);
    private _stat?;
    get stat(): string;
    set stat(value: string);
    get statInput(): string | undefined;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string | undefined;
    private _metric;
    get metric(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference;
    putMetric(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric): void;
    get metricInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatMetric | undefined;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#expression AutoscalingPolicy#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#id AutoscalingPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#label AutoscalingPolicy#label}
    */
    readonly label?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#return_data AutoscalingPolicy#return_data}
    */
    readonly returnData?: boolean | cdktf.IResolvable;
    /**
    * metric_stat block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#metric_stat AutoscalingPolicy#metric_stat}
    */
    readonly metricStat?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries | cdktf.IResolvable): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries | cdktf.IResolvable): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries | cdktf.IResolvable | undefined);
    private _expression?;
    get expression(): string;
    set expression(value: string);
    resetExpression(): void;
    get expressionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _label?;
    get label(): string;
    set label(value: string);
    resetLabel(): void;
    get labelInput(): string | undefined;
    private _returnData?;
    get returnData(): boolean | cdktf.IResolvable;
    set returnData(value: boolean | cdktf.IResolvable);
    resetReturnData(): void;
    get returnDataInput(): boolean | cdktf.IResolvable | undefined;
    private _metricStat;
    get metricStat(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStatOutputReference;
    putMetricStat(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat): void;
    resetMetricStat(): void;
    get metricStatInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesMetricStat | undefined;
}
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesOutputReference;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification {
    /** */
    readonly metricDataQueries: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries[] | cdktf.IResolvable;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification | undefined);
    private _metricDataQueries;
    get metricDataQueries(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueriesList;
    putMetricDataQueries(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries[] | cdktf.IResolvable): void;
    get metricDataQueriesInput(): cdktf.IResolvable | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationMetricDataQueries[] | undefined;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#name AutoscalingPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#value AutoscalingPolicy#value}
    */
    readonly value: string;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsOutputReference;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#metric_name AutoscalingPolicy#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#namespace AutoscalingPolicy#namespace}
    */
    readonly namespace: string;
    /**
    * dimensions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#dimensions AutoscalingPolicy#dimensions}
    */
    readonly dimensions?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric | undefined);
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
    private _dimensions;
    get dimensions(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensionsList;
    putDimensions(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | cdktf.IResolvable): void;
    resetDimensions(): void;
    get dimensionsInput(): cdktf.IResolvable | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricDimensions[] | undefined;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#stat AutoscalingPolicy#stat}
    */
    readonly stat: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#unit AutoscalingPolicy#unit}
    */
    readonly unit?: string;
    /**
    * metric block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#metric AutoscalingPolicy#metric}
    */
    readonly metric: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat | undefined);
    private _stat?;
    get stat(): string;
    set stat(value: string);
    get statInput(): string | undefined;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string | undefined;
    private _metric;
    get metric(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetricOutputReference;
    putMetric(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric): void;
    get metricInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatMetric | undefined;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#expression AutoscalingPolicy#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#id AutoscalingPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#label AutoscalingPolicy#label}
    */
    readonly label?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#return_data AutoscalingPolicy#return_data}
    */
    readonly returnData?: boolean | cdktf.IResolvable;
    /**
    * metric_stat block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#metric_stat AutoscalingPolicy#metric_stat}
    */
    readonly metricStat?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries | cdktf.IResolvable): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries | cdktf.IResolvable): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries | cdktf.IResolvable | undefined);
    private _expression?;
    get expression(): string;
    set expression(value: string);
    resetExpression(): void;
    get expressionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _label?;
    get label(): string;
    set label(value: string);
    resetLabel(): void;
    get labelInput(): string | undefined;
    private _returnData?;
    get returnData(): boolean | cdktf.IResolvable;
    set returnData(value: boolean | cdktf.IResolvable);
    resetReturnData(): void;
    get returnDataInput(): boolean | cdktf.IResolvable | undefined;
    private _metricStat;
    get metricStat(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStatOutputReference;
    putMetricStat(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat): void;
    resetMetricStat(): void;
    get metricStatInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesMetricStat | undefined;
}
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesOutputReference;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification {
    /** */
    readonly metricDataQueries: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries[] | cdktf.IResolvable;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification | undefined);
    private _metricDataQueries;
    get metricDataQueries(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueriesList;
    putMetricDataQueries(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries[] | cdktf.IResolvable): void;
    get metricDataQueriesInput(): cdktf.IResolvable | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationMetricDataQueries[] | undefined;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification {
    /** (Required) Describes a scaling metric for a predictive scaling policy. Valid values are `ASGAverageCPUUtilization`, `ASGAverageNetworkIn`, `ASGAverageNetworkOut`, or `ALBRequestCountPerTarget`. */
    readonly predefinedMetricType: string;
    /** (Optional) Identifies the resource associated with the metric type. */
    readonly resourceLabel?: string;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification | undefined);
    private _predefinedMetricType?;
    get predefinedMetricType(): string;
    set predefinedMetricType(value: string);
    get predefinedMetricTypeInput(): string | undefined;
    private _resourceLabel?;
    get resourceLabel(): string;
    set resourceLabel(value: string);
    resetResourceLabel(): void;
    get resourceLabelInput(): string | undefined;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification {
    /** (Required) Describes a scaling metric for a predictive scaling policy. Valid values are `ASGAverageCPUUtilization`, `ASGAverageNetworkIn`, `ASGAverageNetworkOut`, or `ALBRequestCountPerTarget`. */
    readonly predefinedMetricType: string;
    /** (Optional) Identifies the resource associated with the metric type. */
    readonly resourceLabel?: string;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification | undefined);
    private _predefinedMetricType?;
    get predefinedMetricType(): string;
    set predefinedMetricType(value: string);
    get predefinedMetricTypeInput(): string | undefined;
    private _resourceLabel?;
    get resourceLabel(): string;
    set resourceLabel(value: string);
    resetResourceLabel(): void;
    get resourceLabelInput(): string | undefined;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification {
    /** (Required) Describes a scaling metric for a predictive scaling policy. Valid values are `ASGAverageCPUUtilization`, `ASGAverageNetworkIn`, `ASGAverageNetworkOut`, or `ALBRequestCountPerTarget`. */
    readonly predefinedMetricType: string;
    /** (Optional) Identifies the resource associated with the metric type. */
    readonly resourceLabel?: string;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification | undefined);
    private _predefinedMetricType?;
    get predefinedMetricType(): string;
    set predefinedMetricType(value: string);
    get predefinedMetricTypeInput(): string | undefined;
    private _resourceLabel?;
    get resourceLabel(): string;
    set resourceLabel(value: string);
    resetResourceLabel(): void;
    get resourceLabelInput(): string | undefined;
}
export interface AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#target_value AutoscalingPolicy#target_value}
    */
    readonly targetValue: number;
    /**
    * customized_capacity_metric_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#customized_capacity_metric_specification AutoscalingPolicy#customized_capacity_metric_specification}
    */
    readonly customizedCapacityMetricSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification;
    /**
    * customized_load_metric_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#customized_load_metric_specification AutoscalingPolicy#customized_load_metric_specification}
    */
    readonly customizedLoadMetricSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification;
    /**
    * customized_scaling_metric_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#customized_scaling_metric_specification AutoscalingPolicy#customized_scaling_metric_specification}
    */
    readonly customizedScalingMetricSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification;
    /**
    * predefined_load_metric_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#predefined_load_metric_specification AutoscalingPolicy#predefined_load_metric_specification}
    */
    readonly predefinedLoadMetricSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification;
    /**
    * predefined_metric_pair_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#predefined_metric_pair_specification AutoscalingPolicy#predefined_metric_pair_specification}
    */
    readonly predefinedMetricPairSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification;
    /**
    * predefined_scaling_metric_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#predefined_scaling_metric_specification AutoscalingPolicy#predefined_scaling_metric_specification}
    */
    readonly predefinedScalingMetricSpecification?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationMetricSpecificationToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference | AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification | undefined);
    private _targetValue?;
    get targetValue(): number;
    set targetValue(value: number);
    get targetValueInput(): number | undefined;
    private _customizedCapacityMetricSpecification;
    get customizedCapacityMetricSpecification(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecificationOutputReference;
    putCustomizedCapacityMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification): void;
    resetCustomizedCapacityMetricSpecification(): void;
    get customizedCapacityMetricSpecificationInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedCapacityMetricSpecification | undefined;
    private _customizedLoadMetricSpecification;
    get customizedLoadMetricSpecification(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecificationOutputReference;
    putCustomizedLoadMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification): void;
    resetCustomizedLoadMetricSpecification(): void;
    get customizedLoadMetricSpecificationInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedLoadMetricSpecification | undefined;
    private _customizedScalingMetricSpecification;
    get customizedScalingMetricSpecification(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecificationOutputReference;
    putCustomizedScalingMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification): void;
    resetCustomizedScalingMetricSpecification(): void;
    get customizedScalingMetricSpecificationInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationCustomizedScalingMetricSpecification | undefined;
    private _predefinedLoadMetricSpecification;
    get predefinedLoadMetricSpecification(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecificationOutputReference;
    putPredefinedLoadMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification): void;
    resetPredefinedLoadMetricSpecification(): void;
    get predefinedLoadMetricSpecificationInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedLoadMetricSpecification | undefined;
    private _predefinedMetricPairSpecification;
    get predefinedMetricPairSpecification(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecificationOutputReference;
    putPredefinedMetricPairSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification): void;
    resetPredefinedMetricPairSpecification(): void;
    get predefinedMetricPairSpecificationInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedMetricPairSpecification | undefined;
    private _predefinedScalingMetricSpecification;
    get predefinedScalingMetricSpecification(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecificationOutputReference;
    putPredefinedScalingMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification): void;
    resetPredefinedScalingMetricSpecification(): void;
    get predefinedScalingMetricSpecificationInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationPredefinedScalingMetricSpecification | undefined;
}
export interface AutoscalingPolicyPredictiveScalingConfiguration {
    /** (Optional) Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity of the Auto Scaling group. Valid values are `HonorMaxCapacity` or `IncreaseMaxCapacity`. Default is `HonorMaxCapacity`. */
    readonly maxCapacityBreachBehavior?: string;
    /** (Optional) Size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. Valid range is `0` to `100`. If set to `0`, Amazon EC2 Auto Scaling may scale capacity higher than the maximum capacity to equal but not exceed forecast capacity. */
    readonly maxCapacityBuffer?: string;
    /** (Optional) Predictive scaling mode. Valid values are `ForecastAndScale` and `ForecastOnly`. Default is `ForecastOnly`. */
    readonly mode?: string;
    /** (Optional) Amount of time, in seconds, by which the instance launch time can be advanced. Minimum is `0`. */
    readonly schedulingBufferTime?: string;
    /** */
    readonly metricSpecification: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification;
}
export declare function autoscalingPolicyPredictiveScalingConfigurationToTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationOutputReference | AutoscalingPolicyPredictiveScalingConfiguration): any;
export declare function autoscalingPolicyPredictiveScalingConfigurationToHclTerraform(struct?: AutoscalingPolicyPredictiveScalingConfigurationOutputReference | AutoscalingPolicyPredictiveScalingConfiguration): any;
export declare class AutoscalingPolicyPredictiveScalingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyPredictiveScalingConfiguration | undefined;
    set internalValue(value: AutoscalingPolicyPredictiveScalingConfiguration | undefined);
    private _maxCapacityBreachBehavior?;
    get maxCapacityBreachBehavior(): string;
    set maxCapacityBreachBehavior(value: string);
    resetMaxCapacityBreachBehavior(): void;
    get maxCapacityBreachBehaviorInput(): string | undefined;
    private _maxCapacityBuffer?;
    get maxCapacityBuffer(): string;
    set maxCapacityBuffer(value: string);
    resetMaxCapacityBuffer(): void;
    get maxCapacityBufferInput(): string | undefined;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string | undefined;
    private _schedulingBufferTime?;
    get schedulingBufferTime(): string;
    set schedulingBufferTime(value: string);
    resetSchedulingBufferTime(): void;
    get schedulingBufferTimeInput(): string | undefined;
    private _metricSpecification;
    get metricSpecification(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecificationOutputReference;
    putMetricSpecification(value: AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification): void;
    get metricSpecificationInput(): AutoscalingPolicyPredictiveScalingConfigurationMetricSpecification | undefined;
}
export interface AutoscalingPolicyStepAdjustment {
    /** (Optional) Lower bound for the difference between the alarm threshold and the CloudWatch metric. */
    readonly metricIntervalLowerBound?: string;
    /** (Optional) Upper bound for the difference between the alarm threshold and the CloudWatch metric. */
    readonly metricIntervalUpperBound?: string;
    /** (Required) Number of members by which to scale, when the adjustment bounds are breached. A positive value scales up. A negative value scales down. */
    readonly scalingAdjustment: number;
}
export declare function autoscalingPolicyStepAdjustmentToTerraform(struct?: AutoscalingPolicyStepAdjustment | cdktf.IResolvable): any;
export declare function autoscalingPolicyStepAdjustmentToHclTerraform(struct?: AutoscalingPolicyStepAdjustment | cdktf.IResolvable): any;
export declare class AutoscalingPolicyStepAdjustmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingPolicyStepAdjustment | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingPolicyStepAdjustment | cdktf.IResolvable | undefined);
    private _metricIntervalLowerBound?;
    get metricIntervalLowerBound(): string;
    set metricIntervalLowerBound(value: string);
    resetMetricIntervalLowerBound(): void;
    get metricIntervalLowerBoundInput(): string | undefined;
    private _metricIntervalUpperBound?;
    get metricIntervalUpperBound(): string;
    set metricIntervalUpperBound(value: string);
    resetMetricIntervalUpperBound(): void;
    get metricIntervalUpperBoundInput(): string | undefined;
    private _scalingAdjustment?;
    get scalingAdjustment(): number;
    set scalingAdjustment(value: number);
    get scalingAdjustmentInput(): number | undefined;
}
export declare class AutoscalingPolicyStepAdjustmentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingPolicyStepAdjustment[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingPolicyStepAdjustmentOutputReference;
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension {
    /** (Required) Name of the dimension. */
    readonly name: string;
    /** (Required) Value of the dimension. */
    readonly value: string;
}
export declare function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension | cdktf.IResolvable): any;
export declare function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionToHclTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension | cdktf.IResolvable): any;
export declare class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionOutputReference;
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#name AutoscalingPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#value AutoscalingPolicy#value}
    */
    readonly value: string;
}
export declare function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktf.IResolvable): any;
export declare function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsToHclTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktf.IResolvable): any;
export declare class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference;
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#metric_name AutoscalingPolicy#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#namespace AutoscalingPolicy#namespace}
    */
    readonly namespace: string;
    /**
    * dimensions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#dimensions AutoscalingPolicy#dimensions}
    */
    readonly dimensions?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | cdktf.IResolvable;
}
export declare function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric): any;
export declare function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricToHclTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric): any;
export declare class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric | undefined;
    set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric | undefined);
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
    private _dimensions;
    get dimensions(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList;
    putDimensions(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | cdktf.IResolvable): void;
    resetDimensions(): void;
    get dimensionsInput(): cdktf.IResolvable | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | undefined;
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#period AutoscalingPolicy#period}
    */
    readonly period?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#stat AutoscalingPolicy#stat}
    */
    readonly stat: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#unit AutoscalingPolicy#unit}
    */
    readonly unit?: string;
    /**
    * metric block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#metric AutoscalingPolicy#metric}
    */
    readonly metric: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric;
}
export declare function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat): any;
export declare function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatToHclTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat): any;
export declare class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat | undefined;
    set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat | undefined);
    private _period?;
    get period(): number;
    set period(value: number);
    resetPeriod(): void;
    get periodInput(): number | undefined;
    private _stat?;
    get stat(): string;
    set stat(value: string);
    get statInput(): string | undefined;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string | undefined;
    private _metric;
    get metric(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference;
    putMetric(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric): void;
    get metricInput(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric | undefined;
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics {
    /** (Optional) Math expression used on the returned metric. You must specify either `expression` or `metricStat`, but not both. */
    readonly expression?: string;
    /** (Required) Short name for the metric used in target tracking scaling policy. */
    readonly id: string;
    /** (Optional) Human-readable label for this metric or expression. */
    readonly label?: string;
    /** (Optional) Boolean that indicates whether to return the timestamps and raw data values of this metric, the default is true */
    readonly returnData?: boolean | cdktf.IResolvable;
    /** */
    readonly metricStat?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat;
}
export declare function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics | cdktf.IResolvable): any;
export declare function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsToHclTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics | cdktf.IResolvable): any;
export declare class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics | cdktf.IResolvable | undefined);
    private _expression?;
    get expression(): string;
    set expression(value: string);
    resetExpression(): void;
    get expressionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _label?;
    get label(): string;
    set label(value: string);
    resetLabel(): void;
    get labelInput(): string | undefined;
    private _returnData?;
    get returnData(): boolean | cdktf.IResolvable;
    set returnData(value: boolean | cdktf.IResolvable);
    resetReturnData(): void;
    get returnDataInput(): boolean | cdktf.IResolvable | undefined;
    private _metricStat;
    get metricStat(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference;
    putMetricStat(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat): void;
    resetMetricStat(): void;
    get metricStatInput(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsMetricStat | undefined;
}
export declare class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsOutputReference;
}
export interface AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification {
    /** (Required) Name of the metric. */
    readonly metricName?: string;
    /** (Optional) Namespace of the metric. */
    readonly namespace?: string;
    /** (Optional) The period of the metric in seconds. */
    readonly period?: number;
    /** (Optional) Statistic of the metric. */
    readonly statistic?: string;
    /** (Optional) Unit of the metrics to return. */
    readonly unit?: string;
    /** */
    readonly metricDimension?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[] | cdktf.IResolvable;
    /** */
    readonly metrics?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics[] | cdktf.IResolvable;
}
export declare function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification): any;
export declare function autoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationToHclTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification): any;
export declare class AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification | undefined;
    set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification | undefined);
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    resetMetricName(): void;
    get metricNameInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string | undefined;
    private _period?;
    get period(): number;
    set period(value: number);
    resetPeriod(): void;
    get periodInput(): number | undefined;
    private _statistic?;
    get statistic(): string;
    set statistic(value: string);
    resetStatistic(): void;
    get statisticInput(): string | undefined;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string | undefined;
    private _metricDimension;
    get metricDimension(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimensionList;
    putMetricDimension(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[] | cdktf.IResolvable): void;
    resetMetricDimension(): void;
    get metricDimensionInput(): cdktf.IResolvable | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricDimension[] | undefined;
    private _metrics;
    get metrics(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetricsList;
    putMetrics(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics[] | cdktf.IResolvable): void;
    resetMetrics(): void;
    get metricsInput(): cdktf.IResolvable | AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationMetrics[] | undefined;
}
export interface AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification {
    /** (Required) Metric type. Valid values are `ASGTotalCPUUtilization`, `ASGTotalNetworkIn`, `ASGTotalNetworkOut`, or `ALBTargetGroupRequestCount`. */
    readonly predefinedMetricType: string;
    /** (Required) Label that uniquely identifies a specific Application Load Balancer target group from which to determine the request count served by your Auto Scaling group. You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). Refer to [PredefinedMetricSpecification](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_PredefinedMetricSpecification.html) for more information. */
    readonly resourceLabel?: string;
}
export declare function autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference | AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification): any;
export declare function autoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationToHclTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference | AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification): any;
export declare class AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification | undefined;
    set internalValue(value: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification | undefined);
    private _predefinedMetricType?;
    get predefinedMetricType(): string;
    set predefinedMetricType(value: string);
    get predefinedMetricTypeInput(): string | undefined;
    private _resourceLabel?;
    get resourceLabel(): string;
    set resourceLabel(value: string);
    resetResourceLabel(): void;
    get resourceLabelInput(): string | undefined;
}
export interface AutoscalingPolicyTargetTrackingConfiguration {
    /** (Optional, Default: false) Whether scale in by the target tracking policy is disabled. */
    readonly disableScaleIn?: boolean | cdktf.IResolvable;
    /** (Required) Target value for the metric. */
    readonly targetValue: number;
    /** */
    readonly customizedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification;
    /** */
    readonly predefinedMetricSpecification?: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification;
}
export declare function autoscalingPolicyTargetTrackingConfigurationToTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationOutputReference | AutoscalingPolicyTargetTrackingConfiguration): any;
export declare function autoscalingPolicyTargetTrackingConfigurationToHclTerraform(struct?: AutoscalingPolicyTargetTrackingConfigurationOutputReference | AutoscalingPolicyTargetTrackingConfiguration): any;
export declare class AutoscalingPolicyTargetTrackingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingPolicyTargetTrackingConfiguration | undefined;
    set internalValue(value: AutoscalingPolicyTargetTrackingConfiguration | undefined);
    private _disableScaleIn?;
    get disableScaleIn(): boolean | cdktf.IResolvable;
    set disableScaleIn(value: boolean | cdktf.IResolvable);
    resetDisableScaleIn(): void;
    get disableScaleInInput(): boolean | cdktf.IResolvable | undefined;
    private _targetValue?;
    get targetValue(): number;
    set targetValue(value: number);
    get targetValueInput(): number | undefined;
    private _customizedMetricSpecification;
    get customizedMetricSpecification(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecificationOutputReference;
    putCustomizedMetricSpecification(value: AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification): void;
    resetCustomizedMetricSpecification(): void;
    get customizedMetricSpecificationInput(): AutoscalingPolicyTargetTrackingConfigurationCustomizedMetricSpecification | undefined;
    private _predefinedMetricSpecification;
    get predefinedMetricSpecification(): AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecificationOutputReference;
    putPredefinedMetricSpecification(value: AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification): void;
    resetPredefinedMetricSpecification(): void;
    get predefinedMetricSpecificationInput(): AutoscalingPolicyTargetTrackingConfigurationPredefinedMetricSpecification | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy aws_autoscaling_policy}
*/
export declare class AutoscalingPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_autoscaling_policy";
    /**
    * Generates CDKTF code for importing a AutoscalingPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AutoscalingPolicy to import
    * @param importFromId The id of the existing AutoscalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AutoscalingPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscaling_policy aws_autoscaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingPolicyConfig
    */
    constructor(scope: Construct, id: string, config: AutoscalingPolicyConfig);
    private _adjustmentType?;
    get adjustmentType(): string;
    set adjustmentType(value: string);
    resetAdjustmentType(): void;
    get adjustmentTypeInput(): string | undefined;
    get arn(): string;
    private _autoscalingGroupName?;
    get autoscalingGroupName(): string;
    set autoscalingGroupName(value: string);
    get autoscalingGroupNameInput(): string | undefined;
    private _cooldown?;
    get cooldown(): number;
    set cooldown(value: number);
    resetCooldown(): void;
    get cooldownInput(): number | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _estimatedInstanceWarmup?;
    get estimatedInstanceWarmup(): number;
    set estimatedInstanceWarmup(value: number);
    resetEstimatedInstanceWarmup(): void;
    get estimatedInstanceWarmupInput(): number | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _metricAggregationType?;
    get metricAggregationType(): string;
    set metricAggregationType(value: string);
    resetMetricAggregationType(): void;
    get metricAggregationTypeInput(): string | undefined;
    private _minAdjustmentMagnitude?;
    get minAdjustmentMagnitude(): number;
    set minAdjustmentMagnitude(value: number);
    resetMinAdjustmentMagnitude(): void;
    get minAdjustmentMagnitudeInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _policyType?;
    get policyType(): string;
    set policyType(value: string);
    resetPolicyType(): void;
    get policyTypeInput(): string | undefined;
    private _scalingAdjustment?;
    get scalingAdjustment(): number;
    set scalingAdjustment(value: number);
    resetScalingAdjustment(): void;
    get scalingAdjustmentInput(): number | undefined;
    private _predictiveScalingConfiguration;
    get predictiveScalingConfiguration(): AutoscalingPolicyPredictiveScalingConfigurationOutputReference;
    putPredictiveScalingConfiguration(value: AutoscalingPolicyPredictiveScalingConfiguration): void;
    resetPredictiveScalingConfiguration(): void;
    get predictiveScalingConfigurationInput(): AutoscalingPolicyPredictiveScalingConfiguration | undefined;
    private _stepAdjustment;
    get stepAdjustment(): AutoscalingPolicyStepAdjustmentList;
    putStepAdjustment(value: AutoscalingPolicyStepAdjustment[] | cdktf.IResolvable): void;
    resetStepAdjustment(): void;
    get stepAdjustmentInput(): cdktf.IResolvable | AutoscalingPolicyStepAdjustment[] | undefined;
    private _targetTrackingConfiguration;
    get targetTrackingConfiguration(): AutoscalingPolicyTargetTrackingConfigurationOutputReference;
    putTargetTrackingConfiguration(value: AutoscalingPolicyTargetTrackingConfiguration): void;
    resetTargetTrackingConfiguration(): void;
    get targetTrackingConfigurationInput(): AutoscalingPolicyTargetTrackingConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
