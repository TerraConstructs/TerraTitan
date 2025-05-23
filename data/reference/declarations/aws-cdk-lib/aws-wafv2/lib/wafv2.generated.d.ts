import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * > This is the latest version of *AWS WAF* , named AWS WAF V2, released in November, 2019.
 *
 * For information, including how to migrate your AWS WAF resources from the prior release, see the [AWS WAF developer guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) .
 *
 * Use an `IPSet` to identify web requests that originate from specific IP addresses or ranges of IP addresses. For example, if you're receiving a lot of requests from a ranges of IP addresses, you can configure AWS WAF to block them using an IP set that lists those IP addresses.
 *
 * You use an IP set by providing its Amazon Resource Name (ARN) to the rule statement `IPSetReferenceStatement` , when you add a rule to a rule group or web ACL.
 *
 * @cloudformationResource AWS::WAFv2::IPSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html
 */
export declare class CfnIPSet extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnIPSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnIPSet;
    /**
     * The Amazon Resource Name (ARN) of the IP set.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the IP set.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses that you want AWS WAF to inspect for in incoming requests.
     */
    addresses: Array<string>;
    /**
     * A description of the IP set that helps with identification.
     */
    description?: string;
    /**
     * The version of the IP addresses, either `IPV4` or `IPV6` .
     */
    ipAddressVersion: string;
    /**
     * The name of the IP set.
     */
    name?: string;
    /**
     * Specifies whether this is for an Amazon CloudFront distribution or for a regional application.
     */
    scope: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key:value pairs associated with an AWS resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnIPSetProps);
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
 * Properties for defining a `CfnIPSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html
 */
export interface CfnIPSetProps {
    /**
     * Contains an array of strings that specifies zero or more IP addresses or blocks of IP addresses that you want AWS WAF to inspect for in incoming requests.
     *
     * All addresses must be specified using Classless Inter-Domain Routing (CIDR) notation. AWS WAF supports all IPv4 and IPv6 CIDR ranges except for `/0` .
     *
     * Example address strings:
     *
     * - For requests that originated from the IP address 192.0.2.44, specify `192.0.2.44/32` .
     * - For requests that originated from IP addresses from 192.0.2.0 to 192.0.2.255, specify `192.0.2.0/24` .
     * - For requests that originated from the IP address 1111:0000:0000:0000:0000:0000:0000:0111, specify `1111:0000:0000:0000:0000:0000:0000:0111/128` .
     * - For requests that originated from IP addresses 1111:0000:0000:0000:0000:0000:0000:0000 to 1111:0000:0000:0000:ffff:ffff:ffff:ffff, specify `1111:0000:0000:0000:0000:0000:0000:0000/64` .
     *
     * For more information about CIDR notation, see the Wikipedia entry [Classless Inter-Domain Routing](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) .
     *
     * Example JSON `Addresses` specifications:
     *
     * - Empty array: `"Addresses": []`
     * - Array with one address: `"Addresses": ["192.0.2.44/32"]`
     * - Array with three addresses: `"Addresses": ["192.0.2.44/32", "192.0.2.0/24", "192.0.0.0/16"]`
     * - INVALID specification: `"Addresses": [""]` INVALID
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html#cfn-wafv2-ipset-addresses
     */
    readonly addresses: Array<string>;
    /**
     * A description of the IP set that helps with identification.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html#cfn-wafv2-ipset-description
     */
    readonly description?: string;
    /**
     * The version of the IP addresses, either `IPV4` or `IPV6` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html#cfn-wafv2-ipset-ipaddressversion
     */
    readonly ipAddressVersion: string;
    /**
     * The name of the IP set.
     *
     * You cannot change the name of an `IPSet` after you create it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html#cfn-wafv2-ipset-name
     */
    readonly name?: string;
    /**
     * Specifies whether this is for an Amazon CloudFront distribution or for a regional application.
     *
     * A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AWS AppSync GraphQL API, an Amazon Cognito user pool, an AWS App Runner service, or an AWS Verified Access instance. Valid Values are `CLOUDFRONT` and `REGIONAL` .
     *
     * > For `CLOUDFRONT` , you must create your WAFv2 resources in the US East (N. Virginia) Region, `us-east-1` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html#cfn-wafv2-ipset-scope
     */
    readonly scope: string;
    /**
     * Key:value pairs associated with an AWS resource.
     *
     * The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
     *
     * > To modify tags on existing resources, use the AWS WAF APIs or command line interface. With AWS CloudFormation , you can only add tags to AWS WAF resources during resource creation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-ipset.html#cfn-wafv2-ipset-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Defines an association between logging destinations and a web ACL resource, for logging from AWS WAF .
 *
 * As part of the association, you can specify parts of the standard logging fields to keep out of the logs and you can specify filters so that you log only a subset of the logging records.
 *
 * If you configure data protection for the web ACL, the protection applies to the data that AWS WAF sends to the logs.
 *
 * > You can define one logging destination per web ACL.
 *
 * You can access information about the traffic that AWS WAF inspects using the following steps:
 *
 * - Create your logging destination. You can use an Amazon CloudWatch Logs log group, an Amazon Simple Storage Service (Amazon S3) bucket, or an Amazon Kinesis Data Firehose.
 *
 * The name that you give the destination must start with `aws-waf-logs-` . Depending on the type of destination, you might need to configure additional settings or permissions.
 *
 * For configuration requirements and pricing information for each destination type, see [Logging web ACL traffic](https://docs.aws.amazon.com/waf/latest/developerguide/logging.html) in the *AWS WAF Developer Guide* .
 * - Associate your logging destination to your web ACL using a `PutLoggingConfiguration` request.
 *
 * When you successfully enable logging using a `PutLoggingConfiguration` request, AWS WAF creates an additional role or policy that is required to write logs to the logging destination. For an Amazon CloudWatch Logs log group, AWS WAF creates a resource policy on the log group. For an Amazon S3 bucket, AWS WAF creates a bucket policy. For an Amazon Kinesis Data Firehose, AWS WAF creates a service-linked role.
 *
 * For additional information about web ACL logging, see [Logging web ACL traffic information](https://docs.aws.amazon.com/waf/latest/developerguide/logging.html) in the *AWS WAF Developer Guide* .
 *
 * @cloudformationResource AWS::WAFv2::LoggingConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html
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
     * Indicates whether the logging configuration was created by AWS Firewall Manager , as part of an AWS WAF policy configuration. If true, only Firewall Manager can modify or delete the configuration.
     *
     * @cloudformationAttribute ManagedByFirewallManager
     */
    readonly attrManagedByFirewallManager: cdk.IResolvable;
    /**
     * The logging destination configuration that you want to associate with the web ACL.
     */
    logDestinationConfigs: Array<string>;
    /**
     * Filtering that specifies which web requests are kept in the logs and which are dropped.
     */
    loggingFilter?: any | cdk.IResolvable;
    /**
     * The parts of the request that you want to keep out of the logs.
     */
    redactedFields?: Array<CfnLoggingConfiguration.FieldToMatchProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the web ACL that you want to associate with `LogDestinationConfigs` .
     */
    resourceArn: string;
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
     * The parts of the request that you want to keep out of the logs.
     *
     * This is used in the logging configuration `RedactedFields` specification.
     *
     * Example JSON for a `QueryString` field to match:
     *
     * `"FieldToMatch": { "QueryString": {} }`
     *
     * Example JSON for a `Method` field to match specification:
     *
     * `"FieldToMatch": { "Method": { "Name": "DELETE" } }`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-fieldtomatch.html
     */
    interface FieldToMatchProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-fieldtomatch.html#cfn-wafv2-loggingconfiguration-fieldtomatch-jsonbody
         */
        readonly jsonBody?: any | cdk.IResolvable;
        /**
         * Redact the indicated HTTP method.
         *
         * The method indicates the type of operation that the request is asking the origin to perform.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-fieldtomatch.html#cfn-wafv2-loggingconfiguration-fieldtomatch-method
         */
        readonly method?: any | cdk.IResolvable;
        /**
         * Redact the query string.
         *
         * This is the part of a URL that appears after a `?` character, if any.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-fieldtomatch.html#cfn-wafv2-loggingconfiguration-fieldtomatch-querystring
         */
        readonly queryString?: any | cdk.IResolvable;
        /**
         * Redact a single header.
         *
         * Provide the name of the header to inspect, for example, `User-Agent` or `Referer` . This setting isn't case sensitive.
         *
         * Example JSON: `"SingleHeader": { "Name": "haystack" }`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-fieldtomatch.html#cfn-wafv2-loggingconfiguration-fieldtomatch-singleheader
         */
        readonly singleHeader?: any | cdk.IResolvable;
        /**
         * Redact the request URI path.
         *
         * This is the part of the web request that identifies a resource, for example, `/images/daily-ad.jpg` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-fieldtomatch.html#cfn-wafv2-loggingconfiguration-fieldtomatch-uripath
         */
        readonly uriPath?: any | cdk.IResolvable;
    }
    /**
     * Filtering that specifies which web requests are kept in the logs and which are dropped, defined for a web ACL's `LoggingConfiguration` .
     *
     * You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-loggingfilter.html
     */
    interface LoggingFilterProperty {
        /**
         * Default handling for logs that don't match any of the specified filtering conditions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-loggingfilter.html#cfn-wafv2-loggingconfiguration-loggingfilter-defaultbehavior
         */
        readonly defaultBehavior: string;
        /**
         * The filters that you want to apply to the logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-loggingfilter.html#cfn-wafv2-loggingconfiguration-loggingfilter-filters
         */
        readonly filters: Array<CfnLoggingConfiguration.FilterProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * A single logging filter, used in `LoggingFilter` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-filter.html
     */
    interface FilterProperty {
        /**
         * How to handle logs that satisfy the filter's conditions and requirement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-filter.html#cfn-wafv2-loggingconfiguration-filter-behavior
         */
        readonly behavior: string;
        /**
         * Match conditions for the filter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-filter.html#cfn-wafv2-loggingconfiguration-filter-conditions
         */
        readonly conditions: Array<CfnLoggingConfiguration.ConditionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Logic to apply to the filtering conditions.
         *
         * You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-filter.html#cfn-wafv2-loggingconfiguration-filter-requirement
         */
        readonly requirement: string;
    }
    /**
     * A single match condition for a log filter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-condition.html
     */
    interface ConditionProperty {
        /**
         * A single action condition.
         *
         * This is the action setting that a log record must contain in order to meet the condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-condition.html#cfn-wafv2-loggingconfiguration-condition-actioncondition
         */
        readonly actionCondition?: CfnLoggingConfiguration.ActionConditionProperty | cdk.IResolvable;
        /**
         * A single label name condition.
         *
         * This is the fully qualified label name that a log record must contain in order to meet the condition. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-condition.html#cfn-wafv2-loggingconfiguration-condition-labelnamecondition
         */
        readonly labelNameCondition?: cdk.IResolvable | CfnLoggingConfiguration.LabelNameConditionProperty;
    }
    /**
     * A single label name condition for a condition in a logging filter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-labelnamecondition.html
     */
    interface LabelNameConditionProperty {
        /**
         * The label name that a log record must contain in order to meet the condition.
         *
         * This must be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-labelnamecondition.html#cfn-wafv2-loggingconfiguration-labelnamecondition-labelname
         */
        readonly labelName: string;
    }
    /**
     * A single action condition for a condition in a logging filter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-actioncondition.html
     */
    interface ActionConditionProperty {
        /**
         * The action setting that a log record must contain in order to meet the condition.
         *
         * This is the action that AWS WAF applied to the web request.
         *
         * For rule groups, this is either the configured rule action setting, or if you've applied a rule action override to the rule, it's the override action. The value `EXCLUDED_AS_COUNT` matches on excluded rules and also on rules that have a rule action override of Count.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-actioncondition.html#cfn-wafv2-loggingconfiguration-actioncondition-action
         */
        readonly action: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-jsonbody.html
     */
    interface JsonBodyProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-jsonbody.html#cfn-wafv2-loggingconfiguration-jsonbody-invalidfallbackbehavior
         */
        readonly invalidFallbackBehavior?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-jsonbody.html#cfn-wafv2-loggingconfiguration-jsonbody-matchpattern
         */
        readonly matchPattern: cdk.IResolvable | CfnLoggingConfiguration.MatchPatternProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-jsonbody.html#cfn-wafv2-loggingconfiguration-jsonbody-matchscope
         */
        readonly matchScope: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-matchpattern.html
     */
    interface MatchPatternProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-matchpattern.html#cfn-wafv2-loggingconfiguration-matchpattern-all
         */
        readonly all?: any | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-matchpattern.html#cfn-wafv2-loggingconfiguration-matchpattern-includedpaths
         */
        readonly includedPaths?: Array<string>;
    }
    /**
     * Inspect one of the headers in the web request, identified by name, for example, `User-Agent` or `Referer` .
     *
     * The name isn't case sensitive.
     *
     * You can filter and inspect all headers with the `FieldToMatch` setting `Headers` .
     *
     * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
     *
     * Example JSON: `"SingleHeader": { "Name": "haystack" }`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-singleheader.html
     */
    interface SingleHeaderProperty {
        /**
         * The name of the query header to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-loggingconfiguration-singleheader.html#cfn-wafv2-loggingconfiguration-singleheader-name
         */
        readonly name: string;
    }
}
/**
 * Properties for defining a `CfnLoggingConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html
 */
export interface CfnLoggingConfigurationProps {
    /**
     * The logging destination configuration that you want to associate with the web ACL.
     *
     * > You can associate one logging destination to a web ACL.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-logdestinationconfigs
     */
    readonly logDestinationConfigs: Array<string>;
    /**
     * Filtering that specifies which web requests are kept in the logs and which are dropped.
     *
     * You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-loggingfilter
     */
    readonly loggingFilter?: any | cdk.IResolvable;
    /**
     * The parts of the request that you want to keep out of the logs.
     *
     * For example, if you redact the `SingleHeader` field, the `HEADER` field in the logs will be `REDACTED` for all rules that use the `SingleHeader` `FieldToMatch` setting.
     *
     * If you configure data protection for the web ACL, the protection applies to the data that AWS WAF sends to the logs.
     *
     * Redaction applies only to the component that's specified in the rule's `FieldToMatch` setting, so the `SingleHeader` redaction doesn't apply to rules that use the `Headers` `FieldToMatch` .
     *
     * > You can specify only the following fields for redaction: `UriPath` , `QueryString` , `SingleHeader` , and `Method` . > This setting has no impact on request sampling. You can only exclude fields from request sampling by disabling sampling in the web ACL visibility configuration or by configuring data protection for the web ACL.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-redactedfields
     */
    readonly redactedFields?: Array<CfnLoggingConfiguration.FieldToMatchProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the web ACL that you want to associate with `LogDestinationConfigs` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-loggingconfiguration.html#cfn-wafv2-loggingconfiguration-resourcearn
     */
    readonly resourceArn: string;
}
/**
 * > This is the latest version of *AWS WAF* , named AWS WAF V2, released in November, 2019.
 *
 * For information, including how to migrate your AWS WAF resources from the prior release, see the [AWS WAF developer guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) .
 *
 * Use an `RegexPatternSet` to have AWS WAF inspect a web request component for a specific set of regular expression patterns.
 *
 * You use a regex pattern set by providing its Amazon Resource Name (ARN) to the rule statement `RegexPatternSetReferenceStatement` , when you add a rule to a rule group or web ACL.
 *
 * @cloudformationResource AWS::WAFv2::RegexPatternSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html
 */
