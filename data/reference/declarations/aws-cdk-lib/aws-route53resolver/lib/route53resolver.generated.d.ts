import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * High-level information about a list of firewall domains for use in a [AWS::Route53Resolver::FirewallRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-rule.html) . This is returned by [GetFirewallDomainList](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetFirewallDomainList.html) .
 *
 * To retrieve the domains that are defined for this domain list, call [ListFirewallDomains](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallDomains.html) .
 *
 * @cloudformationResource AWS::Route53Resolver::FirewallDomainList
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html
 */
export declare class CfnFirewallDomainList extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFirewallDomainList from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFirewallDomainList;
    /**
     * The Amazon Resource Name (ARN) of the firewall domain list.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time that the domain list was created, in Unix time format and Coordinated Universal Time (UTC).
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp.
     *
     * @cloudformationAttribute CreatorRequestId
     */
    readonly attrCreatorRequestId: string;
    /**
     * The number of domain names that are specified in the domain list.
     *
     * @cloudformationAttribute DomainCount
     */
    readonly attrDomainCount: number;
    /**
     * The ID of the domain list.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The owner of the list, used only for lists that are not managed by you. For example, the managed domain list `AWSManagedDomainsMalwareDomainList` has the managed owner name `Route 53 Resolver DNS Firewall` .
     *
     * @cloudformationAttribute ManagedOwnerName
     */
    readonly attrManagedOwnerName: string;
    /**
     * The date and time that the domain list was last modified, in Unix time format and Coordinated Universal Time (UTC).
     *
     * @cloudformationAttribute ModificationTime
     */
    readonly attrModificationTime: string;
    /**
     * The status of the domain list.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Additional information about the status of the list, if available.
     *
     * @cloudformationAttribute StatusMessage
     */
    readonly attrStatusMessage: string;
    /**
     * The fully qualified URL or URI of the file stored in Amazon Simple Storage Service (Amazon S3) that contains the list of domains to import.
     */
    domainFileUrl?: string;
    /**
     * A list of the domain lists that you have defined.
     */
    domains?: Array<string>;
    /**
     * The name of the domain list.
     */
    name?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of the tag keys and values that you want to associate with the domain list.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnFirewallDomainListProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnFirewallDomainList`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html
 */
export interface CfnFirewallDomainListProps {
    /**
     * The fully qualified URL or URI of the file stored in Amazon Simple Storage Service (Amazon S3) that contains the list of domains to import.
     *
     * The file must be in an S3 bucket that's in the same Region as your DNS Firewall. The file must be a text file and must contain a single domain per line.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html#cfn-route53resolver-firewalldomainlist-domainfileurl
     */
    readonly domainFileUrl?: string;
    /**
     * A list of the domain lists that you have defined.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html#cfn-route53resolver-firewalldomainlist-domains
     */
    readonly domains?: Array<string>;
    /**
     * The name of the domain list.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html#cfn-route53resolver-firewalldomainlist-name
     */
    readonly name?: string;
    /**
     * A list of the tag keys and values that you want to associate with the domain list.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewalldomainlist.html#cfn-route53resolver-firewalldomainlist-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * High-level information for a firewall rule group.
 *
 * A firewall rule group is a collection of rules that DNS Firewall uses to filter DNS network traffic for a VPC. To retrieve the rules for the rule group, call [ListFirewallRules](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListFirewallRules.html) .
 *
 * @cloudformationResource AWS::Route53Resolver::FirewallRuleGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html
 */
export declare class CfnFirewallRuleGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFirewallRuleGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFirewallRuleGroup;
    /**
     * The ARN (Amazon Resource Name) of the rule group.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time that the rule group was created, in Unix time format and Coordinated Universal Time (UTC).
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp.
     *
     * @cloudformationAttribute CreatorRequestId
     */
    readonly attrCreatorRequestId: string;
    /**
     * The ID of the rule group.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The date and time that the rule group was last modified, in Unix time format and Coordinated Universal Time (UTC).
     *
     * @cloudformationAttribute ModificationTime
     */
    readonly attrModificationTime: string;
    /**
     * The AWS account ID for the account that created the rule group. When a rule group is shared with your account, this is the account that has shared the rule group with you.
     *
     * @cloudformationAttribute OwnerId
     */
    readonly attrOwnerId: string;
    /**
     * The number of rules in the rule group.
     *
     * @cloudformationAttribute RuleCount
     */
    readonly attrRuleCount: number;
    /**
     * Whether the rule group is shared with other AWS accounts , or was shared with the current account by another AWS account . Sharing is configured through AWS Resource Access Manager ( AWS RAM ).
     *
     * @cloudformationAttribute ShareStatus
     */
    readonly attrShareStatus: string;
    /**
     * The status of the domain list.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Additional information about the status of the rule group, if available.
     *
     * @cloudformationAttribute StatusMessage
     */
    readonly attrStatusMessage: string;
    /**
     * A list of the rules that you have defined.
     */
    firewallRules?: Array<CfnFirewallRuleGroup.FirewallRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the rule group.
     */
    name?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of the tag keys and values that you want to associate with the rule group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnFirewallRuleGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFirewallRuleGroup {
    /**
     * A single firewall rule in a rule group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html
     */
    interface FirewallRuleProperty {
        /**
         * The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advvanced rule:  - `ALLOW` - Permit the request to go through.
         *
         * Not available for DNS Firewall Advanced rules.
         * - `ALERT` - Permit the request to go through but send an alert to the logs.
         * - `BLOCK` - Disallow the request. If this is specified,then `BlockResponse` must also be specified.
         *
         * if `BlockResponse` is `OVERRIDE` , then all of the following `OVERRIDE` attributes must be specified:
         *
         * - `BlockOverrideDnsType`
         * - `BlockOverrideDomain`
         * - `BlockOverrideTtl`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-action
         */
        readonly action: string;
        /**
         * The DNS record's type.
         *
         * This determines the format of the record value that you provided in `BlockOverrideDomain` . Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-blockoverridednstype
         */
        readonly blockOverrideDnsType?: string;
        /**
         * The custom DNS record to send back in response to the query.
         *
         * Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-blockoverridedomain
         */
        readonly blockOverrideDomain?: string;
        /**
         * The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record.
         *
         * Used for the rule action `BLOCK` with a `BlockResponse` setting of `OVERRIDE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-blockoverridettl
         */
        readonly blockOverrideTtl?: number;
        /**
         * The way that you want DNS Firewall to block the request. Used for the rule action setting `BLOCK` .
         *
         * - `NODATA` - Respond indicating that the query was successful, but no response is available for it.
         * - `NXDOMAIN` - Respond indicating that the domain name that's in the query doesn't exist.
         * - `OVERRIDE` - Provide a custom override in the response. This option requires custom handling details in the rule's `BlockOverride*` settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-blockresponse
         */
        readonly blockResponse?: string;
        /**
         * The confidence threshold for DNS Firewall Advanced.
         *
         * You must provide this value when you create a DNS Firewall Advanced rule. The confidence level values mean:
         *
         * - `LOW` : Provides the highest detection rate for threats, but also increases false positives.
         * - `MEDIUM` : Provides a balance between detecting threats and false positives.
         * - `HIGH` : Detects only the most well corroborated threats with a low rate of false positives.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-confidencethreshold
         */
        readonly confidenceThreshold?: string;
        /**
         * The type of the DNS Firewall Advanced rule. Valid values are:.
         *
         * - `DGA` : Domain generation algorithms detection. DGAs are used by attackers to generate a large number of domains to to launch malware attacks.
         * - `DNS_TUNNELING` : DNS tunneling detection. DNS tunneling is used by attackers to exfiltrate data from the client by using the DNS tunnel without making a network connection to the client.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-dnsthreatprotection
         */
        readonly dnsThreatProtection?: string;
        /**
         * The ID of the domain list that's used in the rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-firewalldomainlistid
         */
        readonly firewallDomainListId?: string;
        /**
         * How you want the the rule to evaluate DNS redirection in the DNS redirection chain, such as CNAME, or DNAME.
         *
         * `Inspect_Redirection_Domain` (Default) inspects all domains in the redirection chain. The individual domains in the redirection chain must be added to the domain list.
         *
         * `Trust_Redirection_Domain` inspects only the first domain in the redirection chain. You don't need to add the subsequent domains in the domain in the redirection list to the domain list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-firewalldomainredirectionaction
         */
        readonly firewallDomainRedirectionAction?: string;
        /**
         * ID of the DNS Firewall Advanced rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-firewallthreatprotectionid
         */
        readonly firewallThreatProtectionId?: string;
        /**
         * The priority of the rule in the rule group.
         *
         * This value must be unique within the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-priority
         */
        readonly priority: number;
        /**
         * The DNS query type you want the rule to evaluate. Allowed values are;
         *
         * - A: Returns an IPv4 address.
         * - AAAA: Returns an Ipv6 address.
         * - CAA: Restricts CAs that can create SSL/TLS certifications for the domain.
         * - CNAME: Returns another domain name.
         * - DS: Record that identifies the DNSSEC signing key of a delegated zone.
         * - MX: Specifies mail servers.
         * - NAPTR: Regular-expression-based rewriting of domain names.
         * - NS: Authoritative name servers.
         * - PTR: Maps an IP address to a domain name.
         * - SOA: Start of authority record for the zone.
         * - SPF: Lists the servers authorized to send emails from a domain.
         * - SRV: Application specific values that identify servers.
         * - TXT: Verifies email senders and application-specific values.
         * - A query type you define by using the DNS type ID, for example 28 for AAAA. The values must be defined as TYPE NUMBER , where the NUMBER can be 1-65334, for example, TYPE28. For more information, see [List of DNS record types](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/List_of_DNS_record_types) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-firewallrulegroup-firewallrule.html#cfn-route53resolver-firewallrulegroup-firewallrule-qtype
         */
        readonly qtype?: string;
    }
}
/**
 * Properties for defining a `CfnFirewallRuleGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html
 */
