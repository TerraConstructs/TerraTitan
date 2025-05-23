import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::CloudWatch::Alarm` type specifies an alarm and associates it with the specified metric or metric math expression.
 *
 * When this operation creates an alarm, the alarm state is immediately set to `INSUFFICIENT_DATA` . The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed.
 *
 * When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.
 *
 * @cloudformationResource AWS::CloudWatch::Alarm
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html
 */
export declare class CfnAlarm extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAlarm from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAlarm;
    /**
     * The ARN of the CloudWatch alarm, such as `arn:aws:cloudwatch:us-west-2:123456789012:alarm:myCloudWatchAlarm-CPUAlarm-UXMMZK36R55Z` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Indicates whether actions should be executed during any changes to the alarm state.
     */
    actionsEnabled?: boolean | cdk.IResolvable;
    /**
     * The list of actions to execute when this alarm transitions into an ALARM state from any other state.
     */
    alarmActions?: Array<string>;
    /**
     * The description of the alarm.
     */
    alarmDescription?: string;
    /**
     * The name of the alarm.
     */
    alarmName?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The arithmetic operation to use when comparing the specified statistic and threshold.
     */
    comparisonOperator: string;
    /**
     * The number of datapoints that must be breaching to trigger the alarm.
     */
    datapointsToAlarm?: number;
    /**
     * The dimensions for the metric associated with the alarm.
     */
    dimensions?: Array<CfnAlarm.DimensionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Used only for alarms based on percentiles.
     */
    evaluateLowSampleCountPercentile?: string;
    /**
     * The number of periods over which data is compared to the specified threshold.
     */
    evaluationPeriods: number;
    /**
     * The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.
     */
    extendedStatistic?: string;
    /**
     * The actions to execute when this alarm transitions to the `INSUFFICIENT_DATA` state from any other state.
     */
    insufficientDataActions?: Array<string>;
    /**
     * The name of the metric associated with the alarm.
     */
    metricName?: string;
    /**
     * An array that enables you to create an alarm based on the result of a metric math expression.
     */
    metrics?: Array<cdk.IResolvable | CfnAlarm.MetricDataQueryProperty> | cdk.IResolvable;
    /**
     * The namespace of the metric associated with the alarm.
     */
    namespace?: string;
    /**
     * The actions to execute when this alarm transitions to the `OK` state from any other state.
     */
    okActions?: Array<string>;
    /**
     * The period, in seconds, over which the statistic is applied.
     */
    period?: number;
    /**
     * The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use `ExtendedStatistic` .
     */
    statistic?: string;
    /**
     * A list of key-value pairs to associate with the alarm.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The value to compare with the specified statistic.
     */
    threshold?: number;
    /**
     * In an alarm based on an anomaly detection model, this is the ID of the `ANOMALY_DETECTION_BAND` function used as the threshold for the alarm.
     */
    thresholdMetricId?: string;
    /**
     * Sets how this alarm is to handle missing data points.
     */
    treatMissingData?: string;
    /**
     * The unit of the metric associated with the alarm.
     */
    unit?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAlarmProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAlarm {
    /**
     * Dimension is an embedded property of the `AWS::CloudWatch::Alarm` type.
     *
     * Dimensions are name/value pairs that can be associated with a CloudWatch metric. You can specify a maximum of 30 dimensions for a given metric.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-dimension.html
     */
    interface DimensionProperty {
        /**
         * The name of the dimension, from 1–255 characters in length.
         *
         * This dimension name must have been included when the metric was published.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-dimension.html#cfn-cloudwatch-alarm-dimension-name
         */
        readonly name: string;
        /**
         * The value for the dimension, from 1–255 characters in length.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-dimension.html#cfn-cloudwatch-alarm-dimension-value
         */
        readonly value: string;
    }
    /**
     * The `MetricDataQuery` property type specifies the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a math expression on metric data.
     *
     * Any expression used must return a single time series. For more information, see [Metric Math Syntax and Functions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax) in the *Amazon CloudWatch User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricdataquery.html
     */
    interface MetricDataQueryProperty {
        /**
         * The ID of the account where the metrics are located, if this is a cross-account alarm.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricdataquery.html#cfn-cloudwatch-alarm-metricdataquery-accountid
         */
        readonly accountId?: string;
        /**
         * The math expression to be performed on the returned data, if this object is performing a math expression.
         *
         * This expression can use the `Id` of the other metrics to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions. For more information about metric math expressions, see [Metric Math Syntax and Functions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax) in the *Amazon CloudWatch User Guide* .
         *
         * Within each MetricDataQuery object, you must specify either `Expression` or `MetricStat` but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricdataquery.html#cfn-cloudwatch-alarm-metricdataquery-expression
         */
        readonly expression?: string;
        /**
         * A short name used to tie this object to the results in the response.
         *
         * This name must be unique within a single call to `GetMetricData` . If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricdataquery.html#cfn-cloudwatch-alarm-metricdataquery-id
         */
        readonly id: string;
        /**
         * A human-readable label for this metric or expression.
         *
         * This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If `Label` is omitted, CloudWatch generates a default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricdataquery.html#cfn-cloudwatch-alarm-metricdataquery-label
         */
        readonly label?: string;
        /**
         * The metric to be returned, along with statistics, period, and units.
         *
         * Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.
         *
         * Within one MetricDataQuery object, you must specify either `Expression` or `MetricStat` but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricdataquery.html#cfn-cloudwatch-alarm-metricdataquery-metricstat
         */
        readonly metricStat?: cdk.IResolvable | CfnAlarm.MetricStatProperty;
        /**
         * The granularity, in seconds, of the returned data points.
         *
         * For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` operation that includes a `StorageResolution of 1 second` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricdataquery.html#cfn-cloudwatch-alarm-metricdataquery-period
         */
        readonly period?: number;
        /**
         * This option indicates whether to return the timestamps and raw data values of this metric.
         *
         * When you create an alarm based on a metric math expression, specify `True` for this value for only the one math expression that the alarm is based on. You must specify `False` for `ReturnData` for all the other metrics and expressions used in the alarm.
         *
         * This field is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricdataquery.html#cfn-cloudwatch-alarm-metricdataquery-returndata
         */
        readonly returnData?: boolean | cdk.IResolvable;
    }
    /**
     * This structure defines the metric to be returned, along with the statistics, period, and units.
     *
     * `MetricStat` is a property of the [MetricDataQuery](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricdataquery.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricstat.html
     */
    interface MetricStatProperty {
        /**
         * The metric to return, including the metric name, namespace, and dimensions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricstat.html#cfn-cloudwatch-alarm-metricstat-metric
         */
        readonly metric: cdk.IResolvable | CfnAlarm.MetricProperty;
        /**
         * The granularity, in seconds, of the returned data points.
         *
         * For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` call that includes a `StorageResolution` of 1 second.
         *
         * If the `StartTime` parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:
         *
         * - Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).
         * - Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).
         * - Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricstat.html#cfn-cloudwatch-alarm-metricstat-period
         */
        readonly period: number;
        /**
         * The statistic to return.
         *
         * It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *Amazon CloudWatch User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricstat.html#cfn-cloudwatch-alarm-metricstat-stat
         */
        readonly stat: string;
        /**
         * The unit to use for the returned data points.
         *
         * Valid values are: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricstat.html#cfn-cloudwatch-alarm-metricstat-unit
         */
        readonly unit?: string;
    }
    /**
     * The `Metric` property type represents a specific metric.
     *
     * `Metric` is a property of the [MetricStat](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metricstat.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metric.html
     */
    interface MetricProperty {
        /**
         * The metric dimensions that you want to be used for the metric that the alarm will watch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metric.html#cfn-cloudwatch-alarm-metric-dimensions
         */
        readonly dimensions?: Array<CfnAlarm.DimensionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the metric that you want the alarm to watch.
         *
         * This is a required field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metric.html#cfn-cloudwatch-alarm-metric-metricname
         */
        readonly metricName?: string;
        /**
         * The namespace of the metric that the alarm will watch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-alarm-metric.html#cfn-cloudwatch-alarm-metric-namespace
         */
        readonly namespace?: string;
    }
}
/**
 * Properties for defining a `CfnAlarm`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html
 */
