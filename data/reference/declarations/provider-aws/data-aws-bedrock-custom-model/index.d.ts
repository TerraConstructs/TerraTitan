/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBedrockCustomModelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_custom_model#model_id DataAwsBedrockCustomModel#model_id}
    */
    readonly modelId: string;
}
export interface DataAwsBedrockCustomModelOutputDataConfig {
}
export declare function dataAwsBedrockCustomModelOutputDataConfigToTerraform(struct?: DataAwsBedrockCustomModelOutputDataConfig): any;
export declare function dataAwsBedrockCustomModelOutputDataConfigToHclTerraform(struct?: DataAwsBedrockCustomModelOutputDataConfig): any;
export declare class DataAwsBedrockCustomModelOutputDataConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBedrockCustomModelOutputDataConfig | undefined;
    set internalValue(value: DataAwsBedrockCustomModelOutputDataConfig | undefined);
    get s3Uri(): string;
}
export declare class DataAwsBedrockCustomModelOutputDataConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBedrockCustomModelOutputDataConfigOutputReference;
}
export interface DataAwsBedrockCustomModelTrainingDataConfig {
}
export declare function dataAwsBedrockCustomModelTrainingDataConfigToTerraform(struct?: DataAwsBedrockCustomModelTrainingDataConfig): any;
export declare function dataAwsBedrockCustomModelTrainingDataConfigToHclTerraform(struct?: DataAwsBedrockCustomModelTrainingDataConfig): any;
export declare class DataAwsBedrockCustomModelTrainingDataConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBedrockCustomModelTrainingDataConfig | undefined;
    set internalValue(value: DataAwsBedrockCustomModelTrainingDataConfig | undefined);
    get s3Uri(): string;
}
export declare class DataAwsBedrockCustomModelTrainingDataConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBedrockCustomModelTrainingDataConfigOutputReference;
}
export interface DataAwsBedrockCustomModelTrainingMetrics {
}
export declare function dataAwsBedrockCustomModelTrainingMetricsToTerraform(struct?: DataAwsBedrockCustomModelTrainingMetrics): any;
export declare function dataAwsBedrockCustomModelTrainingMetricsToHclTerraform(struct?: DataAwsBedrockCustomModelTrainingMetrics): any;
export declare class DataAwsBedrockCustomModelTrainingMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBedrockCustomModelTrainingMetrics | undefined;
    set internalValue(value: DataAwsBedrockCustomModelTrainingMetrics | undefined);
    get trainingLoss(): number;
}
export declare class DataAwsBedrockCustomModelTrainingMetricsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBedrockCustomModelTrainingMetricsOutputReference;
}
export interface DataAwsBedrockCustomModelValidationDataConfigValidator {
}
export declare function dataAwsBedrockCustomModelValidationDataConfigValidatorToTerraform(struct?: DataAwsBedrockCustomModelValidationDataConfigValidator): any;
export declare function dataAwsBedrockCustomModelValidationDataConfigValidatorToHclTerraform(struct?: DataAwsBedrockCustomModelValidationDataConfigValidator): any;
export declare class DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBedrockCustomModelValidationDataConfigValidator | undefined;
    set internalValue(value: DataAwsBedrockCustomModelValidationDataConfigValidator | undefined);
    get s3Uri(): string;
}
export declare class DataAwsBedrockCustomModelValidationDataConfigValidatorList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBedrockCustomModelValidationDataConfigValidatorOutputReference;
}
export interface DataAwsBedrockCustomModelValidationDataConfig {
}
export declare function dataAwsBedrockCustomModelValidationDataConfigToTerraform(struct?: DataAwsBedrockCustomModelValidationDataConfig): any;
export declare function dataAwsBedrockCustomModelValidationDataConfigToHclTerraform(struct?: DataAwsBedrockCustomModelValidationDataConfig): any;
export declare class DataAwsBedrockCustomModelValidationDataConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBedrockCustomModelValidationDataConfig | undefined;
    set internalValue(value: DataAwsBedrockCustomModelValidationDataConfig | undefined);
    private _validator;
    get validator(): DataAwsBedrockCustomModelValidationDataConfigValidatorList;
}
export declare class DataAwsBedrockCustomModelValidationDataConfigList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBedrockCustomModelValidationDataConfigOutputReference;
}
export interface DataAwsBedrockCustomModelValidationMetrics {
}
export declare function dataAwsBedrockCustomModelValidationMetricsToTerraform(struct?: DataAwsBedrockCustomModelValidationMetrics): any;
export declare function dataAwsBedrockCustomModelValidationMetricsToHclTerraform(struct?: DataAwsBedrockCustomModelValidationMetrics): any;
export declare class DataAwsBedrockCustomModelValidationMetricsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBedrockCustomModelValidationMetrics | undefined;
    set internalValue(value: DataAwsBedrockCustomModelValidationMetrics | undefined);
    get validationLoss(): number;
}
export declare class DataAwsBedrockCustomModelValidationMetricsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBedrockCustomModelValidationMetricsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_custom_model aws_bedrock_custom_model}
*/
export declare class DataAwsBedrockCustomModel extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_bedrock_custom_model";
    /**
    * Generates CDKTF code for importing a DataAwsBedrockCustomModel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsBedrockCustomModel to import
    * @param importFromId The id of the existing DataAwsBedrockCustomModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_custom_model#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsBedrockCustomModel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_custom_model aws_bedrock_custom_model} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBedrockCustomModelConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsBedrockCustomModelConfig);
    get baseModelArn(): string;
    get creationTime(): string;
    private _hyperparameters;
    get hyperparameters(): cdktf.StringMap;
    get id(): string;
    get jobArn(): string;
    get jobName(): string;
    private _jobTags;
    get jobTags(): cdktf.StringMap;
    get modelArn(): string;
    private _modelId?;
    get modelId(): string;
    set modelId(value: string);
    get modelIdInput(): string | undefined;
    get modelKmsKeyArn(): string;
    get modelName(): string;
    private _modelTags;
    get modelTags(): cdktf.StringMap;
    private _outputDataConfig;
    get outputDataConfig(): DataAwsBedrockCustomModelOutputDataConfigList;
    private _trainingDataConfig;
    get trainingDataConfig(): DataAwsBedrockCustomModelTrainingDataConfigList;
    private _trainingMetrics;
    get trainingMetrics(): DataAwsBedrockCustomModelTrainingMetricsList;
    private _validationDataConfig;
    get validationDataConfig(): DataAwsBedrockCustomModelValidationDataConfigList;
    private _validationMetrics;
    get validationMetrics(): DataAwsBedrockCustomModelValidationMetricsList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
