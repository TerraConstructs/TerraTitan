import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The AWS::MediaLive::Channel resource is a MediaLive resource type that creates a channel.
 *
 * A MediaLive channel ingests and transcodes (decodes and encodes) source content from the inputs that are attached to that channel, and packages the new content into outputs.
 *
 * @cloudformationResource AWS::MediaLive::Channel
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html
 */
export declare class CfnChannel extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
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
     * The ARN of the MediaLive channel. For example: arn:aws:medialive:us-west-1:111122223333:medialive:channel:1234567
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * User-specified id. This is used in an output group or an output.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The inputs that are attached to this channel. The inputs are identified by their IDs (not by their names or their ARNs).
     *
     * @cloudformationAttribute Inputs
     */
    readonly attrInputs: Array<string>;
    anywhereSettings?: CfnChannel.AnywhereSettingsProperty | cdk.IResolvable;
    /**
     * Specification of CDI inputs for this channel.
     */
    cdiInputSpecification?: CfnChannel.CdiInputSpecificationProperty | cdk.IResolvable;
    /**
     * The class for this channel.
     */
    channelClass?: string;
    channelEngineVersion?: CfnChannel.ChannelEngineVersionRequestProperty | cdk.IResolvable;
    /**
     * The settings that identify the destination for the outputs in this MediaLive output package.
     */
    destinations?: Array<cdk.IResolvable | CfnChannel.OutputDestinationProperty> | cdk.IResolvable;
    dryRun?: boolean | cdk.IResolvable;
    /**
     * The encoding configuration for the output content.
     */
    encoderSettings?: CfnChannel.EncoderSettingsProperty | cdk.IResolvable;
    /**
     * The list of input attachments for the channel.
     */
    inputAttachments?: Array<CfnChannel.InputAttachmentProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The input specification for this channel.
     */
    inputSpecification?: CfnChannel.InputSpecificationProperty | cdk.IResolvable;
    /**
     * The verbosity for logging activity for this channel.
     */
    logLevel?: string;
    /**
     * Maintenance settings for this channel.
     */
    maintenance?: cdk.IResolvable | CfnChannel.MaintenanceCreateSettingsProperty;
    /**
     * A name for this audio selector.
     */
    name?: string;
    /**
     * The IAM role for MediaLive to assume when running this channel.
     */
    roleArn?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A collection of tags for this channel.
     */
    tagsRaw?: any;
    /**
     * Settings to enable VPC mode in the channel, so that the endpoints for all outputs are in your VPC.
     */
    vpc?: cdk.IResolvable | CfnChannel.VpcOutputSettingsProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnChannelProps);
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
     * An input to attach to this channel.
     *
     * This entity is at the top level in the channel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputattachment.html
     */
    interface InputAttachmentProperty {
        /**
         * Settings to implement automatic input failover in this input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputattachment.html#cfn-medialive-channel-inputattachment-automaticinputfailoversettings
         */
        readonly automaticInputFailoverSettings?: CfnChannel.AutomaticInputFailoverSettingsProperty | cdk.IResolvable;
        /**
         * A name for the attachment.
         *
         * This is required if you want to use this input in an input switch action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputattachment.html#cfn-medialive-channel-inputattachment-inputattachmentname
         */
        readonly inputAttachmentName?: string;
        /**
         * The ID of the input to attach.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputattachment.html#cfn-medialive-channel-inputattachment-inputid
         */
        readonly inputId?: string;
        /**
         * Information about the content to extract from the input and about the general handling of the content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputattachment.html#cfn-medialive-channel-inputattachment-inputsettings
         */
        readonly inputSettings?: CfnChannel.InputSettingsProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputattachment.html#cfn-medialive-channel-inputattachment-logicalinterfacenames
         */
        readonly logicalInterfaceNames?: Array<string>;
    }
    /**
     * Settings to configure the conditions that will define the input as unhealthy and that will make MediaLive fail over to the other input in the input failover pair.
     *
     * The parent of this entity is InputAttachment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-automaticinputfailoversettings.html
     */
    interface AutomaticInputFailoverSettingsProperty {
        /**
         * This clear time defines the requirement a recovered input must meet to be considered healthy.
         *
         * The input must have no failover conditions for this length of time. Enter a time in milliseconds. This value is particularly important if the input_preference for the failover pair is set to PRIMARY_INPUT_PREFERRED, because after this time, MediaLive will switch back to the primary input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-automaticinputfailoversettings.html#cfn-medialive-channel-automaticinputfailoversettings-errorcleartimemsec
         */
        readonly errorClearTimeMsec?: number;
        /**
         * A list of failover conditions.
         *
         * If any of these conditions occur, MediaLive will perform a failover to the other input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-automaticinputfailoversettings.html#cfn-medialive-channel-automaticinputfailoversettings-failoverconditions
         */
        readonly failoverConditions?: Array<CfnChannel.FailoverConditionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Input preference when deciding which input to make active when a previously failed input has recovered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-automaticinputfailoversettings.html#cfn-medialive-channel-automaticinputfailoversettings-inputpreference
         */
        readonly inputPreference?: string;
        /**
         * The input ID of the secondary input in the automatic input failover pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-automaticinputfailoversettings.html#cfn-medialive-channel-automaticinputfailoversettings-secondaryinputid
         */
        readonly secondaryInputId?: string;
    }
    /**
     * Failover Condition settings. There can be multiple failover conditions inside AutomaticInputFailoverSettings.
     *
     * The parent of this entity is AutomaticInputFailoverSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-failovercondition.html
     */
    interface FailoverConditionProperty {
        /**
         * Settings for a specific failover condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-failovercondition.html#cfn-medialive-channel-failovercondition-failoverconditionsettings
         */
        readonly failoverConditionSettings?: CfnChannel.FailoverConditionSettingsProperty | cdk.IResolvable;
    }
    /**
     * Settings for one failover condition.
     *
     * The parent of this entity is FailoverCondition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-failoverconditionsettings.html
     */
    interface FailoverConditionSettingsProperty {
        /**
         * MediaLive will perform a failover if the specified audio selector is silent for the specified period.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-failoverconditionsettings.html#cfn-medialive-channel-failoverconditionsettings-audiosilencesettings
         */
        readonly audioSilenceSettings?: CfnChannel.AudioSilenceFailoverSettingsProperty | cdk.IResolvable;
        /**
         * MediaLive will perform a failover if content is not detected in this input for the specified period.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-failoverconditionsettings.html#cfn-medialive-channel-failoverconditionsettings-inputlosssettings
         */
        readonly inputLossSettings?: CfnChannel.InputLossFailoverSettingsProperty | cdk.IResolvable;
        /**
         * MediaLive will perform a failover if content is considered black for the specified period.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-failoverconditionsettings.html#cfn-medialive-channel-failoverconditionsettings-videoblacksettings
         */
        readonly videoBlackSettings?: cdk.IResolvable | CfnChannel.VideoBlackFailoverSettingsProperty;
    }
    /**
     * MediaLive will perform a failover if audio is not detected in this input for the specified period.
     *
     * The parent of this entity is FailoverConditionSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiosilencefailoversettings.html
     */
    interface AudioSilenceFailoverSettingsProperty {
        /**
         * The name of the audio selector in the input that MediaLive should monitor to detect silence.
         *
         * Select your most important rendition. If you didn't create an audio selector in this input, leave blank.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiosilencefailoversettings.html#cfn-medialive-channel-audiosilencefailoversettings-audioselectorname
         */
        readonly audioSelectorName?: string;
        /**
         * The amount of time (in milliseconds) that the active input must be silent before automatic input failover occurs.
         *
         * Silence is defined as audio loss or audio quieter than -50 dBFS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiosilencefailoversettings.html#cfn-medialive-channel-audiosilencefailoversettings-audiosilencethresholdmsec
         */
        readonly audioSilenceThresholdMsec?: number;
    }
    /**
     * MediaLive will perform a failover if content is considered black for the specified period.
     *
     * The parent of this entity is FailoverConditionSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoblackfailoversettings.html
     */
    interface VideoBlackFailoverSettingsProperty {
        /**
         * A value used in calculating the threshold below which MediaLive considers a pixel to be 'black'.
         *
         * For the input to be considered black, every pixel in a frame must be below this threshold. The threshold is calculated as a percentage (expressed as a decimal) of white. Therefore .1 means 10% white (or 90% black). Note how the formula works for any color depth. For example, if you set this field to 0.1 in 10-bit color depth: (1023*0.1=102.3), which means a pixel value of 102 or less is 'black'. If you set this field to .1 in an 8-bit color depth: (255*0.1=25.5), which means a pixel value of 25 or less is 'black'. The range is 0.0 to 1.0, with any number of decimal places.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoblackfailoversettings.html#cfn-medialive-channel-videoblackfailoversettings-blackdetectthreshold
         */
        readonly blackDetectThreshold?: number;
        /**
         * The amount of time (in milliseconds) that the active input must be black before automatic input failover occurs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoblackfailoversettings.html#cfn-medialive-channel-videoblackfailoversettings-videoblackthresholdmsec
         */
        readonly videoBlackThresholdMsec?: number;
    }
    /**
     * MediaLive will perform a failover if content is not detected in this input for the specified period.
     *
     * The parent of this entity is FailoverConditionSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlossfailoversettings.html
     */
    interface InputLossFailoverSettingsProperty {
        /**
         * The amount of time (in milliseconds) that no input is detected.
         *
         * After that time, an input failover will occur.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlossfailoversettings.html#cfn-medialive-channel-inputlossfailoversettings-inputlossthresholdmsec
         */
        readonly inputLossThresholdMsec?: number;
    }
    /**
     * Information about extracting content from the input and about handling the content.
     *
     * The parent of this entity is InputAttachment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputsettings.html
     */
    interface InputSettingsProperty {
        /**
         * Information about the specific audio to extract from the input.
         *
         * The parent of this entity is InputSettings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputsettings.html#cfn-medialive-channel-inputsettings-audioselectors
         */
        readonly audioSelectors?: Array<CfnChannel.AudioSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Information about the specific captions to extract from the input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputsettings.html#cfn-medialive-channel-inputsettings-captionselectors
         */
        readonly captionSelectors?: Array<CfnChannel.CaptionSelectorProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Enables or disables the deblock filter when filtering.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputsettings.html#cfn-medialive-channel-inputsettings-deblockfilter
         */
        readonly deblockFilter?: string;
        /**
         * Enables or disables the denoise filter when filtering.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputsettings.html#cfn-medialive-channel-inputsettings-denoisefilter
         */
        readonly denoiseFilter?: string;
        /**
         * Adjusts the magnitude of filtering from 1 (minimal) to 5 (strongest).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputsettings.html#cfn-medialive-channel-inputsettings-filterstrength
         */
        readonly filterStrength?: number;
        /**
         * Turns on the filter for this input.
         *
         * MPEG-2 inputs have the deblocking filter enabled by default. 1) auto - filtering is applied depending on input type/quality 2) disabled - no filtering is applied to the input 3) forced - filtering is applied regardless of the input type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputsettings.html#cfn-medialive-channel-inputsettings-inputfilter
         */
        readonly inputFilter?: string;
        /**
         * Information about how to connect to the upstream system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputsettings.html#cfn-medialive-channel-inputsettings-networkinputsettings
         */
        readonly networkInputSettings?: cdk.IResolvable | CfnChannel.NetworkInputSettingsProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputsettings.html#cfn-medialive-channel-inputsettings-scte35pid
         */
        readonly scte35Pid?: number;
        /**
         * Specifies whether to extract applicable ancillary data from a SMPTE-2038 source in this input.
         *
         * Applicable data types are captions, timecode, AFD, and SCTE-104 messages.
         * - PREFER: Extract from SMPTE-2038 if present in this input, otherwise extract from another source (if any).
         * - IGNORE: Never extract any ancillary data from SMPTE-2038.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputsettings.html#cfn-medialive-channel-inputsettings-smpte2038datapreference
         */
        readonly smpte2038DataPreference?: string;
        /**
         * The loop input if it is a file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputsettings.html#cfn-medialive-channel-inputsettings-sourceendbehavior
         */
        readonly sourceEndBehavior?: string;
        /**
         * Information about one video to extract from the input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputsettings.html#cfn-medialive-channel-inputsettings-videoselector
         */
        readonly videoSelector?: cdk.IResolvable | CfnChannel.VideoSelectorProperty;
    }
    /**
     * Information about the video to extract from the input. An input can contain only one video selector.
     *
     * The parent of this entity is InputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselector.html
     */
    interface VideoSelectorProperty {
        /**
         * Specifies the color space of an input.
         *
         * This setting works in tandem with colorSpaceConversion to determine if MediaLive will perform any conversion.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselector.html#cfn-medialive-channel-videoselector-colorspace
         */
        readonly colorSpace?: string;
        /**
         * Settings to configure color space settings in the incoming video.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselector.html#cfn-medialive-channel-videoselector-colorspacesettings
         */
        readonly colorSpaceSettings?: cdk.IResolvable | CfnChannel.VideoSelectorColorSpaceSettingsProperty;
        /**
         * Applies only if colorSpace is a value other than Follow.
         *
         * This field controls how the value in the colorSpace field is used. Fallback means that when the input does include color space data, that data is used, but when the input has no color space data, the value in colorSpace is used. Choose fallback if your input is sometimes missing color space data, but when it does have color space data, that data is correct. Force means to always use the value in colorSpace. Choose force if your input usually has no color space data or might have unreliable color space data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselector.html#cfn-medialive-channel-videoselector-colorspaceusage
         */
        readonly colorSpaceUsage?: string;
        /**
         * Information about the video to select from the content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselector.html#cfn-medialive-channel-videoselector-selectorsettings
         */
        readonly selectorSettings?: cdk.IResolvable | CfnChannel.VideoSelectorSettingsProperty;
    }
    /**
     * Settings to configure color space settings in the incoming video.
     *
     * The parent of this entity is VideoSelector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorcolorspacesettings.html
     */
    interface VideoSelectorColorSpaceSettingsProperty {
        /**
         * Settings to configure color space settings in the incoming video.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorcolorspacesettings.html#cfn-medialive-channel-videoselectorcolorspacesettings-hdr10settings
         */
        readonly hdr10Settings?: CfnChannel.Hdr10SettingsProperty | cdk.IResolvable;
    }
    /**
     * Hdr10 Settings.
     *
     * The parents of this entity are H265ColorSpaceSettings (for color space settings in the output) and VideoSelectorColorSpaceSettings (for color space settings in the input).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hdr10settings.html
     */
    interface Hdr10SettingsProperty {
        /**
         * Maximum Content Light Level An integer metadata value defining the maximum light level, in nits, of any single pixel within an encoded HDR video stream or file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hdr10settings.html#cfn-medialive-channel-hdr10settings-maxcll
         */
        readonly maxCll?: number;
        /**
         * Maximum Frame Average Light Level An integer metadata value defining the maximum average light level, in nits, for any single frame within an encoded HDR video stream or file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hdr10settings.html#cfn-medialive-channel-hdr10settings-maxfall
         */
        readonly maxFall?: number;
    }
    /**
     * Information about the video to extract from the input.
     *
     * The parent of this entity is VideoSelector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorsettings.html
     */
    interface VideoSelectorSettingsProperty {
        /**
         * Used to extract video by PID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorsettings.html#cfn-medialive-channel-videoselectorsettings-videoselectorpid
         */
        readonly videoSelectorPid?: cdk.IResolvable | CfnChannel.VideoSelectorPidProperty;
        /**
         * Used to extract video by program ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorsettings.html#cfn-medialive-channel-videoselectorsettings-videoselectorprogramid
         */
        readonly videoSelectorProgramId?: cdk.IResolvable | CfnChannel.VideoSelectorProgramIdProperty;
    }
    /**
     * Used to extract video by the program ID.
     *
     * The parent of this entity is VideoSelectorSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorprogramid.html
     */
    interface VideoSelectorProgramIdProperty {
        /**
         * Selects a specific program from within a multi-program transport stream.
         *
         * If the program doesn't exist, MediaLive selects the first program within the transport stream by default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorprogramid.html#cfn-medialive-channel-videoselectorprogramid-programid
         */
        readonly programId?: number;
    }
    /**
     * Selects a specific PID from within a video source.
     *
     * The parent of this entity is VideoSelectorSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorpid.html
     */
    interface VideoSelectorPidProperty {
        /**
         * Selects a specific PID from within a video source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videoselectorpid.html#cfn-medialive-channel-videoselectorpid-pid
         */
        readonly pid?: number;
    }
    /**
     * Information about one audio to extract from the input.
     *
     * The parent of this entity is InputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioselector.html
     */
    interface AudioSelectorProperty {
        /**
         * A name for this AudioSelector.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioselector.html#cfn-medialive-channel-audioselector-name
         */
        readonly name?: string;
        /**
         * Information about the specific audio to extract from the input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioselector.html#cfn-medialive-channel-audioselector-selectorsettings
         */
        readonly selectorSettings?: CfnChannel.AudioSelectorSettingsProperty | cdk.IResolvable;
    }
    /**
     * Information about the audio to extract from the input.
     *
     * The parent of this entity is AudioSelector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioselectorsettings.html
     */
    interface AudioSelectorSettingsProperty {
        /**
         * Selector for HLS audio rendition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioselectorsettings.html#cfn-medialive-channel-audioselectorsettings-audiohlsrenditionselection
         */
        readonly audioHlsRenditionSelection?: CfnChannel.AudioHlsRenditionSelectionProperty | cdk.IResolvable;
        /**
         * The language code of the audio to select.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioselectorsettings.html#cfn-medialive-channel-audioselectorsettings-audiolanguageselection
         */
        readonly audioLanguageSelection?: CfnChannel.AudioLanguageSelectionProperty | cdk.IResolvable;
        /**
         * The PID of the audio to select.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioselectorsettings.html#cfn-medialive-channel-audioselectorsettings-audiopidselection
         */
        readonly audioPidSelection?: CfnChannel.AudioPidSelectionProperty | cdk.IResolvable;
        /**
         * Information about the audio track to extract.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioselectorsettings.html#cfn-medialive-channel-audioselectorsettings-audiotrackselection
         */
        readonly audioTrackSelection?: CfnChannel.AudioTrackSelectionProperty | cdk.IResolvable;
    }
    /**
     * Used to extract audio by The PID.
     *
     * The parent of this entity is AudioSelectorSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiopidselection.html
     */
    interface AudioPidSelectionProperty {
        /**
         * Select the audio by this PID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiopidselection.html#cfn-medialive-channel-audiopidselection-pid
         */
        readonly pid?: number;
    }
    /**
     * Information about the audio language to extract.
     *
     * The parent of this entity is AudioSelectorSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiolanguageselection.html
     */
    interface AudioLanguageSelectionProperty {
        /**
         * Selects a specific three-letter language code from within an audio source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiolanguageselection.html#cfn-medialive-channel-audiolanguageselection-languagecode
         */
        readonly languageCode?: string;
        /**
         * When set to "strict," the transport stream demux strictly identifies audio streams by their language descriptor.
         *
         * If a PMT update occurs such that an audio stream matching the initially selected language is no longer present, then mute is encoded until the language returns. If set to "loose," then on a PMT update the demux chooses another audio stream in the program with the same stream type if it can't find one with the same language.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiolanguageselection.html#cfn-medialive-channel-audiolanguageselection-languageselectionpolicy
         */
        readonly languageSelectionPolicy?: string;
    }
    /**
     * Information about the audio track to extract.
     *
     * The parent of this entity is AudioSelectorSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiotrackselection.html
     */
    interface AudioTrackSelectionProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiotrackselection.html#cfn-medialive-channel-audiotrackselection-dolbyedecode
         */
        readonly dolbyEDecode?: CfnChannel.AudioDolbyEDecodeProperty | cdk.IResolvable;
        /**
         * Selects one or more unique audio tracks from within a source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiotrackselection.html#cfn-medialive-channel-audiotrackselection-tracks
         */
        readonly tracks?: Array<CfnChannel.AudioTrackProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodolbyedecode.html
     */
    interface AudioDolbyEDecodeProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodolbyedecode.html#cfn-medialive-channel-audiodolbyedecode-programselection
         */
        readonly programSelection?: string;
    }
    /**
     * Information about one audio track to extract. You can select multiple tracks.
     *
     * The parent of this entity is AudioTrackSelection.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiotrack.html
     */
    interface AudioTrackProperty {
        /**
         * 1-based integer value that maps to a specific audio track.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiotrack.html#cfn-medialive-channel-audiotrack-track
         */
        readonly track?: number;
    }
    /**
     * Selector for HLS audio rendition.
     *
     * The parent of this entity is AudioSelectorSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiohlsrenditionselection.html
     */
    interface AudioHlsRenditionSelectionProperty {
        /**
         * Specifies the GROUP-ID in the #EXT-X-MEDIA tag of the target HLS audio rendition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiohlsrenditionselection.html#cfn-medialive-channel-audiohlsrenditionselection-groupid
         */
        readonly groupId?: string;
        /**
         * Specifies the NAME in the #EXT-X-MEDIA tag of the target HLS audio rendition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiohlsrenditionselection.html#cfn-medialive-channel-audiohlsrenditionselection-name
         */
        readonly name?: string;
    }
    /**
     * Information about one caption to extract from the input.
     *
     * The parent of this entity is InputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselector.html
     */
    interface CaptionSelectorProperty {
        /**
         * When specified, this field indicates the three-letter language code of the captions track to extract from the source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselector.html#cfn-medialive-channel-captionselector-languagecode
         */
        readonly languageCode?: string;
        /**
         * The name identifier for a captions selector.
         *
         * This name is used to associate this captions selector with one or more captions descriptions. Names must be unique within a channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselector.html#cfn-medialive-channel-captionselector-name
         */
        readonly name?: string;
        /**
         * Information about the specific audio to extract from the input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselector.html#cfn-medialive-channel-captionselector-selectorsettings
         */
        readonly selectorSettings?: CfnChannel.CaptionSelectorSettingsProperty | cdk.IResolvable;
    }
    /**
     * Captions Selector Settings.
     *
     * The parent of this entity is CaptionSelector.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselectorsettings.html
     */
    interface CaptionSelectorSettingsProperty {
        /**
         * Information about the ancillary captions to extract from the input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselectorsettings.html#cfn-medialive-channel-captionselectorsettings-ancillarysourcesettings
         */
        readonly ancillarySourceSettings?: CfnChannel.AncillarySourceSettingsProperty | cdk.IResolvable;
        /**
         * Information about the ARIB captions to extract from the input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselectorsettings.html#cfn-medialive-channel-captionselectorsettings-aribsourcesettings
         */
        readonly aribSourceSettings?: CfnChannel.AribSourceSettingsProperty | cdk.IResolvable;
        /**
         * Information about the DVB Sub captions to extract from the input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselectorsettings.html#cfn-medialive-channel-captionselectorsettings-dvbsubsourcesettings
         */
        readonly dvbSubSourceSettings?: CfnChannel.DvbSubSourceSettingsProperty | cdk.IResolvable;
        /**
         * Information about the embedded captions to extract from the input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselectorsettings.html#cfn-medialive-channel-captionselectorsettings-embeddedsourcesettings
         */
        readonly embeddedSourceSettings?: CfnChannel.EmbeddedSourceSettingsProperty | cdk.IResolvable;
        /**
         * Information about the SCTE-20 captions to extract from the input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselectorsettings.html#cfn-medialive-channel-captionselectorsettings-scte20sourcesettings
         */
        readonly scte20SourceSettings?: cdk.IResolvable | CfnChannel.Scte20SourceSettingsProperty;
        /**
         * Information about the SCTE-27 captions to extract from the input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselectorsettings.html#cfn-medialive-channel-captionselectorsettings-scte27sourcesettings
         */
        readonly scte27SourceSettings?: cdk.IResolvable | CfnChannel.Scte27SourceSettingsProperty;
        /**
         * Information about the Teletext captions to extract from the input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionselectorsettings.html#cfn-medialive-channel-captionselectorsettings-teletextsourcesettings
         */
        readonly teletextSourceSettings?: cdk.IResolvable | CfnChannel.TeletextSourceSettingsProperty;
    }
    /**
     * Information about the DVB Sub captions to extract from the input.
     *
     * The parent of this entity is CaptionSelectorSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubsourcesettings.html
     */
    interface DvbSubSourceSettingsProperty {
        /**
         * If you will configure a WebVTT caption description that references this caption selector, use this field to provide the language to consider when translating the image-based source to text.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubsourcesettings.html#cfn-medialive-channel-dvbsubsourcesettings-ocrlanguage
         */
        readonly ocrLanguage?: string;
        /**
         * When using DVB-Sub with burn-in or SMPTE-TT, use this PID for the source content.
         *
         * It is unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubsourcesettings.html#cfn-medialive-channel-dvbsubsourcesettings-pid
         */
        readonly pid?: number;
    }
    /**
     * Information about the SCTE-27 captions to extract from the input.
     *
     * The parent of this entity is CaptionSelectorSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte27sourcesettings.html
     */
    interface Scte27SourceSettingsProperty {
        /**
         * If you will configure a WebVTT caption description that references this caption selector, use this field to provide the language to consider when translating the image-based source to text.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte27sourcesettings.html#cfn-medialive-channel-scte27sourcesettings-ocrlanguage
         */
        readonly ocrLanguage?: string;
        /**
         * The PID field is used in conjunction with the captions selector languageCode field as follows: Specify PID and Language: Extracts captions from that PID;
         *
         * the language is "informational." Specify PID and omit Language: Extracts the specified PID. Omit PID and specify Language: Extracts the specified language, whichever PID that happens to be. Omit PID and omit Language: Valid only if source is DVB-Sub that is being passed through; all languages are passed through.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte27sourcesettings.html#cfn-medialive-channel-scte27sourcesettings-pid
         */
        readonly pid?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aribsourcesettings.html
     */
    interface AribSourceSettingsProperty {
    }
    /**
     * Information about the embedded captions to extract from the input.
     *
     * The parent of this entity is CaptionSelectorSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-embeddedsourcesettings.html
     */
    interface EmbeddedSourceSettingsProperty {
        /**
         * If this is upconvert, 608 data is both passed through the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708.
         *
         * If 708 data is present in the source content, it is discarded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-embeddedsourcesettings.html#cfn-medialive-channel-embeddedsourcesettings-convert608to708
         */
        readonly convert608To708?: string;
        /**
         * Set to "auto" to handle streams with intermittent or non-aligned SCTE-20 and embedded captions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-embeddedsourcesettings.html#cfn-medialive-channel-embeddedsourcesettings-scte20detection
         */
        readonly scte20Detection?: string;
        /**
         * Specifies the 608/708 channel number within the video track from which to extract captions.
         *
         * This is unused for passthrough.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-embeddedsourcesettings.html#cfn-medialive-channel-embeddedsourcesettings-source608channelnumber
         */
        readonly source608ChannelNumber?: number;
        /**
         * This field is unused and deprecated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-embeddedsourcesettings.html#cfn-medialive-channel-embeddedsourcesettings-source608tracknumber
         */
        readonly source608TrackNumber?: number;
    }
    /**
     * Information about the SCTE-20 captions to extract from the input.
     *
     * The parent of this entity is CaptionSelectorSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte20sourcesettings.html
     */
    interface Scte20SourceSettingsProperty {
        /**
         * If upconvert, 608 data is both passed through the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708.
         *
         * Any 708 data present in the source content is discarded.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte20sourcesettings.html#cfn-medialive-channel-scte20sourcesettings-convert608to708
         */
        readonly convert608To708?: string;
        /**
         * Specifies the 608/708 channel number within the video track from which to extract captions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte20sourcesettings.html#cfn-medialive-channel-scte20sourcesettings-source608channelnumber
         */
        readonly source608ChannelNumber?: number;
    }
    /**
     * Information about the Teletext captions to extract from the input.
     *
     * The parent of this entity is CaptionSelectorSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-teletextsourcesettings.html
     */
    interface TeletextSourceSettingsProperty {
        /**
         * Settings to configure the caption rectangle for an output captions that will be created using this Teletext source captions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-teletextsourcesettings.html#cfn-medialive-channel-teletextsourcesettings-outputrectangle
         */
        readonly outputRectangle?: CfnChannel.CaptionRectangleProperty | cdk.IResolvable;
        /**
         * Specifies the Teletext page number within the data stream from which to extract captions.
         *
         * The range is 0x100 (256) to 0x8FF (2303). This is unused for passthrough. It should be specified as a hexadecimal string with no "0x" prefix.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-teletextsourcesettings.html#cfn-medialive-channel-teletextsourcesettings-pagenumber
         */
        readonly pageNumber?: string;
    }
    /**
     * Settings to configure the caption rectangle for an output captions that will be created using this Teletext source captions.
     *
     * The parent of this entity is TeletextSourceSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionrectangle.html
     */
    interface CaptionRectangleProperty {
        /**
         * See the description in leftOffset.
         *
         * For height, specify the entire height of the rectangle as a percentage of the underlying frame height. For example, \"80\" means the rectangle height is 80% of the underlying frame height. The topOffset and rectangleHeight must add up to 100% or less. This field corresponds to tts:extent - Y in the TTML standard.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionrectangle.html#cfn-medialive-channel-captionrectangle-height
         */
        readonly height?: number;
        /**
         * Applies only if you plan to convert these source captions to EBU-TT-D or TTML in an output.
         *
         * (Make sure to leave the default if you don't have either of these formats in the output.) You can define a display rectangle for the captions that is smaller than the underlying video frame. You define the rectangle by specifying the position of the left edge, top edge, bottom edge, and right edge of the rectangle, all within the underlying video frame. The units for the measurements are percentages. If you specify a value for one of these fields, you must specify a value for all of them.
         *
         * For leftOffset, specify the position of the left edge of the rectangle, as a percentage of the underlying frame width, and relative to the left edge of the frame. For example, \"10\" means the measurement is 10% of the underlying frame width. The rectangle left edge starts at that position from the left edge of the frame. This field corresponds to tts:origin - X in the TTML standard.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionrectangle.html#cfn-medialive-channel-captionrectangle-leftoffset
         */
        readonly leftOffset?: number;
        /**
         * See the description in leftOffset.
         *
         * For topOffset, specify the position of the top edge of the rectangle, as a percentage of the underlying frame height, and relative to the top edge of the frame. For example, \"10\" means the measurement is 10% of the underlying frame height. The rectangle top edge starts at that position from the top edge of the frame. This field corresponds to tts:origin - Y in the TTML standard.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionrectangle.html#cfn-medialive-channel-captionrectangle-topoffset
         */
        readonly topOffset?: number;
        /**
         * See the description in leftOffset.
         *
         * For width, specify the entire width of the rectangle as a percentage of the underlying frame width. For example, \"80\" means the rectangle width is 80% of the underlying frame width. The leftOffset and rectangleWidth must add up to 100% or less. This field corresponds to tts:extent - X in the TTML standard.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionrectangle.html#cfn-medialive-channel-captionrectangle-width
         */
        readonly width?: number;
    }
    /**
     * Information about the ancillary captions to extract from the input.
     *
     * The parent of this entity is CaptionSelectorSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ancillarysourcesettings.html
     */
    interface AncillarySourceSettingsProperty {
        /**
         * Specifies the number (1 to 4) of the captions channel you want to extract from the ancillary captions.
         *
         * If you plan to convert the ancillary captions to another format, complete this field. If you plan to choose Embedded as the captions destination in the output (to pass through all the channels in the ancillary captions), leave this field blank because MediaLive ignores the field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ancillarysourcesettings.html#cfn-medialive-channel-ancillarysourcesettings-sourceancillarychannelnumber
         */
        readonly sourceAncillaryChannelNumber?: number;
    }
    /**
     * Information about how to connect to the upstream system.
     *
     * The parent of this entity is InputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-networkinputsettings.html
     */
    interface NetworkInputSettingsProperty {
        /**
         * Information about how to connect to the upstream system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-networkinputsettings.html#cfn-medialive-channel-networkinputsettings-hlsinputsettings
         */
        readonly hlsInputSettings?: CfnChannel.HlsInputSettingsProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-networkinputsettings.html#cfn-medialive-channel-networkinputsettings-multicastinputsettings
         */
        readonly multicastInputSettings?: cdk.IResolvable | CfnChannel.MulticastInputSettingsProperty;
        /**
         * Checks HTTPS server certificates.
         *
         * When set to checkCryptographyOnly, cryptography in the certificate is checked, but not the server's name. Certain subdomains (notably S3 buckets that use dots in the bucket name) don't strictly match the corresponding certificate's wildcard pattern and would otherwise cause the channel to error. This setting is ignored for protocols that do not use HTTPS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-networkinputsettings.html#cfn-medialive-channel-networkinputsettings-servervalidation
         */
        readonly serverValidation?: string;
    }
    /**
     * Information about how to connect to the upstream system.
     *
     * The parent of this entity is NetworkInputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsinputsettings.html
     */
    interface HlsInputSettingsProperty {
        /**
         * When specified, the HLS stream with the m3u8 bandwidth that most closely matches this value is chosen.
         *
         * Otherwise, the highest bandwidth stream in the m3u8 is chosen. The bitrate is specified in bits per second, as in an HLS manifest.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsinputsettings.html#cfn-medialive-channel-hlsinputsettings-bandwidth
         */
        readonly bandwidth?: number;
        /**
         * When specified, reading of the HLS input begins this many buffer segments from the end (most recently written segment).
         *
         * When not specified, the HLS input begins with the first segment specified in the m3u8.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsinputsettings.html#cfn-medialive-channel-hlsinputsettings-buffersegments
         */
        readonly bufferSegments?: number;
        /**
         * The number of consecutive times that attempts to read a manifest or segment must fail before the input is considered unavailable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsinputsettings.html#cfn-medialive-channel-hlsinputsettings-retries
         */
        readonly retries?: number;
        /**
         * The number of seconds between retries when an attempt to read a manifest or segment fails.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsinputsettings.html#cfn-medialive-channel-hlsinputsettings-retryinterval
         */
        readonly retryInterval?: number;
        /**
         * Identifies the source for the SCTE-35 messages that MediaLive will ingest.
         *
         * Messages can be ingested from the content segments (in the stream) or from tags in the playlist (the HLS manifest). MediaLive ignores SCTE-35 information in the source that is not selected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsinputsettings.html#cfn-medialive-channel-hlsinputsettings-scte35source
         */
        readonly scte35Source?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multicastinputsettings.html
     */
    interface MulticastInputSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multicastinputsettings.html#cfn-medialive-channel-multicastinputsettings-sourceipaddress
         */
        readonly sourceIpAddress?: string;
    }
    /**
     * The input specification for this channel.
     *
     * It specifies the key characteristics of the inputs for this channel: the maximum bitrate, the resolution, and the codec.
     *
     * This entity is at the top level in the channel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputspecification.html
     */
    interface InputSpecificationProperty {
        /**
         * The codec to include in the input specification for this channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputspecification.html#cfn-medialive-channel-inputspecification-codec
         */
        readonly codec?: string;
        /**
         * The maximum input bitrate for any input attached to this channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputspecification.html#cfn-medialive-channel-inputspecification-maximumbitrate
         */
        readonly maximumBitrate?: string;
        /**
         * The resolution for any input attached to this channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputspecification.html#cfn-medialive-channel-inputspecification-resolution
         */
        readonly resolution?: string;
    }
    /**
     * The settings for the encoding of outputs.
     *
     * This entity is at the top level in the channel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html
     */
    interface EncoderSettingsProperty {
        /**
         * The encoding information for output audio.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html#cfn-medialive-channel-encodersettings-audiodescriptions
         */
        readonly audioDescriptions?: Array<CfnChannel.AudioDescriptionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The settings for ad avail blanking.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html#cfn-medialive-channel-encodersettings-availblanking
         */
        readonly availBlanking?: CfnChannel.AvailBlankingProperty | cdk.IResolvable;
        /**
         * The configuration settings for the ad avail handling.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html#cfn-medialive-channel-encodersettings-availconfiguration
         */
        readonly availConfiguration?: CfnChannel.AvailConfigurationProperty | cdk.IResolvable;
        /**
         * The settings for the blackout slate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html#cfn-medialive-channel-encodersettings-blackoutslate
         */
        readonly blackoutSlate?: CfnChannel.BlackoutSlateProperty | cdk.IResolvable;
        /**
         * The encoding information for output captions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html#cfn-medialive-channel-encodersettings-captiondescriptions
         */
        readonly captionDescriptions?: Array<CfnChannel.CaptionDescriptionProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html#cfn-medialive-channel-encodersettings-colorcorrectionsettings
         */
        readonly colorCorrectionSettings?: CfnChannel.ColorCorrectionSettingsProperty | cdk.IResolvable;
        /**
         * Settings to enable specific features.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html#cfn-medialive-channel-encodersettings-featureactivations
         */
        readonly featureActivations?: CfnChannel.FeatureActivationsProperty | cdk.IResolvable;
        /**
         * The configuration settings that apply to the entire channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html#cfn-medialive-channel-encodersettings-globalconfiguration
         */
        readonly globalConfiguration?: CfnChannel.GlobalConfigurationProperty | cdk.IResolvable;
        /**
         * Settings to enable and configure the motion graphics overlay feature in the channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html#cfn-medialive-channel-encodersettings-motiongraphicsconfiguration
         */
        readonly motionGraphicsConfiguration?: cdk.IResolvable | CfnChannel.MotionGraphicsConfigurationProperty;
        /**
         * The settings to configure Nielsen watermarks.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html#cfn-medialive-channel-encodersettings-nielsenconfiguration
         */
        readonly nielsenConfiguration?: cdk.IResolvable | CfnChannel.NielsenConfigurationProperty;
        /**
         * The settings for the output groups in the channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html#cfn-medialive-channel-encodersettings-outputgroups
         */
        readonly outputGroups?: Array<cdk.IResolvable | CfnChannel.OutputGroupProperty> | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html#cfn-medialive-channel-encodersettings-thumbnailconfiguration
         */
        readonly thumbnailConfiguration?: cdk.IResolvable | CfnChannel.ThumbnailConfigurationProperty;
        /**
         * Contains settings used to acquire and adjust timecode information from the inputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html#cfn-medialive-channel-encodersettings-timecodeconfig
         */
        readonly timecodeConfig?: cdk.IResolvable | CfnChannel.TimecodeConfigProperty;
        /**
         * The encoding information for output videos.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-encodersettings.html#cfn-medialive-channel-encodersettings-videodescriptions
         */
        readonly videoDescriptions?: Array<cdk.IResolvable | CfnChannel.VideoDescriptionProperty> | cdk.IResolvable;
    }
    /**
     * The encoding information for one output audio.
     *
     * The parent of this entity is EncoderSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html
     */
    interface AudioDescriptionProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html#cfn-medialive-channel-audiodescription-audiodashroles
         */
        readonly audioDashRoles?: Array<string>;
        /**
         * The advanced audio normalization settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html#cfn-medialive-channel-audiodescription-audionormalizationsettings
         */
        readonly audioNormalizationSettings?: CfnChannel.AudioNormalizationSettingsProperty | cdk.IResolvable;
        /**
         * The name of the AudioSelector that is used as the source for this AudioDescription.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html#cfn-medialive-channel-audiodescription-audioselectorname
         */
        readonly audioSelectorName?: string;
        /**
         * Applies only if audioTypeControl is useConfigured.
         *
         * The values for audioType are defined in ISO-IEC 13818-1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html#cfn-medialive-channel-audiodescription-audiotype
         */
        readonly audioType?: string;
        /**
         * Determines how audio type is determined.
         *
         * followInput: If the input contains an ISO 639 audioType, then that value is passed through to the output. If the input contains no ISO 639 audioType, the value in Audio Type is included in the output. useConfigured: The value in Audio Type is included in the output. Note that this field and audioType are both ignored if inputType is broadcasterMixedAd.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html#cfn-medialive-channel-audiodescription-audiotypecontrol
         */
        readonly audioTypeControl?: string;
        /**
         * Settings to configure one or more solutions that insert audio watermarks in the audio encode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html#cfn-medialive-channel-audiodescription-audiowatermarkingsettings
         */
        readonly audioWatermarkingSettings?: CfnChannel.AudioWatermarkSettingsProperty | cdk.IResolvable;
        /**
         * The audio codec settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html#cfn-medialive-channel-audiodescription-codecsettings
         */
        readonly codecSettings?: CfnChannel.AudioCodecSettingsProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html#cfn-medialive-channel-audiodescription-dvbdashaccessibility
         */
        readonly dvbDashAccessibility?: string;
        /**
         * Indicates the language of the audio output track.
         *
         * Used only if languageControlMode is useConfigured, or there is no ISO 639 language code specified in the input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html#cfn-medialive-channel-audiodescription-languagecode
         */
        readonly languageCode?: string;
        /**
         * Choosing followInput causes the ISO 639 language code of the output to follow the ISO 639 language code of the input.
         *
         * The languageCode setting is used when useConfigured is set, or when followInput is selected but there is no ISO 639 language code specified by the input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html#cfn-medialive-channel-audiodescription-languagecodecontrol
         */
        readonly languageCodeControl?: string;
        /**
         * The name of this AudioDescription.
         *
         * Outputs use this name to uniquely identify this AudioDescription. Description names should be unique within this channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html#cfn-medialive-channel-audiodescription-name
         */
        readonly name?: string;
        /**
         * The settings that control how input audio channels are remixed into the output audio channels.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html#cfn-medialive-channel-audiodescription-remixsettings
         */
        readonly remixSettings?: cdk.IResolvable | CfnChannel.RemixSettingsProperty;
        /**
         * Used for Microsoft Smooth and Apple HLS outputs.
         *
         * Indicates the name displayed by the player (for example, English or Director Commentary).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiodescription.html#cfn-medialive-channel-audiodescription-streamname
         */
        readonly streamName?: string;
    }
    /**
     * The settings for normalizing video.
     *
     * The parent of this entity is AudioDescription.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audionormalizationsettings.html
     */
    interface AudioNormalizationSettingsProperty {
        /**
         * The audio normalization algorithm to use.
         *
         * itu17701 conforms to the CALM Act specification. itu17702 conforms to the EBU R-128 specification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audionormalizationsettings.html#cfn-medialive-channel-audionormalizationsettings-algorithm
         */
        readonly algorithm?: string;
        /**
         * When set to correctAudio, the output audio is corrected using the chosen algorithm.
         *
         * If set to measureOnly, the audio is measured but not adjusted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audionormalizationsettings.html#cfn-medialive-channel-audionormalizationsettings-algorithmcontrol
         */
        readonly algorithmControl?: string;
        /**
         * The Target LKFS(loudness) to adjust volume to.
         *
         * If no value is entered, a default value is used according to the chosen algorithm. The CALM Act (1770-1) recommends a target of -24 LKFS. The EBU R-128 specification (1770-2) recommends a target of -23 LKFS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audionormalizationsettings.html#cfn-medialive-channel-audionormalizationsettings-targetlkfs
         */
        readonly targetLkfs?: number;
    }
    /**
     * The settings for remixing audio in the output.
     *
     * The parent of this entity is AudioDescription.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-remixsettings.html
     */
    interface RemixSettingsProperty {
        /**
         * A mapping of input channels to output channels, with appropriate gain adjustments.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-remixsettings.html#cfn-medialive-channel-remixsettings-channelmappings
         */
        readonly channelMappings?: Array<CfnChannel.AudioChannelMappingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The number of input channels to be used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-remixsettings.html#cfn-medialive-channel-remixsettings-channelsin
         */
        readonly channelsIn?: number;
        /**
         * The number of output channels to be produced.
         *
         * Valid values: 1, 2, 4, 6, 8.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-remixsettings.html#cfn-medialive-channel-remixsettings-channelsout
         */
        readonly channelsOut?: number;
    }
    /**
     * The settings for remixing audio.
     *
     * The parent of this entity is RemixSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiochannelmapping.html
     */
    interface AudioChannelMappingProperty {
        /**
         * The indices and gain values for each input channel that should be remixed into this output channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiochannelmapping.html#cfn-medialive-channel-audiochannelmapping-inputchannellevels
         */
        readonly inputChannelLevels?: Array<CfnChannel.InputChannelLevelProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The index of the output channel that is being produced.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiochannelmapping.html#cfn-medialive-channel-audiochannelmapping-outputchannel
         */
        readonly outputChannel?: number;
    }
    /**
     * The setting to remix the audio.
     *
     * The parent of this entity is AudioChannelMappings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputchannellevel.html
     */
    interface InputChannelLevelProperty {
        /**
         * The remixing value.
         *
         * Units are in dB, and acceptable values are within the range from -60 (mute) to 6 dB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputchannellevel.html#cfn-medialive-channel-inputchannellevel-gain
         */
        readonly gain?: number;
        /**
         * The index of the input channel that is used as a source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputchannellevel.html#cfn-medialive-channel-inputchannellevel-inputchannel
         */
        readonly inputChannel?: number;
    }
    /**
     * The configuration of the audio codec in the audio output.
     *
     * The parent of this entity is AudioDescription.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiocodecsettings.html
     */
    interface AudioCodecSettingsProperty {
        /**
         * The setup of the AAC audio codec in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiocodecsettings.html#cfn-medialive-channel-audiocodecsettings-aacsettings
         */
        readonly aacSettings?: CfnChannel.AacSettingsProperty | cdk.IResolvable;
        /**
         * The setup of an AC3 audio codec in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiocodecsettings.html#cfn-medialive-channel-audiocodecsettings-ac3settings
         */
        readonly ac3Settings?: CfnChannel.Ac3SettingsProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiocodecsettings.html#cfn-medialive-channel-audiocodecsettings-eac3atmossettings
         */
        readonly eac3AtmosSettings?: CfnChannel.Eac3AtmosSettingsProperty | cdk.IResolvable;
        /**
         * The setup of an EAC3 audio codec in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiocodecsettings.html#cfn-medialive-channel-audiocodecsettings-eac3settings
         */
        readonly eac3Settings?: CfnChannel.Eac3SettingsProperty | cdk.IResolvable;
        /**
         * The setup of an MP2 audio codec in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiocodecsettings.html#cfn-medialive-channel-audiocodecsettings-mp2settings
         */
        readonly mp2Settings?: cdk.IResolvable | CfnChannel.Mp2SettingsProperty;
        /**
         * The setup to pass through the Dolby audio codec to the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiocodecsettings.html#cfn-medialive-channel-audiocodecsettings-passthroughsettings
         */
        readonly passThroughSettings?: cdk.IResolvable | CfnChannel.PassThroughSettingsProperty;
        /**
         * Settings for audio encoded with the WAV codec.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiocodecsettings.html#cfn-medialive-channel-audiocodecsettings-wavsettings
         */
        readonly wavSettings?: cdk.IResolvable | CfnChannel.WavSettingsProperty;
    }
    /**
     * The settings for an EAC3 audio encode in the output.
     *
     * The parent of this entity is AudioCodecSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html
     */
    interface Eac3SettingsProperty {
        /**
         * When set to attenuate3Db, applies a 3 dB attenuation to the surround channels.
         *
         * Used only for the 3/2 coding mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-attenuationcontrol
         */
        readonly attenuationControl?: string;
        /**
         * The average bitrate in bits/second.
         *
         * Valid bitrates depend on the coding mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-bitrate
         */
        readonly bitrate?: number;
        /**
         * Specifies the bitstream mode (bsmod) for the emitted E-AC-3 stream.
         *
         * For more information, see ATSC A/52-2012 (Annex E).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-bitstreammode
         */
        readonly bitstreamMode?: string;
        /**
         * The Dolby Digital Plus coding mode.
         *
         * This mode determines the number of channels.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-codingmode
         */
        readonly codingMode?: string;
        /**
         * When set to enabled, activates a DC highpass filter for all input channels.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-dcfilter
         */
        readonly dcFilter?: string;
        /**
         * Sets the dialnorm for the output.
         *
         * If blank and the input audio is Dolby Digital Plus, dialnorm will be passed through.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-dialnorm
         */
        readonly dialnorm?: number;
        /**
         * Sets the Dolby dynamic range compression profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-drcline
         */
        readonly drcLine?: string;
        /**
         * Sets the profile for heavy Dolby dynamic range compression, ensuring that the instantaneous signal peaks do not exceed specified levels.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-drcrf
         */
        readonly drcRf?: string;
        /**
         * When encoding 3/2 audio, setting to lfe enables the LFE channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-lfecontrol
         */
        readonly lfeControl?: string;
        /**
         * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding.
         *
         * Valid only with a codingMode32 coding mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-lfefilter
         */
        readonly lfeFilter?: string;
        /**
         * The Left only/Right only center mix level.
         *
         * Used only for the 3/2 coding mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-lorocentermixlevel
         */
        readonly loRoCenterMixLevel?: number;
        /**
         * The Left only/Right only surround mix level.
         *
         * Used only for a 3/2 coding mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-lorosurroundmixlevel
         */
        readonly loRoSurroundMixLevel?: number;
        /**
         * The Left total/Right total center mix level.
         *
         * Used only for a 3/2 coding mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-ltrtcentermixlevel
         */
        readonly ltRtCenterMixLevel?: number;
        /**
         * The Left total/Right total surround mix level.
         *
         * Used only for the 3/2 coding mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-ltrtsurroundmixlevel
         */
        readonly ltRtSurroundMixLevel?: number;
        /**
         * When set to followInput, encoder metadata is sourced from the DD, DD+, or DolbyE decoder that supplies this audio data.
         *
         * If the audio is not supplied from one of these streams, then the static metadata settings are used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-metadatacontrol
         */
        readonly metadataControl?: string;
        /**
         * When set to whenPossible, input DD+ audio will be passed through if it is present on the input.
         *
         * This detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-passthroughcontrol
         */
        readonly passthroughControl?: string;
        /**
         * When set to shift90Degrees, applies a 90-degree phase shift to the surround channels.
         *
         * Used only for a 3/2 coding mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-phasecontrol
         */
        readonly phaseControl?: string;
        /**
         * A stereo downmix preference.
         *
         * Used only for the 3/2 coding mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-stereodownmix
         */
        readonly stereoDownmix?: string;
        /**
         * When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-surroundexmode
         */
        readonly surroundExMode?: string;
        /**
         * When encoding 2/0 audio, sets whether Dolby Surround is matrix-encoded into the two channels.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3settings.html#cfn-medialive-channel-eac3settings-surroundmode
         */
        readonly surroundMode?: string;
    }
    /**
     * The settings for an AC3 audio encode in the output.
     *
     * The parent of this entity is AudioCodecSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ac3settings.html
     */
    interface Ac3SettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ac3settings.html#cfn-medialive-channel-ac3settings-attenuationcontrol
         */
        readonly attenuationControl?: string;
        /**
         * The average bitrate in bits/second.
         *
         * Valid bitrates depend on the coding mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ac3settings.html#cfn-medialive-channel-ac3settings-bitrate
         */
        readonly bitrate?: number;
        /**
         * Specifies the bitstream mode (bsmod) for the emitted AC-3 stream.
         *
         * For more information about these values, see ATSC A/52-2012.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ac3settings.html#cfn-medialive-channel-ac3settings-bitstreammode
         */
        readonly bitstreamMode?: string;
        /**
         * The Dolby Digital coding mode.
         *
         * This determines the number of channels.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ac3settings.html#cfn-medialive-channel-ac3settings-codingmode
         */
        readonly codingMode?: string;
        /**
         * Sets the dialnorm for the output.
         *
         * If excluded and the input audio is Dolby Digital, dialnorm is passed through.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ac3settings.html#cfn-medialive-channel-ac3settings-dialnorm
         */
        readonly dialnorm?: number;
        /**
         * If set to filmStandard, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ac3settings.html#cfn-medialive-channel-ac3settings-drcprofile
         */
        readonly drcProfile?: string;
        /**
         * When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding.
         *
         * This is valid only in codingMode32Lfe mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ac3settings.html#cfn-medialive-channel-ac3settings-lfefilter
         */
        readonly lfeFilter?: string;
        /**
         * When set to followInput, encoder metadata is sourced from the DD, DD+, or DolbyE decoder that supplies this audio data.
         *
         * If the audio is supplied from one of these streams, the static metadata settings are used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ac3settings.html#cfn-medialive-channel-ac3settings-metadatacontrol
         */
        readonly metadataControl?: string;
    }
    /**
     * The configuration for this MP2 audio.
     *
     * The parent of this entity is AudioCodecSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mp2settings.html
     */
    interface Mp2SettingsProperty {
        /**
         * The average bitrate in bits/second.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mp2settings.html#cfn-medialive-channel-mp2settings-bitrate
         */
        readonly bitrate?: number;
        /**
         * The MPEG2 Audio coding mode.
         *
         * Valid values are codingMode10 (for mono) or codingMode20 (for stereo).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mp2settings.html#cfn-medialive-channel-mp2settings-codingmode
         */
        readonly codingMode?: string;
        /**
         * The sample rate in Hz.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mp2settings.html#cfn-medialive-channel-mp2settings-samplerate
         */
        readonly sampleRate?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3atmossettings.html
     */
    interface Eac3AtmosSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3atmossettings.html#cfn-medialive-channel-eac3atmossettings-bitrate
         */
        readonly bitrate?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3atmossettings.html#cfn-medialive-channel-eac3atmossettings-codingmode
         */
        readonly codingMode?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3atmossettings.html#cfn-medialive-channel-eac3atmossettings-dialnorm
         */
        readonly dialnorm?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3atmossettings.html#cfn-medialive-channel-eac3atmossettings-drcline
         */
        readonly drcLine?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3atmossettings.html#cfn-medialive-channel-eac3atmossettings-drcrf
         */
        readonly drcRf?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3atmossettings.html#cfn-medialive-channel-eac3atmossettings-heighttrim
         */
        readonly heightTrim?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-eac3atmossettings.html#cfn-medialive-channel-eac3atmossettings-surroundtrim
         */
        readonly surroundTrim?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-passthroughsettings.html
     */
    interface PassThroughSettingsProperty {
    }
    /**
     * The setup of WAV audio in the output.
     *
     * The parent of this entity is AudioCodecSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-wavsettings.html
     */
    interface WavSettingsProperty {
        /**
         * Bits per sample.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-wavsettings.html#cfn-medialive-channel-wavsettings-bitdepth
         */
        readonly bitDepth?: number;
        /**
         * The audio coding mode for the WAV audio.
         *
         * The mode determines the number of channels in the audio.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-wavsettings.html#cfn-medialive-channel-wavsettings-codingmode
         */
        readonly codingMode?: string;
        /**
         * Sample rate in Hz.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-wavsettings.html#cfn-medialive-channel-wavsettings-samplerate
         */
        readonly sampleRate?: number;
    }
    /**
     * The settings for an AAC audio encode in the output.
     *
     * The parent of this entity is AudioCodecSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aacsettings.html
     */
    interface AacSettingsProperty {
        /**
         * The average bitrate in bits/second.
         *
         * Valid values depend on the rate control mode and profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aacsettings.html#cfn-medialive-channel-aacsettings-bitrate
         */
        readonly bitrate?: number;
        /**
         * Mono, stereo, or 5.1 channel layout. Valid values depend on the rate control mode and profile. The adReceiverMix setting receives a stereo description plus control track, and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aacsettings.html#cfn-medialive-channel-aacsettings-codingmode
         */
        readonly codingMode?: string;
        /**
         * Set to broadcasterMixedAd when the input contains pre-mixed main audio + AD (narration) as a stereo pair.
         *
         * The Audio Type field (audioType) will be set to 3, which signals to downstream systems that this stream contains broadcaster mixed AD. Note that the input received by the encoder must contain pre-mixed audio; MediaLive does not perform the mixing. The values in audioTypeControl and audioType (in AudioDescription) are ignored when set to broadcasterMixedAd. Leave this set to normal when the input does not contain pre-mixed audio + AD.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aacsettings.html#cfn-medialive-channel-aacsettings-inputtype
         */
        readonly inputType?: string;
        /**
         * The AAC profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aacsettings.html#cfn-medialive-channel-aacsettings-profile
         */
        readonly profile?: string;
        /**
         * The rate control mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aacsettings.html#cfn-medialive-channel-aacsettings-ratecontrolmode
         */
        readonly rateControlMode?: string;
        /**
         * Sets the LATM/LOAS AAC output for raw containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aacsettings.html#cfn-medialive-channel-aacsettings-rawformat
         */
        readonly rawFormat?: string;
        /**
         * The sample rate in Hz.
         *
         * Valid values depend on the rate control mode and profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aacsettings.html#cfn-medialive-channel-aacsettings-samplerate
         */
        readonly sampleRate?: number;
        /**
         * Uses MPEG-2 AAC audio instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aacsettings.html#cfn-medialive-channel-aacsettings-spec
         */
        readonly spec?: string;
        /**
         * The VBR quality level.
         *
         * This is used only if rateControlMode is VBR.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aacsettings.html#cfn-medialive-channel-aacsettings-vbrquality
         */
        readonly vbrQuality?: string;
    }
    /**
     * Audio Watermark Settings.
     *
     * The parent of this entity is AudioDescription.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiowatermarksettings.html
     */
    interface AudioWatermarkSettingsProperty {
        /**
         * Settings to configure Nielsen Watermarks in the audio encode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audiowatermarksettings.html#cfn-medialive-channel-audiowatermarksettings-nielsenwatermarkssettings
         */
        readonly nielsenWatermarksSettings?: cdk.IResolvable | CfnChannel.NielsenWatermarksSettingsProperty;
    }
    /**
     * Settings to configure Nielsen Watermarks in the audio encode.
     *
     * The parent of this entity is AudioWatermarkSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsenwatermarkssettings.html
     */
    interface NielsenWatermarksSettingsProperty {
        /**
         * Complete these fields only if you want to insert watermarks of type Nielsen CBET.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsenwatermarkssettings.html#cfn-medialive-channel-nielsenwatermarkssettings-nielsencbetsettings
         */
        readonly nielsenCbetSettings?: cdk.IResolvable | CfnChannel.NielsenCBETProperty;
        /**
         * Choose the distribution types that you want to assign to the watermarks: - PROGRAM_CONTENT - FINAL_DISTRIBUTOR.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsenwatermarkssettings.html#cfn-medialive-channel-nielsenwatermarkssettings-nielsendistributiontype
         */
        readonly nielsenDistributionType?: string;
        /**
         * Complete these fields only if you want to insert watermarks of type Nielsen NAES II (N2) and Nielsen NAES VI (NW).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsenwatermarkssettings.html#cfn-medialive-channel-nielsenwatermarkssettings-nielsennaesiinwsettings
         */
        readonly nielsenNaesIiNwSettings?: cdk.IResolvable | CfnChannel.NielsenNaesIiNwProperty;
    }
    /**
     * Complete these fields only if you want to insert watermarks of type Nielsen CBET.
     *
     * The parent of this entity is NielsenWatermarksSettings
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsencbet.html
     */
    interface NielsenCBETProperty {
        /**
         * Enter the CBET check digits to use in the watermark.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsencbet.html#cfn-medialive-channel-nielsencbet-cbetcheckdigitstring
         */
        readonly cbetCheckDigitString?: string;
        /**
         * Determines the method of CBET insertion mode when prior encoding is detected on the same layer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsencbet.html#cfn-medialive-channel-nielsencbet-cbetstepaside
         */
        readonly cbetStepaside?: string;
        /**
         * Enter the CBET Source ID (CSID) to use in the watermark.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsencbet.html#cfn-medialive-channel-nielsencbet-csid
         */
        readonly csid?: string;
    }
    /**
     * Complete these fields only if you want to insert watermarks of type Nielsen NAES II (N2) and Nielsen NAES VI (NW).
     *
     * The parent of this entity is NielsenWatermarksSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsennaesiinw.html
     */
    interface NielsenNaesIiNwProperty {
        /**
         * Enter the check digit string for the watermark.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsennaesiinw.html#cfn-medialive-channel-nielsennaesiinw-checkdigitstring
         */
        readonly checkDigitString?: string;
        /**
         * Enter the Nielsen Source ID (SID) to include in the watermark.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsennaesiinw.html#cfn-medialive-channel-nielsennaesiinw-sid
         */
        readonly sid?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsennaesiinw.html#cfn-medialive-channel-nielsennaesiinw-timezone
         */
        readonly timezone?: string;
    }
    /**
     * Encoding information for one output video.
     *
     * The parent of this entity is EncoderSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videodescription.html
     */
    interface VideoDescriptionProperty {
        /**
         * The video codec settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videodescription.html#cfn-medialive-channel-videodescription-codecsettings
         */
        readonly codecSettings?: cdk.IResolvable | CfnChannel.VideoCodecSettingsProperty;
        /**
         * The output video height, in pixels.
         *
         * This must be an even number. For most codecs, you can keep this field and width blank in order to use the height and width (resolution) from the source. Note that we don't recommend keeping the field blank. For the Frame Capture codec, height and width are required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videodescription.html#cfn-medialive-channel-videodescription-height
         */
        readonly height?: number;
        /**
         * The name of this VideoDescription.
         *
         * Outputs use this name to uniquely identify this description. Description names should be unique within this channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videodescription.html#cfn-medialive-channel-videodescription-name
         */
        readonly name?: string;
        /**
         * Indicates how to respond to the AFD values in the input stream.
         *
         * RESPOND causes input video to be clipped, depending on the AFD value, input display aspect ratio, and output display aspect ratio, and (except for the FRAMECAPTURE codec) includes the values in the output. PASSTHROUGH (does not apply to FRAMECAPTURE codec) ignores the AFD values and includes the values in the output, so input video is not clipped. NONE ignores the AFD values and does not include the values through to the output, so input video is not clipped.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videodescription.html#cfn-medialive-channel-videodescription-respondtoafd
         */
        readonly respondToAfd?: string;
        /**
         * STRETCHTOOUTPUT configures the output position to stretch the video to the specified output resolution (height and width).
         *
         * This option overrides any position value. DEFAULT might insert black boxes (pillar boxes or letter boxes) around the video to provide the specified output resolution.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videodescription.html#cfn-medialive-channel-videodescription-scalingbehavior
         */
        readonly scalingBehavior?: string;
        /**
         * Changes the strength of the anti-alias filter used for scaling.
         *
         * 0 is the softest setting, and 100 is the sharpest. We recommend a setting of 50 for most content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videodescription.html#cfn-medialive-channel-videodescription-sharpness
         */
        readonly sharpness?: number;
        /**
         * The output video width, in pixels.
         *
         * It must be an even number. For most codecs, you can keep this field and height blank in order to use the height and width (resolution) from the source. Note that we don't recommend keeping the field blank. For the Frame Capture codec, height and width are required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videodescription.html#cfn-medialive-channel-videodescription-width
         */
        readonly width?: number;
    }
    /**
     * The settings for the video codec in the output.
     *
     * The parent of this entity is VideoDescription.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videocodecsettings.html
     */
    interface VideoCodecSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videocodecsettings.html#cfn-medialive-channel-videocodecsettings-av1settings
         */
        readonly av1Settings?: CfnChannel.Av1SettingsProperty | cdk.IResolvable;
        /**
         * The settings for the video codec in a frame capture output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videocodecsettings.html#cfn-medialive-channel-videocodecsettings-framecapturesettings
         */
        readonly frameCaptureSettings?: CfnChannel.FrameCaptureSettingsProperty | cdk.IResolvable;
        /**
         * The settings for the H.264 codec in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videocodecsettings.html#cfn-medialive-channel-videocodecsettings-h264settings
         */
        readonly h264Settings?: CfnChannel.H264SettingsProperty | cdk.IResolvable;
        /**
         * Settings for video encoded with the H265 codec.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videocodecsettings.html#cfn-medialive-channel-videocodecsettings-h265settings
         */
        readonly h265Settings?: CfnChannel.H265SettingsProperty | cdk.IResolvable;
        /**
         * Settings for video encoded with the MPEG-2 codec.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-videocodecsettings.html#cfn-medialive-channel-videocodecsettings-mpeg2settings
         */
        readonly mpeg2Settings?: cdk.IResolvable | CfnChannel.Mpeg2SettingsProperty;
    }
    /**
     * The settings for the MPEG-2 codec in the output.
     *
     * The parent of this entity is VideoCodecSetting.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html
     */
    interface Mpeg2SettingsProperty {
        /**
         * Choose Off to disable adaptive quantization.
         *
         * Or choose another value to enable the quantizer and set its strength. The strengths are: Auto, Off, Low, Medium, High. When you enable this field, MediaLive allows intra-frame quantizers to vary, which might improve visual quality.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-adaptivequantization
         */
        readonly adaptiveQuantization?: string;
        /**
         * Indicates the AFD values that MediaLive will write into the video encode.
         *
         * If you do not know what AFD signaling is, or if your downstream system has not given you guidance, choose AUTO.
         * AUTO: MediaLive will try to preserve the input AFD value (in cases where multiple AFD values are valid).
         * FIXED: MediaLive will use the value you specify in fixedAFD.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-afdsignaling
         */
        readonly afdSignaling?: string;
        /**
         * Specifies whether to include the color space metadata.
         *
         * The metadata describes the color space that applies to the video (the colorSpace field). We recommend that you insert the metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-colormetadata
         */
        readonly colorMetadata?: string;
        /**
         * Choose the type of color space conversion to apply to the output.
         *
         * For detailed information on setting up both the input and the output to obtain the desired color space in the output, see the section on \"MediaLive Features - Video - color space\" in the MediaLive User Guide.
         * PASSTHROUGH: Keep the color space of the input content - do not convert it.
         * AUTO:Convert all content that is SD to rec 601, and convert all content that is HD to rec 709.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-colorspace
         */
        readonly colorSpace?: string;
        /**
         * Sets the pixel aspect ratio for the encode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-displayaspectratio
         */
        readonly displayAspectRatio?: string;
        /**
         * Optionally specify a noise reduction filter, which can improve quality of compressed content.
         *
         * If you do not choose a filter, no filter will be applied.
         * TEMPORAL: This filter is useful for both source content that is noisy (when it has excessive digital artifacts) and source content that is clean.
         * When the content is noisy, the filter cleans up the source content before the encoding phase, with these two effects: First, it improves the output video quality because the content has been cleaned up. Secondly, it decreases the bandwidth because MediaLive does not waste bits on encoding noise.
         * When the content is reasonably clean, the filter tends to decrease the bitrate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-filtersettings
         */
        readonly filterSettings?: cdk.IResolvable | CfnChannel.Mpeg2FilterSettingsProperty;
        /**
         * Complete this field only when afdSignaling is set to FIXED.
         *
         * Enter the AFD value (4 bits) to write on all frames of the video encode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-fixedafd
         */
        readonly fixedAfd?: string;
        /**
         * description": "The framerate denominator.
         *
         * For example, 1001. The framerate is the numerator divided by the denominator. For example, 24000 / 1001 = 23.976 FPS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-frameratedenominator
         */
        readonly framerateDenominator?: number;
        /**
         * The framerate numerator.
         *
         * For example, 24000. The framerate is the numerator divided by the denominator. For example, 24000 / 1001 = 23.976 FPS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-frameratenumerator
         */
        readonly framerateNumerator?: number;
        /**
         * MPEG2: default is open GOP.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-gopclosedcadence
         */
        readonly gopClosedCadence?: number;
        /**
         * Relates to the GOP structure.
         *
         * The number of B-frames between reference frames. If you do not know what a B-frame is, use the default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-gopnumbframes
         */
        readonly gopNumBFrames?: number;
        /**
         * Relates to the GOP structure.
         *
         * The GOP size (keyframe interval) in the units specified in gopSizeUnits. If you do not know what GOP is, use the default.
         * If gopSizeUnits is frames, then the gopSize must be an integer and must be greater than or equal to 1.
         * If gopSizeUnits is seconds, the gopSize must be greater than 0, but does not need to be an integer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-gopsize
         */
        readonly gopSize?: number;
        /**
         * Relates to the GOP structure.
         *
         * Specifies whether the gopSize is specified in frames or seconds. If you do not plan to change the default gopSize, leave the default. If you specify SECONDS, MediaLive will internally convert the gop size to a frame count.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-gopsizeunits
         */
        readonly gopSizeUnits?: string;
        /**
         * Set the scan type of the output to PROGRESSIVE or INTERLACED (top field first).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-scantype
         */
        readonly scanType?: string;
        /**
         * Relates to the GOP structure.
         *
         * If you do not know what GOP is, use the default.
         * FIXED: Set the number of B-frames in each sub-GOP to the value in gopNumBFrames.
         * DYNAMIC: Let MediaLive optimize the number of B-frames in each sub-GOP, to improve visual quality.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-subgoplength
         */
        readonly subgopLength?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-timecodeburninsettings
         */
        readonly timecodeBurninSettings?: cdk.IResolvable | CfnChannel.TimecodeBurninSettingsProperty;
        /**
         * Determines how MediaLive inserts timecodes in the output video.
         *
         * For detailed information about setting up the input and the output for a timecode, see the section on \"MediaLive Features - Timecode configuration\" in the MediaLive User Guide.
         * DISABLED: do not include timecodes.
         * GOP_TIMECODE: Include timecode metadata in the GOP header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2settings.html#cfn-medialive-channel-mpeg2settings-timecodeinsertion
         */
        readonly timecodeInsertion?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-timecodeburninsettings.html
     */
    interface TimecodeBurninSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-timecodeburninsettings.html#cfn-medialive-channel-timecodeburninsettings-fontsize
         */
        readonly fontSize?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-timecodeburninsettings.html#cfn-medialive-channel-timecodeburninsettings-position
         */
        readonly position?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-timecodeburninsettings.html#cfn-medialive-channel-timecodeburninsettings-prefix
         */
        readonly prefix?: string;
    }
    /**
     * Settings to configure video filters that apply to the MPEG-2 codec.
     *
     * The parent of this entity is Mpeg2FilterSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2filtersettings.html
     */
    interface Mpeg2FilterSettingsProperty {
        /**
         * Settings for applying the temporal filter to the video.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mpeg2filtersettings.html#cfn-medialive-channel-mpeg2filtersettings-temporalfiltersettings
         */
        readonly temporalFilterSettings?: cdk.IResolvable | CfnChannel.TemporalFilterSettingsProperty;
    }
    /**
     * Settings for the temporal filter to apply to the video.
     *
     * The parents of this entity are H264FilterSettings, H265FilterSettings, and Mpeg2FilterSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-temporalfiltersettings.html
     */
    interface TemporalFilterSettingsProperty {
        /**
         * If you enable this filter, the results are the following: - If the source content is noisy (it contains excessive digital artifacts), the filter cleans up the source.
         *
         * - If the source content is already clean, the filter tends to decrease the bitrate, especially when the rate control mode is QVBR.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-temporalfiltersettings.html#cfn-medialive-channel-temporalfiltersettings-postfiltersharpening
         */
        readonly postFilterSharpening?: string;
        /**
         * Choose a filter strength.
         *
         * We recommend a strength of 1 or 2. A higher strength might take out good information, resulting in an image that is overly soft.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-temporalfiltersettings.html#cfn-medialive-channel-temporalfiltersettings-strength
         */
        readonly strength?: string;
    }
    /**
     * The frame capture settings.
     *
     * The parent of this entity is VideoCodecSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturesettings.html
     */
    interface FrameCaptureSettingsProperty {
        /**
         * The frequency, in seconds, for capturing frames for inclusion in the output.
         *
         * For example, "10" means capture a frame every 10 seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturesettings.html#cfn-medialive-channel-framecapturesettings-captureinterval
         */
        readonly captureInterval?: number;
        /**
         * Unit for the frame capture interval.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturesettings.html#cfn-medialive-channel-framecapturesettings-captureintervalunits
         */
        readonly captureIntervalUnits?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturesettings.html#cfn-medialive-channel-framecapturesettings-timecodeburninsettings
         */
        readonly timecodeBurninSettings?: cdk.IResolvable | CfnChannel.TimecodeBurninSettingsProperty;
    }
    /**
     * The settings for the H.264 codec in the output.
     *
     * The parent of this entity is VideoCodecSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html
     */
    interface H264SettingsProperty {
        /**
         * The adaptive quantization.
         *
         * This allows intra-frame quantizers to vary to improve visual quality.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-adaptivequantization
         */
        readonly adaptiveQuantization?: string;
        /**
         * Indicates that AFD values will be written into the output stream.
         *
         * If afdSignaling is auto, the system tries to preserve the input AFD value (in cases where multiple AFD values are valid). If set to fixed, the AFD value is the value configured in the fixedAfd parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-afdsignaling
         */
        readonly afdSignaling?: string;
        /**
         * The average bitrate in bits/second.
         *
         * This is required when the rate control mode is VBR or CBR. It isn't used for QVBR. In a Microsoft Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-bitrate
         */
        readonly bitrate?: number;
        /**
         * The percentage of the buffer that should initially be filled (HRD buffer model).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-buffillpct
         */
        readonly bufFillPct?: number;
        /**
         * The size of the buffer (HRD buffer model) in bits/second.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-bufsize
         */
        readonly bufSize?: number;
        /**
         * Includes color space metadata in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-colormetadata
         */
        readonly colorMetadata?: string;
        /**
         * Settings to configure the color space handling for the video.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-colorspacesettings
         */
        readonly colorSpaceSettings?: CfnChannel.H264ColorSpaceSettingsProperty | cdk.IResolvable;
        /**
         * The entropy encoding mode.
         *
         * Use cabac (must be in Main or High profile) or cavlc.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-entropyencoding
         */
        readonly entropyEncoding?: string;
        /**
         * Optional filters that you can apply to an encode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-filtersettings
         */
        readonly filterSettings?: CfnChannel.H264FilterSettingsProperty | cdk.IResolvable;
        /**
         * A four-bit AFD value to write on all frames of video in the output stream.
         *
         * Valid only when afdSignaling is set to Fixed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-fixedafd
         */
        readonly fixedAfd?: string;
        /**
         * If set to enabled, adjusts the quantization within each frame to reduce flicker or pop on I-frames.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-flickeraq
         */
        readonly flickerAq?: string;
        /**
         * This setting applies only when scan type is "interlaced." It controls whether coding is performed on a field basis or on a frame basis. (When the video is progressive, the coding is always performed on a frame basis.) enabled: Force MediaLive to code on a field basis, so that odd and even sets of fields are coded separately. disabled: Code the two sets of fields separately (on a field basis) or together (on a frame basis using PAFF), depending on what is most appropriate for the content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-forcefieldpictures
         */
        readonly forceFieldPictures?: string;
        /**
         * Indicates how the output video frame rate is specified.
         *
         * If you select "specified," the output video frame rate is determined by framerateNumerator and framerateDenominator. If you select "initializeFromSource," the output video frame rate is set equal to the input video frame rate of the first input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-frameratecontrol
         */
        readonly framerateControl?: string;
        /**
         * The frame rate denominator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-frameratedenominator
         */
        readonly framerateDenominator?: number;
        /**
         * The frame rate numerator.
         *
         * The frame rate is a fraction, for example, 24000/1001 = 23.976 fps.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-frameratenumerator
         */
        readonly framerateNumerator?: number;
        /**
         * If enabled, uses reference B frames for GOP structures that have B frames > 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-gopbreference
         */
        readonly gopBReference?: string;
        /**
         * The frequency of closed GOPs.
         *
         * In streaming applications, we recommend that you set this to 1 so that a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-gopclosedcadence
         */
        readonly gopClosedCadence?: number;
        /**
         * The number of B-frames between reference frames.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-gopnumbframes
         */
        readonly gopNumBFrames?: number;
        /**
         * The GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.
         *
         * The value must be greater than zero.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-gopsize
         */
        readonly gopSize?: number;
        /**
         * Indicates if the gopSize is specified in frames or seconds.
         *
         * If seconds, the system converts the gopSize into a frame count at runtime.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-gopsizeunits
         */
        readonly gopSizeUnits?: string;
        /**
         * The H.264 level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-level
         */
        readonly level?: string;
        /**
         * The amount of lookahead.
         *
         * A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-lookaheadratecontrol
         */
        readonly lookAheadRateControl?: string;
        /**
         * For QVBR: See the tooltip for Quality level.
         *
         * For VBR: Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-maxbitrate
         */
        readonly maxBitrate?: number;
        /**
         * Meaningful only if sceneChangeDetect is set to enabled.
         *
         * This setting enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting the I-interval. The normal cadence resumes for the next GOP. Note that the maximum GOP stretch = GOP size + Min-I-interval - 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-miniinterval
         */
        readonly minIInterval?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-minqp
         */
        readonly minQp?: number;
        /**
         * The number of reference frames to use.
         *
         * The encoder might use more than requested if you use B-frames or interlaced encoding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-numrefframes
         */
        readonly numRefFrames?: number;
        /**
         * Indicates how the output pixel aspect ratio is specified.
         *
         * If "specified" is selected, the output video pixel aspect ratio is determined by parNumerator and parDenominator. If "initializeFromSource" is selected, the output pixels aspect ratio will be set equal to the input video pixel aspect ratio of the first input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-parcontrol
         */
        readonly parControl?: string;
        /**
         * The Pixel Aspect Ratio denominator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-pardenominator
         */
        readonly parDenominator?: number;
        /**
         * The Pixel Aspect Ratio numerator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-parnumerator
         */
        readonly parNumerator?: number;
        /**
         * An H.264 profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-profile
         */
        readonly profile?: string;
        /**
         * Leave as STANDARD_QUALITY or choose a different value (which might result in additional costs to run the channel).
         *
         * - ENHANCED_QUALITY: Produces a slightly better video quality without an increase in the bitrate. Has an effect only when the Rate control mode is QVBR or CBR. If this channel is in a MediaLive multiplex, the value must be ENHANCED_QUALITY.
         * - STANDARD_QUALITY: Valid for any Rate control mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-qualitylevel
         */
        readonly qualityLevel?: string;
        /**
         * Controls the target quality for the video encode.
         *
         * This applies only when the rate control mode is QVBR. Set values for the QVBR quality level field and Max bitrate field that suit your most important viewing devices. Recommended values are: - Primary screen: Quality level: 8 to 10. Max bitrate: 4M - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-qvbrqualitylevel
         */
        readonly qvbrQualityLevel?: number;
        /**
         * The rate control mode.
         *
         * QVBR: The quality will match the specified quality level except when it is constrained by the maximum bitrate. We recommend this if you or your viewers pay for bandwidth. VBR: The quality and bitrate vary, depending on the video complexity. We recommend this instead of QVBR if you want to maintain a specific average bitrate over the duration of the channel. CBR: The quality varies, depending on the video complexity. We recommend this only if you distribute your assets to devices that can't handle variable bitrates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-ratecontrolmode
         */
        readonly rateControlMode?: string;
        /**
         * Sets the scan type of the output to progressive or top-field-first interlaced.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-scantype
         */
        readonly scanType?: string;
        /**
         * The scene change detection.
         *
         * On: inserts I-frames when the scene change is detected. Off: does not force an I-frame when the scene change is detected.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-scenechangedetect
         */
        readonly sceneChangeDetect?: string;
        /**
         * The number of slices per picture.
         *
         * The number must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures. This field is optional. If you don't specify a value, MediaLive chooses the number of slices based on the encode resolution.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-slices
         */
        readonly slices?: number;
        /**
         * Softness.
         *
         * Selects a quantizer matrix. Larger values reduce high-frequency content in the encoded image.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-softness
         */
        readonly softness?: number;
        /**
         * If set to enabled, adjusts quantization within each frame based on the spatial variation of content complexity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-spatialaq
         */
        readonly spatialAq?: string;
        /**
         * If set to fixed, uses gopNumBFrames B-frames per sub-GOP.
         *
         * If set to dynamic, optimizes the number of B-frames used for each sub-GOP to improve visual quality.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-subgoplength
         */
        readonly subgopLength?: string;
        /**
         * Produces a bitstream that is compliant with SMPTE RP-2027.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-syntax
         */
        readonly syntax?: string;
        /**
         * If set to enabled, adjusts quantization within each frame based on the temporal variation of content complexity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-temporalaq
         */
        readonly temporalAq?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-timecodeburninsettings
         */
        readonly timecodeBurninSettings?: cdk.IResolvable | CfnChannel.TimecodeBurninSettingsProperty;
        /**
         * Determines how timecodes should be inserted into the video elementary stream.
         *
         * disabled: don't include timecodes. picTimingSei: pass through picture timing SEI messages from the source specified in Timecode Config.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264settings.html#cfn-medialive-channel-h264settings-timecodeinsertion
         */
        readonly timecodeInsertion?: string;
    }
    /**
     * Settings to configure video filters that apply to the H264 codec.
     *
     * The parent of this entity is H264Settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264filtersettings.html
     */
    interface H264FilterSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264filtersettings.html#cfn-medialive-channel-h264filtersettings-bandwidthreductionfiltersettings
         */
        readonly bandwidthReductionFilterSettings?: CfnChannel.BandwidthReductionFilterSettingsProperty | cdk.IResolvable;
        /**
         * Settings for applying the temporal filter to the video.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264filtersettings.html#cfn-medialive-channel-h264filtersettings-temporalfiltersettings
         */
        readonly temporalFilterSettings?: cdk.IResolvable | CfnChannel.TemporalFilterSettingsProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-bandwidthreductionfiltersettings.html
     */
    interface BandwidthReductionFilterSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-bandwidthreductionfiltersettings.html#cfn-medialive-channel-bandwidthreductionfiltersettings-postfiltersharpening
         */
        readonly postFilterSharpening?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-bandwidthreductionfiltersettings.html#cfn-medialive-channel-bandwidthreductionfiltersettings-strength
         */
        readonly strength?: string;
    }
    /**
     * Settings for configuring color space in an H264 video encode.
     *
     * The parent of this entity is H264Settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264colorspacesettings.html
     */
    interface H264ColorSpaceSettingsProperty {
        /**
         * Passthrough applies no color space conversion to the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264colorspacesettings.html#cfn-medialive-channel-h264colorspacesettings-colorspacepassthroughsettings
         */
        readonly colorSpacePassthroughSettings?: CfnChannel.ColorSpacePassthroughSettingsProperty | cdk.IResolvable;
        /**
         * Settings to configure the handling of Rec601 color space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264colorspacesettings.html#cfn-medialive-channel-h264colorspacesettings-rec601settings
         */
        readonly rec601Settings?: cdk.IResolvable | CfnChannel.Rec601SettingsProperty;
        /**
         * Settings to configure the handling of Rec709 color space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h264colorspacesettings.html#cfn-medialive-channel-h264colorspacesettings-rec709settings
         */
        readonly rec709Settings?: cdk.IResolvable | CfnChannel.Rec709SettingsProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rec601settings.html
     */
    interface Rec601SettingsProperty {
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rec709settings.html
     */
    interface Rec709SettingsProperty {
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-colorspacepassthroughsettings.html
     */
    interface ColorSpacePassthroughSettingsProperty {
    }
    /**
     * H265 Settings.
     *
     * The parent of this entity is VideoCodecSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html
     */
    interface H265SettingsProperty {
        /**
         * Adaptive quantization.
         *
         * Allows intra-frame quantizers to vary to improve visual quality.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-adaptivequantization
         */
        readonly adaptiveQuantization?: string;
        /**
         * Indicates that AFD values will be written into the output stream.
         *
         * If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-afdsignaling
         */
        readonly afdSignaling?: string;
        /**
         * Whether or not EML should insert an Alternative Transfer Function SEI message to support backwards compatibility with non-HDR decoders and displays.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-alternativetransferfunction
         */
        readonly alternativeTransferFunction?: string;
        /**
         * Average bitrate in bits/second.
         *
         * Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-bitrate
         */
        readonly bitrate?: number;
        /**
         * Size of buffer (HRD buffer model) in bits.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-bufsize
         */
        readonly bufSize?: number;
        /**
         * Includes colorspace metadata in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-colormetadata
         */
        readonly colorMetadata?: string;
        /**
         * Color Space settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-colorspacesettings
         */
        readonly colorSpaceSettings?: CfnChannel.H265ColorSpaceSettingsProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-deblocking
         */
        readonly deblocking?: string;
        /**
         * Optional filters that you can apply to an encode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-filtersettings
         */
        readonly filterSettings?: CfnChannel.H265FilterSettingsProperty | cdk.IResolvable;
        /**
         * Four bit AFD value to write on all frames of video in the output stream.
         *
         * Only valid when afdSignaling is set to 'Fixed'.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-fixedafd
         */
        readonly fixedAfd?: string;
        /**
         * If set to enabled, adjust quantization within each frame to reduce flicker or 'pop' on I-frames.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-flickeraq
         */
        readonly flickerAq?: string;
        /**
         * Framerate denominator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-frameratedenominator
         */
        readonly framerateDenominator?: number;
        /**
         * Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-frameratenumerator
         */
        readonly framerateNumerator?: number;
        /**
         * Frequency of closed GOPs.
         *
         * In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-gopclosedcadence
         */
        readonly gopClosedCadence?: number;
        /**
         * GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.
         *
         * If gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.
         * If gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-gopsize
         */
        readonly gopSize?: number;
        /**
         * Indicates if the gopSize is specified in frames or seconds.
         *
         * If seconds the system will convert the gopSize into a frame count at run time.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-gopsizeunits
         */
        readonly gopSizeUnits?: string;
        /**
         * H.265 Level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-level
         */
        readonly level?: string;
        /**
         * Amount of lookahead.
         *
         * A value of low can decrease latency and memory usage, while high can produce better quality for certain content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-lookaheadratecontrol
         */
        readonly lookAheadRateControl?: string;
        /**
         * For QVBR: See the tooltip for Quality level.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-maxbitrate
         */
        readonly maxBitrate?: number;
        /**
         * Only meaningful if sceneChangeDetect is set to enabled.
         *
         * Defaults to 5 if multiplex rate control is used. Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-miniinterval
         */
        readonly minIInterval?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-minqp
         */
        readonly minQp?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-mvoverpictureboundaries
         */
        readonly mvOverPictureBoundaries?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-mvtemporalpredictor
         */
        readonly mvTemporalPredictor?: string;
        /**
         * Pixel Aspect Ratio denominator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-pardenominator
         */
        readonly parDenominator?: number;
        /**
         * Pixel Aspect Ratio numerator.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-parnumerator
         */
        readonly parNumerator?: number;
        /**
         * H.265 Profile.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-profile
         */
        readonly profile?: string;
        /**
         * Controls the target quality for the video encode.
         *
         * Applies only when the rate control mode is QVBR. Set values for the QVBR quality level field and Max bitrate field that suit your most important viewing devices. Recommended values are:
         * - Primary screen: Quality level: 8 to 10. Max bitrate: 4M
         * - PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M
         * - Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-qvbrqualitylevel
         */
        readonly qvbrQualityLevel?: number;
        /**
         * Rate control mode.
         *
         * QVBR: Quality will match the specified quality level except when it is constrained by the
         * maximum bitrate. Recommended if you or your viewers pay for bandwidth. CBR: Quality varies, depending on the video complexity. Recommended only if you distribute
         * your assets to devices that cannot handle variable bitrates. Multiplex: This rate control mode is only supported (and is required) when the video is being
         * delivered to a MediaLive Multiplex in which case the rate control configuration is controlled
         * by the properties within the Multiplex Program.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-ratecontrolmode
         */
        readonly rateControlMode?: string;
        /**
         * Sets the scan type of the output to progressive or top-field-first interlaced.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-scantype
         */
        readonly scanType?: string;
        /**
         * Scene change detection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-scenechangedetect
         */
        readonly sceneChangeDetect?: string;
        /**
         * Number of slices per picture.
         *
         * Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.
         * This field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-slices
         */
        readonly slices?: number;
        /**
         * H.265 Tier.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-tier
         */
        readonly tier?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-tileheight
         */
        readonly tileHeight?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-tilepadding
         */
        readonly tilePadding?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-tilewidth
         */
        readonly tileWidth?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-timecodeburninsettings
         */
        readonly timecodeBurninSettings?: cdk.IResolvable | CfnChannel.TimecodeBurninSettingsProperty;
        /**
         * Determines how timecodes should be inserted into the video elementary stream.
         *
         * - 'disabled': Do not include timecodes
         * - 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-timecodeinsertion
         */
        readonly timecodeInsertion?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265settings.html#cfn-medialive-channel-h265settings-treeblocksize
         */
        readonly treeblockSize?: string;
    }
    /**
     * Settings to configure video filters that apply to the H265 codec.
     *
     * The parent of this entity is H265Settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265filtersettings.html
     */
    interface H265FilterSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265filtersettings.html#cfn-medialive-channel-h265filtersettings-bandwidthreductionfiltersettings
         */
        readonly bandwidthReductionFilterSettings?: CfnChannel.BandwidthReductionFilterSettingsProperty | cdk.IResolvable;
        /**
         * Settings for applying the temporal filter to the video.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265filtersettings.html#cfn-medialive-channel-h265filtersettings-temporalfiltersettings
         */
        readonly temporalFilterSettings?: cdk.IResolvable | CfnChannel.TemporalFilterSettingsProperty;
    }
    /**
     * H265 Color Space Settings.
     *
     * The parent of this entity is H265Settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265colorspacesettings.html
     */
    interface H265ColorSpaceSettingsProperty {
        /**
         * Passthrough applies no color space conversion to the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265colorspacesettings.html#cfn-medialive-channel-h265colorspacesettings-colorspacepassthroughsettings
         */
        readonly colorSpacePassthroughSettings?: CfnChannel.ColorSpacePassthroughSettingsProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265colorspacesettings.html#cfn-medialive-channel-h265colorspacesettings-dolbyvision81settings
         */
        readonly dolbyVision81Settings?: CfnChannel.DolbyVision81SettingsProperty | cdk.IResolvable;
        /**
         * Settings to configure the handling of HDR10 color space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265colorspacesettings.html#cfn-medialive-channel-h265colorspacesettings-hdr10settings
         */
        readonly hdr10Settings?: CfnChannel.Hdr10SettingsProperty | cdk.IResolvable;
        /**
         * Settings to configure the handling of Rec601 color space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265colorspacesettings.html#cfn-medialive-channel-h265colorspacesettings-rec601settings
         */
        readonly rec601Settings?: cdk.IResolvable | CfnChannel.Rec601SettingsProperty;
        /**
         * Settings to configure the handling of Rec709 color space.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-h265colorspacesettings.html#cfn-medialive-channel-h265colorspacesettings-rec709settings
         */
        readonly rec709Settings?: cdk.IResolvable | CfnChannel.Rec709SettingsProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dolbyvision81settings.html
     */
    interface DolbyVision81SettingsProperty {
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html
     */
    interface Av1SettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-afdsignaling
         */
        readonly afdSignaling?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-bufsize
         */
        readonly bufSize?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-colorspacesettings
         */
        readonly colorSpaceSettings?: CfnChannel.Av1ColorSpaceSettingsProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-fixedafd
         */
        readonly fixedAfd?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-frameratedenominator
         */
        readonly framerateDenominator?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-frameratenumerator
         */
        readonly framerateNumerator?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-gopsize
         */
        readonly gopSize?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-gopsizeunits
         */
        readonly gopSizeUnits?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-level
         */
        readonly level?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-lookaheadratecontrol
         */
        readonly lookAheadRateControl?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-maxbitrate
         */
        readonly maxBitrate?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-miniinterval
         */
        readonly minIInterval?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-pardenominator
         */
        readonly parDenominator?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-parnumerator
         */
        readonly parNumerator?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-qvbrqualitylevel
         */
        readonly qvbrQualityLevel?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-scenechangedetect
         */
        readonly sceneChangeDetect?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1settings.html#cfn-medialive-channel-av1settings-timecodeburninsettings
         */
        readonly timecodeBurninSettings?: cdk.IResolvable | CfnChannel.TimecodeBurninSettingsProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1colorspacesettings.html
     */
    interface Av1ColorSpaceSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1colorspacesettings.html#cfn-medialive-channel-av1colorspacesettings-colorspacepassthroughsettings
         */
        readonly colorSpacePassthroughSettings?: any | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1colorspacesettings.html#cfn-medialive-channel-av1colorspacesettings-hdr10settings
         */
        readonly hdr10Settings?: CfnChannel.Hdr10SettingsProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1colorspacesettings.html#cfn-medialive-channel-av1colorspacesettings-rec601settings
         */
        readonly rec601Settings?: any | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-av1colorspacesettings.html#cfn-medialive-channel-av1colorspacesettings-rec709settings
         */
        readonly rec709Settings?: any | cdk.IResolvable;
    }
    /**
     * The configuration settings that apply to the entire channel.
     *
     * The parent of this entity is EncoderSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-globalconfiguration.html
     */
    interface GlobalConfigurationProperty {
        /**
         * The value to set the initial audio gain for the channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-globalconfiguration.html#cfn-medialive-channel-globalconfiguration-initialaudiogain
         */
        readonly initialAudioGain?: number;
        /**
         * Indicates the action to take when the current input completes (for example, end-of-file).
         *
         * When switchAndLoopInputs is configured, MediaLive restarts at the beginning of the first input. When "none" is configured, MediaLive transcodes either black, a solid color, or a user-specified slate images per the "Input Loss Behavior" configuration until the next input switch occurs (which is controlled through the Channel Schedule API).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-globalconfiguration.html#cfn-medialive-channel-globalconfiguration-inputendaction
         */
        readonly inputEndAction?: string;
        /**
         * The settings for system actions when the input is lost.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-globalconfiguration.html#cfn-medialive-channel-globalconfiguration-inputlossbehavior
         */
        readonly inputLossBehavior?: CfnChannel.InputLossBehaviorProperty | cdk.IResolvable;
        /**
         * Indicates how MediaLive pipelines are synchronized.
         *
         * PIPELINELOCKING - MediaLive attempts to synchronize the output of each pipeline to the other. EPOCHLOCKING - MediaLive attempts to synchronize the output of each pipeline to the Unix epoch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-globalconfiguration.html#cfn-medialive-channel-globalconfiguration-outputlockingmode
         */
        readonly outputLockingMode?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-globalconfiguration.html#cfn-medialive-channel-globalconfiguration-outputlockingsettings
         */
        readonly outputLockingSettings?: cdk.IResolvable | CfnChannel.OutputLockingSettingsProperty;
        /**
         * Indicates whether the rate of frames emitted by the Live encoder should be paced by its system clock (which optionally might be locked to another source through NTP) or should be locked to the clock of the source that is providing the input stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-globalconfiguration.html#cfn-medialive-channel-globalconfiguration-outputtimingsource
         */
        readonly outputTimingSource?: string;
        /**
         * Adjusts the video input buffer for streams with very low video frame rates.
         *
         * This is commonly set to enabled for music channels with less than one video frame per second.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-globalconfiguration.html#cfn-medialive-channel-globalconfiguration-supportlowframerateinputs
         */
        readonly supportLowFramerateInputs?: string;
    }
    /**
     * The configuration of channel behavior when the input is lost.
     *
     * The parent of this entity is GlobalConfiguration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlossbehavior.html
     */
    interface InputLossBehaviorProperty {
        /**
         * On input loss, the number of milliseconds to substitute black into the output before switching to the frame specified by inputLossImageType.
         *
         * A value x, where 0 <= x <= 1,000,000 and a value of 1,000,000, is interpreted as infinite.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlossbehavior.html#cfn-medialive-channel-inputlossbehavior-blackframemsec
         */
        readonly blackFrameMsec?: number;
        /**
         * When the input loss image type is "color," this field specifies the color to use.
         *
         * Value: 6 hex characters that represent the values of RGB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlossbehavior.html#cfn-medialive-channel-inputlossbehavior-inputlossimagecolor
         */
        readonly inputLossImageColor?: string;
        /**
         * When the input loss image type is "slate," these fields specify the parameters for accessing the slate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlossbehavior.html#cfn-medialive-channel-inputlossbehavior-inputlossimageslate
         */
        readonly inputLossImageSlate?: CfnChannel.InputLocationProperty | cdk.IResolvable;
        /**
         * Indicates whether to substitute a solid color or a slate into the output after the input loss exceeds blackFrameMsec.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlossbehavior.html#cfn-medialive-channel-inputlossbehavior-inputlossimagetype
         */
        readonly inputLossImageType?: string;
        /**
         * On input loss, the number of milliseconds to repeat the previous picture before substituting black into the output.
         *
         * A value x, where 0 <= x <= 1,000,000 and a value of 1,000,000, is interpreted as infinite.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlossbehavior.html#cfn-medialive-channel-inputlossbehavior-repeatframemsec
         */
        readonly repeatFrameMsec?: number;
    }
    /**
     * The input location.
     *
     * The parent of this entity is InputLossBehavior.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlocation.html
     */
    interface InputLocationProperty {
        /**
         * The password parameter that holds the password for accessing the downstream system.
         *
         * This applies only if the downstream system requires credentials.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlocation.html#cfn-medialive-channel-inputlocation-passwordparam
         */
        readonly passwordParam?: string;
        /**
         * The URI should be a path to a file that is accessible to the Live system (for example, an http:// URI) depending on the output type.
         *
         * For example, an RTMP destination should have a URI similar to rtmp://fmsserver/live.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlocation.html#cfn-medialive-channel-inputlocation-uri
         */
        readonly uri?: string;
        /**
         * The user name to connect to the downstream system.
         *
         * This applies only if the downstream system requires credentials.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-inputlocation.html#cfn-medialive-channel-inputlocation-username
         */
        readonly username?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputlockingsettings.html
     */
    interface OutputLockingSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputlockingsettings.html#cfn-medialive-channel-outputlockingsettings-epochlockingsettings
         */
        readonly epochLockingSettings?: CfnChannel.EpochLockingSettingsProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputlockingsettings.html#cfn-medialive-channel-outputlockingsettings-pipelinelockingsettings
         */
        readonly pipelineLockingSettings?: any | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-epochlockingsettings.html
     */
    interface EpochLockingSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-epochlockingsettings.html#cfn-medialive-channel-epochlockingsettings-customepoch
         */
        readonly customEpoch?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-epochlockingsettings.html#cfn-medialive-channel-epochlockingsettings-jamsynctime
         */
        readonly jamSyncTime?: string;
    }
    /**
     * Settings to enable and configure the motion graphics overlay feature in the channel.
     *
     * The parent of this entity is EncoderSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-motiongraphicsconfiguration.html
     */
    interface MotionGraphicsConfigurationProperty {
        /**
         * Enables or disables the motion graphics overlay feature in the channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-motiongraphicsconfiguration.html#cfn-medialive-channel-motiongraphicsconfiguration-motiongraphicsinsertion
         */
        readonly motionGraphicsInsertion?: string;
        /**
         * Settings to enable and configure the motion graphics overlay feature in the channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-motiongraphicsconfiguration.html#cfn-medialive-channel-motiongraphicsconfiguration-motiongraphicssettings
         */
        readonly motionGraphicsSettings?: cdk.IResolvable | CfnChannel.MotionGraphicsSettingsProperty;
    }
    /**
     * Settings to enable and configure the motion graphics overlay feature in the channel.
     *
     * The parent of this entity is MotionGraphicsConfiguration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-motiongraphicssettings.html
     */
    interface MotionGraphicsSettingsProperty {
        /**
         * Settings to configure the motion graphics overlay to use an HTML asset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-motiongraphicssettings.html#cfn-medialive-channel-motiongraphicssettings-htmlmotiongraphicssettings
         */
        readonly htmlMotionGraphicsSettings?: CfnChannel.HtmlMotionGraphicsSettingsProperty | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-htmlmotiongraphicssettings.html
     */
    interface HtmlMotionGraphicsSettingsProperty {
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-thumbnailconfiguration.html
     */
    interface ThumbnailConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-thumbnailconfiguration.html#cfn-medialive-channel-thumbnailconfiguration-state
         */
        readonly state?: string;
    }
    /**
     * Settings to enable specific features. You can't configure these features until you have enabled them in the channel.
     *
     * The parent of this entity is EncoderSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-featureactivations.html
     */
    interface FeatureActivationsProperty {
        /**
         * Enables the Input Prepare feature.
         *
         * You can create Input Prepare actions in the schedule only if this feature is enabled.
         * If you disable the feature on an existing schedule, make sure that you first delete all input prepare actions from the schedule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-featureactivations.html#cfn-medialive-channel-featureactivations-inputpreparescheduleactions
         */
        readonly inputPrepareScheduleActions?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-featureactivations.html#cfn-medialive-channel-featureactivations-outputstaticimageoverlayscheduleactions
         */
        readonly outputStaticImageOverlayScheduleActions?: string;
    }
    /**
     * The encoding information for output captions.
     *
     * The parent of this entity is EncoderSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondescription.html
     */
    interface CaptionDescriptionProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondescription.html#cfn-medialive-channel-captiondescription-accessibility
         */
        readonly accessibility?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondescription.html#cfn-medialive-channel-captiondescription-captiondashroles
         */
        readonly captionDashRoles?: Array<string>;
        /**
         * Specifies which input captions selector to use as a captions source when generating output captions.
         *
         * This field should match a captionSelector name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondescription.html#cfn-medialive-channel-captiondescription-captionselectorname
         */
        readonly captionSelectorName?: string;
        /**
         * Additional settings for a captions destination that depend on the destination type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondescription.html#cfn-medialive-channel-captiondescription-destinationsettings
         */
        readonly destinationSettings?: CfnChannel.CaptionDestinationSettingsProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondescription.html#cfn-medialive-channel-captiondescription-dvbdashaccessibility
         */
        readonly dvbDashAccessibility?: string;
        /**
         * An ISO 639-2 three-digit code.
         *
         * For more information, see http://www.loc.gov/standards/iso639-2/.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondescription.html#cfn-medialive-channel-captiondescription-languagecode
         */
        readonly languageCode?: string;
        /**
         * Human-readable information to indicate the captions that are available for players (for example, English or Spanish).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondescription.html#cfn-medialive-channel-captiondescription-languagedescription
         */
        readonly languageDescription?: string;
        /**
         * The name of the captions description.
         *
         * The name is used to associate a captions description with an output. Names must be unique within a channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondescription.html#cfn-medialive-channel-captiondescription-name
         */
        readonly name?: string;
    }
    /**
     * The configuration of one captions encode in the output.
     *
     * The parent of this entity is CaptionDescription.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html
     */
    interface CaptionDestinationSettingsProperty {
        /**
         * The configuration of one ARIB captions encode in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html#cfn-medialive-channel-captiondestinationsettings-aribdestinationsettings
         */
        readonly aribDestinationSettings?: CfnChannel.AribDestinationSettingsProperty | cdk.IResolvable;
        /**
         * The configuration of one burn-in captions encode in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html#cfn-medialive-channel-captiondestinationsettings-burnindestinationsettings
         */
        readonly burnInDestinationSettings?: CfnChannel.BurnInDestinationSettingsProperty | cdk.IResolvable;
        /**
         * The configuration of one DVB Sub captions encode in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html#cfn-medialive-channel-captiondestinationsettings-dvbsubdestinationsettings
         */
        readonly dvbSubDestinationSettings?: CfnChannel.DvbSubDestinationSettingsProperty | cdk.IResolvable;
        /**
         * Settings for EBU-TT captions in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html#cfn-medialive-channel-captiondestinationsettings-ebuttddestinationsettings
         */
        readonly ebuTtDDestinationSettings?: CfnChannel.EbuTtDDestinationSettingsProperty | cdk.IResolvable;
        /**
         * The configuration of one embedded captions encode in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html#cfn-medialive-channel-captiondestinationsettings-embeddeddestinationsettings
         */
        readonly embeddedDestinationSettings?: CfnChannel.EmbeddedDestinationSettingsProperty | cdk.IResolvable;
        /**
         * The configuration of one embedded plus SCTE-20 captions encode in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html#cfn-medialive-channel-captiondestinationsettings-embeddedplusscte20destinationsettings
         */
        readonly embeddedPlusScte20DestinationSettings?: CfnChannel.EmbeddedPlusScte20DestinationSettingsProperty | cdk.IResolvable;
        /**
         * The configuration of one RTMPCaptionInfo captions encode in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html#cfn-medialive-channel-captiondestinationsettings-rtmpcaptioninfodestinationsettings
         */
        readonly rtmpCaptionInfoDestinationSettings?: cdk.IResolvable | CfnChannel.RtmpCaptionInfoDestinationSettingsProperty;
        /**
         * The configuration of one SCTE20 plus embedded captions encode in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html#cfn-medialive-channel-captiondestinationsettings-scte20plusembeddeddestinationsettings
         */
        readonly scte20PlusEmbeddedDestinationSettings?: cdk.IResolvable | CfnChannel.Scte20PlusEmbeddedDestinationSettingsProperty;
        /**
         * The configuration of one SCTE-27 captions encode in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html#cfn-medialive-channel-captiondestinationsettings-scte27destinationsettings
         */
        readonly scte27DestinationSettings?: cdk.IResolvable | CfnChannel.Scte27DestinationSettingsProperty;
        /**
         * The configuration of one SMPTE-TT captions encode in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html#cfn-medialive-channel-captiondestinationsettings-smptettdestinationsettings
         */
        readonly smpteTtDestinationSettings?: cdk.IResolvable | CfnChannel.SmpteTtDestinationSettingsProperty;
        /**
         * The configuration of one Teletext captions encode in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html#cfn-medialive-channel-captiondestinationsettings-teletextdestinationsettings
         */
        readonly teletextDestinationSettings?: cdk.IResolvable | CfnChannel.TeletextDestinationSettingsProperty;
        /**
         * The configuration of one TTML captions encode in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html#cfn-medialive-channel-captiondestinationsettings-ttmldestinationsettings
         */
        readonly ttmlDestinationSettings?: cdk.IResolvable | CfnChannel.TtmlDestinationSettingsProperty;
        /**
         * The configuration of one WebVTT captions encode in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captiondestinationsettings.html#cfn-medialive-channel-captiondestinationsettings-webvttdestinationsettings
         */
        readonly webvttDestinationSettings?: cdk.IResolvable | CfnChannel.WebvttDestinationSettingsProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-aribdestinationsettings.html
     */
    interface AribDestinationSettingsProperty {
    }
    /**
     * Settings for EBU-TT captions in the output.
     *
     * The parent of this entity is CaptionDestinationSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ebuttddestinationsettings.html
     */
    interface EbuTtDDestinationSettingsProperty {
        /**
         * Applies only if you plan to convert these source captions to EBU-TT-D or TTML in an output.
         *
         * Complete this field if you want to include the name of the copyright holder in the copyright metadata tag in the TTML
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ebuttddestinationsettings.html#cfn-medialive-channel-ebuttddestinationsettings-copyrightholder
         */
        readonly copyrightHolder?: string;
        /**
         * Specifies how to handle the gap between the lines (in multi-line captions).
         *
         * - enabled: Fill with the captions background color (as specified in the input captions).
         * - disabled: Leave the gap unfilled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ebuttddestinationsettings.html#cfn-medialive-channel-ebuttddestinationsettings-filllinegap
         */
        readonly fillLineGap?: string;
        /**
         * Specifies the font family to include in the font data attached to the EBU-TT captions.
         *
         * Valid only if styleControl is set to include. If you leave this field empty, the font family is set to "monospaced". (If styleControl is set to exclude, the font family is always set to "monospaced".) You specify only the font family. All other style information (color, bold, position and so on) is copied from the input captions. The size is always set to 100% to allow the downstream player to choose the size. - Enter a list of font families, as a comma-separated list of font names, in order of preference. The name can be a font family (such as “Arial”), or a generic font family (such as “serif”), or “default” (to let the downstream player choose the font).
         * - Leave blank to set the family to “monospace”.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ebuttddestinationsettings.html#cfn-medialive-channel-ebuttddestinationsettings-fontfamily
         */
        readonly fontFamily?: string;
        /**
         * Specifies the style information (font color, font position, and so on) to include in the font data that is attached to the EBU-TT captions.
         *
         * - include: Take the style information (font color, font position, and so on) from the source captions and include that information in the font data attached to the EBU-TT captions. This option is valid only if the source captions are Embedded or Teletext.
         * - exclude: In the font data attached to the EBU-TT captions, set the font family to "monospaced". Do not include any other style information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ebuttddestinationsettings.html#cfn-medialive-channel-ebuttddestinationsettings-stylecontrol
         */
        readonly styleControl?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-smptettdestinationsettings.html
     */
    interface SmpteTtDestinationSettingsProperty {
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-embeddedplusscte20destinationsettings.html
     */
    interface EmbeddedPlusScte20DestinationSettingsProperty {
    }
    /**
     * The setup of TTML captions in the output.
     *
     * The parent of this entity is CaptionDestinationSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ttmldestinationsettings.html
     */
    interface TtmlDestinationSettingsProperty {
        /**
         * When set to passthrough, passes through style and position information from a TTML-like input source (TTML, SMPTE-TT, CFF-TT) to the CFF-TT output or TTML output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-ttmldestinationsettings.html#cfn-medialive-channel-ttmldestinationsettings-stylecontrol
         */
        readonly styleControl?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte20plusembeddeddestinationsettings.html
     */
    interface Scte20PlusEmbeddedDestinationSettingsProperty {
    }
    /**
     * The settings for DVB Sub captions in the output.
     *
     * The parent of this entity is CaptionDestinationSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html
     */
    interface DvbSubDestinationSettingsProperty {
        /**
         * If no explicit xPosition or yPosition is provided, setting the alignment to centered places the captions at the bottom center of the output.
         *
         * Similarly, setting a left alignment aligns captions to the bottom left of the output. If x and y positions are specified in conjunction with the alignment parameter, the font is justified (either left or centered) relative to those coordinates. Selecting "smart" justification left-justifies live subtitles and center-justifies pre-recorded subtitles. This option is not valid for source captions that are STL or 608/embedded. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-alignment
         */
        readonly alignment?: string;
        /**
         * Specifies the color of the rectangle behind the captions.
         *
         * All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-backgroundcolor
         */
        readonly backgroundColor?: string;
        /**
         * Specifies the opacity of the background rectangle.
         *
         * 255 is opaque; 0 is transparent. Keeping this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-backgroundopacity
         */
        readonly backgroundOpacity?: number;
        /**
         * The external font file that is used for captions burn-in.
         *
         * The file extension must be .ttf or .tte. Although you can select output fonts for many different types of input captions, embedded, STL, and Teletext sources use a strict grid system. Using external fonts with these captions sources could cause an unexpected display of proportional fonts. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-font
         */
        readonly font?: CfnChannel.InputLocationProperty | cdk.IResolvable;
        /**
         * Specifies the color of the burned-in captions.
         *
         * This option is not valid for source captions that are STL, 608/embedded, or Teletext. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-fontcolor
         */
        readonly fontColor?: string;
        /**
         * Specifies the opacity of the burned-in captions.
         *
         * 255 is opaque; 0 is transparent. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-fontopacity
         */
        readonly fontOpacity?: number;
        /**
         * The font resolution in DPI (dots per inch).
         *
         * The default is 96 dpi. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-fontresolution
         */
        readonly fontResolution?: number;
        /**
         * When set to auto, fontSize scales depending on the size of the output.
         *
         * Providing a positive integer specifies the exact font size in points. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-fontsize
         */
        readonly fontSize?: string;
        /**
         * Specifies the font outline color.
         *
         * This option is not valid for source captions that are either 608/embedded or Teletext. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-outlinecolor
         */
        readonly outlineColor?: string;
        /**
         * Specifies the font outline size in pixels.
         *
         * This option is not valid for source captions that are either 608/embedded or Teletext. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-outlinesize
         */
        readonly outlineSize?: number;
        /**
         * Specifies the color of the shadow that is cast by the captions.
         *
         * All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-shadowcolor
         */
        readonly shadowColor?: string;
        /**
         * Specifies the opacity of the shadow.
         *
         * 255 is opaque; 0 is transparent. Keeping this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-shadowopacity
         */
        readonly shadowOpacity?: number;
        /**
         * Specifies the horizontal offset of the shadow relative to the captions in pixels.
         *
         * A value of -2 would result in a shadow offset 2 pixels to the left. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-shadowxoffset
         */
        readonly shadowXOffset?: number;
        /**
         * Specifies the vertical offset of the shadow relative to the captions in pixels.
         *
         * A value of -2 would result in a shadow offset 2 pixels above the text. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-shadowyoffset
         */
        readonly shadowYOffset?: number;
        /**
         * Controls whether a fixed grid size is used to generate the output subtitles bitmap.
         *
         * This applies to only Teletext inputs and DVB-Sub/Burn-in outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-teletextgridcontrol
         */
        readonly teletextGridControl?: string;
        /**
         * Specifies the horizontal position of the captions relative to the left side of the output in pixels.
         *
         * A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal captions position is determined by the alignment parameter. This option is not valid for source captions that are STL, 608/embedded, or Teletext. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-xposition
         */
        readonly xPosition?: number;
        /**
         * Specifies the vertical position of the captions relative to the top of the output in pixels.
         *
         * A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the captions are positioned towards the bottom of the output. This option is not valid for source captions that are STL, 608/embedded, or Teletext. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsubdestinationsettings.html#cfn-medialive-channel-dvbsubdestinationsettings-yposition
         */
        readonly yPosition?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-teletextdestinationsettings.html
     */
    interface TeletextDestinationSettingsProperty {
    }
    /**
     * The settings for burn-in captions in the output.
     *
     * The parent of this entity is CaptionDestinationSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html
     */
    interface BurnInDestinationSettingsProperty {
        /**
         * If no explicit xPosition or yPosition is provided, setting alignment to centered places the captions at the bottom center of the output.
         *
         * Similarly, setting a left alignment aligns captions to the bottom left of the output. If x and y positions are specified in conjunction with the alignment parameter, the font is justified (either left or centered) relative to those coordinates. Selecting "smart" justification left-justifies live subtitles and center-justifies pre-recorded subtitles. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-alignment
         */
        readonly alignment?: string;
        /**
         * Specifies the color of the rectangle behind the captions.
         *
         * All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-backgroundcolor
         */
        readonly backgroundColor?: string;
        /**
         * Specifies the opacity of the background rectangle.
         *
         * 255 is opaque; 0 is transparent. Keeping this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-backgroundopacity
         */
        readonly backgroundOpacity?: number;
        /**
         * The external font file that is used for captions burn-in.
         *
         * The file extension must be .ttf or .tte. Although you can select output fonts for many different types of input captions, embedded, STL, and Teletext sources use a strict grid system. Using external fonts with these captions sources could cause an unexpected display of proportional fonts. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-font
         */
        readonly font?: CfnChannel.InputLocationProperty | cdk.IResolvable;
        /**
         * Specifies the color of the burned-in captions.
         *
         * This option is not valid for source captions that are STL, 608/embedded, or Teletext. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-fontcolor
         */
        readonly fontColor?: string;
        /**
         * Specifies the opacity of the burned-in captions.
         *
         * 255 is opaque; 0 is transparent. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-fontopacity
         */
        readonly fontOpacity?: number;
        /**
         * The font resolution in DPI (dots per inch).
         *
         * The default is 96 dpi. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-fontresolution
         */
        readonly fontResolution?: number;
        /**
         * When set to auto, fontSize scales depending on the size of the output.
         *
         * Providing a positive integer specifies the exact font size in points. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-fontsize
         */
        readonly fontSize?: string;
        /**
         * Specifies the font outline color.
         *
         * This option is not valid for source captions that are either 608/embedded or Teletext. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-outlinecolor
         */
        readonly outlineColor?: string;
        /**
         * Specifies font outline size in pixels.
         *
         * This option is not valid for source captions that are either 608/embedded or Teletext. These source settings are already pre-defined by the captions stream. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-outlinesize
         */
        readonly outlineSize?: number;
        /**
         * Specifies the color of the shadow cast by the captions.
         *
         * All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-shadowcolor
         */
        readonly shadowColor?: string;
        /**
         * Specifies the opacity of the shadow.
         *
         * 255 is opaque; 0 is transparent. Keeping this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-shadowopacity
         */
        readonly shadowOpacity?: number;
        /**
         * Specifies the horizontal offset of the shadow that is relative to the captions in pixels.
         *
         * A value of -2 would result in a shadow offset 2 pixels to the left. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-shadowxoffset
         */
        readonly shadowXOffset?: number;
        /**
         * Specifies the vertical offset of the shadow that is relative to the captions in pixels.
         *
         * A value of -2 would result in a shadow offset 2 pixels above the text. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-shadowyoffset
         */
        readonly shadowYOffset?: number;
        /**
         * Controls whether a fixed grid size is used to generate the output subtitles bitmap.
         *
         * This applies only to Teletext inputs and DVB-Sub/Burn-in outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-teletextgridcontrol
         */
        readonly teletextGridControl?: string;
        /**
         * Specifies the horizontal position of the captions relative to the left side of the output in pixels.
         *
         * A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal captions position is determined by the alignment parameter. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-xposition
         */
        readonly xPosition?: number;
        /**
         * Specifies the vertical position of the captions relative to the top of the output in pixels.
         *
         * A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the captions are positioned towards the bottom of the output. All burn-in and DVB-Sub font settings must match.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-burnindestinationsettings.html#cfn-medialive-channel-burnindestinationsettings-yposition
         */
        readonly yPosition?: number;
    }
    /**
     * The configuration of Web VTT captions in the output.
     *
     * The parent of this entity is CaptionDestinationSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-webvttdestinationsettings.html
     */
    interface WebvttDestinationSettingsProperty {
        /**
         * Controls whether the color and position of the source captions is passed through to the WebVTT output captions.
         *
         * PASSTHROUGH - Valid only if the source captions are EMBEDDED or TELETEXT. NO_STYLE_DATA - Don't pass through the style. The output captions will not contain any font styling information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-webvttdestinationsettings.html#cfn-medialive-channel-webvttdestinationsettings-stylecontrol
         */
        readonly styleControl?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-embeddeddestinationsettings.html
     */
    interface EmbeddedDestinationSettingsProperty {
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpcaptioninfodestinationsettings.html
     */
    interface RtmpCaptionInfoDestinationSettingsProperty {
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte27destinationsettings.html
     */
    interface Scte27DestinationSettingsProperty {
    }
    /**
     * The setup of ad avail handling in the output.
     *
     * The parent of this entity is EncoderSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availconfiguration.html
     */
    interface AvailConfigurationProperty {
        /**
         * The setup of ad avail handling in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availconfiguration.html#cfn-medialive-channel-availconfiguration-availsettings
         */
        readonly availSettings?: CfnChannel.AvailSettingsProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availconfiguration.html#cfn-medialive-channel-availconfiguration-scte35segmentationscope
         */
        readonly scte35SegmentationScope?: string;
    }
    /**
     * The settings for the ad avail setup in the output.
     *
     * The parent of this entity is AvailConfiguration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availsettings.html
     */
    interface AvailSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availsettings.html#cfn-medialive-channel-availsettings-esam
         */
        readonly esam?: CfnChannel.EsamProperty | cdk.IResolvable;
        /**
         * The setup for SCTE-35 splice insert handling.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availsettings.html#cfn-medialive-channel-availsettings-scte35spliceinsert
         */
        readonly scte35SpliceInsert?: cdk.IResolvable | CfnChannel.Scte35SpliceInsertProperty;
        /**
         * The setup for SCTE-35 time signal APOS handling.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availsettings.html#cfn-medialive-channel-availsettings-scte35timesignalapos
         */
        readonly scte35TimeSignalApos?: cdk.IResolvable | CfnChannel.Scte35TimeSignalAposProperty;
    }
    /**
     * The setup of SCTE-35 splice insert handling.
     *
     * The parent of this entity is AvailSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte35spliceinsert.html
     */
    interface Scte35SpliceInsertProperty {
        /**
         * When specified, this offset (in milliseconds) is added to the input ad avail PTS time.
         *
         * This applies only to embedded SCTE 104/35 messages. It doesn't apply to OOB messages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte35spliceinsert.html#cfn-medialive-channel-scte35spliceinsert-adavailoffset
         */
        readonly adAvailOffset?: number;
        /**
         * When set to ignore, segment descriptors with noRegionalBlackoutFlag set to 0 no longer trigger blackouts or ad avail slates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte35spliceinsert.html#cfn-medialive-channel-scte35spliceinsert-noregionalblackoutflag
         */
        readonly noRegionalBlackoutFlag?: string;
        /**
         * When set to ignore, segment descriptors with webDeliveryAllowedFlag set to 0 no longer trigger blackouts or ad avail slates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte35spliceinsert.html#cfn-medialive-channel-scte35spliceinsert-webdeliveryallowedflag
         */
        readonly webDeliveryAllowedFlag?: string;
    }
    /**
     * The settings for the SCTE-35 time signal APOS mode.
     *
     * The parent of this entity is AvailSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte35timesignalapos.html
     */
    interface Scte35TimeSignalAposProperty {
        /**
         * When specified, this offset (in milliseconds) is added to the input ad avail PTS time.
         *
         * This applies only to embedded SCTE 104/35 messages. It doesn't apply to OOB messages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte35timesignalapos.html#cfn-medialive-channel-scte35timesignalapos-adavailoffset
         */
        readonly adAvailOffset?: number;
        /**
         * When set to ignore, segment descriptors with noRegionalBlackoutFlag set to 0 no longer trigger blackouts or ad avail slates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte35timesignalapos.html#cfn-medialive-channel-scte35timesignalapos-noregionalblackoutflag
         */
        readonly noRegionalBlackoutFlag?: string;
        /**
         * When set to ignore, segment descriptors with webDeliveryAllowedFlag set to 0 no longer trigger blackouts or ad avail slates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-scte35timesignalapos.html#cfn-medialive-channel-scte35timesignalapos-webdeliveryallowedflag
         */
        readonly webDeliveryAllowedFlag?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-esam.html
     */
    interface EsamProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-esam.html#cfn-medialive-channel-esam-acquisitionpointid
         */
        readonly acquisitionPointId?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-esam.html#cfn-medialive-channel-esam-adavailoffset
         */
        readonly adAvailOffset?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-esam.html#cfn-medialive-channel-esam-passwordparam
         */
        readonly passwordParam?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-esam.html#cfn-medialive-channel-esam-poisendpoint
         */
        readonly poisEndpoint?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-esam.html#cfn-medialive-channel-esam-username
         */
        readonly username?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-esam.html#cfn-medialive-channel-esam-zoneidentity
         */
        readonly zoneIdentity?: string;
    }
    /**
     * The settings for one output group.
     *
     * The parent of this entity is EncoderSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroup.html
     */
    interface OutputGroupProperty {
        /**
         * A custom output group name that you can optionally define.
         *
         * Only letters, numbers, and the underscore character are allowed. The maximum length is 32 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroup.html#cfn-medialive-channel-outputgroup-name
         */
        readonly name?: string;
        /**
         * The settings associated with the output group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroup.html#cfn-medialive-channel-outputgroup-outputgroupsettings
         */
        readonly outputGroupSettings?: cdk.IResolvable | CfnChannel.OutputGroupSettingsProperty;
        /**
         * The settings for the outputs in the output group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroup.html#cfn-medialive-channel-outputgroup-outputs
         */
        readonly outputs?: Array<cdk.IResolvable | CfnChannel.OutputProperty> | cdk.IResolvable;
    }
    /**
     * The output settings.
     *
     * The parent of this entity is OutputGroup.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-output.html
     */
    interface OutputProperty {
        /**
         * The names of the audio descriptions that are used as audio sources for this output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-output.html#cfn-medialive-channel-output-audiodescriptionnames
         */
        readonly audioDescriptionNames?: Array<string>;
        /**
         * The names of the caption descriptions that are used as captions sources for this output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-output.html#cfn-medialive-channel-output-captiondescriptionnames
         */
        readonly captionDescriptionNames?: Array<string>;
        /**
         * The name that is used to identify an output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-output.html#cfn-medialive-channel-output-outputname
         */
        readonly outputName?: string;
        /**
         * The output type-specific settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-output.html#cfn-medialive-channel-output-outputsettings
         */
        readonly outputSettings?: cdk.IResolvable | CfnChannel.OutputSettingsProperty;
        /**
         * The name of the VideoDescription that is used as the source for this output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-output.html#cfn-medialive-channel-output-videodescriptionname
         */
        readonly videoDescriptionName?: string;
    }
    /**
     * The output settings.
     *
     * The parent of this entity is Output.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputsettings.html
     */
    interface OutputSettingsProperty {
        /**
         * The settings for an archive output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputsettings.html#cfn-medialive-channel-outputsettings-archiveoutputsettings
         */
        readonly archiveOutputSettings?: CfnChannel.ArchiveOutputSettingsProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputsettings.html#cfn-medialive-channel-outputsettings-cmafingestoutputsettings
         */
        readonly cmafIngestOutputSettings?: CfnChannel.CmafIngestOutputSettingsProperty | cdk.IResolvable;
        /**
         * The settings for a frame capture output.
         *
         * The parent of this entity is OutputGroupSettings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputsettings.html#cfn-medialive-channel-outputsettings-framecaptureoutputsettings
         */
        readonly frameCaptureOutputSettings?: CfnChannel.FrameCaptureOutputSettingsProperty | cdk.IResolvable;
        /**
         * The settings for an HLS output.
         *
         * The parent of this entity is OutputGroupSettings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputsettings.html#cfn-medialive-channel-outputsettings-hlsoutputsettings
         */
        readonly hlsOutputSettings?: CfnChannel.HlsOutputSettingsProperty | cdk.IResolvable;
        /**
         * The settings for a MediaPackage output.
         *
         * The parent of this entity is OutputGroupSettings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputsettings.html#cfn-medialive-channel-outputsettings-mediapackageoutputsettings
         */
        readonly mediaPackageOutputSettings?: cdk.IResolvable | CfnChannel.MediaPackageOutputSettingsProperty;
        /**
         * The settings for a Microsoft Smooth output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputsettings.html#cfn-medialive-channel-outputsettings-mssmoothoutputsettings
         */
        readonly msSmoothOutputSettings?: cdk.IResolvable | CfnChannel.MsSmoothOutputSettingsProperty;
        /**
         * Configuration of a Multiplex output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputsettings.html#cfn-medialive-channel-outputsettings-multiplexoutputsettings
         */
        readonly multiplexOutputSettings?: cdk.IResolvable | CfnChannel.MultiplexOutputSettingsProperty;
        /**
         * The settings for an RTMP output.
         *
         * The parent of this entity is OutputGroupSettings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputsettings.html#cfn-medialive-channel-outputsettings-rtmpoutputsettings
         */
        readonly rtmpOutputSettings?: cdk.IResolvable | CfnChannel.RtmpOutputSettingsProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputsettings.html#cfn-medialive-channel-outputsettings-srtoutputsettings
         */
        readonly srtOutputSettings?: cdk.IResolvable | CfnChannel.SrtOutputSettingsProperty;
        /**
         * The settings for a UDP output.
         *
         * The parent of this entity is OutputGroupSettings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputsettings.html#cfn-medialive-channel-outputsettings-udpoutputsettings
         */
        readonly udpOutputSettings?: cdk.IResolvable | CfnChannel.UdpOutputSettingsProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackageoutputsettings.html
     */
    interface MediaPackageOutputSettingsProperty {
    }
    /**
     * Configuration of a Microsoft Smooth output.
     *
     * The parent of this entity is OutputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothoutputsettings.html
     */
    interface MsSmoothOutputSettingsProperty {
        /**
         * Only applicable when this output is referencing an H.265 video description. Specifies whether MP4 segments should be packaged as HEV1 or HVC1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothoutputsettings.html#cfn-medialive-channel-mssmoothoutputsettings-h265packagingtype
         */
        readonly h265PackagingType?: string;
        /**
         * A string that is concatenated to the end of the destination file name.
         *
         * This is required for multiple outputs of the same type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothoutputsettings.html#cfn-medialive-channel-mssmoothoutputsettings-namemodifier
         */
        readonly nameModifier?: string;
    }
    /**
     * The frame capture output settings.
     *
     * The parent of this entity is OutputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecaptureoutputsettings.html
     */
    interface FrameCaptureOutputSettingsProperty {
        /**
         * Required if the output group contains more than one output.
         *
         * This modifier forms part of the output file name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecaptureoutputsettings.html#cfn-medialive-channel-framecaptureoutputsettings-namemodifier
         */
        readonly nameModifier?: string;
    }
    /**
     * The settings for an HLS output.
     *
     * The parent of this entity is OutputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsoutputsettings.html
     */
    interface HlsOutputSettingsProperty {
        /**
         * Only applicable when this output is referencing an H.265 video description. Specifies whether MP4 segments should be packaged as HEV1 or HVC1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsoutputsettings.html#cfn-medialive-channel-hlsoutputsettings-h265packagingtype
         */
        readonly h265PackagingType?: string;
        /**
         * The settings regarding the underlying stream.
         *
         * These settings are different for audio-only outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsoutputsettings.html#cfn-medialive-channel-hlsoutputsettings-hlssettings
         */
        readonly hlsSettings?: CfnChannel.HlsSettingsProperty | cdk.IResolvable;
        /**
         * A string that is concatenated to the end of the destination file name.
         *
         * Accepts \"Format Identifiers\":#formatIdentifierParameters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsoutputsettings.html#cfn-medialive-channel-hlsoutputsettings-namemodifier
         */
        readonly nameModifier?: string;
        /**
         * A string that is concatenated to the end of segment file names.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsoutputsettings.html#cfn-medialive-channel-hlsoutputsettings-segmentmodifier
         */
        readonly segmentModifier?: string;
    }
    /**
     * The settings for an HLS output.
     *
     * The parent of this entity is HlsOutputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlssettings.html
     */
    interface HlsSettingsProperty {
        /**
         * The settings for an audio-only output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlssettings.html#cfn-medialive-channel-hlssettings-audioonlyhlssettings
         */
        readonly audioOnlyHlsSettings?: CfnChannel.AudioOnlyHlsSettingsProperty | cdk.IResolvable;
        /**
         * The settings for an fMP4 container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlssettings.html#cfn-medialive-channel-hlssettings-fmp4hlssettings
         */
        readonly fmp4HlsSettings?: CfnChannel.Fmp4HlsSettingsProperty | cdk.IResolvable;
        /**
         * Settings for a frame capture output in an HLS output group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlssettings.html#cfn-medialive-channel-hlssettings-framecapturehlssettings
         */
        readonly frameCaptureHlsSettings?: CfnChannel.FrameCaptureHlsSettingsProperty | cdk.IResolvable;
        /**
         * The settings for a standard output (an output that is not audio-only).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlssettings.html#cfn-medialive-channel-hlssettings-standardhlssettings
         */
        readonly standardHlsSettings?: cdk.IResolvable | CfnChannel.StandardHlsSettingsProperty;
    }
    /**
     * The configuration of an HLS output that is a standard output (not an audio-only output).
     *
     * The parent of this entity is HlsSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-standardhlssettings.html
     */
    interface StandardHlsSettingsProperty {
        /**
         * Lists all the audio groups that are used with the video output stream.
         *
         * This inputs all the audio GROUP-IDs that are associated with the video, separated by a comma (,).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-standardhlssettings.html#cfn-medialive-channel-standardhlssettings-audiorenditionsets
         */
        readonly audioRenditionSets?: string;
        /**
         * Settings for the M3U8 container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-standardhlssettings.html#cfn-medialive-channel-standardhlssettings-m3u8settings
         */
        readonly m3U8Settings?: cdk.IResolvable | CfnChannel.M3u8SettingsProperty;
    }
    /**
     * Settings for the M3U8 container.
     *
     * The parent of this entity is StandardHlsSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html
     */
    interface M3u8SettingsProperty {
        /**
         * The number of audio frames to insert for each PES packet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-audioframesperpes
         */
        readonly audioFramesPerPes?: number;
        /**
         * The PID of the elementary audio streams in the transport stream.
         *
         * Multiple values are accepted, and can be entered in ranges or by comma separation. You can enter the value as a decimal or hexadecimal value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-audiopids
         */
        readonly audioPids?: string;
        /**
         * This parameter is unused and deprecated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-ecmpid
         */
        readonly ecmPid?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-klvbehavior
         */
        readonly klvBehavior?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-klvdatapids
         */
        readonly klvDataPids?: string;
        /**
         * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-nielsenid3behavior
         */
        readonly nielsenId3Behavior?: string;
        /**
         * The number of milliseconds between instances of this table in the output transport stream.
         *
         * A value of \"0\" writes out the PMT once per segment file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-patinterval
         */
        readonly patInterval?: number;
        /**
         * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header.
         *
         * This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-pcrcontrol
         */
        readonly pcrControl?: string;
        /**
         * The maximum time, in milliseconds, between Program Clock References (PCRs) inserted into the transport stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-pcrperiod
         */
        readonly pcrPeriod?: number;
        /**
         * The PID of the Program Clock Reference (PCR) in the transport stream.
         *
         * When no value is given, MediaLive assigns the same value as the video PID. You can enter the value as a decimal or hexadecimal value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-pcrpid
         */
        readonly pcrPid?: string;
        /**
         * The number of milliseconds between instances of this table in the output transport stream.
         *
         * A value of \"0\" writes out the PMT once per segment file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-pmtinterval
         */
        readonly pmtInterval?: number;
        /**
         * The PID for the Program Map Table (PMT) in the transport stream.
         *
         * You can enter the value as a decimal or hexadecimal value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-pmtpid
         */
        readonly pmtPid?: string;
        /**
         * The value of the program number field in the Program Map Table (PMT).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-programnum
         */
        readonly programNum?: number;
        /**
         * If set to passthrough, passes any SCTE-35 signals from the input source to this output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-scte35behavior
         */
        readonly scte35Behavior?: string;
        /**
         * The PID of the SCTE-35 stream in the transport stream.
         *
         * You can enter the value as a decimal or hexadecimal value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-scte35pid
         */
        readonly scte35Pid?: string;
        /**
         * When set to passthrough, timed metadata is passed through from input to output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-timedmetadatabehavior
         */
        readonly timedMetadataBehavior?: string;
        /**
         * The PID of the timed metadata stream in the transport stream.
         *
         * You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-timedmetadatapid
         */
        readonly timedMetadataPid?: string;
        /**
         * The value of the transport stream ID field in the Program Map Table (PMT).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-transportstreamid
         */
        readonly transportStreamId?: number;
        /**
         * The PID of the elementary video stream in the transport stream.
         *
         * You can enter the value as a decimal or hexadecimal value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m3u8settings.html#cfn-medialive-channel-m3u8settings-videopid
         */
        readonly videoPid?: string;
    }
    /**
     * The configuration of an audio-only HLS output.
     *
     * The parent of this entity is HlsSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioonlyhlssettings.html
     */
    interface AudioOnlyHlsSettingsProperty {
        /**
         * Specifies the group that the audio rendition belongs to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioonlyhlssettings.html#cfn-medialive-channel-audioonlyhlssettings-audiogroupid
         */
        readonly audioGroupId?: string;
        /**
         * Used with an audio-only stream.
         *
         * It must be a .jpg or .png file. If given, this image is used as the cover art for the audio-only output. Ideally, it should be formatted for an iPhone screen for two reasons. The iPhone does not resize the image; instead, it crops a centered image on the top/bottom and left/right. Additionally, this image file gets saved bit-for-bit into every 10-second segment file, so it increases bandwidth by {image file size} * {segment count} * {user count.}.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioonlyhlssettings.html#cfn-medialive-channel-audioonlyhlssettings-audioonlyimage
         */
        readonly audioOnlyImage?: CfnChannel.InputLocationProperty | cdk.IResolvable;
        /**
         * Four types of audio-only tracks are supported: Audio-Only Variant Stream The client can play back this audio-only stream instead of video in low-bandwidth scenarios.
         *
         * Represented as an EXT-X-STREAM-INF in the HLS manifest. Alternate Audio, Auto Select, Default Alternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES Alternate Audio, Auto Select, Not Default Alternate rendition that the client might try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES Alternate Audio, not Auto Select Alternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioonlyhlssettings.html#cfn-medialive-channel-audioonlyhlssettings-audiotracktype
         */
        readonly audioTrackType?: string;
        /**
         * Specifies the segment type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-audioonlyhlssettings.html#cfn-medialive-channel-audioonlyhlssettings-segmenttype
         */
        readonly segmentType?: string;
    }
    /**
     * Settings for the fMP4 containers.
     *
     * The parent of this entity is HlsSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-fmp4hlssettings.html
     */
    interface Fmp4HlsSettingsProperty {
        /**
         * List all the audio groups that are used with the video output stream.
         *
         * Input all the audio GROUP-IDs that are associated to the video, separate by ','.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-fmp4hlssettings.html#cfn-medialive-channel-fmp4hlssettings-audiorenditionsets
         */
        readonly audioRenditionSets?: string;
        /**
         * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-fmp4hlssettings.html#cfn-medialive-channel-fmp4hlssettings-nielsenid3behavior
         */
        readonly nielsenId3Behavior?: string;
        /**
         * When set to passthrough, timed metadata is passed through from input to output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-fmp4hlssettings.html#cfn-medialive-channel-fmp4hlssettings-timedmetadatabehavior
         */
        readonly timedMetadataBehavior?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturehlssettings.html
     */
    interface FrameCaptureHlsSettingsProperty {
    }
    /**
     * The settings for one RTMP output.
     *
     * The parent of this entity is OutputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpoutputsettings.html
     */
    interface RtmpOutputSettingsProperty {
        /**
         * If set to verifyAuthenticity, verifies the TLS certificate chain to a trusted certificate authority (CA).
         *
         * This causes RTMPS outputs with self-signed certificates to fail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpoutputsettings.html#cfn-medialive-channel-rtmpoutputsettings-certificatemode
         */
        readonly certificateMode?: string;
        /**
         * The number of seconds to wait before retrying a connection to the Flash Media server if the connection is lost.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpoutputsettings.html#cfn-medialive-channel-rtmpoutputsettings-connectionretryinterval
         */
        readonly connectionRetryInterval?: number;
        /**
         * The RTMP endpoint excluding the stream name (for example, rtmp://host/appname).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpoutputsettings.html#cfn-medialive-channel-rtmpoutputsettings-destination
         */
        readonly destination?: cdk.IResolvable | CfnChannel.OutputLocationRefProperty;
        /**
         * The number of retry attempts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpoutputsettings.html#cfn-medialive-channel-rtmpoutputsettings-numretries
         */
        readonly numRetries?: number;
    }
    /**
     * A reference to an OutputDestination ID that is defined in the channel.
     *
     * This entity is used by ArchiveGroupSettings, FrameCaptureGroupSettings, HlsGroupSettings, MediaPackageGroupSettings, MSSmoothGroupSettings, RtmpOutputSettings, and UdpOutputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputlocationref.html
     */
    interface OutputLocationRefProperty {
        /**
         * A reference ID for this destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputlocationref.html#cfn-medialive-channel-outputlocationref-destinationrefid
         */
        readonly destinationRefId?: string;
    }
    /**
     * The settings for one UDP output.
     *
     * The parent of this entity is OutputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpoutputsettings.html
     */
    interface UdpOutputSettingsProperty {
        /**
         * The UDP output buffering in milliseconds.
         *
         * Larger values increase latency through the transcoder but simultaneously assist the transcoder in maintaining a constant, low-jitter UDP/RTP output while accommodating clock recovery, input switching, input disruptions, picture reordering, and so on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpoutputsettings.html#cfn-medialive-channel-udpoutputsettings-buffermsec
         */
        readonly bufferMsec?: number;
        /**
         * The settings for the UDP output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpoutputsettings.html#cfn-medialive-channel-udpoutputsettings-containersettings
         */
        readonly containerSettings?: cdk.IResolvable | CfnChannel.UdpContainerSettingsProperty;
        /**
         * The destination address and port number for RTP or UDP packets.
         *
         * These can be unicast or multicast RTP or UDP (for example, rtp://239.10.10.10:5001 or udp://10.100.100.100:5002).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpoutputsettings.html#cfn-medialive-channel-udpoutputsettings-destination
         */
        readonly destination?: cdk.IResolvable | CfnChannel.OutputLocationRefProperty;
        /**
         * The settings for enabling and adjusting Forward Error Correction on UDP outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpoutputsettings.html#cfn-medialive-channel-udpoutputsettings-fecoutputsettings
         */
        readonly fecOutputSettings?: CfnChannel.FecOutputSettingsProperty | cdk.IResolvable;
    }
    /**
     * The settings for FEC.
     *
     * The parent of this entity is UdpOutputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-fecoutputsettings.html
     */
    interface FecOutputSettingsProperty {
        /**
         * The parameter D from SMPTE 2022-1.
         *
         * The height of the FEC protection matrix. The number of transport stream packets per column error correction packet. The number must be between 4 and 20, inclusive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-fecoutputsettings.html#cfn-medialive-channel-fecoutputsettings-columndepth
         */
        readonly columnDepth?: number;
        /**
         * Enables column only or column and row-based FEC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-fecoutputsettings.html#cfn-medialive-channel-fecoutputsettings-includefec
         */
        readonly includeFec?: string;
        /**
         * The parameter L from SMPTE 2022-1.
         *
         * The width of the FEC protection matrix. Must be between 1 and 20, inclusive. If only Column FEC is used, then larger values increase robustness. If Row FEC is used, then this is the number of transport stream packets per row error correction packet, and the value must be between 4 and 20, inclusive, if includeFec is columnAndRow. If includeFec is column, this value must be 1 to 20, inclusive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-fecoutputsettings.html#cfn-medialive-channel-fecoutputsettings-rowlength
         */
        readonly rowLength?: number;
    }
    /**
     * The configuration of a UDP output.
     *
     * The parent of this entity is UdpOutputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpcontainersettings.html
     */
    interface UdpContainerSettingsProperty {
        /**
         * The M2TS configuration for this UDP output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpcontainersettings.html#cfn-medialive-channel-udpcontainersettings-m2tssettings
         */
        readonly m2TsSettings?: cdk.IResolvable | CfnChannel.M2tsSettingsProperty;
    }
    /**
     * The configuration of the M2TS in the output.
     *
     * The parents of this entity are ArchiveContainerSettings and UdpContainerSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html
     */
    interface M2tsSettingsProperty {
        /**
         * When set to drop, the output audio streams are removed from the program if the selected input audio stream is removed from the input.
         *
         * This allows the output audio configuration to dynamically change based on the input configuration. If this is set to encodeSilence, all output audio streams will output encoded silence when not connected to an active input stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-absentinputaudiobehavior
         */
        readonly absentInputAudioBehavior?: string;
        /**
         * When set to enabled, uses ARIB-compliant field muxing and removes video descriptor.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-arib
         */
        readonly arib?: string;
        /**
         * The PID for ARIB Captions in the transport stream.
         *
         * You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-aribcaptionspid
         */
        readonly aribCaptionsPid?: string;
        /**
         * If set to auto, The PID number used for ARIB Captions will be auto-selected from unused PIDs.
         *
         * If set to useConfigured, ARIB captions will be on the configured PID number.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-aribcaptionspidcontrol
         */
        readonly aribCaptionsPidControl?: string;
        /**
         * When set to dvb, uses the DVB buffer model for Dolby Digital audio.
         *
         * When set to atsc, the ATSC model is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-audiobuffermodel
         */
        readonly audioBufferModel?: string;
        /**
         * The number of audio frames to insert for each PES packet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-audioframesperpes
         */
        readonly audioFramesPerPes?: number;
        /**
         * The PID of the elementary audio streams in the transport stream.
         *
         * Multiple values are accepted, and can be entered in ranges or by comma separation. You can enter the value as a decimal or hexadecimal value. Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-audiopids
         */
        readonly audioPids?: string;
        /**
         * When set to atsc, uses stream type = 0x81 for AC3 and stream type = 0x87 for EAC3.
         *
         * When set to dvb, uses stream type = 0x06.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-audiostreamtype
         */
        readonly audioStreamType?: string;
        /**
         * The output bitrate of the transport stream in bits per second.
         *
         * Setting to 0 lets the muxer automatically determine the appropriate bitrate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-bitrate
         */
        readonly bitrate?: number;
        /**
         * If set to multiplex, uses the multiplex buffer model for accurate interleaving.
         *
         * Setting to bufferModel to none can lead to lower latency, but low-memory devices might not be able to play back the stream without interruptions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-buffermodel
         */
        readonly bufferModel?: string;
        /**
         * When set to enabled, generates captionServiceDescriptor in PMT.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-ccdescriptor
         */
        readonly ccDescriptor?: string;
        /**
         * Inserts a DVB Network Information Table (NIT) at the specified table repetition interval.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-dvbnitsettings
         */
        readonly dvbNitSettings?: CfnChannel.DvbNitSettingsProperty | cdk.IResolvable;
        /**
         * Inserts a DVB Service Description Table (SDT) at the specified table repetition interval.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-dvbsdtsettings
         */
        readonly dvbSdtSettings?: CfnChannel.DvbSdtSettingsProperty | cdk.IResolvable;
        /**
         * The PID for the input source DVB Subtitle data to this output.
         *
         * Multiple values are accepted, and can be entered in ranges and/or by comma separation. You can enter the value as a decimal or hexadecimal value. Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-dvbsubpids
         */
        readonly dvbSubPids?: string;
        /**
         * Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-dvbtdtsettings
         */
        readonly dvbTdtSettings?: CfnChannel.DvbTdtSettingsProperty | cdk.IResolvable;
        /**
         * The PID for the input source DVB Teletext data to this output.
         *
         * You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-dvbteletextpid
         */
        readonly dvbTeletextPid?: string;
        /**
         * If set to passthrough, passes any EBIF data from the input source to this output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-ebif
         */
        readonly ebif?: string;
        /**
         * When videoAndFixedIntervals is selected, audio EBP markers are added to partitions 3 and 4.
         *
         * The interval between these additional markers is fixed, and is slightly shorter than the video EBP marker interval. This is only available when EBP Cablelabs segmentation markers are selected. Partitions 1 and 2 always follow the video interval.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-ebpaudiointerval
         */
        readonly ebpAudioInterval?: string;
        /**
         * When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video.
         *
         * If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is "stretched" to the next marker. The lookahead value does not add latency to the system. The channel must be configured elsewhere to create sufficient latency to make the lookahead accurate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-ebplookaheadms
         */
        readonly ebpLookaheadMs?: number;
        /**
         * Controls placement of EBP on audio PIDs.
         *
         * If set to videoAndAudioPids, EBP markers are placed on the video PID and all audio PIDs. If set to videoPid, EBP markers are placed on only the video PID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-ebpplacement
         */
        readonly ebpPlacement?: string;
        /**
         * This field is unused and deprecated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-ecmpid
         */
        readonly ecmPid?: string;
        /**
         * Includes or excludes the ES Rate field in the PES header.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-esrateinpes
         */
        readonly esRateInPes?: string;
        /**
         * The PID for the input source ETV Platform data to this output.
         *
         * You can enter it as a decimal or hexadecimal value. Valid values are 32 (or 0x20) to 8182 (or 0x1ff6).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-etvplatformpid
         */
        readonly etvPlatformPid?: string;
        /**
         * The PID for input source ETV Signal data to this output.
         *
         * You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-etvsignalpid
         */
        readonly etvSignalPid?: string;
        /**
         * The length in seconds of each fragment.
         *
         * This is used only with EBP markers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-fragmenttime
         */
        readonly fragmentTime?: number;
        /**
         * If set to passthrough, passes any KLV data from the input source to this output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-klv
         */
        readonly klv?: string;
        /**
         * The PID for the input source KLV data to this output.
         *
         * Multiple values are accepted, and can be entered in ranges or by comma separation. You can enter the value as a decimal or hexadecimal value. Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-klvdatapids
         */
        readonly klvDataPids?: string;
        /**
         * If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-nielsenid3behavior
         */
        readonly nielsenId3Behavior?: string;
        /**
         * The value, in bits per second, of extra null packets to insert into the transport stream.
         *
         * This can be used if a downstream encryption system requires periodic null packets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-nullpacketbitrate
         */
        readonly nullPacketBitrate?: number;
        /**
         * The number of milliseconds between instances of this table in the output transport stream.
         *
         * Valid values are 0, 10..1000.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-patinterval
         */
        readonly patInterval?: number;
        /**
         * When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header.
         *
         * This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-pcrcontrol
         */
        readonly pcrControl?: string;
        /**
         * The maximum time, in milliseconds, between Program Clock References (PCRs) inserted into the transport stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-pcrperiod
         */
        readonly pcrPeriod?: number;
        /**
         * The PID of the Program Clock Reference (PCR) in the transport stream.
         *
         * When no value is given, MediaLive assigns the same value as the video PID. You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-pcrpid
         */
        readonly pcrPid?: string;
        /**
         * The number of milliseconds between instances of this table in the output transport stream.
         *
         * Valid values are 0, 10..1000.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-pmtinterval
         */
        readonly pmtInterval?: number;
        /**
         * The PID for the Program Map Table (PMT) in the transport stream.
         *
         * You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-pmtpid
         */
        readonly pmtPid?: string;
        /**
         * The value of the program number field in the Program Map Table (PMT).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-programnum
         */
        readonly programNum?: number;
        /**
         * When VBR, does not insert null packets into the transport stream to fill the specified bitrate.
         *
         * The bitrate setting acts as the maximum bitrate when VBR is set.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-ratemode
         */
        readonly rateMode?: string;
        /**
         * The PID for the input source SCTE-27 data to this output.
         *
         * Multiple values are accepted, and can be entered in ranges or by comma separation. You can enter the value as a decimal or hexadecimal value. Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-scte27pids
         */
        readonly scte27Pids?: string;
        /**
         * Optionally passes SCTE-35 signals from the input source to this output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-scte35control
         */
        readonly scte35Control?: string;
        /**
         * The PID of the SCTE-35 stream in the transport stream.
         *
         * You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-scte35pid
         */
        readonly scte35Pid?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-scte35prerollpullupmilliseconds
         */
        readonly scte35PrerollPullupMilliseconds?: number;
        /**
         * Inserts segmentation markers at each segmentationTime period.
         *
         * raiSegstart sets the Random Access Indicator bit in the adaptation field. raiAdapt sets the RAI bit and adds the current timecode in the private data bytes. psiSegstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebpLegacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-segmentationmarkers
         */
        readonly segmentationMarkers?: string;
        /**
         * The segmentation style parameter controls how segmentation markers are inserted into the transport stream.
         *
         * With avails, it is possible that segments might be truncated, which can influence where future segmentation markers are inserted. When a segmentation style of resetCadence is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of $segmentationTime seconds. When a segmentation style of maintainCadence is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentationTime seconds. Note that EBP lookahead is a slight exception to this rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-segmentationstyle
         */
        readonly segmentationStyle?: string;
        /**
         * The length, in seconds, of each segment.
         *
         * This is required unless markers is set to None_.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-segmentationtime
         */
        readonly segmentationTime?: number;
        /**
         * When set to passthrough, timed metadata is passed through from input to output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-timedmetadatabehavior
         */
        readonly timedMetadataBehavior?: string;
        /**
         * The PID of the timed metadata stream in the transport stream.
         *
         * You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-timedmetadatapid
         */
        readonly timedMetadataPid?: string;
        /**
         * The value of the transport stream ID field in the Program Map Table (PMT).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-transportstreamid
         */
        readonly transportStreamId?: number;
        /**
         * The PID of the elementary video stream in the transport stream.
         *
         * You can enter the value as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-m2tssettings.html#cfn-medialive-channel-m2tssettings-videopid
         */
        readonly videoPid?: string;
    }
    /**
     * The DVB Time and Date Table (TDT).
     *
     * The parent of this entity is M2tsSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbtdtsettings.html
     */
    interface DvbTdtSettingsProperty {
        /**
         * The number of milliseconds between instances of this table in the output transport stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbtdtsettings.html#cfn-medialive-channel-dvbtdtsettings-repinterval
         */
        readonly repInterval?: number;
    }
    /**
     * The configuration of DVB NIT.
     *
     * The parent of this entity is M2tsSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbnitsettings.html
     */
    interface DvbNitSettingsProperty {
        /**
         * The numeric value placed in the Network Information Table (NIT).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbnitsettings.html#cfn-medialive-channel-dvbnitsettings-networkid
         */
        readonly networkId?: number;
        /**
         * The network name text placed in the networkNameDescriptor inside the Network Information Table (NIT).
         *
         * The maximum length is 256 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbnitsettings.html#cfn-medialive-channel-dvbnitsettings-networkname
         */
        readonly networkName?: string;
        /**
         * The number of milliseconds between instances of this table in the output transport stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbnitsettings.html#cfn-medialive-channel-dvbnitsettings-repinterval
         */
        readonly repInterval?: number;
    }
    /**
     * A DVB Service Description Table (SDT).
     *
     * The parent of this entity is M2tsSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsdtsettings.html
     */
    interface DvbSdtSettingsProperty {
        /**
         * Selects a method of inserting SDT information into an output stream.
         *
         * The sdtFollow setting copies SDT information from input stream to output stream. The sdtFollowIfPresent setting copies SDT information from input stream to output stream if SDT information is present in the input. Otherwise, it falls back on the user-defined values. The sdtManual setting means that the user will enter the SDT information. The sdtNone setting means that the output stream will not contain SDT information.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsdtsettings.html#cfn-medialive-channel-dvbsdtsettings-outputsdt
         */
        readonly outputSdt?: string;
        /**
         * The number of milliseconds between instances of this table in the output transport stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsdtsettings.html#cfn-medialive-channel-dvbsdtsettings-repinterval
         */
        readonly repInterval?: number;
        /**
         * The service name placed in the serviceDescriptor in the Service Description Table (SDT).
         *
         * The maximum length is 256 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsdtsettings.html#cfn-medialive-channel-dvbsdtsettings-servicename
         */
        readonly serviceName?: string;
        /**
         * The service provider name placed in the serviceDescriptor in the Service Description Table (SDT).
         *
         * The maximum length is 256 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-dvbsdtsettings.html#cfn-medialive-channel-dvbsdtsettings-serviceprovidername
         */
        readonly serviceProviderName?: string;
    }
    /**
     * Configuration of a Multiplex output.
     *
     * The parent of this entity is OutputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexoutputsettings.html
     */
    interface MultiplexOutputSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexoutputsettings.html#cfn-medialive-channel-multiplexoutputsettings-containersettings
         */
        readonly containerSettings?: cdk.IResolvable | CfnChannel.MultiplexContainerSettingsProperty;
        /**
         * Destination is a Multiplex.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexoutputsettings.html#cfn-medialive-channel-multiplexoutputsettings-destination
         */
        readonly destination?: cdk.IResolvable | CfnChannel.OutputLocationRefProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexcontainersettings.html
     */
    interface MultiplexContainerSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexcontainersettings.html#cfn-medialive-channel-multiplexcontainersettings-multiplexm2tssettings
         */
        readonly multiplexM2TsSettings?: cdk.IResolvable | CfnChannel.MultiplexM2tsSettingsProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexm2tssettings.html
     */
    interface MultiplexM2tsSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexm2tssettings.html#cfn-medialive-channel-multiplexm2tssettings-absentinputaudiobehavior
         */
        readonly absentInputAudioBehavior?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexm2tssettings.html#cfn-medialive-channel-multiplexm2tssettings-arib
         */
        readonly arib?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexm2tssettings.html#cfn-medialive-channel-multiplexm2tssettings-audiobuffermodel
         */
        readonly audioBufferModel?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexm2tssettings.html#cfn-medialive-channel-multiplexm2tssettings-audioframesperpes
         */
        readonly audioFramesPerPes?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexm2tssettings.html#cfn-medialive-channel-multiplexm2tssettings-audiostreamtype
         */
        readonly audioStreamType?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexm2tssettings.html#cfn-medialive-channel-multiplexm2tssettings-ccdescriptor
         */
        readonly ccDescriptor?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexm2tssettings.html#cfn-medialive-channel-multiplexm2tssettings-ebif
         */
        readonly ebif?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexm2tssettings.html#cfn-medialive-channel-multiplexm2tssettings-esrateinpes
         */
        readonly esRateInPes?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexm2tssettings.html#cfn-medialive-channel-multiplexm2tssettings-klv
         */
        readonly klv?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexm2tssettings.html#cfn-medialive-channel-multiplexm2tssettings-nielsenid3behavior
         */
        readonly nielsenId3Behavior?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexm2tssettings.html#cfn-medialive-channel-multiplexm2tssettings-pcrcontrol
         */
        readonly pcrControl?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexm2tssettings.html#cfn-medialive-channel-multiplexm2tssettings-pcrperiod
         */
        readonly pcrPeriod?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexm2tssettings.html#cfn-medialive-channel-multiplexm2tssettings-scte35control
         */
        readonly scte35Control?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexm2tssettings.html#cfn-medialive-channel-multiplexm2tssettings-scte35prerollpullupmilliseconds
         */
        readonly scte35PrerollPullupMilliseconds?: number;
    }
    /**
     * The archive output settings.
     *
     * The parent of this entity is OutputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archiveoutputsettings.html
     */
    interface ArchiveOutputSettingsProperty {
        /**
         * The settings that are specific to the container type of the file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archiveoutputsettings.html#cfn-medialive-channel-archiveoutputsettings-containersettings
         */
        readonly containerSettings?: CfnChannel.ArchiveContainerSettingsProperty | cdk.IResolvable;
        /**
         * The output file extension.
         *
         * If excluded, this is auto-selected from the container type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archiveoutputsettings.html#cfn-medialive-channel-archiveoutputsettings-extension
         */
        readonly extension?: string;
        /**
         * A string that is concatenated to the end of the destination file name.
         *
         * The string is required for multiple outputs of the same type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archiveoutputsettings.html#cfn-medialive-channel-archiveoutputsettings-namemodifier
         */
        readonly nameModifier?: string;
    }
    /**
     * The archive container settings.
     *
     * The parent of this entity is ArchiveOutputSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivecontainersettings.html
     */
    interface ArchiveContainerSettingsProperty {
        /**
         * The settings for the M2TS in the archive output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivecontainersettings.html#cfn-medialive-channel-archivecontainersettings-m2tssettings
         */
        readonly m2TsSettings?: cdk.IResolvable | CfnChannel.M2tsSettingsProperty;
        /**
         * The settings for Raw archive output type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivecontainersettings.html#cfn-medialive-channel-archivecontainersettings-rawsettings
         */
        readonly rawSettings?: cdk.IResolvable | CfnChannel.RawSettingsProperty;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rawsettings.html
     */
    interface RawSettingsProperty {
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestoutputsettings.html
     */
    interface CmafIngestOutputSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestoutputsettings.html#cfn-medialive-channel-cmafingestoutputsettings-namemodifier
         */
        readonly nameModifier?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-srtoutputsettings.html
     */
    interface SrtOutputSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-srtoutputsettings.html#cfn-medialive-channel-srtoutputsettings-buffermsec
         */
        readonly bufferMsec?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-srtoutputsettings.html#cfn-medialive-channel-srtoutputsettings-containersettings
         */
        readonly containerSettings?: cdk.IResolvable | CfnChannel.UdpContainerSettingsProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-srtoutputsettings.html#cfn-medialive-channel-srtoutputsettings-destination
         */
        readonly destination?: cdk.IResolvable | CfnChannel.OutputLocationRefProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-srtoutputsettings.html#cfn-medialive-channel-srtoutputsettings-encryptiontype
         */
        readonly encryptionType?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-srtoutputsettings.html#cfn-medialive-channel-srtoutputsettings-latency
         */
        readonly latency?: number;
    }
    /**
     * The configuration of the output group.
     *
     * The parent of this entity is OutputGroup.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroupsettings.html
     */
    interface OutputGroupSettingsProperty {
        /**
         * The configuration of an archive output group.
         *
         * The parent of this entity is OutputGroupSettings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroupsettings.html#cfn-medialive-channel-outputgroupsettings-archivegroupsettings
         */
        readonly archiveGroupSettings?: CfnChannel.ArchiveGroupSettingsProperty | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroupsettings.html#cfn-medialive-channel-outputgroupsettings-cmafingestgroupsettings
         */
        readonly cmafIngestGroupSettings?: CfnChannel.CmafIngestGroupSettingsProperty | cdk.IResolvable;
        /**
         * The configuration of a frame capture output group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroupsettings.html#cfn-medialive-channel-outputgroupsettings-framecapturegroupsettings
         */
        readonly frameCaptureGroupSettings?: CfnChannel.FrameCaptureGroupSettingsProperty | cdk.IResolvable;
        /**
         * The configuration of an HLS output group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroupsettings.html#cfn-medialive-channel-outputgroupsettings-hlsgroupsettings
         */
        readonly hlsGroupSettings?: CfnChannel.HlsGroupSettingsProperty | cdk.IResolvable;
        /**
         * The configuration of a MediaPackage output group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroupsettings.html#cfn-medialive-channel-outputgroupsettings-mediapackagegroupsettings
         */
        readonly mediaPackageGroupSettings?: cdk.IResolvable | CfnChannel.MediaPackageGroupSettingsProperty;
        /**
         * The configuration of a Microsoft Smooth output group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroupsettings.html#cfn-medialive-channel-outputgroupsettings-mssmoothgroupsettings
         */
        readonly msSmoothGroupSettings?: cdk.IResolvable | CfnChannel.MsSmoothGroupSettingsProperty;
        /**
         * The settings for a Multiplex output group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroupsettings.html#cfn-medialive-channel-outputgroupsettings-multiplexgroupsettings
         */
        readonly multiplexGroupSettings?: cdk.IResolvable | CfnChannel.MultiplexGroupSettingsProperty;
        /**
         * The configuration of an RTMP output group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroupsettings.html#cfn-medialive-channel-outputgroupsettings-rtmpgroupsettings
         */
        readonly rtmpGroupSettings?: cdk.IResolvable | CfnChannel.RtmpGroupSettingsProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroupsettings.html#cfn-medialive-channel-outputgroupsettings-srtgroupsettings
         */
        readonly srtGroupSettings?: cdk.IResolvable | CfnChannel.SrtGroupSettingsProperty;
        /**
         * The configuration of a UDP output group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputgroupsettings.html#cfn-medialive-channel-outputgroupsettings-udpgroupsettings
         */
        readonly udpGroupSettings?: cdk.IResolvable | CfnChannel.UdpGroupSettingsProperty;
    }
    /**
     * The settings for an HLS output group.
     *
     * The parent of this entity is OutputGroupSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html
     */
    interface HlsGroupSettingsProperty {
        /**
         * Chooses one or more ad marker types to pass SCTE35 signals through to this group of Apple HLS outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-admarkers
         */
        readonly adMarkers?: Array<string>;
        /**
         * A partial URI prefix that will be prepended to each output in the media .m3u8 file. The partial URI prefix can be used if the base manifest is delivered from a different URL than the main .m3u8 file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-baseurlcontent
         */
        readonly baseUrlContent?: string;
        /**
         * Optional.
         *
         * One value per output group. This field is required only if you are completing Base URL content A, and the downstream system has notified you that the media files for pipeline 1 of all outputs are in a location different from the media files for pipeline 0.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-baseurlcontent1
         */
        readonly baseUrlContent1?: string;
        /**
         * A partial URI prefix that will be prepended to each output in the media .m3u8 file. The partial URI prefix can be used if the base manifest is delivered from a different URL than the main .m3u8 file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-baseurlmanifest
         */
        readonly baseUrlManifest?: string;
        /**
         * Optional.
         *
         * One value per output group. Complete this field only if you are completing Base URL manifest A, and the downstream system has notified you that the child manifest files for pipeline 1 of all outputs are in a location different from the child manifest files for pipeline 0.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-baseurlmanifest1
         */
        readonly baseUrlManifest1?: string;
        /**
         * A mapping of up to 4 captions channels to captions languages.
         *
         * This is meaningful only if captionLanguageSetting is set to "insert."
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-captionlanguagemappings
         */
        readonly captionLanguageMappings?: Array<CfnChannel.CaptionLanguageMappingProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Applies only to 608 embedded output captions.
         *
         * Insert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code that you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the captions selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match properly with the output captions. None: Include the CLOSED-CAPTIONS=NONE line in the manifest. Omit: Omit any CLOSED-CAPTIONS line from the manifest.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-captionlanguagesetting
         */
        readonly captionLanguageSetting?: string;
        /**
         * When set to "disabled," sets the #EXT-X-ALLOW-CACHE:no tag in the manifest, which prevents clients from saving media segments for later replay.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-clientcache
         */
        readonly clientCache?: string;
        /**
         * The specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-codecspecification
         */
        readonly codecSpecification?: string;
        /**
         * Used with encryptionType.
         *
         * This is a 128-bit, 16-byte hex value that is represented by a 32-character text string. If ivSource is set to "explicit," this parameter is required and is used as the IV for encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-constantiv
         */
        readonly constantIv?: string;
        /**
         * A directory or HTTP destination for the HLS segments, manifest files, and encryption keys (if enabled).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-destination
         */
        readonly destination?: cdk.IResolvable | CfnChannel.OutputLocationRefProperty;
        /**
         * Places segments in subdirectories.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-directorystructure
         */
        readonly directoryStructure?: string;
        /**
         * Specifies whether to insert EXT-X-DISCONTINUITY tags in the HLS child manifests for this output group.
         *
         * Typically, choose Insert because these tags are required in the manifest (according to the HLS specification) and serve an important purpose.
         * Choose Never Insert only if the downstream system is doing real-time failover (without using the MediaLive automatic failover feature) and only if that downstream system has advised you to exclude the tags.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-discontinuitytags
         */
        readonly discontinuityTags?: string;
        /**
         * Encrypts the segments with the specified encryption scheme.
         *
         * Exclude this parameter if you don't want encryption.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-encryptiontype
         */
        readonly encryptionType?: string;
        /**
         * The parameters that control interactions with the CDN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-hlscdnsettings
         */
        readonly hlsCdnSettings?: CfnChannel.HlsCdnSettingsProperty | cdk.IResolvable;
        /**
         * State of HLS ID3 Segment Tagging.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-hlsid3segmenttagging
         */
        readonly hlsId3SegmentTagging?: string;
        /**
         * DISABLED: Don't create an I-frame-only manifest, but do create the master and media manifests (according to the Output Selection field).
         *
         * STANDARD: Create an I-frame-only manifest for each output that contains video, as well as the other manifests (according to the Output Selection field). The I-frame manifest contains a #EXT-X-I-FRAMES-ONLY tag to indicate it is I-frame only, and one or more #EXT-X-BYTERANGE entries identifying the I-frame position. For example, #EXT-X-BYTERANGE:160364@1461888".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-iframeonlyplaylists
         */
        readonly iFrameOnlyPlaylists?: string;
        /**
         * Specifies whether to include the final (incomplete) segment in the media output when the pipeline stops producing output because of a channel stop, a channel pause or a loss of input to the pipeline.
         *
         * Auto means that MediaLive decides whether to include the final segment, depending on the channel class and the types of output groups.
         * Suppress means to never include the incomplete segment. We recommend you choose Auto and let MediaLive control the behavior.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-incompletesegmentbehavior
         */
        readonly incompleteSegmentBehavior?: string;
        /**
         * Applies only if the Mode field is LIVE.
         *
         * Specifies the maximum number of segments in the media manifest file. After this maximum, older segments are removed from the media manifest. This number must be less than or equal to the Keep Segments field.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-indexnsegments
         */
        readonly indexNSegments?: number;
        /**
         * A parameter that controls output group behavior on an input loss.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-inputlossaction
         */
        readonly inputLossAction?: string;
        /**
         * Used with encryptionType.
         *
         * The IV (initialization vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If set to "include," the IV is listed in the manifest. Otherwise, the IV is not in the manifest.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-ivinmanifest
         */
        readonly ivInManifest?: string;
        /**
         * Used with encryptionType.
         *
         * The IV (initialization vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If this setting is "followsSegmentNumber," it causes the IV to change every segment (to match the segment number). If this is set to "explicit," you must enter a constantIv value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-ivsource
         */
        readonly ivSource?: string;
        /**
         * Applies only if the Mode field is LIVE.
         *
         * Specifies the number of media segments (.ts files) to retain in the destination directory.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-keepsegments
         */
        readonly keepSegments?: number;
        /**
         * Specifies how the key is represented in the resource identified by the URI.
         *
         * If the parameter is absent, an implicit value of "identity" is used. A reverse DNS string can also be specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-keyformat
         */
        readonly keyFormat?: string;
        /**
         * Either a single positive integer version value or a slash-delimited list of version values (1/2/3).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-keyformatversions
         */
        readonly keyFormatVersions?: string;
        /**
         * The key provider settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-keyprovidersettings
         */
        readonly keyProviderSettings?: cdk.IResolvable | CfnChannel.KeyProviderSettingsProperty;
        /**
         * When set to gzip, compresses HLS playlist.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-manifestcompression
         */
        readonly manifestCompression?: string;
        /**
         * Indicates whether the output manifest should use a floating point or integer values for segment duration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-manifestdurationformat
         */
        readonly manifestDurationFormat?: string;
        /**
         * When set, minimumSegmentLength is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-minsegmentlength
         */
        readonly minSegmentLength?: number;
        /**
         * If "vod," all segments are indexed and kept permanently in the destination and manifest.
         *
         * If "live," only the number segments specified in keepSegments and indexNSegments are kept. Newer segments replace older segments, which might prevent players from rewinding all the way to the beginning of the channel. VOD mode uses HLS EXT-X-PLAYLIST-TYPE of EVENT while the channel is running, converting it to a "VOD" type manifest on completion of the stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-mode
         */
        readonly mode?: string;
        /**
         * MANIFESTSANDSEGMENTS: Generates manifests (the master manifest, if applicable, and media manifests) for this output group.
         *
         * SEGMENTSONLY: Doesn't generate any manifests for this output group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-outputselection
         */
        readonly outputSelection?: string;
        /**
         * Includes or excludes the EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated as follows: Either the program date and time are initialized using the input timecode source, or the time is initialized using the input timecode source and the date is initialized using the timestampOffset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-programdatetime
         */
        readonly programDateTime?: string;
        /**
         * Specifies the algorithm used to drive the HLS EXT-X-PROGRAM-DATE-TIME clock.
         *
         * Options include: INITIALIZE_FROM_OUTPUT_TIMECODE: The PDT clock is initialized as a function of the first output timecode, then incremented by the EXTINF duration of each encoded segment. SYSTEM_CLOCK: The PDT clock is initialized as a function of the UTC wall clock, then incremented by the EXTINF duration of each encoded segment. If the PDT clock diverges from the wall clock by more than 500ms, it is resynchronized to the wall clock.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-programdatetimeclock
         */
        readonly programDateTimeClock?: string;
        /**
         * The period of insertion of the EXT-X-PROGRAM-DATE-TIME entry, in seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-programdatetimeperiod
         */
        readonly programDateTimePeriod?: number;
        /**
         * ENABLED: The master manifest (.m3u8 file) for each pipeline includes information about both pipelines: first its own media files, then the media files of the other pipeline. This feature allows a playout device that supports stale manifest detection to switch from one manifest to the other, when the current manifest seems to be stale. There are still two destinations and two master manifests, but both master manifests reference the media files from both pipelines. DISABLED: The master manifest (.m3u8 file) for each pipeline includes information about its own pipeline only. For an HLS output group with MediaPackage as the destination, the DISABLED behavior is always followed. MediaPackage regenerates the manifests it serves to players, so a redundant manifest from MediaLive is irrelevant.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-redundantmanifest
         */
        readonly redundantManifest?: string;
        /**
         * useInputSegmentation has been deprecated.
         *
         * The configured segment size is always used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-segmentationmode
         */
        readonly segmentationMode?: string;
        /**
         * The length of the MPEG-2 Transport Stream segments to create, in seconds.
         *
         * Note that segments will end on the next keyframe after this number of seconds, so the actual segment length might be longer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-segmentlength
         */
        readonly segmentLength?: number;
        /**
         * The number of segments to write to a subdirectory before starting a new one.
         *
         * For this setting to have an effect, directoryStructure must be subdirectoryPerStream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-segmentspersubdirectory
         */
        readonly segmentsPerSubdirectory?: number;
        /**
         * The include or exclude RESOLUTION attribute for a video in the EXT-X-STREAM-INF tag of a variant manifest.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-streaminfresolution
         */
        readonly streamInfResolution?: string;
        /**
         * Indicates the ID3 frame that has the timecode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-timedmetadataid3frame
         */
        readonly timedMetadataId3Frame?: string;
        /**
         * The timed metadata interval, in seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-timedmetadataid3period
         */
        readonly timedMetadataId3Period?: number;
        /**
         * Provides an extra millisecond delta offset to fine tune the timestamps.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-timestampdeltamilliseconds
         */
        readonly timestampDeltaMilliseconds?: number;
        /**
         * SEGMENTEDFILES: Emits the program as segments -multiple .ts media files. SINGLEFILE: Applies only if the Mode field is VOD. Emits the program as a single .ts media file. The media manifest includes #EXT-X-BYTERANGE tags to index segments for playback. A typical use for this value is when sending the output to AWS Elemental MediaConvert, which can accept only a single media file. Playback while the channel is running is not guaranteed due to HTTP server caching.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsgroupsettings.html#cfn-medialive-channel-hlsgroupsettings-tsfilemode
         */
        readonly tsFileMode?: string;
    }
    /**
     * The configuration of key provider settings.
     *
     * The parent of this entity is HlsGroupSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-keyprovidersettings.html
     */
    interface KeyProviderSettingsProperty {
        /**
         * The configuration of static key settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-keyprovidersettings.html#cfn-medialive-channel-keyprovidersettings-statickeysettings
         */
        readonly staticKeySettings?: cdk.IResolvable | CfnChannel.StaticKeySettingsProperty;
    }
    /**
     * The static key settings.
     *
     * The parent of this entity is KeyProviderSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-statickeysettings.html
     */
    interface StaticKeySettingsProperty {
        /**
         * The URL of the license server that is used for protecting content.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-statickeysettings.html#cfn-medialive-channel-statickeysettings-keyproviderserver
         */
        readonly keyProviderServer?: CfnChannel.InputLocationProperty | cdk.IResolvable;
        /**
         * The static key value as a 32 character hexadecimal string.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-statickeysettings.html#cfn-medialive-channel-statickeysettings-statickeyvalue
         */
        readonly staticKeyValue?: string;
    }
    /**
     * Maps a captions channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description.
     *
     * The parent of this entity is HlsGroupSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionlanguagemapping.html
     */
    interface CaptionLanguageMappingProperty {
        /**
         * The closed caption channel being described by this CaptionLanguageMapping.
         *
         * Each channel mapping must have a unique channel number (maximum of 4).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionlanguagemapping.html#cfn-medialive-channel-captionlanguagemapping-captionchannel
         */
        readonly captionChannel?: number;
        /**
         * A three-character ISO 639-2 language code (see http://www.loc.gov/standards/iso639-2).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionlanguagemapping.html#cfn-medialive-channel-captionlanguagemapping-languagecode
         */
        readonly languageCode?: string;
        /**
         * The textual description of language.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-captionlanguagemapping.html#cfn-medialive-channel-captionlanguagemapping-languagedescription
         */
        readonly languageDescription?: string;
    }
    /**
     * The settings for the CDN of an HLS output.
     *
     * The parent of this entity is HlsGroupSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlscdnsettings.html
     */
    interface HlsCdnSettingsProperty {
        /**
         * Sets up Akamai as the downstream system for the HLS output group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlscdnsettings.html#cfn-medialive-channel-hlscdnsettings-hlsakamaisettings
         */
        readonly hlsAkamaiSettings?: CfnChannel.HlsAkamaiSettingsProperty | cdk.IResolvable;
        /**
         * The settings for Basic Put for the HLS output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlscdnsettings.html#cfn-medialive-channel-hlscdnsettings-hlsbasicputsettings
         */
        readonly hlsBasicPutSettings?: CfnChannel.HlsBasicPutSettingsProperty | cdk.IResolvable;
        /**
         * Sets up MediaStore as the destination for the HLS output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlscdnsettings.html#cfn-medialive-channel-hlscdnsettings-hlsmediastoresettings
         */
        readonly hlsMediaStoreSettings?: CfnChannel.HlsMediaStoreSettingsProperty | cdk.IResolvable;
        /**
         * Sets up Amazon S3 as the destination for this HLS output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlscdnsettings.html#cfn-medialive-channel-hlscdnsettings-hlss3settings
         */
        readonly hlsS3Settings?: CfnChannel.HlsS3SettingsProperty | cdk.IResolvable;
        /**
         * The settings for Web VTT captions in the HLS output group.
         *
         * The parent of this entity is HlsGroupSettings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlscdnsettings.html#cfn-medialive-channel-hlscdnsettings-hlswebdavsettings
         */
        readonly hlsWebdavSettings?: CfnChannel.HlsWebdavSettingsProperty | cdk.IResolvable;
    }
    /**
     * The configuration of a WebDav server as the downstream system for an HLS output.
     *
     * The parent of this entity is HlsCdnSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlswebdavsettings.html
     */
    interface HlsWebdavSettingsProperty {
        /**
         * The number of seconds to wait before retrying a connection to the CDN if the connection is lost.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlswebdavsettings.html#cfn-medialive-channel-hlswebdavsettings-connectionretryinterval
         */
        readonly connectionRetryInterval?: number;
        /**
         * The size, in seconds, of the file cache for streaming outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlswebdavsettings.html#cfn-medialive-channel-hlswebdavsettings-filecacheduration
         */
        readonly filecacheDuration?: number;
        /**
         * Specifies whether to use chunked transfer encoding to WebDAV.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlswebdavsettings.html#cfn-medialive-channel-hlswebdavsettings-httptransfermode
         */
        readonly httpTransferMode?: string;
        /**
         * The number of retry attempts that are made before the channel is put into an error state.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlswebdavsettings.html#cfn-medialive-channel-hlswebdavsettings-numretries
         */
        readonly numRetries?: number;
        /**
         * If a streaming output fails, the number of seconds to wait until a restart is initiated.
         *
         * A value of 0 means never restart.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlswebdavsettings.html#cfn-medialive-channel-hlswebdavsettings-restartdelay
         */
        readonly restartDelay?: number;
    }
    /**
     * Sets up Amazon S3 as the destination for this HLS output.
     *
     * The parent of this entity is HlsCdnSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlss3settings.html
     */
    interface HlsS3SettingsProperty {
        /**
         * Specify the canned ACL to apply to each S3 request.
         *
         * Defaults to none.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlss3settings.html#cfn-medialive-channel-hlss3settings-cannedacl
         */
        readonly cannedAcl?: string;
    }
    /**
     * The Akamai settings in an HLS output.
     *
     * The parent of this entity is HlsCdnSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsakamaisettings.html
     */
    interface HlsAkamaiSettingsProperty {
        /**
         * The number of seconds to wait before retrying a connection to the CDN if the connection is lost.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsakamaisettings.html#cfn-medialive-channel-hlsakamaisettings-connectionretryinterval
         */
        readonly connectionRetryInterval?: number;
        /**
         * The size, in seconds, of the file cache for streaming outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsakamaisettings.html#cfn-medialive-channel-hlsakamaisettings-filecacheduration
         */
        readonly filecacheDuration?: number;
        /**
         * Specifies whether to use chunked transfer encoding to Akamai.
         *
         * To enable this feature, contact Akamai.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsakamaisettings.html#cfn-medialive-channel-hlsakamaisettings-httptransfermode
         */
        readonly httpTransferMode?: string;
        /**
         * The number of retry attempts that will be made before the channel is put into an error state.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsakamaisettings.html#cfn-medialive-channel-hlsakamaisettings-numretries
         */
        readonly numRetries?: number;
        /**
         * If a streaming output fails, the number of seconds to wait until a restart is initiated.
         *
         * A value of 0 means never restart.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsakamaisettings.html#cfn-medialive-channel-hlsakamaisettings-restartdelay
         */
        readonly restartDelay?: number;
        /**
         * The salt for authenticated Akamai.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsakamaisettings.html#cfn-medialive-channel-hlsakamaisettings-salt
         */
        readonly salt?: string;
        /**
         * The token parameter for authenticated Akamai.
         *
         * If this is not specified, _gda_ is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsakamaisettings.html#cfn-medialive-channel-hlsakamaisettings-token
         */
        readonly token?: string;
    }
    /**
     * The configuration of HLS Basic Put Settings.
     *
     * The parent of this entity is HlsCdnSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsbasicputsettings.html
     */
    interface HlsBasicPutSettingsProperty {
        /**
         * The number of seconds to wait before retrying a connection to the CDN if the connection is lost.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsbasicputsettings.html#cfn-medialive-channel-hlsbasicputsettings-connectionretryinterval
         */
        readonly connectionRetryInterval?: number;
        /**
         * The size, in seconds, of the file cache for streaming outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsbasicputsettings.html#cfn-medialive-channel-hlsbasicputsettings-filecacheduration
         */
        readonly filecacheDuration?: number;
        /**
         * The number of retry attempts that MediaLive makes before the channel is put into an error state.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsbasicputsettings.html#cfn-medialive-channel-hlsbasicputsettings-numretries
         */
        readonly numRetries?: number;
        /**
         * If a streaming output fails, the number of seconds to wait until a restart is initiated.
         *
         * A value of 0 means never restart.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsbasicputsettings.html#cfn-medialive-channel-hlsbasicputsettings-restartdelay
         */
        readonly restartDelay?: number;
    }
    /**
     * The configuration of a MediaStore container as the destination for an HLS output.
     *
     * The parent of this entity is HlsCdnSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsmediastoresettings.html
     */
    interface HlsMediaStoreSettingsProperty {
        /**
         * The number of seconds to wait before retrying a connection to the CDN if the connection is lost.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsmediastoresettings.html#cfn-medialive-channel-hlsmediastoresettings-connectionretryinterval
         */
        readonly connectionRetryInterval?: number;
        /**
         * The size, in seconds, of the file cache for streaming outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsmediastoresettings.html#cfn-medialive-channel-hlsmediastoresettings-filecacheduration
         */
        readonly filecacheDuration?: number;
        /**
         * When set to temporal, output files are stored in non-persistent memory for faster reading and writing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsmediastoresettings.html#cfn-medialive-channel-hlsmediastoresettings-mediastorestorageclass
         */
        readonly mediaStoreStorageClass?: string;
        /**
         * The number of retry attempts that are made before the channel is put into an error state.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsmediastoresettings.html#cfn-medialive-channel-hlsmediastoresettings-numretries
         */
        readonly numRetries?: number;
        /**
         * If a streaming output fails, the number of seconds to wait until a restart is initiated.
         *
         * A value of 0 means never restart.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-hlsmediastoresettings.html#cfn-medialive-channel-hlsmediastoresettings-restartdelay
         */
        readonly restartDelay?: number;
    }
    /**
     * The settings for a frame capture output group.
     *
     * The parent of this entity is OutputGroupSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturegroupsettings.html
     */
    interface FrameCaptureGroupSettingsProperty {
        /**
         * The destination for the frame capture files.
         *
         * The destination is either the URI for an Amazon S3 bucket and object, plus a file name prefix (for example, s3ssl://sportsDelivery/highlights/20180820/curling_) or the URI for a MediaStore container, plus a file name prefix (for example, mediastoressl://sportsDelivery/20180820/curling_). The final file names consist of the prefix from the destination field (for example, "curling_") + name modifier + the counter (5 digits, starting from 00001) + extension (which is always .jpg). For example, curlingLow.00001.jpg.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturegroupsettings.html#cfn-medialive-channel-framecapturegroupsettings-destination
         */
        readonly destination?: cdk.IResolvable | CfnChannel.OutputLocationRefProperty;
        /**
         * Settings to configure the destination of a Frame Capture output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturegroupsettings.html#cfn-medialive-channel-framecapturegroupsettings-framecapturecdnsettings
         */
        readonly frameCaptureCdnSettings?: CfnChannel.FrameCaptureCdnSettingsProperty | cdk.IResolvable;
    }
    /**
     * Settings to configure the destination of a Frame Capture output.
     *
     * The parent of this entity is FrameCaptureGroupSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturecdnsettings.html
     */
    interface FrameCaptureCdnSettingsProperty {
        /**
         * Sets up Amazon S3 as the destination for this Frame Capture output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecapturecdnsettings.html#cfn-medialive-channel-framecapturecdnsettings-framecaptures3settings
         */
        readonly frameCaptureS3Settings?: CfnChannel.FrameCaptureS3SettingsProperty | cdk.IResolvable;
    }
    /**
     * Sets up Amazon S3 as the destination for this Frame Capture output.
     *
     * The parent of this entity is FrameCaptureCdnSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecaptures3settings.html
     */
    interface FrameCaptureS3SettingsProperty {
        /**
         * Specify the canned ACL to apply to each S3 request.
         *
         * Defaults to none.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-framecaptures3settings.html#cfn-medialive-channel-framecaptures3settings-cannedacl
         */
        readonly cannedAcl?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexgroupsettings.html
     */
    interface MultiplexGroupSettingsProperty {
    }
    /**
     * The settings for an archive output group.
     *
     * The parent of this entity is OutputGroupSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivegroupsettings.html
     */
    interface ArchiveGroupSettingsProperty {
        /**
         * Settings to configure the destination of an Archive output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivegroupsettings.html#cfn-medialive-channel-archivegroupsettings-archivecdnsettings
         */
        readonly archiveCdnSettings?: CfnChannel.ArchiveCdnSettingsProperty | cdk.IResolvable;
        /**
         * A directory and base file name where archive files should be written.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivegroupsettings.html#cfn-medialive-channel-archivegroupsettings-destination
         */
        readonly destination?: cdk.IResolvable | CfnChannel.OutputLocationRefProperty;
        /**
         * The number of seconds to write to an archive file before closing and starting a new one.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivegroupsettings.html#cfn-medialive-channel-archivegroupsettings-rolloverinterval
         */
        readonly rolloverInterval?: number;
    }
    /**
     * Settings to configure the destination of an Archive output.
     *
     * The parent of this entity is ArchiveGroupSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivecdnsettings.html
     */
    interface ArchiveCdnSettingsProperty {
        /**
         * Sets up Amazon S3 as the destination for this Archive output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archivecdnsettings.html#cfn-medialive-channel-archivecdnsettings-archives3settings
         */
        readonly archiveS3Settings?: CfnChannel.ArchiveS3SettingsProperty | cdk.IResolvable;
    }
    /**
     * Sets up Amazon S3 as the destination for this Archive output.
     *
     * The parent of this entity is ArchiveCdnSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archives3settings.html
     */
    interface ArchiveS3SettingsProperty {
        /**
         * Specify the canned ACL to apply to each S3 request.
         *
         * Defaults to none.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-archives3settings.html#cfn-medialive-channel-archives3settings-cannedacl
         */
        readonly cannedAcl?: string;
    }
    /**
     * The settings for the MediaPackage group.
     *
     * The parent of this entity is OutputGroupSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackagegroupsettings.html
     */
    interface MediaPackageGroupSettingsProperty {
        /**
         * The MediaPackage channel destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackagegroupsettings.html#cfn-medialive-channel-mediapackagegroupsettings-destination
         */
        readonly destination?: cdk.IResolvable | CfnChannel.OutputLocationRefProperty;
    }
    /**
     * The configuration of a UDP output group.
     *
     * The parent of this entity is OutputGroupSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpgroupsettings.html
     */
    interface UdpGroupSettingsProperty {
        /**
         * Specifies the behavior of the last resort when the input video is lost, and no more backup inputs are available.
         *
         * When dropTs is selected, the entire transport stream stops emitting. When dropProgram is selected, the program can be dropped from the transport stream (and replaced with null packets to meet the TS bitrate requirement). Or when emitProgram is selected, the transport stream continues to be produced normally with repeat frames, black frames, or slate frames substituted for the absent input video.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpgroupsettings.html#cfn-medialive-channel-udpgroupsettings-inputlossaction
         */
        readonly inputLossAction?: string;
        /**
         * Indicates the ID3 frame that has the timecode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpgroupsettings.html#cfn-medialive-channel-udpgroupsettings-timedmetadataid3frame
         */
        readonly timedMetadataId3Frame?: string;
        /**
         * The timed metadata interval in seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-udpgroupsettings.html#cfn-medialive-channel-udpgroupsettings-timedmetadataid3period
         */
        readonly timedMetadataId3Period?: number;
    }
    /**
     * The settings for a Microsoft Smooth output group.
     *
     * The parent of this entity is OutputGroupSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html
     */
    interface MsSmoothGroupSettingsProperty {
        /**
         * The value of the Acquisition Point Identity element that is used in each message placed in the sparse track.
         *
         * Enabled only if sparseTrackType is not "none."
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-acquisitionpointid
         */
        readonly acquisitionPointId?: string;
        /**
         * If set to passthrough for an audio-only Microsoft Smooth output, the fragment absolute time is set to the current timecode.
         *
         * This option does not write timecodes to the audio elementary stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-audioonlytimecodecontrol
         */
        readonly audioOnlyTimecodeControl?: string;
        /**
         * If set to verifyAuthenticity, verifies the HTTPS certificate chain to a trusted certificate authority (CA).
         *
         * This causes HTTPS outputs to self-signed certificates to fail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-certificatemode
         */
        readonly certificateMode?: string;
        /**
         * The number of seconds to wait before retrying the connection to the IIS server if the connection is lost.
         *
         * Content is cached during this time, and the cache is delivered to the IIS server after the connection is re-established.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-connectionretryinterval
         */
        readonly connectionRetryInterval?: number;
        /**
         * The Smooth Streaming publish point on an IIS server.
         *
         * MediaLive acts as a "Push" encoder to IIS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-destination
         */
        readonly destination?: cdk.IResolvable | CfnChannel.OutputLocationRefProperty;
        /**
         * The Microsoft Smooth channel ID that is sent to the IIS server.
         *
         * Specify the ID only if eventIdMode is set to useConfigured.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-eventid
         */
        readonly eventId?: string;
        /**
         * Specifies whether to send a channel ID to the IIS server.
         *
         * If no channel ID is sent and the same channel is used without changing the publishing point, clients might see cached video from the previous run. Options: - "useConfigured" - use the value provided in eventId - "useTimestamp" - generate and send a channel ID based on the current timestamp - "noEventId" - do not send a channel ID to the IIS server.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-eventidmode
         */
        readonly eventIdMode?: string;
        /**
         * When set to sendEos, sends an EOS signal to an IIS server when stopping the channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-eventstopbehavior
         */
        readonly eventStopBehavior?: string;
        /**
         * The size, in seconds, of the file cache for streaming outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-filecacheduration
         */
        readonly filecacheDuration?: number;
        /**
         * The length, in seconds, of mp4 fragments to generate.
         *
         * The fragment length must be compatible with GOP size and frame rate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-fragmentlength
         */
        readonly fragmentLength?: number;
        /**
         * A parameter that controls output group behavior on an input loss.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-inputlossaction
         */
        readonly inputLossAction?: string;
        /**
         * The number of retry attempts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-numretries
         */
        readonly numRetries?: number;
        /**
         * The number of seconds before initiating a restart due to output failure, due to exhausting the numRetries on one segment, or exceeding filecacheDuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-restartdelay
         */
        readonly restartDelay?: number;
        /**
         * useInputSegmentation has been deprecated.
         *
         * The configured segment size is always used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-segmentationmode
         */
        readonly segmentationMode?: string;
        /**
         * The number of milliseconds to delay the output from the second pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-senddelayms
         */
        readonly sendDelayMs?: number;
        /**
         * If set to scte35, uses incoming SCTE-35 messages to generate a sparse track in this group of Microsoft Smooth outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-sparsetracktype
         */
        readonly sparseTrackType?: string;
        /**
         * When set to send, sends a stream manifest so that the publishing point doesn't start until all streams start.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-streammanifestbehavior
         */
        readonly streamManifestBehavior?: string;
        /**
         * The timestamp offset for the channel.
         *
         * Used only if timestampOffsetMode is set to useConfiguredOffset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-timestampoffset
         */
        readonly timestampOffset?: string;
        /**
         * The type of timestamp date offset to use.
         *
         * - useEventStartDate: Use the date the channel was started as the offset - useConfiguredOffset: Use an explicitly configured date as the offset.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mssmoothgroupsettings.html#cfn-medialive-channel-mssmoothgroupsettings-timestampoffsetmode
         */
        readonly timestampOffsetMode?: string;
    }
    /**
     * The configuration of an RTMP output group.
     *
     * The parent of this entity is OutputGroupSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpgroupsettings.html
     */
    interface RtmpGroupSettingsProperty {
        /**
         * Choose the ad marker type for this output group.
         *
         * MediaLive will create a message based on the content of each SCTE-35 message, format it for that marker type, and insert it in the datastream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpgroupsettings.html#cfn-medialive-channel-rtmpgroupsettings-admarkers
         */
        readonly adMarkers?: Array<string>;
        /**
         * An authentication scheme to use when connecting with a CDN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpgroupsettings.html#cfn-medialive-channel-rtmpgroupsettings-authenticationscheme
         */
        readonly authenticationScheme?: string;
        /**
         * Controls behavior when the content cache fills up.
         *
         * If a remote origin server stalls the RTMP connection and doesn't accept content fast enough, the media cache fills up. When the cache reaches the duration specified by cacheLength, the cache stops accepting new content. If set to disconnectImmediately, the RTMP output forces a disconnect. Clear the media cache, and reconnect after restartDelay seconds. If set to waitForServer, the RTMP output waits up to 5 minutes to allow the origin server to begin accepting data again.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpgroupsettings.html#cfn-medialive-channel-rtmpgroupsettings-cachefullbehavior
         */
        readonly cacheFullBehavior?: string;
        /**
         * The cache length, in seconds, that is used to calculate buffer size.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpgroupsettings.html#cfn-medialive-channel-rtmpgroupsettings-cachelength
         */
        readonly cacheLength?: number;
        /**
         * Controls the types of data that pass to onCaptionInfo outputs.
         *
         * If set to all, 608 and 708 carried DTVCC data is passed. If set to field1AndField2608, DTVCC data is stripped out, but 608 data from both fields is passed. If set to field1608, only the data carried in 608 from field 1 video is passed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpgroupsettings.html#cfn-medialive-channel-rtmpgroupsettings-captiondata
         */
        readonly captionData?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpgroupsettings.html#cfn-medialive-channel-rtmpgroupsettings-includefillernalunits
         */
        readonly includeFillerNalUnits?: string;
        /**
         * Controls the behavior of this RTMP group if the input becomes unavailable.
         *
         * emitOutput: Emit a slate until the input returns. pauseOutput: Stop transmitting data until the input returns. This does not close the underlying RTMP connection.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpgroupsettings.html#cfn-medialive-channel-rtmpgroupsettings-inputlossaction
         */
        readonly inputLossAction?: string;
        /**
         * If a streaming output fails, the number of seconds to wait until a restart is initiated.
         *
         * A value of 0 means never restart.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-rtmpgroupsettings.html#cfn-medialive-channel-rtmpgroupsettings-restartdelay
         */
        readonly restartDelay?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-srtgroupsettings.html
     */
    interface SrtGroupSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-srtgroupsettings.html#cfn-medialive-channel-srtgroupsettings-inputlossaction
         */
        readonly inputLossAction?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestgroupsettings.html
     */
    interface CmafIngestGroupSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestgroupsettings.html#cfn-medialive-channel-cmafingestgroupsettings-destination
         */
        readonly destination?: cdk.IResolvable | CfnChannel.OutputLocationRefProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestgroupsettings.html#cfn-medialive-channel-cmafingestgroupsettings-id3behavior
         */
        readonly id3Behavior?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestgroupsettings.html#cfn-medialive-channel-cmafingestgroupsettings-id3namemodifier
         */
        readonly id3NameModifier?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestgroupsettings.html#cfn-medialive-channel-cmafingestgroupsettings-klvbehavior
         */
        readonly klvBehavior?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestgroupsettings.html#cfn-medialive-channel-cmafingestgroupsettings-klvnamemodifier
         */
        readonly klvNameModifier?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestgroupsettings.html#cfn-medialive-channel-cmafingestgroupsettings-nielsenid3behavior
         */
        readonly nielsenId3Behavior?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestgroupsettings.html#cfn-medialive-channel-cmafingestgroupsettings-nielsenid3namemodifier
         */
        readonly nielsenId3NameModifier?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestgroupsettings.html#cfn-medialive-channel-cmafingestgroupsettings-scte35namemodifier
         */
        readonly scte35NameModifier?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestgroupsettings.html#cfn-medialive-channel-cmafingestgroupsettings-scte35type
         */
        readonly scte35Type?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestgroupsettings.html#cfn-medialive-channel-cmafingestgroupsettings-segmentlength
         */
        readonly segmentLength?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestgroupsettings.html#cfn-medialive-channel-cmafingestgroupsettings-segmentlengthunits
         */
        readonly segmentLengthUnits?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cmafingestgroupsettings.html#cfn-medialive-channel-cmafingestgroupsettings-senddelayms
         */
        readonly sendDelayMs?: number;
    }
    /**
     * The configuration of ad avail blanking in the output.
     *
     * The parent of this entity is EncoderSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availblanking.html
     */
    interface AvailBlankingProperty {
        /**
         * The blanking image to be used.
         *
         * Keep empty for solid black. Only .bmp and .png images are supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availblanking.html#cfn-medialive-channel-availblanking-availblankingimage
         */
        readonly availBlankingImage?: CfnChannel.InputLocationProperty | cdk.IResolvable;
        /**
         * When set to enabled, the video, audio, and captions are blanked when insertion metadata is added.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-availblanking.html#cfn-medialive-channel-availblanking-state
         */
        readonly state?: string;
    }
    /**
     * The settings to configure Nielsen watermarks.
     *
     * The parent of this entity is EncoderSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsenconfiguration.html
     */
    interface NielsenConfigurationProperty {
        /**
         * Enter the Distributor ID assigned to your organization by Nielsen.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsenconfiguration.html#cfn-medialive-channel-nielsenconfiguration-distributorid
         */
        readonly distributorId?: string;
        /**
         * Enables Nielsen PCM to ID3 tagging.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-nielsenconfiguration.html#cfn-medialive-channel-nielsenconfiguration-nielsenpcmtoid3tagging
         */
        readonly nielsenPcmToId3Tagging?: string;
    }
    /**
     * The settings for a blackout slate.
     *
     * The parent of this entity is EncoderSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-blackoutslate.html
     */
    interface BlackoutSlateProperty {
        /**
         * The blackout slate image to be used.
         *
         * Keep empty for solid black. Only .bmp and .png images are supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-blackoutslate.html#cfn-medialive-channel-blackoutslate-blackoutslateimage
         */
        readonly blackoutSlateImage?: CfnChannel.InputLocationProperty | cdk.IResolvable;
        /**
         * Setting to enabled causes MediaLive to blackout the video, audio, and captions, and raise the "Network Blackout Image" slate when an SCTE104/35 Network End Segmentation Descriptor is encountered.
         *
         * The blackout is lifted when the Network Start Segmentation Descriptor is encountered. The Network End and Network Start descriptors must contain a network ID that matches the value entered in Network ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-blackoutslate.html#cfn-medialive-channel-blackoutslate-networkendblackout
         */
        readonly networkEndBlackout?: string;
        /**
         * The path to the local file to use as the Network End Blackout image.
         *
         * The image is scaled to fill the entire output raster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-blackoutslate.html#cfn-medialive-channel-blackoutslate-networkendblackoutimage
         */
        readonly networkEndBlackoutImage?: CfnChannel.InputLocationProperty | cdk.IResolvable;
        /**
         * Provides a Network ID that matches EIDR ID format (for example, "10.XXXX/XXXX-XXXX-XXXX-XXXX-XXXX-C").
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-blackoutslate.html#cfn-medialive-channel-blackoutslate-networkid
         */
        readonly networkId?: string;
        /**
         * When set to enabled, this causes video, audio, and captions to be blanked when indicated by program metadata.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-blackoutslate.html#cfn-medialive-channel-blackoutslate-state
         */
        readonly state?: string;
    }
    /**
     * The configuration of the timecode in the output.
     *
     * The parent of this entity is EncoderSettings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-timecodeconfig.html
     */
    interface TimecodeConfigProperty {
        /**
         * Identifies the source for the timecode that will be associated with the channel outputs.
         *
         * Embedded (embedded): Initialize the output timecode with timecode from the source. If no embedded timecode is detected in the source, the system falls back to using "Start at 0" (zerobased). System Clock (systemclock): Use the UTC time. Start at 0 (zerobased): The time of the first frame of the channel will be 00:00:00:00.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-timecodeconfig.html#cfn-medialive-channel-timecodeconfig-source
         */
        readonly source?: string;
        /**
         * The threshold in frames beyond which output timecode is resynchronized to the input timecode.
         *
         * Discrepancies below this threshold are permitted to avoid unnecessary discontinuities in the output timecode. There is no timecode sync when this is not specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-timecodeconfig.html#cfn-medialive-channel-timecodeconfig-syncthreshold
         */
        readonly syncThreshold?: number;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-colorcorrectionsettings.html
     */
    interface ColorCorrectionSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-colorcorrectionsettings.html#cfn-medialive-channel-colorcorrectionsettings-globalcolorcorrections
         */
        readonly globalColorCorrections?: Array<CfnChannel.ColorCorrectionProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-colorcorrection.html
     */
    interface ColorCorrectionProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-colorcorrection.html#cfn-medialive-channel-colorcorrection-inputcolorspace
         */
        readonly inputColorSpace?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-colorcorrection.html#cfn-medialive-channel-colorcorrection-outputcolorspace
         */
        readonly outputColorSpace?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-colorcorrection.html#cfn-medialive-channel-colorcorrection-uri
         */
        readonly uri?: string;
    }
    /**
     * Configuration information for an output.
     *
     * This entity is at the top level in the channel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestination.html
     */
    interface OutputDestinationProperty {
        /**
         * The ID for this destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestination.html#cfn-medialive-channel-outputdestination-id
         */
        readonly id?: string;
        /**
         * The destination settings for a MediaPackage output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestination.html#cfn-medialive-channel-outputdestination-mediapackagesettings
         */
        readonly mediaPackageSettings?: Array<cdk.IResolvable | CfnChannel.MediaPackageOutputDestinationSettingsProperty> | cdk.IResolvable;
        /**
         * Destination settings for a Multiplex output;
         *
         * one destination for both encoders.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestination.html#cfn-medialive-channel-outputdestination-multiplexsettings
         */
        readonly multiplexSettings?: cdk.IResolvable | CfnChannel.MultiplexProgramChannelDestinationSettingsProperty;
        /**
         * The destination settings for an output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestination.html#cfn-medialive-channel-outputdestination-settings
         */
        readonly settings?: Array<cdk.IResolvable | CfnChannel.OutputDestinationSettingsProperty> | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestination.html#cfn-medialive-channel-outputdestination-srtsettings
         */
        readonly srtSettings?: Array<cdk.IResolvable | CfnChannel.SrtOutputDestinationSettingsProperty> | cdk.IResolvable;
    }
    /**
     * Destination settings for a Multiplex output.
     *
     * The parent of this entity is OutputDestination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexprogramchanneldestinationsettings.html
     */
    interface MultiplexProgramChannelDestinationSettingsProperty {
        /**
         * The ID of the Multiplex that the encoder is providing output to.
         *
         * You do not need to specify the individual inputs to the Multiplex; MediaLive will handle the connection of the two MediaLive pipelines to the two Multiplex instances.
         * The Multiplex must be in the same region as the Channel.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexprogramchanneldestinationsettings.html#cfn-medialive-channel-multiplexprogramchanneldestinationsettings-multiplexid
         */
        readonly multiplexId?: string;
        /**
         * The program name of the Multiplex program that the encoder is providing output to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-multiplexprogramchanneldestinationsettings.html#cfn-medialive-channel-multiplexprogramchanneldestinationsettings-programname
         */
        readonly programName?: string;
    }
    /**
     * The configuration information for this output.
     *
     * The parent of this entity is OutputDestination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestinationsettings.html
     */
    interface OutputDestinationSettingsProperty {
        /**
         * The password parameter that holds the password for accessing the downstream system.
         *
         * This password parameter applies only if the downstream system requires credentials.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestinationsettings.html#cfn-medialive-channel-outputdestinationsettings-passwordparam
         */
        readonly passwordParam?: string;
        /**
         * The stream name for the content.
         *
         * This applies only to RTMP outputs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestinationsettings.html#cfn-medialive-channel-outputdestinationsettings-streamname
         */
        readonly streamName?: string;
        /**
         * The URL for the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestinationsettings.html#cfn-medialive-channel-outputdestinationsettings-url
         */
        readonly url?: string;
        /**
         * The user name to connect to the downstream system.
         *
         * This applies only if the downstream system requires credentials.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-outputdestinationsettings.html#cfn-medialive-channel-outputdestinationsettings-username
         */
        readonly username?: string;
    }
    /**
     * Destination settings for a MediaPackage output.
     *
     * The parent of this entity is OutputDestination.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackageoutputdestinationsettings.html
     */
    interface MediaPackageOutputDestinationSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackageoutputdestinationsettings.html#cfn-medialive-channel-mediapackageoutputdestinationsettings-channelgroup
         */
        readonly channelGroup?: string;
        /**
         * The ID of the channel in MediaPackage that is the destination for this output group.
         *
         * You don't need to specify the individual inputs in MediaPackage; MediaLive handles the connection of the two MediaLive pipelines to the two MediaPackage inputs. The MediaPackage channel and MediaLive channel must be in the same Region.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackageoutputdestinationsettings.html#cfn-medialive-channel-mediapackageoutputdestinationsettings-channelid
         */
        readonly channelId?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-mediapackageoutputdestinationsettings.html#cfn-medialive-channel-mediapackageoutputdestinationsettings-channelname
         */
        readonly channelName?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-srtoutputdestinationsettings.html
     */
    interface SrtOutputDestinationSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-srtoutputdestinationsettings.html#cfn-medialive-channel-srtoutputdestinationsettings-encryptionpassphrasesecretarn
         */
        readonly encryptionPassphraseSecretArn?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-srtoutputdestinationsettings.html#cfn-medialive-channel-srtoutputdestinationsettings-streamid
         */
        readonly streamId?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-srtoutputdestinationsettings.html#cfn-medialive-channel-srtoutputdestinationsettings-url
         */
        readonly url?: string;
    }
    /**
     * Settings to enable VPC mode in the channel, so that the endpoints for all outputs are in your VPC.
     *
     * This entity is at the top level in the channel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-vpcoutputsettings.html
     */
    interface VpcOutputSettingsProperty {
        /**
         * List of public address allocation IDs to associate with ENIs that will be created in Output VPC.
         *
         * Must specify one for SINGLE_PIPELINE, two for STANDARD channels
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-vpcoutputsettings.html#cfn-medialive-channel-vpcoutputsettings-publicaddressallocationids
         */
        readonly publicAddressAllocationIds?: Array<string>;
        /**
         * A list of up to 5 EC2 VPC security group IDs to attach to the Output VPC network interfaces.
         *
         * If none are specified then the VPC default security group will be used
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-vpcoutputsettings.html#cfn-medialive-channel-vpcoutputsettings-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
        /**
         * A list of VPC subnet IDs from the same VPC.
         *
         * If STANDARD channel, subnet IDs must be mapped to two unique availability zones (AZ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-vpcoutputsettings.html#cfn-medialive-channel-vpcoutputsettings-subnetids
         */
        readonly subnetIds?: Array<string>;
    }
    /**
     * The input specification for this channel.
     *
     * It specifies the key characteristics of CDI inputs for this channel, when those characteristics are different from other inputs.
     *
     * This entity is at the top level in the channel.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cdiinputspecification.html
     */
    interface CdiInputSpecificationProperty {
        /**
         * Maximum CDI input resolution.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-cdiinputspecification.html#cfn-medialive-channel-cdiinputspecification-resolution
         */
        readonly resolution?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-maintenancecreatesettings.html
     */
    interface MaintenanceCreateSettingsProperty {
        /**
         * Choose one day of the week for maintenance.
         *
         * The chosen day is used for all future maintenance windows.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-maintenancecreatesettings.html#cfn-medialive-channel-maintenancecreatesettings-maintenanceday
         */
        readonly maintenanceDay?: string;
        /**
         * Choose the hour that maintenance will start.
         *
         * The chosen time is used for all future maintenance windows.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-maintenancecreatesettings.html#cfn-medialive-channel-maintenancecreatesettings-maintenancestarttime
         */
        readonly maintenanceStartTime?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-channelengineversionrequest.html
     */
    interface ChannelEngineVersionRequestProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-channelengineversionrequest.html#cfn-medialive-channel-channelengineversionrequest-version
         */
        readonly version?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-anywheresettings.html
     */
    interface AnywhereSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-anywheresettings.html#cfn-medialive-channel-anywheresettings-channelplacementgroupid
         */
        readonly channelPlacementGroupId?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-anywheresettings.html#cfn-medialive-channel-anywheresettings-clusterid
         */
        readonly clusterId?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-maintenanceupdatesettings.html
     */
    interface MaintenanceUpdateSettingsProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-maintenanceupdatesettings.html#cfn-medialive-channel-maintenanceupdatesettings-maintenanceday
         */
        readonly maintenanceDay?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-maintenanceupdatesettings.html#cfn-medialive-channel-maintenanceupdatesettings-maintenancescheduleddate
         */
        readonly maintenanceScheduledDate?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-channel-maintenanceupdatesettings.html#cfn-medialive-channel-maintenanceupdatesettings-maintenancestarttime
         */
        readonly maintenanceStartTime?: string;
    }
}
/**
 * Properties for defining a `CfnChannel`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html
 */
export interface CfnChannelProps {
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html#cfn-medialive-channel-anywheresettings
     */
    readonly anywhereSettings?: CfnChannel.AnywhereSettingsProperty | cdk.IResolvable;
    /**
     * Specification of CDI inputs for this channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html#cfn-medialive-channel-cdiinputspecification
     */
    readonly cdiInputSpecification?: CfnChannel.CdiInputSpecificationProperty | cdk.IResolvable;
    /**
     * The class for this channel.
     *
     * For a channel with two pipelines, the class is STANDARD. For a channel with one pipeline, the class is SINGLE_PIPELINE.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html#cfn-medialive-channel-channelclass
     */
    readonly channelClass?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html#cfn-medialive-channel-channelengineversion
     */
    readonly channelEngineVersion?: CfnChannel.ChannelEngineVersionRequestProperty | cdk.IResolvable;
    /**
     * The settings that identify the destination for the outputs in this MediaLive output package.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html#cfn-medialive-channel-destinations
     */
    readonly destinations?: Array<cdk.IResolvable | CfnChannel.OutputDestinationProperty> | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html#cfn-medialive-channel-dryrun
     */
    readonly dryRun?: boolean | cdk.IResolvable;
    /**
     * The encoding configuration for the output content.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html#cfn-medialive-channel-encodersettings
     */
    readonly encoderSettings?: CfnChannel.EncoderSettingsProperty | cdk.IResolvable;
    /**
     * The list of input attachments for the channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html#cfn-medialive-channel-inputattachments
     */
    readonly inputAttachments?: Array<CfnChannel.InputAttachmentProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The input specification for this channel.
     *
     * It specifies the key characteristics of the inputs for this channel: the maximum bitrate, the resolution, and the codec.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html#cfn-medialive-channel-inputspecification
     */
    readonly inputSpecification?: CfnChannel.InputSpecificationProperty | cdk.IResolvable;
    /**
     * The verbosity for logging activity for this channel.
     *
     * Charges for logging (which are generated through Amazon CloudWatch Logging) are higher for higher verbosities.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html#cfn-medialive-channel-loglevel
     */
    readonly logLevel?: string;
    /**
     * Maintenance settings for this channel.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html#cfn-medialive-channel-maintenance
     */
    readonly maintenance?: cdk.IResolvable | CfnChannel.MaintenanceCreateSettingsProperty;
    /**
     * A name for this audio selector.
     *
     * The AudioDescription (in an output) references this name in order to identify a specific input audio to include in that output.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html#cfn-medialive-channel-name
     */
    readonly name?: string;
    /**
     * The IAM role for MediaLive to assume when running this channel.
     *
     * The role is identified by its ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html#cfn-medialive-channel-rolearn
     */
    readonly roleArn?: string;
    /**
     * A collection of tags for this channel.
     *
     * Each tag is a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html#cfn-medialive-channel-tags
     */
    readonly tags?: any;
    /**
     * Settings to enable VPC mode in the channel, so that the endpoints for all outputs are in your VPC.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channel.html#cfn-medialive-channel-vpc
     */
    readonly vpc?: cdk.IResolvable | CfnChannel.VpcOutputSettingsProperty;
}
/**
 * The AWS::MediaLive::Input resource is a MediaLive resource type that creates an input.
 *
 * A MediaLive input holds information that describes how the MediaLive channel is connected to the upstream system that is providing the source content that is to be transcoded.
 *
 * @cloudformationResource AWS::MediaLive::Input
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html
 */
export declare class CfnInput extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInput from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInput;
    /**
     * The ARN of the MediaLive input. For example: arn:aws:medialive:us-west-1:111122223333:medialive:input:1234567. MediaLive creates this ARN when it creates the input.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * For a push input, the the destination or destinations for the input. The destinations are the URLs of locations on MediaLive where the upstream system pushes the content to, for this input. MediaLive creates these addresses when it creates the input.
     *
     * @cloudformationAttribute Destinations
     */
    readonly attrDestinations: Array<string>;
    /**
     * The unique ID for the device.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * For a pull input, the source or sources for the input. The sources are the URLs of locations on the upstream system where MediaLive pulls the content from, for this input. You included these URLs in the create request.
     *
     * @cloudformationAttribute Sources
     */
    readonly attrSources: Array<string>;
    /**
     * Settings that apply only if the input is a push type of input.
     */
    destinations?: Array<CfnInput.InputDestinationRequestProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Settings that apply only if the input is an Elemental Link input.
     */
    inputDevices?: Array<CfnInput.InputDeviceSettingsProperty | cdk.IResolvable> | cdk.IResolvable;
    inputNetworkLocation?: string;
    /**
     * The list of input security groups (referenced by IDs) to attach to the input if the input is a push type.
     */
    inputSecurityGroups?: Array<string>;
    /**
     * Settings that apply only if the input is a MediaConnect input.
     */
    mediaConnectFlows?: Array<cdk.IResolvable | CfnInput.MediaConnectFlowRequestProperty> | cdk.IResolvable;
    multicastSettings?: cdk.IResolvable | CfnInput.MulticastSettingsCreateRequestProperty;
    /**
     * A name for the input.
     */
    name?: string;
    /**
     * The IAM role for MediaLive to assume when creating a MediaConnect input or Amazon VPC input.
     */
    roleArn?: string;
    /**
     * Settings that apply only if the input is a pull type of input.
     */
    sources?: Array<CfnInput.InputSourceRequestProperty | cdk.IResolvable> | cdk.IResolvable;
    srtSettings?: cdk.IResolvable | CfnInput.SrtSettingsRequestProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A collection of tags for this input.
     */
    tagsRaw?: any;
    /**
     * The type for this input.
     */
    type?: string;
    /**
     * Settings that apply only if the input is an push input where the source is on Amazon VPC.
     */
    vpc?: CfnInput.InputVpcRequestProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnInputProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnInput {
    /**
     * Settings that apply only if the input is a push type of input.
     *
     * The parent of this entity is Input.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdestinationrequest.html
     */
    interface InputDestinationRequestProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdestinationrequest.html#cfn-medialive-input-inputdestinationrequest-network
         */
        readonly network?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdestinationrequest.html#cfn-medialive-input-inputdestinationrequest-networkroutes
         */
        readonly networkRoutes?: Array<CfnInput.InputRequestDestinationRouteProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdestinationrequest.html#cfn-medialive-input-inputdestinationrequest-staticipaddress
         */
        readonly staticIpAddress?: string;
        /**
         * The stream name (application name/application instance) for the location the RTMP source content will be pushed to in MediaLive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdestinationrequest.html#cfn-medialive-input-inputdestinationrequest-streamname
         */
        readonly streamName?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputrequestdestinationroute.html
     */
    interface InputRequestDestinationRouteProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputrequestdestinationroute.html#cfn-medialive-input-inputrequestdestinationroute-cidr
         */
        readonly cidr?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputrequestdestinationroute.html#cfn-medialive-input-inputrequestdestinationroute-gateway
         */
        readonly gateway?: string;
    }
    /**
     * Settings that apply only if the input is an push input where the source is on Amazon VPC.
     *
     * The parent of this entity is Input.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputvpcrequest.html
     */
    interface InputVpcRequestProperty {
        /**
         * The list of up to five VPC security group IDs to attach to the input VPC network interfaces.
         *
         * The security groups require subnet IDs. If none are specified, MediaLive uses the VPC default security group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputvpcrequest.html#cfn-medialive-input-inputvpcrequest-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
        /**
         * The list of two VPC subnet IDs from the same VPC.
         *
         * You must associate subnet IDs to two unique Availability Zones.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputvpcrequest.html#cfn-medialive-input-inputvpcrequest-subnetids
         */
        readonly subnetIds?: Array<string>;
    }
    /**
     * Settings that apply only if the input is a MediaConnect input.
     *
     * The parent of this entity is Input.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-mediaconnectflowrequest.html
     */
    interface MediaConnectFlowRequestProperty {
        /**
         * The ARN of one or two MediaConnect flows that are the sources for this MediaConnect input.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-mediaconnectflowrequest.html#cfn-medialive-input-mediaconnectflowrequest-flowarn
         */
        readonly flowArn?: string;
    }
    /**
     * Settings that apply only if the input is an Elemental Link input.
     *
     * The parent of this entity is Input.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdevicesettings.html
     */
    interface InputDeviceSettingsProperty {
        /**
         * The unique ID for the device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdevicesettings.html#cfn-medialive-input-inputdevicesettings-id
         */
        readonly id?: string;
    }
    /**
     * Settings that apply only if the input is a pull type of input.
     *
     * The parent of this entity is Input.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputsourcerequest.html
     */
    interface InputSourceRequestProperty {
        /**
         * The password parameter that holds the password for accessing the upstream system.
         *
         * The password parameter applies only if the upstream system requires credentials.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputsourcerequest.html#cfn-medialive-input-inputsourcerequest-passwordparam
         */
        readonly passwordParam?: string;
        /**
         * For a pull input, the URL where MediaLive pulls the source content from.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputsourcerequest.html#cfn-medialive-input-inputsourcerequest-url
         */
        readonly url?: string;
        /**
         * The user name to connect to the upstream system.
         *
         * The user name applies only if the upstream system requires credentials.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputsourcerequest.html#cfn-medialive-input-inputsourcerequest-username
         */
        readonly username?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-srtsettingsrequest.html
     */
    interface SrtSettingsRequestProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-srtsettingsrequest.html#cfn-medialive-input-srtsettingsrequest-srtcallersources
         */
        readonly srtCallerSources?: Array<cdk.IResolvable | CfnInput.SrtCallerSourceRequestProperty> | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-srtcallersourcerequest.html
     */
    interface SrtCallerSourceRequestProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-srtcallersourcerequest.html#cfn-medialive-input-srtcallersourcerequest-decryption
         */
        readonly decryption?: cdk.IResolvable | CfnInput.SrtCallerDecryptionRequestProperty;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-srtcallersourcerequest.html#cfn-medialive-input-srtcallersourcerequest-minimumlatency
         */
        readonly minimumLatency?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-srtcallersourcerequest.html#cfn-medialive-input-srtcallersourcerequest-srtlisteneraddress
         */
        readonly srtListenerAddress?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-srtcallersourcerequest.html#cfn-medialive-input-srtcallersourcerequest-srtlistenerport
         */
        readonly srtListenerPort?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-srtcallersourcerequest.html#cfn-medialive-input-srtcallersourcerequest-streamid
         */
        readonly streamId?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-srtcallerdecryptionrequest.html
     */
    interface SrtCallerDecryptionRequestProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-srtcallerdecryptionrequest.html#cfn-medialive-input-srtcallerdecryptionrequest-algorithm
         */
        readonly algorithm?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-srtcallerdecryptionrequest.html#cfn-medialive-input-srtcallerdecryptionrequest-passphrasesecretarn
         */
        readonly passphraseSecretArn?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-multicastsettingscreaterequest.html
     */
    interface MulticastSettingsCreateRequestProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-multicastsettingscreaterequest.html#cfn-medialive-input-multicastsettingscreaterequest-sources
         */
        readonly sources?: Array<cdk.IResolvable | CfnInput.MulticastSourceCreateRequestProperty> | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-multicastsourcecreaterequest.html
     */
    interface MulticastSourceCreateRequestProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-multicastsourcecreaterequest.html#cfn-medialive-input-multicastsourcecreaterequest-sourceip
         */
        readonly sourceIp?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-multicastsourcecreaterequest.html#cfn-medialive-input-multicastsourcecreaterequest-url
         */
        readonly url?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdevicerequest.html
     */
    interface InputDeviceRequestProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-input-inputdevicerequest.html#cfn-medialive-input-inputdevicerequest-id
         */
        readonly id?: string;
    }
}
/**
 * Properties for defining a `CfnInput`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html
 */
export interface CfnInputProps {
    /**
     * Settings that apply only if the input is a push type of input.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-destinations
     */
    readonly destinations?: Array<CfnInput.InputDestinationRequestProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Settings that apply only if the input is an Elemental Link input.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-inputdevices
     */
    readonly inputDevices?: Array<CfnInput.InputDeviceSettingsProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-inputnetworklocation
     */
    readonly inputNetworkLocation?: string;
    /**
     * The list of input security groups (referenced by IDs) to attach to the input if the input is a push type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-inputsecuritygroups
     */
    readonly inputSecurityGroups?: Array<string>;
    /**
     * Settings that apply only if the input is a MediaConnect input.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-mediaconnectflows
     */
    readonly mediaConnectFlows?: Array<cdk.IResolvable | CfnInput.MediaConnectFlowRequestProperty> | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-multicastsettings
     */
    readonly multicastSettings?: cdk.IResolvable | CfnInput.MulticastSettingsCreateRequestProperty;
    /**
     * A name for the input.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-name
     */
    readonly name?: string;
    /**
     * The IAM role for MediaLive to assume when creating a MediaConnect input or Amazon VPC input.
     *
     * This doesn't apply to other types of inputs. The role is identified by its ARN.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-rolearn
     */
    readonly roleArn?: string;
    /**
     * Settings that apply only if the input is a pull type of input.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-sources
     */
    readonly sources?: Array<CfnInput.InputSourceRequestProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-srtsettings
     */
    readonly srtSettings?: cdk.IResolvable | CfnInput.SrtSettingsRequestProperty;
    /**
     * A collection of tags for this input.
     *
     * Each tag is a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-tags
     */
    readonly tags?: any;
    /**
     * The type for this input.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-type
     */
    readonly type?: string;
    /**
     * Settings that apply only if the input is an push input where the source is on Amazon VPC.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-input.html#cfn-medialive-input-vpc
     */
    readonly vpc?: CfnInput.InputVpcRequestProperty | cdk.IResolvable;
}
/**
 * The AWS::MediaLive::InputSecurityGroup is a MediaLive resource type that creates an input security group.
 *
 * A MediaLive input security group is associated with a MediaLive input. The input security group is an "allow list" of IP addresses that controls whether an external IP address can push content to the associated MediaLive input.
 *
 * @cloudformationResource AWS::MediaLive::InputSecurityGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-inputsecuritygroup.html
 */
export declare class CfnInputSecurityGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInputSecurityGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInputSecurityGroup;
    /**
     * The ARN of the MediaLive input security group. For example: arn:aws:medialive:us-west-1:111122223333:medialive:inputSecurityGroup:1234567
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The Id of the Input Security Group
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A collection of tags for this input security group.
     */
    tagsRaw?: any;
    /**
     * The list of IPv4 CIDR addresses to include in the input security group as "allowed" addresses.
     */
    whitelistRules?: Array<CfnInputSecurityGroup.InputWhitelistRuleCidrProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnInputSecurityGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnInputSecurityGroup {
    /**
     * An IPv4 CIDR range to include in this input security group.
     *
     * The parent of this entity is InputSecurityGroup.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-inputsecuritygroup-inputwhitelistrulecidr.html
     */
    interface InputWhitelistRuleCidrProperty {
        /**
         * An IPv4 CIDR range to include in this input security group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-inputsecuritygroup-inputwhitelistrulecidr.html#cfn-medialive-inputsecuritygroup-inputwhitelistrulecidr-cidr
         */
        readonly cidr?: string;
    }
}
/**
 * Properties for defining a `CfnInputSecurityGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-inputsecuritygroup.html
 */
export interface CfnInputSecurityGroupProps {
    /**
     * A collection of tags for this input security group.
     *
     * Each tag is a key-value pair.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-inputsecuritygroup.html#cfn-medialive-inputsecuritygroup-tags
     */
    readonly tags?: any;
    /**
     * The list of IPv4 CIDR addresses to include in the input security group as "allowed" addresses.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-inputsecuritygroup.html#cfn-medialive-inputsecuritygroup-whitelistrules
     */
    readonly whitelistRules?: Array<CfnInputSecurityGroup.InputWhitelistRuleCidrProperty | cdk.IResolvable> | cdk.IResolvable;
}
/**
 * Definition of AWS::MediaLive::ChannelPlacementGroup Resource Type.
 *
 * @cloudformationResource AWS::MediaLive::ChannelPlacementGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html
 */
export declare class CfnChannelPlacementGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnChannelPlacementGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnChannelPlacementGroup;
    /**
     * The ARN of the channel placement group.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * List of channel IDs added to the channel placement group.
     *
     * @cloudformationAttribute Channels
     */
    readonly attrChannels: Array<string>;
    /**
     * Unique internal identifier.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The current state of the ChannelPlacementGroupState
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The ID of the cluster the node is on.
     */
    clusterId?: string;
    /**
     * The name of the channel placement group.
     */
    name?: string;
    /**
     * List of nodes added to the channel placement group.
     */
    nodes?: Array<string>;
    /**
     * A collection of key-value pairs.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnChannelPlacementGroupProps);
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
 * Properties for defining a `CfnChannelPlacementGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html
 */
export interface CfnChannelPlacementGroupProps {
    /**
     * The ID of the cluster the node is on.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html#cfn-medialive-channelplacementgroup-clusterid
     */
    readonly clusterId?: string;
    /**
     * The name of the channel placement group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html#cfn-medialive-channelplacementgroup-name
     */
    readonly name?: string;
    /**
     * List of nodes added to the channel placement group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html#cfn-medialive-channelplacementgroup-nodes
     */
    readonly nodes?: Array<string>;
    /**
     * A collection of key-value pairs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-channelplacementgroup.html#cfn-medialive-channelplacementgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Definition of AWS::MediaLive::CloudWatchAlarmTemplate Resource Type.
 *
 * @cloudformationResource AWS::MediaLive::CloudWatchAlarmTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html
 */
export declare class CfnCloudWatchAlarmTemplate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCloudWatchAlarmTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCloudWatchAlarmTemplate;
    /**
     * A cloudwatch alarm template's ARN (Amazon Resource Name)
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time of resource creation.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * A CloudWatch alarm template group's id. Amazon Web Services provided template groups have ids that start with <code>`aws-`</code>
     *
     * @cloudformationAttribute GroupId
     */
    readonly attrGroupId: string;
    /**
     * A cloudwatch alarm template's id. Amazon Web Services provided templates have ids that start with <code>`aws-`</code>.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * @cloudformationAttribute Identifier
     */
    readonly attrIdentifier: string;
    /**
     * The date and time of latest resource modification.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The comparison operator used to compare the specified statistic and the threshold.
     */
    comparisonOperator: string;
    /**
     * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
     */
    datapointsToAlarm?: number;
    /**
     * A resource's optional description.
     */
    description?: string;
    /**
     * The number of periods over which data is compared to the specified threshold.
     */
    evaluationPeriods: number;
    /**
     * A cloudwatch alarm template group's identifier.
     */
    groupIdentifier: string;
    /**
     * The name of the metric associated with the alarm.
     */
    metricName: string;
    /**
     * A resource's name.
     */
    name: string;
    /**
     * The period, in seconds, over which the specified statistic is applied.
     */
    period: number;
    /**
     * The statistic to apply to the alarm's metric data.
     */
    statistic: string;
    /**
     * Represents the tags associated with a resource.
     */
    tags?: Record<string, string>;
    /**
     * The resource type this template should dynamically generate CloudWatch metric alarms for.
     */
    targetResourceType: string;
    /**
     * The threshold value to compare with the specified statistic.
     */
    threshold: number;
    /**
     * Specifies how missing data points are treated when evaluating the alarm's condition.
     */
    treatMissingData: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCloudWatchAlarmTemplateProps);
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
 * Properties for defining a `CfnCloudWatchAlarmTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html
 */
export interface CfnCloudWatchAlarmTemplateProps {
    /**
     * The comparison operator used to compare the specified statistic and the threshold.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-comparisonoperator
     */
    readonly comparisonOperator: string;
    /**
     * The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
     *
     * @default - 0
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-datapointstoalarm
     */
    readonly datapointsToAlarm?: number;
    /**
     * A resource's optional description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-description
     */
    readonly description?: string;
    /**
     * The number of periods over which data is compared to the specified threshold.
     *
     * @default - 0
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-evaluationperiods
     */
    readonly evaluationPeriods: number;
    /**
     * A cloudwatch alarm template group's identifier.
     *
     * Can be either be its id or current name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-groupidentifier
     */
    readonly groupIdentifier: string;
    /**
     * The name of the metric associated with the alarm.
     *
     * Must be compatible with targetResourceType.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-metricname
     */
    readonly metricName: string;
    /**
     * A resource's name.
     *
     * Names must be unique within the scope of a resource type in a specific region.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-name
     */
    readonly name: string;
    /**
     * The period, in seconds, over which the specified statistic is applied.
     *
     * @default - 0
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-period
     */
    readonly period: number;
    /**
     * The statistic to apply to the alarm's metric data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-statistic
     */
    readonly statistic: string;
    /**
     * Represents the tags associated with a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-tags
     */
    readonly tags?: Record<string, string>;
    /**
     * The resource type this template should dynamically generate CloudWatch metric alarms for.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-targetresourcetype
     */
    readonly targetResourceType: string;
    /**
     * The threshold value to compare with the specified statistic.
     *
     * @default - 0
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-threshold
     */
    readonly threshold: number;
    /**
     * Specifies how missing data points are treated when evaluating the alarm's condition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplate.html#cfn-medialive-cloudwatchalarmtemplate-treatmissingdata
     */
    readonly treatMissingData: string;
}
/**
 * Definition of AWS::MediaLive::CloudWatchAlarmTemplateGroup Resource Type.
 *
 * @cloudformationResource AWS::MediaLive::CloudWatchAlarmTemplateGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplategroup.html
 */
export declare class CfnCloudWatchAlarmTemplateGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCloudWatchAlarmTemplateGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCloudWatchAlarmTemplateGroup;
    /**
     * A cloudwatch alarm template group's ARN (Amazon Resource Name)
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time of resource creation.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * A CloudWatch alarm template group's id. Amazon Web Services provided template groups have ids that start with <code>`aws-`</code>
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * @cloudformationAttribute Identifier
     */
    readonly attrIdentifier: string;
    /**
     * The date and time of latest resource modification.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A resource's optional description.
     */
    description?: string;
    /**
     * A resource's name.
     */
    name: string;
    /**
     * Represents the tags associated with a resource.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCloudWatchAlarmTemplateGroupProps);
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
 * Properties for defining a `CfnCloudWatchAlarmTemplateGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplategroup.html
 */
export interface CfnCloudWatchAlarmTemplateGroupProps {
    /**
     * A resource's optional description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplategroup.html#cfn-medialive-cloudwatchalarmtemplategroup-description
     */
    readonly description?: string;
    /**
     * A resource's name.
     *
     * Names must be unique within the scope of a resource type in a specific region.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplategroup.html#cfn-medialive-cloudwatchalarmtemplategroup-name
     */
    readonly name: string;
    /**
     * Represents the tags associated with a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cloudwatchalarmtemplategroup.html#cfn-medialive-cloudwatchalarmtemplategroup-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Definition of AWS::MediaLive::Cluster Resource Type.
 *
 * @cloudformationResource AWS::MediaLive::Cluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cluster.html
 */
export declare class CfnCluster extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCluster from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCluster;
    /**
     * The ARN of the Cluster.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The MediaLive Channels that are currently running on Nodes in this Cluster.
     *
     * @cloudformationAttribute ChannelIds
     */
    readonly attrChannelIds: Array<string>;
    /**
     * The unique ID of the Cluster.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The current state of the Cluster.
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The hardware type for the cluster.
     */
    clusterType?: string;
    /**
     * The IAM role your nodes will use.
     */
    instanceRoleArn?: string;
    /**
     * The user-specified name of the Cluster to be created.
     */
    name?: string;
    /**
     * On premises settings which will have the interface network mappings and default Output logical interface.
     */
    networkSettings?: CfnCluster.ClusterNetworkSettingsProperty | cdk.IResolvable;
    /**
     * A collection of key-value pairs.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnClusterProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCluster {
    /**
     * On premises settings which will have the interface network mappings and default Output logical interface.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cluster-clusternetworksettings.html
     */
    interface ClusterNetworkSettingsProperty {
        /**
         * Default value if the customer does not define it in channel Output API.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cluster-clusternetworksettings.html#cfn-medialive-cluster-clusternetworksettings-defaultroute
         */
        readonly defaultRoute?: string;
        /**
         * Network mappings for the cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cluster-clusternetworksettings.html#cfn-medialive-cluster-clusternetworksettings-interfacemappings
         */
        readonly interfaceMappings?: Array<CfnCluster.InterfaceMappingProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * Network mappings for the cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cluster-interfacemapping.html
     */
    interface InterfaceMappingProperty {
        /**
         * logical interface name, unique in the list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cluster-interfacemapping.html#cfn-medialive-cluster-interfacemapping-logicalinterfacename
         */
        readonly logicalInterfaceName?: string;
        /**
         * Network Id to be associated with the logical interface name, can be duplicated in list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-cluster-interfacemapping.html#cfn-medialive-cluster-interfacemapping-networkid
         */
        readonly networkId?: string;
    }
}
/**
 * Properties for defining a `CfnCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cluster.html
 */
export interface CfnClusterProps {
    /**
     * The hardware type for the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cluster.html#cfn-medialive-cluster-clustertype
     */
    readonly clusterType?: string;
    /**
     * The IAM role your nodes will use.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cluster.html#cfn-medialive-cluster-instancerolearn
     */
    readonly instanceRoleArn?: string;
    /**
     * The user-specified name of the Cluster to be created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cluster.html#cfn-medialive-cluster-name
     */
    readonly name?: string;
    /**
     * On premises settings which will have the interface network mappings and default Output logical interface.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cluster.html#cfn-medialive-cluster-networksettings
     */
    readonly networkSettings?: CfnCluster.ClusterNetworkSettingsProperty | cdk.IResolvable;
    /**
     * A collection of key-value pairs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-cluster.html#cfn-medialive-cluster-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Definition of AWS::MediaLive::EventBridgeRuleTemplate Resource Type.
 *
 * @cloudformationResource AWS::MediaLive::EventBridgeRuleTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html
 */
export declare class CfnEventBridgeRuleTemplate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEventBridgeRuleTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEventBridgeRuleTemplate;
    /**
     * Target ARNs must be either an SNS topic or CloudWatch log group.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time of resource creation.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * An eventbridge rule template group's id. Amazon Web Services provided template groups have ids that start with <code>`aws-`</code>.
     *
     * @cloudformationAttribute GroupId
     */
    readonly attrGroupId: string;
    /**
     * An eventbridge rule template's id. Amazon Web Services provided templates have ids that start with <code>`aws-`</code>
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Placeholder documentation for __string
     *
     * @cloudformationAttribute Identifier
     */
    readonly attrIdentifier: string;
    /**
     * The date and time of latest resource modification.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A resource's optional description.
     */
    description?: string;
    /**
     * The destinations that will receive the event notifications.
     */
    eventTargets?: Array<CfnEventBridgeRuleTemplate.EventBridgeRuleTemplateTargetProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The type of event to match with the rule.
     */
    eventType: string;
    /**
     * An eventbridge rule template group's identifier.
     */
    groupIdentifier: string;
    /**
     * A resource's name.
     */
    name: string;
    /**
     * Represents the tags associated with a resource.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEventBridgeRuleTemplateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEventBridgeRuleTemplate {
    /**
     * The target to which to send matching events.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-eventbridgeruletemplate-eventbridgeruletemplatetarget.html
     */
    interface EventBridgeRuleTemplateTargetProperty {
        /**
         * Target ARNs must be either an SNS topic or CloudWatch log group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-eventbridgeruletemplate-eventbridgeruletemplatetarget.html#cfn-medialive-eventbridgeruletemplate-eventbridgeruletemplatetarget-arn
         */
        readonly arn: string;
    }
}
/**
 * Properties for defining a `CfnEventBridgeRuleTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html
 */
export interface CfnEventBridgeRuleTemplateProps {
    /**
     * A resource's optional description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html#cfn-medialive-eventbridgeruletemplate-description
     */
    readonly description?: string;
    /**
     * The destinations that will receive the event notifications.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html#cfn-medialive-eventbridgeruletemplate-eventtargets
     */
    readonly eventTargets?: Array<CfnEventBridgeRuleTemplate.EventBridgeRuleTemplateTargetProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The type of event to match with the rule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html#cfn-medialive-eventbridgeruletemplate-eventtype
     */
    readonly eventType: string;
    /**
     * An eventbridge rule template group's identifier.
     *
     * Can be either be its id or current name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html#cfn-medialive-eventbridgeruletemplate-groupidentifier
     */
    readonly groupIdentifier: string;
    /**
     * A resource's name.
     *
     * Names must be unique within the scope of a resource type in a specific region.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html#cfn-medialive-eventbridgeruletemplate-name
     */
    readonly name: string;
    /**
     * Represents the tags associated with a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplate.html#cfn-medialive-eventbridgeruletemplate-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * Definition of AWS::MediaLive::EventBridgeRuleTemplateGroup Resource Type.
 *
 * @cloudformationResource AWS::MediaLive::EventBridgeRuleTemplateGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplategroup.html
 */
export declare class CfnEventBridgeRuleTemplateGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEventBridgeRuleTemplateGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEventBridgeRuleTemplateGroup;
    /**
     * An eventbridge rule template group's ARN (Amazon Resource Name)
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time of resource creation.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * An eventbridge rule template group's id. Amazon Web Services provided template groups have ids that start with <code>`aws-`</code>.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * @cloudformationAttribute Identifier
     */
    readonly attrIdentifier: string;
    /**
     * The date and time of latest resource modification.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A resource's optional description.
     */
    description?: string;
    /**
     * A resource's name.
     */
    name: string;
    /**
     * Represents the tags associated with a resource.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEventBridgeRuleTemplateGroupProps);
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
 * Properties for defining a `CfnEventBridgeRuleTemplateGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplategroup.html
 */
export interface CfnEventBridgeRuleTemplateGroupProps {
    /**
     * A resource's optional description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplategroup.html#cfn-medialive-eventbridgeruletemplategroup-description
     */
    readonly description?: string;
    /**
     * A resource's name.
     *
     * Names must be unique within the scope of a resource type in a specific region.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplategroup.html#cfn-medialive-eventbridgeruletemplategroup-name
     */
    readonly name: string;
    /**
     * Represents the tags associated with a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-eventbridgeruletemplategroup.html#cfn-medialive-eventbridgeruletemplategroup-tags
     */
    readonly tags?: Record<string, string>;
}
/**
 * The multiplex object.
 *
 * @cloudformationResource AWS::MediaLive::Multiplex
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html
 */
export declare class CfnMultiplex extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMultiplex from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMultiplex;
    /**
     * The unique arn of the multiplex.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique id of the multiplex.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The number of currently healthy pipelines.
     *
     * @cloudformationAttribute PipelinesRunningCount
     */
    readonly attrPipelinesRunningCount: number;
    /**
     * The number of programs in the multiplex.
     *
     * @cloudformationAttribute ProgramCount
     */
    readonly attrProgramCount: number;
    /**
     * The current state of the multiplex.
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * A list of availability zones for the multiplex.
     */
    availabilityZones: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A list of the multiplex output destinations.
     */
    destinations?: Array<cdk.IResolvable | CfnMultiplex.MultiplexOutputDestinationProperty> | cdk.IResolvable;
    /**
     * Configuration for a multiplex event.
     */
    multiplexSettings: cdk.IResolvable | CfnMultiplex.MultiplexSettingsProperty;
    /**
     * The name of the multiplex.
     */
    name: string;
    /**
     * A collection of key-value pairs.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnMultiplexProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMultiplex {
    /**
     * Multiplex output destination settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplex-multiplexoutputdestination.html
     */
    interface MultiplexOutputDestinationProperty {
        /**
         * Multiplex MediaConnect output destination settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplex-multiplexoutputdestination.html#cfn-medialive-multiplex-multiplexoutputdestination-multiplexmediaconnectoutputdestinationsettings
         */
        readonly multiplexMediaConnectOutputDestinationSettings?: cdk.IResolvable | CfnMultiplex.MultiplexMediaConnectOutputDestinationSettingsProperty;
    }
    /**
     * Multiplex MediaConnect output destination settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplex-multiplexmediaconnectoutputdestinationsettings.html
     */
    interface MultiplexMediaConnectOutputDestinationSettingsProperty {
        /**
         * The MediaConnect entitlement ARN available as a Flow source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplex-multiplexmediaconnectoutputdestinationsettings.html#cfn-medialive-multiplex-multiplexmediaconnectoutputdestinationsettings-entitlementarn
         */
        readonly entitlementArn?: string;
    }
    /**
     * Contains configuration for a Multiplex event.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplex-multiplexsettings.html
     */
    interface MultiplexSettingsProperty {
        /**
         * Maximum video buffer delay in milliseconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplex-multiplexsettings.html#cfn-medialive-multiplex-multiplexsettings-maximumvideobufferdelaymilliseconds
         */
        readonly maximumVideoBufferDelayMilliseconds?: number;
        /**
         * Transport stream bit rate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplex-multiplexsettings.html#cfn-medialive-multiplex-multiplexsettings-transportstreambitrate
         */
        readonly transportStreamBitrate: number;
        /**
         * Transport stream ID.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplex-multiplexsettings.html#cfn-medialive-multiplex-multiplexsettings-transportstreamid
         */
        readonly transportStreamId: number;
        /**
         * Transport stream reserved bit rate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplex-multiplexsettings.html#cfn-medialive-multiplex-multiplexsettings-transportstreamreservedbitrate
         */
        readonly transportStreamReservedBitrate?: number;
    }
}
/**
 * Properties for defining a `CfnMultiplex`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html
 */
export interface CfnMultiplexProps {
    /**
     * A list of availability zones for the multiplex.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-availabilityzones
     */
    readonly availabilityZones: Array<string>;
    /**
     * A list of the multiplex output destinations.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-destinations
     */
    readonly destinations?: Array<cdk.IResolvable | CfnMultiplex.MultiplexOutputDestinationProperty> | cdk.IResolvable;
    /**
     * Configuration for a multiplex event.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-multiplexsettings
     */
    readonly multiplexSettings: cdk.IResolvable | CfnMultiplex.MultiplexSettingsProperty;
    /**
     * The name of the multiplex.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-name
     */
    readonly name: string;
    /**
     * A collection of key-value pairs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplex.html#cfn-medialive-multiplex-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Resource schema for AWS::MediaLive::Multiplexprogram.
 *
 * @cloudformationResource AWS::MediaLive::Multiplexprogram
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html
 */
export declare class CfnMultiplexprogram extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnMultiplexprogram from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnMultiplexprogram;
    /**
     * The unique ID of the channel.
     *
     * @cloudformationAttribute ChannelId
     */
    readonly attrChannelId: string;
    /**
     * The unique id of the multiplex.
     */
    multiplexId?: string;
    /**
     * Multiplex Program settings configuration.
     */
    multiplexProgramSettings?: cdk.IResolvable | CfnMultiplexprogram.MultiplexProgramSettingsProperty;
    /**
     * Packet identifiers map for a given Multiplex program.
     */
    packetIdentifiersMap?: cdk.IResolvable | CfnMultiplexprogram.MultiplexProgramPacketIdentifiersMapProperty;
    /**
     * Contains information about the current sources for the specified program in the specified multiplex.
     */
    pipelineDetails?: Array<cdk.IResolvable | CfnMultiplexprogram.MultiplexProgramPipelineDetailProperty> | cdk.IResolvable;
    /**
     * Indicates which pipeline is preferred by the multiplex for program ingest.
     */
    preferredChannelPipeline?: string;
    /**
     * The name of the multiplex program.
     */
    programName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnMultiplexprogramProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnMultiplexprogram {
    /**
     * Multiplex Program settings configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogramsettings.html
     */
    interface MultiplexProgramSettingsProperty {
        /**
         * Indicates which pipeline is preferred by the multiplex for program ingest.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogramsettings.html#cfn-medialive-multiplexprogram-multiplexprogramsettings-preferredchannelpipeline
         */
        readonly preferredChannelPipeline?: string;
        /**
         * Unique program number.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogramsettings.html#cfn-medialive-multiplexprogram-multiplexprogramsettings-programnumber
         */
        readonly programNumber: number;
        /**
         * Transport stream service descriptor configuration for the Multiplex program.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogramsettings.html#cfn-medialive-multiplexprogram-multiplexprogramsettings-servicedescriptor
         */
        readonly serviceDescriptor?: cdk.IResolvable | CfnMultiplexprogram.MultiplexProgramServiceDescriptorProperty;
        /**
         * Program video settings configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogramsettings.html#cfn-medialive-multiplexprogram-multiplexprogramsettings-videosettings
         */
        readonly videoSettings?: cdk.IResolvable | CfnMultiplexprogram.MultiplexVideoSettingsProperty;
    }
    /**
     * Transport stream service descriptor configuration for the Multiplex program.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogramservicedescriptor.html
     */
    interface MultiplexProgramServiceDescriptorProperty {
        /**
         * Name of the provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogramservicedescriptor.html#cfn-medialive-multiplexprogram-multiplexprogramservicedescriptor-providername
         */
        readonly providerName: string;
        /**
         * Name of the service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogramservicedescriptor.html#cfn-medialive-multiplexprogram-multiplexprogramservicedescriptor-servicename
         */
        readonly serviceName: string;
    }
    /**
     * The video configuration for each program in a multiplex.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexvideosettings.html
     */
    interface MultiplexVideoSettingsProperty {
        /**
         * The constant bitrate configuration for the video encode.
         *
         * When this field is defined, StatmuxSettings must be undefined.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexvideosettings.html#cfn-medialive-multiplexprogram-multiplexvideosettings-constantbitrate
         */
        readonly constantBitrate?: number;
        /**
         * Statmux rate control settings.
         *
         * When this field is defined, ConstantBitrate must be undefined.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexvideosettings.html#cfn-medialive-multiplexprogram-multiplexvideosettings-statmuxsettings
         */
        readonly statmuxSettings?: cdk.IResolvable | CfnMultiplexprogram.MultiplexStatmuxVideoSettingsProperty;
    }
    /**
     * Statmux rate control settings.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexstatmuxvideosettings.html
     */
    interface MultiplexStatmuxVideoSettingsProperty {
        /**
         * Maximum statmux bitrate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexstatmuxvideosettings.html#cfn-medialive-multiplexprogram-multiplexstatmuxvideosettings-maximumbitrate
         */
        readonly maximumBitrate?: number;
        /**
         * Minimum statmux bitrate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexstatmuxvideosettings.html#cfn-medialive-multiplexprogram-multiplexstatmuxvideosettings-minimumbitrate
         */
        readonly minimumBitrate?: number;
        /**
         * The purpose of the priority is to use a combination of the\nmultiplex rate control algorithm and the QVBR capability of the\nencoder to prioritize the video quality of some channels in a\nmultiplex over others.
         *
         * Channels that have a higher priority will\nget higher video quality at the expense of the video quality of\nother channels in the multiplex with lower priority.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexstatmuxvideosettings.html#cfn-medialive-multiplexprogram-multiplexstatmuxvideosettings-priority
         */
        readonly priority?: number;
    }
    /**
     * Packet identifiers map for a given Multiplex program.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap.html
     */
    interface MultiplexProgramPacketIdentifiersMapProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-audiopids
         */
        readonly audioPids?: Array<number> | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-dvbsubpids
         */
        readonly dvbSubPids?: Array<number> | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-dvbteletextpid
         */
        readonly dvbTeletextPid?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-etvplatformpid
         */
        readonly etvPlatformPid?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-etvsignalpid
         */
        readonly etvSignalPid?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-klvdatapids
         */
        readonly klvDataPids?: Array<number> | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-pcrpid
         */
        readonly pcrPid?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-pmtpid
         */
        readonly pmtPid?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-privatemetadatapid
         */
        readonly privateMetadataPid?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-scte27pids
         */
        readonly scte27Pids?: Array<number> | cdk.IResolvable;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-scte35pid
         */
        readonly scte35Pid?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-timedmetadatapid
         */
        readonly timedMetadataPid?: number;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap.html#cfn-medialive-multiplexprogram-multiplexprogrampacketidentifiersmap-videopid
         */
        readonly videoPid?: number;
    }
    /**
     * The current source for one of the pipelines in the multiplex.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampipelinedetail.html
     */
    interface MultiplexProgramPipelineDetailProperty {
        /**
         * Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampipelinedetail.html#cfn-medialive-multiplexprogram-multiplexprogrampipelinedetail-activechannelpipeline
         */
        readonly activeChannelPipeline?: string;
        /**
         * Identifies a specific pipeline in the multiplex.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-multiplexprogram-multiplexprogrampipelinedetail.html#cfn-medialive-multiplexprogram-multiplexprogrampipelinedetail-pipelineid
         */
        readonly pipelineId?: string;
    }
}
/**
 * Properties for defining a `CfnMultiplexprogram`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html
 */
export interface CfnMultiplexprogramProps {
    /**
     * The unique id of the multiplex.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexid
     */
    readonly multiplexId?: string;
    /**
     * Multiplex Program settings configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-multiplexprogramsettings
     */
    readonly multiplexProgramSettings?: cdk.IResolvable | CfnMultiplexprogram.MultiplexProgramSettingsProperty;
    /**
     * Packet identifiers map for a given Multiplex program.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-packetidentifiersmap
     */
    readonly packetIdentifiersMap?: cdk.IResolvable | CfnMultiplexprogram.MultiplexProgramPacketIdentifiersMapProperty;
    /**
     * Contains information about the current sources for the specified program in the specified multiplex.
     *
     * Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-pipelinedetails
     */
    readonly pipelineDetails?: Array<cdk.IResolvable | CfnMultiplexprogram.MultiplexProgramPipelineDetailProperty> | cdk.IResolvable;
    /**
     * Indicates which pipeline is preferred by the multiplex for program ingest.
     *
     * If set to \"PIPELINE_0\" or \"PIPELINE_1\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,
     * it will switch back once that ingest is healthy again. If set to \"CURRENTLY_ACTIVE\",
     * it will not switch back to the other pipeline based on it recovering to a healthy state,
     * it will only switch if the active pipeline becomes unhealthy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-preferredchannelpipeline
     */
    readonly preferredChannelPipeline?: string;
    /**
     * The name of the multiplex program.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-multiplexprogram.html#cfn-medialive-multiplexprogram-programname
     */
    readonly programName?: string;
}
/**
 * Resource schema for AWS::MediaLive::Network.
 *
 * @cloudformationResource AWS::MediaLive::Network
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html
 */
export declare class CfnNetwork extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnNetwork from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnNetwork;
    /**
     * The ARN of the Network.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute AssociatedClusterIds
     */
    readonly attrAssociatedClusterIds: Array<string>;
    /**
     * The unique ID of the Network.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The list of IP address cidr pools for the network.
     */
    ipPools: Array<CfnNetwork.IpPoolProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The user-specified name of the Network to be created.
     */
    name: string;
    /**
     * The routes for the network.
     */
    routes?: Array<cdk.IResolvable | CfnNetwork.RouteProperty> | cdk.IResolvable;
    /**
     * A collection of key-value pairs.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnNetworkProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnNetwork {
    /**
     * IP address cidr pool.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-network-ippool.html
     */
    interface IpPoolProperty {
        /**
         * IP address cidr pool.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-network-ippool.html#cfn-medialive-network-ippool-cidr
         */
        readonly cidr?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-network-route.html
     */
    interface RouteProperty {
        /**
         * Ip address cidr.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-network-route.html#cfn-medialive-network-route-cidr
         */
        readonly cidr?: string;
        /**
         * IP address for the route packet paths.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-network-route.html#cfn-medialive-network-route-gateway
         */
        readonly gateway?: string;
    }
}
/**
 * Properties for defining a `CfnNetwork`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html
 */
export interface CfnNetworkProps {
    /**
     * The list of IP address cidr pools for the network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html#cfn-medialive-network-ippools
     */
    readonly ipPools: Array<CfnNetwork.IpPoolProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The user-specified name of the Network to be created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html#cfn-medialive-network-name
     */
    readonly name: string;
    /**
     * The routes for the network.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html#cfn-medialive-network-routes
     */
    readonly routes?: Array<cdk.IResolvable | CfnNetwork.RouteProperty> | cdk.IResolvable;
    /**
     * A collection of key-value pairs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-network.html#cfn-medialive-network-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Definition of AWS::MediaLive::SdiSource Resource Type.
 *
 * @cloudformationResource AWS::MediaLive::SdiSource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-sdisource.html
 */
export declare class CfnSdiSource extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSdiSource from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSdiSource;
    /**
     * The unique arn of the SdiSource.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The unique identifier of the SdiSource.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The list of inputs currently using this SDI source.
     *
     * @cloudformationAttribute Inputs
     */
    readonly attrInputs: Array<string>;
    /**
     * The current state of the SdiSource.
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The current state of the SdiSource.
     */
    mode?: string;
    /**
     * The name of the SdiSource.
     */
    name: string;
    /**
     * A collection of key-value pairs.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The interface mode of the SdiSource.
     */
    type: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSdiSourceProps);
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
 * Properties for defining a `CfnSdiSource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-sdisource.html
 */
export interface CfnSdiSourceProps {
    /**
     * The current state of the SdiSource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-sdisource.html#cfn-medialive-sdisource-mode
     */
    readonly mode?: string;
    /**
     * The name of the SdiSource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-sdisource.html#cfn-medialive-sdisource-name
     */
    readonly name: string;
    /**
     * A collection of key-value pairs.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-sdisource.html#cfn-medialive-sdisource-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The interface mode of the SdiSource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-sdisource.html#cfn-medialive-sdisource-type
     */
    readonly type: string;
}
/**
 * Definition of AWS::MediaLive::SignalMap Resource Type.
 *
 * @cloudformationResource AWS::MediaLive::SignalMap
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-signalmap.html
 */
export declare class CfnSignalMap extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSignalMap from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSignalMap;
    /**
     * A signal map's ARN (Amazon Resource Name)
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * An alarm template group's id.
     *
     * @cloudformationAttribute CloudWatchAlarmTemplateGroupIds
     */
    readonly attrCloudWatchAlarmTemplateGroupIds: Array<string>;
    /**
     * The date and time of resource creation.
     *
     * @cloudformationAttribute CreatedAt
     */
    readonly attrCreatedAt: string;
    /**
     * Error message associated with a failed creation or failed update attempt of a signal map.
     *
     * @cloudformationAttribute ErrorMessage
     */
    readonly attrErrorMessage: string;
    /**
     * An eventbridge rule template group's id.
     *
     * @cloudformationAttribute EventBridgeRuleTemplateGroupIds
     */
    readonly attrEventBridgeRuleTemplateGroupIds: Array<string>;
    /**
     * A map representing an incomplete AWS media workflow as a graph.
     *
     * @cloudformationAttribute FailedMediaResourceMap
     */
    readonly attrFailedMediaResourceMap: cdk.IResolvable;
    /**
     * A signal map's id.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * @cloudformationAttribute Identifier
     */
    readonly attrIdentifier: string;
    /**
     * The date and time of latest discovery.
     *
     * @cloudformationAttribute LastDiscoveredAt
     */
    readonly attrLastDiscoveredAt: string;
    /**
     * Represents the latest successful monitor deployment of a signal map.
     *
     * @cloudformationAttribute LastSuccessfulMonitorDeployment
     */
    readonly attrLastSuccessfulMonitorDeployment: cdk.IResolvable;
    /**
     * A map representing an AWS media workflow as a graph.
     *
     * @cloudformationAttribute MediaResourceMap
     */
    readonly attrMediaResourceMap: cdk.IResolvable;
    /**
     * The date and time of latest resource modification.
     *
     * @cloudformationAttribute ModifiedAt
     */
    readonly attrModifiedAt: string;
    /**
     * If true, there are pending monitor changes for this signal map that can be deployed.
     *
     * @cloudformationAttribute MonitorChangesPendingDeployment
     */
    readonly attrMonitorChangesPendingDeployment: cdk.IResolvable;
    /**
     * Represents the latest monitor deployment of a signal map.
     *
     * @cloudformationAttribute MonitorDeployment
     */
    readonly attrMonitorDeployment: cdk.IResolvable;
    /**
     * A signal map's current status, which is dependent on its lifecycle actions or associated jobs.
     *
     * @cloudformationAttribute Status
     */
    readonly attrStatus: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * A cloudwatch alarm template group's identifier.
     */
    cloudWatchAlarmTemplateGroupIdentifiers?: Array<string>;
    /**
     * A resource's optional description.
     */
    description?: string;
    /**
     * A top-level supported Amazon Web Services resource ARN to discover a signal map from.
     */
    discoveryEntryPointArn: string;
    /**
     * An eventbridge rule template group's identifier.
     */
    eventBridgeRuleTemplateGroupIdentifiers?: Array<string>;
    /**
     * If true, will force a rediscovery of a signal map if an unchanged discoveryEntryPointArn is provided.
     */
    forceRediscovery?: boolean | cdk.IResolvable;
    /**
     * A resource's name.
     */
    name: string;
    /**
     * Represents the tags associated with a resource.
     */
    tags?: Record<string, string>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSignalMapProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSignalMap {
    /**
     * An Amazon Web Services resource used in media workflows.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-mediaresource.html
     */
    interface MediaResourceProperty {
        /**
         * A direct destination neighbor to an Amazon Web Services media resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-mediaresource.html#cfn-medialive-signalmap-mediaresource-destinations
         */
        readonly destinations?: Array<cdk.IResolvable | CfnSignalMap.MediaResourceNeighborProperty> | cdk.IResolvable;
        /**
         * The logical name of an Amazon Web Services media resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-mediaresource.html#cfn-medialive-signalmap-mediaresource-name
         */
        readonly name?: string;
        /**
         * A direct source neighbor to an Amazon Web Services media resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-mediaresource.html#cfn-medialive-signalmap-mediaresource-sources
         */
        readonly sources?: Array<cdk.IResolvable | CfnSignalMap.MediaResourceNeighborProperty> | cdk.IResolvable;
    }
    /**
     * A direct source or destination neighbor to an Amazon Web Services media resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-mediaresourceneighbor.html
     */
    interface MediaResourceNeighborProperty {
        /**
         * The ARN of a resource used in Amazon Web Services media workflows.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-mediaresourceneighbor.html#cfn-medialive-signalmap-mediaresourceneighbor-arn
         */
        readonly arn: string;
        /**
         * The logical name of an Amazon Web Services media resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-mediaresourceneighbor.html#cfn-medialive-signalmap-mediaresourceneighbor-name
         */
        readonly name?: string;
    }
    /**
     * Represents the latest successful monitor deployment of a signal map.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-successfulmonitordeployment.html
     */
    interface SuccessfulMonitorDeploymentProperty {
        /**
         * URI associated with a signal map's monitor deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-successfulmonitordeployment.html#cfn-medialive-signalmap-successfulmonitordeployment-detailsuri
         */
        readonly detailsUri: string;
        /**
         * A signal map's monitor deployment status.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-successfulmonitordeployment.html#cfn-medialive-signalmap-successfulmonitordeployment-status
         */
        readonly status: string;
    }
    /**
     * Represents the latest monitor deployment of a signal map.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-monitordeployment.html
     */
    interface MonitorDeploymentProperty {
        /**
         * URI associated with a signal map's monitor deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-monitordeployment.html#cfn-medialive-signalmap-monitordeployment-detailsuri
         */
        readonly detailsUri?: string;
        /**
         * Error message associated with a failed monitor deployment of a signal map.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-monitordeployment.html#cfn-medialive-signalmap-monitordeployment-errormessage
         */
        readonly errorMessage?: string;
        /**
         * The signal map monitor deployment status.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-medialive-signalmap-monitordeployment.html#cfn-medialive-signalmap-monitordeployment-status
         */
        readonly status: string;
    }
}
/**
 * Properties for defining a `CfnSignalMap`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-signalmap.html
 */
export interface CfnSignalMapProps {
    /**
     * A cloudwatch alarm template group's identifier.
     *
     * Can be either be its id or current name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-signalmap.html#cfn-medialive-signalmap-cloudwatchalarmtemplategroupidentifiers
     */
    readonly cloudWatchAlarmTemplateGroupIdentifiers?: Array<string>;
    /**
     * A resource's optional description.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-signalmap.html#cfn-medialive-signalmap-description
     */
    readonly description?: string;
    /**
     * A top-level supported Amazon Web Services resource ARN to discover a signal map from.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-signalmap.html#cfn-medialive-signalmap-discoveryentrypointarn
     */
    readonly discoveryEntryPointArn: string;
    /**
     * An eventbridge rule template group's identifier.
     *
     * Can be either be its id or current name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-signalmap.html#cfn-medialive-signalmap-eventbridgeruletemplategroupidentifiers
     */
    readonly eventBridgeRuleTemplateGroupIdentifiers?: Array<string>;
    /**
     * If true, will force a rediscovery of a signal map if an unchanged discoveryEntryPointArn is provided.
     *
     * @default - false
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-signalmap.html#cfn-medialive-signalmap-forcerediscovery
     */
    readonly forceRediscovery?: boolean | cdk.IResolvable;
    /**
     * A resource's name.
     *
     * Names must be unique within the scope of a resource type in a specific region.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-signalmap.html#cfn-medialive-signalmap-name
     */
    readonly name: string;
    /**
     * Represents the tags associated with a resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-medialive-signalmap.html#cfn-medialive-signalmap-tags
     */
    readonly tags?: Record<string, string>;
}
