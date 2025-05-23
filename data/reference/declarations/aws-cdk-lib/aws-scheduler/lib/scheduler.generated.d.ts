import * as cdk from "../../core";
import * as constructs from "constructs";
import * as cfn_parse from "../../core/lib/helpers-internal";
/**
 * A *schedule* is the main resource you create, configure, and manage using Amazon EventBridge Scheduler.
 *
 * Every schedule has a *schedule expression* that determines when, and with what frequency, the schedule runs. EventBridge Scheduler supports three types of schedules: rate, cron, and one-time schedules. For more information about different schedule types, see [Schedule types](https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html) in the *EventBridge Scheduler User Guide* .
 *
 * When you create a schedule, you configure a target for the schedule to invoke. A target is an API operation that EventBridge Scheduler calls on your behalf every time your schedule runs. EventBridge Scheduler supports two types of targets: *templated* targets invoke common API operations across a core groups of services, and customizeable *universal* targets that you can use to call more than 6,000 operations across over 270 services. For more information about configuring targets, see [Managing targets](https://docs.aws.amazon.com/scheduler/latest/UserGuide/managing-targets.html) in the *EventBridge Scheduler User Guide* .
 *
 * For more information about managing schedules, changing the schedule state, setting up flexible time windows, and configuring a dead-letter queue for a schedule, see [Managing a schedule](https://docs.aws.amazon.com/scheduler/latest/UserGuide/managing-schedule.html) in the *EventBridge Scheduler User Guide* .
 *
 * @cloudformationResource AWS::Scheduler::Schedule
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html
 */
