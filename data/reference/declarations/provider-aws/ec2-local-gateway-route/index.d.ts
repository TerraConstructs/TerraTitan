/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2LocalGatewayRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_local_gateway_route#destination_cidr_block Ec2LocalGatewayRoute#destination_cidr_block}
    */
    readonly destinationCidrBlock: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_local_gateway_route#id Ec2LocalGatewayRoute#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_local_gateway_route#local_gateway_route_table_id Ec2LocalGatewayRoute#local_gateway_route_table_id}
    */
    readonly localGatewayRouteTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_local_gateway_route#local_gateway_virtual_interface_group_id Ec2LocalGatewayRoute#local_gateway_virtual_interface_group_id}
    */
    readonly localGatewayVirtualInterfaceGroupId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_local_gateway_route aws_ec2_local_gateway_route}
*/
export declare class Ec2LocalGatewayRoute extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_local_gateway_route";
    /**
    * Generates CDKTF code for importing a Ec2LocalGatewayRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2LocalGatewayRoute to import
    * @param importFromId The id of the existing Ec2LocalGatewayRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_local_gateway_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2LocalGatewayRoute to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_local_gateway_route aws_ec2_local_gateway_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2LocalGatewayRouteConfig
    */
    constructor(scope: Construct, id: string, config: Ec2LocalGatewayRouteConfig);
    private _destinationCidrBlock?;
    get destinationCidrBlock(): string;
    set destinationCidrBlock(value: string);
    get destinationCidrBlockInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _localGatewayRouteTableId?;
    get localGatewayRouteTableId(): string;
    set localGatewayRouteTableId(value: string);
    get localGatewayRouteTableIdInput(): string | undefined;
    private _localGatewayVirtualInterfaceGroupId?;
    get localGatewayVirtualInterfaceGroupId(): string;
    set localGatewayVirtualInterfaceGroupId(value: string);
    get localGatewayVirtualInterfaceGroupIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
