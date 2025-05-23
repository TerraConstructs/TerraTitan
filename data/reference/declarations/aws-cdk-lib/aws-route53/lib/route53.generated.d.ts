import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a CIDR collection in the current AWS account.
 *
 * @cloudformationResource AWS::Route53::CidrCollection
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-cidrcollection.html
 */
export declare class CfnCidrCollection extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCidrCollection from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCidrCollection;
    /**
     * "The Amazon resource name (ARN) to uniquely identify the AWS resource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The UUID of the CIDR collection.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A complex type that contains information about the list of CIDR locations.
     */
    locations?: Array<cdk.IResolvable | CfnCidrCollection.LocationProperty> | cdk.IResolvable;
    /**
     * The name of a CIDR collection.
     */
    name: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCidrCollectionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCidrCollection {
    /**
     * Specifies the list of CIDR blocks for a CIDR location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-cidrcollection-location.html
     */
    interface LocationProperty {
        /**
         * List of CIDR blocks.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-cidrcollection-location.html#cfn-route53-cidrcollection-location-cidrlist
         */
        readonly cidrList: Array<string>;
        /**
         * The CIDR collection location name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-cidrcollection-location.html#cfn-route53-cidrcollection-location-locationname
         */
        readonly locationName: string;
    }
}
/**
 * Properties for defining a `CfnCidrCollection`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-cidrcollection.html
 */
export interface CfnCidrCollectionProps {
    /**
     * A complex type that contains information about the list of CIDR locations.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-cidrcollection.html#cfn-route53-cidrcollection-locations
     */
    readonly locations?: Array<cdk.IResolvable | CfnCidrCollection.LocationProperty> | cdk.IResolvable;
    /**
     * The name of a CIDR collection.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-cidrcollection.html#cfn-route53-cidrcollection-name
     */
    readonly name: string;
}
/**
 * The `AWS::Route53::DNSSEC` resource is used to enable DNSSEC signing in a hosted zone.
 *
 * @cloudformationResource AWS::Route53::DNSSEC
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-dnssec.html
 */
export declare class CfnDNSSEC extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDNSSEC from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDNSSEC;
    /**
     * A unique string (ID) that is used to identify a hosted zone.
     */
    hostedZoneId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDNSSECProps);
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
 * Properties for defining a `CfnDNSSEC`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-dnssec.html
 */
export interface CfnDNSSECProps {
    /**
     * A unique string (ID) that is used to identify a hosted zone.
     *
     * For example: `Z00001111A1ABCaaABC11` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-dnssec.html#cfn-route53-dnssec-hostedzoneid
     */
    readonly hostedZoneId: string;
}
/**
 * The `AWS::Route53::HealthCheck` resource is a Route 53 resource type that contains settings for a Route 53 health check.
 *
 * For information about associating health checks with records, see [HealthCheckId](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ResourceRecordSet.html#Route53-Type-ResourceRecordSet-HealthCheckId) in [ChangeResourceRecordSets](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html) .
 *
 * > You can't create a health check with simple routing.
 *
 * *ELB Load Balancers*
 *
 * If you're registering EC2 instances with an Elastic Load Balancing (ELB) load balancer, do not create Amazon Route 53 health checks for the EC2 instances. When you register an EC2 instance with a load balancer, you configure settings for an ELB health check, which performs a similar function to a Route 53 health check.
 *
 * *Private Hosted Zones*
 *
 * You can associate health checks with failover records in a private hosted zone. Note the following:
 *
 * - Route 53 health checkers are outside the VPC. To check the health of an endpoint within a VPC by IP address, you must assign a public IP address to the instance in the VPC.
 * - You can configure a health checker to check the health of an external resource that the instance relies on, such as a database server.
 * - You can create a CloudWatch metric, associate an alarm with the metric, and then create a health check that is based on the state of the alarm. For example, you might create a CloudWatch metric that checks the status of the Amazon EC2 `StatusCheckFailed` metric, add an alarm to the metric, and then create a health check that is based on the state of the alarm. For information about creating CloudWatch metrics and alarms by using the CloudWatch console, see the [Amazon CloudWatch User Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/WhatIsCloudWatch.html) .
 *
 * @cloudformationResource AWS::Route53::HealthCheck
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html
 */
export declare class CfnHealthCheck extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnHealthCheck from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnHealthCheck;
    /**
     * The identifier that Amazon Route 53 assigned to the health check when you created it. When you add or update a resource record set, you use this value to specify which health check to use. The value can be up to 64 characters long.
     *
     * @cloudformationAttribute HealthCheckId
     */
    readonly attrHealthCheckId: string;
    /**
     * A complex type that contains detailed information about one health check.
     */
    healthCheckConfig: CfnHealthCheck.HealthCheckConfigProperty | cdk.IResolvable;
    /**
     * The `HealthCheckTags` property describes key-value pairs that are associated with an `AWS::Route53::HealthCheck` resource.
     */
    healthCheckTags?: Array<CfnHealthCheck.HealthCheckTagProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnHealthCheckProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnHealthCheck {
    /**
     * A complex type that contains information about the health check.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html
     */
    interface HealthCheckConfigProperty {
        /**
         * A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-alarmidentifier
         */
        readonly alarmIdentifier?: CfnHealthCheck.AlarmIdentifierProperty | cdk.IResolvable;
        /**
         * (CALCULATED Health Checks Only) A complex type that contains one `ChildHealthCheck` element for each health check that you want to associate with a `CALCULATED` health check.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-childhealthchecks
         */
        readonly childHealthChecks?: Array<string>;
        /**
         * Specify whether you want Amazon Route 53 to send the value of `FullyQualifiedDomainName` to the endpoint in the `client_hello` message during TLS negotiation.
         *
         * This allows the endpoint to respond to `HTTPS` health check requests with the applicable SSL/TLS certificate.
         *
         * Some endpoints require that `HTTPS` requests include the host name in the `client_hello` message. If you don't enable SNI, the status of the health check will be `SSL alert handshake_failure` . A health check can also have that status for other reasons. If SNI is enabled and you're still getting the error, check the SSL/TLS configuration on your endpoint and confirm that your certificate is valid.
         *
         * The SSL/TLS certificate on your endpoint includes a domain name in the `Common Name` field and possibly several more in the `Subject Alternative Names` field. One of the domain names in the certificate should match the value that you specify for `FullyQualifiedDomainName` . If the endpoint responds to the `client_hello` message with a certificate that does not include the domain name that you specified in `FullyQualifiedDomainName` , a health checker will retry the handshake. In the second attempt, the health checker will omit `FullyQualifiedDomainName` from the `client_hello` message.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-enablesni
         */
        readonly enableSni?: boolean | cdk.IResolvable;
        /**
         * The number of consecutive health checks that an endpoint must pass or fail for Amazon Route 53 to change the current status of the endpoint from unhealthy to healthy or vice versa.
         *
         * For more information, see [How Amazon Route 53 Determines Whether an Endpoint Is Healthy](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html) in the *Amazon Route 53 Developer Guide* .
         *
         * If you don't specify a value for `FailureThreshold` , the default value is three health checks.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-failurethreshold
         */
        readonly failureThreshold?: number;
        /**
         * Amazon Route 53 behavior depends on whether you specify a value for `IPAddress` .
         *
         * *If you specify a value for* `IPAddress` :
         *
         * Amazon Route 53 sends health check requests to the specified IPv4 or IPv6 address and passes the value of `FullyQualifiedDomainName` in the `Host` header for all health checks except TCP health checks. This is typically the fully qualified DNS name of the endpoint on which you want Route 53 to perform health checks.
         *
         * When Route 53 checks the health of an endpoint, here is how it constructs the `Host` header:
         *
         * - If you specify a value of `80` for `Port` and `HTTP` or `HTTP_STR_MATCH` for `Type` , Route 53 passes the value of `FullyQualifiedDomainName` to the endpoint in the Host header.
         * - If you specify a value of `443` for `Port` and `HTTPS` or `HTTPS_STR_MATCH` for `Type` , Route 53 passes the value of `FullyQualifiedDomainName` to the endpoint in the `Host` header.
         * - If you specify another value for `Port` and any value except `TCP` for `Type` , Route 53 passes `FullyQualifiedDomainName:Port` to the endpoint in the `Host` header.
         *
         * If you don't specify a value for `FullyQualifiedDomainName` , Route 53 substitutes the value of `IPAddress` in the `Host` header in each of the preceding cases.
         *
         * *If you don't specify a value for `IPAddress`* :
         *
         * Route 53 sends a DNS request to the domain that you specify for `FullyQualifiedDomainName` at the interval that you specify for `RequestInterval` . Using an IPv4 address that DNS returns, Route 53 then checks the health of the endpoint.
         *
         * > If you don't specify a value for `IPAddress` , Route 53 uses only IPv4 to send health checks to the endpoint. If there's no record with a type of A for the name that you specify for `FullyQualifiedDomainName` , the health check fails with a "DNS resolution failed" error.
         *
         * If you want to check the health of multiple records that have the same name and type, such as multiple weighted records, and if you choose to specify the endpoint only by `FullyQualifiedDomainName` , we recommend that you create a separate health check for each endpoint. For example, create a health check for each HTTP server that is serving content for www.example.com. For the value of `FullyQualifiedDomainName` , specify the domain name of the server (such as us-east-2-www.example.com), not the name of the records (www.example.com).
         *
         * > In this configuration, if you create a health check for which the value of `FullyQualifiedDomainName` matches the name of the records and you then associate the health check with those records, health check results will be unpredictable.
         *
         * In addition, if the value that you specify for `Type` is `HTTP` , `HTTPS` , `HTTP_STR_MATCH` , or `HTTPS_STR_MATCH` , Route 53 passes the value of `FullyQualifiedDomainName` in the `Host` header, as it does when you specify a value for `IPAddress` . If the value of `Type` is `TCP` , Route 53 doesn't pass a `Host` header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-fullyqualifieddomainname
         */
        readonly fullyQualifiedDomainName?: string;
        /**
         * The number of child health checks that are associated with a `CALCULATED` health check that Amazon Route 53 must consider healthy for the `CALCULATED` health check to be considered healthy.
         *
         * To specify the child health checks that you want to associate with a `CALCULATED` health check, use the [ChildHealthChecks](https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-ChildHealthChecks) element.
         *
         * Note the following:
         *
         * - If you specify a number greater than the number of child health checks, Route 53 always considers this health check to be unhealthy.
         * - If you specify `0` , Route 53 always considers this health check to be healthy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-healththreshold
         */
        readonly healthThreshold?: number;
        /**
         * When CloudWatch has insufficient data about the metric to determine the alarm state, the status that you want Amazon Route 53 to assign to the health check:  - `Healthy` : Route 53 considers the health check to be healthy.
         *
         * - `Unhealthy` : Route 53 considers the health check to be unhealthy.
         * - `LastKnownStatus` : Route 53 uses the status of the health check from the last time that CloudWatch had sufficient data to determine the alarm state. For new health checks that have no last known status, the default status for the health check is healthy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-insufficientdatahealthstatus
         */
        readonly insufficientDataHealthStatus?: string;
        /**
         * Specify whether you want Amazon Route 53 to invert the status of a health check, for example, to consider a health check unhealthy when it otherwise would be considered healthy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-inverted
         */
        readonly inverted?: boolean | cdk.IResolvable;
        /**
         * The IPv4 or IPv6 IP address of the endpoint that you want Amazon Route 53 to perform health checks on.
         *
         * If you don't specify a value for `IPAddress` , Route 53 sends a DNS request to resolve the domain name that you specify in `FullyQualifiedDomainName` at the interval that you specify in `RequestInterval` . Using an IP address returned by DNS, Route 53 then checks the health of the endpoint.
         *
         * Use one of the following formats for the value of `IPAddress` :
         *
         * - *IPv4 address* : four values between 0 and 255, separated by periods (.), for example, `192.0.2.44` .
         * - *IPv6 address* : eight groups of four hexadecimal values, separated by colons (:), for example, `2001:0db8:85a3:0000:0000:abcd:0001:2345` . You can also shorten IPv6 addresses as described in RFC 5952, for example, `2001:db8:85a3::abcd:1:2345` .
         *
         * If the endpoint is an EC2 instance, we recommend that you create an Elastic IP address, associate it with your EC2 instance, and specify the Elastic IP address for `IPAddress` . This ensures that the IP address of your instance will never change.
         *
         * For more information, see [FullyQualifiedDomainName](https://docs.aws.amazon.com/Route53/latest/APIReference/API_UpdateHealthCheck.html#Route53-UpdateHealthCheck-request-FullyQualifiedDomainName) .
         *
         * Constraints: Route 53 can't check the health of endpoints for which the IP address is in local, private, non-routable, or multicast ranges. For more information about IP addresses for which you can't create health checks, see the following documents:
         *
         * - [RFC 5735, Special Use IPv4 Addresses](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc5735)
         * - [RFC 6598, IANA-Reserved IPv4 Prefix for Shared Address Space](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc6598)
         * - [RFC 5156, Special-Use IPv6 Addresses](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc5156)
         *
         * When the value of `Type` is `CALCULATED` or `CLOUDWATCH_METRIC` , omit `IPAddress` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-ipaddress
         */
        readonly ipAddress?: string;
        /**
         * Specify whether you want Amazon Route 53 to measure the latency between health checkers in multiple AWS regions and your endpoint, and to display CloudWatch latency graphs on the *Health Checks* page in the Route 53 console.
         *
         * > You can't change the value of `MeasureLatency` after you create a health check.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-measurelatency
         */
        readonly measureLatency?: boolean | cdk.IResolvable;
        /**
         * The port on the endpoint that you want Amazon Route 53 to perform health checks on.
         *
         * > Don't specify a value for `Port` when you specify a value for [Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-type) of `CLOUDWATCH_METRIC` or `CALCULATED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-port
         */
        readonly port?: number;
        /**
         * A complex type that contains one `Region` element for each region from which you want Amazon Route 53 health checkers to check the specified endpoint.
         *
         * If you don't specify any regions, Route 53 health checkers automatically performs checks from all of the regions that are listed under *Valid Values* .
         *
         * If you update a health check to remove a region that has been performing health checks, Route 53 will briefly continue to perform checks from that region to ensure that some health checkers are always checking the endpoint (for example, if you replace three regions with four different regions).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-regions
         */
        readonly regions?: Array<string>;
        /**
         * The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next health check request.
         *
         * Each Route 53 health checker makes requests at this interval.
         *
         * > You can't change the value of `RequestInterval` after you create a health check.
         *
         * If you don't specify a value for `RequestInterval` , the default value is `30` seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-requestinterval
         */
        readonly requestInterval?: number;
        /**
         * The path, if any, that you want Amazon Route 53 to request when performing health checks.
         *
         * The path can be any value for which your endpoint will return an HTTP status code of 2xx or 3xx when the endpoint is healthy, for example, the file /docs/route53-health-check.html. You can also include query string parameters, for example, `/welcome.html?language=jp&login=y` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-resourcepath
         */
        readonly resourcePath?: string;
        /**
         * The Amazon Resource Name (ARN) for the Route 53 Application Recovery Controller routing control.
         *
         * For more information about Route 53 Application Recovery Controller, see [Route 53 Application Recovery Controller Developer Guide.](https://docs.aws.amazon.com/r53recovery/latest/dg/what-is-route-53-recovery.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-routingcontrolarn
         */
        readonly routingControlArn?: string;
        /**
         * If the value of Type is `HTTP_STR_MATCH` or `HTTPS_STR_MATCH` , the string that you want Amazon Route 53 to search for in the response body from the specified resource.
         *
         * If the string appears in the response body, Route 53 considers the resource healthy.
         *
         * Route 53 considers case when searching for `SearchString` in the response body.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-searchstring
         */
        readonly searchString?: string;
        /**
         * The type of health check that you want to create, which indicates how Amazon Route 53 determines whether an endpoint is healthy.
         *
         * > You can't change the value of `Type` after you create a health check.
         *
         * You can create the following types of health checks:
         *
         * - *HTTP* : Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTP request and waits for an HTTP status code of 200 or greater and less than 400.
         * - *HTTPS* : Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTPS request and waits for an HTTP status code of 200 or greater and less than 400.
         *
         * > If you specify `HTTPS` for the value of `Type` , the endpoint must support TLS v1.0 or later.
         * - *HTTP_STR_MATCH* : Route 53 tries to establish a TCP connection. If successful, Route 53 submits an HTTP request and searches the first 5,120 bytes of the response body for the string that you specify in `SearchString` .
         * - *HTTPS_STR_MATCH* : Route 53 tries to establish a TCP connection. If successful, Route 53 submits an `HTTPS` request and searches the first 5,120 bytes of the response body for the string that you specify in `SearchString` .
         * - *TCP* : Route 53 tries to establish a TCP connection.
         * - *CLOUDWATCH_METRIC* : The health check is associated with a CloudWatch alarm. If the state of the alarm is `OK` , the health check is considered healthy. If the state is `ALARM` , the health check is considered unhealthy. If CloudWatch doesn't have sufficient data to determine whether the state is `OK` or `ALARM` , the health check status depends on the setting for `InsufficientDataHealthStatus` : `Healthy` , `Unhealthy` , or `LastKnownStatus` .
         *
         * > Route 53 supports CloudWatch alarms with the following features:
         * >
         * > - Standard-resolution metrics. High-resolution metrics aren't supported. For more information, see [High-Resolution Metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/publishingMetrics.html#high-resolution-metrics) in the *Amazon CloudWatch User Guide* .
         * > - Statistics: Average, Minimum, Maximum, Sum, and SampleCount. Extended statistics aren't supported.
         * - *CALCULATED* : For health checks that monitor the status of other health checks, Route 53 adds up the number of health checks that Route 53 health checkers consider to be healthy and compares that number with the value of `HealthThreshold` .
         * - *RECOVERY_CONTROL* : The health check is assocated with a Route53 Application Recovery Controller routing control. If the routing control state is `ON` , the health check is considered healthy. If the state is `OFF` , the health check is considered unhealthy.
         *
         * For more information, see [How Route 53 Determines Whether an Endpoint Is Healthy](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html) in the *Amazon Route 53 Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthcheckconfig.html#cfn-route53-healthcheck-healthcheckconfig-type
         */
        readonly type: string;
    }
    /**
     * A complex type that identifies the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether the specified health check is healthy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-alarmidentifier.html
     */
    interface AlarmIdentifierProperty {
        /**
         * The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.
         *
         * > Route 53 supports CloudWatch alarms with the following features:
         * >
         * > - Standard-resolution metrics. High-resolution metrics aren't supported. For more information, see [High-Resolution Metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/DeveloperGuide/publishingMetrics.html#high-resolution-metrics) in the *Amazon CloudWatch User Guide* .
         * > - Statistics: Average, Minimum, Maximum, Sum, and SampleCount. Extended statistics aren't supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-alarmidentifier.html#cfn-route53-healthcheck-alarmidentifier-name
         */
        readonly name: string;
        /**
         * For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.
         *
         * For the current list of CloudWatch regions, see [Amazon CloudWatch endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/cw_region.html) in the *Amazon Web Services General Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-alarmidentifier.html#cfn-route53-healthcheck-alarmidentifier-region
         */
        readonly region: string;
    }
    /**
     * The `HealthCheckTag` property describes one key-value pair that is associated with an `AWS::Route53::HealthCheck` resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthchecktag.html
     */
    interface HealthCheckTagProperty {
        /**
         * The value of `Key` depends on the operation that you want to perform:.
         *
         * - *Add a tag to a health check or hosted zone* : `Key` is the name that you want to give the new tag.
         * - *Edit a tag* : `Key` is the name of the tag that you want to change the `Value` for.
         * - *Delete a key* : `Key` is the name of the tag you want to remove.
         * - *Give a name to a health check* : Edit the default `Name` tag. In the Amazon Route 53 console, the list of your health checks includes a *Name* column that lets you see the name that you've given to each health check.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthchecktag.html#cfn-route53-healthcheck-healthchecktag-key
         */
        readonly key: string;
        /**
         * The value of `Value` depends on the operation that you want to perform:.
         *
         * - *Add a tag to a health check or hosted zone* : `Value` is the value that you want to give the new tag.
         * - *Edit a tag* : `Value` is the new value that you want to assign the tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-healthcheck-healthchecktag.html#cfn-route53-healthcheck-healthchecktag-value
         */
        readonly value: string;
    }
}
/**
 * Properties for defining a `CfnHealthCheck`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html
 */
