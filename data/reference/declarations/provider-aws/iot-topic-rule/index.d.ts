/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface IotTopicRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#description IotTopicRule#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#enabled IotTopicRule#enabled}
    */
    readonly enabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#id IotTopicRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#name IotTopicRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#sql IotTopicRule#sql}
    */
    readonly sql: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#sql_version IotTopicRule#sql_version}
    */
    readonly sqlVersion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#tags IotTopicRule#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#tags_all IotTopicRule#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * cloudwatch_alarm block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}
    */
    readonly cloudwatchAlarm?: IotTopicRuleCloudwatchAlarm[] | cdktf.IResolvable;
    /**
    * cloudwatch_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#cloudwatch_logs IotTopicRule#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: IotTopicRuleCloudwatchLogs[] | cdktf.IResolvable;
    /**
    * cloudwatch_metric block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#cloudwatch_metric IotTopicRule#cloudwatch_metric}
    */
    readonly cloudwatchMetric?: IotTopicRuleCloudwatchMetric[] | cdktf.IResolvable;
    /**
    * dynamodb block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#dynamodb IotTopicRule#dynamodb}
    */
    readonly dynamodb?: IotTopicRuleDynamodb[] | cdktf.IResolvable;
    /**
    * dynamodbv2 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#dynamodbv2 IotTopicRule#dynamodbv2}
    */
    readonly dynamodbv2?: IotTopicRuleDynamodbv2[] | cdktf.IResolvable;
    /**
    * elasticsearch block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#elasticsearch IotTopicRule#elasticsearch}
    */
    readonly elasticsearch?: IotTopicRuleElasticsearch[] | cdktf.IResolvable;
    /**
    * error_action block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#error_action IotTopicRule#error_action}
    */
    readonly errorAction?: IotTopicRuleErrorAction;
    /**
    * firehose block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#firehose IotTopicRule#firehose}
    */
    readonly firehose?: IotTopicRuleFirehose[] | cdktf.IResolvable;
    /**
    * http block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#http IotTopicRule#http}
    */
    readonly http?: IotTopicRuleHttp[] | cdktf.IResolvable;
    /**
    * iot_analytics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#iot_analytics IotTopicRule#iot_analytics}
    */
    readonly iotAnalytics?: IotTopicRuleIotAnalytics[] | cdktf.IResolvable;
    /**
    * iot_events block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#iot_events IotTopicRule#iot_events}
    */
    readonly iotEvents?: IotTopicRuleIotEvents[] | cdktf.IResolvable;
    /**
    * kafka block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#kafka IotTopicRule#kafka}
    */
    readonly kafka?: IotTopicRuleKafka[] | cdktf.IResolvable;
    /**
    * kinesis block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#kinesis IotTopicRule#kinesis}
    */
    readonly kinesis?: IotTopicRuleKinesis[] | cdktf.IResolvable;
    /**
    * lambda block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#lambda IotTopicRule#lambda}
    */
    readonly lambda?: IotTopicRuleLambda[] | cdktf.IResolvable;
    /**
    * republish block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#republish IotTopicRule#republish}
    */
    readonly republish?: IotTopicRuleRepublish[] | cdktf.IResolvable;
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#s3 IotTopicRule#s3}
    */
    readonly s3?: IotTopicRuleS3[] | cdktf.IResolvable;
    /**
    * sns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#sns IotTopicRule#sns}
    */
    readonly sns?: IotTopicRuleSns[] | cdktf.IResolvable;
    /**
    * sqs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#sqs IotTopicRule#sqs}
    */
    readonly sqs?: IotTopicRuleSqs[] | cdktf.IResolvable;
    /**
    * step_functions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#step_functions IotTopicRule#step_functions}
    */
    readonly stepFunctions?: IotTopicRuleStepFunctions[] | cdktf.IResolvable;
    /**
    * timestream block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#timestream IotTopicRule#timestream}
    */
    readonly timestream?: IotTopicRuleTimestream[] | cdktf.IResolvable;
}
export interface IotTopicRuleCloudwatchAlarm {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#alarm_name IotTopicRule#alarm_name}
    */
    readonly alarmName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#state_reason IotTopicRule#state_reason}
    */
    readonly stateReason: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#state_value IotTopicRule#state_value}
    */
    readonly stateValue: string;
}
export declare function iotTopicRuleCloudwatchAlarmToTerraform(struct?: IotTopicRuleCloudwatchAlarm | cdktf.IResolvable): any;
export declare function iotTopicRuleCloudwatchAlarmToHclTerraform(struct?: IotTopicRuleCloudwatchAlarm | cdktf.IResolvable): any;
export declare class IotTopicRuleCloudwatchAlarmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleCloudwatchAlarm | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleCloudwatchAlarm | cdktf.IResolvable | undefined);
    private _alarmName?;
    get alarmName(): string;
    set alarmName(value: string);
    get alarmNameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _stateReason?;
    get stateReason(): string;
    set stateReason(value: string);
    get stateReasonInput(): string | undefined;
    private _stateValue?;
    get stateValue(): string;
    set stateValue(value: string);
    get stateValueInput(): string | undefined;
}
export declare class IotTopicRuleCloudwatchAlarmList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleCloudwatchAlarm[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleCloudwatchAlarmOutputReference;
}
export interface IotTopicRuleCloudwatchLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
    */
    readonly batchMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#log_group_name IotTopicRule#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleCloudwatchLogsToTerraform(struct?: IotTopicRuleCloudwatchLogs | cdktf.IResolvable): any;
