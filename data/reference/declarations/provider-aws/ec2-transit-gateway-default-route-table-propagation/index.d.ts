/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayDefaultRouteTablePropagationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#transit_gateway_id Ec2TransitGatewayDefaultRouteTablePropagation#transit_gateway_id}
    */
    readonly transitGatewayId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#transit_gateway_route_table_id Ec2TransitGatewayDefaultRouteTablePropagation#transit_gateway_route_table_id}
    */
    readonly transitGatewayRouteTableId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#timeouts Ec2TransitGatewayDefaultRouteTablePropagation#timeouts}
    */
    readonly timeouts?: Ec2TransitGatewayDefaultRouteTablePropagationTimeouts;
}
export interface Ec2TransitGatewayDefaultRouteTablePropagationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#create Ec2TransitGatewayDefaultRouteTablePropagation#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#delete Ec2TransitGatewayDefaultRouteTablePropagation#delete}
    */
    readonly delete?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#update Ec2TransitGatewayDefaultRouteTablePropagation#update}
    */
    readonly update?: string;
}
export declare function ec2TransitGatewayDefaultRouteTablePropagationTimeoutsToTerraform(struct?: Ec2TransitGatewayDefaultRouteTablePropagationTimeouts | cdktf.IResolvable): any;
export declare function ec2TransitGatewayDefaultRouteTablePropagationTimeoutsToHclTerraform(struct?: Ec2TransitGatewayDefaultRouteTablePropagationTimeouts | cdktf.IResolvable): any;
export declare class Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Ec2TransitGatewayDefaultRouteTablePropagationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2TransitGatewayDefaultRouteTablePropagationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_transit_gateway_default_route_table_propagation aws_ec2_transit_gateway_default_route_table_propagation}
*/
export declare class Ec2TransitGatewayDefaultRouteTablePropagation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_default_route_table_propagation";
    /**
    * Generates CDKTF code for importing a Ec2TransitGatewayDefaultRouteTablePropagation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2TransitGatewayDefaultRouteTablePropagation to import
    * @param importFromId The id of the existing Ec2TransitGatewayDefaultRouteTablePropagation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_transit_gateway_default_route_table_propagation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2TransitGatewayDefaultRouteTablePropagation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/ec2_transit_gateway_default_route_table_propagation aws_ec2_transit_gateway_default_route_table_propagation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayDefaultRouteTablePropagationConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayDefaultRouteTablePropagationConfig);
    get id(): string;
    get originalDefaultRouteTableId(): string;
    private _transitGatewayId?;
    get transitGatewayId(): string;
    set transitGatewayId(value: string);
    get transitGatewayIdInput(): string | undefined;
    private _transitGatewayRouteTableId?;
    get transitGatewayRouteTableId(): string;
    set transitGatewayRouteTableId(value: string);
    get transitGatewayRouteTableIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): Ec2TransitGatewayDefaultRouteTablePropagationTimeoutsOutputReference;
    putTimeouts(value: Ec2TransitGatewayDefaultRouteTablePropagationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | Ec2TransitGatewayDefaultRouteTablePropagationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
