import { natGateway, subnet } from "@cdktf/provider-aws";
import { Construct, IConstruct, IDependable } from "constructs";
import { ClientVpnEndpoint, ClientVpnEndpointOptions } from "./client-vpn-endpoint";
import { IIpAddresses, IIpv6Addresses } from "./ip-addresses";
import { NatProvider } from "./nat";
import { INetworkAcl } from "./network-acl";
import { SubnetFilter } from "./subnet";
import { GatewayVpcEndpoint, GatewayVpcEndpointOptions, InterfaceVpcEndpoint, InterfaceVpcEndpointOptions } from "./vpc-endpoint";
import { FlowLog, FlowLogOptions } from "./vpc-flow-logs";
import { EnableVpnGatewayOptions, VpnConnection, VpnConnectionOptions } from "./vpn";
import { AwsConstructBase, IAwsConstruct } from "../aws-construct";
/**
 * Outputs which may be registered for output via the Grid.
 */
export interface SubnetOutputs {
    /**
     * The subnetId for this particular subnet
     * @attribute
     */
    readonly subnetId: string;
    /**
     * The IPv4 CIDR block for this subnet
     */
    readonly ipv4CidrBlock: string;
    /**
     * The route table for this subnet
     * @attribute
     */
    readonly routeTableId: string;
}
export interface ISubnet extends IAwsConstruct {
    /** Strongly typed outputs */
    readonly subnetOutputs: SubnetOutputs;
    /**
     * The Availability Zone the subnet is located in
     */
    readonly availabilityZone: string;
    /**
     * The subnetId for this particular subnet
     * @attribute
     */
    readonly subnetId: string;
    /**
     * Dependable that can be depended upon to force internet connectivity established on the VPC
     */
    readonly internetConnectivityEstablished: IDependable;
    /**
     * The IPv4 CIDR block for this subnet
     */
    readonly ipv4CidrBlock: string;
    /**
     * The route table for this subnet
     */
    readonly routeTable: IRouteTable;
    /**
     * Associate a Network ACL with this subnet
     *
     * @param acl The Network ACL to associate
     */
    associateNetworkAcl(id: string, acl: INetworkAcl): void;
}
/**
 * Outputs which may be registered for output via the Grid.
 */
export interface RouteTableOutputs {
    /**
     * The route table ID
     * @attribute
     */
    readonly routeTableId: string;
}
/**
 * An abstract route table
 */
export interface IRouteTable {
    /**
     * Route table ID
     */
    readonly routeTableId: string;
}
/**
 * Outputs which may be registered for output via the Grid.
 */
export interface VpcOutputs {
    /**
     * Identifier for this VPC
     * @attribute
     */
    readonly vpcId: string;
    /**
     * ARN for this VPC
     * @attribute
     */
    readonly vpcArn: string;
    /**
     * CIDR range for this VPC
     *
     * @attribute
     */
    readonly vpcCidrBlock: string;
    /**
     * List of public subnets in this VPC
     *
     * @attribute
     */
    readonly publicSubnetIds: string[];
    /**
     * List of private subnets in this VPC
     *
     * @attribute
     */
    readonly privateSubnetIds: string[];
    /**
     * List of isolated subnets in this VPC
     *
     * @attribute
     */
    readonly isolatedSubnetIds: string[];
    /**
     * AZs for this VPC
     *
     * @attribute
     */
    readonly availabilityZones: string[];
    /**
     * Identifier for the VPN gateway
     *
     * @attribute
     */
    readonly vpnGatewayId?: string;
}
export interface IVpc extends IAwsConstruct {
    /** Strongly typed outputs */
    readonly vpcOutputs: VpcOutputs;
    /**
     * Identifier for this VPC
     * @attribute
     */
    readonly vpcId: string;
    /**
     * ARN for this VPC
     * @attribute
     */
    readonly vpcArn: string;
    /**
     * CIDR range for this VPC
     *
     * @attribute
     */
    readonly vpcCidrBlock: string;
    /**
     * List of public subnets in this VPC
     */
    readonly publicSubnets: ISubnet[];
    /**
     * List of private subnets in this VPC
     */
    readonly privateSubnets: ISubnet[];
    /**
     * List of isolated subnets in this VPC
     */
    readonly isolatedSubnets: ISubnet[];
    /**
     * AZs for this VPC
     */
    readonly availabilityZones: string[];
    /**
     * Identifier for the VPN gateway
     */
    readonly vpnGatewayId?: string;
    /**
     * Dependable that can be depended upon to force internet connectivity established on the VPC
     */
    readonly internetConnectivityEstablished: IDependable;
    /**
     * Return information on the subnets appropriate for the given selection strategy
     *
     * Requires that at least one subnet is matched, throws a descriptive
     * error message otherwise.
     */
    selectSubnets(selection?: SubnetSelection): SelectedSubnets;
    /**
     * Adds a VPN Gateway to this VPC
     */
    enableVpnGateway(options: EnableVpnGatewayOptions): void;
    /**
     * Adds a new VPN connection to this VPC
     */
    addVpnConnection(id: string, options: VpnConnectionOptions): VpnConnection;
    /**
     * Adds a new client VPN endpoint to this VPC
     */
    addClientVpnEndpoint(id: string, options: ClientVpnEndpointOptions): ClientVpnEndpoint;
    /**
     * Adds a new gateway endpoint to this VPC
     */
    addGatewayEndpoint(id: string, options: GatewayVpcEndpointOptions): GatewayVpcEndpoint;
    /**
     * Adds a new interface endpoint to this VPC
     */
    addInterfaceEndpoint(id: string, options: InterfaceVpcEndpointOptions): InterfaceVpcEndpoint;
    /**
     * Adds a new Flow Log to this VPC
     */
    addFlowLog(id: string, options?: FlowLogOptions): FlowLog;
}
/**
 * The types of IP addresses provisioned in the VPC.
 */
