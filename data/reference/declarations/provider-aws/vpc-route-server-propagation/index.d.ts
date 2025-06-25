/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcRouteServerPropagationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_propagation#route_server_id VpcRouteServerPropagation#route_server_id}
    */
    readonly routeServerId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_propagation#route_table_id VpcRouteServerPropagation#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_propagation#timeouts VpcRouteServerPropagation#timeouts}
    */
    readonly timeouts?: VpcRouteServerPropagationTimeouts;
}
export interface VpcRouteServerPropagationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_propagation#create VpcRouteServerPropagation#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_propagation#delete VpcRouteServerPropagation#delete}
    */
    readonly delete?: string;
}
export declare function vpcRouteServerPropagationTimeoutsToTerraform(struct?: VpcRouteServerPropagationTimeouts | cdktf.IResolvable): any;
export declare function vpcRouteServerPropagationTimeoutsToHclTerraform(struct?: VpcRouteServerPropagationTimeouts | cdktf.IResolvable): any;
export declare class VpcRouteServerPropagationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcRouteServerPropagationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcRouteServerPropagationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_propagation aws_vpc_route_server_propagation}
*/
export declare class VpcRouteServerPropagation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_route_server_propagation";
    /**
    * Generates CDKTF code for importing a VpcRouteServerPropagation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcRouteServerPropagation to import
    * @param importFromId The id of the existing VpcRouteServerPropagation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_propagation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcRouteServerPropagation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_propagation aws_vpc_route_server_propagation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcRouteServerPropagationConfig
    */
    constructor(scope: Construct, id: string, config: VpcRouteServerPropagationConfig);
    private _routeServerId?;
    get routeServerId(): string;
    set routeServerId(value: string);
    get routeServerIdInput(): string | undefined;
    private _routeTableId?;
    get routeTableId(): string;
    set routeTableId(value: string);
    get routeTableIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): VpcRouteServerPropagationTimeoutsOutputReference;
    putTimeouts(value: VpcRouteServerPropagationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcRouteServerPropagationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
