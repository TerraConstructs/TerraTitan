import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * The `AWS::ApplicationAutoScaling::ScalableTarget` resource specifies a resource that Application Auto Scaling can scale, such as an AWS::DynamoDB::Table or AWS::ECS::Service resource.
 *
 * For more information, see [Getting started](https://docs.aws.amazon.com/autoscaling/application/userguide/getting-started.html) in the *Application Auto Scaling User Guide* .
 *
 * > If the resource that you want Application Auto Scaling to scale is not yet created in your account, add a dependency on the resource when registering it as a scalable target using the [DependsOn](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html) attribute.
 *
 * @cloudformationResource AWS::ApplicationAutoScaling::ScalableTarget
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html
 */
export declare class CfnScalableTarget extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnScalableTarget from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnScalableTarget;
    /**
     * @cloudformationAttribute Id
     */
    readonly attrId: string;
    /**
     * The maximum value that you plan to scale out to.
     */
    maxCapacity: number;
    /**
     * The minimum value that you plan to scale in to.
     */
    minCapacity: number;
    /**
     * The identifier of the resource associated with the scalable target.
     */
    resourceId: string;
    /**
     * Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf.
     */
    roleArn?: string;
    /**
     * The scalable dimension associated with the scalable target.
     */
    scalableDimension: string;
    /**
     * The scheduled actions for the scalable target.
     */
    scheduledActions?: Array<cdk.IResolvable | CfnScalableTarget.ScheduledActionProperty> | cdk.IResolvable;
    /**
     * The namespace of the AWS service that provides the resource, or a `custom-resource` .
     */
    serviceNamespace: string;
    /**
     * An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling.
     */
    suspendedState?: cdk.IResolvable | CfnScalableTarget.SuspendedStateProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnScalableTargetProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnScalableTarget {
    /**
     * `ScheduledAction` is a property of the [AWS::ApplicationAutoScaling::ScalableTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html) resource that specifies a scheduled action for a scalable target.
     *
     * For more information, see [Scheduled scaling](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-scheduled-scaling.html) in the *Application Auto Scaling User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-scheduledaction.html
     */
    interface ScheduledActionProperty {
        /**
         * The date and time that the action is scheduled to end, in UTC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-scheduledaction.html#cfn-applicationautoscaling-scalabletarget-scheduledaction-endtime
         */
        readonly endTime?: Date | cdk.IResolvable;
        /**
         * The new minimum and maximum capacity.
         *
         * You can set both values or just one. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-scheduledaction.html#cfn-applicationautoscaling-scalabletarget-scheduledaction-scalabletargetaction
         */
        readonly scalableTargetAction?: cdk.IResolvable | CfnScalableTarget.ScalableTargetActionProperty;
        /**
         * The schedule for this action. The following formats are supported:.
         *
         * - At expressions - " `at( *yyyy* - *mm* - *dd* T *hh* : *mm* : *ss* )` "
         * - Rate expressions - " `rate( *value* *unit* )` "
         * - Cron expressions - " `cron( *fields* )` "
         *
         * At expressions are useful for one-time schedules. Cron expressions are useful for scheduled actions that run periodically at a specified date and time, and rate expressions are useful for scheduled actions that run at a regular interval.
         *
         * At and cron expressions use Universal Coordinated Time (UTC) by default.
         *
         * The cron format consists of six fields separated by white spaces: [Minutes] [Hours] [Day_of_Month] [Month] [Day_of_Week] [Year].
         *
         * For rate expressions, *value* is a positive integer and *unit* is `minute` | `minutes` | `hour` | `hours` | `day` | `days` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-scheduledaction.html#cfn-applicationautoscaling-scalabletarget-scheduledaction-schedule
         */
        readonly schedule: string;
        /**
         * The name of the scheduled action.
         *
         * This name must be unique among all other scheduled actions on the specified scalable target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-scheduledaction.html#cfn-applicationautoscaling-scalabletarget-scheduledaction-scheduledactionname
         */
        readonly scheduledActionName: string;
        /**
         * The date and time that the action is scheduled to begin, in UTC.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-scheduledaction.html#cfn-applicationautoscaling-scalabletarget-scheduledaction-starttime
         */
        readonly startTime?: Date | cdk.IResolvable;
        /**
         * The time zone used when referring to the date and time of a scheduled action, when the scheduled action uses an at or cron expression.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-scheduledaction.html#cfn-applicationautoscaling-scalabletarget-scheduledaction-timezone
         */
        readonly timezone?: string;
    }
    /**
     * `ScalableTargetAction` specifies the minimum and maximum capacity for the `ScalableTargetAction` property of the [AWS::ApplicationAutoScaling::ScalableTarget ScheduledAction](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-scheduledaction.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-scalabletargetaction.html
     */
    interface ScalableTargetActionProperty {
        /**
         * The maximum capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-scalabletargetaction.html#cfn-applicationautoscaling-scalabletarget-scalabletargetaction-maxcapacity
         */
        readonly maxCapacity?: number;
        /**
         * The minimum capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-scalabletargetaction.html#cfn-applicationautoscaling-scalabletarget-scalabletargetaction-mincapacity
         */
        readonly minCapacity?: number;
    }
    /**
     * `SuspendedState` is a property of the [AWS::ApplicationAutoScaling::ScalableTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html) resource that specifies whether the scaling activities for a scalable target are in a suspended state.
     *
     * For more information, see [Suspending and resuming scaling](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-suspend-resume-scaling.html) in the *Application Auto Scaling User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-suspendedstate.html
     */
    interface SuspendedStateProperty {
        /**
         * Whether scale in by a target tracking scaling policy or a step scaling policy is suspended.
         *
         * Set the value to `true` if you don't want Application Auto Scaling to remove capacity when a scaling policy is triggered. The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-suspendedstate.html#cfn-applicationautoscaling-scalabletarget-suspendedstate-dynamicscalinginsuspended
         */
        readonly dynamicScalingInSuspended?: boolean | cdk.IResolvable;
        /**
         * Whether scale out by a target tracking scaling policy or a step scaling policy is suspended.
         *
         * Set the value to `true` if you don't want Application Auto Scaling to add capacity when a scaling policy is triggered. The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-suspendedstate.html#cfn-applicationautoscaling-scalabletarget-suspendedstate-dynamicscalingoutsuspended
         */
        readonly dynamicScalingOutSuspended?: boolean | cdk.IResolvable;
        /**
         * Whether scheduled scaling is suspended.
         *
         * Set the value to `true` if you don't want Application Auto Scaling to add or remove capacity by initiating scheduled actions. The default is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalabletarget-suspendedstate.html#cfn-applicationautoscaling-scalabletarget-suspendedstate-scheduledscalingsuspended
         */
        readonly scheduledScalingSuspended?: boolean | cdk.IResolvable;
    }
}
/**
 * Properties for defining a `CfnScalableTarget`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html
 */
export interface CfnScalableTargetProps {
    /**
     * The maximum value that you plan to scale out to.
     *
     * When a scaling policy is in effect, Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to changing demand.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html#cfn-applicationautoscaling-scalabletarget-maxcapacity
     */
    readonly maxCapacity: number;
    /**
     * The minimum value that you plan to scale in to.
     *
     * When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html#cfn-applicationautoscaling-scalabletarget-mincapacity
     */
    readonly minCapacity: number;
    /**
     * The identifier of the resource associated with the scalable target.
     *
     * This string consists of the resource type and unique identifier.
     *
     * - ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service` .
     * - Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE` .
     * - EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0` .
     * - AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet` .
     * - DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table` .
     * - DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index` .
     * - Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster` .
     * - SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering` .
     * - Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://docs.aws.amazon.com/https://github.com/aws/aws-auto-scaling-custom-resource) .
     * - Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE` .
     * - Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE` .
     * - Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST` . Example: `function:my-function:prod` or `function:my-function:1` .
     * - Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable` .
     * - Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5` .
     * - Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster` .
     * - Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster` .
     * - SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering` .
     * - SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component` .
     * - Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html#cfn-applicationautoscaling-scalabletarget-resourceid
     */
    readonly resourceId: string;
    /**
     * Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf.
     *
     * This can be either an IAM service role that Application Auto Scaling can assume to make calls to other AWS resources on your behalf, or a service-linked role for the specified service. For more information, see [How Application Auto Scaling works with IAM](https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html) in the *Application Auto Scaling User Guide* .
     *
     * To automatically create a service-linked role (recommended), specify the full ARN of the service-linked role in your stack template. To find the exact ARN of the service-linked role for your AWS or custom resource, see the [Service-linked roles](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-service-linked-roles.html) topic in the *Application Auto Scaling User Guide* . Look for the ARN in the table at the bottom of the page.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html#cfn-applicationautoscaling-scalabletarget-rolearn
     */
    readonly roleArn?: string;
    /**
     * The scalable dimension associated with the scalable target.
     *
     * This string consists of the service namespace, resource type, and scaling property.
     *
     * - `ecs:service:DesiredCount` - The task count of an ECS service.
     * - `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
     * - `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
     * - `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
     * - `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
     * - `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
     * - `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
     * - `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
     * - `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
     * - `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
     * - `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
     * - `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
     * - `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
     * - `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
     * - `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
     * - `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
     * - `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
     * - `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
     * - `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
     * - `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
     * - `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
     * - `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
     * - `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html#cfn-applicationautoscaling-scalabletarget-scalabledimension
     */
    readonly scalableDimension: string;
    /**
     * The scheduled actions for the scalable target.
     *
     * Duplicates aren't allowed.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html#cfn-applicationautoscaling-scalabletarget-scheduledactions
     */
    readonly scheduledActions?: Array<cdk.IResolvable | CfnScalableTarget.ScheduledActionProperty> | cdk.IResolvable;
    /**
     * The namespace of the AWS service that provides the resource, or a `custom-resource` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html#cfn-applicationautoscaling-scalabletarget-servicenamespace
     */
    readonly serviceNamespace: string;
    /**
     * An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling.
     *
     * Setting the value of an attribute to `true` suspends the specified scaling activities. Setting it to `false` (default) resumes the specified scaling activities.
     *
     * *Suspension Outcomes*
     *
     * - For `DynamicScalingInSuspended` , while a suspension is in effect, all scale-in activities that are triggered by a scaling policy are suspended.
     * - For `DynamicScalingOutSuspended` , while a suspension is in effect, all scale-out activities that are triggered by a scaling policy are suspended.
     * - For `ScheduledScalingSuspended` , while a suspension is in effect, all scaling activities that involve scheduled actions are suspended.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalabletarget.html#cfn-applicationautoscaling-scalabletarget-suspendedstate
     */
    readonly suspendedState?: cdk.IResolvable | CfnScalableTarget.SuspendedStateProperty;
}
/**
 * The `AWS::ApplicationAutoScaling::ScalingPolicy` resource defines a scaling policy that Application Auto Scaling uses to adjust the capacity of a scalable target.
 *
 * For more information, see [Target tracking scaling policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html) and [Step scaling policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html) in the *Application Auto Scaling User Guide* .
 *
 * @cloudformationResource AWS::ApplicationAutoScaling::ScalingPolicy
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html
 */
export declare class CfnScalingPolicy extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnScalingPolicy from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnScalingPolicy;
    /**
     * Returns the ARN of a scaling policy.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The name of the scaling policy.
     */
    policyName: string;
    /**
     * The scaling policy type.
     */
    policyType: string;
    /**
     * The predictive scaling policy configuration.
     */
    predictiveScalingPolicyConfiguration?: cdk.IResolvable | CfnScalingPolicy.PredictiveScalingPolicyConfigurationProperty;
    /**
     * The identifier of the resource associated with the scaling policy.
     */
    resourceId?: string;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
     */
    scalableDimension?: string;
    /**
     * The CloudFormation-generated ID of an Application Auto Scaling scalable target.
     */
    scalingTargetId?: string;
    /**
     * The namespace of the AWS service that provides the resource, or a `custom-resource` .
     */
    serviceNamespace?: string;
    /**
     * A step scaling policy.
     */
    stepScalingPolicyConfiguration?: cdk.IResolvable | CfnScalingPolicy.StepScalingPolicyConfigurationProperty;
    /**
     * A target tracking scaling policy.
     */
    targetTrackingScalingPolicyConfiguration?: cdk.IResolvable | CfnScalingPolicy.TargetTrackingScalingPolicyConfigurationProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnScalingPolicyProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnScalingPolicy {
    /**
     * `StepScalingPolicyConfiguration` is a property of the [AWS::ApplicationAutoScaling::ScalingPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html) resource that specifies a step scaling policy configuration for Application Auto Scaling.
     *
     * For more information, see [Step scaling policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html) in the *Application Auto Scaling User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration.html
     */
    interface StepScalingPolicyConfigurationProperty {
        /**
         * Specifies whether the `ScalingAdjustment` value in the `StepAdjustment` property is an absolute number or a percentage of the current capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration.html#cfn-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration-adjustmenttype
         */
        readonly adjustmentType?: string;
        /**
         * The amount of time, in seconds, to wait for a previous scaling activity to take effect.
         *
         * If not specified, the default value is 300. For more information, see [Cooldown period](https://docs.aws.amazon.com/autoscaling/application/userguide/step-scaling-policy-overview.html#step-scaling-cooldown) in the *Application Auto Scaling User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration.html#cfn-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration-cooldown
         */
        readonly cooldown?: number;
        /**
         * The aggregation type for the CloudWatch metrics.
         *
         * Valid values are `Minimum` , `Maximum` , and `Average` . If the aggregation type is null, the value is treated as `Average` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration.html#cfn-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration-metricaggregationtype
         */
        readonly metricAggregationType?: string;
        /**
         * The minimum value to scale by when the adjustment type is `PercentChangeInCapacity` .
         *
         * For example, suppose that you create a step scaling policy to scale out an Amazon ECS service by 25 percent and you specify a `MinAdjustmentMagnitude` of 2. If the service has 4 tasks and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a `MinAdjustmentMagnitude` of 2, Application Auto Scaling scales out the service by 2 tasks.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration.html#cfn-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration-minadjustmentmagnitude
         */
        readonly minAdjustmentMagnitude?: number;
        /**
         * A set of adjustments that enable you to scale based on the size of the alarm breach.
         *
         * At least one step adjustment is required if you are adding a new step scaling policy configuration.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration.html#cfn-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration-stepadjustments
         */
        readonly stepAdjustments?: Array<cdk.IResolvable | CfnScalingPolicy.StepAdjustmentProperty> | cdk.IResolvable;
    }
    /**
     * `StepAdjustment` specifies a step adjustment for the `StepAdjustments` property of the [AWS::ApplicationAutoScaling::ScalingPolicy StepScalingPolicyConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration.html) property type.
     *
     * For the following examples, suppose that you have an alarm with a breach threshold of 50:
     *
     * - To trigger a step adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of 0 and an upper bound of 10.
     * - To trigger a step adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of -10 and an upper bound of 0.
     *
     * For more information, see [Step adjustments](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-step-scaling-policies.html#as-scaling-steps) in the *Application Auto Scaling User Guide* .
     *
     * You can find a sample template snippet in the [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html#aws-resource-applicationautoscaling-scalingpolicy--examples) section of the `AWS::ApplicationAutoScaling::ScalingPolicy` documentation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepadjustment.html
     */
    interface StepAdjustmentProperty {
        /**
         * The lower bound for the difference between the alarm threshold and the CloudWatch metric.
         *
         * If the metric value is above the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it is exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.
         *
         * You must specify at least one upper or lower bound.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepadjustment.html#cfn-applicationautoscaling-scalingpolicy-stepadjustment-metricintervallowerbound
         */
        readonly metricIntervalLowerBound?: number;
        /**
         * The upper bound for the difference between the alarm threshold and the CloudWatch metric.
         *
         * If the metric value is above the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity.
         *
         * You must specify at least one upper or lower bound.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepadjustment.html#cfn-applicationautoscaling-scalingpolicy-stepadjustment-metricintervalupperbound
         */
        readonly metricIntervalUpperBound?: number;
        /**
         * The amount by which to scale.
         *
         * The adjustment is based on the value that you specified in the `AdjustmentType` property (either an absolute number or a percentage). A positive value adds to the current capacity and a negative number subtracts from the current capacity.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-stepadjustment.html#cfn-applicationautoscaling-scalingpolicy-stepadjustment-scalingadjustment
         */
        readonly scalingAdjustment: number;
    }
    /**
     * `TargetTrackingScalingPolicyConfiguration` is a property of the [AWS::ApplicationAutoScaling::ScalingPolicy](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html) resource that specifies a target tracking scaling policy configuration for Application Auto Scaling. Use a target tracking scaling policy to adjust the capacity of the specified scalable target in response to actual workloads, so that resource utilization remains at or near the target utilization value.
     *
     * For more information, see [Target tracking scaling policies](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking.html) in the *Application Auto Scaling User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration.html
     */
    interface TargetTrackingScalingPolicyConfigurationProperty {
        /**
         * A customized metric.
         *
         * You can specify either a predefined metric or a customized metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration.html#cfn-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration-customizedmetricspecification
         */
        readonly customizedMetricSpecification?: CfnScalingPolicy.CustomizedMetricSpecificationProperty | cdk.IResolvable;
        /**
         * Indicates whether scale in by the target tracking scaling policy is disabled.
         *
         * If the value is `true` , scale in is disabled and the target tracking scaling policy won't remove capacity from the scalable target. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable target. The default value is `false` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration.html#cfn-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration-disablescalein
         */
        readonly disableScaleIn?: boolean | cdk.IResolvable;
        /**
         * A predefined metric.
         *
         * You can specify either a predefined metric or a customized metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration.html#cfn-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration-predefinedmetricspecification
         */
        readonly predefinedMetricSpecification?: cdk.IResolvable | CfnScalingPolicy.PredefinedMetricSpecificationProperty;
        /**
         * The amount of time, in seconds, after a scale-in activity completes before another scale-in activity can start.
         *
         * For more information and for default values, see [Define cooldown periods](https://docs.aws.amazon.com/autoscaling/application/userguide/target-tracking-scaling-policy-overview.html#target-tracking-cooldown) in the *Application Auto Scaling User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration.html#cfn-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration-scaleincooldown
         */
        readonly scaleInCooldown?: number;
        /**
         * The amount of time, in seconds, to wait for a previous scale-out activity to take effect.
         *
         * For more information and for default values, see [Define cooldown periods](https://docs.aws.amazon.com/autoscaling/application/userguide/target-tracking-scaling-policy-overview.html#target-tracking-cooldown) in the *Application Auto Scaling User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration.html#cfn-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration-scaleoutcooldown
         */
        readonly scaleOutCooldown?: number;
        /**
         * The target value for the metric.
         *
         * Although this property accepts numbers of type Double, it won't accept values that are either too small or too large. Values must be in the range of -2^360 to 2^360. The value must be a valid number based on the choice of metric. For example, if the metric is CPU utilization, then the target value is a percent value that represents how much of the CPU can be used before scaling out.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration.html#cfn-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration-targetvalue
         */
        readonly targetValue: number;
    }
    /**
     * Contains customized metric specification information for a target tracking scaling policy for Application Auto Scaling.
     *
     * For information about the available metrics for a service, see [AWS services that publish CloudWatch metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the *Amazon CloudWatch User Guide* .
     *
     * To create your customized metric specification:
     *
     * - Add values for each required parameter from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see [Publish custom metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html) in the *Amazon CloudWatch User Guide* .
     * - Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases, and increase when capacity decreases.
     *
     * For an example of how creating new metrics can be useful, see [Scaling based on Amazon SQS](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-using-sqs-queue.html) in the *Amazon EC2 Auto Scaling User Guide* . This topic mentions Auto Scaling groups, but the same scenario for Amazon SQS can apply to the target tracking scaling policies that you create for a Spot Fleet by using Application Auto Scaling.
     *
     * For more information about the CloudWatch terminology below, see [Amazon CloudWatch concepts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html) .
     *
     * `CustomizedMetricSpecification` is a property of the [AWS::ApplicationAutoScaling::ScalingPolicy TargetTrackingScalingPolicyConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-customizedmetricspecification.html
     */
    interface CustomizedMetricSpecificationProperty {
        /**
         * The dimensions of the metric.
         *
         * Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-customizedmetricspecification.html#cfn-applicationautoscaling-scalingpolicy-customizedmetricspecification-dimensions
         */
        readonly dimensions?: Array<cdk.IResolvable | CfnScalingPolicy.MetricDimensionProperty> | cdk.IResolvable;
        /**
         * The name of the metric.
         *
         * To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that's returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-customizedmetricspecification.html#cfn-applicationautoscaling-scalingpolicy-customizedmetricspecification-metricname
         */
        readonly metricName?: string;
        /**
         * The metrics to include in the target tracking scaling policy, as a metric data query.
         *
         * This can include both raw metric and metric math expressions.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-customizedmetricspecification.html#cfn-applicationautoscaling-scalingpolicy-customizedmetricspecification-metrics
         */
        readonly metrics?: Array<cdk.IResolvable | CfnScalingPolicy.TargetTrackingMetricDataQueryProperty> | cdk.IResolvable;
        /**
         * The namespace of the metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-customizedmetricspecification.html#cfn-applicationautoscaling-scalingpolicy-customizedmetricspecification-namespace
         */
        readonly namespace?: string;
        /**
         * The statistic of the metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-customizedmetricspecification.html#cfn-applicationautoscaling-scalingpolicy-customizedmetricspecification-statistic
         */
        readonly statistic?: string;
        /**
         * The unit of the metric.
         *
         * For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-customizedmetricspecification.html#cfn-applicationautoscaling-scalingpolicy-customizedmetricspecification-unit
         */
        readonly unit?: string;
    }
    /**
     * `MetricDimension` specifies a name/value pair that is part of the identity of a CloudWatch metric for the `Dimensions` property of the [AWS::ApplicationAutoScaling::ScalingPolicy CustomizedMetricSpecification](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-customizedmetricspecification.html) property type. Duplicate dimensions are not allowed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-metricdimension.html
     */
    interface MetricDimensionProperty {
        /**
         * The name of the dimension.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-metricdimension.html#cfn-applicationautoscaling-scalingpolicy-metricdimension-name
         */
        readonly name: string;
        /**
         * The value of the dimension.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-metricdimension.html#cfn-applicationautoscaling-scalingpolicy-metricdimension-value
         */
        readonly value: string;
    }
    /**
     * The metric data to return.
     *
     * Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.
     *
     * You can call for a single metric or perform math expressions on multiple metrics. Any expressions used in a metric specification must eventually return a single time series.
     *
     * For more information and examples, see [Create a target tracking scaling policy for Application Auto Scaling using metric math](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-target-tracking-metric-math.html) in the *Application Auto Scaling User Guide* .
     *
     * `TargetTrackingMetricDataQuery` is a property of the [AWS::ApplicationAutoScaling::ScalingPolicy CustomizedMetricSpecification](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-customizedmetricspecification.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricdataquery.html
     */
    interface TargetTrackingMetricDataQueryProperty {
        /**
         * The math expression to perform on the returned data, if this object is performing a math expression.
         *
         * This expression can use the `Id` of the other metrics to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions.
         *
         * Conditional: Within each `TargetTrackingMetricDataQuery` object, you must specify either `Expression` or `MetricStat` , but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricdataquery.html#cfn-applicationautoscaling-scalingpolicy-targettrackingmetricdataquery-expression
         */
        readonly expression?: string;
        /**
         * A short name that identifies the object's results in the response.
         *
         * This name must be unique among all `MetricDataQuery` objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricdataquery.html#cfn-applicationautoscaling-scalingpolicy-targettrackingmetricdataquery-id
         */
        readonly id?: string;
        /**
         * A human-readable label for this metric or expression.
         *
         * This is especially useful if this is a math expression, so that you know what the value represents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricdataquery.html#cfn-applicationautoscaling-scalingpolicy-targettrackingmetricdataquery-label
         */
        readonly label?: string;
        /**
         * Information about the metric data to return.
         *
         * Conditional: Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat` , but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricdataquery.html#cfn-applicationautoscaling-scalingpolicy-targettrackingmetricdataquery-metricstat
         */
        readonly metricStat?: cdk.IResolvable | CfnScalingPolicy.TargetTrackingMetricStatProperty;
        /**
         * Indicates whether to return the timestamps and raw data values of this metric.
         *
         * If you use any math expressions, specify `true` for this value for only the final math expression that the metric specification is based on. You must specify `false` for `ReturnData` for all the other metrics and expressions used in the metric specification.
         *
         * If you are only retrieving metrics and not performing any math expressions, do not specify anything for `ReturnData` . This sets it to its default ( `true` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricdataquery.html#cfn-applicationautoscaling-scalingpolicy-targettrackingmetricdataquery-returndata
         */
        readonly returnData?: boolean | cdk.IResolvable;
    }
    /**
     * This structure defines the CloudWatch metric to return, along with the statistic and unit.
     *
     * `TargetTrackingMetricStat` is a property of the [AWS::ApplicationAutoScaling::ScalingPolicy TargetTrackingMetricDataQuery](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricdataquery.html) property type.
     *
     * For more information about the CloudWatch terminology below, see [Amazon CloudWatch concepts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html) in the *Amazon CloudWatch User Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricstat.html
     */
    interface TargetTrackingMetricStatProperty {
        /**
         * The CloudWatch metric to return, including the metric name, namespace, and dimensions.
         *
         * To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that is returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricstat.html#cfn-applicationautoscaling-scalingpolicy-targettrackingmetricstat-metric
         */
        readonly metric?: cdk.IResolvable | CfnScalingPolicy.TargetTrackingMetricProperty;
        /**
         * The statistic to return.
         *
         * It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *Amazon CloudWatch User Guide* .
         *
         * The most commonly used metric for scaling is `Average` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricstat.html#cfn-applicationautoscaling-scalingpolicy-targettrackingmetricstat-stat
         */
        readonly stat?: string;
        /**
         * The unit to use for the returned data points.
         *
         * For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricstat.html#cfn-applicationautoscaling-scalingpolicy-targettrackingmetricstat-unit
         */
        readonly unit?: string;
    }
    /**
     * Represents a specific metric for a target tracking scaling policy for Application Auto Scaling.
     *
     * Metric is a property of the [AWS::ApplicationAutoScaling::ScalingPolicy TargetTrackingMetricStat](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricstat.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetric.html
     */
    interface TargetTrackingMetricProperty {
        /**
         * The dimensions for the metric.
         *
         * For the list of available dimensions, see the AWS documentation available from the table in [AWS services that publish CloudWatch metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the *Amazon CloudWatch User Guide* .
         *
         * Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetric.html#cfn-applicationautoscaling-scalingpolicy-targettrackingmetric-dimensions
         */
        readonly dimensions?: Array<cdk.IResolvable | CfnScalingPolicy.TargetTrackingMetricDimensionProperty> | cdk.IResolvable;
        /**
         * The name of the metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetric.html#cfn-applicationautoscaling-scalingpolicy-targettrackingmetric-metricname
         */
        readonly metricName?: string;
        /**
         * The namespace of the metric.
         *
         * For more information, see the table in [AWS services that publish CloudWatch metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the *Amazon CloudWatch User Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetric.html#cfn-applicationautoscaling-scalingpolicy-targettrackingmetric-namespace
         */
        readonly namespace?: string;
    }
    /**
     * `TargetTrackingMetricDimension` specifies a name/value pair that is part of the identity of a CloudWatch metric for the `Dimensions` property of the [AWS::ApplicationAutoScaling::ScalingPolicy TargetTrackingMetric](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetric.html) property type. Duplicate dimensions are not allowed.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricdimension.html
     */
    interface TargetTrackingMetricDimensionProperty {
        /**
         * The name of the dimension.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricdimension.html#cfn-applicationautoscaling-scalingpolicy-targettrackingmetricdimension-name
         */
        readonly name?: string;
        /**
         * The value of the dimension.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingmetricdimension.html#cfn-applicationautoscaling-scalingpolicy-targettrackingmetricdimension-value
         */
        readonly value?: string;
    }
    /**
     * Contains predefined metric specification information for a target tracking scaling policy for Application Auto Scaling.
     *
     * `PredefinedMetricSpecification` is a property of the [AWS::ApplicationAutoScaling::ScalingPolicy TargetTrackingScalingPolicyConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration.html) property type.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predefinedmetricspecification.html
     */
    interface PredefinedMetricSpecificationProperty {
        /**
         * The metric type.
         *
         * The `ALBRequestCountPerTarget` metric type applies only to Spot fleet requests and ECS services.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predefinedmetricspecification.html#cfn-applicationautoscaling-scalingpolicy-predefinedmetricspecification-predefinedmetrictype
         */
        readonly predefinedMetricType: string;
        /**
         * Identifies the resource associated with the metric type.
         *
         * You can't specify a resource label unless the metric type is `ALBRequestCountPerTarget` and there is a target group attached to the Spot Fleet or ECS service.
         *
         * You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format of the resource label is:
         *
         * `app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff` .
         *
         * Where:
         *
         * - app/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN
         * - targetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.
         *
         * To find the ARN for an Application Load Balancer, use the [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html) API operation. To find the ARN for the target group, use the [DescribeTargetGroups](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html) API operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predefinedmetricspecification.html#cfn-applicationautoscaling-scalingpolicy-predefinedmetricspecification-resourcelabel
         */
        readonly resourceLabel?: string;
    }
    /**
     * Represents a predictive scaling policy configuration.
     *
     * Predictive scaling is supported on Amazon ECS services.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingpolicyconfiguration.html
     */
    interface PredictiveScalingPolicyConfigurationProperty {
        /**
         * Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity.
         *
         * Defaults to `HonorMaxCapacity` if not specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingpolicyconfiguration.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingpolicyconfiguration-maxcapacitybreachbehavior
         */
        readonly maxCapacityBreachBehavior?: string;
        /**
         * The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity.
         *
         * The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer, such that if the forecast capacity is 50, and the maximum capacity is 40, then the effective maximum capacity is 55.
         *
         * Required if the `MaxCapacityBreachBehavior` property is set to `IncreaseMaxCapacity` , and cannot be used otherwise.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingpolicyconfiguration.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingpolicyconfiguration-maxcapacitybuffer
         */
        readonly maxCapacityBuffer?: number;
        /**
         * This structure includes the metrics and target utilization to use for predictive scaling.
         *
         * This is an array, but we currently only support a single metric specification. That is, you can specify a target value and a single metric pair, or a target value and one scaling metric and one load metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingpolicyconfiguration.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingpolicyconfiguration-metricspecifications
         */
        readonly metricSpecifications: Array<cdk.IResolvable | CfnScalingPolicy.PredictiveScalingMetricSpecificationProperty> | cdk.IResolvable;
        /**
         * The predictive scaling mode.
         *
         * Defaults to `ForecastOnly` if not specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingpolicyconfiguration.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingpolicyconfiguration-mode
         */
        readonly mode?: string;
        /**
         * The amount of time, in seconds, that the start time can be advanced.
         *
         * The value must be less than the forecast interval duration of 3600 seconds (60 minutes). Defaults to 300 seconds if not specified.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingpolicyconfiguration.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingpolicyconfiguration-schedulingbuffertime
         */
        readonly schedulingBufferTime?: number;
    }
    /**
     * This structure specifies the metrics and target utilization settings for a predictive scaling policy.
     *
     * You must specify either a metric pair, or a load metric and a scaling metric individually. Specifying a metric pair instead of individual metrics provides a simpler way to configure metrics for a scaling policy. You choose the metric pair, and the policy automatically knows the correct sum and average statistics to use for the load metric and the scaling metric.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricspecification.html
     */
    interface PredictiveScalingMetricSpecificationProperty {
        /**
         * The customized capacity metric specification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricspecification.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricspecification-customizedcapacitymetricspecification
         */
        readonly customizedCapacityMetricSpecification?: cdk.IResolvable | CfnScalingPolicy.PredictiveScalingCustomizedCapacityMetricProperty;
        /**
         * The customized load metric specification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricspecification.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricspecification-customizedloadmetricspecification
         */
        readonly customizedLoadMetricSpecification?: cdk.IResolvable | CfnScalingPolicy.PredictiveScalingCustomizedLoadMetricProperty;
        /**
         * The customized scaling metric specification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricspecification.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricspecification-customizedscalingmetricspecification
         */
        readonly customizedScalingMetricSpecification?: cdk.IResolvable | CfnScalingPolicy.PredictiveScalingCustomizedScalingMetricProperty;
        /**
         * The predefined load metric specification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricspecification.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricspecification-predefinedloadmetricspecification
         */
        readonly predefinedLoadMetricSpecification?: cdk.IResolvable | CfnScalingPolicy.PredictiveScalingPredefinedLoadMetricProperty;
        /**
         * The predefined metric pair specification that determines the appropriate scaling metric and load metric to use.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricspecification.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricspecification-predefinedmetricpairspecification
         */
        readonly predefinedMetricPairSpecification?: cdk.IResolvable | CfnScalingPolicy.PredictiveScalingPredefinedMetricPairProperty;
        /**
         * The predefined scaling metric specification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricspecification.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricspecification-predefinedscalingmetricspecification
         */
        readonly predefinedScalingMetricSpecification?: cdk.IResolvable | CfnScalingPolicy.PredictiveScalingPredefinedScalingMetricProperty;
        /**
         * Specifies the target utilization.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricspecification.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricspecification-targetvalue
         */
        readonly targetValue: number;
    }
    /**
     * The customized load metric specification.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingcustomizedloadmetric.html
     */
    interface PredictiveScalingCustomizedLoadMetricProperty {
        /**
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingcustomizedloadmetric.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingcustomizedloadmetric-metricdataqueries
         */
        readonly metricDataQueries: Array<cdk.IResolvable | CfnScalingPolicy.PredictiveScalingMetricDataQueryProperty> | cdk.IResolvable;
    }
    /**
     * The metric data to return.
     *
     * Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricdataquery.html
     */
    interface PredictiveScalingMetricDataQueryProperty {
        /**
         * The math expression to perform on the returned data, if this object is performing a math expression.
         *
         * This expression can use the `Id` of the other metrics to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions.
         *
         * Conditional: Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat` , but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricdataquery.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricdataquery-expression
         */
        readonly expression?: string;
        /**
         * A short name that identifies the object's results in the response.
         *
         * This name must be unique among all `MetricDataQuery` objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricdataquery.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricdataquery-id
         */
        readonly id?: string;
        /**
         * A human-readable label for this metric or expression.
         *
         * This is especially useful if this is a math expression, so that you know what the value represents.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricdataquery.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricdataquery-label
         */
        readonly label?: string;
        /**
         * Information about the metric data to return.
         *
         * Conditional: Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat` , but not both.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricdataquery.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricdataquery-metricstat
         */
        readonly metricStat?: cdk.IResolvable | CfnScalingPolicy.PredictiveScalingMetricStatProperty;
        /**
         * Indicates whether to return the timestamps and raw data values of this metric.
         *
         * If you use any math expressions, specify `true` for this value for only the final math expression that the metric specification is based on. You must specify `false` for `ReturnData` for all the other metrics and expressions used in the metric specification.
         *
         * If you are only retrieving metrics and not performing any math expressions, do not specify anything for `ReturnData` . This sets it to its default ( `true` ).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricdataquery.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricdataquery-returndata
         */
        readonly returnData?: boolean | cdk.IResolvable;
    }
    /**
     * This structure defines the CloudWatch metric to return, along with the statistic and unit.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricstat.html
     */
    interface PredictiveScalingMetricStatProperty {
        /**
         * The CloudWatch metric to return, including the metric name, namespace, and dimensions.
         *
         * To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that is returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html) .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricstat.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricstat-metric
         */
        readonly metric?: cdk.IResolvable | CfnScalingPolicy.PredictiveScalingMetricProperty;
        /**
         * The statistic to return.
         *
         * It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *Amazon CloudWatch User Guide* .
         *
         * The most commonly used metrics for predictive scaling are `Average` and `Sum` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricstat.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricstat-stat
         */
        readonly stat?: string;
        /**
         * The unit to use for the returned data points.
         *
         * For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricstat.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricstat-unit
         */
        readonly unit?: string;
    }
    /**
     * Describes the scaling metric.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetric.html
     */
    interface PredictiveScalingMetricProperty {
        /**
         * Describes the dimensions of the metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetric.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetric-dimensions
         */
        readonly dimensions?: Array<cdk.IResolvable | CfnScalingPolicy.PredictiveScalingMetricDimensionProperty> | cdk.IResolvable;
        /**
         * The name of the metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetric.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetric-metricname
         */
        readonly metricName?: string;
        /**
         * The namespace of the metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetric.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetric-namespace
         */
        readonly namespace?: string;
    }
    /**
     * Describes the dimension of a metric.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricdimension.html
     */
    interface PredictiveScalingMetricDimensionProperty {
        /**
         * The name of the dimension.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricdimension.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricdimension-name
         */
        readonly name?: string;
        /**
         * The value of the dimension.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingmetricdimension.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingmetricdimension-value
         */
        readonly value?: string;
    }
    /**
     * Describes a load metric for a predictive scaling policy.
     *
     * When returned in the output of `DescribePolicies` , it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingpredefinedloadmetric.html
     */
    interface PredictiveScalingPredefinedLoadMetricProperty {
        /**
         * The metric type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingpredefinedloadmetric.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingpredefinedloadmetric-predefinedmetrictype
         */
        readonly predefinedMetricType: string;
        /**
         * A label that uniquely identifies a target group.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingpredefinedloadmetric.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingpredefinedloadmetric-resourcelabel
         */
        readonly resourceLabel?: string;
    }
    /**
     * Describes a scaling metric for a predictive scaling policy.
     *
     * When returned in the output of `DescribePolicies` , it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingpredefinedscalingmetric.html
     */
    interface PredictiveScalingPredefinedScalingMetricProperty {
        /**
         * The metric type.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingpredefinedscalingmetric.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingpredefinedscalingmetric-predefinedmetrictype
         */
        readonly predefinedMetricType: string;
        /**
         * A label that uniquely identifies a specific target group from which to determine the average request count.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingpredefinedscalingmetric.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingpredefinedscalingmetric-resourcelabel
         */
        readonly resourceLabel?: string;
    }
    /**
     * Represents a CloudWatch metric of your choosing for a predictive scaling policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingcustomizedcapacitymetric.html
     */
    interface PredictiveScalingCustomizedCapacityMetricProperty {
        /**
         * One or more metric data queries to provide data points for a metric specification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingcustomizedcapacitymetric.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingcustomizedcapacitymetric-metricdataqueries
         */
        readonly metricDataQueries: Array<cdk.IResolvable | CfnScalingPolicy.PredictiveScalingMetricDataQueryProperty> | cdk.IResolvable;
    }
    /**
     * One or more metric data queries to provide data points for a metric specification.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingcustomizedscalingmetric.html
     */
    interface PredictiveScalingCustomizedScalingMetricProperty {
        /**
         * One or more metric data queries to provide data points for a metric specification.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingcustomizedscalingmetric.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingcustomizedscalingmetric-metricdataqueries
         */
        readonly metricDataQueries: Array<cdk.IResolvable | CfnScalingPolicy.PredictiveScalingMetricDataQueryProperty> | cdk.IResolvable;
    }
    /**
     * Represents a metric pair for a predictive scaling policy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingpredefinedmetricpair.html
     */
    interface PredictiveScalingPredefinedMetricPairProperty {
        /**
         * Indicates which metrics to use.
         *
         * There are two different types of metrics for each metric type: one is a load metric and one is a scaling metric.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingpredefinedmetricpair.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingpredefinedmetricpair-predefinedmetrictype
         */
        readonly predefinedMetricType: string;
        /**
         * A label that uniquely identifies a specific target group from which to determine the total and average request count.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-applicationautoscaling-scalingpolicy-predictivescalingpredefinedmetricpair.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingpredefinedmetricpair-resourcelabel
         */
        readonly resourceLabel?: string;
    }
}
/**
 * Properties for defining a `CfnScalingPolicy`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html
 */
export interface CfnScalingPolicyProps {
    /**
     * The name of the scaling policy.
     *
     * Updates to the name of a target tracking scaling policy are not supported, unless you also update the metric used for scaling. To change only a target tracking scaling policy's name, first delete the policy by removing the existing `AWS::ApplicationAutoScaling::ScalingPolicy` resource from the template and updating the stack. Then, recreate the resource with the same settings and a different name.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html#cfn-applicationautoscaling-scalingpolicy-policyname
     */
    readonly policyName: string;
    /**
     * The scaling policy type.
     *
     * The following policy types are supported:
     *
     * `TargetTrackingScaling` —Not supported for Amazon EMR
     *
     * `StepScaling` —Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or Neptune.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html#cfn-applicationautoscaling-scalingpolicy-policytype
     */
    readonly policyType: string;
    /**
     * The predictive scaling policy configuration.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html#cfn-applicationautoscaling-scalingpolicy-predictivescalingpolicyconfiguration
     */
    readonly predictiveScalingPolicyConfiguration?: cdk.IResolvable | CfnScalingPolicy.PredictiveScalingPolicyConfigurationProperty;
    /**
     * The identifier of the resource associated with the scaling policy.
     *
     * This string consists of the resource type and unique identifier.
     *
     * - ECS service - The resource type is `service` and the unique identifier is the cluster name and service name. Example: `service/my-cluster/my-service` .
     * - Spot Fleet - The resource type is `spot-fleet-request` and the unique identifier is the Spot Fleet request ID. Example: `spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE` .
     * - EMR cluster - The resource type is `instancegroup` and the unique identifier is the cluster ID and instance group ID. Example: `instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0` .
     * - AppStream 2.0 fleet - The resource type is `fleet` and the unique identifier is the fleet name. Example: `fleet/sample-fleet` .
     * - DynamoDB table - The resource type is `table` and the unique identifier is the table name. Example: `table/my-table` .
     * - DynamoDB global secondary index - The resource type is `index` and the unique identifier is the index name. Example: `table/my-table/index/my-table-index` .
     * - Aurora DB cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:my-db-cluster` .
     * - SageMaker endpoint variant - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering` .
     * - Custom resources are not supported with a resource type. This parameter must specify the `OutputValue` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://docs.aws.amazon.com/https://github.com/aws/aws-auto-scaling-custom-resource) .
     * - Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE` .
     * - Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: `arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE` .
     * - Lambda provisioned concurrency - The resource type is `function` and the unique identifier is the function name with a function version or alias name suffix that is not `$LATEST` . Example: `function:my-function:prod` or `function:my-function:1` .
     * - Amazon Keyspaces table - The resource type is `table` and the unique identifier is the table name. Example: `keyspace/mykeyspace/table/mytable` .
     * - Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: `arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5` .
     * - Amazon ElastiCache replication group - The resource type is `replication-group` and the unique identifier is the replication group name. Example: `replication-group/mycluster` .
     * - Neptune cluster - The resource type is `cluster` and the unique identifier is the cluster name. Example: `cluster:mycluster` .
     * - SageMaker serverless endpoint - The resource type is `variant` and the unique identifier is the resource ID. Example: `endpoint/my-end-point/variant/KMeansClustering` .
     * - SageMaker inference component - The resource type is `inference-component` and the unique identifier is the resource ID. Example: `inference-component/my-inference-component` .
     * - Pool of WorkSpaces - The resource type is `workspacespool` and the unique identifier is the pool ID. Example: `workspacespool/wspool-123456` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html#cfn-applicationautoscaling-scalingpolicy-resourceid
     */
    readonly resourceId?: string;
    /**
     * The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
     *
     * - `ecs:service:DesiredCount` - The task count of an ECS service.
     * - `elasticmapreduce:instancegroup:InstanceCount` - The instance count of an EMR Instance Group.
     * - `ec2:spot-fleet-request:TargetCapacity` - The target capacity of a Spot Fleet.
     * - `appstream:fleet:DesiredCapacity` - The capacity of an AppStream 2.0 fleet.
     * - `dynamodb:table:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB table.
     * - `dynamodb:table:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB table.
     * - `dynamodb:index:ReadCapacityUnits` - The provisioned read capacity for a DynamoDB global secondary index.
     * - `dynamodb:index:WriteCapacityUnits` - The provisioned write capacity for a DynamoDB global secondary index.
     * - `rds:cluster:ReadReplicaCount` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
     * - `sagemaker:variant:DesiredInstanceCount` - The number of EC2 instances for a SageMaker model endpoint variant.
     * - `custom-resource:ResourceType:Property` - The scalable dimension for a custom resource provided by your own application or service.
     * - `comprehend:document-classifier-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend document classification endpoint.
     * - `comprehend:entity-recognizer-endpoint:DesiredInferenceUnits` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
     * - `lambda:function:ProvisionedConcurrency` - The provisioned concurrency for a Lambda function.
     * - `cassandra:table:ReadCapacityUnits` - The provisioned read capacity for an Amazon Keyspaces table.
     * - `cassandra:table:WriteCapacityUnits` - The provisioned write capacity for an Amazon Keyspaces table.
     * - `kafka:broker-storage:VolumeSize` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
     * - `elasticache:replication-group:NodeGroups` - The number of node groups for an Amazon ElastiCache replication group.
     * - `elasticache:replication-group:Replicas` - The number of replicas per node group for an Amazon ElastiCache replication group.
     * - `neptune:cluster:ReadReplicaCount` - The count of read replicas in an Amazon Neptune DB cluster.
     * - `sagemaker:variant:DesiredProvisionedConcurrency` - The provisioned concurrency for a SageMaker serverless endpoint.
     * - `sagemaker:inference-component:DesiredCopyCount` - The number of copies across an endpoint for a SageMaker inference component.
     * - `workspaces:workspacespool:DesiredUserSessions` - The number of user sessions for the WorkSpaces in the pool.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html#cfn-applicationautoscaling-scalingpolicy-scalabledimension
     */
    readonly scalableDimension?: string;
    /**
     * The CloudFormation-generated ID of an Application Auto Scaling scalable target.
     *
     * For more information about the ID, see the Return Value section of the `AWS::ApplicationAutoScaling::ScalableTarget` resource.
     *
     * > You must specify either the `ScalingTargetId` property, or the `ResourceId` , `ScalableDimension` , and `ServiceNamespace` properties, but not both.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html#cfn-applicationautoscaling-scalingpolicy-scalingtargetid
     */
    readonly scalingTargetId?: string;
    /**
     * The namespace of the AWS service that provides the resource, or a `custom-resource` .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html#cfn-applicationautoscaling-scalingpolicy-servicenamespace
     */
    readonly serviceNamespace?: string;
    /**
     * A step scaling policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html#cfn-applicationautoscaling-scalingpolicy-stepscalingpolicyconfiguration
     */
    readonly stepScalingPolicyConfiguration?: cdk.IResolvable | CfnScalingPolicy.StepScalingPolicyConfigurationProperty;
    /**
     * A target tracking scaling policy.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-applicationautoscaling-scalingpolicy.html#cfn-applicationautoscaling-scalingpolicy-targettrackingscalingpolicyconfiguration
     */
    readonly targetTrackingScalingPolicyConfiguration?: cdk.IResolvable | CfnScalingPolicy.TargetTrackingScalingPolicyConfigurationProperty;
}
