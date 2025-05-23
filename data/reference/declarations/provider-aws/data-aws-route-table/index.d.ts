/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRouteTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route_table#gateway_id DataAwsRouteTable#gateway_id}
    */
    readonly gatewayId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route_table#id DataAwsRouteTable#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route_table#route_table_id DataAwsRouteTable#route_table_id}
    */
    readonly routeTableId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route_table#subnet_id DataAwsRouteTable#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route_table#tags DataAwsRouteTable#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route_table#vpc_id DataAwsRouteTable#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route_table#filter DataAwsRouteTable#filter}
    */
    readonly filter?: DataAwsRouteTableFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route_table#timeouts DataAwsRouteTable#timeouts}
    */
    readonly timeouts?: DataAwsRouteTableTimeouts;
}
export interface DataAwsRouteTableAssociations {
}
export declare function dataAwsRouteTableAssociationsToTerraform(struct?: DataAwsRouteTableAssociations): any;
export declare function dataAwsRouteTableAssociationsToHclTerraform(struct?: DataAwsRouteTableAssociations): any;
export declare class DataAwsRouteTableAssociationsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRouteTableAssociations | undefined;
    set internalValue(value: DataAwsRouteTableAssociations | undefined);
    get gatewayId(): string;
    get main(): cdktf.IResolvable;
    get routeTableAssociationId(): string;
    get routeTableId(): string;
    get subnetId(): string;
}
export declare class DataAwsRouteTableAssociationsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsRouteTableAssociationsOutputReference;
}
export interface DataAwsRouteTableRoutes {
}
export declare function dataAwsRouteTableRoutesToTerraform(struct?: DataAwsRouteTableRoutes): any;
export declare function dataAwsRouteTableRoutesToHclTerraform(struct?: DataAwsRouteTableRoutes): any;
export declare class DataAwsRouteTableRoutesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRouteTableRoutes | undefined;
    set internalValue(value: DataAwsRouteTableRoutes | undefined);
    get carrierGatewayId(): string;
    get cidrBlock(): string;
    get coreNetworkArn(): string;
    get destinationPrefixListId(): string;
    get egressOnlyGatewayId(): string;
    get gatewayId(): string;
    get instanceId(): string;
    get ipv6CidrBlock(): string;
    get localGatewayId(): string;
    get natGatewayId(): string;
    get networkInterfaceId(): string;
    get transitGatewayId(): string;
    get vpcEndpointId(): string;
    get vpcPeeringConnectionId(): string;
}
export declare class DataAwsRouteTableRoutesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsRouteTableRoutesOutputReference;
}
export interface DataAwsRouteTableFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route_table#name DataAwsRouteTable#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route_table#values DataAwsRouteTable#values}
    */
    readonly values: string[];
}
export declare function dataAwsRouteTableFilterToTerraform(struct?: DataAwsRouteTableFilter | cdktf.IResolvable): any;
export declare function dataAwsRouteTableFilterToHclTerraform(struct?: DataAwsRouteTableFilter | cdktf.IResolvable): any;
export declare class DataAwsRouteTableFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRouteTableFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsRouteTableFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsRouteTableFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsRouteTableFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsRouteTableFilterOutputReference;
}
export interface DataAwsRouteTableTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route_table#read DataAwsRouteTable#read}
    */
    readonly read?: string;
}
export declare function dataAwsRouteTableTimeoutsToTerraform(struct?: DataAwsRouteTableTimeouts | cdktf.IResolvable): any;
export declare function dataAwsRouteTableTimeoutsToHclTerraform(struct?: DataAwsRouteTableTimeouts | cdktf.IResolvable): any;
export declare class DataAwsRouteTableTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsRouteTableTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsRouteTableTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route_table aws_route_table}
*/
export declare class DataAwsRouteTable extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_route_table";
    /**
    * Generates CDKTF code for importing a DataAwsRouteTable resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRouteTable to import
    * @param importFromId The id of the existing DataAwsRouteTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route_table#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRouteTable to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route_table aws_route_table} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRouteTableConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsRouteTableConfig);
    get arn(): string;
    private _associations;
    get associations(): DataAwsRouteTableAssociationsList;
    private _gatewayId?;
    get gatewayId(): string;
    set gatewayId(value: string);
    resetGatewayId(): void;
    get gatewayIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ownerId(): string;
    private _routeTableId?;
    get routeTableId(): string;
    set routeTableId(value: string);
    resetRouteTableId(): void;
    get routeTableIdInput(): string | undefined;
    private _routes;
    get routes(): DataAwsRouteTableRoutesList;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string | undefined;
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string | undefined;
    private _filter;
    get filter(): DataAwsRouteTableFilterList;
    putFilter(value: DataAwsRouteTableFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsRouteTableFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsRouteTableTimeoutsOutputReference;
    putTimeouts(value: DataAwsRouteTableTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsRouteTableTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
