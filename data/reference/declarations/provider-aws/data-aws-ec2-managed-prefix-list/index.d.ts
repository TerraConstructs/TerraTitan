/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEc2ManagedPrefixListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_list#id DataAwsEc2ManagedPrefixList#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_list#name DataAwsEc2ManagedPrefixList#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_list#tags DataAwsEc2ManagedPrefixList#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_list#filter DataAwsEc2ManagedPrefixList#filter}
    */
    readonly filter?: DataAwsEc2ManagedPrefixListFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_list#timeouts DataAwsEc2ManagedPrefixList#timeouts}
    */
    readonly timeouts?: DataAwsEc2ManagedPrefixListTimeouts;
}
export interface DataAwsEc2ManagedPrefixListEntries {
}
export declare function dataAwsEc2ManagedPrefixListEntriesToTerraform(struct?: DataAwsEc2ManagedPrefixListEntries): any;
export declare function dataAwsEc2ManagedPrefixListEntriesToHclTerraform(struct?: DataAwsEc2ManagedPrefixListEntries): any;
export declare class DataAwsEc2ManagedPrefixListEntriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2ManagedPrefixListEntries | undefined;
    set internalValue(value: DataAwsEc2ManagedPrefixListEntries | undefined);
    get cidr(): string;
    get description(): string;
}
export declare class DataAwsEc2ManagedPrefixListEntriesList extends cdktf.ComplexList {
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
    get(index: number): DataAwsEc2ManagedPrefixListEntriesOutputReference;
}
export interface DataAwsEc2ManagedPrefixListFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_list#name DataAwsEc2ManagedPrefixList#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_list#values DataAwsEc2ManagedPrefixList#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2ManagedPrefixListFilterToTerraform(struct?: DataAwsEc2ManagedPrefixListFilter | cdktf.IResolvable): any;
export declare function dataAwsEc2ManagedPrefixListFilterToHclTerraform(struct?: DataAwsEc2ManagedPrefixListFilter | cdktf.IResolvable): any;
export declare class DataAwsEc2ManagedPrefixListFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsEc2ManagedPrefixListFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2ManagedPrefixListFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsEc2ManagedPrefixListFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsEc2ManagedPrefixListFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsEc2ManagedPrefixListFilterOutputReference;
}
export interface DataAwsEc2ManagedPrefixListTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_list#read DataAwsEc2ManagedPrefixList#read}
    */
    readonly read?: string;
}
export declare function dataAwsEc2ManagedPrefixListTimeoutsToTerraform(struct?: DataAwsEc2ManagedPrefixListTimeouts | cdktf.IResolvable): any;
export declare function dataAwsEc2ManagedPrefixListTimeoutsToHclTerraform(struct?: DataAwsEc2ManagedPrefixListTimeouts | cdktf.IResolvable): any;
export declare class DataAwsEc2ManagedPrefixListTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsEc2ManagedPrefixListTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsEc2ManagedPrefixListTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_list aws_ec2_managed_prefix_list}
*/
export declare class DataAwsEc2ManagedPrefixList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ec2_managed_prefix_list";
    /**
    * Generates CDKTF code for importing a DataAwsEc2ManagedPrefixList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsEc2ManagedPrefixList to import
    * @param importFromId The id of the existing DataAwsEc2ManagedPrefixList that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsEc2ManagedPrefixList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ec2_managed_prefix_list aws_ec2_managed_prefix_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2ManagedPrefixListConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2ManagedPrefixListConfig);
    get addressFamily(): string;
    get arn(): string;
    private _entries;
    get entries(): DataAwsEc2ManagedPrefixListEntriesList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get maxEntries(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string | undefined;
    get ownerId(): string;
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
    get version(): number;
    private _filter;
    get filter(): DataAwsEc2ManagedPrefixListFilterList;
    putFilter(value: DataAwsEc2ManagedPrefixListFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsEc2ManagedPrefixListFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsEc2ManagedPrefixListTimeoutsOutputReference;
    putTimeouts(value: DataAwsEc2ManagedPrefixListTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsEc2ManagedPrefixListTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
