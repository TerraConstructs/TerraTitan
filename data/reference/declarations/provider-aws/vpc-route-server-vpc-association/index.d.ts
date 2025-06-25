/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcRouteServerVpcAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_vpc_association#route_server_id VpcRouteServerVpcAssociation#route_server_id}
    */
    readonly routeServerId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_vpc_association#vpc_id VpcRouteServerVpcAssociation#vpc_id}
    */
    readonly vpcId: string;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_vpc_association#timeouts VpcRouteServerVpcAssociation#timeouts}
    */
    readonly timeouts?: VpcRouteServerVpcAssociationTimeouts;
}
export interface VpcRouteServerVpcAssociationTimeouts {
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_vpc_association#create VpcRouteServerVpcAssociation#create}
    */
    readonly create?: string;
    /**
    * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_vpc_association#delete VpcRouteServerVpcAssociation#delete}
    */
    readonly delete?: string;
}
export declare function vpcRouteServerVpcAssociationTimeoutsToTerraform(struct?: VpcRouteServerVpcAssociationTimeouts | cdktf.IResolvable): any;
export declare function vpcRouteServerVpcAssociationTimeoutsToHclTerraform(struct?: VpcRouteServerVpcAssociationTimeouts | cdktf.IResolvable): any;
export declare class VpcRouteServerVpcAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): VpcRouteServerVpcAssociationTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: VpcRouteServerVpcAssociationTimeouts | cdktf.IResolvable | undefined);
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_vpc_association aws_vpc_route_server_vpc_association}
*/
export declare class VpcRouteServerVpcAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_route_server_vpc_association";
    /**
    * Generates CDKTF code for importing a VpcRouteServerVpcAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcRouteServerVpcAssociation to import
    * @param importFromId The id of the existing VpcRouteServerVpcAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_vpc_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcRouteServerVpcAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/vpc_route_server_vpc_association aws_vpc_route_server_vpc_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcRouteServerVpcAssociationConfig
    */
    constructor(scope: Construct, id: string, config: VpcRouteServerVpcAssociationConfig);
    private _routeServerId?;
    get routeServerId(): string;
    set routeServerId(value: string);
    get routeServerIdInput(): string | undefined;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
    private _timeouts;
    get timeouts(): VpcRouteServerVpcAssociationTimeoutsOutputReference;
    putTimeouts(value: VpcRouteServerVpcAssociationTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | VpcRouteServerVpcAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
