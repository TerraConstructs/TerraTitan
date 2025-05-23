import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a core network Connect attachment from a specified core network attachment.
 *
 * A core network Connect attachment is a GRE-based tunnel attachment that you can use to establish a connection between a core network and an appliance. A core network Connect attachment uses an existing VPC attachment as the underlying transport mechanism.
 *
 * @cloudformationResource AWS::NetworkManager::ConnectAttachment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html
 */
export declare class CfnConnectAttachment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConnectAttachment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConnectAttachment;
    /**
     * The ID of the Connect attachment.
     *
     * @cloudformationAttribute AttachmentId
     */
    readonly attrAttachmentId: string;
    /**
     * The rule number associated with the attachment.
     *
     * @cloudformationAttribute AttachmentPolicyRuleNumber
     */
    readonly attrAttachmentPolicyRuleNumber: number;
    /**
     * The type of attachment. This will be `CONNECT` .
     *
     * @cloudformationAttribute AttachmentType
     */
    readonly attrAttachmentType: string;
    /**
     * The ARN of the core network.
     *
     * @cloudformationAttribute CoreNetworkArn
     */
    readonly attrCoreNetworkArn: string;
    /**
     * The timestamp when the Connect attachment was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The ID of the Connect attachment owner.
     *
     * @cloudformationAttribute OwnerAccountId
     */
    readonly attrOwnerAccountId: string;
    /**
     * The resource ARN for the Connect attachment.
     *
     * @cloudformationAttribute ResourceArn
     */
    readonly attrResourceArn: string;
    /**
     * The name of the Connect attachment's segment.
     *
     * @cloudformationAttribute SegmentName
     */
    readonly attrSegmentName: string;
    /**
     * The state of the Connect attachment. This can be: `REJECTED` | `PENDING_ATTACHMENT_ACCEPTANCE` | `CREATING` | `FAILED` | `AVAILABLE` | `UPDATING` | `PENDING_NETWORK_UPDATE` | `PENDING_TAG_ACCEPTANCE` | `DELETING` .
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * The timestamp when the Connect attachment was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The ID of the core network where the Connect attachment is located.
     */
    coreNetworkId: string;
    /**
     * The Region where the edge is located.
     */
    edgeLocation: string;
    /**
     * The name of the network function group.
     */
    networkFunctionGroupName?: string;
    /**
     * Options for connecting an attachment.
     */
    options: CfnConnectAttachment.ConnectAttachmentOptionsProperty | cdk.IResolvable;
    /**
     * Describes proposed changes to a network function group.
     */
    proposedNetworkFunctionGroupChange?: cdk.IResolvable | CfnConnectAttachment.ProposedNetworkFunctionGroupChangeProperty;
    /**
     * Describes a proposed segment change.
     */
    proposedSegmentChange?: cdk.IResolvable | CfnConnectAttachment.ProposedSegmentChangeProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags associated with the Connect attachment.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ID of the transport attachment.
     */
    transportAttachmentId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConnectAttachmentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConnectAttachment {
    /**
     * Describes a proposed segment change.
     *
     * In some cases, the segment change must first be evaluated and accepted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-proposedsegmentchange.html
     */
    interface ProposedSegmentChangeProperty {
        /**
         * The rule number in the policy document that applies to this change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-proposedsegmentchange.html#cfn-networkmanager-connectattachment-proposedsegmentchange-attachmentpolicyrulenumber
         */
        readonly attachmentPolicyRuleNumber?: number;
        /**
         * The name of the segment to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-proposedsegmentchange.html#cfn-networkmanager-connectattachment-proposedsegmentchange-segmentname
         */
        readonly segmentName?: string;
        /**
         * The list of key-value tags that changed for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-proposedsegmentchange.html#cfn-networkmanager-connectattachment-proposedsegmentchange-tags
         */
        readonly tags?: Array<cdk.CfnTag>;
    }
    /**
     * Describes a core network Connect attachment options.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-connectattachmentoptions.html
     */
    interface ConnectAttachmentOptionsProperty {
        /**
         * The protocol used for the attachment connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-connectattachmentoptions.html#cfn-networkmanager-connectattachment-connectattachmentoptions-protocol
         */
        readonly protocol?: string;
    }
    /**
     * Describes proposed changes to a network function group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-proposednetworkfunctiongroupchange.html
     */
    interface ProposedNetworkFunctionGroupChangeProperty {
        /**
         * The proposed new attachment policy rule number for the network function group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-proposednetworkfunctiongroupchange.html#cfn-networkmanager-connectattachment-proposednetworkfunctiongroupchange-attachmentpolicyrulenumber
         */
        readonly attachmentPolicyRuleNumber?: number;
        /**
         * The proposed name change for the network function group name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-proposednetworkfunctiongroupchange.html#cfn-networkmanager-connectattachment-proposednetworkfunctiongroupchange-networkfunctiongroupname
         */
        readonly networkFunctionGroupName?: string;
        /**
         * The list of proposed changes to the key-value tags associated with the network function group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectattachment-proposednetworkfunctiongroupchange.html#cfn-networkmanager-connectattachment-proposednetworkfunctiongroupchange-tags
         */
        readonly tags?: Array<cdk.CfnTag>;
    }
}
/**
 * Properties for defining a `CfnConnectAttachment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html
 */
export interface CfnConnectAttachmentProps {
    /**
     * The ID of the core network where the Connect attachment is located.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html#cfn-networkmanager-connectattachment-corenetworkid
     */
    readonly coreNetworkId: string;
    /**
     * The Region where the edge is located.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html#cfn-networkmanager-connectattachment-edgelocation
     */
    readonly edgeLocation: string;
    /**
     * The name of the network function group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html#cfn-networkmanager-connectattachment-networkfunctiongroupname
     */
    readonly networkFunctionGroupName?: string;
    /**
     * Options for connecting an attachment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html#cfn-networkmanager-connectattachment-options
     */
    readonly options: CfnConnectAttachment.ConnectAttachmentOptionsProperty | cdk.IResolvable;
    /**
     * Describes proposed changes to a network function group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html#cfn-networkmanager-connectattachment-proposednetworkfunctiongroupchange
     */
    readonly proposedNetworkFunctionGroupChange?: cdk.IResolvable | CfnConnectAttachment.ProposedNetworkFunctionGroupChangeProperty;
    /**
     * Describes a proposed segment change.
     *
     * In some cases, the segment change must first be evaluated and accepted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html#cfn-networkmanager-connectattachment-proposedsegmentchange
     */
    readonly proposedSegmentChange?: cdk.IResolvable | CfnConnectAttachment.ProposedSegmentChangeProperty;
    /**
     * The tags associated with the Connect attachment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html#cfn-networkmanager-connectattachment-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ID of the transport attachment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectattachment.html#cfn-networkmanager-connectattachment-transportattachmentid
     */
    readonly transportAttachmentId: string;
}
/**
 * Creates a core network Connect peer for a specified core network connect attachment between a core network and an appliance.
 *
 * The peer address and transit gateway address must be the same IP address family (IPv4 or IPv6).
 *
 * @cloudformationResource AWS::NetworkManager::ConnectPeer
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html
 */
