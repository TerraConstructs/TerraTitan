/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBedrockCustomModelsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAwsBedrockCustomModelsModelSummaries {
}
export declare function dataAwsBedrockCustomModelsModelSummariesToTerraform(struct?: DataAwsBedrockCustomModelsModelSummaries): any;
export declare function dataAwsBedrockCustomModelsModelSummariesToHclTerraform(struct?: DataAwsBedrockCustomModelsModelSummaries): any;
export declare class DataAwsBedrockCustomModelsModelSummariesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBedrockCustomModelsModelSummaries | undefined;
    set internalValue(value: DataAwsBedrockCustomModelsModelSummaries | undefined);
    get creationTime(): string;
    get modelArn(): string;
    get modelName(): string;
}
export declare class DataAwsBedrockCustomModelsModelSummariesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBedrockCustomModelsModelSummariesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_custom_models aws_bedrock_custom_models}
*/
export declare class DataAwsBedrockCustomModels extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_bedrock_custom_models";
    /**
    * Generates CDKTF code for importing a DataAwsBedrockCustomModels resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsBedrockCustomModels to import
    * @param importFromId The id of the existing DataAwsBedrockCustomModels that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_custom_models#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsBedrockCustomModels to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/bedrock_custom_models aws_bedrock_custom_models} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBedrockCustomModelsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsBedrockCustomModelsConfig);
    get id(): string;
    private _modelSummaries;
    get modelSummaries(): DataAwsBedrockCustomModelsModelSummariesList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
