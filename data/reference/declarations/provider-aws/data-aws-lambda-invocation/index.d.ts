/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLambdaInvocationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_invocation#function_name DataAwsLambdaInvocation#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_invocation#id DataAwsLambdaInvocation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_invocation#input DataAwsLambdaInvocation#input}
    */
    readonly input: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_invocation#qualifier DataAwsLambdaInvocation#qualifier}
    */
    readonly qualifier?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_invocation aws_lambda_invocation}
*/
export declare class DataAwsLambdaInvocation extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_lambda_invocation";
    /**
    * Generates CDKTF code for importing a DataAwsLambdaInvocation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsLambdaInvocation to import
    * @param importFromId The id of the existing DataAwsLambdaInvocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_invocation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsLambdaInvocation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/lambda_invocation aws_lambda_invocation} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLambdaInvocationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsLambdaInvocationConfig);
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _input?;
    get input(): string;
    set input(value: string);
    get inputInput(): string | undefined;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    resetQualifier(): void;
    get qualifierInput(): string | undefined;
    get result(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