export declare class CfnConnectPeer extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnConnectPeer from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnConnectPeer;
    /**
     * @cloudformationAttribute Configuration
     */
    readonly attrConfiguration: cdk.IResolvable;
    /**
     * @cloudformationAttribute Configuration.BgpConfigurations
     */
    readonly attrConfigurationBgpConfigurations: cdk.IResolvable;
    /**
     * @cloudformationAttribute Configuration.CoreNetworkAddress
     */
    readonly attrConfigurationCoreNetworkAddress: string;
    /**
     * @cloudformationAttribute Configuration.InsideCidrBlocks
     */
    readonly attrConfigurationInsideCidrBlocks: Array<string>;
    /**
     * @cloudformationAttribute Configuration.PeerAddress
     */
    readonly attrConfigurationPeerAddress: string;
    /**
     * @cloudformationAttribute Configuration.Protocol
     */
    readonly attrConfigurationProtocol: string;
    /**
     * The ID of the Connect peer.
     *
     * @cloudformationAttribute ConnectPeerId
     */
    readonly attrConnectPeerId: string;
    /**
     * The core network ID.
     *
     * @cloudformationAttribute CoreNetworkId
     */
    readonly attrCoreNetworkId: string;
    /**
     * The timestamp when the Connect peer was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Connect peer Regions where edges are located.
     *
     * @cloudformationAttribute EdgeLocation
     */
    readonly attrEdgeLocation: string;
    /**
     * The state of the Connect peer. This will be: `REJECTED` | `PENDING_ATTACHMENT_ACCEPTANCE` | `CREATING` | `FAILED` | `AVAILABLE` | `UPDATING` | `PENDING_NETWORK_UPDATE` | `PENDING_TAG_ACCEPTANCE` | `DELETING` .
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * Describes the BGP options.
     */
    bgpOptions?: CfnConnectPeer.BgpOptionsProperty | cdk.IResolvable;
    /**
     * The ID of the attachment to connect.
     */
    connectAttachmentId: string;
    /**
     * The IP address of a core network.
     */
    coreNetworkAddress?: string;
    /**
     * The inside IP addresses used for a Connect peer configuration.
     */
    insideCidrBlocks?: Array<string>;
    /**
     * The IP address of the Connect peer.
     */
    peerAddress: string;
    /**
     * The subnet ARN of the Connect peer.
     */
    subnetArn?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The list of key-value tags associated with the Connect peer.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnConnectPeerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnConnectPeer {
    /**
     * Describes the BGP options.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-bgpoptions.html
     */
    interface BgpOptionsProperty {
        /**
         * The Peer ASN of the BGP.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-bgpoptions.html#cfn-networkmanager-connectpeer-bgpoptions-peerasn
         */
        readonly peerAsn?: number;
    }
    /**
     * Describes a core network BGP configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-connectpeerbgpconfiguration.html
     */
    interface ConnectPeerBgpConfigurationProperty {
        /**
         * The address of a core network.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-connectpeerbgpconfiguration.html#cfn-networkmanager-connectpeer-connectpeerbgpconfiguration-corenetworkaddress
         */
        readonly coreNetworkAddress?: string;
        /**
         * The ASN of the Coret Network.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-connectpeerbgpconfiguration.html#cfn-networkmanager-connectpeer-connectpeerbgpconfiguration-corenetworkasn
         */
        readonly coreNetworkAsn?: number;
        /**
         * The address of a core network Connect peer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-connectpeerbgpconfiguration.html#cfn-networkmanager-connectpeer-connectpeerbgpconfiguration-peeraddress
         */
        readonly peerAddress?: string;
        /**
         * The ASN of the Connect peer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-connectpeerbgpconfiguration.html#cfn-networkmanager-connectpeer-connectpeerbgpconfiguration-peerasn
         */
        readonly peerAsn?: number;
    }
    /**
     * Describes a core network Connect peer configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-connectpeerconfiguration.html
     */
    interface ConnectPeerConfigurationProperty {
        /**
         * The Connect peer BGP configurations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-connectpeerconfiguration.html#cfn-networkmanager-connectpeer-connectpeerconfiguration-bgpconfigurations
         */
        readonly bgpConfigurations?: Array<CfnConnectPeer.ConnectPeerBgpConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The IP address of a core network.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-connectpeerconfiguration.html#cfn-networkmanager-connectpeer-connectpeerconfiguration-corenetworkaddress
         */
        readonly coreNetworkAddress?: string;
        /**
         * The inside IP addresses used for a Connect peer configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-connectpeerconfiguration.html#cfn-networkmanager-connectpeer-connectpeerconfiguration-insidecidrblocks
         */
        readonly insideCidrBlocks?: Array<string>;
        /**
         * The IP address of the Connect peer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-connectpeerconfiguration.html#cfn-networkmanager-connectpeer-connectpeerconfiguration-peeraddress
         */
        readonly peerAddress?: string;
        /**
         * The protocol used for a Connect peer configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-connectpeer-connectpeerconfiguration.html#cfn-networkmanager-connectpeer-connectpeerconfiguration-protocol
         */
        readonly protocol?: string;
    }
}
/**
 * Properties for defining a `CfnConnectPeer`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html
 */
