/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Apigatewayv2ApiMappingConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api_mapping#api_id Apigatewayv2ApiMapping#api_id}
    */
    readonly apiId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api_mapping#api_mapping_key Apigatewayv2ApiMapping#api_mapping_key}
    */
    readonly apiMappingKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api_mapping#domain_name Apigatewayv2ApiMapping#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api_mapping#id Apigatewayv2ApiMapping#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api_mapping#stage Apigatewayv2ApiMapping#stage}
    */
    readonly stage: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api_mapping aws_apigatewayv2_api_mapping}
*/
export declare class Apigatewayv2ApiMapping extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_apigatewayv2_api_mapping";
    /**
    * Generates CDKTF code for importing a Apigatewayv2ApiMapping resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Apigatewayv2ApiMapping to import
    * @param importFromId The id of the existing Apigatewayv2ApiMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api_mapping#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Apigatewayv2ApiMapping to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/apigatewayv2_api_mapping aws_apigatewayv2_api_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2ApiMappingConfig
    */
    constructor(scope: Construct, id: string, config: Apigatewayv2ApiMappingConfig);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string | undefined;
    private _apiMappingKey?;
    get apiMappingKey(): string;
    set apiMappingKey(value: string);
    resetApiMappingKey(): void;
    get apiMappingKeyInput(): string | undefined;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _stage?;
    get stage(): string;
    set stage(value: string);
    get stageInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
