/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ShieldProtectionHealthCheckAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_protection_health_check_association#health_check_arn ShieldProtectionHealthCheckAssociation#health_check_arn}
    */
    readonly healthCheckArn: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_protection_health_check_association#id ShieldProtectionHealthCheckAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_protection_health_check_association#shield_protection_id ShieldProtectionHealthCheckAssociation#shield_protection_id}
    */
    readonly shieldProtectionId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_protection_health_check_association aws_shield_protection_health_check_association}
*/
export declare class ShieldProtectionHealthCheckAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_shield_protection_health_check_association";
    /**
    * Generates CDKTF code for importing a ShieldProtectionHealthCheckAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ShieldProtectionHealthCheckAssociation to import
    * @param importFromId The id of the existing ShieldProtectionHealthCheckAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_protection_health_check_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ShieldProtectionHealthCheckAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_protection_health_check_association aws_shield_protection_health_check_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ShieldProtectionHealthCheckAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ShieldProtectionHealthCheckAssociationConfig);
    private _healthCheckArn?;
    get healthCheckArn(): string;
    set healthCheckArn(value: string);
    get healthCheckArnInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _shieldProtectionId?;
    get shieldProtectionId(): string;
    set shieldProtectionId(value: string);
    get shieldProtectionIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
