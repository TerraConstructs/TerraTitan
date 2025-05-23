/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCodeartifactRepositoryEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codeartifact_repository_endpoint#domain DataAwsCodeartifactRepositoryEndpoint#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codeartifact_repository_endpoint#domain_owner DataAwsCodeartifactRepositoryEndpoint#domain_owner}
    */
    readonly domainOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codeartifact_repository_endpoint#format DataAwsCodeartifactRepositoryEndpoint#format}
    */
    readonly format: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codeartifact_repository_endpoint#id DataAwsCodeartifactRepositoryEndpoint#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codeartifact_repository_endpoint#repository DataAwsCodeartifactRepositoryEndpoint#repository}
    */
    readonly repository: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codeartifact_repository_endpoint aws_codeartifact_repository_endpoint}
*/
export declare class DataAwsCodeartifactRepositoryEndpoint extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_codeartifact_repository_endpoint";
    /**
    * Generates CDKTF code for importing a DataAwsCodeartifactRepositoryEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsCodeartifactRepositoryEndpoint to import
    * @param importFromId The id of the existing DataAwsCodeartifactRepositoryEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codeartifact_repository_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsCodeartifactRepositoryEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/codeartifact_repository_endpoint aws_codeartifact_repository_endpoint} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodeartifactRepositoryEndpointConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCodeartifactRepositoryEndpointConfig);
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string | undefined;
    private _domainOwner?;
    get domainOwner(): string;
    set domainOwner(value: string);
    resetDomainOwner(): void;
    get domainOwnerInput(): string | undefined;
    private _format?;
    get format(): string;
    set format(value: string);
    get formatInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string | undefined;
    get repositoryEndpoint(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
