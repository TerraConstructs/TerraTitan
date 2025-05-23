/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderContainerRecipeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#container_type ImagebuilderContainerRecipe#container_type}
    */
    readonly containerType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#description ImagebuilderContainerRecipe#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#dockerfile_template_data ImagebuilderContainerRecipe#dockerfile_template_data}
    */
    readonly dockerfileTemplateData?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#dockerfile_template_uri ImagebuilderContainerRecipe#dockerfile_template_uri}
    */
    readonly dockerfileTemplateUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#id ImagebuilderContainerRecipe#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#parent_image ImagebuilderContainerRecipe#parent_image}
    */
    readonly parentImage: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#platform_override ImagebuilderContainerRecipe#platform_override}
    */
    readonly platformOverride?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#tags ImagebuilderContainerRecipe#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#tags_all ImagebuilderContainerRecipe#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#version ImagebuilderContainerRecipe#version}
    */
    readonly version: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#working_directory ImagebuilderContainerRecipe#working_directory}
    */
    readonly workingDirectory?: string;
    /**
    * component block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#component ImagebuilderContainerRecipe#component}
    */
    readonly component: ImagebuilderContainerRecipeComponent[] | cdktf.IResolvable;
    /**
    * instance_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#instance_configuration ImagebuilderContainerRecipe#instance_configuration}
    */
    readonly instanceConfiguration?: ImagebuilderContainerRecipeInstanceConfiguration;
    /**
    * target_repository block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#target_repository ImagebuilderContainerRecipe#target_repository}
    */
    readonly targetRepository: ImagebuilderContainerRecipeTargetRepository;
}
export interface ImagebuilderContainerRecipeComponentParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#name ImagebuilderContainerRecipe#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#value ImagebuilderContainerRecipe#value}
    */
    readonly value: string;
}
export declare function imagebuilderContainerRecipeComponentParameterToTerraform(struct?: ImagebuilderContainerRecipeComponentParameter | cdktf.IResolvable): any;
export declare function imagebuilderContainerRecipeComponentParameterToHclTerraform(struct?: ImagebuilderContainerRecipeComponentParameter | cdktf.IResolvable): any;
export declare class ImagebuilderContainerRecipeComponentParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderContainerRecipeComponentParameter | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderContainerRecipeComponentParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class ImagebuilderContainerRecipeComponentParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderContainerRecipeComponentParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderContainerRecipeComponentParameterOutputReference;
}
export interface ImagebuilderContainerRecipeComponent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#component_arn ImagebuilderContainerRecipe#component_arn}
    */
    readonly componentArn: string;
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#parameter ImagebuilderContainerRecipe#parameter}
    */
    readonly parameter?: ImagebuilderContainerRecipeComponentParameter[] | cdktf.IResolvable;
}
export declare function imagebuilderContainerRecipeComponentToTerraform(struct?: ImagebuilderContainerRecipeComponent | cdktf.IResolvable): any;
export declare function imagebuilderContainerRecipeComponentToHclTerraform(struct?: ImagebuilderContainerRecipeComponent | cdktf.IResolvable): any;
export declare class ImagebuilderContainerRecipeComponentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderContainerRecipeComponent | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderContainerRecipeComponent | cdktf.IResolvable | undefined);
    private _componentArn?;
    get componentArn(): string;
    set componentArn(value: string);
    get componentArnInput(): string | undefined;
    private _parameter;
    get parameter(): ImagebuilderContainerRecipeComponentParameterList;
    putParameter(value: ImagebuilderContainerRecipeComponentParameter[] | cdktf.IResolvable): void;
    resetParameter(): void;
    get parameterInput(): cdktf.IResolvable | ImagebuilderContainerRecipeComponentParameter[] | undefined;
}
export declare class ImagebuilderContainerRecipeComponentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderContainerRecipeComponent[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderContainerRecipeComponentOutputReference;
}
export interface ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#delete_on_termination ImagebuilderContainerRecipe#delete_on_termination}
    */
    readonly deleteOnTermination?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#encrypted ImagebuilderContainerRecipe#encrypted}
    */
    readonly encrypted?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#iops ImagebuilderContainerRecipe#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#kms_key_id ImagebuilderContainerRecipe#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#snapshot_id ImagebuilderContainerRecipe#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#throughput ImagebuilderContainerRecipe#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#volume_size ImagebuilderContainerRecipe#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#volume_type ImagebuilderContainerRecipe#volume_type}
    */
    readonly volumeType?: string;
}
export declare function imagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsToTerraform(struct?: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference | ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs): any;
export declare function imagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsToHclTerraform(struct?: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference | ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs): any;
export declare class ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs | undefined;
    set internalValue(value: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs | undefined);
    private _deleteOnTermination?;
    get deleteOnTermination(): string;
    set deleteOnTermination(value: string);
    resetDeleteOnTermination(): void;
    get deleteOnTerminationInput(): string | undefined;
    private _encrypted?;
    get encrypted(): string;
    set encrypted(value: string);
    resetEncrypted(): void;
    get encryptedInput(): string | undefined;
    private _iops?;
    get iops(): number;
    set iops(value: number);
    resetIops(): void;
    get iopsInput(): number | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _snapshotId?;
    get snapshotId(): string;
    set snapshotId(value: string);
    resetSnapshotId(): void;
    get snapshotIdInput(): string | undefined;
    private _throughput?;
    get throughput(): number;
    set throughput(value: number);
    resetThroughput(): void;
    get throughputInput(): number | undefined;
    private _volumeSize?;
    get volumeSize(): number;
    set volumeSize(value: number);
    resetVolumeSize(): void;
    get volumeSizeInput(): number | undefined;
    private _volumeType?;
    get volumeType(): string;
    set volumeType(value: string);
    resetVolumeType(): void;
    get volumeTypeInput(): string | undefined;
}
export interface ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#device_name ImagebuilderContainerRecipe#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#no_device ImagebuilderContainerRecipe#no_device}
    */
    readonly noDevice?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#virtual_name ImagebuilderContainerRecipe#virtual_name}
    */
    readonly virtualName?: string;
    /**
    * ebs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#ebs ImagebuilderContainerRecipe#ebs}
    */
    readonly ebs?: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs;
}
export declare function imagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingToTerraform(struct?: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping | cdktf.IResolvable): any;
export declare function imagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingToHclTerraform(struct?: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping | cdktf.IResolvable): any;
export declare class ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping | cdktf.IResolvable | undefined);
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    resetDeviceName(): void;
    get deviceNameInput(): string | undefined;
    private _noDevice?;
    get noDevice(): boolean | cdktf.IResolvable;
    set noDevice(value: boolean | cdktf.IResolvable);
    resetNoDevice(): void;
    get noDeviceInput(): boolean | cdktf.IResolvable | undefined;
    private _virtualName?;
    get virtualName(): string;
    set virtualName(value: string);
    resetVirtualName(): void;
    get virtualNameInput(): string | undefined;
    private _ebs;
    get ebs(): ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference;
    putEbs(value: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs): void;
    resetEbs(): void;
    get ebsInput(): ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs | undefined;
}
export declare class ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference;
}
export interface ImagebuilderContainerRecipeInstanceConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#image ImagebuilderContainerRecipe#image}
    */
    readonly image?: string;
    /**
    * block_device_mapping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#block_device_mapping ImagebuilderContainerRecipe#block_device_mapping}
    */
    readonly blockDeviceMapping?: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping[] | cdktf.IResolvable;
}
export declare function imagebuilderContainerRecipeInstanceConfigurationToTerraform(struct?: ImagebuilderContainerRecipeInstanceConfigurationOutputReference | ImagebuilderContainerRecipeInstanceConfiguration): any;
export declare function imagebuilderContainerRecipeInstanceConfigurationToHclTerraform(struct?: ImagebuilderContainerRecipeInstanceConfigurationOutputReference | ImagebuilderContainerRecipeInstanceConfiguration): any;
export declare class ImagebuilderContainerRecipeInstanceConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderContainerRecipeInstanceConfiguration | undefined;
    set internalValue(value: ImagebuilderContainerRecipeInstanceConfiguration | undefined);
    private _image?;
    get image(): string;
    set image(value: string);
    resetImage(): void;
    get imageInput(): string | undefined;
    private _blockDeviceMapping;
    get blockDeviceMapping(): ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList;
    putBlockDeviceMapping(value: ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping[] | cdktf.IResolvable): void;
    resetBlockDeviceMapping(): void;
    get blockDeviceMappingInput(): cdktf.IResolvable | ImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping[] | undefined;
}
export interface ImagebuilderContainerRecipeTargetRepository {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#repository_name ImagebuilderContainerRecipe#repository_name}
    */
    readonly repositoryName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#service ImagebuilderContainerRecipe#service}
    */
    readonly service: string;
}
export declare function imagebuilderContainerRecipeTargetRepositoryToTerraform(struct?: ImagebuilderContainerRecipeTargetRepositoryOutputReference | ImagebuilderContainerRecipeTargetRepository): any;
export declare function imagebuilderContainerRecipeTargetRepositoryToHclTerraform(struct?: ImagebuilderContainerRecipeTargetRepositoryOutputReference | ImagebuilderContainerRecipeTargetRepository): any;
export declare class ImagebuilderContainerRecipeTargetRepositoryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderContainerRecipeTargetRepository | undefined;
    set internalValue(value: ImagebuilderContainerRecipeTargetRepository | undefined);
    private _repositoryName?;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string | undefined;
    private _service?;
    get service(): string;
    set service(value: string);
    get serviceInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe aws_imagebuilder_container_recipe}
