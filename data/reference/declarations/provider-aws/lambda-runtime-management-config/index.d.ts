/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaRuntimeManagementConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lambda_runtime_management_config#function_name LambdaRuntimeManagementConfig#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lambda_runtime_management_config#qualifier LambdaRuntimeManagementConfig#qualifier}
    */
    readonly qualifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lambda_runtime_management_config#runtime_version_arn LambdaRuntimeManagementConfig#runtime_version_arn}
    */
    readonly runtimeVersionArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lambda_runtime_management_config#update_runtime_on LambdaRuntimeManagementConfig#update_runtime_on}
    */
    readonly updateRuntimeOn?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lambda_runtime_management_config aws_lambda_runtime_management_config}
*/
export declare class LambdaRuntimeManagementConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lambda_runtime_management_config";
    /**
    * Generates CDKTF code for importing a LambdaRuntimeManagementConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LambdaRuntimeManagementConfig to import
    * @param importFromId The id of the existing LambdaRuntimeManagementConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lambda_runtime_management_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LambdaRuntimeManagementConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/lambda_runtime_management_config aws_lambda_runtime_management_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaRuntimeManagementConfigConfig
    */
    constructor(scope: Construct, id: string, config: LambdaRuntimeManagementConfigConfig);
    get functionArn(): string;
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string | undefined;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    resetQualifier(): void;
    get qualifierInput(): string | undefined;
    private _runtimeVersionArn?;
    get runtimeVersionArn(): string;
    set runtimeVersionArn(value: string);
    resetRuntimeVersionArn(): void;
    get runtimeVersionArnInput(): string | undefined;
    private _updateRuntimeOn?;
    get updateRuntimeOn(): string;
    set updateRuntimeOn(value: string);
    resetUpdateRuntimeOn(): void;
    get updateRuntimeOnInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
