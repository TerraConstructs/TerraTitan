/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayIntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#cache_key_parameters ApiGatewayIntegration#cache_key_parameters}
    */
    readonly cacheKeyParameters?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#cache_namespace ApiGatewayIntegration#cache_namespace}
    */
    readonly cacheNamespace?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#connection_id ApiGatewayIntegration#connection_id}
    */
    readonly connectionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#connection_type ApiGatewayIntegration#connection_type}
    */
    readonly connectionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#content_handling ApiGatewayIntegration#content_handling}
    */
    readonly contentHandling?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#credentials ApiGatewayIntegration#credentials}
    */
    readonly credentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#http_method ApiGatewayIntegration#http_method}
    */
    readonly httpMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#id ApiGatewayIntegration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#integration_http_method ApiGatewayIntegration#integration_http_method}
    */
    readonly integrationHttpMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#passthrough_behavior ApiGatewayIntegration#passthrough_behavior}
    */
    readonly passthroughBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#request_parameters ApiGatewayIntegration#request_parameters}
    */
    readonly requestParameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#request_templates ApiGatewayIntegration#request_templates}
    */
    readonly requestTemplates?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#resource_id ApiGatewayIntegration#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#rest_api_id ApiGatewayIntegration#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#timeout_milliseconds ApiGatewayIntegration#timeout_milliseconds}
    */
    readonly timeoutMilliseconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#type ApiGatewayIntegration#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#uri ApiGatewayIntegration#uri}
    */
    readonly uri?: string;
    /**
    * tls_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#tls_config ApiGatewayIntegration#tls_config}
    */
    readonly tlsConfig?: ApiGatewayIntegrationTlsConfig;
}
export interface ApiGatewayIntegrationTlsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#insecure_skip_verification ApiGatewayIntegration#insecure_skip_verification}
    */
    readonly insecureSkipVerification?: boolean | cdktf.IResolvable;
}
export declare function apiGatewayIntegrationTlsConfigToTerraform(struct?: ApiGatewayIntegrationTlsConfigOutputReference | ApiGatewayIntegrationTlsConfig): any;
export declare function apiGatewayIntegrationTlsConfigToHclTerraform(struct?: ApiGatewayIntegrationTlsConfigOutputReference | ApiGatewayIntegrationTlsConfig): any;
export declare class ApiGatewayIntegrationTlsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiGatewayIntegrationTlsConfig | undefined;
    set internalValue(value: ApiGatewayIntegrationTlsConfig | undefined);
    private _insecureSkipVerification?;
    get insecureSkipVerification(): boolean | cdktf.IResolvable;
    set insecureSkipVerification(value: boolean | cdktf.IResolvable);
    resetInsecureSkipVerification(): void;
    get insecureSkipVerificationInput(): boolean | cdktf.IResolvable | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration aws_api_gateway_integration}
*/
export declare class ApiGatewayIntegration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_integration";
    /**
    * Generates CDKTF code for importing a ApiGatewayIntegration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayIntegration to import
    * @param importFromId The id of the existing ApiGatewayIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayIntegration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration aws_api_gateway_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayIntegrationConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayIntegrationConfig);
    private _cacheKeyParameters?;
    get cacheKeyParameters(): string[];
    set cacheKeyParameters(value: string[]);
    resetCacheKeyParameters(): void;
    get cacheKeyParametersInput(): string[] | undefined;
    private _cacheNamespace?;
    get cacheNamespace(): string;
    set cacheNamespace(value: string);
    resetCacheNamespace(): void;
    get cacheNamespaceInput(): string | undefined;
    private _connectionId?;
    get connectionId(): string;
    set connectionId(value: string);
    resetConnectionId(): void;
    get connectionIdInput(): string | undefined;
    private _connectionType?;
    get connectionType(): string;
    set connectionType(value: string);
    resetConnectionType(): void;
    get connectionTypeInput(): string | undefined;
    private _contentHandling?;
    get contentHandling(): string;
    set contentHandling(value: string);
    resetContentHandling(): void;
    get contentHandlingInput(): string | undefined;
    private _credentials?;
    get credentials(): string;
    set credentials(value: string);
    resetCredentials(): void;
    get credentialsInput(): string | undefined;
    private _httpMethod?;
    get httpMethod(): string;
    set httpMethod(value: string);
    get httpMethodInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _integrationHttpMethod?;
    get integrationHttpMethod(): string;
    set integrationHttpMethod(value: string);
    resetIntegrationHttpMethod(): void;
    get integrationHttpMethodInput(): string | undefined;
    private _passthroughBehavior?;
    get passthroughBehavior(): string;
    set passthroughBehavior(value: string);
    resetPassthroughBehavior(): void;
    get passthroughBehaviorInput(): string | undefined;
    private _requestParameters?;
    get requestParameters(): {
        [key: string]: string;
    };
    set requestParameters(value: {
        [key: string]: string;
    });
    resetRequestParameters(): void;
    get requestParametersInput(): {
        [key: string]: string;
    } | undefined;
    private _requestTemplates?;
    get requestTemplates(): {
        [key: string]: string;
    };
    set requestTemplates(value: {
        [key: string]: string;
    });
    resetRequestTemplates(): void;
    get requestTemplatesInput(): {
        [key: string]: string;
    } | undefined;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string | undefined;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string | undefined;
    private _timeoutMilliseconds?;
    get timeoutMilliseconds(): number;
    set timeoutMilliseconds(value: number);
    resetTimeoutMilliseconds(): void;
    get timeoutMillisecondsInput(): number | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    private _uri?;
    get uri(): string;
    set uri(value: string);
    resetUri(): void;
    get uriInput(): string | undefined;
    private _tlsConfig;
    get tlsConfig(): ApiGatewayIntegrationTlsConfigOutputReference;
    putTlsConfig(value: ApiGatewayIntegrationTlsConfig): void;
    resetTlsConfig(): void;
    get tlsConfigInput(): ApiGatewayIntegrationTlsConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
