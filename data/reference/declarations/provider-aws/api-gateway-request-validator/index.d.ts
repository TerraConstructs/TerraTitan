/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayRequestValidatorConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_request_validator#id ApiGatewayRequestValidator#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_request_validator#name ApiGatewayRequestValidator#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_request_validator#rest_api_id ApiGatewayRequestValidator#rest_api_id}
    */
    readonly restApiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_request_validator#validate_request_body ApiGatewayRequestValidator#validate_request_body}
    */
    readonly validateRequestBody?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_request_validator#validate_request_parameters ApiGatewayRequestValidator#validate_request_parameters}
    */
    readonly validateRequestParameters?: boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_request_validator aws_api_gateway_request_validator}
*/
export declare class ApiGatewayRequestValidator extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_request_validator";
    /**
    * Generates CDKTF code for importing a ApiGatewayRequestValidator resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayRequestValidator to import
    * @param importFromId The id of the existing ApiGatewayRequestValidator that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_request_validator#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayRequestValidator to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_request_validator aws_api_gateway_request_validator} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayRequestValidatorConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayRequestValidatorConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _restApiId?;
    get restApiId(): string;
    set restApiId(value: string);
    get restApiIdInput(): string | undefined;
    private _validateRequestBody?;
    get validateRequestBody(): boolean | cdktf.IResolvable;
    set validateRequestBody(value: boolean | cdktf.IResolvable);
    resetValidateRequestBody(): void;
    get validateRequestBodyInput(): boolean | cdktf.IResolvable | undefined;
    private _validateRequestParameters?;
    get validateRequestParameters(): boolean | cdktf.IResolvable;
    set validateRequestParameters(value: boolean | cdktf.IResolvable);
    resetValidateRequestParameters(): void;
    get validateRequestParametersInput(): boolean | cdktf.IResolvable | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
