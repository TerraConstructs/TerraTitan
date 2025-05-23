/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#container_recipe_arn ImagebuilderImage#container_recipe_arn}
    */
    readonly containerRecipeArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#distribution_configuration_arn ImagebuilderImage#distribution_configuration_arn}
    */
    readonly distributionConfigurationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#enhanced_image_metadata_enabled ImagebuilderImage#enhanced_image_metadata_enabled}
    */
    readonly enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#execution_role ImagebuilderImage#execution_role}
    */
    readonly executionRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#id ImagebuilderImage#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#image_recipe_arn ImagebuilderImage#image_recipe_arn}
    */
    readonly imageRecipeArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#infrastructure_configuration_arn ImagebuilderImage#infrastructure_configuration_arn}
    */
    readonly infrastructureConfigurationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#tags ImagebuilderImage#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#tags_all ImagebuilderImage#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * image_scanning_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#image_scanning_configuration ImagebuilderImage#image_scanning_configuration}
    */
    readonly imageScanningConfiguration?: ImagebuilderImageImageScanningConfiguration;
    /**
    * image_tests_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#image_tests_configuration ImagebuilderImage#image_tests_configuration}
    */
    readonly imageTestsConfiguration?: ImagebuilderImageImageTestsConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#timeouts ImagebuilderImage#timeouts}
    */
    readonly timeouts?: ImagebuilderImageTimeouts;
    /**
    * workflow block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#workflow ImagebuilderImage#workflow}
    */
    readonly workflow?: ImagebuilderImageWorkflow[] | cdktf.IResolvable;
}
export interface ImagebuilderImageOutputResourcesAmis {
}
export declare function imagebuilderImageOutputResourcesAmisToTerraform(struct?: ImagebuilderImageOutputResourcesAmis): any;
export declare function imagebuilderImageOutputResourcesAmisToHclTerraform(struct?: ImagebuilderImageOutputResourcesAmis): any;
export declare class ImagebuilderImageOutputResourcesAmisOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderImageOutputResourcesAmis | undefined;
    set internalValue(value: ImagebuilderImageOutputResourcesAmis | undefined);
    get accountId(): string;
    get description(): string;
    get image(): string;
    get name(): string;
    get region(): string;
}
export declare class ImagebuilderImageOutputResourcesAmisList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderImageOutputResourcesAmisOutputReference;
}
export interface ImagebuilderImageOutputResourcesContainers {
}
export declare function imagebuilderImageOutputResourcesContainersToTerraform(struct?: ImagebuilderImageOutputResourcesContainers): any;
export declare function imagebuilderImageOutputResourcesContainersToHclTerraform(struct?: ImagebuilderImageOutputResourcesContainers): any;
export declare class ImagebuilderImageOutputResourcesContainersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderImageOutputResourcesContainers | undefined;
    set internalValue(value: ImagebuilderImageOutputResourcesContainers | undefined);
    get imageUris(): string[];
    get region(): string;
}
export declare class ImagebuilderImageOutputResourcesContainersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderImageOutputResourcesContainersOutputReference;
}
export interface ImagebuilderImageOutputResources {
}
export declare function imagebuilderImageOutputResourcesToTerraform(struct?: ImagebuilderImageOutputResources): any;
export declare function imagebuilderImageOutputResourcesToHclTerraform(struct?: ImagebuilderImageOutputResources): any;
export declare class ImagebuilderImageOutputResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderImageOutputResources | undefined;
    set internalValue(value: ImagebuilderImageOutputResources | undefined);
    private _amis;
    get amis(): ImagebuilderImageOutputResourcesAmisList;
    private _containers;
    get containers(): ImagebuilderImageOutputResourcesContainersList;
}
export declare class ImagebuilderImageOutputResourcesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderImageOutputResourcesOutputReference;
}
export interface ImagebuilderImageImageScanningConfigurationEcrConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#container_tags ImagebuilderImage#container_tags}
    */
    readonly containerTags?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#repository_name ImagebuilderImage#repository_name}
    */
    readonly repositoryName?: string;
}
export declare function imagebuilderImageImageScanningConfigurationEcrConfigurationToTerraform(struct?: ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference | ImagebuilderImageImageScanningConfigurationEcrConfiguration): any;
export declare function imagebuilderImageImageScanningConfigurationEcrConfigurationToHclTerraform(struct?: ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference | ImagebuilderImageImageScanningConfigurationEcrConfiguration): any;
export declare class ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderImageImageScanningConfigurationEcrConfiguration | undefined;
    set internalValue(value: ImagebuilderImageImageScanningConfigurationEcrConfiguration | undefined);
    private _containerTags?;
    get containerTags(): string[];
    set containerTags(value: string[]);
    resetContainerTags(): void;
    get containerTagsInput(): string[] | undefined;
    private _repositoryName?;
    get repositoryName(): string;
    set repositoryName(value: string);
    resetRepositoryName(): void;
    get repositoryNameInput(): string | undefined;
}
export interface ImagebuilderImageImageScanningConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#image_scanning_enabled ImagebuilderImage#image_scanning_enabled}
    */
    readonly imageScanningEnabled?: boolean | cdktf.IResolvable;
    /**
    * ecr_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#ecr_configuration ImagebuilderImage#ecr_configuration}
    */
    readonly ecrConfiguration?: ImagebuilderImageImageScanningConfigurationEcrConfiguration;
}
export declare function imagebuilderImageImageScanningConfigurationToTerraform(struct?: ImagebuilderImageImageScanningConfigurationOutputReference | ImagebuilderImageImageScanningConfiguration): any;
export declare function imagebuilderImageImageScanningConfigurationToHclTerraform(struct?: ImagebuilderImageImageScanningConfigurationOutputReference | ImagebuilderImageImageScanningConfiguration): any;
export declare class ImagebuilderImageImageScanningConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderImageImageScanningConfiguration | undefined;
    set internalValue(value: ImagebuilderImageImageScanningConfiguration | undefined);
    private _imageScanningEnabled?;
    get imageScanningEnabled(): boolean | cdktf.IResolvable;
    set imageScanningEnabled(value: boolean | cdktf.IResolvable);
    resetImageScanningEnabled(): void;
    get imageScanningEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _ecrConfiguration;
    get ecrConfiguration(): ImagebuilderImageImageScanningConfigurationEcrConfigurationOutputReference;
    putEcrConfiguration(value: ImagebuilderImageImageScanningConfigurationEcrConfiguration): void;
    resetEcrConfiguration(): void;
    get ecrConfigurationInput(): ImagebuilderImageImageScanningConfigurationEcrConfiguration | undefined;
}
export interface ImagebuilderImageImageTestsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#image_tests_enabled ImagebuilderImage#image_tests_enabled}
    */
    readonly imageTestsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#timeout_minutes ImagebuilderImage#timeout_minutes}
    */
    readonly timeoutMinutes?: number;
}
export declare function imagebuilderImageImageTestsConfigurationToTerraform(struct?: ImagebuilderImageImageTestsConfigurationOutputReference | ImagebuilderImageImageTestsConfiguration): any;
export declare function imagebuilderImageImageTestsConfigurationToHclTerraform(struct?: ImagebuilderImageImageTestsConfigurationOutputReference | ImagebuilderImageImageTestsConfiguration): any;
export declare class ImagebuilderImageImageTestsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderImageImageTestsConfiguration | undefined;
    set internalValue(value: ImagebuilderImageImageTestsConfiguration | undefined);
    private _imageTestsEnabled?;
    get imageTestsEnabled(): boolean | cdktf.IResolvable;
    set imageTestsEnabled(value: boolean | cdktf.IResolvable);
    resetImageTestsEnabled(): void;
    get imageTestsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _timeoutMinutes?;
    get timeoutMinutes(): number;
    set timeoutMinutes(value: number);
    resetTimeoutMinutes(): void;
    get timeoutMinutesInput(): number | undefined;
}
export interface ImagebuilderImageTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#create ImagebuilderImage#create}
    */
    readonly create?: string;
}
export declare function imagebuilderImageTimeoutsToTerraform(struct?: ImagebuilderImageTimeouts | cdktf.IResolvable): any;
export declare function imagebuilderImageTimeoutsToHclTerraform(struct?: ImagebuilderImageTimeouts | cdktf.IResolvable): any;
export declare class ImagebuilderImageTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderImageTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderImageTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
export interface ImagebuilderImageWorkflowParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#name ImagebuilderImage#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#value ImagebuilderImage#value}
    */
    readonly value: string;
}
export declare function imagebuilderImageWorkflowParameterToTerraform(struct?: ImagebuilderImageWorkflowParameter | cdktf.IResolvable): any;
export declare function imagebuilderImageWorkflowParameterToHclTerraform(struct?: ImagebuilderImageWorkflowParameter | cdktf.IResolvable): any;
export declare class ImagebuilderImageWorkflowParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderImageWorkflowParameter | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderImageWorkflowParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class ImagebuilderImageWorkflowParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderImageWorkflowParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderImageWorkflowParameterOutputReference;
}
export interface ImagebuilderImageWorkflow {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#on_failure ImagebuilderImage#on_failure}
    */
    readonly onFailure?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#parallel_group ImagebuilderImage#parallel_group}
    */
    readonly parallelGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#workflow_arn ImagebuilderImage#workflow_arn}
    */
    readonly workflowArn: string;
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#parameter ImagebuilderImage#parameter}
    */
    readonly parameter?: ImagebuilderImageWorkflowParameter[] | cdktf.IResolvable;
}
export declare function imagebuilderImageWorkflowToTerraform(struct?: ImagebuilderImageWorkflow | cdktf.IResolvable): any;
export declare function imagebuilderImageWorkflowToHclTerraform(struct?: ImagebuilderImageWorkflow | cdktf.IResolvable): any;
export declare class ImagebuilderImageWorkflowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderImageWorkflow | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderImageWorkflow | cdktf.IResolvable | undefined);
    private _onFailure?;
    get onFailure(): string;
    set onFailure(value: string);
    resetOnFailure(): void;
    get onFailureInput(): string | undefined;
    private _parallelGroup?;
    get parallelGroup(): string;
    set parallelGroup(value: string);
    resetParallelGroup(): void;
    get parallelGroupInput(): string | undefined;
    private _workflowArn?;
    get workflowArn(): string;
    set workflowArn(value: string);
    get workflowArnInput(): string | undefined;
    private _parameter;
    get parameter(): ImagebuilderImageWorkflowParameterList;
    putParameter(value: ImagebuilderImageWorkflowParameter[] | cdktf.IResolvable): void;
    resetParameter(): void;
    get parameterInput(): cdktf.IResolvable | ImagebuilderImageWorkflowParameter[] | undefined;
}
export declare class ImagebuilderImageWorkflowList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderImageWorkflow[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderImageWorkflowOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image aws_imagebuilder_image}
*/
export declare class ImagebuilderImage extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_imagebuilder_image";
    /**
    * Generates CDKTF code for importing a ImagebuilderImage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ImagebuilderImage to import
    * @param importFromId The id of the existing ImagebuilderImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ImagebuilderImage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/imagebuilder_image aws_imagebuilder_image} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderImageConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderImageConfig);
    get arn(): string;
    private _containerRecipeArn?;
    get containerRecipeArn(): string;
    set containerRecipeArn(value: string);
    resetContainerRecipeArn(): void;
    get containerRecipeArnInput(): string | undefined;
    get dateCreated(): string;
    private _distributionConfigurationArn?;
    get distributionConfigurationArn(): string;
    set distributionConfigurationArn(value: string);
    resetDistributionConfigurationArn(): void;
    get distributionConfigurationArnInput(): string | undefined;
    private _enhancedImageMetadataEnabled?;
    get enhancedImageMetadataEnabled(): boolean | cdktf.IResolvable;
    set enhancedImageMetadataEnabled(value: boolean | cdktf.IResolvable);
    resetEnhancedImageMetadataEnabled(): void;
    get enhancedImageMetadataEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _executionRole?;
    get executionRole(): string;
    set executionRole(value: string);
    resetExecutionRole(): void;
    get executionRoleInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _imageRecipeArn?;
    get imageRecipeArn(): string;
    set imageRecipeArn(value: string);
    resetImageRecipeArn(): void;
    get imageRecipeArnInput(): string | undefined;
    private _infrastructureConfigurationArn?;
    get infrastructureConfigurationArn(): string;
    set infrastructureConfigurationArn(value: string);
    get infrastructureConfigurationArnInput(): string | undefined;
    get name(): string;
    get osVersion(): string;
    private _outputResources;
    get outputResources(): ImagebuilderImageOutputResourcesList;
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
    get version(): string;
    private _imageScanningConfiguration;
    get imageScanningConfiguration(): ImagebuilderImageImageScanningConfigurationOutputReference;
    putImageScanningConfiguration(value: ImagebuilderImageImageScanningConfiguration): void;
    resetImageScanningConfiguration(): void;
    get imageScanningConfigurationInput(): ImagebuilderImageImageScanningConfiguration | undefined;
    private _imageTestsConfiguration;
    get imageTestsConfiguration(): ImagebuilderImageImageTestsConfigurationOutputReference;
    putImageTestsConfiguration(value: ImagebuilderImageImageTestsConfiguration): void;
    resetImageTestsConfiguration(): void;
    get imageTestsConfigurationInput(): ImagebuilderImageImageTestsConfiguration | undefined;
    private _timeouts;
    get timeouts(): ImagebuilderImageTimeoutsOutputReference;
    putTimeouts(value: ImagebuilderImageTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ImagebuilderImageTimeouts | undefined;
    private _workflow;
    get workflow(): ImagebuilderImageWorkflowList;
    putWorkflow(value: ImagebuilderImageWorkflow[] | cdktf.IResolvable): void;
    resetWorkflow(): void;
    get workflowInput(): cdktf.IResolvable | ImagebuilderImageWorkflow[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
