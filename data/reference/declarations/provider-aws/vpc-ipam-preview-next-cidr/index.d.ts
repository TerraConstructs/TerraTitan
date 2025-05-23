/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcIpamPreviewNextCidrConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_preview_next_cidr#disallowed_cidrs VpcIpamPreviewNextCidr#disallowed_cidrs}
    */
    readonly disallowedCidrs?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_preview_next_cidr#id VpcIpamPreviewNextCidr#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_preview_next_cidr#ipam_pool_id VpcIpamPreviewNextCidr#ipam_pool_id}
    */
    readonly ipamPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_preview_next_cidr#netmask_length VpcIpamPreviewNextCidr#netmask_length}
    */
    readonly netmaskLength?: number;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_preview_next_cidr aws_vpc_ipam_preview_next_cidr}
*/
export declare class VpcIpamPreviewNextCidr extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_ipam_preview_next_cidr";
    /**
    * Generates CDKTF code for importing a VpcIpamPreviewNextCidr resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcIpamPreviewNextCidr to import
    * @param importFromId The id of the existing VpcIpamPreviewNextCidr that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_preview_next_cidr#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcIpamPreviewNextCidr to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_ipam_preview_next_cidr aws_vpc_ipam_preview_next_cidr} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcIpamPreviewNextCidrConfig
    */
    constructor(scope: Construct, id: string, config: VpcIpamPreviewNextCidrConfig);
    get cidr(): string;
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
    private _ipamPoolId?;
    get ipamPoolId(): string;
    set ipamPoolId(value: string);
    get ipamPoolIdInput(): string | undefined;
    private _netmaskLength?;
    get netmaskLength(): number;
    set netmaskLength(value: number);
    resetNetmaskLength(): void;
    get netmaskLengthInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