export declare enum IpProtocol {
    /**
     * The vpc will be configured with only IPv4 addresses.
     *
     * This is the default protocol if unset.
     */
    IPV4_ONLY = "Ipv4_Only",
    /**
     * The vpc will have both IPv4 and IPv6 addresses.
     *
     * Unless specified, public IPv4 addresses will not be auto assigned,
     * an egress only internet gateway (EIGW) will be created and configured,
     * and NATs and internet gateways (IGW) will be configured with IPv6 addresses.
     */
    DUAL_STACK = "Dual_Stack"
}
/**
 * The type of Subnet
 */
export declare enum SubnetType {
    /**
     * Isolated Subnets do not route traffic to the Internet (in this VPC),
     * and as such, do not require NAT gateways.
     *
     * Isolated subnets can only connect to or be connected to from other
     * instances in the same VPC. A default VPC configuration will not include
     * isolated subnets.
     *
     * This can be good for subnets with RDS or Elasticache instances,
     * or which route Internet traffic through a peer VPC.
     */
    PRIVATE_ISOLATED = "Isolated",
    /**
     * Isolated Subnets do not route traffic to the Internet (in this VPC),
     * and as such, do not require NAT gateways.
     *
     * Isolated subnets can only connect to or be connected to from other
     * instances in the same VPC. A default VPC configuration will not include
     * isolated subnets.
     *
     * This can be good for subnets with RDS or Elasticache instances,
     * or which route Internet traffic through a peer VPC.
     *
     * @deprecated use `SubnetType.PRIVATE_ISOLATED`
     */
    ISOLATED = "Deprecated_Isolated",
    /**
     * Subnet that routes to the internet, but not vice versa.
     *
     * Instances in a private subnet can connect to the Internet, but will not
     * allow connections to be initiated from the Internet. Egress to the internet will
     * need to be provided.
     * NAT Gateway(s) are the default solution to providing this subnet type the ability to route Internet traffic.
     * If a NAT Gateway is not required or desired, set `natGateways:0` or use
     * `SubnetType.PRIVATE_ISOLATED` instead.
     *
     * By default, a NAT gateway is created in every public subnet for maximum availability.
     * Be aware that you will be charged for NAT gateways.
     *
     * Normally a Private subnet will use a NAT gateway in the same AZ, but
     * if `natGateways` is used to reduce the number of NAT gateways, a NAT
     * gateway from another AZ will be used instead.
     */
    PRIVATE_WITH_EGRESS = "Private",
    /**
     * Subnet that routes to the internet (via a NAT gateway), but not vice versa.
     *
     * Instances in a private subnet can connect to the Internet, but will not
     * allow connections to be initiated from the Internet. NAT Gateway(s) are
     * required with this subnet type to route the Internet traffic through.
     * If a NAT Gateway is not required or desired, use `SubnetType.PRIVATE_ISOLATED` instead.
     *
     * By default, a NAT gateway is created in every public subnet for maximum availability.
     * Be aware that you will be charged for NAT gateways.
     *
     * Normally a Private subnet will use a NAT gateway in the same AZ, but
     * if `natGateways` is used to reduce the number of NAT gateways, a NAT
     * gateway from another AZ will be used instead.
     * @deprecated use `PRIVATE_WITH_EGRESS`
     */
    PRIVATE_WITH_NAT = "Deprecated_Private_NAT",
    /**
     * Subnet that routes to the internet, but not vice versa.
     *
     * Instances in a private subnet can connect to the Internet, but will not
     * allow connections to be initiated from the Internet. NAT Gateway(s) are
     * required with this subnet type to route the Internet traffic through.
     * If a NAT Gateway is not required or desired, use `SubnetType.PRIVATE_ISOLATED` instead.
     *
     * By default, a NAT gateway is created in every public subnet for maximum availability.
     * Be aware that you will be charged for NAT gateways.
     *
     * Normally a Private subnet will use a NAT gateway in the same AZ, but
     * if `natGateways` is used to reduce the number of NAT gateways, a NAT
     * gateway from another AZ will be used instead.
     *
     * @deprecated use `PRIVATE_WITH_EGRESS`
     */
    PRIVATE = "Deprecated_Private",
    /**
     * Subnet connected to the Internet
     *
     * Instances in a Public subnet can connect to the Internet and can be
     * connected to from the Internet as long as they are launched with public
     * IPs (controlled on the AutoScalingGroup or other constructs that launch
     * instances).
     *
     * Public subnets route outbound traffic via an Internet Gateway.
     */
    PUBLIC = "Public"
}
/**
 * Customize subnets that are selected for placement of ENIs
 *
 * Constructs that allow customization of VPC placement use parameters of this
 * type to provide placement settings.
 *
 * By default, the instances are placed in the private subnets.
 */
