/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayRestApiPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_rest_api_policy#id ApiGatewayRestApiPolicy#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_rest_api_policy#policy ApiGatewayRestApiPolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_rest_api_policy#rest_api_id ApiGatewayRestApiPolicy#rest_api_id}
    */
    readonly restApiId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_rest_api_policy aws_api_gateway_rest_api_policy}
*/
export declare class ApiGatewayRestApiPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_rest_api_policy";
    /**
    * Generates CDKTF code for importing a ApiGatewayRestApiPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayRestApiPolicy to import
    * @param importFromId The id of the existing ApiGatewayRestApiPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_rest_api_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayRestApiPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/api_gateway_rest_api_policy aws_api_gateway_rest_api_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayRestApiPolicyConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayRestApiPolicyConfig);
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string | undefined;
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
