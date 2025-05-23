import { Construct } from "constructs";
import { BaseNetworkListenerProps, NetworkListener } from "./network-listener";
import * as cloudwatch from "../../cloudwatch";
import { Connections, IConnectable } from "../connections";
import { BaseLoadBalancer, BaseLoadBalancerLookupOptions, BaseLoadBalancerProps, ILoadBalancerV2 } from "../lb-shared/base-load-balancer";
import { IpAddressType } from "../lb-shared/enums";
import { ISecurityGroup } from "../security-group";
import { IVpc } from "../vpc";
import { IVpcEndpointServiceLoadBalancer } from "../vpc-endpoint-service";
/**
 * Indicates how traffic is distributed among the load balancer Availability Zones.
 *
 * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#zonal-dns-affinity
 */
export declare enum ClientRoutingPolicy {
    /**
     * 100 percent zonal affinity
     */
    AVAILABILITY_ZONE_AFFINITY = "availability_zone_affinity",
    /**
     * 85 percent zonal affinity
     */
    PARTIAL_AVAILABILITY_ZONE_AFFINITY = "partial_availability_zone_affinity",
    /**
     * No zonal affinity
     */
    ANY_AVAILABILITY_ZONE = "any_availability_zone"
}
/**
 * Properties for a network load balancer
 */
export interface NetworkLoadBalancerProps extends BaseLoadBalancerProps {
    /**
     * Security groups to associate with this load balancer
     *
     * @default - No security groups associated with the load balancer.
     */
    readonly securityGroups?: ISecurityGroup[];
    /**
     * The type of IP addresses to use
     *
     * If you want to add a UDP or TCP_UDP listener to the load balancer,
     * you must choose IPv4.
     *
     * @default IpAddressType.IPV4
     */
    readonly ipAddressType?: IpAddressType;
    /**
     * The AZ affinity routing policy
     *
     * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#zonal-dns-affinity
     *
     * @default - AZ affinity is disabled.
     */
    readonly clientRoutingPolicy?: ClientRoutingPolicy;
    /**
     * Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through AWS PrivateLink.
     *
     * @default true
     */
    readonly enforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: boolean;
    /**
     * Indicates whether zonal shift is enabled
     *
     * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/network/zonal-shift.html
     *
     * @default false
     */
    readonly zonalShift?: boolean;
}
/**
 * Properties to reference an existing load balancer
 */
export interface NetworkLoadBalancerAttributes {
    /**
     * ARN of the load balancer
     */
    readonly loadBalancerArn: string;
    /**
     * The canonical hosted zone ID of this load balancer
     *
     * @default - Token via data source from loadBalancerArn.
     */
    readonly loadBalancerCanonicalHostedZoneId?: string;
    /**
     * The DNS name of this load balancer
     *
     * @default - Token via data source from loadBalancerArn.
     */
    readonly loadBalancerDnsName?: string;
    /**
     * The VPC to associate with the load balancer.
     *
     * @default - When not provided, listeners cannot be created on imported load
     * balancers.
     */
    readonly vpc?: IVpc;
    /**
     * Security groups to associate with this load balancer
     *
     * @default - No security groups associated with the load balancer.
     */
    readonly loadBalancerSecurityGroups?: string[];
}
/**
 * Options for looking up an NetworkLoadBalancer
 */
export interface NetworkLoadBalancerLookupOptions extends BaseLoadBalancerLookupOptions {
}
/**
 * Define a new network load balancer
 *
 * @resource AWS::ElasticLoadBalancingV2::LoadBalancer
 */
