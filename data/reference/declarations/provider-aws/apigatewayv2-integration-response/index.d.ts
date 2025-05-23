/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2IntegrationResponseConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration_response#api_id Apigatewayv2IntegrationResponse#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration_response#content_handling_strategy Apigatewayv2IntegrationResponse#content_handling_strategy}
    */
    readonly contentHandlingStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration_response#id Apigatewayv2IntegrationResponse#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration_response#integration_id Apigatewayv2IntegrationResponse#integration_id}
    */
    readonly integrationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration_response#integration_response_key Apigatewayv2IntegrationResponse#integration_response_key}
    */
    readonly integrationResponseKey: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration_response#response_templates Apigatewayv2IntegrationResponse#response_templates}
    */
    readonly responseTemplates?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration_response#template_selection_expression Apigatewayv2IntegrationResponse#template_selection_expression}
    */
    readonly templateSelectionExpression?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration_response aws_apigatewayv2_integration_response}
*/
export declare class Apigatewayv2IntegrationResponse extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_apigatewayv2_integration_response";
    /**
    * Generates CDKTF code for importing a Apigatewayv2IntegrationResponse resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Apigatewayv2IntegrationResponse to import
    * @param importFromId The id of the existing Apigatewayv2IntegrationResponse that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration_response#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Apigatewayv2IntegrationResponse to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration_response aws_apigatewayv2_integration_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2IntegrationResponseConfig
    */
    constructor(scope: Construct, id: string, config: Apigatewayv2IntegrationResponseConfig);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string | undefined;
    private _contentHandlingStrategy?;
    get contentHandlingStrategy(): string;
    set contentHandlingStrategy(value: string);
    resetContentHandlingStrategy(): void;
    get contentHandlingStrategyInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _integrationId?;
    get integrationId(): string;
    set integrationId(value: string);
    get integrationIdInput(): string | undefined;
    private _integrationResponseKey?;
    get integrationResponseKey(): string;
    set integrationResponseKey(value: string);
    get integrationResponseKeyInput(): string | undefined;
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
    private _templateSelectionExpression?;
    get templateSelectionExpression(): string;
    set templateSelectionExpression(value: string);
    resetTemplateSelectionExpression(): void;
    get templateSelectionExpressionInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
