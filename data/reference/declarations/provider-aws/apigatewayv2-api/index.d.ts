/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2ApiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#api_key_selection_expression Apigatewayv2Api#api_key_selection_expression}
    */
    readonly apiKeySelectionExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#body Apigatewayv2Api#body}
    */
    readonly body?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#credentials_arn Apigatewayv2Api#credentials_arn}
    */
    readonly credentialsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#description Apigatewayv2Api#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#disable_execute_api_endpoint Apigatewayv2Api#disable_execute_api_endpoint}
    */
    readonly disableExecuteApiEndpoint?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#fail_on_warnings Apigatewayv2Api#fail_on_warnings}
    */
    readonly failOnWarnings?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#id Apigatewayv2Api#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#name Apigatewayv2Api#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#protocol_type Apigatewayv2Api#protocol_type}
    */
    readonly protocolType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#route_key Apigatewayv2Api#route_key}
    */
    readonly routeKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#route_selection_expression Apigatewayv2Api#route_selection_expression}
    */
    readonly routeSelectionExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#tags Apigatewayv2Api#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#tags_all Apigatewayv2Api#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#target Apigatewayv2Api#target}
    */
    readonly target?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#version Apigatewayv2Api#version}
    */
    readonly version?: string;
    /**
    * cors_configuration block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#cors_configuration Apigatewayv2Api#cors_configuration}
    */
    readonly corsConfiguration?: Apigatewayv2ApiCorsConfiguration;
}
export interface Apigatewayv2ApiCorsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#allow_credentials Apigatewayv2Api#allow_credentials}
    */
    readonly allowCredentials?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#allow_headers Apigatewayv2Api#allow_headers}
    */
    readonly allowHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#allow_methods Apigatewayv2Api#allow_methods}
    */
    readonly allowMethods?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#allow_origins Apigatewayv2Api#allow_origins}
    */
    readonly allowOrigins?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#expose_headers Apigatewayv2Api#expose_headers}
    */
    readonly exposeHeaders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#max_age Apigatewayv2Api#max_age}
    */
    readonly maxAge?: number;
}
export declare function apigatewayv2ApiCorsConfigurationToTerraform(struct?: Apigatewayv2ApiCorsConfigurationOutputReference | Apigatewayv2ApiCorsConfiguration): any;
export declare function apigatewayv2ApiCorsConfigurationToHclTerraform(struct?: Apigatewayv2ApiCorsConfigurationOutputReference | Apigatewayv2ApiCorsConfiguration): any;
export declare class Apigatewayv2ApiCorsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Apigatewayv2ApiCorsConfiguration | undefined;
    set internalValue(value: Apigatewayv2ApiCorsConfiguration | undefined);
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
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api aws_apigatewayv2_api}
*/
export declare class Apigatewayv2Api extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_apigatewayv2_api";
    /**
    * Generates CDKTF code for importing a Apigatewayv2Api resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Apigatewayv2Api to import
    * @param importFromId The id of the existing Apigatewayv2Api that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Apigatewayv2Api to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api aws_apigatewayv2_api} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2ApiConfig
    */
    constructor(scope: Construct, id: string, config: Apigatewayv2ApiConfig);
    get apiEndpoint(): string;
    private _apiKeySelectionExpression?;
    get apiKeySelectionExpression(): string;
    set apiKeySelectionExpression(value: string);
    resetApiKeySelectionExpression(): void;
    get apiKeySelectionExpressionInput(): string | undefined;
    get arn(): string;
    private _body?;
    get body(): string;
    set body(value: string);
    resetBody(): void;
    get bodyInput(): string | undefined;
    private _credentialsArn?;
    get credentialsArn(): string;
    set credentialsArn(value: string);
    resetCredentialsArn(): void;
    get credentialsArnInput(): string | undefined;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string | undefined;
    private _disableExecuteApiEndpoint?;
    get disableExecuteApiEndpoint(): boolean | cdktf.IResolvable;
    set disableExecuteApiEndpoint(value: boolean | cdktf.IResolvable);
    resetDisableExecuteApiEndpoint(): void;
    get disableExecuteApiEndpointInput(): boolean | cdktf.IResolvable | undefined;
    get executionArn(): string;
    private _failOnWarnings?;
    get failOnWarnings(): boolean | cdktf.IResolvable;
    set failOnWarnings(value: boolean | cdktf.IResolvable);
    resetFailOnWarnings(): void;
    get failOnWarningsInput(): boolean | cdktf.IResolvable | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _protocolType?;
    get protocolType(): string;
    set protocolType(value: string);
    get protocolTypeInput(): string | undefined;
    private _routeKey?;
    get routeKey(): string;
    set routeKey(value: string);
    resetRouteKey(): void;
    get routeKeyInput(): string | undefined;
    private _routeSelectionExpression?;
    get routeSelectionExpression(): string;
    set routeSelectionExpression(value: string);
    resetRouteSelectionExpression(): void;
    get routeSelectionExpressionInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _target?;
    get target(): string;
    set target(value: string);
    resetTarget(): void;
    get targetInput(): string | undefined;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string | undefined;
    private _corsConfiguration;
    get corsConfiguration(): Apigatewayv2ApiCorsConfigurationOutputReference;
    putCorsConfiguration(value: Apigatewayv2ApiCorsConfiguration): void;
    resetCorsConfiguration(): void;
    get corsConfigurationInput(): Apigatewayv2ApiCorsConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
