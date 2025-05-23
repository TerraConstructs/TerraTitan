/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerPipelineConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline#id SagemakerPipeline#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline#pipeline_definition SagemakerPipeline#pipeline_definition}
    */
    readonly pipelineDefinition?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline#pipeline_description SagemakerPipeline#pipeline_description}
    */
    readonly pipelineDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline#pipeline_display_name SagemakerPipeline#pipeline_display_name}
    */
    readonly pipelineDisplayName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline#pipeline_name SagemakerPipeline#pipeline_name}
    */
    readonly pipelineName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline#role_arn SagemakerPipeline#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline#tags SagemakerPipeline#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline#tags_all SagemakerPipeline#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * parallelism_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline#parallelism_configuration SagemakerPipeline#parallelism_configuration}
    */
    readonly parallelismConfiguration?: SagemakerPipelineParallelismConfiguration;
    /**
    * pipeline_definition_s3_location block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline#pipeline_definition_s3_location SagemakerPipeline#pipeline_definition_s3_location}
    */
    readonly pipelineDefinitionS3Location?: SagemakerPipelinePipelineDefinitionS3Location;
}
export interface SagemakerPipelineParallelismConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline#max_parallel_execution_steps SagemakerPipeline#max_parallel_execution_steps}
    */
    readonly maxParallelExecutionSteps: number;
}
export declare function sagemakerPipelineParallelismConfigurationToTerraform(struct?: SagemakerPipelineParallelismConfigurationOutputReference | SagemakerPipelineParallelismConfiguration): any;
export declare function sagemakerPipelineParallelismConfigurationToHclTerraform(struct?: SagemakerPipelineParallelismConfigurationOutputReference | SagemakerPipelineParallelismConfiguration): any;
export declare class SagemakerPipelineParallelismConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerPipelineParallelismConfiguration | undefined;
    set internalValue(value: SagemakerPipelineParallelismConfiguration | undefined);
    private _maxParallelExecutionSteps?;
    get maxParallelExecutionSteps(): number;
    set maxParallelExecutionSteps(value: number);
    get maxParallelExecutionStepsInput(): number | undefined;
}
export interface SagemakerPipelinePipelineDefinitionS3Location {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline#bucket SagemakerPipeline#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline#object_key SagemakerPipeline#object_key}
    */
    readonly objectKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline#version_id SagemakerPipeline#version_id}
    */
    readonly versionId?: string;
}
export declare function sagemakerPipelinePipelineDefinitionS3LocationToTerraform(struct?: SagemakerPipelinePipelineDefinitionS3LocationOutputReference | SagemakerPipelinePipelineDefinitionS3Location): any;
export declare function sagemakerPipelinePipelineDefinitionS3LocationToHclTerraform(struct?: SagemakerPipelinePipelineDefinitionS3LocationOutputReference | SagemakerPipelinePipelineDefinitionS3Location): any;
export declare class SagemakerPipelinePipelineDefinitionS3LocationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerPipelinePipelineDefinitionS3Location | undefined;
    set internalValue(value: SagemakerPipelinePipelineDefinitionS3Location | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string | undefined;
    private _objectKey?;
    get objectKey(): string;
    set objectKey(value: string);
    get objectKeyInput(): string | undefined;
    private _versionId?;
    get versionId(): string;
    set versionId(value: string);
    resetVersionId(): void;
    get versionIdInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline aws_sagemaker_pipeline}
*/
export declare class SagemakerPipeline extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_pipeline";
    /**
    * Generates CDKTF code for importing a SagemakerPipeline resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerPipeline to import
    * @param importFromId The id of the existing SagemakerPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerPipeline to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_pipeline aws_sagemaker_pipeline} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerPipelineConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerPipelineConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _pipelineDefinition?;
    get pipelineDefinition(): string;
    set pipelineDefinition(value: string);
    resetPipelineDefinition(): void;
    get pipelineDefinitionInput(): string | undefined;
    private _pipelineDescription?;
    get pipelineDescription(): string;
    set pipelineDescription(value: string);
    resetPipelineDescription(): void;
    get pipelineDescriptionInput(): string | undefined;
    private _pipelineDisplayName?;
    get pipelineDisplayName(): string;
    set pipelineDisplayName(value: string);
    get pipelineDisplayNameInput(): string | undefined;
    private _pipelineName?;
    get pipelineName(): string;
    set pipelineName(value: string);
    get pipelineNameInput(): string | undefined;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
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
    private _parallelismConfiguration;
    get parallelismConfiguration(): SagemakerPipelineParallelismConfigurationOutputReference;
    putParallelismConfiguration(value: SagemakerPipelineParallelismConfiguration): void;
    resetParallelismConfiguration(): void;
    get parallelismConfigurationInput(): SagemakerPipelineParallelismConfiguration | undefined;
    private _pipelineDefinitionS3Location;
    get pipelineDefinitionS3Location(): SagemakerPipelinePipelineDefinitionS3LocationOutputReference;
    putPipelineDefinitionS3Location(value: SagemakerPipelinePipelineDefinitionS3Location): void;
    resetPipelineDefinitionS3Location(): void;
    get pipelineDefinitionS3LocationInput(): SagemakerPipelinePipelineDefinitionS3Location | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
