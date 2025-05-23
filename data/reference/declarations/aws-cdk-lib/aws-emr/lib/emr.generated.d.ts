import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::EMR::Cluster` resource specifies an Amazon EMR cluster.
 *
 * This cluster is a collection of Amazon EC2 instances that run open source big data frameworks and applications to process and analyze vast amounts of data. For more information, see the [Amazon EMR Management Guide](https://docs.aws.amazon.com//emr/latest/ManagementGuide/) .
 *
 * Amazon EMR now supports launching task instance groups and task instance fleets as part of the `AWS::EMR::Cluster` resource. This can be done by using the `JobFlowInstancesConfig` property type's `TaskInstanceGroups` and `TaskInstanceFleets` subproperties. Using these subproperties reduces delays in provisioning task nodes compared to specifying task nodes with the `AWS::EMR::InstanceGroupConfig` and `AWS::EMR::InstanceFleetConfig` resources. Please refer to the examples at the bottom of this page to learn how to use these subproperties.
 *
 * @cloudformationResource AWS::EMR::Cluster
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html
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
     * The unique identifier for the cluster.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The public DNS name of the master node (instance), such as `ec2-12-123-123-123.us-west-2.compute.amazonaws.com` .
     *
     * @cloudformationAttribute MasterPublicDNS
     */
    readonly attrMasterPublicDns: string;
    /**
     * A JSON string for selecting additional features.
     */
    additionalInfo?: any | cdk.IResolvable;
    /**
     * The applications to install on this cluster, for example, Spark, Flink, Oozie, Zeppelin, and so on.
     */
    applications?: Array<CfnCluster.ApplicationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * An IAM role for automatic scaling policies.
     */
    autoScalingRole?: string;
    /**
     * An auto-termination policy for an Amazon EMR cluster.
     */
    autoTerminationPolicy?: CfnCluster.AutoTerminationPolicyProperty | cdk.IResolvable;
    /**
     * A list of bootstrap actions to run before Hadoop starts on the cluster nodes.
     */
    bootstrapActions?: Array<CfnCluster.BootstrapActionConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Applies only to Amazon EMR releases 4.x and later. The list of configurations that are supplied to the Amazon EMR cluster.
     */
    configurations?: Array<CfnCluster.ConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Available only in Amazon EMR releases 5.7.0 and later. The ID of a custom Amazon EBS-backed Linux AMI if the cluster uses a custom AMI.
     */
    customAmiId?: string;
    /**
     * The IOPS, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance.
     */
    ebsRootVolumeIops?: number;
    /**
     * The size, in GiB, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance.
     */
    ebsRootVolumeSize?: number;
    /**
     * The throughput, in MiB/s, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance.
     */
    ebsRootVolumeThroughput?: number;
    /**
     * A specification of the number and type of Amazon EC2 instances.
     */
    instances: cdk.IResolvable | CfnCluster.JobFlowInstancesConfigProperty;
    /**
     * Also called instance profile and Amazon EC2 role.
     */
    jobFlowRole: string;
    /**
     * Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration.
     */
    kerberosAttributes?: cdk.IResolvable | CfnCluster.KerberosAttributesProperty;
    /**
     * The AWS KMS key used for encrypting log files.
     */
    logEncryptionKmsKeyId?: string;
    /**
     * The path to the Amazon S3 location where logs for this cluster are stored.
     */
    logUri?: string;
    /**
     * Creates or updates a managed scaling policy for an Amazon EMR cluster.
     */
    managedScalingPolicy?: cdk.IResolvable | CfnCluster.ManagedScalingPolicyProperty;
    /**
     * The name of the cluster.
     */
    name: string;
    /**
     * The Amazon Linux release specified in a cluster launch RunJobFlow request.
     */
    osReleaseLabel?: string;
    placementGroupConfigs?: Array<cdk.IResolvable | CfnCluster.PlacementGroupConfigProperty> | cdk.IResolvable;
    /**
     * The Amazon EMR release label, which determines the version of open-source application packages installed on the cluster.
     */
    releaseLabel?: string;
    /**
     * The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized.
     */
    scaleDownBehavior?: string;
    /**
     * The name of the security configuration applied to the cluster.
     */
    securityConfiguration?: string;
    /**
     * The IAM role that Amazon EMR assumes in order to access AWS resources on your behalf.
     */
    serviceRole: string;
    /**
     * Specifies the number of steps that can be executed concurrently.
     */
    stepConcurrencyLevel?: number;
    /**
     * A list of steps to run.
     */
    steps?: Array<cdk.IResolvable | CfnCluster.StepConfigProperty> | cdk.IResolvable;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * A list of tags associated with a cluster.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Indicates whether the cluster is visible to all IAM users of the AWS account associated with the cluster.
     */
    visibleToAllUsers?: boolean | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnClusterProps);
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
     * `Application` is a property of `AWS::EMR::Cluster` .
     *
     * The `Application` property type defines the open-source big data applications for EMR to install and configure when a cluster is created.
     *
     * With Amazon EMR release version 4.0 and later, the only accepted parameter is the application `Name` . To pass arguments to these applications, you use configuration classifications specified using JSON objects in a `Configuration` property. For more information, see [Configuring Applications](https://docs.aws.amazon.com//emr/latest/ReleaseGuide/emr-configure-apps.html) .
     *
     * With earlier Amazon EMR releases, the application is any AWS or third-party software that you can add to the cluster. You can specify the version of the application and arguments to pass to it. Amazon EMR accepts and forwards the argument list to the corresponding installation script as a bootstrap action argument.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-application.html
     */
    interface ApplicationProperty {
        /**
         * This option is for advanced users only.
         *
         * This is meta information about clusters and applications that are used for testing and troubleshooting.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-application.html#cfn-emr-cluster-application-additionalinfo
         */
        readonly additionalInfo?: cdk.IResolvable | Record<string, string>;
        /**
         * Arguments for Amazon EMR to pass to the application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-application.html#cfn-emr-cluster-application-args
         */
        readonly args?: Array<string>;
        /**
         * The name of the application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-application.html#cfn-emr-cluster-application-name
         */
        readonly name?: string;
        /**
         * The version of the application.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-application.html#cfn-emr-cluster-application-version
         */
        readonly version?: string;
    }
    /**
     * An auto-termination policy for an Amazon EMR cluster.
     *
     * An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see [Control cluster termination](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-autoterminationpolicy.html
     */
    interface AutoTerminationPolicyProperty {
        /**
         * Specifies the amount of idle time in seconds after which the cluster automatically terminates.
         *
         * You can specify a minimum of 60 seconds and a maximum of 604800 seconds (seven days).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-autoterminationpolicy.html#cfn-emr-cluster-autoterminationpolicy-idletimeout
         */
        readonly idleTimeout?: number;
    }
    /**
     * `BootstrapActionConfig` is a property of `AWS::EMR::Cluster` that can be used to run bootstrap actions on EMR clusters.
     *
     * You can use a bootstrap action to install software and configure EC2 instances for all cluster nodes before EMR installs and configures open-source big data applications on cluster instances. For more information, see [Create Bootstrap Actions to Install Additional Software](https://docs.aws.amazon.com//emr/latest/ManagementGuide/emr-plan-bootstrap.html) in the *Amazon EMR Management Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-bootstrapactionconfig.html
     */
    interface BootstrapActionConfigProperty {
        /**
         * The name of the bootstrap action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-bootstrapactionconfig.html#cfn-emr-cluster-bootstrapactionconfig-name
         */
        readonly name: string;
        /**
         * The script run by the bootstrap action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-bootstrapactionconfig.html#cfn-emr-cluster-bootstrapactionconfig-scriptbootstrapaction
         */
        readonly scriptBootstrapAction: cdk.IResolvable | CfnCluster.ScriptBootstrapActionConfigProperty;
    }
    /**
     * `ScriptBootstrapActionConfig` is a subproperty of the `BootstrapActionConfig` property type.
     *
     * `ScriptBootstrapActionConfig` specifies the arguments and location of the bootstrap script for EMR to run on all cluster nodes before it installs open-source big data applications on them.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scriptbootstrapactionconfig.html
     */
    interface ScriptBootstrapActionConfigProperty {
        /**
         * A list of command line arguments to pass to the bootstrap action script.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scriptbootstrapactionconfig.html#cfn-emr-cluster-scriptbootstrapactionconfig-args
         */
        readonly args?: Array<string>;
        /**
         * Location in Amazon S3 of the script to run during a bootstrap action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scriptbootstrapactionconfig.html#cfn-emr-cluster-scriptbootstrapactionconfig-path
         */
        readonly path: string;
    }
    /**
     * > Used only with Amazon EMR release 4.0 and later.
     *
     * `Configuration` is a subproperty of `InstanceFleetConfig` or `InstanceGroupConfig` . `Configuration` specifies optional configurations for customizing open-source big data applications and environment parameters. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see [Configuring Applications](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html) in the *Amazon EMR Release Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-configuration.html
     */
    interface ConfigurationProperty {
        /**
         * The classification within a configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-configuration.html#cfn-emr-cluster-configuration-classification
         */
        readonly classification?: string;
        /**
         * A list of additional configurations to apply within a configuration object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-configuration.html#cfn-emr-cluster-configuration-configurationproperties
         */
        readonly configurationProperties?: cdk.IResolvable | Record<string, string>;
        /**
         * A list of additional configurations to apply within a configuration object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-configuration.html#cfn-emr-cluster-configuration-configurations
         */
        readonly configurations?: Array<CfnCluster.ConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * `JobFlowInstancesConfig` is a property of the `AWS::EMR::Cluster` resource.
     *
     * `JobFlowInstancesConfig` defines the instance groups or instance fleets that comprise the cluster. `JobFlowInstancesConfig` must contain either `InstanceFleetConfig` or `InstanceGroupConfig` . They cannot be used together.
     *
     * You can now define task instance groups or task instance fleets using the `TaskInstanceGroups` and `TaskInstanceFleets` subproperties. Using these subproperties reduces delays in provisioning task nodes compared to specifying task nodes with the `InstanceFleetConfig` and `InstanceGroupConfig` resources.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html
     */
    interface JobFlowInstancesConfigProperty {
        /**
         * A list of additional Amazon EC2 security group IDs for the master node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-additionalmastersecuritygroups
         */
        readonly additionalMasterSecurityGroups?: Array<string>;
        /**
         * A list of additional Amazon EC2 security group IDs for the core and task nodes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-additionalslavesecuritygroups
         */
        readonly additionalSlaveSecurityGroups?: Array<string>;
        /**
         * Describes the EC2 instances and instance configurations for the core instance fleet when using clusters with the instance fleet configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-coreinstancefleet
         */
        readonly coreInstanceFleet?: CfnCluster.InstanceFleetConfigProperty | cdk.IResolvable;
        /**
         * Describes the EC2 instances and instance configurations for core instance groups when using clusters with the uniform instance group configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-coreinstancegroup
         */
        readonly coreInstanceGroup?: CfnCluster.InstanceGroupConfigProperty | cdk.IResolvable;
        /**
         * The name of the Amazon EC2 key pair that can be used to connect to the master node using SSH as the user called "hadoop.".
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-ec2keyname
         */
        readonly ec2KeyName?: string;
        /**
         * Applies to clusters that use the uniform instance group configuration.
         *
         * To launch the cluster in Amazon Virtual Private Cloud (Amazon VPC), set this parameter to the identifier of the Amazon VPC subnet where you want the cluster to launch. If you do not specify this value and your account supports EC2-Classic, the cluster launches in EC2-Classic.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-ec2subnetid
         */
        readonly ec2SubnetId?: string;
        /**
         * Applies to clusters that use the instance fleet configuration.
         *
         * When multiple Amazon EC2 subnet IDs are specified, Amazon EMR evaluates them and launches instances in the optimal subnet.
         *
         * > The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-ec2subnetids
         */
        readonly ec2SubnetIds?: Array<string>;
        /**
         * The identifier of the Amazon EC2 security group for the master node.
         *
         * If you specify `EmrManagedMasterSecurityGroup` , you must also specify `EmrManagedSlaveSecurityGroup` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-emrmanagedmastersecuritygroup
         */
        readonly emrManagedMasterSecurityGroup?: string;
        /**
         * The identifier of the Amazon EC2 security group for the core and task nodes.
         *
         * If you specify `EmrManagedSlaveSecurityGroup` , you must also specify `EmrManagedMasterSecurityGroup` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-emrmanagedslavesecuritygroup
         */
        readonly emrManagedSlaveSecurityGroup?: string;
        /**
         * Applies only to Amazon EMR release versions earlier than 4.0. The Hadoop version for the cluster. Valid inputs are "0.18" (no longer maintained), "0.20" (no longer maintained), "0.20.205" (no longer maintained), "1.0.3", "2.2.0", or "2.4.0". If you do not set this value, the default of 0.18 is used, unless the `AmiVersion` parameter is set in the RunJobFlow call, in which case the default version of Hadoop for that AMI version is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-hadoopversion
         */
        readonly hadoopVersion?: string;
        /**
         * Specifies whether the cluster should remain available after completing all steps.
         *
         * Defaults to `false` . For more information about configuring cluster termination, see [Control Cluster Termination](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html) in the *EMR Management Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-keepjobflowalivewhennosteps
         */
        readonly keepJobFlowAliveWhenNoSteps?: boolean | cdk.IResolvable;
        /**
         * Describes the EC2 instances and instance configurations for the master instance fleet when using clusters with the instance fleet configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-masterinstancefleet
         */
        readonly masterInstanceFleet?: CfnCluster.InstanceFleetConfigProperty | cdk.IResolvable;
        /**
         * Describes the EC2 instances and instance configurations for the master instance group when using clusters with the uniform instance group configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-masterinstancegroup
         */
        readonly masterInstanceGroup?: CfnCluster.InstanceGroupConfigProperty | cdk.IResolvable;
        /**
         * The Availability Zone in which the cluster runs.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-placement
         */
        readonly placement?: cdk.IResolvable | CfnCluster.PlacementTypeProperty;
        /**
         * The identifier of the Amazon EC2 security group for the Amazon EMR service to access clusters in VPC private subnets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-serviceaccesssecuritygroup
         */
        readonly serviceAccessSecurityGroup?: string;
        /**
         * Describes the EC2 instances and instance configurations for the task instance fleets when using clusters with the instance fleet configuration.
         *
         * These task instance fleets are added to the cluster as part of the cluster launch. Each task instance fleet must have a unique name specified so that CloudFormation can differentiate between the task instance fleets.
         *
         * > You can currently specify only one task instance fleet for a cluster. After creating the cluster, you can only modify the mutable properties of `InstanceFleetConfig` , which are `TargetOnDemandCapacity` and `TargetSpotCapacity` . Modifying any other property results in cluster replacement. > To allow a maximum of 30 Amazon EC2 instance types per fleet, include `TaskInstanceFleets` when you create your cluster. If you create your cluster without `TaskInstanceFleets` , Amazon EMR uses its default allocation strategy, which allows for a maximum of five Amazon EC2 instance types.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-taskinstancefleets
         */
        readonly taskInstanceFleets?: Array<CfnCluster.InstanceFleetConfigProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Describes the EC2 instances and instance configurations for task instance groups when using clusters with the uniform instance group configuration.
         *
         * These task instance groups are added to the cluster as part of the cluster launch. Each task instance group must have a unique name specified so that CloudFormation can differentiate between the task instance groups.
         *
         * > After creating the cluster, you can only modify the mutable properties of `InstanceGroupConfig` , which are `AutoScalingPolicy` and `InstanceCount` . Modifying any other property results in cluster replacement.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-taskinstancegroups
         */
        readonly taskInstanceGroups?: Array<CfnCluster.InstanceGroupConfigProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies whether to lock the cluster to prevent the Amazon EC2 instances from being terminated by API call, user intervention, or in the event of a job-flow error.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-terminationprotected
         */
        readonly terminationProtected?: boolean | cdk.IResolvable;
        /**
         * Indicates whether Amazon EMR should gracefully replace core nodes that have degraded within the cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig.html#cfn-emr-cluster-jobflowinstancesconfig-unhealthynodereplacement
         */
        readonly unhealthyNodeReplacement?: boolean | cdk.IResolvable;
    }
    /**
     * Use `InstanceFleetConfig` to define instance fleets for an EMR cluster.
     *
     * A cluster can not use both instance fleets and instance groups. For more information, see [Configure Instance Fleets](https://docs.aws.amazon.com//emr/latest/ManagementGuide/emr-instance-group-configuration.html) in the *Amazon EMR Management Guide* .
     *
     * > The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetconfig.html
     */
    interface InstanceFleetConfigProperty {
        /**
         * The instance type configurations that define the Amazon EC2 instances in the instance fleet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetconfig.html#cfn-emr-cluster-instancefleetconfig-instancetypeconfigs
         */
        readonly instanceTypeConfigs?: Array<CfnCluster.InstanceTypeConfigProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The launch specification for the instance fleet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetconfig.html#cfn-emr-cluster-instancefleetconfig-launchspecifications
         */
        readonly launchSpecifications?: CfnCluster.InstanceFleetProvisioningSpecificationsProperty | cdk.IResolvable;
        /**
         * The friendly name of the instance fleet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetconfig.html#cfn-emr-cluster-instancefleetconfig-name
         */
        readonly name?: string;
        /**
         * The resize specification for the instance fleet.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetconfig.html#cfn-emr-cluster-instancefleetconfig-resizespecifications
         */
        readonly resizeSpecifications?: CfnCluster.InstanceFleetResizingSpecificationsProperty | cdk.IResolvable;
        /**
         * The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision.
         *
         * When the instance fleet launches, Amazon EMR tries to provision On-Demand instances as specified by `InstanceTypeConfig` . Each instance configuration has a specified `WeightedCapacity` . When an On-Demand instance is provisioned, the `WeightedCapacity` units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a `WeightedCapacity` of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units.
         *
         * > If not specified or set to 0, only Spot instances are provisioned for the instance fleet using `TargetSpotCapacity` . At least one of `TargetSpotCapacity` and `TargetOnDemandCapacity` should be greater than 0. For a master instance fleet, only one of `TargetSpotCapacity` and `TargetOnDemandCapacity` can be specified, and its value must be 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetconfig.html#cfn-emr-cluster-instancefleetconfig-targetondemandcapacity
         */
        readonly targetOnDemandCapacity?: number;
        /**
         * The target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision.
         *
         * When the instance fleet launches, Amazon EMR tries to provision Spot instances as specified by `InstanceTypeConfig` . Each instance configuration has a specified `WeightedCapacity` . When a Spot instance is provisioned, the `WeightedCapacity` units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a `WeightedCapacity` of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units.
         *
         * > If not specified or set to 0, only On-Demand instances are provisioned for the instance fleet. At least one of `TargetSpotCapacity` and `TargetOnDemandCapacity` should be greater than 0. For a master instance fleet, only one of `TargetSpotCapacity` and `TargetOnDemandCapacity` can be specified, and its value must be 1.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetconfig.html#cfn-emr-cluster-instancefleetconfig-targetspotcapacity
         */
        readonly targetSpotCapacity?: number;
    }
    /**
     * > The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.
     *
     * `InstanceTypeConfig` is a sub-property of `InstanceFleetConfig` . `InstanceTypeConfig` determines the EC2 instances that Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancetypeconfig.html
     */
    interface InstanceTypeConfigProperty {
        /**
         * The bid price for each Amazon EC2 Spot Instance type as defined by `InstanceType` .
         *
         * Expressed in USD. If neither `BidPrice` nor `BidPriceAsPercentageOfOnDemandPrice` is provided, `BidPriceAsPercentageOfOnDemandPrice` defaults to 100%.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancetypeconfig.html#cfn-emr-cluster-instancetypeconfig-bidprice
         */
        readonly bidPrice?: string;
        /**
         * The bid price, as a percentage of On-Demand price, for each Amazon EC2 Spot Instance as defined by `InstanceType` .
         *
         * Expressed as a number (for example, 20 specifies 20%). If neither `BidPrice` nor `BidPriceAsPercentageOfOnDemandPrice` is provided, `BidPriceAsPercentageOfOnDemandPrice` defaults to 100%.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancetypeconfig.html#cfn-emr-cluster-instancetypeconfig-bidpriceaspercentageofondemandprice
         */
        readonly bidPriceAsPercentageOfOnDemandPrice?: number;
        /**
         * A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancetypeconfig.html#cfn-emr-cluster-instancetypeconfig-configurations
         */
        readonly configurations?: Array<CfnCluster.ConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The custom AMI ID to use for the instance type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancetypeconfig.html#cfn-emr-cluster-instancetypeconfig-customamiid
         */
        readonly customAmiId?: string;
        /**
         * The configuration of Amazon Elastic Block Store (Amazon EBS) attached to each instance as defined by `InstanceType` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancetypeconfig.html#cfn-emr-cluster-instancetypeconfig-ebsconfiguration
         */
        readonly ebsConfiguration?: CfnCluster.EbsConfigurationProperty | cdk.IResolvable;
        /**
         * An Amazon EC2 instance type, such as `m3.xlarge` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancetypeconfig.html#cfn-emr-cluster-instancetypeconfig-instancetype
         */
        readonly instanceType: string;
        /**
         * The priority at which Amazon EMR launches the Amazon EC2 instances with this instance type.
         *
         * Priority starts at 0, which is the highest priority. Amazon EMR considers the highest priority first.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancetypeconfig.html#cfn-emr-cluster-instancetypeconfig-priority
         */
        readonly priority?: number;
        /**
         * The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in `InstanceFleetConfig` .
         *
         * This value is 1 for a master instance fleet, and must be 1 or greater for core and task instance fleets. Defaults to 1 if not specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancetypeconfig.html#cfn-emr-cluster-instancetypeconfig-weightedcapacity
         */
        readonly weightedCapacity?: number;
    }
    /**
     * `EbsConfiguration` is a subproperty of `InstanceFleetConfig` or `InstanceGroupConfig` .
     *
     * `EbsConfiguration` determines the EBS volumes to attach to EMR cluster instances.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ebsconfiguration.html
     */
    interface EbsConfigurationProperty {
        /**
         * An array of Amazon EBS volume specifications attached to a cluster instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ebsconfiguration.html#cfn-emr-cluster-ebsconfiguration-ebsblockdeviceconfigs
         */
        readonly ebsBlockDeviceConfigs?: Array<CfnCluster.EbsBlockDeviceConfigProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Indicates whether an Amazon EBS volume is EBS-optimized.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ebsconfiguration.html#cfn-emr-cluster-ebsconfiguration-ebsoptimized
         */
        readonly ebsOptimized?: boolean | cdk.IResolvable;
    }
    /**
     * `EbsBlockDeviceConfig` is a subproperty of the `EbsConfiguration` property type.
     *
     * `EbsBlockDeviceConfig` defines the number and type of EBS volumes to associate with all EC2 instances in an EMR cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ebsblockdeviceconfig.html
     */
    interface EbsBlockDeviceConfigProperty {
        /**
         * EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s) that are requested for the EBS volume attached to an Amazon EC2 instance in the cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ebsblockdeviceconfig.html#cfn-emr-cluster-ebsblockdeviceconfig-volumespecification
         */
        readonly volumeSpecification: cdk.IResolvable | CfnCluster.VolumeSpecificationProperty;
        /**
         * Number of EBS volumes with a specific volume configuration that are associated with every instance in the instance group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ebsblockdeviceconfig.html#cfn-emr-cluster-ebsblockdeviceconfig-volumesperinstance
         */
        readonly volumesPerInstance?: number;
    }
    /**
     * `VolumeSpecification` is a subproperty of the `EbsBlockDeviceConfig` property type.
     *
     * `VolumeSecification` determines the volume type, IOPS, and size (GiB) for EBS volumes attached to EC2 instances.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-volumespecification.html
     */
    interface VolumeSpecificationProperty {
        /**
         * The number of I/O operations per second (IOPS) that the volume supports.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-volumespecification.html#cfn-emr-cluster-volumespecification-iops
         */
        readonly iops?: number;
        /**
         * The volume size, in gibibytes (GiB).
         *
         * This can be a number from 1 - 1024. If the volume type is EBS-optimized, the minimum value is 10.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-volumespecification.html#cfn-emr-cluster-volumespecification-sizeingb
         */
        readonly sizeInGb: number;
        /**
         * The throughput, in mebibyte per second (MiB/s).
         *
         * This optional parameter can be a number from 125 - 1000 and is valid only for gp3 volumes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-volumespecification.html#cfn-emr-cluster-volumespecification-throughput
         */
        readonly throughput?: number;
        /**
         * The volume type.
         *
         * Volume types supported are gp3, gp2, io1, st1, sc1, and standard.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-volumespecification.html#cfn-emr-cluster-volumespecification-volumetype
         */
        readonly volumeType: string;
    }
    /**
     * `InstanceFleetProvisioningSpecification` is a subproperty of `InstanceFleetConfig` .
     *
     * `InstanceFleetProvisioningSpecification` defines the launch specification for Spot instances in an instance fleet, which determines the defined duration and provisioning timeout behavior for Spot instances.
     *
     * > The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetprovisioningspecifications.html
     */
    interface InstanceFleetProvisioningSpecificationsProperty {
        /**
         * The launch specification for On-Demand Instances in the instance fleet, which determines the allocation strategy and capacity reservation options.
         *
         * > The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions. On-Demand Instances allocation strategy is available in Amazon EMR releases 5.12.1 and later.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetprovisioningspecifications.html#cfn-emr-cluster-instancefleetprovisioningspecifications-ondemandspecification
         */
        readonly onDemandSpecification?: cdk.IResolvable | CfnCluster.OnDemandProvisioningSpecificationProperty;
        /**
         * The launch specification for Spot instances in the fleet, which determines the allocation strategy, defined duration, and provisioning timeout behavior.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetprovisioningspecifications.html#cfn-emr-cluster-instancefleetprovisioningspecifications-spotspecification
         */
        readonly spotSpecification?: cdk.IResolvable | CfnCluster.SpotProvisioningSpecificationProperty;
    }
    /**
     * The launch specification for On-Demand Instances in the instance fleet, which determines the allocation strategy.
     *
     * > The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions. On-Demand Instances allocation strategy is available in Amazon EMR releases 5.12.1 and later.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ondemandprovisioningspecification.html
     */
    interface OnDemandProvisioningSpecificationProperty {
        /**
         * Specifies the strategy to use in launching On-Demand instance fleets.
         *
         * Available options are `lowest-price` and `prioritized` . `lowest-price` specifies to launch the instances with the lowest price first, and `prioritized` specifies that Amazon EMR should launch the instances with the highest priority first. The default is `lowest-price` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ondemandprovisioningspecification.html#cfn-emr-cluster-ondemandprovisioningspecification-allocationstrategy
         */
        readonly allocationStrategy: string;
        /**
         * The launch specification for On-Demand instances in the instance fleet, which determines the allocation strategy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ondemandprovisioningspecification.html#cfn-emr-cluster-ondemandprovisioningspecification-capacityreservationoptions
         */
        readonly capacityReservationOptions?: cdk.IResolvable | CfnCluster.OnDemandCapacityReservationOptionsProperty;
    }
    /**
     * Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ondemandcapacityreservationoptions.html
     */
    interface OnDemandCapacityReservationOptionsProperty {
        /**
         * Indicates the instance's Capacity Reservation preferences. Possible preferences include:.
         *
         * - `open` - The instance can run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).
         * - `none` - The instance avoids running in a Capacity Reservation even if one is available. The instance runs as an On-Demand Instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ondemandcapacityreservationoptions.html#cfn-emr-cluster-ondemandcapacityreservationoptions-capacityreservationpreference
         */
        readonly capacityReservationPreference?: string;
        /**
         * The ARN of the Capacity Reservation resource group in which to run the instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ondemandcapacityreservationoptions.html#cfn-emr-cluster-ondemandcapacityreservationoptions-capacityreservationresourcegrouparn
         */
        readonly capacityReservationResourceGroupArn?: string;
        /**
         * Indicates whether to use unused Capacity Reservations for fulfilling On-Demand capacity.
         *
         * If you specify `use-capacity-reservations-first` , the fleet uses unused Capacity Reservations to fulfill On-Demand capacity up to the target On-Demand capacity. If multiple instance pools have unused Capacity Reservations, the On-Demand allocation strategy ( `lowest-price` ) is applied. If the number of unused Capacity Reservations is less than the On-Demand target capacity, the remaining On-Demand target capacity is launched according to the On-Demand allocation strategy ( `lowest-price` ).
         *
         * If you do not specify a value, the fleet fulfills the On-Demand capacity according to the chosen On-Demand allocation strategy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ondemandcapacityreservationoptions.html#cfn-emr-cluster-ondemandcapacityreservationoptions-usagestrategy
         */
        readonly usageStrategy?: string;
    }
    /**
     * `SpotProvisioningSpecification` is a subproperty of the `InstanceFleetProvisioningSpecifications` property type.
     *
     * `SpotProvisioningSpecification` determines the launch specification for Spot instances in the instance fleet, which includes the defined duration and provisioning timeout behavior.
     *
     * > The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-spotprovisioningspecification.html
     */
    interface SpotProvisioningSpecificationProperty {
        /**
         * Specifies one of the following strategies to launch Spot Instance fleets: `capacity-optimized` , `price-capacity-optimized` , `lowest-price` , or `diversified` , and `capacity-optimized-prioritized` .
         *
         * For more information on the provisioning strategies, see [Allocation strategies for Spot Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-allocation-strategy.html) in the *Amazon EC2 User Guide for Linux Instances* .
         *
         * > When you launch a Spot Instance fleet with the old console, it automatically launches with the `capacity-optimized` strategy. You can't change the allocation strategy from the old console.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-spotprovisioningspecification.html#cfn-emr-cluster-spotprovisioningspecification-allocationstrategy
         */
        readonly allocationStrategy?: string;
        /**
         * The defined duration for Spot Instances (also known as Spot blocks) in minutes.
         *
         * When specified, the Spot Instance does not terminate before the defined duration expires, and defined duration pricing for Spot Instances applies. Valid values are 60, 120, 180, 240, 300, or 360. The duration period starts as soon as a Spot Instance receives its instance ID. At the end of the duration, Amazon EC2 marks the Spot Instance for termination and provides a Spot Instance termination notice, which gives the instance a two-minute warning before it terminates.
         *
         * > Spot Instances with a defined duration (also known as Spot blocks) are no longer available to new customers from July 1, 2021. For customers who have previously used the feature, we will continue to support Spot Instances with a defined duration until December 31, 2022.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-spotprovisioningspecification.html#cfn-emr-cluster-spotprovisioningspecification-blockdurationminutes
         */
        readonly blockDurationMinutes?: number;
        /**
         * The action to take when `TargetSpotCapacity` has not been fulfilled when the `TimeoutDurationMinutes` has expired;
         *
         * that is, when all Spot Instances could not be provisioned within the Spot provisioning timeout. Valid values are `TERMINATE_CLUSTER` and `SWITCH_TO_ON_DEMAND` . SWITCH_TO_ON_DEMAND specifies that if no Spot Instances are available, On-Demand Instances should be provisioned to fulfill any remaining Spot capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-spotprovisioningspecification.html#cfn-emr-cluster-spotprovisioningspecification-timeoutaction
         */
        readonly timeoutAction: string;
        /**
         * The Spot provisioning timeout period in minutes.
         *
         * If Spot Instances are not provisioned within this time period, the `TimeOutAction` is taken. Minimum value is 5 and maximum value is 1440. The timeout applies only during initial provisioning, when the cluster is first created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-spotprovisioningspecification.html#cfn-emr-cluster-spotprovisioningspecification-timeoutdurationminutes
         */
        readonly timeoutDurationMinutes: number;
    }
    /**
     * The resize specification for On-Demand and Spot Instances in the fleet.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetresizingspecifications.html
     */
    interface InstanceFleetResizingSpecificationsProperty {
        /**
         * The resize specification for On-Demand Instances in the instance fleet, which contains the allocation strategy, capacity reservation options, and the resize timeout period.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetresizingspecifications.html#cfn-emr-cluster-instancefleetresizingspecifications-ondemandresizespecification
         */
        readonly onDemandResizeSpecification?: cdk.IResolvable | CfnCluster.OnDemandResizingSpecificationProperty;
        /**
         * The resize specification for Spot Instances in the instance fleet, which contains the allocation strategy and the resize timeout period.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancefleetresizingspecifications.html#cfn-emr-cluster-instancefleetresizingspecifications-spotresizespecification
         */
        readonly spotResizeSpecification?: cdk.IResolvable | CfnCluster.SpotResizingSpecificationProperty;
    }
    /**
     * The resize specification for On-Demand Instances in the instance fleet, which contains the resize timeout period.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ondemandresizingspecification.html
     */
    interface OnDemandResizingSpecificationProperty {
        /**
         * Specifies the allocation strategy to use to launch On-Demand instances during a resize.
         *
         * The default is `lowest-price` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ondemandresizingspecification.html#cfn-emr-cluster-ondemandresizingspecification-allocationstrategy
         */
        readonly allocationStrategy?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ondemandresizingspecification.html#cfn-emr-cluster-ondemandresizingspecification-capacityreservationoptions
         */
        readonly capacityReservationOptions?: cdk.IResolvable | CfnCluster.OnDemandCapacityReservationOptionsProperty;
        /**
         * On-Demand resize timeout in minutes.
         *
         * If On-Demand Instances are not provisioned within this time, the resize workflow stops. The minimum value is 5 minutes, and the maximum value is 10,080 minutes (7 days). The timeout applies to all resize workflows on the Instance Fleet. The resize could be triggered by Amazon EMR Managed Scaling or by the customer (via Amazon EMR Console, Amazon EMR CLI modify-instance-fleet or Amazon EMR SDK ModifyInstanceFleet API) or by Amazon EMR due to Amazon EC2 Spot Reclamation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-ondemandresizingspecification.html#cfn-emr-cluster-ondemandresizingspecification-timeoutdurationminutes
         */
        readonly timeoutDurationMinutes?: number;
    }
    /**
     * The resize specification for Spot Instances in the instance fleet, which contains the resize timeout period.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-spotresizingspecification.html
     */
    interface SpotResizingSpecificationProperty {
        /**
         * Specifies the allocation strategy to use to launch Spot instances during a resize.
         *
         * If you run Amazon EMR releases 6.9.0 or higher, the default is `price-capacity-optimized` . If you run Amazon EMR releases 6.8.0 or lower, the default is `capacity-optimized` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-spotresizingspecification.html#cfn-emr-cluster-spotresizingspecification-allocationstrategy
         */
        readonly allocationStrategy?: string;
        /**
         * Spot resize timeout in minutes.
         *
         * If Spot Instances are not provisioned within this time, the resize workflow will stop provisioning of Spot instances. Minimum value is 5 minutes and maximum value is 10,080 minutes (7 days). The timeout applies to all resize workflows on the Instance Fleet. The resize could be triggered by Amazon EMR Managed Scaling or by the customer (via Amazon EMR Console, Amazon EMR CLI modify-instance-fleet or Amazon EMR SDK ModifyInstanceFleet API) or by Amazon EMR due to Amazon EC2 Spot Reclamation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-spotresizingspecification.html#cfn-emr-cluster-spotresizingspecification-timeoutdurationminutes
         */
        readonly timeoutDurationMinutes?: number;
    }
    /**
     * Use `InstanceGroupConfig` to define instance groups for an EMR cluster.
     *
     * A cluster can not use both instance groups and instance fleets. For more information, see [Create a Cluster with Instance Fleets or Uniform Instance Groups](https://docs.aws.amazon.com//emr/latest/ManagementGuide/emr-instance-group-configuration.html) in the *Amazon EMR Management Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancegroupconfig.html
     */
    interface InstanceGroupConfigProperty {
        /**
         * `AutoScalingPolicy` is a subproperty of the [InstanceGroupConfig](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-jobflowinstancesconfig-instancegroupconfig.html) property type that specifies the constraints and rules of an automatic scaling policy in Amazon EMR . The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. Only core and task instance groups can use automatic scaling policies. For more information, see [Using Automatic Scaling in Amazon EMR](https://docs.aws.amazon.com//emr/latest/ManagementGuide/emr-automatic-scaling.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancegroupconfig.html#cfn-emr-cluster-instancegroupconfig-autoscalingpolicy
         */
        readonly autoScalingPolicy?: CfnCluster.AutoScalingPolicyProperty | cdk.IResolvable;
        /**
         * If specified, indicates that the instance group uses Spot Instances.
         *
         * This is the maximum price you are willing to pay for Spot Instances. Specify `OnDemandPrice` to set the amount equal to the On-Demand price, or specify an amount in USD.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancegroupconfig.html#cfn-emr-cluster-instancegroupconfig-bidprice
         */
        readonly bidPrice?: string;
        /**
         * > Amazon EMR releases 4.x or later.
         *
         * The list of configurations supplied for an Amazon EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancegroupconfig.html#cfn-emr-cluster-instancegroupconfig-configurations
         */
        readonly configurations?: Array<CfnCluster.ConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The custom AMI ID to use for the provisioned instance group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancegroupconfig.html#cfn-emr-cluster-instancegroupconfig-customamiid
         */
        readonly customAmiId?: string;
        /**
         * EBS configurations that will be attached to each Amazon EC2 instance in the instance group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancegroupconfig.html#cfn-emr-cluster-instancegroupconfig-ebsconfiguration
         */
        readonly ebsConfiguration?: CfnCluster.EbsConfigurationProperty | cdk.IResolvable;
        /**
         * Target number of instances for the instance group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancegroupconfig.html#cfn-emr-cluster-instancegroupconfig-instancecount
         */
        readonly instanceCount: number;
        /**
         * The Amazon EC2 instance type for all instances in the instance group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancegroupconfig.html#cfn-emr-cluster-instancegroupconfig-instancetype
         */
        readonly instanceType: string;
        /**
         * Market type of the Amazon EC2 instances used to create a cluster node.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancegroupconfig.html#cfn-emr-cluster-instancegroupconfig-market
         */
        readonly market?: string;
        /**
         * Friendly name given to the instance group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-instancegroupconfig.html#cfn-emr-cluster-instancegroupconfig-name
         */
        readonly name?: string;
    }
    /**
     * `AutoScalingPolicy` is a subproperty of `InstanceGroupConfig` .
     *
     * `AutoScalingPolicy` defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. For more information, see [Using Automatic Scaling in Amazon EMR](https://docs.aws.amazon.com//emr/latest/ManagementGuide/emr-automatic-scaling.html) in the *Amazon EMR Management Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-autoscalingpolicy.html
     */
    interface AutoScalingPolicyProperty {
        /**
         * The upper and lower Amazon EC2 instance limits for an automatic scaling policy.
         *
         * Automatic scaling activity will not cause an instance group to grow above or below these limits.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-autoscalingpolicy.html#cfn-emr-cluster-autoscalingpolicy-constraints
         */
        readonly constraints: cdk.IResolvable | CfnCluster.ScalingConstraintsProperty;
        /**
         * The scale-in and scale-out rules that comprise the automatic scaling policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-autoscalingpolicy.html#cfn-emr-cluster-autoscalingpolicy-rules
         */
        readonly rules: Array<cdk.IResolvable | CfnCluster.ScalingRuleProperty> | cdk.IResolvable;
    }
    /**
     * `ScalingConstraints` is a subproperty of the `AutoScalingPolicy` property type.
     *
     * `ScalingConstraints` defines the upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or shrink below these limits.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingconstraints.html
     */
    interface ScalingConstraintsProperty {
        /**
         * The upper boundary of Amazon EC2 instances in an instance group beyond which scaling activities are not allowed to grow.
         *
         * Scale-out activities will not add instances beyond this boundary.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingconstraints.html#cfn-emr-cluster-scalingconstraints-maxcapacity
         */
        readonly maxCapacity: number;
        /**
         * The lower boundary of Amazon EC2 instances in an instance group below which scaling activities are not allowed to shrink.
         *
         * Scale-in activities will not terminate instances below this boundary.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingconstraints.html#cfn-emr-cluster-scalingconstraints-mincapacity
         */
        readonly minCapacity: number;
    }
    /**
     * `ScalingRule` is a subproperty of the `AutoScalingPolicy` property type.
     *
     * `ScalingRule` defines the scale-in or scale-out rules for scaling activity, including the CloudWatch metric alarm that triggers activity, how EC2 instances are added or removed, and the periodicity of adjustments. The automatic scaling policy for an instance group can comprise one or more automatic scaling rules.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingrule.html
     */
    interface ScalingRuleProperty {
        /**
         * The conditions that trigger an automatic scaling activity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingrule.html#cfn-emr-cluster-scalingrule-action
         */
        readonly action: cdk.IResolvable | CfnCluster.ScalingActionProperty;
        /**
         * A friendly, more verbose description of the automatic scaling rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingrule.html#cfn-emr-cluster-scalingrule-description
         */
        readonly description?: string;
        /**
         * The name used to identify an automatic scaling rule.
         *
         * Rule names must be unique within a scaling policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingrule.html#cfn-emr-cluster-scalingrule-name
         */
        readonly name: string;
        /**
         * The CloudWatch alarm definition that determines when automatic scaling activity is triggered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingrule.html#cfn-emr-cluster-scalingrule-trigger
         */
        readonly trigger: cdk.IResolvable | CfnCluster.ScalingTriggerProperty;
    }
    /**
     * `ScalingAction` is a subproperty of the `ScalingRule` property type.
     *
     * `ScalingAction` determines the type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingaction.html
     */
    interface ScalingActionProperty {
        /**
         * Not available for instance groups.
         *
         * Instance groups use the market type specified for the group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingaction.html#cfn-emr-cluster-scalingaction-market
         */
        readonly market?: string;
        /**
         * The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingaction.html#cfn-emr-cluster-scalingaction-simplescalingpolicyconfiguration
         */
        readonly simpleScalingPolicyConfiguration: cdk.IResolvable | CfnCluster.SimpleScalingPolicyConfigurationProperty;
    }
    /**
     * `SimpleScalingPolicyConfiguration` is a subproperty of the `ScalingAction` property type.
     *
     * `SimpleScalingPolicyConfiguration` determines how an automatic scaling action adds or removes instances, the cooldown period, and the number of EC2 instances that are added each time the CloudWatch metric alarm condition is satisfied.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-simplescalingpolicyconfiguration.html
     */
    interface SimpleScalingPolicyConfigurationProperty {
        /**
         * The way in which Amazon EC2 instances are added (if `ScalingAdjustment` is a positive number) or terminated (if `ScalingAdjustment` is a negative number) each time the scaling activity is triggered.
         *
         * `CHANGE_IN_CAPACITY` is the default. `CHANGE_IN_CAPACITY` indicates that the Amazon EC2 instance count increments or decrements by `ScalingAdjustment` , which should be expressed as an integer. `PERCENT_CHANGE_IN_CAPACITY` indicates the instance count increments or decrements by the percentage specified by `ScalingAdjustment` , which should be expressed as an integer. For example, 20 indicates an increase in 20% increments of cluster capacity. `EXACT_CAPACITY` indicates the scaling activity results in an instance group with the number of Amazon EC2 instances specified by `ScalingAdjustment` , which should be expressed as a positive integer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-simplescalingpolicyconfiguration.html#cfn-emr-cluster-simplescalingpolicyconfiguration-adjustmenttype
         */
        readonly adjustmentType?: string;
        /**
         * The amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start.
         *
         * The default value is 0.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-simplescalingpolicyconfiguration.html#cfn-emr-cluster-simplescalingpolicyconfiguration-cooldown
         */
        readonly coolDown?: number;
        /**
         * The amount by which to scale in or scale out, based on the specified `AdjustmentType` .
         *
         * A positive value adds to the instance group's Amazon EC2 instance count while a negative number removes instances. If `AdjustmentType` is set to `EXACT_CAPACITY` , the number should only be a positive integer. If `AdjustmentType` is set to `PERCENT_CHANGE_IN_CAPACITY` , the value should express the percentage as an integer. For example, -20 indicates a decrease in 20% increments of cluster capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-simplescalingpolicyconfiguration.html#cfn-emr-cluster-simplescalingpolicyconfiguration-scalingadjustment
         */
        readonly scalingAdjustment: number;
    }
    /**
     * `ScalingTrigger` is a subproperty of the `ScalingRule` property type.
     *
     * `ScalingTrigger` determines the conditions that trigger an automatic scaling activity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingtrigger.html
     */
    interface ScalingTriggerProperty {
        /**
         * The definition of a CloudWatch metric alarm.
         *
         * When the defined alarm conditions are met along with other trigger parameters, scaling activity begins.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-scalingtrigger.html#cfn-emr-cluster-scalingtrigger-cloudwatchalarmdefinition
         */
        readonly cloudWatchAlarmDefinition: CfnCluster.CloudWatchAlarmDefinitionProperty | cdk.IResolvable;
    }
    /**
     * `CloudWatchAlarmDefinition` is a subproperty of the `ScalingTrigger` property, which determines when to trigger an automatic scaling activity.
     *
     * Scaling activity begins when you satisfy the defined alarm conditions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-cloudwatchalarmdefinition.html
     */
    interface CloudWatchAlarmDefinitionProperty {
        /**
         * Determines how the metric specified by `MetricName` is compared to the value specified by `Threshold` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-cloudwatchalarmdefinition.html#cfn-emr-cluster-cloudwatchalarmdefinition-comparisonoperator
         */
        readonly comparisonOperator: string;
        /**
         * A CloudWatch metric dimension.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-cloudwatchalarmdefinition.html#cfn-emr-cluster-cloudwatchalarmdefinition-dimensions
         */
        readonly dimensions?: Array<cdk.IResolvable | CfnCluster.MetricDimensionProperty> | cdk.IResolvable;
        /**
         * The number of periods, in five-minute increments, during which the alarm condition must exist before the alarm triggers automatic scaling activity.
         *
         * The default value is `1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-cloudwatchalarmdefinition.html#cfn-emr-cluster-cloudwatchalarmdefinition-evaluationperiods
         */
        readonly evaluationPeriods?: number;
        /**
         * The name of the CloudWatch metric that is watched to determine an alarm condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-cloudwatchalarmdefinition.html#cfn-emr-cluster-cloudwatchalarmdefinition-metricname
         */
        readonly metricName: string;
        /**
         * The namespace for the CloudWatch metric.
         *
         * The default is `AWS/ElasticMapReduce` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-cloudwatchalarmdefinition.html#cfn-emr-cluster-cloudwatchalarmdefinition-namespace
         */
        readonly namespace?: string;
        /**
         * The period, in seconds, over which the statistic is applied.
         *
         * CloudWatch metrics for Amazon EMR are emitted every five minutes (300 seconds), so if you specify a CloudWatch metric, specify `300` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-cloudwatchalarmdefinition.html#cfn-emr-cluster-cloudwatchalarmdefinition-period
         */
        readonly period: number;
        /**
         * The statistic to apply to the metric associated with the alarm.
         *
         * The default is `AVERAGE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-cloudwatchalarmdefinition.html#cfn-emr-cluster-cloudwatchalarmdefinition-statistic
         */
        readonly statistic?: string;
        /**
         * The value against which the specified statistic is compared.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-cloudwatchalarmdefinition.html#cfn-emr-cluster-cloudwatchalarmdefinition-threshold
         */
        readonly threshold: number;
        /**
         * The unit of measure associated with the CloudWatch metric being watched.
         *
         * The value specified for `Unit` must correspond to the units specified in the CloudWatch metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-cloudwatchalarmdefinition.html#cfn-emr-cluster-cloudwatchalarmdefinition-unit
         */
        readonly unit?: string;
    }
    /**
     * `MetricDimension` is a subproperty of the `CloudWatchAlarmDefinition` property type.
     *
     * `MetricDimension` specifies a CloudWatch dimension, which is specified with a `Key` `Value` pair. The key is known as a `Name` in CloudWatch. By default, Amazon EMR uses one dimension whose `Key` is `JobFlowID` and `Value` is a variable representing the cluster ID, which is `${emr.clusterId}` . This enables the automatic scaling rule for EMR to bootstrap when the cluster ID becomes available during cluster creation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-metricdimension.html
     */
    interface MetricDimensionProperty {
        /**
         * The dimension name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-metricdimension.html#cfn-emr-cluster-metricdimension-key
         */
        readonly key: string;
        /**
         * The dimension value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-metricdimension.html#cfn-emr-cluster-metricdimension-value
         */
        readonly value: string;
    }
    /**
     * `PlacementType` is a property of the `AWS::EMR::Cluster` resource.
     *
     * `PlacementType` determines the Amazon EC2 Availability Zone configuration of the cluster (job flow).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-placementtype.html
     */
    interface PlacementTypeProperty {
        /**
         * The Amazon EC2 Availability Zone for the cluster.
         *
         * `AvailabilityZone` is used for uniform instance groups, while `AvailabilityZones` (plural) is used for instance fleets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-placementtype.html#cfn-emr-cluster-placementtype-availabilityzone
         */
        readonly availabilityZone: string;
    }
    /**
     * `KerberosAttributes` is a property of the `AWS::EMR::Cluster` resource.
     *
     * `KerberosAttributes` define the cluster-specific Kerberos configuration when Kerberos authentication is enabled using a security configuration. The cluster-specific configuration must be compatible with the security configuration. For more information see [Use Kerberos Authentication](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html) in the *EMR Management Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-kerberosattributes.html
     */
    interface KerberosAttributesProperty {
        /**
         * The Active Directory password for `ADDomainJoinUser` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-kerberosattributes.html#cfn-emr-cluster-kerberosattributes-addomainjoinpassword
         */
        readonly adDomainJoinPassword?: string;
        /**
         * Required only when establishing a cross-realm trust with an Active Directory domain.
         *
         * A user with sufficient privileges to join resources to the domain.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-kerberosattributes.html#cfn-emr-cluster-kerberosattributes-addomainjoinuser
         */
        readonly adDomainJoinUser?: string;
        /**
         * Required only when establishing a cross-realm trust with a KDC in a different realm.
         *
         * The cross-realm principal password, which must be identical across realms.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-kerberosattributes.html#cfn-emr-cluster-kerberosattributes-crossrealmtrustprincipalpassword
         */
        readonly crossRealmTrustPrincipalPassword?: string;
        /**
         * The password used within the cluster for the kadmin service on the cluster-dedicated KDC, which maintains Kerberos principals, password policies, and keytabs for the cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-kerberosattributes.html#cfn-emr-cluster-kerberosattributes-kdcadminpassword
         */
        readonly kdcAdminPassword: string;
        /**
         * The name of the Kerberos realm to which all nodes in a cluster belong.
         *
         * For example, `EC2.INTERNAL` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-kerberosattributes.html#cfn-emr-cluster-kerberosattributes-realm
         */
        readonly realm: string;
    }
    /**
     * Managed scaling policy for an Amazon EMR cluster.
     *
     * The policy specifies the limits for resources that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-managedscalingpolicy.html
     */
    interface ManagedScalingPolicyProperty {
        /**
         * The Amazon EC2 unit limits for a managed scaling policy.
         *
         * The managed scaling activity of a cluster is not allowed to go above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-managedscalingpolicy.html#cfn-emr-cluster-managedscalingpolicy-computelimits
         */
        readonly computeLimits?: CfnCluster.ComputeLimitsProperty | cdk.IResolvable;
    }
    /**
     * The Amazon EC2 unit limits for a managed scaling policy.
     *
     * The managed scaling activity of a cluster can not be above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-computelimits.html
     */
    interface ComputeLimitsProperty {
        /**
         * The upper boundary of Amazon EC2 units.
         *
         * It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. Managed scaling activities are not allowed beyond this boundary. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-computelimits.html#cfn-emr-cluster-computelimits-maximumcapacityunits
         */
        readonly maximumCapacityUnits: number;
        /**
         * The upper boundary of Amazon EC2 units for core node type in a cluster.
         *
         * It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. The core units are not allowed to scale beyond this boundary. The parameter is used to split capacity allocation between core and task nodes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-computelimits.html#cfn-emr-cluster-computelimits-maximumcorecapacityunits
         */
        readonly maximumCoreCapacityUnits?: number;
        /**
         * The upper boundary of On-Demand Amazon EC2 units.
         *
         * It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. The On-Demand units are not allowed to scale beyond this boundary. The parameter is used to split capacity allocation between On-Demand and Spot Instances.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-computelimits.html#cfn-emr-cluster-computelimits-maximumondemandcapacityunits
         */
        readonly maximumOnDemandCapacityUnits?: number;
        /**
         * The lower boundary of Amazon EC2 units.
         *
         * It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. Managed scaling activities are not allowed beyond this boundary. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-computelimits.html#cfn-emr-cluster-computelimits-minimumcapacityunits
         */
        readonly minimumCapacityUnits: number;
        /**
         * The unit type used for specifying a managed scaling policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-computelimits.html#cfn-emr-cluster-computelimits-unittype
         */
        readonly unitType: string;
    }
    /**
     * `StepConfig` is a property of the `AWS::EMR::Cluster` resource.
     *
     * The `StepConfig` property type specifies a cluster (job flow) step, which runs only on the master node. Steps are used to submit data processing jobs to the cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-stepconfig.html
     */
    interface StepConfigProperty {
        /**
         * The action to take when the cluster step fails.
         *
         * Possible values are `CANCEL_AND_WAIT` and `CONTINUE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-stepconfig.html#cfn-emr-cluster-stepconfig-actiononfailure
         */
        readonly actionOnFailure?: string;
        /**
         * The JAR file used for the step.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-stepconfig.html#cfn-emr-cluster-stepconfig-hadoopjarstep
         */
        readonly hadoopJarStep: CfnCluster.HadoopJarStepConfigProperty | cdk.IResolvable;
        /**
         * The name of the step.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-stepconfig.html#cfn-emr-cluster-stepconfig-name
         */
        readonly name: string;
    }
    /**
     * The `HadoopJarStepConfig` property type specifies a job flow step consisting of a JAR file whose main function will be executed.
     *
     * The main function submits a job for the cluster to execute as a step on the master node, and then waits for the job to finish or fail before executing subsequent steps.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-hadoopjarstepconfig.html
     */
    interface HadoopJarStepConfigProperty {
        /**
         * A list of command line arguments passed to the JAR file's main function when executed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-hadoopjarstepconfig.html#cfn-emr-cluster-hadoopjarstepconfig-args
         */
        readonly args?: Array<string>;
        /**
         * A path to a JAR file run during the step.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-hadoopjarstepconfig.html#cfn-emr-cluster-hadoopjarstepconfig-jar
         */
        readonly jar: string;
        /**
         * The name of the main class in the specified Java file.
         *
         * If not specified, the JAR file should specify a Main-Class in its manifest file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-hadoopjarstepconfig.html#cfn-emr-cluster-hadoopjarstepconfig-mainclass
         */
        readonly mainClass?: string;
        /**
         * A list of Java properties that are set when the step runs.
         *
         * You can use these properties to pass key-value pairs to your main function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-hadoopjarstepconfig.html#cfn-emr-cluster-hadoopjarstepconfig-stepproperties
         */
        readonly stepProperties?: Array<cdk.IResolvable | CfnCluster.KeyValueProperty> | cdk.IResolvable;
    }
    /**
     * `KeyValue` is a subproperty of the `HadoopJarStepConfig` property type.
     *
     * `KeyValue` is used to pass parameters to a step.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-keyvalue.html
     */
    interface KeyValueProperty {
        /**
         * The unique identifier of a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-keyvalue.html#cfn-emr-cluster-keyvalue-key
         */
        readonly key?: string;
        /**
         * The value part of the identified key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-keyvalue.html#cfn-emr-cluster-keyvalue-value
         */
        readonly value?: string;
    }
    /**
     * Placement group configuration for an Amazon EMR cluster.
     *
     * The configuration specifies the placement strategy that can be applied to instance roles during cluster creation.
     *
     * To use this configuration, consider attaching managed policy AmazonElasticMapReducePlacementGroupPolicy to the Amazon EMR role.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-placementgroupconfig.html
     */
    interface PlacementGroupConfigProperty {
        /**
         * Role of the instance in the cluster.
         *
         * Starting with Amazon EMR release 5.23.0, the only supported instance role is `MASTER` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-placementgroupconfig.html#cfn-emr-cluster-placementgroupconfig-instancerole
         */
        readonly instanceRole: string;
        /**
         * Amazon EC2 Placement Group strategy associated with instance role.
         *
         * Starting with Amazon EMR release 5.23.0, the only supported placement strategy is `SPREAD` for the `MASTER` instance role.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-cluster-placementgroupconfig.html#cfn-emr-cluster-placementgroupconfig-placementstrategy
         */
        readonly placementStrategy?: string;
    }
}
/**
 * Properties for defining a `CfnCluster`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html
 */
