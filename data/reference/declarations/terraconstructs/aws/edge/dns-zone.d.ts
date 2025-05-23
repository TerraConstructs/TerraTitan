import { route53Zone } from "@cdktf/provider-aws";
import { IResolvable } from "cdktf";
import { Construct } from "constructs";
import { IAwsConstruct, AwsConstructBase, AwsConstructProps } from "../";
import * as ec2 from "../compute";
import { INetwork } from "../network";
/**
 * Common properties to create a Route 53 hosted zone
 */
export interface CommonDnsZoneProps extends AwsConstructProps {
    /**
     * The name of the domain. For resource record types that include a domain
     * name, specify a fully qualified domain name.
     */
    readonly zoneName: string;
    /**
     * Whether to add a trailing dot to the zone name.
     *
     * @default true
     */
    readonly addTrailingDot?: boolean;
    /**
     * Any comments that you want to include about the hosted zone.
     *
     * @default none
     */
    readonly comment?: string;
    /**
     * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.60.0/docs/resources/route53_zone#force_destroy Route53Zone#force_destroy}
     */
    readonly forceDestroy?: boolean | IResolvable;
}
/**
 * Properties of a new hosted zone
 */
export interface DnsZoneProps extends CommonDnsZoneProps {
    /**
     * A VPC that you want to associate with this hosted zone. When you specify
     * this property, a private hosted zone will be created.
     *
     * You can associate additional VPCs to this private zone using `addVpc(vpc)`.
     *
     * @default public (no VPCs associated)
     */
    readonly vpcs?: ec2.IVpc[];
    /**
     * Networks that you want to associate with this hosted zone. When you specify
     * this property, a private hosted zone will be created.
     *
     * Conflicts with the `delegationSetId` and any `aws_route53_zone_association`
     * resource specifying the same zone ID.
     *
     * You can associate additional networks to this private zone using `addNetwork(network)`.
     *
     * @default public (no networks associated)
     * @deprecated use `vpcs` instead
     */
    readonly networks?: INetwork[];
    /**
     * Delegation set ID for the private hosted zone.
     *
     * The ID of the reusable delegation set whose NS records you want to assign to the hosted zone.
     *
     * Conflicts with vpc as delegation sets can only be used for public zones.
     */
    readonly delegationSetId?: string;
}
/**
 * Outputs which may be registered for output via the Grid.
 */
export interface DnsZoneOutputs {
    /**
     * Identifier of the hosted zone
     */
    readonly zoneId: string;
    /**
     * Name of the hosted zone
     */
    readonly zoneName: string;
    /**
     * Returns the set of name servers for the specific hosted zone. For example:
     * ns1.example.com.
     *
     * This attribute will be undefined for private hosted zones or hosted zones imported from another stack.
     *
     * @attribute
     */
    readonly nameServers: string[];
    /**
     * The Route 53 name server that created the SOA record.
     */
    readonly primaryNameServer: string;
}
/**
 * Imported or created DNS zone attributes
 */
export interface IDnsZone extends IAwsConstruct {
    /** Strongly typed outputs */
    readonly dnsZoneOutputs: DnsZoneOutputs;
    /**
     * ID of this hosted zone, such as "Z23ABC4XYZL05B"
     *
     * @attribute
     */
    readonly zoneId: string;
    /**
     * FQDN of this hosted zone
     */
    readonly zoneName: string;
    /**
     * ARN of this hosted zone, such as arn:${Partition}:route53:::hostedzone/${Id}
     *
     * @attribute
     */
    readonly arn: string;
    /**
     * A list of name servers in associated (or default) delegation set.
     * Find more about delegation sets in [AWS docs][delegation set docs].
     *
     * Returns the set of name servers for the specific hosted zone. For example:
     * ns1.example.com.
     *
     * [delegation set docs]: https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-configuring-delegation-set.html
     * @attribute
     */
    readonly nameServers: string[];
    /**
     * The Route 53 name server that created the SOA record.
     */
    readonly primaryNameServer: string;
}
/**
 * Container for records, and records contain information about how to route traffic for a
 * specific domain, such as example.com and its subdomains (acme.example.com, zenith.example.com)
 */
export declare class DnsZone extends AwsConstructBase implements IDnsZone {
    /**
     * Import a Route 53 hosted zone defined either outside of TerraConstruct, or from Grid Lookup
     *
     * Use when hosted zone ID is known.
     *
     * @param scope the parent Construct for this Construct
     * @param id  the logical name of this Construct
     * @param zoneId the ID of the hosted zone to import
     */
    static fromZoneId(scope: Construct, id: string, zoneId: string): IDnsZone;
    private readonly _outputs;
    get dnsZoneOutputs(): DnsZoneOutputs;
    get outputs(): Record<string, any>;
    readonly zoneId: string;
    readonly arn: string;
    readonly zoneName: string;
    readonly nameServers: string[];
    readonly primaryNameServer: string;
    /**
     * VPCs to which this hosted zone will be added
     */
    protected readonly vpcs: route53Zone.Route53ZoneVpc[];
    protected readonly resource: route53Zone.Route53Zone;
    constructor(scope: Construct, id: string, props: DnsZoneProps);
    /**
     * Add another VPC to this private hosted zone.
     *
     * @param vpc the other VPC to add.
     */
    addVpc(vpc: ec2.IVpc): void;
    /**
     * Add another Network to this private hosted zone.
     *
     * This conflicts with the `delegationSetId` and any
     * `aws_route53_zone_association` created outside this spec.
     *
     * @param network the other Network to add.
     * @deprecated use addVpc instead
     */
    addNetwork(network: INetwork): void;
}
export declare function makeHostedZoneArn(construct: Construct, hostedZoneId: string): string;
/**
 * Validates a zone name is valid by Route53 specifc naming rules,
 * and that there is no trailing dot in the name.
 *
 * @param zoneName the zone name to be validated.
 * @returns +zoneName+
 * @throws ValidationError if the name is not valid.
 */
export declare function validateZoneName(zoneName: string): void;
