/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayMulticastGroupSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_group_source#group_ip_address Ec2TransitGatewayMulticastGroupSource#group_ip_address}
    */
    readonly groupIpAddress: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_group_source#id Ec2TransitGatewayMulticastGroupSource#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_group_source#network_interface_id Ec2TransitGatewayMulticastGroupSource#network_interface_id}
    */
    readonly networkInterfaceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_group_source#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastGroupSource#transit_gateway_multicast_domain_id}
    */
    readonly transitGatewayMulticastDomainId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_group_source aws_ec2_transit_gateway_multicast_group_source}
*/
export declare class Ec2TransitGatewayMulticastGroupSource extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_multicast_group_source";
    /**
    * Generates CDKTF code for importing a Ec2TransitGatewayMulticastGroupSource resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2TransitGatewayMulticastGroupSource to import
    * @param importFromId The id of the existing Ec2TransitGatewayMulticastGroupSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_group_source#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2TransitGatewayMulticastGroupSource to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_multicast_group_source aws_ec2_transit_gateway_multicast_group_source} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayMulticastGroupSourceConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayMulticastGroupSourceConfig);
    private _groupIpAddress?;
    get groupIpAddress(): string;
    set groupIpAddress(value: string);
    get groupIpAddressInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _networkInterfaceId?;
    get networkInterfaceId(): string;
    set networkInterfaceId(value: string);
    get networkInterfaceIdInput(): string | undefined;
    private _transitGatewayMulticastDomainId?;
    get transitGatewayMulticastDomainId(): string;
    set transitGatewayMulticastDomainId(value: string);
    get transitGatewayMulticastDomainIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
