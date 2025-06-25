/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface BedrockagentKnowledgeBaseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#description BedrockagentKnowledgeBase#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#name BedrockagentKnowledgeBase#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#role_arn BedrockagentKnowledgeBase#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#tags BedrockagentKnowledgeBase#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * knowledge_base_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#knowledge_base_configuration BedrockagentKnowledgeBase#knowledge_base_configuration}
    */
    readonly knowledgeBaseConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfiguration[] | cdktf.IResolvable;
    /**
    * storage_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#storage_configuration BedrockagentKnowledgeBase#storage_configuration}
    */
    readonly storageConfiguration?: BedrockagentKnowledgeBaseStorageConfiguration[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#timeouts BedrockagentKnowledgeBase#timeouts}
    */
    readonly timeouts?: BedrockagentKnowledgeBaseTimeouts;
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#dimensions BedrockagentKnowledgeBase#dimensions}
    */
    readonly dimensions?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#embedding_data_type BedrockagentKnowledgeBase#embedding_data_type}
    */
    readonly embeddingDataType?: string;
}
export declare function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration | cdktf.IResolvable | undefined);
    private _dimensions?;
    get dimensions(): number;
    set dimensions(value: number);
    resetDimensions(): void;
    get dimensionsInput(): number | undefined;
    private _embeddingDataType?;
    get embeddingDataType(): string;
    set embeddingDataType(value: string);
    resetEmbeddingDataType(): void;
    get embeddingDataTypeInput(): string | undefined;
}
export declare class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationOutputReference;
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration {
    /**
    * bedrock_embedding_model_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#bedrock_embedding_model_configuration BedrockagentKnowledgeBase#bedrock_embedding_model_configuration}
    */
    readonly bedrockEmbeddingModelConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration | cdktf.IResolvable | undefined);
    private _bedrockEmbeddingModelConfiguration;
    get bedrockEmbeddingModelConfiguration(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfigurationList;
    putBedrockEmbeddingModelConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration[] | cdktf.IResolvable): void;
    resetBedrockEmbeddingModelConfiguration(): void;
    get bedrockEmbeddingModelConfigurationInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationBedrockEmbeddingModelConfiguration[] | undefined;
}
export declare class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationOutputReference;
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#uri BedrockagentKnowledgeBase#uri}
    */
    readonly uri: string;
}
export declare function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location | cdktf.IResolvable | undefined);
    private _uri?;
    get uri(): string;
    set uri(value: string);
    get uriInput(): string | undefined;
}
export declare class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationOutputReference;
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}
    */
    readonly type: string;
    /**
    * s3_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#s3_location BedrockagentKnowledgeBase#s3_location}
    */
    readonly s3Location?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location[] | cdktf.IResolvable;
}
export declare function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _s3Location;
    get s3Location(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3LocationList;
    putS3Location(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location[] | cdktf.IResolvable): void;
    resetS3Location(): void;
    get s3LocationInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationS3Location[] | undefined;
}
export declare class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationOutputReference;
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration {
    /**
    * storage_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#storage_location BedrockagentKnowledgeBase#storage_location}
    */
    readonly storageLocation?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation[] | cdktf.IResolvable;
}
export declare function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration | cdktf.IResolvable | undefined);
    private _storageLocation;
    get storageLocation(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocationList;
    putStorageLocation(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation[] | cdktf.IResolvable): void;
    resetStorageLocation(): void;
    get storageLocationInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationStorageLocation[] | undefined;
}
export declare class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationOutputReference;
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#embedding_model_arn BedrockagentKnowledgeBase#embedding_model_arn}
    */
    readonly embeddingModelArn: string;
    /**
    * embedding_model_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#embedding_model_configuration BedrockagentKnowledgeBase#embedding_model_configuration}
    */
    readonly embeddingModelConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration[] | cdktf.IResolvable;
    /**
    * supplemental_data_storage_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#supplemental_data_storage_configuration BedrockagentKnowledgeBase#supplemental_data_storage_configuration}
    */
    readonly supplementalDataStorageConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration | cdktf.IResolvable | undefined);
    private _embeddingModelArn?;
    get embeddingModelArn(): string;
    set embeddingModelArn(value: string);
    get embeddingModelArnInput(): string | undefined;
    private _embeddingModelConfiguration;
    get embeddingModelConfiguration(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfigurationList;
    putEmbeddingModelConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration[] | cdktf.IResolvable): void;
    resetEmbeddingModelConfiguration(): void;
    get embeddingModelConfigurationInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationEmbeddingModelConfiguration[] | undefined;
    private _supplementalDataStorageConfiguration;
    get supplementalDataStorageConfiguration(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfigurationList;
    putSupplementalDataStorageConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration[] | cdktf.IResolvable): void;
    resetSupplementalDataStorageConfiguration(): void;
    get supplementalDataStorageConfigurationInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationSupplementalDataStorageConfiguration[] | undefined;
}
export declare class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationOutputReference;
}
export interface BedrockagentKnowledgeBaseKnowledgeBaseConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}
    */
    readonly type: string;
    /**
    * vector_knowledge_base_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#vector_knowledge_base_configuration BedrockagentKnowledgeBase#vector_knowledge_base_configuration}
    */
    readonly vectorKnowledgeBaseConfiguration?: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseKnowledgeBaseConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseKnowledgeBaseConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentKnowledgeBaseKnowledgeBaseConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseKnowledgeBaseConfiguration | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _vectorKnowledgeBaseConfiguration;
    get vectorKnowledgeBaseConfiguration(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfigurationList;
    putVectorKnowledgeBaseConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration[] | cdktf.IResolvable): void;
    resetVectorKnowledgeBaseConfiguration(): void;
    get vectorKnowledgeBaseConfigurationInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseKnowledgeBaseConfigurationVectorKnowledgeBaseConfiguration[] | undefined;
}
export declare class BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentKnowledgeBaseKnowledgeBaseConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationOutputReference;
}
export interface BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}
    */
    readonly metadataField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}
    */
    readonly textField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}
    */
    readonly vectorField?: string;
}
export declare function bedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping | cdktf.IResolvable | undefined);
    private _metadataField?;
    get metadataField(): string;
    set metadataField(value: string);
    resetMetadataField(): void;
    get metadataFieldInput(): string | undefined;
    private _textField?;
    get textField(): string;
    set textField(value: string);
    resetTextField(): void;
    get textFieldInput(): string | undefined;
    private _vectorField?;
    get vectorField(): string;
    set vectorField(value: string);
    resetVectorField(): void;
    get vectorFieldInput(): string | undefined;
}
export declare class BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingOutputReference;
}
export interface BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#collection_arn BedrockagentKnowledgeBase#collection_arn}
    */
    readonly collectionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#vector_index_name BedrockagentKnowledgeBase#vector_index_name}
    */
    readonly vectorIndexName: string;
    /**
    * field_mapping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}
    */
    readonly fieldMapping?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping[] | cdktf.IResolvable;
}
export declare function bedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration | cdktf.IResolvable | undefined);
    private _collectionArn?;
    get collectionArn(): string;
    set collectionArn(value: string);
    get collectionArnInput(): string | undefined;
    private _vectorIndexName?;
    get vectorIndexName(): string;
    set vectorIndexName(value: string);
    get vectorIndexNameInput(): string | undefined;
    private _fieldMapping;
    get fieldMapping(): BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMappingList;
    putFieldMapping(value: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping[] | cdktf.IResolvable): void;
    resetFieldMapping(): void;
    get fieldMappingInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationFieldMapping[] | undefined;
}
export declare class BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationOutputReference;
}
export interface BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}
    */
    readonly metadataField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}
    */
    readonly textField?: string;
}
export declare function bedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping | cdktf.IResolvable | undefined);
    private _metadataField?;
    get metadataField(): string;
    set metadataField(value: string);
    resetMetadataField(): void;
    get metadataFieldInput(): string | undefined;
    private _textField?;
    get textField(): string;
    set textField(value: string);
    resetTextField(): void;
    get textFieldInput(): string | undefined;
}
export declare class BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingOutputReference;
}
export interface BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#connection_string BedrockagentKnowledgeBase#connection_string}
    */
    readonly connectionString: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}
    */
    readonly credentialsSecretArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#namespace BedrockagentKnowledgeBase#namespace}
    */
    readonly namespace?: string;
    /**
    * field_mapping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}
    */
    readonly fieldMapping?: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping[] | cdktf.IResolvable;
}
export declare function bedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration | cdktf.IResolvable | undefined);
    private _connectionString?;
    get connectionString(): string;
    set connectionString(value: string);
    get connectionStringInput(): string | undefined;
    private _credentialsSecretArn?;
    get credentialsSecretArn(): string;
    set credentialsSecretArn(value: string);
    get credentialsSecretArnInput(): string | undefined;
    private _namespace?;
    get namespace(): string;
    set namespace(value: string);
    resetNamespace(): void;
    get namespaceInput(): string | undefined;
    private _fieldMapping;
    get fieldMapping(): BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMappingList;
    putFieldMapping(value: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping[] | cdktf.IResolvable): void;
    resetFieldMapping(): void;
    get fieldMappingInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationFieldMapping[] | undefined;
}
export declare class BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationOutputReference;
}
export interface BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}
    */
    readonly metadataField: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#primary_key_field BedrockagentKnowledgeBase#primary_key_field}
    */
    readonly primaryKeyField: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}
    */
    readonly textField: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}
    */
    readonly vectorField: string;
}
export declare function bedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping | cdktf.IResolvable | undefined);
    private _metadataField?;
    get metadataField(): string;
    set metadataField(value: string);
    get metadataFieldInput(): string | undefined;
    private _primaryKeyField?;
    get primaryKeyField(): string;
    set primaryKeyField(value: string);
    get primaryKeyFieldInput(): string | undefined;
    private _textField?;
    get textField(): string;
    set textField(value: string);
    get textFieldInput(): string | undefined;
    private _vectorField?;
    get vectorField(): string;
    set vectorField(value: string);
    get vectorFieldInput(): string | undefined;
}
export declare class BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingOutputReference;
}
export interface BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}
    */
    readonly credentialsSecretArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#database_name BedrockagentKnowledgeBase#database_name}
    */
    readonly databaseName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#resource_arn BedrockagentKnowledgeBase#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#table_name BedrockagentKnowledgeBase#table_name}
    */
    readonly tableName: string;
    /**
    * field_mapping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}
    */
    readonly fieldMapping?: BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping[] | cdktf.IResolvable;
}
export declare function bedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration | cdktf.IResolvable | undefined);
    private _credentialsSecretArn?;
    get credentialsSecretArn(): string;
    set credentialsSecretArn(value: string);
    get credentialsSecretArnInput(): string | undefined;
    private _databaseName?;
    get databaseName(): string;
    set databaseName(value: string);
    get databaseNameInput(): string | undefined;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
    private _fieldMapping;
    get fieldMapping(): BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMappingList;
    putFieldMapping(value: BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping[] | cdktf.IResolvable): void;
    resetFieldMapping(): void;
    get fieldMappingInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationFieldMapping[] | undefined;
}
export declare class BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationOutputReference;
}
export interface BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#metadata_field BedrockagentKnowledgeBase#metadata_field}
    */
    readonly metadataField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#text_field BedrockagentKnowledgeBase#text_field}
    */
    readonly textField?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#vector_field BedrockagentKnowledgeBase#vector_field}
    */
    readonly vectorField?: string;
}
export declare function bedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping | cdktf.IResolvable | undefined);
    private _metadataField?;
    get metadataField(): string;
    set metadataField(value: string);
    resetMetadataField(): void;
    get metadataFieldInput(): string | undefined;
    private _textField?;
    get textField(): string;
    set textField(value: string);
    resetTextField(): void;
    get textFieldInput(): string | undefined;
    private _vectorField?;
    get vectorField(): string;
    set vectorField(value: string);
    resetVectorField(): void;
    get vectorFieldInput(): string | undefined;
}
export declare class BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingOutputReference;
}
export interface BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#credentials_secret_arn BedrockagentKnowledgeBase#credentials_secret_arn}
    */
    readonly credentialsSecretArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#endpoint BedrockagentKnowledgeBase#endpoint}
    */
    readonly endpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#vector_index_name BedrockagentKnowledgeBase#vector_index_name}
    */
    readonly vectorIndexName: string;
    /**
    * field_mapping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#field_mapping BedrockagentKnowledgeBase#field_mapping}
    */
    readonly fieldMapping?: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping[] | cdktf.IResolvable;
}
export declare function bedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration | cdktf.IResolvable | undefined);
    private _credentialsSecretArn?;
    get credentialsSecretArn(): string;
    set credentialsSecretArn(value: string);
    get credentialsSecretArnInput(): string | undefined;
    private _endpoint?;
    get endpoint(): string;
    set endpoint(value: string);
    get endpointInput(): string | undefined;
    private _vectorIndexName?;
    get vectorIndexName(): string;
    set vectorIndexName(value: string);
    get vectorIndexNameInput(): string | undefined;
    private _fieldMapping;
    get fieldMapping(): BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMappingList;
    putFieldMapping(value: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping[] | cdktf.IResolvable): void;
    resetFieldMapping(): void;
    get fieldMappingInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationFieldMapping[] | undefined;
}
export declare class BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationOutputReference;
}
export interface BedrockagentKnowledgeBaseStorageConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#type BedrockagentKnowledgeBase#type}
    */
    readonly type: string;
    /**
    * opensearch_serverless_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#opensearch_serverless_configuration BedrockagentKnowledgeBase#opensearch_serverless_configuration}
    */
    readonly opensearchServerlessConfiguration?: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration[] | cdktf.IResolvable;
    /**
    * pinecone_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#pinecone_configuration BedrockagentKnowledgeBase#pinecone_configuration}
    */
    readonly pineconeConfiguration?: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration[] | cdktf.IResolvable;
    /**
    * rds_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#rds_configuration BedrockagentKnowledgeBase#rds_configuration}
    */
    readonly rdsConfiguration?: BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration[] | cdktf.IResolvable;
    /**
    * redis_enterprise_cloud_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#redis_enterprise_cloud_configuration BedrockagentKnowledgeBase#redis_enterprise_cloud_configuration}
    */
    readonly redisEnterpriseCloudConfiguration?: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration[] | cdktf.IResolvable;
}
export declare function bedrockagentKnowledgeBaseStorageConfigurationToTerraform(struct?: BedrockagentKnowledgeBaseStorageConfiguration | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseStorageConfigurationToHclTerraform(struct?: BedrockagentKnowledgeBaseStorageConfiguration | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseStorageConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): BedrockagentKnowledgeBaseStorageConfiguration | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseStorageConfiguration | cdktf.IResolvable | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _opensearchServerlessConfiguration;
    get opensearchServerlessConfiguration(): BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfigurationList;
    putOpensearchServerlessConfiguration(value: BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration[] | cdktf.IResolvable): void;
    resetOpensearchServerlessConfiguration(): void;
    get opensearchServerlessConfigurationInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseStorageConfigurationOpensearchServerlessConfiguration[] | undefined;
    private _pineconeConfiguration;
    get pineconeConfiguration(): BedrockagentKnowledgeBaseStorageConfigurationPineconeConfigurationList;
    putPineconeConfiguration(value: BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration[] | cdktf.IResolvable): void;
    resetPineconeConfiguration(): void;
    get pineconeConfigurationInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseStorageConfigurationPineconeConfiguration[] | undefined;
    private _rdsConfiguration;
    get rdsConfiguration(): BedrockagentKnowledgeBaseStorageConfigurationRdsConfigurationList;
    putRdsConfiguration(value: BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration[] | cdktf.IResolvable): void;
    resetRdsConfiguration(): void;
    get rdsConfigurationInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseStorageConfigurationRdsConfiguration[] | undefined;
    private _redisEnterpriseCloudConfiguration;
    get redisEnterpriseCloudConfiguration(): BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfigurationList;
    putRedisEnterpriseCloudConfiguration(value: BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration[] | cdktf.IResolvable): void;
    resetRedisEnterpriseCloudConfiguration(): void;
    get redisEnterpriseCloudConfigurationInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseStorageConfigurationRedisEnterpriseCloudConfiguration[] | undefined;
}
export declare class BedrockagentKnowledgeBaseStorageConfigurationList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: BedrockagentKnowledgeBaseStorageConfiguration[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): BedrockagentKnowledgeBaseStorageConfigurationOutputReference;
}
export interface BedrockagentKnowledgeBaseTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#create BedrockagentKnowledgeBase#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#delete BedrockagentKnowledgeBase#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#update BedrockagentKnowledgeBase#update}
    */
    readonly update?: string;
}
export declare function bedrockagentKnowledgeBaseTimeoutsToTerraform(struct?: BedrockagentKnowledgeBaseTimeouts | cdktf.IResolvable): any;
export declare function bedrockagentKnowledgeBaseTimeoutsToHclTerraform(struct?: BedrockagentKnowledgeBaseTimeouts | cdktf.IResolvable): any;
export declare class BedrockagentKnowledgeBaseTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): BedrockagentKnowledgeBaseTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: BedrockagentKnowledgeBaseTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base aws_bedrockagent_knowledge_base}
*/
export declare class BedrockagentKnowledgeBase extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_bedrockagent_knowledge_base";
    /**
    * Generates CDKTF code for importing a BedrockagentKnowledgeBase resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the BedrockagentKnowledgeBase to import
    * @param importFromId The id of the existing BedrockagentKnowledgeBase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the BedrockagentKnowledgeBase to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/bedrockagent_knowledge_base aws_bedrockagent_knowledge_base} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BedrockagentKnowledgeBaseConfig
    */
    constructor(scope: Construct, id: string, config: BedrockagentKnowledgeBaseConfig);
    get arn(): string;
    get createdAt(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    get failureReasons(): string[];
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    get updatedAt(): string;
    private _knowledgeBaseConfiguration;
    get knowledgeBaseConfiguration(): BedrockagentKnowledgeBaseKnowledgeBaseConfigurationList;
    putKnowledgeBaseConfiguration(value: BedrockagentKnowledgeBaseKnowledgeBaseConfiguration[] | cdktf.IResolvable): void;
    resetKnowledgeBaseConfiguration(): void;
    get knowledgeBaseConfigurationInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseKnowledgeBaseConfiguration[] | undefined;
    private _storageConfiguration;
    get storageConfiguration(): BedrockagentKnowledgeBaseStorageConfigurationList;
    putStorageConfiguration(value: BedrockagentKnowledgeBaseStorageConfiguration[] | cdktf.IResolvable): void;
    resetStorageConfiguration(): void;
    get storageConfigurationInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseStorageConfiguration[] | undefined;
    private _timeouts;
    get timeouts(): BedrockagentKnowledgeBaseTimeoutsOutputReference;
    putTimeouts(value: BedrockagentKnowledgeBaseTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | BedrockagentKnowledgeBaseTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
