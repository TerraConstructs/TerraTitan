/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayAuthorizerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_authorizer#authorizer_credentials ApiGatewayAuthorizer#authorizer_credentials}
    */
    readonly authorizerCredentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_authorizer#authorizer_result_ttl_in_seconds ApiGatewayAuthorizer#authorizer_result_ttl_in_seconds}
    */
    readonly authorizerResultTtlInSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_authorizer#authorizer_uri ApiGatewayAuthorizer#authorizer_uri}
    */
    readonly authorizerUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_authorizer#id ApiGatewayAuthorizer#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_authorizer#identity_source ApiGatewayAuthorizer#identity_source}
    */
    readonly identitySource?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_authorizer#identity_validation_expression ApiGatewayAuthorizer#identity_validation_expression}
    */
    readonly identityValidationExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_authorizer#name ApiGatewayAuthorizer#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_authorizer#provider_arns ApiGatewayAuthorizer#provider_arns}
    */
    readonly providerArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_authorizer#rest_api_id ApiGatewayAuthorizer#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_authorizer#type ApiGatewayAuthorizer#type}
    */
    readonly type?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_authorizer aws_api_gateway_authorizer}
*/
export declare class ApiGatewayAuthorizer extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_authorizer";
    /**
    * Generates CDKTF code for importing a ApiGatewayAuthorizer resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayAuthorizer to import
    * @param importFromId The id of the existing ApiGatewayAuthorizer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_authorizer#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayAuthorizer to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_authorizer aws_api_gateway_authorizer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayAuthorizerConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayAuthorizerConfig);
    get arn(): string;
    private _authorizerCredentials?;
    get authorizerCredentials(): string;
    set authorizerCredentials(value: string);
    resetAuthorizerCredentials(): void;
    get authorizerCredentialsInput(): string | undefined;
    private _authorizerResultTtlInSeconds?;
    get authorizerResultTtlInSeconds(): number;
    set authorizerResultTtlInSeconds(value: number);
    resetAuthorizerResultTtlInSeconds(): void;
    get authorizerResultTtlInSecondsInput(): number | undefined;
    private _authorizerUri?;
    get authorizerUri(): string;
    set authorizerUri(value: string);
    resetAuthorizerUri(): void;
    get authorizerUriInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _identitySource?;
    get identitySource(): string;
    set identitySource(value: string);
    resetIdentitySource(): void;
    get identitySourceInput(): string | undefined;
    private _identityValidationExpression?;
    get identityValidationExpression(): string;
    set identityValidationExpression(value: string);
    resetIdentityValidationExpression(): void;
    get identityValidationExpressionInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _providerArns?;
    get providerArns(): string[];
    set providerArns(value: string[]);
    resetProviderArns(): void;
    get providerArnsInput(): string[] | undefined;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