export interface CfnHealthCheckProps {
    /**
     * A complex type that contains detailed information about one health check.
     *
     * For the values to enter for `HealthCheckConfig` , see [HealthCheckConfig](https://docs.aws.amazon.com/Route53/latest/APIReference/API_HealthCheckConfig.html)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html#cfn-route53-healthcheck-healthcheckconfig
     */
    readonly healthCheckConfig: CfnHealthCheck.HealthCheckConfigProperty | cdk.IResolvable;
    /**
     * The `HealthCheckTags` property describes key-value pairs that are associated with an `AWS::Route53::HealthCheck` resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-healthcheck.html#cfn-route53-healthcheck-healthchecktags
     */
    readonly healthCheckTags?: Array<CfnHealthCheck.HealthCheckTagProperty | cdk.IResolvable> | cdk.IResolvable;
}
/**
 * Creates a new public or private hosted zone.
 *
 * You create records in a public hosted zone to define how you want to route traffic on the internet for a domain, such as example.com, and its subdomains (apex.example.com, acme.example.com). You create records in a private hosted zone to define how you want to route traffic for a domain and its subdomains within one or more Amazon Virtual Private Clouds (Amazon VPCs).
 *
 * > You can't convert a public hosted zone to a private hosted zone or vice versa. Instead, you must create a new hosted zone with the same name and create new resource record sets.
 *
 * For more information about charges for hosted zones, see [Amazon Route 53 Pricing](https://docs.aws.amazon.com/route53/pricing/) .
 *
 * Note the following:
 *
 * - You can't create a hosted zone for a top-level domain (TLD) such as .com.
 * - If your domain is registered with a registrar other than Route 53, you must update the name servers with your registrar to make Route 53 the DNS service for the domain. For more information, see [Migrating DNS Service for an Existing Domain to Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/MigratingDNS.html) in the *Amazon Route 53 Developer Guide* .
 *
 * When you submit a `CreateHostedZone` request, the initial status of the hosted zone is `PENDING` . For public hosted zones, this means that the NS and SOA records are not yet available on all Route 53 DNS servers. When the NS and SOA records are available, the status of the zone changes to `INSYNC` .
 *
 * The `CreateHostedZone` request requires the caller to have an `ec2:DescribeVpcs` permission.
 *
 * > When creating private hosted zones, the Amazon VPC must belong to the same partition where the hosted zone is created. A partition is a group of AWS Regions . Each AWS account is scoped to one partition.
 * >
 * > The following are the supported partitions:
 * >
 * > - `aws` - AWS Regions
 * > - `aws-cn` - China Regions
 * > - `aws-us-gov` - AWS GovCloud (US) Region
 * >
 * > For more information, see [Access Management](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *AWS General Reference* .
 *
 * @cloudformationResource AWS::Route53::HostedZone
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html
 */
export declare class CfnHostedZone extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnHostedZone from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnHostedZone;
    /**
     * The ID that Amazon Route 53 assigned to the hosted zone when you created it.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Returns the set of name servers for the specific hosted zone. For example: `ns1.example.com` .
     *
     * This attribute is not supported for private hosted zones.
     *
     * @cloudformationAttribute NameServers
     */
    readonly attrNameServers: Array<string>;
    /**
     * A complex type that contains an optional comment.
     */
    hostedZoneConfig?: CfnHostedZone.HostedZoneConfigProperty | cdk.IResolvable;
    /**
     * Adds, edits, or deletes tags for a health check or a hosted zone.
     */
    hostedZoneTagsRaw?: Array<CfnHostedZone.HostedZoneTagProperty>;
    /**
     * The name of the domain.
     */
    name?: string;
    /**
     * Creates a configuration for DNS query logging.
     */
    queryLoggingConfig?: cdk.IResolvable | CfnHostedZone.QueryLoggingConfigProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * *Private hosted zones:* A complex type that contains information about the VPCs that are associated with the specified hosted zone.
     */
    vpcs?: Array<cdk.IResolvable | CfnHostedZone.VPCProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnHostedZoneProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnHostedZone {
    /**
     * A complex type that contains information about a tag that you want to add or edit for the specified health check or hosted zone.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzonetag.html
     */
    interface HostedZoneTagProperty {
        /**
         * The value of `Key` depends on the operation that you want to perform:.
         *
         * - *Add a tag to a health check or hosted zone* : `Key` is the name that you want to give the new tag.
         * - *Edit a tag* : `Key` is the name of the tag that you want to change the `Value` for.
         * - *Delete a key* : `Key` is the name of the tag you want to remove.
         * - *Give a name to a health check* : Edit the default `Name` tag. In the Amazon Route 53 console, the list of your health checks includes a *Name* column that lets you see the name that you've given to each health check.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzonetag.html#cfn-route53-hostedzone-hostedzonetag-key
         */
        readonly key: string;
        /**
         * The value of `Value` depends on the operation that you want to perform:.
         *
         * - *Add a tag to a health check or hosted zone* : `Value` is the value that you want to give the new tag.
         * - *Edit a tag* : `Value` is the new value that you want to assign the tag.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzonetag.html#cfn-route53-hostedzone-hostedzonetag-value
         */
        readonly value: string;
    }
    /**
     * *Private hosted zones only:* A complex type that contains information about an Amazon VPC.
     *
     * Route 53 Resolver uses the records in the private hosted zone to route traffic in that VPC.
     *
     * > For public hosted zones, omit `VPCs` , `VPCId` , and `VPCRegion` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-vpc.html
     */
    interface VPCProperty {
        /**
         * *Private hosted zones only:* The ID of an Amazon VPC.
         *
         * > For public hosted zones, omit `VPCs` , `VPCId` , and `VPCRegion` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-vpc.html#cfn-route53-hostedzone-vpc-vpcid
         */
        readonly vpcId: string;
        /**
         * *Private hosted zones only:* The region that an Amazon VPC was created in.
         *
         * > For public hosted zones, omit `VPCs` , `VPCId` , and `VPCRegion` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-vpc.html#cfn-route53-hostedzone-vpc-vpcregion
         */
        readonly vpcRegion: string;
    }
    /**
     * A complex type that contains an optional comment about your hosted zone.
     *
     * If you don't want to specify a comment, omit both the `HostedZoneConfig` and `Comment` elements.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzoneconfig.html
     */
    interface HostedZoneConfigProperty {
        /**
         * Any comments that you want to include about the hosted zone.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-hostedzoneconfig.html#cfn-route53-hostedzone-hostedzoneconfig-comment
         */
        readonly comment?: string;
    }
    /**
     * A complex type that contains information about a configuration for DNS query logging.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-queryloggingconfig.html
     */
    interface QueryLoggingConfigProperty {
        /**
         * The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-hostedzone-queryloggingconfig.html#cfn-route53-hostedzone-queryloggingconfig-cloudwatchlogsloggrouparn
         */
        readonly cloudWatchLogsLogGroupArn: string;
    }
}
/**
 * Properties for defining a `CfnHostedZone`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html
 */
