/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsConnectVocabularyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_vocabulary#id DataAwsConnectVocabulary#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_vocabulary#instance_id DataAwsConnectVocabulary#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_vocabulary#name DataAwsConnectVocabulary#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_vocabulary#tags DataAwsConnectVocabulary#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_vocabulary#vocabulary_id DataAwsConnectVocabulary#vocabulary_id}
    */
    readonly vocabularyId?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_vocabulary aws_connect_vocabulary}
*/
export declare class DataAwsConnectVocabulary extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_connect_vocabulary";
    /**
    * Generates CDKTF code for importing a DataAwsConnectVocabulary resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsConnectVocabulary to import
    * @param importFromId The id of the existing DataAwsConnectVocabulary that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_vocabulary#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsConnectVocabulary to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/connect_vocabulary aws_connect_vocabulary} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectVocabularyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsConnectVocabularyConfig);
    get arn(): string;
    get content(): string;
    get failureReason(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string | undefined;
    get languageCode(): string;
    get lastModifiedTime(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get state(): string;
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
    private _vocabularyId?;
    get vocabularyId(): string;
    set vocabularyId(value: string);
    resetVocabularyId(): void;
    get vocabularyIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