export declare function iotTopicRuleCloudwatchLogsToHclTerraform(struct?: IotTopicRuleCloudwatchLogs | cdktf.IResolvable): any;
export declare class IotTopicRuleCloudwatchLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleCloudwatchLogs | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleCloudwatchLogs | cdktf.IResolvable | undefined);
    private _batchMode?;
    get batchMode(): boolean | cdktf.IResolvable;
    set batchMode(value: boolean | cdktf.IResolvable);
    resetBatchMode(): void;
    get batchModeInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    get logGroupNameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export declare class IotTopicRuleCloudwatchLogsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleCloudwatchLogs[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleCloudwatchLogsOutputReference;
}
export interface IotTopicRuleCloudwatchMetric {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#metric_name IotTopicRule#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#metric_namespace IotTopicRule#metric_namespace}
    */
    readonly metricNamespace: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#metric_timestamp IotTopicRule#metric_timestamp}
    */
    readonly metricTimestamp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#metric_unit IotTopicRule#metric_unit}
    */
    readonly metricUnit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#metric_value IotTopicRule#metric_value}
    */
    readonly metricValue: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleCloudwatchMetricToTerraform(struct?: IotTopicRuleCloudwatchMetric | cdktf.IResolvable): any;
export declare function iotTopicRuleCloudwatchMetricToHclTerraform(struct?: IotTopicRuleCloudwatchMetric | cdktf.IResolvable): any;
export declare class IotTopicRuleCloudwatchMetricOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleCloudwatchMetric | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleCloudwatchMetric | cdktf.IResolvable | undefined);
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _metricNamespace?;
    get metricNamespace(): string;
    set metricNamespace(value: string);
    get metricNamespaceInput(): string | undefined;
    private _metricTimestamp?;
    get metricTimestamp(): string;
    set metricTimestamp(value: string);
    resetMetricTimestamp(): void;
    get metricTimestampInput(): string | undefined;
    private _metricUnit?;
    get metricUnit(): string;
    set metricUnit(value: string);
    get metricUnitInput(): string | undefined;
    private _metricValue?;
    get metricValue(): string;
    set metricValue(value: string);
    get metricValueInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export declare class IotTopicRuleCloudwatchMetricList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleCloudwatchMetric[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleCloudwatchMetricOutputReference;
}
export interface IotTopicRuleDynamodb {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#hash_key_field IotTopicRule#hash_key_field}
    */
    readonly hashKeyField: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#hash_key_type IotTopicRule#hash_key_type}
    */
    readonly hashKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#hash_key_value IotTopicRule#hash_key_value}
    */
    readonly hashKeyValue: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#operation IotTopicRule#operation}
    */
    readonly operation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#payload_field IotTopicRule#payload_field}
    */
    readonly payloadField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#range_key_field IotTopicRule#range_key_field}
    */
    readonly rangeKeyField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#range_key_type IotTopicRule#range_key_type}
    */
    readonly rangeKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#range_key_value IotTopicRule#range_key_value}
    */
    readonly rangeKeyValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
    */
    readonly tableName: string;
}
export declare function iotTopicRuleDynamodbToTerraform(struct?: IotTopicRuleDynamodb | cdktf.IResolvable): any;
export declare function iotTopicRuleDynamodbToHclTerraform(struct?: IotTopicRuleDynamodb | cdktf.IResolvable): any;
export declare class IotTopicRuleDynamodbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleDynamodb | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleDynamodb | cdktf.IResolvable | undefined);
    private _hashKeyField?;
    get hashKeyField(): string;
    set hashKeyField(value: string);
    get hashKeyFieldInput(): string | undefined;
    private _hashKeyType?;
    get hashKeyType(): string;
    set hashKeyType(value: string);
    resetHashKeyType(): void;
    get hashKeyTypeInput(): string | undefined;
    private _hashKeyValue?;
    get hashKeyValue(): string;
    set hashKeyValue(value: string);
    get hashKeyValueInput(): string | undefined;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    resetOperation(): void;
    get operationInput(): string | undefined;
    private _payloadField?;
    get payloadField(): string;
    set payloadField(value: string);
    resetPayloadField(): void;
    get payloadFieldInput(): string | undefined;
    private _rangeKeyField?;
    get rangeKeyField(): string;
    set rangeKeyField(value: string);
    resetRangeKeyField(): void;
    get rangeKeyFieldInput(): string | undefined;
    private _rangeKeyType?;
    get rangeKeyType(): string;
    set rangeKeyType(value: string);
    resetRangeKeyType(): void;
    get rangeKeyTypeInput(): string | undefined;
    private _rangeKeyValue?;
    get rangeKeyValue(): string;
    set rangeKeyValue(value: string);
    resetRangeKeyValue(): void;
    get rangeKeyValueInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
}
export declare class IotTopicRuleDynamodbList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleDynamodb[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleDynamodbOutputReference;
}
export interface IotTopicRuleDynamodbv2PutItem {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
    */
    readonly tableName: string;
}
export declare function iotTopicRuleDynamodbv2PutItemToTerraform(struct?: IotTopicRuleDynamodbv2PutItemOutputReference | IotTopicRuleDynamodbv2PutItem): any;
export declare function iotTopicRuleDynamodbv2PutItemToHclTerraform(struct?: IotTopicRuleDynamodbv2PutItemOutputReference | IotTopicRuleDynamodbv2PutItem): any;
export declare class IotTopicRuleDynamodbv2PutItemOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleDynamodbv2PutItem | undefined;
    set internalValue(value: IotTopicRuleDynamodbv2PutItem | undefined);
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
}
export interface IotTopicRuleDynamodbv2 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * put_item block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#put_item IotTopicRule#put_item}
    */
    readonly putItem?: IotTopicRuleDynamodbv2PutItem;
}
export declare function iotTopicRuleDynamodbv2ToTerraform(struct?: IotTopicRuleDynamodbv2 | cdktf.IResolvable): any;
export declare function iotTopicRuleDynamodbv2ToHclTerraform(struct?: IotTopicRuleDynamodbv2 | cdktf.IResolvable): any;
export declare class IotTopicRuleDynamodbv2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleDynamodbv2 | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleDynamodbv2 | cdktf.IResolvable | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _putItem;
    get putItem(): IotTopicRuleDynamodbv2PutItemOutputReference;
    putPutItem(value: IotTopicRuleDynamodbv2PutItem): void;
    resetPutItem(): void;
    get putItemInput(): IotTopicRuleDynamodbv2PutItem | undefined;
}
export declare class IotTopicRuleDynamodbv2List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleDynamodbv2[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleDynamodbv2OutputReference;
}
export interface IotTopicRuleElasticsearch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#endpoint IotTopicRule#endpoint}
    */
    readonly endpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#id IotTopicRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#index IotTopicRule#index}
    */
    readonly index: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#type IotTopicRule#type}
    */
    readonly type: string;
}
export declare function iotTopicRuleElasticsearchToTerraform(struct?: IotTopicRuleElasticsearch | cdktf.IResolvable): any;
export declare function iotTopicRuleElasticsearchToHclTerraform(struct?: IotTopicRuleElasticsearch | cdktf.IResolvable): any;
export declare class IotTopicRuleElasticsearchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleElasticsearch | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleElasticsearch | cdktf.IResolvable | undefined);
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    get endpointInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _index?;
    get index(): string;
    set index(value: string);
    get indexInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class IotTopicRuleElasticsearchList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleElasticsearch[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleElasticsearchOutputReference;
}
export interface IotTopicRuleErrorActionCloudwatchAlarm {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#alarm_name IotTopicRule#alarm_name}
    */
    readonly alarmName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#state_reason IotTopicRule#state_reason}
    */
    readonly stateReason: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#state_value IotTopicRule#state_value}
    */
    readonly stateValue: string;
}
export declare function iotTopicRuleErrorActionCloudwatchAlarmToTerraform(struct?: IotTopicRuleErrorActionCloudwatchAlarmOutputReference | IotTopicRuleErrorActionCloudwatchAlarm): any;
export declare function iotTopicRuleErrorActionCloudwatchAlarmToHclTerraform(struct?: IotTopicRuleErrorActionCloudwatchAlarmOutputReference | IotTopicRuleErrorActionCloudwatchAlarm): any;
export declare class IotTopicRuleErrorActionCloudwatchAlarmOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionCloudwatchAlarm | undefined;
    set internalValue(value: IotTopicRuleErrorActionCloudwatchAlarm | undefined);
    private _alarmName?;
    get alarmName(): string;
    set alarmName(value: string);
    get alarmNameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _stateReason?;
    get stateReason(): string;
    set stateReason(value: string);
    get stateReasonInput(): string | undefined;
    private _stateValue?;
    get stateValue(): string;
    set stateValue(value: string);
    get stateValueInput(): string | undefined;
}
export interface IotTopicRuleErrorActionCloudwatchLogs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
    */
    readonly batchMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#log_group_name IotTopicRule#log_group_name}
    */
    readonly logGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleErrorActionCloudwatchLogsToTerraform(struct?: IotTopicRuleErrorActionCloudwatchLogsOutputReference | IotTopicRuleErrorActionCloudwatchLogs): any;
