/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KinesisFirehoseDeliveryStreamConfig extends cdktf.TerraformMetaArguments {
    /** */
    readonly arn?: string;
    /** (Required) This is the destination to where the data is delivered. The only options are `s3` (Deprecated, use `extended_s3` instead), `extended_s3`, `redshift`, `elasticsearch`, `splunk`, `httpEndpoint`, `opensearch`, `opensearchserverless` and `snowflake`. */
    readonly destination: string;
    /** */
    readonly destinationId?: string;
    /** */
    readonly id?: string;
    /** (Required) A name to identify the stream. This is unique to the AWS account and region the Stream is created in. When using for WAF logging, name must be prefixed with `aws-waf-logs-`. See [AWS Documentation](https://docs.aws.amazon.com/waf/latest/developerguide/waf-policies.html#waf-policies-logging-config) for more details. */
    readonly name: string;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /** */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** (Optional) Specifies the table version for the output data schema. Defaults to `LATEST`. */
    readonly versionId?: string;
    /** */
    readonly elasticsearchConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfiguration;
    /** */
    readonly extendedS3Configuration?: KinesisFirehoseDeliveryStreamExtendedS3Configuration;
    /** */
    readonly httpEndpointConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfiguration;
    /** */
    readonly icebergConfiguration?: KinesisFirehoseDeliveryStreamIcebergConfiguration;
    /** */
    readonly kinesisSourceConfiguration?: KinesisFirehoseDeliveryStreamKinesisSourceConfiguration;
    /** */
    readonly mskSourceConfiguration?: KinesisFirehoseDeliveryStreamMskSourceConfiguration;
    /** */
    readonly opensearchConfiguration?: KinesisFirehoseDeliveryStreamOpensearchConfiguration;
    /** */
    readonly opensearchserverlessConfiguration?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfiguration;
    /** */
    readonly redshiftConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfiguration;
    /** */
    readonly serverSideEncryption?: KinesisFirehoseDeliveryStreamServerSideEncryption;
    /** */
    readonly snowflakeConfiguration?: KinesisFirehoseDeliveryStreamSnowflakeConfiguration;
    /** */
    readonly splunkConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfiguration;
    /** */
    readonly timeouts?: KinesisFirehoseDeliveryStreamTimeouts;
}
export interface KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions {
    /** (Optional) Enables or disables the logging. Defaults to `false`. */
    readonly enabled?: boolean | cdktf.IResolvable;
    /** (Optional) The CloudWatch group name for logging. This value is required if `enabled` is true. */
    readonly logGroupName?: string;
    /** (Optional) The CloudWatch log stream name for logging. This value is required if `enabled` is true. */
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
    /** (Required) Parameter name. Valid Values: `LambdaArn`, `NumberOfRetries`, `MetadataExtractionQuery`, `JsonParsingEngine`, `RoleArn`, `BufferSizeInMBs`, `BufferIntervalInSeconds`, `SubRecordType`, `Delimiter`, `CompressionFormat`, `DataMessageExtraction`. Validation is done against [AWS SDK constants](https://pkg.go.dev/github.com/aws/aws-sdk-go-v2/service/firehose/types#ProcessorParameterName); so values not explicitly listed may also work. */
    readonly parameterName: string;
    /** (Required) Parameter value. Must be between 1 and 512 length (inclusive). When providing a Lambda ARN, you should specify the resource version as well. */
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
    /** (Required) The type of processor. Valid Values: `RecordDeAggregation`, `Lambda`, `MetadataExtraction`, `AppendDelimiterToRecord`, `Decompression`, `CloudWatchLogProcessing`. Validation is done against [AWS SDK constants](https://pkg.go.dev/github.com/aws/aws-sdk-go-v2/service/firehose/types#ProcessorType); so values not explicitly listed may also work. */
    readonly type: string;
    /** */
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
    /** (Optional) Enables or disables data processing. */
    readonly enabled?: boolean | cdktf.IResolvable;
    /** */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    /** (Required) The ARN of the S3 bucket */
    readonly bucketArn: string;
    /** (Optional) Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes). */
    readonly bufferingInterval?: number;
    /** (Optional) Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5. */
    readonly bufferingSize?: number;
    /** (Optional) The compression format. If no value is specified, the default is `UNCOMPRESSED`. Other supported values are `GZIP`, `ZIP`, `Snappy`, & `HADOOP_SNAPPY`. */
    readonly compressionFormat?: string;
    /** (Optional) Prefix added to failed records before writing them to S3. Not currently supported for `redshift` destination. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html). */
    readonly errorOutputPrefix?: string;
    /** (Optional) Specifies the KMS key ARN the stream will use to encrypt data. If not set, no encryption will be used. */
    readonly kmsKeyArn?: string;
    /** (Optional) The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered S3 files. You can specify an extra prefix to be added in front of the time format prefix. Note that if the prefix ends with a slash, it appears as a folder in the S3 bucket */
    readonly prefix?: string;
    /** (Required) Kinesis Data Firehose uses this IAM role for all the permissions that the delivery stream needs. The pattern needs to be `arn:.*`. */
    readonly roleArn: string;
    /** */
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
    /** (Required) The ARN of the IAM role to be assumed by Firehose for calling the Amazon EC2 configuration API and for creating network interfaces. Make sure role has necessary [IAM permissions](https://docs.aws.amazon.com/firehose/latest/dev/controlling-access.html#using-iam-es-vpc) */
    readonly roleArn: string;
    /** (Required) A list of security group IDs to associate with Kinesis Firehose. */
    readonly securityGroupIds: string[];
    /** (Required) A list of subnet IDs to associate with Kinesis Firehose. */
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
    /** (Optional) Buffer incoming data for the specified period of time, in seconds between 0 to 900, before delivering it to the destination.  The default value is 300s. */
    readonly bufferingInterval?: number;
    /** (Optional) Buffer incoming data to the specified size, in MBs between 1 to 100, before delivering it to the destination.  The default value is 5MB. */
    readonly bufferingSize?: number;
    /** (Optional) The endpoint to use when communicating with the cluster. Conflicts with `domainArn`. */
    readonly clusterEndpoint?: string;
    /** (Optional) The ARN of the Amazon ES domain.  The pattern needs to be `arn:.*`.  Conflicts with `clusterEndpoint`. */
    readonly domainArn?: string;
    /** (Required) The Elasticsearch index name. */
    readonly indexName: string;
    /** (Optional) The Elasticsearch index rotation period.  Index rotation appends a timestamp to the IndexName to facilitate expiration of old data.  Valid values are `NoRotation`, `OneHour`, `OneDay`, `OneWeek`, and `OneMonth`.  The default value is `OneDay`. */
    readonly indexRotationPeriod?: string;
    /** (Optional) After an initial failure to deliver to Amazon Elasticsearch, the total amount of time, in seconds between 0 to 7200, during which Firehose re-attempts delivery (including the first attempt).  After this time has elapsed, the failed documents are written to Amazon S3.  The default value is 300s.  There will be no retry if the value is 0. */
    readonly retryDuration?: number;
    /** (Required) The ARN of the IAM role to be assumed by Firehose for calling the Amazon ES Configuration API and for indexing documents.  The IAM role must have permission for `DescribeElasticsearchDomain`, `DescribeElasticsearchDomains`, and `DescribeElasticsearchDomainConfig`.  The pattern needs to be `arn:.*`. */
    readonly roleArn: string;
    /** (Optional) Defines how documents should be delivered to Amazon S3.  Valid values are `FailedDocumentsOnly` and `AllDocuments`.  Default value is `FailedDocumentsOnly`. */
    readonly s3BackupMode?: string;
    /** (Optional) The Elasticsearch type name with maximum length of 100 characters. */
    readonly typeName?: string;
    /** */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptions;
    /** */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfiguration;
    /** */
    readonly s3Configuration: KinesisFirehoseDeliveryStreamElasticsearchConfigurationS3Configuration;
    /** */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    /** (Optional) A list of how you want Kinesis Data Firehose to parse the date and time stamps that may be present in your input data JSON. To specify these format strings, follow the pattern syntax of JodaTime's DateTimeFormat format strings. For more information, see [Class DateTimeFormat](https://www.joda.org/joda-time/apidocs/org/joda/time/format/DateTimeFormat.html). You can also use the special value millis to parse time stamps in epoch milliseconds. If you don't specify a format, Kinesis Data Firehose uses java.sql.Timestamp::valueOf by default. */
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
    /** (Optional) When set to true, which is the default, Kinesis Data Firehose converts JSON keys to lowercase before deserializing them. */
    readonly caseInsensitive?: boolean | cdktf.IResolvable;
    /** (Optional) A map of column names to JSON keys that aren't identical to the column names. This is useful when the JSON contains keys that are Hive keywords. For example, timestamp is a Hive keyword. If you have a JSON key named timestamp, set this parameter to `{ ts = "timestamp" }` to map this key to a column named ts. */
    readonly columnToJsonKeyMappings?: {
        [key: string]: string;
    };
    /** (Optional) When set to `true`, specifies that the names of the keys include dots and that you want Kinesis Data Firehose to replace them with underscores. This is useful because Apache Hive does not allow dots in column names. For example, if the JSON contains a key whose name is "a.b", you can define the column name to be "a_b" when using this option. Defaults to `false`. */
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
    /** */
    readonly hiveJsonSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDe;
    /** */
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
    /** */
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
    /** (Optional) The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Kinesis Data Firehose uses this value for padding calculations. */
    readonly blockSizeBytes?: number;
    /** (Optional) A list of column names for which you want Kinesis Data Firehose to create bloom filters. */
    readonly bloomFilterColumns?: string[];
    /** (Optional) The Bloom filter false positive probability (FPP). The lower the FPP, the bigger the Bloom filter. The default value is `0.05`, the minimum is `0`, and the maximum is `1`. */
    readonly bloomFilterFalsePositiveProbability?: number;
    /** (Optional) The compression code to use over data blocks. The default is `SNAPPY`. */
    readonly compression?: string;
    /** (Optional) A float that represents the fraction of the total number of non-null rows. To turn off dictionary encoding, set this fraction to a number that is less than the number of distinct keys in a dictionary. To always use dictionary encoding, set this threshold to `1`. */
    readonly dictionaryKeyThreshold?: number;
    /** (Optional) Set this to `true` to indicate that you want stripes to be padded to the HDFS block boundaries. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is `false`. */
    readonly enablePadding?: boolean | cdktf.IResolvable;
    /** (Optional) The version of the file to write. The possible values are `V0_11` and `V0_12`. The default is `V0_12`. */
    readonly formatVersion?: string;
    /** (Optional) A float between 0 and 1 that defines the tolerance for block padding as a decimal fraction of stripe size. The default value is `0.05`, which means 5 percent of stripe size. For the default values of 64 MiB ORC stripes and 256 MiB HDFS blocks, the default block padding tolerance of 5 percent reserves a maximum of 3.2 MiB for padding within the 256 MiB block. In such a case, if the available size within the block is more than 3.2 MiB, a new, smaller stripe is inserted to fit within that space. This ensures that no stripe crosses block boundaries and causes remote reads within a node-local task. Kinesis Data Firehose ignores this parameter when `enablePadding` is `false`. */
    readonly paddingTolerance?: number;
    /** (Optional) The number of rows between index entries. The default is `10000` and the minimum is `1000`. */
    readonly rowIndexStride?: number;
    /** (Optional) The number of bytes in each stripe. The default is 64 MiB and the minimum is 8 MiB. */
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
    /** (Optional) The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Kinesis Data Firehose uses this value for padding calculations. */
    readonly blockSizeBytes?: number;
    /** (Optional) The compression code to use over data blocks. The possible values are `UNCOMPRESSED`, `SNAPPY`, and `GZIP`, with the default being `SNAPPY`. Use `SNAPPY` for higher decompression speed. Use `GZIP` if the compression ratio is more important than speed. */
    readonly compression?: string;
    /** (Optional) Indicates whether to enable dictionary compression. */
    readonly enableDictionaryCompression?: boolean | cdktf.IResolvable;
    /** (Optional) The maximum amount of padding to apply. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is `0`. */
    readonly maxPaddingBytes?: number;
    /** (Optional) The Parquet page size. Column chunks are divided into pages. A page is conceptually an indivisible unit (in terms of compression and encoding). The minimum value is 64 KiB and the default is 1 MiB. */
    readonly pageSizeBytes?: number;
    /** (Optional) Indicates the version of row format to output. The possible values are `V1` and `V2`. The default is `V1`. */
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
    /** */
    readonly orcSerDe?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDe;
    /** */
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
    /** */
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
    /** (Optional) The ID of the AWS Glue Data Catalog. If you don't supply this, the AWS account ID is used by default. */
    readonly catalogId?: string;
    /** (Required) Specifies the name of the AWS Glue database that contains the schema for the output data. */
    readonly databaseName: string;
    /** (Optional) If you don't specify an AWS Region, the default is the current region. */
    readonly region?: string;
    /** (Required) The role that Kinesis Data Firehose can use to access AWS Glue. This role must be in the same account you use for Kinesis Data Firehose. Cross-account roles aren't allowed. */
    readonly roleArn: string;
    /** (Required) Specifies the AWS Glue table that contains the column information that constitutes your data schema. */
    readonly tableName: string;
    /** (Optional) Specifies the table version for the output data schema. Defaults to `LATEST`. */
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
    /** (Optional) Defaults to `true`. Set it to `false` if you want to disable format conversion while preserving the configuration details. */
    readonly enabled?: boolean | cdktf.IResolvable;
    /** */
    readonly inputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfiguration;
    /** */
    readonly outputFormatConfiguration: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfiguration;
    /** */
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
    /** (Optional) Enables or disables dynamic partitioning. Defaults to `false`. **NOTE:** You can enable dynamic partitioning only when you create a new delivery stream. Once you enable dynamic partitioning on a delivery stream, it cannot be disabled on this delivery stream. Therefore, Terraform will recreate the resource whenever dynamic partitioning is enabled or disabled. */
    readonly enabled?: boolean | cdktf.IResolvable;
    /** (Optional) Total amount of seconds Firehose spends on retries. Valid values between 0 and 7200. Default is 300. */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    /** (Required) The ARN of the S3 bucket */
    readonly bucketArn: string;
    /** (Optional) Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300. */
    readonly bufferingInterval?: number;
    /** (Optional) Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5. */
    readonly bufferingSize?: number;
    /** (Optional) The compression format. If no value is specified, the default is `UNCOMPRESSED`. Other supported values are `GZIP`, `ZIP`, `Snappy`, & `HADOOP_SNAPPY`. */
    readonly compressionFormat?: string;
    /** (Optional) Prefix added to failed records before writing them to S3. Not currently supported for `redshift` destination. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html). */
    readonly errorOutputPrefix?: string;
    /** (Optional) Specifies the KMS key ARN the stream will use to encrypt data. If not set, no encryption will be used. */
    readonly kmsKeyArn?: string;
    /** (Optional) The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered S3 files. You can specify an extra prefix to be added in front of the time format prefix. Note that if the prefix ends with a slash, it appears as a folder in the S3 bucket */
    readonly prefix?: string;
    /** (Required) The ARN of the AWS credentials. */
    readonly roleArn: string;
    /** */
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
    /** (Required) The ARN of the S3 bucket */
    readonly bucketArn: string;
    /** (Optional) Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300. */
    readonly bufferingInterval?: number;
    /** (Optional) Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5. */
    readonly bufferingSize?: number;
    /** (Optional) The compression format. If no value is specified, the default is `UNCOMPRESSED`. Other supported values are `GZIP`, `ZIP`, `Snappy`, & `HADOOP_SNAPPY`. */
    readonly compressionFormat?: string;
    /** (Optional) The time zone you prefer. Valid values are `UTC` or a non-3-letter IANA time zones (for example, `America/Los_Angeles`). Default value is `UTC`. */
    readonly customTimeZone?: string;
    /** (Optional) Prefix added to failed records before writing them to S3. Not currently supported for `redshift` destination. This prefix appears immediately following the bucket name. For information about how to specify this prefix, see [Custom Prefixes for Amazon S3 Objects](https://docs.aws.amazon.com/firehose/latest/dev/s3-prefixes.html). */
    readonly errorOutputPrefix?: string;
    /** (Optional) The file extension to override the default file extension (for example, `.json`). */
    readonly fileExtension?: string;
    /** (Optional) Specifies the KMS key ARN the stream will use to encrypt data. If not set, no encryption will be used. */
    readonly kmsKeyArn?: string;
    /** (Optional) The "YYYY/MM/DD/HH" time format prefix is automatically used for delivered S3 files. You can specify an extra prefix to be added in front of the time format prefix. Note that if the prefix ends with a slash, it appears as a folder in the S3 bucket */
    readonly prefix?: string;
    /** (Required) The ARN of the IAM role to be assumed by Firehose for calling the Amazon ES Configuration API and for indexing documents.  The IAM role must have permission for `DescribeElasticsearchDomain`, `DescribeElasticsearchDomains`, and `DescribeElasticsearchDomainConfig`.  The pattern needs to be `arn:.*`. */
    readonly roleArn: string;
    /** (Optional) Defines how documents should be delivered to Amazon S3.  Valid values are `FailedDocumentsOnly` and `AllDocuments`.  Default value is `FailedDocumentsOnly`. */
    readonly s3BackupMode?: string;
    /** */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptions;
    /** */
    readonly dataFormatConversionConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfiguration;
    /** */
    readonly dynamicPartitioningConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfiguration;
    /** */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfiguration;
    /** */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
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
    /** (Required) The name of the HTTP endpoint common attribute. */
    readonly name: string;
    /** (Required) The value of the HTTP endpoint common attribute. */
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
    /** (Optional) Kinesis Data Firehose uses the content encoding to compress the body of a request before sending the request to the destination. Valid values are `NONE` and `GZIP`.  Default value is `NONE`. */
    readonly contentEncoding?: string;
    /** */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
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
    /** (Optional) Enables or disables the Secrets Manager configuration. */
    readonly enabled?: boolean | cdktf.IResolvable;
    /** (Optional) The ARN of the Secrets Manager secret. This value is required if `enabled` is true. */
    readonly roleArn?: string;
    /** (Optional) The ARN of the Secrets Manager secret. This value is required if `enabled` is true. */
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
    /** (Optional) The access key required for Kinesis Firehose to authenticate with the HTTP endpoint selected as the destination. */
    readonly accessKey?: string;
    /** (Optional) Buffer incoming data for the specified period of time, in seconds, before delivering it to the destination. The default value is 300 (5 minutes). */
    readonly bufferingInterval?: number;
    /** (Optional) Buffer incoming data to the specified size, in MBs, before delivering it to the destination. The default value is 5. */
    readonly bufferingSize?: number;
    /** (Optional) The HTTP endpoint name. */
    readonly name?: string;
    /** (Optional) Total amount of seconds Firehose spends on retries. This duration starts after the initial attempt fails, It does not include the time periods during which Firehose waits for acknowledgment from the specified destination after each attempt. Valid values between `0` and `7200`. Default is `300`. */
    readonly retryDuration?: number;
    /** (Required) Kinesis Data Firehose uses this IAM role for all the permissions that the delivery stream needs. The pattern needs to be `arn:.*`. */
    readonly roleArn?: string;
    /** (Optional) Defines how documents should be delivered to Amazon S3.  Valid values are `FailedDataOnly` and `AllData`.  Default value is `FailedDataOnly`. */
    readonly s3BackupMode?: string;
    /** (Required) The HTTP endpoint URL to which Kinesis Firehose sends your data. */
    readonly url: string;
    /** */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptions;
    /** */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfiguration;
    /** */
    readonly requestConfiguration?: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfiguration;
    /** */
    readonly s3Configuration: KinesisFirehoseDeliveryStreamHttpEndpointConfigurationS3Configuration;
    /** */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    /** (Required) The name of the Apache Iceberg database. */
    readonly databaseName: string;
    /** (Optional) The table specific S3 error output prefix. All the errors that occurred while delivering to this table will be prefixed with this value in S3 destination. */
    readonly s3ErrorOutputPrefix?: string;
    /** (Required) The name of the Apache Iceberg Table. */
    readonly tableName: string;
    /** (Optional) A list of unique keys for a given Apache Iceberg table. Firehose will use these for running Create, Update, or Delete operations on the given Iceberg table. */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
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
    /** (Optional) Buffer incoming data for the specified period of time, in seconds between 0 and 900, before delivering it to the destination. The default value is 300. */
    readonly bufferingInterval?: number;
    /** (Optional) Buffer incoming data to the specified size, in MBs between 1 and 128, before delivering it to the destination. The default value is 5. */
    readonly bufferingSize?: number;
    /** (Required) Glue catalog ARN identifier of the destination Apache Iceberg Tables. You must specify the ARN in the format `arn:aws:glue:region:account-id:catalog` */
    readonly catalogArn: string;
    /** (Optional) The period of time, in seconds between 0 to 7200, during which Firehose retries to deliver data to the specified destination. */
    readonly retryDuration?: number;
    /** (Required) The ARN of the IAM role to be assumed by Firehose for calling Apache Iceberg Tables. */
    readonly roleArn: string;
    /** (Optional) Defines how documents should be delivered to Amazon S3.  Valid values are `FailedDataOnly` and `AllData`.  Default value is `FailedDataOnly`. */
    readonly s3BackupMode?: string;
    /** */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamIcebergConfigurationCloudwatchLoggingOptions;
    /** */
    readonly destinationTableConfiguration?: KinesisFirehoseDeliveryStreamIcebergConfigurationDestinationTableConfiguration[] | cdktf.IResolvable;
    /** */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamIcebergConfigurationProcessingConfiguration;
    /** */
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
    /** (Required) The kinesis stream used as the source of the firehose delivery stream. */
    readonly kinesisStreamArn: string;
    /** (Required) The ARN of the role that provides access to the source Kinesis stream. */
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
    /** (Required) The type of connectivity used to access the Amazon MSK cluster. Valid values: `PUBLIC`, `PRIVATE`. */
    readonly connectivity: string;
    /** (Required) The ARN of the role used to access the Amazon MSK cluster. */
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
    /** (Required) The ARN of the Amazon MSK cluster. */
    readonly mskClusterArn: string;
    /** (Optional) The start date and time in UTC for the offset position within your MSK topic from where Firehose begins to read. By default, this is set to timestamp when Firehose becomes Active. If you want to create a Firehose stream with Earliest start position set the `readFromTimestamp` parameter to Epoch (1970-01-01T00:00:00Z). */
    readonly readFromTimestamp?: string;
    /** (Required) The topic name within the Amazon MSK cluster. */
    readonly topicName: string;
    /** */
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
    private _readFromTimestamp?;
    get readFromTimestamp(): string;
    set readFromTimestamp(value: string);
    resetReadFromTimestamp(): void;
    get readFromTimestampInput(): string | undefined;
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    /** (Required) The method for setting up document ID. Valid values: `FIREHOSE_DEFAULT`, `NO_DOCUMENT_ID`. */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#security_group_ids KinesisFirehoseDeliveryStream#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#subnet_ids KinesisFirehoseDeliveryStream#subnet_ids}
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
    /** (Optional) Buffer incoming data for the specified period of time, in seconds between 0 to 900, before delivering it to the destination.  The default value is 300s. */
    readonly bufferingInterval?: number;
    /** (Optional) Buffer incoming data to the specified size, in MBs between 1 to 100, before delivering it to the destination.  The default value is 5MB. */
    readonly bufferingSize?: number;
    /** (Optional) The endpoint to use when communicating with the cluster. Conflicts with `domainArn`. */
    readonly clusterEndpoint?: string;
    /** (Optional) The ARN of the Amazon ES domain.  The pattern needs to be `arn:.*`.  Conflicts with `clusterEndpoint`. */
    readonly domainArn?: string;
    /** (Required) The OpenSearch index name. */
    readonly indexName: string;
    /** (Optional) The OpenSearch index rotation period.  Index rotation appends a timestamp to the IndexName to facilitate expiration of old data.  Valid values are `NoRotation`, `OneHour`, `OneDay`, `OneWeek`, and `OneMonth`.  The default value is `OneDay`. */
    readonly indexRotationPeriod?: string;
    /** (Optional) After an initial failure to deliver to Amazon OpenSearch, the total amount of time, in seconds between 0 to 7200, during which Firehose re-attempts delivery (including the first attempt).  After this time has elapsed, the failed documents are written to Amazon S3.  The default value is 300s.  There will be no retry if the value is 0. */
    readonly retryDuration?: number;
    /** (Required) The ARN of the IAM role to be assumed by Firehose for calling the Amazon ES Configuration API and for indexing documents.  The IAM role must have permission for `DescribeDomain`, `DescribeDomains`, and `DescribeDomainConfig`.  The pattern needs to be `arn:.*`. */
    readonly roleArn: string;
    /** (Optional) Defines how documents should be delivered to Amazon S3.  Valid values are `FailedDocumentsOnly` and `AllDocuments`.  Default value is `FailedDocumentsOnly`. */
    readonly s3BackupMode?: string;
    /** (Optional) The Elasticsearch type name with maximum length of 100 characters. Types are deprecated in OpenSearch_1.1. TypeName must be empty. */
    readonly typeName?: string;
    /** */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamOpensearchConfigurationCloudwatchLoggingOptions;
    /** */
    readonly documentIdOptions?: KinesisFirehoseDeliveryStreamOpensearchConfigurationDocumentIdOptions;
    /** */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamOpensearchConfigurationProcessingConfiguration;
    /** */
    readonly s3Configuration: KinesisFirehoseDeliveryStreamOpensearchConfigurationS3Configuration;
    /** */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#security_group_ids KinesisFirehoseDeliveryStream#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#subnet_ids KinesisFirehoseDeliveryStream#subnet_ids}
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
    /** (Optional) Buffer incoming data for the specified period of time, in seconds between 0 to 900, before delivering it to the destination.  The default value is 300s. */
    readonly bufferingInterval?: number;
    /** (Optional) Buffer incoming data to the specified size, in MBs between 1 to 100, before delivering it to the destination.  The default value is 5MB. */
    readonly bufferingSize?: number;
    /** (Required) The endpoint to use when communicating with the collection in the Serverless offering for Amazon OpenSearch Service. */
    readonly collectionEndpoint: string;
    /** (Required) The Serverless offering for Amazon OpenSearch Service index name. */
    readonly indexName: string;
    /** (Optional) After an initial failure to deliver to the Serverless offering for Amazon OpenSearch Service, the total amount of time, in seconds between 0 to 7200, during which Kinesis Data Firehose retries delivery (including the first attempt).  After this time has elapsed, the failed documents are written to Amazon S3.  The default value is 300s.  There will be no retry if the value is 0. */
    readonly retryDuration?: number;
    /** (Required) The Amazon Resource Name (ARN) of the IAM role to be assumed by Kinesis Data Firehose for calling the Serverless offering for Amazon OpenSearch Service Configuration API and for indexing documents.  The pattern needs to be `arn:.*`. */
    readonly roleArn: string;
    /** (Optional) Defines how documents should be delivered to Amazon S3.  Valid values are `FailedDocumentsOnly` and `AllDocuments`.  Default value is `FailedDocumentsOnly`. */
    readonly s3BackupMode?: string;
    /** */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationCloudwatchLoggingOptions;
    /** */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationProcessingConfiguration;
    /** */
    readonly s3Configuration: KinesisFirehoseDeliveryStreamOpensearchserverlessConfigurationS3Configuration;
    /** */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#secret_arn KinesisFirehoseDeliveryStream#secret_arn}
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
    /** (Required) The jdbcurl of the redshift cluster. */
    readonly clusterJdbcurl: string;
    /** (Optional) Copy options for copying the data from the s3 intermediate bucket into redshift, for example to change the default delimiter. For valid values, see the [AWS documentation](http://docs.aws.amazon.com/firehose/latest/APIReference/API_CopyCommand.html) */
    readonly copyOptions?: string;
    /** (Optional) The data table columns that will be targeted by the copy command. */
    readonly dataTableColumns?: string;
    /** (Required) The name of the table in the redshift cluster that the s3 bucket will copy to. */
    readonly dataTableName: string;
    /** (Optional) The password for the username above. This value is required if `secretsManagerConfiguration` is not provided. */
    readonly password?: string;
    /** (Optional) The length of time during which Firehose retries delivery after a failure, starting from the initial request and including the first attempt. The default value is 3600 seconds (60 minutes). Firehose does not retry if the value of DurationInSeconds is 0 (zero) or if the first delivery attempt takes longer than the current value. */
    readonly retryDuration?: number;
    /** (Required) The arn of the role the stream assumes. */
    readonly roleArn: string;
    /** (Optional) The Amazon S3 backup mode.  Valid values are `Disabled` and `Enabled`.  Default value is `Disabled`. */
    readonly s3BackupMode?: string;
    /** (Optional) The username that the firehose delivery stream will assume. It is strongly recommended that the username and password provided is used exclusively for Amazon Kinesis Firehose purposes, and that the permissions for the account are restricted for Amazon Redshift INSERT permissions. This value is required if `secretsManagerConfiguration` is not provided. */
    readonly username?: string;
    /** */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptions;
    /** */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfiguration;
    /** */
    readonly s3BackupConfiguration?: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfiguration;
    /** */
    readonly s3Configuration: KinesisFirehoseDeliveryStreamRedshiftConfigurationS3Configuration;
    /** */
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
    /** (Optional) Whether to enable encryption at rest. Default is `false`. */
    readonly enabled?: boolean | cdktf.IResolvable;
    /** (Optional) Amazon Resource Name (ARN) of the encryption key. Required when `keyType` is `CUSTOMER_MANAGED_CMK`. */
    readonly keyArn?: string;
    /** (Optional) Type of encryption key. Default is `AWS_OWNED_CMK`. Valid values are `AWS_OWNED_CMK` and `CUSTOMER_MANAGED_CMK` */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#secret_arn KinesisFirehoseDeliveryStream#secret_arn}
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
    /** (Optional) Whether the Snowflake role is enabled. */
    readonly enabled?: boolean | cdktf.IResolvable;
    /** (Optional) The Snowflake role. */
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
    /** (Required) The VPCE ID for Firehose to privately connect with Snowflake. */
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
    /** (Required) The URL of the Snowflake account. Format: https://[account_identifier].snowflakecomputing.com. */
    readonly accountUrl: string;
    /** (Optional) Buffer incoming data for the specified period of time, in seconds between 0 to 900, before delivering it to the destination. The default value is 0s. */
    readonly bufferingInterval?: number;
    /** (Optional) Buffer incoming data to the specified size, in MBs between 1 to 128, before delivering it to the destination.  The default value is 1MB. */
    readonly bufferingSize?: number;
    /** (Optional) The name of the content column. */
    readonly contentColumnName?: string;
    /** (Optional) The data loading option. */
    readonly dataLoadingOption?: string;
    /** (Required) The Snowflake database name. */
    readonly database: string;
    /** (Optional) The passphrase for the private key. */
    readonly keyPassphrase?: string;
    /** (Optional) The name of the metadata column. */
    readonly metadataColumnName?: string;
    /** (Optional) The private key for authentication. This value is required if `secretsManagerConfiguration` is not provided. */
    readonly privateKey?: string;
    /** (Optional) After an initial failure to deliver to Snowflake, the total amount of time, in seconds between 0 to 7200, during which Firehose re-attempts delivery (including the first attempt).  After this time has elapsed, the failed documents are written to Amazon S3.  The default value is 60s.  There will be no retry if the value is 0. */
    readonly retryDuration?: number;
    /** (Required) The ARN of the IAM role. */
    readonly roleArn: string;
    /** (Optional) Defines how documents should be delivered to Amazon S3.  Valid values are `FailedDataOnly` and `AllData`.  Default value is `FailedDataOnly`. */
    readonly s3BackupMode?: string;
    /** (Required) The Snowflake schema name. */
    readonly schema: string;
    /** (Required) The Snowflake table name. */
    readonly table: string;
    /** (Optional) The user for authentication. This value is required if `secretsManagerConfiguration` is not provided. */
    readonly user?: string;
    /** */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationCloudwatchLoggingOptions;
    /** */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationProcessingConfiguration;
    /** */
    readonly s3Configuration: KinesisFirehoseDeliveryStreamSnowflakeConfigurationS3Configuration;
    /** */
    readonly secretsManagerConfiguration?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSecretsManagerConfiguration;
    /** */
    readonly snowflakeRoleConfiguration?: KinesisFirehoseDeliveryStreamSnowflakeConfigurationSnowflakeRoleConfiguration;
    /** */
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameter_name KinesisFirehoseDeliveryStream#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameter_value KinesisFirehoseDeliveryStream#parameter_value}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#type KinesisFirehoseDeliveryStream#type}
    */
    readonly type: string;
    /**
    * parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#parameters KinesisFirehoseDeliveryStream#parameters}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * processors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#processors KinesisFirehoseDeliveryStream#processors}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_group_name KinesisFirehoseDeliveryStream#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#log_stream_name KinesisFirehoseDeliveryStream#log_stream_name}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#bucket_arn KinesisFirehoseDeliveryStream#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#buffering_interval KinesisFirehoseDeliveryStream#buffering_interval}
    */
    readonly bufferingInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#buffering_size KinesisFirehoseDeliveryStream#buffering_size}
    */
    readonly bufferingSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#compression_format KinesisFirehoseDeliveryStream#compression_format}
    */
    readonly compressionFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#error_output_prefix KinesisFirehoseDeliveryStream#error_output_prefix}
    */
    readonly errorOutputPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#kms_key_arn KinesisFirehoseDeliveryStream#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#prefix KinesisFirehoseDeliveryStream#prefix}
    */
    readonly prefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn: string;
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#cloudwatch_logging_options KinesisFirehoseDeliveryStream#cloudwatch_logging_options}
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
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#enabled KinesisFirehoseDeliveryStream#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#role_arn KinesisFirehoseDeliveryStream#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#secret_arn KinesisFirehoseDeliveryStream#secret_arn}
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
    /** (Optional) Buffer incoming data for the specified period of time, in seconds between 0 to 60, before delivering it to the destination.  The default value is 60s. */
    readonly bufferingInterval?: number;
    /** (Optional) Buffer incoming data to the specified size, in MBs between 1 to 5, before delivering it to the destination.  The default value is 5MB. */
    readonly bufferingSize?: number;
    /** (Optional) The amount of time, in seconds between 180 and 600, that Kinesis Firehose waits to receive an acknowledgment from Splunk after it sends it data. */
    readonly hecAcknowledgmentTimeout?: number;
    /** (Required) The HTTP Event Collector (HEC) endpoint to which Kinesis Firehose sends your data. */
    readonly hecEndpoint: string;
    /** (Optional) The HEC endpoint type. Valid values are `Raw` or `Event`. The default value is `Raw`. */
    readonly hecEndpointType?: string;
    /** (Optional) The GUID that you obtain from your Splunk cluster when you create a new HEC endpoint. This value is required if `secretsManagerConfiguration` is not provided. */
    readonly hecToken?: string;
    /** (Optional) After an initial failure to deliver to Splunk, the total amount of time, in seconds between 0 to 7200, during which Firehose re-attempts delivery (including the first attempt).  After this time has elapsed, the failed documents are written to Amazon S3.  The default value is 300s.  There will be no retry if the value is 0. */
    readonly retryDuration?: number;
    /** (Optional) Defines how documents should be delivered to Amazon S3.  Valid values are `FailedEventsOnly` and `AllEvents`.  Default value is `FailedEventsOnly`. */
    readonly s3BackupMode?: string;
    /** */
    readonly cloudwatchLoggingOptions?: KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptions;
    /** */
    readonly processingConfiguration?: KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfiguration;
    /** */
    readonly s3Configuration: KinesisFirehoseDeliveryStreamSplunkConfigurationS3Configuration;
    /** */
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
    /** (Default `30m`) */
    readonly create?: string;
    /** (Default `30m`) */
    readonly delete?: string;
    /** (Default `10m`) */
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream aws_kinesis_firehose_delivery_stream}
*/
export declare class KinesisFirehoseDeliveryStream extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_kinesis_firehose_delivery_stream";
    /**
    * Generates CDKTF code for importing a KinesisFirehoseDeliveryStream resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KinesisFirehoseDeliveryStream to import
    * @param importFromId The id of the existing KinesisFirehoseDeliveryStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KinesisFirehoseDeliveryStream to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/kinesis_firehose_delivery_stream aws_kinesis_firehose_delivery_stream} Resource
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
