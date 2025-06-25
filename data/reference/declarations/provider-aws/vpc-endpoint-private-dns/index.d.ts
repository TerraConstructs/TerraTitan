/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcEndpointPrivateDnsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_endpoint_private_dns#private_dns_enabled VpcEndpointPrivateDns#private_dns_enabled}
    */
    readonly privateDnsEnabled: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_endpoint_private_dns#vpc_endpoint_id VpcEndpointPrivateDns#vpc_endpoint_id}
    */
    readonly vpcEndpointId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_endpoint_private_dns aws_vpc_endpoint_private_dns}
*/
export declare class VpcEndpointPrivateDns extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_endpoint_private_dns";
    /**
    * Generates CDKTF code for importing a VpcEndpointPrivateDns resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcEndpointPrivateDns to import
    * @param importFromId The id of the existing VpcEndpointPrivateDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_endpoint_private_dns#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcEndpointPrivateDns to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_endpoint_private_dns aws_vpc_endpoint_private_dns} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointPrivateDnsConfig
    */
    constructor(scope: Construct, id: string, config: VpcEndpointPrivateDnsConfig);
    private _privateDnsEnabled?;
    get privateDnsEnabled(): boolean | cdktf.IResolvable;
    set privateDnsEnabled(value: boolean | cdktf.IResolvable);
    get privateDnsEnabledInput(): boolean | cdktf.IResolvable | undefined;
    private _vpcEndpointId?;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    get vpcEndpointIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
