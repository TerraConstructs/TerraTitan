/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSecurityGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_groups#id DataAwsSecurityGroups#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_groups#tags DataAwsSecurityGroups#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_groups#filter DataAwsSecurityGroups#filter}
    */
    readonly filter?: DataAwsSecurityGroupsFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_groups#timeouts DataAwsSecurityGroups#timeouts}
    */
    readonly timeouts?: DataAwsSecurityGroupsTimeouts;
}
export interface DataAwsSecurityGroupsFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_groups#name DataAwsSecurityGroups#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_groups#values DataAwsSecurityGroups#values}
    */
    readonly values: string[];
}
export declare function dataAwsSecurityGroupsFilterToTerraform(struct?: DataAwsSecurityGroupsFilter | cdktf.IResolvable): any;
export declare function dataAwsSecurityGroupsFilterToHclTerraform(struct?: DataAwsSecurityGroupsFilter | cdktf.IResolvable): any;
export declare class DataAwsSecurityGroupsFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSecurityGroupsFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsSecurityGroupsFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsSecurityGroupsFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsSecurityGroupsFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsSecurityGroupsFilterOutputReference;
}
export interface DataAwsSecurityGroupsTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_groups#read DataAwsSecurityGroups#read}
    */
    readonly read?: string;
}
export declare function dataAwsSecurityGroupsTimeoutsToTerraform(struct?: DataAwsSecurityGroupsTimeouts | cdktf.IResolvable): any;
export declare function dataAwsSecurityGroupsTimeoutsToHclTerraform(struct?: DataAwsSecurityGroupsTimeouts | cdktf.IResolvable): any;
export declare class DataAwsSecurityGroupsTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsSecurityGroupsTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsSecurityGroupsTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_groups aws_security_groups}
*/
export declare class DataAwsSecurityGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_security_groups";
    /**
    * Generates CDKTF code for importing a DataAwsSecurityGroups resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSecurityGroups to import
    * @param importFromId The id of the existing DataAwsSecurityGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_groups#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSecurityGroups to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/security_groups aws_security_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSecurityGroupsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsSecurityGroupsConfig);
    get arns(): string[];
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
    get vpcIds(): string[];
    private _filter;
    get filter(): DataAwsSecurityGroupsFilterList;
    putFilter(value: DataAwsSecurityGroupsFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsSecurityGroupsFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsSecurityGroupsTimeoutsOutputReference;
    putTimeouts(value: DataAwsSecurityGroupsTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsSecurityGroupsTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
