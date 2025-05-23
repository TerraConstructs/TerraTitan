/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerDataQualityJobDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#id SagemakerDataQualityJobDefinition#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#name SagemakerDataQualityJobDefinition#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#role_arn SagemakerDataQualityJobDefinition#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#tags SagemakerDataQualityJobDefinition#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#tags_all SagemakerDataQualityJobDefinition#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * data_quality_app_specification block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_app_specification SagemakerDataQualityJobDefinition#data_quality_app_specification}
    */
    readonly dataQualityAppSpecification: SagemakerDataQualityJobDefinitionDataQualityAppSpecification;
    /**
    * data_quality_baseline_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_baseline_config SagemakerDataQualityJobDefinition#data_quality_baseline_config}
    */
    readonly dataQualityBaselineConfig?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig;
    /**
    * data_quality_job_input block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_job_input SagemakerDataQualityJobDefinition#data_quality_job_input}
    */
    readonly dataQualityJobInput: SagemakerDataQualityJobDefinitionDataQualityJobInput;
    /**
    * data_quality_job_output_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#data_quality_job_output_config SagemakerDataQualityJobDefinition#data_quality_job_output_config}
    */
    readonly dataQualityJobOutputConfig: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig;
    /**
    * job_resources block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#job_resources SagemakerDataQualityJobDefinition#job_resources}
    */
    readonly jobResources: SagemakerDataQualityJobDefinitionJobResources;
    /**
    * network_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#network_config SagemakerDataQualityJobDefinition#network_config}
    */
    readonly networkConfig?: SagemakerDataQualityJobDefinitionNetworkConfig;
    /**
    * stopping_condition block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#stopping_condition SagemakerDataQualityJobDefinition#stopping_condition}
    */
    readonly stoppingCondition?: SagemakerDataQualityJobDefinitionStoppingCondition;
}
export interface SagemakerDataQualityJobDefinitionDataQualityAppSpecification {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#environment SagemakerDataQualityJobDefinition#environment}
    */
    readonly environment?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#image_uri SagemakerDataQualityJobDefinition#image_uri}
    */
    readonly imageUri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#post_analytics_processor_source_uri SagemakerDataQualityJobDefinition#post_analytics_processor_source_uri}
    */
    readonly postAnalyticsProcessorSourceUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#record_preprocessor_source_uri SagemakerDataQualityJobDefinition#record_preprocessor_source_uri}
    */
    readonly recordPreprocessorSourceUri?: string;
}
export declare function sagemakerDataQualityJobDefinitionDataQualityAppSpecificationToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference | SagemakerDataQualityJobDefinitionDataQualityAppSpecification): any;
export declare function sagemakerDataQualityJobDefinitionDataQualityAppSpecificationToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference | SagemakerDataQualityJobDefinitionDataQualityAppSpecification): any;
export declare class SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionDataQualityAppSpecification | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityAppSpecification | undefined);
    private _environment?;
    get environment(): {
        [key: string]: string;
    };
    set environment(value: {
        [key: string]: string;
    });
    resetEnvironment(): void;
    get environmentInput(): {
        [key: string]: string;
    } | undefined;
    private _imageUri?;
    get imageUri(): string;
    set imageUri(value: string);
    get imageUriInput(): string | undefined;
    private _postAnalyticsProcessorSourceUri?;
    get postAnalyticsProcessorSourceUri(): string;
    set postAnalyticsProcessorSourceUri(value: string);
    resetPostAnalyticsProcessorSourceUri(): void;
    get postAnalyticsProcessorSourceUriInput(): string | undefined;
    private _recordPreprocessorSourceUri?;
    get recordPreprocessorSourceUri(): string;
    set recordPreprocessorSourceUri(value: string);
    resetRecordPreprocessorSourceUri(): void;
    get recordPreprocessorSourceUriInput(): string | undefined;
}
export interface SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}
    */
    readonly s3Uri?: string;
}
export declare function sagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference | SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource): any;
export declare function sagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference | SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource): any;
export declare class SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource | undefined);
    private _s3Uri?;
    get s3Uri(): string;
    set s3Uri(value: string);
    resetS3Uri(): void;
    get s3UriInput(): string | undefined;
}
export interface SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}
    */
    readonly s3Uri?: string;
}
export declare function sagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference | SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource): any;
export declare function sagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference | SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource): any;
export declare class SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource | undefined);
    private _s3Uri?;
    get s3Uri(): string;
    set s3Uri(value: string);
    resetS3Uri(): void;
    get s3UriInput(): string | undefined;
}
export interface SagemakerDataQualityJobDefinitionDataQualityBaselineConfig {
    /**
    * constraints_resource block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#constraints_resource SagemakerDataQualityJobDefinition#constraints_resource}
    */
    readonly constraintsResource?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource;
    /**
    * statistics_resource block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#statistics_resource SagemakerDataQualityJobDefinition#statistics_resource}
    */
    readonly statisticsResource?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource;
}
export declare function sagemakerDataQualityJobDefinitionDataQualityBaselineConfigToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference | SagemakerDataQualityJobDefinitionDataQualityBaselineConfig): any;
export declare function sagemakerDataQualityJobDefinitionDataQualityBaselineConfigToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference | SagemakerDataQualityJobDefinitionDataQualityBaselineConfig): any;
export declare class SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionDataQualityBaselineConfig | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig | undefined);
    private _constraintsResource;
    get constraintsResource(): SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference;
    putConstraintsResource(value: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource): void;
    resetConstraintsResource(): void;
    get constraintsResourceInput(): SagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource | undefined;
    private _statisticsResource;
    get statisticsResource(): SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference;
    putStatisticsResource(value: SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource): void;
    resetStatisticsResource(): void;
    get statisticsResourceInput(): SagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource | undefined;
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#header SagemakerDataQualityJobDefinition#header}
    */
    readonly header?: boolean | cdktf.IResolvable;
}
export declare function sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv): any;
export declare function sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv): any;
export declare class SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv | undefined);
    private _header?;
    get header(): boolean | cdktf.IResolvable;
    set header(value: boolean | cdktf.IResolvable);
    resetHeader(): void;
    get headerInput(): boolean | cdktf.IResolvable | undefined;
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#line SagemakerDataQualityJobDefinition#line}
    */
    readonly line?: boolean | cdktf.IResolvable;
}
export declare function sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson): any;
export declare function sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson): any;
export declare class SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson | undefined);
    private _line?;
    get line(): boolean | cdktf.IResolvable;
    set line(value: boolean | cdktf.IResolvable);
    resetLine(): void;
    get lineInput(): boolean | cdktf.IResolvable | undefined;
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat {
    /**
    * csv block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#csv SagemakerDataQualityJobDefinition#csv}
    */
    readonly csv?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv;
    /**
    * json block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#json SagemakerDataQualityJobDefinition#json}
    */
    readonly json?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson;
}
export declare function sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat): any;
export declare function sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat): any;
export declare class SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat | undefined);
    private _csv;
    get csv(): SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference;
    putCsv(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv): void;
    resetCsv(): void;
    get csvInput(): SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv | undefined;
    private _json;
    get json(): SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference;
    putJson(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson): void;
    resetJson(): void;
    get jsonInput(): SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson | undefined;
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#data_captured_destination_s3_uri SagemakerDataQualityJobDefinition#data_captured_destination_s3_uri}
    */
    readonly dataCapturedDestinationS3Uri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}
    */
    readonly localPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}
    */
    readonly s3DataDistributionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}
    */
    readonly s3InputMode?: string;
    /**
    * dataset_format block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#dataset_format SagemakerDataQualityJobDefinition#dataset_format}
    */
    readonly datasetFormat: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat;
}
export declare function sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput): any;
export declare function sagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput): any;
export declare class SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput | undefined);
    private _dataCapturedDestinationS3Uri?;
    get dataCapturedDestinationS3Uri(): string;
    set dataCapturedDestinationS3Uri(value: string);
    get dataCapturedDestinationS3UriInput(): string | undefined;
    private _localPath?;
    get localPath(): string;
    set localPath(value: string);
    resetLocalPath(): void;
    get localPathInput(): string | undefined;
    private _s3DataDistributionType?;
    get s3DataDistributionType(): string;
    set s3DataDistributionType(value: string);
    resetS3DataDistributionType(): void;
    get s3DataDistributionTypeInput(): string | undefined;
    private _s3InputMode?;
    get s3InputMode(): string;
    set s3InputMode(value: string);
    resetS3InputMode(): void;
    get s3InputModeInput(): string | undefined;
    private _datasetFormat;
    get datasetFormat(): SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference;
    putDatasetFormat(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat): void;
    get datasetFormatInput(): SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat | undefined;
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_name SagemakerDataQualityJobDefinition#endpoint_name}
    */
    readonly endpointName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}
    */
    readonly localPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#s3_data_distribution_type SagemakerDataQualityJobDefinition#s3_data_distribution_type}
    */
    readonly s3DataDistributionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#s3_input_mode SagemakerDataQualityJobDefinition#s3_input_mode}
    */
    readonly s3InputMode?: string;
}
export declare function sagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput): any;
export declare function sagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput): any;
export declare class SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput | undefined);
    private _endpointName?;
    get endpointName(): string;
    set endpointName(value: string);
    get endpointNameInput(): string | undefined;
    private _localPath?;
    get localPath(): string;
    set localPath(value: string);
    resetLocalPath(): void;
    get localPathInput(): string | undefined;
    private _s3DataDistributionType?;
    get s3DataDistributionType(): string;
    set s3DataDistributionType(value: string);
    resetS3DataDistributionType(): void;
    get s3DataDistributionTypeInput(): string | undefined;
    private _s3InputMode?;
    get s3InputMode(): string;
    set s3InputMode(value: string);
    resetS3InputMode(): void;
    get s3InputModeInput(): string | undefined;
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobInput {
    /**
    * batch_transform_input block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#batch_transform_input SagemakerDataQualityJobDefinition#batch_transform_input}
    */
    readonly batchTransformInput?: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput;
    /**
    * endpoint_input block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#endpoint_input SagemakerDataQualityJobDefinition#endpoint_input}
    */
    readonly endpointInput?: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput;
}
export declare function sagemakerDataQualityJobDefinitionDataQualityJobInputToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobInput): any;
export declare function sagemakerDataQualityJobDefinitionDataQualityJobInputToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobInput): any;
export declare class SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobInput | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobInput | undefined);
    private _batchTransformInput;
    get batchTransformInput(): SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference;
    putBatchTransformInput(value: SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput): void;
    resetBatchTransformInput(): void;
    get batchTransformInputInput(): SagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput | undefined;
    private _endpointInput;
    get endpointInput(): SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference;
    putEndpointInput(value: SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput): void;
    resetEndpointInput(): void;
    get endpointInputInput(): SagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput | undefined;
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#local_path SagemakerDataQualityJobDefinition#local_path}
    */
    readonly localPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#s3_upload_mode SagemakerDataQualityJobDefinition#s3_upload_mode}
    */
    readonly s3UploadMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#s3_uri SagemakerDataQualityJobDefinition#s3_uri}
    */
    readonly s3Uri: string;
}
export declare function sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output): any;
export declare function sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output): any;
export declare class SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output | undefined);
    private _localPath?;
    get localPath(): string;
    set localPath(value: string);
    resetLocalPath(): void;
    get localPathInput(): string | undefined;
    private _s3UploadMode?;
    get s3UploadMode(): string;
    set s3UploadMode(value: string);
    resetS3UploadMode(): void;
    get s3UploadModeInput(): string | undefined;
    private _s3Uri?;
    get s3Uri(): string;
    set s3Uri(value: string);
    get s3UriInput(): string | undefined;
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs {
    /**
    * s3_output block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#s3_output SagemakerDataQualityJobDefinition#s3_output}
    */
    readonly s3Output: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output;
}
export declare function sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs): any;
export declare function sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs): any;
export declare class SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs | undefined);
    private _s3Output;
    get s3Output(): SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference;
    putS3Output(value: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output): void;
    get s3OutputInput(): SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output | undefined;
}
export interface SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#kms_key_id SagemakerDataQualityJobDefinition#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * monitoring_outputs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#monitoring_outputs SagemakerDataQualityJobDefinition#monitoring_outputs}
    */
    readonly monitoringOutputs: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs;
}
export declare function sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigToTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig): any;
export declare function sagemakerDataQualityJobDefinitionDataQualityJobOutputConfigToHclTerraform(struct?: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference | SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig): any;
export declare class SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _monitoringOutputs;
    get monitoringOutputs(): SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference;
    putMonitoringOutputs(value: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs): void;
    get monitoringOutputsInput(): SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs | undefined;
}
export interface SagemakerDataQualityJobDefinitionJobResourcesClusterConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#instance_count SagemakerDataQualityJobDefinition#instance_count}
    */
    readonly instanceCount: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#instance_type SagemakerDataQualityJobDefinition#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#volume_kms_key_id SagemakerDataQualityJobDefinition#volume_kms_key_id}
    */
    readonly volumeKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#volume_size_in_gb SagemakerDataQualityJobDefinition#volume_size_in_gb}
    */
    readonly volumeSizeInGb: number;
}
export declare function sagemakerDataQualityJobDefinitionJobResourcesClusterConfigToTerraform(struct?: SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference | SagemakerDataQualityJobDefinitionJobResourcesClusterConfig): any;
export declare function sagemakerDataQualityJobDefinitionJobResourcesClusterConfigToHclTerraform(struct?: SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference | SagemakerDataQualityJobDefinitionJobResourcesClusterConfig): any;
export declare class SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionJobResourcesClusterConfig | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionJobResourcesClusterConfig | undefined);
    private _instanceCount?;
    get instanceCount(): number;
    set instanceCount(value: number);
    get instanceCountInput(): number | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string | undefined;
    private _volumeKmsKeyId?;
    get volumeKmsKeyId(): string;
    set volumeKmsKeyId(value: string);
    resetVolumeKmsKeyId(): void;
    get volumeKmsKeyIdInput(): string | undefined;
    private _volumeSizeInGb?;
    get volumeSizeInGb(): number;
    set volumeSizeInGb(value: number);
    get volumeSizeInGbInput(): number | undefined;
}
export interface SagemakerDataQualityJobDefinitionJobResources {
    /**
    * cluster_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#cluster_config SagemakerDataQualityJobDefinition#cluster_config}
    */
    readonly clusterConfig: SagemakerDataQualityJobDefinitionJobResourcesClusterConfig;
}
export declare function sagemakerDataQualityJobDefinitionJobResourcesToTerraform(struct?: SagemakerDataQualityJobDefinitionJobResourcesOutputReference | SagemakerDataQualityJobDefinitionJobResources): any;
export declare function sagemakerDataQualityJobDefinitionJobResourcesToHclTerraform(struct?: SagemakerDataQualityJobDefinitionJobResourcesOutputReference | SagemakerDataQualityJobDefinitionJobResources): any;
export declare class SagemakerDataQualityJobDefinitionJobResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionJobResources | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionJobResources | undefined);
    private _clusterConfig;
    get clusterConfig(): SagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference;
    putClusterConfig(value: SagemakerDataQualityJobDefinitionJobResourcesClusterConfig): void;
    get clusterConfigInput(): SagemakerDataQualityJobDefinitionJobResourcesClusterConfig | undefined;
}
export interface SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#security_group_ids SagemakerDataQualityJobDefinition#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#subnets SagemakerDataQualityJobDefinition#subnets}
    */
    readonly subnets: string[];
}
export declare function sagemakerDataQualityJobDefinitionNetworkConfigVpcConfigToTerraform(struct?: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference | SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig): any;
export declare function sagemakerDataQualityJobDefinitionNetworkConfigVpcConfigToHclTerraform(struct?: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference | SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig): any;
export declare class SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    get subnetsInput(): string[] | undefined;
}
export interface SagemakerDataQualityJobDefinitionNetworkConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#enable_inter_container_traffic_encryption SagemakerDataQualityJobDefinition#enable_inter_container_traffic_encryption}
    */
    readonly enableInterContainerTrafficEncryption?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#enable_network_isolation SagemakerDataQualityJobDefinition#enable_network_isolation}
    */
    readonly enableNetworkIsolation?: boolean | cdktf.IResolvable;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#vpc_config SagemakerDataQualityJobDefinition#vpc_config}
    */
    readonly vpcConfig?: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig;
}
export declare function sagemakerDataQualityJobDefinitionNetworkConfigToTerraform(struct?: SagemakerDataQualityJobDefinitionNetworkConfigOutputReference | SagemakerDataQualityJobDefinitionNetworkConfig): any;
export declare function sagemakerDataQualityJobDefinitionNetworkConfigToHclTerraform(struct?: SagemakerDataQualityJobDefinitionNetworkConfigOutputReference | SagemakerDataQualityJobDefinitionNetworkConfig): any;
export declare class SagemakerDataQualityJobDefinitionNetworkConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionNetworkConfig | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionNetworkConfig | undefined);
    private _enableInterContainerTrafficEncryption?;
    get enableInterContainerTrafficEncryption(): boolean | cdktf.IResolvable;
    set enableInterContainerTrafficEncryption(value: boolean | cdktf.IResolvable);
    resetEnableInterContainerTrafficEncryption(): void;
    get enableInterContainerTrafficEncryptionInput(): boolean | cdktf.IResolvable | undefined;
    private _enableNetworkIsolation?;
    get enableNetworkIsolation(): boolean | cdktf.IResolvable;
    set enableNetworkIsolation(value: boolean | cdktf.IResolvable);
    resetEnableNetworkIsolation(): void;
    get enableNetworkIsolationInput(): boolean | cdktf.IResolvable | undefined;
    private _vpcConfig;
    get vpcConfig(): SagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference;
    putVpcConfig(value: SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): SagemakerDataQualityJobDefinitionNetworkConfigVpcConfig | undefined;
}
export interface SagemakerDataQualityJobDefinitionStoppingCondition {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#max_runtime_in_seconds SagemakerDataQualityJobDefinition#max_runtime_in_seconds}
    */
    readonly maxRuntimeInSeconds?: number;
}
export declare function sagemakerDataQualityJobDefinitionStoppingConditionToTerraform(struct?: SagemakerDataQualityJobDefinitionStoppingConditionOutputReference | SagemakerDataQualityJobDefinitionStoppingCondition): any;
export declare function sagemakerDataQualityJobDefinitionStoppingConditionToHclTerraform(struct?: SagemakerDataQualityJobDefinitionStoppingConditionOutputReference | SagemakerDataQualityJobDefinitionStoppingCondition): any;
export declare class SagemakerDataQualityJobDefinitionStoppingConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerDataQualityJobDefinitionStoppingCondition | undefined;
    set internalValue(value: SagemakerDataQualityJobDefinitionStoppingCondition | undefined);
    private _maxRuntimeInSeconds?;
    get maxRuntimeInSeconds(): number;
    set maxRuntimeInSeconds(value: number);
    resetMaxRuntimeInSeconds(): void;
    get maxRuntimeInSecondsInput(): number | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition aws_sagemaker_data_quality_job_definition}
