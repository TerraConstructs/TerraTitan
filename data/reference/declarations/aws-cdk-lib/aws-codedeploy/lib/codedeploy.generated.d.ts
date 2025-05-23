import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::CodeDeploy::Application` resource creates an AWS CodeDeploy application.
 *
 * In CodeDeploy , an application is a name that functions as a container to ensure that the correct combination of revision, deployment configuration, and deployment group are referenced during a deployment. You can use the `AWS::CodeDeploy::DeploymentGroup` resource to associate the application with a CodeDeploy deployment group. For more information, see [CodeDeploy Deployments](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-steps.html) in the *AWS CodeDeploy User Guide* .
 *
 * @cloudformationResource AWS::CodeDeploy::Application
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-application.html
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
     * A name for the application.
     */
    applicationName?: string;
    /**
     * The compute platform that CodeDeploy deploys the application to.
     */
    computePlatform?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The metadata that you apply to CodeDeploy applications to help you organize and categorize them.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnApplicationProps);
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
 * Properties for defining a `CfnApplication`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-application.html
 */
export interface CfnApplicationProps {
    /**
     * A name for the application.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * > Updates to `ApplicationName` are not supported.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-application.html#cfn-codedeploy-application-applicationname
     */
    readonly applicationName?: string;
    /**
     * The compute platform that CodeDeploy deploys the application to.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-application.html#cfn-codedeploy-application-computeplatform
     */
    readonly computePlatform?: string;
    /**
     * The metadata that you apply to CodeDeploy applications to help you organize and categorize them.
     *
     * Each tag consists of a key and an optional value, both of which you define.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-application.html#cfn-codedeploy-application-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
/**
 * The `AWS::CodeDeploy::DeploymentConfig` resource creates a set of deployment rules, deployment success conditions, and deployment failure conditions that AWS CodeDeploy uses during a deployment.
 *
 * The deployment configuration specifies the number or percentage of instances that must remain available at any time during a deployment.
 *
 * @cloudformationResource AWS::CodeDeploy::DeploymentConfig
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html
 */
export declare class CfnDeploymentConfig extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDeploymentConfig from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDeploymentConfig;
    /**
     * The destination platform type for the deployment ( `Lambda` , `Server` , or `ECS` ).
     */
    computePlatform?: string;
    /**
     * A name for the deployment configuration.
     */
    deploymentConfigName?: string;
    /**
     * The minimum number of healthy instances that should be available at any time during the deployment.
     */
    minimumHealthyHosts?: cdk.IResolvable | CfnDeploymentConfig.MinimumHealthyHostsProperty;
    /**
     * The configuration that specifies how the deployment traffic is routed.
     */
    trafficRoutingConfig?: cdk.IResolvable | CfnDeploymentConfig.TrafficRoutingConfigProperty;
    /**
     * Configure the `ZonalConfig` object if you want AWS CodeDeploy to deploy your application to one [Availability Zone](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones) at a time, within an AWS Region.
     */
    zonalConfig?: cdk.IResolvable | CfnDeploymentConfig.ZonalConfigProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnDeploymentConfigProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDeploymentConfig {
    /**
     * The configuration that specifies how traffic is shifted from one version of a Lambda function to another version during an AWS Lambda deployment, or from one Amazon ECS task set to another during an Amazon ECS deployment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-trafficroutingconfig.html
     */
    interface TrafficRoutingConfigProperty {
        /**
         * A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in two increments.
         *
         * The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-trafficroutingconfig.html#cfn-codedeploy-deploymentconfig-trafficroutingconfig-timebasedcanary
         */
        readonly timeBasedCanary?: cdk.IResolvable | CfnDeploymentConfig.TimeBasedCanaryProperty;
        /**
         * A configuration that shifts traffic from one version of a Lambda function or Amazon ECS task set to another in equal increments, with an equal number of minutes between each increment.
         *
         * The original and target Lambda function versions or Amazon ECS task sets are specified in the deployment's AppSpec file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-trafficroutingconfig.html#cfn-codedeploy-deploymentconfig-trafficroutingconfig-timebasedlinear
         */
        readonly timeBasedLinear?: cdk.IResolvable | CfnDeploymentConfig.TimeBasedLinearProperty;
        /**
         * The type of traffic shifting ( `TimeBasedCanary` or `TimeBasedLinear` ) used by a deployment configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-trafficroutingconfig.html#cfn-codedeploy-deploymentconfig-trafficroutingconfig-type
         */
        readonly type: string;
    }
    /**
     * A configuration that shifts traffic from one version of a Lambda function or ECS task set to another in equal increments, with an equal number of minutes between each increment.
     *
     * The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-timebasedlinear.html
     */
    interface TimeBasedLinearProperty {
        /**
         * The number of minutes between each incremental traffic shift of a `TimeBasedLinear` deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-timebasedlinear.html#cfn-codedeploy-deploymentconfig-timebasedlinear-linearinterval
         */
        readonly linearInterval: number;
        /**
         * The percentage of traffic that is shifted at the start of each increment of a `TimeBasedLinear` deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-timebasedlinear.html#cfn-codedeploy-deploymentconfig-timebasedlinear-linearpercentage
         */
        readonly linearPercentage: number;
    }
    /**
     * A configuration that shifts traffic from one version of a Lambda function or Amazon ECS task set to another in two increments.
     *
     * The original and target Lambda function versions or ECS task sets are specified in the deployment's AppSpec file.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-timebasedcanary.html
     */
    interface TimeBasedCanaryProperty {
        /**
         * The number of minutes between the first and second traffic shifts of a `TimeBasedCanary` deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-timebasedcanary.html#cfn-codedeploy-deploymentconfig-timebasedcanary-canaryinterval
         */
        readonly canaryInterval: number;
        /**
         * The percentage of traffic to shift in the first increment of a `TimeBasedCanary` deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-timebasedcanary.html#cfn-codedeploy-deploymentconfig-timebasedcanary-canarypercentage
         */
        readonly canaryPercentage: number;
    }
    /**
     * `MinimumHealthyHosts` is a property of the [DeploymentConfig](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html) resource that defines how many instances must remain healthy during an AWS CodeDeploy deployment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-minimumhealthyhosts.html
     */
    interface MinimumHealthyHostsProperty {
        /**
         * The minimum healthy instance type:.
         *
         * - HOST_COUNT: The minimum number of healthy instance as an absolute value.
         * - FLEET_PERCENT: The minimum number of healthy instance as a percentage of the total number of instance in the deployment.
         *
         * In an example of nine instance, if a HOST_COUNT of six is specified, deploy to up to three instances at a time. The deployment is successful if six or more instances are deployed to successfully. Otherwise, the deployment fails. If a FLEET_PERCENT of 40 is specified, deploy to up to five instance at a time. The deployment is successful if four or more instance are deployed to successfully. Otherwise, the deployment fails.
         *
         * > In a call to `GetDeploymentConfig` , CodeDeployDefault.OneAtATime returns a minimum healthy instance type of MOST_CONCURRENCY and a value of 1. This means a deployment to only one instance at a time. (You cannot set the type to MOST_CONCURRENCY, only to HOST_COUNT or FLEET_PERCENT.) In addition, with CodeDeployDefault.OneAtATime, AWS CodeDeploy attempts to ensure that all instances but one are kept in a healthy state during the deployment. Although this allows one instance at a time to be taken offline for a new deployment, it also means that if the deployment to the last instance fails, the overall deployment is still successful.
         *
         * For more information, see [AWS CodeDeploy Instance Health](https://docs.aws.amazon.com//codedeploy/latest/userguide/instances-health.html) in the *AWS CodeDeploy User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-minimumhealthyhosts.html#cfn-codedeploy-deploymentconfig-minimumhealthyhosts-type
         */
        readonly type: string;
        /**
         * The minimum healthy instance value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-minimumhealthyhosts.html#cfn-codedeploy-deploymentconfig-minimumhealthyhosts-value
         */
        readonly value: number;
    }
    /**
     * Configure the `ZonalConfig` object if you want AWS CodeDeploy to deploy your application to one [Availability Zone](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones) at a time, within an AWS Region. By deploying to one Availability Zone at a time, you can expose your deployment to a progressively larger audience as confidence in the deployment's performance and viability grows. If you don't configure the `ZonalConfig` object, CodeDeploy deploys your application to a random selection of hosts across a Region.
     *
     * For more information about the zonal configuration feature, see [zonal configuration](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config) in the *CodeDeploy User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-zonalconfig.html
     */
    interface ZonalConfigProperty {
        /**
         * The period of time, in seconds, that CodeDeploy must wait after completing a deployment to the *first* Availability Zone.
         *
         * CodeDeploy will wait this amount of time before starting a deployment to the second Availability Zone. You might set this option if you want to allow extra bake time for the first Availability Zone. If you don't specify a value for `firstZoneMonitorDurationInSeconds` , then CodeDeploy uses the `monitorDurationInSeconds` value for the first Availability Zone.
         *
         * For more information about the zonal configuration feature, see [zonal configuration](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config) in the *CodeDeploy User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-zonalconfig.html#cfn-codedeploy-deploymentconfig-zonalconfig-firstzonemonitordurationinseconds
         */
        readonly firstZoneMonitorDurationInSeconds?: number;
        /**
         * The number or percentage of instances that must remain available per Availability Zone during a deployment.
         *
         * This option works in conjunction with the `MinimumHealthyHosts` option. For more information, see [About the minimum number of healthy hosts per Availability Zone](https://docs.aws.amazon.com//codedeploy/latest/userguide/instances-health.html#minimum-healthy-hosts-az) in the *CodeDeploy User Guide* .
         *
         * If you don't specify the `minimumHealthyHostsPerZone` option, then CodeDeploy uses a default value of `0` percent.
         *
         * For more information about the zonal configuration feature, see [zonal configuration](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config) in the *CodeDeploy User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-zonalconfig.html#cfn-codedeploy-deploymentconfig-zonalconfig-minimumhealthyhostsperzone
         */
        readonly minimumHealthyHostsPerZone?: cdk.IResolvable | CfnDeploymentConfig.MinimumHealthyHostsPerZoneProperty;
        /**
         * The period of time, in seconds, that CodeDeploy must wait after completing a deployment to an Availability Zone.
         *
         * CodeDeploy will wait this amount of time before starting a deployment to the next Availability Zone. Consider adding a monitor duration to give the deployment some time to prove itself (or 'bake') in one Availability Zone before it is released in the next zone. If you don't specify a `monitorDurationInSeconds` , CodeDeploy starts deploying to the next Availability Zone immediately.
         *
         * For more information about the zonal configuration feature, see [zonal configuration](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config) in the *CodeDeploy User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-zonalconfig.html#cfn-codedeploy-deploymentconfig-zonalconfig-monitordurationinseconds
         */
        readonly monitorDurationInSeconds?: number;
    }
    /**
     * Information about the minimum number of healthy instances per Availability Zone.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-minimumhealthyhostsperzone.html
     */
    interface MinimumHealthyHostsPerZoneProperty {
        /**
         * The `type` associated with the `MinimumHealthyHostsPerZone` option.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-minimumhealthyhostsperzone.html#cfn-codedeploy-deploymentconfig-minimumhealthyhostsperzone-type
         */
        readonly type: string;
        /**
         * The `value` associated with the `MinimumHealthyHostsPerZone` option.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentconfig-minimumhealthyhostsperzone.html#cfn-codedeploy-deploymentconfig-minimumhealthyhostsperzone-value
         */
        readonly value: number;
    }
}
/**
 * Properties for defining a `CfnDeploymentConfig`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html
 */
export interface CfnDeploymentConfigProps {
    /**
     * The destination platform type for the deployment ( `Lambda` , `Server` , or `ECS` ).
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-computeplatform
     */
    readonly computePlatform?: string;
    /**
     * A name for the deployment configuration.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment configuration name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * > If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-deploymentconfigname
     */
    readonly deploymentConfigName?: string;
    /**
     * The minimum number of healthy instances that should be available at any time during the deployment.
     *
     * There are two parameters expected in the input: type and value.
     *
     * The type parameter takes either of the following values:
     *
     * - HOST_COUNT: The value parameter represents the minimum number of healthy instances as an absolute value.
     * - FLEET_PERCENT: The value parameter represents the minimum number of healthy instances as a percentage of the total number of instances in the deployment. If you specify FLEET_PERCENT, at the start of the deployment, AWS CodeDeploy converts the percentage to the equivalent number of instance and rounds up fractional instances.
     *
     * The value parameter takes an integer.
     *
     * For example, to set a minimum of 95% healthy instance, specify a type of FLEET_PERCENT and a value of 95.
     *
     * For more information about instance health, see [CodeDeploy Instance Health](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-health.html) in the AWS CodeDeploy User Guide.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-minimumhealthyhosts
     */
    readonly minimumHealthyHosts?: cdk.IResolvable | CfnDeploymentConfig.MinimumHealthyHostsProperty;
    /**
     * The configuration that specifies how the deployment traffic is routed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-trafficroutingconfig
     */
    readonly trafficRoutingConfig?: cdk.IResolvable | CfnDeploymentConfig.TrafficRoutingConfigProperty;
    /**
     * Configure the `ZonalConfig` object if you want AWS CodeDeploy to deploy your application to one [Availability Zone](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-availability-zones) at a time, within an AWS Region.
     *
     * For more information about the zonal configuration feature, see [zonal configuration](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations-create.html#zonal-config) in the *CodeDeploy User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentconfig.html#cfn-codedeploy-deploymentconfig-zonalconfig
     */
    readonly zonalConfig?: cdk.IResolvable | CfnDeploymentConfig.ZonalConfigProperty;
}
/**
 * The `AWS::CodeDeploy::DeploymentGroup` resource creates an AWS CodeDeploy deployment group that specifies which instances your application revisions are deployed to, along with other deployment options.
 *
 * For more information, see [CreateDeploymentGroup](https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_CreateDeploymentGroup.html) in the *CodeDeploy API Reference* .
 *
 * > Amazon ECS blue/green deployments through CodeDeploy do not use the `AWS::CodeDeploy::DeploymentGroup` resource. To perform Amazon ECS blue/green deployments, use the `AWS::CodeDeploy::BlueGreen` hook. See [Perform Amazon ECS blue/green deployments through CodeDeploy using AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/blue-green.html) for more information.
 *
 * @cloudformationResource AWS::CodeDeploy::DeploymentGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html
 */
export declare class CfnDeploymentGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnDeploymentGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnDeploymentGroup;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * Information about the Amazon CloudWatch alarms that are associated with the deployment group.
     */
    alarmConfiguration?: CfnDeploymentGroup.AlarmConfigurationProperty | cdk.IResolvable;
    /**
     * The name of an existing CodeDeploy application to associate this deployment group with.
     */
    applicationName: string;
    /**
     * Information about the automatic rollback configuration that is associated with the deployment group.
     */
    autoRollbackConfiguration?: CfnDeploymentGroup.AutoRollbackConfigurationProperty | cdk.IResolvable;
    /**
     * A list of associated Auto Scaling groups that CodeDeploy automatically deploys revisions to when new instances are created.
     */
    autoScalingGroups?: Array<string>;
    /**
     * Information about blue/green deployment options for a deployment group.
     */
    blueGreenDeploymentConfiguration?: CfnDeploymentGroup.BlueGreenDeploymentConfigurationProperty | cdk.IResolvable;
    /**
     * The application revision to deploy to this deployment group.
     */
    deployment?: CfnDeploymentGroup.DeploymentProperty | cdk.IResolvable;
    /**
     * A deployment configuration name or a predefined configuration name.
     */
    deploymentConfigName?: string;
    /**
     * A name for the deployment group.
     */
    deploymentGroupName?: string;
    /**
     * Attributes that determine the type of deployment to run and whether to route deployment traffic behind a load balancer.
     */
    deploymentStyle?: CfnDeploymentGroup.DeploymentStyleProperty | cdk.IResolvable;
    /**
     * The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group.
     */
    ec2TagFilters?: Array<CfnDeploymentGroup.EC2TagFilterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Information about groups of tags applied to Amazon EC2 instances.
     */
    ec2TagSet?: CfnDeploymentGroup.EC2TagSetProperty | cdk.IResolvable;
    /**
     * The target Amazon ECS services in the deployment group.
     */
    ecsServices?: Array<CfnDeploymentGroup.ECSServiceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Information about the load balancer to use in a deployment.
     */
    loadBalancerInfo?: cdk.IResolvable | CfnDeploymentGroup.LoadBalancerInfoProperty;
    /**
     * The on-premises instance tags already applied to on-premises instances that you want to include in the deployment group.
     */
    onPremisesInstanceTagFilters?: Array<cdk.IResolvable | CfnDeploymentGroup.TagFilterProperty> | cdk.IResolvable;
    /**
     * Information about groups of tags applied to on-premises instances.
     */
    onPremisesTagSet?: cdk.IResolvable | CfnDeploymentGroup.OnPremisesTagSetProperty;
    /**
     * Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision.
     */
    outdatedInstancesStrategy?: string;
    /**
     * A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf.
     */
    serviceRoleArn: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group.
     */
    terminationHookEnabled?: boolean | cdk.IResolvable;
    /**
     * Information about triggers associated with the deployment group.
     */
    triggerConfigurations?: Array<cdk.IResolvable | CfnDeploymentGroup.TriggerConfigProperty> | cdk.IResolvable;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnDeploymentGroupProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnDeploymentGroup {
    /**
     * The `AlarmConfiguration` property type configures CloudWatch alarms for an AWS CodeDeploy deployment group.
     *
     * `AlarmConfiguration` is a property of the [DeploymentGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-alarmconfiguration.html
     */
    interface AlarmConfigurationProperty {
        /**
         * A list of alarms configured for the deployment or deployment group.
         *
         * A maximum of 10 alarms can be added.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-alarmconfiguration.html#cfn-codedeploy-deploymentgroup-alarmconfiguration-alarms
         */
        readonly alarms?: Array<CfnDeploymentGroup.AlarmProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Indicates whether the alarm configuration is enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-alarmconfiguration.html#cfn-codedeploy-deploymentgroup-alarmconfiguration-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch .
         *
         * The default value is `false` .
         *
         * - `true` : The deployment proceeds even if alarm status information can't be retrieved from CloudWatch .
         * - `false` : The deployment stops if alarm status information can't be retrieved from CloudWatch .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-alarmconfiguration.html#cfn-codedeploy-deploymentgroup-alarmconfiguration-ignorepollalarmfailure
         */
        readonly ignorePollAlarmFailure?: boolean | cdk.IResolvable;
    }
    /**
     * The `Alarm` property type specifies a CloudWatch alarm to use for an AWS CodeDeploy deployment group.
     *
     * The `Alarm` property of the [CodeDeploy DeploymentGroup AlarmConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-alarmconfiguration.html) property contains a list of `Alarm` property types.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-alarm.html
     */
    interface AlarmProperty {
        /**
         * The name of the alarm.
         *
         * Maximum length is 255 characters. Each alarm name can be used only once in a list of alarms.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-alarm.html#cfn-codedeploy-deploymentgroup-alarm-name
         */
        readonly name?: string;
    }
    /**
     * The `AutoRollbackConfiguration` property type configures automatic rollback for an AWS CodeDeploy deployment group when a deployment is not completed successfully.
     *
     * For more information, see [Automatic Rollbacks](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployments-rollback-and-redeploy.html#deployments-rollback-and-redeploy-automatic-rollbacks) in the *AWS CodeDeploy User Guide* .
     *
     * `AutoRollbackConfiguration` is a property of the [DeploymentGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-autorollbackconfiguration.html
     */
    interface AutoRollbackConfigurationProperty {
        /**
         * Indicates whether a defined automatic rollback configuration is currently enabled.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-autorollbackconfiguration.html#cfn-codedeploy-deploymentgroup-autorollbackconfiguration-enabled
         */
        readonly enabled?: boolean | cdk.IResolvable;
        /**
         * The event type or types that trigger a rollback.
         *
         * Valid values are `DEPLOYMENT_FAILURE` , `DEPLOYMENT_STOP_ON_ALARM` , or `DEPLOYMENT_STOP_ON_REQUEST` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-autorollbackconfiguration.html#cfn-codedeploy-deploymentgroup-autorollbackconfiguration-events
         */
        readonly events?: Array<string>;
    }
    /**
     * Information about blue/green deployment options for a deployment group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-bluegreendeploymentconfiguration.html
     */
    interface BlueGreenDeploymentConfigurationProperty {
        /**
         * Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-bluegreendeploymentconfiguration.html#cfn-codedeploy-deploymentgroup-bluegreendeploymentconfiguration-deploymentreadyoption
         */
        readonly deploymentReadyOption?: CfnDeploymentGroup.DeploymentReadyOptionProperty | cdk.IResolvable;
        /**
         * Information about how instances are provisioned for a replacement environment in a blue/green deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-bluegreendeploymentconfiguration.html#cfn-codedeploy-deploymentgroup-bluegreendeploymentconfiguration-greenfleetprovisioningoption
         */
        readonly greenFleetProvisioningOption?: CfnDeploymentGroup.GreenFleetProvisioningOptionProperty | cdk.IResolvable;
        /**
         * Information about whether to terminate instances in the original fleet during a blue/green deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-bluegreendeploymentconfiguration.html#cfn-codedeploy-deploymentgroup-bluegreendeploymentconfiguration-terminateblueinstancesondeploymentsuccess
         */
        readonly terminateBlueInstancesOnDeploymentSuccess?: CfnDeploymentGroup.BlueInstanceTerminationOptionProperty | cdk.IResolvable;
    }
    /**
     * Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deploymentreadyoption.html
     */
    interface DeploymentReadyOptionProperty {
        /**
         * Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment.
         *
         * - CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment.
         * - STOP_DEPLOYMENT: Do not register new instances with a load balancer unless traffic rerouting is started using [ContinueDeployment](https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_ContinueDeployment.html) . If traffic rerouting is not started before the end of the specified wait period, the deployment status is changed to Stopped.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deploymentreadyoption.html#cfn-codedeploy-deploymentgroup-deploymentreadyoption-actionontimeout
         */
        readonly actionOnTimeout?: string;
        /**
         * The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually.
         *
         * Applies only to the `STOP_DEPLOYMENT` option for `actionOnTimeout` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deploymentreadyoption.html#cfn-codedeploy-deploymentgroup-deploymentreadyoption-waittimeinminutes
         */
        readonly waitTimeInMinutes?: number;
    }
    /**
     * Information about the instances that belong to the replacement environment in a blue/green deployment.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-greenfleetprovisioningoption.html
     */
    interface GreenFleetProvisioningOptionProperty {
        /**
         * The method used to add instances to a replacement environment.
         *
         * - `DISCOVER_EXISTING` : Use instances that already exist or will be created manually.
         * - `COPY_AUTO_SCALING_GROUP` : Use settings from a specified Auto Scaling group to define and create instances in a new Auto Scaling group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-greenfleetprovisioningoption.html#cfn-codedeploy-deploymentgroup-greenfleetprovisioningoption-action
         */
        readonly action?: string;
    }
    /**
     * Information about whether instances in the original environment are terminated when a blue/green deployment is successful.
     *
     * `BlueInstanceTerminationOption` does not apply to Lambda deployments.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-blueinstanceterminationoption.html
     */
    interface BlueInstanceTerminationOptionProperty {
        /**
         * The action to take on instances in the original environment after a successful blue/green deployment.
         *
         * - `TERMINATE` : Instances are terminated after a specified wait time.
         * - `KEEP_ALIVE` : Instances are left running after they are deregistered from the load balancer and removed from the deployment group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-blueinstanceterminationoption.html#cfn-codedeploy-deploymentgroup-blueinstanceterminationoption-action
         */
        readonly action?: string;
        /**
         * For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment.
         *
         * For an Amazon ECS deployment, the number of minutes before deleting the original (blue) task set. During an Amazon ECS deployment, CodeDeploy shifts traffic from the original (blue) task set to a replacement (green) task set.
         *
         * The maximum setting is 2880 minutes (2 days).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-blueinstanceterminationoption.html#cfn-codedeploy-deploymentgroup-blueinstanceterminationoption-terminationwaittimeinminutes
         */
        readonly terminationWaitTimeInMinutes?: number;
    }
    /**
     * `Deployment` is a property of the [DeploymentGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html) resource that specifies an AWS CodeDeploy application revision to be deployed to instances in the deployment group. If you specify an application revision, your target revision is deployed as soon as the provisioning process is complete.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment.html
     */
    interface DeploymentProperty {
        /**
         * A comment about the deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment.html#cfn-codedeploy-deploymentgroup-deployment-description
         */
        readonly description?: string;
        /**
         * If true, then if an `ApplicationStop` , `BeforeBlockTraffic` , or `AfterBlockTraffic` deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event.
         *
         * For example, if `ApplicationStop` fails, the deployment continues with DownloadBundle. If `BeforeBlockTraffic` fails, the deployment continues with `BlockTraffic` . If `AfterBlockTraffic` fails, the deployment continues with `ApplicationStop` .
         *
         * If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted.
         *
         * During a deployment, the AWS CodeDeploy agent runs the scripts specified for `ApplicationStop` , `BeforeBlockTraffic` , and `AfterBlockTraffic` in the AppSpec file from the previous successful deployment. (All other scripts are run from the AppSpec file in the current deployment.) If one of these scripts contains an error and does not run successfully, the deployment can fail.
         *
         * If the cause of the failure is a script from the last successful deployment that will never run successfully, create a new deployment and use `ignoreApplicationStopFailures` to specify that the `ApplicationStop` , `BeforeBlockTraffic` , and `AfterBlockTraffic` failures should be ignored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment.html#cfn-codedeploy-deploymentgroup-deployment-ignoreapplicationstopfailures
         */
        readonly ignoreApplicationStopFailures?: boolean | cdk.IResolvable;
        /**
         * Information about the location of stored application artifacts and the service from which to retrieve them.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment.html#cfn-codedeploy-deploymentgroup-deployment-revision
         */
        readonly revision: cdk.IResolvable | CfnDeploymentGroup.RevisionLocationProperty;
    }
    /**
     * `RevisionLocation` is a property that defines the location of the CodeDeploy application revision to deploy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-revisionlocation.html
     */
    interface RevisionLocationProperty {
        /**
         * Information about the location of application artifacts stored in GitHub.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-revisionlocation.html#cfn-codedeploy-deploymentgroup-revisionlocation-githublocation
         */
        readonly gitHubLocation?: CfnDeploymentGroup.GitHubLocationProperty | cdk.IResolvable;
        /**
         * The type of application revision:.
         *
         * - S3: An application revision stored in Amazon S3.
         * - GitHub: An application revision stored in GitHub (EC2/On-premises deployments only).
         * - String: A YAML-formatted or JSON-formatted string ( AWS Lambda deployments only).
         * - AppSpecContent: An `AppSpecContent` object that contains the contents of an AppSpec file for an AWS Lambda or Amazon ECS deployment. The content is formatted as JSON or YAML stored as a RawString.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-revisionlocation.html#cfn-codedeploy-deploymentgroup-revisionlocation-revisiontype
         */
        readonly revisionType?: string;
        /**
         * Information about the location of a revision stored in Amazon S3.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-revisionlocation.html#cfn-codedeploy-deploymentgroup-revisionlocation-s3location
         */
        readonly s3Location?: cdk.IResolvable | CfnDeploymentGroup.S3LocationProperty;
    }
    /**
     * `GitHubLocation` is a property of the [CodeDeploy DeploymentGroup Revision](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment-revision.html) property that specifies the location of an application revision that is stored in GitHub.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-githublocation.html
     */
    interface GitHubLocationProperty {
        /**
         * The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-githublocation.html#cfn-codedeploy-deploymentgroup-githublocation-commitid
         */
        readonly commitId: string;
        /**
         * The GitHub account and repository pair that stores a reference to the commit that represents the bundled artifacts for the application revision.
         *
         * Specify the value as `account/repository` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-githublocation.html#cfn-codedeploy-deploymentgroup-githublocation-repository
         */
        readonly repository: string;
    }
    /**
     * `S3Location` is a property of the [CodeDeploy DeploymentGroup Revision](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deployment-revision.html) property that specifies the location of an application revision that is stored in Amazon Simple Storage Service ( Amazon S3 ).
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-s3location.html
     */
    interface S3LocationProperty {
        /**
         * The name of the Amazon S3 bucket where the application revision is stored.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-s3location.html#cfn-codedeploy-deploymentgroup-s3location-bucket
         */
        readonly bucket: string;
        /**
         * The file type of the application revision. Must be one of the following:.
         *
         * - JSON
         * - tar: A tar archive file.
         * - tgz: A compressed tar archive file.
         * - YAML
         * - zip: A zip archive file.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-s3location.html#cfn-codedeploy-deploymentgroup-s3location-bundletype
         */
        readonly bundleType?: string;
        /**
         * The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision.
         *
         * If the ETag is not specified as an input parameter, ETag validation of the object is skipped.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-s3location.html#cfn-codedeploy-deploymentgroup-s3location-etag
         */
        readonly eTag?: string;
        /**
         * The name of the Amazon S3 object that represents the bundled artifacts for the application revision.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-s3location.html#cfn-codedeploy-deploymentgroup-s3location-key
         */
        readonly key: string;
        /**
         * A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision.
         *
         * If the version is not specified, the system uses the most recent version by default.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-s3location.html#cfn-codedeploy-deploymentgroup-s3location-version
         */
        readonly version?: string;
    }
    /**
     * Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deploymentstyle.html
     */
    interface DeploymentStyleProperty {
        /**
         * Indicates whether to route deployment traffic behind a load balancer.
         *
         * > An Amazon EC2 Application Load Balancer or Network Load Balancer is required for an Amazon ECS deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deploymentstyle.html#cfn-codedeploy-deploymentgroup-deploymentstyle-deploymentoption
         */
        readonly deploymentOption?: string;
        /**
         * Indicates whether to run an in-place or blue/green deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-deploymentstyle.html#cfn-codedeploy-deploymentgroup-deploymentstyle-deploymenttype
         */
        readonly deploymentType?: string;
    }
    /**
     * Contains the service and cluster names used to identify an Amazon ECS deployment's target.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ecsservice.html
     */
    interface ECSServiceProperty {
        /**
         * The name of the cluster that the Amazon ECS service is associated with.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ecsservice.html#cfn-codedeploy-deploymentgroup-ecsservice-clustername
         */
        readonly clusterName: string;
        /**
         * The name of the target Amazon ECS service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ecsservice.html#cfn-codedeploy-deploymentgroup-ecsservice-servicename
         */
        readonly serviceName: string;
    }
    /**
     * Information about an Amazon EC2 tag filter.
     *
     * For more information about using tags and tag groups to help manage your Amazon EC2 instances and on-premises instances, see [Tagging Instances for Deployment Groups in AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-tagging.html) in the *AWS CodeDeploy User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagfilter.html
     */
    interface EC2TagFilterProperty {
        /**
         * The tag filter key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagfilter.html#cfn-codedeploy-deploymentgroup-ec2tagfilter-key
         */
        readonly key?: string;
        /**
         * The tag filter type:.
         *
         * - `KEY_ONLY` : Key only.
         * - `VALUE_ONLY` : Value only.
         * - `KEY_AND_VALUE` : Key and value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagfilter.html#cfn-codedeploy-deploymentgroup-ec2tagfilter-type
         */
        readonly type?: string;
        /**
         * The tag filter value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagfilter.html#cfn-codedeploy-deploymentgroup-ec2tagfilter-value
         */
        readonly value?: string;
    }
    /**
     * The `EC2TagSet` property type specifies information about groups of tags applied to Amazon EC2 instances.
     *
     * The deployment group includes only Amazon EC2 instances identified by all the tag groups. `EC2TagSet` cannot be used in the same template as `EC2TagFilter` .
     *
     * For information about using tags and tag groups to help manage your Amazon EC2 instances and on-premises instances, see [Tagging Instances for Deployment Groups in AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-tagging.html) .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagset.html
     */
    interface EC2TagSetProperty {
        /**
         * The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group.
         *
         * CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group.
         *
         * Duplicates are not allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagset.html#cfn-codedeploy-deploymentgroup-ec2tagset-ec2tagsetlist
         */
        readonly ec2TagSetList?: Array<CfnDeploymentGroup.EC2TagSetListObjectProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The `EC2TagSet` property type specifies information about groups of tags applied to Amazon EC2 instances.
     *
     * The deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same template as EC2TagFilters.
     *
     * For more information about using tags and tag groups to help manage your Amazon EC2 instances and on-premises instances, see [Tagging Instances for Deployment Groups in AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-tagging.html) in the *AWS CodeDeploy User Guide* .
     *
     * `EC2TagSet` is a property of the [DeploymentGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html) resource type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagsetlistobject.html
     */
    interface EC2TagSetListObjectProperty {
        /**
         * A list that contains other lists of Amazon EC2 instance tag groups.
         *
         * For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-ec2tagsetlistobject.html#cfn-codedeploy-deploymentgroup-ec2tagsetlistobject-ec2taggroup
         */
        readonly ec2TagGroup?: Array<CfnDeploymentGroup.EC2TagFilterProperty | cdk.IResolvable> | cdk.IResolvable;
    }
    /**
     * The `LoadBalancerInfo` property type specifies information about the load balancer or target group used for an AWS CodeDeploy deployment group.
     *
     * For more information, see [Integrating CodeDeploy with Elastic Load Balancing](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-elastic-load-balancing.html) in the *AWS CodeDeploy User Guide* .
     *
     * For AWS CloudFormation to use the properties specified in `LoadBalancerInfo` , the `DeploymentStyle.DeploymentOption` property must be set to `WITH_TRAFFIC_CONTROL` . If `DeploymentStyle.DeploymentOption` is not set to `WITH_TRAFFIC_CONTROL` , AWS CloudFormation ignores any settings specified in `LoadBalancerInfo` .
     *
     * > AWS CloudFormation supports blue/green deployments on the AWS Lambda compute platform only.
     *
     * `LoadBalancerInfo` is a property of the [DeploymentGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-loadbalancerinfo.html
     */
    interface LoadBalancerInfoProperty {
        /**
         * An array that contains information about the load balancers to use for load balancing in a deployment.
         *
         * If you're using Classic Load Balancers, specify those load balancers in this array.
         *
         * > You can add up to 10 load balancers to the array. > If you're using Application Load Balancers or Network Load Balancers, use the `targetGroupInfoList` array instead of this one.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-loadbalancerinfo.html#cfn-codedeploy-deploymentgroup-loadbalancerinfo-elbinfolist
         */
        readonly elbInfoList?: Array<CfnDeploymentGroup.ELBInfoProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * An array that contains information about the target groups to use for load balancing in a deployment.
         *
         * If you're using Application Load Balancers and Network Load Balancers, specify their associated target groups in this array.
         *
         * > You can add up to 10 target groups to the array. > If you're using Classic Load Balancers, use the `elbInfoList` array instead of this one.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-loadbalancerinfo.html#cfn-codedeploy-deploymentgroup-loadbalancerinfo-targetgroupinfolist
         */
        readonly targetGroupInfoList?: Array<cdk.IResolvable | CfnDeploymentGroup.TargetGroupInfoProperty> | cdk.IResolvable;
        /**
         * The target group pair information.
         *
         * This is an array of `TargeGroupPairInfo` objects with a maximum size of one.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-loadbalancerinfo.html#cfn-codedeploy-deploymentgroup-loadbalancerinfo-targetgrouppairinfolist
         */
        readonly targetGroupPairInfoList?: Array<cdk.IResolvable | CfnDeploymentGroup.TargetGroupPairInfoProperty> | cdk.IResolvable;
    }
    /**
     * The `ELBInfo` property type specifies information about the Elastic Load Balancing load balancer used for an CodeDeploy deployment group.
     *
     * If you specify the `ELBInfo` property, the `DeploymentStyle.DeploymentOption` property must be set to `WITH_TRAFFIC_CONTROL` for AWS CodeDeploy to route your traffic using the specified load balancers.
     *
     * `ELBInfo` is a property of the [AWS CodeDeploy DeploymentGroup LoadBalancerInfo](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-loadbalancerinfo.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-elbinfo.html
     */
    interface ELBInfoProperty {
        /**
         * For blue/green deployments, the name of the load balancer that is used to route traffic from original instances to replacement instances in a blue/green deployment.
         *
         * For in-place deployments, the name of the load balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment is complete.
         *
         * > AWS CloudFormation supports blue/green deployments on AWS Lambda compute platforms only.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-elbinfo.html#cfn-codedeploy-deploymentgroup-elbinfo-name
         */
        readonly name?: string;
    }
    /**
     * The `TargetGroupInfo` property type specifies information about a target group in Elastic Load Balancing to use in a deployment.
     *
     * Instances are registered as targets in a target group, and traffic is routed to the target group. For more information, see [TargetGroupInfo](https://docs.aws.amazon.com/codedeploy/latest/APIReference/API_TargetGroupInfo.html) in the *AWS CodeDeploy API Reference*
     *
     * If you specify the `TargetGroupInfo` property, the `DeploymentStyle.DeploymentOption` property must be set to `WITH_TRAFFIC_CONTROL` for CodeDeploy to route your traffic using the specified target groups.
     *
     * `TargetGroupInfo` is a property of the [LoadBalancerInfo](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-loadbalancerinfo.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-targetgroupinfo.html
     */
    interface TargetGroupInfoProperty {
        /**
         * For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with.
         *
         * For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes. No duplicates allowed.
         *
         * > AWS CloudFormation supports blue/green deployments on AWS Lambda compute platforms only.
         *
         * This value cannot exceed 32 characters, so you should use the `Name` property of the target group, or the `TargetGroupName` attribute with the `Fn::GetAtt` intrinsic function, as shown in the following example. Don't use the group's Amazon Resource Name (ARN) or `TargetGroupFullName` attribute.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-targetgroupinfo.html#cfn-codedeploy-deploymentgroup-targetgroupinfo-name
         */
        readonly name?: string;
    }
    /**
     * Information about two target groups and how traffic is routed during an Amazon ECS deployment.
     *
     * An optional test traffic route can be specified.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-targetgrouppairinfo.html
     */
    interface TargetGroupPairInfoProperty {
        /**
         * The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-targetgrouppairinfo.html#cfn-codedeploy-deploymentgroup-targetgrouppairinfo-prodtrafficroute
         */
        readonly prodTrafficRoute?: cdk.IResolvable | CfnDeploymentGroup.TrafficRouteProperty;
        /**
         * One pair of target groups.
         *
         * One is associated with the original task set. The second is associated with the task set that serves traffic after the deployment is complete.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-targetgrouppairinfo.html#cfn-codedeploy-deploymentgroup-targetgrouppairinfo-targetgroups
         */
        readonly targetGroups?: Array<cdk.IResolvable | CfnDeploymentGroup.TargetGroupInfoProperty> | cdk.IResolvable;
        /**
         * An optional path used by a load balancer to route test traffic after an Amazon ECS deployment.
         *
         * Validation can occur while test traffic is served during a deployment.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-targetgrouppairinfo.html#cfn-codedeploy-deploymentgroup-targetgrouppairinfo-testtrafficroute
         */
        readonly testTrafficRoute?: cdk.IResolvable | CfnDeploymentGroup.TrafficRouteProperty;
    }
    /**
     * Information about a listener.
     *
     * The listener contains the path used to route traffic that is received from the load balancer to a target group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-trafficroute.html
     */
    interface TrafficRouteProperty {
        /**
         * The Amazon Resource Name (ARN) of one listener.
         *
         * The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-trafficroute.html#cfn-codedeploy-deploymentgroup-trafficroute-listenerarns
         */
        readonly listenerArns?: Array<string>;
    }
    /**
     * `TagFilter` is a property type of the [AWS::CodeDeploy::DeploymentGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html) resource that specifies which on-premises instances to associate with the deployment group. To register on-premise instances with AWS CodeDeploy , see [Configure Existing On-Premises Instances by Using AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-on-premises.html) in the *AWS CodeDeploy User Guide* .
     *
     * For more information about using tags and tag groups to help manage your Amazon EC2 instances and on-premises instances, see [Tagging Instances for Deployment Groups in AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-tagging.html) in the *AWS CodeDeploy User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-tagfilter.html
     */
    interface TagFilterProperty {
        /**
         * The on-premises instance tag filter key.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-tagfilter.html#cfn-codedeploy-deploymentgroup-tagfilter-key
         */
        readonly key?: string;
        /**
         * The on-premises instance tag filter type:.
         *
         * - KEY_ONLY: Key only.
         * - VALUE_ONLY: Value only.
         * - KEY_AND_VALUE: Key and value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-tagfilter.html#cfn-codedeploy-deploymentgroup-tagfilter-type
         */
        readonly type?: string;
        /**
         * The on-premises instance tag filter value.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-tagfilter.html#cfn-codedeploy-deploymentgroup-tagfilter-value
         */
        readonly value?: string;
    }
    /**
     * The `OnPremisesTagSet` property type specifies a list containing other lists of on-premises instance tag groups.
     *
     * In order for an instance to be included in the deployment group, it must be identified by all the tag groups in the list.
     *
     * For more information about using tags and tag groups to help manage your Amazon EC2 instances and on-premises instances, see [Tagging Instances for Deployment Groups in AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-tagging.html) in the *AWS CodeDeploy User Guide* .
     *
     * `OnPremisesTagSet` is a property of the [DeploymentGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html) resource.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-onpremisestagset.html
     */
    interface OnPremisesTagSetProperty {
        /**
         * A list that contains other lists of on-premises instance tag groups.
         *
         * For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.
         *
         * Duplicates are not allowed.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-onpremisestagset.html#cfn-codedeploy-deploymentgroup-onpremisestagset-onpremisestagsetlist
         */
        readonly onPremisesTagSetList?: Array<cdk.IResolvable | CfnDeploymentGroup.OnPremisesTagSetListObjectProperty> | cdk.IResolvable;
    }
    /**
     * The `OnPremisesTagSetListObject` property type specifies lists of on-premises instance tag groups.
     *
     * In order for an instance to be included in the deployment group, it must be identified by all the tag groups in the list.
     *
     * `OnPremisesTagSetListObject` is a property of the [CodeDeploy DeploymentGroup OnPremisesTagSet](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-onpremisestagset.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-onpremisestagsetlistobject.html
     */
    interface OnPremisesTagSetListObjectProperty {
        /**
         * Information about groups of on-premises instance tags.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-onpremisestagsetlistobject.html#cfn-codedeploy-deploymentgroup-onpremisestagsetlistobject-onpremisestaggroup
         */
        readonly onPremisesTagGroup?: Array<cdk.IResolvable | CfnDeploymentGroup.TagFilterProperty> | cdk.IResolvable;
    }
    /**
     * Information about notification triggers for the deployment group.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-triggerconfig.html
     */
    interface TriggerConfigProperty {
        /**
         * The event type or types that trigger notifications.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-triggerconfig.html#cfn-codedeploy-deploymentgroup-triggerconfig-triggerevents
         */
        readonly triggerEvents?: Array<string>;
        /**
         * The name of the notification trigger.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-triggerconfig.html#cfn-codedeploy-deploymentgroup-triggerconfig-triggername
         */
        readonly triggerName?: string;
        /**
         * The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-triggerconfig.html#cfn-codedeploy-deploymentgroup-triggerconfig-triggertargetarn
         */
        readonly triggerTargetArn?: string;
    }
}
/**
 * Properties for defining a `CfnDeploymentGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html
 */
