import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * Creates a new capacity provider.
 *
 * Capacity providers are associated with an Amazon ECS cluster and are used in capacity provider strategies to facilitate cluster auto scaling.
 *
 * Only capacity providers that use an Auto Scaling group can be created. Amazon ECS tasks on AWS Fargate use the `FARGATE` and `FARGATE_SPOT` capacity providers. These providers are available to all accounts in the AWS Regions that AWS Fargate supports.
 *
 * @cloudformationResource AWS::ECS::CapacityProvider
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-capacityprovider.html
 */
export declare class CfnCapacityProvider extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnCapacityProvider from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnCapacityProvider;
    /**
     * The Auto Scaling group settings for the capacity provider.
     */
    autoScalingGroupProvider?: CfnCapacityProvider.AutoScalingGroupProviderProperty | cdk.IResolvable;
    /**
     * The name of the capacity provider.
     */
    name?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The metadata that you apply to the capacity provider to help you categorize and organize it.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnCapacityProviderProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnCapacityProvider {
    /**
     * The details of the Auto Scaling group for the capacity provider.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-autoscalinggroupprovider.html
     */
    interface AutoScalingGroupProviderProperty {
        /**
         * The Amazon Resource Name (ARN) that identifies the Auto Scaling group, or the Auto Scaling group name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-autoscalinggroupprovider.html#cfn-ecs-capacityprovider-autoscalinggroupprovider-autoscalinggrouparn
         */
        readonly autoScalingGroupArn: string;
        /**
         * The managed draining option for the Auto Scaling group capacity provider.
         *
         * When you enable this, Amazon ECS manages and gracefully drains the EC2 container instances that are in the Auto Scaling group capacity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-autoscalinggroupprovider.html#cfn-ecs-capacityprovider-autoscalinggroupprovider-manageddraining
         */
        readonly managedDraining?: string;
        /**
         * The managed scaling settings for the Auto Scaling group capacity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-autoscalinggroupprovider.html#cfn-ecs-capacityprovider-autoscalinggroupprovider-managedscaling
         */
        readonly managedScaling?: cdk.IResolvable | CfnCapacityProvider.ManagedScalingProperty;
        /**
         * The managed termination protection setting to use for the Auto Scaling group capacity provider.
         *
         * This determines whether the Auto Scaling group has managed termination protection. The default is off.
         *
         * > When using managed termination protection, managed scaling must also be used otherwise managed termination protection doesn't work.
         *
         * When managed termination protection is on, Amazon ECS prevents the Amazon EC2 instances in an Auto Scaling group that contain tasks from being terminated during a scale-in action. The Auto Scaling group and each instance in the Auto Scaling group must have instance protection from scale-in actions on as well. For more information, see [Instance Protection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection) in the *AWS Auto Scaling User Guide* .
         *
         * When managed termination protection is off, your Amazon EC2 instances aren't protected from termination when the Auto Scaling group scales in.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-autoscalinggroupprovider.html#cfn-ecs-capacityprovider-autoscalinggroupprovider-managedterminationprotection
         */
        readonly managedTerminationProtection?: string;
    }
    /**
     * The managed scaling settings for the Auto Scaling group capacity provider.
     *
     * When managed scaling is turned on, Amazon ECS manages the scale-in and scale-out actions of the Auto Scaling group. Amazon ECS manages a target tracking scaling policy using an Amazon ECS managed CloudWatch metric with the specified `targetCapacity` value as the target value for the metric. For more information, see [Using managed scaling](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html#asg-capacity-providers-managed-scaling) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * If managed scaling is off, the user must manage the scaling of the Auto Scaling group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-managedscaling.html
     */
    interface ManagedScalingProperty {
        /**
         * The period of time, in seconds, after a newly launched Amazon EC2 instance can contribute to CloudWatch metrics for Auto Scaling group.
         *
         * If this parameter is omitted, the default value of `300` seconds is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-managedscaling.html#cfn-ecs-capacityprovider-managedscaling-instancewarmupperiod
         */
        readonly instanceWarmupPeriod?: number;
        /**
         * The maximum number of Amazon EC2 instances that Amazon ECS will scale out at one time.
         *
         * If this parameter is omitted, the default value of `10000` is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-managedscaling.html#cfn-ecs-capacityprovider-managedscaling-maximumscalingstepsize
         */
        readonly maximumScalingStepSize?: number;
        /**
         * The minimum number of Amazon EC2 instances that Amazon ECS will scale out at one time.
         *
         * The scale in process is not affected by this parameter If this parameter is omitted, the default value of `1` is used.
         *
         * When additional capacity is required, Amazon ECS will scale up the minimum scaling step size even if the actual demand is less than the minimum scaling step size.
         *
         * If you use a capacity provider with an Auto Scaling group configured with more than one Amazon EC2 instance type or Availability Zone, Amazon ECS will scale up by the exact minimum scaling step size value and will ignore both the maximum scaling step size as well as the capacity demand.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-managedscaling.html#cfn-ecs-capacityprovider-managedscaling-minimumscalingstepsize
         */
        readonly minimumScalingStepSize?: number;
        /**
         * Determines whether to use managed scaling for the capacity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-managedscaling.html#cfn-ecs-capacityprovider-managedscaling-status
         */
        readonly status?: string;
        /**
         * The target capacity utilization as a percentage for the capacity provider.
         *
         * The specified value must be greater than `0` and less than or equal to `100` . For example, if you want the capacity provider to maintain 10% spare capacity, then that means the utilization is 90%, so use a `targetCapacity` of `90` . The default value of `100` percent results in the Amazon EC2 instances in your Auto Scaling group being completely used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-capacityprovider-managedscaling.html#cfn-ecs-capacityprovider-managedscaling-targetcapacity
         */
        readonly targetCapacity?: number;
    }
}
/**
 * Properties for defining a `CfnCapacityProvider`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-capacityprovider.html
 */
