/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLambdaAliasConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_alias#function_name DataAwsLambdaAlias#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_alias#id DataAwsLambdaAlias#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_alias#name DataAwsLambdaAlias#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_alias aws_lambda_alias}
*/
export declare class DataAwsLambdaAlias extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lambda_alias";
    /**
    * Generates CDKTF code for importing a DataAwsLambdaAlias resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLambdaAlias to import
    * @param importFromId The id of the existing DataAwsLambdaAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_alias#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLambdaAlias to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_alias aws_lambda_alias} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaAliasConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLambdaAliasConfig);
    get arn(): string;
    get description(): string;
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string | undefined;
    get functionVersion(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get invokeArn(): string;
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
