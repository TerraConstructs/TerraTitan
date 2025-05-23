import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates or updates a service level objective (SLO), which can help you ensure that your critical business operations are meeting customer expectations.
 *
 * Use SLOs to set and track specific target levels for the reliability and availability of your applications and services. SLOs use service level indicators (SLIs) to calculate whether the application is performing at the level that you want.
 *
 * Create an SLO to set a target for a service or operation’s availability or latency. CloudWatch measures this target frequently you can find whether it has been breached.
 *
 * The target performance quality that is defined for an SLO is the *attainment goal* . An attainment goal is the percentage of time or requests that the SLI is expected to meet the threshold over each time interval. For example, an attainment goal of 99.9% means that within your interval, you are targeting 99.9% of the periods to be in healthy state.
 *
 * When you create an SLO, you specify whether it is a *period-based SLO* or a *request-based SLO* . Each type of SLO has a different way of evaluating your application's performance against its attainment goal.
 *
 * - A *period-based SLO* uses defined *periods* of time within a specified total time interval. For each period of time, Application Signals determines whether the application met its goal. The attainment rate is calculated as the `number of good periods/number of total periods` .
 *
 * For example, for a period-based SLO, meeting an attainment goal of 99.9% means that within your interval, your application must meet its performance goal during at least 99.9% of the time periods.
 * - A *request-based SLO* doesn't use pre-defined periods of time. Instead, the SLO measures `number of good requests/number of total requests` during the interval. At any time, you can find the ratio of good requests to total requests for the interval up to the time stamp that you specify, and measure that ratio against the goal set in your SLO.
 *
 * After you have created an SLO, you can retrieve error budget reports for it. An *error budget* is the amount of time or amount of requests that your application can be non-compliant with the SLO's goal, and still have your application meet the goal.
 *
 * - For a period-based SLO, the error budget starts at a number defined by the highest number of periods that can fail to meet the threshold, while still meeting the overall goal. The *remaining error budget* decreases with every failed period that is recorded. The error budget within one interval can never increase.
 *
 * For example, an SLO with a threshold that 99.95% of requests must be completed under 2000ms every month translates to an error budget of 21.9 minutes of downtime per month.
 * - For a request-based SLO, the remaining error budget is dynamic and can increase or decrease, depending on the ratio of good requests to total requests.
 *
 * When you call this operation, Application Signals creates the *AWSServiceRoleForCloudWatchApplicationSignals* service-linked role, if it doesn't already exist in your account. This service- linked role has the following permissions:
 *
 * - `xray:GetServiceGraph`
 * - `logs:StartQuery`
 * - `logs:GetQueryResults`
 * - `cloudwatch:GetMetricData`
 * - `cloudwatch:ListMetrics`
 * - `tag:GetResources`
 * - `autoscaling:DescribeAutoScalingGroups`
 *
 * You can easily set SLO targets for your applications that are discovered by Application Signals, using critical metrics such as latency and availability. You can also set SLOs against any CloudWatch metric or math expression that produces a time series.
 *
 * > You can't create an SLO for a service operation that was discovered by Application Signals until after that operation has reported standard metrics to Application Signals.
 *
 * You cannot change from a period-based SLO to a request-based SLO, or change from a request-based SLO to a period-based SLO.
 *
 * For more information about SLOs, see [Service level objectives (SLOs)](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-ServiceLevelObjectives.html) .
 *
 * @cloudformationResource AWS::ApplicationSignals::ServiceLevelObjective
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-servicelevelobjective.html
 */
