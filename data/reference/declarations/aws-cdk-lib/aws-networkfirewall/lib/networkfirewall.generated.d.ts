import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Use the `Firewall` to provide stateful, managed, network firewall and intrusion detection and prevention filtering for your VPCs in Amazon VPC .
 *
 * The firewall defines the configuration settings for an AWS Network Firewall firewall. The settings include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall AWS resource.
 *
 * @cloudformationResource AWS::NetworkFirewall::Firewall
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html
 */
export declare class CfnFirewall extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFirewall from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFirewall;
    /**
     * The unique IDs of the firewall endpoints for all of the subnets that you attached to the firewall. The subnets are not listed in any particular order. For example: `["us-west-2c:vpce-111122223333", "us-west-2a:vpce-987654321098", "us-west-2b:vpce-012345678901"]` .
     *
     * @cloudformationAttribute EndpointIds
     */
    readonly attrEndpointIds: Array<string>;
    /**
     * The Amazon Resource Name (ARN) of the `Firewall` .
     *
     * @cloudformationAttribute FirewallArn
     */
    readonly attrFirewallArn: string;
    /**
     * The name of the `Firewall` resource.
     *
     * @cloudformationAttribute FirewallId
     */
    readonly attrFirewallId: string;
    /**
     * A flag indicating whether it is possible to delete the firewall.
     */
    deleteProtection?: boolean | cdk.IResolvable;
    /**
     * A description of the firewall.
     */
    description?: string;
    /**
     * The descriptive name of the firewall.
     */
    firewallName: string;
    /**
     * The Amazon Resource Name (ARN) of the firewall policy.
     */
    firewallPolicyArn: string;
    /**
     * A setting indicating whether the firewall is protected against a change to the firewall policy association.
     */
    firewallPolicyChangeProtection?: boolean | cdk.IResolvable;
    /**
     * A setting indicating whether the firewall is protected against changes to the subnet associations.
     */
    subnetChangeProtection?: boolean | cdk.IResolvable;
    /**
     * The public subnets that Network Firewall is using for the firewall.
     */
    subnetMappings: Array<cdk.IResolvable | CfnFirewall.SubnetMappingProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The unique identifier of the VPC where the firewall is in use.
     */
    vpcId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFirewallProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFirewall {
    /**
     * The ID for a subnet that you want to associate with the firewall.
     *
     * AWS Network Firewall creates an instance of the associated firewall in each subnet that you specify, to filter traffic in the subnet's Availability Zone.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewall-subnetmapping.html
     */
    interface SubnetMappingProperty {
        /**
         * The subnet's IP address type.
         *
         * You can't change the IP address type after you create the subnet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewall-subnetmapping.html#cfn-networkfirewall-firewall-subnetmapping-ipaddresstype
         */
        readonly ipAddressType?: string;
        /**
         * The unique identifier for the subnet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewall-subnetmapping.html#cfn-networkfirewall-firewall-subnetmapping-subnetid
         */
        readonly subnetId: string;
    }
}
/**
 * Properties for defining a `CfnFirewall`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html
 */
export interface CfnFirewallProps {
    /**
     * A flag indicating whether it is possible to delete the firewall.
     *
     * A setting of `TRUE` indicates that the firewall is protected against deletion. Use this setting to protect against accidentally deleting a firewall that is in use. When you create a firewall, the operation initializes this flag to `TRUE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html#cfn-networkfirewall-firewall-deleteprotection
     */
    readonly deleteProtection?: boolean | cdk.IResolvable;
    /**
     * A description of the firewall.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html#cfn-networkfirewall-firewall-description
     */
    readonly description?: string;
    /**
     * The descriptive name of the firewall.
     *
     * You can't change the name of a firewall after you create it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html#cfn-networkfirewall-firewall-firewallname
     */
    readonly firewallName: string;
    /**
     * The Amazon Resource Name (ARN) of the firewall policy.
     *
     * The relationship of firewall to firewall policy is many to one. Each firewall requires one firewall policy association, and you can use the same firewall policy for multiple firewalls.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html#cfn-networkfirewall-firewall-firewallpolicyarn
     */
    readonly firewallPolicyArn: string;
    /**
     * A setting indicating whether the firewall is protected against a change to the firewall policy association.
     *
     * Use this setting to protect against accidentally modifying the firewall policy for a firewall that is in use. When you create a firewall, the operation initializes this setting to `TRUE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html#cfn-networkfirewall-firewall-firewallpolicychangeprotection
     */
    readonly firewallPolicyChangeProtection?: boolean | cdk.IResolvable;
    /**
     * A setting indicating whether the firewall is protected against changes to the subnet associations.
     *
     * Use this setting to protect against accidentally modifying the subnet associations for a firewall that is in use. When you create a firewall, the operation initializes this setting to `TRUE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html#cfn-networkfirewall-firewall-subnetchangeprotection
     */
    readonly subnetChangeProtection?: boolean | cdk.IResolvable;
    /**
     * The public subnets that Network Firewall is using for the firewall.
     *
     * Each subnet must belong to a different Availability Zone.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html#cfn-networkfirewall-firewall-subnetmappings
     */
    readonly subnetMappings: Array<cdk.IResolvable | CfnFirewall.SubnetMappingProperty> | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html#cfn-networkfirewall-firewall-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The unique identifier of the VPC where the firewall is in use.
     *
     * You can't change the VPC of a firewall after you create the firewall.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewall.html#cfn-networkfirewall-firewall-vpcid
     */
    readonly vpcId: string;
}
/**
 * Use the `FirewallPolicy` to define the stateless and stateful network traffic filtering behavior for your `Firewall` .
 *
 * You can use one firewall policy for multiple firewalls.
 *
 * @cloudformationResource AWS::NetworkFirewall::FirewallPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewallpolicy.html
 */
