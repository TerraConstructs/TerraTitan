/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AutoscalingplansScalingPlanConfig extends cdktf.TerraformMetaArguments {
    /** */
    readonly id?: string;
    /** (Required) Name of the scaling plan. Names cannot contain vertical bars, colons, or forward slashes. */
    readonly name: string;
    /** */
    readonly applicationSource: AutoscalingplansScalingPlanApplicationSource;
    /** */
    readonly scalingInstruction: AutoscalingplansScalingPlanScalingInstruction[] | cdktf.IResolvable;
}
export interface AutoscalingplansScalingPlanApplicationSourceTagFilter {
    /** (Required) Tag key. */
    readonly key: string;
    /** (Optional) Tag values. */
    readonly values?: string[];
}
export declare function autoscalingplansScalingPlanApplicationSourceTagFilterToTerraform(struct?: AutoscalingplansScalingPlanApplicationSourceTagFilter | cdktf.IResolvable): any;
export declare function autoscalingplansScalingPlanApplicationSourceTagFilterToHclTerraform(struct?: AutoscalingplansScalingPlanApplicationSourceTagFilter | cdktf.IResolvable): any;
export declare class AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingplansScalingPlanApplicationSourceTagFilter | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingplansScalingPlanApplicationSourceTagFilter | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    resetValues(): void;
    get valuesInput(): string[] | undefined;
}
export declare class AutoscalingplansScalingPlanApplicationSourceTagFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingplansScalingPlanApplicationSourceTagFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingplansScalingPlanApplicationSourceTagFilterOutputReference;
}
export interface AutoscalingplansScalingPlanApplicationSource {
    /** (Optional) ARN of a AWS CloudFormation stack. */
    readonly cloudformationStackArn?: string;
    /** */
    readonly tagFilter?: AutoscalingplansScalingPlanApplicationSourceTagFilter[] | cdktf.IResolvable;
}
export declare function autoscalingplansScalingPlanApplicationSourceToTerraform(struct?: AutoscalingplansScalingPlanApplicationSourceOutputReference | AutoscalingplansScalingPlanApplicationSource): any;
export declare function autoscalingplansScalingPlanApplicationSourceToHclTerraform(struct?: AutoscalingplansScalingPlanApplicationSourceOutputReference | AutoscalingplansScalingPlanApplicationSource): any;
export declare class AutoscalingplansScalingPlanApplicationSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingplansScalingPlanApplicationSource | undefined;
    set internalValue(value: AutoscalingplansScalingPlanApplicationSource | undefined);
    private _cloudformationStackArn?;
    get cloudformationStackArn(): string;
    set cloudformationStackArn(value: string);
    resetCloudformationStackArn(): void;
    get cloudformationStackArnInput(): string | undefined;
    private _tagFilter;
    get tagFilter(): AutoscalingplansScalingPlanApplicationSourceTagFilterList;
    putTagFilter(value: AutoscalingplansScalingPlanApplicationSourceTagFilter[] | cdktf.IResolvable): void;
    resetTagFilter(): void;
    get tagFilterInput(): cdktf.IResolvable | AutoscalingplansScalingPlanApplicationSourceTagFilter[] | undefined;
}
export interface AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification {
    /** (Optional) Dimensions of the metric. */
    readonly dimensions?: {
        [key: string]: string;
    };
    /** (Required) Name of the metric. */
    readonly metricName: string;
    /** (Required) Namespace of the metric. */
    readonly namespace: string;
    /** (Required) Statistic of the metric. Currently, the value must always be `Sum`. */
    readonly statistic: string;
    /** (Optional) Unit of the metric. */
    readonly unit?: string;
}
export declare function autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference | AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification): any;
export declare function autoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationToHclTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference | AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification): any;
export declare class AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification | undefined;
    set internalValue(value: AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification | undefined);
    private _dimensions?;
    get dimensions(): {
        [key: string]: string;
    };
    set dimensions(value: {
        [key: string]: string;
    });
    resetDimensions(): void;
    get dimensionsInput(): {
        [key: string]: string;
    } | undefined;
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
    private _statistic?;
    get statistic(): string;
    set statistic(value: string);
    get statisticInput(): string | undefined;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string | undefined;
}
export interface AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification {
    /** (Required) Metric type. Valid values: `ALBTargetGroupRequestCount`, `ASGTotalCPUUtilization`, `ASGTotalNetworkIn`, `ASGTotalNetworkOut`. */
    readonly predefinedLoadMetricType: string;
    /** (Optional) Identifies the resource associated with the metric type. */
    readonly resourceLabel?: string;
}
export declare function autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference | AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification): any;
export declare function autoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationToHclTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference | AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification): any;
export declare class AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification | undefined;
    set internalValue(value: AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification | undefined);
    private _predefinedLoadMetricType?;
    get predefinedLoadMetricType(): string;
    set predefinedLoadMetricType(value: string);
    get predefinedLoadMetricTypeInput(): string | undefined;
    private _resourceLabel?;
    get resourceLabel(): string;
    set resourceLabel(value: string);
    resetResourceLabel(): void;
    get resourceLabelInput(): string | undefined;
}
export interface AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification {
    /** (Optional) Dimensions of the metric. */
    readonly dimensions?: {
        [key: string]: string;
    };
    /** (Required) Name of the metric. */
    readonly metricName: string;
    /** (Required) Namespace of the metric. */
    readonly namespace: string;
    /** (Required) Statistic of the metric. Valid values: `Average`, `Maximum`, `Minimum`, `SampleCount`, `Sum`. */
    readonly statistic: string;
    /** (Optional) Unit of the metric. */
    readonly unit?: string;
}
export declare function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference | AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification): any;
export declare function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationToHclTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference | AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification): any;
export declare class AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification | undefined;
    set internalValue(value: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification | undefined);
    private _dimensions?;
    get dimensions(): {
        [key: string]: string;
    };
    set dimensions(value: {
        [key: string]: string;
    });
    resetDimensions(): void;
    get dimensionsInput(): {
        [key: string]: string;
    } | undefined;
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    get namespaceInput(): string | undefined;
    private _statistic?;
    get statistic(): string;
    set statistic(value: string);
    get statisticInput(): string | undefined;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string | undefined;
}
export interface AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification {
    /** (Required) Metric type. Valid values: `ALBRequestCountPerTarget`, `ASGAverageCPUUtilization`, `ASGAverageNetworkIn`, `ASGAverageNetworkOut`, `DynamoDBReadCapacityUtilization`, `DynamoDBWriteCapacityUtilization`, `ECSServiceAverageCPUUtilization`, `ECSServiceAverageMemoryUtilization`, `EC2SpotFleetRequestAverageCPUUtilization`, `EC2SpotFleetRequestAverageNetworkIn`, `EC2SpotFleetRequestAverageNetworkOut`, `RDSReaderAverageCPUUtilization`, `RDSReaderAverageDatabaseConnections`. */
    readonly predefinedScalingMetricType: string;
    /** (Optional) Identifies the resource associated with the metric type. */
    readonly resourceLabel?: string;
}
export declare function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference | AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification): any;
export declare function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationToHclTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference | AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification): any;
export declare class AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification | undefined;
    set internalValue(value: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification | undefined);
    private _predefinedScalingMetricType?;
    get predefinedScalingMetricType(): string;
    set predefinedScalingMetricType(value: string);
    get predefinedScalingMetricTypeInput(): string | undefined;
    private _resourceLabel?;
    get resourceLabel(): string;
    set resourceLabel(value: string);
    resetResourceLabel(): void;
    get resourceLabelInput(): string | undefined;
}
export interface AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration {
    /** (Optional) Boolean indicating whether scale in by the target tracking scaling policy is disabled. Defaults to `false`. */
    readonly disableScaleIn?: boolean | cdktf.IResolvable;
    /** (Optional) Estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. */
    readonly estimatedInstanceWarmup?: number;
    /** (Optional) Amount of time, in seconds, after a scale in activity completes before another scale in activity can start. */
    readonly scaleInCooldown?: number;
    /** (Optional) Amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start. */
    readonly scaleOutCooldown?: number;
    /** (Required) Target value for the metric. */
    readonly targetValue: number;
    /** */
    readonly customizedScalingMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification;
    /** */
    readonly predefinedScalingMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification;
}
export declare function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration | cdktf.IResolvable): any;
export declare function autoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationToHclTerraform(struct?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration | cdktf.IResolvable): any;
export declare class AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration | cdktf.IResolvable | undefined);
    private _disableScaleIn?;
    get disableScaleIn(): boolean | cdktf.IResolvable;
    set disableScaleIn(value: boolean | cdktf.IResolvable);
    resetDisableScaleIn(): void;
    get disableScaleInInput(): boolean | cdktf.IResolvable | undefined;
    private _estimatedInstanceWarmup?;
    get estimatedInstanceWarmup(): number;
    set estimatedInstanceWarmup(value: number);
    resetEstimatedInstanceWarmup(): void;
    get estimatedInstanceWarmupInput(): number | undefined;
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
    private _customizedScalingMetricSpecification;
    get customizedScalingMetricSpecification(): AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecificationOutputReference;
    putCustomizedScalingMetricSpecification(value: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification): void;
    resetCustomizedScalingMetricSpecification(): void;
    get customizedScalingMetricSpecificationInput(): AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationCustomizedScalingMetricSpecification | undefined;
    private _predefinedScalingMetricSpecification;
    get predefinedScalingMetricSpecification(): AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecificationOutputReference;
    putPredefinedScalingMetricSpecification(value: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification): void;
    resetPredefinedScalingMetricSpecification(): void;
    get predefinedScalingMetricSpecificationInput(): AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationPredefinedScalingMetricSpecification | undefined;
}
export declare class AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationOutputReference;
}
export interface AutoscalingplansScalingPlanScalingInstruction {
    /** (Optional) Boolean controlling whether dynamic scaling by AWS Auto Scaling is disabled. Defaults to `false`. */
    readonly disableDynamicScaling?: boolean | cdktf.IResolvable;
    /** (Required) Maximum capacity of the resource. The exception to this upper limit is if you specify a non-default setting for `predictiveScalingMaxCapacityBehavior`. */
    readonly maxCapacity: number;
    /** (Required) Minimum capacity of the resource. */
    readonly minCapacity: number;
    /** (Optional) Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity specified for the resource. */
    readonly predictiveScalingMaxCapacityBehavior?: string;
    /** (Optional) Size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. */
    readonly predictiveScalingMaxCapacityBuffer?: number;
    /** (Optional) Predictive scaling mode. Valid values: `ForecastAndScale`, `ForecastOnly`. */
    readonly predictiveScalingMode?: string;
    /** (Required) ID of the resource. This string consists of the resource type and unique identifier. */
    readonly resourceId: string;
    /** (Required) Scalable dimension associated with the resource. Valid values: `autoscaling:autoScalingGroup:DesiredCapacity`, `dynamodb:index:ReadCapacityUnits`, `dynamodb:index:WriteCapacityUnits`, `dynamodb:table:ReadCapacityUnits`, `dynamodb:table:WriteCapacityUnits`, `ecs:service:DesiredCount`, `ec2:spot-fleet-request:TargetCapacity`, `rds:cluster:ReadReplicaCount`. */
    readonly scalableDimension: string;
    /** (Optional) Controls whether a resource's externally created scaling policies are kept or replaced. Valid values: `KeepExternalPolicies`, `ReplaceExternalPolicies`. Defaults to `KeepExternalPolicies`. */
    readonly scalingPolicyUpdateBehavior?: string;
    /** (Optional) Amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out. */
    readonly scheduledActionBufferTime?: number;
    /** (Required) Namespace of the AWS service. Valid values: `autoscaling`, `dynamodb`, `ecs`, `ec2`, `rds`. */
    readonly serviceNamespace: string;
    /** */
    readonly customizedLoadMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification;
    /** */
    readonly predefinedLoadMetricSpecification?: AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification;
    /** */
    readonly targetTrackingConfiguration: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration[] | cdktf.IResolvable;
}
export declare function autoscalingplansScalingPlanScalingInstructionToTerraform(struct?: AutoscalingplansScalingPlanScalingInstruction | cdktf.IResolvable): any;
export declare function autoscalingplansScalingPlanScalingInstructionToHclTerraform(struct?: AutoscalingplansScalingPlanScalingInstruction | cdktf.IResolvable): any;
export declare class AutoscalingplansScalingPlanScalingInstructionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): AutoscalingplansScalingPlanScalingInstruction | cdktf.IResolvable | undefined;
    set internalValue(value: AutoscalingplansScalingPlanScalingInstruction | cdktf.IResolvable | undefined);
    private _disableDynamicScaling?;
    get disableDynamicScaling(): boolean | cdktf.IResolvable;
    set disableDynamicScaling(value: boolean | cdktf.IResolvable);
    resetDisableDynamicScaling(): void;
    get disableDynamicScalingInput(): boolean | cdktf.IResolvable | undefined;
    private _maxCapacity?;
    get maxCapacity(): number;
    set maxCapacity(value: number);
    get maxCapacityInput(): number | undefined;
    private _minCapacity?;
    get minCapacity(): number;
    set minCapacity(value: number);
    get minCapacityInput(): number | undefined;
    private _predictiveScalingMaxCapacityBehavior?;
    get predictiveScalingMaxCapacityBehavior(): string;
    set predictiveScalingMaxCapacityBehavior(value: string);
    resetPredictiveScalingMaxCapacityBehavior(): void;
    get predictiveScalingMaxCapacityBehaviorInput(): string | undefined;
    private _predictiveScalingMaxCapacityBuffer?;
    get predictiveScalingMaxCapacityBuffer(): number;
    set predictiveScalingMaxCapacityBuffer(value: number);
    resetPredictiveScalingMaxCapacityBuffer(): void;
    get predictiveScalingMaxCapacityBufferInput(): number | undefined;
    private _predictiveScalingMode?;
    get predictiveScalingMode(): string;
    set predictiveScalingMode(value: string);
    resetPredictiveScalingMode(): void;
    get predictiveScalingModeInput(): string | undefined;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string | undefined;
    private _scalableDimension?;
    get scalableDimension(): string;
    set scalableDimension(value: string);
    get scalableDimensionInput(): string | undefined;
    private _scalingPolicyUpdateBehavior?;
    get scalingPolicyUpdateBehavior(): string;
    set scalingPolicyUpdateBehavior(value: string);
    resetScalingPolicyUpdateBehavior(): void;
    get scalingPolicyUpdateBehaviorInput(): string | undefined;
    private _scheduledActionBufferTime?;
    get scheduledActionBufferTime(): number;
    set scheduledActionBufferTime(value: number);
    resetScheduledActionBufferTime(): void;
    get scheduledActionBufferTimeInput(): number | undefined;
    private _serviceNamespace?;
    get serviceNamespace(): string;
    set serviceNamespace(value: string);
    get serviceNamespaceInput(): string | undefined;
    private _customizedLoadMetricSpecification;
    get customizedLoadMetricSpecification(): AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecificationOutputReference;
    putCustomizedLoadMetricSpecification(value: AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification): void;
    resetCustomizedLoadMetricSpecification(): void;
    get customizedLoadMetricSpecificationInput(): AutoscalingplansScalingPlanScalingInstructionCustomizedLoadMetricSpecification | undefined;
    private _predefinedLoadMetricSpecification;
    get predefinedLoadMetricSpecification(): AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecificationOutputReference;
    putPredefinedLoadMetricSpecification(value: AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification): void;
    resetPredefinedLoadMetricSpecification(): void;
    get predefinedLoadMetricSpecificationInput(): AutoscalingplansScalingPlanScalingInstructionPredefinedLoadMetricSpecification | undefined;
    private _targetTrackingConfiguration;
    get targetTrackingConfiguration(): AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfigurationList;
    putTargetTrackingConfiguration(value: AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration[] | cdktf.IResolvable): void;
    get targetTrackingConfigurationInput(): cdktf.IResolvable | AutoscalingplansScalingPlanScalingInstructionTargetTrackingConfiguration[] | undefined;
}
export declare class AutoscalingplansScalingPlanScalingInstructionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: AutoscalingplansScalingPlanScalingInstruction[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): AutoscalingplansScalingPlanScalingInstructionOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscalingplans_scaling_plan aws_autoscalingplans_scaling_plan}
*/
export declare class AutoscalingplansScalingPlan extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_autoscalingplans_scaling_plan";
    /**
    * Generates CDKTF code for importing a AutoscalingplansScalingPlan resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AutoscalingplansScalingPlan to import
    * @param importFromId The id of the existing AutoscalingplansScalingPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscalingplans_scaling_plan#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AutoscalingplansScalingPlan to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/autoscalingplans_scaling_plan aws_autoscalingplans_scaling_plan} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AutoscalingplansScalingPlanConfig
    */
    constructor(scope: Construct, id: string, config: AutoscalingplansScalingPlanConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get scalingPlanVersion(): number;
    private _applicationSource;
    get applicationSource(): AutoscalingplansScalingPlanApplicationSourceOutputReference;
    putApplicationSource(value: AutoscalingplansScalingPlanApplicationSource): void;
    get applicationSourceInput(): AutoscalingplansScalingPlanApplicationSource | undefined;
    private _scalingInstruction;
    get scalingInstruction(): AutoscalingplansScalingPlanScalingInstructionList;
    putScalingInstruction(value: AutoscalingplansScalingPlanScalingInstruction[] | cdktf.IResolvable): void;
    get scalingInstructionInput(): cdktf.IResolvable | AutoscalingplansScalingPlanScalingInstruction[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
