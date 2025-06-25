/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcSecurityGroupVpcAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_security_group_vpc_association#security_group_id VpcSecurityGroupVpcAssociation#security_group_id}
    */
    readonly securityGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_security_group_vpc_association#vpc_id VpcSecurityGroupVpcAssociation#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_security_group_vpc_association#timeouts VpcSecurityGroupVpcAssociation#timeouts}
    */
    readonly timeouts?: VpcSecurityGroupVpcAssociationTimeouts;
}
export interface VpcSecurityGroupVpcAssociationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_security_group_vpc_association#create VpcSecurityGroupVpcAssociation#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_security_group_vpc_association#delete VpcSecurityGroupVpcAssociation#delete}
    */
    readonly delete?: string;
}
export declare function vpcSecurityGroupVpcAssociationTimeoutsToTerraform(struct?: VpcSecurityGroupVpcAssociationTimeouts | cdktf.IResolvable): any;
export declare function vpcSecurityGroupVpcAssociationTimeoutsToHclTerraform(struct?: VpcSecurityGroupVpcAssociationTimeouts | cdktf.IResolvable): any;
export declare class VpcSecurityGroupVpcAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcSecurityGroupVpcAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcSecurityGroupVpcAssociationTimeouts | cdktf.IResolvable | undefined);
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
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_security_group_vpc_association aws_vpc_security_group_vpc_association}
*/
export declare class VpcSecurityGroupVpcAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_security_group_vpc_association";
    /**
    * Generates CDKTF code for importing a VpcSecurityGroupVpcAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcSecurityGroupVpcAssociation to import
    * @param importFromId The id of the existing VpcSecurityGroupVpcAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_security_group_vpc_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcSecurityGroupVpcAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_security_group_vpc_association aws_vpc_security_group_vpc_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcSecurityGroupVpcAssociationConfig
    */
    constructor(scope: Construct, id: string, config: VpcSecurityGroupVpcAssociationConfig);
    private _securityGroupId?;
    get securityGroupId(): string;
    set securityGroupId(value: string);
    get securityGroupIdInput(): string | undefined;
    get state(): string;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): VpcSecurityGroupVpcAssociationTimeoutsOutputReference;
    putTimeouts(value: VpcSecurityGroupVpcAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcSecurityGroupVpcAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