export interface SubnetSelection {
    /**
     * Select all subnets of the given type
     *
     * At most one of `subnetType` and `subnetGroupName` can be supplied.
     *
     * @default SubnetType.PRIVATE_WITH_EGRESS (or ISOLATED or PUBLIC if there are no PRIVATE_WITH_EGRESS subnets)
     */
    readonly subnetType?: SubnetType;
    /**
     * Select subnets only in the given AZs.
     *
     * @default no filtering on AZs is done
     */
    readonly availabilityZones?: string[];
    /**
     * Select the subnet group with the given name
     *
     * Select the subnet group with the given name. This only needs
     * to be used if you have multiple subnet groups of the same type
     * and you need to distinguish between them. Otherwise, prefer
     * `subnetType`.
     *
     * This field does not select individual subnets, it selects all subnets that
     * share the given subnet group name. This is the name supplied in
     * `subnetConfiguration`.
     *
     * At most one of `subnetType` and `subnetGroupName` can be supplied.
     *
     * @default - Selection by type instead of by name
     */
    readonly subnetGroupName?: string;
    /**
     * Alias for `subnetGroupName`
     *
     * Select the subnet group with the given name. This only needs
     * to be used if you have multiple subnet groups of the same type
     * and you need to distinguish between them.
     *
     * @deprecated Use `subnetGroupName` instead
     */
    readonly subnetName?: string;
    /**
     * If true, return at most one subnet per AZ
     *
     * @default false
     */
    readonly onePerAz?: boolean;
    /**
     * List of provided subnet filters.
     *
     * @default - none
     */
    readonly subnetFilters?: SubnetFilter[];
    /**
     * Explicitly select individual subnets
     *
     * Use this if you don't want to automatically use all subnets in
     * a group, but have a need to control selection down to
     * individual subnets.
     *
     * Cannot be specified together with `subnetType` or `subnetGroupName`.
     *
     * @default - Use all subnets in a selected group (all private subnets by default)
     */
    readonly subnets?: ISubnet[];
}
/**
 * Result of selecting a subset of subnets from a VPC
 */
export interface SelectedSubnets {
    /**
     * The subnet IDs
     */
    readonly subnetIds: string[];
    /**
     * The respective AZs of each subnet
     */
    readonly availabilityZones: string[];
    /**
     * Dependency representing internet connectivity for these subnets
     */
    readonly internetConnectivityEstablished: IDependable;
    /**
     * Selected subnet objects
     */
    readonly subnets: ISubnet[];
    /**
     * Whether any of the given subnets are from the VPC's public subnets.
     */
    readonly hasPublic: boolean;
    /**
     * The subnet selection is not actually real yet
     *
     * If this value is true, don't validate anything about the subnets. The count
     * or identities are not known yet, and the validation will most likely fail
     * which will prevent a successful lookup.
     *
     * @default false
     */
    readonly isPendingLookup?: boolean;
}
/**
 * A new or imported VPC
 */
declare abstract class VpcBase extends AwsConstructBase implements IVpc {
    /**
     * Identifier for this VPC
     */
    abstract readonly vpcId: string;
    /**
     * Arn of this VPC
     */
    abstract readonly vpcArn: string;
    /**
     * CIDR range for this VPC
     */
    abstract readonly vpcCidrBlock: string;
    /**
     * List of public subnets in this VPC
     */
    abstract readonly publicSubnets: ISubnet[];
    /**
     * List of private subnets in this VPC
     */
    abstract readonly privateSubnets: ISubnet[];
    /**
     * List of isolated subnets in this VPC
     */
    abstract readonly isolatedSubnets: ISubnet[];
    /**
     * AZs for this VPC
     */
    abstract readonly availabilityZones: string[];
    /**
     * Dependencies for internet connectivity
     */
    abstract readonly internetConnectivityEstablished: IDependable;
    get vpcOutputs(): VpcOutputs;
    get outputs(): Record<string, any>;
    /**
     * Dependencies for NAT connectivity
     *
     * @deprecated - This value is no longer used.
     */
    protected readonly natDependencies: IConstruct[];
    /**
     * If this is set to true, don't error out on trying to select subnets
     */
    protected incompleteSubnetDefinition: boolean;
    /**
     * Mutable private field for the vpnGatewayId
     *
     * @internal
     */
    protected _vpnGatewayId?: string;
    /**
     * Returns IDs of selected subnets
     */
    selectSubnets(selection?: SubnetSelection): SelectedSubnets;
    /**
     * Adds a VPN Gateway to this VPC
     */
    enableVpnGateway(options: EnableVpnGatewayOptions): void;
    /**
     * Adds a new VPN connection to this VPC
     */
    addVpnConnection(id: string, options: VpnConnectionOptions): VpnConnection;
    /**
     * Adds a new client VPN endpoint to this VPC
     */
    addClientVpnEndpoint(id: string, options: ClientVpnEndpointOptions): ClientVpnEndpoint;
    /**
     * Adds a new interface endpoint to this VPC
     */
    addInterfaceEndpoint(id: string, options: InterfaceVpcEndpointOptions): InterfaceVpcEndpoint;
    /**
     * Adds a new gateway endpoint to this VPC
     */
    addGatewayEndpoint(id: string, options: GatewayVpcEndpointOptions): GatewayVpcEndpoint;
    /**
     * Adds a new flow log to this VPC
     */
    addFlowLog(id: string, options?: FlowLogOptions): FlowLog;
    /**
     * Returns the id of the VPN Gateway (if enabled)
     */
    get vpnGatewayId(): string | undefined;
    /**
     * Return the subnets appropriate for the placement strategy
     */
    protected selectSubnetObjects(selection?: SubnetSelection): ISubnet[];
    private applySubnetFilters;
    private selectSubnetObjectsByName;
    private selectSubnetObjectsByType;
    /**
     * Validate the fields in a SubnetSelection object, and reify defaults if necessary
     *
     * In case of default selection, select the first type of PRIVATE, ISOLATED,
     * PUBLIC (in that order) that has any subnets.
     */
    private reifySelectionDefaults;
}
/**
 * Properties that reference an external Vpc
 */