export interface CfnAlarmProps {
    /**
     * Indicates whether actions should be executed during any changes to the alarm state.
     *
     * The default is TRUE.
     *
     * @default - true
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-actionsenabled
     */
    readonly actionsEnabled?: boolean | cdk.IResolvable;
    /**
     * The list of actions to execute when this alarm transitions into an ALARM state from any other state.
     *
     * Specify each action as an Amazon Resource Name (ARN). For more information about creating alarms and the actions that you can specify, see [PutMetricAlarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html) in the *Amazon CloudWatch API Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-alarmactions
     */
    readonly alarmActions?: Array<string>;
    /**
     * The description of the alarm.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-alarmdescription
     */
    readonly alarmDescription?: string;
    /**
     * The name of the alarm.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the alarm name.
     *
     * > If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-alarmname
     */
    readonly alarmName?: string;
    /**
     * The arithmetic operation to use when comparing the specified statistic and threshold.
     *
     * The specified statistic value is used as the first operand.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-comparisonoperator
     */
    readonly comparisonOperator: string;
    /**
     * The number of datapoints that must be breaching to trigger the alarm.
     *
     * This is used only if you are setting an "M out of N" alarm. In that case, this value is the M, and the value that you set for `EvaluationPeriods` is the N value. For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *Amazon CloudWatch User Guide* .
     *
     * If you omit this parameter, CloudWatch uses the same value here that you set for `EvaluationPeriods` , and the alarm goes to alarm state if that many consecutive periods are breaching.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-datapointstoalarm
     */
    readonly datapointsToAlarm?: number;
    /**
     * The dimensions for the metric associated with the alarm.
     *
     * For an alarm based on a math expression, you can't specify `Dimensions` . Instead, you use `Metrics` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-dimensions
     */
    readonly dimensions?: Array<CfnAlarm.DimensionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Used only for alarms based on percentiles.
     *
     * If `ignore` , the alarm state does not change during periods with too few data points to be statistically significant. If `evaluate` or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-evaluatelowsamplecountpercentile
     */
    readonly evaluateLowSampleCountPercentile?: string;
    /**
     * The number of periods over which data is compared to the specified threshold.
     *
     * If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N, and `DatapointsToAlarm` is the M.
     *
     * For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *Amazon CloudWatch User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-evaluationperiods
     */
    readonly evaluationPeriods: number;
    /**
     * The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.
     *
     * For an alarm based on a metric, you must specify either `Statistic` or `ExtendedStatistic` but not both.
     *
     * For an alarm based on a math expression, you can't specify `ExtendedStatistic` . Instead, you use `Metrics` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-extendedstatistic
     */
    readonly extendedStatistic?: string;
    /**
     * The actions to execute when this alarm transitions to the `INSUFFICIENT_DATA` state from any other state.
     *
     * Each action is specified as an Amazon Resource Name (ARN).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-insufficientdataactions
     */
    readonly insufficientDataActions?: Array<string>;
    /**
     * The name of the metric associated with the alarm.
     *
     * This is required for an alarm based on a metric. For an alarm based on a math expression, you use `Metrics` instead and you can't specify `MetricName` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-metricname
     */
    readonly metricName?: string;
    /**
     * An array that enables you to create an alarm based on the result of a metric math expression.
     *
     * Each item in the array either retrieves a metric or performs a math expression.
     *
     * If you specify the `Metrics` parameter, you cannot specify `MetricName` , `Dimensions` , `Period` , `Namespace` , `Statistic` , `ExtendedStatistic` , or `Unit` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-metrics
     */
    readonly metrics?: Array<cdk.IResolvable | CfnAlarm.MetricDataQueryProperty> | cdk.IResolvable;
    /**
     * The namespace of the metric associated with the alarm.
     *
     * This is required for an alarm based on a metric. For an alarm based on a math expression, you can't specify `Namespace` and you use `Metrics` instead.
     *
     * For a list of namespaces for metrics from AWS services, see [AWS Services That Publish CloudWatch Metrics.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-namespace
     */
    readonly namespace?: string;
    /**
     * The actions to execute when this alarm transitions to the `OK` state from any other state.
     *
     * Each action is specified as an Amazon Resource Name (ARN).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-okactions
     */
    readonly okActions?: Array<string>;
    /**
     * The period, in seconds, over which the statistic is applied.
     *
     * This is required for an alarm based on a metric. Valid values are 10, 20, 30, 60, and any multiple of 60.
     *
     * For an alarm based on a math expression, you can't specify `Period` , and instead you use the `Metrics` parameter.
     *
     * *Minimum:* 10
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-period
     */
    readonly period?: number;
    /**
     * The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use `ExtendedStatistic` .
     *
     * For an alarm based on a metric, you must specify either `Statistic` or `ExtendedStatistic` but not both.
     *
     * For an alarm based on a math expression, you can't specify `Statistic` . Instead, you use `Metrics` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-statistic
     */
    readonly statistic?: string;
    /**
     * A list of key-value pairs to associate with the alarm.
     *
     * You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the `cloudwatch:TagResource` permission.
     *
     * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The value to compare with the specified statistic.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-threshold
     */
    readonly threshold?: number;
    /**
     * In an alarm based on an anomaly detection model, this is the ID of the `ANOMALY_DETECTION_BAND` function used as the threshold for the alarm.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-thresholdmetricid
     */
    readonly thresholdMetricId?: string;
    /**
     * Sets how this alarm is to handle missing data points.
     *
     * Valid values are `breaching` , `notBreaching` , `ignore` , and `missing` . For more information, see [Configuring How CloudWatch Alarms Treat Missing Data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data) in the *Amazon CloudWatch User Guide* .
     *
     * If you omit this parameter, the default behavior of `missing` is used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-treatmissingdata
     */
    readonly treatMissingData?: string;
    /**
     * The unit of the metric associated with the alarm.
     *
     * Specify this only if you are creating an alarm based on a single metric. Do not specify this if you are specifying a `Metrics` array.
     *
     * You can specify the following values: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-alarm.html#cfn-cloudwatch-alarm-unit
     */
    readonly unit?: string;
}
/**
 * The `AWS::CloudWatch::AnomalyDetector` type specifies an anomaly detection band for a certain metric and statistic.
 *
 * The band represents the expected "normal" range for the metric values. Anomaly detection bands can be used for visualization of a metric's expected values, and for alarms.
 *
 * For more information see [Using CloudWatch anomaly detection.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html) .
 *
 * @cloudformationResource AWS::CloudWatch::AnomalyDetector
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-anomalydetector.html
 */
