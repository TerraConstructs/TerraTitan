import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Contains information about an outbound campaign.
 *
 * @cloudformationResource AWS::ConnectCampaigns::Campaign
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html
 */
export declare class CfnCampaign extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCampaign from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCampaign;
    /**
     * The Amazon Resource Name (ARN) of the high-volume outbound campaign.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The Amazon Resource Name (ARN) of the Amazon Connect instance.
     */
    connectInstanceArn: string;
    /**
     * Contains information about the dialer configuration.
     */
    dialerConfig: CfnCampaign.DialerConfigProperty | cdk.IResolvable;
    /**
     * The name of the campaign.
     */
    name: string;
    /**
     * Contains information about the outbound call configuration.
     */
    outboundCallConfig: cdk.IResolvable | CfnCampaign.OutboundCallConfigProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags used to organize, track, or control access for this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCampaignProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCampaign {
    /**
     * Contains outbound call configuration for an outbound campaign.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-outboundcallconfig.html
     */
    interface OutboundCallConfigProperty {
        /**
         * Whether answering machine detection has been enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-outboundcallconfig.html#cfn-connectcampaigns-campaign-outboundcallconfig-answermachinedetectionconfig
         */
        readonly answerMachineDetectionConfig?: CfnCampaign.AnswerMachineDetectionConfigProperty | cdk.IResolvable;
        /**
         * The Amazon Resource Name (ARN) of the flow.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-outboundcallconfig.html#cfn-connectcampaigns-campaign-outboundcallconfig-connectcontactflowarn
         */
        readonly connectContactFlowArn: string;
        /**
         * The Amazon Resource Name (ARN) of the queue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-outboundcallconfig.html#cfn-connectcampaigns-campaign-outboundcallconfig-connectqueuearn
         */
        readonly connectQueueArn?: string;
        /**
         * The phone number associated with the outbound call.
         *
         * This is the caller ID that is displayed to customers when an agent calls them.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-outboundcallconfig.html#cfn-connectcampaigns-campaign-outboundcallconfig-connectsourcephonenumber
         */
        readonly connectSourcePhoneNumber?: string;
    }
    /**
     * Contains information about answering machine detection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-answermachinedetectionconfig.html
     */
    interface AnswerMachineDetectionConfigProperty {
        /**
         * Whether waiting for answer machine prompt is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-answermachinedetectionconfig.html#cfn-connectcampaigns-campaign-answermachinedetectionconfig-awaitanswermachineprompt
         */
        readonly awaitAnswerMachinePrompt?: boolean | cdk.IResolvable;
        /**
         * Whether answering machine detection is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-answermachinedetectionconfig.html#cfn-connectcampaigns-campaign-answermachinedetectionconfig-enableanswermachinedetection
         */
        readonly enableAnswerMachineDetection: boolean | cdk.IResolvable;
    }
    /**
     * Contains dialer configuration for an outbound campaign.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-dialerconfig.html
     */
    interface DialerConfigProperty {
        /**
         * The configuration of the agentless dialer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-dialerconfig.html#cfn-connectcampaigns-campaign-dialerconfig-agentlessdialerconfig
         */
        readonly agentlessDialerConfig?: CfnCampaign.AgentlessDialerConfigProperty | cdk.IResolvable;
        /**
         * The configuration of the predictive dialer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-dialerconfig.html#cfn-connectcampaigns-campaign-dialerconfig-predictivedialerconfig
         */
        readonly predictiveDialerConfig?: cdk.IResolvable | CfnCampaign.PredictiveDialerConfigProperty;
        /**
         * The configuration of the progressive dialer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-dialerconfig.html#cfn-connectcampaigns-campaign-dialerconfig-progressivedialerconfig
         */
        readonly progressiveDialerConfig?: cdk.IResolvable | CfnCampaign.ProgressiveDialerConfigProperty;
    }
    /**
     * Contains agentless dialer configuration for an outbound campaign.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-agentlessdialerconfig.html
     */
    interface AgentlessDialerConfigProperty {
        /**
         * The allocation of dialing capacity between multiple active campaigns.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-agentlessdialerconfig.html#cfn-connectcampaigns-campaign-agentlessdialerconfig-dialingcapacity
         */
        readonly dialingCapacity?: number;
    }
    /**
     * Contains predictive dialer configuration for an outbound campaign.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-predictivedialerconfig.html
     */
    interface PredictiveDialerConfigProperty {
        /**
         * Bandwidth allocation for the predictive dialer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-predictivedialerconfig.html#cfn-connectcampaigns-campaign-predictivedialerconfig-bandwidthallocation
         */
        readonly bandwidthAllocation: number;
        /**
         * The allocation of dialing capacity between multiple active campaigns.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-predictivedialerconfig.html#cfn-connectcampaigns-campaign-predictivedialerconfig-dialingcapacity
         */
        readonly dialingCapacity?: number;
    }
    /**
     * Contains progressive dialer configuration for an outbound campaign.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-progressivedialerconfig.html
     */
    interface ProgressiveDialerConfigProperty {
        /**
         * Bandwidth allocation for the progressive dialer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-progressivedialerconfig.html#cfn-connectcampaigns-campaign-progressivedialerconfig-bandwidthallocation
         */
        readonly bandwidthAllocation: number;
        /**
         * The allocation of dialing capacity between multiple active campaigns.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-connectcampaigns-campaign-progressivedialerconfig.html#cfn-connectcampaigns-campaign-progressivedialerconfig-dialingcapacity
         */
        readonly dialingCapacity?: number;
    }
}
/**
 * Properties for defining a `CfnCampaign`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html
 */
export interface CfnCampaignProps {
    /**
     * The Amazon Resource Name (ARN) of the Amazon Connect instance.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-connectinstancearn
     */
    readonly connectInstanceArn: string;
    /**
     * Contains information about the dialer configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-dialerconfig
     */
    readonly dialerConfig: CfnCampaign.DialerConfigProperty | cdk.IResolvable;
    /**
     * The name of the campaign.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-name
     */
    readonly name: string;
    /**
     * Contains information about the outbound call configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-outboundcallconfig
     */
    readonly outboundCallConfig: cdk.IResolvable | CfnCampaign.OutboundCallConfigProperty;
    /**
     * The tags used to organize, track, or control access for this resource.
     *
     * For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connectcampaigns-campaign.html#cfn-connectcampaigns-campaign-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