export declare class NetworkLoadBalancer extends BaseLoadBalancer implements INetworkLoadBalancer {
    static fromNetworkLoadBalancerAttributes(scope: Construct, id: string, attrs: NetworkLoadBalancerAttributes): INetworkLoadBalancer;
    readonly metrics: INetworkLoadBalancerMetrics;
    readonly ipAddressType?: IpAddressType;
    readonly connections: Connections;
    private readonly isSecurityGroupsPropertyDefined;
    private readonly _enforceSecurityGroupInboundRulesOnPrivateLinkTraffic?;
    /**
     * After the implementation of `IConnectable` (see https://github.com/aws/aws-cdk/pull/28494), the default
     * value for `securityGroups` is set by the `Connections` constructor to an empty array.
     * To keep backward compatibility (`securityGroups` is `undefined` if the related property is not specified)
     * a getter has been added.
     */
    get securityGroups(): string[] | undefined;
    constructor(scope: Construct, id: string, props: NetworkLoadBalancerProps);
    get enforceSecurityGroupInboundRulesOnPrivateLinkTraffic(): string | undefined;
    /**
     * Add a listener to this load balancer
     *
     * @returns The newly created listener
     */
    addListener(id: string, props: BaseNetworkListenerProps): NetworkListener;
    /**
     * Add a security group to this load balancer
     */
    addSecurityGroup(securityGroup: ISecurityGroup): void;
    /**
     * Return the given named metric for this Network Load Balancer
     *
     * @default Average over 5 minutes
     * @deprecated Use ``NetworkLoadBalancer.metrics.custom`` instead
     */
    metric(metricName: string, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of concurrent TCP flows (or connections) from clients to targets.
     *
     * This metric includes connections in the SYN_SENT and ESTABLISHED states.
     * TCP connections are not terminated at the load balancer, so a client
     * opening a TCP connection to a target counts as a single flow.
     *
     * @default Average over 5 minutes
     * @deprecated Use ``NetworkLoadBalancer.metrics.activeFlowCount`` instead
     */
    metricActiveFlowCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of load balancer capacity units (LCU) used by your load balancer.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``NetworkLoadBalancer.metrics.activeFlowCount`` instead
     */
    metricConsumedLCUs(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of targets that are considered healthy.
     *
     * @default Average over 5 minutes
     * @deprecated use ``NetworkTargetGroup.metricHealthyHostCount`` instead
     */
    metricHealthyHostCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of targets that are considered unhealthy.
     *
     * @default Average over 5 minutes
     * @deprecated use ``NetworkTargetGroup.metricUnHealthyHostCount`` instead
     */
    metricUnHealthyHostCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of new TCP flows (or connections) established from clients to targets in the time period.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``NetworkLoadBalancer.metrics.newFlowCount`` instead
     */
    metricNewFlowCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of bytes processed by the load balancer, including TCP/IP headers.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``NetworkLoadBalancer.metrics.processedBytes`` instead
     */
    metricProcessedBytes(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of reset (RST) packets sent from a client to a target.
     *
     * These resets are generated by the client and forwarded by the load balancer.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``NetworkLoadBalancer.metrics.tcpClientResetCount`` instead
     */
    metricTcpClientResetCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of reset (RST) packets generated by the load balancer.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``NetworkLoadBalancer.metrics.tcpElbResetCount`` instead
     */
    metricTcpElbResetCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of reset (RST) packets sent from a target to a client.
     *
     * These resets are generated by the target and forwarded by the load balancer.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``NetworkLoadBalancer.metrics.tcpTargetResetCount`` instead
     */
    metricTcpTargetResetCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
}
/**
 * Contains all metrics for a Network Load Balancer.
 */
export interface INetworkLoadBalancerMetrics {
    /**
     * Return the given named metric for this Network Load Balancer
     *
     * @default Average over 5 minutes
     */
    custom(metricName: string, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of concurrent TCP flows (or connections) from clients to targets.
     *
     * This metric includes connections in the SYN_SENT and ESTABLISHED states.
     * TCP connections are not terminated at the load balancer, so a client
     * opening a TCP connection to a target counts as a single flow.
     *
     * @default Average over 5 minutes
     */
    activeFlowCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of load balancer capacity units (LCU) used by your load balancer.
     *
     * @default Sum over 5 minutes
     */
    consumedLCUs(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of new TCP flows (or connections) established from clients to targets in the time period.
     *
     * @default Sum over 5 minutes
     */
    newFlowCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of bytes processed by the load balancer, including TCP/IP headers.
     *
     * @default Sum over 5 minutes
     */
    processedBytes(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of reset (RST) packets sent from a client to a target.
     *
     * These resets are generated by the client and forwarded by the load balancer.
     *
     * @default Sum over 5 minutes
     */
    tcpClientResetCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of reset (RST) packets generated by the load balancer.
     *
     * @default Sum over 5 minutes
     */
    tcpElbResetCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of reset (RST) packets sent from a target to a client.
     *
     * These resets are generated by the target and forwarded by the load balancer.
     *
     * @default Sum over 5 minutes
     */
    tcpTargetResetCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
}
/**
 * A network load balancer
 */
export interface INetworkLoadBalancer extends ILoadBalancerV2, IVpcEndpointServiceLoadBalancer, IConnectable {
    /**
     * The VPC this load balancer has been created in (if available)
     */
    readonly vpc?: IVpc;
    /**
     * All metrics available for this load balancer
     */
    readonly metrics: INetworkLoadBalancerMetrics;
    /**
     * Security groups associated with this load balancer
     */
    readonly securityGroups?: string[];
    /**
     * The type of IP addresses to use
     *
     * @default IpAddressType.IPV4
     */
    readonly ipAddressType?: IpAddressType;
    /**
     * Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through AWS PrivateLink
     *
     * @default on
     */
    readonly enforceSecurityGroupInboundRulesOnPrivateLinkTraffic?: string;
    /**
     * Add a listener to this load balancer
     *
     * @returns The newly created listener
     */
    addListener(id: string, props: BaseNetworkListenerProps): NetworkListener;
}
