/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface KendraThesaurusConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus#description KendraThesaurus#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus#id KendraThesaurus#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus#index_id KendraThesaurus#index_id}
    */
    readonly indexId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus#name KendraThesaurus#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus#role_arn KendraThesaurus#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus#tags KendraThesaurus#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus#tags_all KendraThesaurus#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * source_s3_path block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus#source_s3_path KendraThesaurus#source_s3_path}
    */
    readonly sourceS3Path: KendraThesaurusSourceS3Path;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus#timeouts KendraThesaurus#timeouts}
    */
    readonly timeouts?: KendraThesaurusTimeouts;
}
export interface KendraThesaurusSourceS3Path {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus#bucket KendraThesaurus#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus#key KendraThesaurus#key}
    */
    readonly key: string;
}
export declare function kendraThesaurusSourceS3PathToTerraform(struct?: KendraThesaurusSourceS3PathOutputReference | KendraThesaurusSourceS3Path): any;
export declare function kendraThesaurusSourceS3PathToHclTerraform(struct?: KendraThesaurusSourceS3PathOutputReference | KendraThesaurusSourceS3Path): any;
export declare class KendraThesaurusSourceS3PathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraThesaurusSourceS3Path | undefined;
    set internalValue(value: KendraThesaurusSourceS3Path | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
}
export interface KendraThesaurusTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus#create KendraThesaurus#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus#delete KendraThesaurus#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus#update KendraThesaurus#update}
    */
    readonly update?: string;
}
export declare function kendraThesaurusTimeoutsToTerraform(struct?: KendraThesaurusTimeouts | cdktf.IResolvable): any;
export declare function kendraThesaurusTimeoutsToHclTerraform(struct?: KendraThesaurusTimeouts | cdktf.IResolvable): any;
export declare class KendraThesaurusTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): KendraThesaurusTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: KendraThesaurusTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus aws_kendra_thesaurus}
*/
export declare class KendraThesaurus extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_kendra_thesaurus";
    /**
    * Generates CDKTF code for importing a KendraThesaurus resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the KendraThesaurus to import
    * @param importFromId The id of the existing KendraThesaurus that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the KendraThesaurus to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/kendra_thesaurus aws_kendra_thesaurus} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KendraThesaurusConfig
    */
    constructor(scope: Construct, id: string, config: KendraThesaurusConfig);
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
    get thesaurusId(): string;
    private _sourceS3Path;
    get sourceS3Path(): KendraThesaurusSourceS3PathOutputReference;
    putSourceS3Path(value: KendraThesaurusSourceS3Path): void;
    get sourceS3PathInput(): KendraThesaurusSourceS3Path | undefined;
    private _timeouts;
    get timeouts(): KendraThesaurusTimeoutsOutputReference;
    putTimeouts(value: KendraThesaurusTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | KendraThesaurusTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
