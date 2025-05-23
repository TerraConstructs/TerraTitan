import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a cluster in Amazon Route 53 Application Recovery Controller.
 *
 * A cluster is a set of redundant Regional endpoints that you can run Route 53 ARC API calls against to update or get the state of one or more routing controls.
 *
 * @cloudformationResource AWS::Route53RecoveryControl::Cluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-cluster.html
 */
export declare class CfnCluster extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCluster from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCluster;
    /**
     * The Amazon Resource Name (ARN) of the cluster.
     *
     * @cloudformationAttribute ClusterArn
     */
    readonly attrClusterArn: string;
    /**
     * An array of endpoints for the cluster. You specify one of these endpoints when you want to set or retrieve a routing control state in the cluster.
     *
     * @cloudformationAttribute ClusterEndpoints
     */
    readonly attrClusterEndpoints: cdk.IResolvable;
    /**
     * The deployment status of the cluster. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Name of the cluster.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags associated with the cluster.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnClusterProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCluster {
    /**
     * A cluster endpoint.
     *
     * You specify one of the five cluster endpoints, which consists of an endpoint URL and an AWS Region, when you want to get or update a routing control state in the cluster.
     *
     * For more information, see [Code examples](https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples.html) in the Amazon Route 53 Application Recovery Controller Developer Guide.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-cluster-clusterendpoint.html
     */
    interface ClusterEndpointProperty {
        /**
         * A cluster endpoint URL for one of the five redundant clusters that you specify to set or retrieve a routing control state.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-cluster-clusterendpoint.html#cfn-route53recoverycontrol-cluster-clusterendpoint-endpoint
         */
        readonly endpoint?: string;
        /**
         * The AWS Region for a cluster endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-cluster-clusterendpoint.html#cfn-route53recoverycontrol-cluster-clusterendpoint-region
         */
        readonly region?: string;
    }
}
/**
 * Properties for defining a `CfnCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-cluster.html
 */
