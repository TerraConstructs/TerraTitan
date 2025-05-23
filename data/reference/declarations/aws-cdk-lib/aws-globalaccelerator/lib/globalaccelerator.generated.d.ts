import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::GlobalAccelerator::Accelerator` resource is a Global Accelerator resource type that contains information about how you create an accelerator.
 *
 * An accelerator includes one or more listeners that process inbound connections and direct traffic to one or more endpoint groups, each of which includes endpoints, such as Application Load Balancers, Network Load Balancers, and Amazon EC2 instances.
 *
 * @cloudformationResource AWS::GlobalAccelerator::Accelerator
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html
 */
export declare class CfnAccelerator extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAccelerator from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAccelerator;
    /**
     * The ARN of the accelerator, such as `arn:aws:globalaccelerator::012345678901:accelerator/1234abcd-abcd-1234-abcd-1234abcdefgh` .
     *
     * @cloudformationAttribute AcceleratorArn
     */
    readonly attrAcceleratorArn: string;
    /**
     * The Domain Name System (DNS) name that Global Accelerator creates that points to an accelerator's static IPv4 addresses.
     *
     * @cloudformationAttribute DnsName
     */
    readonly attrDnsName: string;
    /**
     * The DNS name that Global Accelerator creates that points to a dual-stack accelerator's four static IP addresses: two IPv4 addresses and two IPv6 addresses.
     *
     * @cloudformationAttribute DualStackDnsName
     */
    readonly attrDualStackDnsName: string;
    /**
     * The array of IPv4 addresses in the IP address set. An IP address set can have a maximum of two IP addresses.
     *
     * @cloudformationAttribute Ipv4Addresses
     */
    readonly attrIpv4Addresses: Array<string>;
    /**
     * The array of IPv6 addresses in the IP address set. An IP address set can have a maximum of two IP addresses.
     *
     * @cloudformationAttribute Ipv6Addresses
     */
    readonly attrIpv6Addresses: Array<string>;
    /**
     * Indicates whether the accelerator is enabled. The value is true or false. The default value is true.
     */
    enabled?: boolean | cdk.IResolvable;
    /**
     * Optionally, if you've added your own IP address pool to Global Accelerator (BYOIP), you can choose IP addresses from your own pool to use for the accelerator's static IP addresses when you create an accelerator.
     */
    ipAddresses?: Array<string>;
    /**
     * The IP address type that an accelerator supports.
     */
    ipAddressType?: string;
    /**
     * The name of the accelerator.
     */
    name: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Create tags for an accelerator.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAcceleratorProps);
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
 * Properties for defining a `CfnAccelerator`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html
 */
export interface CfnAcceleratorProps {
    /**
     * Indicates whether the accelerator is enabled. The value is true or false. The default value is true.
     *
     * If the value is set to true, the accelerator cannot be deleted. If set to false, accelerator can be deleted.
     *
     * @default - true
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html#cfn-globalaccelerator-accelerator-enabled
     */
    readonly enabled?: boolean | cdk.IResolvable;
    /**
     * Optionally, if you've added your own IP address pool to Global Accelerator (BYOIP), you can choose IP addresses from your own pool to use for the accelerator's static IP addresses when you create an accelerator.
     *
     * You can specify one or two addresses, separated by a comma. Do not include the /32 suffix.
     *
     * Only one IP address from each of your IP address ranges can be used for each accelerator. If you specify only one IP address from your IP address range, Global Accelerator assigns a second static IP address for the accelerator from the AWS IP address pool.
     *
     * Note that you can't update IP addresses for an existing accelerator. To change them, you must create a new accelerator with the new addresses.
     *
     * For more information, see [Bring Your Own IP Addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the *AWS Global Accelerator Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html#cfn-globalaccelerator-accelerator-ipaddresses
     */
    readonly ipAddresses?: Array<string>;
    /**
     * The IP address type that an accelerator supports.
     *
     * For a standard accelerator, the value can be IPV4 or DUAL_STACK.
     *
     * @default - "IPV4"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html#cfn-globalaccelerator-accelerator-ipaddresstype
     */
    readonly ipAddressType?: string;
    /**
     * The name of the accelerator.
     *
     * The name must contain only alphanumeric characters or hyphens (-), and must not begin or end with a hyphen.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html#cfn-globalaccelerator-accelerator-name
     */
    readonly name: string;
    /**
     * Create tags for an accelerator.
     *
     * For more information, see [Tagging](https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html) in the *AWS Global Accelerator Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-accelerator.html#cfn-globalaccelerator-accelerator-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::GlobalAccelerator::EndpointGroup` resource is a Global Accelerator resource type that contains information about how you create an endpoint group for the specified listener.
 *
 * An endpoint group is a collection of endpoints in one AWS Region .
 *
 * @cloudformationResource AWS::GlobalAccelerator::EndpointGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html
 */
