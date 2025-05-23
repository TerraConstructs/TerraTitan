/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AuditmanagerFrameworkShareConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework_share#comment AuditmanagerFrameworkShare#comment}
    */
    readonly comment?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework_share#destination_account AuditmanagerFrameworkShare#destination_account}
    */
    readonly destinationAccount: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework_share#destination_region AuditmanagerFrameworkShare#destination_region}
    */
    readonly destinationRegion: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework_share#framework_id AuditmanagerFrameworkShare#framework_id}
    */
    readonly frameworkId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework_share aws_auditmanager_framework_share}
*/
export declare class AuditmanagerFrameworkShare extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_auditmanager_framework_share";
    /**
    * Generates CDKTF code for importing a AuditmanagerFrameworkShare resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the AuditmanagerFrameworkShare to import
    * @param importFromId The id of the existing AuditmanagerFrameworkShare that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework_share#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the AuditmanagerFrameworkShare to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/auditmanager_framework_share aws_auditmanager_framework_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AuditmanagerFrameworkShareConfig
    */
    constructor(scope: Construct, id: string, config: AuditmanagerFrameworkShareConfig);
    private _comment?;
    get comment(): string;
    set comment(value: string);
    resetComment(): void;
    get commentInput(): string | undefined;
    private _destinationAccount?;
    get destinationAccount(): string;
    set destinationAccount(value: string);
    get destinationAccountInput(): string | undefined;
    private _destinationRegion?;
    get destinationRegion(): string;
    set destinationRegion(value: string);
    get destinationRegionInput(): string | undefined;
    private _frameworkId?;
    get frameworkId(): string;
    set frameworkId(value: string);
    get frameworkIdInput(): string | undefined;
    get id(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
