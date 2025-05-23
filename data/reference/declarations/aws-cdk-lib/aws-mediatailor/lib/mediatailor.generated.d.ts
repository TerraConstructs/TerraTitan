import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The configuration parameters for a channel.
 *
 * For information about MediaTailor channels, see [Working with channels](https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-channels.html) in the *MediaTailor User Guide* .
 *
 * @cloudformationResource AWS::MediaTailor::Channel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html
 */
export declare class CfnChannel extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnChannel from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnChannel;
    /**
     * <p>The ARN of the channel.</p>
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The list of audiences defined in channel.
     */
    audiences?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The name of the channel.
     */
    channelName: string;
    /**
     * The slate used to fill gaps between programs in the schedule.
     */
    fillerSlate?: cdk.IResolvable | CfnChannel.SlateSourceProperty;
    /**
     * The log configuration.
     */
    logConfiguration?: cdk.IResolvable | CfnChannel.LogConfigurationForChannelProperty;
    /**
     * The channel's output properties.
     */
    outputs: Array<cdk.IResolvable | CfnChannel.RequestOutputItemProperty> | cdk.IResolvable;
    /**
     * The type of playback mode for this channel.
     */
    playbackMode: string;
    /**
     * The tags to assign to the channel.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The tier for this channel.
     */
    tier?: string;
    /**
     * The configuration for time-shifted viewing.
     */
    timeShiftConfiguration?: cdk.IResolvable | CfnChannel.TimeShiftConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnChannelProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnChannel {
    /**
     * Slate VOD source configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-slatesource.html
     */
    interface SlateSourceProperty {
        /**
         * The name of the source location where the slate VOD source is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-slatesource.html#cfn-mediatailor-channel-slatesource-sourcelocationname
         */
        readonly sourceLocationName?: string;
        /**
         * The slate VOD source name.
         *
         * The VOD source must already exist in a source location before it can be used for slate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-slatesource.html#cfn-mediatailor-channel-slatesource-vodsourcename
         */
        readonly vodSourceName?: string;
    }
    /**
     * The output configuration for this channel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-requestoutputitem.html
     */
    interface RequestOutputItemProperty {
        /**
         * DASH manifest configuration parameters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-requestoutputitem.html#cfn-mediatailor-channel-requestoutputitem-dashplaylistsettings
         */
        readonly dashPlaylistSettings?: CfnChannel.DashPlaylistSettingsProperty | cdk.IResolvable;
        /**
         * HLS playlist configuration parameters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-requestoutputitem.html#cfn-mediatailor-channel-requestoutputitem-hlsplaylistsettings
         */
        readonly hlsPlaylistSettings?: CfnChannel.HlsPlaylistSettingsProperty | cdk.IResolvable;
        /**
         * The name of the manifest for the channel.
         *
         * The name appears in the `PlaybackUrl` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-requestoutputitem.html#cfn-mediatailor-channel-requestoutputitem-manifestname
         */
        readonly manifestName: string;
        /**
         * A string used to match which `HttpPackageConfiguration` is used for each `VodSource` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-requestoutputitem.html#cfn-mediatailor-channel-requestoutputitem-sourcegroup
         */
        readonly sourceGroup: string;
    }
    /**
     * Dash manifest configuration parameters.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-dashplaylistsettings.html
     */
    interface DashPlaylistSettingsProperty {
        /**
         * The total duration (in seconds) of each manifest.
         *
         * Minimum value: `30` seconds. Maximum value: `3600` seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-dashplaylistsettings.html#cfn-mediatailor-channel-dashplaylistsettings-manifestwindowseconds
         */
        readonly manifestWindowSeconds?: number;
        /**
         * Minimum amount of content (measured in seconds) that a player must keep available in the buffer.
         *
         * Minimum value: `2` seconds. Maximum value: `60` seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-dashplaylistsettings.html#cfn-mediatailor-channel-dashplaylistsettings-minbuffertimeseconds
         */
        readonly minBufferTimeSeconds?: number;
        /**
         * Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.
         *
         * Minimum value: `2` seconds. Maximum value: `60` seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-dashplaylistsettings.html#cfn-mediatailor-channel-dashplaylistsettings-minupdateperiodseconds
         */
        readonly minUpdatePeriodSeconds?: number;
        /**
         * Amount of time (in seconds) that the player should be from the live point at the end of the manifest.
         *
         * Minimum value: `2` seconds. Maximum value: `60` seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-dashplaylistsettings.html#cfn-mediatailor-channel-dashplaylistsettings-suggestedpresentationdelayseconds
         */
        readonly suggestedPresentationDelaySeconds?: number;
    }
    /**
     * HLS playlist configuration parameters.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-hlsplaylistsettings.html
     */
    interface HlsPlaylistSettingsProperty {
        /**
         * Determines the type of SCTE 35 tags to use in ad markup.
         *
         * Specify `DATERANGE` to use `DATERANGE` tags (for live or VOD content). Specify `SCTE35_ENHANCED` to use `EXT-X-CUE-OUT` and `EXT-X-CUE-IN` tags (for VOD content only).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-hlsplaylistsettings.html#cfn-mediatailor-channel-hlsplaylistsettings-admarkuptype
         */
        readonly adMarkupType?: Array<string>;
        /**
         * The total duration (in seconds) of each manifest.
         *
         * Minimum value: `30` seconds. Maximum value: `3600` seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-hlsplaylistsettings.html#cfn-mediatailor-channel-hlsplaylistsettings-manifestwindowseconds
         */
        readonly manifestWindowSeconds?: number;
    }
    /**
     * The log configuration for the channel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-logconfigurationforchannel.html
     */
    interface LogConfigurationForChannelProperty {
        /**
         * The log types.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-logconfigurationforchannel.html#cfn-mediatailor-channel-logconfigurationforchannel-logtypes
         */
        readonly logTypes?: Array<string>;
    }
    /**
     * The configuration for time-shifted viewing.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-timeshiftconfiguration.html
     */
    interface TimeShiftConfigurationProperty {
        /**
         * The maximum time delay for time-shifted viewing.
         *
         * The minimum allowed maximum time delay is 0 seconds, and the maximum allowed maximum time delay is 21600 seconds (6 hours).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-channel-timeshiftconfiguration.html#cfn-mediatailor-channel-timeshiftconfiguration-maxtimedelayseconds
         */
        readonly maxTimeDelaySeconds: number;
    }
}
/**
 * Properties for defining a `CfnChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html
 */