export interface CfnCapacityProviderProps {
    /**
     * The Auto Scaling group settings for the capacity provider.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-capacityprovider.html#cfn-ecs-capacityprovider-autoscalinggroupprovider
     */
    readonly autoScalingGroupProvider?: CfnCapacityProvider.AutoScalingGroupProviderProperty | cdk.IResolvable;
    /**
     * The name of the capacity provider.
     *
     * If a name is specified, it cannot start with `aws` , `ecs` , or `fargate` . If no name is specified, a default name in the `CFNStackName-CFNResourceName-RandomString` format is used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-capacityprovider.html#cfn-ecs-capacityprovider-name
     */
    readonly name?: string;
    /**
     * The metadata that you apply to the capacity provider to help you categorize and organize it.
     *
     * Each tag consists of a key and an optional value. You define both.
     *
     * The following basic restrictions apply to tags:
     *
     * - Maximum number of tags per resource - 50
     * - For each resource, each tag key must be unique, and each tag key can have only one value.
     * - Maximum key length - 128 Unicode characters in UTF-8
     * - Maximum value length - 256 Unicode characters in UTF-8
     * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
     * - Tag keys and values are case-sensitive.
     * - Do not use `aws:` , `AWS:` , or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-capacityprovider.html#cfn-ecs-capacityprovider-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::ECS::Cluster` resource creates an Amazon Elastic Container Service (Amazon ECS) cluster.
 *
 * @cloudformationResource AWS::ECS::Cluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html
 */
export declare class CfnCluster extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
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
     * The Amazon Resource Name (ARN) of the Amazon ECS cluster, such as `arn:aws:ecs:us-east-2:123456789012:cluster/MyECSCluster` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The short name of one or more capacity providers to associate with the cluster.
     */
    capacityProviders?: Array<string>;
    /**
     * A user-generated string that you use to identify your cluster.
     */
    clusterName?: string;
    /**
     * The settings to use when creating a cluster.
     */
    clusterSettings?: Array<CfnCluster.ClusterSettingsProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The execute command and managed storage configuration for the cluster.
     */
    configuration?: CfnCluster.ClusterConfigurationProperty | cdk.IResolvable;
    /**
     * The default capacity provider strategy for the cluster.
     */
    defaultCapacityProviderStrategy?: Array<CfnCluster.CapacityProviderStrategyItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Use this parameter to set a default Service Connect namespace.
     */
    serviceConnectDefaults?: cdk.IResolvable | CfnCluster.ServiceConnectDefaultsProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The metadata that you apply to the cluster to help you categorize and organize them.
     */
    tagsRaw?: Array<cdk.CfnTag>;
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
     * The settings to use when creating a cluster.
     *
     * This parameter is used to turn on CloudWatch Container Insights with enhanced observability or CloudWatch Container Insights for a cluster.
     *
     * Container Insights with enhanced observability provides all the Container Insights metrics, plus additional task and container metrics. This version supports enhanced observability for Amazon ECS clusters using the Amazon EC2 and Fargate launch types. After you configure Container Insights with enhanced observability on Amazon ECS, Container Insights auto-collects detailed infrastructure telemetry from the cluster level down to the container level in your environment and displays these critical performance data in curated dashboards removing the heavy lifting in observability set-up.
     *
     * For more information, see [Monitor Amazon ECS containers using Container Insights with enhanced observability](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-clustersettings.html
     */
    interface ClusterSettingsProperty {
        /**
         * The name of the cluster setting.
         *
         * The value is `containerInsights` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-clustersettings.html#cfn-ecs-cluster-clustersettings-name
         */
        readonly name?: string;
        /**
         * The value to set for the cluster setting. The supported values are `enhanced` , `enabled` , and `disabled` .
         *
         * To use Container Insights with enhanced observability, set the `containerInsights` account setting to `enhanced` .
         *
         * To use Container Insights, set the `containerInsights` account setting to `enabled` .
         *
         * If a cluster value is specified, it will override the `containerInsights` value set with [PutAccountSetting](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html) or [PutAccountSettingDefault](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-clustersettings.html#cfn-ecs-cluster-clustersettings-value
         */
        readonly value?: string;
    }
    /**
     * The `CapacityProviderStrategyItem` property specifies the details of the default capacity provider strategy for the cluster.
     *
     * When services or tasks are run in the cluster with no launch type or capacity provider strategy specified, the default capacity provider strategy is used.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-capacityproviderstrategyitem.html
     */
    interface CapacityProviderStrategyItemProperty {
        /**
         * The *base* value designates how many tasks, at a minimum, to run on the specified capacity provider.
         *
         * Only one capacity provider in a capacity provider strategy can have a *base* defined. If no value is specified, the default value of `0` is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-capacityproviderstrategyitem.html#cfn-ecs-cluster-capacityproviderstrategyitem-base
         */
        readonly base?: number;
        /**
         * The short name of the capacity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-capacityproviderstrategyitem.html#cfn-ecs-cluster-capacityproviderstrategyitem-capacityprovider
         */
        readonly capacityProvider?: string;
        /**
         * The *weight* value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider.
         *
         * The `weight` value is taken into consideration after the `base` value, if defined, is satisfied.
         *
         * If no `weight` value is specified, the default value of `0` is used. When multiple capacity providers are specified within a capacity provider strategy, at least one of the capacity providers must have a weight value greater than zero and any capacity providers with a weight of `0` can't be used to place tasks. If you specify multiple capacity providers in a strategy that all have a weight of `0` , any `RunTask` or `CreateService` actions using the capacity provider strategy will fail.
         *
         * An example scenario for using weights is defining a strategy that contains two capacity providers and both have a weight of `1` , then when the `base` is satisfied, the tasks will be split evenly across the two capacity providers. Using that same logic, if you specify a weight of `1` for *capacityProviderA* and a weight of `4` for *capacityProviderB* , then for every one task that's run using *capacityProviderA* , four tasks would use *capacityProviderB* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-capacityproviderstrategyitem.html#cfn-ecs-cluster-capacityproviderstrategyitem-weight
         */
        readonly weight?: number;
    }
    /**
     * The execute command and managed storage configuration for the cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-clusterconfiguration.html
     */
    interface ClusterConfigurationProperty {
        /**
         * The details of the execute command configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-clusterconfiguration.html#cfn-ecs-cluster-clusterconfiguration-executecommandconfiguration
         */
        readonly executeCommandConfiguration?: CfnCluster.ExecuteCommandConfigurationProperty | cdk.IResolvable;
        /**
         * The details of the managed storage configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-clusterconfiguration.html#cfn-ecs-cluster-clusterconfiguration-managedstorageconfiguration
         */
        readonly managedStorageConfiguration?: cdk.IResolvable | CfnCluster.ManagedStorageConfigurationProperty;
    }
    /**
     * The details of the execute command configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-executecommandconfiguration.html
     */
    interface ExecuteCommandConfigurationProperty {
        /**
         * Specify an AWS Key Management Service key ID to encrypt the data between the local client and the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-executecommandconfiguration.html#cfn-ecs-cluster-executecommandconfiguration-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * The log configuration for the results of the execute command actions.
         *
         * The logs can be sent to CloudWatch Logs or an Amazon S3 bucket. When `logging=OVERRIDE` is specified, a `logConfiguration` must be provided.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-executecommandconfiguration.html#cfn-ecs-cluster-executecommandconfiguration-logconfiguration
         */
        readonly logConfiguration?: CfnCluster.ExecuteCommandLogConfigurationProperty | cdk.IResolvable;
        /**
         * The log setting to use for redirecting logs for your execute command results. The following log settings are available.
         *
         * - `NONE` : The execute command session is not logged.
         * - `DEFAULT` : The `awslogs` configuration in the task definition is used. If no logging parameter is specified, it defaults to this value. If no `awslogs` log driver is configured in the task definition, the output won't be logged.
         * - `OVERRIDE` : Specify the logging details as a part of `logConfiguration` . If the `OVERRIDE` logging option is specified, the `logConfiguration` is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-executecommandconfiguration.html#cfn-ecs-cluster-executecommandconfiguration-logging
         */
        readonly logging?: string;
    }
    /**
     * The log configuration for the results of the execute command actions.
     *
     * The logs can be sent to CloudWatch Logs or an Amazon S3 bucket.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-executecommandlogconfiguration.html
     */
    interface ExecuteCommandLogConfigurationProperty {
        /**
         * Determines whether to use encryption on the CloudWatch logs.
         *
         * If not specified, encryption will be off.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-executecommandlogconfiguration.html#cfn-ecs-cluster-executecommandlogconfiguration-cloudwatchencryptionenabled
         */
        readonly cloudWatchEncryptionEnabled?: boolean | cdk.IResolvable;
        /**
         * The name of the CloudWatch log group to send logs to.
         *
         * > The CloudWatch log group must already be created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-executecommandlogconfiguration.html#cfn-ecs-cluster-executecommandlogconfiguration-cloudwatchloggroupname
         */
        readonly cloudWatchLogGroupName?: string;
        /**
         * The name of the S3 bucket to send logs to.
         *
         * > The S3 bucket must already be created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-executecommandlogconfiguration.html#cfn-ecs-cluster-executecommandlogconfiguration-s3bucketname
         */
        readonly s3BucketName?: string;
        /**
         * Determines whether to use encryption on the S3 logs.
         *
         * If not specified, encryption is not used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-executecommandlogconfiguration.html#cfn-ecs-cluster-executecommandlogconfiguration-s3encryptionenabled
         */
        readonly s3EncryptionEnabled?: boolean | cdk.IResolvable;
        /**
         * An optional folder in the S3 bucket to place logs in.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-executecommandlogconfiguration.html#cfn-ecs-cluster-executecommandlogconfiguration-s3keyprefix
         */
        readonly s3KeyPrefix?: string;
    }
    /**
     * The managed storage configuration for the cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-managedstorageconfiguration.html
     */
    interface ManagedStorageConfigurationProperty {
        /**
         * Specify the AWS Key Management Service key ID for the Fargate ephemeral storage.
         *
         * The key must be a single Region key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-managedstorageconfiguration.html#cfn-ecs-cluster-managedstorageconfiguration-fargateephemeralstoragekmskeyid
         */
        readonly fargateEphemeralStorageKmsKeyId?: string;
        /**
         * Specify a AWS Key Management Service key ID to encrypt the managed storage.
         *
         * The key must be a single Region key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-managedstorageconfiguration.html#cfn-ecs-cluster-managedstorageconfiguration-kmskeyid
         */
        readonly kmsKeyId?: string;
    }
    /**
     * Use this parameter to set a default Service Connect namespace.
     *
     * After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the `enabled` parameter to `true` in the `ServiceConnectConfiguration` . You can set the namespace of each service individually in the `ServiceConnectConfiguration` to override this default parameter.
     *
     * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-serviceconnectdefaults.html
     */
    interface ServiceConnectDefaultsProperty {
        /**
         * The namespace name or full Amazon Resource Name (ARN) of the AWS Cloud Map namespace that's used when you create a service and don't specify a Service Connect configuration.
         *
         * The namespace name can include up to 1024 characters. The name is case-sensitive. The name can't include greater than (>), less than (<), double quotation marks ("), or slash (/).
         *
         * If you enter an existing namespace name or ARN, then that namespace will be used. Any namespace type is supported. The namespace must be in this account and this AWS Region.
         *
         * If you enter a new name, a AWS Cloud Map namespace will be created. Amazon ECS creates a AWS Cloud Map namespace with the "API calls" method of instance discovery only. This instance discovery method is the "HTTP" namespace type in the AWS Command Line Interface . Other types of instance discovery aren't used by Service Connect.
         *
         * If you update the cluster with an empty string `""` for the namespace name, the cluster configuration for Service Connect is removed. Note that the namespace will remain in AWS Cloud Map and must be deleted separately.
         *
         * For more information about AWS Cloud Map , see [Working with Services](https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html) in the *AWS Cloud Map Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-cluster-serviceconnectdefaults.html#cfn-ecs-cluster-serviceconnectdefaults-namespace
         */
        readonly namespace?: string;
    }
}
/**
 * Properties for defining a `CfnCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html
 */
export interface CfnClusterProps {
    /**
     * The short name of one or more capacity providers to associate with the cluster.
     *
     * A capacity provider must be associated with a cluster before it can be included as part of the default capacity provider strategy of the cluster or used in a capacity provider strategy when calling the [CreateService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html) or [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) actions.
     *
     * If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must be created but not associated with another cluster. New Auto Scaling group capacity providers can be created with the [CreateCapacityProvider](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProvider.html) API operation.
     *
     * To use a AWS Fargate capacity provider, specify either the `FARGATE` or `FARGATE_SPOT` capacity providers. The AWS Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used.
     *
     * The [PutCapacityProvider](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutCapacityProvider.html) API operation is used to update the list of available capacity providers for a cluster after the cluster is created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html#cfn-ecs-cluster-capacityproviders
     */
    readonly capacityProviders?: Array<string>;
    /**
     * A user-generated string that you use to identify your cluster.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique physical ID for the name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html#cfn-ecs-cluster-clustername
     */
    readonly clusterName?: string;
    /**
     * The settings to use when creating a cluster.
     *
     * This parameter is used to turn on CloudWatch Container Insights with enhanced observability or CloudWatch Container Insights for a cluster.
     *
     * Container Insights with enhanced observability provides all the Container Insights metrics, plus additional task and container metrics. This version supports enhanced observability for Amazon ECS clusters using the Amazon EC2 and Fargate launch types. After you configure Container Insights with enhanced observability on Amazon ECS, Container Insights auto-collects detailed infrastructure telemetry from the cluster level down to the container level in your environment and displays these critical performance data in curated dashboards removing the heavy lifting in observability set-up.
     *
     * For more information, see [Monitor Amazon ECS containers using Container Insights with enhanced observability](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html#cfn-ecs-cluster-clustersettings
     */
    readonly clusterSettings?: Array<CfnCluster.ClusterSettingsProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The execute command and managed storage configuration for the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html#cfn-ecs-cluster-configuration
     */
    readonly configuration?: CfnCluster.ClusterConfigurationProperty | cdk.IResolvable;
    /**
     * The default capacity provider strategy for the cluster.
     *
     * When services or tasks are run in the cluster with no launch type or capacity provider strategy specified, the default capacity provider strategy is used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html#cfn-ecs-cluster-defaultcapacityproviderstrategy
     */
    readonly defaultCapacityProviderStrategy?: Array<CfnCluster.CapacityProviderStrategyItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Use this parameter to set a default Service Connect namespace.
     *
     * After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the `enabled` parameter to `true` in the `ServiceConnectConfiguration` . You can set the namespace of each service individually in the `ServiceConnectConfiguration` to override this default parameter.
     *
     * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html#cfn-ecs-cluster-serviceconnectdefaults
     */
    readonly serviceConnectDefaults?: cdk.IResolvable | CfnCluster.ServiceConnectDefaultsProperty;
    /**
     * The metadata that you apply to the cluster to help you categorize and organize them.
     *
     * Each tag consists of a key and an optional value. You define both.
     *
     * The following basic restrictions apply to tags:
     *
     * - Maximum number of tags per resource - 50
     * - For each resource, each tag key must be unique, and each tag key can have only one value.
     * - Maximum key length - 128 Unicode characters in UTF-8
     * - Maximum value length - 256 Unicode characters in UTF-8
     * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
     * - Tag keys and values are case-sensitive.
     * - Do not use `aws:` , `AWS:` , or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-cluster.html#cfn-ecs-cluster-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::ECS::ClusterCapacityProviderAssociations` resource associates one or more capacity providers and a default capacity provider strategy with a cluster.
 *
 * @cloudformationResource AWS::ECS::ClusterCapacityProviderAssociations
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociations.html
 */
export declare class CfnClusterCapacityProviderAssociations extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnClusterCapacityProviderAssociations from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnClusterCapacityProviderAssociations;
    /**
     * The capacity providers to associate with the cluster.
     */
    capacityProviders: Array<string>;
    /**
     * The cluster the capacity provider association is the target of.
     */
    cluster: string;
    /**
     * The default capacity provider strategy to associate with the cluster.
     */
    defaultCapacityProviderStrategy: Array<CfnClusterCapacityProviderAssociations.CapacityProviderStrategyProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnClusterCapacityProviderAssociationsProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnClusterCapacityProviderAssociations {
    /**
     * The `CapacityProviderStrategy` property specifies the details of the default capacity provider strategy for the cluster.
     *
     * When services or tasks are run in the cluster with no launch type or capacity provider strategy specified, the default capacity provider strategy is used.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-clustercapacityproviderassociations-capacityproviderstrategy.html
     */
    interface CapacityProviderStrategyProperty {
        /**
         * The *base* value designates how many tasks, at a minimum, to run on the specified capacity provider.
         *
         * Only one capacity provider in a capacity provider strategy can have a *base* defined. If no value is specified, the default value of `0` is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-clustercapacityproviderassociations-capacityproviderstrategy.html#cfn-ecs-clustercapacityproviderassociations-capacityproviderstrategy-base
         */
        readonly base?: number;
        /**
         * The short name of the capacity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-clustercapacityproviderassociations-capacityproviderstrategy.html#cfn-ecs-clustercapacityproviderassociations-capacityproviderstrategy-capacityprovider
         */
        readonly capacityProvider: string;
        /**
         * The *weight* value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider.
         *
         * The `weight` value is taken into consideration after the `base` value, if defined, is satisfied.
         *
         * If no `weight` value is specified, the default value of `0` is used. When multiple capacity providers are specified within a capacity provider strategy, at least one of the capacity providers must have a weight value greater than zero and any capacity providers with a weight of `0` can't be used to place tasks. If you specify multiple capacity providers in a strategy that all have a weight of `0` , any `RunTask` or `CreateService` actions using the capacity provider strategy will fail.
         *
         * An example scenario for using weights is defining a strategy that contains two capacity providers and both have a weight of `1` , then when the `base` is satisfied, the tasks will be split evenly across the two capacity providers. Using that same logic, if you specify a weight of `1` for *capacityProviderA* and a weight of `4` for *capacityProviderB* , then for every one task that's run using *capacityProviderA* , four tasks would use *capacityProviderB* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-clustercapacityproviderassociations-capacityproviderstrategy.html#cfn-ecs-clustercapacityproviderassociations-capacityproviderstrategy-weight
         */
        readonly weight?: number;
    }
}
/**
 * Properties for defining a `CfnClusterCapacityProviderAssociations`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociations.html
 */
export interface CfnClusterCapacityProviderAssociationsProps {
    /**
     * The capacity providers to associate with the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociations.html#cfn-ecs-clustercapacityproviderassociations-capacityproviders
     */
    readonly capacityProviders: Array<string>;
    /**
     * The cluster the capacity provider association is the target of.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociations.html#cfn-ecs-clustercapacityproviderassociations-cluster
     */
    readonly cluster: string;
    /**
     * The default capacity provider strategy to associate with the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-clustercapacityproviderassociations.html#cfn-ecs-clustercapacityproviderassociations-defaultcapacityproviderstrategy
     */
    readonly defaultCapacityProviderStrategy: Array<CfnClusterCapacityProviderAssociations.CapacityProviderStrategyProperty | cdk.IResolvable> | cdk.IResolvable;
}
/**
 * Modifies which task set in a service is the primary task set.
 *
 * Any parameters that are updated on the primary task set in a service will transition to the service. This is used when a service uses the `EXTERNAL` deployment controller type. For more information, see [Amazon ECS Deployment Types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html) in the *Amazon Elastic Container Service Developer Guide* .
 *
 * @cloudformationResource AWS::ECS::PrimaryTaskSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html
 */
export declare class CfnPrimaryTaskSet extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnPrimaryTaskSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnPrimaryTaskSet;
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task set exists in.
     */
    cluster: string;
    /**
     * The short name or full Amazon Resource Name (ARN) of the service that the task set exists in.
     */
    service: string;
    /**
     * The short name or full Amazon Resource Name (ARN) of the task set to set as the primary task set in the deployment.
     */
    taskSetId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnPrimaryTaskSetProps);
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
 * Properties for defining a `CfnPrimaryTaskSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html
 */
export interface CfnPrimaryTaskSetProps {
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service that the task set exists in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html#cfn-ecs-primarytaskset-cluster
     */
    readonly cluster: string;
    /**
     * The short name or full Amazon Resource Name (ARN) of the service that the task set exists in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html#cfn-ecs-primarytaskset-service
     */
    readonly service: string;
    /**
     * The short name or full Amazon Resource Name (ARN) of the task set to set as the primary task set in the deployment.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-primarytaskset.html#cfn-ecs-primarytaskset-tasksetid
     */
    readonly taskSetId: string;
}
/**
 * The `AWS::ECS::Service` resource creates an Amazon Elastic Container Service (Amazon ECS) service that runs and maintains the requested number of tasks and associated load balancers.
 *
 * > The stack update fails if you change any properties that require replacement and at least one Amazon ECS Service Connect `ServiceConnectConfiguration` property is configured. This is because AWS CloudFormation creates the replacement service first, but each `ServiceConnectService` must have a name that is unique in the namespace. > Starting April 15, 2023, AWS ; will not onboard new customers to Amazon Elastic Inference (EI), and will help current customers migrate their workloads to options that offer better price and performance. After April 15, 2023, new customers will not be able to launch instances with Amazon EI accelerators in Amazon SageMaker, Amazon ECS , or Amazon EC2 . However, customers who have used Amazon EI at least once during the past 30-day period are considered current customers and will be able to continue using the service.
 *
 * @cloudformationResource AWS::ECS::Service
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html
 */
export declare class CfnService extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnService from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnService;
    /**
     * The name of the Amazon ECS service, such as `sample-webapp` .
     *
     * @cloudformationAttribute Name
     */
    readonly attrName: string;
    /**
     * Not currently supported in AWS CloudFormation .
     *
     * @cloudformationAttribute ServiceArn
     */
    readonly attrServiceArn: string;
    /**
     * Indicates whether to use Availability Zone rebalancing for the service.
     */
    availabilityZoneRebalancing?: string;
    /**
     * The capacity provider strategy to use for the service.
     */
    capacityProviderStrategy?: Array<CfnService.CapacityProviderStrategyItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that you run your service on.
     */
    cluster?: string;
    /**
     * Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
     */
    deploymentConfiguration?: CfnService.DeploymentConfigurationProperty | cdk.IResolvable;
    /**
     * The deployment controller to use for the service.
     */
    deploymentController?: CfnService.DeploymentControllerProperty | cdk.IResolvable;
    /**
     * The number of instantiations of the specified task definition to place and keep running in your service.
     */
    desiredCount?: number;
    /**
     * Specifies whether to turn on Amazon ECS managed tags for the tasks within the service.
     */
    enableEcsManagedTags?: boolean | cdk.IResolvable;
    /**
     * Determines whether the execute command functionality is turned on for the service.
     */
    enableExecuteCommand?: boolean | cdk.IResolvable;
    /**
     * The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing, VPC Lattice, and container health checks after a task has first started.
     */
    healthCheckGracePeriodSeconds?: number;
    /**
     * The launch type on which to run your service.
     */
    launchType?: string;
    /**
     * A list of load balancer objects to associate with the service.
     */
    loadBalancers?: Array<cdk.IResolvable | CfnService.LoadBalancerProperty> | cdk.IResolvable;
    /**
     * The network configuration for the service.
     */
    networkConfiguration?: cdk.IResolvable | CfnService.NetworkConfigurationProperty;
    /**
     * An array of placement constraint objects to use for tasks in your service.
     */
    placementConstraints?: Array<cdk.IResolvable | CfnService.PlacementConstraintProperty> | cdk.IResolvable;
    /**
     * The placement strategy objects to use for tasks in your service.
     */
    placementStrategies?: Array<cdk.IResolvable | CfnService.PlacementStrategyProperty> | cdk.IResolvable;
    /**
     * The platform version that your tasks in the service are running on.
     */
    platformVersion?: string;
    /**
     * Specifies whether to propagate the tags from the task definition to the task.
     */
    propagateTags?: string;
    /**
     * The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf.
     */
    role?: string;
    /**
     * The scheduling strategy to use for the service. For more information, see [Services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html) .
     */
    schedulingStrategy?: string;
    /**
     * The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.
     */
    serviceConnectConfiguration?: cdk.IResolvable | CfnService.ServiceConnectConfigurationProperty;
    /**
     * The name of your service.
     */
    serviceName?: string;
    /**
     * The details of the service discovery registry to associate with this service. For more information, see [Service discovery](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html) .
     */
    serviceRegistries?: Array<cdk.IResolvable | CfnService.ServiceRegistryProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The metadata that you apply to the service to help you categorize and organize them.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The `family` and `revision` ( `family:revision` ) or full ARN of the task definition to run in your service.
     */
    taskDefinition?: string;
    /**
     * The configuration for a volume specified in the task definition as a volume that is configured at launch time.
     */
    volumeConfigurations?: Array<cdk.IResolvable | CfnService.ServiceVolumeConfigurationProperty> | cdk.IResolvable;
    /**
     * The VPC Lattice configuration for the service being created.
     */
    vpcLatticeConfigurations?: Array<cdk.IResolvable | CfnService.VpcLatticeConfigurationProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnServiceProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnService {
    /**
     * An object representing a constraint on task placement.
     *
     * For more information, see [Task placement constraints](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * > If you're using the Fargate launch type, task placement constraints aren't supported.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-placementconstraint.html
     */
    interface PlacementConstraintProperty {
        /**
         * A cluster query language expression to apply to the constraint.
         *
         * The expression can have a maximum length of 2000 characters. You can't specify an expression if the constraint type is `distinctInstance` . For more information, see [Cluster query language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-placementconstraint.html#cfn-ecs-service-placementconstraint-expression
         */
        readonly expression?: string;
        /**
         * The type of constraint.
         *
         * Use `distinctInstance` to ensure that each task in a particular group is running on a different container instance. Use `memberOf` to restrict the selection to a group of valid candidates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-placementconstraint.html#cfn-ecs-service-placementconstraint-type
         */
        readonly type: string;
    }
    /**
     * The `LoadBalancer` property specifies details on a load balancer that is used with a service.
     *
     * If the service is using the `CODE_DEPLOY` deployment controller, the service is required to use either an Application Load Balancer or Network Load Balancer. When you are creating an AWS CodeDeploy deployment group, you specify two target groups (referred to as a `targetGroupPair` ). Each target group binds to a separate task set in the deployment. The load balancer can also have up to two listeners, a required listener for production traffic and an optional listener that allows you to test new revisions of the service before routing production traffic to it.
     *
     * Services with tasks that use the `awsvpc` network mode (for example, those with the Fargate launch type) only support Application Load Balancers and Network Load Balancers. Classic Load Balancers are not supported. Also, when you create any target groups for these services, you must choose `ip` as the target type, not `instance` . Tasks that use the `awsvpc` network mode are associated with an elastic network interface, not an Amazon EC2 instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-loadbalancer.html
     */
    interface LoadBalancerProperty {
        /**
         * The name of the container (as it appears in a container definition) to associate with the load balancer.
         *
         * You need to specify the container name when configuring the target group for an Amazon ECS load balancer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-loadbalancer.html#cfn-ecs-service-loadbalancer-containername
         */
        readonly containerName?: string;
        /**
         * The port on the container to associate with the load balancer.
         *
         * This port must correspond to a `containerPort` in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they're launched on must allow ingress traffic on the `hostPort` of the port mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-loadbalancer.html#cfn-ecs-service-loadbalancer-containerport
         */
        readonly containerPort?: number;
        /**
         * The name of the load balancer to associate with the Amazon ECS service or task set.
         *
         * If you are using an Application Load Balancer or a Network Load Balancer the load balancer name parameter should be omitted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-loadbalancer.html#cfn-ecs-service-loadbalancer-loadbalancername
         */
        readonly loadBalancerName?: string;
        /**
         * The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set.
         *
         * A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer.
         *
         * For services using the `ECS` deployment controller, you can specify one or multiple target groups. For more information, see [Registering multiple target groups with a service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * For services using the `CODE_DEPLOY` deployment controller, you're required to define two target groups for the load balancer. For more information, see [Blue/green deployment with CodeDeploy](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * > If your service's task definition uses the `awsvpc` network mode, you must choose `ip` as the target type, not `instance` . Do this when creating your target groups because tasks that use the `awsvpc` network mode are associated with an elastic network interface, not an Amazon EC2 instance. This network mode is required for the Fargate launch type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-loadbalancer.html#cfn-ecs-service-loadbalancer-targetgrouparn
         */
        readonly targetGroupArn?: string;
    }
    /**
     * The Service Connect configuration of your Amazon ECS service.
     *
     * The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.
     *
     * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectconfiguration.html
     */
    interface ServiceConnectConfigurationProperty {
        /**
         * Specifies whether to use Service Connect with this service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectconfiguration.html#cfn-ecs-service-serviceconnectconfiguration-enabled
         */
        readonly enabled: boolean | cdk.IResolvable;
        /**
         * The log configuration for the container.
         *
         * This parameter maps to `LogConfig` in the docker container create command and the `--log-driver` option to docker run.
         *
         * By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition.
         *
         * Understand the following when specifying a log configuration for your containers.
         *
         * - Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.
         *
         * For tasks on AWS Fargate , the supported log drivers are `awslogs` , `splunk` , and `awsfirelens` .
         *
         * For tasks hosted on Amazon EC2 instances, the supported log drivers are `awslogs` , `fluentd` , `gelf` , `json-file` , `journald` , `syslog` , `splunk` , and `awsfirelens` .
         * - This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.
         * - For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the `ECS_AVAILABLE_LOGGING_DRIVERS` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Amazon ECS container agent configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide* .
         * - For tasks that are on AWS Fargate , because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectconfiguration.html#cfn-ecs-service-serviceconnectconfiguration-logconfiguration
         */
        readonly logConfiguration?: cdk.IResolvable | CfnService.LogConfigurationProperty;
        /**
         * The namespace name or full Amazon Resource Name (ARN) of the AWS Cloud Map namespace for use with Service Connect.
         *
         * The namespace must be in the same AWS Region as the Amazon ECS service and cluster. The type of namespace doesn't affect Service Connect. For more information about AWS Cloud Map , see [Working with Services](https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html) in the *AWS Cloud Map Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectconfiguration.html#cfn-ecs-service-serviceconnectconfiguration-namespace
         */
        readonly namespace?: string;
        /**
         * The list of Service Connect service objects.
         *
         * These are names and aliases (also known as endpoints) that are used by other Amazon ECS services to connect to this service.
         *
         * This field is not required for a "client" Amazon ECS service that's a member of a namespace only to connect to other services within the namespace. An example of this would be a frontend application that accepts incoming requests from either a load balancer that's attached to the service or by other means.
         *
         * An object selects a port from the task definition, assigns a name for the AWS Cloud Map service, and a list of aliases (endpoints) and ports for client applications to refer to this service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectconfiguration.html#cfn-ecs-service-serviceconnectconfiguration-services
         */
        readonly services?: Array<cdk.IResolvable | CfnService.ServiceConnectServiceProperty> | cdk.IResolvable;
    }
    /**
     * The Service Connect service object configuration.
     *
     * For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectservice.html
     */
    interface ServiceConnectServiceProperty {
        /**
         * The list of client aliases for this Service Connect service.
         *
         * You use these to assign names that can be used by client applications. The maximum number of client aliases that you can have in this list is 1.
         *
         * Each alias ("endpoint") is a fully-qualified name and port number that other Amazon ECS tasks ("clients") can use to connect to this service.
         *
         * Each name and port mapping must be unique within the namespace.
         *
         * For each `ServiceConnectService` , you must provide at least one `clientAlias` with one `port` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectservice.html#cfn-ecs-service-serviceconnectservice-clientaliases
         */
        readonly clientAliases?: Array<cdk.IResolvable | CfnService.ServiceConnectClientAliasProperty> | cdk.IResolvable;
        /**
         * The `discoveryName` is the name of the new AWS Cloud Map service that Amazon ECS creates for this Amazon ECS service.
         *
         * This must be unique within the AWS Cloud Map namespace. The name can contain up to 64 characters. The name can include lowercase letters, numbers, underscores (_), and hyphens (-). The name can't start with a hyphen.
         *
         * If the `discoveryName` isn't specified, the port mapping name from the task definition is used in `portName.namespace` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectservice.html#cfn-ecs-service-serviceconnectservice-discoveryname
         */
        readonly discoveryName?: string;
        /**
         * The port number for the Service Connect proxy to listen on.
         *
         * Use the value of this field to bypass the proxy for traffic on the port number specified in the named `portMapping` in the task definition of this application, and then use it in your VPC security groups to allow traffic into the proxy for this Amazon ECS service.
         *
         * In `awsvpc` mode and Fargate, the default value is the container port number. The container port number is in the `portMapping` in the task definition. In bridge mode, the default value is the ephemeral port of the Service Connect proxy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectservice.html#cfn-ecs-service-serviceconnectservice-ingressportoverride
         */
        readonly ingressPortOverride?: number;
        /**
         * The `portName` must match the name of one of the `portMappings` from all the containers in the task definition of this Amazon ECS service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectservice.html#cfn-ecs-service-serviceconnectservice-portname
         */
        readonly portName: string;
        /**
         * A reference to an object that represents the configured timeouts for Service Connect.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectservice.html#cfn-ecs-service-serviceconnectservice-timeout
         */
        readonly timeout?: cdk.IResolvable | CfnService.TimeoutConfigurationProperty;
        /**
         * A reference to an object that represents a Transport Layer Security (TLS) configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectservice.html#cfn-ecs-service-serviceconnectservice-tls
         */
        readonly tls?: cdk.IResolvable | CfnService.ServiceConnectTlsConfigurationProperty;
    }
    /**
     * Each alias ("endpoint") is a fully-qualified name and port number that other tasks ("clients") can use to connect to this service.
     *
     * Each name and port mapping must be unique within the namespace.
     *
     * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectclientalias.html
     */
    interface ServiceConnectClientAliasProperty {
        /**
         * The `dnsName` is the name that you use in the applications of client tasks to connect to this service.
         *
         * The name must be a valid DNS name but doesn't need to be fully-qualified. The name can include up to 127 characters. The name can include lowercase letters, numbers, underscores (_), hyphens (-), and periods (.). The name can't start with a hyphen.
         *
         * If this parameter isn't specified, the default value of `discoveryName.namespace` is used. If the `discoveryName` isn't specified, the port mapping name from the task definition is used in `portName.namespace` .
         *
         * To avoid changing your applications in client Amazon ECS services, set this to the same name that the client application uses by default. For example, a few common names are `database` , `db` , or the lowercase name of a database, such as `mysql` or `redis` . For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectclientalias.html#cfn-ecs-service-serviceconnectclientalias-dnsname
         */
        readonly dnsName?: string;
        /**
         * The listening port number for the Service Connect proxy.
         *
         * This port is available inside of all of the tasks within the same namespace.
         *
         * To avoid changing your applications in client Amazon ECS services, set this to the same port that the client application uses by default. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnectclientalias.html#cfn-ecs-service-serviceconnectclientalias-port
         */
        readonly port: number;
    }
    /**
     * An object that represents the timeout configurations for Service Connect.
     *
     * > If `idleTimeout` is set to a time that is less than `perRequestTimeout` , the connection will close when the `idleTimeout` is reached and not the `perRequestTimeout` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-timeoutconfiguration.html
     */
    interface TimeoutConfigurationProperty {
        /**
         * The amount of time in seconds a connection will stay active while idle.
         *
         * A value of `0` can be set to disable `idleTimeout` .
         *
         * The `idleTimeout` default for `HTTP` / `HTTP2` / `GRPC` is 5 minutes.
         *
         * The `idleTimeout` default for `TCP` is 1 hour.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-timeoutconfiguration.html#cfn-ecs-service-timeoutconfiguration-idletimeoutseconds
         */
        readonly idleTimeoutSeconds?: number;
        /**
         * The amount of time waiting for the upstream to respond with a complete response per request.
         *
         * A value of `0` can be set to disable `perRequestTimeout` . `perRequestTimeout` can only be set if Service Connect `appProtocol` isn't `TCP` . Only `idleTimeout` is allowed for `TCP` `appProtocol` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-timeoutconfiguration.html#cfn-ecs-service-timeoutconfiguration-perrequesttimeoutseconds
         */
        readonly perRequestTimeoutSeconds?: number;
    }
    /**
     * The key that encrypts and decrypts your resources for Service Connect TLS.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnecttlsconfiguration.html
     */
    interface ServiceConnectTlsConfigurationProperty {
        /**
         * The signer certificate authority.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnecttlsconfiguration.html#cfn-ecs-service-serviceconnecttlsconfiguration-issuercertificateauthority
         */
        readonly issuerCertificateAuthority: cdk.IResolvable | CfnService.ServiceConnectTlsCertificateAuthorityProperty;
        /**
         * The AWS Key Management Service key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnecttlsconfiguration.html#cfn-ecs-service-serviceconnecttlsconfiguration-kmskey
         */
        readonly kmsKey?: string;
        /**
         * The Amazon Resource Name (ARN) of the IAM role that's associated with the Service Connect TLS.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnecttlsconfiguration.html#cfn-ecs-service-serviceconnecttlsconfiguration-rolearn
         */
        readonly roleArn?: string;
    }
    /**
     * The certificate root authority that secures your service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnecttlscertificateauthority.html
     */
    interface ServiceConnectTlsCertificateAuthorityProperty {
        /**
         * The ARN of the AWS Private Certificate Authority certificate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceconnecttlscertificateauthority.html#cfn-ecs-service-serviceconnecttlscertificateauthority-awspcaauthorityarn
         */
        readonly awsPcaAuthorityArn?: string;
    }
    /**
     * The log configuration for the container.
     *
     * This parameter maps to `LogConfig` in the docker container create command and the `--log-driver` option to docker run.
     *
     * By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition.
     *
     * Understand the following when specifying a log configuration for your containers.
     *
     * - Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.
     *
     * For tasks on AWS Fargate , the supported log drivers are `awslogs` , `splunk` , and `awsfirelens` .
     *
     * For tasks hosted on Amazon EC2 instances, the supported log drivers are `awslogs` , `fluentd` , `gelf` , `json-file` , `journald` , `syslog` , `splunk` , and `awsfirelens` .
     * - This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.
     * - For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the `ECS_AVAILABLE_LOGGING_DRIVERS` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Amazon ECS container agent configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide* .
     * - For tasks that are on AWS Fargate , because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-logconfiguration.html
     */
    interface LogConfigurationProperty {
        /**
         * The log driver to use for the container.
         *
         * For tasks on AWS Fargate , the supported log drivers are `awslogs` , `splunk` , and `awsfirelens` .
         *
         * For tasks hosted on Amazon EC2 instances, the supported log drivers are `awslogs` , `fluentd` , `gelf` , `json-file` , `journald` , `syslog` , `splunk` , and `awsfirelens` .
         *
         * For more information about using the `awslogs` log driver, see [Send Amazon ECS logs to CloudWatch](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * For more information about using the `awsfirelens` log driver, see [Send Amazon ECS logs to an AWS service or AWS Partner](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html) .
         *
         * > If you have a custom driver that isn't listed, you can fork the Amazon ECS container agent project that's [available on GitHub](https://docs.aws.amazon.com/https://github.com/aws/amazon-ecs-agent) and customize it to work with that driver. We encourage you to submit pull requests for changes that you would like to have included. However, we don't currently provide support for running modified copies of this software.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-logconfiguration.html#cfn-ecs-service-logconfiguration-logdriver
         */
        readonly logDriver?: string;
        /**
         * The configuration options to send to the log driver.
         *
         * The options you can specify depend on the log driver. Some of the options you can specify when you use the `awslogs` log driver to route logs to Amazon CloudWatch include the following:
         *
         * - **awslogs-create-group** - Required: No
         *
         * Specify whether you want the log group to be created automatically. If this option isn't specified, it defaults to `false` .
         *
         * > Your IAM policy must include the `logs:CreateLogGroup` permission before you attempt to use `awslogs-create-group` .
         * - **awslogs-region** - Required: Yes
         *
         * Specify the AWS Region that the `awslogs` log driver is to send your Docker logs to. You can choose to send all of your logs from clusters in different Regions to a single region in CloudWatch Logs. This is so that they're all visible in one location. Otherwise, you can separate them by Region for more granularity. Make sure that the specified log group exists in the Region that you specify with this option.
         * - **awslogs-group** - Required: Yes
         *
         * Make sure to specify a log group that the `awslogs` log driver sends its log streams to.
         * - **awslogs-stream-prefix** - Required: Yes, when using the Fargate launch type.Optional for the EC2 launch type, required for the Fargate launch type.
         *
         * Use the `awslogs-stream-prefix` option to associate a log stream with the specified prefix, the container name, and the ID of the Amazon ECS task that the container belongs to. If you specify a prefix with this option, then the log stream takes the format `prefix-name/container-name/ecs-task-id` .
         *
         * If you don't specify a prefix with this option, then the log stream is named after the container ID that's assigned by the Docker daemon on the container instance. Because it's difficult to trace logs back to the container that sent them with just the Docker container ID (which is only available on the container instance), we recommend that you specify a prefix with this option.
         *
         * For Amazon ECS services, you can use the service name as the prefix. Doing so, you can trace log streams to the service that the container belongs to, the name of the container that sent them, and the ID of the task that the container belongs to.
         *
         * You must specify a stream-prefix for your logs to have your logs appear in the Log pane when using the Amazon ECS console.
         * - **awslogs-datetime-format** - Required: No
         *
         * This option defines a multiline start pattern in Python `strftime` format. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages.
         *
         * One example of a use case for using this format is for parsing output such as a stack dump, which might otherwise be logged in multiple entries. The correct pattern allows it to be captured in a single entry.
         *
         * For more information, see [awslogs-datetime-format](https://docs.aws.amazon.com/https://docs.docker.com/config/containers/logging/awslogs/#awslogs-datetime-format) .
         *
         * You cannot configure both the `awslogs-datetime-format` and `awslogs-multiline-pattern` options.
         *
         * > Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance.
         * - **awslogs-multiline-pattern** - Required: No
         *
         * This option defines a multiline start pattern that uses a regular expression. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages.
         *
         * For more information, see [awslogs-multiline-pattern](https://docs.aws.amazon.com/https://docs.docker.com/config/containers/logging/awslogs/#awslogs-multiline-pattern) .
         *
         * This option is ignored if `awslogs-datetime-format` is also configured.
         *
         * You cannot configure both the `awslogs-datetime-format` and `awslogs-multiline-pattern` options.
         *
         * > Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance.
         * - **mode** - Required: No
         *
         * Valid values: `non-blocking` | `blocking`
         *
         * This option defines the delivery mode of log messages from the container to CloudWatch Logs. The delivery mode you choose affects application availability when the flow of logs from container to CloudWatch is interrupted.
         *
         * If you use the `blocking` mode and the flow of logs to CloudWatch is interrupted, calls from container code to write to the `stdout` and `stderr` streams will block. The logging thread of the application will block as a result. This may cause the application to become unresponsive and lead to container healthcheck failure.
         *
         * If you use the `non-blocking` mode, the container's logs are instead stored in an in-memory intermediate buffer configured with the `max-buffer-size` option. This prevents the application from becoming unresponsive when logs cannot be sent to CloudWatch. We recommend using this mode if you want to ensure service availability and are okay with some log loss. For more information, see [Preventing log loss with non-blocking mode in the `awslogs` container log driver](https://docs.aws.amazon.com/containers/preventing-log-loss-with-non-blocking-mode-in-the-awslogs-container-log-driver/) .
         * - **max-buffer-size** - Required: No
         *
         * Default value: `1m`
         *
         * When `non-blocking` mode is used, the `max-buffer-size` log option controls the size of the buffer that's used for intermediate message storage. Make sure to specify an adequate buffer size based on your application. When the buffer fills up, further logs cannot be stored. Logs that cannot be stored are lost.
         *
         * To route logs using the `splunk` log router, you need to specify a `splunk-token` and a `splunk-url` .
         *
         * When you use the `awsfirelens` log router to route logs to an AWS Service or AWS Partner Network destination for log storage and analytics, you can set the `log-driver-buffer-limit` option to limit the number of events that are buffered in memory, before being sent to the log router container. It can help to resolve potential log loss issue because high throughput might result in memory running out for the buffer inside of Docker.
         *
         * Other options you can specify when using `awsfirelens` to route logs depend on the destination. When you export logs to Amazon Data Firehose, you can specify the AWS Region with `region` and a name for the log stream with `delivery_stream` .
         *
         * When you export logs to Amazon Kinesis Data Streams, you can specify an AWS Region with `region` and a data stream name with `stream` .
         *
         * When you export logs to Amazon OpenSearch Service, you can specify options like `Name` , `Host` (OpenSearch Service endpoint without protocol), `Port` , `Index` , `Type` , `Aws_auth` , `Aws_region` , `Suppress_Type_Name` , and `tls` . For more information, see [Under the hood: FireLens for Amazon ECS Tasks](https://docs.aws.amazon.com/containers/under-the-hood-firelens-for-amazon-ecs-tasks/) .
         *
         * When you export logs to Amazon S3, you can specify the bucket using the `bucket` option. You can also specify `region` , `total_file_size` , `upload_timeout` , and `use_put_object` as options.
         *
         * This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version --format '{{.Server.APIVersion}}'`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-logconfiguration.html#cfn-ecs-service-logconfiguration-options
         */
        readonly options?: cdk.IResolvable | Record<string, string>;
        /**
         * The secrets to pass to the log configuration.
         *
         * For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-logconfiguration.html#cfn-ecs-service-logconfiguration-secretoptions
         */
        readonly secretOptions?: Array<cdk.IResolvable | CfnService.SecretProperty> | cdk.IResolvable;
    }
    /**
     * An object representing the secret to expose to your container.
     *
     * Secrets can be exposed to a container in the following ways:
     *
     * - To inject sensitive data into your containers as environment variables, use the `secrets` container definition parameter.
     * - To reference sensitive information in the log configuration of a container, use the `secretOptions` container definition parameter.
     *
     * For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-secret.html
     */
    interface SecretProperty {
        /**
         * The name of the secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-secret.html#cfn-ecs-service-secret-name
         */
        readonly name: string;
        /**
         * The secret to expose to the container.
         *
         * The supported values are either the full ARN of the AWS Secrets Manager secret or the full ARN of the parameter in the SSM Parameter Store.
         *
         * For information about the require AWS Identity and Access Management permissions, see [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-secrets.html#secrets-iam) (for Secrets Manager) or [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-parameters.html) (for Systems Manager Parameter store) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * > If the SSM Parameter Store parameter exists in the same Region as the task you're launching, then you can use either the full ARN or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-secret.html#cfn-ecs-service-secret-valuefrom
         */
        readonly valueFrom: string;
    }
    /**
     * The task placement strategy for a task or service.
     *
     * For more information, see [Task placement strategies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-placementstrategy.html
     */
    interface PlacementStrategyProperty {
        /**
         * The field to apply the placement strategy against.
         *
         * For the `spread` placement strategy, valid values are `instanceId` (or `host` , which has the same effect), or any platform or custom attribute that's applied to a container instance, such as `attribute:ecs.availability-zone` . For the `binpack` placement strategy, valid values are `cpu` and `memory` . For the `random` placement strategy, this field is not used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-placementstrategy.html#cfn-ecs-service-placementstrategy-field
         */
        readonly field?: string;
        /**
         * The type of placement strategy.
         *
         * The `random` placement strategy randomly places tasks on available candidates. The `spread` placement strategy spreads placement across available candidates evenly based on the `field` parameter. The `binpack` strategy places tasks on available candidates that have the least available amount of the resource that's specified with the `field` parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory but still enough to run the task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-placementstrategy.html#cfn-ecs-service-placementstrategy-type
         */
        readonly type: string;
    }
    /**
     * The deployment controller to use for the service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentcontroller.html
     */
    interface DeploymentControllerProperty {
        /**
         * The deployment controller type to use. There are three deployment controller types available:.
         *
         * - **ECS** - The rolling update ( `ECS` ) deployment type involves replacing the current running version of the container with the latest version. The number of containers Amazon ECS adds or removes from the service during a rolling update is controlled by adjusting the minimum and maximum number of healthy tasks allowed during a service deployment, as specified in the [DeploymentConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeploymentConfiguration.html) .
         * - **CODE_DEPLOY** - The blue/green ( `CODE_DEPLOY` ) deployment type uses the blue/green deployment model powered by AWS CodeDeploy , which allows you to verify a new deployment of a service before sending production traffic to it.
         * - **EXTERNAL** - The external ( `EXTERNAL` ) deployment type enables you to use any third-party deployment controller for full control over the deployment process for an Amazon ECS service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentcontroller.html#cfn-ecs-service-deploymentcontroller-type
         */
        readonly type?: string;
    }
    /**
     * The details for the service registry.
     *
     * Each service may be associated with one service registry. Multiple service registries for each service are not supported.
     *
     * When you add, update, or remove the service registries configuration, Amazon ECS starts a new deployment. New tasks are registered and deregistered to the updated service registry configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceregistry.html
     */
    interface ServiceRegistryProperty {
        /**
         * The container name value to be used for your service discovery service.
         *
         * It's already specified in the task definition. If the task definition that your service task specifies uses the `bridge` or `host` network mode, you must specify a `containerName` and `containerPort` combination from the task definition. If the task definition that your service task specifies uses the `awsvpc` network mode and a type SRV DNS record is used, you must specify either a `containerName` and `containerPort` combination or a `port` value. However, you can't specify both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceregistry.html#cfn-ecs-service-serviceregistry-containername
         */
        readonly containerName?: string;
        /**
         * The port value to be used for your service discovery service.
         *
         * It's already specified in the task definition. If the task definition your service task specifies uses the `bridge` or `host` network mode, you must specify a `containerName` and `containerPort` combination from the task definition. If the task definition your service task specifies uses the `awsvpc` network mode and a type SRV DNS record is used, you must specify either a `containerName` and `containerPort` combination or a `port` value. However, you can't specify both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceregistry.html#cfn-ecs-service-serviceregistry-containerport
         */
        readonly containerPort?: number;
        /**
         * The port value used if your service discovery service specified an SRV record.
         *
         * This field might be used if both the `awsvpc` network mode and SRV records are used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceregistry.html#cfn-ecs-service-serviceregistry-port
         */
        readonly port?: number;
        /**
         * The Amazon Resource Name (ARN) of the service registry.
         *
         * The currently supported service registry is AWS Cloud Map . For more information, see [CreateService](https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-serviceregistry.html#cfn-ecs-service-serviceregistry-registryarn
         */
        readonly registryArn?: string;
    }
    /**
     * The details of a capacity provider strategy.
     *
     * A capacity provider strategy can be set when using the `RunTask` or `CreateService` APIs or as the default capacity provider strategy for a cluster with the `CreateCluster` API.
     *
     * Only capacity providers that are already associated with a cluster and have an `ACTIVE` or `UPDATING` status can be used in a capacity provider strategy. The `PutClusterCapacityProviders` API is used to associate a capacity provider with a cluster.
     *
     * If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New Auto Scaling group capacity providers can be created with the `CreateCapacityProvider` API operation.
     *
     * To use an AWS Fargate capacity provider, specify either the `FARGATE` or `FARGATE_SPOT` capacity providers. The AWS Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used in a capacity provider strategy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-capacityproviderstrategyitem.html
     */
    interface CapacityProviderStrategyItemProperty {
        /**
         * The *base* value designates how many tasks, at a minimum, to run on the specified capacity provider.
         *
         * Only one capacity provider in a capacity provider strategy can have a *base* defined. If no value is specified, the default value of `0` is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-capacityproviderstrategyitem.html#cfn-ecs-service-capacityproviderstrategyitem-base
         */
        readonly base?: number;
        /**
         * The short name of the capacity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-capacityproviderstrategyitem.html#cfn-ecs-service-capacityproviderstrategyitem-capacityprovider
         */
        readonly capacityProvider?: string;
        /**
         * The *weight* value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider.
         *
         * The `weight` value is taken into consideration after the `base` value, if defined, is satisfied.
         *
         * If no `weight` value is specified, the default value of `0` is used. When multiple capacity providers are specified within a capacity provider strategy, at least one of the capacity providers must have a weight value greater than zero and any capacity providers with a weight of `0` can't be used to place tasks. If you specify multiple capacity providers in a strategy that all have a weight of `0` , any `RunTask` or `CreateService` actions using the capacity provider strategy will fail.
         *
         * An example scenario for using weights is defining a strategy that contains two capacity providers and both have a weight of `1` , then when the `base` is satisfied, the tasks will be split evenly across the two capacity providers. Using that same logic, if you specify a weight of `1` for *capacityProviderA* and a weight of `4` for *capacityProviderB* , then for every one task that's run using *capacityProviderA* , four tasks would use *capacityProviderB* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-capacityproviderstrategyitem.html#cfn-ecs-service-capacityproviderstrategyitem-weight
         */
        readonly weight?: number;
    }
    /**
     * The network configuration for a task or service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-networkconfiguration.html
     */
    interface NetworkConfigurationProperty {
        /**
         * The VPC subnets and security groups that are associated with a task.
         *
         * > All specified subnets and security groups must be from the same VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-networkconfiguration.html#cfn-ecs-service-networkconfiguration-awsvpcconfiguration
         */
        readonly awsvpcConfiguration?: CfnService.AwsVpcConfigurationProperty | cdk.IResolvable;
    }
    /**
     * An object representing the networking details for a task or service.
     *
     * For example `awsVpcConfiguration={subnets=["subnet-12344321"],securityGroups=["sg-12344321"]}` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html
     */
    interface AwsVpcConfigurationProperty {
        /**
         * Whether the task's elastic network interface receives a public IP address.
         *
         * Consider the following when you set this value:
         *
         * - When you use `create-service` or `update-service` , the default is `DISABLED` .
         * - When the service `deploymentController` is `ECS` , the value must be `DISABLED` .
         * - When you use `create-service` or `update-service` , the default is `ENABLED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html#cfn-ecs-service-awsvpcconfiguration-assignpublicip
         */
        readonly assignPublicIp?: string;
        /**
         * The IDs of the security groups associated with the task or service.
         *
         * If you don't specify a security group, the default security group for the VPC is used. There's a limit of 5 security groups that can be specified.
         *
         * > All specified security groups must be from the same VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html#cfn-ecs-service-awsvpcconfiguration-securitygroups
         */
        readonly securityGroups?: Array<string>;
        /**
         * The IDs of the subnets associated with the task or service.
         *
         * There's a limit of 16 subnets that can be specified.
         *
         * > All specified subnets must be from the same VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-awsvpcconfiguration.html#cfn-ecs-service-awsvpcconfiguration-subnets
         */
        readonly subnets?: Array<string>;
    }
    /**
     * Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentconfiguration.html
     */
    interface DeploymentConfigurationProperty {
        /**
         * Information about the CloudWatch alarms.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentconfiguration.html#cfn-ecs-service-deploymentconfiguration-alarms
         */
        readonly alarms?: CfnService.DeploymentAlarmsProperty | cdk.IResolvable;
        /**
         * > The deployment circuit breaker can only be used for services using the rolling update ( `ECS` ) deployment type.
         *
         * The *deployment circuit breaker* determines whether a service deployment will fail if the service can't reach a steady state. If you use the deployment circuit breaker, a service deployment will transition to a failed state and stop launching new tasks. If you use the rollback option, when a service deployment fails, the service is rolled back to the last deployment that completed successfully. For more information, see [Rolling update](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html) in the *Amazon Elastic Container Service Developer Guide*
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentconfiguration.html#cfn-ecs-service-deploymentconfiguration-deploymentcircuitbreaker
         */
        readonly deploymentCircuitBreaker?: CfnService.DeploymentCircuitBreakerProperty | cdk.IResolvable;
        /**
         * If a service is using the rolling update ( `ECS` ) deployment type, the `maximumPercent` parameter represents an upper limit on the number of your service's tasks that are allowed in the `RUNNING` or `PENDING` state during a deployment, as a percentage of the `desiredCount` (rounded down to the nearest integer).
         *
         * This parameter enables you to define the deployment batch size. For example, if your service is using the `REPLICA` service scheduler and has a `desiredCount` of four tasks and a `maximumPercent` value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default `maximumPercent` value for a service using the `REPLICA` service scheduler is 200%.
         *
         * The Amazon ECS scheduler uses this parameter to replace unhealthy tasks by starting replacement tasks first and then stopping the unhealthy tasks, as long as cluster resources for starting replacement tasks are available. For more information about how the scheduler replaces unhealthy tasks, see [Amazon ECS services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html) .
         *
         * If a service is using either the blue/green ( `CODE_DEPLOY` ) or `EXTERNAL` deployment types, and tasks in the service use the EC2 launch type, the *maximum percent* value is set to the default value. The *maximum percent* value is used to define the upper limit on the number of the tasks in the service that remain in the `RUNNING` state while the container instances are in the `DRAINING` state.
         *
         * > You can't specify a custom `maximumPercent` value for a service that uses either the blue/green ( `CODE_DEPLOY` ) or `EXTERNAL` deployment types and has tasks that use the EC2 launch type.
         *
         * If the service uses either the blue/green ( `CODE_DEPLOY` ) or `EXTERNAL` deployment types, and the tasks in the service use the Fargate launch type, the maximum percent value is not used. The value is still returned when describing your service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentconfiguration.html#cfn-ecs-service-deploymentconfiguration-maximumpercent
         */
        readonly maximumPercent?: number;
        /**
         * If a service is using the rolling update ( `ECS` ) deployment type, the `minimumHealthyPercent` represents a lower limit on the number of your service's tasks that must remain in the `RUNNING` state during a deployment, as a percentage of the `desiredCount` (rounded up to the nearest integer).
         *
         * This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a `desiredCount` of four tasks and a `minimumHealthyPercent` of 50%, the service scheduler may stop two existing tasks to free up cluster capacity before starting two new tasks.
         *
         * If any tasks are unhealthy and if `maximumPercent` doesn't allow the Amazon ECS scheduler to start replacement tasks, the scheduler stops the unhealthy tasks one-by-one — using the `minimumHealthyPercent` as a constraint — to clear up capacity to launch replacement tasks. For more information about how the scheduler replaces unhealthy tasks, see [Amazon ECS services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html) .
         *
         * For services that *do not* use a load balancer, the following should be noted:
         *
         * - A service is considered healthy if all essential containers within the tasks in the service pass their health checks.
         * - If a task has no essential containers with a health check defined, the service scheduler will wait for 40 seconds after a task reaches a `RUNNING` state before the task is counted towards the minimum healthy percent total.
         * - If a task has one or more essential containers with a health check defined, the service scheduler will wait for the task to reach a healthy status before counting it towards the minimum healthy percent total. A task is considered healthy when all essential containers within the task have passed their health checks. The amount of time the service scheduler can wait for is determined by the container health check settings.
         *
         * For services that *do* use a load balancer, the following should be noted:
         *
         * - If a task has no essential containers with a health check defined, the service scheduler will wait for the load balancer target group health check to return a healthy status before counting the task towards the minimum healthy percent total.
         * - If a task has an essential container with a health check defined, the service scheduler will wait for both the task to reach a healthy status and the load balancer target group health check to return a healthy status before counting the task towards the minimum healthy percent total.
         *
         * The default value for a replica service for `minimumHealthyPercent` is 100%. The default `minimumHealthyPercent` value for a service using the `DAEMON` service schedule is 0% for the AWS CLI , the AWS SDKs, and the APIs and 50% for the AWS Management Console.
         *
         * The minimum number of healthy tasks during a deployment is the `desiredCount` multiplied by the `minimumHealthyPercent` /100, rounded up to the nearest integer value.
         *
         * If a service is using either the blue/green ( `CODE_DEPLOY` ) or `EXTERNAL` deployment types and is running tasks that use the EC2 launch type, the *minimum healthy percent* value is set to the default value. The *minimum healthy percent* value is used to define the lower limit on the number of the tasks in the service that remain in the `RUNNING` state while the container instances are in the `DRAINING` state.
         *
         * > You can't specify a custom `minimumHealthyPercent` value for a service that uses either the blue/green ( `CODE_DEPLOY` ) or `EXTERNAL` deployment types and has tasks that use the EC2 launch type.
         *
         * If a service is using either the blue/green ( `CODE_DEPLOY` ) or `EXTERNAL` deployment types and is running tasks that use the Fargate launch type, the minimum healthy percent value is not used, although it is returned when describing your service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentconfiguration.html#cfn-ecs-service-deploymentconfiguration-minimumhealthypercent
         */
        readonly minimumHealthyPercent?: number;
    }
    /**
     * One of the methods which provide a way for you to quickly identify when a deployment has failed, and then to optionally roll back the failure to the last working deployment.
     *
     * When the alarms are generated, Amazon ECS sets the service deployment to failed. Set the rollback parameter to have Amazon ECS to roll back your service to the last completed deployment after a failure.
     *
     * You can only use the `DeploymentAlarms` method to detect failures when the `DeploymentController` is set to `ECS` (rolling update).
     *
     * For more information, see [Rolling update](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html) in the **Amazon Elastic Container Service Developer Guide** .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentalarms.html
     */
    interface DeploymentAlarmsProperty {
        /**
         * One or more CloudWatch alarm names.
         *
         * Use a "," to separate the alarms.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentalarms.html#cfn-ecs-service-deploymentalarms-alarmnames
         */
        readonly alarmNames: Array<string>;
        /**
         * Determines whether to use the CloudWatch alarm option in the service deployment process.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentalarms.html#cfn-ecs-service-deploymentalarms-enable
         */
        readonly enable: boolean | cdk.IResolvable;
        /**
         * Determines whether to configure Amazon ECS to roll back the service if a service deployment fails.
         *
         * If rollback is used, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentalarms.html#cfn-ecs-service-deploymentalarms-rollback
         */
        readonly rollback: boolean | cdk.IResolvable;
    }
    /**
     * > The deployment circuit breaker can only be used for services using the rolling update ( `ECS` ) deployment type.
     *
     * The *deployment circuit breaker* determines whether a service deployment will fail if the service can't reach a steady state. If it is turned on, a service deployment will transition to a failed state and stop launching new tasks. You can also configure Amazon ECS to roll back your service to the last completed deployment after a failure. For more information, see [Rolling update](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * For more information about API failure reasons, see [API failure reasons](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/api_failures_messages.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentcircuitbreaker.html
     */
    interface DeploymentCircuitBreakerProperty {
        /**
         * Determines whether to use the deployment circuit breaker logic for the service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentcircuitbreaker.html#cfn-ecs-service-deploymentcircuitbreaker-enable
         */
        readonly enable: boolean | cdk.IResolvable;
        /**
         * Determines whether to configure Amazon ECS to roll back the service if a service deployment fails.
         *
         * If rollback is on, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-deploymentcircuitbreaker.html#cfn-ecs-service-deploymentcircuitbreaker-rollback
         */
        readonly rollback: boolean | cdk.IResolvable;
    }
    /**
     * The configuration for a volume specified in the task definition as a volume that is configured at launch time.
     *
     * Currently, the only supported volume type is an Amazon EBS volume.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicevolumeconfiguration.html
     */
    interface ServiceVolumeConfigurationProperty {
        /**
         * The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf.
         *
         * These settings are used to create each Amazon EBS volume, with one volume created for each task in the service. The Amazon EBS volumes are visible in your account in the Amazon EC2 console once they are created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicevolumeconfiguration.html#cfn-ecs-service-servicevolumeconfiguration-managedebsvolume
         */
        readonly managedEbsVolume?: cdk.IResolvable | CfnService.ServiceManagedEBSVolumeConfigurationProperty;
        /**
         * The name of the volume.
         *
         * This value must match the volume name from the `Volume` object in the task definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicevolumeconfiguration.html#cfn-ecs-service-servicevolumeconfiguration-name
         */
        readonly name: string;
    }
    /**
     * The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf.
     *
     * These settings are used to create each Amazon EBS volume, with one volume created for each task in the service. For information about the supported launch types and operating systems, see [Supported operating systems and launch types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-volumes.html#ebs-volumes-configuration) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * Many of these parameters map 1:1 with the Amazon EBS `CreateVolume` API request parameters.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicemanagedebsvolumeconfiguration.html
     */
    interface ServiceManagedEBSVolumeConfigurationProperty {
        /**
         * Indicates whether the volume should be encrypted.
         *
         * If no value is specified, encryption is turned on by default. This parameter maps 1:1 with the `Encrypted` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicemanagedebsvolumeconfiguration.html#cfn-ecs-service-servicemanagedebsvolumeconfiguration-encrypted
         */
        readonly encrypted?: boolean | cdk.IResolvable;
        /**
         * The filesystem type for the volume.
         *
         * For volumes created from a snapshot, you must specify the same filesystem type that the volume was using when the snapshot was created. If there is a filesystem type mismatch, the task will fail to start.
         *
         * The available Linux filesystem types are `ext3` , `ext4` , and `xfs` . If no value is specified, the `xfs` filesystem type is used by default.
         *
         * The available Windows filesystem types are `NTFS` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicemanagedebsvolumeconfiguration.html#cfn-ecs-service-servicemanagedebsvolumeconfiguration-filesystemtype
         */
        readonly filesystemType?: string;
        /**
         * The number of I/O operations per second (IOPS).
         *
         * For `gp3` , `io1` , and `io2` volumes, this represents the number of IOPS that are provisioned for the volume. For `gp2` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
         *
         * The following are the supported values for each volume type.
         *
         * - `gp3` : 3,000 - 16,000 IOPS
         * - `io1` : 100 - 64,000 IOPS
         * - `io2` : 100 - 256,000 IOPS
         *
         * This parameter is required for `io1` and `io2` volume types. The default for `gp3` volumes is `3,000 IOPS` . This parameter is not supported for `st1` , `sc1` , or `standard` volume types.
         *
         * This parameter maps 1:1 with the `Iops` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicemanagedebsvolumeconfiguration.html#cfn-ecs-service-servicemanagedebsvolumeconfiguration-iops
         */
        readonly iops?: number;
        /**
         * The Amazon Resource Name (ARN) identifier of the AWS Key Management Service key to use for Amazon EBS encryption.
         *
         * When encryption is turned on and no AWS Key Management Service key is specified, the default AWS managed key for Amazon EBS volumes is used. This parameter maps 1:1 with the `KmsKeyId` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference* .
         *
         * > AWS authenticates the AWS Key Management Service key asynchronously. Therefore, if you specify an ID, alias, or ARN that is invalid, the action can appear to complete, but eventually fails.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicemanagedebsvolumeconfiguration.html#cfn-ecs-service-servicemanagedebsvolumeconfiguration-kmskeyid
         */
        readonly kmsKeyId?: string;
        /**
         * The ARN of the IAM role to associate with this volume.
         *
         * This is the Amazon ECS infrastructure IAM role that is used to manage your AWS infrastructure. We recommend using the Amazon ECS-managed `AmazonECSInfrastructureRolePolicyForVolumes` IAM policy with this role. For more information, see [Amazon ECS infrastructure IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/infrastructure_IAM_role.html) in the *Amazon ECS Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicemanagedebsvolumeconfiguration.html#cfn-ecs-service-servicemanagedebsvolumeconfiguration-rolearn
         */
        readonly roleArn: string;
        /**
         * The size of the volume in GiB.
         *
         * You must specify either a volume size or a snapshot ID. If you specify a snapshot ID, the snapshot size is used for the volume size by default. You can optionally specify a volume size greater than or equal to the snapshot size. This parameter maps 1:1 with the `Size` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference* .
         *
         * The following are the supported volume size values for each volume type.
         *
         * - `gp2` and `gp3` : 1-16,384
         * - `io1` and `io2` : 4-16,384
         * - `st1` and `sc1` : 125-16,384
         * - `standard` : 1-1,024
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicemanagedebsvolumeconfiguration.html#cfn-ecs-service-servicemanagedebsvolumeconfiguration-sizeingib
         */
        readonly sizeInGiB?: number;
        /**
         * The snapshot that Amazon ECS uses to create the volume.
         *
         * You must specify either a snapshot ID or a volume size. This parameter maps 1:1 with the `SnapshotId` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicemanagedebsvolumeconfiguration.html#cfn-ecs-service-servicemanagedebsvolumeconfiguration-snapshotid
         */
        readonly snapshotId?: string;
        /**
         * The tags to apply to the volume.
         *
         * Amazon ECS applies service-managed tags by default. This parameter maps 1:1 with the `TagSpecifications.N` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicemanagedebsvolumeconfiguration.html#cfn-ecs-service-servicemanagedebsvolumeconfiguration-tagspecifications
         */
        readonly tagSpecifications?: Array<CfnService.EBSTagSpecificationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The throughput to provision for a volume, in MiB/s, with a maximum of 1,000 MiB/s.
         *
         * This parameter maps 1:1 with the `Throughput` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference* .
         *
         * > This parameter is only supported for the `gp3` volume type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicemanagedebsvolumeconfiguration.html#cfn-ecs-service-servicemanagedebsvolumeconfiguration-throughput
         */
        readonly throughput?: number;
        /**
         * The volume type.
         *
         * This parameter maps 1:1 with the `VolumeType` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference* . For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html) in the *Amazon EC2 User Guide* .
         *
         * The following are the supported volume types.
         *
         * - General Purpose SSD: `gp2` | `gp3`
         * - Provisioned IOPS SSD: `io1` | `io2`
         * - Throughput Optimized HDD: `st1`
         * - Cold HDD: `sc1`
         * - Magnetic: `standard`
         *
         * > The magnetic volume type is not supported on Fargate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-servicemanagedebsvolumeconfiguration.html#cfn-ecs-service-servicemanagedebsvolumeconfiguration-volumetype
         */
        readonly volumeType?: string;
    }
    /**
     * The tag specifications of an Amazon EBS volume.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-ebstagspecification.html
     */
    interface EBSTagSpecificationProperty {
        /**
         * Determines whether to propagate the tags from the task definition to the Amazon EBS volume.
         *
         * Tags can only propagate to a `SERVICE` specified in `ServiceVolumeConfiguration` . If no value is specified, the tags aren't propagated.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-ebstagspecification.html#cfn-ecs-service-ebstagspecification-propagatetags
         */
        readonly propagateTags?: string;
        /**
         * The type of volume resource.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-ebstagspecification.html#cfn-ecs-service-ebstagspecification-resourcetype
         */
        readonly resourceType: string;
        /**
         * The tags applied to this Amazon EBS volume.
         *
         * `AmazonECSCreated` and `AmazonECSManaged` are reserved tags that can't be used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-ebstagspecification.html#cfn-ecs-service-ebstagspecification-tags
         */
        readonly tags?: Array<cdk.CfnTag>;
    }
    /**
     * The VPC Lattice configuration for your service that holds the information for the target group(s) Amazon ECS tasks will be registered to.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-vpclatticeconfiguration.html
     */
    interface VpcLatticeConfigurationProperty {
        /**
         * The name of the port mapping to register in the VPC Lattice target group.
         *
         * This is the name of the `portMapping` you defined in your task definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-vpclatticeconfiguration.html#cfn-ecs-service-vpclatticeconfiguration-portname
         */
        readonly portName: string;
        /**
         * The ARN of the IAM role to associate with this VPC Lattice configuration.
         *
         * This is the Amazon ECS infrastructure IAM role that is used to manage your VPC Lattice infrastructure.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-vpclatticeconfiguration.html#cfn-ecs-service-vpclatticeconfiguration-rolearn
         */
        readonly roleArn: string;
        /**
         * The full Amazon Resource Name (ARN) of the target group or groups associated with the VPC Lattice configuration that the Amazon ECS tasks will be registered to.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-service-vpclatticeconfiguration.html#cfn-ecs-service-vpclatticeconfiguration-targetgrouparn
         */
        readonly targetGroupArn: string;
    }
}
/**
 * Properties for defining a `CfnService`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html
 */
