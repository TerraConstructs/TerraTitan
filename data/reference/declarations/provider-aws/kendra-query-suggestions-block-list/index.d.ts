/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KendraQuerySuggestionsBlockListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list#description KendraQuerySuggestionsBlockList#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list#id KendraQuerySuggestionsBlockList#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list#index_id KendraQuerySuggestionsBlockList#index_id}
    */
    readonly indexId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list#name KendraQuerySuggestionsBlockList#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list#role_arn KendraQuerySuggestionsBlockList#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list#tags KendraQuerySuggestionsBlockList#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list#tags_all KendraQuerySuggestionsBlockList#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * source_s3_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list#source_s3_path KendraQuerySuggestionsBlockList#source_s3_path}
    */
    readonly sourceS3Path: KendraQuerySuggestionsBlockListSourceS3Path;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list#timeouts KendraQuerySuggestionsBlockList#timeouts}
    */
    readonly timeouts?: KendraQuerySuggestionsBlockListTimeouts;
}
export interface KendraQuerySuggestionsBlockListSourceS3Path {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list#bucket KendraQuerySuggestionsBlockList#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list#key KendraQuerySuggestionsBlockList#key}
    */
    readonly key: string;
}
export declare function kendraQuerySuggestionsBlockListSourceS3PathToTerraform(struct?: KendraQuerySuggestionsBlockListSourceS3PathOutputReference | KendraQuerySuggestionsBlockListSourceS3Path): any;
export declare function kendraQuerySuggestionsBlockListSourceS3PathToHclTerraform(struct?: KendraQuerySuggestionsBlockListSourceS3PathOutputReference | KendraQuerySuggestionsBlockListSourceS3Path): any;
export declare class KendraQuerySuggestionsBlockListSourceS3PathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraQuerySuggestionsBlockListSourceS3Path | undefined;
    set internalValue(value: KendraQuerySuggestionsBlockListSourceS3Path | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
}
export interface KendraQuerySuggestionsBlockListTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list#create KendraQuerySuggestionsBlockList#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list#delete KendraQuerySuggestionsBlockList#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list#update KendraQuerySuggestionsBlockList#update}
    */
    readonly update?: string;
}
export declare function kendraQuerySuggestionsBlockListTimeoutsToTerraform(struct?: KendraQuerySuggestionsBlockListTimeouts | cdktf.IResolvable): any;
export declare function kendraQuerySuggestionsBlockListTimeoutsToHclTerraform(struct?: KendraQuerySuggestionsBlockListTimeouts | cdktf.IResolvable): any;
export declare class KendraQuerySuggestionsBlockListTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraQuerySuggestionsBlockListTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: KendraQuerySuggestionsBlockListTimeouts | cdktf.IResolvable | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list aws_kendra_query_suggestions_block_list}
*/
export declare class KendraQuerySuggestionsBlockList extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_kendra_query_suggestions_block_list";
    /**
    * Generates CDKTF code for importing a KendraQuerySuggestionsBlockList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KendraQuerySuggestionsBlockList to import
    * @param importFromId The id of the existing KendraQuerySuggestionsBlockList that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KendraQuerySuggestionsBlockList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_query_suggestions_block_list aws_kendra_query_suggestions_block_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KendraQuerySuggestionsBlockListConfig
    */
    constructor(scope: Construct, id: string, config: KendraQuerySuggestionsBlockListConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _indexId?;
    get indexId(): string;
    set indexId(value: string);
    get indexIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get querySuggestionsBlockListId(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
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
    private _sourceS3Path;
    get sourceS3Path(): KendraQuerySuggestionsBlockListSourceS3PathOutputReference;
    putSourceS3Path(value: KendraQuerySuggestionsBlockListSourceS3Path): void;
    get sourceS3PathInput(): KendraQuerySuggestionsBlockListSourceS3Path | undefined;
    private _timeouts;
    get timeouts(): KendraQuerySuggestionsBlockListTimeoutsOutputReference;
    putTimeouts(value: KendraQuerySuggestionsBlockListTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | KendraQuerySuggestionsBlockListTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
