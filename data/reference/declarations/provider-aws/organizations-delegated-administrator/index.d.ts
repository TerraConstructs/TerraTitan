/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface OrganizationsDelegatedAdministratorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_delegated_administrator#account_id OrganizationsDelegatedAdministrator#account_id}
    */
    readonly accountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_delegated_administrator#id OrganizationsDelegatedAdministrator#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_delegated_administrator#service_principal OrganizationsDelegatedAdministrator#service_principal}
    */
    readonly servicePrincipal: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_delegated_administrator aws_organizations_delegated_administrator}
*/
export declare class OrganizationsDelegatedAdministrator extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_organizations_delegated_administrator";
    /**
    * Generates CDKTF code for importing a OrganizationsDelegatedAdministrator resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the OrganizationsDelegatedAdministrator to import
    * @param importFromId The id of the existing OrganizationsDelegatedAdministrator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_delegated_administrator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the OrganizationsDelegatedAdministrator to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/organizations_delegated_administrator aws_organizations_delegated_administrator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options OrganizationsDelegatedAdministratorConfig
    */
    constructor(scope: Construct, id: string, config: OrganizationsDelegatedAdministratorConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string | undefined;
    get arn(): string;
    get delegationEnabledDate(): string;
    get email(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get joinedMethod(): string;
    get joinedTimestamp(): string;
    get name(): string;
    private _servicePrincipal?;
    get servicePrincipal(): string;
    set servicePrincipal(value: string);
    get servicePrincipalInput(): string | undefined;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
