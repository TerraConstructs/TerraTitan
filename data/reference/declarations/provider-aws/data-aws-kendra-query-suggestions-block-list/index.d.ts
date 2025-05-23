/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsKendraQuerySuggestionsBlockListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_query_suggestions_block_list#id DataAwsKendraQuerySuggestionsBlockList#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_query_suggestions_block_list#index_id DataAwsKendraQuerySuggestionsBlockList#index_id}
    */
    readonly indexId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_query_suggestions_block_list#query_suggestions_block_list_id DataAwsKendraQuerySuggestionsBlockList#query_suggestions_block_list_id}
    */
    readonly querySuggestionsBlockListId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_query_suggestions_block_list#tags DataAwsKendraQuerySuggestionsBlockList#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsKendraQuerySuggestionsBlockListSourceS3Path {
}
export declare function dataAwsKendraQuerySuggestionsBlockListSourceS3PathToTerraform(struct?: DataAwsKendraQuerySuggestionsBlockListSourceS3Path): any;
export declare function dataAwsKendraQuerySuggestionsBlockListSourceS3PathToHclTerraform(struct?: DataAwsKendraQuerySuggestionsBlockListSourceS3Path): any;
export declare class DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsKendraQuerySuggestionsBlockListSourceS3Path | undefined;
    set internalValue(value: DataAwsKendraQuerySuggestionsBlockListSourceS3Path | undefined);
    get bucket(): string;
    get key(): string;
}
export declare class DataAwsKendraQuerySuggestionsBlockListSourceS3PathList extends cdktf.ComplexList {
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
    get(index: number): DataAwsKendraQuerySuggestionsBlockListSourceS3PathOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_query_suggestions_block_list aws_kendra_query_suggestions_block_list}
*/
export declare class DataAwsKendraQuerySuggestionsBlockList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_kendra_query_suggestions_block_list";
    /**
    * Generates CDKTF code for importing a DataAwsKendraQuerySuggestionsBlockList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsKendraQuerySuggestionsBlockList to import
    * @param importFromId The id of the existing DataAwsKendraQuerySuggestionsBlockList that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_query_suggestions_block_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsKendraQuerySuggestionsBlockList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/kendra_query_suggestions_block_list aws_kendra_query_suggestions_block_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKendraQuerySuggestionsBlockListConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsKendraQuerySuggestionsBlockListConfig);
    get arn(): string;
    get createdAt(): string;
    get description(): string;
    get errorMessage(): string;
    get fileSizeBytes(): number;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _indexId?;
    get indexId(): string;
    set indexId(value: string);
    get indexIdInput(): string | undefined;
    get itemCount(): number;
    get name(): string;
    private _querySuggestionsBlockListId?;
    get querySuggestionsBlockListId(): string;
    set querySuggestionsBlockListId(value: string);
    get querySuggestionsBlockListIdInput(): string | undefined;
    get roleArn(): string;
    private _sourceS3Path;
    get sourceS3Path(): DataAwsKendraQuerySuggestionsBlockListSourceS3PathList;
    get status(): string;
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
    get updatedAt(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
