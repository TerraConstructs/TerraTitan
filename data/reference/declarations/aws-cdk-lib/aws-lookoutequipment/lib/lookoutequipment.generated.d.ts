import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a scheduled inference.
 *
 * Scheduling an inference is setting up a continuous real-time inference plan to analyze new measurement data. When setting up the schedule, you provide an Amazon S3 bucket location for the input data, assign it a delimiter between separate entries in the data, set an offset delay if desired, and set the frequency of inferencing. You must also provide an Amazon S3 bucket location for the output data.
 *
 * > Updating some properties below (for example, InferenceSchedulerName and ServerSideKmsKeyId) triggers a resource replacement, which requires a new model. To replace such a property using AWS CloudFormation , but without creating a completely new stack, you must replace ModelName. If you need to replace the property, but want to use the same model, delete the current stack and create a new one with the updated properties.
 *
 * @cloudformationResource AWS::LookoutEquipment::InferenceScheduler
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html
 */
export declare class CfnInferenceScheduler extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInferenceScheduler from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInferenceScheduler;
    /**
     * The Amazon Resource Name (ARN) of the inference scheduler being created.
     *
     * @cloudformationAttribute InferenceSchedulerArn
     */
    readonly attrInferenceSchedulerArn: string;
    /**
     * A period of time (in minutes) by which inference on the data is delayed after the data starts.
     */
    dataDelayOffsetInMinutes?: number;
    /**
     * Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.
     */
    dataInputConfiguration: any | cdk.IResolvable;
    /**
     * Specifies configuration information for the output results for the inference scheduler, including the Amazon S3 location for the output.
     */
    dataOutputConfiguration: any | cdk.IResolvable;
    /**
     * How often data is uploaded to the source S3 bucket for the input data.
     */
    dataUploadFrequency: string;
    /**
     * The name of the inference scheduler.
     */
    inferenceSchedulerName?: string;
    /**
     * The name of the machine learning model used for the inference scheduler.
     */
    modelName: string;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference.
     */
    roleArn: string;
    /**
     * Provides the identifier of the AWS KMS key used to encrypt inference scheduler data by Amazon Lookout for Equipment .
     */
    serverSideKmsKeyId?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * Any tags associated with the inference scheduler.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnInferenceSchedulerProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnInferenceScheduler {
    /**
     * Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-datainputconfiguration.html
     */
    interface DataInputConfigurationProperty {
        /**
         * Specifies configuration information for the input data for the inference, including timestamp format and delimiter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-datainputconfiguration.html#cfn-lookoutequipment-inferencescheduler-datainputconfiguration-inferenceinputnameconfiguration
         */
        readonly inferenceInputNameConfiguration?: CfnInferenceScheduler.InputNameConfigurationProperty | cdk.IResolvable;
        /**
         * Indicates the difference between your time zone and Greenwich Mean Time (GMT).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-datainputconfiguration.html#cfn-lookoutequipment-inferencescheduler-datainputconfiguration-inputtimezoneoffset
         */
        readonly inputTimeZoneOffset?: string;
        /**
         * Specifies configuration information for the input data for the inference, including input data S3 location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-datainputconfiguration.html#cfn-lookoutequipment-inferencescheduler-datainputconfiguration-s3inputconfiguration
         */
        readonly s3InputConfiguration: cdk.IResolvable | CfnInferenceScheduler.S3InputConfigurationProperty;
    }
    /**
     * Specifies configuration information for the input data for the inference, including timestamp format and delimiter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-inputnameconfiguration.html
     */
    interface InputNameConfigurationProperty {
        /**
         * Indicates the delimiter character used between items in the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-inputnameconfiguration.html#cfn-lookoutequipment-inferencescheduler-inputnameconfiguration-componenttimestampdelimiter
         */
        readonly componentTimestampDelimiter?: string;
        /**
         * The format of the timestamp, whether Epoch time, or standard, with or without hyphens (-).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-inputnameconfiguration.html#cfn-lookoutequipment-inferencescheduler-inputnameconfiguration-timestampformat
         */
        readonly timestampFormat?: string;
    }
    /**
     * Specifies configuration information for the input data for the inference, including input data S3 location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-s3inputconfiguration.html
     */
    interface S3InputConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-s3inputconfiguration.html#cfn-lookoutequipment-inferencescheduler-s3inputconfiguration-bucket
         */
        readonly bucket: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-s3inputconfiguration.html#cfn-lookoutequipment-inferencescheduler-s3inputconfiguration-prefix
         */
        readonly prefix?: string;
    }
    /**
     * Specifies configuration information for the output results for the inference scheduler, including the S3 location for the output.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-dataoutputconfiguration.html
     */
    interface DataOutputConfigurationProperty {
        /**
         * The ID number for the AWS KMS key used to encrypt the inference output.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-dataoutputconfiguration.html#cfn-lookoutequipment-inferencescheduler-dataoutputconfiguration-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * Specifies configuration information for the output results from the inference, including output S3 location.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-dataoutputconfiguration.html#cfn-lookoutequipment-inferencescheduler-dataoutputconfiguration-s3outputconfiguration
         */
        readonly s3OutputConfiguration: cdk.IResolvable | CfnInferenceScheduler.S3OutputConfigurationProperty;
    }
    /**
     * Specifies configuration information for the output results from the inference, including output S3 location.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-s3outputconfiguration.html
     */
    interface S3OutputConfigurationProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-s3outputconfiguration.html#cfn-lookoutequipment-inferencescheduler-s3outputconfiguration-bucket
         */
        readonly bucket: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-lookoutequipment-inferencescheduler-s3outputconfiguration.html#cfn-lookoutequipment-inferencescheduler-s3outputconfiguration-prefix
         */
        readonly prefix?: string;
    }
}
/**
 * Properties for defining a `CfnInferenceScheduler`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html
 */
