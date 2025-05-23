/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayRouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table#id DataAwsEc2TransitGatewayRouteTable#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table#tags DataAwsEc2TransitGatewayRouteTable#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table#filter DataAwsEc2TransitGatewayRouteTable#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayRouteTableFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table#timeouts DataAwsEc2TransitGatewayRouteTable#timeouts}
    */
    readonly timeouts?: DataAwsEc2TransitGatewayRouteTableTimeouts;
}
export interface DataAwsEc2TransitGatewayRouteTableFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table#name DataAwsEc2TransitGatewayRouteTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table#values DataAwsEc2TransitGatewayRouteTable#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2TransitGatewayRouteTableFilterToTerraform(struct?: DataAwsEc2TransitGatewayRouteTableFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayRouteTableFilterToHclTerraform(struct?: DataAwsEc2TransitGatewayRouteTableFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayRouteTableFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2TransitGatewayRouteTableFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayRouteTableFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2TransitGatewayRouteTableFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2TransitGatewayRouteTableFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2TransitGatewayRouteTableFilterOutputReference;
}
export interface DataAwsEc2TransitGatewayRouteTableTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table#read DataAwsEc2TransitGatewayRouteTable#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2TransitGatewayRouteTableTimeoutsToTerraform(struct?: DataAwsEc2TransitGatewayRouteTableTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayRouteTableTimeoutsToHclTerraform(struct?: DataAwsEc2TransitGatewayRouteTableTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayRouteTableTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2TransitGatewayRouteTableTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayRouteTableTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table aws_ec2_transit_gateway_route_table}
*/
export declare class DataAwsEc2TransitGatewayRouteTable extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_route_table";
    /**
    * Generates CDKTF code for importing a DataAwsEc2TransitGatewayRouteTable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2TransitGatewayRouteTable to import
    * @param importFromId The id of the existing DataAwsEc2TransitGatewayRouteTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2TransitGatewayRouteTable to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_table aws_ec2_transit_gateway_route_table} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayRouteTableConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayRouteTableConfig);
    get arn(): string;
    get defaultAssociationRouteTable(): cdktf.IResolvable;
    get defaultPropagationRouteTable(): cdktf.IResolvable;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    get transitGatewayId(): string;
    private _filter;
    get filter(): DataAwsEc2TransitGatewayRouteTableFilterList;
    putFilter(value: DataAwsEc2TransitGatewayRouteTableFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayRouteTableFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2TransitGatewayRouteTableTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2TransitGatewayRouteTableTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayRouteTableTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
