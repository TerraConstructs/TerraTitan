/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayRouteTableAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_route_table_association#id Ec2TransitGatewayRouteTableAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_route_table_association#replace_existing_association Ec2TransitGatewayRouteTableAssociation#replace_existing_association}
    */
    readonly replaceExistingAssociation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_route_table_association#transit_gateway_attachment_id Ec2TransitGatewayRouteTableAssociation#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_route_table_association#transit_gateway_route_table_id Ec2TransitGatewayRouteTableAssociation#transit_gateway_route_table_id}
    */
    readonly transitGatewayRouteTableId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_route_table_association aws_ec2_transit_gateway_route_table_association}
*/
export declare class Ec2TransitGatewayRouteTableAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_route_table_association";
    /**
    * Generates CDKTF code for importing a Ec2TransitGatewayRouteTableAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2TransitGatewayRouteTableAssociation to import
    * @param importFromId The id of the existing Ec2TransitGatewayRouteTableAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_route_table_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2TransitGatewayRouteTableAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_route_table_association aws_ec2_transit_gateway_route_table_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayRouteTableAssociationConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayRouteTableAssociationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _replaceExistingAssociation?;
    get replaceExistingAssociation(): boolean | cdktf.IResolvable;
    set replaceExistingAssociation(value: boolean | cdktf.IResolvable);
    resetReplaceExistingAssociation(): void;
    get replaceExistingAssociationInput(): boolean | cdktf.IResolvable | undefined;
    get resourceId(): string;
    get resourceType(): string;
    private _transitGatewayAttachmentId?;
    get transitGatewayAttachmentId(): string;
    set transitGatewayAttachmentId(value: string);
    get transitGatewayAttachmentIdInput(): string | undefined;
    private _transitGatewayRouteTableId?;
    get transitGatewayRouteTableId(): string;
    set transitGatewayRouteTableId(value: string);
    get transitGatewayRouteTableIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