export interface CfnInferenceSchedulerProps {
    /**
     * A period of time (in minutes) by which inference on the data is delayed after the data starts.
     *
     * For instance, if an offset delay time of five minutes was selected, inference will not begin on the data until the first data measurement after the five minute mark. For example, if five minutes is selected, the inference scheduler will wake up at the configured frequency with the additional five minute delay time to check the customer S3 bucket. The customer can upload data at the same frequency and they don't need to stop and restart the scheduler when uploading new data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html#cfn-lookoutequipment-inferencescheduler-datadelayoffsetinminutes
     */
    readonly dataDelayOffsetInMinutes?: number;
    /**
     * Specifies configuration information for the input data for the inference scheduler, including delimiter, format, and dataset location.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html#cfn-lookoutequipment-inferencescheduler-datainputconfiguration
     */
    readonly dataInputConfiguration: any | cdk.IResolvable;
    /**
     * Specifies configuration information for the output results for the inference scheduler, including the Amazon S3 location for the output.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html#cfn-lookoutequipment-inferencescheduler-dataoutputconfiguration
     */
    readonly dataOutputConfiguration: any | cdk.IResolvable;
    /**
     * How often data is uploaded to the source S3 bucket for the input data.
     *
     * This value is the length of time between data uploads. For instance, if you select 5 minutes, Amazon Lookout for Equipment will upload the real-time data to the source bucket once every 5 minutes. This frequency also determines how often Amazon Lookout for Equipment starts a scheduled inference on your data. In this example, it starts once every 5 minutes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html#cfn-lookoutequipment-inferencescheduler-datauploadfrequency
     */
    readonly dataUploadFrequency: string;
    /**
     * The name of the inference scheduler.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html#cfn-lookoutequipment-inferencescheduler-inferenceschedulername
     */
    readonly inferenceSchedulerName?: string;
    /**
     * The name of the machine learning model used for the inference scheduler.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html#cfn-lookoutequipment-inferencescheduler-modelname
     */
    readonly modelName: string;
    /**
     * The Amazon Resource Name (ARN) of a role with permission to access the data source being used for the inference.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html#cfn-lookoutequipment-inferencescheduler-rolearn
     */
    readonly roleArn: string;
    /**
     * Provides the identifier of the AWS KMS key used to encrypt inference scheduler data by Amazon Lookout for Equipment .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html#cfn-lookoutequipment-inferencescheduler-serversidekmskeyid
     */
    readonly serverSideKmsKeyId?: string;
    /**
     * Any tags associated with the inference scheduler.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lookoutequipment-inferencescheduler.html#cfn-lookoutequipment-inferencescheduler-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
