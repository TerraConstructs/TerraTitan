/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcIpamPoolCidrAllocationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool_cidr_allocation#cidr VpcIpamPoolCidrAllocation#cidr}
    */
    readonly cidr?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool_cidr_allocation#description VpcIpamPoolCidrAllocation#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool_cidr_allocation#disallowed_cidrs VpcIpamPoolCidrAllocation#disallowed_cidrs}
    */
    readonly disallowedCidrs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool_cidr_allocation#id VpcIpamPoolCidrAllocation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool_cidr_allocation#ipam_pool_id VpcIpamPoolCidrAllocation#ipam_pool_id}
    */
    readonly ipamPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool_cidr_allocation#netmask_length VpcIpamPoolCidrAllocation#netmask_length}
    */
    readonly netmaskLength?: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool_cidr_allocation aws_vpc_ipam_pool_cidr_allocation}
*/
export declare class VpcIpamPoolCidrAllocation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_ipam_pool_cidr_allocation";
    /**
    * Generates CDKTF code for importing a VpcIpamPoolCidrAllocation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcIpamPoolCidrAllocation to import
    * @param importFromId The id of the existing VpcIpamPoolCidrAllocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool_cidr_allocation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcIpamPoolCidrAllocation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_pool_cidr_allocation aws_vpc_ipam_pool_cidr_allocation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpamPoolCidrAllocationConfig
    */
    constructor(scope: Construct, id: string, config: VpcIpamPoolCidrAllocationConfig);
    private _cidr?;
    get cidr(): string;
    set cidr(value: string);
    resetCidr(): void;
    get cidrInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _disallowedCidrs?;
    get disallowedCidrs(): string[];
    set disallowedCidrs(value: string[]);
    resetDisallowedCidrs(): void;
    get disallowedCidrsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ipamPoolAllocationId(): string;
    private _ipamPoolId?;
    get ipamPoolId(): string;
    set ipamPoolId(value: string);
    get ipamPoolIdInput(): string | undefined;
    private _netmaskLength?;
    get netmaskLength(): number;
    set netmaskLength(value: number);
    resetNetmaskLength(): void;
    get netmaskLengthInput(): number | undefined;
    get resourceId(): string;
    get resourceOwner(): string;
    get resourceType(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