export interface CfnClusterProps {
    /**
     * Name of the cluster.
     *
     * You can use any non-white space character in the name except the following: & > < ' (single quote) " (double quote) ; (semicolon).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-cluster.html#cfn-route53recoverycontrol-cluster-name
     */
    readonly name: string;
    /**
     * The tags associated with the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-cluster.html#cfn-route53recoverycontrol-cluster-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a new control panel in Amazon Route 53 Application Recovery Controller.
 *
 * A control panel represents a group of routing controls that can be changed together in a single transaction. You can use a control panel to centrally view the operational status of applications across your organization, and trigger multi-app failovers in a single transaction, for example, to fail over from one AWS Region (cell) to another.
 *
 * @cloudformationResource AWS::Route53RecoveryControl::ControlPanel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-controlpanel.html
 */
export declare class CfnControlPanel extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnControlPanel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnControlPanel;
    /**
     * The Amazon Resource Name (ARN) of the control panel.
     *
     * @cloudformationAttribute ControlPanelArn
     */
    readonly attrControlPanelArn: string;
    /**
     * The boolean flag that is set to true for the default control panel in the cluster.
     *
     * @cloudformationAttribute DefaultControlPanel
     */
    readonly attrDefaultControlPanel: cdk.IResolvable;
    /**
     * The number of routing controls in the control panel.
     *
     * @cloudformationAttribute RoutingControlCount
     */
    readonly attrRoutingControlCount: number;
    /**
     * The deployment status of control panel. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The Amazon Resource Name (ARN) of the cluster for the control panel.
     */
    clusterArn?: string;
    /**
     * The name of the control panel.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags associated with the control panel.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnControlPanelProps);
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
 * Properties for defining a `CfnControlPanel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-controlpanel.html
 */
export interface CfnControlPanelProps {
    /**
     * The Amazon Resource Name (ARN) of the cluster for the control panel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-controlpanel.html#cfn-route53recoverycontrol-controlpanel-clusterarn
     */
    readonly clusterArn?: string;
    /**
     * The name of the control panel.
     *
     * You can use any non-white space character in the name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-controlpanel.html#cfn-route53recoverycontrol-controlpanel-name
     */
    readonly name: string;
    /**
     * The tags associated with the control panel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-controlpanel.html#cfn-route53recoverycontrol-controlpanel-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a routing control in Amazon Route 53 Application Recovery Controller.
 *
 * Routing control states are maintained on the highly reliable cluster data plane.
 *
 * To get or update the state of the routing control, you must specify a cluster endpoint, which is an endpoint URL and an AWS Region. For more information, see [Code examples](https://docs.aws.amazon.com/r53recovery/latest/dg/service_code_examples.html) in the Amazon Route 53 Application Recovery Controller Developer Guide.
 *
 * @cloudformationResource AWS::Route53RecoveryControl::RoutingControl
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html
 */
export declare class CfnRoutingControl extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRoutingControl from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRoutingControl;
    /**
     * The Amazon Resource Name (ARN) of the routing control.
     *
     * @cloudformationAttribute RoutingControlArn
     */
    readonly attrRoutingControlArn: string;
    /**
     * The deployment status of the routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The Amazon Resource Name (ARN) of the cluster that hosts the routing control.
     */
    clusterArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the control panel that includes the routing control.
     */
    controlPanelArn?: string;
    /**
     * The name of the routing control.
     */
    name: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRoutingControlProps);
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
 * Properties for defining a `CfnRoutingControl`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html
 */
export interface CfnRoutingControlProps {
    /**
     * The Amazon Resource Name (ARN) of the cluster that hosts the routing control.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html#cfn-route53recoverycontrol-routingcontrol-clusterarn
     */
    readonly clusterArn?: string;
    /**
     * The Amazon Resource Name (ARN) of the control panel that includes the routing control.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html#cfn-route53recoverycontrol-routingcontrol-controlpanelarn
     */
    readonly controlPanelArn?: string;
    /**
     * The name of the routing control.
     *
     * You can use any non-white space character in the name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-routingcontrol.html#cfn-route53recoverycontrol-routingcontrol-name
     */
    readonly name: string;
}
/**
 * Creates a safety rule in a control panel in Amazon Route 53 Application Recovery Controller.
 *
 * Safety rules in Amazon Route 53 Application Recovery Controller let you add safeguards around changing routing control states, and enabling and disabling routing controls, to help prevent unwanted outcomes. Note that the name of a safety rule must be unique within a control panel.
 *
 * There are two types of safety rules in Route 53 ARC: assertion rules and gating rules.
 *
 * Assertion rule: An assertion rule enforces that, when you change a routing control state, certain criteria are met. For example, the criteria might be that at least one routing control state is `On` after the transaction completes so that traffic continues to be directed to at least one cell for the application. This prevents a fail-open scenario.
 *
 * Gating rule: A gating rule lets you configure a gating routing control as an overall on-off switch for a group of routing controls. Or, you can configure more complex gating scenarios, for example, by configuring multiple gating routing controls.
 *
 * For more information, see [Safety rules](https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.safety-rules.html) in the Amazon Route 53 Application Recovery Controller Developer Guide.
 *
 * @cloudformationResource AWS::Route53RecoveryControl::SafetyRule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html
 */
export declare class CfnSafetyRule extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSafetyRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSafetyRule;
    /**
     * The Amazon Resource Name (ARN) of the safety rule.
     *
     * @cloudformationAttribute SafetyRuleArn
     */
    readonly attrSafetyRuleArn: string;
    /**
     * The deployment status of the safety rule. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * An assertion rule enforces that, when you change a routing control state, that the criteria that you set in the rule configuration is met.
     */
    assertionRule?: CfnSafetyRule.AssertionRuleProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the control panel.
     */
    controlPanelArn: string;
    /**
     * A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.
     */
    gatingRule?: CfnSafetyRule.GatingRuleProperty | cdk.IResolvable;
    /**
     * The name of the assertion rule.
     */
    name: string;
    /**
     * The criteria that you set for specific assertion controls (routing controls) that designate how many control states must be `ON` as the result of a transaction.
     */
    ruleConfig: cdk.IResolvable | CfnSafetyRule.RuleConfigProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags associated with the safety rule.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSafetyRuleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSafetyRule {
    /**
     * An assertion rule enforces that, when you change a routing control state, that the criteria that you set in the rule configuration is met.
     *
     * Otherwise, the change to the routing control is not accepted. For example, the criteria might be that at least one routing control state is `On` after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-assertionrule.html
     */
    interface AssertionRuleProperty {
        /**
         * The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed.
         *
         * For example, you might include three routing controls, one for each of three AWS Regions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-assertionrule.html#cfn-route53recoverycontrol-safetyrule-assertionrule-assertedcontrols
         */
        readonly assertedControls: Array<string>;
        /**
         * An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail.
         *
         * This helps prevent flapping of state. The wait period is 5000 ms by default, but you can choose a custom value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-assertionrule.html#cfn-route53recoverycontrol-safetyrule-assertionrule-waitperiodms
         */
        readonly waitPeriodMs: number;
    }
    /**
     * The rule configuration for an assertion rule.
     *
     * That is, the criteria that you set for specific assertion controls (routing controls) that specify how many controls must be enabled after a transaction completes.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-ruleconfig.html
     */
    interface RuleConfigProperty {
        /**
         * Logical negation of the rule.
         *
         * If the rule would usually evaluate true, it's evaluated as false, and vice versa.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-ruleconfig.html#cfn-route53recoverycontrol-safetyrule-ruleconfig-inverted
         */
        readonly inverted: boolean | cdk.IResolvable;
        /**
         * The value of N, when you specify an `ATLEAST` rule type.
         *
         * That is, `Threshold` is the number of controls that must be set when you specify an `ATLEAST` type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-ruleconfig.html#cfn-route53recoverycontrol-safetyrule-ruleconfig-threshold
         */
        readonly threshold: number;
        /**
         * A rule can be one of the following: `ATLEAST` , `AND` , or `OR` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-ruleconfig.html#cfn-route53recoverycontrol-safetyrule-ruleconfig-type
         */
        readonly type: string;
    }
    /**
     * A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.
     *
     * For example, if you specify one gating routing control and you set the `Type` in the rule configuration to `OR` , that indicates that you must set the gating routing control to `On` for the rule to evaluate as true; that is, for the gating control switch to be On. When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-gatingrule.html
     */
    interface GatingRuleProperty {
        /**
         * An array of gating routing control Amazon Resource Names (ARNs).
         *
         * For a simple on-off switch, specify the ARN for one routing control. The gating routing controls are evaluated by the rule configuration that you specify to determine if the target routing control states can be changed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-gatingrule.html#cfn-route53recoverycontrol-safetyrule-gatingrule-gatingcontrols
         */
        readonly gatingControls: Array<string>;
        /**
         * An array of target routing control Amazon Resource Names (ARNs) for which the states can only be updated if the rule configuration that you specify evaluates to true for the gating routing control.
         *
         * As a simple example, if you have a single gating control, it acts as an overall on-off switch for a set of target routing controls. You can use this to manually override automated failover, for example.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-gatingrule.html#cfn-route53recoverycontrol-safetyrule-gatingrule-targetcontrols
         */
        readonly targetControls: Array<string>;
        /**
         * An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail.
         *
         * This helps prevent flapping of state. The wait period is 5000 ms by default, but you can choose a custom value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53recoverycontrol-safetyrule-gatingrule.html#cfn-route53recoverycontrol-safetyrule-gatingrule-waitperiodms
         */
        readonly waitPeriodMs: number;
    }
}
/**
 * Properties for defining a `CfnSafetyRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html
 */
export interface CfnSafetyRuleProps {
    /**
     * An assertion rule enforces that, when you change a routing control state, that the criteria that you set in the rule configuration is met.
     *
     * Otherwise, the change to the routing control is not accepted. For example, the criteria might be that at least one routing control state is `On` after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-assertionrule
     */
    readonly assertionRule?: CfnSafetyRule.AssertionRuleProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the control panel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-controlpanelarn
     */
    readonly controlPanelArn: string;
    /**
     * A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.
     *
     * For example, if you specify one gating routing control and you set the `Type` in the rule configuration to `OR` , that indicates that you must set the gating routing control to `On` for the rule to evaluate as true; that is, for the gating control switch to be On. When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-gatingrule
     */
    readonly gatingRule?: CfnSafetyRule.GatingRuleProperty | cdk.IResolvable;
    /**
     * The name of the assertion rule.
     *
     * The name must be unique within a control panel. You can use any non-white space character in the name except the following: & > < ' (single quote) " (double quote) ; (semicolon)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-name
     */
    readonly name: string;
    /**
     * The criteria that you set for specific assertion controls (routing controls) that designate how many control states must be `ON` as the result of a transaction.
     *
     * For example, if you have three assertion controls, you might specify `ATLEAST 2` for your rule configuration. This means that at least two assertion controls must be `ON` , so that at least two AWS Regions have traffic flowing to them.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-ruleconfig
     */
    readonly ruleConfig: cdk.IResolvable | CfnSafetyRule.RuleConfigProperty;
    /**
     * The tags associated with the safety rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
