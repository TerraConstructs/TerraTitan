/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLexSlotTypeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_slot_type#id DataAwsLexSlotType#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_slot_type#name DataAwsLexSlotType#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_slot_type#version DataAwsLexSlotType#version}
    */
    readonly version?: string;
}
export interface DataAwsLexSlotTypeEnumerationValue {
}
export declare function dataAwsLexSlotTypeEnumerationValueToTerraform(struct?: DataAwsLexSlotTypeEnumerationValue): any;
export declare function dataAwsLexSlotTypeEnumerationValueToHclTerraform(struct?: DataAwsLexSlotTypeEnumerationValue): any;
export declare class DataAwsLexSlotTypeEnumerationValueOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsLexSlotTypeEnumerationValue | undefined;
    set internalValue(value: DataAwsLexSlotTypeEnumerationValue | undefined);
    get synonyms(): string[];
    get value(): string;
}
export declare class DataAwsLexSlotTypeEnumerationValueList extends cdktf.ComplexList {
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
    get(index: number): DataAwsLexSlotTypeEnumerationValueOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_slot_type aws_lex_slot_type}
*/
export declare class DataAwsLexSlotType extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lex_slot_type";
    /**
    * Generates CDKTF code for importing a DataAwsLexSlotType resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLexSlotType to import
    * @param importFromId The id of the existing DataAwsLexSlotType that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_slot_type#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLexSlotType to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_slot_type aws_lex_slot_type} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLexSlotTypeConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLexSlotTypeConfig);
    get checksum(): string;
    get createdDate(): string;
    get description(): string;
    private _enumerationValue;
    get enumerationValue(): DataAwsLexSlotTypeEnumerationValueList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get lastUpdatedDate(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get valueSelectionStrategy(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
