/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaInvocationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_invocation#function_name LambdaInvocation#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_invocation#id LambdaInvocation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_invocation#input LambdaInvocation#input}
    */
    readonly input: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_invocation#lifecycle_scope LambdaInvocation#lifecycle_scope}
    */
    readonly lifecycleScope?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_invocation#qualifier LambdaInvocation#qualifier}
    */
    readonly qualifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_invocation#terraform_key LambdaInvocation#terraform_key}
    */
    readonly terraformKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_invocation#triggers LambdaInvocation#triggers}
    */
    readonly triggers?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_invocation aws_lambda_invocation}
*/
export declare class LambdaInvocation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lambda_invocation";
    /**
    * Generates CDKTF code for importing a LambdaInvocation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LambdaInvocation to import
    * @param importFromId The id of the existing LambdaInvocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_invocation#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LambdaInvocation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_invocation aws_lambda_invocation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaInvocationConfig
    */
    constructor(scope: Construct, id: string, config: LambdaInvocationConfig);
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
    private _lifecycleScope?;
    get lifecycleScope(): string;
    set lifecycleScope(value: string);
    resetLifecycleScope(): void;
    get lifecycleScopeInput(): string | undefined;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    resetQualifier(): void;
    get qualifierInput(): string | undefined;
    get result(): string;
    private _terraformKey?;
    get terraformKey(): string;
    set terraformKey(value: string);
    resetTerraformKey(): void;
    get terraformKeyInput(): string | undefined;
    private _triggers?;
    get triggers(): {
        [key: string]: string;
    };
    set triggers(value: {
        [key: string]: string;
    });
    resetTriggers(): void;
    get triggersInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
