/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AppautoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
    /** (Required) Short name for the metric used in target tracking scaling policy. */
    readonly id?: string;
    /** (Required) Name of the policy. Must be between 1 and 255 characters in length. */
    readonly name: string;
    /** (Optional) Policy type. Valid values are `StepScaling` and `TargetTrackingScaling`. Defaults to `StepScaling`. Certain services only support only one policy type. For more information see the [Target Tracking Scaling Policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html) and [Step Scaling Policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html) documentation. */
    readonly policyType?: string;
    /** (Required) Resource type and unique identifier string for the resource associated with the scaling policy. Documentation can be found in the `ResourceId` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html) */
    readonly resourceId: string;
    /** (Required) Scalable dimension of the scalable target. Documentation can be found in the `ScalableDimension` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html) */
    readonly scalableDimension: string;
    /** (Required) AWS service namespace of the scalable target. Documentation can be found in the `ServiceNamespace` parameter at: [AWS Application Auto Scaling API Reference](https://docs.aws.amazon.com/autoscaling/application/APIReference/API_RegisterScalableTarget.html) */
    readonly serviceNamespace: string;
    /** */
    readonly stepScalingPolicyConfiguration?: AppautoscalingPolicyStepScalingPolicyConfiguration;
    /** */
    readonly targetTrackingScalingPolicyConfiguration?: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration;
}
export interface AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment {
    /** (Optional) Lower bound for the difference between the alarm threshold and the CloudWatch metric. Without a value, AWS will treat this bound as negative infinity. */
    readonly metricIntervalLowerBound?: string;
    /** (Optional) Upper bound for the difference between the alarm threshold and the CloudWatch metric. Without a value, AWS will treat this bound as infinity. The upper bound must be greater than the lower bound. */
    readonly metricIntervalUpperBound?: string;
    /** (Required) Number of members by which to scale, when the adjustment bounds are breached. A positive value scales up. A negative value scales down. */
    readonly scalingAdjustment: number;
}
export declare function appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToTerraform(struct?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment | cdktf.IResolvable): any;
export declare function appautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentToHclTerraform(struct?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment | cdktf.IResolvable): any;
export declare class AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment | cdktf.IResolvable | undefined;
    set internalValue(value: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment | cdktf.IResolvable | undefined);
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
export declare class AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentOutputReference;
}
export interface AppautoscalingPolicyStepScalingPolicyConfiguration {
    /** (Required) Whether the adjustment is an absolute number or a percentage of the current capacity. Valid values are `ChangeInCapacity`, `ExactCapacity`, and `PercentChangeInCapacity`. */
    readonly adjustmentType?: string;
    /** (Required) Amount of time, in seconds, after a scaling activity completes and before the next scaling activity can start. */
    readonly cooldown?: number;
    /** (Optional) Aggregation type for the policy's metrics. Valid values are "Minimum", "Maximum", and "Average". Without a value, AWS will treat the aggregation type as "Average". */
    readonly metricAggregationType?: string;
    /** (Optional) Minimum number to adjust your scalable dimension as a result of a scaling activity. If the adjustment type is PercentChangeInCapacity, the scaling policy changes the scalable dimension of the scalable target by this amount. */
    readonly minAdjustmentMagnitude?: number;
    /** */
    readonly stepAdjustment?: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[] | cdktf.IResolvable;
}
export declare function appautoscalingPolicyStepScalingPolicyConfigurationToTerraform(struct?: AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference | AppautoscalingPolicyStepScalingPolicyConfiguration): any;
export declare function appautoscalingPolicyStepScalingPolicyConfigurationToHclTerraform(struct?: AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference | AppautoscalingPolicyStepScalingPolicyConfiguration): any;
export declare class AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppautoscalingPolicyStepScalingPolicyConfiguration | undefined;
    set internalValue(value: AppautoscalingPolicyStepScalingPolicyConfiguration | undefined);
    private _adjustmentType?;
    get adjustmentType(): string;
    set adjustmentType(value: string);
    resetAdjustmentType(): void;
    get adjustmentTypeInput(): string | undefined;
    private _cooldown?;
    get cooldown(): number;
    set cooldown(value: number);
    resetCooldown(): void;
    get cooldownInput(): number | undefined;
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
    private _stepAdjustment;
    get stepAdjustment(): AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustmentList;
    putStepAdjustment(value: AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[] | cdktf.IResolvable): void;
    resetStepAdjustment(): void;
    get stepAdjustmentInput(): cdktf.IResolvable | AppautoscalingPolicyStepScalingPolicyConfigurationStepAdjustment[] | undefined;
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions {
    /** (Required) Name of the dimension. */
    readonly name: string;
    /** (Required) Value of the dimension. */
    readonly value: string;
}
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions | cdktf.IResolvable): any;
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsToHclTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions | cdktf.IResolvable): any;
export declare class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions | cdktf.IResolvable | undefined;
    set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsOutputReference;
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appautoscaling_policy#name AppautoscalingPolicy#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appautoscaling_policy#value AppautoscalingPolicy#value}
    */
    readonly value: string;
}
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktf.IResolvable): any;
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsToHclTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktf.IResolvable): any;
export declare class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktf.IResolvable | undefined;
    set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsOutputReference;
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric {
    /** (Required) Name of the metric. */
    readonly metricName: string;
    /** (Required) Namespace of the metric. */
    readonly namespace: string;
    /** */
    readonly dimensions?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | cdktf.IResolvable;
}
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric): any;
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricToHclTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric): any;
export declare class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric | undefined;
    set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric | undefined);
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
    private _dimensions;
    get dimensions(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensionsList;
    putDimensions(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | cdktf.IResolvable): void;
    resetDimensions(): void;
    get dimensionsInput(): cdktf.IResolvable | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricDimensions[] | undefined;
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat {
    /** (Required) Statistic of the metrics to return. */
    readonly stat: string;
    /** (Optional) Unit of the metric. */
    readonly unit?: string;
    /** */
    readonly metric: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric;
}
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat): any;
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatToHclTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat): any;
export declare class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat | undefined;
    set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat | undefined);
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
    get metric(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetricOutputReference;
    putMetric(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric): void;
    get metricInput(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatMetric | undefined;
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics {
    /** (Optional) Math expression used on the returned metric. You must specify either `expression` or `metricStat`, but not both. */
    readonly expression?: string;
    /** (Required) Short name for the metric used in target tracking scaling policy. */
    readonly id: string;
    /** (Optional) Human-readable label for this metric or expression. */
    readonly label?: string;
    /** (Optional) Boolean that indicates whether to return the timestamps and raw data values of this metric, the default is true */
    readonly returnData?: boolean | cdktf.IResolvable;
    /** */
    readonly metricStat?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat;
}
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics | cdktf.IResolvable): any;
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsToHclTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics | cdktf.IResolvable): any;
export declare class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics | cdktf.IResolvable | undefined;
    set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics | cdktf.IResolvable | undefined);
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
    get metricStat(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStatOutputReference;
    putMetricStat(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat): void;
    resetMetricStat(): void;
    get metricStatInput(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsMetricStat | undefined;
}
export declare class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsOutputReference;
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification {
    /** (Optional) Name of the metric. */
    readonly metricName?: string;
    /** (Optional) Namespace of the metric. */
    readonly namespace?: string;
    /** (Optional) Statistic of the metric. Valid values: `Average`, `Minimum`, `Maximum`, `SampleCount`, and `Sum`. */
    readonly statistic?: string;
    /** (Optional) Unit of the metric. */
    readonly unit?: string;
    /** */
    readonly dimensions?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[] | cdktf.IResolvable;
    /** */
    readonly metrics?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics[] | cdktf.IResolvable;
}
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification): any;
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationToHclTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification): any;
export declare class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification | undefined;
    set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification | undefined);
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
    private _dimensions;
    get dimensions(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensionsList;
    putDimensions(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[] | cdktf.IResolvable): void;
    resetDimensions(): void;
    get dimensionsInput(): cdktf.IResolvable | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationDimensions[] | undefined;
    private _metrics;
    get metrics(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetricsList;
    putMetrics(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics[] | cdktf.IResolvable): void;
    resetMetrics(): void;
    get metricsInput(): cdktf.IResolvable | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationMetrics[] | undefined;
}
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification {
    /** (Required) Metric type. */
    readonly predefinedMetricType: string;
    /** (Optional) Reserved for future use if the `predefinedMetricType` is not `ALBRequestCountPerTarget`. If the `predefinedMetricType` is `ALBRequestCountPerTarget`, you must specify this argument. Documentation can be found at: [AWS Predefined Scaling Metric Specification](https://docs.aws.amazon.com/autoscaling/plans/APIReference/API_PredefinedScalingMetricSpecification.html). Must be less than or equal to 1023 characters in length. */
    readonly resourceLabel?: string;
}
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification): any;
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationToHclTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification): any;
export declare class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification | undefined;
    set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification | undefined);
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
export interface AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration {
    /** (Optional) Whether scale in by the target tracking policy is disabled. If the value is true, scale in is disabled and the target tracking policy won't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking policy can remove capacity from the scalable resource. The default value is `false`. */
    readonly disableScaleIn?: boolean | cdktf.IResolvable;
    /** (Optional) Amount of time, in seconds, after a scale in activity completes before another scale in activity can start. */
    readonly scaleInCooldown?: number;
    /** (Optional) Amount of time, in seconds, after a scale out activity completes before another scale out activity can start. */
    readonly scaleOutCooldown?: number;
    /** (Required) Target value for the metric. */
    readonly targetValue: number;
    /** */
    readonly customizedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification;
    /** */
    readonly predefinedMetricSpecification?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification;
}
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration): any;
export declare function appautoscalingPolicyTargetTrackingScalingPolicyConfigurationToHclTerraform(struct?: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference | AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration): any;
export declare class AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration | undefined;
    set internalValue(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration | undefined);
    private _disableScaleIn?;
    get disableScaleIn(): boolean | cdktf.IResolvable;
    set disableScaleIn(value: boolean | cdktf.IResolvable);
    resetDisableScaleIn(): void;
    get disableScaleInInput(): boolean | cdktf.IResolvable | undefined;
    private _scaleInCooldown?;
    get scaleInCooldown(): number;
    set scaleInCooldown(value: number);
    resetScaleInCooldown(): void;
    get scaleInCooldownInput(): number | undefined;
    private _scaleOutCooldown?;
    get scaleOutCooldown(): number;
    set scaleOutCooldown(value: number);
    resetScaleOutCooldown(): void;
    get scaleOutCooldownInput(): number | undefined;
    private _targetValue?;
    get targetValue(): number;
    set targetValue(value: number);
    get targetValueInput(): number | undefined;
    private _customizedMetricSpecification;
    get customizedMetricSpecification(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecificationOutputReference;
    putCustomizedMetricSpecification(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification): void;
    resetCustomizedMetricSpecification(): void;
    get customizedMetricSpecificationInput(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationCustomizedMetricSpecification | undefined;
    private _predefinedMetricSpecification;
    get predefinedMetricSpecification(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecificationOutputReference;
    putPredefinedMetricSpecification(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification): void;
    resetPredefinedMetricSpecification(): void;
    get predefinedMetricSpecificationInput(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationPredefinedMetricSpecification | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appautoscaling_policy aws_appautoscaling_policy}
*/
export declare class AppautoscalingPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_appautoscaling_policy";
    /**
    * Generates CDKTF code for importing a AppautoscalingPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AppautoscalingPolicy to import
    * @param importFromId The id of the existing AppautoscalingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appautoscaling_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AppautoscalingPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/appautoscaling_policy aws_appautoscaling_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppautoscalingPolicyConfig
    */
    constructor(scope: Construct, id: string, config: AppautoscalingPolicyConfig);
    get alarmArns(): string[];
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _policyType?;
    get policyType(): string;
    set policyType(value: string);
    resetPolicyType(): void;
    get policyTypeInput(): string | undefined;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string | undefined;
    private _scalableDimension?;
    get scalableDimension(): string;
    set scalableDimension(value: string);
    get scalableDimensionInput(): string | undefined;
    private _serviceNamespace?;
    get serviceNamespace(): string;
    set serviceNamespace(value: string);
    get serviceNamespaceInput(): string | undefined;
    private _stepScalingPolicyConfiguration;
    get stepScalingPolicyConfiguration(): AppautoscalingPolicyStepScalingPolicyConfigurationOutputReference;
    putStepScalingPolicyConfiguration(value: AppautoscalingPolicyStepScalingPolicyConfiguration): void;
    resetStepScalingPolicyConfiguration(): void;
    get stepScalingPolicyConfigurationInput(): AppautoscalingPolicyStepScalingPolicyConfiguration | undefined;
    private _targetTrackingScalingPolicyConfiguration;
    get targetTrackingScalingPolicyConfiguration(): AppautoscalingPolicyTargetTrackingScalingPolicyConfigurationOutputReference;
    putTargetTrackingScalingPolicyConfiguration(value: AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration): void;
    resetTargetTrackingScalingPolicyConfiguration(): void;
    get targetTrackingScalingPolicyConfigurationInput(): AppautoscalingPolicyTargetTrackingScalingPolicyConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
