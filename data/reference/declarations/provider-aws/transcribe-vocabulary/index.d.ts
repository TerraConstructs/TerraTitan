/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TranscribeVocabularyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary#id TranscribeVocabulary#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary#language_code TranscribeVocabulary#language_code}
    */
    readonly languageCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary#phrases TranscribeVocabulary#phrases}
    */
    readonly phrases?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary#tags TranscribeVocabulary#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary#tags_all TranscribeVocabulary#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary#vocabulary_file_uri TranscribeVocabulary#vocabulary_file_uri}
    */
    readonly vocabularyFileUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary#vocabulary_name TranscribeVocabulary#vocabulary_name}
    */
    readonly vocabularyName: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary#timeouts TranscribeVocabulary#timeouts}
    */
    readonly timeouts?: TranscribeVocabularyTimeouts;
}
export interface TranscribeVocabularyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary#create TranscribeVocabulary#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary#delete TranscribeVocabulary#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary#update TranscribeVocabulary#update}
    */
    readonly update?: string;
}
export declare function transcribeVocabularyTimeoutsToTerraform(struct?: TranscribeVocabularyTimeouts | cdktf.IResolvable): any;
export declare function transcribeVocabularyTimeoutsToHclTerraform(struct?: TranscribeVocabularyTimeouts | cdktf.IResolvable): any;
export declare class TranscribeVocabularyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TranscribeVocabularyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: TranscribeVocabularyTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary aws_transcribe_vocabulary}
*/
export declare class TranscribeVocabulary extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_transcribe_vocabulary";
    /**
    * Generates CDKTF code for importing a TranscribeVocabulary resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TranscribeVocabulary to import
    * @param importFromId The id of the existing TranscribeVocabulary that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TranscribeVocabulary to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_vocabulary aws_transcribe_vocabulary} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TranscribeVocabularyConfig
    */
    constructor(scope: Construct, id: string, config: TranscribeVocabularyConfig);
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
    private _phrases?;
    get phrases(): string[];
    set phrases(value: string[]);
    resetPhrases(): void;
    get phrasesInput(): string[] | undefined;
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
    private _vocabularyFileUri?;
    get vocabularyFileUri(): string;
    set vocabularyFileUri(value: string);
    resetVocabularyFileUri(): void;
    get vocabularyFileUriInput(): string | undefined;
    private _vocabularyName?;
    get vocabularyName(): string;
    set vocabularyName(value: string);
    get vocabularyNameInput(): string | undefined;
    private _timeouts;
    get timeouts(): TranscribeVocabularyTimeoutsOutputReference;
    putTimeouts(value: TranscribeVocabularyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | TranscribeVocabularyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