export interface CfnClusterProps {
    /**
     * A JSON string for selecting additional features.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-additionalinfo
     */
    readonly additionalInfo?: any | cdk.IResolvable;
    /**
     * The applications to install on this cluster, for example, Spark, Flink, Oozie, Zeppelin, and so on.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-applications
     */
    readonly applications?: Array<CfnCluster.ApplicationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * An IAM role for automatic scaling policies.
     *
     * The default role is `EMR_AutoScaling_DefaultRole` . The IAM role provides permissions that the automatic scaling feature requires to launch and terminate Amazon EC2 instances in an instance group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-autoscalingrole
     */
    readonly autoScalingRole?: string;
    /**
     * An auto-termination policy for an Amazon EMR cluster.
     *
     * An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see [Control cluster termination](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-autoterminationpolicy
     */
    readonly autoTerminationPolicy?: CfnCluster.AutoTerminationPolicyProperty | cdk.IResolvable;
    /**
     * A list of bootstrap actions to run before Hadoop starts on the cluster nodes.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-bootstrapactions
     */
    readonly bootstrapActions?: Array<CfnCluster.BootstrapActionConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Applies only to Amazon EMR releases 4.x and later. The list of configurations that are supplied to the Amazon EMR cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-configurations
     */
    readonly configurations?: Array<CfnCluster.ConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Available only in Amazon EMR releases 5.7.0 and later. The ID of a custom Amazon EBS-backed Linux AMI if the cluster uses a custom AMI.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-customamiid
     */
    readonly customAmiId?: string;
    /**
     * The IOPS, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance.
     *
     * Available in Amazon EMR releases 6.15.0 and later.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-ebsrootvolumeiops
     */
    readonly ebsRootVolumeIops?: number;
    /**
     * The size, in GiB, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance.
     *
     * Available in Amazon EMR releases 4.x and later.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-ebsrootvolumesize
     */
    readonly ebsRootVolumeSize?: number;
    /**
     * The throughput, in MiB/s, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance.
     *
     * Available in Amazon EMR releases 6.15.0 and later.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-ebsrootvolumethroughput
     */
    readonly ebsRootVolumeThroughput?: number;
    /**
     * A specification of the number and type of Amazon EC2 instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-instances
     */
    readonly instances: cdk.IResolvable | CfnCluster.JobFlowInstancesConfigProperty;
    /**
     * Also called instance profile and Amazon EC2 role.
     *
     * An IAM role for an Amazon EMR cluster. The Amazon EC2 instances of the cluster assume this role. The default role is `EMR_EC2_DefaultRole` . In order to use the default role, you must have already created it using the AWS CLI or console.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-jobflowrole
     */
    readonly jobFlowRole: string;
    /**
     * Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration.
     *
     * For more information see [Use Kerberos Authentication](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html) in the *Amazon EMR Management Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-kerberosattributes
     */
    readonly kerberosAttributes?: cdk.IResolvable | CfnCluster.KerberosAttributesProperty;
    /**
     * The AWS KMS key used for encrypting log files.
     *
     * This attribute is only available with Amazon EMR 5.30.0 and later, excluding Amazon EMR 6.0.0.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-logencryptionkmskeyid
     */
    readonly logEncryptionKmsKeyId?: string;
    /**
     * The path to the Amazon S3 location where logs for this cluster are stored.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-loguri
     */
    readonly logUri?: string;
    /**
     * Creates or updates a managed scaling policy for an Amazon EMR cluster.
     *
     * The managed scaling policy defines the limits for resources, such as Amazon EC2 instances that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-managedscalingpolicy
     */
    readonly managedScalingPolicy?: cdk.IResolvable | CfnCluster.ManagedScalingPolicyProperty;
    /**
     * The name of the cluster.
     *
     * This parameter can't contain the characters <, >, $, |, or ` (backtick).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-name
     */
    readonly name: string;
    /**
     * The Amazon Linux release specified in a cluster launch RunJobFlow request.
     *
     * If no Amazon Linux release was specified, the default Amazon Linux release is shown in the response.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-osreleaselabel
     */
    readonly osReleaseLabel?: string;
    /**
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-placementgroupconfigs
     */
    readonly placementGroupConfigs?: Array<cdk.IResolvable | CfnCluster.PlacementGroupConfigProperty> | cdk.IResolvable;
    /**
     * The Amazon EMR release label, which determines the version of open-source application packages installed on the cluster.
     *
     * Release labels are in the form `emr-x.x.x` , where x.x.x is an Amazon EMR release version such as `emr-5.14.0` . For more information about Amazon EMR release versions and included application versions and features, see [](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/) . The release label applies only to Amazon EMR releases version 4.0 and later. Earlier versions use `AmiVersion` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-releaselabel
     */
    readonly releaseLabel?: string;
    /**
     * The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized.
     *
     * `TERMINATE_AT_INSTANCE_HOUR` indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. `TERMINATE_AT_TASK_COMPLETION` indicates that Amazon EMR adds nodes to a deny list and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. `TERMINATE_AT_TASK_COMPLETION` is available only in Amazon EMR releases 4.1.0 and later, and is the default for versions of Amazon EMR earlier than 5.1.0.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-scaledownbehavior
     */
    readonly scaleDownBehavior?: string;
    /**
     * The name of the security configuration applied to the cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-securityconfiguration
     */
    readonly securityConfiguration?: string;
    /**
     * The IAM role that Amazon EMR assumes in order to access AWS resources on your behalf.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-servicerole
     */
    readonly serviceRole: string;
    /**
     * Specifies the number of steps that can be executed concurrently.
     *
     * The default value is `1` . The maximum value is `256` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-stepconcurrencylevel
     */
    readonly stepConcurrencyLevel?: number;
    /**
     * A list of steps to run.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-steps
     */
    readonly steps?: Array<cdk.IResolvable | CfnCluster.StepConfigProperty> | cdk.IResolvable;
    /**
     * A list of tags associated with a cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Indicates whether the cluster is visible to all IAM users of the AWS account associated with the cluster.
     *
     * If this value is set to `true` , all IAM users of that AWS account can view and manage the cluster if they have the proper policy permissions set. If this value is `false` , only the IAM user that created the cluster can view and manage it. This value can be changed using the SetVisibleToAllUsers action.
     *
     * > When you create clusters directly through the EMR console or API, this value is set to `true` by default. However, for `AWS::EMR::Cluster` resources in CloudFormation, the default is `false` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-cluster.html#cfn-emr-cluster-visibletoallusers
     */
    readonly visibleToAllUsers?: boolean | cdk.IResolvable;
}
/**
 * Use `InstanceFleetConfig` to define instance fleets for an EMR cluster.
 *
 * A cluster can not use both instance fleets and instance groups. For more information, see [Configure Instance Fleets](https://docs.aws.amazon.com//emr/latest/ManagementGuide/emr-instance-group-configuration.html) in the *Amazon EMR Management Guide* .
 *
 * > The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions. > You can currently only add a task instance fleet to a cluster with this resource. If you use this resource, CloudFormation waits for the cluster launch to complete before adding the task instance fleet to the cluster. In order to add a task instance fleet to the cluster as part of the cluster launch and minimize delays in provisioning task nodes, use the `TaskInstanceFleets` subproperty for the [AWS::EMR::Cluster JobFlowInstancesConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-jobflowinstancesconfig.html) property instead. To use this subproperty, see [AWS::EMR::Cluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticmapreduce-cluster.html) for examples.
 *
 * @cloudformationResource AWS::EMR::InstanceFleetConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancefleetconfig.html
 */
