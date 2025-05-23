import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates an Amazon Kinesis Data Analytics application.
 *
 * For information about creating a Kinesis Data Analytics application, see [Creating an Application](https://docs.aws.amazon.com/managed-flink/latest/java/getting-started.html) .
 *
 * @cloudformationResource AWS::KinesisAnalyticsV2::Application
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html
 */
export declare class CfnApplicationV2 extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplicationV2 from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplicationV2;
    /**
     * Use this parameter to configure the application.
     */
    applicationConfiguration?: CfnApplicationV2.ApplicationConfigurationProperty | cdk.IResolvable;
    /**
     * The description of the application.
     */
    applicationDescription?: string;
    /**
     * Describes the maintenance configuration for the application.
     */
    applicationMaintenanceConfiguration?: CfnApplicationV2.ApplicationMaintenanceConfigurationProperty | cdk.IResolvable;
    /**
     * To create a Kinesis Data Analytics Studio notebook, you must set the mode to `INTERACTIVE` .
     */
    applicationMode?: string;
    /**
     * The name of the application.
     */
    applicationName?: string;
    /**
     * Describes the starting parameters for an Managed Service for Apache Flink application.
     */
    runConfiguration?: cdk.IResolvable | CfnApplicationV2.RunConfigurationProperty;
    /**
     * The runtime environment for the application.
     */
    runtimeEnvironment: string;
    /**
     * Specifies the IAM role that the application uses to access external resources.
     */
    serviceExecutionRole: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of one or more tags to assign to the application.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationV2Props);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApplicationV2 {
    /**
     * Describes the starting parameters for an Managed Service for Apache Flink application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-runconfiguration.html
     */
    interface RunConfigurationProperty {
        /**
         * Describes the restore behavior of a restarting application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-runconfiguration.html#cfn-kinesisanalyticsv2-application-runconfiguration-applicationrestoreconfiguration
         */
        readonly applicationRestoreConfiguration?: CfnApplicationV2.ApplicationRestoreConfigurationProperty | cdk.IResolvable;
        /**
         * Describes the starting parameters for a Managed Service for Apache Flink application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-runconfiguration.html#cfn-kinesisanalyticsv2-application-runconfiguration-flinkrunconfiguration
         */
        readonly flinkRunConfiguration?: CfnApplicationV2.FlinkRunConfigurationProperty | cdk.IResolvable;
    }
    /**
     * Describes the starting parameters for a Managed Service for Apache Flink application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-flinkrunconfiguration.html
     */
    interface FlinkRunConfigurationProperty {
        /**
         * When restoring from a snapshot, specifies whether the runtime is allowed to skip a state that cannot be mapped to the new program.
         *
         * This will happen if the program is updated between snapshots to remove stateful parameters, and state data in the snapshot no longer corresponds to valid application data. For more information, see [Allowing Non-Restored State](https://docs.aws.amazon.com/https://nightlies.apache.org/flink/flink-docs-master/docs/ops/state/savepoints/#allowing-non-restored-state) in the [Apache Flink documentation](https://docs.aws.amazon.com/https://nightlies.apache.org/flink/flink-docs-master) .
         *
         * > This value defaults to `false` . If you update your application without specifying this parameter, `AllowNonRestoredState` will be set to `false` , even if it was previously set to `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-flinkrunconfiguration.html#cfn-kinesisanalyticsv2-application-flinkrunconfiguration-allownonrestoredstate
         */
        readonly allowNonRestoredState?: boolean | cdk.IResolvable;
    }
    /**
     * Specifies the method and snapshot to use when restarting an application using previously saved application state.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationrestoreconfiguration.html
     */
    interface ApplicationRestoreConfigurationProperty {
        /**
         * Specifies how the application should be restored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationrestoreconfiguration.html#cfn-kinesisanalyticsv2-application-applicationrestoreconfiguration-applicationrestoretype
         */
        readonly applicationRestoreType: string;
        /**
         * The identifier of an existing snapshot of application state to use to restart an application.
         *
         * The application uses this value if `RESTORE_FROM_CUSTOM_SNAPSHOT` is specified for the `ApplicationRestoreType` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationrestoreconfiguration.html#cfn-kinesisanalyticsv2-application-applicationrestoreconfiguration-snapshotname
         */
        readonly snapshotName?: string;
    }
    /**
     * Specifies the maintence window parameters for a Kinesis Data Analytics application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationmaintenanceconfiguration.html
     */
    interface ApplicationMaintenanceConfigurationProperty {
        /**
         * Specifies the start time of the maintence window.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationmaintenanceconfiguration.html#cfn-kinesisanalyticsv2-application-applicationmaintenanceconfiguration-applicationmaintenancewindowstarttime
         */
        readonly applicationMaintenanceWindowStartTime: string;
    }
    /**
     * Specifies the creation parameters for a Managed Service for Apache Flink application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationconfiguration.html
     */
    interface ApplicationConfigurationProperty {
        /**
         * The code location and type parameters for a Managed Service for Apache Flink application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationconfiguration.html#cfn-kinesisanalyticsv2-application-applicationconfiguration-applicationcodeconfiguration
         */
        readonly applicationCodeConfiguration?: CfnApplicationV2.ApplicationCodeConfigurationProperty | cdk.IResolvable;
        /**
         * Describes whether snapshots are enabled for a Managed Service for Apache Flink application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationconfiguration.html#cfn-kinesisanalyticsv2-application-applicationconfiguration-applicationsnapshotconfiguration
         */
        readonly applicationSnapshotConfiguration?: CfnApplicationV2.ApplicationSnapshotConfigurationProperty | cdk.IResolvable;
        /**
         * Describes whether system rollbacks are enabled for a Managed Service for Apache Flink application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationconfiguration.html#cfn-kinesisanalyticsv2-application-applicationconfiguration-applicationsystemrollbackconfiguration
         */
        readonly applicationSystemRollbackConfiguration?: CfnApplicationV2.ApplicationSystemRollbackConfigurationProperty | cdk.IResolvable;
        /**
         * Describes execution properties for a Managed Service for Apache Flink application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationconfiguration.html#cfn-kinesisanalyticsv2-application-applicationconfiguration-environmentproperties
         */
        readonly environmentProperties?: CfnApplicationV2.EnvironmentPropertiesProperty | cdk.IResolvable;
        /**
         * The creation and update parameters for a Managed Service for Apache Flink application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationconfiguration.html#cfn-kinesisanalyticsv2-application-applicationconfiguration-flinkapplicationconfiguration
         */
        readonly flinkApplicationConfiguration?: CfnApplicationV2.FlinkApplicationConfigurationProperty | cdk.IResolvable;
        /**
         * The creation and update parameters for a SQL-based Kinesis Data Analytics application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationconfiguration.html#cfn-kinesisanalyticsv2-application-applicationconfiguration-sqlapplicationconfiguration
         */
        readonly sqlApplicationConfiguration?: cdk.IResolvable | CfnApplicationV2.SqlApplicationConfigurationProperty;
        /**
         * The array of descriptions of VPC configurations available to the application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationconfiguration.html#cfn-kinesisanalyticsv2-application-applicationconfiguration-vpcconfigurations
         */
        readonly vpcConfigurations?: Array<cdk.IResolvable | CfnApplicationV2.VpcConfigurationProperty> | cdk.IResolvable;
        /**
         * The configuration parameters for a Kinesis Data Analytics Studio notebook.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationconfiguration.html#cfn-kinesisanalyticsv2-application-applicationconfiguration-zeppelinapplicationconfiguration
         */
        readonly zeppelinApplicationConfiguration?: cdk.IResolvable | CfnApplicationV2.ZeppelinApplicationConfigurationProperty;
    }
    /**
     * Describes code configuration for an application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationcodeconfiguration.html
     */
    interface ApplicationCodeConfigurationProperty {
        /**
         * The location and type of the application code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationcodeconfiguration.html#cfn-kinesisanalyticsv2-application-applicationcodeconfiguration-codecontent
         */
        readonly codeContent: CfnApplicationV2.CodeContentProperty | cdk.IResolvable;
        /**
         * Specifies whether the code content is in text or zip format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationcodeconfiguration.html#cfn-kinesisanalyticsv2-application-applicationcodeconfiguration-codecontenttype
         */
        readonly codeContentType: string;
    }
    /**
     * Specifies either the application code, or the location of the application code, for a Managed Service for Apache Flink application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-codecontent.html
     */
    interface CodeContentProperty {
        /**
         * Information about the Amazon S3 bucket that contains the application code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-codecontent.html#cfn-kinesisanalyticsv2-application-codecontent-s3contentlocation
         */
        readonly s3ContentLocation?: cdk.IResolvable | CfnApplicationV2.S3ContentLocationProperty;
        /**
         * The text-format code for a Managed Service for Apache Flink application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-codecontent.html#cfn-kinesisanalyticsv2-application-codecontent-textcontent
         */
        readonly textContent?: string;
        /**
         * The zip-format code for a Managed Service for Apache Flink application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-codecontent.html#cfn-kinesisanalyticsv2-application-codecontent-zipfilecontent
         */
        readonly zipFileContent?: string;
    }
    /**
     * The location of an application or a custom artifact.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-s3contentlocation.html
     */
    interface S3ContentLocationProperty {
        /**
         * The Amazon Resource Name (ARN) for the S3 bucket containing the application code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-s3contentlocation.html#cfn-kinesisanalyticsv2-application-s3contentlocation-bucketarn
         */
        readonly bucketArn: string;
        /**
         * The file key for the object containing the application code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-s3contentlocation.html#cfn-kinesisanalyticsv2-application-s3contentlocation-filekey
         */
        readonly fileKey: string;
        /**
         * The version of the object containing the application code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-s3contentlocation.html#cfn-kinesisanalyticsv2-application-s3contentlocation-objectversion
         */
        readonly objectVersion?: string;
    }
    /**
     * Describes execution properties for a Managed Service for Apache Flink application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-environmentproperties.html
     */
    interface EnvironmentPropertiesProperty {
        /**
         * Describes the execution property groups.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-environmentproperties.html#cfn-kinesisanalyticsv2-application-environmentproperties-propertygroups
         */
        readonly propertyGroups?: Array<cdk.IResolvable | CfnApplicationV2.PropertyGroupProperty> | cdk.IResolvable;
    }
    /**
     * Property key-value pairs passed into an application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-propertygroup.html
     */
    interface PropertyGroupProperty {
        /**
         * Describes the key of an application execution property key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-propertygroup.html#cfn-kinesisanalyticsv2-application-propertygroup-propertygroupid
         */
        readonly propertyGroupId?: string;
        /**
         * Describes the value of an application execution property key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-propertygroup.html#cfn-kinesisanalyticsv2-application-propertygroup-propertymap
         */
        readonly propertyMap?: cdk.IResolvable | Record<string, string>;
    }
    /**
     * Describes configuration parameters for a Managed Service for Apache Flink application or a Studio notebook.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-flinkapplicationconfiguration.html
     */
    interface FlinkApplicationConfigurationProperty {
        /**
         * Describes an application's checkpointing configuration.
         *
         * Checkpointing is the process of persisting application state for fault tolerance. For more information, see [Checkpoints for Fault Tolerance](https://docs.aws.amazon.com/https://ci.apache.org/projects/flink/flink-docs-release-1.8/concepts/programming-model.html#checkpoints-for-fault-tolerance) in the [Apache Flink Documentation](https://docs.aws.amazon.com/https://ci.apache.org/projects/flink/flink-docs-release-1.8/) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-flinkapplicationconfiguration.html#cfn-kinesisanalyticsv2-application-flinkapplicationconfiguration-checkpointconfiguration
         */
        readonly checkpointConfiguration?: CfnApplicationV2.CheckpointConfigurationProperty | cdk.IResolvable;
        /**
         * Describes configuration parameters for Amazon CloudWatch logging for an application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-flinkapplicationconfiguration.html#cfn-kinesisanalyticsv2-application-flinkapplicationconfiguration-monitoringconfiguration
         */
        readonly monitoringConfiguration?: cdk.IResolvable | CfnApplicationV2.MonitoringConfigurationProperty;
        /**
         * Describes parameters for how an application executes multiple tasks simultaneously.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-flinkapplicationconfiguration.html#cfn-kinesisanalyticsv2-application-flinkapplicationconfiguration-parallelismconfiguration
         */
        readonly parallelismConfiguration?: cdk.IResolvable | CfnApplicationV2.ParallelismConfigurationProperty;
    }
    /**
     * Describes an application's checkpointing configuration.
     *
     * Checkpointing is the process of persisting application state for fault tolerance. For more information, see [Checkpoints for Fault Tolerance](https://docs.aws.amazon.com/https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/fault-tolerance/checkpointing/) in the [Apache Flink Documentation](https://docs.aws.amazon.com/https://nightlies.apache.org/flink/flink-docs-master) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-checkpointconfiguration.html
     */
    interface CheckpointConfigurationProperty {
        /**
         * Describes whether checkpointing is enabled for a Managed Service for Apache Flink application.
         *
         * > If `CheckpointConfiguration.ConfigurationType` is `DEFAULT` , the application will use a `CheckpointingEnabled` value of `true` , even if this value is set to another value using this API or in application code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-checkpointconfiguration.html#cfn-kinesisanalyticsv2-application-checkpointconfiguration-checkpointingenabled
         */
        readonly checkpointingEnabled?: boolean | cdk.IResolvable;
        /**
         * Describes the interval in milliseconds between checkpoint operations.
         *
         * > If `CheckpointConfiguration.ConfigurationType` is `DEFAULT` , the application will use a `CheckpointInterval` value of 60000, even if this value is set to another value using this API or in application code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-checkpointconfiguration.html#cfn-kinesisanalyticsv2-application-checkpointconfiguration-checkpointinterval
         */
        readonly checkpointInterval?: number;
        /**
         * Describes whether the application uses Managed Service for Apache Flink' default checkpointing behavior.
         *
         * You must set this property to `CUSTOM` in order to set the `CheckpointingEnabled` , `CheckpointInterval` , or `MinPauseBetweenCheckpoints` parameters.
         *
         * > If this value is set to `DEFAULT` , the application will use the following values, even if they are set to other values using APIs or application code:
         * >
         * > - *CheckpointingEnabled:* true
         * > - *CheckpointInterval:* 60000
         * > - *MinPauseBetweenCheckpoints:* 5000
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-checkpointconfiguration.html#cfn-kinesisanalyticsv2-application-checkpointconfiguration-configurationtype
         */
        readonly configurationType: string;
        /**
         * Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start.
         *
         * If a checkpoint operation takes longer than the `CheckpointInterval` , the application otherwise performs continual checkpoint operations. For more information, see [Tuning Checkpointing](https://docs.aws.amazon.com/https://nightlies.apache.org/flink/flink-docs-master/docs/ops/state/large_state_tuning/#tuning-checkpointing) in the [Apache Flink Documentation](https://docs.aws.amazon.com/https://nightlies.apache.org/flink/flink-docs-master) .
         *
         * > If `CheckpointConfiguration.ConfigurationType` is `DEFAULT` , the application will use a `MinPauseBetweenCheckpoints` value of 5000, even if this value is set using this API or in application code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-checkpointconfiguration.html#cfn-kinesisanalyticsv2-application-checkpointconfiguration-minpausebetweencheckpoints
         */
        readonly minPauseBetweenCheckpoints?: number;
    }
    /**
     * Describes parameters for how a Flink-based Kinesis Data Analytics application executes multiple tasks simultaneously.
     *
     * For more information about parallelism, see [Parallel Execution](https://docs.aws.amazon.com/https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/execution/parallel/) in the [Apache Flink Documentation](https://docs.aws.amazon.com/https://nightlies.apache.org/flink/flink-docs-master) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-parallelismconfiguration.html
     */
    interface ParallelismConfigurationProperty {
        /**
         * Describes whether the Managed Service for Apache Flink service can increase the parallelism of the application in response to increased throughput.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-parallelismconfiguration.html#cfn-kinesisanalyticsv2-application-parallelismconfiguration-autoscalingenabled
         */
        readonly autoScalingEnabled?: boolean | cdk.IResolvable;
        /**
         * Describes whether the application uses the default parallelism for the Managed Service for Apache Flink service.
         *
         * You must set this property to `CUSTOM` in order to change your application's `AutoScalingEnabled` , `Parallelism` , or `ParallelismPerKPU` properties.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-parallelismconfiguration.html#cfn-kinesisanalyticsv2-application-parallelismconfiguration-configurationtype
         */
        readonly configurationType: string;
        /**
         * Describes the initial number of parallel tasks that a Java-based Kinesis Data Analytics application can perform.
         *
         * The Kinesis Data Analytics service can increase this number automatically if [ParallelismConfiguration:AutoScalingEnabled](https://docs.aws.amazon.com/managed-flink/latest/apiv2/API_ParallelismConfiguration.html#kinesisanalytics-Type-ParallelismConfiguration-AutoScalingEnabled.html) is set to `true` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-parallelismconfiguration.html#cfn-kinesisanalyticsv2-application-parallelismconfiguration-parallelism
         */
        readonly parallelism?: number;
        /**
         * Describes the number of parallel tasks that a Java-based Kinesis Data Analytics application can perform per Kinesis Processing Unit (KPU) used by the application.
         *
         * For more information about KPUs, see [Amazon Kinesis Data Analytics Pricing](https://docs.aws.amazon.com/kinesis/data-analytics/pricing/) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-parallelismconfiguration.html#cfn-kinesisanalyticsv2-application-parallelismconfiguration-parallelismperkpu
         */
        readonly parallelismPerKpu?: number;
    }
    /**
     * Describes configuration parameters for Amazon CloudWatch logging for a Java-based Kinesis Data Analytics application.
     *
     * For more information about CloudWatch logging, see [Monitoring](https://docs.aws.amazon.com/managed-flink/latest/java/monitoring-overview) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-monitoringconfiguration.html
     */
    interface MonitoringConfigurationProperty {
        /**
         * Describes whether to use the default CloudWatch logging configuration for an application.
         *
         * You must set this property to `CUSTOM` in order to set the `LogLevel` or `MetricsLevel` parameters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-monitoringconfiguration.html#cfn-kinesisanalyticsv2-application-monitoringconfiguration-configurationtype
         */
        readonly configurationType: string;
        /**
         * Describes the verbosity of the CloudWatch Logs for an application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-monitoringconfiguration.html#cfn-kinesisanalyticsv2-application-monitoringconfiguration-loglevel
         */
        readonly logLevel?: string;
        /**
         * Describes the granularity of the CloudWatch Logs for an application.
         *
         * The `Parallelism` level is not recommended for applications with a Parallelism over 64 due to excessive costs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-monitoringconfiguration.html#cfn-kinesisanalyticsv2-application-monitoringconfiguration-metricslevel
         */
        readonly metricsLevel?: string;
    }
    /**
     * Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-sqlapplicationconfiguration.html
     */
    interface SqlApplicationConfigurationProperty {
        /**
         * The array of [Input](https://docs.aws.amazon.com/managed-flink/latest/apiv2/API_Input.html) objects describing the input streams used by the application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-sqlapplicationconfiguration.html#cfn-kinesisanalyticsv2-application-sqlapplicationconfiguration-inputs
         */
        readonly inputs?: Array<CfnApplicationV2.InputProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * When you configure the application input for a SQL-based Kinesis Data Analytics application, you specify the streaming source, the in-application stream name that is created, and the mapping between the two.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-input.html
     */
    interface InputProperty {
        /**
         * Describes the number of in-application streams to create.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-input.html#cfn-kinesisanalyticsv2-application-input-inputparallelism
         */
        readonly inputParallelism?: CfnApplicationV2.InputParallelismProperty | cdk.IResolvable;
        /**
         * The [InputProcessingConfiguration](https://docs.aws.amazon.com/managed-flink/latest/apiv2/API_InputProcessingConfiguration.html) for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is [InputLambdaProcessor](https://docs.aws.amazon.com/managed-flink/latest/apiv2/API_InputLambdaProcessor.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-input.html#cfn-kinesisanalyticsv2-application-input-inputprocessingconfiguration
         */
        readonly inputProcessingConfiguration?: CfnApplicationV2.InputProcessingConfigurationProperty | cdk.IResolvable;
        /**
         * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.
         *
         * Also used to describe the format of the reference data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-input.html#cfn-kinesisanalyticsv2-application-input-inputschema
         */
        readonly inputSchema: CfnApplicationV2.InputSchemaProperty | cdk.IResolvable;
        /**
         * If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-input.html#cfn-kinesisanalyticsv2-application-input-kinesisfirehoseinput
         */
        readonly kinesisFirehoseInput?: cdk.IResolvable | CfnApplicationV2.KinesisFirehoseInputProperty;
        /**
         * If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-input.html#cfn-kinesisanalyticsv2-application-input-kinesisstreamsinput
         */
        readonly kinesisStreamsInput?: cdk.IResolvable | CfnApplicationV2.KinesisStreamsInputProperty;
        /**
         * The name prefix to use when creating an in-application stream.
         *
         * Suppose that you specify a prefix " `MyInApplicationStream` ." Kinesis Data Analytics then creates one or more (as per the `InputParallelism` count you specified) in-application streams with the names " `MyInApplicationStream_001` ," " `MyInApplicationStream_002` ," and so on.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-input.html#cfn-kinesisanalyticsv2-application-input-nameprefix
         */
        readonly namePrefix: string;
    }
    /**
     * For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputschema.html
     */
    interface InputSchemaProperty {
        /**
         * A list of `RecordColumn` objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputschema.html#cfn-kinesisanalyticsv2-application-inputschema-recordcolumns
         */
        readonly recordColumns: Array<cdk.IResolvable | CfnApplicationV2.RecordColumnProperty> | cdk.IResolvable;
        /**
         * Specifies the encoding of the records in the streaming source.
         *
         * For example, UTF-8.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputschema.html#cfn-kinesisanalyticsv2-application-inputschema-recordencoding
         */
        readonly recordEncoding?: string;
        /**
         * Specifies the format of the records on the streaming source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputschema.html#cfn-kinesisanalyticsv2-application-inputschema-recordformat
         */
        readonly recordFormat: cdk.IResolvable | CfnApplicationV2.RecordFormatProperty;
    }
    /**
     * For a SQL-based Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.
     *
     * Also used to describe the format of the reference data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-recordcolumn.html
     */
    interface RecordColumnProperty {
        /**
         * A reference to the data element in the streaming input or the reference data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-recordcolumn.html#cfn-kinesisanalyticsv2-application-recordcolumn-mapping
         */
        readonly mapping?: string;
        /**
         * The name of the column that is created in the in-application input stream or reference table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-recordcolumn.html#cfn-kinesisanalyticsv2-application-recordcolumn-name
         */
        readonly name: string;
        /**
         * The type of column created in the in-application input stream or reference table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-recordcolumn.html#cfn-kinesisanalyticsv2-application-recordcolumn-sqltype
         */
        readonly sqlType: string;
    }
    /**
     * For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-recordformat.html
     */
    interface RecordFormatProperty {
        /**
         * When you configure application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-recordformat.html#cfn-kinesisanalyticsv2-application-recordformat-mappingparameters
         */
        readonly mappingParameters?: cdk.IResolvable | CfnApplicationV2.MappingParametersProperty;
        /**
         * The type of record format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-recordformat.html#cfn-kinesisanalyticsv2-application-recordformat-recordformattype
         */
        readonly recordFormatType: string;
    }
    /**
     * When you configure a SQL-based Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-mappingparameters.html
     */
    interface MappingParametersProperty {
        /**
         * Provides additional mapping information when the record format uses delimiters (for example, CSV).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-mappingparameters.html#cfn-kinesisanalyticsv2-application-mappingparameters-csvmappingparameters
         */
        readonly csvMappingParameters?: CfnApplicationV2.CSVMappingParametersProperty | cdk.IResolvable;
        /**
         * Provides additional mapping information when JSON is the record format on the streaming source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-mappingparameters.html#cfn-kinesisanalyticsv2-application-mappingparameters-jsonmappingparameters
         */
        readonly jsonMappingParameters?: cdk.IResolvable | CfnApplicationV2.JSONMappingParametersProperty;
    }
    /**
     * For a SQL-based Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-jsonmappingparameters.html
     */
    interface JSONMappingParametersProperty {
        /**
         * The path to the top-level parent that contains the records.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-jsonmappingparameters.html#cfn-kinesisanalyticsv2-application-jsonmappingparameters-recordrowpath
         */
        readonly recordRowPath: string;
    }
    /**
     * For a SQL-based Kinesis Data Analytics application, provides additional mapping information when the record format uses delimiters, such as CSV.
     *
     * For example, the following sample records use CSV format, where the records use the *'\n'* as the row delimiter and a comma (",") as the column delimiter:
     *
     * `"name1", "address1"`
     *
     * `"name2", "address2"`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-csvmappingparameters.html
     */
    interface CSVMappingParametersProperty {
        /**
         * The column delimiter.
         *
         * For example, in a CSV format, a comma (",") is the typical column delimiter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-csvmappingparameters.html#cfn-kinesisanalyticsv2-application-csvmappingparameters-recordcolumndelimiter
         */
        readonly recordColumnDelimiter: string;
        /**
         * The row delimiter.
         *
         * For example, in a CSV format, *'\n'* is the typical row delimiter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-csvmappingparameters.html#cfn-kinesisanalyticsv2-application-csvmappingparameters-recordrowdelimiter
         */
        readonly recordRowDelimiter: string;
    }
    /**
     * Identifies a Kinesis data stream as the streaming source.
     *
     * You provide the stream's Amazon Resource Name (ARN).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-kinesisstreamsinput.html
     */
    interface KinesisStreamsInputProperty {
        /**
         * The ARN of the input Kinesis data stream to read.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-kinesisstreamsinput.html#cfn-kinesisanalyticsv2-application-kinesisstreamsinput-resourcearn
         */
        readonly resourceArn: string;
    }
    /**
     * For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source.
     *
     * You provide the delivery stream's Amazon Resource Name (ARN).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-kinesisfirehoseinput.html
     */
    interface KinesisFirehoseInputProperty {
        /**
         * The Amazon Resource Name (ARN) of the delivery stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-kinesisfirehoseinput.html#cfn-kinesisanalyticsv2-application-kinesisfirehoseinput-resourcearn
         */
        readonly resourceArn: string;
    }
    /**
     * For an SQL-based Amazon Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code.
     *
     * Currently, the only input processor available is [Amazon Lambda](https://docs.aws.amazon.com/lambda/) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputprocessingconfiguration.html
     */
    interface InputProcessingConfigurationProperty {
        /**
         * The [InputLambdaProcessor](https://docs.aws.amazon.com/managed-flink/latest/apiv2/API_InputLambdaProcessor.html) that is used to preprocess the records in the stream before being processed by your application code.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputprocessingconfiguration.html#cfn-kinesisanalyticsv2-application-inputprocessingconfiguration-inputlambdaprocessor
         */
        readonly inputLambdaProcessor?: CfnApplicationV2.InputLambdaProcessorProperty | cdk.IResolvable;
    }
    /**
     * An object that contains the Amazon Resource Name (ARN) of the Amazon Lambda function that is used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputlambdaprocessor.html
     */
    interface InputLambdaProcessorProperty {
        /**
         * The ARN of the Amazon Lambda function that operates on records in the stream.
         *
         * > To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see [Example ARNs: Amazon Lambda](https://docs.aws.amazon.com//general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputlambdaprocessor.html#cfn-kinesisanalyticsv2-application-inputlambdaprocessor-resourcearn
         */
        readonly resourceArn: string;
    }
    /**
     * For a SQL-based Kinesis Data Analytics application, describes the number of in-application streams to create for a given streaming source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputparallelism.html
     */
    interface InputParallelismProperty {
        /**
         * The number of in-application streams to create.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-inputparallelism.html#cfn-kinesisanalyticsv2-application-inputparallelism-count
         */
        readonly count?: number;
    }
    /**
     * The configuration of a Kinesis Data Analytics Studio notebook.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-zeppelinapplicationconfiguration.html
     */
    interface ZeppelinApplicationConfigurationProperty {
        /**
         * The Amazon Glue Data Catalog that you use in queries in a Kinesis Data Analytics Studio notebook.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-zeppelinapplicationconfiguration.html#cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-catalogconfiguration
         */
        readonly catalogConfiguration?: CfnApplicationV2.CatalogConfigurationProperty | cdk.IResolvable;
        /**
         * A list of `CustomArtifactConfiguration` objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-zeppelinapplicationconfiguration.html#cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-customartifactsconfiguration
         */
        readonly customArtifactsConfiguration?: Array<CfnApplicationV2.CustomArtifactConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-zeppelinapplicationconfiguration.html#cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-deployasapplicationconfiguration
         */
        readonly deployAsApplicationConfiguration?: CfnApplicationV2.DeployAsApplicationConfigurationProperty | cdk.IResolvable;
        /**
         * The monitoring configuration of a Kinesis Data Analytics Studio notebook.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-zeppelinapplicationconfiguration.html#cfn-kinesisanalyticsv2-application-zeppelinapplicationconfiguration-monitoringconfiguration
         */
        readonly monitoringConfiguration?: cdk.IResolvable | CfnApplicationV2.ZeppelinMonitoringConfigurationProperty;
    }
    /**
     * The configuration parameters for the default Amazon Glue database.
     *
     * You use this database for SQL queries that you write in a Kinesis Data Analytics Studio notebook.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-catalogconfiguration.html
     */
    interface CatalogConfigurationProperty {
        /**
         * The configuration parameters for the default Amazon Glue database.
         *
         * You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-catalogconfiguration.html#cfn-kinesisanalyticsv2-application-catalogconfiguration-gluedatacatalogconfiguration
         */
        readonly glueDataCatalogConfiguration?: CfnApplicationV2.GlueDataCatalogConfigurationProperty | cdk.IResolvable;
    }
    /**
     * The configuration of the Glue Data Catalog that you use for Apache Flink SQL queries and table API transforms that you write in an application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-gluedatacatalogconfiguration.html
     */
    interface GlueDataCatalogConfigurationProperty {
        /**
         * The Amazon Resource Name (ARN) of the database.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-gluedatacatalogconfiguration.html#cfn-kinesisanalyticsv2-application-gluedatacatalogconfiguration-databasearn
         */
        readonly databaseArn?: string;
    }
    /**
     * Describes configuration parameters for Amazon CloudWatch logging for a Kinesis Data Analytics Studio notebook.
     *
     * For more information about CloudWatch logging, see [Monitoring](https://docs.aws.amazon.com/managed-flink/latest/java/monitoring-overview.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-zeppelinmonitoringconfiguration.html
     */
    interface ZeppelinMonitoringConfigurationProperty {
        /**
         * The verbosity of the CloudWatch Logs for an application.
         *
         * You can set it to `INFO` , `WARN` , `ERROR` , or `DEBUG` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-zeppelinmonitoringconfiguration.html#cfn-kinesisanalyticsv2-application-zeppelinmonitoringconfiguration-loglevel
         */
        readonly logLevel?: string;
    }
    /**
     * The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-deployasapplicationconfiguration.html
     */
    interface DeployAsApplicationConfigurationProperty {
        /**
         * The description of an Amazon S3 object that contains the Amazon Data Analytics application, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-deployasapplicationconfiguration.html#cfn-kinesisanalyticsv2-application-deployasapplicationconfiguration-s3contentlocation
         */
        readonly s3ContentLocation: cdk.IResolvable | CfnApplicationV2.S3ContentBaseLocationProperty;
    }
    /**
     * The base location of the Amazon Data Analytics application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-s3contentbaselocation.html
     */
    interface S3ContentBaseLocationProperty {
        /**
         * The base path for the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-s3contentbaselocation.html#cfn-kinesisanalyticsv2-application-s3contentbaselocation-basepath
         */
        readonly basePath?: string;
        /**
         * The Amazon Resource Name (ARN) of the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-s3contentbaselocation.html#cfn-kinesisanalyticsv2-application-s3contentbaselocation-bucketarn
         */
        readonly bucketArn: string;
    }
    /**
     * The configuration of connectors and user-defined functions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-customartifactconfiguration.html
     */
    interface CustomArtifactConfigurationProperty {
        /**
         * Set this to either `UDF` or `DEPENDENCY_JAR` .
         *
         * `UDF` stands for user-defined functions. This type of artifact must be in an S3 bucket. A `DEPENDENCY_JAR` can be in either Maven or an S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-customartifactconfiguration.html#cfn-kinesisanalyticsv2-application-customartifactconfiguration-artifacttype
         */
        readonly artifactType: string;
        /**
         * The parameters required to fully specify a Maven reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-customartifactconfiguration.html#cfn-kinesisanalyticsv2-application-customartifactconfiguration-mavenreference
         */
        readonly mavenReference?: cdk.IResolvable | CfnApplicationV2.MavenReferenceProperty;
        /**
         * The location of the custom artifacts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-customartifactconfiguration.html#cfn-kinesisanalyticsv2-application-customartifactconfiguration-s3contentlocation
         */
        readonly s3ContentLocation?: cdk.IResolvable | CfnApplicationV2.S3ContentLocationProperty;
    }
    /**
     * The information required to specify a Maven reference.
     *
     * You can use Maven references to specify dependency JAR files.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-mavenreference.html
     */
    interface MavenReferenceProperty {
        /**
         * The artifact ID of the Maven reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-mavenreference.html#cfn-kinesisanalyticsv2-application-mavenreference-artifactid
         */
        readonly artifactId: string;
        /**
         * The group ID of the Maven reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-mavenreference.html#cfn-kinesisanalyticsv2-application-mavenreference-groupid
         */
        readonly groupId: string;
        /**
         * The version of the Maven reference.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-mavenreference.html#cfn-kinesisanalyticsv2-application-mavenreference-version
         */
        readonly version: string;
    }
    /**
     * Describes the parameters of a VPC used by the application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-vpcconfiguration.html
     */
    interface VpcConfigurationProperty {
        /**
         * The array of [SecurityGroup](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_SecurityGroup.html) IDs used by the VPC configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-vpcconfiguration.html#cfn-kinesisanalyticsv2-application-vpcconfiguration-securitygroupids
         */
        readonly securityGroupIds: Array<string>;
        /**
         * The array of [Subnet](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_Subnet.html) IDs used by the VPC configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-vpcconfiguration.html#cfn-kinesisanalyticsv2-application-vpcconfiguration-subnetids
         */
        readonly subnetIds: Array<string>;
    }
    /**
     * Describes whether snapshots are enabled for a Managed Service for Apache Flink application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationsnapshotconfiguration.html
     */
    interface ApplicationSnapshotConfigurationProperty {
        /**
         * Describes whether snapshots are enabled for a Managed Service for Apache Flink application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationsnapshotconfiguration.html#cfn-kinesisanalyticsv2-application-applicationsnapshotconfiguration-snapshotsenabled
         */
        readonly snapshotsEnabled: boolean | cdk.IResolvable;
    }
    /**
     * Describes the system rollback configuration for a Managed Service for Apache Flink application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationsystemrollbackconfiguration.html
     */
    interface ApplicationSystemRollbackConfigurationProperty {
        /**
         * Describes whether system rollbacks are enabled for a Managed Service for Apache Flink application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-application-applicationsystemrollbackconfiguration.html#cfn-kinesisanalyticsv2-application-applicationsystemrollbackconfiguration-rollbackenabled
         */
        readonly rollbackEnabled: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnApplication`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html
 */
export interface CfnApplicationV2Props {
    /**
     * Use this parameter to configure the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationconfiguration
     */
    readonly applicationConfiguration?: CfnApplicationV2.ApplicationConfigurationProperty | cdk.IResolvable;
    /**
     * The description of the application.
     *
     * @default - ""
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationdescription
     */
    readonly applicationDescription?: string;
    /**
     * Describes the maintenance configuration for the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationmaintenanceconfiguration
     */
    readonly applicationMaintenanceConfiguration?: CfnApplicationV2.ApplicationMaintenanceConfigurationProperty | cdk.IResolvable;
    /**
     * To create a Kinesis Data Analytics Studio notebook, you must set the mode to `INTERACTIVE` .
     *
     * However, for a Kinesis Data Analytics for Apache Flink application, the mode is optional.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationmode
     */
    readonly applicationMode?: string;
    /**
     * The name of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-applicationname
     */
    readonly applicationName?: string;
    /**
     * Describes the starting parameters for an Managed Service for Apache Flink application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-runconfiguration
     */
    readonly runConfiguration?: cdk.IResolvable | CfnApplicationV2.RunConfigurationProperty;
    /**
     * The runtime environment for the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-runtimeenvironment
     */
    readonly runtimeEnvironment: string;
    /**
     * Specifies the IAM role that the application uses to access external resources.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-serviceexecutionrole
     */
    readonly serviceExecutionRole: string;
    /**
     * A list of one or more tags to assign to the application.
     *
     * A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-application.html#cfn-kinesisanalyticsv2-application-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * Adds an Amazon CloudWatch log stream to monitor application configuration errors.
 *
 * > Only one *ApplicationCloudWatchLoggingOption* resource can be attached per application.
 *
 * @cloudformationResource AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html
 */
export declare class CfnApplicationCloudWatchLoggingOptionV2 extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplicationCloudWatchLoggingOptionV2 from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplicationCloudWatchLoggingOptionV2;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the application.
     */
    applicationName: string;
    /**
     * Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).
     */
    cloudWatchLoggingOption: CfnApplicationCloudWatchLoggingOptionV2.CloudWatchLoggingOptionProperty | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationCloudWatchLoggingOptionV2Props);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApplicationCloudWatchLoggingOptionV2 {
    /**
     * Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption.html
     */
    interface CloudWatchLoggingOptionProperty {
        /**
         * The ARN of the CloudWatch log to receive application messages.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption.html#cfn-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption-logstreamarn
         */
        readonly logStreamArn: string;
    }
}
/**
 * Properties for defining a `CfnApplicationCloudWatchLoggingOption`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html
 */
export interface CfnApplicationCloudWatchLoggingOptionV2Props {
    /**
     * The name of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html#cfn-kinesisanalyticsv2-applicationcloudwatchloggingoption-applicationname
     */
    readonly applicationName: string;
    /**
     * Provides a description of Amazon CloudWatch logging options, including the log stream Amazon Resource Name (ARN).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationcloudwatchloggingoption.html#cfn-kinesisanalyticsv2-applicationcloudwatchloggingoption-cloudwatchloggingoption
     */
    readonly cloudWatchLoggingOption: CfnApplicationCloudWatchLoggingOptionV2.CloudWatchLoggingOptionProperty | cdk.IResolvable;
}
/**
 * Adds an external destination to your SQL-based Amazon Kinesis Data Analytics application.
 *
 * If you want Kinesis Data Analytics to deliver data from an in-application stream within your application to an external destination (such as an Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination.
 *
 * You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors.
 *
 * Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the [DescribeApplication](https://docs.aws.amazon.com/managed-flink/latest/apiv2/API_DescribeApplication.html) operation to find the current application version.
 *
 * > Creation of multiple outputs should be sequential (use of DependsOn) to avoid a problem with a stale application version ( *ConcurrentModificationException* ).
 *
 * @cloudformationResource AWS::KinesisAnalyticsV2::ApplicationOutput
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html
 */
export declare class CfnApplicationOutputV2 extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplicationOutputV2 from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplicationOutputV2;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the application.
     */
    applicationName: string;
    /**
     * Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written.
     */
    output: cdk.IResolvable | CfnApplicationOutputV2.OutputProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationOutputV2Props);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApplicationOutputV2 {
    /**
     * Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written.
     *
     * The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-output.html
     */
    interface OutputProperty {
        /**
         * Describes the data format when records are written to the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-output.html#cfn-kinesisanalyticsv2-applicationoutput-output-destinationschema
         */
        readonly destinationSchema: CfnApplicationOutputV2.DestinationSchemaProperty | cdk.IResolvable;
        /**
         * Identifies a Kinesis Data Firehose delivery stream as the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-output.html#cfn-kinesisanalyticsv2-applicationoutput-output-kinesisfirehoseoutput
         */
        readonly kinesisFirehoseOutput?: cdk.IResolvable | CfnApplicationOutputV2.KinesisFirehoseOutputProperty;
        /**
         * Identifies a Kinesis data stream as the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-output.html#cfn-kinesisanalyticsv2-applicationoutput-output-kinesisstreamsoutput
         */
        readonly kinesisStreamsOutput?: cdk.IResolvable | CfnApplicationOutputV2.KinesisStreamsOutputProperty;
        /**
         * Identifies an Amazon Lambda function as the destination.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-output.html#cfn-kinesisanalyticsv2-applicationoutput-output-lambdaoutput
         */
        readonly lambdaOutput?: cdk.IResolvable | CfnApplicationOutputV2.LambdaOutputProperty;
        /**
         * The name of the in-application stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-output.html#cfn-kinesisanalyticsv2-applicationoutput-output-name
         */
        readonly name?: string;
    }
    /**
     * Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-destinationschema.html
     */
    interface DestinationSchemaProperty {
        /**
         * Specifies the format of the records on the output stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-destinationschema.html#cfn-kinesisanalyticsv2-applicationoutput-destinationschema-recordformattype
         */
        readonly recordFormatType?: string;
    }
    /**
     * When you configure a SQL-based Kinesis Data Analytics application's output, identifies an Amazon Lambda function as the destination.
     *
     * You provide the function Amazon Resource Name (ARN) of the Lambda function.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-lambdaoutput.html
     */
    interface LambdaOutputProperty {
        /**
         * The Amazon Resource Name (ARN) of the destination Lambda function to write to.
         *
         * > To specify an earlier version of the Lambda function than the latest, include the Lambda function version in the Lambda function ARN. For more information about Lambda ARNs, see [Example ARNs: Amazon Lambda](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#arn-syntax-lambda)
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-lambdaoutput.html#cfn-kinesisanalyticsv2-applicationoutput-lambdaoutput-resourcearn
         */
        readonly resourceArn: string;
    }
    /**
     * For a SQL-based Kinesis Data Analytics application, when configuring application output, identifies a Kinesis Data Firehose delivery stream as the destination.
     *
     * You provide the stream Amazon Resource Name (ARN) of the delivery stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-kinesisfirehoseoutput.html
     */
    interface KinesisFirehoseOutputProperty {
        /**
         * The ARN of the destination delivery stream to write to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-kinesisfirehoseoutput.html#cfn-kinesisanalyticsv2-applicationoutput-kinesisfirehoseoutput-resourcearn
         */
        readonly resourceArn: string;
    }
    /**
     * When you configure a SQL-based Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination.
     *
     * You provide the stream Amazon Resource Name (ARN).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput.html
     */
    interface KinesisStreamsOutputProperty {
        /**
         * The ARN of the destination Kinesis data stream to write to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput.html#cfn-kinesisanalyticsv2-applicationoutput-kinesisstreamsoutput-resourcearn
         */
        readonly resourceArn: string;
    }
}
/**
 * Properties for defining a `CfnApplicationOutput`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html
 */
export interface CfnApplicationOutputV2Props {
    /**
     * The name of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html#cfn-kinesisanalyticsv2-applicationoutput-applicationname
     */
    readonly applicationName: string;
    /**
     * Describes a SQL-based Kinesis Data Analytics application's output configuration, in which you identify an in-application stream and a destination where you want the in-application stream data to be written.
     *
     * The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationoutput.html#cfn-kinesisanalyticsv2-applicationoutput-output
     */
    readonly output: cdk.IResolvable | CfnApplicationOutputV2.OutputProperty;
}
/**
 * Adds a reference data source to an existing SQL-based Kinesis Data Analytics application.
 *
 * Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in an Amazon S3 object maps to columns in the resulting in-application table.
 *
 * @cloudformationResource AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationreferencedatasource.html
 */
export declare class CfnApplicationReferenceDataSourceV2 extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnApplicationReferenceDataSourceV2 from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnApplicationReferenceDataSourceV2;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The name of the application.
     */
    applicationName: string;
    /**
     * For a SQL-based Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
     */
    referenceDataSource: cdk.IResolvable | CfnApplicationReferenceDataSourceV2.ReferenceDataSourceProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnApplicationReferenceDataSourceV2Props);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnApplicationReferenceDataSourceV2 {
    /**
     * For a SQL-based Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referencedatasource.html
     */
    interface ReferenceDataSourceProperty {
        /**
         * Describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referencedatasource.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-referencedatasource-referenceschema
         */
        readonly referenceSchema: cdk.IResolvable | CfnApplicationReferenceDataSourceV2.ReferenceSchemaProperty;
        /**
         * Identifies the S3 bucket and object that contains the reference data.
         *
         * A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the [UpdateApplication](https://docs.aws.amazon.com/managed-flink/latest/apiv2/API_UpdateApplication.html) operation to trigger reloading of data into your application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referencedatasource.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-referencedatasource-s3referencedatasource
         */
        readonly s3ReferenceDataSource?: cdk.IResolvable | CfnApplicationReferenceDataSourceV2.S3ReferenceDataSourceProperty;
        /**
         * The name of the in-application table to create.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referencedatasource.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-referencedatasource-tablename
         */
        readonly tableName?: string;
    }
    /**
     * For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referenceschema.html
     */
    interface ReferenceSchemaProperty {
        /**
         * A list of `RecordColumn` objects.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referenceschema.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-referenceschema-recordcolumns
         */
        readonly recordColumns: Array<cdk.IResolvable | CfnApplicationReferenceDataSourceV2.RecordColumnProperty> | cdk.IResolvable;
        /**
         * Specifies the encoding of the records in the streaming source.
         *
         * For example, UTF-8.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referenceschema.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-referenceschema-recordencoding
         */
        readonly recordEncoding?: string;
        /**
         * Specifies the format of the records on the streaming source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-referenceschema.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-referenceschema-recordformat
         */
        readonly recordFormat: cdk.IResolvable | CfnApplicationReferenceDataSourceV2.RecordFormatProperty;
    }
    /**
     * For a SQL-based Kinesis Data Analytics application, describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.
     *
     * Also used to describe the format of the reference data source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordcolumn.html
     */
    interface RecordColumnProperty {
        /**
         * A reference to the data element in the streaming input or the reference data source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordcolumn.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-recordcolumn-mapping
         */
        readonly mapping?: string;
        /**
         * The name of the column that is created in the in-application input stream or reference table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordcolumn.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-recordcolumn-name
         */
        readonly name: string;
        /**
         * The type of column created in the in-application input stream or reference table.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordcolumn.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-recordcolumn-sqltype
         */
        readonly sqlType: string;
    }
    /**
     * For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordformat.html
     */
    interface RecordFormatProperty {
        /**
         * When you configure application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordformat.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-recordformat-mappingparameters
         */
        readonly mappingParameters?: cdk.IResolvable | CfnApplicationReferenceDataSourceV2.MappingParametersProperty;
        /**
         * The type of record format.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-recordformat.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-recordformat-recordformattype
         */
        readonly recordFormatType: string;
    }
    /**
     * When you configure a SQL-based Kinesis Data Analytics application's input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-mappingparameters.html
     */
    interface MappingParametersProperty {
        /**
         * Provides additional mapping information when the record format uses delimiters (for example, CSV).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-mappingparameters.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-mappingparameters-csvmappingparameters
         */
        readonly csvMappingParameters?: CfnApplicationReferenceDataSourceV2.CSVMappingParametersProperty | cdk.IResolvable;
        /**
         * Provides additional mapping information when JSON is the record format on the streaming source.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-mappingparameters.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-mappingparameters-jsonmappingparameters
         */
        readonly jsonMappingParameters?: cdk.IResolvable | CfnApplicationReferenceDataSourceV2.JSONMappingParametersProperty;
    }
    /**
     * For a SQL-based Kinesis Data Analytics application, provides additional mapping information when JSON is the record format on the streaming source.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-jsonmappingparameters.html
     */
    interface JSONMappingParametersProperty {
        /**
         * The path to the top-level parent that contains the records.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-jsonmappingparameters.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-jsonmappingparameters-recordrowpath
         */
        readonly recordRowPath: string;
    }
    /**
     * For a SQL-based Kinesis Data Analytics application, provides additional mapping information when the record format uses delimiters, such as CSV.
     *
     * For example, the following sample records use CSV format, where the records use the *'\n'* as the row delimiter and a comma (",") as the column delimiter:
     *
     * `"name1", "address1"`
     *
     * `"name2", "address2"`
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters.html
     */
    interface CSVMappingParametersProperty {
        /**
         * The column delimiter.
         *
         * For example, in a CSV format, a comma (",") is the typical column delimiter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters-recordcolumndelimiter
         */
        readonly recordColumnDelimiter: string;
        /**
         * The row delimiter.
         *
         * For example, in a CSV format, *'\n'* is the typical row delimiter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-csvmappingparameters-recordrowdelimiter
         */
        readonly recordRowDelimiter: string;
    }
    /**
     * For an SQL-based Amazon Kinesis Data Analytics application, identifies the Amazon S3 bucket and object that contains the reference data.
     *
     * A Kinesis Data Analytics application loads reference data only once. If the data changes, you call the [UpdateApplication](https://docs.aws.amazon.com/managed-flink/latest/apiv2/API_UpdateApplication.html) operation to trigger reloading of data into your application.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-s3referencedatasource.html
     */
    interface S3ReferenceDataSourceProperty {
        /**
         * The Amazon Resource Name (ARN) of the S3 bucket.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-s3referencedatasource.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-s3referencedatasource-bucketarn
         */
        readonly bucketArn: string;
        /**
         * The object key name containing the reference data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-kinesisanalyticsv2-applicationreferencedatasource-s3referencedatasource.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-s3referencedatasource-filekey
         */
        readonly fileKey: string;
    }
}
/**
 * Properties for defining a `CfnApplicationReferenceDataSource`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationreferencedatasource.html
 */
export interface CfnApplicationReferenceDataSourceV2Props {
    /**
     * The name of the application.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationreferencedatasource.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-applicationname
     */
    readonly applicationName: string;
    /**
     * For a SQL-based Kinesis Data Analytics application, describes the reference data source by providing the source information (Amazon S3 bucket name and object key name), the resulting in-application table name that is created, and the necessary schema to map the data elements in the Amazon S3 object to the in-application table.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-kinesisanalyticsv2-applicationreferencedatasource.html#cfn-kinesisanalyticsv2-applicationreferencedatasource-referencedatasource
     */
    readonly referenceDataSource: cdk.IResolvable | CfnApplicationReferenceDataSourceV2.ReferenceDataSourceProperty;
}
