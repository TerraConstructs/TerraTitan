/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface RouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#carrier_gateway_id Route#carrier_gateway_id}
    */
    readonly carrierGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#core_network_arn Route#core_network_arn}
    */
    readonly coreNetworkArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#destination_cidr_block Route#destination_cidr_block}
    */
    readonly destinationCidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#destination_ipv6_cidr_block Route#destination_ipv6_cidr_block}
    */
    readonly destinationIpv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#destination_prefix_list_id Route#destination_prefix_list_id}
    */
    readonly destinationPrefixListId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#egress_only_gateway_id Route#egress_only_gateway_id}
    */
    readonly egressOnlyGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#gateway_id Route#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#id Route#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#local_gateway_id Route#local_gateway_id}
    */
    readonly localGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#nat_gateway_id Route#nat_gateway_id}
    */
    readonly natGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#network_interface_id Route#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#route_table_id Route#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#transit_gateway_id Route#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#vpc_endpoint_id Route#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#vpc_peering_connection_id Route#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#timeouts Route#timeouts}
    */
    readonly timeouts?: RouteTimeouts;
}
export interface RouteTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#create Route#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#delete Route#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#update Route#update}
    */
    readonly update?: string;
}
export declare function routeTimeoutsToTerraform(struct?: RouteTimeouts | cdktf.IResolvable): any;
export declare function routeTimeoutsToHclTerraform(struct?: RouteTimeouts | cdktf.IResolvable): any;
export declare class RouteTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): RouteTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: RouteTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route aws_route}
*/
export declare class Route extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route";
    /**
    * Generates CDKTF code for importing a Route resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route to import
    * @param importFromId The id of the existing Route that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route aws_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RouteConfig
    */
    constructor(scope: Construct, id: string, config: RouteConfig);
    private _carrierGatewayId?;
    get carrierGatewayId(): string;
    set carrierGatewayId(value: string);
    resetCarrierGatewayId(): void;
    get carrierGatewayIdInput(): string | undefined;
    private _coreNetworkArn?;
    get coreNetworkArn(): string;
    set coreNetworkArn(value: string);
    resetCoreNetworkArn(): void;
    get coreNetworkArnInput(): string | undefined;
    private _destinationCidrBlock?;
    get destinationCidrBlock(): string;
    set destinationCidrBlock(value: string);
    resetDestinationCidrBlock(): void;
    get destinationCidrBlockInput(): string | undefined;
    private _destinationIpv6CidrBlock?;
    get destinationIpv6CidrBlock(): string;
    set destinationIpv6CidrBlock(value: string);
    resetDestinationIpv6CidrBlock(): void;
    get destinationIpv6CidrBlockInput(): string | undefined;
    private _destinationPrefixListId?;
    get destinationPrefixListId(): string;
    set destinationPrefixListId(value: string);
    resetDestinationPrefixListId(): void;
    get destinationPrefixListIdInput(): string | undefined;
    private _egressOnlyGatewayId?;
    get egressOnlyGatewayId(): string;
    set egressOnlyGatewayId(value: string);
    resetEgressOnlyGatewayId(): void;
    get egressOnlyGatewayIdInput(): string | undefined;
    private _gatewayId?;
    get gatewayId(): string;
    set gatewayId(value: string);
    resetGatewayId(): void;
    get gatewayIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get instanceId(): string;
    get instanceOwnerId(): string;
    private _localGatewayId?;
    get localGatewayId(): string;
    set localGatewayId(value: string);
    resetLocalGatewayId(): void;
    get localGatewayIdInput(): string | undefined;
    private _natGatewayId?;
    get natGatewayId(): string;
    set natGatewayId(value: string);
    resetNatGatewayId(): void;
    get natGatewayIdInput(): string | undefined;
    private _networkInterfaceId?;
    get networkInterfaceId(): string;
    set networkInterfaceId(value: string);
    resetNetworkInterfaceId(): void;
    get networkInterfaceIdInput(): string | undefined;
    get origin(): string;
    private _routeTableId?;
    get routeTableId(): string;
    set routeTableId(value: string);
    get routeTableIdInput(): string | undefined;
    get state(): string;
    private _transitGatewayId?;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    resetTransitGatewayId(): void;
    get transitGatewayIdInput(): string | undefined;
    private _vpcEndpointId?;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    resetVpcEndpointId(): void;
    get vpcEndpointIdInput(): string | undefined;
    private _vpcPeeringConnectionId?;
    get vpcPeeringConnectionId(): string;
    set vpcPeeringConnectionId(value: string);
    resetVpcPeeringConnectionId(): void;
    get vpcPeeringConnectionIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): RouteTimeoutsOutputReference;
    putTimeouts(value: RouteTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | RouteTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
