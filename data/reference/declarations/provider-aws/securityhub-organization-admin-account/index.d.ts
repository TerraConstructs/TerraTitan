/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface SecurityhubOrganizationAdminAccountConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_admin_account#admin_account_id SecurityhubOrganizationAdminAccount#admin_account_id}
    */
    readonly adminAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_admin_account#id SecurityhubOrganizationAdminAccount#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_admin_account aws_securityhub_organization_admin_account}
*/
export declare class SecurityhubOrganizationAdminAccount extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_securityhub_organization_admin_account";
    /**
    * Generates CDKTF code for importing a SecurityhubOrganizationAdminAccount resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the SecurityhubOrganizationAdminAccount to import
    * @param importFromId The id of the existing SecurityhubOrganizationAdminAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_admin_account#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the SecurityhubOrganizationAdminAccount to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/securityhub_organization_admin_account aws_securityhub_organization_admin_account} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubOrganizationAdminAccountConfig
    */
    constructor(scope: Construct, id: string, config: SecurityhubOrganizationAdminAccountConfig);
    private _adminAccountId?;
    get adminAccountId(): string;
    set adminAccountId(value: string);
    get adminAccountIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
