/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBedrockFoundationModelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_foundation_model#model_id DataAwsBedrockFoundationModel#model_id}
    */
    readonly modelId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_foundation_model aws_bedrock_foundation_model}
*/
export declare class DataAwsBedrockFoundationModel extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_bedrock_foundation_model";
    /**
    * Generates CDKTF code for importing a DataAwsBedrockFoundationModel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsBedrockFoundationModel to import
    * @param importFromId The id of the existing DataAwsBedrockFoundationModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_foundation_model#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsBedrockFoundationModel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_foundation_model aws_bedrock_foundation_model} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBedrockFoundationModelConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsBedrockFoundationModelConfig);
    get customizationsSupported(): string[];
    get id(): string;
    get inferenceTypesSupported(): string[];
    get inputModalities(): string[];
    get modelArn(): string;
    private _modelId?;
    get modelId(): string;
    set modelId(value: string);
    get modelIdInput(): string | undefined;
    get modelName(): string;
    get outputModalities(): string[];
    get providerName(): string;
    get responseStreamingSupported(): cdktf.IResolvable;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
