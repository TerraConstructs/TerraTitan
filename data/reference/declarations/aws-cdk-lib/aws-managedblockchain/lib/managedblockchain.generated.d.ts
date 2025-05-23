import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a new accessor for use with Amazon Managed Blockchain service that supports token based access.
 *
 * The accessor contains information required for token based access.
 *
 * @cloudformationResource AWS::ManagedBlockchain::Accessor
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html
 */
export declare class CfnAccessor extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnAccessor from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnAccessor;
    /**
     * The Amazon Resource Name (ARN) of the accessor. For more information about ARNs and their format, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *AWS General Reference* .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The billing token is a property of the accessor. Use this token to make Ethereum API calls to your Ethereum node. The billing token is used to track your accessor object for billing Ethereum API requests made to your Ethereum nodes.
     *
     * @cloudformationAttribute BillingToken
     */
    readonly attrBillingToken: string;
    /**
     * The creation date and time of the accessor.
     *
     * @cloudformationAttribute CreationDate
     */
    readonly attrCreationDate: string;
    /**
     * The unique identifier of the accessor.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The current status of the accessor.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * The type of the accessor.
     */
    accessorType: string;
    /**
     * The blockchain network that the `Accessor` token is created for.
     */
    networkType?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags assigned to the Accessor.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnAccessorProps);
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
 * Properties for defining a `CfnAccessor`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html
 */
