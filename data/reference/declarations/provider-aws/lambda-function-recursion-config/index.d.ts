/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaFunctionRecursionConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lambda_function_recursion_config#function_name LambdaFunctionRecursionConfig#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lambda_function_recursion_config#recursive_loop LambdaFunctionRecursionConfig#recursive_loop}
    */
    readonly recursiveLoop: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lambda_function_recursion_config aws_lambda_function_recursion_config}
*/
export declare class LambdaFunctionRecursionConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lambda_function_recursion_config";
    /**
    * Generates CDKTF code for importing a LambdaFunctionRecursionConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LambdaFunctionRecursionConfig to import
    * @param importFromId The id of the existing LambdaFunctionRecursionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lambda_function_recursion_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LambdaFunctionRecursionConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lambda_function_recursion_config aws_lambda_function_recursion_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaFunctionRecursionConfigConfig
    */
    constructor(scope: Construct, id: string, config: LambdaFunctionRecursionConfigConfig);
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string | undefined;
    private _recursiveLoop?;
    get recursiveLoop(): string;
    set recursiveLoop(value: string);
    get recursiveLoopInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
