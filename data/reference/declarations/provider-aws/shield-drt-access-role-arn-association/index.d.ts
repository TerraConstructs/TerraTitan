/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ShieldDrtAccessRoleArnAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_drt_access_role_arn_association#role_arn ShieldDrtAccessRoleArnAssociation#role_arn}
    */
    readonly roleArn: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_drt_access_role_arn_association#timeouts ShieldDrtAccessRoleArnAssociation#timeouts}
    */
    readonly timeouts?: ShieldDrtAccessRoleArnAssociationTimeouts;
}
export interface ShieldDrtAccessRoleArnAssociationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_drt_access_role_arn_association#create ShieldDrtAccessRoleArnAssociation#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_drt_access_role_arn_association#delete ShieldDrtAccessRoleArnAssociation#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_drt_access_role_arn_association#update ShieldDrtAccessRoleArnAssociation#update}
    */
    readonly update?: string;
}
export declare function shieldDrtAccessRoleArnAssociationTimeoutsToTerraform(struct?: ShieldDrtAccessRoleArnAssociationTimeouts | cdktf.IResolvable): any;
export declare function shieldDrtAccessRoleArnAssociationTimeoutsToHclTerraform(struct?: ShieldDrtAccessRoleArnAssociationTimeouts | cdktf.IResolvable): any;
export declare class ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ShieldDrtAccessRoleArnAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: ShieldDrtAccessRoleArnAssociationTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_drt_access_role_arn_association aws_shield_drt_access_role_arn_association}
*/
export declare class ShieldDrtAccessRoleArnAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_shield_drt_access_role_arn_association";
    /**
    * Generates CDKTF code for importing a ShieldDrtAccessRoleArnAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ShieldDrtAccessRoleArnAssociation to import
    * @param importFromId The id of the existing ShieldDrtAccessRoleArnAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_drt_access_role_arn_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ShieldDrtAccessRoleArnAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/shield_drt_access_role_arn_association aws_shield_drt_access_role_arn_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ShieldDrtAccessRoleArnAssociationConfig
    */
    constructor(scope: Construct, id: string, config: ShieldDrtAccessRoleArnAssociationConfig);
    get id(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string | undefined;
    private _timeouts;
    get timeouts(): ShieldDrtAccessRoleArnAssociationTimeoutsOutputReference;
    putTimeouts(value: ShieldDrtAccessRoleArnAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | ShieldDrtAccessRoleArnAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
