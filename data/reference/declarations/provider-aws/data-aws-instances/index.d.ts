/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsInstancesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instances#id DataAwsInstances#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instances#instance_state_names DataAwsInstances#instance_state_names}
    */
    readonly instanceStateNames?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instances#instance_tags DataAwsInstances#instance_tags}
    */
    readonly instanceTags?: {
        [key: string]: string;
    };
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instances#filter DataAwsInstances#filter}
    */
    readonly filter?: DataAwsInstancesFilter[] | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instances#timeouts DataAwsInstances#timeouts}
    */
    readonly timeouts?: DataAwsInstancesTimeouts;
}
export interface DataAwsInstancesFilter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instances#name DataAwsInstances#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instances#values DataAwsInstances#values}
    */
    readonly values: string[];
}
export declare function dataAwsInstancesFilterToTerraform(struct?: DataAwsInstancesFilter | cdktf.IResolvable): any;
export declare function dataAwsInstancesFilterToHclTerraform(struct?: DataAwsInstancesFilter | cdktf.IResolvable): any;
export declare class DataAwsInstancesFilterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsInstancesFilter | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsInstancesFilter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _values?;
    get values(): string[];
    set values(value: string[]);
    get valuesInput(): string[] | undefined;
}
export declare class DataAwsInstancesFilterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsInstancesFilter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsInstancesFilterOutputReference;
}
export interface DataAwsInstancesTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instances#read DataAwsInstances#read}
    */
    readonly read?: string;
}
export declare function dataAwsInstancesTimeoutsToTerraform(struct?: DataAwsInstancesTimeouts | cdktf.IResolvable): any;
export declare function dataAwsInstancesTimeoutsToHclTerraform(struct?: DataAwsInstancesTimeouts | cdktf.IResolvable): any;
export declare class DataAwsInstancesTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): DataAwsInstancesTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsInstancesTimeouts | cdktf.IResolvable | undefined);
    private _read?;
    get read(): string;
    set read(value: string);
    resetRead(): void;
    get readInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instances aws_instances}
*/
export declare class DataAwsInstances extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_instances";
    /**
    * Generates CDKTF code for importing a DataAwsInstances resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsInstances to import
    * @param importFromId The id of the existing DataAwsInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instances#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsInstances to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/instances aws_instances} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsInstancesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsInstancesConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ids(): string[];
    private _instanceStateNames?;
    get instanceStateNames(): string[];
    set instanceStateNames(value: string[]);
    resetInstanceStateNames(): void;
    get instanceStateNamesInput(): string[] | undefined;
    private _instanceTags?;
    get instanceTags(): {
        [key: string]: string;
    };
    set instanceTags(value: {
        [key: string]: string;
    });
    resetInstanceTags(): void;
    get instanceTagsInput(): {
        [key: string]: string;
    } | undefined;
    get ipv6Addresses(): string[];
    get privateIps(): string[];
    get publicIps(): string[];
    private _filter;
    get filter(): DataAwsInstancesFilterList;
    putFilter(value: DataAwsInstancesFilter[] | cdktf.IResolvable): void;
    resetFilter(): void;
    get filterInput(): cdktf.IResolvable | DataAwsInstancesFilter[] | undefined;
    private _timeouts;
    get timeouts(): DataAwsInstancesTimeoutsOutputReference;
    putTimeouts(value: DataAwsInstancesTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | DataAwsInstancesTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
