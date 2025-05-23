/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2ManagedPrefixListsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_lists#id DataAwsEc2ManagedPrefixLists#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_lists#tags DataAwsEc2ManagedPrefixLists#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_lists#filter DataAwsEc2ManagedPrefixLists#filter}
    */
    readonly filter?: DataAwsEc2ManagedPrefixListsFilter[] | cdktf.IResolvable;
}
export interface DataAwsEc2ManagedPrefixListsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_lists#name DataAwsEc2ManagedPrefixLists#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_lists#values DataAwsEc2ManagedPrefixLists#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2ManagedPrefixListsFilterToTerraform(struct?: DataAwsEc2ManagedPrefixListsFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2ManagedPrefixListsFilterToHclTerraform(struct?: DataAwsEc2ManagedPrefixListsFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2ManagedPrefixListsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2ManagedPrefixListsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2ManagedPrefixListsFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2ManagedPrefixListsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2ManagedPrefixListsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2ManagedPrefixListsFilterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_lists aws_ec2_managed_prefix_lists}
*/
export declare class DataAwsEc2ManagedPrefixLists extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_managed_prefix_lists";
    /**
    * Generates CDKTF code for importing a DataAwsEc2ManagedPrefixLists resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2ManagedPrefixLists to import
    * @param importFromId The id of the existing DataAwsEc2ManagedPrefixLists that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_lists#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2ManagedPrefixLists to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_lists aws_ec2_managed_prefix_lists} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2ManagedPrefixListsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2ManagedPrefixListsConfig);
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
    get filter(): DataAwsEc2ManagedPrefixListsFilterList;
    putFilter(value: DataAwsEc2ManagedPrefixListsFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2ManagedPrefixListsFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