export declare class CfnInstanceFleetConfig extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInstanceFleetConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInstanceFleetConfig;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The unique identifier of the EMR cluster.
     */
    clusterId: string;
    /**
     * The node type that the instance fleet hosts.
     */
    instanceFleetType: string;
    /**
     * `InstanceTypeConfigs` determine the EC2 instances that Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities.
     */
    instanceTypeConfigs?: Array<CfnInstanceFleetConfig.InstanceTypeConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The launch specification for the instance fleet.
     */
    launchSpecifications?: CfnInstanceFleetConfig.InstanceFleetProvisioningSpecificationsProperty | cdk.IResolvable;
    /**
     * The friendly name of the instance fleet.
     */
    name?: string;
    /**
     * The resize specification for the instance fleet.
     */
    resizeSpecifications?: CfnInstanceFleetConfig.InstanceFleetResizingSpecificationsProperty | cdk.IResolvable;
    /**
     * The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision.
     */
    targetOnDemandCapacity?: number;
    /**
     * The target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision.
     */
    targetSpotCapacity?: number;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnInstanceFleetConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnInstanceFleetConfig {
    /**
     * `InstanceType` config is a subproperty of `InstanceFleetConfig` .
     *
     * An instance type configuration specifies each instance type in an instance fleet. The configuration determines the EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities.
     *
     * > The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancetypeconfig.html
     */
    interface InstanceTypeConfigProperty {
        /**
         * The bid price for each Amazon EC2 Spot Instance type as defined by `InstanceType` .
         *
         * Expressed in USD. If neither `BidPrice` nor `BidPriceAsPercentageOfOnDemandPrice` is provided, `BidPriceAsPercentageOfOnDemandPrice` defaults to 100%.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancetypeconfig.html#cfn-emr-instancefleetconfig-instancetypeconfig-bidprice
         */
        readonly bidPrice?: string;
        /**
         * The bid price, as a percentage of On-Demand price, for each Amazon EC2 Spot Instance as defined by `InstanceType` .
         *
         * Expressed as a number (for example, 20 specifies 20%). If neither `BidPrice` nor `BidPriceAsPercentageOfOnDemandPrice` is provided, `BidPriceAsPercentageOfOnDemandPrice` defaults to 100%.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancetypeconfig.html#cfn-emr-instancefleetconfig-instancetypeconfig-bidpriceaspercentageofondemandprice
         */
        readonly bidPriceAsPercentageOfOnDemandPrice?: number;
        /**
         * > Amazon EMR releases 4.x or later.
         *
         * An optional configuration specification to be used when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see [Configuring Applications](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancetypeconfig.html#cfn-emr-instancefleetconfig-instancetypeconfig-configurations
         */
        readonly configurations?: Array<CfnInstanceFleetConfig.ConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * The custom AMI ID to use for the instance type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancetypeconfig.html#cfn-emr-instancefleetconfig-instancetypeconfig-customamiid
         */
        readonly customAmiId?: string;
        /**
         * The configuration of Amazon Elastic Block Store (Amazon EBS) attached to each instance as defined by `InstanceType` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancetypeconfig.html#cfn-emr-instancefleetconfig-instancetypeconfig-ebsconfiguration
         */
        readonly ebsConfiguration?: CfnInstanceFleetConfig.EbsConfigurationProperty | cdk.IResolvable;
        /**
         * An Amazon EC2 instance type, such as `m3.xlarge` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancetypeconfig.html#cfn-emr-instancefleetconfig-instancetypeconfig-instancetype
         */
        readonly instanceType: string;
        /**
         * The priority at which Amazon EMR launches the Amazon EC2 instances with this instance type.
         *
         * Priority starts at 0, which is the highest priority. Amazon EMR considers the highest priority first.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancetypeconfig.html#cfn-emr-instancefleetconfig-instancetypeconfig-priority
         */
        readonly priority?: number;
        /**
         * The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in `InstanceFleetConfig` .
         *
         * This value is 1 for a master instance fleet, and must be 1 or greater for core and task instance fleets. Defaults to 1 if not specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancetypeconfig.html#cfn-emr-instancefleetconfig-instancetypeconfig-weightedcapacity
         */
        readonly weightedCapacity?: number;
    }
    /**
     * > Used only with Amazon EMR release 4.0 and later.
     *
     * `Configuration` specifies optional configurations for customizing open-source big data applications and environment parameters. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see [Configuring Applications](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html) in the *Amazon EMR Release Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-configuration.html
     */
    interface ConfigurationProperty {
        /**
         * The classification within a configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-configuration.html#cfn-emr-instancefleetconfig-configuration-classification
         */
        readonly classification?: string;
        /**
         * Within a configuration classification, a set of properties that represent the settings that you want to change in the configuration file.
         *
         * Duplicates not allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-configuration.html#cfn-emr-instancefleetconfig-configuration-configurationproperties
         */
        readonly configurationProperties?: cdk.IResolvable | Record<string, string>;
        /**
         * A list of additional configurations to apply within a configuration object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-configuration.html#cfn-emr-instancefleetconfig-configuration-configurations
         */
        readonly configurations?: Array<CfnInstanceFleetConfig.ConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * `EbsConfiguration` determines the EBS volumes to attach to EMR cluster instances.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ebsconfiguration.html
     */
    interface EbsConfigurationProperty {
        /**
         * An array of Amazon EBS volume specifications attached to a cluster instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ebsconfiguration.html#cfn-emr-instancefleetconfig-ebsconfiguration-ebsblockdeviceconfigs
         */
        readonly ebsBlockDeviceConfigs?: Array<CfnInstanceFleetConfig.EbsBlockDeviceConfigProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Indicates whether an Amazon EBS volume is EBS-optimized.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ebsconfiguration.html#cfn-emr-instancefleetconfig-ebsconfiguration-ebsoptimized
         */
        readonly ebsOptimized?: boolean | cdk.IResolvable;
    }
    /**
     * `EbsBlockDeviceConfig` is a subproperty of the `EbsConfiguration` property type.
     *
     * `EbsBlockDeviceConfig` defines the number and type of EBS volumes to associate with all EC2 instances in an EMR cluster.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ebsblockdeviceconfig.html
     */
    interface EbsBlockDeviceConfigProperty {
        /**
         * EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s) that are requested for the EBS volume attached to an Amazon EC2 instance in the cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ebsblockdeviceconfig.html#cfn-emr-instancefleetconfig-ebsblockdeviceconfig-volumespecification
         */
        readonly volumeSpecification: cdk.IResolvable | CfnInstanceFleetConfig.VolumeSpecificationProperty;
        /**
         * Number of EBS volumes with a specific volume configuration that are associated with every instance in the instance group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ebsblockdeviceconfig.html#cfn-emr-instancefleetconfig-ebsblockdeviceconfig-volumesperinstance
         */
        readonly volumesPerInstance?: number;
    }
    /**
     * `VolumeSpecification` is a subproperty of the `EbsBlockDeviceConfig` property type.
     *
     * `VolumeSecification` determines the volume type, IOPS, and size (GiB) for EBS volumes attached to EC2 instances.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-volumespecification.html
     */
    interface VolumeSpecificationProperty {
        /**
         * The number of I/O operations per second (IOPS) that the volume supports.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-volumespecification.html#cfn-emr-instancefleetconfig-volumespecification-iops
         */
        readonly iops?: number;
        /**
         * The volume size, in gibibytes (GiB).
         *
         * This can be a number from 1 - 1024. If the volume type is EBS-optimized, the minimum value is 10.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-volumespecification.html#cfn-emr-instancefleetconfig-volumespecification-sizeingb
         */
        readonly sizeInGb: number;
        /**
         * The throughput, in mebibyte per second (MiB/s).
         *
         * This optional parameter can be a number from 125 - 1000 and is valid only for gp3 volumes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-volumespecification.html#cfn-emr-instancefleetconfig-volumespecification-throughput
         */
        readonly throughput?: number;
        /**
         * The volume type.
         *
         * Volume types supported are gp3, gp2, io1, st1, sc1, and standard.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-volumespecification.html#cfn-emr-instancefleetconfig-volumespecification-volumetype
         */
        readonly volumeType: string;
    }
    /**
     * > The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.
     *
     * `InstanceTypeConfig` is a sub-property of `InstanceFleetConfig` . `InstanceTypeConfig` determines the EC2 instances that Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancefleetprovisioningspecifications.html
     */
    interface InstanceFleetProvisioningSpecificationsProperty {
        /**
         * The launch specification for On-Demand Instances in the instance fleet, which determines the allocation strategy and capacity reservation options.
         *
         * > The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions. On-Demand Instances allocation strategy is available in Amazon EMR releases 5.12.1 and later.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancefleetprovisioningspecifications.html#cfn-emr-instancefleetconfig-instancefleetprovisioningspecifications-ondemandspecification
         */
        readonly onDemandSpecification?: cdk.IResolvable | CfnInstanceFleetConfig.OnDemandProvisioningSpecificationProperty;
        /**
         * The launch specification for Spot instances in the fleet, which determines the allocation strategy, defined duration, and provisioning timeout behavior.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancefleetprovisioningspecifications.html#cfn-emr-instancefleetconfig-instancefleetprovisioningspecifications-spotspecification
         */
        readonly spotSpecification?: cdk.IResolvable | CfnInstanceFleetConfig.SpotProvisioningSpecificationProperty;
    }
    /**
     * The launch specification for On-Demand Instances in the instance fleet, which determines the allocation strategy.
     *
     * > The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions. On-Demand Instances allocation strategy is available in Amazon EMR releases 5.12.1 and later.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ondemandprovisioningspecification.html
     */
    interface OnDemandProvisioningSpecificationProperty {
        /**
         * Specifies the strategy to use in launching On-Demand instance fleets.
         *
         * Available options are `lowest-price` and `prioritized` . `lowest-price` specifies to launch the instances with the lowest price first, and `prioritized` specifies that Amazon EMR should launch the instances with the highest priority first. The default is `lowest-price` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ondemandprovisioningspecification.html#cfn-emr-instancefleetconfig-ondemandprovisioningspecification-allocationstrategy
         */
        readonly allocationStrategy: string;
        /**
         * The launch specification for On-Demand instances in the instance fleet, which determines the allocation strategy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ondemandprovisioningspecification.html#cfn-emr-instancefleetconfig-ondemandprovisioningspecification-capacityreservationoptions
         */
        readonly capacityReservationOptions?: cdk.IResolvable | CfnInstanceFleetConfig.OnDemandCapacityReservationOptionsProperty;
    }
    /**
     * Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ondemandcapacityreservationoptions.html
     */
    interface OnDemandCapacityReservationOptionsProperty {
        /**
         * Indicates the instance's Capacity Reservation preferences. Possible preferences include:.
         *
         * - `open` - The instance can run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).
         * - `none` - The instance avoids running in a Capacity Reservation even if one is available. The instance runs as an On-Demand Instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ondemandcapacityreservationoptions.html#cfn-emr-instancefleetconfig-ondemandcapacityreservationoptions-capacityreservationpreference
         */
        readonly capacityReservationPreference?: string;
        /**
         * The ARN of the Capacity Reservation resource group in which to run the instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ondemandcapacityreservationoptions.html#cfn-emr-instancefleetconfig-ondemandcapacityreservationoptions-capacityreservationresourcegrouparn
         */
        readonly capacityReservationResourceGroupArn?: string;
        /**
         * Indicates whether to use unused Capacity Reservations for fulfilling On-Demand capacity.
         *
         * If you specify `use-capacity-reservations-first` , the fleet uses unused Capacity Reservations to fulfill On-Demand capacity up to the target On-Demand capacity. If multiple instance pools have unused Capacity Reservations, the On-Demand allocation strategy ( `lowest-price` ) is applied. If the number of unused Capacity Reservations is less than the On-Demand target capacity, the remaining On-Demand target capacity is launched according to the On-Demand allocation strategy ( `lowest-price` ).
         *
         * If you do not specify a value, the fleet fulfills the On-Demand capacity according to the chosen On-Demand allocation strategy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ondemandcapacityreservationoptions.html#cfn-emr-instancefleetconfig-ondemandcapacityreservationoptions-usagestrategy
         */
        readonly usageStrategy?: string;
    }
    /**
     * `SpotProvisioningSpecification` is a subproperty of the `InstanceFleetProvisioningSpecifications` property type.
     *
     * `SpotProvisioningSpecification` determines the launch specification for Spot instances in the instance fleet, which includes the defined duration and provisioning timeout behavior.
     *
     * > The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-spotprovisioningspecification.html
     */
    interface SpotProvisioningSpecificationProperty {
        /**
         * Specifies one of the following strategies to launch Spot Instance fleets: `capacity-optimized` , `price-capacity-optimized` , `lowest-price` , or `diversified` , and `capacity-optimized-prioritized` .
         *
         * For more information on the provisioning strategies, see [Allocation strategies for Spot Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-allocation-strategy.html) in the *Amazon EC2 User Guide for Linux Instances* .
         *
         * > When you launch a Spot Instance fleet with the old console, it automatically launches with the `capacity-optimized` strategy. You can't change the allocation strategy from the old console.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-spotprovisioningspecification.html#cfn-emr-instancefleetconfig-spotprovisioningspecification-allocationstrategy
         */
        readonly allocationStrategy?: string;
        /**
         * The defined duration for Spot Instances (also known as Spot blocks) in minutes.
         *
         * When specified, the Spot Instance does not terminate before the defined duration expires, and defined duration pricing for Spot Instances applies. Valid values are 60, 120, 180, 240, 300, or 360. The duration period starts as soon as a Spot Instance receives its instance ID. At the end of the duration, Amazon EC2 marks the Spot Instance for termination and provides a Spot Instance termination notice, which gives the instance a two-minute warning before it terminates.
         *
         * > Spot Instances with a defined duration (also known as Spot blocks) are no longer available to new customers from July 1, 2021. For customers who have previously used the feature, we will continue to support Spot Instances with a defined duration until December 31, 2022.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-spotprovisioningspecification.html#cfn-emr-instancefleetconfig-spotprovisioningspecification-blockdurationminutes
         */
        readonly blockDurationMinutes?: number;
        /**
         * The action to take when `TargetSpotCapacity` has not been fulfilled when the `TimeoutDurationMinutes` has expired;
         *
         * that is, when all Spot Instances could not be provisioned within the Spot provisioning timeout. Valid values are `TERMINATE_CLUSTER` and `SWITCH_TO_ON_DEMAND` . SWITCH_TO_ON_DEMAND specifies that if no Spot Instances are available, On-Demand Instances should be provisioned to fulfill any remaining Spot capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-spotprovisioningspecification.html#cfn-emr-instancefleetconfig-spotprovisioningspecification-timeoutaction
         */
        readonly timeoutAction: string;
        /**
         * The Spot provisioning timeout period in minutes.
         *
         * If Spot Instances are not provisioned within this time period, the `TimeOutAction` is taken. Minimum value is 5 and maximum value is 1440. The timeout applies only during initial provisioning, when the cluster is first created.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-spotprovisioningspecification.html#cfn-emr-instancefleetconfig-spotprovisioningspecification-timeoutdurationminutes
         */
        readonly timeoutDurationMinutes: number;
    }
    /**
     * The resize specification for On-Demand and Spot Instances in the fleet.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancefleetresizingspecifications.html
     */
    interface InstanceFleetResizingSpecificationsProperty {
        /**
         * The resize specification for On-Demand Instances in the instance fleet, which contains the allocation strategy, capacity reservation options, and the resize timeout period.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancefleetresizingspecifications.html#cfn-emr-instancefleetconfig-instancefleetresizingspecifications-ondemandresizespecification
         */
        readonly onDemandResizeSpecification?: cdk.IResolvable | CfnInstanceFleetConfig.OnDemandResizingSpecificationProperty;
        /**
         * The resize specification for Spot Instances in the instance fleet, which contains the allocation strategy and the resize timeout period.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-instancefleetresizingspecifications.html#cfn-emr-instancefleetconfig-instancefleetresizingspecifications-spotresizespecification
         */
        readonly spotResizeSpecification?: cdk.IResolvable | CfnInstanceFleetConfig.SpotResizingSpecificationProperty;
    }
    /**
     * The resize specification for On-Demand Instances in the instance fleet, which contains the resize timeout period.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ondemandresizingspecification.html
     */
    interface OnDemandResizingSpecificationProperty {
        /**
         * Specifies the allocation strategy to use to launch On-Demand instances during a resize.
         *
         * The default is `lowest-price` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ondemandresizingspecification.html#cfn-emr-instancefleetconfig-ondemandresizingspecification-allocationstrategy
         */
        readonly allocationStrategy?: string;
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ondemandresizingspecification.html#cfn-emr-instancefleetconfig-ondemandresizingspecification-capacityreservationoptions
         */
        readonly capacityReservationOptions?: cdk.IResolvable | CfnInstanceFleetConfig.OnDemandCapacityReservationOptionsProperty;
        /**
         * On-Demand resize timeout in minutes.
         *
         * If On-Demand Instances are not provisioned within this time, the resize workflow stops. The minimum value is 5 minutes, and the maximum value is 10,080 minutes (7 days). The timeout applies to all resize workflows on the Instance Fleet. The resize could be triggered by Amazon EMR Managed Scaling or by the customer (via Amazon EMR Console, Amazon EMR CLI modify-instance-fleet or Amazon EMR SDK ModifyInstanceFleet API) or by Amazon EMR due to Amazon EC2 Spot Reclamation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-ondemandresizingspecification.html#cfn-emr-instancefleetconfig-ondemandresizingspecification-timeoutdurationminutes
         */
        readonly timeoutDurationMinutes?: number;
    }
    /**
     * The resize specification for Spot Instances in the instance fleet, which contains the resize timeout period.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-spotresizingspecification.html
     */
    interface SpotResizingSpecificationProperty {
        /**
         * Specifies the allocation strategy to use to launch Spot instances during a resize.
         *
         * If you run Amazon EMR releases 6.9.0 or higher, the default is `price-capacity-optimized` . If you run Amazon EMR releases 6.8.0 or lower, the default is `capacity-optimized` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-spotresizingspecification.html#cfn-emr-instancefleetconfig-spotresizingspecification-allocationstrategy
         */
        readonly allocationStrategy?: string;
        /**
         * Spot resize timeout in minutes.
         *
         * If Spot Instances are not provisioned within this time, the resize workflow will stop provisioning of Spot instances. Minimum value is 5 minutes and maximum value is 10,080 minutes (7 days). The timeout applies to all resize workflows on the Instance Fleet. The resize could be triggered by Amazon EMR Managed Scaling or by the customer (via Amazon EMR Console, Amazon EMR CLI modify-instance-fleet or Amazon EMR SDK ModifyInstanceFleet API) or by Amazon EMR due to Amazon EC2 Spot Reclamation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancefleetconfig-spotresizingspecification.html#cfn-emr-instancefleetconfig-spotresizingspecification-timeoutdurationminutes
         */
        readonly timeoutDurationMinutes?: number;
    }
}
/**
 * Properties for defining a `CfnInstanceFleetConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancefleetconfig.html
 */
export interface CfnInstanceFleetConfigProps {
    /**
     * The unique identifier of the EMR cluster.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancefleetconfig.html#cfn-emr-instancefleetconfig-clusterid
     */
    readonly clusterId: string;
    /**
     * The node type that the instance fleet hosts.
     *
     * *Allowed Values* : TASK
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancefleetconfig.html#cfn-emr-instancefleetconfig-instancefleettype
     */
    readonly instanceFleetType: string;
    /**
     * `InstanceTypeConfigs` determine the EC2 instances that Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities.
     *
     * > The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancefleetconfig.html#cfn-emr-instancefleetconfig-instancetypeconfigs
     */
    readonly instanceTypeConfigs?: Array<CfnInstanceFleetConfig.InstanceTypeConfigProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The launch specification for the instance fleet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancefleetconfig.html#cfn-emr-instancefleetconfig-launchspecifications
     */
    readonly launchSpecifications?: CfnInstanceFleetConfig.InstanceFleetProvisioningSpecificationsProperty | cdk.IResolvable;
    /**
     * The friendly name of the instance fleet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancefleetconfig.html#cfn-emr-instancefleetconfig-name
     */
    readonly name?: string;
    /**
     * The resize specification for the instance fleet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancefleetconfig.html#cfn-emr-instancefleetconfig-resizespecifications
     */
    readonly resizeSpecifications?: CfnInstanceFleetConfig.InstanceFleetResizingSpecificationsProperty | cdk.IResolvable;
    /**
     * The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision.
     *
     * When the instance fleet launches, Amazon EMR tries to provision On-Demand instances as specified by `InstanceTypeConfig` . Each instance configuration has a specified `WeightedCapacity` . When an On-Demand instance is provisioned, the `WeightedCapacity` units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a `WeightedCapacity` of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units.
     *
     * > If not specified or set to 0, only Spot instances are provisioned for the instance fleet using `TargetSpotCapacity` . At least one of `TargetSpotCapacity` and `TargetOnDemandCapacity` should be greater than 0. For a master instance fleet, only one of `TargetSpotCapacity` and `TargetOnDemandCapacity` can be specified, and its value must be 1.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancefleetconfig.html#cfn-emr-instancefleetconfig-targetondemandcapacity
     */
    readonly targetOnDemandCapacity?: number;
    /**
     * The target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision.
     *
     * When the instance fleet launches, Amazon EMR tries to provision Spot instances as specified by `InstanceTypeConfig` . Each instance configuration has a specified `WeightedCapacity` . When a Spot instance is provisioned, the `WeightedCapacity` units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a `WeightedCapacity` of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units.
     *
     * > If not specified or set to 0, only On-Demand instances are provisioned for the instance fleet. At least one of `TargetSpotCapacity` and `TargetOnDemandCapacity` should be greater than 0. For a master instance fleet, only one of `TargetSpotCapacity` and `TargetOnDemandCapacity` can be specified, and its value must be 1.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancefleetconfig.html#cfn-emr-instancefleetconfig-targetspotcapacity
     */
    readonly targetSpotCapacity?: number;
}
/**
 * Use `InstanceGroupConfig` to define instance groups for an EMR cluster.
 *
 * A cluster can not use both instance groups and instance fleets. For more information, see [Create a Cluster with Instance Fleets or Uniform Instance Groups](https://docs.aws.amazon.com//emr/latest/ManagementGuide/emr-instance-group-configuration.html) in the *Amazon EMR Management Guide* .
 *
 * > You can currently only add task instance groups to a cluster with this resource. If you use this resource, CloudFormation waits for the cluster launch to complete before adding the task instance group to the cluster. In order to add task instance groups to the cluster as part of the cluster launch and minimize delays in provisioning task nodes, use the `TaskInstanceGroups` subproperty for the [AWS::EMR::Cluster JobFlowInstancesConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-elasticmapreduce-cluster-jobflowinstancesconfig.html) property instead. To use this subproperty, see [AWS::EMR::Cluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticmapreduce-cluster.html) for examples.
 *
 * @cloudformationResource AWS::EMR::InstanceGroupConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html
 */
export declare class CfnInstanceGroupConfig extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnInstanceGroupConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnInstanceGroupConfig;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * `AutoScalingPolicy` is a subproperty of `InstanceGroupConfig` .
     */
    autoScalingPolicy?: CfnInstanceGroupConfig.AutoScalingPolicyProperty | cdk.IResolvable;
    /**
     * If specified, indicates that the instance group uses Spot Instances.
     */
    bidPrice?: string;
    /**
     * > Amazon EMR releases 4.x or later.
     */
    configurations?: Array<CfnInstanceGroupConfig.ConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The custom AMI ID to use for the provisioned instance group.
     */
    customAmiId?: string;
    /**
     * `EbsConfiguration` determines the EBS volumes to attach to EMR cluster instances.
     */
    ebsConfiguration?: CfnInstanceGroupConfig.EbsConfigurationProperty | cdk.IResolvable;
    /**
     * Target number of instances for the instance group.
     */
    instanceCount: number;
    /**
     * The role of the instance group in the cluster.
     */
    instanceRole: string;
    /**
     * The Amazon EC2 instance type for all instances in the instance group.
     */
    instanceType: string;
    /**
     * The ID of an Amazon EMR cluster that you want to associate this instance group with.
     */
    jobFlowId: string;
    /**
     * Market type of the Amazon EC2 instances used to create a cluster node.
     */
    market?: string;
    /**
     * Friendly name given to the instance group.
     */
    name?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnInstanceGroupConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnInstanceGroupConfig {
    /**
     * `AutoScalingPolicy` defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric.
     *
     * For more information, see [Using Automatic Scaling in Amazon EMR](https://docs.aws.amazon.com//emr/latest/ManagementGuide/emr-automatic-scaling.html) in the *Amazon EMR Management Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-autoscalingpolicy.html
     */
    interface AutoScalingPolicyProperty {
        /**
         * The upper and lower Amazon EC2 instance limits for an automatic scaling policy.
         *
         * Automatic scaling activity will not cause an instance group to grow above or below these limits.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-autoscalingpolicy.html#cfn-emr-instancegroupconfig-autoscalingpolicy-constraints
         */
        readonly constraints: cdk.IResolvable | CfnInstanceGroupConfig.ScalingConstraintsProperty;
        /**
         * The scale-in and scale-out rules that comprise the automatic scaling policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-autoscalingpolicy.html#cfn-emr-instancegroupconfig-autoscalingpolicy-rules
         */
        readonly rules: Array<cdk.IResolvable | CfnInstanceGroupConfig.ScalingRuleProperty> | cdk.IResolvable;
    }
    /**
     * `ScalingConstraints` is a subproperty of the `AutoScalingPolicy` property type.
     *
     * `ScalingConstraints` defines the upper and lower EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or shrink below these limits.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingconstraints.html
     */
    interface ScalingConstraintsProperty {
        /**
         * The upper boundary of Amazon EC2 instances in an instance group beyond which scaling activities are not allowed to grow.
         *
         * Scale-out activities will not add instances beyond this boundary.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingconstraints.html#cfn-emr-instancegroupconfig-scalingconstraints-maxcapacity
         */
        readonly maxCapacity: number;
        /**
         * The lower boundary of Amazon EC2 instances in an instance group below which scaling activities are not allowed to shrink.
         *
         * Scale-in activities will not terminate instances below this boundary.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingconstraints.html#cfn-emr-instancegroupconfig-scalingconstraints-mincapacity
         */
        readonly minCapacity: number;
    }
    /**
     * `ScalingRule` is a subproperty of the `AutoScalingPolicy` property type.
     *
     * `ScalingRule` defines the scale-in or scale-out rules for scaling activity, including the CloudWatch metric alarm that triggers activity, how EC2 instances are added or removed, and the periodicity of adjustments. The automatic scaling policy for an instance group can comprise one or more automatic scaling rules.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingrule.html
     */
    interface ScalingRuleProperty {
        /**
         * The conditions that trigger an automatic scaling activity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingrule.html#cfn-emr-instancegroupconfig-scalingrule-action
         */
        readonly action: cdk.IResolvable | CfnInstanceGroupConfig.ScalingActionProperty;
        /**
         * A friendly, more verbose description of the automatic scaling rule.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingrule.html#cfn-emr-instancegroupconfig-scalingrule-description
         */
        readonly description?: string;
        /**
         * The name used to identify an automatic scaling rule.
         *
         * Rule names must be unique within a scaling policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingrule.html#cfn-emr-instancegroupconfig-scalingrule-name
         */
        readonly name: string;
        /**
         * The CloudWatch alarm definition that determines when automatic scaling activity is triggered.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingrule.html#cfn-emr-instancegroupconfig-scalingrule-trigger
         */
        readonly trigger: cdk.IResolvable | CfnInstanceGroupConfig.ScalingTriggerProperty;
    }
    /**
     * `ScalingAction` is a subproperty of the `ScalingRule` property type.
     *
     * `ScalingAction` determines the type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingaction.html
     */
    interface ScalingActionProperty {
        /**
         * Not available for instance groups.
         *
         * Instance groups use the market type specified for the group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingaction.html#cfn-emr-instancegroupconfig-scalingaction-market
         */
        readonly market?: string;
        /**
         * The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingaction.html#cfn-emr-instancegroupconfig-scalingaction-simplescalingpolicyconfiguration
         */
        readonly simpleScalingPolicyConfiguration: cdk.IResolvable | CfnInstanceGroupConfig.SimpleScalingPolicyConfigurationProperty;
    }
    /**
     * `SimpleScalingPolicyConfiguration` is a subproperty of the `ScalingAction` property type.
     *
     * `SimpleScalingPolicyConfiguration` determines how an automatic scaling action adds or removes instances, the cooldown period, and the number of EC2 instances that are added each time the CloudWatch metric alarm condition is satisfied.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-simplescalingpolicyconfiguration.html
     */
    interface SimpleScalingPolicyConfigurationProperty {
        /**
         * The way in which Amazon EC2 instances are added (if `ScalingAdjustment` is a positive number) or terminated (if `ScalingAdjustment` is a negative number) each time the scaling activity is triggered.
         *
         * `CHANGE_IN_CAPACITY` is the default. `CHANGE_IN_CAPACITY` indicates that the Amazon EC2 instance count increments or decrements by `ScalingAdjustment` , which should be expressed as an integer. `PERCENT_CHANGE_IN_CAPACITY` indicates the instance count increments or decrements by the percentage specified by `ScalingAdjustment` , which should be expressed as an integer. For example, 20 indicates an increase in 20% increments of cluster capacity. `EXACT_CAPACITY` indicates the scaling activity results in an instance group with the number of Amazon EC2 instances specified by `ScalingAdjustment` , which should be expressed as a positive integer.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-simplescalingpolicyconfiguration.html#cfn-emr-instancegroupconfig-simplescalingpolicyconfiguration-adjustmenttype
         */
        readonly adjustmentType?: string;
        /**
         * The amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start.
         *
         * The default value is 0.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-simplescalingpolicyconfiguration.html#cfn-emr-instancegroupconfig-simplescalingpolicyconfiguration-cooldown
         */
        readonly coolDown?: number;
        /**
         * The amount by which to scale in or scale out, based on the specified `AdjustmentType` .
         *
         * A positive value adds to the instance group's Amazon EC2 instance count while a negative number removes instances. If `AdjustmentType` is set to `EXACT_CAPACITY` , the number should only be a positive integer. If `AdjustmentType` is set to `PERCENT_CHANGE_IN_CAPACITY` , the value should express the percentage as an integer. For example, -20 indicates a decrease in 20% increments of cluster capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-simplescalingpolicyconfiguration.html#cfn-emr-instancegroupconfig-simplescalingpolicyconfiguration-scalingadjustment
         */
        readonly scalingAdjustment: number;
    }
    /**
     * `ScalingTrigger` is a subproperty of the `ScalingRule` property type.
     *
     * `ScalingTrigger` determines the conditions that trigger an automatic scaling activity.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingtrigger.html
     */
    interface ScalingTriggerProperty {
        /**
         * The definition of a CloudWatch metric alarm.
         *
         * When the defined alarm conditions are met along with other trigger parameters, scaling activity begins.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-scalingtrigger.html#cfn-emr-instancegroupconfig-scalingtrigger-cloudwatchalarmdefinition
         */
        readonly cloudWatchAlarmDefinition: CfnInstanceGroupConfig.CloudWatchAlarmDefinitionProperty | cdk.IResolvable;
    }
    /**
     * `CloudWatchAlarmDefinition` is a subproperty of the `ScalingTrigger` property, which determines when to trigger an automatic scaling activity.
     *
     * Scaling activity begins when you satisfy the defined alarm conditions.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-cloudwatchalarmdefinition.html
     */
    interface CloudWatchAlarmDefinitionProperty {
        /**
         * Determines how the metric specified by `MetricName` is compared to the value specified by `Threshold` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-cloudwatchalarmdefinition.html#cfn-emr-instancegroupconfig-cloudwatchalarmdefinition-comparisonoperator
         */
        readonly comparisonOperator: string;
        /**
         * A CloudWatch metric dimension.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-cloudwatchalarmdefinition.html#cfn-emr-instancegroupconfig-cloudwatchalarmdefinition-dimensions
         */
        readonly dimensions?: Array<cdk.IResolvable | CfnInstanceGroupConfig.MetricDimensionProperty> | cdk.IResolvable;
        /**
         * The number of periods, in five-minute increments, during which the alarm condition must exist before the alarm triggers automatic scaling activity.
         *
         * The default value is `1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-cloudwatchalarmdefinition.html#cfn-emr-instancegroupconfig-cloudwatchalarmdefinition-evaluationperiods
         */
        readonly evaluationPeriods?: number;
        /**
         * The name of the CloudWatch metric that is watched to determine an alarm condition.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-cloudwatchalarmdefinition.html#cfn-emr-instancegroupconfig-cloudwatchalarmdefinition-metricname
         */
        readonly metricName: string;
        /**
         * The namespace for the CloudWatch metric.
         *
         * The default is `AWS/ElasticMapReduce` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-cloudwatchalarmdefinition.html#cfn-emr-instancegroupconfig-cloudwatchalarmdefinition-namespace
         */
        readonly namespace?: string;
        /**
         * The period, in seconds, over which the statistic is applied.
         *
         * CloudWatch metrics for Amazon EMR are emitted every five minutes (300 seconds), so if you specify a CloudWatch metric, specify `300` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-cloudwatchalarmdefinition.html#cfn-emr-instancegroupconfig-cloudwatchalarmdefinition-period
         */
        readonly period: number;
        /**
         * The statistic to apply to the metric associated with the alarm.
         *
         * The default is `AVERAGE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-cloudwatchalarmdefinition.html#cfn-emr-instancegroupconfig-cloudwatchalarmdefinition-statistic
         */
        readonly statistic?: string;
        /**
         * The value against which the specified statistic is compared.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-cloudwatchalarmdefinition.html#cfn-emr-instancegroupconfig-cloudwatchalarmdefinition-threshold
         */
        readonly threshold: number;
        /**
         * The unit of measure associated with the CloudWatch metric being watched.
         *
         * The value specified for `Unit` must correspond to the units specified in the CloudWatch metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-cloudwatchalarmdefinition.html#cfn-emr-instancegroupconfig-cloudwatchalarmdefinition-unit
         */
        readonly unit?: string;
    }
    /**
     * `MetricDimension` is a subproperty of the `CloudWatchAlarmDefinition` property type.
     *
     * `MetricDimension` specifies a CloudWatch dimension, which is specified with a `Key` `Value` pair. The key is known as a `Name` in CloudWatch. By default, Amazon EMR uses one dimension whose `Key` is `JobFlowID` and `Value` is a variable representing the cluster ID, which is `${emr.clusterId}` . This enables the automatic scaling rule for EMR to bootstrap when the cluster ID becomes available during cluster creation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-metricdimension.html
     */
    interface MetricDimensionProperty {
        /**
         * The dimension name.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-metricdimension.html#cfn-emr-instancegroupconfig-metricdimension-key
         */
        readonly key: string;
        /**
         * The dimension value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-metricdimension.html#cfn-emr-instancegroupconfig-metricdimension-value
         */
        readonly value: string;
    }
    /**
     * `Configurations` is a property of the `AWS::EMR::Cluster` resource that specifies the configuration of applications on an Amazon EMR cluster.
     *
     * Configurations are optional. You can use them to have EMR customize applications and software bundled with Amazon EMR when a cluster is created. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see [Configuring Applications](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html) .
     *
     * > Applies only to Amazon EMR releases 4.0 and later.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-configuration.html
     */
    interface ConfigurationProperty {
        /**
         * The classification within a configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-configuration.html#cfn-emr-instancegroupconfig-configuration-classification
         */
        readonly classification?: string;
        /**
         * Within a configuration classification, a set of properties that represent the settings that you want to change in the configuration file.
         *
         * Duplicates not allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-configuration.html#cfn-emr-instancegroupconfig-configuration-configurationproperties
         */
        readonly configurationProperties?: cdk.IResolvable | Record<string, string>;
        /**
         * A list of additional configurations to apply within a configuration object.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-configuration.html#cfn-emr-instancegroupconfig-configuration-configurations
         */
        readonly configurations?: Array<CfnInstanceGroupConfig.ConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The Amazon EBS configuration of a cluster instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-ebsconfiguration.html
     */
    interface EbsConfigurationProperty {
        /**
         * An array of Amazon EBS volume specifications attached to a cluster instance.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-ebsconfiguration.html#cfn-emr-instancegroupconfig-ebsconfiguration-ebsblockdeviceconfigs
         */
        readonly ebsBlockDeviceConfigs?: Array<CfnInstanceGroupConfig.EbsBlockDeviceConfigProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Indicates whether an Amazon EBS volume is EBS-optimized.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-ebsconfiguration.html#cfn-emr-instancegroupconfig-ebsconfiguration-ebsoptimized
         */
        readonly ebsOptimized?: boolean | cdk.IResolvable;
    }
    /**
     * Configuration of requested EBS block device associated with the instance group with count of volumes that are associated to every instance.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-ebsblockdeviceconfig.html
     */
    interface EbsBlockDeviceConfigProperty {
        /**
         * EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s) that are requested for the EBS volume attached to an Amazon EC2 instance in the cluster.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-ebsblockdeviceconfig.html#cfn-emr-instancegroupconfig-ebsblockdeviceconfig-volumespecification
         */
        readonly volumeSpecification: cdk.IResolvable | CfnInstanceGroupConfig.VolumeSpecificationProperty;
        /**
         * Number of EBS volumes with a specific volume configuration that are associated with every instance in the instance group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-ebsblockdeviceconfig.html#cfn-emr-instancegroupconfig-ebsblockdeviceconfig-volumesperinstance
         */
        readonly volumesPerInstance?: number;
    }
    /**
     * `VolumeSpecification` is a subproperty of the `EbsBlockDeviceConfig` property type.
     *
     * `VolumeSecification` determines the volume type, IOPS, and size (GiB) for EBS volumes attached to EC2 instances.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-volumespecification.html
     */
    interface VolumeSpecificationProperty {
        /**
         * The number of I/O operations per second (IOPS) that the volume supports.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-volumespecification.html#cfn-emr-instancegroupconfig-volumespecification-iops
         */
        readonly iops?: number;
        /**
         * The volume size, in gibibytes (GiB).
         *
         * This can be a number from 1 - 1024. If the volume type is EBS-optimized, the minimum value is 10.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-volumespecification.html#cfn-emr-instancegroupconfig-volumespecification-sizeingb
         */
        readonly sizeInGb: number;
        /**
         * The throughput, in mebibyte per second (MiB/s).
         *
         * This optional parameter can be a number from 125 - 1000 and is valid only for gp3 volumes.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-volumespecification.html#cfn-emr-instancegroupconfig-volumespecification-throughput
         */
        readonly throughput?: number;
        /**
         * The volume type.
         *
         * Volume types supported are gp3, gp2, io1, st1, sc1, and standard.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-instancegroupconfig-volumespecification.html#cfn-emr-instancegroupconfig-volumespecification-volumetype
         */
        readonly volumeType: string;
    }
}
/**
 * Properties for defining a `CfnInstanceGroupConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html
 */
export interface CfnInstanceGroupConfigProps {
    /**
     * `AutoScalingPolicy` is a subproperty of `InstanceGroupConfig` .
     *
     * `AutoScalingPolicy` defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. For more information, see [Using Automatic Scaling in Amazon EMR](https://docs.aws.amazon.com//emr/latest/ManagementGuide/emr-automatic-scaling.html) in the *Amazon EMR Management Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html#cfn-emr-instancegroupconfig-autoscalingpolicy
     */
    readonly autoScalingPolicy?: CfnInstanceGroupConfig.AutoScalingPolicyProperty | cdk.IResolvable;
    /**
     * If specified, indicates that the instance group uses Spot Instances.
     *
     * This is the maximum price you are willing to pay for Spot Instances. Specify `OnDemandPrice` to set the amount equal to the On-Demand price, or specify an amount in USD.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html#cfn-emr-instancegroupconfig-bidprice
     */
    readonly bidPrice?: string;
    /**
     * > Amazon EMR releases 4.x or later.
     *
     * The list of configurations supplied for an Amazon EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html#cfn-emr-instancegroupconfig-configurations
     */
    readonly configurations?: Array<CfnInstanceGroupConfig.ConfigurationProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * The custom AMI ID to use for the provisioned instance group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html#cfn-emr-instancegroupconfig-customamiid
     */
    readonly customAmiId?: string;
    /**
     * `EbsConfiguration` determines the EBS volumes to attach to EMR cluster instances.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html#cfn-emr-instancegroupconfig-ebsconfiguration
     */
    readonly ebsConfiguration?: CfnInstanceGroupConfig.EbsConfigurationProperty | cdk.IResolvable;
    /**
     * Target number of instances for the instance group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html#cfn-emr-instancegroupconfig-instancecount
     */
    readonly instanceCount: number;
    /**
     * The role of the instance group in the cluster.
     *
     * *Allowed Values* : TASK
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html#cfn-emr-instancegroupconfig-instancerole
     */
    readonly instanceRole: string;
    /**
     * The Amazon EC2 instance type for all instances in the instance group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html#cfn-emr-instancegroupconfig-instancetype
     */
    readonly instanceType: string;
    /**
     * The ID of an Amazon EMR cluster that you want to associate this instance group with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html#cfn-emr-instancegroupconfig-jobflowid
     */
    readonly jobFlowId: string;
    /**
     * Market type of the Amazon EC2 instances used to create a cluster node.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html#cfn-emr-instancegroupconfig-market
     */
    readonly market?: string;
    /**
     * Friendly name given to the instance group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-instancegroupconfig.html#cfn-emr-instancegroupconfig-name
     */
    readonly name?: string;
}
/**
 * Use a `SecurityConfiguration` resource to configure data encryption, Kerberos authentication (available in Amazon EMR release version 5.10.0 and later), and Amazon S3 authorization for EMRFS (available in EMR 5.10.0 and later). You can re-use a security configuration for any number of clusters in your account. For more information and example security configuration JSON objects, see [Create a Security Configuration](https://docs.aws.amazon.com//emr/latest/ManagementGuide/emr-create-security-configuration.html) in the *Amazon EMR Management Guide* .
 *
 * @cloudformationResource AWS::EMR::SecurityConfiguration
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-securityconfiguration.html
 */
export declare class CfnSecurityConfiguration extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSecurityConfiguration from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSecurityConfiguration;
    /**
     * The name of the security configuration.
     */
    name?: string;
    /**
     * The security configuration details in JSON format.
     */
    securityConfiguration: any | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnSecurityConfigurationProps);
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
 * Properties for defining a `CfnSecurityConfiguration`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-securityconfiguration.html
 */
export interface CfnSecurityConfigurationProps {
    /**
     * The name of the security configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-securityconfiguration.html#cfn-emr-securityconfiguration-name
     */
    readonly name?: string;
    /**
     * The security configuration details in JSON format.
     *
     * For JSON parameters and examples, see [Use Security Configurations to Set Up Cluster Security](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-security-configurations.html) in the *Amazon EMR Management Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-securityconfiguration.html#cfn-emr-securityconfiguration-securityconfiguration
     */
    readonly securityConfiguration: any | cdk.IResolvable;
}
/**
 * Use `Step` to specify a cluster (job flow) step, which runs only on the master node.
 *
 * Steps are used to submit data processing jobs to a cluster.
 *
 * @cloudformationResource AWS::EMR::Step
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-step.html
 */
export declare class CfnStep extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStep from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStep;
    /**
     * The identifier of the cluster step.
     *
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * This specifies what action to take when the cluster step fails.
     */
    actionOnFailure: string;
    /**
     * The `HadoopJarStepConfig` property type specifies a job flow step consisting of a JAR file whose main function will be executed.
     */
    hadoopJarStep: CfnStep.HadoopJarStepConfigProperty | cdk.IResolvable;
    /**
     * A string that uniquely identifies the cluster (job flow).
     */
    jobFlowId: string;
    /**
     * The name of the cluster step.
     */
    name: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStepProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnStep {
    /**
     * A job flow step consisting of a JAR file whose main function will be executed.
     *
     * The main function submits a job for Hadoop to execute and waits for the job to finish or fail.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-step-hadoopjarstepconfig.html
     */
    interface HadoopJarStepConfigProperty {
        /**
         * A list of command line arguments passed to the JAR file's main function when executed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-step-hadoopjarstepconfig.html#cfn-emr-step-hadoopjarstepconfig-args
         */
        readonly args?: Array<string>;
        /**
         * A path to a JAR file run during the step.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-step-hadoopjarstepconfig.html#cfn-emr-step-hadoopjarstepconfig-jar
         */
        readonly jar: string;
        /**
         * The name of the main class in the specified Java file.
         *
         * If not specified, the JAR file should specify a Main-Class in its manifest file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-step-hadoopjarstepconfig.html#cfn-emr-step-hadoopjarstepconfig-mainclass
         */
        readonly mainClass?: string;
        /**
         * A list of Java properties that are set when the step runs.
         *
         * You can use these properties to pass key value pairs to your main function.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-step-hadoopjarstepconfig.html#cfn-emr-step-hadoopjarstepconfig-stepproperties
         */
        readonly stepProperties?: Array<cdk.IResolvable | CfnStep.KeyValueProperty> | cdk.IResolvable;
    }
    /**
     * `KeyValue` is a subproperty of the `HadoopJarStepConfig` property type.
     *
     * `KeyValue` is used to pass parameters to a step.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-step-keyvalue.html
     */
    interface KeyValueProperty {
        /**
         * The unique identifier of a key-value pair.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-step-keyvalue.html#cfn-emr-step-keyvalue-key
         */
        readonly key?: string;
        /**
         * The value part of the identified key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-emr-step-keyvalue.html#cfn-emr-step-keyvalue-value
         */
        readonly value?: string;
    }
}
/**
 * Properties for defining a `CfnStep`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-step.html
 */
export interface CfnStepProps {
    /**
     * This specifies what action to take when the cluster step fails.
     *
     * Possible values are `CANCEL_AND_WAIT` and `CONTINUE` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-step.html#cfn-emr-step-actiononfailure
     */
    readonly actionOnFailure: string;
    /**
     * The `HadoopJarStepConfig` property type specifies a job flow step consisting of a JAR file whose main function will be executed.
     *
     * The main function submits a job for the cluster to execute as a step on the master node, and then waits for the job to finish or fail before executing subsequent steps.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-step.html#cfn-emr-step-hadoopjarstep
     */
    readonly hadoopJarStep: CfnStep.HadoopJarStepConfigProperty | cdk.IResolvable;
    /**
     * A string that uniquely identifies the cluster (job flow).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-step.html#cfn-emr-step-jobflowid
     */
    readonly jobFlowId: string;
    /**
     * The name of the cluster step.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-step.html#cfn-emr-step-name
     */
    readonly name: string;
}
/**
 * The `AWS::EMR::Studio` resource specifies an Amazon EMR Studio.
 *
 * An EMR Studio is a web-based, integrated development environment for fully managed Jupyter notebooks that run on Amazon EMR clusters. For more information, see the [*Amazon EMR Management Guide*](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio.html) .
 *
 * @cloudformationResource AWS::EMR::Studio
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html
 */
export declare class CfnStudio extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStudio from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStudio;
    /**
     * The Amazon Resource Name (ARN) of the Amazon EMR Studio. For example: `arn:aws:elasticmapreduce:us-east-1:653XXXXXXXXX:studio/es-EXAMPLE12345678XXXXXXXXXXX` .
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The ID of the Amazon EMR Studio. For example: `es-EXAMPLE12345678XXXXXXXXXXX` .
     *
     * @cloudformationAttribute StudioId
     */
    readonly attrStudioId: string;
    /**
     * The unique access URL of the Amazon EMR Studio. For example: `https://es-EXAMPLE12345678XXXXXXXXXXX.emrstudio-prod.us-east-1.amazonaws.com` .
     *
     * @cloudformationAttribute Url
     */
    readonly attrUrl: string;
    /**
     * Specifies whether the Studio authenticates users using IAM Identity Center or IAM.
     */
    authMode: string;
    /**
     * The Amazon S3 location to back up EMR Studio Workspaces and notebook files.
     */
    defaultS3Location: string;
    /**
     * A detailed description of the Amazon EMR Studio.
     */
    description?: string;
    /**
     * The AWS KMS key identifier (ARN) used to encrypt Amazon EMR Studio workspace and notebook files when backed up to Amazon S3.
     */
    encryptionKeyArn?: string;
    /**
     * The ID of the Amazon EMR Studio Engine security group.
     */
    engineSecurityGroupId: string;
    /**
     * The ARN of the IAM Identity Center instance the Studio application belongs to.
     */
    idcInstanceArn?: string;
    /**
     * Indicates whether the Studio has `REQUIRED` or `OPTIONAL` IAM Identity Center user assignment.
     */
    idcUserAssignment?: string;
    /**
     * Your identity provider's authentication endpoint.
     */
    idpAuthUrl?: string;
    /**
     * The name of your identity provider's `RelayState` parameter.
     */
    idpRelayStateParameterName?: string;
    /**
     * A descriptive name for the Amazon EMR Studio.
     */
    name: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that will be assumed by the Amazon EMR Studio.
     */
    serviceRole: string;
    /**
     * A list of subnet IDs to associate with the Amazon EMR Studio.
     */
    subnetIds: Array<string>;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Indicates whether the Studio has Trusted identity propagation enabled.
     */
    trustedIdentityPropagationEnabled?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the IAM user role that will be assumed by users and groups logged in to a Studio.
     */
    userRole?: string;
    /**
     * The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.
     */
    vpcId: string;
    /**
     * The ID of the Workspace security group associated with the Amazon EMR Studio.
     */
    workspaceSecurityGroupId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStudioProps);
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
 * Properties for defining a `CfnStudio`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html
 */
