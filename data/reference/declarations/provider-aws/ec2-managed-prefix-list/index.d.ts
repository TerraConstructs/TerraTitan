/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Ec2ManagedPrefixListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list#address_family Ec2ManagedPrefixList#address_family}
    */
    readonly addressFamily: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list#id Ec2ManagedPrefixList#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list#max_entries Ec2ManagedPrefixList#max_entries}
    */
    readonly maxEntries: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list#name Ec2ManagedPrefixList#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list#tags Ec2ManagedPrefixList#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list#tags_all Ec2ManagedPrefixList#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * entry block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list#entry Ec2ManagedPrefixList#entry}
    */
    readonly entry?: Ec2ManagedPrefixListEntry[] | cdktf.IResolvable;
}
export interface Ec2ManagedPrefixListEntry {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list#cidr Ec2ManagedPrefixList#cidr}
    */
    readonly cidr: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list#description Ec2ManagedPrefixList#description}
    */
    readonly description?: string;
}
export declare function ec2ManagedPrefixListEntryToTerraform(struct?: Ec2ManagedPrefixListEntry | cdktf.IResolvable): any;
export declare function ec2ManagedPrefixListEntryToHclTerraform(struct?: Ec2ManagedPrefixListEntry | cdktf.IResolvable): any;
export declare class Ec2ManagedPrefixListEntryOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Ec2ManagedPrefixListEntry | cdktf.IResolvable | undefined;
    set internalValue(value: Ec2ManagedPrefixListEntry | cdktf.IResolvable | undefined);
    private _cidr?;
    get cidr(): string;
    set cidr(value: string);
    get cidrInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
}
export declare class Ec2ManagedPrefixListEntryList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Ec2ManagedPrefixListEntry[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Ec2ManagedPrefixListEntryOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list aws_ec2_managed_prefix_list}
*/
export declare class Ec2ManagedPrefixList extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_ec2_managed_prefix_list";
    /**
    * Generates CDKTF code for importing a Ec2ManagedPrefixList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Ec2ManagedPrefixList to import
    * @param importFromId The id of the existing Ec2ManagedPrefixList that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Ec2ManagedPrefixList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/ec2_managed_prefix_list aws_ec2_managed_prefix_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2ManagedPrefixListConfig
    */
    constructor(scope: Construct, id: string, config: Ec2ManagedPrefixListConfig);
    private _addressFamily?;
    get addressFamily(): string;
    set addressFamily(value: string);
    get addressFamilyInput(): string | undefined;
    get arn(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _maxEntries?;
    get maxEntries(): number;
    set maxEntries(value: number);
    get maxEntriesInput(): number | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    get version(): number;
    private _entry;
    get entry(): Ec2ManagedPrefixListEntryList;
    putEntry(value: Ec2ManagedPrefixListEntry[] | cdktf.IResolvable): void;
    resetEntry(): void;
    get entryInput(): cdktf.IResolvable | Ec2ManagedPrefixListEntry[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
