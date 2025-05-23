/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LightsailDomainEntryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_domain_entry#domain_name LightsailDomainEntry#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_domain_entry#id LightsailDomainEntry#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_domain_entry#is_alias LightsailDomainEntry#is_alias}
    */
    readonly isAlias?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_domain_entry#name LightsailDomainEntry#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_domain_entry#target LightsailDomainEntry#target}
    */
    readonly target: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_domain_entry#type LightsailDomainEntry#type}
    */
    readonly type: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_domain_entry aws_lightsail_domain_entry}
*/
export declare class LightsailDomainEntry extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_lightsail_domain_entry";
    /**
    * Generates CDKTF code for importing a LightsailDomainEntry resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the LightsailDomainEntry to import
    * @param importFromId The id of the existing LightsailDomainEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_domain_entry#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the LightsailDomainEntry to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/lightsail_domain_entry aws_lightsail_domain_entry} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailDomainEntryConfig
    */
    constructor(scope: Construct, id: string, config: LightsailDomainEntryConfig);
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _isAlias?;
    get isAlias(): boolean | cdktf.IResolvable;
    set isAlias(value: boolean | cdktf.IResolvable);
    resetIsAlias(): void;
    get isAliasInput(): boolean | cdktf.IResolvable | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _target?;
    get target(): string;
    set target(value: string);
    get targetInput(): string | undefined;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
