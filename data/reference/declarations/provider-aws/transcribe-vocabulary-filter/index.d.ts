/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TranscribeVocabularyFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary_filter#id TranscribeVocabularyFilter#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary_filter#language_code TranscribeVocabularyFilter#language_code}
    */
    readonly languageCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary_filter#tags TranscribeVocabularyFilter#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary_filter#tags_all TranscribeVocabularyFilter#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary_filter#vocabulary_filter_file_uri TranscribeVocabularyFilter#vocabulary_filter_file_uri}
    */
    readonly vocabularyFilterFileUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary_filter#vocabulary_filter_name TranscribeVocabularyFilter#vocabulary_filter_name}
    */
    readonly vocabularyFilterName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary_filter#words TranscribeVocabularyFilter#words}
    */
    readonly words?: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary_filter aws_transcribe_vocabulary_filter}
*/
export declare class TranscribeVocabularyFilter extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_transcribe_vocabulary_filter";
    /**
    * Generates CDKTF code for importing a TranscribeVocabularyFilter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TranscribeVocabularyFilter to import
    * @param importFromId The id of the existing TranscribeVocabularyFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary_filter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TranscribeVocabularyFilter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary_filter aws_transcribe_vocabulary_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TranscribeVocabularyFilterConfig
    */
    constructor(scope: Construct, id: string, config: TranscribeVocabularyFilterConfig);
    get arn(): string;
    get downloadUri(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _languageCode?;
    get languageCode(): string;
    set languageCode(value: string);
    get languageCodeInput(): string | undefined;
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
    private _vocabularyFilterFileUri?;
    get vocabularyFilterFileUri(): string;
    set vocabularyFilterFileUri(value: string);
    resetVocabularyFilterFileUri(): void;
    get vocabularyFilterFileUriInput(): string | undefined;
    private _vocabularyFilterName?;
    get vocabularyFilterName(): string;
    set vocabularyFilterName(value: string);
    get vocabularyFilterNameInput(): string | undefined;
    private _words?;
    get words(): string[];
    set words(value: string[]);
    resetWords(): void;
    get wordsInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
