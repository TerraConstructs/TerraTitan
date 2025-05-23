/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_rule_group_association#firewall_rule_group_association_id DataAwsRoute53ResolverFirewallRuleGroupAssociation#firewall_rule_group_association_id}
    */
    readonly firewallRuleGroupAssociationId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_rule_group_association#id DataAwsRoute53ResolverFirewallRuleGroupAssociation#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_rule_group_association aws_route53_resolver_firewall_rule_group_association}
*/
export declare class DataAwsRoute53ResolverFirewallRuleGroupAssociation extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_route53_resolver_firewall_rule_group_association";
    /**
    * Generates CDKTF code for importing a DataAwsRoute53ResolverFirewallRuleGroupAssociation resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRoute53ResolverFirewallRuleGroupAssociation to import
    * @param importFromId The id of the existing DataAwsRoute53ResolverFirewallRuleGroupAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_rule_group_association#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRoute53ResolverFirewallRuleGroupAssociation to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_rule_group_association aws_route53_resolver_firewall_rule_group_association} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRoute53ResolverFirewallRuleGroupAssociationConfig);
    get arn(): string;
    get creationTime(): string;
    get creatorRequestId(): string;
    private _firewallRuleGroupAssociationId?;
    get firewallRuleGroupAssociationId(): string;
    set firewallRuleGroupAssociationId(value: string);
    get firewallRuleGroupAssociationIdInput(): string | undefined;
    get firewallRuleGroupId(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    get managedOwnerName(): string;
    get modificationTime(): string;
    get mutationProtection(): string;
    get name(): string;
    get priority(): number;
    get status(): string;
    get statusMessage(): string;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
