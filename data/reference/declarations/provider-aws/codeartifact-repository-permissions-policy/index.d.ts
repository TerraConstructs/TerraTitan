/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodeartifactRepositoryPermissionsPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository_permissions_policy#domain CodeartifactRepositoryPermissionsPolicy#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository_permissions_policy#domain_owner CodeartifactRepositoryPermissionsPolicy#domain_owner}
    */
    readonly domainOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository_permissions_policy#id CodeartifactRepositoryPermissionsPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository_permissions_policy#policy_document CodeartifactRepositoryPermissionsPolicy#policy_document}
    */
    readonly policyDocument: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository_permissions_policy#policy_revision CodeartifactRepositoryPermissionsPolicy#policy_revision}
    */
    readonly policyRevision?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository_permissions_policy#repository CodeartifactRepositoryPermissionsPolicy#repository}
    */
    readonly repository: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository_permissions_policy aws_codeartifact_repository_permissions_policy}
*/
export declare class CodeartifactRepositoryPermissionsPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_codeartifact_repository_permissions_policy";
    /**
    * Generates CDKTF code for importing a CodeartifactRepositoryPermissionsPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CodeartifactRepositoryPermissionsPolicy to import
    * @param importFromId The id of the existing CodeartifactRepositoryPermissionsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository_permissions_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CodeartifactRepositoryPermissionsPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/codeartifact_repository_permissions_policy aws_codeartifact_repository_permissions_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeartifactRepositoryPermissionsPolicyConfig
    */
    constructor(scope: Construct, id: string, config: CodeartifactRepositoryPermissionsPolicyConfig);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string | undefined;
    private _domainOwner?;
    get domainOwner(): string;
    set domainOwner(value: string);
    resetDomainOwner(): void;
    get domainOwnerInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _policyDocument?;
    get policyDocument(): string;
    set policyDocument(value: string);
    get policyDocumentInput(): string | undefined;
    private _policyRevision?;
    get policyRevision(): string;
    set policyRevision(value: string);
    resetPolicyRevision(): void;
    get policyRevisionInput(): string | undefined;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string | undefined;
    get resourceArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
