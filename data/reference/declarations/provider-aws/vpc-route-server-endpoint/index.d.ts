/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcRouteServerEndpointConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_endpoint#route_server_id VpcRouteServerEndpoint#route_server_id}
    */
    readonly routeServerId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_endpoint#subnet_id VpcRouteServerEndpoint#subnet_id}
    */
    readonly subnetId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_endpoint#tags VpcRouteServerEndpoint#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_endpoint#timeouts VpcRouteServerEndpoint#timeouts}
    */
    readonly timeouts?: VpcRouteServerEndpointTimeouts;
}
export interface VpcRouteServerEndpointTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_endpoint#create VpcRouteServerEndpoint#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_endpoint#delete VpcRouteServerEndpoint#delete}
    */
    readonly delete?: string;
}
export declare function vpcRouteServerEndpointTimeoutsToTerraform(struct?: VpcRouteServerEndpointTimeouts | cdktf.IResolvable): any;
export declare function vpcRouteServerEndpointTimeoutsToHclTerraform(struct?: VpcRouteServerEndpointTimeouts | cdktf.IResolvable): any;
export declare class VpcRouteServerEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcRouteServerEndpointTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcRouteServerEndpointTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_endpoint aws_vpc_route_server_endpoint}
*/
export declare class VpcRouteServerEndpoint extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_route_server_endpoint";
    /**
    * Generates CDKTF code for importing a VpcRouteServerEndpoint resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcRouteServerEndpoint to import
    * @param importFromId The id of the existing VpcRouteServerEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_endpoint#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcRouteServerEndpoint to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_endpoint aws_vpc_route_server_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcRouteServerEndpointConfig
    */
    constructor(scope: Construct, id: string, config: VpcRouteServerEndpointConfig);
    get arn(): string;
    get eniAddress(): string;
    get eniId(): string;
    get routeServerEndpointId(): string;
    private _routeServerId?;
    get routeServerId(): string;
    set routeServerId(value: string);
    get routeServerIdInput(): string | undefined;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    get subnetIdInput(): string | undefined;
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
    private _tagsAll;
    get tagsAll(): cdktf.StringMap;
    get vpcId(): string;
    private _timeouts;
    get timeouts(): VpcRouteServerEndpointTimeoutsOutputReference;
    putTimeouts(value: VpcRouteServerEndpointTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcRouteServerEndpointTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