export declare class CfnSchedule extends cdk.CfnResource implements cdk.IInspectable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnSchedule from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnSchedule;
    /**
     * The Amazon Resource Name (ARN) for the Amazon EventBridge Scheduler schedule.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The description you specify for the schedule.
     */
    description?: string;
    /**
     * The date, in UTC, before which the schedule can invoke its target.
     */
    endDate?: string;
    /**
     * Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.
     */
    flexibleTimeWindow: CfnSchedule.FlexibleTimeWindowProperty | cdk.IResolvable;
    /**
     * The name of the schedule group associated with this schedule.
     */
    groupName?: string;
    /**
     * The Amazon Resource Name (ARN) for the customer managed KMS key that EventBridge Scheduler will use to encrypt and decrypt your data.
     */
    kmsKeyArn?: string;
    /**
     * The name of the schedule.
     */
    name?: string;
    /**
     * The expression that defines when the schedule runs. The following formats are supported.
     */
    scheduleExpression: string;
    /**
     * The timezone in which the scheduling expression is evaluated.
     */
    scheduleExpressionTimezone?: string;
    /**
     * The date, in UTC, after which the schedule can begin invoking its target.
     */
    startDate?: string;
    /**
     * Specifies whether the schedule is enabled or disabled.
     */
    state?: string;
    /**
     * The schedule's target details.
     */
    target: cdk.IResolvable | CfnSchedule.TargetProperty;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props: CfnScheduleProps);
    protected get cfnProperties(): Record<string, any>;
    /**
     * Examines the CloudFormation resource and discloses attributes
     *
     * @param inspector tree inspector to collect and process attributes
     */
    inspect(inspector: cdk.TreeInspector): void;
    protected renderProperties(props: Record<string, any>): Record<string, any>;
}
export declare namespace CfnSchedule {
    /**
     * The schedule's target.
     *
     * EventBridge Scheduler supports templated target that invoke common API operations, as well as universal targets that you can customize to invoke over 6,000 API operations across more than 270 services. You can only specify one templated or universal target for a schedule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-target.html
     */
    interface TargetProperty {
        /**
         * The Amazon Resource Name (ARN) of the target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-target.html#cfn-scheduler-schedule-target-arn
         */
        readonly arn: string;
        /**
         * An object that contains information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule.
         *
         * If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-target.html#cfn-scheduler-schedule-target-deadletterconfig
         */
        readonly deadLetterConfig?: CfnSchedule.DeadLetterConfigProperty | cdk.IResolvable;
        /**
         * The templated target type for the Amazon ECS [`RunTask`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) API operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-target.html#cfn-scheduler-schedule-target-ecsparameters
         */
        readonly ecsParameters?: CfnSchedule.EcsParametersProperty | cdk.IResolvable;
        /**
         * The templated target type for the EventBridge [`PutEvents`](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html) API operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-target.html#cfn-scheduler-schedule-target-eventbridgeparameters
         */
        readonly eventBridgeParameters?: CfnSchedule.EventBridgeParametersProperty | cdk.IResolvable;
        /**
         * The text, or well-formed JSON, passed to the target.
         *
         * If you are configuring a templated Lambda , AWS Step Functions , or Amazon EventBridge target, the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, Amazon EventBridge Scheduler delivers a default notification to the target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-target.html#cfn-scheduler-schedule-target-input
         */
        readonly input?: string;
        /**
         * The templated target type for the Amazon Kinesis [`PutRecord`](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html) API operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-target.html#cfn-scheduler-schedule-target-kinesisparameters
         */
        readonly kinesisParameters?: cdk.IResolvable | CfnSchedule.KinesisParametersProperty;
        /**
         * A `RetryPolicy` object that includes information about the retry policy settings, including the maximum age of an event, and the maximum number of times EventBridge Scheduler will try to deliver the event to a target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-target.html#cfn-scheduler-schedule-target-retrypolicy
         */
        readonly retryPolicy?: cdk.IResolvable | CfnSchedule.RetryPolicyProperty;
        /**
         * The Amazon Resource Name (ARN) of the IAM role that EventBridge Scheduler will use for this target when the schedule is invoked.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-target.html#cfn-scheduler-schedule-target-rolearn
         */
        readonly roleArn: string;
        /**
         * The templated target type for the Amazon SageMaker [`StartPipelineExecution`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html) API operation.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-target.html#cfn-scheduler-schedule-target-sagemakerpipelineparameters
         */
        readonly sageMakerPipelineParameters?: cdk.IResolvable | CfnSchedule.SageMakerPipelineParametersProperty;
        /**
         * The templated target type for the Amazon SQS [`SendMessage`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html) API operation. Contains the message group ID to use when the target is a FIFO queue. If you specify an Amazon SQS FIFO queue as a target, the queue must have content-based deduplication enabled. For more information, see [Using the Amazon SQS message deduplication ID](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html) in the *Amazon SQS Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-target.html#cfn-scheduler-schedule-target-sqsparameters
         */
        readonly sqsParameters?: cdk.IResolvable | CfnSchedule.SqsParametersProperty;
    }
    /**
     * The templated target type for the Amazon SQS [`SendMessage`](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html) API operation. Contains the message group ID to use when the target is a FIFO queue. If you specify an Amazon SQS FIFO queue as a target, the queue must have content-based deduplication enabled. For more information, see [Using the Amazon SQS message deduplication ID](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html) in the *Amazon SQS Developer Guide* .
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-sqsparameters.html
     */
    interface SqsParametersProperty {
        /**
         * The FIFO message group ID to use as the target.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-sqsparameters.html#cfn-scheduler-schedule-sqsparameters-messagegroupid
         */
        readonly messageGroupId?: string;
    }
    /**
     * An object that contains information about an Amazon SQS queue that EventBridge Scheduler uses as a dead-letter queue for your schedule.
     *
     * If specified, EventBridge Scheduler delivers failed events that could not be successfully delivered to a target to the queue.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-deadletterconfig.html
     */
    interface DeadLetterConfigProperty {
        /**
         * The Amazon Resource Name (ARN) of the SQS queue specified as the destination for the dead-letter queue.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-deadletterconfig.html#cfn-scheduler-schedule-deadletterconfig-arn
         */
        readonly arn?: string;
    }
    /**
     * The templated target type for the Amazon ECS [`RunTask`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) API operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html
     */
    interface EcsParametersProperty {
        /**
         * The capacity provider strategy to use for the task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html#cfn-scheduler-schedule-ecsparameters-capacityproviderstrategy
         */
        readonly capacityProviderStrategy?: Array<CfnSchedule.CapacityProviderStrategyItemProperty | cdk.IResolvable> | cdk.IResolvable;
        /**
         * Specifies whether to enable Amazon ECS managed tags for the task.
         *
         * For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the *Amazon ECS Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html#cfn-scheduler-schedule-ecsparameters-enableecsmanagedtags
         */
        readonly enableEcsManagedTags?: boolean | cdk.IResolvable;
        /**
         * Whether or not to enable the execute command functionality for the containers in this task.
         *
         * If true, this enables execute command functionality on all containers in the task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html#cfn-scheduler-schedule-ecsparameters-enableexecutecommand
         */
        readonly enableExecuteCommand?: boolean | cdk.IResolvable;
        /**
         * Specifies an Amazon ECS task group for the task.
         *
         * The maximum length is 255 characters.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html#cfn-scheduler-schedule-ecsparameters-group
         */
        readonly group?: string;
        /**
         * Specifies the launch type on which your task is running.
         *
         * The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The `FARGATE` value is supported only in the Regions where Fargate with Amazon ECS is supported. For more information, see [AWS Fargate on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html) in the *Amazon ECS Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html#cfn-scheduler-schedule-ecsparameters-launchtype
         */
        readonly launchType?: string;
        /**
         * This structure specifies the network configuration for an ECS task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html#cfn-scheduler-schedule-ecsparameters-networkconfiguration
         */
        readonly networkConfiguration?: cdk.IResolvable | CfnSchedule.NetworkConfigurationProperty;
        /**
         * An array of placement constraint objects to use for the task.
         *
         * You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html#cfn-scheduler-schedule-ecsparameters-placementconstraints
         */
        readonly placementConstraints?: Array<cdk.IResolvable | CfnSchedule.PlacementConstraintProperty> | cdk.IResolvable;
        /**
         * The task placement strategy for a task or service.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html#cfn-scheduler-schedule-ecsparameters-placementstrategy
         */
        readonly placementStrategy?: Array<cdk.IResolvable | CfnSchedule.PlacementStrategyProperty> | cdk.IResolvable;
        /**
         * Specifies the platform version for the task.
         *
         * Specify only the numeric portion of the platform version, such as `1.1.0` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html#cfn-scheduler-schedule-ecsparameters-platformversion
         */
        readonly platformVersion?: string;
        /**
         * Specifies whether to propagate the tags from the task definition to the task.
         *
         * If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the Amazon ECS [`TagResource`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html) API action.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html#cfn-scheduler-schedule-ecsparameters-propagatetags
         */
        readonly propagateTags?: string;
        /**
         * The reference ID to use for the task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html#cfn-scheduler-schedule-ecsparameters-referenceid
         */
        readonly referenceId?: string;
        /**
         * The metadata that you apply to the task to help you categorize and organize them.
         *
         * Each tag consists of a key and an optional value, both of which you define. For more information, see [`RunTask`](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) in the *Amazon ECS API Reference* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html#cfn-scheduler-schedule-ecsparameters-tags
         */
        readonly tags?: any;
        /**
         * The number of tasks to create based on `TaskDefinition` .
         *
         * The default is `1` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html#cfn-scheduler-schedule-ecsparameters-taskcount
         */
        readonly taskCount?: number;
        /**
         * The Amazon Resource Name (ARN) of the task definition to use if the event target is an Amazon ECS task.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-ecsparameters.html#cfn-scheduler-schedule-ecsparameters-taskdefinitionarn
         */
        readonly taskDefinitionArn: string;
    }
    /**
     * An object representing a constraint on task placement.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-placementconstraint.html
     */
    interface PlacementConstraintProperty {
        /**
         * A cluster query language expression to apply to the constraint.
         *
         * You cannot specify an expression if the constraint type is `distinctInstance` . For more information, see [Cluster query language](https://docs.aws.amazon.com/latest/developerguide/cluster-query-language.html) in the *Amazon ECS Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-placementconstraint.html#cfn-scheduler-schedule-placementconstraint-expression
         */
        readonly expression?: string;
        /**
         * The type of constraint.
         *
         * Use `distinctInstance` to ensure that each task in a particular group is running on a different container instance. Use `memberOf` to restrict the selection to a group of valid candidates.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-placementconstraint.html#cfn-scheduler-schedule-placementconstraint-type
         */
        readonly type?: string;
    }
    /**
     * The task placement strategy for a task or service.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-placementstrategy.html
     */
    interface PlacementStrategyProperty {
        /**
         * The field to apply the placement strategy against.
         *
         * For the spread placement strategy, valid values are `instanceId` (or `instanceId` , which has the same effect), or any platform or custom attribute that is applied to a container instance, such as `attribute:ecs.availability-zone` . For the binpack placement strategy, valid values are `cpu` and `memory` . For the random placement strategy, this field is not used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-placementstrategy.html#cfn-scheduler-schedule-placementstrategy-field
         */
        readonly field?: string;
        /**
         * The type of placement strategy.
         *
         * The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-placementstrategy.html#cfn-scheduler-schedule-placementstrategy-type
         */
        readonly type?: string;
    }
    /**
     * The details of a capacity provider strategy.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-capacityproviderstrategyitem.html
     */
    interface CapacityProviderStrategyItemProperty {
        /**
         * The base value designates how many tasks, at a minimum, to run on the specified capacity provider.
         *
         * Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of `0` is used.
         *
         * @default - 0
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-capacityproviderstrategyitem.html#cfn-scheduler-schedule-capacityproviderstrategyitem-base
         */
        readonly base?: number;
        /**
         * The short name of the capacity provider.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-capacityproviderstrategyitem.html#cfn-scheduler-schedule-capacityproviderstrategyitem-capacityprovider
         */
        readonly capacityProvider: string;
        /**
         * The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider.
         *
         * The weight value is taken into consideration after the base value, if defined, is satisfied.
         *
         * @default - 0
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-capacityproviderstrategyitem.html#cfn-scheduler-schedule-capacityproviderstrategyitem-weight
         */
        readonly weight?: number;
    }
    /**
     * Specifies the network configuration for an ECS task.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-networkconfiguration.html
     */
    interface NetworkConfigurationProperty {
        /**
         * Specifies the Amazon VPC subnets and security groups for the task, and whether a public IP address is to be used.
         *
         * This structure is relevant only for ECS tasks that use the awsvpc network mode.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-networkconfiguration.html#cfn-scheduler-schedule-networkconfiguration-awsvpcconfiguration
         */
        readonly awsvpcConfiguration?: CfnSchedule.AwsVpcConfigurationProperty | cdk.IResolvable;
    }
    /**
     * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used.
     *
     * This structure is relevant only for ECS tasks that use the awsvpc network mode.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-awsvpcconfiguration.html
     */
    interface AwsVpcConfigurationProperty {
        /**
         * Specifies whether the task's elastic network interface receives a public IP address.
         *
         * You can specify `ENABLED` only when `LaunchType` in `EcsParameters` is set to `FARGATE` .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-awsvpcconfiguration.html#cfn-scheduler-schedule-awsvpcconfiguration-assignpublicip
         */
        readonly assignPublicIp?: string;
        /**
         * Specifies the security groups associated with the task.
         *
         * These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-awsvpcconfiguration.html#cfn-scheduler-schedule-awsvpcconfiguration-securitygroups
         */
        readonly securityGroups?: Array<string>;
        /**
         * Specifies the subnets associated with the task.
         *
         * These subnets must all be in the same VPC. You can specify as many as 16 subnets.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-awsvpcconfiguration.html#cfn-scheduler-schedule-awsvpcconfiguration-subnets
         */
        readonly subnets: Array<string>;
    }
    /**
     * The templated target type for the EventBridge [`PutEvents`](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html) API operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-eventbridgeparameters.html
     */
    interface EventBridgeParametersProperty {
        /**
         * A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-eventbridgeparameters.html#cfn-scheduler-schedule-eventbridgeparameters-detailtype
         */
        readonly detailType: string;
        /**
         * The source of the event.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-eventbridgeparameters.html#cfn-scheduler-schedule-eventbridgeparameters-source
         */
        readonly source: string;
    }
    /**
     * The templated target type for the Amazon Kinesis [`PutRecord`](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_PutRecord.html) API operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-kinesisparameters.html
     */
    interface KinesisParametersProperty {
        /**
         * Specifies the shard to which EventBridge Scheduler sends the event.
         *
         * For more information, see [Amazon Kinesis Data Streams terminology and concepts](https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html) in the *Amazon Kinesis Streams Developer Guide* .
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-kinesisparameters.html#cfn-scheduler-schedule-kinesisparameters-partitionkey
         */
        readonly partitionKey: string;
    }
    /**
     * The templated target type for the Amazon SageMaker [`StartPipelineExecution`](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StartPipelineExecution.html) API operation.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-sagemakerpipelineparameters.html
     */
    interface SageMakerPipelineParametersProperty {
        /**
         * List of parameter names and values to use when executing the SageMaker Model Building Pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-sagemakerpipelineparameters.html#cfn-scheduler-schedule-sagemakerpipelineparameters-pipelineparameterlist
         */
        readonly pipelineParameterList?: Array<cdk.IResolvable | CfnSchedule.SageMakerPipelineParameterProperty> | cdk.IResolvable;
    }
    /**
     * The name and value pair of a parameter to use to start execution of a SageMaker Model Building Pipeline.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-sagemakerpipelineparameter.html
     */
    interface SageMakerPipelineParameterProperty {
        /**
         * Name of parameter to start execution of a SageMaker Model Building Pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-sagemakerpipelineparameter.html#cfn-scheduler-schedule-sagemakerpipelineparameter-name
         */
        readonly name: string;
        /**
         * Value of parameter to start execution of a SageMaker Model Building Pipeline.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-sagemakerpipelineparameter.html#cfn-scheduler-schedule-sagemakerpipelineparameter-value
         */
        readonly value: string;
    }
    /**
     * A `RetryPolicy` object that includes information about the retry policy settings, including the maximum age of an event, and the maximum number of times EventBridge Scheduler will try to deliver the event to a target.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-retrypolicy.html
     */
    interface RetryPolicyProperty {
        /**
         * The maximum amount of time, in seconds, to continue to make retry attempts.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-retrypolicy.html#cfn-scheduler-schedule-retrypolicy-maximumeventageinseconds
         */
        readonly maximumEventAgeInSeconds?: number;
        /**
         * The maximum number of retry attempts to make before the request fails.
         *
         * Retry attempts with exponential backoff continue until either the maximum number of attempts is made or until the duration of the `MaximumEventAgeInSeconds` is reached.
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-retrypolicy.html#cfn-scheduler-schedule-retrypolicy-maximumretryattempts
         */
        readonly maximumRetryAttempts?: number;
    }
    /**
     * Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.
     *
     * @struct
     * @stability external
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-flexibletimewindow.html
     */
    interface FlexibleTimeWindowProperty {
        /**
         * The maximum time window during which a schedule can be invoked.
         *
         * *Minimum* : `1`
         *
         * *Maximum* : `1440`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-flexibletimewindow.html#cfn-scheduler-schedule-flexibletimewindow-maximumwindowinminutes
         */
        readonly maximumWindowInMinutes?: number;
        /**
         * Determines whether the schedule is invoked within a flexible time window.
         *
         * You must use quotation marks when you specify this value in your JSON or YAML template.
         *
         * *Allowed Values* : `"OFF"` | `"FLEXIBLE"`
         *
         * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-scheduler-schedule-flexibletimewindow.html#cfn-scheduler-schedule-flexibletimewindow-mode
         */
        readonly mode: string;
    }
}
/**
 * Properties for defining a `CfnSchedule`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html
 */
