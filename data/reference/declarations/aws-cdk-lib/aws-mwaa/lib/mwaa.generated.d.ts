import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::MWAA::Environment` resource creates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.
 *
 * @cloudformationResource AWS::MWAA::Environment
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html
 */
export declare class CfnEnvironment extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnEnvironment from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnEnvironment;
    /**
     * The ARN for the Amazon MWAA environment.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The queue ARN for the environment's [Celery Executor](https://docs.aws.amazon.com/https://airflow.apache.org/docs/apache-airflow/stable/core-concepts/executor/celery.html) . Amazon MWAA uses a Celery Executor to distribute tasks across multiple workers. When you create an environment in a shared VPC, you must provide access to the Celery Executor queue from your VPC.
     *
     * @cloudformationAttribute CeleryExecutorQueue
     */
    readonly attrCeleryExecutorQueue: string;
    /**
     * The VPC endpoint for the environment's Amazon RDS database.
     *
     * @cloudformationAttribute DatabaseVpcEndpointService
     */
    readonly attrDatabaseVpcEndpointService: string;
    /**
     * The ARN for the CloudWatch Logs group where the Apache Airflow DAG processing logs are published.
     *
     * @cloudformationAttribute LoggingConfiguration.DagProcessingLogs.CloudWatchLogGroupArn
     */
    readonly attrLoggingConfigurationDagProcessingLogsCloudWatchLogGroupArn: string;
    /**
     * The ARN for the CloudWatch Logs group where the Apache Airflow Scheduler logs are published.
     *
     * @cloudformationAttribute LoggingConfiguration.SchedulerLogs.CloudWatchLogGroupArn
     */
    readonly attrLoggingConfigurationSchedulerLogsCloudWatchLogGroupArn: string;
    /**
     * The ARN for the CloudWatch Logs group where the Apache Airflow task logs are published.
     *
     * @cloudformationAttribute LoggingConfiguration.TaskLogs.CloudWatchLogGroupArn
     */
    readonly attrLoggingConfigurationTaskLogsCloudWatchLogGroupArn: string;
    /**
     * The ARN for the CloudWatch Logs group where the Apache Airflow Web server logs are published.
     *
     * @cloudformationAttribute LoggingConfiguration.WebserverLogs.CloudWatchLogGroupArn
     */
    readonly attrLoggingConfigurationWebserverLogsCloudWatchLogGroupArn: string;
    /**
     * The ARN for the CloudWatch Logs group where the Apache Airflow Worker logs are published.
     *
     * @cloudformationAttribute LoggingConfiguration.WorkerLogs.CloudWatchLogGroupArn
     */
    readonly attrLoggingConfigurationWorkerLogsCloudWatchLogGroupArn: string;
    /**
     * The URL of your Apache Airflow UI.
     *
     * @cloudformationAttribute WebserverUrl
     */
    readonly attrWebserverUrl: string;
    /**
     * The VPC endpoint for the environment's web server.
     *
     * @cloudformationAttribute WebserverVpcEndpointService
     */
    readonly attrWebserverVpcEndpointService: string;
    /**
     * A list of key-value pairs containing the Airflow configuration options for your environment.
     */
    airflowConfigurationOptions?: any | cdk.IResolvable;
    /**
     * The version of Apache Airflow to use for the environment.
     */
    airflowVersion?: string;
    /**
     * The relative path to the DAGs folder on your Amazon S3 bucket.
     */
    dagS3Path?: string;
    /**
     * Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA.
     */
    endpointManagement?: string;
    /**
     * The environment class type.
     */
    environmentClass?: string;
    /**
     * The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access AWS resources in your environment.
     */
    executionRoleArn?: string;
    /**
     * The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment.
     */
    kmsKey?: string;
    /**
     * The Apache Airflow logs being sent to CloudWatch Logs: `DagProcessingLogs` , `SchedulerLogs` , `TaskLogs` , `WebserverLogs` , `WorkerLogs` .
     */
    loggingConfiguration?: cdk.IResolvable | CfnEnvironment.LoggingConfigurationProperty;
    /**
     * The maximum number of web servers that you want to run in your environment.
     */
    maxWebservers?: number;
    /**
     * The maximum number of workers that you want to run in your environment.
     */
    maxWorkers?: number;
    /**
     * The minimum number of web servers that you want to run in your environment.
     */
    minWebservers?: number;
    /**
     * The minimum number of workers that you want to run in your environment.
     */
    minWorkers?: number;
    /**
     * The name of your Amazon MWAA environment.
     */
    name: string;
    /**
     * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment.
     */
    networkConfiguration?: cdk.IResolvable | CfnEnvironment.NetworkConfigurationProperty;
    /**
     * The version of the plugins.zip file on your Amazon S3 bucket. To learn more, see [Installing custom plugins](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html) .
     */
    pluginsS3ObjectVersion?: string;
    /**
     * The relative path to the `plugins.zip` file on your Amazon S3 bucket. For example, `plugins.zip` . To learn more, see [Installing custom plugins](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html) .
     */
    pluginsS3Path?: string;
    /**
     * The version of the requirements.txt file on your Amazon S3 bucket. To learn more, see [Installing Python dependencies](https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html) .
     */
    requirementsS3ObjectVersion?: string;
    /**
     * The relative path to the `requirements.txt` file on your Amazon S3 bucket. For example, `requirements.txt` . To learn more, see [Installing Python dependencies](https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html) .
     */
    requirementsS3Path?: string;
    /**
     * The number of schedulers that you want to run in your environment. Valid values:.
     */
    schedulers?: number;
    /**
     * The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored.
     */
    sourceBucketArn?: string;
    /**
     * The version of the startup shell script in your Amazon S3 bucket.
     */
    startupScriptS3ObjectVersion?: string;
    /**
     * The relative path to the startup shell script in your Amazon S3 bucket. For example, `s3://mwaa-environment/startup.sh` .
     */
    startupScriptS3Path?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The key-value tag pairs associated to your environment. For example, `"Environment": "Staging"` . To learn more, see [Tagging](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) .
     */
    tagsRaw?: any;
    /**
     * The Apache Airflow *Web server* access mode.
     */
    webserverAccessMode?: string;
    /**
     * The day and time of the week to start weekly maintenance updates of your environment in the following format: `DAY:HH:MM` .
     */
    weeklyMaintenanceWindowStart?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnEnvironmentProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnEnvironment {
    /**
     * The type of Apache Airflow logs to send to CloudWatch Logs.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-loggingconfiguration.html
     */
    interface LoggingConfigurationProperty {
        /**
         * Defines the processing logs sent to CloudWatch Logs and the logging level to send.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-loggingconfiguration.html#cfn-mwaa-environment-loggingconfiguration-dagprocessinglogs
         */
        readonly dagProcessingLogs?: cdk.IResolvable | CfnEnvironment.ModuleLoggingConfigurationProperty;
        /**
         * Defines the scheduler logs sent to CloudWatch Logs and the logging level to send.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-loggingconfiguration.html#cfn-mwaa-environment-loggingconfiguration-schedulerlogs
         */
        readonly schedulerLogs?: cdk.IResolvable | CfnEnvironment.ModuleLoggingConfigurationProperty;
        /**
         * Defines the task logs sent to CloudWatch Logs and the logging level to send.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-loggingconfiguration.html#cfn-mwaa-environment-loggingconfiguration-tasklogs
         */
        readonly taskLogs?: cdk.IResolvable | CfnEnvironment.ModuleLoggingConfigurationProperty;
        /**
         * Defines the web server logs sent to CloudWatch Logs and the logging level to send.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-loggingconfiguration.html#cfn-mwaa-environment-loggingconfiguration-webserverlogs
         */
        readonly webserverLogs?: cdk.IResolvable | CfnEnvironment.ModuleLoggingConfigurationProperty;
        /**
         * Defines the worker logs sent to CloudWatch Logs and the logging level to send.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-loggingconfiguration.html#cfn-mwaa-environment-loggingconfiguration-workerlogs
         */
        readonly workerLogs?: cdk.IResolvable | CfnEnvironment.ModuleLoggingConfigurationProperty;
    }
    /**
     * Defines the type of logs to send for the Apache Airflow log type (e.g. `DagProcessingLogs` ).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-moduleloggingconfiguration.html
     */
    interface ModuleLoggingConfigurationProperty {
        /**
         * The ARN of the CloudWatch Logs log group for each type of Apache Airflow log type that you have enabled.
         *
         * > `CloudWatchLogGroupArn` is available only as a return value, accessible when specified as an attribute in the [`Fn:GetAtt`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#aws-resource-mwaa-environment-return-values) intrinsic function. Any value you provide for `CloudWatchLogGroupArn` is discarded by Amazon MWAA.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-moduleloggingconfiguration.html#cfn-mwaa-environment-moduleloggingconfiguration-cloudwatchloggrouparn
         */
        readonly cloudWatchLogGroupArn?: string;
        /**
         * Indicates whether to enable the Apache Airflow log type (e.g. `DagProcessingLogs` ) in CloudWatch Logs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-moduleloggingconfiguration.html#cfn-mwaa-environment-moduleloggingconfiguration-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * Defines the Apache Airflow logs to send for the log type (e.g. `DagProcessingLogs` ) to CloudWatch Logs. Valid values: `CRITICAL` , `ERROR` , `WARNING` , `INFO` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-moduleloggingconfiguration.html#cfn-mwaa-environment-moduleloggingconfiguration-loglevel
         */
        readonly logLevel?: string;
    }
    /**
     * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment.
     *
     * To learn more, see [About networking on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-networkconfiguration.html
     */
    interface NetworkConfigurationProperty {
        /**
         * A list of one or more security group IDs.
         *
         * Accepts up to 5 security group IDs. A security group must be attached to the same VPC as the subnets. To learn more, see [Security in your VPC on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/vpc-security.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-networkconfiguration.html#cfn-mwaa-environment-networkconfiguration-securitygroupids
         */
        readonly securityGroupIds?: Array<string>;
        /**
         * A list of subnet IDs.
         *
         * *Required* to create an environment. Must be private subnets in two different availability zones. A subnet must be attached to the same VPC as the security group. To learn more, see [About networking on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-mwaa-environment-networkconfiguration.html#cfn-mwaa-environment-networkconfiguration-subnetids
         */
        readonly subnetIds?: Array<string>;
    }
}
/**
 * Properties for defining a `CfnEnvironment`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html
 */
