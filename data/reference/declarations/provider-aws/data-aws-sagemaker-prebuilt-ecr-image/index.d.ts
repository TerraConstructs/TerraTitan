/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSagemakerPrebuiltEcrImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sagemaker_prebuilt_ecr_image#dns_suffix DataAwsSagemakerPrebuiltEcrImage#dns_suffix}
    */
    readonly dnsSuffix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sagemaker_prebuilt_ecr_image#id DataAwsSagemakerPrebuiltEcrImage#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sagemaker_prebuilt_ecr_image#image_tag DataAwsSagemakerPrebuiltEcrImage#image_tag}
    */
    readonly imageTag?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sagemaker_prebuilt_ecr_image#region DataAwsSagemakerPrebuiltEcrImage#region}
    */
    readonly region?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sagemaker_prebuilt_ecr_image#repository_name DataAwsSagemakerPrebuiltEcrImage#repository_name}
    */
    readonly repositoryName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sagemaker_prebuilt_ecr_image aws_sagemaker_prebuilt_ecr_image}
*/
export declare class DataAwsSagemakerPrebuiltEcrImage extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_sagemaker_prebuilt_ecr_image";
    /**
    * Generates CDKTF code for importing a DataAwsSagemakerPrebuiltEcrImage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSagemakerPrebuiltEcrImage to import
    * @param importFromId The id of the existing DataAwsSagemakerPrebuiltEcrImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sagemaker_prebuilt_ecr_image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSagemakerPrebuiltEcrImage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sagemaker_prebuilt_ecr_image aws_sagemaker_prebuilt_ecr_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSagemakerPrebuiltEcrImageConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSagemakerPrebuiltEcrImageConfig);
    private _dnsSuffix?;
    get dnsSuffix(): string;
    set dnsSuffix(value: string);
    resetDnsSuffix(): void;
    get dnsSuffixInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _imageTag?;
    get imageTag(): string;
    set imageTag(value: string);
    resetImageTag(): void;
    get imageTagInput(): string | undefined;
    private _region?;
    get region(): string;
    set region(value: string);
    resetRegion(): void;
    get regionInput(): string | undefined;
    get registryId(): string;
    get registryPath(): string;
    private _repositoryName?;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
