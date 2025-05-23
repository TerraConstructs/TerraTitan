/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2RouteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route#api_id Apigatewayv2Route#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route#api_key_required Apigatewayv2Route#api_key_required}
    */
    readonly apiKeyRequired?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route#authorization_scopes Apigatewayv2Route#authorization_scopes}
    */
    readonly authorizationScopes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route#authorization_type Apigatewayv2Route#authorization_type}
    */
    readonly authorizationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route#authorizer_id Apigatewayv2Route#authorizer_id}
    */
    readonly authorizerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route#id Apigatewayv2Route#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route#model_selection_expression Apigatewayv2Route#model_selection_expression}
    */
    readonly modelSelectionExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route#operation_name Apigatewayv2Route#operation_name}
    */
    readonly operationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route#request_models Apigatewayv2Route#request_models}
    */
    readonly requestModels?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route#route_key Apigatewayv2Route#route_key}
    */
    readonly routeKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route#route_response_selection_expression Apigatewayv2Route#route_response_selection_expression}
    */
    readonly routeResponseSelectionExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route#target Apigatewayv2Route#target}
    */
    readonly target?: string;
    /**
    * request_parameter block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route#request_parameter Apigatewayv2Route#request_parameter}
    */
    readonly requestParameter?: Apigatewayv2RouteRequestParameter[] | cdktf.IResolvable;
}
export interface Apigatewayv2RouteRequestParameter {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route#request_parameter_key Apigatewayv2Route#request_parameter_key}
    */
    readonly requestParameterKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route#required Apigatewayv2Route#required}
    */
    readonly required: boolean | cdktf.IResolvable;
}
export declare function apigatewayv2RouteRequestParameterToTerraform(struct?: Apigatewayv2RouteRequestParameter | cdktf.IResolvable): any;
export declare function apigatewayv2RouteRequestParameterToHclTerraform(struct?: Apigatewayv2RouteRequestParameter | cdktf.IResolvable): any;
export declare class Apigatewayv2RouteRequestParameterOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Apigatewayv2RouteRequestParameter | cdktf.IResolvable | undefined;
    set internalValue(value: Apigatewayv2RouteRequestParameter | cdktf.IResolvable | undefined);
    private _requestParameterKey?;
    get requestParameterKey(): string;
    set requestParameterKey(value: string);
    get requestParameterKeyInput(): string | undefined;
    private _required?;
    get required(): boolean | cdktf.IResolvable;
    set required(value: boolean | cdktf.IResolvable);
    get requiredInput(): boolean | cdktf.IResolvable | undefined;
}
export declare class Apigatewayv2RouteRequestParameterList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Apigatewayv2RouteRequestParameter[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Apigatewayv2RouteRequestParameterOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route aws_apigatewayv2_route}
*/
export declare class Apigatewayv2Route extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_apigatewayv2_route";
    /**
    * Generates CDKTF code for importing a Apigatewayv2Route resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Apigatewayv2Route to import
    * @param importFromId The id of the existing Apigatewayv2Route that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Apigatewayv2Route to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route aws_apigatewayv2_route} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2RouteConfig
    */
    constructor(scope: Construct, id: string, config: Apigatewayv2RouteConfig);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string | undefined;
    private _apiKeyRequired?;
    get apiKeyRequired(): boolean | cdktf.IResolvable;
    set apiKeyRequired(value: boolean | cdktf.IResolvable);
    resetApiKeyRequired(): void;
    get apiKeyRequiredInput(): boolean | cdktf.IResolvable | undefined;
    private _authorizationScopes?;
    get authorizationScopes(): string[];
    set authorizationScopes(value: string[]);
    resetAuthorizationScopes(): void;
    get authorizationScopesInput(): string[] | undefined;
    private _authorizationType?;
    get authorizationType(): string;
    set authorizationType(value: string);
    resetAuthorizationType(): void;
    get authorizationTypeInput(): string | undefined;
    private _authorizerId?;
    get authorizerId(): string;
    set authorizerId(value: string);
    resetAuthorizerId(): void;
    get authorizerIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _modelSelectionExpression?;
    get modelSelectionExpression(): string;
    set modelSelectionExpression(value: string);
    resetModelSelectionExpression(): void;
    get modelSelectionExpressionInput(): string | undefined;
    private _operationName?;
    get operationName(): string;
    set operationName(value: string);
    resetOperationName(): void;
    get operationNameInput(): string | undefined;
    private _requestModels?;
    get requestModels(): {
        [key: string]: string;
    };
    set requestModels(value: {
        [key: string]: string;
    });
    resetRequestModels(): void;
    get requestModelsInput(): {
        [key: string]: string;
    } | undefined;
    private _routeKey?;
    get routeKey(): string;
    set routeKey(value: string);
    get routeKeyInput(): string | undefined;
    private _routeResponseSelectionExpression?;
    get routeResponseSelectionExpression(): string;
    set routeResponseSelectionExpression(value: string);
    resetRouteResponseSelectionExpression(): void;
    get routeResponseSelectionExpressionInput(): string | undefined;
    private _target?;
    get target(): string;
    set target(value: string);
    resetTarget(): void;
    get targetInput(): string | undefined;
    private _requestParameter;
    get requestParameter(): Apigatewayv2RouteRequestParameterList;
    putRequestParameter(value: Apigatewayv2RouteRequestParameter[] | cdktf.IResolvable): void;
    resetRequestParameter(): void;
    get requestParameterInput(): cdktf.IResolvable | Apigatewayv2RouteRequestParameter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
