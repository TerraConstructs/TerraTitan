/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LambdaFunctionUrlConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url#authorization_type LambdaFunctionUrl#authorization_type}
    */
    readonly authorizationType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url#function_name LambdaFunctionUrl#function_name}
    */
    readonly functionName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url#id LambdaFunctionUrl#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url#invoke_mode LambdaFunctionUrl#invoke_mode}
    */
    readonly invokeMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url#qualifier LambdaFunctionUrl#qualifier}
    */
    readonly qualifier?: string;
    /**
    * cors block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url#cors LambdaFunctionUrl#cors}
    */
    readonly cors?: LambdaFunctionUrlCors;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url#timeouts LambdaFunctionUrl#timeouts}
    */
    readonly timeouts?: LambdaFunctionUrlTimeouts;
}
export interface LambdaFunctionUrlCors {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url#allow_credentials LambdaFunctionUrl#allow_credentials}
    */
    readonly allowCredentials?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url#allow_headers LambdaFunctionUrl#allow_headers}
    */
    readonly allowHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url#allow_methods LambdaFunctionUrl#allow_methods}
    */
    readonly allowMethods?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url#allow_origins LambdaFunctionUrl#allow_origins}
    */
    readonly allowOrigins?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url#expose_headers LambdaFunctionUrl#expose_headers}
    */
    readonly exposeHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url#max_age LambdaFunctionUrl#max_age}
    */
    readonly maxAge?: number;
}
export declare function lambdaFunctionUrlCorsToTerraform(struct?: LambdaFunctionUrlCorsOutputReference | LambdaFunctionUrlCors): any;
export declare function lambdaFunctionUrlCorsToHclTerraform(struct?: LambdaFunctionUrlCorsOutputReference | LambdaFunctionUrlCors): any;
export declare class LambdaFunctionUrlCorsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaFunctionUrlCors | undefined;
    set internalValue(value: LambdaFunctionUrlCors | undefined);
    private _allowCredentials?;
    get allowCredentials(): boolean | cdktf.IResolvable;
    set allowCredentials(value: boolean | cdktf.IResolvable);
    resetAllowCredentials(): void;
    get allowCredentialsInput(): boolean | cdktf.IResolvable | undefined;
    private _allowHeaders?;
    get allowHeaders(): string[];
    set allowHeaders(value: string[]);
    resetAllowHeaders(): void;
    get allowHeadersInput(): string[] | undefined;
    private _allowMethods?;
    get allowMethods(): string[];
    set allowMethods(value: string[]);
    resetAllowMethods(): void;
    get allowMethodsInput(): string[] | undefined;
    private _allowOrigins?;
    get allowOrigins(): string[];
    set allowOrigins(value: string[]);
    resetAllowOrigins(): void;
    get allowOriginsInput(): string[] | undefined;
    private _exposeHeaders?;
    get exposeHeaders(): string[];
    set exposeHeaders(value: string[]);
    resetExposeHeaders(): void;
    get exposeHeadersInput(): string[] | undefined;
    private _maxAge?;
    get maxAge(): number;
    set maxAge(value: number);
    resetMaxAge(): void;
    get maxAgeInput(): number | undefined;
}
export interface LambdaFunctionUrlTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url#create LambdaFunctionUrl#create}
    */
    readonly create?: string;
}
export declare function lambdaFunctionUrlTimeoutsToTerraform(struct?: LambdaFunctionUrlTimeouts | cdktf.IResolvable): any;
export declare function lambdaFunctionUrlTimeoutsToHclTerraform(struct?: LambdaFunctionUrlTimeouts | cdktf.IResolvable): any;
export declare class LambdaFunctionUrlTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): LambdaFunctionUrlTimeouts | cdktf.IResolvable | undefined;
    set internalValue(value: LambdaFunctionUrlTimeouts | cdktf.IResolvable | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url aws_lambda_function_url}
*/
export declare class LambdaFunctionUrl extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lambda_function_url";
    /**
    * Generates CDKTF code for importing a LambdaFunctionUrl resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LambdaFunctionUrl to import
    * @param importFromId The id of the existing LambdaFunctionUrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LambdaFunctionUrl to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lambda_function_url aws_lambda_function_url} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaFunctionUrlConfig
    */
    constructor(scope: Construct, id: string, config: LambdaFunctionUrlConfig);
    private _authorizationType?;
    get authorizationType(): string;
    set authorizationType(value: string);
    get authorizationTypeInput(): string | undefined;
    get functionArn(): string;
    private _functionName?;
    get functionName(): string;
    set functionName(value: string);
    get functionNameInput(): string | undefined;
    get functionUrl(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _invokeMode?;
    get invokeMode(): string;
    set invokeMode(value: string);
    resetInvokeMode(): void;
    get invokeModeInput(): string | undefined;
    private _qualifier?;
    get qualifier(): string;
    set qualifier(value: string);
    resetQualifier(): void;
    get qualifierInput(): string | undefined;
    get urlId(): string;
    private _cors;
    get cors(): LambdaFunctionUrlCorsOutputReference;
    putCors(value: LambdaFunctionUrlCors): void;
    resetCors(): void;
    get corsInput(): LambdaFunctionUrlCors | undefined;
    private _timeouts;
    get timeouts(): LambdaFunctionUrlTimeoutsOutputReference;
    putTimeouts(value: LambdaFunctionUrlTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): cdktf.IResolvable | LambdaFunctionUrlTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