export interface VpcAttributes {
    /**
     * VPC's identifier
     */
    readonly vpcId: string;
    /**
     * VPC's CIDR range
     *
     * @default - Retrieving the CIDR from the VPC will fail
     */
    readonly vpcCidrBlock?: string;
    /**
     * List of availability zones for the subnets in this VPC.
     */
    readonly availabilityZones: string[];
    /**
     * List of public subnet IDs
     *
     * Must be undefined or match the availability zones in length and order.
     *
     * @default - The VPC does not have any public subnets
     */
    readonly publicSubnetIds?: string[];
    /**
     * List of names for the public subnets
     *
     * Must be undefined or have a name for every public subnet group.
     *
     * @default - All public subnets will have the name `Public`
     */
    readonly publicSubnetNames?: string[];
    /**
     * List of IDs of route tables for the public subnets.
     *
     * Must be undefined or have a name for every public subnet group.
     *
     * @default - Retrieving the route table ID of any public subnet will fail
     */
    readonly publicSubnetRouteTableIds?: string[];
    /**
     * List of IPv4 CIDR blocks for the public subnets.
     *
     * Must be undefined or have an entry for every public subnet group.
     *
     * @default - Retrieving the IPv4 CIDR block of any public subnet will fail
     */
    readonly publicSubnetIpv4CidrBlocks?: string[];
    /**
     * List of private subnet IDs
     *
     * Must be undefined or match the availability zones in length and order.
     *
     * @default - The VPC does not have any private subnets
     */
    readonly privateSubnetIds?: string[];
    /**
     * List of names for the private subnets
     *
     * Must be undefined or have a name for every private subnet group.
     *
     * @default - All private subnets will have the name `Private`
     */
    readonly privateSubnetNames?: string[];
    /**
     * List of IDs of route tables for the private subnets.
     *
     * Must be undefined or have a name for every private subnet group.
     *
     * @default - Retrieving the route table ID of any private subnet will fail
     */
    readonly privateSubnetRouteTableIds?: string[];
    /**
     * List of IPv4 CIDR blocks for the private subnets.
     *
     * Must be undefined or have an entry for every private subnet group.
     *
     * @default - Retrieving the IPv4 CIDR block of any private subnet will fail
     */
    readonly privateSubnetIpv4CidrBlocks?: string[];
    /**
     * List of isolated subnet IDs
     *
     * Must be undefined or match the availability zones in length and order.
     *
     * @default - The VPC does not have any isolated subnets
     */
    readonly isolatedSubnetIds?: string[];
    /**
     * List of names for the isolated subnets
     *
     * Must be undefined or have a name for every isolated subnet group.
     *
     * @default - All isolated subnets will have the name `Isolated`
     */
    readonly isolatedSubnetNames?: string[];
    /**
     * List of IDs of route tables for the isolated subnets.
     *
     * Must be undefined or have a name for every isolated subnet group.
     *
     * @default - Retrieving the route table ID of any isolated subnet will fail
     */
    readonly isolatedSubnetRouteTableIds?: string[];
    /**
     * List of IPv4 CIDR blocks for the isolated subnets.
     *
     * Must be undefined or have an entry for every isolated subnet group.
     *
     * @default - Retrieving the IPv4 CIDR block of any isolated subnet will fail
     */
    readonly isolatedSubnetIpv4CidrBlocks?: string[];
    /**
     * VPN gateway's identifier
     */
    readonly vpnGatewayId?: string;
    /**
     * The region the VPC is in
     *
     * @default - The region of the stack where the VPC belongs to
     */
    readonly region?: string;
}
export interface SubnetAttributes {
    /**
     * The Availability Zone the subnet is located in
     *
     * @default - No AZ information, cannot use AZ selection features
     */
    readonly availabilityZone?: string;
    /**
     * The IPv4 CIDR block associated with the subnet
     *
     * @default - No CIDR information, cannot use CIDR filter features
     */
    readonly ipv4CidrBlock?: string;
    /**
     * The ID of the route table for this particular subnet
     *
     * @default - No route table information, cannot create VPC endpoints
     */
    readonly routeTableId?: string;
    /**
     * The subnetId for this particular subnet
     */
    readonly subnetId: string;
    /**
     * Whether to register Terraform outputs for this TerraConstruct
     *
     * @default false
     */
    readonly registerOutputs?: boolean;
    /**
     * Optional override for the outputs name
     *
     * @default id
     */
    readonly outputName?: string;
}
/**
 * Configuration for Vpc
 */