export interface CfnStudioProps {
    /**
     * Specifies whether the Studio authenticates users using IAM Identity Center or IAM.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-authmode
     */
    readonly authMode: string;
    /**
     * The Amazon S3 location to back up EMR Studio Workspaces and notebook files.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-defaults3location
     */
    readonly defaultS3Location: string;
    /**
     * A detailed description of the Amazon EMR Studio.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-description
     */
    readonly description?: string;
    /**
     * The AWS KMS key identifier (ARN) used to encrypt Amazon EMR Studio workspace and notebook files when backed up to Amazon S3.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-encryptionkeyarn
     */
    readonly encryptionKeyArn?: string;
    /**
     * The ID of the Amazon EMR Studio Engine security group.
     *
     * The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by `VpcId` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-enginesecuritygroupid
     */
    readonly engineSecurityGroupId: string;
    /**
     * The ARN of the IAM Identity Center instance the Studio application belongs to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-idcinstancearn
     */
    readonly idcInstanceArn?: string;
    /**
     * Indicates whether the Studio has `REQUIRED` or `OPTIONAL` IAM Identity Center user assignment.
     *
     * If the value is set to `REQUIRED` , users must be explicitly assigned to the Studio application to access the Studio.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-idcuserassignment
     */
    readonly idcUserAssignment?: string;
    /**
     * Your identity provider's authentication endpoint.
     *
     * Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-idpauthurl
     */
    readonly idpAuthUrl?: string;
    /**
     * The name of your identity provider's `RelayState` parameter.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-idprelaystateparametername
     */
    readonly idpRelayStateParameterName?: string;
    /**
     * A descriptive name for the Amazon EMR Studio.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-name
     */
    readonly name: string;
    /**
     * The Amazon Resource Name (ARN) of the IAM role that will be assumed by the Amazon EMR Studio.
     *
     * The service role provides a way for Amazon EMR Studio to interoperate with other AWS services.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-servicerole
     */
    readonly serviceRole: string;
    /**
     * A list of subnet IDs to associate with the Amazon EMR Studio.
     *
     * A Studio can have a maximum of 5 subnets. The subnets must belong to the VPC specified by `VpcId` . Studio users can create a Workspace in any of the specified subnets.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-subnetids
     */
    readonly subnetIds: Array<string>;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Indicates whether the Studio has Trusted identity propagation enabled.
     *
     * The default value is `false` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-trustedidentitypropagationenabled
     */
    readonly trustedIdentityPropagationEnabled?: boolean | cdk.IResolvable;
    /**
     * The Amazon Resource Name (ARN) of the IAM user role that will be assumed by users and groups logged in to a Studio.
     *
     * The permissions attached to this IAM role can be scoped down for each user or group using session policies. You only need to specify `UserRole` when you set `AuthMode` to `SSO` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-userrole
     */
    readonly userRole?: string;
    /**
     * The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-vpcid
     */
    readonly vpcId: string;
    /**
     * The ID of the Workspace security group associated with the Amazon EMR Studio.
     *
     * The Workspace security group allows outbound network traffic to resources in the Engine security group and to the internet.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studio.html#cfn-emr-studio-workspacesecuritygroupid
     */
    readonly workspaceSecurityGroupId: string;
}
/**
 * The `AWS::EMR::StudioSessionMapping` resource is an Amazon EMR resource type that maps a user or group to the Amazon EMR Studio specified by `StudioId` , and applies a session policy that defines Studio permissions for that user or group.
 *
 * @cloudformationResource AWS::EMR::StudioSessionMapping
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studiosessionmapping.html
 */
