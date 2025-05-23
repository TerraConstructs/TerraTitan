/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsGlueScriptConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script#id DataAwsGlueScript#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script#language DataAwsGlueScript#language}
    */
    readonly language?: string;
    /**
    * dag_edge block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script#dag_edge DataAwsGlueScript#dag_edge}
    */
    readonly dagEdge: DataAwsGlueScriptDagEdge[] | cdktf.IResolvable;
    /**
    * dag_node block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script#dag_node DataAwsGlueScript#dag_node}
    */
    readonly dagNode: DataAwsGlueScriptDagNode[] | cdktf.IResolvable;
}
export interface DataAwsGlueScriptDagEdge {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script#source DataAwsGlueScript#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script#target DataAwsGlueScript#target}
    */
    readonly target: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script#target_parameter DataAwsGlueScript#target_parameter}
    */
    readonly targetParameter?: string;
}
export declare function dataAwsGlueScriptDagEdgeToTerraform(struct?: DataAwsGlueScriptDagEdge | cdktf.IResolvable): any;
export declare function dataAwsGlueScriptDagEdgeToHclTerraform(struct?: DataAwsGlueScriptDagEdge | cdktf.IResolvable): any;
export declare class DataAwsGlueScriptDagEdgeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGlueScriptDagEdge | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsGlueScriptDagEdge | cdktf.IResolvable | undefined);
    private _source?;
    get source(): string;
    set source(value: string);
    get sourceInput(): string | undefined;
    private _target?;
    get target(): string;
    set target(value: string);
    get targetInput(): string | undefined;
    private _targetParameter?;
    get targetParameter(): string;
    set targetParameter(value: string);
    resetTargetParameter(): void;
    get targetParameterInput(): string | undefined;
}
export declare class DataAwsGlueScriptDagEdgeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsGlueScriptDagEdge[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsGlueScriptDagEdgeOutputReference;
}
export interface DataAwsGlueScriptDagNodeArgs {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script#name DataAwsGlueScript#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script#param DataAwsGlueScript#param}
    */
    readonly param?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script#value DataAwsGlueScript#value}
    */
    readonly value: string;
}
export declare function dataAwsGlueScriptDagNodeArgsToTerraform(struct?: DataAwsGlueScriptDagNodeArgs | cdktf.IResolvable): any;
export declare function dataAwsGlueScriptDagNodeArgsToHclTerraform(struct?: DataAwsGlueScriptDagNodeArgs | cdktf.IResolvable): any;
export declare class DataAwsGlueScriptDagNodeArgsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGlueScriptDagNodeArgs | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsGlueScriptDagNodeArgs | cdktf.IResolvable | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _param?;
    get param(): boolean | cdktf.IResolvable;
    set param(value: boolean | cdktf.IResolvable);
    resetParam(): void;
    get paramInput(): boolean | cdktf.IResolvable | undefined;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string | undefined;
}
export declare class DataAwsGlueScriptDagNodeArgsList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsGlueScriptDagNodeArgs[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsGlueScriptDagNodeArgsOutputReference;
}
export interface DataAwsGlueScriptDagNode {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script#id DataAwsGlueScript#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script#line_number DataAwsGlueScript#line_number}
    */
    readonly lineNumber?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script#node_type DataAwsGlueScript#node_type}
    */
    readonly nodeType: string;
    /**
    * args block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script#args DataAwsGlueScript#args}
    */
    readonly args: DataAwsGlueScriptDagNodeArgs[] | cdktf.IResolvable;
}
export declare function dataAwsGlueScriptDagNodeToTerraform(struct?: DataAwsGlueScriptDagNode | cdktf.IResolvable): any;
export declare function dataAwsGlueScriptDagNodeToHclTerraform(struct?: DataAwsGlueScriptDagNode | cdktf.IResolvable): any;
export declare class DataAwsGlueScriptDagNodeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsGlueScriptDagNode | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsGlueScriptDagNode | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _lineNumber?;
    get lineNumber(): number;
    set lineNumber(value: number);
    resetLineNumber(): void;
    get lineNumberInput(): number | undefined;
    private _nodeType?;
    get nodeType(): string;
    set nodeType(value: string);
    get nodeTypeInput(): string | undefined;
    private _args;
    get args(): DataAwsGlueScriptDagNodeArgsList;
    putArgs(value: DataAwsGlueScriptDagNodeArgs[] | cdktf.IResolvable): void;
    get argsInput(): cdktf.IResolvable | DataAwsGlueScriptDagNodeArgs[] | undefined;
}
export declare class DataAwsGlueScriptDagNodeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsGlueScriptDagNode[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsGlueScriptDagNodeOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script aws_glue_script}
*/
export declare class DataAwsGlueScript extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_glue_script";
    /**
    * Generates CDKTF code for importing a DataAwsGlueScript resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsGlueScript to import
    * @param importFromId The id of the existing DataAwsGlueScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsGlueScript to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/glue_script aws_glue_script} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsGlueScriptConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsGlueScriptConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _language?;
    get language(): string;
    set language(value: string);
    resetLanguage(): void;
    get languageInput(): string | undefined;
    get pythonScript(): string;
    get scalaCode(): string;
    private _dagEdge;
    get dagEdge(): DataAwsGlueScriptDagEdgeList;
    putDagEdge(value: DataAwsGlueScriptDagEdge[] | cdktf.IResolvable): void;
    get dagEdgeInput(): cdktf.IResolvable | DataAwsGlueScriptDagEdge[] | undefined;
    private _dagNode;
    get dagNode(): DataAwsGlueScriptDagNodeList;
    putDagNode(value: DataAwsGlueScriptDagNode[] | cdktf.IResolvable): void;
    get dagNodeInput(): cdktf.IResolvable | DataAwsGlueScriptDagNode[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
