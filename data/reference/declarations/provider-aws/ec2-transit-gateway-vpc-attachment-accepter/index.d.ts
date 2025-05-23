/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2TransitGatewayVpcAttachmentAccepterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#id Ec2TransitGatewayVpcAttachmentAccepter#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#tags Ec2TransitGatewayVpcAttachmentAccepter#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#tags_all Ec2TransitGatewayVpcAttachmentAccepter#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_attachment_id Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_attachment_id}
    */
    readonly transitGatewayAttachmentId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_association Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_association}
    */
    readonly transitGatewayDefaultRouteTableAssociation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#transit_gateway_default_route_table_propagation Ec2TransitGatewayVpcAttachmentAccepter#transit_gateway_default_route_table_propagation}
    */
    readonly transitGatewayDefaultRouteTablePropagation?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter aws_ec2_transit_gateway_vpc_attachment_accepter}
*/
export declare class Ec2TransitGatewayVpcAttachmentAccepter extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_vpc_attachment_accepter";
    /**
    * Generates CDKTF code for importing a Ec2TransitGatewayVpcAttachmentAccepter resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2TransitGatewayVpcAttachmentAccepter to import
    * @param importFromId The id of the existing Ec2TransitGatewayVpcAttachmentAccepter that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2TransitGatewayVpcAttachmentAccepter to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_transit_gateway_vpc_attachment_accepter aws_ec2_transit_gateway_vpc_attachment_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TransitGatewayVpcAttachmentAccepterConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TransitGatewayVpcAttachmentAccepterConfig);
    get applianceModeSupport(): string;
    get dnsSupport(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ipv6Support(): string;
    get securityGroupReferencingSupport(): string;
    get subnetIds(): string[];
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
    private _transitGatewayAttachmentId?;
    get transitGatewayAttachmentId(): string;
    set transitGatewayAttachmentId(value: string);
    get transitGatewayAttachmentIdInput(): string | undefined;
    private _transitGatewayDefaultRouteTableAssociation?;
    get transitGatewayDefaultRouteTableAssociation(): boolean | cdktf.IResolvable;
    set transitGatewayDefaultRouteTableAssociation(value: boolean | cdktf.IResolvable);
    resetTransitGatewayDefaultRouteTableAssociation(): void;
    get transitGatewayDefaultRouteTableAssociationInput(): boolean | cdktf.IResolvable | undefined;
    private _transitGatewayDefaultRouteTablePropagation?;
    get transitGatewayDefaultRouteTablePropagation(): boolean | cdktf.IResolvable;
    set transitGatewayDefaultRouteTablePropagation(value: boolean | cdktf.IResolvable);
    resetTransitGatewayDefaultRouteTablePropagation(): void;
    get transitGatewayDefaultRouteTablePropagationInput(): boolean | cdktf.IResolvable | undefined;
    get transitGatewayId(): string;
    get vpcId(): string;
    get vpcOwnerId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
