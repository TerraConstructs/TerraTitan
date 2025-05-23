/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderImageRecipeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#description ImagebuilderImageRecipe#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#id ImagebuilderImageRecipe#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#parent_image ImagebuilderImageRecipe#parent_image}
    */
    readonly parentImage: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#tags ImagebuilderImageRecipe#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#tags_all ImagebuilderImageRecipe#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#user_data_base64 ImagebuilderImageRecipe#user_data_base64}
    */
    readonly userDataBase64?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#version ImagebuilderImageRecipe#version}
    */
    readonly version: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#working_directory ImagebuilderImageRecipe#working_directory}
    */
    readonly workingDirectory?: string;
    /**
    * block_device_mapping block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#block_device_mapping ImagebuilderImageRecipe#block_device_mapping}
    */
    readonly blockDeviceMapping?: ImagebuilderImageRecipeBlockDeviceMapping[] | cdktf.IResolvable;
    /**
    * component block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#component ImagebuilderImageRecipe#component}
    */
    readonly component: ImagebuilderImageRecipeComponent[] | cdktf.IResolvable;
    /**
    * systems_manager_agent block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#systems_manager_agent ImagebuilderImageRecipe#systems_manager_agent}
    */
    readonly systemsManagerAgent?: ImagebuilderImageRecipeSystemsManagerAgent;
}
export interface ImagebuilderImageRecipeBlockDeviceMappingEbs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#delete_on_termination ImagebuilderImageRecipe#delete_on_termination}
    */
    readonly deleteOnTermination?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#encrypted ImagebuilderImageRecipe#encrypted}
    */
    readonly encrypted?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#iops ImagebuilderImageRecipe#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#kms_key_id ImagebuilderImageRecipe#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#snapshot_id ImagebuilderImageRecipe#snapshot_id}
    */
    readonly snapshotId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#throughput ImagebuilderImageRecipe#throughput}
    */
    readonly throughput?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#volume_size ImagebuilderImageRecipe#volume_size}
    */
    readonly volumeSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#volume_type ImagebuilderImageRecipe#volume_type}
    */
    readonly volumeType?: string;
}
export declare function imagebuilderImageRecipeBlockDeviceMappingEbsToTerraform(struct?: ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference | ImagebuilderImageRecipeBlockDeviceMappingEbs): any;
export declare function imagebuilderImageRecipeBlockDeviceMappingEbsToHclTerraform(struct?: ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference | ImagebuilderImageRecipeBlockDeviceMappingEbs): any;
export declare class ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderImageRecipeBlockDeviceMappingEbs | undefined;
    set internalValue(value: ImagebuilderImageRecipeBlockDeviceMappingEbs | undefined);
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
export interface ImagebuilderImageRecipeBlockDeviceMapping {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#device_name ImagebuilderImageRecipe#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#no_device ImagebuilderImageRecipe#no_device}
    */
    readonly noDevice?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#virtual_name ImagebuilderImageRecipe#virtual_name}
    */
    readonly virtualName?: string;
    /**
    * ebs block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#ebs ImagebuilderImageRecipe#ebs}
    */
    readonly ebs?: ImagebuilderImageRecipeBlockDeviceMappingEbs;
}
export declare function imagebuilderImageRecipeBlockDeviceMappingToTerraform(struct?: ImagebuilderImageRecipeBlockDeviceMapping | cdktf.IResolvable): any;
export declare function imagebuilderImageRecipeBlockDeviceMappingToHclTerraform(struct?: ImagebuilderImageRecipeBlockDeviceMapping | cdktf.IResolvable): any;
export declare class ImagebuilderImageRecipeBlockDeviceMappingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderImageRecipeBlockDeviceMapping | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderImageRecipeBlockDeviceMapping | cdktf.IResolvable | undefined);
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
    get ebs(): ImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference;
    putEbs(value: ImagebuilderImageRecipeBlockDeviceMappingEbs): void;
    resetEbs(): void;
    get ebsInput(): ImagebuilderImageRecipeBlockDeviceMappingEbs | undefined;
}
export declare class ImagebuilderImageRecipeBlockDeviceMappingList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderImageRecipeBlockDeviceMapping[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderImageRecipeBlockDeviceMappingOutputReference;
}
export interface ImagebuilderImageRecipeComponentParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#name ImagebuilderImageRecipe#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#value ImagebuilderImageRecipe#value}
    */
    readonly value: string;
}
export declare function imagebuilderImageRecipeComponentParameterToTerraform(struct?: ImagebuilderImageRecipeComponentParameter | cdktf.IResolvable): any;
export declare function imagebuilderImageRecipeComponentParameterToHclTerraform(struct?: ImagebuilderImageRecipeComponentParameter | cdktf.IResolvable): any;
export declare class ImagebuilderImageRecipeComponentParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderImageRecipeComponentParameter | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderImageRecipeComponentParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class ImagebuilderImageRecipeComponentParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderImageRecipeComponentParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderImageRecipeComponentParameterOutputReference;
}
export interface ImagebuilderImageRecipeComponent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#component_arn ImagebuilderImageRecipe#component_arn}
    */
    readonly componentArn: string;
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#parameter ImagebuilderImageRecipe#parameter}
    */
    readonly parameter?: ImagebuilderImageRecipeComponentParameter[] | cdktf.IResolvable;
}
export declare function imagebuilderImageRecipeComponentToTerraform(struct?: ImagebuilderImageRecipeComponent | cdktf.IResolvable): any;
export declare function imagebuilderImageRecipeComponentToHclTerraform(struct?: ImagebuilderImageRecipeComponent | cdktf.IResolvable): any;
export declare class ImagebuilderImageRecipeComponentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderImageRecipeComponent | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderImageRecipeComponent | cdktf.IResolvable | undefined);
    private _componentArn?;
    get componentArn(): string;
    set componentArn(value: string);
    get componentArnInput(): string | undefined;
    private _parameter;
    get parameter(): ImagebuilderImageRecipeComponentParameterList;
    putParameter(value: ImagebuilderImageRecipeComponentParameter[] | cdktf.IResolvable): void;
    resetParameter(): void;
    get parameterInput(): cdktf.IResolvable | ImagebuilderImageRecipeComponentParameter[] | undefined;
}
export declare class ImagebuilderImageRecipeComponentList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderImageRecipeComponent[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderImageRecipeComponentOutputReference;
}
export interface ImagebuilderImageRecipeSystemsManagerAgent {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#uninstall_after_build ImagebuilderImageRecipe#uninstall_after_build}
    */
    readonly uninstallAfterBuild: boolean | cdktf.IResolvable;
}
export declare function imagebuilderImageRecipeSystemsManagerAgentToTerraform(struct?: ImagebuilderImageRecipeSystemsManagerAgentOutputReference | ImagebuilderImageRecipeSystemsManagerAgent): any;
export declare function imagebuilderImageRecipeSystemsManagerAgentToHclTerraform(struct?: ImagebuilderImageRecipeSystemsManagerAgentOutputReference | ImagebuilderImageRecipeSystemsManagerAgent): any;
export declare class ImagebuilderImageRecipeSystemsManagerAgentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderImageRecipeSystemsManagerAgent | undefined;
    set internalValue(value: ImagebuilderImageRecipeSystemsManagerAgent | undefined);
    private _uninstallAfterBuild?;
    get uninstallAfterBuild(): boolean | cdktf.IResolvable;
    set uninstallAfterBuild(value: boolean | cdktf.IResolvable);
    get uninstallAfterBuildInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe aws_imagebuilder_image_recipe}
