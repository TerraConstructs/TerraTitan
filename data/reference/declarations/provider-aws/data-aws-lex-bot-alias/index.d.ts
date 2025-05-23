/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLexBotAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_bot_alias#bot_name DataAwsLexBotAlias#bot_name}
    */
    readonly botName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_bot_alias#id DataAwsLexBotAlias#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_bot_alias#name DataAwsLexBotAlias#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_bot_alias aws_lex_bot_alias}
*/
export declare class DataAwsLexBotAlias extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lex_bot_alias";
    /**
    * Generates CDKTF code for importing a DataAwsLexBotAlias resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLexBotAlias to import
    * @param importFromId The id of the existing DataAwsLexBotAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_bot_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLexBotAlias to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_bot_alias aws_lex_bot_alias} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLexBotAliasConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLexBotAliasConfig);
    get arn(): string;
    private _botName?;
    get botName(): string;
    set botName(value: string);
    get botNameInput(): string | undefined;
    get botVersion(): string;
    get checksum(): string;
    get createdDate(): string;
    get description(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
