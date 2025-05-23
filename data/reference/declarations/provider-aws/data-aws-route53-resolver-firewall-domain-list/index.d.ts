/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRoute53ResolverFirewallDomainListConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_domain_list#firewall_domain_list_id DataAwsRoute53ResolverFirewallDomainList#firewall_domain_list_id}
    */
    readonly firewallDomainListId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_domain_list#id DataAwsRoute53ResolverFirewallDomainList#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_domain_list aws_route53_resolver_firewall_domain_list}
*/
export declare class DataAwsRoute53ResolverFirewallDomainList extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_route53_resolver_firewall_domain_list";
    /**
    * Generates CDKTF code for importing a DataAwsRoute53ResolverFirewallDomainList resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRoute53ResolverFirewallDomainList to import
    * @param importFromId The id of the existing DataAwsRoute53ResolverFirewallDomainList that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_domain_list#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRoute53ResolverFirewallDomainList to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_domain_list aws_route53_resolver_firewall_domain_list} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ResolverFirewallDomainListConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRoute53ResolverFirewallDomainListConfig);
    get arn(): string;
    get creationTime(): string;
    get creatorRequestId(): string;
    get domainCount(): number;
    private _firewallDomainListId?;
    get firewallDomainListId(): string;
    set firewallDomainListId(value: string);
    get firewallDomainListIdInput(): string | undefined;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get managedOwnerName(): string;
    get modificationTime(): string;
    get name(): string;
    get status(): string;
    get statusMessage(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