export interface CfnScheduleProps {
    /**
     * The description you specify for the schedule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html#cfn-scheduler-schedule-description
     */
    readonly description?: string;
    /**
     * The date, in UTC, before which the schedule can invoke its target.
     *
     * Depending on the schedule's recurrence expression, invocations might stop on, or before, the `EndDate` you specify.
     * EventBridge Scheduler ignores `EndDate` for one-time schedules.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html#cfn-scheduler-schedule-enddate
     */
    readonly endDate?: string;
    /**
     * Allows you to configure a time window during which EventBridge Scheduler invokes the schedule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html#cfn-scheduler-schedule-flexibletimewindow
     */
    readonly flexibleTimeWindow: CfnSchedule.FlexibleTimeWindowProperty | cdk.IResolvable;
    /**
     * The name of the schedule group associated with this schedule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html#cfn-scheduler-schedule-groupname
     */
    readonly groupName?: string;
    /**
     * The Amazon Resource Name (ARN) for the customer managed KMS key that EventBridge Scheduler will use to encrypt and decrypt your data.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html#cfn-scheduler-schedule-kmskeyarn
     */
    readonly kmsKeyArn?: string;
    /**
     * The name of the schedule.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html#cfn-scheduler-schedule-name
     */
    readonly name?: string;
    /**
     * The expression that defines when the schedule runs. The following formats are supported.
     *
     * - `at` expression - `at(yyyy-mm-ddThh:mm:ss)`
     * - `rate` expression - `rate(value unit)`
     * - `cron` expression - `cron(fields)`
     *
     * You can use `at` expressions to create one-time schedules that invoke a target once, at the time and in the time zone, that you specify. You can use `rate` and `cron` expressions to create recurring schedules. Rate-based schedules are useful when you want to invoke a target at regular intervals, such as every 15 minutes or every five days. Cron-based schedules are useful when you want to invoke a target periodically at a specific time, such as at 8:00 am (UTC+0) every 1st day of the month.
     *
     * A `cron` expression consists of six fields separated by white spaces: `(minutes hours day_of_month month day_of_week year)` .
     *
     * A `rate` expression consists of a *value* as a positive integer, and a *unit* with the following options: `minute` | `minutes` | `hour` | `hours` | `day` | `days`
     *
     * For more information and examples, see [Schedule types on EventBridge Scheduler](https://docs.aws.amazon.com/scheduler/latest/UserGuide/schedule-types.html) in the *EventBridge Scheduler User Guide* .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html#cfn-scheduler-schedule-scheduleexpression
     */
    readonly scheduleExpression: string;
    /**
     * The timezone in which the scheduling expression is evaluated.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html#cfn-scheduler-schedule-scheduleexpressiontimezone
     */
    readonly scheduleExpressionTimezone?: string;
    /**
     * The date, in UTC, after which the schedule can begin invoking its target.
     *
     * Depending on the schedule's recurrence expression, invocations might occur on, or after, the `StartDate` you specify.
     * EventBridge Scheduler ignores `StartDate` for one-time schedules.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html#cfn-scheduler-schedule-startdate
     */
    readonly startDate?: string;
    /**
     * Specifies whether the schedule is enabled or disabled.
     *
     * *Allowed Values* : `ENABLED` | `DISABLED`
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html#cfn-scheduler-schedule-state
     */
    readonly state?: string;
    /**
     * The schedule's target details.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedule.html#cfn-scheduler-schedule-target
     */
    readonly target: cdk.IResolvable | CfnSchedule.TargetProperty;
}
/**
 * A *schedule group* is an Amazon EventBridge Scheduler resource you use to organize your schedules.
 *
 * Your AWS account comes with a `default` scheduler group. You associate a new schedule with the `default` group or with schedule groups that you create and manage. You can create up to [500 schedule groups](https://docs.aws.amazon.com/scheduler/latest/UserGuide/scheduler-quotas.html) in your AWS account. With EventBridge Scheduler, you apply [tags](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) to schedule groups, not to individual schedules to organize your resources.
 *
 * For more information about managing schedule groups, see [Managing a schedule group](https://docs.aws.amazon.com/scheduler/latest/UserGuide/managing-schedule-group.html) in the *EventBridge Scheduler User Guide* .
 *
 * @cloudformationResource AWS::Scheduler::ScheduleGroup
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedulegroup.html
 */
