/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2RouteResponseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route_response#api_id Apigatewayv2RouteResponse#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route_response#id Apigatewayv2RouteResponse#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route_response#model_selection_expression Apigatewayv2RouteResponse#model_selection_expression}
    */
    readonly modelSelectionExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route_response#response_models Apigatewayv2RouteResponse#response_models}
    */
    readonly responseModels?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route_response#route_id Apigatewayv2RouteResponse#route_id}
    */
    readonly routeId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route_response#route_response_key Apigatewayv2RouteResponse#route_response_key}
    */
    readonly routeResponseKey: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route_response aws_apigatewayv2_route_response}
*/
export declare class Apigatewayv2RouteResponse extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_apigatewayv2_route_response";
    /**
    * Generates CDKTF code for importing a Apigatewayv2RouteResponse resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Apigatewayv2RouteResponse to import
    * @param importFromId The id of the existing Apigatewayv2RouteResponse that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route_response#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Apigatewayv2RouteResponse to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_route_response aws_apigatewayv2_route_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2RouteResponseConfig
    */
    constructor(scope: Construct, id: string, config: Apigatewayv2RouteResponseConfig);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string | undefined;
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
    private _responseModels?;
    get responseModels(): {
        [key: string]: string;
    };
    set responseModels(value: {
        [key: string]: string;
    });
    resetResponseModels(): void;
    get responseModelsInput(): {
        [key: string]: string;
    } | undefined;
    private _routeId?;
    get routeId(): string;
    set routeId(value: string);
    get routeIdInput(): string | undefined;
    private _routeResponseKey?;
    get routeResponseKey(): string;
    set routeResponseKey(value: string);
    get routeResponseKeyInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
