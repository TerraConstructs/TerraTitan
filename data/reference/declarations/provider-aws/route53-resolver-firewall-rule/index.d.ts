/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface Route53ResolverFirewallRuleConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_rule#action Route53ResolverFirewallRule#action}
    */
    readonly action: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_rule#block_override_dns_type Route53ResolverFirewallRule#block_override_dns_type}
    */
    readonly blockOverrideDnsType?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_rule#block_override_domain Route53ResolverFirewallRule#block_override_domain}
    */
    readonly blockOverrideDomain?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_rule#block_override_ttl Route53ResolverFirewallRule#block_override_ttl}
    */
    readonly blockOverrideTtl?: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_rule#block_response Route53ResolverFirewallRule#block_response}
    */
    readonly blockResponse?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_rule#firewall_domain_list_id Route53ResolverFirewallRule#firewall_domain_list_id}
    */
    readonly firewallDomainListId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_rule#firewall_domain_redirection_action Route53ResolverFirewallRule#firewall_domain_redirection_action}
    */
    readonly firewallDomainRedirectionAction?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_rule#firewall_rule_group_id Route53ResolverFirewallRule#firewall_rule_group_id}
    */
    readonly firewallRuleGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_rule#id Route53ResolverFirewallRule#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_rule#name Route53ResolverFirewallRule#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_rule#priority Route53ResolverFirewallRule#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_rule#q_type Route53ResolverFirewallRule#q_type}
    */
    readonly qType?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_rule aws_route53_resolver_firewall_rule}
*/
export declare class Route53ResolverFirewallRule extends cdktf.TerraformResource {
    static readonly tfResourceType = "aws_route53_resolver_firewall_rule";
    /**
    * Generates CDKTF code for importing a Route53ResolverFirewallRule resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the Route53ResolverFirewallRule to import
    * @param importFromId The id of the existing Route53ResolverFirewallRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_rule#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the Route53ResolverFirewallRule to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/resources/route53_resolver_firewall_rule aws_route53_resolver_firewall_rule} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53ResolverFirewallRuleConfig
    */
    constructor(scope: Construct, id: string, config: Route53ResolverFirewallRuleConfig);
    private _action?;
    get action(): string;
    set action(value: string);
    get actionInput(): string | undefined;
    private _blockOverrideDnsType?;
    get blockOverrideDnsType(): string;
    set blockOverrideDnsType(value: string);
    resetBlockOverrideDnsType(): void;
    get blockOverrideDnsTypeInput(): string | undefined;
    private _blockOverrideDomain?;
    get blockOverrideDomain(): string;
    set blockOverrideDomain(value: string);
    resetBlockOverrideDomain(): void;
    get blockOverrideDomainInput(): string | undefined;
    private _blockOverrideTtl?;
    get blockOverrideTtl(): number;
    set blockOverrideTtl(value: number);
    resetBlockOverrideTtl(): void;
    get blockOverrideTtlInput(): number | undefined;
    private _blockResponse?;
    get blockResponse(): string;
    set blockResponse(value: string);
    resetBlockResponse(): void;
    get blockResponseInput(): string | undefined;
    private _firewallDomainListId?;
    get firewallDomainListId(): string;
    set firewallDomainListId(value: string);
    get firewallDomainListIdInput(): string | undefined;
    private _firewallDomainRedirectionAction?;
    get firewallDomainRedirectionAction(): string;
    set firewallDomainRedirectionAction(value: string);
    resetFirewallDomainRedirectionAction(): void;
    get firewallDomainRedirectionActionInput(): string | undefined;
    private _firewallRuleGroupId?;
    get firewallRuleGroupId(): string;
    set firewallRuleGroupId(value: string);
    get firewallRuleGroupIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number | undefined;
    private _qType?;
    get qType(): string;
    set qType(value: string);
    resetQType(): void;
    get qTypeInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