export interface CfnHostedZoneProps {
    /**
     * A complex type that contains an optional comment.
     *
     * If you don't want to specify a comment, omit the `HostedZoneConfig` and `Comment` elements.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html#cfn-route53-hostedzone-hostedzoneconfig
     */
    readonly hostedZoneConfig?: CfnHostedZone.HostedZoneConfigProperty | cdk.IResolvable;
    /**
     * Adds, edits, or deletes tags for a health check or a hosted zone.
     *
     * For information about using tags for cost allocation, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the *AWS Billing and Cost Management User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html#cfn-route53-hostedzone-hostedzonetags
     */
    readonly hostedZoneTags?: Array<CfnHostedZone.HostedZoneTagProperty>;
    /**
     * The name of the domain.
     *
     * Specify a fully qualified domain name, for example, *www.example.com* . The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats *www.example.com* (without a trailing dot) and *www.example.com.* (with a trailing dot) as identical.
     *
     * If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of `NameServers` that are returned by the `Fn::GetAtt` intrinsic function.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html#cfn-route53-hostedzone-name
     */
    readonly name?: string;
    /**
     * Creates a configuration for DNS query logging.
     *
     * After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group.
     *
     * DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:
     *
     * - Route 53 edge location that responded to the DNS query
     * - Domain or subdomain that was requested
     * - DNS record type, such as A or AAAA
     * - DNS response code, such as `NoError` or `ServFail`
     *
     * - **Log Group and Resource Policy** - Before you create a query logging configuration, perform the following operations.
     *
     * > If you create a query logging configuration using the Route 53 console, Route 53 performs these operations automatically.
     *
     * - Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following:
     *
     * - You must create the log group in the us-east-1 region.
     * - You must use the same AWS account to create the log group and the hosted zone that you want to configure query logging for.
     * - When you create log groups for query logging, we recommend that you use a consistent prefix, for example:
     *
     * `/aws/route53/ *hosted zone name*`
     *
     * In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated AWS resources, such as Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging.
     * - Create a CloudWatch Logs resource policy, and give it the permissions that Route 53 needs to create log streams and to send query logs to log streams. You must create the CloudWatch Logs resource policy in the us-east-1 region. For the value of `Resource` , specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with `*` , for example:
     *
     * `arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/*`
     *
     * To avoid the confused deputy problem, a security issue where an entity without a permission for an action can coerce a more-privileged entity to perform it, you can optionally limit the permissions that a service has to a resource in a resource-based policy by supplying the following values:
     *
     * - For `aws:SourceArn` , supply the hosted zone ARN used in creating the query logging configuration. For example, `aws:SourceArn: arn:aws:route53:::hostedzone/hosted zone ID` .
     * - For `aws:SourceAccount` , supply the account ID for the account that creates the query logging configuration. For example, `aws:SourceAccount:111111111111` .
     *
     * For more information, see [The confused deputy problem](https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html) in the *AWS IAM User Guide* .
     *
     * > You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the AWS SDKs, or the AWS CLI .
     * - **Log Streams and Edge Locations** - When Route 53 finishes creating the configuration for DNS query logging, it does the following:
     *
     * - Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Route 53 responds to for that edge location.
     * - Begins to send query logs to the applicable log stream.
     *
     * The name of each log stream is in the following format:
     *
     * `*hosted zone ID* / *edge location code*`
     *
     * The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see "The Route 53 Global Network" on the [Route 53 Product Details](https://docs.aws.amazon.com/route53/details/) page.
     * - **Queries That Are Logged** - Query logs contain only the queries that DNS resolvers forward to Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn't forward another query to Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see [Routing Internet Traffic to Your Website or Web Application](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-dns-service.html) in the *Amazon Route 53 Developer Guide* .
     * - **Log File Format** - For a list of the values in each query log and the format of each value, see [Logging DNS Queries](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/query-logs.html) in the *Amazon Route 53 Developer Guide* .
     * - **Pricing** - For information about charges for query logs, see [Amazon CloudWatch Pricing](https://docs.aws.amazon.com/cloudwatch/pricing/) .
     * - **How to Stop Logging** - If you want Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see [DeleteQueryLoggingConfig](https://docs.aws.amazon.com/Route53/latest/APIReference/API_DeleteQueryLoggingConfig.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html#cfn-route53-hostedzone-queryloggingconfig
     */
    readonly queryLoggingConfig?: cdk.IResolvable | CfnHostedZone.QueryLoggingConfigProperty;
    /**
     * *Private hosted zones:* A complex type that contains information about the VPCs that are associated with the specified hosted zone.
     *
     * > For public hosted zones, omit `VPCs` , `VPCId` , and `VPCRegion` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-hostedzone.html#cfn-route53-hostedzone-vpcs
     */
    readonly vpcs?: Array<cdk.IResolvable | CfnHostedZone.VPCProperty> | cdk.IResolvable;
}
/**
 * The `AWS::Route53::KeySigningKey` resource creates a new key-signing key (KSK) in a hosted zone.
 *
 * The hosted zone ID is passed as a parameter in the KSK properties. You can specify the properties of this KSK using the `Name` , `Status` , and `KeyManagementServiceArn` properties of the resource.
 *
 * @cloudformationResource AWS::Route53::KeySigningKey
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html
 */
export declare class CfnKeySigningKey extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnKeySigningKey from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnKeySigningKey;
    /**
     * The unique string (ID) that is used to identify a hosted zone.
     */
    hostedZoneId: string;
    /**
     * The Amazon resource name (ARN) for a customer managed customer master key (CMK) in AWS Key Management Service ( AWS KMS ).
     */
    keyManagementServiceArn: string;
    /**
     * A string used to identify a key-signing key (KSK).
     */
    name: string;
    /**
     * A string that represents the current key-signing key (KSK) status.
     */
    status: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnKeySigningKeyProps);
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
 * Properties for defining a `CfnKeySigningKey`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html
 */
export interface CfnKeySigningKeyProps {
    /**
     * The unique string (ID) that is used to identify a hosted zone.
     *
     * For example: `Z00001111A1ABCaaABC11` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html#cfn-route53-keysigningkey-hostedzoneid
     */
    readonly hostedZoneId: string;
    /**
     * The Amazon resource name (ARN) for a customer managed customer master key (CMK) in AWS Key Management Service ( AWS KMS ).
     *
     * The `KeyManagementServiceArn` must be unique for each key-signing key (KSK) in a single hosted zone. For example: `arn:aws:kms:us-east-1:111122223333:key/111a2222-a11b-1ab1-2ab2-1ab21a2b3a111` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html#cfn-route53-keysigningkey-keymanagementservicearn
     */
    readonly keyManagementServiceArn: string;
    /**
     * A string used to identify a key-signing key (KSK).
     *
     * `Name` can include numbers, letters, and underscores (_). `Name` must be unique for each key-signing key in the same hosted zone.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html#cfn-route53-keysigningkey-name
     */
    readonly name: string;
    /**
     * A string that represents the current key-signing key (KSK) status.
     *
     * Status can have one of the following values:
     *
     * - **ACTIVE** - The KSK is being used for signing.
     * - **INACTIVE** - The KSK is not being used for signing.
     * - **DELETING** - The KSK is in the process of being deleted.
     * - **ACTION_NEEDED** - There is a problem with the KSK that requires you to take action to resolve. For example, the customer managed key might have been deleted, or the permissions for the customer managed key might have been changed.
     * - **INTERNAL_FAILURE** - There was an error during a request. Before you can continue to work with DNSSEC signing, including actions that involve this KSK, you must correct the problem. For example, you may need to activate or deactivate the KSK.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html#cfn-route53-keysigningkey-status
     */
    readonly status: string;
}
/**
 * Information about the record that you want to create.
 *
 * The `AWS::Route53::RecordSet` type can be used as a standalone resource or as an embedded property in the `AWS::Route53::RecordSetGroup` type. Note that some `AWS::Route53::RecordSet` properties are valid only when used within `AWS::Route53::RecordSetGroup` .
 *
 * For more information, see [ChangeResourceRecordSets](https://docs.aws.amazon.com/Route53/latest/APIReference/API_ChangeResourceRecordSets.html) in the *Amazon Route 53 API Reference* .
 *
 * @cloudformationResource AWS::Route53::RecordSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html
 */