export interface CfnConnectPeerProps {
    /**
     * Describes the BGP options.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-bgpoptions
     */
    readonly bgpOptions?: CfnConnectPeer.BgpOptionsProperty | cdk.IResolvable;
    /**
     * The ID of the attachment to connect.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-connectattachmentid
     */
    readonly connectAttachmentId: string;
    /**
     * The IP address of a core network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-corenetworkaddress
     */
    readonly coreNetworkAddress?: string;
    /**
     * The inside IP addresses used for a Connect peer configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-insidecidrblocks
     */
    readonly insideCidrBlocks?: Array<string>;
    /**
     * The IP address of the Connect peer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-peeraddress
     */
    readonly peerAddress: string;
    /**
     * The subnet ARN of the Connect peer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-subnetarn
     */
    readonly subnetArn?: string;
    /**
     * The list of key-value tags associated with the Connect peer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-connectpeer.html#cfn-networkmanager-connectpeer-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Describes a core network.
 *
 * @cloudformationResource AWS::NetworkManager::CoreNetwork
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-corenetwork.html
 */
export declare class CfnCoreNetwork extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCoreNetwork from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCoreNetwork;
    /**
     * The ARN of the core network.
     *
     * @cloudformationAttribute CoreNetworkArn
     */
    readonly attrCoreNetworkArn: string;
    /**
     * The ID of the core network.
     *
     * @cloudformationAttribute CoreNetworkId
     */
    readonly attrCoreNetworkId: string;
    /**
     * The timestamp when the core network was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The edges.
     *
     * @cloudformationAttribute Edges
     */
    readonly attrEdges: cdk.IResolvable;
    /**
     * The network function groups associated with a core network.
     *
     * @cloudformationAttribute NetworkFunctionGroups
     */
    readonly attrNetworkFunctionGroups: cdk.IResolvable;
    /**
     * The owner of the core network.
     *
     * @cloudformationAttribute OwnerAccount
     */
    readonly attrOwnerAccount: string;
    /**
     * The segments.
     *
     * @cloudformationAttribute Segments
     */
    readonly attrSegments: cdk.IResolvable;
    /**
     * The current state of the core network. These states are: `CREATING` | `UPDATING` | `AVAILABLE` | `DELETING` .
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * The description of a core network.
     */
    description?: string;
    /**
     * The ID of the global network that your core network is a part of.
     */
    globalNetworkId: string;
    /**
     * Describes a core network policy. For more information, see [Core network policies](https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-policy-change-sets.html) .
     */
    policyDocument?: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The list of key-value tags associated with a core network.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCoreNetworkProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCoreNetwork {
    /**
     * Describes a core network segment, which are dedicated routes.
     *
     * Only attachments within this segment can communicate with each other.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-corenetworksegment.html
     */
    interface CoreNetworkSegmentProperty {
        /**
         * The Regions where the edges are located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-corenetworksegment.html#cfn-networkmanager-corenetwork-corenetworksegment-edgelocations
         */
        readonly edgeLocations?: Array<string>;
        /**
         * The name of a core network segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-corenetworksegment.html#cfn-networkmanager-corenetwork-corenetworksegment-name
         */
        readonly name?: string;
        /**
         * The shared segments of a core network.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-corenetworksegment.html#cfn-networkmanager-corenetwork-corenetworksegment-sharedsegments
         */
        readonly sharedSegments?: Array<string>;
    }
    /**
     * Describes a core network edge.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-corenetworkedge.html
     */
    interface CoreNetworkEdgeProperty {
        /**
         * The ASN of a core network edge.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-corenetworkedge.html#cfn-networkmanager-corenetwork-corenetworkedge-asn
         */
        readonly asn?: number;
        /**
         * The Region where a core network edge is located.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-corenetworkedge.html#cfn-networkmanager-corenetwork-corenetworkedge-edgelocation
         */
        readonly edgeLocation?: string;
        /**
         * The inside IP addresses used for core network edges.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-corenetworkedge.html#cfn-networkmanager-corenetwork-corenetworkedge-insidecidrblocks
         */
        readonly insideCidrBlocks?: Array<string>;
    }
    /**
     * Describes a network function group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-corenetworknetworkfunctiongroup.html
     */
    interface CoreNetworkNetworkFunctionGroupProperty {
        /**
         * The core network edge locations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-corenetworknetworkfunctiongroup.html#cfn-networkmanager-corenetwork-corenetworknetworkfunctiongroup-edgelocations
         */
        readonly edgeLocations?: Array<string>;
        /**
         * The name of the network function group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-corenetworknetworkfunctiongroup.html#cfn-networkmanager-corenetwork-corenetworknetworkfunctiongroup-name
         */
        readonly name?: string;
        /**
         * The segments associated with the network function group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-corenetworknetworkfunctiongroup.html#cfn-networkmanager-corenetwork-corenetworknetworkfunctiongroup-segments
         */
        readonly segments?: cdk.IResolvable | CfnCoreNetwork.SegmentsProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-segments.html
     */
    interface SegmentsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-segments.html#cfn-networkmanager-corenetwork-segments-sendto
         */
        readonly sendTo?: Array<string>;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-corenetwork-segments.html#cfn-networkmanager-corenetwork-segments-sendvia
         */
        readonly sendVia?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnCoreNetwork`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-corenetwork.html
 */
export interface CfnCoreNetworkProps {
    /**
     * The description of a core network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-corenetwork.html#cfn-networkmanager-corenetwork-description
     */
    readonly description?: string;
    /**
     * The ID of the global network that your core network is a part of.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-corenetwork.html#cfn-networkmanager-corenetwork-globalnetworkid
     */
    readonly globalNetworkId: string;
    /**
     * Describes a core network policy. For more information, see [Core network policies](https://docs.aws.amazon.com/network-manager/latest/cloudwan/cloudwan-policy-change-sets.html) .
     *
     * If you update the policy document, CloudFormation will apply the core network change set generated from the updated policy document, and then set it as the LIVE policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-corenetwork.html#cfn-networkmanager-corenetwork-policydocument
     */
    readonly policyDocument?: any | cdk.IResolvable;
    /**
     * The list of key-value tags associated with a core network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-corenetwork.html#cfn-networkmanager-corenetwork-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies an association between a customer gateway, a device, and optionally, a link.
 *
 * If you specify a link, it must be associated with the specified device. The customer gateway must be connected to a VPN attachment on a transit gateway that's registered in your global network.
 *
 * You cannot associate a customer gateway with more than one device and link.
 *
 * @cloudformationResource AWS::NetworkManager::CustomerGatewayAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-customergatewayassociation.html
 */
export declare class CfnCustomerGatewayAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCustomerGatewayAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCustomerGatewayAssociation;
    /**
     * The Amazon Resource Name (ARN) of the customer gateway.
     */
    customerGatewayArn: string;
    /**
     * The ID of the device.
     */
    deviceId: string;
    /**
     * The ID of the global network.
     */
    globalNetworkId: string;
    /**
     * The ID of the link.
     */
    linkId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCustomerGatewayAssociationProps);
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
 * Properties for defining a `CfnCustomerGatewayAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-customergatewayassociation.html
 */
export interface CfnCustomerGatewayAssociationProps {
    /**
     * The Amazon Resource Name (ARN) of the customer gateway.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-customergatewayassociation.html#cfn-networkmanager-customergatewayassociation-customergatewayarn
     */
    readonly customerGatewayArn: string;
    /**
     * The ID of the device.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-customergatewayassociation.html#cfn-networkmanager-customergatewayassociation-deviceid
     */
    readonly deviceId: string;
    /**
     * The ID of the global network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-customergatewayassociation.html#cfn-networkmanager-customergatewayassociation-globalnetworkid
     */
    readonly globalNetworkId: string;
    /**
     * The ID of the link.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-customergatewayassociation.html#cfn-networkmanager-customergatewayassociation-linkid
     */
    readonly linkId?: string;
}
/**
 * Specifies a device.
 *
 * @cloudformationResource AWS::NetworkManager::Device
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html
 */
export declare class CfnDevice extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDevice from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDevice;
    /**
     * The time that the device was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The ARN of the device. For example, `arn:aws:networkmanager::123456789012:device/global-network-01231231231231231/device-07f6fd08867abc123` .
     *
     * @cloudformationAttribute DeviceArn
     */
    readonly attrDeviceArn: string;
    /**
     * The ID of the device. For example, `device-07f6fd08867abc123` .
     *
     * @cloudformationAttribute DeviceId
     */
    readonly attrDeviceId: string;
    /**
     * The state of the device.
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * The AWS location of the device.
     */
    awsLocation?: CfnDevice.AWSLocationProperty | cdk.IResolvable;
    /**
     * A description of the device.
     */
    description?: string;
    /**
     * The ID of the global network.
     */
    globalNetworkId: string;
    /**
     * The site location.
     */
    location?: cdk.IResolvable | CfnDevice.LocationProperty;
    /**
     * The model of the device.
     */
    model?: string;
    /**
     * The serial number of the device.
     */
    serialNumber?: string;
    /**
     * The site ID.
     */
    siteId?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags for the device.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The device type.
     */
    type?: string;
    /**
     * The vendor of the device.
     */
    vendor?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDeviceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDevice {
    /**
     * Specifies a location in AWS .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-device-awslocation.html
     */
    interface AWSLocationProperty {
        /**
         * The Amazon Resource Name (ARN) of the subnet that the device is located in.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-device-awslocation.html#cfn-networkmanager-device-awslocation-subnetarn
         */
        readonly subnetArn?: string;
        /**
         * The Zone that the device is located in.
         *
         * Specify the ID of an Availability Zone, Local Zone, Wavelength Zone, or an Outpost.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-device-awslocation.html#cfn-networkmanager-device-awslocation-zone
         */
        readonly zone?: string;
    }
    /**
     * Describes a location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-device-location.html
     */
    interface LocationProperty {
        /**
         * The physical address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-device-location.html#cfn-networkmanager-device-location-address
         */
        readonly address?: string;
        /**
         * The latitude.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-device-location.html#cfn-networkmanager-device-location-latitude
         */
        readonly latitude?: string;
        /**
         * The longitude.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-device-location.html#cfn-networkmanager-device-location-longitude
         */
        readonly longitude?: string;
    }
}
/**
 * Properties for defining a `CfnDevice`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html
 */
export interface CfnDeviceProps {
    /**
     * The AWS location of the device.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html#cfn-networkmanager-device-awslocation
     */
    readonly awsLocation?: CfnDevice.AWSLocationProperty | cdk.IResolvable;
    /**
     * A description of the device.
     *
     * Constraints: Maximum length of 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html#cfn-networkmanager-device-description
     */
    readonly description?: string;
    /**
     * The ID of the global network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html#cfn-networkmanager-device-globalnetworkid
     */
    readonly globalNetworkId: string;
    /**
     * The site location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html#cfn-networkmanager-device-location
     */
    readonly location?: cdk.IResolvable | CfnDevice.LocationProperty;
    /**
     * The model of the device.
     *
     * Constraints: Maximum length of 128 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html#cfn-networkmanager-device-model
     */
    readonly model?: string;
    /**
     * The serial number of the device.
     *
     * Constraints: Maximum length of 128 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html#cfn-networkmanager-device-serialnumber
     */
    readonly serialNumber?: string;
    /**
     * The site ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html#cfn-networkmanager-device-siteid
     */
    readonly siteId?: string;
    /**
     * The tags for the device.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html#cfn-networkmanager-device-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The device type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html#cfn-networkmanager-device-type
     */
    readonly type?: string;
    /**
     * The vendor of the device.
     *
     * Constraints: Maximum length of 128 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-device.html#cfn-networkmanager-device-vendor
     */
    readonly vendor?: string;
}
/**
 * Creates a new, empty global network.
 *
 * @cloudformationResource AWS::NetworkManager::GlobalNetwork
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html
 */
export declare class CfnGlobalNetwork extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGlobalNetwork from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGlobalNetwork;
    /**
     * The ARN of the global network. For example, `arn:aws:networkmanager::123456789012:global-network/global-network-01231231231231231` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the global network. For example, `global-network-01231231231231231` .
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The date and time that the global network was created.
     */
    createdAt?: string;
    /**
     * A description of the global network.
     */
    description?: string;
    /**
     * The state of the global network.
     */
    state?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags for the global network.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnGlobalNetworkProps);
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
 * Properties for defining a `CfnGlobalNetwork`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html
 */
export interface CfnGlobalNetworkProps {
    /**
     * The date and time that the global network was created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html#cfn-networkmanager-globalnetwork-createdat
     */
    readonly createdAt?: string;
    /**
     * A description of the global network.
     *
     * Constraints: Maximum length of 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html#cfn-networkmanager-globalnetwork-description
     */
    readonly description?: string;
    /**
     * The state of the global network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html#cfn-networkmanager-globalnetwork-state
     */
    readonly state?: string;
    /**
     * The tags for the global network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-globalnetwork.html#cfn-networkmanager-globalnetwork-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Specifies a link for a site.
 *
 * @cloudformationResource AWS::NetworkManager::Link
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html
 */
export declare class CfnLink extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLink from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLink;
    /**
     * The date and time that the link was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The ARN of the link. For example, `arn:aws:networkmanager::123456789012:link/global-network-01231231231231231/link-11112222aaaabbbb1` .
     *
     * @cloudformationAttribute LinkArn
     */
    readonly attrLinkArn: string;
    /**
     * The ID of the link. For example, `link-11112222aaaabbbb1` .
     *
     * @cloudformationAttribute LinkId
     */
    readonly attrLinkId: string;
    /**
     * The state of the link.
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * The bandwidth for the link.
     */
    bandwidth: CfnLink.BandwidthProperty | cdk.IResolvable;
    /**
     * A description of the link.
     */
    description?: string;
    /**
     * The ID of the global network.
     */
    globalNetworkId: string;
    /**
     * The provider of the link.
     */
    provider?: string;
    /**
     * The ID of the site.
     */
    siteId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags for the link.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The type of the link.
     */
    type?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLinkProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLink {
    /**
     * Describes bandwidth information.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-link-bandwidth.html
     */
    interface BandwidthProperty {
        /**
         * Download speed in Mbps.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-link-bandwidth.html#cfn-networkmanager-link-bandwidth-downloadspeed
         */
        readonly downloadSpeed?: number;
        /**
         * Upload speed in Mbps.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-link-bandwidth.html#cfn-networkmanager-link-bandwidth-uploadspeed
         */
        readonly uploadSpeed?: number;
    }
}
/**
 * Properties for defining a `CfnLink`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html
 */
export interface CfnLinkProps {
    /**
     * The bandwidth for the link.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html#cfn-networkmanager-link-bandwidth
     */
    readonly bandwidth: CfnLink.BandwidthProperty | cdk.IResolvable;
    /**
     * A description of the link.
     *
     * Constraints: Maximum length of 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html#cfn-networkmanager-link-description
     */
    readonly description?: string;
    /**
     * The ID of the global network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html#cfn-networkmanager-link-globalnetworkid
     */
    readonly globalNetworkId: string;
    /**
     * The provider of the link.
     *
     * Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html#cfn-networkmanager-link-provider
     */
    readonly provider?: string;
    /**
     * The ID of the site.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html#cfn-networkmanager-link-siteid
     */
    readonly siteId: string;
    /**
     * The tags for the link.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html#cfn-networkmanager-link-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of the link.
     *
     * Constraints: Maximum length of 128 characters. Cannot include the following characters: | \ ^
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-link.html#cfn-networkmanager-link-type
     */
    readonly type?: string;
}
/**
 * Describes the association between a device and a link.
 *
 * @cloudformationResource AWS::NetworkManager::LinkAssociation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html
 */
export declare class CfnLinkAssociation extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLinkAssociation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLinkAssociation;
    /**
     * The device ID for the link association.
     */
    deviceId: string;
    /**
     * The ID of the global network.
     */
    globalNetworkId: string;
    /**
     * The ID of the link.
     */
    linkId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLinkAssociationProps);
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
 * Properties for defining a `CfnLinkAssociation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html
 */
export interface CfnLinkAssociationProps {
    /**
     * The device ID for the link association.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html#cfn-networkmanager-linkassociation-deviceid
     */
    readonly deviceId: string;
    /**
     * The ID of the global network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html#cfn-networkmanager-linkassociation-globalnetworkid
     */
    readonly globalNetworkId: string;
    /**
     * The ID of the link.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-linkassociation.html#cfn-networkmanager-linkassociation-linkid
     */
    readonly linkId: string;
}
/**
 * Creates a new site in a global network.
 *
 * @cloudformationResource AWS::NetworkManager::Site
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html
 */
export declare class CfnSite extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSite from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSite;
    /**
     * The time that the site was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The ARN of the site. For example, `arn:aws:networkmanager::123456789012:site/global-network-01231231231231231/site-444555aaabbb11223` .
     *
     * @cloudformationAttribute SiteArn
     */
    readonly attrSiteArn: string;
    /**
     * The ID of the site. For example, `site-444555aaabbb11223` .
     *
     * @cloudformationAttribute SiteId
     */
    readonly attrSiteId: string;
    /**
     * The current state of the site.
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * A description of your site.
     */
    description?: string;
    /**
     * The ID of the global network.
     */
    globalNetworkId: string;
    /**
     * The site location.
     */
    location?: cdk.IResolvable | CfnSite.LocationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags for the site.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSiteProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSite {
    /**
     * Describes a location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-site-location.html
     */
    interface LocationProperty {
        /**
         * The physical address.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-site-location.html#cfn-networkmanager-site-location-address
         */
        readonly address?: string;
        /**
         * The latitude.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-site-location.html#cfn-networkmanager-site-location-latitude
         */
        readonly latitude?: string;
        /**
         * The longitude.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-site-location.html#cfn-networkmanager-site-location-longitude
         */
        readonly longitude?: string;
    }
}
/**
 * Properties for defining a `CfnSite`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html
 */
export interface CfnSiteProps {
    /**
     * A description of your site.
     *
     * Constraints: Maximum length of 256 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html#cfn-networkmanager-site-description
     */
    readonly description?: string;
    /**
     * The ID of the global network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html#cfn-networkmanager-site-globalnetworkid
     */
    readonly globalNetworkId: string;
    /**
     * The site location.
     *
     * This information is used for visualization in the Network Manager console. If you specify the address, the latitude and longitude are automatically calculated.
     *
     * - `Address` : The physical address of the site.
     * - `Latitude` : The latitude of the site.
     * - `Longitude` : The longitude of the site.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html#cfn-networkmanager-site-location
     */
    readonly location?: cdk.IResolvable | CfnSite.LocationProperty;
    /**
     * The tags for the site.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-site.html#cfn-networkmanager-site-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates an Amazon Web Services site-to-site VPN attachment on an edge location of a core network.
 *
 * @cloudformationResource AWS::NetworkManager::SiteToSiteVpnAttachment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-sitetositevpnattachment.html
 */
export declare class CfnSiteToSiteVpnAttachment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSiteToSiteVpnAttachment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSiteToSiteVpnAttachment;
    /**
     * The ID of the site-to-site VPN attachment.
     *
     * @cloudformationAttribute AttachmentId
     */
    readonly attrAttachmentId: string;
    /**
     * The policy rule number associated with the attachment.
     *
     * @cloudformationAttribute AttachmentPolicyRuleNumber
     */
    readonly attrAttachmentPolicyRuleNumber: number;
    /**
     * The type of attachment. This will be `SITE_TO_SITE_VPN` .
     *
     * @cloudformationAttribute AttachmentType
     */
    readonly attrAttachmentType: string;
    /**
     * The ARN of the core network.
     *
     * @cloudformationAttribute CoreNetworkArn
     */
    readonly attrCoreNetworkArn: string;
    /**
     * The timestamp when the site-to-site VPN attachment was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Region where the core network edge is located.
     *
     * @cloudformationAttribute EdgeLocation
     */
    readonly attrEdgeLocation: string;
    /**
     * The ID of the site-to-site VPN attachment owner.
     *
     * @cloudformationAttribute OwnerAccountId
     */
    readonly attrOwnerAccountId: string;
    /**
     * The resource ARN for the site-to-site VPN attachment.
     *
     * @cloudformationAttribute ResourceArn
     */
    readonly attrResourceArn: string;
    /**
     * The name of the site-to-site VPN attachment's segment.
     *
     * @cloudformationAttribute SegmentName
     */
    readonly attrSegmentName: string;
    /**
     * The state of the site-to-site VPN attachment. This can be: `REJECTED` | `PENDING_ATTACHMENT_ACCEPTANCE` | `CREATING` | `FAILED` | `AVAILABLE` | `UPDATING` | `PENDING_NETWORK_UPDATE` | `PENDING_TAG_ACCEPTANCE` | `DELETING` .
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * The timestamp when the site-to-site VPN attachment was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The ID of a core network where you're creating a site-to-site VPN attachment.
     */
    coreNetworkId: string;
    /**
     * The name of the network function group.
     */
    networkFunctionGroupName?: string;
    /**
     * Describes proposed changes to a network function group.
     */
    proposedNetworkFunctionGroupChange?: cdk.IResolvable | CfnSiteToSiteVpnAttachment.ProposedNetworkFunctionGroupChangeProperty;
    /**
     * Describes a proposed segment change.
     */
    proposedSegmentChange?: cdk.IResolvable | CfnSiteToSiteVpnAttachment.ProposedSegmentChangeProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags associated with the Site-to-Site VPN attachment.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ARN of the site-to-site VPN attachment.
     */
    vpnConnectionArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSiteToSiteVpnAttachmentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSiteToSiteVpnAttachment {
    /**
     * Describes a proposed segment change.
     *
     * In some cases, the segment change must first be evaluated and accepted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-sitetositevpnattachment-proposedsegmentchange.html
     */
    interface ProposedSegmentChangeProperty {
        /**
         * The rule number in the policy document that applies to this change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-sitetositevpnattachment-proposedsegmentchange.html#cfn-networkmanager-sitetositevpnattachment-proposedsegmentchange-attachmentpolicyrulenumber
         */
        readonly attachmentPolicyRuleNumber?: number;
        /**
         * The name of the segment to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-sitetositevpnattachment-proposedsegmentchange.html#cfn-networkmanager-sitetositevpnattachment-proposedsegmentchange-segmentname
         */
        readonly segmentName?: string;
        /**
         * The list of key-value tags that changed for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-sitetositevpnattachment-proposedsegmentchange.html#cfn-networkmanager-sitetositevpnattachment-proposedsegmentchange-tags
         */
        readonly tags?: Array<cdk.CfnTag>;
    }
    /**
     * Describes proposed changes to a network function group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-sitetositevpnattachment-proposednetworkfunctiongroupchange.html
     */
    interface ProposedNetworkFunctionGroupChangeProperty {
        /**
         * The proposed new attachment policy rule number for the network function group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-sitetositevpnattachment-proposednetworkfunctiongroupchange.html#cfn-networkmanager-sitetositevpnattachment-proposednetworkfunctiongroupchange-attachmentpolicyrulenumber
         */
        readonly attachmentPolicyRuleNumber?: number;
        /**
         * The proposed name change for the network function group name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-sitetositevpnattachment-proposednetworkfunctiongroupchange.html#cfn-networkmanager-sitetositevpnattachment-proposednetworkfunctiongroupchange-networkfunctiongroupname
         */
        readonly networkFunctionGroupName?: string;
        /**
         * The list of proposed changes to the key-value tags associated with the network function group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-sitetositevpnattachment-proposednetworkfunctiongroupchange.html#cfn-networkmanager-sitetositevpnattachment-proposednetworkfunctiongroupchange-tags
         */
        readonly tags?: Array<cdk.CfnTag>;
    }
}
/**
 * Properties for defining a `CfnSiteToSiteVpnAttachment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-sitetositevpnattachment.html
 */
export interface CfnSiteToSiteVpnAttachmentProps {
    /**
     * The ID of a core network where you're creating a site-to-site VPN attachment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-sitetositevpnattachment.html#cfn-networkmanager-sitetositevpnattachment-corenetworkid
     */
    readonly coreNetworkId: string;
    /**
     * The name of the network function group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-sitetositevpnattachment.html#cfn-networkmanager-sitetositevpnattachment-networkfunctiongroupname
     */
    readonly networkFunctionGroupName?: string;
    /**
     * Describes proposed changes to a network function group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-sitetositevpnattachment.html#cfn-networkmanager-sitetositevpnattachment-proposednetworkfunctiongroupchange
     */
    readonly proposedNetworkFunctionGroupChange?: cdk.IResolvable | CfnSiteToSiteVpnAttachment.ProposedNetworkFunctionGroupChangeProperty;
    /**
     * Describes a proposed segment change.
     *
     * In some cases, the segment change must first be evaluated and accepted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-sitetositevpnattachment.html#cfn-networkmanager-sitetositevpnattachment-proposedsegmentchange
     */
    readonly proposedSegmentChange?: cdk.IResolvable | CfnSiteToSiteVpnAttachment.ProposedSegmentChangeProperty;
    /**
     * The tags associated with the Site-to-Site VPN attachment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-sitetositevpnattachment.html#cfn-networkmanager-sitetositevpnattachment-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ARN of the site-to-site VPN attachment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-sitetositevpnattachment.html#cfn-networkmanager-sitetositevpnattachment-vpnconnectionarn
     */
    readonly vpnConnectionArn: string;
}
/**
 * Creates a transit gateway peering connection.
 *
 * @cloudformationResource AWS::NetworkManager::TransitGatewayPeering
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewaypeering.html
 */
export declare class CfnTransitGatewayPeering extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTransitGatewayPeering from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTransitGatewayPeering;
    /**
     * The ARN of the core network.
     *
     * @cloudformationAttribute CoreNetworkArn
     */
    readonly attrCoreNetworkArn: string;
    /**
     * The timestamp when the core network peering was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The edge location for the peer.
     *
     * @cloudformationAttribute EdgeLocation
     */
    readonly attrEdgeLocation: string;
    /**
     * The ID of the account owner.
     *
     * @cloudformationAttribute OwnerAccountId
     */
    readonly attrOwnerAccountId: string;
    /**
     * The ID of the peering.
     *
     * @cloudformationAttribute PeeringId
     */
    readonly attrPeeringId: string;
    /**
     * The peering type. This will be `TRANSIT_GATEWAY` .
     *
     * @cloudformationAttribute PeeringType
     */
    readonly attrPeeringType: string;
    /**
     * The ARN of the resource peered to a core network.
     *
     * @cloudformationAttribute ResourceArn
     */
    readonly attrResourceArn: string;
    /**
     * The current state of the peer. This can be `CREATING` | `FAILED` | `AVAILABLE` | `DELETING` .
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * The ID of the peering attachment.
     *
     * @cloudformationAttribute TransitGatewayPeeringAttachmentId
     */
    readonly attrTransitGatewayPeeringAttachmentId: string;
    /**
     * The ID of the core network.
     */
    coreNetworkId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The list of key-value tags associated with the peering.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ARN of the transit gateway.
     */
    transitGatewayArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTransitGatewayPeeringProps);
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
 * Properties for defining a `CfnTransitGatewayPeering`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewaypeering.html
 */
export interface CfnTransitGatewayPeeringProps {
    /**
     * The ID of the core network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewaypeering.html#cfn-networkmanager-transitgatewaypeering-corenetworkid
     */
    readonly coreNetworkId: string;
    /**
     * The list of key-value tags associated with the peering.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewaypeering.html#cfn-networkmanager-transitgatewaypeering-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ARN of the transit gateway.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewaypeering.html#cfn-networkmanager-transitgatewaypeering-transitgatewayarn
     */
    readonly transitGatewayArn: string;
}
/**
 * Registers a transit gateway in your global network.
 *
 * Not all Regions support transit gateways for global networks. For a list of the supported Regions, see [Region Availability](https://docs.aws.amazon.com/network-manager/latest/tgwnm/what-are-global-networks.html#nm-available-regions) in the *AWS Transit Gateways for Global Networks User Guide* . The transit gateway can be in any of the supported AWS Regions, but it must be owned by the same AWS account that owns the global network. You cannot register a transit gateway in more than one global network.
 *
 * @cloudformationResource AWS::NetworkManager::TransitGatewayRegistration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html
 */
export declare class CfnTransitGatewayRegistration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTransitGatewayRegistration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTransitGatewayRegistration;
    /**
     * The ID of the global network.
     */
    globalNetworkId: string;
    /**
     * The Amazon Resource Name (ARN) of the transit gateway.
     */
    transitGatewayArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTransitGatewayRegistrationProps);
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
 * Properties for defining a `CfnTransitGatewayRegistration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html
 */
export interface CfnTransitGatewayRegistrationProps {
    /**
     * The ID of the global network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html#cfn-networkmanager-transitgatewayregistration-globalnetworkid
     */
    readonly globalNetworkId: string;
    /**
     * The Amazon Resource Name (ARN) of the transit gateway.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayregistration.html#cfn-networkmanager-transitgatewayregistration-transitgatewayarn
     */
    readonly transitGatewayArn: string;
}
/**
 * Creates a transit gateway route table attachment.
 *
 * @cloudformationResource AWS::NetworkManager::TransitGatewayRouteTableAttachment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html
 */
export declare class CfnTransitGatewayRouteTableAttachment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTransitGatewayRouteTableAttachment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTransitGatewayRouteTableAttachment;
    /**
     * The ID of the transit gateway route table attachment.
     *
     * @cloudformationAttribute AttachmentId
     */
    readonly attrAttachmentId: string;
    /**
     * The policy rule number associated with the attachment.
     *
     * @cloudformationAttribute AttachmentPolicyRuleNumber
     */
    readonly attrAttachmentPolicyRuleNumber: number;
    /**
     * The type of attachment. This will be `TRANSIT_GATEWAY_ROUTE_TABLE` .
     *
     * @cloudformationAttribute AttachmentType
     */
    readonly attrAttachmentType: string;
    /**
     * The ARN of the core network.
     *
     * @cloudformationAttribute CoreNetworkArn
     */
    readonly attrCoreNetworkArn: string;
    /**
     * The ID of the core network.
     *
     * @cloudformationAttribute CoreNetworkId
     */
    readonly attrCoreNetworkId: string;
    /**
     * The timestamp when the transit gateway route table attachment was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Region where the core network edge is located.
     *
     * @cloudformationAttribute EdgeLocation
     */
    readonly attrEdgeLocation: string;
    /**
     * The ID of the transit gateway route table attachment owner.
     *
     * @cloudformationAttribute OwnerAccountId
     */
    readonly attrOwnerAccountId: string;
    /**
     * The resource ARN for the transit gateway route table attachment.
     *
     * @cloudformationAttribute ResourceArn
     */
    readonly attrResourceArn: string;
    /**
     * The name of the attachment's segment.
     *
     * @cloudformationAttribute SegmentName
     */
    readonly attrSegmentName: string;
    /**
     * The state of the attachment. This can be: `REJECTED` | `PENDING_ATTACHMENT_ACCEPTANCE` | `CREATING` | `FAILED` | `AVAILABLE` | `UPDATING` | `PENDING_NETWORK_UPDATE` | `PENDING_TAG_ACCEPTANCE` | `DELETING` .
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * The timestamp when the transit gateway route table attachment was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The name of the network function group.
     */
    networkFunctionGroupName?: string;
    /**
     * The ID of the transit gateway peering.
     */
    peeringId: string;
    /**
     * Describes proposed changes to a network function group.
     */
    proposedNetworkFunctionGroupChange?: cdk.IResolvable | CfnTransitGatewayRouteTableAttachment.ProposedNetworkFunctionGroupChangeProperty;
    /**
     * This property is read-only.
     */
    proposedSegmentChange?: cdk.IResolvable | CfnTransitGatewayRouteTableAttachment.ProposedSegmentChangeProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The list of key-value pairs associated with the transit gateway route table attachment.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ARN of the transit gateway attachment route table.
     */
    transitGatewayRouteTableArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTransitGatewayRouteTableAttachmentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTransitGatewayRouteTableAttachment {
    /**
     * Describes a proposed segment change.
     *
     * In some cases, the segment change must first be evaluated and accepted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-transitgatewayroutetableattachment-proposedsegmentchange.html
     */
    interface ProposedSegmentChangeProperty {
        /**
         * The rule number in the policy document that applies to this change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-transitgatewayroutetableattachment-proposedsegmentchange.html#cfn-networkmanager-transitgatewayroutetableattachment-proposedsegmentchange-attachmentpolicyrulenumber
         */
        readonly attachmentPolicyRuleNumber?: number;
        /**
         * The name of the segment to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-transitgatewayroutetableattachment-proposedsegmentchange.html#cfn-networkmanager-transitgatewayroutetableattachment-proposedsegmentchange-segmentname
         */
        readonly segmentName?: string;
        /**
         * The list of key-value tags that changed for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-transitgatewayroutetableattachment-proposedsegmentchange.html#cfn-networkmanager-transitgatewayroutetableattachment-proposedsegmentchange-tags
         */
        readonly tags?: Array<cdk.CfnTag>;
    }
    /**
     * Describes proposed changes to a network function group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-transitgatewayroutetableattachment-proposednetworkfunctiongroupchange.html
     */
    interface ProposedNetworkFunctionGroupChangeProperty {
        /**
         * The proposed new attachment policy rule number for the network function group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-transitgatewayroutetableattachment-proposednetworkfunctiongroupchange.html#cfn-networkmanager-transitgatewayroutetableattachment-proposednetworkfunctiongroupchange-attachmentpolicyrulenumber
         */
        readonly attachmentPolicyRuleNumber?: number;
        /**
         * The proposed name change for the network function group name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-transitgatewayroutetableattachment-proposednetworkfunctiongroupchange.html#cfn-networkmanager-transitgatewayroutetableattachment-proposednetworkfunctiongroupchange-networkfunctiongroupname
         */
        readonly networkFunctionGroupName?: string;
        /**
         * The list of proposed changes to the key-value tags associated with the network function group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-transitgatewayroutetableattachment-proposednetworkfunctiongroupchange.html#cfn-networkmanager-transitgatewayroutetableattachment-proposednetworkfunctiongroupchange-tags
         */
        readonly tags?: Array<cdk.CfnTag>;
    }
}
/**
 * Properties for defining a `CfnTransitGatewayRouteTableAttachment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html
 */