export interface CfnServiceProps {
    /**
     * Indicates whether to use Availability Zone rebalancing for the service.
     *
     * For more information, see [Balancing an Amazon ECS service across Availability Zones](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-rebalancing.html) in the **Amazon Elastic Container Service Developer Guide** .
     *
     * @default - "DISABLED"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-availabilityzonerebalancing
     */
    readonly availabilityZoneRebalancing?: string;
    /**
     * The capacity provider strategy to use for the service.
     *
     * If a `capacityProviderStrategy` is specified, the `launchType` parameter must be omitted. If no `capacityProviderStrategy` or `launchType` is specified, the `defaultCapacityProviderStrategy` for the cluster is used.
     *
     * A capacity provider strategy can contain a maximum of 20 capacity providers.
     *
     * > To remove this property from your service resource, specify an empty `CapacityProviderStrategyItem` array.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-capacityproviderstrategy
     */
    readonly capacityProviderStrategy?: Array<CfnService.CapacityProviderStrategyItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that you run your service on.
     *
     * If you do not specify a cluster, the default cluster is assumed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-cluster
     */
    readonly cluster?: string;
    /**
     * Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-deploymentconfiguration
     */
    readonly deploymentConfiguration?: CfnService.DeploymentConfigurationProperty | cdk.IResolvable;
    /**
     * The deployment controller to use for the service.
     *
     * If no deployment controller is specified, the default value of `ECS` is used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-deploymentcontroller
     */
    readonly deploymentController?: CfnService.DeploymentControllerProperty | cdk.IResolvable;
    /**
     * The number of instantiations of the specified task definition to place and keep running in your service.
     *
     * For new services, if a desired count is not specified, a default value of `1` is used. When using the `DAEMON` scheduling strategy, the desired count is not required.
     *
     * For existing services, if a desired count is not specified, it is omitted from the operation.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-desiredcount
     */
    readonly desiredCount?: number;
    /**
     * Specifies whether to turn on Amazon ECS managed tags for the tasks within the service.
     *
     * For more information, see [Tagging your Amazon ECS resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * When you use Amazon ECS managed tags, you need to set the `propagateTags` request parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-enableecsmanagedtags
     */
    readonly enableEcsManagedTags?: boolean | cdk.IResolvable;
    /**
     * Determines whether the execute command functionality is turned on for the service.
     *
     * If `true` , the execute command functionality is turned on for all containers in tasks as part of the service.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-enableexecutecommand
     */
    readonly enableExecuteCommand?: boolean | cdk.IResolvable;
    /**
     * The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing, VPC Lattice, and container health checks after a task has first started.
     *
     * If you don't specify a health check grace period value, the default value of `0` is used. If you don't use any of the health checks, then `healthCheckGracePeriodSeconds` is unused.
     *
     * If your service's tasks take a while to start and respond to health checks, you can specify a health check grace period of up to 2,147,483,647 seconds (about 69 years). During that time, the Amazon ECS service scheduler ignores health check status. This grace period can prevent the service scheduler from marking tasks as unhealthy and stopping them before they have time to come up.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-healthcheckgraceperiodseconds
     */
    readonly healthCheckGracePeriodSeconds?: number;
    /**
     * The launch type on which to run your service.
     *
     * For more information, see [Amazon ECS Launch Types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-launchtype
     */
    readonly launchType?: string;
    /**
     * A list of load balancer objects to associate with the service.
     *
     * If you specify the `Role` property, `LoadBalancers` must be specified as well. For information about the number of load balancers that you can specify per service, see [Service Load Balancing](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * > To remove this property from your service resource, specify an empty `LoadBalancer` array.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-loadbalancers
     */
    readonly loadBalancers?: Array<cdk.IResolvable | CfnService.LoadBalancerProperty> | cdk.IResolvable;
    /**
     * The network configuration for the service.
     *
     * This parameter is required for task definitions that use the `awsvpc` network mode to receive their own elastic network interface, and it is not supported for other network modes. For more information, see [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-networkconfiguration
     */
    readonly networkConfiguration?: cdk.IResolvable | CfnService.NetworkConfigurationProperty;
    /**
     * An array of placement constraint objects to use for tasks in your service.
     *
     * You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime.
     *
     * > To remove this property from your service resource, specify an empty `PlacementConstraint` array.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-placementconstraints
     */
    readonly placementConstraints?: Array<cdk.IResolvable | CfnService.PlacementConstraintProperty> | cdk.IResolvable;
    /**
     * The placement strategy objects to use for tasks in your service.
     *
     * You can specify a maximum of 5 strategy rules for each service.
     *
     * > To remove this property from your service resource, specify an empty `PlacementStrategy` array.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-placementstrategies
     */
    readonly placementStrategies?: Array<cdk.IResolvable | CfnService.PlacementStrategyProperty> | cdk.IResolvable;
    /**
     * The platform version that your tasks in the service are running on.
     *
     * A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the `LATEST` platform version is used. For more information, see [AWS Fargate platform versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @default - "LATEST"
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-platformversion
     */
    readonly platformVersion?: string;
    /**
     * Specifies whether to propagate the tags from the task definition to the task.
     *
     * If no value is specified, the tags aren't propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the [TagResource](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html) API action.
     *
     * You must set this to a value other than `NONE` when you use Cost Explorer. For more information, see [Amazon ECS usage reports](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/usage-reports.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * The default is `NONE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-propagatetags
     */
    readonly propagateTags?: string;
    /**
     * The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf.
     *
     * This parameter is only permitted if you are using a load balancer with your service and your task definition doesn't use the `awsvpc` network mode. If you specify the `role` parameter, you must also specify a load balancer object with the `loadBalancers` parameter.
     *
     * > If your account has already created the Amazon ECS service-linked role, that role is used for your service unless you specify a role here. The service-linked role is required if your task definition uses the `awsvpc` network mode or if the service is configured to use service discovery, an external deployment controller, multiple target groups, or Elastic Inference accelerators in which case you don't specify a role here. For more information, see [Using service-linked roles for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * If your specified role has a path other than `/` , then you must either specify the full role ARN (this is recommended) or prefix the role name with the path. For example, if a role with the name `bar` has a path of `/foo/` then you would specify `/foo/bar` as the role name. For more information, see [Friendly names and paths](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) in the *IAM User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-role
     */
    readonly role?: string;
    /**
     * The scheduling strategy to use for the service. For more information, see [Services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html) .
     *
     * There are two service scheduler strategies available:
     *
     * - `REPLICA` -The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. This scheduler strategy is required if the service uses the `CODE_DEPLOY` or `EXTERNAL` deployment controller types.
     * - `DAEMON` -The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks and will stop tasks that don't meet the placement constraints. When you're using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies.
     *
     * > Tasks using the Fargate launch type or the `CODE_DEPLOY` or `EXTERNAL` deployment controller types don't support the `DAEMON` scheduling strategy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-schedulingstrategy
     */
    readonly schedulingStrategy?: string;
    /**
     * The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.
     *
     * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-serviceconnectconfiguration
     */
    readonly serviceConnectConfiguration?: cdk.IResolvable | CfnService.ServiceConnectConfigurationProperty;
    /**
     * The name of your service.
     *
     * Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.
     *
     * > The stack update fails if you change any properties that require replacement and the `ServiceName` is configured. This is because AWS CloudFormation creates the replacement service first, but each `ServiceName` must be unique in the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-servicename
     */
    readonly serviceName?: string;
    /**
     * The details of the service discovery registry to associate with this service. For more information, see [Service discovery](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html) .
     *
     * > Each service may be associated with one service registry. Multiple service registries for each service isn't supported. > To remove this property from your service resource, specify an empty `ServiceRegistry` array.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-serviceregistries
     */
    readonly serviceRegistries?: Array<cdk.IResolvable | CfnService.ServiceRegistryProperty> | cdk.IResolvable;
    /**
     * The metadata that you apply to the service to help you categorize and organize them.
     *
     * Each tag consists of a key and an optional value, both of which you define. When a service is deleted, the tags are deleted as well.
     *
     * The following basic restrictions apply to tags:
     *
     * - Maximum number of tags per resource - 50
     * - For each resource, each tag key must be unique, and each tag key can have only one value.
     * - Maximum key length - 128 Unicode characters in UTF-8
     * - Maximum value length - 256 Unicode characters in UTF-8
     * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
     * - Tag keys and values are case-sensitive.
     * - Do not use `aws:` , `AWS:` , or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The `family` and `revision` ( `family:revision` ) or full ARN of the task definition to run in your service.
     *
     * If a `revision` isn't specified, the latest `ACTIVE` revision is used.
     *
     * A task definition must be specified if the service uses either the `ECS` or `CODE_DEPLOY` deployment controllers.
     *
     * For more information about deployment types, see [Amazon ECS deployment types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-taskdefinition
     */
    readonly taskDefinition?: string;
    /**
     * The configuration for a volume specified in the task definition as a volume that is configured at launch time.
     *
     * Currently, the only supported volume type is an Amazon EBS volume.
     *
     * > To remove this property from your service resource, specify an empty `ServiceVolumeConfiguration` array.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-volumeconfigurations
     */
    readonly volumeConfigurations?: Array<cdk.IResolvable | CfnService.ServiceVolumeConfigurationProperty> | cdk.IResolvable;
    /**
     * The VPC Lattice configuration for the service being created.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-service.html#cfn-ecs-service-vpclatticeconfigurations
     */
    readonly vpcLatticeConfigurations?: Array<cdk.IResolvable | CfnService.VpcLatticeConfigurationProperty> | cdk.IResolvable;
}
/**
 * Registers a new task definition from the supplied `family` and `containerDefinitions` .
 *
 * Optionally, you can add data volumes to your containers with the `volumes` parameter. For more information about task definition parameters and defaults, see [Amazon ECS Task Definitions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html) in the *Amazon Elastic Container Service Developer Guide* .
 *
 * You can specify a role for your task with the `taskRoleArn` parameter. When you specify a role for a task, its containers can then use the latest versions of the AWS CLI or SDKs to make API requests to the AWS services that are specified in the policy that's associated with the role. For more information, see [IAM Roles for Tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the *Amazon Elastic Container Service Developer Guide* .
 *
 * You can specify a Docker networking mode for the containers in your task definition with the `networkMode` parameter. If you specify the `awsvpc` network mode, the task is allocated an elastic network interface, and you must specify a [NetworkConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_NetworkConfiguration.html) when you create a service or run a task with the task definition. For more information, see [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the *Amazon Elastic Container Service Developer Guide* .
 *
 * @cloudformationResource AWS::ECS::TaskDefinition
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html
 */