export interface CfnAccessorProps {
    /**
     * The type of the accessor.
     *
     * > Currently, accessor type is restricted to `BILLING_TOKEN` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html#cfn-managedblockchain-accessor-accessortype
     */
    readonly accessorType: string;
    /**
     * The blockchain network that the `Accessor` token is created for.
     *
     * > We recommend using the appropriate `networkType` value for the blockchain network that you are creating the `Accessor` token for. You cannot use the value `ETHEREUM_MAINNET_AND_GOERLI` to specify a `networkType` for your Accessor token.
     * >
     * > The default value of `ETHEREUM_MAINNET_AND_GOERLI` is only applied:
     * >
     * > - when the `CreateAccessor` action does not set a `networkType` .
     * > - to all existing `Accessor` tokens that were created before the `networkType` property was introduced.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html#cfn-managedblockchain-accessor-networktype
     */
    readonly networkType?: string;
    /**
     * The tags assigned to the Accessor.
     *
     * For more information about tags, see [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/ethereum-dev/tagging-resources.html) in the *Amazon Managed Blockchain Ethereum Developer Guide* , or [Tagging Resources](https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/tagging-resources.html) in the *Amazon Managed Blockchain Hyperledger Fabric Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-accessor.html#cfn-managedblockchain-accessor-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Creates a member within a Managed Blockchain network.
 *
 * Applies only to Hyperledger Fabric.
 *
 * @cloudformationResource AWS::ManagedBlockchain::Member
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html
 */
export declare class CfnMember extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMember from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMember;
    /**
     * The unique identifier of the member.
     *
     * @cloudformationAttribute MemberId
     */
    readonly attrMemberId: string;
    /**
     * The unique identifier of the network to which the member belongs.
     *
     * @cloudformationAttribute NetworkId
     */
    readonly attrNetworkId: string;
    /**
     * The unique identifier of the invitation to join the network sent to the account that creates the member.
     */
    invitationId?: string;
    /**
     * Configuration properties of the member.
     */
    memberConfiguration: cdk.IResolvable | CfnMember.MemberConfigurationProperty;
    /**
     * Configuration properties of the network to which the member belongs.
     */
    networkConfiguration?: cdk.IResolvable | CfnMember.NetworkConfigurationProperty;
    /**
     * The unique identifier of the network to which the member belongs.
     */
    networkId?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMemberProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMember {
    /**
     * Configuration properties of the member.
     *
     * Applies only to Hyperledger Fabric.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberconfiguration.html
     */
    interface MemberConfigurationProperty {
        /**
         * An optional description of the member.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberconfiguration.html#cfn-managedblockchain-member-memberconfiguration-description
         */
        readonly description?: string;
        /**
         * Configuration properties of the blockchain framework relevant to the member.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberconfiguration.html#cfn-managedblockchain-member-memberconfiguration-memberframeworkconfiguration
         */
        readonly memberFrameworkConfiguration?: cdk.IResolvable | CfnMember.MemberFrameworkConfigurationProperty;
        /**
         * The name of the member.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberconfiguration.html#cfn-managedblockchain-member-memberconfiguration-name
         */
        readonly name: string;
    }
    /**
     * Configuration properties relevant to a member for the blockchain framework that the Managed Blockchain network uses.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberframeworkconfiguration.html
     */
    interface MemberFrameworkConfigurationProperty {
        /**
         * Configuration properties for Hyperledger Fabric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberframeworkconfiguration.html#cfn-managedblockchain-member-memberframeworkconfiguration-memberfabricconfiguration
         */
        readonly memberFabricConfiguration?: cdk.IResolvable | CfnMember.MemberFabricConfigurationProperty;
    }
    /**
     * Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network that is using the Hyperledger Fabric framework.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberfabricconfiguration.html
     */
    interface MemberFabricConfigurationProperty {
        /**
         * The password for the member's initial administrative user.
         *
         * The `AdminPassword` must be at least 8 characters long and no more than 32 characters. It must contain at least one uppercase letter, one lowercase letter, and one digit. It cannot have a single quotation mark (‘), a double quotation marks (“), a forward slash(/), a backward slash(\), @, or a space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberfabricconfiguration.html#cfn-managedblockchain-member-memberfabricconfiguration-adminpassword
         */
        readonly adminPassword: string;
        /**
         * The user name for the member's initial administrative user.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-memberfabricconfiguration.html#cfn-managedblockchain-member-memberfabricconfiguration-adminusername
         */
        readonly adminUsername: string;
    }
    /**
     * Configuration properties of the network to which the member belongs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkconfiguration.html
     */
    interface NetworkConfigurationProperty {
        /**
         * Attributes of the blockchain framework for the network.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkconfiguration.html#cfn-managedblockchain-member-networkconfiguration-description
         */
        readonly description?: string;
        /**
         * The blockchain framework that the network uses.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkconfiguration.html#cfn-managedblockchain-member-networkconfiguration-framework
         */
        readonly framework: string;
        /**
         * The version of the blockchain framework that the network uses.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkconfiguration.html#cfn-managedblockchain-member-networkconfiguration-frameworkversion
         */
        readonly frameworkVersion: string;
        /**
         * The name of the network.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkconfiguration.html#cfn-managedblockchain-member-networkconfiguration-name
         */
        readonly name: string;
        /**
         * Configuration properties relevant to the network for the blockchain framework that the network uses.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkconfiguration.html#cfn-managedblockchain-member-networkconfiguration-networkframeworkconfiguration
         */
        readonly networkFrameworkConfiguration?: cdk.IResolvable | CfnMember.NetworkFrameworkConfigurationProperty;
        /**
         * The voting rules that the network uses to decide if a proposal is accepted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkconfiguration.html#cfn-managedblockchain-member-networkconfiguration-votingpolicy
         */
        readonly votingPolicy: cdk.IResolvable | CfnMember.VotingPolicyProperty;
    }
    /**
     * The voting rules for the network to decide if a proposal is accepted.
     *
     * Applies only to Hyperledger Fabric.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-votingpolicy.html
     */
    interface VotingPolicyProperty {
        /**
         * Defines the rules for the network for voting on proposals, such as the percentage of `YES` votes required for the proposal to be approved and the duration of the proposal.
         *
         * The policy applies to all proposals and is specified when the network is created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-votingpolicy.html#cfn-managedblockchain-member-votingpolicy-approvalthresholdpolicy
         */
        readonly approvalThresholdPolicy?: CfnMember.ApprovalThresholdPolicyProperty | cdk.IResolvable;
    }
    /**
     * A policy type that defines the voting rules for the network.
     *
     * The rules decide if a proposal is approved. Approval may be based on criteria such as the percentage of `YES` votes and the duration of the proposal. The policy applies to all proposals and is specified when the network is created.
     *
     * Applies only to Hyperledger Fabric.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-approvalthresholdpolicy.html
     */
    interface ApprovalThresholdPolicyProperty {
        /**
         * The duration from the time that a proposal is created until it expires.
         *
         * If members cast neither the required number of `YES` votes to approve the proposal nor the number of `NO` votes required to reject it before the duration expires, the proposal is `EXPIRED` and `ProposalActions` aren't carried out.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-approvalthresholdpolicy.html#cfn-managedblockchain-member-approvalthresholdpolicy-proposaldurationinhours
         */
        readonly proposalDurationInHours?: number;
        /**
         * Determines whether the vote percentage must be greater than the `ThresholdPercentage` or must be greater than or equal to the `ThresholdPercentage` to be approved.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-approvalthresholdpolicy.html#cfn-managedblockchain-member-approvalthresholdpolicy-thresholdcomparator
         */
        readonly thresholdComparator?: string;
        /**
         * The percentage of votes among all members that must be `YES` for a proposal to be approved.
         *
         * For example, a `ThresholdPercentage` value of `50` indicates 50%. The `ThresholdComparator` determines the precise comparison. If a `ThresholdPercentage` value of `50` is specified on a network with 10 members, along with a `ThresholdComparator` value of `GREATER_THAN` , this indicates that 6 `YES` votes are required for the proposal to be approved.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-approvalthresholdpolicy.html#cfn-managedblockchain-member-approvalthresholdpolicy-thresholdpercentage
         */
        readonly thresholdPercentage?: number;
    }
    /**
     * Configuration properties relevant to the network for the blockchain framework that the network uses.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkframeworkconfiguration.html
     */
    interface NetworkFrameworkConfigurationProperty {
        /**
         * Configuration properties for Hyperledger Fabric for a member in a Managed Blockchain network that is using the Hyperledger Fabric framework.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkframeworkconfiguration.html#cfn-managedblockchain-member-networkframeworkconfiguration-networkfabricconfiguration
         */
        readonly networkFabricConfiguration?: cdk.IResolvable | CfnMember.NetworkFabricConfigurationProperty;
    }
    /**
     * Hyperledger Fabric configuration properties for the network.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkfabricconfiguration.html
     */
    interface NetworkFabricConfigurationProperty {
        /**
         * The edition of Amazon Managed Blockchain that the network uses.
         *
         * Valid values are `standard` and `starter` . For more information, see [Amazon Managed Blockchain Pricing](https://docs.aws.amazon.com/managed-blockchain/pricing/)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-member-networkfabricconfiguration.html#cfn-managedblockchain-member-networkfabricconfiguration-edition
         */
        readonly edition: string;
    }
}
/**
 * Properties for defining a `CfnMember`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html
 */
export interface CfnMemberProps {
    /**
     * The unique identifier of the invitation to join the network sent to the account that creates the member.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-invitationid
     */
    readonly invitationId?: string;
    /**
     * Configuration properties of the member.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-memberconfiguration
     */
    readonly memberConfiguration: cdk.IResolvable | CfnMember.MemberConfigurationProperty;
    /**
     * Configuration properties of the network to which the member belongs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-networkconfiguration
     */
    readonly networkConfiguration?: cdk.IResolvable | CfnMember.NetworkConfigurationProperty;
    /**
     * The unique identifier of the network to which the member belongs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-member.html#cfn-managedblockchain-member-networkid
     */
    readonly networkId?: string;
}
/**
 * Creates a node on the specified blockchain network.
 *
 * Applies to Hyperledger Fabric and Ethereum.
 *
 * @cloudformationResource AWS::ManagedBlockchain::Node
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html
 */
export declare class CfnNode extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnNode from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnNode;
    /**
     * The Amazon Resource Name (ARN) of the node.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique identifier of the member in which the node is created. Applies only to Hyperledger Fabric.
     *
     * @cloudformationAttribute MemberId
     */
    readonly attrMemberId: string;
    /**
     * The unique identifier of the network that the node is in.
     *
     * @cloudformationAttribute NetworkId
     */
    readonly attrNetworkId: string;
    /**
     * The unique identifier of the node.
     *
     * @cloudformationAttribute NodeId
     */
    readonly attrNodeId: string;
    /**
     * The unique identifier of the member to which the node belongs.
     */
    memberId?: string;
    /**
     * The unique identifier of the network for the node.
     */
    networkId: string;
    /**
     * Configuration properties of a peer node.
     */
    nodeConfiguration: cdk.IResolvable | CfnNode.NodeConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnNodeProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnNode {
    /**
     * Configuration properties of a peer node within a membership.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-node-nodeconfiguration.html
     */
    interface NodeConfigurationProperty {
        /**
         * The Availability Zone in which the node exists.
         *
         * Required for Ethereum nodes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-node-nodeconfiguration.html#cfn-managedblockchain-node-nodeconfiguration-availabilityzone
         */
        readonly availabilityZone: string;
        /**
         * The Amazon Managed Blockchain instance type for the node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-managedblockchain-node-nodeconfiguration.html#cfn-managedblockchain-node-nodeconfiguration-instancetype
         */
        readonly instanceType: string;
    }
}
/**
 * Properties for defining a `CfnNode`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html
 */
export interface CfnNodeProps {
    /**
     * The unique identifier of the member to which the node belongs.
     *
     * Applies only to Hyperledger Fabric.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html#cfn-managedblockchain-node-memberid
     */
    readonly memberId?: string;
    /**
     * The unique identifier of the network for the node.
     *
     * Ethereum public networks have the following `NetworkId` s:
     *
     * - `n-ethereum-mainnet`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html#cfn-managedblockchain-node-networkid
     */
    readonly networkId: string;
    /**
     * Configuration properties of a peer node.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-managedblockchain-node.html#cfn-managedblockchain-node-nodeconfiguration
     */
    readonly nodeConfiguration: cdk.IResolvable | CfnNode.NodeConfigurationProperty;
}