export declare class CfnEndpointGroup extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEndpointGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEndpointGroup;
    /**
     * The ARN of the endpoint group, such as `arn:aws:globalaccelerator::012345678901:accelerator/1234abcd-abcd-1234-abcd-1234abcdefgh/listener/0123vxyz/endpoint-group/098765zyxwvu` .
     *
     * @cloudformationAttribute EndpointGroupArn
     */
    readonly attrEndpointGroupArn: string;
    /**
     * The list of endpoint objects.
     */
    endpointConfigurations?: Array<CfnEndpointGroup.EndpointConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The AWS Regions where the endpoint group is located.
     */
    endpointGroupRegion: string;
    /**
     * The time—10 seconds or 30 seconds—between health checks for each endpoint.
     */
    healthCheckIntervalSeconds?: number;
    /**
     * If the protocol is HTTP/S, then this value provides the ping path that Global Accelerator uses for the destination on the endpoints for health checks.
     */
    healthCheckPath?: string;
    /**
     * The port that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group.
     */
    healthCheckPort?: number;
    /**
     * The protocol that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group.
     */
    healthCheckProtocol?: string;
    /**
     * The Amazon Resource Name (ARN) of the listener.
     */
    listenerArn: string;
    /**
     * Allows you to override the destination ports used to route traffic to an endpoint.
     */
    portOverrides?: Array<cdk.IResolvable | CfnEndpointGroup.PortOverrideProperty> | cdk.IResolvable;
    /**
     * The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy.
     */
    thresholdCount?: number;
    /**
     * The percentage of traffic to send to an AWS Regions .
     */
    trafficDialPercentage?: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEndpointGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEndpointGroup {
    /**
     * Override specific listener ports used to route traffic to endpoints that are part of an endpoint group.
     *
     * For example, you can create a port override in which the listener receives user traffic on ports 80 and 443, but your accelerator routes that traffic to ports 1080 and 1443, respectively, on the endpoints.
     *
     * For more information, see [Port overrides](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoint-groups-port-override.html) in the *AWS Global Accelerator Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-endpointgroup-portoverride.html
     */
    interface PortOverrideProperty {
        /**
         * The endpoint port that you want a listener port to be mapped to.
         *
         * This is the port on the endpoint, such as the Application Load Balancer or Amazon EC2 instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-endpointgroup-portoverride.html#cfn-globalaccelerator-endpointgroup-portoverride-endpointport
         */
        readonly endpointPort: number;
        /**
         * The listener port that you want to map to a specific endpoint port.
         *
         * This is the port that user traffic arrives to the Global Accelerator on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-endpointgroup-portoverride.html#cfn-globalaccelerator-endpointgroup-portoverride-listenerport
         */
        readonly listenerPort: number;
    }
    /**
     * A complex type for endpoints.
     *
     * A resource must be valid and active when you add it as an endpoint.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-endpointgroup-endpointconfiguration.html
     */
    interface EndpointConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the cross-account attachment that specifies the endpoints (resources) that can be added to accelerators and principals that have permission to add the endpoints.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-endpointgroup-endpointconfiguration.html#cfn-globalaccelerator-endpointgroup-endpointconfiguration-attachmentarn
         */
        readonly attachmentArn?: string;
        /**
         * Indicates whether client IP address preservation is enabled for an Application Load Balancer endpoint.
         *
         * The value is true or false. The default value is true for new accelerators.
         *
         * If the value is set to true, the client's IP address is preserved in the `X-Forwarded-For` request header as traffic travels to applications on the Application Load Balancer endpoint fronted by the accelerator.
         *
         * For more information, see [Preserve Client IP Addresses](https://docs.aws.amazon.com/global-accelerator/latest/dg/preserve-client-ip-address.html) in the *AWS Global Accelerator Developer Guide* .
         *
         * @default - true
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-endpointgroup-endpointconfiguration.html#cfn-globalaccelerator-endpointgroup-endpointconfiguration-clientippreservationenabled
         */
        readonly clientIpPreservationEnabled?: boolean | cdk.IResolvable;
        /**
         * An ID for the endpoint.
         *
         * If the endpoint is a Network Load Balancer or Application Load Balancer, this is the Amazon Resource Name (ARN) of the resource. If the endpoint is an Elastic IP address, this is the Elastic IP address allocation ID. For Amazon EC2 instances, this is the EC2 instance ID. A resource must be valid and active when you add it as an endpoint.
         *
         * For cross-account endpoints, this must be the ARN of the resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-endpointgroup-endpointconfiguration.html#cfn-globalaccelerator-endpointgroup-endpointconfiguration-endpointid
         */
        readonly endpointId: string;
        /**
         * The weight associated with the endpoint.
         *
         * When you add weights to endpoints, you configure Global Accelerator to route traffic based on proportions that you specify. For example, you might specify endpoint weights of 4, 5, 5, and 6 (sum=20). The result is that 4/20 of your traffic, on average, is routed to the first endpoint, 5/20 is routed both to the second and third endpoints, and 6/20 is routed to the last endpoint. For more information, see [Endpoint Weights](https://docs.aws.amazon.com/global-accelerator/latest/dg/about-endpoints-endpoint-weights.html) in the *AWS Global Accelerator Developer Guide* .
         *
         * @default - 100
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-endpointgroup-endpointconfiguration.html#cfn-globalaccelerator-endpointgroup-endpointconfiguration-weight
         */
        readonly weight?: number;
    }
}
/**
 * Properties for defining a `CfnEndpointGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html
 */
