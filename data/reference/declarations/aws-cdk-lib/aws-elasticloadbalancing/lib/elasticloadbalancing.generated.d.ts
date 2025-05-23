import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Specifies a Classic Load Balancer.
 *
 * If this resource has a public IP address and is also in a VPC that is defined in the same template, you must use the [DependsOn attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) to declare a dependency on the VPC-gateway attachment.
 *
 * @cloudformationResource AWS::ElasticLoadBalancing::LoadBalancer
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html
 */
export declare class CfnLoadBalancer extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLoadBalancer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLoadBalancer;
    /**
     * The name of the Route 53 hosted zone that is associated with the load balancer. Internal-facing load balancers don't use this value, use `DNSName` instead.
     *
     * @cloudformationAttribute CanonicalHostedZoneName
     */
    readonly attrCanonicalHostedZoneName: string;
    /**
     * The ID of the Route 53 hosted zone name that is associated with the load balancer.
     *
     * @cloudformationAttribute CanonicalHostedZoneNameID
     */
    readonly attrCanonicalHostedZoneNameId: string;
    /**
     * The DNS name for the load balancer.
     *
     * @cloudformationAttribute DNSName
     */
    readonly attrDnsName: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the security group that you can use as part of your inbound rules for your load balancer's back-end instances.
     *
     * @cloudformationAttribute SourceSecurityGroup.GroupName
     */
    readonly attrSourceSecurityGroupGroupName: string;
    /**
     * The owner of the source security group.
     *
     * @cloudformationAttribute SourceSecurityGroup.OwnerAlias
     */
    readonly attrSourceSecurityGroupOwnerAlias: string;
    /**
     * Information about where and how access logs are stored for the load balancer.
     */
    accessLoggingPolicy?: CfnLoadBalancer.AccessLoggingPolicyProperty | cdk.IResolvable;
    /**
     * Information about a policy for application-controlled session stickiness.
     */
    appCookieStickinessPolicy?: Array<CfnLoadBalancer.AppCookieStickinessPolicyProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Availability Zones for a load balancer in a default VPC.
     */
    availabilityZones?: Array<string>;
    /**
     * If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.
     */
    connectionDrainingPolicy?: CfnLoadBalancer.ConnectionDrainingPolicyProperty | cdk.IResolvable;
    /**
     * If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.
     */
    connectionSettings?: CfnLoadBalancer.ConnectionSettingsProperty | cdk.IResolvable;
    /**
     * If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.
     */
    crossZone?: boolean | cdk.IResolvable;
    /**
     * The health check settings to use when evaluating the health of your EC2 instances.
     */
    healthCheck?: CfnLoadBalancer.HealthCheckProperty | cdk.IResolvable;
    /**
     * The IDs of the instances for the load balancer.
     */
    instances?: Array<string>;
    /**
     * Information about a policy for duration-based session stickiness.
     */
    lbCookieStickinessPolicy?: Array<cdk.IResolvable | CfnLoadBalancer.LBCookieStickinessPolicyProperty> | cdk.IResolvable;
    /**
     * The listeners for the load balancer. You can specify at most one listener per port.
     */
    listeners: Array<cdk.IResolvable | CfnLoadBalancer.ListenersProperty> | cdk.IResolvable;
    /**
     * The name of the load balancer.
     */
    loadBalancerName?: string;
    /**
     * The policies defined for your Classic Load Balancer.
     */
    policies?: Array<cdk.IResolvable | CfnLoadBalancer.PoliciesProperty> | cdk.IResolvable;
    /**
     * The type of load balancer. Valid only for load balancers in a VPC.
     */
    scheme?: string;
    /**
     * The security groups for the load balancer.
     */
    securityGroups?: Array<string>;
    /**
     * The IDs of the subnets for the load balancer. You can specify at most one subnet per Availability Zone.
     */
    subnets?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags associated with a load balancer.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLoadBalancerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLoadBalancer {
    /**
     * Specifies where and how access logs are stored for your Classic Load Balancer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-accessloggingpolicy.html
     */
    interface AccessLoggingPolicyProperty {
        /**
         * The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.
         *
         * Default: 60 minutes
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-accessloggingpolicy.html#cfn-elasticloadbalancing-loadbalancer-accessloggingpolicy-emitinterval
         */
        readonly emitInterval?: number;
        /**
         * Specifies whether access logs are enabled for the load balancer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-accessloggingpolicy.html#cfn-elasticloadbalancing-loadbalancer-accessloggingpolicy-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * The name of the Amazon S3 bucket where the access logs are stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-accessloggingpolicy.html#cfn-elasticloadbalancing-loadbalancer-accessloggingpolicy-s3bucketname
         */
        readonly s3BucketName: string;
        /**
         * The logical hierarchy you created for your Amazon S3 bucket, for example `my-bucket-prefix/prod` .
         *
         * If the prefix is not provided, the log is placed at the root level of the bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-accessloggingpolicy.html#cfn-elasticloadbalancing-loadbalancer-accessloggingpolicy-s3bucketprefix
         */
        readonly s3BucketPrefix?: string;
    }
    /**
     * Specifies a policy for application-controlled session stickiness for your Classic Load Balancer.
     *
     * To associate a policy with a listener, use the [PolicyNames](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-listener.html#cfn-ec2-elb-listener-policynames) property for the listener.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-appcookiestickinesspolicy.html
     */
    interface AppCookieStickinessPolicyProperty {
        /**
         * The name of the application cookie used for stickiness.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-appcookiestickinesspolicy.html#cfn-elasticloadbalancing-loadbalancer-appcookiestickinesspolicy-cookiename
         */
        readonly cookieName: string;
        /**
         * The mnemonic name for the policy being created.
         *
         * The name must be unique within a set of policies for this load balancer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-appcookiestickinesspolicy.html#cfn-elasticloadbalancing-loadbalancer-appcookiestickinesspolicy-policyname
         */
        readonly policyName: string;
    }
    /**
     * Specifies the connection draining settings for your Classic Load Balancer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-connectiondrainingpolicy.html
     */
    interface ConnectionDrainingPolicyProperty {
        /**
         * Specifies whether connection draining is enabled for the load balancer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-connectiondrainingpolicy.html#cfn-elasticloadbalancing-loadbalancer-connectiondrainingpolicy-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * The maximum time, in seconds, to keep the existing connections open before deregistering the instances.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-connectiondrainingpolicy.html#cfn-elasticloadbalancing-loadbalancer-connectiondrainingpolicy-timeout
         */
        readonly timeout?: number;
    }
    /**
     * Specifies the idle timeout value for your Classic Load Balancer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-connectionsettings.html
     */
    interface ConnectionSettingsProperty {
        /**
         * The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-connectionsettings.html#cfn-elasticloadbalancing-loadbalancer-connectionsettings-idletimeout
         */
        readonly idleTimeout: number;
    }
    /**
     * Specifies health check settings for your Classic Load Balancer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-healthcheck.html
     */
    interface HealthCheckProperty {
        /**
         * The number of consecutive health checks successes required before moving the instance to the `Healthy` state.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-healthcheck.html#cfn-elasticloadbalancing-loadbalancer-healthcheck-healthythreshold
         */
        readonly healthyThreshold: string;
        /**
         * The approximate interval, in seconds, between health checks of an individual instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-healthcheck.html#cfn-elasticloadbalancing-loadbalancer-healthcheck-interval
         */
        readonly interval: string;
        /**
         * The instance being checked.
         *
         * The protocol is either TCP, HTTP, HTTPS, or SSL. The range of valid ports is one (1) through 65535.
         *
         * TCP is the default, specified as a TCP: port pair, for example "TCP:5000". In this case, a health check simply attempts to open a TCP connection to the instance on the specified port. Failure to connect within the configured timeout is considered unhealthy.
         *
         * SSL is also specified as SSL: port pair, for example, SSL:5000.
         *
         * For HTTP/HTTPS, you must include a ping path in the string. HTTP is specified as a HTTP:port;/;PathToPing; grouping, for example "HTTP:80/weather/us/wa/seattle". In this case, a HTTP GET request is issued to the instance on the given port and path. Any answer other than "200 OK" within the timeout period is considered unhealthy.
         *
         * The total length of the HTTP ping target must be 1024 16-bit Unicode characters or less.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-healthcheck.html#cfn-elasticloadbalancing-loadbalancer-healthcheck-target
         */
        readonly target: string;
        /**
         * The amount of time, in seconds, during which no response means a failed health check.
         *
         * This value must be less than the `Interval` value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-healthcheck.html#cfn-elasticloadbalancing-loadbalancer-healthcheck-timeout
         */
        readonly timeout: string;
        /**
         * The number of consecutive health check failures required before moving the instance to the `Unhealthy` state.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-healthcheck.html#cfn-elasticloadbalancing-loadbalancer-healthcheck-unhealthythreshold
         */
        readonly unhealthyThreshold: string;
    }
    /**
     * Specifies a policy for duration-based session stickiness for your Classic Load Balancer.
     *
     * To associate a policy with a listener, use the [PolicyNames](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-listener.html#cfn-ec2-elb-listener-policynames) property for the listener.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-lbcookiestickinesspolicy.html
     */
    interface LBCookieStickinessPolicyProperty {
        /**
         * The time period, in seconds, after which the cookie should be considered stale.
         *
         * If this parameter is not specified, the stickiness session lasts for the duration of the browser session.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-lbcookiestickinesspolicy.html#cfn-elasticloadbalancing-loadbalancer-lbcookiestickinesspolicy-cookieexpirationperiod
         */
        readonly cookieExpirationPeriod?: string;
        /**
         * The name of the policy.
         *
         * This name must be unique within the set of policies for this load balancer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-lbcookiestickinesspolicy.html#cfn-elasticloadbalancing-loadbalancer-lbcookiestickinesspolicy-policyname
         */
        readonly policyName?: string;
    }
    /**
     * Specifies a listener for your Classic Load Balancer.
     *
     * Modifying any property replaces the listener.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-listeners.html
     */
    interface ListenersProperty {
        /**
         * The port on which the instance is listening.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-listeners.html#cfn-elasticloadbalancing-loadbalancer-listeners-instanceport
         */
        readonly instancePort: string;
        /**
         * The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.
         *
         * If the front-end protocol is TCP or SSL, the back-end protocol must be TCP or SSL. If the front-end protocol is HTTP or HTTPS, the back-end protocol must be HTTP or HTTPS.
         *
         * If there is another listener with the same `InstancePort` whose `InstanceProtocol` is secure, (HTTPS or SSL), the listener's `InstanceProtocol` must also be secure.
         *
         * If there is another listener with the same `InstancePort` whose `InstanceProtocol` is HTTP or TCP, the listener's `InstanceProtocol` must be HTTP or TCP.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-listeners.html#cfn-elasticloadbalancing-loadbalancer-listeners-instanceprotocol
         */
        readonly instanceProtocol?: string;
        /**
         * The port on which the load balancer is listening.
         *
         * On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-listeners.html#cfn-elasticloadbalancing-loadbalancer-listeners-loadbalancerport
         */
        readonly loadBalancerPort: string;
        /**
         * The names of the policies to associate with the listener.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-listeners.html#cfn-elasticloadbalancing-loadbalancer-listeners-policynames
         */
        readonly policyNames?: Array<string>;
        /**
         * The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-listeners.html#cfn-elasticloadbalancing-loadbalancer-listeners-protocol
         */
        readonly protocol: string;
        /**
         * The Amazon Resource Name (ARN) of the server certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-listeners.html#cfn-elasticloadbalancing-loadbalancer-listeners-sslcertificateid
         */
        readonly sslCertificateId?: string;
    }
    /**
     * Specifies policies for your Classic Load Balancer.
     *
     * To associate policies with a listener, use the [PolicyNames](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb-listener.html#cfn-ec2-elb-listener-policynames) property for the listener.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-policies.html
     */
    interface PoliciesProperty {
        /**
         * The policy attributes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-policies.html#cfn-elasticloadbalancing-loadbalancer-policies-attributes
         */
        readonly attributes: Array<any | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The instance ports for the policy.
         *
         * Required only for some policy types.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-policies.html#cfn-elasticloadbalancing-loadbalancer-policies-instanceports
         */
        readonly instancePorts?: Array<string>;
        /**
         * The load balancer ports for the policy.
         *
         * Required only for some policy types.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-policies.html#cfn-elasticloadbalancing-loadbalancer-policies-loadbalancerports
         */
        readonly loadBalancerPorts?: Array<string>;
        /**
         * The name of the policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-policies.html#cfn-elasticloadbalancing-loadbalancer-policies-policyname
         */
        readonly policyName: string;
        /**
         * The name of the policy type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticloadbalancing-loadbalancer-policies.html#cfn-elasticloadbalancing-loadbalancer-policies-policytype
         */
        readonly policyType: string;
    }
}
/**
 * Properties for defining a `CfnLoadBalancer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html
 */
