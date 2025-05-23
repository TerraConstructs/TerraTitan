/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2LocalGatewayRouteTableVpcAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_local_gateway_route_table_vpc_association#id Ec2LocalGatewayRouteTableVpcAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_local_gateway_route_table_vpc_association#local_gateway_route_table_id Ec2LocalGatewayRouteTableVpcAssociation#local_gateway_route_table_id}
    */
    readonly localGatewayRouteTableId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_local_gateway_route_table_vpc_association#tags Ec2LocalGatewayRouteTableVpcAssociation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_local_gateway_route_table_vpc_association#tags_all Ec2LocalGatewayRouteTableVpcAssociation#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_local_gateway_route_table_vpc_association#vpc_id Ec2LocalGatewayRouteTableVpcAssociation#vpc_id}
    */
    readonly vpcId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_local_gateway_route_table_vpc_association aws_ec2_local_gateway_route_table_vpc_association}
*/
export declare class Ec2LocalGatewayRouteTableVpcAssociation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_local_gateway_route_table_vpc_association";
    /**
    * Generates CDKTF code for importing a Ec2LocalGatewayRouteTableVpcAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2LocalGatewayRouteTableVpcAssociation to import
    * @param importFromId The id of the existing Ec2LocalGatewayRouteTableVpcAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_local_gateway_route_table_vpc_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2LocalGatewayRouteTableVpcAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_local_gateway_route_table_vpc_association aws_ec2_local_gateway_route_table_vpc_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2LocalGatewayRouteTableVpcAssociationConfig
    */
    constructor(scope: Construct, id: string, config: Ec2LocalGatewayRouteTableVpcAssociationConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get localGatewayId(): string;
    private _localGatewayRouteTableId?;
    get localGatewayRouteTableId(): string;
    set localGatewayRouteTableId(value: string);
    get localGatewayRouteTableIdInput(): string | undefined;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
