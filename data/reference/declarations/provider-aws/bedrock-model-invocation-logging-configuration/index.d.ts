/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BedrockModelInvocationLoggingConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * logging_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration#logging_config BedrockModelInvocationLoggingConfiguration#logging_config}
    */
    readonly loggingConfig?: BedrockModelInvocationLoggingConfigurationLoggingConfig;
}
export interface BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration#bucket_name BedrockModelInvocationLoggingConfiguration#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration#key_prefix BedrockModelInvocationLoggingConfiguration#key_prefix}
    */
    readonly keyPrefix?: string;
}
export declare function bedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3ConfigToTerraform(struct?: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config | cdktf.IResolvable): any;
export declare function bedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3ConfigToHclTerraform(struct?: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config | cdktf.IResolvable): any;
export declare class BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3ConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config | cdktf.IResolvable | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _keyPrefix?;
    get keyPrefix(): string;
    set keyPrefix(value: string);
    resetKeyPrefix(): void;
    get keyPrefixInput(): string | undefined;
}
export interface BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration#log_group_name BedrockModelInvocationLoggingConfiguration#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration#role_arn BedrockModelInvocationLoggingConfiguration#role_arn}
    */
    readonly roleArn?: string;
    /**
    * large_data_delivery_s3_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration#large_data_delivery_s3_config BedrockModelInvocationLoggingConfiguration#large_data_delivery_s3_config}
    */
    readonly largeDataDeliveryS3Config?: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config;
}
export declare function bedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigToTerraform(struct?: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfig | cdktf.IResolvable): any;
export declare function bedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigToHclTerraform(struct?: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfig | cdktf.IResolvable): any;
export declare class BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfig | cdktf.IResolvable | undefined);
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string | undefined;
    private _largeDataDeliveryS3Config;
    get largeDataDeliveryS3Config(): BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3ConfigOutputReference;
    putLargeDataDeliveryS3Config(value: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config): void;
    resetLargeDataDeliveryS3Config(): void;
    get largeDataDeliveryS3ConfigInput(): cdktf.IResolvable | BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigLargeDataDeliveryS3Config | undefined;
}
export interface BedrockModelInvocationLoggingConfigurationLoggingConfigS3Config {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration#bucket_name BedrockModelInvocationLoggingConfiguration#bucket_name}
    */
    readonly bucketName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration#key_prefix BedrockModelInvocationLoggingConfiguration#key_prefix}
    */
    readonly keyPrefix?: string;
}
export declare function bedrockModelInvocationLoggingConfigurationLoggingConfigS3ConfigToTerraform(struct?: BedrockModelInvocationLoggingConfigurationLoggingConfigS3Config | cdktf.IResolvable): any;
export declare function bedrockModelInvocationLoggingConfigurationLoggingConfigS3ConfigToHclTerraform(struct?: BedrockModelInvocationLoggingConfigurationLoggingConfigS3Config | cdktf.IResolvable): any;
export declare class BedrockModelInvocationLoggingConfigurationLoggingConfigS3ConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BedrockModelInvocationLoggingConfigurationLoggingConfigS3Config | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockModelInvocationLoggingConfigurationLoggingConfigS3Config | cdktf.IResolvable | undefined);
    private _bucketName?;
    get bucketName(): string;
    set bucketName(value: string);
    resetBucketName(): void;
    get bucketNameInput(): string | undefined;
    private _keyPrefix?;
    get keyPrefix(): string;
    set keyPrefix(value: string);
    resetKeyPrefix(): void;
    get keyPrefixInput(): string | undefined;
}
export interface BedrockModelInvocationLoggingConfigurationLoggingConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration#embedding_data_delivery_enabled BedrockModelInvocationLoggingConfiguration#embedding_data_delivery_enabled}
    */
    readonly embeddingDataDeliveryEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration#image_data_delivery_enabled BedrockModelInvocationLoggingConfiguration#image_data_delivery_enabled}
    */
    readonly imageDataDeliveryEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration#text_data_delivery_enabled BedrockModelInvocationLoggingConfiguration#text_data_delivery_enabled}
    */
    readonly textDataDeliveryEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration#video_data_delivery_enabled BedrockModelInvocationLoggingConfiguration#video_data_delivery_enabled}
    */
    readonly videoDataDeliveryEnabled?: boolean | cdktf.IResolvable;
    /**
    * cloudwatch_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration#cloudwatch_config BedrockModelInvocationLoggingConfiguration#cloudwatch_config}
    */
    readonly cloudwatchConfig?: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfig;
    /**
    * s3_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration#s3_config BedrockModelInvocationLoggingConfiguration#s3_config}
    */
    readonly s3Config?: BedrockModelInvocationLoggingConfigurationLoggingConfigS3Config;
}
export declare function bedrockModelInvocationLoggingConfigurationLoggingConfigToTerraform(struct?: BedrockModelInvocationLoggingConfigurationLoggingConfig | cdktf.IResolvable): any;
export declare function bedrockModelInvocationLoggingConfigurationLoggingConfigToHclTerraform(struct?: BedrockModelInvocationLoggingConfigurationLoggingConfig | cdktf.IResolvable): any;
export declare class BedrockModelInvocationLoggingConfigurationLoggingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BedrockModelInvocationLoggingConfigurationLoggingConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockModelInvocationLoggingConfigurationLoggingConfig | cdktf.IResolvable | undefined);
    private _embeddingDataDeliveryEnabled?;
    get embeddingDataDeliveryEnabled(): boolean | cdktf.IResolvable;
    set embeddingDataDeliveryEnabled(value: boolean | cdktf.IResolvable);
    resetEmbeddingDataDeliveryEnabled(): void;
    get embeddingDataDeliveryEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _imageDataDeliveryEnabled?;
    get imageDataDeliveryEnabled(): boolean | cdktf.IResolvable;
    set imageDataDeliveryEnabled(value: boolean | cdktf.IResolvable);
    resetImageDataDeliveryEnabled(): void;
    get imageDataDeliveryEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _textDataDeliveryEnabled?;
    get textDataDeliveryEnabled(): boolean | cdktf.IResolvable;
    set textDataDeliveryEnabled(value: boolean | cdktf.IResolvable);
    resetTextDataDeliveryEnabled(): void;
    get textDataDeliveryEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _videoDataDeliveryEnabled?;
    get videoDataDeliveryEnabled(): boolean | cdktf.IResolvable;
    set videoDataDeliveryEnabled(value: boolean | cdktf.IResolvable);
    resetVideoDataDeliveryEnabled(): void;
    get videoDataDeliveryEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _cloudwatchConfig;
    get cloudwatchConfig(): BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfigOutputReference;
    putCloudwatchConfig(value: BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfig): void;
    resetCloudwatchConfig(): void;
    get cloudwatchConfigInput(): cdktf.IResolvable | BedrockModelInvocationLoggingConfigurationLoggingConfigCloudwatchConfig | undefined;
    private _s3Config;
    get s3Config(): BedrockModelInvocationLoggingConfigurationLoggingConfigS3ConfigOutputReference;
    putS3Config(value: BedrockModelInvocationLoggingConfigurationLoggingConfigS3Config): void;
    resetS3Config(): void;
    get s3ConfigInput(): cdktf.IResolvable | BedrockModelInvocationLoggingConfigurationLoggingConfigS3Config | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration aws_bedrock_model_invocation_logging_configuration}
*/
export declare class BedrockModelInvocationLoggingConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_bedrock_model_invocation_logging_configuration";
    /**
    * Generates CDKTF code for importing a BedrockModelInvocationLoggingConfiguration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BedrockModelInvocationLoggingConfiguration to import
    * @param importFromId The id of the existing BedrockModelInvocationLoggingConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BedrockModelInvocationLoggingConfiguration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_model_invocation_logging_configuration aws_bedrock_model_invocation_logging_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BedrockModelInvocationLoggingConfigurationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: BedrockModelInvocationLoggingConfigurationConfig);
    get id(): string;
    private _loggingConfig;
    get loggingConfig(): BedrockModelInvocationLoggingConfigurationLoggingConfigOutputReference;
    putLoggingConfig(value: BedrockModelInvocationLoggingConfigurationLoggingConfig): void;
    resetLoggingConfig(): void;
    get loggingConfigInput(): cdktf.IResolvable | BedrockModelInvocationLoggingConfigurationLoggingConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