export declare class CfnStudioSessionMapping extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnStudioSessionMapping from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnStudioSessionMapping;
    /**
     * The name of the user or group.
     */
    identityName: string;
    /**
     * Specifies whether the identity to map to the Amazon EMR Studio is a user or a group.
     */
    identityType: string;
    /**
     * The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group.
     */
    sessionPolicyArn: string;
    /**
     * The ID of the Amazon EMR Studio to which the user or group will be mapped.
     */
    studioId: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnStudioSessionMappingProps);
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
 * Properties for defining a `CfnStudioSessionMapping`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studiosessionmapping.html
 */
export interface CfnStudioSessionMappingProps {
    /**
     * The name of the user or group.
     *
     * For more information, see [UserName](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName) and [DisplayName](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName) in the *IAM Identity Center Identity Store API Reference* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studiosessionmapping.html#cfn-emr-studiosessionmapping-identityname
     */
    readonly identityName: string;
    /**
     * Specifies whether the identity to map to the Amazon EMR Studio is a user or a group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studiosessionmapping.html#cfn-emr-studiosessionmapping-identitytype
     */
    readonly identityType: string;
    /**
     * The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group.
     *
     * Session policies refine Studio user permissions without the need to use multiple IAM user roles. For more information, see [Create an EMR Studio user role with session policies](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-user-role.html) in the *Amazon EMR Management Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studiosessionmapping.html#cfn-emr-studiosessionmapping-sessionpolicyarn
     */
    readonly sessionPolicyArn: string;
    /**
     * The ID of the Amazon EMR Studio to which the user or group will be mapped.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-studiosessionmapping.html#cfn-emr-studiosessionmapping-studioid
     */
    readonly studioId: string;
}
/**
 * http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-walworkspace.html.
 *
 * @cloudformationResource AWS::EMR::WALWorkspace
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-walworkspace.html
 */
export declare class CfnWALWorkspace extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggableV2 {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnWALWorkspace from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnWALWorkspace;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly cdkTagManager: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: Array<cdk.CfnTag>;
    /**
     * The name of the emrwal container.
     */
    walWorkspaceName?: string;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnWALWorkspaceProps);
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
 * Properties for defining a `CfnWALWorkspace`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-walworkspace.html
 */
export interface CfnWALWorkspaceProps {
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-walworkspace.html#cfn-emr-walworkspace-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * The name of the emrwal container.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-emr-walworkspace.html#cfn-emr-walworkspace-walworkspacename
     */
    readonly walWorkspaceName?: string;
}
