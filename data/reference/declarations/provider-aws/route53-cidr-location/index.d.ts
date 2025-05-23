/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53CidrLocationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_cidr_location#cidr_blocks Route53CidrLocation#cidr_blocks}
    */
    readonly cidrBlocks: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_cidr_location#cidr_collection_id Route53CidrLocation#cidr_collection_id}
    */
    readonly cidrCollectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_cidr_location#name Route53CidrLocation#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_cidr_location aws_route53_cidr_location}
*/
export declare class Route53CidrLocation extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53_cidr_location";
    /**
    * Generates CDKTF code for importing a Route53CidrLocation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53CidrLocation to import
    * @param importFromId The id of the existing Route53CidrLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_cidr_location#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53CidrLocation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_cidr_location aws_route53_cidr_location} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53CidrLocationConfig
    */
    constructor(scope: Construct, id: string, config: Route53CidrLocationConfig);
    private _cidrBlocks?;
    get cidrBlocks(): string[];
    set cidrBlocks(value: string[]);
    get cidrBlocksInput(): string[] | undefined;
    private _cidrCollectionId?;
    get cidrCollectionId(): string;
    set cidrCollectionId(value: string);
    get cidrCollectionIdInput(): string | undefined;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
