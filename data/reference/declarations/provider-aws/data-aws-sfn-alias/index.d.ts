/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsSfnAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sfn_alias#description DataAwsSfnAlias#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sfn_alias#id DataAwsSfnAlias#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sfn_alias#name DataAwsSfnAlias#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sfn_alias#statemachine_arn DataAwsSfnAlias#statemachine_arn}
    */
    readonly statemachineArn: string;
}
export interface DataAwsSfnAliasRoutingConfiguration {
}
export declare function dataAwsSfnAliasRoutingConfigurationToTerraform(struct?: DataAwsSfnAliasRoutingConfiguration): any;
export declare function dataAwsSfnAliasRoutingConfigurationToHclTerraform(struct?: DataAwsSfnAliasRoutingConfiguration): any;
export declare class DataAwsSfnAliasRoutingConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsSfnAliasRoutingConfiguration | undefined;
    set internalValue(value: DataAwsSfnAliasRoutingConfiguration | undefined);
    get stateMachineVersionArn(): string;
    get weight(): number;
}
export declare class DataAwsSfnAliasRoutingConfigurationList extends cdktf.ComplexList {
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
    get(index: number): DataAwsSfnAliasRoutingConfigurationOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sfn_alias aws_sfn_alias}
*/
export declare class DataAwsSfnAlias extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_sfn_alias";
    /**
    * Generates CDKTF code for importing a DataAwsSfnAlias resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsSfnAlias to import
    * @param importFromId The id of the existing DataAwsSfnAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sfn_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsSfnAlias to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/sfn_alias aws_sfn_alias} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSfnAliasConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSfnAliasConfig);
    get arn(): string;
    get creationDate(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _routingConfiguration;
    get routingConfiguration(): DataAwsSfnAliasRoutingConfigurationList;
    private _statemachineArn?;
    get statemachineArn(): string;
    set statemachineArn(value: string);
    get statemachineArnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