export declare function iotTopicRuleErrorActionCloudwatchLogsToHclTerraform(struct?: IotTopicRuleErrorActionCloudwatchLogsOutputReference | IotTopicRuleErrorActionCloudwatchLogs): any;
export declare class IotTopicRuleErrorActionCloudwatchLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionCloudwatchLogs | undefined;
    set internalValue(value: IotTopicRuleErrorActionCloudwatchLogs | undefined);
    private _batchMode?;
    get batchMode(): boolean | cdktf.IResolvable;
    set batchMode(value: boolean | cdktf.IResolvable);
    resetBatchMode(): void;
    get batchModeInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    get logGroupNameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export interface IotTopicRuleErrorActionCloudwatchMetric {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#metric_name IotTopicRule#metric_name}
    */
    readonly metricName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#metric_namespace IotTopicRule#metric_namespace}
    */
    readonly metricNamespace: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#metric_timestamp IotTopicRule#metric_timestamp}
    */
    readonly metricTimestamp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#metric_unit IotTopicRule#metric_unit}
    */
    readonly metricUnit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#metric_value IotTopicRule#metric_value}
    */
    readonly metricValue: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleErrorActionCloudwatchMetricToTerraform(struct?: IotTopicRuleErrorActionCloudwatchMetricOutputReference | IotTopicRuleErrorActionCloudwatchMetric): any;
export declare function iotTopicRuleErrorActionCloudwatchMetricToHclTerraform(struct?: IotTopicRuleErrorActionCloudwatchMetricOutputReference | IotTopicRuleErrorActionCloudwatchMetric): any;
export declare class IotTopicRuleErrorActionCloudwatchMetricOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionCloudwatchMetric | undefined;
    set internalValue(value: IotTopicRuleErrorActionCloudwatchMetric | undefined);
    private _metricName?;
    get metricName(): string;
    set metricName(value: string);
    get metricNameInput(): string | undefined;
    private _metricNamespace?;
    get metricNamespace(): string;
    set metricNamespace(value: string);
    get metricNamespaceInput(): string | undefined;
    private _metricTimestamp?;
    get metricTimestamp(): string;
    set metricTimestamp(value: string);
    resetMetricTimestamp(): void;
    get metricTimestampInput(): string | undefined;
    private _metricUnit?;
    get metricUnit(): string;
    set metricUnit(value: string);
    get metricUnitInput(): string | undefined;
    private _metricValue?;
    get metricValue(): string;
    set metricValue(value: string);
    get metricValueInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export interface IotTopicRuleErrorActionDynamodb {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#hash_key_field IotTopicRule#hash_key_field}
    */
    readonly hashKeyField: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#hash_key_type IotTopicRule#hash_key_type}
    */
    readonly hashKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#hash_key_value IotTopicRule#hash_key_value}
    */
    readonly hashKeyValue: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#operation IotTopicRule#operation}
    */
    readonly operation?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#payload_field IotTopicRule#payload_field}
    */
    readonly payloadField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#range_key_field IotTopicRule#range_key_field}
    */
    readonly rangeKeyField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#range_key_type IotTopicRule#range_key_type}
    */
    readonly rangeKeyType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#range_key_value IotTopicRule#range_key_value}
    */
    readonly rangeKeyValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
    */
    readonly tableName: string;
}
export declare function iotTopicRuleErrorActionDynamodbToTerraform(struct?: IotTopicRuleErrorActionDynamodbOutputReference | IotTopicRuleErrorActionDynamodb): any;
export declare function iotTopicRuleErrorActionDynamodbToHclTerraform(struct?: IotTopicRuleErrorActionDynamodbOutputReference | IotTopicRuleErrorActionDynamodb): any;
export declare class IotTopicRuleErrorActionDynamodbOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionDynamodb | undefined;
    set internalValue(value: IotTopicRuleErrorActionDynamodb | undefined);
    private _hashKeyField?;
    get hashKeyField(): string;
    set hashKeyField(value: string);
    get hashKeyFieldInput(): string | undefined;
    private _hashKeyType?;
    get hashKeyType(): string;
    set hashKeyType(value: string);
    resetHashKeyType(): void;
    get hashKeyTypeInput(): string | undefined;
    private _hashKeyValue?;
    get hashKeyValue(): string;
    set hashKeyValue(value: string);
    get hashKeyValueInput(): string | undefined;
    private _operation?;
    get operation(): string;
    set operation(value: string);
    resetOperation(): void;
    get operationInput(): string | undefined;
    private _payloadField?;
    get payloadField(): string;
    set payloadField(value: string);
    resetPayloadField(): void;
    get payloadFieldInput(): string | undefined;
    private _rangeKeyField?;
    get rangeKeyField(): string;
    set rangeKeyField(value: string);
    resetRangeKeyField(): void;
    get rangeKeyFieldInput(): string | undefined;
    private _rangeKeyType?;
    get rangeKeyType(): string;
    set rangeKeyType(value: string);
    resetRangeKeyType(): void;
    get rangeKeyTypeInput(): string | undefined;
    private _rangeKeyValue?;
    get rangeKeyValue(): string;
    set rangeKeyValue(value: string);
    resetRangeKeyValue(): void;
    get rangeKeyValueInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
}
export interface IotTopicRuleErrorActionDynamodbv2PutItem {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
    */
    readonly tableName: string;
}
export declare function iotTopicRuleErrorActionDynamodbv2PutItemToTerraform(struct?: IotTopicRuleErrorActionDynamodbv2PutItemOutputReference | IotTopicRuleErrorActionDynamodbv2PutItem): any;
export declare function iotTopicRuleErrorActionDynamodbv2PutItemToHclTerraform(struct?: IotTopicRuleErrorActionDynamodbv2PutItemOutputReference | IotTopicRuleErrorActionDynamodbv2PutItem): any;
export declare class IotTopicRuleErrorActionDynamodbv2PutItemOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionDynamodbv2PutItem | undefined;
    set internalValue(value: IotTopicRuleErrorActionDynamodbv2PutItem | undefined);
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
}
export interface IotTopicRuleErrorActionDynamodbv2 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * put_item block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#put_item IotTopicRule#put_item}
    */
    readonly putItem?: IotTopicRuleErrorActionDynamodbv2PutItem;
}
export declare function iotTopicRuleErrorActionDynamodbv2ToTerraform(struct?: IotTopicRuleErrorActionDynamodbv2OutputReference | IotTopicRuleErrorActionDynamodbv2): any;
export declare function iotTopicRuleErrorActionDynamodbv2ToHclTerraform(struct?: IotTopicRuleErrorActionDynamodbv2OutputReference | IotTopicRuleErrorActionDynamodbv2): any;
export declare class IotTopicRuleErrorActionDynamodbv2OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionDynamodbv2 | undefined;
    set internalValue(value: IotTopicRuleErrorActionDynamodbv2 | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _putItem;
    get putItem(): IotTopicRuleErrorActionDynamodbv2PutItemOutputReference;
    putPutItem(value: IotTopicRuleErrorActionDynamodbv2PutItem): void;
    resetPutItem(): void;
    get putItemInput(): IotTopicRuleErrorActionDynamodbv2PutItem | undefined;
}
export interface IotTopicRuleErrorActionElasticsearch {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#endpoint IotTopicRule#endpoint}
    */
    readonly endpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#id IotTopicRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#index IotTopicRule#index}
    */
    readonly index: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#type IotTopicRule#type}
    */
    readonly type: string;
}
export declare function iotTopicRuleErrorActionElasticsearchToTerraform(struct?: IotTopicRuleErrorActionElasticsearchOutputReference | IotTopicRuleErrorActionElasticsearch): any;
export declare function iotTopicRuleErrorActionElasticsearchToHclTerraform(struct?: IotTopicRuleErrorActionElasticsearchOutputReference | IotTopicRuleErrorActionElasticsearch): any;
export declare class IotTopicRuleErrorActionElasticsearchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionElasticsearch | undefined;
    set internalValue(value: IotTopicRuleErrorActionElasticsearch | undefined);
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    get endpointInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _index?;
    get index(): string;
    set index(value: string);
    get indexInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export interface IotTopicRuleErrorActionFirehose {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
    */
    readonly batchMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#delivery_stream_name IotTopicRule#delivery_stream_name}
    */
    readonly deliveryStreamName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#separator IotTopicRule#separator}
    */
    readonly separator?: string;
}
export declare function iotTopicRuleErrorActionFirehoseToTerraform(struct?: IotTopicRuleErrorActionFirehoseOutputReference | IotTopicRuleErrorActionFirehose): any;
export declare function iotTopicRuleErrorActionFirehoseToHclTerraform(struct?: IotTopicRuleErrorActionFirehoseOutputReference | IotTopicRuleErrorActionFirehose): any;
export declare class IotTopicRuleErrorActionFirehoseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionFirehose | undefined;
    set internalValue(value: IotTopicRuleErrorActionFirehose | undefined);
    private _batchMode?;
    get batchMode(): boolean | cdktf.IResolvable;
    set batchMode(value: boolean | cdktf.IResolvable);
    resetBatchMode(): void;
    get batchModeInput(): boolean | cdktf.IResolvable | undefined;
    private _deliveryStreamName?;
    get deliveryStreamName(): string;
    set deliveryStreamName(value: string);
    get deliveryStreamNameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _separator?;
    get separator(): string;
    set separator(value: string);
    resetSeparator(): void;
    get separatorInput(): string | undefined;
}
export interface IotTopicRuleErrorActionHttpHttpHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
    */
    readonly value: string;
}
export declare function iotTopicRuleErrorActionHttpHttpHeaderToTerraform(struct?: IotTopicRuleErrorActionHttpHttpHeader | cdktf.IResolvable): any;
export declare function iotTopicRuleErrorActionHttpHttpHeaderToHclTerraform(struct?: IotTopicRuleErrorActionHttpHttpHeader | cdktf.IResolvable): any;
export declare class IotTopicRuleErrorActionHttpHttpHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleErrorActionHttpHttpHeader | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleErrorActionHttpHttpHeader | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class IotTopicRuleErrorActionHttpHttpHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleErrorActionHttpHttpHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleErrorActionHttpHttpHeaderOutputReference;
}
export interface IotTopicRuleErrorActionHttp {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#confirmation_url IotTopicRule#confirmation_url}
    */
    readonly confirmationUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#url IotTopicRule#url}
    */
    readonly url: string;
    /**
    * http_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#http_header IotTopicRule#http_header}
    */
    readonly httpHeader?: IotTopicRuleErrorActionHttpHttpHeader[] | cdktf.IResolvable;
}
export declare function iotTopicRuleErrorActionHttpToTerraform(struct?: IotTopicRuleErrorActionHttpOutputReference | IotTopicRuleErrorActionHttp): any;
export declare function iotTopicRuleErrorActionHttpToHclTerraform(struct?: IotTopicRuleErrorActionHttpOutputReference | IotTopicRuleErrorActionHttp): any;
export declare class IotTopicRuleErrorActionHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionHttp | undefined;
    set internalValue(value: IotTopicRuleErrorActionHttp | undefined);
    private _confirmationUrl?;
    get confirmationUrl(): string;
    set confirmationUrl(value: string);
    resetConfirmationUrl(): void;
    get confirmationUrlInput(): string | undefined;
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string | undefined;
    private _httpHeader;
    get httpHeader(): IotTopicRuleErrorActionHttpHttpHeaderList;
    putHttpHeader(value: IotTopicRuleErrorActionHttpHttpHeader[] | cdktf.IResolvable): void;
    resetHttpHeader(): void;
    get httpHeaderInput(): cdktf.IResolvable | IotTopicRuleErrorActionHttpHttpHeader[] | undefined;
}
export interface IotTopicRuleErrorActionIotAnalytics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
    */
    readonly batchMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#channel_name IotTopicRule#channel_name}
    */
    readonly channelName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleErrorActionIotAnalyticsToTerraform(struct?: IotTopicRuleErrorActionIotAnalyticsOutputReference | IotTopicRuleErrorActionIotAnalytics): any;
