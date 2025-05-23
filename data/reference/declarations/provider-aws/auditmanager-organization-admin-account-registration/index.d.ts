/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AuditmanagerOrganizationAdminAccountRegistrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_organization_admin_account_registration#admin_account_id AuditmanagerOrganizationAdminAccountRegistration#admin_account_id}
    */
    readonly adminAccountId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_organization_admin_account_registration aws_auditmanager_organization_admin_account_registration}
*/
export declare class AuditmanagerOrganizationAdminAccountRegistration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_auditmanager_organization_admin_account_registration";
    /**
    * Generates CDKTF code for importing a AuditmanagerOrganizationAdminAccountRegistration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AuditmanagerOrganizationAdminAccountRegistration to import
    * @param importFromId The id of the existing AuditmanagerOrganizationAdminAccountRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_organization_admin_account_registration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AuditmanagerOrganizationAdminAccountRegistration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_organization_admin_account_registration aws_auditmanager_organization_admin_account_registration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AuditmanagerOrganizationAdminAccountRegistrationConfig
    */
    constructor(scope: Construct, id: string, config: AuditmanagerOrganizationAdminAccountRegistrationConfig);
    private _adminAccountId?;
    get adminAccountId(): string;
    set adminAccountId(value: string);
    get adminAccountIdInput(): string | undefined;
    get id(): string;
    get organizationId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