export interface CfnEndpointGroupProps {
    /**
     * The list of endpoint objects.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html#cfn-globalaccelerator-endpointgroup-endpointconfigurations
     */
    readonly endpointConfigurations?: Array<CfnEndpointGroup.EndpointConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The AWS Regions where the endpoint group is located.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html#cfn-globalaccelerator-endpointgroup-endpointgroupregion
     */
    readonly endpointGroupRegion: string;
    /**
     * The time—10 seconds or 30 seconds—between health checks for each endpoint.
     *
     * The default value is 30.
     *
     * @default - 30
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html#cfn-globalaccelerator-endpointgroup-healthcheckintervalseconds
     */
    readonly healthCheckIntervalSeconds?: number;
    /**
     * If the protocol is HTTP/S, then this value provides the ping path that Global Accelerator uses for the destination on the endpoints for health checks.
     *
     * The default is slash (/).
     *
     * @default - "/"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html#cfn-globalaccelerator-endpointgroup-healthcheckpath
     */
    readonly healthCheckPath?: string;
    /**
     * The port that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group.
     *
     * The default port is the port for the listener that this endpoint group is associated with. If the listener port is a list, Global Accelerator uses the first specified port in the list of ports.
     *
     * @default - -1
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html#cfn-globalaccelerator-endpointgroup-healthcheckport
     */
    readonly healthCheckPort?: number;
    /**
     * The protocol that Global Accelerator uses to perform health checks on endpoints that are part of this endpoint group.
     *
     * The default value is TCP.
     *
     * @default - "TCP"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html#cfn-globalaccelerator-endpointgroup-healthcheckprotocol
     */
    readonly healthCheckProtocol?: string;
    /**
     * The Amazon Resource Name (ARN) of the listener.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html#cfn-globalaccelerator-endpointgroup-listenerarn
     */
    readonly listenerArn: string;
    /**
     * Allows you to override the destination ports used to route traffic to an endpoint.
     *
     * Using a port override lets you map a list of external destination ports (that your users send traffic to) to a list of internal destination ports that you want an application endpoint to receive traffic on.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html#cfn-globalaccelerator-endpointgroup-portoverrides
     */
    readonly portOverrides?: Array<cdk.IResolvable | CfnEndpointGroup.PortOverrideProperty> | cdk.IResolvable;
    /**
     * The number of consecutive health checks required to set the state of a healthy endpoint to unhealthy, or to set an unhealthy endpoint to healthy.
     *
     * The default value is 3.
     *
     * @default - 3
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html#cfn-globalaccelerator-endpointgroup-thresholdcount
     */
    readonly thresholdCount?: number;
    /**
     * The percentage of traffic to send to an AWS Regions .
     *
     * Additional traffic is distributed to other endpoint groups for this listener.
     *
     * Use this action to increase (dial up) or decrease (dial down) traffic to a specific Region. The percentage is applied to the traffic that would otherwise have been routed to the Region based on optimal routing.
     *
     * The default value is 100.
     *
     * @default - 100
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-endpointgroup.html#cfn-globalaccelerator-endpointgroup-trafficdialpercentage
     */
    readonly trafficDialPercentage?: number;
}
/**
 * The `AWS::GlobalAccelerator::Listener` resource is a Global Accelerator resource type that contains information about how you create a listener to process inbound connections from clients to an accelerator.
 *
 * Connections arrive to assigned static IP addresses on a port, port range, or list of port ranges that you specify.
 *
 * @cloudformationResource AWS::GlobalAccelerator::Listener
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html
 */