export declare function iotTopicRuleErrorActionIotAnalyticsToHclTerraform(struct?: IotTopicRuleErrorActionIotAnalyticsOutputReference | IotTopicRuleErrorActionIotAnalytics): any;
export declare class IotTopicRuleErrorActionIotAnalyticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionIotAnalytics | undefined;
    set internalValue(value: IotTopicRuleErrorActionIotAnalytics | undefined);
    private _batchMode?;
    get batchMode(): boolean | cdktf.IResolvable;
    set batchMode(value: boolean | cdktf.IResolvable);
    resetBatchMode(): void;
    get batchModeInput(): boolean | cdktf.IResolvable | undefined;
    private _channelName?;
    get channelName(): string;
    set channelName(value: string);
    get channelNameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export interface IotTopicRuleErrorActionIotEvents {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
    */
    readonly batchMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#input_name IotTopicRule#input_name}
    */
    readonly inputName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#message_id IotTopicRule#message_id}
    */
    readonly messageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleErrorActionIotEventsToTerraform(struct?: IotTopicRuleErrorActionIotEventsOutputReference | IotTopicRuleErrorActionIotEvents): any;
export declare function iotTopicRuleErrorActionIotEventsToHclTerraform(struct?: IotTopicRuleErrorActionIotEventsOutputReference | IotTopicRuleErrorActionIotEvents): any;
export declare class IotTopicRuleErrorActionIotEventsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionIotEvents | undefined;
    set internalValue(value: IotTopicRuleErrorActionIotEvents | undefined);
    private _batchMode?;
    get batchMode(): boolean | cdktf.IResolvable;
    set batchMode(value: boolean | cdktf.IResolvable);
    resetBatchMode(): void;
    get batchModeInput(): boolean | cdktf.IResolvable | undefined;
    private _inputName?;
    get inputName(): string;
    set inputName(value: string);
    get inputNameInput(): string | undefined;
    private _messageId?;
    get messageId(): string;
    set messageId(value: string);
    resetMessageId(): void;
    get messageIdInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export interface IotTopicRuleErrorActionKafkaHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
    */
    readonly value: string;
}
export declare function iotTopicRuleErrorActionKafkaHeaderToTerraform(struct?: IotTopicRuleErrorActionKafkaHeader | cdktf.IResolvable): any;
export declare function iotTopicRuleErrorActionKafkaHeaderToHclTerraform(struct?: IotTopicRuleErrorActionKafkaHeader | cdktf.IResolvable): any;
export declare class IotTopicRuleErrorActionKafkaHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleErrorActionKafkaHeader | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleErrorActionKafkaHeader | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class IotTopicRuleErrorActionKafkaHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleErrorActionKafkaHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleErrorActionKafkaHeaderOutputReference;
}
export interface IotTopicRuleErrorActionKafka {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#client_properties IotTopicRule#client_properties}
    */
    readonly clientProperties: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#destination_arn IotTopicRule#destination_arn}
    */
    readonly destinationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#partition IotTopicRule#partition}
    */
    readonly partition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#topic IotTopicRule#topic}
    */
    readonly topic: string;
    /**
    * header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#header IotTopicRule#header}
    */
    readonly header?: IotTopicRuleErrorActionKafkaHeader[] | cdktf.IResolvable;
}
export declare function iotTopicRuleErrorActionKafkaToTerraform(struct?: IotTopicRuleErrorActionKafkaOutputReference | IotTopicRuleErrorActionKafka): any;
export declare function iotTopicRuleErrorActionKafkaToHclTerraform(struct?: IotTopicRuleErrorActionKafkaOutputReference | IotTopicRuleErrorActionKafka): any;
export declare class IotTopicRuleErrorActionKafkaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionKafka | undefined;
    set internalValue(value: IotTopicRuleErrorActionKafka | undefined);
    private _clientProperties?;
    get clientProperties(): {
        [key: string]: string;
    };
    set clientProperties(value: {
        [key: string]: string;
    });
    get clientPropertiesInput(): {
        [key: string]: string;
    } | undefined;
    private _destinationArn?;
    get destinationArn(): string;
    set destinationArn(value: string);
    get destinationArnInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _partition?;
    get partition(): string;
    set partition(value: string);
    resetPartition(): void;
    get partitionInput(): string | undefined;
    private _topic?;
    get topic(): string;
    set topic(value: string);
    get topicInput(): string | undefined;
    private _header;
    get header(): IotTopicRuleErrorActionKafkaHeaderList;
    putHeader(value: IotTopicRuleErrorActionKafkaHeader[] | cdktf.IResolvable): void;
    resetHeader(): void;
    get headerInput(): cdktf.IResolvable | IotTopicRuleErrorActionKafkaHeader[] | undefined;
}
export interface IotTopicRuleErrorActionKinesis {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#partition_key IotTopicRule#partition_key}
    */
    readonly partitionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#stream_name IotTopicRule#stream_name}
    */
    readonly streamName: string;
}
export declare function iotTopicRuleErrorActionKinesisToTerraform(struct?: IotTopicRuleErrorActionKinesisOutputReference | IotTopicRuleErrorActionKinesis): any;
export declare function iotTopicRuleErrorActionKinesisToHclTerraform(struct?: IotTopicRuleErrorActionKinesisOutputReference | IotTopicRuleErrorActionKinesis): any;
export declare class IotTopicRuleErrorActionKinesisOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionKinesis | undefined;
    set internalValue(value: IotTopicRuleErrorActionKinesis | undefined);
    private _partitionKey?;
    get partitionKey(): string;
    set partitionKey(value: string);
    resetPartitionKey(): void;
    get partitionKeyInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _streamName?;
    get streamName(): string;
    set streamName(value: string);
    get streamNameInput(): string | undefined;
}
export interface IotTopicRuleErrorActionLambda {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#function_arn IotTopicRule#function_arn}
    */
    readonly functionArn: string;
}
export declare function iotTopicRuleErrorActionLambdaToTerraform(struct?: IotTopicRuleErrorActionLambdaOutputReference | IotTopicRuleErrorActionLambda): any;
export declare function iotTopicRuleErrorActionLambdaToHclTerraform(struct?: IotTopicRuleErrorActionLambdaOutputReference | IotTopicRuleErrorActionLambda): any;
export declare class IotTopicRuleErrorActionLambdaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionLambda | undefined;
    set internalValue(value: IotTopicRuleErrorActionLambda | undefined);
    private _functionArn?;
    get functionArn(): string;
    set functionArn(value: string);
    get functionArnInput(): string | undefined;
}
export interface IotTopicRuleErrorActionRepublish {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#qos IotTopicRule#qos}
    */
    readonly qos?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#topic IotTopicRule#topic}
    */
    readonly topic: string;
}
export declare function iotTopicRuleErrorActionRepublishToTerraform(struct?: IotTopicRuleErrorActionRepublishOutputReference | IotTopicRuleErrorActionRepublish): any;
export declare function iotTopicRuleErrorActionRepublishToHclTerraform(struct?: IotTopicRuleErrorActionRepublishOutputReference | IotTopicRuleErrorActionRepublish): any;
export declare class IotTopicRuleErrorActionRepublishOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionRepublish | undefined;
    set internalValue(value: IotTopicRuleErrorActionRepublish | undefined);
    private _qos?;
    get qos(): number;
    set qos(value: number);
    resetQos(): void;
    get qosInput(): number | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _topic?;
    get topic(): string;
    set topic(value: string);
    get topicInput(): string | undefined;
}
export interface IotTopicRuleErrorActionS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#bucket_name IotTopicRule#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#canned_acl IotTopicRule#canned_acl}
    */
    readonly cannedAcl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleErrorActionS3ToTerraform(struct?: IotTopicRuleErrorActionS3OutputReference | IotTopicRuleErrorActionS3): any;
