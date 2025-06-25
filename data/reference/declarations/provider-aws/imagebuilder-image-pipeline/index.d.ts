/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ImagebuilderImagePipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#container_recipe_arn ImagebuilderImagePipeline#container_recipe_arn}
    */
    readonly containerRecipeArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#description ImagebuilderImagePipeline#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#distribution_configuration_arn ImagebuilderImagePipeline#distribution_configuration_arn}
    */
    readonly distributionConfigurationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#enhanced_image_metadata_enabled ImagebuilderImagePipeline#enhanced_image_metadata_enabled}
    */
    readonly enhancedImageMetadataEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#execution_role ImagebuilderImagePipeline#execution_role}
    */
    readonly executionRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#id ImagebuilderImagePipeline#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#image_recipe_arn ImagebuilderImagePipeline#image_recipe_arn}
    */
    readonly imageRecipeArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#infrastructure_configuration_arn ImagebuilderImagePipeline#infrastructure_configuration_arn}
    */
    readonly infrastructureConfigurationArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#status ImagebuilderImagePipeline#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#tags ImagebuilderImagePipeline#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#tags_all ImagebuilderImagePipeline#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * image_scanning_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#image_scanning_configuration ImagebuilderImagePipeline#image_scanning_configuration}
    */
    readonly imageScanningConfiguration?: ImagebuilderImagePipelineImageScanningConfiguration;
    /**
    * image_tests_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#image_tests_configuration ImagebuilderImagePipeline#image_tests_configuration}
    */
    readonly imageTestsConfiguration?: ImagebuilderImagePipelineImageTestsConfiguration;
    /**
    * schedule block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#schedule ImagebuilderImagePipeline#schedule}
    */
    readonly schedule?: ImagebuilderImagePipelineSchedule;
    /**
    * workflow block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#workflow ImagebuilderImagePipeline#workflow}
    */
    readonly workflow?: ImagebuilderImagePipelineWorkflow[] | cdktf.IResolvable;
}
export interface ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#container_tags ImagebuilderImagePipeline#container_tags}
    */
    readonly containerTags?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#repository_name ImagebuilderImagePipeline#repository_name}
    */
    readonly repositoryName?: string;
}
export declare function imagebuilderImagePipelineImageScanningConfigurationEcrConfigurationToTerraform(struct?: ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference | ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration): any;
export declare function imagebuilderImagePipelineImageScanningConfigurationEcrConfigurationToHclTerraform(struct?: ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference | ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration): any;
export declare class ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration | undefined;
    set internalValue(value: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration | undefined);
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
export interface ImagebuilderImagePipelineImageScanningConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#image_scanning_enabled ImagebuilderImagePipeline#image_scanning_enabled}
    */
    readonly imageScanningEnabled?: boolean | cdktf.IResolvable;
    /**
    * ecr_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#ecr_configuration ImagebuilderImagePipeline#ecr_configuration}
    */
    readonly ecrConfiguration?: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration;
}
export declare function imagebuilderImagePipelineImageScanningConfigurationToTerraform(struct?: ImagebuilderImagePipelineImageScanningConfigurationOutputReference | ImagebuilderImagePipelineImageScanningConfiguration): any;
export declare function imagebuilderImagePipelineImageScanningConfigurationToHclTerraform(struct?: ImagebuilderImagePipelineImageScanningConfigurationOutputReference | ImagebuilderImagePipelineImageScanningConfiguration): any;
export declare class ImagebuilderImagePipelineImageScanningConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderImagePipelineImageScanningConfiguration | undefined;
    set internalValue(value: ImagebuilderImagePipelineImageScanningConfiguration | undefined);
    private _imageScanningEnabled?;
    get imageScanningEnabled(): boolean | cdktf.IResolvable;
    set imageScanningEnabled(value: boolean | cdktf.IResolvable);
    resetImageScanningEnabled(): void;
    get imageScanningEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _ecrConfiguration;
    get ecrConfiguration(): ImagebuilderImagePipelineImageScanningConfigurationEcrConfigurationOutputReference;
    putEcrConfiguration(value: ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration): void;
    resetEcrConfiguration(): void;
    get ecrConfigurationInput(): ImagebuilderImagePipelineImageScanningConfigurationEcrConfiguration | undefined;
}
export interface ImagebuilderImagePipelineImageTestsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#image_tests_enabled ImagebuilderImagePipeline#image_tests_enabled}
    */
    readonly imageTestsEnabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#timeout_minutes ImagebuilderImagePipeline#timeout_minutes}
    */
    readonly timeoutMinutes?: number;
}
export declare function imagebuilderImagePipelineImageTestsConfigurationToTerraform(struct?: ImagebuilderImagePipelineImageTestsConfigurationOutputReference | ImagebuilderImagePipelineImageTestsConfiguration): any;
export declare function imagebuilderImagePipelineImageTestsConfigurationToHclTerraform(struct?: ImagebuilderImagePipelineImageTestsConfigurationOutputReference | ImagebuilderImagePipelineImageTestsConfiguration): any;
export declare class ImagebuilderImagePipelineImageTestsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderImagePipelineImageTestsConfiguration | undefined;
    set internalValue(value: ImagebuilderImagePipelineImageTestsConfiguration | undefined);
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
export interface ImagebuilderImagePipelineSchedule {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#pipeline_execution_start_condition ImagebuilderImagePipeline#pipeline_execution_start_condition}
    */
    readonly pipelineExecutionStartCondition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#schedule_expression ImagebuilderImagePipeline#schedule_expression}
    */
    readonly scheduleExpression: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#timezone ImagebuilderImagePipeline#timezone}
    */
    readonly timezone?: string;
}
export declare function imagebuilderImagePipelineScheduleToTerraform(struct?: ImagebuilderImagePipelineScheduleOutputReference | ImagebuilderImagePipelineSchedule): any;
export declare function imagebuilderImagePipelineScheduleToHclTerraform(struct?: ImagebuilderImagePipelineScheduleOutputReference | ImagebuilderImagePipelineSchedule): any;
export declare class ImagebuilderImagePipelineScheduleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ImagebuilderImagePipelineSchedule | undefined;
    set internalValue(value: ImagebuilderImagePipelineSchedule | undefined);
    private _pipelineExecutionStartCondition?;
    get pipelineExecutionStartCondition(): string;
    set pipelineExecutionStartCondition(value: string);
    resetPipelineExecutionStartCondition(): void;
    get pipelineExecutionStartConditionInput(): string | undefined;
    private _scheduleExpression?;
    get scheduleExpression(): string;
    set scheduleExpression(value: string);
    get scheduleExpressionInput(): string | undefined;
    private _timezone?;
    get timezone(): string;
    set timezone(value: string);
    resetTimezone(): void;
    get timezoneInput(): string | undefined;
}
export interface ImagebuilderImagePipelineWorkflowParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#name ImagebuilderImagePipeline#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#value ImagebuilderImagePipeline#value}
    */
    readonly value: string;
}
export declare function imagebuilderImagePipelineWorkflowParameterToTerraform(struct?: ImagebuilderImagePipelineWorkflowParameter | cdktf.IResolvable): any;
export declare function imagebuilderImagePipelineWorkflowParameterToHclTerraform(struct?: ImagebuilderImagePipelineWorkflowParameter | cdktf.IResolvable): any;
export declare class ImagebuilderImagePipelineWorkflowParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderImagePipelineWorkflowParameter | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderImagePipelineWorkflowParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class ImagebuilderImagePipelineWorkflowParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderImagePipelineWorkflowParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderImagePipelineWorkflowParameterOutputReference;
}
export interface ImagebuilderImagePipelineWorkflow {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#on_failure ImagebuilderImagePipeline#on_failure}
    */
    readonly onFailure?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#parallel_group ImagebuilderImagePipeline#parallel_group}
    */
    readonly parallelGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#workflow_arn ImagebuilderImagePipeline#workflow_arn}
    */
    readonly workflowArn: string;
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#parameter ImagebuilderImagePipeline#parameter}
    */
    readonly parameter?: ImagebuilderImagePipelineWorkflowParameter[] | cdktf.IResolvable;
}
export declare function imagebuilderImagePipelineWorkflowToTerraform(struct?: ImagebuilderImagePipelineWorkflow | cdktf.IResolvable): any;
export declare function imagebuilderImagePipelineWorkflowToHclTerraform(struct?: ImagebuilderImagePipelineWorkflow | cdktf.IResolvable): any;
export declare class ImagebuilderImagePipelineWorkflowOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): ImagebuilderImagePipelineWorkflow | cdktf.IResolvable | undefined;
    set internalValue(value: ImagebuilderImagePipelineWorkflow | cdktf.IResolvable | undefined);
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
    get parameter(): ImagebuilderImagePipelineWorkflowParameterList;
    putParameter(value: ImagebuilderImagePipelineWorkflowParameter[] | cdktf.IResolvable): void;
    resetParameter(): void;
    get parameterInput(): cdktf.IResolvable | ImagebuilderImagePipelineWorkflowParameter[] | undefined;
}
export declare class ImagebuilderImagePipelineWorkflowList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: ImagebuilderImagePipelineWorkflow[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): ImagebuilderImagePipelineWorkflowOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline aws_imagebuilder_image_pipeline}
*/
export declare class ImagebuilderImagePipeline extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_imagebuilder_image_pipeline";
    /**
    * Generates CDKTF code for importing a ImagebuilderImagePipeline resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ImagebuilderImagePipeline to import
    * @param importFromId The id of the existing ImagebuilderImagePipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ImagebuilderImagePipeline to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/imagebuilder_image_pipeline aws_imagebuilder_image_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ImagebuilderImagePipelineConfig
    */
    constructor(scope: Construct, id: string, config: ImagebuilderImagePipelineConfig);
    get arn(): string;
    private _containerRecipeArn?;
    get containerRecipeArn(): string;
    set containerRecipeArn(value: string);
    resetContainerRecipeArn(): void;
    get containerRecipeArnInput(): string | undefined;
    get dateCreated(): string;
    get dateLastRun(): string;
    get dateNextRun(): string;
    get dateUpdated(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
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
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get platform(): string;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string | undefined;
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
    private _imageScanningConfiguration;
    get imageScanningConfiguration(): ImagebuilderImagePipelineImageScanningConfigurationOutputReference;
    putImageScanningConfiguration(value: ImagebuilderImagePipelineImageScanningConfiguration): void;
    resetImageScanningConfiguration(): void;
    get imageScanningConfigurationInput(): ImagebuilderImagePipelineImageScanningConfiguration | undefined;
    private _imageTestsConfiguration;
    get imageTestsConfiguration(): ImagebuilderImagePipelineImageTestsConfigurationOutputReference;
    putImageTestsConfiguration(value: ImagebuilderImagePipelineImageTestsConfiguration): void;
    resetImageTestsConfiguration(): void;
    get imageTestsConfigurationInput(): ImagebuilderImagePipelineImageTestsConfiguration | undefined;
    private _schedule;
    get schedule(): ImagebuilderImagePipelineScheduleOutputReference;
    putSchedule(value: ImagebuilderImagePipelineSchedule): void;
    resetSchedule(): void;
    get scheduleInput(): ImagebuilderImagePipelineSchedule | undefined;
    private _workflow;
    get workflow(): ImagebuilderImagePipelineWorkflowList;
    putWorkflow(value: ImagebuilderImagePipelineWorkflow[] | cdktf.IResolvable): void;
    resetWorkflow(): void;
    get workflowInput(): cdktf.IResolvable | ImagebuilderImagePipelineWorkflow[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
