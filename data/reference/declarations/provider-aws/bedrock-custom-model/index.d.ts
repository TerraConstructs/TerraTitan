/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BedrockCustomModelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#base_model_identifier BedrockCustomModel#base_model_identifier}
    */
    readonly baseModelIdentifier: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#custom_model_kms_key_id BedrockCustomModel#custom_model_kms_key_id}
    */
    readonly customModelKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#custom_model_name BedrockCustomModel#custom_model_name}
    */
    readonly customModelName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#customization_type BedrockCustomModel#customization_type}
    */
    readonly customizationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#hyperparameters BedrockCustomModel#hyperparameters}
    */
    readonly hyperparameters: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#job_name BedrockCustomModel#job_name}
    */
    readonly jobName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#role_arn BedrockCustomModel#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#tags BedrockCustomModel#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * output_data_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#output_data_config BedrockCustomModel#output_data_config}
    */
    readonly outputDataConfig?: BedrockCustomModelOutputDataConfig[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#timeouts BedrockCustomModel#timeouts}
    */
    readonly timeouts?: BedrockCustomModelTimeouts;
    /**
    * training_data_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#training_data_config BedrockCustomModel#training_data_config}
    */
    readonly trainingDataConfig?: BedrockCustomModelTrainingDataConfig[] | cdktf.IResolvable;
    /**
    * validation_data_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#validation_data_config BedrockCustomModel#validation_data_config}
    */
    readonly validationDataConfig?: BedrockCustomModelValidationDataConfig[] | cdktf.IResolvable;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#vpc_config BedrockCustomModel#vpc_config}
    */
    readonly vpcConfig?: BedrockCustomModelVpcConfig[] | cdktf.IResolvable;
}
export interface BedrockCustomModelTrainingMetrics {
}
export declare function bedrockCustomModelTrainingMetricsToTerraform(struct?: BedrockCustomModelTrainingMetrics): any;
export declare function bedrockCustomModelTrainingMetricsToHclTerraform(struct?: BedrockCustomModelTrainingMetrics): any;
export declare class BedrockCustomModelTrainingMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockCustomModelTrainingMetrics | undefined;
    set internalValue(value: BedrockCustomModelTrainingMetrics | undefined);
    get trainingLoss(): number;
}
export declare class BedrockCustomModelTrainingMetricsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockCustomModelTrainingMetricsOutputReference;
}
export interface BedrockCustomModelValidationMetrics {
}
export declare function bedrockCustomModelValidationMetricsToTerraform(struct?: BedrockCustomModelValidationMetrics): any;
export declare function bedrockCustomModelValidationMetricsToHclTerraform(struct?: BedrockCustomModelValidationMetrics): any;
export declare class BedrockCustomModelValidationMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockCustomModelValidationMetrics | undefined;
    set internalValue(value: BedrockCustomModelValidationMetrics | undefined);
    get validationLoss(): number;
}
export declare class BedrockCustomModelValidationMetricsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockCustomModelValidationMetricsOutputReference;
}
export interface BedrockCustomModelOutputDataConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}
    */
    readonly s3Uri: string;
}
export declare function bedrockCustomModelOutputDataConfigToTerraform(struct?: BedrockCustomModelOutputDataConfig | cdktf.IResolvable): any;
export declare function bedrockCustomModelOutputDataConfigToHclTerraform(struct?: BedrockCustomModelOutputDataConfig | cdktf.IResolvable): any;
export declare class BedrockCustomModelOutputDataConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockCustomModelOutputDataConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockCustomModelOutputDataConfig | cdktf.IResolvable | undefined);
    private _s3Uri?;
    get s3Uri(): string;
    set s3Uri(value: string);
    get s3UriInput(): string | undefined;
}
export declare class BedrockCustomModelOutputDataConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockCustomModelOutputDataConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockCustomModelOutputDataConfigOutputReference;
}
export interface BedrockCustomModelTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#create BedrockCustomModel#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#delete BedrockCustomModel#delete}
    */
    readonly delete?: string;
}
export declare function bedrockCustomModelTimeoutsToTerraform(struct?: BedrockCustomModelTimeouts | cdktf.IResolvable): any;
export declare function bedrockCustomModelTimeoutsToHclTerraform(struct?: BedrockCustomModelTimeouts | cdktf.IResolvable): any;
export declare class BedrockCustomModelTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BedrockCustomModelTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockCustomModelTimeouts | cdktf.IResolvable | undefined);
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
}
export interface BedrockCustomModelTrainingDataConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}
    */
    readonly s3Uri: string;
}
export declare function bedrockCustomModelTrainingDataConfigToTerraform(struct?: BedrockCustomModelTrainingDataConfig | cdktf.IResolvable): any;
export declare function bedrockCustomModelTrainingDataConfigToHclTerraform(struct?: BedrockCustomModelTrainingDataConfig | cdktf.IResolvable): any;
export declare class BedrockCustomModelTrainingDataConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockCustomModelTrainingDataConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockCustomModelTrainingDataConfig | cdktf.IResolvable | undefined);
    private _s3Uri?;
    get s3Uri(): string;
    set s3Uri(value: string);
    get s3UriInput(): string | undefined;
}
export declare class BedrockCustomModelTrainingDataConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockCustomModelTrainingDataConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockCustomModelTrainingDataConfigOutputReference;
}
export interface BedrockCustomModelValidationDataConfigValidator {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#s3_uri BedrockCustomModel#s3_uri}
    */
    readonly s3Uri: string;
}
export declare function bedrockCustomModelValidationDataConfigValidatorToTerraform(struct?: BedrockCustomModelValidationDataConfigValidator | cdktf.IResolvable): any;
export declare function bedrockCustomModelValidationDataConfigValidatorToHclTerraform(struct?: BedrockCustomModelValidationDataConfigValidator | cdktf.IResolvable): any;
export declare class BedrockCustomModelValidationDataConfigValidatorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockCustomModelValidationDataConfigValidator | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockCustomModelValidationDataConfigValidator | cdktf.IResolvable | undefined);
    private _s3Uri?;
    get s3Uri(): string;
    set s3Uri(value: string);
    get s3UriInput(): string | undefined;
}
export declare class BedrockCustomModelValidationDataConfigValidatorList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockCustomModelValidationDataConfigValidator[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockCustomModelValidationDataConfigValidatorOutputReference;
}
export interface BedrockCustomModelValidationDataConfig {
    /**
    * validator block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#validator BedrockCustomModel#validator}
    */
    readonly validator?: BedrockCustomModelValidationDataConfigValidator[] | cdktf.IResolvable;
}
export declare function bedrockCustomModelValidationDataConfigToTerraform(struct?: BedrockCustomModelValidationDataConfig | cdktf.IResolvable): any;
export declare function bedrockCustomModelValidationDataConfigToHclTerraform(struct?: BedrockCustomModelValidationDataConfig | cdktf.IResolvable): any;
export declare class BedrockCustomModelValidationDataConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockCustomModelValidationDataConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockCustomModelValidationDataConfig | cdktf.IResolvable | undefined);
    private _validator;
    get validator(): BedrockCustomModelValidationDataConfigValidatorList;
    putValidator(value: BedrockCustomModelValidationDataConfigValidator[] | cdktf.IResolvable): void;
    resetValidator(): void;
    get validatorInput(): cdktf.IResolvable | BedrockCustomModelValidationDataConfigValidator[] | undefined;
}
export declare class BedrockCustomModelValidationDataConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockCustomModelValidationDataConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockCustomModelValidationDataConfigOutputReference;
}
export interface BedrockCustomModelVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#security_group_ids BedrockCustomModel#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#subnet_ids BedrockCustomModel#subnet_ids}
    */
    readonly subnetIds: string[];
}
export declare function bedrockCustomModelVpcConfigToTerraform(struct?: BedrockCustomModelVpcConfig | cdktf.IResolvable): any;
export declare function bedrockCustomModelVpcConfigToHclTerraform(struct?: BedrockCustomModelVpcConfig | cdktf.IResolvable): any;
export declare class BedrockCustomModelVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockCustomModelVpcConfig | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockCustomModelVpcConfig | cdktf.IResolvable | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[] | undefined;
}
export declare class BedrockCustomModelVpcConfigList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockCustomModelVpcConfig[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockCustomModelVpcConfigOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model aws_bedrock_custom_model}
*/
export declare class BedrockCustomModel extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_bedrock_custom_model";
    /**
    * Generates CDKTF code for importing a BedrockCustomModel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BedrockCustomModel to import
    * @param importFromId The id of the existing BedrockCustomModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BedrockCustomModel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/bedrock_custom_model aws_bedrock_custom_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BedrockCustomModelConfig
    */
    constructor(scope: Construct, id: string, config: BedrockCustomModelConfig);
    private _baseModelIdentifier?;
    get baseModelIdentifier(): string;
    set baseModelIdentifier(value: string);
    get baseModelIdentifierInput(): string | undefined;
    get customModelArn(): string;
    private _customModelKmsKeyId?;
    get customModelKmsKeyId(): string;
    set customModelKmsKeyId(value: string);
    resetCustomModelKmsKeyId(): void;
    get customModelKmsKeyIdInput(): string | undefined;
    private _customModelName?;
    get customModelName(): string;
    set customModelName(value: string);
    get customModelNameInput(): string | undefined;
    private _customizationType?;
    get customizationType(): string;
    set customizationType(value: string);
    resetCustomizationType(): void;
    get customizationTypeInput(): string | undefined;
    private _hyperparameters?;
    get hyperparameters(): {
        [key: string]: string;
    };
    set hyperparameters(value: {
        [key: string]: string;
    });
    get hyperparametersInput(): {
        [key: string]: string;
    } | undefined;
    get id(): string;
    get jobArn(): string;
    private _jobName?;
    get jobName(): string;
    set jobName(value: string);
    get jobNameInput(): string | undefined;
    get jobStatus(): string;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    private _trainingMetrics;
    get trainingMetrics(): BedrockCustomModelTrainingMetricsList;
    private _validationMetrics;
    get validationMetrics(): BedrockCustomModelValidationMetricsList;
    private _outputDataConfig;
    get outputDataConfig(): BedrockCustomModelOutputDataConfigList;
    putOutputDataConfig(value: BedrockCustomModelOutputDataConfig[] | cdktf.IResolvable): void;
    resetOutputDataConfig(): void;
    get outputDataConfigInput(): cdktf.IResolvable | BedrockCustomModelOutputDataConfig[] | undefined;
    private _timeouts;
    get timeouts(): BedrockCustomModelTimeoutsOutputReference;
    putTimeouts(value: BedrockCustomModelTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BedrockCustomModelTimeouts | undefined;
    private _trainingDataConfig;
    get trainingDataConfig(): BedrockCustomModelTrainingDataConfigList;
    putTrainingDataConfig(value: BedrockCustomModelTrainingDataConfig[] | cdktf.IResolvable): void;
    resetTrainingDataConfig(): void;
    get trainingDataConfigInput(): cdktf.IResolvable | BedrockCustomModelTrainingDataConfig[] | undefined;
    private _validationDataConfig;
    get validationDataConfig(): BedrockCustomModelValidationDataConfigList;
    putValidationDataConfig(value: BedrockCustomModelValidationDataConfig[] | cdktf.IResolvable): void;
    resetValidationDataConfig(): void;
    get validationDataConfigInput(): cdktf.IResolvable | BedrockCustomModelValidationDataConfig[] | undefined;
    private _vpcConfig;
    get vpcConfig(): BedrockCustomModelVpcConfigList;
    putVpcConfig(value: BedrockCustomModelVpcConfig[] | cdktf.IResolvable): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): cdktf.IResolvable | BedrockCustomModelVpcConfig[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