export declare class CfnAnomalyDetector extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAnomalyDetector from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAnomalyDetector;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Specifies details about how the anomaly detection model is to be trained, including time ranges to exclude when training and updating the model.
     */
    configuration?: CfnAnomalyDetector.ConfigurationProperty | cdk.IResolvable;
    /**
     * The dimensions of the metric associated with the anomaly detection band.
     */
    dimensions?: Array<CfnAnomalyDetector.DimensionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Use this object to include parameters to provide information about your metric to CloudWatch to help it build more accurate anomaly detection models.
     */
    metricCharacteristics?: cdk.IResolvable | CfnAnomalyDetector.MetricCharacteristicsProperty;
    /**
     * The CloudWatch metric math expression for this anomaly detector.
     */
    metricMathAnomalyDetector?: cdk.IResolvable | CfnAnomalyDetector.MetricMathAnomalyDetectorProperty;
    /**
     * The name of the metric associated with the anomaly detection band.
     */
    metricName?: string;
    /**
     * The namespace of the metric associated with the anomaly detection band.
     */
    namespace?: string;
    /**
     * The CloudWatch metric and statistic for this anomaly detector.
     */
    singleMetricAnomalyDetector?: cdk.IResolvable | CfnAnomalyDetector.SingleMetricAnomalyDetectorProperty;
    /**
     * The statistic of the metric associated with the anomaly detection band.
     */
    stat?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnAnomalyDetectorProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnAnomalyDetector {
    /**
     * Specifies details about how the anomaly detection model is to be trained, including time ranges to exclude when training and updating the model.
     *
     * The configuration can also include the time zone to use for the metric.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-configuration.html
     */
    interface ConfigurationProperty {
        /**
         * Specifies an array of time ranges to exclude from use when the anomaly detection model is trained and updated.
         *
         * Use this to make sure that events that could cause unusual values for the metric, such as deployments, aren't used when CloudWatch creates or updates the model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-configuration.html#cfn-cloudwatch-anomalydetector-configuration-excludedtimeranges
         */
        readonly excludedTimeRanges?: Array<cdk.IResolvable | CfnAnomalyDetector.RangeProperty> | cdk.IResolvable;
        /**
         * The time zone to use for the metric.
         *
         * This is useful to enable the model to automatically account for daylight savings time changes if the metric is sensitive to such time changes.
         *
         * To specify a time zone, use the name of the time zone as specified in the standard tz database. For more information, see [tz database](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/Tz_database) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-configuration.html#cfn-cloudwatch-anomalydetector-configuration-metrictimezone
         */
        readonly metricTimeZone?: string;
    }
    /**
     * Each `Range` specifies one range of days or times to exclude from use for training or updating an anomaly detection model.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-range.html
     */
    interface RangeProperty {
        /**
         * The end time of the range to exclude.
         *
         * The format is `yyyy-MM-dd'T'HH:mm:ss` . For example, `2019-07-01T23:59:59` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-range.html#cfn-cloudwatch-anomalydetector-range-endtime
         */
        readonly endTime: string;
        /**
         * The start time of the range to exclude.
         *
         * The format is `yyyy-MM-dd'T'HH:mm:ss` . For example, `2019-07-01T23:59:59` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-range.html#cfn-cloudwatch-anomalydetector-range-starttime
         */
        readonly startTime: string;
    }
    /**
     * Indicates the CloudWatch math expression that provides the time series the anomaly detector uses as input.
     *
     * The designated math expression must return a single time series.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricmathanomalydetector.html
     */
    interface MetricMathAnomalyDetectorProperty {
        /**
         * An array of metric data query structures that enables you to create an anomaly detector based on the result of a metric math expression.
         *
         * Each item in `MetricDataQueries` gets a metric or performs a math expression. One item in `MetricDataQueries` is the expression that provides the time series that the anomaly detector uses as input. Designate the expression by setting `ReturnData` to `true` for this object in the array. For all other expressions and metrics, set `ReturnData` to `false` . The designated expression must return a single time series.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricmathanomalydetector.html#cfn-cloudwatch-anomalydetector-metricmathanomalydetector-metricdataqueries
         */
        readonly metricDataQueries?: Array<cdk.IResolvable | CfnAnomalyDetector.MetricDataQueryProperty> | cdk.IResolvable;
    }
    /**
     * This structure is used in both `GetMetricData` and `PutMetricAlarm` .
     *
     * The supported use of this structure is different for those two operations.
     *
     * When used in `GetMetricData` , it indicates the metric data to return, and whether this call is just retrieving a batch set of data for one metric, or is performing a Metrics Insights query or a math expression. A single `GetMetricData` call can include up to 500 `MetricDataQuery` structures.
     *
     * When used in `PutMetricAlarm` , it enables you to create an alarm based on a metric math expression. Each `MetricDataQuery` in the array specifies either a metric to retrieve, or a math expression to be performed on retrieved metrics. A single `PutMetricAlarm` call can include up to 20 `MetricDataQuery` structures in the array. The 20 structures can include as many as 10 structures that contain a `MetricStat` parameter to retrieve a metric, and as many as 10 structures that contain the `Expression` parameter to perform a math expression. Of those `Expression` structures, one must have `true` as the value for `ReturnData` . The result of this expression is the value the alarm watches.
     *
     * Any expression used in a `PutMetricAlarm` operation must return a single time series. For more information, see [Metric Math Syntax and Functions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax) in the *Amazon CloudWatch User Guide* .
     *
     * Some of the parameters of this structure also have different uses whether you are using this structure in a `GetMetricData` operation or a `PutMetricAlarm` operation. These differences are explained in the following parameter list.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricdataquery.html
     */
    interface MetricDataQueryProperty {
        /**
         * The ID of the account where the metrics are located.
         *
         * If you are performing a `GetMetricData` operation in a monitoring account, use this to specify which account to retrieve this metric from.
         *
         * If you are performing a `PutMetricAlarm` operation, use this to specify which account contains the metric that the alarm is watching.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricdataquery.html#cfn-cloudwatch-anomalydetector-metricdataquery-accountid
         */
        readonly accountId?: string;
        /**
         * This field can contain either a Metrics Insights query, or a metric math expression to be performed on the returned data.
         *
         * For more information about Metrics Insights queries, see [Metrics Insights query components and syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-metrics-insights-querylanguage) in the *Amazon CloudWatch User Guide* .
         *
         * A math expression can use the `Id` of the other metrics or queries to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions. For more information about metric math expressions, see [Metric Math Syntax and Functions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax) in the *Amazon CloudWatch User Guide* .
         *
         * Within each MetricDataQuery object, you must specify either `Expression` or `MetricStat` but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricdataquery.html#cfn-cloudwatch-anomalydetector-metricdataquery-expression
         */
        readonly expression?: string;
        /**
         * A short name used to tie this object to the results in the response.
         *
         * This name must be unique within a single call to `GetMetricData` . If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricdataquery.html#cfn-cloudwatch-anomalydetector-metricdataquery-id
         */
        readonly id: string;
        /**
         * A human-readable label for this metric or expression.
         *
         * This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CloudWatch dashboard widget, the label is shown. If Label is omitted, CloudWatch generates a default.
         *
         * You can put dynamic expressions into a label, so that it is more descriptive. For more information, see [Using Dynamic Labels](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/graph-dynamic-labels.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricdataquery.html#cfn-cloudwatch-anomalydetector-metricdataquery-label
         */
        readonly label?: string;
        /**
         * The metric to be returned, along with statistics, period, and units.
         *
         * Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.
         *
         * Within one MetricDataQuery object, you must specify either `Expression` or `MetricStat` but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricdataquery.html#cfn-cloudwatch-anomalydetector-metricdataquery-metricstat
         */
        readonly metricStat?: cdk.IResolvable | CfnAnomalyDetector.MetricStatProperty;
        /**
         * The granularity, in seconds, of the returned data points.
         *
         * For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` operation that includes a `StorageResolution of 1 second` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricdataquery.html#cfn-cloudwatch-anomalydetector-metricdataquery-period
         */
        readonly period?: number;
        /**
         * When used in `GetMetricData` , this option indicates whether to return the timestamps and raw data values of this metric.
         *
         * If you are performing this call just to do math expressions and do not also need the raw data returned, you can specify `false` . If you omit this, the default of `true` is used.
         *
         * When used in `PutMetricAlarm` , specify `true` for the one expression result to use as the alarm. For all other metrics and expressions in the same `PutMetricAlarm` operation, specify `ReturnData` as False.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricdataquery.html#cfn-cloudwatch-anomalydetector-metricdataquery-returndata
         */
        readonly returnData?: boolean | cdk.IResolvable;
    }
    /**
     * This structure defines the metric to be returned, along with the statistics, period, and units.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricstat.html
     */
    interface MetricStatProperty {
        /**
         * The metric to return, including the metric name, namespace, and dimensions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricstat.html#cfn-cloudwatch-anomalydetector-metricstat-metric
         */
        readonly metric: cdk.IResolvable | CfnAnomalyDetector.MetricProperty;
        /**
         * The granularity, in seconds, of the returned data points.
         *
         * For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` call that includes a `StorageResolution` of 1 second.
         *
         * If the `StartTime` parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:
         *
         * - Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).
         * - Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).
         * - Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricstat.html#cfn-cloudwatch-anomalydetector-metricstat-period
         */
        readonly period: number;
        /**
         * The statistic to return.
         *
         * It can include any CloudWatch statistic or extended statistic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricstat.html#cfn-cloudwatch-anomalydetector-metricstat-stat
         */
        readonly stat: string;
        /**
         * When you are using a `Put` operation, this defines what unit you want to use when storing the metric.
         *
         * In a `Get` operation, if you omit `Unit` then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metricstat.html#cfn-cloudwatch-anomalydetector-metricstat-unit
         */
        readonly unit?: string;
    }
    /**
     * Represents a specific metric.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metric.html
     */
    interface MetricProperty {
        /**
         * The dimensions for the metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metric.html#cfn-cloudwatch-anomalydetector-metric-dimensions
         */
        readonly dimensions?: Array<CfnAnomalyDetector.DimensionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the metric.
         *
         * This is a required field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metric.html#cfn-cloudwatch-anomalydetector-metric-metricname
         */
        readonly metricName: string;
        /**
         * The namespace of the metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metric.html#cfn-cloudwatch-anomalydetector-metric-namespace
         */
        readonly namespace: string;
    }
    /**
     * A dimension is a name/value pair that is part of the identity of a metric.
     *
     * Because dimensions are part of the unique identifier for a metric, whenever you add a unique name/value pair to one of your metrics, you are creating a new variation of that metric. For example, many Amazon EC2 metrics publish `InstanceId` as a dimension name, and the actual instance ID as the value for that dimension.
     *
     * You can assign up to 30 dimensions to a metric.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-dimension.html
     */
    interface DimensionProperty {
        /**
         * The name of the dimension.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-dimension.html#cfn-cloudwatch-anomalydetector-dimension-name
         */
        readonly name: string;
        /**
         * The value of the dimension.
         *
         * Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-dimension.html#cfn-cloudwatch-anomalydetector-dimension-value
         */
        readonly value: string;
    }
    /**
     * Designates the CloudWatch metric and statistic that provides the time series the anomaly detector uses as input.
     *
     * If you have enabled unified cross-account observability, and this account is a monitoring account, the metric can be in the same account or a source account.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-singlemetricanomalydetector.html
     */
    interface SingleMetricAnomalyDetectorProperty {
        /**
         * If the CloudWatch metric that provides the time series that the anomaly detector uses as input is in another account, specify that account ID here.
         *
         * If you omit this parameter, the current account is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-singlemetricanomalydetector.html#cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-accountid
         */
        readonly accountId?: string;
        /**
         * The metric dimensions to create the anomaly detection model for.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-singlemetricanomalydetector.html#cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-dimensions
         */
        readonly dimensions?: Array<CfnAnomalyDetector.DimensionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the metric to create the anomaly detection model for.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-singlemetricanomalydetector.html#cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-metricname
         */
        readonly metricName?: string;
        /**
         * The namespace of the metric to create the anomaly detection model for.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-singlemetricanomalydetector.html#cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-namespace
         */
        readonly namespace?: string;
        /**
         * The statistic to use for the metric and anomaly detection model.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-singlemetricanomalydetector.html#cfn-cloudwatch-anomalydetector-singlemetricanomalydetector-stat
         */
        readonly stat?: string;
    }
    /**
     * This object includes parameters that you can use to provide information to CloudWatch to help it build more accurate anomaly detection models.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metriccharacteristics.html
     */
    interface MetricCharacteristicsProperty {
        /**
         * Set this parameter to true if values for this metric consistently include spikes that should not be considered to be anomalies.
         *
         * With this set to true, CloudWatch will expect to see spikes that occurred consistently during the model training period, and won't flag future similar spikes as anomalies.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-anomalydetector-metriccharacteristics.html#cfn-cloudwatch-anomalydetector-metriccharacteristics-periodicspikes
         */
        readonly periodicSpikes?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnAnomalyDetector`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-anomalydetector.html
 */
export interface CfnAnomalyDetectorProps {
    /**
     * Specifies details about how the anomaly detection model is to be trained, including time ranges to exclude when training and updating the model.
     *
     * The configuration can also include the time zone to use for the metric.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-anomalydetector.html#cfn-cloudwatch-anomalydetector-configuration
     */
    readonly configuration?: CfnAnomalyDetector.ConfigurationProperty | cdk.IResolvable;
    /**
     * The dimensions of the metric associated with the anomaly detection band.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-anomalydetector.html#cfn-cloudwatch-anomalydetector-dimensions
     */
    readonly dimensions?: Array<CfnAnomalyDetector.DimensionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Use this object to include parameters to provide information about your metric to CloudWatch to help it build more accurate anomaly detection models.
     *
     * Currently, it includes the `PeriodicSpikes` parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-anomalydetector.html#cfn-cloudwatch-anomalydetector-metriccharacteristics
     */
    readonly metricCharacteristics?: cdk.IResolvable | CfnAnomalyDetector.MetricCharacteristicsProperty;
    /**
     * The CloudWatch metric math expression for this anomaly detector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-anomalydetector.html#cfn-cloudwatch-anomalydetector-metricmathanomalydetector
     */
    readonly metricMathAnomalyDetector?: cdk.IResolvable | CfnAnomalyDetector.MetricMathAnomalyDetectorProperty;
    /**
     * The name of the metric associated with the anomaly detection band.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-anomalydetector.html#cfn-cloudwatch-anomalydetector-metricname
     */
    readonly metricName?: string;
    /**
     * The namespace of the metric associated with the anomaly detection band.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-anomalydetector.html#cfn-cloudwatch-anomalydetector-namespace
     */
    readonly namespace?: string;
    /**
     * The CloudWatch metric and statistic for this anomaly detector.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-anomalydetector.html#cfn-cloudwatch-anomalydetector-singlemetricanomalydetector
     */
    readonly singleMetricAnomalyDetector?: cdk.IResolvable | CfnAnomalyDetector.SingleMetricAnomalyDetectorProperty;
    /**
     * The statistic of the metric associated with the anomaly detection band.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-anomalydetector.html#cfn-cloudwatch-anomalydetector-stat
     */
    readonly stat?: string;
}
/**
 * The `AWS::CloudWatch::CompositeAlarm` type creates or updates a composite alarm.
 *
 * When you create a composite alarm, you specify a rule expression for the alarm that takes into account the alarm states of other alarms that you have created. The composite alarm goes into ALARM state only if all conditions of the rule are met.
 *
 * The alarms specified in a composite alarm's rule expression can include metric alarms and other composite alarms.
 *
 * Using composite alarms can reduce alarm noise. You can create multiple metric alarms, and also create a composite alarm and set up alerts only for the composite alarm. For example, you could create a composite alarm that goes into ALARM state only when more than one of the underlying metric alarms are in ALARM state.
 *
 * When this operation creates an alarm, the alarm state is immediately set to INSUFFICIENT_DATA. The alarm is then evaluated and its state is set appropriately. Any actions associated with the new state are then executed. For a composite alarm, this initial time after creation is the only time that the alarm can be in INSUFFICIENT_DATA state.
 *
 * When you update an existing alarm, its state is left unchanged, but the update completely overwrites the previous configuration of the alarm.
 *
 * @cloudformationResource AWS::CloudWatch::CompositeAlarm
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html
 */
export declare class CfnCompositeAlarm extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCompositeAlarm from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCompositeAlarm;
    /**
     * The ARN of the composite alarm, such as `arn:aws:cloudwatch:us-west-2:123456789012:alarm/CompositeAlarmName` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Indicates whether actions should be executed during any changes to the alarm state of the composite alarm.
     */
    actionsEnabled?: boolean | cdk.IResolvable;
    /**
     * Actions will be suppressed if the suppressor alarm is in the `ALARM` state.
     */
    actionsSuppressor?: string;
    /**
     * The maximum time in seconds that the composite alarm waits after suppressor alarm goes out of the `ALARM` state.
     */
    actionsSuppressorExtensionPeriod?: number;
    /**
     * The maximum time in seconds that the composite alarm waits for the suppressor alarm to go into the `ALARM` state.
     */
    actionsSuppressorWaitPeriod?: number;
    /**
     * The actions to execute when this alarm transitions to the ALARM state from any other state.
     */
    alarmActions?: Array<string>;
    /**
     * The description for the composite alarm.
     */
    alarmDescription?: string;
    /**
     * The name for the composite alarm.
     */
    alarmName?: string;
    /**
     * An expression that specifies which other alarms are to be evaluated to determine this composite alarm's state.
     */
    alarmRule: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.
     */
    insufficientDataActions?: Array<string>;
    /**
     * The actions to execute when this alarm transitions to the OK state from any other state.
     */
    okActions?: Array<string>;
    /**
     * A list of key-value pairs to associate with the alarm.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCompositeAlarmProps);
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
 * Properties for defining a `CfnCompositeAlarm`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html
 */
export interface CfnCompositeAlarmProps {
    /**
     * Indicates whether actions should be executed during any changes to the alarm state of the composite alarm.
     *
     * The default is TRUE.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-actionsenabled
     */
    readonly actionsEnabled?: boolean | cdk.IResolvable;
    /**
     * Actions will be suppressed if the suppressor alarm is in the `ALARM` state.
     *
     * `ActionsSuppressor` can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-actionssuppressor
     */
    readonly actionsSuppressor?: string;
    /**
     * The maximum time in seconds that the composite alarm waits after suppressor alarm goes out of the `ALARM` state.
     *
     * After this time, the composite alarm performs its actions.
     *
     * > `ExtensionPeriod` is required only when `ActionsSuppressor` is specified.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-actionssuppressorextensionperiod
     */
    readonly actionsSuppressorExtensionPeriod?: number;
    /**
     * The maximum time in seconds that the composite alarm waits for the suppressor alarm to go into the `ALARM` state.
     *
     * After this time, the composite alarm performs its actions.
     *
     * > `WaitPeriod` is required only when `ActionsSuppressor` is specified.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-actionssuppressorwaitperiod
     */
    readonly actionsSuppressorWaitPeriod?: number;
    /**
     * The actions to execute when this alarm transitions to the ALARM state from any other state.
     *
     * Each action is specified as an Amazon Resource Name (ARN). For more information about creating alarms and the actions that you can specify, see [PutCompositeAlarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutCompositeAlarm.html) in the *Amazon CloudWatch API Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-alarmactions
     */
    readonly alarmActions?: Array<string>;
    /**
     * The description for the composite alarm.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-alarmdescription
     */
    readonly alarmDescription?: string;
    /**
     * The name for the composite alarm.
     *
     * This name must be unique within your AWS account.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-alarmname
     */
    readonly alarmName?: string;
    /**
     * An expression that specifies which other alarms are to be evaluated to determine this composite alarm's state.
     *
     * For each alarm that you reference, you designate a function that specifies whether that alarm needs to be in ALARM state, OK state, or INSUFFICIENT_DATA state. You can use operators (AND, OR and NOT) to combine multiple functions in a single expression. You can use parenthesis to logically group the functions in your expression.
     *
     * You can use either alarm names or ARNs to reference the other alarms that are to be evaluated.
     *
     * Functions can include the following:
     *
     * - ALARM("alarm-name or alarm-ARN") is TRUE if the named alarm is in ALARM state.
     * - OK("alarm-name or alarm-ARN") is TRUE if the named alarm is in OK state.
     * - INSUFFICIENT_DATA("alarm-name or alarm-ARN") is TRUE if the named alarm is in INSUFFICIENT_DATA state.
     * - TRUE always evaluates to TRUE.
     * - FALSE always evaluates to FALSE.
     *
     * TRUE and FALSE are useful for testing a complex AlarmRule structure, and for testing your alarm actions.
     *
     * For more information about `AlarmRule` syntax, see [PutCompositeAlarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutCompositeAlarm.html) in the *Amazon CloudWatch API Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-alarmrule
     */
    readonly alarmRule: string;
    /**
     * The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.
     *
     * Each action is specified as an Amazon Resource Name (ARN). For more information about creating alarms and the actions that you can specify, see [PutCompositeAlarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutCompositeAlarm.html) in the *Amazon CloudWatch API Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-insufficientdataactions
     */
    readonly insufficientDataActions?: Array<string>;
    /**
     * The actions to execute when this alarm transitions to the OK state from any other state.
     *
     * Each action is specified as an Amazon Resource Name (ARN). For more information about creating alarms and the actions that you can specify, see [PutCompositeAlarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutCompositeAlarm.html) in the *Amazon CloudWatch API Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-okactions
     */
    readonly okActions?: Array<string>;
    /**
     * A list of key-value pairs to associate with the alarm.
     *
     * You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the `cloudwatch:TagResource` permission.
     *
     * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-compositealarm.html#cfn-cloudwatch-compositealarm-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::CloudWatch::Dashboard` resource specifies an Amazon CloudWatch dashboard.
 *
 * A dashboard is a customizable home page in the CloudWatch console that you can use to monitor your AWS resources in a single view.
 *
 * All dashboards in your account are global, not region-specific.
 *
 * @cloudformationResource AWS::CloudWatch::Dashboard
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html
 */
export declare class CfnDashboard extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDashboard from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDashboard;
    /**
     * The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard.
     */
    dashboardBody: string;
    /**
     * The name of the dashboard.
     */
    dashboardName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDashboardProps);
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
 * Properties for defining a `CfnDashboard`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html
 */
export interface CfnDashboardProps {
    /**
     * The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard.
     *
     * This parameter is required.
     *
     * For more information about the syntax, see [Dashboard Body Structure and Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html#cfn-cloudwatch-dashboard-dashboardbody
     */
    readonly dashboardBody: string;
    /**
     * The name of the dashboard.
     *
     * The name must be between 1 and 255 characters. If you do not specify a name, one will be generated automatically.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-dashboard.html#cfn-cloudwatch-dashboard-dashboardname
     */
    readonly dashboardName?: string;
}
/**
 * Creates or updates a Contributor Insights rule.
 *
 * Rules evaluate log events in a CloudWatch Logs log group, enabling you to find contributor data for the log events in that log group. For more information, see [Using Contributor Insights to Analyze High-Cardinality Data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights.html) in the *Amazon CloudWatch User Guide* .
 *
 * @cloudformationResource AWS::CloudWatch::InsightRule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html
 */
export declare class CfnInsightRule extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInsightRule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInsightRule;
    /**
     * The ARN of the Contributor Insights rule, such as `arn:aws:cloudwatch:us-west-2:123456789012:insight-rule/MyInsightRuleName` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the Contributor Insights rule.
     *
     * @cloudformationAttribute RuleName
     */
    readonly attrRuleName: string;
    /**
     * The definition of the rule, as a JSON object.
     */
    ruleBody: string;
    /**
     * The name of the rule.
     */
    ruleName: string;
    /**
     * The current state of the rule.
     */
    ruleState: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of key-value pairs to associate with the Contributor Insights rule.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnInsightRuleProps);
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
 * Properties for defining a `CfnInsightRule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html
 */
export interface CfnInsightRuleProps {
    /**
     * The definition of the rule, as a JSON object.
     *
     * For details about the syntax, see [Contributor Insights Rule Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContributorInsights-RuleSyntax.html) in the *Amazon CloudWatch User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html#cfn-cloudwatch-insightrule-rulebody
     */
    readonly ruleBody: string;
    /**
     * The name of the rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html#cfn-cloudwatch-insightrule-rulename
     */
    readonly ruleName: string;
    /**
     * The current state of the rule.
     *
     * Valid values are `ENABLED` and `DISABLED` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html#cfn-cloudwatch-insightrule-rulestate
     */
    readonly ruleState: string;
    /**
     * A list of key-value pairs to associate with the Contributor Insights rule.
     *
     * You can associate as many as 50 tags with a rule.
     *
     * Tags can help you organize and categorize your resources. For more information, see [Tagging Your Amazon CloudWatch Resources](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Tagging.html) .
     *
     * To be able to associate tags with a rule, you must have the `cloudwatch:TagResource` permission in addition to the `cloudwatch:PutInsightRule` permission.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-insightrule.html#cfn-cloudwatch-insightrule-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates or updates a metric stream.
 *
 * Metrics streams can automatically stream CloudWatch metrics to AWS destinations including Amazon S3 and to many third-party solutions. For more information, see [Metric streams](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Metric-Streams.html) .
 *
 * To create a metric stream, you must be logged on to an account that has the `iam:PassRole` permission and either the *CloudWatchFullAccess* policy or the `cloudwatch:PutMetricStream` permission.
 *
 * When you create or update a metric stream, you choose one of the following:
 *
 * - Stream metrics from all metric namespaces in the account.
 * - Stream metrics from all metric namespaces in the account, except for the namespaces that you list in `ExcludeFilters` .
 * - Stream metrics from only the metric namespaces that you list in `IncludeFilters` .
 *
 * When you create a metric stream, the stream is created in the `running` state. If you update an existing metric stream, the state does not change.
 *
 * If you create a metric stream in an account that has been set up as a monitoring account in CloudWatch cross-account observability, you can choose whether to include metrics from linked source accounts in the metric stream.
 *
 * @cloudformationResource AWS::CloudWatch::MetricStream
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html
 */
export declare class CfnMetricStream extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMetricStream from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMetricStream;
    /**
     * The ARN of the metric stream.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date that the metric stream was originally created.
     *
     * @cloudformationAttribute CreationDate
     */
    readonly attrCreationDate: string;
    /**
     * The date that the metric stream was most recently updated.
     *
     * @cloudformationAttribute LastUpdateDate
     */
    readonly attrLastUpdateDate: string;
    /**
     * The state of the metric stream, either `running` or `stopped` .
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * If you specify this parameter, the stream sends metrics from all metric namespaces except for the namespaces that you specify here.
     */
    excludeFilters?: Array<cdk.IResolvable | CfnMetricStream.MetricStreamFilterProperty> | cdk.IResolvable;
    /**
     * The ARN of the Amazon Kinesis Firehose delivery stream to use for this metric stream.
     */
    firehoseArn: string;
    /**
     * If you specify this parameter, the stream sends only the metrics from the metric namespaces that you specify here.
     */
    includeFilters?: Array<cdk.IResolvable | CfnMetricStream.MetricStreamFilterProperty> | cdk.IResolvable;
    /**
     * If you are creating a metric stream in a monitoring account, specify `true` to include metrics from source accounts that are linked to this monitoring account, in the metric stream.
     */
    includeLinkedAccountsMetrics?: boolean | cdk.IResolvable;
    /**
     * If you are creating a new metric stream, this is the name for the new stream.
     */
    name?: string;
    /**
     * The output format for the stream.
     */
    outputFormat: string;
    /**
     * The ARN of an IAM role that this metric stream will use to access Amazon Kinesis Firehose resources.
     */
    roleArn: string;
    /**
     * By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed.
     */
    statisticsConfigurations?: Array<cdk.IResolvable | CfnMetricStream.MetricStreamStatisticsConfigurationProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to the metric stream.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMetricStreamProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMetricStream {
    /**
     * This structure specifies a list of additional statistics to stream, and the metrics to stream those additional statistics for.
     *
     * All metrics that match the combination of metric name and namespace will be streamed with the additional statistics, no matter their dimensions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamstatisticsconfiguration.html
     */
    interface MetricStreamStatisticsConfigurationProperty {
        /**
         * The additional statistics to stream for the metrics listed in `IncludeMetrics` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamstatisticsconfiguration.html#cfn-cloudwatch-metricstream-metricstreamstatisticsconfiguration-additionalstatistics
         */
        readonly additionalStatistics: Array<string>;
        /**
         * An array that defines the metrics that are to have additional statistics streamed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamstatisticsconfiguration.html#cfn-cloudwatch-metricstream-metricstreamstatisticsconfiguration-includemetrics
         */
        readonly includeMetrics: Array<cdk.IResolvable | CfnMetricStream.MetricStreamStatisticsMetricProperty> | cdk.IResolvable;
    }
    /**
     * A structure that specifies the metric name and namespace for one metric that is going to have additional statistics included in the stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamstatisticsmetric.html
     */
    interface MetricStreamStatisticsMetricProperty {
        /**
         * The name of the metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamstatisticsmetric.html#cfn-cloudwatch-metricstream-metricstreamstatisticsmetric-metricname
         */
        readonly metricName: string;
        /**
         * The namespace of the metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamstatisticsmetric.html#cfn-cloudwatch-metricstream-metricstreamstatisticsmetric-namespace
         */
        readonly namespace: string;
    }
    /**
     * This structure contains a metric namespace and optionally, a list of metric names, to either include in a metric ' stream or exclude from a metric stream.
     *
     * A metric stream's filters can include up to 1000 total names. This limit applies to the sum of namespace names and metric names in the filters. For example, this could include 10 metric namespace filters with 99 metrics each, or 20 namespace filters with 49 metrics specified in each filter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamfilter.html
     */
    interface MetricStreamFilterProperty {
        /**
         * The names of the metrics to either include or exclude from the metric stream.
         *
         * If you omit this parameter, all metrics in the namespace are included or excluded, depending on whether this filter is specified as an exclude filter or an include filter.
         *
         * Each metric name can contain only ASCII printable characters (ASCII range 32 through 126). Each metric name must contain at least one non-whitespace character.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamfilter.html#cfn-cloudwatch-metricstream-metricstreamfilter-metricnames
         */
        readonly metricNames?: Array<string>;
        /**
         * The name of the metric namespace in the filter.
         *
         * The namespace can contain only ASCII printable characters (ASCII range 32 through 126). It must contain at least one non-whitespace character.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudwatch-metricstream-metricstreamfilter.html#cfn-cloudwatch-metricstream-metricstreamfilter-namespace
         */
        readonly namespace: string;
    }
}
/**
 * Properties for defining a `CfnMetricStream`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html
 */
export interface CfnMetricStreamProps {
    /**
     * If you specify this parameter, the stream sends metrics from all metric namespaces except for the namespaces that you specify here.
     *
     * You cannot specify both `IncludeFilters` and `ExcludeFilters` in the same metric stream.
     *
     * When you modify the `IncludeFilters` or `ExcludeFilters` of an existing metric stream in any way, the metric stream is effectively restarted, so after such a change you will get only the datapoints that have a timestamp after the time of the update.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-excludefilters
     */
    readonly excludeFilters?: Array<cdk.IResolvable | CfnMetricStream.MetricStreamFilterProperty> | cdk.IResolvable;
    /**
     * The ARN of the Amazon Kinesis Firehose delivery stream to use for this metric stream.
     *
     * This Amazon Kinesis Firehose delivery stream must already exist and must be in the same account as the metric stream.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-firehosearn
     */
    readonly firehoseArn: string;
    /**
     * If you specify this parameter, the stream sends only the metrics from the metric namespaces that you specify here.
     *
     * You cannot specify both `IncludeFilters` and `ExcludeFilters` in the same metric stream.
     *
     * When you modify the `IncludeFilters` or `ExcludeFilters` of an existing metric stream in any way, the metric stream is effectively restarted, so after such a change you will get only the datapoints that have a timestamp after the time of the update.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-includefilters
     */
    readonly includeFilters?: Array<cdk.IResolvable | CfnMetricStream.MetricStreamFilterProperty> | cdk.IResolvable;
    /**
     * If you are creating a metric stream in a monitoring account, specify `true` to include metrics from source accounts that are linked to this monitoring account, in the metric stream.
     *
     * The default is `false` .
     *
     * For more information about linking accounts, see [CloudWatch cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-includelinkedaccountsmetrics
     */
    readonly includeLinkedAccountsMetrics?: boolean | cdk.IResolvable;
    /**
     * If you are creating a new metric stream, this is the name for the new stream.
     *
     * The name must be different than the names of other metric streams in this account and Region.
     *
     * If you are updating a metric stream, specify the name of that stream here.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-name
     */
    readonly name?: string;
    /**
     * The output format for the stream.
     *
     * Valid values are `json` , `opentelemetry1.0` and `opentelemetry0.7` For more information about metric stream output formats, see [Metric streams output formats](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-metric-streams-formats.html) .
     *
     * This parameter is required.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-outputformat
     */
    readonly outputFormat: string;
    /**
     * The ARN of an IAM role that this metric stream will use to access Amazon Kinesis Firehose resources.
     *
     * This IAM role must already exist and must be in the same account as the metric stream. This IAM role must include the `firehose:PutRecord` and `firehose:PutRecordBatch` permissions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-rolearn
     */
    readonly roleArn: string;
    /**
     * By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed.
     *
     * You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.
     *
     * For each entry in this array, you specify one or more metrics and the list of additional statistics to stream for those metrics. The additional statistics that you can stream depend on the stream's `OutputFormat` . If the `OutputFormat` is `json` , you can stream any additional statistic that is supported by CloudWatch , listed in [CloudWatch statistics definitions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html) . If the `OutputFormat` is OpenTelemetry, you can stream percentile statistics.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-statisticsconfigurations
     */
    readonly statisticsConfigurations?: Array<cdk.IResolvable | CfnMetricStream.MetricStreamStatisticsConfigurationProperty> | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to the metric stream.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudwatch-metricstream.html#cfn-cloudwatch-metricstream-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
