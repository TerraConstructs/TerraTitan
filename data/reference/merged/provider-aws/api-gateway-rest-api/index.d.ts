/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayRestApiConfig extends cdktf.TerraformMetaArguments {
    /** (Optional) Source of the API key for requests. Valid values are `HEADER` (default) and `AUTHORIZER`. If importing an OpenAPI specification via the `body` argument, this corresponds to the [`x-amazon-apigateway-api-key-source` extension](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-api-key-source.html). If the argument value is provided and is different than the OpenAPI value, the argument value will override the OpenAPI value. */
    readonly apiKeySource?: string;
    /** (Optional) List of binary media types supported by the REST API. By default, the REST API supports only UTF-8-encoded text payloads. If importing an OpenAPI specification via the `body` argument, this corresponds to the [`x-amazon-apigateway-binary-media-types` extension](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-binary-media-types.html). If the argument value is provided and is different than the OpenAPI value, the argument value will override the OpenAPI value. */
    readonly binaryMediaTypes?: string[];
    /** (Optional) OpenAPI specification that defines the set of routes and integrations to create as part of the REST API. This configuration, and any updates to it, will replace all REST API configuration except values overridden in this resource configuration and other resource updates applied after this resource but before any `aws_api_gateway_deployment` creation. More information about REST API OpenAPI support can be found in the [API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api.html). */
    readonly body?: string;
    /** (Optional) Description of the REST API. If importing an OpenAPI specification via the `body` argument, this corresponds to the `info.description` field. If the argument value is provided and is different than the OpenAPI value, the argument value will override the OpenAPI value. */
    readonly description?: string;
    /** (Optional) Whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint. Defaults to `false`. If importing an OpenAPI specification via the `body` argument, this corresponds to the [`x-amazon-apigateway-endpoint-configuration` extension `disableExecuteApiEndpoint` property](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-endpoint-configuration.html). If the argument value is `true` and is different than the OpenAPI value, the argument value will override the OpenAPI value. */
    readonly disableExecuteApiEndpoint?: boolean | cdktf.IResolvable;
    /** (Optional) Whether warnings while API Gateway is creating or updating the resource should return an error or not. Defaults to `false` */
    readonly failOnWarnings?: boolean | cdktf.IResolvable;
    /** */
    readonly id?: string;
    /** (Optional) Minimum response size to compress for the REST API. String containing an integer value between `-1` and `10485760` (10MB). `-1` will disable an existing compression configuration, and all other values will enable compression with the configured size. New resources can simply omit this argument to disable compression, rather than setting the value to `-1`. If importing an OpenAPI specification via the `body` argument, this corresponds to the [`x-amazon-apigateway-minimum-compression-size` extension](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-openapi-minimum-compression-size.html). If the argument value is provided and is different than the OpenAPI value, the argument value will override the OpenAPI value. */
    readonly minimumCompressionSize?: string;
    /** (Required) Name of the REST API. If importing an OpenAPI specification via the `body` argument, this corresponds to the `info.title` field. If the argument value is different than the OpenAPI value, the argument value will override the OpenAPI value. */
    readonly name: string;
    /** (Optional) Map of customizations for importing the specification in the `body` argument. For example, to exclude DocumentationParts from an imported API, set `ignore` equal to `documentation`. Additional documentation, including other parameters such as `basepath`, can be found in the [API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api.html). */
    readonly parameters?: {
        [key: string]: string;
    };
    /** (Optional) JSON formatted policy document that controls access to the API Gateway. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). Terraform will only perform drift detection of its value when present in a configuration. We recommend using the [`aws_api_gateway_rest_api_policy` resource](/docs/providers/aws/r/api_gateway_rest_api_policy.html) instead. If importing an OpenAPI specification via the `body` argument, this corresponds to the [`x-amazon-apigateway-policy` extension](https://docs.aws.amazon.com/apigateway/latest/developerguide/openapi-extensions-policy.html). If the argument value is provided and is different than the OpenAPI value, the argument value will override the OpenAPI value. */
    readonly policy?: string;
    /** (Optional) Mode of the PutRestApi operation when importing an OpenAPI specification via the `body` argument (create or update operation). Valid values are `merge` and `overwrite`. If unspecificed, defaults to `overwrite` (for backwards compatibility). This corresponds to the [`x-amazon-apigateway-put-integration-method` extension](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-put-integration-method.html). If the argument value is provided and is different than the OpenAPI value, the argument value will override the OpenAPI value. */
    readonly putRestApiMode?: string;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`defaultTags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    readonly tags?: {
        [key: string]: string;
    };
    /** */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /** */
    readonly endpointConfiguration?: ApiGatewayRestApiEndpointConfiguration;
}
export interface ApiGatewayRestApiEndpointConfiguration {
    /** (Optional) The IP address types that can invoke an API (RestApi). Valid values: `ipv4`, `dualstack`. Use `ipv4` to allow only IPv4 addresses to invoke an API, or use `dualstack` to allow both IPv4 and IPv6 addresses to invoke an API. For the `PRIVATE` endpoint type, only `dualstack` is supported. Terraform performs drift detection for this argument only when the value is provided. */
    readonly ipAddressType?: string;
    /** (Required) List of endpoint types. This resource currently only supports managing a single value. Valid values: `EDGE`, `REGIONAL` or `PRIVATE`. If unspecified, defaults to `EDGE`. If set to `PRIVATE` recommend to set `putRestApiMode` = `merge` to not cause the endpoints and associated Route53 records to be deleted. Refer to the [documentation](https://docs.aws.amazon.com/apigateway/latest/developerguide/create-regional-api.html) for more information on the difference between edge-optimized and regional APIs. */
    readonly types: string[];
    /** (Optional) Set of VPC Endpoint identifiers. It is only supported for `PRIVATE` endpoint type. If importing an OpenAPI specification via the `body` argument, this corresponds to the [`x-amazon-apigateway-endpoint-configuration` extension `vpcEndpointIds` property](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions-endpoint-configuration.html). If the argument value is provided and is different than the OpenAPI value, **the argument value will override the OpenAPI value**. */
    readonly vpcEndpointIds?: string[];
}
export declare function apiGatewayRestApiEndpointConfigurationToTerraform(struct?: ApiGatewayRestApiEndpointConfigurationOutputReference | ApiGatewayRestApiEndpointConfiguration): any;
export declare function apiGatewayRestApiEndpointConfigurationToHclTerraform(struct?: ApiGatewayRestApiEndpointConfigurationOutputReference | ApiGatewayRestApiEndpointConfiguration): any;
export declare class ApiGatewayRestApiEndpointConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): ApiGatewayRestApiEndpointConfiguration | undefined;
    set internalValue(value: ApiGatewayRestApiEndpointConfiguration | undefined);
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    resetIpAddressType(): void;
    get ipAddressTypeInput(): string | undefined;
    private _types?;
    get types(): string[];
    set types(value: string[]);
    get typesInput(): string[] | undefined;
    private _vpcEndpointIds?;
    get vpcEndpointIds(): string[];
    set vpcEndpointIds(value: string[]);
    resetVpcEndpointIds(): void;
    get vpcEndpointIdsInput(): string[] | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_rest_api aws_api_gateway_rest_api}
*/
export declare class ApiGatewayRestApi extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_rest_api";
    /**
    * Generates CDKTF code for importing a ApiGatewayRestApi resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayRestApi to import
    * @param importFromId The id of the existing ApiGatewayRestApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_rest_api#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayRestApi to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_rest_api aws_api_gateway_rest_api} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayRestApiConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayRestApiConfig);
    private _apiKeySource?;
    get apiKeySource(): string;
    set apiKeySource(value: string);
    resetApiKeySource(): void;
    get apiKeySourceInput(): string | undefined;
    get arn(): string;
    private _binaryMediaTypes?;
    get binaryMediaTypes(): string[];
    set binaryMediaTypes(value: string[]);
    resetBinaryMediaTypes(): void;
    get binaryMediaTypesInput(): string[] | undefined;
    private _body?;
    get body(): string;
    set body(value: string);
    resetBody(): void;
    get bodyInput(): string | undefined;
    get createdDate(): string;
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
    private _minimumCompressionSize?;
    get minimumCompressionSize(): string;
    set minimumCompressionSize(value: string);
    resetMinimumCompressionSize(): void;
    get minimumCompressionSizeInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _parameters?;
    get parameters(): {
        [key: string]: string;
    };
    set parameters(value: {
        [key: string]: string;
    });
    resetParameters(): void;
    get parametersInput(): {
        [key: string]: string;
    } | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    resetPolicy(): void;
    get policyInput(): string | undefined;
    private _putRestApiMode?;
    get putRestApiMode(): string;
    set putRestApiMode(value: string);
    resetPutRestApiMode(): void;
    get putRestApiModeInput(): string | undefined;
    get rootResourceId(): string;
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
    private _endpointConfiguration;
    get endpointConfiguration(): ApiGatewayRestApiEndpointConfigurationOutputReference;
    putEndpointConfiguration(value: ApiGatewayRestApiEndpointConfiguration): void;
    resetEndpointConfiguration(): void;
    get endpointConfigurationInput(): ApiGatewayRestApiEndpointConfiguration | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
