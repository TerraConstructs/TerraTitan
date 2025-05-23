/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SagemakerCodeRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_code_repository#code_repository_name SagemakerCodeRepository#code_repository_name}
    */
    readonly codeRepositoryName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_code_repository#id SagemakerCodeRepository#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_code_repository#tags SagemakerCodeRepository#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_code_repository#tags_all SagemakerCodeRepository#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * git_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_code_repository#git_config SagemakerCodeRepository#git_config}
    */
    readonly gitConfig: SagemakerCodeRepositoryGitConfig;
}
export interface SagemakerCodeRepositoryGitConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_code_repository#branch SagemakerCodeRepository#branch}
    */
    readonly branch?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_code_repository#repository_url SagemakerCodeRepository#repository_url}
    */
    readonly repositoryUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_code_repository#secret_arn SagemakerCodeRepository#secret_arn}
    */
    readonly secretArn?: string;
}
export declare function sagemakerCodeRepositoryGitConfigToTerraform(struct?: SagemakerCodeRepositoryGitConfigOutputReference | SagemakerCodeRepositoryGitConfig): any;
export declare function sagemakerCodeRepositoryGitConfigToHclTerraform(struct?: SagemakerCodeRepositoryGitConfigOutputReference | SagemakerCodeRepositoryGitConfig): any;
export declare class SagemakerCodeRepositoryGitConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): SagemakerCodeRepositoryGitConfig | undefined;
    set internalValue(value: SagemakerCodeRepositoryGitConfig | undefined);
    private _branch?;
    get branch(): string;
    set branch(value: string);
    resetBranch(): void;
    get branchInput(): string | undefined;
    private _repositoryUrl?;
    get repositoryUrl(): string;
    set repositoryUrl(value: string);
    get repositoryUrlInput(): string | undefined;
    private _secretArn?;
    get secretArn(): string;
    set secretArn(value: string);
    resetSecretArn(): void;
    get secretArnInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_code_repository aws_sagemaker_code_repository}
*/
export declare class SagemakerCodeRepository extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_sagemaker_code_repository";
    /**
    * Generates CDKTF code for importing a SagemakerCodeRepository resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SagemakerCodeRepository to import
    * @param importFromId The id of the existing SagemakerCodeRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_code_repository#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SagemakerCodeRepository to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/sagemaker_code_repository aws_sagemaker_code_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerCodeRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerCodeRepositoryConfig);
    get arn(): string;
    private _codeRepositoryName?;
    get codeRepositoryName(): string;
    set codeRepositoryName(value: string);
    get codeRepositoryNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _gitConfig;
    get gitConfig(): SagemakerCodeRepositoryGitConfigOutputReference;
    putGitConfig(value: SagemakerCodeRepositoryGitConfig): void;
    get gitConfigInput(): SagemakerCodeRepositoryGitConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