export declare class CfnListener extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnListener from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnListener;
    /**
     * The ARN of the listener, such as `arn:aws:globalaccelerator::012345678901:accelerator/1234abcd-abcd-1234-abcd-1234abcdefgh/listener/0123vxyz` .
     *
     * @cloudformationAttribute ListenerArn
     */
    readonly attrListenerArn: string;
    /**
     * The Amazon Resource Name (ARN) of your accelerator.
     */
    acceleratorArn: string;
    /**
     * Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications, regardless of the port and protocol of the client request.
     */
    clientAffinity?: string;
    /**
     * The list of port ranges for the connections from clients to the accelerator.
     */
    portRanges: Array<cdk.IResolvable | CfnListener.PortRangeProperty> | cdk.IResolvable;
    /**
     * The protocol for the connections from clients to the accelerator.
     */
    protocol: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnListenerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnListener {
    /**
     * A complex type for a range of ports for a listener.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-listener-portrange.html
     */
    interface PortRangeProperty {
        /**
         * The first port in the range of ports, inclusive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-listener-portrange.html#cfn-globalaccelerator-listener-portrange-fromport
         */
        readonly fromPort: number;
        /**
         * The last port in the range of ports, inclusive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-listener-portrange.html#cfn-globalaccelerator-listener-portrange-toport
         */
        readonly toPort: number;
    }
}
/**
 * Properties for defining a `CfnListener`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html
 */
export interface CfnListenerProps {
    /**
     * The Amazon Resource Name (ARN) of your accelerator.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html#cfn-globalaccelerator-listener-acceleratorarn
     */
    readonly acceleratorArn: string;
    /**
     * Client affinity lets you direct all requests from a user to the same endpoint, if you have stateful applications, regardless of the port and protocol of the client request.
     *
     * Client affinity gives you control over whether to always route each client to the same specific endpoint.
     *
     * AWS Global Accelerator uses a consistent-flow hashing algorithm to choose the optimal endpoint for a connection. If client affinity is `NONE` , Global Accelerator uses the "five-tuple" (5-tuple) properties—source IP address, source port, destination IP address, destination port, and protocol—to select the hash value, and then chooses the best endpoint. However, with this setting, if someone uses different ports to connect to Global Accelerator, their connections might not be always routed to the same endpoint because the hash value changes.
     *
     * If you want a given client to always be routed to the same endpoint, set client affinity to `SOURCE_IP` instead. When you use the `SOURCE_IP` setting, Global Accelerator uses the "two-tuple" (2-tuple) properties— source (client) IP address and destination IP address—to select the hash value.
     *
     * The default value is `NONE` .
     *
     * @default - "NONE"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html#cfn-globalaccelerator-listener-clientaffinity
     */
    readonly clientAffinity?: string;
    /**
     * The list of port ranges for the connections from clients to the accelerator.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html#cfn-globalaccelerator-listener-portranges
     */
    readonly portRanges: Array<cdk.IResolvable | CfnListener.PortRangeProperty> | cdk.IResolvable;
    /**
     * The protocol for the connections from clients to the accelerator.
     *
     * @default - "TCP"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-listener.html#cfn-globalaccelerator-listener-protocol
     */
    readonly protocol: string;
}
/**
 * Create a cross-account attachment in AWS Global Accelerator .
 *
 * You create a cross-account attachment to specify the *principals* who have permission to work with *resources* in accelerators in their own account. You specify, in the same attachment, the resources that are shared.
 *
 * A principal can be an AWS account number or the Amazon Resource Name (ARN) for an accelerator. For account numbers that are listed as principals, to work with a resource listed in the attachment, you must sign in to an account specified as a principal. Then, you can work with resources that are listed, with any of your accelerators. If an accelerator ARN is listed in the cross-account attachment as a principal, anyone with permission to make updates to the accelerator can work with resources that are listed in the attachment.
 *
 * Specify each principal and resource separately. To specify two CIDR address pools, list them individually under `Resources` , and so on. For a command line operation, for example, you might use a statement like the following:
 *
 * `"Resources": [{"Cidr": "169.254.60.0/24"},{"Cidr": "169.254.59.0/24"}]`
 *
 * For more information, see [Working with cross-account attachments and resources in AWS Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/cross-account-resources.html) in the *AWS Global Accelerator Developer Guide* .
 *
 * @cloudformationResource AWS::GlobalAccelerator::CrossAccountAttachment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html
 */
