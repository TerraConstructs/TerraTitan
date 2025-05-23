import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Use the `AWS::XRay::Group` resource to specify a group with a name and a filter expression.
 *
 * Groups enable the collection of traces that match the filter expression, can be used to filter service graphs and traces, and to supply Amazon CloudWatch metrics.
 *
 * @cloudformationResource AWS::XRay::Group
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html
 */
export declare class CfnGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGroup;
    /**
     * The group ARN that was created or updated.
     *
     * @cloudformationAttribute GroupARN
     */
    readonly attrGroupArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The filter expression defining the parameters to include traces.
     */
    filterExpression?: string;
    /**
     * The unique case-sensitive name of the group.
     */
    groupName: string;
    /**
     * The structure containing configurations related to insights.
     */
    insightsConfiguration?: CfnGroup.InsightsConfigurationProperty | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnGroup {
    /**
     * The structure containing configurations related to insights.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-group-insightsconfiguration.html
     */
    interface InsightsConfigurationProperty {
        /**
         * Set the InsightsEnabled value to true to enable insights or false to disable insights.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-group-insightsconfiguration.html#cfn-xray-group-insightsconfiguration-insightsenabled
         */
        readonly insightsEnabled?: boolean | cdk.IResolvable;
        /**
         * Set the NotificationsEnabled value to true to enable insights notifications.
         *
         * Notifications can only be enabled on a group with InsightsEnabled set to true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-group-insightsconfiguration.html#cfn-xray-group-insightsconfiguration-notificationsenabled
         */
        readonly notificationsEnabled?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html
 */
export interface CfnGroupProps {
    /**
     * The filter expression defining the parameters to include traces.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html#cfn-xray-group-filterexpression
     */
    readonly filterExpression?: string;
    /**
     * The unique case-sensitive name of the group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html#cfn-xray-group-groupname
     */
    readonly groupName: string;
    /**
     * The structure containing configurations related to insights.
     *
     * - The InsightsEnabled boolean can be set to true to enable insights for the group or false to disable insights for the group.
     * - The NotificationsEnabled boolean can be set to true to enable insights notifications through Amazon EventBridge for the group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html#cfn-xray-group-insightsconfiguration
     */
    readonly insightsConfiguration?: CfnGroup.InsightsConfigurationProperty | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-group.html#cfn-xray-group-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Use `AWS::XRay::ResourcePolicy` to specify an X-Ray resource-based policy, which grants one or more AWS services and accounts permissions to access X-Ray .
 *
 * Each resource-based policy is associated with a specific AWS account.
 *
 * @cloudformationResource AWS::XRay::ResourcePolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-resourcepolicy.html
 */
export declare class CfnResourcePolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnResourcePolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnResourcePolicy;
    /**
     * A flag to indicate whether to bypass the resource-based policy lockout safety check.
     */
    bypassPolicyLockoutCheck?: boolean | cdk.IResolvable;
    /**
     * The resource-based policy document, which can be up to 5kb in size.
     */
    policyDocument: string;
    /**
     * The name of the resource-based policy.
     */
    policyName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnResourcePolicyProps);
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
 * Properties for defining a `CfnResourcePolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-resourcepolicy.html
 */
export interface CfnResourcePolicyProps {
    /**
     * A flag to indicate whether to bypass the resource-based policy lockout safety check.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-resourcepolicy.html#cfn-xray-resourcepolicy-bypasspolicylockoutcheck
     */
    readonly bypassPolicyLockoutCheck?: boolean | cdk.IResolvable;
    /**
     * The resource-based policy document, which can be up to 5kb in size.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-resourcepolicy.html#cfn-xray-resourcepolicy-policydocument
     */
    readonly policyDocument: string;
    /**
     * The name of the resource-based policy.
     *
     * Must be unique within a specific AWS account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-resourcepolicy.html#cfn-xray-resourcepolicy-policyname
     */
    readonly policyName: string;
}
/**
 * Use the `AWS::XRay::SamplingRule` resource to specify a sampling rule, which controls sampling behavior for instrumented applications.
 *
 * Include a `SamplingRule` entity to create or update a sampling rule.
 *
 * > `SamplingRule.Version` can only be set when creating a sampling rule. Updating the version will cause the update to fail.
 *
 * Services retrieve rules with [GetSamplingRules](https://docs.aws.amazon.com//xray/latest/api/API_GetSamplingRules.html) , and evaluate each rule in ascending order of *priority* for each request. If a rule matches, the service records a trace, borrowing it from the reservoir size. After 10 seconds, the service reports back to X-Ray with [GetSamplingTargets](https://docs.aws.amazon.com//xray/latest/api/API_GetSamplingTargets.html) to get updated versions of each in-use rule. The updated rule contains a trace quota that the service can use instead of borrowing from the reservoir.
 *
 * @cloudformationResource AWS::XRay::SamplingRule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html
 */
export declare class CfnSamplingRule extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSamplingRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSamplingRule;
    /**
     * The sampling rule ARN that was created or updated.
     *
     * @cloudformationAttribute RuleARN
     */
    readonly attrRuleArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The ARN of the sampling rule.
     *
     * @deprecated this property has been deprecated
     */
    ruleName?: string;
    /**
     * The sampling rule to be created or updated.
     */
    samplingRule?: cdk.IResolvable | CfnSamplingRule.SamplingRuleProperty;
    /**
     * @deprecated this property has been deprecated
     */
    samplingRuleRecord?: cdk.IResolvable | CfnSamplingRule.SamplingRuleRecordProperty;
    /**
     * @deprecated this property has been deprecated
     */
    samplingRuleUpdate?: cdk.IResolvable | CfnSamplingRule.SamplingRuleUpdateProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnSamplingRuleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSamplingRule {
    /**
     * A sampling rule that services use to decide whether to instrument a request.
     *
     * Rule fields can match properties of the service, or properties of a request. The service can ignore rules that don't match its properties.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrule.html
     */
    interface SamplingRuleProperty {
        /**
         * Matches attributes derived from the request.
         *
         * *Map Entries:* Maximum number of 5 items.
         *
         * *Key Length Constraints:* Minimum length of 1. Maximum length of 32.
         *
         * *Value Length Constraints:* Minimum length of 1. Maximum length of 32.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrule.html#cfn-xray-samplingrule-samplingrule-attributes
         */
        readonly attributes?: cdk.IResolvable | Record<string, string>;
        /**
         * The percentage of matching requests to instrument, after the reservoir is exhausted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrule.html#cfn-xray-samplingrule-samplingrule-fixedrate
         */
        readonly fixedRate: number;
        /**
         * Matches the hostname from a request URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrule.html#cfn-xray-samplingrule-samplingrule-host
         */
        readonly host: string;
        /**
         * Matches the HTTP method of a request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrule.html#cfn-xray-samplingrule-samplingrule-httpmethod
         */
        readonly httpMethod: string;
        /**
         * The priority of the sampling rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrule.html#cfn-xray-samplingrule-samplingrule-priority
         */
        readonly priority: number;
        /**
         * A fixed number of matching requests to instrument per second, prior to applying the fixed rate.
         *
         * The reservoir is not used directly by services, but applies to all services using the rule collectively.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrule.html#cfn-xray-samplingrule-samplingrule-reservoirsize
         */
        readonly reservoirSize: number;
        /**
         * Matches the ARN of the AWS resource on which the service runs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrule.html#cfn-xray-samplingrule-samplingrule-resourcearn
         */
        readonly resourceArn: string;
        /**
         * The ARN of the sampling rule. Specify a rule by either name or ARN, but not both.
         *
         * > Specifying a sampling rule by name is recommended, as specifying by ARN will be deprecated in future.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrule.html#cfn-xray-samplingrule-samplingrule-rulearn
         */
        readonly ruleArn?: string;
        /**
         * The name of the sampling rule.
         *
         * Specify a rule by either name or ARN, but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrule.html#cfn-xray-samplingrule-samplingrule-rulename
         */
        readonly ruleName?: string;
        /**
         * Matches the `name` that the service uses to identify itself in segments.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrule.html#cfn-xray-samplingrule-samplingrule-servicename
         */
        readonly serviceName: string;
        /**
         * Matches the `origin` that the service uses to identify its type in segments.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrule.html#cfn-xray-samplingrule-samplingrule-servicetype
         */
        readonly serviceType: string;
        /**
         * Matches the path from a request URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrule.html#cfn-xray-samplingrule-samplingrule-urlpath
         */
        readonly urlPath: string;
        /**
         * The version of the sampling rule.
         *
         * `Version` can only be set when creating a new sampling rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrule.html#cfn-xray-samplingrule-samplingrule-version
         */
        readonly version?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrulerecord.html
     */
    interface SamplingRuleRecordProperty {
        /**
         * When the rule was created, in Unix time seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrulerecord.html#cfn-xray-samplingrule-samplingrulerecord-createdat
         */
        readonly createdAt?: string;
        /**
         * When the rule was modified, in Unix time seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrulerecord.html#cfn-xray-samplingrule-samplingrulerecord-modifiedat
         */
        readonly modifiedAt?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingrulerecord.html#cfn-xray-samplingrule-samplingrulerecord-samplingrule
         */
        readonly samplingRule?: cdk.IResolvable | CfnSamplingRule.SamplingRuleProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingruleupdate.html
     */
    interface SamplingRuleUpdateProperty {
        /**
         * Matches attributes derived from the request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingruleupdate.html#cfn-xray-samplingrule-samplingruleupdate-attributes
         */
        readonly attributes?: cdk.IResolvable | Record<string, string>;
        /**
         * The percentage of matching requests to instrument, after the reservoir is exhausted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingruleupdate.html#cfn-xray-samplingrule-samplingruleupdate-fixedrate
         */
        readonly fixedRate?: number;
        /**
         * Matches the hostname from a request URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingruleupdate.html#cfn-xray-samplingrule-samplingruleupdate-host
         */
        readonly host?: string;
        /**
         * Matches the HTTP method from a request URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingruleupdate.html#cfn-xray-samplingrule-samplingruleupdate-httpmethod
         */
        readonly httpMethod?: string;
        /**
         * The priority of the sampling rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingruleupdate.html#cfn-xray-samplingrule-samplingruleupdate-priority
         */
        readonly priority?: number;
        /**
         * A fixed number of matching requests to instrument per second, prior to applying the fixed rate.
         *
         * The reservoir is not used directly by services, but applies to all services using the rule collectively.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingruleupdate.html#cfn-xray-samplingrule-samplingruleupdate-reservoirsize
         */
        readonly reservoirSize?: number;
        /**
         * Matches the ARN of the AWS resource on which the service runs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingruleupdate.html#cfn-xray-samplingrule-samplingruleupdate-resourcearn
         */
        readonly resourceArn?: string;
        /**
         * The ARN of the sampling rule.
         *
         * Specify a rule by either name or ARN, but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingruleupdate.html#cfn-xray-samplingrule-samplingruleupdate-rulearn
         */
        readonly ruleArn?: string;
        /**
         * The ARN of the sampling rule.
         *
         * Specify a rule by either name or ARN, but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingruleupdate.html#cfn-xray-samplingrule-samplingruleupdate-rulename
         */
        readonly ruleName?: string;
        /**
         * Matches the name that the service uses to identify itself in segments.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingruleupdate.html#cfn-xray-samplingrule-samplingruleupdate-servicename
         */
        readonly serviceName?: string;
        /**
         * Matches the origin that the service uses to identify its type in segments.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingruleupdate.html#cfn-xray-samplingrule-samplingruleupdate-servicetype
         */
        readonly serviceType?: string;
        /**
         * Matches the path from a request URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-xray-samplingrule-samplingruleupdate.html#cfn-xray-samplingrule-samplingruleupdate-urlpath
         */
        readonly urlPath?: string;
    }
}
/**
 * Properties for defining a `CfnSamplingRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html
 */
export interface CfnSamplingRuleProps {
    /**
     * The ARN of the sampling rule.
     *
     * Specify a rule by either name or ARN, but not both.
     *
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-rulename
     */
    readonly ruleName?: string;
    /**
     * The sampling rule to be created or updated.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingrule
     */
    readonly samplingRule?: cdk.IResolvable | CfnSamplingRule.SamplingRuleProperty;
    /**
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingrulerecord
     */
    readonly samplingRuleRecord?: cdk.IResolvable | CfnSamplingRule.SamplingRuleRecordProperty;
    /**
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-samplingruleupdate
     */
    readonly samplingRuleUpdate?: cdk.IResolvable | CfnSamplingRule.SamplingRuleUpdateProperty;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-xray-samplingrule.html#cfn-xray-samplingrule-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
