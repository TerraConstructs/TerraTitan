/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsMemorydbParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_parameter_group#id DataAwsMemorydbParameterGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_parameter_group#name DataAwsMemorydbParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_parameter_group#tags DataAwsMemorydbParameterGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
}
export interface DataAwsMemorydbParameterGroupParameter {
}
export declare function dataAwsMemorydbParameterGroupParameterToTerraform(struct?: DataAwsMemorydbParameterGroupParameter): any;
export declare function dataAwsMemorydbParameterGroupParameterToHclTerraform(struct?: DataAwsMemorydbParameterGroupParameter): any;
export declare class DataAwsMemorydbParameterGroupParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsMemorydbParameterGroupParameter | undefined;
    set internalValue(value: DataAwsMemorydbParameterGroupParameter | undefined);
    get name(): string;
    get value(): string;
}
export declare class DataAwsMemorydbParameterGroupParameterList extends cdktf.ComplexList {
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
    get(index: number): DataAwsMemorydbParameterGroupParameterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_parameter_group aws_memorydb_parameter_group}
*/
export declare class DataAwsMemorydbParameterGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_memorydb_parameter_group";
    /**
    * Generates CDKTF code for importing a DataAwsMemorydbParameterGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsMemorydbParameterGroup to import
    * @param importFromId The id of the existing DataAwsMemorydbParameterGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_parameter_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsMemorydbParameterGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/memorydb_parameter_group aws_memorydb_parameter_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMemorydbParameterGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsMemorydbParameterGroupConfig);
    get arn(): string;
    get description(): string;
    get family(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _parameter;
    get parameter(): DataAwsMemorydbParameterGroupParameterList;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
