/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ComprehendDocumentClassifierConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#data_access_role_arn ComprehendDocumentClassifier#data_access_role_arn}
    */
    readonly dataAccessRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#id ComprehendDocumentClassifier#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#language_code ComprehendDocumentClassifier#language_code}
    */
    readonly languageCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#mode ComprehendDocumentClassifier#mode}
    */
    readonly mode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#model_kms_key_id ComprehendDocumentClassifier#model_kms_key_id}
    */
    readonly modelKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#name ComprehendDocumentClassifier#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#tags ComprehendDocumentClassifier#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#tags_all ComprehendDocumentClassifier#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#version_name ComprehendDocumentClassifier#version_name}
    */
    readonly versionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#version_name_prefix ComprehendDocumentClassifier#version_name_prefix}
    */
    readonly versionNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#volume_kms_key_id ComprehendDocumentClassifier#volume_kms_key_id}
    */
    readonly volumeKmsKeyId?: string;
    /**
    * input_data_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#input_data_config ComprehendDocumentClassifier#input_data_config}
    */
    readonly inputDataConfig: ComprehendDocumentClassifierInputDataConfig;
    /**
    * output_data_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#output_data_config ComprehendDocumentClassifier#output_data_config}
    */
    readonly outputDataConfig?: ComprehendDocumentClassifierOutputDataConfig;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#timeouts ComprehendDocumentClassifier#timeouts}
    */
    readonly timeouts?: ComprehendDocumentClassifierTimeouts;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#vpc_config ComprehendDocumentClassifier#vpc_config}
    */
    readonly vpcConfig?: ComprehendDocumentClassifierVpcConfig;
}
export interface ComprehendDocumentClassifierInputDataConfigAugmentedManifests {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#annotation_data_s3_uri ComprehendDocumentClassifier#annotation_data_s3_uri}
    */
    readonly annotationDataS3Uri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#attribute_names ComprehendDocumentClassifier#attribute_names}
    */
    readonly attributeNames: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#document_type ComprehendDocumentClassifier#document_type}
    */
    readonly documentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}
    */
    readonly s3Uri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#source_documents_s3_uri ComprehendDocumentClassifier#source_documents_s3_uri}
    */
    readonly sourceDocumentsS3Uri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#split ComprehendDocumentClassifier#split}
    */
    readonly split?: string;
}
export declare function comprehendDocumentClassifierInputDataConfigAugmentedManifestsToTerraform(struct?: ComprehendDocumentClassifierInputDataConfigAugmentedManifests | cdktf.IResolvable): any;
export declare function comprehendDocumentClassifierInputDataConfigAugmentedManifestsToHclTerraform(struct?: ComprehendDocumentClassifierInputDataConfigAugmentedManifests | cdktf.IResolvable): any;
export declare class ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ComprehendDocumentClassifierInputDataConfigAugmentedManifests | cdktf.IResolvable | undefined;
    set internalValue(value: ComprehendDocumentClassifierInputDataConfigAugmentedManifests | cdktf.IResolvable | undefined);
    private _annotationDataS3Uri?;
    get annotationDataS3Uri(): string;
    set annotationDataS3Uri(value: string);
    resetAnnotationDataS3Uri(): void;
    get annotationDataS3UriInput(): string | undefined;
    private _attributeNames?;
    get attributeNames(): string[];
    set attributeNames(value: string[]);
    get attributeNamesInput(): string[] | undefined;
    private _documentType?;
    get documentType(): string;
    set documentType(value: string);
    resetDocumentType(): void;
    get documentTypeInput(): string | undefined;
    private _s3Uri?;
    get s3Uri(): string;
    set s3Uri(value: string);
    get s3UriInput(): string | undefined;
    private _sourceDocumentsS3Uri?;
    get sourceDocumentsS3Uri(): string;
    set sourceDocumentsS3Uri(value: string);
    resetSourceDocumentsS3Uri(): void;
    get sourceDocumentsS3UriInput(): string | undefined;
    private _split?;
    get split(): string;
    set split(value: string);
    resetSplit(): void;
    get splitInput(): string | undefined;
}
export declare class ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ComprehendDocumentClassifierInputDataConfigAugmentedManifests[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference;
}
export interface ComprehendDocumentClassifierInputDataConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#data_format ComprehendDocumentClassifier#data_format}
    */
    readonly dataFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#label_delimiter ComprehendDocumentClassifier#label_delimiter}
    */
    readonly labelDelimiter?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}
    */
    readonly s3Uri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}
    */
    readonly testS3Uri?: string;
    /**
    * augmented_manifests block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#augmented_manifests ComprehendDocumentClassifier#augmented_manifests}
    */
    readonly augmentedManifests?: ComprehendDocumentClassifierInputDataConfigAugmentedManifests[] | cdktf.IResolvable;
}
export declare function comprehendDocumentClassifierInputDataConfigToTerraform(struct?: ComprehendDocumentClassifierInputDataConfigOutputReference | ComprehendDocumentClassifierInputDataConfig): any;
export declare function comprehendDocumentClassifierInputDataConfigToHclTerraform(struct?: ComprehendDocumentClassifierInputDataConfigOutputReference | ComprehendDocumentClassifierInputDataConfig): any;
export declare class ComprehendDocumentClassifierInputDataConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ComprehendDocumentClassifierInputDataConfig | undefined;
    set internalValue(value: ComprehendDocumentClassifierInputDataConfig | undefined);
    private _dataFormat?;
    get dataFormat(): string;
    set dataFormat(value: string);
    resetDataFormat(): void;
    get dataFormatInput(): string | undefined;
    private _labelDelimiter?;
    get labelDelimiter(): string;
    set labelDelimiter(value: string);
    resetLabelDelimiter(): void;
    get labelDelimiterInput(): string | undefined;
    private _s3Uri?;
    get s3Uri(): string;
    set s3Uri(value: string);
    resetS3Uri(): void;
    get s3UriInput(): string | undefined;
    private _testS3Uri?;
    get testS3Uri(): string;
    set testS3Uri(value: string);
    resetTestS3Uri(): void;
    get testS3UriInput(): string | undefined;
    private _augmentedManifests;
    get augmentedManifests(): ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList;
    putAugmentedManifests(value: ComprehendDocumentClassifierInputDataConfigAugmentedManifests[] | cdktf.IResolvable): void;
    resetAugmentedManifests(): void;
    get augmentedManifestsInput(): cdktf.IResolvable | ComprehendDocumentClassifierInputDataConfigAugmentedManifests[] | undefined;
}
export interface ComprehendDocumentClassifierOutputDataConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#kms_key_id ComprehendDocumentClassifier#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}
    */
    readonly s3Uri: string;
}
export declare function comprehendDocumentClassifierOutputDataConfigToTerraform(struct?: ComprehendDocumentClassifierOutputDataConfigOutputReference | ComprehendDocumentClassifierOutputDataConfig): any;
export declare function comprehendDocumentClassifierOutputDataConfigToHclTerraform(struct?: ComprehendDocumentClassifierOutputDataConfigOutputReference | ComprehendDocumentClassifierOutputDataConfig): any;
export declare class ComprehendDocumentClassifierOutputDataConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ComprehendDocumentClassifierOutputDataConfig | undefined;
    set internalValue(value: ComprehendDocumentClassifierOutputDataConfig | undefined);
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    get outputS3Uri(): string;
    private _s3Uri?;
    get s3Uri(): string;
    set s3Uri(value: string);
    get s3UriInput(): string | undefined;
}
export interface ComprehendDocumentClassifierTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#create ComprehendDocumentClassifier#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#delete ComprehendDocumentClassifier#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#update ComprehendDocumentClassifier#update}
    */
    readonly update?: string;
}
export declare function comprehendDocumentClassifierTimeoutsToTerraform(struct?: ComprehendDocumentClassifierTimeouts | cdktf.IResolvable): any;
export declare function comprehendDocumentClassifierTimeoutsToHclTerraform(struct?: ComprehendDocumentClassifierTimeouts | cdktf.IResolvable): any;
export declare class ComprehendDocumentClassifierTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ComprehendDocumentClassifierTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ComprehendDocumentClassifierTimeouts | cdktf.IResolvable | undefined);
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
export interface ComprehendDocumentClassifierVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#security_group_ids ComprehendDocumentClassifier#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#subnets ComprehendDocumentClassifier#subnets}
    */
    readonly subnets: string[];
}
export declare function comprehendDocumentClassifierVpcConfigToTerraform(struct?: ComprehendDocumentClassifierVpcConfigOutputReference | ComprehendDocumentClassifierVpcConfig): any;
export declare function comprehendDocumentClassifierVpcConfigToHclTerraform(struct?: ComprehendDocumentClassifierVpcConfigOutputReference | ComprehendDocumentClassifierVpcConfig): any;
export declare class ComprehendDocumentClassifierVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ComprehendDocumentClassifierVpcConfig | undefined;
    set internalValue(value: ComprehendDocumentClassifierVpcConfig | undefined);
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[] | undefined;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    get subnetsInput(): string[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier aws_comprehend_document_classifier}
*/
export declare class ComprehendDocumentClassifier extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_comprehend_document_classifier";
    /**
    * Generates CDKTF code for importing a ComprehendDocumentClassifier resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ComprehendDocumentClassifier to import
    * @param importFromId The id of the existing ComprehendDocumentClassifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ComprehendDocumentClassifier to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_document_classifier aws_comprehend_document_classifier} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ComprehendDocumentClassifierConfig
    */
    constructor(scope: Construct, id: string, config: ComprehendDocumentClassifierConfig);
    get arn(): string;
    private _dataAccessRoleArn?;
    get dataAccessRoleArn(): string;
    set dataAccessRoleArn(value: string);
    get dataAccessRoleArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _languageCode?;
    get languageCode(): string;
    set languageCode(value: string);
    get languageCodeInput(): string | undefined;
    private _mode?;
    get mode(): string;
    set mode(value: string);
    resetMode(): void;
    get modeInput(): string | undefined;
    private _modelKmsKeyId?;
    get modelKmsKeyId(): string;
    set modelKmsKeyId(value: string);
    resetModelKmsKeyId(): void;
    get modelKmsKeyIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
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
    private _versionName?;
    get versionName(): string;
    set versionName(value: string);
    resetVersionName(): void;
    get versionNameInput(): string | undefined;
    private _versionNamePrefix?;
    get versionNamePrefix(): string;
    set versionNamePrefix(value: string);
    resetVersionNamePrefix(): void;
    get versionNamePrefixInput(): string | undefined;
    private _volumeKmsKeyId?;
    get volumeKmsKeyId(): string;
    set volumeKmsKeyId(value: string);
    resetVolumeKmsKeyId(): void;
    get volumeKmsKeyIdInput(): string | undefined;
    private _inputDataConfig;
    get inputDataConfig(): ComprehendDocumentClassifierInputDataConfigOutputReference;
    putInputDataConfig(value: ComprehendDocumentClassifierInputDataConfig): void;
    get inputDataConfigInput(): ComprehendDocumentClassifierInputDataConfig | undefined;
    private _outputDataConfig;
    get outputDataConfig(): ComprehendDocumentClassifierOutputDataConfigOutputReference;
    putOutputDataConfig(value: ComprehendDocumentClassifierOutputDataConfig): void;
    resetOutputDataConfig(): void;
    get outputDataConfigInput(): ComprehendDocumentClassifierOutputDataConfig | undefined;
    private _timeouts;
    get timeouts(): ComprehendDocumentClassifierTimeoutsOutputReference;
    putTimeouts(value: ComprehendDocumentClassifierTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ComprehendDocumentClassifierTimeouts | undefined;
    private _vpcConfig;
    get vpcConfig(): ComprehendDocumentClassifierVpcConfigOutputReference;
    putVpcConfig(value: ComprehendDocumentClassifierVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): ComprehendDocumentClassifierVpcConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
