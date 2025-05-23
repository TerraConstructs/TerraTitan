/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KinesisAnalyticsApplicationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#code KinesisAnalyticsApplication#code}
    */
    readonly code?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#description KinesisAnalyticsApplication#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#id KinesisAnalyticsApplication#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#name KinesisAnalyticsApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#start_application KinesisAnalyticsApplication#start_application}
    */
    readonly startApplication?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#tags KinesisAnalyticsApplication#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#tags_all KinesisAnalyticsApplication#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * cloudwatch_logging_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#cloudwatch_logging_options KinesisAnalyticsApplication#cloudwatch_logging_options}
    */
    readonly cloudwatchLoggingOptions?: KinesisAnalyticsApplicationCloudwatchLoggingOptions;
    /**
    * inputs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#inputs KinesisAnalyticsApplication#inputs}
    */
    readonly inputs?: KinesisAnalyticsApplicationInputs;
    /**
    * outputs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#outputs KinesisAnalyticsApplication#outputs}
    */
    readonly outputs?: KinesisAnalyticsApplicationOutputs[] | cdktf.IResolvable;
    /**
    * reference_data_sources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#reference_data_sources KinesisAnalyticsApplication#reference_data_sources}
    */
    readonly referenceDataSources?: KinesisAnalyticsApplicationReferenceDataSources;
}
export interface KinesisAnalyticsApplicationCloudwatchLoggingOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#log_stream_arn KinesisAnalyticsApplication#log_stream_arn}
    */
    readonly logStreamArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisAnalyticsApplicationCloudwatchLoggingOptionsToTerraform(struct?: KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference | KinesisAnalyticsApplicationCloudwatchLoggingOptions): any;
