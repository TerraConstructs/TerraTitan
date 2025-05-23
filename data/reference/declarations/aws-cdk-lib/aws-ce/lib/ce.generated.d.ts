import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::CE::AnomalyMonitor` resource is a Cost Explorer resource type that continuously inspects your account's cost data for anomalies, based on `MonitorType` and `MonitorSpecification` .
 *
 * The content consists of detailed metadata and the current status of the monitor object.
 *
 * @cloudformationResource AWS::CE::AnomalyMonitor
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html
 */
export declare class CfnAnomalyMonitor extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAnomalyMonitor from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAnomalyMonitor;
    /**
     * The date when the monitor was created.
     *
     * @cloudformationAttribute CreationDate
     */
    readonly attrCreationDate: string;
    /**
     * The value for evaluated dimensions.
     *
     * @cloudformationAttribute DimensionalValueCount
     */
    readonly attrDimensionalValueCount: number;
    /**
     * The date when the monitor last evaluated for anomalies.
     *
     * @cloudformationAttribute LastEvaluatedDate
     */
    readonly attrLastEvaluatedDate: string;
    /**
     * The date when the monitor was last updated.
     *
     * @cloudformationAttribute LastUpdatedDate
     */
    readonly attrLastUpdatedDate: string;
    /**
     * The Amazon Resource Name (ARN) value for the monitor.
     *
     * @cloudformationAttribute MonitorArn
     */
    readonly attrMonitorArn: string;
    /**
     * The dimensions to evaluate.
     */
    monitorDimension?: string;
    /**
     * The name of the monitor.
     */
    monitorName: string;
    /**
     * The array of `MonitorSpecification` in JSON array format.
     */
    monitorSpecification?: string;
    /**
     * The possible type values.
     */
    monitorType: string;
    /**
     * Tags to assign to monitor.
     */
    resourceTags?: Array<cdk.IResolvable | CfnAnomalyMonitor.ResourceTagProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAnomalyMonitorProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAnomalyMonitor {
    /**
     * The tag structure that contains a tag key and value.
     *
     * > Tagging is supported only for the following Cost Explorer resource types: [`AnomalyMonitor`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html) , [`AnomalySubscription`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html) , [`CostCategory`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalymonitor-resourcetag.html
     */
    interface ResourceTagProperty {
        /**
         * The key that's associated with the tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalymonitor-resourcetag.html#cfn-ce-anomalymonitor-resourcetag-key
         */
        readonly key: string;
        /**
         * The value that's associated with the tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalymonitor-resourcetag.html#cfn-ce-anomalymonitor-resourcetag-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnAnomalyMonitor`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html
 */
export interface CfnAnomalyMonitorProps {
    /**
     * The dimensions to evaluate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html#cfn-ce-anomalymonitor-monitordimension
     */
    readonly monitorDimension?: string;
    /**
     * The name of the monitor.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html#cfn-ce-anomalymonitor-monitorname
     */
    readonly monitorName: string;
    /**
     * The array of `MonitorSpecification` in JSON array format.
     *
     * For instance, you can use `MonitorSpecification` to specify a tag, Cost Category, or linked account for your custom anomaly monitor. For further information, see the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html#aws-resource-ce-anomalymonitor--examples) section of this page.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html#cfn-ce-anomalymonitor-monitorspecification
     */
    readonly monitorSpecification?: string;
    /**
     * The possible type values.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html#cfn-ce-anomalymonitor-monitortype
     */
    readonly monitorType: string;
    /**
     * Tags to assign to monitor.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html#cfn-ce-anomalymonitor-resourcetags
     */
    readonly resourceTags?: Array<cdk.IResolvable | CfnAnomalyMonitor.ResourceTagProperty> | cdk.IResolvable;
}
/**
 * The `AWS::CE::AnomalySubscription` resource (also referred to as an alert subscription) is a Cost Explorer resource type that sends notifications about specific anomalies that meet an alerting criteria defined by you.
 *
 * You can specify the frequency of the alerts and the subscribers to notify.
 *
 * Anomaly subscriptions can be associated with one or more [`AWS::CE::AnomalyMonitor`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalymonitor.html) resources, and they only send notifications about anomalies detected by those associated monitors. You can also configure a threshold to further control which anomalies are included in the notifications.
 *
 * Anomalies that don’t exceed the chosen threshold and therefore don’t trigger notifications from an anomaly subscription will still be available on the console and from the [`GetAnomalies`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetAnomalies.html) API.
 *
 * @cloudformationResource AWS::CE::AnomalySubscription
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html
 */
