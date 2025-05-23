/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2CoipPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_coip_pool#id DataAwsEc2CoipPool#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_coip_pool#local_gateway_route_table_id DataAwsEc2CoipPool#local_gateway_route_table_id}
    */
    readonly localGatewayRouteTableId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_coip_pool#pool_id DataAwsEc2CoipPool#pool_id}
    */
    readonly poolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_coip_pool#tags DataAwsEc2CoipPool#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_coip_pool#filter DataAwsEc2CoipPool#filter}
    */
    readonly filter?: DataAwsEc2CoipPoolFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_coip_pool#timeouts DataAwsEc2CoipPool#timeouts}
    */
    readonly timeouts?: DataAwsEc2CoipPoolTimeouts;
}
export interface DataAwsEc2CoipPoolFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_coip_pool#name DataAwsEc2CoipPool#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_coip_pool#values DataAwsEc2CoipPool#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2CoipPoolFilterToTerraform(struct?: DataAwsEc2CoipPoolFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2CoipPoolFilterToHclTerraform(struct?: DataAwsEc2CoipPoolFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2CoipPoolFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2CoipPoolFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2CoipPoolFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2CoipPoolFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2CoipPoolFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2CoipPoolFilterOutputReference;
}
export interface DataAwsEc2CoipPoolTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_coip_pool#read DataAwsEc2CoipPool#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2CoipPoolTimeoutsToTerraform(struct?: DataAwsEc2CoipPoolTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2CoipPoolTimeoutsToHclTerraform(struct?: DataAwsEc2CoipPoolTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2CoipPoolTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2CoipPoolTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2CoipPoolTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_coip_pool aws_ec2_coip_pool}
*/
export declare class DataAwsEc2CoipPool extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_coip_pool";
    /**
    * Generates CDKTF code for importing a DataAwsEc2CoipPool resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2CoipPool to import
    * @param importFromId The id of the existing DataAwsEc2CoipPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_coip_pool#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2CoipPool to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_coip_pool aws_ec2_coip_pool} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2CoipPoolConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2CoipPoolConfig);
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _localGatewayRouteTableId?;
    get localGatewayRouteTableId(): string;
    set localGatewayRouteTableId(value: string);
    resetLocalGatewayRouteTableId(): void;
    get localGatewayRouteTableIdInput(): string | undefined;
    get poolCidrs(): string[];
    private _poolId?;
    get poolId(): string;
    set poolId(value: string);
    resetPoolId(): void;
    get poolIdInput(): string | undefined;
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
    get filter(): DataAwsEc2CoipPoolFilterList;
    putFilter(value: DataAwsEc2CoipPoolFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2CoipPoolFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2CoipPoolTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2CoipPoolTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2CoipPoolTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