export interface CfnFirewallRuleGroupProps {
    /**
     * A list of the rules that you have defined.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html#cfn-route53resolver-firewallrulegroup-firewallrules
     */
    readonly firewallRules?: Array<CfnFirewallRuleGroup.FirewallRuleProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the rule group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html#cfn-route53resolver-firewallrulegroup-name
     */
    readonly name?: string;
    /**
     * A list of the tag keys and values that you want to associate with the rule group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroup.html#cfn-route53resolver-firewallrulegroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * An association between a firewall rule group and a VPC, which enables DNS filtering for the VPC.
 *
 * @cloudformationResource AWS::Route53Resolver::FirewallRuleGroupAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html
 */
export declare class CfnFirewallRuleGroupAssociation extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFirewallRuleGroupAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFirewallRuleGroupAssociation;
    /**
     * The Amazon Resource Name (ARN) of the firewall rule group association.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time that the association was created, in Unix time format and Coordinated Universal Time (UTC).
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp.
     *
     * @cloudformationAttribute CreatorRequestId
     */
    readonly attrCreatorRequestId: string;
    /**
     * The identifier for the association.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The owner of the association, used only for associations that are not managed by you. If you use AWS Firewall Manager to manage your firewallls from DNS Firewall, then this reports Firewall Manager as the managed owner.
     *
     * @cloudformationAttribute ManagedOwnerName
     */
    readonly attrManagedOwnerName: string;
    /**
     * The date and time that the association was last modified, in Unix time format and Coordinated Universal Time (UTC).
     *
     * @cloudformationAttribute ModificationTime
     */
    readonly attrModificationTime: string;
    /**
     * The current status of the association.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Additional information about the status of the response, if available.
     *
     * @cloudformationAttribute StatusMessage
     */
    readonly attrStatusMessage: string;
    /**
     * The unique identifier of the firewall rule group.
     */
    firewallRuleGroupId: string;
    /**
     * If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections.
     */
    mutationProtection?: string;
    /**
     * The name of the association.
     */
    name?: string;
    /**
     * The setting that determines the processing order of the rule group among the rule groups that are associated with a single VPC.
     */
    priority: number;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of the tag keys and values that you want to associate with the rule group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The unique identifier of the VPC that is associated with the rule group.
     */
    vpcId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFirewallRuleGroupAssociationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnFirewallRuleGroupAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html
 */
export interface CfnFirewallRuleGroupAssociationProps {
    /**
     * The unique identifier of the firewall rule group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-firewallrulegroupid
     */
    readonly firewallRuleGroupId: string;
    /**
     * If enabled, this setting disallows modification or removal of the association, to help prevent against accidentally altering DNS firewall protections.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-mutationprotection
     */
    readonly mutationProtection?: string;
    /**
     * The name of the association.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-name
     */
    readonly name?: string;
    /**
     * The setting that determines the processing order of the rule group among the rule groups that are associated with a single VPC.
     *
     * DNS Firewall filters VPC traffic starting from rule group with the lowest numeric priority setting.
     *
     * You must specify a unique priority for each rule group that you associate with a single VPC. To make it easier to insert rule groups later, leave space between the numbers, for example, use 101, 200, and so on. You can change the priority setting for a rule group association after you create it.
     *
     * The allowed values for `Priority` are between 100 and 9900 (excluding 100 and 9900).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-priority
     */
    readonly priority: number;
    /**
     * A list of the tag keys and values that you want to associate with the rule group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The unique identifier of the VPC that is associated with the rule group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-firewallrulegroupassociation.html#cfn-route53resolver-firewallrulegroupassociation-vpcid
     */
    readonly vpcId: string;
}
/**
 * Creates a Amazon Route 53 Resolver on an Outpost.
 *
 * @cloudformationResource AWS::Route53Resolver::OutpostResolver
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-outpostresolver.html
 */
export declare class CfnOutpostResolver extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnOutpostResolver from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnOutpostResolver;
    /**
     * The ARN (Amazon Resource Name) for the Resolver on an Outpost.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time that the Outpost Resolver was created, in Unix time format and Coordinated Universal Time (UTC).
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * A unique string that identifies the request that created the Resolver endpoint. The `CreatorRequestId` allows failed requests to be retried without the risk of running the operation twice.
     *
     * @cloudformationAttribute CreatorRequestId
     */
    readonly attrCreatorRequestId: string;
    /**
     * The ID of the Resolver on Outpost.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The date and time that the Outpost Resolver was modified, in Unix time format and Coordinated Universal Time (UTC).
     *
     * @cloudformationAttribute ModificationTime
     */
    readonly attrModificationTime: string;
    /**
     * Status of the Resolver.
     *
     * Valid Values: CREATING | OPERATIONAL | UPDATING | DELETING | ACTION_NEEDED | FAILED_CREATION | FAILED_DELETION.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * A detailed description of the Resolver.
     *
     * @cloudformationAttribute StatusMessage
     */
    readonly attrStatusMessage: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * Amazon EC2 instance count for the Resolver on the Outpost.
     */
    instanceCount?: number;
    /**
     * Name of the Resolver.
     */
    name: string;
    /**
     * The ARN (Amazon Resource Name) for the Outpost.
     */
    outpostArn: string;
    /**
     * The Amazon EC2 instance type.
     */
    preferredInstanceType: string;
    /**
     * A key value pair that helps you identify a Route 53 Resolver .
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnOutpostResolverProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnOutpostResolver`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-outpostresolver.html
 */
export interface CfnOutpostResolverProps {
    /**
     * Amazon EC2 instance count for the Resolver on the Outpost.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-outpostresolver.html#cfn-route53resolver-outpostresolver-instancecount
     */
    readonly instanceCount?: number;
    /**
     * Name of the Resolver.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-outpostresolver.html#cfn-route53resolver-outpostresolver-name
     */
    readonly name: string;
    /**
     * The ARN (Amazon Resource Name) for the Outpost.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-outpostresolver.html#cfn-route53resolver-outpostresolver-outpostarn
     */
    readonly outpostArn: string;
    /**
     * The Amazon EC2 instance type.
     *
     * If you specify this, you must also specify a value for the `OutpostArn` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-outpostresolver.html#cfn-route53resolver-outpostresolver-preferredinstancetype
     */
    readonly preferredInstanceType: string;
    /**
     * A key value pair that helps you identify a Route 53 Resolver .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-outpostresolver.html#cfn-route53resolver-outpostresolver-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * A complex type that contains information about a Resolver configuration for a VPC.
 *
 * @cloudformationResource AWS::Route53Resolver::ResolverConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html
 */
export declare class CfnResolverConfig extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResolverConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResolverConfig;
    /**
     * The status of whether or not the Route 53 Resolver will create autodefined rules for reverse DNS lookups. This is enabled by default.
     *
     * @cloudformationAttribute AutodefinedReverse
     */
    readonly attrAutodefinedReverse: string;
    /**
     * ID for the Route 53 Resolver configuration.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The owner account ID of the Amazon Virtual Private Cloud VPC.
     *
     * @cloudformationAttribute OwnerId
     */
    readonly attrOwnerId: string;
    /**
     * Represents the desired status of `AutodefinedReverse` .
     */
    autodefinedReverseFlag: string;
    /**
     * The ID of the Amazon Virtual Private Cloud VPC that you're configuring Resolver for.
     */
    resourceId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResolverConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnResolverConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html
 */
export interface CfnResolverConfigProps {
    /**
     * Represents the desired status of `AutodefinedReverse` .
     *
     * The only supported value on creation is `DISABLE` . Deletion of this resource will return `AutodefinedReverse` to its default value of `ENABLED` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html#cfn-route53resolver-resolverconfig-autodefinedreverseflag
     */
    readonly autodefinedReverseFlag: string;
    /**
     * The ID of the Amazon Virtual Private Cloud VPC that you're configuring Resolver for.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverconfig.html#cfn-route53resolver-resolverconfig-resourceid
     */
    readonly resourceId: string;
}
/**
 * The `AWS::Route53Resolver::ResolverDNSSECConfig` resource is a complex type that contains information about a configuration for DNSSEC validation.
 *
 * @cloudformationResource AWS::Route53Resolver::ResolverDNSSECConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverdnssecconfig.html
 */
export declare class CfnResolverDNSSECConfig extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResolverDNSSECConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResolverDNSSECConfig;
    /**
     * The primary identifier of this `ResolverDNSSECConfig` resource. For example: `rdsc-689d45d1ae623bf3` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The AWS account of the owner. For example: `111122223333` .
     *
     * @cloudformationAttribute OwnerId
     */
    readonly attrOwnerId: string;
    /**
     * The current status of this `ResolverDNSSECConfig` resource. For example: `Enabled` .
     *
     * @cloudformationAttribute ValidationStatus
     */
    readonly attrValidationStatus: string;
    /**
     * The ID of the virtual private cloud (VPC) that you're configuring the DNSSEC validation status for.
     */
    resourceId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnResolverDNSSECConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnResolverDNSSECConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverdnssecconfig.html
 */
export interface CfnResolverDNSSECConfigProps {
    /**
     * The ID of the virtual private cloud (VPC) that you're configuring the DNSSEC validation status for.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverdnssecconfig.html#cfn-route53resolver-resolverdnssecconfig-resourceid
     */
    readonly resourceId?: string;
}
/**
 * Creates a Resolver endpoint. There are two types of Resolver endpoints, inbound and outbound:.
 *
 * - An *inbound Resolver endpoint* forwards DNS queries to the DNS service for a VPC from your network.
 * - An *outbound Resolver endpoint* forwards DNS queries from the DNS service for a VPC to your network.
 *
 * > - You cannot update `ResolverEndpointType` and `IpAddresses` in the same request.
 * > - When you update a dual-stack IP address, you must update both IP addresses. You can’t update only an IPv4 or IPv6 and keep an existing IP address.
 *
 * @cloudformationResource AWS::Route53Resolver::ResolverEndpoint
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html
 */
export declare class CfnResolverEndpoint extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResolverEndpoint from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResolverEndpoint;
    /**
     * The Amazon Resource Name (ARN) of the resolver endpoint, such as `arn:aws:route53resolver:us-east-1:123456789012:resolver-endpoint/resolver-endpoint-a1bzhi` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Indicates whether the resolver endpoint allows inbound or outbound DNS queries.
     *
     * @cloudformationAttribute Direction
     */
    readonly attrDirection: string;
    /**
     * The ID of the VPC that you want to create the resolver endpoint in.
     *
     * @cloudformationAttribute HostVPCId
     */
    readonly attrHostVpcId: string;
    /**
     * The number of IP addresses that the resolver endpoint can use for DNS queries.
     *
     * @cloudformationAttribute IpAddressCount
     */
    readonly attrIpAddressCount: string;
    /**
     * The name that you assigned to the resolver endpoint when you created the endpoint.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * @cloudformationAttribute OutpostArn
     */
    readonly attrOutpostArn: string;
    /**
     * @cloudformationAttribute PreferredInstanceType
     */
    readonly attrPreferredInstanceType: string;
    /**
     * The ID of the resolver endpoint.
     *
     * @cloudformationAttribute ResolverEndpointId
     */
    readonly attrResolverEndpointId: string;
    /**
     * @cloudformationAttribute ResolverEndpointType
     */
    readonly attrResolverEndpointType: string;
    /**
     * Indicates whether the Resolver endpoint allows inbound or outbound DNS queries:.
     */
    direction: string;
    /**
     * The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints).
     */
    ipAddresses: Array<CfnResolverEndpoint.IpAddressRequestProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.
     */
    name?: string;
    /**
     * The ARN (Amazon Resource Name) for the Outpost.
     */
    outpostArn?: string;
    /**
     * The Amazon EC2 instance type.
     */
    preferredInstanceType?: string;
    /**
     * Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only.
     */
    protocols?: Array<string>;
    /**
     * The Resolver endpoint IP address type.
     */
    resolverEndpointType?: string;
    /**
     * The ID of one or more security groups that control access to this VPC.
     */
    securityGroupIds: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Route 53 Resolver doesn't support updating tags through CloudFormation.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResolverEndpointProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnResolverEndpoint {
    /**
     * In a [CreateResolverEndpoint](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html) request, the IP address that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). `IpAddressRequest` also includes the ID of the subnet that contains the IP address.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverendpoint-ipaddressrequest.html
     */
    interface IpAddressRequestProperty {
        /**
         * The IPv4 address that you want to use for DNS queries.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverendpoint-ipaddressrequest.html#cfn-route53resolver-resolverendpoint-ipaddressrequest-ip
         */
        readonly ip?: string;
        /**
         * The IPv6 address that you want to use for DNS queries.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverendpoint-ipaddressrequest.html#cfn-route53resolver-resolverendpoint-ipaddressrequest-ipv6
         */
        readonly ipv6?: string;
        /**
         * The ID of the subnet that contains the IP address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverendpoint-ipaddressrequest.html#cfn-route53resolver-resolverendpoint-ipaddressrequest-subnetid
         */
        readonly subnetId: string;
    }
}
/**
 * Properties for defining a `CfnResolverEndpoint`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html
 */
export interface CfnResolverEndpointProps {
    /**
     * Indicates whether the Resolver endpoint allows inbound or outbound DNS queries:.
     *
     * - `INBOUND` : allows DNS queries to your VPC from your network
     * - `OUTBOUND` : allows DNS queries from your VPC to your network
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-direction
     */
    readonly direction: string;
    /**
     * The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints).
     *
     * The subnet ID uniquely identifies a VPC.
     *
     * > Even though the minimum is 1, Route 53 requires that you create at least two.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-ipaddresses
     */
    readonly ipAddresses: Array<CfnResolverEndpoint.IpAddressRequestProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-name
     */
    readonly name?: string;
    /**
     * The ARN (Amazon Resource Name) for the Outpost.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-outpostarn
     */
    readonly outpostArn?: string;
    /**
     * The Amazon EC2 instance type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-preferredinstancetype
     */
    readonly preferredInstanceType?: string;
    /**
     * Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only.
     *
     * For an inbound endpoint you can apply the protocols as follows:
     *
     * - Do53 and DoH in combination.
     * - Do53 and DoH-FIPS in combination.
     * - Do53 alone.
     * - DoH alone.
     * - DoH-FIPS alone.
     * - None, which is treated as Do53.
     *
     * For an outbound endpoint you can apply the protocols as follows:
     *
     * - Do53 and DoH in combination.
     * - Do53 alone.
     * - DoH alone.
     * - None, which is treated as Do53.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-protocols
     */
    readonly protocols?: Array<string>;
    /**
     * The Resolver endpoint IP address type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-resolverendpointtype
     */
    readonly resolverEndpointType?: string;
    /**
     * The ID of one or more security groups that control access to this VPC.
     *
     * The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-securitygroupids
     */
    readonly securityGroupIds: Array<string>;
    /**
     * Route 53 Resolver doesn't support updating tags through CloudFormation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverendpoint.html#cfn-route53resolver-resolverendpoint-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The AWS::Route53Resolver::ResolverQueryLoggingConfig resource is a complex type that contains settings for one query logging configuration.
 *
 * @cloudformationResource AWS::Route53Resolver::ResolverQueryLoggingConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html
 */
export declare class CfnResolverQueryLoggingConfig extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResolverQueryLoggingConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResolverQueryLoggingConfig;
    /**
     * The Amazon Resource Name (ARN) for the query logging configuration.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The number of VPCs that are associated with the query logging configuration.
     *
     * @cloudformationAttribute AssociationCount
     */
    readonly attrAssociationCount: number;
    /**
     * The date and time that the query logging configuration was created, in Unix time format and Coordinated Universal Time (UTC).
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * A unique string that identifies the request that created the query logging configuration. The `CreatorRequestId` allows failed requests to be retried without the risk of running the operation twice.
     *
     * @cloudformationAttribute CreatorRequestId
     */
    readonly attrCreatorRequestId: string;
    /**
     * The ID for the query logging configuration.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The AWS account ID for the account that created the query logging configuration.
     *
     * @cloudformationAttribute OwnerId
     */
    readonly attrOwnerId: string;
    /**
     * An indication of whether the query logging configuration is shared with other AWS account s, or was shared with the current account by another AWS account . Sharing is configured through AWS Resource Access Manager ( AWS RAM ).
     *
     * @cloudformationAttribute ShareStatus
     */
    readonly attrShareStatus: string;
    /**
     * The status of the specified query logging configuration. Valid values include the following:
     *
     * - `CREATING` : Resolver is creating the query logging configuration.
     * - `CREATED` : The query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC.
     * - `DELETING` : Resolver is deleting this query logging configuration.
     * - `FAILED` : Resolver can't deliver logs to the location that is specified in the query logging configuration. Here are two common causes:
     *
     * - The specified destination (for example, an Amazon S3 bucket) was deleted.
     * - Permissions don't allow sending logs to the destination.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The ARN of the resource that you want Resolver to send query logs: an Amazon S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream.
     */
    destinationArn?: string;
    /**
     * The name of the query logging configuration.
     */
    name?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnResolverQueryLoggingConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnResolverQueryLoggingConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html
 */
export interface CfnResolverQueryLoggingConfigProps {
    /**
     * The ARN of the resource that you want Resolver to send query logs: an Amazon S3 bucket, a CloudWatch Logs log group, or a Kinesis Data Firehose delivery stream.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html#cfn-route53resolver-resolverqueryloggingconfig-destinationarn
     */
    readonly destinationArn?: string;
    /**
     * The name of the query logging configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfig.html#cfn-route53resolver-resolverqueryloggingconfig-name
     */
    readonly name?: string;
}
/**
 * The AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation resource is a configuration for DNS query logging.
 *
 * After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group.
 *
 * @cloudformationResource AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html
 */
export declare class CfnResolverQueryLoggingConfigAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResolverQueryLoggingConfigAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResolverQueryLoggingConfigAssociation;
    /**
     * The date and time that the VPC was associated with the query logging configuration, in Unix time format and Coordinated Universal Time (UTC).
     *
     * @cloudformationAttribute CreationTime
     */
    readonly attrCreationTime: string;
    /**
     * If the value of `Status` is `FAILED` , the value of `Error` indicates the cause:
     *
     * - `DESTINATION_NOT_FOUND` : The specified destination (for example, an Amazon S3 bucket) was deleted.
     * - `ACCESS_DENIED` : Permissions don't allow sending logs to the destination.
     *
     * If the value of `Status` is a value other than `FAILED` , `Error` is null.
     *
     * @cloudformationAttribute Error
     */
    readonly attrError: string;
    /**
     * Contains additional information about the error. If the value or `Error` is null, the value of `ErrorMessage` is also null.
     *
     * @cloudformationAttribute ErrorMessage
     */
    readonly attrErrorMessage: string;
    /**
     * The ID of the query logging association.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The status of the specified query logging association. Valid values include the following:
     *
     * - `CREATING` : Resolver is creating an association between an Amazon Virtual Private Cloud (Amazon VPC) and a query logging configuration.
     * - `CREATED` : The association between an Amazon VPC and a query logging configuration was successfully created. Resolver is logging queries that originate in the specified VPC.
     * - `DELETING` : Resolver is deleting this query logging association.
     * - `FAILED` : Resolver either couldn't create or couldn't delete the query logging association.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The ID of the query logging configuration that a VPC is associated with.
     */
    resolverQueryLogConfigId?: string;
    /**
     * The ID of the Amazon VPC that is associated with the query logging configuration.
     */
    resourceId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnResolverQueryLoggingConfigAssociationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnResolverQueryLoggingConfigAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html
 */
export interface CfnResolverQueryLoggingConfigAssociationProps {
    /**
     * The ID of the query logging configuration that a VPC is associated with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html#cfn-route53resolver-resolverqueryloggingconfigassociation-resolverquerylogconfigid
     */
    readonly resolverQueryLogConfigId?: string;
    /**
     * The ID of the Amazon VPC that is associated with the query logging configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverqueryloggingconfigassociation.html#cfn-route53resolver-resolverqueryloggingconfigassociation-resourceid
     */
    readonly resourceId?: string;
}
/**
 * For DNS queries that originate in your VPCs, specifies which Resolver endpoint the queries pass through, one domain name that you want to forward to your network, and the IP addresses of the DNS resolvers in your network.
 *
 * @cloudformationResource AWS::Route53Resolver::ResolverRule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html
 */
export declare class CfnResolverRule extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResolverRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResolverRule;
    /**
     * The Amazon Resource Name (ARN) of the resolver rule, such as `arn:aws:route53resolver:us-east-1:123456789012:resolver-rule/resolver-rule-a1bzhi` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps. If a query matches multiple resolver rules (example.com and www.example.com), the query is routed using the resolver rule that contains the most specific domain name (www.example.com).
     *
     * @cloudformationAttribute DomainName
     */
    readonly attrDomainName: string;
    /**
     * A friendly name that lets you easily find a rule in the Resolver dashboard in the Route 53 console.
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The ID of the outbound endpoint that the rule is associated with, such as `rslvr-out-fdc049932dexample` .
     *
     * @cloudformationAttribute ResolverEndpointId
     */
    readonly attrResolverEndpointId: string;
    /**
     * When the value of `RuleType` is `FORWARD` , the ID that Resolver assigned to the resolver rule when you created it, such as `rslvr-rr-5328a0899aexample` . This value isn't applicable when `RuleType` is `SYSTEM` .
     *
     * @cloudformationAttribute ResolverRuleId
     */
    readonly attrResolverRuleId: string;
    /**
     * When the value of `RuleType` is `FORWARD` , the IP addresses that the outbound endpoint forwards DNS queries to, typically the IP addresses for DNS resolvers on your network. This value isn't applicable when `RuleType` is `SYSTEM` .
     *
     * @cloudformationAttribute TargetIps
     */
    readonly attrTargetIps: cdk.IResolvable;
    /**
     * DNS queries for this domain name are forwarded to the IP addresses that are specified in `TargetIps` .
     */
    domainName?: string;
    /**
     * The name for the Resolver rule, which you specified when you created the Resolver rule.
     */
    name?: string;
    /**
     * The ID of the endpoint that the rule is associated with.
     */
    resolverEndpointId?: string;
    /**
     * When you want to forward DNS queries for specified domain name to resolvers on your network, specify `FORWARD` .
     */
    ruleType: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Tags help organize and categorize your Resolver rules.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to.
     */
    targetIps?: Array<cdk.IResolvable | CfnResolverRule.TargetAddressProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResolverRuleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnResolverRule {
    /**
     * In a [CreateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverRule.html) request, an array of the IPs that you want to forward DNS queries to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverrule-targetaddress.html
     */
    interface TargetAddressProperty {
        /**
         * One IPv4 address that you want to forward DNS queries to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverrule-targetaddress.html#cfn-route53resolver-resolverrule-targetaddress-ip
         */
        readonly ip?: string;
        /**
         * One IPv6 address that you want to forward DNS queries to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverrule-targetaddress.html#cfn-route53resolver-resolverrule-targetaddress-ipv6
         */
        readonly ipv6?: string;
        /**
         * The port at `Ip` that you want to forward DNS queries to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverrule-targetaddress.html#cfn-route53resolver-resolverrule-targetaddress-port
         */
        readonly port?: string;
        /**
         * The protocols for the target address.
         *
         * The protocol you choose needs to be supported by the outbound endpoint of the Resolver rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverrule-targetaddress.html#cfn-route53resolver-resolverrule-targetaddress-protocol
         */
        readonly protocol?: string;
        /**
         * The Server Name Indication of the DoH server that you want to forward queries to.
         *
         * This is only used if the Protocol of the `TargetAddress` is `DoH` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53resolver-resolverrule-targetaddress.html#cfn-route53resolver-resolverrule-targetaddress-servernameindication
         */
        readonly serverNameIndication?: string;
    }
}
/**
 * Properties for defining a `CfnResolverRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html
 */
export interface CfnResolverRuleProps {
    /**
     * DNS queries for this domain name are forwarded to the IP addresses that are specified in `TargetIps` .
     *
     * If a query matches multiple Resolver rules (example.com and www.example.com), the query is routed using the Resolver rule that contains the most specific domain name (www.example.com).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html#cfn-route53resolver-resolverrule-domainname
     */
    readonly domainName?: string;
    /**
     * The name for the Resolver rule, which you specified when you created the Resolver rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html#cfn-route53resolver-resolverrule-name
     */
    readonly name?: string;
    /**
     * The ID of the endpoint that the rule is associated with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html#cfn-route53resolver-resolverrule-resolverendpointid
     */
    readonly resolverEndpointId?: string;
    /**
     * When you want to forward DNS queries for specified domain name to resolvers on your network, specify `FORWARD` .
     *
     * When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify `SYSTEM` .
     *
     * For example, to forward DNS queries for example.com to resolvers on your network, you create a rule and specify `FORWARD` for `RuleType` . To then have Resolver process queries for apex.example.com, you create a rule and specify `SYSTEM` for `RuleType` .
     *
     * Currently, only Resolver can create rules that have a value of `RECURSIVE` for `RuleType` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html#cfn-route53resolver-resolverrule-ruletype
     */
    readonly ruleType: string;
    /**
     * Tags help organize and categorize your Resolver rules.
     *
     * Each tag consists of a key and an optional value, both of which you define.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html#cfn-route53resolver-resolverrule-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to.
     *
     * Typically, these are the IP addresses of DNS resolvers on your network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverrule.html#cfn-route53resolver-resolverrule-targetips
     */
    readonly targetIps?: Array<cdk.IResolvable | CfnResolverRule.TargetAddressProperty> | cdk.IResolvable;
}
/**
 * In the response to an [AssociateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_AssociateResolverRule.html) , [DisassociateResolverRule](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_DisassociateResolverRule.html) , or [ListResolverRuleAssociations](https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_ListResolverRuleAssociations.html) request, provides information about an association between a resolver rule and a VPC. The association determines which DNS queries that originate in the VPC are forwarded to your network.
 *
 * @cloudformationResource AWS::Route53Resolver::ResolverRuleAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html
 */
export declare class CfnResolverRuleAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResolverRuleAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResolverRuleAssociation;
    /**
     * The name of an association between a resolver rule and a VPC, such as `test.example.com in beta VPC` .
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The ID of the resolver rule association that you want to get information about, such as `rslvr-rrassoc-97242eaf88example` .
     *
     * @cloudformationAttribute ResolverRuleAssociationId
     */
    readonly attrResolverRuleAssociationId: string;
    /**
     * The ID of the resolver rule that you associated with the VPC that is specified by `VPCId` , such as `rslvr-rr-5328a0899example` .
     *
     * @cloudformationAttribute ResolverRuleId
     */
    readonly attrResolverRuleId: string;
    /**
     * The ID of the VPC that you associated the resolver rule with, such as `vpc-03cf94c75cexample` .
     *
     * @cloudformationAttribute VPCId
     */
    readonly attrVpcId: string;
    /**
     * The name of an association between a Resolver rule and a VPC.
     */
    name?: string;
    /**
     * The ID of the Resolver rule that you associated with the VPC that is specified by `VPCId` .
     */
    resolverRuleId: string;
    /**
     * The ID of the VPC that you associated the Resolver rule with.
     */
    vpcId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResolverRuleAssociationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
/**
 * Properties for defining a `CfnResolverRuleAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html
 */
export interface CfnResolverRuleAssociationProps {
    /**
     * The name of an association between a Resolver rule and a VPC.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html#cfn-route53resolver-resolverruleassociation-name
     */
    readonly name?: string;
    /**
     * The ID of the Resolver rule that you associated with the VPC that is specified by `VPCId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html#cfn-route53resolver-resolverruleassociation-resolverruleid
     */
    readonly resolverRuleId: string;
    /**
     * The ID of the VPC that you associated the Resolver rule with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53resolver-resolverruleassociation.html#cfn-route53resolver-resolverruleassociation-vpcid
     */
    readonly vpcId: string;
}