*/
export declare class ImagebuilderImageRecipe extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_imagebuilder_image_recipe";
    /**
    * Generates CDKTF code for importing a ImagebuilderImageRecipe resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ImagebuilderImageRecipe to import
    * @param importFromId The id of the existing ImagebuilderImageRecipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ImagebuilderImageRecipe to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image_recipe aws_imagebuilder_image_recipe} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderImageRecipeConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderImageRecipeConfig);
    get arn(): string;
    get dateCreated(): string;
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
    private _userDataBase64?;
    get userDataBase64(): string;
    set userDataBase64(value: string);
    resetUserDataBase64(): void;
    get userDataBase64Input(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string | undefined;
    private _workingDirectory?;
    get workingDirectory(): string;
    set workingDirectory(value: string);
    resetWorkingDirectory(): void;
    get workingDirectoryInput(): string | undefined;
    private _blockDeviceMapping;
    get blockDeviceMapping(): ImagebuilderImageRecipeBlockDeviceMappingList;
    putBlockDeviceMapping(value: ImagebuilderImageRecipeBlockDeviceMapping[] | cdktf.IResolvable): void;
    resetBlockDeviceMapping(): void;
    get blockDeviceMappingInput(): cdktf.IResolvable | ImagebuilderImageRecipeBlockDeviceMapping[] | undefined;
    private _component;
    get component(): ImagebuilderImageRecipeComponentList;
    putComponent(value: ImagebuilderImageRecipeComponent[] | cdktf.IResolvable): void;
    get componentInput(): cdktf.IResolvable | ImagebuilderImageRecipeComponent[] | undefined;
    private _systemsManagerAgent;
    get systemsManagerAgent(): ImagebuilderImageRecipeSystemsManagerAgentOutputReference;
    putSystemsManagerAgent(value: ImagebuilderImageRecipeSystemsManagerAgent): void;
    resetSystemsManagerAgent(): void;
    get systemsManagerAgentInput(): ImagebuilderImageRecipeSystemsManagerAgent | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
