/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ComprehendEntityRecognizerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#data_access_role_arn ComprehendEntityRecognizer#data_access_role_arn}
    */
    readonly dataAccessRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#id ComprehendEntityRecognizer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#language_code ComprehendEntityRecognizer#language_code}
    */
    readonly languageCode: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#model_kms_key_id ComprehendEntityRecognizer#model_kms_key_id}
    */
    readonly modelKmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#name ComprehendEntityRecognizer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#tags ComprehendEntityRecognizer#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#tags_all ComprehendEntityRecognizer#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#version_name ComprehendEntityRecognizer#version_name}
    */
    readonly versionName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#version_name_prefix ComprehendEntityRecognizer#version_name_prefix}
    */
    readonly versionNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#volume_kms_key_id ComprehendEntityRecognizer#volume_kms_key_id}
    */
    readonly volumeKmsKeyId?: string;
    /**
    * input_data_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#input_data_config ComprehendEntityRecognizer#input_data_config}
    */
    readonly inputDataConfig: ComprehendEntityRecognizerInputDataConfig;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#timeouts ComprehendEntityRecognizer#timeouts}
    */
    readonly timeouts?: ComprehendEntityRecognizerTimeouts;
    /**
    * vpc_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#vpc_config ComprehendEntityRecognizer#vpc_config}
    */
    readonly vpcConfig?: ComprehendEntityRecognizerVpcConfig;
}
export interface ComprehendEntityRecognizerInputDataConfigAnnotations {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}
    */
    readonly s3Uri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}
    */
    readonly testS3Uri?: string;
}
export declare function comprehendEntityRecognizerInputDataConfigAnnotationsToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference | ComprehendEntityRecognizerInputDataConfigAnnotations): any;
export declare function comprehendEntityRecognizerInputDataConfigAnnotationsToHclTerraform(struct?: ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference | ComprehendEntityRecognizerInputDataConfigAnnotations): any;
export declare class ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ComprehendEntityRecognizerInputDataConfigAnnotations | undefined;
    set internalValue(value: ComprehendEntityRecognizerInputDataConfigAnnotations | undefined);
    private _s3Uri?;
    get s3Uri(): string;
    set s3Uri(value: string);
    get s3UriInput(): string | undefined;
    private _testS3Uri?;
    get testS3Uri(): string;
    set testS3Uri(value: string);
    resetTestS3Uri(): void;
    get testS3UriInput(): string | undefined;
}
export interface ComprehendEntityRecognizerInputDataConfigAugmentedManifests {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#annotation_data_s3_uri ComprehendEntityRecognizer#annotation_data_s3_uri}
    */
    readonly annotationDataS3Uri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#attribute_names ComprehendEntityRecognizer#attribute_names}
    */
    readonly attributeNames: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#document_type ComprehendEntityRecognizer#document_type}
    */
    readonly documentType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}
    */
    readonly s3Uri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#source_documents_s3_uri ComprehendEntityRecognizer#source_documents_s3_uri}
    */
    readonly sourceDocumentsS3Uri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#split ComprehendEntityRecognizer#split}
    */
    readonly split?: string;
}
export declare function comprehendEntityRecognizerInputDataConfigAugmentedManifestsToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigAugmentedManifests | cdktf.IResolvable): any;
export declare function comprehendEntityRecognizerInputDataConfigAugmentedManifestsToHclTerraform(struct?: ComprehendEntityRecognizerInputDataConfigAugmentedManifests | cdktf.IResolvable): any;
export declare class ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ComprehendEntityRecognizerInputDataConfigAugmentedManifests | cdktf.IResolvable | undefined;
    set internalValue(value: ComprehendEntityRecognizerInputDataConfigAugmentedManifests | cdktf.IResolvable | undefined);
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
export declare class ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ComprehendEntityRecognizerInputDataConfigAugmentedManifests[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ComprehendEntityRecognizerInputDataConfigAugmentedManifestsOutputReference;
}
export interface ComprehendEntityRecognizerInputDataConfigDocuments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#input_format ComprehendEntityRecognizer#input_format}
    */
    readonly inputFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}
    */
    readonly s3Uri: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#test_s3_uri ComprehendEntityRecognizer#test_s3_uri}
    */
    readonly testS3Uri?: string;
}
export declare function comprehendEntityRecognizerInputDataConfigDocumentsToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference | ComprehendEntityRecognizerInputDataConfigDocuments): any;
export declare function comprehendEntityRecognizerInputDataConfigDocumentsToHclTerraform(struct?: ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference | ComprehendEntityRecognizerInputDataConfigDocuments): any;
export declare class ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ComprehendEntityRecognizerInputDataConfigDocuments | undefined;
    set internalValue(value: ComprehendEntityRecognizerInputDataConfigDocuments | undefined);
    private _inputFormat?;
    get inputFormat(): string;
    set inputFormat(value: string);
    resetInputFormat(): void;
    get inputFormatInput(): string | undefined;
    private _s3Uri?;
    get s3Uri(): string;
    set s3Uri(value: string);
    get s3UriInput(): string | undefined;
    private _testS3Uri?;
    get testS3Uri(): string;
    set testS3Uri(value: string);
    resetTestS3Uri(): void;
    get testS3UriInput(): string | undefined;
}
export interface ComprehendEntityRecognizerInputDataConfigEntityListStruct {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#s3_uri ComprehendEntityRecognizer#s3_uri}
    */
    readonly s3Uri: string;
}
export declare function comprehendEntityRecognizerInputDataConfigEntityListStructToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference | ComprehendEntityRecognizerInputDataConfigEntityListStruct): any;
export declare function comprehendEntityRecognizerInputDataConfigEntityListStructToHclTerraform(struct?: ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference | ComprehendEntityRecognizerInputDataConfigEntityListStruct): any;
export declare class ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ComprehendEntityRecognizerInputDataConfigEntityListStruct | undefined;
    set internalValue(value: ComprehendEntityRecognizerInputDataConfigEntityListStruct | undefined);
    private _s3Uri?;
    get s3Uri(): string;
    set s3Uri(value: string);
    get s3UriInput(): string | undefined;
}
export interface ComprehendEntityRecognizerInputDataConfigEntityTypes {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#type ComprehendEntityRecognizer#type}
    */
    readonly type: string;
}
export declare function comprehendEntityRecognizerInputDataConfigEntityTypesToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigEntityTypes | cdktf.IResolvable): any;
export declare function comprehendEntityRecognizerInputDataConfigEntityTypesToHclTerraform(struct?: ComprehendEntityRecognizerInputDataConfigEntityTypes | cdktf.IResolvable): any;
export declare class ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ComprehendEntityRecognizerInputDataConfigEntityTypes | cdktf.IResolvable | undefined;
    set internalValue(value: ComprehendEntityRecognizerInputDataConfigEntityTypes | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
}
export declare class ComprehendEntityRecognizerInputDataConfigEntityTypesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ComprehendEntityRecognizerInputDataConfigEntityTypes[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ComprehendEntityRecognizerInputDataConfigEntityTypesOutputReference;
}
export interface ComprehendEntityRecognizerInputDataConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#data_format ComprehendEntityRecognizer#data_format}
    */
    readonly dataFormat?: string;
    /**
    * annotations block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#annotations ComprehendEntityRecognizer#annotations}
    */
    readonly annotations?: ComprehendEntityRecognizerInputDataConfigAnnotations;
    /**
    * augmented_manifests block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#augmented_manifests ComprehendEntityRecognizer#augmented_manifests}
    */
    readonly augmentedManifests?: ComprehendEntityRecognizerInputDataConfigAugmentedManifests[] | cdktf.IResolvable;
    /**
    * documents block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#documents ComprehendEntityRecognizer#documents}
    */
    readonly documents?: ComprehendEntityRecognizerInputDataConfigDocuments;
    /**
    * entity_list block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#entity_list ComprehendEntityRecognizer#entity_list}
    */
    readonly entityList?: ComprehendEntityRecognizerInputDataConfigEntityListStruct;
    /**
    * entity_types block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#entity_types ComprehendEntityRecognizer#entity_types}
    */
    readonly entityTypes: ComprehendEntityRecognizerInputDataConfigEntityTypes[] | cdktf.IResolvable;
}
export declare function comprehendEntityRecognizerInputDataConfigToTerraform(struct?: ComprehendEntityRecognizerInputDataConfigOutputReference | ComprehendEntityRecognizerInputDataConfig): any;
export declare function comprehendEntityRecognizerInputDataConfigToHclTerraform(struct?: ComprehendEntityRecognizerInputDataConfigOutputReference | ComprehendEntityRecognizerInputDataConfig): any;
export declare class ComprehendEntityRecognizerInputDataConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ComprehendEntityRecognizerInputDataConfig | undefined;
    set internalValue(value: ComprehendEntityRecognizerInputDataConfig | undefined);
    private _dataFormat?;
    get dataFormat(): string;
    set dataFormat(value: string);
    resetDataFormat(): void;
    get dataFormatInput(): string | undefined;
    private _annotations;
    get annotations(): ComprehendEntityRecognizerInputDataConfigAnnotationsOutputReference;
    putAnnotations(value: ComprehendEntityRecognizerInputDataConfigAnnotations): void;
    resetAnnotations(): void;
    get annotationsInput(): ComprehendEntityRecognizerInputDataConfigAnnotations | undefined;
    private _augmentedManifests;
    get augmentedManifests(): ComprehendEntityRecognizerInputDataConfigAugmentedManifestsList;
    putAugmentedManifests(value: ComprehendEntityRecognizerInputDataConfigAugmentedManifests[] | cdktf.IResolvable): void;
    resetAugmentedManifests(): void;
    get augmentedManifestsInput(): cdktf.IResolvable | ComprehendEntityRecognizerInputDataConfigAugmentedManifests[] | undefined;
    private _documents;
    get documents(): ComprehendEntityRecognizerInputDataConfigDocumentsOutputReference;
    putDocuments(value: ComprehendEntityRecognizerInputDataConfigDocuments): void;
    resetDocuments(): void;
    get documentsInput(): ComprehendEntityRecognizerInputDataConfigDocuments | undefined;
    private _entityList;
    get entityList(): ComprehendEntityRecognizerInputDataConfigEntityListStructOutputReference;
    putEntityList(value: ComprehendEntityRecognizerInputDataConfigEntityListStruct): void;
    resetEntityList(): void;
    get entityListInput(): ComprehendEntityRecognizerInputDataConfigEntityListStruct | undefined;
    private _entityTypes;
    get entityTypes(): ComprehendEntityRecognizerInputDataConfigEntityTypesList;
    putEntityTypes(value: ComprehendEntityRecognizerInputDataConfigEntityTypes[] | cdktf.IResolvable): void;
    get entityTypesInput(): cdktf.IResolvable | ComprehendEntityRecognizerInputDataConfigEntityTypes[] | undefined;
}
export interface ComprehendEntityRecognizerTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#create ComprehendEntityRecognizer#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#delete ComprehendEntityRecognizer#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#update ComprehendEntityRecognizer#update}
    */
    readonly update?: string;
}
export declare function comprehendEntityRecognizerTimeoutsToTerraform(struct?: ComprehendEntityRecognizerTimeouts | cdktf.IResolvable): any;
export declare function comprehendEntityRecognizerTimeoutsToHclTerraform(struct?: ComprehendEntityRecognizerTimeouts | cdktf.IResolvable): any;
export declare class ComprehendEntityRecognizerTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ComprehendEntityRecognizerTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ComprehendEntityRecognizerTimeouts | cdktf.IResolvable | undefined);
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
export interface ComprehendEntityRecognizerVpcConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#security_group_ids ComprehendEntityRecognizer#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#subnets ComprehendEntityRecognizer#subnets}
    */
    readonly subnets: string[];
}
export declare function comprehendEntityRecognizerVpcConfigToTerraform(struct?: ComprehendEntityRecognizerVpcConfigOutputReference | ComprehendEntityRecognizerVpcConfig): any;
export declare function comprehendEntityRecognizerVpcConfigToHclTerraform(struct?: ComprehendEntityRecognizerVpcConfigOutputReference | ComprehendEntityRecognizerVpcConfig): any;
export declare class ComprehendEntityRecognizerVpcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ComprehendEntityRecognizerVpcConfig | undefined;
    set internalValue(value: ComprehendEntityRecognizerVpcConfig | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer aws_comprehend_entity_recognizer}
