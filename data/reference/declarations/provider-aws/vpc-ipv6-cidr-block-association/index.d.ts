/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcIpv6CidrBlockAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipv6_cidr_block_association#assign_generated_ipv6_cidr_block VpcIpv6CidrBlockAssociation#assign_generated_ipv6_cidr_block}
    */
    readonly assignGeneratedIpv6CidrBlock?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipv6_cidr_block_association#id VpcIpv6CidrBlockAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipv6_cidr_block_association#ipv6_cidr_block VpcIpv6CidrBlockAssociation#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipv6_cidr_block_association#ipv6_ipam_pool_id VpcIpv6CidrBlockAssociation#ipv6_ipam_pool_id}
    */
    readonly ipv6IpamPoolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipv6_cidr_block_association#ipv6_netmask_length VpcIpv6CidrBlockAssociation#ipv6_netmask_length}
    */
    readonly ipv6NetmaskLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipv6_cidr_block_association#ipv6_pool VpcIpv6CidrBlockAssociation#ipv6_pool}
    */
    readonly ipv6Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipv6_cidr_block_association#vpc_id VpcIpv6CidrBlockAssociation#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipv6_cidr_block_association#timeouts VpcIpv6CidrBlockAssociation#timeouts}
    */
    readonly timeouts?: VpcIpv6CidrBlockAssociationTimeouts;
}
export interface VpcIpv6CidrBlockAssociationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipv6_cidr_block_association#create VpcIpv6CidrBlockAssociation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipv6_cidr_block_association#delete VpcIpv6CidrBlockAssociation#delete}
    */
    readonly delete?: string;
}
export declare function vpcIpv6CidrBlockAssociationTimeoutsToTerraform(struct?: VpcIpv6CidrBlockAssociationTimeouts | cdktf.IResolvable): any;
export declare function vpcIpv6CidrBlockAssociationTimeoutsToHclTerraform(struct?: VpcIpv6CidrBlockAssociationTimeouts | cdktf.IResolvable): any;
export declare class VpcIpv6CidrBlockAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcIpv6CidrBlockAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcIpv6CidrBlockAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipv6_cidr_block_association aws_vpc_ipv6_cidr_block_association}
*/
export declare class VpcIpv6CidrBlockAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_ipv6_cidr_block_association";
    /**
    * Generates CDKTF code for importing a VpcIpv6CidrBlockAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcIpv6CidrBlockAssociation to import
    * @param importFromId The id of the existing VpcIpv6CidrBlockAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipv6_cidr_block_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcIpv6CidrBlockAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipv6_cidr_block_association aws_vpc_ipv6_cidr_block_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpv6CidrBlockAssociationConfig
    */
    constructor(scope: Construct, id: string, config: VpcIpv6CidrBlockAssociationConfig);
    private _assignGeneratedIpv6CidrBlock?;
    get assignGeneratedIpv6CidrBlock(): boolean | cdktf.IResolvable;
    set assignGeneratedIpv6CidrBlock(value: boolean | cdktf.IResolvable);
    resetAssignGeneratedIpv6CidrBlock(): void;
    get assignGeneratedIpv6CidrBlockInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ipSource(): string;
    get ipv6AddressAttribute(): string;
    private _ipv6CidrBlock?;
    get ipv6CidrBlock(): string;
    set ipv6CidrBlock(value: string);
    resetIpv6CidrBlock(): void;
    get ipv6CidrBlockInput(): string | undefined;
    private _ipv6IpamPoolId?;
    get ipv6IpamPoolId(): string;
    set ipv6IpamPoolId(value: string);
    resetIpv6IpamPoolId(): void;
    get ipv6IpamPoolIdInput(): string | undefined;
    private _ipv6NetmaskLength?;
    get ipv6NetmaskLength(): number;
    set ipv6NetmaskLength(value: number);
    resetIpv6NetmaskLength(): void;
    get ipv6NetmaskLengthInput(): number | undefined;
    private _ipv6Pool?;
    get ipv6Pool(): string;
    set ipv6Pool(value: string);
    resetIpv6Pool(): void;
    get ipv6PoolInput(): string | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): VpcIpv6CidrBlockAssociationTimeoutsOutputReference;
    putTimeouts(value: VpcIpv6CidrBlockAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcIpv6CidrBlockAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