export interface CfnTransitGatewayRouteTableAttachmentProps {
    /**
     * The name of the network function group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-networkfunctiongroupname
     */
    readonly networkFunctionGroupName?: string;
    /**
     * The ID of the transit gateway peering.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-peeringid
     */
    readonly peeringId: string;
    /**
     * Describes proposed changes to a network function group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-proposednetworkfunctiongroupchange
     */
    readonly proposedNetworkFunctionGroupChange?: cdk.IResolvable | CfnTransitGatewayRouteTableAttachment.ProposedNetworkFunctionGroupChangeProperty;
    /**
     * This property is read-only.
     *
     * Values can't be assigned to it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-proposedsegmentchange
     */
    readonly proposedSegmentChange?: cdk.IResolvable | CfnTransitGatewayRouteTableAttachment.ProposedSegmentChangeProperty;
    /**
     * The list of key-value pairs associated with the transit gateway route table attachment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ARN of the transit gateway attachment route table.
     *
     * For example, `"TransitGatewayRouteTableArn": "arn:aws:ec2:us-west-2:123456789012:transit-gateway-route-table/tgw-rtb-9876543210123456"` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-transitgatewayroutetableattachment.html#cfn-networkmanager-transitgatewayroutetableattachment-transitgatewayroutetablearn
     */
    readonly transitGatewayRouteTableArn: string;
}
/**
 * Creates a VPC attachment on an edge location of a core network.
 *
 * @cloudformationResource AWS::NetworkManager::VpcAttachment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html
 */