export declare function iotTopicRuleErrorActionS3ToHclTerraform(struct?: IotTopicRuleErrorActionS3OutputReference | IotTopicRuleErrorActionS3): any;
export declare class IotTopicRuleErrorActionS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionS3 | undefined;
    set internalValue(value: IotTopicRuleErrorActionS3 | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _cannedAcl?;
    get cannedAcl(): string;
    set cannedAcl(value: string);
    resetCannedAcl(): void;
    get cannedAclInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export interface IotTopicRuleErrorActionSns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#message_format IotTopicRule#message_format}
    */
    readonly messageFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#target_arn IotTopicRule#target_arn}
    */
    readonly targetArn: string;
}
export declare function iotTopicRuleErrorActionSnsToTerraform(struct?: IotTopicRuleErrorActionSnsOutputReference | IotTopicRuleErrorActionSns): any;
export declare function iotTopicRuleErrorActionSnsToHclTerraform(struct?: IotTopicRuleErrorActionSnsOutputReference | IotTopicRuleErrorActionSns): any;
export declare class IotTopicRuleErrorActionSnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionSns | undefined;
    set internalValue(value: IotTopicRuleErrorActionSns | undefined);
    private _messageFormat?;
    get messageFormat(): string;
    set messageFormat(value: string);
    resetMessageFormat(): void;
    get messageFormatInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _targetArn?;
    get targetArn(): string;
    set targetArn(value: string);
    get targetArnInput(): string | undefined;
}
export interface IotTopicRuleErrorActionSqs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#queue_url IotTopicRule#queue_url}
    */
    readonly queueUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#use_base64 IotTopicRule#use_base64}
    */
    readonly useBase64: boolean | cdktf.IResolvable;
}
export declare function iotTopicRuleErrorActionSqsToTerraform(struct?: IotTopicRuleErrorActionSqsOutputReference | IotTopicRuleErrorActionSqs): any;
export declare function iotTopicRuleErrorActionSqsToHclTerraform(struct?: IotTopicRuleErrorActionSqsOutputReference | IotTopicRuleErrorActionSqs): any;
export declare class IotTopicRuleErrorActionSqsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionSqs | undefined;
    set internalValue(value: IotTopicRuleErrorActionSqs | undefined);
    private _queueUrl?;
    get queueUrl(): string;
    set queueUrl(value: string);
    get queueUrlInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _useBase64?;
    get useBase64(): boolean | cdktf.IResolvable;
    set useBase64(value: boolean | cdktf.IResolvable);
    get useBase64Input(): boolean | cdktf.IResolvable | undefined;
}
export interface IotTopicRuleErrorActionStepFunctions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#execution_name_prefix IotTopicRule#execution_name_prefix}
    */
    readonly executionNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#state_machine_name IotTopicRule#state_machine_name}
    */
    readonly stateMachineName: string;
}
export declare function iotTopicRuleErrorActionStepFunctionsToTerraform(struct?: IotTopicRuleErrorActionStepFunctionsOutputReference | IotTopicRuleErrorActionStepFunctions): any;
export declare function iotTopicRuleErrorActionStepFunctionsToHclTerraform(struct?: IotTopicRuleErrorActionStepFunctionsOutputReference | IotTopicRuleErrorActionStepFunctions): any;
export declare class IotTopicRuleErrorActionStepFunctionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionStepFunctions | undefined;
    set internalValue(value: IotTopicRuleErrorActionStepFunctions | undefined);
    private _executionNamePrefix?;
    get executionNamePrefix(): string;
    set executionNamePrefix(value: string);
    resetExecutionNamePrefix(): void;
    get executionNamePrefixInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _stateMachineName?;
    get stateMachineName(): string;
    set stateMachineName(value: string);
    get stateMachineNameInput(): string | undefined;
}
export interface IotTopicRuleErrorActionTimestreamDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#name IotTopicRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
    */
    readonly value: string;
}
export declare function iotTopicRuleErrorActionTimestreamDimensionToTerraform(struct?: IotTopicRuleErrorActionTimestreamDimension | cdktf.IResolvable): any;
export declare function iotTopicRuleErrorActionTimestreamDimensionToHclTerraform(struct?: IotTopicRuleErrorActionTimestreamDimension | cdktf.IResolvable): any;
export declare class IotTopicRuleErrorActionTimestreamDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleErrorActionTimestreamDimension | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleErrorActionTimestreamDimension | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class IotTopicRuleErrorActionTimestreamDimensionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleErrorActionTimestreamDimension[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleErrorActionTimestreamDimensionOutputReference;
}
export interface IotTopicRuleErrorActionTimestreamTimestamp {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#unit IotTopicRule#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
    */
    readonly value: string;
}
export declare function iotTopicRuleErrorActionTimestreamTimestampToTerraform(struct?: IotTopicRuleErrorActionTimestreamTimestampOutputReference | IotTopicRuleErrorActionTimestreamTimestamp): any;
export declare function iotTopicRuleErrorActionTimestreamTimestampToHclTerraform(struct?: IotTopicRuleErrorActionTimestreamTimestampOutputReference | IotTopicRuleErrorActionTimestreamTimestamp): any;
export declare class IotTopicRuleErrorActionTimestreamTimestampOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionTimestreamTimestamp | undefined;
    set internalValue(value: IotTopicRuleErrorActionTimestreamTimestamp | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export interface IotTopicRuleErrorActionTimestream {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#database_name IotTopicRule#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
    */
    readonly tableName: string;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#dimension IotTopicRule#dimension}
    */
    readonly dimension: IotTopicRuleErrorActionTimestreamDimension[] | cdktf.IResolvable;
    /**
    * timestamp block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#timestamp IotTopicRule#timestamp}
    */
    readonly timestamp?: IotTopicRuleErrorActionTimestreamTimestamp;
}
export declare function iotTopicRuleErrorActionTimestreamToTerraform(struct?: IotTopicRuleErrorActionTimestreamOutputReference | IotTopicRuleErrorActionTimestream): any;
export declare function iotTopicRuleErrorActionTimestreamToHclTerraform(struct?: IotTopicRuleErrorActionTimestreamOutputReference | IotTopicRuleErrorActionTimestream): any;
export declare class IotTopicRuleErrorActionTimestreamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorActionTimestream | undefined;
    set internalValue(value: IotTopicRuleErrorActionTimestream | undefined);
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
    private _dimension;
    get dimension(): IotTopicRuleErrorActionTimestreamDimensionList;
    putDimension(value: IotTopicRuleErrorActionTimestreamDimension[] | cdktf.IResolvable): void;
    get dimensionInput(): cdktf.IResolvable | IotTopicRuleErrorActionTimestreamDimension[] | undefined;
    private _timestamp;
    get timestamp(): IotTopicRuleErrorActionTimestreamTimestampOutputReference;
    putTimestamp(value: IotTopicRuleErrorActionTimestreamTimestamp): void;
    resetTimestamp(): void;
    get timestampInput(): IotTopicRuleErrorActionTimestreamTimestamp | undefined;
}
export interface IotTopicRuleErrorAction {
    /**
    * cloudwatch_alarm block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}
    */
    readonly cloudwatchAlarm?: IotTopicRuleErrorActionCloudwatchAlarm;
    /**
    * cloudwatch_logs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#cloudwatch_logs IotTopicRule#cloudwatch_logs}
    */
    readonly cloudwatchLogs?: IotTopicRuleErrorActionCloudwatchLogs;
    /**
    * cloudwatch_metric block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#cloudwatch_metric IotTopicRule#cloudwatch_metric}
    */
    readonly cloudwatchMetric?: IotTopicRuleErrorActionCloudwatchMetric;
    /**
    * dynamodb block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#dynamodb IotTopicRule#dynamodb}
    */
    readonly dynamodb?: IotTopicRuleErrorActionDynamodb;
    /**
    * dynamodbv2 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#dynamodbv2 IotTopicRule#dynamodbv2}
    */
    readonly dynamodbv2?: IotTopicRuleErrorActionDynamodbv2;
    /**
    * elasticsearch block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#elasticsearch IotTopicRule#elasticsearch}
    */
    readonly elasticsearch?: IotTopicRuleErrorActionElasticsearch;
    /**
    * firehose block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#firehose IotTopicRule#firehose}
    */
    readonly firehose?: IotTopicRuleErrorActionFirehose;
    /**
    * http block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#http IotTopicRule#http}
    */
    readonly http?: IotTopicRuleErrorActionHttp;
    /**
    * iot_analytics block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#iot_analytics IotTopicRule#iot_analytics}
    */
    readonly iotAnalytics?: IotTopicRuleErrorActionIotAnalytics;
    /**
    * iot_events block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#iot_events IotTopicRule#iot_events}
    */
    readonly iotEvents?: IotTopicRuleErrorActionIotEvents;
    /**
    * kafka block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#kafka IotTopicRule#kafka}
    */
    readonly kafka?: IotTopicRuleErrorActionKafka;
    /**
    * kinesis block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#kinesis IotTopicRule#kinesis}
    */
    readonly kinesis?: IotTopicRuleErrorActionKinesis;
    /**
    * lambda block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#lambda IotTopicRule#lambda}
    */
    readonly lambda?: IotTopicRuleErrorActionLambda;
    /**
    * republish block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#republish IotTopicRule#republish}
    */
    readonly republish?: IotTopicRuleErrorActionRepublish;
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#s3 IotTopicRule#s3}
    */
    readonly s3?: IotTopicRuleErrorActionS3;
    /**
    * sns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#sns IotTopicRule#sns}
    */
    readonly sns?: IotTopicRuleErrorActionSns;
    /**
    * sqs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#sqs IotTopicRule#sqs}
    */
    readonly sqs?: IotTopicRuleErrorActionSqs;
    /**
    * step_functions block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#step_functions IotTopicRule#step_functions}
    */
    readonly stepFunctions?: IotTopicRuleErrorActionStepFunctions;
    /**
    * timestream block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#timestream IotTopicRule#timestream}
    */
    readonly timestream?: IotTopicRuleErrorActionTimestream;
}
export declare function iotTopicRuleErrorActionToTerraform(struct?: IotTopicRuleErrorActionOutputReference | IotTopicRuleErrorAction): any;
export declare function iotTopicRuleErrorActionToHclTerraform(struct?: IotTopicRuleErrorActionOutputReference | IotTopicRuleErrorAction): any;
export declare class IotTopicRuleErrorActionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleErrorAction | undefined;
    set internalValue(value: IotTopicRuleErrorAction | undefined);
    private _cloudwatchAlarm;
    get cloudwatchAlarm(): IotTopicRuleErrorActionCloudwatchAlarmOutputReference;
    putCloudwatchAlarm(value: IotTopicRuleErrorActionCloudwatchAlarm): void;
    resetCloudwatchAlarm(): void;
    get cloudwatchAlarmInput(): IotTopicRuleErrorActionCloudwatchAlarm | undefined;
    private _cloudwatchLogs;
    get cloudwatchLogs(): IotTopicRuleErrorActionCloudwatchLogsOutputReference;
    putCloudwatchLogs(value: IotTopicRuleErrorActionCloudwatchLogs): void;
    resetCloudwatchLogs(): void;
    get cloudwatchLogsInput(): IotTopicRuleErrorActionCloudwatchLogs | undefined;
    private _cloudwatchMetric;
    get cloudwatchMetric(): IotTopicRuleErrorActionCloudwatchMetricOutputReference;
    putCloudwatchMetric(value: IotTopicRuleErrorActionCloudwatchMetric): void;
    resetCloudwatchMetric(): void;
    get cloudwatchMetricInput(): IotTopicRuleErrorActionCloudwatchMetric | undefined;
    private _dynamodb;
    get dynamodb(): IotTopicRuleErrorActionDynamodbOutputReference;
    putDynamodb(value: IotTopicRuleErrorActionDynamodb): void;
    resetDynamodb(): void;
    get dynamodbInput(): IotTopicRuleErrorActionDynamodb | undefined;
    private _dynamodbv2;
    get dynamodbv2(): IotTopicRuleErrorActionDynamodbv2OutputReference;
    putDynamodbv2(value: IotTopicRuleErrorActionDynamodbv2): void;
    resetDynamodbv2(): void;
    get dynamodbv2Input(): IotTopicRuleErrorActionDynamodbv2 | undefined;
    private _elasticsearch;
    get elasticsearch(): IotTopicRuleErrorActionElasticsearchOutputReference;
    putElasticsearch(value: IotTopicRuleErrorActionElasticsearch): void;
    resetElasticsearch(): void;
    get elasticsearchInput(): IotTopicRuleErrorActionElasticsearch | undefined;
    private _firehose;
    get firehose(): IotTopicRuleErrorActionFirehoseOutputReference;
    putFirehose(value: IotTopicRuleErrorActionFirehose): void;
    resetFirehose(): void;
    get firehoseInput(): IotTopicRuleErrorActionFirehose | undefined;
    private _http;
    get http(): IotTopicRuleErrorActionHttpOutputReference;
    putHttp(value: IotTopicRuleErrorActionHttp): void;
    resetHttp(): void;
    get httpInput(): IotTopicRuleErrorActionHttp | undefined;
    private _iotAnalytics;
    get iotAnalytics(): IotTopicRuleErrorActionIotAnalyticsOutputReference;
    putIotAnalytics(value: IotTopicRuleErrorActionIotAnalytics): void;
    resetIotAnalytics(): void;
    get iotAnalyticsInput(): IotTopicRuleErrorActionIotAnalytics | undefined;
    private _iotEvents;
    get iotEvents(): IotTopicRuleErrorActionIotEventsOutputReference;
    putIotEvents(value: IotTopicRuleErrorActionIotEvents): void;
    resetIotEvents(): void;
    get iotEventsInput(): IotTopicRuleErrorActionIotEvents | undefined;
    private _kafka;
    get kafka(): IotTopicRuleErrorActionKafkaOutputReference;
    putKafka(value: IotTopicRuleErrorActionKafka): void;
    resetKafka(): void;
    get kafkaInput(): IotTopicRuleErrorActionKafka | undefined;
    private _kinesis;
    get kinesis(): IotTopicRuleErrorActionKinesisOutputReference;
    putKinesis(value: IotTopicRuleErrorActionKinesis): void;
    resetKinesis(): void;
    get kinesisInput(): IotTopicRuleErrorActionKinesis | undefined;
    private _lambda;
    get lambda(): IotTopicRuleErrorActionLambdaOutputReference;
    putLambda(value: IotTopicRuleErrorActionLambda): void;
    resetLambda(): void;
    get lambdaInput(): IotTopicRuleErrorActionLambda | undefined;
    private _republish;
    get republish(): IotTopicRuleErrorActionRepublishOutputReference;
    putRepublish(value: IotTopicRuleErrorActionRepublish): void;
    resetRepublish(): void;
    get republishInput(): IotTopicRuleErrorActionRepublish | undefined;
    private _s3;
    get s3(): IotTopicRuleErrorActionS3OutputReference;
    putS3(value: IotTopicRuleErrorActionS3): void;
    resetS3(): void;
    get s3Input(): IotTopicRuleErrorActionS3 | undefined;
    private _sns;
    get sns(): IotTopicRuleErrorActionSnsOutputReference;
    putSns(value: IotTopicRuleErrorActionSns): void;
    resetSns(): void;
    get snsInput(): IotTopicRuleErrorActionSns | undefined;
    private _sqs;
    get sqs(): IotTopicRuleErrorActionSqsOutputReference;
    putSqs(value: IotTopicRuleErrorActionSqs): void;
    resetSqs(): void;
    get sqsInput(): IotTopicRuleErrorActionSqs | undefined;
    private _stepFunctions;
    get stepFunctions(): IotTopicRuleErrorActionStepFunctionsOutputReference;
    putStepFunctions(value: IotTopicRuleErrorActionStepFunctions): void;
    resetStepFunctions(): void;
    get stepFunctionsInput(): IotTopicRuleErrorActionStepFunctions | undefined;
    private _timestream;
    get timestream(): IotTopicRuleErrorActionTimestreamOutputReference;
    putTimestream(value: IotTopicRuleErrorActionTimestream): void;
    resetTimestream(): void;
    get timestreamInput(): IotTopicRuleErrorActionTimestream | undefined;
}
export interface IotTopicRuleFirehose {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
    */
    readonly batchMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#delivery_stream_name IotTopicRule#delivery_stream_name}
    */
    readonly deliveryStreamName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#separator IotTopicRule#separator}
    */
    readonly separator?: string;
}
export declare function iotTopicRuleFirehoseToTerraform(struct?: IotTopicRuleFirehose | cdktf.IResolvable): any;
export declare function iotTopicRuleFirehoseToHclTerraform(struct?: IotTopicRuleFirehose | cdktf.IResolvable): any;
export declare class IotTopicRuleFirehoseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleFirehose | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleFirehose | cdktf.IResolvable | undefined);
    private _batchMode?;
    get batchMode(): boolean | cdktf.IResolvable;
    set batchMode(value: boolean | cdktf.IResolvable);
    resetBatchMode(): void;
    get batchModeInput(): boolean | cdktf.IResolvable | undefined;
    private _deliveryStreamName?;
    get deliveryStreamName(): string;
    set deliveryStreamName(value: string);
    get deliveryStreamNameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _separator?;
    get separator(): string;
    set separator(value: string);
    resetSeparator(): void;
    get separatorInput(): string | undefined;
}
export declare class IotTopicRuleFirehoseList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleFirehose[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleFirehoseOutputReference;
}
export interface IotTopicRuleHttpHttpHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
    */
    readonly value: string;
}
export declare function iotTopicRuleHttpHttpHeaderToTerraform(struct?: IotTopicRuleHttpHttpHeader | cdktf.IResolvable): any;
export declare function iotTopicRuleHttpHttpHeaderToHclTerraform(struct?: IotTopicRuleHttpHttpHeader | cdktf.IResolvable): any;
export declare class IotTopicRuleHttpHttpHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleHttpHttpHeader | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleHttpHttpHeader | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class IotTopicRuleHttpHttpHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleHttpHttpHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleHttpHttpHeaderOutputReference;
}
export interface IotTopicRuleHttp {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#confirmation_url IotTopicRule#confirmation_url}
    */
    readonly confirmationUrl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#url IotTopicRule#url}
    */
    readonly url: string;
    /**
    * http_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#http_header IotTopicRule#http_header}
    */
    readonly httpHeader?: IotTopicRuleHttpHttpHeader[] | cdktf.IResolvable;
}
export declare function iotTopicRuleHttpToTerraform(struct?: IotTopicRuleHttp | cdktf.IResolvable): any;
export declare function iotTopicRuleHttpToHclTerraform(struct?: IotTopicRuleHttp | cdktf.IResolvable): any;
export declare class IotTopicRuleHttpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleHttp | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleHttp | cdktf.IResolvable | undefined);
    private _confirmationUrl?;
    get confirmationUrl(): string;
    set confirmationUrl(value: string);
    resetConfirmationUrl(): void;
    get confirmationUrlInput(): string | undefined;
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string | undefined;
    private _httpHeader;
    get httpHeader(): IotTopicRuleHttpHttpHeaderList;
    putHttpHeader(value: IotTopicRuleHttpHttpHeader[] | cdktf.IResolvable): void;
    resetHttpHeader(): void;
    get httpHeaderInput(): cdktf.IResolvable | IotTopicRuleHttpHttpHeader[] | undefined;
}
export declare class IotTopicRuleHttpList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleHttp[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleHttpOutputReference;
}
export interface IotTopicRuleIotAnalytics {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
    */
    readonly batchMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#channel_name IotTopicRule#channel_name}
    */
    readonly channelName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleIotAnalyticsToTerraform(struct?: IotTopicRuleIotAnalytics | cdktf.IResolvable): any;
export declare function iotTopicRuleIotAnalyticsToHclTerraform(struct?: IotTopicRuleIotAnalytics | cdktf.IResolvable): any;
export declare class IotTopicRuleIotAnalyticsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleIotAnalytics | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleIotAnalytics | cdktf.IResolvable | undefined);
    private _batchMode?;
    get batchMode(): boolean | cdktf.IResolvable;
    set batchMode(value: boolean | cdktf.IResolvable);
    resetBatchMode(): void;
    get batchModeInput(): boolean | cdktf.IResolvable | undefined;
    private _channelName?;
    get channelName(): string;
    set channelName(value: string);
    get channelNameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export declare class IotTopicRuleIotAnalyticsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleIotAnalytics[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleIotAnalyticsOutputReference;
}
export interface IotTopicRuleIotEvents {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#batch_mode IotTopicRule#batch_mode}
    */
    readonly batchMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#input_name IotTopicRule#input_name}
    */
    readonly inputName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#message_id IotTopicRule#message_id}
    */
    readonly messageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleIotEventsToTerraform(struct?: IotTopicRuleIotEvents | cdktf.IResolvable): any;
export declare function iotTopicRuleIotEventsToHclTerraform(struct?: IotTopicRuleIotEvents | cdktf.IResolvable): any;
export declare class IotTopicRuleIotEventsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleIotEvents | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleIotEvents | cdktf.IResolvable | undefined);
    private _batchMode?;
    get batchMode(): boolean | cdktf.IResolvable;
    set batchMode(value: boolean | cdktf.IResolvable);
    resetBatchMode(): void;
    get batchModeInput(): boolean | cdktf.IResolvable | undefined;
    private _inputName?;
    get inputName(): string;
    set inputName(value: string);
    get inputNameInput(): string | undefined;
    private _messageId?;
    get messageId(): string;
    set messageId(value: string);
    resetMessageId(): void;
    get messageIdInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export declare class IotTopicRuleIotEventsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleIotEvents[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleIotEventsOutputReference;
}
export interface IotTopicRuleKafkaHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
    */
    readonly value: string;
}
export declare function iotTopicRuleKafkaHeaderToTerraform(struct?: IotTopicRuleKafkaHeader | cdktf.IResolvable): any;
export declare function iotTopicRuleKafkaHeaderToHclTerraform(struct?: IotTopicRuleKafkaHeader | cdktf.IResolvable): any;
export declare class IotTopicRuleKafkaHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleKafkaHeader | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleKafkaHeader | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class IotTopicRuleKafkaHeaderList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleKafkaHeader[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleKafkaHeaderOutputReference;
}
export interface IotTopicRuleKafka {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#client_properties IotTopicRule#client_properties}
    */
    readonly clientProperties: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#destination_arn IotTopicRule#destination_arn}
    */
    readonly destinationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
    */
    readonly key?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#partition IotTopicRule#partition}
    */
    readonly partition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#topic IotTopicRule#topic}
    */
    readonly topic: string;
    /**
    * header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#header IotTopicRule#header}
    */
    readonly header?: IotTopicRuleKafkaHeader[] | cdktf.IResolvable;
}
export declare function iotTopicRuleKafkaToTerraform(struct?: IotTopicRuleKafka | cdktf.IResolvable): any;
export declare function iotTopicRuleKafkaToHclTerraform(struct?: IotTopicRuleKafka | cdktf.IResolvable): any;
export declare class IotTopicRuleKafkaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleKafka | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleKafka | cdktf.IResolvable | undefined);
    private _clientProperties?;
    get clientProperties(): {
        [key: string]: string;
    };
    set clientProperties(value: {
        [key: string]: string;
    });
    get clientPropertiesInput(): {
        [key: string]: string;
    } | undefined;
    private _destinationArn?;
    get destinationArn(): string;
    set destinationArn(value: string);
    get destinationArnInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    resetKey(): void;
    get keyInput(): string | undefined;
    private _partition?;
    get partition(): string;
    set partition(value: string);
    resetPartition(): void;
    get partitionInput(): string | undefined;
    private _topic?;
    get topic(): string;
    set topic(value: string);
    get topicInput(): string | undefined;
    private _header;
    get header(): IotTopicRuleKafkaHeaderList;
    putHeader(value: IotTopicRuleKafkaHeader[] | cdktf.IResolvable): void;
    resetHeader(): void;
    get headerInput(): cdktf.IResolvable | IotTopicRuleKafkaHeader[] | undefined;
}
export declare class IotTopicRuleKafkaList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleKafka[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleKafkaOutputReference;
}
export interface IotTopicRuleKinesis {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#partition_key IotTopicRule#partition_key}
    */
    readonly partitionKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#stream_name IotTopicRule#stream_name}
    */
    readonly streamName: string;
}
export declare function iotTopicRuleKinesisToTerraform(struct?: IotTopicRuleKinesis | cdktf.IResolvable): any;
export declare function iotTopicRuleKinesisToHclTerraform(struct?: IotTopicRuleKinesis | cdktf.IResolvable): any;
export declare class IotTopicRuleKinesisOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleKinesis | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleKinesis | cdktf.IResolvable | undefined);
    private _partitionKey?;
    get partitionKey(): string;
    set partitionKey(value: string);
    resetPartitionKey(): void;
    get partitionKeyInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _streamName?;
    get streamName(): string;
    set streamName(value: string);
    get streamNameInput(): string | undefined;
}
export declare class IotTopicRuleKinesisList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleKinesis[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleKinesisOutputReference;
}
export interface IotTopicRuleLambda {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#function_arn IotTopicRule#function_arn}
    */
    readonly functionArn: string;
}
export declare function iotTopicRuleLambdaToTerraform(struct?: IotTopicRuleLambda | cdktf.IResolvable): any;
export declare function iotTopicRuleLambdaToHclTerraform(struct?: IotTopicRuleLambda | cdktf.IResolvable): any;
export declare class IotTopicRuleLambdaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleLambda | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleLambda | cdktf.IResolvable | undefined);
    private _functionArn?;
    get functionArn(): string;
    set functionArn(value: string);
    get functionArnInput(): string | undefined;
}
export declare class IotTopicRuleLambdaList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleLambda[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleLambdaOutputReference;
}
export interface IotTopicRuleRepublish {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#qos IotTopicRule#qos}
    */
    readonly qos?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#topic IotTopicRule#topic}
    */
    readonly topic: string;
}
export declare function iotTopicRuleRepublishToTerraform(struct?: IotTopicRuleRepublish | cdktf.IResolvable): any;
export declare function iotTopicRuleRepublishToHclTerraform(struct?: IotTopicRuleRepublish | cdktf.IResolvable): any;
export declare class IotTopicRuleRepublishOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleRepublish | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleRepublish | cdktf.IResolvable | undefined);
    private _qos?;
    get qos(): number;
    set qos(value: number);
    resetQos(): void;
    get qosInput(): number | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _topic?;
    get topic(): string;
    set topic(value: string);
    get topicInput(): string | undefined;
}
export declare class IotTopicRuleRepublishList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleRepublish[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleRepublishOutputReference;
}
export interface IotTopicRuleS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#bucket_name IotTopicRule#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#canned_acl IotTopicRule#canned_acl}
    */
    readonly cannedAcl?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#key IotTopicRule#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
}
export declare function iotTopicRuleS3ToTerraform(struct?: IotTopicRuleS3 | cdktf.IResolvable): any;
export declare function iotTopicRuleS3ToHclTerraform(struct?: IotTopicRuleS3 | cdktf.IResolvable): any;
export declare class IotTopicRuleS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleS3 | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleS3 | cdktf.IResolvable | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _cannedAcl?;
    get cannedAcl(): string;
    set cannedAcl(value: string);
    resetCannedAcl(): void;
    get cannedAclInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export declare class IotTopicRuleS3List extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleS3[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleS3OutputReference;
}
export interface IotTopicRuleSns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#message_format IotTopicRule#message_format}
    */
    readonly messageFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#target_arn IotTopicRule#target_arn}
    */
    readonly targetArn: string;
}
export declare function iotTopicRuleSnsToTerraform(struct?: IotTopicRuleSns | cdktf.IResolvable): any;
export declare function iotTopicRuleSnsToHclTerraform(struct?: IotTopicRuleSns | cdktf.IResolvable): any;
export declare class IotTopicRuleSnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleSns | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleSns | cdktf.IResolvable | undefined);
    private _messageFormat?;
    get messageFormat(): string;
    set messageFormat(value: string);
    resetMessageFormat(): void;
    get messageFormatInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _targetArn?;
    get targetArn(): string;
    set targetArn(value: string);
    get targetArnInput(): string | undefined;
}
export declare class IotTopicRuleSnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleSns[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleSnsOutputReference;
}
export interface IotTopicRuleSqs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#queue_url IotTopicRule#queue_url}
    */
    readonly queueUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#use_base64 IotTopicRule#use_base64}
    */
    readonly useBase64: boolean | cdktf.IResolvable;
}
export declare function iotTopicRuleSqsToTerraform(struct?: IotTopicRuleSqs | cdktf.IResolvable): any;
export declare function iotTopicRuleSqsToHclTerraform(struct?: IotTopicRuleSqs | cdktf.IResolvable): any;
export declare class IotTopicRuleSqsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleSqs | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleSqs | cdktf.IResolvable | undefined);
    private _queueUrl?;
    get queueUrl(): string;
    set queueUrl(value: string);
    get queueUrlInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _useBase64?;
    get useBase64(): boolean | cdktf.IResolvable;
    set useBase64(value: boolean | cdktf.IResolvable);
    get useBase64Input(): boolean | cdktf.IResolvable | undefined;
}
export declare class IotTopicRuleSqsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleSqs[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleSqsOutputReference;
}
export interface IotTopicRuleStepFunctions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#execution_name_prefix IotTopicRule#execution_name_prefix}
    */
    readonly executionNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#state_machine_name IotTopicRule#state_machine_name}
    */
    readonly stateMachineName: string;
}
export declare function iotTopicRuleStepFunctionsToTerraform(struct?: IotTopicRuleStepFunctions | cdktf.IResolvable): any;
export declare function iotTopicRuleStepFunctionsToHclTerraform(struct?: IotTopicRuleStepFunctions | cdktf.IResolvable): any;
export declare class IotTopicRuleStepFunctionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleStepFunctions | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleStepFunctions | cdktf.IResolvable | undefined);
    private _executionNamePrefix?;
    get executionNamePrefix(): string;
    set executionNamePrefix(value: string);
    resetExecutionNamePrefix(): void;
    get executionNamePrefixInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _stateMachineName?;
    get stateMachineName(): string;
    set stateMachineName(value: string);
    get stateMachineNameInput(): string | undefined;
}
export declare class IotTopicRuleStepFunctionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleStepFunctions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleStepFunctionsOutputReference;
}
export interface IotTopicRuleTimestreamDimension {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#name IotTopicRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
    */
    readonly value: string;
}
export declare function iotTopicRuleTimestreamDimensionToTerraform(struct?: IotTopicRuleTimestreamDimension | cdktf.IResolvable): any;
export declare function iotTopicRuleTimestreamDimensionToHclTerraform(struct?: IotTopicRuleTimestreamDimension | cdktf.IResolvable): any;
export declare class IotTopicRuleTimestreamDimensionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleTimestreamDimension | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleTimestreamDimension | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class IotTopicRuleTimestreamDimensionList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleTimestreamDimension[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleTimestreamDimensionOutputReference;
}
export interface IotTopicRuleTimestreamTimestamp {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#unit IotTopicRule#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#value IotTopicRule#value}
    */
    readonly value: string;
}
export declare function iotTopicRuleTimestreamTimestampToTerraform(struct?: IotTopicRuleTimestreamTimestampOutputReference | IotTopicRuleTimestreamTimestamp): any;
export declare function iotTopicRuleTimestreamTimestampToHclTerraform(struct?: IotTopicRuleTimestreamTimestampOutputReference | IotTopicRuleTimestreamTimestamp): any;
export declare class IotTopicRuleTimestreamTimestampOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): IotTopicRuleTimestreamTimestamp | undefined;
    set internalValue(value: IotTopicRuleTimestreamTimestamp | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export interface IotTopicRuleTimestream {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#database_name IotTopicRule#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}
    */
    readonly tableName: string;
    /**
    * dimension block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#dimension IotTopicRule#dimension}
    */
    readonly dimension: IotTopicRuleTimestreamDimension[] | cdktf.IResolvable;
    /**
    * timestamp block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#timestamp IotTopicRule#timestamp}
    */
    readonly timestamp?: IotTopicRuleTimestreamTimestamp;
}
export declare function iotTopicRuleTimestreamToTerraform(struct?: IotTopicRuleTimestream | cdktf.IResolvable): any;
export declare function iotTopicRuleTimestreamToHclTerraform(struct?: IotTopicRuleTimestream | cdktf.IResolvable): any;
export declare class IotTopicRuleTimestreamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): IotTopicRuleTimestream | cdktf.IResolvable | undefined;
    set internalValue(value: IotTopicRuleTimestream | cdktf.IResolvable | undefined);
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
    private _dimension;
    get dimension(): IotTopicRuleTimestreamDimensionList;
    putDimension(value: IotTopicRuleTimestreamDimension[] | cdktf.IResolvable): void;
    get dimensionInput(): cdktf.IResolvable | IotTopicRuleTimestreamDimension[] | undefined;
    private _timestamp;
    get timestamp(): IotTopicRuleTimestreamTimestampOutputReference;
    putTimestamp(value: IotTopicRuleTimestreamTimestamp): void;
    resetTimestamp(): void;
    get timestampInput(): IotTopicRuleTimestreamTimestamp | undefined;
}
export declare class IotTopicRuleTimestreamList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: IotTopicRuleTimestream[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): IotTopicRuleTimestreamOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule aws_iot_topic_rule}
*/
export declare class IotTopicRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_iot_topic_rule";
    /**
    * Generates CDKTF code for importing a IotTopicRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the IotTopicRule to import
    * @param importFromId The id of the existing IotTopicRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the IotTopicRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/iot_topic_rule aws_iot_topic_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options IotTopicRuleConfig
    */
    constructor(scope: Construct, id: string, config: IotTopicRuleConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _sql?;
    get sql(): string;
    set sql(value: string);
    get sqlInput(): string | undefined;
    private _sqlVersion?;
    get sqlVersion(): string;
    set sqlVersion(value: string);
    get sqlVersionInput(): string | undefined;
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
    private _cloudwatchAlarm;
    get cloudwatchAlarm(): IotTopicRuleCloudwatchAlarmList;
    putCloudwatchAlarm(value: IotTopicRuleCloudwatchAlarm[] | cdktf.IResolvable): void;
    resetCloudwatchAlarm(): void;
    get cloudwatchAlarmInput(): cdktf.IResolvable | IotTopicRuleCloudwatchAlarm[] | undefined;
    private _cloudwatchLogs;
    get cloudwatchLogs(): IotTopicRuleCloudwatchLogsList;
    putCloudwatchLogs(value: IotTopicRuleCloudwatchLogs[] | cdktf.IResolvable): void;
    resetCloudwatchLogs(): void;
    get cloudwatchLogsInput(): cdktf.IResolvable | IotTopicRuleCloudwatchLogs[] | undefined;
    private _cloudwatchMetric;
    get cloudwatchMetric(): IotTopicRuleCloudwatchMetricList;
    putCloudwatchMetric(value: IotTopicRuleCloudwatchMetric[] | cdktf.IResolvable): void;
    resetCloudwatchMetric(): void;
    get cloudwatchMetricInput(): cdktf.IResolvable | IotTopicRuleCloudwatchMetric[] | undefined;
    private _dynamodb;
    get dynamodb(): IotTopicRuleDynamodbList;
    putDynamodb(value: IotTopicRuleDynamodb[] | cdktf.IResolvable): void;
    resetDynamodb(): void;
    get dynamodbInput(): cdktf.IResolvable | IotTopicRuleDynamodb[] | undefined;
    private _dynamodbv2;
    get dynamodbv2(): IotTopicRuleDynamodbv2List;
    putDynamodbv2(value: IotTopicRuleDynamodbv2[] | cdktf.IResolvable): void;
    resetDynamodbv2(): void;
    get dynamodbv2Input(): cdktf.IResolvable | IotTopicRuleDynamodbv2[] | undefined;
    private _elasticsearch;
    get elasticsearch(): IotTopicRuleElasticsearchList;
    putElasticsearch(value: IotTopicRuleElasticsearch[] | cdktf.IResolvable): void;
    resetElasticsearch(): void;
    get elasticsearchInput(): cdktf.IResolvable | IotTopicRuleElasticsearch[] | undefined;
    private _errorAction;
    get errorAction(): IotTopicRuleErrorActionOutputReference;
    putErrorAction(value: IotTopicRuleErrorAction): void;
    resetErrorAction(): void;
    get errorActionInput(): IotTopicRuleErrorAction | undefined;
    private _firehose;
    get firehose(): IotTopicRuleFirehoseList;
    putFirehose(value: IotTopicRuleFirehose[] | cdktf.IResolvable): void;
    resetFirehose(): void;
    get firehoseInput(): cdktf.IResolvable | IotTopicRuleFirehose[] | undefined;
    private _http;
    get http(): IotTopicRuleHttpList;
    putHttp(value: IotTopicRuleHttp[] | cdktf.IResolvable): void;
    resetHttp(): void;
    get httpInput(): cdktf.IResolvable | IotTopicRuleHttp[] | undefined;
    private _iotAnalytics;
    get iotAnalytics(): IotTopicRuleIotAnalyticsList;
    putIotAnalytics(value: IotTopicRuleIotAnalytics[] | cdktf.IResolvable): void;
    resetIotAnalytics(): void;
    get iotAnalyticsInput(): cdktf.IResolvable | IotTopicRuleIotAnalytics[] | undefined;
    private _iotEvents;
    get iotEvents(): IotTopicRuleIotEventsList;
    putIotEvents(value: IotTopicRuleIotEvents[] | cdktf.IResolvable): void;
    resetIotEvents(): void;
    get iotEventsInput(): cdktf.IResolvable | IotTopicRuleIotEvents[] | undefined;
    private _kafka;
    get kafka(): IotTopicRuleKafkaList;
    putKafka(value: IotTopicRuleKafka[] | cdktf.IResolvable): void;
    resetKafka(): void;
    get kafkaInput(): cdktf.IResolvable | IotTopicRuleKafka[] | undefined;
    private _kinesis;
    get kinesis(): IotTopicRuleKinesisList;
    putKinesis(value: IotTopicRuleKinesis[] | cdktf.IResolvable): void;
    resetKinesis(): void;
    get kinesisInput(): cdktf.IResolvable | IotTopicRuleKinesis[] | undefined;
    private _lambda;
    get lambda(): IotTopicRuleLambdaList;
    putLambda(value: IotTopicRuleLambda[] | cdktf.IResolvable): void;
    resetLambda(): void;
    get lambdaInput(): cdktf.IResolvable | IotTopicRuleLambda[] | undefined;
    private _republish;
    get republish(): IotTopicRuleRepublishList;
    putRepublish(value: IotTopicRuleRepublish[] | cdktf.IResolvable): void;
    resetRepublish(): void;
    get republishInput(): cdktf.IResolvable | IotTopicRuleRepublish[] | undefined;
    private _s3;
    get s3(): IotTopicRuleS3List;
    putS3(value: IotTopicRuleS3[] | cdktf.IResolvable): void;
    resetS3(): void;
    get s3Input(): cdktf.IResolvable | IotTopicRuleS3[] | undefined;
    private _sns;
    get sns(): IotTopicRuleSnsList;
    putSns(value: IotTopicRuleSns[] | cdktf.IResolvable): void;
    resetSns(): void;
    get snsInput(): cdktf.IResolvable | IotTopicRuleSns[] | undefined;
    private _sqs;
    get sqs(): IotTopicRuleSqsList;
    putSqs(value: IotTopicRuleSqs[] | cdktf.IResolvable): void;
    resetSqs(): void;
    get sqsInput(): cdktf.IResolvable | IotTopicRuleSqs[] | undefined;
    private _stepFunctions;
    get stepFunctions(): IotTopicRuleStepFunctionsList;
    putStepFunctions(value: IotTopicRuleStepFunctions[] | cdktf.IResolvable): void;
    resetStepFunctions(): void;
    get stepFunctionsInput(): cdktf.IResolvable | IotTopicRuleStepFunctions[] | undefined;
    private _timestream;
    get timestream(): IotTopicRuleTimestreamList;
    putTimestream(value: IotTopicRuleTimestream[] | cdktf.IResolvable): void;
    resetTimestream(): void;
    get timestreamInput(): cdktf.IResolvable | IotTopicRuleTimestream[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
