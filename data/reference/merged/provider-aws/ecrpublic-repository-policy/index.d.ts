/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface EcrpublicRepositoryPolicyConfig extends cdktf.TerraformMetaArguments {
    /** */
    readonly id?: string;
    /** (Required) The policy document. This is a JSON formatted string. For more information about building IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy) */
    readonly policy: string;
    /** (Required) Name of the repository to apply the policy. */
    readonly repositoryName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecrpublic_repository_policy aws_ecrpublic_repository_policy}
*/
export declare class EcrpublicRepositoryPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ecrpublic_repository_policy";
    /**
    * Generates CDKTF code for importing a EcrpublicRepositoryPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the EcrpublicRepositoryPolicy to import
    * @param importFromId The id of the existing EcrpublicRepositoryPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecrpublic_repository_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the EcrpublicRepositoryPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ecrpublic_repository_policy aws_ecrpublic_repository_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcrpublicRepositoryPolicyConfig
    */
    constructor(scope: Construct, id: string, config: EcrpublicRepositoryPolicyConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string | undefined;
    get registryId(): string;
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
