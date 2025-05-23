/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsDynamodbTableItemConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dynamodb_table_item#expression_attribute_names DataAwsDynamodbTableItem#expression_attribute_names}
    */
    readonly expressionAttributeNames?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dynamodb_table_item#id DataAwsDynamodbTableItem#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dynamodb_table_item#key DataAwsDynamodbTableItem#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dynamodb_table_item#projection_expression DataAwsDynamodbTableItem#projection_expression}
    */
    readonly projectionExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dynamodb_table_item#table_name DataAwsDynamodbTableItem#table_name}
    */
    readonly tableName: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dynamodb_table_item aws_dynamodb_table_item}
*/
export declare class DataAwsDynamodbTableItem extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_dynamodb_table_item";
    /**
    * Generates CDKTF code for importing a DataAwsDynamodbTableItem resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsDynamodbTableItem to import
    * @param importFromId The id of the existing DataAwsDynamodbTableItem that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dynamodb_table_item#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsDynamodbTableItem to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/dynamodb_table_item aws_dynamodb_table_item} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDynamodbTableItemConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDynamodbTableItemConfig);
    private _expressionAttributeNames?;
    get expressionAttributeNames(): {
        [key: string]: string;
    };
    set expressionAttributeNames(value: {
        [key: string]: string;
    });
    resetExpressionAttributeNames(): void;
    get expressionAttributeNamesInput(): {
        [key: string]: string;
    } | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get item(): string;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string | undefined;
    private _projectionExpression?;
    get projectionExpression(): string;
    set projectionExpression(value: string);
    resetProjectionExpression(): void;
    get projectionExpressionInput(): string | undefined;
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
