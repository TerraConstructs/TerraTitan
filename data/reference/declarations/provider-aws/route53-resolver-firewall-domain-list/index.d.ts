/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverFirewallDomainListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_domain_list#domains Route53ResolverFirewallDomainList#domains}
    */
    readonly domains?: string[];
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_domain_list#id Route53ResolverFirewallDomainList#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_domain_list#name Route53ResolverFirewallDomainList#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_domain_list#tags Route53ResolverFirewallDomainList#tags}
    */
    readonly tags?: {
        [key: string]: string;
    };
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_domain_list#tags_all Route53ResolverFirewallDomainList#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_domain_list aws_route53_resolver_firewall_domain_list}
*/
export declare class Route53ResolverFirewallDomainList extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53_resolver_firewall_domain_list";
    /**
    * Generates CDKTF code for importing a Route53ResolverFirewallDomainList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53ResolverFirewallDomainList to import
    * @param importFromId The id of the existing Route53ResolverFirewallDomainList that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_domain_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53ResolverFirewallDomainList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_domain_list aws_route53_resolver_firewall_domain_list} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallDomainListConfig
    */
    constructor(scope: Construct, id: string, config: Route53ResolverFirewallDomainListConfig);
    get arn(): string;
    private _domains?;
    get domains(): string[];
    set domains(value: string[]);
    resetDomains(): void;
    get domainsInput(): string[] | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
