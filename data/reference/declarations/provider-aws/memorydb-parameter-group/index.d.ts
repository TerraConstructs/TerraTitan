/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface MemorydbParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_parameter_group#description MemorydbParameterGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_parameter_group#family MemorydbParameterGroup#family}
    */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_parameter_group#id MemorydbParameterGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_parameter_group#name MemorydbParameterGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_parameter_group#name_prefix MemorydbParameterGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_parameter_group#tags MemorydbParameterGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_parameter_group#tags_all MemorydbParameterGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_parameter_group#parameter MemorydbParameterGroup#parameter}
    */
    readonly parameter?: MemorydbParameterGroupParameter[] | cdktf.IResolvable;
}
export interface MemorydbParameterGroupParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_parameter_group#name MemorydbParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_parameter_group#value MemorydbParameterGroup#value}
    */
    readonly value: string;
}
export declare function memorydbParameterGroupParameterToTerraform(struct?: MemorydbParameterGroupParameter | cdktf.IResolvable): any;
export declare function memorydbParameterGroupParameterToHclTerraform(struct?: MemorydbParameterGroupParameter | cdktf.IResolvable): any;
export declare class MemorydbParameterGroupParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): MemorydbParameterGroupParameter | cdktf.IResolvable | undefined;
    set internalValue(value: MemorydbParameterGroupParameter | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class MemorydbParameterGroupParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: MemorydbParameterGroupParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): MemorydbParameterGroupParameterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_parameter_group aws_memorydb_parameter_group}
*/
export declare class MemorydbParameterGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_memorydb_parameter_group";
    /**
    * Generates CDKTF code for importing a MemorydbParameterGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the MemorydbParameterGroup to import
    * @param importFromId The id of the existing MemorydbParameterGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_parameter_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the MemorydbParameterGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/memorydb_parameter_group aws_memorydb_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MemorydbParameterGroupConfig
    */
    constructor(scope: Construct, id: string, config: MemorydbParameterGroupConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _family?;
    get family(): string;
    set family(value: string);
    get familyInput(): string | undefined;
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
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string | undefined;
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
    private _parameter;
    get parameter(): MemorydbParameterGroupParameterList;
    putParameter(value: MemorydbParameterGroupParameter[] | cdktf.IResolvable): void;
    resetParameter(): void;
    get parameterInput(): cdktf.IResolvable | MemorydbParameterGroupParameter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