export declare class CfnServiceLevelObjective extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnServiceLevelObjective from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnServiceLevelObjective;
    /**
     * The ARN of this SLO.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time that this SLO was created.
     *
     * @cloudformationAttribute CreatedTime
     */
    readonly attrCreatedTime: number;
    /**
     * Displays whether this is a period-based SLO or a request-based SLO.
     *
     * @cloudformationAttribute EvaluationType
     */
    readonly attrEvaluationType: string;
    /**
     * The time that this SLO was most recently updated.
     *
     * @cloudformationAttribute LastUpdatedTime
     */
    readonly attrLastUpdatedTime: number;
    /**
     * Each object in this array defines the length of the look-back window used to calculate one burn rate metric for this SLO.
     */
    burnRateConfigurations?: Array<CfnServiceLevelObjective.BurnRateConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * An optional description for this SLO.
     */
    description?: string;
    /**
     * This structure contains the attributes that determine the goal of an SLO.
     */
    goal?: CfnServiceLevelObjective.GoalProperty | cdk.IResolvable;
    /**
     * A name for this SLO.
     */
    name: string;
    /**
     * A structure containing information about the performance metric that this SLO monitors, if this is a request-based SLO.
     */
    requestBasedSli?: cdk.IResolvable | CfnServiceLevelObjective.RequestBasedSliProperty;
    /**
     * A structure containing information about the performance metric that this SLO monitors, if this is a period-based SLO.
     */
    sli?: cdk.IResolvable | CfnServiceLevelObjective.SliProperty;
    /**
     * A list of key-value pairs to associate with the SLO.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnServiceLevelObjectiveProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnServiceLevelObjective {
    /**
     * This structure specifies the information about the service and the performance metric that an SLO is to monitor.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-sli.html
     */
    interface SliProperty {
        /**
         * The arithmetic operation to use when comparing the specified metric to the threshold.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-sli.html#cfn-applicationsignals-servicelevelobjective-sli-comparisonoperator
         */
        readonly comparisonOperator: string;
        /**
         * The value that the SLI metric is compared to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-sli.html#cfn-applicationsignals-servicelevelobjective-sli-metricthreshold
         */
        readonly metricThreshold: number;
        /**
         * Use this structure to specify the metric to be used for the SLO.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-sli.html#cfn-applicationsignals-servicelevelobjective-sli-slimetric
         */
        readonly sliMetric: cdk.IResolvable | CfnServiceLevelObjective.SliMetricProperty;
    }
    /**
     * Use this structure to specify the metric to be used for the SLO.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-slimetric.html
     */
    interface SliMetricProperty {
        /**
         * If this SLO is related to a metric collected by Application Signals, you must use this field to specify which service the SLO metric is related to.
         *
         * To do so, you must specify at least the `Type` , `Name` , and `Environment` attributes.
         *
         * This is a string-to-string map. It can include the following fields.
         *
         * - `Type` designates the type of object this is.
         * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource` .
         * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service` , `RemoteService` , or `AWS::Service` .
         * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource` .
         * - `Environment` specifies the location where this object is hosted, or what it belongs to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-slimetric.html#cfn-applicationsignals-servicelevelobjective-slimetric-keyattributes
         */
        readonly keyAttributes?: cdk.IResolvable | Record<string, string>;
        /**
         * If this SLO monitors a CloudWatch metric or the result of a CloudWatch metric math expression, use this structure to specify that metric or expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-slimetric.html#cfn-applicationsignals-servicelevelobjective-slimetric-metricdataqueries
         */
        readonly metricDataQueries?: Array<cdk.IResolvable | CfnServiceLevelObjective.MetricDataQueryProperty> | cdk.IResolvable;
        /**
         * If the SLO is to monitor either the `LATENCY` or `AVAILABILITY` metric that Application Signals collects, use this field to specify which of those metrics is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-slimetric.html#cfn-applicationsignals-servicelevelobjective-slimetric-metrictype
         */
        readonly metricType?: string;
        /**
         * If the SLO is to monitor a specific operation of the service, use this field to specify the name of that operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-slimetric.html#cfn-applicationsignals-servicelevelobjective-slimetric-operationname
         */
        readonly operationName?: string;
        /**
         * The number of seconds to use as the period for SLO evaluation.
         *
         * Your application's performance is compared to the SLI during each period. For each period, the application is determined to have either achieved or not achieved the necessary performance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-slimetric.html#cfn-applicationsignals-servicelevelobjective-slimetric-periodseconds
         */
        readonly periodSeconds?: number;
        /**
         * The statistic to use for comparison to the threshold.
         *
         * It can be any CloudWatch statistic or extended statistic. For more information about statistics, see [CloudWatch statistics definitions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-slimetric.html#cfn-applicationsignals-servicelevelobjective-slimetric-statistic
         */
        readonly statistic?: string;
    }
    /**
     * Use this structure to define a metric or metric math expression that you want to use as for a service level objective.
     *
     * Each `MetricDataQuery` in the `MetricDataQueries` array specifies either a metric to retrieve, or a metric math expression to be performed on retrieved metrics. A single `MetricDataQueries` array can include as many as 20 `MetricDataQuery` structures in the array. The 20 structures can include as many as 10 structures that contain a `MetricStat` parameter to retrieve a metric, and as many as 10 structures that contain the `Expression` parameter to perform a math expression. Of those `Expression` structures, exactly one must have true as the value for `ReturnData` . The result of this expression used for the SLO.
     *
     * For more information about metric math expressions, see [Use metric math](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html) .
     *
     * Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat` but not both.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metricdataquery.html
     */
    interface MetricDataQueryProperty {
        /**
         * The ID of the account where this metric is located.
         *
         * If you are performing this operation in a monitoring account, use this to specify which source account to retrieve this metric from.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metricdataquery.html#cfn-applicationsignals-servicelevelobjective-metricdataquery-accountid
         */
        readonly accountId?: string;
        /**
         * This field can contain a metric math expression to be performed on the other metrics that you are retrieving within this `MetricDataQueries` structure.
         *
         * A math expression can use the `Id` of the other metrics or queries to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions. For more information about metric math expressions, see [Metric Math Syntax and Functions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax) in the *Amazon CloudWatch User Guide* .
         *
         * Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat` but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metricdataquery.html#cfn-applicationsignals-servicelevelobjective-metricdataquery-expression
         */
        readonly expression?: string;
        /**
         * A short name used to tie this object to the results in the response.
         *
         * This `Id` must be unique within a `MetricDataQueries` array. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the metric math expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metricdataquery.html#cfn-applicationsignals-servicelevelobjective-metricdataquery-id
         */
        readonly id: string;
        /**
         * A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO.
         *
         * Within one `MetricDataQuery` object, you must specify either `Expression` or `MetricStat` but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metricdataquery.html#cfn-applicationsignals-servicelevelobjective-metricdataquery-metricstat
         */
        readonly metricStat?: cdk.IResolvable | CfnServiceLevelObjective.MetricStatProperty;
        /**
         * Use this only if you are using a metric math expression for the SLO.
         *
         * Specify `true` for `ReturnData` for only the one expression result to use as the alarm. For all other metrics and expressions in the same `CreateServiceLevelObjective` operation, specify `ReturnData` as `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metricdataquery.html#cfn-applicationsignals-servicelevelobjective-metricdataquery-returndata
         */
        readonly returnData?: boolean | cdk.IResolvable;
    }
    /**
     * This structure defines the metric to be used as the service level indicator, along with the statistics, period, and unit.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metricstat.html
     */
    interface MetricStatProperty {
        /**
         * The metric to use as the service level indicator, including the metric name, namespace, and dimensions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metricstat.html#cfn-applicationsignals-servicelevelobjective-metricstat-metric
         */
        readonly metric: cdk.IResolvable | CfnServiceLevelObjective.MetricProperty;
        /**
         * The granularity, in seconds, to be used for the metric.
         *
         * For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a `PutMetricData` call that includes a `StorageResolution` of 1 second.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metricstat.html#cfn-applicationsignals-servicelevelobjective-metricstat-period
         */
        readonly period: number;
        /**
         * The statistic to use for comparison to the threshold.
         *
         * It can be any CloudWatch statistic or extended statistic. For more information about statistics, see [CloudWatch statistics definitions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metricstat.html#cfn-applicationsignals-servicelevelobjective-metricstat-stat
         */
        readonly stat: string;
        /**
         * If you omit `Unit` then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch.
         *
         * If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metricstat.html#cfn-applicationsignals-servicelevelobjective-metricstat-unit
         */
        readonly unit?: string;
    }
    /**
     * This structure defines the metric used for a service level indicator, including the metric name, namespace, and dimensions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metric.html
     */
    interface MetricProperty {
        /**
         * An array of one or more dimensions to use to define the metric that you want to use.
         *
         * For more information, see [Dimensions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Dimension) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metric.html#cfn-applicationsignals-servicelevelobjective-metric-dimensions
         */
        readonly dimensions?: Array<CfnServiceLevelObjective.DimensionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The name of the metric to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metric.html#cfn-applicationsignals-servicelevelobjective-metric-metricname
         */
        readonly metricName?: string;
        /**
         * The namespace of the metric.
         *
         * For more information, see [Namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-metric.html#cfn-applicationsignals-servicelevelobjective-metric-namespace
         */
        readonly namespace?: string;
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
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-dimension.html
     */
    interface DimensionProperty {
        /**
         * The name of the dimension.
         *
         * Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon ( `:` ). ASCII control characters are not supported as part of dimension names.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-dimension.html#cfn-applicationsignals-servicelevelobjective-dimension-name
         */
        readonly name: string;
        /**
         * The value of the dimension.
         *
         * Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-dimension.html#cfn-applicationsignals-servicelevelobjective-dimension-value
         */
        readonly value: string;
    }
    /**
     * This structure contains information about the performance metric that a request-based SLO monitors.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-requestbasedsli.html
     */
    interface RequestBasedSliProperty {
        /**
         * The arithmetic operation used when comparing the specified metric to the threshold.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-requestbasedsli.html#cfn-applicationsignals-servicelevelobjective-requestbasedsli-comparisonoperator
         */
        readonly comparisonOperator?: string;
        /**
         * This value is the threshold that the observed metric values of the SLI metric are compared to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-requestbasedsli.html#cfn-applicationsignals-servicelevelobjective-requestbasedsli-metricthreshold
         */
        readonly metricThreshold?: number;
        /**
         * A structure that contains information about the metric that the SLO monitors.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-requestbasedsli.html#cfn-applicationsignals-servicelevelobjective-requestbasedsli-requestbasedslimetric
         */
        readonly requestBasedSliMetric: cdk.IResolvable | CfnServiceLevelObjective.RequestBasedSliMetricProperty;
    }
    /**
     * This structure contains the information about the metric that is used for a request-based SLO.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-requestbasedslimetric.html
     */
    interface RequestBasedSliMetricProperty {
        /**
         * This is a string-to-string map that contains information about the type of object that this SLO is related to.
         *
         * It can include the following fields.
         *
         * - `Type` designates the type of object that this SLO is related to.
         * - `ResourceType` specifies the type of the resource. This field is used only when the value of the `Type` field is `Resource` or `AWS::Resource` .
         * - `Name` specifies the name of the object. This is used only if the value of the `Type` field is `Service` , `RemoteService` , or `AWS::Service` .
         * - `Identifier` identifies the resource objects of this resource. This is used only if the value of the `Type` field is `Resource` or `AWS::Resource` .
         * - `Environment` specifies the location where this object is hosted, or what it belongs to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-requestbasedslimetric.html#cfn-applicationsignals-servicelevelobjective-requestbasedslimetric-keyattributes
         */
        readonly keyAttributes?: cdk.IResolvable | Record<string, string>;
        /**
         * If the SLO monitors either the `LATENCY` or `AVAILABILITY` metric that Application Signals collects, this field displays which of those metrics is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-requestbasedslimetric.html#cfn-applicationsignals-servicelevelobjective-requestbasedslimetric-metrictype
         */
        readonly metricType?: string;
        /**
         * Use this structure to define the metric that you want to use as the "good request" or "bad request" value for a request-based SLO.
         *
         * This value observed for the metric defined in `TotalRequestCountMetric` will be divided by the number found for `MonitoredRequestCountMetric` to determine the percentage of successful requests that this SLO tracks.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-requestbasedslimetric.html#cfn-applicationsignals-servicelevelobjective-requestbasedslimetric-monitoredrequestcountmetric
         */
        readonly monitoredRequestCountMetric?: cdk.IResolvable | CfnServiceLevelObjective.MonitoredRequestCountMetricProperty;
        /**
         * If the SLO monitors a specific operation of the service, this field displays that operation name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-requestbasedslimetric.html#cfn-applicationsignals-servicelevelobjective-requestbasedslimetric-operationname
         */
        readonly operationName?: string;
        /**
         * This structure defines the metric that is used as the "total requests" number for a request-based SLO.
         *
         * The number observed for this metric is divided by the number of "good requests" or "bad requests" that is observed for the metric defined in `MonitoredRequestCountMetric` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-requestbasedslimetric.html#cfn-applicationsignals-servicelevelobjective-requestbasedslimetric-totalrequestcountmetric
         */
        readonly totalRequestCountMetric?: Array<cdk.IResolvable | CfnServiceLevelObjective.MetricDataQueryProperty> | cdk.IResolvable;
    }
    /**
     * This structure defines the metric that is used as the "good request" or "bad request" value for a request-based SLO.
     *
     * This value observed for the metric defined in `TotalRequestCountMetric` is divided by the number found for `MonitoredRequestCountMetric` to determine the percentage of successful requests that this SLO tracks.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-monitoredrequestcountmetric.html
     */
    interface MonitoredRequestCountMetricProperty {
        /**
         * If you want to count "bad requests" to determine the percentage of successful requests for this request-based SLO, specify the metric to use as "bad requests" in this structure.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-monitoredrequestcountmetric.html#cfn-applicationsignals-servicelevelobjective-monitoredrequestcountmetric-badcountmetric
         */
        readonly badCountMetric?: Array<cdk.IResolvable | CfnServiceLevelObjective.MetricDataQueryProperty> | cdk.IResolvable;
        /**
         * If you want to count "good requests" to determine the percentage of successful requests for this request-based SLO, specify the metric to use as "good requests" in this structure.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-monitoredrequestcountmetric.html#cfn-applicationsignals-servicelevelobjective-monitoredrequestcountmetric-goodcountmetric
         */
        readonly goodCountMetric?: Array<cdk.IResolvable | CfnServiceLevelObjective.MetricDataQueryProperty> | cdk.IResolvable;
    }
    /**
     * This structure contains the attributes that determine the goal of an SLO.
     *
     * This includes the time period for evaluation and the attainment threshold.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-goal.html
     */
    interface GoalProperty {
        /**
         * The threshold that determines if the goal is being met.
         *
         * If this is a period-based SLO, the attainment goal is the percentage of good periods that meet the threshold requirements to the total periods within the interval. For example, an attainment goal of 99.9% means that within your interval, you are targeting 99.9% of the periods to be in healthy state.
         *
         * If this is a request-based SLO, the attainment goal is the percentage of requests that must be successful to meet the attainment goal.
         *
         * If you omit this parameter, 99 is used to represent 99% as the attainment goal.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-goal.html#cfn-applicationsignals-servicelevelobjective-goal-attainmentgoal
         */
        readonly attainmentGoal?: number;
        /**
         * The time period used to evaluate the SLO. It can be either a calendar interval or rolling interval.
         *
         * If you omit this parameter, a rolling interval of 7 days is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-goal.html#cfn-applicationsignals-servicelevelobjective-goal-interval
         */
        readonly interval?: CfnServiceLevelObjective.IntervalProperty | cdk.IResolvable;
        /**
         * The percentage of remaining budget over total budget that you want to get warnings for.
         *
         * If you omit this parameter, the default of 50.0 is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-goal.html#cfn-applicationsignals-servicelevelobjective-goal-warningthreshold
         */
        readonly warningThreshold?: number;
    }
    /**
     * The time period used to evaluate the SLO.
     *
     * It can be either a calendar interval or rolling interval.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-interval.html
     */
    interface IntervalProperty {
        /**
         * If the interval is a calendar interval, this structure contains the interval specifications.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-interval.html#cfn-applicationsignals-servicelevelobjective-interval-calendarinterval
         */
        readonly calendarInterval?: CfnServiceLevelObjective.CalendarIntervalProperty | cdk.IResolvable;
        /**
         * If the interval is a rolling interval, this structure contains the interval specifications.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-interval.html#cfn-applicationsignals-servicelevelobjective-interval-rollinginterval
         */
        readonly rollingInterval?: cdk.IResolvable | CfnServiceLevelObjective.RollingIntervalProperty;
    }
    /**
     * If the interval for this SLO is a rolling interval, this structure contains the interval specifications.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-rollinginterval.html
     */
    interface RollingIntervalProperty {
        /**
         * Specifies the duration of each rolling interval.
         *
         * For example, if `Duration` is `7` and `DurationUnit` is `DAY` , each rolling interval is seven days.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-rollinginterval.html#cfn-applicationsignals-servicelevelobjective-rollinginterval-duration
         */
        readonly duration: number;
        /**
         * Specifies the rolling interval unit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-rollinginterval.html#cfn-applicationsignals-servicelevelobjective-rollinginterval-durationunit
         */
        readonly durationUnit: string;
    }
    /**
     * If the interval for this service level objective is a calendar interval, this structure contains the interval specifications.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-calendarinterval.html
     */
    interface CalendarIntervalProperty {
        /**
         * Specifies the duration of each calendar interval.
         *
         * For example, if `Duration` is `1` and `DurationUnit` is `MONTH` , each interval is one month, aligned with the calendar.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-calendarinterval.html#cfn-applicationsignals-servicelevelobjective-calendarinterval-duration
         */
        readonly duration: number;
        /**
         * Specifies the calendar interval unit.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-calendarinterval.html#cfn-applicationsignals-servicelevelobjective-calendarinterval-durationunit
         */
        readonly durationUnit: string;
        /**
         * The date and time when you want the first interval to start.
         *
         * Be sure to choose a time that configures the intervals the way that you want. For example, if you want weekly intervals starting on Mondays at 6 a.m., be sure to specify a start time that is a Monday at 6 a.m.
         *
         * When used in a raw HTTP Query API, it is formatted as be epoch time in seconds. For example: `1698778057`
         *
         * As soon as one calendar interval ends, another automatically begins.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-calendarinterval.html#cfn-applicationsignals-servicelevelobjective-calendarinterval-starttime
         */
        readonly startTime: number;
    }
    /**
     * This object defines the length of the look-back window used to calculate one burn rate metric for this SLO.
     *
     * The burn rate measures how fast the service is consuming the error budget, relative to the attainment goal of the SLO. A burn rate of exactly 1 indicates that the SLO goal will be met exactly.
     *
     * For example, if you specify 60 as the number of minutes in the look-back window, the burn rate is calculated as the following:
     *
     * *burn rate = error rate over the look-back window / (100% - attainment goal percentage)*
     *
     * For more information about burn rates, see [Calculate burn rates](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-ServiceLevelObjectives.html#CloudWatch-ServiceLevelObjectives-burn) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-burnrateconfiguration.html
     */
    interface BurnRateConfigurationProperty {
        /**
         * The number of minutes to use as the look-back window.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationsignals-servicelevelobjective-burnrateconfiguration.html#cfn-applicationsignals-servicelevelobjective-burnrateconfiguration-lookbackwindowminutes
         */
        readonly lookBackWindowMinutes: number;
    }
}
/**
 * Properties for defining a `CfnServiceLevelObjective`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-servicelevelobjective.html
 */
