import { Construct } from "constructs";
import { ApplicationListener, BaseApplicationListenerProps } from "./application-listener";
import { Duration } from "../../../duration";
import * as cloudwatch from "../../cloudwatch";
import * as s3 from "../../storage";
import { Connections, IConnectable } from "../connections";
import { BaseLoadBalancer, BaseLoadBalancerLookupOptions, BaseLoadBalancerProps, ILoadBalancerV2 } from "../lb-shared/base-load-balancer";
import { IpAddressType, ApplicationProtocol, DesyncMitigationMode } from "../lb-shared/enums";
import { ISecurityGroup } from "../security-group";
import { IVpc } from "../vpc";
/**
 * Properties for defining an Application Load Balancer
 *
 * @see https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes
 */
export interface ApplicationLoadBalancerProps extends BaseLoadBalancerProps {
    /**
     * Security group to associate with this load balancer
     *
     * @default A security group is created
     */
    readonly securityGroup?: ISecurityGroup;
    /**
     * The type of IP addresses to use
     *
     * @default IpAddressType.IPV4
     */
    readonly ipAddressType?: IpAddressType;
    /**
     * Indicates whether HTTP/2 is enabled.
     *
     * @default true
     */
    readonly http2Enabled?: boolean;
    /**
     * The load balancer idle timeout, in seconds
     *
     * @default 60
     */
    readonly idleTimeout?: Duration;
    /**
     * Indicates whether HTTP headers with invalid header fields are removed
     * by the load balancer (true) or routed to targets (false)
     *
     * @default false
     */
    readonly dropInvalidHeaderFields?: boolean;
    /**
     * Determines how the load balancer handles requests that
     * might pose a security risk to your application
     *
     * @default DesyncMitigationMode.DEFENSIVE
     */
    readonly desyncMitigationMode?: DesyncMitigationMode;
    /**
     * The client keep alive duration. The valid range is 60 to 604800 seconds (1 minute to 7 days).
     *
     * @default - Duration.seconds(3600)
     */
    readonly clientKeepAlive?: Duration;
    /**
     * Indicates whether the Application Load Balancer should preserve the host header in the HTTP request
     * and send it to the target without any change.
     *
     * @default false
     */
    readonly preserveHostHeader?: boolean;
    /**
     * Indicates whether the two headers (x-amzn-tls-version and x-amzn-tls-cipher-suite),
     * which contain information about the negotiated TLS version and cipher suite,
     * are added to the client request before sending it to the target.
     *
     * The x-amzn-tls-version header has information about the TLS protocol version negotiated with the client,
     * and the x-amzn-tls-cipher-suite header has information about the cipher suite negotiated with the client.
     *
     * Both headers are in OpenSSL format.
     *
     * @default false
     */
    readonly xAmznTlsVersionAndCipherSuiteHeaders?: boolean;
    /**
     * Indicates whether the X-Forwarded-For header should preserve the source port
     * that the client used to connect to the load balancer.
     *
     * @default false
     */
    readonly preserveXffClientPort?: boolean;
    /**
     * Enables you to modify, preserve, or remove the X-Forwarded-For header in the HTTP request
     * before the Application Load Balancer sends the request to the target.
     *
     * @default XffHeaderProcessingMode.APPEND
     */
    readonly xffHeaderProcessingMode?: XffHeaderProcessingMode;
    /**
     * Indicates whether to allow a WAF-enabled load balancer to route requests to targets
     * if it is unable to forward the request to AWS WAF.
     *
     * @default false
     */
    readonly wafFailOpen?: boolean;
}
/**
 * Processing mode of the X-Forwarded-For header in the HTTP request
 * before the Application Load Balancer sends the request to the target.
 */
export declare enum XffHeaderProcessingMode {
    /**
     * Application Load Balancer adds the client IP address (of the last hop) to the X-Forwarded-For header
     * in the HTTP request before it sends it to targets.
     */
    APPEND = "append",
    /**
     * Application Load Balancer preserves the X-Forwarded-For header in the HTTP request,
     * and sends it to targets without any change.
     */
    PRESERVE = "preserve",
    /**
     * Application Load Balancer removes the X-Forwarded-For header
     * in the HTTP request before it sends it to targets.
     */
    REMOVE = "remove"
}
/**
 * Options for looking up an ApplicationLoadBalancer
 */
