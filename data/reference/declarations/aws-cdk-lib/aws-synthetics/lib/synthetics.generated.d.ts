import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates or updates a canary.
 *
 * Canaries are scripts that monitor your endpoints and APIs from the outside-in. Canaries help you check the availability and latency of your web services and troubleshoot anomalies by investigating load time data, screenshots of the UI, logs, and metrics. You can set up a canary to run continuously or just once.
 *
 * To create canaries, you must have the `CloudWatchSyntheticsFullAccess` policy. If you are creating a new IAM role for the canary, you also need the the `iam:CreateRole` , `iam:CreatePolicy` and `iam:AttachRolePolicy` permissions. For more information, see [Necessary Roles and Permissions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Roles) .
 *
 * Do not include secrets or proprietary information in your canary names. The canary name makes up part of the Amazon Resource Name (ARN) for the canary, and the ARN is included in outbound calls over the internet. For more information, see [Security Considerations for Synthetics Canaries](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html) .
 *
 * @cloudformationResource AWS::Synthetics::Canary
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html
 */
export declare class CfnCanary extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCanary from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCanary;
    /**
     * `Ref` returns the ARN of the Lambda layer where Synthetics stores the canary script code.
     *
     * @cloudformationAttribute Code.SourceLocationArn
     */
    readonly attrCodeSourceLocationArn: string;
    /**
     * The ID of the canary.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The state of the canary. For example, `RUNNING` .
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.
     */
    artifactConfig?: CfnCanary.ArtifactConfigProperty | cdk.IResolvable;
    /**
     * The location in Amazon S3 where Synthetics stores artifacts from the runs of this canary.
     */
    artifactS3Location: string;
    /**
     * Use this structure to input your script code for the canary.
     */
    code: CfnCanary.CodeProperty | cdk.IResolvable;
    /**
     * Deletes associated lambda resources created by Synthetics if set to True.
     *
     * @deprecated this property has been deprecated
     */
    deleteLambdaResourcesOnCanaryDeletion?: boolean | cdk.IResolvable;
    /**
     * The ARN of the IAM role to be used to run the canary.
     */
    executionRoleArn: string;
    /**
     * The number of days to retain data about failed runs of this canary.
     */
    failureRetentionPeriod?: number;
    /**
     * The name for this canary.
     */
    name: string;
    /**
     * Specifies whether to also delete the Lambda functions and layers used by this canary when the canary is deleted.
     */
    provisionedResourceCleanup?: string;
    /**
     * To have the tags that you apply to this canary also be applied to the Lambda function that the canary uses, specify this property with the value `lambda-function` .
     */
    resourcesToReplicateTags?: Array<string>;
    /**
     * A structure that contains input information for a canary run.
     */
    runConfig?: cdk.IResolvable | CfnCanary.RunConfigProperty;
    /**
     * Specifies the runtime version to use for the canary.
     */
    runtimeVersion: string;
    /**
     * A structure that contains information about how often the canary is to run, and when these runs are to stop.
     */
    schedule: cdk.IResolvable | CfnCanary.ScheduleProperty;
    /**
     * Specify TRUE to have the canary start making runs immediately after it is created.
     */
    startCanaryAfterCreation?: boolean | cdk.IResolvable;
    /**
     * The number of days to retain data about successful runs of this canary.
     */
    successRetentionPeriod?: number;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The list of key-value pairs that are associated with the canary.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run to use as the baseline for screenshots, and the coordinates of any parts of the screen to ignore during the visual monitoring comparison.
     */
    visualReference?: cdk.IResolvable | CfnCanary.VisualReferenceProperty;
    /**
     * If this canary is to test an endpoint in a VPC, this structure contains information about the subnet and security groups of the VPC endpoint.
     */
    vpcConfig?: cdk.IResolvable | CfnCanary.VPCConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnCanaryProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCanary {
    /**
     * Defines the screenshots to use as the baseline for comparisons during visual monitoring comparisons during future runs of this canary.
     *
     * If you omit this parameter, no changes are made to any baseline screenshots that the canary might be using already.
     *
     * Visual monitoring is supported only on canaries running the *syn-puppeteer-node-3.2* runtime or later. For more information, see [Visual monitoring](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Library_SyntheticsLogger_VisualTesting.html) and [Visual monitoring blueprint](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Blueprints_VisualTesting.html)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-visualreference.html
     */
    interface VisualReferenceProperty {
        /**
         * Specifies which canary run to use the screenshots from as the baseline for future visual monitoring with this canary.
         *
         * Valid values are `nextrun` to use the screenshots from the next run after this update is made, `lastrun` to use the screenshots from the most recent run before this update was made, or the value of `Id` in the [CanaryRun](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_CanaryRun.html) from any past run of this canary.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-visualreference.html#cfn-synthetics-canary-visualreference-basecanaryrunid
         */
        readonly baseCanaryRunId: string;
        /**
         * An array of screenshots that are used as the baseline for comparisons during visual monitoring.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-visualreference.html#cfn-synthetics-canary-visualreference-basescreenshots
         */
        readonly baseScreenshots?: Array<CfnCanary.BaseScreenshotProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * A structure representing a screenshot that is used as a baseline during visual monitoring comparisons made by the canary.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-basescreenshot.html
     */
    interface BaseScreenshotProperty {
        /**
         * Coordinates that define the part of a screen to ignore during screenshot comparisons.
         *
         * To obtain the coordinates to use here, use the CloudWatch console to draw the boundaries on the screen. For more information, see [Edit or delete a canary](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/synthetics_canaries_deletion.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-basescreenshot.html#cfn-synthetics-canary-basescreenshot-ignorecoordinates
         */
        readonly ignoreCoordinates?: Array<string>;
        /**
         * The name of the screenshot.
         *
         * This is generated the first time the canary is run after the `UpdateCanary` operation that specified for this canary to perform visual monitoring.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-basescreenshot.html#cfn-synthetics-canary-basescreenshot-screenshotname
         */
        readonly screenshotName: string;
    }
    /**
     * A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3 .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-artifactconfig.html
     */
    interface ArtifactConfigProperty {
        /**
         * A structure that contains the configuration of the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3 .
         *
         * Artifact encryption functionality is available only for canaries that use Synthetics runtime version syn-nodejs-puppeteer-3.3 or later. For more information, see [Encrypting canary artifacts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-artifactconfig.html#cfn-synthetics-canary-artifactconfig-s3encryption
         */
        readonly s3Encryption?: cdk.IResolvable | CfnCanary.S3EncryptionProperty;
    }
    /**
     * A structure that contains the configuration of the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3 .
     *
     * Artifact encryption functionality is available only for canaries that use Synthetics runtime version syn-nodejs-puppeteer-3.3 or later. For more information, see [Encrypting canary artifacts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_artifact_encryption.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-s3encryption.html
     */
    interface S3EncryptionProperty {
        /**
         * The encryption method to use for artifacts created by this canary.
         *
         * Specify `SSE_S3` to use server-side encryption (SSE) with an Amazon S3-managed key. Specify `SSE-KMS` to use server-side encryption with a customer-managed AWS KMS key.
         *
         * If you omit this parameter, an AWS -managed AWS KMS key is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-s3encryption.html#cfn-synthetics-canary-s3encryption-encryptionmode
         */
        readonly encryptionMode?: string;
        /**
         * The ARN of the customer-managed AWS KMS key to use, if you specify `SSE-KMS` for `EncryptionMode`.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-s3encryption.html#cfn-synthetics-canary-s3encryption-kmskeyarn
         */
        readonly kmsKeyArn?: string;
    }
    /**
     * If this canary is to test an endpoint in a VPC, this structure contains information about the subnet and security groups of the VPC endpoint.
     *
     * For more information, see [Running a Canary in a VPC](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-vpcconfig.html
     */
    interface VPCConfigProperty {
        /**
         * Allow outbound IPv6 traffic on VPC canaries that are connected to dual-stack subnets if set to true.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-vpcconfig.html#cfn-synthetics-canary-vpcconfig-ipv6allowedfordualstack
         */
        readonly ipv6AllowedForDualStack?: boolean | cdk.IResolvable;
        /**
         * The IDs of the security groups for this canary.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-vpcconfig.html#cfn-synthetics-canary-vpcconfig-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * The IDs of the subnets where this canary is to run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-vpcconfig.html#cfn-synthetics-canary-vpcconfig-subnetids
         */
        readonly subnetIds: Array<string>;
        /**
         * The ID of the VPC where this canary is to run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-vpcconfig.html#cfn-synthetics-canary-vpcconfig-vpcid
         */
        readonly vpcId?: string;
    }
    /**
     * A structure that contains input information for a canary run.
     *
     * This structure is required.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-runconfig.html
     */
    interface RunConfigProperty {
        /**
         * Specifies whether this canary is to use active AWS X-Ray tracing when it runs.
         *
         * Active tracing enables this canary run to be displayed in the ServiceLens and X-Ray service maps even if the canary does not hit an endpoint that has X-Ray tracing enabled. Using X-Ray tracing incurs charges. For more information, see [Canaries and X-Ray tracing](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_tracing.html) .
         *
         * You can enable active tracing only for canaries that use version `syn-nodejs-2.0` or later for their canary runtime.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-runconfig.html#cfn-synthetics-canary-runconfig-activetracing
         */
        readonly activeTracing?: boolean | cdk.IResolvable;
        /**
         * Specifies the keys and values to use for any environment variables used in the canary script.
         *
         * Use the following format:
         *
         * { "key1" : "value1", "key2" : "value2", ...}
         *
         * Keys must start with a letter and be at least two characters. The total size of your environment variables cannot exceed 4 KB. You can't specify any Lambda reserved environment variables as the keys for your environment variables. For more information about reserved keys, see [Runtime environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-runtime) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-runconfig.html#cfn-synthetics-canary-runconfig-environmentvariables
         */
        readonly environmentVariables?: cdk.IResolvable | Record<string, string>;
        /**
         * The maximum amount of memory that the canary can use while running.
         *
         * This value must be a multiple of 64. The range is 960 to 3008.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-runconfig.html#cfn-synthetics-canary-runconfig-memoryinmb
         */
        readonly memoryInMb?: number;
        /**
         * How long the canary is allowed to run before it must stop.
         *
         * You can't set this time to be longer than the frequency of the runs of this canary.
         *
         * If you omit this field, the frequency of the canary is used as this value, up to a maximum of 900 seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-runconfig.html#cfn-synthetics-canary-runconfig-timeoutinseconds
         */
        readonly timeoutInSeconds?: number;
    }
    /**
     * Use this structure to input your script code for the canary.
     *
     * This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script is passed into the canary directly, the script code is contained in the value of `Script` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-code.html
     */
    interface CodeProperty {
        /**
         * The entry point to use for the source code when running the canary.
         *
         * For canaries that use the `syn-python-selenium-1.0` runtime or a `syn-nodejs.puppeteer` runtime earlier than `syn-nodejs.puppeteer-3.4` , the handler must be specified as `*fileName* .handler` . For `syn-python-selenium-1.1` , `syn-nodejs.puppeteer-3.4` , and later runtimes, the handler can be specified as `*fileName* . *functionName*` , or you can specify a folder where canary scripts reside as `*folder* / *fileName* . *functionName*` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-code.html#cfn-synthetics-canary-code-handler
         */
        readonly handler: string;
        /**
         * If your canary script is located in S3, specify the bucket name here.
         *
         * The bucket must already exist.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-code.html#cfn-synthetics-canary-code-s3bucket
         */
        readonly s3Bucket?: string;
        /**
         * The S3 key of your script.
         *
         * For more information, see [Working with Amazon S3 Objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingObjects.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-code.html#cfn-synthetics-canary-code-s3key
         */
        readonly s3Key?: string;
        /**
         * The S3 version ID of your script.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-code.html#cfn-synthetics-canary-code-s3objectversion
         */
        readonly s3ObjectVersion?: string;
        /**
         * If you input your canary script directly into the canary instead of referring to an S3 location, the value of this parameter is the script in plain text.
         *
         * It can be up to 5 MB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-code.html#cfn-synthetics-canary-code-script
         */
        readonly script?: string;
        /**
         * The ARN of the Lambda layer where Synthetics stores the canary script code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-code.html#cfn-synthetics-canary-code-sourcelocationarn
         */
        readonly sourceLocationArn?: string;
    }
    /**
     * This structure specifies how often a canary is to make runs and the date and time when it should stop making runs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-schedule.html
     */
    interface ScheduleProperty {
        /**
         * How long, in seconds, for the canary to continue making regular runs according to the schedule in the `Expression` value.
         *
         * If you specify 0, the canary continues making runs until you stop it. If you omit this field, the default of 0 is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-schedule.html#cfn-synthetics-canary-schedule-durationinseconds
         */
        readonly durationInSeconds?: string;
        /**
         * A `rate` expression or a `cron` expression that defines how often the canary is to run.
         *
         * For a rate expression, The syntax is `rate( *number unit* )` . *unit* can be `minute` , `minutes` , or `hour` .
         *
         * For example, `rate(1 minute)` runs the canary once a minute, `rate(10 minutes)` runs it once every 10 minutes, and `rate(1 hour)` runs it once every hour. You can specify a frequency between `rate(1 minute)` and `rate(1 hour)` .
         *
         * Specifying `rate(0 minute)` or `rate(0 hour)` is a special value that causes the canary to run only once when it is started.
         *
         * Use `cron( *expression* )` to specify a cron expression. You can't schedule a canary to wait for more than a year before running. For information about the syntax for cron expressions, see [Scheduling canary runs using cron](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_cron.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-synthetics-canary-schedule.html#cfn-synthetics-canary-schedule-expression
         */
        readonly expression: string;
    }
}
/**
 * Properties for defining a `CfnCanary`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html
 */
export interface CfnCanaryProps {
    /**
     * A structure that contains the configuration for canary artifacts, including the encryption-at-rest settings for artifacts that the canary uploads to Amazon S3.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-artifactconfig
     */
    readonly artifactConfig?: CfnCanary.ArtifactConfigProperty | cdk.IResolvable;
    /**
     * The location in Amazon S3 where Synthetics stores artifacts from the runs of this canary.
     *
     * Artifacts include the log file, screenshots, and HAR files. Specify the full location path, including `s3://` at the beginning of the path.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-artifacts3location
     */
    readonly artifactS3Location: string;
    /**
     * Use this structure to input your script code for the canary.
     *
     * This structure contains the Lambda handler with the location where the canary should start running the script. If the script is stored in an S3 bucket, the bucket name, key, and version are also included. If the script is passed into the canary directly, the script code is contained in the value of `Script` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-code
     */
    readonly code: CfnCanary.CodeProperty | cdk.IResolvable;
    /**
     * Deletes associated lambda resources created by Synthetics if set to True.
     *
     * Default is False
     *
     * @deprecated this property has been deprecated
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-deletelambdaresourcesoncanarydeletion
     */
    readonly deleteLambdaResourcesOnCanaryDeletion?: boolean | cdk.IResolvable;
    /**
     * The ARN of the IAM role to be used to run the canary.
     *
     * This role must already exist, and must include `lambda.amazonaws.com` as a principal in the trust policy. The role must also have the following permissions:
     *
     * - `s3:PutObject`
     * - `s3:GetBucketLocation`
     * - `s3:ListAllMyBuckets`
     * - `cloudwatch:PutMetricData`
     * - `logs:CreateLogGroup`
     * - `logs:CreateLogStream`
     * - `logs:PutLogEvents`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-executionrolearn
     */
    readonly executionRoleArn: string;
    /**
     * The number of days to retain data about failed runs of this canary.
     *
     * If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
     *
     * This setting affects the range of information returned by [GetCanaryRuns](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html) , as well as the range of information displayed in the Synthetics console.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-failureretentionperiod
     */
    readonly failureRetentionPeriod?: number;
    /**
     * The name for this canary.
     *
     * Be sure to give it a descriptive name that distinguishes it from other canaries in your account.
     *
     * Do not include secrets or proprietary information in your canary names. The canary name makes up part of the canary ARN, and the ARN is included in outbound calls over the internet. For more information, see [Security Considerations for Synthetics Canaries](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/servicelens_canaries_security.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-name
     */
    readonly name: string;
    /**
     * Specifies whether to also delete the Lambda functions and layers used by this canary when the canary is deleted.
     *
     * If it is `AUTOMATIC` , the Lambda functions and layers will be deleted when the canary is deleted.
     *
     * If the value of this parameter is `OFF` , then the value of the `DeleteLambda` parameter of the [DeleteCanary](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_DeleteCanary.html) operation determines whether the Lambda functions and layers will be deleted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-provisionedresourcecleanup
     */
    readonly provisionedResourceCleanup?: string;
    /**
     * To have the tags that you apply to this canary also be applied to the Lambda function that the canary uses, specify this property with the value `lambda-function` .
     *
     * If you do this, CloudWatch Synthetics will keep the tags of the canary and the Lambda function synchronized. Any future changes you make to the canary's tags will also be applied to the function.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-resourcestoreplicatetags
     */
    readonly resourcesToReplicateTags?: Array<string>;
    /**
     * A structure that contains input information for a canary run.
     *
     * If you omit this structure, the frequency of the canary is used as canary's timeout value, up to a maximum of 900 seconds.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-runconfig
     */
    readonly runConfig?: cdk.IResolvable | CfnCanary.RunConfigProperty;
    /**
     * Specifies the runtime version to use for the canary.
     *
     * For more information about runtime versions, see [Canary Runtime Versions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_Library.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-runtimeversion
     */
    readonly runtimeVersion: string;
    /**
     * A structure that contains information about how often the canary is to run, and when these runs are to stop.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-schedule
     */
    readonly schedule: cdk.IResolvable | CfnCanary.ScheduleProperty;
    /**
     * Specify TRUE to have the canary start making runs immediately after it is created.
     *
     * A canary that you create using CloudFormation can't be used to monitor the CloudFormation stack that creates the canary or to roll back that stack if there is a failure.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-startcanaryaftercreation
     */
    readonly startCanaryAfterCreation?: boolean | cdk.IResolvable;
    /**
     * The number of days to retain data about successful runs of this canary.
     *
     * If you omit this field, the default of 31 days is used. The valid range is 1 to 455 days.
     *
     * This setting affects the range of information returned by [GetCanaryRuns](https://docs.aws.amazon.com/AmazonSynthetics/latest/APIReference/API_GetCanaryRuns.html) , as well as the range of information displayed in the Synthetics console.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-successretentionperiod
     */
    readonly successRetentionPeriod?: number;
    /**
     * The list of key-value pairs that are associated with the canary.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run to use as the baseline for screenshots, and the coordinates of any parts of the screen to ignore during the visual monitoring comparison.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-visualreference
     */
    readonly visualReference?: cdk.IResolvable | CfnCanary.VisualReferenceProperty;
    /**
     * If this canary is to test an endpoint in a VPC, this structure contains information about the subnet and security groups of the VPC endpoint.
     *
     * For more information, see [Running a Canary in a VPC](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Synthetics_Canaries_VPC.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-canary.html#cfn-synthetics-canary-vpcconfig
     */
    readonly vpcConfig?: cdk.IResolvable | CfnCanary.VPCConfigProperty;
}
/**
 * Creates or updates a group which you can use to associate canaries with each other, including cross-Region canaries.
 *
 * Using groups can help you with managing and automating your canaries, and you can also view aggregated run results and statistics for all canaries in a group.
 *
 * Groups are global resources. When you create a group, it is replicated across all AWS Regions, and you can add canaries from any Region to it, and view it in any Region. Although the group ARN format reflects the Region name where it was created, a group is not constrained to any Region. This means that you can put canaries from multiple Regions into the same group, and then use that group to view and manage all of those canaries in a single view.
 *
 * Each group can contain as many as 10 canaries. You can have as many as 20 groups in your account. Any single canary can be a member of up to 10 groups.
 *
 * @cloudformationResource AWS::Synthetics::Group
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-group.html
 */
export declare class CfnGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnGroup;
    /**
     * The Id of the group.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * A name for the group. It can include any Unicode characters.
     */
    name: string;
    /**
     * The ARNs of the canaries that you want to associate with this group.
     */
    resourceArns?: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The list of key-value pairs that are associated with the group.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnGroupProps);
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
 * Properties for defining a `CfnGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-group.html
 */
export interface CfnGroupProps {
    /**
     * A name for the group. It can include any Unicode characters.
     *
     * The names for all groups in your account, across all Regions, must be unique.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-group.html#cfn-synthetics-group-name
     */
    readonly name: string;
    /**
     * The ARNs of the canaries that you want to associate with this group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-group.html#cfn-synthetics-group-resourcearns
     */
    readonly resourceArns?: Array<string>;
    /**
     * The list of key-value pairs that are associated with the group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-synthetics-group.html#cfn-synthetics-group-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
