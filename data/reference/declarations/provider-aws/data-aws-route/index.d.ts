/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#carrier_gateway_id DataAwsRoute#carrier_gateway_id}
    */
    readonly carrierGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#core_network_arn DataAwsRoute#core_network_arn}
    */
    readonly coreNetworkArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#destination_cidr_block DataAwsRoute#destination_cidr_block}
    */
    readonly destinationCidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#destination_ipv6_cidr_block DataAwsRoute#destination_ipv6_cidr_block}
    */
    readonly destinationIpv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#destination_prefix_list_id DataAwsRoute#destination_prefix_list_id}
    */
    readonly destinationPrefixListId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#egress_only_gateway_id DataAwsRoute#egress_only_gateway_id}
    */
    readonly egressOnlyGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#gateway_id DataAwsRoute#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#id DataAwsRoute#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#instance_id DataAwsRoute#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#local_gateway_id DataAwsRoute#local_gateway_id}
    */
    readonly localGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#nat_gateway_id DataAwsRoute#nat_gateway_id}
    */
    readonly natGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#network_interface_id DataAwsRoute#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#route_table_id DataAwsRoute#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#transit_gateway_id DataAwsRoute#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#vpc_peering_connection_id DataAwsRoute#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId?: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#timeouts DataAwsRoute#timeouts}
    */
    readonly timeouts?: DataAwsRouteTimeouts;
}
export interface DataAwsRouteTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#read DataAwsRoute#read}
    */
    readonly read?: string;
}
export declare function dataAwsRouteTimeoutsToTerraform(struct?: DataAwsRouteTimeouts | cdktf.IResolvable): any;
export declare function dataAwsRouteTimeoutsToHclTerraform(struct?: DataAwsRouteTimeouts | cdktf.IResolvable): any;
export declare class DataAwsRouteTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsRouteTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsRouteTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route aws_route}
*/
export declare class DataAwsRoute extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_route";
    /**
    * Generates CDKTF code for importing a DataAwsRoute resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRoute to import
    * @param importFromId The id of the existing DataAwsRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRoute to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route aws_route} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRouteConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRouteConfig);
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
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    resetInstanceId(): void;
    get instanceIdInput(): string | undefined;
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
    private _routeTableId?;
    get routeTableId(): string;
    set routeTableId(value: string);
    get routeTableIdInput(): string | undefined;
    private _transitGatewayId?;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    resetTransitGatewayId(): void;
    get transitGatewayIdInput(): string | undefined;
    private _vpcPeeringConnectionId?;
    get vpcPeeringConnectionId(): string;
    set vpcPeeringConnectionId(value: string);
    resetVpcPeeringConnectionId(): void;
    get vpcPeeringConnectionIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): DataAwsRouteTimeoutsOutputReference;
    putTimeouts(value: DataAwsRouteTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsRouteTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