export interface CfnChannelProps {
    /**
     * The list of audiences defined in channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-audiences
     */
    readonly audiences?: Array<string>;
    /**
     * The name of the channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-channelname
     */
    readonly channelName: string;
    /**
     * The slate used to fill gaps between programs in the schedule.
     *
     * You must configure filler slate if your channel uses the `LINEAR` `PlaybackMode` . MediaTailor doesn't support filler slate for channels using the `LOOP` `PlaybackMode` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-fillerslate
     */
    readonly fillerSlate?: cdk.IResolvable | CfnChannel.SlateSourceProperty;
    /**
     * The log configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-logconfiguration
     */
    readonly logConfiguration?: cdk.IResolvable | CfnChannel.LogConfigurationForChannelProperty;
    /**
     * The channel's output properties.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-outputs
     */
    readonly outputs: Array<cdk.IResolvable | CfnChannel.RequestOutputItemProperty> | cdk.IResolvable;
    /**
     * The type of playback mode for this channel.
     *
     * `LINEAR` - Programs play back-to-back only once.
     *
     * `LOOP` - Programs play back-to-back in an endless loop. When the last program in the schedule plays, playback loops back to the first program in the schedule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-playbackmode
     */
    readonly playbackMode: string;
    /**
     * The tags to assign to the channel.
     *
     * Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The tier for this channel.
     *
     * STANDARD tier channels can contain live programs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-tier
     */
    readonly tier?: string;
    /**
     * The configuration for time-shifted viewing.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channel.html#cfn-mediatailor-channel-timeshiftconfiguration
     */
    readonly timeShiftConfiguration?: cdk.IResolvable | CfnChannel.TimeShiftConfigurationProperty;
}
/**
 * Specifies an IAM policy for the channel.
 *
 * IAM policies are used to control access to your channel.
 *
 * @cloudformationResource AWS::MediaTailor::ChannelPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channelpolicy.html
 */
