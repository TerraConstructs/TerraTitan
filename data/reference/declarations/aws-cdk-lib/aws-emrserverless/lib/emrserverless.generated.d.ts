import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::EMRServerless::Application` resource specifies an EMR Serverless application.
 *
 * An application uses open source analytics frameworks to run jobs that process data. To create an application, you must specify the release version for the open source framework version you want to use and the type of application you want, such as Apache Spark or Apache Hive. After you create an application, you can submit data processing jobs or interactive requests to it.
 *
 * @cloudformationResource AWS::EMRServerless::Application
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html
 */
export declare class CfnApplication extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplication from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplication;
    /**
     * The ID of the application, such as `ab4rp1abcs8xz47n3x0example` .
     *
     * @cloudformationAttribute ApplicationId
     */
    readonly attrApplicationId: string;
    /**
     * The Amazon Resource Name (ARN) of the project.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The CPU architecture of an application.
     */
    architecture?: string;
    /**
     * The configuration for an application to automatically start on job submission.
     */
    autoStartConfiguration?: CfnApplication.AutoStartConfigurationProperty | cdk.IResolvable;
    /**
     * The configuration for an application to automatically stop after a certain amount of time being idle.
     */
    autoStopConfiguration?: CfnApplication.AutoStopConfigurationProperty | cdk.IResolvable;
    /**
     * The image configuration applied to all worker types.
     */
    imageConfiguration?: CfnApplication.ImageConfigurationInputProperty | cdk.IResolvable;
    /**
     * The initial capacity of the application.
     */
    initialCapacity?: Array<CfnApplication.InitialCapacityConfigKeyValuePairProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The interactive configuration object that enables the interactive use cases for an application.
     */
    interactiveConfiguration?: CfnApplication.InteractiveConfigurationProperty | cdk.IResolvable;
    /**
     * The maximum capacity of the application.
     */
    maximumCapacity?: cdk.IResolvable | CfnApplication.MaximumAllowedResourcesProperty;
    /**
     * A configuration specification to be used when provisioning an application.
     */
    monitoringConfiguration?: cdk.IResolvable | CfnApplication.MonitoringConfigurationProperty;
    /**
     * The name of the application.
     */
    name?: string;
    /**
     * The network configuration for customer VPC connectivity for the application.
     */
    networkConfiguration?: cdk.IResolvable | CfnApplication.NetworkConfigurationProperty;
    /**
     * The EMR release associated with the application.
     */
    releaseLabel: string;
    /**
     * The [Configuration](https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_Configuration.html) specifications of an application. Each configuration consists of a classification and properties. You use this parameter when creating or updating an application. To see the runtimeConfiguration object of an application, run the [GetApplication](https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_GetApplication.html) API operation.
     */
    runtimeConfiguration?: Array<CfnApplication.ConfigurationObjectProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The scheduler configuration for batch and streaming jobs running on this application.
     */
    schedulerConfiguration?: cdk.IResolvable | CfnApplication.SchedulerConfigurationProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The tags assigned to the application.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The type of application, such as Spark or Hive.
     */
    type: string;
    /**
     * The specification applied to each worker type.
     */
    workerTypeSpecifications?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnApplication.WorkerTypeSpecificationInputProperty>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApplication {
    /**
     * The configuration for an application to automatically start on job submission.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-autostartconfiguration.html
     */
    interface AutoStartConfigurationProperty {
        /**
         * Enables the application to automatically start on job submission.
         *
         * @default - true
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-autostartconfiguration.html#cfn-emrserverless-application-autostartconfiguration-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
    }
    /**
     * The specifications for a worker type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-workertypespecificationinput.html
     */
    interface WorkerTypeSpecificationInputProperty {
        /**
         * The image configuration for a worker type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-workertypespecificationinput.html#cfn-emrserverless-application-workertypespecificationinput-imageconfiguration
         */
        readonly imageConfiguration?: CfnApplication.ImageConfigurationInputProperty | cdk.IResolvable;
    }
    /**
     * The image configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-imageconfigurationinput.html
     */
    interface ImageConfigurationInputProperty {
        /**
         * The URI of an image in the Amazon ECR registry.
         *
         * This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-imageconfigurationinput.html#cfn-emrserverless-application-imageconfigurationinput-imageuri
         */
        readonly imageUri?: string;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-initialcapacityconfigkeyvaluepair.html
     */
    interface InitialCapacityConfigKeyValuePairProperty {
        /**
         * Worker type for an analytics framework.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-initialcapacityconfigkeyvaluepair.html#cfn-emrserverless-application-initialcapacityconfigkeyvaluepair-key
         */
        readonly key: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-initialcapacityconfigkeyvaluepair.html#cfn-emrserverless-application-initialcapacityconfigkeyvaluepair-value
         */
        readonly value: CfnApplication.InitialCapacityConfigProperty | cdk.IResolvable;
    }
    /**
     * The initial capacity configuration per worker.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-initialcapacityconfig.html
     */
    interface InitialCapacityConfigProperty {
        /**
         * The resource configuration of the initial capacity configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-initialcapacityconfig.html#cfn-emrserverless-application-initialcapacityconfig-workerconfiguration
         */
        readonly workerConfiguration: cdk.IResolvable | CfnApplication.WorkerConfigurationProperty;
        /**
         * The number of workers in the initial capacity configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-initialcapacityconfig.html#cfn-emrserverless-application-initialcapacityconfig-workercount
         */
        readonly workerCount: number;
    }
    /**
     * The configuration of a worker.
     *
     * For more information, see [Supported worker configurations](https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/app-behavior.html#worker-configs) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-workerconfiguration.html
     */
    interface WorkerConfigurationProperty {
        /**
         * The CPU requirements of the worker configuration.
         *
         * Each worker can have 1, 2, 4, 8, or 16 vCPUs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-workerconfiguration.html#cfn-emrserverless-application-workerconfiguration-cpu
         */
        readonly cpu: string;
        /**
         * The disk requirements of the worker configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-workerconfiguration.html#cfn-emrserverless-application-workerconfiguration-disk
         */
        readonly disk?: string;
        /**
         * The disk type for every worker instance of the work type.
         *
         * Shuffle optimized disks have higher performance characteristics and are better for shuffle heavy workloads. Default is `STANDARD` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-workerconfiguration.html#cfn-emrserverless-application-workerconfiguration-disktype
         */
        readonly diskType?: string;
        /**
         * The memory requirements of the worker configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-workerconfiguration.html#cfn-emrserverless-application-workerconfiguration-memory
         */
        readonly memory: string;
    }
    /**
     * The maximum allowed cumulative resources for an application.
     *
     * No new resources will be created once the limit is hit.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-maximumallowedresources.html
     */
    interface MaximumAllowedResourcesProperty {
        /**
         * The maximum allowed CPU for an application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-maximumallowedresources.html#cfn-emrserverless-application-maximumallowedresources-cpu
         */
        readonly cpu: string;
        /**
         * The maximum allowed disk for an application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-maximumallowedresources.html#cfn-emrserverless-application-maximumallowedresources-disk
         */
        readonly disk?: string;
        /**
         * The maximum allowed resources for an application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-maximumallowedresources.html#cfn-emrserverless-application-maximumallowedresources-memory
         */
        readonly memory: string;
    }
    /**
     * The configuration for an application to automatically stop after a certain amount of time being idle.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-autostopconfiguration.html
     */
    interface AutoStopConfigurationProperty {
        /**
         * Enables the application to automatically stop after a certain amount of time being idle.
         *
         * Defaults to true.
         *
         * @default - true
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-autostopconfiguration.html#cfn-emrserverless-application-autostopconfiguration-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * The amount of idle time in minutes after which your application will automatically stop.
         *
         * Defaults to 15 minutes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-autostopconfiguration.html#cfn-emrserverless-application-autostopconfiguration-idletimeoutminutes
         */
        readonly idleTimeoutMinutes?: number;
    }
    /**
     * The network configuration for customer VPC connectivity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-networkconfiguration.html
     */
    interface NetworkConfigurationProperty {
        /**
         * The array of security group Ids for customer VPC connectivity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-networkconfiguration.html#cfn-emrserverless-application-networkconfiguration-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
        /**
         * The array of subnet Ids for customer VPC connectivity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-networkconfiguration.html#cfn-emrserverless-application-networkconfiguration-subnetids
         */
        readonly subnetIds?: Array<string>;
    }
    /**
     * The configuration setting for monitoring logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-monitoringconfiguration.html
     */
    interface MonitoringConfigurationProperty {
        /**
         * The Amazon CloudWatch configuration for monitoring logs.
         *
         * You can configure your jobs to send log information to CloudWatch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-monitoringconfiguration.html#cfn-emrserverless-application-monitoringconfiguration-cloudwatchloggingconfiguration
         */
        readonly cloudWatchLoggingConfiguration?: CfnApplication.CloudWatchLoggingConfigurationProperty | cdk.IResolvable;
        /**
         * The managed log persistence configuration for a job run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-monitoringconfiguration.html#cfn-emrserverless-application-monitoringconfiguration-managedpersistencemonitoringconfiguration
         */
        readonly managedPersistenceMonitoringConfiguration?: cdk.IResolvable | CfnApplication.ManagedPersistenceMonitoringConfigurationProperty;
        /**
         * The monitoring configuration object you can configure to send metrics to Amazon Managed Service for Prometheus for a job run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-monitoringconfiguration.html#cfn-emrserverless-application-monitoringconfiguration-prometheusmonitoringconfiguration
         */
        readonly prometheusMonitoringConfiguration?: cdk.IResolvable | CfnApplication.PrometheusMonitoringConfigurationProperty;
        /**
         * The Amazon S3 configuration for monitoring log publishing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-monitoringconfiguration.html#cfn-emrserverless-application-monitoringconfiguration-s3monitoringconfiguration
         */
        readonly s3MonitoringConfiguration?: cdk.IResolvable | CfnApplication.S3MonitoringConfigurationProperty;
    }
    /**
     * The Amazon S3 configuration for monitoring log publishing.
     *
     * You can configure your jobs to send log information to Amazon S3.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-s3monitoringconfiguration.html
     */
    interface S3MonitoringConfigurationProperty {
        /**
         * The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-s3monitoringconfiguration.html#cfn-emrserverless-application-s3monitoringconfiguration-encryptionkeyarn
         */
        readonly encryptionKeyArn?: string;
        /**
         * The Amazon S3 destination URI for log publishing.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-s3monitoringconfiguration.html#cfn-emrserverless-application-s3monitoringconfiguration-loguri
         */
        readonly logUri?: string;
    }
    /**
     * The managed log persistence configuration for a job run.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-managedpersistencemonitoringconfiguration.html
     */
    interface ManagedPersistenceMonitoringConfigurationProperty {
        /**
         * Enables managed logging and defaults to true.
         *
         * If set to false, managed logging will be turned off.
         *
         * @default - true
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-managedpersistencemonitoringconfiguration.html#cfn-emrserverless-application-managedpersistencemonitoringconfiguration-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * The KMS key ARN to encrypt the logs stored in managed log persistence.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-managedpersistencemonitoringconfiguration.html#cfn-emrserverless-application-managedpersistencemonitoringconfiguration-encryptionkeyarn
         */
        readonly encryptionKeyArn?: string;
    }
    /**
     * The Amazon CloudWatch configuration for monitoring logs.
     *
     * You can configure your jobs to send log information to CloudWatch.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-cloudwatchloggingconfiguration.html
     */
    interface CloudWatchLoggingConfigurationProperty {
        /**
         * Enables CloudWatch logging.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-cloudwatchloggingconfiguration.html#cfn-emrserverless-application-cloudwatchloggingconfiguration-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * The AWS Key Management Service (KMS) key ARN to encrypt the logs that you store in CloudWatch Logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-cloudwatchloggingconfiguration.html#cfn-emrserverless-application-cloudwatchloggingconfiguration-encryptionkeyarn
         */
        readonly encryptionKeyArn?: string;
        /**
         * The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-cloudwatchloggingconfiguration.html#cfn-emrserverless-application-cloudwatchloggingconfiguration-loggroupname
         */
        readonly logGroupName?: string;
        /**
         * Prefix for the CloudWatch log stream name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-cloudwatchloggingconfiguration.html#cfn-emrserverless-application-cloudwatchloggingconfiguration-logstreamnameprefix
         */
        readonly logStreamNamePrefix?: string;
        /**
         * The specific log-streams which need to be uploaded to CloudWatch.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-cloudwatchloggingconfiguration.html#cfn-emrserverless-application-cloudwatchloggingconfiguration-logtypemap
         */
        readonly logTypeMap?: Array<cdk.IResolvable | CfnApplication.LogTypeMapKeyValuePairProperty> | cdk.IResolvable;
    }
    /**
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-logtypemapkeyvaluepair.html
     */
    interface LogTypeMapKeyValuePairProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-logtypemapkeyvaluepair.html#cfn-emrserverless-application-logtypemapkeyvaluepair-key
         */
        readonly key: string;
        /**
         * List of Applicable values: [STDOUT, STDERR, HIVE_LOG, TEZ_AM, SYSTEM_LOGS].
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-logtypemapkeyvaluepair.html#cfn-emrserverless-application-logtypemapkeyvaluepair-value
         */
        readonly value: Array<string>;
    }
    /**
     * The monitoring configuration object you can configure to send metrics to Amazon Managed Service for Prometheus for a job run.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-prometheusmonitoringconfiguration.html
     */
    interface PrometheusMonitoringConfigurationProperty {
        /**
         * The remote write URL in the Amazon Managed Service for Prometheus workspace to send metrics to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-prometheusmonitoringconfiguration.html#cfn-emrserverless-application-prometheusmonitoringconfiguration-remotewriteurl
         */
        readonly remoteWriteUrl?: string;
    }
    /**
     * A configuration specification to be used when provisioning an application.
     *
     * A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-configurationobject.html
     */
    interface ConfigurationObjectProperty {
        /**
         * The classification within a configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-configurationobject.html#cfn-emrserverless-application-configurationobject-classification
         */
        readonly classification: string;
        /**
         * A list of additional configurations to apply within a configuration object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-configurationobject.html#cfn-emrserverless-application-configurationobject-configurations
         */
        readonly configurations?: Array<CfnApplication.ConfigurationObjectProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * A set of properties specified within a configuration classification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-configurationobject.html#cfn-emrserverless-application-configurationobject-properties
         */
        readonly properties?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * The configuration to use to enable the different types of interactive use cases in an application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-interactiveconfiguration.html
     */
    interface InteractiveConfigurationProperty {
        /**
         * Enables an Apache Livy endpoint that you can connect to and run interactive jobs.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-interactiveconfiguration.html#cfn-emrserverless-application-interactiveconfiguration-livyendpointenabled
         */
        readonly livyEndpointEnabled?: boolean | cdk.IResolvable;
        /**
         * Enables you to connect an application to Amazon EMR Studio to run interactive workloads in a notebook.
         *
         * @default - false
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-interactiveconfiguration.html#cfn-emrserverless-application-interactiveconfiguration-studioenabled
         */
        readonly studioEnabled?: boolean | cdk.IResolvable;
    }
    /**
     * The scheduler configuration for batch and streaming jobs running on this application.
     *
     * Supported with release labels emr-7.0.0 and above.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-schedulerconfiguration.html
     */
    interface SchedulerConfigurationProperty {
        /**
         * The maximum concurrent job runs on this application.
         *
         * If scheduler configuration is enabled on your application, the default value is 15. The valid range is 1 to 1000.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-schedulerconfiguration.html#cfn-emrserverless-application-schedulerconfiguration-maxconcurrentruns
         */
        readonly maxConcurrentRuns?: number;
        /**
         * The maximum duration in minutes for the job in QUEUED state.
         *
         * If scheduler configuration is enabled on your application, the default value is 360 minutes (6 hours). The valid range is from 15 to 720.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emrserverless-application-schedulerconfiguration.html#cfn-emrserverless-application-schedulerconfiguration-queuetimeoutminutes
         */
        readonly queueTimeoutMinutes?: number;
    }
}
/**
 * Properties for defining a `CfnApplication`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html
 */
export interface CfnApplicationProps {
    /**
     * The CPU architecture of an application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-architecture
     */
    readonly architecture?: string;
    /**
     * The configuration for an application to automatically start on job submission.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-autostartconfiguration
     */
    readonly autoStartConfiguration?: CfnApplication.AutoStartConfigurationProperty | cdk.IResolvable;
    /**
     * The configuration for an application to automatically stop after a certain amount of time being idle.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-autostopconfiguration
     */
    readonly autoStopConfiguration?: CfnApplication.AutoStopConfigurationProperty | cdk.IResolvable;
    /**
     * The image configuration applied to all worker types.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-imageconfiguration
     */
    readonly imageConfiguration?: CfnApplication.ImageConfigurationInputProperty | cdk.IResolvable;
    /**
     * The initial capacity of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-initialcapacity
     */
    readonly initialCapacity?: Array<CfnApplication.InitialCapacityConfigKeyValuePairProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The interactive configuration object that enables the interactive use cases for an application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-interactiveconfiguration
     */
    readonly interactiveConfiguration?: CfnApplication.InteractiveConfigurationProperty | cdk.IResolvable;
    /**
     * The maximum capacity of the application.
     *
     * This is cumulative across all workers at any given point in time during the lifespan of the application is created. No new resources will be created once any one of the defined limits is hit.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-maximumcapacity
     */
    readonly maximumCapacity?: cdk.IResolvable | CfnApplication.MaximumAllowedResourcesProperty;
    /**
     * A configuration specification to be used when provisioning an application.
     *
     * A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-monitoringconfiguration
     */
    readonly monitoringConfiguration?: cdk.IResolvable | CfnApplication.MonitoringConfigurationProperty;
    /**
     * The name of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-name
     */
    readonly name?: string;
    /**
     * The network configuration for customer VPC connectivity for the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-networkconfiguration
     */
    readonly networkConfiguration?: cdk.IResolvable | CfnApplication.NetworkConfigurationProperty;
    /**
     * The EMR release associated with the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-releaselabel
     */
    readonly releaseLabel: string;
    /**
     * The [Configuration](https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_Configuration.html) specifications of an application. Each configuration consists of a classification and properties. You use this parameter when creating or updating an application. To see the runtimeConfiguration object of an application, run the [GetApplication](https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_GetApplication.html) API operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-runtimeconfiguration
     */
    readonly runtimeConfiguration?: Array<CfnApplication.ConfigurationObjectProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The scheduler configuration for batch and streaming jobs running on this application.
     *
     * Supported with release labels emr-7.0.0 and above.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-schedulerconfiguration
     */
    readonly schedulerConfiguration?: cdk.IResolvable | CfnApplication.SchedulerConfigurationProperty;
    /**
     * The tags assigned to the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The type of application, such as Spark or Hive.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-type
     */
    readonly type: string;
    /**
     * The specification applied to each worker type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emrserverless-application.html#cfn-emrserverless-application-workertypespecifications
     */
    readonly workerTypeSpecifications?: cdk.IResolvable | Record<string, cdk.IResolvable | CfnApplication.WorkerTypeSpecificationInputProperty>;
}
