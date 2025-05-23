/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsPrefixListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/prefix_list#id DataAwsPrefixList#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/prefix_list#name DataAwsPrefixList#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/prefix_list#prefix_list_id DataAwsPrefixList#prefix_list_id}
    */
    readonly prefixListId?: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/prefix_list#filter DataAwsPrefixList#filter}
    */
    readonly filter?: DataAwsPrefixListFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/prefix_list#timeouts DataAwsPrefixList#timeouts}
    */
    readonly timeouts?: DataAwsPrefixListTimeouts;
}
export interface DataAwsPrefixListFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/prefix_list#name DataAwsPrefixList#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/prefix_list#values DataAwsPrefixList#values}
    */
    readonly values: string[];
}
export declare function dataAwsPrefixListFilterToTerraform(struct?: DataAwsPrefixListFilter | cdktf.IResolvable): any;
export declare function dataAwsPrefixListFilterToHclTerraform(struct?: DataAwsPrefixListFilter | cdktf.IResolvable): any;
export declare class DataAwsPrefixListFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsPrefixListFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsPrefixListFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsPrefixListFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsPrefixListFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsPrefixListFilterOutputReference;
}
export interface DataAwsPrefixListTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/prefix_list#read DataAwsPrefixList#read}
    */
    readonly read?: string;
}
export declare function dataAwsPrefixListTimeoutsToTerraform(struct?: DataAwsPrefixListTimeouts | cdktf.IResolvable): any;
export declare function dataAwsPrefixListTimeoutsToHclTerraform(struct?: DataAwsPrefixListTimeouts | cdktf.IResolvable): any;
export declare class DataAwsPrefixListTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsPrefixListTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsPrefixListTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/prefix_list aws_prefix_list}
*/
export declare class DataAwsPrefixList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_prefix_list";
    /**
    * Generates CDKTF code for importing a DataAwsPrefixList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsPrefixList to import
    * @param importFromId The id of the existing DataAwsPrefixList that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/prefix_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsPrefixList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/prefix_list aws_prefix_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsPrefixListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsPrefixListConfig);
    get cidrBlocks(): string[];
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    private _prefixListId?;
    get prefixListId(): string;
    set prefixListId(value: string);
    resetPrefixListId(): void;
    get prefixListIdInput(): string | undefined;
    private _filter;
    get filter(): DataAwsPrefixListFilterList;
    putFilter(value: DataAwsPrefixListFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsPrefixListFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsPrefixListTimeoutsOutputReference;
    putTimeouts(value: DataAwsPrefixListTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsPrefixListTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
