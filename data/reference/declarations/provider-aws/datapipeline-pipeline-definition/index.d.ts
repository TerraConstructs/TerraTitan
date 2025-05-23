/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DatapipelinePipelineDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#pipeline_id DatapipelinePipelineDefinition#pipeline_id}
    */
    readonly pipelineId: string;
    /**
    * parameter_object block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#parameter_object DatapipelinePipelineDefinition#parameter_object}
    */
    readonly parameterObject?: DatapipelinePipelineDefinitionParameterObject[] | cdktf.IResolvable;
    /**
    * parameter_value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#parameter_value DatapipelinePipelineDefinition#parameter_value}
    */
    readonly parameterValue?: DatapipelinePipelineDefinitionParameterValue[] | cdktf.IResolvable;
    /**
    * pipeline_object block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#pipeline_object DatapipelinePipelineDefinition#pipeline_object}
    */
    readonly pipelineObject: DatapipelinePipelineDefinitionPipelineObject[] | cdktf.IResolvable;
}
export interface DatapipelinePipelineDefinitionParameterObjectAttribute {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}
    */
    readonly stringValue: string;
}
export declare function datapipelinePipelineDefinitionParameterObjectAttributeToTerraform(struct?: DatapipelinePipelineDefinitionParameterObjectAttribute | cdktf.IResolvable): any;
export declare function datapipelinePipelineDefinitionParameterObjectAttributeToHclTerraform(struct?: DatapipelinePipelineDefinitionParameterObjectAttribute | cdktf.IResolvable): any;
export declare class DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatapipelinePipelineDefinitionParameterObjectAttribute | cdktf.IResolvable | undefined;
    set internalValue(value: DatapipelinePipelineDefinitionParameterObjectAttribute | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _stringValue?;
    get stringValue(): string;
    set stringValue(value: string);
    get stringValueInput(): string | undefined;
}
export declare class DatapipelinePipelineDefinitionParameterObjectAttributeList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DatapipelinePipelineDefinitionParameterObjectAttribute[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DatapipelinePipelineDefinitionParameterObjectAttributeOutputReference;
}
export interface DatapipelinePipelineDefinitionParameterObject {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * attribute block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#attribute DatapipelinePipelineDefinition#attribute}
    */
    readonly attribute?: DatapipelinePipelineDefinitionParameterObjectAttribute[] | cdktf.IResolvable;
}
export declare function datapipelinePipelineDefinitionParameterObjectToTerraform(struct?: DatapipelinePipelineDefinitionParameterObject | cdktf.IResolvable): any;
export declare function datapipelinePipelineDefinitionParameterObjectToHclTerraform(struct?: DatapipelinePipelineDefinitionParameterObject | cdktf.IResolvable): any;
export declare class DatapipelinePipelineDefinitionParameterObjectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatapipelinePipelineDefinitionParameterObject | cdktf.IResolvable | undefined;
    set internalValue(value: DatapipelinePipelineDefinitionParameterObject | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _attribute;
    get attribute(): DatapipelinePipelineDefinitionParameterObjectAttributeList;
    putAttribute(value: DatapipelinePipelineDefinitionParameterObjectAttribute[] | cdktf.IResolvable): void;
    resetAttribute(): void;
    get attributeInput(): cdktf.IResolvable | DatapipelinePipelineDefinitionParameterObjectAttribute[] | undefined;
}
export declare class DatapipelinePipelineDefinitionParameterObjectList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DatapipelinePipelineDefinitionParameterObject[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DatapipelinePipelineDefinitionParameterObjectOutputReference;
}
export interface DatapipelinePipelineDefinitionParameterValue {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}
    */
    readonly stringValue: string;
}
export declare function datapipelinePipelineDefinitionParameterValueToTerraform(struct?: DatapipelinePipelineDefinitionParameterValue | cdktf.IResolvable): any;
export declare function datapipelinePipelineDefinitionParameterValueToHclTerraform(struct?: DatapipelinePipelineDefinitionParameterValue | cdktf.IResolvable): any;
export declare class DatapipelinePipelineDefinitionParameterValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatapipelinePipelineDefinitionParameterValue | cdktf.IResolvable | undefined;
    set internalValue(value: DatapipelinePipelineDefinitionParameterValue | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _stringValue?;
    get stringValue(): string;
    set stringValue(value: string);
    get stringValueInput(): string | undefined;
}
export declare class DatapipelinePipelineDefinitionParameterValueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DatapipelinePipelineDefinitionParameterValue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DatapipelinePipelineDefinitionParameterValueOutputReference;
}
export interface DatapipelinePipelineDefinitionPipelineObjectField {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#key DatapipelinePipelineDefinition#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#ref_value DatapipelinePipelineDefinition#ref_value}
    */
    readonly refValue?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#string_value DatapipelinePipelineDefinition#string_value}
    */
    readonly stringValue?: string;
}
export declare function datapipelinePipelineDefinitionPipelineObjectFieldToTerraform(struct?: DatapipelinePipelineDefinitionPipelineObjectField | cdktf.IResolvable): any;
export declare function datapipelinePipelineDefinitionPipelineObjectFieldToHclTerraform(struct?: DatapipelinePipelineDefinitionPipelineObjectField | cdktf.IResolvable): any;
export declare class DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatapipelinePipelineDefinitionPipelineObjectField | cdktf.IResolvable | undefined;
    set internalValue(value: DatapipelinePipelineDefinitionPipelineObjectField | cdktf.IResolvable | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _refValue?;
    get refValue(): string;
    set refValue(value: string);
    resetRefValue(): void;
    get refValueInput(): string | undefined;
    private _stringValue?;
    get stringValue(): string;
    set stringValue(value: string);
    resetStringValue(): void;
    get stringValueInput(): string | undefined;
}
export declare class DatapipelinePipelineDefinitionPipelineObjectFieldList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DatapipelinePipelineDefinitionPipelineObjectField[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DatapipelinePipelineDefinitionPipelineObjectFieldOutputReference;
}
export interface DatapipelinePipelineDefinitionPipelineObject {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#id DatapipelinePipelineDefinition#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#name DatapipelinePipelineDefinition#name}
    */
    readonly name: string;
    /**
    * field block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#field DatapipelinePipelineDefinition#field}
    */
    readonly field?: DatapipelinePipelineDefinitionPipelineObjectField[] | cdktf.IResolvable;
}
export declare function datapipelinePipelineDefinitionPipelineObjectToTerraform(struct?: DatapipelinePipelineDefinitionPipelineObject | cdktf.IResolvable): any;
export declare function datapipelinePipelineDefinitionPipelineObjectToHclTerraform(struct?: DatapipelinePipelineDefinitionPipelineObject | cdktf.IResolvable): any;
export declare class DatapipelinePipelineDefinitionPipelineObjectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DatapipelinePipelineDefinitionPipelineObject | cdktf.IResolvable | undefined;
    set internalValue(value: DatapipelinePipelineDefinitionPipelineObject | cdktf.IResolvable | undefined);
    private _id?;
    get id(): string;
    set id(value: string);
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _field;
    get field(): DatapipelinePipelineDefinitionPipelineObjectFieldList;
    putField(value: DatapipelinePipelineDefinitionPipelineObjectField[] | cdktf.IResolvable): void;
    resetField(): void;
    get fieldInput(): cdktf.IResolvable | DatapipelinePipelineDefinitionPipelineObjectField[] | undefined;
}
export declare class DatapipelinePipelineDefinitionPipelineObjectList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DatapipelinePipelineDefinitionPipelineObject[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DatapipelinePipelineDefinitionPipelineObjectOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition}
*/
export declare class DatapipelinePipelineDefinition extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_datapipeline_pipeline_definition";
    /**
    * Generates CDKTF code for importing a DatapipelinePipelineDefinition resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DatapipelinePipelineDefinition to import
    * @param importFromId The id of the existing DatapipelinePipelineDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DatapipelinePipelineDefinition to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DatapipelinePipelineDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: DatapipelinePipelineDefinitionConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _pipelineId?;
    get pipelineId(): string;
    set pipelineId(value: string);
    get pipelineIdInput(): string | undefined;
    private _parameterObject;
    get parameterObject(): DatapipelinePipelineDefinitionParameterObjectList;
    putParameterObject(value: DatapipelinePipelineDefinitionParameterObject[] | cdktf.IResolvable): void;
    resetParameterObject(): void;
    get parameterObjectInput(): cdktf.IResolvable | DatapipelinePipelineDefinitionParameterObject[] | undefined;
    private _parameterValue;
    get parameterValue(): DatapipelinePipelineDefinitionParameterValueList;
    putParameterValue(value: DatapipelinePipelineDefinitionParameterValue[] | cdktf.IResolvable): void;
    resetParameterValue(): void;
    get parameterValueInput(): cdktf.IResolvable | DatapipelinePipelineDefinitionParameterValue[] | undefined;
    private _pipelineObject;
    get pipelineObject(): DatapipelinePipelineDefinitionPipelineObjectList;
    putPipelineObject(value: DatapipelinePipelineDefinitionPipelineObject[] | cdktf.IResolvable): void;
    get pipelineObjectInput(): cdktf.IResolvable | DatapipelinePipelineDefinitionPipelineObject[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
