/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsVpcIpamPoolCidrsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool_cidrs#id DataAwsVpcIpamPoolCidrs#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool_cidrs#ipam_pool_id DataAwsVpcIpamPoolCidrs#ipam_pool_id}
    */
    readonly ipamPoolId: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool_cidrs#filter DataAwsVpcIpamPoolCidrs#filter}
    */
    readonly filter?: DataAwsVpcIpamPoolCidrsFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool_cidrs#timeouts DataAwsVpcIpamPoolCidrs#timeouts}
    */
    readonly timeouts?: DataAwsVpcIpamPoolCidrsTimeouts;
}
export interface DataAwsVpcIpamPoolCidrsIpamPoolCidrs {
}
export declare function dataAwsVpcIpamPoolCidrsIpamPoolCidrsToTerraform(struct?: DataAwsVpcIpamPoolCidrsIpamPoolCidrs): any;
export declare function dataAwsVpcIpamPoolCidrsIpamPoolCidrsToHclTerraform(struct?: DataAwsVpcIpamPoolCidrsIpamPoolCidrs): any;
export declare class DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcIpamPoolCidrsIpamPoolCidrs | undefined;
    set internalValue(value: DataAwsVpcIpamPoolCidrsIpamPoolCidrs | undefined);
    get cidr(): string;
    get state(): string;
}
export declare class DataAwsVpcIpamPoolCidrsIpamPoolCidrsList extends cdktf.ComplexList {
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
    get(index: number): DataAwsVpcIpamPoolCidrsIpamPoolCidrsOutputReference;
}
export interface DataAwsVpcIpamPoolCidrsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool_cidrs#name DataAwsVpcIpamPoolCidrs#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool_cidrs#values DataAwsVpcIpamPoolCidrs#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcIpamPoolCidrsFilterToTerraform(struct?: DataAwsVpcIpamPoolCidrsFilter | cdktf.IResolvable): any;
export declare function dataAwsVpcIpamPoolCidrsFilterToHclTerraform(struct?: DataAwsVpcIpamPoolCidrsFilter | cdktf.IResolvable): any;
export declare class DataAwsVpcIpamPoolCidrsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsVpcIpamPoolCidrsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcIpamPoolCidrsFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsVpcIpamPoolCidrsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsVpcIpamPoolCidrsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsVpcIpamPoolCidrsFilterOutputReference;
}
export interface DataAwsVpcIpamPoolCidrsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool_cidrs#read DataAwsVpcIpamPoolCidrs#read}
    */
    readonly read?: string;
}
export declare function dataAwsVpcIpamPoolCidrsTimeoutsToTerraform(struct?: DataAwsVpcIpamPoolCidrsTimeouts | cdktf.IResolvable): any;
export declare function dataAwsVpcIpamPoolCidrsTimeoutsToHclTerraform(struct?: DataAwsVpcIpamPoolCidrsTimeouts | cdktf.IResolvable): any;
export declare class DataAwsVpcIpamPoolCidrsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsVpcIpamPoolCidrsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsVpcIpamPoolCidrsTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool_cidrs aws_vpc_ipam_pool_cidrs}
*/
export declare class DataAwsVpcIpamPoolCidrs extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_vpc_ipam_pool_cidrs";
    /**
    * Generates CDKTF code for importing a DataAwsVpcIpamPoolCidrs resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsVpcIpamPoolCidrs to import
    * @param importFromId The id of the existing DataAwsVpcIpamPoolCidrs that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool_cidrs#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsVpcIpamPoolCidrs to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/vpc_ipam_pool_cidrs aws_vpc_ipam_pool_cidrs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcIpamPoolCidrsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsVpcIpamPoolCidrsConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _ipamPoolCidrs;
    get ipamPoolCidrs(): DataAwsVpcIpamPoolCidrsIpamPoolCidrsList;
    private _ipamPoolId?;
    get ipamPoolId(): string;
    set ipamPoolId(value: string);
    get ipamPoolIdInput(): string | undefined;
    private _filter;
    get filter(): DataAwsVpcIpamPoolCidrsFilterList;
    putFilter(value: DataAwsVpcIpamPoolCidrsFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsVpcIpamPoolCidrsFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsVpcIpamPoolCidrsTimeoutsOutputReference;
    putTimeouts(value: DataAwsVpcIpamPoolCidrsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsVpcIpamPoolCidrsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
