import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a profiling group.
 *
 * @cloudformationResource AWS::CodeGuruProfiler::ProfilingGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeguruprofiler-profilinggroup.html
 */
export declare class CfnProfilingGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnProfilingGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnProfilingGroup;
    /**
     * The full Amazon Resource Name (ARN) for that profiling group.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The agent permissions attached to this profiling group.
     */
    agentPermissions?: any | cdk.IResolvable;
    /**
     * Adds anomaly notifications for a profiling group.
     */
    anomalyDetectionNotificationConfiguration?: Array<CfnProfilingGroup.ChannelProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The compute platform of the profiling group.
     */
    computePlatform?: string;
    /**
     * The name of the profiling group.
     */
    profilingGroupName: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags to add to the created profiling group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnProfilingGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnProfilingGroup {
    /**
     * Notification medium for users to get alerted for events that occur in application profile.
     *
     * We support SNS topic as a notification channel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeguruprofiler-profilinggroup-channel.html
     */
    interface ChannelProperty {
        /**
         * The channel ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeguruprofiler-profilinggroup-channel.html#cfn-codeguruprofiler-profilinggroup-channel-channelid
         */
        readonly channelId?: string;
        /**
         * The channel URI.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeguruprofiler-profilinggroup-channel.html#cfn-codeguruprofiler-profilinggroup-channel-channeluri
         */
        readonly channelUri: string;
    }
    /**
     * The agent permissions attached to this profiling group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeguruprofiler-profilinggroup-agentpermissions.html
     */
    interface AgentPermissionsProperty {
        /**
         * The principals for the agent permissions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codeguruprofiler-profilinggroup-agentpermissions.html#cfn-codeguruprofiler-profilinggroup-agentpermissions-principals
         */
        readonly principals: Array<string>;
    }
}
/**
 * Properties for defining a `CfnProfilingGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeguruprofiler-profilinggroup.html
 */
export interface CfnProfilingGroupProps {
    /**
     * The agent permissions attached to this profiling group.
     *
     * This action group grants `ConfigureAgent` and `PostAgentProfile` permissions to perform actions required by the profiling agent. The Json consists of key `Principals` .
     *
     * *Principals* : A list of string ARNs for the roles and users you want to grant access to the profiling group. Wildcards are not supported in the ARNs. You are allowed to provide up to 50 ARNs. An empty list is not permitted. This is a required key.
     *
     * For more information, see [Resource-based policies in CodeGuru Profiler](https://docs.aws.amazon.com/codeguru/latest/profiler-ug/resource-based-policies.html) in the *Amazon CodeGuru Profiler user guide* , [ConfigureAgent](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html) , and [PostAgentProfile](https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_PostAgentProfile.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeguruprofiler-profilinggroup.html#cfn-codeguruprofiler-profilinggroup-agentpermissions
     */
    readonly agentPermissions?: any | cdk.IResolvable;
    /**
     * Adds anomaly notifications for a profiling group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeguruprofiler-profilinggroup.html#cfn-codeguruprofiler-profilinggroup-anomalydetectionnotificationconfiguration
     */
    readonly anomalyDetectionNotificationConfiguration?: Array<CfnProfilingGroup.ChannelProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The compute platform of the profiling group.
     *
     * Use `AWSLambda` if your application runs on AWS Lambda. Use `Default` if your application runs on a compute platform that is not AWS Lambda , such an Amazon EC2 instance, an on-premises server, or a different platform. If not specified, `Default` is used. This property is immutable.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeguruprofiler-profilinggroup.html#cfn-codeguruprofiler-profilinggroup-computeplatform
     */
    readonly computePlatform?: string;
    /**
     * The name of the profiling group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeguruprofiler-profilinggroup.html#cfn-codeguruprofiler-profilinggroup-profilinggroupname
     */
    readonly profilingGroupName: string;
    /**
     * A list of tags to add to the created profiling group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeguruprofiler-profilinggroup.html#cfn-codeguruprofiler-profilinggroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