export declare class CfnChannelPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnChannelPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnChannelPolicy;
    /**
     * The name of the channel associated with this Channel Policy.
     */
    channelName: string;
    /**
     * The IAM policy for the channel.
     */
    policy: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnChannelPolicyProps);
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
 * Properties for defining a `CfnChannelPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channelpolicy.html
 */
export interface CfnChannelPolicyProps {
    /**
     * The name of the channel associated with this Channel Policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channelpolicy.html#cfn-mediatailor-channelpolicy-channelname
     */
    readonly channelName: string;
    /**
     * The IAM policy for the channel.
     *
     * IAM policies are used to control access to your channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-channelpolicy.html#cfn-mediatailor-channelpolicy-policy
     */
    readonly policy: any | cdk.IResolvable;
}
/**
 * Live source configuration parameters.
 *
 * @cloudformationResource AWS::MediaTailor::LiveSource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-livesource.html
 */
export declare class CfnLiveSource extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnLiveSource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnLiveSource;
    /**
     * <p>The ARN of the live source.</p>
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The HTTP package configurations for the live source.
     */
    httpPackageConfigurations: Array<CfnLiveSource.HttpPackageConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name that's used to refer to a live source.
     */
    liveSourceName: string;
    /**
     * The name of the source location.
     */
    sourceLocationName: string;
    /**
     * The tags assigned to the live source.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnLiveSourceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnLiveSource {
    /**
     * The HTTP package configuration properties for the requested VOD source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-livesource-httppackageconfiguration.html
     */
    interface HttpPackageConfigurationProperty {
        /**
         * The relative path to the URL for this VOD source.
         *
         * This is combined with `SourceLocation::HttpConfiguration::BaseUrl` to form a valid URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-livesource-httppackageconfiguration.html#cfn-mediatailor-livesource-httppackageconfiguration-path
         */
        readonly path: string;
        /**
         * The name of the source group.
         *
         * This has to match one of the `Channel::Outputs::SourceGroup` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-livesource-httppackageconfiguration.html#cfn-mediatailor-livesource-httppackageconfiguration-sourcegroup
         */
        readonly sourceGroup: string;
        /**
         * The streaming protocol for this package configuration.
         *
         * Supported values are `HLS` and `DASH` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-livesource-httppackageconfiguration.html#cfn-mediatailor-livesource-httppackageconfiguration-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnLiveSource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-livesource.html
 */
export interface CfnLiveSourceProps {
    /**
     * The HTTP package configurations for the live source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-livesource.html#cfn-mediatailor-livesource-httppackageconfigurations
     */
    readonly httpPackageConfigurations: Array<CfnLiveSource.HttpPackageConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name that's used to refer to a live source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-livesource.html#cfn-mediatailor-livesource-livesourcename
     */
    readonly liveSourceName: string;
    /**
     * The name of the source location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-livesource.html#cfn-mediatailor-livesource-sourcelocationname
     */
    readonly sourceLocationName: string;
    /**
     * The tags assigned to the live source.
     *
     * Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-livesource.html#cfn-mediatailor-livesource-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Adds a new playback configuration to AWS Elemental MediaTailor .
 *
 * @cloudformationResource AWS::MediaTailor::PlaybackConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html
 */
export declare class CfnPlaybackConfiguration extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPlaybackConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPlaybackConfiguration;
    /**
     * The URL generated by MediaTailor to initiate a playback session. The session uses server-side reporting. This setting is ignored in PUT operations.
     *
     * @cloudformationAttribute DashConfiguration.ManifestEndpointPrefix
     */
    readonly attrDashConfigurationManifestEndpointPrefix: string;
    /**
     * The URL that is used to initiate a playback session for devices that support Apple HLS. The session uses server-side reporting.
     *
     * @cloudformationAttribute HlsConfiguration.ManifestEndpointPrefix
     */
    readonly attrHlsConfigurationManifestEndpointPrefix: string;
    /**
     * The Amazon Resource Name (ARN) for the playback configuration.
     *
     * @cloudformationAttribute PlaybackConfigurationArn
     */
    readonly attrPlaybackConfigurationArn: string;
    /**
     * The URL that the player accesses to get a manifest from MediaTailor . This session will use server-side reporting.
     *
     * @cloudformationAttribute PlaybackEndpointPrefix
     */
    readonly attrPlaybackEndpointPrefix: string;
    /**
     * The URL that the player uses to initialize a session that uses client-side reporting.
     *
     * @cloudformationAttribute SessionInitializationEndpointPrefix
     */
    readonly attrSessionInitializationEndpointPrefix: string;
    /**
     * The URL for the ad decision server (ADS).
     */
    adDecisionServerUrl: string;
    /**
     * The configuration for avail suppression, also known as ad suppression.
     */
    availSuppression?: CfnPlaybackConfiguration.AvailSuppressionProperty | cdk.IResolvable;
    /**
     * The configuration for bumpers.
     */
    bumper?: CfnPlaybackConfiguration.BumperProperty | cdk.IResolvable;
    /**
     * The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.
     */
    cdnConfiguration?: CfnPlaybackConfiguration.CdnConfigurationProperty | cdk.IResolvable;
    /**
     * The player parameters and aliases used as dynamic variables during session initialization.
     */
    configurationAliases?: cdk.IResolvable | Record<string, any | cdk.IResolvable>;
    /**
     * The configuration for a DASH source.
     */
    dashConfiguration?: CfnPlaybackConfiguration.DashConfigurationProperty | cdk.IResolvable;
    /**
     * The configuration for HLS content.
     */
    hlsConfiguration?: CfnPlaybackConfiguration.HlsConfigurationProperty | cdk.IResolvable;
    /**
     * The configuration for pre-roll ad insertion.
     */
    livePreRollConfiguration?: cdk.IResolvable | CfnPlaybackConfiguration.LivePreRollConfigurationProperty;
    /**
     * The configuration for manifest processing rules.
     */
    manifestProcessingRules?: cdk.IResolvable | CfnPlaybackConfiguration.ManifestProcessingRulesProperty;
    /**
     * The identifier for the playback configuration.
     */
    name: string;
    /**
     * Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break.
     */
    personalizationThresholdSeconds?: number;
    /**
     * The URL for a video asset to transcode and use to fill in time that's not used by ads.
     */
    slateAdUrl?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags to assign to the playback configuration.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The name that is used to associate this playback configuration with a custom transcode profile.
     */
    transcodeProfileName?: string;
    /**
     * The URL prefix for the parent manifest for the stream, minus the asset ID.
     */
    videoContentSourceUrl: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPlaybackConfigurationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnPlaybackConfiguration {
    /**
     * The configuration for bumpers.
     *
     * Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see [Bumpers](https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-bumper.html
     */
    interface BumperProperty {
        /**
         * The URL for the end bumper asset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-bumper.html#cfn-mediatailor-playbackconfiguration-bumper-endurl
         */
        readonly endUrl?: string;
        /**
         * The URL for the start bumper asset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-bumper.html#cfn-mediatailor-playbackconfiguration-bumper-starturl
         */
        readonly startUrl?: string;
    }
    /**
     * The configuration for DASH content.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-dashconfiguration.html
     */
    interface DashConfigurationProperty {
        /**
         * The URL generated by MediaTailor to initiate a playback session.
         *
         * The session uses server-side reporting. This setting is ignored in PUT operations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-dashconfiguration.html#cfn-mediatailor-playbackconfiguration-dashconfiguration-manifestendpointprefix
         */
        readonly manifestEndpointPrefix?: string;
        /**
         * The setting that controls whether MediaTailor includes the Location tag in DASH manifests.
         *
         * MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are `DISABLED` and `EMT_DEFAULT` . The `EMT_DEFAULT` setting enables the inclusion of the tag and is the default value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-dashconfiguration.html#cfn-mediatailor-playbackconfiguration-dashconfiguration-mpdlocation
         */
        readonly mpdLocation?: string;
        /**
         * The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests.
         *
         * If your origin server produces single-period manifests, set this to `SINGLE_PERIOD` . The default setting is `MULTI_PERIOD` . For multi-period manifests, omit this setting or set it to `MULTI_PERIOD` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-dashconfiguration.html#cfn-mediatailor-playbackconfiguration-dashconfiguration-originmanifesttype
         */
        readonly originManifestType?: string;
    }
    /**
     * The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-cdnconfiguration.html
     */
    interface CdnConfigurationProperty {
        /**
         * A non-default content delivery network (CDN) to serve ad segments.
         *
         * By default, AWS Elemental MediaTailor uses Amazon CloudFront with default cache settings as its CDN for ad segments. To set up an alternate CDN, create a rule in your CDN for the origin ads.mediatailor. *<region>* .amazonaws.com. Then specify the rule's name in this `AdSegmentUrlPrefix` . When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for ad segments.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-cdnconfiguration.html#cfn-mediatailor-playbackconfiguration-cdnconfiguration-adsegmenturlprefix
         */
        readonly adSegmentUrlPrefix?: string;
        /**
         * A content delivery network (CDN) to cache content segments, so that content requests don’t always have to go to the origin server.
         *
         * First, create a rule in your CDN for the content segment origin server. Then specify the rule's name in this `ContentSegmentUrlPrefix` . When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for content segments.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-cdnconfiguration.html#cfn-mediatailor-playbackconfiguration-cdnconfiguration-contentsegmenturlprefix
         */
        readonly contentSegmentUrlPrefix?: string;
    }
    /**
     * The configuration for manifest processing rules.
     *
     * Manifest processing rules enable customization of the personalized manifests created by MediaTailor.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-manifestprocessingrules.html
     */
    interface ManifestProcessingRulesProperty {
        /**
         * For HLS, when set to `true` , MediaTailor passes through `EXT-X-CUE-IN` , `EXT-X-CUE-OUT` , and `EXT-X-SPLICEPOINT-SCTE35` ad markers from the origin manifest to the MediaTailor personalized manifest.
         *
         * No logic is applied to these ad markers. For example, if `EXT-X-CUE-OUT` has a value of `60` , but no ads are filled for that ad break, MediaTailor will not set the value to `0` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-manifestprocessingrules.html#cfn-mediatailor-playbackconfiguration-manifestprocessingrules-admarkerpassthrough
         */
        readonly adMarkerPassthrough?: CfnPlaybackConfiguration.AdMarkerPassthroughProperty | cdk.IResolvable;
    }
    /**
     * For HLS, when set to `true` , MediaTailor passes through `EXT-X-CUE-IN` , `EXT-X-CUE-OUT` , and `EXT-X-SPLICEPOINT-SCTE35` ad markers from the origin manifest to the MediaTailor personalized manifest.
     *
     * No logic is applied to these ad markers. For example, if `EXT-X-CUE-OUT` has a value of `60` , but no ads are filled for that ad break, MediaTailor will not set the value to `0` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-admarkerpassthrough.html
     */
    interface AdMarkerPassthroughProperty {
        /**
         * Enables ad marker passthrough for your configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-admarkerpassthrough.html#cfn-mediatailor-playbackconfiguration-admarkerpassthrough-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
    /**
     * The configuration for pre-roll ad insertion.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-liveprerollconfiguration.html
     */
    interface LivePreRollConfigurationProperty {
        /**
         * The URL for the ad decision server (ADS) for pre-roll ads.
         *
         * This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-liveprerollconfiguration.html#cfn-mediatailor-playbackconfiguration-liveprerollconfiguration-addecisionserverurl
         */
        readonly adDecisionServerUrl?: string;
        /**
         * The maximum allowed duration for the pre-roll ad avail.
         *
         * AWS Elemental MediaTailor won't play pre-roll ads to exceed this duration, regardless of the total duration of ads that the ADS returns.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-liveprerollconfiguration.html#cfn-mediatailor-playbackconfiguration-liveprerollconfiguration-maxdurationseconds
         */
        readonly maxDurationSeconds?: number;
    }
    /**
     * The configuration for HLS content.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-hlsconfiguration.html
     */
    interface HlsConfigurationProperty {
        /**
         * The URL that is used to initiate a playback session for devices that support Apple HLS.
         *
         * The session uses server-side reporting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-hlsconfiguration.html#cfn-mediatailor-playbackconfiguration-hlsconfiguration-manifestendpointprefix
         */
        readonly manifestEndpointPrefix?: string;
    }
    /**
     * The configuration for avail suppression, also known as ad suppression.
     *
     * For more information about ad suppression, see [Ad Suppression](https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-availsuppression.html
     */
    interface AvailSuppressionProperty {
        /**
         * Defines the policy to apply to the avail suppression mode.
         *
         * `BEHIND_LIVE_EDGE` will always use the full avail suppression policy. `AFTER_LIVE_EDGE` mode can be used to invoke partial ad break fills when a session starts mid-break.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-availsuppression.html#cfn-mediatailor-playbackconfiguration-availsuppression-fillpolicy
         */
        readonly fillPolicy?: string;
        /**
         * Sets the ad suppression mode.
         *
         * By default, ad suppression is off and all ad breaks are filled with ads or slate. When Mode is set to `BEHIND_LIVE_EDGE` , ad suppression is active and MediaTailor won't fill ad breaks on or behind the ad suppression Value time in the manifest lookback window. When Mode is set to `AFTER_LIVE_EDGE` , ad suppression is active and MediaTailor won't fill ad breaks that are within the live edge plus the avail suppression value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-availsuppression.html#cfn-mediatailor-playbackconfiguration-availsuppression-mode
         */
        readonly mode?: string;
        /**
         * A live edge offset time in HH:MM:SS.
         *
         * MediaTailor won't fill ad breaks on or behind this time in the manifest lookback window. If Value is set to 00:00:00, it is in sync with the live edge, and MediaTailor won't fill any ad breaks on or behind the live edge. If you set a Value time, MediaTailor won't fill any ad breaks on or behind this time in the manifest lookback window. For example, if you set 00:45:00, then MediaTailor will fill ad breaks that occur within 45 minutes behind the live edge, but won't fill ad breaks on or behind 45 minutes behind the live edge.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-playbackconfiguration-availsuppression.html#cfn-mediatailor-playbackconfiguration-availsuppression-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnPlaybackConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html
 */
export interface CfnPlaybackConfigurationProps {
    /**
     * The URL for the ad decision server (ADS).
     *
     * This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html#cfn-mediatailor-playbackconfiguration-addecisionserverurl
     */
    readonly adDecisionServerUrl: string;
    /**
     * The configuration for avail suppression, also known as ad suppression.
     *
     * For more information about ad suppression, see [Ad Suppression](https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html#cfn-mediatailor-playbackconfiguration-availsuppression
     */
    readonly availSuppression?: CfnPlaybackConfiguration.AvailSuppressionProperty | cdk.IResolvable;
    /**
     * The configuration for bumpers.
     *
     * Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see [Bumpers](https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html#cfn-mediatailor-playbackconfiguration-bumper
     */
    readonly bumper?: CfnPlaybackConfiguration.BumperProperty | cdk.IResolvable;
    /**
     * The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html#cfn-mediatailor-playbackconfiguration-cdnconfiguration
     */
    readonly cdnConfiguration?: CfnPlaybackConfiguration.CdnConfigurationProperty | cdk.IResolvable;
    /**
     * The player parameters and aliases used as dynamic variables during session initialization.
     *
     * For more information, see [Domain Variables](https://docs.aws.amazon.com/mediatailor/latest/ug/variables-domain.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html#cfn-mediatailor-playbackconfiguration-configurationaliases
     */
    readonly configurationAliases?: cdk.IResolvable | Record<string, any | cdk.IResolvable>;
    /**
     * The configuration for a DASH source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html#cfn-mediatailor-playbackconfiguration-dashconfiguration
     */
    readonly dashConfiguration?: CfnPlaybackConfiguration.DashConfigurationProperty | cdk.IResolvable;
    /**
     * The configuration for HLS content.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html#cfn-mediatailor-playbackconfiguration-hlsconfiguration
     */
    readonly hlsConfiguration?: CfnPlaybackConfiguration.HlsConfigurationProperty | cdk.IResolvable;
    /**
     * The configuration for pre-roll ad insertion.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html#cfn-mediatailor-playbackconfiguration-liveprerollconfiguration
     */
    readonly livePreRollConfiguration?: cdk.IResolvable | CfnPlaybackConfiguration.LivePreRollConfigurationProperty;
    /**
     * The configuration for manifest processing rules.
     *
     * Manifest processing rules enable customization of the personalized manifests created by MediaTailor.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html#cfn-mediatailor-playbackconfiguration-manifestprocessingrules
     */
    readonly manifestProcessingRules?: cdk.IResolvable | CfnPlaybackConfiguration.ManifestProcessingRulesProperty;
    /**
     * The identifier for the playback configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html#cfn-mediatailor-playbackconfiguration-name
     */
    readonly name: string;
    /**
     * Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break.
     *
     * If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to *ad replacement* in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see [Ad Behavior in AWS Elemental MediaTailor](https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html#cfn-mediatailor-playbackconfiguration-personalizationthresholdseconds
     */
    readonly personalizationThresholdSeconds?: number;
    /**
     * The URL for a video asset to transcode and use to fill in time that's not used by ads.
     *
     * AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID playback configurations. For VPAID, the slate is required because MediaTailor provides it in the slots designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html#cfn-mediatailor-playbackconfiguration-slateadurl
     */
    readonly slateAdUrl?: string;
    /**
     * The tags to assign to the playback configuration.
     *
     * Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html#cfn-mediatailor-playbackconfiguration-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name that is used to associate this playback configuration with a custom transcode profile.
     *
     * This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html#cfn-mediatailor-playbackconfiguration-transcodeprofilename
     */
    readonly transcodeProfileName?: string;
    /**
     * The URL prefix for the parent manifest for the stream, minus the asset ID.
     *
     * The maximum length is 512 characters.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-playbackconfiguration.html#cfn-mediatailor-playbackconfiguration-videocontentsourceurl
     */
    readonly videoContentSourceUrl: string;
}
/**
 * A source location is a container for sources.
 *
 * For more information about source locations, see [Working with source locations](https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-source-locations.html) in the *MediaTailor User Guide* .
 *
 * @cloudformationResource AWS::MediaTailor::SourceLocation
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-sourcelocation.html
 */
export declare class CfnSourceLocation extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSourceLocation from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSourceLocation;
    /**
     * <p>The ARN of the source location.</p>
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The access configuration for the source location.
     */
    accessConfiguration?: CfnSourceLocation.AccessConfigurationProperty | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The default segment delivery configuration.
     */
    defaultSegmentDeliveryConfiguration?: CfnSourceLocation.DefaultSegmentDeliveryConfigurationProperty | cdk.IResolvable;
    /**
     * The HTTP configuration for the source location.
     */
    httpConfiguration: CfnSourceLocation.HttpConfigurationProperty | cdk.IResolvable;
    /**
     * The segment delivery configurations for the source location.
     */
    segmentDeliveryConfigurations?: Array<cdk.IResolvable | CfnSourceLocation.SegmentDeliveryConfigurationProperty> | cdk.IResolvable;
    /**
     * The name of the source location.
     */
    sourceLocationName: string;
    /**
     * The tags assigned to the source location.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSourceLocationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSourceLocation {
    /**
     * The optional configuration for a server that serves segments.
     *
     * Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-defaultsegmentdeliveryconfiguration.html
     */
    interface DefaultSegmentDeliveryConfigurationProperty {
        /**
         * The hostname of the server that will be used to serve segments.
         *
         * This string must include the protocol, such as *https://* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-defaultsegmentdeliveryconfiguration.html#cfn-mediatailor-sourcelocation-defaultsegmentdeliveryconfiguration-baseurl
         */
        readonly baseUrl?: string;
    }
    /**
     * The segment delivery configuration settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-segmentdeliveryconfiguration.html
     */
    interface SegmentDeliveryConfigurationProperty {
        /**
         * The base URL of the host or path of the segment delivery server that you're using to serve segments.
         *
         * This is typically a content delivery network (CDN). The URL can be absolute or relative. To use an absolute URL include the protocol, such as `https://example.com/some/path` . To use a relative URL specify the relative path, such as `/some/path*` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-segmentdeliveryconfiguration.html#cfn-mediatailor-sourcelocation-segmentdeliveryconfiguration-baseurl
         */
        readonly baseUrl?: string;
        /**
         * A unique identifier used to distinguish between multiple segment delivery configurations in a source location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-segmentdeliveryconfiguration.html#cfn-mediatailor-sourcelocation-segmentdeliveryconfiguration-name
         */
        readonly name?: string;
    }
    /**
     * The HTTP configuration for the source location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-httpconfiguration.html
     */
    interface HttpConfigurationProperty {
        /**
         * The base URL for the source location host server.
         *
         * This string must include the protocol, such as *https://* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-httpconfiguration.html#cfn-mediatailor-sourcelocation-httpconfiguration-baseurl
         */
        readonly baseUrl: string;
    }
    /**
     * Access configuration parameters.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-accessconfiguration.html
     */
    interface AccessConfigurationProperty {
        /**
         * The type of authentication used to access content from `HttpConfiguration::BaseUrl` on your source location. Accepted value: `S3_SIGV4` .
         *
         * `S3_SIGV4` - AWS Signature Version 4 authentication for Amazon S3 hosted virtual-style access. If your source location base URL is an Amazon S3 bucket, MediaTailor can use AWS Signature Version 4 (SigV4) authentication to access the bucket where your source content is stored. Your MediaTailor source location baseURL must follow the S3 virtual hosted-style request URL format. For example, https://bucket-name.s3.Region.amazonaws.com/key-name.
         *
         * Before you can use `S3_SIGV4` , you must meet these requirements:
         *
         * • You must allow MediaTailor to access your S3 bucket by granting mediatailor.amazonaws.com principal access in IAM. For information about configuring access in IAM, see Access management in the IAM User Guide.
         *
         * • The mediatailor.amazonaws.com service principal must have permissions to read all top level manifests referenced by the VodSource packaging configurations.
         *
         * • The caller of the API must have s3:GetObject IAM permissions to read all top level manifests referenced by your MediaTailor VodSource packaging configurations.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-accessconfiguration.html#cfn-mediatailor-sourcelocation-accessconfiguration-accesstype
         */
        readonly accessType?: string;
        /**
         * AWS Secrets Manager access token configuration parameters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-accessconfiguration.html#cfn-mediatailor-sourcelocation-accessconfiguration-secretsmanageraccesstokenconfiguration
         */
        readonly secretsManagerAccessTokenConfiguration?: cdk.IResolvable | CfnSourceLocation.SecretsManagerAccessTokenConfigurationProperty;
    }
    /**
     * AWS Secrets Manager access token configuration parameters.
     *
     * For information about Secrets Manager access token authentication, see [Working with AWS Secrets Manager access token authentication](https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-secretsmanageraccesstokenconfiguration.html
     */
    interface SecretsManagerAccessTokenConfigurationProperty {
        /**
         * The name of the HTTP header used to supply the access token in requests to the source location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-secretsmanageraccesstokenconfiguration.html#cfn-mediatailor-sourcelocation-secretsmanageraccesstokenconfiguration-headername
         */
        readonly headerName?: string;
        /**
         * The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-secretsmanageraccesstokenconfiguration.html#cfn-mediatailor-sourcelocation-secretsmanageraccesstokenconfiguration-secretarn
         */
        readonly secretArn?: string;
        /**
         * The AWS Secrets Manager [SecretString](https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html) key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-sourcelocation-secretsmanageraccesstokenconfiguration.html#cfn-mediatailor-sourcelocation-secretsmanageraccesstokenconfiguration-secretstringkey
         */
        readonly secretStringKey?: string;
    }
}
/**
 * Properties for defining a `CfnSourceLocation`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-sourcelocation.html
 */