export declare class CfnAnomalySubscription extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAnomalySubscription from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAnomalySubscription;
    /**
     * Your unique account identifier.
     *
     * @cloudformationAttribute AccountId
     */
    readonly attrAccountId: string;
    /**
     * The `AnomalySubscription` Amazon Resource Name (ARN).
     *
     * @cloudformationAttribute SubscriptionArn
     */
    readonly attrSubscriptionArn: string;
    /**
     * The frequency that anomaly notifications are sent.
     */
    frequency: string;
    /**
     * A list of cost anomaly monitors.
     */
    monitorArnList: Array<string>;
    /**
     * Tags to assign to subscription.
     */
    resourceTags?: Array<cdk.IResolvable | CfnAnomalySubscription.ResourceTagProperty> | cdk.IResolvable;
    /**
     * A list of subscribers to notify.
     */
    subscribers: Array<cdk.IResolvable | CfnAnomalySubscription.SubscriberProperty> | cdk.IResolvable;
    /**
     * The name for the subscription.
     */
    subscriptionName: string;
    /**
     * (deprecated).
     */
    threshold?: number;
    /**
     * An [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object in JSON string format used to specify the anomalies that you want to generate alerts for. This supports dimensions and nested expressions. The supported dimensions are `ANOMALY_TOTAL_IMPACT_ABSOLUTE` and `ANOMALY_TOTAL_IMPACT_PERCENTAGE` , corresponding to an anomaly’s TotalImpact and TotalImpactPercentage, respectively (see [Impact](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Impact.html) for more details). The supported nested expression types are `AND` and `OR` . The match option `GREATER_THAN_OR_EQUAL` is required. Values must be numbers between 0 and 10,000,000,000 in string format.
     */
    thresholdExpression?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAnomalySubscriptionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAnomalySubscription {
    /**
     * The tag structure that contains a tag key and value.
     *
     * > Tagging is supported only for the following Cost Explorer resource types: [`AnomalyMonitor`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html) , [`AnomalySubscription`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html) , [`CostCategory`](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalysubscription-resourcetag.html
     */
    interface ResourceTagProperty {
        /**
         * The key that's associated with the tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalysubscription-resourcetag.html#cfn-ce-anomalysubscription-resourcetag-key
         */
        readonly key: string;
        /**
         * The value that's associated with the tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalysubscription-resourcetag.html#cfn-ce-anomalysubscription-resourcetag-value
         */
        readonly value: string;
    }
    /**
     * The recipient of `AnomalySubscription` notifications.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalysubscription-subscriber.html
     */
    interface SubscriberProperty {
        /**
         * The email address or SNS Topic Amazon Resource Name (ARN), depending on the `Type` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalysubscription-subscriber.html#cfn-ce-anomalysubscription-subscriber-address
         */
        readonly address: string;
        /**
         * Indicates if the subscriber accepts the notifications.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalysubscription-subscriber.html#cfn-ce-anomalysubscription-subscriber-status
         */
        readonly status?: string;
        /**
         * The notification delivery channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ce-anomalysubscription-subscriber.html#cfn-ce-anomalysubscription-subscriber-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnAnomalySubscription`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html
 */
export interface CfnAnomalySubscriptionProps {
    /**
     * The frequency that anomaly notifications are sent.
     *
     * Notifications are sent either over email (for DAILY and WEEKLY frequencies) or SNS (for IMMEDIATE frequency). For more information, see [Creating an Amazon SNS topic for anomaly notifications](https://docs.aws.amazon.com/cost-management/latest/userguide/ad-SNS.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-frequency
     */
    readonly frequency: string;
    /**
     * A list of cost anomaly monitors.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-monitorarnlist
     */
    readonly monitorArnList: Array<string>;
    /**
     * Tags to assign to subscription.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-resourcetags
     */
    readonly resourceTags?: Array<cdk.IResolvable | CfnAnomalySubscription.ResourceTagProperty> | cdk.IResolvable;
    /**
     * A list of subscribers to notify.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-subscribers
     */
    readonly subscribers: Array<cdk.IResolvable | CfnAnomalySubscription.SubscriberProperty> | cdk.IResolvable;
    /**
     * The name for the subscription.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-subscriptionname
     */
    readonly subscriptionName: string;
    /**
     * (deprecated).
     *
     * An absolute dollar value that must be exceeded by the anomaly's total impact (see [Impact](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Impact.html) for more details) for an anomaly notification to be generated.
     *
     * This field has been deprecated. To specify a threshold, use ThresholdExpression. Continued use of Threshold will be treated as shorthand syntax for a ThresholdExpression.
     *
     * One of Threshold or ThresholdExpression is required for `AWS::CE::AnomalySubscription` . You cannot specify both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-threshold
     */
    readonly threshold?: number;
    /**
     * An [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object in JSON string format used to specify the anomalies that you want to generate alerts for. This supports dimensions and nested expressions. The supported dimensions are `ANOMALY_TOTAL_IMPACT_ABSOLUTE` and `ANOMALY_TOTAL_IMPACT_PERCENTAGE` , corresponding to an anomaly’s TotalImpact and TotalImpactPercentage, respectively (see [Impact](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Impact.html) for more details). The supported nested expression types are `AND` and `OR` . The match option `GREATER_THAN_OR_EQUAL` is required. Values must be numbers between 0 and 10,000,000,000 in string format.
     *
     * One of Threshold or ThresholdExpression is required for `AWS::CE::AnomalySubscription` . You cannot specify both.
     *
     * For further information, see the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#aws-resource-ce-anomalysubscription--examples) section of this page.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-anomalysubscription.html#cfn-ce-anomalysubscription-thresholdexpression
     */
    readonly thresholdExpression?: string;
}
/**
 * The `AWS::CE::CostCategory` resource creates groupings of cost that you can use across products in the AWS Billing and Cost Management console, such as Cost Explorer and AWS Budgets.
 *
 * For more information, see [Managing Your Costs with Cost Categories](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-cost-categories.html) in the *AWS Billing and Cost Management User Guide* .
 *
 * @cloudformationResource AWS::CE::CostCategory
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html
 */
export declare class CfnCostCategory extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCostCategory from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCostCategory;
    /**
     * The unique identifier for your Cost Category.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The Cost Category's effective start date.
     *
     * @cloudformationAttribute EffectiveStart
     */
    readonly attrEffectiveStart: string;
    /**
     * The default value for the cost category.
     */
    defaultValue?: string;
    /**
     * The unique name of the Cost Category.
     */
    name: string;
    /**
     * The array of CostCategoryRule in JSON array format.
     */
    rules: string;
    /**
     * The rule schema version in this particular Cost Category.
     */
    ruleVersion: string;
    /**
     * The split charge rules that are used to allocate your charges between your Cost Category values.
     */
    splitChargeRules?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCostCategoryProps);
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
 * Properties for defining a `CfnCostCategory`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html
 */
export interface CfnCostCategoryProps {
    /**
     * The default value for the cost category.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html#cfn-ce-costcategory-defaultvalue
     */
    readonly defaultValue?: string;
    /**
     * The unique name of the Cost Category.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html#cfn-ce-costcategory-name
     */
    readonly name: string;
    /**
     * The array of CostCategoryRule in JSON array format.
     *
     * > Rules are processed in order. If there are multiple rules that match the line item, then the first rule to match is used to determine that Cost Category value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html#cfn-ce-costcategory-rules
     */
    readonly rules: string;
    /**
     * The rule schema version in this particular Cost Category.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html#cfn-ce-costcategory-ruleversion
     */
    readonly ruleVersion: string;
    /**
     * The split charge rules that are used to allocate your charges between your Cost Category values.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ce-costcategory.html#cfn-ce-costcategory-splitchargerules
     */
    readonly splitChargeRules?: string;
}
