/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayMethodConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) Specify if the method requires an API key */
    readonly apiKeyRequired?: boolean | cdktf.IResolvable;
    /** (Required) Type of authorization used for the method (`NONE`, `CUSTOM`, `AWS_IAM`, `COGNITO_USER_POOLS`) */
    readonly authorization: string;
    /** (Optional) Authorization scopes used when the authorization is `COGNITO_USER_POOLS` */
    readonly authorizationScopes?: string[];
    /** (Optional) Authorizer id to be used when the authorization is `CUSTOM` or `COGNITO_USER_POOLS` */
    readonly authorizerId?: string;
    /** (Required) HTTP Method (`GET`, `POST`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`, `ANY`) */
    readonly httpMethod: string;
    /** */
    readonly id?: string;
    /** (Optional) Function name that will be given to the method when generating an SDK through API Gateway. If omitted, API Gateway will generate a function name based on the resource path and HTTP verb. */
    readonly operationName?: string;
    /** (Optional) Map of the API models used for the request's content type where key is the content type (e.g., `application/json`) and value is either `Error`, `Empty` (built-in models) or `aws_api_gateway_model`'s `name`. */
    readonly requestModels?: {
        [key: string]: string;
    };
    /** (Optional) Map of request parameters (from the path, query string and headers) that should be passed to the integration. The boolean value indicates whether the parameter is required (`true`) or optional (`false`). */
    readonly requestParameters?: {
        [key: string]: (boolean | cdktf.IResolvable);
    };
    /** (Optional) ID of a `aws_api_gateway_request_validator` */
    readonly requestValidatorId?: string;
    /** (Required) API resource ID */
    readonly resourceId: string;
    /** (Required) ID of the associated REST API */
    readonly restApiId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_method aws_api_gateway_method}
*/
export declare class ApiGatewayMethod extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_method";
    /**
    * Generates CDKTF code for importing a ApiGatewayMethod resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayMethod to import
    * @param importFromId The id of the existing ApiGatewayMethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_method#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayMethod to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_method aws_api_gateway_method} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayMethodConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayMethodConfig);
    private _apiKeyRequired?;
    get apiKeyRequired(): boolean | cdktf.IResolvable;
    set apiKeyRequired(value: boolean | cdktf.IResolvable);
    resetApiKeyRequired(): void;
    get apiKeyRequiredInput(): boolean | cdktf.IResolvable | undefined;
    private _authorization?;
    get authorization(): string;
    set authorization(value: string);
    get authorizationInput(): string | undefined;
    private _authorizationScopes?;
    get authorizationScopes(): string[];
    set authorizationScopes(value: string[]);
    resetAuthorizationScopes(): void;
    get authorizationScopesInput(): string[] | undefined;
    private _authorizerId?;
    get authorizerId(): string;
    set authorizerId(value: string);
    resetAuthorizerId(): void;
    get authorizerIdInput(): string | undefined;
    private _httpMethod?;
    get httpMethod(): string;
    set httpMethod(value: string);
    get httpMethodInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _requestParameters?;
    get requestParameters(): {
        [key: string]: (boolean | cdktf.IResolvable);
    };
    set requestParameters(value: {
        [key: string]: (boolean | cdktf.IResolvable);
    });
    resetRequestParameters(): void;
    get requestParametersInput(): {
        [key: string]: boolean | cdktf.IResolvable;
    } | undefined;
    private _requestValidatorId?;
    get requestValidatorId(): string;
    set requestValidatorId(value: string);
    resetRequestValidatorId(): void;
    get requestValidatorIdInput(): string | undefined;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string | undefined;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
