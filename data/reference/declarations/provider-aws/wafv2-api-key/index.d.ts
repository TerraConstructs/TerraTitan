/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Wafv2ApiKeyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Specifies whether this is for an AWS CloudFront distribution or for a regional application. Valid values are CLOUDFRONT or REGIONAL.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/wafv2_api_key#scope Wafv2ApiKey#scope}
    */
    readonly scope: string;
    /**
    * The domains that you want to be able to use the API key with, for example example.com. Maximum of 5 domains.
    *
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/wafv2_api_key#token_domains Wafv2ApiKey#token_domains}
    */
    readonly tokenDomains: string[];
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/wafv2_api_key aws_wafv2_api_key}
*/
export declare class Wafv2ApiKey extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_wafv2_api_key";
    /**
    * Generates CDKTF code for importing a Wafv2ApiKey resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Wafv2ApiKey to import
    * @param importFromId The id of the existing Wafv2ApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/wafv2_api_key#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Wafv2ApiKey to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.100.0/docs/resources/wafv2_api_key aws_wafv2_api_key} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2ApiKeyConfig
    */
    constructor(scope: Construct, id: string, config: Wafv2ApiKeyConfig);
    get apiKey(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string | undefined;
    private _tokenDomains?;
    get tokenDomains(): string[];
    set tokenDomains(value: string[]);
    get tokenDomainsInput(): string[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