export interface VpcProps {
    /**
     * The protocol of the vpc.
     *
     * Options are IPv4 only or dual stack.
     *
     * @default IpProtocol.IPV4_ONLY
     */
    readonly ipProtocol?: IpProtocol;
    /**
     * The Provider to use to allocate IPv4 Space to your VPC.
     *
     * Options include static allocation or from a pool.
     *
     * Note this is specific to IPv4 addresses.
     *
     * @default compute.IpAddresses.cidr
     */
    readonly ipAddresses?: IIpAddresses;
    /**
     * The CIDR range to use for the VPC, e.g. '10.0.0.0/16'.
     *
     * Should be a minimum of /28 and maximum size of /16. The range will be
     * split across all subnets per Availability Zone.
     *
     * @default Vpc.DEFAULT_CIDR_RANGE
     *
     * @deprecated Use ipAddresses instead
     */
    readonly cidr?: string;
    /**
     * Indicates whether the instances launched in the VPC get public DNS hostnames.
     *
     * If this attribute is true, instances in the VPC get public DNS hostnames,
     * but only if the enableDnsSupport attribute is also set to true.
     *
     * @default true
     */
    readonly enableDnsHostnames?: boolean;
    /**
     * Indicates whether the DNS resolution is supported for the VPC.
     *
     * If this attribute is false, the Amazon-provided DNS server in the VPC that
     * resolves public DNS hostnames to IP addresses is not enabled. If this
     * attribute is true, queries to the Amazon provided DNS server at the
     * 169.254.169.253 IP address, or the reserved IP address at the base of the
     * VPC IPv4 network range plus two will succeed.
     *
     * @default true
     */
    readonly enableDnsSupport?: boolean;
    /**
     * The default tenancy of instances launched into the VPC.
     *
     * By setting this to dedicated tenancy, instances will be launched on
     * hardware dedicated to a single AWS customer, unless specifically specified
     * at instance launch time. Please note, not all instance types are usable
     * with Dedicated tenancy.
     *
     * @default DefaultInstanceTenancy.Default (shared) tenancy
     */
    readonly defaultInstanceTenancy?: DefaultInstanceTenancy;
    /**
     * Define the maximum number of AZs to use in this region
     *
     * If the region has more AZs than you want to use (for example, because of
     * EIP limits), pick a lower number here. The AZs will be sorted and picked
     * from the start of the list.
     *
     * If you pick a higher number than the number of AZs in the region, all AZs
     * in the region will be selected. To use "all AZs" available to your
     * account, use a high number (such as 99).
     *
     * Be aware that environment-agnostic stacks will be created with access to
     * only 2 AZs, so to use more than 2 AZs, be sure to specify the account and
     * region on your stack.
     *
     * Specify this option only if you do not specify `availabilityZones`.
     *
     * @default 3
     */
    readonly maxAzs?: number;
    /**
     * Define the number of AZs to reserve.
     *
     * When specified, the IP space is reserved for the azs but no actual
     * resources are provisioned.
     *
     * @default 0
     */
    readonly reservedAzs?: number;
    /**
     * Availability zones this VPC spans.
     *
     * Specify this option only if you do not specify `maxAzs`.
     *
     * @default - a subset of AZs of the stack
     */
    readonly availabilityZones?: string[];
    /**
     * The number of NAT Gateways/Instances to create.
     *
     * The type of NAT gateway or instance will be determined by the
     * `natGatewayProvider` parameter.
     *
     * You can set this number lower than the number of Availability Zones in your
     * VPC in order to save on NAT cost. Be aware you may be charged for
     * cross-AZ data traffic instead.
     *
     * @default - One NAT gateway/instance per Availability Zone
     */
    readonly natGateways?: number;
    /**
     * Configures the subnets which will have NAT Gateways/Instances
     *
     * You can pick a specific group of subnets by specifying the group name;
     * the picked subnets must be public subnets.
     *
     * Only necessary if you have more than one public subnet group.
     *
     * @default - All public subnets.
     */
    readonly natGatewaySubnets?: SubnetSelection;
    /**
     * What type of NAT provider to use
     *
     * Select between NAT gateways or NAT instances. NAT gateways
     * may not be available in all AWS regions.
     *
     * @default NatProvider.gateway()
     *
     */
    readonly natGatewayProvider?: NatProvider;
    /**
     * Configure the subnets to build for each AZ
     *
     * Each entry in this list configures a Subnet Group; each group will contain a
     * subnet for each Availability Zone.
     *
     * For example, if you want 1 public subnet, 1 private subnet, and 1 isolated
     * subnet in each AZ provide the following:
     *
     * ```ts
     * new compute.Vpc(this, 'VPC', {
     *   subnetConfiguration: [
     *      {
     *        cidrMask: 24,
     *        name: 'ingress',
     *        subnetType: compute.SubnetType.PUBLIC,
     *      },
     *      {
     *        cidrMask: 24,
     *        name: 'application',
     *        subnetType: compute.SubnetType.PRIVATE_WITH_EGRESS,
     *      },
     *      {
     *        cidrMask: 28,
     *        name: 'rds',
     *        subnetType: compute.SubnetType.PRIVATE_ISOLATED,
     *      }
     *   ]
     * });
     * ```
     *
     * @default - The VPC CIDR will be evenly divided between 1 public and 1
     * private subnet per AZ.
     */
    readonly subnetConfiguration?: SubnetConfiguration[];
    /**
     * Indicates whether a VPN gateway should be created and attached to this VPC.
     *
     * @default - true when vpnGatewayAsn or vpnConnections is specified
     */
    readonly vpnGateway?: boolean;
    /**
     * The private Autonomous System Number (ASN) for the VPN gateway.
     *
     * @default - Amazon default ASN.
     */
    readonly vpnGatewayAsn?: number;
    /**
     * VPN connections to this VPC.
     *
     * @default - No connections.
     */
    readonly vpnConnections?: {
        [id: string]: VpnConnectionOptions;
    };
    /**
     * Where to propagate VPN routes.
     *
     * @default - On the route tables associated with private subnets. If no
     * private subnets exists, isolated subnets are used. If no isolated subnets
     * exists, public subnets are used.
     */
    readonly vpnRoutePropagation?: SubnetSelection[];
    /**
     * Gateway endpoints to add to this VPC.
     *
     * @default - None.
     */
    readonly gatewayEndpoints?: {
        [id: string]: GatewayVpcEndpointOptions;
    };
    /**
     * Flow logs to add to this VPC.
     *
     * @default - No flow logs.
     */
    readonly flowLogs?: {
        [id: string]: FlowLogOptions;
    };
    /**
     * The VPC name.
     *
     * Since the VPC resource doesn't support providing a physical name, the value provided here will be recorded in the `Name` tag
     *
     * @default this.node.path
     */
    readonly vpcName?: string;
    /**
     * If set to false then disable the creation of the default internet gateway
     *
     * @default true
     */
    readonly createInternetGateway?: boolean;
    /**
     * The Provider to use to allocate IPv6 Space to your VPC.
     *
     * Options include amazon provided CIDR block.
     *
     * Note this is specific to IPv6 addresses.
     *
     * @default Ipv6Addresses.amazonProvided
     */
    readonly ipv6Addresses?: IIpv6Addresses;
}
/**
 * The default tenancy of instances launched into the VPC.
 */