export interface CfnLoadBalancerProps {
    /**
     * Information about where and how access logs are stored for the load balancer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-accessloggingpolicy
     */
    readonly accessLoggingPolicy?: CfnLoadBalancer.AccessLoggingPolicyProperty | cdk.IResolvable;
    /**
     * Information about a policy for application-controlled session stickiness.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-appcookiestickinesspolicy
     */
    readonly appCookieStickinessPolicy?: Array<CfnLoadBalancer.AppCookieStickinessPolicyProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The Availability Zones for a load balancer in a default VPC.
     *
     * For a load balancer in a nondefault VPC, specify `Subnets` instead.
     *
     * Update requires replacement if you did not previously specify an Availability Zone or if you are removing all Availability Zones. Otherwise, update requires no interruption.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-availabilityzones
     */
    readonly availabilityZones?: Array<string>;
    /**
     * If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.
     *
     * For more information, see [Configure connection draining](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-conn-drain.html) in the *User Guide for Classic Load Balancers* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-connectiondrainingpolicy
     */
    readonly connectionDrainingPolicy?: CfnLoadBalancer.ConnectionDrainingPolicyProperty | cdk.IResolvable;
    /**
     * If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.
     *
     * By default, Elastic Load Balancing maintains a 60-second idle connection timeout for both front-end and back-end connections of your load balancer. For more information, see [Configure idle connection timeout](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/config-idle-timeout.html) in the *User Guide for Classic Load Balancers* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-connectionsettings
     */
    readonly connectionSettings?: CfnLoadBalancer.ConnectionSettingsProperty | cdk.IResolvable;
    /**
     * If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.
     *
     * For more information, see [Configure cross-zone load balancing](https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/enable-disable-crosszone-lb.html) in the *User Guide for Classic Load Balancers* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-crosszone
     */
    readonly crossZone?: boolean | cdk.IResolvable;
    /**
     * The health check settings to use when evaluating the health of your EC2 instances.
     *
     * Update requires replacement if you did not previously specify health check settings or if you are removing the health check settings. Otherwise, update requires no interruption.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-healthcheck
     */
    readonly healthCheck?: CfnLoadBalancer.HealthCheckProperty | cdk.IResolvable;
    /**
     * The IDs of the instances for the load balancer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-instances
     */
    readonly instances?: Array<string>;
    /**
     * Information about a policy for duration-based session stickiness.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-lbcookiestickinesspolicy
     */
    readonly lbCookieStickinessPolicy?: Array<cdk.IResolvable | CfnLoadBalancer.LBCookieStickinessPolicyProperty> | cdk.IResolvable;
    /**
     * The listeners for the load balancer. You can specify at most one listener per port.
     *
     * If you update the properties for a listener, AWS CloudFormation deletes the existing listener and creates a new one with the specified properties. While the new listener is being created, clients cannot connect to the load balancer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-listeners
     */
    readonly listeners: Array<cdk.IResolvable | CfnLoadBalancer.ListenersProperty> | cdk.IResolvable;
    /**
     * The name of the load balancer.
     *
     * This name must be unique within your set of load balancers for the region.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique physical ID for the load balancer. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) . If you specify a name, you cannot perform updates that require replacement of this resource, but you can perform other updates. To replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-loadbalancername
     */
    readonly loadBalancerName?: string;
    /**
     * The policies defined for your Classic Load Balancer.
     *
     * Specify only back-end server policies.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-policies
     */
    readonly policies?: Array<cdk.IResolvable | CfnLoadBalancer.PoliciesProperty> | cdk.IResolvable;
    /**
     * The type of load balancer. Valid only for load balancers in a VPC.
     *
     * If `Scheme` is `internet-facing` , the load balancer has a public DNS name that resolves to a public IP address.
     *
     * If `Scheme` is `internal` , the load balancer has a public DNS name that resolves to a private IP address.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-scheme
     */
    readonly scheme?: string;
    /**
     * The security groups for the load balancer.
     *
     * Valid only for load balancers in a VPC.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-securitygroups
     */
    readonly securityGroups?: Array<string>;
    /**
     * The IDs of the subnets for the load balancer. You can specify at most one subnet per Availability Zone.
     *
     * Update requires replacement if you did not previously specify a subnet or if you are removing all subnets. Otherwise, update requires no interruption. To update to a different subnet in the current Availability Zone, you must first update to a subnet in a different Availability Zone, then update to the new subnet in the original Availability Zone.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-subnets
     */
    readonly subnets?: Array<string>;
    /**
     * The tags associated with a load balancer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancing-loadbalancer.html#cfn-elasticloadbalancing-loadbalancer-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