export interface CfnSourceLocationProps {
    /**
     * The access configuration for the source location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-sourcelocation.html#cfn-mediatailor-sourcelocation-accessconfiguration
     */
    readonly accessConfiguration?: CfnSourceLocation.AccessConfigurationProperty | cdk.IResolvable;
    /**
     * The default segment delivery configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-sourcelocation.html#cfn-mediatailor-sourcelocation-defaultsegmentdeliveryconfiguration
     */
    readonly defaultSegmentDeliveryConfiguration?: CfnSourceLocation.DefaultSegmentDeliveryConfigurationProperty | cdk.IResolvable;
    /**
     * The HTTP configuration for the source location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-sourcelocation.html#cfn-mediatailor-sourcelocation-httpconfiguration
     */
    readonly httpConfiguration: CfnSourceLocation.HttpConfigurationProperty | cdk.IResolvable;
    /**
     * The segment delivery configurations for the source location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-sourcelocation.html#cfn-mediatailor-sourcelocation-segmentdeliveryconfigurations
     */
    readonly segmentDeliveryConfigurations?: Array<cdk.IResolvable | CfnSourceLocation.SegmentDeliveryConfigurationProperty> | cdk.IResolvable;
    /**
     * The name of the source location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-sourcelocation.html#cfn-mediatailor-sourcelocation-sourcelocationname
     */
    readonly sourceLocationName: string;
    /**
     * The tags assigned to the source location.
     *
     * Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-sourcelocation.html#cfn-mediatailor-sourcelocation-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The VOD source configuration parameters.
 *
 * @cloudformationResource AWS::MediaTailor::VodSource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-vodsource.html
 */
export declare class CfnVodSource extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnVodSource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnVodSource;
    /**
     * <p>The ARN of the VOD source.</p>
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The HTTP package configurations for the VOD source.
     */
    httpPackageConfigurations: Array<CfnVodSource.HttpPackageConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the source location that the VOD source is associated with.
     */
    sourceLocationName: string;
    /**
     * The tags assigned to the VOD source.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The name of the VOD source.
     */
    vodSourceName: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnVodSourceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnVodSource {
    /**
     * The HTTP package configuration properties for the requested VOD source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-vodsource-httppackageconfiguration.html
     */
    interface HttpPackageConfigurationProperty {
        /**
         * The relative path to the URL for this VOD source.
         *
         * This is combined with `SourceLocation::HttpConfiguration::BaseUrl` to form a valid URL.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-vodsource-httppackageconfiguration.html#cfn-mediatailor-vodsource-httppackageconfiguration-path
         */
        readonly path: string;
        /**
         * The name of the source group.
         *
         * This has to match one of the `Channel::Outputs::SourceGroup` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-vodsource-httppackageconfiguration.html#cfn-mediatailor-vodsource-httppackageconfiguration-sourcegroup
         */
        readonly sourceGroup: string;
        /**
         * The streaming protocol for this package configuration.
         *
         * Supported values are `HLS` and `DASH` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediatailor-vodsource-httppackageconfiguration.html#cfn-mediatailor-vodsource-httppackageconfiguration-type
         */
        readonly type: string;
    }
}
/**
 * Properties for defining a `CfnVodSource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-vodsource.html
 */
export interface CfnVodSourceProps {
    /**
     * The HTTP package configurations for the VOD source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-vodsource.html#cfn-mediatailor-vodsource-httppackageconfigurations
     */
    readonly httpPackageConfigurations: Array<CfnVodSource.HttpPackageConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The name of the source location that the VOD source is associated with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-vodsource.html#cfn-mediatailor-vodsource-sourcelocationname
     */
    readonly sourceLocationName: string;
    /**
     * The tags assigned to the VOD source.
     *
     * Tags are key-value pairs that you can associate with Amazon resources to help with organization, access control, and cost tracking. For more information, see [Tagging AWS Elemental MediaTailor Resources](https://docs.aws.amazon.com/mediatailor/latest/ug/tagging.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-vodsource.html#cfn-mediatailor-vodsource-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the VOD source.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediatailor-vodsource.html#cfn-mediatailor-vodsource-vodsourcename
     */
    readonly vodSourceName: string;
}
