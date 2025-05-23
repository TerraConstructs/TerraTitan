import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The AWS::MediaConvert::JobTemplate resource is an AWS Elemental MediaConvert resource type that you can use to generate transcoding jobs.
 *
 * When you declare this entity in your AWS CloudFormation template, you pass in your transcoding job settings in JSON or YAML format. This settings specification must be formed in a particular way that conforms to AWS Elemental MediaConvert job validation. For more information about creating a job template model for the `SettingsJson` property, see the Remarks section later in this topic.
 *
 * For information about job templates, see [Working with AWS Elemental MediaConvert Job Templates](https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-job-templates.html) in the ** .
 *
 * @cloudformationResource AWS::MediaConvert::JobTemplate
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html
 */
export declare class CfnJobTemplate extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnJobTemplate from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnJobTemplate;
    /**
     * The Amazon Resource Name (ARN) of the job template, such as `arn:aws:mediaconvert:us-west-2:123456789012` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the job template, such as `Streaming stack DASH` .
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
     */
    accelerationSettings?: CfnJobTemplate.AccelerationSettingsProperty | cdk.IResolvable;
    /**
     * Optional.
     */
    category?: string;
    /**
     * Optional.
     */
    description?: string;
    /**
     * Optional.
     */
    hopDestinations?: Array<CfnJobTemplate.HopDestinationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Name of the output group.
     */
    name?: string;
    /**
     * Specify the relative priority for this job.
     */
    priority?: number;
    /**
     * Optional.
     */
    queue?: string;
    /**
     * Specify, in JSON format, the transcoding job settings for this job template.
     */
    settingsJson: any | cdk.IResolvable;
    /**
     * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events.
     */
    statusUpdateInterval?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnJobTemplateProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnJobTemplate {
    /**
     * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
     *
     * Outputs that use this feature incur pro-tier pricing. For information about feature limitations, For more information, see [Job Limitations for Accelerated Transcoding in AWS Elemental MediaConvert](https://docs.aws.amazon.com/mediaconvert/latest/ug/job-requirements.html) in the *AWS Elemental MediaConvert User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconvert-jobtemplate-accelerationsettings.html
     */
    interface AccelerationSettingsProperty {
        /**
         * Specify the conditions when the service will run your job with accelerated transcoding.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconvert-jobtemplate-accelerationsettings.html#cfn-mediaconvert-jobtemplate-accelerationsettings-mode
         */
        readonly mode: string;
    }
    /**
     * Optional.
     *
     * Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed. For more information, see [Setting Up Queue Hopping to Avoid Long Waits](https://docs.aws.amazon.com/mediaconvert/latest/ug/setting-up-queue-hopping-to-avoid-long-waits.html) in the *AWS Elemental MediaConvert User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconvert-jobtemplate-hopdestination.html
     */
    interface HopDestinationProperty {
        /**
         * Optional.
         *
         * When you set up a job to use queue hopping, you can specify a different relative priority for the job in the destination queue. If you don't specify, the relative priority will remain the same as in the previous queue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconvert-jobtemplate-hopdestination.html#cfn-mediaconvert-jobtemplate-hopdestination-priority
         */
        readonly priority?: number;
        /**
         * Optional unless the job is submitted on the default queue.
         *
         * When you set up a job to use queue hopping, you can specify a destination queue. This queue cannot be the original queue to which the job is submitted. If the original queue isn't the default queue and you don't specify the destination queue, the job will move to the default queue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconvert-jobtemplate-hopdestination.html#cfn-mediaconvert-jobtemplate-hopdestination-queue
         */
        readonly queue?: string;
        /**
         * Required for setting up a job to use queue hopping.
         *
         * Minimum wait time in minutes until the job can hop to the destination queue. Valid range is 1 to 4320 minutes, inclusive.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mediaconvert-jobtemplate-hopdestination.html#cfn-mediaconvert-jobtemplate-hopdestination-waitminutes
         */
        readonly waitMinutes?: number;
    }
}
/**
 * Properties for defining a `CfnJobTemplate`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html
 */