export declare class CfnScheduleGroup extends cdk.CfnResource implements cdk.IInspectable, cdk.ITaggable {
    /**
     * The CloudFormation resource type name for this resource class.
     */
    static readonly CFN_RESOURCE_TYPE_NAME: string;
    /**
     * Build a CfnScheduleGroup from CloudFormation properties
     *
     * A factory method that creates a new instance of this class from an object
     * containing the CloudFormation properties of this resource.
     * Used in the @aws-cdk/cloudformation-include module.
     *
     * @internal
     */
    static _fromCloudFormation(scope: constructs.Construct, id: string, resourceAttributes: any, options: cfn_parse.FromCloudFormationOptions): CfnScheduleGroup;
    /**
     * The Amazon Resource Name (ARN) of the schedule group.
     *
     * @cloudformationAttribute Arn
     */
    readonly attrArn: string;
    /**
     * The date and time at which the schedule group was created.
     *
     * @cloudformationAttribute CreationDate
     */
    readonly attrCreationDate: string;
    /**
     * The time at which the schedule group was last modified.
     *
     * @cloudformationAttribute LastModificationDate
     */
    readonly attrLastModificationDate: string;
    /**
     * Specifies the state of the schedule group.
     *
     * *Allowed Values* : `ACTIVE` | `DELETING`
     *
     * @cloudformationAttribute State
     */
    readonly attrState: string;
    /**
     * The name of the schedule group.
     */
    name?: string;
    /**
     * Tag Manager which manages the tags for this resource
     */
    readonly tags: cdk.TagManager;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tagsRaw?: Array<cdk.CfnTag>;
    /**
     * @param scope Scope in which this resource is defined
     * @param id Construct identifier for this resource (unique in its scope)
     * @param props Resource properties
     */
    constructor(scope: constructs.Construct, id: string, props?: CfnScheduleGroupProps);
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
 * Properties for defining a `CfnScheduleGroup`
 *
 * @struct
 * @stability external
 * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedulegroup.html
 */
export interface CfnScheduleGroupProps {
    /**
     * The name of the schedule group.
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedulegroup.html#cfn-scheduler-schedulegroup-name
     */
    readonly name?: string;
    /**
     * An array of key-value pairs to apply to this resource.
     *
     * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) .
     *
     * @see http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-scheduler-schedulegroup.html#cfn-scheduler-schedulegroup-tags
     */
    readonly tags?: Array<cdk.CfnTag>;
}