export declare class CfnVpcAttachment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVpcAttachment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVpcAttachment;
    /**
     * The ID of the VPC attachment.
     *
     * @cloudformationAttribute AttachmentId
     */
    readonly attrAttachmentId: string;
    /**
     * The policy rule number associated with the attachment.
     *
     * @cloudformationAttribute AttachmentPolicyRuleNumber
     */
    readonly attrAttachmentPolicyRuleNumber: number;
    /**
     * The type of attachment. This will be `VPC` .
     *
     * @cloudformationAttribute AttachmentType
     */
    readonly attrAttachmentType: string;
    /**
     * The ARN of the core network.
     *
     * @cloudformationAttribute CoreNetworkArn
     */
    readonly attrCoreNetworkArn: string;
    /**
     * The timestamp when the VPC attachment was created.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The Region where the core network edge is located.
     *
     * @cloudformationAttribute EdgeLocation
     */
    readonly attrEdgeLocation: string;
    /**
     * The name of the network function group.
     *
     * @cloudformationAttribute NetworkFunctionGroupName
     */
    readonly attrNetworkFunctionGroupName: string;
    /**
     * The ID of the VPC attachment owner.
     *
     * @cloudformationAttribute OwnerAccountId
     */
    readonly attrOwnerAccountId: string;
    /**
     * The resource ARN for the VPC attachment.
     *
     * @cloudformationAttribute ResourceArn
     */
    readonly attrResourceArn: string;
    /**
     * The name of the attachment's segment.
     *
     * @cloudformationAttribute SegmentName
     */
    readonly attrSegmentName: string;
    /**
     * The state of the attachment. This can be: `REJECTED` | `PENDING_ATTACHMENT_ACCEPTANCE` | `CREATING` | `FAILED` | `AVAILABLE` | `UPDATING` | `PENDING_NETWORK_UPDATE` | `PENDING_TAG_ACCEPTANCE` | `DELETING` .
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * The timestamp when the VPC attachment was last updated.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * The core network ID.
     */
    coreNetworkId: string;
    /**
     * Options for creating the VPC attachment.
     */
    options?: cdk.IResolvable | CfnVpcAttachment.VpcOptionsProperty;
    /**
     * Describes proposed changes to a network function group.
     */
    proposedNetworkFunctionGroupChange?: cdk.IResolvable | CfnVpcAttachment.ProposedNetworkFunctionGroupChangeProperty;
    /**
     * Describes a proposed segment change.
     */
    proposedSegmentChange?: cdk.IResolvable | CfnVpcAttachment.ProposedSegmentChangeProperty;
    /**
     * The subnet ARNs.
     */
    subnetArns: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags associated with the VPC attachment.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The ARN of the VPC attachment.
     */
    vpcArn: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVpcAttachmentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnVpcAttachment {
    /**
     * Describes a proposed segment change.
     *
     * In some cases, the segment change must first be evaluated and accepted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-vpcattachment-proposedsegmentchange.html
     */
    interface ProposedSegmentChangeProperty {
        /**
         * The rule number in the policy document that applies to this change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-vpcattachment-proposedsegmentchange.html#cfn-networkmanager-vpcattachment-proposedsegmentchange-attachmentpolicyrulenumber
         */
        readonly attachmentPolicyRuleNumber?: number;
        /**
         * The name of the segment to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-vpcattachment-proposedsegmentchange.html#cfn-networkmanager-vpcattachment-proposedsegmentchange-segmentname
         */
        readonly segmentName?: string;
        /**
         * The list of key-value tags that changed for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-vpcattachment-proposedsegmentchange.html#cfn-networkmanager-vpcattachment-proposedsegmentchange-tags
         */
        readonly tags?: Array<cdk.CfnTag>;
    }
    /**
     * Describes the VPC options.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-vpcattachment-vpcoptions.html
     */
    interface VpcOptionsProperty {
        /**
         * Indicates whether appliance mode is supported.
         *
         * If enabled, traffic flow between a source and destination use the same Availability Zone for the VPC attachment for the lifetime of that flow. The default value is `false` .
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-vpcattachment-vpcoptions.html#cfn-networkmanager-vpcattachment-vpcoptions-appliancemodesupport
         */
        readonly applianceModeSupport?: boolean | cdk.IResolvable;
        /**
         * Indicates whether IPv6 is supported.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-vpcattachment-vpcoptions.html#cfn-networkmanager-vpcattachment-vpcoptions-ipv6support
         */
        readonly ipv6Support?: boolean | cdk.IResolvable;
    }
    /**
     * Describes proposed changes to a network function group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-vpcattachment-proposednetworkfunctiongroupchange.html
     */
    interface ProposedNetworkFunctionGroupChangeProperty {
        /**
         * The proposed new attachment policy rule number for the network function group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-vpcattachment-proposednetworkfunctiongroupchange.html#cfn-networkmanager-vpcattachment-proposednetworkfunctiongroupchange-attachmentpolicyrulenumber
         */
        readonly attachmentPolicyRuleNumber?: number;
        /**
         * The proposed name change for the network function group name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-vpcattachment-proposednetworkfunctiongroupchange.html#cfn-networkmanager-vpcattachment-proposednetworkfunctiongroupchange-networkfunctiongroupname
         */
        readonly networkFunctionGroupName?: string;
        /**
         * The list of proposed changes to the key-value tags associated with the network function group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-vpcattachment-proposednetworkfunctiongroupchange.html#cfn-networkmanager-vpcattachment-proposednetworkfunctiongroupchange-tags
         */
        readonly tags?: Array<cdk.CfnTag>;
    }
}
/**
 * Properties for defining a `CfnVpcAttachment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html
 */
