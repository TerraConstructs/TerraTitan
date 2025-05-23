import { cloudwatchLogMetricFilter } from "@cdktf/provider-aws";
import { Construct } from "constructs";
import { ILogGroup, MetricFilterOptions } from "./log-group";
import { Metric, MetricOptions } from "./metric";
import { AwsConstructBase, AwsConstructProps } from "../aws-construct";
/**
 * Properties for a MetricFilter
 */
export interface MetricFilterProps extends MetricFilterOptions, AwsConstructProps {
    /**
     * The log group to create the filter on.
     */
    readonly logGroup: ILogGroup;
}
/**
 * A filter that extracts information from CloudWatch Logs and emits to CloudWatch Metrics
 */
export declare class MetricFilter extends AwsConstructBase {
    readonly resource: cloudwatchLogMetricFilter.CloudwatchLogMetricFilter;
    get outputs(): Record<string, any>;
    private readonly metricName;
    private readonly metricNamespace;
    constructor(scope: Construct, id: string, props: MetricFilterProps);
    /**
     * Return the given named metric for this Metric Filter
     *
     * @default avg over 5 minutes
     */
    metric(props?: MetricOptions): Metric;
}
