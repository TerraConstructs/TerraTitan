/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpnGatewayRoutePropagationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_gateway_route_propagation#id VpnGatewayRoutePropagation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_gateway_route_propagation#route_table_id VpnGatewayRoutePropagation#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_gateway_route_propagation#vpn_gateway_id VpnGatewayRoutePropagation#vpn_gateway_id}
    */
    readonly vpnGatewayId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_gateway_route_propagation#timeouts VpnGatewayRoutePropagation#timeouts}
    */
    readonly timeouts?: VpnGatewayRoutePropagationTimeouts;
}
export interface VpnGatewayRoutePropagationTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_gateway_route_propagation#create VpnGatewayRoutePropagation#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_gateway_route_propagation#delete VpnGatewayRoutePropagation#delete}
    */
    readonly delete?: string;
}
export declare function vpnGatewayRoutePropagationTimeoutsToTerraform(struct?: VpnGatewayRoutePropagationTimeouts | cdktf.IResolvable): any;
export declare function vpnGatewayRoutePropagationTimeoutsToHclTerraform(struct?: VpnGatewayRoutePropagationTimeouts | cdktf.IResolvable): any;
export declare class VpnGatewayRoutePropagationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpnGatewayRoutePropagationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpnGatewayRoutePropagationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_gateway_route_propagation aws_vpn_gateway_route_propagation}
*/
export declare class VpnGatewayRoutePropagation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpn_gateway_route_propagation";
    /**
    * Generates CDKTF code for importing a VpnGatewayRoutePropagation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpnGatewayRoutePropagation to import
    * @param importFromId The id of the existing VpnGatewayRoutePropagation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_gateway_route_propagation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpnGatewayRoutePropagation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpn_gateway_route_propagation aws_vpn_gateway_route_propagation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpnGatewayRoutePropagationConfig
    */
    constructor(scope: Construct, id: string, config: VpnGatewayRoutePropagationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _routeTableId?;
    get routeTableId(): string;
    set routeTableId(value: string);
    get routeTableIdInput(): string | undefined;
    private _vpnGatewayId?;
    get vpnGatewayId(): string;
    set vpnGatewayId(value: string);
    get vpnGatewayIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): VpnGatewayRoutePropagationTimeoutsOutputReference;
    putTimeouts(value: VpnGatewayRoutePropagationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpnGatewayRoutePropagationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
