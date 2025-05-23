/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerEndpointConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#id SagemakerEndpointConfiguration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#kms_key_arn SagemakerEndpointConfiguration#kms_key_arn}
    */
    readonly kmsKeyArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#name SagemakerEndpointConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#name_prefix SagemakerEndpointConfiguration#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#tags SagemakerEndpointConfiguration#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#tags_all SagemakerEndpointConfiguration#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * async_inference_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#async_inference_config SagemakerEndpointConfiguration#async_inference_config}
    */
    readonly asyncInferenceConfig?: SagemakerEndpointConfigurationAsyncInferenceConfig;
    /**
    * data_capture_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#data_capture_config SagemakerEndpointConfiguration#data_capture_config}
    */
    readonly dataCaptureConfig?: SagemakerEndpointConfigurationDataCaptureConfig;
    /**
    * production_variants block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#production_variants SagemakerEndpointConfiguration#production_variants}
    */
    readonly productionVariants: SagemakerEndpointConfigurationProductionVariants[] | cdktf.IResolvable;
    /**
    * shadow_production_variants block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#shadow_production_variants SagemakerEndpointConfiguration#shadow_production_variants}
    */
    readonly shadowProductionVariants?: SagemakerEndpointConfigurationShadowProductionVariants[] | cdktf.IResolvable;
}
export interface SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#max_concurrent_invocations_per_instance SagemakerEndpointConfiguration#max_concurrent_invocations_per_instance}
    */
    readonly maxConcurrentInvocationsPerInstance?: number;
}
export declare function sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig): any;
export declare function sagemakerEndpointConfigurationAsyncInferenceConfigClientConfigToHclTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig): any;
export declare class SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig | undefined;
    set internalValue(value: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig | undefined);
    private _maxConcurrentInvocationsPerInstance?;
    get maxConcurrentInvocationsPerInstance(): number;
    set maxConcurrentInvocationsPerInstance(value: number);
    resetMaxConcurrentInvocationsPerInstance(): void;
    get maxConcurrentInvocationsPerInstanceInput(): number | undefined;
}
export interface SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#error_topic SagemakerEndpointConfiguration#error_topic}
    */
    readonly errorTopic?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#include_inference_response_in SagemakerEndpointConfiguration#include_inference_response_in}
    */
    readonly includeInferenceResponseIn?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#success_topic SagemakerEndpointConfiguration#success_topic}
    */
    readonly successTopic?: string;
}
export declare function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig): any;
export declare function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigToHclTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig): any;
export declare class SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig | undefined;
    set internalValue(value: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig | undefined);
    private _errorTopic?;
    get errorTopic(): string;
    set errorTopic(value: string);
    resetErrorTopic(): void;
    get errorTopicInput(): string | undefined;
    private _includeInferenceResponseIn?;
    get includeInferenceResponseIn(): string[];
    set includeInferenceResponseIn(value: string[]);
    resetIncludeInferenceResponseIn(): void;
    get includeInferenceResponseInInput(): string[] | undefined;
    private _successTopic?;
    get successTopic(): string;
    set successTopic(value: string);
    resetSuccessTopic(): void;
    get successTopicInput(): string | undefined;
}
export interface SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#s3_failure_path SagemakerEndpointConfiguration#s3_failure_path}
    */
    readonly s3FailurePath?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#s3_output_path SagemakerEndpointConfiguration#s3_output_path}
    */
    readonly s3OutputPath: string;
    /**
    * notification_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#notification_config SagemakerEndpointConfiguration#notification_config}
    */
    readonly notificationConfig?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig;
}
export declare function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig): any;
export declare function sagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigToHclTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig): any;
export declare class SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig | undefined;
    set internalValue(value: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _s3FailurePath?;
    get s3FailurePath(): string;
    set s3FailurePath(value: string);
    resetS3FailurePath(): void;
    get s3FailurePathInput(): string | undefined;
    private _s3OutputPath?;
    get s3OutputPath(): string;
    set s3OutputPath(value: string);
    get s3OutputPathInput(): string | undefined;
    private _notificationConfig;
    get notificationConfig(): SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfigOutputReference;
    putNotificationConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig): void;
    resetNotificationConfig(): void;
    get notificationConfigInput(): SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigNotificationConfig | undefined;
}
export interface SagemakerEndpointConfigurationAsyncInferenceConfig {
    /**
    * client_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#client_config SagemakerEndpointConfiguration#client_config}
    */
    readonly clientConfig?: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig;
    /**
    * output_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#output_config SagemakerEndpointConfiguration#output_config}
    */
    readonly outputConfig: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig;
}
export declare function sagemakerEndpointConfigurationAsyncInferenceConfigToTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfig): any;
export declare function sagemakerEndpointConfigurationAsyncInferenceConfigToHclTerraform(struct?: SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference | SagemakerEndpointConfigurationAsyncInferenceConfig): any;
export declare class SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointConfigurationAsyncInferenceConfig | undefined;
    set internalValue(value: SagemakerEndpointConfigurationAsyncInferenceConfig | undefined);
    private _clientConfig;
    get clientConfig(): SagemakerEndpointConfigurationAsyncInferenceConfigClientConfigOutputReference;
    putClientConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig): void;
    resetClientConfig(): void;
    get clientConfigInput(): SagemakerEndpointConfigurationAsyncInferenceConfigClientConfig | undefined;
    private _outputConfig;
    get outputConfig(): SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfigOutputReference;
    putOutputConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig): void;
    get outputConfigInput(): SagemakerEndpointConfigurationAsyncInferenceConfigOutputConfig | undefined;
}
export interface SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#csv_content_types SagemakerEndpointConfiguration#csv_content_types}
    */
    readonly csvContentTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#json_content_types SagemakerEndpointConfiguration#json_content_types}
    */
    readonly jsonContentTypes?: string[];
}
export declare function sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference | SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader): any;
export declare function sagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderToHclTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference | SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader): any;
export declare class SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader | undefined;
    set internalValue(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader | undefined);
    private _csvContentTypes?;
    get csvContentTypes(): string[];
    set csvContentTypes(value: string[]);
    resetCsvContentTypes(): void;
    get csvContentTypesInput(): string[] | undefined;
    private _jsonContentTypes?;
    get jsonContentTypes(): string[];
    set jsonContentTypes(value: string[]);
    resetJsonContentTypes(): void;
    get jsonContentTypesInput(): string[] | undefined;
}
export interface SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#capture_mode SagemakerEndpointConfiguration#capture_mode}
    */
    readonly captureMode: string;
}
export declare function sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions | cdktf.IResolvable): any;
export declare function sagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsToHclTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions | cdktf.IResolvable): any;
export declare class SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions | cdktf.IResolvable | undefined);
    private _captureMode?;
    get captureMode(): string;
    set captureMode(value: string);
    get captureModeInput(): string | undefined;
}
export declare class SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsOutputReference;
}
export interface SagemakerEndpointConfigurationDataCaptureConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}
    */
    readonly destinationS3Uri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#enable_capture SagemakerEndpointConfiguration#enable_capture}
    */
    readonly enableCapture?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#initial_sampling_percentage SagemakerEndpointConfiguration#initial_sampling_percentage}
    */
    readonly initialSamplingPercentage: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * capture_content_type_header block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#capture_content_type_header SagemakerEndpointConfiguration#capture_content_type_header}
    */
    readonly captureContentTypeHeader?: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader;
    /**
    * capture_options block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#capture_options SagemakerEndpointConfiguration#capture_options}
    */
    readonly captureOptions: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[] | cdktf.IResolvable;
}
export declare function sagemakerEndpointConfigurationDataCaptureConfigToTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigOutputReference | SagemakerEndpointConfigurationDataCaptureConfig): any;
export declare function sagemakerEndpointConfigurationDataCaptureConfigToHclTerraform(struct?: SagemakerEndpointConfigurationDataCaptureConfigOutputReference | SagemakerEndpointConfigurationDataCaptureConfig): any;
export declare class SagemakerEndpointConfigurationDataCaptureConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointConfigurationDataCaptureConfig | undefined;
    set internalValue(value: SagemakerEndpointConfigurationDataCaptureConfig | undefined);
    private _destinationS3Uri?;
    get destinationS3Uri(): string;
    set destinationS3Uri(value: string);
    get destinationS3UriInput(): string | undefined;
    private _enableCapture?;
    get enableCapture(): boolean | cdktf.IResolvable;
    set enableCapture(value: boolean | cdktf.IResolvable);
    resetEnableCapture(): void;
    get enableCaptureInput(): boolean | cdktf.IResolvable | undefined;
    private _initialSamplingPercentage?;
    get initialSamplingPercentage(): number;
    set initialSamplingPercentage(value: number);
    get initialSamplingPercentageInput(): number | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _captureContentTypeHeader;
    get captureContentTypeHeader(): SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeaderOutputReference;
    putCaptureContentTypeHeader(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader): void;
    resetCaptureContentTypeHeader(): void;
    get captureContentTypeHeaderInput(): SagemakerEndpointConfigurationDataCaptureConfigCaptureContentTypeHeader | undefined;
    private _captureOptions;
    get captureOptions(): SagemakerEndpointConfigurationDataCaptureConfigCaptureOptionsList;
    putCaptureOptions(value: SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[] | cdktf.IResolvable): void;
    get captureOptionsInput(): cdktf.IResolvable | SagemakerEndpointConfigurationDataCaptureConfigCaptureOptions[] | undefined;
}
export interface SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}
    */
    readonly destinationS3Uri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}
    */
    readonly kmsKeyId?: string;
}
export declare function sagemakerEndpointConfigurationProductionVariantsCoreDumpConfigToTerraform(struct?: SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference | SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig): any;
export declare function sagemakerEndpointConfigurationProductionVariantsCoreDumpConfigToHclTerraform(struct?: SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference | SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig): any;
export declare class SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig | undefined;
    set internalValue(value: SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig | undefined);
    private _destinationS3Uri?;
    get destinationS3Uri(): string;
    set destinationS3Uri(value: string);
    get destinationS3UriInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
}
export interface SagemakerEndpointConfigurationProductionVariantsManagedInstanceScaling {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#max_instance_count SagemakerEndpointConfiguration#max_instance_count}
    */
    readonly maxInstanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#min_instance_count SagemakerEndpointConfiguration#min_instance_count}
    */
    readonly minInstanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#status SagemakerEndpointConfiguration#status}
    */
    readonly status?: string;
}
export declare function sagemakerEndpointConfigurationProductionVariantsManagedInstanceScalingToTerraform(struct?: SagemakerEndpointConfigurationProductionVariantsManagedInstanceScalingOutputReference | SagemakerEndpointConfigurationProductionVariantsManagedInstanceScaling): any;
export declare function sagemakerEndpointConfigurationProductionVariantsManagedInstanceScalingToHclTerraform(struct?: SagemakerEndpointConfigurationProductionVariantsManagedInstanceScalingOutputReference | SagemakerEndpointConfigurationProductionVariantsManagedInstanceScaling): any;
export declare class SagemakerEndpointConfigurationProductionVariantsManagedInstanceScalingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointConfigurationProductionVariantsManagedInstanceScaling | undefined;
    set internalValue(value: SagemakerEndpointConfigurationProductionVariantsManagedInstanceScaling | undefined);
    private _maxInstanceCount?;
    get maxInstanceCount(): number;
    set maxInstanceCount(value: number);
    resetMaxInstanceCount(): void;
    get maxInstanceCountInput(): number | undefined;
    private _minInstanceCount?;
    get minInstanceCount(): number;
    set minInstanceCount(value: number);
    resetMinInstanceCount(): void;
    get minInstanceCountInput(): number | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface SagemakerEndpointConfigurationProductionVariantsRoutingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#routing_strategy SagemakerEndpointConfiguration#routing_strategy}
    */
    readonly routingStrategy: string;
}
export declare function sagemakerEndpointConfigurationProductionVariantsRoutingConfigToTerraform(struct?: SagemakerEndpointConfigurationProductionVariantsRoutingConfig | cdktf.IResolvable): any;
export declare function sagemakerEndpointConfigurationProductionVariantsRoutingConfigToHclTerraform(struct?: SagemakerEndpointConfigurationProductionVariantsRoutingConfig | cdktf.IResolvable): any;
export declare class SagemakerEndpointConfigurationProductionVariantsRoutingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerEndpointConfigurationProductionVariantsRoutingConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerEndpointConfigurationProductionVariantsRoutingConfig | cdktf.IResolvable | undefined);
    private _routingStrategy?;
    get routingStrategy(): string;
    set routingStrategy(value: string);
    get routingStrategyInput(): string | undefined;
}
export declare class SagemakerEndpointConfigurationProductionVariantsRoutingConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerEndpointConfigurationProductionVariantsRoutingConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerEndpointConfigurationProductionVariantsRoutingConfigOutputReference;
}
export interface SagemakerEndpointConfigurationProductionVariantsServerlessConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#max_concurrency SagemakerEndpointConfiguration#max_concurrency}
    */
    readonly maxConcurrency: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#memory_size_in_mb SagemakerEndpointConfiguration#memory_size_in_mb}
    */
    readonly memorySizeInMb: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#provisioned_concurrency SagemakerEndpointConfiguration#provisioned_concurrency}
    */
    readonly provisionedConcurrency?: number;
}
export declare function sagemakerEndpointConfigurationProductionVariantsServerlessConfigToTerraform(struct?: SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference | SagemakerEndpointConfigurationProductionVariantsServerlessConfig): any;
export declare function sagemakerEndpointConfigurationProductionVariantsServerlessConfigToHclTerraform(struct?: SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference | SagemakerEndpointConfigurationProductionVariantsServerlessConfig): any;
export declare class SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointConfigurationProductionVariantsServerlessConfig | undefined;
    set internalValue(value: SagemakerEndpointConfigurationProductionVariantsServerlessConfig | undefined);
    private _maxConcurrency?;
    get maxConcurrency(): number;
    set maxConcurrency(value: number);
    get maxConcurrencyInput(): number | undefined;
    private _memorySizeInMb?;
    get memorySizeInMb(): number;
    set memorySizeInMb(value: number);
    get memorySizeInMbInput(): number | undefined;
    private _provisionedConcurrency?;
    get provisionedConcurrency(): number;
    set provisionedConcurrency(value: number);
    resetProvisionedConcurrency(): void;
    get provisionedConcurrencyInput(): number | undefined;
}
export interface SagemakerEndpointConfigurationProductionVariants {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}
    */
    readonly acceleratorType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfiguration#container_startup_health_check_timeout_in_seconds}
    */
    readonly containerStartupHealthCheckTimeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#enable_ssm_access SagemakerEndpointConfiguration#enable_ssm_access}
    */
    readonly enableSsmAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#inference_ami_version SagemakerEndpointConfiguration#inference_ami_version}
    */
    readonly inferenceAmiVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}
    */
    readonly initialInstanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}
    */
    readonly initialVariantWeight?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds SagemakerEndpointConfiguration#model_data_download_timeout_in_seconds}
    */
    readonly modelDataDownloadTimeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}
    */
    readonly modelName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}
    */
    readonly variantName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#volume_size_in_gb SagemakerEndpointConfiguration#volume_size_in_gb}
    */
    readonly volumeSizeInGb?: number;
    /**
    * core_dump_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#core_dump_config SagemakerEndpointConfiguration#core_dump_config}
    */
    readonly coreDumpConfig?: SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig;
    /**
    * managed_instance_scaling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#managed_instance_scaling SagemakerEndpointConfiguration#managed_instance_scaling}
    */
    readonly managedInstanceScaling?: SagemakerEndpointConfigurationProductionVariantsManagedInstanceScaling;
    /**
    * routing_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#routing_config SagemakerEndpointConfiguration#routing_config}
    */
    readonly routingConfig?: SagemakerEndpointConfigurationProductionVariantsRoutingConfig[] | cdktf.IResolvable;
    /**
    * serverless_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#serverless_config SagemakerEndpointConfiguration#serverless_config}
    */
    readonly serverlessConfig?: SagemakerEndpointConfigurationProductionVariantsServerlessConfig;
}
export declare function sagemakerEndpointConfigurationProductionVariantsToTerraform(struct?: SagemakerEndpointConfigurationProductionVariants | cdktf.IResolvable): any;
export declare function sagemakerEndpointConfigurationProductionVariantsToHclTerraform(struct?: SagemakerEndpointConfigurationProductionVariants | cdktf.IResolvable): any;
export declare class SagemakerEndpointConfigurationProductionVariantsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerEndpointConfigurationProductionVariants | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerEndpointConfigurationProductionVariants | cdktf.IResolvable | undefined);
    private _acceleratorType?;
    get acceleratorType(): string;
    set acceleratorType(value: string);
    resetAcceleratorType(): void;
    get acceleratorTypeInput(): string | undefined;
    private _containerStartupHealthCheckTimeoutInSeconds?;
    get containerStartupHealthCheckTimeoutInSeconds(): number;
    set containerStartupHealthCheckTimeoutInSeconds(value: number);
    resetContainerStartupHealthCheckTimeoutInSeconds(): void;
    get containerStartupHealthCheckTimeoutInSecondsInput(): number | undefined;
    private _enableSsmAccess?;
    get enableSsmAccess(): boolean | cdktf.IResolvable;
    set enableSsmAccess(value: boolean | cdktf.IResolvable);
    resetEnableSsmAccess(): void;
    get enableSsmAccessInput(): boolean | cdktf.IResolvable | undefined;
    private _inferenceAmiVersion?;
    get inferenceAmiVersion(): string;
    set inferenceAmiVersion(value: string);
    resetInferenceAmiVersion(): void;
    get inferenceAmiVersionInput(): string | undefined;
    private _initialInstanceCount?;
    get initialInstanceCount(): number;
    set initialInstanceCount(value: number);
    resetInitialInstanceCount(): void;
    get initialInstanceCountInput(): number | undefined;
    private _initialVariantWeight?;
    get initialVariantWeight(): number;
    set initialVariantWeight(value: number);
    resetInitialVariantWeight(): void;
    get initialVariantWeightInput(): number | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _modelDataDownloadTimeoutInSeconds?;
    get modelDataDownloadTimeoutInSeconds(): number;
    set modelDataDownloadTimeoutInSeconds(value: number);
    resetModelDataDownloadTimeoutInSeconds(): void;
    get modelDataDownloadTimeoutInSecondsInput(): number | undefined;
    private _modelName?;
    get modelName(): string;
    set modelName(value: string);
    get modelNameInput(): string | undefined;
    private _variantName?;
    get variantName(): string;
    set variantName(value: string);
    resetVariantName(): void;
    get variantNameInput(): string | undefined;
    private _volumeSizeInGb?;
    get volumeSizeInGb(): number;
    set volumeSizeInGb(value: number);
    resetVolumeSizeInGb(): void;
    get volumeSizeInGbInput(): number | undefined;
    private _coreDumpConfig;
    get coreDumpConfig(): SagemakerEndpointConfigurationProductionVariantsCoreDumpConfigOutputReference;
    putCoreDumpConfig(value: SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig): void;
    resetCoreDumpConfig(): void;
    get coreDumpConfigInput(): SagemakerEndpointConfigurationProductionVariantsCoreDumpConfig | undefined;
    private _managedInstanceScaling;
    get managedInstanceScaling(): SagemakerEndpointConfigurationProductionVariantsManagedInstanceScalingOutputReference;
    putManagedInstanceScaling(value: SagemakerEndpointConfigurationProductionVariantsManagedInstanceScaling): void;
    resetManagedInstanceScaling(): void;
    get managedInstanceScalingInput(): SagemakerEndpointConfigurationProductionVariantsManagedInstanceScaling | undefined;
    private _routingConfig;
    get routingConfig(): SagemakerEndpointConfigurationProductionVariantsRoutingConfigList;
    putRoutingConfig(value: SagemakerEndpointConfigurationProductionVariantsRoutingConfig[] | cdktf.IResolvable): void;
    resetRoutingConfig(): void;
    get routingConfigInput(): cdktf.IResolvable | SagemakerEndpointConfigurationProductionVariantsRoutingConfig[] | undefined;
    private _serverlessConfig;
    get serverlessConfig(): SagemakerEndpointConfigurationProductionVariantsServerlessConfigOutputReference;
    putServerlessConfig(value: SagemakerEndpointConfigurationProductionVariantsServerlessConfig): void;
    resetServerlessConfig(): void;
    get serverlessConfigInput(): SagemakerEndpointConfigurationProductionVariantsServerlessConfig | undefined;
}
export declare class SagemakerEndpointConfigurationProductionVariantsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerEndpointConfigurationProductionVariants[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerEndpointConfigurationProductionVariantsOutputReference;
}
export interface SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#destination_s3_uri SagemakerEndpointConfiguration#destination_s3_uri}
    */
    readonly destinationS3Uri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#kms_key_id SagemakerEndpointConfiguration#kms_key_id}
    */
    readonly kmsKeyId: string;
}
export declare function sagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigToTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference | SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig): any;
export declare function sagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigToHclTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference | SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig): any;
export declare class SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig | undefined;
    set internalValue(value: SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig | undefined);
    private _destinationS3Uri?;
    get destinationS3Uri(): string;
    set destinationS3Uri(value: string);
    get destinationS3UriInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    get kmsKeyIdInput(): string | undefined;
}
export interface SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScaling {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#max_instance_count SagemakerEndpointConfiguration#max_instance_count}
    */
    readonly maxInstanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#min_instance_count SagemakerEndpointConfiguration#min_instance_count}
    */
    readonly minInstanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#status SagemakerEndpointConfiguration#status}
    */
    readonly status?: string;
}
export declare function sagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScalingToTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScalingOutputReference | SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScaling): any;
export declare function sagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScalingToHclTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScalingOutputReference | SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScaling): any;
export declare class SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScalingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScaling | undefined;
    set internalValue(value: SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScaling | undefined);
    private _maxInstanceCount?;
    get maxInstanceCount(): number;
    set maxInstanceCount(value: number);
    resetMaxInstanceCount(): void;
    get maxInstanceCountInput(): number | undefined;
    private _minInstanceCount?;
    get minInstanceCount(): number;
    set minInstanceCount(value: number);
    resetMinInstanceCount(): void;
    get minInstanceCountInput(): number | undefined;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
}
export interface SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#routing_strategy SagemakerEndpointConfiguration#routing_strategy}
    */
    readonly routingStrategy: string;
}
export declare function sagemakerEndpointConfigurationShadowProductionVariantsRoutingConfigToTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig | cdktf.IResolvable): any;
export declare function sagemakerEndpointConfigurationShadowProductionVariantsRoutingConfigToHclTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig | cdktf.IResolvable): any;
export declare class SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig | cdktf.IResolvable | undefined);
    private _routingStrategy?;
    get routingStrategy(): string;
    set routingStrategy(value: string);
    get routingStrategyInput(): string | undefined;
}
export declare class SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfigOutputReference;
}
export interface SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#max_concurrency SagemakerEndpointConfiguration#max_concurrency}
    */
    readonly maxConcurrency: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#memory_size_in_mb SagemakerEndpointConfiguration#memory_size_in_mb}
    */
    readonly memorySizeInMb: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#provisioned_concurrency SagemakerEndpointConfiguration#provisioned_concurrency}
    */
    readonly provisionedConcurrency?: number;
}
export declare function sagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigToTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference | SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig): any;
export declare function sagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigToHclTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference | SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig): any;
export declare class SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig | undefined;
    set internalValue(value: SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig | undefined);
    private _maxConcurrency?;
    get maxConcurrency(): number;
    set maxConcurrency(value: number);
    get maxConcurrencyInput(): number | undefined;
    private _memorySizeInMb?;
    get memorySizeInMb(): number;
    set memorySizeInMb(value: number);
    get memorySizeInMbInput(): number | undefined;
    private _provisionedConcurrency?;
    get provisionedConcurrency(): number;
    set provisionedConcurrency(value: number);
    resetProvisionedConcurrency(): void;
    get provisionedConcurrencyInput(): number | undefined;
}
export interface SagemakerEndpointConfigurationShadowProductionVariants {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#accelerator_type SagemakerEndpointConfiguration#accelerator_type}
    */
    readonly acceleratorType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#container_startup_health_check_timeout_in_seconds SagemakerEndpointConfiguration#container_startup_health_check_timeout_in_seconds}
    */
    readonly containerStartupHealthCheckTimeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#enable_ssm_access SagemakerEndpointConfiguration#enable_ssm_access}
    */
    readonly enableSsmAccess?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#inference_ami_version SagemakerEndpointConfiguration#inference_ami_version}
    */
    readonly inferenceAmiVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#initial_instance_count SagemakerEndpointConfiguration#initial_instance_count}
    */
    readonly initialInstanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#initial_variant_weight SagemakerEndpointConfiguration#initial_variant_weight}
    */
    readonly initialVariantWeight?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#instance_type SagemakerEndpointConfiguration#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#model_data_download_timeout_in_seconds SagemakerEndpointConfiguration#model_data_download_timeout_in_seconds}
    */
    readonly modelDataDownloadTimeoutInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#model_name SagemakerEndpointConfiguration#model_name}
    */
    readonly modelName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#variant_name SagemakerEndpointConfiguration#variant_name}
    */
    readonly variantName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#volume_size_in_gb SagemakerEndpointConfiguration#volume_size_in_gb}
    */
    readonly volumeSizeInGb?: number;
    /**
    * core_dump_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#core_dump_config SagemakerEndpointConfiguration#core_dump_config}
    */
    readonly coreDumpConfig?: SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig;
    /**
    * managed_instance_scaling block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#managed_instance_scaling SagemakerEndpointConfiguration#managed_instance_scaling}
    */
    readonly managedInstanceScaling?: SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScaling;
    /**
    * routing_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#routing_config SagemakerEndpointConfiguration#routing_config}
    */
    readonly routingConfig?: SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig[] | cdktf.IResolvable;
    /**
    * serverless_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#serverless_config SagemakerEndpointConfiguration#serverless_config}
    */
    readonly serverlessConfig?: SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig;
}
export declare function sagemakerEndpointConfigurationShadowProductionVariantsToTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariants | cdktf.IResolvable): any;
export declare function sagemakerEndpointConfigurationShadowProductionVariantsToHclTerraform(struct?: SagemakerEndpointConfigurationShadowProductionVariants | cdktf.IResolvable): any;
export declare class SagemakerEndpointConfigurationShadowProductionVariantsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): SagemakerEndpointConfigurationShadowProductionVariants | cdktf.IResolvable | undefined;
    set internalValue(value: SagemakerEndpointConfigurationShadowProductionVariants | cdktf.IResolvable | undefined);
    private _acceleratorType?;
    get acceleratorType(): string;
    set acceleratorType(value: string);
    resetAcceleratorType(): void;
    get acceleratorTypeInput(): string | undefined;
    private _containerStartupHealthCheckTimeoutInSeconds?;
    get containerStartupHealthCheckTimeoutInSeconds(): number;
    set containerStartupHealthCheckTimeoutInSeconds(value: number);
    resetContainerStartupHealthCheckTimeoutInSeconds(): void;
    get containerStartupHealthCheckTimeoutInSecondsInput(): number | undefined;
    private _enableSsmAccess?;
    get enableSsmAccess(): boolean | cdktf.IResolvable;
    set enableSsmAccess(value: boolean | cdktf.IResolvable);
    resetEnableSsmAccess(): void;
    get enableSsmAccessInput(): boolean | cdktf.IResolvable | undefined;
    private _inferenceAmiVersion?;
    get inferenceAmiVersion(): string;
    set inferenceAmiVersion(value: string);
    resetInferenceAmiVersion(): void;
    get inferenceAmiVersionInput(): string | undefined;
    private _initialInstanceCount?;
    get initialInstanceCount(): number;
    set initialInstanceCount(value: number);
    resetInitialInstanceCount(): void;
    get initialInstanceCountInput(): number | undefined;
    private _initialVariantWeight?;
    get initialVariantWeight(): number;
    set initialVariantWeight(value: number);
    resetInitialVariantWeight(): void;
    get initialVariantWeightInput(): number | undefined;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string | undefined;
    private _modelDataDownloadTimeoutInSeconds?;
    get modelDataDownloadTimeoutInSeconds(): number;
    set modelDataDownloadTimeoutInSeconds(value: number);
    resetModelDataDownloadTimeoutInSeconds(): void;
    get modelDataDownloadTimeoutInSecondsInput(): number | undefined;
    private _modelName?;
    get modelName(): string;
    set modelName(value: string);
    get modelNameInput(): string | undefined;
    private _variantName?;
    get variantName(): string;
    set variantName(value: string);
    resetVariantName(): void;
    get variantNameInput(): string | undefined;
    private _volumeSizeInGb?;
    get volumeSizeInGb(): number;
    set volumeSizeInGb(value: number);
    resetVolumeSizeInGb(): void;
    get volumeSizeInGbInput(): number | undefined;
    private _coreDumpConfig;
    get coreDumpConfig(): SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfigOutputReference;
    putCoreDumpConfig(value: SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig): void;
    resetCoreDumpConfig(): void;
    get coreDumpConfigInput(): SagemakerEndpointConfigurationShadowProductionVariantsCoreDumpConfig | undefined;
    private _managedInstanceScaling;
    get managedInstanceScaling(): SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScalingOutputReference;
    putManagedInstanceScaling(value: SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScaling): void;
    resetManagedInstanceScaling(): void;
    get managedInstanceScalingInput(): SagemakerEndpointConfigurationShadowProductionVariantsManagedInstanceScaling | undefined;
    private _routingConfig;
    get routingConfig(): SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfigList;
    putRoutingConfig(value: SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig[] | cdktf.IResolvable): void;
    resetRoutingConfig(): void;
    get routingConfigInput(): cdktf.IResolvable | SagemakerEndpointConfigurationShadowProductionVariantsRoutingConfig[] | undefined;
    private _serverlessConfig;
    get serverlessConfig(): SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfigOutputReference;
    putServerlessConfig(value: SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig): void;
    resetServerlessConfig(): void;
    get serverlessConfigInput(): SagemakerEndpointConfigurationShadowProductionVariantsServerlessConfig | undefined;
}
export declare class SagemakerEndpointConfigurationShadowProductionVariantsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: SagemakerEndpointConfigurationShadowProductionVariants[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): SagemakerEndpointConfigurationShadowProductionVariantsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration aws_sagemaker_endpoint_configuration}
*/
export declare class SagemakerEndpointConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_endpoint_configuration";
    /**
    * Generates CDKTF code for importing a SagemakerEndpointConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerEndpointConfiguration to import
    * @param importFromId The id of the existing SagemakerEndpointConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerEndpointConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_endpoint_configuration aws_sagemaker_endpoint_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerEndpointConfigurationConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerEndpointConfigurationConfig);
    get arn(): string;
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
    private _asyncInferenceConfig;
    get asyncInferenceConfig(): SagemakerEndpointConfigurationAsyncInferenceConfigOutputReference;
    putAsyncInferenceConfig(value: SagemakerEndpointConfigurationAsyncInferenceConfig): void;
    resetAsyncInferenceConfig(): void;
    get asyncInferenceConfigInput(): SagemakerEndpointConfigurationAsyncInferenceConfig | undefined;
    private _dataCaptureConfig;
    get dataCaptureConfig(): SagemakerEndpointConfigurationDataCaptureConfigOutputReference;
    putDataCaptureConfig(value: SagemakerEndpointConfigurationDataCaptureConfig): void;
    resetDataCaptureConfig(): void;
    get dataCaptureConfigInput(): SagemakerEndpointConfigurationDataCaptureConfig | undefined;
    private _productionVariants;
    get productionVariants(): SagemakerEndpointConfigurationProductionVariantsList;
    putProductionVariants(value: SagemakerEndpointConfigurationProductionVariants[] | cdktf.IResolvable): void;
    get productionVariantsInput(): cdktf.IResolvable | SagemakerEndpointConfigurationProductionVariants[] | undefined;
    private _shadowProductionVariants;
    get shadowProductionVariants(): SagemakerEndpointConfigurationShadowProductionVariantsList;
    putShadowProductionVariants(value: SagemakerEndpointConfigurationShadowProductionVariants[] | cdktf.IResolvable): void;
    resetShadowProductionVariants(): void;
    get shadowProductionVariantsInput(): cdktf.IResolvable | SagemakerEndpointConfigurationShadowProductionVariants[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