*/
export declare class ComprehendEntityRecognizer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_comprehend_entity_recognizer";
    /**
    * Generates CDKTF code for importing a ComprehendEntityRecognizer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ComprehendEntityRecognizer to import
    * @param importFromId The id of the existing ComprehendEntityRecognizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ComprehendEntityRecognizer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/comprehend_entity_recognizer aws_comprehend_entity_recognizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ComprehendEntityRecognizerConfig
    */
    constructor(scope: Construct, id: string, config: ComprehendEntityRecognizerConfig);
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
    get inputDataConfig(): ComprehendEntityRecognizerInputDataConfigOutputReference;
    putInputDataConfig(value: ComprehendEntityRecognizerInputDataConfig): void;
    get inputDataConfigInput(): ComprehendEntityRecognizerInputDataConfig | undefined;
    private _timeouts;
    get timeouts(): ComprehendEntityRecognizerTimeoutsOutputReference;
    putTimeouts(value: ComprehendEntityRecognizerTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ComprehendEntityRecognizerTimeouts | undefined;
    private _vpcConfig;
    get vpcConfig(): ComprehendEntityRecognizerVpcConfigOutputReference;
    putVpcConfig(value: ComprehendEntityRecognizerVpcConfig): void;
    resetVpcConfig(): void;
    get vpcConfigInput(): ComprehendEntityRecognizerVpcConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
