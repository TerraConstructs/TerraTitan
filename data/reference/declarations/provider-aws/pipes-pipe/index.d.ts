/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface PipesPipeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#description PipesPipe#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#desired_state PipesPipe#desired_state}
    */
    readonly desiredState?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#enrichment PipesPipe#enrichment}
    */
    readonly enrichment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#id PipesPipe#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#kms_key_identifier PipesPipe#kms_key_identifier}
    */
    readonly kmsKeyIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#name PipesPipe#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#name_prefix PipesPipe#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#role_arn PipesPipe#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#source PipesPipe#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#tags PipesPipe#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#tags_all PipesPipe#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#target PipesPipe#target}
    */
    readonly target: string;
    /**
    * enrichment_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#enrichment_parameters PipesPipe#enrichment_parameters}
    */
    readonly enrichmentParameters?: PipesPipeEnrichmentParameters;
    /**
    * log_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#log_configuration PipesPipe#log_configuration}
    */
    readonly logConfiguration?: PipesPipeLogConfiguration;
    /**
    * source_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#source_parameters PipesPipe#source_parameters}
    */
    readonly sourceParameters?: PipesPipeSourceParameters;
    /**
    * target_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#target_parameters PipesPipe#target_parameters}
    */
    readonly targetParameters?: PipesPipeTargetParameters;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#timeouts PipesPipe#timeouts}
    */
    readonly timeouts?: PipesPipeTimeouts;
}
export interface PipesPipeEnrichmentParametersHttpParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#header_parameters PipesPipe#header_parameters}
    */
    readonly headerParameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#path_parameter_values PipesPipe#path_parameter_values}
    */
    readonly pathParameterValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#query_string_parameters PipesPipe#query_string_parameters}
    */
    readonly queryStringParameters?: {
        [key: string]: string;
    };
}
export declare function pipesPipeEnrichmentParametersHttpParametersToTerraform(struct?: PipesPipeEnrichmentParametersHttpParametersOutputReference | PipesPipeEnrichmentParametersHttpParameters): any;
export declare function pipesPipeEnrichmentParametersHttpParametersToHclTerraform(struct?: PipesPipeEnrichmentParametersHttpParametersOutputReference | PipesPipeEnrichmentParametersHttpParameters): any;
export declare class PipesPipeEnrichmentParametersHttpParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeEnrichmentParametersHttpParameters | undefined;
    set internalValue(value: PipesPipeEnrichmentParametersHttpParameters | undefined);
    private _headerParameters?;
    get headerParameters(): {
        [key: string]: string;
    };
    set headerParameters(value: {
        [key: string]: string;
    });
    resetHeaderParameters(): void;
    get headerParametersInput(): {
        [key: string]: string;
    } | undefined;
    private _pathParameterValues?;
    get pathParameterValues(): string[];
    set pathParameterValues(value: string[]);
    resetPathParameterValues(): void;
    get pathParameterValuesInput(): string[] | undefined;
    private _queryStringParameters?;
    get queryStringParameters(): {
        [key: string]: string;
    };
    set queryStringParameters(value: {
        [key: string]: string;
    });
    resetQueryStringParameters(): void;
    get queryStringParametersInput(): {
        [key: string]: string;
    } | undefined;
}
export interface PipesPipeEnrichmentParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#input_template PipesPipe#input_template}
    */
    readonly inputTemplate?: string;
    /**
    * http_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#http_parameters PipesPipe#http_parameters}
    */
    readonly httpParameters?: PipesPipeEnrichmentParametersHttpParameters;
}
export declare function pipesPipeEnrichmentParametersToTerraform(struct?: PipesPipeEnrichmentParametersOutputReference | PipesPipeEnrichmentParameters): any;
export declare function pipesPipeEnrichmentParametersToHclTerraform(struct?: PipesPipeEnrichmentParametersOutputReference | PipesPipeEnrichmentParameters): any;
export declare class PipesPipeEnrichmentParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeEnrichmentParameters | undefined;
    set internalValue(value: PipesPipeEnrichmentParameters | undefined);
    private _inputTemplate?;
    get inputTemplate(): string;
    set inputTemplate(value: string);
    resetInputTemplate(): void;
    get inputTemplateInput(): string | undefined;
    private _httpParameters;
    get httpParameters(): PipesPipeEnrichmentParametersHttpParametersOutputReference;
    putHttpParameters(value: PipesPipeEnrichmentParametersHttpParameters): void;
    resetHttpParameters(): void;
    get httpParametersInput(): PipesPipeEnrichmentParametersHttpParameters | undefined;
}
export interface PipesPipeLogConfigurationCloudwatchLogsLogDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#log_group_arn PipesPipe#log_group_arn}
    */
    readonly logGroupArn: string;
}
export declare function pipesPipeLogConfigurationCloudwatchLogsLogDestinationToTerraform(struct?: PipesPipeLogConfigurationCloudwatchLogsLogDestinationOutputReference | PipesPipeLogConfigurationCloudwatchLogsLogDestination): any;
export declare function pipesPipeLogConfigurationCloudwatchLogsLogDestinationToHclTerraform(struct?: PipesPipeLogConfigurationCloudwatchLogsLogDestinationOutputReference | PipesPipeLogConfigurationCloudwatchLogsLogDestination): any;
export declare class PipesPipeLogConfigurationCloudwatchLogsLogDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeLogConfigurationCloudwatchLogsLogDestination | undefined;
    set internalValue(value: PipesPipeLogConfigurationCloudwatchLogsLogDestination | undefined);
    private _logGroupArn?;
    get logGroupArn(): string;
    set logGroupArn(value: string);
    get logGroupArnInput(): string | undefined;
}
export interface PipesPipeLogConfigurationFirehoseLogDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#delivery_stream_arn PipesPipe#delivery_stream_arn}
    */
    readonly deliveryStreamArn: string;
}
export declare function pipesPipeLogConfigurationFirehoseLogDestinationToTerraform(struct?: PipesPipeLogConfigurationFirehoseLogDestinationOutputReference | PipesPipeLogConfigurationFirehoseLogDestination): any;
export declare function pipesPipeLogConfigurationFirehoseLogDestinationToHclTerraform(struct?: PipesPipeLogConfigurationFirehoseLogDestinationOutputReference | PipesPipeLogConfigurationFirehoseLogDestination): any;
export declare class PipesPipeLogConfigurationFirehoseLogDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeLogConfigurationFirehoseLogDestination | undefined;
    set internalValue(value: PipesPipeLogConfigurationFirehoseLogDestination | undefined);
    private _deliveryStreamArn?;
    get deliveryStreamArn(): string;
    set deliveryStreamArn(value: string);
    get deliveryStreamArnInput(): string | undefined;
}
export interface PipesPipeLogConfigurationS3LogDestination {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#bucket_name PipesPipe#bucket_name}
    */
    readonly bucketName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#bucket_owner PipesPipe#bucket_owner}
    */
    readonly bucketOwner: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#output_format PipesPipe#output_format}
    */
    readonly outputFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#prefix PipesPipe#prefix}
    */
    readonly prefix?: string;
}
export declare function pipesPipeLogConfigurationS3LogDestinationToTerraform(struct?: PipesPipeLogConfigurationS3LogDestinationOutputReference | PipesPipeLogConfigurationS3LogDestination): any;
export declare function pipesPipeLogConfigurationS3LogDestinationToHclTerraform(struct?: PipesPipeLogConfigurationS3LogDestinationOutputReference | PipesPipeLogConfigurationS3LogDestination): any;
export declare class PipesPipeLogConfigurationS3LogDestinationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeLogConfigurationS3LogDestination | undefined;
    set internalValue(value: PipesPipeLogConfigurationS3LogDestination | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    get bucketNameInput(): string | undefined;
    private _bucketOwner?;
    get bucketOwner(): string;
    set bucketOwner(value: string);
    get bucketOwnerInput(): string | undefined;
    private _outputFormat?;
    get outputFormat(): string;
    set outputFormat(value: string);
    resetOutputFormat(): void;
    get outputFormatInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
}
export interface PipesPipeLogConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#include_execution_data PipesPipe#include_execution_data}
    */
    readonly includeExecutionData?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#level PipesPipe#level}
    */
    readonly level: string;
    /**
    * cloudwatch_logs_log_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#cloudwatch_logs_log_destination PipesPipe#cloudwatch_logs_log_destination}
    */
    readonly cloudwatchLogsLogDestination?: PipesPipeLogConfigurationCloudwatchLogsLogDestination;
    /**
    * firehose_log_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#firehose_log_destination PipesPipe#firehose_log_destination}
    */
    readonly firehoseLogDestination?: PipesPipeLogConfigurationFirehoseLogDestination;
    /**
    * s3_log_destination block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#s3_log_destination PipesPipe#s3_log_destination}
    */
    readonly s3LogDestination?: PipesPipeLogConfigurationS3LogDestination;
}
export declare function pipesPipeLogConfigurationToTerraform(struct?: PipesPipeLogConfigurationOutputReference | PipesPipeLogConfiguration): any;
export declare function pipesPipeLogConfigurationToHclTerraform(struct?: PipesPipeLogConfigurationOutputReference | PipesPipeLogConfiguration): any;
export declare class PipesPipeLogConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeLogConfiguration | undefined;
    set internalValue(value: PipesPipeLogConfiguration | undefined);
    private _includeExecutionData?;
    get includeExecutionData(): string[];
    set includeExecutionData(value: string[]);
    resetIncludeExecutionData(): void;
    get includeExecutionDataInput(): string[] | undefined;
    private _level?;
    get level(): string;
    set level(value: string);
    get levelInput(): string | undefined;
    private _cloudwatchLogsLogDestination;
    get cloudwatchLogsLogDestination(): PipesPipeLogConfigurationCloudwatchLogsLogDestinationOutputReference;
    putCloudwatchLogsLogDestination(value: PipesPipeLogConfigurationCloudwatchLogsLogDestination): void;
    resetCloudwatchLogsLogDestination(): void;
    get cloudwatchLogsLogDestinationInput(): PipesPipeLogConfigurationCloudwatchLogsLogDestination | undefined;
    private _firehoseLogDestination;
    get firehoseLogDestination(): PipesPipeLogConfigurationFirehoseLogDestinationOutputReference;
    putFirehoseLogDestination(value: PipesPipeLogConfigurationFirehoseLogDestination): void;
    resetFirehoseLogDestination(): void;
    get firehoseLogDestinationInput(): PipesPipeLogConfigurationFirehoseLogDestination | undefined;
    private _s3LogDestination;
    get s3LogDestination(): PipesPipeLogConfigurationS3LogDestinationOutputReference;
    putS3LogDestination(value: PipesPipeLogConfigurationS3LogDestination): void;
    resetS3LogDestination(): void;
    get s3LogDestinationInput(): PipesPipeLogConfigurationS3LogDestination | undefined;
}
export interface PipesPipeSourceParametersActivemqBrokerParametersCredentials {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#basic_auth PipesPipe#basic_auth}
    */
    readonly basicAuth: string;
}
export declare function pipesPipeSourceParametersActivemqBrokerParametersCredentialsToTerraform(struct?: PipesPipeSourceParametersActivemqBrokerParametersCredentialsOutputReference | PipesPipeSourceParametersActivemqBrokerParametersCredentials): any;
export declare function pipesPipeSourceParametersActivemqBrokerParametersCredentialsToHclTerraform(struct?: PipesPipeSourceParametersActivemqBrokerParametersCredentialsOutputReference | PipesPipeSourceParametersActivemqBrokerParametersCredentials): any;
export declare class PipesPipeSourceParametersActivemqBrokerParametersCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeSourceParametersActivemqBrokerParametersCredentials | undefined;
    set internalValue(value: PipesPipeSourceParametersActivemqBrokerParametersCredentials | undefined);
    private _basicAuth?;
    get basicAuth(): string;
    set basicAuth(value: string);
    get basicAuthInput(): string | undefined;
}
export interface PipesPipeSourceParametersActivemqBrokerParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#batch_size PipesPipe#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds PipesPipe#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#queue_name PipesPipe#queue_name}
    */
    readonly queueName: string;
    /**
    * credentials block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#credentials PipesPipe#credentials}
    */
    readonly credentials: PipesPipeSourceParametersActivemqBrokerParametersCredentials;
}
export declare function pipesPipeSourceParametersActivemqBrokerParametersToTerraform(struct?: PipesPipeSourceParametersActivemqBrokerParametersOutputReference | PipesPipeSourceParametersActivemqBrokerParameters): any;
export declare function pipesPipeSourceParametersActivemqBrokerParametersToHclTerraform(struct?: PipesPipeSourceParametersActivemqBrokerParametersOutputReference | PipesPipeSourceParametersActivemqBrokerParameters): any;
export declare class PipesPipeSourceParametersActivemqBrokerParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeSourceParametersActivemqBrokerParameters | undefined;
    set internalValue(value: PipesPipeSourceParametersActivemqBrokerParameters | undefined);
    private _batchSize?;
    get batchSize(): number;
    set batchSize(value: number);
    resetBatchSize(): void;
    get batchSizeInput(): number | undefined;
    private _maximumBatchingWindowInSeconds?;
    get maximumBatchingWindowInSeconds(): number;
    set maximumBatchingWindowInSeconds(value: number);
    resetMaximumBatchingWindowInSeconds(): void;
    get maximumBatchingWindowInSecondsInput(): number | undefined;
    private _queueName?;
    get queueName(): string;
    set queueName(value: string);
    get queueNameInput(): string | undefined;
    private _credentials;
    get credentials(): PipesPipeSourceParametersActivemqBrokerParametersCredentialsOutputReference;
    putCredentials(value: PipesPipeSourceParametersActivemqBrokerParametersCredentials): void;
    get credentialsInput(): PipesPipeSourceParametersActivemqBrokerParametersCredentials | undefined;
}
export interface PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#arn PipesPipe#arn}
    */
    readonly arn?: string;
}
export declare function pipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfigToTerraform(struct?: PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfigOutputReference | PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfig): any;
export declare function pipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfigToHclTerraform(struct?: PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfigOutputReference | PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfig): any;
export declare class PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfig | undefined;
    set internalValue(value: PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfig | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
}
export interface PipesPipeSourceParametersDynamodbStreamParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#batch_size PipesPipe#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds PipesPipe#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#maximum_record_age_in_seconds PipesPipe#maximum_record_age_in_seconds}
    */
    readonly maximumRecordAgeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#maximum_retry_attempts PipesPipe#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#on_partial_batch_item_failure PipesPipe#on_partial_batch_item_failure}
    */
    readonly onPartialBatchItemFailure?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#parallelization_factor PipesPipe#parallelization_factor}
    */
    readonly parallelizationFactor?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#starting_position PipesPipe#starting_position}
    */
    readonly startingPosition: string;
    /**
    * dead_letter_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#dead_letter_config PipesPipe#dead_letter_config}
    */
    readonly deadLetterConfig?: PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfig;
}
export declare function pipesPipeSourceParametersDynamodbStreamParametersToTerraform(struct?: PipesPipeSourceParametersDynamodbStreamParametersOutputReference | PipesPipeSourceParametersDynamodbStreamParameters): any;
export declare function pipesPipeSourceParametersDynamodbStreamParametersToHclTerraform(struct?: PipesPipeSourceParametersDynamodbStreamParametersOutputReference | PipesPipeSourceParametersDynamodbStreamParameters): any;
export declare class PipesPipeSourceParametersDynamodbStreamParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeSourceParametersDynamodbStreamParameters | undefined;
    set internalValue(value: PipesPipeSourceParametersDynamodbStreamParameters | undefined);
    private _batchSize?;
    get batchSize(): number;
    set batchSize(value: number);
    resetBatchSize(): void;
    get batchSizeInput(): number | undefined;
    private _maximumBatchingWindowInSeconds?;
    get maximumBatchingWindowInSeconds(): number;
    set maximumBatchingWindowInSeconds(value: number);
    resetMaximumBatchingWindowInSeconds(): void;
    get maximumBatchingWindowInSecondsInput(): number | undefined;
    private _maximumRecordAgeInSeconds?;
    get maximumRecordAgeInSeconds(): number;
    set maximumRecordAgeInSeconds(value: number);
    resetMaximumRecordAgeInSeconds(): void;
    get maximumRecordAgeInSecondsInput(): number | undefined;
    private _maximumRetryAttempts?;
    get maximumRetryAttempts(): number;
    set maximumRetryAttempts(value: number);
    resetMaximumRetryAttempts(): void;
    get maximumRetryAttemptsInput(): number | undefined;
    private _onPartialBatchItemFailure?;
    get onPartialBatchItemFailure(): string;
    set onPartialBatchItemFailure(value: string);
    resetOnPartialBatchItemFailure(): void;
    get onPartialBatchItemFailureInput(): string | undefined;
    private _parallelizationFactor?;
    get parallelizationFactor(): number;
    set parallelizationFactor(value: number);
    resetParallelizationFactor(): void;
    get parallelizationFactorInput(): number | undefined;
    private _startingPosition?;
    get startingPosition(): string;
    set startingPosition(value: string);
    get startingPositionInput(): string | undefined;
    private _deadLetterConfig;
    get deadLetterConfig(): PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfigOutputReference;
    putDeadLetterConfig(value: PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfig): void;
    resetDeadLetterConfig(): void;
    get deadLetterConfigInput(): PipesPipeSourceParametersDynamodbStreamParametersDeadLetterConfig | undefined;
}
export interface PipesPipeSourceParametersFilterCriteriaFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#pattern PipesPipe#pattern}
    */
    readonly pattern: string;
}
export declare function pipesPipeSourceParametersFilterCriteriaFilterToTerraform(struct?: PipesPipeSourceParametersFilterCriteriaFilter | cdktf.IResolvable): any;
export declare function pipesPipeSourceParametersFilterCriteriaFilterToHclTerraform(struct?: PipesPipeSourceParametersFilterCriteriaFilter | cdktf.IResolvable): any;
export declare class PipesPipeSourceParametersFilterCriteriaFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PipesPipeSourceParametersFilterCriteriaFilter | cdktf.IResolvable | undefined;
    set internalValue(value: PipesPipeSourceParametersFilterCriteriaFilter | cdktf.IResolvable | undefined);
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    get patternInput(): string | undefined;
}
export declare class PipesPipeSourceParametersFilterCriteriaFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PipesPipeSourceParametersFilterCriteriaFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PipesPipeSourceParametersFilterCriteriaFilterOutputReference;
}
export interface PipesPipeSourceParametersFilterCriteria {
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#filter PipesPipe#filter}
    */
    readonly filter?: PipesPipeSourceParametersFilterCriteriaFilter[] | cdktf.IResolvable;
}
export declare function pipesPipeSourceParametersFilterCriteriaToTerraform(struct?: PipesPipeSourceParametersFilterCriteriaOutputReference | PipesPipeSourceParametersFilterCriteria): any;
export declare function pipesPipeSourceParametersFilterCriteriaToHclTerraform(struct?: PipesPipeSourceParametersFilterCriteriaOutputReference | PipesPipeSourceParametersFilterCriteria): any;
export declare class PipesPipeSourceParametersFilterCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeSourceParametersFilterCriteria | undefined;
    set internalValue(value: PipesPipeSourceParametersFilterCriteria | undefined);
    private _filter;
    get filter(): PipesPipeSourceParametersFilterCriteriaFilterList;
    putFilter(value: PipesPipeSourceParametersFilterCriteriaFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | PipesPipeSourceParametersFilterCriteriaFilter[] | undefined;
}
export interface PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#arn PipesPipe#arn}
    */
    readonly arn?: string;
}
export declare function pipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigToTerraform(struct?: PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigOutputReference | PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig): any;
export declare function pipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigToHclTerraform(struct?: PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigOutputReference | PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig): any;
export declare class PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig | undefined;
    set internalValue(value: PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
}
export interface PipesPipeSourceParametersKinesisStreamParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#batch_size PipesPipe#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds PipesPipe#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#maximum_record_age_in_seconds PipesPipe#maximum_record_age_in_seconds}
    */
    readonly maximumRecordAgeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#maximum_retry_attempts PipesPipe#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#on_partial_batch_item_failure PipesPipe#on_partial_batch_item_failure}
    */
    readonly onPartialBatchItemFailure?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#parallelization_factor PipesPipe#parallelization_factor}
    */
    readonly parallelizationFactor?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#starting_position PipesPipe#starting_position}
    */
    readonly startingPosition: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#starting_position_timestamp PipesPipe#starting_position_timestamp}
    */
    readonly startingPositionTimestamp?: string;
    /**
    * dead_letter_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#dead_letter_config PipesPipe#dead_letter_config}
    */
    readonly deadLetterConfig?: PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig;
}
export declare function pipesPipeSourceParametersKinesisStreamParametersToTerraform(struct?: PipesPipeSourceParametersKinesisStreamParametersOutputReference | PipesPipeSourceParametersKinesisStreamParameters): any;
export declare function pipesPipeSourceParametersKinesisStreamParametersToHclTerraform(struct?: PipesPipeSourceParametersKinesisStreamParametersOutputReference | PipesPipeSourceParametersKinesisStreamParameters): any;
export declare class PipesPipeSourceParametersKinesisStreamParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeSourceParametersKinesisStreamParameters | undefined;
    set internalValue(value: PipesPipeSourceParametersKinesisStreamParameters | undefined);
    private _batchSize?;
    get batchSize(): number;
    set batchSize(value: number);
    resetBatchSize(): void;
    get batchSizeInput(): number | undefined;
    private _maximumBatchingWindowInSeconds?;
    get maximumBatchingWindowInSeconds(): number;
    set maximumBatchingWindowInSeconds(value: number);
    resetMaximumBatchingWindowInSeconds(): void;
    get maximumBatchingWindowInSecondsInput(): number | undefined;
    private _maximumRecordAgeInSeconds?;
    get maximumRecordAgeInSeconds(): number;
    set maximumRecordAgeInSeconds(value: number);
    resetMaximumRecordAgeInSeconds(): void;
    get maximumRecordAgeInSecondsInput(): number | undefined;
    private _maximumRetryAttempts?;
    get maximumRetryAttempts(): number;
    set maximumRetryAttempts(value: number);
    resetMaximumRetryAttempts(): void;
    get maximumRetryAttemptsInput(): number | undefined;
    private _onPartialBatchItemFailure?;
    get onPartialBatchItemFailure(): string;
    set onPartialBatchItemFailure(value: string);
    resetOnPartialBatchItemFailure(): void;
    get onPartialBatchItemFailureInput(): string | undefined;
    private _parallelizationFactor?;
    get parallelizationFactor(): number;
    set parallelizationFactor(value: number);
    resetParallelizationFactor(): void;
    get parallelizationFactorInput(): number | undefined;
    private _startingPosition?;
    get startingPosition(): string;
    set startingPosition(value: string);
    get startingPositionInput(): string | undefined;
    private _startingPositionTimestamp?;
    get startingPositionTimestamp(): string;
    set startingPositionTimestamp(value: string);
    resetStartingPositionTimestamp(): void;
    get startingPositionTimestampInput(): string | undefined;
    private _deadLetterConfig;
    get deadLetterConfig(): PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfigOutputReference;
    putDeadLetterConfig(value: PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig): void;
    resetDeadLetterConfig(): void;
    get deadLetterConfigInput(): PipesPipeSourceParametersKinesisStreamParametersDeadLetterConfig | undefined;
}
export interface PipesPipeSourceParametersManagedStreamingKafkaParametersCredentials {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#client_certificate_tls_auth PipesPipe#client_certificate_tls_auth}
    */
    readonly clientCertificateTlsAuth?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#sasl_scram_512_auth PipesPipe#sasl_scram_512_auth}
    */
    readonly saslScram512Auth?: string;
}
export declare function pipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsToTerraform(struct?: PipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsOutputReference | PipesPipeSourceParametersManagedStreamingKafkaParametersCredentials): any;
export declare function pipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsToHclTerraform(struct?: PipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsOutputReference | PipesPipeSourceParametersManagedStreamingKafkaParametersCredentials): any;
export declare class PipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeSourceParametersManagedStreamingKafkaParametersCredentials | undefined;
    set internalValue(value: PipesPipeSourceParametersManagedStreamingKafkaParametersCredentials | undefined);
    private _clientCertificateTlsAuth?;
    get clientCertificateTlsAuth(): string;
    set clientCertificateTlsAuth(value: string);
    resetClientCertificateTlsAuth(): void;
    get clientCertificateTlsAuthInput(): string | undefined;
    private _saslScram512Auth?;
    get saslScram512Auth(): string;
    set saslScram512Auth(value: string);
    resetSaslScram512Auth(): void;
    get saslScram512AuthInput(): string | undefined;
}
export interface PipesPipeSourceParametersManagedStreamingKafkaParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#batch_size PipesPipe#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#consumer_group_id PipesPipe#consumer_group_id}
    */
    readonly consumerGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds PipesPipe#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#starting_position PipesPipe#starting_position}
    */
    readonly startingPosition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#topic_name PipesPipe#topic_name}
    */
    readonly topicName: string;
    /**
    * credentials block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#credentials PipesPipe#credentials}
    */
    readonly credentials?: PipesPipeSourceParametersManagedStreamingKafkaParametersCredentials;
}
export declare function pipesPipeSourceParametersManagedStreamingKafkaParametersToTerraform(struct?: PipesPipeSourceParametersManagedStreamingKafkaParametersOutputReference | PipesPipeSourceParametersManagedStreamingKafkaParameters): any;
export declare function pipesPipeSourceParametersManagedStreamingKafkaParametersToHclTerraform(struct?: PipesPipeSourceParametersManagedStreamingKafkaParametersOutputReference | PipesPipeSourceParametersManagedStreamingKafkaParameters): any;
export declare class PipesPipeSourceParametersManagedStreamingKafkaParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeSourceParametersManagedStreamingKafkaParameters | undefined;
    set internalValue(value: PipesPipeSourceParametersManagedStreamingKafkaParameters | undefined);
    private _batchSize?;
    get batchSize(): number;
    set batchSize(value: number);
    resetBatchSize(): void;
    get batchSizeInput(): number | undefined;
    private _consumerGroupId?;
    get consumerGroupId(): string;
    set consumerGroupId(value: string);
    resetConsumerGroupId(): void;
    get consumerGroupIdInput(): string | undefined;
    private _maximumBatchingWindowInSeconds?;
    get maximumBatchingWindowInSeconds(): number;
    set maximumBatchingWindowInSeconds(value: number);
    resetMaximumBatchingWindowInSeconds(): void;
    get maximumBatchingWindowInSecondsInput(): number | undefined;
    private _startingPosition?;
    get startingPosition(): string;
    set startingPosition(value: string);
    resetStartingPosition(): void;
    get startingPositionInput(): string | undefined;
    private _topicName?;
    get topicName(): string;
    set topicName(value: string);
    get topicNameInput(): string | undefined;
    private _credentials;
    get credentials(): PipesPipeSourceParametersManagedStreamingKafkaParametersCredentialsOutputReference;
    putCredentials(value: PipesPipeSourceParametersManagedStreamingKafkaParametersCredentials): void;
    resetCredentials(): void;
    get credentialsInput(): PipesPipeSourceParametersManagedStreamingKafkaParametersCredentials | undefined;
}
export interface PipesPipeSourceParametersRabbitmqBrokerParametersCredentials {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#basic_auth PipesPipe#basic_auth}
    */
    readonly basicAuth: string;
}
export declare function pipesPipeSourceParametersRabbitmqBrokerParametersCredentialsToTerraform(struct?: PipesPipeSourceParametersRabbitmqBrokerParametersCredentialsOutputReference | PipesPipeSourceParametersRabbitmqBrokerParametersCredentials): any;
export declare function pipesPipeSourceParametersRabbitmqBrokerParametersCredentialsToHclTerraform(struct?: PipesPipeSourceParametersRabbitmqBrokerParametersCredentialsOutputReference | PipesPipeSourceParametersRabbitmqBrokerParametersCredentials): any;
export declare class PipesPipeSourceParametersRabbitmqBrokerParametersCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeSourceParametersRabbitmqBrokerParametersCredentials | undefined;
    set internalValue(value: PipesPipeSourceParametersRabbitmqBrokerParametersCredentials | undefined);
    private _basicAuth?;
    get basicAuth(): string;
    set basicAuth(value: string);
    get basicAuthInput(): string | undefined;
}
export interface PipesPipeSourceParametersRabbitmqBrokerParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#batch_size PipesPipe#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds PipesPipe#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#queue_name PipesPipe#queue_name}
    */
    readonly queueName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#virtual_host PipesPipe#virtual_host}
    */
    readonly virtualHost?: string;
    /**
    * credentials block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#credentials PipesPipe#credentials}
    */
    readonly credentials: PipesPipeSourceParametersRabbitmqBrokerParametersCredentials;
}
export declare function pipesPipeSourceParametersRabbitmqBrokerParametersToTerraform(struct?: PipesPipeSourceParametersRabbitmqBrokerParametersOutputReference | PipesPipeSourceParametersRabbitmqBrokerParameters): any;
export declare function pipesPipeSourceParametersRabbitmqBrokerParametersToHclTerraform(struct?: PipesPipeSourceParametersRabbitmqBrokerParametersOutputReference | PipesPipeSourceParametersRabbitmqBrokerParameters): any;
export declare class PipesPipeSourceParametersRabbitmqBrokerParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeSourceParametersRabbitmqBrokerParameters | undefined;
    set internalValue(value: PipesPipeSourceParametersRabbitmqBrokerParameters | undefined);
    private _batchSize?;
    get batchSize(): number;
    set batchSize(value: number);
    resetBatchSize(): void;
    get batchSizeInput(): number | undefined;
    private _maximumBatchingWindowInSeconds?;
    get maximumBatchingWindowInSeconds(): number;
    set maximumBatchingWindowInSeconds(value: number);
    resetMaximumBatchingWindowInSeconds(): void;
    get maximumBatchingWindowInSecondsInput(): number | undefined;
    private _queueName?;
    get queueName(): string;
    set queueName(value: string);
    get queueNameInput(): string | undefined;
    private _virtualHost?;
    get virtualHost(): string;
    set virtualHost(value: string);
    resetVirtualHost(): void;
    get virtualHostInput(): string | undefined;
    private _credentials;
    get credentials(): PipesPipeSourceParametersRabbitmqBrokerParametersCredentialsOutputReference;
    putCredentials(value: PipesPipeSourceParametersRabbitmqBrokerParametersCredentials): void;
    get credentialsInput(): PipesPipeSourceParametersRabbitmqBrokerParametersCredentials | undefined;
}
export interface PipesPipeSourceParametersSelfManagedKafkaParametersCredentials {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#basic_auth PipesPipe#basic_auth}
    */
    readonly basicAuth?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#client_certificate_tls_auth PipesPipe#client_certificate_tls_auth}
    */
    readonly clientCertificateTlsAuth?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#sasl_scram_256_auth PipesPipe#sasl_scram_256_auth}
    */
    readonly saslScram256Auth?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#sasl_scram_512_auth PipesPipe#sasl_scram_512_auth}
    */
    readonly saslScram512Auth?: string;
}
export declare function pipesPipeSourceParametersSelfManagedKafkaParametersCredentialsToTerraform(struct?: PipesPipeSourceParametersSelfManagedKafkaParametersCredentialsOutputReference | PipesPipeSourceParametersSelfManagedKafkaParametersCredentials): any;
export declare function pipesPipeSourceParametersSelfManagedKafkaParametersCredentialsToHclTerraform(struct?: PipesPipeSourceParametersSelfManagedKafkaParametersCredentialsOutputReference | PipesPipeSourceParametersSelfManagedKafkaParametersCredentials): any;
export declare class PipesPipeSourceParametersSelfManagedKafkaParametersCredentialsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeSourceParametersSelfManagedKafkaParametersCredentials | undefined;
    set internalValue(value: PipesPipeSourceParametersSelfManagedKafkaParametersCredentials | undefined);
    private _basicAuth?;
    get basicAuth(): string;
    set basicAuth(value: string);
    resetBasicAuth(): void;
    get basicAuthInput(): string | undefined;
    private _clientCertificateTlsAuth?;
    get clientCertificateTlsAuth(): string;
    set clientCertificateTlsAuth(value: string);
    resetClientCertificateTlsAuth(): void;
    get clientCertificateTlsAuthInput(): string | undefined;
    private _saslScram256Auth?;
    get saslScram256Auth(): string;
    set saslScram256Auth(value: string);
    resetSaslScram256Auth(): void;
    get saslScram256AuthInput(): string | undefined;
    private _saslScram512Auth?;
    get saslScram512Auth(): string;
    set saslScram512Auth(value: string);
    resetSaslScram512Auth(): void;
    get saslScram512AuthInput(): string | undefined;
}
export interface PipesPipeSourceParametersSelfManagedKafkaParametersVpc {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#security_groups PipesPipe#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#subnets PipesPipe#subnets}
    */
    readonly subnets?: string[];
}
export declare function pipesPipeSourceParametersSelfManagedKafkaParametersVpcToTerraform(struct?: PipesPipeSourceParametersSelfManagedKafkaParametersVpcOutputReference | PipesPipeSourceParametersSelfManagedKafkaParametersVpc): any;
export declare function pipesPipeSourceParametersSelfManagedKafkaParametersVpcToHclTerraform(struct?: PipesPipeSourceParametersSelfManagedKafkaParametersVpcOutputReference | PipesPipeSourceParametersSelfManagedKafkaParametersVpc): any;
export declare class PipesPipeSourceParametersSelfManagedKafkaParametersVpcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeSourceParametersSelfManagedKafkaParametersVpc | undefined;
    set internalValue(value: PipesPipeSourceParametersSelfManagedKafkaParametersVpc | undefined);
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    resetSubnets(): void;
    get subnetsInput(): string[] | undefined;
}
export interface PipesPipeSourceParametersSelfManagedKafkaParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#additional_bootstrap_servers PipesPipe#additional_bootstrap_servers}
    */
    readonly additionalBootstrapServers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#batch_size PipesPipe#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#consumer_group_id PipesPipe#consumer_group_id}
    */
    readonly consumerGroupId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds PipesPipe#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#server_root_ca_certificate PipesPipe#server_root_ca_certificate}
    */
    readonly serverRootCaCertificate?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#starting_position PipesPipe#starting_position}
    */
    readonly startingPosition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#topic_name PipesPipe#topic_name}
    */
    readonly topicName: string;
    /**
    * credentials block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#credentials PipesPipe#credentials}
    */
    readonly credentials?: PipesPipeSourceParametersSelfManagedKafkaParametersCredentials;
    /**
    * vpc block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#vpc PipesPipe#vpc}
    */
    readonly vpc?: PipesPipeSourceParametersSelfManagedKafkaParametersVpc;
}
export declare function pipesPipeSourceParametersSelfManagedKafkaParametersToTerraform(struct?: PipesPipeSourceParametersSelfManagedKafkaParametersOutputReference | PipesPipeSourceParametersSelfManagedKafkaParameters): any;
export declare function pipesPipeSourceParametersSelfManagedKafkaParametersToHclTerraform(struct?: PipesPipeSourceParametersSelfManagedKafkaParametersOutputReference | PipesPipeSourceParametersSelfManagedKafkaParameters): any;
export declare class PipesPipeSourceParametersSelfManagedKafkaParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeSourceParametersSelfManagedKafkaParameters | undefined;
    set internalValue(value: PipesPipeSourceParametersSelfManagedKafkaParameters | undefined);
    private _additionalBootstrapServers?;
    get additionalBootstrapServers(): string[];
    set additionalBootstrapServers(value: string[]);
    resetAdditionalBootstrapServers(): void;
    get additionalBootstrapServersInput(): string[] | undefined;
    private _batchSize?;
    get batchSize(): number;
    set batchSize(value: number);
    resetBatchSize(): void;
    get batchSizeInput(): number | undefined;
    private _consumerGroupId?;
    get consumerGroupId(): string;
    set consumerGroupId(value: string);
    resetConsumerGroupId(): void;
    get consumerGroupIdInput(): string | undefined;
    private _maximumBatchingWindowInSeconds?;
    get maximumBatchingWindowInSeconds(): number;
    set maximumBatchingWindowInSeconds(value: number);
    resetMaximumBatchingWindowInSeconds(): void;
    get maximumBatchingWindowInSecondsInput(): number | undefined;
    private _serverRootCaCertificate?;
    get serverRootCaCertificate(): string;
    set serverRootCaCertificate(value: string);
    resetServerRootCaCertificate(): void;
    get serverRootCaCertificateInput(): string | undefined;
    private _startingPosition?;
    get startingPosition(): string;
    set startingPosition(value: string);
    resetStartingPosition(): void;
    get startingPositionInput(): string | undefined;
    private _topicName?;
    get topicName(): string;
    set topicName(value: string);
    get topicNameInput(): string | undefined;
    private _credentials;
    get credentials(): PipesPipeSourceParametersSelfManagedKafkaParametersCredentialsOutputReference;
    putCredentials(value: PipesPipeSourceParametersSelfManagedKafkaParametersCredentials): void;
    resetCredentials(): void;
    get credentialsInput(): PipesPipeSourceParametersSelfManagedKafkaParametersCredentials | undefined;
    private _vpc;
    get vpc(): PipesPipeSourceParametersSelfManagedKafkaParametersVpcOutputReference;
    putVpc(value: PipesPipeSourceParametersSelfManagedKafkaParametersVpc): void;
    resetVpc(): void;
    get vpcInput(): PipesPipeSourceParametersSelfManagedKafkaParametersVpc | undefined;
}
export interface PipesPipeSourceParametersSqsQueueParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#batch_size PipesPipe#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#maximum_batching_window_in_seconds PipesPipe#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
}
export declare function pipesPipeSourceParametersSqsQueueParametersToTerraform(struct?: PipesPipeSourceParametersSqsQueueParametersOutputReference | PipesPipeSourceParametersSqsQueueParameters): any;
export declare function pipesPipeSourceParametersSqsQueueParametersToHclTerraform(struct?: PipesPipeSourceParametersSqsQueueParametersOutputReference | PipesPipeSourceParametersSqsQueueParameters): any;
export declare class PipesPipeSourceParametersSqsQueueParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeSourceParametersSqsQueueParameters | undefined;
    set internalValue(value: PipesPipeSourceParametersSqsQueueParameters | undefined);
    private _batchSize?;
    get batchSize(): number;
    set batchSize(value: number);
    resetBatchSize(): void;
    get batchSizeInput(): number | undefined;
    private _maximumBatchingWindowInSeconds?;
    get maximumBatchingWindowInSeconds(): number;
    set maximumBatchingWindowInSeconds(value: number);
    resetMaximumBatchingWindowInSeconds(): void;
    get maximumBatchingWindowInSecondsInput(): number | undefined;
}
export interface PipesPipeSourceParameters {
    /**
    * activemq_broker_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#activemq_broker_parameters PipesPipe#activemq_broker_parameters}
    */
    readonly activemqBrokerParameters?: PipesPipeSourceParametersActivemqBrokerParameters;
    /**
    * dynamodb_stream_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#dynamodb_stream_parameters PipesPipe#dynamodb_stream_parameters}
    */
    readonly dynamodbStreamParameters?: PipesPipeSourceParametersDynamodbStreamParameters;
    /**
    * filter_criteria block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#filter_criteria PipesPipe#filter_criteria}
    */
    readonly filterCriteria?: PipesPipeSourceParametersFilterCriteria;
    /**
    * kinesis_stream_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#kinesis_stream_parameters PipesPipe#kinesis_stream_parameters}
    */
    readonly kinesisStreamParameters?: PipesPipeSourceParametersKinesisStreamParameters;
    /**
    * managed_streaming_kafka_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#managed_streaming_kafka_parameters PipesPipe#managed_streaming_kafka_parameters}
    */
    readonly managedStreamingKafkaParameters?: PipesPipeSourceParametersManagedStreamingKafkaParameters;
    /**
    * rabbitmq_broker_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#rabbitmq_broker_parameters PipesPipe#rabbitmq_broker_parameters}
    */
    readonly rabbitmqBrokerParameters?: PipesPipeSourceParametersRabbitmqBrokerParameters;
    /**
    * self_managed_kafka_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#self_managed_kafka_parameters PipesPipe#self_managed_kafka_parameters}
    */
    readonly selfManagedKafkaParameters?: PipesPipeSourceParametersSelfManagedKafkaParameters;
    /**
    * sqs_queue_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#sqs_queue_parameters PipesPipe#sqs_queue_parameters}
    */
    readonly sqsQueueParameters?: PipesPipeSourceParametersSqsQueueParameters;
}
export declare function pipesPipeSourceParametersToTerraform(struct?: PipesPipeSourceParametersOutputReference | PipesPipeSourceParameters): any;
export declare function pipesPipeSourceParametersToHclTerraform(struct?: PipesPipeSourceParametersOutputReference | PipesPipeSourceParameters): any;
export declare class PipesPipeSourceParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeSourceParameters | undefined;
    set internalValue(value: PipesPipeSourceParameters | undefined);
    private _activemqBrokerParameters;
    get activemqBrokerParameters(): PipesPipeSourceParametersActivemqBrokerParametersOutputReference;
    putActivemqBrokerParameters(value: PipesPipeSourceParametersActivemqBrokerParameters): void;
    resetActivemqBrokerParameters(): void;
    get activemqBrokerParametersInput(): PipesPipeSourceParametersActivemqBrokerParameters | undefined;
    private _dynamodbStreamParameters;
    get dynamodbStreamParameters(): PipesPipeSourceParametersDynamodbStreamParametersOutputReference;
    putDynamodbStreamParameters(value: PipesPipeSourceParametersDynamodbStreamParameters): void;
    resetDynamodbStreamParameters(): void;
    get dynamodbStreamParametersInput(): PipesPipeSourceParametersDynamodbStreamParameters | undefined;
    private _filterCriteria;
    get filterCriteria(): PipesPipeSourceParametersFilterCriteriaOutputReference;
    putFilterCriteria(value: PipesPipeSourceParametersFilterCriteria): void;
    resetFilterCriteria(): void;
    get filterCriteriaInput(): PipesPipeSourceParametersFilterCriteria | undefined;
    private _kinesisStreamParameters;
    get kinesisStreamParameters(): PipesPipeSourceParametersKinesisStreamParametersOutputReference;
    putKinesisStreamParameters(value: PipesPipeSourceParametersKinesisStreamParameters): void;
    resetKinesisStreamParameters(): void;
    get kinesisStreamParametersInput(): PipesPipeSourceParametersKinesisStreamParameters | undefined;
    private _managedStreamingKafkaParameters;
    get managedStreamingKafkaParameters(): PipesPipeSourceParametersManagedStreamingKafkaParametersOutputReference;
    putManagedStreamingKafkaParameters(value: PipesPipeSourceParametersManagedStreamingKafkaParameters): void;
    resetManagedStreamingKafkaParameters(): void;
    get managedStreamingKafkaParametersInput(): PipesPipeSourceParametersManagedStreamingKafkaParameters | undefined;
    private _rabbitmqBrokerParameters;
    get rabbitmqBrokerParameters(): PipesPipeSourceParametersRabbitmqBrokerParametersOutputReference;
    putRabbitmqBrokerParameters(value: PipesPipeSourceParametersRabbitmqBrokerParameters): void;
    resetRabbitmqBrokerParameters(): void;
    get rabbitmqBrokerParametersInput(): PipesPipeSourceParametersRabbitmqBrokerParameters | undefined;
    private _selfManagedKafkaParameters;
    get selfManagedKafkaParameters(): PipesPipeSourceParametersSelfManagedKafkaParametersOutputReference;
    putSelfManagedKafkaParameters(value: PipesPipeSourceParametersSelfManagedKafkaParameters): void;
    resetSelfManagedKafkaParameters(): void;
    get selfManagedKafkaParametersInput(): PipesPipeSourceParametersSelfManagedKafkaParameters | undefined;
    private _sqsQueueParameters;
    get sqsQueueParameters(): PipesPipeSourceParametersSqsQueueParametersOutputReference;
    putSqsQueueParameters(value: PipesPipeSourceParametersSqsQueueParameters): void;
    resetSqsQueueParameters(): void;
    get sqsQueueParametersInput(): PipesPipeSourceParametersSqsQueueParameters | undefined;
}
export interface PipesPipeTargetParametersBatchJobParametersArrayProperties {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#size PipesPipe#size}
    */
    readonly size?: number;
}
export declare function pipesPipeTargetParametersBatchJobParametersArrayPropertiesToTerraform(struct?: PipesPipeTargetParametersBatchJobParametersArrayPropertiesOutputReference | PipesPipeTargetParametersBatchJobParametersArrayProperties): any;
export declare function pipesPipeTargetParametersBatchJobParametersArrayPropertiesToHclTerraform(struct?: PipesPipeTargetParametersBatchJobParametersArrayPropertiesOutputReference | PipesPipeTargetParametersBatchJobParametersArrayProperties): any;
export declare class PipesPipeTargetParametersBatchJobParametersArrayPropertiesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersBatchJobParametersArrayProperties | undefined;
    set internalValue(value: PipesPipeTargetParametersBatchJobParametersArrayProperties | undefined);
    private _size?;
    get size(): number;
    set size(value: number);
    resetSize(): void;
    get sizeInput(): number | undefined;
}
export interface PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#name PipesPipe#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#value PipesPipe#value}
    */
    readonly value?: string;
}
export declare function pipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentToTerraform(struct?: PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment | cdktf.IResolvable): any;
export declare function pipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentToHclTerraform(struct?: PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment | cdktf.IResolvable): any;
export declare class PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment | cdktf.IResolvable | undefined;
    set internalValue(value: PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentOutputReference;
}
export interface PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#type PipesPipe#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#value PipesPipe#value}
    */
    readonly value: string;
}
export declare function pipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementToTerraform(struct?: PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement | cdktf.IResolvable): any;
export declare function pipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementToHclTerraform(struct?: PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement | cdktf.IResolvable): any;
export declare class PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement | cdktf.IResolvable | undefined;
    set internalValue(value: PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementOutputReference;
}
export interface PipesPipeTargetParametersBatchJobParametersContainerOverrides {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#command PipesPipe#command}
    */
    readonly command?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#instance_type PipesPipe#instance_type}
    */
    readonly instanceType?: string;
    /**
    * environment block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#environment PipesPipe#environment}
    */
    readonly environment?: PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment[] | cdktf.IResolvable;
    /**
    * resource_requirement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#resource_requirement PipesPipe#resource_requirement}
    */
    readonly resourceRequirement?: PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement[] | cdktf.IResolvable;
}
export declare function pipesPipeTargetParametersBatchJobParametersContainerOverridesToTerraform(struct?: PipesPipeTargetParametersBatchJobParametersContainerOverridesOutputReference | PipesPipeTargetParametersBatchJobParametersContainerOverrides): any;
export declare function pipesPipeTargetParametersBatchJobParametersContainerOverridesToHclTerraform(struct?: PipesPipeTargetParametersBatchJobParametersContainerOverridesOutputReference | PipesPipeTargetParametersBatchJobParametersContainerOverrides): any;
export declare class PipesPipeTargetParametersBatchJobParametersContainerOverridesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersBatchJobParametersContainerOverrides | undefined;
    set internalValue(value: PipesPipeTargetParametersBatchJobParametersContainerOverrides | undefined);
    private _command?;
    get command(): string[];
    set command(value: string[]);
    resetCommand(): void;
    get commandInput(): string[] | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _environment;
    get environment(): PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironmentList;
    putEnvironment(value: PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment[] | cdktf.IResolvable): void;
    resetEnvironment(): void;
    get environmentInput(): cdktf.IResolvable | PipesPipeTargetParametersBatchJobParametersContainerOverridesEnvironment[] | undefined;
    private _resourceRequirement;
    get resourceRequirement(): PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirementList;
    putResourceRequirement(value: PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement[] | cdktf.IResolvable): void;
    resetResourceRequirement(): void;
    get resourceRequirementInput(): cdktf.IResolvable | PipesPipeTargetParametersBatchJobParametersContainerOverridesResourceRequirement[] | undefined;
}
export interface PipesPipeTargetParametersBatchJobParametersDependsOn {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#job_id PipesPipe#job_id}
    */
    readonly jobId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#type PipesPipe#type}
    */
    readonly type?: string;
}
export declare function pipesPipeTargetParametersBatchJobParametersDependsOnToTerraform(struct?: PipesPipeTargetParametersBatchJobParametersDependsOn | cdktf.IResolvable): any;
export declare function pipesPipeTargetParametersBatchJobParametersDependsOnToHclTerraform(struct?: PipesPipeTargetParametersBatchJobParametersDependsOn | cdktf.IResolvable): any;
export declare class PipesPipeTargetParametersBatchJobParametersDependsOnOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PipesPipeTargetParametersBatchJobParametersDependsOn | cdktf.IResolvable | undefined;
    set internalValue(value: PipesPipeTargetParametersBatchJobParametersDependsOn | cdktf.IResolvable | undefined);
    private _jobId?;
    get jobId(): string;
    set jobId(value: string);
    resetJobId(): void;
    get jobIdInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class PipesPipeTargetParametersBatchJobParametersDependsOnList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PipesPipeTargetParametersBatchJobParametersDependsOn[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PipesPipeTargetParametersBatchJobParametersDependsOnOutputReference;
}
export interface PipesPipeTargetParametersBatchJobParametersRetryStrategy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#attempts PipesPipe#attempts}
    */
    readonly attempts?: number;
}
export declare function pipesPipeTargetParametersBatchJobParametersRetryStrategyToTerraform(struct?: PipesPipeTargetParametersBatchJobParametersRetryStrategyOutputReference | PipesPipeTargetParametersBatchJobParametersRetryStrategy): any;
export declare function pipesPipeTargetParametersBatchJobParametersRetryStrategyToHclTerraform(struct?: PipesPipeTargetParametersBatchJobParametersRetryStrategyOutputReference | PipesPipeTargetParametersBatchJobParametersRetryStrategy): any;
export declare class PipesPipeTargetParametersBatchJobParametersRetryStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersBatchJobParametersRetryStrategy | undefined;
    set internalValue(value: PipesPipeTargetParametersBatchJobParametersRetryStrategy | undefined);
    private _attempts?;
    get attempts(): number;
    set attempts(value: number);
    resetAttempts(): void;
    get attemptsInput(): number | undefined;
}
export interface PipesPipeTargetParametersBatchJobParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#job_definition PipesPipe#job_definition}
    */
    readonly jobDefinition: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#job_name PipesPipe#job_name}
    */
    readonly jobName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#parameters PipesPipe#parameters}
    */
    readonly parameters?: {
        [key: string]: string;
    };
    /**
    * array_properties block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#array_properties PipesPipe#array_properties}
    */
    readonly arrayProperties?: PipesPipeTargetParametersBatchJobParametersArrayProperties;
    /**
    * container_overrides block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#container_overrides PipesPipe#container_overrides}
    */
    readonly containerOverrides?: PipesPipeTargetParametersBatchJobParametersContainerOverrides;
    /**
    * depends_on block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#depends_on PipesPipe#depends_on}
    */
    readonly dependsOn?: PipesPipeTargetParametersBatchJobParametersDependsOn[] | cdktf.IResolvable;
    /**
    * retry_strategy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#retry_strategy PipesPipe#retry_strategy}
    */
    readonly retryStrategy?: PipesPipeTargetParametersBatchJobParametersRetryStrategy;
}
export declare function pipesPipeTargetParametersBatchJobParametersToTerraform(struct?: PipesPipeTargetParametersBatchJobParametersOutputReference | PipesPipeTargetParametersBatchJobParameters): any;
export declare function pipesPipeTargetParametersBatchJobParametersToHclTerraform(struct?: PipesPipeTargetParametersBatchJobParametersOutputReference | PipesPipeTargetParametersBatchJobParameters): any;
export declare class PipesPipeTargetParametersBatchJobParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersBatchJobParameters | undefined;
    set internalValue(value: PipesPipeTargetParametersBatchJobParameters | undefined);
    private _jobDefinition?;
    get jobDefinition(): string;
    set jobDefinition(value: string);
    get jobDefinitionInput(): string | undefined;
    private _jobName?;
    get jobName(): string;
    set jobName(value: string);
    get jobNameInput(): string | undefined;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _arrayProperties;
    get arrayProperties(): PipesPipeTargetParametersBatchJobParametersArrayPropertiesOutputReference;
    putArrayProperties(value: PipesPipeTargetParametersBatchJobParametersArrayProperties): void;
    resetArrayProperties(): void;
    get arrayPropertiesInput(): PipesPipeTargetParametersBatchJobParametersArrayProperties | undefined;
    private _containerOverrides;
    get containerOverrides(): PipesPipeTargetParametersBatchJobParametersContainerOverridesOutputReference;
    putContainerOverrides(value: PipesPipeTargetParametersBatchJobParametersContainerOverrides): void;
    resetContainerOverrides(): void;
    get containerOverridesInput(): PipesPipeTargetParametersBatchJobParametersContainerOverrides | undefined;
    private _dependsOn;
    get dependsOn(): PipesPipeTargetParametersBatchJobParametersDependsOnList;
    putDependsOn(value: PipesPipeTargetParametersBatchJobParametersDependsOn[] | cdktf.IResolvable): void;
    resetDependsOn(): void;
    get dependsOnInput(): cdktf.IResolvable | PipesPipeTargetParametersBatchJobParametersDependsOn[] | undefined;
    private _retryStrategy;
    get retryStrategy(): PipesPipeTargetParametersBatchJobParametersRetryStrategyOutputReference;
    putRetryStrategy(value: PipesPipeTargetParametersBatchJobParametersRetryStrategy): void;
    resetRetryStrategy(): void;
    get retryStrategyInput(): PipesPipeTargetParametersBatchJobParametersRetryStrategy | undefined;
}
export interface PipesPipeTargetParametersCloudwatchLogsParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#log_stream_name PipesPipe#log_stream_name}
    */
    readonly logStreamName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#timestamp PipesPipe#timestamp}
    */
    readonly timestamp?: string;
}
export declare function pipesPipeTargetParametersCloudwatchLogsParametersToTerraform(struct?: PipesPipeTargetParametersCloudwatchLogsParametersOutputReference | PipesPipeTargetParametersCloudwatchLogsParameters): any;
export declare function pipesPipeTargetParametersCloudwatchLogsParametersToHclTerraform(struct?: PipesPipeTargetParametersCloudwatchLogsParametersOutputReference | PipesPipeTargetParametersCloudwatchLogsParameters): any;
export declare class PipesPipeTargetParametersCloudwatchLogsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersCloudwatchLogsParameters | undefined;
    set internalValue(value: PipesPipeTargetParametersCloudwatchLogsParameters | undefined);
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
    private _timestamp?;
    get timestamp(): string;
    set timestamp(value: string);
    resetTimestamp(): void;
    get timestampInput(): string | undefined;
}
export interface PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#base PipesPipe#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#capacity_provider PipesPipe#capacity_provider}
    */
    readonly capacityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#weight PipesPipe#weight}
    */
    readonly weight?: number;
}
export declare function pipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy | cdktf.IResolvable): any;
export declare function pipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy | cdktf.IResolvable): any;
export declare class PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy | cdktf.IResolvable | undefined;
    set internalValue(value: PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy | cdktf.IResolvable | undefined);
    private _base?;
    get base(): number;
    set base(value: number);
    resetBase(): void;
    get baseInput(): number | undefined;
    private _capacityProvider?;
    get capacityProvider(): string;
    set capacityProvider(value: string);
    get capacityProviderInput(): string | undefined;
    private _weight?;
    get weight(): number;
    set weight(value: number);
    resetWeight(): void;
    get weightInput(): number | undefined;
}
export declare class PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyOutputReference;
}
export interface PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#assign_public_ip PipesPipe#assign_public_ip}
    */
    readonly assignPublicIp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#security_groups PipesPipe#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#subnets PipesPipe#subnets}
    */
    readonly subnets?: string[];
}
export declare function pipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationOutputReference | PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration): any;
export declare function pipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationOutputReference | PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration): any;
export declare class PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration | undefined;
    set internalValue(value: PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration | undefined);
    private _assignPublicIp?;
    get assignPublicIp(): string;
    set assignPublicIp(value: string);
    resetAssignPublicIp(): void;
    get assignPublicIpInput(): string | undefined;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[] | undefined;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    resetSubnets(): void;
    get subnetsInput(): string[] | undefined;
}
export interface PipesPipeTargetParametersEcsTaskParametersNetworkConfiguration {
    /**
    * aws_vpc_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#aws_vpc_configuration PipesPipe#aws_vpc_configuration}
    */
    readonly awsVpcConfiguration?: PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration;
}
export declare function pipesPipeTargetParametersEcsTaskParametersNetworkConfigurationToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationOutputReference | PipesPipeTargetParametersEcsTaskParametersNetworkConfiguration): any;
export declare function pipesPipeTargetParametersEcsTaskParametersNetworkConfigurationToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationOutputReference | PipesPipeTargetParametersEcsTaskParametersNetworkConfiguration): any;
export declare class PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersEcsTaskParametersNetworkConfiguration | undefined;
    set internalValue(value: PipesPipeTargetParametersEcsTaskParametersNetworkConfiguration | undefined);
    private _awsVpcConfiguration;
    get awsVpcConfiguration(): PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfigurationOutputReference;
    putAwsVpcConfiguration(value: PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration): void;
    resetAwsVpcConfiguration(): void;
    get awsVpcConfigurationInput(): PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationAwsVpcConfiguration | undefined;
}
export interface PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#name PipesPipe#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#value PipesPipe#value}
    */
    readonly value?: string;
}
export declare function pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment | cdktf.IResolvable): any;
export declare function pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment | cdktf.IResolvable): any;
export declare class PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment | cdktf.IResolvable | undefined;
    set internalValue(value: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    resetValue(): void;
    get valueInput(): string | undefined;
}
export declare class PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentOutputReference;
}
export interface PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#type PipesPipe#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#value PipesPipe#value}
    */
    readonly value: string;
}
export declare function pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFileToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile | cdktf.IResolvable): any;
export declare function pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFileToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile | cdktf.IResolvable): any;
export declare class PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFileOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile | cdktf.IResolvable | undefined;
    set internalValue(value: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFileList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFileOutputReference;
}
export interface PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#type PipesPipe#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#value PipesPipe#value}
    */
    readonly value: string;
}
export declare function pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirementToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement | cdktf.IResolvable): any;
export declare function pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirementToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement | cdktf.IResolvable): any;
export declare class PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement | cdktf.IResolvable | undefined;
    set internalValue(value: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirementList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirementOutputReference;
}
export interface PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#command PipesPipe#command}
    */
    readonly command?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#cpu PipesPipe#cpu}
    */
    readonly cpu?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#memory PipesPipe#memory}
    */
    readonly memory?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#memory_reservation PipesPipe#memory_reservation}
    */
    readonly memoryReservation?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#name PipesPipe#name}
    */
    readonly name?: string;
    /**
    * environment block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#environment PipesPipe#environment}
    */
    readonly environment?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment[] | cdktf.IResolvable;
    /**
    * environment_file block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#environment_file PipesPipe#environment_file}
    */
    readonly environmentFile?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile[] | cdktf.IResolvable;
    /**
    * resource_requirement block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#resource_requirement PipesPipe#resource_requirement}
    */
    readonly resourceRequirement?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement[] | cdktf.IResolvable;
}
export declare function pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride | cdktf.IResolvable): any;
export declare function pipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride | cdktf.IResolvable): any;
export declare class PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride | cdktf.IResolvable | undefined;
    set internalValue(value: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride | cdktf.IResolvable | undefined);
    private _command?;
    get command(): string[];
    set command(value: string[]);
    resetCommand(): void;
    get commandInput(): string[] | undefined;
    private _cpu?;
    get cpu(): number;
    set cpu(value: number);
    resetCpu(): void;
    get cpuInput(): number | undefined;
    private _memory?;
    get memory(): number;
    set memory(value: number);
    resetMemory(): void;
    get memoryInput(): number | undefined;
    private _memoryReservation?;
    get memoryReservation(): number;
    set memoryReservation(value: number);
    resetMemoryReservation(): void;
    get memoryReservationInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _environment;
    get environment(): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentList;
    putEnvironment(value: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment[] | cdktf.IResolvable): void;
    resetEnvironment(): void;
    get environmentInput(): cdktf.IResolvable | PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironment[] | undefined;
    private _environmentFile;
    get environmentFile(): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFileList;
    putEnvironmentFile(value: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile[] | cdktf.IResolvable): void;
    resetEnvironmentFile(): void;
    get environmentFileInput(): cdktf.IResolvable | PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideEnvironmentFile[] | undefined;
    private _resourceRequirement;
    get resourceRequirement(): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirementList;
    putResourceRequirement(value: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement[] | cdktf.IResolvable): void;
    resetResourceRequirement(): void;
    get resourceRequirementInput(): cdktf.IResolvable | PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideResourceRequirement[] | undefined;
}
export declare class PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideOutputReference;
}
export interface PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#size_in_gib PipesPipe#size_in_gib}
    */
    readonly sizeInGib: number;
}
export declare function pipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageOutputReference | PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage): any;
export declare function pipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageOutputReference | PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage): any;
export declare class PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage | undefined;
    set internalValue(value: PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage | undefined);
    private _sizeInGib?;
    get sizeInGib(): number;
    set sizeInGib(value: number);
    get sizeInGibInput(): number | undefined;
}
export interface PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#device_name PipesPipe#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#device_type PipesPipe#device_type}
    */
    readonly deviceType?: string;
}
export declare function pipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrideToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride | cdktf.IResolvable): any;
export declare function pipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrideToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride | cdktf.IResolvable): any;
export declare class PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrideOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride | cdktf.IResolvable | undefined;
    set internalValue(value: PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride | cdktf.IResolvable | undefined);
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    resetDeviceName(): void;
    get deviceNameInput(): string | undefined;
    private _deviceType?;
    get deviceType(): string;
    set deviceType(value: string);
    resetDeviceType(): void;
    get deviceTypeInput(): string | undefined;
}
export declare class PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrideList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrideOutputReference;
}
export interface PipesPipeTargetParametersEcsTaskParametersOverrides {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#cpu PipesPipe#cpu}
    */
    readonly cpu?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#execution_role_arn PipesPipe#execution_role_arn}
    */
    readonly executionRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#memory PipesPipe#memory}
    */
    readonly memory?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#task_role_arn PipesPipe#task_role_arn}
    */
    readonly taskRoleArn?: string;
    /**
    * container_override block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#container_override PipesPipe#container_override}
    */
    readonly containerOverride?: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride[] | cdktf.IResolvable;
    /**
    * ephemeral_storage block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#ephemeral_storage PipesPipe#ephemeral_storage}
    */
    readonly ephemeralStorage?: PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage;
    /**
    * inference_accelerator_override block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#inference_accelerator_override PipesPipe#inference_accelerator_override}
    */
    readonly inferenceAcceleratorOverride?: PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride[] | cdktf.IResolvable;
}
export declare function pipesPipeTargetParametersEcsTaskParametersOverridesToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesOutputReference | PipesPipeTargetParametersEcsTaskParametersOverrides): any;
export declare function pipesPipeTargetParametersEcsTaskParametersOverridesToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOverridesOutputReference | PipesPipeTargetParametersEcsTaskParametersOverrides): any;
export declare class PipesPipeTargetParametersEcsTaskParametersOverridesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersEcsTaskParametersOverrides | undefined;
    set internalValue(value: PipesPipeTargetParametersEcsTaskParametersOverrides | undefined);
    private _cpu?;
    get cpu(): string;
    set cpu(value: string);
    resetCpu(): void;
    get cpuInput(): string | undefined;
    private _executionRoleArn?;
    get executionRoleArn(): string;
    set executionRoleArn(value: string);
    resetExecutionRoleArn(): void;
    get executionRoleArnInput(): string | undefined;
    private _memory?;
    get memory(): string;
    set memory(value: string);
    resetMemory(): void;
    get memoryInput(): string | undefined;
    private _taskRoleArn?;
    get taskRoleArn(): string;
    set taskRoleArn(value: string);
    resetTaskRoleArn(): void;
    get taskRoleArnInput(): string | undefined;
    private _containerOverride;
    get containerOverride(): PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverrideList;
    putContainerOverride(value: PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride[] | cdktf.IResolvable): void;
    resetContainerOverride(): void;
    get containerOverrideInput(): cdktf.IResolvable | PipesPipeTargetParametersEcsTaskParametersOverridesContainerOverride[] | undefined;
    private _ephemeralStorage;
    get ephemeralStorage(): PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorageOutputReference;
    putEphemeralStorage(value: PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage): void;
    resetEphemeralStorage(): void;
    get ephemeralStorageInput(): PipesPipeTargetParametersEcsTaskParametersOverridesEphemeralStorage | undefined;
    private _inferenceAcceleratorOverride;
    get inferenceAcceleratorOverride(): PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverrideList;
    putInferenceAcceleratorOverride(value: PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride[] | cdktf.IResolvable): void;
    resetInferenceAcceleratorOverride(): void;
    get inferenceAcceleratorOverrideInput(): cdktf.IResolvable | PipesPipeTargetParametersEcsTaskParametersOverridesInferenceAcceleratorOverride[] | undefined;
}
export interface PipesPipeTargetParametersEcsTaskParametersPlacementConstraint {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#expression PipesPipe#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#type PipesPipe#type}
    */
    readonly type?: string;
}
export declare function pipesPipeTargetParametersEcsTaskParametersPlacementConstraintToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersPlacementConstraint | cdktf.IResolvable): any;
export declare function pipesPipeTargetParametersEcsTaskParametersPlacementConstraintToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersPlacementConstraint | cdktf.IResolvable): any;
export declare class PipesPipeTargetParametersEcsTaskParametersPlacementConstraintOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PipesPipeTargetParametersEcsTaskParametersPlacementConstraint | cdktf.IResolvable | undefined;
    set internalValue(value: PipesPipeTargetParametersEcsTaskParametersPlacementConstraint | cdktf.IResolvable | undefined);
    private _expression?;
    get expression(): string;
    set expression(value: string);
    resetExpression(): void;
    get expressionInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class PipesPipeTargetParametersEcsTaskParametersPlacementConstraintList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PipesPipeTargetParametersEcsTaskParametersPlacementConstraint[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PipesPipeTargetParametersEcsTaskParametersPlacementConstraintOutputReference;
}
export interface PipesPipeTargetParametersEcsTaskParametersPlacementStrategy {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#field PipesPipe#field}
    */
    readonly field?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#type PipesPipe#type}
    */
    readonly type?: string;
}
export declare function pipesPipeTargetParametersEcsTaskParametersPlacementStrategyToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersPlacementStrategy | cdktf.IResolvable): any;
export declare function pipesPipeTargetParametersEcsTaskParametersPlacementStrategyToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersPlacementStrategy | cdktf.IResolvable): any;
export declare class PipesPipeTargetParametersEcsTaskParametersPlacementStrategyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PipesPipeTargetParametersEcsTaskParametersPlacementStrategy | cdktf.IResolvable | undefined;
    set internalValue(value: PipesPipeTargetParametersEcsTaskParametersPlacementStrategy | cdktf.IResolvable | undefined);
    private _field?;
    get field(): string;
    set field(value: string);
    resetField(): void;
    get fieldInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
}
export declare class PipesPipeTargetParametersEcsTaskParametersPlacementStrategyList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PipesPipeTargetParametersEcsTaskParametersPlacementStrategy[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PipesPipeTargetParametersEcsTaskParametersPlacementStrategyOutputReference;
}
export interface PipesPipeTargetParametersEcsTaskParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#enable_ecs_managed_tags PipesPipe#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#enable_execute_command PipesPipe#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#group PipesPipe#group}
    */
    readonly group?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#launch_type PipesPipe#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#platform_version PipesPipe#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#propagate_tags PipesPipe#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#reference_id PipesPipe#reference_id}
    */
    readonly referenceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#tags PipesPipe#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#task_count PipesPipe#task_count}
    */
    readonly taskCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#task_definition_arn PipesPipe#task_definition_arn}
    */
    readonly taskDefinitionArn: string;
    /**
    * capacity_provider_strategy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#capacity_provider_strategy PipesPipe#capacity_provider_strategy}
    */
    readonly capacityProviderStrategy?: PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy[] | cdktf.IResolvable;
    /**
    * network_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#network_configuration PipesPipe#network_configuration}
    */
    readonly networkConfiguration?: PipesPipeTargetParametersEcsTaskParametersNetworkConfiguration;
    /**
    * overrides block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#overrides PipesPipe#overrides}
    */
    readonly overrides?: PipesPipeTargetParametersEcsTaskParametersOverrides;
    /**
    * placement_constraint block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#placement_constraint PipesPipe#placement_constraint}
    */
    readonly placementConstraint?: PipesPipeTargetParametersEcsTaskParametersPlacementConstraint[] | cdktf.IResolvable;
    /**
    * placement_strategy block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#placement_strategy PipesPipe#placement_strategy}
    */
    readonly placementStrategy?: PipesPipeTargetParametersEcsTaskParametersPlacementStrategy[] | cdktf.IResolvable;
}
export declare function pipesPipeTargetParametersEcsTaskParametersToTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOutputReference | PipesPipeTargetParametersEcsTaskParameters): any;
export declare function pipesPipeTargetParametersEcsTaskParametersToHclTerraform(struct?: PipesPipeTargetParametersEcsTaskParametersOutputReference | PipesPipeTargetParametersEcsTaskParameters): any;
export declare class PipesPipeTargetParametersEcsTaskParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersEcsTaskParameters | undefined;
    set internalValue(value: PipesPipeTargetParametersEcsTaskParameters | undefined);
    private _enableEcsManagedTags?;
    get enableEcsManagedTags(): boolean | cdktf.IResolvable;
    set enableEcsManagedTags(value: boolean | cdktf.IResolvable);
    resetEnableEcsManagedTags(): void;
    get enableEcsManagedTagsInput(): boolean | cdktf.IResolvable | undefined;
    private _enableExecuteCommand?;
    get enableExecuteCommand(): boolean | cdktf.IResolvable;
    set enableExecuteCommand(value: boolean | cdktf.IResolvable);
    resetEnableExecuteCommand(): void;
    get enableExecuteCommandInput(): boolean | cdktf.IResolvable | undefined;
    private _group?;
    get group(): string;
    set group(value: string);
    resetGroup(): void;
    get groupInput(): string | undefined;
    private _launchType?;
    get launchType(): string;
    set launchType(value: string);
    resetLaunchType(): void;
    get launchTypeInput(): string | undefined;
    private _platformVersion?;
    get platformVersion(): string;
    set platformVersion(value: string);
    resetPlatformVersion(): void;
    get platformVersionInput(): string | undefined;
    private _propagateTags?;
    get propagateTags(): string;
    set propagateTags(value: string);
    resetPropagateTags(): void;
    get propagateTagsInput(): string | undefined;
    private _referenceId?;
    get referenceId(): string;
    set referenceId(value: string);
    resetReferenceId(): void;
    get referenceIdInput(): string | undefined;
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
    private _taskCount?;
    get taskCount(): number;
    set taskCount(value: number);
    resetTaskCount(): void;
    get taskCountInput(): number | undefined;
    private _taskDefinitionArn?;
    get taskDefinitionArn(): string;
    set taskDefinitionArn(value: string);
    get taskDefinitionArnInput(): string | undefined;
    private _capacityProviderStrategy;
    get capacityProviderStrategy(): PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategyList;
    putCapacityProviderStrategy(value: PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy[] | cdktf.IResolvable): void;
    resetCapacityProviderStrategy(): void;
    get capacityProviderStrategyInput(): cdktf.IResolvable | PipesPipeTargetParametersEcsTaskParametersCapacityProviderStrategy[] | undefined;
    private _networkConfiguration;
    get networkConfiguration(): PipesPipeTargetParametersEcsTaskParametersNetworkConfigurationOutputReference;
    putNetworkConfiguration(value: PipesPipeTargetParametersEcsTaskParametersNetworkConfiguration): void;
    resetNetworkConfiguration(): void;
    get networkConfigurationInput(): PipesPipeTargetParametersEcsTaskParametersNetworkConfiguration | undefined;
    private _overrides;
    get overrides(): PipesPipeTargetParametersEcsTaskParametersOverridesOutputReference;
    putOverrides(value: PipesPipeTargetParametersEcsTaskParametersOverrides): void;
    resetOverrides(): void;
    get overridesInput(): PipesPipeTargetParametersEcsTaskParametersOverrides | undefined;
    private _placementConstraint;
    get placementConstraint(): PipesPipeTargetParametersEcsTaskParametersPlacementConstraintList;
    putPlacementConstraint(value: PipesPipeTargetParametersEcsTaskParametersPlacementConstraint[] | cdktf.IResolvable): void;
    resetPlacementConstraint(): void;
    get placementConstraintInput(): cdktf.IResolvable | PipesPipeTargetParametersEcsTaskParametersPlacementConstraint[] | undefined;
    private _placementStrategy;
    get placementStrategy(): PipesPipeTargetParametersEcsTaskParametersPlacementStrategyList;
    putPlacementStrategy(value: PipesPipeTargetParametersEcsTaskParametersPlacementStrategy[] | cdktf.IResolvable): void;
    resetPlacementStrategy(): void;
    get placementStrategyInput(): cdktf.IResolvable | PipesPipeTargetParametersEcsTaskParametersPlacementStrategy[] | undefined;
}
export interface PipesPipeTargetParametersEventbridgeEventBusParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#detail_type PipesPipe#detail_type}
    */
    readonly detailType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#endpoint_id PipesPipe#endpoint_id}
    */
    readonly endpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#resources PipesPipe#resources}
    */
    readonly resources?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#source PipesPipe#source}
    */
    readonly source?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#time PipesPipe#time}
    */
    readonly time?: string;
}
export declare function pipesPipeTargetParametersEventbridgeEventBusParametersToTerraform(struct?: PipesPipeTargetParametersEventbridgeEventBusParametersOutputReference | PipesPipeTargetParametersEventbridgeEventBusParameters): any;
export declare function pipesPipeTargetParametersEventbridgeEventBusParametersToHclTerraform(struct?: PipesPipeTargetParametersEventbridgeEventBusParametersOutputReference | PipesPipeTargetParametersEventbridgeEventBusParameters): any;
export declare class PipesPipeTargetParametersEventbridgeEventBusParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersEventbridgeEventBusParameters | undefined;
    set internalValue(value: PipesPipeTargetParametersEventbridgeEventBusParameters | undefined);
    private _detailType?;
    get detailType(): string;
    set detailType(value: string);
    resetDetailType(): void;
    get detailTypeInput(): string | undefined;
    private _endpointId?;
    get endpointId(): string;
    set endpointId(value: string);
    resetEndpointId(): void;
    get endpointIdInput(): string | undefined;
    private _resources?;
    get resources(): string[];
    set resources(value: string[]);
    resetResources(): void;
    get resourcesInput(): string[] | undefined;
    private _source?;
    get source(): string;
    set source(value: string);
    resetSource(): void;
    get sourceInput(): string | undefined;
    private _time?;
    get time(): string;
    set time(value: string);
    resetTime(): void;
    get timeInput(): string | undefined;
}
export interface PipesPipeTargetParametersHttpParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#header_parameters PipesPipe#header_parameters}
    */
    readonly headerParameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#path_parameter_values PipesPipe#path_parameter_values}
    */
    readonly pathParameterValues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#query_string_parameters PipesPipe#query_string_parameters}
    */
    readonly queryStringParameters?: {
        [key: string]: string;
    };
}
export declare function pipesPipeTargetParametersHttpParametersToTerraform(struct?: PipesPipeTargetParametersHttpParametersOutputReference | PipesPipeTargetParametersHttpParameters): any;
export declare function pipesPipeTargetParametersHttpParametersToHclTerraform(struct?: PipesPipeTargetParametersHttpParametersOutputReference | PipesPipeTargetParametersHttpParameters): any;
export declare class PipesPipeTargetParametersHttpParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersHttpParameters | undefined;
    set internalValue(value: PipesPipeTargetParametersHttpParameters | undefined);
    private _headerParameters?;
    get headerParameters(): {
        [key: string]: string;
    };
    set headerParameters(value: {
        [key: string]: string;
    });
    resetHeaderParameters(): void;
    get headerParametersInput(): {
        [key: string]: string;
    } | undefined;
    private _pathParameterValues?;
    get pathParameterValues(): string[];
    set pathParameterValues(value: string[]);
    resetPathParameterValues(): void;
    get pathParameterValuesInput(): string[] | undefined;
    private _queryStringParameters?;
    get queryStringParameters(): {
        [key: string]: string;
    };
    set queryStringParameters(value: {
        [key: string]: string;
    });
    resetQueryStringParameters(): void;
    get queryStringParametersInput(): {
        [key: string]: string;
    } | undefined;
}
export interface PipesPipeTargetParametersKinesisStreamParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#partition_key PipesPipe#partition_key}
    */
    readonly partitionKey: string;
}
export declare function pipesPipeTargetParametersKinesisStreamParametersToTerraform(struct?: PipesPipeTargetParametersKinesisStreamParametersOutputReference | PipesPipeTargetParametersKinesisStreamParameters): any;
export declare function pipesPipeTargetParametersKinesisStreamParametersToHclTerraform(struct?: PipesPipeTargetParametersKinesisStreamParametersOutputReference | PipesPipeTargetParametersKinesisStreamParameters): any;
export declare class PipesPipeTargetParametersKinesisStreamParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersKinesisStreamParameters | undefined;
    set internalValue(value: PipesPipeTargetParametersKinesisStreamParameters | undefined);
    private _partitionKey?;
    get partitionKey(): string;
    set partitionKey(value: string);
    get partitionKeyInput(): string | undefined;
}
export interface PipesPipeTargetParametersLambdaFunctionParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#invocation_type PipesPipe#invocation_type}
    */
    readonly invocationType: string;
}
export declare function pipesPipeTargetParametersLambdaFunctionParametersToTerraform(struct?: PipesPipeTargetParametersLambdaFunctionParametersOutputReference | PipesPipeTargetParametersLambdaFunctionParameters): any;
export declare function pipesPipeTargetParametersLambdaFunctionParametersToHclTerraform(struct?: PipesPipeTargetParametersLambdaFunctionParametersOutputReference | PipesPipeTargetParametersLambdaFunctionParameters): any;
export declare class PipesPipeTargetParametersLambdaFunctionParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersLambdaFunctionParameters | undefined;
    set internalValue(value: PipesPipeTargetParametersLambdaFunctionParameters | undefined);
    private _invocationType?;
    get invocationType(): string;
    set invocationType(value: string);
    get invocationTypeInput(): string | undefined;
}
export interface PipesPipeTargetParametersRedshiftDataParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#database PipesPipe#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#db_user PipesPipe#db_user}
    */
    readonly dbUser?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#secret_manager_arn PipesPipe#secret_manager_arn}
    */
    readonly secretManagerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#sqls PipesPipe#sqls}
    */
    readonly sqls: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#statement_name PipesPipe#statement_name}
    */
    readonly statementName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#with_event PipesPipe#with_event}
    */
    readonly withEvent?: boolean | cdktf.IResolvable;
}
export declare function pipesPipeTargetParametersRedshiftDataParametersToTerraform(struct?: PipesPipeTargetParametersRedshiftDataParametersOutputReference | PipesPipeTargetParametersRedshiftDataParameters): any;
export declare function pipesPipeTargetParametersRedshiftDataParametersToHclTerraform(struct?: PipesPipeTargetParametersRedshiftDataParametersOutputReference | PipesPipeTargetParametersRedshiftDataParameters): any;
export declare class PipesPipeTargetParametersRedshiftDataParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersRedshiftDataParameters | undefined;
    set internalValue(value: PipesPipeTargetParametersRedshiftDataParameters | undefined);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string | undefined;
    private _dbUser?;
    get dbUser(): string;
    set dbUser(value: string);
    resetDbUser(): void;
    get dbUserInput(): string | undefined;
    private _secretManagerArn?;
    get secretManagerArn(): string;
    set secretManagerArn(value: string);
    resetSecretManagerArn(): void;
    get secretManagerArnInput(): string | undefined;
    private _sqls?;
    get sqls(): string[];
    set sqls(value: string[]);
    get sqlsInput(): string[] | undefined;
    private _statementName?;
    get statementName(): string;
    set statementName(value: string);
    resetStatementName(): void;
    get statementNameInput(): string | undefined;
    private _withEvent?;
    get withEvent(): boolean | cdktf.IResolvable;
    set withEvent(value: boolean | cdktf.IResolvable);
    resetWithEvent(): void;
    get withEventInput(): boolean | cdktf.IResolvable | undefined;
}
export interface PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#name PipesPipe#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#value PipesPipe#value}
    */
    readonly value: string;
}
export declare function pipesPipeTargetParametersSagemakerPipelineParametersPipelineParameterToTerraform(struct?: PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter | cdktf.IResolvable): any;
export declare function pipesPipeTargetParametersSagemakerPipelineParametersPipelineParameterToHclTerraform(struct?: PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter | cdktf.IResolvable): any;
export declare class PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter | cdktf.IResolvable | undefined;
    set internalValue(value: PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameterOutputReference;
}
export interface PipesPipeTargetParametersSagemakerPipelineParameters {
    /**
    * pipeline_parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#pipeline_parameter PipesPipe#pipeline_parameter}
    */
    readonly pipelineParameter?: PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter[] | cdktf.IResolvable;
}
export declare function pipesPipeTargetParametersSagemakerPipelineParametersToTerraform(struct?: PipesPipeTargetParametersSagemakerPipelineParametersOutputReference | PipesPipeTargetParametersSagemakerPipelineParameters): any;
export declare function pipesPipeTargetParametersSagemakerPipelineParametersToHclTerraform(struct?: PipesPipeTargetParametersSagemakerPipelineParametersOutputReference | PipesPipeTargetParametersSagemakerPipelineParameters): any;
export declare class PipesPipeTargetParametersSagemakerPipelineParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersSagemakerPipelineParameters | undefined;
    set internalValue(value: PipesPipeTargetParametersSagemakerPipelineParameters | undefined);
    private _pipelineParameter;
    get pipelineParameter(): PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameterList;
    putPipelineParameter(value: PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter[] | cdktf.IResolvable): void;
    resetPipelineParameter(): void;
    get pipelineParameterInput(): cdktf.IResolvable | PipesPipeTargetParametersSagemakerPipelineParametersPipelineParameter[] | undefined;
}
export interface PipesPipeTargetParametersSqsQueueParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#message_deduplication_id PipesPipe#message_deduplication_id}
    */
    readonly messageDeduplicationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#message_group_id PipesPipe#message_group_id}
    */
    readonly messageGroupId?: string;
}
export declare function pipesPipeTargetParametersSqsQueueParametersToTerraform(struct?: PipesPipeTargetParametersSqsQueueParametersOutputReference | PipesPipeTargetParametersSqsQueueParameters): any;
export declare function pipesPipeTargetParametersSqsQueueParametersToHclTerraform(struct?: PipesPipeTargetParametersSqsQueueParametersOutputReference | PipesPipeTargetParametersSqsQueueParameters): any;
export declare class PipesPipeTargetParametersSqsQueueParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersSqsQueueParameters | undefined;
    set internalValue(value: PipesPipeTargetParametersSqsQueueParameters | undefined);
    private _messageDeduplicationId?;
    get messageDeduplicationId(): string;
    set messageDeduplicationId(value: string);
    resetMessageDeduplicationId(): void;
    get messageDeduplicationIdInput(): string | undefined;
    private _messageGroupId?;
    get messageGroupId(): string;
    set messageGroupId(value: string);
    resetMessageGroupId(): void;
    get messageGroupIdInput(): string | undefined;
}
export interface PipesPipeTargetParametersStepFunctionStateMachineParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#invocation_type PipesPipe#invocation_type}
    */
    readonly invocationType: string;
}
export declare function pipesPipeTargetParametersStepFunctionStateMachineParametersToTerraform(struct?: PipesPipeTargetParametersStepFunctionStateMachineParametersOutputReference | PipesPipeTargetParametersStepFunctionStateMachineParameters): any;
export declare function pipesPipeTargetParametersStepFunctionStateMachineParametersToHclTerraform(struct?: PipesPipeTargetParametersStepFunctionStateMachineParametersOutputReference | PipesPipeTargetParametersStepFunctionStateMachineParameters): any;
export declare class PipesPipeTargetParametersStepFunctionStateMachineParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParametersStepFunctionStateMachineParameters | undefined;
    set internalValue(value: PipesPipeTargetParametersStepFunctionStateMachineParameters | undefined);
    private _invocationType?;
    get invocationType(): string;
    set invocationType(value: string);
    get invocationTypeInput(): string | undefined;
}
export interface PipesPipeTargetParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#input_template PipesPipe#input_template}
    */
    readonly inputTemplate?: string;
    /**
    * batch_job_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#batch_job_parameters PipesPipe#batch_job_parameters}
    */
    readonly batchJobParameters?: PipesPipeTargetParametersBatchJobParameters;
    /**
    * cloudwatch_logs_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#cloudwatch_logs_parameters PipesPipe#cloudwatch_logs_parameters}
    */
    readonly cloudwatchLogsParameters?: PipesPipeTargetParametersCloudwatchLogsParameters;
    /**
    * ecs_task_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#ecs_task_parameters PipesPipe#ecs_task_parameters}
    */
    readonly ecsTaskParameters?: PipesPipeTargetParametersEcsTaskParameters;
    /**
    * eventbridge_event_bus_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#eventbridge_event_bus_parameters PipesPipe#eventbridge_event_bus_parameters}
    */
    readonly eventbridgeEventBusParameters?: PipesPipeTargetParametersEventbridgeEventBusParameters;
    /**
    * http_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#http_parameters PipesPipe#http_parameters}
    */
    readonly httpParameters?: PipesPipeTargetParametersHttpParameters;
    /**
    * kinesis_stream_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#kinesis_stream_parameters PipesPipe#kinesis_stream_parameters}
    */
    readonly kinesisStreamParameters?: PipesPipeTargetParametersKinesisStreamParameters;
    /**
    * lambda_function_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#lambda_function_parameters PipesPipe#lambda_function_parameters}
    */
    readonly lambdaFunctionParameters?: PipesPipeTargetParametersLambdaFunctionParameters;
    /**
    * redshift_data_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#redshift_data_parameters PipesPipe#redshift_data_parameters}
    */
    readonly redshiftDataParameters?: PipesPipeTargetParametersRedshiftDataParameters;
    /**
    * sagemaker_pipeline_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#sagemaker_pipeline_parameters PipesPipe#sagemaker_pipeline_parameters}
    */
    readonly sagemakerPipelineParameters?: PipesPipeTargetParametersSagemakerPipelineParameters;
    /**
    * sqs_queue_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#sqs_queue_parameters PipesPipe#sqs_queue_parameters}
    */
    readonly sqsQueueParameters?: PipesPipeTargetParametersSqsQueueParameters;
    /**
    * step_function_state_machine_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#step_function_state_machine_parameters PipesPipe#step_function_state_machine_parameters}
    */
    readonly stepFunctionStateMachineParameters?: PipesPipeTargetParametersStepFunctionStateMachineParameters;
}
export declare function pipesPipeTargetParametersToTerraform(struct?: PipesPipeTargetParametersOutputReference | PipesPipeTargetParameters): any;
export declare function pipesPipeTargetParametersToHclTerraform(struct?: PipesPipeTargetParametersOutputReference | PipesPipeTargetParameters): any;
export declare class PipesPipeTargetParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTargetParameters | undefined;
    set internalValue(value: PipesPipeTargetParameters | undefined);
    private _inputTemplate?;
    get inputTemplate(): string;
    set inputTemplate(value: string);
    resetInputTemplate(): void;
    get inputTemplateInput(): string | undefined;
    private _batchJobParameters;
    get batchJobParameters(): PipesPipeTargetParametersBatchJobParametersOutputReference;
    putBatchJobParameters(value: PipesPipeTargetParametersBatchJobParameters): void;
    resetBatchJobParameters(): void;
    get batchJobParametersInput(): PipesPipeTargetParametersBatchJobParameters | undefined;
    private _cloudwatchLogsParameters;
    get cloudwatchLogsParameters(): PipesPipeTargetParametersCloudwatchLogsParametersOutputReference;
    putCloudwatchLogsParameters(value: PipesPipeTargetParametersCloudwatchLogsParameters): void;
    resetCloudwatchLogsParameters(): void;
    get cloudwatchLogsParametersInput(): PipesPipeTargetParametersCloudwatchLogsParameters | undefined;
    private _ecsTaskParameters;
    get ecsTaskParameters(): PipesPipeTargetParametersEcsTaskParametersOutputReference;
    putEcsTaskParameters(value: PipesPipeTargetParametersEcsTaskParameters): void;
    resetEcsTaskParameters(): void;
    get ecsTaskParametersInput(): PipesPipeTargetParametersEcsTaskParameters | undefined;
    private _eventbridgeEventBusParameters;
    get eventbridgeEventBusParameters(): PipesPipeTargetParametersEventbridgeEventBusParametersOutputReference;
    putEventbridgeEventBusParameters(value: PipesPipeTargetParametersEventbridgeEventBusParameters): void;
    resetEventbridgeEventBusParameters(): void;
    get eventbridgeEventBusParametersInput(): PipesPipeTargetParametersEventbridgeEventBusParameters | undefined;
    private _httpParameters;
    get httpParameters(): PipesPipeTargetParametersHttpParametersOutputReference;
    putHttpParameters(value: PipesPipeTargetParametersHttpParameters): void;
    resetHttpParameters(): void;
    get httpParametersInput(): PipesPipeTargetParametersHttpParameters | undefined;
    private _kinesisStreamParameters;
    get kinesisStreamParameters(): PipesPipeTargetParametersKinesisStreamParametersOutputReference;
    putKinesisStreamParameters(value: PipesPipeTargetParametersKinesisStreamParameters): void;
    resetKinesisStreamParameters(): void;
    get kinesisStreamParametersInput(): PipesPipeTargetParametersKinesisStreamParameters | undefined;
    private _lambdaFunctionParameters;
    get lambdaFunctionParameters(): PipesPipeTargetParametersLambdaFunctionParametersOutputReference;
    putLambdaFunctionParameters(value: PipesPipeTargetParametersLambdaFunctionParameters): void;
    resetLambdaFunctionParameters(): void;
    get lambdaFunctionParametersInput(): PipesPipeTargetParametersLambdaFunctionParameters | undefined;
    private _redshiftDataParameters;
    get redshiftDataParameters(): PipesPipeTargetParametersRedshiftDataParametersOutputReference;
    putRedshiftDataParameters(value: PipesPipeTargetParametersRedshiftDataParameters): void;
    resetRedshiftDataParameters(): void;
    get redshiftDataParametersInput(): PipesPipeTargetParametersRedshiftDataParameters | undefined;
    private _sagemakerPipelineParameters;
    get sagemakerPipelineParameters(): PipesPipeTargetParametersSagemakerPipelineParametersOutputReference;
    putSagemakerPipelineParameters(value: PipesPipeTargetParametersSagemakerPipelineParameters): void;
    resetSagemakerPipelineParameters(): void;
    get sagemakerPipelineParametersInput(): PipesPipeTargetParametersSagemakerPipelineParameters | undefined;
    private _sqsQueueParameters;
    get sqsQueueParameters(): PipesPipeTargetParametersSqsQueueParametersOutputReference;
    putSqsQueueParameters(value: PipesPipeTargetParametersSqsQueueParameters): void;
    resetSqsQueueParameters(): void;
    get sqsQueueParametersInput(): PipesPipeTargetParametersSqsQueueParameters | undefined;
    private _stepFunctionStateMachineParameters;
    get stepFunctionStateMachineParameters(): PipesPipeTargetParametersStepFunctionStateMachineParametersOutputReference;
    putStepFunctionStateMachineParameters(value: PipesPipeTargetParametersStepFunctionStateMachineParameters): void;
    resetStepFunctionStateMachineParameters(): void;
    get stepFunctionStateMachineParametersInput(): PipesPipeTargetParametersStepFunctionStateMachineParameters | undefined;
}
export interface PipesPipeTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#create PipesPipe#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#delete PipesPipe#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#update PipesPipe#update}
    */
    readonly update?: string;
}
export declare function pipesPipeTimeoutsToTerraform(struct?: PipesPipeTimeouts | cdktf.IResolvable): any;
export declare function pipesPipeTimeoutsToHclTerraform(struct?: PipesPipeTimeouts | cdktf.IResolvable): any;
export declare class PipesPipeTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): PipesPipeTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: PipesPipeTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe aws_pipes_pipe}
*/
export declare class PipesPipe extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_pipes_pipe";
    /**
    * Generates CDKTF code for importing a PipesPipe resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the PipesPipe to import
    * @param importFromId The id of the existing PipesPipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the PipesPipe to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/pipes_pipe aws_pipes_pipe} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options PipesPipeConfig
    */
    constructor(scope: Construct, id: string, config: PipesPipeConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _desiredState?;
    get desiredState(): string;
    set desiredState(value: string);
    resetDesiredState(): void;
    get desiredStateInput(): string | undefined;
    private _enrichment?;
    get enrichment(): string;
    set enrichment(value: string);
    resetEnrichment(): void;
    get enrichmentInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyIdentifier?;
    get kmsKeyIdentifier(): string;
    set kmsKeyIdentifier(value: string);
    resetKmsKeyIdentifier(): void;
    get kmsKeyIdentifierInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string | undefined;
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
    private _target?;
    get target(): string;
    set target(value: string);
    get targetInput(): string | undefined;
    private _enrichmentParameters;
    get enrichmentParameters(): PipesPipeEnrichmentParametersOutputReference;
    putEnrichmentParameters(value: PipesPipeEnrichmentParameters): void;
    resetEnrichmentParameters(): void;
    get enrichmentParametersInput(): PipesPipeEnrichmentParameters | undefined;
    private _logConfiguration;
    get logConfiguration(): PipesPipeLogConfigurationOutputReference;
    putLogConfiguration(value: PipesPipeLogConfiguration): void;
    resetLogConfiguration(): void;
    get logConfigurationInput(): PipesPipeLogConfiguration | undefined;
    private _sourceParameters;
    get sourceParameters(): PipesPipeSourceParametersOutputReference;
    putSourceParameters(value: PipesPipeSourceParameters): void;
    resetSourceParameters(): void;
    get sourceParametersInput(): PipesPipeSourceParameters | undefined;
    private _targetParameters;
    get targetParameters(): PipesPipeTargetParametersOutputReference;
    putTargetParameters(value: PipesPipeTargetParameters): void;
    resetTargetParameters(): void;
    get targetParametersInput(): PipesPipeTargetParameters | undefined;
    private _timeouts;
    get timeouts(): PipesPipeTimeoutsOutputReference;
    putTimeouts(value: PipesPipeTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | PipesPipeTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