export interface CfnVpcAttachmentProps {
    /**
     * The core network ID.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-corenetworkid
     */
    readonly coreNetworkId: string;
    /**
     * Options for creating the VPC attachment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-options
     */
    readonly options?: cdk.IResolvable | CfnVpcAttachment.VpcOptionsProperty;
    /**
     * Describes proposed changes to a network function group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-proposednetworkfunctiongroupchange
     */
    readonly proposedNetworkFunctionGroupChange?: cdk.IResolvable | CfnVpcAttachment.ProposedNetworkFunctionGroupChangeProperty;
    /**
     * Describes a proposed segment change.
     *
     * In some cases, the segment change must first be evaluated and accepted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-proposedsegmentchange
     */
    readonly proposedSegmentChange?: cdk.IResolvable | CfnVpcAttachment.ProposedSegmentChangeProperty;
    /**
     * The subnet ARNs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-subnetarns
     */
    readonly subnetArns: Array<string>;
    /**
     * The tags associated with the VPC attachment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The ARN of the VPC attachment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-vpcattachment.html#cfn-networkmanager-vpcattachment-vpcarn
     */
    readonly vpcArn: string;
}
/**
 * Creates an AWS Direct Connect gateway attachment.
 *
 * @cloudformationResource AWS::NetworkManager::DirectConnectGatewayAttachment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html
 */
