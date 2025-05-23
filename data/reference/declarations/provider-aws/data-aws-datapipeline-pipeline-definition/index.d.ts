/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDatapipelinePipelineDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/datapipeline_pipeline_definition#id DataAwsDatapipelinePipelineDefinition#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/datapipeline_pipeline_definition#pipeline_id DataAwsDatapipelinePipelineDefinition#pipeline_id}
    */
    readonly pipelineId: string;
    /**
    * parameter_value block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/datapipeline_pipeline_definition#parameter_value DataAwsDatapipelinePipelineDefinition#parameter_value}
    */
    readonly parameterValue?: DataAwsDatapipelinePipelineDefinitionParameterValue[] | cdktf.IResolvable;
}
export interface DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute {
}
export declare function dataAwsDatapipelinePipelineDefinitionParameterObjectAttributeToTerraform(struct?: DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute): any;
export declare function dataAwsDatapipelinePipelineDefinitionParameterObjectAttributeToHclTerraform(struct?: DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute): any;
export declare class DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute | undefined;
    set internalValue(value: DataAwsDatapipelinePipelineDefinitionParameterObjectAttribute | undefined);
    get key(): string;
    get stringValue(): string;
}
export declare class DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeOutputReference;
}
export interface DataAwsDatapipelinePipelineDefinitionParameterObject {
}
export declare function dataAwsDatapipelinePipelineDefinitionParameterObjectToTerraform(struct?: DataAwsDatapipelinePipelineDefinitionParameterObject): any;
export declare function dataAwsDatapipelinePipelineDefinitionParameterObjectToHclTerraform(struct?: DataAwsDatapipelinePipelineDefinitionParameterObject): any;
export declare class DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDatapipelinePipelineDefinitionParameterObject | undefined;
    set internalValue(value: DataAwsDatapipelinePipelineDefinitionParameterObject | undefined);
    private _attribute;
    get attribute(): DataAwsDatapipelinePipelineDefinitionParameterObjectAttributeList;
    get id(): string;
}
export declare class DataAwsDatapipelinePipelineDefinitionParameterObjectList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDatapipelinePipelineDefinitionParameterObjectOutputReference;
}
export interface DataAwsDatapipelinePipelineDefinitionPipelineObjectField {
}
export declare function dataAwsDatapipelinePipelineDefinitionPipelineObjectFieldToTerraform(struct?: DataAwsDatapipelinePipelineDefinitionPipelineObjectField): any;
export declare function dataAwsDatapipelinePipelineDefinitionPipelineObjectFieldToHclTerraform(struct?: DataAwsDatapipelinePipelineDefinitionPipelineObjectField): any;
export declare class DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDatapipelinePipelineDefinitionPipelineObjectField | undefined;
    set internalValue(value: DataAwsDatapipelinePipelineDefinitionPipelineObjectField | undefined);
    get key(): string;
    get refValue(): string;
    get stringValue(): string;
}
export declare class DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldOutputReference;
}
export interface DataAwsDatapipelinePipelineDefinitionPipelineObject {
}
export declare function dataAwsDatapipelinePipelineDefinitionPipelineObjectToTerraform(struct?: DataAwsDatapipelinePipelineDefinitionPipelineObject): any;
export declare function dataAwsDatapipelinePipelineDefinitionPipelineObjectToHclTerraform(struct?: DataAwsDatapipelinePipelineDefinitionPipelineObject): any;
export declare class DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDatapipelinePipelineDefinitionPipelineObject | undefined;
    set internalValue(value: DataAwsDatapipelinePipelineDefinitionPipelineObject | undefined);
    private _field;
    get field(): DataAwsDatapipelinePipelineDefinitionPipelineObjectFieldList;
    get id(): string;
    get name(): string;
}
export declare class DataAwsDatapipelinePipelineDefinitionPipelineObjectList extends cdktf.ComplexList {
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
    get(index: number): DataAwsDatapipelinePipelineDefinitionPipelineObjectOutputReference;
}
export interface DataAwsDatapipelinePipelineDefinitionParameterValue {
}
export declare function dataAwsDatapipelinePipelineDefinitionParameterValueToTerraform(struct?: DataAwsDatapipelinePipelineDefinitionParameterValue | cdktf.IResolvable): any;
export declare function dataAwsDatapipelinePipelineDefinitionParameterValueToHclTerraform(struct?: DataAwsDatapipelinePipelineDefinitionParameterValue | cdktf.IResolvable): any;
export declare class DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsDatapipelinePipelineDefinitionParameterValue | cdktf.IResolvable | undefined;
    set internalValue(value: DataAwsDatapipelinePipelineDefinitionParameterValue | cdktf.IResolvable | undefined);
    get id(): string;
    get stringValue(): string;
}
export declare class DataAwsDatapipelinePipelineDefinitionParameterValueList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: DataAwsDatapipelinePipelineDefinitionParameterValue[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsDatapipelinePipelineDefinitionParameterValueOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition}
*/
export declare class DataAwsDatapipelinePipelineDefinition extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_datapipeline_pipeline_definition";
    /**
    * Generates CDKTF code for importing a DataAwsDatapipelinePipelineDefinition resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDatapipelinePipelineDefinition to import
    * @param importFromId The id of the existing DataAwsDatapipelinePipelineDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/datapipeline_pipeline_definition#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDatapipelinePipelineDefinition to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/datapipeline_pipeline_definition aws_datapipeline_pipeline_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDatapipelinePipelineDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDatapipelinePipelineDefinitionConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _parameterObject;
    get parameterObject(): DataAwsDatapipelinePipelineDefinitionParameterObjectList;
    private _pipelineId?;
    get pipelineId(): string;
    set pipelineId(value: string);
    get pipelineIdInput(): string | undefined;
    private _pipelineObject;
    get pipelineObject(): DataAwsDatapipelinePipelineDefinitionPipelineObjectList;
    private _parameterValue;
    get parameterValue(): DataAwsDatapipelinePipelineDefinitionParameterValueList;
    putParameterValue(value: DataAwsDatapipelinePipelineDefinitionParameterValue[] | cdktf.IResolvable): void;
    resetParameterValue(): void;
    get parameterValueInput(): cdktf.IResolvable | DataAwsDatapipelinePipelineDefinitionParameterValue[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