export interface CfnDeploymentGroupProps {
    /**
     * Information about the Amazon CloudWatch alarms that are associated with the deployment group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-alarmconfiguration
     */
    readonly alarmConfiguration?: CfnDeploymentGroup.AlarmConfigurationProperty | cdk.IResolvable;
    /**
     * The name of an existing CodeDeploy application to associate this deployment group with.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-applicationname
     */
    readonly applicationName: string;
    /**
     * Information about the automatic rollback configuration that is associated with the deployment group.
     *
     * If you specify this property, don't specify the `Deployment` property.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-autorollbackconfiguration
     */
    readonly autoRollbackConfiguration?: CfnDeploymentGroup.AutoRollbackConfigurationProperty | cdk.IResolvable;
    /**
     * A list of associated Auto Scaling groups that CodeDeploy automatically deploys revisions to when new instances are created.
     *
     * Duplicates are not allowed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-autoscalinggroups
     */
    readonly autoScalingGroups?: Array<string>;
    /**
     * Information about blue/green deployment options for a deployment group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-bluegreendeploymentconfiguration
     */
    readonly blueGreenDeploymentConfiguration?: CfnDeploymentGroup.BlueGreenDeploymentConfigurationProperty | cdk.IResolvable;
    /**
     * The application revision to deploy to this deployment group.
     *
     * If you specify this property, your target application revision is deployed as soon as the provisioning process is complete. If you specify this property, don't specify the `AutoRollbackConfiguration` property.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-deployment
     */
    readonly deployment?: CfnDeploymentGroup.DeploymentProperty | cdk.IResolvable;
    /**
     * A deployment configuration name or a predefined configuration name.
     *
     * With predefined configurations, you can deploy application revisions to one instance at a time ( `CodeDeployDefault.OneAtATime` ), half of the instances at a time ( `CodeDeployDefault.HalfAtATime` ), or all the instances at once ( `CodeDeployDefault.AllAtOnce` ). For more information and valid values, see [Working with Deployment Configurations](https://docs.aws.amazon.com/codedeploy/latest/userguide/deployment-configurations.html) in the *AWS CodeDeploy User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-deploymentconfigname
     */
    readonly deploymentConfigName?: string;
    /**
     * A name for the deployment group.
     *
     * If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment group name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html) .
     *
     * > If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-deploymentgroupname
     */
    readonly deploymentGroupName?: string;
    /**
     * Attributes that determine the type of deployment to run and whether to route deployment traffic behind a load balancer.
     *
     * If you specify this property with a blue/green deployment type, don't specify the `AutoScalingGroups` , `LoadBalancerInfo` , or `Deployment` properties.
     *
     * > For blue/green deployments, AWS CloudFormation supports deployments on Lambda compute platforms only. You can perform Amazon ECS blue/green deployments using `AWS::CodeDeploy::BlueGreen` hook. See [Perform Amazon ECS blue/green deployments through CodeDeploy using AWS CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/blue-green.html) for more information.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-deploymentstyle
     */
    readonly deploymentStyle?: CfnDeploymentGroup.DeploymentStyleProperty | cdk.IResolvable;
    /**
     * The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group.
     *
     * CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed.
     *
     * You can specify `EC2TagFilters` or `Ec2TagSet` , but not both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-ec2tagfilters
     */
    readonly ec2TagFilters?: Array<CfnDeploymentGroup.EC2TagFilterProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Information about groups of tags applied to Amazon EC2 instances.
     *
     * The deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same call as `ec2TagFilter` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-ec2tagset
     */
    readonly ec2TagSet?: CfnDeploymentGroup.EC2TagSetProperty | cdk.IResolvable;
    /**
     * The target Amazon ECS services in the deployment group.
     *
     * This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format `<clustername>:<servicename>` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-ecsservices
     */
    readonly ecsServices?: Array<CfnDeploymentGroup.ECSServiceProperty | cdk.IResolvable> | cdk.IResolvable;
    /**
     * Information about the load balancer to use in a deployment.
     *
     * For more information, see [Integrating CodeDeploy with Elastic Load Balancing](https://docs.aws.amazon.com/codedeploy/latest/userguide/integrations-aws-elastic-load-balancing.html) in the *AWS CodeDeploy User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-loadbalancerinfo
     */
    readonly loadBalancerInfo?: cdk.IResolvable | CfnDeploymentGroup.LoadBalancerInfoProperty;
    /**
     * The on-premises instance tags already applied to on-premises instances that you want to include in the deployment group.
     *
     * CodeDeploy includes all on-premises instances identified by any of the tags you specify in this deployment group. To register on-premises instances with CodeDeploy , see [Working with On-Premises Instances for CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/instances-on-premises.html) in the *AWS CodeDeploy User Guide* . Duplicates are not allowed.
     *
     * You can specify `OnPremisesInstanceTagFilters` or `OnPremisesInstanceTagSet` , but not both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-onpremisesinstancetagfilters
     */
    readonly onPremisesInstanceTagFilters?: Array<cdk.IResolvable | CfnDeploymentGroup.TagFilterProperty> | cdk.IResolvable;
    /**
     * Information about groups of tags applied to on-premises instances.
     *
     * The deployment group includes only on-premises instances identified by all the tag groups.
     *
     * You can specify `OnPremisesInstanceTagFilters` or `OnPremisesInstanceTagSet` , but not both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-onpremisestagset
     */
    readonly onPremisesTagSet?: cdk.IResolvable | CfnDeploymentGroup.OnPremisesTagSetProperty;
    /**
     * Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision.
     *
     * If this option is set to `UPDATE` or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances.
     *
     * If this option is set to `IGNORE` , CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-outdatedinstancesstrategy
     */
    readonly outdatedInstancesStrategy?: string;
    /**
     * A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf.
     *
     * For more information, see [Create a Service Role for AWS CodeDeploy](https://docs.aws.amazon.com/codedeploy/latest/userguide/getting-started-create-service-role.html) in the *AWS CodeDeploy User Guide* .
     *
     * > In some cases, you might need to add a dependency on the service role's policy. For more information, see IAM role policy in [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-servicerolearn
     */
    readonly serviceRoleArn: string;
    /**
     * The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them.
     *
     * Each tag consists of a key and an optional value, both of which you define.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
    /**
     * Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group.
     *
     * For more information about the termination hook, see [How Amazon EC2 Auto Scaling works with CodeDeploy](https://docs.aws.amazon.com//codedeploy/latest/userguide/integrations-aws-auto-scaling.html#integrations-aws-auto-scaling-behaviors) in the *AWS CodeDeploy User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-terminationhookenabled
     */
    readonly terminationHookEnabled?: boolean | cdk.IResolvable;
    /**
     * Information about triggers associated with the deployment group.
     *
     * Duplicates are not allowed
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codedeploy-deploymentgroup.html#cfn-codedeploy-deploymentgroup-triggerconfigurations
     */
    readonly triggerConfigurations?: Array<cdk.IResolvable | CfnDeploymentGroup.TriggerConfigProperty> | cdk.IResolvable;
}