export interface CfnJobTemplateProps {
    /**
     * Accelerated transcoding can significantly speed up jobs with long, visually complex content.
     *
     * Outputs that use this feature incur pro-tier pricing. For information about feature limitations, For more information, see [Job Limitations for Accelerated Transcoding in AWS Elemental MediaConvert](https://docs.aws.amazon.com/mediaconvert/latest/ug/job-requirements.html) in the *AWS Elemental MediaConvert User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html#cfn-mediaconvert-jobtemplate-accelerationsettings
     */
    readonly accelerationSettings?: CfnJobTemplate.AccelerationSettingsProperty | cdk.IResolvable;
    /**
     * Optional.
     *
     * A category for the job template you are creating
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html#cfn-mediaconvert-jobtemplate-category
     */
    readonly category?: string;
    /**
     * Optional.
     *
     * A description of the job template you are creating.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html#cfn-mediaconvert-jobtemplate-description
     */
    readonly description?: string;
    /**
     * Optional.
     *
     * Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed. For more information, see [Setting Up Queue Hopping to Avoid Long Waits](https://docs.aws.amazon.com/mediaconvert/latest/ug/setting-up-queue-hopping-to-avoid-long-waits.html) in the *AWS Elemental MediaConvert User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html#cfn-mediaconvert-jobtemplate-hopdestinations
     */
    readonly hopDestinations?: Array<CfnJobTemplate.HopDestinationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Name of the output group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html#cfn-mediaconvert-jobtemplate-name
     */
    readonly name?: string;
    /**
     * Specify the relative priority for this job.
     *
     * In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first. If you don't specify a priority, the service uses the default value 0. Minimum: -50 Maximum: 50
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html#cfn-mediaconvert-jobtemplate-priority
     */
    readonly priority?: number;
    /**
     * Optional.
     *
     * The queue that jobs created from this template are assigned to. Specify the Amazon Resource Name (ARN) of the queue. For example, arn:aws:mediaconvert:us-west-2:505474453218:queues/Default. If you don't specify this, jobs will go to the default queue.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html#cfn-mediaconvert-jobtemplate-queue
     */
    readonly queue?: string;
    /**
     * Specify, in JSON format, the transcoding job settings for this job template.
     *
     * This specification must conform to the AWS Elemental MediaConvert job validation. For information about forming this specification, see the Remarks section later in this topic.
     *
     * For more information about MediaConvert job templates, see [Working with AWS Elemental MediaConvert Job Templates](https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-job-templates.html) in the ** .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html#cfn-mediaconvert-jobtemplate-settingsjson
     */
    readonly settingsJson: any | cdk.IResolvable;
    /**
     * Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events.
     *
     * Set the interval, in seconds, between status updates. MediaConvert sends an update at this interval from the time the service begins processing your job to the time it completes the transcode or encounters an error.
     *
     * Specify one of the following enums:
     *
     * SECONDS_10
     *
     * SECONDS_12
     *
     * SECONDS_15
     *
     * SECONDS_20
     *
     * SECONDS_30
     *
     * SECONDS_60
     *
     * SECONDS_120
     *
     * SECONDS_180
     *
     * SECONDS_240
     *
     * SECONDS_300
     *
     * SECONDS_360
     *
     * SECONDS_420
     *
     * SECONDS_480
     *
     * SECONDS_540
     *
     * SECONDS_600
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html#cfn-mediaconvert-jobtemplate-statusupdateinterval
     */
    readonly statusUpdateInterval?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-jobtemplate.html#cfn-mediaconvert-jobtemplate-tags
     */
    readonly tags?: any;
}
/**
 * The AWS::MediaConvert::Preset resource is an AWS Elemental MediaConvert resource type that you can use to specify encoding settings for a single output in a transcoding job.
 *
 * When you declare this entity in your AWS CloudFormation template, you pass in your transcoding job settings in JSON or YAML format. This settings specification must be formed in a particular way that conforms to AWS Elemental MediaConvert job validation. For more information about creating an output preset model for the `SettingsJson` property, see the Remarks section later in this topic.
 *
 * For more information about output MediaConvert presets, see [Working with AWS Elemental MediaConvert Output Presets](https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-presets.html) in the ** .
 *
 * @cloudformationResource AWS::MediaConvert::Preset
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html
 */