export declare enum DefaultInstanceTenancy {
    /**
     * Instances can be launched with any tenancy.
     */
    DEFAULT = "default",
    /**
     * Any instance launched into the VPC automatically has dedicated tenancy, unless you launch it with the default tenancy.
     */
    DEDICATED = "dedicated"
}
/**
 * Specify configuration parameters for a single subnet group in a VPC.
 */
export interface SubnetConfiguration {
    /**
     * The number of leading 1 bits in the routing mask.
     *
     * The number of available IP addresses in each subnet of this group
     * will be equal to `2^(32 - cidrMask) - 2`.
     *
     * Valid values are `16--28`.
     *
     * Note this is specific to IPv4 addresses.
     *
     * @default - Available IP space is evenly divided across subnets.
     */
    readonly cidrMask?: number;
    /**
     * The type of Subnet to configure.
     *
     * The Subnet type will control the ability to route and connect to the
     * Internet.
     */
    readonly subnetType: SubnetType;
    /**
     * Logical name for the subnet group.
     *
     * This name can be used when selecting VPC subnets to distinguish
     * between different subnet groups of the same type.
     */
    readonly name: string;
    /**
     * Controls if subnet IP space needs to be reserved.
     *
     * When true, the IP space for the subnet is reserved but no actual
     * resources are provisioned. This space is only dependent on the
     * number of availability zones and on `cidrMask` - all other subnet
     * properties are ignored.
     *
     * @default false
     */
    readonly reserved?: boolean;
    /**
     * Controls if a public IPv4 address is associated to an instance at launch
     *
     * Note this is specific to IPv4 addresses.
     *
     * @default true in Subnet.Public of IPV4_ONLY VPCs, false otherwise
     */
    readonly mapPublicIpOnLaunch?: boolean;
    /**
     * This property is specific to dual stack VPCs.
     *
     * If set to false, then an IPv6 address will not be automatically assigned.
     *
     * Note this is specific to IPv6 addresses.
     *
     * @default true
     */
    readonly ipv6AssignAddressOnCreation?: boolean;
}
/**
 * Define an AWS Virtual Private Cloud
 *
 * See the package-level documentation of this package for an overview
 * of the various dimensions in which you can configure your VPC.
 *
 * For example:
 *
 * ```ts
 * const vpc = new compute.Vpc(this, 'TheVPC', {
 *   ipAddresses: compute.IpAddresses.cidr('10.0.0.0/16'),
 * })
 *
 * // Iterate the private subnets
 * const selection = vpc.selectSubnets({
 *   subnetType: compute.SubnetType.PRIVATE_WITH_EGRESS
 * });
 *
 * for (const subnet of selection.subnets) {
 *   // ...
 * }
 * ```
 *
 * @resource aws_vpc
 */