export declare class CfnRecordSet extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRecordSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRecordSet;
    /**
     * Specifies a coordinate of the east–west position of a geographic point on the surface of the Earth.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * *Alias resource record sets only:* Information about the AWS resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to.
     */
    aliasTarget?: CfnRecordSet.AliasTargetProperty | cdk.IResolvable;
    /**
     * The object that is specified in resource record set object when you are linking a resource record set to a CIDR location.
     */
    cidrRoutingConfig?: CfnRecordSet.CidrRoutingConfigProperty | cdk.IResolvable;
    /**
     * *Optional:* Any comments you want to include about a change batch request.
     */
    comment?: string;
    /**
     * *Failover resource record sets only:* To configure failover, you add the `Failover` element to two resource record sets.
     */
    failover?: string;
    /**
     * *Geolocation resource record sets only:* A complex type that lets you control how Amazon Route 53 responds to DNS queries based on the geographic origin of the query.
     */
    geoLocation?: CfnRecordSet.GeoLocationProperty | cdk.IResolvable;
    /**
     * *GeoproximityLocation resource record sets only:* A complex type that lets you control how Route 53 responds to DNS queries based on the geographic origin of the query and your resources.
     */
    geoProximityLocation?: CfnRecordSet.GeoProximityLocationProperty | cdk.IResolvable;
    /**
     * If you want Amazon Route 53 to return this resource record set in response to a DNS query only when the status of a health check is healthy, include the `HealthCheckId` element and specify the ID of the applicable health check.
     */
    healthCheckId?: string;
    /**
     * The ID of the hosted zone that you want to create records in.
     */
    hostedZoneId?: string;
    /**
     * The name of the hosted zone that you want to create records in.
     */
    hostedZoneName?: string;
    /**
     * *Multivalue answer resource record sets only* : To route traffic approximately randomly to multiple resources, such as web servers, create one multivalue answer record for each resource and specify `true` for `MultiValueAnswer` .
     */
    multiValueAnswer?: boolean | cdk.IResolvable;
    /**
     * For `ChangeResourceRecordSets` requests, the name of the record that you want to create, update, or delete.
     */
    name: string;
    /**
     * *Latency-based resource record sets only:* The Amazon EC2 Region where you created the resource that this resource record set refers to.
     */
    region?: string;
    /**
     * One or more values that correspond with the value that you specified for the `Type` property.
     */
    resourceRecords?: Array<string>;
    /**
     * *Resource record sets that have a routing policy other than simple:* An identifier that differentiates among multiple resource record sets that have the same combination of name and type, such as multiple weighted resource record sets named acme.example.com that have a type of A. In a group of resource record sets that have the same name and type, the value of `SetIdentifier` must be unique for each resource record set.
     */
    setIdentifier?: string;
    /**
     * The resource record cache time to live (TTL), in seconds. Note the following:.
     */
    ttl?: string;
    /**
     * The DNS record type.
     */
    type: string;
    /**
     * *Weighted resource record sets only:* Among resource record sets that have the same combination of DNS name and type, a value that determines the proportion of DNS queries that Amazon Route 53 responds to using the current resource record set.
     */
    weight?: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnRecordSetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRecordSet {
    /**
     * *Alias records only:* Information about the AWS resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to.
     *
     * When creating records for a private hosted zone, note the following:
     *
     * - Creating geolocation alias and latency alias records in a private hosted zone is allowed but not supported.
     * - For information about creating failover records in a private hosted zone, see [Configuring Failover in a Private Hosted Zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-aliastarget.html
     */
    interface AliasTargetProperty {
        /**
         * *Alias records only:* The value that you specify depends on where you want to route queries:.
         *
         * - **Amazon API Gateway custom regional APIs and edge-optimized APIs** - Specify the applicable domain name for your API. You can get the applicable value using the AWS CLI command [get-domain-names](https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-domain-names.html) :
         *
         * - For regional APIs, specify the value of `regionalDomainName` .
         * - For edge-optimized APIs, specify the value of `distributionDomainName` . This is the name of the associated CloudFront distribution, such as `da1b2c3d4e5.cloudfront.net` .
         *
         * > The name of the record that you're creating must match a custom domain name for your API, such as `api.example.com` .
         * - **Amazon Virtual Private Cloud interface VPC endpoint** - Enter the API endpoint for the interface endpoint, such as `vpce-123456789abcdef01-example-us-east-1a.elasticloadbalancing.us-east-1.vpce.amazonaws.com` . For edge-optimized APIs, this is the domain name for the corresponding CloudFront distribution. You can get the value of `DnsName` using the AWS CLI command [describe-vpc-endpoints](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-vpc-endpoints.html) .
         * - **CloudFront distribution** - Specify the domain name that CloudFront assigned when you created your distribution.
         *
         * Your CloudFront distribution must include an alternate domain name that matches the name of the record. For example, if the name of the record is *acme.example.com* , your CloudFront distribution must include *acme.example.com* as one of the alternate domain names. For more information, see [Using Alternate Domain Names (CNAMEs)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html) in the *Amazon CloudFront Developer Guide* .
         *
         * You can't create a record in a private hosted zone to route traffic to a CloudFront distribution.
         *
         * > For failover alias records, you can't specify a CloudFront distribution for both the primary and secondary records. A distribution must include an alternate domain name that matches the name of the record. However, the primary and secondary records have the same name, and you can't include the same alternate domain name in more than one distribution.
         * - **Elastic Beanstalk environment** - If the domain name for your Elastic Beanstalk environment includes the region that you deployed the environment in, you can create an alias record that routes traffic to the environment. For example, the domain name `my-environment. *us-west-2* .elasticbeanstalk.com` is a regionalized domain name.
         *
         * > For environments that were created before early 2016, the domain name doesn't include the region. To route traffic to these environments, you must create a CNAME record instead of an alias record. Note that you can't create a CNAME record for the root domain name. For example, if your domain name is example.com, you can create a record that routes traffic for acme.example.com to your Elastic Beanstalk environment, but you can't create a record that routes traffic for example.com to your Elastic Beanstalk environment.
         *
         * For Elastic Beanstalk environments that have regionalized subdomains, specify the `CNAME` attribute for the environment. You can use the following methods to get the value of the CNAME attribute:
         *
         * - *AWS Management Console* : For information about how to get the value by using the console, see [Using Custom Domains with AWS Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/customdomains.html) in the *AWS Elastic Beanstalk Developer Guide* .
         * - *Elastic Beanstalk API* : Use the `DescribeEnvironments` action to get the value of the `CNAME` attribute. For more information, see [DescribeEnvironments](https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironments.html) in the *AWS Elastic Beanstalk API Reference* .
         * - *AWS CLI* : Use the `describe-environments` command to get the value of the `CNAME` attribute. For more information, see [describe-environments](https://docs.aws.amazon.com/cli/latest/reference/elasticbeanstalk/describe-environments.html) in the *AWS CLI* .
         * - **ELB load balancer** - Specify the DNS name that is associated with the load balancer. Get the DNS name by using the AWS Management Console , the ELB API, or the AWS CLI .
         *
         * - *AWS Management Console* : Go to the EC2 page, choose *Load Balancers* in the navigation pane, choose the load balancer, choose the *Description* tab, and get the value of the *DNS name* field.
         *
         * If you're routing traffic to a Classic Load Balancer, get the value that begins with *dualstack* . If you're routing traffic to another type of load balancer, get the value that applies to the record type, A or AAAA.
         * - *Elastic Load Balancing API* : Use `DescribeLoadBalancers` to get the value of `DNSName` . For more information, see the applicable guide:
         *
         * - Classic Load Balancers: [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancers.html)
         * - Application and Network Load Balancers: [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html)
         * - *CloudFormation Fn::GetAtt intrinsic function* : Use the [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html) intrinsic function to get the value of `DNSName` :
         *
         * - [Classic Load Balancers](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb.html#aws-properties-ec2-elb-return-values) .
         * - [Application and Network Load Balancers](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#aws-resource-elasticloadbalancingv2-loadbalancer-return-values) .
         * - *AWS CLI* : Use `describe-load-balancers` to get the value of `DNSName` . For more information, see the applicable guide:
         *
         * - Classic Load Balancers: [describe-load-balancers](https://docs.aws.amazon.com/cli/latest/reference/elb/describe-load-balancers.html)
         * - Application and Network Load Balancers: [describe-load-balancers](https://docs.aws.amazon.com/cli/latest/reference/elbv2/describe-load-balancers.html)
         * - **Global Accelerator accelerator** - Specify the DNS name for your accelerator:
         *
         * - *Global Accelerator API* : To get the DNS name, use [DescribeAccelerator](https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeAccelerator.html) .
         * - *AWS CLI* : To get the DNS name, use [describe-accelerator](https://docs.aws.amazon.com/cli/latest/reference/globalaccelerator/describe-accelerator.html) .
         * - **Amazon S3 bucket that is configured as a static website** - Specify the domain name of the Amazon S3 website endpoint that you created the bucket in, for example, `s3-website.us-east-2.amazonaws.com` . For more information about valid values, see the table [Amazon S3 Website Endpoints](https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_website_region_endpoints) in the *Amazon Web Services General Reference* . For more information about using S3 buckets for websites, see [Getting Started with Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/getting-started.html) in the *Amazon Route 53 Developer Guide.*
         * - **Another Route 53 record** - Specify the value of the `Name` element for a record in the current hosted zone.
         *
         * > If you're creating an alias record that has the same name as the hosted zone (known as the zone apex), you can't specify the domain name for a record for which the value of `Type` is `CNAME` . This is because the alias record must have the same type as the record that you're routing traffic to, and creating a CNAME record for the zone apex isn't supported even for an alias record.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-aliastarget.html#cfn-route53-recordset-aliastarget-dnsname
         */
        readonly dnsName: string;
        /**
         * *Applies only to alias, failover alias, geolocation alias, latency alias, and weighted alias resource record sets:* When `EvaluateTargetHealth` is `true` , an alias resource record set inherits the health of the referenced AWS resource, such as an ELB load balancer or another resource record set in the hosted zone.
         *
         * Note the following:
         *
         * - **CloudFront distributions** - You can't set `EvaluateTargetHealth` to `true` when the alias target is a CloudFront distribution.
         * - **Elastic Beanstalk environments that have regionalized subdomains** - If you specify an Elastic Beanstalk environment in `DNSName` and the environment contains an ELB load balancer, Elastic Load Balancing routes queries only to the healthy Amazon EC2 instances that are registered with the load balancer. (An environment automatically contains an ELB load balancer if it includes more than one Amazon EC2 instance.) If you set `EvaluateTargetHealth` to `true` and either no Amazon EC2 instances are healthy or the load balancer itself is unhealthy, Route 53 routes queries to other available resources that are healthy, if any.
         *
         * If the environment contains a single Amazon EC2 instance, there are no special requirements.
         * - **ELB load balancers** - Health checking behavior depends on the type of load balancer:
         *
         * - *Classic Load Balancers* : If you specify an ELB Classic Load Balancer in `DNSName` , Elastic Load Balancing routes queries only to the healthy Amazon EC2 instances that are registered with the load balancer. If you set `EvaluateTargetHealth` to `true` and either no EC2 instances are healthy or the load balancer itself is unhealthy, Route 53 routes queries to other resources.
         * - *Application and Network Load Balancers* : If you specify an ELB Application or Network Load Balancer and you set `EvaluateTargetHealth` to `true` , Route 53 routes queries to the load balancer based on the health of the target groups that are associated with the load balancer:
         *
         * - For an Application or Network Load Balancer to be considered healthy, every target group that contains targets must contain at least one healthy target. If any target group contains only unhealthy targets, the load balancer is considered unhealthy, and Route 53 routes queries to other resources.
         * - A target group that has no registered targets is considered unhealthy.
         *
         * > When you create a load balancer, you configure settings for Elastic Load Balancing health checks; they're not Route 53 health checks, but they perform a similar function. Do not create Route 53 health checks for the EC2 instances that you register with an ELB load balancer.
         * - **S3 buckets** - There are no special requirements for setting `EvaluateTargetHealth` to `true` when the alias target is an S3 bucket.
         * - **Other records in the same hosted zone** - If the AWS resource that you specify in `DNSName` is a record or a group of records (for example, a group of weighted records) but is not another alias record, we recommend that you associate a health check with all of the records in the alias target. For more information, see [What Happens When You Omit Health Checks?](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html#dns-failover-complex-configs-hc-omitting) in the *Amazon Route 53 Developer Guide* .
         *
         * For more information and examples, see [Amazon Route 53 Health Checks and DNS Failover](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html) in the *Amazon Route 53 Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-aliastarget.html#cfn-route53-recordset-aliastarget-evaluatetargethealth
         */
        readonly evaluateTargetHealth?: boolean | cdk.IResolvable;
        /**
         * *Alias resource records sets only* : The value used depends on where you want to route traffic:.
         *
         * - **Amazon API Gateway custom regional APIs and edge-optimized APIs** - Specify the hosted zone ID for your API. You can get the applicable value using the AWS CLI command [get-domain-names](https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-domain-names.html) :
         *
         * - For regional APIs, specify the value of `regionalHostedZoneId` .
         * - For edge-optimized APIs, specify the value of `distributionHostedZoneId` .
         * - **Amazon Virtual Private Cloud interface VPC endpoint** - Specify the hosted zone ID for your interface endpoint. You can get the value of `HostedZoneId` using the AWS CLI command [describe-vpc-endpoints](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-vpc-endpoints.html) .
         * - **CloudFront distribution** - Specify `Z2FDTNDATAQYW2` . This is always the hosted zone ID when you create an alias record that routes traffic to a CloudFront distribution.
         *
         * > Alias records for CloudFront can't be created in a private zone.
         * - **Elastic Beanstalk environment** - Specify the hosted zone ID for the region that you created the environment in. The environment must have a regionalized subdomain. For a list of regions and the corresponding hosted zone IDs, see [AWS Elastic Beanstalk endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/elasticbeanstalk.html) in the *Amazon Web Services General Reference* .
         * - **ELB load balancer** - Specify the value of the hosted zone ID for the load balancer. Use the following methods to get the hosted zone ID:
         *
         * - [Service Endpoints](https://docs.aws.amazon.com/general/latest/gr/elb.html) table in the "Elastic Load Balancing Endpoints and Quotas" topic in the *Amazon Web Services General Reference* : Use the value that corresponds with the region that you created your load balancer in. Note that there are separate columns for Application and Classic Load Balancers and for Network Load Balancers.
         * - *AWS Management Console* : Go to the Amazon EC2 page, choose *Load Balancers* in the navigation pane, select the load balancer, and get the value of the *Hosted zone* field on the *Description* tab.
         * - *Elastic Load Balancing API* : Use `DescribeLoadBalancers` to get the applicable value. For more information, see the applicable guide:
         *
         * - Classic Load Balancers: Use [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancers.html) to get the value of `CanonicalHostedZoneNameID` .
         * - Application and Network Load Balancers: Use [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html) to get the value of `CanonicalHostedZoneID` .
         * - *CloudFormation Fn::GetAtt intrinsic function* : Use the [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html) intrinsic function to get the applicable value:
         *
         * - Classic Load Balancers: Get [CanonicalHostedZoneNameID](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb.html#aws-properties-ec2-elb-return-values) .
         * - Application and Network Load Balancers: Get [CanonicalHostedZoneID](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#aws-resource-elasticloadbalancingv2-loadbalancer-return-values) .
         * - *AWS CLI* : Use `describe-load-balancers` to get the applicable value. For more information, see the applicable guide:
         *
         * - Classic Load Balancers: Use [describe-load-balancers](https://docs.aws.amazon.com/cli/latest/reference/elb/describe-load-balancers.html) to get the value of `CanonicalHostedZoneNameID` .
         * - Application and Network Load Balancers: Use [describe-load-balancers](https://docs.aws.amazon.com/cli/latest/reference/elbv2/describe-load-balancers.html) to get the value of `CanonicalHostedZoneID` .
         * - **Global Accelerator accelerator** - Specify `Z2BJ6XQ5FK7U4H` .
         * - **An Amazon S3 bucket configured as a static website** - Specify the hosted zone ID for the region that you created the bucket in. For more information about valid values, see the table [Amazon S3 Website Endpoints](https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_website_region_endpoints) in the *Amazon Web Services General Reference* .
         * - **Another Route 53 record in your hosted zone** - Specify the hosted zone ID of your hosted zone. (An alias record can't reference a record in a different hosted zone.)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-aliastarget.html#cfn-route53-recordset-aliastarget-hostedzoneid
         */
        readonly hostedZoneId: string;
    }
    /**
     * The object that is specified in resource record set object when you are linking a resource record set to a CIDR location.
     *
     * A `LocationName` with an asterisk “*” can be used to create a default CIDR record. `CollectionId` is still required for default record.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-cidrroutingconfig.html
     */
    interface CidrRoutingConfigProperty {
        /**
         * The CIDR collection ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-cidrroutingconfig.html#cfn-route53-recordset-cidrroutingconfig-collectionid
         */
        readonly collectionId: string;
        /**
         * The CIDR collection location name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-cidrroutingconfig.html#cfn-route53-recordset-cidrroutingconfig-locationname
         */
        readonly locationName: string;
    }
    /**
     * A complex type that contains information about a geographic location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-geolocation.html
     */
    interface GeoLocationProperty {
        /**
         * For geolocation resource record sets, a two-letter abbreviation that identifies a continent. Route 53 supports the following continent codes:.
         *
         * - *AF* : Africa
         * - *AN* : Antarctica
         * - *AS* : Asia
         * - *EU* : Europe
         * - *OC* : Oceania
         * - *NA* : North America
         * - *SA* : South America
         *
         * Constraint: Specifying `ContinentCode` with either `CountryCode` or `SubdivisionCode` returns an `InvalidInput` error.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-geolocation.html#cfn-route53-recordset-geolocation-continentcode
         */
        readonly continentCode?: string;
        /**
         * For geolocation resource record sets, the two-letter code for a country.
         *
         * Route 53 uses the two-letter country codes that are specified in [ISO standard 3166-1 alpha-2](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-geolocation.html#cfn-route53-recordset-geolocation-countrycode
         */
        readonly countryCode?: string;
        /**
         * For geolocation resource record sets, the two-letter code for a state of the United States.
         *
         * Route 53 doesn't support any other values for `SubdivisionCode` . For a list of state abbreviations, see [Appendix B: Two–Letter State and Possession Abbreviations](https://docs.aws.amazon.com/https://pe.usps.com/text/pub28/28apb.htm) on the United States Postal Service website.
         *
         * If you specify `subdivisioncode` , you must also specify `US` for `CountryCode` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-geolocation.html#cfn-route53-recordset-geolocation-subdivisioncode
         */
        readonly subdivisionCode?: string;
    }
    /**
     * (Resource record sets only): A complex type that lets you specify where your resources are located.
     *
     * Only one of `LocalZoneGroup` , `Coordinates` , or `AWS Region` is allowed per request at a time.
     *
     * For more information about geoproximity routing, see [Geoproximity routing](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geoproximity.html) in the *Amazon Route 53 Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-geoproximitylocation.html
     */
    interface GeoProximityLocationProperty {
        /**
         * The AWS Region the resource you are directing DNS traffic to, is in.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-geoproximitylocation.html#cfn-route53-recordset-geoproximitylocation-awsregion
         */
        readonly awsRegion?: string;
        /**
         * The bias increases or decreases the size of the geographic region from which Route 53 routes traffic to a resource.
         *
         * To use `Bias` to change the size of the geographic region, specify the applicable value for the bias:
         *
         * - To expand the size of the geographic region from which Route 53 routes traffic to a resource, specify a positive integer from 1 to 99 for the bias. Route 53 shrinks the size of adjacent regions.
         * - To shrink the size of the geographic region from which Route 53 routes traffic to a resource, specify a negative bias of -1 to -99. Route 53 expands the size of adjacent regions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-geoproximitylocation.html#cfn-route53-recordset-geoproximitylocation-bias
         */
        readonly bias?: number;
        /**
         * Contains the longitude and latitude for a geographic region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-geoproximitylocation.html#cfn-route53-recordset-geoproximitylocation-coordinates
         */
        readonly coordinates?: CfnRecordSet.CoordinatesProperty | cdk.IResolvable;
        /**
         * Specifies an AWS Local Zone Group.
         *
         * A local Zone Group is usually the Local Zone code without the ending character. For example, if the Local Zone is `us-east-1-bue-1a` the Local Zone Group is `us-east-1-bue-1` .
         *
         * You can identify the Local Zones Group for a specific Local Zone by using the [describe-availability-zones](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-availability-zones.html) CLI command:
         *
         * This command returns: `"GroupName": "us-west-2-den-1"` , specifying that the Local Zone `us-west-2-den-1a` belongs to the Local Zone Group `us-west-2-den-1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-geoproximitylocation.html#cfn-route53-recordset-geoproximitylocation-localzonegroup
         */
        readonly localZoneGroup?: string;
    }
    /**
     * A complex type that lists the coordinates for a geoproximity resource record.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-coordinates.html
     */
    interface CoordinatesProperty {
        /**
         * Specifies a coordinate of the north–south position of a geographic point on the surface of the Earth (-90 - 90).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-coordinates.html#cfn-route53-recordset-coordinates-latitude
         */
        readonly latitude: string;
        /**
         * Specifies a coordinate of the east–west position of a geographic point on the surface of the Earth (-180 - 180).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordset-coordinates.html#cfn-route53-recordset-coordinates-longitude
         */
        readonly longitude: string;
    }
}
/**
 * Properties for defining a `CfnRecordSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html
 */
