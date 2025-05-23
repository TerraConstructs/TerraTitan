/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2IntegrationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#api_id Apigatewayv2Integration#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#connection_id Apigatewayv2Integration#connection_id}
    */
    readonly connectionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#connection_type Apigatewayv2Integration#connection_type}
    */
    readonly connectionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#content_handling_strategy Apigatewayv2Integration#content_handling_strategy}
    */
    readonly contentHandlingStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#credentials_arn Apigatewayv2Integration#credentials_arn}
    */
    readonly credentialsArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#description Apigatewayv2Integration#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#id Apigatewayv2Integration#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#integration_method Apigatewayv2Integration#integration_method}
    */
    readonly integrationMethod?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#integration_subtype Apigatewayv2Integration#integration_subtype}
    */
    readonly integrationSubtype?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#integration_type Apigatewayv2Integration#integration_type}
    */
    readonly integrationType: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#integration_uri Apigatewayv2Integration#integration_uri}
    */
    readonly integrationUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#passthrough_behavior Apigatewayv2Integration#passthrough_behavior}
    */
    readonly passthroughBehavior?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#payload_format_version Apigatewayv2Integration#payload_format_version}
    */
    readonly payloadFormatVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#request_parameters Apigatewayv2Integration#request_parameters}
    */
    readonly requestParameters?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#request_templates Apigatewayv2Integration#request_templates}
    */
    readonly requestTemplates?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#template_selection_expression Apigatewayv2Integration#template_selection_expression}
    */
    readonly templateSelectionExpression?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#timeout_milliseconds Apigatewayv2Integration#timeout_milliseconds}
    */
    readonly timeoutMilliseconds?: number;
    /**
    * response_parameters block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#response_parameters Apigatewayv2Integration#response_parameters}
    */
    readonly responseParameters?: Apigatewayv2IntegrationResponseParameters[] | cdktf.IResolvable;
    /**
    * tls_config block
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#tls_config Apigatewayv2Integration#tls_config}
    */
    readonly tlsConfig?: Apigatewayv2IntegrationTlsConfig;
}
export interface Apigatewayv2IntegrationResponseParameters {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#mappings Apigatewayv2Integration#mappings}
    */
    readonly mappings: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#status_code Apigatewayv2Integration#status_code}
    */
    readonly statusCode: string;
}
export declare function apigatewayv2IntegrationResponseParametersToTerraform(struct?: Apigatewayv2IntegrationResponseParameters | cdktf.IResolvable): any;
export declare function apigatewayv2IntegrationResponseParametersToHclTerraform(struct?: Apigatewayv2IntegrationResponseParameters | cdktf.IResolvable): any;
export declare class Apigatewayv2IntegrationResponseParametersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    private resolvableValue?;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): Apigatewayv2IntegrationResponseParameters | cdktf.IResolvable | undefined;
    set internalValue(value: Apigatewayv2IntegrationResponseParameters | cdktf.IResolvable | undefined);
    private _mappings?;
    get mappings(): {
        [key: string]: string;
    };
    set mappings(value: {
        [key: string]: string;
    });
    get mappingsInput(): {
        [key: string]: string;
    } | undefined;
    private _statusCode?;
    get statusCode(): string;
    set statusCode(value: string);
    get statusCodeInput(): string | undefined;
}
export declare class Apigatewayv2IntegrationResponseParametersList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    internalValue?: Apigatewayv2IntegrationResponseParameters[] | cdktf.IResolvable;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): Apigatewayv2IntegrationResponseParametersOutputReference;
}
export interface Apigatewayv2IntegrationTlsConfig {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#server_name_to_verify Apigatewayv2Integration#server_name_to_verify}
    */
    readonly serverNameToVerify?: string;
}
export declare function apigatewayv2IntegrationTlsConfigToTerraform(struct?: Apigatewayv2IntegrationTlsConfigOutputReference | Apigatewayv2IntegrationTlsConfig): any;
export declare function apigatewayv2IntegrationTlsConfigToHclTerraform(struct?: Apigatewayv2IntegrationTlsConfigOutputReference | Apigatewayv2IntegrationTlsConfig): any;
export declare class Apigatewayv2IntegrationTlsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string);
    get internalValue(): Apigatewayv2IntegrationTlsConfig | undefined;
    set internalValue(value: Apigatewayv2IntegrationTlsConfig | undefined);
    private _serverNameToVerify?;
    get serverNameToVerify(): string;
    set serverNameToVerify(value: string);
    resetServerNameToVerify(): void;
    get serverNameToVerifyInput(): string | undefined;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration aws_apigatewayv2_integration}
*/
export declare class Apigatewayv2Integration extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_apigatewayv2_integration";
    /**
    * Generates CDKTF code for importing a Apigatewayv2Integration resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Apigatewayv2Integration to import
    * @param importFromId The id of the existing Apigatewayv2Integration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Apigatewayv2Integration to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_integration aws_apigatewayv2_integration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2IntegrationConfig
    */
    constructor(scope: Construct, id: string, config: Apigatewayv2IntegrationConfig);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string | undefined;
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
    private _contentHandlingStrategy?;
    get contentHandlingStrategy(): string;
    set contentHandlingStrategy(value: string);
    resetContentHandlingStrategy(): void;
    get contentHandlingStrategyInput(): string | undefined;
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
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _integrationMethod?;
    get integrationMethod(): string;
    set integrationMethod(value: string);
    resetIntegrationMethod(): void;
    get integrationMethodInput(): string | undefined;
    get integrationResponseSelectionExpression(): string;
    private _integrationSubtype?;
    get integrationSubtype(): string;
    set integrationSubtype(value: string);
    resetIntegrationSubtype(): void;
    get integrationSubtypeInput(): string | undefined;
    private _integrationType?;
    get integrationType(): string;
    set integrationType(value: string);
    get integrationTypeInput(): string | undefined;
    private _integrationUri?;
    get integrationUri(): string;
    set integrationUri(value: string);
    resetIntegrationUri(): void;
    get integrationUriInput(): string | undefined;
    private _passthroughBehavior?;
    get passthroughBehavior(): string;
    set passthroughBehavior(value: string);
    resetPassthroughBehavior(): void;
    get passthroughBehaviorInput(): string | undefined;
    private _payloadFormatVersion?;
    get payloadFormatVersion(): string;
    set payloadFormatVersion(value: string);
    resetPayloadFormatVersion(): void;
    get payloadFormatVersionInput(): string | undefined;
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
    private _templateSelectionExpression?;
    get templateSelectionExpression(): string;
    set templateSelectionExpression(value: string);
    resetTemplateSelectionExpression(): void;
    get templateSelectionExpressionInput(): string | undefined;
    private _timeoutMilliseconds?;
    get timeoutMilliseconds(): number;
    set timeoutMilliseconds(value: number);
    resetTimeoutMilliseconds(): void;
    get timeoutMillisecondsInput(): number | undefined;
    private _responseParameters;
    get responseParameters(): Apigatewayv2IntegrationResponseParametersList;
    putResponseParameters(value: Apigatewayv2IntegrationResponseParameters[] | cdktf.IResolvable): void;
    resetResponseParameters(): void;
    get responseParametersInput(): cdktf.IResolvable | Apigatewayv2IntegrationResponseParameters[] | undefined;
    private _tlsConfig;
    get tlsConfig(): Apigatewayv2IntegrationTlsConfigOutputReference;
    putTlsConfig(value: Apigatewayv2IntegrationTlsConfig): void;
    resetTlsConfig(): void;
    get tlsConfigInput(): Apigatewayv2IntegrationTlsConfig | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
