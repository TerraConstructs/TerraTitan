/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLexBotConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_bot#id DataAwsLexBot#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_bot#name DataAwsLexBot#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_bot#version DataAwsLexBot#version}
    */
    readonly version?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_bot aws_lex_bot}
*/
export declare class DataAwsLexBot extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lex_bot";
    /**
    * Generates CDKTF code for importing a DataAwsLexBot resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLexBot to import
    * @param importFromId The id of the existing DataAwsLexBot that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_bot#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLexBot to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lex_bot aws_lex_bot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLexBotConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLexBotConfig);
    get arn(): string;
    get checksum(): string;
    get childDirected(): cdktf.IResolvable;
    get createdDate(): string;
    get description(): string;
    get detectSentiment(): cdktf.IResolvable;
    get enableModelImprovements(): cdktf.IResolvable;
    get failureReason(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get idleSessionTtlInSeconds(): number;
    get lastUpdatedDate(): string;
    get locale(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    get nluIntentConfidenceThreshold(): number;
    get status(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    get voiceId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