export interface CfnServiceLevelObjectiveProps {
    /**
     * Each object in this array defines the length of the look-back window used to calculate one burn rate metric for this SLO.
     *
     * The burn rate measures how fast the service is consuming the error budget, relative to the attainment goal of the SLO.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-servicelevelobjective.html#cfn-applicationsignals-servicelevelobjective-burnrateconfigurations
     */
    readonly burnRateConfigurations?: Array<CfnServiceLevelObjective.BurnRateConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * An optional description for this SLO.
     *
     * @default - "No description"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-servicelevelobjective.html#cfn-applicationsignals-servicelevelobjective-description
     */
    readonly description?: string;
    /**
     * This structure contains the attributes that determine the goal of an SLO.
     *
     * This includes the time period for evaluation and the attainment threshold.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-servicelevelobjective.html#cfn-applicationsignals-servicelevelobjective-goal
     */
    readonly goal?: CfnServiceLevelObjective.GoalProperty | cdk.IResolvable;
    /**
     * A name for this SLO.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-servicelevelobjective.html#cfn-applicationsignals-servicelevelobjective-name
     */
    readonly name: string;
    /**
     * A structure containing information about the performance metric that this SLO monitors, if this is a request-based SLO.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-servicelevelobjective.html#cfn-applicationsignals-servicelevelobjective-requestbasedsli
     */
    readonly requestBasedSli?: cdk.IResolvable | CfnServiceLevelObjective.RequestBasedSliProperty;
    /**
     * A structure containing information about the performance metric that this SLO monitors, if this is a period-based SLO.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-servicelevelobjective.html#cfn-applicationsignals-servicelevelobjective-sli
     */
    readonly sli?: cdk.IResolvable | CfnServiceLevelObjective.SliProperty;
    /**
     * A list of key-value pairs to associate with the SLO.
     *
     * You can associate as many as 50 tags with an SLO. To be able to associate tags with the SLO when you create the SLO, you must have the cloudwatch:TagResource permission.
     *
     * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationsignals-servicelevelobjective.html#cfn-applicationsignals-servicelevelobjective-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
