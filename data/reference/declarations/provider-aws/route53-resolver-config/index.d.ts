/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_config#autodefined_reverse_flag Route53ResolverConfig#autodefined_reverse_flag}
    */
    readonly autodefinedReverseFlag: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_config#id Route53ResolverConfig#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_config#resource_id Route53ResolverConfig#resource_id}
    */
    readonly resourceId: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_config aws_route53_resolver_config}
*/
export declare class Route53ResolverConfig extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53_resolver_config";
    /**
    * Generates CDKTF code for importing a Route53ResolverConfig resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53ResolverConfig to import
    * @param importFromId The id of the existing Route53ResolverConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_config#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53ResolverConfig to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_config aws_route53_resolver_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverConfigConfig
    */
    constructor(scope: Construct, id: string, config: Route53ResolverConfigConfig);
    private _autodefinedReverseFlag?;
    get autodefinedReverseFlag(): string;
    set autodefinedReverseFlag(value: string);
    get autodefinedReverseFlagInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get ownerId(): string;
    private _resourceId?;
    get resourceId(): string;
    set resourceId(value: string);
    get resourceIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
