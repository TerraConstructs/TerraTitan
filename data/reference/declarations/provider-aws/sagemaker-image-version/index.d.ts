/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerImageVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_image_version#base_image SagemakerImageVersion#base_image}
    */
    readonly baseImage: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_image_version#horovod SagemakerImageVersion#horovod}
    */
    readonly horovod?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_image_version#id SagemakerImageVersion#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_image_version#image_name SagemakerImageVersion#image_name}
    */
    readonly imageName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_image_version#job_type SagemakerImageVersion#job_type}
    */
    readonly jobType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_image_version#ml_framework SagemakerImageVersion#ml_framework}
    */
    readonly mlFramework?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_image_version#processor SagemakerImageVersion#processor}
    */
    readonly processor?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_image_version#programming_lang SagemakerImageVersion#programming_lang}
    */
    readonly programmingLang?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_image_version#release_notes SagemakerImageVersion#release_notes}
    */
    readonly releaseNotes?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_image_version#vendor_guidance SagemakerImageVersion#vendor_guidance}
    */
    readonly vendorGuidance?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_image_version aws_sagemaker_image_version}
*/
export declare class SagemakerImageVersion extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_image_version";
    /**
    * Generates CDKTF code for importing a SagemakerImageVersion resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerImageVersion to import
    * @param importFromId The id of the existing SagemakerImageVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_image_version#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerImageVersion to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/sagemaker_image_version aws_sagemaker_image_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerImageVersionConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerImageVersionConfig);
    get arn(): string;
    private _baseImage?;
    get baseImage(): string;
    set baseImage(value: string);
    get baseImageInput(): string | undefined;
    get containerImage(): string;
    private _horovod?;
    get horovod(): boolean | cdktf.IResolvable;
    set horovod(value: boolean | cdktf.IResolvable);
    resetHorovod(): void;
    get horovodInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get imageArn(): string;
    private _imageName?;
    get imageName(): string;
    set imageName(value: string);
    get imageNameInput(): string | undefined;
    private _jobType?;
    get jobType(): string;
    set jobType(value: string);
    resetJobType(): void;
    get jobTypeInput(): string | undefined;
    private _mlFramework?;
    get mlFramework(): string;
    set mlFramework(value: string);
    resetMlFramework(): void;
    get mlFrameworkInput(): string | undefined;
    private _processor?;
    get processor(): string;
    set processor(value: string);
    resetProcessor(): void;
    get processorInput(): string | undefined;
    private _programmingLang?;
    get programmingLang(): string;
    set programmingLang(value: string);
    resetProgrammingLang(): void;
    get programmingLangInput(): string | undefined;
    private _releaseNotes?;
    get releaseNotes(): string;
    set releaseNotes(value: string);
    resetReleaseNotes(): void;
    get releaseNotesInput(): string | undefined;
    private _vendorGuidance?;
    get vendorGuidance(): string;
    set vendorGuidance(value: string);
    resetVendorGuidance(): void;
    get vendorGuidanceInput(): string | undefined;
    get version(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
