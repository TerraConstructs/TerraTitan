/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CloudtrailOrganizationDelegatedAdminAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudtrail_organization_delegated_admin_account#account_id CloudtrailOrganizationDelegatedAdminAccount#account_id}
    */
    readonly accountId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudtrail_organization_delegated_admin_account aws_cloudtrail_organization_delegated_admin_account}
*/
export declare class CloudtrailOrganizationDelegatedAdminAccount extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_cloudtrail_organization_delegated_admin_account";
    /**
    * Generates CDKTF code for importing a CloudtrailOrganizationDelegatedAdminAccount resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the CloudtrailOrganizationDelegatedAdminAccount to import
    * @param importFromId The id of the existing CloudtrailOrganizationDelegatedAdminAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudtrail_organization_delegated_admin_account#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the CloudtrailOrganizationDelegatedAdminAccount to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/cloudtrail_organization_delegated_admin_account aws_cloudtrail_organization_delegated_admin_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudtrailOrganizationDelegatedAdminAccountConfig
    */
    constructor(scope: Construct, id: string, config: CloudtrailOrganizationDelegatedAdminAccountConfig);
    private _accountId?;
    get accountId(): string;
    set accountId(value: string);
    get accountIdInput(): string | undefined;
    get arn(): string;
    get email(): string;
    get id(): string;
    get name(): string;
    get servicePrincipal(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
