/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaEventSourceMappingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#batch_size LambdaEventSourceMapping#batch_size}
    */
    readonly batchSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#bisect_batch_on_function_error LambdaEventSourceMapping#bisect_batch_on_function_error}
    */
    readonly bisectBatchOnFunctionError?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#enabled LambdaEventSourceMapping#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#event_source_arn LambdaEventSourceMapping#event_source_arn}
    */
    readonly eventSourceArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#function_name LambdaEventSourceMapping#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#function_response_types LambdaEventSourceMapping#function_response_types}
    */
    readonly functionResponseTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#id LambdaEventSourceMapping#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#kms_key_arn LambdaEventSourceMapping#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#maximum_batching_window_in_seconds LambdaEventSourceMapping#maximum_batching_window_in_seconds}
    */
    readonly maximumBatchingWindowInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#maximum_record_age_in_seconds LambdaEventSourceMapping#maximum_record_age_in_seconds}
    */
    readonly maximumRecordAgeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#maximum_retry_attempts LambdaEventSourceMapping#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#parallelization_factor LambdaEventSourceMapping#parallelization_factor}
    */
    readonly parallelizationFactor?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#queues LambdaEventSourceMapping#queues}
    */
    readonly queues?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#starting_position LambdaEventSourceMapping#starting_position}
    */
    readonly startingPosition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#starting_position_timestamp LambdaEventSourceMapping#starting_position_timestamp}
    */
    readonly startingPositionTimestamp?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#tags LambdaEventSourceMapping#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#tags_all LambdaEventSourceMapping#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#topics LambdaEventSourceMapping#topics}
    */
    readonly topics?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#tumbling_window_in_seconds LambdaEventSourceMapping#tumbling_window_in_seconds}
    */
    readonly tumblingWindowInSeconds?: number;
    /**
    * amazon_managed_kafka_event_source_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#amazon_managed_kafka_event_source_config LambdaEventSourceMapping#amazon_managed_kafka_event_source_config}
    */
    readonly amazonManagedKafkaEventSourceConfig?: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig;
    /**
    * destination_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#destination_config LambdaEventSourceMapping#destination_config}
    */
    readonly destinationConfig?: LambdaEventSourceMappingDestinationConfig;
    /**
    * document_db_event_source_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#document_db_event_source_config LambdaEventSourceMapping#document_db_event_source_config}
    */
    readonly documentDbEventSourceConfig?: LambdaEventSourceMappingDocumentDbEventSourceConfig;
    /**
    * filter_criteria block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#filter_criteria LambdaEventSourceMapping#filter_criteria}
    */
    readonly filterCriteria?: LambdaEventSourceMappingFilterCriteria;
    /**
    * metrics_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#metrics_config LambdaEventSourceMapping#metrics_config}
    */
    readonly metricsConfig?: LambdaEventSourceMappingMetricsConfig;
    /**
    * provisioned_poller_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#provisioned_poller_config LambdaEventSourceMapping#provisioned_poller_config}
    */
    readonly provisionedPollerConfig?: LambdaEventSourceMappingProvisionedPollerConfig;
    /**
    * scaling_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#scaling_config LambdaEventSourceMapping#scaling_config}
    */
    readonly scalingConfig?: LambdaEventSourceMappingScalingConfig;
    /**
    * self_managed_event_source block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#self_managed_event_source LambdaEventSourceMapping#self_managed_event_source}
    */
    readonly selfManagedEventSource?: LambdaEventSourceMappingSelfManagedEventSource;
    /**
    * self_managed_kafka_event_source_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#self_managed_kafka_event_source_config LambdaEventSourceMapping#self_managed_kafka_event_source_config}
    */
    readonly selfManagedKafkaEventSourceConfig?: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig;
    /**
    * source_access_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#source_access_configuration LambdaEventSourceMapping#source_access_configuration}
    */
    readonly sourceAccessConfiguration?: LambdaEventSourceMappingSourceAccessConfiguration[] | cdktf.IResolvable;
}
export interface LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}
    */
    readonly consumerGroupId?: string;
}
export declare function lambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigToTerraform(struct?: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference | LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig): any;
export declare function lambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigToHclTerraform(struct?: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference | LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig): any;
export declare class LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig | undefined;
    set internalValue(value: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig | undefined);
    private _consumerGroupId?;
    get consumerGroupId(): string;
    set consumerGroupId(value: string);
    resetConsumerGroupId(): void;
    get consumerGroupIdInput(): string | undefined;
}
export interface LambdaEventSourceMappingDestinationConfigOnFailure {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#destination_arn LambdaEventSourceMapping#destination_arn}
    */
    readonly destinationArn: string;
}
export declare function lambdaEventSourceMappingDestinationConfigOnFailureToTerraform(struct?: LambdaEventSourceMappingDestinationConfigOnFailureOutputReference | LambdaEventSourceMappingDestinationConfigOnFailure): any;
export declare function lambdaEventSourceMappingDestinationConfigOnFailureToHclTerraform(struct?: LambdaEventSourceMappingDestinationConfigOnFailureOutputReference | LambdaEventSourceMappingDestinationConfigOnFailure): any;
export declare class LambdaEventSourceMappingDestinationConfigOnFailureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaEventSourceMappingDestinationConfigOnFailure | undefined;
    set internalValue(value: LambdaEventSourceMappingDestinationConfigOnFailure | undefined);
    private _destinationArn?;
    get destinationArn(): string;
    set destinationArn(value: string);
    get destinationArnInput(): string | undefined;
}
export interface LambdaEventSourceMappingDestinationConfig {
    /**
    * on_failure block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#on_failure LambdaEventSourceMapping#on_failure}
    */
    readonly onFailure?: LambdaEventSourceMappingDestinationConfigOnFailure;
}
export declare function lambdaEventSourceMappingDestinationConfigToTerraform(struct?: LambdaEventSourceMappingDestinationConfigOutputReference | LambdaEventSourceMappingDestinationConfig): any;
export declare function lambdaEventSourceMappingDestinationConfigToHclTerraform(struct?: LambdaEventSourceMappingDestinationConfigOutputReference | LambdaEventSourceMappingDestinationConfig): any;
export declare class LambdaEventSourceMappingDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaEventSourceMappingDestinationConfig | undefined;
    set internalValue(value: LambdaEventSourceMappingDestinationConfig | undefined);
    private _onFailure;
    get onFailure(): LambdaEventSourceMappingDestinationConfigOnFailureOutputReference;
    putOnFailure(value: LambdaEventSourceMappingDestinationConfigOnFailure): void;
    resetOnFailure(): void;
    get onFailureInput(): LambdaEventSourceMappingDestinationConfigOnFailure | undefined;
}
export interface LambdaEventSourceMappingDocumentDbEventSourceConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#collection_name LambdaEventSourceMapping#collection_name}
    */
    readonly collectionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#database_name LambdaEventSourceMapping#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#full_document LambdaEventSourceMapping#full_document}
    */
    readonly fullDocument?: string;
}
export declare function lambdaEventSourceMappingDocumentDbEventSourceConfigToTerraform(struct?: LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference | LambdaEventSourceMappingDocumentDbEventSourceConfig): any;
export declare function lambdaEventSourceMappingDocumentDbEventSourceConfigToHclTerraform(struct?: LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference | LambdaEventSourceMappingDocumentDbEventSourceConfig): any;
export declare class LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaEventSourceMappingDocumentDbEventSourceConfig | undefined;
    set internalValue(value: LambdaEventSourceMappingDocumentDbEventSourceConfig | undefined);
    private _collectionName?;
    get collectionName(): string;
    set collectionName(value: string);
    resetCollectionName(): void;
    get collectionNameInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _fullDocument?;
    get fullDocument(): string;
    set fullDocument(value: string);
    resetFullDocument(): void;
    get fullDocumentInput(): string | undefined;
}
export interface LambdaEventSourceMappingFilterCriteriaFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#pattern LambdaEventSourceMapping#pattern}
    */
    readonly pattern?: string;
}
export declare function lambdaEventSourceMappingFilterCriteriaFilterToTerraform(struct?: LambdaEventSourceMappingFilterCriteriaFilter | cdktf.IResolvable): any;
export declare function lambdaEventSourceMappingFilterCriteriaFilterToHclTerraform(struct?: LambdaEventSourceMappingFilterCriteriaFilter | cdktf.IResolvable): any;
export declare class LambdaEventSourceMappingFilterCriteriaFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LambdaEventSourceMappingFilterCriteriaFilter | cdktf.IResolvable | undefined;
    set internalValue(value: LambdaEventSourceMappingFilterCriteriaFilter | cdktf.IResolvable | undefined);
    private _pattern?;
    get pattern(): string;
    set pattern(value: string);
    resetPattern(): void;
    get patternInput(): string | undefined;
}
export declare class LambdaEventSourceMappingFilterCriteriaFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LambdaEventSourceMappingFilterCriteriaFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LambdaEventSourceMappingFilterCriteriaFilterOutputReference;
}
export interface LambdaEventSourceMappingFilterCriteria {
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#filter LambdaEventSourceMapping#filter}
    */
    readonly filter?: LambdaEventSourceMappingFilterCriteriaFilter[] | cdktf.IResolvable;
}
export declare function lambdaEventSourceMappingFilterCriteriaToTerraform(struct?: LambdaEventSourceMappingFilterCriteriaOutputReference | LambdaEventSourceMappingFilterCriteria): any;
export declare function lambdaEventSourceMappingFilterCriteriaToHclTerraform(struct?: LambdaEventSourceMappingFilterCriteriaOutputReference | LambdaEventSourceMappingFilterCriteria): any;
export declare class LambdaEventSourceMappingFilterCriteriaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaEventSourceMappingFilterCriteria | undefined;
    set internalValue(value: LambdaEventSourceMappingFilterCriteria | undefined);
    private _filter;
    get filter(): LambdaEventSourceMappingFilterCriteriaFilterList;
    putFilter(value: LambdaEventSourceMappingFilterCriteriaFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | LambdaEventSourceMappingFilterCriteriaFilter[] | undefined;
}
export interface LambdaEventSourceMappingMetricsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#metrics LambdaEventSourceMapping#metrics}
    */
    readonly metrics: string[];
}
export declare function lambdaEventSourceMappingMetricsConfigToTerraform(struct?: LambdaEventSourceMappingMetricsConfigOutputReference | LambdaEventSourceMappingMetricsConfig): any;
export declare function lambdaEventSourceMappingMetricsConfigToHclTerraform(struct?: LambdaEventSourceMappingMetricsConfigOutputReference | LambdaEventSourceMappingMetricsConfig): any;
export declare class LambdaEventSourceMappingMetricsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaEventSourceMappingMetricsConfig | undefined;
    set internalValue(value: LambdaEventSourceMappingMetricsConfig | undefined);
    private _metrics?;
    get metrics(): string[];
    set metrics(value: string[]);
    get metricsInput(): string[] | undefined;
}
export interface LambdaEventSourceMappingProvisionedPollerConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#maximum_pollers LambdaEventSourceMapping#maximum_pollers}
    */
    readonly maximumPollers?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#minimum_pollers LambdaEventSourceMapping#minimum_pollers}
    */
    readonly minimumPollers?: number;
}
export declare function lambdaEventSourceMappingProvisionedPollerConfigToTerraform(struct?: LambdaEventSourceMappingProvisionedPollerConfigOutputReference | LambdaEventSourceMappingProvisionedPollerConfig): any;
export declare function lambdaEventSourceMappingProvisionedPollerConfigToHclTerraform(struct?: LambdaEventSourceMappingProvisionedPollerConfigOutputReference | LambdaEventSourceMappingProvisionedPollerConfig): any;
export declare class LambdaEventSourceMappingProvisionedPollerConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaEventSourceMappingProvisionedPollerConfig | undefined;
    set internalValue(value: LambdaEventSourceMappingProvisionedPollerConfig | undefined);
    private _maximumPollers?;
    get maximumPollers(): number;
    set maximumPollers(value: number);
    resetMaximumPollers(): void;
    get maximumPollersInput(): number | undefined;
    private _minimumPollers?;
    get minimumPollers(): number;
    set minimumPollers(value: number);
    resetMinimumPollers(): void;
    get minimumPollersInput(): number | undefined;
}
export interface LambdaEventSourceMappingScalingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#maximum_concurrency LambdaEventSourceMapping#maximum_concurrency}
    */
    readonly maximumConcurrency?: number;
}
export declare function lambdaEventSourceMappingScalingConfigToTerraform(struct?: LambdaEventSourceMappingScalingConfigOutputReference | LambdaEventSourceMappingScalingConfig): any;
export declare function lambdaEventSourceMappingScalingConfigToHclTerraform(struct?: LambdaEventSourceMappingScalingConfigOutputReference | LambdaEventSourceMappingScalingConfig): any;
export declare class LambdaEventSourceMappingScalingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaEventSourceMappingScalingConfig | undefined;
    set internalValue(value: LambdaEventSourceMappingScalingConfig | undefined);
    private _maximumConcurrency?;
    get maximumConcurrency(): number;
    set maximumConcurrency(value: number);
    resetMaximumConcurrency(): void;
    get maximumConcurrencyInput(): number | undefined;
}
export interface LambdaEventSourceMappingSelfManagedEventSource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#endpoints LambdaEventSourceMapping#endpoints}
    */
    readonly endpoints: {
        [key: string]: string;
    };
}
export declare function lambdaEventSourceMappingSelfManagedEventSourceToTerraform(struct?: LambdaEventSourceMappingSelfManagedEventSourceOutputReference | LambdaEventSourceMappingSelfManagedEventSource): any;
export declare function lambdaEventSourceMappingSelfManagedEventSourceToHclTerraform(struct?: LambdaEventSourceMappingSelfManagedEventSourceOutputReference | LambdaEventSourceMappingSelfManagedEventSource): any;
export declare class LambdaEventSourceMappingSelfManagedEventSourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaEventSourceMappingSelfManagedEventSource | undefined;
    set internalValue(value: LambdaEventSourceMappingSelfManagedEventSource | undefined);
    private _endpoints?;
    get endpoints(): {
        [key: string]: string;
    };
    set endpoints(value: {
        [key: string]: string;
    });
    get endpointsInput(): {
        [key: string]: string;
    } | undefined;
}
export interface LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#consumer_group_id LambdaEventSourceMapping#consumer_group_id}
    */
    readonly consumerGroupId?: string;
}
export declare function lambdaEventSourceMappingSelfManagedKafkaEventSourceConfigToTerraform(struct?: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference | LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig): any;
export declare function lambdaEventSourceMappingSelfManagedKafkaEventSourceConfigToHclTerraform(struct?: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference | LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig): any;
export declare class LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig | undefined;
    set internalValue(value: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig | undefined);
    private _consumerGroupId?;
    get consumerGroupId(): string;
    set consumerGroupId(value: string);
    resetConsumerGroupId(): void;
    get consumerGroupIdInput(): string | undefined;
}
export interface LambdaEventSourceMappingSourceAccessConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#type LambdaEventSourceMapping#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#uri LambdaEventSourceMapping#uri}
    */
    readonly uri: string;
}
export declare function lambdaEventSourceMappingSourceAccessConfigurationToTerraform(struct?: LambdaEventSourceMappingSourceAccessConfiguration | cdktf.IResolvable): any;
export declare function lambdaEventSourceMappingSourceAccessConfigurationToHclTerraform(struct?: LambdaEventSourceMappingSourceAccessConfiguration | cdktf.IResolvable): any;
export declare class LambdaEventSourceMappingSourceAccessConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): LambdaEventSourceMappingSourceAccessConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: LambdaEventSourceMappingSourceAccessConfiguration | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    get uriInput(): string | undefined;
}
export declare class LambdaEventSourceMappingSourceAccessConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: LambdaEventSourceMappingSourceAccessConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): LambdaEventSourceMappingSourceAccessConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping aws_lambda_event_source_mapping}
*/
export declare class LambdaEventSourceMapping extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lambda_event_source_mapping";
    /**
    * Generates CDKTF code for importing a LambdaEventSourceMapping resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LambdaEventSourceMapping to import
    * @param importFromId The id of the existing LambdaEventSourceMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LambdaEventSourceMapping to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_event_source_mapping aws_lambda_event_source_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaEventSourceMappingConfig
    */
    constructor(scope: Construct, id: string, config: LambdaEventSourceMappingConfig);
    get arn(): string;
    private _batchSize?;
    get batchSize(): number;
    set batchSize(value: number);
    resetBatchSize(): void;
    get batchSizeInput(): number | undefined;
    private _bisectBatchOnFunctionError?;
    get bisectBatchOnFunctionError(): boolean | cdktf.IResolvable;
    set bisectBatchOnFunctionError(value: boolean | cdktf.IResolvable);
    resetBisectBatchOnFunctionError(): void;
    get bisectBatchOnFunctionErrorInput(): boolean | cdktf.IResolvable | undefined;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _eventSourceArn?;
    get eventSourceArn(): string;
    set eventSourceArn(value: string);
    resetEventSourceArn(): void;
    get eventSourceArnInput(): string | undefined;
    get functionArn(): string;
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string | undefined;
    private _functionResponseTypes?;
    get functionResponseTypes(): string[];
    set functionResponseTypes(value: string[]);
    resetFunctionResponseTypes(): void;
    get functionResponseTypesInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    get lastModified(): string;
    get lastProcessingResult(): string;
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
    private _parallelizationFactor?;
    get parallelizationFactor(): number;
    set parallelizationFactor(value: number);
    resetParallelizationFactor(): void;
    get parallelizationFactorInput(): number | undefined;
    private _queues?;
    get queues(): string[];
    set queues(value: string[]);
    resetQueues(): void;
    get queuesInput(): string[] | undefined;
    private _startingPosition?;
    get startingPosition(): string;
    set startingPosition(value: string);
    resetStartingPosition(): void;
    get startingPositionInput(): string | undefined;
    private _startingPositionTimestamp?;
    get startingPositionTimestamp(): string;
    set startingPositionTimestamp(value: string);
    resetStartingPositionTimestamp(): void;
    get startingPositionTimestampInput(): string | undefined;
    get state(): string;
    get stateTransitionReason(): string;
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
    private _topics?;
    get topics(): string[];
    set topics(value: string[]);
    resetTopics(): void;
    get topicsInput(): string[] | undefined;
    private _tumblingWindowInSeconds?;
    get tumblingWindowInSeconds(): number;
    set tumblingWindowInSeconds(value: number);
    resetTumblingWindowInSeconds(): void;
    get tumblingWindowInSecondsInput(): number | undefined;
    get uuid(): string;
    private _amazonManagedKafkaEventSourceConfig;
    get amazonManagedKafkaEventSourceConfig(): LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfigOutputReference;
    putAmazonManagedKafkaEventSourceConfig(value: LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig): void;
    resetAmazonManagedKafkaEventSourceConfig(): void;
    get amazonManagedKafkaEventSourceConfigInput(): LambdaEventSourceMappingAmazonManagedKafkaEventSourceConfig | undefined;
    private _destinationConfig;
    get destinationConfig(): LambdaEventSourceMappingDestinationConfigOutputReference;
    putDestinationConfig(value: LambdaEventSourceMappingDestinationConfig): void;
    resetDestinationConfig(): void;
    get destinationConfigInput(): LambdaEventSourceMappingDestinationConfig | undefined;
    private _documentDbEventSourceConfig;
    get documentDbEventSourceConfig(): LambdaEventSourceMappingDocumentDbEventSourceConfigOutputReference;
    putDocumentDbEventSourceConfig(value: LambdaEventSourceMappingDocumentDbEventSourceConfig): void;
    resetDocumentDbEventSourceConfig(): void;
    get documentDbEventSourceConfigInput(): LambdaEventSourceMappingDocumentDbEventSourceConfig | undefined;
    private _filterCriteria;
    get filterCriteria(): LambdaEventSourceMappingFilterCriteriaOutputReference;
    putFilterCriteria(value: LambdaEventSourceMappingFilterCriteria): void;
    resetFilterCriteria(): void;
    get filterCriteriaInput(): LambdaEventSourceMappingFilterCriteria | undefined;
    private _metricsConfig;
    get metricsConfig(): LambdaEventSourceMappingMetricsConfigOutputReference;
    putMetricsConfig(value: LambdaEventSourceMappingMetricsConfig): void;
    resetMetricsConfig(): void;
    get metricsConfigInput(): LambdaEventSourceMappingMetricsConfig | undefined;
    private _provisionedPollerConfig;
    get provisionedPollerConfig(): LambdaEventSourceMappingProvisionedPollerConfigOutputReference;
    putProvisionedPollerConfig(value: LambdaEventSourceMappingProvisionedPollerConfig): void;
    resetProvisionedPollerConfig(): void;
    get provisionedPollerConfigInput(): LambdaEventSourceMappingProvisionedPollerConfig | undefined;
    private _scalingConfig;
    get scalingConfig(): LambdaEventSourceMappingScalingConfigOutputReference;
    putScalingConfig(value: LambdaEventSourceMappingScalingConfig): void;
    resetScalingConfig(): void;
    get scalingConfigInput(): LambdaEventSourceMappingScalingConfig | undefined;
    private _selfManagedEventSource;
    get selfManagedEventSource(): LambdaEventSourceMappingSelfManagedEventSourceOutputReference;
    putSelfManagedEventSource(value: LambdaEventSourceMappingSelfManagedEventSource): void;
    resetSelfManagedEventSource(): void;
    get selfManagedEventSourceInput(): LambdaEventSourceMappingSelfManagedEventSource | undefined;
    private _selfManagedKafkaEventSourceConfig;
    get selfManagedKafkaEventSourceConfig(): LambdaEventSourceMappingSelfManagedKafkaEventSourceConfigOutputReference;
    putSelfManagedKafkaEventSourceConfig(value: LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig): void;
    resetSelfManagedKafkaEventSourceConfig(): void;
    get selfManagedKafkaEventSourceConfigInput(): LambdaEventSourceMappingSelfManagedKafkaEventSourceConfig | undefined;
    private _sourceAccessConfiguration;
    get sourceAccessConfiguration(): LambdaEventSourceMappingSourceAccessConfigurationList;
    putSourceAccessConfiguration(value: LambdaEventSourceMappingSourceAccessConfiguration[] | cdktf.IResolvable): void;
    resetSourceAccessConfiguration(): void;
    get sourceAccessConfigurationInput(): cdktf.IResolvable | LambdaEventSourceMappingSourceAccessConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
