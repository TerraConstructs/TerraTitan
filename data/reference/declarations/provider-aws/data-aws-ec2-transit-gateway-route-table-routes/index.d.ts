/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayRouteTableRoutesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_routes#id DataAwsEc2TransitGatewayRouteTableRoutes#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_routes#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTableRoutes#transit_gateway_route_table_id}
    */
    readonly transitGatewayRouteTableId: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_routes#filter DataAwsEc2TransitGatewayRouteTableRoutes#filter}
    */
    readonly filter: DataAwsEc2TransitGatewayRouteTableRoutesFilter[] | cdktf.IResolvable;
}
export interface DataAwsEc2TransitGatewayRouteTableRoutesRoutes {
}
export declare function dataAwsEc2TransitGatewayRouteTableRoutesRoutesToTerraform(struct?: DataAwsEc2TransitGatewayRouteTableRoutesRoutes): any;
export declare function dataAwsEc2TransitGatewayRouteTableRoutesRoutesToHclTerraform(struct?: DataAwsEc2TransitGatewayRouteTableRoutesRoutes): any;
export declare class DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2TransitGatewayRouteTableRoutesRoutes | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayRouteTableRoutesRoutes | undefined);
    get destinationCidrBlock(): string;
    get prefixListId(): string;
    get state(): string;
    get transitGatewayRouteTableAnnouncementId(): string;
    get type(): string;
}
export declare class DataAwsEc2TransitGatewayRouteTableRoutesRoutesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2TransitGatewayRouteTableRoutesRoutesOutputReference;
}
export interface DataAwsEc2TransitGatewayRouteTableRoutesFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_routes#name DataAwsEc2TransitGatewayRouteTableRoutes#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_routes#values DataAwsEc2TransitGatewayRouteTableRoutes#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2TransitGatewayRouteTableRoutesFilterToTerraform(struct?: DataAwsEc2TransitGatewayRouteTableRoutesFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayRouteTableRoutesFilterToHclTerraform(struct?: DataAwsEc2TransitGatewayRouteTableRoutesFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2TransitGatewayRouteTableRoutesFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayRouteTableRoutesFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2TransitGatewayRouteTableRoutesFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2TransitGatewayRouteTableRoutesFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2TransitGatewayRouteTableRoutesFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_routes aws_ec2_transit_gateway_route_table_routes}
*/
export declare class DataAwsEc2TransitGatewayRouteTableRoutes extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_route_table_routes";
    /**
    * Generates CDKTF code for importing a DataAwsEc2TransitGatewayRouteTableRoutes resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2TransitGatewayRouteTableRoutes to import
    * @param importFromId The id of the existing DataAwsEc2TransitGatewayRouteTableRoutes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_routes#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2TransitGatewayRouteTableRoutes to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_routes aws_ec2_transit_gateway_route_table_routes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayRouteTableRoutesConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayRouteTableRoutesConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _routes;
    get routes(): DataAwsEc2TransitGatewayRouteTableRoutesRoutesList;
    private _transitGatewayRouteTableId?;
    get transitGatewayRouteTableId(): string;
    set transitGatewayRouteTableId(value: string);
    get transitGatewayRouteTableIdInput(): string | undefined;
    private _filter;
    get filter(): DataAwsEc2TransitGatewayRouteTableRoutesFilterList;
    putFilter(value: DataAwsEc2TransitGatewayRouteTableRoutesFilter[] | cdktf.IResolvable): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayRouteTableRoutesFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