export declare class CfnPreset extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPreset from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPreset;
    /**
     * The Amazon Resource Name (ARN) of the output preset, such as `arn:aws:mediaconvert:us-west-2:123456789012` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the output preset, such as `HEVC high res` .
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * The new category for the preset, if you are changing it.
     */
    category?: string;
    /**
     * The new description for the preset, if you are changing it.
     */
    description?: string;
    /**
     * The name of the preset that you are modifying.
     */
    name?: string;
    /**
     * Specify, in JSON format, the transcoding job settings for this output preset.
     */
    settingsJson: any | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPresetProps);
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
 * Properties for defining a `CfnPreset`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html
 */
export interface CfnPresetProps {
    /**
     * The new category for the preset, if you are changing it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html#cfn-mediaconvert-preset-category
     */
    readonly category?: string;
    /**
     * The new description for the preset, if you are changing it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html#cfn-mediaconvert-preset-description
     */
    readonly description?: string;
    /**
     * The name of the preset that you are modifying.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html#cfn-mediaconvert-preset-name
     */
    readonly name?: string;
    /**
     * Specify, in JSON format, the transcoding job settings for this output preset.
     *
     * This specification must conform to the AWS Elemental MediaConvert job validation. For information about forming this specification, see the Remarks section later in this topic.
     *
     * For more information about MediaConvert output presets, see [Working with AWS Elemental MediaConvert Output Presets](https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-presets.html) in the ** .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html#cfn-mediaconvert-preset-settingsjson
     */
    readonly settingsJson: any | cdk.IResolvable;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-preset.html#cfn-mediaconvert-preset-tags
     */
    readonly tags?: any;
}
/**
 * The AWS::MediaConvert::Queue resource is an AWS Elemental MediaConvert resource type that you can use to manage the resources that are available to your account for parallel processing of jobs.
 *
 * For more information about queues, see [Working with AWS Elemental MediaConvert Queues](https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html) in the ** .
 *
 * @cloudformationResource AWS::MediaConvert::Queue
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html
 */
export declare class CfnQueue extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnQueue from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnQueue;
    /**
     * The Amazon Resource Name (ARN) of the queue, such as `arn:aws:mediaconvert:us-west-2:123456789012` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the queue, such as `Queue 2` .
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * Specify the maximum number of jobs your queue can process concurrently.
     */
    concurrentJobs?: number;
    /**
     * Optional.
     */
    description?: string;
    /**
     * The name of the queue that you are creating.
     */
    name?: string;
    /**
     * When you use AWS CloudFormation , you can create only on-demand queues.
     */
    pricingPlan?: string;
    /**
     * Initial state of the queue.
     */
    status?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: any;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnQueueProps);
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
 * Properties for defining a `CfnQueue`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html
 */
export interface CfnQueueProps {
    /**
     * Specify the maximum number of jobs your queue can process concurrently.
     *
     * For on-demand queues, the value you enter is constrained by your service quotas for Maximum concurrent jobs, per on-demand queue and Maximum concurrent jobs, per account. For reserved queues, specify the number of jobs you can process concurrently in your reservation plan instead.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html#cfn-mediaconvert-queue-concurrentjobs
     */
    readonly concurrentJobs?: number;
    /**
     * Optional.
     *
     * A description of the queue that you are creating.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html#cfn-mediaconvert-queue-description
     */
    readonly description?: string;
    /**
     * The name of the queue that you are creating.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html#cfn-mediaconvert-queue-name
     */
    readonly name?: string;
    /**
     * When you use AWS CloudFormation , you can create only on-demand queues.
     *
     * Therefore, always set `PricingPlan` to the value "ON_DEMAND" when declaring an AWS::MediaConvert::Queue in your AWS CloudFormation template.
     *
     * To create a reserved queue, use the AWS Elemental MediaConvert console at https://console.aws.amazon.com/mediaconvert to set up a contract. For more information, see [Working with AWS Elemental MediaConvert Queues](https://docs.aws.amazon.com/mediaconvert/latest/ug/working-with-queues.html) in the ** .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html#cfn-mediaconvert-queue-pricingplan
     */
    readonly pricingPlan?: string;
    /**
     * Initial state of the queue.
     *
     * Queues can be either ACTIVE or PAUSED. If you create a paused queue, then jobs that you send to that queue won't begin.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html#cfn-mediaconvert-queue-status
     */
    readonly status?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconvert-queue.html#cfn-mediaconvert-queue-tags
     */
    readonly tags?: any;
}