export declare class CfnFirewallPolicy extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnFirewallPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnFirewallPolicy;
    /**
     * The Amazon Resource Name (ARN) of the `FirewallPolicy` .
     *
     * @cloudformationAttribute FirewallPolicyArn
     */
    readonly attrFirewallPolicyArn: string;
    /**
     * The unique ID of the `FirewallPolicy` resource.
     *
     * @cloudformationAttribute FirewallPolicyId
     */
    readonly attrFirewallPolicyId: string;
    /**
     * A description of the firewall policy.
     */
    description?: string;
    /**
     * The traffic filtering behavior of a firewall policy, defined in a collection of stateless and stateful rule groups and other settings.
     */
    firewallPolicy: CfnFirewallPolicy.FirewallPolicyProperty | cdk.IResolvable;
    /**
     * The descriptive name of the firewall policy.
     */
    firewallPolicyName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnFirewallPolicyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnFirewallPolicy {
    /**
     * The traffic filtering behavior of a firewall policy, defined in a collection of stateless and stateful rule groups and other settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-firewallpolicy.html
     */
    interface FirewallPolicyProperty {
        /**
         * Contains variables that you can use to override default Suricata settings in your firewall policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-firewallpolicy.html#cfn-networkfirewall-firewallpolicy-firewallpolicy-policyvariables
         */
        readonly policyVariables?: cdk.IResolvable | CfnFirewallPolicy.PolicyVariablesProperty;
        /**
         * The default actions to take on a packet that doesn't match any stateful rules.
         *
         * The stateful default action is optional, and is only valid when using the strict rule order.
         *
         * Valid values of the stateful default action:
         *
         * - aws:drop_strict
         * - aws:drop_established
         * - aws:alert_strict
         * - aws:alert_established
         *
         * For more information, see [Strict evaluation order](https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html#suricata-strict-rule-evaluation-order.html) in the *AWS Network Firewall Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-firewallpolicy.html#cfn-networkfirewall-firewallpolicy-firewallpolicy-statefuldefaultactions
         */
        readonly statefulDefaultActions?: Array<string>;
        /**
         * Additional options governing how Network Firewall handles stateful rules.
         *
         * The stateful rule groups that you use in your policy must have stateful rule options settings that are compatible with these settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-firewallpolicy.html#cfn-networkfirewall-firewallpolicy-firewallpolicy-statefulengineoptions
         */
        readonly statefulEngineOptions?: cdk.IResolvable | CfnFirewallPolicy.StatefulEngineOptionsProperty;
        /**
         * References to the stateful rule groups that are used in the policy.
         *
         * These define the inspection criteria in stateful rules.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-firewallpolicy.html#cfn-networkfirewall-firewallpolicy-firewallpolicy-statefulrulegroupreferences
         */
        readonly statefulRuleGroupReferences?: Array<cdk.IResolvable | CfnFirewallPolicy.StatefulRuleGroupReferenceProperty> | cdk.IResolvable;
        /**
         * The custom action definitions that are available for use in the firewall policy's `StatelessDefaultActions` setting.
         *
         * You name each custom action that you define, and then you can use it by name in your default actions specifications.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-firewallpolicy.html#cfn-networkfirewall-firewallpolicy-firewallpolicy-statelesscustomactions
         */
        readonly statelessCustomActions?: Array<CfnFirewallPolicy.CustomActionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The actions to take on a packet if it doesn't match any of the stateless rules in the policy.
         *
         * If you want non-matching packets to be forwarded for stateful inspection, specify `aws:forward_to_sfe` .
         *
         * You must specify one of the standard actions: `aws:pass` , `aws:drop` , or `aws:forward_to_sfe` . In addition, you can specify custom actions that are compatible with your standard section choice.
         *
         * For example, you could specify `["aws:pass"]` or you could specify `["aws:pass", “customActionName”]` . For information about compatibility, see the custom action descriptions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-firewallpolicy.html#cfn-networkfirewall-firewallpolicy-firewallpolicy-statelessdefaultactions
         */
        readonly statelessDefaultActions: Array<string>;
        /**
         * The actions to take on a fragmented packet if it doesn't match any of the stateless rules in the policy.
         *
         * If you want non-matching fragmented packets to be forwarded for stateful inspection, specify `aws:forward_to_sfe` .
         *
         * You must specify one of the standard actions: `aws:pass` , `aws:drop` , or `aws:forward_to_sfe` . In addition, you can specify custom actions that are compatible with your standard section choice.
         *
         * For example, you could specify `["aws:pass"]` or you could specify `["aws:pass", “customActionName”]` . For information about compatibility, see the custom action descriptions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-firewallpolicy.html#cfn-networkfirewall-firewallpolicy-firewallpolicy-statelessfragmentdefaultactions
         */
        readonly statelessFragmentDefaultActions: Array<string>;
        /**
         * References to the stateless rule groups that are used in the policy.
         *
         * These define the matching criteria in stateless rules.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-firewallpolicy.html#cfn-networkfirewall-firewallpolicy-firewallpolicy-statelessrulegroupreferences
         */
        readonly statelessRuleGroupReferences?: Array<cdk.IResolvable | CfnFirewallPolicy.StatelessRuleGroupReferenceProperty> | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of the TLS inspection configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-firewallpolicy.html#cfn-networkfirewall-firewallpolicy-firewallpolicy-tlsinspectionconfigurationarn
         */
        readonly tlsInspectionConfigurationArn?: string;
    }
    /**
     * Identifier for a single stateless rule group, used in a firewall policy to refer to the rule group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statelessrulegroupreference.html
     */
    interface StatelessRuleGroupReferenceProperty {
        /**
         * An integer setting that indicates the order in which to run the stateless rule groups in a single `FirewallPolicy` .
         *
         * Network Firewall applies each stateless rule group to a packet starting with the group that has the lowest priority setting. You must ensure that the priority settings are unique within each policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statelessrulegroupreference.html#cfn-networkfirewall-firewallpolicy-statelessrulegroupreference-priority
         */
        readonly priority: number;
        /**
         * The Amazon Resource Name (ARN) of the stateless rule group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statelessrulegroupreference.html#cfn-networkfirewall-firewallpolicy-statelessrulegroupreference-resourcearn
         */
        readonly resourceArn: string;
    }
    /**
     * Identifier for a single stateful rule group, used in a firewall policy to refer to a rule group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulrulegroupreference.html
     */
    interface StatefulRuleGroupReferenceProperty {
        /**
         * The action that allows the policy owner to override the behavior of the rule group within a policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulrulegroupreference.html#cfn-networkfirewall-firewallpolicy-statefulrulegroupreference-override
         */
        readonly override?: cdk.IResolvable | CfnFirewallPolicy.StatefulRuleGroupOverrideProperty;
        /**
         * An integer setting that indicates the order in which to run the stateful rule groups in a single `FirewallPolicy` .
         *
         * This setting only applies to firewall policies that specify the `STRICT_ORDER` rule order in the stateful engine options settings.
         *
         * Network Firewall evalutes each stateful rule group against a packet starting with the group that has the lowest priority setting. You must ensure that the priority settings are unique within each policy.
         *
         * You can change the priority settings of your rule groups at any time. To make it easier to insert rule groups later, number them so there's a wide range in between, for example use 100, 200, and so on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulrulegroupreference.html#cfn-networkfirewall-firewallpolicy-statefulrulegroupreference-priority
         */
        readonly priority?: number;
        /**
         * The Amazon Resource Name (ARN) of the stateful rule group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulrulegroupreference.html#cfn-networkfirewall-firewallpolicy-statefulrulegroupreference-resourcearn
         */
        readonly resourceArn: string;
    }
    /**
     * The setting that allows the policy owner to change the behavior of the rule group within a policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulrulegroupoverride.html
     */
    interface StatefulRuleGroupOverrideProperty {
        /**
         * The action that changes the rule group from `DROP` to `ALERT` .
         *
         * This only applies to managed rule groups.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulrulegroupoverride.html#cfn-networkfirewall-firewallpolicy-statefulrulegroupoverride-action
         */
        readonly action?: string;
    }
    /**
     * Configuration settings for the handling of the stateful rule groups in a firewall policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulengineoptions.html
     */
    interface StatefulEngineOptionsProperty {
        /**
         * Configures the amount of time that can pass without any traffic sent through the firewall before the firewall determines that the connection is idle.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulengineoptions.html#cfn-networkfirewall-firewallpolicy-statefulengineoptions-flowtimeouts
         */
        readonly flowTimeouts?: CfnFirewallPolicy.FlowTimeoutsProperty | cdk.IResolvable;
        /**
         * Indicates how to manage the order of stateful rule evaluation for the policy.
         *
         * `DEFAULT_ACTION_ORDER` is the default behavior. Stateful rules are provided to the rule engine as Suricata compatible strings, and Suricata evaluates them based on certain settings. For more information, see [Evaluation order for stateful rules](https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html) in the *AWS Network Firewall Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulengineoptions.html#cfn-networkfirewall-firewallpolicy-statefulengineoptions-ruleorder
         */
        readonly ruleOrder?: string;
        /**
         * Configures how Network Firewall processes traffic when a network connection breaks midstream.
         *
         * Network connections can break due to disruptions in external networks or within the firewall itself.
         *
         * - `DROP` - Network Firewall fails closed and drops all subsequent traffic going to the firewall. This is the default behavior.
         * - `CONTINUE` - Network Firewall continues to apply rules to the subsequent traffic without context from traffic before the break. This impacts the behavior of rules that depend on this context. For example, if you have a stateful rule to `drop http` traffic, Network Firewall won't match the traffic for this rule because the service won't have the context from session initialization defining the application layer protocol as HTTP. However, this behavior is rule dependent—a TCP-layer rule using a `flow:stateless` rule would still match, as would the `aws:drop_strict` default action.
         * - `REJECT` - Network Firewall fails closed and drops all subsequent traffic going to the firewall. Network Firewall also sends a TCP reject packet back to your client so that the client can immediately establish a new session. Network Firewall will have context about the new session and will apply rules to the subsequent traffic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-statefulengineoptions.html#cfn-networkfirewall-firewallpolicy-statefulengineoptions-streamexceptionpolicy
         */
        readonly streamExceptionPolicy?: string;
    }
    /**
     * Describes the amount of time that can pass without any traffic sent through the firewall before the firewall determines that the connection is idle and Network Firewall removes the flow entry from its flow table.
     *
     * Existing connections and flows are not impacted when you update this value. Only new connections after you update this value are impacted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-flowtimeouts.html
     */
    interface FlowTimeoutsProperty {
        /**
         * The number of seconds that can pass without any TCP traffic sent through the firewall before the firewall determines that the connection is idle.
         *
         * After the idle timeout passes, data packets are dropped, however, the next TCP SYN packet is considered a new flow and is processed by the firewall. Clients or targets can use TCP keepalive packets to reset the idle timeout.
         *
         * You can define the `TcpIdleTimeoutSeconds` value to be between 60 and 6000 seconds. If no value is provided, it defaults to 350 seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-flowtimeouts.html#cfn-networkfirewall-firewallpolicy-flowtimeouts-tcpidletimeoutseconds
         */
        readonly tcpIdleTimeoutSeconds?: number;
    }
    /**
     * An optional, non-standard action to use for stateless packet handling.
     *
     * You can define this in addition to the standard action that you must specify.
     *
     * You define and name the custom actions that you want to be able to use, and then you reference them by name in your actions settings.
     *
     * You can use custom actions in the following places:
     *
     * - In an `RuleGroup.StatelessRulesAndCustomActions` . The custom actions are available for use by name inside the `StatelessRulesAndCustomActions` where you define them. You can use them for your stateless rule actions to specify what to do with a packet that matches the rule's match attributes.
     * - In an `FirewallPolicy` specification, in `StatelessCustomActions` . The custom actions are available for use inside the policy where you define them. You can use them for the policy's default stateless actions settings to specify what to do with packets that don't match any of the policy's stateless rules.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-customaction.html
     */
    interface CustomActionProperty {
        /**
         * The custom action associated with the action name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-customaction.html#cfn-networkfirewall-firewallpolicy-customaction-actiondefinition
         */
        readonly actionDefinition: CfnFirewallPolicy.ActionDefinitionProperty | cdk.IResolvable;
        /**
         * The descriptive name of the custom action.
         *
         * You can't change the name of a custom action after you create it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-customaction.html#cfn-networkfirewall-firewallpolicy-customaction-actionname
         */
        readonly actionName: string;
    }
    /**
     * A custom action to use in stateless rule actions settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-actiondefinition.html
     */
    interface ActionDefinitionProperty {
        /**
         * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet.
         *
         * This setting defines a CloudWatch dimension value to be published.
         *
         * You can pair this custom action with any of the standard stateless rule actions. For example, you could pair this in a rule action with the standard action that forwards the packet for stateful inspection. Then, when a packet matches the rule, Network Firewall publishes metrics for the packet and forwards it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-actiondefinition.html#cfn-networkfirewall-firewallpolicy-actiondefinition-publishmetricaction
         */
        readonly publishMetricAction?: cdk.IResolvable | CfnFirewallPolicy.PublishMetricActionProperty;
    }
    /**
     * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet.
     *
     * This setting defines a CloudWatch dimension value to be published.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-publishmetricaction.html
     */
    interface PublishMetricActionProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-publishmetricaction.html#cfn-networkfirewall-firewallpolicy-publishmetricaction-dimensions
         */
        readonly dimensions: Array<CfnFirewallPolicy.DimensionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The value to use in an Amazon CloudWatch custom metric dimension.
     *
     * This is used in the `PublishMetrics` custom action. A CloudWatch custom metric dimension is a name/value pair that's part of the identity of a metric.
     *
     * AWS Network Firewall sets the dimension name to `CustomAction` and you provide the dimension value.
     *
     * For more information about CloudWatch custom metric dimensions, see [Publishing Custom Metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#usingDimensions) in the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-dimension.html
     */
    interface DimensionProperty {
        /**
         * The value to use in the custom metric dimension.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-dimension.html#cfn-networkfirewall-firewallpolicy-dimension-value
         */
        readonly value: string;
    }
    /**
     * Contains variables that you can use to override default Suricata settings in your firewall policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-policyvariables.html
     */
    interface PolicyVariablesProperty {
        /**
         * The IPv4 or IPv6 addresses in CIDR notation to use for the Suricata `HOME_NET` variable.
         *
         * If your firewall uses an inspection VPC, you might want to override the `HOME_NET` variable with the CIDRs of your home networks. If you don't override `HOME_NET` with your own CIDRs, Network Firewall by default uses the CIDR of your inspection VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-policyvariables.html#cfn-networkfirewall-firewallpolicy-policyvariables-rulevariables
         */
        readonly ruleVariables?: cdk.IResolvable | Record<string, CfnFirewallPolicy.IPSetProperty | cdk.IResolvable>;
    }
    /**
     * A list of IP addresses and address ranges, in CIDR notation.
     *
     * This is part of a `RuleVariables` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-ipset.html
     */
    interface IPSetProperty {
        /**
         * The list of IP addresses and address ranges, in CIDR notation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-firewallpolicy-ipset.html#cfn-networkfirewall-firewallpolicy-ipset-definition
         */
        readonly definition?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnFirewallPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewallpolicy.html
 */
export interface CfnFirewallPolicyProps {
    /**
     * A description of the firewall policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewallpolicy.html#cfn-networkfirewall-firewallpolicy-description
     */
    readonly description?: string;
    /**
     * The traffic filtering behavior of a firewall policy, defined in a collection of stateless and stateful rule groups and other settings.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewallpolicy.html#cfn-networkfirewall-firewallpolicy-firewallpolicy
     */
    readonly firewallPolicy: CfnFirewallPolicy.FirewallPolicyProperty | cdk.IResolvable;
    /**
     * The descriptive name of the firewall policy.
     *
     * You can't change the name of a firewall policy after you create it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewallpolicy.html#cfn-networkfirewall-firewallpolicy-firewallpolicyname
     */
    readonly firewallPolicyName: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-firewallpolicy.html#cfn-networkfirewall-firewallpolicy-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Use the `LoggingConfiguration` to define the destinations and logging options for an `Firewall` .
 *
 * You must change the logging configuration by changing one `LogDestinationConfig` setting at a time in your `LogDestinationConfigs` .
 *
 * You can make only one of the following changes to your `LoggingConfiguration` resource:
 *
 * - Create a new log destination object by adding a single `LogDestinationConfig` array element to `LogDestinationConfigs` .
 * - Delete a log destination object by removing a single `LogDestinationConfig` array element from `LogDestinationConfigs` .
 * - Change the `LogDestination` setting in a single `LogDestinationConfig` array element.
 *
 * You can't change the `LogDestinationType` or `LogType` in a `LogDestinationConfig` . To change these settings, delete the existing `LogDestinationConfig` object and create a new one, in two separate modifications.
 *
 * @cloudformationResource AWS::NetworkFirewall::LoggingConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html
 */
export declare class CfnLoggingConfiguration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLoggingConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLoggingConfiguration;
    /**
     * The Amazon Resource Name (ARN) of the `Firewall` that the logging configuration is associated with.
     */
    firewallArn: string;
    /**
     * The name of the firewall that the logging configuration is associated with.
     */
    firewallName?: string;
    /**
     * Defines how AWS Network Firewall performs logging for a `Firewall` .
     */
    loggingConfiguration: cdk.IResolvable | CfnLoggingConfiguration.LoggingConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLoggingConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLoggingConfiguration {
    /**
     * Defines how AWS Network Firewall performs logging for a `Firewall` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-loggingconfiguration.html
     */
    interface LoggingConfigurationProperty {
        /**
         * Defines the logging destinations for the logs for a firewall.
         *
         * Network Firewall generates logs for stateful rule groups.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-loggingconfiguration.html#cfn-networkfirewall-loggingconfiguration-loggingconfiguration-logdestinationconfigs
         */
        readonly logDestinationConfigs: Array<cdk.IResolvable | CfnLoggingConfiguration.LogDestinationConfigProperty> | cdk.IResolvable;
    }
    /**
     * Defines where AWS Network Firewall sends logs for the firewall for one log type.
     *
     * This is used in `LoggingConfiguration` . You can send each type of log to an Amazon S3 bucket, a CloudWatch log group, or a Kinesis Data Firehose delivery stream.
     *
     * Network Firewall generates logs for stateful rule groups. You can save alert and flow log types. The stateful rules engine records flow logs for all network traffic that it receives. It records alert logs for traffic that matches stateful rules that have the rule action set to `DROP` or `ALERT` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-logdestinationconfig.html
     */
    interface LogDestinationConfigProperty {
        /**
         * The named location for the logs, provided in a key:value mapping that is specific to the chosen destination type.
         *
         * - For an Amazon S3 bucket, provide the name of the bucket, with key `bucketName` , and optionally provide a prefix, with key `prefix` .
         *
         * The following example specifies an Amazon S3 bucket named `DOC-EXAMPLE-BUCKET` and the prefix `alerts` :
         *
         * `"LogDestination": { "bucketName": "DOC-EXAMPLE-BUCKET", "prefix": "alerts" }`
         * - For a CloudWatch log group, provide the name of the CloudWatch log group, with key `logGroup` . The following example specifies a log group named `alert-log-group` :
         *
         * `"LogDestination": { "logGroup": "alert-log-group" }`
         * - For a Firehose delivery stream, provide the name of the delivery stream, with key `deliveryStream` . The following example specifies a delivery stream named `alert-delivery-stream` :
         *
         * `"LogDestination": { "deliveryStream": "alert-delivery-stream" }`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-logdestinationconfig.html#cfn-networkfirewall-loggingconfiguration-logdestinationconfig-logdestination
         */
        readonly logDestination: cdk.IResolvable | Record<string, string>;
        /**
         * The type of storage destination to send these logs to.
         *
         * You can send logs to an Amazon S3 bucket, a CloudWatch log group, or a Firehose delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-logdestinationconfig.html#cfn-networkfirewall-loggingconfiguration-logdestinationconfig-logdestinationtype
         */
        readonly logDestinationType: string;
        /**
         * The type of log to record.
         *
         * You can record the following types of logs from your Network Firewall stateful engine.
         *
         * - `ALERT` - Logs for traffic that matches your stateful rules and that have an action that sends an alert. A stateful rule sends alerts for the rule actions DROP, ALERT, and REJECT. For more information, see the `StatefulRule` property.
         * - `FLOW` - Standard network traffic flow logs. The stateful rules engine records flow logs for all network traffic that it receives. Each flow log record captures the network flow for a specific standard stateless rule group.
         * - `TLS` - Logs for events that are related to TLS inspection. For more information, see [Inspecting SSL/TLS traffic with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-configurations.html) in the *Network Firewall Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-loggingconfiguration-logdestinationconfig.html#cfn-networkfirewall-loggingconfiguration-logdestinationconfig-logtype
         */
        readonly logType: string;
    }
}
/**
 * Properties for defining a `CfnLoggingConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html
 */
export interface CfnLoggingConfigurationProps {
    /**
     * The Amazon Resource Name (ARN) of the `Firewall` that the logging configuration is associated with.
     *
     * You can't change the firewall specification after you create the logging configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html#cfn-networkfirewall-loggingconfiguration-firewallarn
     */
    readonly firewallArn: string;
    /**
     * The name of the firewall that the logging configuration is associated with.
     *
     * You can't change the firewall specification after you create the logging configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html#cfn-networkfirewall-loggingconfiguration-firewallname
     */
    readonly firewallName?: string;
    /**
     * Defines how AWS Network Firewall performs logging for a `Firewall` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-loggingconfiguration.html#cfn-networkfirewall-loggingconfiguration-loggingconfiguration
     */
    readonly loggingConfiguration: cdk.IResolvable | CfnLoggingConfiguration.LoggingConfigurationProperty;
}
/**
 * Use the `RuleGroup` to define a reusable collection of stateless or stateful network traffic filtering rules.
 *
 * You use rule groups in an `FirewallPolicy` to specify the filtering behavior of an `Firewall` .
 *
 * @cloudformationResource AWS::NetworkFirewall::RuleGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html
 */
export declare class CfnRuleGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRuleGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRuleGroup;
    /**
     * The Amazon Resource Name (ARN) of the `RuleGroup` .
     *
     * @cloudformationAttribute RuleGroupArn
     */
    readonly attrRuleGroupArn: string;
    /**
     * The unique ID of the `RuleGroup` resource.
     *
     * @cloudformationAttribute RuleGroupId
     */
    readonly attrRuleGroupId: string;
    /**
     * The maximum operating resources that this rule group can use.
     */
    capacity: number;
    /**
     * A description of the rule group.
     */
    description?: string;
    /**
     * An object that defines the rule group rules.
     */
    ruleGroup?: cdk.IResolvable | CfnRuleGroup.RuleGroupProperty;
    /**
     * The descriptive name of the rule group.
     */
    ruleGroupName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Indicates whether the rule group is stateless or stateful.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRuleGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRuleGroup {
    /**
     * The object that defines the rules in a rule group.
     *
     * AWS Network Firewall uses a rule group to inspect and control network traffic. You define stateless rule groups to inspect individual packets and you define stateful rule groups to inspect packets in the context of their traffic flow.
     *
     * To use a rule group, you include it by reference in an Network Firewall firewall policy, then you use the policy in a firewall. You can reference a rule group from more than one firewall policy, and you can use a firewall policy in more than one firewall.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulegroup.html
     */
    interface RuleGroupProperty {
        /**
         * The reference sets for the stateful rule group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulegroup.html#cfn-networkfirewall-rulegroup-rulegroup-referencesets
         */
        readonly referenceSets?: cdk.IResolvable | CfnRuleGroup.ReferenceSetsProperty;
        /**
         * The stateful rules or stateless rules for the rule group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulegroup.html#cfn-networkfirewall-rulegroup-rulegroup-rulessource
         */
        readonly rulesSource: cdk.IResolvable | CfnRuleGroup.RulesSourceProperty;
        /**
         * Settings that are available for use in the rules in the rule group.
         *
         * You can only use these for stateful rule groups.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulegroup.html#cfn-networkfirewall-rulegroup-rulegroup-rulevariables
         */
        readonly ruleVariables?: cdk.IResolvable | CfnRuleGroup.RuleVariablesProperty;
        /**
         * Additional options governing how Network Firewall handles stateful rules.
         *
         * The policies where you use your stateful rule group must have stateful rule options settings that are compatible with these settings. Some limitations apply; for more information, see [Strict evaluation order](https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-limitations-caveats.html) in the *AWS Network Firewall Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulegroup.html#cfn-networkfirewall-rulegroup-rulegroup-statefulruleoptions
         */
        readonly statefulRuleOptions?: cdk.IResolvable | CfnRuleGroup.StatefulRuleOptionsProperty;
    }
    /**
     * Additional options governing how Network Firewall handles the rule group.
     *
     * You can only use these for stateful rule groups.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statefulruleoptions.html
     */
    interface StatefulRuleOptionsProperty {
        /**
         * Indicates how to manage the order of the rule evaluation for the rule group.
         *
         * `DEFAULT_ACTION_ORDER` is the default behavior. Stateful rules are provided to the rule engine as Suricata compatible strings, and Suricata evaluates them based on certain settings. For more information, see [Evaluation order for stateful rules](https://docs.aws.amazon.com/network-firewall/latest/developerguide/suricata-rule-evaluation-order.html) in the *AWS Network Firewall Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statefulruleoptions.html#cfn-networkfirewall-rulegroup-statefulruleoptions-ruleorder
         */
        readonly ruleOrder?: string;
    }
    /**
     * Configures the `ReferenceSets` for a stateful rule group.
     *
     * For more information, see the [Using IP set references in Suricata compatible rule groups](https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html) in the *Network Firewall User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-referencesets.html
     */
    interface ReferenceSetsProperty {
        /**
         * The IP set references to use in the stateful rule group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-referencesets.html#cfn-networkfirewall-rulegroup-referencesets-ipsetreferences
         */
        readonly ipSetReferences?: cdk.IResolvable | Record<string, CfnRuleGroup.IPSetReferenceProperty | cdk.IResolvable>;
    }
    /**
     * Configures one or more `IPSetReferences` for a Suricata-compatible rule group.
     *
     * An IP set reference is a rule variable that references a resource that you create and manage in another AWS service, such as an Amazon VPC prefix list. Network Firewall IP set references enable you to dynamically update the contents of your rules. When you create, update, or delete the IP set you are referencing in your rule, Network Firewall automatically updates the rule's content with the changes. For more information about IP set references in Network Firewall , see [Using IP set references](https://docs.aws.amazon.com/network-firewall/latest/developerguide/rule-groups-ip-set-references.html) in the *Network Firewall Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ipsetreference.html
     */
    interface IPSetReferenceProperty {
        /**
         * The Amazon Resource Name (ARN) of the resource to include in the `RuleGroup.IPSetReference` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ipsetreference.html#cfn-networkfirewall-rulegroup-ipsetreference-referencearn
         */
        readonly referenceArn?: string;
    }
    /**
     * The stateless or stateful rules definitions for use in a single rule group.
     *
     * Each rule group requires a single `RulesSource` . You can use an instance of this for either stateless rules or stateful rules.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulessource.html
     */
    interface RulesSourceProperty {
        /**
         * Stateful inspection criteria for a domain list rule group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulessource.html#cfn-networkfirewall-rulegroup-rulessource-rulessourcelist
         */
        readonly rulesSourceList?: cdk.IResolvable | CfnRuleGroup.RulesSourceListProperty;
        /**
         * Stateful inspection criteria, provided in Suricata compatible rules.
         *
         * Suricata is an open-source threat detection framework that includes a standard rule-based language for network traffic inspection.
         *
         * These rules contain the inspection criteria and the action to take for traffic that matches the criteria, so this type of rule group doesn't have a separate action setting.
         *
         * > You can't use the `priority` keyword if the `RuleOrder` option in `StatefulRuleOptions` is set to `STRICT_ORDER` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulessource.html#cfn-networkfirewall-rulegroup-rulessource-rulesstring
         */
        readonly rulesString?: string;
        /**
         * An array of individual stateful rules inspection criteria to be used together in a stateful rule group.
         *
         * Use this option to specify simple Suricata rules with protocol, source and destination, ports, direction, and rule options. For information about the Suricata `Rules` format, see [Rules Format](https://docs.aws.amazon.com/https://suricata.readthedocs.io/en/suricata-7.0.3/rules/intro.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulessource.html#cfn-networkfirewall-rulegroup-rulessource-statefulrules
         */
        readonly statefulRules?: Array<cdk.IResolvable | CfnRuleGroup.StatefulRuleProperty> | cdk.IResolvable;
        /**
         * Stateless inspection criteria to be used in a stateless rule group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulessource.html#cfn-networkfirewall-rulegroup-rulessource-statelessrulesandcustomactions
         */
        readonly statelessRulesAndCustomActions?: cdk.IResolvable | CfnRuleGroup.StatelessRulesAndCustomActionsProperty;
    }
    /**
     * Stateless inspection criteria.
     *
     * Each stateless rule group uses exactly one of these data types to define its stateless rules.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statelessrulesandcustomactions.html
     */
    interface StatelessRulesAndCustomActionsProperty {
        /**
         * Defines an array of individual custom action definitions that are available for use by the stateless rules in this `StatelessRulesAndCustomActions` specification.
         *
         * You name each custom action that you define, and then you can use it by name in your stateless rule `RuleGroup.RuleDefinition` `Actions` specification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statelessrulesandcustomactions.html#cfn-networkfirewall-rulegroup-statelessrulesandcustomactions-customactions
         */
        readonly customActions?: Array<CfnRuleGroup.CustomActionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Defines the set of stateless rules for use in a stateless rule group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statelessrulesandcustomactions.html#cfn-networkfirewall-rulegroup-statelessrulesandcustomactions-statelessrules
         */
        readonly statelessRules: Array<cdk.IResolvable | CfnRuleGroup.StatelessRuleProperty> | cdk.IResolvable;
    }
    /**
     * A single stateless rule.
     *
     * This is used in `RuleGroup.StatelessRulesAndCustomActions` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statelessrule.html
     */
    interface StatelessRuleProperty {
        /**
         * Indicates the order in which to run this rule relative to all of the rules that are defined for a stateless rule group.
         *
         * Network Firewall evaluates the rules in a rule group starting with the lowest priority setting. You must ensure that the priority settings are unique for the rule group.
         *
         * Each stateless rule group uses exactly one `StatelessRulesAndCustomActions` object, and each `StatelessRulesAndCustomActions` contains exactly one `StatelessRules` object. To ensure unique priority settings for your rule groups, set unique priorities for the stateless rules that you define inside any single `StatelessRules` object.
         *
         * You can change the priority settings of your rules at any time. To make it easier to insert rules later, number them so there's a wide range in between, for example use 100, 200, and so on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statelessrule.html#cfn-networkfirewall-rulegroup-statelessrule-priority
         */
        readonly priority: number;
        /**
         * Defines the stateless 5-tuple packet inspection criteria and the action to take on a packet that matches the criteria.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statelessrule.html#cfn-networkfirewall-rulegroup-statelessrule-ruledefinition
         */
        readonly ruleDefinition: cdk.IResolvable | CfnRuleGroup.RuleDefinitionProperty;
    }
    /**
     * The inspection criteria and action for a single stateless rule.
     *
     * AWS Network Firewall inspects each packet for the specified matching criteria. When a packet matches the criteria, Network Firewall performs the rule's actions on the packet.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ruledefinition.html
     */
    interface RuleDefinitionProperty {
        /**
         * The actions to take on a packet that matches one of the stateless rule definition's match attributes.
         *
         * You must specify a standard action and you can add custom actions.
         *
         * > Network Firewall only forwards a packet for stateful rule inspection if you specify `aws:forward_to_sfe` for a rule that the packet matches, or if the packet doesn't match any stateless rule and you specify `aws:forward_to_sfe` for the `StatelessDefaultActions` setting for the `FirewallPolicy` .
         *
         * For every rule, you must specify exactly one of the following standard actions.
         *
         * - *aws:pass* - Discontinues all inspection of the packet and permits it to go to its intended destination.
         * - *aws:drop* - Discontinues all inspection of the packet and blocks it from going to its intended destination.
         * - *aws:forward_to_sfe* - Discontinues stateless inspection of the packet and forwards it to the stateful rule engine for inspection.
         *
         * Additionally, you can specify a custom action. To do this, you define a custom action by name and type, then provide the name you've assigned to the action in this `Actions` setting.
         *
         * To provide more than one action in this setting, separate the settings with a comma. For example, if you have a publish metrics custom action that you've named `MyMetricsAction` , then you could specify the standard action `aws:pass` combined with the custom action using `[“aws:pass”, “MyMetricsAction”]` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ruledefinition.html#cfn-networkfirewall-rulegroup-ruledefinition-actions
         */
        readonly actions: Array<string>;
        /**
         * Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection.
         *
         * Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ruledefinition.html#cfn-networkfirewall-rulegroup-ruledefinition-matchattributes
         */
        readonly matchAttributes: cdk.IResolvable | CfnRuleGroup.MatchAttributesProperty;
    }
    /**
     * Criteria for Network Firewall to use to inspect an individual packet in stateless rule inspection.
     *
     * Each match attributes set can include one or more items such as IP address, CIDR range, port number, protocol, and TCP flags.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-matchattributes.html
     */
    interface MatchAttributesProperty {
        /**
         * The destination ports to inspect for.
         *
         * If not specified, this matches with any destination port. This setting is only used for protocols 6 (TCP) and 17 (UDP).
         *
         * You can specify individual ports, for example `1994` and you can specify port ranges, for example `1990:1994` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-matchattributes.html#cfn-networkfirewall-rulegroup-matchattributes-destinationports
         */
        readonly destinationPorts?: Array<cdk.IResolvable | CfnRuleGroup.PortRangeProperty> | cdk.IResolvable;
        /**
         * The destination IP addresses and address ranges to inspect for, in CIDR notation.
         *
         * If not specified, this matches with any destination address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-matchattributes.html#cfn-networkfirewall-rulegroup-matchattributes-destinations
         */
        readonly destinations?: Array<CfnRuleGroup.AddressProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The protocols to inspect for, specified using each protocol's assigned internet protocol number (IANA).
         *
         * If not specified, this matches with any protocol.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-matchattributes.html#cfn-networkfirewall-rulegroup-matchattributes-protocols
         */
        readonly protocols?: Array<number> | cdk.IResolvable;
        /**
         * The source ports to inspect for.
         *
         * If not specified, this matches with any source port. This setting is only used for protocols 6 (TCP) and 17 (UDP).
         *
         * You can specify individual ports, for example `1994` and you can specify port ranges, for example `1990:1994` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-matchattributes.html#cfn-networkfirewall-rulegroup-matchattributes-sourceports
         */
        readonly sourcePorts?: Array<cdk.IResolvable | CfnRuleGroup.PortRangeProperty> | cdk.IResolvable;
        /**
         * The source IP addresses and address ranges to inspect for, in CIDR notation.
         *
         * If not specified, this matches with any source address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-matchattributes.html#cfn-networkfirewall-rulegroup-matchattributes-sources
         */
        readonly sources?: Array<CfnRuleGroup.AddressProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The TCP flags and masks to inspect for.
         *
         * If not specified, this matches with any settings. This setting is only used for protocol 6 (TCP).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-matchattributes.html#cfn-networkfirewall-rulegroup-matchattributes-tcpflags
         */
        readonly tcpFlags?: Array<cdk.IResolvable | CfnRuleGroup.TCPFlagFieldProperty> | cdk.IResolvable;
    }
    /**
     * TCP flags and masks to inspect packets for. This is used in the `RuleGroup.MatchAttributes` specification.
     *
     * For example:
     *
     * `"TCPFlags": [ { "Flags": [ "ECE", "SYN" ], "Masks": [ "SYN", "ECE" ] } ]`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-tcpflagfield.html
     */
    interface TCPFlagFieldProperty {
        /**
         * Used in conjunction with the `Masks` setting to define the flags that must be set and flags that must not be set in order for the packet to match.
         *
         * This setting can only specify values that are also specified in the `Masks` setting.
         *
         * For the flags that are specified in the masks setting, the following must be true for the packet to match:
         *
         * - The ones that are set in this flags setting must be set in the packet.
         * - The ones that are not set in this flags setting must also not be set in the packet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-tcpflagfield.html#cfn-networkfirewall-rulegroup-tcpflagfield-flags
         */
        readonly flags: Array<string>;
        /**
         * The set of flags to consider in the inspection.
         *
         * To inspect all flags in the valid values list, leave this with no setting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-tcpflagfield.html#cfn-networkfirewall-rulegroup-tcpflagfield-masks
         */
        readonly masks?: Array<string>;
    }
    /**
     * A single port range specification.
     *
     * This is used for source and destination port ranges in the stateless `RuleGroup.MatchAttributes` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-portrange.html
     */
    interface PortRangeProperty {
        /**
         * The lower limit of the port range.
         *
         * This must be less than or equal to the `ToPort` specification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-portrange.html#cfn-networkfirewall-rulegroup-portrange-fromport
         */
        readonly fromPort: number;
        /**
         * The upper limit of the port range.
         *
         * This must be greater than or equal to the `FromPort` specification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-portrange.html#cfn-networkfirewall-rulegroup-portrange-toport
         */
        readonly toPort: number;
    }
    /**
     * A single IP address specification.
     *
     * This is used in the `RuleGroup.MatchAttributes` source and destination specifications.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-address.html
     */
    interface AddressProperty {
        /**
         * Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation.
         *
         * Network Firewall supports all address ranges for IPv4 and IPv6.
         *
         * Examples:
         *
         * - To configure Network Firewall to inspect for the IP address 192.0.2.44, specify `192.0.2.44/32` .
         * - To configure Network Firewall to inspect for IP addresses from 192.0.2.0 to 192.0.2.255, specify `192.0.2.0/24` .
         * - To configure Network Firewall to inspect for the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify `1111:0000:0000:0000:0000:0000:0000:0111/128` .
         * - To configure Network Firewall to inspect for IP addresses from 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify `1111:0000:0000:0000:0000:0000:0000:0000/64` .
         *
         * For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-address.html#cfn-networkfirewall-rulegroup-address-addressdefinition
         */
        readonly addressDefinition: string;
    }
    /**
     * An optional, non-standard action to use for stateless packet handling.
     *
     * You can define this in addition to the standard action that you must specify.
     *
     * You define and name the custom actions that you want to be able to use, and then you reference them by name in your actions settings.
     *
     * You can use custom actions in the following places:
     *
     * - In an `RuleGroup.StatelessRulesAndCustomActions` . The custom actions are available for use by name inside the `StatelessRulesAndCustomActions` where you define them. You can use them for your stateless rule actions to specify what to do with a packet that matches the rule's match attributes.
     * - In an `FirewallPolicy` specification, in `StatelessCustomActions` . The custom actions are available for use inside the policy where you define them. You can use them for the policy's default stateless actions settings to specify what to do with packets that don't match any of the policy's stateless rules.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-customaction.html
     */
    interface CustomActionProperty {
        /**
         * The custom action associated with the action name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-customaction.html#cfn-networkfirewall-rulegroup-customaction-actiondefinition
         */
        readonly actionDefinition: CfnRuleGroup.ActionDefinitionProperty | cdk.IResolvable;
        /**
         * The descriptive name of the custom action.
         *
         * You can't change the name of a custom action after you create it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-customaction.html#cfn-networkfirewall-rulegroup-customaction-actionname
         */
        readonly actionName: string;
    }
    /**
     * A custom action to use in stateless rule actions settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-actiondefinition.html
     */
    interface ActionDefinitionProperty {
        /**
         * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet.
         *
         * This setting defines a CloudWatch dimension value to be published.
         *
         * You can pair this custom action with any of the standard stateless rule actions. For example, you could pair this in a rule action with the standard action that forwards the packet for stateful inspection. Then, when a packet matches the rule, Network Firewall publishes metrics for the packet and forwards it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-actiondefinition.html#cfn-networkfirewall-rulegroup-actiondefinition-publishmetricaction
         */
        readonly publishMetricAction?: cdk.IResolvable | CfnRuleGroup.PublishMetricActionProperty;
    }
    /**
     * Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet.
     *
     * This setting defines a CloudWatch dimension value to be published.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-publishmetricaction.html
     */
    interface PublishMetricActionProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-publishmetricaction.html#cfn-networkfirewall-rulegroup-publishmetricaction-dimensions
         */
        readonly dimensions: Array<CfnRuleGroup.DimensionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The value to use in an Amazon CloudWatch custom metric dimension.
     *
     * This is used in the `PublishMetrics` custom action. A CloudWatch custom metric dimension is a name/value pair that's part of the identity of a metric.
     *
     * AWS Network Firewall sets the dimension name to `CustomAction` and you provide the dimension value.
     *
     * For more information about CloudWatch custom metric dimensions, see [Publishing Custom Metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html#usingDimensions) in the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-dimension.html
     */
    interface DimensionProperty {
        /**
         * The value to use in the custom metric dimension.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-dimension.html#cfn-networkfirewall-rulegroup-dimension-value
         */
        readonly value: string;
    }
    /**
     * A single Suricata rules specification, for use in a stateful rule group.
     *
     * Use this option to specify a simple Suricata rule with protocol, source and destination, ports, direction, and rule options. For information about the Suricata `Rules` format, see [Rules Format](https://docs.aws.amazon.com/https://suricata.readthedocs.io/en/suricata-7.0.3/rules/intro.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statefulrule.html
     */
    interface StatefulRuleProperty {
        /**
         * Defines what Network Firewall should do with the packets in a traffic flow when the flow matches the stateful rule criteria.
         *
         * For all actions, Network Firewall performs the specified action and discontinues stateful inspection of the traffic flow.
         *
         * The actions for a stateful rule are defined as follows:
         *
         * - *PASS* - Permits the packets to go to the intended destination.
         * - *DROP* - Blocks the packets from going to the intended destination and sends an alert log message, if alert logging is configured in the `Firewall` `LoggingConfiguration` .
         * - *REJECT* - Drops traffic that matches the conditions of the stateful rule and sends a TCP reset packet back to sender of the packet. A TCP reset packet is a packet with no payload and a `RST` bit contained in the TCP header flags. `REJECT` is available only for TCP traffic.
         * - *ALERT* - Permits the packets to go to the intended destination and sends an alert log message, if alert logging is configured in the `Firewall` `LoggingConfiguration` .
         *
         * You can use this action to test a rule that you intend to use to drop traffic. You can enable the rule with `ALERT` action, verify in the logs that the rule is filtering as you want, then change the action to `DROP` .
         * - *REJECT* - Drops TCP traffic that matches the conditions of the stateful rule, and sends a TCP reset packet back to sender of the packet. A TCP reset packet is a packet with no payload and a `RST` bit contained in the TCP header flags. Also sends an alert log mesage if alert logging is configured in the `Firewall` `LoggingConfiguration` .
         *
         * `REJECT` isn't currently available for use with IMAP and FTP protocols.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statefulrule.html#cfn-networkfirewall-rulegroup-statefulrule-action
         */
        readonly action: string;
        /**
         * The stateful inspection criteria for this rule, used to inspect traffic flows.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statefulrule.html#cfn-networkfirewall-rulegroup-statefulrule-header
         */
        readonly header: CfnRuleGroup.HeaderProperty | cdk.IResolvable;
        /**
         * Additional settings for a stateful rule, provided as keywords and settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-statefulrule.html#cfn-networkfirewall-rulegroup-statefulrule-ruleoptions
         */
        readonly ruleOptions: Array<cdk.IResolvable | CfnRuleGroup.RuleOptionProperty> | cdk.IResolvable;
    }
    /**
     * The 5-tuple criteria for AWS Network Firewall to use to inspect packet headers in stateful traffic flow inspection.
     *
     * Traffic flows that match the criteria are a match for the corresponding stateful rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-header.html
     */
    interface HeaderProperty {
        /**
         * The destination IP address or address range to inspect for, in CIDR notation.
         *
         * To match with any address, specify `ANY` .
         *
         * Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6.
         *
         * Examples:
         *
         * - To configure Network Firewall to inspect for the IP address 192.0.2.44, specify `192.0.2.44/32` .
         * - To configure Network Firewall to inspect for IP addresses from 192.0.2.0 to 192.0.2.255, specify `192.0.2.0/24` .
         * - To configure Network Firewall to inspect for the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify `1111:0000:0000:0000:0000:0000:0000:0111/128` .
         * - To configure Network Firewall to inspect for IP addresses from 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify `1111:0000:0000:0000:0000:0000:0000:0000/64` .
         *
         * For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-header.html#cfn-networkfirewall-rulegroup-header-destination
         */
        readonly destination: string;
        /**
         * The destination port to inspect for.
         *
         * You can specify an individual port, for example `1994` and you can specify a port range, for example `1990:1994` . To match with any port, specify `ANY` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-header.html#cfn-networkfirewall-rulegroup-header-destinationport
         */
        readonly destinationPort: string;
        /**
         * The direction of traffic flow to inspect.
         *
         * If set to `ANY` , the inspection matches bidirectional traffic, both from the source to the destination and from the destination to the source. If set to `FORWARD` , the inspection only matches traffic going from the source to the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-header.html#cfn-networkfirewall-rulegroup-header-direction
         */
        readonly direction: string;
        /**
         * The protocol to inspect for.
         *
         * To specify all, you can use `IP` , because all traffic on AWS and on the internet is IP.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-header.html#cfn-networkfirewall-rulegroup-header-protocol
         */
        readonly protocol: string;
        /**
         * The source IP address or address range to inspect for, in CIDR notation.
         *
         * To match with any address, specify `ANY` .
         *
         * Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation. Network Firewall supports all address ranges for IPv4 and IPv6.
         *
         * Examples:
         *
         * - To configure Network Firewall to inspect for the IP address 192.0.2.44, specify `192.0.2.44/32` .
         * - To configure Network Firewall to inspect for IP addresses from 192.0.2.0 to 192.0.2.255, specify `192.0.2.0/24` .
         * - To configure Network Firewall to inspect for the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify `1111:0000:0000:0000:0000:0000:0000:0111/128` .
         * - To configure Network Firewall to inspect for IP addresses from 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify `1111:0000:0000:0000:0000:0000:0000:0000/64` .
         *
         * For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-header.html#cfn-networkfirewall-rulegroup-header-source
         */
        readonly source: string;
        /**
         * The source port to inspect for.
         *
         * You can specify an individual port, for example `1994` and you can specify a port range, for example `1990:1994` . To match with any port, specify `ANY` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-header.html#cfn-networkfirewall-rulegroup-header-sourceport
         */
        readonly sourcePort: string;
    }
    /**
     * Additional settings for a stateful rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ruleoption.html
     */
    interface RuleOptionProperty {
        /**
         * The Suricata rule option keywords.
         *
         * For Network Firewall , the keyword signature ID (sid) is required in the format `sid:112233` . The sid must be unique within the rule group. For information about Suricata rule option keywords, see [Rule options](https://docs.aws.amazon.com/https://suricata.readthedocs.io/en/suricata-6.0.9/rules/intro.html#rule-options) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ruleoption.html#cfn-networkfirewall-rulegroup-ruleoption-keyword
         */
        readonly keyword: string;
        /**
         * The Suricata rule option settings.
         *
         * Settings have zero or more values, and the number of possible settings and required settings depends on the keyword. The format for Settings is `number` . For information about Suricata rule option settings, see [Rule options](https://docs.aws.amazon.com/https://suricata.readthedocs.io/en/suricata-6.0.9/rules/intro.html#rule-options) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ruleoption.html#cfn-networkfirewall-rulegroup-ruleoption-settings
         */
        readonly settings?: Array<string>;
    }
    /**
     * Stateful inspection criteria for a domain list rule group.
     *
     * For HTTPS traffic, domain filtering is SNI-based. It uses the server name indicator extension of the TLS handshake.
     *
     * By default, Network Firewall domain list inspection only includes traffic coming from the VPC where you deploy the firewall. To inspect traffic from IP addresses outside of the deployment VPC, you set the `HOME_NET` rule variable to include the CIDR range of the deployment VPC plus the other CIDR ranges. For more information, see `RuleGroup.RuleVariables` in this guide and [Stateful domain list rule groups in AWS Network Firewall](https://docs.aws.amazon.com/network-firewall/latest/developerguide/stateful-rule-groups-domain-names.html) in the *Network Firewall Developer Guide*
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulessourcelist.html
     */
    interface RulesSourceListProperty {
        /**
         * Whether you want to allow or deny access to the domains in your target list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulessourcelist.html#cfn-networkfirewall-rulegroup-rulessourcelist-generatedrulestype
         */
        readonly generatedRulesType: string;
        /**
         * The domains that you want to inspect for in your traffic flows. Valid domain specifications are the following:.
         *
         * - Explicit names. For example, `abc.example.com` matches only the domain `abc.example.com` .
         * - Names that use a domain wildcard, which you indicate with an initial ' `.` '. For example, `.example.com` matches `example.com` and matches all subdomains of `example.com` , such as `abc.example.com` and `www.example.com` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulessourcelist.html#cfn-networkfirewall-rulegroup-rulessourcelist-targets
         */
        readonly targets: Array<string>;
        /**
         * The types of targets to inspect for.
         *
         * Valid values are `TLS_SNI` and `HTTP_HOST` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulessourcelist.html#cfn-networkfirewall-rulegroup-rulessourcelist-targettypes
         */
        readonly targetTypes: Array<string>;
    }
    /**
     * Settings that are available for use in the rules in the `RuleGroup` where this is defined.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulevariables.html
     */
    interface RuleVariablesProperty {
        /**
         * A list of IP addresses and address ranges, in CIDR notation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulevariables.html#cfn-networkfirewall-rulegroup-rulevariables-ipsets
         */
        readonly ipSets?: cdk.IResolvable | Record<string, CfnRuleGroup.IPSetProperty | cdk.IResolvable>;
        /**
         * A list of port ranges.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-rulevariables.html#cfn-networkfirewall-rulegroup-rulevariables-portsets
         */
        readonly portSets?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnRuleGroup.PortSetProperty>;
    }
    /**
     * A set of port ranges for use in the rules in a rule group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-portset.html
     */
    interface PortSetProperty {
        /**
         * The set of port ranges.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-portset.html#cfn-networkfirewall-rulegroup-portset-definition
         */
        readonly definition?: Array<string>;
    }
    /**
     * A list of IP addresses and address ranges, in CIDR notation.
     *
     * This is part of a `RuleGroup.RuleVariables` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ipset.html
     */
    interface IPSetProperty {
        /**
         * The list of IP addresses and address ranges, in CIDR notation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-ipset.html#cfn-networkfirewall-rulegroup-ipset-definition
         */
        readonly definition?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnRuleGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html
 */
export interface CfnRuleGroupProps {
    /**
     * The maximum operating resources that this rule group can use.
     *
     * You can't change a rule group's capacity setting after you create the rule group. When you update a rule group, you are limited to this capacity. When you reference a rule group from a firewall policy, Network Firewall reserves this capacity for the rule group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-capacity
     */
    readonly capacity: number;
    /**
     * A description of the rule group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-description
     */
    readonly description?: string;
    /**
     * An object that defines the rule group rules.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulegroup
     */
    readonly ruleGroup?: cdk.IResolvable | CfnRuleGroup.RuleGroupProperty;
    /**
     * The descriptive name of the rule group.
     *
     * You can't change the name of a rule group after you create it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-rulegroupname
     */
    readonly ruleGroupName: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Indicates whether the rule group is stateless or stateful.
     *
     * If the rule group is stateless, it contains
     * stateless rules. If it is stateful, it contains stateful rules.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-rulegroup.html#cfn-networkfirewall-rulegroup-type
     */
    readonly type: string;
}
/**
 * The object that defines a TLS inspection configuration.
 *
 * AWS Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.
 *
 * To use a TLS inspection configuration, you add it to a new Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect the traffic traveling through your firewalls. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see [Inspecting SSL/TLS traffic with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html) in the *AWS Network Firewall Developer Guide* .
 *
 * @cloudformationResource AWS::NetworkFirewall::TLSInspectionConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html
 */
export declare class CfnTLSInspectionConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTLSInspectionConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTLSInspectionConfiguration;
    /**
     * The Amazon Resource Name (ARN) of the TLS inspection configuration.
     *
     * @cloudformationAttribute TLSInspectionConfigurationArn
     */
    readonly attrTlsInspectionConfigurationArn: string;
    /**
     * A unique identifier for the TLS inspection configuration. This ID is returned in the responses to create and list commands. You provide it to operations such as update and delete.
     *
     * @cloudformationAttribute TLSInspectionConfigurationId
     */
    readonly attrTlsInspectionConfigurationId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A description of the TLS inspection configuration.
     */
    description?: string;
    /**
     * The key:value pairs to associate with the resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The object that defines a TLS inspection configuration.
     */
    tlsInspectionConfiguration: cdk.IResolvable | CfnTLSInspectionConfiguration.TLSInspectionConfigurationProperty;
    /**
     * The descriptive name of the TLS inspection configuration.
     */
    tlsInspectionConfigurationName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTLSInspectionConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTLSInspectionConfiguration {
    /**
     * The object that defines a TLS inspection configuration. This defines the TLS inspection configuration.
     *
     * AWS Network Firewall uses a TLS inspection configuration to decrypt traffic. Network Firewall re-encrypts the traffic before sending it to its destination.
     *
     * To use a TLS inspection configuration, you add it to a new Network Firewall firewall policy, then you apply the firewall policy to a firewall. Network Firewall acts as a proxy service to decrypt and inspect the traffic traveling through your firewalls. You can reference a TLS inspection configuration from more than one firewall policy, and you can use a firewall policy in more than one firewall. For more information about using TLS inspection configurations, see [Inspecting SSL/TLS traffic with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html) in the *AWS Network Firewall Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-tlsinspectionconfiguration.html
     */
    interface TLSInspectionConfigurationProperty {
        /**
         * Lists the server certificate configurations that are associated with the TLS configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-tlsinspectionconfiguration-servercertificateconfigurations
         */
        readonly serverCertificateConfigurations?: Array<cdk.IResolvable | CfnTLSInspectionConfiguration.ServerCertificateConfigurationProperty> | cdk.IResolvable;
    }
    /**
     * Configures the AWS Certificate Manager certificates and scope that Network Firewall uses to decrypt and re-encrypt traffic using a [TLSInspectionConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html) . You can configure `ServerCertificates` for inbound SSL/TLS inspection, a `CertificateAuthorityArn` for outbound SSL/TLS inspection, or both. For information about working with certificates for TLS inspection, see [Using SSL/TLS server certficiates with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-certificate-requirements.html) in the *AWS Network Firewall Developer Guide* .
     *
     * > If a server certificate that's associated with your [TLSInspectionConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html) is revoked, deleted, or expired it can result in client-side TLS errors.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration.html
     */
    interface ServerCertificateConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the imported certificate authority (CA) certificate within AWS Certificate Manager (ACM) to use for outbound SSL/TLS inspection.
         *
         * The following limitations apply:
         *
         * - You can use CA certificates that you imported into ACM, but you can't generate CA certificates with ACM.
         * - You can't use certificates issued by AWS Private Certificate Authority .
         *
         * For more information about configuring certificates for outbound inspection, see [Using SSL/TLS certificates with certificates with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection-certificate-requirements.html) in the *AWS Network Firewall Developer Guide* .
         *
         * For information about working with certificates in ACM, see [Importing certificates](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the *AWS Certificate Manager User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration-certificateauthorityarn
         */
        readonly certificateAuthorityArn?: string;
        /**
         * When enabled, Network Firewall checks if the server certificate presented by the server in the SSL/TLS connection has a revoked or unkown status.
         *
         * If the certificate has an unknown or revoked status, you must specify the actions that Network Firewall takes on outbound traffic. To check the certificate revocation status, you must also specify a `CertificateAuthorityArn` in [ServerCertificateConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-servercertificateconfiguration.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration-checkcertificaterevocationstatus
         */
        readonly checkCertificateRevocationStatus?: CfnTLSInspectionConfiguration.CheckCertificateRevocationStatusProperty | cdk.IResolvable;
        /**
         * A list of scopes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration-scopes
         */
        readonly scopes?: Array<cdk.IResolvable | CfnTLSInspectionConfiguration.ServerCertificateScopeProperty> | cdk.IResolvable;
        /**
         * The list of server certificates to use for inbound SSL/TLS inspection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration-servercertificates
         */
        readonly serverCertificates?: Array<cdk.IResolvable | CfnTLSInspectionConfiguration.ServerCertificateProperty> | cdk.IResolvable;
    }
    /**
     * Any AWS Certificate Manager (ACM) Secure Sockets Layer/Transport Layer Security (SSL/TLS) server certificate that's associated with a [ServerCertificateConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificateconfiguration.html) . Used in a [TLSInspectionConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html) for inspection of inbound traffic to your firewall. You must request or import a SSL/TLS certificate into ACM for each domain Network Firewall needs to decrypt and inspect. AWS Network Firewall uses the SSL/TLS certificates to decrypt specified inbound SSL/TLS traffic going to your firewall. For information about working with certificates in AWS Certificate Manager , see [Request a public certificate](https://docs.aws.amazon.com/acm/latest/userguide/gs-acm-request-public.html) or [Importing certificates](https://docs.aws.amazon.com/acm/latest/userguide/import-certificate.html) in the *AWS Certificate Manager User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificate.html
     */
    interface ServerCertificateProperty {
        /**
         * The Amazon Resource Name (ARN) of the AWS Certificate Manager SSL/TLS server certificate that's used for inbound SSL/TLS inspection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificate.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificate-resourcearn
         */
        readonly resourceArn?: string;
    }
    /**
     * Settings that define the Secure Sockets Layer/Transport Layer Security (SSL/TLS) traffic that Network Firewall should decrypt for inspection by the stateful rule engine.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificatescope.html
     */
    interface ServerCertificateScopeProperty {
        /**
         * The destination ports to decrypt for inspection, in Transmission Control Protocol (TCP) format.
         *
         * If not specified, this matches with any destination port.
         *
         * You can specify individual ports, for example `1994` , and you can specify port ranges, such as `1990:1994` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificatescope.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificatescope-destinationports
         */
        readonly destinationPorts?: Array<cdk.IResolvable | CfnTLSInspectionConfiguration.PortRangeProperty> | cdk.IResolvable;
        /**
         * The destination IP addresses and address ranges to decrypt for inspection, in CIDR notation.
         *
         * If not specified, this
         * matches with any destination address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificatescope.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificatescope-destinations
         */
        readonly destinations?: Array<CfnTLSInspectionConfiguration.AddressProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The protocols to decrypt for inspection, specified using each protocol's assigned internet protocol number (IANA).
         *
         * Network Firewall currently supports only TCP.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificatescope.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificatescope-protocols
         */
        readonly protocols?: Array<number> | cdk.IResolvable;
        /**
         * The source ports to decrypt for inspection, in Transmission Control Protocol (TCP) format.
         *
         * If not specified, this matches with any source port.
         *
         * You can specify individual ports, for example `1994` , and you can specify port ranges, such as `1990:1994` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificatescope.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificatescope-sourceports
         */
        readonly sourcePorts?: Array<cdk.IResolvable | CfnTLSInspectionConfiguration.PortRangeProperty> | cdk.IResolvable;
        /**
         * The source IP addresses and address ranges to decrypt for inspection, in CIDR notation.
         *
         * If not specified, this
         * matches with any source address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-servercertificatescope.html#cfn-networkfirewall-tlsinspectionconfiguration-servercertificatescope-sources
         */
        readonly sources?: Array<CfnTLSInspectionConfiguration.AddressProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * A single IP address specification.
     *
     * This is used in the [MatchAttributes](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-matchattributes.html) source and destination settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-address.html
     */
    interface AddressProperty {
        /**
         * Specify an IP address or a block of IP addresses in Classless Inter-Domain Routing (CIDR) notation.
         *
         * Network Firewall supports all address ranges for IPv4 and IPv6.
         *
         * Examples:
         *
         * - To configure Network Firewall to inspect for the IP address 192.0.2.44, specify `192.0.2.44/32` .
         * - To configure Network Firewall to inspect for IP addresses from 192.0.2.0 to 192.0.2.255, specify `192.0.2.0/24` .
         * - To configure Network Firewall to inspect for the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify `1111:0000:0000:0000:0000:0000:0000:0111/128` .
         * - To configure Network Firewall to inspect for IP addresses from 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify `1111:0000:0000:0000:0000:0000:0000:0000/64` .
         *
         * For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-address.html#cfn-networkfirewall-tlsinspectionconfiguration-address-addressdefinition
         */
        readonly addressDefinition: string;
    }
    /**
     * A single port range specification.
     *
     * This is used for source and destination port ranges in the stateless rule [MatchAttributes](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-rulegroup-matchattributes.html) , `SourcePorts` , and `DestinationPorts` settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-portrange.html
     */
    interface PortRangeProperty {
        /**
         * The lower limit of the port range.
         *
         * This must be less than or equal to the `ToPort` specification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-portrange.html#cfn-networkfirewall-tlsinspectionconfiguration-portrange-fromport
         */
        readonly fromPort: number;
        /**
         * The upper limit of the port range.
         *
         * This must be greater than or equal to the `FromPort` specification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-portrange.html#cfn-networkfirewall-tlsinspectionconfiguration-portrange-toport
         */
        readonly toPort: number;
    }
    /**
     * When enabled, Network Firewall checks if the server certificate presented by the server in the SSL/TLS connection has a revoked or unkown status.
     *
     * If the certificate has an unknown or revoked status, you must specify the actions that Network Firewall takes on outbound traffic. To check the certificate revocation status, you must also specify a `CertificateAuthorityArn` in [ServerCertificateConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-servercertificateconfiguration.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-checkcertificaterevocationstatus.html
     */
    interface CheckCertificateRevocationStatusProperty {
        /**
         * Configures how Network Firewall processes traffic when it determines that the certificate presented by the server in the SSL/TLS connection has a revoked status.
         *
         * - *PASS* - Allow the connection to continue, and pass subsequent packets to the stateful engine for inspection.
         * - *DROP* - Network Firewall closes the connection and drops subsequent packets for that connection.
         * - *REJECT* - Network Firewall sends a TCP reject packet back to your client. The service closes the connection and drops subsequent packets for that connection. `REJECT` is available only for TCP traffic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-checkcertificaterevocationstatus.html#cfn-networkfirewall-tlsinspectionconfiguration-checkcertificaterevocationstatus-revokedstatusaction
         */
        readonly revokedStatusAction?: string;
        /**
         * Configures how Network Firewall processes traffic when it determines that the certificate presented by the server in the SSL/TLS connection has an unknown status, or a status that cannot be determined for any other reason, including when the service is unable to connect to the OCSP and CRL endpoints for the certificate.
         *
         * - *PASS* - Allow the connection to continue, and pass subsequent packets to the stateful engine for inspection.
         * - *DROP* - Network Firewall closes the connection and drops subsequent packets for that connection.
         * - *REJECT* - Network Firewall sends a TCP reject packet back to your client. The service closes the connection and drops subsequent packets for that connection. `REJECT` is available only for TCP traffic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkfirewall-tlsinspectionconfiguration-checkcertificaterevocationstatus.html#cfn-networkfirewall-tlsinspectionconfiguration-checkcertificaterevocationstatus-unknownstatusaction
         */
        readonly unknownStatusAction?: string;
    }
}
/**
 * Properties for defining a `CfnTLSInspectionConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html
 */
export interface CfnTLSInspectionConfigurationProps {
    /**
     * A description of the TLS inspection configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-description
     */
    readonly description?: string;
    /**
     * The key:value pairs to associate with the resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The object that defines a TLS inspection configuration.
     *
     * AWS Network Firewall uses TLS inspection configurations to decrypt your firewall's inbound and outbound SSL/TLS traffic. After decryption, AWS Network Firewall inspects the traffic according to your firewall policy's stateful rules, and then re-encrypts it before sending it to its destination. You can enable inspection of your firewall's inbound traffic, outbound traffic, or both. To use TLS inspection with your firewall, you must first import or provision certificates using AWS Certificate Manager , create a TLS inspection configuration, add that configuration to a new firewall policy, and then associate that policy with your firewall. For more information about using TLS inspection configurations, see [Inspecting SSL/TLS traffic with TLS inspection configurations](https://docs.aws.amazon.com/network-firewall/latest/developerguide/tls-inspection.html) in the *AWS Network Firewall Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-tlsinspectionconfiguration
     */
    readonly tlsInspectionConfiguration: cdk.IResolvable | CfnTLSInspectionConfiguration.TLSInspectionConfigurationProperty;
    /**
     * The descriptive name of the TLS inspection configuration.
     *
     * You can't change the name of a TLS inspection configuration after you create it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkfirewall-tlsinspectionconfiguration.html#cfn-networkfirewall-tlsinspectionconfiguration-tlsinspectionconfigurationname
     */
    readonly tlsInspectionConfigurationName: string;
}
