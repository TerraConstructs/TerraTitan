/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayRouteTablesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_tables#id DataAwsEc2TransitGatewayRouteTables#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_tables#tags DataAwsEc2TransitGatewayRouteTables#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_tables#filter DataAwsEc2TransitGatewayRouteTables#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayRouteTablesFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_tables#timeouts DataAwsEc2TransitGatewayRouteTables#timeouts}
    */
    readonly timeouts?: DataAwsEc2TransitGatewayRouteTablesTimeouts;
}
export interface DataAwsEc2TransitGatewayRouteTablesFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_tables#name DataAwsEc2TransitGatewayRouteTables#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_tables#values DataAwsEc2TransitGatewayRouteTables#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2TransitGatewayRouteTablesFilterToTerraform(struct?: DataAwsEc2TransitGatewayRouteTablesFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayRouteTablesFilterToHclTerraform(struct?: DataAwsEc2TransitGatewayRouteTablesFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayRouteTablesFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2TransitGatewayRouteTablesFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayRouteTablesFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2TransitGatewayRouteTablesFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2TransitGatewayRouteTablesFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2TransitGatewayRouteTablesFilterOutputReference;
}
export interface DataAwsEc2TransitGatewayRouteTablesTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_tables#read DataAwsEc2TransitGatewayRouteTables#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2TransitGatewayRouteTablesTimeoutsToTerraform(struct?: DataAwsEc2TransitGatewayRouteTablesTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayRouteTablesTimeoutsToHclTerraform(struct?: DataAwsEc2TransitGatewayRouteTablesTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2TransitGatewayRouteTablesTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayRouteTablesTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_tables aws_ec2_transit_gateway_route_tables}
*/
export declare class DataAwsEc2TransitGatewayRouteTables extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_transit_gateway_route_tables";
    /**
    * Generates CDKTF code for importing a DataAwsEc2TransitGatewayRouteTables resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2TransitGatewayRouteTables to import
    * @param importFromId The id of the existing DataAwsEc2TransitGatewayRouteTables that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_tables#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2TransitGatewayRouteTables to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway_route_tables aws_ec2_transit_gateway_route_tables} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayRouteTablesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayRouteTablesConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ids(): string[];
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
    private _filter;
    get filter(): DataAwsEc2TransitGatewayRouteTablesFilterList;
    putFilter(value: DataAwsEc2TransitGatewayRouteTablesFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayRouteTablesFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2TransitGatewayRouteTablesTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2TransitGatewayRouteTablesTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayRouteTablesTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
