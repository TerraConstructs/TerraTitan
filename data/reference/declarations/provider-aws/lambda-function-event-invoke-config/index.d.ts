/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaFunctionEventInvokeConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_event_invoke_config#function_name LambdaFunctionEventInvokeConfig#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_event_invoke_config#id LambdaFunctionEventInvokeConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_event_invoke_config#maximum_event_age_in_seconds LambdaFunctionEventInvokeConfig#maximum_event_age_in_seconds}
    */
    readonly maximumEventAgeInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_event_invoke_config#maximum_retry_attempts LambdaFunctionEventInvokeConfig#maximum_retry_attempts}
    */
    readonly maximumRetryAttempts?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_event_invoke_config#qualifier LambdaFunctionEventInvokeConfig#qualifier}
    */
    readonly qualifier?: string;
    /**
    * destination_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_event_invoke_config#destination_config LambdaFunctionEventInvokeConfig#destination_config}
    */
    readonly destinationConfig?: LambdaFunctionEventInvokeConfigDestinationConfig;
}
export interface LambdaFunctionEventInvokeConfigDestinationConfigOnFailure {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}
    */
    readonly destination: string;
}
export declare function lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference | LambdaFunctionEventInvokeConfigDestinationConfigOnFailure): any;
export declare function lambdaFunctionEventInvokeConfigDestinationConfigOnFailureToHclTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference | LambdaFunctionEventInvokeConfigDestinationConfigOnFailure): any;
export declare class LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaFunctionEventInvokeConfigDestinationConfigOnFailure | undefined;
    set internalValue(value: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure | undefined);
    private _destination?;
    get destination(): string;
    set destination(value: string);
    get destinationInput(): string | undefined;
}
export interface LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_event_invoke_config#destination LambdaFunctionEventInvokeConfig#destination}
    */
    readonly destination: string;
}
export declare function lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference | LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess): any;
export declare function lambdaFunctionEventInvokeConfigDestinationConfigOnSuccessToHclTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference | LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess): any;
export declare class LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess | undefined;
    set internalValue(value: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess | undefined);
    private _destination?;
    get destination(): string;
    set destination(value: string);
    get destinationInput(): string | undefined;
}
export interface LambdaFunctionEventInvokeConfigDestinationConfig {
    /**
    * on_failure block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_event_invoke_config#on_failure LambdaFunctionEventInvokeConfig#on_failure}
    */
    readonly onFailure?: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure;
    /**
    * on_success block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_event_invoke_config#on_success LambdaFunctionEventInvokeConfig#on_success}
    */
    readonly onSuccess?: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess;
}
export declare function lambdaFunctionEventInvokeConfigDestinationConfigToTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOutputReference | LambdaFunctionEventInvokeConfigDestinationConfig): any;
export declare function lambdaFunctionEventInvokeConfigDestinationConfigToHclTerraform(struct?: LambdaFunctionEventInvokeConfigDestinationConfigOutputReference | LambdaFunctionEventInvokeConfigDestinationConfig): any;
export declare class LambdaFunctionEventInvokeConfigDestinationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaFunctionEventInvokeConfigDestinationConfig | undefined;
    set internalValue(value: LambdaFunctionEventInvokeConfigDestinationConfig | undefined);
    private _onFailure;
    get onFailure(): LambdaFunctionEventInvokeConfigDestinationConfigOnFailureOutputReference;
    putOnFailure(value: LambdaFunctionEventInvokeConfigDestinationConfigOnFailure): void;
    resetOnFailure(): void;
    get onFailureInput(): LambdaFunctionEventInvokeConfigDestinationConfigOnFailure | undefined;
    private _onSuccess;
    get onSuccess(): LambdaFunctionEventInvokeConfigDestinationConfigOnSuccessOutputReference;
    putOnSuccess(value: LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess): void;
    resetOnSuccess(): void;
    get onSuccessInput(): LambdaFunctionEventInvokeConfigDestinationConfigOnSuccess | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_event_invoke_config aws_lambda_function_event_invoke_config}
*/
export declare class LambdaFunctionEventInvokeConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lambda_function_event_invoke_config";
    /**
    * Generates CDKTF code for importing a LambdaFunctionEventInvokeConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LambdaFunctionEventInvokeConfig to import
    * @param importFromId The id of the existing LambdaFunctionEventInvokeConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_event_invoke_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LambdaFunctionEventInvokeConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_event_invoke_config aws_lambda_function_event_invoke_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaFunctionEventInvokeConfigConfig
    */
    constructor(scope: Construct, id: string, config: LambdaFunctionEventInvokeConfigConfig);
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _maximumEventAgeInSeconds?;
    get maximumEventAgeInSeconds(): number;
    set maximumEventAgeInSeconds(value: number);
    resetMaximumEventAgeInSeconds(): void;
    get maximumEventAgeInSecondsInput(): number | undefined;
    private _maximumRetryAttempts?;
    get maximumRetryAttempts(): number;
    set maximumRetryAttempts(value: number);
    resetMaximumRetryAttempts(): void;
    get maximumRetryAttemptsInput(): number | undefined;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    resetQualifier(): void;
    get qualifierInput(): string | undefined;
    private _destinationConfig;
    get destinationConfig(): LambdaFunctionEventInvokeConfigDestinationConfigOutputReference;
    putDestinationConfig(value: LambdaFunctionEventInvokeConfigDestinationConfig): void;
    resetDestinationConfig(): void;
    get destinationConfigInput(): LambdaFunctionEventInvokeConfigDestinationConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