export declare class CfnRegexPatternSet extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRegexPatternSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRegexPatternSet;
    /**
     * The Amazon Resource Name (ARN) of the regex pattern set.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the regex pattern set.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A description of the set that helps with identification.
     */
    description?: string;
    /**
     * The name of the set.
     */
    name?: string;
    /**
     * The regular expression patterns in the set.
     */
    regularExpressionList: Array<string>;
    /**
     * Specifies whether this is for an Amazon CloudFront distribution or for a regional application.
     */
    scope: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key:value pairs associated with an AWS resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRegexPatternSetProps);
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
 * Properties for defining a `CfnRegexPatternSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html
 */
export interface CfnRegexPatternSetProps {
    /**
     * A description of the set that helps with identification.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html#cfn-wafv2-regexpatternset-description
     */
    readonly description?: string;
    /**
     * The name of the set.
     *
     * You cannot change the name after you create the set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html#cfn-wafv2-regexpatternset-name
     */
    readonly name?: string;
    /**
     * The regular expression patterns in the set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html#cfn-wafv2-regexpatternset-regularexpressionlist
     */
    readonly regularExpressionList: Array<string>;
    /**
     * Specifies whether this is for an Amazon CloudFront distribution or for a regional application.
     *
     * A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AWS AppSync GraphQL API, an Amazon Cognito user pool, an AWS App Runner service, or an AWS Verified Access instance. Valid Values are `CLOUDFRONT` and `REGIONAL` .
     *
     * > For `CLOUDFRONT` , you must create your WAFv2 resources in the US East (N. Virginia) Region, `us-east-1` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html#cfn-wafv2-regexpatternset-scope
     */
    readonly scope: string;
    /**
     * Key:value pairs associated with an AWS resource.
     *
     * The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
     *
     * > To modify tags on existing resources, use the AWS WAF APIs or command line interface. With AWS CloudFormation , you can only add tags to AWS WAF resources during resource creation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-regexpatternset.html#cfn-wafv2-regexpatternset-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * > This is the latest version of *AWS WAF* , named AWS WAF V2, released in November, 2019.
 *
 * For information, including how to migrate your AWS WAF resources from the prior release, see the [AWS WAF developer guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) .
 *
 * Use an `RuleGroup` to define a collection of rules for inspecting and controlling web requests. You use a rule group in an `WebACL` by providing its Amazon Resource Name (ARN) to the rule statement `RuleGroupReferenceStatement` , when you add rules to the web ACL.
 *
 * When you create a rule group, you define an immutable capacity limit. If you update a rule group, you must stay within the capacity. This allows others to reuse the rule group with confidence in its capacity requirements.
 *
 * @cloudformationResource AWS::WAFv2::RuleGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html
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
     * The Amazon Resource Name (ARN) of the rule group.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the rule group.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The label namespace prefix for this rule group. All labels added by rules in this rule group have this prefix.
     *
     * The syntax for the label namespace prefix for a rule group is the following: `awswaf:<account ID>:rule group:<rule group name>:`
     *
     * When a rule with a label matches a web request, AWS WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon.
     *
     * @cloudformationAttribute LabelNamespace
     */
    readonly attrLabelNamespace: string;
    /**
     * The labels that one or more rules in this rule group add to matching web requests.
     */
    availableLabels?: Array<cdk.IResolvable | CfnRuleGroup.LabelSummaryProperty> | cdk.IResolvable;
    /**
     * The web ACL capacity units (WCUs) required for this rule group.
     */
    capacity: number;
    /**
     * The labels that one or more rules in this rule group match against in label match statements.
     */
    consumedLabels?: Array<cdk.IResolvable | CfnRuleGroup.LabelSummaryProperty> | cdk.IResolvable;
    /**
     * A map of custom response keys and content bodies.
     */
    customResponseBodies?: cdk.IResolvable | Record<string, CfnRuleGroup.CustomResponseBodyProperty | cdk.IResolvable>;
    /**
     * A description of the rule group that helps with identification.
     */
    description?: string;
    /**
     * The name of the rule group.
     */
    name?: string;
    /**
     * The rule statements used to identify the web requests that you want to allow, block, or count.
     */
    rules?: Array<cdk.IResolvable | CfnRuleGroup.RuleProperty> | cdk.IResolvable;
    /**
     * Specifies whether this is for an Amazon CloudFront distribution or for a regional application.
     */
    scope: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key:value pairs associated with an AWS resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Defines and enables Amazon CloudWatch metrics and web request sample collection.
     */
    visibilityConfig: cdk.IResolvable | CfnRuleGroup.VisibilityConfigProperty;
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
     * List of labels used by one or more of the rules of a `RuleGroup` .
     *
     * This summary object is used for the following rule group lists:
     *
     * - `AvailableLabels` - Labels that rules add to matching requests. These labels are defined in the `RuleLabels` for a rule.
     * - `ConsumedLabels` - Labels that rules match against. These labels are defined in a `LabelMatchStatement` specification, in the `Statement` definition of a rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-labelsummary.html
     */
    interface LabelSummaryProperty {
        /**
         * An individual label specification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-labelsummary.html#cfn-wafv2-rulegroup-labelsummary-name
         */
        readonly name?: string;
    }
    /**
     * The response body to use in a custom response to a web request.
     *
     * This is referenced by key from `CustomResponse` `CustomResponseBodyKey` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customresponsebody.html
     */
    interface CustomResponseBodyProperty {
        /**
         * The payload of the custom response.
         *
         * You can use JSON escape strings in JSON content. To do this, you must specify JSON content in the `ContentType` setting.
         *
         * For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customresponsebody.html#cfn-wafv2-rulegroup-customresponsebody-content
         */
        readonly content: string;
        /**
         * The type of content in the payload that you are defining in the `Content` string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customresponsebody.html#cfn-wafv2-rulegroup-customresponsebody-contenttype
         */
        readonly contentType: string;
    }
    /**
     * A single rule, which you can use in a `WebACL` or `RuleGroup` to identify web requests that you want to manage in some way.
     *
     * Each rule includes one top-level `Statement` that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-rule.html
     */
    interface RuleProperty {
        /**
         * The action that AWS WAF should take on a web request when it matches the rule statement.
         *
         * Settings at the web ACL level can override the rule action setting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-rule.html#cfn-wafv2-rulegroup-rule-action
         */
        readonly action?: cdk.IResolvable | CfnRuleGroup.RuleActionProperty;
        /**
         * Specifies how AWS WAF should handle `CAPTCHA` evaluations.
         *
         * If you don't specify this, AWS WAF uses the `CAPTCHA` configuration that's defined for the web ACL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-rule.html#cfn-wafv2-rulegroup-rule-captchaconfig
         */
        readonly captchaConfig?: CfnRuleGroup.CaptchaConfigProperty | cdk.IResolvable;
        /**
         * Specifies how AWS WAF should handle `Challenge` evaluations.
         *
         * If you don't specify this, AWS WAF uses the challenge configuration that's defined for the web ACL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-rule.html#cfn-wafv2-rulegroup-rule-challengeconfig
         */
        readonly challengeConfig?: CfnRuleGroup.ChallengeConfigProperty | cdk.IResolvable;
        /**
         * The name of the rule.
         *
         * If you change the name of a `Rule` after you create it and you want the rule's metric name to reflect the change, update the metric name in the rule's `VisibilityConfig` settings. AWS WAF doesn't automatically update the metric name when you update the rule name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-rule.html#cfn-wafv2-rulegroup-rule-name
         */
        readonly name: string;
        /**
         * If you define more than one `Rule` in a `WebACL` , AWS WAF evaluates each request against the `Rules` in order based on the value of `Priority` .
         *
         * AWS WAF processes rules with lower priority first. The priorities don't need to be consecutive, but they must all be different.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-rule.html#cfn-wafv2-rulegroup-rule-priority
         */
        readonly priority: number;
        /**
         * Labels to apply to web requests that match the rule match statement.
         *
         * AWS WAF applies fully qualified labels to matching web requests. A fully qualified label is the concatenation of a label namespace and a rule label. The rule's rule group or web ACL defines the label namespace.
         *
         * > Any rule that isn't a rule group reference statement or managed rule group statement can add labels to matching web requests.
         *
         * Rules that run after this rule in the web ACL can match against these labels using a `LabelMatchStatement` .
         *
         * For each label, provide a case-sensitive string containing optional namespaces and a label name, according to the following guidelines:
         *
         * - Separate each component of the label with a colon.
         * - Each namespace or name can have up to 128 characters.
         * - You can specify up to 5 namespaces in a label.
         * - Don't use the following reserved words in your label specification: `aws` , `waf` , `managed` , `rulegroup` , `webacl` , `regexpatternset` , or `ipset` .
         *
         * For example, `myLabelName` or `nameSpace1:nameSpace2:myLabelName` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-rule.html#cfn-wafv2-rulegroup-rule-rulelabels
         */
        readonly ruleLabels?: Array<cdk.IResolvable | CfnRuleGroup.LabelProperty> | cdk.IResolvable;
        /**
         * The AWS WAF processing statement for the rule, for example `ByteMatchStatement` or `SizeConstraintStatement` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-rule.html#cfn-wafv2-rulegroup-rule-statement
         */
        readonly statement: cdk.IResolvable | CfnRuleGroup.StatementProperty;
        /**
         * Defines and enables Amazon CloudWatch metrics and web request sample collection.
         *
         * If you change the name of a `Rule` after you create it and you want the rule's metric name to reflect the change, update the metric name as well. AWS WAF doesn't automatically update the metric name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-rule.html#cfn-wafv2-rulegroup-rule-visibilityconfig
         */
        readonly visibilityConfig: cdk.IResolvable | CfnRuleGroup.VisibilityConfigProperty;
    }
    /**
     * The action that AWS WAF should take on a web request when it matches a rule's statement.
     *
     * Settings at the web ACL level can override the rule action setting.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ruleaction.html
     */
    interface RuleActionProperty {
        /**
         * Instructs AWS WAF to allow the web request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ruleaction.html#cfn-wafv2-rulegroup-ruleaction-allow
         */
        readonly allow?: any | cdk.IResolvable;
        /**
         * Instructs AWS WAF to block the web request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ruleaction.html#cfn-wafv2-rulegroup-ruleaction-block
         */
        readonly block?: any | cdk.IResolvable;
        /**
         * Specifies that AWS WAF should run a `CAPTCHA` check against the request:.
         *
         * - If the request includes a valid, unexpired `CAPTCHA` token, AWS WAF allows the web request inspection to proceed to the next rule, similar to a `CountAction` .
         * - If the request doesn't include a valid, unexpired `CAPTCHA` token, AWS WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.
         *
         * AWS WAF generates a response that it sends back to the client, which includes the following:
         *
         * - The header `x-amzn-waf-action` with a value of `captcha` .
         * - The HTTP status code `405 Method Not Allowed` .
         * - If the request contains an `Accept` header with a value of `text/html` , the response includes a `CAPTCHA` challenge.
         *
         * You can configure the expiration time in the `CaptchaConfig` `ImmunityTimeProperty` setting at the rule and web ACL level. The rule setting overrides the web ACL setting.
         *
         * This action option is available for rules. It isn't available for web ACL default actions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ruleaction.html#cfn-wafv2-rulegroup-ruleaction-captcha
         */
        readonly captcha?: any | cdk.IResolvable;
        /**
         * Instructs AWS WAF to run a `Challenge` check against the web request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ruleaction.html#cfn-wafv2-rulegroup-ruleaction-challenge
         */
        readonly challenge?: any | cdk.IResolvable;
        /**
         * Instructs AWS WAF to count the web request and then continue evaluating the request using the remaining rules in the web ACL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ruleaction.html#cfn-wafv2-rulegroup-ruleaction-count
         */
        readonly count?: any | cdk.IResolvable;
    }
    /**
     * The processing guidance for a rule, used by AWS WAF to determine whether a web request matches the rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html
     */
    interface StatementProperty {
        /**
         * A logical rule statement used to combine other rule statements with AND logic.
         *
         * You provide more than one `Statement` within the `AndStatement` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-andstatement
         */
        readonly andStatement?: CfnRuleGroup.AndStatementProperty | cdk.IResolvable;
        /**
         * A rule statement that defines a string match search for AWS WAF to apply to web requests.
         *
         * The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is called a string match statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-bytematchstatement
         */
        readonly byteMatchStatement?: CfnRuleGroup.ByteMatchStatementProperty | cdk.IResolvable;
        /**
         * A rule statement that labels web requests by country and region and that matches against web requests based on country code.
         *
         * A geo match rule labels every request that it inspects regardless of whether it finds a match.
         *
         * - To manage requests only by country, you can use this statement by itself and specify the countries that you want to match against in the `CountryCodes` array.
         * - Otherwise, configure your geo match rule with Count action so that it only labels requests. Then, add one or more label match rules to run after the geo match rule and configure them to match against the geographic labels and handle the requests as needed.
         *
         * AWS WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. AWS WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match `ForwardedIPConfig` .
         *
         * If you use the web request origin, the label formats are `awswaf:clientip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:clientip:geo:country:<ISO country code>` .
         *
         * If you use a forwarded IP address, the label formats are `awswaf:forwardedip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:forwardedip:geo:country:<ISO country code>` .
         *
         * For additional details, see [Geographic match rule statement](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html) in the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-geomatchstatement
         */
        readonly geoMatchStatement?: CfnRuleGroup.GeoMatchStatementProperty | cdk.IResolvable;
        /**
         * A rule statement used to detect web requests coming from particular IP addresses or address ranges.
         *
         * To use this, create an `IPSet` that specifies the addresses you want to detect, then use the ARN of that set in this statement.
         *
         * Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-ipsetreferencestatement
         */
        readonly ipSetReferenceStatement?: CfnRuleGroup.IPSetReferenceStatementProperty | cdk.IResolvable;
        /**
         * A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL.
         *
         * The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, AWS WAF performs the search for labels that were added in the same context as the label match statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-labelmatchstatement
         */
        readonly labelMatchStatement?: cdk.IResolvable | CfnRuleGroup.LabelMatchStatementProperty;
        /**
         * A logical rule statement used to negate the results of another rule statement.
         *
         * You provide one `Statement` within the `NotStatement` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-notstatement
         */
        readonly notStatement?: cdk.IResolvable | CfnRuleGroup.NotStatementProperty;
        /**
         * A logical rule statement used to combine other rule statements with OR logic.
         *
         * You provide more than one `Statement` within the `OrStatement` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-orstatement
         */
        readonly orStatement?: cdk.IResolvable | CfnRuleGroup.OrStatementProperty;
        /**
         * A rate-based rule counts incoming requests and rate limits requests when they are coming at too fast a rate.
         *
         * The rule categorizes requests according to your aggregation criteria, collects them into aggregation instances, and counts and rate limits the requests for each instance.
         *
         * > If you change any of these settings in a rule that's currently in use, the change resets the rule's rate limiting counts. This can pause the rule's rate limiting activities for up to a minute.
         *
         * You can specify individual aggregation keys, like IP address or HTTP method. You can also specify aggregation key combinations, like IP address and HTTP method, or HTTP method, query argument, and cookie.
         *
         * Each unique set of values for the aggregation keys that you specify is a separate aggregation instance, with the value from each key contributing to the aggregation instance definition.
         *
         * For example, assume the rule evaluates web requests with the following IP address and HTTP method values:
         *
         * - IP address 10.1.1.1, HTTP method POST
         * - IP address 10.1.1.1, HTTP method GET
         * - IP address 127.0.0.0, HTTP method POST
         * - IP address 10.1.1.1, HTTP method GET
         *
         * The rule would create different aggregation instances according to your aggregation criteria, for example:
         *
         * - If the aggregation criteria is just the IP address, then each individual address is an aggregation instance, and AWS WAF counts requests separately for each. The aggregation instances and request counts for our example would be the following:
         *
         * - IP address 10.1.1.1: count 3
         * - IP address 127.0.0.0: count 1
         * - If the aggregation criteria is HTTP method, then each individual HTTP method is an aggregation instance. The aggregation instances and request counts for our example would be the following:
         *
         * - HTTP method POST: count 2
         * - HTTP method GET: count 2
         * - If the aggregation criteria is IP address and HTTP method, then each IP address and each HTTP method would contribute to the combined aggregation instance. The aggregation instances and request counts for our example would be the following:
         *
         * - IP address 10.1.1.1, HTTP method POST: count 1
         * - IP address 10.1.1.1, HTTP method GET: count 2
         * - IP address 127.0.0.0, HTTP method POST: count 1
         *
         * For any n-tuple of aggregation keys, each unique combination of values for the keys defines a separate aggregation instance, which AWS WAF counts and rate-limits individually.
         *
         * You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts and rate limits requests that match the nested statement. You can use this nested scope-down statement in conjunction with your aggregation key specifications or you can just count and rate limit all requests that match the scope-down statement, without additional aggregation. When you choose to just manage all requests that match a scope-down statement, the aggregation instance is singular for the rule.
         *
         * You cannot nest a `RateBasedStatement` inside another statement, for example inside a `NotStatement` or `OrStatement` . You can define a `RateBasedStatement` inside a web ACL and inside a rule group.
         *
         * For additional information about the options, see [Rate limiting web requests using rate-based rules](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rate-based-rules.html) in the *AWS WAF Developer Guide* .
         *
         * If you only aggregate on the individual IP address or forwarded IP address, you can retrieve the list of IP addresses that AWS WAF is currently rate limiting for a rule through the API call `GetRateBasedStatementManagedKeys` . This option is not available for other aggregation configurations.
         *
         * AWS WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by AWS WAF . If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by AWS WAF .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-ratebasedstatement
         */
        readonly rateBasedStatement?: cdk.IResolvable | CfnRuleGroup.RateBasedStatementProperty;
        /**
         * A rule statement used to search web request components for a match against a single regular expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-regexmatchstatement
         */
        readonly regexMatchStatement?: cdk.IResolvable | CfnRuleGroup.RegexMatchStatementProperty;
        /**
         * A rule statement used to search web request components for matches with regular expressions.
         *
         * To use this, create a `RegexPatternSet` that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set.
         *
         * Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-regexpatternsetreferencestatement
         */
        readonly regexPatternSetReferenceStatement?: cdk.IResolvable | CfnRuleGroup.RegexPatternSetReferenceStatementProperty;
        /**
         * A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<).
         *
         * For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes.
         *
         * If you configure AWS WAF to inspect the request body, AWS WAF inspects only the number of bytes in the body up to the limit for the web ACL and protected resource type. If you know that the request body for your web requests should never exceed the inspection limit, you can use a size constraint statement to block requests that have a larger request body size. For more information about the inspection limits, see `Body` and `JsonBody` settings for the `FieldToMatch` data type.
         *
         * If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI `/logo.jpg` is nine characters long.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-sizeconstraintstatement
         */
        readonly sizeConstraintStatement?: cdk.IResolvable | CfnRuleGroup.SizeConstraintStatementProperty;
        /**
         * A rule statement that inspects for malicious SQL code.
         *
         * Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-sqlimatchstatement
         */
        readonly sqliMatchStatement?: cdk.IResolvable | CfnRuleGroup.SqliMatchStatementProperty;
        /**
         * A rule statement that inspects for cross-site scripting (XSS) attacks.
         *
         * In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-statement.html#cfn-wafv2-rulegroup-statement-xssmatchstatement
         */
        readonly xssMatchStatement?: cdk.IResolvable | CfnRuleGroup.XssMatchStatementProperty;
    }
    /**
     * A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<).
     *
     * For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes.
     *
     * If you configure AWS WAF to inspect the request body, AWS WAF inspects only the number of bytes in the body up to the limit for the web ACL and protected resource type. If you know that the request body for your web requests should never exceed the inspection limit, you can use a size constraint statement to block requests that have a larger request body size. For more information about the inspection limits, see `Body` and `JsonBody` settings for the `FieldToMatch` data type.
     *
     * If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI `/logo.jpg` is nine characters long.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sizeconstraintstatement.html
     */
    interface SizeConstraintStatementProperty {
        /**
         * The operator to use to compare the request part to the size setting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sizeconstraintstatement.html#cfn-wafv2-rulegroup-sizeconstraintstatement-comparisonoperator
         */
        readonly comparisonOperator: string;
        /**
         * The part of the web request that you want AWS WAF to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sizeconstraintstatement.html#cfn-wafv2-rulegroup-sizeconstraintstatement-fieldtomatch
         */
        readonly fieldToMatch: CfnRuleGroup.FieldToMatchProperty | cdk.IResolvable;
        /**
         * The size, in byte, to compare to the request part, after any transformations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sizeconstraintstatement.html#cfn-wafv2-rulegroup-sizeconstraintstatement-size
         */
        readonly size: number;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch` , starting from the lowest priority setting, before inspecting the content for a match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sizeconstraintstatement.html#cfn-wafv2-rulegroup-sizeconstraintstatement-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnRuleGroup.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-texttransformation.html
     */
    interface TextTransformationProperty {
        /**
         * Sets the relative processing order for multiple transformations.
         *
         * AWS WAF processes all transformations, from lowest priority to highest, before inspecting the transformed content. The priorities don't need to be consecutive, but they must all be different.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-texttransformation.html#cfn-wafv2-rulegroup-texttransformation-priority
         */
        readonly priority: number;
        /**
         * For detailed descriptions of each of the transformation types, see [Text transformations](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-transformation.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-texttransformation.html#cfn-wafv2-rulegroup-texttransformation-type
         */
        readonly type: string;
    }
    /**
     * Specifies a web request component to be used in a rule match statement or in a logging configuration.
     *
     * - In a rule statement, this is the part of the web request that you want AWS WAF to inspect. Include the single `FieldToMatch` type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in `FieldToMatch` for each rule statement that requires it. To inspect more than one component of the web request, create a separate rule statement for each component.
     *
     * Example JSON for a `QueryString` field to match:
     *
     * `"FieldToMatch": { "QueryString": {} }`
     *
     * Example JSON for a `Method` field to match specification:
     *
     * `"FieldToMatch": { "Method": { "Name": "DELETE" } }`
     * - In a logging configuration, this is used in the `RedactedFields` property to specify a field to redact from the logging records. For this use case, note the following:
     *
     * - Even though all `FieldToMatch` settings are available, the only valid settings for field redaction are `UriPath` , `QueryString` , `SingleHeader` , and `Method` .
     * - In this documentation, the descriptions of the individual fields talk about specifying the web request component to inspect, but for field redaction, you are specifying the component type to redact from the logs.
     * - If you have request sampling enabled, the redacted fields configuration for logging has no impact on sampling. You can only exclude fields from request sampling by disabling sampling in the web ACL visibility configuration or by configuring data protection for the web ACL.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-fieldtomatch.html
     */
    interface FieldToMatchProperty {
        /**
         * Inspect all query arguments.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-fieldtomatch.html#cfn-wafv2-rulegroup-fieldtomatch-allqueryarguments
         */
        readonly allQueryArguments?: any | cdk.IResolvable;
        /**
         * Inspect the request body as plain text.
         *
         * The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form.
         *
         * AWS WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to AWS WAF for inspection.
         *
         * - For Application Load Balancer and AWS AppSync , the limit is fixed at 8 KB (8,192 bytes).
         * - For CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access, the default limit is 16 KB (16,384 bytes), and you can increase the limit for each resource type in the web ACL `AssociationConfig` , for additional processing fees.
         *
         * For information about how to handle oversized request bodies, see the `Body` object configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-fieldtomatch.html#cfn-wafv2-rulegroup-fieldtomatch-body
         */
        readonly body?: CfnRuleGroup.BodyProperty | cdk.IResolvable;
        /**
         * Inspect the request cookies.
         *
         * You must configure scope and pattern matching filters in the `Cookies` object, to define the set of cookies and the parts of the cookies that AWS WAF inspects.
         *
         * Only the first 8 KB (8192 bytes) of a request's cookies and only the first 200 cookies are forwarded to AWS WAF for inspection by the underlying host service. You must configure how to handle any oversize cookie content in the `Cookies` object. AWS WAF applies the pattern matching filters to the cookies that it receives from the underlying host service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-fieldtomatch.html#cfn-wafv2-rulegroup-fieldtomatch-cookies
         */
        readonly cookies?: CfnRuleGroup.CookiesProperty | cdk.IResolvable;
        /**
         * Inspect the request headers.
         *
         * You must configure scope and pattern matching filters in the `Headers` object, to define the set of headers to and the parts of the headers that AWS WAF inspects.
         *
         * Only the first 8 KB (8192 bytes) of a request's headers and only the first 200 headers are forwarded to AWS WAF for inspection by the underlying host service. You must configure how to handle any oversize header content in the `Headers` object. AWS WAF applies the pattern matching filters to the headers that it receives from the underlying host service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-fieldtomatch.html#cfn-wafv2-rulegroup-fieldtomatch-headers
         */
        readonly headers?: CfnRuleGroup.HeadersProperty | cdk.IResolvable;
        /**
         * Available for use with Amazon CloudFront distributions and Application Load Balancers.
         *
         * Match against the request's JA3 fingerprint. The JA3 fingerprint is a 32-character hash derived from the TLS Client Hello of an incoming request. This fingerprint serves as a unique identifier for the client's TLS configuration. AWS WAF calculates and logs this fingerprint for each request that has enough TLS Client Hello information for the calculation. Almost all web requests include this information.
         *
         * > You can use this choice only with a string match `ByteMatchStatement` with the `PositionalConstraint` set to `EXACTLY` .
         *
         * You can obtain the JA3 fingerprint for client requests from the web ACL logs. If AWS WAF is able to calculate the fingerprint, it includes it in the logs. For information about the logging fields, see [Log fields](https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html) in the *AWS WAF Developer Guide* .
         *
         * Provide the JA3 fingerprint string from the logs in your string match statement specification, to match with any future requests that have the same TLS configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-fieldtomatch.html#cfn-wafv2-rulegroup-fieldtomatch-ja3fingerprint
         */
        readonly ja3Fingerprint?: cdk.IResolvable | CfnRuleGroup.JA3FingerprintProperty;
        /**
         * Includes the JA4 fingerprint of a web request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-fieldtomatch.html#cfn-wafv2-rulegroup-fieldtomatch-ja4fingerprint
         */
        readonly ja4Fingerprint?: cdk.IResolvable | CfnRuleGroup.JA4FingerprintProperty;
        /**
         * Inspect the request body as JSON.
         *
         * The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form.
         *
         * AWS WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to AWS WAF for inspection.
         *
         * - For Application Load Balancer and AWS AppSync , the limit is fixed at 8 KB (8,192 bytes).
         * - For CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access, the default limit is 16 KB (16,384 bytes), and you can increase the limit for each resource type in the web ACL `AssociationConfig` , for additional processing fees.
         *
         * For information about how to handle oversized request bodies, see the `JsonBody` object configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-fieldtomatch.html#cfn-wafv2-rulegroup-fieldtomatch-jsonbody
         */
        readonly jsonBody?: cdk.IResolvable | CfnRuleGroup.JsonBodyProperty;
        /**
         * Inspect the HTTP method.
         *
         * The method indicates the type of operation that the request is asking the origin to perform.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-fieldtomatch.html#cfn-wafv2-rulegroup-fieldtomatch-method
         */
        readonly method?: any | cdk.IResolvable;
        /**
         * Inspect the query string.
         *
         * This is the part of a URL that appears after a `?` character, if any.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-fieldtomatch.html#cfn-wafv2-rulegroup-fieldtomatch-querystring
         */
        readonly queryString?: any | cdk.IResolvable;
        /**
         * Inspect a single header.
         *
         * Provide the name of the header to inspect, for example, `User-Agent` or `Referer` . This setting isn't case sensitive.
         *
         * Example JSON: `"SingleHeader": { "Name": "haystack" }`
         *
         * Alternately, you can filter and inspect all headers with the `Headers` `FieldToMatch` setting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-fieldtomatch.html#cfn-wafv2-rulegroup-fieldtomatch-singleheader
         */
        readonly singleHeader?: any | cdk.IResolvable;
        /**
         * Inspect a single query argument.
         *
         * Provide the name of the query argument to inspect, such as *UserName* or *SalesRegion* . The name can be up to 30 characters long and isn't case sensitive.
         *
         * Example JSON: `"SingleQueryArgument": { "Name": "myArgument" }`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-fieldtomatch.html#cfn-wafv2-rulegroup-fieldtomatch-singlequeryargument
         */
        readonly singleQueryArgument?: any | cdk.IResolvable;
        /**
         * Inspect the request URI path.
         *
         * This is the part of the web request that identifies a resource, for example, `/images/daily-ad.jpg` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-fieldtomatch.html#cfn-wafv2-rulegroup-fieldtomatch-uripath
         */
        readonly uriPath?: any | cdk.IResolvable;
    }
    /**
     * Inspect the body of the web request as JSON. The body immediately follows the request headers.
     *
     * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
     *
     * Use the specifications in this object to indicate which parts of the JSON body to inspect using the rule's inspection criteria. AWS WAF inspects only the parts of the JSON that result from the matches that you indicate.
     *
     * Example JSON: `"JsonBody": { "MatchPattern": { "All": {} }, "MatchScope": "ALL" }`
     *
     * For additional information about this request component option, see [JSON body](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-fields-list.html#waf-rule-statement-request-component-json-body) in the *AWS WAF Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-jsonbody.html
     */
    interface JsonBodyProperty {
        /**
         * What AWS WAF should do if it fails to completely parse the JSON body. The options are the following:.
         *
         * - `EVALUATE_AS_STRING` - Inspect the body as plain text. AWS WAF applies the text transformations and inspection criteria that you defined for the JSON inspection to the body text string.
         * - `MATCH` - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.
         * - `NO_MATCH` - Treat the web request as not matching the rule statement.
         *
         * If you don't provide this setting, AWS WAF parses and evaluates the content only up to the first parsing failure that it encounters.
         *
         * > AWS WAF parsing doesn't fully validate the input JSON string, so parsing can succeed even for invalid JSON. When parsing succeeds, AWS WAF doesn't apply the fallback behavior. For more information, see [JSON body](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-fields-list.html#waf-rule-statement-request-component-json-body) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-jsonbody.html#cfn-wafv2-rulegroup-jsonbody-invalidfallbackbehavior
         */
        readonly invalidFallbackBehavior?: string;
        /**
         * The patterns to look for in the JSON body.
         *
         * AWS WAF inspects the results of these pattern matches against the rule inspection criteria.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-jsonbody.html#cfn-wafv2-rulegroup-jsonbody-matchpattern
         */
        readonly matchPattern: cdk.IResolvable | CfnRuleGroup.JsonMatchPatternProperty;
        /**
         * The parts of the JSON to match against using the `MatchPattern` .
         *
         * If you specify `ALL` , AWS WAF matches against keys and values.
         *
         * `All` does not require a match to be found in the keys and a match to be found in the values. It requires a match to be found in the keys or the values or both. To require a match in the keys and in the values, use a logical `AND` statement to combine two match rules, one that inspects the keys and another that inspects the values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-jsonbody.html#cfn-wafv2-rulegroup-jsonbody-matchscope
         */
        readonly matchScope: string;
        /**
         * What AWS WAF should do if the body is larger than AWS WAF can inspect.
         *
         * AWS WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to AWS WAF for inspection.
         *
         * - For Application Load Balancer and AWS AppSync , the limit is fixed at 8 KB (8,192 bytes).
         * - For CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access, the default limit is 16 KB (16,384 bytes), and you can increase the limit for each resource type in the web ACL `AssociationConfig` , for additional processing fees.
         *
         * The options for oversize handling are the following:
         *
         * - `CONTINUE` - Inspect the available body contents normally, according to the rule inspection criteria.
         * - `MATCH` - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.
         * - `NO_MATCH` - Treat the web request as not matching the rule statement.
         *
         * You can combine the `MATCH` or `NO_MATCH` settings for oversize handling with your rule and web ACL action settings, so that you block any request whose body is over the limit.
         *
         * Default: `CONTINUE`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-jsonbody.html#cfn-wafv2-rulegroup-jsonbody-oversizehandling
         */
        readonly oversizeHandling?: string;
    }
    /**
     * The patterns to look for in the JSON body.
     *
     * AWS WAF inspects the results of these pattern matches against the rule inspection criteria. This is used with the `FieldToMatch` option `JsonBody` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-jsonmatchpattern.html
     */
    interface JsonMatchPatternProperty {
        /**
         * Match all of the elements. See also `MatchScope` in the `JsonBody` `FieldToMatch` specification.
         *
         * You must specify either this setting or the `IncludedPaths` setting, but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-jsonmatchpattern.html#cfn-wafv2-rulegroup-jsonmatchpattern-all
         */
        readonly all?: any | cdk.IResolvable;
        /**
         * Match only the specified include paths. See also `MatchScope` in the `JsonBody` `FieldToMatch` specification.
         *
         * Provide the include paths using JSON Pointer syntax. For example, `"IncludedPaths": ["/dogs/0/name", "/dogs/1/name"]` . For information about this syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc6901) .
         *
         * You must specify either this setting or the `All` setting, but not both.
         *
         * > Don't use this option to include all paths. Instead, use the `All` setting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-jsonmatchpattern.html#cfn-wafv2-rulegroup-jsonmatchpattern-includedpaths
         */
        readonly includedPaths?: Array<string>;
    }
    /**
     * Inspect all headers in the web request.
     *
     * You can specify the parts of the headers to inspect and you can narrow the set of headers to inspect by including or excluding specific keys.
     *
     * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
     *
     * If you want to inspect just the value of a single header, use the `SingleHeader` `FieldToMatch` setting instead.
     *
     * Example JSON: `"Headers": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-headers.html
     */
    interface HeadersProperty {
        /**
         * The filter to use to identify the subset of headers to inspect in a web request.
         *
         * You must specify exactly one setting: either `All` , `IncludedHeaders` , or `ExcludedHeaders` .
         *
         * Example JSON: `"MatchPattern": { "ExcludedHeaders": [ "KeyToExclude1", "KeyToExclude2" ] }`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-headers.html#cfn-wafv2-rulegroup-headers-matchpattern
         */
        readonly matchPattern: CfnRuleGroup.HeaderMatchPatternProperty | cdk.IResolvable;
        /**
         * The parts of the headers to match with the rule inspection criteria.
         *
         * If you specify `ALL` , AWS WAF inspects both keys and values.
         *
         * `All` does not require a match to be found in the keys and a match to be found in the values. It requires a match to be found in the keys or the values or both. To require a match in the keys and in the values, use a logical `AND` statement to combine two match rules, one that inspects the keys and another that inspects the values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-headers.html#cfn-wafv2-rulegroup-headers-matchscope
         */
        readonly matchScope: string;
        /**
         * What AWS WAF should do if the headers of the request are more numerous or larger than AWS WAF can inspect.
         *
         * AWS WAF does not support inspecting the entire contents of request headers when they exceed 8 KB (8192 bytes) or 200 total headers. The underlying host service forwards a maximum of 200 headers and at most 8 KB of header contents to AWS WAF .
         *
         * The options for oversize handling are the following:
         *
         * - `CONTINUE` - Inspect the available headers normally, according to the rule inspection criteria.
         * - `MATCH` - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.
         * - `NO_MATCH` - Treat the web request as not matching the rule statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-headers.html#cfn-wafv2-rulegroup-headers-oversizehandling
         */
        readonly oversizeHandling: string;
    }
    /**
     * The filter to use to identify the subset of headers to inspect in a web request.
     *
     * You must specify exactly one setting: either `All` , `IncludedHeaders` , or `ExcludedHeaders` .
     *
     * Example JSON: `"MatchPattern": { "ExcludedHeaders": [ "KeyToExclude1", "KeyToExclude2" ] }`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-headermatchpattern.html
     */
    interface HeaderMatchPatternProperty {
        /**
         * Inspect all headers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-headermatchpattern.html#cfn-wafv2-rulegroup-headermatchpattern-all
         */
        readonly all?: any | cdk.IResolvable;
        /**
         * Inspect only the headers whose keys don't match any of the strings specified here.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-headermatchpattern.html#cfn-wafv2-rulegroup-headermatchpattern-excludedheaders
         */
        readonly excludedHeaders?: Array<string>;
        /**
         * Inspect only the headers that have a key that matches one of the strings specified here.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-headermatchpattern.html#cfn-wafv2-rulegroup-headermatchpattern-includedheaders
         */
        readonly includedHeaders?: Array<string>;
    }
    /**
     * Inspect the cookies in the web request.
     *
     * You can specify the parts of the cookies to inspect and you can narrow the set of cookies to inspect by including or excluding specific keys.
     *
     * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
     *
     * Example JSON: `"Cookies": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-cookies.html
     */
    interface CookiesProperty {
        /**
         * The filter to use to identify the subset of cookies to inspect in a web request.
         *
         * You must specify exactly one setting: either `All` , `IncludedCookies` , or `ExcludedCookies` .
         *
         * Example JSON: `"MatchPattern": { "IncludedCookies": [ "session-id-time", "session-id" ] }`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-cookies.html#cfn-wafv2-rulegroup-cookies-matchpattern
         */
        readonly matchPattern: CfnRuleGroup.CookieMatchPatternProperty | cdk.IResolvable;
        /**
         * The parts of the cookies to inspect with the rule inspection criteria.
         *
         * If you specify `ALL` , AWS WAF inspects both keys and values.
         *
         * `All` does not require a match to be found in the keys and a match to be found in the values. It requires a match to be found in the keys or the values or both. To require a match in the keys and in the values, use a logical `AND` statement to combine two match rules, one that inspects the keys and another that inspects the values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-cookies.html#cfn-wafv2-rulegroup-cookies-matchscope
         */
        readonly matchScope: string;
        /**
         * What AWS WAF should do if the cookies of the request are more numerous or larger than AWS WAF can inspect.
         *
         * AWS WAF does not support inspecting the entire contents of request cookies when they exceed 8 KB (8192 bytes) or 200 total cookies. The underlying host service forwards a maximum of 200 cookies and at most 8 KB of cookie contents to AWS WAF .
         *
         * The options for oversize handling are the following:
         *
         * - `CONTINUE` - Inspect the available cookies normally, according to the rule inspection criteria.
         * - `MATCH` - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.
         * - `NO_MATCH` - Treat the web request as not matching the rule statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-cookies.html#cfn-wafv2-rulegroup-cookies-oversizehandling
         */
        readonly oversizeHandling: string;
    }
    /**
     * The filter to use to identify the subset of cookies to inspect in a web request.
     *
     * You must specify exactly one setting: either `All` , `IncludedCookies` , or `ExcludedCookies` .
     *
     * Example JSON: `"MatchPattern": { "IncludedCookies": [ "session-id-time", "session-id" ] }`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-cookiematchpattern.html
     */
    interface CookieMatchPatternProperty {
        /**
         * Inspect all cookies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-cookiematchpattern.html#cfn-wafv2-rulegroup-cookiematchpattern-all
         */
        readonly all?: any | cdk.IResolvable;
        /**
         * Inspect only the cookies whose keys don't match any of the strings specified here.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-cookiematchpattern.html#cfn-wafv2-rulegroup-cookiematchpattern-excludedcookies
         */
        readonly excludedCookies?: Array<string>;
        /**
         * Inspect only the cookies that have a key that matches one of the strings specified here.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-cookiematchpattern.html#cfn-wafv2-rulegroup-cookiematchpattern-includedcookies
         */
        readonly includedCookies?: Array<string>;
    }
    /**
     * Inspect the body of the web request. The body immediately follows the request headers.
     *
     * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-body.html
     */
    interface BodyProperty {
        /**
         * What AWS WAF should do if the body is larger than AWS WAF can inspect.
         *
         * AWS WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to AWS WAF for inspection.
         *
         * - For Application Load Balancer and AWS AppSync , the limit is fixed at 8 KB (8,192 bytes).
         * - For CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access, the default limit is 16 KB (16,384 bytes), and you can increase the limit for each resource type in the web ACL `AssociationConfig` , for additional processing fees.
         *
         * The options for oversize handling are the following:
         *
         * - `CONTINUE` - Inspect the available body contents normally, according to the rule inspection criteria.
         * - `MATCH` - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.
         * - `NO_MATCH` - Treat the web request as not matching the rule statement.
         *
         * You can combine the `MATCH` or `NO_MATCH` settings for oversize handling with your rule and web ACL action settings, so that you block any request whose body is over the limit.
         *
         * Default: `CONTINUE`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-body.html#cfn-wafv2-rulegroup-body-oversizehandling
         */
        readonly oversizeHandling?: string;
    }
    /**
     * Available for use with Amazon CloudFront distributions and Application Load Balancers.
     *
     * Match against the request's JA3 fingerprint. The JA3 fingerprint is a 32-character hash derived from the TLS Client Hello of an incoming request. This fingerprint serves as a unique identifier for the client's TLS configuration. AWS WAF calculates and logs this fingerprint for each request that has enough TLS Client Hello information for the calculation. Almost all web requests include this information.
     *
     * > You can use this choice only with a string match `ByteMatchStatement` with the `PositionalConstraint` set to `EXACTLY` .
     *
     * You can obtain the JA3 fingerprint for client requests from the web ACL logs. If AWS WAF is able to calculate the fingerprint, it includes it in the logs. For information about the logging fields, see [Log fields](https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html) in the *AWS WAF Developer Guide* .
     *
     * Provide the JA3 fingerprint string from the logs in your string match statement specification, to match with any future requests that have the same TLS configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ja3fingerprint.html
     */
    interface JA3FingerprintProperty {
        /**
         * The match status to assign to the web request if the request doesn't have a JA3 fingerprint.
         *
         * You can specify the following fallback behaviors:
         *
         * - `MATCH` - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.
         * - `NO_MATCH` - Treat the web request as not matching the rule statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ja3fingerprint.html#cfn-wafv2-rulegroup-ja3fingerprint-fallbackbehavior
         */
        readonly fallbackBehavior: string;
    }
    /**
     * Includes the JA4 fingerprint of a web request.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ja4fingerprint.html
     */
    interface JA4FingerprintProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ja4fingerprint.html#cfn-wafv2-rulegroup-ja4fingerprint-fallbackbehavior
         */
        readonly fallbackBehavior: string;
    }
    /**
     * A logical rule statement used to combine other rule statements with AND logic.
     *
     * You provide more than one `Statement` within the `AndStatement` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-andstatement.html
     */
    interface AndStatementProperty {
        /**
         * The statements to combine with AND logic.
         *
         * You can use any statements that can be nested.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-andstatement.html#cfn-wafv2-rulegroup-andstatement-statements
         */
        readonly statements: Array<cdk.IResolvable | CfnRuleGroup.StatementProperty> | cdk.IResolvable;
    }
    /**
     * A rule statement that inspects for cross-site scripting (XSS) attacks.
     *
     * In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html
     */
    interface XssMatchStatementProperty {
        /**
         * The part of the web request that you want AWS WAF to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html#cfn-wafv2-rulegroup-xssmatchstatement-fieldtomatch
         */
        readonly fieldToMatch: CfnRuleGroup.FieldToMatchProperty | cdk.IResolvable;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch` , starting from the lowest priority setting, before inspecting the content for a match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-xssmatchstatement.html#cfn-wafv2-rulegroup-xssmatchstatement-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnRuleGroup.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * A logical rule statement used to negate the results of another rule statement.
     *
     * You provide one `Statement` within the `NotStatement` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-notstatement.html
     */
    interface NotStatementProperty {
        /**
         * The statement to negate.
         *
         * You can use any statement that can be nested.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-notstatement.html#cfn-wafv2-rulegroup-notstatement-statement
         */
        readonly statement: cdk.IResolvable | CfnRuleGroup.StatementProperty;
    }
    /**
     * A rule statement that defines a string match search for AWS WAF to apply to web requests.
     *
     * The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is called a string match statement.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-bytematchstatement.html
     */
    interface ByteMatchStatementProperty {
        /**
         * The part of the web request that you want AWS WAF to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-bytematchstatement.html#cfn-wafv2-rulegroup-bytematchstatement-fieldtomatch
         */
        readonly fieldToMatch: CfnRuleGroup.FieldToMatchProperty | cdk.IResolvable;
        /**
         * The area within the portion of the web request that you want AWS WAF to search for `SearchString` .
         *
         * Valid values include the following:
         *
         * *CONTAINS*
         *
         * The specified part of the web request must include the value of `SearchString` , but the location doesn't matter.
         *
         * *CONTAINS_WORD*
         *
         * The specified part of the web request must include the value of `SearchString` , and `SearchString` must contain only alphanumeric characters or underscore (A-Z, a-z, 0-9, or _). In addition, `SearchString` must be a word, which means that both of the following are true:
         *
         * - `SearchString` is at the beginning of the specified part of the web request or is preceded by a character other than an alphanumeric character or underscore (_). Examples include the value of a header and `;BadBot` .
         * - `SearchString` is at the end of the specified part of the web request or is followed by a character other than an alphanumeric character or underscore (_), for example, `BadBot;` and `-BadBot;` .
         *
         * *EXACTLY*
         *
         * The value of the specified part of the web request must exactly match the value of `SearchString` .
         *
         * *STARTS_WITH*
         *
         * The value of `SearchString` must appear at the beginning of the specified part of the web request.
         *
         * *ENDS_WITH*
         *
         * The value of `SearchString` must appear at the end of the specified part of the web request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-bytematchstatement.html#cfn-wafv2-rulegroup-bytematchstatement-positionalconstraint
         */
        readonly positionalConstraint: string;
        /**
         * A string value that you want AWS WAF to search for.
         *
         * AWS WAF searches only in the part of web requests that you designate for inspection in `FieldToMatch` . The maximum length of the value is 200 bytes. For alphabetic characters A-Z and a-z, the value is case sensitive.
         *
         * Don't encode this string. Provide the value that you want AWS WAF to search for. AWS CloudFormation automatically base64 encodes the value for you.
         *
         * For example, suppose the value of `Type` is `HEADER` and the value of `Data` is `User-Agent` . If you want to search the `User-Agent` header for the value `BadBot` , you provide the string `BadBot` in the value of `SearchString` .
         *
         * You must specify either `SearchString` or `SearchStringBase64` in a `ByteMatchStatement` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-bytematchstatement.html#cfn-wafv2-rulegroup-bytematchstatement-searchstring
         */
        readonly searchString?: string;
        /**
         * String to search for in a web request component, base64-encoded.
         *
         * If you don't want to encode the string, specify the unencoded value in `SearchString` instead.
         *
         * You must specify either `SearchString` or `SearchStringBase64` in a `ByteMatchStatement` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-bytematchstatement.html#cfn-wafv2-rulegroup-bytematchstatement-searchstringbase64
         */
        readonly searchStringBase64?: string;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch` , starting from the lowest priority setting, before inspecting the content for a match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-bytematchstatement.html#cfn-wafv2-rulegroup-bytematchstatement-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnRuleGroup.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * A rate-based rule counts incoming requests and rate limits requests when they are coming at too fast a rate.
     *
     * The rule categorizes requests according to your aggregation criteria, collects them into aggregation instances, and counts and rate limits the requests for each instance.
     *
     * > If you change any of these settings in a rule that's currently in use, the change resets the rule's rate limiting counts. This can pause the rule's rate limiting activities for up to a minute.
     *
     * You can specify individual aggregation keys, like IP address or HTTP method. You can also specify aggregation key combinations, like IP address and HTTP method, or HTTP method, query argument, and cookie.
     *
     * Each unique set of values for the aggregation keys that you specify is a separate aggregation instance, with the value from each key contributing to the aggregation instance definition.
     *
     * For example, assume the rule evaluates web requests with the following IP address and HTTP method values:
     *
     * - IP address 10.1.1.1, HTTP method POST
     * - IP address 10.1.1.1, HTTP method GET
     * - IP address 127.0.0.0, HTTP method POST
     * - IP address 10.1.1.1, HTTP method GET
     *
     * The rule would create different aggregation instances according to your aggregation criteria, for example:
     *
     * - If the aggregation criteria is just the IP address, then each individual address is an aggregation instance, and AWS WAF counts requests separately for each. The aggregation instances and request counts for our example would be the following:
     *
     * - IP address 10.1.1.1: count 3
     * - IP address 127.0.0.0: count 1
     * - If the aggregation criteria is HTTP method, then each individual HTTP method is an aggregation instance. The aggregation instances and request counts for our example would be the following:
     *
     * - HTTP method POST: count 2
     * - HTTP method GET: count 2
     * - If the aggregation criteria is IP address and HTTP method, then each IP address and each HTTP method would contribute to the combined aggregation instance. The aggregation instances and request counts for our example would be the following:
     *
     * - IP address 10.1.1.1, HTTP method POST: count 1
     * - IP address 10.1.1.1, HTTP method GET: count 2
     * - IP address 127.0.0.0, HTTP method POST: count 1
     *
     * For any n-tuple of aggregation keys, each unique combination of values for the keys defines a separate aggregation instance, which AWS WAF counts and rate-limits individually.
     *
     * You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts and rate limits requests that match the nested statement. You can use this nested scope-down statement in conjunction with your aggregation key specifications or you can just count and rate limit all requests that match the scope-down statement, without additional aggregation. When you choose to just manage all requests that match a scope-down statement, the aggregation instance is singular for the rule.
     *
     * You cannot nest a `RateBasedStatement` inside another statement, for example inside a `NotStatement` or `OrStatement` . You can define a `RateBasedStatement` inside a web ACL and inside a rule group.
     *
     * For additional information about the options, see [Rate limiting web requests using rate-based rules](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rate-based-rules.html) in the *AWS WAF Developer Guide* .
     *
     * If you only aggregate on the individual IP address or forwarded IP address, you can retrieve the list of IP addresses that AWS WAF is currently rate limiting for a rule through the API call `GetRateBasedStatementManagedKeys` . This option is not available for other aggregation configurations.
     *
     * AWS WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by AWS WAF . If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by AWS WAF .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatement.html
     */
    interface RateBasedStatementProperty {
        /**
         * Setting that indicates how to aggregate the request counts.
         *
         * > Web requests that are missing any of the components specified in the aggregation keys are omitted from the rate-based rule evaluation and handling.
         *
         * - `CONSTANT` - Count and limit the requests that match the rate-based rule's scope-down statement. With this option, the counted requests aren't further aggregated. The scope-down statement is the only specification used. When the count of all requests that satisfy the scope-down statement goes over the limit, AWS WAF applies the rule action to all requests that satisfy the scope-down statement.
         *
         * With this option, you must configure the `ScopeDownStatement` property.
         * - `CUSTOM_KEYS` - Aggregate the request counts using one or more web request components as the aggregate keys.
         *
         * With this option, you must specify the aggregate keys in the `CustomKeys` property.
         *
         * To aggregate on only the IP address or only the forwarded IP address, don't use custom keys. Instead, set the aggregate key type to `IP` or `FORWARDED_IP` .
         * - `FORWARDED_IP` - Aggregate the request counts on the first IP address in an HTTP header.
         *
         * With this option, you must specify the header to use in the `ForwardedIPConfig` property.
         *
         * To aggregate on a combination of the forwarded IP address with other aggregate keys, use `CUSTOM_KEYS` .
         * - `IP` - Aggregate the request counts on the IP address from the web request origin.
         *
         * To aggregate on a combination of the IP address with other aggregate keys, use `CUSTOM_KEYS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatement.html#cfn-wafv2-rulegroup-ratebasedstatement-aggregatekeytype
         */
        readonly aggregateKeyType: string;
        /**
         * Specifies the aggregate keys to use in a rate-base rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatement.html#cfn-wafv2-rulegroup-ratebasedstatement-customkeys
         */
        readonly customKeys?: Array<cdk.IResolvable | CfnRuleGroup.RateBasedStatementCustomKeyProperty> | cdk.IResolvable;
        /**
         * The amount of time, in seconds, that AWS WAF should include in its request counts, looking back from the current time.
         *
         * For example, for a setting of 120, when AWS WAF checks the rate, it counts the requests for the 2 minutes immediately preceding the current time. Valid settings are 60, 120, 300, and 600.
         *
         * This setting doesn't determine how often AWS WAF checks the rate, but how far back it looks each time it checks. AWS WAF checks the rate about every 10 seconds.
         *
         * Default: `300` (5 minutes)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatement.html#cfn-wafv2-rulegroup-ratebasedstatement-evaluationwindowsec
         */
        readonly evaluationWindowSec?: number;
        /**
         * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin.
         *
         * Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
         *
         * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
         *
         * This is required if you specify a forwarded IP in the rule's aggregate key settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatement.html#cfn-wafv2-rulegroup-ratebasedstatement-forwardedipconfig
         */
        readonly forwardedIpConfig?: CfnRuleGroup.ForwardedIPConfigurationProperty | cdk.IResolvable;
        /**
         * The limit on requests during the specified evaluation window for a single aggregation instance for the rate-based rule.
         *
         * If the rate-based statement includes a `ScopeDownStatement` , this limit is applied only to the requests that match the statement.
         *
         * Examples:
         *
         * - If you aggregate on just the IP address, this is the limit on requests from any single IP address.
         * - If you aggregate on the HTTP method and the query argument name "city", then this is the limit on requests for any single method, city pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatement.html#cfn-wafv2-rulegroup-ratebasedstatement-limit
         */
        readonly limit: number;
        /**
         * An optional nested statement that narrows the scope of the web requests that are evaluated and managed by the rate-based statement.
         *
         * When you use a scope-down statement, the rate-based rule only tracks and rate limits requests that match the scope-down statement. You can use any nestable `Statement` in the scope-down statement, and you can nest statements at any level, the same as you can for a rule statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatement.html#cfn-wafv2-rulegroup-ratebasedstatement-scopedownstatement
         */
        readonly scopeDownStatement?: cdk.IResolvable | CfnRuleGroup.StatementProperty;
    }
    /**
     * Specifies a single custom aggregate key for a rate-base rule.
     *
     * > Web requests that are missing any of the components specified in the aggregation keys are omitted from the rate-based rule evaluation and handling.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatementcustomkey.html
     */
    interface RateBasedStatementCustomKeyProperty {
        /**
         * Use the value of a cookie in the request as an aggregate key.
         *
         * Each distinct value in the cookie contributes to the aggregation instance. If you use a single cookie as your custom key, then each value fully defines an aggregation instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatementcustomkey.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-cookie
         */
        readonly cookie?: cdk.IResolvable | CfnRuleGroup.RateLimitCookieProperty;
        /**
         * Use the first IP address in an HTTP header as an aggregate key.
         *
         * Each distinct forwarded IP address contributes to the aggregation instance.
         *
         * When you specify an IP or forwarded IP in the custom key settings, you must also specify at least one other key to use. You can aggregate on only the forwarded IP address by specifying `FORWARDED_IP` in your rate-based statement's `AggregateKeyType` .
         *
         * With this option, you must specify the header to use in the rate-based rule's `ForwardedIPConfig` property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatementcustomkey.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-forwardedip
         */
        readonly forwardedIp?: any | cdk.IResolvable;
        /**
         * Use the value of a header in the request as an aggregate key.
         *
         * Each distinct value in the header contributes to the aggregation instance. If you use a single header as your custom key, then each value fully defines an aggregation instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatementcustomkey.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-header
         */
        readonly header?: cdk.IResolvable | CfnRuleGroup.RateLimitHeaderProperty;
        /**
         * Use the request's HTTP method as an aggregate key.
         *
         * Each distinct HTTP method contributes to the aggregation instance. If you use just the HTTP method as your custom key, then each method fully defines an aggregation instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatementcustomkey.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-httpmethod
         */
        readonly httpMethod?: any | cdk.IResolvable;
        /**
         * Use the request's originating IP address as an aggregate key. Each distinct IP address contributes to the aggregation instance.
         *
         * When you specify an IP or forwarded IP in the custom key settings, you must also specify at least one other key to use. You can aggregate on only the IP address by specifying `IP` in your rate-based statement's `AggregateKeyType` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatementcustomkey.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-ip
         */
        readonly ip?: any | cdk.IResolvable;
        /**
         * Specifies the request's JA3 fingerprint as an aggregate key for a rate-based rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatementcustomkey.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-ja3fingerprint
         */
        readonly ja3Fingerprint?: cdk.IResolvable | CfnRuleGroup.RateLimitJA3FingerprintProperty;
        /**
         * Specifies the request's JA4 fingerprint as an aggregate key for a rate-based rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatementcustomkey.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-ja4fingerprint
         */
        readonly ja4Fingerprint?: cdk.IResolvable | CfnRuleGroup.RateLimitJA4FingerprintProperty;
        /**
         * Use the specified label namespace as an aggregate key.
         *
         * Each distinct fully qualified label name that has the specified label namespace contributes to the aggregation instance. If you use just one label namespace as your custom key, then each label name fully defines an aggregation instance.
         *
         * This uses only labels that have been added to the request by rules that are evaluated before this rate-based rule in the web ACL.
         *
         * For information about label namespaces and names, see [Label syntax and naming requirements](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-label-requirements.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatementcustomkey.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-labelnamespace
         */
        readonly labelNamespace?: cdk.IResolvable | CfnRuleGroup.RateLimitLabelNamespaceProperty;
        /**
         * Use the specified query argument as an aggregate key.
         *
         * Each distinct value for the named query argument contributes to the aggregation instance. If you use a single query argument as your custom key, then each value fully defines an aggregation instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatementcustomkey.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-queryargument
         */
        readonly queryArgument?: cdk.IResolvable | CfnRuleGroup.RateLimitQueryArgumentProperty;
        /**
         * Use the request's query string as an aggregate key.
         *
         * Each distinct string contributes to the aggregation instance. If you use just the query string as your custom key, then each string fully defines an aggregation instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatementcustomkey.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-querystring
         */
        readonly queryString?: cdk.IResolvable | CfnRuleGroup.RateLimitQueryStringProperty;
        /**
         * Use the request's URI path as an aggregate key.
         *
         * Each distinct URI path contributes to the aggregation instance. If you use just the URI path as your custom key, then each URI path fully defines an aggregation instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratebasedstatementcustomkey.html#cfn-wafv2-rulegroup-ratebasedstatementcustomkey-uripath
         */
        readonly uriPath?: cdk.IResolvable | CfnRuleGroup.RateLimitUriPathProperty;
    }
    /**
     * Specifies a cookie as an aggregate key for a rate-based rule.
     *
     * Each distinct value in the cookie contributes to the aggregation instance. If you use a single cookie as your custom key, then each value fully defines an aggregation instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitcookie.html
     */
    interface RateLimitCookieProperty {
        /**
         * The name of the cookie to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitcookie.html#cfn-wafv2-rulegroup-ratelimitcookie-name
         */
        readonly name: string;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitcookie.html#cfn-wafv2-rulegroup-ratelimitcookie-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnRuleGroup.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * Specifies a query argument in the request as an aggregate key for a rate-based rule.
     *
     * Each distinct value for the named query argument contributes to the aggregation instance. If you use a single query argument as your custom key, then each value fully defines an aggregation instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitqueryargument.html
     */
    interface RateLimitQueryArgumentProperty {
        /**
         * The name of the query argument to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitqueryargument.html#cfn-wafv2-rulegroup-ratelimitqueryargument-name
         */
        readonly name: string;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitqueryargument.html#cfn-wafv2-rulegroup-ratelimitqueryargument-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnRuleGroup.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * Specifies a header as an aggregate key for a rate-based rule.
     *
     * Each distinct value in the header contributes to the aggregation instance. If you use a single header as your custom key, then each value fully defines an aggregation instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitheader.html
     */
    interface RateLimitHeaderProperty {
        /**
         * The name of the header to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitheader.html#cfn-wafv2-rulegroup-ratelimitheader-name
         */
        readonly name: string;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitheader.html#cfn-wafv2-rulegroup-ratelimitheader-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnRuleGroup.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * Specifies the request's query string as an aggregate key for a rate-based rule.
     *
     * Each distinct string contributes to the aggregation instance. If you use just the query string as your custom key, then each string fully defines an aggregation instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitquerystring.html
     */
    interface RateLimitQueryStringProperty {
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitquerystring.html#cfn-wafv2-rulegroup-ratelimitquerystring-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnRuleGroup.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * Specifies the request's URI path as an aggregate key for a rate-based rule.
     *
     * Each distinct URI path contributes to the aggregation instance. If you use just the URI path as your custom key, then each URI path fully defines an aggregation instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimituripath.html
     */
    interface RateLimitUriPathProperty {
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimituripath.html#cfn-wafv2-rulegroup-ratelimituripath-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnRuleGroup.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * Specifies a label namespace to use as an aggregate key for a rate-based rule.
     *
     * Each distinct fully qualified label name that has the specified label namespace contributes to the aggregation instance. If you use just one label namespace as your custom key, then each label name fully defines an aggregation instance.
     *
     * This uses only labels that have been added to the request by rules that are evaluated before this rate-based rule in the web ACL.
     *
     * For information about label namespaces and names, see [Label syntax and naming requirements](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-label-requirements.html) in the *AWS WAF Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitlabelnamespace.html
     */
    interface RateLimitLabelNamespaceProperty {
        /**
         * The namespace to use for aggregation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitlabelnamespace.html#cfn-wafv2-rulegroup-ratelimitlabelnamespace-namespace
         */
        readonly namespace: string;
    }
    /**
     * Specifies the request's JA3 fingerprint as an aggregate key for a rate-based rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitja3fingerprint.html
     */
    interface RateLimitJA3FingerprintProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitja3fingerprint.html#cfn-wafv2-rulegroup-ratelimitja3fingerprint-fallbackbehavior
         */
        readonly fallbackBehavior: string;
    }
    /**
     * Specifies the request's JA4 fingerprint as an aggregate key for a rate-based rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitja4fingerprint.html
     */
    interface RateLimitJA4FingerprintProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ratelimitja4fingerprint.html#cfn-wafv2-rulegroup-ratelimitja4fingerprint-fallbackbehavior
         */
        readonly fallbackBehavior: string;
    }
    /**
     * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin.
     *
     * Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
     *
     * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
     *
     * This configuration is used for `GeoMatchStatement` and `RateBasedStatement` . For `IPSetReferenceStatement` , use `IPSetForwardedIPConfig` instead.
     *
     * AWS WAF only evaluates the first IP address found in the specified HTTP header.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-forwardedipconfiguration.html
     */
    interface ForwardedIPConfigurationProperty {
        /**
         * The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.
         *
         * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
         *
         * You can specify the following fallback behaviors:
         *
         * - `MATCH` - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.
         * - `NO_MATCH` - Treat the web request as not matching the rule statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-forwardedipconfiguration.html#cfn-wafv2-rulegroup-forwardedipconfiguration-fallbackbehavior
         */
        readonly fallbackBehavior: string;
        /**
         * The name of the HTTP header to use for the IP address.
         *
         * For example, to use the X-Forwarded-For (XFF) header, set this to `X-Forwarded-For` .
         *
         * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-forwardedipconfiguration.html#cfn-wafv2-rulegroup-forwardedipconfiguration-headername
         */
        readonly headerName: string;
    }
    /**
     * A rule statement that labels web requests by country and region and that matches against web requests based on country code.
     *
     * A geo match rule labels every request that it inspects regardless of whether it finds a match.
     *
     * - To manage requests only by country, you can use this statement by itself and specify the countries that you want to match against in the `CountryCodes` array.
     * - Otherwise, configure your geo match rule with Count action so that it only labels requests. Then, add one or more label match rules to run after the geo match rule and configure them to match against the geographic labels and handle the requests as needed.
     *
     * AWS WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. AWS WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match `ForwardedIPConfig` .
     *
     * If you use the web request origin, the label formats are `awswaf:clientip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:clientip:geo:country:<ISO country code>` .
     *
     * If you use a forwarded IP address, the label formats are `awswaf:forwardedip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:forwardedip:geo:country:<ISO country code>` .
     *
     * For additional details, see [Geographic match rule statement](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html) in the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-geomatchstatement.html
     */
    interface GeoMatchStatementProperty {
        /**
         * An array of two-character country codes that you want to match against, for example, `[ "US", "CN" ]` , from the alpha-2 country ISO codes of the ISO 3166 international standard.
         *
         * When you use a geo match statement just for the region and country labels that it adds to requests, you still have to supply a country code for the rule to evaluate. In this case, you configure the rule to only count matching requests, but it will still generate logging and count metrics for any matches. You can reduce the logging and metrics that the rule produces by specifying a country that's unlikely to be a source of traffic to your site.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-geomatchstatement.html#cfn-wafv2-rulegroup-geomatchstatement-countrycodes
         */
        readonly countryCodes?: Array<string>;
        /**
         * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin.
         *
         * Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
         *
         * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-geomatchstatement.html#cfn-wafv2-rulegroup-geomatchstatement-forwardedipconfig
         */
        readonly forwardedIpConfig?: CfnRuleGroup.ForwardedIPConfigurationProperty | cdk.IResolvable;
    }
    /**
     * A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL.
     *
     * The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, AWS WAF performs the search for labels that were added in the same context as the label match statement.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-labelmatchstatement.html
     */
    interface LabelMatchStatementProperty {
        /**
         * The string to match against. The setting you provide for this depends on the match statement's `Scope` setting:.
         *
         * - If the `Scope` indicates `LABEL` , then this specification must include the name and can include any number of preceding namespace specifications and prefix up to providing the fully qualified label name.
         * - If the `Scope` indicates `NAMESPACE` , then this specification can include any number of contiguous namespace strings, and can include the entire label namespace prefix from the rule group or web ACL where the label originates.
         *
         * Labels are case sensitive and components of a label must be separated by colon, for example `NS1:NS2:name` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-labelmatchstatement.html#cfn-wafv2-rulegroup-labelmatchstatement-key
         */
        readonly key: string;
        /**
         * Specify whether you want to match using the label name or just the namespace.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-labelmatchstatement.html#cfn-wafv2-rulegroup-labelmatchstatement-scope
         */
        readonly scope: string;
    }
    /**
     * A rule statement used to search web request components for a match against a single regular expression.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexmatchstatement.html
     */
    interface RegexMatchStatementProperty {
        /**
         * The part of the web request that you want AWS WAF to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexmatchstatement.html#cfn-wafv2-rulegroup-regexmatchstatement-fieldtomatch
         */
        readonly fieldToMatch: CfnRuleGroup.FieldToMatchProperty | cdk.IResolvable;
        /**
         * The string representing the regular expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexmatchstatement.html#cfn-wafv2-rulegroup-regexmatchstatement-regexstring
         */
        readonly regexString: string;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch` , starting from the lowest priority setting, before inspecting the content for a match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexmatchstatement.html#cfn-wafv2-rulegroup-regexmatchstatement-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnRuleGroup.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * A rule statement that inspects for malicious SQL code.
     *
     * Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sqlimatchstatement.html
     */
    interface SqliMatchStatementProperty {
        /**
         * The part of the web request that you want AWS WAF to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sqlimatchstatement.html#cfn-wafv2-rulegroup-sqlimatchstatement-fieldtomatch
         */
        readonly fieldToMatch: CfnRuleGroup.FieldToMatchProperty | cdk.IResolvable;
        /**
         * The sensitivity that you want AWS WAF to use to inspect for SQL injection attacks.
         *
         * `HIGH` detects more attacks, but might generate more false positives, especially if your web requests frequently contain unusual strings. For information about identifying and mitigating false positives, see [Testing and tuning](https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-testing.html) in the *AWS WAF Developer Guide* .
         *
         * `LOW` is generally a better choice for resources that already have other protections against SQL injection attacks or that have a low tolerance for false positives.
         *
         * Default: `LOW`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sqlimatchstatement.html#cfn-wafv2-rulegroup-sqlimatchstatement-sensitivitylevel
         */
        readonly sensitivityLevel?: string;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch` , starting from the lowest priority setting, before inspecting the content for a match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-sqlimatchstatement.html#cfn-wafv2-rulegroup-sqlimatchstatement-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnRuleGroup.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * A rule statement used to search web request components for matches with regular expressions.
     *
     * To use this, create a `RegexPatternSet` that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set.
     *
     * Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html
     */
    interface RegexPatternSetReferenceStatementProperty {
        /**
         * The Amazon Resource Name (ARN) of the `RegexPatternSet` that this statement references.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html#cfn-wafv2-rulegroup-regexpatternsetreferencestatement-arn
         */
        readonly arn: string;
        /**
         * The part of the web request that you want AWS WAF to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html#cfn-wafv2-rulegroup-regexpatternsetreferencestatement-fieldtomatch
         */
        readonly fieldToMatch: CfnRuleGroup.FieldToMatchProperty | cdk.IResolvable;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch` , starting from the lowest priority setting, before inspecting the content for a match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-regexpatternsetreferencestatement.html#cfn-wafv2-rulegroup-regexpatternsetreferencestatement-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnRuleGroup.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * A logical rule statement used to combine other rule statements with OR logic.
     *
     * You provide more than one `Statement` within the `OrStatement` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-orstatement.html
     */
    interface OrStatementProperty {
        /**
         * The statements to combine with OR logic.
         *
         * You can use any statements that can be nested.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-orstatement.html#cfn-wafv2-rulegroup-orstatement-statements
         */
        readonly statements: Array<cdk.IResolvable | CfnRuleGroup.StatementProperty> | cdk.IResolvable;
    }
    /**
     * A rule statement used to detect web requests coming from particular IP addresses or address ranges.
     *
     * To use this, create an `IPSet` that specifies the addresses you want to detect, then use the ARN of that set in this statement.
     *
     * Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetreferencestatement.html
     */
    interface IPSetReferenceStatementProperty {
        /**
         * The Amazon Resource Name (ARN) of the `IPSet` that this statement references.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetreferencestatement.html#cfn-wafv2-rulegroup-ipsetreferencestatement-arn
         */
        readonly arn: string;
        /**
         * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin.
         *
         * Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
         *
         * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetreferencestatement.html#cfn-wafv2-rulegroup-ipsetreferencestatement-ipsetforwardedipconfig
         */
        readonly ipSetForwardedIpConfig?: CfnRuleGroup.IPSetForwardedIPConfigurationProperty | cdk.IResolvable;
    }
    /**
     * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin.
     *
     * Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
     *
     * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
     *
     * This configuration is used only for `IPSetReferenceStatement` . For `GeoMatchStatement` and `RateBasedStatement` , use `ForwardedIPConfig` instead.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetforwardedipconfiguration.html
     */
    interface IPSetForwardedIPConfigurationProperty {
        /**
         * The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.
         *
         * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
         *
         * You can specify the following fallback behaviors:
         *
         * - `MATCH` - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.
         * - `NO_MATCH` - Treat the web request as not matching the rule statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetforwardedipconfiguration.html#cfn-wafv2-rulegroup-ipsetforwardedipconfiguration-fallbackbehavior
         */
        readonly fallbackBehavior: string;
        /**
         * The name of the HTTP header to use for the IP address.
         *
         * For example, to use the X-Forwarded-For (XFF) header, set this to `X-Forwarded-For` .
         *
         * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetforwardedipconfiguration.html#cfn-wafv2-rulegroup-ipsetforwardedipconfiguration-headername
         */
        readonly headerName: string;
        /**
         * The position in the header to search for the IP address.
         *
         * The header can contain IP addresses of the original client and also of proxies. For example, the header value could be `10.1.1.1, 127.0.0.0, 10.10.10.10` where the first IP address identifies the original client and the rest identify proxies that the request went through.
         *
         * The options for this setting are the following:
         *
         * - FIRST - Inspect the first IP address in the list of IP addresses in the header. This is usually the client's original IP.
         * - LAST - Inspect the last IP address in the list of IP addresses in the header.
         * - ANY - Inspect all IP addresses in the header for a match. If the header contains more than 10 IP addresses, AWS WAF inspects the last 10.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-ipsetforwardedipconfiguration.html#cfn-wafv2-rulegroup-ipsetforwardedipconfiguration-position
         */
        readonly position: string;
    }
    /**
     * Specifies how AWS WAF should handle `Challenge` evaluations.
     *
     * This is available at the web ACL level and in each rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-challengeconfig.html
     */
    interface ChallengeConfigProperty {
        /**
         * Determines how long a challenge timestamp in the token remains valid after the client successfully responds to a challenge.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-challengeconfig.html#cfn-wafv2-rulegroup-challengeconfig-immunitytimeproperty
         */
        readonly immunityTimeProperty?: CfnRuleGroup.ImmunityTimePropertyProperty | cdk.IResolvable;
    }
    /**
     * Used for CAPTCHA and challenge token settings.
     *
     * Determines how long a `CAPTCHA` or challenge timestamp remains valid after AWS WAF updates it for a successful `CAPTCHA` or challenge response.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-immunitytimeproperty.html
     */
    interface ImmunityTimePropertyProperty {
        /**
         * The amount of time, in seconds, that a `CAPTCHA` or challenge timestamp is considered valid by AWS WAF .
         *
         * The default setting is 300.
         *
         * For the Challenge action, the minimum setting is 300.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-immunitytimeproperty.html#cfn-wafv2-rulegroup-immunitytimeproperty-immunitytime
         */
        readonly immunityTime: number;
    }
    /**
     * A single label container.
     *
     * This is used as an element of a label array in `RuleLabels` inside a rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-label.html
     */
    interface LabelProperty {
        /**
         * The label string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-label.html#cfn-wafv2-rulegroup-label-name
         */
        readonly name: string;
    }
    /**
     * Defines and enables Amazon CloudWatch metrics and web request sample collection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-visibilityconfig.html
     */
    interface VisibilityConfigProperty {
        /**
         * Indicates whether the associated resource sends metrics to Amazon CloudWatch.
         *
         * For the list of available metrics, see [AWS WAF Metrics](https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#waf-metrics) in the *AWS WAF Developer Guide* .
         *
         * For web ACLs, the metrics are for web requests that have the web ACL default action applied. AWS WAF applies the default action to web requests that pass the inspection of all rules in the web ACL without being either allowed or blocked. For more information,
         * see [The web ACL default action](https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-default-action.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-visibilityconfig.html#cfn-wafv2-rulegroup-visibilityconfig-cloudwatchmetricsenabled
         */
        readonly cloudWatchMetricsEnabled: boolean | cdk.IResolvable;
        /**
         * A name of the Amazon CloudWatch metric dimension.
         *
         * The name can contain only the characters: A-Z, a-z, 0-9, - (hyphen), and _ (underscore). The name can be from one to 128 characters long. It can't contain whitespace or metric names that are reserved for AWS WAF , for example `All` and `Default_Action` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-visibilityconfig.html#cfn-wafv2-rulegroup-visibilityconfig-metricname
         */
        readonly metricName: string;
        /**
         * Indicates whether AWS WAF should store a sampling of the web requests that match the rules.
         *
         * You can view the sampled requests through the AWS WAF console.
         *
         * If you configure data protection for the web ACL, the protection applies to the web ACL's sampled web request data.
         *
         * > Request sampling doesn't provide a field redaction option, and any field redaction that you specify in your logging configuration doesn't affect sampling. You can only exclude fields from request sampling by disabling sampling in the web ACL visibility configuration or by configuring data protection for the web ACL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-visibilityconfig.html#cfn-wafv2-rulegroup-visibilityconfig-sampledrequestsenabled
         */
        readonly sampledRequestsEnabled: boolean | cdk.IResolvable;
    }
    /**
     * Specifies how AWS WAF should handle `CAPTCHA` evaluations.
     *
     * This is available at the web ACL level and in each rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-captchaconfig.html
     */
    interface CaptchaConfigProperty {
        /**
         * Determines how long a `CAPTCHA` timestamp in the token remains valid after the client successfully solves a `CAPTCHA` puzzle.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-captchaconfig.html#cfn-wafv2-rulegroup-captchaconfig-immunitytimeproperty
         */
        readonly immunityTimeProperty?: CfnRuleGroup.ImmunityTimePropertyProperty | cdk.IResolvable;
    }
    /**
     * A custom header for custom request and response handling.
     *
     * This is used in `CustomResponse` and `CustomRequestHandling`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customhttpheader.html
     */
    interface CustomHTTPHeaderProperty {
        /**
         * The name of the custom header.
         *
         * For custom request header insertion, when AWS WAF inserts the header into the request, it prefixes this name `x-amzn-waf-` , to avoid confusion with the headers that are already in the request. For example, for the header name `sample` , AWS WAF inserts the header `x-amzn-waf-sample` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customhttpheader.html#cfn-wafv2-rulegroup-customhttpheader-name
         */
        readonly name: string;
        /**
         * The value of the custom header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customhttpheader.html#cfn-wafv2-rulegroup-customhttpheader-value
         */
        readonly value: string;
    }
    /**
     * Custom request handling behavior that inserts custom headers into a web request.
     *
     * You can add custom request handling for AWS WAF to use when the rule action doesn't block the request. For example, `CaptchaAction` for requests with valid t okens, and `AllowAction` .
     *
     * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *AWS WAF Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customrequesthandling.html
     */
    interface CustomRequestHandlingProperty {
        /**
         * The HTTP headers to insert into the request. Duplicate header names are not allowed.
         *
         * For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customrequesthandling.html#cfn-wafv2-rulegroup-customrequesthandling-insertheaders
         */
        readonly insertHeaders: Array<CfnRuleGroup.CustomHTTPHeaderProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * A custom response to send to the client.
     *
     * You can define a custom response for rule actions and default web ACL actions that are set to `Block` .
     *
     * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the [AWS WAF developer guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customresponse.html
     */
    interface CustomResponseProperty {
        /**
         * References the response body that you want AWS WAF to return to the web request client.
         *
         * You can define a custom response for a rule action or a default web ACL action that is set to block. To do this, you first define the response body key and value in the `CustomResponseBodies` setting for the `WebACL` or `RuleGroup` where you want to use it. Then, in the rule action or web ACL default action `BlockAction` setting, you reference the response body using this key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customresponse.html#cfn-wafv2-rulegroup-customresponse-customresponsebodykey
         */
        readonly customResponseBodyKey?: string;
        /**
         * The HTTP status code to return to the client.
         *
         * For a list of status codes that you can use in your custom responses, see [Supported status codes for custom response](https://docs.aws.amazon.com/waf/latest/developerguide/customizing-the-response-status-codes.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customresponse.html#cfn-wafv2-rulegroup-customresponse-responsecode
         */
        readonly responseCode: number;
        /**
         * The HTTP headers to use in the response.
         *
         * You can specify any header name except for `content-type` . Duplicate header names are not allowed.
         *
         * For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-customresponse.html#cfn-wafv2-rulegroup-customresponse-responseheaders
         */
        readonly responseHeaders?: Array<CfnRuleGroup.CustomHTTPHeaderProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Inspect one of the headers in the web request, identified by name, for example, `User-Agent` or `Referer` .
     *
     * The name isn't case sensitive.
     *
     * You can filter and inspect all headers with the `FieldToMatch` setting `Headers` .
     *
     * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
     *
     * Example JSON: `"SingleHeader": { "Name": "haystack" }`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-singleheader.html
     */
    interface SingleHeaderProperty {
        /**
         * The name of the query header to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-singleheader.html#cfn-wafv2-rulegroup-singleheader-name
         */
        readonly name: string;
    }
    /**
     * Inspect one query argument in the web request, identified by name, for example *UserName* or *SalesRegion* .
     *
     * The name isn't case sensitive.
     *
     * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
     *
     * Example JSON: `"SingleQueryArgument": { "Name": "myArgument" }`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-singlequeryargument.html
     */
    interface SingleQueryArgumentProperty {
        /**
         * The name of the query argument to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-singlequeryargument.html#cfn-wafv2-rulegroup-singlequeryargument-name
         */
        readonly name: string;
    }
    /**
     * Allow traffic towards application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-allow.html
     */
    interface AllowProperty {
        /**
         * Custom request handling.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-allow.html#cfn-wafv2-rulegroup-allow-customrequesthandling
         */
        readonly customRequestHandling?: CfnRuleGroup.CustomRequestHandlingProperty | cdk.IResolvable;
    }
    /**
     * Block traffic towards application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-block.html
     */
    interface BlockProperty {
        /**
         * Custom response.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-block.html#cfn-wafv2-rulegroup-block-customresponse
         */
        readonly customResponse?: CfnRuleGroup.CustomResponseProperty | cdk.IResolvable;
    }
    /**
     * Checks valid token exists with request.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-captcha.html
     */
    interface CaptchaProperty {
        /**
         * Custom request handling.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-captcha.html#cfn-wafv2-rulegroup-captcha-customrequesthandling
         */
        readonly customRequestHandling?: CfnRuleGroup.CustomRequestHandlingProperty | cdk.IResolvable;
    }
    /**
     * Checks that the request has a valid token with an unexpired challenge timestamp and, if not, returns a browser challenge to the client.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-challenge.html
     */
    interface ChallengeProperty {
        /**
         * Custom request handling.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-challenge.html#cfn-wafv2-rulegroup-challenge-customrequesthandling
         */
        readonly customRequestHandling?: CfnRuleGroup.CustomRequestHandlingProperty | cdk.IResolvable;
    }
    /**
     * Count traffic towards application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-count.html
     */
    interface CountProperty {
        /**
         * Custom request handling.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-rulegroup-count.html#cfn-wafv2-rulegroup-count-customrequesthandling
         */
        readonly customRequestHandling?: CfnRuleGroup.CustomRequestHandlingProperty | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnRuleGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html
 */
export interface CfnRuleGroupProps {
    /**
     * The labels that one or more rules in this rule group add to matching web requests.
     *
     * These labels are defined in the `RuleLabels` for a `Rule` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-availablelabels
     */
    readonly availableLabels?: Array<cdk.IResolvable | CfnRuleGroup.LabelSummaryProperty> | cdk.IResolvable;
    /**
     * The web ACL capacity units (WCUs) required for this rule group.
     *
     * When you create your own rule group, you define this, and you cannot change it after creation. When you add or modify the rules in a rule group, AWS WAF enforces this limit.
     *
     * AWS WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. AWS WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. The WCU limit for web ACLs is 1,500.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-capacity
     */
    readonly capacity: number;
    /**
     * The labels that one or more rules in this rule group match against in label match statements.
     *
     * These labels are defined in a `LabelMatchStatement` specification, in the `Statement` definition of a rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-consumedlabels
     */
    readonly consumedLabels?: Array<cdk.IResolvable | CfnRuleGroup.LabelSummaryProperty> | cdk.IResolvable;
    /**
     * A map of custom response keys and content bodies.
     *
     * When you create a rule with a block action, you can send a custom response to the web request. You define these for the rule group, and then use them in the rules that you define in the rule group.
     *
     * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *AWS WAF Developer Guide* .
     *
     * For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *AWS WAF Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-customresponsebodies
     */
    readonly customResponseBodies?: cdk.IResolvable | Record<string, CfnRuleGroup.CustomResponseBodyProperty | cdk.IResolvable>;
    /**
     * A description of the rule group that helps with identification.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-description
     */
    readonly description?: string;
    /**
     * The name of the rule group.
     *
     * You cannot change the name of a rule group after you create it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-name
     */
    readonly name?: string;
    /**
     * The rule statements used to identify the web requests that you want to allow, block, or count.
     *
     * Each rule includes one top-level statement that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-rules
     */
    readonly rules?: Array<cdk.IResolvable | CfnRuleGroup.RuleProperty> | cdk.IResolvable;
    /**
     * Specifies whether this is for an Amazon CloudFront distribution or for a regional application.
     *
     * A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AWS AppSync GraphQL API, an Amazon Cognito user pool, an AWS App Runner service, or an AWS Verified Access instance. Valid Values are `CLOUDFRONT` and `REGIONAL` .
     *
     * > For `CLOUDFRONT` , you must create your WAFv2 resources in the US East (N. Virginia) Region, `us-east-1` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-scope
     */
    readonly scope: string;
    /**
     * Key:value pairs associated with an AWS resource.
     *
     * The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
     *
     * > To modify tags on existing resources, use the AWS WAF APIs or command line interface. With AWS CloudFormation , you can only add tags to AWS WAF resources during resource creation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Defines and enables Amazon CloudWatch metrics and web request sample collection.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-rulegroup.html#cfn-wafv2-rulegroup-visibilityconfig
     */
    readonly visibilityConfig: cdk.IResolvable | CfnRuleGroup.VisibilityConfigProperty;
}
/**
 * > This is the latest version of *AWS WAF* , named AWS WAF V2, released in November, 2019.
 *
 * For information, including how to migrate your AWS WAF resources from the prior release, see the [AWS WAF developer guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) .
 *
 * Use an `WebACL` to define a collection of rules to use to inspect and control web requests. Each rule in a web ACL has a statement that defines what to look for in web requests and an action that AWS WAF applies to requests that match the statement. In the web ACL, you assign a default action to take (allow, block) for any request that doesn't match any of the rules.
 *
 * The rules in a web ACL can be a combination of explicitly defined rules and rule groups that you reference from the web ACL. The rule groups can be rule groups that you manage or rule groups that are managed by others.
 *
 * You can associate a web ACL with one or more AWS resources to protect. The resources can be an Amazon CloudFront distribution, an Amazon API Gateway REST API, an Application Load Balancer , an AWS AppSync GraphQL API , an Amazon Cognito user pool, an AWS App Runner service, or an AWS Verified Access instance.
 *
 * For more information, see [Web access control lists (web ACLs)](https://docs.aws.amazon.com/waf/latest/developerguide/web-acl.html) in the *AWS WAF developer guide* .
 *
 * *Web ACLs used in AWS Shield Advanced automatic application layer DDoS mitigation*
 *
 * If you use Shield Advanced automatic application layer DDoS mitigation, the web ACLs that you use with automatic mitigation have a rule group rule whose name starts with `ShieldMitigationRuleGroup` . This rule is used for automatic mitigations and it's managed for you in the web ACL by Shield Advanced and AWS WAF . You'll see the rule listed among the web ACL rules when you view the web ACL through the AWS WAF interfaces.
 *
 * When you manage the web ACL through AWS CloudFormation interfaces, you won't see the Shield Advanced rule. AWS CloudFormation doesn't include this type of rule in the stack drift status between the actual configuration of the web ACL and your web ACL template.
 *
 * Don't add the Shield Advanced rule group rule to your web ACL template. The rule shouldn't be in your template. When you update the web ACL template in a stack, the Shield Advanced rule is maintained for you by AWS WAF in the resulting web ACL.
 *
 * For more information, see [Shield Advanced automatic application layer DDoS mitigation](https://docs.aws.amazon.com/waf/latest/developerguide/ddos-automatic-app-layer-response.html) in the *AWS Shield Advanced developer guide* .
 *
 * @cloudformationResource AWS::WAFv2::WebACL
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html
 */
export declare class CfnWebACL extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWebACL from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWebACL;
    /**
     * The Amazon Resource Name (ARN) of the web ACL.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The web ACL capacity units (WCUs) currently being used by this web ACL.
     *
     * AWS WAF uses WCUs to calculate and control the operating resources that are used to run your rules, rule groups, and web ACLs. AWS WAF calculates capacity differently for each rule type, to reflect the relative cost of each rule. Simple rules that cost little to run use fewer WCUs than more complex rules that use more processing power. Rule group capacity is fixed at creation, which helps users plan their web ACL WCU usage when they use a rule group. The WCU limit for web ACLs is 1,500.
     *
     * @cloudformationAttribute Capacity
     */
    readonly attrCapacity: number;
    /**
     * The ID of the web ACL.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The label namespace prefix for this web ACL. All labels added by rules in this web ACL have this prefix.
     *
     * The syntax for the label namespace prefix for a web ACL is the following: `awswaf:<account ID>:webacl:<web ACL name>:`
     *
     * When a rule with a label matches a web request, AWS WAF adds the fully qualified label to the request. A fully qualified label is made up of the label namespace from the rule group or web ACL where the rule is defined and the label from the rule, separated by a colon.
     *
     * @cloudformationAttribute LabelNamespace
     */
    readonly attrLabelNamespace: string;
    /**
     * Specifies custom configurations for the associations between the web ACL and protected resources.
     */
    associationConfig?: CfnWebACL.AssociationConfigProperty | cdk.IResolvable;
    /**
     * Specifies how AWS WAF should handle `CAPTCHA` evaluations for rules that don't have their own `CaptchaConfig` settings.
     */
    captchaConfig?: CfnWebACL.CaptchaConfigProperty | cdk.IResolvable;
    /**
     * Specifies how AWS WAF should handle challenge evaluations for rules that don't have their own `ChallengeConfig` settings.
     */
    challengeConfig?: CfnWebACL.ChallengeConfigProperty | cdk.IResolvable;
    /**
     * A map of custom response keys and content bodies.
     */
    customResponseBodies?: cdk.IResolvable | Record<string, CfnWebACL.CustomResponseBodyProperty | cdk.IResolvable>;
    /**
     * The action to perform if none of the `Rules` contained in the `WebACL` match.
     */
    defaultAction: CfnWebACL.DefaultActionProperty | cdk.IResolvable;
    /**
     * A description of the web ACL that helps with identification.
     */
    description?: string;
    /**
     * The name of the web ACL.
     */
    name?: string;
    /**
     * The rule statements used to identify the web requests that you want to manage.
     */
    rules?: Array<cdk.IResolvable | CfnWebACL.RuleProperty> | cdk.IResolvable;
    /**
     * Specifies whether this is for an Amazon CloudFront distribution or for a regional application.
     */
    scope: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Key:value pairs associated with an AWS resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Specifies the domains that AWS WAF should accept in a web request token.
     */
    tokenDomains?: Array<string>;
    /**
     * Defines and enables Amazon CloudWatch metrics and web request sample collection.
     */
    visibilityConfig: cdk.IResolvable | CfnWebACL.VisibilityConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWebACLProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnWebACL {
    /**
     * Specifies custom configurations for the associations between the web ACL and protected resources.
     *
     * Use this to customize the maximum size of the request body that your protected resources forward to AWS WAF for inspection. You can customize this setting for CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resources. The default setting is 16 KB (16,384 bytes).
     *
     * > You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see [AWS WAF Pricing](https://docs.aws.amazon.com/waf/pricing/) .
     *
     * For Application Load Balancer and AWS AppSync , the limit is fixed at 8 KB (8,192 bytes).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-associationconfig.html
     */
    interface AssociationConfigProperty {
        /**
         * Customizes the maximum size of the request body that your protected CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access resources forward to AWS WAF for inspection.
         *
         * The default size is 16 KB (16,384 bytes). You can change the setting for any of the available resource types.
         *
         * > You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see [AWS WAF Pricing](https://docs.aws.amazon.com/waf/pricing/) .
         *
         * Example JSON: `{ "API_GATEWAY": "KB_48", "APP_RUNNER_SERVICE": "KB_32" }`
         *
         * For Application Load Balancer and AWS AppSync , the limit is fixed at 8 KB (8,192 bytes).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-associationconfig.html#cfn-wafv2-webacl-associationconfig-requestbody
         */
        readonly requestBody?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnWebACL.RequestBodyAssociatedResourceTypeConfigProperty>;
    }
    /**
     * Customizes the maximum size of the request body that your protected CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access resources forward to AWS WAF for inspection.
     *
     * The default size is 16 KB (16,384 bytes). You can change the setting for any of the available resource types.
     *
     * > You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see [AWS WAF Pricing](https://docs.aws.amazon.com/waf/pricing/) .
     *
     * Example JSON: `{ "API_GATEWAY": "KB_48", "APP_RUNNER_SERVICE": "KB_32" }`
     *
     * For Application Load Balancer and AWS AppSync , the limit is fixed at 8 KB (8,192 bytes).
     *
     * This is used in the `AssociationConfig` of the web ACL.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestbodyassociatedresourcetypeconfig.html
     */
    interface RequestBodyAssociatedResourceTypeConfigProperty {
        /**
         * Specifies the maximum size of the web request body component that an associated CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resource should send to AWS WAF for inspection.
         *
         * This applies to statements in the web ACL that inspect the body or JSON body.
         *
         * Default: `16 KB (16,384 bytes)`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestbodyassociatedresourcetypeconfig.html#cfn-wafv2-webacl-requestbodyassociatedresourcetypeconfig-defaultsizeinspectionlimit
         */
        readonly defaultSizeInspectionLimit: string;
    }
    /**
     * In a `WebACL` , this is the action that you want AWS WAF to perform when a web request doesn't match any of the rules in the `WebACL` .
     *
     * The default action must be a terminating action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-defaultaction.html
     */
    interface DefaultActionProperty {
        /**
         * Specifies that AWS WAF should allow requests by default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-defaultaction.html#cfn-wafv2-webacl-defaultaction-allow
         */
        readonly allow?: CfnWebACL.AllowActionProperty | cdk.IResolvable;
        /**
         * Specifies that AWS WAF should block requests by default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-defaultaction.html#cfn-wafv2-webacl-defaultaction-block
         */
        readonly block?: CfnWebACL.BlockActionProperty | cdk.IResolvable;
    }
    /**
     * Specifies that AWS WAF should block the request and optionally defines additional custom handling for the response to the web request.
     *
     * This is used in the context of other settings, for example to specify values for a rule action or a web ACL default action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-blockaction.html
     */
    interface BlockActionProperty {
        /**
         * Defines a custom response for the web request.
         *
         * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-blockaction.html#cfn-wafv2-webacl-blockaction-customresponse
         */
        readonly customResponse?: CfnWebACL.CustomResponseProperty | cdk.IResolvable;
    }
    /**
     * A custom response to send to the client.
     *
     * You can define a custom response for rule actions and default web ACL actions that are set to the block action.
     *
     * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the [AWS WAF developer guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customresponse.html
     */
    interface CustomResponseProperty {
        /**
         * References the response body that you want AWS WAF to return to the web request client.
         *
         * You can define a custom response for a rule action or a default web ACL action that is set to block. To do this, you first define the response body key and value in the `CustomResponseBodies` setting for the `WebACL` or `RuleGroup` where you want to use it. Then, in the rule action or web ACL default action `BlockAction` setting, you reference the response body using this key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customresponse.html#cfn-wafv2-webacl-customresponse-customresponsebodykey
         */
        readonly customResponseBodyKey?: string;
        /**
         * The HTTP status code to return to the client.
         *
         * For a list of status codes that you can use in your custom responses, see [Supported status codes for custom response](https://docs.aws.amazon.com/waf/latest/developerguide/customizing-the-response-status-codes.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customresponse.html#cfn-wafv2-webacl-customresponse-responsecode
         */
        readonly responseCode: number;
        /**
         * The HTTP headers to use in the response.
         *
         * You can specify any header name except for `content-type` . Duplicate header names are not allowed.
         *
         * For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customresponse.html#cfn-wafv2-webacl-customresponse-responseheaders
         */
        readonly responseHeaders?: Array<CfnWebACL.CustomHTTPHeaderProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * A custom header for custom request and response handling.
     *
     * This is used in `CustomResponse` and `CustomRequestHandling` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customhttpheader.html
     */
    interface CustomHTTPHeaderProperty {
        /**
         * The name of the custom header.
         *
         * For custom request header insertion, when AWS WAF inserts the header into the request, it prefixes this name `x-amzn-waf-` , to avoid confusion with the headers that are already in the request. For example, for the header name `sample` , AWS WAF inserts the header `x-amzn-waf-sample` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customhttpheader.html#cfn-wafv2-webacl-customhttpheader-name
         */
        readonly name: string;
        /**
         * The value of the custom header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customhttpheader.html#cfn-wafv2-webacl-customhttpheader-value
         */
        readonly value: string;
    }
    /**
     * Specifies that AWS WAF should allow the request and optionally defines additional custom handling for the request.
     *
     * This is used in the context of other settings, for example to specify values for a rule action or a web ACL default action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-allowaction.html
     */
    interface AllowActionProperty {
        /**
         * Defines custom handling for the web request.
         *
         * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-allowaction.html#cfn-wafv2-webacl-allowaction-customrequesthandling
         */
        readonly customRequestHandling?: CfnWebACL.CustomRequestHandlingProperty | cdk.IResolvable;
    }
    /**
     * Custom request handling behavior that inserts custom headers into a web request.
     *
     * You can add custom request handling for AWS WAF to use when the rule action doesn't block the request. For example, `CaptchaAction` for requests with valid t okens, and `AllowAction` .
     *
     * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *AWS WAF Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customrequesthandling.html
     */
    interface CustomRequestHandlingProperty {
        /**
         * The HTTP headers to insert into the request. Duplicate header names are not allowed.
         *
         * For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customrequesthandling.html#cfn-wafv2-webacl-customrequesthandling-insertheaders
         */
        readonly insertHeaders: Array<CfnWebACL.CustomHTTPHeaderProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The response body to use in a custom response to a web request.
     *
     * This is referenced by key from `CustomResponse` `CustomResponseBodyKey` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customresponsebody.html
     */
    interface CustomResponseBodyProperty {
        /**
         * The payload of the custom response.
         *
         * You can use JSON escape strings in JSON content. To do this, you must specify JSON content in the `ContentType` setting.
         *
         * For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customresponsebody.html#cfn-wafv2-webacl-customresponsebody-content
         */
        readonly content: string;
        /**
         * The type of content in the payload that you are defining in the `Content` string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-customresponsebody.html#cfn-wafv2-webacl-customresponsebody-contenttype
         */
        readonly contentType: string;
    }
    /**
     * Specifies how AWS WAF should handle `Challenge` evaluations.
     *
     * This is available at the web ACL level and in each rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-challengeconfig.html
     */
    interface ChallengeConfigProperty {
        /**
         * Determines how long a challenge timestamp in the token remains valid after the client successfully responds to a challenge.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-challengeconfig.html#cfn-wafv2-webacl-challengeconfig-immunitytimeproperty
         */
        readonly immunityTimeProperty?: CfnWebACL.ImmunityTimePropertyProperty | cdk.IResolvable;
    }
    /**
     * Used for CAPTCHA and challenge token settings.
     *
     * Determines how long a `CAPTCHA` or challenge timestamp remains valid after AWS WAF updates it for a successful `CAPTCHA` or challenge response.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-immunitytimeproperty.html
     */
    interface ImmunityTimePropertyProperty {
        /**
         * The amount of time, in seconds, that a `CAPTCHA` or challenge timestamp is considered valid by AWS WAF .
         *
         * The default setting is 300.
         *
         * For the Challenge action, the minimum setting is 300.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-immunitytimeproperty.html#cfn-wafv2-webacl-immunitytimeproperty-immunitytime
         */
        readonly immunityTime: number;
    }
    /**
     * A single rule, which you can use in a `WebACL` or `RuleGroup` to identify web requests that you want to manage in some way.
     *
     * Each rule includes one top-level `Statement` that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html
     */
    interface RuleProperty {
        /**
         * The action that AWS WAF should take on a web request when it matches the rule's statement.
         *
         * Settings at the web ACL level can override the rule action setting.
         *
         * This is used only for rules whose statements don't reference a rule group. Rule statements that reference a rule group are `RuleGroupReferenceStatement` and `ManagedRuleGroupStatement` .
         *
         * You must set either this `Action` setting or the rule's `OverrideAction` , but not both:
         *
         * - If the rule statement doesn't reference a rule group, you must set this rule action setting and you must not set the rule's override action setting.
         * - If the rule statement references a rule group, you must not set this action setting, because the actions are already set on the rules inside the rule group. You must set the rule's override action setting to indicate specifically whether to override the actions that are set on the rules in the rule group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-action
         */
        readonly action?: cdk.IResolvable | CfnWebACL.RuleActionProperty;
        /**
         * Specifies how AWS WAF should handle `CAPTCHA` evaluations.
         *
         * If you don't specify this, AWS WAF uses the `CAPTCHA` configuration that's defined for the web ACL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-captchaconfig
         */
        readonly captchaConfig?: CfnWebACL.CaptchaConfigProperty | cdk.IResolvable;
        /**
         * Specifies how AWS WAF should handle `Challenge` evaluations.
         *
         * If you don't specify this, AWS WAF uses the challenge configuration that's defined for the web ACL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-challengeconfig
         */
        readonly challengeConfig?: CfnWebACL.ChallengeConfigProperty | cdk.IResolvable;
        /**
         * The name of the rule.
         *
         * If you change the name of a `Rule` after you create it and you want the rule's metric name to reflect the change, update the metric name in the rule's `VisibilityConfig` settings. AWS WAF doesn't automatically update the metric name when you update the rule name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-name
         */
        readonly name: string;
        /**
         * The override action to apply to the rules in a rule group, instead of the individual rule action settings.
         *
         * This is used only for rules whose statements reference a rule group. Rule statements that reference a rule group are `RuleGroupReferenceStatement` and `ManagedRuleGroupStatement` .
         *
         * Set the override action to none to leave the rule group rule actions in effect. Set it to count to only count matches, regardless of the rule action settings.
         *
         * You must set either this `OverrideAction` setting or the `Action` setting, but not both:
         *
         * - If the rule statement references a rule group, you must set this override action setting and you must not set the rule's action setting.
         * - If the rule statement doesn't reference a rule group, you must set the rule action setting and you must not set the rule's override action setting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-overrideaction
         */
        readonly overrideAction?: cdk.IResolvable | CfnWebACL.OverrideActionProperty;
        /**
         * If you define more than one `Rule` in a `WebACL` , AWS WAF evaluates each request against the `Rules` in order based on the value of `Priority` .
         *
         * AWS WAF processes rules with lower priority first. The priorities don't need to be consecutive, but they must all be different.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-priority
         */
        readonly priority: number;
        /**
         * Labels to apply to web requests that match the rule match statement.
         *
         * AWS WAF applies fully qualified labels to matching web requests. A fully qualified label is the concatenation of a label namespace and a rule label. The rule's rule group or web ACL defines the label namespace.
         *
         * > Any rule that isn't a rule group reference statement or managed rule group statement can add labels to matching web requests.
         *
         * Rules that run after this rule in the web ACL can match against these labels using a `LabelMatchStatement` .
         *
         * For each label, provide a case-sensitive string containing optional namespaces and a label name, according to the following guidelines:
         *
         * - Separate each component of the label with a colon.
         * - Each namespace or name can have up to 128 characters.
         * - You can specify up to 5 namespaces in a label.
         * - Don't use the following reserved words in your label specification: `aws` , `waf` , `managed` , `rulegroup` , `webacl` , `regexpatternset` , or `ipset` .
         *
         * For example, `myLabelName` or `nameSpace1:nameSpace2:myLabelName` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-rulelabels
         */
        readonly ruleLabels?: Array<cdk.IResolvable | CfnWebACL.LabelProperty> | cdk.IResolvable;
        /**
         * The AWS WAF processing statement for the rule, for example `ByteMatchStatement` or `SizeConstraintStatement` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-statement
         */
        readonly statement: cdk.IResolvable | CfnWebACL.StatementProperty;
        /**
         * Defines and enables Amazon CloudWatch metrics and web request sample collection.
         *
         * If you change the name of a `Rule` after you create it and you want the rule's metric name to reflect the change, update the metric name as well. AWS WAF doesn't automatically update the metric name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rule.html#cfn-wafv2-webacl-rule-visibilityconfig
         */
        readonly visibilityConfig: cdk.IResolvable | CfnWebACL.VisibilityConfigProperty;
    }
    /**
     * The action that AWS WAF should take on a web request when it matches a rule's statement.
     *
     * Settings at the web ACL level can override the rule action setting.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ruleaction.html
     */
    interface RuleActionProperty {
        /**
         * Instructs AWS WAF to allow the web request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ruleaction.html#cfn-wafv2-webacl-ruleaction-allow
         */
        readonly allow?: CfnWebACL.AllowActionProperty | cdk.IResolvable;
        /**
         * Instructs AWS WAF to block the web request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ruleaction.html#cfn-wafv2-webacl-ruleaction-block
         */
        readonly block?: CfnWebACL.BlockActionProperty | cdk.IResolvable;
        /**
         * Specifies that AWS WAF should run a `CAPTCHA` check against the request:.
         *
         * - If the request includes a valid, unexpired `CAPTCHA` token, AWS WAF allows the web request inspection to proceed to the next rule, similar to a `CountAction` .
         * - If the request doesn't include a valid, unexpired `CAPTCHA` token, AWS WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.
         *
         * AWS WAF generates a response that it sends back to the client, which includes the following:
         *
         * - The header `x-amzn-waf-action` with a value of `captcha` .
         * - The HTTP status code `405 Method Not Allowed` .
         * - If the request contains an `Accept` header with a value of `text/html` , the response includes a `CAPTCHA` challenge.
         *
         * You can configure the expiration time in the `CaptchaConfig` `ImmunityTimeProperty` setting at the rule and web ACL level. The rule setting overrides the web ACL setting.
         *
         * This action option is available for rules. It isn't available for web ACL default actions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ruleaction.html#cfn-wafv2-webacl-ruleaction-captcha
         */
        readonly captcha?: CfnWebACL.CaptchaActionProperty | cdk.IResolvable;
        /**
         * Instructs AWS WAF to run a `Challenge` check against the web request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ruleaction.html#cfn-wafv2-webacl-ruleaction-challenge
         */
        readonly challenge?: CfnWebACL.ChallengeActionProperty | cdk.IResolvable;
        /**
         * Instructs AWS WAF to count the web request and then continue evaluating the request using the remaining rules in the web ACL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ruleaction.html#cfn-wafv2-webacl-ruleaction-count
         */
        readonly count?: CfnWebACL.CountActionProperty | cdk.IResolvable;
    }
    /**
     * Specifies that AWS WAF should run a `CAPTCHA` check against the request:.
     *
     * - If the request includes a valid, unexpired `CAPTCHA` token, AWS WAF allows the web request inspection to proceed to the next rule, similar to a `CountAction` .
     * - If the request doesn't include a valid, unexpired `CAPTCHA` token, AWS WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.
     *
     * AWS WAF generates a response that it sends back to the client, which includes the following:
     *
     * - The header `x-amzn-waf-action` with a value of `captcha` .
     * - The HTTP status code `405 Method Not Allowed` .
     * - If the request contains an `Accept` header with a value of `text/html` , the response includes a `CAPTCHA` challenge.
     *
     * You can configure the expiration time in the `CaptchaConfig` `ImmunityTimeProperty` setting at the rule and web ACL level. The rule setting overrides the web ACL setting.
     *
     * This action option is available for rules. It isn't available for web ACL default actions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-captchaaction.html
     */
    interface CaptchaActionProperty {
        /**
         * Defines custom handling for the web request, used when the `CAPTCHA` inspection determines that the request's token is valid and unexpired.
         *
         * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-captchaaction.html#cfn-wafv2-webacl-captchaaction-customrequesthandling
         */
        readonly customRequestHandling?: CfnWebACL.CustomRequestHandlingProperty | cdk.IResolvable;
    }
    /**
     * Specifies that AWS WAF should count the request. Optionally defines additional custom handling for the request.
     *
     * This is used in the context of other settings, for example to specify values for a rule action or a web ACL default action.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-countaction.html
     */
    interface CountActionProperty {
        /**
         * Defines custom handling for the web request.
         *
         * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-countaction.html#cfn-wafv2-webacl-countaction-customrequesthandling
         */
        readonly customRequestHandling?: CfnWebACL.CustomRequestHandlingProperty | cdk.IResolvable;
    }
    /**
     * Specifies that AWS WAF should run a `Challenge` check against the request to verify that the request is coming from a legitimate client session:  - If the request includes a valid, unexpired challenge token, AWS WAF applies any custom request handling and labels that you've configured and then allows the web request inspection to proceed to the next rule, similar to a `CountAction` .
     *
     * - If the request doesn't include a valid, unexpired challenge token, AWS WAF discontinues the web ACL evaluation of the request and blocks it from going to its intended destination.
     *
     * AWS WAF then generates a challenge response that it sends back to the client, which includes the following:
     *
     * - The header `x-amzn-waf-action` with a value of `challenge` .
     * - The HTTP status code `202 Request Accepted` .
     * - If the request contains an `Accept` header with a value of `text/html` , the response includes a JavaScript page interstitial with a challenge script.
     *
     * Challenges run silent browser interrogations in the background, and don't generally affect the end user experience.
     *
     * A challenge enforces token acquisition using an interstitial JavaScript challenge that inspects the client session for legitimate behavior. The challenge blocks bots or at least increases the cost of operating sophisticated bots.
     *
     * After the client session successfully responds to the challenge, it receives a new token from AWS WAF , which the challenge script uses to resubmit the original request.
     *
     * You can configure the expiration time in the `ChallengeConfig` `ImmunityTimeProperty` setting at the rule and web ACL level. The rule setting overrides the web ACL setting.
     *
     * This action option is available for rules. It isn't available for web ACL default actions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-challengeaction.html
     */
    interface ChallengeActionProperty {
        /**
         * Defines custom handling for the web request, used when the challenge inspection determines that the request's token is valid and unexpired.
         *
         * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the [AWS WAF developer guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-challengeaction.html#cfn-wafv2-webacl-challengeaction-customrequesthandling
         */
        readonly customRequestHandling?: CfnWebACL.CustomRequestHandlingProperty | cdk.IResolvable;
    }
    /**
     * The processing guidance for a rule, used by AWS WAF to determine whether a web request matches the rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html
     */
    interface StatementProperty {
        /**
         * A logical rule statement used to combine other rule statements with AND logic.
         *
         * You provide more than one `Statement` within the `AndStatement` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-andstatement
         */
        readonly andStatement?: CfnWebACL.AndStatementProperty | cdk.IResolvable;
        /**
         * A rule statement that defines a string match search for AWS WAF to apply to web requests.
         *
         * The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is called a string match statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-bytematchstatement
         */
        readonly byteMatchStatement?: CfnWebACL.ByteMatchStatementProperty | cdk.IResolvable;
        /**
         * A rule statement that labels web requests by country and region and that matches against web requests based on country code.
         *
         * A geo match rule labels every request that it inspects regardless of whether it finds a match.
         *
         * - To manage requests only by country, you can use this statement by itself and specify the countries that you want to match against in the `CountryCodes` array.
         * - Otherwise, configure your geo match rule with Count action so that it only labels requests. Then, add one or more label match rules to run after the geo match rule and configure them to match against the geographic labels and handle the requests as needed.
         *
         * AWS WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. AWS WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match `ForwardedIPConfig` .
         *
         * If you use the web request origin, the label formats are `awswaf:clientip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:clientip:geo:country:<ISO country code>` .
         *
         * If you use a forwarded IP address, the label formats are `awswaf:forwardedip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:forwardedip:geo:country:<ISO country code>` .
         *
         * For additional details, see [Geographic match rule statement](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html) in the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-geomatchstatement
         */
        readonly geoMatchStatement?: CfnWebACL.GeoMatchStatementProperty | cdk.IResolvable;
        /**
         * A rule statement used to detect web requests coming from particular IP addresses or address ranges.
         *
         * To use this, create an `IPSet` that specifies the addresses you want to detect, then use the ARN of that set in this statement.
         *
         * Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-ipsetreferencestatement
         */
        readonly ipSetReferenceStatement?: CfnWebACL.IPSetReferenceStatementProperty | cdk.IResolvable;
        /**
         * A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL.
         *
         * The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, AWS WAF performs the search for labels that were added in the same context as the label match statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-labelmatchstatement
         */
        readonly labelMatchStatement?: cdk.IResolvable | CfnWebACL.LabelMatchStatementProperty;
        /**
         * A rule statement used to run the rules that are defined in a managed rule group.
         *
         * To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names through the API call `ListAvailableManagedRuleGroups` .
         *
         * You cannot nest a `ManagedRuleGroupStatement` , for example for use inside a `NotStatement` or `OrStatement` . It can only be referenced as a top-level statement within a rule.
         *
         * > You are charged additional fees when you use the AWS WAF Bot Control managed rule group `AWSManagedRulesBotControlRuleSet` , the AWS WAF Fraud Control account takeover prevention (ATP) managed rule group `AWSManagedRulesATPRuleSet` , or the AWS WAF Fraud Control account creation fraud prevention (ACFP) managed rule group `AWSManagedRulesACFPRuleSet` . For more information, see [AWS WAF Pricing](https://docs.aws.amazon.com/waf/pricing/) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-managedrulegroupstatement
         */
        readonly managedRuleGroupStatement?: cdk.IResolvable | CfnWebACL.ManagedRuleGroupStatementProperty;
        /**
         * A logical rule statement used to negate the results of another rule statement.
         *
         * You provide one `Statement` within the `NotStatement` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-notstatement
         */
        readonly notStatement?: cdk.IResolvable | CfnWebACL.NotStatementProperty;
        /**
         * A logical rule statement used to combine other rule statements with OR logic.
         *
         * You provide more than one `Statement` within the `OrStatement` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-orstatement
         */
        readonly orStatement?: cdk.IResolvable | CfnWebACL.OrStatementProperty;
        /**
         * A rate-based rule counts incoming requests and rate limits requests when they are coming at too fast a rate.
         *
         * The rule categorizes requests according to your aggregation criteria, collects them into aggregation instances, and counts and rate limits the requests for each instance.
         *
         * > If you change any of these settings in a rule that's currently in use, the change resets the rule's rate limiting counts. This can pause the rule's rate limiting activities for up to a minute.
         *
         * You can specify individual aggregation keys, like IP address or HTTP method. You can also specify aggregation key combinations, like IP address and HTTP method, or HTTP method, query argument, and cookie.
         *
         * Each unique set of values for the aggregation keys that you specify is a separate aggregation instance, with the value from each key contributing to the aggregation instance definition.
         *
         * For example, assume the rule evaluates web requests with the following IP address and HTTP method values:
         *
         * - IP address 10.1.1.1, HTTP method POST
         * - IP address 10.1.1.1, HTTP method GET
         * - IP address 127.0.0.0, HTTP method POST
         * - IP address 10.1.1.1, HTTP method GET
         *
         * The rule would create different aggregation instances according to your aggregation criteria, for example:
         *
         * - If the aggregation criteria is just the IP address, then each individual address is an aggregation instance, and AWS WAF counts requests separately for each. The aggregation instances and request counts for our example would be the following:
         *
         * - IP address 10.1.1.1: count 3
         * - IP address 127.0.0.0: count 1
         * - If the aggregation criteria is HTTP method, then each individual HTTP method is an aggregation instance. The aggregation instances and request counts for our example would be the following:
         *
         * - HTTP method POST: count 2
         * - HTTP method GET: count 2
         * - If the aggregation criteria is IP address and HTTP method, then each IP address and each HTTP method would contribute to the combined aggregation instance. The aggregation instances and request counts for our example would be the following:
         *
         * - IP address 10.1.1.1, HTTP method POST: count 1
         * - IP address 10.1.1.1, HTTP method GET: count 2
         * - IP address 127.0.0.0, HTTP method POST: count 1
         *
         * For any n-tuple of aggregation keys, each unique combination of values for the keys defines a separate aggregation instance, which AWS WAF counts and rate-limits individually.
         *
         * You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts and rate limits requests that match the nested statement. You can use this nested scope-down statement in conjunction with your aggregation key specifications or you can just count and rate limit all requests that match the scope-down statement, without additional aggregation. When you choose to just manage all requests that match a scope-down statement, the aggregation instance is singular for the rule.
         *
         * You cannot nest a `RateBasedStatement` inside another statement, for example inside a `NotStatement` or `OrStatement` . You can define a `RateBasedStatement` inside a web ACL and inside a rule group.
         *
         * For additional information about the options, see [Rate limiting web requests using rate-based rules](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rate-based-rules.html) in the *AWS WAF Developer Guide* .
         *
         * If you only aggregate on the individual IP address or forwarded IP address, you can retrieve the list of IP addresses that AWS WAF is currently rate limiting for a rule through the API call `GetRateBasedStatementManagedKeys` . This option is not available for other aggregation configurations.
         *
         * AWS WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by AWS WAF . If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by AWS WAF .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-ratebasedstatement
         */
        readonly rateBasedStatement?: cdk.IResolvable | CfnWebACL.RateBasedStatementProperty;
        /**
         * A rule statement used to search web request components for a match against a single regular expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-regexmatchstatement
         */
        readonly regexMatchStatement?: cdk.IResolvable | CfnWebACL.RegexMatchStatementProperty;
        /**
         * A rule statement used to search web request components for matches with regular expressions.
         *
         * To use this, create a `RegexPatternSet` that specifies the expressions that you want to detect, then use the ARN of that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set.
         *
         * Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-regexpatternsetreferencestatement
         */
        readonly regexPatternSetReferenceStatement?: cdk.IResolvable | CfnWebACL.RegexPatternSetReferenceStatementProperty;
        /**
         * A rule statement used to run the rules that are defined in a `RuleGroup` .
         *
         * To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.
         *
         * You cannot nest a `RuleGroupReferenceStatement` , for example for use inside a `NotStatement` or `OrStatement` . You cannot use a rule group reference statement inside another rule group. You can only reference a rule group as a top-level statement within a rule that you define in a web ACL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-rulegroupreferencestatement
         */
        readonly ruleGroupReferenceStatement?: cdk.IResolvable | CfnWebACL.RuleGroupReferenceStatementProperty;
        /**
         * A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<).
         *
         * For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes.
         *
         * If you configure AWS WAF to inspect the request body, AWS WAF inspects only the number of bytes in the body up to the limit for the web ACL and protected resource type. If you know that the request body for your web requests should never exceed the inspection limit, you can use a size constraint statement to block requests that have a larger request body size. For more information about the inspection limits, see `Body` and `JsonBody` settings for the `FieldToMatch` data type.
         *
         * If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI `/logo.jpg` is nine characters long.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-sizeconstraintstatement
         */
        readonly sizeConstraintStatement?: cdk.IResolvable | CfnWebACL.SizeConstraintStatementProperty;
        /**
         * A rule statement that inspects for malicious SQL code.
         *
         * Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-sqlimatchstatement
         */
        readonly sqliMatchStatement?: cdk.IResolvable | CfnWebACL.SqliMatchStatementProperty;
        /**
         * A rule statement that inspects for cross-site scripting (XSS) attacks.
         *
         * In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-statement.html#cfn-wafv2-webacl-statement-xssmatchstatement
         */
        readonly xssMatchStatement?: cdk.IResolvable | CfnWebACL.XssMatchStatementProperty;
    }
    /**
     * A rule statement that compares a number of bytes against the size of a request component, using a comparison operator, such as greater than (>) or less than (<).
     *
     * For example, you can use a size constraint statement to look for query strings that are longer than 100 bytes.
     *
     * If you configure AWS WAF to inspect the request body, AWS WAF inspects only the number of bytes in the body up to the limit for the web ACL and protected resource type. If you know that the request body for your web requests should never exceed the inspection limit, you can use a size constraint statement to block requests that have a larger request body size. For more information about the inspection limits, see `Body` and `JsonBody` settings for the `FieldToMatch` data type.
     *
     * If you choose URI for the value of Part of the request to filter on, the slash (/) in the URI counts as one character. For example, the URI `/logo.jpg` is nine characters long.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sizeconstraintstatement.html
     */
    interface SizeConstraintStatementProperty {
        /**
         * The operator to use to compare the request part to the size setting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sizeconstraintstatement.html#cfn-wafv2-webacl-sizeconstraintstatement-comparisonoperator
         */
        readonly comparisonOperator: string;
        /**
         * The part of the web request that you want AWS WAF to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sizeconstraintstatement.html#cfn-wafv2-webacl-sizeconstraintstatement-fieldtomatch
         */
        readonly fieldToMatch: CfnWebACL.FieldToMatchProperty | cdk.IResolvable;
        /**
         * The size, in byte, to compare to the request part, after any transformations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sizeconstraintstatement.html#cfn-wafv2-webacl-sizeconstraintstatement-size
         */
        readonly size: number;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch` , starting from the lowest priority setting, before inspecting the content for a match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sizeconstraintstatement.html#cfn-wafv2-webacl-sizeconstraintstatement-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnWebACL.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-texttransformation.html
     */
    interface TextTransformationProperty {
        /**
         * Sets the relative processing order for multiple transformations.
         *
         * AWS WAF processes all transformations, from lowest priority to highest, before inspecting the transformed content. The priorities don't need to be consecutive, but they must all be different.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-texttransformation.html#cfn-wafv2-webacl-texttransformation-priority
         */
        readonly priority: number;
        /**
         * For detailed descriptions of each of the transformation types, see [Text transformations](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-transformation.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-texttransformation.html#cfn-wafv2-webacl-texttransformation-type
         */
        readonly type: string;
    }
    /**
     * Specifies a web request component to be used in a rule match statement or in a logging configuration.
     *
     * - In a rule statement, this is the part of the web request that you want AWS WAF to inspect. Include the single `FieldToMatch` type that you want to inspect, with additional specifications as needed, according to the type. You specify a single request component in `FieldToMatch` for each rule statement that requires it. To inspect more than one component of the web request, create a separate rule statement for each component.
     *
     * Example JSON for a `QueryString` field to match:
     *
     * `"FieldToMatch": { "QueryString": {} }`
     *
     * Example JSON for a `Method` field to match specification:
     *
     * `"FieldToMatch": { "Method": { "Name": "DELETE" } }`
     * - In a logging configuration, this is used in the `RedactedFields` property to specify a field to redact from the logging records. For this use case, note the following:
     *
     * - Even though all `FieldToMatch` settings are available, the only valid settings for field redaction are `UriPath` , `QueryString` , `SingleHeader` , and `Method` .
     * - In this documentation, the descriptions of the individual fields talk about specifying the web request component to inspect, but for field redaction, you are specifying the component type to redact from the logs.
     * - If you have request sampling enabled, the redacted fields configuration for logging has no impact on sampling. You can only exclude fields from request sampling by disabling sampling in the web ACL visibility configuration or by configuring data protection for the web ACL.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldtomatch.html
     */
    interface FieldToMatchProperty {
        /**
         * Inspect all query arguments.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldtomatch.html#cfn-wafv2-webacl-fieldtomatch-allqueryarguments
         */
        readonly allQueryArguments?: any | cdk.IResolvable;
        /**
         * Inspect the request body as plain text.
         *
         * The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form.
         *
         * AWS WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to AWS WAF for inspection.
         *
         * - For Application Load Balancer and AWS AppSync , the limit is fixed at 8 KB (8,192 bytes).
         * - For CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access, the default limit is 16 KB (16,384 bytes), and you can increase the limit for each resource type in the web ACL `AssociationConfig` , for additional processing fees.
         *
         * For information about how to handle oversized request bodies, see the `Body` object configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldtomatch.html#cfn-wafv2-webacl-fieldtomatch-body
         */
        readonly body?: CfnWebACL.BodyProperty | cdk.IResolvable;
        /**
         * Inspect the request cookies.
         *
         * You must configure scope and pattern matching filters in the `Cookies` object, to define the set of cookies and the parts of the cookies that AWS WAF inspects.
         *
         * Only the first 8 KB (8192 bytes) of a request's cookies and only the first 200 cookies are forwarded to AWS WAF for inspection by the underlying host service. You must configure how to handle any oversize cookie content in the `Cookies` object. AWS WAF applies the pattern matching filters to the cookies that it receives from the underlying host service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldtomatch.html#cfn-wafv2-webacl-fieldtomatch-cookies
         */
        readonly cookies?: CfnWebACL.CookiesProperty | cdk.IResolvable;
        /**
         * Inspect the request headers.
         *
         * You must configure scope and pattern matching filters in the `Headers` object, to define the set of headers to and the parts of the headers that AWS WAF inspects.
         *
         * Only the first 8 KB (8192 bytes) of a request's headers and only the first 200 headers are forwarded to AWS WAF for inspection by the underlying host service. You must configure how to handle any oversize header content in the `Headers` object. AWS WAF applies the pattern matching filters to the headers that it receives from the underlying host service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldtomatch.html#cfn-wafv2-webacl-fieldtomatch-headers
         */
        readonly headers?: CfnWebACL.HeadersProperty | cdk.IResolvable;
        /**
         * Available for use with Amazon CloudFront distributions and Application Load Balancers.
         *
         * Match against the request's JA3 fingerprint. The JA3 fingerprint is a 32-character hash derived from the TLS Client Hello of an incoming request. This fingerprint serves as a unique identifier for the client's TLS configuration. AWS WAF calculates and logs this fingerprint for each request that has enough TLS Client Hello information for the calculation. Almost all web requests include this information.
         *
         * > You can use this choice only with a string match `ByteMatchStatement` with the `PositionalConstraint` set to `EXACTLY` .
         *
         * You can obtain the JA3 fingerprint for client requests from the web ACL logs. If AWS WAF is able to calculate the fingerprint, it includes it in the logs. For information about the logging fields, see [Log fields](https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html) in the *AWS WAF Developer Guide* .
         *
         * Provide the JA3 fingerprint string from the logs in your string match statement specification, to match with any future requests that have the same TLS configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldtomatch.html#cfn-wafv2-webacl-fieldtomatch-ja3fingerprint
         */
        readonly ja3Fingerprint?: cdk.IResolvable | CfnWebACL.JA3FingerprintProperty;
        /**
         * Includes the JA4 fingerprint of a web request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldtomatch.html#cfn-wafv2-webacl-fieldtomatch-ja4fingerprint
         */
        readonly ja4Fingerprint?: cdk.IResolvable | CfnWebACL.JA4FingerprintProperty;
        /**
         * Inspect the request body as JSON.
         *
         * The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form.
         *
         * AWS WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to AWS WAF for inspection.
         *
         * - For Application Load Balancer and AWS AppSync , the limit is fixed at 8 KB (8,192 bytes).
         * - For CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access, the default limit is 16 KB (16,384 bytes), and you can increase the limit for each resource type in the web ACL `AssociationConfig` , for additional processing fees.
         *
         * For information about how to handle oversized request bodies, see the `JsonBody` object configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldtomatch.html#cfn-wafv2-webacl-fieldtomatch-jsonbody
         */
        readonly jsonBody?: cdk.IResolvable | CfnWebACL.JsonBodyProperty;
        /**
         * Inspect the HTTP method.
         *
         * The method indicates the type of operation that the request is asking the origin to perform.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldtomatch.html#cfn-wafv2-webacl-fieldtomatch-method
         */
        readonly method?: any | cdk.IResolvable;
        /**
         * Inspect the query string.
         *
         * This is the part of a URL that appears after a `?` character, if any.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldtomatch.html#cfn-wafv2-webacl-fieldtomatch-querystring
         */
        readonly queryString?: any | cdk.IResolvable;
        /**
         * Inspect a single header.
         *
         * Provide the name of the header to inspect, for example, `User-Agent` or `Referer` . This setting isn't case sensitive.
         *
         * Example JSON: `"SingleHeader": { "Name": "haystack" }`
         *
         * Alternately, you can filter and inspect all headers with the `Headers` `FieldToMatch` setting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldtomatch.html#cfn-wafv2-webacl-fieldtomatch-singleheader
         */
        readonly singleHeader?: any | cdk.IResolvable;
        /**
         * Inspect a single query argument.
         *
         * Provide the name of the query argument to inspect, such as *UserName* or *SalesRegion* . The name can be up to 30 characters long and isn't case sensitive.
         *
         * Example JSON: `"SingleQueryArgument": { "Name": "myArgument" }`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldtomatch.html#cfn-wafv2-webacl-fieldtomatch-singlequeryargument
         */
        readonly singleQueryArgument?: any | cdk.IResolvable;
        /**
         * Inspect the request URI path.
         *
         * This is the part of the web request that identifies a resource, for example, `/images/daily-ad.jpg` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldtomatch.html#cfn-wafv2-webacl-fieldtomatch-uripath
         */
        readonly uriPath?: any | cdk.IResolvable;
    }
    /**
     * Inspect the body of the web request as JSON. The body immediately follows the request headers.
     *
     * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
     *
     * Use the specifications in this object to indicate which parts of the JSON body to inspect using the rule's inspection criteria. AWS WAF inspects only the parts of the JSON that result from the matches that you indicate.
     *
     * Example JSON: `"JsonBody": { "MatchPattern": { "All": {} }, "MatchScope": "ALL" }`
     *
     * For additional information about this request component option, see [JSON body](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-fields-list.html#waf-rule-statement-request-component-json-body) in the *AWS WAF Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-jsonbody.html
     */
    interface JsonBodyProperty {
        /**
         * What AWS WAF should do if it fails to completely parse the JSON body. The options are the following:.
         *
         * - `EVALUATE_AS_STRING` - Inspect the body as plain text. AWS WAF applies the text transformations and inspection criteria that you defined for the JSON inspection to the body text string.
         * - `MATCH` - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.
         * - `NO_MATCH` - Treat the web request as not matching the rule statement.
         *
         * If you don't provide this setting, AWS WAF parses and evaluates the content only up to the first parsing failure that it encounters.
         *
         * > AWS WAF parsing doesn't fully validate the input JSON string, so parsing can succeed even for invalid JSON. When parsing succeeds, AWS WAF doesn't apply the fallback behavior. For more information, see [JSON body](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-fields-list.html#waf-rule-statement-request-component-json-body) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-jsonbody.html#cfn-wafv2-webacl-jsonbody-invalidfallbackbehavior
         */
        readonly invalidFallbackBehavior?: string;
        /**
         * The patterns to look for in the JSON body.
         *
         * AWS WAF inspects the results of these pattern matches against the rule inspection criteria.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-jsonbody.html#cfn-wafv2-webacl-jsonbody-matchpattern
         */
        readonly matchPattern: cdk.IResolvable | CfnWebACL.JsonMatchPatternProperty;
        /**
         * The parts of the JSON to match against using the `MatchPattern` .
         *
         * If you specify `ALL` , AWS WAF matches against keys and values.
         *
         * `All` does not require a match to be found in the keys and a match to be found in the values. It requires a match to be found in the keys or the values or both. To require a match in the keys and in the values, use a logical `AND` statement to combine two match rules, one that inspects the keys and another that inspects the values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-jsonbody.html#cfn-wafv2-webacl-jsonbody-matchscope
         */
        readonly matchScope: string;
        /**
         * What AWS WAF should do if the body is larger than AWS WAF can inspect.
         *
         * AWS WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to AWS WAF for inspection.
         *
         * - For Application Load Balancer and AWS AppSync , the limit is fixed at 8 KB (8,192 bytes).
         * - For CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access, the default limit is 16 KB (16,384 bytes), and you can increase the limit for each resource type in the web ACL `AssociationConfig` , for additional processing fees.
         *
         * The options for oversize handling are the following:
         *
         * - `CONTINUE` - Inspect the available body contents normally, according to the rule inspection criteria.
         * - `MATCH` - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.
         * - `NO_MATCH` - Treat the web request as not matching the rule statement.
         *
         * You can combine the `MATCH` or `NO_MATCH` settings for oversize handling with your rule and web ACL action settings, so that you block any request whose body is over the limit.
         *
         * Default: `CONTINUE`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-jsonbody.html#cfn-wafv2-webacl-jsonbody-oversizehandling
         */
        readonly oversizeHandling?: string;
    }
    /**
     * The patterns to look for in the JSON body.
     *
     * AWS WAF inspects the results of these pattern matches against the rule inspection criteria. This is used with the `FieldToMatch` option `JsonBody` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-jsonmatchpattern.html
     */
    interface JsonMatchPatternProperty {
        /**
         * Match all of the elements. See also `MatchScope` in the `JsonBody` `FieldToMatch` specification.
         *
         * You must specify either this setting or the `IncludedPaths` setting, but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-jsonmatchpattern.html#cfn-wafv2-webacl-jsonmatchpattern-all
         */
        readonly all?: any | cdk.IResolvable;
        /**
         * Match only the specified include paths. See also `MatchScope` in the `JsonBody` `FieldToMatch` specification.
         *
         * Provide the include paths using JSON Pointer syntax. For example, `"IncludedPaths": ["/dogs/0/name", "/dogs/1/name"]` . For information about this syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc6901) .
         *
         * You must specify either this setting or the `All` setting, but not both.
         *
         * > Don't use this option to include all paths. Instead, use the `All` setting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-jsonmatchpattern.html#cfn-wafv2-webacl-jsonmatchpattern-includedpaths
         */
        readonly includedPaths?: Array<string>;
    }
    /**
     * Inspect all headers in the web request.
     *
     * You can specify the parts of the headers to inspect and you can narrow the set of headers to inspect by including or excluding specific keys.
     *
     * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
     *
     * If you want to inspect just the value of a single header, use the `SingleHeader` `FieldToMatch` setting instead.
     *
     * Example JSON: `"Headers": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-headers.html
     */
    interface HeadersProperty {
        /**
         * The filter to use to identify the subset of headers to inspect in a web request.
         *
         * You must specify exactly one setting: either `All` , `IncludedHeaders` , or `ExcludedHeaders` .
         *
         * Example JSON: `"MatchPattern": { "ExcludedHeaders": [ "KeyToExclude1", "KeyToExclude2" ] }`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-headers.html#cfn-wafv2-webacl-headers-matchpattern
         */
        readonly matchPattern: CfnWebACL.HeaderMatchPatternProperty | cdk.IResolvable;
        /**
         * The parts of the headers to match with the rule inspection criteria.
         *
         * If you specify `ALL` , AWS WAF inspects both keys and values.
         *
         * `All` does not require a match to be found in the keys and a match to be found in the values. It requires a match to be found in the keys or the values or both. To require a match in the keys and in the values, use a logical `AND` statement to combine two match rules, one that inspects the keys and another that inspects the values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-headers.html#cfn-wafv2-webacl-headers-matchscope
         */
        readonly matchScope: string;
        /**
         * What AWS WAF should do if the headers of the request are more numerous or larger than AWS WAF can inspect.
         *
         * AWS WAF does not support inspecting the entire contents of request headers when they exceed 8 KB (8192 bytes) or 200 total headers. The underlying host service forwards a maximum of 200 headers and at most 8 KB of header contents to AWS WAF .
         *
         * The options for oversize handling are the following:
         *
         * - `CONTINUE` - Inspect the available headers normally, according to the rule inspection criteria.
         * - `MATCH` - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.
         * - `NO_MATCH` - Treat the web request as not matching the rule statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-headers.html#cfn-wafv2-webacl-headers-oversizehandling
         */
        readonly oversizeHandling: string;
    }
    /**
     * The filter to use to identify the subset of headers to inspect in a web request.
     *
     * You must specify exactly one setting: either `All` , `IncludedHeaders` , or `ExcludedHeaders` .
     *
     * Example JSON: `"MatchPattern": { "ExcludedHeaders": [ "KeyToExclude1", "KeyToExclude2" ] }`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-headermatchpattern.html
     */
    interface HeaderMatchPatternProperty {
        /**
         * Inspect all headers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-headermatchpattern.html#cfn-wafv2-webacl-headermatchpattern-all
         */
        readonly all?: any | cdk.IResolvable;
        /**
         * Inspect only the headers whose keys don't match any of the strings specified here.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-headermatchpattern.html#cfn-wafv2-webacl-headermatchpattern-excludedheaders
         */
        readonly excludedHeaders?: Array<string>;
        /**
         * Inspect only the headers that have a key that matches one of the strings specified here.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-headermatchpattern.html#cfn-wafv2-webacl-headermatchpattern-includedheaders
         */
        readonly includedHeaders?: Array<string>;
    }
    /**
     * Inspect the cookies in the web request.
     *
     * You can specify the parts of the cookies to inspect and you can narrow the set of cookies to inspect by including or excluding specific keys.
     *
     * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
     *
     * Example JSON: `"Cookies": { "MatchPattern": { "All": {} }, "MatchScope": "KEY", "OversizeHandling": "MATCH" }`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-cookies.html
     */
    interface CookiesProperty {
        /**
         * The filter to use to identify the subset of cookies to inspect in a web request.
         *
         * You must specify exactly one setting: either `All` , `IncludedCookies` , or `ExcludedCookies` .
         *
         * Example JSON: `"MatchPattern": { "IncludedCookies": [ "session-id-time", "session-id" ] }`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-cookies.html#cfn-wafv2-webacl-cookies-matchpattern
         */
        readonly matchPattern: CfnWebACL.CookieMatchPatternProperty | cdk.IResolvable;
        /**
         * The parts of the cookies to inspect with the rule inspection criteria.
         *
         * If you specify `ALL` , AWS WAF inspects both keys and values.
         *
         * `All` does not require a match to be found in the keys and a match to be found in the values. It requires a match to be found in the keys or the values or both. To require a match in the keys and in the values, use a logical `AND` statement to combine two match rules, one that inspects the keys and another that inspects the values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-cookies.html#cfn-wafv2-webacl-cookies-matchscope
         */
        readonly matchScope: string;
        /**
         * What AWS WAF should do if the cookies of the request are more numerous or larger than AWS WAF can inspect.
         *
         * AWS WAF does not support inspecting the entire contents of request cookies when they exceed 8 KB (8192 bytes) or 200 total cookies. The underlying host service forwards a maximum of 200 cookies and at most 8 KB of cookie contents to AWS WAF .
         *
         * The options for oversize handling are the following:
         *
         * - `CONTINUE` - Inspect the available cookies normally, according to the rule inspection criteria.
         * - `MATCH` - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.
         * - `NO_MATCH` - Treat the web request as not matching the rule statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-cookies.html#cfn-wafv2-webacl-cookies-oversizehandling
         */
        readonly oversizeHandling: string;
    }
    /**
     * The filter to use to identify the subset of cookies to inspect in a web request.
     *
     * You must specify exactly one setting: either `All` , `IncludedCookies` , or `ExcludedCookies` .
     *
     * Example JSON: `"MatchPattern": { "IncludedCookies": [ "session-id-time", "session-id" ] }`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-cookiematchpattern.html
     */
    interface CookieMatchPatternProperty {
        /**
         * Inspect all cookies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-cookiematchpattern.html#cfn-wafv2-webacl-cookiematchpattern-all
         */
        readonly all?: any | cdk.IResolvable;
        /**
         * Inspect only the cookies whose keys don't match any of the strings specified here.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-cookiematchpattern.html#cfn-wafv2-webacl-cookiematchpattern-excludedcookies
         */
        readonly excludedCookies?: Array<string>;
        /**
         * Inspect only the cookies that have a key that matches one of the strings specified here.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-cookiematchpattern.html#cfn-wafv2-webacl-cookiematchpattern-includedcookies
         */
        readonly includedCookies?: Array<string>;
    }
    /**
     * Inspect the body of the web request. The body immediately follows the request headers.
     *
     * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-body.html
     */
    interface BodyProperty {
        /**
         * What AWS WAF should do if the body is larger than AWS WAF can inspect.
         *
         * AWS WAF does not support inspecting the entire contents of the web request body if the body exceeds the limit for the resource type. When a web request body is larger than the limit, the underlying host service only forwards the contents that are within the limit to AWS WAF for inspection.
         *
         * - For Application Load Balancer and AWS AppSync , the limit is fixed at 8 KB (8,192 bytes).
         * - For CloudFront, API Gateway, Amazon Cognito, App Runner, and Verified Access, the default limit is 16 KB (16,384 bytes), and you can increase the limit for each resource type in the web ACL `AssociationConfig` , for additional processing fees.
         *
         * The options for oversize handling are the following:
         *
         * - `CONTINUE` - Inspect the available body contents normally, according to the rule inspection criteria.
         * - `MATCH` - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.
         * - `NO_MATCH` - Treat the web request as not matching the rule statement.
         *
         * You can combine the `MATCH` or `NO_MATCH` settings for oversize handling with your rule and web ACL action settings, so that you block any request whose body is over the limit.
         *
         * Default: `CONTINUE`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-body.html#cfn-wafv2-webacl-body-oversizehandling
         */
        readonly oversizeHandling?: string;
    }
    /**
     * Available for use with Amazon CloudFront distributions and Application Load Balancers.
     *
     * Match against the request's JA3 fingerprint. The JA3 fingerprint is a 32-character hash derived from the TLS Client Hello of an incoming request. This fingerprint serves as a unique identifier for the client's TLS configuration. AWS WAF calculates and logs this fingerprint for each request that has enough TLS Client Hello information for the calculation. Almost all web requests include this information.
     *
     * > You can use this choice only with a string match `ByteMatchStatement` with the `PositionalConstraint` set to `EXACTLY` .
     *
     * You can obtain the JA3 fingerprint for client requests from the web ACL logs. If AWS WAF is able to calculate the fingerprint, it includes it in the logs. For information about the logging fields, see [Log fields](https://docs.aws.amazon.com/waf/latest/developerguide/logging-fields.html) in the *AWS WAF Developer Guide* .
     *
     * Provide the JA3 fingerprint string from the logs in your string match statement specification, to match with any future requests that have the same TLS configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ja3fingerprint.html
     */
    interface JA3FingerprintProperty {
        /**
         * The match status to assign to the web request if the request doesn't have a JA3 fingerprint.
         *
         * You can specify the following fallback behaviors:
         *
         * - `MATCH` - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.
         * - `NO_MATCH` - Treat the web request as not matching the rule statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ja3fingerprint.html#cfn-wafv2-webacl-ja3fingerprint-fallbackbehavior
         */
        readonly fallbackBehavior: string;
    }
    /**
     * Includes the JA4 fingerprint of a web request.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ja4fingerprint.html
     */
    interface JA4FingerprintProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ja4fingerprint.html#cfn-wafv2-webacl-ja4fingerprint-fallbackbehavior
         */
        readonly fallbackBehavior: string;
    }
    /**
     * A logical rule statement used to combine other rule statements with AND logic.
     *
     * You provide more than one `Statement` within the `AndStatement` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-andstatement.html
     */
    interface AndStatementProperty {
        /**
         * The statements to combine with AND logic.
         *
         * You can use any statements that can be nested.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-andstatement.html#cfn-wafv2-webacl-andstatement-statements
         */
        readonly statements: Array<cdk.IResolvable | CfnWebACL.StatementProperty> | cdk.IResolvable;
    }
    /**
     * A rule statement that inspects for cross-site scripting (XSS) attacks.
     *
     * In XSS attacks, the attacker uses vulnerabilities in a benign website as a vehicle to inject malicious client-site scripts into other legitimate web browsers.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-xssmatchstatement.html
     */
    interface XssMatchStatementProperty {
        /**
         * The part of the web request that you want AWS WAF to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-xssmatchstatement.html#cfn-wafv2-webacl-xssmatchstatement-fieldtomatch
         */
        readonly fieldToMatch: CfnWebACL.FieldToMatchProperty | cdk.IResolvable;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch` , starting from the lowest priority setting, before inspecting the content for a match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-xssmatchstatement.html#cfn-wafv2-webacl-xssmatchstatement-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnWebACL.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * A logical rule statement used to negate the results of another rule statement.
     *
     * You provide one `Statement` within the `NotStatement` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html
     */
    interface NotStatementProperty {
        /**
         * The statement to negate.
         *
         * You can use any statement that can be nested.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-notstatement.html#cfn-wafv2-webacl-notstatement-statement
         */
        readonly statement: cdk.IResolvable | CfnWebACL.StatementProperty;
    }
    /**
     * A rule statement that defines a string match search for AWS WAF to apply to web requests.
     *
     * The byte match statement provides the bytes to search for, the location in requests that you want AWS WAF to search, and other settings. The bytes to search for are typically a string that corresponds with ASCII characters. In the AWS WAF console and the developer guide, this is called a string match statement.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-bytematchstatement.html
     */
    interface ByteMatchStatementProperty {
        /**
         * The part of the web request that you want AWS WAF to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-bytematchstatement.html#cfn-wafv2-webacl-bytematchstatement-fieldtomatch
         */
        readonly fieldToMatch: CfnWebACL.FieldToMatchProperty | cdk.IResolvable;
        /**
         * The area within the portion of the web request that you want AWS WAF to search for `SearchString` .
         *
         * Valid values include the following:
         *
         * *CONTAINS*
         *
         * The specified part of the web request must include the value of `SearchString` , but the location doesn't matter.
         *
         * *CONTAINS_WORD*
         *
         * The specified part of the web request must include the value of `SearchString` , and `SearchString` must contain only alphanumeric characters or underscore (A-Z, a-z, 0-9, or _). In addition, `SearchString` must be a word, which means that both of the following are true:
         *
         * - `SearchString` is at the beginning of the specified part of the web request or is preceded by a character other than an alphanumeric character or underscore (_). Examples include the value of a header and `;BadBot` .
         * - `SearchString` is at the end of the specified part of the web request or is followed by a character other than an alphanumeric character or underscore (_), for example, `BadBot;` and `-BadBot;` .
         *
         * *EXACTLY*
         *
         * The value of the specified part of the web request must exactly match the value of `SearchString` .
         *
         * *STARTS_WITH*
         *
         * The value of `SearchString` must appear at the beginning of the specified part of the web request.
         *
         * *ENDS_WITH*
         *
         * The value of `SearchString` must appear at the end of the specified part of the web request.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-bytematchstatement.html#cfn-wafv2-webacl-bytematchstatement-positionalconstraint
         */
        readonly positionalConstraint: string;
        /**
         * A string value that you want AWS WAF to search for.
         *
         * AWS WAF searches only in the part of web requests that you designate for inspection in `FieldToMatch` . The maximum length of the value is 200 bytes. For alphabetic characters A-Z and a-z, the value is case sensitive.
         *
         * Don't encode this string. Provide the value that you want AWS WAF to search for. AWS CloudFormation automatically base64 encodes the value for you.
         *
         * For example, suppose the value of `Type` is `HEADER` and the value of `Data` is `User-Agent` . If you want to search the `User-Agent` header for the value `BadBot` , you provide the string `BadBot` in the value of `SearchString` .
         *
         * You must specify either `SearchString` or `SearchStringBase64` in a `ByteMatchStatement` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-bytematchstatement.html#cfn-wafv2-webacl-bytematchstatement-searchstring
         */
        readonly searchString?: string;
        /**
         * String to search for in a web request component, base64-encoded.
         *
         * If you don't want to encode the string, specify the unencoded value in `SearchString` instead.
         *
         * You must specify either `SearchString` or `SearchStringBase64` in a `ByteMatchStatement` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-bytematchstatement.html#cfn-wafv2-webacl-bytematchstatement-searchstringbase64
         */
        readonly searchStringBase64?: string;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch` , starting from the lowest priority setting, before inspecting the content for a match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-bytematchstatement.html#cfn-wafv2-webacl-bytematchstatement-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnWebACL.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * A rate-based rule counts incoming requests and rate limits requests when they are coming at too fast a rate.
     *
     * The rule categorizes requests according to your aggregation criteria, collects them into aggregation instances, and counts and rate limits the requests for each instance.
     *
     * > If you change any of these settings in a rule that's currently in use, the change resets the rule's rate limiting counts. This can pause the rule's rate limiting activities for up to a minute.
     *
     * You can specify individual aggregation keys, like IP address or HTTP method. You can also specify aggregation key combinations, like IP address and HTTP method, or HTTP method, query argument, and cookie.
     *
     * Each unique set of values for the aggregation keys that you specify is a separate aggregation instance, with the value from each key contributing to the aggregation instance definition.
     *
     * For example, assume the rule evaluates web requests with the following IP address and HTTP method values:
     *
     * - IP address 10.1.1.1, HTTP method POST
     * - IP address 10.1.1.1, HTTP method GET
     * - IP address 127.0.0.0, HTTP method POST
     * - IP address 10.1.1.1, HTTP method GET
     *
     * The rule would create different aggregation instances according to your aggregation criteria, for example:
     *
     * - If the aggregation criteria is just the IP address, then each individual address is an aggregation instance, and AWS WAF counts requests separately for each. The aggregation instances and request counts for our example would be the following:
     *
     * - IP address 10.1.1.1: count 3
     * - IP address 127.0.0.0: count 1
     * - If the aggregation criteria is HTTP method, then each individual HTTP method is an aggregation instance. The aggregation instances and request counts for our example would be the following:
     *
     * - HTTP method POST: count 2
     * - HTTP method GET: count 2
     * - If the aggregation criteria is IP address and HTTP method, then each IP address and each HTTP method would contribute to the combined aggregation instance. The aggregation instances and request counts for our example would be the following:
     *
     * - IP address 10.1.1.1, HTTP method POST: count 1
     * - IP address 10.1.1.1, HTTP method GET: count 2
     * - IP address 127.0.0.0, HTTP method POST: count 1
     *
     * For any n-tuple of aggregation keys, each unique combination of values for the keys defines a separate aggregation instance, which AWS WAF counts and rate-limits individually.
     *
     * You can optionally nest another statement inside the rate-based statement, to narrow the scope of the rule so that it only counts and rate limits requests that match the nested statement. You can use this nested scope-down statement in conjunction with your aggregation key specifications or you can just count and rate limit all requests that match the scope-down statement, without additional aggregation. When you choose to just manage all requests that match a scope-down statement, the aggregation instance is singular for the rule.
     *
     * You cannot nest a `RateBasedStatement` inside another statement, for example inside a `NotStatement` or `OrStatement` . You can define a `RateBasedStatement` inside a web ACL and inside a rule group.
     *
     * For additional information about the options, see [Rate limiting web requests using rate-based rules](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rate-based-rules.html) in the *AWS WAF Developer Guide* .
     *
     * If you only aggregate on the individual IP address or forwarded IP address, you can retrieve the list of IP addresses that AWS WAF is currently rate limiting for a rule through the API call `GetRateBasedStatementManagedKeys` . This option is not available for other aggregation configurations.
     *
     * AWS WAF tracks and manages web requests separately for each instance of a rate-based rule that you use. For example, if you provide the same rate-based rule settings in two web ACLs, each of the two rule statements represents a separate instance of the rate-based rule and gets its own tracking and management by AWS WAF . If you define a rate-based rule inside a rule group, and then use that rule group in multiple places, each use creates a separate instance of the rate-based rule that gets its own tracking and management by AWS WAF .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatement.html
     */
    interface RateBasedStatementProperty {
        /**
         * Setting that indicates how to aggregate the request counts.
         *
         * > Web requests that are missing any of the components specified in the aggregation keys are omitted from the rate-based rule evaluation and handling.
         *
         * - `CONSTANT` - Count and limit the requests that match the rate-based rule's scope-down statement. With this option, the counted requests aren't further aggregated. The scope-down statement is the only specification used. When the count of all requests that satisfy the scope-down statement goes over the limit, AWS WAF applies the rule action to all requests that satisfy the scope-down statement.
         *
         * With this option, you must configure the `ScopeDownStatement` property.
         * - `CUSTOM_KEYS` - Aggregate the request counts using one or more web request components as the aggregate keys.
         *
         * With this option, you must specify the aggregate keys in the `CustomKeys` property.
         *
         * To aggregate on only the IP address or only the forwarded IP address, don't use custom keys. Instead, set the aggregate key type to `IP` or `FORWARDED_IP` .
         * - `FORWARDED_IP` - Aggregate the request counts on the first IP address in an HTTP header.
         *
         * With this option, you must specify the header to use in the `ForwardedIPConfig` property.
         *
         * To aggregate on a combination of the forwarded IP address with other aggregate keys, use `CUSTOM_KEYS` .
         * - `IP` - Aggregate the request counts on the IP address from the web request origin.
         *
         * To aggregate on a combination of the IP address with other aggregate keys, use `CUSTOM_KEYS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatement.html#cfn-wafv2-webacl-ratebasedstatement-aggregatekeytype
         */
        readonly aggregateKeyType: string;
        /**
         * Specifies the aggregate keys to use in a rate-base rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatement.html#cfn-wafv2-webacl-ratebasedstatement-customkeys
         */
        readonly customKeys?: Array<cdk.IResolvable | CfnWebACL.RateBasedStatementCustomKeyProperty> | cdk.IResolvable;
        /**
         * The amount of time, in seconds, that AWS WAF should include in its request counts, looking back from the current time.
         *
         * For example, for a setting of 120, when AWS WAF checks the rate, it counts the requests for the 2 minutes immediately preceding the current time. Valid settings are 60, 120, 300, and 600.
         *
         * This setting doesn't determine how often AWS WAF checks the rate, but how far back it looks each time it checks. AWS WAF checks the rate about every 10 seconds.
         *
         * Default: `300` (5 minutes)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatement.html#cfn-wafv2-webacl-ratebasedstatement-evaluationwindowsec
         */
        readonly evaluationWindowSec?: number;
        /**
         * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin.
         *
         * Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
         *
         * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
         *
         * This is required if you specify a forwarded IP in the rule's aggregate key settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatement.html#cfn-wafv2-webacl-ratebasedstatement-forwardedipconfig
         */
        readonly forwardedIpConfig?: CfnWebACL.ForwardedIPConfigurationProperty | cdk.IResolvable;
        /**
         * The limit on requests during the specified evaluation window for a single aggregation instance for the rate-based rule.
         *
         * If the rate-based statement includes a `ScopeDownStatement` , this limit is applied only to the requests that match the statement.
         *
         * Examples:
         *
         * - If you aggregate on just the IP address, this is the limit on requests from any single IP address.
         * - If you aggregate on the HTTP method and the query argument name "city", then this is the limit on requests for any single method, city pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatement.html#cfn-wafv2-webacl-ratebasedstatement-limit
         */
        readonly limit: number;
        /**
         * An optional nested statement that narrows the scope of the web requests that are evaluated and managed by the rate-based statement.
         *
         * When you use a scope-down statement, the rate-based rule only tracks and rate limits requests that match the scope-down statement. You can use any nestable `Statement` in the scope-down statement, and you can nest statements at any level, the same as you can for a rule statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatement.html#cfn-wafv2-webacl-ratebasedstatement-scopedownstatement
         */
        readonly scopeDownStatement?: cdk.IResolvable | CfnWebACL.StatementProperty;
    }
    /**
     * Specifies a single custom aggregate key for a rate-base rule.
     *
     * > Web requests that are missing any of the components specified in the aggregation keys are omitted from the rate-based rule evaluation and handling.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatementcustomkey.html
     */
    interface RateBasedStatementCustomKeyProperty {
        /**
         * Use the value of a cookie in the request as an aggregate key.
         *
         * Each distinct value in the cookie contributes to the aggregation instance. If you use a single cookie as your custom key, then each value fully defines an aggregation instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatementcustomkey.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-cookie
         */
        readonly cookie?: cdk.IResolvable | CfnWebACL.RateLimitCookieProperty;
        /**
         * Use the first IP address in an HTTP header as an aggregate key.
         *
         * Each distinct forwarded IP address contributes to the aggregation instance.
         *
         * When you specify an IP or forwarded IP in the custom key settings, you must also specify at least one other key to use. You can aggregate on only the forwarded IP address by specifying `FORWARDED_IP` in your rate-based statement's `AggregateKeyType` .
         *
         * With this option, you must specify the header to use in the rate-based rule's `ForwardedIPConfig` property.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatementcustomkey.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-forwardedip
         */
        readonly forwardedIp?: any | cdk.IResolvable;
        /**
         * Use the value of a header in the request as an aggregate key.
         *
         * Each distinct value in the header contributes to the aggregation instance. If you use a single header as your custom key, then each value fully defines an aggregation instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatementcustomkey.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-header
         */
        readonly header?: cdk.IResolvable | CfnWebACL.RateLimitHeaderProperty;
        /**
         * Use the request's HTTP method as an aggregate key.
         *
         * Each distinct HTTP method contributes to the aggregation instance. If you use just the HTTP method as your custom key, then each method fully defines an aggregation instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatementcustomkey.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-httpmethod
         */
        readonly httpMethod?: any | cdk.IResolvable;
        /**
         * Use the request's originating IP address as an aggregate key. Each distinct IP address contributes to the aggregation instance.
         *
         * When you specify an IP or forwarded IP in the custom key settings, you must also specify at least one other key to use. You can aggregate on only the IP address by specifying `IP` in your rate-based statement's `AggregateKeyType` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatementcustomkey.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-ip
         */
        readonly ip?: any | cdk.IResolvable;
        /**
         * Specifies the request's JA3 fingerprint as an aggregate key for a rate-based rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatementcustomkey.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-ja3fingerprint
         */
        readonly ja3Fingerprint?: cdk.IResolvable | CfnWebACL.RateLimitJA3FingerprintProperty;
        /**
         * Specifies the request's JA4 fingerprint as an aggregate key for a rate-based rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatementcustomkey.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-ja4fingerprint
         */
        readonly ja4Fingerprint?: cdk.IResolvable | CfnWebACL.RateLimitJA4FingerprintProperty;
        /**
         * Use the specified label namespace as an aggregate key.
         *
         * Each distinct fully qualified label name that has the specified label namespace contributes to the aggregation instance. If you use just one label namespace as your custom key, then each label name fully defines an aggregation instance.
         *
         * This uses only labels that have been added to the request by rules that are evaluated before this rate-based rule in the web ACL.
         *
         * For information about label namespaces and names, see [Label syntax and naming requirements](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-label-requirements.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatementcustomkey.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-labelnamespace
         */
        readonly labelNamespace?: cdk.IResolvable | CfnWebACL.RateLimitLabelNamespaceProperty;
        /**
         * Use the specified query argument as an aggregate key.
         *
         * Each distinct value for the named query argument contributes to the aggregation instance. If you use a single query argument as your custom key, then each value fully defines an aggregation instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatementcustomkey.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-queryargument
         */
        readonly queryArgument?: cdk.IResolvable | CfnWebACL.RateLimitQueryArgumentProperty;
        /**
         * Use the request's query string as an aggregate key.
         *
         * Each distinct string contributes to the aggregation instance. If you use just the query string as your custom key, then each string fully defines an aggregation instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatementcustomkey.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-querystring
         */
        readonly queryString?: cdk.IResolvable | CfnWebACL.RateLimitQueryStringProperty;
        /**
         * Use the request's URI path as an aggregate key.
         *
         * Each distinct URI path contributes to the aggregation instance. If you use just the URI path as your custom key, then each URI path fully defines an aggregation instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratebasedstatementcustomkey.html#cfn-wafv2-webacl-ratebasedstatementcustomkey-uripath
         */
        readonly uriPath?: cdk.IResolvable | CfnWebACL.RateLimitUriPathProperty;
    }
    /**
     * Specifies a cookie as an aggregate key for a rate-based rule.
     *
     * Each distinct value in the cookie contributes to the aggregation instance. If you use a single cookie as your custom key, then each value fully defines an aggregation instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitcookie.html
     */
    interface RateLimitCookieProperty {
        /**
         * The name of the cookie to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitcookie.html#cfn-wafv2-webacl-ratelimitcookie-name
         */
        readonly name: string;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitcookie.html#cfn-wafv2-webacl-ratelimitcookie-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnWebACL.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * Specifies a query argument in the request as an aggregate key for a rate-based rule.
     *
     * Each distinct value for the named query argument contributes to the aggregation instance. If you use a single query argument as your custom key, then each value fully defines an aggregation instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitqueryargument.html
     */
    interface RateLimitQueryArgumentProperty {
        /**
         * The name of the query argument to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitqueryargument.html#cfn-wafv2-webacl-ratelimitqueryargument-name
         */
        readonly name: string;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitqueryargument.html#cfn-wafv2-webacl-ratelimitqueryargument-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnWebACL.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * Specifies a header as an aggregate key for a rate-based rule.
     *
     * Each distinct value in the header contributes to the aggregation instance. If you use a single header as your custom key, then each value fully defines an aggregation instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitheader.html
     */
    interface RateLimitHeaderProperty {
        /**
         * The name of the header to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitheader.html#cfn-wafv2-webacl-ratelimitheader-name
         */
        readonly name: string;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitheader.html#cfn-wafv2-webacl-ratelimitheader-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnWebACL.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * Specifies the request's query string as an aggregate key for a rate-based rule.
     *
     * Each distinct string contributes to the aggregation instance. If you use just the query string as your custom key, then each string fully defines an aggregation instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitquerystring.html
     */
    interface RateLimitQueryStringProperty {
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitquerystring.html#cfn-wafv2-webacl-ratelimitquerystring-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnWebACL.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * Specifies the request's URI path as an aggregate key for a rate-based rule.
     *
     * Each distinct URI path contributes to the aggregation instance. If you use just the URI path as your custom key, then each URI path fully defines an aggregation instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimituripath.html
     */
    interface RateLimitUriPathProperty {
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * Text transformations are used in rule match statements, to transform the `FieldToMatch` request component before inspecting it, and they're used in rate-based rule statements, to transform request components before using them as custom aggregation keys. If you specify one or more transformations to apply, AWS WAF performs all transformations on the specified content, starting from the lowest priority setting, and then uses the transformed component contents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimituripath.html#cfn-wafv2-webacl-ratelimituripath-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnWebACL.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * Specifies a label namespace to use as an aggregate key for a rate-based rule.
     *
     * Each distinct fully qualified label name that has the specified label namespace contributes to the aggregation instance. If you use just one label namespace as your custom key, then each label name fully defines an aggregation instance.
     *
     * This uses only labels that have been added to the request by rules that are evaluated before this rate-based rule in the web ACL.
     *
     * For information about label namespaces and names, see [Label syntax and naming requirements](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-label-requirements.html) in the *AWS WAF Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitlabelnamespace.html
     */
    interface RateLimitLabelNamespaceProperty {
        /**
         * The namespace to use for aggregation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitlabelnamespace.html#cfn-wafv2-webacl-ratelimitlabelnamespace-namespace
         */
        readonly namespace: string;
    }
    /**
     * Specifies the request's JA3 fingerprint as an aggregate key for a rate-based rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitja3fingerprint.html
     */
    interface RateLimitJA3FingerprintProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitja3fingerprint.html#cfn-wafv2-webacl-ratelimitja3fingerprint-fallbackbehavior
         */
        readonly fallbackBehavior: string;
    }
    /**
     * Specifies the request's JA4 fingerprint as an aggregate key for a rate-based rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitja4fingerprint.html
     */
    interface RateLimitJA4FingerprintProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ratelimitja4fingerprint.html#cfn-wafv2-webacl-ratelimitja4fingerprint-fallbackbehavior
         */
        readonly fallbackBehavior: string;
    }
    /**
     * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin.
     *
     * Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
     *
     * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
     *
     * This configuration is used for `GeoMatchStatement` and `RateBasedStatement` . For `IPSetReferenceStatement` , use `IPSetForwardedIPConfig` instead.
     *
     * AWS WAF only evaluates the first IP address found in the specified HTTP header.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-forwardedipconfiguration.html
     */
    interface ForwardedIPConfigurationProperty {
        /**
         * The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.
         *
         * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
         *
         * You can specify the following fallback behaviors:
         *
         * - `MATCH` - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.
         * - `NO_MATCH` - Treat the web request as not matching the rule statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-forwardedipconfiguration.html#cfn-wafv2-webacl-forwardedipconfiguration-fallbackbehavior
         */
        readonly fallbackBehavior: string;
        /**
         * The name of the HTTP header to use for the IP address.
         *
         * For example, to use the X-Forwarded-For (XFF) header, set this to `X-Forwarded-For` .
         *
         * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-forwardedipconfiguration.html#cfn-wafv2-webacl-forwardedipconfiguration-headername
         */
        readonly headerName: string;
    }
    /**
     * A rule statement that labels web requests by country and region and that matches against web requests based on country code.
     *
     * A geo match rule labels every request that it inspects regardless of whether it finds a match.
     *
     * - To manage requests only by country, you can use this statement by itself and specify the countries that you want to match against in the `CountryCodes` array.
     * - Otherwise, configure your geo match rule with Count action so that it only labels requests. Then, add one or more label match rules to run after the geo match rule and configure them to match against the geographic labels and handle the requests as needed.
     *
     * AWS WAF labels requests using the alpha-2 country and region codes from the International Organization for Standardization (ISO) 3166 standard. AWS WAF determines the codes using either the IP address in the web request origin or, if you specify it, the address in the geo match `ForwardedIPConfig` .
     *
     * If you use the web request origin, the label formats are `awswaf:clientip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:clientip:geo:country:<ISO country code>` .
     *
     * If you use a forwarded IP address, the label formats are `awswaf:forwardedip:geo:region:<ISO country code>-<ISO region code>` and `awswaf:forwardedip:geo:country:<ISO country code>` .
     *
     * For additional details, see [Geographic match rule statement](https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-geo-match.html) in the [AWS WAF Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-geomatchstatement.html
     */
    interface GeoMatchStatementProperty {
        /**
         * An array of two-character country codes that you want to match against, for example, `[ "US", "CN" ]` , from the alpha-2 country ISO codes of the ISO 3166 international standard.
         *
         * When you use a geo match statement just for the region and country labels that it adds to requests, you still have to supply a country code for the rule to evaluate. In this case, you configure the rule to only count matching requests, but it will still generate logging and count metrics for any matches. You can reduce the logging and metrics that the rule produces by specifying a country that's unlikely to be a source of traffic to your site.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-geomatchstatement.html#cfn-wafv2-webacl-geomatchstatement-countrycodes
         */
        readonly countryCodes?: Array<string>;
        /**
         * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin.
         *
         * Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
         *
         * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-geomatchstatement.html#cfn-wafv2-webacl-geomatchstatement-forwardedipconfig
         */
        readonly forwardedIpConfig?: CfnWebACL.ForwardedIPConfigurationProperty | cdk.IResolvable;
    }
    /**
     * A rule statement used to run the rules that are defined in a `RuleGroup` .
     *
     * To use this, create a rule group with your rules, then provide the ARN of the rule group in this statement.
     *
     * You cannot nest a `RuleGroupReferenceStatement` , for example for use inside a `NotStatement` or `OrStatement` . You cannot use a rule group reference statement inside another rule group. You can only reference a rule group as a top-level statement within a rule that you define in a web ACL.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rulegroupreferencestatement.html
     */
    interface RuleGroupReferenceStatementProperty {
        /**
         * The Amazon Resource Name (ARN) of the entity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rulegroupreferencestatement.html#cfn-wafv2-webacl-rulegroupreferencestatement-arn
         */
        readonly arn: string;
        /**
         * Rules in the referenced rule group whose actions are set to `Count` .
         *
         * > Instead of this option, use `RuleActionOverrides` . It accepts any valid action setting, including `Count` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rulegroupreferencestatement.html#cfn-wafv2-webacl-rulegroupreferencestatement-excludedrules
         */
        readonly excludedRules?: Array<CfnWebACL.ExcludedRuleProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Action settings to use in the place of the rule actions that are configured inside the rule group.
         *
         * You specify one override for each rule whose action you want to change.
         *
         * > Take care to verify the rule names in your overrides. If you provide a rule name that doesn't match the name of any rule in the rule group, AWS WAF doesn't return an error and doesn't apply the override setting.
         *
         * You can use overrides for testing, for example you can override all of rule actions to `Count` and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-rulegroupreferencestatement.html#cfn-wafv2-webacl-rulegroupreferencestatement-ruleactionoverrides
         */
        readonly ruleActionOverrides?: Array<cdk.IResolvable | CfnWebACL.RuleActionOverrideProperty> | cdk.IResolvable;
    }
    /**
     * Action setting to use in the place of a rule action that is configured inside the rule group.
     *
     * You specify one override for each rule whose action you want to change.
     *
     * You can use overrides for testing, for example you can override all of rule actions to `Count` and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ruleactionoverride.html
     */
    interface RuleActionOverrideProperty {
        /**
         * The override action to use, in place of the configured action of the rule in the rule group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ruleactionoverride.html#cfn-wafv2-webacl-ruleactionoverride-actiontouse
         */
        readonly actionToUse: cdk.IResolvable | CfnWebACL.RuleActionProperty;
        /**
         * The name of the rule to override.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ruleactionoverride.html#cfn-wafv2-webacl-ruleactionoverride-name
         */
        readonly name: string;
    }
    /**
     * Specifies a single rule in a rule group whose action you want to override to `Count` .
     *
     * > Instead of this option, use `RuleActionOverrides` . It accepts any valid action setting, including `Count` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-excludedrule.html
     */
    interface ExcludedRuleProperty {
        /**
         * The name of the rule whose action you want to override to `Count` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-excludedrule.html#cfn-wafv2-webacl-excludedrule-name
         */
        readonly name: string;
    }
    /**
     * A rule statement to match against labels that have been added to the web request by rules that have already run in the web ACL.
     *
     * The label match statement provides the label or namespace string to search for. The label string can represent a part or all of the fully qualified label name that had been added to the web request. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. If you do not provide the fully qualified name in your label match string, AWS WAF performs the search for labels that were added in the same context as the label match statement.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-labelmatchstatement.html
     */
    interface LabelMatchStatementProperty {
        /**
         * The string to match against. The setting you provide for this depends on the match statement's `Scope` setting:.
         *
         * - If the `Scope` indicates `LABEL` , then this specification must include the name and can include any number of preceding namespace specifications and prefix up to providing the fully qualified label name.
         * - If the `Scope` indicates `NAMESPACE` , then this specification can include any number of contiguous namespace strings, and can include the entire label namespace prefix from the rule group or web ACL where the label originates.
         *
         * Labels are case sensitive and components of a label must be separated by colon, for example `NS1:NS2:name` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-labelmatchstatement.html#cfn-wafv2-webacl-labelmatchstatement-key
         */
        readonly key: string;
        /**
         * Specify whether you want to match using the label name or just the namespace.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-labelmatchstatement.html#cfn-wafv2-webacl-labelmatchstatement-scope
         */
        readonly scope: string;
    }
    /**
     * A rule statement used to search web request components for a match against a single regular expression.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-regexmatchstatement.html
     */
    interface RegexMatchStatementProperty {
        /**
         * The part of the web request that you want AWS WAF to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-regexmatchstatement.html#cfn-wafv2-webacl-regexmatchstatement-fieldtomatch
         */
        readonly fieldToMatch: CfnWebACL.FieldToMatchProperty | cdk.IResolvable;
        /**
         * The string representing the regular expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-regexmatchstatement.html#cfn-wafv2-webacl-regexmatchstatement-regexstring
         */
        readonly regexString: string;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch` , starting from the lowest priority setting, before inspecting the content for a match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-regexmatchstatement.html#cfn-wafv2-webacl-regexmatchstatement-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnWebACL.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * A rule statement that inspects for malicious SQL code.
     *
     * Attackers insert malicious SQL code into web requests to do things like modify your database or extract data from it.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sqlimatchstatement.html
     */
    interface SqliMatchStatementProperty {
        /**
         * The part of the web request that you want AWS WAF to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sqlimatchstatement.html#cfn-wafv2-webacl-sqlimatchstatement-fieldtomatch
         */
        readonly fieldToMatch: CfnWebACL.FieldToMatchProperty | cdk.IResolvable;
        /**
         * The sensitivity that you want AWS WAF to use to inspect for SQL injection attacks.
         *
         * `HIGH` detects more attacks, but might generate more false positives, especially if your web requests frequently contain unusual strings. For information about identifying and mitigating false positives, see [Testing and tuning](https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-testing.html) in the *AWS WAF Developer Guide* .
         *
         * `LOW` is generally a better choice for resources that already have other protections against SQL injection attacks or that have a low tolerance for false positives.
         *
         * Default: `LOW`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sqlimatchstatement.html#cfn-wafv2-webacl-sqlimatchstatement-sensitivitylevel
         */
        readonly sensitivityLevel?: string;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch` , starting from the lowest priority setting, before inspecting the content for a match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-sqlimatchstatement.html#cfn-wafv2-webacl-sqlimatchstatement-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnWebACL.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * A rule statement used to search web request components for matches with regular expressions.
     *
     * To use this, create a `RegexPatternSet` that specifies the expressions that you want to detect, then use that set in this statement. A web request matches the pattern set rule statement if the request component matches any of the patterns in the set.
     *
     * Each regex pattern set rule statement references a regex pattern set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-regexpatternsetreferencestatement.html
     */
    interface RegexPatternSetReferenceStatementProperty {
        /**
         * The Amazon Resource Name (ARN) of the `RegexPatternSet` that this statement references.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-regexpatternsetreferencestatement.html#cfn-wafv2-webacl-regexpatternsetreferencestatement-arn
         */
        readonly arn: string;
        /**
         * The part of the web request that you want AWS WAF to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-regexpatternsetreferencestatement.html#cfn-wafv2-webacl-regexpatternsetreferencestatement-fieldtomatch
         */
        readonly fieldToMatch: CfnWebACL.FieldToMatchProperty | cdk.IResolvable;
        /**
         * Text transformations eliminate some of the unusual formatting that attackers use in web requests in an effort to bypass detection.
         *
         * If you specify one or more transformations in a rule statement, AWS WAF performs all transformations on the content of the request component identified by `FieldToMatch` , starting from the lowest priority setting, before inspecting the content for a match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-regexpatternsetreferencestatement.html#cfn-wafv2-webacl-regexpatternsetreferencestatement-texttransformations
         */
        readonly textTransformations: Array<cdk.IResolvable | CfnWebACL.TextTransformationProperty> | cdk.IResolvable;
    }
    /**
     * A logical rule statement used to combine other rule statements with OR logic.
     *
     * You provide more than one `Statement` within the `OrStatement` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-orstatement.html
     */
    interface OrStatementProperty {
        /**
         * The statements to combine with OR logic.
         *
         * You can use any statements that can be nested.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-orstatement.html#cfn-wafv2-webacl-orstatement-statements
         */
        readonly statements: Array<cdk.IResolvable | CfnWebACL.StatementProperty> | cdk.IResolvable;
    }
    /**
     * A rule statement used to run the rules that are defined in a managed rule group.
     *
     * To use this, provide the vendor name and the name of the rule group in this statement. You can retrieve the required names through the API call `ListAvailableManagedRuleGroups` .
     *
     * You cannot nest a `ManagedRuleGroupStatement` , for example for use inside a `NotStatement` or `OrStatement` . You cannot use a managed rule group statement inside another rule group. You can only use a managed rule group statement as a top-level statement in a rule that you define in a web ACL.
     *
     * > You are charged additional fees when you use the AWS WAF Bot Control managed rule group `AWSManagedRulesBotControlRuleSet` , the AWS WAF Fraud Control account takeover prevention (ATP) managed rule group `AWSManagedRulesATPRuleSet` , or the AWS WAF Fraud Control account creation fraud prevention (ACFP) managed rule group `AWSManagedRulesACFPRuleSet` . For more information, see [AWS WAF Pricing](https://docs.aws.amazon.com/waf/pricing/) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupstatement.html
     */
    interface ManagedRuleGroupStatementProperty {
        /**
         * Rules in the referenced rule group whose actions are set to `Count` .
         *
         * > Instead of this option, use `RuleActionOverrides` . It accepts any valid action setting, including `Count` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupstatement.html#cfn-wafv2-webacl-managedrulegroupstatement-excludedrules
         */
        readonly excludedRules?: Array<CfnWebACL.ExcludedRuleProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Additional information that's used by a managed rule group. Many managed rule groups don't require this.
         *
         * The rule groups used for intelligent threat mitigation require additional configuration:
         *
         * - Use the `AWSManagedRulesACFPRuleSet` configuration object to configure the account creation fraud prevention managed rule group. The configuration includes the registration and sign-up pages of your application and the locations in the account creation request payload of data, such as the user email and phone number fields.
         * - Use the `AWSManagedRulesATPRuleSet` configuration object to configure the account takeover prevention managed rule group. The configuration includes the sign-in page of your application and the locations in the login request payload of data such as the username and password.
         * - Use the `AWSManagedRulesBotControlRuleSet` configuration object to configure the protection level that you want the Bot Control rule group to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupstatement.html#cfn-wafv2-webacl-managedrulegroupstatement-managedrulegroupconfigs
         */
        readonly managedRuleGroupConfigs?: Array<cdk.IResolvable | CfnWebACL.ManagedRuleGroupConfigProperty> | cdk.IResolvable;
        /**
         * The name of the managed rule group.
         *
         * You use this, along with the vendor name, to identify the rule group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupstatement.html#cfn-wafv2-webacl-managedrulegroupstatement-name
         */
        readonly name: string;
        /**
         * Action settings to use in the place of the rule actions that are configured inside the rule group.
         *
         * You specify one override for each rule whose action you want to change.
         *
         * > Take care to verify the rule names in your overrides. If you provide a rule name that doesn't match the name of any rule in the rule group, AWS WAF doesn't return an error and doesn't apply the override setting.
         *
         * You can use overrides for testing, for example you can override all of rule actions to `Count` and then monitor the resulting count metrics to understand how the rule group would handle your web traffic. You can also permanently override some or all actions, to modify how the rule group manages your web traffic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupstatement.html#cfn-wafv2-webacl-managedrulegroupstatement-ruleactionoverrides
         */
        readonly ruleActionOverrides?: Array<cdk.IResolvable | CfnWebACL.RuleActionOverrideProperty> | cdk.IResolvable;
        /**
         * An optional nested statement that narrows the scope of the web requests that are evaluated by the managed rule group.
         *
         * Requests are only evaluated by the rule group if they match the scope-down statement. You can use any nestable `Statement` in the scope-down statement, and you can nest statements at any level, the same as you can for a rule statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupstatement.html#cfn-wafv2-webacl-managedrulegroupstatement-scopedownstatement
         */
        readonly scopeDownStatement?: cdk.IResolvable | CfnWebACL.StatementProperty;
        /**
         * The name of the managed rule group vendor.
         *
         * You use this, along with the rule group name, to identify a rule group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupstatement.html#cfn-wafv2-webacl-managedrulegroupstatement-vendorname
         */
        readonly vendorName: string;
        /**
         * The version of the managed rule group to use.
         *
         * If you specify this, the version setting is fixed until you change it. If you don't specify this, AWS WAF uses the vendor's default version, and then keeps the version at the vendor's default when the vendor updates the managed rule group settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupstatement.html#cfn-wafv2-webacl-managedrulegroupstatement-version
         */
        readonly version?: string;
    }
    /**
     * Additional information that's used by a managed rule group. Many managed rule groups don't require this.
     *
     * The rule groups used for intelligent threat mitigation require additional configuration:
     *
     * - Use the `AWSManagedRulesACFPRuleSet` configuration object to configure the account creation fraud prevention managed rule group. The configuration includes the registration and sign-up pages of your application and the locations in the account creation request payload of data, such as the user email and phone number fields.
     * - Use the `AWSManagedRulesATPRuleSet` configuration object to configure the account takeover prevention managed rule group. The configuration includes the sign-in page of your application and the locations in the login request payload of data such as the username and password.
     * - Use the `AWSManagedRulesBotControlRuleSet` configuration object to configure the protection level that you want the Bot Control rule group to use.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupconfig.html
     */
    interface ManagedRuleGroupConfigProperty {
        /**
         * Additional configuration for using the account creation fraud prevention (ACFP) managed rule group, `AWSManagedRulesACFPRuleSet` .
         *
         * Use this to provide account creation request information to the rule group. For web ACLs that protect CloudFront distributions, use this to also provide the information about how your distribution responds to account creation requests.
         *
         * For information about using the ACFP managed rule group, see [AWS WAF Fraud Control account creation fraud prevention (ACFP) rule group](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-acfp.html) and [AWS WAF Fraud Control account creation fraud prevention (ACFP)](https://docs.aws.amazon.com/waf/latest/developerguide/waf-acfp.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupconfig.html#cfn-wafv2-webacl-managedrulegroupconfig-awsmanagedrulesacfpruleset
         */
        readonly awsManagedRulesAcfpRuleSet?: CfnWebACL.AWSManagedRulesACFPRuleSetProperty | cdk.IResolvable;
        /**
         * Additional configuration for using the account takeover prevention (ATP) managed rule group, `AWSManagedRulesATPRuleSet` .
         *
         * Use this to provide login request information to the rule group. For web ACLs that protect CloudFront distributions, use this to also provide the information about how your distribution responds to login requests.
         *
         * This configuration replaces the individual configuration fields in `ManagedRuleGroupConfig` and provides additional feature configuration.
         *
         * For information about using the ATP managed rule group, see [AWS WAF Fraud Control account takeover prevention (ATP) rule group](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-atp.html) and [AWS WAF Fraud Control account takeover prevention (ATP)](https://docs.aws.amazon.com/waf/latest/developerguide/waf-atp.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupconfig.html#cfn-wafv2-webacl-managedrulegroupconfig-awsmanagedrulesatpruleset
         */
        readonly awsManagedRulesAtpRuleSet?: CfnWebACL.AWSManagedRulesATPRuleSetProperty | cdk.IResolvable;
        /**
         * Additional configuration for using the Bot Control managed rule group.
         *
         * Use this to specify the inspection level that you want to use. For information about using the Bot Control managed rule group, see [AWS WAF Bot Control rule group](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html) and [AWS WAF Bot Control](https://docs.aws.amazon.com/waf/latest/developerguide/waf-bot-control.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupconfig.html#cfn-wafv2-webacl-managedrulegroupconfig-awsmanagedrulesbotcontrolruleset
         */
        readonly awsManagedRulesBotControlRuleSet?: CfnWebACL.AWSManagedRulesBotControlRuleSetProperty | cdk.IResolvable;
        /**
         * > Instead of this setting, provide your configuration under `AWSManagedRulesATPRuleSet` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupconfig.html#cfn-wafv2-webacl-managedrulegroupconfig-loginpath
         */
        readonly loginPath?: string;
        /**
         * > Instead of this setting, provide your configuration under the request inspection configuration for `AWSManagedRulesATPRuleSet` or `AWSManagedRulesACFPRuleSet` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupconfig.html#cfn-wafv2-webacl-managedrulegroupconfig-passwordfield
         */
        readonly passwordField?: CfnWebACL.FieldIdentifierProperty | cdk.IResolvable;
        /**
         * > Instead of this setting, provide your configuration under the request inspection configuration for `AWSManagedRulesATPRuleSet` or `AWSManagedRulesACFPRuleSet` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupconfig.html#cfn-wafv2-webacl-managedrulegroupconfig-payloadtype
         */
        readonly payloadType?: string;
        /**
         * > Instead of this setting, provide your configuration under the request inspection configuration for `AWSManagedRulesATPRuleSet` or `AWSManagedRulesACFPRuleSet` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-managedrulegroupconfig.html#cfn-wafv2-webacl-managedrulegroupconfig-usernamefield
         */
        readonly usernameField?: CfnWebACL.FieldIdentifierProperty | cdk.IResolvable;
    }
    /**
     * The identifier of a field in the web request payload that contains customer data.
     *
     * This data type is used to specify fields in the `RequestInspection` and `RequestInspectionACFP` configurations, which are used in the managed rule group configurations `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet` , respectively.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldidentifier.html
     */
    interface FieldIdentifierProperty {
        /**
         * The name of the field.
         *
         * When the `PayloadType` in the request inspection is `JSON` , this identifier must be in JSON pointer syntax. For example `/form/username` . For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc6901) .
         *
         * When the `PayloadType` is `FORM_ENCODED` , use the HTML form names. For example, `username` .
         *
         * For more information, see the descriptions for each field type in the request inspection properties.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-fieldidentifier.html#cfn-wafv2-webacl-fieldidentifier-identifier
         */
        readonly identifier: string;
    }
    /**
     * Details for your use of the account takeover prevention managed rule group, `AWSManagedRulesATPRuleSet` .
     *
     * This configuration is used in `ManagedRuleGroupConfig` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesatpruleset.html
     */
    interface AWSManagedRulesATPRuleSetProperty {
        /**
         * Allow the use of regular expressions in the login page path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesatpruleset.html#cfn-wafv2-webacl-awsmanagedrulesatpruleset-enableregexinpath
         */
        readonly enableRegexInPath?: boolean | cdk.IResolvable;
        /**
         * The path of the login endpoint for your application.
         *
         * For example, for the URL `https://example.com/web/login` , you would provide the path `/web/login` . Login paths that start with the path that you provide are considered a match. For example `/web/login` matches the login paths `/web/login` , `/web/login/` , `/web/loginPage` , and `/web/login/thisPage` , but doesn't match the login path `/home/web/login` or `/website/login` .
         *
         * The rule group inspects only HTTP `POST` requests to your specified login endpoint.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesatpruleset.html#cfn-wafv2-webacl-awsmanagedrulesatpruleset-loginpath
         */
        readonly loginPath: string;
        /**
         * The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesatpruleset.html#cfn-wafv2-webacl-awsmanagedrulesatpruleset-requestinspection
         */
        readonly requestInspection?: cdk.IResolvable | CfnWebACL.RequestInspectionProperty;
        /**
         * The criteria for inspecting responses to login requests, used by the ATP rule group to track login failure rates.
         *
         * > Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
         *
         * The ATP rule group evaluates the responses that your protected resources send back to client login attempts, keeping count of successful and failed attempts for each IP address and client session. Using this information, the rule group labels and mitigates requests from client sessions and IP addresses that have had too many failed login attempts in a short amount of time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesatpruleset.html#cfn-wafv2-webacl-awsmanagedrulesatpruleset-responseinspection
         */
        readonly responseInspection?: cdk.IResolvable | CfnWebACL.ResponseInspectionProperty;
    }
    /**
     * The criteria for inspecting responses to login requests and account creation requests, used by the ATP and ACFP rule groups to track login and account creation success and failure rates.
     *
     * > Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
     *
     * The rule groups evaluates the responses that your protected resources send back to client login and account creation attempts, keeping count of successful and failed attempts from each IP address and client session. Using this information, the rule group labels and mitigates requests from client sessions and IP addresses with too much suspicious activity in a short amount of time.
     *
     * This is part of the `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet` configurations in `ManagedRuleGroupConfig` .
     *
     * Enable response inspection by configuring exactly one component of the response to inspect, for example, `Header` or `StatusCode` . You can't configure more than one component for inspection. If you don't configure any of the response inspection options, response inspection is disabled.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspection.html
     */
    interface ResponseInspectionProperty {
        /**
         * Configures inspection of the response body for success and failure indicators.
         *
         * AWS WAF can inspect the first 65,536 bytes (64 KB) of the response body.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspection.html#cfn-wafv2-webacl-responseinspection-bodycontains
         */
        readonly bodyContains?: cdk.IResolvable | CfnWebACL.ResponseInspectionBodyContainsProperty;
        /**
         * Configures inspection of the response header for success and failure indicators.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspection.html#cfn-wafv2-webacl-responseinspection-header
         */
        readonly header?: cdk.IResolvable | CfnWebACL.ResponseInspectionHeaderProperty;
        /**
         * Configures inspection of the response JSON for success and failure indicators.
         *
         * AWS WAF can inspect the first 65,536 bytes (64 KB) of the response JSON.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspection.html#cfn-wafv2-webacl-responseinspection-json
         */
        readonly json?: cdk.IResolvable | CfnWebACL.ResponseInspectionJsonProperty;
        /**
         * Configures inspection of the response status code for success and failure indicators.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspection.html#cfn-wafv2-webacl-responseinspection-statuscode
         */
        readonly statusCode?: cdk.IResolvable | CfnWebACL.ResponseInspectionStatusCodeProperty;
    }
    /**
     * Configures inspection of the response header. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet` .
     *
     * > Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionheader.html
     */
    interface ResponseInspectionHeaderProperty {
        /**
         * Values in the response header with the specified name that indicate a failed login or account creation attempt.
         *
         * To be counted as a failure, the value must be an exact match, including case. Each value must be unique among the success and failure values.
         *
         * JSON examples: `"FailureValues": [ "LoginFailed", "Failed login" ]` and `"FailureValues": [ "AccountCreationFailed" ]`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionheader.html#cfn-wafv2-webacl-responseinspectionheader-failurevalues
         */
        readonly failureValues: Array<string>;
        /**
         * The name of the header to match against. The name must be an exact match, including case.
         *
         * JSON example: `"Name": [ "RequestResult" ]`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionheader.html#cfn-wafv2-webacl-responseinspectionheader-name
         */
        readonly name: string;
        /**
         * Values in the response header with the specified name that indicate a successful login or account creation attempt.
         *
         * To be counted as a success, the value must be an exact match, including case. Each value must be unique among the success and failure values.
         *
         * JSON examples: `"SuccessValues": [ "LoginPassed", "Successful login" ]` and `"SuccessValues": [ "AccountCreated", "Successful account creation" ]`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionheader.html#cfn-wafv2-webacl-responseinspectionheader-successvalues
         */
        readonly successValues: Array<string>;
    }
    /**
     * Configures inspection of the response body.
     *
     * AWS WAF can inspect the first 65,536 bytes (64 KB) of the response body. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet` .
     *
     * > Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionbodycontains.html
     */
    interface ResponseInspectionBodyContainsProperty {
        /**
         * Strings in the body of the response that indicate a failed login or account creation attempt.
         *
         * To be counted as a failure, the string can be anywhere in the body and must be an exact match, including case. Each string must be unique among the success and failure strings.
         *
         * JSON example: `"FailureStrings": [ "Request failed" ]`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionbodycontains.html#cfn-wafv2-webacl-responseinspectionbodycontains-failurestrings
         */
        readonly failureStrings: Array<string>;
        /**
         * Strings in the body of the response that indicate a successful login or account creation attempt.
         *
         * To be counted as a success, the string can be anywhere in the body and must be an exact match, including case. Each string must be unique among the success and failure strings.
         *
         * JSON examples: `"SuccessStrings": [ "Login successful" ]` and `"SuccessStrings": [ "Account creation successful", "Welcome to our site!" ]`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionbodycontains.html#cfn-wafv2-webacl-responseinspectionbodycontains-successstrings
         */
        readonly successStrings: Array<string>;
    }
    /**
     * Configures inspection of the response JSON.
     *
     * AWS WAF can inspect the first 65,536 bytes (64 KB) of the response JSON. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet` .
     *
     * > Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionjson.html
     */
    interface ResponseInspectionJsonProperty {
        /**
         * Values for the specified identifier in the response JSON that indicate a failed login or account creation attempt.
         *
         * To be counted as a failure, the value must be an exact match, including case. Each value must be unique among the success and failure values.
         *
         * JSON example: `"FailureValues": [ "False", "Failed" ]`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionjson.html#cfn-wafv2-webacl-responseinspectionjson-failurevalues
         */
        readonly failureValues: Array<string>;
        /**
         * The identifier for the value to match against in the JSON.
         *
         * The identifier must be an exact match, including case.
         *
         * JSON examples: `"Identifier": [ "/login/success" ]` and `"Identifier": [ "/sign-up/success" ]`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionjson.html#cfn-wafv2-webacl-responseinspectionjson-identifier
         */
        readonly identifier: string;
        /**
         * Values for the specified identifier in the response JSON that indicate a successful login or account creation attempt.
         *
         * To be counted as a success, the value must be an exact match, including case. Each value must be unique among the success and failure values.
         *
         * JSON example: `"SuccessValues": [ "True", "Succeeded" ]`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionjson.html#cfn-wafv2-webacl-responseinspectionjson-successvalues
         */
        readonly successValues: Array<string>;
    }
    /**
     * Configures inspection of the response status code. This is part of the `ResponseInspection` configuration for `AWSManagedRulesATPRuleSet` and `AWSManagedRulesACFPRuleSet` .
     *
     * > Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionstatuscode.html
     */
    interface ResponseInspectionStatusCodeProperty {
        /**
         * Status codes in the response that indicate a failed login or account creation attempt.
         *
         * To be counted as a failure, the response status code must match one of these. Each code must be unique among the success and failure status codes.
         *
         * JSON example: `"FailureCodes": [ 400, 404 ]`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionstatuscode.html#cfn-wafv2-webacl-responseinspectionstatuscode-failurecodes
         */
        readonly failureCodes: Array<number> | cdk.IResolvable;
        /**
         * Status codes in the response that indicate a successful login or account creation attempt.
         *
         * To be counted as a success, the response status code must match one of these. Each code must be unique among the success and failure status codes.
         *
         * JSON example: `"SuccessCodes": [ 200, 201 ]`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-responseinspectionstatuscode.html#cfn-wafv2-webacl-responseinspectionstatuscode-successcodes
         */
        readonly successCodes: Array<number> | cdk.IResolvable;
    }
    /**
     * The criteria for inspecting login requests, used by the ATP rule group to validate credentials usage.
     *
     * This is part of the `AWSManagedRulesATPRuleSet` configuration in `ManagedRuleGroupConfig` .
     *
     * In these settings, you specify how your application accepts login attempts by providing the request payload type and the names of the fields within the request body where the username and password are provided.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestinspection.html
     */
    interface RequestInspectionProperty {
        /**
         * The name of the field in the request payload that contains your customer's password.
         *
         * How you specify this depends on the request inspection payload type.
         *
         * - For JSON payloads, specify the field name in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc6901) .
         *
         * For example, for the JSON payload `{ "form": { "password": "THE_PASSWORD" } }` , the password field specification is `/form/password` .
         * - For form encoded payload types, use the HTML form names.
         *
         * For example, for an HTML form with the input element named `password1` , the password field specification is `password1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestinspection.html#cfn-wafv2-webacl-requestinspection-passwordfield
         */
        readonly passwordField: CfnWebACL.FieldIdentifierProperty | cdk.IResolvable;
        /**
         * The payload type for your login endpoint, either JSON or form encoded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestinspection.html#cfn-wafv2-webacl-requestinspection-payloadtype
         */
        readonly payloadType: string;
        /**
         * The name of the field in the request payload that contains your customer's username.
         *
         * How you specify this depends on the request inspection payload type.
         *
         * - For JSON payloads, specify the field name in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc6901) .
         *
         * For example, for the JSON payload `{ "form": { "username": "THE_USERNAME" } }` , the username field specification is `/form/username` .
         * - For form encoded payload types, use the HTML form names.
         *
         * For example, for an HTML form with the input element named `username1` , the username field specification is `username1`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestinspection.html#cfn-wafv2-webacl-requestinspection-usernamefield
         */
        readonly usernameField: CfnWebACL.FieldIdentifierProperty | cdk.IResolvable;
    }
    /**
     * Details for your use of the Bot Control managed rule group, `AWSManagedRulesBotControlRuleSet` .
     *
     * This configuration is used in `ManagedRuleGroupConfig` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesbotcontrolruleset.html
     */
    interface AWSManagedRulesBotControlRuleSetProperty {
        /**
         * Applies only to the targeted inspection level.
         *
         * Determines whether to use machine learning (ML) to analyze your web traffic for bot-related activity. Machine learning is required for the Bot Control rules `TGT_ML_CoordinatedActivityLow` and `TGT_ML_CoordinatedActivityMedium` , which
         * inspect for anomalous behavior that might indicate distributed, coordinated bot activity.
         *
         * For more information about this choice, see the listing for these rules in the table at [Bot Control rules listing](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html#aws-managed-rule-groups-bot-rules) in the *AWS WAF Developer Guide* .
         *
         * Default: `TRUE`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesbotcontrolruleset.html#cfn-wafv2-webacl-awsmanagedrulesbotcontrolruleset-enablemachinelearning
         */
        readonly enableMachineLearning?: boolean | cdk.IResolvable;
        /**
         * The inspection level to use for the Bot Control rule group.
         *
         * The common level is the least expensive. The targeted level includes all common level rules and adds rules with more advanced inspection criteria. For details, see [AWS WAF Bot Control rule group](https://docs.aws.amazon.com/waf/latest/developerguide/aws-managed-rule-groups-bot.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesbotcontrolruleset.html#cfn-wafv2-webacl-awsmanagedrulesbotcontrolruleset-inspectionlevel
         */
        readonly inspectionLevel: string;
    }
    /**
     * Details for your use of the account creation fraud prevention managed rule group, `AWSManagedRulesACFPRuleSet` .
     *
     * This configuration is used in `ManagedRuleGroupConfig` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesacfpruleset.html
     */
    interface AWSManagedRulesACFPRuleSetProperty {
        /**
         * The path of the account creation endpoint for your application.
         *
         * This is the page on your website that accepts the completed registration form for a new user. This page must accept `POST` requests.
         *
         * For example, for the URL `https://example.com/web/newaccount` , you would provide the path `/web/newaccount` . Account creation page paths that start with the path that you provide are considered a match. For example `/web/newaccount` matches the account creation paths `/web/newaccount` , `/web/newaccount/` , `/web/newaccountPage` , and `/web/newaccount/thisPage` , but doesn't match the path `/home/web/newaccount` or `/website/newaccount` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesacfpruleset.html#cfn-wafv2-webacl-awsmanagedrulesacfpruleset-creationpath
         */
        readonly creationPath: string;
        /**
         * Allow the use of regular expressions in the registration page path and the account creation path.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesacfpruleset.html#cfn-wafv2-webacl-awsmanagedrulesacfpruleset-enableregexinpath
         */
        readonly enableRegexInPath?: boolean | cdk.IResolvable;
        /**
         * The path of the account registration endpoint for your application.
         *
         * This is the page on your website that presents the registration form to new users.
         *
         * > This page must accept `GET` text/html requests.
         *
         * For example, for the URL `https://example.com/web/registration` , you would provide the path `/web/registration` . Registration page paths that start with the path that you provide are considered a match. For example `/web/registration` matches the registration paths `/web/registration` , `/web/registration/` , `/web/registrationPage` , and `/web/registration/thisPage` , but doesn't match the path `/home/web/registration` or `/website/registration` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesacfpruleset.html#cfn-wafv2-webacl-awsmanagedrulesacfpruleset-registrationpagepath
         */
        readonly registrationPagePath: string;
        /**
         * The criteria for inspecting account creation requests, used by the ACFP rule group to validate and track account creation attempts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesacfpruleset.html#cfn-wafv2-webacl-awsmanagedrulesacfpruleset-requestinspection
         */
        readonly requestInspection: cdk.IResolvable | CfnWebACL.RequestInspectionACFPProperty;
        /**
         * The criteria for inspecting responses to account creation requests, used by the ACFP rule group to track account creation success rates.
         *
         * > Response inspection is available only in web ACLs that protect Amazon CloudFront distributions.
         *
         * The ACFP rule group evaluates the responses that your protected resources send back to client account creation attempts, keeping count of successful and failed attempts from each IP address and client session. Using this information, the rule group labels and mitigates requests from client sessions and IP addresses that have had too many successful account creation attempts in a short amount of time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-awsmanagedrulesacfpruleset.html#cfn-wafv2-webacl-awsmanagedrulesacfpruleset-responseinspection
         */
        readonly responseInspection?: cdk.IResolvable | CfnWebACL.ResponseInspectionProperty;
    }
    /**
     * The criteria for inspecting account creation requests, used by the ACFP rule group to validate and track account creation attempts.
     *
     * This is part of the `AWSManagedRulesACFPRuleSet` configuration in `ManagedRuleGroupConfig` .
     *
     * In these settings, you specify how your application accepts account creation attempts by providing the request payload type and the names of the fields within the request body where the username, password, email, and primary address and phone number fields are provided.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestinspectionacfp.html
     */
    interface RequestInspectionACFPProperty {
        /**
         * The names of the fields in the request payload that contain your customer's primary physical address.
         *
         * Order the address fields in the array exactly as they are ordered in the request payload.
         *
         * How you specify the address fields depends on the request inspection payload type.
         *
         * - For JSON payloads, specify the field identifiers in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc6901) .
         *
         * For example, for the JSON payload `{ "form": { "primaryaddressline1": "THE_ADDRESS1", "primaryaddressline2": "THE_ADDRESS2", "primaryaddressline3": "THE_ADDRESS3" } }` , the address field idenfiers are `/form/primaryaddressline1` , `/form/primaryaddressline2` , and `/form/primaryaddressline3` .
         * - For form encoded payload types, use the HTML form names.
         *
         * For example, for an HTML form with input elements named `primaryaddressline1` , `primaryaddressline2` , and `primaryaddressline3` , the address fields identifiers are `primaryaddressline1` , `primaryaddressline2` , and `primaryaddressline3` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestinspectionacfp.html#cfn-wafv2-webacl-requestinspectionacfp-addressfields
         */
        readonly addressFields?: Array<CfnWebACL.FieldIdentifierProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the field in the request payload that contains your customer's email.
         *
         * How you specify this depends on the request inspection payload type.
         *
         * - For JSON payloads, specify the field name in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc6901) .
         *
         * For example, for the JSON payload `{ "form": { "email": "THE_EMAIL" } }` , the email field specification is `/form/email` .
         * - For form encoded payload types, use the HTML form names.
         *
         * For example, for an HTML form with the input element named `email1` , the email field specification is `email1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestinspectionacfp.html#cfn-wafv2-webacl-requestinspectionacfp-emailfield
         */
        readonly emailField?: CfnWebACL.FieldIdentifierProperty | cdk.IResolvable;
        /**
         * The name of the field in the request payload that contains your customer's password.
         *
         * How you specify this depends on the request inspection payload type.
         *
         * - For JSON payloads, specify the field name in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc6901) .
         *
         * For example, for the JSON payload `{ "form": { "password": "THE_PASSWORD" } }` , the password field specification is `/form/password` .
         * - For form encoded payload types, use the HTML form names.
         *
         * For example, for an HTML form with the input element named `password1` , the password field specification is `password1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestinspectionacfp.html#cfn-wafv2-webacl-requestinspectionacfp-passwordfield
         */
        readonly passwordField?: CfnWebACL.FieldIdentifierProperty | cdk.IResolvable;
        /**
         * The payload type for your account creation endpoint, either JSON or form encoded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestinspectionacfp.html#cfn-wafv2-webacl-requestinspectionacfp-payloadtype
         */
        readonly payloadType: string;
        /**
         * The names of the fields in the request payload that contain your customer's primary phone number.
         *
         * Order the phone number fields in the array exactly as they are ordered in the request payload.
         *
         * How you specify the phone number fields depends on the request inspection payload type.
         *
         * - For JSON payloads, specify the field identifiers in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc6901) .
         *
         * For example, for the JSON payload `{ "form": { "primaryphoneline1": "THE_PHONE1", "primaryphoneline2": "THE_PHONE2", "primaryphoneline3": "THE_PHONE3" } }` , the phone number field identifiers are `/form/primaryphoneline1` , `/form/primaryphoneline2` , and `/form/primaryphoneline3` .
         * - For form encoded payload types, use the HTML form names.
         *
         * For example, for an HTML form with input elements named `primaryphoneline1` , `primaryphoneline2` , and `primaryphoneline3` , the phone number field identifiers are `primaryphoneline1` , `primaryphoneline2` , and `primaryphoneline3` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestinspectionacfp.html#cfn-wafv2-webacl-requestinspectionacfp-phonenumberfields
         */
        readonly phoneNumberFields?: Array<CfnWebACL.FieldIdentifierProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the field in the request payload that contains your customer's username.
         *
         * How you specify this depends on the request inspection payload type.
         *
         * - For JSON payloads, specify the field name in JSON pointer syntax. For information about the JSON Pointer syntax, see the Internet Engineering Task Force (IETF) documentation [JavaScript Object Notation (JSON) Pointer](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc6901) .
         *
         * For example, for the JSON payload `{ "form": { "username": "THE_USERNAME" } }` , the username field specification is `/form/username` .
         * - For form encoded payload types, use the HTML form names.
         *
         * For example, for an HTML form with the input element named `username1` , the username field specification is `username1`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-requestinspectionacfp.html#cfn-wafv2-webacl-requestinspectionacfp-usernamefield
         */
        readonly usernameField?: CfnWebACL.FieldIdentifierProperty | cdk.IResolvable;
    }
    /**
     * A rule statement used to detect web requests coming from particular IP addresses or address ranges.
     *
     * To use this, create an `IPSet` that specifies the addresses you want to detect, then use the ARN of that set in this statement.
     *
     * Each IP set rule statement references an IP set. You create and maintain the set independent of your rules. This allows you to use the single set in multiple rules. When you update the referenced set, AWS WAF automatically updates all rules that reference it.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ipsetreferencestatement.html
     */
    interface IPSetReferenceStatementProperty {
        /**
         * The Amazon Resource Name (ARN) of the `IPSet` that this statement references.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ipsetreferencestatement.html#cfn-wafv2-webacl-ipsetreferencestatement-arn
         */
        readonly arn: string;
        /**
         * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin.
         *
         * Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
         *
         * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ipsetreferencestatement.html#cfn-wafv2-webacl-ipsetreferencestatement-ipsetforwardedipconfig
         */
        readonly ipSetForwardedIpConfig?: CfnWebACL.IPSetForwardedIPConfigurationProperty | cdk.IResolvable;
    }
    /**
     * The configuration for inspecting IP addresses in an HTTP header that you specify, instead of using the IP address that's reported by the web request origin.
     *
     * Commonly, this is the X-Forwarded-For (XFF) header, but you can specify any header name.
     *
     * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
     *
     * This configuration is used only for `IPSetReferenceStatement` . For `GeoMatchStatement` and `RateBasedStatement` , use `ForwardedIPConfig` instead.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ipsetforwardedipconfiguration.html
     */
    interface IPSetForwardedIPConfigurationProperty {
        /**
         * The match status to assign to the web request if the request doesn't have a valid IP address in the specified position.
         *
         * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
         *
         * You can specify the following fallback behaviors:
         *
         * - `MATCH` - Treat the web request as matching the rule statement. AWS WAF applies the rule action to the request.
         * - `NO_MATCH` - Treat the web request as not matching the rule statement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ipsetforwardedipconfiguration.html#cfn-wafv2-webacl-ipsetforwardedipconfiguration-fallbackbehavior
         */
        readonly fallbackBehavior: string;
        /**
         * The name of the HTTP header to use for the IP address.
         *
         * For example, to use the X-Forwarded-For (XFF) header, set this to `X-Forwarded-For` .
         *
         * > If the specified header isn't present in the request, AWS WAF doesn't apply the rule to the web request at all.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ipsetforwardedipconfiguration.html#cfn-wafv2-webacl-ipsetforwardedipconfiguration-headername
         */
        readonly headerName: string;
        /**
         * The position in the header to search for the IP address.
         *
         * The header can contain IP addresses of the original client and also of proxies. For example, the header value could be `10.1.1.1, 127.0.0.0, 10.10.10.10` where the first IP address identifies the original client and the rest identify proxies that the request went through.
         *
         * The options for this setting are the following:
         *
         * - FIRST - Inspect the first IP address in the list of IP addresses in the header. This is usually the client's original IP.
         * - LAST - Inspect the last IP address in the list of IP addresses in the header.
         * - ANY - Inspect all IP addresses in the header for a match. If the header contains more than 10 IP addresses, AWS WAF inspects the last 10.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-ipsetforwardedipconfiguration.html#cfn-wafv2-webacl-ipsetforwardedipconfiguration-position
         */
        readonly position: string;
    }
    /**
     * The action to use in the place of the action that results from the rule group evaluation.
     *
     * Set the override action to none to leave the result of the rule group alone. Set it to count to override the result to count only.
     *
     * You can only use this for rule statements that reference a rule group, like `RuleGroupReferenceStatement` and `ManagedRuleGroupStatement` .
     *
     * > This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count matches, do not use this and instead use the rule action override option, with `Count` action, in your rule group reference statement settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-overrideaction.html
     */
    interface OverrideActionProperty {
        /**
         * Override the rule group evaluation result to count only.
         *
         * > This option is usually set to none. It does not affect how the rules in the rule group are evaluated. If you want the rules in the rule group to only count matches, do not use this and instead use the rule action override option, with `Count` action, in your rule group reference statement settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-overrideaction.html#cfn-wafv2-webacl-overrideaction-count
         */
        readonly count?: any | cdk.IResolvable;
        /**
         * Don't override the rule group evaluation result.
         *
         * This is the most common setting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-overrideaction.html#cfn-wafv2-webacl-overrideaction-none
         */
        readonly none?: any | cdk.IResolvable;
    }
    /**
     * A single label container.
     *
     * This is used as an element of a label array in `RuleLabels` inside a rule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-label.html
     */
    interface LabelProperty {
        /**
         * The label string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-label.html#cfn-wafv2-webacl-label-name
         */
        readonly name: string;
    }
    /**
     * Defines and enables Amazon CloudWatch metrics and web request sample collection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-visibilityconfig.html
     */
    interface VisibilityConfigProperty {
        /**
         * Indicates whether the associated resource sends metrics to Amazon CloudWatch.
         *
         * For the list of available metrics, see [AWS WAF Metrics](https://docs.aws.amazon.com/waf/latest/developerguide/monitoring-cloudwatch.html#waf-metrics) in the *AWS WAF Developer Guide* .
         *
         * For web ACLs, the metrics are for web requests that have the web ACL default action applied. AWS WAF applies the default action to web requests that pass the inspection of all rules in the web ACL without being either allowed or blocked. For more information,
         * see [The web ACL default action](https://docs.aws.amazon.com/waf/latest/developerguide/web-acl-default-action.html) in the *AWS WAF Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-visibilityconfig.html#cfn-wafv2-webacl-visibilityconfig-cloudwatchmetricsenabled
         */
        readonly cloudWatchMetricsEnabled: boolean | cdk.IResolvable;
        /**
         * A name of the Amazon CloudWatch metric dimension.
         *
         * The name can contain only the characters: A-Z, a-z, 0-9, - (hyphen), and _ (underscore). The name can be from one to 128 characters long. It can't contain whitespace or metric names that are reserved for AWS WAF , for example `All` and `Default_Action` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-visibilityconfig.html#cfn-wafv2-webacl-visibilityconfig-metricname
         */
        readonly metricName: string;
        /**
         * Indicates whether AWS WAF should store a sampling of the web requests that match the rules.
         *
         * You can view the sampled requests through the AWS WAF console.
         *
         * If you configure data protection for the web ACL, the protection applies to the web ACL's sampled web request data.
         *
         * > Request sampling doesn't provide a field redaction option, and any field redaction that you specify in your logging configuration doesn't affect sampling. You can only exclude fields from request sampling by disabling sampling in the web ACL visibility configuration or by configuring data protection for the web ACL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-visibilityconfig.html#cfn-wafv2-webacl-visibilityconfig-sampledrequestsenabled
         */
        readonly sampledRequestsEnabled: boolean | cdk.IResolvable;
    }
    /**
     * Specifies how AWS WAF should handle `CAPTCHA` evaluations for rules that don't have their own `CaptchaConfig` settings.
     *
     * If you don't specify this, AWS WAF uses its default settings for `CaptchaConfig` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-captchaconfig.html
     */
    interface CaptchaConfigProperty {
        /**
         * Determines how long a `CAPTCHA` timestamp in the token remains valid after the client successfully solves a `CAPTCHA` puzzle.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-captchaconfig.html#cfn-wafv2-webacl-captchaconfig-immunitytimeproperty
         */
        readonly immunityTimeProperty?: CfnWebACL.ImmunityTimePropertyProperty | cdk.IResolvable;
    }
    /**
     * Inspect one of the headers in the web request, identified by name, for example, `User-Agent` or `Referer` .
     *
     * The name isn't case sensitive.
     *
     * You can filter and inspect all headers with the `FieldToMatch` setting `Headers` .
     *
     * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
     *
     * Example JSON: `"SingleHeader": { "Name": "haystack" }`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-singleheader.html
     */
    interface SingleHeaderProperty {
        /**
         * The name of the query header to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-singleheader.html#cfn-wafv2-webacl-singleheader-name
         */
        readonly name: string;
    }
    /**
     * Inspect one query argument in the web request, identified by name, for example *UserName* or *SalesRegion* .
     *
     * The name isn't case sensitive.
     *
     * This is used to indicate the web request component to inspect, in the `FieldToMatch` specification.
     *
     * Example JSON: `"SingleQueryArgument": { "Name": "myArgument" }`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-singlequeryargument.html
     */
    interface SingleQueryArgumentProperty {
        /**
         * The name of the query argument to inspect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-wafv2-webacl-singlequeryargument.html#cfn-wafv2-webacl-singlequeryargument-name
         */
        readonly name: string;
    }
}
/**
 * Properties for defining a `CfnWebACL`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html
 */
export interface CfnWebACLProps {
    /**
     * Specifies custom configurations for the associations between the web ACL and protected resources.
     *
     * Use this to customize the maximum size of the request body that your protected resources forward to AWS WAF for inspection. You can customize this setting for CloudFront, API Gateway, Amazon Cognito, App Runner, or Verified Access resources. The default setting is 16 KB (16,384 bytes).
     *
     * > You are charged additional fees when your protected resources forward body sizes that are larger than the default. For more information, see [AWS WAF Pricing](https://docs.aws.amazon.com/waf/pricing/) .
     *
     * For Application Load Balancer and AWS AppSync , the limit is fixed at 8 KB (8,192 bytes).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-associationconfig
     */
    readonly associationConfig?: CfnWebACL.AssociationConfigProperty | cdk.IResolvable;
    /**
     * Specifies how AWS WAF should handle `CAPTCHA` evaluations for rules that don't have their own `CaptchaConfig` settings.
     *
     * If you don't specify this, AWS WAF uses its default settings for `CaptchaConfig` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-captchaconfig
     */
    readonly captchaConfig?: CfnWebACL.CaptchaConfigProperty | cdk.IResolvable;
    /**
     * Specifies how AWS WAF should handle challenge evaluations for rules that don't have their own `ChallengeConfig` settings.
     *
     * If you don't specify this, AWS WAF uses its default settings for `ChallengeConfig` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-challengeconfig
     */
    readonly challengeConfig?: CfnWebACL.ChallengeConfigProperty | cdk.IResolvable;
    /**
     * A map of custom response keys and content bodies.
     *
     * When you create a rule with a block action, you can send a custom response to the web request. You define these for the web ACL, and then use them in the rules and default actions that you define in the web ACL.
     *
     * For information about customizing web requests and responses, see [Customizing web requests and responses in AWS WAF](https://docs.aws.amazon.com/waf/latest/developerguide/waf-custom-request-response.html) in the *AWS WAF Developer Guide* .
     *
     * For information about the limits on count and size for custom request and response settings, see [AWS WAF quotas](https://docs.aws.amazon.com/waf/latest/developerguide/limits.html) in the *AWS WAF Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-customresponsebodies
     */
    readonly customResponseBodies?: cdk.IResolvable | Record<string, CfnWebACL.CustomResponseBodyProperty | cdk.IResolvable>;
    /**
     * The action to perform if none of the `Rules` contained in the `WebACL` match.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-defaultaction
     */
    readonly defaultAction: CfnWebACL.DefaultActionProperty | cdk.IResolvable;
    /**
     * A description of the web ACL that helps with identification.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-description
     */
    readonly description?: string;
    /**
     * The name of the web ACL.
     *
     * You cannot change the name of a web ACL after you create it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-name
     */
    readonly name?: string;
    /**
     * The rule statements used to identify the web requests that you want to manage.
     *
     * Each rule includes one top-level statement that AWS WAF uses to identify matching web requests, and parameters that govern how AWS WAF handles them.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-rules
     */
    readonly rules?: Array<cdk.IResolvable | CfnWebACL.RuleProperty> | cdk.IResolvable;
    /**
     * Specifies whether this is for an Amazon CloudFront distribution or for a regional application.
     *
     * A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AWS AppSync GraphQL API, an Amazon Cognito user pool, an AWS App Runner service, or an AWS Verified Access instance. Valid Values are `CLOUDFRONT` and `REGIONAL` .
     *
     * > For `CLOUDFRONT` , you must create your WAFv2 resources in the US East (N. Virginia) Region, `us-east-1` .
     *
     * For information about how to define the association of the web ACL with your resource, see `WebACLAssociation` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-scope
     */
    readonly scope: string;
    /**
     * Key:value pairs associated with an AWS resource.
     *
     * The key:value pair can be anything you define. Typically, the tag key represents a category (such as "environment") and the tag value represents a specific value within that category (such as "test," "development," or "production"). You can add up to 50 tags to each AWS resource.
     *
     * > To modify tags on existing resources, use the AWS WAF APIs or command line interface. With AWS CloudFormation , you can only add tags to AWS WAF resources during resource creation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Specifies the domains that AWS WAF should accept in a web request token.
     *
     * This enables the use of tokens across multiple protected websites. When AWS WAF provides a token, it uses the domain of the AWS resource that the web ACL is protecting. If you don't specify a list of token domains, AWS WAF accepts tokens only for the domain of the protected resource. With a token domain list, AWS WAF accepts the resource's host domain plus all domains in the token domain list, including their prefixed subdomains.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-tokendomains
     */
    readonly tokenDomains?: Array<string>;
    /**
     * Defines and enables Amazon CloudWatch metrics and web request sample collection.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webacl.html#cfn-wafv2-webacl-visibilityconfig
     */
    readonly visibilityConfig: cdk.IResolvable | CfnWebACL.VisibilityConfigProperty;
}
/**
 * > This is the latest version of *AWS WAF* , named AWS WAF V2, released in November, 2019.
 *
 * For information, including how to migrate your AWS WAF resources from the prior release, see the [AWS WAF developer guide](https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html) .
 *
 * Use a web ACL association to define an association between a web ACL and a regional application resource, to protect the resource. A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AWS AppSync GraphQL API, an Amazon Cognito user pool, an AWS App Runner service, or an AWS Verified Access instance.
 *
 * For Amazon CloudFront , don't use this resource. Instead, use your CloudFront distribution configuration. To associate a web ACL with a distribution, provide the Amazon Resource Name (ARN) of the `WebACL` to your CloudFront distribution configuration. To disassociate a web ACL, provide an empty ARN. For information, see [AWS::CloudFront::Distribution](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-distribution.html) .
 *
 * *Required permissions for customer-managed IAM policies*
 *
 * This call requires permissions that are specific to the protected resource type. For details, see [Permissions for AssociateWebACL](https://docs.aws.amazon.com/waf/latest/developerguide/security_iam_service-with-iam.html#security_iam_action-AssociateWebACL) in the *AWS WAF Developer Guide* .
 *
 * *Temporary inconsistencies during updates*
 *
 * When you create or change a web ACL or other AWS WAF resources, the changes take a small amount of time to propagate to all areas where the resources are stored. The propagation time can be from a few seconds to a number of minutes.
 *
 * The following are examples of the temporary inconsistencies that you might notice during change propagation:
 *
 * - After you create a web ACL, if you try to associate it with a resource, you might get an exception indicating that the web ACL is unavailable.
 * - After you add a rule group to a web ACL, the new rule group rules might be in effect in one area where the web ACL is used and not in another.
 * - After you change a rule action setting, you might see the old action in some places and the new action in others.
 * - After you add an IP address to an IP set that is in use in a blocking rule, the new address might be blocked in one area while still allowed in another.
 *
 * @cloudformationResource AWS::WAFv2::WebACLAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webaclassociation.html
 */
export declare class CfnWebACLAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWebACLAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWebACLAssociation;
    /**
     * The Amazon Resource Name (ARN) of the resource to associate with the web ACL.
     */
    resourceArn: string;
    /**
     * The Amazon Resource Name (ARN) of the web ACL that you want to associate with the resource.
     */
    webAclArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnWebACLAssociationProps);
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
 * Properties for defining a `CfnWebACLAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webaclassociation.html
 */
export interface CfnWebACLAssociationProps {
    /**
     * The Amazon Resource Name (ARN) of the resource to associate with the web ACL.
     *
     * The ARN must be in one of the following formats:
     *
     * - For an Application Load Balancer: `arn: *partition* :elasticloadbalancing: *region* : *account-id* :loadbalancer/app/ *load-balancer-name* / *load-balancer-id*`
     * - For an Amazon API Gateway REST API: `arn: *partition* :apigateway: *region* ::/restapis/ *api-id* /stages/ *stage-name*`
     * - For an AWS AppSync GraphQL API: `arn: *partition* :appsync: *region* : *account-id* :apis/ *GraphQLApiId*`
     * - For an Amazon Cognito user pool: `arn: *partition* :cognito-idp: *region* : *account-id* :userpool/ *user-pool-id*`
     * - For an AWS App Runner service: `arn: *partition* :apprunner: *region* : *account-id* :service/ *apprunner-service-name* / *apprunner-service-id*`
     * - For an AWS Verified Access instance: `arn: *partition* :ec2: *region* : *account-id* :verified-access-instance/ *instance-id*`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webaclassociation.html#cfn-wafv2-webaclassociation-resourcearn
     */
    readonly resourceArn: string;
    /**
     * The Amazon Resource Name (ARN) of the web ACL that you want to associate with the resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wafv2-webaclassociation.html#cfn-wafv2-webaclassociation-webaclarn
     */
    readonly webAclArn: string;
}
