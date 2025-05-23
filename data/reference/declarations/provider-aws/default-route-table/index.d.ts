/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DefaultRouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#default_route_table_id DefaultRouteTable#default_route_table_id}
    */
    readonly defaultRouteTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#id DefaultRouteTable#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#propagating_vgws DefaultRouteTable#propagating_vgws}
    */
    readonly propagatingVgws?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#route DefaultRouteTable#route}
    */
    readonly route?: DefaultRouteTableRoute[] | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#tags DefaultRouteTable#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#tags_all DefaultRouteTable#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#timeouts DefaultRouteTable#timeouts}
    */
    readonly timeouts?: DefaultRouteTableTimeouts;
}
export interface DefaultRouteTableRoute {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#cidr_block DefaultRouteTable#cidr_block}
    */
    readonly cidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#core_network_arn DefaultRouteTable#core_network_arn}
    */
    readonly coreNetworkArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#destination_prefix_list_id DefaultRouteTable#destination_prefix_list_id}
    */
    readonly destinationPrefixListId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#egress_only_gateway_id DefaultRouteTable#egress_only_gateway_id}
    */
    readonly egressOnlyGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#gateway_id DefaultRouteTable#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#instance_id DefaultRouteTable#instance_id}
    */
    readonly instanceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#ipv6_cidr_block DefaultRouteTable#ipv6_cidr_block}
    */
    readonly ipv6CidrBlock?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#nat_gateway_id DefaultRouteTable#nat_gateway_id}
    */
    readonly natGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#network_interface_id DefaultRouteTable#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#transit_gateway_id DefaultRouteTable#transit_gateway_id}
    */
    readonly transitGatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#vpc_endpoint_id DefaultRouteTable#vpc_endpoint_id}
    */
    readonly vpcEndpointId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#vpc_peering_connection_id DefaultRouteTable#vpc_peering_connection_id}
    */
    readonly vpcPeeringConnectionId?: string;
}
export declare function defaultRouteTableRouteToTerraform(struct?: DefaultRouteTableRoute | cdktf.IResolvable): any;
export declare function defaultRouteTableRouteToHclTerraform(struct?: DefaultRouteTableRoute | cdktf.IResolvable): any;
export declare class DefaultRouteTableRouteOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DefaultRouteTableRoute | cdktf.IResolvable | undefined;
    set internalValue(value: DefaultRouteTableRoute | cdktf.IResolvable | undefined);
    private _cidrBlock?;
    get cidrBlock(): string;
    set cidrBlock(value: string);
    resetCidrBlock(): void;
    get cidrBlockInput(): string | undefined;
    private _coreNetworkArn?;
    get coreNetworkArn(): string;
    set coreNetworkArn(value: string);
    resetCoreNetworkArn(): void;
    get coreNetworkArnInput(): string | undefined;
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
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    resetInstanceId(): void;
    get instanceIdInput(): string | undefined;
    private _ipv6CidrBlock?;
    get ipv6CidrBlock(): string;
    set ipv6CidrBlock(value: string);
    resetIpv6CidrBlock(): void;
    get ipv6CidrBlockInput(): string | undefined;
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
}
export declare class DefaultRouteTableRouteList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DefaultRouteTableRoute[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DefaultRouteTableRouteOutputReference;
}
export interface DefaultRouteTableTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#create DefaultRouteTable#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#update DefaultRouteTable#update}
    */
    readonly update?: string;
}
export declare function defaultRouteTableTimeoutsToTerraform(struct?: DefaultRouteTableTimeouts | cdktf.IResolvable): any;
export declare function defaultRouteTableTimeoutsToHclTerraform(struct?: DefaultRouteTableTimeouts | cdktf.IResolvable): any;
export declare class DefaultRouteTableTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DefaultRouteTableTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DefaultRouteTableTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table aws_default_route_table}
*/
export declare class DefaultRouteTable extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_default_route_table";
    /**
    * Generates CDKTF code for importing a DefaultRouteTable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DefaultRouteTable to import
    * @param importFromId The id of the existing DefaultRouteTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DefaultRouteTable to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/default_route_table aws_default_route_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultRouteTableConfig
    */
    constructor(scope: Construct, id: string, config: DefaultRouteTableConfig);
    get arn(): string;
    private _defaultRouteTableId?;
    get defaultRouteTableId(): string;
    set defaultRouteTableId(value: string);
    get defaultRouteTableIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ownerId(): string;
    private _propagatingVgws?;
    get propagatingVgws(): string[];
    set propagatingVgws(value: string[]);
    resetPropagatingVgws(): void;
    get propagatingVgwsInput(): string[] | undefined;
    private _route;
    get route(): DefaultRouteTableRouteList;
    putRoute(value: DefaultRouteTableRoute[] | cdktf.IResolvable): void;
    resetRoute(): void;
    get routeInput(): cdktf.IResolvable | DefaultRouteTableRoute[] | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    get vpcId(): string;
    private _timeouts;
    get timeouts(): DefaultRouteTableTimeoutsOutputReference;
    putTimeouts(value: DefaultRouteTableTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DefaultRouteTableTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
