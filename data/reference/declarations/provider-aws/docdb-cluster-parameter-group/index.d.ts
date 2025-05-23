/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DocdbClusterParameterGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_parameter_group#description DocdbClusterParameterGroup#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_parameter_group#family DocdbClusterParameterGroup#family}
    */
    readonly family: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_parameter_group#id DocdbClusterParameterGroup#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_parameter_group#name DocdbClusterParameterGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_parameter_group#name_prefix DocdbClusterParameterGroup#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_parameter_group#tags DocdbClusterParameterGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_parameter_group#tags_all DocdbClusterParameterGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_parameter_group#parameter DocdbClusterParameterGroup#parameter}
    */
    readonly parameter?: DocdbClusterParameterGroupParameter[] | cdktf.IResolvable;
}
export interface DocdbClusterParameterGroupParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_parameter_group#apply_method DocdbClusterParameterGroup#apply_method}
    */
    readonly applyMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_parameter_group#name DocdbClusterParameterGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_parameter_group#value DocdbClusterParameterGroup#value}
    */
    readonly value: string;
}
export declare function docdbClusterParameterGroupParameterToTerraform(struct?: DocdbClusterParameterGroupParameter | cdktf.IResolvable): any;
export declare function docdbClusterParameterGroupParameterToHclTerraform(struct?: DocdbClusterParameterGroupParameter | cdktf.IResolvable): any;
export declare class DocdbClusterParameterGroupParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DocdbClusterParameterGroupParameter | cdktf.IResolvable | undefined;
    set internalValue(value: DocdbClusterParameterGroupParameter | cdktf.IResolvable | undefined);
    private _applyMethod?;
    get applyMethod(): string;
    set applyMethod(value: string);
    resetApplyMethod(): void;
    get applyMethodInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class DocdbClusterParameterGroupParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DocdbClusterParameterGroupParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DocdbClusterParameterGroupParameterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_parameter_group aws_docdb_cluster_parameter_group}
*/
export declare class DocdbClusterParameterGroup extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_docdb_cluster_parameter_group";
    /**
    * Generates CDKTF code for importing a DocdbClusterParameterGroup resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DocdbClusterParameterGroup to import
    * @param importFromId The id of the existing DocdbClusterParameterGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_parameter_group#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DocdbClusterParameterGroup to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/docdb_cluster_parameter_group aws_docdb_cluster_parameter_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DocdbClusterParameterGroupConfig
    */
    constructor(scope: Construct, id: string, config: DocdbClusterParameterGroupConfig);
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
    get parameter(): DocdbClusterParameterGroupParameterList;
    putParameter(value: DocdbClusterParameterGroupParameter[] | cdktf.IResolvable): void;
    resetParameter(): void;
    get parameterInput(): cdktf.IResolvable | DocdbClusterParameterGroupParameter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