*/
export declare class ImagebuilderContainerRecipe extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_imagebuilder_container_recipe";
    /**
    * Generates CDKTF code for importing a ImagebuilderContainerRecipe resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ImagebuilderContainerRecipe to import
    * @param importFromId The id of the existing ImagebuilderContainerRecipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ImagebuilderContainerRecipe to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_container_recipe aws_imagebuilder_container_recipe} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderContainerRecipeConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderContainerRecipeConfig);
    get arn(): string;
    private _containerType?;
    get containerType(): string;
    set containerType(value: string);
    get containerTypeInput(): string | undefined;
    get dateCreated(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _dockerfileTemplateData?;
    get dockerfileTemplateData(): string;
    set dockerfileTemplateData(value: string);
    resetDockerfileTemplateData(): void;
    get dockerfileTemplateDataInput(): string | undefined;
    private _dockerfileTemplateUri?;
    get dockerfileTemplateUri(): string;
    set dockerfileTemplateUri(value: string);
    resetDockerfileTemplateUri(): void;
    get dockerfileTemplateUriInput(): string | undefined;
    get encrypted(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get owner(): string;
    private _parentImage?;
    get parentImage(): string;
    set parentImage(value: string);
    get parentImageInput(): string | undefined;
    get platform(): string;
    private _platformOverride?;
    get platformOverride(): string;
    set platformOverride(value: string);
    resetPlatformOverride(): void;
    get platformOverrideInput(): string | undefined;
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
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string | undefined;
    private _workingDirectory?;
    get workingDirectory(): string;
    set workingDirectory(value: string);
    resetWorkingDirectory(): void;
    get workingDirectoryInput(): string | undefined;
    private _component;
    get component(): ImagebuilderContainerRecipeComponentList;
    putComponent(value: ImagebuilderContainerRecipeComponent[] | cdktf.IResolvable): void;
    get componentInput(): cdktf.IResolvable | ImagebuilderContainerRecipeComponent[] | undefined;
    private _instanceConfiguration;
    get instanceConfiguration(): ImagebuilderContainerRecipeInstanceConfigurationOutputReference;
    putInstanceConfiguration(value: ImagebuilderContainerRecipeInstanceConfiguration): void;
    resetInstanceConfiguration(): void;
    get instanceConfigurationInput(): ImagebuilderContainerRecipeInstanceConfiguration | undefined;
    private _targetRepository;
    get targetRepository(): ImagebuilderContainerRecipeTargetRepositoryOutputReference;
    putTargetRepository(value: ImagebuilderContainerRecipeTargetRepository): void;
    get targetRepositoryInput(): ImagebuilderContainerRecipeTargetRepository | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