export declare class CfnCrossAccountAttachment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCrossAccountAttachment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCrossAccountAttachment;
    /**
     * The Amazon Resource Name (ARN) of the cross-account attachment.
     *
     * @cloudformationAttribute AttachmentArn
     */
    readonly attrAttachmentArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the cross-account attachment.
     */
    name: string;
    /**
     * The principals included in the cross-account attachment.
     */
    principals?: Array<string>;
    /**
     * The resources included in the cross-account attachment.
     */
    resources?: Array<cdk.IResolvable | CfnCrossAccountAttachment.ResourceProperty> | cdk.IResolvable;
    /**
     * Add tags for a cross-account attachment.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCrossAccountAttachmentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCrossAccountAttachment {
    /**
     * A resource is one of the following: the ARN for an AWS resource that is supported by AWS Global Accelerator to be added as an endpoint, or a CIDR range that specifies a bring your own IP (BYOIP) address pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-crossaccountattachment-resource.html
     */
    interface ResourceProperty {
        /**
         * An IP address range, in CIDR format, that is specified as resource.
         *
         * The address must be provisioned and advertised in AWS Global Accelerator by following the bring your own IP address (BYOIP) process for Global Accelerator
         *
         * For more information, see [Bring your own IP addresses (BYOIP)](https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html) in the AWS Global Accelerator Developer Guide.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-crossaccountattachment-resource.html#cfn-globalaccelerator-crossaccountattachment-resource-cidr
         */
        readonly cidr?: string;
        /**
         * The endpoint ID for the endpoint that is specified as a AWS resource.
         *
         * An endpoint ID for the cross-account feature is the ARN of an AWS resource, such as a Network Load Balancer, that Global Accelerator supports as an endpoint for an accelerator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-crossaccountattachment-resource.html#cfn-globalaccelerator-crossaccountattachment-resource-endpointid
         */
        readonly endpointId?: string;
        /**
         * The AWS Region where a shared endpoint resource is located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-globalaccelerator-crossaccountattachment-resource.html#cfn-globalaccelerator-crossaccountattachment-resource-region
         */
        readonly region?: string;
    }
}
/**
 * Properties for defining a `CfnCrossAccountAttachment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html
 */
export interface CfnCrossAccountAttachmentProps {
    /**
     * The name of the cross-account attachment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html#cfn-globalaccelerator-crossaccountattachment-name
     */
    readonly name: string;
    /**
     * The principals included in the cross-account attachment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html#cfn-globalaccelerator-crossaccountattachment-principals
     */
    readonly principals?: Array<string>;
    /**
     * The resources included in the cross-account attachment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html#cfn-globalaccelerator-crossaccountattachment-resources
     */
    readonly resources?: Array<cdk.IResolvable | CfnCrossAccountAttachment.ResourceProperty> | cdk.IResolvable;
    /**
     * Add tags for a cross-account attachment.
     *
     * For more information, see [Tagging in AWS Global Accelerator](https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html) in the *AWS Global Accelerator Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-globalaccelerator-crossaccountattachment.html#cfn-globalaccelerator-crossaccountattachment-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