export declare class Vpc extends VpcBase {
    /**
     * The default CIDR range used when creating VPCs.
     * This can be overridden using VpcProps when creating a VPCNetwork resource.
     * e.g. new Vpc(this, { cidr: '192.168.0.0./16' })
     *
     * Note this is specific to the IPv4 CIDR.
     */
    static readonly DEFAULT_CIDR_RANGE: string;
    /**
     * The default subnet configuration
     *
     * 1 Public and 1 Private subnet per AZ evenly split
     */
    static readonly DEFAULT_SUBNETS: SubnetConfiguration[];
    /**
     * The default subnet configuration if natGateways specified to be 0
     *
     * 1 Public and 1 Isolated Subnet per AZ evenly split
     */
    static readonly DEFAULT_SUBNETS_NO_NAT: SubnetConfiguration[];
    /**
     * Import a VPC by supplying all attributes directly
     *
     * NOTE: using `fromVpcAttributes()` with deploy-time parameters (like a `TerraformVariable`
     * to represent a list of subnet IDs) sometimes accidentally works. It happens to work for
     * constructs that need a list of subnets (like `AutoScalingGroup` and `eks.Cluster`)
     * but it does not work for constructs that need individual subnets (like`Instance`).
     * See https://github.com/aws/aws-cdk/issues/4118 for more information.
     */
    static fromVpcAttributes(scope: Construct, id: string, attrs: VpcAttributes): IVpc;
    /**
     * Identifier for this VPC
     */
    readonly vpcId: string;
    /**
     * @attribute
     */
    readonly vpcArn: string;
    /**
     * @attribute
     */
    readonly vpcCidrBlock: string;
    /**
     * @attribute
     */
    readonly vpcDefaultNetworkAcl: string;
    /**
     * @attribute
     */
    readonly vpcDefaultSecurityGroup: string;
    /**
     * @attribute
     */
    readonly vpcIpv6CidrBlock: string;
    /**
     * List of public subnets in this VPC
     */
    readonly publicSubnets: ISubnet[];
    /**
     * List of private subnets in this VPC
     */
    readonly privateSubnets: ISubnet[];
    /**
     * List of isolated subnets in this VPC
     */
    readonly isolatedSubnets: ISubnet[];
    /**
     * AZs for this VPC
     */
    readonly availabilityZones: string[];
    /**
     * Internet Gateway for the VPC. Note that in case the VPC is configured only
     * with ISOLATED subnets, this attribute will be `undefined`.
     */
    readonly internetGatewayId?: string;
    readonly internetConnectivityEstablished: IDependable;
    /**
     * Indicates if instances launched in this VPC will have public DNS hostnames.
     */
    readonly dnsHostnamesEnabled: boolean;
    /**
     * Indicates if DNS support is enabled for this VPC.
     */
    readonly dnsSupportEnabled: boolean;
    /**
     * The VPC resource
     */
    private readonly resource;
    /**
     * Indicates if IPv4 addresses will be used in the VPC.
     *
     * True for IPV4_ONLY and DUAL_STACK VPCs.
     */
    private readonly useIpv4;
    /**
     * Indicates if IPv6 addresses will be used in the VPC.
     *
     * True for DUAL_STACK VPCs. False for IPV4_ONLY VPCs.
     */
    private readonly useIpv6;
    /**
     * The provider of ipv4 addresses
     */
    private readonly ipAddresses;
    /**
     * The provider of IPv6 addresses.
     */
    private readonly ipv6Addresses?;
    /**
     * The IPv6 CIDR block CFN resource.
     *
     * Needed to create a dependency for the subnets.
     */
    private readonly ipv6CidrBlock?;
    /**
     * The IPv6 CIDR block string representation.
     */
    private readonly ipv6SelectedCidr?;
    /**
     * Subnet configurations for this VPC
     */
    private subnetConfiguration;
    private readonly _internetConnectivityEstablished;
    /**
     * Vpc creates a VPC that spans a whole region.
     * It will automatically divide the provided VPC CIDR range, and create public and private subnets per Availability Zone.
     * Network routing for the public subnets will be configured to allow outbound access directly via an Internet Gateway.
     * Network routing for the private subnets will be configured to allow outbound access via a set of resilient NAT Gateways (one per AZ).
     */
    constructor(scope: Construct, id: string, props?: VpcProps);
    /**
     * Adds a new S3 gateway endpoint to this VPC
     *
     * @deprecated use `addGatewayEndpoint()` instead
     */
    addS3Endpoint(id: string, subnets?: SubnetSelection[]): GatewayVpcEndpoint;
    /**
     * Adds a new DynamoDB gateway endpoint to this VPC
     *
     * @deprecated use `addGatewayEndpoint()` instead
     */
    addDynamoDbEndpoint(id: string, subnets?: SubnetSelection[]): GatewayVpcEndpoint;
    private createNatGateways;
    /**
     * createSubnets creates the subnets specified by the subnet configuration
     * array or creates the `DEFAULT_SUBNETS` configuration
     */
    private createSubnets;
    /**
     * Defaults to true in Subnet.Public for IPV4_ONLY VPCs.
     *
     * Defaults to false in Subnet.Public for DUAL_STACK VPCs.
     *
     * Always defaults to false in non-public subnets and will error if set.
     */
    private calculateMapPublicIpOnLaunch;
    private createSubnetResources;
}
/**
 * Specify configuration parameters for a VPC subnet
 */
export interface SubnetProps {
    /**
     * The availability zone for the subnet
     */
    readonly availabilityZone: string;
    /**
     * The VPC which this subnet is part of
     */
    readonly vpcId: string;
    /**
     * The CIDR notation for this subnet
     */
    readonly cidrBlock: string;
    /**
     * Controls if a public IP is associated to an instance at launch
     *
     * @default true in Subnet.Public, false in Subnet.Private or Subnet.Isolated.
     */
    readonly mapPublicIpOnLaunch?: boolean;
    /**
     * The IPv6 CIDR block.
     *
     * If you specify AssignIpv6AddressOnCreation, you must also specify Ipv6CidrBlock.
     *
     * @default - no IPv6 CIDR block.
     */
    readonly ipv6CidrBlock?: string;
    /**
     * Indicates whether a network interface created in this subnet receives an IPv6 address.
     *
     * If you specify AssignIpv6AddressOnCreation, you must also specify Ipv6CidrBlock.
     *
     * @default false
     */
    readonly assignIpv6AddressOnCreation?: boolean;
}
/**
 * Represents a new VPC subnet resource
 *
 * @resource aws_subnet
 */
