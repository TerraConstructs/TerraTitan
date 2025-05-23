/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsRoute53ResolverFirewallRulesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_rules#action DataAwsRoute53ResolverFirewallRules#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_rules#firewall_rule_group_id DataAwsRoute53ResolverFirewallRules#firewall_rule_group_id}
    */
    readonly firewallRuleGroupId: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_rules#id DataAwsRoute53ResolverFirewallRules#id}
    *
    * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
    * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_rules#priority DataAwsRoute53ResolverFirewallRules#priority}
    */
    readonly priority?: number;
}
export interface DataAwsRoute53ResolverFirewallRulesFirewallRules {
}
export declare function dataAwsRoute53ResolverFirewallRulesFirewallRulesToTerraform(struct?: DataAwsRoute53ResolverFirewallRulesFirewallRules): any;
export declare function dataAwsRoute53ResolverFirewallRulesFirewallRulesToHclTerraform(struct?: DataAwsRoute53ResolverFirewallRulesFirewallRules): any;
export declare class DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param complexObjectIndex the index of this item in the list
    * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean);
    get internalValue(): DataAwsRoute53ResolverFirewallRulesFirewallRules | undefined;
    set internalValue(value: DataAwsRoute53ResolverFirewallRulesFirewallRules | undefined);
    get action(): string;
    get blockOverrideDnsType(): string;
    get blockOverrideDomain(): string;
    get blockOverrideTtl(): number;
    get blockResponse(): string;
    get creationTime(): string;
    get creatorRequestId(): string;
    get firewallDomainListId(): string;
    get firewallRuleGroupId(): string;
    get modificationTime(): string;
    get name(): string;
    get priority(): number;
}
export declare class DataAwsRoute53ResolverFirewallRulesFirewallRulesList extends cdktf.ComplexList {
    protected terraformResource: cdktf.IInterpolatingParent;
    protected terraformAttribute: string;
    protected wrapsSet: boolean;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
    */
    constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean);
    /**
    * @param index the index of the item to return
    */
    get(index: number): DataAwsRoute53ResolverFirewallRulesFirewallRulesOutputReference;
}
/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_rules aws_route53_resolver_firewall_rules}
*/
export declare class DataAwsRoute53ResolverFirewallRules extends cdktf.TerraformDataSource {
    static readonly tfResourceType = "aws_route53_resolver_firewall_rules";
    /**
    * Generates CDKTF code for importing a DataAwsRoute53ResolverFirewallRules resource upon running "cdktf plan <stack-name>"
    * @param scope The scope in which to define this construct
    * @param importToId The construct id used in the generated config for the DataAwsRoute53ResolverFirewallRules to import
    * @param importFromId The id of the existing DataAwsRoute53ResolverFirewallRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_rules#import import section} in the documentation of this resource for the id to use
    * @param provider? Optional instance of the provider where the DataAwsRoute53ResolverFirewallRules to import is found
    */
    static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider): cdktf.ImportableResource;
    /**
    * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.88.0/docs/data-sources/route53_resolver_firewall_rules aws_route53_resolver_firewall_rules} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRoute53ResolverFirewallRulesConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsRoute53ResolverFirewallRulesConfig);
    private _action?;
    get action(): string;
    set action(value: string);
    resetAction(): void;
    get actionInput(): string | undefined;
    private _firewallRuleGroupId?;
    get firewallRuleGroupId(): string;
    set firewallRuleGroupId(value: string);
    get firewallRuleGroupIdInput(): string | undefined;
    private _firewallRules;
    get firewallRules(): DataAwsRoute53ResolverFirewallRulesFirewallRulesList;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string | undefined;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
    protected synthesizeHclAttributes(): {
        [name: string]: any;
    };
}