export interface CfnRecordSetProps {
    /**
     * *Alias resource record sets only:* Information about the AWS resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to.
     *
     * If you're creating resource records sets for a private hosted zone, note the following:
     *
     * - You can't create an alias resource record set in a private hosted zone to route traffic to a CloudFront distribution.
     * - For information about creating failover resource record sets in a private hosted zone, see [Configuring Failover in a Private Hosted Zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html) in the *Amazon Route 53 Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-aliastarget
     */
    readonly aliasTarget?: CfnRecordSet.AliasTargetProperty | cdk.IResolvable;
    /**
     * The object that is specified in resource record set object when you are linking a resource record set to a CIDR location.
     *
     * A `LocationName` with an asterisk “*” can be used to create a default CIDR record. `CollectionId` is still required for default record.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-cidrroutingconfig
     */
    readonly cidrRoutingConfig?: CfnRecordSet.CidrRoutingConfigProperty | cdk.IResolvable;
    /**
     * *Optional:* Any comments you want to include about a change batch request.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-comment
     */
    readonly comment?: string;
    /**
     * *Failover resource record sets only:* To configure failover, you add the `Failover` element to two resource record sets.
     *
     * For one resource record set, you specify `PRIMARY` as the value for `Failover` ; for the other resource record set, you specify `SECONDARY` . In addition, you include the `HealthCheckId` element and specify the health check that you want Amazon Route 53 to perform for each resource record set.
     *
     * Except where noted, the following failover behaviors assume that you have included the `HealthCheckId` element in both resource record sets:
     *
     * - When the primary resource record set is healthy, Route 53 responds to DNS queries with the applicable value from the primary resource record set regardless of the health of the secondary resource record set.
     * - When the primary resource record set is unhealthy and the secondary resource record set is healthy, Route 53 responds to DNS queries with the applicable value from the secondary resource record set.
     * - When the secondary resource record set is unhealthy, Route 53 responds to DNS queries with the applicable value from the primary resource record set regardless of the health of the primary resource record set.
     * - If you omit the `HealthCheckId` element for the secondary resource record set, and if the primary resource record set is unhealthy, Route 53 always responds to DNS queries with the applicable value from the secondary resource record set. This is true regardless of the health of the associated endpoint.
     *
     * You can't create non-failover resource record sets that have the same values for the `Name` and `Type` elements as failover resource record sets.
     *
     * For failover alias resource record sets, you must also include the `EvaluateTargetHealth` element and set the value to true.
     *
     * For more information about configuring failover for Route 53, see the following topics in the *Amazon Route 53 Developer Guide* :
     *
     * - [Route 53 Health Checks and DNS Failover](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html)
     * - [Configuring Failover in a Private Hosted Zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-failover
     */
    readonly failover?: string;
    /**
     * *Geolocation resource record sets only:* A complex type that lets you control how Amazon Route 53 responds to DNS queries based on the geographic origin of the query.
     *
     * For example, if you want all queries from Africa to be routed to a web server with an IP address of `192.0.2.111` , create a resource record set with a `Type` of `A` and a `ContinentCode` of `AF` .
     *
     * If you create separate resource record sets for overlapping geographic regions (for example, one resource record set for a continent and one for a country on the same continent), priority goes to the smallest geographic region. This allows you to route most queries for a continent to one resource and to route queries for a country on that continent to a different resource.
     *
     * You can't create two geolocation resource record sets that specify the same geographic location.
     *
     * The value `*` in the `CountryCode` element matches all geographic locations that aren't specified in other geolocation resource record sets that have the same values for the `Name` and `Type` elements.
     *
     * > Geolocation works by mapping IP addresses to locations. However, some IP addresses aren't mapped to geographic locations, so even if you create geolocation resource record sets that cover all seven continents, Route 53 will receive some DNS queries from locations that it can't identify. We recommend that you create a resource record set for which the value of `CountryCode` is `*` . Two groups of queries are routed to the resource that you specify in this record: queries that come from locations for which you haven't created geolocation resource record sets and queries from IP addresses that aren't mapped to a location. If you don't create a `*` resource record set, Route 53 returns a "no answer" response for queries from those locations.
     *
     * You can't create non-geolocation resource record sets that have the same values for the `Name` and `Type` elements as geolocation resource record sets.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-geolocation
     */
    readonly geoLocation?: CfnRecordSet.GeoLocationProperty | cdk.IResolvable;
    /**
     * *GeoproximityLocation resource record sets only:* A complex type that lets you control how Route 53 responds to DNS queries based on the geographic origin of the query and your resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-geoproximitylocation
     */
    readonly geoProximityLocation?: CfnRecordSet.GeoProximityLocationProperty | cdk.IResolvable;
    /**
     * If you want Amazon Route 53 to return this resource record set in response to a DNS query only when the status of a health check is healthy, include the `HealthCheckId` element and specify the ID of the applicable health check.
     *
     * Route 53 determines whether a resource record set is healthy based on one of the following:
     *
     * - By periodically sending a request to the endpoint that is specified in the health check
     * - By aggregating the status of a specified group of health checks (calculated health checks)
     * - By determining the current state of a CloudWatch alarm (CloudWatch metric health checks)
     *
     * > Route 53 doesn't check the health of the endpoint that is specified in the resource record set, for example, the endpoint specified by the IP address in the `Value` element. When you add a `HealthCheckId` element to a resource record set, Route 53 checks the health of the endpoint that you specified in the health check.
     *
     * For more information, see the following topics in the *Amazon Route 53 Developer Guide* :
     *
     * - [How Amazon Route 53 Determines Whether an Endpoint Is Healthy](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html)
     * - [Route 53 Health Checks and DNS Failover](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html)
     * - [Configuring Failover in a Private Hosted Zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html)
     *
     * *When to Specify HealthCheckId*
     *
     * Specifying a value for `HealthCheckId` is useful only when Route 53 is choosing between two or more resource record sets to respond to a DNS query, and you want Route 53 to base the choice in part on the status of a health check. Configuring health checks makes sense only in the following configurations:
     *
     * - *Non-alias resource record sets* : You're checking the health of a group of non-alias resource record sets that have the same routing policy, name, and type (such as multiple weighted records named www.example.com with a type of A) and you specify health check IDs for all the resource record sets.
     *
     * If the health check status for a resource record set is healthy, Route 53 includes the record among the records that it responds to DNS queries with.
     *
     * If the health check status for a resource record set is unhealthy, Route 53 stops responding to DNS queries using the value for that resource record set.
     *
     * If the health check status for all resource record sets in the group is unhealthy, Route 53 considers all resource record sets in the group healthy and responds to DNS queries accordingly.
     * - *Alias resource record sets* : You specify the following settings:
     *
     * - You set `EvaluateTargetHealth` to true for an alias resource record set in a group of resource record sets that have the same routing policy, name, and type (such as multiple weighted records named www.example.com with a type of A).
     * - You configure the alias resource record set to route traffic to a non-alias resource record set in the same hosted zone.
     * - You specify a health check ID for the non-alias resource record set.
     *
     * If the health check status is healthy, Route 53 considers the alias resource record set to be healthy and includes the alias record among the records that it responds to DNS queries with.
     *
     * If the health check status is unhealthy, Route 53 stops responding to DNS queries using the alias resource record set.
     *
     * > The alias resource record set can also route traffic to a *group* of non-alias resource record sets that have the same routing policy, name, and type. In that configuration, associate health checks with all of the resource record sets in the group of non-alias resource record sets.
     *
     * *Geolocation Routing*
     *
     * For geolocation resource record sets, if an endpoint is unhealthy, Route 53 looks for a resource record set for the larger, associated geographic region. For example, suppose you have resource record sets for a state in the United States, for the entire United States, for North America, and a resource record set that has `*` for `CountryCode` is `*` , which applies to all locations. If the endpoint for the state resource record set is unhealthy, Route 53 checks for healthy resource record sets in the following order until it finds a resource record set for which the endpoint is healthy:
     *
     * - The United States
     * - North America
     * - The default resource record set
     *
     * *Specifying the Health Check Endpoint by Domain Name*
     *
     * If your health checks specify the endpoint only by domain name, we recommend that you create a separate health check for each endpoint. For example, create a health check for each `HTTP` server that is serving content for `www.example.com` . For the value of `FullyQualifiedDomainName` , specify the domain name of the server (such as `us-east-2-www.example.com` ), not the name of the resource record sets ( `www.example.com` ).
     *
     * > Health check results will be unpredictable if you do the following:
     * >
     * > - Create a health check that has the same value for `FullyQualifiedDomainName` as the name of a resource record set.
     * > - Associate that health check with the resource record set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-healthcheckid
     */
    readonly healthCheckId?: string;
    /**
     * The ID of the hosted zone that you want to create records in.
     *
     * Specify either `HostedZoneName` or `HostedZoneId` , but not both. If you have multiple hosted zones with the same domain name, you must specify the hosted zone using `HostedZoneId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-hostedzoneid
     */
    readonly hostedZoneId?: string;
    /**
     * The name of the hosted zone that you want to create records in.
     *
     * You must include a trailing dot (for example, `www.example.com.` ) as part of the `HostedZoneName` .
     *
     * When you create a stack using an AWS::Route53::RecordSet that specifies `HostedZoneName` , AWS CloudFormation attempts to find a hosted zone whose name matches the HostedZoneName. If AWS CloudFormation cannot find a hosted zone with a matching domain name, or if there is more than one hosted zone with the specified domain name, AWS CloudFormation will not create the stack.
     *
     * Specify either `HostedZoneName` or `HostedZoneId` , but not both. If you have multiple hosted zones with the same domain name, you must specify the hosted zone using `HostedZoneId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-hostedzonename
     */
    readonly hostedZoneName?: string;
    /**
     * *Multivalue answer resource record sets only* : To route traffic approximately randomly to multiple resources, such as web servers, create one multivalue answer record for each resource and specify `true` for `MultiValueAnswer` .
     *
     * Note the following:
     *
     * - If you associate a health check with a multivalue answer resource record set, Amazon Route 53 responds to DNS queries with the corresponding IP address only when the health check is healthy.
     * - If you don't associate a health check with a multivalue answer record, Route 53 always considers the record to be healthy.
     * - Route 53 responds to DNS queries with up to eight healthy records; if you have eight or fewer healthy records, Route 53 responds to all DNS queries with all the healthy records.
     * - If you have more than eight healthy records, Route 53 responds to different DNS resolvers with different combinations of healthy records.
     * - When all records are unhealthy, Route 53 responds to DNS queries with up to eight unhealthy records.
     * - If a resource becomes unavailable after a resolver caches a response, client software typically tries another of the IP addresses in the response.
     *
     * You can't create multivalue answer alias records.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-multivalueanswer
     */
    readonly multiValueAnswer?: boolean | cdk.IResolvable;
    /**
     * For `ChangeResourceRecordSets` requests, the name of the record that you want to create, update, or delete.
     *
     * For `ListResourceRecordSets` responses, the name of a record in the specified hosted zone.
     *
     * *ChangeResourceRecordSets Only*
     *
     * Enter a fully qualified domain name, for example, `www.example.com` . You can optionally include a trailing dot. If you omit the trailing dot, Amazon Route 53 assumes that the domain name that you specify is fully qualified. This means that Route 53 treats `www.example.com` (without a trailing dot) and `www.example.com.` (with a trailing dot) as identical.
     *
     * For information about how to specify characters other than `a-z` , `0-9` , and `-` (hyphen) and how to specify internationalized domain names, see [DNS Domain Name Format](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html) in the *Amazon Route 53 Developer Guide* .
     *
     * You can use the asterisk (*) wildcard to replace the leftmost label in a domain name, for example, `*.example.com` . Note the following:
     *
     * - The * must replace the entire label. For example, you can't specify `*prod.example.com` or `prod*.example.com` .
     * - The * can't replace any of the middle labels, for example, marketing.*.example.com.
     * - If you include * in any position other than the leftmost label in a domain name, DNS treats it as an * character (ASCII 42), not as a wildcard.
     *
     * > You can't use the * wildcard for resource records sets that have a type of NS.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-name
     */
    readonly name: string;
    /**
     * *Latency-based resource record sets only:* The Amazon EC2 Region where you created the resource that this resource record set refers to.
     *
     * The resource typically is an AWS resource, such as an EC2 instance or an ELB load balancer, and is referred to by an IP address or a DNS domain name, depending on the record type.
     *
     * When Amazon Route 53 receives a DNS query for a domain name and type for which you have created latency resource record sets, Route 53 selects the latency resource record set that has the lowest latency between the end user and the associated Amazon EC2 Region. Route 53 then returns the value that is associated with the selected resource record set.
     *
     * Note the following:
     *
     * - You can only specify one `ResourceRecord` per latency resource record set.
     * - You can only create one latency resource record set for each Amazon EC2 Region.
     * - You aren't required to create latency resource record sets for all Amazon EC2 Regions. Route 53 will choose the region with the best latency from among the regions that you create latency resource record sets for.
     * - You can't create non-latency resource record sets that have the same values for the `Name` and `Type` elements as latency resource record sets.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-region
     */
    readonly region?: string;
    /**
     * One or more values that correspond with the value that you specified for the `Type` property.
     *
     * For example, if you specified `A` for `Type` , you specify one or more IP addresses in IPv4 format for `ResourceRecords` . For information about the format of values for each record type, see [Supported DNS Resource Record Types](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html) in the *Amazon Route 53 Developer Guide* .
     *
     * Note the following:
     *
     * - You can specify more than one value for all record types except CNAME and SOA.
     * - The maximum length of a value is 4000 characters.
     * - If you're creating an alias record, omit `ResourceRecords` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-resourcerecords
     */
    readonly resourceRecords?: Array<string>;
    /**
     * *Resource record sets that have a routing policy other than simple:* An identifier that differentiates among multiple resource record sets that have the same combination of name and type, such as multiple weighted resource record sets named acme.example.com that have a type of A. In a group of resource record sets that have the same name and type, the value of `SetIdentifier` must be unique for each resource record set.
     *
     * For information about routing policies, see [Choosing a Routing Policy](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html) in the *Amazon Route 53 Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-setidentifier
     */
    readonly setIdentifier?: string;
    /**
     * The resource record cache time to live (TTL), in seconds. Note the following:.
     *
     * - If you're creating or updating an alias resource record set, omit `TTL` . Amazon Route 53 uses the value of `TTL` for the alias target.
     * - If you're associating this resource record set with a health check (if you're adding a `HealthCheckId` element), we recommend that you specify a `TTL` of 60 seconds or less so clients respond quickly to changes in health status.
     * - All of the resource record sets in a group of weighted resource record sets must have the same value for `TTL` .
     * - If a group of weighted resource record sets includes one or more weighted alias resource record sets for which the alias target is an ELB load balancer, we recommend that you specify a `TTL` of 60 seconds for all of the non-alias weighted resource record sets that have the same name and type. Values other than 60 seconds (the TTL for load balancers) will change the effect of the values that you specify for `Weight` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-ttl
     */
    readonly ttl?: string;
    /**
     * The DNS record type.
     *
     * For information about different record types and how data is encoded for them, see [Supported DNS Resource Record Types](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html) in the *Amazon Route 53 Developer Guide* .
     *
     * Valid values for basic resource record sets: `A` | `AAAA` | `CAA` | `CNAME` | `DS` | `MX` | `NAPTR` | `NS` | `PTR` | `SOA` | `SPF` | `SRV` | `TXT` | `TLSA` | `SSHFP` | `SVCB` | `HTTPS`
     *
     * Values for weighted, latency, geolocation, and failover resource record sets: `A` | `AAAA` | `CAA` | `CNAME` | `MX` | `NAPTR` | `PTR` | `SPF` | `SRV` | `TXT` | `TLSA` | `SSHFP` | `SVCB` | `HTTPS` . When creating a group of weighted, latency, geolocation, or failover resource record sets, specify the same value for all of the resource record sets in the group.
     *
     * Valid values for multivalue answer resource record sets: `A` | `AAAA` | `MX` | `NAPTR` | `PTR` | `SPF` | `SRV` | `TXT` | `CAA` | `TLSA` | `SSHFP` | `SVCB` | `HTTPS`
     *
     * > SPF records were formerly used to verify the identity of the sender of email messages. However, we no longer recommend that you create resource record sets for which the value of `Type` is `SPF` . RFC 7208, *Sender Policy Framework (SPF) for Authorizing Use of Domains in Email, Version 1* , has been updated to say, "...[I]ts existence and mechanism defined in [RFC4408] have led to some interoperability issues. Accordingly, its use is no longer appropriate for SPF version 1; implementations are not to use it." In RFC 7208, see section 14.1, [The SPF DNS Record Type](https://docs.aws.amazon.com/http://tools.ietf.org/html/rfc7208#section-14.1) .
     *
     * Values for alias resource record sets:
     *
     * - *Amazon API Gateway custom regional APIs and edge-optimized APIs:* `A`
     * - *CloudFront distributions:* `A`
     *
     * If IPv6 is enabled for the distribution, create two resource record sets to route traffic to your distribution, one with a value of `A` and one with a value of `AAAA` .
     * - *Amazon API Gateway environment that has a regionalized subdomain* : `A`
     * - *ELB load balancers:* `A` | `AAAA`
     * - *Amazon S3 buckets:* `A`
     * - *Amazon Virtual Private Cloud interface VPC endpoints* `A`
     * - *Another resource record set in this hosted zone:* Specify the type of the resource record set that you're creating the alias for. All values are supported except `NS` and `SOA` .
     *
     * > If you're creating an alias record that has the same name as the hosted zone (known as the zone apex), you can't route traffic to a record for which the value of `Type` is `CNAME` . This is because the alias record must have the same type as the record you're routing traffic to, and creating a CNAME record for the zone apex isn't supported even for an alias record.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-type
     */
    readonly type: string;
    /**
     * *Weighted resource record sets only:* Among resource record sets that have the same combination of DNS name and type, a value that determines the proportion of DNS queries that Amazon Route 53 responds to using the current resource record set.
     *
     * Route 53 calculates the sum of the weights for the resource record sets that have the same combination of DNS name and type. Route 53 then responds to queries based on the ratio of a resource's weight to the total. Note the following:
     *
     * - You must specify a value for the `Weight` element for every weighted resource record set.
     * - You can only specify one `ResourceRecord` per weighted resource record set.
     * - You can't create latency, failover, or geolocation resource record sets that have the same values for the `Name` and `Type` elements as weighted resource record sets.
     * - You can create a maximum of 100 weighted resource record sets that have the same values for the `Name` and `Type` elements.
     * - For weighted (but not weighted alias) resource record sets, if you set `Weight` to `0` for a resource record set, Route 53 never responds to queries with the applicable value for that resource record set. However, if you set `Weight` to `0` for all resource record sets that have the same combination of DNS name and type, traffic is routed to all resources with equal probability.
     *
     * The effect of setting `Weight` to `0` is different when you associate health checks with weighted resource record sets. For more information, see [Options for Configuring Route 53 Active-Active and Active-Passive Failover](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring-options.html) in the *Amazon Route 53 Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordset.html#cfn-route53-recordset-weight
     */
    readonly weight?: number;
}
/**
 * A complex type that contains an optional comment, the name and ID of the hosted zone that you want to make changes in, and values for the records that you want to create.
 *
 * @cloudformationResource AWS::Route53::RecordSetGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordsetgroup.html
 */
