/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayMethodConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method#api_key_required ApiGatewayMethod#api_key_required}
    */
    readonly apiKeyRequired?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method#authorization ApiGatewayMethod#authorization}
    */
    readonly authorization: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method#authorization_scopes ApiGatewayMethod#authorization_scopes}
    */
    readonly authorizationScopes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method#authorizer_id ApiGatewayMethod#authorizer_id}
    */
    readonly authorizerId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method#http_method ApiGatewayMethod#http_method}
    */
    readonly httpMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method#id ApiGatewayMethod#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method#operation_name ApiGatewayMethod#operation_name}
    */
    readonly operationName?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method#request_models ApiGatewayMethod#request_models}
    */
    readonly requestModels?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method#request_parameters ApiGatewayMethod#request_parameters}
    */
    readonly requestParameters?: {
        [key: string]: (boolean | cdktf.IResolvable);
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method#request_validator_id ApiGatewayMethod#request_validator_id}
    */
    readonly requestValidatorId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method#resource_id ApiGatewayMethod#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method#rest_api_id ApiGatewayMethod#rest_api_id}
    */
    readonly restApiId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method aws_api_gateway_method}
*/
export declare class ApiGatewayMethod extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_method";
    /**
    * Generates CDKTF code for importing a ApiGatewayMethod resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayMethod to import
    * @param importFromId The id of the existing ApiGatewayMethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayMethod to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_method aws_api_gateway_method} Resource
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
