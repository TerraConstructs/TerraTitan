/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAmiIdsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami_ids#executable_users DataAwsAmiIds#executable_users}
    */
    readonly executableUsers?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami_ids#id DataAwsAmiIds#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami_ids#include_deprecated DataAwsAmiIds#include_deprecated}
    */
    readonly includeDeprecated?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami_ids#name_regex DataAwsAmiIds#name_regex}
    */
    readonly nameRegex?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami_ids#owners DataAwsAmiIds#owners}
    */
    readonly owners: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami_ids#sort_ascending DataAwsAmiIds#sort_ascending}
    */
    readonly sortAscending?: boolean | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami_ids#filter DataAwsAmiIds#filter}
    */
    readonly filter?: DataAwsAmiIdsFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami_ids#timeouts DataAwsAmiIds#timeouts}
    */
    readonly timeouts?: DataAwsAmiIdsTimeouts;
}
export interface DataAwsAmiIdsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami_ids#name DataAwsAmiIds#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami_ids#values DataAwsAmiIds#values}
    */
    readonly values: string[];
}
export declare function dataAwsAmiIdsFilterToTerraform(struct?: DataAwsAmiIdsFilter | cdktf.IResolvable): any;
export declare function dataAwsAmiIdsFilterToHclTerraform(struct?: DataAwsAmiIdsFilter | cdktf.IResolvable): any;
export declare class DataAwsAmiIdsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsAmiIdsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsAmiIdsFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsAmiIdsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsAmiIdsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsAmiIdsFilterOutputReference;
}
export interface DataAwsAmiIdsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami_ids#read DataAwsAmiIds#read}
    */
    readonly read?: string;
}
export declare function dataAwsAmiIdsTimeoutsToTerraform(struct?: DataAwsAmiIdsTimeouts | cdktf.IResolvable): any;
export declare function dataAwsAmiIdsTimeoutsToHclTerraform(struct?: DataAwsAmiIdsTimeouts | cdktf.IResolvable): any;
export declare class DataAwsAmiIdsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsAmiIdsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsAmiIdsTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami_ids aws_ami_ids}
*/
export declare class DataAwsAmiIds extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_ami_ids";
    /**
    * Generates CDKTF code for importing a DataAwsAmiIds resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsAmiIds to import
    * @param importFromId The id of the existing DataAwsAmiIds that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami_ids#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsAmiIds to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/ami_ids aws_ami_ids} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAmiIdsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsAmiIdsConfig);
    private _executableUsers?;
    get executableUsers(): string[];
    set executableUsers(value: string[]);
    resetExecutableUsers(): void;
    get executableUsersInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ids(): string[];
    private _includeDeprecated?;
    get includeDeprecated(): boolean | cdktf.IResolvable;
    set includeDeprecated(value: boolean | cdktf.IResolvable);
    resetIncludeDeprecated(): void;
    get includeDeprecatedInput(): boolean | cdktf.IResolvable | undefined;
    private _nameRegex?;
    get nameRegex(): string;
    set nameRegex(value: string);
    resetNameRegex(): void;
    get nameRegexInput(): string | undefined;
    private _owners?;
    get owners(): string[];
    set owners(value: string[]);
    get ownersInput(): string[] | undefined;
    private _sortAscending?;
    get sortAscending(): boolean | cdktf.IResolvable;
    set sortAscending(value: boolean | cdktf.IResolvable);
    resetSortAscending(): void;
    get sortAscendingInput(): boolean | cdktf.IResolvable | undefined;
    private _filter;
    get filter(): DataAwsAmiIdsFilterList;
    putFilter(value: DataAwsAmiIdsFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsAmiIdsFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsAmiIdsTimeoutsOutputReference;
    putTimeouts(value: DataAwsAmiIdsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsAmiIdsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