export declare class CfnRecordSetGroup extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnRecordSetGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnRecordSetGroup;
    /**
     * Specifies a coordinate of the east–west position of a geographic point on the surface of the Earth.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * *Optional:* Any comments you want to include about a change batch request.
     */
    comment?: string;
    /**
     * The ID of the hosted zone that you want to create records in.
     */
    hostedZoneId?: string;
    /**
     * The name of the hosted zone that you want to create records in.
     */
    hostedZoneName?: string;
    /**
     * A complex type that contains one `RecordSet` element for each record that you want to create.
     */
    recordSets?: Array<cdk.IResolvable | CfnRecordSetGroup.RecordSetProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnRecordSetGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnRecordSetGroup {
    /**
     * Information about one record that you want to create.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html
     */
    interface RecordSetProperty {
        /**
         * *Alias resource record sets only:* Information about the AWS resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to.
         *
         * If you're creating resource records sets for a private hosted zone, note the following:
         *
         * - You can't create an alias resource record set in a private hosted zone to route traffic to a CloudFront distribution.
         * - For information about creating failover resource record sets in a private hosted zone, see [Configuring Failover in a Private Hosted Zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html) in the *Amazon Route 53 Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html#cfn-route53-recordsetgroup-recordset-aliastarget
         */
        readonly aliasTarget?: CfnRecordSetGroup.AliasTargetProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html#cfn-route53-recordsetgroup-recordset-cidrroutingconfig
         */
        readonly cidrRoutingConfig?: CfnRecordSetGroup.CidrRoutingConfigProperty | cdk.IResolvable;
        /**
         * *Failover resource record sets only:* To configure failover, you add the `Failover` element to two resource record sets.
         *
         * For one resource record set, you specify `PRIMARY` as the value for `Failover` ; for the other resource record set, you specify `SECONDARY` . In addition, you include the `HealthCheckId` element and specify the health check that you want Amazon Route 53 to perform for each resource record set.
         *
         * Except where noted, the following failover behaviors assume that you have included the `HealthCheckId` element in both resource record sets:
         *
         * - When the primary resource record set is healthy, Route 53 responds to DNS queries with the applicable value from the primary resource record set regardless of the health of the secondary resource record set.
         * - When the primary resource record set is unhealthy and the secondary resource record set is healthy, Route 53 responds to DNS queries with the applicable value from the secondary resource record set.
         * - When the secondary resource record set is unhealthy, Route 53 responds to DNS queries with the applicable value from the primary resource record set regardless of the health of the primary resource record set.
         * - If you omit the `HealthCheckId` element for the secondary resource record set, and if the primary resource record set is unhealthy, Route 53 always responds to DNS queries with the applicable value from the secondary resource record set. This is true regardless of the health of the associated endpoint.
         *
         * You can't create non-failover resource record sets that have the same values for the `Name` and `Type` elements as failover resource record sets.
         *
         * For failover alias resource record sets, you must also include the `EvaluateTargetHealth` element and set the value to true.
         *
         * For more information about configuring failover for Route 53, see the following topics in the *Amazon Route 53 Developer Guide* :
         *
         * - [Route 53 Health Checks and DNS Failover](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html)
         * - [Configuring Failover in a Private Hosted Zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html#cfn-route53-recordsetgroup-recordset-failover
         */
        readonly failover?: string;
        /**
         * *Geolocation resource record sets only:* A complex type that lets you control how Amazon Route 53 responds to DNS queries based on the geographic origin of the query.
         *
         * For example, if you want all queries from Africa to be routed to a web server with an IP address of `192.0.2.111` , create a resource record set with a `Type` of `A` and a `ContinentCode` of `AF` .
         *
         * If you create separate resource record sets for overlapping geographic regions (for example, one resource record set for a continent and one for a country on the same continent), priority goes to the smallest geographic region. This allows you to route most queries for a continent to one resource and to route queries for a country on that continent to a different resource.
         *
         * You can't create two geolocation resource record sets that specify the same geographic location.
         *
         * The value `*` in the `CountryCode` element matches all geographic locations that aren't specified in other geolocation resource record sets that have the same values for the `Name` and `Type` elements.
         *
         * > Geolocation works by mapping IP addresses to locations. However, some IP addresses aren't mapped to geographic locations, so even if you create geolocation resource record sets that cover all seven continents, Route 53 will receive some DNS queries from locations that it can't identify. We recommend that you create a resource record set for which the value of `CountryCode` is `*` . Two groups of queries are routed to the resource that you specify in this record: queries that come from locations for which you haven't created geolocation resource record sets and queries from IP addresses that aren't mapped to a location. If you don't create a `*` resource record set, Route 53 returns a "no answer" response for queries from those locations.
         *
         * You can't create non-geolocation resource record sets that have the same values for the `Name` and `Type` elements as geolocation resource record sets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html#cfn-route53-recordsetgroup-recordset-geolocation
         */
        readonly geoLocation?: CfnRecordSetGroup.GeoLocationProperty | cdk.IResolvable;
        /**
         * A complex type that contains information about a geographic location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html#cfn-route53-recordsetgroup-recordset-geoproximitylocation
         */
        readonly geoProximityLocation?: CfnRecordSetGroup.GeoProximityLocationProperty | cdk.IResolvable;
        /**
         * If you want Amazon Route 53 to return this resource record set in response to a DNS query only when the status of a health check is healthy, include the `HealthCheckId` element and specify the ID of the applicable health check.
         *
         * Route 53 determines whether a resource record set is healthy based on one of the following:
         *
         * - By periodically sending a request to the endpoint that is specified in the health check
         * - By aggregating the status of a specified group of health checks (calculated health checks)
         * - By determining the current state of a CloudWatch alarm (CloudWatch metric health checks)
         *
         * > Route 53 doesn't check the health of the endpoint that is specified in the resource record set, for example, the endpoint specified by the IP address in the `Value` element. When you add a `HealthCheckId` element to a resource record set, Route 53 checks the health of the endpoint that you specified in the health check.
         *
         * For more information, see the following topics in the *Amazon Route 53 Developer Guide* :
         *
         * - [How Amazon Route 53 Determines Whether an Endpoint Is Healthy](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-determining-health-of-endpoints.html)
         * - [Route 53 Health Checks and DNS Failover](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html)
         * - [Configuring Failover in a Private Hosted Zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html)
         *
         * *When to Specify HealthCheckId*
         *
         * Specifying a value for `HealthCheckId` is useful only when Route 53 is choosing between two or more resource record sets to respond to a DNS query, and you want Route 53 to base the choice in part on the status of a health check. Configuring health checks makes sense only in the following configurations:
         *
         * - *Non-alias resource record sets* : You're checking the health of a group of non-alias resource record sets that have the same routing policy, name, and type (such as multiple weighted records named www.example.com with a type of A) and you specify health check IDs for all the resource record sets.
         *
         * If the health check status for a resource record set is healthy, Route 53 includes the record among the records that it responds to DNS queries with.
         *
         * If the health check status for a resource record set is unhealthy, Route 53 stops responding to DNS queries using the value for that resource record set.
         *
         * If the health check status for all resource record sets in the group is unhealthy, Route 53 considers all resource record sets in the group healthy and responds to DNS queries accordingly.
         * - *Alias resource record sets* : You specify the following settings:
         *
         * - You set `EvaluateTargetHealth` to true for an alias resource record set in a group of resource record sets that have the same routing policy, name, and type (such as multiple weighted records named www.example.com with a type of A).
         * - You configure the alias resource record set to route traffic to a non-alias resource record set in the same hosted zone.
         * - You specify a health check ID for the non-alias resource record set.
         *
         * If the health check status is healthy, Route 53 considers the alias resource record set to be healthy and includes the alias record among the records that it responds to DNS queries with.
         *
         * If the health check status is unhealthy, Route 53 stops responding to DNS queries using the alias resource record set.
         *
         * > The alias resource record set can also route traffic to a *group* of non-alias resource record sets that have the same routing policy, name, and type. In that configuration, associate health checks with all of the resource record sets in the group of non-alias resource record sets.
         *
         * *Geolocation Routing*
         *
         * For geolocation resource record sets, if an endpoint is unhealthy, Route 53 looks for a resource record set for the larger, associated geographic region. For example, suppose you have resource record sets for a state in the United States, for the entire United States, for North America, and a resource record set that has `*` for `CountryCode` is `*` , which applies to all locations. If the endpoint for the state resource record set is unhealthy, Route 53 checks for healthy resource record sets in the following order until it finds a resource record set for which the endpoint is healthy:
         *
         * - The United States
         * - North America
         * - The default resource record set
         *
         * *Specifying the Health Check Endpoint by Domain Name*
         *
         * If your health checks specify the endpoint only by domain name, we recommend that you create a separate health check for each endpoint. For example, create a health check for each `HTTP` server that is serving content for `www.example.com` . For the value of `FullyQualifiedDomainName` , specify the domain name of the server (such as `us-east-2-www.example.com` ), not the name of the resource record sets ( `www.example.com` ).
         *
         * > Health check results will be unpredictable if you do the following:
         * >
         * > - Create a health check that has the same value for `FullyQualifiedDomainName` as the name of a resource record set.
         * > - Associate that health check with the resource record set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html#cfn-route53-recordsetgroup-recordset-healthcheckid
         */
        readonly healthCheckId?: string;
        /**
         * The ID of the hosted zone that you want to create records in.
         *
         * Specify either `HostedZoneName` or `HostedZoneId` , but not both. If you have multiple hosted zones with the same domain name, you must specify the hosted zone using `HostedZoneId` .
         *
         * Do not provide the `HostedZoneId` if it is already defined in `AWS::Route53::RecordSetGroup` . The creation fails if `HostedZoneId` is defined in both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html#cfn-route53-recordsetgroup-recordset-hostedzoneid
         */
        readonly hostedZoneId?: string;
        /**
         * The name of the hosted zone that you want to create records in.
         *
         * You must include a trailing dot (for example, `www.example.com.` ) as part of the `HostedZoneName` .
         *
         * When you create a stack using an `AWS::Route53::RecordSet` that specifies `HostedZoneName` , AWS CloudFormation attempts to find a hosted zone whose name matches the `HostedZoneName` . If AWS CloudFormation can't find a hosted zone with a matching domain name, or if there is more than one hosted zone with the specified domain name, AWS CloudFormation will not create the stack.
         *
         * Specify either `HostedZoneName` or `HostedZoneId` , but not both. If you have multiple hosted zones with the same domain name, you must specify the hosted zone using `HostedZoneId` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html#cfn-route53-recordsetgroup-recordset-hostedzonename
         */
        readonly hostedZoneName?: string;
        /**
         * *Multivalue answer resource record sets only* : To route traffic approximately randomly to multiple resources, such as web servers, create one multivalue answer record for each resource and specify `true` for `MultiValueAnswer` .
         *
         * Note the following:
         *
         * - If you associate a health check with a multivalue answer resource record set, Amazon Route 53 responds to DNS queries with the corresponding IP address only when the health check is healthy.
         * - If you don't associate a health check with a multivalue answer record, Route 53 always considers the record to be healthy.
         * - Route 53 responds to DNS queries with up to eight healthy records; if you have eight or fewer healthy records, Route 53 responds to all DNS queries with all the healthy records.
         * - If you have more than eight healthy records, Route 53 responds to different DNS resolvers with different combinations of healthy records.
         * - When all records are unhealthy, Route 53 responds to DNS queries with up to eight unhealthy records.
         * - If a resource becomes unavailable after a resolver caches a response, client software typically tries another of the IP addresses in the response.
         *
         * You can't create multivalue answer alias records.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html#cfn-route53-recordsetgroup-recordset-multivalueanswer
         */
        readonly multiValueAnswer?: boolean | cdk.IResolvable;
        /**
         * For `ChangeResourceRecordSets` requests, the name of the record that you want to create, update, or delete.
         *
         * For `ListResourceRecordSets` responses, the name of a record in the specified hosted zone.
         *
         * *ChangeResourceRecordSets Only*
         *
         * Enter a fully qualified domain name, for example, `www.example.com` . You can optionally include a trailing dot. If you omit the trailing dot, Amazon Route 53 assumes that the domain name that you specify is fully qualified. This means that Route 53 treats `www.example.com` (without a trailing dot) and `www.example.com.` (with a trailing dot) as identical.
         *
         * For information about how to specify characters other than `a-z` , `0-9` , and `-` (hyphen) and how to specify internationalized domain names, see [DNS Domain Name Format](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DomainNameFormat.html) in the *Amazon Route 53 Developer Guide* .
         *
         * You can use the asterisk (*) wildcard to replace the leftmost label in a domain name, for example, `*.example.com` . Note the following:
         *
         * - The * must replace the entire label. For example, you can't specify `*prod.example.com` or `prod*.example.com` .
         * - The * can't replace any of the middle labels, for example, marketing.*.example.com.
         * - If you include * in any position other than the leftmost label in a domain name, DNS treats it as an * character (ASCII 42), not as a wildcard.
         *
         * > You can't use the * wildcard for resource records sets that have a type of NS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html#cfn-route53-recordsetgroup-recordset-name
         */
        readonly name: string;
        /**
         * *Latency-based resource record sets only:* The Amazon EC2 Region where you created the resource that this resource record set refers to.
         *
         * The resource typically is an AWS resource, such as an EC2 instance or an ELB load balancer, and is referred to by an IP address or a DNS domain name, depending on the record type.
         *
         * When Amazon Route 53 receives a DNS query for a domain name and type for which you have created latency resource record sets, Route 53 selects the latency resource record set that has the lowest latency between the end user and the associated Amazon EC2 Region. Route 53 then returns the value that is associated with the selected resource record set.
         *
         * Note the following:
         *
         * - You can only specify one `ResourceRecord` per latency resource record set.
         * - You can only create one latency resource record set for each Amazon EC2 Region.
         * - You aren't required to create latency resource record sets for all Amazon EC2 Regions. Route 53 will choose the region with the best latency from among the regions that you create latency resource record sets for.
         * - You can't create non-latency resource record sets that have the same values for the `Name` and `Type` elements as latency resource record sets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html#cfn-route53-recordsetgroup-recordset-region
         */
        readonly region?: string;
        /**
         * Information about the records that you want to create.
         *
         * Each record should be in the format appropriate for the record type specified by the `Type` property. For information about different record types and their record formats, see [Values That You Specify When You Create or Edit Amazon Route 53 Records](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-values.html) in the *Amazon Route 53 Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html#cfn-route53-recordsetgroup-recordset-resourcerecords
         */
        readonly resourceRecords?: Array<string>;
        /**
         * *Resource record sets that have a routing policy other than simple:* An identifier that differentiates among multiple resource record sets that have the same combination of name and type, such as multiple weighted resource record sets named acme.example.com that have a type of A. In a group of resource record sets that have the same name and type, the value of `SetIdentifier` must be unique for each resource record set.
         *
         * For information about routing policies, see [Choosing a Routing Policy](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html) in the *Amazon Route 53 Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html#cfn-route53-recordsetgroup-recordset-setidentifier
         */
        readonly setIdentifier?: string;
        /**
         * The resource record cache time to live (TTL), in seconds. Note the following:.
         *
         * - If you're creating or updating an alias resource record set, omit `TTL` . Amazon Route 53 uses the value of `TTL` for the alias target.
         * - If you're associating this resource record set with a health check (if you're adding a `HealthCheckId` element), we recommend that you specify a `TTL` of 60 seconds or less so clients respond quickly to changes in health status.
         * - All of the resource record sets in a group of weighted resource record sets must have the same value for `TTL` .
         * - If a group of weighted resource record sets includes one or more weighted alias resource record sets for which the alias target is an ELB load balancer, we recommend that you specify a `TTL` of 60 seconds for all of the non-alias weighted resource record sets that have the same name and type. Values other than 60 seconds (the TTL for load balancers) will change the effect of the values that you specify for `Weight` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html#cfn-route53-recordsetgroup-recordset-ttl
         */
        readonly ttl?: string;
        /**
         * The DNS record type.
         *
         * For information about different record types and how data is encoded for them, see [Supported DNS Resource Record Types](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html) in the *Amazon Route 53 Developer Guide* .
         *
         * Valid values for basic resource record sets: `A` | `AAAA` | `CAA` | `CNAME` | `DS` | `MX` | `NAPTR` | `NS` | `PTR` | `SOA` | `SPF` | `SRV` | `TXT` | `TLSA` | `SSHFP` | `SVCB` | `HTTPS`
         *
         * Values for weighted, latency, geolocation, and failover resource record sets: `A` | `AAAA` | `CAA` | `CNAME` | `MX` | `NAPTR` | `PTR` | `SPF` | `SRV` | `TXT` | `TLSA` | `SSHFP` | `SVCB` | `HTTPS` . When creating a group of weighted, latency, geolocation, or failover resource record sets, specify the same value for all of the resource record sets in the group.
         *
         * Valid values for multivalue answer resource record sets: `A` | `AAAA` | `MX` | `NAPTR` | `PTR` | `SPF` | `SRV` | `TXT` | `CAA` | `TLSA` | `SSHFP` | `SVCB` | `HTTPS`
         *
         * > SPF records were formerly used to verify the identity of the sender of email messages. However, we no longer recommend that you create resource record sets for which the value of `Type` is `SPF` . RFC 7208, *Sender Policy Framework (SPF) for Authorizing Use of Domains in Email, Version 1* , has been updated to say, "...[I]ts existence and mechanism defined in [RFC4408] have led to some interoperability issues. Accordingly, its use is no longer appropriate for SPF version 1; implementations are not to use it." In RFC 7208, see section 14.1, [The SPF DNS Record Type](https://docs.aws.amazon.com/http://tools.ietf.org/html/rfc7208#section-14.1) .
         *
         * Values for alias resource record sets:
         *
         * - *Amazon API Gateway custom regional APIs and edge-optimized APIs:* `A`
         * - *CloudFront distributions:* `A`
         *
         * If IPv6 is enabled for the distribution, create two resource record sets to route traffic to your distribution, one with a value of `A` and one with a value of `AAAA` .
         * - *Amazon API Gateway environment that has a regionalized subdomain* : `A`
         * - *ELB load balancers:* `A` | `AAAA`
         * - *Amazon S3 buckets:* `A`
         * - *Amazon Virtual Private Cloud interface VPC endpoints* `A`
         * - *Another resource record set in this hosted zone:* Specify the type of the resource record set that you're creating the alias for. All values are supported except `NS` and `SOA` .
         *
         * > If you're creating an alias record that has the same name as the hosted zone (known as the zone apex), you can't route traffic to a record for which the value of `Type` is `CNAME` . This is because the alias record must have the same type as the record you're routing traffic to, and creating a CNAME record for the zone apex isn't supported even for an alias record.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html#cfn-route53-recordsetgroup-recordset-type
         */
        readonly type: string;
        /**
         * *Weighted resource record sets only:* Among resource record sets that have the same combination of DNS name and type, a value that determines the proportion of DNS queries that Amazon Route 53 responds to using the current resource record set.
         *
         * Route 53 calculates the sum of the weights for the resource record sets that have the same combination of DNS name and type. Route 53 then responds to queries based on the ratio of a resource's weight to the total. Note the following:
         *
         * - You must specify a value for the `Weight` element for every weighted resource record set.
         * - You can only specify one `ResourceRecord` per weighted resource record set.
         * - You can't create latency, failover, or geolocation resource record sets that have the same values for the `Name` and `Type` elements as weighted resource record sets.
         * - You can create a maximum of 100 weighted resource record sets that have the same values for the `Name` and `Type` elements.
         * - For weighted (but not weighted alias) resource record sets, if you set `Weight` to `0` for a resource record set, Route 53 never responds to queries with the applicable value for that resource record set. However, if you set `Weight` to `0` for all resource record sets that have the same combination of DNS name and type, traffic is routed to all resources with equal probability.
         *
         * The effect of setting `Weight` to `0` is different when you associate health checks with weighted resource record sets. For more information, see [Options for Configuring Route 53 Active-Active and Active-Passive Failover](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-configuring-options.html) in the *Amazon Route 53 Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-recordset.html#cfn-route53-recordsetgroup-recordset-weight
         */
        readonly weight?: number;
    }
    /**
     * *Alias records only:* Information about the AWS resource, such as a CloudFront distribution or an Amazon S3 bucket, that you want to route traffic to.
     *
     * When creating records for a private hosted zone, note the following:
     *
     * - Creating geolocation alias and latency alias records in a private hosted zone is allowed but not supported.
     * - For information about creating failover records in a private hosted zone, see [Configuring Failover in a Private Hosted Zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-private-hosted-zones.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-aliastarget.html
     */
    interface AliasTargetProperty {
        /**
         * *Alias records only:* The value that you specify depends on where you want to route queries:.
         *
         * - **Amazon API Gateway custom regional APIs and edge-optimized APIs** - Specify the applicable domain name for your API. You can get the applicable value using the AWS CLI command [get-domain-names](https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-domain-names.html) :
         *
         * - For regional APIs, specify the value of `regionalDomainName` .
         * - For edge-optimized APIs, specify the value of `distributionDomainName` . This is the name of the associated CloudFront distribution, such as `da1b2c3d4e5.cloudfront.net` .
         *
         * > The name of the record that you're creating must match a custom domain name for your API, such as `api.example.com` .
         * - **Amazon Virtual Private Cloud interface VPC endpoint** - Enter the API endpoint for the interface endpoint, such as `vpce-123456789abcdef01-example-us-east-1a.elasticloadbalancing.us-east-1.vpce.amazonaws.com` . For edge-optimized APIs, this is the domain name for the corresponding CloudFront distribution. You can get the value of `DnsName` using the AWS CLI command [describe-vpc-endpoints](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-vpc-endpoints.html) .
         * - **CloudFront distribution** - Specify the domain name that CloudFront assigned when you created your distribution.
         *
         * Your CloudFront distribution must include an alternate domain name that matches the name of the record. For example, if the name of the record is *acme.example.com* , your CloudFront distribution must include *acme.example.com* as one of the alternate domain names. For more information, see [Using Alternate Domain Names (CNAMEs)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html) in the *Amazon CloudFront Developer Guide* .
         *
         * You can't create a record in a private hosted zone to route traffic to a CloudFront distribution.
         *
         * > For failover alias records, you can't specify a CloudFront distribution for both the primary and secondary records. A distribution must include an alternate domain name that matches the name of the record. However, the primary and secondary records have the same name, and you can't include the same alternate domain name in more than one distribution.
         * - **Elastic Beanstalk environment** - If the domain name for your Elastic Beanstalk environment includes the region that you deployed the environment in, you can create an alias record that routes traffic to the environment. For example, the domain name `my-environment. *us-west-2* .elasticbeanstalk.com` is a regionalized domain name.
         *
         * > For environments that were created before early 2016, the domain name doesn't include the region. To route traffic to these environments, you must create a CNAME record instead of an alias record. Note that you can't create a CNAME record for the root domain name. For example, if your domain name is example.com, you can create a record that routes traffic for acme.example.com to your Elastic Beanstalk environment, but you can't create a record that routes traffic for example.com to your Elastic Beanstalk environment.
         *
         * For Elastic Beanstalk environments that have regionalized subdomains, specify the `CNAME` attribute for the environment. You can use the following methods to get the value of the CNAME attribute:
         *
         * - *AWS Management Console* : For information about how to get the value by using the console, see [Using Custom Domains with AWS Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/customdomains.html) in the *AWS Elastic Beanstalk Developer Guide* .
         * - *Elastic Beanstalk API* : Use the `DescribeEnvironments` action to get the value of the `CNAME` attribute. For more information, see [DescribeEnvironments](https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_DescribeEnvironments.html) in the *AWS Elastic Beanstalk API Reference* .
         * - *AWS CLI* : Use the `describe-environments` command to get the value of the `CNAME` attribute. For more information, see [describe-environments](https://docs.aws.amazon.com/cli/latest/reference/elasticbeanstalk/describe-environments.html) in the *AWS CLI* .
         * - **ELB load balancer** - Specify the DNS name that is associated with the load balancer. Get the DNS name by using the AWS Management Console , the ELB API, or the AWS CLI .
         *
         * - *AWS Management Console* : Go to the EC2 page, choose *Load Balancers* in the navigation pane, choose the load balancer, choose the *Description* tab, and get the value of the *DNS name* field.
         *
         * If you're routing traffic to a Classic Load Balancer, get the value that begins with *dualstack* . If you're routing traffic to another type of load balancer, get the value that applies to the record type, A or AAAA.
         * - *Elastic Load Balancing API* : Use `DescribeLoadBalancers` to get the value of `DNSName` . For more information, see the applicable guide:
         *
         * - Classic Load Balancers: [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancers.html)
         * - Application and Network Load Balancers: [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html)
         * - *CloudFormation Fn::GetAtt intrinsic function* : Use the [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html) intrinsic function to get the value of `DNSName` :
         *
         * - [Classic Load Balancers](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb.html#aws-properties-ec2-elb-return-values) .
         * - [Application and Network Load Balancers](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#aws-resource-elasticloadbalancingv2-loadbalancer-return-values) .
         * - *AWS CLI* : Use `describe-load-balancers` to get the value of `DNSName` . For more information, see the applicable guide:
         *
         * - Classic Load Balancers: [describe-load-balancers](https://docs.aws.amazon.com/cli/latest/reference/elb/describe-load-balancers.html)
         * - Application and Network Load Balancers: [describe-load-balancers](https://docs.aws.amazon.com/cli/latest/reference/elbv2/describe-load-balancers.html)
         * - **Global Accelerator accelerator** - Specify the DNS name for your accelerator:
         *
         * - *Global Accelerator API* : To get the DNS name, use [DescribeAccelerator](https://docs.aws.amazon.com/global-accelerator/latest/api/API_DescribeAccelerator.html) .
         * - *AWS CLI* : To get the DNS name, use [describe-accelerator](https://docs.aws.amazon.com/cli/latest/reference/globalaccelerator/describe-accelerator.html) .
         * - **Amazon S3 bucket that is configured as a static website** - Specify the domain name of the Amazon S3 website endpoint that you created the bucket in, for example, `s3-website.us-east-2.amazonaws.com` . For more information about valid values, see the table [Amazon S3 Website Endpoints](https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_website_region_endpoints) in the *Amazon Web Services General Reference* . For more information about using S3 buckets for websites, see [Getting Started with Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/getting-started.html) in the *Amazon Route 53 Developer Guide.*
         * - **Another Route 53 record** - Specify the value of the `Name` element for a record in the current hosted zone.
         *
         * > If you're creating an alias record that has the same name as the hosted zone (known as the zone apex), you can't specify the domain name for a record for which the value of `Type` is `CNAME` . This is because the alias record must have the same type as the record that you're routing traffic to, and creating a CNAME record for the zone apex isn't supported even for an alias record.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-aliastarget.html#cfn-route53-recordsetgroup-aliastarget-dnsname
         */
        readonly dnsName: string;
        /**
         * *Applies only to alias records with any routing policy:* When `EvaluateTargetHealth` is `true` , an alias record inherits the health of the referenced AWS resource, such as an ELB load balancer or another record in the hosted zone.
         *
         * Note the following:
         *
         * - **CloudFront distributions** - You can't set `EvaluateTargetHealth` to `true` when the alias target is a CloudFront distribution.
         * - **Elastic Beanstalk environments that have regionalized subdomains** - If you specify an Elastic Beanstalk environment in `DNSName` and the environment contains an ELB load balancer, Elastic Load Balancing routes queries only to the healthy Amazon EC2 instances that are registered with the load balancer. (An environment automatically contains an ELB load balancer if it includes more than one Amazon EC2 instance.) If you set `EvaluateTargetHealth` to `true` and either no Amazon EC2 instances are healthy or the load balancer itself is unhealthy, Route 53 routes queries to other available resources that are healthy, if any.
         *
         * If the environment contains a single Amazon EC2 instance, there are no special requirements.
         * - **ELB load balancers** - Health checking behavior depends on the type of load balancer:
         *
         * - *Classic Load Balancers* : If you specify an ELB Classic Load Balancer in `DNSName` , Elastic Load Balancing routes queries only to the healthy Amazon EC2 instances that are registered with the load balancer. If you set `EvaluateTargetHealth` to `true` and either no EC2 instances are healthy or the load balancer itself is unhealthy, Route 53 routes queries to other resources.
         * - *Application and Network Load Balancers* : If you specify an ELB Application or Network Load Balancer and you set `EvaluateTargetHealth` to `true` , Route 53 routes queries to the load balancer based on the health of the target groups that are associated with the load balancer:
         *
         * - For an Application or Network Load Balancer to be considered healthy, every target group that contains targets must contain at least one healthy target. If any target group contains only unhealthy targets, the load balancer is considered unhealthy, and Route 53 routes queries to other resources.
         * - A target group that has no registered targets is considered unhealthy.
         *
         * > When you create a load balancer, you configure settings for Elastic Load Balancing health checks; they're not Route 53 health checks, but they perform a similar function. Do not create Route 53 health checks for the EC2 instances that you register with an ELB load balancer.
         * - **S3 buckets** - There are no special requirements for setting `EvaluateTargetHealth` to `true` when the alias target is an S3 bucket.
         * - **Other records in the same hosted zone** - If the AWS resource that you specify in `DNSName` is a record or a group of records (for example, a group of weighted records) but is not another alias record, we recommend that you associate a health check with all of the records in the alias target. For more information, see [What Happens When You Omit Health Checks?](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover-complex-configs.html#dns-failover-complex-configs-hc-omitting) in the *Amazon Route 53 Developer Guide* .
         *
         * For more information and examples, see [Amazon Route 53 Health Checks and DNS Failover](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-failover.html) in the *Amazon Route 53 Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-aliastarget.html#cfn-route53-recordsetgroup-aliastarget-evaluatetargethealth
         */
        readonly evaluateTargetHealth?: boolean | cdk.IResolvable;
        /**
         * *Alias resource records sets only* : The value used depends on where you want to route traffic:.
         *
         * - **Amazon API Gateway custom regional APIs and edge-optimized APIs** - Specify the hosted zone ID for your API. You can get the applicable value using the AWS CLI command [get-domain-names](https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-domain-names.html) :
         *
         * - For regional APIs, specify the value of `regionalHostedZoneId` .
         * - For edge-optimized APIs, specify the value of `distributionHostedZoneId` .
         * - **Amazon Virtual Private Cloud interface VPC endpoint** - Specify the hosted zone ID for your interface endpoint. You can get the value of `HostedZoneId` using the AWS CLI command [describe-vpc-endpoints](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-vpc-endpoints.html) .
         * - **CloudFront distribution** - Specify `Z2FDTNDATAQYW2` . This is always the hosted zone ID when you create an alias record that routes traffic to a CloudFront distribution.
         *
         * > Alias records for CloudFront can't be created in a private zone.
         * - **Elastic Beanstalk environment** - Specify the hosted zone ID for the region that you created the environment in. The environment must have a regionalized subdomain. For a list of regions and the corresponding hosted zone IDs, see [AWS Elastic Beanstalk endpoints and quotas](https://docs.aws.amazon.com/general/latest/gr/elasticbeanstalk.html) in the *Amazon Web Services General Reference* .
         * - **ELB load balancer** - Specify the value of the hosted zone ID for the load balancer. Use the following methods to get the hosted zone ID:
         *
         * - [Service Endpoints](https://docs.aws.amazon.com/general/latest/gr/elb.html) table in the "Elastic Load Balancing endpoints and quotas" topic in the *Amazon Web Services General Reference* : Use the value that corresponds with the region that you created your load balancer in. Note that there are separate columns for Application and Classic Load Balancers and for Network Load Balancers.
         * - *AWS Management Console* : Go to the Amazon EC2 page, choose *Load Balancers* in the navigation pane, select the load balancer, and get the value of the *Hosted zone* field on the *Description* tab.
         * - *Elastic Load Balancing API* : Use `DescribeLoadBalancers` to get the applicable value. For more information, see the applicable guide:
         *
         * - Classic Load Balancers: Use [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/2012-06-01/APIReference/API_DescribeLoadBalancers.html) to get the value of `CanonicalHostedZoneNameID` .
         * - Application and Network Load Balancers: Use [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html) to get the value of `CanonicalHostedZoneID` .
         * - *CloudFormation Fn::GetAtt intrinsic function* : Use the [Fn::GetAtt](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-getatt.html) intrinsic function to get the applicable value:
         *
         * - Classic Load Balancers: Get [CanonicalHostedZoneNameID](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-elb.html#aws-properties-ec2-elb-return-values) .
         * - Application and Network Load Balancers: Get [CanonicalHostedZoneID](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-loadbalancer.html#aws-resource-elasticloadbalancingv2-loadbalancer-return-values) .
         * - *AWS CLI* : Use `describe-load-balancers` to get the applicable value. For more information, see the applicable guide:
         *
         * - Classic Load Balancers: Use [describe-load-balancers](https://docs.aws.amazon.com/cli/latest/reference/elb/describe-load-balancers.html) to get the value of `CanonicalHostedZoneNameID` .
         * - Application and Network Load Balancers: Use [describe-load-balancers](https://docs.aws.amazon.com/cli/latest/reference/elbv2/describe-load-balancers.html) to get the value of `CanonicalHostedZoneID` .
         * - **Global Accelerator accelerator** - Specify `Z2BJ6XQ5FK7U4H` .
         * - **An Amazon S3 bucket configured as a static website** - Specify the hosted zone ID for the region that you created the bucket in. For more information about valid values, see the table [Amazon S3 Website Endpoints](https://docs.aws.amazon.com/general/latest/gr/s3.html#s3_website_region_endpoints) in the *Amazon Web Services General Reference* .
         * - **Another Route 53 record in your hosted zone** - Specify the hosted zone ID of your hosted zone. (An alias record can't reference a record in a different hosted zone.)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-aliastarget.html#cfn-route53-recordsetgroup-aliastarget-hostedzoneid
         */
        readonly hostedZoneId: string;
    }
    /**
     * The object that is specified in resource record set object when you are linking a resource record set to a CIDR location.
     *
     * A `LocationName` with an asterisk “*” can be used to create a default CIDR record. `CollectionId` is still required for default record.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-cidrroutingconfig.html
     */
    interface CidrRoutingConfigProperty {
        /**
         * The CIDR collection ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-cidrroutingconfig.html#cfn-route53-recordsetgroup-cidrroutingconfig-collectionid
         */
        readonly collectionId: string;
        /**
         * The CIDR collection location name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-cidrroutingconfig.html#cfn-route53-recordsetgroup-cidrroutingconfig-locationname
         */
        readonly locationName: string;
    }
    /**
     * A complex type that contains information about a geographic location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-geolocation.html
     */
    interface GeoLocationProperty {
        /**
         * For geolocation resource record sets, a two-letter abbreviation that identifies a continent. Route 53 supports the following continent codes:.
         *
         * - *AF* : Africa
         * - *AN* : Antarctica
         * - *AS* : Asia
         * - *EU* : Europe
         * - *OC* : Oceania
         * - *NA* : North America
         * - *SA* : South America
         *
         * Constraint: Specifying `ContinentCode` with either `CountryCode` or `SubdivisionCode` returns an `InvalidInput` error.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-geolocation.html#cfn-route53-recordsetgroup-geolocation-continentcode
         */
        readonly continentCode?: string;
        /**
         * For geolocation resource record sets, the two-letter code for a country.
         *
         * Route 53 uses the two-letter country codes that are specified in [ISO standard 3166-1 alpha-2](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-geolocation.html#cfn-route53-recordsetgroup-geolocation-countrycode
         */
        readonly countryCode?: string;
        /**
         * For geolocation resource record sets, the two-letter code for a state of the United States.
         *
         * Route 53 doesn't support any other values for `SubdivisionCode` . For a list of state abbreviations, see [Appendix B: Two–Letter State and Possession Abbreviations](https://docs.aws.amazon.com/https://pe.usps.com/text/pub28/28apb.htm) on the United States Postal Service website.
         *
         * If you specify `subdivisioncode` , you must also specify `US` for `CountryCode` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-geolocation.html#cfn-route53-recordsetgroup-geolocation-subdivisioncode
         */
        readonly subdivisionCode?: string;
    }
    /**
     * (Resource record sets only): A complex type that lets you specify where your resources are located.
     *
     * Only one of `LocalZoneGroup` , `Coordinates` , or `AWS Region` is allowed per request at a time.
     *
     * For more information about geoproximity routing, see [Geoproximity routing](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy-geoproximity.html) in the *Amazon Route 53 Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-geoproximitylocation.html
     */
    interface GeoProximityLocationProperty {
        /**
         * The AWS Region the resource you are directing DNS traffic to, is in.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-geoproximitylocation.html#cfn-route53-recordsetgroup-geoproximitylocation-awsregion
         */
        readonly awsRegion?: string;
        /**
         * The bias increases or decreases the size of the geographic region from which Route 53 routes traffic to a resource.
         *
         * To use `Bias` to change the size of the geographic region, specify the applicable value for the bias:
         *
         * - To expand the size of the geographic region from which Route 53 routes traffic to a resource, specify a positive integer from 1 to 99 for the bias. Route 53 shrinks the size of adjacent regions.
         * - To shrink the size of the geographic region from which Route 53 routes traffic to a resource, specify a negative bias of -1 to -99. Route 53 expands the size of adjacent regions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-geoproximitylocation.html#cfn-route53-recordsetgroup-geoproximitylocation-bias
         */
        readonly bias?: number;
        /**
         * Contains the longitude and latitude for a geographic region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-geoproximitylocation.html#cfn-route53-recordsetgroup-geoproximitylocation-coordinates
         */
        readonly coordinates?: CfnRecordSetGroup.CoordinatesProperty | cdk.IResolvable;
        /**
         * Specifies an AWS Local Zone Group.
         *
         * A local Zone Group is usually the Local Zone code without the ending character. For example, if the Local Zone is `us-east-1-bue-1a` the Local Zone Group is `us-east-1-bue-1` .
         *
         * You can identify the Local Zones Group for a specific Local Zone by using the [describe-availability-zones](https://docs.aws.amazon.com/cli/latest/reference/ec2/describe-availability-zones.html) CLI command:
         *
         * This command returns: `"GroupName": "us-west-2-den-1"` , specifying that the Local Zone `us-west-2-den-1a` belongs to the Local Zone Group `us-west-2-den-1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-geoproximitylocation.html#cfn-route53-recordsetgroup-geoproximitylocation-localzonegroup
         */
        readonly localZoneGroup?: string;
    }
    /**
     * A complex type that lists the coordinates for a geoproximity resource record.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-coordinates.html
     */
    interface CoordinatesProperty {
        /**
         * Specifies a coordinate of the north–south position of a geographic point on the surface of the Earth (-90 - 90).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-coordinates.html#cfn-route53-recordsetgroup-coordinates-latitude
         */
        readonly latitude: string;
        /**
         * Specifies a coordinate of the east–west position of a geographic point on the surface of the Earth (-180 - 180).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-route53-recordsetgroup-coordinates.html#cfn-route53-recordsetgroup-coordinates-longitude
         */
        readonly longitude: string;
    }
}
/**
 * Properties for defining a `CfnRecordSetGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordsetgroup.html
 */