export declare function kinesisAnalyticsApplicationCloudwatchLoggingOptionsToHclTerraform(struct?: KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference | KinesisAnalyticsApplicationCloudwatchLoggingOptions): any;
export declare class KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationCloudwatchLoggingOptions | undefined;
    set internalValue(value: KinesisAnalyticsApplicationCloudwatchLoggingOptions | undefined);
    get id(): string;
    private _logStreamArn?;
    get logStreamArn(): string;
    set logStreamArn(value: string);
    get logStreamArnInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export interface KinesisAnalyticsApplicationInputsKinesisFirehose {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisAnalyticsApplicationInputsKinesisFirehoseToTerraform(struct?: KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference | KinesisAnalyticsApplicationInputsKinesisFirehose): any;
export declare function kinesisAnalyticsApplicationInputsKinesisFirehoseToHclTerraform(struct?: KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference | KinesisAnalyticsApplicationInputsKinesisFirehose): any;
export declare class KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationInputsKinesisFirehose | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsKinesisFirehose | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export interface KinesisAnalyticsApplicationInputsKinesisStream {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisAnalyticsApplicationInputsKinesisStreamToTerraform(struct?: KinesisAnalyticsApplicationInputsKinesisStreamOutputReference | KinesisAnalyticsApplicationInputsKinesisStream): any;
export declare function kinesisAnalyticsApplicationInputsKinesisStreamToHclTerraform(struct?: KinesisAnalyticsApplicationInputsKinesisStreamOutputReference | KinesisAnalyticsApplicationInputsKinesisStream): any;
export declare class KinesisAnalyticsApplicationInputsKinesisStreamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationInputsKinesisStream | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsKinesisStream | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export interface KinesisAnalyticsApplicationInputsParallelism {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#count KinesisAnalyticsApplication#count}
    */
    readonly count?: number;
}
export declare function kinesisAnalyticsApplicationInputsParallelismToTerraform(struct?: KinesisAnalyticsApplicationInputsParallelismOutputReference | KinesisAnalyticsApplicationInputsParallelism): any;
export declare function kinesisAnalyticsApplicationInputsParallelismToHclTerraform(struct?: KinesisAnalyticsApplicationInputsParallelismOutputReference | KinesisAnalyticsApplicationInputsParallelism): any;
export declare class KinesisAnalyticsApplicationInputsParallelismOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationInputsParallelism | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsParallelism | undefined);
    private _count?;
    get count(): number;
    set count(value: number);
    resetCount(): void;
    get countInput(): number | undefined;
}
export interface KinesisAnalyticsApplicationInputsProcessingConfigurationLambda {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference | KinesisAnalyticsApplicationInputsProcessingConfigurationLambda): any;
export declare function kinesisAnalyticsApplicationInputsProcessingConfigurationLambdaToHclTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference | KinesisAnalyticsApplicationInputsProcessingConfigurationLambda): any;
export declare class KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationInputsProcessingConfigurationLambda | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export interface KinesisAnalyticsApplicationInputsProcessingConfiguration {
    /**
    * lambda block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#lambda KinesisAnalyticsApplication#lambda}
    */
    readonly lambda: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda;
}
export declare function kinesisAnalyticsApplicationInputsProcessingConfigurationToTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference | KinesisAnalyticsApplicationInputsProcessingConfiguration): any;
export declare function kinesisAnalyticsApplicationInputsProcessingConfigurationToHclTerraform(struct?: KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference | KinesisAnalyticsApplicationInputsProcessingConfiguration): any;
export declare class KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationInputsProcessingConfiguration | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsProcessingConfiguration | undefined);
    private _lambda;
    get lambda(): KinesisAnalyticsApplicationInputsProcessingConfigurationLambdaOutputReference;
    putLambda(value: KinesisAnalyticsApplicationInputsProcessingConfigurationLambda): void;
    get lambdaInput(): KinesisAnalyticsApplicationInputsProcessingConfigurationLambda | undefined;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordColumns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#mapping KinesisAnalyticsApplication#mapping}
    */
    readonly mapping?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#name KinesisAnalyticsApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#sql_type KinesisAnalyticsApplication#sql_type}
    */
    readonly sqlType: string;
}
export declare function kinesisAnalyticsApplicationInputsSchemaRecordColumnsToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordColumns | cdktf.IResolvable): any;
export declare function kinesisAnalyticsApplicationInputsSchemaRecordColumnsToHclTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordColumns | cdktf.IResolvable): any;
export declare class KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisAnalyticsApplicationInputsSchemaRecordColumns | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsSchemaRecordColumns | cdktf.IResolvable | undefined);
    private _mapping?;
    get mapping(): string;
    set mapping(value: string);
    resetMapping(): void;
    get mappingInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _sqlType?;
    get sqlType(): string;
    set sqlType(value: string);
    get sqlTypeInput(): string | undefined;
}
export declare class KinesisAnalyticsApplicationInputsSchemaRecordColumnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisAnalyticsApplicationInputsSchemaRecordColumns[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisAnalyticsApplicationInputsSchemaRecordColumnsOutputReference;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}
    */
    readonly recordColumnDelimiter: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}
    */
    readonly recordRowDelimiter: string;
}
export declare function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv): any;
export declare function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvToHclTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv): any;
export declare class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv | undefined);
    private _recordColumnDelimiter?;
    get recordColumnDelimiter(): string;
    set recordColumnDelimiter(value: string);
    get recordColumnDelimiterInput(): string | undefined;
    private _recordRowDelimiter?;
    get recordRowDelimiter(): string;
    set recordRowDelimiter(value: string);
    get recordRowDelimiterInput(): string | undefined;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}
    */
    readonly recordRowPath: string;
}
export declare function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson): any;
export declare function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonToHclTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson): any;
export declare class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson | undefined);
    private _recordRowPath?;
    get recordRowPath(): string;
    set recordRowPath(value: string);
    get recordRowPathInput(): string | undefined;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters {
    /**
    * csv block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#csv KinesisAnalyticsApplication#csv}
    */
    readonly csv?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv;
    /**
    * json block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#json KinesisAnalyticsApplication#json}
    */
    readonly json?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson;
}
export declare function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters): any;
export declare function kinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersToHclTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters): any;
export declare class KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters | undefined);
    private _csv;
    get csv(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsvOutputReference;
    putCsv(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv): void;
    resetCsv(): void;
    get csvInput(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersCsv | undefined;
    private _json;
    get json(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJsonOutputReference;
    putJson(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson): void;
    resetJson(): void;
    get jsonInput(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersJson | undefined;
}
export interface KinesisAnalyticsApplicationInputsSchemaRecordFormat {
    /**
    * mapping_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}
    */
    readonly mappingParameters?: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters;
}
export declare function kinesisAnalyticsApplicationInputsSchemaRecordFormatToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormat): any;
export declare function kinesisAnalyticsApplicationInputsSchemaRecordFormatToHclTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference | KinesisAnalyticsApplicationInputsSchemaRecordFormat): any;
export declare class KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationInputsSchemaRecordFormat | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsSchemaRecordFormat | undefined);
    get recordFormatType(): string;
    private _mappingParameters;
    get mappingParameters(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParametersOutputReference;
    putMappingParameters(value: KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters): void;
    resetMappingParameters(): void;
    get mappingParametersInput(): KinesisAnalyticsApplicationInputsSchemaRecordFormatMappingParameters | undefined;
}
export interface KinesisAnalyticsApplicationInputsSchema {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}
    */
    readonly recordEncoding?: string;
    /**
    * record_columns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#record_columns KinesisAnalyticsApplication#record_columns}
    */
    readonly recordColumns: KinesisAnalyticsApplicationInputsSchemaRecordColumns[] | cdktf.IResolvable;
    /**
    * record_format block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#record_format KinesisAnalyticsApplication#record_format}
    */
    readonly recordFormat: KinesisAnalyticsApplicationInputsSchemaRecordFormat;
}
export declare function kinesisAnalyticsApplicationInputsSchemaToTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaOutputReference | KinesisAnalyticsApplicationInputsSchema): any;
export declare function kinesisAnalyticsApplicationInputsSchemaToHclTerraform(struct?: KinesisAnalyticsApplicationInputsSchemaOutputReference | KinesisAnalyticsApplicationInputsSchema): any;
export declare class KinesisAnalyticsApplicationInputsSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationInputsSchema | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsSchema | undefined);
    private _recordEncoding?;
    get recordEncoding(): string;
    set recordEncoding(value: string);
    resetRecordEncoding(): void;
    get recordEncodingInput(): string | undefined;
    private _recordColumns;
    get recordColumns(): KinesisAnalyticsApplicationInputsSchemaRecordColumnsList;
    putRecordColumns(value: KinesisAnalyticsApplicationInputsSchemaRecordColumns[] | cdktf.IResolvable): void;
    get recordColumnsInput(): cdktf.IResolvable | KinesisAnalyticsApplicationInputsSchemaRecordColumns[] | undefined;
    private _recordFormat;
    get recordFormat(): KinesisAnalyticsApplicationInputsSchemaRecordFormatOutputReference;
    putRecordFormat(value: KinesisAnalyticsApplicationInputsSchemaRecordFormat): void;
    get recordFormatInput(): KinesisAnalyticsApplicationInputsSchemaRecordFormat | undefined;
}
export interface KinesisAnalyticsApplicationInputsStartingPositionConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#starting_position KinesisAnalyticsApplication#starting_position}
    */
    readonly startingPosition?: string;
}
export declare function kinesisAnalyticsApplicationInputsStartingPositionConfigurationToTerraform(struct?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration | cdktf.IResolvable): any;
export declare function kinesisAnalyticsApplicationInputsStartingPositionConfigurationToHclTerraform(struct?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration | cdktf.IResolvable): any;
export declare class KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisAnalyticsApplicationInputsStartingPositionConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputsStartingPositionConfiguration | cdktf.IResolvable | undefined);
    private _startingPosition?;
    get startingPosition(): string;
    set startingPosition(value: string);
    resetStartingPosition(): void;
    get startingPositionInput(): string | undefined;
}
export declare class KinesisAnalyticsApplicationInputsStartingPositionConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisAnalyticsApplicationInputsStartingPositionConfigurationOutputReference;
}
export interface KinesisAnalyticsApplicationInputs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#name_prefix KinesisAnalyticsApplication#name_prefix}
    */
    readonly namePrefix: string;
    /**
    * kinesis_firehose block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}
    */
    readonly kinesisFirehose?: KinesisAnalyticsApplicationInputsKinesisFirehose;
    /**
    * kinesis_stream block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}
    */
    readonly kinesisStream?: KinesisAnalyticsApplicationInputsKinesisStream;
    /**
    * parallelism block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#parallelism KinesisAnalyticsApplication#parallelism}
    */
    readonly parallelism?: KinesisAnalyticsApplicationInputsParallelism;
    /**
    * processing_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#processing_configuration KinesisAnalyticsApplication#processing_configuration}
    */
    readonly processingConfiguration?: KinesisAnalyticsApplicationInputsProcessingConfiguration;
    /**
    * schema block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}
    */
    readonly schema: KinesisAnalyticsApplicationInputsSchema;
    /**
    * starting_position_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#starting_position_configuration KinesisAnalyticsApplication#starting_position_configuration}
    */
    readonly startingPositionConfiguration?: KinesisAnalyticsApplicationInputsStartingPositionConfiguration[] | cdktf.IResolvable;
}
export declare function kinesisAnalyticsApplicationInputsToTerraform(struct?: KinesisAnalyticsApplicationInputsOutputReference | KinesisAnalyticsApplicationInputs): any;
export declare function kinesisAnalyticsApplicationInputsToHclTerraform(struct?: KinesisAnalyticsApplicationInputsOutputReference | KinesisAnalyticsApplicationInputs): any;
export declare class KinesisAnalyticsApplicationInputsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationInputs | undefined;
    set internalValue(value: KinesisAnalyticsApplicationInputs | undefined);
    get id(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    get namePrefixInput(): string | undefined;
    get streamNames(): string[];
    private _kinesisFirehose;
    get kinesisFirehose(): KinesisAnalyticsApplicationInputsKinesisFirehoseOutputReference;
    putKinesisFirehose(value: KinesisAnalyticsApplicationInputsKinesisFirehose): void;
    resetKinesisFirehose(): void;
    get kinesisFirehoseInput(): KinesisAnalyticsApplicationInputsKinesisFirehose | undefined;
    private _kinesisStream;
    get kinesisStream(): KinesisAnalyticsApplicationInputsKinesisStreamOutputReference;
    putKinesisStream(value: KinesisAnalyticsApplicationInputsKinesisStream): void;
    resetKinesisStream(): void;
    get kinesisStreamInput(): KinesisAnalyticsApplicationInputsKinesisStream | undefined;
    private _parallelism;
    get parallelism(): KinesisAnalyticsApplicationInputsParallelismOutputReference;
    putParallelism(value: KinesisAnalyticsApplicationInputsParallelism): void;
    resetParallelism(): void;
    get parallelismInput(): KinesisAnalyticsApplicationInputsParallelism | undefined;
    private _processingConfiguration;
    get processingConfiguration(): KinesisAnalyticsApplicationInputsProcessingConfigurationOutputReference;
    putProcessingConfiguration(value: KinesisAnalyticsApplicationInputsProcessingConfiguration): void;
    resetProcessingConfiguration(): void;
    get processingConfigurationInput(): KinesisAnalyticsApplicationInputsProcessingConfiguration | undefined;
    private _schema;
    get schema(): KinesisAnalyticsApplicationInputsSchemaOutputReference;
    putSchema(value: KinesisAnalyticsApplicationInputsSchema): void;
    get schemaInput(): KinesisAnalyticsApplicationInputsSchema | undefined;
    private _startingPositionConfiguration;
    get startingPositionConfiguration(): KinesisAnalyticsApplicationInputsStartingPositionConfigurationList;
    putStartingPositionConfiguration(value: KinesisAnalyticsApplicationInputsStartingPositionConfiguration[] | cdktf.IResolvable): void;
    resetStartingPositionConfiguration(): void;
    get startingPositionConfigurationInput(): cdktf.IResolvable | KinesisAnalyticsApplicationInputsStartingPositionConfiguration[] | undefined;
}
export interface KinesisAnalyticsApplicationOutputsKinesisFirehose {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisAnalyticsApplicationOutputsKinesisFirehoseToTerraform(struct?: KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference | KinesisAnalyticsApplicationOutputsKinesisFirehose): any;
export declare function kinesisAnalyticsApplicationOutputsKinesisFirehoseToHclTerraform(struct?: KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference | KinesisAnalyticsApplicationOutputsKinesisFirehose): any;
export declare class KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationOutputsKinesisFirehose | undefined;
    set internalValue(value: KinesisAnalyticsApplicationOutputsKinesisFirehose | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export interface KinesisAnalyticsApplicationOutputsKinesisStream {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisAnalyticsApplicationOutputsKinesisStreamToTerraform(struct?: KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference | KinesisAnalyticsApplicationOutputsKinesisStream): any;
export declare function kinesisAnalyticsApplicationOutputsKinesisStreamToHclTerraform(struct?: KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference | KinesisAnalyticsApplicationOutputsKinesisStream): any;
export declare class KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationOutputsKinesisStream | undefined;
    set internalValue(value: KinesisAnalyticsApplicationOutputsKinesisStream | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export interface KinesisAnalyticsApplicationOutputsLambda {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#resource_arn KinesisAnalyticsApplication#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisAnalyticsApplicationOutputsLambdaToTerraform(struct?: KinesisAnalyticsApplicationOutputsLambdaOutputReference | KinesisAnalyticsApplicationOutputsLambda): any;
export declare function kinesisAnalyticsApplicationOutputsLambdaToHclTerraform(struct?: KinesisAnalyticsApplicationOutputsLambdaOutputReference | KinesisAnalyticsApplicationOutputsLambda): any;
export declare class KinesisAnalyticsApplicationOutputsLambdaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationOutputsLambda | undefined;
    set internalValue(value: KinesisAnalyticsApplicationOutputsLambda | undefined);
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export interface KinesisAnalyticsApplicationOutputsSchema {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#record_format_type KinesisAnalyticsApplication#record_format_type}
    */
    readonly recordFormatType: string;
}
export declare function kinesisAnalyticsApplicationOutputsSchemaToTerraform(struct?: KinesisAnalyticsApplicationOutputsSchemaOutputReference | KinesisAnalyticsApplicationOutputsSchema): any;
export declare function kinesisAnalyticsApplicationOutputsSchemaToHclTerraform(struct?: KinesisAnalyticsApplicationOutputsSchemaOutputReference | KinesisAnalyticsApplicationOutputsSchema): any;
export declare class KinesisAnalyticsApplicationOutputsSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationOutputsSchema | undefined;
    set internalValue(value: KinesisAnalyticsApplicationOutputsSchema | undefined);
    private _recordFormatType?;
    get recordFormatType(): string;
    set recordFormatType(value: string);
    get recordFormatTypeInput(): string | undefined;
}
export interface KinesisAnalyticsApplicationOutputs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#name KinesisAnalyticsApplication#name}
    */
    readonly name: string;
    /**
    * kinesis_firehose block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#kinesis_firehose KinesisAnalyticsApplication#kinesis_firehose}
    */
    readonly kinesisFirehose?: KinesisAnalyticsApplicationOutputsKinesisFirehose;
    /**
    * kinesis_stream block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#kinesis_stream KinesisAnalyticsApplication#kinesis_stream}
    */
    readonly kinesisStream?: KinesisAnalyticsApplicationOutputsKinesisStream;
    /**
    * lambda block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#lambda KinesisAnalyticsApplication#lambda}
    */
    readonly lambda?: KinesisAnalyticsApplicationOutputsLambda;
    /**
    * schema block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}
    */
    readonly schema: KinesisAnalyticsApplicationOutputsSchema;
}
export declare function kinesisAnalyticsApplicationOutputsToTerraform(struct?: KinesisAnalyticsApplicationOutputs | cdktf.IResolvable): any;
export declare function kinesisAnalyticsApplicationOutputsToHclTerraform(struct?: KinesisAnalyticsApplicationOutputs | cdktf.IResolvable): any;
export declare class KinesisAnalyticsApplicationOutputsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisAnalyticsApplicationOutputs | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisAnalyticsApplicationOutputs | cdktf.IResolvable | undefined);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _kinesisFirehose;
    get kinesisFirehose(): KinesisAnalyticsApplicationOutputsKinesisFirehoseOutputReference;
    putKinesisFirehose(value: KinesisAnalyticsApplicationOutputsKinesisFirehose): void;
    resetKinesisFirehose(): void;
    get kinesisFirehoseInput(): KinesisAnalyticsApplicationOutputsKinesisFirehose | undefined;
    private _kinesisStream;
    get kinesisStream(): KinesisAnalyticsApplicationOutputsKinesisStreamOutputReference;
    putKinesisStream(value: KinesisAnalyticsApplicationOutputsKinesisStream): void;
    resetKinesisStream(): void;
    get kinesisStreamInput(): KinesisAnalyticsApplicationOutputsKinesisStream | undefined;
    private _lambda;
    get lambda(): KinesisAnalyticsApplicationOutputsLambdaOutputReference;
    putLambda(value: KinesisAnalyticsApplicationOutputsLambda): void;
    resetLambda(): void;
    get lambdaInput(): KinesisAnalyticsApplicationOutputsLambda | undefined;
    private _schema;
    get schema(): KinesisAnalyticsApplicationOutputsSchemaOutputReference;
    putSchema(value: KinesisAnalyticsApplicationOutputsSchema): void;
    get schemaInput(): KinesisAnalyticsApplicationOutputsSchema | undefined;
}
export declare class KinesisAnalyticsApplicationOutputsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisAnalyticsApplicationOutputs[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisAnalyticsApplicationOutputsOutputReference;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesS3 {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#bucket_arn KinesisAnalyticsApplication#bucket_arn}
    */
    readonly bucketArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#file_key KinesisAnalyticsApplication#file_key}
    */
    readonly fileKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#role_arn KinesisAnalyticsApplication#role_arn}
    */
    readonly roleArn: string;
}
export declare function kinesisAnalyticsApplicationReferenceDataSourcesS3ToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference | KinesisAnalyticsApplicationReferenceDataSourcesS3): any;
export declare function kinesisAnalyticsApplicationReferenceDataSourcesS3ToHclTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference | KinesisAnalyticsApplicationReferenceDataSourcesS3): any;
export declare class KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesS3 | undefined;
    set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesS3 | undefined);
    private _bucketArn?;
    get bucketArn(): string;
    set bucketArn(value: string);
    get bucketArnInput(): string | undefined;
    private _fileKey?;
    get fileKey(): string;
    set fileKey(value: string);
    get fileKeyInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#mapping KinesisAnalyticsApplication#mapping}
    */
    readonly mapping?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#name KinesisAnalyticsApplication#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#sql_type KinesisAnalyticsApplication#sql_type}
    */
    readonly sqlType: string;
}
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns | cdktf.IResolvable): any;
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsToHclTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns | cdktf.IResolvable): any;
export declare class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns | cdktf.IResolvable | undefined;
    set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns | cdktf.IResolvable | undefined);
    private _mapping?;
    get mapping(): string;
    set mapping(value: string);
    resetMapping(): void;
    get mappingInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _sqlType?;
    get sqlType(): string;
    set sqlType(value: string);
    get sqlTypeInput(): string | undefined;
}
export declare class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsOutputReference;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#record_column_delimiter KinesisAnalyticsApplication#record_column_delimiter}
    */
    readonly recordColumnDelimiter: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#record_row_delimiter KinesisAnalyticsApplication#record_row_delimiter}
    */
    readonly recordRowDelimiter: string;
}
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv): any;
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvToHclTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv): any;
export declare class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv | undefined;
    set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv | undefined);
    private _recordColumnDelimiter?;
    get recordColumnDelimiter(): string;
    set recordColumnDelimiter(value: string);
    get recordColumnDelimiterInput(): string | undefined;
    private _recordRowDelimiter?;
    get recordRowDelimiter(): string;
    set recordRowDelimiter(value: string);
    get recordRowDelimiterInput(): string | undefined;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#record_row_path KinesisAnalyticsApplication#record_row_path}
    */
    readonly recordRowPath: string;
}
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson): any;
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonToHclTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson): any;
export declare class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson | undefined;
    set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson | undefined);
    private _recordRowPath?;
    get recordRowPath(): string;
    set recordRowPath(value: string);
    get recordRowPathInput(): string | undefined;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters {
    /**
    * csv block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#csv KinesisAnalyticsApplication#csv}
    */
    readonly csv?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv;
    /**
    * json block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#json KinesisAnalyticsApplication#json}
    */
    readonly json?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson;
}
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters): any;
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersToHclTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters): any;
export declare class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters | undefined;
    set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters | undefined);
    private _csv;
    get csv(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsvOutputReference;
    putCsv(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv): void;
    resetCsv(): void;
    get csvInput(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersCsv | undefined;
    private _json;
    get json(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJsonOutputReference;
    putJson(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson): void;
    resetJson(): void;
    get jsonInput(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersJson | undefined;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat {
    /**
    * mapping_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#mapping_parameters KinesisAnalyticsApplication#mapping_parameters}
    */
    readonly mappingParameters?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters;
}
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat): any;
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatToHclTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat): any;
export declare class KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat | undefined;
    set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat | undefined);
    get recordFormatType(): string;
    private _mappingParameters;
    get mappingParameters(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParametersOutputReference;
    putMappingParameters(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters): void;
    resetMappingParameters(): void;
    get mappingParametersInput(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatMappingParameters | undefined;
}
export interface KinesisAnalyticsApplicationReferenceDataSourcesSchema {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#record_encoding KinesisAnalyticsApplication#record_encoding}
    */
    readonly recordEncoding?: string;
    /**
    * record_columns block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#record_columns KinesisAnalyticsApplication#record_columns}
    */
    readonly recordColumns: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[] | cdktf.IResolvable;
    /**
    * record_format block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#record_format KinesisAnalyticsApplication#record_format}
    */
    readonly recordFormat: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat;
}
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchema): any;
export declare function kinesisAnalyticsApplicationReferenceDataSourcesSchemaToHclTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference | KinesisAnalyticsApplicationReferenceDataSourcesSchema): any;
export declare class KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationReferenceDataSourcesSchema | undefined;
    set internalValue(value: KinesisAnalyticsApplicationReferenceDataSourcesSchema | undefined);
    private _recordEncoding?;
    get recordEncoding(): string;
    set recordEncoding(value: string);
    resetRecordEncoding(): void;
    get recordEncodingInput(): string | undefined;
    private _recordColumns;
    get recordColumns(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumnsList;
    putRecordColumns(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[] | cdktf.IResolvable): void;
    get recordColumnsInput(): cdktf.IResolvable | KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordColumns[] | undefined;
    private _recordFormat;
    get recordFormat(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormatOutputReference;
    putRecordFormat(value: KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat): void;
    get recordFormatInput(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaRecordFormat | undefined;
}
export interface KinesisAnalyticsApplicationReferenceDataSources {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#table_name KinesisAnalyticsApplication#table_name}
    */
    readonly tableName: string;
    /**
    * s3 block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#s3 KinesisAnalyticsApplication#s3}
    */
    readonly s3: KinesisAnalyticsApplicationReferenceDataSourcesS3;
    /**
    * schema block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#schema KinesisAnalyticsApplication#schema}
    */
    readonly schema: KinesisAnalyticsApplicationReferenceDataSourcesSchema;
}
export declare function kinesisAnalyticsApplicationReferenceDataSourcesToTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesOutputReference | KinesisAnalyticsApplicationReferenceDataSources): any;
export declare function kinesisAnalyticsApplicationReferenceDataSourcesToHclTerraform(struct?: KinesisAnalyticsApplicationReferenceDataSourcesOutputReference | KinesisAnalyticsApplicationReferenceDataSources): any;
export declare class KinesisAnalyticsApplicationReferenceDataSourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KinesisAnalyticsApplicationReferenceDataSources | undefined;
    set internalValue(value: KinesisAnalyticsApplicationReferenceDataSources | undefined);
    get id(): string;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
    private _s3;
    get s3(): KinesisAnalyticsApplicationReferenceDataSourcesS3OutputReference;
    putS3(value: KinesisAnalyticsApplicationReferenceDataSourcesS3): void;
    get s3Input(): KinesisAnalyticsApplicationReferenceDataSourcesS3 | undefined;
    private _schema;
    get schema(): KinesisAnalyticsApplicationReferenceDataSourcesSchemaOutputReference;
    putSchema(value: KinesisAnalyticsApplicationReferenceDataSourcesSchema): void;
    get schemaInput(): KinesisAnalyticsApplicationReferenceDataSourcesSchema | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application aws_kinesis_analytics_application}
