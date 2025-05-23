/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TranscribeMedicalVocabularyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_medical_vocabulary#id TranscribeMedicalVocabulary#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_medical_vocabulary#language_code TranscribeMedicalVocabulary#language_code}
    */
    readonly languageCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_medical_vocabulary#tags TranscribeMedicalVocabulary#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_medical_vocabulary#tags_all TranscribeMedicalVocabulary#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_medical_vocabulary#vocabulary_file_uri TranscribeMedicalVocabulary#vocabulary_file_uri}
    */
    readonly vocabularyFileUri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_medical_vocabulary#vocabulary_name TranscribeMedicalVocabulary#vocabulary_name}
    */
    readonly vocabularyName: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_medical_vocabulary#timeouts TranscribeMedicalVocabulary#timeouts}
    */
    readonly timeouts?: TranscribeMedicalVocabularyTimeouts;
}
export interface TranscribeMedicalVocabularyTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_medical_vocabulary#create TranscribeMedicalVocabulary#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_medical_vocabulary#delete TranscribeMedicalVocabulary#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_medical_vocabulary#update TranscribeMedicalVocabulary#update}
    */
    readonly update?: string;
}
export declare function transcribeMedicalVocabularyTimeoutsToTerraform(struct?: TranscribeMedicalVocabularyTimeouts | cdktf.IResolvable): any;
export declare function transcribeMedicalVocabularyTimeoutsToHclTerraform(struct?: TranscribeMedicalVocabularyTimeouts | cdktf.IResolvable): any;
export declare class TranscribeMedicalVocabularyTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TranscribeMedicalVocabularyTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: TranscribeMedicalVocabularyTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_medical_vocabulary aws_transcribe_medical_vocabulary}
*/
export declare class TranscribeMedicalVocabulary extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_transcribe_medical_vocabulary";
    /**
    * Generates CDKTF code for importing a TranscribeMedicalVocabulary resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TranscribeMedicalVocabulary to import
    * @param importFromId The id of the existing TranscribeMedicalVocabulary that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_medical_vocabulary#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TranscribeMedicalVocabulary to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_medical_vocabulary aws_transcribe_medical_vocabulary} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TranscribeMedicalVocabularyConfig
    */
    constructor(scope: Construct, id: string, config: TranscribeMedicalVocabularyConfig);
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
    private _vocabularyFileUri?;
    get vocabularyFileUri(): string;
    set vocabularyFileUri(value: string);
    get vocabularyFileUriInput(): string | undefined;
    private _vocabularyName?;
    get vocabularyName(): string;
    set vocabularyName(value: string);
    get vocabularyNameInput(): string | undefined;
    private _timeouts;
    get timeouts(): TranscribeMedicalVocabularyTimeoutsOutputReference;
    putTimeouts(value: TranscribeMedicalVocabularyTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | TranscribeMedicalVocabularyTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