export interface CfnRecordSetGroupProps {
    /**
     * *Optional:* Any comments you want to include about a change batch request.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordsetgroup.html#cfn-route53-recordsetgroup-comment
     */
    readonly comment?: string;
    /**
     * The ID of the hosted zone that you want to create records in.
     *
     * Specify either `HostedZoneName` or `HostedZoneId` , but not both. If you have multiple hosted zones with the same domain name, you must specify the hosted zone using `HostedZoneId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordsetgroup.html#cfn-route53-recordsetgroup-hostedzoneid
     */
    readonly hostedZoneId?: string;
    /**
     * The name of the hosted zone that you want to create records in.
     *
     * You must include a trailing dot (for example, `www.example.com.` ) as part of the `HostedZoneName` .
     *
     * When you create a stack using an `AWS::Route53::RecordSet` that specifies `HostedZoneName` , AWS CloudFormation attempts to find a hosted zone whose name matches the `HostedZoneName` . If AWS CloudFormation can't find a hosted zone with a matching domain name, or if there is more than one hosted zone with the specified domain name, AWS CloudFormation will not create the stack.
     *
     * Specify either `HostedZoneName` or `HostedZoneId` , but not both. If you have multiple hosted zones with the same domain name, you must specify the hosted zone using `HostedZoneId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordsetgroup.html#cfn-route53-recordsetgroup-hostedzonename
     */
    readonly hostedZoneName?: string;
    /**
     * A complex type that contains one `RecordSet` element for each record that you want to create.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-recordsetgroup.html#cfn-route53-recordsetgroup-recordsets
     */
    readonly recordSets?: Array<cdk.IResolvable | CfnRecordSetGroup.RecordSetProperty> | cdk.IResolvable;
}
