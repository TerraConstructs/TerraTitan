/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayRouteTablePropagationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#id DataAwsEc2TransitGatewayRouteTablePropagations#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTablePropagations#transit_gateway_route_table_id}
    */
    readonly transitGatewayRouteTableId: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#filter DataAwsEc2TransitGatewayRouteTablePropagations#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayRouteTablePropagationsFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#timeouts DataAwsEc2TransitGatewayRouteTablePropagations#timeouts}
    */
    readonly timeouts?: DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts;
}
export interface DataAwsEc2TransitGatewayRouteTablePropagationsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#name DataAwsEc2TransitGatewayRouteTablePropagations#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#values DataAwsEc2TransitGatewayRouteTablePropagations#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2TransitGatewayRouteTablePropagationsFilterToTerraform(struct?: DataAwsEc2TransitGatewayRouteTablePropagationsFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayRouteTablePropagationsFilterToHclTerraform(struct?: DataAwsEc2TransitGatewayRouteTablePropagationsFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2TransitGatewayRouteTablePropagationsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayRouteTablePropagationsFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2TransitGatewayRouteTablePropagationsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2TransitGatewayRouteTablePropagationsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2TransitGatewayRouteTablePropagationsFilterOutputReference;
}
export interface DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#read DataAwsEc2TransitGatewayRouteTablePropagations#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsToTerraform(struct?: DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsToHclTerraform(struct?: DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_propagations aws_ec2_transit_gateway_route_table_propagations}
*/
export declare class DataAwsEc2TransitGatewayRouteTablePropagations extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_route_table_propagations";
    /**
    * Generates CDKTF code for importing a DataAwsEc2TransitGatewayRouteTablePropagations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2TransitGatewayRouteTablePropagations to import
    * @param importFromId The id of the existing DataAwsEc2TransitGatewayRouteTablePropagations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_propagations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2TransitGatewayRouteTablePropagations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_propagations aws_ec2_transit_gateway_route_table_propagations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayRouteTablePropagationsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayRouteTablePropagationsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ids(): string[];
    private _transitGatewayRouteTableId?;
    get transitGatewayRouteTableId(): string;
    set transitGatewayRouteTableId(value: string);
    get transitGatewayRouteTableIdInput(): string | undefined;
    private _filter;
    get filter(): DataAwsEc2TransitGatewayRouteTablePropagationsFilterList;
    putFilter(value: DataAwsEc2TransitGatewayRouteTablePropagationsFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayRouteTablePropagationsFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2TransitGatewayRouteTablePropagationsTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayRouteTablePropagationsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
