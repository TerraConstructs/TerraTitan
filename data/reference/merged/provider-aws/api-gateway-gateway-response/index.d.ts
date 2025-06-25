/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayGatewayResponseConfig extends cdktf.TerraformMetaArguments {
    /** */
    readonly id?: string;
    /** (Optional) Map of parameters (paths, query strings and headers) of the Gateway Response. */
    readonly responseParameters?: {
        [key: string]: string;
    };
    /** (Optional) Map of templates used to transform the response body. */
    readonly responseTemplates?: {
        [key: string]: string;
    };
    /** (Required) Response type of the associated GatewayResponse. */
    readonly responseType: string;
    /** (Required) String identifier of the associated REST API. */
    readonly restApiId: string;
    /** (Optional) HTTP status code of the Gateway Response. */
    readonly statusCode?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_gateway_response aws_api_gateway_gateway_response}
*/
export declare class ApiGatewayGatewayResponse extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_gateway_response";
    /**
    * Generates CDKTF code for importing a ApiGatewayGatewayResponse resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayGatewayResponse to import
    * @param importFromId The id of the existing ApiGatewayGatewayResponse that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_gateway_response#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayGatewayResponse to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_gateway_response aws_api_gateway_gateway_response} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayGatewayResponseConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayGatewayResponseConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
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
    private _responseType?;
    get responseType(): string;
    set responseType(value: string);
    get responseTypeInput(): string | undefined;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string | undefined;
    private _statusCode?;
    get statusCode(): string;
    set statusCode(value: string);
    resetStatusCode(): void;
    get statusCodeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
