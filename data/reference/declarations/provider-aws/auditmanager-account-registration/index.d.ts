/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AuditmanagerAccountRegistrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_account_registration#delegated_admin_account AuditmanagerAccountRegistration#delegated_admin_account}
    */
    readonly delegatedAdminAccount?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_account_registration#deregister_on_destroy AuditmanagerAccountRegistration#deregister_on_destroy}
    */
    readonly deregisterOnDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_account_registration#kms_key AuditmanagerAccountRegistration#kms_key}
    */
    readonly kmsKey?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_account_registration aws_auditmanager_account_registration}
*/
export declare class AuditmanagerAccountRegistration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_auditmanager_account_registration";
    /**
    * Generates CDKTF code for importing a AuditmanagerAccountRegistration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AuditmanagerAccountRegistration to import
    * @param importFromId The id of the existing AuditmanagerAccountRegistration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_account_registration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AuditmanagerAccountRegistration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_account_registration aws_auditmanager_account_registration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AuditmanagerAccountRegistrationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: AuditmanagerAccountRegistrationConfig);
    private _delegatedAdminAccount?;
    get delegatedAdminAccount(): string;
    set delegatedAdminAccount(value: string);
    resetDelegatedAdminAccount(): void;
    get delegatedAdminAccountInput(): string | undefined;
    private _deregisterOnDestroy?;
    get deregisterOnDestroy(): boolean | cdktf.IResolvable;
    set deregisterOnDestroy(value: boolean | cdktf.IResolvable);
    resetDeregisterOnDestroy(): void;
    get deregisterOnDestroyInput(): boolean | cdktf.IResolvable | undefined;
    get id(): string;
    private _kmsKey?;
    get kmsKey(): string;
    set kmsKey(value: string);
    resetKmsKey(): void;
    get kmsKeyInput(): string | undefined;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
