/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBedrockInferenceProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/bedrock_inference_profile#inference_profile_id DataAwsBedrockInferenceProfile#inference_profile_id}
    */
    readonly inferenceProfileId: string;
}
export interface DataAwsBedrockInferenceProfileModels {
}
export declare function dataAwsBedrockInferenceProfileModelsToTerraform(struct?: DataAwsBedrockInferenceProfileModels): any;
export declare function dataAwsBedrockInferenceProfileModelsToHclTerraform(struct?: DataAwsBedrockInferenceProfileModels): any;
export declare class DataAwsBedrockInferenceProfileModelsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBedrockInferenceProfileModels | undefined;
    set internalValue(value: DataAwsBedrockInferenceProfileModels | undefined);
    get modelArn(): string;
}
export declare class DataAwsBedrockInferenceProfileModelsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBedrockInferenceProfileModelsOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/bedrock_inference_profile aws_bedrock_inference_profile}
*/
export declare class DataAwsBedrockInferenceProfile extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_bedrock_inference_profile";
    /**
    * Generates CDKTF code for importing a DataAwsBedrockInferenceProfile resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsBedrockInferenceProfile to import
    * @param importFromId The id of the existing DataAwsBedrockInferenceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/bedrock_inference_profile#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsBedrockInferenceProfile to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/bedrock_inference_profile aws_bedrock_inference_profile} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBedrockInferenceProfileConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsBedrockInferenceProfileConfig);
    get createdAt(): string;
    get description(): string;
    get inferenceProfileArn(): string;
    private _inferenceProfileId?;
    get inferenceProfileId(): string;
    set inferenceProfileId(value: string);
    get inferenceProfileIdInput(): string | undefined;
    get inferenceProfileName(): string;
    private _models;
    get models(): DataAwsBedrockInferenceProfileModelsList;
    get status(): string;
    get type(): string;
    get updatedAt(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