*/
export declare class SagemakerDataQualityJobDefinition extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_data_quality_job_definition";
    /**
    * Generates CDKTF code for importing a SagemakerDataQualityJobDefinition resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerDataQualityJobDefinition to import
    * @param importFromId The id of the existing SagemakerDataQualityJobDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerDataQualityJobDefinition to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_data_quality_job_definition aws_sagemaker_data_quality_job_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerDataQualityJobDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerDataQualityJobDefinitionConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
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
    private _dataQualityAppSpecification;
    get dataQualityAppSpecification(): SagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference;
    putDataQualityAppSpecification(value: SagemakerDataQualityJobDefinitionDataQualityAppSpecification): void;
    get dataQualityAppSpecificationInput(): SagemakerDataQualityJobDefinitionDataQualityAppSpecification | undefined;
    private _dataQualityBaselineConfig;
    get dataQualityBaselineConfig(): SagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference;
    putDataQualityBaselineConfig(value: SagemakerDataQualityJobDefinitionDataQualityBaselineConfig): void;
    resetDataQualityBaselineConfig(): void;
    get dataQualityBaselineConfigInput(): SagemakerDataQualityJobDefinitionDataQualityBaselineConfig | undefined;
    private _dataQualityJobInput;
    get dataQualityJobInput(): SagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference;
    putDataQualityJobInput(value: SagemakerDataQualityJobDefinitionDataQualityJobInput): void;
    get dataQualityJobInputInput(): SagemakerDataQualityJobDefinitionDataQualityJobInput | undefined;
    private _dataQualityJobOutputConfig;
    get dataQualityJobOutputConfig(): SagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference;
    putDataQualityJobOutputConfig(value: SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig): void;
    get dataQualityJobOutputConfigInput(): SagemakerDataQualityJobDefinitionDataQualityJobOutputConfig | undefined;
    private _jobResources;
    get jobResources(): SagemakerDataQualityJobDefinitionJobResourcesOutputReference;
    putJobResources(value: SagemakerDataQualityJobDefinitionJobResources): void;
    get jobResourcesInput(): SagemakerDataQualityJobDefinitionJobResources | undefined;
    private _networkConfig;
    get networkConfig(): SagemakerDataQualityJobDefinitionNetworkConfigOutputReference;
    putNetworkConfig(value: SagemakerDataQualityJobDefinitionNetworkConfig): void;
    resetNetworkConfig(): void;
    get networkConfigInput(): SagemakerDataQualityJobDefinitionNetworkConfig | undefined;
    private _stoppingCondition;
    get stoppingCondition(): SagemakerDataQualityJobDefinitionStoppingConditionOutputReference;
    putStoppingCondition(value: SagemakerDataQualityJobDefinitionStoppingCondition): void;
    resetStoppingCondition(): void;
    get stoppingConditionInput(): SagemakerDataQualityJobDefinitionStoppingCondition | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