export declare class CfnTaskDefinition extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTaskDefinition from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTaskDefinition;
    /**
     * The ARN of the task definition.
     *
     * @cloudformationAttribute TaskDefinitionArn
     */
    readonly attrTaskDefinitionArn: string;
    /**
     * A list of container definitions in JSON format that describe the different containers that make up your task.
     */
    containerDefinitions?: Array<CfnTaskDefinition.ContainerDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The number of `cpu` units used by the task.
     */
    cpu?: string;
    /**
     * Enables fault injection and allows for fault injection requests to be accepted from the task's containers.
     */
    enableFaultInjection?: boolean | cdk.IResolvable;
    /**
     * The ephemeral storage settings to use for tasks run with the task definition.
     */
    ephemeralStorage?: CfnTaskDefinition.EphemeralStorageProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make AWS API calls on your behalf.
     */
    executionRoleArn?: string;
    /**
     * The name of a family that this task definition is registered to.
     */
    family?: string;
    /**
     * The Elastic Inference accelerators to use for the containers in the task.
     */
    inferenceAccelerators?: Array<CfnTaskDefinition.InferenceAcceleratorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The IPC resource namespace to use for the containers in the task.
     */
    ipcMode?: string;
    /**
     * The amount (in MiB) of memory used by the task.
     */
    memory?: string;
    /**
     * The Docker networking mode to use for the containers in the task.
     */
    networkMode?: string;
    /**
     * The process namespace to use for the containers in the task.
     */
    pidMode?: string;
    /**
     * An array of placement constraint objects to use for tasks.
     */
    placementConstraints?: Array<cdk.IResolvable | CfnTaskDefinition.TaskDefinitionPlacementConstraintProperty> | cdk.IResolvable;
    /**
     * The configuration details for the App Mesh proxy.
     */
    proxyConfiguration?: cdk.IResolvable | CfnTaskDefinition.ProxyConfigurationProperty;
    /**
     * The task launch types the task definition was validated against.
     */
    requiresCompatibilities?: Array<string>;
    /**
     * The operating system that your tasks definitions run on.
     */
    runtimePlatform?: cdk.IResolvable | CfnTaskDefinition.RuntimePlatformProperty;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The metadata that you apply to the task definition to help you categorize and organize them.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * The short name or full Amazon Resource Name (ARN) of the AWS Identity and Access Management role that grants containers in the task permission to call AWS APIs on your behalf.
     */
    taskRoleArn?: string;
    /**
     * The list of data volume definitions for the task.
     */
    volumes?: Array<cdk.IResolvable | CfnTaskDefinition.VolumeProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnTaskDefinitionProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTaskDefinition {
    /**
     * Details on an Elastic Inference accelerator.
     *
     * For more information, see [Working with Amazon Elastic Inference on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-inferenceaccelerator.html
     */
    interface InferenceAcceleratorProperty {
        /**
         * The Elastic Inference accelerator device name.
         *
         * The `deviceName` must also be referenced in a container definition as a [ResourceRequirement](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ResourceRequirement.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-inferenceaccelerator.html#cfn-ecs-taskdefinition-inferenceaccelerator-devicename
         */
        readonly deviceName?: string;
        /**
         * The Elastic Inference accelerator type to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-inferenceaccelerator.html#cfn-ecs-taskdefinition-inferenceaccelerator-devicetype
         */
        readonly deviceType?: string;
    }
    /**
     * The constraint on task placement in the task definition.
     *
     * For more information, see [Task placement constraints](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * > Task placement constraints aren't supported for tasks run on AWS Fargate .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-taskdefinitionplacementconstraint.html
     */
    interface TaskDefinitionPlacementConstraintProperty {
        /**
         * A cluster query language expression to apply to the constraint.
         *
         * For more information, see [Cluster query language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-taskdefinitionplacementconstraint.html#cfn-ecs-taskdefinition-taskdefinitionplacementconstraint-expression
         */
        readonly expression?: string;
        /**
         * The type of constraint.
         *
         * The `MemberOf` constraint restricts selection to be from a group of valid candidates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-taskdefinitionplacementconstraint.html#cfn-ecs-taskdefinition-taskdefinitionplacementconstraint-type
         */
        readonly type: string;
    }
    /**
     * Information about the platform for the Amazon ECS service or task.
     *
     * For more information about `RuntimePlatform` , see [RuntimePlatform](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#runtime-platform) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-runtimeplatform.html
     */
    interface RuntimePlatformProperty {
        /**
         * The CPU architecture.
         *
         * You can run your Linux tasks on an ARM-based platform by setting the value to `ARM64` . This option is available for tasks that run on Linux Amazon EC2 instance or Linux containers on Fargate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-runtimeplatform.html#cfn-ecs-taskdefinition-runtimeplatform-cpuarchitecture
         */
        readonly cpuArchitecture?: string;
        /**
         * The operating system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-runtimeplatform.html#cfn-ecs-taskdefinition-runtimeplatform-operatingsystemfamily
         */
        readonly operatingSystemFamily?: string;
    }
    /**
     * The configuration details for the App Mesh proxy.
     *
     * For tasks that use the EC2 launch type, the container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the `ecs-init` package to use a proxy configuration. If your container instances are launched from the Amazon ECS optimized AMI version `20190301` or later, then they contain the required versions of the container agent and `ecs-init` . For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html)
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-proxyconfiguration.html
     */
    interface ProxyConfigurationProperty {
        /**
         * The name of the container that will serve as the App Mesh proxy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-proxyconfiguration.html#cfn-ecs-taskdefinition-proxyconfiguration-containername
         */
        readonly containerName: string;
        /**
         * The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified as key-value pairs.
         *
         * - `IgnoredUID` - (Required) The user ID (UID) of the proxy container as defined by the `user` parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If `IgnoredGID` is specified, this field can be empty.
         * - `IgnoredGID` - (Required) The group ID (GID) of the proxy container as defined by the `user` parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If `IgnoredUID` is specified, this field can be empty.
         * - `AppPorts` - (Required) The list of ports that the application uses. Network traffic to these ports is forwarded to the `ProxyIngressPort` and `ProxyEgressPort` .
         * - `ProxyIngressPort` - (Required) Specifies the port that incoming traffic to the `AppPorts` is directed to.
         * - `ProxyEgressPort` - (Required) Specifies the port that outgoing traffic from the `AppPorts` is directed to.
         * - `EgressIgnoredPorts` - (Required) The egress traffic going to the specified ports is ignored and not redirected to the `ProxyEgressPort` . It can be an empty list.
         * - `EgressIgnoredIPs` - (Required) The egress traffic going to the specified IP addresses is ignored and not redirected to the `ProxyEgressPort` . It can be an empty list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-proxyconfiguration.html#cfn-ecs-taskdefinition-proxyconfiguration-proxyconfigurationproperties
         */
        readonly proxyConfigurationProperties?: Array<cdk.IResolvable | CfnTaskDefinition.KeyValuePairProperty> | cdk.IResolvable;
        /**
         * The proxy type.
         *
         * The only supported value is `APPMESH` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-proxyconfiguration.html#cfn-ecs-taskdefinition-proxyconfiguration-type
         */
        readonly type?: string;
    }
    /**
     * A key-value pair object.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-keyvaluepair.html
     */
    interface KeyValuePairProperty {
        /**
         * The name of the key-value pair.
         *
         * For environment variables, this is the name of the environment variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-keyvaluepair.html#cfn-ecs-taskdefinition-keyvaluepair-name
         */
        readonly name?: string;
        /**
         * The value of the key-value pair.
         *
         * For environment variables, this is the value of the environment variable.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-keyvaluepair.html#cfn-ecs-taskdefinition-keyvaluepair-value
         */
        readonly value?: string;
    }
    /**
     * The data volume configuration for tasks launched using this task definition.
     *
     * Specifying a volume configuration in a task definition is optional. The volume configuration may contain multiple volumes but only one volume configured at launch is supported. Each volume defined in the volume configuration may only specify a `name` and one of either `configuredAtLaunch` , `dockerVolumeConfiguration` , `efsVolumeConfiguration` , `fsxWindowsFileServerVolumeConfiguration` , or `host` . If an empty volume configuration is specified, by default Amazon ECS uses a host volume. For more information, see [Using data volumes in tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-volume.html
     */
    interface VolumeProperty {
        /**
         * Indicates whether the volume should be configured at launch time.
         *
         * This is used to create Amazon EBS volumes for standalone tasks or tasks created as part of a service. Each task definition revision may only have one volume configured at launch in the volume configuration.
         *
         * To configure a volume at launch time, use this task definition revision and specify a `volumeConfigurations` object when calling the `CreateService` , `UpdateService` , `RunTask` or `StartTask` APIs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-volume.html#cfn-ecs-taskdefinition-volume-configuredatlaunch
         */
        readonly configuredAtLaunch?: boolean | cdk.IResolvable;
        /**
         * This parameter is specified when you use Docker volumes.
         *
         * Windows containers only support the use of the `local` driver. To use bind mounts, specify the `host` parameter instead.
         *
         * > Docker volumes aren't supported by tasks run on AWS Fargate .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-volume.html#cfn-ecs-taskdefinition-volume-dockervolumeconfiguration
         */
        readonly dockerVolumeConfiguration?: CfnTaskDefinition.DockerVolumeConfigurationProperty | cdk.IResolvable;
        /**
         * This parameter is specified when you use an Amazon Elastic File System file system for task storage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-volume.html#cfn-ecs-taskdefinition-volume-efsvolumeconfiguration
         */
        readonly efsVolumeConfiguration?: CfnTaskDefinition.EFSVolumeConfigurationProperty | cdk.IResolvable;
        /**
         * This parameter is specified when you use Amazon FSx for Windows File Server file system for task storage.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-volume.html#cfn-ecs-taskdefinition-volume-fsxwindowsfileservervolumeconfiguration
         */
        readonly fSxWindowsFileServerVolumeConfiguration?: CfnTaskDefinition.FSxWindowsFileServerVolumeConfigurationProperty | cdk.IResolvable;
        /**
         * This parameter is specified when you use bind mount host volumes.
         *
         * The contents of the `host` parameter determine whether your bind mount host volume persists on the host container instance and where it's stored. If the `host` parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.
         *
         * Windows containers can mount whole directories on the same drive as `$env:ProgramData` . Windows containers can't mount directories on a different drive, and mount point can't be across drives. For example, you can mount `C:\my\path:C:\my\path` and `D:\:D:\` , but not `D:\my\path:C:\my\path` or `D:\:C:\my\path` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-volume.html#cfn-ecs-taskdefinition-volume-host
         */
        readonly host?: CfnTaskDefinition.HostVolumePropertiesProperty | cdk.IResolvable;
        /**
         * The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
         *
         * When using a volume configured at launch, the `name` is required and must also be specified as the volume name in the `ServiceVolumeConfiguration` or `TaskVolumeConfiguration` parameter when creating your service or standalone task.
         *
         * For all other types of volumes, this name is referenced in the `sourceVolume` parameter of the `mountPoints` object in the container definition.
         *
         * When a volume is using the `efsVolumeConfiguration` , the name is required.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-volume.html#cfn-ecs-taskdefinition-volume-name
         */
        readonly name?: string;
    }
    /**
     * This parameter is specified when you're using an Amazon Elastic File System file system for task storage.
     *
     * For more information, see [Amazon EFS volumes](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-efsvolumeconfiguration.html
     */
    interface EFSVolumeConfigurationProperty {
        /**
         * The authorization configuration details for the Amazon EFS file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-efsvolumeconfiguration.html#cfn-ecs-taskdefinition-efsvolumeconfiguration-authorizationconfig
         */
        readonly authorizationConfig?: CfnTaskDefinition.AuthorizationConfigProperty | cdk.IResolvable;
        /**
         * The Amazon EFS file system ID to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-efsvolumeconfiguration.html#cfn-ecs-taskdefinition-efsvolumeconfiguration-filesystemid
         */
        readonly filesystemId: string;
        /**
         * The directory within the Amazon EFS file system to mount as the root directory inside the host.
         *
         * If this parameter is omitted, the root of the Amazon EFS volume will be used. Specifying `/` will have the same effect as omitting this parameter.
         *
         * > If an EFS access point is specified in the `authorizationConfig` , the root directory parameter must either be omitted or set to `/` which will enforce the path set on the EFS access point.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-efsvolumeconfiguration.html#cfn-ecs-taskdefinition-efsvolumeconfiguration-rootdirectory
         */
        readonly rootDirectory?: string;
        /**
         * Determines whether to use encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server.
         *
         * Transit encryption must be turned on if Amazon EFS IAM authorization is used. If this parameter is omitted, the default value of `DISABLED` is used. For more information, see [Encrypting data in transit](https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html) in the *Amazon Elastic File System User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-efsvolumeconfiguration.html#cfn-ecs-taskdefinition-efsvolumeconfiguration-transitencryption
         */
        readonly transitEncryption?: string;
        /**
         * The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server.
         *
         * If you do not specify a transit encryption port, it will use the port selection strategy that the Amazon EFS mount helper uses. For more information, see [EFS mount helper](https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html) in the *Amazon Elastic File System User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-efsvolumeconfiguration.html#cfn-ecs-taskdefinition-efsvolumeconfiguration-transitencryptionport
         */
        readonly transitEncryptionPort?: number;
    }
    /**
     * The authorization configuration details for the Amazon EFS file system.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-authorizationconfig.html
     */
    interface AuthorizationConfigProperty {
        /**
         * The Amazon EFS access point ID to use.
         *
         * If an access point is specified, the root directory value specified in the `EFSVolumeConfiguration` must either be omitted or set to `/` which will enforce the path set on the EFS access point. If an access point is used, transit encryption must be on in the `EFSVolumeConfiguration` . For more information, see [Working with Amazon EFS access points](https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html) in the *Amazon Elastic File System User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-authorizationconfig.html#cfn-ecs-taskdefinition-authorizationconfig-accesspointid
         */
        readonly accessPointId?: string;
        /**
         * Determines whether to use the Amazon ECS task role defined in a task definition when mounting the Amazon EFS file system.
         *
         * If it is turned on, transit encryption must be turned on in the `EFSVolumeConfiguration` . If this parameter is omitted, the default value of `DISABLED` is used. For more information, see [Using Amazon EFS access points](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html#efs-volume-accesspoints) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-authorizationconfig.html#cfn-ecs-taskdefinition-authorizationconfig-iam
         */
        readonly iam?: string;
    }
    /**
     * The `HostVolumeProperties` property specifies details on a container instance bind mount host volume.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-hostvolumeproperties.html
     */
    interface HostVolumePropertiesProperty {
        /**
         * When the `host` parameter is used, specify a `sourcePath` to declare the path on the host container instance that's presented to the container.
         *
         * If this parameter is empty, then the Docker daemon has assigned a host path for you. If the `host` parameter contains a `sourcePath` file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the `sourcePath` value doesn't exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.
         *
         * If you're using the Fargate launch type, the `sourcePath` parameter is not supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-hostvolumeproperties.html#cfn-ecs-taskdefinition-hostvolumeproperties-sourcepath
         */
        readonly sourcePath?: string;
    }
    /**
     * The `DockerVolumeConfiguration` property specifies a Docker volume configuration and is used when you use Docker volumes.
     *
     * Docker volumes are only supported when you are using the EC2 launch type. Windows containers only support the use of the `local` driver. To use bind mounts, specify a `host` instead.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-dockervolumeconfiguration.html
     */
    interface DockerVolumeConfigurationProperty {
        /**
         * If this value is `true` , the Docker volume is created if it doesn't already exist.
         *
         * > This field is only used if the `scope` is `shared` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-dockervolumeconfiguration.html#cfn-ecs-taskdefinition-dockervolumeconfiguration-autoprovision
         */
        readonly autoprovision?: boolean | cdk.IResolvable;
        /**
         * The Docker volume driver to use.
         *
         * The driver value must match the driver name provided by Docker because it is used for task placement. If the driver was installed using the Docker plugin CLI, use `docker plugin ls` to retrieve the driver name from your container instance. If the driver was installed using another method, use Docker plugin discovery to retrieve the driver name. This parameter maps to `Driver` in the docker container create command and the `xxdriver` option to docker volume create.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-dockervolumeconfiguration.html#cfn-ecs-taskdefinition-dockervolumeconfiguration-driver
         */
        readonly driver?: string;
        /**
         * A map of Docker driver-specific options passed through.
         *
         * This parameter maps to `DriverOpts` in the docker create-volume command and the `xxopt` option to docker volume create.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-dockervolumeconfiguration.html#cfn-ecs-taskdefinition-dockervolumeconfiguration-driveropts
         */
        readonly driverOpts?: cdk.IResolvable | Record<string, string>;
        /**
         * Custom metadata to add to your Docker volume.
         *
         * This parameter maps to `Labels` in the docker container create command and the `xxlabel` option to docker volume create.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-dockervolumeconfiguration.html#cfn-ecs-taskdefinition-dockervolumeconfiguration-labels
         */
        readonly labels?: cdk.IResolvable | Record<string, string>;
        /**
         * The scope for the Docker volume that determines its lifecycle.
         *
         * Docker volumes that are scoped to a `task` are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are scoped as `shared` persist after the task stops.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-dockervolumeconfiguration.html#cfn-ecs-taskdefinition-dockervolumeconfiguration-scope
         */
        readonly scope?: string;
    }
    /**
     * This parameter is specified when you're using [Amazon FSx for Windows File Server](https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html) file system for task storage.
     *
     * For more information and the input format, see [Amazon FSx for Windows File Server volumes](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-fsxwindowsfileservervolumeconfiguration.html
     */
    interface FSxWindowsFileServerVolumeConfigurationProperty {
        /**
         * The authorization configuration details for the Amazon FSx for Windows File Server file system.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-fsxwindowsfileservervolumeconfiguration.html#cfn-ecs-taskdefinition-fsxwindowsfileservervolumeconfiguration-authorizationconfig
         */
        readonly authorizationConfig?: CfnTaskDefinition.FSxAuthorizationConfigProperty | cdk.IResolvable;
        /**
         * The Amazon FSx for Windows File Server file system ID to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-fsxwindowsfileservervolumeconfiguration.html#cfn-ecs-taskdefinition-fsxwindowsfileservervolumeconfiguration-filesystemid
         */
        readonly fileSystemId: string;
        /**
         * The directory within the Amazon FSx for Windows File Server file system to mount as the root directory inside the host.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-fsxwindowsfileservervolumeconfiguration.html#cfn-ecs-taskdefinition-fsxwindowsfileservervolumeconfiguration-rootdirectory
         */
        readonly rootDirectory: string;
    }
    /**
     * The authorization configuration details for Amazon FSx for Windows File Server file system.
     *
     * See [FSxWindowsFileServerVolumeConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_FSxWindowsFileServerVolumeConfiguration.html) in the *Amazon ECS API Reference* .
     *
     * For more information and the input format, see [Amazon FSx for Windows File Server Volumes](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/wfsx-volumes.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-fsxauthorizationconfig.html
     */
    interface FSxAuthorizationConfigProperty {
        /**
         * The authorization credential option to use.
         *
         * The authorization credential options can be provided using either the Amazon Resource Name (ARN) of an AWS Secrets Manager secret or SSM Parameter Store parameter. The ARN refers to the stored credentials.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-fsxauthorizationconfig.html#cfn-ecs-taskdefinition-fsxauthorizationconfig-credentialsparameter
         */
        readonly credentialsParameter: string;
        /**
         * A fully qualified domain name hosted by an [AWS Directory Service](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html) Managed Microsoft AD (Active Directory) or self-hosted AD on Amazon EC2.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-fsxauthorizationconfig.html#cfn-ecs-taskdefinition-fsxauthorizationconfig-domain
         */
        readonly domain: string;
    }
    /**
     * The `ContainerDefinition` property specifies a container definition.
     *
     * Container definitions are used in task definitions to describe the different containers that are launched as part of a task.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html
     */
    interface ContainerDefinitionProperty {
        /**
         * The command that's passed to the container.
         *
         * This parameter maps to `Cmd` in the docker container create command and the `COMMAND` parameter to docker run. If there are multiple arguments, each argument is a separated string in the array.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-command
         */
        readonly command?: Array<string>;
        /**
         * The number of `cpu` units reserved for the container.
         *
         * This parameter maps to `CpuShares` in the docker container create commandand the `--cpu-shares` option to docker run.
         *
         * This field is optional for tasks using the Fargate launch type, and the only requirement is that the total amount of CPU reserved for all containers within a task be lower than the task-level `cpu` value.
         *
         * > You can determine the number of CPU units that are available per EC2 instance type by multiplying the vCPUs listed for that instance type on the [Amazon EC2 Instances](https://docs.aws.amazon.com/ec2/instance-types/) detail page by 1,024.
         *
         * Linux containers share unallocated CPU units with other containers on the container instance with the same ratio as their allocated amount. For example, if you run a single-container task on a single-core instance type with 512 CPU units specified for that container, and that's the only task running on the container instance, that container could use the full 1,024 CPU unit share at any given time. However, if you launched another copy of the same task on that container instance, each task is guaranteed a minimum of 512 CPU units when needed. Moreover, each container could float to higher CPU usage if the other container was not using it. If both tasks were 100% active all of the time, they would be limited to 512 CPU units.
         *
         * On Linux container instances, the Docker daemon on the container instance uses the CPU value to calculate the relative CPU share ratios for running containers. The minimum valid CPU share value that the Linux kernel allows is 2, and the maximum valid CPU share value that the Linux kernel allows is 262144. However, the CPU parameter isn't required, and you can use CPU values below 2 or above 262144 in your container definitions. For CPU values below 2 (including null) or above 262144, the behavior varies based on your Amazon ECS container agent version:
         *
         * - *Agent versions less than or equal to 1.1.0:* Null and zero CPU values are passed to Docker as 0, which Docker then converts to 1,024 CPU shares. CPU values of 1 are passed to Docker as 1, which the Linux kernel converts to two CPU shares.
         * - *Agent versions greater than or equal to 1.2.0:* Null, zero, and CPU values of 1 are passed to Docker as 2.
         * - *Agent versions greater than or equal to 1.84.0:* CPU values greater than 256 vCPU are passed to Docker as 256, which is equivalent to 262144 CPU shares.
         *
         * On Windows container instances, the CPU limit is enforced as an absolute limit, or a quota. Windows containers only have access to the specified amount of CPU that's described in the task definition. A null or zero CPU value is passed to Docker as `0` , which Windows interprets as 1% of one CPU.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-cpu
         */
        readonly cpu?: number;
        /**
         * A list of ARNs in SSM or Amazon S3 to a credential spec ( `CredSpec` ) file that configures the container for Active Directory authentication.
         *
         * We recommend that you use this parameter instead of the `dockerSecurityOptions` . The maximum number of ARNs is 1.
         *
         * There are two formats for each ARN.
         *
         * - **credentialspecdomainless:MyARN** - You use `credentialspecdomainless:MyARN` to provide a `CredSpec` with an additional section for a secret in AWS Secrets Manager . You provide the login credentials to the domain in the secret.
         *
         * Each task that runs on any container instance can join different domains.
         *
         * You can use this format without joining the container instance to a domain.
         * - **credentialspec:MyARN** - You use `credentialspec:MyARN` to provide a `CredSpec` for a single domain.
         *
         * You must join the container instance to the domain before you start any tasks that use this task definition.
         *
         * In both formats, replace `MyARN` with the ARN in SSM or Amazon S3.
         *
         * If you provide a `credentialspecdomainless:MyARN` , the `credspec` must provide a ARN in AWS Secrets Manager for a secret containing the username, password, and the domain to connect to. For better security, the instance isn't joined to the domain for domainless authentication. Other applications on the instance can't use the domainless credentials. You can use this parameter to run tasks on the same instance, even it the tasks need to join different domains. For more information, see [Using gMSAs for Windows Containers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows-gmsa.html) and [Using gMSAs for Linux Containers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/linux-gmsa.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-credentialspecs
         */
        readonly credentialSpecs?: Array<string>;
        /**
         * The dependencies defined for container startup and shutdown.
         *
         * A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed.
         *
         * For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent to turn on container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the *Amazon Elastic Container Service Developer Guide* . If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the `ecs-init` package. If your container instances are launched from version `20190301` or later, then they contain the required versions of the container agent and `ecs-init` . For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * For tasks using the Fargate launch type, the task or service requires the following platforms:
         *
         * - Linux platform version `1.3.0` or later.
         * - Windows platform version `1.0.0` or later.
         *
         * If the task definition is used in a blue/green deployment that uses [AWS::CodeDeploy::DeploymentGroup BlueGreenDeploymentConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-bluegreendeploymentconfiguration.html) , the `dependsOn` parameter is not supported. For more information see [Issue #680](https://docs.aws.amazon.com/https://github.com/aws-cloudformation/cloudformation-coverage-roadmap/issues/680) on the on the GitHub website.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-dependson
         */
        readonly dependsOn?: Array<CfnTaskDefinition.ContainerDependencyProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * When this parameter is true, networking is off within the container.
         *
         * This parameter maps to `NetworkDisabled` in the docker container create command.
         *
         * > This parameter is not supported for Windows containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-disablenetworking
         */
        readonly disableNetworking?: boolean | cdk.IResolvable;
        /**
         * A list of DNS search domains that are presented to the container.
         *
         * This parameter maps to `DnsSearch` in the docker container create command and the `--dns-search` option to docker run.
         *
         * > This parameter is not supported for Windows containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-dnssearchdomains
         */
        readonly dnsSearchDomains?: Array<string>;
        /**
         * A list of DNS servers that are presented to the container.
         *
         * This parameter maps to `Dns` in the docker container create command and the `--dns` option to docker run.
         *
         * > This parameter is not supported for Windows containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-dnsservers
         */
        readonly dnsServers?: Array<string>;
        /**
         * A key/value map of labels to add to the container.
         *
         * This parameter maps to `Labels` in the docker container create command and the `--label` option to docker run. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version --format '{{.Server.APIVersion}}'`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-dockerlabels
         */
        readonly dockerLabels?: cdk.IResolvable | Record<string, string>;
        /**
         * A list of strings to provide custom configuration for multiple security systems.
         *
         * This field isn't valid for containers in tasks using the Fargate launch type.
         *
         * For Linux tasks on EC2, this parameter can be used to reference custom labels for SELinux and AppArmor multi-level security systems.
         *
         * For any tasks on EC2, this parameter can be used to reference a credential spec file that configures a container for Active Directory authentication. For more information, see [Using gMSAs for Windows Containers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows-gmsa.html) and [Using gMSAs for Linux Containers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/linux-gmsa.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * This parameter maps to `SecurityOpt` in the docker container create command and the `--security-opt` option to docker run.
         *
         * > The Amazon ECS container agent running on a container instance must register with the `ECS_SELINUX_CAPABLE=true` or `ECS_APPARMOR_CAPABLE=true` environment variables before containers placed on that instance can use these security options. For more information, see [Amazon ECS Container Agent Configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * Valid values: "no-new-privileges" | "apparmor:PROFILE" | "label:value" | "credentialspec:CredentialSpecFilePath"
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-dockersecurityoptions
         */
        readonly dockerSecurityOptions?: Array<string>;
        /**
         * > Early versions of the Amazon ECS container agent don't properly handle `entryPoint` parameters.
         *
         * If you have problems using `entryPoint` , update your container agent or enter your commands and arguments as `command` array items instead.
         *
         * The entry point that's passed to the container. This parameter maps to `Entrypoint` in the docker container create command and the `--entrypoint` option to docker run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-entrypoint
         */
        readonly entryPoint?: Array<string>;
        /**
         * The environment variables to pass to a container.
         *
         * This parameter maps to `Env` in the docker container create command and the `--env` option to docker run.
         *
         * > We don't recommend that you use plaintext environment variables for sensitive information, such as credential data.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-environment
         */
        readonly environment?: Array<cdk.IResolvable | CfnTaskDefinition.KeyValuePairProperty> | cdk.IResolvable;
        /**
         * A list of files containing the environment variables to pass to a container.
         *
         * This parameter maps to the `--env-file` option to docker run.
         *
         * You can specify up to ten environment files. The file must have a `.env` file extension. Each line in an environment file contains an environment variable in `VARIABLE=VALUE` format. Lines beginning with `#` are treated as comments and are ignored.
         *
         * If there are environment variables specified using the `environment` parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see [Specifying Environment Variables](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-environmentfiles
         */
        readonly environmentFiles?: Array<CfnTaskDefinition.EnvironmentFileProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * If the `essential` parameter of a container is marked as `true` , and that container fails or stops for any reason, all other containers that are part of the task are stopped.
         *
         * If the `essential` parameter of a container is marked as `false` , its failure doesn't affect the rest of the containers in a task. If this parameter is omitted, a container is assumed to be essential.
         *
         * All tasks must have at least one essential container. If you have an application that's composed of multiple containers, group containers that are used for a common purpose into components, and separate the different components into multiple task definitions. For more information, see [Application Architecture](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/application_architecture.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-essential
         */
        readonly essential?: boolean | cdk.IResolvable;
        /**
         * A list of hostnames and IP address mappings to append to the `/etc/hosts` file on the container.
         *
         * This parameter maps to `ExtraHosts` in the docker container create command and the `--add-host` option to docker run.
         *
         * > This parameter isn't supported for Windows containers or tasks that use the `awsvpc` network mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-extrahosts
         */
        readonly extraHosts?: Array<CfnTaskDefinition.HostEntryProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The FireLens configuration for the container.
         *
         * This is used to specify and configure a log router for container logs. For more information, see [Custom Log Routing](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-firelensconfiguration
         */
        readonly firelensConfiguration?: CfnTaskDefinition.FirelensConfigurationProperty | cdk.IResolvable;
        /**
         * The container health check command and associated configuration parameters for the container.
         *
         * This parameter maps to `HealthCheck` in the docker container create command and the `HEALTHCHECK` parameter of docker run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-healthcheck
         */
        readonly healthCheck?: CfnTaskDefinition.HealthCheckProperty | cdk.IResolvable;
        /**
         * The hostname to use for your container.
         *
         * This parameter maps to `Hostname` in the docker container create command and the `--hostname` option to docker run.
         *
         * > The `hostname` parameter is not supported if you're using the `awsvpc` network mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-hostname
         */
        readonly hostname?: string;
        /**
         * The image used to start a container.
         *
         * This string is passed directly to the Docker daemon. By default, images in the Docker Hub registry are available. Other repositories are specified with either `*repository-url* / *image* : *tag*` or `*repository-url* / *image* @ *digest*` . Up to 255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs are allowed. This parameter maps to `Image` in the docker container create command and the `IMAGE` parameter of docker run.
         *
         * - When a new task starts, the Amazon ECS container agent pulls the latest version of the specified image and tag for the container to use. However, subsequent updates to a repository image aren't propagated to already running tasks.
         * - Images in Amazon ECR repositories can be specified by either using the full `registry/repository:tag` or `registry/repository@digest` . For example, `012345678910.dkr.ecr.<region-name>.amazonaws.com/<repository-name>:latest` or `012345678910.dkr.ecr.<region-name>.amazonaws.com/<repository-name>@sha256:94afd1f2e64d908bc90dbca0035a5b567EXAMPLE` .
         * - Images in official repositories on Docker Hub use a single name (for example, `ubuntu` or `mongo` ).
         * - Images in other repositories on Docker Hub are qualified with an organization name (for example, `amazon/amazon-ecs-agent` ).
         * - Images in other online repositories are qualified further by a domain name (for example, `quay.io/assemblyline/ubuntu` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-image
         */
        readonly image: string;
        /**
         * When this parameter is `true` , you can deploy containerized applications that require `stdin` or a `tty` to be allocated.
         *
         * This parameter maps to `OpenStdin` in the docker container create command and the `--interactive` option to docker run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-interactive
         */
        readonly interactive?: boolean | cdk.IResolvable;
        /**
         * The `links` parameter allows containers to communicate with each other without the need for port mappings.
         *
         * This parameter is only supported if the network mode of a task definition is `bridge` . The `name:internalName` construct is analogous to `name:alias` in Docker links. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.. This parameter maps to `Links` in the docker container create command and the `--link` option to docker run.
         *
         * > This parameter is not supported for Windows containers. > Containers that are collocated on a single container instance may be able to communicate with each other without requiring links or host port mappings. Network isolation is achieved on the container instance using security groups and VPC settings.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-links
         */
        readonly links?: Array<string>;
        /**
         * Linux-specific modifications that are applied to the container, such as Linux kernel capabilities. For more information see [KernelCapabilities](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html) .
         *
         * > This parameter is not supported for Windows containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-linuxparameters
         */
        readonly linuxParameters?: cdk.IResolvable | CfnTaskDefinition.LinuxParametersProperty;
        /**
         * The log configuration specification for the container.
         *
         * This parameter maps to `LogConfig` in the docker Create a container command and the `--log-driver` option to docker run. By default, containers use the same logging driver that the Docker daemon uses. However, the container may use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see [Configure logging drivers](https://docs.aws.amazon.com/https://docs.docker.com/engine/admin/logging/overview/) in the Docker documentation.
         *
         * > Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the [LogConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_LogConfiguration.html) data type). Additional log drivers may be available in future releases of the Amazon ECS container agent.
         *
         * This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version --format '{{.Server.APIVersion}}'`
         *
         * > The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the `ECS_AVAILABLE_LOGGING_DRIVERS` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Amazon ECS Container Agent Configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-logconfiguration
         */
        readonly logConfiguration?: cdk.IResolvable | CfnTaskDefinition.LogConfigurationProperty;
        /**
         * The amount (in MiB) of memory to present to the container.
         *
         * If your container attempts to exceed the memory specified here, the container is killed. The total amount of memory reserved for all containers within a task must be lower than the task `memory` value, if one is specified. This parameter maps to `Memory` in the [Create a container](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/) and the `--memory` option to [docker run](https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/#security-configuration) .
         *
         * If using the Fargate launch type, this parameter is optional.
         *
         * If using the EC2 launch type, you must specify either a task-level memory value or a container-level memory value. If you specify both a container-level `memory` and `memoryReservation` value, `memory` must be greater than `memoryReservation` . If you specify `memoryReservation` , then that value is subtracted from the available memory resources for the container instance where the container is placed. Otherwise, the value of `memory` is used.
         *
         * The Docker 20.10.0 or later daemon reserves a minimum of 6 MiB of memory for a container, so you should not specify fewer than 6 MiB of memory for your containers.
         *
         * The Docker 19.03.13-ce or earlier daemon reserves a minimum of 4 MiB of memory for a container, so you should not specify fewer than 4 MiB of memory for your containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-memory
         */
        readonly memory?: number;
        /**
         * The soft limit (in MiB) of memory to reserve for the container.
         *
         * When system memory is under heavy contention, Docker attempts to keep the container memory to this soft limit. However, your container can consume more memory when it needs to, up to either the hard limit specified with the `memory` parameter (if applicable), or all of the available memory on the container instance, whichever comes first. This parameter maps to `MemoryReservation` in the docker container create command and the `--memory-reservation` option to docker run.
         *
         * If a task-level memory value is not specified, you must specify a non-zero integer for one or both of `memory` or `memoryReservation` in a container definition. If you specify both, `memory` must be greater than `memoryReservation` . If you specify `memoryReservation` , then that value is subtracted from the available memory resources for the container instance where the container is placed. Otherwise, the value of `memory` is used.
         *
         * For example, if your container normally uses 128 MiB of memory, but occasionally bursts to 256 MiB of memory for short periods of time, you can set a `memoryReservation` of 128 MiB, and a `memory` hard limit of 300 MiB. This configuration would allow the container to only reserve 128 MiB of memory from the remaining resources on the container instance, but also allow the container to consume more memory resources when needed.
         *
         * The Docker 20.10.0 or later daemon reserves a minimum of 6 MiB of memory for a container. So, don't specify less than 6 MiB of memory for your containers.
         *
         * The Docker 19.03.13-ce or earlier daemon reserves a minimum of 4 MiB of memory for a container. So, don't specify less than 4 MiB of memory for your containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-memoryreservation
         */
        readonly memoryReservation?: number;
        /**
         * The mount points for data volumes in your container.
         *
         * This parameter maps to `Volumes` in the docker container create command and the `--volume` option to docker run.
         *
         * Windows containers can mount whole directories on the same drive as `$env:ProgramData` . Windows containers can't mount directories on a different drive, and mount point can't be across drives.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-mountpoints
         */
        readonly mountPoints?: Array<cdk.IResolvable | CfnTaskDefinition.MountPointProperty> | cdk.IResolvable;
        /**
         * The name of a container.
         *
         * If you're linking multiple containers together in a task definition, the `name` of one container can be entered in the `links` of another container to connect the containers. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. This parameter maps to `name` in the docker container create command and the `--name` option to docker run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-name
         */
        readonly name: string;
        /**
         * The list of port mappings for the container.
         *
         * Port mappings allow containers to access ports on the host container instance to send or receive traffic.
         *
         * For task definitions that use the `awsvpc` network mode, you should only specify the `containerPort` . The `hostPort` can be left blank or it must be the same value as the `containerPort` .
         *
         * Port mappings on Windows use the `NetNAT` gateway address rather than `localhost` . There is no loopback for port mappings on Windows, so you cannot access a container's mapped port from the host itself.
         *
         * This parameter maps to `PortBindings` in the [Create a container](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/) and the `--publish` option to [docker run](https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/) . If the network mode of a task definition is set to `none` , then you can't specify port mappings. If the network mode of a task definition is set to `host` , then host ports must either be undefined or they must match the container port in the port mapping.
         *
         * > After a task reaches the `RUNNING` status, manual and automatic host and container port assignments are visible in the *Network Bindings* section of a container description for a selected task in the Amazon ECS console. The assignments are also visible in the `networkBindings` section [DescribeTasks](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html) responses.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-portmappings
         */
        readonly portMappings?: Array<cdk.IResolvable | CfnTaskDefinition.PortMappingProperty> | cdk.IResolvable;
        /**
         * When this parameter is true, the container is given elevated privileges on the host container instance (similar to the `root` user).
         *
         * This parameter maps to `Privileged` in the docker container create command and the `--privileged` option to docker run
         *
         * > This parameter is not supported for Windows containers or tasks run on AWS Fargate .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-privileged
         */
        readonly privileged?: boolean | cdk.IResolvable;
        /**
         * When this parameter is `true` , a TTY is allocated.
         *
         * This parameter maps to `Tty` in the docker container create command and the `--tty` option to docker run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-pseudoterminal
         */
        readonly pseudoTerminal?: boolean | cdk.IResolvable;
        /**
         * When this parameter is true, the container is given read-only access to its root file system.
         *
         * This parameter maps to `ReadonlyRootfs` in the docker container create command and the `--read-only` option to docker run.
         *
         * > This parameter is not supported for Windows containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-readonlyrootfilesystem
         */
        readonly readonlyRootFilesystem?: boolean | cdk.IResolvable;
        /**
         * The private repository authentication credentials to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-repositorycredentials
         */
        readonly repositoryCredentials?: cdk.IResolvable | CfnTaskDefinition.RepositoryCredentialsProperty;
        /**
         * The type and amount of a resource to assign to a container.
         *
         * The only supported resource is a GPU.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-resourcerequirements
         */
        readonly resourceRequirements?: Array<cdk.IResolvable | CfnTaskDefinition.ResourceRequirementProperty> | cdk.IResolvable;
        /**
         * The restart policy for a container.
         *
         * When you set up a restart policy, Amazon ECS can restart the container without needing to replace the task. For more information, see [Restart individual containers in Amazon ECS tasks with container restart policies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-restart-policy.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-restartpolicy
         */
        readonly restartPolicy?: cdk.IResolvable | CfnTaskDefinition.RestartPolicyProperty;
        /**
         * The secrets to pass to the container.
         *
         * For more information, see [Specifying Sensitive Data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-secrets
         */
        readonly secrets?: Array<cdk.IResolvable | CfnTaskDefinition.SecretProperty> | cdk.IResolvable;
        /**
         * Time duration (in seconds) to wait before giving up on resolving dependencies for a container.
         *
         * For example, you specify two containers in a task definition with containerA having a dependency on containerB reaching a `COMPLETE` , `SUCCESS` , or `HEALTHY` status. If a `startTimeout` value is specified for containerB and it doesn't reach the desired status within that time then containerA gives up and not start. This results in the task transitioning to a `STOPPED` state.
         *
         * > When the `ECS_CONTAINER_START_TIMEOUT` container agent configuration variable is used, it's enforced independently from this start timeout value.
         *
         * For tasks using the Fargate launch type, the task or service requires the following platforms:
         *
         * - Linux platform version `1.3.0` or later.
         * - Windows platform version `1.0.0` or later.
         *
         * For tasks using the EC2 launch type, your container instances require at least version `1.26.0` of the container agent to use a container start timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the *Amazon Elastic Container Service Developer Guide* . If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version `1.26.0-1` of the `ecs-init` package. If your container instances are launched from version `20190301` or later, then they contain the required versions of the container agent and `ecs-init` . For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * The valid values for Fargate are 2-120 seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-starttimeout
         */
        readonly startTimeout?: number;
        /**
         * Time duration (in seconds) to wait before the container is forcefully killed if it doesn't exit normally on its own.
         *
         * For tasks using the Fargate launch type, the task or service requires the following platforms:
         *
         * - Linux platform version `1.3.0` or later.
         * - Windows platform version `1.0.0` or later.
         *
         * For tasks that use the Fargate launch type, the max stop timeout value is 120 seconds and if the parameter is not specified, the default value of 30 seconds is used.
         *
         * For tasks that use the EC2 launch type, if the `stopTimeout` parameter isn't specified, the value set for the Amazon ECS container agent configuration variable `ECS_CONTAINER_STOP_TIMEOUT` is used. If neither the `stopTimeout` parameter or the `ECS_CONTAINER_STOP_TIMEOUT` agent configuration variable are set, then the default values of 30 seconds for Linux containers and 30 seconds on Windows containers are used. Your container instances require at least version 1.26.0 of the container agent to use a container stop timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the *Amazon Elastic Container Service Developer Guide* . If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the `ecs-init` package. If your container instances are launched from version `20190301` or later, then they contain the required versions of the container agent and `ecs-init` . For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * The valid values for Fargate are 2-120 seconds.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-stoptimeout
         */
        readonly stopTimeout?: number;
        /**
         * A list of namespaced kernel parameters to set in the container.
         *
         * This parameter maps to `Sysctls` in the docker container create command and the `--sysctl` option to docker run. For example, you can configure `net.ipv4.tcp_keepalive_time` setting to maintain longer lived connections.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-systemcontrols
         */
        readonly systemControls?: Array<cdk.IResolvable | CfnTaskDefinition.SystemControlProperty> | cdk.IResolvable;
        /**
         * A list of `ulimits` to set in the container.
         *
         * This parameter maps to `Ulimits` in the [Create a container](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/) and the `--ulimit` option to [docker run](https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/) . Valid naming values are displayed in the [Ulimit](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_Ulimit.html) data type. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version --format '{{.Server.APIVersion}}'`
         *
         * > This parameter is not supported for Windows containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-ulimits
         */
        readonly ulimits?: Array<cdk.IResolvable | CfnTaskDefinition.UlimitProperty> | cdk.IResolvable;
        /**
         * The user to use inside the container.
         *
         * This parameter maps to `User` in the docker container create command and the `--user` option to docker run.
         *
         * > When running tasks using the `host` network mode, don't run containers using the root user (UID 0). We recommend using a non-root user for better security.
         *
         * You can specify the `user` using the following formats. If specifying a UID or GID, you must specify it as a positive integer.
         *
         * - `user`
         * - `user:group`
         * - `uid`
         * - `uid:gid`
         * - `user:gid`
         * - `uid:group`
         *
         * > This parameter is not supported for Windows containers.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-user
         */
        readonly user?: string;
        /**
         * Specifies whether Amazon ECS will resolve the container image tag provided in the container definition to an image digest.
         *
         * By default, the value is `enabled` . If you set the value for a container as `disabled` , Amazon ECS will not resolve the provided container image tag to a digest and will use the original image URI specified in the container definition for deployment. For more information about container image resolution, see [Container image resolution](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html#deployment-container-image-stability) in the *Amazon ECS Developer Guide* .
         *
         * @default - "enabled"
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-versionconsistency
         */
        readonly versionConsistency?: string;
        /**
         * Data volumes to mount from another container.
         *
         * This parameter maps to `VolumesFrom` in the docker container create command and the `--volumes-from` option to docker run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-volumesfrom
         */
        readonly volumesFrom?: Array<cdk.IResolvable | CfnTaskDefinition.VolumeFromProperty> | cdk.IResolvable;
        /**
         * The working directory to run commands inside the container in.
         *
         * This parameter maps to `WorkingDir` in the docker container create command and the `--workdir` option to docker run.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdefinition.html#cfn-ecs-taskdefinition-containerdefinition-workingdirectory
         */
        readonly workingDirectory?: string;
    }
    /**
     * An object representing the secret to expose to your container.
     *
     * Secrets can be exposed to a container in the following ways:
     *
     * - To inject sensitive data into your containers as environment variables, use the `secrets` container definition parameter.
     * - To reference sensitive information in the log configuration of a container, use the `secretOptions` container definition parameter.
     *
     * For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-secret.html
     */
    interface SecretProperty {
        /**
         * The name of the secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-secret.html#cfn-ecs-taskdefinition-secret-name
         */
        readonly name: string;
        /**
         * The secret to expose to the container.
         *
         * The supported values are either the full ARN of the AWS Secrets Manager secret or the full ARN of the parameter in the SSM Parameter Store.
         *
         * For information about the require AWS Identity and Access Management permissions, see [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-secrets.html#secrets-iam) (for Secrets Manager) or [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-parameters.html) (for Systems Manager Parameter store) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * > If the SSM Parameter Store parameter exists in the same Region as the task you're launching, then you can use either the full ARN or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-secret.html#cfn-ecs-taskdefinition-secret-valuefrom
         */
        readonly valueFrom: string;
    }
    /**
     * The `HealthCheck` property specifies an object representing a container health check.
     *
     * Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image (such as those specified in a parent image or from the image's Dockerfile). This configuration maps to the `HEALTHCHECK` parameter of docker run.
     *
     * > The Amazon ECS container agent only monitors and reports on the health checks specified in the task definition. Amazon ECS does not monitor Docker health checks that are embedded in a container image and not specified in the container definition. Health check parameters that are specified in a container definition override any Docker health checks that exist in the container image.
     *
     * If a task is run manually, and not as part of a service, the task will continue its lifecycle regardless of its health status. For tasks that are part of a service, if the task reports as unhealthy then the task will be stopped and the service scheduler will replace it.
     *
     * The following are notes about container health check support:
     *
     * - Container health checks require version 1.17.0 or greater of the Amazon ECS container agent. For more information, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) .
     * - Container health checks are supported for Fargate tasks if you are using platform version 1.1.0 or greater. For more information, see [AWS Fargate Platform Versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) .
     * - Container health checks are not supported for tasks that are part of a service that is configured to use a Classic Load Balancer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-healthcheck.html
     */
    interface HealthCheckProperty {
        /**
         * A string array representing the command that the container runs to determine if it is healthy.
         *
         * The string array must start with `CMD` to run the command arguments directly, or `CMD-SHELL` to run the command with the container's default shell.
         *
         * When you use the AWS Management Console JSON panel, the AWS Command Line Interface , or the APIs, enclose the list of commands in double quotes and brackets.
         *
         * `[ "CMD-SHELL", "curl -f http://localhost/ || exit 1" ]`
         *
         * You don't include the double quotes and brackets when you use the AWS Management Console.
         *
         * `CMD-SHELL, curl -f http://localhost/ || exit 1`
         *
         * An exit code of 0 indicates success, and non-zero exit code indicates failure. For more information, see `HealthCheck` in the docker container create command.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-healthcheck.html#cfn-ecs-taskdefinition-healthcheck-command
         */
        readonly command?: Array<string>;
        /**
         * The time period in seconds between each health check execution.
         *
         * You may specify between 5 and 300 seconds. The default value is 30 seconds. This value applies only when you specify a `command` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-healthcheck.html#cfn-ecs-taskdefinition-healthcheck-interval
         */
        readonly interval?: number;
        /**
         * The number of times to retry a failed health check before the container is considered unhealthy.
         *
         * You may specify between 1 and 10 retries. The default value is 3. This value applies only when you specify a `command` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-healthcheck.html#cfn-ecs-taskdefinition-healthcheck-retries
         */
        readonly retries?: number;
        /**
         * The optional grace period to provide containers time to bootstrap before failed health checks count towards the maximum number of retries.
         *
         * You can specify between 0 and 300 seconds. By default, the `startPeriod` is off. This value applies only when you specify a `command` .
         *
         * > If a health check succeeds within the `startPeriod` , then the container is considered healthy and any subsequent failures count toward the maximum number of retries.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-healthcheck.html#cfn-ecs-taskdefinition-healthcheck-startperiod
         */
        readonly startPeriod?: number;
        /**
         * The time period in seconds to wait for a health check to succeed before it is considered a failure.
         *
         * You may specify between 2 and 60 seconds. The default value is 5. This value applies only when you specify a `command` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-healthcheck.html#cfn-ecs-taskdefinition-healthcheck-timeout
         */
        readonly timeout?: number;
    }
    /**
     * Details on a data volume from another container in the same task definition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-volumefrom.html
     */
    interface VolumeFromProperty {
        /**
         * If this value is `true` , the container has read-only access to the volume.
         *
         * If this value is `false` , then the container can write to the volume. The default value is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-volumefrom.html#cfn-ecs-taskdefinition-volumefrom-readonly
         */
        readonly readOnly?: boolean | cdk.IResolvable;
        /**
         * The name of another container within the same task definition to mount volumes from.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-volumefrom.html#cfn-ecs-taskdefinition-volumefrom-sourcecontainer
         */
        readonly sourceContainer?: string;
    }
    /**
     * The `LogConfiguration` property specifies log configuration options to send to a custom log driver for the container.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-logconfiguration.html
     */
    interface LogConfigurationProperty {
        /**
         * The log driver to use for the container.
         *
         * For tasks on AWS Fargate , the supported log drivers are `awslogs` , `splunk` , and `awsfirelens` .
         *
         * For tasks hosted on Amazon EC2 instances, the supported log drivers are `awslogs` , `fluentd` , `gelf` , `json-file` , `journald` , `syslog` , `splunk` , and `awsfirelens` .
         *
         * For more information about using the `awslogs` log driver, see [Send Amazon ECS logs to CloudWatch](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * For more information about using the `awsfirelens` log driver, see [Send Amazon ECS logs to an AWS service or AWS Partner](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html) .
         *
         * > If you have a custom driver that isn't listed, you can fork the Amazon ECS container agent project that's [available on GitHub](https://docs.aws.amazon.com/https://github.com/aws/amazon-ecs-agent) and customize it to work with that driver. We encourage you to submit pull requests for changes that you would like to have included. However, we don't currently provide support for running modified copies of this software.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-logconfiguration.html#cfn-ecs-taskdefinition-logconfiguration-logdriver
         */
        readonly logDriver: string;
        /**
         * The configuration options to send to the log driver.
         *
         * The options you can specify depend on the log driver. Some of the options you can specify when you use the `awslogs` log driver to route logs to Amazon CloudWatch include the following:
         *
         * - **awslogs-create-group** - Required: No
         *
         * Specify whether you want the log group to be created automatically. If this option isn't specified, it defaults to `false` .
         *
         * > Your IAM policy must include the `logs:CreateLogGroup` permission before you attempt to use `awslogs-create-group` .
         * - **awslogs-region** - Required: Yes
         *
         * Specify the AWS Region that the `awslogs` log driver is to send your Docker logs to. You can choose to send all of your logs from clusters in different Regions to a single region in CloudWatch Logs. This is so that they're all visible in one location. Otherwise, you can separate them by Region for more granularity. Make sure that the specified log group exists in the Region that you specify with this option.
         * - **awslogs-group** - Required: Yes
         *
         * Make sure to specify a log group that the `awslogs` log driver sends its log streams to.
         * - **awslogs-stream-prefix** - Required: Yes, when using the Fargate launch type.Optional for the EC2 launch type, required for the Fargate launch type.
         *
         * Use the `awslogs-stream-prefix` option to associate a log stream with the specified prefix, the container name, and the ID of the Amazon ECS task that the container belongs to. If you specify a prefix with this option, then the log stream takes the format `prefix-name/container-name/ecs-task-id` .
         *
         * If you don't specify a prefix with this option, then the log stream is named after the container ID that's assigned by the Docker daemon on the container instance. Because it's difficult to trace logs back to the container that sent them with just the Docker container ID (which is only available on the container instance), we recommend that you specify a prefix with this option.
         *
         * For Amazon ECS services, you can use the service name as the prefix. Doing so, you can trace log streams to the service that the container belongs to, the name of the container that sent them, and the ID of the task that the container belongs to.
         *
         * You must specify a stream-prefix for your logs to have your logs appear in the Log pane when using the Amazon ECS console.
         * - **awslogs-datetime-format** - Required: No
         *
         * This option defines a multiline start pattern in Python `strftime` format. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages.
         *
         * One example of a use case for using this format is for parsing output such as a stack dump, which might otherwise be logged in multiple entries. The correct pattern allows it to be captured in a single entry.
         *
         * For more information, see [awslogs-datetime-format](https://docs.aws.amazon.com/https://docs.docker.com/config/containers/logging/awslogs/#awslogs-datetime-format) .
         *
         * You cannot configure both the `awslogs-datetime-format` and `awslogs-multiline-pattern` options.
         *
         * > Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance.
         * - **awslogs-multiline-pattern** - Required: No
         *
         * This option defines a multiline start pattern that uses a regular expression. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages.
         *
         * For more information, see [awslogs-multiline-pattern](https://docs.aws.amazon.com/https://docs.docker.com/config/containers/logging/awslogs/#awslogs-multiline-pattern) .
         *
         * This option is ignored if `awslogs-datetime-format` is also configured.
         *
         * You cannot configure both the `awslogs-datetime-format` and `awslogs-multiline-pattern` options.
         *
         * > Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance.
         * - **mode** - Required: No
         *
         * Valid values: `non-blocking` | `blocking`
         *
         * This option defines the delivery mode of log messages from the container to CloudWatch Logs. The delivery mode you choose affects application availability when the flow of logs from container to CloudWatch is interrupted.
         *
         * If you use the `blocking` mode and the flow of logs to CloudWatch is interrupted, calls from container code to write to the `stdout` and `stderr` streams will block. The logging thread of the application will block as a result. This may cause the application to become unresponsive and lead to container healthcheck failure.
         *
         * If you use the `non-blocking` mode, the container's logs are instead stored in an in-memory intermediate buffer configured with the `max-buffer-size` option. This prevents the application from becoming unresponsive when logs cannot be sent to CloudWatch. We recommend using this mode if you want to ensure service availability and are okay with some log loss. For more information, see [Preventing log loss with non-blocking mode in the `awslogs` container log driver](https://docs.aws.amazon.com/containers/preventing-log-loss-with-non-blocking-mode-in-the-awslogs-container-log-driver/) .
         * - **max-buffer-size** - Required: No
         *
         * Default value: `1m`
         *
         * When `non-blocking` mode is used, the `max-buffer-size` log option controls the size of the buffer that's used for intermediate message storage. Make sure to specify an adequate buffer size based on your application. When the buffer fills up, further logs cannot be stored. Logs that cannot be stored are lost.
         *
         * To route logs using the `splunk` log router, you need to specify a `splunk-token` and a `splunk-url` .
         *
         * When you use the `awsfirelens` log router to route logs to an AWS Service or AWS Partner Network destination for log storage and analytics, you can set the `log-driver-buffer-limit` option to limit the number of events that are buffered in memory, before being sent to the log router container. It can help to resolve potential log loss issue because high throughput might result in memory running out for the buffer inside of Docker.
         *
         * Other options you can specify when using `awsfirelens` to route logs depend on the destination. When you export logs to Amazon Data Firehose, you can specify the AWS Region with `region` and a name for the log stream with `delivery_stream` .
         *
         * When you export logs to Amazon Kinesis Data Streams, you can specify an AWS Region with `region` and a data stream name with `stream` .
         *
         * When you export logs to Amazon OpenSearch Service, you can specify options like `Name` , `Host` (OpenSearch Service endpoint without protocol), `Port` , `Index` , `Type` , `Aws_auth` , `Aws_region` , `Suppress_Type_Name` , and `tls` . For more information, see [Under the hood: FireLens for Amazon ECS Tasks](https://docs.aws.amazon.com/containers/under-the-hood-firelens-for-amazon-ecs-tasks/) .
         *
         * When you export logs to Amazon S3, you can specify the bucket using the `bucket` option. You can also specify `region` , `total_file_size` , `upload_timeout` , and `use_put_object` as options.
         *
         * This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version --format '{{.Server.APIVersion}}'`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-logconfiguration.html#cfn-ecs-taskdefinition-logconfiguration-options
         */
        readonly options?: cdk.IResolvable | Record<string, string>;
        /**
         * The secrets to pass to the log configuration.
         *
         * For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-logconfiguration.html#cfn-ecs-taskdefinition-logconfiguration-secretoptions
         */
        readonly secretOptions?: Array<cdk.IResolvable | CfnTaskDefinition.SecretProperty> | cdk.IResolvable;
    }
    /**
     * The type and amount of a resource to assign to a container.
     *
     * The supported resource types are GPUs and Elastic Inference accelerators. For more information, see [Working with GPUs on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-gpu.html) or [Working with Amazon Elastic Inference on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-inference.html) in the *Amazon Elastic Container Service Developer Guide*
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-resourcerequirement.html
     */
    interface ResourceRequirementProperty {
        /**
         * The type of resource to assign to a container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-resourcerequirement.html#cfn-ecs-taskdefinition-resourcerequirement-type
         */
        readonly type: string;
        /**
         * The value for the specified resource type.
         *
         * When the type is `GPU` , the value is the number of physical `GPUs` the Amazon ECS container agent reserves for the container. The number of GPUs that's reserved for all containers in a task can't exceed the number of available GPUs on the container instance that the task is launched on.
         *
         * When the type is `InferenceAccelerator` , the `value` matches the `deviceName` for an [InferenceAccelerator](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_InferenceAccelerator.html) specified in a task definition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-resourcerequirement.html#cfn-ecs-taskdefinition-resourcerequirement-value
         */
        readonly value: string;
    }
    /**
     * A list of files containing the environment variables to pass to a container.
     *
     * You can specify up to ten environment files. The file must have a `.env` file extension. Each line in an environment file should contain an environment variable in `VARIABLE=VALUE` format. Lines beginning with `#` are treated as comments and are ignored.
     *
     * If there are environment variables specified using the `environment` parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see [Use a file to pass environment variables to a container](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/use-environment-file.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * Environment variable files are objects in Amazon S3 and all Amazon S3 security considerations apply.
     *
     * You must use the following platforms for the Fargate launch type:
     *
     * - Linux platform version `1.4.0` or later.
     * - Windows platform version `1.0.0` or later.
     *
     * Consider the following when using the Fargate launch type:
     *
     * - The file is handled like a native Docker env-file.
     * - There is no support for shell escape handling.
     * - The container entry point interperts the `VARIABLE` values.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-environmentfile.html
     */
    interface EnvironmentFileProperty {
        /**
         * The file type to use.
         *
         * Environment files are objects in Amazon S3. The only supported value is `s3` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-environmentfile.html#cfn-ecs-taskdefinition-environmentfile-type
         */
        readonly type?: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon S3 object containing the environment variable file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-environmentfile.html#cfn-ecs-taskdefinition-environmentfile-value
         */
        readonly value?: string;
    }
    /**
     * The FireLens configuration for the container.
     *
     * This is used to specify and configure a log router for container logs. For more information, see [Custom log routing](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-firelensconfiguration.html
     */
    interface FirelensConfigurationProperty {
        /**
         * The options to use when configuring the log router.
         *
         * This field is optional and can be used to add additional metadata, such as the task, task definition, cluster, and container instance details to the log event.
         *
         * If specified, valid option keys are:
         *
         * - `enable-ecs-log-metadata` , which can be `true` or `false`
         * - `config-file-type` , which can be `s3` or `file`
         * - `config-file-value` , which is either an S3 ARN or a file path
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-firelensconfiguration.html#cfn-ecs-taskdefinition-firelensconfiguration-options
         */
        readonly options?: cdk.IResolvable | Record<string, string>;
        /**
         * The log router to use.
         *
         * The valid values are `fluentd` or `fluentbit` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-firelensconfiguration.html#cfn-ecs-taskdefinition-firelensconfiguration-type
         */
        readonly type?: string;
    }
    /**
     * A list of namespaced kernel parameters to set in the container.
     *
     * This parameter maps to `Sysctls` in the docker container create command and the `--sysctl` option to docker run. For example, you can configure `net.ipv4.tcp_keepalive_time` setting to maintain longer lived connections.
     *
     * We don't recommend that you specify network-related `systemControls` parameters for multiple containers in a single task that also uses either the `awsvpc` or `host` network mode. Doing this has the following disadvantages:
     *
     * - For tasks that use the `awsvpc` network mode including Fargate, if you set `systemControls` for any container, it applies to all containers in the task. If you set different `systemControls` for multiple containers in a single task, the container that's started last determines which `systemControls` take effect.
     * - For tasks that use the `host` network mode, the network namespace `systemControls` aren't supported.
     *
     * If you're setting an IPC resource namespace to use for the containers in the task, the following conditions apply to your system controls. For more information, see [IPC mode](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_definition_ipcmode) .
     *
     * - For tasks that use the `host` IPC mode, IPC namespace `systemControls` aren't supported.
     * - For tasks that use the `task` IPC mode, IPC namespace `systemControls` values apply to all containers within a task.
     *
     * > This parameter is not supported for Windows containers. > This parameter is only supported for tasks that are hosted on AWS Fargate if the tasks are using platform version `1.4.0` or later (Linux). This isn't supported for Windows containers on Fargate.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-systemcontrol.html
     */
    interface SystemControlProperty {
        /**
         * The namespaced kernel parameter to set a `value` for.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-systemcontrol.html#cfn-ecs-taskdefinition-systemcontrol-namespace
         */
        readonly namespace?: string;
        /**
         * The namespaced kernel parameter to set a `value` for.
         *
         * Valid IPC namespace values: `"kernel.msgmax" | "kernel.msgmnb" | "kernel.msgmni" | "kernel.sem" | "kernel.shmall" | "kernel.shmmax" | "kernel.shmmni" | "kernel.shm_rmid_forced"` , and `Sysctls` that start with `"fs.mqueue.*"`
         *
         * Valid network namespace values: `Sysctls` that start with `"net.*"`
         *
         * All of these values are supported by Fargate.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-systemcontrol.html#cfn-ecs-taskdefinition-systemcontrol-value
         */
        readonly value?: string;
    }
    /**
     * The `ulimit` settings to pass to the container.
     *
     * Amazon ECS tasks hosted on AWS Fargate use the default resource limit values set by the operating system with the exception of the `nofile` resource limit parameter which AWS Fargate overrides. The `nofile` resource limit sets a restriction on the number of open files that a container can use. The default `nofile` soft limit is `65535` and the default hard limit is `65535` .
     *
     * You can specify the `ulimit` settings for a container in a task definition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-ulimit.html
     */
    interface UlimitProperty {
        /**
         * The hard limit for the `ulimit` type.
         *
         * The value can be specified in bytes, seconds, or as a count, depending on the `type` of the `ulimit` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-ulimit.html#cfn-ecs-taskdefinition-ulimit-hardlimit
         */
        readonly hardLimit: number;
        /**
         * The `type` of the `ulimit` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-ulimit.html#cfn-ecs-taskdefinition-ulimit-name
         */
        readonly name: string;
        /**
         * The soft limit for the `ulimit` type.
         *
         * The value can be specified in bytes, seconds, or as a count, depending on the `type` of the `ulimit` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-ulimit.html#cfn-ecs-taskdefinition-ulimit-softlimit
         */
        readonly softLimit: number;
    }
    /**
     * The repository credentials for private registry authentication.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-repositorycredentials.html
     */
    interface RepositoryCredentialsProperty {
        /**
         * The Amazon Resource Name (ARN) of the secret containing the private repository credentials.
         *
         * > When you use the Amazon ECS API, AWS CLI , or AWS SDK, if the secret exists in the same Region as the task that you're launching then you can use either the full ARN or the name of the secret. When you use the AWS Management Console, you must specify the full ARN of the secret.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-repositorycredentials.html#cfn-ecs-taskdefinition-repositorycredentials-credentialsparameter
         */
        readonly credentialsParameter?: string;
    }
    /**
     * The `HostEntry` property specifies a hostname and an IP address that are added to the `/etc/hosts` file of a container through the `extraHosts` parameter of its `ContainerDefinition` resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-hostentry.html
     */
    interface HostEntryProperty {
        /**
         * The hostname to use in the `/etc/hosts` entry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-hostentry.html#cfn-ecs-taskdefinition-hostentry-hostname
         */
        readonly hostname?: string;
        /**
         * The IP address to use in the `/etc/hosts` entry.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-hostentry.html#cfn-ecs-taskdefinition-hostentry-ipaddress
         */
        readonly ipAddress?: string;
    }
    /**
     * The Linux-specific options that are applied to the container, such as Linux [KernelCapabilities](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-linuxparameters.html
     */
    interface LinuxParametersProperty {
        /**
         * The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
         *
         * > For tasks that use the Fargate launch type, `capabilities` is supported for all platform versions but the `add` parameter is only supported if using platform version 1.4.0 or later.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-linuxparameters.html#cfn-ecs-taskdefinition-linuxparameters-capabilities
         */
        readonly capabilities?: cdk.IResolvable | CfnTaskDefinition.KernelCapabilitiesProperty;
        /**
         * Any host devices to expose to the container.
         *
         * This parameter maps to `Devices` in the docker container create command and the `--device` option to docker run.
         *
         * > If you're using tasks that use the Fargate launch type, the `devices` parameter isn't supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-linuxparameters.html#cfn-ecs-taskdefinition-linuxparameters-devices
         */
        readonly devices?: Array<CfnTaskDefinition.DeviceProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Run an `init` process inside the container that forwards signals and reaps processes.
         *
         * This parameter maps to the `--init` option to docker run. This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: `sudo docker version --format '{{.Server.APIVersion}}'`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-linuxparameters.html#cfn-ecs-taskdefinition-linuxparameters-initprocessenabled
         */
        readonly initProcessEnabled?: boolean | cdk.IResolvable;
        /**
         * The total amount of swap memory (in MiB) a container can use.
         *
         * This parameter will be translated to the `--memory-swap` option to docker run where the value would be the sum of the container memory plus the `maxSwap` value.
         *
         * If a `maxSwap` value of `0` is specified, the container will not use swap. Accepted values are `0` or any positive integer. If the `maxSwap` parameter is omitted, the container will use the swap configuration for the container instance it is running on. A `maxSwap` value must be set for the `swappiness` parameter to be used.
         *
         * > If you're using tasks that use the Fargate launch type, the `maxSwap` parameter isn't supported.
         * >
         * > If you're using tasks on Amazon Linux 2023 the `swappiness` parameter isn't supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-linuxparameters.html#cfn-ecs-taskdefinition-linuxparameters-maxswap
         */
        readonly maxSwap?: number;
        /**
         * The value for the size (in MiB) of the `/dev/shm` volume.
         *
         * This parameter maps to the `--shm-size` option to docker run.
         *
         * > If you are using tasks that use the Fargate launch type, the `sharedMemorySize` parameter is not supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-linuxparameters.html#cfn-ecs-taskdefinition-linuxparameters-sharedmemorysize
         */
        readonly sharedMemorySize?: number;
        /**
         * This allows you to tune a container's memory swappiness behavior.
         *
         * A `swappiness` value of `0` will cause swapping to not happen unless absolutely necessary. A `swappiness` value of `100` will cause pages to be swapped very aggressively. Accepted values are whole numbers between `0` and `100` . If the `swappiness` parameter is not specified, a default value of `60` is used. If a value is not specified for `maxSwap` then this parameter is ignored. This parameter maps to the `--memory-swappiness` option to docker run.
         *
         * > If you're using tasks that use the Fargate launch type, the `swappiness` parameter isn't supported.
         * >
         * > If you're using tasks on Amazon Linux 2023 the `swappiness` parameter isn't supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-linuxparameters.html#cfn-ecs-taskdefinition-linuxparameters-swappiness
         */
        readonly swappiness?: number;
        /**
         * The container path, mount options, and size (in MiB) of the tmpfs mount.
         *
         * This parameter maps to the `--tmpfs` option to docker run.
         *
         * > If you're using tasks that use the Fargate launch type, the `tmpfs` parameter isn't supported.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-linuxparameters.html#cfn-ecs-taskdefinition-linuxparameters-tmpfs
         */
        readonly tmpfs?: Array<cdk.IResolvable | CfnTaskDefinition.TmpfsProperty> | cdk.IResolvable;
    }
    /**
     * The Linux capabilities to add or remove from the default Docker configuration for a container defined in the task definition.
     *
     * For more detailed information about these Linux capabilities, see the [capabilities(7)](https://docs.aws.amazon.com/http://man7.org/linux/man-pages/man7/capabilities.7.html) Linux manual page.
     *
     * The following describes how Docker processes the Linux capabilities specified in the `add` and `drop` request parameters. For information about the latest behavior, see [Docker Compose: order of cap_drop and cap_add](https://docs.aws.amazon.com/https://forums.docker.com/t/docker-compose-order-of-cap-drop-and-cap-add/97136/1) in the Docker Community Forum.
     *
     * - When the container is a privleged container, the container capabilities are all of the default Docker capabilities. The capabilities specified in the `add` request parameter, and the `drop` request parameter are ignored.
     * - When the `add` request parameter is set to ALL, the container capabilities are all of the default Docker capabilities, excluding those specified in the `drop` request parameter.
     * - When the `drop` request parameter is set to ALL, the container capabilities are the capabilities specified in the `add` request parameter.
     * - When the `add` request parameter and the `drop` request parameter are both empty, the capabilities the container capabilities are all of the default Docker capabilities.
     * - The default is to first drop the capabilities specified in the `drop` request parameter, and then add the capabilities specified in the `add` request parameter.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-kernelcapabilities.html
     */
    interface KernelCapabilitiesProperty {
        /**
         * The Linux capabilities for the container that have been added to the default configuration provided by Docker.
         *
         * This parameter maps to `CapAdd` in the docker container create command and the `--cap-add` option to docker run.
         *
         * > Tasks launched on AWS Fargate only support adding the `SYS_PTRACE` kernel capability.
         *
         * Valid values: `"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" | "CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" | "IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" | "MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP" | "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" | "SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" | "SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" | "WAKE_ALARM"`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-kernelcapabilities.html#cfn-ecs-taskdefinition-kernelcapabilities-add
         */
        readonly add?: Array<string>;
        /**
         * The Linux capabilities for the container that have been removed from the default configuration provided by Docker.
         *
         * This parameter maps to `CapDrop` in the docker container create command and the `--cap-drop` option to docker run.
         *
         * Valid values: `"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" | "CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" | "IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" | "MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP" | "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" | "SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" | "SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" | "WAKE_ALARM"`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-kernelcapabilities.html#cfn-ecs-taskdefinition-kernelcapabilities-drop
         */
        readonly drop?: Array<string>;
    }
    /**
     * The container path, mount options, and size of the tmpfs mount.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-tmpfs.html
     */
    interface TmpfsProperty {
        /**
         * The absolute file path where the tmpfs volume is to be mounted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-tmpfs.html#cfn-ecs-taskdefinition-tmpfs-containerpath
         */
        readonly containerPath?: string;
        /**
         * The list of tmpfs volume mount options.
         *
         * Valid values: `"defaults" | "ro" | "rw" | "suid" | "nosuid" | "dev" | "nodev" | "exec" | "noexec" | "sync" | "async" | "dirsync" | "remount" | "mand" | "nomand" | "atime" | "noatime" | "diratime" | "nodiratime" | "bind" | "rbind" | "unbindable" | "runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime" | "norelatime" | "strictatime" | "nostrictatime" | "mode" | "uid" | "gid" | "nr_inodes" | "nr_blocks" | "mpol"`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-tmpfs.html#cfn-ecs-taskdefinition-tmpfs-mountoptions
         */
        readonly mountOptions?: Array<string>;
        /**
         * The maximum size (in MiB) of the tmpfs volume.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-tmpfs.html#cfn-ecs-taskdefinition-tmpfs-size
         */
        readonly size: number;
    }
    /**
     * The `Device` property specifies an object representing a container instance host device.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-device.html
     */
    interface DeviceProperty {
        /**
         * The path inside the container at which to expose the host device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-device.html#cfn-ecs-taskdefinition-device-containerpath
         */
        readonly containerPath?: string;
        /**
         * The path for the device on the host container instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-device.html#cfn-ecs-taskdefinition-device-hostpath
         */
        readonly hostPath?: string;
        /**
         * The explicit permissions to provide to the container for the device.
         *
         * By default, the container has permissions for `read` , `write` , and `mknod` for the device.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-device.html#cfn-ecs-taskdefinition-device-permissions
         */
        readonly permissions?: Array<string>;
    }
    /**
     * The details for a volume mount point that's used in a container definition.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-mountpoint.html
     */
    interface MountPointProperty {
        /**
         * The path on the container to mount the host volume at.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-mountpoint.html#cfn-ecs-taskdefinition-mountpoint-containerpath
         */
        readonly containerPath?: string;
        /**
         * If this value is `true` , the container has read-only access to the volume.
         *
         * If this value is `false` , then the container can write to the volume. The default value is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-mountpoint.html#cfn-ecs-taskdefinition-mountpoint-readonly
         */
        readonly readOnly?: boolean | cdk.IResolvable;
        /**
         * The name of the volume to mount.
         *
         * Must be a volume name referenced in the `name` parameter of task definition `volume` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-mountpoint.html#cfn-ecs-taskdefinition-mountpoint-sourcevolume
         */
        readonly sourceVolume?: string;
    }
    /**
     * The `ContainerDependency` property specifies the dependencies defined for container startup and shutdown.
     *
     * A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed.
     *
     * Your Amazon ECS container instances require at least version 1.26.0 of the container agent to enable container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the *Amazon Elastic Container Service Developer Guide* . If you are using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the `ecs-init` package. If your container instances are launched from version `20190301` or later, then they contain the required versions of the container agent and `ecs-init` . For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * > For tasks using the Fargate launch type, this parameter requires that the task or service uses platform version 1.3.0 or later.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdependency.html
     */
    interface ContainerDependencyProperty {
        /**
         * The dependency condition of the container. The following are the available conditions and their behavior:.
         *
         * - `START` - This condition emulates the behavior of links and volumes today. It validates that a dependent container is started before permitting other containers to start.
         * - `COMPLETE` - This condition validates that a dependent container runs to completion (exits) before permitting other containers to start. This can be useful for nonessential containers that run a script and then exit. This condition can't be set on an essential container.
         * - `SUCCESS` - This condition is the same as `COMPLETE` , but it also requires that the container exits with a `zero` status. This condition can't be set on an essential container.
         * - `HEALTHY` - This condition validates that the dependent container passes its Docker health check before permitting other containers to start. This requires that the dependent container has health checks configured. This condition is confirmed only at task startup.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdependency.html#cfn-ecs-taskdefinition-containerdependency-condition
         */
        readonly condition?: string;
        /**
         * The name of a container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-containerdependency.html#cfn-ecs-taskdefinition-containerdependency-containername
         */
        readonly containerName?: string;
    }
    /**
     * The `PortMapping` property specifies a port mapping.
     *
     * Port mappings allow containers to access ports on the host container instance to send or receive traffic. Port mappings are specified as part of the container definition.
     *
     * If you are using containers in a task with the `awsvpc` or `host` network mode, exposed ports should be specified using `containerPort` . The `hostPort` can be left blank or it must be the same value as the `containerPort` .
     *
     * After a task reaches the `RUNNING` status, manual and automatic host and container port assignments are visible in the `networkBindings` section of [DescribeTasks](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html) API responses.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-portmapping.html
     */
    interface PortMappingProperty {
        /**
         * The application protocol that's used for the port mapping.
         *
         * This parameter only applies to Service Connect. We recommend that you set this parameter to be consistent with the protocol that your application uses. If you set this parameter, Amazon ECS adds protocol-specific connection handling to the Service Connect proxy. If you set this parameter, Amazon ECS adds protocol-specific telemetry in the Amazon ECS console and CloudWatch.
         *
         * If you don't set a value for this parameter, then TCP is used. However, Amazon ECS doesn't add protocol-specific telemetry for TCP.
         *
         * `appProtocol` is immutable in a Service Connect service. Updating this field requires a service deletion and redeployment.
         *
         * Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-portmapping.html#cfn-ecs-taskdefinition-portmapping-appprotocol
         */
        readonly appProtocol?: string;
        /**
         * The port number on the container that's bound to the user-specified or automatically assigned host port.
         *
         * If you use containers in a task with the `awsvpc` or `host` network mode, specify the exposed ports using `containerPort` .
         *
         * If you use containers in a task with the `bridge` network mode and you specify a container port and not a host port, your container automatically receives a host port in the ephemeral port range. For more information, see `hostPort` . Port mappings that are automatically assigned in this way do not count toward the 100 reserved ports limit of a container instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-portmapping.html#cfn-ecs-taskdefinition-portmapping-containerport
         */
        readonly containerPort?: number;
        /**
         * The port number range on the container that's bound to the dynamically mapped host port range.
         *
         * The following rules apply when you specify a `containerPortRange` :
         *
         * - You must use either the `bridge` network mode or the `awsvpc` network mode.
         * - This parameter is available for both the EC2 and AWS Fargate launch types.
         * - This parameter is available for both the Linux and Windows operating systems.
         * - The container instance must have at least version 1.67.0 of the container agent and at least version 1.67.0-1 of the `ecs-init` package
         * - You can specify a maximum of 100 port ranges per container.
         * - You do not specify a `hostPortRange` . The value of the `hostPortRange` is set as follows:
         *
         * - For containers in a task with the `awsvpc` network mode, the `hostPortRange` is set to the same value as the `containerPortRange` . This is a static mapping strategy.
         * - For containers in a task with the `bridge` network mode, the Amazon ECS agent finds open host ports from the default ephemeral range and passes it to docker to bind them to the container ports.
         * - The `containerPortRange` valid values are between 1 and 65535.
         * - A port can only be included in one port mapping per container.
         * - You cannot specify overlapping port ranges.
         * - The first port in the range must be less than last port in the range.
         * - Docker recommends that you turn off the docker-proxy in the Docker daemon config file when you have a large number of ports.
         *
         * For more information, see [Issue #11185](https://docs.aws.amazon.com/https://github.com/moby/moby/issues/11185) on the Github website.
         *
         * For information about how to turn off the docker-proxy in the Docker daemon config file, see [Docker daemon](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/bootstrap_container_instance.html#bootstrap_docker_daemon) in the *Amazon ECS Developer Guide* .
         *
         * You can call [`DescribeTasks`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html) to view the `hostPortRange` which are the host ports that are bound to the container ports.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-portmapping.html#cfn-ecs-taskdefinition-portmapping-containerportrange
         */
        readonly containerPortRange?: string;
        /**
         * The port number on the container instance to reserve for your container.
         *
         * If you specify a `containerPortRange` , leave this field empty and the value of the `hostPort` is set as follows:
         *
         * - For containers in a task with the `awsvpc` network mode, the `hostPort` is set to the same value as the `containerPort` . This is a static mapping strategy.
         * - For containers in a task with the `bridge` network mode, the Amazon ECS agent finds open ports on the host and automatically binds them to the container ports. This is a dynamic mapping strategy.
         *
         * If you use containers in a task with the `awsvpc` or `host` network mode, the `hostPort` can either be left blank or set to the same value as the `containerPort` .
         *
         * If you use containers in a task with the `bridge` network mode, you can specify a non-reserved host port for your container port mapping, or you can omit the `hostPort` (or set it to `0` ) while specifying a `containerPort` and your container automatically receives a port in the ephemeral port range for your container instance operating system and Docker version.
         *
         * The default ephemeral port range for Docker version 1.6.0 and later is listed on the instance under `/proc/sys/net/ipv4/ip_local_port_range` . If this kernel parameter is unavailable, the default ephemeral port range from 49153 through 65535 (Linux) or 49152 through 65535 (Windows) is used. Do not attempt to specify a host port in the ephemeral port range as these are reserved for automatic assignment. In general, ports below 32768 are outside of the ephemeral port range.
         *
         * The default reserved ports are 22 for SSH, the Docker ports 2375 and 2376, and the Amazon ECS container agent ports 51678-51680. Any host port that was previously specified in a running task is also reserved while the task is running. That is, after a task stops, the host port is released. The current reserved ports are displayed in the `remainingResources` of [DescribeContainerInstances](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeContainerInstances.html) output. A container instance can have up to 100 reserved ports at a time. This number includes the default reserved ports. Automatically assigned ports aren't included in the 100 reserved ports quota.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-portmapping.html#cfn-ecs-taskdefinition-portmapping-hostport
         */
        readonly hostPort?: number;
        /**
         * The name that's used for the port mapping.
         *
         * This parameter is the name that you use in the `serviceConnectConfiguration` and the `vpcLatticeConfigurations` of a service. The name can include up to 64 characters. The characters can include lowercase letters, numbers, underscores (_), and hyphens (-). The name can't start with a hyphen.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-portmapping.html#cfn-ecs-taskdefinition-portmapping-name
         */
        readonly name?: string;
        /**
         * The protocol used for the port mapping.
         *
         * Valid values are `tcp` and `udp` . The default is `tcp` . `protocol` is immutable in a Service Connect service. Updating this field requires a service deletion and redeployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-portmapping.html#cfn-ecs-taskdefinition-portmapping-protocol
         */
        readonly protocol?: string;
    }
    /**
     * You can enable a restart policy for each container defined in your task definition, to overcome transient failures faster and maintain task availability.
     *
     * When you enable a restart policy for a container, Amazon ECS can restart the container if it exits, without needing to replace the task. For more information, see [Restart individual containers in Amazon ECS tasks with container restart policies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-restart-policy.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-restartpolicy.html
     */
    interface RestartPolicyProperty {
        /**
         * Specifies whether a restart policy is enabled for the container.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-restartpolicy.html#cfn-ecs-taskdefinition-restartpolicy-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * A list of exit codes that Amazon ECS will ignore and not attempt a restart on.
         *
         * You can specify a maximum of 50 container exit codes. By default, Amazon ECS does not ignore any exit codes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-restartpolicy.html#cfn-ecs-taskdefinition-restartpolicy-ignoredexitcodes
         */
        readonly ignoredExitCodes?: Array<number> | cdk.IResolvable;
        /**
         * A period of time (in seconds) that the container must run for before a restart can be attempted.
         *
         * A container can be restarted only once every `restartAttemptPeriod` seconds. If a container isn't able to run for this time period and exits early, it will not be restarted. You can set a minimum `restartAttemptPeriod` of 60 seconds and a maximum `restartAttemptPeriod` of 1800 seconds. By default, a container must run for 300 seconds before it can be restarted.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-restartpolicy.html#cfn-ecs-taskdefinition-restartpolicy-restartattemptperiod
         */
        readonly restartAttemptPeriod?: number;
    }
    /**
     * The amount of ephemeral storage to allocate for the task.
     *
     * This parameter is used to expand the total amount of ephemeral storage available, beyond the default amount, for tasks hosted on AWS Fargate . For more information, see [Using data volumes in tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html) in the *Amazon ECS Developer Guide;* .
     *
     * > For tasks using the Fargate launch type, the task requires the following platforms:
     * >
     * > - Linux platform version `1.4.0` or later.
     * > - Windows platform version `1.0.0` or later.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-ephemeralstorage.html
     */
    interface EphemeralStorageProperty {
        /**
         * The total amount, in GiB, of ephemeral storage to set for the task.
         *
         * The minimum supported value is `21` GiB and the maximum supported value is `200` GiB.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskdefinition-ephemeralstorage.html#cfn-ecs-taskdefinition-ephemeralstorage-sizeingib
         */
        readonly sizeInGiB?: number;
    }
}
/**
 * Properties for defining a `CfnTaskDefinition`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html
 */
export interface CfnTaskDefinitionProps {
    /**
     * A list of container definitions in JSON format that describe the different containers that make up your task.
     *
     * For more information about container definition parameters and defaults, see [Amazon ECS Task Definitions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-containerdefinitions
     */
    readonly containerDefinitions?: Array<CfnTaskDefinition.ContainerDefinitionProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The number of `cpu` units used by the task.
     *
     * If you use the EC2 launch type, this field is optional. Any value can be used. If you use the Fargate launch type, this field is required. You must use one of the following values. The value that you choose determines your range of valid values for the `memory` parameter.
     *
     * If you're using the EC2 launch type or the external launch type, this field is optional. Supported values are between `128` CPU units ( `0.125` vCPUs) and `196608` CPU units ( `192` vCPUs). The CPU units cannot be less than 1 vCPU when you use Windows containers on Fargate.
     *
     * - 256 (.25 vCPU) - Available `memory` values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB)
     * - 512 (.5 vCPU) - Available `memory` values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB)
     * - 1024 (1 vCPU) - Available `memory` values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB)
     * - 2048 (2 vCPU) - Available `memory` values: 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB)
     * - 4096 (4 vCPU) - Available `memory` values: 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB)
     * - 8192 (8 vCPU) - Available `memory` values: 16 GB and 60 GB in 4 GB increments
     *
     * This option requires Linux platform `1.4.0` or later.
     * - 16384 (16vCPU) - Available `memory` values: 32GB and 120 GB in 8 GB increments
     *
     * This option requires Linux platform `1.4.0` or later.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-cpu
     */
    readonly cpu?: string;
    /**
     * Enables fault injection and allows for fault injection requests to be accepted from the task's containers.
     *
     * The default value is `false` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-enablefaultinjection
     */
    readonly enableFaultInjection?: boolean | cdk.IResolvable;
    /**
     * The ephemeral storage settings to use for tasks run with the task definition.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-ephemeralstorage
     */
    readonly ephemeralStorage?: CfnTaskDefinition.EphemeralStorageProperty | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make AWS API calls on your behalf.
     *
     * For informationabout the required IAM roles for Amazon ECS, see [IAM roles for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security-ecs-iam-role-overview.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-executionrolearn
     */
    readonly executionRoleArn?: string;
    /**
     * The name of a family that this task definition is registered to.
     *
     * Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
     *
     * A family groups multiple versions of a task definition. Amazon ECS gives the first task definition that you registered to a family a revision number of 1. Amazon ECS gives sequential revision numbers to each task definition that you add.
     *
     * > To use revision numbers when you update a task definition, specify this property. If you don't specify a value, AWS CloudFormation generates a new task definition each time that you update it.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-family
     */
    readonly family?: string;
    /**
     * The Elastic Inference accelerators to use for the containers in the task.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-inferenceaccelerators
     */
    readonly inferenceAccelerators?: Array<CfnTaskDefinition.InferenceAcceleratorProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The IPC resource namespace to use for the containers in the task.
     *
     * The valid values are `host` , `task` , or `none` . If `host` is specified, then all containers within the tasks that specified the `host` IPC mode on the same container instance share the same IPC resources with the host Amazon EC2 instance. If `task` is specified, all containers within the specified task share the same IPC resources. If `none` is specified, then IPC resources within the containers of a task are private and not shared with other containers in a task or on the container instance. If no value is specified, then the IPC resource namespace sharing depends on the Docker daemon setting on the container instance.
     *
     * If the `host` IPC mode is used, be aware that there is a heightened risk of undesired IPC namespace expose.
     *
     * If you are setting namespaced kernel parameters using `systemControls` for the containers in the task, the following will apply to your IPC resource namespace. For more information, see [System Controls](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * - For tasks that use the `host` IPC mode, IPC namespace related `systemControls` are not supported.
     * - For tasks that use the `task` IPC mode, IPC namespace related `systemControls` will apply to all containers within a task.
     *
     * > This parameter is not supported for Windows containers or tasks run on AWS Fargate .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-ipcmode
     */
    readonly ipcMode?: string;
    /**
     * The amount (in MiB) of memory used by the task.
     *
     * If your tasks runs on Amazon EC2 instances, you must specify either a task-level memory value or a container-level memory value. This field is optional and any value can be used. If a task-level memory value is specified, the container-level memory value is optional. For more information regarding container-level memory and memory reservation, see [ContainerDefinition](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html) .
     *
     * If your tasks runs on AWS Fargate , this field is required. You must use one of the following values. The value you choose determines your range of valid values for the `cpu` parameter.
     *
     * - 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available `cpu` values: 256 (.25 vCPU)
     * - 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available `cpu` values: 512 (.5 vCPU)
     * - 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available `cpu` values: 1024 (1 vCPU)
     * - Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available `cpu` values: 2048 (2 vCPU)
     * - Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available `cpu` values: 4096 (4 vCPU)
     * - Between 16 GB and 60 GB in 4 GB increments - Available `cpu` values: 8192 (8 vCPU)
     *
     * This option requires Linux platform `1.4.0` or later.
     * - Between 32GB and 120 GB in 8 GB increments - Available `cpu` values: 16384 (16 vCPU)
     *
     * This option requires Linux platform `1.4.0` or later.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-memory
     */
    readonly memory?: string;
    /**
     * The Docker networking mode to use for the containers in the task.
     *
     * The valid values are `none` , `bridge` , `awsvpc` , and `host` . If no network mode is specified, the default is `bridge` .
     *
     * For Amazon ECS tasks on Fargate, the `awsvpc` network mode is required. For Amazon ECS tasks on Amazon EC2 Linux instances, any network mode can be used. For Amazon ECS tasks on Amazon EC2 Windows instances, `<default>` or `awsvpc` can be used. If the network mode is set to `none` , you cannot specify port mappings in your container definitions, and the tasks containers do not have external connectivity. The `host` and `awsvpc` network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the `bridge` mode.
     *
     * With the `host` and `awsvpc` network modes, exposed container ports are mapped directly to the corresponding host port (for the `host` network mode) or the attached elastic network interface port (for the `awsvpc` network mode), so you cannot take advantage of dynamic host port mappings.
     *
     * > When using the `host` network mode, you should not run containers using the root user (UID 0). It is considered best practice to use a non-root user.
     *
     * If the network mode is `awsvpc` , the task is allocated an elastic network interface, and you must specify a [NetworkConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_NetworkConfiguration.html) value when you create a service or run a task with the task definition. For more information, see [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * If the network mode is `host` , you cannot run multiple instantiations of the same task on a single container instance when port mappings are used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-networkmode
     */
    readonly networkMode?: string;
    /**
     * The process namespace to use for the containers in the task.
     *
     * The valid values are `host` or `task` . On Fargate for Linux containers, the only valid value is `task` . For example, monitoring sidecars might need `pidMode` to access information about other containers running in the same task.
     *
     * If `host` is specified, all containers within the tasks that specified the `host` PID mode on the same container instance share the same process namespace with the host Amazon EC2 instance.
     *
     * If `task` is specified, all containers within the specified task share the same process namespace.
     *
     * If no value is specified, the default is a private namespace for each container.
     *
     * If the `host` PID mode is used, there's a heightened risk of undesired process namespace exposure.
     *
     * > This parameter is not supported for Windows containers. > This parameter is only supported for tasks that are hosted on AWS Fargate if the tasks are using platform version `1.4.0` or later (Linux). This isn't supported for Windows containers on Fargate.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-pidmode
     */
    readonly pidMode?: string;
    /**
     * An array of placement constraint objects to use for tasks.
     *
     * > This parameter isn't supported for tasks run on AWS Fargate .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-placementconstraints
     */
    readonly placementConstraints?: Array<cdk.IResolvable | CfnTaskDefinition.TaskDefinitionPlacementConstraintProperty> | cdk.IResolvable;
    /**
     * The configuration details for the App Mesh proxy.
     *
     * Your Amazon ECS container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the `ecs-init` package to use a proxy configuration. If your container instances are launched from the Amazon ECS optimized AMI version `20190301` or later, they contain the required versions of the container agent and `ecs-init` . For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-proxyconfiguration
     */
    readonly proxyConfiguration?: cdk.IResolvable | CfnTaskDefinition.ProxyConfigurationProperty;
    /**
     * The task launch types the task definition was validated against.
     *
     * The valid values are `EC2` , `FARGATE` , and `EXTERNAL` . For more information, see [Amazon ECS launch types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-requirescompatibilities
     */
    readonly requiresCompatibilities?: Array<string>;
    /**
     * The operating system that your tasks definitions run on.
     *
     * A platform family is specified only for tasks using the Fargate launch type.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-runtimeplatform
     */
    readonly runtimePlatform?: cdk.IResolvable | CfnTaskDefinition.RuntimePlatformProperty;
    /**
     * The metadata that you apply to the task definition to help you categorize and organize them.
     *
     * Each tag consists of a key and an optional value. You define both of them.
     *
     * The following basic restrictions apply to tags:
     *
     * - Maximum number of tags per resource - 50
     * - For each resource, each tag key must be unique, and each tag key can have only one value.
     * - Maximum key length - 128 Unicode characters in UTF-8
     * - Maximum value length - 256 Unicode characters in UTF-8
     * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
     * - Tag keys and values are case-sensitive.
     * - Do not use `aws:` , `AWS:` , or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The short name or full Amazon Resource Name (ARN) of the AWS Identity and Access Management role that grants containers in the task permission to call AWS APIs on your behalf.
     *
     * For more information, see [Amazon ECS Task Role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * IAM roles for tasks on Windows require that the `-EnableTaskIAMRole` option is set when you launch the Amazon ECS-optimized Windows AMI. Your containers must also run some configuration code to use the feature. For more information, see [Windows IAM roles for tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows_task_IAM_roles.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * > String validation is done on the ECS side. If an invalid string value is given for `TaskRoleArn` , it may cause the Cloudformation job to hang.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-taskrolearn
     */
    readonly taskRoleArn?: string;
    /**
     * The list of data volume definitions for the task.
     *
     * For more information, see [Using data volumes in tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * > The `host` and `sourcePath` parameters aren't supported for tasks run on AWS Fargate .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskdefinition.html#cfn-ecs-taskdefinition-volumes
     */
    readonly volumes?: Array<cdk.IResolvable | CfnTaskDefinition.VolumeProperty> | cdk.IResolvable;
}
/**
 * Create a task set in the specified cluster and service.
 *
 * This is used when a service uses the `EXTERNAL` deployment controller type. For more information, see [Amazon ECS deployment types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html) in the *Amazon Elastic Container Service Developer Guide* .
 *
 * > On March 21, 2024, a change was made to resolve the task definition revision before authorization. When a task definition revision is not specified, authorization will occur using the latest revision of a task definition.
 *
 * For information about the maximum number of task sets and other quotas, see [Amazon ECS service quotas](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-quotas.html) in the *Amazon Elastic Container Service Developer Guide* .
 *
 * @cloudformationResource AWS::ECS::TaskSet
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html
 */
export declare class CfnTaskSet extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnTaskSet from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnTaskSet;
    /**
     * The ID of the task set.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The capacity provider strategy that are associated with the task set.
     */
    capacityProviderStrategy?: Array<CfnTaskSet.CapacityProviderStrategyItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
     */
    cluster: string;
    /**
     * An optional non-unique tag that identifies this task set in external systems.
     */
    externalId?: string;
    /**
     * The launch type that new tasks in the task set uses.
     */
    launchType?: string;
    /**
     * A load balancer object representing the load balancer to use with the task set.
     */
    loadBalancers?: Array<cdk.IResolvable | CfnTaskSet.LoadBalancerProperty> | cdk.IResolvable;
    /**
     * The network configuration for the task set.
     */
    networkConfiguration?: cdk.IResolvable | CfnTaskSet.NetworkConfigurationProperty;
    /**
     * The platform version that the tasks in the task set uses.
     */
    platformVersion?: string;
    /**
     * A floating-point percentage of your desired number of tasks to place and keep running in the task set.
     */
    scale?: cdk.IResolvable | CfnTaskSet.ScaleProperty;
    /**
     * The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
     */
    service: string;
    /**
     * The details of the service discovery registries to assign to this task set.
     */
    serviceRegistries?: Array<cdk.IResolvable | CfnTaskSet.ServiceRegistryProperty> | cdk.IResolvable;
    /**
     * The metadata that you apply to the task set to help you categorize and organize them.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The task definition for the tasks in the task set to use.
     */
    taskDefinition: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnTaskSetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnTaskSet {
    /**
     * The load balancer configuration to use with a service or task set.
     *
     * When you add, update, or remove a load balancer configuration, Amazon ECS starts a new deployment with the updated Elastic Load Balancing configuration. This causes tasks to register to and deregister from load balancers.
     *
     * We recommend that you verify this on a test environment before you update the Elastic Load Balancing configuration.
     *
     * A service-linked role is required for services that use multiple target groups. For more information, see [Using service-linked roles](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-loadbalancer.html
     */
    interface LoadBalancerProperty {
        /**
         * The name of the container (as it appears in a container definition) to associate with the load balancer.
         *
         * You need to specify the container name when configuring the target group for an Amazon ECS load balancer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-loadbalancer.html#cfn-ecs-taskset-loadbalancer-containername
         */
        readonly containerName?: string;
        /**
         * The port on the container to associate with the load balancer.
         *
         * This port must correspond to a `containerPort` in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they're launched on must allow ingress traffic on the `hostPort` of the port mapping.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-loadbalancer.html#cfn-ecs-taskset-loadbalancer-containerport
         */
        readonly containerPort?: number;
        /**
         * The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set.
         *
         * A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer.
         *
         * For services using the `ECS` deployment controller, you can specify one or multiple target groups. For more information, see [Registering multiple target groups with a service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * For services using the `CODE_DEPLOY` deployment controller, you're required to define two target groups for the load balancer. For more information, see [Blue/green deployment with CodeDeploy](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html) in the *Amazon Elastic Container Service Developer Guide* .
         *
         * > If your service's task definition uses the `awsvpc` network mode, you must choose `ip` as the target type, not `instance` . Do this when creating your target groups because tasks that use the `awsvpc` network mode are associated with an elastic network interface, not an Amazon EC2 instance. This network mode is required for the Fargate launch type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-loadbalancer.html#cfn-ecs-taskset-loadbalancer-targetgrouparn
         */
        readonly targetGroupArn?: string;
    }
    /**
     * The network configuration for a task or service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-networkconfiguration.html
     */
    interface NetworkConfigurationProperty {
        /**
         * The VPC subnets and security groups that are associated with a task.
         *
         * > All specified subnets and security groups must be from the same VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-networkconfiguration.html#cfn-ecs-taskset-networkconfiguration-awsvpcconfiguration
         */
        readonly awsVpcConfiguration?: CfnTaskSet.AwsVpcConfigurationProperty | cdk.IResolvable;
    }
    /**
     * An object representing the networking details for a task or service.
     *
     * For example `awsVpcConfiguration={subnets=["subnet-12344321"],securityGroups=["sg-12344321"]}` .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-awsvpcconfiguration.html
     */
    interface AwsVpcConfigurationProperty {
        /**
         * Whether the task's elastic network interface receives a public IP address.
         *
         * Consider the following when you set this value:
         *
         * - When you use `create-service` or `update-service` , the default is `DISABLED` .
         * - When the service `deploymentController` is `ECS` , the value must be `DISABLED` .
         * - When you use `create-service` or `update-service` , the default is `ENABLED` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-awsvpcconfiguration.html#cfn-ecs-taskset-awsvpcconfiguration-assignpublicip
         */
        readonly assignPublicIp?: string;
        /**
         * The IDs of the security groups associated with the task or service.
         *
         * If you don't specify a security group, the default security group for the VPC is used. There's a limit of 5 security groups that can be specified.
         *
         * > All specified security groups must be from the same VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-awsvpcconfiguration.html#cfn-ecs-taskset-awsvpcconfiguration-securitygroups
         */
        readonly securityGroups?: Array<string>;
        /**
         * The IDs of the subnets associated with the task or service.
         *
         * There's a limit of 16 subnets that can be specified.
         *
         * > All specified subnets must be from the same VPC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-awsvpcconfiguration.html#cfn-ecs-taskset-awsvpcconfiguration-subnets
         */
        readonly subnets: Array<string>;
    }
    /**
     * A floating-point percentage of the desired number of tasks to place and keep running in the task set.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-scale.html
     */
    interface ScaleProperty {
        /**
         * The unit of measure for the scale value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-scale.html#cfn-ecs-taskset-scale-unit
         */
        readonly unit?: string;
        /**
         * The value, specified as a percent total of a service's `desiredCount` , to scale the task set.
         *
         * Accepted values are numbers between 0 and 100.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-scale.html#cfn-ecs-taskset-scale-value
         */
        readonly value?: number;
    }
    /**
     * The details for the service registry.
     *
     * Each service may be associated with one service registry. Multiple service registries for each service are not supported.
     *
     * When you add, update, or remove the service registries configuration, Amazon ECS starts a new deployment. New tasks are registered and deregistered to the updated service registry configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-serviceregistry.html
     */
    interface ServiceRegistryProperty {
        /**
         * The container name value to be used for your service discovery service.
         *
         * It's already specified in the task definition. If the task definition that your service task specifies uses the `bridge` or `host` network mode, you must specify a `containerName` and `containerPort` combination from the task definition. If the task definition that your service task specifies uses the `awsvpc` network mode and a type SRV DNS record is used, you must specify either a `containerName` and `containerPort` combination or a `port` value. However, you can't specify both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-serviceregistry.html#cfn-ecs-taskset-serviceregistry-containername
         */
        readonly containerName?: string;
        /**
         * The port value to be used for your service discovery service.
         *
         * It's already specified in the task definition. If the task definition your service task specifies uses the `bridge` or `host` network mode, you must specify a `containerName` and `containerPort` combination from the task definition. If the task definition your service task specifies uses the `awsvpc` network mode and a type SRV DNS record is used, you must specify either a `containerName` and `containerPort` combination or a `port` value. However, you can't specify both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-serviceregistry.html#cfn-ecs-taskset-serviceregistry-containerport
         */
        readonly containerPort?: number;
        /**
         * The port value used if your service discovery service specified an SRV record.
         *
         * This field might be used if both the `awsvpc` network mode and SRV records are used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-serviceregistry.html#cfn-ecs-taskset-serviceregistry-port
         */
        readonly port?: number;
        /**
         * The Amazon Resource Name (ARN) of the service registry.
         *
         * The currently supported service registry is AWS Cloud Map . For more information, see [CreateService](https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-serviceregistry.html#cfn-ecs-taskset-serviceregistry-registryarn
         */
        readonly registryArn?: string;
    }
    /**
     * The details of a capacity provider strategy.
     *
     * A capacity provider strategy can be set when using the [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) or [CreateCluster](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCluster.html) APIs or as the default capacity provider strategy for a cluster with the `CreateCluster` API.
     *
     * Only capacity providers that are already associated with a cluster and have an `ACTIVE` or `UPDATING` status can be used in a capacity provider strategy. The [PutClusterCapacityProviders](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutClusterCapacityProviders.html) API is used to associate a capacity provider with a cluster.
     *
     * If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must already be created. New Auto Scaling group capacity providers can be created with the [CreateClusterCapacityProvider](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateClusterCapacityProvider.html) API operation.
     *
     * To use a AWS Fargate capacity provider, specify either the `FARGATE` or `FARGATE_SPOT` capacity providers. The AWS Fargate capacity providers are available to all accounts and only need to be associated with a cluster to be used in a capacity provider strategy.
     *
     * With `FARGATE_SPOT` , you can run interruption tolerant tasks at a rate that's discounted compared to the `FARGATE` price. `FARGATE_SPOT` runs tasks on spare compute capacity. When AWS needs the capacity back, your tasks are interrupted with a two-minute warning. `FARGATE_SPOT` supports Linux tasks with the X86_64 architecture on platform version 1.3.0 or later. `FARGATE_SPOT` supports Linux tasks with the ARM64 architecture on platform version 1.4.0 or later.
     *
     * A capacity provider strategy can contain a maximum of 20 capacity providers.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-capacityproviderstrategyitem.html
     */
    interface CapacityProviderStrategyItemProperty {
        /**
         * The *base* value designates how many tasks, at a minimum, to run on the specified capacity provider.
         *
         * Only one capacity provider in a capacity provider strategy can have a *base* defined. If no value is specified, the default value of `0` is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-capacityproviderstrategyitem.html#cfn-ecs-taskset-capacityproviderstrategyitem-base
         */
        readonly base?: number;
        /**
         * The short name of the capacity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-capacityproviderstrategyitem.html#cfn-ecs-taskset-capacityproviderstrategyitem-capacityprovider
         */
        readonly capacityProvider?: string;
        /**
         * The *weight* value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider.
         *
         * The `weight` value is taken into consideration after the `base` value, if defined, is satisfied.
         *
         * If no `weight` value is specified, the default value of `0` is used. When multiple capacity providers are specified within a capacity provider strategy, at least one of the capacity providers must have a weight value greater than zero and any capacity providers with a weight of `0` can't be used to place tasks. If you specify multiple capacity providers in a strategy that all have a weight of `0` , any `RunTask` or `CreateService` actions using the capacity provider strategy will fail.
         *
         * An example scenario for using weights is defining a strategy that contains two capacity providers and both have a weight of `1` , then when the `base` is satisfied, the tasks will be split evenly across the two capacity providers. Using that same logic, if you specify a weight of `1` for *capacityProviderA* and a weight of `4` for *capacityProviderB* , then for every one task that's run using *capacityProviderA* , four tasks would use *capacityProviderB* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ecs-taskset-capacityproviderstrategyitem.html#cfn-ecs-taskset-capacityproviderstrategyitem-weight
         */
        readonly weight?: number;
    }
}
/**
 * Properties for defining a `CfnTaskSet`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html
 */
export interface CfnTaskSetProps {
    /**
     * The capacity provider strategy that are associated with the task set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-capacityproviderstrategy
     */
    readonly capacityProviderStrategy?: Array<CfnTaskSet.CapacityProviderStrategyItemProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-cluster
     */
    readonly cluster: string;
    /**
     * An optional non-unique tag that identifies this task set in external systems.
     *
     * If the task set is associated with a service discovery registry, the tasks in this task set will have the `ECS_TASK_SET_EXTERNAL_ID` AWS Cloud Map attribute set to the provided value.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-externalid
     */
    readonly externalId?: string;
    /**
     * The launch type that new tasks in the task set uses.
     *
     * For more information, see [Amazon ECS launch types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide* .
     *
     * If a `launchType` is specified, the `capacityProviderStrategy` parameter must be omitted.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-launchtype
     */
    readonly launchType?: string;
    /**
     * A load balancer object representing the load balancer to use with the task set.
     *
     * The supported load balancer types are either an Application Load Balancer or a Network Load Balancer.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-loadbalancers
     */
    readonly loadBalancers?: Array<cdk.IResolvable | CfnTaskSet.LoadBalancerProperty> | cdk.IResolvable;
    /**
     * The network configuration for the task set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-networkconfiguration
     */
    readonly networkConfiguration?: cdk.IResolvable | CfnTaskSet.NetworkConfigurationProperty;
    /**
     * The platform version that the tasks in the task set uses.
     *
     * A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the `LATEST` platform version is used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-platformversion
     */
    readonly platformVersion?: string;
    /**
     * A floating-point percentage of your desired number of tasks to place and keep running in the task set.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-scale
     */
    readonly scale?: cdk.IResolvable | CfnTaskSet.ScaleProperty;
    /**
     * The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-service
     */
    readonly service: string;
    /**
     * The details of the service discovery registries to assign to this task set.
     *
     * For more information, see [Service discovery](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-serviceregistries
     */
    readonly serviceRegistries?: Array<cdk.IResolvable | CfnTaskSet.ServiceRegistryProperty> | cdk.IResolvable;
    /**
     * The metadata that you apply to the task set to help you categorize and organize them.
     *
     * Each tag consists of a key and an optional value. You define both.
     *
     * The following basic restrictions apply to tags:
     *
     * - Maximum number of tags per resource - 50
     * - For each resource, each tag key must be unique, and each tag key can have only one value.
     * - Maximum key length - 128 Unicode characters in UTF-8
     * - Maximum value length - 256 Unicode characters in UTF-8
     * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
     * - Tag keys and values are case-sensitive.
     * - Do not use `aws:` , `AWS:` , or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The task definition for the tasks in the task set to use.
     *
     * If a revision isn't specified, the latest `ACTIVE` revision is used.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ecs-taskset.html#cfn-ecs-taskset-taskdefinition
     */
    readonly taskDefinition: string;
}
