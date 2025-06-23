/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DynamodbTableItemConfig extends cdktf.TerraformMetaArguments {
    /** (Required) Hash key to use for lookups and identification of the item */
    readonly hashKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/dynamodb_table_item#id DynamodbTableItem#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /** (Required) JSON representation of a map of attribute name/value pairs, one for each attribute. Only the primary key attributes are required; you can optionally provide other attribute name-value pairs for the item. */
    readonly item: string;
    /** (Optional) Range key to use for lookups and identification of the item. Required if there is range key defined in the table. */
    readonly rangeKey?: string;
    /** (Required) Name of the table to contain the item. */
    readonly tableName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/dynamodb_table_item aws_dynamodb_table_item}
*/
export declare class DynamodbTableItem extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_dynamodb_table_item";
    /**
    * Generates CDKTF code for importing a DynamodbTableItem resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DynamodbTableItem to import
    * @param importFromId The id of the existing DynamodbTableItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/dynamodb_table_item#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DynamodbTableItem to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.93.0/docs/resources/dynamodb_table_item aws_dynamodb_table_item} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbTableItemConfig
    */
    constructor(scope: Construct, id: string, config: DynamodbTableItemConfig);
    private _hashKey?;
    get hashKey(): string;
    set hashKey(value: string);
    get hashKeyInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _item?;
    get item(): string;
    set item(value: string);
    get itemInput(): string | undefined;
    private _rangeKey?;
    get rangeKey(): string;
    set rangeKey(value: string);
    resetRangeKey(): void;
    get rangeKeyInput(): string | undefined;
    private _tableName?;
    get tableName(): string;
    set tableName(value: string);
    get tableNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
