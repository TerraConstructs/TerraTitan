/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface TranscribeLanguageModelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_language_model#base_model_name TranscribeLanguageModel#base_model_name}
    */
    readonly baseModelName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_language_model#id TranscribeLanguageModel#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_language_model#language_code TranscribeLanguageModel#language_code}
    */
    readonly languageCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_language_model#model_name TranscribeLanguageModel#model_name}
    */
    readonly modelName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_language_model#tags TranscribeLanguageModel#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_language_model#tags_all TranscribeLanguageModel#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * input_data_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_language_model#input_data_config TranscribeLanguageModel#input_data_config}
    */
    readonly inputDataConfig: TranscribeLanguageModelInputDataConfig;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_language_model#timeouts TranscribeLanguageModel#timeouts}
    */
    readonly timeouts?: TranscribeLanguageModelTimeouts;
}
export interface TranscribeLanguageModelInputDataConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_language_model#data_access_role_arn TranscribeLanguageModel#data_access_role_arn}
    */
    readonly dataAccessRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_language_model#s3_uri TranscribeLanguageModel#s3_uri}
    */
    readonly s3Uri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_language_model#tuning_data_s3_uri TranscribeLanguageModel#tuning_data_s3_uri}
    */
    readonly tuningDataS3Uri?: string;
}
export declare function transcribeLanguageModelInputDataConfigToTerraform(struct?: TranscribeLanguageModelInputDataConfigOutputReference | TranscribeLanguageModelInputDataConfig): any;
export declare function transcribeLanguageModelInputDataConfigToHclTerraform(struct?: TranscribeLanguageModelInputDataConfigOutputReference | TranscribeLanguageModelInputDataConfig): any;
export declare class TranscribeLanguageModelInputDataConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TranscribeLanguageModelInputDataConfig | undefined;
    set internalValue(value: TranscribeLanguageModelInputDataConfig | undefined);
    private _dataAccessRoleArn?;
    get dataAccessRoleArn(): string;
    set dataAccessRoleArn(value: string);
    get dataAccessRoleArnInput(): string | undefined;
    private _s3Uri?;
    get s3Uri(): string;
    set s3Uri(value: string);
    get s3UriInput(): string | undefined;
    private _tuningDataS3Uri?;
    get tuningDataS3Uri(): string;
    set tuningDataS3Uri(value: string);
    resetTuningDataS3Uri(): void;
    get tuningDataS3UriInput(): string | undefined;
}
export interface TranscribeLanguageModelTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_language_model#create TranscribeLanguageModel#create}
    */
    readonly create?: string;
}
export declare function transcribeLanguageModelTimeoutsToTerraform(struct?: TranscribeLanguageModelTimeouts | cdktf.IResolvable): any;
export declare function transcribeLanguageModelTimeoutsToHclTerraform(struct?: TranscribeLanguageModelTimeouts | cdktf.IResolvable): any;
export declare class TranscribeLanguageModelTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): TranscribeLanguageModelTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: TranscribeLanguageModelTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_language_model aws_transcribe_language_model}
*/
export declare class TranscribeLanguageModel extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_transcribe_language_model";
    /**
    * Generates CDKTF code for importing a TranscribeLanguageModel resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the TranscribeLanguageModel to import
    * @param importFromId The id of the existing TranscribeLanguageModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_language_model#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the TranscribeLanguageModel to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/transcribe_language_model aws_transcribe_language_model} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TranscribeLanguageModelConfig
    */
    constructor(scope: Construct, id: string, config: TranscribeLanguageModelConfig);
    get arn(): string;
    private _baseModelName?;
    get baseModelName(): string;
    set baseModelName(value: string);
    get baseModelNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _languageCode?;
    get languageCode(): string;
    set languageCode(value: string);
    get languageCodeInput(): string | undefined;
    private _modelName?;
    get modelName(): string;
    set modelName(value: string);
    get modelNameInput(): string | undefined;
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
    private _inputDataConfig;
    get inputDataConfig(): TranscribeLanguageModelInputDataConfigOutputReference;
    putInputDataConfig(value: TranscribeLanguageModelInputDataConfig): void;
    get inputDataConfigInput(): TranscribeLanguageModelInputDataConfig | undefined;
    private _timeouts;
    get timeouts(): TranscribeLanguageModelTimeoutsOutputReference;
    putTimeouts(value: TranscribeLanguageModelTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | TranscribeLanguageModelTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
