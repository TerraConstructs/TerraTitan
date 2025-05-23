/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KinesisFirehoseDeliveryStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#arn KinesisFirehoseDeliveryStream#arn}
    */
    readonly arn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#destination KinesisFirehoseDeliveryStream#destination}
    */
    readonly destination: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#destination_id KinesisFirehoseDeliveryStream#destination_id}
    */
    readonly destinationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#id KinesisFirehoseDeliveryStream#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#name KinesisFirehoseDeliveryStream#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#tags KinesisFirehoseDeliveryStream#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#tags_all KinesisFirehoseDeliveryStream#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#version_id KinesisFirehoseDeliveryStream#version_id}
    */
    readonly versionId?: string;
    /**
    * elasticsearch_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#elasticsearch_configuration KinesisFirehoseDeliveryStream#elasticsearch_configuration}
    */
    readonly elasticsearchConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration;
    /**
    * extended_s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#extended_s3_configuration KinesisFirehoseDeliveryStream#extended_s3_configuration}
    */
    readonly extendedS3Configuration?: KinesisFirehoseDeliveryStreamExtendedS3Configuration;
    /**
    * http_endpoint_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#http_endpoint_configuration KinesisFirehoseDeliveryStream#http_endpoint_configuration}
    */
    readonly httpEndpointConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration;
    /**
    * iceberg_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#iceberg_configuration KinesisFirehoseDeliveryStream#iceberg_configuration}
    */
    readonly icebergConfiguration?: KinesisFirehoseDeliveryStreamIcebergConfiguration;
    /**
    * kinesis_source_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#kinesis_source_configuration KinesisFirehoseDeliveryStream#kinesis_source_configuration}
    */
    readonly kinesisSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration;
    /**
    * msk_source_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#msk_source_configuration KinesisFirehoseDeliveryStream#msk_source_configuration}
    */
    readonly mskSourceConfiguration?: KinesisFirehoseDeliveryStreamMskSourceConfiguration;
    /**
    * opensearch_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#opensearch_configuration KinesisFirehoseDeliveryStream#opensearch_configuration}
    */
    readonly opensearchConfiguration?: KinesisFirehoseDeliveryStreamOpensearchConfiguration;
    /**
    * opensearchserverless_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#opensearchserverless_configuration KinesisFirehoseDeliveryStream#opensearchserverless_configuration}
    */
    readonly opensearchserverlessConfiguration?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfiguration;
    /**
    * redshift_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#redshift_configuration KinesisFirehoseDeliveryStream#redshift_configuration}
    */
    readonly redshiftConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfiguration;
    /**
    * server_side_encryption block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#server_side_encryption KinesisFirehoseDeliveryStream#server_side_encryption}
    */
    readonly serverSideEncryption?: KinesisFirehoseDeliveryStreamServerSideEncryption;
    /**
    * snowflake_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#snowflake_configuration KinesisFirehoseDeliveryStream#snowflake_configuration}
    */
    readonly snowflakeConfiguration?: KinesisFirehoseDeliveryStreamSnowflakeConfiguration;
    /**
    * splunk_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#splunk_configuration KinesisFirehoseDeliveryStream#splunk_configuration}
    */
    readonly splunkConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#timeouts KinesisFirehoseDeliveryStream#timeouts}
    */
    readonly timeouts?: KinesisFirehoseDeliveryStreamTimeouts;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined);
    private _parameterName?;
    get parameterName(): string;
    set parameterName(value: string);
    get parameterNameInput(): string | undefined;
    private _parameterValue?;
    get parameterValue(): string;
    set parameterValue(value: string);
    get parameterValueInput(): string | undefined;
}
export declare class KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersOutputReference;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
    */
    readonly parameters?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _parameters;
    get parameters(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersList;
    putParameters(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable): void;
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParameters[] | undefined;
}
export declare class KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsOutputReference;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
    */
    readonly processors?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _processors;
    get processors(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsList;
    putProcessors(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable): void;
    resetProcessors(): void;
    get processorsInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessors[] | undefined;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions;
}
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3Configuration): any;
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3Configuration): any;
export declare class KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3Configuration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3Configuration | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string | undefined;
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _compressionFormat?;
    get compressionFormat(): string;
    set compressionFormat(value: string);
    resetCompressionFormat(): void;
    get compressionFormatInput(): string | undefined;
    private _errorOutputPrefix?;
    get errorOutputPrefix(): string;
    set errorOutputPrefix(value: string);
    resetErrorOutputPrefix(): void;
    get errorOutputPrefixInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#security_group_ids KinesisFirehoseDeliveryStream#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#subnet_ids KinesisFirehoseDeliveryStream#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig): any;
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToHclTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig): any;
export declare class KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    get vpcId(): string;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cluster_endpoint KinesisFirehoseDeliveryStream#cluster_endpoint}
    */
    readonly clusterEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#domain_arn KinesisFirehoseDeliveryStream#domain_arn}
    */
    readonly domainArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#index_name KinesisFirehoseDeliveryStream#index_name}
    */
    readonly indexName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#index_rotation_period KinesisFirehoseDeliveryStream#index_rotation_period}
    */
    readonly indexRotationPeriod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
    */
    readonly retryDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
    */
    readonly s3BackupMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#type_name KinesisFirehoseDeliveryStream#type_name}
    */
    readonly typeName?: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration;
    /**
    * s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
    */
    readonly s3Configuration: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3Configuration;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#vpc_config KinesisFirehoseDeliveryStream#vpc_config}
    */
    readonly vpcConfig?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig;
}
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamElasticsearchConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference | KinesisFirehoseDeliveryStreamElasticsearchConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamElasticsearchConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamElasticsearchConfiguration | undefined);
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _clusterEndpoint?;
    get clusterEndpoint(): string;
    set clusterEndpoint(value: string);
    resetClusterEndpoint(): void;
    get clusterEndpointInput(): string | undefined;
    private _domainArn?;
    get domainArn(): string;
    set domainArn(value: string);
    resetDomainArn(): void;
    get domainArnInput(): string | undefined;
    private _indexName?;
    get indexName(): string;
    set indexName(value: string);
    get indexNameInput(): string | undefined;
    private _indexRotationPeriod?;
    get indexRotationPeriod(): string;
    set indexRotationPeriod(value: string);
    resetIndexRotationPeriod(): void;
    get indexRotationPeriodInput(): string | undefined;
    private _retryDuration?;
    get retryDuration(): number;
    set retryDuration(value: number);
    resetRetryDuration(): void;
    get retryDurationInput(): number | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _s3BackupMode?;
    get s3BackupMode(): string;
    set s3BackupMode(value: string);
    resetS3BackupMode(): void;
    get s3BackupModeInput(): string | undefined;
    private _typeName?;
    get typeName(): string;
    set typeName(value: string);
    resetTypeName(): void;
    get typeNameInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions | undefined;
    private _processingConfiguration;
    get processingConfiguration(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference;
    putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration | undefined;
    private _s3Configuration;
    get s3Configuration(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3ConfigurationOutputReference;
    putS3Configuration(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3Configuration): void;
    get s3ConfigurationInput(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3Configuration | undefined;
    private _vpcConfig;
    get vpcConfig(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference;
    putVpcConfig(value: KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfig | undefined;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#timestamp_formats KinesisFirehoseDeliveryStream#timestamp_formats}
    */
    readonly timestampFormats?: string[];
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe | undefined);
    private _timestampFormats?;
    get timestampFormats(): string[];
    set timestampFormats(value: string[]);
    resetTimestampFormats(): void;
    get timestampFormatsInput(): string[] | undefined;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#case_insensitive KinesisFirehoseDeliveryStream#case_insensitive}
    */
    readonly caseInsensitive?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#column_to_json_key_mappings KinesisFirehoseDeliveryStream#column_to_json_key_mappings}
    */
    readonly columnToJsonKeyMappings?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#convert_dots_in_json_keys_to_underscores KinesisFirehoseDeliveryStream#convert_dots_in_json_keys_to_underscores}
    */
    readonly convertDotsInJsonKeysToUnderscores?: boolean | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe | undefined);
    private _caseInsensitive?;
    get caseInsensitive(): boolean | cdktf.IResolvable;
    set caseInsensitive(value: boolean | cdktf.IResolvable);
    resetCaseInsensitive(): void;
    get caseInsensitiveInput(): boolean | cdktf.IResolvable | undefined;
    private _columnToJsonKeyMappings?;
    get columnToJsonKeyMappings(): {
        [key: string]: string;
    };
    set columnToJsonKeyMappings(value: {
        [key: string]: string;
    });
    resetColumnToJsonKeyMappings(): void;
    get columnToJsonKeyMappingsInput(): {
        [key: string]: string;
    } | undefined;
    private _convertDotsInJsonKeysToUnderscores?;
    get convertDotsInJsonKeysToUnderscores(): boolean | cdktf.IResolvable;
    set convertDotsInJsonKeysToUnderscores(value: boolean | cdktf.IResolvable);
    resetConvertDotsInJsonKeysToUnderscores(): void;
    get convertDotsInJsonKeysToUnderscoresInput(): boolean | cdktf.IResolvable | undefined;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer {
    /**
    * hive_json_ser_de block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#hive_json_ser_de KinesisFirehoseDeliveryStream#hive_json_ser_de}
    */
    readonly hiveJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe;
    /**
    * open_x_json_ser_de block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#open_x_json_ser_de KinesisFirehoseDeliveryStream#open_x_json_ser_de}
    */
    readonly openXJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer | undefined);
    private _hiveJsonSerDe;
    get hiveJsonSerDe(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference;
    putHiveJsonSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe): void;
    resetHiveJsonSerDe(): void;
    get hiveJsonSerDeInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe | undefined;
    private _openXJsonSerDe;
    get openXJsonSerDe(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference;
    putOpenXJsonSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe): void;
    resetOpenXJsonSerDe(): void;
    get openXJsonSerDeInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDe | undefined;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration {
    /**
    * deserializer block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#deserializer KinesisFirehoseDeliveryStream#deserializer}
    */
    readonly deserializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration | undefined);
    private _deserializer;
    get deserializer(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference;
    putDeserializer(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer): void;
    get deserializerInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializer | undefined;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#block_size_bytes KinesisFirehoseDeliveryStream#block_size_bytes}
    */
    readonly blockSizeBytes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#bloom_filter_columns KinesisFirehoseDeliveryStream#bloom_filter_columns}
    */
    readonly bloomFilterColumns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#bloom_filter_false_positive_probability KinesisFirehoseDeliveryStream#bloom_filter_false_positive_probability}
    */
    readonly bloomFilterFalsePositiveProbability?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#compression KinesisFirehoseDeliveryStream#compression}
    */
    readonly compression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#dictionary_key_threshold KinesisFirehoseDeliveryStream#dictionary_key_threshold}
    */
    readonly dictionaryKeyThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enable_padding KinesisFirehoseDeliveryStream#enable_padding}
    */
    readonly enablePadding?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#format_version KinesisFirehoseDeliveryStream#format_version}
    */
    readonly formatVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#padding_tolerance KinesisFirehoseDeliveryStream#padding_tolerance}
    */
    readonly paddingTolerance?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#row_index_stride KinesisFirehoseDeliveryStream#row_index_stride}
    */
    readonly rowIndexStride?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#stripe_size_bytes KinesisFirehoseDeliveryStream#stripe_size_bytes}
    */
    readonly stripeSizeBytes?: number;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe | undefined);
    private _blockSizeBytes?;
    get blockSizeBytes(): number;
    set blockSizeBytes(value: number);
    resetBlockSizeBytes(): void;
    get blockSizeBytesInput(): number | undefined;
    private _bloomFilterColumns?;
    get bloomFilterColumns(): string[];
    set bloomFilterColumns(value: string[]);
    resetBloomFilterColumns(): void;
    get bloomFilterColumnsInput(): string[] | undefined;
    private _bloomFilterFalsePositiveProbability?;
    get bloomFilterFalsePositiveProbability(): number;
    set bloomFilterFalsePositiveProbability(value: number);
    resetBloomFilterFalsePositiveProbability(): void;
    get bloomFilterFalsePositiveProbabilityInput(): number | undefined;
    private _compression?;
    get compression(): string;
    set compression(value: string);
    resetCompression(): void;
    get compressionInput(): string | undefined;
    private _dictionaryKeyThreshold?;
    get dictionaryKeyThreshold(): number;
    set dictionaryKeyThreshold(value: number);
    resetDictionaryKeyThreshold(): void;
    get dictionaryKeyThresholdInput(): number | undefined;
    private _enablePadding?;
    get enablePadding(): boolean | cdktf.IResolvable;
    set enablePadding(value: boolean | cdktf.IResolvable);
    resetEnablePadding(): void;
    get enablePaddingInput(): boolean | cdktf.IResolvable | undefined;
    private _formatVersion?;
    get formatVersion(): string;
    set formatVersion(value: string);
    resetFormatVersion(): void;
    get formatVersionInput(): string | undefined;
    private _paddingTolerance?;
    get paddingTolerance(): number;
    set paddingTolerance(value: number);
    resetPaddingTolerance(): void;
    get paddingToleranceInput(): number | undefined;
    private _rowIndexStride?;
    get rowIndexStride(): number;
    set rowIndexStride(value: number);
    resetRowIndexStride(): void;
    get rowIndexStrideInput(): number | undefined;
    private _stripeSizeBytes?;
    get stripeSizeBytes(): number;
    set stripeSizeBytes(value: number);
    resetStripeSizeBytes(): void;
    get stripeSizeBytesInput(): number | undefined;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#block_size_bytes KinesisFirehoseDeliveryStream#block_size_bytes}
    */
    readonly blockSizeBytes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#compression KinesisFirehoseDeliveryStream#compression}
    */
    readonly compression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enable_dictionary_compression KinesisFirehoseDeliveryStream#enable_dictionary_compression}
    */
    readonly enableDictionaryCompression?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#max_padding_bytes KinesisFirehoseDeliveryStream#max_padding_bytes}
    */
    readonly maxPaddingBytes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#page_size_bytes KinesisFirehoseDeliveryStream#page_size_bytes}
    */
    readonly pageSizeBytes?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#writer_version KinesisFirehoseDeliveryStream#writer_version}
    */
    readonly writerVersion?: string;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe | undefined);
    private _blockSizeBytes?;
    get blockSizeBytes(): number;
    set blockSizeBytes(value: number);
    resetBlockSizeBytes(): void;
    get blockSizeBytesInput(): number | undefined;
    private _compression?;
    get compression(): string;
    set compression(value: string);
    resetCompression(): void;
    get compressionInput(): string | undefined;
    private _enableDictionaryCompression?;
    get enableDictionaryCompression(): boolean | cdktf.IResolvable;
    set enableDictionaryCompression(value: boolean | cdktf.IResolvable);
    resetEnableDictionaryCompression(): void;
    get enableDictionaryCompressionInput(): boolean | cdktf.IResolvable | undefined;
    private _maxPaddingBytes?;
    get maxPaddingBytes(): number;
    set maxPaddingBytes(value: number);
    resetMaxPaddingBytes(): void;
    get maxPaddingBytesInput(): number | undefined;
    private _pageSizeBytes?;
    get pageSizeBytes(): number;
    set pageSizeBytes(value: number);
    resetPageSizeBytes(): void;
    get pageSizeBytesInput(): number | undefined;
    private _writerVersion?;
    get writerVersion(): string;
    set writerVersion(value: string);
    resetWriterVersion(): void;
    get writerVersionInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer {
    /**
    * orc_ser_de block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#orc_ser_de KinesisFirehoseDeliveryStream#orc_ser_de}
    */
    readonly orcSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe;
    /**
    * parquet_ser_de block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parquet_ser_de KinesisFirehoseDeliveryStream#parquet_ser_de}
    */
    readonly parquetSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer | undefined);
    private _orcSerDe;
    get orcSerDe(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference;
    putOrcSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe): void;
    resetOrcSerDe(): void;
    get orcSerDeInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe | undefined;
    private _parquetSerDe;
    get parquetSerDe(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference;
    putParquetSerDe(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe): void;
    resetParquetSerDe(): void;
    get parquetSerDeInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDe | undefined;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration {
    /**
    * serializer block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#serializer KinesisFirehoseDeliveryStream#serializer}
    */
    readonly serializer: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration | undefined);
    private _serializer;
    get serializer(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference;
    putSerializer(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer): void;
    get serializerInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializer | undefined;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#catalog_id KinesisFirehoseDeliveryStream#catalog_id}
    */
    readonly catalogId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#database_name KinesisFirehoseDeliveryStream#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#region KinesisFirehoseDeliveryStream#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#table_name KinesisFirehoseDeliveryStream#table_name}
    */
    readonly tableName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#version_id KinesisFirehoseDeliveryStream#version_id}
    */
    readonly versionId?: string;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration | undefined);
    private _catalogId?;
    get catalogId(): string;
    set catalogId(value: string);
    resetCatalogId(): void;
    get catalogIdInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    resetVersionId(): void;
    get versionIdInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * input_format_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#input_format_configuration KinesisFirehoseDeliveryStream#input_format_configuration}
    */
    readonly inputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration;
    /**
    * output_format_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#output_format_configuration KinesisFirehoseDeliveryStream#output_format_configuration}
    */
    readonly outputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration;
    /**
    * schema_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#schema_configuration KinesisFirehoseDeliveryStream#schema_configuration}
    */
    readonly schemaConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _inputFormatConfiguration;
    get inputFormatConfiguration(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference;
    putInputFormatConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration): void;
    get inputFormatConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration | undefined;
    private _outputFormatConfiguration;
    get outputFormatConfiguration(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference;
    putOutputFormatConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration): void;
    get outputFormatConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration | undefined;
    private _schemaConfiguration;
    get schemaConfiguration(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference;
    putSchemaConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration): void;
    get schemaConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfiguration | undefined;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
    */
    readonly retryDuration?: number;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _retryDuration?;
    get retryDuration(): number;
    set retryDuration(value: number);
    resetRetryDuration(): void;
    get retryDurationInput(): number | undefined;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined);
    private _parameterName?;
    get parameterName(): string;
    set parameterName(value: string);
    get parameterNameInput(): string | undefined;
    private _parameterValue?;
    get parameterValue(): string;
    set parameterValue(value: string);
    get parameterValueInput(): string | undefined;
}
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersOutputReference;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
    */
    readonly parameters?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _parameters;
    get parameters(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersList;
    putParameters(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable): void;
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParameters[] | undefined;
}
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsOutputReference;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
    */
    readonly processors?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _processors;
    get processors(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsList;
    putProcessors(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable): void;
    resetProcessors(): void;
    get processorsInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessors[] | undefined;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string | undefined;
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _compressionFormat?;
    get compressionFormat(): string;
    set compressionFormat(value: string);
    resetCompressionFormat(): void;
    get compressionFormatInput(): string | undefined;
    private _errorOutputPrefix?;
    get errorOutputPrefix(): string;
    set errorOutputPrefix(value: string);
    resetErrorOutputPrefix(): void;
    get errorOutputPrefixInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined;
}
export interface KinesisFirehoseDeliveryStreamExtendedS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#custom_time_zone KinesisFirehoseDeliveryStream#custom_time_zone}
    */
    readonly customTimeZone?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#file_extension KinesisFirehoseDeliveryStream#file_extension}
    */
    readonly fileExtension?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
    */
    readonly s3BackupMode?: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions;
    /**
    * data_format_conversion_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#data_format_conversion_configuration KinesisFirehoseDeliveryStream#data_format_conversion_configuration}
    */
    readonly dataFormatConversionConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration;
    /**
    * dynamic_partitioning_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#dynamic_partitioning_configuration KinesisFirehoseDeliveryStream#dynamic_partitioning_configuration}
    */
    readonly dynamicPartitioningConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration;
    /**
    * s3_backup_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_configuration KinesisFirehoseDeliveryStream#s3_backup_configuration}
    */
    readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration;
}
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3Configuration): any;
export declare function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamExtendedS3Configuration): any;
export declare class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamExtendedS3Configuration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamExtendedS3Configuration | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string | undefined;
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _compressionFormat?;
    get compressionFormat(): string;
    set compressionFormat(value: string);
    resetCompressionFormat(): void;
    get compressionFormatInput(): string | undefined;
    private _customTimeZone?;
    get customTimeZone(): string;
    set customTimeZone(value: string);
    resetCustomTimeZone(): void;
    get customTimeZoneInput(): string | undefined;
    private _errorOutputPrefix?;
    get errorOutputPrefix(): string;
    set errorOutputPrefix(value: string);
    resetErrorOutputPrefix(): void;
    get errorOutputPrefixInput(): string | undefined;
    private _fileExtension?;
    get fileExtension(): string;
    set fileExtension(value: string);
    resetFileExtension(): void;
    get fileExtensionInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _s3BackupMode?;
    get s3BackupMode(): string;
    set s3BackupMode(value: string);
    resetS3BackupMode(): void;
    get s3BackupModeInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions | undefined;
    private _dataFormatConversionConfiguration;
    get dataFormatConversionConfiguration(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference;
    putDataFormatConversionConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration): void;
    resetDataFormatConversionConfiguration(): void;
    get dataFormatConversionConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration | undefined;
    private _dynamicPartitioningConfiguration;
    get dynamicPartitioningConfiguration(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference;
    putDynamicPartitioningConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration): void;
    resetDynamicPartitioningConfiguration(): void;
    get dynamicPartitioningConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration | undefined;
    private _processingConfiguration;
    get processingConfiguration(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference;
    putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration | undefined;
    private _s3BackupConfiguration;
    get s3BackupConfiguration(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference;
    putS3BackupConfiguration(value: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration): void;
    resetS3BackupConfiguration(): void;
    get s3BackupConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfiguration | undefined;
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined);
    private _parameterName?;
    get parameterName(): string;
    set parameterName(value: string);
    get parameterNameInput(): string | undefined;
    private _parameterValue?;
    get parameterValue(): string;
    set parameterValue(value: string);
    get parameterValueInput(): string | undefined;
}
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersOutputReference;
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
    */
    readonly parameters?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _parameters;
    get parameters(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersList;
    putParameters(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable): void;
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParameters[] | undefined;
}
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsOutputReference;
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
    */
    readonly processors?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _processors;
    get processors(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsList;
    putProcessors(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable): void;
    resetProcessors(): void;
    get processorsInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessors[] | undefined;
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#name KinesisFirehoseDeliveryStream#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#value KinesisFirehoseDeliveryStream#value}
    */
    readonly value: string;
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesOutputReference;
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#content_encoding KinesisFirehoseDeliveryStream#content_encoding}
    */
    readonly contentEncoding?: string;
    /**
    * common_attributes block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#common_attributes KinesisFirehoseDeliveryStream#common_attributes}
    */
    readonly commonAttributes?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration | undefined);
    private _contentEncoding?;
    get contentEncoding(): string;
    set contentEncoding(value: string);
    resetContentEncoding(): void;
    get contentEncodingInput(): string | undefined;
    private _commonAttributes;
    get commonAttributes(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesList;
    putCommonAttributes(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[] | cdktf.IResolvable): void;
    resetCommonAttributes(): void;
    get commonAttributesInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributes[] | undefined;
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions;
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration): any;
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration): any;
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string | undefined;
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _compressionFormat?;
    get compressionFormat(): string;
    set compressionFormat(value: string);
    resetCompressionFormat(): void;
    get compressionFormatInput(): string | undefined;
    private _errorOutputPrefix?;
    get errorOutputPrefix(): string;
    set errorOutputPrefix(value: string);
    resetErrorOutputPrefix(): void;
    get errorOutputPrefixInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined;
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#secret_arn KinesisFirehoseDeliveryStream#secret_arn}
    */
    readonly secretArn?: string;
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _secretArn?;
    get secretArn(): string;
    set secretArn(value: string);
    resetSecretArn(): void;
    get secretArnInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamHttpEndpointConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#access_key KinesisFirehoseDeliveryStream#access_key}
    */
    readonly accessKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#name KinesisFirehoseDeliveryStream#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
    */
    readonly retryDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
    */
    readonly s3BackupMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#url KinesisFirehoseDeliveryStream#url}
    */
    readonly url: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration;
    /**
    * request_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#request_configuration KinesisFirehoseDeliveryStream#request_configuration}
    */
    readonly requestConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration;
    /**
    * s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
    */
    readonly s3Configuration: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration;
    /**
    * secrets_manager_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#secrets_manager_configuration KinesisFirehoseDeliveryStream#secrets_manager_configuration}
    */
    readonly secretsManagerConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration;
}
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference | KinesisFirehoseDeliveryStreamHttpEndpointConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamHttpEndpointConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration | undefined);
    private _accessKey?;
    get accessKey(): string;
    set accessKey(value: string);
    resetAccessKey(): void;
    get accessKeyInput(): string | undefined;
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _retryDuration?;
    get retryDuration(): number;
    set retryDuration(value: number);
    resetRetryDuration(): void;
    get retryDurationInput(): number | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _s3BackupMode?;
    get s3BackupMode(): string;
    set s3BackupMode(value: string);
    resetS3BackupMode(): void;
    get s3BackupModeInput(): string | undefined;
    private _url?;
    get url(): string;
    set url(value: string);
    get urlInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions | undefined;
    private _processingConfiguration;
    get processingConfiguration(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference;
    putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration | undefined;
    private _requestConfiguration;
    get requestConfiguration(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference;
    putRequestConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration): void;
    resetRequestConfiguration(): void;
    get requestConfigurationInput(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration | undefined;
    private _s3Configuration;
    get s3Configuration(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3ConfigurationOutputReference;
    putS3Configuration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration): void;
    get s3ConfigurationInput(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration | undefined;
    private _secretsManagerConfiguration;
    get secretsManagerConfiguration(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfigurationOutputReference;
    putSecretsManagerConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration): void;
    resetSecretsManagerConfiguration(): void;
    get secretsManagerConfigurationInput(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationSecretsManagerConfiguration | undefined;
}
export interface KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#database_name KinesisFirehoseDeliveryStream#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_error_output_prefix KinesisFirehoseDeliveryStream#s3_error_output_prefix}
    */
    readonly s3ErrorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#table_name KinesisFirehoseDeliveryStream#table_name}
    */
    readonly tableName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#unique_keys KinesisFirehoseDeliveryStream#unique_keys}
    */
    readonly uniqueKeys?: string[];
}
export declare function kinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration | cdktf.IResolvable | undefined);
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _s3ErrorOutputPrefix?;
    get s3ErrorOutputPrefix(): string;
    set s3ErrorOutputPrefix(value: string);
    resetS3ErrorOutputPrefix(): void;
    get s3ErrorOutputPrefixInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
    private _uniqueKeys?;
    get uniqueKeys(): string[];
    set uniqueKeys(value: string[]);
    resetUniqueKeys(): void;
    get uniqueKeysInput(): string[] | undefined;
}
export declare class KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfigurationOutputReference;
}
export interface KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined);
    private _parameterName?;
    get parameterName(): string;
    set parameterName(value: string);
    get parameterNameInput(): string | undefined;
    private _parameterValue?;
    get parameterValue(): string;
    set parameterValue(value: string);
    get parameterValueInput(): string | undefined;
}
export declare class KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersOutputReference;
}
export interface KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
    */
    readonly parameters?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _parameters;
    get parameters(): KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParametersList;
    putParameters(value: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable): void;
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsParameters[] | undefined;
}
export declare class KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsOutputReference;
}
export interface KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
    */
    readonly processors?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _processors;
    get processors(): KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessorsList;
    putProcessors(value: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable): void;
    resetProcessors(): void;
    get processorsInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationProcessors[] | undefined;
}
export interface KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamIcebergConfigurationS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions;
}
export declare function kinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamIcebergConfigurationS3Configuration): any;
export declare function kinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamIcebergConfigurationS3Configuration): any;
export declare class KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamIcebergConfigurationS3Configuration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamIcebergConfigurationS3Configuration | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string | undefined;
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _compressionFormat?;
    get compressionFormat(): string;
    set compressionFormat(value: string);
    resetCompressionFormat(): void;
    get compressionFormatInput(): string | undefined;
    private _errorOutputPrefix?;
    get errorOutputPrefix(): string;
    set errorOutputPrefix(value: string);
    resetErrorOutputPrefix(): void;
    get errorOutputPrefixInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined;
}
export interface KinesisFirehoseDeliveryStreamIcebergConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#catalog_arn KinesisFirehoseDeliveryStream#catalog_arn}
    */
    readonly catalogArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
    */
    readonly retryDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
    */
    readonly s3BackupMode?: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions;
    /**
    * destination_table_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#destination_table_configuration KinesisFirehoseDeliveryStream#destination_table_configuration}
    */
    readonly destinationTableConfiguration?: KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration[] | cdktf.IResolvable;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration;
    /**
    * s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
    */
    readonly s3Configuration: KinesisFirehoseDeliveryStreamIcebergConfigurationS3Configuration;
}
export declare function kinesisFirehoseDeliveryStreamIcebergConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationOutputReference | KinesisFirehoseDeliveryStreamIcebergConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamIcebergConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamIcebergConfigurationOutputReference | KinesisFirehoseDeliveryStreamIcebergConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamIcebergConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamIcebergConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamIcebergConfiguration | undefined);
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _catalogArn?;
    get catalogArn(): string;
    set catalogArn(value: string);
    get catalogArnInput(): string | undefined;
    private _retryDuration?;
    get retryDuration(): number;
    set retryDuration(value: number);
    resetRetryDuration(): void;
    get retryDurationInput(): number | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _s3BackupMode?;
    get s3BackupMode(): string;
    set s3BackupMode(value: string);
    resetS3BackupMode(): void;
    get s3BackupModeInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions | undefined;
    private _destinationTableConfiguration;
    get destinationTableConfiguration(): KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfigurationList;
    putDestinationTableConfiguration(value: KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration[] | cdktf.IResolvable): void;
    resetDestinationTableConfiguration(): void;
    get destinationTableConfigurationInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration[] | undefined;
    private _processingConfiguration;
    get processingConfiguration(): KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfigurationOutputReference;
    putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration | undefined;
    private _s3Configuration;
    get s3Configuration(): KinesisFirehoseDeliveryStreamIcebergConfigurationS3ConfigurationOutputReference;
    putS3Configuration(value: KinesisFirehoseDeliveryStreamIcebergConfigurationS3Configuration): void;
    get s3ConfigurationInput(): KinesisFirehoseDeliveryStreamIcebergConfigurationS3Configuration | undefined;
}
export interface KinesisFirehoseDeliveryStreamKinesisSourceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#kinesis_stream_arn KinesisFirehoseDeliveryStream#kinesis_stream_arn}
    */
    readonly kinesisStreamArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference | KinesisFirehoseDeliveryStreamKinesisSourceConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference | KinesisFirehoseDeliveryStreamKinesisSourceConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamKinesisSourceConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration | undefined);
    private _kinesisStreamArn?;
    get kinesisStreamArn(): string;
    set kinesisStreamArn(value: string);
    get kinesisStreamArnInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#connectivity KinesisFirehoseDeliveryStream#connectivity}
    */
    readonly connectivity: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationOutputReference | KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationOutputReference | KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration | undefined);
    private _connectivity?;
    get connectivity(): string;
    set connectivity(value: string);
    get connectivityInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamMskSourceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#msk_cluster_arn KinesisFirehoseDeliveryStream#msk_cluster_arn}
    */
    readonly mskClusterArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#topic_name KinesisFirehoseDeliveryStream#topic_name}
    */
    readonly topicName: string;
    /**
    * authentication_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#authentication_configuration KinesisFirehoseDeliveryStream#authentication_configuration}
    */
    readonly authenticationConfiguration: KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration;
}
export declare function kinesisFirehoseDeliveryStreamMskSourceConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamMskSourceConfigurationOutputReference | KinesisFirehoseDeliveryStreamMskSourceConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamMskSourceConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamMskSourceConfigurationOutputReference | KinesisFirehoseDeliveryStreamMskSourceConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamMskSourceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamMskSourceConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamMskSourceConfiguration | undefined);
    private _mskClusterArn?;
    get mskClusterArn(): string;
    set mskClusterArn(value: string);
    get mskClusterArnInput(): string | undefined;
    private _topicName?;
    get topicName(): string;
    set topicName(value: string);
    get topicNameInput(): string | undefined;
    private _authenticationConfiguration;
    get authenticationConfiguration(): KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfigurationOutputReference;
    putAuthenticationConfiguration(value: KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration): void;
    get authenticationConfigurationInput(): KinesisFirehoseDeliveryStreamMskSourceConfigurationAuthenticationConfiguration | undefined;
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#default_document_id_format KinesisFirehoseDeliveryStream#default_document_id_format}
    */
    readonly defaultDocumentIdFormat: string;
}
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions | undefined);
    private _defaultDocumentIdFormat?;
    get defaultDocumentIdFormat(): string;
    set defaultDocumentIdFormat(value: string);
    get defaultDocumentIdFormatInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined);
    private _parameterName?;
    get parameterName(): string;
    set parameterName(value: string);
    get parameterNameInput(): string | undefined;
    private _parameterValue?;
    get parameterValue(): string;
    set parameterValue(value: string);
    get parameterValueInput(): string | undefined;
}
export declare class KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersOutputReference;
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
    */
    readonly parameters?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _parameters;
    get parameters(): KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParametersList;
    putParameters(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable): void;
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsParameters[] | undefined;
}
export declare class KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsOutputReference;
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
    */
    readonly processors?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _processors;
    get processors(): KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessorsList;
    putProcessors(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable): void;
    resetProcessors(): void;
    get processorsInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationProcessors[] | undefined;
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfigurationS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions;
}
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationS3Configuration): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationS3Configuration): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfigurationS3Configuration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3Configuration | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string | undefined;
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _compressionFormat?;
    get compressionFormat(): string;
    set compressionFormat(value: string);
    resetCompressionFormat(): void;
    get compressionFormatInput(): string | undefined;
    private _errorOutputPrefix?;
    get errorOutputPrefix(): string;
    set errorOutputPrefix(value: string);
    resetErrorOutputPrefix(): void;
    get errorOutputPrefixInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined;
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#security_group_ids KinesisFirehoseDeliveryStream#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#subnet_ids KinesisFirehoseDeliveryStream#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfigToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfigOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfig): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfigToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfigOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfig): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfig | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfig | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    get vpcId(): string;
}
export interface KinesisFirehoseDeliveryStreamOpensearchConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cluster_endpoint KinesisFirehoseDeliveryStream#cluster_endpoint}
    */
    readonly clusterEndpoint?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#domain_arn KinesisFirehoseDeliveryStream#domain_arn}
    */
    readonly domainArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#index_name KinesisFirehoseDeliveryStream#index_name}
    */
    readonly indexName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#index_rotation_period KinesisFirehoseDeliveryStream#index_rotation_period}
    */
    readonly indexRotationPeriod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
    */
    readonly retryDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
    */
    readonly s3BackupMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#type_name KinesisFirehoseDeliveryStream#type_name}
    */
    readonly typeName?: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions;
    /**
    * document_id_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#document_id_options KinesisFirehoseDeliveryStream#document_id_options}
    */
    readonly documentIdOptions?: KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration;
    /**
    * s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
    */
    readonly s3Configuration: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3Configuration;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#vpc_config KinesisFirehoseDeliveryStream#vpc_config}
    */
    readonly vpcConfig?: KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfig;
}
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchConfiguration | undefined);
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _clusterEndpoint?;
    get clusterEndpoint(): string;
    set clusterEndpoint(value: string);
    resetClusterEndpoint(): void;
    get clusterEndpointInput(): string | undefined;
    private _domainArn?;
    get domainArn(): string;
    set domainArn(value: string);
    resetDomainArn(): void;
    get domainArnInput(): string | undefined;
    private _indexName?;
    get indexName(): string;
    set indexName(value: string);
    get indexNameInput(): string | undefined;
    private _indexRotationPeriod?;
    get indexRotationPeriod(): string;
    set indexRotationPeriod(value: string);
    resetIndexRotationPeriod(): void;
    get indexRotationPeriodInput(): string | undefined;
    private _retryDuration?;
    get retryDuration(): number;
    set retryDuration(value: number);
    resetRetryDuration(): void;
    get retryDurationInput(): number | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _s3BackupMode?;
    get s3BackupMode(): string;
    set s3BackupMode(value: string);
    resetS3BackupMode(): void;
    get s3BackupModeInput(): string | undefined;
    private _typeName?;
    get typeName(): string;
    set typeName(value: string);
    resetTypeName(): void;
    get typeNameInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions | undefined;
    private _documentIdOptions;
    get documentIdOptions(): KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptionsOutputReference;
    putDocumentIdOptions(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions): void;
    resetDocumentIdOptions(): void;
    get documentIdOptionsInput(): KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions | undefined;
    private _processingConfiguration;
    get processingConfiguration(): KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfigurationOutputReference;
    putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration | undefined;
    private _s3Configuration;
    get s3Configuration(): KinesisFirehoseDeliveryStreamOpensearchConfigurationS3ConfigurationOutputReference;
    putS3Configuration(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3Configuration): void;
    get s3ConfigurationInput(): KinesisFirehoseDeliveryStreamOpensearchConfigurationS3Configuration | undefined;
    private _vpcConfig;
    get vpcConfig(): KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfigOutputReference;
    putVpcConfig(value: KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): KinesisFirehoseDeliveryStreamOpensearchConfigurationVpcConfig | undefined;
}
export interface KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined);
    private _parameterName?;
    get parameterName(): string;
    set parameterName(value: string);
    get parameterNameInput(): string | undefined;
    private _parameterValue?;
    get parameterValue(): string;
    set parameterValue(value: string);
    get parameterValueInput(): string | undefined;
}
export declare class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersOutputReference;
}
export interface KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
    */
    readonly parameters?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _parameters;
    get parameters(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParametersList;
    putParameters(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable): void;
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsParameters[] | undefined;
}
export declare class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsOutputReference;
}
export interface KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
    */
    readonly processors?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _processors;
    get processors(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessorsList;
    putProcessors(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable): void;
    resetProcessors(): void;
    get processorsInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationProcessors[] | undefined;
}
export interface KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions;
}
export declare function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string | undefined;
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _compressionFormat?;
    get compressionFormat(): string;
    set compressionFormat(value: string);
    resetCompressionFormat(): void;
    get compressionFormatInput(): string | undefined;
    private _errorOutputPrefix?;
    get errorOutputPrefix(): string;
    set errorOutputPrefix(value: string);
    resetErrorOutputPrefix(): void;
    get errorOutputPrefixInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined;
}
export interface KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#security_group_ids KinesisFirehoseDeliveryStream#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#subnet_ids KinesisFirehoseDeliveryStream#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfigToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfigOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfigToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfigOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
    get vpcId(): string;
}
export interface KinesisFirehoseDeliveryStreamOpensearchserverlessConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#collection_endpoint KinesisFirehoseDeliveryStream#collection_endpoint}
    */
    readonly collectionEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#index_name KinesisFirehoseDeliveryStream#index_name}
    */
    readonly indexName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
    */
    readonly retryDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
    */
    readonly s3BackupMode?: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration;
    /**
    * s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
    */
    readonly s3Configuration: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#vpc_config KinesisFirehoseDeliveryStream#vpc_config}
    */
    readonly vpcConfig?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig;
}
export declare function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationOutputReference | KinesisFirehoseDeliveryStreamOpensearchserverlessConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfiguration | undefined);
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _collectionEndpoint?;
    get collectionEndpoint(): string;
    set collectionEndpoint(value: string);
    get collectionEndpointInput(): string | undefined;
    private _indexName?;
    get indexName(): string;
    set indexName(value: string);
    get indexNameInput(): string | undefined;
    private _retryDuration?;
    get retryDuration(): number;
    set retryDuration(value: number);
    resetRetryDuration(): void;
    get retryDurationInput(): number | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _s3BackupMode?;
    get s3BackupMode(): string;
    set s3BackupMode(value: string);
    resetS3BackupMode(): void;
    get s3BackupModeInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions | undefined;
    private _processingConfiguration;
    get processingConfiguration(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfigurationOutputReference;
    putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration | undefined;
    private _s3Configuration;
    get s3Configuration(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3ConfigurationOutputReference;
    putS3Configuration(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration): void;
    get s3ConfigurationInput(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration | undefined;
    private _vpcConfig;
    get vpcConfig(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfigOutputReference;
    putVpcConfig(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationVpcConfig | undefined;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined);
    private _parameterName?;
    get parameterName(): string;
    set parameterName(value: string);
    get parameterNameInput(): string | undefined;
    private _parameterValue?;
    get parameterValue(): string;
    set parameterValue(value: string);
    get parameterValueInput(): string | undefined;
}
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersOutputReference;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
    */
    readonly parameters?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _parameters;
    get parameters(): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersList;
    putParameters(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable): void;
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParameters[] | undefined;
}
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsOutputReference;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
    */
    readonly processors?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _processors;
    get processors(): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsList;
    putProcessors(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable): void;
    resetProcessors(): void;
    get processorsInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessors[] | undefined;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions;
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string | undefined;
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _compressionFormat?;
    get compressionFormat(): string;
    set compressionFormat(value: string);
    resetCompressionFormat(): void;
    get compressionFormatInput(): string | undefined;
    private _errorOutputPrefix?;
    get errorOutputPrefix(): string;
    set errorOutputPrefix(value: string);
    resetErrorOutputPrefix(): void;
    get errorOutputPrefixInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptions | undefined;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions;
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3Configuration): any;
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationS3Configuration): any;
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3Configuration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3Configuration | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string | undefined;
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _compressionFormat?;
    get compressionFormat(): string;
    set compressionFormat(value: string);
    resetCompressionFormat(): void;
    get compressionFormatInput(): string | undefined;
    private _errorOutputPrefix?;
    get errorOutputPrefix(): string;
    set errorOutputPrefix(value: string);
    resetErrorOutputPrefix(): void;
    get errorOutputPrefixInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#secret_arn KinesisFirehoseDeliveryStream#secret_arn}
    */
    readonly secretArn?: string;
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _secretArn?;
    get secretArn(): string;
    set secretArn(value: string);
    resetSecretArn(): void;
    get secretArnInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamRedshiftConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cluster_jdbcurl KinesisFirehoseDeliveryStream#cluster_jdbcurl}
    */
    readonly clusterJdbcurl: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#copy_options KinesisFirehoseDeliveryStream#copy_options}
    */
    readonly copyOptions?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#data_table_columns KinesisFirehoseDeliveryStream#data_table_columns}
    */
    readonly dataTableColumns?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#data_table_name KinesisFirehoseDeliveryStream#data_table_name}
    */
    readonly dataTableName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#password KinesisFirehoseDeliveryStream#password}
    */
    readonly password?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
    */
    readonly retryDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
    */
    readonly s3BackupMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#username KinesisFirehoseDeliveryStream#username}
    */
    readonly username?: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration;
    /**
    * s3_backup_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_configuration KinesisFirehoseDeliveryStream#s3_backup_configuration}
    */
    readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration;
    /**
    * s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
    */
    readonly s3Configuration: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3Configuration;
    /**
    * secrets_manager_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#secrets_manager_configuration KinesisFirehoseDeliveryStream#secrets_manager_configuration}
    */
    readonly secretsManagerConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration;
}
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamRedshiftConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference | KinesisFirehoseDeliveryStreamRedshiftConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamRedshiftConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamRedshiftConfiguration | undefined);
    private _clusterJdbcurl?;
    get clusterJdbcurl(): string;
    set clusterJdbcurl(value: string);
    get clusterJdbcurlInput(): string | undefined;
    private _copyOptions?;
    get copyOptions(): string;
    set copyOptions(value: string);
    resetCopyOptions(): void;
    get copyOptionsInput(): string | undefined;
    private _dataTableColumns?;
    get dataTableColumns(): string;
    set dataTableColumns(value: string);
    resetDataTableColumns(): void;
    get dataTableColumnsInput(): string | undefined;
    private _dataTableName?;
    get dataTableName(): string;
    set dataTableName(value: string);
    get dataTableNameInput(): string | undefined;
    private _password?;
    get password(): string;
    set password(value: string);
    resetPassword(): void;
    get passwordInput(): string | undefined;
    private _retryDuration?;
    get retryDuration(): number;
    set retryDuration(value: number);
    resetRetryDuration(): void;
    get retryDurationInput(): number | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _s3BackupMode?;
    get s3BackupMode(): string;
    set s3BackupMode(value: string);
    resetS3BackupMode(): void;
    get s3BackupModeInput(): string | undefined;
    private _username?;
    get username(): string;
    set username(value: string);
    resetUsername(): void;
    get usernameInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions | undefined;
    private _processingConfiguration;
    get processingConfiguration(): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference;
    putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration | undefined;
    private _s3BackupConfiguration;
    get s3BackupConfiguration(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference;
    putS3BackupConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration): void;
    resetS3BackupConfiguration(): void;
    get s3BackupConfigurationInput(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration | undefined;
    private _s3Configuration;
    get s3Configuration(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3ConfigurationOutputReference;
    putS3Configuration(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3Configuration): void;
    get s3ConfigurationInput(): KinesisFirehoseDeliveryStreamRedshiftConfigurationS3Configuration | undefined;
    private _secretsManagerConfiguration;
    get secretsManagerConfiguration(): KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfigurationOutputReference;
    putSecretsManagerConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration): void;
    resetSecretsManagerConfiguration(): void;
    get secretsManagerConfigurationInput(): KinesisFirehoseDeliveryStreamRedshiftConfigurationSecretsManagerConfiguration | undefined;
}
export interface KinesisFirehoseDeliveryStreamServerSideEncryption {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#key_arn KinesisFirehoseDeliveryStream#key_arn}
    */
    readonly keyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#key_type KinesisFirehoseDeliveryStream#key_type}
    */
    readonly keyType?: string;
}
export declare function kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform(struct?: KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference | KinesisFirehoseDeliveryStreamServerSideEncryption): any;
export declare function kinesisFirehoseDeliveryStreamServerSideEncryptionToHclTerraform(struct?: KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference | KinesisFirehoseDeliveryStreamServerSideEncryption): any;
export declare class KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamServerSideEncryption | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamServerSideEncryption | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _keyArn?;
    get keyArn(): string;
    set keyArn(value: string);
    resetKeyArn(): void;
    get keyArnInput(): string | undefined;
    private _keyType?;
    get keyType(): string;
    set keyType(value: string);
    resetKeyType(): void;
    get keyTypeInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined);
    private _parameterName?;
    get parameterName(): string;
    set parameterName(value: string);
    get parameterNameInput(): string | undefined;
    private _parameterValue?;
    get parameterValue(): string;
    set parameterValue(value: string);
    get parameterValueInput(): string | undefined;
}
export declare class KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersOutputReference;
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
    */
    readonly parameters?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _parameters;
    get parameters(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParametersList;
    putParameters(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable): void;
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsParameters[] | undefined;
}
export declare class KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsOutputReference;
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
    */
    readonly processors?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _processors;
    get processors(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessorsList;
    putProcessors(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable): void;
    resetProcessors(): void;
    get processorsInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationProcessors[] | undefined;
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions;
}
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3Configuration): any;
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3Configuration): any;
export declare class KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3Configuration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3Configuration | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string | undefined;
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _compressionFormat?;
    get compressionFormat(): string;
    set compressionFormat(value: string);
    resetCompressionFormat(): void;
    get compressionFormatInput(): string | undefined;
    private _errorOutputPrefix?;
    get errorOutputPrefix(): string;
    set errorOutputPrefix(value: string);
    resetErrorOutputPrefix(): void;
    get errorOutputPrefixInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined;
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#secret_arn KinesisFirehoseDeliveryStream#secret_arn}
    */
    readonly secretArn?: string;
}
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _secretArn?;
    get secretArn(): string;
    set secretArn(value: string);
    resetSecretArn(): void;
    get secretArnInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#snowflake_role KinesisFirehoseDeliveryStream#snowflake_role}
    */
    readonly snowflakeRole?: string;
}
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _snowflakeRole?;
    get snowflakeRole(): string;
    set snowflakeRole(value: string);
    resetSnowflakeRole(): void;
    get snowflakeRoleInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#private_link_vpce_id KinesisFirehoseDeliveryStream#private_link_vpce_id}
    */
    readonly privateLinkVpceId: string;
}
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration | undefined);
    private _privateLinkVpceId?;
    get privateLinkVpceId(): string;
    set privateLinkVpceId(value: string);
    get privateLinkVpceIdInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamSnowflakeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#account_url KinesisFirehoseDeliveryStream#account_url}
    */
    readonly accountUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#content_column_name KinesisFirehoseDeliveryStream#content_column_name}
    */
    readonly contentColumnName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#data_loading_option KinesisFirehoseDeliveryStream#data_loading_option}
    */
    readonly dataLoadingOption?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#database KinesisFirehoseDeliveryStream#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#key_passphrase KinesisFirehoseDeliveryStream#key_passphrase}
    */
    readonly keyPassphrase?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#metadata_column_name KinesisFirehoseDeliveryStream#metadata_column_name}
    */
    readonly metadataColumnName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#private_key KinesisFirehoseDeliveryStream#private_key}
    */
    readonly privateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
    */
    readonly retryDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
    */
    readonly s3BackupMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#schema KinesisFirehoseDeliveryStream#schema}
    */
    readonly schema: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#table KinesisFirehoseDeliveryStream#table}
    */
    readonly table: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#user KinesisFirehoseDeliveryStream#user}
    */
    readonly user?: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration;
    /**
    * s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
    */
    readonly s3Configuration: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3Configuration;
    /**
    * secrets_manager_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#secrets_manager_configuration KinesisFirehoseDeliveryStream#secrets_manager_configuration}
    */
    readonly secretsManagerConfiguration?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration;
    /**
    * snowflake_role_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#snowflake_role_configuration KinesisFirehoseDeliveryStream#snowflake_role_configuration}
    */
    readonly snowflakeRoleConfiguration?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration;
    /**
    * snowflake_vpc_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#snowflake_vpc_configuration KinesisFirehoseDeliveryStream#snowflake_vpc_configuration}
    */
    readonly snowflakeVpcConfiguration?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration;
}
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamSnowflakeConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationOutputReference | KinesisFirehoseDeliveryStreamSnowflakeConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamSnowflakeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamSnowflakeConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSnowflakeConfiguration | undefined);
    private _accountUrl?;
    get accountUrl(): string;
    set accountUrl(value: string);
    get accountUrlInput(): string | undefined;
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _contentColumnName?;
    get contentColumnName(): string;
    set contentColumnName(value: string);
    resetContentColumnName(): void;
    get contentColumnNameInput(): string | undefined;
    private _dataLoadingOption?;
    get dataLoadingOption(): string;
    set dataLoadingOption(value: string);
    resetDataLoadingOption(): void;
    get dataLoadingOptionInput(): string | undefined;
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string | undefined;
    private _keyPassphrase?;
    get keyPassphrase(): string;
    set keyPassphrase(value: string);
    resetKeyPassphrase(): void;
    get keyPassphraseInput(): string | undefined;
    private _metadataColumnName?;
    get metadataColumnName(): string;
    set metadataColumnName(value: string);
    resetMetadataColumnName(): void;
    get metadataColumnNameInput(): string | undefined;
    private _privateKey?;
    get privateKey(): string;
    set privateKey(value: string);
    resetPrivateKey(): void;
    get privateKeyInput(): string | undefined;
    private _retryDuration?;
    get retryDuration(): number;
    set retryDuration(value: number);
    resetRetryDuration(): void;
    get retryDurationInput(): number | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _s3BackupMode?;
    get s3BackupMode(): string;
    set s3BackupMode(value: string);
    resetS3BackupMode(): void;
    get s3BackupModeInput(): string | undefined;
    private _schema?;
    get schema(): string;
    set schema(value: string);
    get schemaInput(): string | undefined;
    private _table?;
    get table(): string;
    set table(value: string);
    get tableInput(): string | undefined;
    private _user?;
    get user(): string;
    set user(value: string);
    resetUser(): void;
    get userInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions | undefined;
    private _processingConfiguration;
    get processingConfiguration(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfigurationOutputReference;
    putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration | undefined;
    private _s3Configuration;
    get s3Configuration(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3ConfigurationOutputReference;
    putS3Configuration(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3Configuration): void;
    get s3ConfigurationInput(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3Configuration | undefined;
    private _secretsManagerConfiguration;
    get secretsManagerConfiguration(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfigurationOutputReference;
    putSecretsManagerConfiguration(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration): void;
    resetSecretsManagerConfiguration(): void;
    get secretsManagerConfigurationInput(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration | undefined;
    private _snowflakeRoleConfiguration;
    get snowflakeRoleConfiguration(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfigurationOutputReference;
    putSnowflakeRoleConfiguration(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration): void;
    resetSnowflakeRoleConfiguration(): void;
    get snowflakeRoleConfigurationInput(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration | undefined;
    private _snowflakeVpcConfiguration;
    get snowflakeVpcConfiguration(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfigurationOutputReference;
    putSnowflakeVpcConfiguration(value: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration): void;
    resetSnowflakeVpcConfiguration(): void;
    get snowflakeVpcConfigurationInput(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeVpcConfiguration | undefined;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters | cdktf.IResolvable | undefined);
    private _parameterName?;
    get parameterName(): string;
    set parameterName(value: string);
    get parameterNameInput(): string | undefined;
    private _parameterValue?;
    get parameterValue(): string;
    set parameterValue(value: string);
    get parameterValueInput(): string | undefined;
}
export declare class KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersOutputReference;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
    */
    readonly parameters?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _parameters;
    get parameters(): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersList;
    putParameters(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters[] | cdktf.IResolvable): void;
    resetParameters(): void;
    get parametersInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParameters[] | undefined;
}
export declare class KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsOutputReference;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
    */
    readonly processors?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable;
}
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _processors;
    get processors(): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsList;
    putProcessors(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[] | cdktf.IResolvable): void;
    resetProcessors(): void;
    get processorsInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessors[] | undefined;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
    */
    readonly logStreamName?: string;
}
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions): any;
export declare class KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _logStreamName?;
    get logStreamName(): string;
    set logStreamName(value: string);
    resetLogStreamName(): void;
    get logStreamNameInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationS3Configuration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions;
}
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationS3Configuration): any;
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationS3Configuration): any;
export declare class KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfigurationS3Configuration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfigurationS3Configuration | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string | undefined;
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _compressionFormat?;
    get compressionFormat(): string;
    set compressionFormat(value: string);
    resetCompressionFormat(): void;
    get compressionFormatInput(): string | undefined;
    private _errorOutputPrefix?;
    get errorOutputPrefix(): string;
    set errorOutputPrefix(value: string);
    resetErrorOutputPrefix(): void;
    get errorOutputPrefixInput(): string | undefined;
    private _kmsKeyArn?;
    get kmsKeyArn(): string;
    set kmsKeyArn(value: string);
    resetKmsKeyArn(): void;
    get kmsKeyArnInput(): string | undefined;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationCloudwatchLoggingOptions | undefined;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#secret_arn KinesisFirehoseDeliveryStream#secret_arn}
    */
    readonly secretArn?: string;
}
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _secretArn?;
    get secretArn(): string;
    set secretArn(value: string);
    resetSecretArn(): void;
    get secretArnInput(): string | undefined;
}
export interface KinesisFirehoseDeliveryStreamSplunkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#hec_acknowledgment_timeout KinesisFirehoseDeliveryStream#hec_acknowledgment_timeout}
    */
    readonly hecAcknowledgmentTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#hec_endpoint KinesisFirehoseDeliveryStream#hec_endpoint}
    */
    readonly hecEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#hec_endpoint_type KinesisFirehoseDeliveryStream#hec_endpoint_type}
    */
    readonly hecEndpointType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#hec_token KinesisFirehoseDeliveryStream#hec_token}
    */
    readonly hecToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#retry_duration KinesisFirehoseDeliveryStream#retry_duration}
    */
    readonly retryDuration?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_backup_mode KinesisFirehoseDeliveryStream#s3_backup_mode}
    */
    readonly s3BackupMode?: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#processing_configuration KinesisFirehoseDeliveryStream#processing_configuration}
    */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration;
    /**
    * s3_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#s3_configuration KinesisFirehoseDeliveryStream#s3_configuration}
    */
    readonly s3Configuration: KinesisFirehoseDeliveryStreamSplunkConfigurationS3Configuration;
    /**
    * secrets_manager_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#secrets_manager_configuration KinesisFirehoseDeliveryStream#secrets_manager_configuration}
    */
    readonly secretsManagerConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration;
}
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfiguration): any;
export declare function kinesisFirehoseDeliveryStreamSplunkConfigurationToHclTerraform(struct?: KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference | KinesisFirehoseDeliveryStreamSplunkConfiguration): any;
export declare class KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamSplunkConfiguration | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamSplunkConfiguration | undefined);
    private _bufferingInterval?;
    get bufferingInterval(): number;
    set bufferingInterval(value: number);
    resetBufferingInterval(): void;
    get bufferingIntervalInput(): number | undefined;
    private _bufferingSize?;
    get bufferingSize(): number;
    set bufferingSize(value: number);
    resetBufferingSize(): void;
    get bufferingSizeInput(): number | undefined;
    private _hecAcknowledgmentTimeout?;
    get hecAcknowledgmentTimeout(): number;
    set hecAcknowledgmentTimeout(value: number);
    resetHecAcknowledgmentTimeout(): void;
    get hecAcknowledgmentTimeoutInput(): number | undefined;
    private _hecEndpoint?;
    get hecEndpoint(): string;
    set hecEndpoint(value: string);
    get hecEndpointInput(): string | undefined;
    private _hecEndpointType?;
    get hecEndpointType(): string;
    set hecEndpointType(value: string);
    resetHecEndpointType(): void;
    get hecEndpointTypeInput(): string | undefined;
    private _hecToken?;
    get hecToken(): string;
    set hecToken(value: string);
    resetHecToken(): void;
    get hecTokenInput(): string | undefined;
    private _retryDuration?;
    get retryDuration(): number;
    set retryDuration(value: number);
    resetRetryDuration(): void;
    get retryDurationInput(): number | undefined;
    private _s3BackupMode?;
    get s3BackupMode(): string;
    set s3BackupMode(value: string);
    resetS3BackupMode(): void;
    get s3BackupModeInput(): string | undefined;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions | undefined;
    private _processingConfiguration;
    get processingConfiguration(): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference;
    putProcessingConfiguration(value: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration | undefined;
    private _s3Configuration;
    get s3Configuration(): KinesisFirehoseDeliveryStreamSplunkConfigurationS3ConfigurationOutputReference;
    putS3Configuration(value: KinesisFirehoseDeliveryStreamSplunkConfigurationS3Configuration): void;
    get s3ConfigurationInput(): KinesisFirehoseDeliveryStreamSplunkConfigurationS3Configuration | undefined;
    private _secretsManagerConfiguration;
    get secretsManagerConfiguration(): KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfigurationOutputReference;
    putSecretsManagerConfiguration(value: KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration): void;
    resetSecretsManagerConfiguration(): void;
    get secretsManagerConfigurationInput(): KinesisFirehoseDeliveryStreamSplunkConfigurationSecretsManagerConfiguration | undefined;
}
export interface KinesisFirehoseDeliveryStreamTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#create KinesisFirehoseDeliveryStream#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#delete KinesisFirehoseDeliveryStream#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#update KinesisFirehoseDeliveryStream#update}
    */
    readonly update?: string;
}
export declare function kinesisFirehoseDeliveryStreamTimeoutsToTerraform(struct?: KinesisFirehoseDeliveryStreamTimeouts | cdktf.IResolvable): any;
export declare function kinesisFirehoseDeliveryStreamTimeoutsToHclTerraform(struct?: KinesisFirehoseDeliveryStreamTimeouts | cdktf.IResolvable): any;
export declare class KinesisFirehoseDeliveryStreamTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisFirehoseDeliveryStreamTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisFirehoseDeliveryStreamTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream aws_kinesis_firehose_delivery_stream}
*/
export declare class KinesisFirehoseDeliveryStream extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_kinesis_firehose_delivery_stream";
    /**
    * Generates CDKTF code for importing a KinesisFirehoseDeliveryStream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KinesisFirehoseDeliveryStream to import
    * @param importFromId The id of the existing KinesisFirehoseDeliveryStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KinesisFirehoseDeliveryStream to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_firehose_delivery_stream aws_kinesis_firehose_delivery_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisFirehoseDeliveryStreamConfig
    */
    constructor(scope: Construct, id: string, config: KinesisFirehoseDeliveryStreamConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    resetArn(): void;
    get arnInput(): string | undefined;
    private _destination?;
    get destination(): string;
    set destination(value: string);
    get destinationInput(): string | undefined;
    private _destinationId?;
    get destinationId(): string;
    set destinationId(value: string);
    resetDestinationId(): void;
    get destinationIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    resetVersionId(): void;
    get versionIdInput(): string | undefined;
    private _elasticsearchConfiguration;
    get elasticsearchConfiguration(): KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference;
    putElasticsearchConfiguration(value: KinesisFirehoseDeliveryStreamElasticsearchConfiguration): void;
    resetElasticsearchConfiguration(): void;
    get elasticsearchConfigurationInput(): KinesisFirehoseDeliveryStreamElasticsearchConfiguration | undefined;
    private _extendedS3Configuration;
    get extendedS3Configuration(): KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference;
    putExtendedS3Configuration(value: KinesisFirehoseDeliveryStreamExtendedS3Configuration): void;
    resetExtendedS3Configuration(): void;
    get extendedS3ConfigurationInput(): KinesisFirehoseDeliveryStreamExtendedS3Configuration | undefined;
    private _httpEndpointConfiguration;
    get httpEndpointConfiguration(): KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference;
    putHttpEndpointConfiguration(value: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration): void;
    resetHttpEndpointConfiguration(): void;
    get httpEndpointConfigurationInput(): KinesisFirehoseDeliveryStreamHttpEndpointConfiguration | undefined;
    private _icebergConfiguration;
    get icebergConfiguration(): KinesisFirehoseDeliveryStreamIcebergConfigurationOutputReference;
    putIcebergConfiguration(value: KinesisFirehoseDeliveryStreamIcebergConfiguration): void;
    resetIcebergConfiguration(): void;
    get icebergConfigurationInput(): KinesisFirehoseDeliveryStreamIcebergConfiguration | undefined;
    private _kinesisSourceConfiguration;
    get kinesisSourceConfiguration(): KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference;
    putKinesisSourceConfiguration(value: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration): void;
    resetKinesisSourceConfiguration(): void;
    get kinesisSourceConfigurationInput(): KinesisFirehoseDeliveryStreamKinesisSourceConfiguration | undefined;
    private _mskSourceConfiguration;
    get mskSourceConfiguration(): KinesisFirehoseDeliveryStreamMskSourceConfigurationOutputReference;
    putMskSourceConfiguration(value: KinesisFirehoseDeliveryStreamMskSourceConfiguration): void;
    resetMskSourceConfiguration(): void;
    get mskSourceConfigurationInput(): KinesisFirehoseDeliveryStreamMskSourceConfiguration | undefined;
    private _opensearchConfiguration;
    get opensearchConfiguration(): KinesisFirehoseDeliveryStreamOpensearchConfigurationOutputReference;
    putOpensearchConfiguration(value: KinesisFirehoseDeliveryStreamOpensearchConfiguration): void;
    resetOpensearchConfiguration(): void;
    get opensearchConfigurationInput(): KinesisFirehoseDeliveryStreamOpensearchConfiguration | undefined;
    private _opensearchserverlessConfiguration;
    get opensearchserverlessConfiguration(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationOutputReference;
    putOpensearchserverlessConfiguration(value: KinesisFirehoseDeliveryStreamOpensearchserverlessConfiguration): void;
    resetOpensearchserverlessConfiguration(): void;
    get opensearchserverlessConfigurationInput(): KinesisFirehoseDeliveryStreamOpensearchserverlessConfiguration | undefined;
    private _redshiftConfiguration;
    get redshiftConfiguration(): KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference;
    putRedshiftConfiguration(value: KinesisFirehoseDeliveryStreamRedshiftConfiguration): void;
    resetRedshiftConfiguration(): void;
    get redshiftConfigurationInput(): KinesisFirehoseDeliveryStreamRedshiftConfiguration | undefined;
    private _serverSideEncryption;
    get serverSideEncryption(): KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference;
    putServerSideEncryption(value: KinesisFirehoseDeliveryStreamServerSideEncryption): void;
    resetServerSideEncryption(): void;
    get serverSideEncryptionInput(): KinesisFirehoseDeliveryStreamServerSideEncryption | undefined;
    private _snowflakeConfiguration;
    get snowflakeConfiguration(): KinesisFirehoseDeliveryStreamSnowflakeConfigurationOutputReference;
    putSnowflakeConfiguration(value: KinesisFirehoseDeliveryStreamSnowflakeConfiguration): void;
    resetSnowflakeConfiguration(): void;
    get snowflakeConfigurationInput(): KinesisFirehoseDeliveryStreamSnowflakeConfiguration | undefined;
    private _splunkConfiguration;
    get splunkConfiguration(): KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference;
    putSplunkConfiguration(value: KinesisFirehoseDeliveryStreamSplunkConfiguration): void;
    resetSplunkConfiguration(): void;
    get splunkConfigurationInput(): KinesisFirehoseDeliveryStreamSplunkConfiguration | undefined;
    private _timeouts;
    get timeouts(): KinesisFirehoseDeliveryStreamTimeoutsOutputReference;
    putTimeouts(value: KinesisFirehoseDeliveryStreamTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | KinesisFirehoseDeliveryStreamTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
