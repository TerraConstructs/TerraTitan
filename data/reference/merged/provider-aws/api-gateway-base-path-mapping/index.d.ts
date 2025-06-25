/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface ApiGatewayBasePathMappingConfig extends cdktf.TerraformMetaArguments {
    /** (Required) ID of the API to connect. */
    readonly apiId: string;
    /** (Optional) Path segment that must be prepended to the path when accessing the API via this mapping. If omitted, the API is exposed at the root of the given domain. */
    readonly basePath?: string;
    /** (Required) Already-registered domain name to connect the API to. */
    readonly domainName: string;
    /** */
    readonly domainNameId?: string;
    /** */
    readonly id?: string;
    /** (Optional) Name of a specific deployment stage to expose at the given path. If omitted, callers may select any stage by including its name as a path element after the base path. */
    readonly stageName?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_base_path_mapping aws_api_gateway_base_path_mapping}
*/
export declare class ApiGatewayBasePathMapping extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_api_gateway_base_path_mapping";
    /**
    * Generates CDKTF code for importing a ApiGatewayBasePathMapping resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the ApiGatewayBasePathMapping to import
    * @param importFromId The id of the existing ApiGatewayBasePathMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_base_path_mapping#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the ApiGatewayBasePathMapping to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/api_gateway_base_path_mapping aws_api_gateway_base_path_mapping} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayBasePathMappingConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayBasePathMappingConfig);
    private _apiId?;
    get apiId(): string;
    set apiId(value: string);
    get apiIdInput(): string | undefined;
    private _basePath?;
    get basePath(): string;
    set basePath(value: string);
    resetBasePath(): void;
    get basePathInput(): string | undefined;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _domainNameId?;
    get domainNameId(): string;
    set domainNameId(value: string);
    resetDomainNameId(): void;
    get domainNameIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _stageName?;
    get stageName(): string;
    set stageName(value: string);
    resetStageName(): void;
    get stageNameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