export declare class CfnDirectConnectGatewayAttachment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDirectConnectGatewayAttachment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDirectConnectGatewayAttachment;
    /**
     * Id of the attachment.
     *
     * @cloudformationAttribute AttachmentId
     */
    readonly attrAttachmentId: string;
    /**
     * The policy rule number associated with the attachment.
     *
     * @cloudformationAttribute AttachmentPolicyRuleNumber
     */
    readonly attrAttachmentPolicyRuleNumber: number;
    /**
     * Attachment type.
     *
     * @cloudformationAttribute AttachmentType
     */
    readonly attrAttachmentType: string;
    /**
     * The ARN of a core network for the Direct Connect Gateway attachment.
     *
     * @cloudformationAttribute CoreNetworkArn
     */
    readonly attrCoreNetworkArn: string;
    /**
     * Creation time of the attachment.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * The name of the network function group.
     *
     * @cloudformationAttribute NetworkFunctionGroupName
     */
    readonly attrNetworkFunctionGroupName: string;
    /**
     * Owner account of the attachment.
     *
     * @cloudformationAttribute OwnerAccountId
     */
    readonly attrOwnerAccountId: string;
    /**
     * The ARN of the Resource.
     *
     * @cloudformationAttribute ResourceArn
     */
    readonly attrResourceArn: string;
    /**
     * The name of the segment attachment..
     *
     * @cloudformationAttribute SegmentName
     */
    readonly attrSegmentName: string;
    /**
     * State of the attachment.
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * Last update time of the attachment.
     *
     * @cloudformationAttribute UpdatedAt
     */
    readonly attrUpdatedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The ID of a core network for the Direct Connect Gateway attachment.
     */
    coreNetworkId: string;
    /**
     * The Direct Connect gateway attachment ARN.
     */
    directConnectGatewayArn: string;
    /**
     * The Regions where the edges are located.
     */
    edgeLocations: Array<string>;
    /**
     * Describes proposed changes to a network function group.
     */
    proposedNetworkFunctionGroupChange?: cdk.IResolvable | CfnDirectConnectGatewayAttachment.ProposedNetworkFunctionGroupChangeProperty;
    /**
     * Describes a proposed segment change.
     */
    proposedSegmentChange?: cdk.IResolvable | CfnDirectConnectGatewayAttachment.ProposedSegmentChangeProperty;
    /**
     * Tags for the attachment.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDirectConnectGatewayAttachmentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDirectConnectGatewayAttachment {
    /**
     * Describes a proposed segment change.
     *
     * In some cases, the segment change must first be evaluated and accepted.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-directconnectgatewayattachment-proposedsegmentchange.html
     */
    interface ProposedSegmentChangeProperty {
        /**
         * The rule number in the policy document that applies to this change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-directconnectgatewayattachment-proposedsegmentchange.html#cfn-networkmanager-directconnectgatewayattachment-proposedsegmentchange-attachmentpolicyrulenumber
         */
        readonly attachmentPolicyRuleNumber?: number;
        /**
         * The name of the segment to change.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-directconnectgatewayattachment-proposedsegmentchange.html#cfn-networkmanager-directconnectgatewayattachment-proposedsegmentchange-segmentname
         */
        readonly segmentName?: string;
        /**
         * The list of key-value tags that changed for the segment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-directconnectgatewayattachment-proposedsegmentchange.html#cfn-networkmanager-directconnectgatewayattachment-proposedsegmentchange-tags
         */
        readonly tags?: Array<cdk.CfnTag>;
    }
    /**
     * Describes proposed changes to a network function group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-directconnectgatewayattachment-proposednetworkfunctiongroupchange.html
     */
    interface ProposedNetworkFunctionGroupChangeProperty {
        /**
         * The proposed new attachment policy rule number for the network function group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-directconnectgatewayattachment-proposednetworkfunctiongroupchange.html#cfn-networkmanager-directconnectgatewayattachment-proposednetworkfunctiongroupchange-attachmentpolicyrulenumber
         */
        readonly attachmentPolicyRuleNumber?: number;
        /**
         * The proposed name change for the network function group name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-directconnectgatewayattachment-proposednetworkfunctiongroupchange.html#cfn-networkmanager-directconnectgatewayattachment-proposednetworkfunctiongroupchange-networkfunctiongroupname
         */
        readonly networkFunctionGroupName?: string;
        /**
         * The list of proposed changes to the key-value tags associated with the network function group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-networkmanager-directconnectgatewayattachment-proposednetworkfunctiongroupchange.html#cfn-networkmanager-directconnectgatewayattachment-proposednetworkfunctiongroupchange-tags
         */
        readonly tags?: Array<cdk.CfnTag>;
    }
}
/**
 * Properties for defining a `CfnDirectConnectGatewayAttachment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html
 */
export interface CfnDirectConnectGatewayAttachmentProps {
    /**
     * The ID of a core network for the Direct Connect Gateway attachment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-corenetworkid
     */
    readonly coreNetworkId: string;
    /**
     * The Direct Connect gateway attachment ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-directconnectgatewayarn
     */
    readonly directConnectGatewayArn: string;
    /**
     * The Regions where the edges are located.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-edgelocations
     */
    readonly edgeLocations: Array<string>;
    /**
     * Describes proposed changes to a network function group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-proposednetworkfunctiongroupchange
     */
    readonly proposedNetworkFunctionGroupChange?: cdk.IResolvable | CfnDirectConnectGatewayAttachment.ProposedNetworkFunctionGroupChangeProperty;
    /**
     * Describes a proposed segment change.
     *
     * In some cases, the segment change must first be evaluated and accepted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-proposedsegmentchange
     */
    readonly proposedSegmentChange?: cdk.IResolvable | CfnDirectConnectGatewayAttachment.ProposedSegmentChangeProperty;
    /**
     * Tags for the attachment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-networkmanager-directconnectgatewayattachment.html#cfn-networkmanager-directconnectgatewayattachment-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