export declare class Subnet extends AwsConstructBase implements ISubnet {
    static isVpcSubnet(x: any): x is Subnet;
    static fromSubnetAttributes(scope: Construct, id: string, attrs: SubnetAttributes): ISubnet;
    /**
     * Import existing subnet from id.
     */
    static fromSubnetId(scope: Construct, id: string, subnetId: string): ISubnet;
    readonly subnetOutputs: SubnetOutputs;
    get outputs(): Record<string, any>;
    /**
     * The Availability Zone the subnet is located in
     */
    readonly availabilityZone: string;
    /**
     * @attribute
     */
    readonly ipv4CidrBlock: string;
    /**
     * The subnetId for this particular subnet
     */
    readonly subnetId: string;
    /**
     * @attribute
     */
    readonly subnetVpcId: string;
    /**
     * @attribute
     */
    readonly subnetAvailabilityZone: string;
    /**
     * @attribute
     */
    readonly subnetIpv6CidrBlock: string;
    /**
     * The Amazon Resource Name (ARN) of the Outpost for this subnet (if one exists).
     * @attribute
     */
    readonly subnetOutpostArn: string;
    /**
     * @attribute
     */
    readonly subnetNetworkAclAssociationId: string | undefined;
    /**
     * Parts of this VPC subnet
     */
    readonly dependencyElements: IDependable[];
    /**
     * The routeTableId attached to this subnet.
     */
    readonly routeTable: IRouteTable;
    readonly internetConnectivityEstablished: IDependable;
    private readonly _internetConnectivityEstablished;
    private _networkAcl?;
    resource: subnet.Subnet;
    constructor(scope: Construct, id: string, props: SubnetProps);
    /**
     * Create a default route that points to a passed IGW, with a dependency
     * on the IGW's attachment to the VPC.
     *
     * @param gatewayId the logical ID (ref) of the gateway attached to your VPC
     * @param gatewayAttachment the gateway attachment construct to be added as a dependency
     */
    addDefaultInternetRoute(gatewayId: string, gatewayAttachment: IDependable): void;
    /**
     * Create a default IPv6 route that points to a passed IGW.
     *
     * @param gatewayId the logical ID (ref) of the gateway attached to your VPC
     */
    addIpv6DefaultInternetRoute(gatewayId: string): void;
    /**
     * Create a default IPv6 route that points to a passed EIGW.
     *
     * @param gatewayId the logical ID (ref) of the gateway attached to your VPC
     */
    addIpv6DefaultEgressOnlyInternetRoute(gatewayId: string): void;
    /**
     * Network ACL associated with this Subnet
     *
     * Upon creation, this is undefined pointing to
     * the default ACL which allows all traffic, except
     * explicit DENY entries that you add.
     *
     * You can replace it with a custom ACL which denies all traffic except
     * the explicit ALLOW entries that you add by creating a `NetworkAcl`
     * object and calling `associateNetworkAcl()`.
     */
    get networkAcl(): INetworkAcl | undefined;
    /**
     * Adds an entry to this subnets route table that points to the passed NATGatewayId
     * @param natGatewayId The ID of the NAT gateway
     */
    addDefaultNatRoute(natGatewayId: string): void;
    /**
     * Adds an entry to this subnets route table that points to the passed NATGatewayId.
     * Uses the known 64:ff9b::/96 prefix.
     * @param natGatewayId The ID of the NAT gateway
     */
    addIpv6Nat64Route(natGatewayId: string): void;
    /**
     * Adds an entry to this subnets route table
     */
    addRoute(id: string, options: AddRouteOptions): void;
    associateNetworkAcl(id: string, networkAcl: INetworkAcl): void;
}
/**
 * Options for adding a new route to a subnet
 */
export interface AddRouteOptions {
    /**
     * IPv4 range this route applies to
     *
     * @default '0.0.0.0/0'
     */
    readonly destinationCidrBlock?: string;
    /**
     * IPv6 range this route applies to
     *
     * @default - Uses IPv6
     */
    readonly destinationIpv6CidrBlock?: string;
    /**
     * What type of router to route this traffic to
     */
    readonly routerType: RouterType;
    /**
     * The ID of the router
     *
     * Can be an instance ID, gateway ID, etc, depending on the router type.
     */
    readonly routerId: string;
    /**
     * Whether this route will enable internet connectivity
     *
     * If true, this route will be added before any AWS resources that depend
     * on internet connectivity in the VPC will be created.
     *
     * @default false
     */
    readonly enablesInternetConnectivity?: boolean;
}
/**
 * Type of router used in route
 */
export declare enum RouterType {
    /**
     * Carrier gateway
     */
    CARRIER_GATEWAY = "CarrierGateway",
    /**
     * Egress-only Internet Gateway
     */
    EGRESS_ONLY_INTERNET_GATEWAY = "EgressOnlyInternetGateway",
    /**
     * Internet Gateway
     */
    GATEWAY = "Gateway",
    /**
     * Local Gateway
     */
    LOCAL_GATEWAY = "LocalGateway",
    /**
     * NAT Gateway
     */
    NAT_GATEWAY = "NatGateway",
    /**
     * Network Interface
     */
    NETWORK_INTERFACE = "NetworkInterface",
    /**
     * Transit Gateway
     */
    TRANSIT_GATEWAY = "TransitGateway",
    /**
     * VPC peering connection
     */
    VPC_PEERING_CONNECTION = "VpcPeeringConnection",
    /**
     * VPC Endpoint for gateway load balancers
     */
    VPC_ENDPOINT = "VpcEndpoint"
}
export interface PublicSubnetProps extends SubnetProps {
}
export interface IPublicSubnet extends ISubnet {
}
export interface PublicSubnetAttributes extends SubnetAttributes {
}
/**
 * Represents a public VPC subnet resource
 */
export declare class PublicSubnet extends Subnet implements IPublicSubnet {
    static fromPublicSubnetAttributes(scope: Construct, id: string, attrs: PublicSubnetAttributes): IPublicSubnet;
    constructor(scope: Construct, id: string, props: PublicSubnetProps);
    /**
     * Creates a new managed NAT gateway attached to this public subnet.
     * Also adds the EIP for the managed NAT.
     * @returns A ref to the the NAT Gateway ID
     */
    addNatGateway(eipAllocationId?: string): natGateway.NatGateway;
}
export interface PrivateSubnetProps extends SubnetProps {
}
export interface IPrivateSubnet extends ISubnet {
}
export interface PrivateSubnetAttributes extends SubnetAttributes {
}
/**
 * Represents a private VPC subnet resource
 */
export declare class PrivateSubnet extends Subnet implements IPrivateSubnet {
    static fromPrivateSubnetAttributes(scope: Construct, id: string, attrs: PrivateSubnetAttributes): IPrivateSubnet;
    constructor(scope: Construct, id: string, props: PrivateSubnetProps);
}
export {};
