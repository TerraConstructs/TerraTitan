/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayRouteTableAssociationsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_associations#id DataAwsEc2TransitGatewayRouteTableAssociations#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_associations#transit_gateway_route_table_id DataAwsEc2TransitGatewayRouteTableAssociations#transit_gateway_route_table_id}
    */
    readonly transitGatewayRouteTableId: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_associations#filter DataAwsEc2TransitGatewayRouteTableAssociations#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayRouteTableAssociationsFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_associations#timeouts DataAwsEc2TransitGatewayRouteTableAssociations#timeouts}
    */
    readonly timeouts?: DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts;
}
export interface DataAwsEc2TransitGatewayRouteTableAssociationsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_associations#name DataAwsEc2TransitGatewayRouteTableAssociations#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_associations#values DataAwsEc2TransitGatewayRouteTableAssociations#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2TransitGatewayRouteTableAssociationsFilterToTerraform(struct?: DataAwsEc2TransitGatewayRouteTableAssociationsFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayRouteTableAssociationsFilterToHclTerraform(struct?: DataAwsEc2TransitGatewayRouteTableAssociationsFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2TransitGatewayRouteTableAssociationsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayRouteTableAssociationsFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2TransitGatewayRouteTableAssociationsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2TransitGatewayRouteTableAssociationsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2TransitGatewayRouteTableAssociationsFilterOutputReference;
}
export interface DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_associations#read DataAwsEc2TransitGatewayRouteTableAssociations#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsToTerraform(struct?: DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsToHclTerraform(struct?: DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_associations aws_ec2_transit_gateway_route_table_associations}
*/
export declare class DataAwsEc2TransitGatewayRouteTableAssociations extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_route_table_associations";
    /**
    * Generates CDKTF code for importing a DataAwsEc2TransitGatewayRouteTableAssociations resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2TransitGatewayRouteTableAssociations to import
    * @param importFromId The id of the existing DataAwsEc2TransitGatewayRouteTableAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_associations#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2TransitGatewayRouteTableAssociations to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table_associations aws_ec2_transit_gateway_route_table_associations} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayRouteTableAssociationsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEc2TransitGatewayRouteTableAssociationsConfig);
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
    get filter(): DataAwsEc2TransitGatewayRouteTableAssociationsFilterList;
    putFilter(value: DataAwsEc2TransitGatewayRouteTableAssociationsFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayRouteTableAssociationsFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2TransitGatewayRouteTableAssociationsTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayRouteTableAssociationsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
