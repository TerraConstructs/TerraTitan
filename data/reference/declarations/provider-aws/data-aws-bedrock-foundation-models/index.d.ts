/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBedrockFoundationModelsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_foundation_models#by_customization_type DataAwsBedrockFoundationModels#by_customization_type}
    */
    readonly byCustomizationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_foundation_models#by_inference_type DataAwsBedrockFoundationModels#by_inference_type}
    */
    readonly byInferenceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_foundation_models#by_output_modality DataAwsBedrockFoundationModels#by_output_modality}
    */
    readonly byOutputModality?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_foundation_models#by_provider DataAwsBedrockFoundationModels#by_provider}
    */
    readonly byProvider?: string;
}
export interface DataAwsBedrockFoundationModelsModelSummaries {
}
export declare function dataAwsBedrockFoundationModelsModelSummariesToTerraform(struct?: DataAwsBedrockFoundationModelsModelSummaries): any;
export declare function dataAwsBedrockFoundationModelsModelSummariesToHclTerraform(struct?: DataAwsBedrockFoundationModelsModelSummaries): any;
export declare class DataAwsBedrockFoundationModelsModelSummariesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBedrockFoundationModelsModelSummaries | undefined;
    set internalValue(value: DataAwsBedrockFoundationModelsModelSummaries | undefined);
    get customizationsSupported(): string[];
    get inferenceTypesSupported(): string[];
    get inputModalities(): string[];
    get modelArn(): string;
    get modelId(): string;
    get modelName(): string;
    get outputModalities(): string[];
    get providerName(): string;
    get responseStreamingSupported(): cdktf.IResolvable;
}
export declare class DataAwsBedrockFoundationModelsModelSummariesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBedrockFoundationModelsModelSummariesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_foundation_models aws_bedrock_foundation_models}
*/
export declare class DataAwsBedrockFoundationModels extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_bedrock_foundation_models";
    /**
    * Generates CDKTF code for importing a DataAwsBedrockFoundationModels resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsBedrockFoundationModels to import
    * @param importFromId The id of the existing DataAwsBedrockFoundationModels that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_foundation_models#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsBedrockFoundationModels to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_foundation_models aws_bedrock_foundation_models} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBedrockFoundationModelsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsBedrockFoundationModelsConfig);
    private _byCustomizationType?;
    get byCustomizationType(): string;
    set byCustomizationType(value: string);
    resetByCustomizationType(): void;
    get byCustomizationTypeInput(): string | undefined;
    private _byInferenceType?;
    get byInferenceType(): string;
    set byInferenceType(value: string);
    resetByInferenceType(): void;
    get byInferenceTypeInput(): string | undefined;
    private _byOutputModality?;
    get byOutputModality(): string;
    set byOutputModality(value: string);
    resetByOutputModality(): void;
    get byOutputModalityInput(): string | undefined;
    private _byProvider?;
    get byProvider(): string;
    set byProvider(value: string);
    resetByProvider(): void;
    get byProviderInput(): string | undefined;
    get id(): string;
    private _modelSummaries;
    get modelSummaries(): DataAwsBedrockFoundationModelsModelSummariesList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
