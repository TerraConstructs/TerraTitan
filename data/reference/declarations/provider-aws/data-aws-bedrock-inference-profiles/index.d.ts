/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsBedrockInferenceProfilesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels {
}
export declare function dataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsToTerraform(struct?: DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels): any;
export declare function dataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsToHclTerraform(struct?: DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels): any;
export declare class DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels | undefined;
    set internalValue(value: DataAwsBedrockInferenceProfilesInferenceProfileSummariesModels | undefined);
    get modelArn(): string;
}
export declare class DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsOutputReference;
}
export interface DataAwsBedrockInferenceProfilesInferenceProfileSummaries {
}
export declare function dataAwsBedrockInferenceProfilesInferenceProfileSummariesToTerraform(struct?: DataAwsBedrockInferenceProfilesInferenceProfileSummaries): any;
export declare function dataAwsBedrockInferenceProfilesInferenceProfileSummariesToHclTerraform(struct?: DataAwsBedrockInferenceProfilesInferenceProfileSummaries): any;
export declare class DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsBedrockInferenceProfilesInferenceProfileSummaries | undefined;
    set internalValue(value: DataAwsBedrockInferenceProfilesInferenceProfileSummaries | undefined);
    get createdAt(): string;
    get description(): string;
    get inferenceProfileArn(): string;
    get inferenceProfileId(): string;
    get inferenceProfileName(): string;
    private _models;
    get models(): DataAwsBedrockInferenceProfilesInferenceProfileSummariesModelsList;
    get status(): string;
    get type(): string;
    get updatedAt(): string;
}
export declare class DataAwsBedrockInferenceProfilesInferenceProfileSummariesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsBedrockInferenceProfilesInferenceProfileSummariesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/bedrock_inference_profiles aws_bedrock_inference_profiles}
*/
export declare class DataAwsBedrockInferenceProfiles extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_bedrock_inference_profiles";
    /**
    * Generates CDKTF code for importing a DataAwsBedrockInferenceProfiles resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsBedrockInferenceProfiles to import
    * @param importFromId The id of the existing DataAwsBedrockInferenceProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/bedrock_inference_profiles#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsBedrockInferenceProfiles to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/data-sources/bedrock_inference_profiles aws_bedrock_inference_profiles} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsBedrockInferenceProfilesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsBedrockInferenceProfilesConfig);
    private _inferenceProfileSummaries;
    get inferenceProfileSummaries(): DataAwsBedrockInferenceProfilesInferenceProfileSummariesList;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