export interface CfnEnvironmentProps {
    /**
     * A list of key-value pairs containing the Airflow configuration options for your environment.
     *
     * For example, `core.default_timezone: utc` . To learn more, see [Apache Airflow configuration options](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-env-variables.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-airflowconfigurationoptions
     */
    readonly airflowConfigurationOptions?: any | cdk.IResolvable;
    /**
     * The version of Apache Airflow to use for the environment.
     *
     * If no value is specified, defaults to the latest version.
     *
     * If you specify a newer version number for an existing environment, the version update requires some service interruption before taking effect.
     *
     * *Allowed Values* : `1.10.12` | `2.0.2` | `2.2.2` | `2.4.3` | `2.5.1` | `2.6.3` | `2.7.2` | `2.8.1` | `2.9.2` (latest)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-airflowversion
     */
    readonly airflowVersion?: string;
    /**
     * The relative path to the DAGs folder on your Amazon S3 bucket.
     *
     * For example, `dags` . To learn more, see [Adding or updating DAGs](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-folder.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-dags3path
     */
    readonly dagS3Path?: string;
    /**
     * Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA.
     *
     * If set to `SERVICE` , Amazon MWAA will create and manage the required VPC endpoints in your VPC. If set to `CUSTOMER` , you must create, and manage, the VPC endpoints in your VPC.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-endpointmanagement
     */
    readonly endpointManagement?: string;
    /**
     * The environment class type.
     *
     * Valid values: `mw1.small` , `mw1.medium` , `mw1.large` . To learn more, see [Amazon MWAA environment class](https://docs.aws.amazon.com/mwaa/latest/userguide/environment-class.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-environmentclass
     */
    readonly environmentClass?: string;
    /**
     * The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access AWS resources in your environment.
     *
     * For example, `arn:aws:iam::123456789:role/my-execution-role` . To learn more, see [Amazon MWAA Execution role](https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-create-role.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-executionrolearn
     */
    readonly executionRoleArn?: string;
    /**
     * The AWS Key Management Service (KMS) key to encrypt and decrypt the data in your environment.
     *
     * You can use an AWS KMS key managed by MWAA, or a customer-managed KMS key (advanced).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-kmskey
     */
    readonly kmsKey?: string;
    /**
     * The Apache Airflow logs being sent to CloudWatch Logs: `DagProcessingLogs` , `SchedulerLogs` , `TaskLogs` , `WebserverLogs` , `WorkerLogs` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-loggingconfiguration
     */
    readonly loggingConfiguration?: cdk.IResolvable | CfnEnvironment.LoggingConfigurationProperty;
    /**
     * The maximum number of web servers that you want to run in your environment.
     *
     * Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for `MaxWebservers` when you interact with your Apache Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. For example, in scenarios where your workload requires network calls to the Apache Airflow REST API with a high transaction-per-second (TPS) rate, Amazon MWAA will increase the number of web servers up to the number set in `MaxWebserers` . As TPS rates decrease Amazon MWAA disposes of the additional web servers, and scales down to the number set in `MinxWebserers` .
     *
     * Valid values: For environments larger than mw1.micro, accepts values from `2` to `5` . Defaults to `2` for all environment sizes except mw1.micro, which defaults to `1` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-maxwebservers
     */
    readonly maxWebservers?: number;
    /**
     * The maximum number of workers that you want to run in your environment.
     *
     * MWAA scales the number of Apache Airflow workers up to the number you specify in the `MaxWorkers` field. For example, `20` . When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the one worker that is included with your environment, or the number you specify in `MinWorkers` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-maxworkers
     */
    readonly maxWorkers?: number;
    /**
     * The minimum number of web servers that you want to run in your environment.
     *
     * Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for `MaxWebservers` when you interact with your Apache Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. As the transaction-per-second rate, and the network load, decrease, Amazon MWAA disposes of the additional web servers, and scales down to the number set in `MinxWebserers` .
     *
     * Valid values: For environments larger than mw1.micro, accepts values from `2` to `5` . Defaults to `2` for all environment sizes except mw1.micro, which defaults to `1` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-minwebservers
     */
    readonly minWebservers?: number;
    /**
     * The minimum number of workers that you want to run in your environment.
     *
     * MWAA scales the number of Apache Airflow workers up to the number you specify in the `MaxWorkers` field. When there are no more tasks running, and no more in the queue, MWAA disposes of the extra workers leaving the worker count you specify in the `MinWorkers` field. For example, `2` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-minworkers
     */
    readonly minWorkers?: number;
    /**
     * The name of your Amazon MWAA environment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-name
     */
    readonly name: string;
    /**
     * The VPC networking components used to secure and enable network traffic between the AWS resources for your environment.
     *
     * To learn more, see [About networking on Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/networking-about.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-networkconfiguration
     */
    readonly networkConfiguration?: cdk.IResolvable | CfnEnvironment.NetworkConfigurationProperty;
    /**
     * The version of the plugins.zip file on your Amazon S3 bucket. To learn more, see [Installing custom plugins](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-pluginss3objectversion
     */
    readonly pluginsS3ObjectVersion?: string;
    /**
     * The relative path to the `plugins.zip` file on your Amazon S3 bucket. For example, `plugins.zip` . To learn more, see [Installing custom plugins](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-dag-import-plugins.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-pluginss3path
     */
    readonly pluginsS3Path?: string;
    /**
     * The version of the requirements.txt file on your Amazon S3 bucket. To learn more, see [Installing Python dependencies](https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-requirementss3objectversion
     */
    readonly requirementsS3ObjectVersion?: string;
    /**
     * The relative path to the `requirements.txt` file on your Amazon S3 bucket. For example, `requirements.txt` . To learn more, see [Installing Python dependencies](https://docs.aws.amazon.com/mwaa/latest/userguide/working-dags-dependencies.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-requirementss3path
     */
    readonly requirementsS3Path?: string;
    /**
     * The number of schedulers that you want to run in your environment. Valid values:.
     *
     * - *v2* - Accepts between 2 to 5. Defaults to 2.
     * - *v1* - Accepts 1.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-schedulers
     */
    readonly schedulers?: number;
    /**
     * The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored.
     *
     * For example, `arn:aws:s3:::my-airflow-bucket-unique-name` . To learn more, see [Create an Amazon S3 bucket for Amazon MWAA](https://docs.aws.amazon.com/mwaa/latest/userguide/mwaa-s3-bucket.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-sourcebucketarn
     */
    readonly sourceBucketArn?: string;
    /**
     * The version of the startup shell script in your Amazon S3 bucket.
     *
     * You must specify the [version ID](https://docs.aws.amazon.com/AmazonS3/latest/userguide/versioning-workflows.html) that Amazon S3 assigns to the file every time you update the script.
     *
     * Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example:
     *
     * `3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo`
     *
     * For more information, see [Using a startup script](https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-startupscripts3objectversion
     */
    readonly startupScriptS3ObjectVersion?: string;
    /**
     * The relative path to the startup shell script in your Amazon S3 bucket. For example, `s3://mwaa-environment/startup.sh` .
     *
     * Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, see [Using a startup script](https://docs.aws.amazon.com/mwaa/latest/userguide/using-startup-script.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-startupscripts3path
     */
    readonly startupScriptS3Path?: string;
    /**
     * The key-value tag pairs associated to your environment. For example, `"Environment": "Staging"` . To learn more, see [Tagging](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) .
     *
     * If you specify new tags for an existing environment, the update requires service interruption before taking effect.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-tags
     */
    readonly tags?: any;
    /**
     * The Apache Airflow *Web server* access mode.
     *
     * To learn more, see [Apache Airflow access modes](https://docs.aws.amazon.com/mwaa/latest/userguide/configuring-networking.html) . Valid values: `PRIVATE_ONLY` or `PUBLIC_ONLY` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-webserveraccessmode
     */
    readonly webserverAccessMode?: string;
    /**
     * The day and time of the week to start weekly maintenance updates of your environment in the following format: `DAY:HH:MM` .
     *
     * For example: `TUE:03:30` . You can specify a start time in 30 minute increments only. Supported input includes the following:
     *
     * - MON|TUE|WED|THU|FRI|SAT|SUN:([01]\\d|2[0-3]):(00|30)
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mwaa-environment.html#cfn-mwaa-environment-weeklymaintenancewindowstart
     */
    readonly weeklyMaintenanceWindowStart?: string;
}
