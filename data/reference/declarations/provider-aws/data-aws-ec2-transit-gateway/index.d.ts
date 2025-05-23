/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2TransitGatewayConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway#id DataAwsEc2TransitGateway#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway#tags DataAwsEc2TransitGateway#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway#filter DataAwsEc2TransitGateway#filter}
    */
    readonly filter?: DataAwsEc2TransitGatewayFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway#timeouts DataAwsEc2TransitGateway#timeouts}
    */
    readonly timeouts?: DataAwsEc2TransitGatewayTimeouts;
}
export interface DataAwsEc2TransitGatewayFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway#name DataAwsEc2TransitGateway#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway#values DataAwsEc2TransitGateway#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2TransitGatewayFilterToTerraform(struct?: DataAwsEc2TransitGatewayFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayFilterToHclTerraform(struct?: DataAwsEc2TransitGatewayFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2TransitGatewayFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2TransitGatewayFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2TransitGatewayFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2TransitGatewayFilterOutputReference;
}
export interface DataAwsEc2TransitGatewayTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway#read DataAwsEc2TransitGateway#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2TransitGatewayTimeoutsToTerraform(struct?: DataAwsEc2TransitGatewayTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2TransitGatewayTimeoutsToHclTerraform(struct?: DataAwsEc2TransitGatewayTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2TransitGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2TransitGatewayTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2TransitGatewayTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway aws_ec2_transit_gateway}
*/
export declare class DataAwsEc2TransitGateway extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_transit_gateway";
    /**
    * Generates CDKTF code for importing a DataAwsEc2TransitGateway resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2TransitGateway to import
    * @param importFromId The id of the existing DataAwsEc2TransitGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2TransitGateway to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_transit_gateway aws_ec2_transit_gateway} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2TransitGatewayConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2TransitGatewayConfig);
    get amazonSideAsn(): number;
    get arn(): string;
    get associationDefaultRouteTableId(): string;
    get autoAcceptSharedAttachments(): string;
    get defaultRouteTableAssociation(): string;
    get defaultRouteTablePropagation(): string;
    get description(): string;
    get dnsSupport(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get multicastSupport(): string;
    get ownerId(): string;
    get propagationDefaultRouteTableId(): string;
    get securityGroupReferencingSupport(): string;
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
    get transitGatewayCidrBlocks(): string[];
    get vpnEcmpSupport(): string;
    private _filter;
    get filter(): DataAwsEc2TransitGatewayFilterList;
    putFilter(value: DataAwsEc2TransitGatewayFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2TransitGatewayTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2TransitGatewayTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2TransitGatewayTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
