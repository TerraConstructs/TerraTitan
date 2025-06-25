/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayRestApiPolicyConfig extends cdktf.TerraformMetaArguments {
    /** */
    readonly id?: string;
    /** (Required) JSON formatted policy document that controls access to the API Gateway. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy) */
    readonly policy: string;
    /** (Required) ID of the REST API. */
    readonly restApiId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_rest_api_policy aws_api_gateway_rest_api_policy}
*/
export declare class ApiGatewayRestApiPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_rest_api_policy";
    /**
    * Generates CDKTF code for importing a ApiGatewayRestApiPolicy resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayRestApiPolicy to import
    * @param importFromId The id of the existing ApiGatewayRestApiPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_rest_api_policy#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayRestApiPolicy to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_rest_api_policy aws_api_gateway_rest_api_policy} Resource
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