*/
export declare class KinesisAnalyticsApplication extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_kinesis_analytics_application";
    /**
    * Generates CDKTF code for importing a KinesisAnalyticsApplication resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KinesisAnalyticsApplication to import
    * @param importFromId The id of the existing KinesisAnalyticsApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KinesisAnalyticsApplication to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kinesis_analytics_application aws_kinesis_analytics_application} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisAnalyticsApplicationConfig
    */
    constructor(scope: Construct, id: string, config: KinesisAnalyticsApplicationConfig);
    get arn(): string;
    private _code?;
    get code(): string;
    set code(value: string);
    resetCode(): void;
    get codeInput(): string | undefined;
    get createTimestamp(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdateTimestamp(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _startApplication?;
    get startApplication(): boolean | cdktf.IResolvable;
    set startApplication(value: boolean | cdktf.IResolvable);
    resetStartApplication(): void;
    get startApplicationInput(): boolean | cdktf.IResolvable | undefined;
    get status(): string;
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
    get version(): number;
    private _cloudwatchLoggingOptions;
    get cloudwatchLoggingOptions(): KinesisAnalyticsApplicationCloudwatchLoggingOptionsOutputReference;
    putCloudwatchLoggingOptions(value: KinesisAnalyticsApplicationCloudwatchLoggingOptions): void;
    resetCloudwatchLoggingOptions(): void;
    get cloudwatchLoggingOptionsInput(): KinesisAnalyticsApplicationCloudwatchLoggingOptions | undefined;
    private _inputs;
    get inputs(): KinesisAnalyticsApplicationInputsOutputReference;
    putInputs(value: KinesisAnalyticsApplicationInputs): void;
    resetInputs(): void;
    get inputsInput(): KinesisAnalyticsApplicationInputs | undefined;
    private _outputs;
    get outputs(): KinesisAnalyticsApplicationOutputsList;
    putOutputs(value: KinesisAnalyticsApplicationOutputs[] | cdktf.IResolvable): void;
    resetOutputs(): void;
    get outputsInput(): cdktf.IResolvable | KinesisAnalyticsApplicationOutputs[] | undefined;
    private _referenceDataSources;
    get referenceDataSources(): KinesisAnalyticsApplicationReferenceDataSourcesOutputReference;
    putReferenceDataSources(value: KinesisAnalyticsApplicationReferenceDataSources): void;
    resetReferenceDataSources(): void;
    get referenceDataSourcesInput(): KinesisAnalyticsApplicationReferenceDataSources | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
