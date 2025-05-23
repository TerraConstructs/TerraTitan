/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpnConnectionRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection_route#destination_cidr_block VpnConnectionRoute#destination_cidr_block}
    */
    readonly destinationCidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection_route#id VpnConnectionRoute#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection_route#vpn_connection_id VpnConnectionRoute#vpn_connection_id}
    */
    readonly vpnConnectionId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection_route aws_vpn_connection_route}
*/
export declare class VpnConnectionRoute extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpn_connection_route";
    /**
    * Generates CDKTF code for importing a VpnConnectionRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpnConnectionRoute to import
    * @param importFromId The id of the existing VpnConnectionRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpnConnectionRoute to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_connection_route aws_vpn_connection_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpnConnectionRouteConfig
    */
    constructor(scope: Construct, id: string, config: VpnConnectionRouteConfig);
    private _destinationCidrBlock?;
    get destinationCidrBlock(): string;
    set destinationCidrBlock(value: string);
    get destinationCidrBlockInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _vpnConnectionId?;
    get vpnConnectionId(): string;
    set vpnConnectionId(value: string);
    get vpnConnectionIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
