/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudwatchMetricAlarmConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#actions_enabled CloudwatchMetricAlarm#actions_enabled}
    */
    readonly actionsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#alarm_actions CloudwatchMetricAlarm#alarm_actions}
    */
    readonly alarmActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#alarm_description CloudwatchMetricAlarm#alarm_description}
    */
    readonly alarmDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#alarm_name CloudwatchMetricAlarm#alarm_name}
    */
    readonly alarmName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#comparison_operator CloudwatchMetricAlarm#comparison_operator}
    */
    readonly comparisonOperator: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#datapoints_to_alarm CloudwatchMetricAlarm#datapoints_to_alarm}
    */
    readonly datapointsToAlarm?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}
    */
    readonly dimensions?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#evaluate_low_sample_count_percentiles CloudwatchMetricAlarm#evaluate_low_sample_count_percentiles}
    */
    readonly evaluateLowSampleCountPercentiles?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#evaluation_periods CloudwatchMetricAlarm#evaluation_periods}
    */
    readonly evaluationPeriods: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#extended_statistic CloudwatchMetricAlarm#extended_statistic}
    */
    readonly extendedStatistic?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#insufficient_data_actions CloudwatchMetricAlarm#insufficient_data_actions}
    */
    readonly insufficientDataActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}
    */
    readonly metricName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#ok_actions CloudwatchMetricAlarm#ok_actions}
    */
    readonly okActions?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}
    */
    readonly period?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#statistic CloudwatchMetricAlarm#statistic}
    */
    readonly statistic?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#tags CloudwatchMetricAlarm#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#tags_all CloudwatchMetricAlarm#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#threshold CloudwatchMetricAlarm#threshold}
    */
    readonly threshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#threshold_metric_id CloudwatchMetricAlarm#threshold_metric_id}
    */
    readonly thresholdMetricId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#treat_missing_data CloudwatchMetricAlarm#treat_missing_data}
    */
    readonly treatMissingData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}
    */
    readonly unit?: string;
    /**
    * metric_query block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#metric_query CloudwatchMetricAlarm#metric_query}
    */
    readonly metricQuery?: CloudwatchMetricAlarmMetricQuery[] | cdktf.IResolvable;
}
export interface CloudwatchMetricAlarmMetricQueryMetric {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#dimensions CloudwatchMetricAlarm#dimensions}
    */
    readonly dimensions?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#metric_name CloudwatchMetricAlarm#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#namespace CloudwatchMetricAlarm#namespace}
    */
    readonly namespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}
    */
    readonly period: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#stat CloudwatchMetricAlarm#stat}
    */
    readonly stat: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#unit CloudwatchMetricAlarm#unit}
    */
    readonly unit?: string;
}
export declare function cloudwatchMetricAlarmMetricQueryMetricToTerraform(struct?: CloudwatchMetricAlarmMetricQueryMetricOutputReference | CloudwatchMetricAlarmMetricQueryMetric): any;
export declare function cloudwatchMetricAlarmMetricQueryMetricToHclTerraform(struct?: CloudwatchMetricAlarmMetricQueryMetricOutputReference | CloudwatchMetricAlarmMetricQueryMetric): any;
export declare class CloudwatchMetricAlarmMetricQueryMetricOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): CloudwatchMetricAlarmMetricQueryMetric | undefined;
    set internalValue(value: CloudwatchMetricAlarmMetricQueryMetric | undefined);
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
    resetNamespace(): void;
    get namespaceInput(): string | undefined;
    private _period?;
    get period(): number;
    set period(value: number);
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
}
export interface CloudwatchMetricAlarmMetricQuery {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#account_id CloudwatchMetricAlarm#account_id}
    */
    readonly accountId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#expression CloudwatchMetricAlarm#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#id CloudwatchMetricAlarm#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#label CloudwatchMetricAlarm#label}
    */
    readonly label?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#period CloudwatchMetricAlarm#period}
    */
    readonly period?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#return_data CloudwatchMetricAlarm#return_data}
    */
    readonly returnData?: boolean | cdktf.IResolvable;
    /**
    * metric block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#metric CloudwatchMetricAlarm#metric}
    */
    readonly metric?: CloudwatchMetricAlarmMetricQueryMetric;
}
export declare function cloudwatchMetricAlarmMetricQueryToTerraform(struct?: CloudwatchMetricAlarmMetricQuery | cdktf.IResolvable): any;
export declare function cloudwatchMetricAlarmMetricQueryToHclTerraform(struct?: CloudwatchMetricAlarmMetricQuery | cdktf.IResolvable): any;
export declare class CloudwatchMetricAlarmMetricQueryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): CloudwatchMetricAlarmMetricQuery | cdktf.IResolvable | undefined;
    set internalValue(value: CloudwatchMetricAlarmMetricQuery | cdktf.IResolvable | undefined);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    resetAccountId(): void;
    get accountIdInput(): string | undefined;
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
    private _period?;
    get period(): number;
    set period(value: number);
    resetPeriod(): void;
    get periodInput(): number | undefined;
    private _returnData?;
    get returnData(): boolean | cdktf.IResolvable;
    set returnData(value: boolean | cdktf.IResolvable);
    resetReturnData(): void;
    get returnDataInput(): boolean | cdktf.IResolvable | undefined;
    private _metric;
    get metric(): CloudwatchMetricAlarmMetricQueryMetricOutputReference;
    putMetric(value: CloudwatchMetricAlarmMetricQueryMetric): void;
    resetMetric(): void;
    get metricInput(): CloudwatchMetricAlarmMetricQueryMetric | undefined;
}
export declare class CloudwatchMetricAlarmMetricQueryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: CloudwatchMetricAlarmMetricQuery[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): CloudwatchMetricAlarmMetricQueryOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm aws_cloudwatch_metric_alarm}
*/
export declare class CloudwatchMetricAlarm extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudwatch_metric_alarm";
    /**
    * Generates CDKTF code for importing a CloudwatchMetricAlarm resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudwatchMetricAlarm to import
    * @param importFromId The id of the existing CloudwatchMetricAlarm that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudwatchMetricAlarm to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/cloudwatch_metric_alarm aws_cloudwatch_metric_alarm} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchMetricAlarmConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchMetricAlarmConfig);
    private _actionsEnabled?;
    get actionsEnabled(): boolean | cdktf.IResolvable;
    set actionsEnabled(value: boolean | cdktf.IResolvable);
    resetActionsEnabled(): void;
    get actionsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _alarmActions?;
    get alarmActions(): string[];
    set alarmActions(value: string[]);
    resetAlarmActions(): void;
    get alarmActionsInput(): string[] | undefined;
    private _alarmDescription?;
    get alarmDescription(): string;
    set alarmDescription(value: string);
    resetAlarmDescription(): void;
    get alarmDescriptionInput(): string | undefined;
    private _alarmName?;
    get alarmName(): string;
    set alarmName(value: string);
    get alarmNameInput(): string | undefined;
    get arn(): string;
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string | undefined;
    private _datapointsToAlarm?;
    get datapointsToAlarm(): number;
    set datapointsToAlarm(value: number);
    resetDatapointsToAlarm(): void;
    get datapointsToAlarmInput(): number | undefined;
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
    private _evaluateLowSampleCountPercentiles?;
    get evaluateLowSampleCountPercentiles(): string;
    set evaluateLowSampleCountPercentiles(value: string);
    resetEvaluateLowSampleCountPercentiles(): void;
    get evaluateLowSampleCountPercentilesInput(): string | undefined;
    private _evaluationPeriods?;
    get evaluationPeriods(): number;
    set evaluationPeriods(value: number);
    get evaluationPeriodsInput(): number | undefined;
    private _extendedStatistic?;
    get extendedStatistic(): string;
    set extendedStatistic(value: string);
    resetExtendedStatistic(): void;
    get extendedStatisticInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _insufficientDataActions?;
    get insufficientDataActions(): string[];
    set insufficientDataActions(value: string[]);
    resetInsufficientDataActions(): void;
    get insufficientDataActionsInput(): string[] | undefined;
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
    private _okActions?;
    get okActions(): string[];
    set okActions(value: string[]);
    resetOkActions(): void;
    get okActionsInput(): string[] | undefined;
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
    private _threshold?;
    get threshold(): number;
    set threshold(value: number);
    resetThreshold(): void;
    get thresholdInput(): number | undefined;
    private _thresholdMetricId?;
    get thresholdMetricId(): string;
    set thresholdMetricId(value: string);
    resetThresholdMetricId(): void;
    get thresholdMetricIdInput(): string | undefined;
    private _treatMissingData?;
    get treatMissingData(): string;
    set treatMissingData(value: string);
    resetTreatMissingData(): void;
    get treatMissingDataInput(): string | undefined;
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string | undefined;
    private _metricQuery;
    get metricQuery(): CloudwatchMetricAlarmMetricQueryList;
    putMetricQuery(value: CloudwatchMetricAlarmMetricQuery[] | cdktf.IResolvable): void;
    resetMetricQuery(): void;
    get metricQueryInput(): cdktf.IResolvable | CloudwatchMetricAlarmMetricQuery[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
