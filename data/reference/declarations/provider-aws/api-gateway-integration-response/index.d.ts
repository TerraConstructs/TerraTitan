/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayIntegrationResponseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration_response#content_handling ApiGatewayIntegrationResponse#content_handling}
    */
    readonly contentHandling?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration_response#http_method ApiGatewayIntegrationResponse#http_method}
    */
    readonly httpMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration_response#id ApiGatewayIntegrationResponse#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration_response#resource_id ApiGatewayIntegrationResponse#resource_id}
    */
    readonly resourceId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration_response#response_parameters ApiGatewayIntegrationResponse#response_parameters}
    */
    readonly responseParameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration_response#response_templates ApiGatewayIntegrationResponse#response_templates}
    */
    readonly responseTemplates?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration_response#rest_api_id ApiGatewayIntegrationResponse#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration_response#selection_pattern ApiGatewayIntegrationResponse#selection_pattern}
    */
    readonly selectionPattern?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration_response#status_code ApiGatewayIntegrationResponse#status_code}
    */
    readonly statusCode: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration_response aws_api_gateway_integration_response}
*/
export declare class ApiGatewayIntegrationResponse extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_integration_response";
    /**
    * Generates CDKTF code for importing a ApiGatewayIntegrationResponse resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayIntegrationResponse to import
    * @param importFromId The id of the existing ApiGatewayIntegrationResponse that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration_response#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayIntegrationResponse to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_integration_response aws_api_gateway_integration_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayIntegrationResponseConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayIntegrationResponseConfig);
    private _contentHandling?;
    get contentHandling(): string;
    set contentHandling(value: string);
    resetContentHandling(): void;
    get contentHandlingInput(): string | undefined;
    private _httpMethod?;
    get httpMethod(): string;
    set httpMethod(value: string);
    get httpMethodInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string | undefined;
    private _responseParameters?;
    get responseParameters(): {
        [key: string]: string;
    };
    set responseParameters(value: {
        [key: string]: string;
    });
    resetResponseParameters(): void;
    get responseParametersInput(): {
        [key: string]: string;
    } | undefined;
    private _responseTemplates?;
    get responseTemplates(): {
        [key: string]: string;
    };
    set responseTemplates(value: {
        [key: string]: string;
    });
    resetResponseTemplates(): void;
    get responseTemplatesInput(): {
        [key: string]: string;
    } | undefined;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string | undefined;
    private _selectionPattern?;
    get selectionPattern(): string;
    set selectionPattern(value: string);
    resetSelectionPattern(): void;
    get selectionPatternInput(): string | undefined;
    private _statusCode?;
    get statusCode(): string;
    set statusCode(value: string);
    get statusCodeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