export interface ApplicationLoadBalancerLookupOptions extends BaseLoadBalancerLookupOptions {
}
/**
 * Define an Application Load Balancer
 *
 * @resource AWS::ElasticLoadBalancingV2::LoadBalancer
 */
export declare class ApplicationLoadBalancer extends BaseLoadBalancer implements IApplicationLoadBalancer {
    /**
     * Import an existing Application Load Balancer
     */
    static fromApplicationLoadBalancerAttributes(scope: Construct, id: string, attrs: ApplicationLoadBalancerAttributes): IApplicationLoadBalancer;
    readonly connections: Connections;
    readonly ipAddressType?: IpAddressType;
    readonly listeners: ApplicationListener[];
    readonly metrics: IApplicationLoadBalancerMetrics;
    constructor(scope: Construct, id: string, props: ApplicationLoadBalancerProps);
    /**
     * Add a new listener to this load balancer
     */
    addListener(id: string, props: BaseApplicationListenerProps): ApplicationListener;
    /**
     * Add a redirection listener to this load balancer
     */
    addRedirect(props?: ApplicationLoadBalancerRedirectConfig): ApplicationListener;
    /**
     * Enable access logging for this load balancer.
     *
     * A region must be specified on the stack containing the load balancer; you cannot enable logging on
     * environment-agnostic stacks. See https://docs.aws.amazon.com/cdk/latest/guide/environments.html
     */
    logAccessLogs(bucket: s3.IBucket, prefix?: string): void;
    /**
     * Enable connection logging for this load balancer.
     *
     * A region must be specified on the stack containing the load balancer; you cannot enable logging on
     * environment-agnostic stacks.
     *
     * @see https://docs.aws.amazon.com/cdk/latest/guide/environments.html
     */
    logConnectionLogs(bucket: s3.IBucket, prefix?: string): void;
    /**
     * Add a security group to this load balancer
     */
    addSecurityGroup(securityGroup: ISecurityGroup): void;
    /**
     * Return the given named metric for this Application Load Balancer
     *
     * @default Average over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.custom`` instead
     */
    metric(metricName: string, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of concurrent TCP connections active from clients to the
     * load balancer and from the load balancer to targets.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.activeConnectionCount`` instead
     */
    metricActiveConnectionCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of TLS connections initiated by the client that did not
     * establish a session with the load balancer. Possible causes include a
     * mismatch of ciphers or protocols.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.clientTlsNegotiationErrorCount`` instead
     */
    metricClientTlsNegotiationErrorCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of load balancer capacity units (LCU) used by your load balancer.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.consumedLCUs`` instead
     */
    metricConsumedLCUs(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of fixed-response actions that were successful.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.httpFixedResponseCount`` instead
     */
    metricHttpFixedResponseCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of redirect actions that were successful.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.httpRedirectCount`` instead
     */
    metricHttpRedirectCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of redirect actions that couldn't be completed because the URL
     * in the response location header is larger than 8K.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.httpRedirectUrlLimitExceededCount`` instead
     */
    metricHttpRedirectUrlLimitExceededCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of HTTP 3xx/4xx/5xx codes that originate from the load balancer.
     *
     * This does not include any response codes generated by the targets.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.httpCodeElb`` instead
     */
    metricHttpCodeElb(code: HttpCodeElb, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of HTTP 2xx/3xx/4xx/5xx response codes generated by all targets
     * in the load balancer.
     *
     * This does not include any response codes generated by the load balancer.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.httpCodeTarget`` instead
     */
    metricHttpCodeTarget(code: HttpCodeTarget, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of bytes processed by the load balancer over IPv6.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.ipv6ProcessedBytes`` instead
     */
    metricIpv6ProcessedBytes(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of IPv6 requests received by the load balancer.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.ipv6RequestCount`` instead
     */
    metricIpv6RequestCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of new TCP connections established from clients to the
     * load balancer and from the load balancer to targets.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.newConnectionCount`` instead
     */
    metricNewConnectionCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of bytes processed by the load balancer over IPv4 and IPv6.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.processedBytes`` instead
     */
    metricProcessedBytes(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of connections that were rejected because the load balancer had
     * reached its maximum number of connections.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.rejectedConnectionCount`` instead
     */
    metricRejectedConnectionCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of requests processed over IPv4 and IPv6.
     *
     * This count includes only the requests with a response generated by a target of the load balancer.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.requestCount`` instead
     */
    metricRequestCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of rules processed by the load balancer given a request rate averaged over an hour.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.ruleEvaluations`` instead
     */
    metricRuleEvaluations(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of connections that were not successfully established between the load balancer and target.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.targetConnectionErrorCount`` instead
     */
    metricTargetConnectionErrorCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The time elapsed, in seconds, after the request leaves the load balancer until a response from the target is received.
     *
     * @default Average over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.targetResponseTime`` instead
     */
    metricTargetResponseTime(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of TLS connections initiated by the load balancer that did not establish a session with the target.
     *
     * Possible causes include a mismatch of ciphers or protocols.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.targetTLSNegotiationErrorCount`` instead
     */
    metricTargetTLSNegotiationErrorCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of user authentications that could not be completed
     *
     * Because an authenticate action was misconfigured, the load balancer
     * couldn't establish a connection with the IdP, or the load balancer
     * couldn't complete the authentication flow due to an internal error.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.elbAuthError`` instead
     */
    metricElbAuthError(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of user authentications that could not be completed because the
     * IdP denied access to the user or an authorization code was used more than
     * once.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.elbAuthFailure`` instead
     */
    metricElbAuthFailure(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The time elapsed, in milliseconds, to query the IdP for the ID token and user info.
     *
     * If one or more of these operations fail, this is the time to failure.
     *
     * @default Average over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.elbAuthLatency`` instead
     */
    metricElbAuthLatency(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of authenticate actions that were successful.
     *
     * This metric is incremented at the end of the authentication workflow,
     * after the load balancer has retrieved the user claims from the IdP.
     *
     * @default Sum over 5 minutes
     * @deprecated Use ``ApplicationLoadBalancer.metrics.elbAuthSuccess`` instead
     *
     */
    metricElbAuthSuccess(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
}
/**
 * Count of HTTP status originating from the load balancer
 *
 * This count does not include any response codes generated by the targets.
 */
export declare enum HttpCodeElb {
    /**
     * The number of HTTP 3XX redirection codes that originate from the load balancer.
     */
    ELB_3XX_COUNT = "HTTPCode_ELB_3XX_Count",
    /**
     * The number of HTTP 4XX client error codes that originate from the load balancer.
     *
     * Client errors are generated when requests are malformed or incomplete.
     * These requests have not been received by the target. This count does not
     * include any response codes generated by the targets.
     */
    ELB_4XX_COUNT = "HTTPCode_ELB_4XX_Count",
    /**
     * The number of HTTP 5XX server error codes that originate from the load balancer.
     */
    ELB_5XX_COUNT = "HTTPCode_ELB_5XX_Count",
    /**
     * The number of HTTP 500 server error codes that originate from the load balancer.
     */
    ELB_500_COUNT = "HTTPCode_ELB_500_Count",
    /**
     * The number of HTTP 502 server error codes that originate from the load balancer.
     */
    ELB_502_COUNT = "HTTPCode_ELB_502_Count",
    /**
     * The number of HTTP 503 server error codes that originate from the load balancer.
     */
    ELB_503_COUNT = "HTTPCode_ELB_503_Count",
    /**
     * The number of HTTP 504 server error codes that originate from the load balancer.
     */
    ELB_504_COUNT = "HTTPCode_ELB_504_Count"
}
/**
 * Count of HTTP status originating from the targets
 */
export declare enum HttpCodeTarget {
    /**
     * The number of 2xx response codes from targets
     */
    TARGET_2XX_COUNT = "HTTPCode_Target_2XX_Count",
    /**
     * The number of 3xx response codes from targets
     */
    TARGET_3XX_COUNT = "HTTPCode_Target_3XX_Count",
    /**
     * The number of 4xx response codes from targets
     */
    TARGET_4XX_COUNT = "HTTPCode_Target_4XX_Count",
    /**
     * The number of 5xx response codes from targets
     */
    TARGET_5XX_COUNT = "HTTPCode_Target_5XX_Count"
}
/**
 * Contains all metrics for an Application Load Balancer.
 */
export interface IApplicationLoadBalancerMetrics {
    /**
     * Return the given named metric for this Application Load Balancer
     *
     * @default Average over 5 minutes
     */
    custom(metricName: string, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of concurrent TCP connections active from clients to the
     * load balancer and from the load balancer to targets.
     *
     * @default Sum over 5 minutes
     */
    activeConnectionCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of TLS connections initiated by the client that did not
     * establish a session with the load balancer. Possible causes include a
     * mismatch of ciphers or protocols.
     *
     * @default Sum over 5 minutes
     */
    clientTlsNegotiationErrorCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of load balancer capacity units (LCU) used by your load balancer.
     *
     * @default Sum over 5 minutes
     */
    consumedLCUs(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of fixed-response actions that were successful.
     *
     * @default Sum over 5 minutes
     */
    httpFixedResponseCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of redirect actions that were successful.
     *
     * @default Sum over 5 minutes
     */
    httpRedirectCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of redirect actions that couldn't be completed because the URL
     * in the response location header is larger than 8K.
     *
     * @default Sum over 5 minutes
     */
    httpRedirectUrlLimitExceededCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of HTTP 3xx/4xx/5xx codes that originate from the load balancer.
     *
     * This does not include any response codes generated by the targets.
     *
     * @default Sum over 5 minutes
     */
    httpCodeElb(code: HttpCodeElb, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of HTTP 2xx/3xx/4xx/5xx response codes generated by all targets
     * in the load balancer.
     *
     * This does not include any response codes generated by the load balancer.
     *
     * @default Sum over 5 minutes
     */
    httpCodeTarget(code: HttpCodeTarget, props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of bytes processed by the load balancer over IPv6.
     *
     * @default Sum over 5 minutes
     */
    ipv6ProcessedBytes(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of IPv6 requests received by the load balancer.
     *
     * @default Sum over 5 minutes
     */
    ipv6RequestCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of new TCP connections established from clients to the
     * load balancer and from the load balancer to targets.
     *
     * @default Sum over 5 minutes
     */
    newConnectionCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The total number of bytes processed by the load balancer over IPv4 and IPv6.
     *
     * @default Sum over 5 minutes
     */
    processedBytes(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of connections that were rejected because the load balancer had
     * reached its maximum number of connections.
     *
     * @default Sum over 5 minutes
     */
    rejectedConnectionCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of requests processed over IPv4 and IPv6.
     *
     * This count includes only the requests with a response generated by a target of the load balancer.
     *
     * @default Sum over 5 minutes
     */
    requestCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of rules processed by the load balancer given a request rate averaged over an hour.
     *
     * @default Sum over 5 minutes
     */
    ruleEvaluations(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of connections that were not successfully established between the load balancer and target.
     *
     * @default Sum over 5 minutes
     */
    targetConnectionErrorCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The time elapsed, in seconds, after the request leaves the load balancer until a response from the target is received.
     *
     * @default Average over 5 minutes
     */
    targetResponseTime(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of TLS connections initiated by the load balancer that did not establish a session with the target.
     *
     * Possible causes include a mismatch of ciphers or protocols.
     *
     * @default Sum over 5 minutes
     */
    targetTLSNegotiationErrorCount(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of user authentications that could not be completed
     *
     * Because an authenticate action was misconfigured, the load balancer
     * couldn't establish a connection with the IdP, or the load balancer
     * couldn't complete the authentication flow due to an internal error.
     *
     * @default Sum over 5 minutes
     */
    elbAuthError(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of user authentications that could not be completed because the
     * IdP denied access to the user or an authorization code was used more than
     * once.
     *
     * @default Sum over 5 minutes
     */
    elbAuthFailure(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The time elapsed, in milliseconds, to query the IdP for the ID token and user info.
     *
     * If one or more of these operations fail, this is the time to failure.
     *
     * @default Average over 5 minutes
     */
    elbAuthLatency(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
    /**
     * The number of authenticate actions that were successful.
     *
     * This metric is incremented at the end of the authentication workflow,
     * after the load balancer has retrieved the user claims from the IdP.
     *
     * @default Sum over 5 minutes
     */
    elbAuthSuccess(props?: cloudwatch.MetricOptions): cloudwatch.Metric;
}
/**
 * An application load balancer
 */
export interface IApplicationLoadBalancer extends ILoadBalancerV2, IConnectable {
    /**
     * The ARN of this load balancer
     */
    readonly loadBalancerArn: string;
    /**
     * The VPC this load balancer has been created in (if available).
     * If this interface is the result of an import call to fromApplicationLoadBalancerAttributes,
     * the vpc attribute will be undefined unless specified in the optional properties of that method.
     */
    readonly vpc?: IVpc;
    /**
     * The IP Address Type for this load balancer
     *
     * If the `@aws-cdk/aws-elasticloadbalancingV2:albDualstackWithoutPublicIpv4SecurityGroupRulesDefault`
     * feature flag is set (the default for new projects), and `addListener()` is called with `open: true`,
     * the load balancer's security group will automatically include both IPv4 and IPv6 ingress rules
     * when using `IpAddressType.DUAL_STACK_WITHOUT_PUBLIC_IPV4`.
     *
     * For existing projects that only have IPv4 rules, you can opt-in to IPv6 ingress rules
     * by enabling the feature flag in your cdk.json file. Note that enabling this feature flag
     * will modify existing security group rules.
     *
     * @default IpAddressType.IPV4
     */
    readonly ipAddressType?: IpAddressType;
    /**
     * A list of listeners that have been added to the load balancer.
     * This list is only valid for owned constructs.
     */
    readonly listeners: ApplicationListener[];
    /**
     * All metrics available for this load balancer
     */
    readonly metrics: IApplicationLoadBalancerMetrics;
    /**
     * Add a new listener to this load balancer
     */
    addListener(id: string, props: BaseApplicationListenerProps): ApplicationListener;
}
/**
 * Properties to reference an existing load balancer
 */
export interface ApplicationLoadBalancerAttributes {
    /**
     * ARN of the load balancer
     */
    readonly loadBalancerArn: string;
    /**
     * ID of the load balancer's security group
     */
    readonly securityGroupId: string;
    /**
     * The canonical hosted zone ID of this load balancer
     *
     * @default - When not provided, LB cannot be used as Route53 Alias target.
     */
    readonly loadBalancerCanonicalHostedZoneId?: string;
    /**
     * The DNS name of this load balancer
     *
     * @default - When not provided, LB cannot be used as Route53 Alias target.
     */
    readonly loadBalancerDnsName?: string;
    /**
     * Whether the security group allows all outbound traffic or not
     *
     * Unless set to `false`, no egress rules will be added to the security group.
     *
     * @default true
     */
    readonly securityGroupAllowsAllOutbound?: boolean;
    /**
     * The VPC this load balancer has been created in, if available
     *
     * @default - If the Load Balancer was imported and a VPC was not specified,
     * the VPC is not available.
     */
    readonly vpc?: IVpc;
}
/**
 * Properties for a redirection config
 */
export interface ApplicationLoadBalancerRedirectConfig {
    /**
     * The protocol of the listener being created
     *
     * @default HTTP
     */
    readonly sourceProtocol?: ApplicationProtocol;
    /**
     * The port number to listen to
     *
     * @default 80
     */
    readonly sourcePort?: number;
    /**
     * The protocol of the redirection target
     *
     * @default HTTPS
     */
    readonly targetProtocol?: ApplicationProtocol;
    /**
     * The port number to redirect to
     *
     * @default 443
     */
    readonly targetPort?: number;
    /**
     * Allow anyone to connect to this listener
     *
     * If this is specified, the listener will be opened up to anyone who can reach it.
     * For internal load balancers this is anyone in the same VPC. For public load
     * balancers, this is anyone on the internet.
     *
     * If you want to be more selective about who can access this load
     * balancer, set this to `false` and use the listener's `connections`
     * object to selectively grant access to the listener.
     *
     * @default true
     */
    readonly open?: boolean;
}
