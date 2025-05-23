/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEcrImageConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_image#id DataAwsEcrImage#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_image#image_digest DataAwsEcrImage#image_digest}
    */
    readonly imageDigest?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_image#image_tag DataAwsEcrImage#image_tag}
    */
    readonly imageTag?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_image#most_recent DataAwsEcrImage#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_image#registry_id DataAwsEcrImage#registry_id}
    */
    readonly registryId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_image#repository_name DataAwsEcrImage#repository_name}
    */
    readonly repositoryName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_image aws_ecr_image}
*/
export declare class DataAwsEcrImage extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ecr_image";
    /**
    * Generates CDKTF code for importing a DataAwsEcrImage resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEcrImage to import
    * @param importFromId The id of the existing DataAwsEcrImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_image#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEcrImage to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ecr_image aws_ecr_image} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcrImageConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEcrImageConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _imageDigest?;
    get imageDigest(): string;
    set imageDigest(value: string);
    resetImageDigest(): void;
    get imageDigestInput(): string | undefined;
    get imagePushedAt(): number;
    get imageSizeInBytes(): number;
    private _imageTag?;
    get imageTag(): string;
    set imageTag(value: string);
    resetImageTag(): void;
    get imageTagInput(): string | undefined;
    get imageTags(): string[];
    get imageUri(): string;
    private _mostRecent?;
    get mostRecent(): boolean | cdktf.IResolvable;
    set mostRecent(value: boolean | cdktf.IResolvable);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | cdktf.IResolvable | undefined;
    private _registryId?;
    get registryId(): string;
    set registryId(value: string);
    resetRegistryId(): void;
    get registryIdInput(): string | undefined;
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
