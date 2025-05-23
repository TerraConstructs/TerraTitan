/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcEndpointRouteTableAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_route_table_association#id VpcEndpointRouteTableAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_route_table_association#route_table_id VpcEndpointRouteTableAssociation#route_table_id}
    */
    readonly routeTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_route_table_association#vpc_endpoint_id VpcEndpointRouteTableAssociation#vpc_endpoint_id}
    */
    readonly vpcEndpointId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_route_table_association aws_vpc_endpoint_route_table_association}
*/
export declare class VpcEndpointRouteTableAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_vpc_endpoint_route_table_association";
    /**
    * Generates CDKTF code for importing a VpcEndpointRouteTableAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the VpcEndpointRouteTableAssociation to import
    * @param importFromId The id of the existing VpcEndpointRouteTableAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_route_table_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the VpcEndpointRouteTableAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/vpc_endpoint_route_table_association aws_vpc_endpoint_route_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcEndpointRouteTableAssociationConfig
    */
    constructor(scope: Construct, id: string, config: VpcEndpointRouteTableAssociationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _routeTableId?;
    get routeTableId(): string;
    set routeTableId(value: string);
    get routeTableIdInput(): string | undefined;
    private _vpcEndpointId?;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    get vpcEndpointIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
